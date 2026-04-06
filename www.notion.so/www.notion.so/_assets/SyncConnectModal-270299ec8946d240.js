"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [49923], {
        127322: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(581454);
            var a = n(296540),
                i = () => n(546605);
            class o extends i().Store {
                getInitialState() {
                    return {}
                }
            }
            var s = n(474848);
            let r = a.forwardRef(function({
                isMenuItem: e,
                style: t,
                labelStyle: i,
                alignmentToOrigin: r,
                renderMenuSections: d,
                label: u,
                selectedTitle: y,
                focused: g,
                disabled: p,
                innerButtonStyle: f,
                buttonPopupStore: h,
                buttonVariant: m,
                buttonProps: j,
                menuWidth: x,
                menuMaxHeight: b,
                menuTitle: v,
                menuShowDone: C
            }, S) {
                let M = (0, n(682985).uB)(void 0, o),
                    I = (0, n(682985).uB)(h, n(510969).A),
                    k = (0, n(960253).I)(() => ({
                        wrapper: {
                            alignItems: "center",
                            display: "flex",
                            ...t
                        },
                        label: {
                            color: n(632079).Tj.text.tertiary,
                            fontSize: 14,
                            marginInlineEnd: "auto",
                            ...i
                        }
                    }), [i, t]);
                return ((0, a.useImperativeHandle)(S, () => ({
                    closeMenu: () => {
                        I.setState({ ...I.state,
                            open: !1
                        })
                    }
                }), [I]), e) ? (0, s.jsx)(c, {
                    alignmentToOrigin: r,
                    isMenuItem: e,
                    renderMenuSections: d,
                    buttonPopupStore: I,
                    selectButtonStore: M,
                    menuWidth: x,
                    menuMaxHeight: b,
                    menuTitle: v,
                    menuShowDone: C,
                    children: n => (0, s.jsx)(l, {
                        events: n,
                        style: t,
                        isMenuItem: e,
                        label: u,
                        selectedTitle: y,
                        focused: g,
                        disabled: p
                    })
                }) : (0, s.jsxs)("div", {
                    style: k.wrapper,
                    children: [u ? (0, s.jsx)("div", {
                        style: k.label,
                        children: u
                    }) : void 0, (0, s.jsx)(c, {
                        alignmentToOrigin: r,
                        isMenuItem: e,
                        renderMenuSections: d,
                        buttonPopupStore: I,
                        selectButtonStore: M,
                        menuWidth: x,
                        menuMaxHeight: b,
                        menuTitle: v,
                        menuShowDone: C,
                        children: e => {
                            if (m) {
                                let t = (0, n(586880).x)(m);
                                return (0, s.jsx)(t, {
                                    disabled: p,
                                    style: f,
                                    iconTrailing: {
                                        icon: n(595453).arrowChevronSingleDownSmallIcon,
                                        size: "xs",
                                        colorVariant: p ? "disabled" : "secondary"
                                    },
                                    ...j,
                                    ...e,
                                    children: y
                                })
                            }
                            return (0, s.jsx)(n(988022).p, {
                                disabled: p,
                                disabledFeedback: !0,
                                style: {
                                    marginInlineEnd: -6,
                                    ...f
                                },
                                iconTrailing: {
                                    icon: n(595453).arrowChevronSingleDownSmallIcon,
                                    size: "xs",
                                    colorVariant: p ? "disabled" : "secondary"
                                },
                                ...e,
                                children: y
                            })
                        }
                    })]
                })
            });

            function l({
                events: e,
                style: t,
                isMenuItem: a,
                label: i,
                selectedTitle: o,
                focused: r,
                disabled: c
            }) {
                return a ? (0, s.jsx)(n(338798)._, { ...e,
                    focused: !!r,
                    disabled: c,
                    style: t,
                    ...i ? {
                        title: i,
                        right: o
                    } : {
                        title: o
                    }
                }) : null
            }

            function c({
                children: e,
                alignmentToOrigin: t,
                isMenuItem: a,
                renderMenuSections: i,
                buttonPopupStore: o,
                selectButtonStore: r,
                menuWidth: l,
                menuMaxHeight: d,
                menuTitle: u,
                menuShowDone: y
            }) {
                let g = (0, n(682985).K8)(() => r.state.selectedKey, [r]);
                return (0, s.jsx)(n(656252).A, {
                    popupType: n(986939).A.isMobile ? n(656252).z.BottomSheet : n(656252).z.Popup,
                    buttonPopupStore: o,
                    alignmentToOrigin: void 0 !== t ? t : "end",
                    placementToOrigin: a ? "right" : "bottom",
                    originGap: a ? void 0 : 4,
                    content: e => {
                        let {
                            focusedIndex: t,
                            menuSections: a
                        } = function(e) {
                            let t, {
                                    parent: n,
                                    renderMenuSections: a,
                                    selectButtonStore: i,
                                    selectedKey: o
                                } = e,
                                s = 0;
                            return {
                                menuSections: a(n).map(e => ({ ...e,
                                    items: e.items.map(e => (o && e.key === o && (t = s), s++, { ...e,
                                        action: t => {
                                            var n;
                                            e.action(t), n = e.key, i.setState({
                                                selectedKey: n
                                            })
                                        }
                                    }))
                                })),
                                focusedIndex: t
                            }
                        }({
                            parent: e,
                            renderMenuSections: i,
                            selectButtonStore: r,
                            selectedKey: g
                        }), o = (0, s.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            initialFocus: t,
                            sections: a
                        });
                        return n(986939).A.isMobile ? (0, s.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Modal,
                            title: u,
                            right: y ? (0, s.jsx)(n(109939).sA, {
                                defaultMessage: "Done",
                                id: "selectButton.mobileModal.done.label"
                            }) : void 0,
                            onClickRight: y ? e.close : void 0,
                            children: o
                        }) : (0, s.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Popup,
                            width: l,
                            maxHeight: d,
                            children: o
                        })
                    },
                    children: e
                })
            }
        },
        293416: (e, t, n) => {
            n.d(t, {
                DP: () => r,
                Gr: () => u,
                Ks: () => d,
                NK: () => c,
                O1: () => y,
                Tr: () => g,
                Yo: () => o,
                bf: () => l,
                dq: () => p,
                m3: () => i,
                pI: () => s
            });
            let a = (0, n(109939).YK)({
                refreshHealthFailed: {
                    id: "syncCollectionActions.refreshHealthFailed",
                    defaultMessage: "Failed to refresh health. Try again."
                },
                pauseSyncFailed: {
                    id: "syncCollectionActions.pauseSyncFailed",
                    defaultMessage: "Failed to pause sync. Try again."
                },
                resumeSyncFailed: {
                    id: "syncCollectionActions.resumeSyncFailed",
                    defaultMessage: "Failed to resume sync. Try again."
                },
                deleteSyncFailed: {
                    id: "syncCollectionActions.deleteSyncFailed",
                    defaultMessage: "Failed to delete sync. Try again."
                }
            });
            async function i(e) {
                let {
                    environment: t,
                    spaceId: n,
                    credentialId: a
                } = e, i = await t.api.callApi({
                    eventName: "syncValidateCredential",
                    environment: t,
                    data: {
                        spaceId: n,
                        credentialId: a
                    }
                });
                return "success" !== i.type ? {
                    valid: !1,
                    error: "Failed to validate credential"
                } : {
                    valid: i.data.valid,
                    error: i.data.error
                }
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceId: n,
                    credentialId: a,
                    sourceKey: i,
                    resources: o
                } = e, s = await t.api.callApi({
                    eventName: "syncCreateSync",
                    environment: t,
                    data: {
                        spaceId: n,
                        credentialId: a,
                        sourceKey: i,
                        resources: o
                    }
                });
                if ("success" === s.type) return {
                    syncId: s.data.syncId,
                    collections: s.data.collections
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    spaceId: a,
                    collectionId: i,
                    store: o
                } = e;
                o.update(e => ({ ...e,
                    loading: !0,
                    error: void 0
                }));
                let s = await t.api.callApi({
                    eventName: "syncGetForCollection",
                    environment: t,
                    data: {
                        spaceId: a,
                        collectionId: i
                    }
                });
                if ("success" !== s.type) return void o.update(e => ({ ...e,
                    loaded: !0,
                    loading: !1,
                    error: "Failed to load sync info"
                }));
                let {
                    sync: r,
                    credential: l,
                    health: c
                } = s.data;
                r ? o.update(e => ({ ...e,
                    loaded: !0,
                    syncId: r.id,
                    sourceKey: r.sourceKey,
                    config: r.config ? ? void 0,
                    credential: l ? ? void 0,
                    selectedProjectKeys: (0, n(889551).hr)({
                        sourceKey: r.sourceKey,
                        config: r.config
                    }),
                    selectedOptionalPropertyIds: (0, n(889551).dJ)({
                        sourceKey: r.sourceKey,
                        config: r.config
                    }),
                    configured: r.configured,
                    disabled: r.disabled,
                    health: c ? ? void 0,
                    loading: !1
                })) : o.update(e => ({ ...e,
                    loaded: !0,
                    syncId: void 0,
                    sourceKey: void 0,
                    config: void 0,
                    credential: void 0,
                    selectedProjectKeys: [],
                    selectedOptionalPropertyIds: [],
                    configured: !1,
                    disabled: !1,
                    health: void 0,
                    loading: !1
                }))
            }
            async function r(e) {
                let {
                    environment: t,
                    spaceId: n,
                    credentialId: a,
                    store: i
                } = e;
                i.update(e => ({ ...e,
                    loadingResources: !0,
                    error: void 0
                }));
                let o = await t.api.callApi({
                    eventName: "syncJiraListProjects",
                    environment: t,
                    data: {
                        spaceId: n,
                        credentialId: a
                    }
                });
                "success" !== o.type ? i.update(e => ({ ...e,
                    loadingResources: !1,
                    error: "Failed to load upstream resources"
                })) : i.update(e => ({ ...e,
                    upstreamResources: o.data.resources,
                    loadingResources: !1
                }))
            }
            async function l(e) {
                let {
                    environment: t,
                    spaceId: n,
                    credentialId: a,
                    sourceKey: i,
                    store: o
                } = e;
                o.update(e => ({ ...e,
                    loadingProperties: !0,
                    error: void 0
                }));
                let s = await t.api.callApi({
                    eventName: "syncListConfigurableProperties",
                    environment: t,
                    data: {
                        spaceId: n,
                        credentialId: a,
                        sourceKey: i
                    }
                });
                "success" !== s.type ? o.update(e => ({ ...e,
                    loadingProperties: !1,
                    error: "Failed to load configurable properties"
                })) : o.update(e => ({ ...e,
                    availableProperties: s.data.properties,
                    loadingProperties: !1
                }))
            }
            async function c(e) {
                let {
                    environment: t,
                    spaceId: a,
                    syncId: i,
                    sourceKey: o,
                    config: s,
                    selectedProjectKeys: r,
                    store: l
                } = e, c = (0, n(889551).$g)({
                    sourceKey: o,
                    config: s,
                    selectedProjectKeys: r
                });
                return c ? (l.update(e => ({ ...e,
                    saving: !0,
                    error: void 0
                })), "success" !== (await t.api.callApi({
                    eventName: "syncUpdateConfig",
                    environment: t,
                    data: {
                        spaceId: a,
                        syncId: i,
                        config: c
                    }
                })).type) ? (l.update(e => ({ ...e,
                    saving: !1,
                    error: "Failed to update sync config"
                })), !1) : (l.update(e => ({ ...e,
                    configured: !0,
                    config: c,
                    selectedProjectKeys: r,
                    saving: !1
                })), u({
                    environment: t,
                    spaceId: a,
                    syncId: i,
                    store: l
                }), !0) : (l.update(e => ({ ...e,
                    error: "Failed to build sync config from selected projects"
                })), !1)
            }
            async function d(e) {
                let {
                    environment: t,
                    spaceId: a,
                    syncId: i,
                    sourceKey: o,
                    config: s,
                    selectedProjectKeys: r,
                    optionalSelectedPropertyIds: l,
                    store: c
                } = e, d = (0, n(889551).YI)({
                    sourceKey: o,
                    config: s,
                    selectedProjectKeys: r,
                    optionalSelectedPropertyIds: l
                });
                return d ? (c.update(e => ({ ...e,
                    saving: !0,
                    error: void 0
                })), "success" !== (await t.api.callApi({
                    eventName: "syncUpdateConfig",
                    environment: t,
                    data: {
                        spaceId: a,
                        syncId: i,
                        config: d
                    }
                })).type) ? (c.update(e => ({ ...e,
                    saving: !1,
                    error: "Failed to update sync config"
                })), !1) : (c.update(e => ({ ...e,
                    configured: !0,
                    config: d,
                    selectedProjectKeys: r,
                    selectedOptionalPropertyIds: l,
                    saving: !1
                })), u({
                    environment: t,
                    spaceId: a,
                    syncId: i,
                    store: c
                }), !0) : (c.update(e => ({ ...e,
                    error: "Failed to build sync config"
                })), !1)
            }
            async function u(e) {
                let {
                    environment: t,
                    spaceId: i,
                    syncId: o,
                    store: s
                } = e;
                s.update(e => ({ ...e,
                    loading: !0
                }));
                let r = await t.api.callApi({
                    eventName: "syncRefreshHealth",
                    environment: t,
                    data: {
                        spaceId: i,
                        syncId: o
                    }
                });
                if ("success" !== r.type) {
                    s.update(e => ({ ...e,
                        loading: !1
                    })), n(436555).D6({
                        label: n(962299).A.formatMessage(a.refreshHealthFailed)
                    });
                    return
                }
                let {
                    health: l
                } = r.data;
                s.update(e => ({ ...e,
                    health: l ? ? void 0,
                    loading: !1
                }))
            }
            async function y(e) {
                let {
                    environment: t,
                    spaceId: i,
                    syncId: o,
                    store: s
                } = e;
                s.update(e => ({ ...e,
                    loading: !0
                }));
                let r = await t.api.callApi({
                    eventName: "syncSetDisabled",
                    environment: t,
                    data: {
                        spaceId: i,
                        syncId: o,
                        disabled: !0
                    }
                });
                if ("success" !== r.type) {
                    s.update(e => ({ ...e,
                        loading: !1
                    })), n(436555).D6({
                        label: n(962299).A.formatMessage(a.pauseSyncFailed)
                    });
                    return
                }
                let {
                    health: l
                } = r.data;
                s.update(e => ({ ...e,
                    disabled: !0,
                    health: l ? ? void 0,
                    loading: !1
                }))
            }
            async function g(e) {
                let {
                    environment: t,
                    spaceId: i,
                    syncId: o,
                    store: s
                } = e;
                s.update(e => ({ ...e,
                    loading: !0
                }));
                let r = await t.api.callApi({
                    eventName: "syncSetDisabled",
                    environment: t,
                    data: {
                        spaceId: i,
                        syncId: o,
                        disabled: !1
                    }
                });
                if ("success" !== r.type) {
                    s.update(e => ({ ...e,
                        loading: !1
                    })), n(436555).D6({
                        label: n(962299).A.formatMessage(a.resumeSyncFailed)
                    });
                    return
                }
                let {
                    health: l
                } = r.data;
                s.update(e => ({ ...e,
                    disabled: !1,
                    health: l ? ? void 0,
                    loading: !1
                }))
            }
            async function p(e) {
                let {
                    environment: t,
                    spaceId: i,
                    syncId: o,
                    store: s
                } = e;
                if (s.update(e => ({ ...e,
                        loading: !0
                    })), "success" !== (await t.api.callApi({
                        eventName: "syncDeleteSync",
                        environment: t,
                        data: {
                            spaceId: i,
                            syncId: o
                        }
                    })).type) {
                    s.update(e => ({ ...e,
                        loading: !1
                    })), n(436555).D6({
                        label: n(962299).A.formatMessage(a.deleteSyncFailed)
                    });
                    return
                }
                s.update(() => ({ ...s.getInitialState(),
                    loaded: !0
                }))
            }
        },
        338798: (e, t, n) => {
            n.d(t, {
                _: () => r
            });
            var a = n(296540),
                i = n(474848);
            let o = {
                    krdFHd: "x1i5p2am",
                    kfmiAY: "x1whfx0g",
                    kT0f0o: "xr2y4jy",
                    kVL7Gh: "x1ihp6rs",
                    $$css: !0
                },
                s = {
                    kzqmXN: "xh8yej3",
                    $$css: !0
                };

            function r(e) {
                let t = (0, a.useMemo)(() => [s, !n(986939).A.isMobile && o, e.buttonStyle], [e.buttonStyle]);
                return (0, i.jsx)(n(64960).Ay, {
                    onClick: e.onClick,
                    hovered: e.focused,
                    disabled: e.disabled,
                    style: t,
                    hoveredStyle: e.hoveredButtonStyle,
                    pressedStyle: e.pressedButtonStyle,
                    children: (0, i.jsx)(n(636518).Ay, { ...e,
                        dontShrinkTitle: !0,
                        right: (0, i.jsxs)("div", { ...{
                                className: "x78zum5 x6s0dn4 xuxw1ft x1r0jzty x17zd0t2"
                            },
                            children: [e.right ? (0, i.jsx)(n(324489).V, {
                                isSecondaryColor: !0,
                                children: e.right
                            }) : void 0, n(986939).A.isMobile ? void 0 : (0, i.jsx)("div", { ...{
                                    0: {
                                        className: "x2lah0s x1jaox4c"
                                    },
                                    1: {
                                        className: "x2lah0s x1jaox4c x182y5vf"
                                    }
                                }["right" === e.chevronType | 0],
                                children: (0, i.jsx)(n(16275).I, {
                                    icon: n(595453).arrowChevronSingleDownSmallIcon,
                                    size: "xs",
                                    colorVariant: "tertiary"
                                })
                            })]
                        })
                    })
                })
            }
        },
        604631: (e, t, n) => {
            n.r(t), n.d(t, {
                SyncConnectModal: () => c
            }), n(16280), n(944114), n(898992), n(672577), n(581454), n(908872);
            var a = n(296540),
                i = n(474848);

            function o() {
                let e = (0, n(960253).e)(),
                    t = (0, n(960253).I)(() => ({
                        icon: {
                            height: 18,
                            width: 18,
                            marginTop: 2,
                            marginInlineEnd: 2,
                            fill: "dark" === e ? n(632079).Tj.primaryBlack : n(632079).Tj.blue.icon.accentPrimary
                        }
                    }), [e]);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, n(117073).jiraIcon)(t.icon)
                })
            }
            let s = (0, n(109939).YK)({
                connectJiraTitle: {
                    id: "syncOauthActions.connectJira.popupTitle",
                    defaultMessage: "Connect to Jira"
                }
            });
            async function r(e) {
                let {
                    environment: t,
                    spaceId: a,
                    provider: i,
                    existingCredentialId: o
                } = e, r = await t.api.callApi({
                    eventName: "syncStartOauth",
                    environment: t,
                    data: {
                        spaceId: a,
                        provider: i,
                        existingCredentialId: o
                    }
                });
                if ("success" !== r.type) throw Error("Failed to start sync OAuth flow");
                let {
                    authorizationUrl: l
                } = r.data;
                return {
                    popupResult: await (0, n(956935).P)(t, {
                        width: 800,
                        height: 600,
                        url: l,
                        titleMessage: s.connectJiraTitle
                    })
                }
            }
            let l = (0, n(109939).YK)({
                modalTitle: {
                    id: "syncConnectModal.title",
                    defaultMessage: "Connect Jira"
                },
                introDescription: {
                    id: "syncConnectModal.intro.description",
                    defaultMessage: "Connect your Jira Cloud account to sync projects and issues into Notion. You’ll be redirected to Atlassian to authorize access."
                },
                connectButton: {
                    id: "syncConnectModal.intro.connectButton",
                    defaultMessage: "Connect to Jira"
                },
                connectingButtonLabel: {
                    id: "syncConnectModal.connecting.buttonLabel",
                    defaultMessage: "Awaiting completion in other window"
                },
                connectingCancel: {
                    id: "syncConnectModal.connecting.cancel",
                    defaultMessage: "Cancel"
                },
                successTitle: {
                    id: "syncConnectModal.success.title",
                    defaultMessage: "Connected"
                },
                successDescription: {
                    id: "syncConnectModal.success.description",
                    defaultMessage: "Your Jira account has been connected. You can now set up a sync."
                },
                doneButton: {
                    id: "syncConnectModal.success.doneButton",
                    defaultMessage: "Done"
                },
                errorTitle: {
                    id: "syncConnectModal.error.title",
                    defaultMessage: "Connection failed"
                },
                retryButton: {
                    id: "syncConnectModal.error.retryButton",
                    defaultMessage: "Try again"
                },
                alphaBadge: {
                    id: "syncConnectModal.alphaBadge",
                    defaultMessage: "ALPHA"
                },
                selectCredentialDescription: {
                    id: "syncConnectModal.selectCredential.description",
                    defaultMessage: "Select a Jira account and choose what to sync into Notion."
                },
                accountLabel: {
                    id: "syncConnectModal.selectCredential.accountLabel",
                    defaultMessage: "Account"
                },
                syncResourcesLabel: {
                    id: "syncConnectModal.selectCredential.syncResourcesLabel",
                    defaultMessage: "Sync"
                },
                issuesCheckbox: {
                    id: "syncConnectModal.selectCredential.issuesCheckbox",
                    defaultMessage: "Issues"
                },
                projectsCheckbox: {
                    id: "syncConnectModal.selectCredential.projectsCheckbox",
                    defaultMessage: "Projects"
                },
                createButton: {
                    id: "syncConnectModal.selectCredential.createButton",
                    defaultMessage: "Create"
                },
                creatingButton: {
                    id: "syncConnectModal.selectCredential.creatingButton",
                    defaultMessage: "Creating…"
                },
                connectNewAccount: {
                    id: "syncConnectModal.selectCredential.connectNewAccount",
                    defaultMessage: "Connect new account"
                },
                credentialInvalid: {
                    id: "syncConnectModal.selectCredential.credentialInvalid",
                    defaultMessage: "Connection failed. Please reconnect your Jira account."
                },
                reconnectButton: {
                    id: "syncConnectModal.selectCredential.reconnectButton",
                    defaultMessage: "Reconnect"
                }
            });

            function c() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(109939).tz)(),
                    s = (0, n(723240).r)(),
                    c = (0, n(682985).K8)(() => n(989700).i.state.open, []),
                    [u, g] = (0, a.useState)("loading"),
                    [j, x] = (0, a.useState)(),
                    [b, v] = (0, a.useState)([]),
                    [C, S] = (0, a.useState)(),
                    [M, I] = (0, a.useState)(!0),
                    [k, P] = (0, a.useState)(!0),
                    [A, w] = (0, a.useState)(!1),
                    [T, K] = (0, a.useState)("idle"),
                    [B, D] = (0, a.useState)(),
                    F = (0, a.useRef)(0),
                    N = (0, a.useCallback)(t => {
                        if (S(t), !s) return;
                        let a = ++F.current;
                        K("validating"), D(void 0), (0, n(293416).m3)({
                            environment: e,
                            spaceId: s,
                            credentialId: t
                        }).then(e => {
                            F.current === a && (e.valid ? K("valid") : (K("invalid"), D(e.error)))
                        })
                    }, [e, s]),
                    V = (0, a.useCallback)(async () => {
                        if (s && C) {
                            g("connecting");
                            try {
                                let {
                                    popupResult: t
                                } = await r({
                                    environment: e,
                                    spaceId: s,
                                    provider: "jira",
                                    existingCredentialId: C
                                });
                                t ? (g("selectCredential"), N(C)) : g("selectCredential")
                            } catch (e) {
                                x(e instanceof Error ? e.message : "Unknown error"), g("error")
                            }
                        }
                    }, [e, s, C, N]),
                    L = (0, a.useCallback)(async () => {
                        if (!s) return !1;
                        let t = await e.api.callApi({
                            eventName: "syncListCredentials",
                            environment: e,
                            data: {
                                spaceId: s,
                                provider: "jira"
                            }
                        });
                        if ("success" === t.type && t.data.credentials.length > 0) {
                            let e = t.data.credentials;
                            v(e);
                            let n = e.reduce((e, t) => t.createdTime > e.createdTime ? t : e);
                            return S(n.id), g("selectCredential"), N(n.id), !0
                        }
                        return !1
                    }, [e, s, N]);
                (0, a.useEffect)(() => {
                    c && s && (g("loading"), (async () => {
                        await L() || g("intro")
                    })())
                }, [c, s, L]);
                let R = (0, a.useCallback)(async () => {
                        if (s) {
                            g("connecting");
                            try {
                                let {
                                    popupResult: t
                                } = await r({
                                    environment: e,
                                    spaceId: s,
                                    provider: "jira"
                                });
                                t ? await L() || g("success") : g("intro")
                            } catch (e) {
                                x(e instanceof Error ? e.message : "Unknown error"), g("error")
                            }
                        }
                    }, [e, s, L]),
                    z = (0, a.useMemo)(() => {
                        let e = [];
                        return M && e.push("issues"), k && e.push("projects"), e
                    }, [M, k]),
                    O = (0, a.useCallback)(async () => {
                        if (s && C && 0 !== z.length) {
                            w(!0);
                            try {
                                let t = await (0, n(293416).Yo)({
                                    environment: e,
                                    spaceId: s,
                                    credentialId: C,
                                    sourceKey: "jira",
                                    resources: z
                                });
                                if (t) {
                                    let e = n(989700).i.state.onCreated;
                                    n(989700).i.hide(), e && e(t)
                                } else x("Failed to create sync"), g("error")
                            } catch (e) {
                                x(e instanceof Error ? e.message : "Unknown error"), g("error")
                            } finally {
                                w(!1)
                            }
                        }
                    }, [e, s, C, z]),
                    J = (0, a.useCallback)(() => {
                        g("loading"), x(void 0), v([]), S(void 0), I(!0), P(!0), w(!1), K("idle"), D(void 0), n(989700).i.hide()
                    }, []);
                return (0, i.jsx)(n(556809).a, {
                    open: c,
                    onDismiss: J,
                    innerStyle: {
                        width: 450,
                        height: "fit-content"
                    },
                    ariaLabel: t.formatMessage(l.modalTitle),
                    children: (0, i.jsxs)(n(4458).VP, {
                        padding: 20,
                        gap: 16,
                        children: [(0, i.jsxs)(n(4458).fI, {
                            gap: 8,
                            justifyContent: "space-between",
                            children: [(0, i.jsxs)(n(4458).fI, {
                                gap: 8,
                                children: [(0, i.jsx)(o, {}), (0, i.jsx)(n(111010).D, {
                                    styleKey: "titleSmSemibold",
                                    children: t.formatMessage(l.modalTitle)
                                })]
                            }), (0, i.jsx)("span", {
                                style: m.badge,
                                children: t.formatMessage(l.alphaBadge)
                            })]
                        }), "loading" === u ? (0, i.jsx)(n(4458).VP, {
                            gap: 12,
                            children: (0, i.jsx)(n(912946).A, {
                                disabled: !0,
                                isLoading: !0,
                                children: t.formatMessage(l.connectButton)
                            })
                        }) : void 0, "intro" === u ? (0, i.jsx)(d, {
                            onConnect: R,
                            description: t.formatMessage(l.introDescription),
                            buttonLabel: t.formatMessage(l.connectButton)
                        }) : void 0, "selectCredential" === u ? (0, i.jsx)(y, {
                            credentials: b,
                            selectedCredentialId: C,
                            onSelectCredential: N,
                            syncIssues: M,
                            syncProjects: k,
                            onToggleIssues: () => I(e => !e),
                            onToggleProjects: () => P(e => !e),
                            creating: A,
                            canCreate: z.length > 0 && "valid" === T,
                            onCreate: O,
                            onConnectDifferent: R,
                            validationStatus: T,
                            validationError: B,
                            onReconnect: V
                        }) : void 0, "connecting" === u ? (0, i.jsx)(p, {
                            buttonLabel: t.formatMessage(l.connectingButtonLabel),
                            cancelLabel: t.formatMessage(l.connectingCancel),
                            onCancel: () => g("intro")
                        }) : void 0, "success" === u ? (0, i.jsx)(f, {
                            title: t.formatMessage(l.successTitle),
                            description: t.formatMessage(l.successDescription),
                            buttonLabel: t.formatMessage(l.doneButton),
                            onDone: J
                        }) : void 0, "error" === u ? (0, i.jsx)(h, {
                            title: t.formatMessage(l.errorTitle),
                            error: j,
                            buttonLabel: t.formatMessage(l.retryButton),
                            onRetry: () => g("intro")
                        }) : void 0]
                    })
                })
            }

            function d({
                onConnect: e,
                description: t,
                buttonLabel: a
            }) {
                return (0, i.jsxs)(n(4458).VP, {
                    gap: 12,
                    children: [(0, i.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: t
                    }), (0, i.jsx)(n(912946).A, {
                        onClick: e,
                        children: a
                    })]
                })
            }

            function u(e) {
                return e.displayName ? e.displayName : `${e.id.slice(0,8)}…`
            }

            function y(e) {
                let t = (0, n(109939).tz)(),
                    a = e.credentials.find(t => t.id === e.selectedCredentialId),
                    o = a ? u(a) : "";
                return (0, i.jsxs)(n(4458).VP, {
                    gap: 16,
                    children: [(0, i.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: t.formatMessage(l.selectCredentialDescription)
                    }), (0, i.jsxs)(n(4458).VP, {
                        gap: 8,
                        children: [(0, i.jsxs)(n(4458).fI, {
                            gap: 8,
                            alignItems: "flex-end",
                            children: [(0, i.jsx)("div", {
                                style: m.selectButtonWrapper,
                                children: (0, i.jsx)(n(127322).A, {
                                    label: t.formatMessage(l.accountLabel),
                                    selectedTitle: o,
                                    renderMenuSections: a => [{
                                        key: "credentials",
                                        items: e.credentials.map(t => ({
                                            key: t.id,
                                            action: () => {
                                                a.close(), e.onSelectCredential(t.id)
                                            },
                                            render: e => (0, i.jsx)(n(95582).A, { ...e,
                                                title: u(t)
                                            })
                                        }))
                                    }, {
                                        key: "connect-new",
                                        render: e => (0, i.jsx)(n(844565).A, { ...e,
                                            topBorder: !0
                                        }),
                                        items: [{
                                            key: "connect-new-account",
                                            action: () => {
                                                a.close(), e.onConnectDifferent()
                                            },
                                            render: e => (0, i.jsx)(n(95582).A, { ...e,
                                                title: t.formatMessage(l.connectNewAccount)
                                            })
                                        }]
                                    }]
                                })
                            }), (0, i.jsx)(g, {
                                status: e.validationStatus
                            })]
                        }), "invalid" === e.validationStatus ? (0, i.jsxs)(n(4458).fI, {
                            gap: 8,
                            children: [(0, i.jsx)("div", {
                                style: m.selectButtonWrapper,
                                children: (0, i.jsxs)(n(4458).VP, {
                                    gap: 8,
                                    children: [(0, i.jsx)(n(111010).D, {
                                        styleKey: "captionSm",
                                        colorPalette: "red",
                                        colorVariant: "primary",
                                        children: t.formatMessage(l.credentialInvalid)
                                    }), (0, i.jsx)(n(548436).r, {
                                        onClick: e.onReconnect,
                                        children: t.formatMessage(l.reconnectButton)
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                style: m.reconnectSpacer
                            })]
                        }) : void 0]
                    }), (0, i.jsxs)(n(4458).VP, {
                        gap: 8,
                        children: [(0, i.jsx)(n(111010).D, {
                            styleKey: "captionSmSemibold",
                            children: t.formatMessage(l.syncResourcesLabel)
                        }), (0, i.jsxs)(n(4458).VP, {
                            gap: 4,
                            children: [(0, i.jsx)("div", {
                                role: "button",
                                tabIndex: 0,
                                style: m.checkboxItem,
                                onClick: e.onToggleIssues,
                                onKeyDown: t => {
                                    ("Enter" === t.key || " " === t.key) && e.onToggleIssues()
                                },
                                children: (0, i.jsxs)(n(4458).fI, {
                                    gap: 8,
                                    alignItems: "center",
                                    children: [(0, i.jsx)(n(349050).S, {
                                        size: 14,
                                        checked: e.syncIssues
                                    }), (0, i.jsx)(n(111010).D, {
                                        styleKey: "bodySm",
                                        children: t.formatMessage(l.issuesCheckbox)
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                role: "button",
                                tabIndex: 0,
                                style: m.checkboxItem,
                                onClick: e.onToggleProjects,
                                onKeyDown: t => {
                                    ("Enter" === t.key || " " === t.key) && e.onToggleProjects()
                                },
                                children: (0, i.jsxs)(n(4458).fI, {
                                    gap: 8,
                                    alignItems: "center",
                                    children: [(0, i.jsx)(n(349050).S, {
                                        size: 14,
                                        checked: e.syncProjects
                                    }), (0, i.jsx)(n(111010).D, {
                                        styleKey: "bodySm",
                                        children: t.formatMessage(l.projectsCheckbox)
                                    })]
                                })
                            })]
                        })]
                    }), (0, i.jsx)(n(912946).A, {
                        colorPalette: "blue",
                        onClick: e.onCreate,
                        disabled: e.creating || !e.canCreate,
                        isLoading: e.creating,
                        children: e.creating ? t.formatMessage(l.creatingButton) : t.formatMessage(l.createButton)
                    })]
                })
            }

            function g(e) {
                let {
                    status: t
                } = e;
                return "idle" === t ? null : "validating" === t ? (0, i.jsx)("div", {
                    style: m.validationIndicator,
                    children: (0, i.jsx)(n(517334).k, {
                        size: 16
                    })
                }) : "valid" === t ? (0, i.jsx)("div", {
                    style: m.validationIndicator,
                    children: (0, i.jsx)(n(16275).I, {
                        icon: n(93042).checkmarkCircleFillIcon,
                        colorPalette: "green",
                        colorVariant: "primary",
                        size: "sm"
                    })
                }) : (0, i.jsx)("div", {
                    style: m.validationIndicator,
                    children: (0, i.jsx)(n(16275).I, {
                        icon: n(80925).exclamationMarkCircleFillIcon,
                        colorPalette: "red",
                        colorVariant: "primary",
                        size: "sm"
                    })
                })
            }

            function p({
                buttonLabel: e,
                cancelLabel: t,
                onCancel: a
            }) {
                return (0, i.jsxs)(n(4458).VP, {
                    gap: 12,
                    children: [(0, i.jsx)(n(912946).A, {
                        disabled: !0,
                        isLoading: !0,
                        children: e
                    }), (0, i.jsx)(n(4458).fI, {
                        gap: "inherit",
                        justifyContent: "center",
                        children: (0, i.jsx)(n(988022).p, {
                            onClick: a,
                            children: t
                        })
                    })]
                })
            }

            function f({
                title: e,
                description: t,
                buttonLabel: a,
                onDone: o
            }) {
                return (0, i.jsxs)(n(4458).VP, {
                    gap: 12,
                    children: [(0, i.jsx)(n(111010).D, {
                        styleKey: "titleSmSemibold",
                        children: e
                    }), (0, i.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: t
                    }), (0, i.jsx)(n(912946).A, {
                        onClick: o,
                        children: a
                    })]
                })
            }

            function h({
                title: e,
                error: t,
                buttonLabel: a,
                onRetry: o
            }) {
                return (0, i.jsxs)(n(4458).VP, {
                    gap: 12,
                    children: [(0, i.jsx)("span", {
                        style: m.errorTitle,
                        children: (0, i.jsx)(n(111010).D, {
                            styleKey: "titleSmSemibold",
                            children: e
                        })
                    }), t ? (0, i.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: t
                    }) : void 0, (0, i.jsx)(n(912946).A, {
                        onClick: o,
                        children: a
                    })]
                })
            }
            let m = {
                badge: {
                    fontSize: 10,
                    fontWeight: n(699422).Wy.semibold,
                    letterSpacing: .5,
                    color: n(632079).Tj.text.secondary,
                    backgroundColor: n(632079).Tj.background.secondary,
                    paddingBlock: 2,
                    paddingInline: 6,
                    borderRadius: 4
                },
                errorTitle: {
                    color: n(632079).Tj.red.text.primary
                },
                checkboxItem: {
                    padding: 8,
                    borderRadius: 6,
                    cursor: "pointer"
                },
                selectButtonWrapper: {
                    flex: 1,
                    minWidth: 0
                },
                reconnectSpacer: {
                    width: 16
                },
                validationIndicator: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: 4
                }
            }
        },
        889551: (e, t, n) => {
            function a(e) {
                return "string" == typeof e
            }

            function i(e) {
                return "string" == typeof e && !!(e.length > 0)
            }

            function o(e) {
                let t, o;
                if ((0, n(722371).Gv)(e) && "jira" === e._tag && (0, n(722371).Gv)(e.projects)) {
                    if ("all" === e.projects.mode) t = {
                        mode: "all"
                    };
                    else {
                        if (!("selected" === e.projects.mode && Array.isArray(e.projects.keys))) return;
                        t = {
                            mode: "selected",
                            keys: e.projects.keys.filter(a)
                        }
                    }
                    return (0, n(722371).Gv)(e.properties) && Array.isArray(e.properties.optionalSelected) && (o = {
                        optionalSelected: e.properties.optionalSelected.filter(i)
                    }), {
                        _tag: "jira",
                        projects: t,
                        properties: o
                    }
                }
            }

            function s(e) {
                let t = Array.from(new Set(e.selectedProjectKeys.filter(i)));
                if (0 === t.length) return;
                let n = {
                    _tag: "jira",
                    projects: {
                        mode: "selected",
                        keys: t
                    }
                };
                return e.optionalSelectedPropertyIds && e.optionalSelectedPropertyIds.length > 0 && (n.properties = {
                    optionalSelected: Array.from(new Set(e.optionalSelectedPropertyIds.filter(i)))
                }), n
            }
            n.d(t, {
                $g: () => u,
                YI: () => y,
                dJ: () => d,
                hr: () => c
            }), n(16280), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520);
            let r = {
                jira: {
                    getSelectedProjectKeys: ({
                        config: e
                    }) => {
                        let t = o(e);
                        return t && "selected" === t.projects.mode ? t.projects.keys : []
                    },
                    getSelectedOptionalPropertyIds: ({
                        config: e
                    }) => {
                        var t;
                        let n = o(e);
                        return (null == n || null == (t = n.properties) ? void 0 : t.optionalSelected) ? ? []
                    },
                    buildConfigFromSelectedProjects: ({
                        config: e,
                        selectedProjectKeys: t
                    }) => {
                        var n, a;
                        let i;
                        return i = o((n = {
                            selectedProjectKeys: t,
                            existingConfig: e
                        }).existingConfig), s({
                            selectedProjectKeys: n.selectedProjectKeys,
                            optionalSelectedPropertyIds: null == i || null == (a = i.properties) ? void 0 : a.optionalSelected
                        })
                    },
                    buildConfigFromProjectsAndProperties: ({
                        selectedProjectKeys: e,
                        optionalSelectedPropertyIds: t
                    }) => s({
                        selectedProjectKeys: e,
                        optionalSelectedPropertyIds: t
                    })
                }
            };

            function l(e) {
                let t = r[e];
                if (!t) throw Error(`No config helper registered for source key: ${e}`);
                return t
            }

            function c(e) {
                return l(e.sourceKey).getSelectedProjectKeys({
                    config: e.config
                })
            }

            function d(e) {
                return l(e.sourceKey).getSelectedOptionalPropertyIds({
                    config: e.config
                })
            }

            function u(e) {
                return l(e.sourceKey).buildConfigFromSelectedProjects({
                    config: e.config,
                    selectedProjectKeys: e.selectedProjectKeys
                })
            }

            function y(e) {
                return l(e.sourceKey).buildConfigFromProjectsAndProperties({
                    config: e.config,
                    selectedProjectKeys: e.selectedProjectKeys,
                    optionalSelectedPropertyIds: e.optionalSelectedPropertyIds
                })
            }
        }
    }
]);