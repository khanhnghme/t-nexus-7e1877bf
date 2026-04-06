"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [86787], {
        83966: (e, t, n) => {
            n.d(t, {
                y: () => l
            });
            var o = n(296540),
                i = n(474848);
            let r = {
                minWidth: 300
            };

            function l(e) {
                let {
                    module: t
                } = e, l = (0, o.useMemo)(() => {
                    var e;
                    let o = n(255755).y[t.type];
                    return null == o || null == (e = o.getErrorMessage) ? void 0 : e.call(o, t)
                }, [t]);
                return l ? (0, i.jsx)(n(51831).m, {
                    textWrap: !0,
                    style: r,
                    content: () => l,
                    children: e => (0, i.jsx)("span", { ...e,
                        children: (0, i.jsx)(n(16275).I, {
                            icon: n(143896).exclamationMarkTriangleFillSmallIcon,
                            size: "sm",
                            colorVariant: "accentPrimary",
                            colorPalette: "red"
                        })
                    })
                }) : null
            }
        },
        117778: (e, t, n) => {
            n.d(t, {
                P: () => i
            });
            var o = n(296540);

            function i({
                isLoadingConnection: e,
                isOAuthProcessing: t,
                authenticationMethod: r
            }) {
                let [l, s] = (0, o.useState)(!1), [a, d] = (0, o.useState)(!1), c = e || t || l, u = function({
                    isOAuthProcessing: e,
                    isCompletingOAuthFlow: t,
                    authenticationMethod: o
                }) {
                    return e || t ? "oauth" : void 0 !== o && n(12385).IK.includes(o) ? "headerAuth" : "default"
                }({
                    isOAuthProcessing: t,
                    isCompletingOAuthFlow: a,
                    authenticationMethod: r
                });
                (0, o.useEffect)(() => {
                    t && d(!0)
                }, [t]);
                let p = (0, o.useCallback)(() => {
                        s(!1), d(!1)
                    }, []),
                    m = (0, o.useCallback)(() => {
                        s(!0)
                    }, []);
                return {
                    showConnectingState: c,
                    variant: u,
                    resetConnectionState: p,
                    handleConnectionStarted: m,
                    handleConnectionSuccess: (0, o.useCallback)(() => {
                        s(!0)
                    }, []),
                    handleConnectionFailure: (0, o.useCallback)(() => {
                        s(!1), d(!1)
                    }, [])
                }
            }
        },
        128115: (e, t, n) => {
            n.r(t), n.d(t, {
                WorkflowModuleConfiguration: () => i
            }), n(16280), n(296540);
            var o = n(474848);

            function i(e) {
                var t;
                let {
                    isInTranscript: i,
                    module: r,
                    removeModule: l,
                    saveConfigVariable: s,
                    saveModule: a,
                    store: d,
                    workflowDefinitionPointer: c,
                    workflowModuleStore: u,
                    workflow: p,
                    onAuthComplete: m
                } = e, f = (0, n(684551).i)({
                    module: (0, n(635270).yC)(r),
                    store: d
                }), g = (0, n(642157).p2)(f), h = (t = i, (0, n(960253).I)(() => ({
                    container: {
                        display: "flex",
                        gap: 2,
                        flexDirection: "column",
                        marginInlineStart: 26 * !t,
                        marginBlockEnd: 8 * !!t
                    }
                }), [t])), x = n(255755).y[r.type];
                if (!x) throw Error(`Module definition not found for module ${r.type}`);
                if (x.ModuleConfiguration) {
                    let {
                        ModuleConfiguration: e
                    } = x;
                    return (0, o.jsx)("div", {
                        style: h.container,
                        children: (0, o.jsx)(e, {
                            isInTranscript: i,
                            module: r,
                            removeModule: l,
                            saveConfigVariable: s,
                            saveModule: a,
                            store: d,
                            userHasEditAccess: g,
                            workflowDefinitionPointer: c,
                            workflowModuleStore: u,
                            workflow: p,
                            onAuthComplete: m
                        })
                    })
                }
                return null
            }
        },
        131317: (e, t, n) => {
            n.d(t, {
                K: () => a
            });
            var o = n(296540),
                i = n(474848);
            let r = {
                    flex: 1,
                    overflowY: "auto",
                    minHeight: 0
                },
                l = {
                    display: "none"
                },
                s = {
                    position: "relative"
                };

            function a(e) {
                let {
                    connection: t,
                    spaceViewStore: a,
                    currentUserPointer: c,
                    workflowId: u,
                    existingAgentModules: p,
                    allowedWorkspaceMcpUrls: m,
                    onSuccess: f,
                    onClose: g
                } = e, h = (0, n(533992).v3)(), x = (0, n(109939).tz)(), v = (0, o.useMemo)(() => (0, n(4962).lZ)(), []), y = (0, o.useMemo)(() => new(n(12385)).EE, []), j = (0, n(966887).c)({
                    existingAgentModules: p
                }), w = (0, n(396805).T)(), k = (0, n(541496).H)(t, y), [I, S, b, M, C] = (0, n(682985).K8)(() => [y.canConnect(), y.state.isLoadingConnection, y.state.isOAuthProcessing, y.state.isInitializingAuthentication, y.state.selectedAuthenticationMethod], [y]), {
                    showConnectingState: A,
                    variant: D,
                    resetConnectionState: T,
                    handleConnectionStarted: U,
                    handleConnectionSuccess: V,
                    handleConnectionFailure: E
                } = (0, n(117778).P)({
                    isLoadingConnection: S,
                    isOAuthProcessing: b,
                    authenticationMethod: C
                }), [P, W] = (0, n(682985).K8)(() => [y.state.serverUrlInputStatus, y.state.serverUrl], [y]), L = (0, o.useRef)(void 0);
                (0, o.useEffect)(() => ((0, n(279758).DU)(), y.reset(), T(), () => {
                    (0, n(279758).DU)(), y.reset(), T()
                }), [y, T]), (0, o.useEffect)(() => {
                    W && "valid" === P && L.current !== W && (L.current = W, (0, n(279758).ZF)({
                        store: y,
                        environment: h,
                        intl: x,
                        spaceViewStore: a,
                        existingModuleId: void 0,
                        workflowId: u
                    }))
                }, [h, x, y, a, W, P, u]);
                let _ = (0, o.useCallback)(async () => {
                        if (!I || !W) return;
                        U();
                        let e = "OAuth" === y.state.selectedAuthenticationMethod ? "oauth" : "custom",
                            t = y.state.name || void 0;
                        (0, n(599231).nt)({
                            server_url: W,
                            auth_method: e,
                            workflow_id: u,
                            module_id: void 0,
                            flow_id: v,
                            is_preconfigured_server: !1,
                            server_name: t,
                            has_user_provided_oauth_credentials: !!y.state.userProvidedOAuthClientId
                        });
                        let o = await (0, n(279758).Ng)({
                            store: y,
                            spaceViewStore: a,
                            existingModuleId: void 0,
                            workflowId: u,
                            environment: h,
                            intl: x,
                            currentUserPointer: c,
                            flowId: v,
                            isPreconfiguredServer: !1,
                            serverName: t
                        });
                        if (w.current) {
                            if (!o) return void E();
                            V(), f(o)
                        }
                    }, [I, W, u, v, h, x, c, f, a, y, w, U, V, E]),
                    K = (0, o.useCallback)(e => {
                        e.preventDefault(), _()
                    }, [_]);
                return A ? (0, i.jsx)(n(674513).h, {
                    connection: k,
                    body: (0, i.jsx)(n(360709).c, {
                        connection: k,
                        onCancel: g,
                        variant: D
                    })
                }) : (0, i.jsxs)(n(4458).VP, {
                    className: "autolayout-fill-height autolayout-fill-width",
                    style: s,
                    children: [(0, i.jsx)("div", {
                        style: r,
                        children: (0, i.jsxs)("form", {
                            onSubmit: K,
                            children: [(0, i.jsx)("button", {
                                type: "submit",
                                style: l,
                                tabIndex: -1
                            }), (0, i.jsxs)(n(4458).fI, {
                                gap: 8,
                                paddingInline: 24,
                                paddingTop: 16,
                                alignItems: "center",
                                className: "autolayout-fill-width",
                                style: s,
                                children: [(0, i.jsx)(n(111010).D, {
                                    styleKey: "bodyLgSemibold",
                                    children: t.name
                                }), (0, i.jsx)(n(236578).C, {})]
                            }), (0, i.jsx)(n(4458).VP, {
                                paddingInline: 24,
                                paddingTop: 2,
                                paddingBottom: 12,
                                className: "autolayout-fill-width",
                                style: s,
                                children: (0, i.jsx)(n(111010).D, {
                                    styleKey: "caption",
                                    colorVariant: "tertiary",
                                    children: (0, i.jsx)(n(109939).sA, { ...n(376242).D.customMcpServerTagline
                                    })
                                })
                            }), (0, i.jsx)(n(4458).VP, {
                                paddingInline: 24,
                                paddingTop: 12,
                                className: "autolayout-fill-width",
                                style: s,
                                children: (0, i.jsx)(n(116803).a, {
                                    store: y,
                                    spaceViewStore: a,
                                    existingModuleId: void 0,
                                    workflowId: u,
                                    existingAgentMcpData: j,
                                    allowedWorkspaceMcpUrls: m,
                                    readOnly: !1
                                })
                            })]
                        })
                    }), (0, i.jsx)(d, {
                        isActionEnabled: I,
                        isLoading: M || S && !b,
                        onCancel: g,
                        onConnect: _
                    })]
                })
            }

            function d({
                isActionEnabled: e,
                isLoading: t,
                onCancel: o,
                onConnect: r
            }) {
                return (0, i.jsx)(n(584278).R, {
                    children: (0, i.jsxs)("div", {
                        style: n(485165).MY.footerRow,
                        children: [(0, i.jsx)(n(548436).A, {
                            onClick: o,
                            size: "lg",
                            children: (0, i.jsx)(n(109939).sA, { ...n(376242).D.cancel
                            })
                        }), (0, i.jsx)(n(912946).A, {
                            onClick: r,
                            disabled: !e,
                            size: "lg",
                            colorPalette: "blue",
                            isLoading: t,
                            children: (0, i.jsx)(n(109939).sA, { ...n(376242).D.connect
                            })
                        })]
                    })
                })
            }
        },
        235348: (e, t, n) => {
            n.d(t, {
                r: () => p
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(814603), n(147566), n(198721);
            var o = n(296540);
            n(944114), n(581454);
            var i = n(474848);
            let r = (0, n(109939).YK)({
                    toolsSectionTitle: {
                        id: "mcpToolsList.toolsSectionTitle",
                        defaultMessage: "Tools"
                    },
                    readToolsSectionTitle: {
                        id: "mcpToolsList.readToolsSectionTitle",
                        defaultMessage: "Read tools"
                    },
                    writeToolsSectionTitle: {
                        id: "mcpToolsList.writeToolsSectionTitle",
                        defaultMessage: "Write tools"
                    },
                    toolCount: {
                        id: "mcpToolsList.toolCount",
                        defaultMessage: "{count} {count, plural, one {tool} other {tools}}"
                    },
                    noTools: {
                        id: "mcpToolsList.noTools",
                        defaultMessage: "No tools available"
                    },
                    detailsSectionTitle: {
                        id: "mcpToolsList.detailsSectionTitle",
                        defaultMessage: "Details"
                    },
                    addedLabel: {
                        id: "mcpToolsList.addedLabel",
                        defaultMessage: "Added"
                    }
                }),
                l = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 24,
                        paddingBlock: 16,
                        flex: 1,
                        minHeight: 0,
                        width: "100%"
                    },
                    section: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        paddingInline: n(485165).So,
                        alignItems: "flex-start"
                    },
                    toolItem: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        paddingBlock: 8
                    },
                    toolDescription: {
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                    },
                    detailsLabel: {
                        minWidth: 100,
                        flexShrink: 0
                    }
                };

            function s(e) {
                var t, s, a;
                let d, {
                        connection: c,
                        spaceViewStore: u
                    } = e,
                    p = (0, n(109939).tz)(),
                    m = (0, o.useMemo)(() => {
                        var e, t;
                        return (null == (e = c.moduleValue) ? void 0 : e.type) !== "mcpServer" ? [] : (null == (t = c.moduleValue.state) ? void 0 : t.tools) ? ? []
                    }, [c.moduleValue]),
                    f = (0, o.useMemo)(() => {
                        if (0 === m.length) return [];
                        let {
                            readTools: e,
                            writeTools: t
                        } = (0, n(409691).v7)(m);
                        if (!(e.length > 0 && t.length > 0)) return [{
                            title: p.formatMessage(r.toolsSectionTitle),
                            tools: m
                        }];
                        let o = [];
                        return e.length > 0 && o.push({
                            title: p.formatMessage(r.readToolsSectionTitle),
                            tools: e
                        }), t.length > 0 && o.push({
                            title: p.formatMessage(r.writeToolsSectionTitle),
                            tools: t
                        }), o
                    }, [m, p]),
                    g = (t = c.existingModuleId, s = u, a = p, d = (0, n(682985).K8)(() => {
                        if (!t) return;
                        let e = n(496282).L3.fromPointerLike({
                            table: n(832375).yMG,
                            id: t,
                            spaceId: s.getSpaceId()
                        });
                        return n(646139).P.createChildStore(s, e).getCreatedTime()
                    }, [t, s]), (0, o.useMemo)(() => {
                        if (d) return a.formatDate(new Date(d), {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        })
                    }, [d, a]));
                return (0, i.jsxs)(n(136508)._, {
                    type: n(644154).A.Y,
                    style: l.container,
                    children: [0 === m.length ? (0, i.jsx)("div", {
                        style: l.section,
                        children: (0, i.jsx)(n(111010).D, {
                            styleKey: "bodySm",
                            colorVariant: "secondary",
                            children: (0, i.jsx)(n(109939).sA, { ...r.noTools
                            })
                        })
                    }) : f.map(e => (0, i.jsxs)("div", {
                        style: l.section,
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)(n(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "tertiary",
                                children: e.title
                            }), (0, i.jsxs)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "tertiary",
                                children: [" ", (0, i.jsx)(n(109939).sA, { ...r.toolCount,
                                    values: {
                                        count: e.tools.length
                                    }
                                })]
                            })]
                        }), (0, i.jsx)(n(4458).VP, {
                            gap: 4,
                            children: e.tools.map(e => (0, i.jsxs)("div", {
                                style: l.toolItem,
                                children: [(0, i.jsx)(n(111010).D, {
                                    styleKey: "bodySmMedium",
                                    children: e.title || e.name
                                }), e.description ? (0, i.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    style: l.toolDescription,
                                    children: e.description
                                }) : void 0]
                            }, e.name))
                        })]
                    }, e.title)), g ? (0, i.jsxs)("div", {
                        style: l.section,
                        children: [(0, i.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "tertiary",
                            children: (0, i.jsx)(n(109939).sA, { ...r.detailsSectionTitle
                            })
                        }), (0, i.jsx)(n(4458).VP, {
                            gap: 8,
                            alignItems: "flex-start",
                            children: (0, i.jsxs)(n(4458).fI, {
                                alignItems: "baseline",
                                gap: 8,
                                children: [(0, i.jsx)(n(111010).D, {
                                    styleKey: "bodySm",
                                    colorVariant: "secondary",
                                    style: l.detailsLabel,
                                    children: (0, i.jsx)(n(109939).sA, { ...r.addedLabel
                                    })
                                }), (0, i.jsx)(n(111010).D, {
                                    styleKey: "bodySm",
                                    children: g
                                })]
                            })
                        })]
                    }) : void 0]
                })
            }
            let a = new Set(["api.githubcopilot.com"]),
                d = {
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto"
                },
                c = {
                    paddingInline: 24,
                    paddingBlock: 16
                },
                u = {
                    display: "none"
                };

            function p(e) {
                let {
                    connection: t,
                    spaceViewStore: r,
                    workflowStore: l,
                    sharedWarning: p,
                    currentUserPointer: f,
                    workflowId: g,
                    existingAgentModules: h,
                    onSuccess: x,
                    onClose: v,
                    onDisconnect: y,
                    isAdded: j
                } = e, w = (0, n(533992).v3)(), k = (0, n(109939).tz)(), I = (0, o.useMemo)(() => (0, n(4962).lZ)(), []), S = (0, o.useMemo)(() => new(n(12385)).EE, []), b = !!t.isPreconfigured, M = (0, n(966887).c)({
                    existingAgentModules: h
                }), [C, A] = (0, o.useState)(!1), D = (0, n(396805).T)(), T = (0, n(541496).H)(t, S), [U, V, E, P, W] = (0, n(682985).K8)(() => [S.canConnect(), S.state.isLoadingConnection, S.state.isOAuthProcessing, S.state.isInitializingAuthentication, S.state.selectedAuthenticationMethod], [S]), {
                    showConnectingState: L,
                    variant: _,
                    resetConnectionState: K,
                    handleConnectionStarted: R,
                    handleConnectionSuccess: B,
                    handleConnectionFailure: N
                } = (0, n(117778).P)({
                    isLoadingConnection: V,
                    isOAuthProcessing: E,
                    authenticationMethod: W
                }), [z, O] = (0, n(682985).K8)(() => [S.state.serverUrlInputStatus, S.state.serverUrl], [S]), Y = (0, o.useRef)(void 0), H = (0, n(617168).y)({
                    moduleValue: t.moduleValue,
                    existingModuleId: t.existingModuleId,
                    hasExternalConnection: t.hasExternalConnection,
                    hasDuplicateUrl: t.hasDuplicateUrl,
                    isAdded: j
                }), F = (0, n(899849).G3)({
                    connection: t,
                    connectionStatus: H,
                    isPending: !1,
                    isConnecting: L,
                    canConnect: U
                }), G = (0, n(899849).G3)({
                    connection: t,
                    connectionStatus: H,
                    isPending: !1,
                    isConnecting: L
                }), Z = "disabled" === t.visibility ? (0, i.jsx)(n(109939).sA, { ...n(376242).D.disabledPreconfiguredMcpTooltip
                }) : void 0, $ = (0, o.useMemo)(() => {
                    if (!t.url || "connected" === H) return !1;
                    try {
                        return a.has(new URL(t.url).hostname.toLowerCase())
                    } catch {
                        return !1
                    }
                }, [t.url, H]);
                (0, o.useEffect)(() => {
                    (0, n(279758).DU)(), S.reset(), A(!1), K();
                    let e = t.url ? ? "",
                        o = t.serverIconUrl ? ? t.iconUrl;
                    if (o && S.setServerIconUrl(o), t.serverUrlConfig && S.setServerUrlConfig(t.serverUrlConfig), t.serverUrlConfig) S.setServerUrlInputStatus("none");
                    else {
                        let {
                            status: o,
                            errorMessage: i
                        } = (0, n(292139).Z)({
                            serverUrl: e,
                            existingModuleId: t.existingModuleId,
                            existingAgentMcpUrls: M.urls,
                            intl: k
                        });
                        S.setServerUrlInputStatus(o), S.setServerUrlErrorMessage(i)
                    }
                    return S.setNameErrorMessage(void 0), () => {
                        (0, n(279758).DU)(), S.reset(), K()
                    }
                }, [t, M, k, b, S, K]), (0, n(351).G)({
                    existingModuleId: t.existingModuleId,
                    spaceViewStore: r,
                    initialName: t.name,
                    initialUrl: t.url,
                    initialServerUrlConfig: t.serverUrlConfig,
                    isOpen: !0,
                    store: S
                }), (0, o.useEffect)(() => {
                    Y.current = void 0
                }, [t.id]), (0, o.useEffect)(() => {
                    $ || A(!1)
                }, [$]), (0, o.useEffect)(() => {
                    "connected" === H && A(!1)
                }, [H]), (0, o.useEffect)(() => {
                    O && "valid" === z && "connected" !== H && Y.current !== O && (Y.current = O, (0, n(279758).ZF)({
                        store: S,
                        environment: w,
                        intl: k,
                        spaceViewStore: r,
                        existingModuleId: t.existingModuleId,
                        workflowId: g,
                        resolvedAuthSchemes: b ? t.supportedAuthSchemes : void 0,
                        resolvedOAuthScopes: b ? t.supportedOAuthScopes : void 0
                    }))
                }, [t.existingModuleId, t.supportedAuthSchemes, t.supportedOAuthScopes, H, w, k, b, S, r, O, z, g]);
                let q = (0, o.useCallback)(() => {
                        A(!0)
                    }, []),
                    J = (0, o.useCallback)(() => {
                        A(!1)
                    }, []),
                    X = (0, o.useCallback)(async () => {
                        if (!U || !O) return;
                        R();
                        let e = "OAuth" === S.state.selectedAuthenticationMethod ? "oauth" : "custom",
                            o = S.state.name || void 0;
                        (0, n(599231).nt)({
                            server_url: O,
                            auth_method: e,
                            workflow_id: g,
                            module_id: t.existingModuleId,
                            flow_id: I,
                            is_preconfigured_server: b,
                            server_name: o,
                            has_user_provided_oauth_credentials: !!S.state.userProvidedOAuthClientId
                        });
                        let l = await (0, n(279758).Ng)({
                            store: S,
                            spaceViewStore: r,
                            existingModuleId: t.existingModuleId,
                            workflowId: g,
                            environment: w,
                            intl: k,
                            currentUserPointer: f,
                            flowId: I,
                            isPreconfiguredServer: b,
                            serverName: o
                        });
                        if (D.current) {
                            if (!l) {
                                N(), !$ && S.state.authErrorMessage && n(647095).f1((0, i.jsx)(n(109939).sA, { ...n(376242).D.connectionError,
                                    values: {
                                        detail: S.state.authErrorMessage
                                    }
                                }));
                                return
                            }
                            B(), x(l)
                        }
                    }, [U, O, g, t.existingModuleId, I, w, k, f, b, x, r, S, D, R, B, N, $]),
                    Q = (0, o.useCallback)(e => {
                        e.preventDefault(), X()
                    }, [X]),
                    ee = (0, o.useCallback)(() => {
                        y(t)
                    }, [t, y]);
                if (L) return (0, i.jsx)(n(674513).h, {
                    connection: T,
                    connectionStatus: H,
                    workflowStore: l,
                    body: (0, i.jsx)(n(360709).c, {
                        connection: T,
                        onCancel: v,
                        variant: _
                    })
                });
                if (t.serverUrlConfig && C) return (0, i.jsx)(n(674513).h, {
                    connection: T,
                    connectionStatus: H,
                    workflowStore: l,
                    body: (0, i.jsxs)("form", {
                        onSubmit: Q,
                        style: d,
                        children: [(0, i.jsx)("button", {
                            type: "submit",
                            style: u,
                            tabIndex: -1
                        }), (0, i.jsx)("div", {
                            style: c,
                            children: (0, i.jsx)(n(116803).a, {
                                store: S,
                                spaceViewStore: r,
                                existingModuleId: t.existingModuleId,
                                workflowId: g,
                                existingAgentMcpData: M,
                                readOnly: !1,
                                serverUrlConfig: t.serverUrlConfig
                            })
                        })]
                    }),
                    footer: (0, i.jsx)(m, {
                        isActionEnabled: U,
                        isLoading: P || V && !E,
                        disabledTooltipContent: Z,
                        onCancel: J,
                        onConnect: X,
                        warning: p
                    })
                });
                if ($ && C) return (0, i.jsx)(n(674513).h, {
                    connection: T,
                    connectionStatus: H,
                    workflowStore: l,
                    body: (0, i.jsxs)("form", {
                        onSubmit: Q,
                        style: d,
                        children: [(0, i.jsx)("button", {
                            type: "submit",
                            style: u,
                            tabIndex: -1
                        }), (0, i.jsx)("div", {
                            style: c,
                            children: (0, i.jsx)(n(116803).a, {
                                store: S,
                                spaceViewStore: r,
                                existingModuleId: t.existingModuleId,
                                workflowId: g,
                                existingAgentMcpData: M,
                                readOnly: !!t.url && !t.serverUrlConfig,
                                serverUrlConfig: t.serverUrlConfig
                            })
                        })]
                    }),
                    footer: (0, i.jsx)(m, {
                        isActionEnabled: F,
                        isLoading: P || V && !E,
                        disabledTooltipContent: Z,
                        onCancel: J,
                        onConnect: X,
                        warning: p
                    })
                });
                let et = (0, n(716712).p)(T);
                return (0, i.jsx)(n(674513).h, {
                    connection: T,
                    connectionStatus: H,
                    workflowStore: l,
                    body: et ? (0, i.jsx)(n(469643).y, {
                        connection: T
                    }) : t.serverUrlConfig && "connected" !== H ? void 0 : (0, i.jsx)(s, {
                        connection: T,
                        spaceViewStore: r
                    }),
                    footer: $ || t.serverUrlConfig ? (0, i.jsx)(n(485165).W2, {
                        connectionStatus: H,
                        action: "connect",
                        isActionEnabled: G,
                        disabledTooltipContent: Z,
                        onConnect: q,
                        onDisconnect: ee,
                        warning: p
                    }) : (0, i.jsx)(n(485165).W2, {
                        connectionStatus: H,
                        action: "connect",
                        isActionEnabled: F,
                        isLoading: P || V && !E,
                        disabledTooltipContent: Z,
                        onConnect: X,
                        onDisconnect: ee,
                        warning: p
                    })
                })
            }

            function m({
                isActionEnabled: e,
                isLoading: t,
                disabledTooltipContent: o,
                onCancel: r,
                onConnect: l,
                warning: s
            }) {
                return (0, i.jsx)(n(584278).R, {
                    children: (0, i.jsxs)("div", {
                        style: { ...n(485165).MY.footerRow,
                            ...s && n(485165).MY.footerRowWarningGap
                        },
                        children: [s ? (0, i.jsx)("div", {
                            style: n(485165).MY.warningText,
                            children: s
                        }) : void 0, (0, i.jsxs)(n(4458).fI, {
                            gap: 12,
                            flexShrink: 0,
                            children: [(0, i.jsx)(n(548436).A, {
                                onClick: r,
                                size: "lg",
                                children: (0, i.jsx)(n(109939).sA, { ...n(376242).D.cancel
                                })
                            }), (0, i.jsx)(n(51831).m, {
                                disableTooltip: void 0 === o || e || t,
                                placement: "top",
                                content: () => o ? ? null,
                                children: o => (0, i.jsx)(n(912946).A, { ...o,
                                    onClick: l,
                                    disabled: !e,
                                    size: "lg",
                                    colorPalette: "blue",
                                    isLoading: t,
                                    children: (0, i.jsx)(n(109939).sA, { ...n(376242).D.connect
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
        },
        469643: (e, t, n) => {
            n.d(t, {
                y: () => l
            }), n(581454);
            var o = n(296540),
                i = n(474848);
            let r = {
                container: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    paddingBottom: 16,
                    flex: 1,
                    minHeight: 0,
                    width: "100%"
                },
                bodyPadding: {
                    paddingInline: n(485165).So
                },
                vignette: {
                    width: "100%",
                    aspectRatio: "260 / 111",
                    paddingInline: n(485165).xx,
                    boxSizing: "border-box",
                    flexShrink: 0,
                    animation: "fadeIn 0.2s ease-out"
                },
                vignettePlaceholder: {
                    width: "100%",
                    aspectRatio: "260 / 111",
                    paddingInline: n(485165).xx,
                    boxSizing: "border-box",
                    flexShrink: 0
                },
                overview: {
                    width: "100%",
                    flexShrink: 0,
                    paddingBlock: 6
                },
                section: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    flexShrink: 0
                },
                listIcon: {
                    width: 12,
                    height: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                }
            };

            function l(e) {
                let {
                    connection: t
                } = e, l = (0, o.useMemo)(() => (0, n(716712).p)(t), [t]);
                return (0, i.jsxs)(n(136508)._, {
                    type: n(644154).A.Y,
                    style: r.container,
                    children: [(0, i.jsxs)("div", {
                        children: [null != l && l.vignetteSrc ? (0, i.jsx)("img", {
                            src: l.vignetteSrc,
                            alt: t.shortName ? ? t.name,
                            style: r.vignette
                        }) : (0, i.jsx)("div", {
                            style: r.vignettePlaceholder
                        }), null != l && l.overview ? (0, i.jsx)("div", {
                            style: { ...r.overview,
                                ...r.bodyPadding
                            },
                            children: (0, i.jsx)(n(111010).D, {
                                styleKey: "bodySm",
                                children: (0, i.jsx)(n(109939).sA, { ...l.overview
                                })
                            })
                        }) : void 0]
                    }), l ? l.sections.map(e => (0, i.jsxs)("div", {
                        style: { ...r.section,
                            ...r.bodyPadding
                        },
                        children: [(0, i.jsx)(n(111010).D, {
                            styleKey: "caption",
                            colorVariant: "tertiary",
                            children: (0, i.jsx)(n(109939).sA, { ...e.title
                            })
                        }), (0, i.jsx)(n(4458).VP, {
                            gap: 8,
                            children: e.items.map(t => (0, i.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                children: [(0, i.jsx)("span", {
                                    style: r.listIcon,
                                    children: (0, i.jsx)(n(16275).I, {
                                        icon: e.icon,
                                        size: "xxs",
                                        colorVariant: "secondary"
                                    })
                                }), (0, i.jsx)(n(111010).D, {
                                    styleKey: "bodySm",
                                    children: e.italic ? (0, i.jsx)("em", {
                                        children: (0, i.jsx)(n(109939).sA, { ...t
                                        })
                                    }) : (0, i.jsx)(n(109939).sA, { ...t
                                    })
                                })]
                            }, t.id))
                        })]
                    }, e.title.id)) : void 0]
                })
            }
        },
        541496: (e, t, n) => {
            n.d(t, {
                H: () => i
            });
            var o = n(296540);

            function i(e, t) {
                let [i, r, l] = (0, n(682985).K8)(() => [t.state.name, t.state.serverUrl, t.state.serverIconUrl], [t]);
                return (0, o.useMemo)(() => ({ ...e,
                    name: i || e.name,
                    url: r || e.url,
                    serverIconUrl: l || e.serverIconUrl
                }), [e, i, r, l])
            }
        },
        548078: (e, t, n) => {
            n.d(t, {
                A: () => h
            }), n(944114), n(898992), n(672577);
            var o = n(296540),
                i = n(474848);
            let r = (0, n(109939).YK)({
                    remove: {
                        id: "useMailModuleMenuItems.remove",
                        defaultMessage: "Remove"
                    }
                }),
                l = (0, n(109939).YK)({
                    connect: {
                        id: "useMcpServerMenuItems.connect",
                        defaultMessage: "Connect"
                    },
                    reconnect: {
                        id: "useMcpServerMenuItems.reconnect",
                        defaultMessage: "Reconnect"
                    }
                }),
                s = (0, n(109939).YK)({
                    mcpServerUrl: {
                        defaultMessage: "URL: {url}",
                        id: "workflow.connectionInfo.mcpServerUrl"
                    },
                    connectedBy: {
                        defaultMessage: "Connected by {connectedByName}",
                        id: "workflow.connectionInfo.connectedBy"
                    },
                    lastDeployed: {
                        defaultMessage: "Last deployed {date}",
                        id: "workflow.connectionInfo.lastDeployed"
                    },
                    created: {
                        defaultMessage: "Created {date}",
                        id: "workflow.connectionInfo.created"
                    },
                    openDocs: {
                        defaultMessage: "Open docs",
                        id: "workflow.connectionInfo.openDocs"
                    }
                });

            function a(e) {
                let {
                    url: t
                } = e, [r, l] = (0, o.useState)(!1);
                return (0, i.jsx)(n(111010).D, {
                    styleKey: "bodySm",
                    children: (0, i.jsx)("a", {
                        href: t,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: n(632079).Tj.blue.text.accentPrimary,
                            textDecoration: r ? "underline" : "none",
                            cursor: "pointer"
                        },
                        onMouseEnter: () => l(!0),
                        onMouseLeave: () => l(!1),
                        children: (0, i.jsx)(n(109939).sA, { ...s.openDocs
                        })
                    })
                })
            }
            let d = {
                    wordBreak: "break-all"
                },
                c = {
                    whiteSpace: "normal",
                    wordBreak: "break-word"
                },
                u = ["slack"],
                p = (0, n(109939).YK)({
                    connectLabel: {
                        defaultMessage: "Connect",
                        id: "workflow.moduleSection.connectLabel"
                    },
                    connectToWorkspace: {
                        defaultMessage: "Connect to {workspaceName}",
                        id: "workflow.moduleSection.connectToWorkspace"
                    },
                    existingWorkspace: {
                        defaultMessage: "Workspace",
                        id: "workflow.moduleSection.existingWorkspace"
                    },
                    removeAccessModule: {
                        defaultMessage: "Disconnect",
                        id: "workflow.moduleSection.removeAccessModule"
                    },
                    reconnectModule: {
                        defaultMessage: "Reconnect",
                        id: "workflow.moduleSection.reconnectModule"
                    },
                    removeConfirmMessage: {
                        defaultMessage: "Disconnect this connection?",
                        id: "workflow.moduleSection.removeAccessConfirmation.message"
                    },
                    removeConfirmDescription: {
                        defaultMessage: "Remove connection from this agent permanently. You’ll need to authenticate again to reconnect.",
                        id: "workflow.moduleSection.removeAccessConfirmation.description"
                    },
                    removeConfirmAcceptLabel: {
                        defaultMessage: "Disconnect",
                        id: "workflow.moduleSection.removeAccessConfirmation.acceptLabel"
                    },
                    moreOptions: {
                        defaultMessage: "More…",
                        id: "workflowConfigureModuleMoreMenu.moreOptions"
                    },
                    workerBadge: {
                        defaultMessage: "Worker",
                        id: "workflowConfigureModuleMoreMenu.workerBadge"
                    }
                });

            function m(e, t) {
                var o, r, l;
                if (!(e.needsConnectionPointer && !(null != (o = e.workspaceRestrictionInfo) && o.restricted && e.isModuleValidAndConnected))) return [];
                let s = null != (r = e.workspaceRestrictionInfo) && r.workspaceName ? (0, i.jsx)(n(109939).sA, { ...p.connectToWorkspace,
                    values: {
                        workspaceName: e.workspaceRestrictionInfo.workspaceName
                    }
                }) : (null == t || null == (l = t.getFallbackConnectTitle) ? void 0 : l.call(t, e)) ? ? (0, i.jsx)(n(109939).sA, { ...p.connectLabel
                });
                return [e.hasAsyncConnections ? {
                    key: "workspace-existing-connection",
                    action: () => null,
                    render: (t, o) => (0, i.jsx)(n(816231).A, { ...t,
                        onFocus: o.onFocus,
                        renderExtension: t => e.canCurrentUserUpdateConnection ? (0, i.jsx)("div", { ...t,
                            children: e.connectionsMenu
                        }) : null,
                        children: (t, o) => (0, i.jsx)(n(95582).A, { ...t,
                            ref: o,
                            title: (0, i.jsx)(n(109939).sA, { ...p.existingWorkspace
                            }),
                            icon: (0, i.jsx)(n(16275).I, {
                                icon: n(770985).plugSmallIcon,
                                size: "sm"
                            }),
                            right: e.existingConnectionLabel,
                            rightStyle: e.styles.existingConnectionsItem,
                            disabled: !e.canCurrentUserUpdateConnection,
                            showExtensionArrow: e.canCurrentUserUpdateConnection
                        })
                    })
                } : {
                    key: "workspace-auth-connection",
                    action: () => {
                        e.handleConnect(), e.buttonPopupStore.setState({
                            open: !1
                        })
                    },
                    render: e => (0, i.jsx)(n(95582).A, { ...e,
                        title: s,
                        icon: (0, i.jsx)(n(16275).I, {
                            icon: n(770985).plugSmallIcon,
                            size: "sm"
                        })
                    })
                }]
            }

            function f(e, t) {
                if (!e.canCurrentUserRemoveModule) return [];
                let o = [{
                    key: "removeAccess",
                    action: async () => {
                        await e.handleRemoveAccessModule(), e.buttonPopupStore.setState({
                            open: !1
                        })
                    },
                    render: e => (0, i.jsx)(n(860287).A, { ...e,
                        title: (0, i.jsx)(n(109939).sA, { ...p.removeAccessModule
                        }),
                        svg: () => (0, i.jsx)(n(16275).I, {
                            icon: n(25094).xMarkSmallIcon,
                            size: "sm"
                        }),
                        isRed: !0
                    })
                }];
                return null != t && t.includeReconnect && e.canEditModule && o.push({
                    key: "reconnect",
                    action: () => {
                        e.handleConnect(), e.buttonPopupStore.setState({
                            open: !1
                        })
                    },
                    render: e => (0, i.jsx)(n(860287).A, { ...e,
                        title: (0, i.jsx)(n(109939).sA, { ...p.reconnectModule
                        }),
                        svg: () => (0, i.jsx)(n(16275).I, {
                            icon: n(983012).w,
                            size: "sm"
                        }),
                        isRed: !1
                    })
                }), o
            }
            let g = {
                header: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    minHeight: 28,
                    paddingInline: 12,
                    paddingTop: 8
                },
                headerTitle: {
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                removeAccessButton: {
                    color: n(632079).Tj.red.text.accentPrimary,
                    fontSize: 12,
                    padding: "4px 8px"
                },
                existingConnectionsItem: {
                    color: n(632079).Tj.text.secondary
                }
            };

            function h(e) {
                let {
                    module: t,
                    workflowStore: h
                } = e, x = (0, n(682985).uB)(void 0, n(510969).A), v = (0, n(533992).v3)(), y = (0, n(533992).WS)(), j = (0, n(109939).tz)(), w = n(525975).d.getShortName(t, j) ? ? n(525975).d.getName(t, j), k = h.pointer, I = (0, n(682985).K8)(() => (0, n(646440).getWorkflowDefinitionPointer)({
                    workflowPointer: k
                }), [k]), [S, b] = (0, n(219148).j)({
                    moduleValue: t,
                    workflowDefinitionPointer: I,
                    workflowModuleStore: void 0
                }), {
                    workflowValue: M
                } = (0, n(867587).N)(h, !0), C = (0, n(776568).d)({
                    module: t,
                    workflowValue: M
                }), {
                    createdByUser: A,
                    createdDateString: D,
                    canCurrentUserUpdateConnection: T,
                    canCurrentUserRemoveModule: U
                } = (0, n(184170).x)({
                    module: t,
                    workflowStore: h
                }), V = "worker" === t.type && t.state ? t.state.workerId : void 0, {
                    worker: E
                } = (0, n(930225).r)(V), P = (0, o.useMemo)(() => {
                    var e;
                    if (!(0, n(190934).qW)(t.type)) return;
                    let o = null == (e = t.permissions) ? void 0 : e.find(e => e.type === t.type);
                    return "string" == typeof(null == o ? void 0 : o.identifier) ? o.identifier : void 0
                }, [t]), W = (0, n(682985).K8)(() => {
                    let e = n(728372).AppStoreSidebarSpaceStore.state;
                    if (!e || !P) return;
                    let t = n(807825).L.createChildStore(e, {
                            table: n(514214).oo,
                            id: P
                        }),
                        o = t.getModel();
                    return (null == o ? void 0 : o.getDisplayName(j, !0)) ? ? t.getEmail()
                }, [j, P]), L = (0, n(684551).i)({
                    module: t,
                    store: h
                }), _ = (0, n(642157).p2)(L), K = function(e) {
                    let {
                        module: t,
                        workflowStore: r,
                        onDismissMenu: s
                    } = e, [a, d] = (0, o.useState)(!1), c = (0, n(533992).v3)(), u = (0, n(682985).K8)(() => {
                        let e = (0, n(427846)._)(c);
                        return null == e ? void 0 : e.pointer
                    }, [c]), p = (0, n(476743).a)(), m = "mcpServer" === t.type && p ? t.state : void 0, f = (0, n(682985).K8)(() => !!(null != m && m.serverUrl) && (!!(0, n(302465).eH)(m.serverUrl) || !!m.connectionPointer), [m]), g = (0, o.useCallback)(() => {
                        d(!0), null == s || s()
                    }, [s]);
                    if (!m || !p) return {
                        menuItems: [],
                        reconnectModal: null
                    };
                    let h = [];
                    return f ? h.push({
                        key: "mcp-reconnect",
                        render: e => (0, i.jsx)(n(95582).A, { ...e,
                            title: (0, i.jsx)(n(109939).sA, { ...l.reconnect
                            }),
                            icon: (0, i.jsx)(n(16275).I, {
                                icon: n(770985).plugSmallIcon,
                                size: "sm"
                            })
                        }),
                        action: g
                    }) : h.push({
                        key: "mcp-connect",
                        render: e => (0, i.jsx)(n(95582).A, { ...e,
                            title: (0, i.jsx)(n(109939).sA, { ...l.connect
                            }),
                            icon: (0, i.jsx)(n(16275).I, {
                                icon: n(770985).plugSmallIcon,
                                size: "sm"
                            })
                        }),
                        action: g
                    }), {
                        menuItems: h,
                        reconnectModal: null != m && m.serverUrl && r && u ? (0, i.jsx)(n(841682).Z, {
                            isOpen: a,
                            onClose: () => d(!1),
                            workflowId: null == r ? void 0 : r.id,
                            existingModuleId: t.id,
                            initialName: t.name,
                            initialUrl: m.serverUrl,
                            spaceViewStore: p,
                            currentUserPointer: u,
                            onSuccess: () => d(!1)
                        }) : null
                    }
                }({
                    module: t,
                    workflowStore: h,
                    onDismissMenu: () => x.reset()
                }), {
                    handleConnect: R,
                    authModal: B
                } = (0, n(494257).K)({
                    moduleValue: t,
                    workflowDefinitionPointer: I,
                    workflowModuleStore: void 0,
                    from: "workflow_tools_and_access_reconnect"
                }), N = (0, o.useCallback)(e => {
                    (0, n(677701).c)({
                        environment: v,
                        workflowStore: h,
                        module: e
                    })
                }, [v, h]), z = (0, o.useCallback)(e => {
                    var o;
                    let i = n(593186).Nh[t.type],
                        r = (null == i || null == (o = i.getDefaultPermissions) ? void 0 : o.call(i)) ? ? [],
                        l = { ...t.state,
                            connectionPointer: null == e ? void 0 : e.pointer
                        };
                    "error" in l && (l.error = void 0), N({ ...t,
                        state: l,
                        permissions: [...r]
                    })
                }, [t, N]), {
                    scopedExternalConnectionStore: O,
                    externalConnection: Y
                } = (0, n(243311).q)({
                    moduleValue: t
                }), H = (0, o.useMemo)(() => {
                    if ((null == Y ? void 0 : Y.integration_type) === "slack" && Y.scopes) return (0, n(315126).YS)({
                        module: t,
                        connectionScopes: Y.scopes
                    })
                }, [Y, t]), F = (0, n(682985).K8)(() => {
                    let e = null == O ? void 0 : O.getWorkflowExternalConnectionStore(),
                        o = null == e ? void 0 : e.getModel();
                    return (null == o ? void 0 : o.module_type) === "slack" && (0, n(315126).YS)({
                        module: t,
                        connectionScopes: null == o ? void 0 : o.getData().scope
                    })
                }, [t, O]), G = H ? ? F, Z = n(255755).y[t.type], $ = (0, n(682985).K8)(() => {
                    var e;
                    return null == Z || null == (e = Z.getWorkspaceRestrictionInfo) ? void 0 : e.call(Z)
                }, [Z]), {
                    label: q,
                    connectionsMenu: J,
                    authModal: X
                } = (0, n(864453).w)({
                    asyncConnections: S,
                    moduleValue: t,
                    onConnectClick: () => x.reset(),
                    onMenuItemClick: z,
                    selectedScopedExternalConnectionStore: O,
                    selectedExternalConnection: Y,
                    workflowDefinitionPointer: I,
                    workflowModuleStore: void 0,
                    from: "workflow_tools_and_access_reconnect"
                }), Q = (0, o.useMemo)(() => u.includes(t.type), [t]), ee = "resolved" === S.status && S.value.sections.length > 0, et = (0, o.useCallback)(async () => {
                    if (!h || !(await n(647095).Gh({
                            message: (0, i.jsx)(n(109939).sA, { ...p.removeConfirmMessage
                            }),
                            description: (0, i.jsx)(n(109939).sA, { ...p.removeConfirmDescription
                            }),
                            acceptLabel: (0, i.jsx)(n(109939).sA, { ...p.removeConfirmAcceptLabel
                            })
                        })).accept) return;
                    (0, n(607940).s)({
                        workflowStore: h,
                        moduleId: t.id,
                        environment: v
                    });
                    let e = "mcpServer" === t.type && t.state ? t.state.serverUrl : void 0,
                        o = "mcpServer" === t.type && t.state ? t.state.name : void 0;
                    (0, n(599231).dp)({
                        workflow_id: h.pointer.id,
                        module_id: t.id,
                        module_type: t.type,
                        server_url: e,
                        server_name: o
                    })
                }, [h, t, v]), en = function(e) {
                    let {
                        onRemove: t,
                        onDismissMenu: o
                    } = e;
                    return [{
                        key: "mail-remove",
                        render: e => (0, i.jsx)(n(860287).A, { ...e,
                            title: (0, i.jsx)(n(109939).sA, { ...r.remove
                            }),
                            svg: () => (0, i.jsx)(n(16275).I, {
                                icon: n(822973).trashSmallIcon,
                                size: "sm"
                            }),
                            isRed: !0
                        }),
                        action: () => {
                            t(), null == o || o()
                        }
                    }]
                }({
                    module: t,
                    onRemove: et,
                    onDismissMenu: () => x.reset()
                }), eo = [...(0, n(682985).K8)(() => {
                    var e;
                    let o = {
                        buttonPopupStore: x,
                        canCurrentUserRemoveModule: U,
                        canCurrentUserUpdateConnection: T,
                        canEditModule: _,
                        connectionsMenu: J,
                        existingConnectionLabel: q,
                        handleConnect: R,
                        handleRemoveAccessModule: et,
                        hasAsyncConnections: ee,
                        isModuleValidAndConnected: C,
                        mailModuleMenuItems: en,
                        mcpServerMenuItems: (null == K ? void 0 : K.menuItems) ? ? [],
                        module: t,
                        needsConnectionPointer: Q,
                        styles: g,
                        workspaceRestrictionInfo: $
                    };
                    switch (t.type) {
                        case "mcpServer":
                            let r, l;
                            return r = m(o), l = f(o), [{
                                key: "actions",
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                items: [...r, ...o.mcpServerMenuItems, ...l]
                            }];
                        case "cursor":
                            return [{
                                key: "actions",
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                items: [...m(o, {
                                    getFallbackConnectTitle: e => (0, i.jsx)(n(109939).sA, { ...e.isModuleValidAndConnected ? p.reconnectModule : p.connectLabel
                                    })
                                }), ...f(o)]
                            }];
                        case "mail":
                            return [{
                                key: "actions",
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                items: [...m(o), ...o.mailModuleMenuItems]
                            }];
                        case "calendar":
                            return [{
                                key: "actions",
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                items: [...m(o), ...f(o)]
                            }];
                        case "slack":
                            let s, a, d, c;
                            return s = m(o), a = n(886556).z.isSlackConnectorUnificationEnabled(), d = (0, n(876688).wd)().includes("slack"), c = (0, n(212490).LT)("slack").isInProgress, [{
                                key: "actions",
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                items: [...s, ...f(o, {
                                    includeReconnect: !a || d || c
                                })]
                            }];
                        case "notion":
                            return [];
                        default:
                            return [{
                                key: "actions",
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                items: [...m(o), ...f(o, {
                                    includeReconnect: !(null != (e = n(593186).Nh[o.module.type]) && e.hideReconnect)
                                })]
                            }]
                    }
                }, [Q, R, x, q, T, U, _, J, et, ee, K, en, $, C, t]), ...(0, o.useMemo)(() => {
                    if ("notion" === t.type || !C) return [];
                    let e = "mcpServer" !== t.type || !t.state || !!t.state.connectionPointer,
                        o = "mcpServer" === t.type && t.state ? t.state.serverUrl : void 0,
                        r = null != E && E.createdAt ? j.formatDate(new Date(E.createdAt), {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        }) : void 0,
                        l = null != E && E.updatedAt ? j.formatDate(new Date(E.updatedAt), {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        }) : void 0,
                        u = r && l && r !== l,
                        p = function(e) {
                            let {
                                url: t,
                                connectedBy: o,
                                createdDate: r,
                                useCreatedLabel: l,
                                lastDeployedDate: u,
                                docsUrl: p
                            } = e, m = [];
                            if (t && m.push({
                                    key: "mcp-server-url",
                                    render: (0, i.jsx)(n(51831).m, {
                                        placement: "top",
                                        allowHover: !0,
                                        closeDelay: 150,
                                        content: e => (0, i.jsx)("div", { ...e,
                                            style: d,
                                            children: t
                                        }),
                                        children: e => (0, i.jsx)(n(111010).D, { ...e,
                                            styleKey: "caption",
                                            colorVariant: "tertiary",
                                            style: c,
                                            children: (0, i.jsx)(n(109939).sA, { ...s.mcpServerUrl,
                                                values: {
                                                    url: t
                                                }
                                            })
                                        })
                                    })
                                }), o && m.push({
                                    key: "connected-by",
                                    render: (0, i.jsx)(n(111010).D, {
                                        styleKey: "caption",
                                        colorVariant: "tertiary",
                                        style: c,
                                        children: (0, i.jsx)(n(109939).sA, { ...s.connectedBy,
                                            values: {
                                                connectedByName: o
                                            }
                                        })
                                    })
                                }), r && m.push({
                                    key: "created-date",
                                    render: (0, i.jsx)(n(111010).D, {
                                        styleKey: "caption",
                                        colorVariant: "tertiary",
                                        style: c,
                                        children: l ? (0, i.jsx)(n(109939).sA, { ...s.created,
                                            values: {
                                                date: r
                                            }
                                        }) : r
                                    })
                                }), u && m.push({
                                    key: "last-deployed-date",
                                    render: (0, i.jsx)(n(111010).D, {
                                        styleKey: "caption",
                                        colorVariant: "tertiary",
                                        style: c,
                                        children: (0, i.jsx)(n(109939).sA, { ...s.lastDeployed,
                                            values: {
                                                date: u
                                            }
                                        })
                                    })
                                }), p && m.push({
                                    key: "docs-link",
                                    render: (0, i.jsx)(a, {
                                        url: p
                                    })
                                }), 0 !== m.length) return {
                                key: "connection-info",
                                render: e => (0, i.jsx)(n(844565).A, { ...e,
                                    topBorder: !0
                                }),
                                items: [{
                                    key: "connection-info-detailed",
                                    action: () => {},
                                    render: e => (0, i.jsx)(n(636518).Ay, { ...e,
                                        shouldWrapTitle: !0,
                                        title: (0, i.jsx)(n(4458).VP, {
                                            gap: 4,
                                            paddingTop: 4,
                                            paddingBottom: 4,
                                            children: m.map(e => (0, i.jsx)("div", {
                                                children: e.render
                                            }, e.key))
                                        })
                                    })
                                }]
                            }
                        }({
                            url: o,
                            connectedBy: "worker" !== t.type && e ? (0, n(190934).qW)(t.type) ? W : A : void 0,
                            createdDate: "worker" === t.type ? r : e ? D : void 0,
                            useCreatedLabel: "worker" === t.type,
                            lastDeployedDate: u ? l : void 0,
                            docsUrl: "worker" === t.type ? "https://project-ajax.mintlify.io/" : void 0
                        });
                    return n(381453).oE([p])
                }, [A, D, j, C, t, W, E])];
                return 0 === eo.length ? null : (0, i.jsxs)(i.Fragment, {
                    children: [Q && (!C || G) && _ ? (0, i.jsx)(n(830797).m, {
                        forceReconnect: G,
                        module: t,
                        workflowStore: h
                    }) : void 0, (0, i.jsx)(n(656252).A, {
                        popupType: y ? n(656252).z.BottomSheet : n(656252).z.Popup,
                        alignmentToOrigin: "end",
                        originGap: 4,
                        content: () => (0, i.jsxs)(n(747369).A, {
                            menuType: y ? n(649476).gu.ActionSheet : n(649476).gu.Popup,
                            width: 260,
                            children: [(0, i.jsxs)("div", {
                                style: g.header,
                                children: [(0, i.jsx)(n(111010).D, {
                                    styleKey: "caption",
                                    colorVariant: "secondary",
                                    style: g.headerTitle,
                                    children: w
                                }), "mcpServer" === t.type ? (0, i.jsxs)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    flexShrink: 0,
                                    children: [(0, i.jsx)(n(619539).W, {
                                        serverUrl: "mcpServer" === t.type && t.state ? t.state.serverUrl : void 0
                                    }), (0, i.jsx)(n(236578).C, {})]
                                }) : "worker" === t.type ? (0, i.jsxs)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    flexShrink: 0,
                                    children: [(0, i.jsx)(n(746434).E, {
                                        color: "gray",
                                        content: j.formatMessage(p.workerBadge)
                                    }), (0, i.jsx)(n(746434).E, {
                                        content: "Alpha"
                                    })]
                                }) : (0, n(899849).j4)(t.type) ? (0, i.jsx)(n(746434).E, {
                                    content: "Beta"
                                }) : null]
                            }), (0, i.jsx)(n(558045).A, {
                                type: n(558045).O.Vertical,
                                sections: eo,
                                initialFocus: void 0
                            })]
                        }),
                        buttonPopupStore: x,
                        children: e => (0, i.jsx)(n(374533).A, {
                            icon: n(361226).ellipsisSmallIcon,
                            colorVariant: "secondary",
                            ...e,
                            ariaLabel: j.formatMessage(p.moreOptions)
                        })
                    }), B, X, null == K ? void 0 : K.reconnectModal]
                })
            }
        },
        574134: (e, t, n) => {
            n.d(t, {
                D: () => o
            });

            function o(e) {
                var t, n, o, i;
                return {
                    id: e.id,
                    name: e.name,
                    serverUrl: null == (t = e.state) ? void 0 : t.serverUrl,
                    serverIconUrl: null == (n = e.state) ? void 0 : n.serverIconUrl,
                    officialName: null == (o = e.state) ? void 0 : o.officialName,
                    hasExternalConnection: !!(null == (i = e.state) ? void 0 : i.connectionPointer)
                }
            }
        },
        593464: (e, t, n) => {
            n.d(t, {
                $: () => o
            });

            function o(e) {
                let {
                    module: t,
                    workflowStore: o
                } = e, i = o.pointer.spaceId;
                (0, n(377796).createAndCommit)({
                    userAction: "WorkflowActions.removeModule",
                    environment: e.environment,
                    canUndo: !0,
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    perform: e => {
                        (0, n(421439).y4)({
                            store: o,
                            operation: n(861988).$h({
                                pointer: o.pointer,
                                module: t
                            }),
                            transaction: e
                        })
                    }
                })
            }
        },
        607940: (e, t, n) => {
            n.d(t, {
                s: () => o
            }), n(898992), n(354520), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(581454), n(737550);

            function o(e) {
                let {
                    workflowStore: t,
                    moduleId: o,
                    environment: i
                } = e, r = t.pointer.spaceId;
                (0, n(377796).createAndCommit)({
                    userAction: "WorkflowActions.deleteModule",
                    environment: i,
                    canUndo: !0,
                    cellTarget: r ? {
                        spaceWithId: r
                    } : void 0,
                    perform: e => {
                        var i;
                        let r = t.getDraftData();
                        if (!r) return;
                        let l = null == (i = r.modules) ? void 0 : i.filter(e => e.id !== o),
                            s = { ...r,
                                modules: l
                            };
                        s = function(e) {
                            if (!e.triggers || 0 === e.triggers.length) return e;
                            let t = new Set((e.modules || []).map(e => e.id)),
                                n = new Set((e.scripts || []).map(e => e.id)),
                                o = e.triggers.filter(e => !e.moduleId || t.has(e.moduleId)).map(e => e.scriptId ? n.has(e.scriptId) ? e : { ...e,
                                    scriptId: void 0
                                } : e),
                                i = o.some((t, n) => {
                                    var o;
                                    return t.scriptId !== (null == (o = e.triggers) || null == (o = o[n]) ? void 0 : o.scriptId)
                                });
                            return o.length !== e.triggers.length || i ? { ...e,
                                triggers: o
                            } : e
                        }(s), (0, n(812389).O)({
                            workflowStore: t,
                            workflow: s,
                            transaction: e
                        })
                    }
                })
            }
        },
        674513: (e, t, n) => {
            n.d(t, {
                h: () => a
            }), n(296540);
            var o = n(474848);
            let i = (0, n(109939).YK)({
                    workerBadge: {
                        id: "connectionHeader.workerBadge",
                        defaultMessage: "Worker"
                    },
                    alphaBadge: {
                        id: "connectionHeader.workerAlphaBadge",
                        defaultMessage: "Alpha"
                    }
                }),
                r = {
                    titleRow: {
                        minWidth: 0,
                        paddingBlock: 14,
                        paddingInline: n(485165).So,
                        paddingInlineEnd: n(485165).xx
                    }
                };

            function l(e) {
                let {
                    connection: t,
                    connectionStatus: i,
                    workflowStore: l
                } = e, a = "connected" === i, d = !!(a && t.moduleValue && "notion" !== t.moduleValue.type);
                return (0, o.jsx)("div", {
                    style: r.titleRow,
                    children: (0, o.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                        height: 28,
                        children: [(0, o.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            minWidth: 0,
                            children: [(0, o.jsx)(n(111010).D, {
                                styleKey: "bodyLgSemibold",
                                children: t.shortName ? ? t.name
                            }), "mcpServer" === t.type ? (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(n(619539).W, {
                                    serverUrl: t.url
                                }), (0, o.jsx)(n(236578).C, {})]
                            }) : "worker" === t.type ? (0, o.jsx)(s, {}) : (0, n(899849).j4)(t.moduleType) ? (0, o.jsx)(n(746434).E, {
                                content: "Beta"
                            }) : void 0]
                        }), (0, o.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            flexShrink: 0,
                            children: [a ? (0, o.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 4,
                                children: [(0, o.jsx)(n(16275).I, {
                                    icon: n(971730).checkmarkSmallIcon,
                                    size: "xs",
                                    colorVariant: "secondary"
                                }), (0, o.jsx)(n(111010).D, {
                                    styleKey: "caption",
                                    colorVariant: "secondary",
                                    children: (0, o.jsx)(n(109939).sA, { ...n(376242).D.connected
                                    })
                                })]
                            }) : null, (0, o.jsx)(n(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                minWidth: 0,
                                flexShrink: 1,
                                children: t.moduleValue ? (0, o.jsx)(n(83966).y, {
                                    module: t.moduleValue
                                }) : null
                            }), d && l && t.moduleValue ? (0, o.jsx)(n(548078).A, {
                                workflowStore: l,
                                module: t.moduleValue
                            }) : null]
                        })]
                    })
                })
            }

            function s() {
                let e = (0, n(109939).tz)();
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(n(746434).E, {
                        content: e.formatMessage(i.workerBadge)
                    }), (0, o.jsx)(n(746434).E, {
                        content: e.formatMessage(i.alphaBadge)
                    })]
                })
            }

            function a(e) {
                let {
                    connection: t,
                    connectionStatus: i,
                    workflowStore: r,
                    body: s,
                    error: a,
                    footer: d
                } = e;
                return (0, o.jsxs)(n(4458).VP, {
                    flex: 1,
                    minHeight: 0,
                    width: "100%",
                    children: [(0, o.jsx)(l, {
                        connection: t,
                        connectionStatus: i,
                        workflowStore: r
                    }), a, s, d]
                })
            }
        },
        692158: (e, t, n) => {
            n.d(t, {
                m: () => r,
                q: () => l
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(803949), n(737550);
            var o = () => n(302465),
                i = () => n(797421);

            function r(e) {
                let {
                    existingMcpServers: t,
                    currentAgentMcpUrls: n,
                    preconfiguredServerUrls: i,
                    preconfiguredServerTaglines: r,
                    getExistingModuleId: l
                } = e, s = [], a = new Set;
                return t.forEach(e => {
                    let t = l("mcpServer", e.id),
                        d = e.hasExternalConnection,
                        c = e.serverUrl ? (0, o().Yl)(e.serverUrl) : void 0,
                        u = !!(c && n.has(c)),
                        p = void 0 !== c && i.has(c),
                        m = (void 0 !== c ? r.get(c) : void 0) ? ? e.officialName;
                    s.push({
                        id: e.id,
                        name: e.name,
                        serverUrl: e.serverUrl,
                        serverIconUrl: e.serverIconUrl,
                        mcpServerId: e.id,
                        existingModuleId: t,
                        hasExternalConnection: d,
                        hasDuplicateUrl: u,
                        isPreconfigured: p,
                        tagline: m
                    }), e.serverUrl && a.add((0, o().Yl)(e.serverUrl))
                }), {
                    items: s,
                    addedUrls: a
                }
            }

            function l(e) {
                let {
                    servers: t,
                    existingServerUrls: n,
                    currentAgentMcpUrls: r
                } = e, l = [];
                for (let e of t) {
                    if ("hidden" === e.visibility) continue;
                    let t = e.serverUrlConfig;
                    if (t) {
                        if (Array.from(n).some(e => (0, i().nS)(t, e))) continue;
                        let o = Array.from(r).some(e => (0, i().nS)(t, e));
                        l.push({ ...e,
                            hasDuplicateUrl: o
                        })
                    } else {
                        let t = (0, o().Yl)(e.serverUrl);
                        if (n.has(t)) continue;
                        l.push({ ...e,
                            hasDuplicateUrl: r.has(t)
                        })
                    }
                }
                return l
            }
        },
        776568: (e, t, n) => {
            n.d(t, {
                E: () => d,
                d: () => l
            }), n(898992), n(672577);
            var o = n(296540),
                i = n(474848);

            function r(e) {
                let {
                    workflowStore: t,
                    module: r,
                    isInTranscript: l
                } = e, s = (0, n(533992).v3)(), {
                    threadStore: a,
                    workflowValue: d
                } = (0, n(867587).N)(t, !0), c = t.pointer, u = (0, n(682985).K8)(() => {
                    if (c || null != a && a.pointer) return (0, n(646440).getWorkflowDefinitionPointer)({
                        workflowPointer: c,
                        threadPointer: null == a ? void 0 : a.pointer
                    })
                }, [c, a]), p = t ? ? a, m = (0, o.useCallback)(e => {
                    t.table !== n(581654).U6 && (0, n(593464).$)({
                        environment: s,
                        workflowStore: t,
                        threadStore: a,
                        module: e
                    })
                }, [s, t, a]), f = (0, o.useCallback)(e => {
                    t.table !== n(581654).U6 && (0, n(677701).c)({
                        environment: s,
                        workflowStore: t,
                        module: e
                    })
                }, [s, t]), g = (0, o.useCallback)(e => {
                    t.table !== n(581654).U6 && function(e) {
                        let {
                            value: t,
                            workflowStore: o
                        } = e;
                        (0, n(377796).createAndCommit)({
                            userAction: "WorkflowActions.saveConfigVariable",
                            environment: e.environment,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: o.pointer.spaceId
                            },
                            perform: e => {
                                (0, n(421439).y4)({
                                    store: o,
                                    operation: n(861988).bE({
                                        pointer: o.pointer,
                                        configVariable: t
                                    }),
                                    transaction: e
                                })
                            }
                        })
                    }({
                        environment: s,
                        workflowStore: t,
                        threadStore: a,
                        value: e
                    })
                }, [s, t, a]);
                return u && d && p && n(525975).d.isValidAndConnected(r, d) ? (0, i.jsx)(n(128115).WorkflowModuleConfiguration, {
                    isInTranscript: l,
                    module: r,
                    removeModule: m,
                    saveConfigVariable: g,
                    saveModule: f,
                    store: p,
                    workflowDefinitionPointer: u,
                    workflow: d
                }) : null
            }

            function l(e) {
                var t;
                let {
                    module: o,
                    workflowValue: i
                } = e;
                if (!i) return !0;
                let r = null == (t = i.modules) ? void 0 : t.find(e => e.id === o.id);
                return !!r && n(525975).d.isValidAndConnected(r, i)
            }
            let s = {
                titleIconContainer: {
                    width: n(104509).Ev.sm,
                    height: n(104509).Ev.sm,
                    display: "grid",
                    placeItems: "center"
                },
                titleIcon: {
                    width: n(104509).Ev.sm,
                    height: n(104509).Ev.sm,
                    fill: n(632079).Tj.icon.primary
                },
                leftSection: {
                    position: "relative",
                    flex: 1,
                    minWidth: 0
                },
                rightSection: {
                    position: "relative",
                    flex: 0,
                    paddingInlineEnd: 8
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function a(e) {
                var t;
                let {
                    icon: o,
                    label: r,
                    right: l,
                    children: a,
                    allowOverflowX: d
                } = e, c = (t = d, (0, n(960253).I)(() => ({
                    container: {
                        margin: "0 auto",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        overflowX: t ? "visible" : "hidden"
                    }
                }), [t]));
                return (0, i.jsxs)("div", {
                    style: c.container,
                    children: [(0, i.jsxs)(n(4458).fI, {
                        height: 28,
                        alignItems: "center",
                        className: "autolayout-fill-width",
                        style: s.positionRelative,
                        children: [(0, i.jsxs)(n(4458).fI, {
                            gap: 8,
                            padding: 12,
                            style: s.leftSection,
                            alignItems: "center",
                            flex: "1 1 0",
                            children: [o ? (0, i.jsx)("span", {
                                style: s.titleIconContainer,
                                children: o(s.titleIcon)
                            }) : null, r ? (0, i.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                children: r
                            }) : null]
                        }), (0, i.jsx)(n(4458).fI, {
                            gap: 4,
                            style: s.rightSection,
                            alignItems: "center",
                            justifyContent: "flex-end",
                            children: l
                        })]
                    }), a]
                })
            }

            function d(e) {
                var t;
                let {
                    workflow: o,
                    workflowStore: r,
                    moduleId: l
                } = e, s = null == (t = o.modules) ? void 0 : t.find(e => e.id === l), a = (0, n(482170).l)(s);
                return a ? (0, i.jsx)(u, {
                    workflowStore: r,
                    module: a
                }) : null
            }
            let c = {
                minWidth: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            };

            function u(e) {
                let {
                    workflowStore: t,
                    module: o
                } = e, l = (0, n(109939).tz)(), s = n(525975).d.getShortName(o, l) ? ? n(525975).d.getName(o, l), d = (0, n(956149).c)(o), u = (0, n(956149).f)(o), p = "mcpServer" === o.type || "worker" === o.type || "cursor" === o.type || "boxy" === o.type, m = (0, n(684551).i)({
                    module: o,
                    store: t
                }), f = (0, n(642157).p2)(m) ? void 0 : (0, i.jsx)(n(51831).m, {
                    content: () => (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "You do not have edit access",
                        id: "workflowConfigureModule.noEditAccess"
                    }),
                    children: e => (0, i.jsx)("div", { ...e,
                        children: (0, i.jsx)(n(4458).fI, {
                            alignItems: "center",
                            gap: 0,
                            children: (0, i.jsx)(n(16275).I, {
                                icon: n(697198).lockSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            })
                        })
                    })
                }), g = f || p ? (0, i.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    gap: 8,
                    minWidth: 0,
                    flex: 1,
                    children: [(0, i.jsx)("span", {
                        style: c,
                        children: s
                    }), p ? u : void 0, f]
                }) : (0, i.jsx)("span", {
                    style: c,
                    children: s
                }), h = t.table === n(581654).U6 || "notion" === o.type ? (0, i.jsx)(n(83966).y, {
                    module: o
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [p ? void 0 : u, (0, i.jsx)(n(83966).y, {
                        module: o
                    }), (0, i.jsx)(n(548078).A, {
                        workflowStore: t,
                        module: o
                    })]
                });
                return (0, i.jsx)(a, {
                    label: g,
                    icon: d,
                    allowOverflowX: !0,
                    right: h,
                    children: (0, i.jsx)(r, {
                        workflowStore: t,
                        module: o,
                        isInTranscript: !1
                    })
                })
            }
        },
        781368: (e, t, n) => {
            n.d(t, {
                J: () => s
            }), n(898992), n(354520), n(581454);
            var o = n(296540),
                i = n(474848);

            function r(e, t) {
                return !t || [e.name, e.shortName, e.tagline, ...e.searchKeywords ? ? []].filter(n(722371).O9).join(" ").toLowerCase().includes(t)
            }
            let l = {
                paddingInline: 12,
                paddingBlock: 12
            };

            function s(e) {
                let {
                    searchQuery: t,
                    suggestedConnections: s,
                    connections: a,
                    selectedConnectionId: c,
                    onSelect: p,
                    isConnectionAdded: m,
                    customMcpAction: f
                } = e, g = (0, o.useMemo)(() => t.trim().toLowerCase(), [t]), h = (0, o.useMemo)(() => s.filter(e => r(e, g)), [g, s]), x = (0, o.useMemo)(() => a.filter(e => r(e, g)), [a, g]), v = (0, o.useMemo)(() => [...h, ...x], [x, h]), y = (0, o.useCallback)(e => {
                    p(e)
                }, [p]);
                return (0, i.jsx)(n(866116)._, {
                    paddingInline: 12,
                    paddingBlockStart: 0,
                    paddingBlockEnd: 8,
                    footer: f.isVisible ? (0, i.jsx)("div", {
                        style: l,
                        children: (0, i.jsx)(u, {
                            action: f
                        })
                    }) : void 0,
                    children: (0, i.jsx)(n(4458).VP, {
                        gap: 1,
                        children: v.map(e => (0, i.jsx)(d, {
                            connection: e,
                            isSelected: c === e.id,
                            onSelect: y,
                            isAdded: m(e.id)
                        }, e.id))
                    })
                })
            }
            let a = {
                item: {
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 8,
                    padding: 6,
                    height: "unset"
                },
                iconWrapper: {
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: n(632079).Tj.background.primary,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: n(632079).Tj.border.secondaryTranslucent,
                    flexShrink: 0
                },
                itemLabelText: {
                    minWidth: 0,
                    ...n(699422).RC
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
                itemSelected: {
                    background: n(632079).Tj.background.tertiary
                },
                itemHovered: {
                    background: n(632079).Tj.background.secondaryTranslucent
                }
            };

            function d(e) {
                let {
                    connection: t,
                    isSelected: r,
                    onSelect: l,
                    isAdded: s
                } = e, d = (0, o.useCallback)(() => l(t.id), [t.id, l]), c = (0, n(617168).y)({
                    moduleValue: t.moduleValue,
                    existingModuleId: t.existingModuleId,
                    hasExternalConnection: t.hasExternalConnection,
                    hasDuplicateUrl: t.hasDuplicateUrl,
                    isAdded: s
                }), u = (0, o.useMemo)(() => (0, n(480272).B)(t, 12), [t]);
                return (0, i.jsxs)(n(988022).p, {
                    style: { ...a.item,
                        ...r ? a.itemSelected : void 0
                    },
                    hoveredStyle: a.itemHovered,
                    pressedStyle: a.itemSelected,
                    onClick: d,
                    children: [(0, i.jsx)("div", {
                        style: a.iconWrapper,
                        children: (0, i.jsx)(n(480272).j, {
                            connection: t
                        })
                    }), (0, i.jsxs)(n(4458).VP, {
                        alignItems: "start",
                        gap: 1,
                        children: [(0, i.jsxs)(n(4458).fI, {
                            justifyContent: "start",
                            alignItems: "center",
                            gap: 6,
                            minWidth: 0,
                            children: [(0, i.jsx)("div", {
                                style: a.itemLabelText,
                                children: (0, i.jsx)(n(111010).D, {
                                    styleKey: "bodySmMedium",
                                    children: t.shortName ? ? t.name
                                })
                            }), u.length > 0 ? (0, i.jsx)(n(4458).fI, {
                                alignItems: "center",
                                gap: 4,
                                children: (0, i.jsx)(n(4458).fI, {
                                    alignItems: "center",
                                    children: u.slice(0, 3).map((e, t) => (0, i.jsx)("div", {
                                        style: { ...a.supportedIconWrapper,
                                            ...t > 0 ? a.supportedIconOverlap : void 0
                                        },
                                        children: e
                                    }, t))
                                })
                            }) : null]
                        }), "connected" === c ? (0, i.jsx)(n(111010).D, {
                            styleKey: "captionSm",
                            colorVariant: "secondary",
                            children: (0, i.jsx)(n(109939).sA, { ...n(376242).D.active
                            })
                        }) : void 0]
                    })]
                })
            }
            let c = {
                width: "100%"
            };

            function u(e) {
                let {
                    action: t
                } = e;
                return (0, i.jsx)(n(51831).m, {
                    disableTooltip: !t.showDisabledTooltip,
                    placement: "top",
                    content: () => (0, i.jsx)(n(109939).sA, { ...n(376242).D.customMcpDisabledTooltip
                    }),
                    children: e => (0, i.jsx)(n(988022).p, {
                        onClick: t.onClick,
                        disabled: !t.isEnabled,
                        colorVariant: "secondary",
                        iconLeading: {
                            icon: t.icon,
                            size: "sm",
                            colorVariant: "secondary"
                        },
                        style: c,
                        size: "md",
                        ...e,
                        children: (0, i.jsx)(n(111010).D, {
                            styleKey: "bodySmRegular",
                            children: t.label
                        })
                    })
                })
            }
        },
        812389: (e, t, n) => {
            n.d(t, {
                O: () => o
            });

            function o(e) {
                let {
                    workflowStore: t,
                    transaction: o,
                    workflow: i
                } = e;
                (0, n(368198).K)({
                    store: t.getDataStore(),
                    value: i,
                    transaction: o
                })
            }
        },
        899849: (e, t, n) => {
            function o(e) {
                return !!e && ("mail" === e || "calendar" === e || "cursor" === e)
            }
            async function i(e) {
                let {
                    connection: t,
                    environment: o,
                    workflowStore: i,
                    message: r,
                    description: l,
                    acceptLabel: s,
                    onRemoved: a
                } = e;
                return !!t.existingModuleId && !!(await n(647095).Gh({
                    message: r,
                    description: l,
                    acceptLabel: s
                })).accept && ((0, n(607940).s)({
                    workflowStore: i,
                    moduleId: t.existingModuleId,
                    environment: o
                }), (0, n(599231).dp)({
                    workflow_id: i.pointer.id,
                    module_id: t.existingModuleId,
                    module_type: t.moduleType ? ? t.type,
                    server_url: t.url,
                    server_name: t.name
                }), null == a || a(t.id), !0)
            }

            function r(e) {
                let {
                    connection: t,
                    pendingKeys: n,
                    isWaitingForCalendarConnection: o,
                    getPendingKey: i
                } = e, r = t.moduleType ? ? ("worker" === t.type ? t.type : void 0);
                if (!r) return {
                    isPending: !1
                };
                let l = i({
                    type: r,
                    mcpServerId: t.mcpServerId,
                    workerId: t.workerId
                });
                return {
                    isPending: "calendar" === t.moduleType && o || n.has(l)
                }
            }

            function l(e) {
                let {
                    connection: t,
                    connectionStatus: n,
                    isPending: o,
                    isConnecting: i,
                    canConnect: r
                } = e;
                return !o && !i && "disabled" !== t.visibility && (!t.hasDuplicateUrl || "needsAuthentication" === n) && ("worker" !== t.type || !!t.workerId) && ("module" !== t.type || !!t.moduleType) && !1 !== r
            }

            function s(e) {
                let {
                    isCustomMcpAllowed: t,
                    isWorkspaceOwner: o
                } = e;
                return {
                    isVisible: !0,
                    isEnabled: t || o,
                    icon: n(638501).plusSmallIcon,
                    showDisabledTooltip: !t && !o
                }
            }
            n.d(t, {
                G3: () => l,
                J1: () => i,
                JH: () => r,
                d9: () => s,
                j4: () => o
            })
        },
        930225: (e, t, n) => {
            n.d(t, {
                r: () => o
            }), n(898992), n(672577), n(296540);

            function o(e) {
                let t = (0, n(109939).tz)(),
                    o = (0, n(533992).v3)(),
                    i = (0, n(972740).L)(),
                    r = (0, n(345776).T)(),
                    l = null == i ? void 0 : i.id,
                    s = (0, n(611285).P)({
                        name: "workers",
                        spaceId: l,
                        userId: r
                    }),
                    [a, d] = (0, n(97668).Yb)(async () => {
                        var i, r, a;
                        if (!l || !e || !s) return;
                        let d = await o.api.callApi({
                            eventName: "getWorkers",
                            environment: o,
                            data: {
                                spaceId: l
                            }
                        });
                        if ("success" === d.type) return d.data.workers.find(t => t.workerId === e);
                        if ("failed" !== (i = d).type || (null == (r = i.body) ? void 0 : r.name) !== "AbortedError" && (null == (a = i.body) || null == (a = a.clientData) ? void 0 : a.type) !== "aborted") {
                            n(436555).D6({
                                label: t.formatMessage({
                                    id: "workers.form.getWorkersFailed",
                                    defaultMessage: "Failed to get workers"
                                })
                            });
                            let i = (0, n(201790).V4)(d);
                            n(773352).log({
                                level: "error",
                                from: "useWorkerDetail",
                                type: "failedToFetchWorker",
                                data: {
                                    message: "Unexpected error fetching worker",
                                    miscDataToConvertToString: {
                                        response: d,
                                        errorMessage: i,
                                        userId: o.currentUser.id,
                                        spaceId: l,
                                        workerId: e
                                    }
                                }
                            })
                        }
                    }, [o, t, l, e, s], {
                        debugName: "useWorkerDetail"
                    });
                return {
                    worker: a.value,
                    isLoading: "pending" === a.status,
                    refresh: d
                }
            }
        },
        983012: (e, t, n) => {
            n.d(t, {
                w: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.57 0.97 10.86 13.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8.715 1.077a.626.626 0 0 0-.863.868l.08.098L9.27 3.375H8A5.425 5.425 0 1 0 13.425 8.8a.625.625 0 0 0-1.25 0A4.175 4.175 0 1 1 8 4.625h1.27L7.942 5.96l-.08.097a.626.626 0 0 0 .966.784l2.395-2.406.077-.095a.624.624 0 0 0-.08-.788L8.813 1.157z"
                    })
                },
                i = (0, n(104509).wt)("arrowCircleSpinClockwiseSmall", o, "small")
        }
    }
]);