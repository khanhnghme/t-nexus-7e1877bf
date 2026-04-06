"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [15780], {
        129480: (e, t, o) => {
            o.d(t, {
                A: () => r
            });
            var a = () => o(546605);
            class i extends a().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let r = new i
        },
        148465: (e, t, o) => {
            async function a(e) {
                let t = o(728372).AppStoreSidebarSpaceStore.state;
                t && await i({
                    environment: e.environment,
                    spaceId: t.id,
                    force: !0
                })
            }
            async function i(e) {
                let {
                    environment: t,
                    spaceId: a,
                    force: i
                } = e;
                if (!t.currentUser.id) return;
                await o(728372).default.waitUntilRendered();
                let r = o(701328).A.state;
                if (!r.loaded && !r.loading || r.loaded && a !== r.spaceId || i) {
                    o(701328).A.setState({ ...o(701328).A.state,
                        loading: !0
                    });
                    let e = async () => {
                            let e = await t.api.callApi({
                                eventName: "searchIntegrations",
                                environment: t,
                                data: {
                                    query: "",
                                    type: "compliance",
                                    spaceId: a
                                }
                            });
                            return "success" !== e.type ? (o(773352).log({
                                level: "error",
                                from: "complianceIntegrationActions",
                                type: "searchIntegrationsError",
                                error: (0, o(416607).convertErrorToLog)(e.error)
                            }), {
                                status: "rejected",
                                error: e.error
                            }) : {
                                status: "resolved",
                                value: e
                            }
                        },
                        i = async () => {
                            try {
                                let e = await o(508523).C({
                                    environment: t,
                                    spaceId: a
                                });
                                return {
                                    status: "resolved",
                                    value: e
                                }
                            } catch (e) {
                                return o(773352).log({
                                    level: "error",
                                    from: "complianceIntegrationActions",
                                    type: "fetchWebhookSubscriptionsError",
                                    error: (0, o(416607).convertErrorToLog)(e)
                                }), {
                                    status: "rejected",
                                    error: e
                                }
                            }
                        },
                        [r, n] = await Promise.all([e(), i()]);
                    if ("rejected" === r.status || "rejected" === n.status) return;
                    let {
                        value: l
                    } = r, {
                        value: s
                    } = n, d = o(412951).RecordMapWithRole.create(l.data.recordMap), c = o(412951).RecordMapWithRole.create(s.recordMap);
                    o(701328).A.setState({
                        loaded: !0,
                        loading: !1,
                        spaceId: a,
                        integrations: o(381453).Ul(o(381453).oE(l.data.integrationIds.map(e => d.getModel({
                            table: o(832375).Lij,
                            id: e
                        }))).filter(o(720871).kC), ({
                            created_at: e
                        }) => e),
                        webhookSubscriptions: o(381453).oE(s.webhookSubscriptionIds.map(e => c.getModel({
                            table: o(832375).TFg,
                            id: e,
                            spaceId: a
                        })))
                    })
                }
            }
            o.r(t), o.d(t, {
                initializeComplianceIntegrationStore: () => i,
                refreshComplianceIntegrationStore: () => a
            }), o(898992), o(354520), o(581454)
        },
        508523: (e, t, o) => {
            o.d(t, {
                C: () => r,
                v: () => i
            }), o(898992), o(354520), o(803949), o(581454);
            let a = (0, o(109939).YK)({
                webhookUrlError: {
                    id: "webhookActions.webhookUrlError",
                    defaultMessage: "Connection failed. Please wait and try again or try another URL."
                }
            });
            async function i(e) {
                let {
                    environment: t,
                    integration: i,
                    webhookUrl: r,
                    webhookSecret: n,
                    webhookHeaders: l,
                    webhookSubscriptionId: s,
                    onError: d,
                    onSuccess: c = () => {}
                } = e, g = o(728372).AppStoreCurrentUserRootStore.state, u = o(728372).AppStoreSidebarSpaceStore.state;
                if (!g || !u) return {
                    error: {
                        success: !1
                    }
                };
                let h = {};
                l.map(e => {
                    let {
                        key: t,
                        value: o
                    } = e;
                    return {
                        key: t.trim(),
                        value: String(o).trim()
                    }
                }).filter(({
                    key: e,
                    value: t
                }) => e && t).forEach(({
                    key: e,
                    value: t
                }) => {
                    h[e] = t
                });
                let p = {
                    headers: h
                };
                if ("failed" === (await t.api.callApi({
                        eventName: "testWebhookConnection",
                        environment: t,
                        data: {
                            integrationId: i.id,
                            webhookUrl: r,
                            webhookSecret: n || void 0,
                            webhookCustomization: p,
                            spaceId: u.id
                        }
                    })).type) return o(647095).f1(o(962299).A.formatMessage(a.webhookUrlError)), {
                    error: {
                        success: !1
                    }
                };
                let b = u.id,
                    {
                        serverCommitResult: f
                    } = (0, o(377796).createAndCommit)({
                        userAction: "webhookActions.createWebhookSubscription",
                        environment: t,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: b
                        },
                        perform: a => {
                            if (a.postSubmitCallbacks = [d], e.webhookSubscriptionId) {
                                let e = (0, o(328765).S)(),
                                    t = s && e ? o(62148).g.createChildStore(e, {
                                        id: s,
                                        table: o(923461).T,
                                        spaceId: e.id
                                    }) : void 0;
                                if (t) {
                                    let e = t.getWebhookUrl() !== r,
                                        l = t.getWebhookSecret() !== n,
                                        s = !o(381453).n4(t.getWebhookCustomization(), p);
                                    (e || l || s) && (o(691968).zW({
                                        integration_id: i.id,
                                        has_updated_webhook_url: e || void 0,
                                        has_updated_webhook_secret: l || void 0
                                    }), (0, o(173157).z)({
                                        transaction: a,
                                        data: {
                                            webhook_url: r,
                                            webhook_secret: n,
                                            webhook_customization: p,
                                            health: {
                                                status: "active"
                                            }
                                        },
                                        store: t
                                    }))
                                }
                            } else {
                                let e = (0, o(295447).Z1)({
                                    environment: t,
                                    table: o(890920).GP,
                                    spaceId: b
                                });
                                o(124937).vt({
                                    environment: t,
                                    table: o(890920).GP,
                                    args: {
                                        id: e,
                                        space_id: b,
                                        parent: {
                                            table: "space",
                                            id: u.id
                                        },
                                        type: "external",
                                        name: i.getName(),
                                        icon: i.getInfo().icon,
                                        integration_id: i.id,
                                        capabilities: i.getCapabilities(),
                                        createdBy: {
                                            table: o(514214).oo,
                                            id: g.id
                                        }
                                    },
                                    inMemoryRecordCache: u.inMemoryRecordCache,
                                    transaction: a
                                }), o(124937).vt({
                                    environment: t,
                                    table: o(923461).T,
                                    args: {
                                        id: (0, o(295447).Z1)({
                                            environment: t,
                                            spaceId: b,
                                            table: o(923461).T
                                        }),
                                        bot_id: e,
                                        space_id: b,
                                        parentPointer: {
                                            table: "space",
                                            id: u.id
                                        },
                                        createdByPointer: {
                                            table: o(514214).oo,
                                            id: g.id
                                        },
                                        api_version: o(623644).rj,
                                        webhook_url: r,
                                        webhook_secret: n,
                                        webhook_customization: p,
                                        health: {
                                            status: "active"
                                        }
                                    },
                                    inMemoryRecordCache: u.inMemoryRecordCache,
                                    transaction: a
                                }), o(691968).dm({
                                    integration_id: i.id,
                                    configuration_type: "manual",
                                    bot_id: e
                                })
                            }
                        }
                    });
                return await f, c(), {
                    value: {
                        success: !0
                    }
                }
            }
            async function r(e) {
                let t = o(218744).default.checkGate({
                        gateName: "webhooks_beta"
                    }),
                    {
                        environment: a,
                        spaceId: i
                    } = e;
                if (!a.currentUser.isLoggedIn() || !t) return {
                    webhookSubscriptionIds: [],
                    recordMap: {
                        __version__: 3
                    }
                };
                let r = await a.api.callCellCompatibleApi({
                    eventName: "getWebhookSubscriptions",
                    environment: a,
                    data: {
                        spaceId: i
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: i
                    }
                });
                if ("failed" === r.type) throw r.error;
                return r.data
            }
        },
        701328: (e, t, o) => {
            o.d(t, {
                A: () => n
            });
            var a = () => o(546605);
            class i extends a().Store {
                getInitialState() {
                    return {
                        loaded: !1,
                        loading: !1
                    }
                }
                integrations = new(o(345426)).ComputedStore(() => {
                    let e = this.state;
                    return e.loaded ? e.integrations : []
                }, {
                    debugName: "ComplianceIntegrationStore.integrations"
                });
                webhookSubscriptions = new(o(345426)).ComputedStore(() => {
                    let e = this.state;
                    return e.loaded ? e.webhookSubscriptions : []
                }, {
                    debugName: "ComplianceIntegrationStore.webhookSubscriptions"
                })
            }
            let r = new i;
            (0, o(202146).exposeDebugValue)("ComplianceIntegrationStore", r);
            let n = r
        },
        742001: (e, t, o) => {
            o.r(t), o.d(t, {
                ConfigureIntegrationModal: () => I
            }), o(16280), o(581454);
            var a = o(296540);
            o(898992), o(354520);
            var i = o(474848);
            let r = (0, o(109939).YK)({
                    remove: {
                        id: "integrations.configureIntegrationModal.webhookHeadersRemove",
                        defaultMessage: "Remove"
                    },
                    toggleSecretVisibility: {
                        id: "integrations.configureIntegrationModal.toggleSecretVisibility",
                        defaultMessage: "Toggle secret visibility"
                    }
                }),
                n = {
                    display: "flex",
                    alignItems: "center",
                    marginTop: 24
                },
                l = {
                    maxHeight: "30vh",
                    overflow: "auto",
                    width: "100%"
                },
                s = {
                    marginInlineStart: 8,
                    marginInlineEnd: 32
                },
                d = {
                    marginTop: 8
                },
                c = {
                    width: 28,
                    height: 28,
                    marginInlineStart: 4
                },
                g = {
                    marginInlineStart: 8
                },
                u = {
                    width: "100%",
                    textAlign: "start"
                };

            function h(e) {
                let {
                    headers: t,
                    onChange: r
                } = e, c = (0, a.useCallback)((e, o) => {
                    r(t.map((t, a) => a === o ? e : t))
                }, [t, r]), g = (0, a.useCallback)(e => {
                    r(t.filter((t, o) => o !== e))
                }, [t, r]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o(111010).D, {
                        as: "label",
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        style: {
                            marginBottom: 4,
                            ...n
                        },
                        children: (0, i.jsx)(o(109939).sA, {
                            id: "integrations.configureIntegrationModal.webhookHeadersInput",
                            defaultMessage: "Webhook Headers"
                        })
                    }), (0, i.jsxs)("div", {
                        style: l,
                        children: [t.length > 0 ? (0, i.jsxs)(o(4458).fI, {
                            marginTop: 8,
                            children: [(0, i.jsx)(o(324489).V, {
                                style: u,
                                isSmall: !0,
                                children: (0, i.jsx)(o(109939).sA, {
                                    id: "integrations.configureIntegrationModal.webhookHeadersKey",
                                    defaultMessage: "Key"
                                })
                            }), (0, i.jsx)(o(324489).V, {
                                style: { ...u,
                                    ...s
                                },
                                isSmall: !0,
                                children: (0, i.jsx)(o(109939).sA, {
                                    id: "integrations.configureIntegrationModal.webhookHeadersValue",
                                    defaultMessage: "Value"
                                })
                            })]
                        }) : void 0, t.map((e, t) => (0, i.jsx)(f, {
                            header: e,
                            onChange: c,
                            onDelete: g,
                            index: t
                        }, t))]
                    }), (0, i.jsx)(o(988022).p, {
                        style: d,
                        colorPalette: "gray",
                        iconLeading: o(581923).plusIcon,
                        onClick: () => {
                            r([...t, {
                                key: "",
                                value: ""
                            }])
                        },
                        children: (0, i.jsx)(o(109939).sA, {
                            id: "integrations.configureIntegrationModal.webhookHeadersAdd",
                            defaultMessage: "New"
                        })
                    })]
                })
            }
            let p = {
                    height: 18,
                    width: 18
                },
                b = {
                    height: 18
                };

            function f(e) {
                let {
                    header: t,
                    index: n,
                    onChange: l,
                    onDelete: s
                } = e, d = (0, o(109939).tz)(), [u, h] = a.useState(!1);
                return (0, i.jsxs)(o(4458).fI, {
                    marginTop: 8,
                    children: [(0, i.jsx)(o(36481).p, {
                        value: t.key,
                        onChange: e => {
                            l({
                                key: e.target.value,
                                value: t.value
                            }, n)
                        }
                    }), (0, i.jsx)(o(36481).p, {
                        style: g,
                        value: t.value,
                        onChange: e => {
                            l({
                                key: t.key,
                                value: e.target.value
                            }, n)
                        },
                        type: u ? "text" : "password",
                        right: (0, i.jsx)(o(4458).fI, {
                            children: (0, i.jsx)(o(374533).A, {
                                icon: u ? o(920906).eyeFillIcon : o(550113).L,
                                onClick: () => h(!u),
                                ariaLabel: d.formatMessage(r.toggleSecretVisibility),
                                colorPalette: "blue",
                                colorVariant: "accentPrimary",
                                iconStyle: p,
                                style: b
                            })
                        })
                    }), (0, i.jsx)(o(374533).A, {
                        style: c,
                        onClick: () => {
                            s(n)
                        },
                        icon: o(453013).o,
                        ariaLabel: d.formatMessage(r.remove)
                    })]
                })
            }
            let m = (0, o(109939).YK)({
                    toggleSecretVisibility: {
                        id: "integrations.configureIntegrationShowSecret.toggleSecretVisibility",
                        defaultMessage: "Toggle secret visibility"
                    }
                }),
                y = {
                    padding: "4px 8px"
                },
                k = {
                    height: 18,
                    width: 18
                },
                v = {
                    height: 18
                };

            function w(e) {
                let {
                    secret: t,
                    onChange: r,
                    submit: n,
                    placeholder: l
                } = e, s = (0, o(109939).tz)(), [d, c] = a.useState(!1);
                return (0, i.jsx)(o(36481).p, {
                    type: d ? "text" : "password",
                    value: t,
                    onChange: r,
                    placeholder: l,
                    style: y,
                    focusInitial: !1,
                    onKeyDown: e => {
                        "Enter" === e.key && n()
                    },
                    right: t && (0, i.jsx)(o(4458).fI, {
                        children: (0, i.jsx)(o(374533).A, {
                            icon: d ? o(920906).eyeFillIcon : o(550113).L,
                            onClick: () => {
                                c(!d)
                            },
                            ariaLabel: s.formatMessage(m.toggleSecretVisibility),
                            colorPalette: "blue",
                            colorVariant: "accentPrimary",
                            iconStyle: k,
                            style: v
                        })
                    })
                })
            }
            let S = (0, o(109939).YK)({
                    webhookUrlPlaceholder: {
                        id: "integrations.configureIntegrationModal.webhookUrlInput.placeholder",
                        defaultMessage: "Paste webhook URL"
                    },
                    webhookSecretPlaceholder: {
                        id: "integrations.configureIntegrationModal.webhookSecretInput.placeholder",
                        defaultMessage: "Paste token"
                    },
                    updateButton: {
                        id: "integrations.configureIntegrationModal.submitButton.update",
                        defaultMessage: "Update"
                    },
                    createButton: {
                        id: "integrations.configureIntegrationModal.submitButton.create",
                        defaultMessage: "Connect"
                    },
                    errorOccurred: {
                        id: "integrations.configureIntegrationModal.error.dialog",
                        defaultMessage: "Failed to connect {integration}. Please contact support."
                    },
                    closeModalAriaLabel: {
                        id: "integrations.configureIntegrationModal.closeButtonLabel",
                        defaultMessage: "Close integration configuration modal"
                    }
                }),
                x = {
                    style0: {
                        display: "flex",
                        alignItems: "center",
                        marginTop: 40
                    },
                    style1: {
                        padding: "4px 8px"
                    },
                    style2: {
                        marginTop: 5
                    },
                    style3: {
                        display: "flex",
                        alignItems: "center",
                        marginTop: 24
                    },
                    errorText: {
                        color: o(632079).Tj.red.text.accentPrimary,
                        fontSize: 12
                    },
                    helpInfo: {
                        display: "inline-flex",
                        marginInlineStart: 1
                    }
                };

            function I() {
                let e = (0, o(109939).tz)(),
                    t = (0, o(533992).v3)(),
                    r = (0, o(682985).K8)(() => o(129480).A.state.open, []),
                    n = (0, o(682985).K8)(() => o(129480).A.state.open ? o(129480).A.state.integrationId : void 0, []),
                    l = (0, o(682985).K8)(() => o(129480).A.state.open ? o(129480).A.state.webhookSubscriptionId : void 0, []),
                    s = (0, o(682985).O$)(o(728372).AppStoreSidebarSpaceStore),
                    d = n && s ? o(183934).C.createChildStore(s, {
                        id: n,
                        table: o(832375).Lij
                    }) : void 0,
                    c = l && s ? o(62148).g.createChildStore(s, {
                        id: l,
                        table: o(832375).TFg,
                        spaceId: s.id
                    }) : void 0;
                (0, a.useEffect)(() => {
                    let {
                        webhookUrl: e,
                        webhookSecret: t,
                        webhookCustomization: o
                    } = {
                        webhookUrl: (null == c ? void 0 : c.getWebhookUrl()) || "",
                        webhookSecret: (null == c ? void 0 : c.getWebhookSecret()) || "",
                        webhookCustomization: (null == c ? void 0 : c.getWebhookCustomization()) || void 0
                    };
                    u(e), b(t), m(Object.entries((null == o ? void 0 : o.headers) || {}).map(([e, t]) => ({
                        key: e,
                        value: t
                    })).sort((e, t) => e.key.localeCompare(t.key)))
                }, [c]);
                let [g, u] = a.useState(""), [p, b] = a.useState(""), [f, m] = a.useState([]), [y, k] = a.useState(!1), [v, I] = a.useState(!1), [M, j] = a.useState(!1), [C, A, _, U] = (0, o(682985).K8)(() => {
                    if (!d) return [void 0, void 0, void 0, void 0];
                    let e = d.getModel();
                    return [e, null == e ? void 0 : e.name, null == e ? void 0 : e.type, ((null == e ? void 0 : e.type) !== "internal" && (null == e ? void 0 : e.getInfo().developer_name)) ? ? "Unknown"]
                }, [d]), T = (0, o(504692).D4)(n), P = o(381453).h1({}, o(504692).bX, null == T ? void 0 : T.customization).headers.hmac, V = (0, a.useCallback)(t => {
                    if ((null == C ? void 0 : C.type) === "internal") throw Error("internal integrations are not supported");
                    t && (j(!1), o(647095).f1(e.formatMessage(S.errorOccurred, {
                        integration: U
                    })))
                }, [C, U, e]), L = (0, a.useCallback)(async () => {
                    if (!M) {
                        if (T && (0, o(504692).Nl)({
                                env: "production",
                                integrationConfig: T,
                                webhookUrlToValidate: g,
                                experimentService: o(218744).default,
                                actor: {
                                    table: o(832375).oo9,
                                    id: t.currentUser.id || ""
                                },
                                spaceId: (null == s ? void 0 : s.id) || ""
                            })) k(!1);
                        else {
                            k(!0), j(!1);
                            return
                        }
                        if (P && !p) {
                            I(!0), j(!1);
                            return
                        }
                        if (j(!0), C) {
                            let e = await o(508523).v({
                                environment: t,
                                integration: C,
                                webhookUrl: g,
                                webhookSecret: p,
                                webhookHeaders: f,
                                webhookSubscriptionId: l,
                                onError: V,
                                onSuccess: () => o(436555).D6({
                                    label: (0, i.jsx)(o(109939).sA, {
                                        id: "configureIntegrationModal.snackbar.title",
                                        defaultMessage: "Added {integrationName} to your workspace",
                                        values: {
                                            integrationName: A
                                        }
                                    })
                                })
                            });
                            if (o(300441).Q.isFail(e)) return void j(!1);
                            await o(994869).refreshExternalIntegrationStore({
                                environment: t
                            }), await o(148465).refreshComplianceIntegrationStore({
                                environment: t
                            }), W()
                        }
                    }
                }, [t, V, C, A, M, p, f, P, l, g, T, s]), R = (0, a.useCallback)(e => b(e.target.value), []), E = (0, a.useCallback)(e => {
                    m(e)
                }, []), W = () => {
                    o(129480).A.setState({
                        open: !1
                    }), u(""), b(""), k(!1), I(!1), j(!1)
                };
                return C && T && s && "internal" !== _ ? (0, i.jsx)(o(979479).A, {
                    innerStyle: o(418443).styles.modal,
                    isOpen: r,
                    onDismiss: W,
                    content: () => (0, i.jsxs)("div", {
                        style: o(418443).styles.mobileModal,
                        children: [(0, i.jsxs)(o(4458).VP, {
                            alignItems: "center",
                            children: [(0, i.jsx)(o(374533).A, {
                                icon: o(25094).xMarkSmallIcon,
                                onClick: W,
                                style: o(418443).styles.cancelButton,
                                hoveredStyle: o(418443).styles.hovered,
                                ariaLabel: e.formatMessage(S.closeModalAriaLabel)
                            }), (0, i.jsx)(o(629553).K, {
                                integrationModel: C,
                                integrationConfig: T,
                                spaceStore: s
                            }), (0, i.jsxs)(o(4458).VP, {
                                alignItems: "flex-start",
                                width: 360,
                                children: [(0, i.jsxs)(o(111010).D, {
                                    as: "label",
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    style: {
                                        marginBottom: 4,
                                        ...x.style0
                                    },
                                    children: [(0, i.jsx)(o(109939).sA, {
                                        id: "integrations.configureIntegrationModal.webhookUrlInput",
                                        defaultMessage: "Webhook URL"
                                    }), (0, i.jsx)(o(51831).m, {
                                        placement: "bottom",
                                        content: () => (0, i.jsx)(o(109939).sA, {
                                            id: "integrations.configureIntegrationModal.webhookUrlInput.tooltip",
                                            defaultMessage: "Enter the webhook URL provided by {integrationName}",
                                            values: {
                                                integrationName: U
                                            }
                                        }),
                                        children: e => (0, i.jsx)(o(724235).V, { ...e,
                                            href: (0, o(442564).x)("guides.publicAPI"),
                                            analyticsFrom: "workspace_connections",
                                            style: x.helpInfo
                                        })
                                    })]
                                }), (0, i.jsx)(o(36481).p, {
                                    type: "text",
                                    style: x.style1,
                                    value: g,
                                    onChange: e => {
                                        u(e.target.value), k(!1)
                                    },
                                    placeholder: e.formatMessage(S.webhookUrlPlaceholder),
                                    focusInitial: !0,
                                    onKeyDown: async e => {
                                        "Enter" === e.key && await L()
                                    }
                                }), y ? (0, i.jsx)("div", {
                                    style: { ...x.style2,
                                        ...x.errorText
                                    },
                                    children: (0, i.jsx)(o(109939).sA, {
                                        id: "integrations.configureIntegrationModal.invalidUrl",
                                        defaultMessage: "Invalid webhook URL"
                                    })
                                }) : null]
                            }), T.acceptsSecretToken ? (0, i.jsxs)(o(4458).VP, {
                                alignItems: "flex-start",
                                width: 360,
                                children: [(0, i.jsxs)(o(111010).D, {
                                    as: "label",
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    style: {
                                        marginBottom: 4,
                                        ...x.style3
                                    },
                                    children: [(0, i.jsx)(o(109939).sA, {
                                        id: "integrations.configureIntegrationModal.webhookSecretInput",
                                        defaultMessage: "Token"
                                    }), (0, i.jsx)(o(51831).m, {
                                        placement: "bottom",
                                        content: () => (0, i.jsx)(o(109939).sA, {
                                            id: "integrations.configureIntegrationModal.webhookTokenInput.tooltip",
                                            defaultMessage: "Enter the token provided by {integrationName}",
                                            values: {
                                                integrationName: U
                                            }
                                        }),
                                        children: e => (0, i.jsx)(o(724235).V, { ...e,
                                            href: (0, o(442564).x)("guides.publicAPI"),
                                            analyticsFrom: "workspace_connections",
                                            style: x.helpInfo
                                        })
                                    })]
                                }), (0, i.jsx)(w, {
                                    secret: p,
                                    onChange: R,
                                    submit: L,
                                    placeholder: e.formatMessage(S.webhookSecretPlaceholder)
                                }), v ? (0, i.jsx)("div", {
                                    style: { ...x.style2,
                                        ...x.errorText
                                    },
                                    children: (0, i.jsx)(o(109939).sA, {
                                        id: "integrations.configureIntegrationModal.invalidSecret",
                                        defaultMessage: "Webhook secret is required."
                                    })
                                }) : null]
                            }) : void 0, T.acceptsCustomHeaders ? (0, i.jsx)(o(4458).VP, {
                                alignItems: "flex-start",
                                width: 360,
                                children: (0, i.jsx)(h, {
                                    headers: f,
                                    onChange: E
                                })
                            }) : void 0, (0, i.jsx)(o(912946).A, {
                                colorPalette: "blue",
                                style: o(418443).styles.connect,
                                onClick: L,
                                disabled: "" === g || P && "" === p,
                                children: M ? (0, i.jsx)(o(517334).k, {}) : (0, i.jsx)("span", {
                                    children: l ? e.formatMessage(S.updateButton) : e.formatMessage(S.createButton)
                                })
                            })]
                        }), T.website_url ? (0, i.jsx)(o(391066).r, {
                            signupUrl: T.signupUrl ? ? T.website_url
                        }) : void 0]
                    })
                }) : null
            }
        },
        920906: (e, t, o) => {
            o.r(t), o.d(t, {
                eyeFillIcon: () => r,
                iconDefinition: () => i
            }), o(296540);
            var a = o(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.96 4.19 18.07 11.62",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M10 8.894a1.104 1.104 0 1 1-.003 2.207A1.104 1.104 0 0 1 10 8.894"
                        }), (0, a.jsx)("path", {
                            d: "M10 4.194c3.878 0 7.26 2.075 8.862 5.127l.073.163c.126.333.126.7 0 1.033l-.073.163c-1.602 3.052-4.984 5.126-8.862 5.126-3.757 0-7.049-1.946-8.707-4.843l-.156-.283a1.46 1.46 0 0 1 0-1.359l.156-.283C2.95 6.141 6.243 4.194 10 4.194m0 2.496a3.307 3.307 0 0 0-3.306 3.307l.004.17A3.307 3.307 0 0 0 9.83 13.3l.17.004a3.305 3.305 0 0 0 3.3-3.137l.005-.17a3.307 3.307 0 0 0-3.135-3.303z"
                        })]
                    })
                },
                r = (0, o(104509).wt)("eyeFill", i, "fill")
        }
    }
]);