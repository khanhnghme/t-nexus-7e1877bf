"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [2626], {
        76042: (e, t, o) => {
            o.d(t, {
                c: () => c
            }), o(814603), o(147566), o(198721), o(296540);
            var i = o(474848);
            let n = {
                    "connections-settings": "integration",
                    "imports-settings": "migration"
                },
                s = {
                    container: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 12,
                        backgroundColor: o(632079).Tj.background.secondary,
                        borderRadius: 12,
                        padding: "16px 12px"
                    },
                    iconContainer: {
                        width: 32,
                        height: 32,
                        backgroundColor: o(632079).Tj.background.tertiary,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    content: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        flex: "auto"
                    }
                };

            function a(e) {
                let {
                    title: t,
                    description: n,
                    action: a
                } = e;
                return (0, i.jsxs)("div", {
                    style: s.container,
                    children: [(0, i.jsx)("div", {
                        style: s.iconContainer,
                        children: (0, i.jsx)(o(16275).I, {
                            icon: o(109925).phoneIcon
                        })
                    }), (0, i.jsxs)("div", {
                        style: s.content,
                        children: [(0, i.jsx)(o(111010).D, {
                            styleKey: "bodyMedium",
                            children: (0, i.jsx)(o(109939).sA, { ...t
                            })
                        }), (0, i.jsx)(o(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: (0, i.jsx)(o(109939).sA, { ...n
                            })
                        })]
                    }), (0, i.jsx)(o(548436).A, { ...a.buttonProps,
                        children: (0, i.jsx)(o(109939).sA, { ...a.label
                        })
                    })]
                })
            }

            function r(e) {
                let {
                    placement: t
                } = e, n = p[t], s = d({
                    type: "setup-sessions",
                    placement: t
                }), r = (0, o(938211).J)(), l = function(e) {
                    let t = (0, o(109939).tz)(),
                        {
                            userId: i,
                            email: n,
                            firstName: s,
                            lastName: a
                        } = (0, o(682985).K8)(() => {
                            var e;
                            let i = o(728372).AppStoreCurrentUserStore.state,
                                n = null == i ? void 0 : i.id,
                                s = null == i ? void 0 : i.getEmail(),
                                a = (null == i || null == (e = i.getFullName(t)) ? void 0 : e.trim()) || "",
                                r = a,
                                l = "",
                                c = a.indexOf(" ");
                            return -1 !== c && (r = a.slice(0, c), l = a.slice(c + 1)), {
                                userId: n,
                                email: s,
                                firstName: r,
                                lastName: l
                            }
                        }, [t]),
                        r = (0, o(682985).K8)(() => {
                            let e = (0, o(328765).S)();
                            return null == e ? void 0 : e.getSubscriptionTier()
                        }, []),
                        l = new URL(`${o(986939).A.domainBaseUrl}/setup-sessions`);
                    return i && l.searchParams.set("User-ID", i), n && l.searchParams.set("email", n), l.searchParams.set("firstName", s), l.searchParams.set("lastName", a), l.searchParams.set("utm_source", "consultant_callout"), l.searchParams.set("utm_campaign", e), r && l.searchParams.set("Plan", r), l.toString()
                }(t);
                return r ? null : (0, i.jsx)(a, {
                    title: n.title,
                    description: n.setupSessionsDescription,
                    action: {
                        label: u.setupSessionsActionLabel,
                        buttonProps: {
                            external: !0,
                            href: l,
                            onClick: s
                        }
                    }
                })
            }

            function l(e) {
                let {
                    placement: t
                } = e, o = p[t], s = n[t], r = d({
                    type: "consultant-directory",
                    placement: t
                });
                return (0, i.jsx)(a, {
                    title: o.title,
                    description: o.consultantDirectoryDescription,
                    action: {
                        label: u.consultantDirectoryActionLabel,
                        buttonProps: {
                            external: !0,
                            href: `/marketplace/consultants?serviceTypes=${s}`,
                            onClick: r
                        }
                    }
                })
            }

            function c(e) {
                let {
                    type: t,
                    placement: n
                } = e;
                switch (t) {
                    case "setup-sessions":
                        return (0, i.jsx)(r, {
                            placement: n
                        });
                    case "consultant-directory":
                        return (0, i.jsx)(l, {
                            placement: n
                        });
                    default:
                        (0, o(722371).HB)(t)
                }
            }

            function d(e) {
                let {
                    type: t,
                    placement: i
                } = e;
                return () => {
                    (0, o(104310).u)({
                        event: {
                            eventName: "marketplace_consultant_callout_click",
                            eventProperties: {
                                placement: i,
                                type: t
                            }
                        }
                    })
                }
            }
            let u = (0, o(109939).YK)({
                    setupSessionsActionLabel: {
                        id: "consultantCallout.setupSessions.actionLabel",
                        defaultMessage: "Book call"
                    },
                    consultantDirectoryActionLabel: {
                        id: "consultantCallout.consultantDirectory.actionLabel",
                        defaultMessage: "Find expert"
                    }
                }),
                p = {
                    "connections-settings": (0, o(109939).YK)({
                        title: {
                            id: "spaceConnectionsSettings.consultantCallout.title",
                            defaultMessage: "Need help with connections?"
                        },
                        setupSessionsDescription: {
                            id: "spaceConnectionsSettings.consultantCallout.setupSessions.description",
                            defaultMessage: "Claim your free 30 minute session to get help connecting your tools"
                        },
                        consultantDirectoryDescription: {
                            id: "spaceConnectionsSettings.consultantCallout.consultantDirectory.description",
                            defaultMessage: "Find a certified expert to build custom connections"
                        }
                    }),
                    "imports-settings": (0, o(109939).YK)({
                        title: {
                            id: "importsTab.consultantCallout.title",
                            defaultMessage: "Need help migrating?"
                        },
                        setupSessionsDescription: {
                            id: "importsTab.consultantCallout.setupSessions.description",
                            defaultMessage: "Claim your free 30 minute session to get help importing your data"
                        },
                        consultantDirectoryDescription: {
                            id: "importsTab.consultantCallout.consultantDirectory.description",
                            defaultMessage: "Find a certified expert to help with complex migrations"
                        }
                    })
                }
        },
        170086: (e, t, o) => {
            o.d(t, {
                J: () => n,
                p: () => s
            }), o(16280);
            let i = (0, o(109939).YK)({
                authenticatingWithEvernote: {
                    id: "evernoteActions.authenticatingWithEvernote.loadingMessage",
                    defaultMessage: "Authenticating with Evernote…"
                },
                titleMessage: {
                    defaultMessage: "Evernote login",
                    id: "evernoteActions.loginPopupModal.title"
                },
                connectionError: {
                    id: "evernoteActions.connectionError",
                    defaultMessage: "Failed to connect Evernote account. Please try again."
                }
            });
            async function n(e) {
                let {
                    environment: t,
                    requestStore: n,
                    openNotebooksPopupAfterAuth: a = !0
                } = e, r = o(47797).A.getOrCreateFlowId();
                o(691968)._$({
                    import_source: "evernote",
                    data: {
                        import_type: "api",
                        status: "initiated",
                        userId: t.currentUser.id
                    },
                    flowId: r
                });
                let l = (0, o(321543).LX)(t),
                    c = (0, o(132702).TD)(o(986939).A.domainBaseUrl, {
                        authType: l,
                        userId: t.currentUser.id,
                        isElectronDevice: t.device.isElectron
                    });
                c = l.redirectToAuth ? c : await (0, o(321543).YN)(t, c);
                let d = o(218744).default.checkGate({
                    gateName: "use_evernote_import_v2",
                    enableEventTrailLogging: !0
                });
                if (t.device.isElectron) {
                    d || (o(262058).m({
                        message: i.authenticatingWithEvernote
                    }), o(612302).A.setState({ ...o(612302).A.state,
                        linkingAccount: !0,
                        showLoader: !0
                    })), (0, o(754573).P)(c);
                    return
                }
                let u = await o(956935).P(t, {
                    width: 580,
                    height: 700,
                    url: c,
                    titleMessage: i.titleMessage
                });
                if (!u) {
                    !a && d && o(721682).H.setConnectionState({
                        isConnectingAccount: !1,
                        connectionError: void 0
                    });
                    return
                }
                let p = o(758654).qg(u),
                    h = p.query.oauth_token,
                    g = p.query.oauth_verifier;
                if (!h || !g) {
                    !a && d && o(721682).H.setConnectionState({
                        isConnectingAccount: !1,
                        connectionError: void 0
                    });
                    return
                }
                d || o(262058).m({
                    message: i.authenticatingWithEvernote
                });
                let m = await t.api.callApi({
                    eventName: "authWithEvernote",
                    environment: t,
                    data: {
                        requestToken: h,
                        verifier: g
                    }
                });
                if ("failed" === m.type) o(691968)._$({
                    import_source: "evernote",
                    data: {
                        import_type: "api",
                        status: "failure",
                        error: m.error,
                        userId: t.currentUser.id
                    },
                    flowId: r
                }), console.error(m.error), d ? o(721682).H.setConnectionState({
                    isConnectingAccount: !1,
                    connectionError: o(962299).A.formatMessage(i.connectionError)
                }) : (o(647095).Qg(m), o(262058).V());
                else {
                    if (o(691968)._$({
                            import_source: "evernote",
                            data: {
                                import_type: "api",
                                status: "success",
                                userId: t.currentUser.id
                            },
                            flowId: r
                        }), o(691968).mu(t, {
                            integration_name: "evernote"
                        }), await n.refresh(), !a && d) {
                        o(68796).A.setState({
                            open: !1
                        });
                        try {
                            let e = await s({
                                environment: t,
                                requestStore: n,
                                options: {
                                    skipLegacyStore: !0,
                                    throwOnError: !0
                                }
                            });
                            if (e.userInfo) {
                                let t = {
                                    id: e.userInfo.username ? ? e.userInfo.email ? ? "evernote",
                                    name: e.userInfo.name ? ? e.userInfo.username ? ? "Evernote User",
                                    email: e.userInfo.email ? ? "",
                                    avatarUrl: e.userInfo.photoUrl
                                };
                                o(721682).H.setConnectedAccount(t)
                            } else o(721682).H.setConnectedAccount(void 0);
                            o(721682).H.setConnectionState({
                                isConnectingAccount: !1,
                                connectionError: void 0
                            })
                        } catch (e) {
                            o(721682).H.setConnectedAccount(void 0), o(721682).H.setConnectionState({
                                isConnectingAccount: !1,
                                connectionError: o(962299).A.formatMessage(i.connectionError)
                            })
                        }
                        o(721682).H.setCurrentTab("auth");
                        return
                    }
                    a && o(68796).A.setState({
                        open: !0
                    }), (0, o(599754).Ow)({
                        currentPage: "imports"
                    }), a && await s({
                        environment: t,
                        requestStore: n
                    }), o(262058).V()
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    requestStore: i,
                    options: n
                } = e;
                try {
                    null != n && n.skipLegacyStore || o(612302).A.setState({ ...o(612302).A.state,
                        isFetchingNotebooks: !0,
                        showLoader: !0
                    });
                    let e = await t.api.callApi({
                        eventName: "getEvernoteNotebooks",
                        environment: t,
                        data: {}
                    });
                    if (await i.refresh(), "success" === e.type) {
                        null != n && n.skipLegacyStore || o(612302).A.setState({ ...o(612302).A.state,
                            notebooksResponse: e.data,
                            isFetchingNotebooks: !1,
                            showLoader: !1
                        });
                        let {
                            userInfo: t,
                            notebooks: i
                        } = e.data;
                        return {
                            userInfo: t,
                            notebooks: i
                        }
                    }
                    if (console.error(e.error), null != n && n.throwOnError) throw Error("Failed to fetch Evernote notebooks");
                    return {
                        notebooks: [],
                        userInfo: void 0
                    }
                } catch (e) {
                    if (console.error(e), null != n && n.throwOnError) throw e instanceof Error ? e : Error("Failed to fetch Evernote notebooks");
                    return {
                        notebooks: [],
                        userInfo: void 0
                    }
                }
            }
        },
        360336: (e, t, o) => {
            o.d(t, {
                A: () => s
            });
            var i = () => o(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        boardsResponse: {
                            boards: []
                        },
                        isFetchingBoards: !0,
                        showLoader: !1
                    }
                }
            }
            let s = new n
        },
        535476: (e, t, o) => {
            o.d(t, {
                P: () => n,
                _: () => s
            });
            let i = (0, o(109939).YK)({
                authenticatingWithTrello: {
                    id: "trelloActions.authenticatingWithTrello.loadingMessage",
                    defaultMessage: "Authenticating with Trello…"
                },
                titleMessage: {
                    defaultMessage: "Trello login",
                    id: "trelloActions.loginPopupModal.title"
                }
            });
            async function n(e) {
                let {
                    environment: t,
                    requestStore: n,
                    showLoadingOverlay: a = !0
                } = e, r = o(47797).A.getOrCreateFlowId();
                o(691968)._$({
                    import_source: "trello",
                    data: {
                        import_type: "api",
                        status: "initiated",
                        userId: t.currentUser.id
                    },
                    flowId: r
                });
                let l = (0, o(321543).LX)(t),
                    c = (0, o(132702).bQ)(o(986939).A.domainBaseUrl, {
                        authType: l,
                        userId: t.currentUser.id,
                        isElectronDevice: t.device.isElectron
                    });
                if (c = l.redirectToAuth ? c : await (0, o(321543).YN)(t, c), t.device.isElectron) return void(0, o(754573).P)(c);
                let d = await o(956935).P(t, {
                    width: 580,
                    height: 700,
                    url: c,
                    titleMessage: i.titleMessage
                });
                if (!d) return;
                let u = o(758654).qg(d),
                    p = u.query.oauth_token,
                    h = u.query.oauth_verifier;
                if (!p || !h) return;
                a && o(262058).m({
                    message: i.authenticatingWithTrello
                });
                let g = await t.api.callApi({
                    eventName: "authWithTrello",
                    environment: t,
                    data: {
                        requestToken: p,
                        verifier: h
                    }
                });
                "failed" === g.type ? (o(691968)._$({
                    import_source: "trello",
                    data: {
                        import_type: "api",
                        status: "failure",
                        error: g.error,
                        userId: t.currentUser.id
                    },
                    flowId: r
                }), console.error(g.error), o(647095).Qg(g)) : (o(691968)._$({
                    import_source: "trello",
                    data: {
                        import_type: "api",
                        status: "success",
                        userId: t.currentUser.id
                    },
                    flowId: r
                }), o(691968).mu(t, {
                    integration_name: "trello"
                }), await n.refresh(), (0, o(599754).Ow)({
                    currentPage: "imports"
                }), await s(t, n).then(() => {
                    o(381026).A.setState({
                        open: !0
                    })
                }).catch(() => {
                    o(360336).A.setState({ ...o(360336).A.state,
                        isFetchingBoards: !0,
                        showLoader: !1
                    }), o(381026).A.setState({
                        open: !1
                    })
                })), a && o(262058).V()
            }
            async function s(e, t) {
                o(360336).A.setState({ ...o(360336).A.state,
                    isFetchingBoards: !0,
                    showLoader: !0
                });
                let i = await e.api.callApi({
                    eventName: "getTrelloBoards",
                    environment: e,
                    data: {}
                });
                if (await t.refresh(), "success" === i.type) return o(360336).A.setState({ ...o(360336).A.state,
                    boardsResponse: i.data,
                    isFetchingBoards: !1,
                    showLoader: !1
                }), i.data;
                throw console.error(i.error), o(647095).Qg(i), i.error
            }
        },
        568408: (e, t, o) => {
            async function i(e, t) {
                let o = await e.api.callApi({
                    eventName: "getConnectedAppsStatus",
                    environment: e,
                    data: {
                        spaceId: t
                    }
                });
                return "failed" === o.type ? (console.error(o.error), {
                    drive: [],
                    evernote: void 0,
                    trello: void 0,
                    asana: void 0,
                    confluence: void 0
                }) : o.data
            }
            async function n(e, t) {
                await e.api.callApi({
                    eventName: "disconnectTrello",
                    environment: e,
                    data: {}
                }), await t.refresh(), o(691968).kO({
                    integration_name: "trello"
                })
            }
            async function s(e, t) {
                await e.api.callApi({
                    eventName: "disconnectAsana",
                    environment: e,
                    data: {}
                }), await t.refresh(), o(691968).kO({
                    integration_name: "asana"
                })
            }
            async function a(e, t) {
                await e.api.callApi({
                    eventName: "disconnectEvernote",
                    environment: e,
                    data: {}
                }), await t.refresh(), o(691968).kO({
                    integration_name: "evernote"
                })
            }
            async function r(e, t, i) {
                await e.api.callApi({
                    eventName: "disconnectConfluence",
                    environment: e,
                    data: {
                        spaceId: i
                    }
                }), await t.refresh(), o(691968).kO({
                    integration_name: "confluence"
                })
            }
            async function l(e) {
                let {
                    requestStore: t
                } = e;
                await t.refresh();
                let i = o(639675).Ay.getInitialState();
                o(639675).Ay.setState(i), o(691968).kO({
                    integration_name: "jira"
                })
            }
            async function c(e) {
                let {
                    environment: t,
                    requestStore: i,
                    botId: n
                } = e;
                await o(577464).KA({
                    environment: t,
                    botId: n,
                    onSuccess: () => {
                        l({
                            requestStore: i
                        })
                    }
                })
            }
            o.d(t, {
                HC: () => s,
                Pz: () => r,
                _s: () => i,
                ml: () => c,
                rA: () => a,
                x_: () => n
            })
        },
        612302: (e, t, o) => {
            o.d(t, {
                A: () => s
            });
            var i = () => o(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        notebooksResponse: {
                            notebooks: []
                        },
                        isFetchingNotebooks: !0,
                        showLoader: !1,
                        linkingAccount: !1
                    }
                }
            }
            let s = new n
        },
        646220: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => n,
                notionTemplateTintableIcon: () => s
            }), o(296540);
            var i = o(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.58 3 16.83 14",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M6.014 16.338a4.43 4.43 0 0 0 4.43-4.48H8.88c-.254 0-.512 0-.732-.018a2.3 2.3 0 0 1-.86-.226 2.24 2.24 0 0 1-.979-.979 2.3 2.3 0 0 1-.226-.86 10 10 0 0 1-.018-.731V7.48a4.44 4.44 0 0 1 2.297.678 4.431 4.431 0 0 0-6.777 3.751 4.43 4.43 0 0 0 4.43 4.43z",
                            clipRule: "evenodd"
                        }), (0, i.jsx)("path", {
                            d: "M12.902 11.044c.463-.802.694-1.203.997-1.338a1.02 1.02 0 0 1 .828 0c.302.135.534.536.996 1.338l2.028 3.512c.463.802.695 1.203.66 1.532-.03.287-.18.548-.414.718-.267.194-.73.194-1.656.194h-4.057c-.925 0-1.388 0-1.656-.194a1.02 1.02 0 0 1-.414-.718c-.035-.329.197-.73.66-1.532z"
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.287 4.63c0-.571 0-.856.111-1.074.098-.192.254-.347.445-.445C8.061 3 8.346 3 8.916 3h4.38c.57 0 .854 0 1.072.111.191.098.347.253.445.445.11.218.11.503.11 1.073v3.852a2.24 2.24 0 0 0-1.52.109c-.46.204-.75.56-.94.83q-.318.472-.595.97l-.024.043-.118.203h-2.81c-.57 0-.855 0-1.073-.11a1 1 0 0 1-.445-.445c-.11-.218-.11-.503-.11-1.074z",
                            clipRule: "evenodd"
                        })]
                    })
                },
                s = (0, o(104509).wt)("notionTemplateTintable", n, "tintable")
        },
        721682: (e, t, o) => {
            o.d(t, {
                H: () => s
            }), o(898992), o(354520);
            var i = () => o(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        isModalOpen: !1,
                        currentTab: "auth",
                        parentId: void 0,
                        parentTable: void 0,
                        spaceId: void 0,
                        analyticsFrom: void 0,
                        connectedAccount: void 0,
                        isFetchingAccount: !1,
                        isConnectingAccount: !1,
                        connectionError: void 0,
                        notebooksResponse: void 0,
                        isFetchingNotebooks: !1,
                        selectedNotebookGuids: [],
                        importLocationByNotebookGuid: {},
                        importedBlockId: void 0,
                        importError: void 0
                    }
                }
                open(e) {
                    this.setState({ ...this.getInitialState(),
                        isModalOpen: !0,
                        analyticsFrom: null == e ? void 0 : e.analyticsFrom,
                        currentTab: (null == e ? void 0 : e.initialTab) ? ? "auth"
                    })
                }
                setConnectedAccount(e) {
                    this.setState({ ...this.state,
                        connectedAccount: e
                    })
                }
                setConnectionState(e) {
                    this.setState({ ...this.state,
                        ...void 0 !== e.isFetchingAccount && {
                            isFetchingAccount: e.isFetchingAccount
                        },
                        ...void 0 !== e.isConnectingAccount && {
                            isConnectingAccount: e.isConnectingAccount
                        },
                        connectionError: e.connectionError
                    })
                }
                setParent(e, t) {
                    this.setState({ ...this.state,
                        parentId: e,
                        parentTable: t
                    })
                }
                setSpaceId(e) {
                    this.setState({ ...this.state,
                        spaceId: e
                    })
                }
                setCurrentTab(e) {
                    this.setState({ ...this.state,
                        currentTab: e
                    })
                }
                setNotebooksResponse(e) {
                    this.setState({ ...this.state,
                        notebooksResponse: e
                    })
                }
                setIsFetchingNotebooks(e) {
                    this.setState({ ...this.state,
                        isFetchingNotebooks: e
                    })
                }
                setSelectedNotebookGuids(e) {
                    this.setState({ ...this.state,
                        selectedNotebookGuids: e
                    })
                }
                toggleNotebookSelection(e) {
                    if (this.state.selectedNotebookGuids.includes(e)) {
                        let t = { ...this.state.importLocationByNotebookGuid
                        };
                        delete t[e], this.setState({ ...this.state,
                            selectedNotebookGuids: this.state.selectedNotebookGuids.filter(t => t !== e),
                            importLocationByNotebookGuid: t
                        });
                        return
                    }
                    this.setState({ ...this.state,
                        selectedNotebookGuids: [...this.state.selectedNotebookGuids, e]
                    })
                }
                selectAllNotebooks(e, t) {
                    let o = {};
                    for (let i of e) o[i] = this.state.importLocationByNotebookGuid[i] ? ? t;
                    this.setState({ ...this.state,
                        selectedNotebookGuids: e,
                        importLocationByNotebookGuid: o
                    })
                }
                deselectAllNotebooks() {
                    this.setState({ ...this.state,
                        selectedNotebookGuids: [],
                        importLocationByNotebookGuid: {}
                    })
                }
                setNotebookImportLocationAndSelect(e, t) {
                    this.setState({ ...this.state,
                        selectedNotebookGuids: this.state.selectedNotebookGuids.includes(e) ? this.state.selectedNotebookGuids : [...this.state.selectedNotebookGuids, e],
                        importLocationByNotebookGuid: { ...this.state.importLocationByNotebookGuid,
                            [e]: t
                        }
                    })
                }
                setNotebookImportLocation(e, t) {
                    this.setState({ ...this.state,
                        importLocationByNotebookGuid: { ...this.state.importLocationByNotebookGuid,
                            [e]: t
                        }
                    })
                }
                clearNotebookImportLocations(e) {
                    let t = { ...this.state.importLocationByNotebookGuid
                    };
                    for (let o of e) delete t[o];
                    this.setState({ ...this.state,
                        importLocationByNotebookGuid: t
                    })
                }
                resetImport() {
                    let {
                        isModalOpen: e,
                        parentId: t,
                        parentTable: o,
                        spaceId: i,
                        analyticsFrom: n
                    } = this.getState();
                    this.setState({ ...this.getInitialState(),
                        isModalOpen: e,
                        parentId: t,
                        parentTable: o,
                        spaceId: i,
                        analyticsFrom: n
                    })
                }
                setImportSuccess(e) {
                    this.setState({ ...this.state,
                        currentTab: "importSuccess",
                        importedBlockId: e,
                        importError: void 0
                    })
                }
                setImportFailure(e) {
                    this.setState({ ...this.state,
                        currentTab: "importFailure",
                        importError: e
                    })
                }
                close(e) {
                    this.setState(this.getInitialState())
                }
            }
            let s = new n;
            (0, o(202146).exposeDebugValue)("EvernoteV2ImportStore", s)
        },
        879101: (e, t, o) => {
            o.d(t, {
                n: () => n
            }), o(16280);
            var i = o(296540);

            function n(e) {
                let t = function(e) {
                        for (let t of e)
                            if (void 0 === t) return;
                        return e.join(":")
                    }(e.key),
                    n = (0, o(482170).l)(e.computedState, o(795676).k),
                    s = (0, o(83208).X)("sidebar_local_storage", {
                        disableExposureLogging: !0
                    }),
                    [a, r] = (0, i.useState)();
                (0, i.useEffect)(() => {
                    if (s && t) try {
                        r((0, o(49509).YN)(t))
                    } catch (e) {
                        o(419750).O8(Error("Malformed value(s) found in localStorage", {
                            cause: e
                        }), {
                            from: "useLocalStorageCachedState",
                            type: "ParseError",
                            data: {
                                key: t
                            }
                        })
                    }
                }, [s, t]);
                let l = (0, i.useMemo)(() => o(381453).sg(e => {
                    if (t) try {
                        (0, o(49509).yE)(t, e)
                    } catch (e) {
                        o(419750).O8(e, {
                            from: "useLocalStorageCachedState",
                            type: "WriteError",
                            data: {
                                key: t
                            }
                        })
                    }
                }), [t]);
                return ((0, i.useEffect)(() => {
                    s && void 0 !== n && l(n)
                }, [s, l, n]), s) ? n ? ? a : n
            }
        },
        913629: (e, t, o) => {
            o.d(t, {
                Y: () => l
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(823215), o(354520), o(581454);
            var i = o(296540),
                n = o(474848);
            let s = (0, o(109939).YK)({
                    searchPlaceholder: {
                        id: "importerCollapsibleProjectList.searchPlaceholder",
                        defaultMessage: "Search"
                    },
                    selectAll: {
                        id: "importerCollapsibleProjectList.selectAll",
                        defaultMessage: "Select all"
                    },
                    deselectAll: {
                        id: "importerCollapsibleProjectList.deselectAll",
                        defaultMessage: "Deselect all"
                    },
                    projectsSelected: {
                        id: "importerCollapsibleProjectList.projectsSelected",
                        defaultMessage: "{selectedCount} of {totalCount} {totalCount, plural, one {project} other {projects}} selected"
                    },
                    emptyProjects: {
                        id: "importerCollapsibleProjectList.emptyProjects",
                        defaultMessage: "0 projects"
                    },
                    loading: {
                        id: "importerCollapsibleProjectList.loading",
                        defaultMessage: "Loading…"
                    },
                    noResults: {
                        id: "importerCollapsibleProjectList.noResults",
                        defaultMessage: "No matching projects found"
                    },
                    loadMore: {
                        id: "importerCollapsibleProjectList.loadMore",
                        defaultMessage: "Load more projects"
                    },
                    loadingMore: {
                        id: "importerCollapsibleProjectList.loadingMore",
                        defaultMessage: "Loading more projects…"
                    }
                }),
                a = {
                    searchContainer: {
                        paddingInline: 24,
                        paddingBlockStart: 2
                    },
                    selectAllButton: {
                        padding: 0,
                        background: "none",
                        border: "none"
                    },
                    listContainer: {
                        display: "flex",
                        flexDirection: "column",
                        border: `1px solid ${o(632079).Tj.border.secondaryTranslucent}`,
                        borderRadius: 8,
                        overflow: "auto",
                        flex: 1,
                        minHeight: 0,
                        maxHeight: 400,
                        backgroundColor: o(632079).Tj.background.primary
                    },
                    searchInput: {
                        height: 32
                    }
                };

            function r(e) {
                let {
                    groupItems: t,
                    displayItems: o,
                    isSearching: i,
                    groupSelectionBehavior: n
                } = e;
                return "visibleItemsWhenSearching" === n && i ? o : t
            }

            function l(e) {
                let {
                    groups: t,
                    selectionState: l,
                    onGroupToggle: c,
                    onItemToggle: u,
                    onSelectAll: p,
                    onDeselectAll: h,
                    groupBadgeLabel: g,
                    showSearch: m = !0,
                    searchPlaceholder: f,
                    sectionHeader: y,
                    isLoading: b = !1,
                    loadingText: v,
                    onLoadMore: x,
                    getGroupSelectionLabel: S,
                    emptyItemsLabel: k,
                    noResultsLabel: C,
                    groupSelectionBehavior: j = "allItems",
                    singleItemGroupsMode: I = "expandable"
                } = e, A = (0, o(109939).tz)(), [w, M] = (0, i.useState)(""), [E, L] = (0, i.useState)({}), N = (0, i.useCallback)(e => {
                    M(e.target.value)
                }, []), P = (0, i.useCallback)(e => {
                    L(t => ({ ...t,
                        [e]: !t[e]
                    }))
                }, []), _ = w.trim().length > 0, D = (0, i.useMemo)(() => {
                    if (!_) return t.map(e => ({
                        group: e,
                        displayItems: e.items
                    }));
                    let e = w.toLowerCase(),
                        o = [];
                    for (let i of t)
                        if (i.name.toLowerCase().includes(e)) o.push({
                            group: i,
                            displayItems: i.items
                        });
                        else {
                            let t = i.items.filter(t => {
                                var o;
                                let i = t.name.toLowerCase().includes(e),
                                    n = null == (o = t.searchText) ? void 0 : o.toLowerCase().includes(e);
                                return i || !!n
                            });
                            t.length > 0 && o.push({
                                group: i,
                                displayItems: t
                            })
                        }
                    return o
                }, [t, w, _]), T = (0, i.useMemo)(() => D.map(({
                    group: e,
                    displayItems: t
                }) => {
                    let o = r({
                        groupItems: e.items,
                        displayItems: t,
                        isSearching: _,
                        groupSelectionBehavior: j
                    });
                    return {
                        groupId: e.id,
                        itemIds: o.length === e.items.length ? void 0 : o.map(e => e.id)
                    }
                }), [D, j, _]), B = (0, i.useMemo)(() => 0 !== D.length && D.every(({
                    group: e,
                    displayItems: t
                }) => {
                    let o = l[e.id];
                    if (!o) return !1;
                    if ("all" === o.items) return !0;
                    let i = r({
                            groupItems: e.items,
                            displayItems: t,
                            isSearching: _,
                            groupSelectionBehavior: j
                        }),
                        n = new Set(o.items);
                    return i.every(e => n.has(e.id))
                }), [D, j, _, l]), F = (0, i.useCallback)(() => {
                    B ? null == h || h(T) : null == p || p(T)
                }, [B, h, p, T]), G = (0, i.useMemo)(() => f || A.formatMessage(s.searchPlaceholder), [f, A]);
                return (0, n.jsxs)(o(4458).VP, {
                    gap: 24,
                    flex: 1,
                    minHeight: 0,
                    children: [m ? (0, n.jsx)("div", {
                        style: a.searchContainer,
                        children: (0, n.jsx)(o(36481).p, {
                            value: w,
                            onChange: N,
                            placeholder: G,
                            left: (0, n.jsx)(o(16275).I, {
                                icon: o(330274).magnifyingGlassIcon,
                                colorVariant: "secondary"
                            }),
                            format: "default",
                            style: a.searchInput
                        })
                    }) : void 0, (0, n.jsxs)(o(4458).VP, {
                        gap: 8,
                        paddingInlineStart: 24,
                        paddingInlineEnd: 24,
                        flexGrow: 1,
                        minHeight: 0,
                        children: [y ? (0, n.jsxs)(o(4458).fI, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [(0, n.jsx)(o(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "secondary",
                                children: y
                            }), p && h ? (0, n.jsx)(o(988022).p, {
                                onClick: F,
                                style: a.selectAllButton,
                                pressedStyle: a.selectAllButton,
                                hoveredStyle: a.selectAllButton,
                                size: "sm",
                                children: (0, n.jsx)(o(111010).D, {
                                    styleKey: "captionMedium",
                                    colorVariant: "secondary",
                                    colorPalette: "blue",
                                    children: B ? (0, n.jsx)(o(109939).sA, { ...s.deselectAll
                                    }) : (0, n.jsx)(o(109939).sA, { ...s.selectAll
                                    })
                                })
                            }) : void 0]
                        }) : null, (0, n.jsx)("div", {
                            style: a.listContainer,
                            children: b ? (0, n.jsxs)(o(4458).fI, {
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 32,
                                gap: 8,
                                children: [(0, n.jsx)(o(517334).k, {
                                    size: "sm"
                                }), (0, n.jsx)(o(111010).D, {
                                    styleKey: "captionMedium",
                                    colorVariant: "secondary",
                                    children: v || (0, n.jsx)(o(109939).sA, { ...s.loading
                                    })
                                })]
                            }) : 0 === D.length ? (0, n.jsx)(o(4458).fI, {
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 32,
                                children: (0, n.jsx)(o(111010).D, {
                                    styleKey: "captionMedium",
                                    colorVariant: "secondary",
                                    children: C || (0, n.jsx)(o(109939).sA, { ...s.noResults
                                    })
                                })
                            }) : (0, n.jsx)(o(4458).VP, {
                                padding: 4,
                                gap: 4,
                                children: D.map(({
                                    group: e,
                                    displayItems: t
                                }) => (0, n.jsx)(d, {
                                    group: e,
                                    displayItems: t,
                                    selectionState: l,
                                    isExpanded: _ || !!E[e.id],
                                    onToggleExpand: P,
                                    onGroupToggle: c,
                                    onItemToggle: u,
                                    badgeLabel: g,
                                    onLoadMore: x,
                                    isSearching: _,
                                    getGroupSelectionLabel: S,
                                    emptyItemsLabel: k,
                                    groupSelectionBehavior: j,
                                    singleItemGroupsMode: I
                                }, e.id))
                            })
                        })]
                    })]
                })
            }
            let c = {
                groupHeader: {
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    paddingInline: 9,
                    paddingBlock: 6,
                    borderRadius: 6,
                    background: o(632079).Tj.background.secondaryTranslucent,
                    cursor: "pointer"
                },
                groupHeaderDisabled: {
                    cursor: "default"
                },
                chevronExpanded: {
                    transition: "transform 200ms ease-out",
                    flexShrink: 0,
                    transform: "rotateZ(180deg)"
                },
                chevronCollapsed: {
                    transition: "transform 200ms ease-out",
                    flexShrink: 0,
                    transform: "rotateZ(0deg)"
                },
                checkboxContainer: {
                    flexShrink: 0
                },
                iconContainer: {
                    flexShrink: 0
                },
                expandableContent: {
                    overflow: "hidden"
                },
                loadMoreButton: {
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    paddingInlineStart: 24,
                    paddingInlineEnd: 9,
                    paddingBlock: 6,
                    justifyContent: "flex-start",
                    background: "transparent"
                },
                loadMoreButtonHover: {
                    background: "transparent"
                },
                loadMoreRow: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    paddingInlineStart: 24,
                    paddingInlineEnd: 9,
                    paddingBlock: 6
                }
            };

            function d(e) {
                let {
                    group: t,
                    displayItems: a,
                    selectionState: l,
                    isExpanded: d,
                    onToggleExpand: u,
                    onGroupToggle: p,
                    onItemToggle: g,
                    badgeLabel: m,
                    onLoadMore: f,
                    isSearching: y,
                    getGroupSelectionLabel: b,
                    emptyItemsLabel: v,
                    groupSelectionBehavior: x,
                    singleItemGroupsMode: S
                } = e, [k, C] = (0, i.useState)(!1), j = l[t.id], I = "row" === S && 1 === t.items.length && !t.hasMore, A = I ? t.items[0] : void 0, w = r({
                    groupItems: t.items,
                    displayItems: a,
                    isSearching: y,
                    groupSelectionBehavior: x
                }), M = (0, i.useCallback)(() => {
                    A && g(t.id, A.id)
                }, [t.id, g, A]), {
                    checkboxState: E,
                    selectedCount: L,
                    selectedItemIds: N
                } = (0, i.useMemo)(() => {
                    let e = new Set((null == j ? void 0 : j.items) === "all" ? t.items.map(e => e.id) : (null == j ? void 0 : j.items) ? ? []),
                        o = w.filter(t => e.has(t.id)).length;
                    return j ? 0 === o ? {
                        checkboxState: !1,
                        selectedCount: 0,
                        selectedItemIds: e
                    } : o === w.length ? {
                        checkboxState: !0,
                        selectedCount: o,
                        selectedItemIds: e
                    } : {
                        checkboxState: "partial",
                        selectedCount: o,
                        selectedItemIds: e
                    } : {
                        checkboxState: !1,
                        selectedCount: 0,
                        selectedItemIds: new Set
                    }
                }, [t.items, j, w]), P = (0, i.useCallback)(() => {
                    I ? M() : u(t.id)
                }, [t.id, I, u, M]), _ = (0, i.useCallback)(e => {
                    if ("Enter" === e.key || " " === e.key) {
                        if (e.preventDefault(), I) return void M();
                        u(t.id)
                    }
                }, [t.id, I, u, M]), D = (0, i.useCallback)(e => {
                    (e.stopPropagation(), I) ? M(): p(t.id, w.map(e => e.id))
                }, [t.id, I, p, w, M]), T = (0, i.useCallback)(async () => {
                    if (f && !k) {
                        C(!0);
                        try {
                            await f(t.id)
                        } finally {
                            C(!1)
                        }
                    }
                }, [f, k, t.id]), B = 0 === t.items.length && !t.hasMore, F = t.metadata ? ? (b ? b({
                    selectedCount: L,
                    totalCount: w.length
                }) : void 0), G = d ? c.chevronExpanded : c.chevronCollapsed;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        style: { ...c.groupHeader,
                            ...B && c.groupHeaderDisabled
                        },
                        onClick: B ? void 0 : P,
                        onKeyDown: B ? void 0 : _,
                        role: "button",
                        tabIndex: B ? -1 : 0,
                        children: [(0, n.jsx)("div", {
                            style: c.checkboxContainer,
                            role: "presentation",
                            children: (0, n.jsx)(o(349050).S, {
                                checked: E,
                                disabled: B,
                                onClick: D,
                                size: 14,
                                borderRadius: 2
                            })
                        }), (0, n.jsxs)(o(4458).fI, {
                            flex: 1,
                            gap: 8,
                            alignItems: "center",
                            minWidth: 0,
                            children: [t.icon ? (0, n.jsx)("div", {
                                style: c.iconContainer,
                                children: t.icon
                            }) : void 0, (0, n.jsx)(o(111010).D, {
                                styleKey: "bodyMedium",
                                children: t.name
                            }), m ? (0, n.jsx)(o(746434).E, {
                                content: m,
                                color: "gray"
                            }) : void 0]
                        }), (0, n.jsx)(o(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: B ? v || (0, n.jsx)(o(109939).sA, { ...s.emptyProjects
                            }) : F || (0, n.jsx)(o(109939).sA, { ...s.projectsSelected,
                                values: {
                                    selectedCount: L,
                                    totalCount: w.length
                                }
                            })
                        }), B || I ? void 0 : (0, n.jsx)(o(16275).I, {
                            icon: o(87963).arrowChevronSingleDownIcon,
                            style: G,
                            size: "xs"
                        })]
                    }), (0, n.jsx)(o(203066).N, {
                        initial: !1,
                        children: !d || B || I ? void 0 : (0, n.jsx)(o(153321).P.div, {
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
                            style: c.expandableContent,
                            children: (0, n.jsxs)(o(4458).VP, {
                                gap: 4,
                                children: [a.map(e => (0, n.jsx)(h, {
                                    groupId: t.id,
                                    item: e,
                                    isSelected: N.has(e.id),
                                    onItemToggle: g
                                }, e.id)), t.hasMore && f ? k ? (0, n.jsxs)("div", {
                                    style: c.loadMoreRow,
                                    children: [(0, n.jsx)(o(4458).fI, {
                                        flexShrink: 0,
                                        width: 14,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        children: (0, n.jsx)(o(517334).k, {
                                            size: "sm"
                                        })
                                    }), (0, n.jsx)(o(111010).D, {
                                        styleKey: "bodyRegular",
                                        colorVariant: "tertiary",
                                        children: (0, n.jsx)(o(109939).sA, { ...s.loadingMore
                                        })
                                    })]
                                }) : (0, n.jsxs)(o(988022).p, {
                                    onClick: T,
                                    style: c.loadMoreButton,
                                    hoveredStyle: c.loadMoreButtonHover,
                                    pressedStyle: c.loadMoreButtonHover,
                                    size: "sm",
                                    children: [(0, n.jsx)(o(4458).fI, {
                                        flexShrink: 0,
                                        width: 14,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        children: (0, n.jsx)(o(16275).I, {
                                            icon: o(242912).arrowStraightDownSmallIcon,
                                            size: "xs",
                                            colorVariant: "tertiary"
                                        })
                                    }), (0, n.jsx)(o(111010).D, {
                                        styleKey: "bodyRegular",
                                        colorVariant: "tertiary",
                                        children: (0, n.jsx)(o(109939).sA, { ...s.loadMore
                                        })
                                    })]
                                }) : void 0]
                            })
                        })
                    })]
                })
            }
            let u = {
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    paddingInlineStart: 24,
                    paddingInlineEnd: 9,
                    paddingBlock: 6,
                    borderRadius: 6,
                    cursor: "pointer"
                },
                p = {
                    flexShrink: 0
                };

            function h({
                groupId: e,
                item: t,
                isSelected: s,
                onItemToggle: a
            }) {
                let r = (0, i.useCallback)(() => {
                        a(e, t.id)
                    }, [a, e, t.id]),
                    l = (0, i.useCallback)(o => {
                        o.stopPropagation(), a(e, t.id)
                    }, [a, e, t.id]),
                    d = (0, i.useCallback)(o => {
                        ("Enter" === o.key || " " === o.key) && (o.preventDefault(), a(e, t.id))
                    }, [a, e, t.id]);
                return (0, n.jsxs)("div", {
                    style: u,
                    onClick: r,
                    onKeyDown: d,
                    role: "button",
                    tabIndex: 0,
                    children: [(0, n.jsx)("div", {
                        style: p,
                        children: (0, n.jsx)(o(349050).S, {
                            checked: s,
                            onClick: l,
                            size: 14,
                            borderRadius: 2
                        })
                    }), (0, n.jsxs)(o(4458).fI, {
                        flex: 1,
                        alignItems: "center",
                        minWidth: 0,
                        children: [t.icon ? (0, n.jsx)("div", {
                            style: c.iconContainer,
                            children: t.icon
                        }) : void 0, (0, n.jsx)(o(111010).D, {
                            styleKey: "bodyMedium",
                            children: t.name
                        })]
                    }), t.metadata ? (0, n.jsx)(o(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: t.metadata
                    }) : void 0]
                })
            }
        }
    }
]);