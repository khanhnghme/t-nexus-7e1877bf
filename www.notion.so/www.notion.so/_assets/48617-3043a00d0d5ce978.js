"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [48617], {
        3087: (e, t, n) => {
            n.d(t, {
                l: () => d
            }), n(581454);
            var r = n(296540),
                a = n(474848);

            function o(e) {
                return e.content
            }
            let i = {
                    overflowX: "scroll",
                    overscrollBehaviorX: "contain",
                    scrollSnapType: "x proximity",
                    scrollbarWidth: "none"
                },
                s = {
                    position: "relative"
                },
                l = {
                    position: "relative"
                };

            function d(e) {
                let {
                    files: t,
                    threadStore: d,
                    threadSpaceId: c,
                    showImagePreview: u,
                    aiChatFeatureController: p,
                    justifyContent: g = "flex-start",
                    wrapFile: f = o
                } = e;
                return 0 === t.length ? null : (0, a.jsx)("div", {
                    style: i,
                    children: (0, a.jsx)(n(4458).fI, {
                        style: s,
                        gap: 8,
                        padding: 1,
                        alignItems: "center",
                        justifyContent: g,
                        className: "autolayout-row autolayout-fill-width",
                        children: t.map(e => {
                            let t = (0, a.jsx)(n(4458).fI, {
                                alignItems: "center",
                                justifyContent: g,
                                className: "autolayout-row autolayout-fill-width",
                                style: l,
                                children: (0, a.jsx)(n(315148).kp, {
                                    uploadProgress: {
                                        status: "complete",
                                        fileUrl: e.fileUrl,
                                        fileName: e.fileName,
                                        contentType: e.contentType
                                    },
                                    permissionRecordOverride: {
                                        table: n(832375).Toz,
                                        id: d.id,
                                        spaceId: c
                                    },
                                    showImagePreview: u,
                                    aiChatFeatureController: p
                                })
                            });
                            return (0, a.jsx)(r.Fragment, {
                                children: f({
                                    file: e,
                                    content: t
                                })
                            }, e.id)
                        })
                    })
                })
            }
        },
        22989: (e, t, n) => {
            n.d(t, {
                C: () => o
            }), n(296540);
            var r = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.25",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M10 5a5 5 0 0 1 0 10z"
                        }), (0, r.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 1 0 15.25 7.625 7.625 0 0 1 0-15.25m0 1.25a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                o = (0, n(104509).wt)("circleSplit", a, "default")
        },
        44196: (e, t, n) => {
            n.d(t, {
                I: () => g,
                Ob: () => p,
                Zf: () => c,
                aL: () => v,
                e: () => x,
                h5: () => f,
                kL: () => s,
                xl: () => l,
                zV: () => d,
                zZ: () => u
            }), n(898992), n(672577), n(581454);
            var r = n(296540),
                a = n(474848);
            let o = (0, n(109939).YK)({
                    selectAccountLabel: {
                        id: "notionCalendarOnboarding.selectAccountLabel",
                        defaultMessage: "Active account"
                    }
                }),
                i = (0, n(109939).YK)({
                    successTitle: {
                        id: "notionCalendarOnboarding.signupSuccess.title",
                        defaultMessage: "Notion Calendar connected"
                    },
                    successMessage: {
                        id: "notionCalendarOnboarding.signupSuccess.message",
                        defaultMessage: "Your calendar has been connected. You can now ask the agent about your calendar."
                    },
                    errorTitle: {
                        id: "notionCalendarOnboarding.signupError.title",
                        defaultMessage: "Failed to connect Notion Calendar"
                    },
                    errorMessage: {
                        id: "notionCalendarOnboarding.signupError.message",
                        defaultMessage: "Please try again or contact support if the issue persists."
                    }
                });

            function s() {
                let {
                    learnMoreUrl: e
                } = (0, n(399077).hP)("notion-calendar"), t = (0, n(533992).v3)(), r = (0, n(723240).r)();
                return (0, a.jsx)(n(683150).Z, {
                    connector: "notion-calendar",
                    screenName: "introduction",
                    nextScreens: {
                        notStarted: "authentication",
                        inProgress: "connection_complete_screen",
                        alreadyConnected: "already_connected",
                        error: "error"
                    },
                    usesPopup: !1,
                    learnMoreUrl: e,
                    openAuthUrl: () => {
                        l({
                            environment: t
                        })
                    },
                    onCheckConnectionFromInProgressState: async () => {
                        if (!r) return !1;
                        let e = await t.api.callApi({
                            eventName: "connectAiConnector",
                            environment: t,
                            data: {
                                spaceId: r,
                                connector: "notion-calendar"
                            }
                        });
                        if (!("success" === e.type && e.data.success)) return !1;
                        let a = "success" === e.type ? e.data : void 0,
                            o = null != a && a.success ? a.externalSourceName : void 0;
                        return n(875925).gv.setState({ ...n(875925).gv.state,
                            status: "authenticated",
                            isConnected: !0,
                            isPersonalAuthComplete: !0,
                            externalSourceName: o
                        }), !0
                    }
                })
            }
            async function l(e) {
                var t, r;
                let {
                    environment: a,
                    showSuccessToast: o = !1
                } = e, s = (0, n(599412).wW)(), l = null == (t = n(728372).AppStoreCurrentUserStore.state) ? void 0 : t.getEmail(), d = null == (r = n(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : r.getSpaceId();
                if (!l || !d) return {
                    success: !1
                };
                let c = await (0, n(874809).i6)({
                    environment: a,
                    providerContext: {
                        type: "google",
                        email: l
                    }
                });
                if (!c || "dismissedDueToCleanup" === c) return {
                    success: !1
                };
                if ("success" !== (await (0, n(602949).l)({
                        environment: a,
                        code: c.code,
                        encryptedToken: c.encryptedToken,
                        spaceId: d,
                        from: "agentSetup",
                        provider: "google"
                    })).type) return n(819652).Iz({
                    variant: "error",
                    title: s.formatMessage(i.errorTitle),
                    message: s.formatMessage(i.errorMessage)
                }), {
                    success: !1
                };
                let u = await a.api.callApi({
                    eventName: "connectAiConnector",
                    environment: a,
                    data: {
                        spaceId: d,
                        connector: "notion-calendar"
                    }
                });
                return "success" === u.type && u.data.success ? (o && n(819652).Iz({
                    title: s.formatMessage(i.successTitle),
                    message: s.formatMessage(i.successMessage)
                }), {
                    success: !0
                }) : (n(819652).Iz({
                    variant: "error",
                    title: s.formatMessage(i.errorTitle),
                    message: s.formatMessage(i.errorMessage)
                }), {
                    success: !1
                })
            }

            function d() {
                let e = (0, n(682985).K8)(() => n(875925).gv.state.currentScreen, []);
                return (0, a.jsx)(n(748631).m, {
                    connector: "notion-calendar",
                    open: "already_connected" === e,
                    onDismiss: () => {
                        n(875925).gv.reset()
                    }
                })
            }

            function c() {
                let {
                    learnMoreUrl: e
                } = (0, n(399077).hP)("notion-calendar");
                return (0, a.jsx)(n(45877).A, {
                    connector: "notion-calendar",
                    screenName: "not_admin_screen",
                    learnMoreUrl: e
                })
            }

            function u() {
                return (0, a.jsx)(n(436579).a, {
                    connector: "notion-calendar",
                    screenName: "connection_complete_screen",
                    nextScreens: {
                        notStarted: "authentication",
                        inProgress: "none",
                        alreadyConnected: "already_connected",
                        error: "error"
                    },
                    ingestionNotNeeded: !0,
                    onStartIngestion: void 0
                })
            }

            function p() {
                return (0, a.jsx)(n(633302).$, {
                    connector: "notion-calendar",
                    screenName: "connection_exist_screen",
                    nextScreens: {
                        settings: "none"
                    },
                    connectedSpaceId: ""
                })
            }

            function g() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(723240).r)(),
                    {
                        learnMoreUrl: r,
                        notionAuthUrl: o,
                        troubleShootingUrl: i
                    } = (0, n(399077).hP)("notion-calendar");
                return t ? (0, a.jsx)(n(202570).R, {
                    connector: "notion-calendar",
                    screenName: "authentication",
                    nextScreens: {
                        notAdminOfConnectorAccount: "not_admin_screen",
                        connectionConflict: "connection_exist_screen",
                        connectionSuccess: "connection_complete_screen",
                        error: "error"
                    },
                    learnMoreUrl: r,
                    troubleShootingUrl: i,
                    staticConnectorAuthUrl: o,
                    setConnectionStateAsConnected: () => {
                        n(875925).gv.setState({ ...n(875925).gv.state,
                            status: "authenticated",
                            isConnected: !0,
                            isPersonalAuthComplete: !0
                        })
                    },
                    callConnectionApi: async () => {
                        let n = await e.api.callApi({
                            eventName: "connectAiConnector",
                            environment: e,
                            data: {
                                spaceId: t,
                                connector: "notion-calendar"
                            }
                        });
                        return "success" === n.type && n.data.success ? Promise.resolve({
                            type: "success",
                            data: {
                                connectionSuccess: !0
                            }
                        }) : Promise.resolve({
                            type: "success",
                            data: {
                                connectionSuccess: !1,
                                errorResponse: {
                                    status: 401
                                }
                            }
                        })
                    }
                }) : null
            }

            function f() {
                let e = (0, n(682985).K8)(() => (0, n(338901).pH)().length, []);
                return (0, a.jsx)(n(492421).e, {
                    connector: "notion-calendar",
                    screenName: "settings",
                    nextScreens: {
                        disconnect: "disconnect_screen",
                        error: "error"
                    },
                    settings: e > 1 ? ({
                        setIsLoading: e,
                        setIsDisconnectButtonEnabled: t
                    }) => (0, a.jsx)(y, {
                        setIsLoading: e,
                        setIsDisconnectButtonEnabled: t
                    }) : void 0
                })
            }
            let m = {
                    justifyContent: "space-between",
                    marginBottom: 24
                },
                h = {
                    position: "relative"
                };

            function y(e) {
                let {
                    setIsLoading: t,
                    setIsDisconnectButtonEnabled: i
                } = e, s = (0, n(533992).v3)(), {
                    botId: l
                } = (0, n(515467).m)(), d = (0, n(682985).K8)(() => (0, n(338901).pH)(), []);
                (0, r.useEffect)(() => {
                    t(!1), i(!0)
                }, [t, i]);
                let c = (0, n(682985).O$)(n(610463).A.externalAuthentications),
                    u = (0, r.useCallback)(e => {
                        let t = c.find(t => t.parent_id === e.id);
                        return (null == t ? void 0 : t.account_name) ? ? ""
                    }, [c]),
                    p = u(d.find(e => e.id === l) ? ? d[0]);
                return (0, a.jsxs)(n(4458).VP, {
                    gap: 12,
                    className: "autolayout-fill-width",
                    style: h,
                    children: [(0, a.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        colorVariant: "secondary",
                        children: (0, a.jsx)(n(109939).sA, { ...o.selectAccountLabel
                        })
                    }), (0, a.jsx)(n(656252).A, {
                        popupType: n(656252).z.Popup,
                        originGap: 4,
                        placementToOrigin: "bottom",
                        content: e => (0, a.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Popup,
                            children: (0, a.jsx)(n(558045).A, {
                                type: n(558045).O.Vertical,
                                sections: [{
                                    key: "accounts",
                                    items: d.map(t => ({
                                        action: () => {
                                            (0, n(55067).rq)({
                                                environment: s,
                                                botId: t.id,
                                                shouldLog: !1
                                            }), e.close()
                                        },
                                        key: t.id,
                                        render: e => (0, a.jsx)(n(95582).A, { ...e,
                                            title: u(t),
                                            isChecked: t.id === l
                                        })
                                    }))
                                }],
                                initialFocus: void 0
                            })
                        }),
                        children: e => (0, a.jsx)(n(548436).A, { ...e,
                            size: "lg",
                            iconTrailing: {
                                icon: n(595453).arrowChevronSingleDownSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            },
                            style: m,
                            children: (0, a.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: p
                            })
                        })
                    })]
                })
            }

            function v() {
                return (0, a.jsx)(n(384214).X, {
                    connector: "notion-calendar",
                    postDisconnectScreenName: "post_disconnect_screen",
                    disconnectScreenName: "disconnect_screen",
                    settingsScreenName: "settings",
                    errorScreenName: "error",
                    setStatusAsDisconnected: () => {
                        n(875925).gv.setState({ ...n(875925).gv.state,
                            status: "not_started",
                            isConnected: !1,
                            isLoaded: !0,
                            isBackendConnected: !1
                        })
                    },
                    showGoogleWorkspaceNote: !1
                })
            }

            function x() {
                return (0, a.jsx)(n(103378).b, {
                    connector: "notion-calendar",
                    screenName: "error"
                })
            }
        },
        101491: (e, t, n) => {
            n.d(t, {
                Mp: () => i,
                c8: () => s
            });
            var r = n(296540),
                a = n(474848);
            let o = (0, r.createContext)({
                confirmToolUse: () => {},
                rejectToolUse: () => {},
                showDebug: !1
            });

            function i() {
                return (0, r.useContext)(o)
            }

            function s({
                threadStore: e,
                clientStore: t,
                environment: i,
                sendPartialTranscript: l,
                children: d
            }) {
                let c = (0, n(682985).K8)(() => (0, n(187353).JK)(e), [e]),
                    u = (0, n(682985).K8)(() => {
                        if (!c || !e) return !1;
                        let t = (0, n(187353).mU)(e),
                            r = null == t ? void 0 : t.getStatus();
                        return !!(r && (0, n(722371).Xk)(n(548161).rl, r))
                    }, [c, e]),
                    p = (0, r.useCallback)(async r => {
                        if (!e) return;
                        let a = e.id,
                            o = t.getOrCreateClientAIChatThreadStore(a).state.traceId ? ? "unknown",
                            s = e.getData(),
                            l = null == s ? void 0 : s.run_id,
                            d = null == s ? void 0 : s.workflow_id,
                            c = e.getSpaceId(),
                            u = r.confirmToolStepIds.length > 0 ? r.confirmToolStepIds : r.rejectToolStepIds ? ? [];
                        if ((0, n(104310).u)({
                                event: {
                                    eventName: "agent_tool_confirmation_clicked",
                                    eventProperties: {
                                        ai_session_id: a,
                                        ai_inference_id: o,
                                        confirmation_action: r.action,
                                        tool_step_ids: u,
                                        run_id: l,
                                        workflow_id: d,
                                        space_id: c
                                    }
                                }
                            }), l && c) try {
                            await n(752104).j({
                                environment: i,
                                threadStore: e,
                                confirmToolStepIds: r.confirmToolStepIds,
                                rejectToolStepIds: r.rejectToolStepIds,
                                connectFlowCreatedModuleId: r.connectFlowCreatedModuleId
                            }), await i.api.callApi({
                                eventName: "reenqueueWorkflowAutomation",
                                environment: i,
                                data: {
                                    runIds: [l],
                                    spaceId: c
                                }
                            })
                        } catch (e) {
                            n(773352).log({
                                level: "error",
                                from: "ToolUseConfirmationContext.updateToolStatesAndReenqueue",
                                type: "toolUpdateAndReenqueueError",
                                error: (0, n(416607).convertErrorToLog)(e)
                            })
                        }
                    }, [t, i, e]),
                    g = (0, r.useCallback)((r, a) => {
                        e && (u ? p({
                            confirmToolStepIds: r,
                            connectFlowCreatedModuleId: null == a ? void 0 : a.connectFlowCreatedModuleId,
                            action: "confirm"
                        }) : n(757688).WE({
                            environment: i,
                            clientStore: t,
                            threadStore: e,
                            confirmToolStepIds: r,
                            connectFlowCreatedModuleId: null == a ? void 0 : a.connectFlowCreatedModuleId,
                            stepIdsToInclude: l ? r : void 0
                        }))
                    }, [e, t, i, l, u, p]),
                    f = (0, r.useCallback)((r, a) => {
                        e && (u ? p({
                            confirmToolStepIds: [],
                            rejectToolStepIds: r,
                            action: "reject"
                        }) : n(757688).WE({
                            environment: i,
                            clientStore: t,
                            threadStore: e,
                            rejectToolStepIds: r,
                            rejectToolStepErrors: null == a ? void 0 : a.rejectToolStepErrors,
                            stepIdsToInclude: l ? r : void 0
                        }))
                    }, [e, t, i, l, u, p]),
                    m = (0, n(682985).K8)(() => t.state.showDebug, [t]),
                    h = (0, r.useMemo)(() => ({
                        confirmToolUse: g,
                        rejectToolUse: f,
                        showDebug: m
                    }), [g, f, m]);
                return (0, a.jsx)(o.Provider, {
                    value: h,
                    children: d
                })
            }
            o.displayName = "ToolUseConfirmationContext"
        },
        127872: (e, t, n) => {
            function r(e) {
                let {
                    collectionStore: t,
                    environment: r
                } = e;
                return t.canEdit() || t.canEditCollection() || t.canEditContentOnly() || (0, n(862085).gN)({
                    collectionStore: t,
                    environment: r
                })
            }

            function a(e) {
                let {
                    collectionContextStore: t,
                    transaction: r
                } = e;
                return (0, n(165170).w)({
                    collectionContextStore: t,
                    transaction: r
                }), o(e)
            }

            function o(e) {
                var t, a, o;
                let i, {
                        environment: s,
                        collectionContextStore: l,
                        groupsPointer: d,
                        insertAtIndex: c,
                        shouldCoerce: u,
                        templateStore: p,
                        transaction: g,
                        from: f,
                        tracker: m,
                        inMemoryRecordCache: h,
                        isKeyboard: y,
                        title: v,
                        blockType: x
                    } = e,
                    S = n(680007).default.mark("collections.add_item_lag");
                n(680007).default.measureAfterNextFlush(S, {
                    getData: () => ({ ...n(752242).kz(l),
                        from: f.createBlock
                    })
                });
                let b = "collectionTypedView" === l.contextTypeFromStoreState,
                    j = l.databaseTypeFromStoreState,
                    w = l.collectionStoresStore.state,
                    I = w.find(e => r({
                        collectionStore: e,
                        environment: s
                    })) || w[0],
                    C = null == (t = (0, n(974410).f)(I)) ? void 0 : t.id,
                    M = n(728372).AppStoreCurrentUserSettingsStore.state,
                    k = b && j && C && M && [...M.getAllPreferredCollections(C), ...M.getPreferredCollectionsOfType(C, j)] || [],
                    T = d[0];
                if ("group_header" === f.createBlock && "location" === T.value.type) {
                    let e = T.value.value;
                    e && (i = w.find(t => t.id === e.id && r({
                        collectionStore: t,
                        environment: s
                    })))
                } else i = function(e, t, n) {
                    for (let a of e) {
                        let e = t.find(e => e.id === a && r({
                            collectionStore: e,
                            environment: n
                        }));
                        if (e) return e
                    }
                }(k, w, s);
                let A = i ? ? I,
                    R = null == A ? void 0 : A.getSpaceId(),
                    D = l.collectionViewStore(),
                    P = l.getViewType(),
                    F = n(124937).Wv({
                        environment: s,
                        type: x ? ? n(955630).xd.page,
                        inMemoryRecordCache: h,
                        transaction: g,
                        spaceId: R,
                        tracker: m,
                        properties: {
                            title: (0, n(247438).x9d)(v)
                        }
                    });
                if (!A || !D || !P) return {
                    coercionSucceeded: !0,
                    newStore: F
                };
                let E = null == (a = l.groupsStore.getGroupState(d)) ? void 0 : a.groupUiParentStore;
                if (!E) return {
                    coercionSucceeded: !0,
                    newStore: F
                };
                let N = n(970831).B.createChildStore(E, {
                    table: n(832375).evP,
                    id: F.id
                });
                p && n(205885).A.state.online && n(845422).TB({
                    title: "template",
                    environment: s,
                    store: F,
                    templateStore: p,
                    isKeyboard: y ? ? !1,
                    isCreateIn: !1,
                    transaction: g,
                    from: f.initCollection ? ? "collection_group_actions"
                });
                let U = (0, n(188993).j)({
                        environment: s,
                        store: F,
                        collectionStore: A,
                        collectionContextStore: l,
                        groupsPointer: d,
                        shouldCoerce: u,
                        transaction: g
                    }),
                    V = (null == (o = l.groupsStore.getGroupState(d)) || null == (o = o.reducerResultStore.state) ? void 0 : o.blockIds) || [],
                    _ = void 0 !== c ? c : V.length,
                    B = l.permissionScopesStore.state.canCreatePagesInCollection;
                if ((0, n(979052).k)({
                        environment: s,
                        collectionStore: A,
                        blockIds: [N.id],
                        action: "collection_view"
                    }), B || b) {
                    let e = [...V.slice(0, _), N.id, ...V.slice(_)];
                    (0, n(806875).z)({
                        resultIds: e,
                        collectionViewStore: D,
                        collectionContextStore: l,
                        transaction: g
                    })
                }
                return {
                    coercionSucceeded: U,
                    newStore: N
                }
            }
            n.d(t, {
                H: () => o,
                Q: () => a
            }), n(898992), n(672577)
        },
        153262: (e, t, n) => {
            n.d(t, {
                Jg: () => a,
                bM: () => r,
                hG: () => o,
                ic: () => i
            });
            let r = "150ms ease";

            function a() {
                return {
                    borderRadius: 6
                }
            }
            let o = n(986939).A.isMobile ? {} : { ...a(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${r}`
            };

            function i() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        165170: (e, t, n) => {
            n.d(t, {
                w: () => r
            }), n(898992), n(672577);

            function r({
                collectionContextStore: e,
                transaction: t
            }) {
                let a = "collectionTypedView" === e.contextTypeFromStoreState,
                    o = e.databaseTypeFromStoreState,
                    i = e.collectionStoresStore.state,
                    s = i.find(e => e.canEdit() || e.canEditCollection() || e.canEditContentOnly()) || i[0];
                !a && s && (0, n(90252).e)({
                    transaction: t,
                    databaseType: o,
                    collectionId: s.id,
                    spaceId: s.getSpaceId()
                })
            }
        },
        219083: (e, t, n) => {
            function r(e, t) {
                let r = n(371562).create({
                    arrays: {
                        detectMove: !1,
                        includeValueOnMove: !0
                    }
                }).diff(e, t);
                if (!r) return {
                    beforeOps: {},
                    removeOps: new Set
                };
                let a = [],
                    o = [];
                for (let e in r) "_t" !== e && ("_" === e[0] ? a.push(parseInt(e.slice(1), 10)) : 1 === r[e].length && o.push({
                    index: parseInt(e, 10),
                    value: r[e][0]
                }));
                let i = {},
                    s = new Set,
                    l = [...e];
                a = a.sort((e, t) => e - t);
                for (let e = a.length - 1; e >= 0; e--) {
                    let t = a[e],
                        n = l.splice(t, 1)[0];
                    s.add(n)
                }
                o = o.sort((e, t) => e.index - t.index);
                for (let e = 0; e < o.length; e++) {
                    let t = o[e];
                    i[t.value] = l[t.index], l.splice(t.index, 0, t.value)
                }
                return {
                    beforeOps: i,
                    removeOps: s
                }
            }
            n.d(t, {
                i: () => r
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(371562)
        },
        243599: (e, t, n) => {
            n.d(t, {
                c: () => o
            }), n(296540);
            var r = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 16.53 14.66",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M2.375 6.25c0-1.174.951-2.125 2.125-2.125h11c1.174 0 2.125.951 2.125 2.125v6.04l-1.25-.632V7.5H3.625v6.25c0 .483.392.875.875.875h7.213l.454 1.25H4.5a2.125 2.125 0 0 1-2.125-2.125zm2.258.184a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25m2.625-.625a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0m1.375.625a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"
                        }), (0, r.jsx)("path", {
                            d: "m17.426 14.65.474-.17a.433.433 0 0 0 .047-.796l-5.644-2.85a.433.433 0 0 0-.604.533l2.268 6.239a.435.435 0 0 0 .815.007l.574-1.509 2.225 2.433a.758.758 0 1 0 1.122-1.022l-2.287-2.501z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("browserClick", a, "default")
        },
        366318: (e, t, n) => {
            n.d(t, {
                S: () => r
            });

            function r(e) {
                return (0, n(682985).K8)(() => {
                    if (!(0, n(23803).vL)()) return !1;
                    let t = e.getParentStore();
                    return !!((null == t ? void 0 : t.table) === n(832375).VlP && t.getFormatStore().getKeyStore("external_collection_type").getValue()) || !1
                }, [e])
            }
        },
        368584: (e, t, n) => {
            function r(e) {
                return function(e) {
                    var t, r, a, s, l, d;
                    let c, {
                            toolResultStep: u,
                            agentRouteParams: p,
                            peekRouteParams: g
                        } = e,
                        f = (0, n(851062).Tn)(null == (t = u.result) ? void 0 : t.threadUrl);
                    if (!(null != f && f.startsWith("thread://"))) return;
                    let [, m] = f.slice(9).split("/"), h = i(m);
                    if (!h) return;
                    if (!(c = null == (l = (s = u).result) ? void 0 : l.workflowId) || c === n(180139).Lj || (0, n(851062).SZ)(null == (d = s.input) ? void 0 : d.agentUrl)) {
                        let e = {
                            name: "chat",
                            configureOpenInDesktopApp: !1,
                            openSettingsTab: void 0,
                            peekMode: null == g ? void 0 : g.peekMode,
                            peekViewBlockId: null == g ? void 0 : g.peekViewBlockId,
                            workflowViewType: p.workflowViewType,
                            threadId: h
                        };
                        return {
                            kind: "personal",
                            threadId: h,
                            url: (0, n(366367).X_)(e)
                        }
                    }
                    let y = i(null == (r = u.result) ? void 0 : r.workflowId) ? ? o(null == (a = u.input) ? void 0 : a.agentUrl);
                    if (!y) return;
                    let v = { ...p,
                        agentChatThreadId: h
                    };
                    return v.workflowViewType || (v.workflowViewType = "activity"), {
                        kind: "custom",
                        threadId: h,
                        url: (0, n(453573).Lm)({
                            workflowId: y,
                            params: v
                        }),
                        redirect: !1
                    }
                }(e)
            }

            function a(e, t) {
                if ("chat" !== e.name) return;
                let r = { ...e,
                    threadId: t
                };
                return (0, n(366367).X_)(r)
            }

            function o(e) {
                let t = (0, n(851062).Tn)(e);
                if (!(null != t && t.startsWith("agent://"))) return;
                let [, r] = t.split("agent://");
                if (!r) return;
                let [, a] = r.split("/");
                return i(a)
            }

            function i(e) {
                if (!e) return;
                let t = e.trim();
                return 32 === t.length ? (0, n(4962).np)(t) : 36 === t.length ? t : void 0
            }
            n.d(t, {
                C3: () => a,
                Li: () => i,
                VM: () => r,
                al: () => o
            })
        },
        374241: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowStraightLeftSmallIcon: () => a,
                iconDefinition: () => r
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.16 8.206q.046.13.148.236l4.32 4.32a.625.625 0 0 0 .884-.884L4.259 8.625h8.991a.625.625 0 1 0 0-1.25H4.259l3.253-3.253a.625.625 0 1 0-.884-.884l-4.32 4.32a.62.62 0 0 0-.148.648"
                    })
                },
                a = (0, n(104509).wt)("arrowStraightLeftSmall", r, "small")
        },
        378700: (e, t, n) => {
            n.d(t, {
                lh: () => ru
            }), n(18107), n(410838), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(967357), n(898992), n(354520), n(672577), n(430670), n(803949), n(581454), n(737550);
            var r = n(296540),
                a = () => n(426048);
            let o = /^(connections|adminUserConnections)\.([^.]+)\.(.+)$/;

            function i(e) {
                let t = o.exec(e);
                if (!t) return;
                let n = t[1],
                    r = t[2],
                    a = t[3];
                if ("connections" === n || "adminUserConnections" === n) return {
                    namespace: n,
                    connectionName: r,
                    name: a
                }
            }

            function s(e) {
                var t, n = e,
                    r = "connections";
                let a = i(n);
                return a ? (t = { ...a,
                    namespace: r
                }, `${t.namespace}.${t.connectionName}.${t.name}`) : n
            }

            function l(e) {
                let {
                    functionName: t,
                    canonicalName: n
                } = e;
                return "string" == typeof t && s(t) === n
            }
            var d = () => n(780899),
                c = () => n(832375),
                u = n(474848);
            let p = {
                container: {
                    padding: 8,
                    marginBottom: 20
                },
                icon: {
                    width: n(104509).Ev.sm,
                    height: n(104509).Ev.sm,
                    fill: n(632079).Tj.red.icon.accentPrimary
                },
                codeBlock: {
                    padding: 12,
                    borderRadius: 8,
                    backgroundColor: n(632079).Tj.background.secondary
                }
            };

            function g(e) {
                let {
                    step: t
                } = e, a = (0, r.useMemo)(() => JSON.stringify(t, null, 2), [t]), o = (0, n(381453).oE)([t.fromInferenceContextType ? `prompt=${t.fromInferenceContextType}` : void 0, t.fromToolName ? `tool=${t.fromToolName}` : void 0]).join(", ");
                return (0, u.jsx)(n(22262).Q, {
                    style: p.container,
                    children: (0, u.jsx)(n(479854).b, {
                        label: `Error ${t.errorType}: ${o}`.trim(),
                        icon: n(966559).exclamationMarkCircleSmallIcon,
                        iconStyle: p.icon,
                        children: (0, u.jsx)("div", {
                            style: p.codeBlock,
                            children: (0, u.jsx)(n(140102).O, {
                                value: a,
                                language: "json"
                            })
                        })
                    })
                })
            }
            let f = {
                container: {
                    backgroundColor: "rgba(0, 150, 255, 0.1)",
                    border: "1px solid rgba(0, 150, 255, 0.3)",
                    borderRadius: 8,
                    padding: 12,
                    margin: "8px 0",
                    fontSize: 12
                },
                header: {
                    fontWeight: n(699422).Wy.bold,
                    color: "#0096ff",
                    marginBottom: 8
                },
                braintrustInfo: {
                    marginBottom: 6,
                    color: "#666"
                },
                section: {
                    marginBottom: 6
                },
                indentedContent: {
                    marginInlineStart: 12,
                    marginTop: 4
                },
                scoreItem: {
                    marginBottom: 2
                },
                scoreValue: {
                    fontWeight: n(699422).Wy.bold
                },
                toggleButton: {
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 10,
                    color: "#666",
                    padding: 0,
                    marginInlineStart: 4
                },
                scoreMetadata: {
                    marginInlineStart: 16,
                    marginTop: 4,
                    padding: 4,
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    borderRadius: 4,
                    fontSize: 11,
                    color: "#555"
                },
                nestedObject: {
                    marginTop: 4,
                    padding: 4,
                    backgroundColor: "rgba(0, 0, 0, 0.03)",
                    borderInlineStart: "2px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: 2
                },
                nestedItem: {
                    marginBottom: 2
                },
                timestamp: {
                    fontSize: 10,
                    color: "#999",
                    marginTop: 8
                },
                style0: {
                    marginBottom: 4
                }
            };

            function m(e) {
                var t;
                let {
                    step: a
                } = e, {
                    evalResult: o,
                    braintrustInfo: i,
                    evaluatedAt: s
                } = a, [l, d] = (0, r.useState)(new Set), [c, p] = (0, r.useState)(new Set), g = (e, t, n = 0) => {
                    if (Array.isArray(e)) return (0, u.jsx)("div", {
                        children: e.map((e, r) => (0, u.jsxs)("div", {
                            style: f.style0,
                            children: [(0, u.jsxs)("strong", {
                                children: ["[", r, "]"]
                            }), ": ", g(e, `${t}[${r}]`, n)]
                        }, r))
                    });
                    if ("object" == typeof e && null !== e && !Array.isArray(e)) {
                        let r = c.has(t),
                            a = Object.entries(e);
                        return (0, u.jsxs)("div", {
                            children: [(0, u.jsxs)("button", {
                                style: { ...f.toggleButton,
                                    marginInlineStart: 8 * n
                                },
                                onClick: () => {
                                    p(e => {
                                        let n = new Set(e);
                                        return n.has(t) ? n.delete(t) : n.add(t), n
                                    })
                                },
                                type: "button",
                                children: [r ? "▼" : "▶", " Object (", a.length, " ", 1 === a.length ? "key" : "keys", ")"]
                            }), r ? (0, u.jsx)("div", {
                                style: { ...f.nestedObject,
                                    marginInlineStart: (n + 1) * 16
                                },
                                children: a.map(([e, r]) => (0, u.jsxs)("div", {
                                    style: f.nestedItem,
                                    children: [(0, u.jsx)("strong", {
                                        children: e
                                    }), ": ", g(r, `${t}.${e}`, n + 1)]
                                }, e))
                            }) : void 0]
                        })
                    }
                    return String(e)
                }, m = null == (t = o.metadata) ? void 0 : t.scorers;
                return (0, u.jsxs)("div", {
                    style: f.container,
                    children: [(0, u.jsx)("div", {
                        style: f.header,
                        children: "📊 Evaluation Results"
                    }), i.project ? (0, u.jsxs)("div", {
                        style: f.braintrustInfo,
                        children: [(0, u.jsx)("strong", {
                            children: "Project:"
                        }), " ", i.project, (0, u.jsx)("br", {}), (0, u.jsx)("strong", {
                            children: "Dataset:"
                        }), " ", i.dataset, (0, u.jsx)("br", {}), (0, u.jsx)("strong", {
                            children: "ID:"
                        }), " ", i.originalInferenceId]
                    }) : void 0, Object.keys(o.scores).length > 0 ? (0, u.jsxs)("div", {
                        style: f.section,
                        children: [(0, u.jsx)("strong", {
                            children: "Scores:"
                        }), (0, u.jsx)("div", {
                            style: f.indentedContent,
                            children: Object.entries(o.scores).map(([e, t]) => {
                                let r;
                                if (m && "object" == typeof m && null !== m) {
                                    let t = m[e];
                                    t && "object" == typeof t && null !== t && !Array.isArray(t) && (r = t.metadata)
                                }
                                let a = r && "object" == typeof r && null !== r && !Array.isArray(r),
                                    o = l.has(e);
                                return (0, u.jsxs)("div", {
                                    children: [(0, u.jsx)("div", {
                                        style: f.scoreItem,
                                        children: (0, u.jsxs)(n(4458).fI, {
                                            alignItems: "center",
                                            gap: 4,
                                            children: [(0, u.jsxs)("span", {
                                                children: [e, ": ", (0, u.jsx)("span", {
                                                    style: f.scoreValue,
                                                    children: t.toFixed(3)
                                                })]
                                            }), a ? (0, u.jsx)("button", {
                                                style: f.toggleButton,
                                                onClick: () => {
                                                    d(t => {
                                                        let n = new Set(t);
                                                        return n.has(e) ? n.delete(e) : n.add(e), n
                                                    })
                                                },
                                                type: "button",
                                                children: o ? "▼" : "▶"
                                            }) : void 0]
                                        })
                                    }), a && o ? (0, u.jsx)("div", {
                                        style: f.scoreMetadata,
                                        children: Object.entries(r).map(([t, n]) => (0, u.jsxs)("div", {
                                            children: [(0, u.jsx)("strong", {
                                                children: t
                                            }), ": ", g(n, `${e}.${t}`)]
                                        }, t))
                                    }) : void 0]
                                }, e)
                            })
                        })]
                    }) : void 0, o.metrics && Object.keys(o.metrics).length > 0 ? (0, u.jsxs)("div", {
                        style: f.section,
                        children: [(0, u.jsx)("strong", {
                            children: "Metrics:"
                        }), (0, u.jsx)("div", {
                            style: f.indentedContent,
                            children: Object.entries(o.metrics).map(([e, t]) => (0, u.jsxs)("div", {
                                style: f.scoreItem,
                                children: [e, ": ", (0, u.jsx)("span", {
                                    style: f.scoreValue,
                                    children: String(t)
                                })]
                            }, e))
                        })]
                    }) : void 0, (0, u.jsxs)("div", {
                        style: f.timestamp,
                        children: ["Evaluated at: ", new Date(s).toLocaleString()]
                    })]
                })
            }
            let h = (0, n(109939).YK)({
                    agentSkippedTitle: {
                        id: "aiInferenceTranscript.agentRouteTriggerStepRenderer.agentSkippedTitle",
                        defaultMessage: "No action taken"
                    }
                }),
                y = {
                    display: "flex",
                    flexDirection: "column",
                    marginBlock: 8
                },
                v = {
                    background: "transparent"
                },
                x = {
                    background: "transparent"
                },
                S = {
                    overflow: "hidden",
                    paddingInlineStart: 22
                },
                b = {
                    paddingBlock: 8
                };

            function j(e) {
                let {
                    step: t
                } = e, [a, o] = (0, r.useState)(!1), [i, s] = (0, n(848135).B)(), l = t.message && t.message.length > 0, {
                    bodyStyleKey: d
                } = (0, n(765846).yq)(), c = (0, n(765846).Cd)(d), p = (0, n(960253).I)(() => ({
                    header: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: s && l ? n(632079).Tj.text.primary : n(632079).Tj.text.secondary,
                        ...c,
                        cursor: l ? "pointer" : "default"
                    },
                    chevronIcon: {
                        transition: "transform 0.2s ease-in-out",
                        transformOrigin: "center",
                        transform: a ? "rotate(0deg)" : "rotate(calc(var(--direction, 1) * -90deg))"
                    },
                    reasoningWrapper: {
                        display: "grid",
                        gridTemplateRows: a ? "1fr" : "0fr",
                        opacity: +!!a,
                        transition: "grid-template-rows 0.2s ease-in-out, opacity 0.2s ease-in-out"
                    }
                }), [a, l, s, c]), g = (0, r.useCallback)(() => {
                    l && o(!a)
                }, [a, l]);
                return t.passed ? null : (0, u.jsxs)("div", {
                    style: y,
                    children: [(0, u.jsxs)(n(988022).p, {
                        ref: i,
                        style: p.header,
                        hoveredStyle: v,
                        pressedStyle: x,
                        onClick: g,
                        disabled: !l,
                        children: [(0, u.jsx)(n(16275).I, {
                            icon: n(580171).j,
                            size: "sm",
                            colorVariant: "secondary"
                        }), (0, u.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: s && l ? "primary" : "secondary",
                            children: (0, u.jsx)(n(109939).sA, { ...h.agentSkippedTitle
                            })
                        }), l ? (0, u.jsx)(n(16275).I, {
                            icon: n(595453).arrowChevronSingleDownSmallIcon,
                            size: "sm",
                            colorVariant: "secondary",
                            style: p.chevronIcon
                        }) : null]
                    }), l ? (0, u.jsx)("div", {
                        style: p.reasoningWrapper,
                        children: (0, u.jsx)("div", {
                            style: S,
                            children: (0, u.jsx)("div", {
                                style: b,
                                children: (0, u.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "secondary",
                                    children: t.message
                                })
                            })
                        })
                    }) : null]
                })
            }
            async function w(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    workflowStore: r,
                    triggerId: a,
                    triggerData: o
                } = e, i = await t.api.callApi({
                    eventName: "triggerWorkflowAutomation",
                    environment: t,
                    data: {
                        workflowId: r.id,
                        spaceId: n.id,
                        triggerId: a,
                        triggerData: JSON.stringify(o ? ? {})
                    }
                });
                if ("failed" === i.type) throw i.error;
                return i.data
            }
            async function I(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    workflowStore: o,
                    threadId: i
                } = e, s = (n(174148).E.createChildStore(r, {
                    table: n(298085).T,
                    id: i,
                    spaceId: r.id
                }).getTranscript() || []).find(a().CK);
                if (!s) return {
                    newThreadId: void 0
                };
                let {
                    threadId: l
                } = await w({
                    environment: t,
                    spaceStore: r,
                    workflowStore: o,
                    triggerId: s.triggerId,
                    triggerData: s.data ? ? {}
                });
                if (l) {
                    let e = (0, n(453573).Lm)({
                        workflowId: o.id,
                        params: {
                            agentChatThreadId: l,
                            workflowViewType: "activity"
                        }
                    });
                    (0, n(79266).navigate)({
                        environment: t,
                        url: e
                    })
                }
                return {
                    newThreadId: l
                }
            }
            let C = (0, n(109939).YK)({
                    editTrigger: {
                        id: "agentStepHeader.editTrigger",
                        defaultMessage: "Edit trigger"
                    },
                    reRun: {
                        id: "agentStepHeader.reRun",
                        defaultMessage: "Re-run"
                    }
                }),
                M = {
                    position: "relative"
                };

            function k(e) {
                let {
                    isExpanded: t,
                    isBusy: a = !1,
                    canExpand: o,
                    onToggleExpanded: i,
                    onTitleClicked: s,
                    icon: l,
                    title: d,
                    hideIcon: p,
                    children: g,
                    triggerStep: f,
                    threadStore: m,
                    "aria-expanded": h,
                    "aria-controls": y
                } = e, v = (0, n(533992).v3)(), x = (0, n(972740).L)(), S = (0, n(916820).Sn)(), {
                    bodyStyleKey: b
                } = (0, n(765846).yq)(), j = (0, n(765846).Cd)(b), w = (0, n(109939).tz)(), k = (0, n(682985).K8)(() => {
                    if (x && null != f && f.workflowId) return n(360851).N.createChildStore(x, {
                        table: c().C0E,
                        id: f.workflowId,
                        spaceId: x.id
                    })
                }, [x, null == f ? void 0 : f.workflowId]), T = (0, r.useCallback)(async () => {
                    if (!f || !k) return;
                    let e = (k.getDataStore().getKeyStore("triggers").getValue() ? ? []).some(e => e.id === f.triggerId);
                    await (0, n(915397).S)({
                        workflowStore: k,
                        editingTriggerId: e ? f.triggerId : void 0,
                        suppressChecklistStore: new(n(591222)).x
                    })
                }, [f, k]), A = (0, r.useCallback)(async () => {
                    f && k && x && m && (await I({
                        environment: v,
                        spaceStore: x,
                        workflowStore: k,
                        threadId: m.id
                    }), await (null == S ? void 0 : S.refreshThreads()))
                }, [f, k, x, v, m, S]), R = (0, n(960253).I)(() => ({
                    button: {
                        width: "100%",
                        height: "auto",
                        paddingBlock: 8,
                        paddingInline: 12,
                        textAlign: "start",
                        borderEndStartRadius: t ? 0 : void 0,
                        borderEndEndRadius: t ? 0 : void 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        alignItems: "start"
                    },
                    chevron: {
                        marginInlineStart: "auto",
                        transform: t ? "rotate(90deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease-in-out"
                    },
                    iconContainer: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 20,
                        width: 20,
                        opacity: a ? .3 : 1
                    },
                    title: {
                        color: n(632079).Tj.text.secondary,
                        minWidth: 0,
                        flexGrow: 1,
                        ...n(649316).U.bodyRegular,
                        ...j
                    }
                }), [t, a, j]);
                return (0, u.jsxs)(n(988022).p, {
                    disabled: a || !o && !s,
                    onClick: s || i,
                    style: R.button,
                    "aria-expanded": h,
                    "aria-controls": y,
                    children: [(0, u.jsxs)(n(4458).fI, {
                        gap: 8,
                        className: "autolayout-row autolayout-fill-width",
                        alignItems: "center",
                        justifyContent: "center",
                        style: M,
                        children: [!p && l ? (0, u.jsx)("div", {
                            style: R.iconContainer,
                            children: a ? (0, u.jsx)(n(265035).ScrollingSquiggle, {}) : (0, u.jsx)(n(16275).I, {
                                icon: l,
                                colorVariant: "secondary"
                            })
                        }) : void 0, (0, u.jsx)("span", {
                            style: R.title,
                            children: d
                        }), (0, u.jsxs)(n(4458).fI, {
                            gap: 2,
                            children: [f && k ? (0, u.jsx)(n(51831).m, {
                                content: () => w.formatMessage(C.reRun),
                                children: e => (0, u.jsx)(n(374533).A, { ...e,
                                    icon: n(670989).l,
                                    onClick: A,
                                    size: "md",
                                    ariaLabel: w.formatMessage(C.reRun)
                                })
                            }) : void 0, f && k ? (0, u.jsx)(n(51831).m, {
                                content: () => w.formatMessage(C.editTrigger),
                                children: e => (0, u.jsx)(n(374533).A, { ...e,
                                    icon: n(381548).s,
                                    onClick: T,
                                    size: "md",
                                    ariaLabel: w.formatMessage(C.editTrigger)
                                })
                            }) : void 0]
                        }), o ? (0, u.jsx)(n(16275).I, {
                            icon: n(120011).arrowChevronSingleRightIcon,
                            colorVariant: "tertiary",
                            size: "default",
                            style: R.chevron
                        }) : void 0]
                    }), g]
                })
            }
            let T = (0, n(109939).YK)({
                    taskTriggered: {
                        id: "agentTrigger.taskTriggered",
                        defaultMessage: "Task triggered"
                    },
                    duplicateReactionsSkipped: {
                        id: "agentTrigger.duplicateReactionsSkipped",
                        defaultMessage: "{count, plural, one {# duplicate reaction skipped} other {# duplicate reactions skipped}}"
                    }
                }),
                A = {
                    wrapper: {
                        borderRadius: 10,
                        overflow: "hidden",
                        boxShadow: `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                        transition: "box-shadow 0.15s ease-in-out"
                    },
                    border: {
                        height: 1,
                        backgroundColor: n(632079).Tj.border.secondary
                    },
                    content: {
                        paddingTop: 0,
                        paddingInlineEnd: 12,
                        paddingBottom: 10,
                        paddingInlineStart: 12
                    },
                    titleContainer: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        flex: 1,
                        minWidth: 0,
                        overflow: "hidden",
                        maxWidth: 400
                    },
                    titleText: {
                        display: "flex",
                        flexDirection: "row",
                        overflow: "hidden",
                        minWidth: 0
                    },
                    triggerPill: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                        borderRadius: 100,
                        height: 28,
                        paddingInline: 12,
                        width: "fit-content",
                        backgroundColor: n(632079).Tj.background.tertiary,
                        color: n(632079).Tj.text.secondary
                    },
                    triggerPillLine: {
                        height: 15,
                        width: 1.5,
                        backgroundColor: n(632079).Tj.border.secondary,
                        marginInlineStart: 20
                    }
                };

            function R(e) {
                var t;
                let {
                    step: o,
                    threadStore: i
                } = e, s = (0, n(109939).tz)(), [l, d] = (0, r.useState)(!1), c = (0, r.useId)(), p = (0, r.useMemo)(() => (0, n(210511).getSpecificWorkflowTrigger)({
                    workflowData: o.workflow,
                    triggerId: o.triggerId
                }), [o.workflow, o.triggerId]), g = (0, r.useMemo)(() => (0, n(210511).getTriggerDefinitionBySpecificTrigger)(p), [p]), f = (0, n(972740).L)(), m = (0, r.useMemo)(() => {
                    if (o.workflowId && f) return {
                        table: "workflow",
                        id: o.workflowId,
                        spaceId: f.id
                    }
                }, [o.workflowId, f]), h = (0, r.useMemo)(() => null != g && g.TriggerOrRunTitle && p && m && !(0, a().KV)(o.data) ? (0, u.jsx)(g.TriggerOrRunTitle, {
                    trigger: p,
                    data: o.data,
                    moduleId: p.moduleId ? ? "notion",
                    workflowDefinitionPointer: m,
                    titleContext: "trigger"
                }) : s.formatMessage({
                    defaultMessage: "Trigger",
                    id: "agentTranscript.triggerStep.label"
                }), [g, p, s, o.data, m]), y = (0, n(682985).K8)(() => {
                    var e;
                    return null == i || null == (e = i.getData()) ? void 0 : e.run_id
                }, [i]), v = (0, r.useMemo)(() => {
                    let e = (null == p ? void 0 : p.moduleId) ? ? "notion";
                    return o.data && !(0, a().KV)(o.data) && null != g && g.TriggerContent && p && m ? (0, u.jsx)(g.TriggerContent, {
                        trigger: p,
                        data: o.data,
                        moduleId: e,
                        workflowDefinitionPointer: m,
                        runId: y,
                        workflowId: o.workflowId
                    }) : null
                }, [o.data, g, p, m, y, o.workflowId]);
                return (0, r.useEffect)(() => {
                    v && d(!0)
                }, [v]), (0, u.jsxs)("div", {
                    children: [(0, u.jsxs)("div", {
                        style: A.triggerPill,
                        children: [(0, u.jsx)(n(16275).I, {
                            icon: n(85918).o,
                            size: "sm",
                            colorVariant: "secondary"
                        }), (0, u.jsx)(n(109939).sA, { ...T.taskTriggered
                        })]
                    }), (0, u.jsx)("div", {
                        style: A.triggerPillLine
                    }), (0, u.jsx)("div", {
                        style: A.wrapper,
                        children: (0, u.jsx)(n(522434).S, {
                            isExpanded: l,
                            contentId: c,
                            origin: (0, u.jsx)(k, {
                                isExpanded: l,
                                canExpand: !1,
                                onToggleExpanded: () => d(!l),
                                title: (0, u.jsxs)("div", {
                                    style: A.titleContainer,
                                    children: [(0, u.jsx)("div", {
                                        style: A.titleText,
                                        children: (0, u.jsx)(n(111010).D, {
                                            styleKey: "bodyRegular",
                                            colorVariant: "secondary",
                                            lineClamp: 1,
                                            children: h
                                        })
                                    }), (null == p || null == (t = p.state) ? void 0 : t.type) !== "slack.reaction.added" || p.state.allowMultipleReactions ? void 0 : (0, u.jsx)(D, {
                                        step: o
                                    })]
                                }),
                                icon: null == g ? void 0 : g.icon,
                                triggerStep: o,
                                threadStore: i,
                                "aria-expanded": l,
                                "aria-controls": c
                            }),
                            content: v ? (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)("div", {
                                    style: A.border
                                }), (0, u.jsx)("div", {
                                    style: A.content,
                                    children: v
                                })]
                            }) : void 0,
                            shouldSkipContentPadding: !0
                        })
                    })]
                })
            }

            function D(e) {
                var t;
                let r, a, o = (0, n(109939).tz)(),
                    i = (t = e.step, r = (0, n(533992).v3)(), a = (0, n(972740).L)(), (0, n(682985).K8)(() => {
                        if (!a) return;
                        let e = function(e) {
                            if (e && "message" in e && e.message && "object" == typeof e.message && "id" in e.message && "string" == typeof e.message.id) return e.message.id
                        }(t.data);
                        if (!e) return;
                        let o = a.id,
                            i = r.idCreator.getSpaceIdCreatorSync(o);
                        if (!i) return;
                        let s = (0, n(581654).Yv)({
                                idCreator: i,
                                workflowId: t.workflowId,
                                triggerId: t.triggerId,
                                slackMessageId: e
                            }),
                            l = n(360851).N.createChildStore(a, {
                                table: n(43296).C,
                                id: t.workflowId,
                                spaceId: o
                            }),
                            d = n(509297).j.createChildStore(l, {
                                table: n(581654).U6,
                                id: s,
                                spaceId: o
                            });
                        if (d.isType("slack_reaction_dedupe")) return d.getData()
                    }, [t.workflowId, t.triggerId, t.data, a, r]));
                return !i || i.dedupCount <= 0 ? null : (0, u.jsx)(n(4458).fI, {
                    alignItems: "center",
                    gap: 4,
                    children: (0, u.jsx)(n(111010).D, {
                        styleKey: "caption",
                        colorVariant: "tertiary",
                        children: o.formatMessage(T.duplicateReactionsSkipped, {
                            count: i.dedupCount
                        })
                    })
                })
            }
            let P = (0, n(109939).YK)({
                    maxIterationsReached: {
                        id: "aiInferenceTranscript.maxIterationsReached.message",
                        defaultMessage: "Agent paused after reaching maximum iterations"
                    },
                    continueButton: {
                        id: "aiInferenceTranscript.maxIterationsReached.continue",
                        defaultMessage: "Continue"
                    }
                }),
                F = {
                    wrapper: {
                        position: "relative",
                        boxShadow: `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                        borderRadius: 10,
                        backgroundColor: n(632079).Tj.background.elevated,
                        padding: "10px 12px"
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function E(e) {
                let {
                    threadStore: t,
                    clientStore: a
                } = e, o = (0, n(533992).v3)(), i = (0, r.useCallback)(async () => {
                    await (0, n(757688).WE)({
                        environment: o,
                        clientStore: a,
                        threadStore: t,
                        analyticsArgs: {
                            suggestedPrompt: {
                                promptKey: "max_iterations.continue",
                                promptDescription: "Continue agent execution after max iterations reached"
                            }
                        }
                    })
                }, [o, a, t]);
                return (0, u.jsxs)(n(4458).fI, {
                    className: "autolayout-fill-width",
                    style: F.wrapper,
                    alignItems: "center",
                    justifyContent: "center",
                    children: [(0, u.jsx)(n(4458).VP, {
                        className: "autolayout-col",
                        gap: 2,
                        style: F.positionRelative,
                        flex: "1 1 0",
                        children: (0, u.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "primary",
                            children: (0, u.jsx)(n(109939).sA, { ...P.maxIterationsReached
                            })
                        })
                    }), (0, u.jsx)(n(4458).fI, {
                        className: "autolayout-row",
                        style: F.positionRelative,
                        children: (0, u.jsx)(n(912946).A, {
                            onClick: i,
                            colorPalette: "blue",
                            children: (0, u.jsx)(n(109939).sA, { ...P.continueButton
                            })
                        })
                    })]
                })
            }
            let N = /<lang[^>]*\/>/g;

            function U(e) {
                let {
                    step: t,
                    threadStore: r,
                    clientStore: a
                } = e, o = function(e) {
                    if ("agent-inference" !== e.type || !Array.isArray(e.value)) return;
                    let t = e.value.find(e => "text" === e.type),
                        n = e.value.find(e => "follow_ups" === e.type);
                    if (t && n && "text" === t.type) return t.content.replace(N, "").trimStart()
                }(t), i = a && r ? (0, n(187353).A3)({
                    clientStore: a,
                    threadStore: r
                }).steps : (null == r ? void 0 : r.getTranscript()) ? ? [], s = !!o && function(e) {
                    let {
                        step: t,
                        transcript: n
                    } = e;
                    if (n.some(e => "user" === e.type || "user-injected" === e.type || "agent-prebuilt-prompt" === e.type)) return !1;
                    let r = n.find(e => "agent-inference" === e.type);
                    return (null == r ? void 0 : r.id) === t.id
                }({
                    step: t,
                    transcript: i
                }) && function(e) {
                    let {
                        step: t,
                        transcript: n
                    } = e;
                    if (0 === n.length) return !1;
                    let r = n[n.length - 1];
                    return (null == r ? void 0 : r.id) === t.id
                }({
                    step: t,
                    transcript: i
                }), l = Math.max(300, Math.min(1600, ((null == o ? void 0 : o.length) ? ? 0) * 14));
                return {
                    shouldAnimate: s,
                    message: o,
                    durationMs: l,
                    delayMs: 1e3 * !!s
                }
            }
            let V = {
                position: "relative"
            };

            function _(e) {
                let {
                    chatPartData: t,
                    aiChatFeatureController: a,
                    threadStore: o,
                    clientStore: i,
                    feedbackComponentIndex: s
                } = e, {
                    isAnimating: l,
                    animatedMarkdown: d,
                    isThinking: c
                } = function({
                    step: e,
                    threadStore: t,
                    clientStore: a
                }) {
                    let {
                        shouldAnimate: o,
                        message: i,
                        durationMs: s,
                        delayMs: l
                    } = (0, n(682985).K8)(() => U({
                        step: e,
                        threadStore: t,
                        clientStore: a
                    }), [e, t, a]), [d, c] = (0, r.useState)(null), [u, p] = (0, r.useState)(!1), [g, f] = (0, r.useState)(!1), m = (0, r.useRef)(null);
                    return (0, r.useEffect)(() => {
                        if (!o || !i) {
                            c(null), p(!1), f(!1);
                            return
                        }
                        if (m.current === e.id) return;
                        m.current = e.id;
                        let t = 0,
                            n = 0,
                            r = () => {
                                f(!1), p(!0);
                                let e = performance.now(),
                                    n = i.length,
                                    r = a => {
                                        let o = Math.min(1, (a - e) / s),
                                            l = Math.max(1, Math.ceil(o * n));
                                        c(i.slice(0, l)), o < 1 ? t = requestAnimationFrame(r) : (c(i), p(!1))
                                    };
                                t = requestAnimationFrame(r)
                            };
                        return l > 0 ? (f(!0), n = window.setTimeout(r, l)) : r(), () => {
                            n && window.clearTimeout(n), t && cancelAnimationFrame(t)
                        }
                    }, [o, i, s, l, e.id]), {
                        isAnimating: u,
                        animatedMarkdown: d ? ? "",
                        isThinking: g
                    }
                }({
                    step: t.step,
                    threadStore: o,
                    clientStore: i
                }), p = a.aiChatType;
                return (0, u.jsx)(n(4458).VP, {
                    paddingInline: "slippery_slope" === p ? 12 : 4,
                    className: "autolayout-col autolayout-fill-width",
                    style: V,
                    children: c ? (0, u.jsx)(n(473686).c, {
                        message: (0, n(473686).U)(null == o ? void 0 : o.id),
                        animationType: "scrolling-squiggle",
                        seed: null == o ? void 0 : o.id
                    }) : (0, u.jsx)(n(212024).h, {
                        markdown: l ? d : t.markdown,
                        citationContext: t.citationContext,
                        aiChatFeatureController: a,
                        stepId: t.step.id,
                        editReferenceMap: t.step.editReferenceMap,
                        threadStore: o,
                        clientStore: i,
                        isStreaming: l || !t.isFinished,
                        feedbackComponentIndex: s
                    })
                })
            }
            var B = () => n(305721),
                L = () => n(962299);
            let K = {
                    container: {
                        opacity: 1,
                        transition: "opacity 200ms ease-out"
                    },
                    containerHidden: {
                        opacity: 0,
                        pointerEvents: "none"
                    },
                    card: {
                        border: `1px solid ${n(632079).Tj.border.secondary}`,
                        borderRadius: 8,
                        padding: 16,
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        maxWidth: 400,
                        background: n(632079).Tj.background.primary
                    },
                    header: {
                        marginBottom: 4
                    },
                    buttonWrapper: {
                        marginTop: 4,
                        alignSelf: "flex-start"
                    },
                    row: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 12,
                        cursor: "pointer",
                        width: "fit-content"
                    }
                },
                O = (0, n(109939).YK)({
                    sendButton: {
                        id: "agentInferenceFollowUpsPart.sendButton",
                        defaultMessage: "Send"
                    },
                    selectAllThatApply: {
                        id: "agentInferenceFollowUpsPart.selectAllThatApply",
                        defaultMessage: "Select all that apply"
                    }
                });

            function z(e) {
                let {
                    partData: t,
                    onFollowUpSelect: a,
                    isLastTurn: o,
                    threadId: i,
                    threadStore: s,
                    aiChatFeatureController: l,
                    clientStore: d
                } = e, p = (0, n(533992).v3)(), [g, f] = (0, n(68740).P)(1), m = (0, r.useRef)(!1), h = t.step.traceId, y = t.multiSelect ? ? !1, [v, x] = (0, r.useState)(new Set), S = (0, n(682985).K8)(() => s.getTranscript().filter(e => "user" === e.type).length <= 1, [s]), {
                    shouldAnimate: b,
                    durationMs: j,
                    delayMs: w
                } = (0, n(682985).K8)(() => U({
                    step: t.step,
                    threadStore: s,
                    clientStore: d
                }), [t.step, s, d]), [I, C] = (0, r.useState)(!b), M = t.followUps, k = M.length, T = (0, r.useCallback)((e, t, r) => {
                    var o, l, d;
                    let u = null == (o = t.metadata) ? void 0 : o.variant,
                        g = null == (l = t.metadata) ? void 0 : l.option;
                    if (B().trackFollowUpButtonClicked({
                            environment: p,
                            threadId: i,
                            aiInferenceId: h,
                            followUpCount: k,
                            followUpIndex: r,
                            variant: u,
                            option: g,
                            isIntroPill: S
                        }), u && g) switch (u) {
                        case "daily_brief":
                            ! function(e) {
                                let {
                                    environment: t,
                                    threadStore: r,
                                    option: a
                                } = e, o = r.getSpaceStore();
                                if (!o) return;
                                let i = t.currentUser.id;
                                if (!i) return;
                                let s = n(807825).L.createChildStore(o, {
                                        table: c().oo9,
                                        id: i
                                    }),
                                    {
                                        display: l,
                                        actual: d
                                    } = function(e, t) {
                                        var r, a;
                                        let o, i = null == (o = null == (r = n(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : r.getSettings()) || null == (a = o.ai_prompts) || null == (a = a.default_skill_pages_by_type) ? void 0 : a.create_daily_brief,
                                            s = i ? `the Daily Reminders prompt page (page ID: ${i})` : "the Daily Reminders prompt page from the first user message";
                                        switch (e) {
                                            case "good":
                                                return {
                                                    display: t.formatMessage({
                                                        id: "dailyBriefFeedback.userMessage.good",
                                                        defaultMessage: "This brief was helpful."
                                                    }),
                                                    actual: "The user thanked you for a helpful daily brief. Tell them great, and that you hope to do the same tomorrow. BE CONCISE."
                                                };
                                            case "improve_accuracy":
                                                return {
                                                    display: t.formatMessage({
                                                        id: "dailyBriefFeedback.userMessage.improveAccuracy",
                                                        defaultMessage: "This brief was inaccurate."
                                                    }),
                                                    actual: `The user said the info in the brief is not accurate. (1) Try fact checking to uncover your error (2) if you can't identify it, ask the user what the error is, and apologize. Once they respond, immediately update ${s} (NOT the user's personal instructions page) by adding their feedback as bullet points (under the 'User Feedback' subheader). Tell them you've updated your prompt page and will take their feedback into account for tomorrow's brief. Do NOT ask any additional follow-up questions after updating the page. BE CONCISE. Use short bullets for main asks.`
                                                };
                                            case "improve_relevance":
                                                return {
                                                    display: t.formatMessage({
                                                        id: "dailyBriefFeedback.userMessage.improveRelevance",
                                                        defaultMessage: "This brief was not relevant."
                                                    }),
                                                    actual: `The user said the info in the brief is not relevant to them. Ask them what projects, individuals, or topics they care about most (and if they have Slack connected, what channels are important). Once they respond, immediately update ${s} (NOT the user's personal instructions page) by adding their preferences as bullet points (under the 'User Feedback' subheader). Tell them you've updated your prompt page and will take their feedback into account for tomorrow's brief. Do NOT ask any additional follow-up questions after updating the page. BE CONCISE. Use short bullets for main asks.`
                                                }
                                        }
                                    }(a, L().A.getIntl()),
                                    u = (0, n(674880).uP)({
                                        environment: t,
                                        spaceStore: o,
                                        userStore: s,
                                        displayMessage: (0, n(247438).x9d)(l),
                                        actualMessage: (0, n(247438).x9d)(d)
                                    });
                                (0, n(455764).T)({
                                    environment: t,
                                    clientStore: n(57168).defaultClientAIChatStore,
                                    userStore: s,
                                    spaceStore: o,
                                    threadStore: r,
                                    addSteps: [u],
                                    waitForServerCommit: !0,
                                    temporaryAiThreadManager: void 0
                                })
                            }({
                                environment: p,
                                threadStore: s,
                                option: g
                            });
                            return;
                        case "custom_agent_setup":
                            return;
                        default:
                            (0, n(722371).HB)(u)
                    }
                    if ((0, n(446062).F)(i)) {
                        let e = n(728372).AppStoreCurrentUserSettingsStore.state;
                        null != e && e.isReady() && !(null != (d = e.getSettings()) && null != (d = d.post_onboarding_agent_config) && d.has_user_responded) && (0, n(675053).setPostOnboardingAgentConfig)({
                            environment: p,
                            config: {
                                has_user_responded: !0
                            }
                        })
                    }
                    if (t.message.toLowerCase().includes("all set") && (0, n(446062).F)(i)) {
                        B().trackPostOnboardingAgentCompleted({
                            threadId: i
                        });
                        let e = n(728372).AppStoreCurrentUserSettingsStore.state;
                        null != e && e.isReady() && (0, n(675053).setPostOnboardingAgentConfig)({
                            environment: p,
                            config: {
                                has_clicked_all_set: !0
                            }
                        })
                    }
                    a(e, t)
                }, [p, i, h, k, a, s, S]), A = (0, r.useCallback)(e => {
                    x(t => {
                        let n = new Set(t);
                        return n.has(e) ? n.delete(e) : n.add(e), n
                    })
                }, []), R = (0, r.useCallback)(() => {
                    if (0 === v.size) return;
                    let e = Array.from(v).sort((e, t) => e - t).map(e => t.followUps[e].message).join("\n");
                    for (let e of v) {
                        var n, r;
                        let a = t.followUps[e];
                        B().trackFollowUpButtonClicked({
                            environment: p,
                            threadId: i,
                            aiInferenceId: h,
                            followUpCount: k,
                            followUpIndex: e,
                            variant: null == (n = a.metadata) ? void 0 : n.variant,
                            option: null == (r = a.metadata) ? void 0 : r.option
                        })
                    }
                    a(e)
                }, [v, t.followUps, p, i, h, k, a]);
                (0, r.useEffect)(() => {
                    if (!b) return void C(!0);
                    C(!1);
                    let e = window.setTimeout(() => {
                        C(!0)
                    }, j + w);
                    return () => {
                        window.clearTimeout(e)
                    }
                }, [b, j, w]);
                let D = o && k > 0;
                if ((0, r.useEffect)(() => {
                        if (D && f && !m.current) {
                            var e;
                            m.current = !0;
                            let t = null == (e = M.find(e => {
                                var t;
                                return null == (t = e.metadata) ? void 0 : t.variant
                            })) || null == (e = e.metadata) ? void 0 : e.variant;
                            B().trackFollowUpButtonsImpression({
                                environment: p,
                                threadId: i,
                                aiInferenceId: h,
                                followUpCount: k,
                                variant: t
                            })
                        }
                    }, [D, f, p, i, k, h, M]), !D) return null;
                if (y) return (0, u.jsx)(q, {
                    ref: g,
                    partData: t,
                    selectedIndices: v,
                    onToggle: A,
                    onSubmit: R
                });
                let P = l.aiChatType;
                return (0, u.jsx)(n(4458).VP, {
                    ref: g,
                    gap: 8,
                    className: "autolayout-col autolayout-fill-width",
                    paddingInline: 8 * ("slippery_slope" === P),
                    paddingBottom: 8,
                    style: {
                        position: "relative",
                        ...K.container,
                        ...I ? void 0 : K.containerHidden
                    },
                    alignItems: "flex-start",
                    justifyContent: "center",
                    children: M.map((e, n) => (0, u.jsx)($, {
                        followUp: e,
                        index: n,
                        onSelect: T
                    }, `${t.key}-${n}`))
                })
            }
            let W = {
                    maxWidth: "100%"
                },
                $ = (0, r.memo)(function(e) {
                    let {
                        followUp: t,
                        onSelect: a,
                        index: o
                    } = e, {
                        bodyStyleKey: i
                    } = (0, n(765846).yq)(), s = (0, r.useCallback)(() => {
                        a(t.message, t, o)
                    }, [a, t, o]);
                    return (0, u.jsx)(n(265779).E, {
                        onClick: s,
                        shape: "pill",
                        style: W,
                        children: (0, u.jsx)(n(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: (0, u.jsx)(n(111010).D, {
                                styleKey: i,
                                colorVariant: "primary",
                                children: t.label
                            })
                        })
                    })
                }),
                q = (0, r.memo)(r.forwardRef(function(e, t) {
                    let {
                        partData: r,
                        selectedIndices: a,
                        onToggle: o,
                        onSubmit: i
                    } = e, s = 0 === a.size;
                    return (0, u.jsxs)("div", {
                        ref: t,
                        style: K.card,
                        children: [(0, u.jsx)(n(111010).D, {
                            styleKey: "bodyLgSemibold",
                            colorVariant: "primary",
                            style: K.header,
                            children: (0, u.jsx)(n(109939).sA, { ...O.selectAllThatApply
                            })
                        }), r.followUps.map((e, t) => (0, u.jsx)(Y, {
                            followUp: e,
                            index: t,
                            isSelected: a.has(t),
                            onToggle: o,
                            bodyStyleKey: "bodyRegular"
                        }, `${r.key}-${t}`)), (0, u.jsx)("div", {
                            style: K.buttonWrapper,
                            children: (0, u.jsx)(n(265779).E, {
                                colorPalette: "blue",
                                onClick: i,
                                disabled: s,
                                children: (0, u.jsx)(n(109939).sA, { ...O.sendButton
                                })
                            })
                        })]
                    })
                })),
                Y = (0, r.memo)(function(e) {
                    let {
                        followUp: t,
                        index: a,
                        isSelected: o,
                        onToggle: i,
                        bodyStyleKey: s
                    } = e, l = (0, r.useCallback)(e => {
                        e.stopPropagation(), i(a)
                    }, [i, a]), d = (0, r.useCallback)(() => {
                        i(a)
                    }, [i, a]), c = (0, r.useCallback)(e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), i(a))
                    }, [i, a]);
                    return (0, u.jsxs)("div", {
                        style: K.row,
                        onClick: d,
                        onKeyDown: c,
                        role: "checkbox",
                        "aria-checked": o,
                        tabIndex: 0,
                        children: [(0, u.jsx)(n(349050).S, {
                            checked: o,
                            size: 16,
                            onClick: l
                        }), (0, u.jsx)(n(111010).D, {
                            styleKey: s,
                            colorVariant: "primary",
                            children: t.label
                        })]
                    })
                });
            n(16280);
            var H = () => n(851062),
                G = () => n(957042);

            function Q(e) {
                for (let t of G().zP)
                    for (let n of G().JN[t].effectsArray)
                        if (n === e) return t;
                throw Error(`Did not find effect key ${e} in any module`)
            }

            function X(e) {
                let t = Q(e),
                    r = n(255755).y[t].effect[e];
                if (!r) throw Error(`Did not find effect definition for ${e}`);
                return r
            }

            function J(e, {
                intl: t,
                isLoading: n,
                toolResultStep: r
            }) {
                let a = X(e);
                if (null != r && r.error) return a.getErrorDescription({
                    intl: t,
                    isLoading: n,
                    toolResultStep: r
                })
            }
            let Z = n(969475).object({
                    required: {},
                    optional: {
                        message: n(969475).string()
                    }
                }),
                ee = ["pageDiscussions", "discussion"];

            function et({
                intl: e,
                state: t,
                numResults: r,
                toolName: o,
                toolResultStep: i,
                toolUse: s,
                includeToolNoun: l,
                isReferencingContextPage: d,
                isLastStep: c,
                titleStore: u,
                externalToolName: p
            }) {
                var g, f, m, h, y, v, x;
                switch (o) {
                    case "search":
                        switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.search.loading.withQuery",
                                    defaultMessage: "Searching"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.search.done",
                                    defaultMessage: "Searched"
                                })
                        }
                        break;
                    case "queryCalendar":
                        switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.queryCalendar.loading",
                                    defaultMessage: "Searching calendar"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.queryCalendar.done",
                                    defaultMessage: "Searched calendar"
                                })
                        }
                        break;
                    case "queryMail":
                        switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.queryMail.loading",
                                    defaultMessage: "Searching email"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.queryMail.done",
                                    defaultMessage: "Searched email"
                                })
                        }
                        break;
                    case "view":
                        switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.view.loading",
                                    defaultMessage: "Viewing"
                                });
                            case "done":
                                if (i && (0, a().gY)(i, "view")) {
                                    let t = (null == (g = i.result) ? void 0 : g.entities) ? ? [];
                                    if (t.length > 0 && t.some(e => ee.includes(e.type))) return void 0 === u ? e.formatMessage({
                                        id: "AgentInferenceStepRenderer.view.done.viewedCommentsNoPageSpecified",
                                        defaultMessage: "Viewed comments"
                                    }) : e.formatMessage({
                                        id: "AgentInferenceStepRenderer.view.done.viewedCommentsForPage",
                                        defaultMessage: "Viewed comments in"
                                    });
                                    if (t.length <= 1) {
                                        if (1 === t.length && "webpage" === t[0].type) return e.formatMessage({
                                            id: "AgentInferenceStepRenderer.view.done.singleWebpage",
                                            defaultMessage: "Viewed {website}"
                                        }, {
                                            website: (0, n(375905).Wo)(t[0].url)
                                        });
                                        return e.formatMessage({
                                            id: "AgentInferenceStepRenderer.view.done",
                                            defaultMessage: "Viewed"
                                        })
                                    }
                                    let r = new(n(277637)).G(() => 0);
                                    for (let e of t) {
                                        let t = e.type;
                                        ("collection" === t || "database" === t) && (t = "database"), r.update(t, e => e + 1)
                                    }
                                    if (1 !== r.size) return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.view.doneMultiple.items",
                                        defaultMessage: "Viewed {count} items"
                                    }, {
                                        count: t.length
                                    }); {
                                        let [n, a] = Array.from(r.entries())[0];
                                        switch (n) {
                                            case "page":
                                                return e.formatMessage({
                                                    id: "AgentInferenceStepRenderer.view.doneMultiple.pages",
                                                    defaultMessage: "Viewed {count} pages"
                                                }, {
                                                    count: a
                                                });
                                            case "database":
                                                return e.formatMessage({
                                                    id: "AgentInferenceStepRenderer.view.doneMultiple.databases",
                                                    defaultMessage: "Viewed {count} databases"
                                                }, {
                                                    count: a
                                                });
                                            case "user":
                                                return e.formatMessage({
                                                    id: "AgentInferenceStepRenderer.view.doneMultiple.users",
                                                    defaultMessage: "Viewed {count} users"
                                                }, {
                                                    count: a
                                                });
                                            case "file":
                                                return e.formatMessage({
                                                    id: "AgentInferenceStepRenderer.view.doneMultiple.files",
                                                    defaultMessage: "Viewed {count} files"
                                                }, {
                                                    count: a
                                                });
                                            case "webpage":
                                                return e.formatMessage({
                                                    id: "AgentInferenceStepRenderer.view.doneMultiple.websites",
                                                    defaultMessage: "Viewed {count} websites"
                                                }, {
                                                    count: a
                                                });
                                            case "snapshot":
                                                return e.formatMessage({
                                                    id: "AgentInferenceStepRenderer.view.doneMultiple.snapshots",
                                                    defaultMessage: "Viewed {count} versions"
                                                }, {
                                                    count: a
                                                });
                                            default:
                                                return e.formatMessage({
                                                    id: "AgentInferenceStepRenderer.view.doneMultiple.unknownType",
                                                    defaultMessage: "Viewed {count} items"
                                                }, {
                                                    count: t.length
                                                })
                                        }
                                    }
                                }
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.view.done",
                                    defaultMessage: "Viewed"
                                })
                        }
                        break;
                    case "view-version-history":
                        switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.viewVersionHistory.loading",
                                    defaultMessage: "Viewing version history"
                                });
                            case "done":
                                if (i && (0, a().gY)(i, "view-version-history")) {
                                    let t = (null == (f = i.result) ? void 0 : f.entities) ? ? [];
                                    if (t.length <= 1) return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.viewVersionHistory.done",
                                        defaultMessage: "Viewed version history"
                                    });
                                    let r = new(n(277637)).G(() => 0);
                                    for (let e of t) {
                                        let t = e.type;
                                        r.update(t, e => e + 1)
                                    }
                                    if (1 !== r.size) return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.viewVersionHistory.doneMultiple.items",
                                        defaultMessage: "Viewed {count} items' version histories"
                                    }, {
                                        count: t.length
                                    }); {
                                        let [n, a] = Array.from(r.entries())[0];
                                        switch (n) {
                                            case "page":
                                                return e.formatMessage({
                                                    id: "AgentInferenceStepRenderer.viewVersionHistory.doneMultiple.pages",
                                                    defaultMessage: "Viewed {count} pages' version histories"
                                                }, {
                                                    count: a
                                                });
                                            case "database":
                                                return e.formatMessage({
                                                    id: "AgentInferenceStepRenderer.viewVersionHistory.doneMultiple.databases",
                                                    defaultMessage: "Viewed {count} databases' version histories"
                                                }, {
                                                    count: a
                                                });
                                            default:
                                                return e.formatMessage({
                                                    id: "AgentInferenceStepRenderer.viewVersionHistory.doneMultiple.unknownType",
                                                    defaultMessage: "Viewed {count} items' version histories"
                                                }, {
                                                    count: t.length
                                                })
                                        }
                                    }
                                }
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.viewVersionHistory.done",
                                    defaultMessage: "Viewed version history"
                                })
                        }
                        break;
                    case "view-notifications":
                        switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.viewNotifications.loading",
                                    defaultMessage: "Viewing notifications"
                                });
                            case "done":
                                if (i && (0, a().gY)(i, "view-notifications")) {
                                    let t = (null == (m = i.result) ? void 0 : m.notifications) ? ? [];
                                    if (t.length <= 1) return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.viewNotifications.doneSingle",
                                        defaultMessage: "Viewed notification"
                                    });
                                    return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.viewNotifications.doneMultiple",
                                        defaultMessage: "Viewed {count} notifications"
                                    }, {
                                        count: t.length
                                    })
                                }
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.viewNotifications.doneFallback",
                                    defaultMessage: "Viewed notifications"
                                })
                        }
                        break;
                    case "view-database-files":
                        switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.viewDatabaseFiles.loading",
                                    defaultMessage: "Viewing code"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.viewDatabaseFiles.done",
                                    defaultMessage: "Viewed code"
                                })
                        }
                        break;
                    case "create-database":
                        switch (t) {
                            case "loading":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createDatabase.loading",
                                    defaultMessage: "Creating database"
                                });
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createDatabase.undone",
                                    defaultMessage: "Create database"
                                });
                            case "done":
                                if (l) return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createDatabase.doneWithNoun",
                                    defaultMessage: "Created database"
                                });
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createDatabase.done",
                                    defaultMessage: "Created"
                                })
                        }
                        break;
                    case "update-database":
                        if ("loading" === t)
                            if (l) return e.formatMessage({
                                id: "AgentInferenceStepRenderer.updateDatabase.loadingWithNoun",
                                defaultMessage: "Updating database"
                            });
                            else return e.formatMessage({
                                id: "AgentInferenceStepRenderer.updateDatabase.loading",
                                defaultMessage: "Updating"
                            });
                        if ("reverted" === t) return e.formatMessage({
                            id: "AgentInferenceStepRenderer.updateDatabase.undone",
                            defaultMessage: "Update database"
                        });
                        if (l) return e.formatMessage({
                            id: "AgentInferenceStepRenderer.updateDatabase.doneWithNoun",
                            defaultMessage: "Updated database"
                        });
                        else return e.formatMessage({
                            id: "AgentInferenceStepRenderer.updateDatabase.done",
                            defaultMessage: "Updated"
                        });
                    case "query-data-sources":
                        {
                            let n = i && (0, a().gY)(i, "query-data-sources") ? (null == (h = i.result) ? void 0 : h.collectionIds) ? ? [] : [];
                            switch (t) {
                                case "loading":
                                case "reverted":
                                    if (n.length && !l) return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.queryDataSources.loading.withSourceIncluded",
                                        defaultMessage: "Searching"
                                    });
                                    return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.queryDataSources.loading",
                                        defaultMessage: "Searching data sources"
                                    });
                                case "done":
                                    if (n.length && !l) return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.queryDataSources.done.withSourceIncluded",
                                        defaultMessage: "Searched"
                                    });
                                    return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.queryDataSources.done",
                                        defaultMessage: "Searched data sources"
                                    })
                            }
                            break
                        }
                    case "update-database-triggers":
                        switch (t) {
                            case "loading":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updateDatabaseTriggers.loading",
                                    defaultMessage: "Updating triggers"
                                });
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updateDatabaseTriggers.undone",
                                    defaultMessage: "Update triggers"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updateDatabaseTriggers.done",
                                    defaultMessage: "Updated triggers"
                                })
                        }
                        break;
                    case "error":
                        return e.formatMessage({
                            id: "AgentInferenceStepRenderer.error",
                            defaultMessage: "Error"
                        });
                    case "create-pages":
                        switch (t) {
                            case "loading":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createPages.loading",
                                    defaultMessage: "Creating pages"
                                });
                            case "reverted":
                                if (r <= 1) return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createPages.undone",
                                    defaultMessage: "Create page"
                                });
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createPages.undonePlural",
                                    defaultMessage: "Create {numResults} pages"
                                }, {
                                    numResults: r
                                });
                            case "done":
                                if (l) return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createPages.doneWithNoun",
                                    defaultMessage: (0, n(109939).LS)("numResults", {
                                        one: "Created {numResults} page",
                                        other: "Created {numResults} pages"
                                    })
                                }, {
                                    numResults: r
                                });
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createPages.done",
                                    defaultMessage: "Created"
                                })
                        }
                        break;
                    case "delete-pages":
                        switch (t) {
                            case "loading":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.deletePage.loading",
                                    defaultMessage: "Deleting pages"
                                });
                            case "reverted":
                                if (r <= 1) return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.deletePage.undone",
                                    defaultMessage: "Delete page"
                                });
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.deletePage.undonePlural",
                                    defaultMessage: "Delete {numResults} pages"
                                }, {
                                    numResults: r
                                });
                            case "done":
                                if (l) return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.deletePage.doneWithNoun",
                                    defaultMessage: (0, n(109939).LS)("numResults", {
                                        one: "Deleted {numResults} page",
                                        other: "Deleted {numResults} pages"
                                    })
                                }, {
                                    numResults: r
                                });
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.deletePage.done",
                                    defaultMessage: "Deleted"
                                })
                        }
                        break;
                    case "update-page":
                    case "update-page-v2":
                        if (d) switch (t) {
                            case "loading":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updatePage.loadingInstructions",
                                    defaultMessage: "Updating instructions"
                                });
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updatePage.undoneInstructions",
                                    defaultMessage: "Update instructions"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updatePage.doneInstructions",
                                    defaultMessage: "Updated instructions"
                                })
                        }
                        switch (t) {
                            case "loading":
                                if (l) return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updatePage.loadingWithNoun",
                                    defaultMessage: "Updating page"
                                });
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updatePage.loading",
                                    defaultMessage: "Updating"
                                });
                            case "reverted":
                                if (r <= 1) return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updatePage.undone",
                                    defaultMessage: "Update page"
                                });
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updatePage.undonePlural",
                                    defaultMessage: "Update {numResults} pages"
                                }, {
                                    numResults: r
                                });
                            case "done":
                                if (l) return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updatePage.doneWithNoun",
                                    defaultMessage: (0, n(109939).LS)("numResults", {
                                        one: "Updated {numResults} page",
                                        other: "Updated {numResults} pages"
                                    })
                                }, {
                                    numResults: r
                                });
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updatePage.done",
                                    defaultMessage: "Updated"
                                })
                        }
                        break;
                    case "update-database-data-sources":
                        switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updateDataSources.loading",
                                    defaultMessage: "Updating data sources"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updateDataSources.done",
                                    defaultMessage: "Updated data sources"
                                })
                        }
                        break;
                    case "update-database-views":
                        switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updateViews.loading",
                                    defaultMessage: "Updating views"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updateViews.done",
                                    defaultMessage: "Updated views"
                                })
                        }
                        break;
                    case "result":
                        switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.asyncSuccess.loading",
                                    defaultMessage: "Finishing task"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.asyncSuccess.done",
                                    defaultMessage: "Finished task"
                                })
                        }
                        break;
                    default:
                        if ((0, H().og)(o)) {
                            if (null != i && i.error) {
                                let n = J(o, {
                                    intl: e,
                                    isLoading: "loading" === t,
                                    toolResultStep: i
                                });
                                if (n) return n.title
                            }
                            return function(e, {
                                intl: t,
                                isLoading: n,
                                toolResultStep: r
                            }) {
                                let a = X(e);
                                return null != r && r.error ? a.getErrorDescription({
                                    intl: t,
                                    isLoading: n,
                                    toolResultStep: r
                                }).title : a.getDescription({
                                    intl: t,
                                    isLoading: n,
                                    toolResultStep: r
                                })
                            }(o, {
                                intl: e,
                                isLoading: "loading" === t,
                                toolResultStep: i
                            })
                        }
                        if ("list-machines" === o) switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.listMachines.loading",
                                    defaultMessage: "Listing machines"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.listMachines.done",
                                    defaultMessage: "Listed machines"
                                })
                        } else if ("create-machine" === o) switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createMachine.loading",
                                    defaultMessage: "Creating machine"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createMachine.done",
                                    defaultMessage: "Created machine"
                                })
                        } else if ("destroy-machine" === o) switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.destroyMachine.loading",
                                    defaultMessage: "Destroying machine"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.destroyMachine.done",
                                    defaultMessage: "Destroyed machine"
                                })
                        } else if ("terminal" === o) switch (t) {
                            case "loading":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.terminal.loading",
                                    defaultMessage: "Running terminal command"
                                });
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.terminal.reverted",
                                    defaultMessage: "Reverted terminal command"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.terminal.done",
                                    defaultMessage: "Ran terminal command"
                                })
                        } else if ("browser" === o) switch (t) {
                            case "loading":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.browser.loading",
                                    defaultMessage: "Running browser actions"
                                });
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.browser.reverted",
                                    defaultMessage: "Reverted browser actions"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.browser.done",
                                    defaultMessage: "Ran browser actions"
                                })
                        } else if ("remote-coding-agent-tool" === o) switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.remoteCodingAgentTool.loading",
                                    defaultMessage: "Running external tool"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.remoteCodingAgentTool.done",
                                    defaultMessage: "Ran external tool"
                                })
                        } else if ("external-agent-tool" === o) {
                            let n = function(e) {
                                let {
                                    externalToolName: t,
                                    toolResultStep: n
                                } = e;
                                if (t) return t;
                                if (n && (0, a().gY)(n, "external-agent-tool")) {
                                    var r;
                                    return null == (r = n.input) ? void 0 : r.externalToolName
                                }
                            }({
                                externalToolName: p,
                                toolResultStep: i
                            });
                            switch (t) {
                                case "loading":
                                case "reverted":
                                    return n ? e.formatMessage({
                                        id: "AgentInferenceStepRenderer.externalAgentTool.loading.named",
                                        defaultMessage: "Running {toolName} tool"
                                    }, {
                                        toolName: n
                                    }) : e.formatMessage({
                                        id: "AgentInferenceStepRenderer.externalAgentTool.loading.generic",
                                        defaultMessage: "Running external tool"
                                    });
                                case "done":
                                    return n ? e.formatMessage({
                                        id: "AgentInferenceStepRenderer.externalAgentTool.done.named",
                                        defaultMessage: "Ran {toolName} tool"
                                    }, {
                                        toolName: n
                                    }) : e.formatMessage({
                                        id: "AgentInferenceStepRenderer.externalAgentTool.done.generic",
                                        defaultMessage: "Ran external tool"
                                    })
                            }
                        } else if ("enter-setup-mode" === o) return function(e) {
                            let {
                                intl: t,
                                state: n
                            } = e;
                            return "loading" === n ? t.formatMessage({
                                id: "AgentInferenceStepRenderer.enterSetupMode.loading",
                                defaultMessage: "Entering setup mode"
                            }) : "reverted" === n ? t.formatMessage({
                                id: "AgentInferenceStepRenderer.enterSetupMode.reverted",
                                defaultMessage: "Setup mode entry reverted"
                            }) : ""
                        }({
                            intl: e,
                            state: t
                        });
                        else if ("exit-setup-mode" === o) return function(e) {
                            let {
                                intl: t,
                                state: n
                            } = e;
                            return "loading" === n ? t.formatMessage({
                                id: "AgentInferenceStepRenderer.exitSetupMode.loading",
                                defaultMessage: "Exiting setup mode"
                            }) : "reverted" === n ? t.formatMessage({
                                id: "AgentInferenceStepRenderer.exitSetupMode.reverted",
                                defaultMessage: "Setup mode exit reverted"
                            }) : t.formatMessage({
                                id: "AgentInferenceStepRenderer.exitSetupMode.done",
                                defaultMessage: "Setup complete"
                            })
                        }({
                            intl: e,
                            state: t
                        });
                        else if ("edit-json" === o) throw Error("edit-json tool should not be used in the UI");
                        else if ("create-agent" === o || "create-agent-v2" === o) switch (t) {
                            case "loading":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createAgent.loading",
                                    defaultMessage: "Creating agent"
                                });
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createAgent.undone",
                                    defaultMessage: "Create agent"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.createAgent.done",
                                    defaultMessage: "Created agent"
                                })
                        } else if ("update-agent" === o || "update-agent-v2" === o) switch (t) {
                            case "loading":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updateAgent.loading",
                                    defaultMessage: "Updating agent"
                                });
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updateAgent.undone",
                                    defaultMessage: "Update agent"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.updateAgent.done",
                                    defaultMessage: "Updated agent"
                                })
                        } else if ("delete-agent" === o) switch (t) {
                            case "loading":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.deleteAgent.loading",
                                    defaultMessage: "Deleting agent"
                                });
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.deleteAgent.undone",
                                    defaultMessage: "Delete agent"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.deleteAgent.done",
                                    defaultMessage: "Deleted agent"
                                })
                        } else if ("query-salesforce-tool" === o) {
                            if (i && (0, a().gY)(i, "query-salesforce-tool") && (null == i || null == (y = i.result) ? void 0 : y.mode) === "runQuery" && i.result.query) return i.result.query;
                            switch (t) {
                                case "loading":
                                case "reverted":
                                    return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.search.loading.withQuery",
                                        defaultMessage: "Searching"
                                    });
                                case "done":
                                    return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.search.done",
                                        defaultMessage: "Searched"
                                    })
                            }
                        } else if ("view-channel" === o || "view-slack-channel" === o) switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.view.channel.loading",
                                    defaultMessage: "Viewing channel"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.view.channel.done",
                                    defaultMessage: "Viewed channel"
                                })
                        } else if ("view-code-repo" === o) switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.view.codeRepo.loading",
                                    defaultMessage: "Viewing code repo"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.view.codeRepo.done",
                                    defaultMessage: "Viewed code repo"
                                })
                        } else if ("summarize-meeting-note" === o) switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.summarizeMeetingNote.loading",
                                    defaultMessage: "Summarizing meeting notes"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.summarizeMeetingNote.done",
                                    defaultMessage: "Summarized meeting notes"
                                })
                        } else if ("query-agent-threads" === o) switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.queryAgentThreads.loading",
                                    defaultMessage: "Querying agent chats"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.queryAgentThreads.done",
                                    defaultMessage: "Queried agent chats"
                                })
                        } else if ("investigate-agent-thread" === o) switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.investigateAgentThread.loading",
                                    defaultMessage: "Investigating agent chat"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.investigateAgentThread.done",
                                    defaultMessage: "Investigated agent chat"
                                })
                        } else if ("run-agent" === o) {
                            let r = function(e) {
                                var t, r, o, i, s, l;
                                let d;
                                if (!e || !(0, a().gY)(e, "run-agent") || !(!(d = null == (s = (i = e).result) ? void 0 : s.workflowId) || d === n(180139).Lj || (0, H().SZ)(null == (l = i.input) ? void 0 : l.agentUrl))) return;
                                let c = null == (t = e.input) ? void 0 : t.taskDescription;
                                if (!c) return;
                                let u = null == (r = c.progressive) ? void 0 : r.trim(),
                                    p = null == (o = c.past) ? void 0 : o.trim();
                                if (u && p) return {
                                    progressive: u,
                                    past: p
                                }
                            }(i);
                            if (r) return "done" === t ? r.past : r.progressive;
                            switch (t) {
                                case "loading":
                                case "reverted":
                                    return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.runAgent.loading",
                                        defaultMessage: "Running myself"
                                    });
                                case "done":
                                    return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.runAgent.done",
                                        defaultMessage: "Ran myself"
                                    })
                            }
                        } else if ("runScript" === o) switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.script.loading",
                                    defaultMessage: "Running script"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.script.done",
                                    defaultMessage: "Ran script"
                                })
                        } else if ("wait" === o || "callFunction" === o && (0, n(645604).JN)(i)) {
                            let n = e.formatMessage({
                                id: "AgentInferenceStepRenderer.wait.loading",
                                defaultMessage: "Waiting"
                            });
                            if (c) return n;
                            switch (t) {
                                case "loading":
                                case "reverted":
                                    return n;
                                case "done":
                                    return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.wait.done",
                                        defaultMessage: "Waited"
                                    })
                            }
                        } else if ("update-todos" === o) return "Update to-dos";
                        else if ("markSessionFailed" === o) return "Mark session failed";
                        else if ("callFunction" === o) {
                            let r = i && (0, a().gY)(i, "callFunction") ? null == (v = i.result) ? void 0 : v.headerLabel : void 0;
                            if (r) {
                                let e = (0, n(247438).q4_)(r).replaceAll(n(247438).Sj, "").trim();
                                if (e.length > 0) return e
                            }
                            if ("loading" === t) return "";
                            let o = (0, n(885175).c3)(i);
                            if (o) {
                                let {
                                    serverName: t,
                                    mcpToolName: n
                                } = o;
                                if (t && n) return `${t} / ${n}`;
                                if (n) return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.mcpServer.runTool.doneWithTitle",
                                    defaultMessage: "Ran MCP server tool – {title}"
                                }, {
                                    title: n
                                });
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.mcpServer.runTool.done",
                                    defaultMessage: "Ran tool with MCP server"
                                })
                            }
                            let s = i && (0, a().gY)(i, "callFunction") ? null == (x = i.input) ? void 0 : x.function : void 0;
                            if ("string" == typeof s && /^connections\.mcpServer(\d*|_[a-zA-Z][a-zA-Z0-9_]*)\.listTools$/.test(s)) return e.formatMessage({
                                id: "AgentInferenceStepRenderer.mcpServer.listTools.done",
                                defaultMessage: "Listed MCP server tools"
                            });
                            return "Called function"
                        } else if ("generate-image" === o || "images.generate" === o) switch (t) {
                            case "loading":
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.generateImage.loading",
                                    defaultMessage: "Generating image"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.generateImage.done",
                                    defaultMessage: "Generated image"
                                })
                        } else if ("escalate" === o) switch (t) {
                                case "loading":
                                case "reverted":
                                    return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.escalate.loading",
                                        defaultMessage: "Switching to full chat for a better answer…"
                                    });
                                case "done":
                                    return e.formatMessage({
                                        id: "AgentInferenceStepRenderer.escalate.done",
                                        defaultMessage: "Switched to full chat for a better answer…"
                                    })
                            } else if ("status" === o) return function(e) {
                                let {
                                    toolResultStep: t,
                                    toolUse: r
                                } = e;
                                if (t && (0, a().gY)(t, "status")) {
                                    var o, i;
                                    return (null == (o = t.result) ? void 0 : o.message) ? ? (null == (i = t.input) ? void 0 : i.message)
                                }
                                if ((null == r ? void 0 : r.name) === "status") try {
                                    let e = JSON.parse(r.content),
                                        t = (0, n(358519).jA)(Z, e);
                                    if (n(300441).Q.isFail(t) || !t.value) throw SyntaxError();
                                    return t.value.message
                                } catch (e) {
                                    if (e instanceof SyntaxError) return `Invalid status: ${r.content}`;
                                    throw e
                                }
                            }({
                                toolResultStep: i,
                                toolUse: s
                            }) ? ? "";
                            else if ("ask-survey" === o) return "";
                        else if ("generate-plan" === o) switch (t) {
                            case "loading":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.generatePlan.loading",
                                    defaultMessage: "Creating plan"
                                });
                            case "done":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.generatePlan.done",
                                    defaultMessage: "Plan ready"
                                });
                            case "reverted":
                                return e.formatMessage({
                                    id: "AgentInferenceStepRenderer.generatePlan.reverted",
                                    defaultMessage: "Plan page"
                                })
                        } else(0, n(722371).HB)(o)
                }
            }
            let en = {
                textTransform: "lowercase"
            };

            function er({
                toolName: e,
                variant: t = "default",
                toolResultStep: r
            }) {
                let a = (0, n(109939).tz)(),
                    {
                        bodyStyleKey: o
                    } = (0, n(765846).yq)();
                return (0, u.jsx)(n(75224).N, {
                    icon: n(966559).exclamationMarkCircleSmallIcon,
                    variant: t,
                    title: (0, u.jsx)(n(111010).D, {
                        styleKey: o,
                        colorVariant: "secondary",
                        children: (0, u.jsx)(n(109939).sA, {
                            id: "AgentToolError.message",
                            defaultMessage: "Oops! Something went wrong while {toolName}",
                            values: {
                                toolName: (0, u.jsx)("span", {
                                    style: en,
                                    children: et({
                                        toolName: e,
                                        state: "loading",
                                        numResults: 1,
                                        intl: a,
                                        includeToolNoun: !0,
                                        toolResultStep: r
                                    })
                                })
                            }
                        })
                    })
                })
            }
            async function ea(e) {
                let {
                    command: t
                } = e, r = new(n(390621)).HJ, a = n(390621).pu.newBuilder().with(r).withSimpleDeterministicIDs().buildEvaluator({
                    namespace: "router"
                }), {
                    observations: o
                } = await a.commitStep({
                    id: 0,
                    type: "assistant",
                    value: t
                }), i = o.find(n(325637).XO);
                if (i) return {
                    error: (0, n(325637).aR)(i)
                };
                let s = (0, n(655404).iL)(r.executableOperations);
                return 1 === s.length && "updatedPage" === s[0].type && s[0].didCreatePage ? {
                    value: {
                        pagePointer: {
                            id: s[0].pageId,
                            table: n(682956).ev
                        },
                        recordMap: r.recordMap
                    }
                } : {
                    error: Error("Unexpected operation group: expected 1 create page group")
                }
            }
            async function eo(e) {
                let t = await ea(e);
                if (n(300441).Q.isFail(t)) return t;
                let {
                    node: r
                } = await (0, n(530096).Rz)({
                    pointer: { ...t.value.pagePointer,
                        spaceId: "fake"
                    },
                    loadRecordModel: n(993189).h0Y.fromRecordMap(t.value.recordMap),
                    intl: (0, n(599412)._z)(),
                    currentTimeZone: (0, n(714350).P)()
                }), a = new(n(683053)).tD().mapNodeKeyToCounter(r);
                return {
                    value: (0, n(710559).sD)({
                        node: a,
                        selection: void 0,
                        namespace: "end_to_end"
                    })
                }
            }

            function ei(e) {
                return n(92513).JW()
            }

            function es(e) {
                let t = e.defaultExpanded ? ? !0,
                    r = (0, n(236242).BD)(e.xml).map(e => "element" === e.type ? e : {
                        type: "element",
                        tagName: "_",
                        attributes: {},
                        children: [e]
                    });
                return (0, u.jsx)(u.Fragment, {
                    children: r.map((e, n) => (0, u.jsx)(eu, {
                        node: e,
                        defaultExpanded: t
                    }, n))
                })
            }

            function el(e) {
                return `<create-page>
<property-title name="Title">Debug page</property-title>
${e}</create-page>`
            }
            n(908872), n(811558);
            let ed = {
                    "create-page": e => e,
                    replace: el,
                    "insert-before": el,
                    "insert-after": el,
                    chat: el
                },
                ec = {
                    node: {},
                    light: {
                        color: n(632079).Tj.text.tertiary
                    },
                    medium: {
                        color: n(632079).Tj.text.secondary,
                        fontWeight: n(699422).Wy.medium
                    },
                    arrow: {
                        color: n(632079).Tj.text.accentPrimary,
                        fontWeight: n(699422).Wy.semibold,
                        marginInlineEnd: 4,
                        cursor: "pointer"
                    },
                    children: {
                        marginInlineStart: 2,
                        paddingInlineStart: 10,
                        borderInlineStart: "1px solid rgba(55, 53, 47, 0.2)"
                    },
                    iconButton: {
                        marginInlineStart: 4,
                        position: "relative",
                        top: 1
                    },
                    iconButtonIcon: {
                        width: n(104509).Ev.sm,
                        height: n(104509).Ev.sm
                    },
                    style0: {
                        whiteSpace: "pre-wrap"
                    }
                };

            function eu(e) {
                let {
                    node: t,
                    defaultExpanded: a
                } = e, o = (0, n(960253).e)(), i = (0, n(960253).I)(() => ({
                    error: {
                        color: "light" === o ? n(632079).Tj.palette.red[500] : n(632079).Tj.palette.red[800]
                    }
                }), [o]), [s, l] = (0, r.useState)(a), [d, c] = (0, r.useState)(!1), p = (0, r.useMemo)(() => {
                    if (1 !== t.children.length || "text" !== t.children[0].type) return;
                    let e = ed[t.tagName];
                    if (e) return e(t.children[0].value)
                }, [t]), g = (0, n(109939).tz)().formatMessage({
                    id: "prettyXML.convertMarkdownButton",
                    defaultMessage: "Toggle convert Markdown to XML"
                }), f = p && s ? (0, u.jsx)(n(51831).m, {
                    content: () => g,
                    children: e => (0, u.jsx)(n(374533).A, {
                        style: ec.iconButton,
                        iconStyle: ec.iconButtonIcon,
                        onClick: () => c(!d),
                        ...e,
                        icon: n(438166).s,
                        ariaLabel: g
                    })
                }) : null, [m] = (0, n(97668).Yb)(async () => {
                    if (!d || !p) return t.children; {
                        let e = await eo({
                            command: p
                        });
                        if (n(300441).Q.isFail(e)) throw e;
                        return (0, n(236242).BD)(e.value)
                    }
                }, [p, d, t]), h = "resolved" === m.status && m.value.length > 0;
                return (0, u.jsxs)("div", {
                    style: ec.node,
                    children: [h ? (0, u.jsx)("span", {
                        style: ec.arrow,
                        onClick: () => l(e => !e),
                        children: s ? "↓" : "→"
                    }) : void 0, (0, u.jsx)("span", {
                        style: ec.light,
                        children: "<"
                    }), (0, u.jsx)("span", {
                        style: ec.medium,
                        children: t.tagName
                    }), t.attributes ? Object.entries(t.attributes).map(([e, t]) => (0, u.jsxs)(r.Fragment, {
                        children: [(0, u.jsx)("span", {
                            style: ec.light,
                            children: ` ${e}="`
                        }), (0, u.jsx)("span", {
                            style: ec.medium,
                            children: t
                        }), (0, u.jsx)("span", {
                            style: ec.light,
                            children: '"'
                        })]
                    }, e)) : void 0, (0, u.jsx)("span", {
                        style: ec.light,
                        children: h ? ">" : "/>"
                    }), f, "rejected" === m.status ? (0, u.jsx)("div", {
                        style: { ...ec.children,
                            ...i.error
                        },
                        children: `Error: ${m.error.message}`
                    }) : void 0, "resolved" === m.status && m.value.length > 0 && s ? (0, u.jsx)("div", {
                        style: ec.children,
                        children: m.value.map(e => {
                            let t = ei(e);
                            return "text" === e.type ? (0, u.jsx)("span", {
                                style: ec.style0,
                                children: e.value
                            }, t) : n(418672)._S[e.tagName] ? (0, u.jsx)(eg, {
                                node: e
                            }, t) : (0, u.jsx)(eu, {
                                node: e,
                                defaultExpanded: a
                            }, t)
                        })
                    }) : void 0, h ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("span", {
                            style: ec.light,
                            children: "</"
                        }), (0, u.jsx)("span", {
                            style: ec.medium,
                            children: t.tagName
                        }), (0, u.jsx)("span", {
                            style: ec.light,
                            children: ">"
                        })]
                    }) : void 0]
                })
            }
            let ep = {
                light: {
                    color: n(632079).Tj.text.tertiary
                },
                medium: {
                    color: n(632079).Tj.text.secondary,
                    fontWeight: n(699422).Wy.medium
                }
            };

            function eg(e) {
                let {
                    node: t
                } = e, n = t.children && t.children.length > 0;
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)("span", {
                        style: ep.light,
                        children: "<"
                    }), (0, u.jsx)("span", {
                        style: ep.medium,
                        children: t.tagName
                    }), t.attributes ? Object.entries(t.attributes).map(([e, t]) => (0, u.jsxs)(r.Fragment, {
                        children: [(0, u.jsx)("span", {
                            style: ep.light,
                            children: ` ${e}="`
                        }), (0, u.jsx)("span", {
                            style: ep.medium,
                            children: t
                        }), (0, u.jsx)("span", {
                            style: ep.light,
                            children: '"'
                        })]
                    }, e)) : void 0, (0, u.jsx)("span", {
                        style: ep.light,
                        children: n ? ">" : "/>"
                    }), t.children && t.children.length > 0 ? t.children.map(e => {
                        let t = ei(e);
                        return "text" === e.type ? (0, u.jsx)("span", {
                            children: `${e.value}`
                        }, t) : (0, u.jsx)(eg, {
                            node: e
                        }, t)
                    }) : void 0, n ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("span", {
                            style: ep.light,
                            children: "</"
                        }), (0, u.jsx)("span", {
                            style: ep.medium,
                            children: t.tagName
                        }), (0, u.jsx)("span", {
                            style: ep.light,
                            children: ">"
                        })]
                    }) : void 0]
                })
            }
            let ef = n(969475).object({
                    required: {
                        id: n(969475).number(),
                        type: n(969475).literals("context", "human", "assistant", "observation", "instructions")
                    },
                    optional: {}
                }),
                em = n(969475).object({
                    required: {
                        inferenceId: n(969475).string(),
                        type: n(969475).literals(...n(478e3).jC)
                    },
                    optional: {}
                }),
                eh = {
                    style0: {
                        position: "relative",
                        width: "100%"
                    },
                    style1: {
                        cursor: "pointer",
                        textDecoration: "underline"
                    },
                    style2: {
                        color: n(632079).Tj.text.secondary
                    },
                    style3: {
                        color: n(632079).Tj.text.tertiary,
                        display: "inline"
                    },
                    style4: {
                        cursor: "pointer"
                    }
                };

            function ey(e) {
                let {
                    data: t,
                    wordsToHighlight: a,
                    shouldExpandNode: o,
                    collectionLimit: i,
                    onNodeClick: s
                } = e, l = (0, r.useMemo)(() => ({
                    scheme: "scheme",
                    author: "author",
                    base00: "unset",
                    base01: n(632079).Tj.text.tertiary,
                    base02: n(632079).Tj.text.secondary,
                    base03: n(632079).Tj.text.secondary,
                    base04: n(632079).Tj.text.secondary,
                    base05: n(632079).Tj.text.primary,
                    base06: n(632079).Tj.text.primary,
                    base07: n(632079).Tj.text.primary,
                    base08: n(632079).Tj.text.secondary,
                    base09: n(632079).Tj.blue.text.accentPrimary,
                    base0A: n(632079).Tj.text.tertiary,
                    base0B: n(632079).Tj.green.text.accentPrimary,
                    base0C: n(632079).Tj.text.secondary,
                    base0D: n(632079).Tj.text.secondary,
                    base0E: n(632079).Tj.purple.text.accentPrimary,
                    base0F: n(632079).Tj.text.tertiary
                }), []);
                return (0, u.jsx)("div", {
                    style: eh.style0,
                    children: (0, u.jsx)(n(929151).d, {
                        data: t,
                        invertTheme: !1,
                        collectionLimit: i,
                        theme: {
                            extend: l,
                            tree: {
                                marginTop: 0,
                                marginBottom: 0,
                                marginLeft: 0,
                                paddingTop: 0,
                                userSelect: "auto"
                            }
                        },
                        hideRoot: !0,
                        shouldExpandNode: o,
                        labelRenderer: s ? ([e, ...n]) => {
                            let r = t;
                            for (let t of [...n.reverse(), e].slice(1)) null !== r && "object" == typeof r && t in r && (r = Reflect.get(r, t));
                            return (0, u.jsx)("span", {
                                role: "button",
                                tabIndex: 0,
                                onClick: () => s([e, ...n], r),
                                onKeyDown: t => {
                                    ("Enter" === t.key || " " === t.key) && (t.preventDefault(), s([e, ...n], r))
                                },
                                style: eh.style1,
                                children: e
                            })
                        } : void 0,
                        getItemString: (e, t, r, a, o) => (0, n(358519).Xj)(ef, t) ? (0, u.jsx)(ex, {
                            step: t
                        }) : (0, n(358519).Xj)(em, t) ? (0, u.jsx)(eS, {
                            step: t
                        }) : (0, u.jsxs)("span", {
                            style: eh.style2,
                            children: [r, " ", a]
                        }),
                        valueRenderer: (e, t, ...o) => {
                            let i = () => {
                                if ("string" == typeof t && t.startsWith("<")) return (0, u.jsx)("div", {
                                    children: (0, u.jsx)(es, {
                                        xml: t,
                                        defaultExpanded: t.length < 300
                                    })
                                });
                                if ("string" == typeof t && t.trim().startsWith("Human: <")) return (0, u.jsx)("div", {
                                    style: eh.style3,
                                    children: `[Transcript "${t.trim().slice(0,24)}..."]`
                                });
                                if ("stack" === o[0] && "string" == typeof t) return (0, u.jsx)(u.Fragment, {
                                    children: (0, n(405843).G)(t.split("\n"), () => (0, u.jsx)("br", {}))
                                });
                                if (!a) return (0, u.jsx)("span", {
                                    children: e
                                }); {
                                    var i, s;
                                    let t;
                                    return i = e, s = a, (t = i.split("\n")).map((e, n) => (0, u.jsxs)(r.Fragment, {
                                        children: [e.split(" ").map((e, t) => s.includes(e.toLowerCase()) ? (0, u.jsx)("span", {
                                            style: ev,
                                            children: e
                                        }, t) : (0, u.jsx)("span", {
                                            children: e
                                        }, t)).reduce((e, t) => (0, u.jsx)(u.Fragment, {
                                            children: [e, " ", t]
                                        })), n === t.length - 1 ? null : (0, u.jsx)("br", {})]
                                    }, n))
                                }
                            };
                            return s ? (0, u.jsx)("span", {
                                role: "button",
                                tabIndex: 0,
                                onClick: () => s(o, t),
                                onKeyDown: e => {
                                    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), s(o, t))
                                },
                                style: eh.style4,
                                children: i()
                            }) : i()
                        }
                    })
                })
            }
            let ev = {
                color: "orange"
            };

            function ex(e) {
                let {
                    step: t
                } = e, r = (0, n(960253).I)(() => {
                    let e;
                    return "assistant" === t.type ? e = n(632079).Tj.palette.purple[200] : "context" === t.type ? e = n(632079).Tj.palette.green[200] : "human" === t.type ? e = n(632079).Tj.palette.blue[200] : "observation" === t.type ? e = "error" === t.observationType ? n(632079).Tj.palette.red[200] : n(632079).Tj.palette.brown[200] : "instructions" === t.type ? e = n(632079).Tj.palette.yellow[200] : (0, n(722371).HB)(t), {
                        wrap: {
                            backgroundColor: e,
                            borderRadius: 4,
                            padding: 2
                        }
                    }
                }, [t]), a = `${t.type} step`;
                return "observation" === t.type && (a = `${t.observationType} ${a}`), (0, u.jsx)("span", {
                    style: r.wrap,
                    children: a
                })
            }

            function eS(e) {
                let {
                    step: t
                } = e, r = (0, n(960253).I)(() => {
                    let e = n(632079).Tj.palette.gray[100];
                    return "human" === t.type ? e = n(632079).Tj.palette.blue[200] : "assistantChat" === t.type ? e = n(632079).Tj.palette.purple[200] : "groupedEditCard" === t.type ? e = n(632079).Tj.palette.yellow[200] : "humanAction" === t.type && (e = n(632079).Tj.palette.green[200]), {
                        wrap: {
                            backgroundColor: e,
                            borderRadius: 4,
                            padding: 2
                        }
                    }
                }, [t]), a = `${t.type} ClientStep`;
                return (0, u.jsx)("span", {
                    style: r.wrap,
                    children: a
                })
            }
            let eb = n(969475).union([n(969475).object({
                required: {
                    data: n(969475).string(),
                    mimeType: n(969475).string(),
                    type: n(969475).literal("audio")
                },
                optional: {}
            }), n(969475).object({
                required: {
                    data: n(969475).string(),
                    mimeType: n(969475).string(),
                    type: n(969475).literal("image")
                },
                optional: {}
            }), n(969475).object({
                required: {
                    resource: n(969475).object({
                        required: {
                            uri: n(969475).string()
                        },
                        optional: {
                            blob: n(969475).string(),
                            mimeType: n(969475).string(),
                            text: n(969475).string()
                        }
                    }),
                    type: n(969475).literal("resource")
                },
                optional: {}
            }), n(969475).object({
                required: {
                    text: n(969475).string(),
                    type: n(969475).literal("text")
                },
                optional: {}
            }), n(969475).object({
                required: {
                    type: n(969475).literal("resource_link"),
                    uri: n(969475).string()
                },
                optional: {
                    description: n(969475).string(),
                    mimeType: n(969475).string(),
                    name: n(969475).string()
                }
            })]);

            function ej(e) {
                return (0, n(358519).Qq)(eb, e)
            }
            let ew = (0, n(109939).YK)({
                    imageLoadError: {
                        id: "mcpContent.imageLoadError",
                        defaultMessage: "Unable to load image"
                    },
                    audioLoadError: {
                        id: "mcpContent.audioLoadError",
                        defaultMessage: "Unable to load audio"
                    },
                    binaryData: {
                        id: "mcpContent.binaryData",
                        defaultMessage: "Binary data ({size} bytes)"
                    },
                    showLess: {
                        id: "mcpContent.showLess",
                        defaultMessage: "Show less"
                    },
                    showAll: {
                        id: "mcpContent.showAll",
                        defaultMessage: "Show all data"
                    }
                }),
                eI = {
                    maxWidth: 400
                },
                eC = {
                    width: "100%",
                    height: 40,
                    borderRadius: 8
                };

            function eM(e) {
                let {
                    content: t
                } = e, [a, o] = (0, r.useState)(!1), i = `data:${t.mimeType};base64,${t.data}`;
                return a ? (0, u.jsx)(n(577497).Zp, {
                    padding: "sm",
                    colorVariant: "secondary",
                    children: (0, u.jsx)(n(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "tertiary",
                        children: (0, u.jsx)(n(109939).sA, { ...ew.audioLoadError
                        })
                    })
                }) : (0, u.jsx)("div", {
                    style: eI,
                    children: (0, u.jsx)("audio", {
                        controls: !0,
                        preload: "none",
                        src: i,
                        style: eC,
                        onError: () => o(!0)
                    })
                })
            }
            let ek = {
                    maxWidth: 400,
                    overflow: "hidden"
                },
                eT = {
                    display: "block",
                    width: "100%",
                    cursor: "zoom-in"
                };

            function eA(e) {
                let {
                    content: t
                } = e, a = (0, n(533992).v3)(), o = (0, r.useRef)(null), [i, s] = (0, r.useState)(!1), l = `data:${t.mimeType};base64,${t.data}`, d = (0, r.useCallback)(() => {
                    var e;
                    let t = null == (e = o.current) ? void 0 : e.getImageDimensions();
                    t && n(515260).o9({
                        environment: a,
                        renderFullScreenNode: () => (0, u.jsx)(n(408873).F, {
                            url: l,
                            error: void 0,
                            imageNaturalHeight: t.naturalHeight,
                            imageNaturalWidth: t.naturalWidth
                        }),
                        fullScreenNodeRect: t.clientRect,
                        contentAspectRatio: t.naturalWidth / Math.max(t.naturalHeight, 1)
                    })
                }, [a, l]);
                return i ? (0, u.jsx)(n(577497).Zp, {
                    padding: "sm",
                    colorVariant: "secondary",
                    children: (0, u.jsx)(n(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "tertiary",
                        children: (0, u.jsx)(n(109939).sA, { ...ew.imageLoadError
                        })
                    })
                }) : (0, u.jsx)("div", {
                    style: ek,
                    children: (0, u.jsx)(n(577497).Zp, {
                        borderVariant: "secondary",
                        borderRadius: "sm",
                        children: (0, u.jsx)(n(989059).A, {
                            src: l,
                            ref: o,
                            onClick: d,
                            style: eT,
                            placeholderStyle: eT,
                            alt: "MCP tool result image",
                            onError: () => s(!0)
                        })
                    })
                })
            }
            let eR = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.37 2.12 9.25 11.75",
                    svg: (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("path", {
                            d: "M5.75 4.175a.575.575 0 1 0 0 1.15h4.5a.575.575 0 1 0 0-1.15zm0 2a.575.575 0 1 0 0 1.15h4.5a.575.575 0 1 0 0-1.15zm0 2a.575.575 0 1 0 0 1.15H8a.575.575 0 0 0 0-1.15z"
                        }), (0, u.jsx)("path", {
                            d: "M5.25 2.125c-1.036 0-1.875.84-1.875 1.875v8c0 1.036.84 1.875 1.875 1.875h5.5c1.036 0 1.875-.84 1.875-1.875V4c0-1.036-.84-1.875-1.875-1.875zM4.625 4c0-.345.28-.625.625-.625h5.5c.345 0 .625.28.625.625v8c0 .345-.28.625-.625.625h-5.5A.625.625 0 0 1 4.625 12z"
                        })]
                    })
                },
                eD = (0, n(104509).wt)("docPlainTextSmall", eR, "small"),
                eP = {
                    marginTop: 8
                },
                eF = {
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word"
                };

            function eE(e) {
                let {
                    content: t,
                    showFullData: r,
                    onShowFullData: a
                } = e, o = t.text;
                try {
                    o = JSON.parse(t.text)
                } catch {}
                if ("string" == typeof o) {
                    if (o.trimStart().startsWith("<")) try {
                        if ((0, n(236242).BD)(o).some(e => "element" === e.type)) return (0, u.jsx)(es, {
                            xml: o,
                            defaultExpanded: !0
                        })
                    } catch {}
                    return (0, u.jsx)(n(111010).D, {
                        as: "div",
                        styleKey: "bodyRegular",
                        colorVariant: "primary",
                        style: eF,
                        children: o
                    })
                }
                let i = "object" == typeof o && null !== o && (Array.isArray(o) ? o.length > 100 : Object.keys(o).length > 100);
                return (0, u.jsxs)("div", {
                    children: [(0, u.jsx)(ey, {
                        data: o,
                        shouldExpandNode: (e, t, n) => n < 3,
                        collectionLimit: r || !i ? void 0 : 100
                    }), i && a ? (0, u.jsx)(n(265779).E, {
                        size: "xs",
                        onClick: () => a(!r),
                        style: eP,
                        children: (0, u.jsx)(n(109939).sA, { ...r ? ew.showLess : ew.showAll
                        })
                    }) : null]
                })
            }
            let eN = {
                resourceHeader: {
                    padding: "8px 12px",
                    backgroundColor: n(632079).Tj.background.secondary
                },
                resourceUri: {
                    flex: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                resourceContent: {
                    padding: 12
                }
            };

            function eU(e) {
                let {
                    content: t,
                    showFullData: r,
                    onShowFullData: a
                } = e, {
                    resource: o
                } = t, i = void 0 !== o.text, s = void 0 !== o.blob, l = {
                    type: "text",
                    text: o.text ? ? ""
                };
                return (0, u.jsx)(n(577497).Zp, {
                    borderVariant: "secondary",
                    borderRadius: "sm",
                    children: (0, u.jsxs)(n(4458).VP, {
                        gap: "inherit",
                        children: [(0, u.jsx)("div", {
                            style: eN.resourceHeader,
                            children: (0, u.jsxs)(n(4458).fI, {
                                gap: 8,
                                alignItems: "center",
                                children: [(0, u.jsx)(n(16275).I, {
                                    icon: eD,
                                    size: "sm",
                                    colorVariant: "secondary"
                                }), (0, u.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    style: eN.resourceUri,
                                    children: o.uri
                                }), o.mimeType ? (0, u.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "tertiary",
                                    children: o.mimeType
                                }) : null]
                            })
                        }), i ? (0, u.jsx)("div", {
                            style: eN.resourceContent,
                            children: (0, u.jsx)(eE, {
                                content: l,
                                showFullData: r,
                                onShowFullData: a
                            })
                        }) : s ? (0, u.jsx)("div", {
                            style: eN.resourceContent,
                            children: (0, u.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "tertiary",
                                children: (0, u.jsx)(n(109939).sA, { ...ew.binaryData,
                                    values: {
                                        size: (0, n(379119).pI)(o.blob ? ? "")
                                    }
                                })
                            })
                        }) : null]
                    })
                })
            }
            let eV = {
                resourceLinkInfo: {
                    flex: 1,
                    overflow: "hidden"
                },
                resourceLinkButton: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: 4,
                    backgroundColor: n(632079).Tj.background.secondary,
                    textDecoration: "none"
                }
            };

            function e_(e) {
                let {
                    content: t
                } = e;
                return (0, u.jsx)(n(577497).Zp, {
                    borderVariant: "secondary",
                    borderRadius: "sm",
                    padding: "sm",
                    children: (0, u.jsxs)(n(4458).fI, {
                        gap: 8,
                        alignItems: "flex-start",
                        children: [(0, u.jsx)(n(16275).I, {
                            icon: eD,
                            size: "sm",
                            colorVariant: "secondary"
                        }), (0, u.jsxs)(n(4458).VP, {
                            gap: 2,
                            style: eV.resourceLinkInfo,
                            children: [(0, u.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "primary",
                                children: t.name ? ? t.uri
                            }), t.description ? (0, u.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                children: t.description
                            }) : null, t.mimeType ? (0, u.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "tertiary",
                                children: t.mimeType
                            }) : null]
                        }), (0, u.jsx)(n(68774).N, {
                            href: t.uri,
                            external: !0,
                            style: eV.resourceLinkButton,
                            children: (0, u.jsx)(n(16275).I, {
                                icon: n(759706).arrowDiagonalUpRightSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            })
                        })]
                    })
                })
            }

            function eB(e) {
                let {
                    output: t,
                    showFullData: r = !1,
                    onShowFullData: a
                } = e;
                if (!Array.isArray(t)) return (0, u.jsx)(ey, {
                    data: t
                });
                let o = t.map(e => ej(e)).filter(e => void 0 !== e);
                return 0 === o.length ? (0, u.jsx)(ey, {
                    data: t
                }) : (0, u.jsx)(n(4458).VP, {
                    gap: 12,
                    children: o.map((e, t) => (0, u.jsx)(eL, {
                        item: e,
                        showFullData: r,
                        onShowFullData: a
                    }, `${e.type}-${t}`))
                })
            }

            function eL(e) {
                let {
                    item: t,
                    showFullData: n,
                    onShowFullData: r
                } = e;
                switch (t.type) {
                    case "text":
                        return (0, u.jsx)(eE, {
                            content: t,
                            showFullData: n,
                            onShowFullData: r
                        });
                    case "image":
                        return (0, u.jsx)(eA, {
                            content: t
                        });
                    case "audio":
                        return (0, u.jsx)(eM, {
                            content: t
                        });
                    case "resource":
                        return (0, u.jsx)(eU, {
                            content: t,
                            showFullData: n,
                            onShowFullData: r
                        });
                    case "resource_link":
                        return (0, u.jsx)(e_, {
                            content: t
                        });
                    default:
                        return (0, u.jsx)(ey, {
                            data: t
                        })
                }
            }
            n(823215);
            let eK = ["image", "audio", "resource", "resource_link"],
                eO = (0, n(109939).YK)({
                    inputTab: {
                        id: "mcpTool.inputTab",
                        defaultMessage: "Input"
                    },
                    responseTab: {
                        id: "mcpTool.responseTab",
                        defaultMessage: "Response"
                    },
                    rejectedByUser: {
                        id: "mcpTool.rejectedByUser",
                        defaultMessage: "Rejected by user"
                    },
                    waitingForResponse: {
                        id: "mcpTool.waitingForResponse",
                        defaultMessage: "Waiting for response…"
                    },
                    noResponse: {
                        id: "mcpTool.noResponse",
                        defaultMessage: "No response available"
                    },
                    waitingForConfirmation: {
                        id: "mcpTool.waitingForConfirmation",
                        defaultMessage: "Do you want to continue?"
                    },
                    cancel: {
                        id: "mcpTool.cancel",
                        defaultMessage: "Reject"
                    },
                    continue: {
                        id: "mcpTool.continue",
                        defaultMessage: "Continue"
                    },
                    headerFormat: {
                        id: "mcpTool.headerFormat",
                        defaultMessage: "{serverName}{separator}{toolName}"
                    }
                }),
                ez = {
                    style0: {
                        marginInlineStart: 8
                    },
                    content: {
                        borderRadius: 10,
                        overflow: "hidden",
                        boxShadow: `0 0 0 1px ${n(632079).Tj.border.secondary}, 0px 1px 2px rgba(0, 0, 0, 0.04)`,
                        backgroundColor: n(632079).Tj.background.primary,
                        marginTop: 8
                    },
                    tab: {
                        padding: "4px 12px",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                        color: n(632079).Tj.text.tertiary,
                        fontSize: 13,
                        fontWeight: n(699422).Wy.regular,
                        backgroundColor: "transparent",
                        border: "none",
                        borderRadius: 6,
                        outline: "none"
                    },
                    activeTab: {
                        backgroundColor: n(632079).Tj.background.secondary,
                        color: n(632079).Tj.text.primary
                    },
                    tabContent: {
                        padding: "8px 16px 12px",
                        maxHeight: 400,
                        overflowY: "auto",
                        overflowX: "hidden"
                    },
                    loadingState: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 40,
                        color: n(632079).Tj.text.tertiary
                    },
                    errorState: {
                        padding: 16,
                        backgroundColor: n(632079).Tj.red.background.secondaryTranslucent,
                        borderInlineStart: `3px solid ${n(632079).Tj.red.text.accentPrimary}`
                    },
                    rejectedState: {
                        padding: 16,
                        backgroundColor: n(632079).Tj.background.secondary,
                        borderInlineStart: `3px solid ${n(632079).Tj.text.secondary}`
                    },
                    showAllButton: {
                        marginTop: 8,
                        padding: "4px 8px",
                        fontSize: 13,
                        color: n(632079).Tj.blue.text.accentPrimary,
                        backgroundColor: n(632079).Tj.blue.background.secondaryTranslucent,
                        borderRadius: 4,
                        border: "none",
                        cursor: "pointer"
                    },
                    confirmationFooter: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px",
                        borderTop: `1px solid ${n(632079).Tj.border.secondary}`,
                        backgroundColor: n(632079).Tj.background.primary
                    },
                    twoColumnGrid: {
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        gap: "8px 16px",
                        alignItems: "baseline"
                    },
                    formattedArrayContainer: {
                        paddingInlineStart: 16
                    },
                    formattedArrayItem: {
                        marginBlockEnd: 4
                    },
                    formattedArrayValue: {
                        marginInlineStart: 8
                    },
                    formattedObjectItem: {
                        marginBlockEnd: 8
                    },
                    formattedObjectKey: {
                        fontFamily: "monospace",
                        fontSize: 13
                    },
                    formattedObjectValue: {
                        marginInlineStart: 8,
                        fontFamily: "monospace",
                        fontSize: 13
                    },
                    scrollingSquiggle: {
                        opacity: .3
                    }
                };

            function eW(e) {
                let {
                    serverName: t,
                    toolName: a,
                    input: o,
                    output: i,
                    state: s,
                    error: l,
                    isExpandable: d = !0,
                    onToggle: c,
                    serverIconUrl: p,
                    serverUrl: g,
                    showConfirmation: f = "hide",
                    onConfirm: m,
                    onCancel: h,
                    promptInjectionDetected: y
                } = e, v = "hide" !== f, x = "disabled" === f, S = (0, r.useMemo)(() => !!Array.isArray(i) && i.some(e => {
                    let t = ej(e);
                    return void 0 !== t && (0, n(722371).Xk)(eK, t.type)
                }), [i]), b = "error" === s && void 0 !== l && l !== H().p9, [j, w] = (0, r.useState)(!1), [I, C] = (0, r.useState)("input"), [M, k] = (0, r.useState)(!1), [T, A] = r.useState(!1);
                r.useEffect(() => {
                    (v || S || b) && w(!0)
                }, [v, S, b]), r.useEffect(() => {
                    (S || b) && C("response")
                }, [S, b]), r.useEffect(() => {
                    v || A(!1)
                }, [v]);
                let R = void 0 !== i || void 0 !== l,
                    D = !(null == o || (Array.isArray(o) ? 0 === o.length : "object" == typeof o && 0 === Object.keys(o).length)),
                    P = D || R;
                r.useEffect(() => {
                    "input" === I && !D && R ? C("response") : "response" === I && !R && D && C("input")
                }, [I, D, R]);
                let F = "error" === s && l === H().p9,
                    E = d && !v && P;
                r.useEffect(() => {
                    !j || E || v || w(!1)
                }, [j, E, v]);
                let N = function(e) {
                        let {
                            isExpandable: t,
                            isExpanded: r
                        } = e, {
                            bodyStyleKey: a
                        } = (0, n(765846).yq)(), o = (0, n(765846).Cd)(a);
                        return (0, n(960253).I)(() => ({
                            header: {
                                display: "flex",
                                alignItems: "center",
                                paddingTop: 4,
                                paddingInlineEnd: 0,
                                paddingBottom: 4,
                                paddingInlineStart: 4,
                                cursor: t ? "pointer" : "default",
                                backgroundColor: "transparent",
                                gap: 8,
                                userSelect: "none"
                            },
                            chevron: {
                                transform: r ? "rotate(90deg)" : void 0,
                                transition: "transform 0.2s ease"
                            },
                            parameterName: {
                                color: n(632079).Tj.text.secondary,
                                ...o,
                                textAlign: "end"
                            },
                            parameterValue: {
                                color: n(632079).Tj.text.primary,
                                ...o,
                                fontFamily: "monospace",
                                wordBreak: "break-word"
                            }
                        }), [t, r, o])
                    }({
                        isExpandable: E,
                        isExpanded: j
                    }),
                    U = (0, r.useCallback)(() => {
                        A(!0), null == m || m()
                    }, [m]),
                    V = (0, r.useCallback)(() => {
                        if (E) {
                            let e = !j;
                            w(e), null == c || c(e)
                        }
                    }, [j, E, c]),
                    _ = (0, r.useCallback)(e => {
                        C(e)
                    }, []),
                    B = (0, r.useMemo)(() => {
                        switch (s) {
                            case "calling":
                            case "called":
                            default:
                                return null;
                            case "error":
                                return F ? {
                                    icon: n(25094).xMarkSmallIcon,
                                    color: n(632079).Tj.text.secondary
                                } : {
                                    icon: n(789777).exclamationMarkTriangleFillIcon,
                                    color: n(632079).Tj.red.text.accentPrimary
                                };
                            case "waiting_approval":
                                return {
                                    icon: n(772683).clockIcon,
                                    color: n(632079).Tj.yellow.text.accentPrimary
                                }
                        }
                    }, [s, F]),
                    L = (0, r.useCallback)(e => {
                        e.stopPropagation()
                    }, []);
                return (0, u.jsxs)("div", {
                    children: [(0, u.jsxs)("div", {
                        style: N.header,
                        onClick: V,
                        role: "button",
                        tabIndex: E ? 0 : void 0,
                        "aria-expanded": j,
                        onKeyDown: e => {
                            E && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), V())
                        },
                        children: [(0, u.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            flex: 1,
                            gap: 8,
                            minWidth: 0,
                            children: [(0, u.jsx)(n(905335).X, {
                                iconUrl: p,
                                serverUrl: g,
                                serverName: t,
                                size: 16
                            }), (0, u.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                minWidth: 0,
                                flexShrink: 1,
                                children: [(0, u.jsx)(n(109939).sA, { ...eO.headerFormat,
                                    values: {
                                        serverName: (0, u.jsx)(n(111010).D, {
                                            as: "span",
                                            styleKey: "bodyRegular",
                                            colorVariant: "secondary",
                                            children: t
                                        }),
                                        separator: (0, u.jsx)(n(111010).D, {
                                            as: "span",
                                            styleKey: "bodyRegular",
                                            colorVariant: "tertiary",
                                            children: " / "
                                        }),
                                        toolName: (0, u.jsx)(n(111010).D, {
                                            as: "span",
                                            styleKey: "bodyMedium",
                                            colorVariant: "primary",
                                            children: a
                                        })
                                    }
                                }), E ? (0, u.jsx)(n(16275).I, {
                                    icon: n(491469).arrowChevronSingleRightSmallIcon,
                                    size: "sm",
                                    colorVariant: "secondary",
                                    style: N.chevron
                                }) : void 0]
                            }), y ? (0, u.jsx)(n(856102).R, {}) : void 0]
                        }), (0, u.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            children: ["calling" === s ? (0, u.jsx)(n(265035).ScrollingSquiggle, {
                                style: ez.scrollingSquiggle
                            }) : void 0, B && j && !(v && !T) ? B.icon({
                                width: 16,
                                height: 16,
                                fill: B.color
                            }) : void 0]
                        })]
                    }), j ? (0, u.jsxs)("div", {
                        style: ez.content,
                        children: [P ? (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsxs)(n(4458).fI, {
                                gap: 8,
                                marginTop: 12,
                                marginBottom: 8,
                                marginInlineStart: 12,
                                role: "tablist",
                                children: [D ? (0, u.jsx)("button", {
                                    role: "tab",
                                    "aria-selected": "input" === I,
                                    "aria-controls": "mcp-tab-input",
                                    style: { ...ez.tab,
                                        ..."input" === I ? ez.activeTab : {}
                                    },
                                    onClick: () => _("input"),
                                    children: (0, u.jsx)(n(109939).sA, { ...eO.inputTab
                                    })
                                }) : void 0, R ? (0, u.jsx)("button", {
                                    role: "tab",
                                    "aria-selected": "response" === I,
                                    "aria-controls": "mcp-tab-response",
                                    style: { ...ez.tab,
                                        ..."response" === I ? ez.activeTab : {}
                                    },
                                    onClick: () => _("response"),
                                    children: (0, u.jsx)(n(109939).sA, { ...eO.responseTab
                                    })
                                }) : void 0]
                            }), (0, u.jsxs)("div", {
                                style: ez.tabContent,
                                onCopyCapture: L,
                                children: [D && "input" === I ? (0, u.jsx)("div", {
                                    id: "mcp-tab-input",
                                    role: "tabpanel",
                                    "aria-labelledby": "mcp-input-tab",
                                    children: function(e) {
                                        let {
                                            data: t,
                                            styles: a
                                        } = e;
                                        if (!(!("object" != typeof t || null === t || Array.isArray(t)) && Object.values(t).every(e => "string" == typeof e || "number" == typeof e || "boolean" == typeof e || null == e))) return function e(t) {
                                            let {
                                                data: r,
                                                styles: a
                                            } = t;
                                            if (null == r) return (0, u.jsx)(n(111010).D, {
                                                as: "span",
                                                colorVariant: "tertiary",
                                                children: "null"
                                            });
                                            if ("string" == typeof r || "number" == typeof r || "boolean" == typeof r) return (0, u.jsx)(n(111010).D, {
                                                as: "span",
                                                colorVariant: "primary",
                                                children: String(r)
                                            });
                                            if (Array.isArray(r)) return (0, u.jsx)("div", {
                                                style: ez.formattedArrayContainer,
                                                children: r.map((t, r) => (0, u.jsxs)("div", {
                                                    style: ez.formattedArrayItem,
                                                    children: [(0, u.jsx)(n(111010).D, {
                                                        as: "span",
                                                        colorVariant: "tertiary",
                                                        children: `[${r}]`
                                                    }), (0, u.jsx)("span", {
                                                        style: ez.formattedArrayValue,
                                                        children: e({
                                                            data: t,
                                                            styles: a
                                                        })
                                                    })]
                                                }, r))
                                            });
                                            if ("object" == typeof r) {
                                                let t = Object.entries(r);
                                                return (0, u.jsx)("div", {
                                                    children: t.map(([t, r]) => (0, u.jsxs)("div", {
                                                        style: ez.formattedObjectItem,
                                                        children: [(0, u.jsx)(n(111010).D, {
                                                            as: "span",
                                                            colorVariant: "secondary",
                                                            style: ez.formattedObjectKey,
                                                            children: `${t}:`
                                                        }), (0, u.jsx)(n(111010).D, {
                                                            as: "span",
                                                            colorVariant: "primary",
                                                            style: ez.formattedObjectValue,
                                                            children: e({
                                                                data: r,
                                                                styles: a
                                                            })
                                                        })]
                                                    }, t))
                                                })
                                            }
                                            return (0, u.jsx)(ey, {
                                                data: r
                                            })
                                        }({
                                            data: t,
                                            styles: a
                                        });
                                        let o = Object.entries(t);
                                        return (0, u.jsx)("div", {
                                            style: ez.twoColumnGrid,
                                            children: o.map(([e, t]) => (0, u.jsxs)(r.Fragment, {
                                                children: [(0, u.jsx)("div", {
                                                    style: a.parameterName,
                                                    children: e
                                                }), (0, u.jsx)("div", {
                                                    style: a.parameterValue,
                                                    children: null == t ? "null" : String(t)
                                                })]
                                            }, e))
                                        })
                                    }({
                                        data: o,
                                        styles: { ...N,
                                            ...ez
                                        }
                                    })
                                }) : void 0, R && "response" === I ? (0, u.jsx)("div", {
                                    id: "mcp-tab-response",
                                    role: "tabpanel",
                                    "aria-labelledby": "mcp-response-tab",
                                    children: "error" === s && l ? F ? (0, u.jsx)("div", {
                                        style: ez.rejectedState,
                                        children: (0, u.jsx)(n(111010).D, {
                                            styleKey: "bodyRegular",
                                            colorVariant: "secondary",
                                            children: (0, u.jsx)(n(109939).sA, { ...eO.rejectedByUser
                                            })
                                        })
                                    }) : (0, u.jsx)("div", {
                                        style: ez.errorState,
                                        children: (0, u.jsx)(n(111010).D, {
                                            styleKey: "bodyRegular",
                                            colorPalette: "red",
                                            colorVariant: "accentPrimary",
                                            children: l
                                        })
                                    }) : void 0 !== i ? (0, u.jsx)(eB, {
                                        output: i,
                                        showFullData: M,
                                        onShowFullData: k
                                    }) : "calling" === s ? (0, u.jsxs)("div", {
                                        style: ez.loadingState,
                                        children: [(0, u.jsx)(n(517334).k, {
                                            size: "default"
                                        }), (0, u.jsx)(n(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "tertiary",
                                            style: ez.style0,
                                            children: (0, u.jsx)(n(109939).sA, { ...eO.waitingForResponse
                                            })
                                        })]
                                    }) : (0, u.jsx)("div", {
                                        style: ez.loadingState,
                                        children: (0, u.jsx)(n(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "tertiary",
                                            children: (0, u.jsx)(n(109939).sA, { ...eO.noResponse
                                            })
                                        })
                                    })
                                }) : void 0]
                            })]
                        }) : void 0, v && !T && m && h ? (0, u.jsxs)("div", {
                            style: P ? ez.confirmationFooter : { ...ez.confirmationFooter,
                                borderTop: "none"
                            },
                            children: [(0, u.jsx)(n(861510).N, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                text: (0, u.jsx)(n(109939).sA, { ...eO.waitingForConfirmation
                                }),
                                animate: !0
                            }), (0, u.jsxs)(n(4458).fI, {
                                gap: 8,
                                children: [(0, u.jsx)(n(265779).E, {
                                    onClick: h,
                                    disabled: x,
                                    children: (0, u.jsx)(n(109939).sA, { ...eO.cancel
                                    })
                                }), (0, u.jsx)(n(912946).A, {
                                    colorPalette: "blue",
                                    onClick: U,
                                    disabled: x,
                                    isLoading: x,
                                    children: (0, u.jsx)(n(109939).sA, { ...eO.continue
                                    })
                                })]
                            })]
                        }) : void 0]
                    }) : void 0]
                })
            }
            let e$ = {
                    debugContainer: {
                        background: n(632079).Tj.yellow.background.primary,
                        padding: 8,
                        marginBottom: 8,
                        borderRadius: 4
                    },
                    debugCode: {
                        fontSize: 10
                    }
                },
                eq = r.memo(function(e) {
                    var t, o;
                    let i, s, {
                            mcpToolUsePartData: l,
                            threadStore: c,
                            runningInference: p,
                            aiChatFeatureController: g,
                            turnSteps: f,
                            onExpandedChange: m
                        } = e,
                        h = (0, n(533992).v3)(),
                        {
                            confirmToolUse: y,
                            rejectToolUse: v,
                            showDebug: x
                        } = (0, n(101491).Mp)(),
                        {
                            serverName: S,
                            mcpToolName: b,
                            toolUse: j,
                            toolResultStep: w
                        } = l,
                        I = (null == w ? void 0 : w.toolType) === "callFunction",
                        C = (0, r.useMemo)(() => {
                            let e = {
                                isCalling: !1
                            };
                            if (!j) return e;
                            for (let t of f) "workflow-effect-calling" === t.type ? (e.callingStep = t, e.isCalling = !0) : "workflow-effect-called" === t.type ? (e.calledStep = t, e.isCalling = !1) : "workflow-effect-error" === t.type && (e.errorStep = t, e.isCalling = !1);
                            return e
                        }, [j, f]),
                        M = (0, r.useCallback)(e => {
                            B().trackToggleToolCard({
                                environment: h,
                                stepId: l.step.id,
                                showResults: e,
                                from: "mcp_tool_card",
                                toolCardType: "mcpServer.runTool",
                                workflowId: (0, n(646440).getWorkflowIdFromStore)(c)
                            }), null == m || m(e)
                        }, [h, l.step.id, c, m]),
                        k = w && (0, d().I6)(w),
                        T = p && (!w || !(0, d().nP)(w)) && !k,
                        [A, R] = (0, r.useState)(!1),
                        D = (0, r.useCallback)(() => {
                            null != w && w.id && (R(!0), y([w.id]))
                        }, [y, null == w ? void 0 : w.id]),
                        P = (0, r.useCallback)(() => {
                            null != w && w.id && v([w.id])
                        }, [v, null == w ? void 0 : w.id]);
                    (0, r.useEffect)(() => {
                        k || R(!1)
                    }, [k]);
                    let F = (0, r.useMemo)(() => {
                        var e;
                        if (!w || !(0, a().gY)(w, "mcpServer.runTool")) return [];
                        let t = null == (e = w.result) ? void 0 : e.content;
                        return Array.isArray(t) ? t.map(e => ej(e)).filter(e => void 0 !== e && "text" !== e.type) : []
                    }, [w]);
                    if (!j) return (0, u.jsx)(er, {
                        toolName: "mcpServer.runTool",
                        toolResultStep: w,
                        variant: "agent_mobile" === g.aiChatType ? "large" : "default"
                    });
                    let {
                        callingStep: E,
                        calledStep: N,
                        errorStep: U,
                        isCalling: V
                    } = C, _ = (null == E ? void 0 : E.toolName) || (null == N ? void 0 : N.toolName) || (null == U ? void 0 : U.toolName) || b;
                    (null == w ? void 0 : w.toolType) === "mcpServer.runTool" ? s = null == (t = w.result) ? void 0 : t.content: I && (s = (0, n(645604).M7)(null == w || null == (o = w.result) ? void 0 : o.output));
                    let L = null == w ? void 0 : w.error;
                    U ? (i = "error", L = L || U.error) : V || A || T && !(null != w && w.result) ? i = "calling" : k ? (i = "waiting_approval", null != N && N.output && (s = N.output.content ? ? N.output)) : N ? (i = "called", N.output && (s = N.output.content ? ? N.output)) : i = null != w && w.error ? "error" : "called";
                    let {
                        serverIconUrl: K,
                        serverUrl: O
                    } = (null == w ? void 0 : w.moduleInfo) || {}, z = "hide";
                    "waiting_approval" !== i || A || (z = p ? "disabled" : "show");
                    let W = {
                        runningInference: p,
                        toolRunning: T,
                        isCalling: V,
                        hasUserConfirmed: A,
                        isWaitingForConfirmation: !!k,
                        currentState: i,
                        confirmationState: z,
                        hasCallingStep: !!E,
                        hasCalledStep: !!N,
                        hasErrorStep: !!U,
                        toolResultStepState: null == w ? void 0 : w.state,
                        toolResultStepId: null == w ? void 0 : w.id
                    };
                    return (0, u.jsxs)(n(4458).VP, {
                        gap: 8,
                        children: [!0 === x ? (0, u.jsx)("div", {
                            style: e$.debugContainer,
                            children: (0, u.jsx)(n(140102).O, {
                                value: JSON.stringify(W, null, 2),
                                language: "json",
                                styles: e$.debugCode
                            })
                        }) : void 0, (0, u.jsx)(eW, {
                            serverName: S,
                            toolName: _,
                            input: I ? (0, n(885175).n8)(null == w ? void 0 : w.input) : (null == E ? void 0 : E.input) || (null == w ? void 0 : w.input),
                            output: s,
                            state: i,
                            error: L,
                            promptInjectionDetected: !!(null == w ? void 0 : w.promptInjectionDetected),
                            isExpandable: !0,
                            onToggle: M,
                            serverIconUrl: K,
                            serverUrl: O,
                            showConfirmation: z,
                            onConfirm: D,
                            onCancel: P
                        }), F.length > 0 ? (0, u.jsx)(eB, {
                            output: F
                        }) : void 0]
                    })
                }),
                eY = (0, n(109939).YK)({
                    thinking: {
                        id: "aiInferenceTranscript.thinkingStepTitle.pending",
                        defaultMessage: "Thinking…"
                    }
                });

            function eH(e) {
                let t;
                if (!e || 0 === e.length) return;
                let n = /(?:^|\n)\s*\*\*([^*\n][^\n]*?)\*\*\s*(?:\n|$)/g,
                    r = null;
                for (; null !== (t = n.exec(e));) r = t[1].trim();
                return r ? ? void 0
            }

            function eG(e) {
                let {
                    content: t,
                    paddingInlineStart: a = 32,
                    isExpanded: o = !0,
                    aiChatFeatureController: i,
                    isStreaming: s,
                    stepId: l
                } = e, {
                    bodyStyleKey: d
                } = (0, n(765846).yq)(), [c, p] = (0, r.useState)(!1), [g, f] = (0, r.useState)(!1), m = (0, r.useRef)(null), h = (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        maxHeight: 175,
                        paddingInlineStart: a
                    },
                    scrollContainer: {
                        overflowY: "auto",
                        maxHeight: "inherit",
                        userSelect: "text",
                        maskImage: `linear-gradient(to bottom,
						${c?"transparent 0px":"black 0px"},
						black 48px,
						black calc(100% - 64px),
						${g?"transparent 100%":"black 100%"}),
						linear-gradient(black, black)`,
                        maskSize: "calc(100% - 16px) 100%, 16px 100%",
                        maskPosition: "0 0, 100% 0",
                        maskRepeat: "no-repeat, no-repeat",
                        WebkitMaskImage: `linear-gradient(to bottom,
						${c?"transparent 0px":"black 0px"},
						black 48px,
						black calc(100% - 64px),
						${g?"transparent 100%":"black 100%"}),
						linear-gradient(black, black)`,
                        WebkitMaskSize: "calc(100% - 16px) 100%, 16px 100%",
                        WebkitMaskPosition: "0 0, 100% 0",
                        WebkitMaskRepeat: "no-repeat, no-repeat"
                    }
                }), [c, g, a]), y = (0, r.useCallback)(() => {
                    let e = m.current;
                    if (!e) return;
                    let {
                        scrollTop: t,
                        scrollHeight: n,
                        clientHeight: r
                    } = e, a = n > r;
                    p(a && !(t <= 0)), f(a && !(n - t - r <= 0))
                }, []);
                return (0, r.useEffect)(() => {
                    let e = m.current;
                    if (e) return y(), e.addEventListener("scroll", y, {
                        passive: !0
                    }), () => {
                        e.removeEventListener("scroll", y)
                    }
                }, [y, o]), (0, r.useEffect)(() => {
                    let e = m.current;
                    if (!e) return;
                    let t = e.scrollHeight - e.scrollTop - e.clientHeight <= 100;
                    requestAnimationFrame(() => {
                        t && (e.scrollTop = e.scrollHeight), y()
                    })
                }, [t, y]), (0, u.jsx)("div", {
                    style: h.container,
                    children: (0, u.jsx)("div", {
                        style: h.scrollContainer,
                        ref: m,
                        children: (0, u.jsx)(n(111010).D, {
                            styleKey: d,
                            colorVariant: "secondary",
                            children: (0, u.jsx)(n(212024).h, {
                                markdown: function(e) {
                                    if (!e) return "";
                                    let t = {},
                                        n = 0,
                                        r = e.replace(/\[([^\]]*)\]\(([^)]*)\)/g, e => {
                                            let r = `__LINK_PLACEHOLDER_${n++}__`;
                                            return t[r] = e, r
                                        }).replace(/\[\^([^\]]*)\]/g, e => {
                                            let r = `__CITATION_PLACEHOLDER_${n++}__`;
                                            return t[r] = e, r
                                        }).replace(/{{(\^?)([^{}]+)}}/g, (e, t, n) => `[^${n}]`);
                                    return Object.entries(t).reduce((e, [t, n]) => e.replace(t, n), r)
                                }(t ? ? ""),
                                aiChatFeatureController: i,
                                isStreaming: s,
                                stepId: l
                            })
                        })
                    })
                })
            }

            function eQ(e) {
                let {
                    thinkingPartData: t,
                    aiChatFeatureController: a,
                    runningInference: o,
                    onExpandedChange: i,
                    hideIcon: s = !1
                } = e, l = (0, n(109939).tz)(), d = (0, n(960253).e)(), c = (0, n(632079).O4)({
                    theme: d
                }), {
                    content: p,
                    isLastThinkingPart: g
                } = t, f = g && o, [m, h] = (0, r.useState)(!1), y = (0, r.useCallback)(e => {
                    h(e), null == i || i(e)
                }, [i]), v = (0, r.useMemo)(() => (function(e, t) {
                    let n = t.formatMessage(eY.thinking);
                    if (!e || 0 === e.length) return {
                        title: n,
                        isExpandedOverride: void 0
                    };
                    if (!e.slice(0, 20).includes("*")) return {
                        title: n,
                        isExpandedOverride: !0
                    };
                    let r = eH(e);
                    return r ? {
                        title: r,
                        isExpandedOverride: void 0
                    } : {
                        title: n,
                        isExpandedOverride: void 0
                    }
                })(p, l), [p, l]), x = f ? (0, u.jsx)(n(861510).N, {
                    styleKey: "bodyRegular",
                    colorVariant: "secondary",
                    animate: !0,
                    text: v.title
                }) : (0, u.jsx)(n(109939).sA, {
                    id: "AgentInferenceThinkingPart.thought",
                    defaultMessage: "Thought"
                });
                return (0, u.jsx)(n(374201).K, {
                    isExpandable: void 0 !== p,
                    isExpandedOverride: f && v.isExpandedOverride,
                    icon: f ? (0, u.jsx)(n(265035).ScrollingSquiggle, {
                        strokeColor: c.text.tertiary
                    }) : n(440956).lightBulbBrightSmallIcon,
                    title: x,
                    hideIcon: s,
                    onExpandedChange: y,
                    content: (0, u.jsx)(eG, {
                        content: p,
                        paddingInlineStart: s ? 4 : 32,
                        isExpanded: m,
                        aiChatFeatureController: a,
                        isStreaming: f,
                        stepId: t.step.id
                    }),
                    variant: "agent_mobile" === a.aiChatType ? "large" : "default"
                })
            }
            var eX = () => n(970831),
                eJ = () => n(356912),
                eZ = () => n(258024),
                e0 = () => n(330942),
                e1 = () => n(793292);

            function e9({
                environment: e,
                url: t
            }) {
                if (t && (0, n(722371).O9)(t)) return () => {
                    (0, n(624621).L)({
                        environment: e,
                        url: t,
                        targetSelf: !1
                    })
                }
            }
            var e5 = () => n(445567);
            let e2 = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    userSelect: "text"
                },
                e8 = {
                    display: "flex",
                    paddingInlineStart: 28
                };

            function e3(e) {
                let {
                    connector: t,
                    isReconnect: a = !1,
                    emailAddress: o
                } = e, i = (0, n(533992).v3)(), [s, l] = (0, r.useState)(!1), d = "gmail" === t, c = (0, r.useCallback)(async () => {
                    if (d) {
                        let e = n(92513).JW();
                        (0, n(166672).navigateToAIConnectorOnboarding)({
                            connector: "gmail",
                            analyticsFrom: a ? "agent_mail_credential_error" : "agent_mail_not_connected_error",
                            sessionId: e
                        })
                    } else {
                        l(!0);
                        try {
                            await (0, n(545856).MG)({
                                environment: i,
                                authAction: a ? "Resync" : "Import",
                                resyncEmailAddress: a ? o : void 0
                            })
                        } finally {
                            l(!1)
                        }
                    }
                }, [o, i, d, a]), p = a ? (0, u.jsx)(n(109939).sA, {
                    id: "AgentToolUseMailNotConnectedError.reconnectButton",
                    defaultMessage: "Reconnect"
                }) : d ? (0, u.jsx)(n(109939).sA, {
                    id: "AgentToolUseMailNotConnectedError.connectGmailButton",
                    defaultMessage: "Connect Gmail"
                }) : (0, u.jsx)(n(109939).sA, {
                    id: "AgentToolUseMailNotConnectedError.connectButton",
                    defaultMessage: "Connect to Notion Mail"
                }), g = a ? "Reconnect" : d ? "Connect Gmail" : "Connect to Notion Mail", f = a ? (0, u.jsx)(n(109939).sA, {
                    id: "AgentToolUseMailNotConnectedError.reconnectTitle",
                    defaultMessage: "Email credentials out of sync"
                }) : (0, u.jsx)(n(109939).sA, {
                    id: "AgentToolUseMailNotConnectedError.title",
                    defaultMessage: "Email not connected"
                });
                return (0, u.jsxs)("div", {
                    style: e2,
                    children: [(0, u.jsx)(n(75224).N, {
                        icon: n(823811).o,
                        colorVariant: "secondary",
                        title: (0, u.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: f
                        })
                    }), (0, u.jsx)("div", {
                        style: e8,
                        children: (0, u.jsx)(n(265779).E, {
                            size: "sm",
                            colorPalette: "blue",
                            onClick: c,
                            isLoading: s,
                            ariaLabel: g,
                            children: p
                        })
                    })]
                })
            }
            let e6 = {
                container: {
                    borderRadius: 10,
                    overflow: "hidden",
                    border: `1px solid ${n(632079).Tj.border.secondary}`
                },
                content: {
                    padding: "10px 12px",
                    userSelect: "text"
                },
                permissionDetail: {
                    marginTop: 4
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function e4(e) {
                let {
                    toolName: t,
                    toolResultStep: a,
                    aiChatFeatureController: o
                } = e, i = (0, n(109939).tz)(), s = (0, n(533992).v3)(), l = (0, r.useMemo)(() => et({
                    toolName: t,
                    state: "loading",
                    numResults: 0,
                    intl: i,
                    toolResultStep: a
                }), [t, i, a]), d = (0, n(682985).K8)(() => (function(e, t) {
                    let n, r = null == e ? void 0 : e.insufficientPermissionsDetails;
                    if (!r) return {
                        action: "write",
                        resourceType: "unknown",
                        resourceStore: void 0
                    };
                    let a = "unknown";
                    if (r.recordPointer) {
                        let {
                            table: e,
                            id: o
                        } = r.recordPointer;
                        try {
                            if (e === c().evP) a = "page", n = new(eX()).B(t, {
                                table: c().evP,
                                id: o
                            });
                            else if (e === c().VlP) {
                                a = "database";
                                let e = new(eJ()).m(t, {
                                        table: c().VlP,
                                        id: o
                                    }),
                                    r = e.getParentPointer();
                                n = r && r.table === c().evP ? new(eX()).B(t, r) : e
                            } else e === c().NXh && (a = "workspace")
                        } catch (e) {}
                    }
                    return {
                        action: "reader" === r.requiredAccess ? "read" : "write",
                        resourceType: a,
                        resourceStore: n
                    }
                })(a, s), [a, s]);
                return o.supportsRenderingPermissionError ? (0, u.jsx)("div", {
                    style: e6.container,
                    children: (0, u.jsx)("div", {
                        style: e6.content,
                        children: (0, u.jsxs)(n(4458).fI, {
                            gap: 8,
                            alignItems: "flex-start",
                            className: "autolayout-fill-width",
                            style: e6.positionRelative,
                            children: [(0, u.jsx)(n(4458).fI, {
                                alignItems: "center",
                                justifyContent: "center",
                                height: 20,
                                width: 20,
                                children: (0, u.jsx)(n(16275).I, {
                                    icon: n(269298).lockFillIcon,
                                    size: "default"
                                })
                            }), (0, u.jsxs)(n(4458).VP, {
                                gap: 2,
                                className: "autolayout-col",
                                style: e6.positionRelative,
                                flex: "1 1 0",
                                children: [(0, u.jsxs)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    lineClamp: 1,
                                    children: [l, " • ", (0, u.jsx)(n(109939).sA, {
                                        id: "AgentToolUsePermissionError.status",
                                        defaultMessage: "Permission required"
                                    })]
                                }), d ? (0, u.jsx)("div", {
                                    style: e6.permissionDetail,
                                    children: (0, u.jsx)(n(111010).D, {
                                        styleKey: "captionRegular",
                                        lineClamp: 1,
                                        children: (() => {
                                            if (!d) return null;
                                            let {
                                                action: e,
                                                resourceType: t,
                                                resourceStore: r
                                            } = d, a = r ? (0, u.jsx)(n(899260).A, {
                                                store: r,
                                                useInvertedColors: !1,
                                                iconSize: 14
                                            }) : t;
                                            return "read" === e ? (0, u.jsx)(n(109939).sA, {
                                                id: "AgentToolUsePermissionError.needsPermissionToRead",
                                                defaultMessage: "Needs permission to read {resource}",
                                                values: {
                                                    resource: a
                                                }
                                            }) : "write" === e ? (0, u.jsx)(n(109939).sA, {
                                                id: "AgentToolUsePermissionError.needsPermissionToWrite",
                                                defaultMessage: "Needs permission to write to {resource}",
                                                values: {
                                                    resource: a
                                                }
                                            }) : void(0, n(722371).HB)(e)
                                        })()
                                    })
                                }) : void 0]
                            })]
                        })
                    })
                }) : null
            }
            var e7 = () => n(46241);

            function te({
                toolName: e,
                operations: t
            }) {
                let r = {};
                for (let a of t) {
                    if (a.pointer.table !== e7().V) continue;
                    let t = function({
                        toolName: e,
                        operation: t
                    }) {
                        var r, a;
                        let o = [],
                            i = tt[e] ? ? !1,
                            s = "updateCollectionPropertySchema" === (r = t).command ? r.args.primitiveOp.command : r.command,
                            l = "updateCollectionPropertySchema" === (a = t).command ? a.args.primitiveOp.args : a.args;
                        if ("set" === s && tn(t.path)) {
                            let e = tr(l);
                            e && o.push({
                                agentAction: "create",
                                propertySchema: e,
                                hideBadge: i
                            })
                        } else if ("update" === s) {
                            let e = "object" == typeof l && null !== l ? Object.values(l).map(tr).filter(n(722371).O9) : [];
                            t.path.some(e => "deleted_schema" === e) ? o.push(...e.map(e => ({
                                agentAction: "delete",
                                propertySchema: e,
                                hideBadge: i
                            }))) : tn(t.path) && o.push(...e.map(e => ({
                                agentAction: "update",
                                propertySchema: e,
                                hideBadge: i
                            })))
                        }
                        return o
                    }({
                        toolName: e,
                        operation: a
                    });
                    if (0 === t.length) continue;
                    let o = a.pointer.id;
                    r[o] || (r[o] = []), r[o].push(...t)
                }
                return r
            }
            let tt = {
                "create-pages": !0,
                "delete-pages": !0,
                "create-database": !0
            };

            function tn(e) {
                return e.some(e => "schema" === e)
            }

            function tr(e) {
                if ("object" == typeof e && null !== e && "type" in e && "name" in e) return e
            }
            var ta = () => n(897011),
                to = () => n(536601);
            let ti = {
                    padding: "6px 8px",
                    borderBottom: "none",
                    borderColor: "transparent",
                    marginTop: 0,
                    marginBottom: 0
                },
                ts = {
                    width: "100%"
                },
                tl = {
                    position: "relative"
                };

            function td({
                menuListItemProps: e,
                title: t,
                icon: r,
                agentAction: a,
                disabled: o,
                hideActionBadge: i = !1,
                onMouseEnter: s,
                onMouseLeave: l,
                onClick: d,
                aiChatFeatureController: c,
                "aria-expanded": p,
                "aria-controls": g
            }) {
                return (0, u.jsx)("div", {
                    onMouseEnter: s,
                    onMouseLeave: l,
                    style: ts,
                    children: (0, u.jsx)(n(95582).A, { ...e,
                        style: ti,
                        title: (0, u.jsxs)(n(4458).fI, {
                            gap: 8,
                            className: "autolayout-row autolayout-fill-width",
                            style: tl,
                            children: [(0, u.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: t
                            }), i ? null : (0, u.jsx)(tu, {
                                agentAction: a
                            })]
                        }),
                        left: r,
                        leftStyle: c.agentToolDiffRowIconContainerStyles,
                        disabled: o,
                        onClick: d,
                        "aria-expanded": p,
                        "aria-controls": g
                    })
                })
            }
            let tc = {
                margin: 0
            };

            function tu({
                agentAction: e
            }) {
                switch (e) {
                    case "create":
                        return (0, u.jsx)(n(746434).E, {
                            content: (0, u.jsx)(n(109939).sA, {
                                id: "AgentActionBadge.new",
                                defaultMessage: "New"
                            }),
                            color: "blue",
                            style: tc
                        });
                    case "update":
                        return (0, u.jsx)(n(746434).E, {
                            content: (0, u.jsx)(n(109939).sA, {
                                id: "AgentActionBadge.update",
                                defaultMessage: "Update"
                            }),
                            color: "yellow",
                            style: tc
                        });
                    case "delete":
                        return (0, u.jsx)(n(746434).E, {
                            content: (0, u.jsx)(n(109939).sA, {
                                id: "AgentActionBadge.delete",
                                defaultMessage: "Delete"
                            }),
                            color: "red",
                            style: tc
                        });
                    default:
                        return (0, n(722371).HB)(e)
                }
            }
            let tp = {
                padding: "4px"
            };

            function tg(e) {
                return (0, u.jsx)(n(844565).A, {
                    style: tp,
                    ...e
                })
            }

            function tf({
                collectionId: e,
                propertyChangeInfos: t,
                theme: r,
                themeMode: a,
                aiChatFeatureController: o
            }) {
                let i = t.map((e, t) => (function({
                    propertyChangeInfo: e,
                    index: t,
                    theme: r,
                    themeMode: a,
                    aiChatFeatureController: o
                }) {
                    let {
                        agentAction: i,
                        propertySchema: s,
                        hideBadge: l
                    } = e;
                    return {
                        key: `${i}-${s.name}-${t}`,
                        action: () => {},
                        render: e => (0, u.jsx)(td, {
                            menuListItemProps: e,
                            title: s.name,
                            icon: (0, u.jsx)(n(221535).zB, {
                                type: s.type,
                                icon: void 0,
                                size: n(104509).Ev.sm,
                                theme: r,
                                themeMode: a
                            }),
                            agentAction: i,
                            disabled: !0,
                            hideActionBadge: l,
                            aiChatFeatureController: o
                        })
                    }
                })({
                    propertyChangeInfo: e,
                    index: t,
                    theme: r,
                    themeMode: a,
                    aiChatFeatureController: o
                })).filter(n(722371).O9);
                if (0 !== i.length) return {
                    key: e,
                    items: i,
                    render: e => (0, u.jsx)(tg, { ...e
                    })
                }
            }

            function tm({
                collectionIds: e,
                collectionIdToPropertyChangeInfos: t,
                theme: n,
                themeMode: r,
                aiChatFeatureController: a,
                spaceStore: o
            }) {
                if (!o) return;
                let i = [];
                for (let s of e) {
                    let e = eJ().m.createChildStore(o, {
                            table: c().VlP,
                            id: s,
                            spaceId: o.id
                        }),
                        l = (0, to().getCollectionNameOrDefault)({
                            intl: L().A.getIntl(),
                            collectionStore: e
                        }),
                        d = t[s];
                    0 !== d.length && i.push({
                        key: s,
                        action: () => {},
                        render: e => (0, u.jsx)(ty, {
                            menuListItemProps: e,
                            collectionId: s,
                            collectionName: l,
                            propertyChangeInfos: d,
                            theme: n,
                            themeMode: r,
                            aiChatFeatureController: a
                        })
                    })
                }
                if (0 !== i.length) return {
                    key: e.join(","),
                    items: i,
                    render: e => (0, u.jsx)(tg, { ...e
                    })
                }
            }
            let th = {
                marginInlineStart: 22
            };

            function ty({
                menuListItemProps: e,
                collectionId: t,
                collectionName: a,
                propertyChangeInfos: o,
                theme: i,
                themeMode: s,
                aiChatFeatureController: l
            }) {
                let [d, c] = (0, r.useState)(!0), p = (0, r.useId)(), g = (0, r.useCallback)(() => {
                    c(!d)
                }, [d]), f = (0, r.useMemo)(() => ({
                    key: t,
                    items: o.map((e, r) => {
                        let {
                            agentAction: a,
                            propertySchema: o,
                            hideBadge: d
                        } = e;
                        return {
                            key: `${t}-${a}-${o.name}-${r}`,
                            action: () => {},
                            render: e => (0, u.jsx)(td, {
                                menuListItemProps: e,
                                title: o.name,
                                icon: (0, u.jsx)(n(221535).zB, {
                                    type: o.type,
                                    icon: void 0,
                                    size: n(104509).Ev.sm,
                                    theme: i,
                                    themeMode: s
                                }),
                                agentAction: a,
                                disabled: !0,
                                hideActionBadge: d,
                                aiChatFeatureController: l
                            }, `${t}-${a}-${o.name}-${r}`)
                        }
                    }),
                    render: e => (0, u.jsx)(tg, { ...e
                    })
                }), [t, o, i, s, l]), m = (0, n(960253).I)(() => ({
                    icon: {
                        flexShrink: 0,
                        transition: "transform 0.15s ease-in-out",
                        transform: d ? "rotate(90deg)" : "rotate(0deg)",
                        opacity: .5
                    }
                }), [d]);
                return (0, u.jsx)(n(522434).S, {
                    isExpanded: d,
                    shouldSkipContentPadding: !0,
                    disableInitialAnimation: !0,
                    contentId: p,
                    origin: (0, u.jsx)(td, {
                        menuListItemProps: e,
                        title: a,
                        icon: (0, u.jsx)(n(708966).Q, {
                            iconGroup: n(741873).N,
                            colorVariant: "secondary",
                            variantName: "small",
                            style: m.icon
                        }),
                        agentAction: "update",
                        disabled: !1,
                        hideActionBadge: !0,
                        onClick: g,
                        aiChatFeatureController: l,
                        "aria-expanded": d,
                        "aria-controls": p
                    }),
                    content: (0, u.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: [f],
                        style: th,
                        disableKeyboard: !0
                    })
                })
            }

            function tv({
                theme: e,
                themeMode: t,
                toolType: r,
                recordDiffInfos: o,
                spaceStore: i,
                intl: s,
                environment: l,
                toolResultStep: d,
                aiChatFeatureController: c,
                openInSidePeek: p,
                serverPageResultsById: g
            }) {
                var f;
                let m = new Map(g ? ? []);
                if (d && (0, a().gY)(d, "create-pages") && null != (f = d.result) && f.pages)
                    for (let e of d.result.pages) m.set(e.pointer.id, e);
                let h = o.map((a, o) => (function({
                    recordDiffInfo: e,
                    index: t,
                    spaceStore: r,
                    intl: a,
                    environment: o,
                    hideActionBadge: i = !1,
                    serverPage: s,
                    theme: l,
                    themeMode: d,
                    aiChatFeatureController: c,
                    openInSidePeek: p
                }) {
                    let {
                        recordPointer: g,
                        agentAction: f
                    } = e, m = eX().B.createChildStore(r, g), h = m.getIcon() ? ? (null != s && s.icon ? {
                        icon: s.icon,
                        pointer: s.pointer
                    } : void 0), y = m.isEmptyPage(), v = m.getRenderTitle({
                        userTimeZone: a.locale,
                        intl: a
                    }) ? ? (null != s && s.title ? (0, n(536614).S5)({
                        environment: o,
                        textValue: {
                            value: s.title,
                            spaceId: r.id
                        },
                        parentStore: r,
                        disableHover: !0,
                        disableStyleAnnotations: !1,
                        disableInsertedDeletedAnnotations: !1,
                        disableDateStyleAnnotations: !1,
                        disableSuggestionAnnotations: !1,
                        disableLinks: !1,
                        disabled: !1,
                        emojiType: "raw",
                        theme: l,
                        themeMode: d,
                        katex: void 0,
                        formulaValueTypes: []
                    }) : void 0);
                    if (void 0 === v) return;
                    let x = (0, u.jsx)("span", {
                            style: n(699422).RC,
                            children: v
                        }),
                        S = e => {
                            (0, n(545586).navigateToBlock)({
                                environment: o,
                                store: m,
                                pageVisitSource: n(254656).y8.AIChat,
                                openInNew: (0, n(7029).V)(e),
                                openInSidePeek: p
                            })
                        },
                        b = m.isDefined();
                    return {
                        key: `${m.id}-${t}`,
                        action: () => {},
                        render: e => (0, u.jsx)(tx, {
                            menuListItemProps: e,
                            store: m,
                            title: x,
                            agentAction: f,
                            hideActionBadge: i,
                            icon: h,
                            isEmptyPage: y,
                            disabledHover: !b,
                            onClick: S,
                            aiChatFeatureController: c
                        })
                    }
                })({
                    recordDiffInfo: a,
                    index: o,
                    spaceStore: i,
                    intl: s,
                    environment: l,
                    hideActionBadge: !!r && (tt[r] ? ? !1),
                    serverPage: m.get(a.recordPointer.id),
                    theme: e,
                    themeMode: t,
                    aiChatFeatureController: c,
                    openInSidePeek: p
                })).filter(n(722371).O9);
                if (0 !== h.length) return {
                    key: "agent-tool-preview-diff-pages",
                    items: h,
                    render: e => (0, u.jsx)(tg, { ...e
                    })
                }
            }

            function tx(e) {
                let {
                    menuListItemProps: t,
                    store: a,
                    title: o,
                    agentAction: i,
                    hideActionBadge: s,
                    icon: l,
                    isEmptyPage: d,
                    disabledHover: c,
                    onClick: p,
                    aiChatFeatureController: g
                } = e, f = (0, n(682985).K8)(() => (0, n(569553).Te)(a), [a]), m = (0, n(682985).K8)(() => a.isDefined(), [a]), h = (0, r.useCallback)(e => (0, u.jsx)(n(272307).HoverPagePreview, {
                    store: a,
                    events: e
                }), [a]);
                return (0, u.jsx)(n(51831).m, {
                    noStyle: !0,
                    delayThreshold: 0,
                    placement: "left",
                    alignment: "center",
                    originGap: 24,
                    disableTooltip: c,
                    content: h,
                    children: e => (0, u.jsx)(td, {
                        menuListItemProps: t,
                        title: m ? (0, u.jsx)(n(627918).A, {
                            store: a
                        }) : o,
                        icon: (0, u.jsx)(n(569553).B6, {
                            icon: l,
                            isEmptyPage: d,
                            size: 20,
                            disabled: !0,
                            iconRecordCategory: f
                        }),
                        agentAction: i,
                        hideActionBadge: s,
                        onMouseEnter: e.onMouseEnter,
                        onMouseLeave: e.onMouseLeave,
                        onClick: p,
                        aiChatFeatureController: g
                    })
                })
            }
            let tS = (0, n(109939).YK)({
                    newChat: {
                        id: "AgentInferenceToolUse.runAgent.newChat",
                        defaultMessage: "New chat"
                    }
                }),
                tb = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        paddingTop: 12,
                        paddingInlineEnd: 12,
                        paddingBottom: 12,
                        paddingInlineStart: 12,
                        borderRadius: 12,
                        border: `1px solid ${n(632079).Tj.border.secondary}`,
                        backgroundColor: n(632079).Tj.background.primary
                    },
                    title: {
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }
                };

            function tj({
                threadStore: e,
                viewThreadButton: t,
                fallbackTitle: r
            }) {
                let a = (0, n(109939).tz)(),
                    o = (0, n(682985).K8)(() => {
                        var t;
                        return null == (t = e.getData()) ? void 0 : t.title
                    }, [e]),
                    i = (null == o ? void 0 : o.trim()) || (null == r ? void 0 : r.trim()) || a.formatMessage(tS.newChat);
                return (0, u.jsx)(n(844565).A, {
                    children: (0, u.jsx)("div", {
                        style: tb.container,
                        children: (0, u.jsxs)(n(4458).fI, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 8,
                            children: [(0, u.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                style: tb.title,
                                children: i
                            }), t]
                        })
                    })
                })
            }

            function tw(e) {
                return !!(e && ((0, a().gY)(e, "slack.createThreadInChannel") || (0, a().gY)(e, "slack.createThreadInDirectMessage") || (0, a().gY)(e, "slack.replyInThread")))
            }

            function tI(e) {
                let {
                    environment: t,
                    threadStore: a,
                    toolResultStep: o,
                    toolIsLoading: i,
                    toolIsReverted: s
                } = e, l = (0, r.useMemo)(() => {
                    if (tw(o)) return o.result
                }, [o]), d = (0, n(682985).K8)(() => null == a ? void 0 : a.getSpaceId(), [a]), c = (0, n(682985).K8)(() => !!(null == a ? void 0 : a.canEdit()), [a]), p = (0, r.useMemo)(() => {
                    if (!l || null != o && o.wasDeleted || i || s || null != o && o.error) return;
                    let e = null == o ? void 0 : o.moduleInfo;
                    if (e && "slack" === e.type && d && a && c) return {
                        spaceId: d,
                        threadId: a.id,
                        stepId: o.id
                    }
                }, [l, c, a, d, i, s, o]), [g, f] = (0, r.useState)(!1), [m, h] = (0, r.useState)(!1), y = (0, r.useCallback)(() => {
                    f(!1)
                }, []), v = (0, r.useCallback)(() => {
                    f(!0)
                }, []);
                (0, r.useEffect)(() => {
                    p || f(!1)
                }, [p]);
                let x = (0, r.useCallback)(async () => {
                    if (p && !m) {
                        h(!0);
                        try {
                            let e = await t.api.callApi({
                                eventName: "deleteSlackMessageFromTranscript",
                                environment: t,
                                data: {
                                    spaceId: p.spaceId,
                                    threadId: p.threadId,
                                    stepId: p.stepId
                                }
                            });
                            "success" !== e.type || e.data.success
                        } finally {
                            h(!1), f(!1)
                        }
                    }
                }, [t, m, p]);
                return (0, r.useMemo)(() => p ? g ? (0, u.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    gap: 4,
                    flexShrink: 0,
                    children: [(0, u.jsx)(n(988022).p, {
                        size: "md",
                        onClick: y,
                        colorVariant: "secondary",
                        disabled: m,
                        iconLeading: {
                            icon: n(25094).xMarkSmallIcon,
                            size: n(104509).Ev.sm
                        },
                        children: (0, u.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            children: (0, u.jsx)(n(109939).sA, { ...tC.labelCancel
                            })
                        })
                    }, "cancel"), (0, u.jsx)(n(988022).p, {
                        size: "md",
                        onClick: x,
                        colorPalette: "red",
                        disabled: m,
                        iconLeading: {
                            icon: n(971730).checkmarkSmallIcon,
                            size: n(104509).Ev.sm
                        },
                        children: (0, u.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            children: (0, u.jsx)(n(109939).sA, { ...tC.labelConfirmDelete
                            })
                        })
                    }, "confirm-delete")]
                }) : (0, u.jsx)(n(4458).fI, {
                    alignItems: "center",
                    gap: 4,
                    flexShrink: 0,
                    children: (0, u.jsx)(n(988022).p, {
                        size: "md",
                        onClick: v,
                        colorVariant: "secondary",
                        disabled: m,
                        iconLeading: {
                            icon: n(822973).trashSmallIcon,
                            size: n(104509).Ev.sm
                        },
                        children: (0, u.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            children: (0, u.jsx)(n(109939).sA, { ...tC.labelDelete
                            })
                        })
                    })
                }) : null, [y, x, v, g, m, p])
            }
            let tC = (0, n(109939).YK)({
                labelDelete: {
                    id: "AgentInferenceToolUse.slack.delete",
                    defaultMessage: "Delete"
                },
                labelCancel: {
                    id: "AgentInferenceToolUse.slack.cancelDelete",
                    defaultMessage: "Cancel"
                },
                labelConfirmDelete: {
                    id: "AgentInferenceToolUse.slack.confirmDelete",
                    defaultMessage: "Confirm Delete"
                }
            });

            function tM(e) {
                let t = (0, H().Tn)(e);
                if (!(null != t && t.startsWith("thread://"))) return;
                let [, r] = t.slice(9).split("/");
                return (0, n(368584).Li)(r)
            }
            let tk = (0, n(109939).YK)({
                    viewThread: {
                        id: "AgentInferenceToolUse.runAgent.viewThread",
                        defaultMessage: "Open"
                    }
                }),
                tT = (0, n(109939).YK)({
                    createdPlan: {
                        id: "AgentInferenceToolUse.generatePlan.createdPlan",
                        defaultMessage: "Created plan"
                    },
                    updatedPlan: {
                        id: "AgentInferenceToolUse.generatePlan.updatedPlan",
                        defaultMessage: "Updated plan"
                    },
                    openPage: {
                        id: "AgentInferenceToolUse.generatePlan.openPage",
                        defaultMessage: "Open page"
                    },
                    discardedPlan: {
                        id: "AgentInferenceToolUse.generatePlan.discardedPlan",
                        defaultMessage: "Discarded plan"
                    },
                    reviewAndApprove: {
                        id: "AgentInferenceToolUse.generatePlan.reviewAndApprove",
                        defaultMessage: "Take a look and approve to begin building."
                    }
                }),
                tA = (0, n(109939).YK)({
                    switchedToFullChat: {
                        id: "AgentInferenceToolUse.escalate.switchedToFullChat",
                        defaultMessage: "Switched to full chat for a better answer…"
                    }
                }),
                tR = {
                    paddingBlock: 0,
                    paddingInline: 0,
                    marginBottom: 8
                },
                tD = {
                    flex: 1,
                    minWidth: 0
                },
                tP = {
                    position: "relative"
                },
                tF = {
                    display: "flex",
                    flexDirection: "column",
                    position: "relative"
                },
                tE = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    paddingInlineStart: 2,
                    paddingBlockStart: 2,
                    paddingBlockEnd: 3
                },
                tN = {
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    position: "relative",
                    zIndex: 2
                },
                tU = {
                    position: "absolute",
                    top: 12,
                    insetInlineEnd: 12,
                    zIndex: 1,
                    transform: "scale(0.6)",
                    transformOrigin: "top right"
                },
                tV = {
                    position: "absolute",
                    insetInlineEnd: 64,
                    bottom: -40,
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, .2)",
                    filter: "blur(24px)",
                    zIndex: 0
                },
                t_ = r.memo(function(e) {
                    var t, o, i, s, l, p;
                    let {
                        stepId: g,
                        toolName: f,
                        toolResultStep: m,
                        toolUse: h,
                        externalToolName: y,
                        threadStore: v,
                        runningInference: x,
                        aiChatFeatureController: S,
                        isLastTurn: b,
                        onExpandedChange: j,
                        hideIcon: w = !1,
                        hideOutline: I = !1
                    } = e, C = !!(m && (0, d().OP)(m)), M = (0, e1().I)({
                        runningInference: x,
                        toolResultStep: m,
                        isLastTurn: b
                    }), k = !!(m && (0, d().I6)(m)), {
                        showDebug: T
                    } = (0, n(101491).Mp)(), A = (0, n(972740).L)(), R = (0, n(109939).tz)(), D = (0, n(533992).v3)(), P = (0, n(960253).e)(), F = (0, n(815048).fJ)(n(406921).V), E = (0, n(254505).m)(), N = (0, n(682985).K8)(() => {
                        var e;
                        let t = v.getTranscript();
                        return 0 !== t.length && (null == (e = t.at(-1)) ? void 0 : e.id) === (null == m ? void 0 : m.id)
                    }, [v, null == m ? void 0 : m.id]), U = (0, n(682985).K8)(() => (0, e1().yX)([m].filter(n(722371).O9), (null == A ? void 0 : A.id) ? ? ""), [null == A ? void 0 : A.id, m]), V = (0, n(83208).X)("run_agent_compacted_personal_agent_view", {
                        disableExposureLogging: "run-agent" !== f
                    }), _ = (0, n(83208).X)("agent_polish_2026"), L = function({
                        toolName: e,
                        toolResultStep: t,
                        intl: o,
                        isLastStep: i
                    }) {
                        return (0, r.useMemo)(() => {
                            if (!i) return;
                            let r = "wait" === e && t && (0, a().gY)(t, "wait") ? t.result : "callFunction" === e ? (0, n(645604).UH)(t) : void 0;
                            if (!r) return;
                            let s = function({
                                intl: e,
                                waitResult: t
                            }) {
                                var n;
                                let r = [],
                                    a = null == (n = t.message) ? void 0 : n.trim();
                                a && r.push(a);
                                let o = function(e, t) {
                                    if (!Number.isFinite(t)) return;
                                    let n = new Date(t),
                                        r = new Date,
                                        a = n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth() && n.getDate() === r.getDate(),
                                        o = e.formatDate(n, a ? {
                                            hour: "numeric",
                                            minute: "2-digit"
                                        } : {
                                            month: "short",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit"
                                        });
                                    return e.formatMessage({
                                        id: "AgentInferenceToolUse.wait.subtitle.resumeAt",
                                        defaultMessage: "Resumes at {time}"
                                    }, {
                                        time: o
                                    })
                                }(e, t.resumeAtMs);
                                if (o && r.push(o), 0 !== r.length) return r.join(" · ")
                            }({
                                intl: o,
                                waitResult: r
                            });
                            if (s) return (0, u.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "tertiary",
                                lineClamp: 1,
                                children: s
                            })
                        }, [o, i, e, t])
                    }({
                        intl: R,
                        toolName: f,
                        toolResultStep: m,
                        isLastStep: N
                    }), K = C ? void 0 : L, {
                        titleStore: O,
                        isTitleStoreReady: z
                    } = function(e) {
                        let {
                            toolResultStep: t
                        } = e, r = (0, n(109939).tz)(), a = (0, n(972740).L)(), o = (0, n(682985).K8)(() => {
                            if (!a) return;
                            let e = (0, e1().PA)(t, a.id);
                            if (1 !== e.length) return;
                            let r = e[0];
                            return r.table === c().evP ? eX().B.createChildStore(a, r) : r.table === c().VlP ? eJ().m.createChildStore(a, r) : r.table === c().oo9 ? n(807825).L.createChildStore(a, r) : r.table === c().C0E ? n(360851).N.createChildStore(a, r) : void 0
                        }, [a, t]), i = (0, n(682985).K8)(() => o instanceof n(807825).L ? o.isReady() : o instanceof n(360851).N ? void 0 !== o.getDraftData() : void 0 !== (null == o ? void 0 : o.getRenderTitle({
                            userTimeZone: r.locale,
                            intl: r
                        })), [o, r]);
                        return {
                            titleStore: o,
                            isTitleStoreReady: i
                        }
                    }({
                        toolName: f,
                        toolResultStep: m
                    }), W = (0, n(682985).K8)(() => {
                        if ("run-agent" === f) return (0, n(132702).OB)(D.RouterStore.state.route) ? ? {}
                    }, [f, D]), $ = (0, n(682985).K8)(() => {
                        if ("run-agent" !== f) return;
                        let e = D.RouterStore.state.route;
                        return {
                            peekViewBlockId: "peekViewBlockId" in e ? e.peekViewBlockId : void 0,
                            peekMode: "peekMode" in e ? e.peekMode : void 0
                        }
                    }, [f, D]), q = (0, n(682985).K8)(() => n(728372).default.state.currentWorkflowStore, []), Y, G = (0, r.useMemo)(() => (function(e) {
                        if (e && (0, a().gY)(e, "create-pages")) return function(e) {
                            let t = null == e ? void 0 : e.pages;
                            if (!t || 1 !== t.length) return;
                            let [r] = t, a = (0, n(247438).q4_)(r.title);
                            if (0 !== a.trim().length) return a
                        }(e.result)
                    })(m), [m]), Z = function({
                        toolResultStep: e,
                        threadStore: t,
                        stepId: o,
                        spaceStore: i,
                        environment: s
                    }) {
                        var l, d, u;
                        let p = e && (0, a().gY)(e, "run-agent") ? e : void 0,
                            g = function(e) {
                                var t, n;
                                if (!e) return;
                                let r = tM(null == (t = e.result) ? void 0 : t.threadUrl);
                                return r || tM(null == (n = e.input) ? void 0 : n.threadUrl)
                            }(p),
                            f = (null == p || null == (l = p.result) ? void 0 : l.workflowId) ? ? (0, n(368584).al)(null == p || null == (d = p.input) ? void 0 : d.agentUrl),
                            m = !f || f === n(180139).Lj || "" === f,
                            h = (0, n(682985).K8)(() => t.getTranscript(), [t]),
                            y = (0, r.useMemo)(() => (function(e, t) {
                                let n = e.findIndex(e => e.id === t) - 1;
                                for (let t = n >= 0 ? n : e.length - 1; t >= 0; t -= 1) {
                                    let n = e[t];
                                    if ("user" === n.type && n.userId || "user-injected" === n.type && n.userId || "agent-prebuilt-prompt" === n.type && n.userId) return n.userId
                                }
                            })(h, o), [h, o]),
                            v = (0, r.useMemo)(() => {
                                if (i && f && !m) return n(360851).N.createChildStore(i, {
                                    table: c().C0E,
                                    id: f,
                                    spaceId: i.id
                                })
                            }, [i, f, m]),
                            x = (0, n(682985).K8)(() => !!v && v.canRead(), [v]),
                            S = (0, r.useMemo)(() => {
                                if (i && g) return n(174148).E.createChildStore(i, {
                                    table: c().Toz,
                                    id: g,
                                    spaceId: i.id
                                })
                            }, [i, g]),
                            b = !!y && y === (null == (u = s.currentUser) ? void 0 : u.id),
                            j = m ? b : x;
                        return {
                            shouldShowPreview: !!(p && g && S && j),
                            previewThreadStore: S,
                            threadId: g
                        }
                    }({
                        toolResultStep: m,
                        threadStore: v,
                        stepId: g,
                        spaceStore: A,
                        environment: D
                    }), ee = (0, r.useMemo)(() => {
                        if ("run-agent" !== f || !m || !(0, a().gY)(m, "run-agent") || !W) return;
                        let e = (0, n(368584).VM)({
                            toolResultStep: m,
                            agentRouteParams: W,
                            peekRouteParams: $
                        });
                        if (e) return "personal" === e.kind ? (0, u.jsx)(n(265779).E, {
                            size: "sm",
                            colorPalette: "blue",
                            onClick: () => {
                                let t = (0, n(368584).C3)(D.RouterStore.state.route, e.threadId);
                                if (t) return void(0, n(79266).navigate)({
                                    environment: D,
                                    url: t,
                                    redirect: !1
                                });
                                let r = (0, n(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(D.RouterStore.state.route),
                                    a = O && O instanceof n(360851).N ? O : void 0,
                                    o = n(728372).AppStoreMainEditorCurrentBlockStore.state,
                                    i = a ? ? q ? ? o;
                                if (!r || !i || null != W && W.workflowViewType || null != $ && $.peekViewBlockId) return void(0, n(79266).navigate)({
                                    environment: D,
                                    url: e.url,
                                    redirect: !1
                                });
                                try {
                                    (0, n(358667).openChatPanel)({
                                        environment: D,
                                        store: i,
                                        chatPanelState: {
                                            isOpen: !0,
                                            threadId: e.threadId
                                        },
                                        source: "navigation"
                                    })
                                } catch {
                                    (0, n(79266).navigate)({
                                        environment: D,
                                        url: e.url,
                                        redirect: !1
                                    })
                                }
                            },
                            ariaLabel: R.formatMessage(tk.viewThread),
                            children: R.formatMessage(tk.viewThread)
                        }) : (0, u.jsx)(n(265779).E, {
                            size: "sm",
                            colorPalette: "blue",
                            onClick: () => {
                                let t = (0, n(368584).C3)(D.RouterStore.state.route, e.threadId);
                                (0, n(79266).navigate)({
                                    environment: D,
                                    url: t ? ? e.url,
                                    redirect: e.redirect
                                })
                            },
                            ariaLabel: R.formatMessage(tk.viewThread),
                            children: R.formatMessage(tk.viewThread)
                        })
                    }, [W, q, D, R, f, m, O, $]), en = (0, r.useMemo)(() => {
                        var e, t;
                        if ("run-agent" !== f) return;
                        let r = m && (0, a().gY)(m, "run-agent") ? m : void 0;
                        return (null == r || null == (e = r.result) ? void 0 : e.workflowId) ? ? (0, n(368584).al)(null == r || null == (t = r.input) ? void 0 : t.agentUrl)
                    }, [f, m]), er = "run-agent" === f && (!en || en === n(180139).Lj), ea = er && V, eo = (0, n(682985).K8)(() => {
                        if (!ea) return !1;
                        let e = Z.previewThreadStore;
                        if (!e) return !1;
                        for (let t of e.getTranscript()) {
                            if ("agent-inference" !== t.type) continue;
                            let e = (0, e0().ie)(t);
                            for (let t of (0, eZ().lH)(e.value))
                                if ("tool_use" === t.type && (0, H().U3)(t.name)) return !0
                        }
                        return !1
                    }, [Z.previewThreadStore, ea]), ei = (0, r.useMemo)(() => {
                        if ("run-agent" === f && Z.shouldShowPreview && Z.previewThreadStore && (!ea || eo)) return function({
                            threadStore: e,
                            spaceStore: t,
                            workflowId: n,
                            viewThreadButton: r,
                            fallbackTitle: a
                        }) {
                            return {
                                key: `run-agent-thread-preview-${e.id}`,
                                items: [],
                                render: () => (0, u.jsx)(tj, {
                                    threadStore: e,
                                    viewThreadButton: r,
                                    fallbackTitle: a
                                })
                            }
                        }({
                            threadStore: Z.previewThreadStore,
                            spaceStore: A,
                            workflowId: en,
                            viewThreadButton: ee
                        })
                    }, [eo, Z.previewThreadStore, Z.shouldShowPreview, ea, f, en, A, ee]), es = (0, e1().WM)(f), {
                        isPendingUserFollowup: el,
                        isIteration: ed
                    } = (0, n(682985).K8)(() => {
                        if ("generate-plan" !== f || !m) return {
                            isPendingUserFollowup: !1,
                            isIteration: !1
                        };
                        let e = v.getTranscript(),
                            t = e.findIndex(e => e.id === m.id);
                        return -1 === t ? {
                            isPendingUserFollowup: !1,
                            isIteration: !1
                        } : {
                            isPendingUserFollowup: (0, n(997486).c1)(e, t) && (x || (0, n(997486).r$)(e, t)),
                            isIteration: e.slice(0, t).some(e => {
                                var t;
                                return "agent-tool-result" === e.type && (0, a().gY)(e, "generate-plan") && (null == (t = e.result) ? void 0 : t.planPageId)
                            })
                        }
                    }, [v, f, m, x]), ec = (0, n(682985).K8)(() => {
                        var e;
                        return null == (e = n(728372).AppStoreSidebarSpaceViewStore.state) || null == (e = e.getSettings()) || null == (e = e.agent_personalization_settings) ? void 0 : e.context_page_id
                    }, []), eu = (0, n(682985).K8)(() => {
                        if (!A || !m || !ec) return !1;
                        let e = (0, e1().PA)(m, A.id);
                        return 1 === e.length && e[0].table === c().evP && e[0].id === ec
                    }, [m, ec, A]), ep = (0, r.useMemo)(() => (function({
                        toolName: e,
                        agentAction: t,
                        isReferencingContextPage: r,
                        toolResultStep: a
                    }) {
                        if (t) {
                            var o = t,
                                i = r;
                            switch (o) {
                                case "create":
                                    return n(638501).plusSmallIcon;
                                case "update":
                                    return i ? n(652134).aiFaceSmallIcon : n(753114).pencilLineSmallIcon;
                                case "delete":
                                    return n(822973).trashSmallIcon;
                                default:
                                    (0, n(722371).HB)(o)
                            }
                            return
                        }
                        if ((0, H().og)(e)) {
                            let t;
                            return t = Q(e), X(e).icon ? ? n(525975).d.getDefaultIcon(t)
                        }
                        switch (e) {
                            case "search":
                            case "query-data-sources":
                                return n(330274).magnifyingGlassIcon;
                            case "queryCalendar":
                                return n(428602).Y;
                            case "queryMail":
                                return n(820997).D;
                            case "view":
                            case "view-version-history":
                            case "view-channel":
                            case "view-slack-channel":
                            case "view-code-repo":
                                return n(58838).eyeSmallIcon;
                            case "view-notifications":
                                return n(431644).k;
                            case "view-database-files":
                                return n(501148).Z;
                            case "create-database":
                            case "create-pages":
                                return n(581923).plusIcon;
                            case "update-database-data-sources":
                            case "update-database":
                                return n(334015).c;
                            case "update-database-views":
                                return n(950237).layoutIcon;
                            case "update-database-triggers":
                                return n(877163).m;
                            case "error":
                            case "markSessionFailed":
                                return n(367198).xMarkCircleFillIcon;
                            case "delete-pages":
                                return n(968411).trashIcon;
                            case "update-page":
                            case "update-page-v2":
                            case "generate-plan":
                                return n(636).pencilLineIcon;
                            case "edit-json":
                                throw Error("edit-json tool should not be used in the UI");
                            case "result":
                            case "remote-coding-agent-tool":
                            case "external-agent-tool":
                            case "enter-setup-mode":
                            case "exit-setup-mode":
                            case "create-agent":
                            case "create-agent-v2":
                            case "update-agent":
                            case "update-agent-v2":
                            case "delete-agent":
                            case "query-agent-threads":
                            case "investigate-agent-thread":
                            case "run-agent":
                            case "update-todos":
                            case "escalate":
                                return n(273344).aiFaceIcon;
                            case "query-salesforce-tool":
                                return n(68722).salesforceIcon;
                            case "list-machines":
                            case "create-machine":
                            case "destroy-machine":
                                return n(875399).i;
                            case "terminal":
                            case "runScript":
                                return n(430598).l;
                            case "browser":
                                return n(243599).c;
                            case "callFunction":
                                return (0, n(645604).JN)(a) ? n(789511).S : n(430598).l;
                            case "summarize-meeting-note":
                                return n(681875).a;
                            case "wait":
                                return n(789511).S;
                            case "generate-image":
                            case "status":
                            case "ask-survey":
                                return n(890468).sparklesIcon;
                            default:
                                (0, n(722371).HB)(e)
                        }
                    })({
                        toolName: f,
                        agentAction: es,
                        isReferencingContextPage: eu,
                        toolResultStep: m
                    }), [es, f, eu, m]), eg = (0, n(682985).K8)(() => {
                        if (A && m) return "create-database" === f || "update-database" === f ? function({
                            spaceStore: e,
                            toolType: t,
                            toolResultStep: n,
                            theme: r,
                            themeMode: o,
                            aiChatFeatureController: i
                        }) {
                            let s, l = n.threadOperations;
                            if ((0, a().gY)(n, "create-database") || (0, a().gY)(n, "update-database")) {
                                var d;
                                s = null == (d = n.result) ? void 0 : d.propertyDiff
                            }
                            s || (s = te({
                                toolName: t,
                                operations: (0, ta().tr)(l)
                            }));
                            let c = Object.keys(s);
                            if (0 !== c.length)
                                if (1 !== c.length) return tm({
                                    collectionIds: c,
                                    collectionIdToPropertyChangeInfos: s,
                                    theme: r,
                                    themeMode: o,
                                    aiChatFeatureController: i,
                                    spaceStore: e
                                });
                                else {
                                    let e = c[0],
                                        t = s[e];
                                    return tf({
                                        collectionId: e,
                                        propertyChangeInfos: t,
                                        theme: r,
                                        themeMode: o,
                                        aiChatFeatureController: i
                                    })
                                }
                        }({
                            toolResultStep: m,
                            theme: n(632079).Tj,
                            themeMode: P,
                            toolType: f,
                            aiChatFeatureController: S,
                            spaceStore: A
                        }) : tv({
                            spaceStore: A,
                            intl: R,
                            environment: D,
                            recordDiffInfos: U,
                            toolType: f,
                            toolResultStep: m,
                            theme: n(632079).Tj,
                            themeMode: P,
                            aiChatFeatureController: S,
                            openInSidePeek: E || void 0
                        })
                    }, [A, m, f, P, R, D, U, S, E]), ef = (0, n(682985).K8)(() => {
                        if (A) return (0, e5().ZX)({
                            environment: D,
                            spaceStore: A,
                            toolResultStep: m,
                            threadStore: v,
                            showDebug: T
                        })
                    }, [D, A, m, v, T]), em = [eg].filter(n(722371).O9), eh = (0, n(682985).uB)(void 0, n(419110).$), {
                        hasUndoneOperations: ey
                    } = (0, e1().ji)({
                        diffResultSteps: [m].filter(n(722371).O9),
                        threadStore: v
                    }), ev = m ? (0, d().rk)(m) : void 0, ex = M || k, eS = ey || "confirmation:rejected" === ev, eb = eS ? "reverted" : ex || C ? "loading" : "done", ej = null != m && m.error && (0, H().og)(f) ? J(f, {
                        intl: R,
                        isLoading: ex,
                        toolResultStep: m
                    }) : void 0, ew = (null == ej ? void 0 : ej.body) ? ? (null == m ? void 0 : m.error), eI = ew && S.supportsDetailedError ? {
                        key: `${(null==m?void 0:m.id)??f}-error`,
                        items: [],
                        render: e => (0, u.jsx)(n(844565).A, { ...e,
                            children: (0, u.jsx)(n(111010).D, {
                                styleKey: "body",
                                colorVariant: "secondary",
                                children: ew
                            })
                        })
                    } : void 0, eC = ("run-agent" === f ? [ei, eI] : [ei, ...ef ? ? [], ...em, eI]).filter(n(722371).O9), eM = eC.length > 0, ek = et({
                        toolName: f,
                        state: eb,
                        numResults: U.length,
                        intl: R,
                        toolResultStep: m,
                        toolUse: h,
                        externalToolName: y,
                        isReferencingContextPage: eu,
                        isLastStep: N,
                        titleStore: O
                    }), eT = r.useRef(void 0);
                    r.useEffect(() => {
                        _ && ek.trim().length > 0 && (eT.current = ek)
                    }, [_, ek]);
                    let eA = _ ? function(e) {
                            let {
                                toolName: t,
                                toolNameState: n,
                                toolNameString: r,
                                previousNonEmptyToolNameString: a
                            } = e;
                            return r.trim().length > 0 ? r : "callFunction" === t && "loading" === n && a && a.trim().length > 0 ? a : r
                        }({
                            toolName: f,
                            toolNameState: eb,
                            toolNameString: ek,
                            previousNonEmptyToolNameString: eT.current
                        }) : ek,
                        eR = (0, r.useMemo)(() => {
                            var e, t, n;
                            return !!m && ("callFunction" === f ? (0, a().gY)(m, "callFunction") && !!((null == (e = m.result) ? void 0 : e.error) ? ? m.error) : "runScript" === f ? (0, a().gY)(m, "runScript") && !!((null == (t = m.result) ? void 0 : t.runtimeError) || ((null == (n = m.result) || null == (n = n.typecheckErrors) ? void 0 : n.length) ? ? 0) > 0) : !!m.error)
                        }, [f, m]),
                        eD = !!(null == m ? void 0 : m.promptInjectionDetected),
                        eP = m && (0, a().gY)(m, "callFunction") ? null == (t = m.result) ? void 0 : t.headerLabel : void 0,
                        eF = (0, r.useMemo)(() => {
                            var e;
                            if (!eP) return v;
                            let t = (0, n(247438).moK)(eP).at(0),
                                r = null == (e = (0, n(247438)._vJ)(eP).at(0)) ? void 0 : e.pointer,
                                a = t ? ? r;
                            if (!a) return v;
                            let o = (0, n(354128).getAgentPreviewWrapper)(D).getInMemoryRecordCacheIfIsPreviewingRecord(a, D.currentUser.id);
                            return o ? a.table === c().evP ? new(eX()).B(D, a, {
                                inMemoryRecordCache: o
                            }) : a.table === c().VlP ? new(eJ()).m(D, a, {
                                inMemoryRecordCache: o
                            }) : v : v
                        }, [eP, D, v]),
                        eE = (0, n(682985).K8)(() => {
                            if (!eP) return;
                            let e = v.getSpaceId();
                            if (e) return (0, n(536614).S5)({
                                environment: D,
                                textValue: {
                                    value: eP,
                                    spaceId: e
                                },
                                parentStore: eF,
                                disableHover: !1,
                                disableStyleAnnotations: !1,
                                disableInsertedDeletedAnnotations: !1,
                                disableDateStyleAnnotations: !1,
                                disableSuggestionAnnotations: !1,
                                disableLinks: !1,
                                disabled: !1,
                                stopLinkPropagation: !0,
                                katex: F.value,
                                emojiType: (0, n(591404).FN)(D),
                                formulaValueTypes: [],
                                theme: n(632079).Tj,
                                themeMode: P
                            })
                        }, [eP, eF, D, v, F.value, P]) ? ? eA,
                        eN = !!("string" == typeof eE ? eE.trim().length > 0 : !!eE) && M,
                        eU = (0, r.useMemo)(() => {
                            let e = {
                                title: eE,
                                subtitle: K,
                                hasUndoneOperations: ey,
                                wasDeleted: null == m ? void 0 : m.wasDeleted,
                                state: ev
                            };
                            return "run-agent" === f ? (0, u.jsx)(n(99826).n, { ...e,
                                titleSuffix: Y
                            }) : !G || z || ey ? (0, u.jsx)(n(99826).n, { ...e,
                                titleSuffixStore: O,
                                isTitleSuffixStoreReady: z
                            }) : (0, u.jsx)(n(99826).n, { ...e,
                                titleSuffix: G
                            })
                        }, [ey, null == m ? void 0 : m.wasDeleted, Y, G, K, O, f, eE, ev, z]),
                        eV = (0, r.useMemo)(() => eD ? (0, u.jsxs)(n(4458).fI, {
                            gap: 4,
                            alignItems: "center",
                            justifyContent: "center",
                            className: "autolayout-row autolayout-fill-width",
                            style: tP,
                            children: [eU, (0, u.jsx)(n(856102).R, {})]
                        }) : eU, [eU, eD]),
                        e_ = function({
                            state: e,
                            toolName: t,
                            toolResultStep: n,
                            environment: r
                        }) {
                            var o, i, s, l;
                            switch (t) {
                                case "slack.createThreadInChannel":
                                    if ("done" === e) return e9({
                                        url: n && (0, a().gY)(n, "slack.createThreadInChannel") ? null == (o = n.result) ? void 0 : o.url : void 0,
                                        environment: r
                                    });
                                    break;
                                case "slack.createThreadInDirectMessage":
                                    if ("done" === e) return e9({
                                        url: n && (0, a().gY)(n, "slack.createThreadInDirectMessage") ? null == (i = n.result) ? void 0 : i.url : void 0,
                                        environment: r
                                    });
                                    break;
                                case "slack.replyInThread":
                                    if ("done" === e) return e9({
                                        url: n && (0, a().gY)(n, "slack.replyInThread") ? null == (s = n.result) ? void 0 : s.url : void 0,
                                        environment: r
                                    });
                                    break;
                                case "slack.updateMessage":
                                    if ("done" === e) return e9({
                                        url: n && (0, a().gY)(n, "slack.updateMessage") ? null == (l = n.result) ? void 0 : l.url : void 0,
                                        environment: r
                                    })
                            }
                        }({
                            toolName: f,
                            state: eb,
                            toolResultStep: m,
                            environment: D
                        }),
                        eB = ("create-pages" === f || "delete-pages" === f || "generate-plan" === f) && 1 === U.length,
                        eL = "result" === f && "done" === eb,
                        eK = (0, r.useCallback)(e => {
                            try {
                                B().trackToggleToolCard({
                                    environment: D,
                                    stepId: g,
                                    showResults: e,
                                    from: "tool_card",
                                    toolCardType: f,
                                    workflowId: (0, n(646440).getWorkflowIdFromStore)(v)
                                })
                            } catch (e) {}
                            null == j || j(e)
                        }, [D, f, g, v, j]),
                        eO = (null == m ? void 0 : m.toolName) ? ? (0, n(786380).yU)(f),
                        ez = null != m && m.input && "object" == typeof m.input && null !== m.input ? m.input : void 0,
                        eW = (0, n(786380).nz)(f, ez),
                        e$ = (0, n(645604).DC)({
                            toolResultStep: m,
                            toolUse: h
                        }),
                        eq = (0, r.useMemo)(() => {
                            if ((0, n(786380).D9)(eO) && m) return (0, n(22157).BE)(m)
                        }, [eO, m]),
                        eY = (0, r.useMemo)(() => eq ? eC.filter(e => "string" != typeof e.key || !e.key.startsWith("mail-tool-")) : eC, [eq, eC]),
                        eH = eY.length > 0 && !ey && !eB,
                        eG = (0, n(786380).D9)(eO) || (0, n(786380).T)(eW) || f.startsWith("calendar.") && ex || "callFunction" === f || "runScript" === f,
                        eQ = I || "run-agent" === f || "callFunction" === f || "runScript" === f || er && V,
                        e2 = (0, n(960253).I)(() => ({
                            scrollerStyle: {
                                maxHeight: eG ? void 0 : 200
                            },
                            minimalToolWrapper: {
                                borderRadius: 10,
                                boxShadow: eQ ? void 0 : `0 0 0 1px ${n(632079).Tj.border.secondary}, 0px 1px 2px rgba(0, 0, 0, 0.04)`,
                                transition: "box-shadow 0.15s ease-in-out",
                                marginInline: S.toolUsePartMarginInline,
                                ...eL && {
                                    borderRadius: 0,
                                    marginInline: 0,
                                    boxShadow: void 0
                                }
                            }
                        }), [eG, S.toolUsePartMarginInline, eL, eQ]),
                        e8 = tw(m),
                        e6 = (0, r.useMemo)(() => e8 ? (0, u.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            minWidth: 0,
                            flex: 1,
                            children: [(0, u.jsx)("div", {
                                style: tD,
                                children: eV
                            }), (0, u.jsx)(tI, {
                                environment: D,
                                threadStore: v,
                                toolResultStep: m,
                                toolIsLoading: ex,
                                toolIsReverted: eS
                            })]
                        }) : eV, [D, e8, v, eV, ex, eS, m]);
                    if (null != m && m.insufficientPermissions) return S.supportsRenderingPermissionError ? (0, u.jsx)(e4, {
                        toolName: f,
                        toolResultStep: m,
                        aiChatFeatureController: S
                    }) : null;
                    if ((null == m ? void 0 : m.errorCode) === "MAIL_ACCOUNT_NOT_CONNECTED") {
                        let e = "string" == typeof(null == (o = m.errorData) ? void 0 : o.connector) ? m.errorData.connector : void 0;
                        return (0, u.jsx)(e3, {
                            connector: e
                        })
                    }
                    if ((null == m ? void 0 : m.errorCode) === "MAIL_CREDENTIAL_OUT_OF_SYNC") {
                        let e = "string" == typeof(null == (i = m.errorData) ? void 0 : i.emailAddress) ? m.errorData.emailAddress : void 0;
                        return (0, u.jsx)(e3, {
                            isReconnect: !0,
                            connector: "notionMail",
                            emailAddress: e
                        })
                    }
                    if (m && (0, e1().eb)(m) && !S.supportsDetailedError) return null;
                    if ("escalate" === f) return (0, u.jsx)(n(111010).D, {
                        styleKey: "body",
                        color: "label-tertiary",
                        children: R.formatMessage(tA.switchedToFullChat)
                    });
                    if (M && !C && !k && !eM && 0 === U.length) return (0, u.jsx)("div", {
                        style: {
                            paddingInlineStart: _ && w ? 4 : void 0
                        },
                        children: (0, u.jsx)(n(473686).c, {
                            message: eA,
                            animationType: _ ? "none" : "scrolling-squiggle",
                            seed: v.id
                        })
                    });
                    if ("enter-setup-mode" === f || "calendar.fetchPlaybook" === f) return null;
                    if ("generate-plan" === f && eB && !M && !el) {
                        if (m && (0, a().gY)(m, "generate-plan") && (null == (s = m.result) ? void 0 : s.status) === "superseded") return null;
                        let e = "confirmation:rejected" === ev && m && (0, a().gY)(m, "generate-plan") && (null == (l = m.result) ? void 0 : l.status) === "awaiting_approval";
                        if ((!ey || e) && U[0]) return (0, u.jsx)(tB, {
                            recordPointer: U[0].recordPointer,
                            spaceId: (null == A ? void 0 : A.id) ? ? "",
                            environment: D,
                            shouldOpenInSidePeek: E,
                            threadStore: v,
                            isIteration: ed,
                            isDiscarded: e
                        })
                    }
                    let e7 = "callFunction" !== f && "runScript" !== f,
                        tt = e.forceExpanded || e$ || "result" === (p = f) || "create-agent" === p || "create-agent-v2" === p || "exit-setup-mode" === p || e7 && (k || M) || (0, n(786380).T)(eW) && k,
                        tn = eL ? (0, u.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            initialFocus: void 0,
                            resetFocusOnMouseOut: !0,
                            sections: eY,
                            store: eh,
                            disableKeyboard: !0,
                            style: tR
                        }) : (0, u.jsx)(n(126767).H, {
                            type: n(644154).A.Y,
                            style: { ...e2.scrollerStyle,
                                ...e2.minimalToolWrapper
                            },
                            children: (0, u.jsx)(n(558045).A, {
                                type: n(558045).O.Vertical,
                                initialFocus: void 0,
                                resetFocusOnMouseOut: !0,
                                sections: eY,
                                store: eh,
                                disableKeyboard: !0
                            })
                        }),
                        tr = (0, u.jsx)(n(374201).K, {
                            hideOrigin: eL,
                            isExpandable: eH,
                            icon: ep,
                            toolRunning: eN,
                            isExpandedOverride: tt,
                            onNonExpandableClick: e_,
                            onExpandedChange: eK,
                            title: eL ? void 0 : e6,
                            statusIcon: eR ? n(367198).xMarkCircleFillIcon : void 0,
                            hideIcon: w,
                            content: tn,
                            variant: "agent_mobile" === S.aiChatType ? "large" : "default"
                        });
                    return eq ? (0, u.jsxs)(u.Fragment, {
                        children: [tr, (0, u.jsx)(n(861873).$, {
                            from: eq.from,
                            to: eq.to,
                            cc: eq.cc,
                            bcc: eq.bcc,
                            subject: eq.subject,
                            text: eq.text
                        })]
                    }) : tr
                });

            function tB(e) {
                let {
                    recordPointer: t,
                    spaceId: a,
                    environment: o,
                    shouldOpenInSidePeek: i,
                    threadStore: s,
                    isIteration: l,
                    isDiscarded: d = !1
                } = e, c = (0, n(972740).L)(), [p, g] = r.useState(!1), f = r.useRef(null), [m, h] = r.useState(void 0), y = c ? eX().B.createChildStore(c, t) : void 0;
                r.useEffect(() => {
                    let e = f.current;
                    if (!e) return;
                    let t = new ResizeObserver(e => {
                        let t = e[0];
                        t && h(t.contentRect.width)
                    });
                    return t.observe(e), () => t.disconnect()
                }, []);
                let v = void 0 !== m && m >= 320,
                    x = (0, r.useCallback)(e => {
                        y && ((0, n(104310).u)({
                            event: {
                                eventName: "plan_page_opened",
                                eventProperties: {
                                    thread_id: s.id,
                                    plan_page_id: t.id,
                                    is_iteration: l
                                }
                            }
                        }), (0, n(545586).navigateToBlock)({
                            environment: o,
                            store: y,
                            pageVisitSource: n(254656).y8.AIChat,
                            openInNew: (0, n(7029).V)(e),
                            openInSidePeek: i || void 0,
                            chatThreadId: s.id
                        }))
                    }, [o, y, i, s, t.id, l]),
                    S = (0, r.useCallback)(e => {
                        e.stopPropagation(), x(e)
                    }, [x]),
                    b = d ? tT.discardedPlan : l ? tT.updatedPlan : tT.createdPlan,
                    j = (0, n(960253).I)(() => ({
                        container: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 6,
                            borderRadius: 16,
                            boxShadow: p ? `0 0 0 1px ${n(632079).Tj.border.primaryTranslucent}, ${n(632079).Tj.shadow.base.md}` : `0 0 0 1px ${n(632079).Tj.border.secondaryTranslucent}, ${n(632079).Tj.shadow.base.sm}`,
                            backgroundColor: n(632079).Tj.background.primary,
                            padding: 12,
                            minHeight: v ? 100 : void 0,
                            cursor: "pointer",
                            overflow: "hidden",
                            position: "relative"
                        },
                        textContainer: { ...tE,
                            maxWidth: v ? "55%" : void 0
                        }
                    }), [p, v]);
                return (0, u.jsx)("div", {
                    ref: f,
                    style: tF,
                    children: (0, u.jsxs)("div", {
                        role: "button",
                        tabIndex: 0,
                        style: j.container,
                        onClick: x,
                        onMouseEnter: () => g(!0),
                        onMouseLeave: () => g(!1),
                        children: [(0, u.jsxs)(n(4458).VP, {
                            gap: 8,
                            width: "100%",
                            children: [(0, u.jsx)(n(4458).VP, {
                                flex: 1,
                                minWidth: 0,
                                justifyContent: "flex-start",
                                gap: 8,
                                marginTop: 2,
                                children: (0, u.jsxs)("div", {
                                    style: j.textContainer,
                                    children: [(0, u.jsx)(n(111010).D, {
                                        styleKey: "bodyMedium",
                                        children: (0, u.jsx)(n(109939).sA, { ...b
                                        })
                                    }), d ? null : (0, u.jsx)(n(111010).D, {
                                        styleKey: "captionRegular",
                                        colorVariant: "secondary",
                                        children: (0, u.jsx)(n(109939).sA, { ...tT.reviewAndApprove
                                        })
                                    })]
                                })
                            }), (0, u.jsx)("div", {
                                style: tN,
                                children: (0, u.jsx)(n(265779).E, {
                                    size: "md",
                                    onClick: S,
                                    children: (0, u.jsx)(n(111010).D, {
                                        styleKey: "bodyMedium",
                                        children: (0, u.jsx)(n(109939).sA, { ...tT.openPage
                                        })
                                    })
                                })
                            })]
                        }), v ? (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsx)("div", {
                                style: tU,
                                children: (0, u.jsx)(n(622356).l, {
                                    pageId: t.id,
                                    spaceId: a
                                })
                            }), (0, u.jsx)("div", {
                                style: tV
                            })]
                        }) : null]
                    })
                })
            }
            let tL = ["weekly-project-update", "morning-brief", "slack-task-triager"],
                tK = {
                    borderRadius: 34,
                    minHeight: 32,
                    paddingTop: 6,
                    paddingInlineEnd: 10,
                    paddingBottom: 6,
                    paddingInlineStart: 8
                },
                tO = {
                    width: 20,
                    height: 20
                },
                tz = {
                    transition: "opacity 800ms ease-in-out"
                };

            function tW({
                threadStore: e
            }) {
                let t = (0, n(533992).v3)(),
                    a = (0, n(109939).tz)(),
                    [o, i] = (0, r.useState)(null),
                    s = (0, n(682985).O$)(n(674880).defaultInferenceContextStore),
                    l = (0, n(639938).V)(),
                    d = (0, n(682985).K8)(() => e.getSpaceStore(), [e]),
                    {
                        templates: c
                    } = (0, n(37897).C)(),
                    p = c.filter(e => tL.some(t => t === e.id)),
                    g = (0, e1().pg)({
                        numItems: p.length
                    }),
                    f = (0, r.useCallback)(async e => {
                        if (d && l && !o) {
                            i(e.id);
                            try {
                                await (0, n(366758).h)({
                                    environment: t,
                                    spaceStore: d,
                                    inferenceContext: s,
                                    template: e,
                                    intl: a,
                                    analytics: {
                                        origin: "personal_agent_suggested_action"
                                    }
                                })
                            } catch (r) {
                                let t = r instanceof Error ? r : Error("Failed to duplicate template");
                                n(773352).log({
                                    level: "warning",
                                    from: "customAgentTemplatePicker",
                                    type: "duplicateTemplateFailed",
                                    data: {
                                        miscDataToConvertToString: {
                                            templateId: e.id,
                                            templateTitle: e.title,
                                            error: t.message
                                        }
                                    }
                                }), (0, n(222024).t)().error({
                                    from: "customAgentTemplatePicker",
                                    type: "duplicateTemplateFailed",
                                    error: t,
                                    data: {
                                        miscDataToConvertToString: {
                                            templateId: e.id,
                                            templateTitle: e.title
                                        }
                                    }
                                })
                            } finally {
                                i(null)
                            }
                        }
                    }, [d, l, o, t, s, a]);
                return (0, u.jsx)(n(4458).VP, {
                    alignItems: "flex-start",
                    gap: 8,
                    inline: !0,
                    children: p.map((e, t) => (0, u.jsx)("div", {
                        style: { ...tz,
                            opacity: +!!g.has(t)
                        },
                        children: (0, u.jsx)(n(265779).E, {
                            style: tK,
                            onClick: () => f(e),
                            isLoading: o === e.id,
                            disabled: null !== o,
                            children: (0, u.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 4,
                                children: [(0, u.jsx)("img", {
                                    src: e.iconUrl,
                                    alt: e.title,
                                    style: tO
                                }), (0, u.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    children: e.title
                                })]
                            })
                        })
                    }, e.id))
                })
            }
            let t$ = (0, n(109939).YK)({
                foundResultsCount: {
                    id: "agentSearchToolUsePart.searchFoundResultsCount",
                    defaultMessage: "Found {count, plural, one {# result} other {{formattedCount} results}}"
                }
            });
            var tq = () => n(386485);
            let tY = {
                    padding: 8
                },
                tH = {
                    position: "relative"
                };

            function tG({
                agentSearchResultsBySourceType: e,
                selectedSourceType: t,
                onChange: a,
                aiChatFeatureController: o
            }) {
                let i = (0, n(533992).v3)(),
                    s = (0, n(723240).r)(),
                    l = (0, n(109939).tz)(),
                    d = (0, r.useId)(),
                    c = (0, n(83208).X)("notion_ai_workspace_settings"),
                    p = (0, n(682985).K8)(() => (0, n(876688).Nr)().length > 0, []),
                    g = "agent_mobile" === o.aiChatType,
                    f = c && p && !g,
                    m = (0, n(217844)._)({
                        name: "ai_connectors",
                        spaceId: s,
                        userId: i.currentUser.id
                    }),
                    h = (0, r.useCallback)(() => {
                        (0, n(622081).pp)({
                            environment: i,
                            connector: "generic",
                            analyticsFrom: "ai_chat_search_results_tab",
                            connectorsFeatureAvailability: m
                        })
                    }, [m, i]),
                    y = (0, r.useRef)(null),
                    [v, x] = (0, r.useState)(0);
                (0, n(729787).tK)(y, () => {
                    y.current && x(y.current.clientWidth)
                });
                let S = (0, r.useRef)(null),
                    [b, j] = (0, r.useState)(0);
                (0, r.useEffect)(() => {
                    S.current && j(S.current.clientWidth)
                }, [S]);
                let w = (0, r.useMemo)(() => Array.from(e.keys()), [e]),
                    I = (0, n(682985).K8)(() => {
                        let e = new Map;
                        for (let t of w) e.set(t, "top-results" === t ? l.formatMessage({
                            id: "AgentSearchSourceTabs.topResults",
                            defaultMessage: "Top results"
                        }) : (0, tq().$b)({
                            searchSourceType: t,
                            environment: i,
                            intl: l
                        }));
                        return e
                    }, [w, i, l]),
                    C = (0, r.useMemo)(() => new(n(529623)).k({
                        style: {
                            fontFamily: "system-ui, sans-serif"
                        }
                    }), []),
                    M = (0, r.useMemo)(() => (function({
                        availableSourceTypes: e,
                        availableWidth: t,
                        selectedSourceType: n,
                        agentSearchResultsBySourceType: r,
                        sourceTypeToLabel: a,
                        widthEstimator: o,
                        moreButtonWidth: i
                    }) {
                        let s = [],
                            l = 0,
                            d = new Map;
                        for (let t of e) {
                            var c;
                            let e = a.get(t) ? ? "",
                                n = (null == (c = r.get(t)) ? void 0 : c.length) ? ? 0,
                                i = o.measure(e).width + o.measure(`${n}`).width + 60;
                            l += i, d.set(t, i)
                        }
                        let u = 0;
                        for (let n of (l > t && (u += i), e)) {
                            let e = d.get(n) ? ? 0;
                            if (u + e > t) break;
                            s.push(n), u += e
                        }
                        if (!s.includes(n)) {
                            let e = d.get(n) ? ? 0;
                            for (; s.length > 0;) {
                                let n = s.pop();
                                if (!n || (u -= d.get(n) ? ? 0) + e <= t) break
                            }
                            s.push(n)
                        }
                        return s
                    })({
                        availableSourceTypes: w,
                        availableWidth: v,
                        selectedSourceType: t,
                        agentSearchResultsBySourceType: e,
                        sourceTypeToLabel: I,
                        widthEstimator: C,
                        moreButtonWidth: b
                    }), [w, v, t, e, I, C, b]),
                    k = (0, r.useMemo)(() => w.filter(e => !M.includes(e)), [w, M]);
                return (0, u.jsx)(n(943019).Y, {
                    direction: "horizontal",
                    children: (0, u.jsx)("div", {
                        role: "tablist",
                        "aria-label": l.formatMessage({
                            id: "agentSearchSourceTabs.accessibilityLabel",
                            defaultMessage: "Search source tabs"
                        }),
                        id: d,
                        style: tY,
                        children: (0, u.jsxs)(n(4458).fI, {
                            ref: y,
                            gap: 1,
                            alignItems: "center",
                            className: "autolayout-row autolayout-fill-width",
                            style: tH,
                            children: [M.map(n => {
                                let r = e.get(n),
                                    o = (null == r ? void 0 : r.length) ? ? 0;
                                return (0, u.jsx)(tQ, {
                                    sourceType: n,
                                    sourceLabel: I.get(n),
                                    count: o,
                                    isSelected: n === t,
                                    onChange: a,
                                    tabListId: d
                                }, n)
                            }), k.length > 0 ? (0, u.jsx)(tZ, {
                                moreButtonRef: S,
                                tabListId: d,
                                overflowSourceTypes: k,
                                sourceTypeToLabel: I,
                                selectedSourceType: t,
                                onChange: a,
                                agentSearchResultsBySourceType: e,
                                showConnectMore: f,
                                onConnectMore: h
                            }) : f ? (0, u.jsx)(tJ, {
                                onConnectMore: h
                            }) : null]
                        })
                    })
                })
            }
            let tQ = (0, r.memo)(function({
                sourceType: e,
                sourceLabel: t,
                count: a,
                isSelected: o,
                onChange: i,
                tabListId: s
            }) {
                let l = (0, tq().dM)(e),
                    d = (0, r.useCallback)(() => {
                        i(e)
                    }, [i, e]);
                return (0, u.jsx)(tX, {
                    tabListId: s,
                    isSelected: o,
                    onClick: d,
                    children: (0, u.jsxs)(n(4458).fI, {
                        gap: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        className: "autolayout-row autolayout-fill-width",
                        style: tH,
                        children: [l ? (0, u.jsx)(n(218993).$x, {
                            iconGroup: l,
                            iconSize: "sm"
                        }) : null, (0, u.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: o ? "primary" : "secondary",
                            children: t
                        }), (0, u.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: o ? "secondary" : "tertiary",
                            children: a
                        })]
                    })
                })
            });

            function tX({
                tabListId: e,
                isSelected: t,
                onClick: r,
                children: a
            }) {
                let {
                    isTabbable: o,
                    itemRef: i,
                    onKeyDown: s,
                    onFocus: l
                } = (0, n(943019).e)(), d = (0, n(960253).I)(() => ({
                    button: { ...t && {
                            background: n(632079).Tj.background.tertiaryTranslucent
                        }
                    }
                }), [t]);
                return (0, u.jsx)(n(988022).p, {
                    ref: i,
                    size: "lg",
                    shape: "pill",
                    onClick: r,
                    onKeyDown: s,
                    onFocus: l,
                    style: d.button,
                    "aria-selected": t,
                    "aria-controls": e,
                    role: "tab",
                    disallowTabbing: !o,
                    children: a
                })
            }

            function tJ({
                onConnectMore: e
            }) {
                let t = (0, n(109939).tz)().formatMessage({
                    id: "AgentSearchSourcePicker.connectMoreTabLabel",
                    defaultMessage: "Add sources"
                });
                return (0, u.jsx)(n(51831).m, {
                    placement: "top",
                    content: () => t,
                    children: t => (0, u.jsx)(n(988022).p, {
                        size: "lg",
                        shape: "pill",
                        onClick: e,
                        ...t,
                        children: (0, u.jsx)(n(16275).I, {
                            icon: n(638501).plusSmallIcon,
                            size: "sm"
                        })
                    })
                })
            }

            function tZ({
                tabListId: e,
                overflowSourceTypes: t,
                sourceTypeToLabel: r,
                selectedSourceType: a,
                onChange: o,
                agentSearchResultsBySourceType: i,
                showConnectMore: s,
                onConnectMore: l,
                moreButtonRef: d
            }) {
                return (0, u.jsx)(n(656252).A, {
                    alignmentToOrigin: "start",
                    placementToOrigin: "bottom",
                    originGap: 4,
                    popupType: n(656252).z.Popup,
                    content: () => (0, u.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        width: 220,
                        children: (0, u.jsxs)(n(844565).A, {
                            children: [t.map(e => (0, u.jsx)(t0, {
                                sourceType: e,
                                sourceLabel: r.get(e),
                                agentSearchResultsBySourceType: i,
                                selectedSourceType: a,
                                onSelect: () => {
                                    o(e)
                                }
                            }, e)), s ? (0, u.jsx)(n(95582).A, {
                                focused: !1,
                                onClick: () => {
                                    l()
                                },
                                icon: (0, u.jsx)(n(16275).I, {
                                    size: "sm",
                                    colorVariant: "secondary",
                                    icon: n(638501).plusSmallIcon
                                }),
                                title: (0, u.jsx)(n(109939).sA, {
                                    id: "AgentSearchSourcePicker.connectMore",
                                    defaultMessage: "Add sources"
                                })
                            }) : null]
                        })
                    }),
                    children: r => (0, u.jsx)("div", {
                        ref: d,
                        children: (0, u.jsx)(tX, {
                            tabListId: e,
                            isSelected: !1,
                            onClick: () => r.onClick(),
                            children: (0, u.jsxs)(n(4458).fI, {
                                gap: 8,
                                alignItems: "center",
                                justifyContent: "center",
                                className: "autolayout-row autolayout-fill-width",
                                style: tH,
                                children: [(0, u.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "secondary",
                                    children: (0, u.jsx)(n(109939).sA, {
                                        id: "AgentSearchSourcePicker.more",
                                        defaultMessage: "More"
                                    })
                                }), (0, u.jsx)(n(111010).D, {
                                    styleKey: "captionMedium",
                                    colorVariant: "tertiary",
                                    children: t.length
                                })]
                            })
                        })
                    })
                })
            }

            function t0({
                sourceType: e,
                sourceLabel: t,
                agentSearchResultsBySourceType: r,
                selectedSourceType: a,
                onSelect: o
            }) {
                let i = r.get(e),
                    s = (null == i ? void 0 : i.length) ? ? 0,
                    l = (0, tq().dM)(e);
                return (0, u.jsx)(n(95582).A, {
                    focused: !1,
                    onClick: o,
                    icon: l ? (0, u.jsx)(n(218993).$x, {
                        iconGroup: l,
                        iconSize: "sm"
                    }) : void 0,
                    title: t,
                    right: s > 0 ? (0, u.jsx)(n(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "tertiary",
                        children: s
                    }) : void 0,
                    isChecked: e === a
                })
            }
            let t1 = {
                pointerEvents: "none",
                display: "inline-block",
                maxWidth: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            };

            function t9({
                items: e,
                queryFontWeight: t
            }) {
                let {
                    value: a
                } = (0, n(815048).fJ)(n(448988).fM), [o, i] = (0, r.useState)(() => {
                    var t;
                    return (null == (t = e[0]) ? void 0 : t.key) ? ? null
                }), s = (0, r.useRef)(e);
                (0, r.useEffect)(() => {
                    s.current = e
                }, [e]), (0, r.useEffect)(() => {
                    0 === e.length ? i(null) : i(t => {
                        var n;
                        return t && e.some(e => e.key === t) ? t : (null == (n = e[0]) ? void 0 : n.key) ? ? null
                    })
                }, [e]), (0, r.useEffect)(() => {
                    if ("u" < typeof window || e.length <= 1) return;
                    let t = window.setInterval(() => {
                        i(e => {
                            var t;
                            let n = s.current;
                            if (0 === n.length) return null;
                            let r = e ? n.findIndex(t => t.key === e) : -1,
                                a = r >= 0 && r < n.length - 1 ? r + 1 : 0;
                            return (null == (t = n[a]) ? void 0 : t.key) ? ? null
                        })
                    }, 2500);
                    return () => {
                        window.clearInterval(t)
                    }
                }, [e.length]);
                let l = (o ? e.find(e => e.key === o) : void 0) ? ? e[0];
                if (!l) return null;
                let d = void 0 === t ? t1 : { ...t1,
                    fontWeight: t
                };
                if (!a) return (0, u.jsx)("span", {
                    style: d,
                    children: l.text
                });
                let {
                    AnimatePresence: c,
                    motion: p
                } = a;
                return (0, u.jsx)(c, {
                    mode: "popLayout",
                    initial: !1,
                    children: (0, u.jsx)(p.span, {
                        initial: {
                            y: 16,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: -16,
                            opacity: 0
                        },
                        transition: {
                            duration: .45,
                            ease: [.4, 0, .2, 1]
                        },
                        style: d,
                        children: l.text
                    }, l.key)
                })
            }

            function t5({
                sourceTypes: e
            }) {
                return (0, u.jsx)(u.Fragment, {
                    children: e.filter(e => "top-results" !== e).map(e => {
                        let t = (0, tq().dM)(e);
                        return t ? (0, u.jsx)(n(218993).$x, {
                            iconGroup: t,
                            iconSize: "xs"
                        }, e) : null
                    })
                })
            }
            let t2 = {
                titleContainer: {
                    flex: 1,
                    minWidth: 0,
                    overflow: "hidden"
                },
                headerText: {
                    flex: 1,
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    marginInlineEnd: 4
                },
                resultWrapper: {
                    borderRadius: 10,
                    overflow: "hidden",
                    boxShadow: `0 0 0 1px ${n(632079).Tj.border.secondary}, 0px 1px 2px rgba(0, 0, 0, 0.04)`,
                    transition: "box-shadow 0.15s ease-in-out"
                },
                style0: {
                    maxHeight: 200
                },
                style1: {
                    paddingTop: 12,
                    paddingBottom: 4,
                    paddingInlineEnd: 14,
                    paddingInlineStart: 14
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function t8(e) {
                let t = (0, n(533992).v3)(),
                    o = (0, n(972740).L)(),
                    i = (0, n(109939).tz)(),
                    {
                        bodyStyleKey: s
                    } = (0, n(765846).yq)(),
                    l = (0, n(83208).X)("agent_search_cohere_ranking"),
                    c = (0, n(83208).X)("agent_polish_2026"),
                    {
                        toolResultStep: p,
                        threadStore: g,
                        clientStore: f,
                        runningInference: m,
                        isLastTurn: h,
                        aiChatFeatureController: y,
                        onExpandedChange: v,
                        queryGenSteps: x,
                        hideIcon: S = !1
                    } = e,
                    b = null == p ? void 0 : p.id,
                    j = null == p ? void 0 : p.traceId,
                    w = (0, r.useMemo)(() => {
                        let e = [],
                            t = new Set;
                        return null == x || x.forEach(n => {
                            n.queries.forEach((r, a) => {
                                let o = (r.questionIntl ? ? r.question ? ? r.keywords).trim();
                                !o || t.has(o) || (t.add(o), e.push({
                                    key: `${n.id}-${a}`,
                                    text: o
                                }))
                            })
                        }), e
                    }, [x]),
                    I = (0, r.useMemo)(() => {
                        try {
                            return f.getOrCreateClientAIChatThreadStore(g.id)
                        } catch (e) {
                            return null
                        }
                    }, [f, g.id]),
                    C = (0, n(682985).K8)(() => {
                        var e;
                        if (!b || !I) return;
                        let t = null == (e = I.state.agentSearchResultsByToolResultStepId) ? void 0 : e[b];
                        return null == t ? void 0 : t.results
                    }, [I, b]),
                    [M, k] = (0, r.useState)(void 0),
                    T = (0, r.useRef)(null),
                    A = (0, n(682985).uB)(void 0, n(931030).D);
                (0, n(656484).c2)({
                    containerRef: T,
                    citationHoverStore: A,
                    parentStore: o,
                    evaluatorState: void 0
                });
                let R = (0, e1().I)({
                        runningInference: m,
                        toolResultStep: p,
                        isLastTurn: h
                    }),
                    D = !!(p && (0, d().I6)(p)),
                    P = (0, r.useMemo)(() => p && (0, a().gY)(p, "search") ? (0, tq().oQ)({
                        isCohereRankingEnabled: l,
                        resultStep: p,
                        overrideResults: C
                    }) : new Map, [l, p, C]),
                    F = (0, r.useMemo)(() => Array.from(P.keys()), [P]);
                (0, r.useEffect)(() => {
                    let e = F[0];
                    e && !M && k(e)
                }, [P, M, F]);
                let E = (0, r.useMemo)(() => M ? P.get(M) ? ? [] : [], [P, M]),
                    N = (0, r.useMemo)(() => E.reduce((e, t) => (e[t.id] = t, e), {}), [E]),
                    U = (0, tq().be)({
                        citationContext: N
                    }),
                    V = (0, r.useMemo)(() => {
                        let e = 0;
                        for (let t of P.values()) e += t.length;
                        return e
                    }, [P]),
                    _ = (0, n(682985).K8)(() => {
                        if (!o) return [];
                        if (p && (0, a().gY)(p, "search")) {
                            var e;
                            (null == (e = p.result) || null == (e = e.extractedResults) ? void 0 : e.map(e => e.id)) ? ? []
                        }
                        return E.map((e, n) => {
                            let r = (0, tq().eL)({
                                index: n,
                                result: e,
                                environment: t,
                                spaceStore: o,
                                hoverStore: A,
                                threadStore: g,
                                showUsedByLLM: !1
                            });
                            return r ? {
                                menuItem: r,
                                result: e,
                                position: n
                            } : void 0
                        }).filter(n(722371).O9).map(({
                            menuItem: e,
                            result: n,
                            position: r
                        }) => ({ ...e,
                            action: a => {
                                var o;
                                return B().trackAgentSearchResultClicked({
                                    environment: t,
                                    threadStore: g,
                                    resultId: n.id,
                                    searchSourceType: n.searchSourceType,
                                    source: "search_results",
                                    position: r,
                                    traceId: j,
                                    stepId: b
                                }), null == (o = e.action) ? void 0 : o.call(e, a)
                            }
                        }))
                    }, [E, t, o, A, g, j, b, p, f]),
                    L = (0, r.useMemo)(() => 0 === _.length ? [] : [{
                        key: `search-results-${M}`,
                        items: _
                    }], [_, M]),
                    K = L.length > 0,
                    O = (0, n(682985).uB)(void 0, n(419110).$),
                    z = p ? (0, d().rk)(p) : void 0,
                    W = et({
                        toolName: "search",
                        state: "confirmation:rejected" === z ? "reverted" : R || D ? "loading" : "done",
                        numResults: V,
                        intl: i,
                        toolResultStep: p
                    }),
                    $ = (0, r.useMemo)(() => {
                        var e, t, n, r;
                        if (p && (0, a().gY)(p, "search") && p.input) {
                            if (null != (e = p.input) && null != (e = e.default) && e.questions.length) return p.input.default.questions[0];
                            else if (null != (t = p.input) && null != (t = t.internal) && t.questions.length) return p.input.internal.questions[0];
                            else if (null != (n = p.input) && null != (n = n.web) && n.queries.length) return p.input.web.queries[0];
                            else if (null != (r = p.input) && null != (r = r.users) && r.queries.length) return p.input.users.queries[0]
                        }
                    }, [p]),
                    q = !!($ && $.length > 0),
                    Y = (null == p ? void 0 : p.toolName) === "search.search",
                    H = V >= 99 ? "99+" : String(V),
                    G = i.formatMessage({
                        id: "agentSearchToolUsePart.toolNameMessage",
                        defaultMessage: "{toolName} for"
                    }, {
                        toolName: W
                    }),
                    Q = (0, r.useMemo)(() => {
                        if (w.length > 0) return w;
                        let e = null == $ ? void 0 : $.trim();
                        return e ? [{
                            key: `fallback-${b??"query"}`,
                            text: e
                        }] : []
                    }, [w, $, b]),
                    X = (0, r.useMemo)(() => (0, u.jsx)(n(99826).n, {
                        title: q ? G : W,
                        titleSuffix: q ? `"${$}"` : void 0,
                        subtitle: void 0,
                        hasUndoneOperations: !1,
                        state: z
                    }), [q, $, W, G, z]),
                    J = p && (0, d().nP)(p) ? K && V > 0 : void 0,
                    Z = (0, r.useMemo)(() => K && M && o ? (0, u.jsxs)(u.Fragment, {
                        children: [P.size > 1 ? (0, u.jsx)(tG, {
                            agentSearchResultsBySourceType: P,
                            selectedSourceType: M,
                            onChange: k,
                            aiChatFeatureController: y
                        }) : null, (0, u.jsxs)(n(337336).K, {
                            from: "AgentSearchToolUsePart",
                            fallback: ({
                                errorId: e,
                                error: t
                            }) => (0, u.jsx)(n(789682).LargeSurfaceRenderError, {
                                errorId: e,
                                error: t
                            }),
                            children: [(0, u.jsx)(n(136508)._, {
                                type: n(644154).A.Y,
                                style: t2.style0,
                                children: (0, u.jsx)(n(558045).A, {
                                    type: n(558045).O.Vertical,
                                    initialFocus: void 0,
                                    resetFocusOnMouseOut: !0,
                                    sections: L,
                                    store: O,
                                    disableKeyboard: !0
                                })
                            }), (0, u.jsx)(n(417115).cE, {
                                containerRef: T,
                                hoverStore: A,
                                parentStore: o,
                                isSearchChat: !1,
                                getPayloadDataForHref: U
                            })]
                        })]
                    }) : null, [P, K, O, L, M, k, o, A, U, y]),
                    ee = (0, r.useCallback)(e => {
                        j && B().trackAgentSearchStepToggleResults({
                            threadStore: g,
                            traceId: j,
                            showResults: e,
                            from: "agent_search_tool_use"
                        }), null == v || v(e)
                    }, [g, j, v]);
                return o ? p && (0, e1().eb)(p) ? (0, u.jsx)(er, {
                    toolName: "search",
                    variant: "agent_mobile" === y.aiChatType ? "large" : "default"
                }) : !R || D || K || 0 !== V ? (0, u.jsx)(n(374201).K, {
                    isExpandable: J ? ? !1,
                    icon: n(921048).magnifyingGlassSmallIcon,
                    onExpandedChange: ee,
                    hideIcon: S,
                    title: (0, u.jsxs)(n(4458).fI, {
                        gap: 4,
                        className: "autolayout-row autolayout-fill-width",
                        alignItems: "center",
                        justifyContent: "center",
                        style: t2.positionRelative,
                        children: [(0, u.jsx)(n(111010).D, {
                            styleKey: s,
                            style: t2.headerText,
                            children: (0, u.jsx)(n(109939).sA, { ...t$.foundResultsCount,
                                values: {
                                    count: V,
                                    formattedCount: H
                                }
                            })
                        }), (0, u.jsx)(n(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            flexShrink: 0,
                            children: (0, u.jsx)(t5, {
                                sourceTypes: F
                            })
                        })]
                    }),
                    content: (0, u.jsxs)("div", {
                        style: t2.resultWrapper,
                        ref: T,
                        children: [Y ? null : (0, u.jsx)("div", {
                            style: { ...t2.titleContainer,
                                ...t2.style1
                            },
                            children: X
                        }), Z]
                    }),
                    variant: "agent_mobile" === y.aiChatType ? "large" : "default"
                }) : (0, u.jsx)("div", {
                    style: {
                        paddingInlineStart: c && S ? 4 : void 0
                    },
                    children: (0, u.jsx)(n(473686).c, {
                        message: q && 0 === Q.length ? `${G} "${$}"` : W,
                        animationType: c ? "none" : "scrolling-squiggle",
                        seed: g.id,
                        children: Q.length > 0 ? (0, u.jsx)(t9, {
                            items: Q
                        }) : null
                    })
                }) : null
            }

            function t3(e) {
                let {
                    partData: t,
                    aiChatFeatureController: a,
                    threadStore: o,
                    clientStore: i,
                    runningInference: s,
                    isLastTurn: l,
                    turnSteps: d,
                    blurOnExpand: c,
                    hideIcons: p = !1,
                    onFollowUpSelect: g,
                    feedbackComponentIndex: f
                } = e, m = (0, n(533992).v3)(), h = (0, r.useCallback)(e => {
                    c && e && (0, n(471e3).I)({
                        environment: m
                    })
                }, [c, m]), y = (0, n(682985).K8)(() => (0, n(446062).F)(o.id), [o.id]);
                switch ((0, r.useEffect)(() => {
                    "follow-ups" !== t.type && l && !s && y && n(562733).zI.setState({ ...n(562733).zI.state,
                        focusRequest: {
                            chatFeatureType: "agent",
                            id: `no-followups-focus-${Date.now()}`
                        }
                    })
                }, [t, l, s, y]), t.type) {
                    case "thinking":
                        return (0, u.jsx)(eQ, {
                            thinkingPartData: t,
                            aiChatFeatureController: a,
                            onExpandedChange: h,
                            runningInference: s,
                            hideIcon: p
                        });
                    case "chat":
                        return (0, u.jsx)(_, {
                            chatPartData: t,
                            aiChatFeatureController: a,
                            threadStore: o,
                            clientStore: i,
                            feedbackComponentIndex: f
                        });
                    case "search-tool-use":
                        return (0, u.jsx)(t8, {
                            toolResultStep: t.toolResultStep,
                            threadStore: o,
                            clientStore: i,
                            runningInference: s,
                            isLastTurn: l,
                            aiChatFeatureController: a,
                            onExpandedChange: h,
                            queryGenSteps: t.queryGenSteps,
                            hideIcon: p
                        });
                    case "follow-ups":
                        return (0, u.jsx)(z, {
                            partData: t,
                            onFollowUpSelect: g,
                            isLastTurn: l,
                            threadId: o.id,
                            threadStore: o,
                            aiChatFeatureController: a,
                            clientStore: i
                        });
                    case "tool-use":
                        return (0, u.jsx)(t_, {
                            stepId: t.step.id,
                            toolName: t.toolName,
                            toolResultStep: t.toolResultStep,
                            toolUse: t.toolUse,
                            externalToolName: t.externalToolName,
                            threadStore: o,
                            runningInference: s,
                            aiChatFeatureController: a,
                            isLastTurn: l,
                            onExpandedChange: h,
                            forceExpanded: e.forceExpanded,
                            hideIcon: p
                        });
                    case "mcp-tool-use":
                        {
                            let e = (d ? ? []).filter(e => "workflow-effect-calling" === e.type || "workflow-effect-called" === e.type || "workflow-effect-error" === e.type);
                            return (0, u.jsx)(eq, {
                                mcpToolUsePartData: t,
                                threadStore: o,
                                runningInference: s,
                                aiChatFeatureController: a,
                                turnSteps: e,
                                onExpandedChange: h
                            })
                        }
                    case "custom-agent-template-picker":
                        return (0, u.jsx)(tW, {
                            threadStore: o
                        });
                    case "compacted-transcript":
                        return (0, u.jsx)(n(3375).X, {
                            summary: t.summary
                        });
                    case "database-agent-setup":
                    case "database-agent-running":
                    case "database-agent-status":
                        return (0, u.jsx)(n(109939).sA, {
                            defaultMessage: "Unsupported step type",
                            id: "aiChatTranscript.unsupportedDBAgentStepType"
                        });
                    default:
                        (0, n(722371).HB)(t)
                }
            }
            var t6 = () => n(596041);
            let t4 = (0, n(109939).YK)({
                    tryingAgain: {
                        id: "generateStepsSummary.tryingAgain",
                        defaultMessage: "Oops! Trying again…"
                    },
                    namedCollapsedGroupRunning: {
                        id: "generateStepsSummary.namedCollapsedGroup.running",
                        defaultMessage: "Running {name}"
                    },
                    namedCollapsedGroupDone: {
                        id: "generateStepsSummary.namedCollapsedGroup.done",
                        defaultMessage: "Ran {name}"
                    }
                }),
                t7 = new Set(["create-pages", "delete-pages", "update-page", "update-page-v2", "create-database", "update-database", "update-database-data-sources", "update-database-views", "update-database-triggers", "notion.createPage", "notion.updatePage", "notion.createDatabase", "notion.updateDatabase", "notion.createTwoWayRelation"]);

            function ne(e) {
                let t;
                if (0 !== e.length) {
                    for (let a of e) {
                        var n, r;
                        if ("tool-use" !== a.type || !a.collapsedGroupPresentation) return;
                        if (void 0 === t) {
                            t = a.collapsedGroupPresentation;
                            continue
                        }
                        if (n = t, r = a.collapsedGroupPresentation, !n || !r || n.name !== r.name || n.keepCollapsedWhenSingleVisiblePart !== r.keepCollapsedWhenSingleVisiblePart) return
                    }
                    return t
                }
            }

            function nt(e) {
                let {
                    intl: t,
                    collapsedGroupPresentation: n,
                    state: r
                } = e;
                if (n) switch (r) {
                    case "loading":
                        return t.formatMessage(t4.namedCollapsedGroupRunning, {
                            name: n.name
                        });
                    case "done":
                        return t.formatMessage(t4.namedCollapsedGroupDone, {
                            name: n.name
                        })
                }
            }

            function nn(e) {
                return "search" === e || "queryCalendar" === e || "queryMail" === e || e.endsWith(".search") ? "searching" : t7.has(e) ? "writing" : "thinking"
            }

            function nr(e) {
                let t = e.label.trim().toLowerCase();
                return t.startsWith("search") ? "searching" : t.startsWith("creat") || t.startsWith("updat") || t.startsWith("delet") || t.startsWith("edit") || t.startsWith("writ") || t.startsWith("trying again") ? "writing" : e.fallback
            }
            let na = new Set(["ask-survey", "generate-plan", "calendar.fetchPlaybook", "enter-setup-mode"]),
                no = new Set(["MAIL_ACCOUNT_NOT_CONNECTED"]);

            function ni(e, t) {
                let {
                    aiChatFeatureController: n
                } = t, {
                    supportsRenderingPermissionError: r,
                    supportsDetailedError: a
                } = n;
                if ("tool-use" === e.type) {
                    var o;
                    if (na.has(e.toolName)) return !1;
                    if (null != (o = e.toolResultStep) && o.insufficientPermissions && r) return !0;
                    if (e.toolResultStep && (0, e1().eb)(e.toolResultStep)) return !!(e.toolResultStep.errorCode && no.has(e.toolResultStep.errorCode)) || !!a
                }
                return !("mcp-tool-use" === e.type && e.toolResultStep && (0, e1().eb)(e.toolResultStep)) || !!a
            }
            let ns = {
                summaryContainer: {
                    cursor: "pointer",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    userSelect: "none"
                },
                summary: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                itemWrapper: {
                    position: "relative",
                    paddingInlineStart: 16
                },
                dot: {
                    position: "absolute",
                    insetInlineStart: 0,
                    top: 8,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: n(632079).Tj.icon.disabled
                },
                connectingLine: {
                    position: "absolute",
                    insetInlineStart: 2,
                    top: 17,
                    width: 1,
                    height: "calc(100% - 2px)",
                    backgroundColor: n(632079).Tj.border.primary
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function nl(e) {
                var t, n;
                return [e.key, e.text, e.summaryState, e.isSearch ? "search" : "non-search", (null == (t = e.searchSummaryData) ? void 0 : t.formattedCount) ? ? "", (null == (n = e.searchSummaryData) ? void 0 : n.sourceTypes.join(",")) ? ? ""].join(":")
            }

            function nd(e) {
                var t, o;
                let {
                    parts: i,
                    turn: s,
                    threadStore: l,
                    spaceStore: c,
                    clientStore: p,
                    aiChatFeatureController: g,
                    isLastTurn: f,
                    runningInference: m,
                    isRunning: h = !1,
                    shouldShowInlineRunningIndicator: y = !1,
                    onFollowUpSelect: v,
                    expandByDefault: x = !1,
                    onActiveSummaryStateChange: S
                } = e, [b, j] = (0, r.useState)(x), w = (0, n(109939).tz)(), I = (0, n(83208).X)("agent_diffs"), C = (0, n(83208).X)("agent_search_cohere_ranking"), M = (0, n(83208).X)("agent_polish_2026"), k = !I, T = (0, r.useId)(), A = (0, n(960253).I)(() => ({
                    summaryContainer: { ...ns.summaryContainer,
                        ...M ? {
                            gap: 4,
                            paddingInlineStart: 4
                        } : {}
                    },
                    listContainer: {
                        paddingInlineStart: M ? 10 : h && b ? 26 : 12,
                        paddingTop: 4,
                        userSelect: "text"
                    },
                    chevron: {
                        flexShrink: 0,
                        marginInlineEnd: -2,
                        marginTop: 2,
                        transition: "transform 150ms ease-in-out",
                        transform: b ? "rotate(90deg)" : "rotate(0deg)",
                        fill: n(632079).Tj.icon.tertiary
                    }
                }), [M, b, h]), [R, D] = (0, r.useState)(!1), P = M && !y ? "none" : "scrolling-squiggle";
                (0, r.useEffect)(() => {
                    x && j(!0)
                }, [x]);
                let F = (0, r.useCallback)(() => {
                        j(e => !e)
                    }, []),
                    E = (0, r.useCallback)(() => {
                        D(!0)
                    }, []),
                    N = (0, r.useCallback)(() => {
                        D(!1)
                    }, []),
                    U = (0, r.useCallback)(e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), F())
                    }, [F]),
                    V = (0, r.useMemo)(() => {
                        var e;
                        return function(e) {
                            let t, r, o, {
                                parts: i,
                                state: s,
                                intl: l,
                                spaceId: d,
                                stepId: c,
                                isCohereRankingEnabled: u,
                                aiChatFeatureController: p,
                                enableMixedRunningToolLabelCycle: g = !1
                            } = e;
                            for (let e = i.length - 1; e >= 0; e--) {
                                let n = i[e];
                                if ("thinking" === n.type) {
                                    if (n.isFinished || t || (t = n), !r) {
                                        let e = eH(n.content);
                                        e && (r = n, o = e)
                                    }
                                    if (t && r) break
                                }
                            }
                            let f = g && "loading" === s && t ? eH(t.content) : void 0,
                                m = g && "loading" === s ? o : void 0,
                                h = l.formatMessage((0, n(473686).U)(c)),
                                y = f ? ? h,
                                v = [];
                            for (let e of i)
                                if ("tool-use" === e.type || "search-tool-use" === e.type) {
                                    if (!ni(e, {
                                            aiChatFeatureController: p
                                        })) continue;
                                    v.push(e)
                                }
                            if ("done" === s && i.length > 0) {
                                let e = i.filter(e => ni(e, {
                                    aiChatFeatureController: p
                                }));
                                if (e.length > 0) {
                                    let t = nt({
                                        intl: l,
                                        collapsedGroupPresentation: ne(e),
                                        state: "done"
                                    });
                                    return t ? {
                                        text: t,
                                        summaryState: "idle"
                                    } : {
                                        text: l.formatMessage({
                                            id: "generateTurnSummary.thought",
                                            defaultMessage: "Thought"
                                        }),
                                        summaryState: "idle"
                                    }
                                }
                            }
                            if (0 === v.length) return {
                                text: y,
                                summaryState: "thinking"
                            };
                            let x = v.filter(e => !e.isFinished),
                                S = new Set;
                            for (let e of x) {
                                let t = "search-tool-use" === e.type ? "search" : e.toolName;
                                S.add(t)
                            }
                            let b = function(e) {
                                let {
                                    parts: t,
                                    state: n,
                                    isCohereRankingEnabled: r,
                                    aiChatFeatureController: o,
                                    allowMixedRunningTools: i = !1
                                } = e;
                                if ("loading" !== n) return;
                                let s = [];
                                for (let e of t)
                                    if ("tool-use" === e.type || "search-tool-use" === e.type) {
                                        if (!ni(e, {
                                                aiChatFeatureController: o
                                            })) continue;
                                        s.push(e)
                                    }
                                let l = s.filter(e => !e.isFinished),
                                    d = [];
                                if (l.length > 0) {
                                    let e = new Set;
                                    for (let t of l) {
                                        let n = "search-tool-use" === t.type ? "search" : t.toolName;
                                        e.add(n)
                                    }
                                    if (i) {
                                        if (!e.has("search")) return;
                                        d = l.filter(e => "search" === ("search-tool-use" === e.type ? "search" : e.toolName))
                                    } else {
                                        if (1 !== e.size || !e.has("search")) return;
                                        d = l
                                    }
                                } else if (s.length > 0) {
                                    let e = s.at(-1);
                                    if (!e) return;
                                    d = [e]
                                }
                                let c = s.at(-1),
                                    u = (null == c ? void 0 : c.type) === "search-tool-use";
                                if (0 === l.length && !u) return;
                                let p = 0,
                                    g = [];
                                for (let e of d)
                                    if ("search-tool-use" === e.type && e.toolResultStep && (0, a().gY)(e.toolResultStep, "search")) {
                                        let t = e.toolResultStep.result;
                                        if (!t) continue;
                                        let n = t.extractedResults ? ? (0, t6().S)(t);
                                        p += n.length, n.length > 0 && g.push(...(0, tq().SP)({
                                            isCohereRankingEnabled: r,
                                            resultStep: e.toolResultStep,
                                            overrideResults: n
                                        }))
                                    }
                                if (p <= 0) return;
                                let f = Array.from(new Set(g));
                                return {
                                    count: p,
                                    formattedCount: p >= 99 ? "99+" : String(p),
                                    sourceTypes: f
                                }
                            }({
                                parts: i,
                                state: s,
                                isCohereRankingEnabled: u,
                                aiChatFeatureController: p,
                                allowMixedRunningTools: g
                            });
                            if ("loading" === s && g && S.size > 1) {
                                let e, t = new Map,
                                    n = new Map;
                                for (let e of x) {
                                    let r, o, s = "search-tool-use" === e.type ? "search" : e.toolName;
                                    if (t.has(s)) continue;
                                    let d = "search" === s;
                                    if (d && b) r = l.formatMessage(t$.foundResultsCount, {
                                        count: b.count,
                                        formattedCount: b.formattedCount
                                    }), o = b;
                                    else {
                                        let t = e.toolResultStep && (0, a().h9)(e.toolResultStep),
                                            n = nt({
                                                intl: l,
                                                collapsedGroupPresentation: "tool-use" === e.type ? e.collapsedGroupPresentation : void 0,
                                                state: "loading"
                                            });
                                        r = t ? l.formatMessage(t4.tryingAgain) : n || et({
                                            toolName: s,
                                            state: "loading",
                                            numResults: 1,
                                            intl: l,
                                            toolResultStep: e.toolResultStep,
                                            toolUse: e.toolUse,
                                            includeToolNoun: !0
                                        })
                                    }
                                    if (0 === r.trim().length) continue;
                                    t.set(s, {
                                        key: `tool:${s}`,
                                        toolType: s,
                                        label: r,
                                        isSearch: d,
                                        summaryState: nr({
                                            label: r,
                                            fallback: nn(s)
                                        }),
                                        searchSummaryData: o
                                    });
                                    let c = i.indexOf(e);
                                    n.set(s, c >= 0 ? c : Number.MAX_SAFE_INTEGER)
                                }
                                let o = Array.from(t.entries()).map(([e, t]) => ({
                                    index: n.get(e) ? ? Number.MAX_SAFE_INTEGER,
                                    item: t
                                })).concat(void 0 === m || !r ? [] : [{
                                    index: (e = i.indexOf(r)) >= 0 ? e : Number.MAX_SAFE_INTEGER,
                                    item: {
                                        key: `thinking:${r.key}`,
                                        toolType: "thinking",
                                        label: m,
                                        isSearch: !1,
                                        summaryState: "thinking"
                                    }
                                }]).sort((e, t) => e.index - t.index).map(({
                                    item: e
                                }) => e);
                                if (o.length > 1) {
                                    var j, w;
                                    return {
                                        text: (null == (j = o[0]) ? void 0 : j.label) ? ? y,
                                        summaryState: (null == (w = o[0]) ? void 0 : w.summaryState) ? ? "thinking",
                                        loadingLabelCycleItems: o
                                    }
                                }
                            }
                            if (b) return {
                                text: l.formatMessage(t$.foundResultsCount, {
                                    count: b.count,
                                    formattedCount: b.formattedCount
                                }),
                                summaryState: "searching",
                                searchSummaryData: b
                            };
                            if (0 === x.length) return {
                                text: y,
                                summaryState: "thinking"
                            };
                            let I = nt({
                                intl: l,
                                collapsedGroupPresentation: ne(x),
                                state: "loading"
                            });
                            if (I) return {
                                text: I,
                                summaryState: "thinking"
                            };
                            if (S.size > 1) return {
                                text: y,
                                summaryState: "thinking"
                            };
                            let [C] = Array.from(S);
                            if (!C) return {
                                text: y,
                                summaryState: "thinking"
                            };
                            let M = x[0];
                            if ((null == M ? void 0 : M.toolResultStep) && (0, a().h9)(M.toolResultStep)) return {
                                text: l.formatMessage(t4.tryingAgain),
                                summaryState: "writing"
                            };
                            let k = et({
                                toolName: C,
                                state: "loading",
                                numResults: 1,
                                intl: l,
                                toolResultStep: M.toolResultStep,
                                toolUse: M.toolUse,
                                includeToolNoun: !0
                            });
                            return 0 === k.trim().length ? {
                                text: y,
                                summaryState: "thinking"
                            } : {
                                text: k,
                                summaryState: nr({
                                    label: k,
                                    fallback: nn(C)
                                })
                            }
                        }({
                            parts: i,
                            state: h ? "loading" : "done",
                            intl: w,
                            spaceId: c.id,
                            stepId: null == (e = s.steps[0]) ? void 0 : e.id,
                            isCohereRankingEnabled: C,
                            aiChatFeatureController: g,
                            enableMixedRunningToolLabelCycle: M
                        })
                    }, [g, M, C, w, h, i, c.id, s.steps]),
                    _ = V.text,
                    B = V.searchSummaryData,
                    L = V.loadingLabelCycleItems,
                    [K, O] = (0, r.useState)(void 0);
                (0, r.useEffect)(() => {
                    L && 0 !== L.length ? O(e => {
                        var t;
                        return e && L.some(t => t.key === e) ? e : null == (t = L[0]) ? void 0 : t.key
                    }) : O(void 0)
                }, [L]), (0, r.useEffect)(() => {
                    if (!L || L.length <= 1 || "u" < typeof window) return;
                    let e = window.setInterval(() => {
                        O(e => {
                            var t;
                            let n = e ? L.findIndex(t => t.key === e) : -1,
                                r = n >= 0 && n < L.length - 1 ? n + 1 : 0;
                            return null == (t = L[r]) ? void 0 : t.key
                        })
                    }, 2500);
                    return () => {
                        window.clearInterval(e)
                    }
                }, [L]);
                let z = (0, r.useMemo)(() => {
                        if (L && 0 !== L.length) return (void 0 === K ? void 0 : L.find(e => e.key === K)) ? ? L[0]
                    }, [K, L]),
                    W = (0, r.useMemo)(() => z ? {
                        key: z.key,
                        text: z.label,
                        summaryState: z.summaryState,
                        searchSummaryData: z.searchSummaryData,
                        isSearch: z.isSearch
                    } : {
                        key: "summary:raw",
                        text: _,
                        summaryState: V.summaryState,
                        searchSummaryData: B,
                        isSearch: "searching" === V.summaryState
                    }, [z, B, _, V.summaryState]),
                    [$, q] = (0, r.useState)(void 0),
                    Y = (0, r.useRef)(W);
                (0, r.useEffect)(() => {
                    Y.current = W
                }, [W]), (0, r.useEffect)(() => {
                    if (!M || !h || "u" < typeof window) return void q(void 0);
                    if (!$) return void q({
                        summaryDisplay: W,
                        startedAtMs: Date.now()
                    });
                    if (nl($.summaryDisplay) === nl(W)) return;
                    let e = Math.max(2500 - (Date.now() - $.startedAtMs), 0);
                    if (0 === e) return void q({
                        summaryDisplay: W,
                        startedAtMs: Date.now()
                    });
                    let t = window.setTimeout(() => {
                        q({
                            summaryDisplay: Y.current,
                            startedAtMs: Date.now()
                        })
                    }, e);
                    return () => {
                        window.clearTimeout(t)
                    }
                }, [$, M, h, W]);
                let H = M && h ? (null == $ ? void 0 : $.summaryDisplay) ? ? W : W;
                (0, r.useEffect)(() => {
                    null == S || S(H.summaryState)
                }, [S, H.summaryState]);
                let G = (0, r.useMemo)(() => {
                        if (!h) return [];
                        let e = [],
                            t = new Set;
                        for (let n of i) {
                            if ("search-tool-use" === n.type && !n.isFinished) {
                                for (let r of n.queryGenSteps)
                                    for (let a = 0; a < r.queries.length; a++) {
                                        let o = r.queries[a],
                                            i = (o.questionIntl ? ? o.question ? ? o.keywords).trim();
                                        !i || t.has(i) || (t.add(i), e.push({
                                            key: `${n.key}-${r.id}-${a}`,
                                            text: i
                                        }))
                                    }
                                continue
                            }
                            if ("tool-use" === n.type && n.toolUse && !n.isFinished)
                                for (let r of (0, e5().ZY)(n.toolUse, n.toolResultStep))
                                    for (let a = 0; a < r.queries.length; a++) {
                                        let o = r.queries[a],
                                            i = (o.question ? ? o.keywords).trim();
                                        !i || t.has(i) || (t.add(i), e.push({
                                            key: `${n.key}-${r.id}-${a}`,
                                            text: i
                                        }))
                                    }
                        }
                        return e
                    }, [h, i]),
                    Q = (0, r.useMemo)(() => {
                        if (h && 1 === i.length && "thinking" === i[0].type) return {
                            content: i[0].content,
                            stepId: i[0].step.id
                        }
                    }, [h, i]),
                    X = Q && h && !b && !M,
                    J = G.length > 0 && void 0 === H.searchSummaryData && H.isSearch,
                    Z = M || !J,
                    ee = (0, r.useMemo)(() => i.filter(e => {
                        if ("tool-use" === e.type) {
                            if (!e.toolResultStep) return !1;
                            let t = e.toolResultStep;
                            if (!(0, d().I6)(t) && !(0, d().dB)(t) && !(0, e1().eb)(t) && a().MV.some(e => e === t.toolName)) return !0
                        }
                        return !1
                    }), [i]),
                    en = (0, r.useMemo)(() => i.filter(e => {
                        if ("tool-use" === e.type) {
                            let t = e.toolResultStep;
                            if ((null == t ? void 0 : t.errorCode) === "MAIL_ACCOUNT_NOT_CONNECTED") return !0
                        }
                        return !1
                    }), [i]),
                    er = (0, r.useMemo)(() => {
                        let e = i.filter(e => !!ni(e, {
                            aiChatFeatureController: g
                        }));
                        return 0 !== e.length && e.every(e => {
                            if ("tool-use" === e.type) {
                                if (!e.toolResultStep) return !1;
                                let t = e.toolResultStep;
                                return !(0, d().I6)(t) && !(0, d().dB)(t) && !(0, e1().eb)(t) && a().MV.some(e => e === t.toolName)
                            }
                            return !1
                        })
                    }, [g, i]),
                    ea = (0, r.useMemo)(() => i.filter(e => ni(e, {
                        aiChatFeatureController: g
                    })), [g, i]),
                    eo = ea.length,
                    ei = 1 === eo && (null == (t = ea[0]) ? void 0 : t.type) === "tool-use" && !!(null == (o = ea[0].collapsedGroupPresentation) ? void 0 : o.keepCollapsedWhenSingleVisiblePart),
                    es = er && k;
                if (0 === eo && !h) return null;
                if (1 === eo && !h && !ei) {
                    let e = ea[0];
                    return (0, u.jsx)(n(305406).uQ, {
                        step: e.step,
                        threadStore: l,
                        clientStore: p,
                        children: (0, u.jsx)(n(765846).Wd, {
                            isFullPage: !1,
                            children: (0, u.jsx)(t3, {
                                partData: e,
                                threadStore: l,
                                clientStore: p,
                                spaceStore: c,
                                aiChatFeatureController: g,
                                runningInference: m,
                                isLastTurn: f,
                                turnSteps: s.steps,
                                blurOnExpand: g.supportsBlurOnToolExpand,
                                hideIcons: !0,
                                onFollowUpSelect: v,
                                feedbackComponentIndex: s.feedbackComponentIndex
                            })
                        })
                    })
                }
                return (0, u.jsxs)(u.Fragment, {
                    children: [es ? null : (0, u.jsx)(n(765846).Wd, {
                        isFullPage: !1,
                        children: (0, u.jsx)(n(522434).S, {
                            contentId: T,
                            origin: (0, u.jsx)("div", {
                                role: "button",
                                tabIndex: 0,
                                "aria-expanded": b,
                                "aria-controls": T,
                                style: A.summaryContainer,
                                onClick: F,
                                onKeyDown: U,
                                onMouseEnter: E,
                                onMouseLeave: N,
                                children: h ? (0, u.jsxs)(u.Fragment, {
                                    children: [(0, u.jsx)(n(473686).c, {
                                        message: H.text,
                                        animationType: P,
                                        contentGapPx: 6,
                                        seed: l.id,
                                        children: H.searchSummaryData ? (0, u.jsx)(t5, {
                                            sourceTypes: H.searchSummaryData.sourceTypes
                                        }) : J ? (0, u.jsx)(t9, {
                                            items: G,
                                            queryFontWeight: M ? 400 : void 0
                                        }) : null
                                    }), Z ? (0, u.jsx)(n(708966).Q, {
                                        iconGroup: n(741873).N,
                                        variantName: "small",
                                        size: "xs",
                                        style: A.chevron
                                    }) : null]
                                }) : (0, u.jsxs)(u.Fragment, {
                                    children: [(0, u.jsx)(n(111010).D, {
                                        styleKey: "bodyRegular",
                                        colorVariant: R ? "primary" : "secondary",
                                        style: ns.summary,
                                        children: _
                                    }), (0, u.jsx)(n(708966).Q, {
                                        iconGroup: n(741873).N,
                                        variantName: "small",
                                        size: "xs",
                                        style: A.chevron
                                    })]
                                })
                            }),
                            content: (0, u.jsx)("div", {
                                style: A.listContainer,
                                children: (0, u.jsx)(n(4458).VP, {
                                    gap: 12,
                                    className: "autolayout-col autolayout-fill-width",
                                    style: ns.positionRelative,
                                    children: i.filter(e => !!ni(e, {
                                        aiChatFeatureController: g
                                    })).map((e, t, r) => {
                                        let a = t === r.length - 1;
                                        return (0, u.jsxs)("div", {
                                            style: ns.itemWrapper,
                                            children: [(0, u.jsx)("div", {
                                                style: ns.dot
                                            }), a ? null : (0, u.jsx)("div", {
                                                style: ns.connectingLine
                                            }), (0, u.jsx)(n(305406).uQ, {
                                                step: e.step,
                                                threadStore: l,
                                                clientStore: p,
                                                children: (0, u.jsx)(t3, {
                                                    partData: e,
                                                    threadStore: l,
                                                    clientStore: p,
                                                    spaceStore: c,
                                                    aiChatFeatureController: g,
                                                    runningInference: m,
                                                    isLastTurn: f,
                                                    turnSteps: s.steps,
                                                    blurOnExpand: g.supportsBlurOnToolExpand,
                                                    hideIcons: !0,
                                                    onFollowUpSelect: v,
                                                    feedbackComponentIndex: s.feedbackComponentIndex
                                                })
                                            })]
                                        }, `${e.step.id}-${e.key}`)
                                    })
                                })
                            }),
                            isExpanded: b
                        })
                    }), X && Q ? (0, u.jsx)(eG, {
                        content: Q.content,
                        paddingInlineStart: 32,
                        aiChatFeatureController: g,
                        isStreaming: !0,
                        stepId: Q.stepId
                    }) : null, es ? (0, u.jsx)(n(4458).VP, {
                        gap: 12,
                        className: "autolayout-col autolayout-fill-width",
                        style: ns.positionRelative,
                        children: ee.map(e => (0, u.jsx)(n(305406).uQ, {
                            step: e.step,
                            threadStore: l,
                            clientStore: p,
                            children: (0, u.jsx)(t3, {
                                partData: e,
                                threadStore: l,
                                clientStore: p,
                                spaceStore: c,
                                aiChatFeatureController: g,
                                runningInference: m,
                                isLastTurn: f,
                                turnSteps: s.steps,
                                blurOnExpand: g.supportsBlurOnToolExpand,
                                hideIcons: !0,
                                onFollowUpSelect: v,
                                feedbackComponentIndex: s.feedbackComponentIndex
                            })
                        }, `${e.step.id}-${e.key}`))
                    }) : !b && !h && ee.length > 0 && k ? (0, u.jsx)(n(4458).VP, {
                        gap: 12,
                        className: "autolayout-col autolayout-fill-width",
                        style: ns.positionRelative,
                        children: ee.map(e => (0, u.jsx)(n(305406).uQ, {
                            step: e.step,
                            threadStore: l,
                            clientStore: p,
                            children: (0, u.jsx)(t3, {
                                partData: e,
                                threadStore: l,
                                clientStore: p,
                                spaceStore: c,
                                aiChatFeatureController: g,
                                runningInference: m,
                                isLastTurn: f,
                                turnSteps: s.steps,
                                blurOnExpand: g.supportsBlurOnToolExpand,
                                hideIcons: !0,
                                onFollowUpSelect: v,
                                feedbackComponentIndex: s.feedbackComponentIndex
                            })
                        }, `${e.step.id}-${e.key}`))
                    }) : null, b || h || !(en.length > 0) ? null : (0, u.jsx)(n(4458).VP, {
                        gap: 12,
                        className: "autolayout-col autolayout-fill-width",
                        style: ns.positionRelative,
                        children: en.map(e => (0, u.jsx)(n(305406).uQ, {
                            step: e.step,
                            threadStore: l,
                            clientStore: p,
                            children: (0, u.jsx)(t3, {
                                partData: e,
                                threadStore: l,
                                clientStore: p,
                                spaceStore: c,
                                aiChatFeatureController: g,
                                runningInference: m,
                                isLastTurn: f,
                                turnSteps: s.steps,
                                blurOnExpand: g.supportsBlurOnToolExpand,
                                hideIcons: !0,
                                onFollowUpSelect: v,
                                feedbackComponentIndex: s.feedbackComponentIndex
                            })
                        }, `${e.step.id}-${e.key}`))
                    })]
                })
            }
            let nc = {
                position: "relative"
            };

            function nu(e) {
                let {
                    turn: t,
                    threadStore: r,
                    spaceStore: o,
                    aiChatFeatureController: i,
                    items: s,
                    blurOnExpand: l,
                    clientStore: d,
                    isLastTurn: c,
                    runningInference: p,
                    forceExpandUndoableTools: g,
                    hidePartIcons: f,
                    itemGap: m,
                    onFollowUpSelect: h
                } = e, y = f ? ? !1;
                return (0, u.jsx)(n(4458).VP, {
                    className: "autolayout-col autolayout-fill-width",
                    style: {
                        gap: m ? ? 20,
                        ...nc
                    },
                    children: s.map((e, n) => {
                        let s = g && "tool-use" === e.type && e.toolResultStep && a().MV.includes(e.toolName);
                        return (0, u.jsx)(t3, {
                            partData: e,
                            threadStore: r,
                            clientStore: d,
                            spaceStore: o,
                            aiChatFeatureController: i,
                            runningInference: p,
                            isLastTurn: c,
                            turnSteps: t.steps,
                            blurOnExpand: l,
                            forceExpanded: s,
                            hideIcons: y,
                            onFollowUpSelect: h,
                            feedbackComponentIndex: t.feedbackComponentIndex
                        }, `${e.step.id}-${n}`)
                    })
                })
            }
            let np = {
                container: {
                    backgroundColor: n(632079).Tj.background.elevated,
                    borderRadius: 12,
                    paddingBlockStart: 8,
                    paddingBlockEnd: 8,
                    paddingInlineStart: 12,
                    paddingInlineEnd: 12,
                    border: `1px solid ${n(632079).Tj.border.primary}`
                },
                icon: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    flexShrink: 0
                },
                text: {
                    minWidth: 0,
                    overflowWrap: "anywhere"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function ng(e) {
                let {
                    todos: t
                } = e, {
                    bodyStyleKey: r
                } = (0, n(765846).yq)(), a = "bodyLgRegular" === r;
                return 0 === t.length ? null : (0, u.jsx)("div", {
                    style: np.container,
                    children: (0, u.jsx)(n(4458).VP, {
                        gap: 8,
                        className: "autolayout-col autolayout-fill-width",
                        style: np.positionRelative,
                        children: t.map((e, t) => {
                            let o = "done" === e.status,
                                i = "in_progress" === e.status,
                                s = "failed" === e.status,
                                l = o ? n(93042).checkmarkCircleFillIcon : s ? n(927364).xMarkCircleIcon : i ? n(22989).C : n(634663).circleIcon,
                                d = e.text.trim() || e.text,
                                c = { ...np.text,
                                    ...o ? {
                                        textDecoration: "line-through"
                                    } : s ? {
                                        fontStyle: "italic"
                                    } : void 0
                                };
                            return (0, u.jsxs)(n(4458).fI, {
                                className: "autolayout-row autolayout-fill-width",
                                alignItems: "flex-start",
                                style: {
                                    gap: 8,
                                    ...np.positionRelative
                                },
                                children: [(0, u.jsx)("div", {
                                    style: { ...np.icon,
                                        height: a ? 24 : 20
                                    },
                                    children: (0, u.jsx)(n(16275).I, {
                                        icon: l,
                                        colorVariant: !o && (i || s) ? "tertiary" : "disabled"
                                    })
                                }), (0, u.jsx)(n(111010).D, {
                                    styleKey: r,
                                    colorVariant: o ? "disabled" : "secondary",
                                    style: c,
                                    children: d
                                })]
                            }, e.id ? ? `${e.text}-${t}`)
                        })
                    })
                })
            }
            let nf = {
                wrapper: {
                    position: "relative",
                    boxShadow: `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                    borderRadius: 10,
                    backgroundColor: n(632079).Tj.background.elevated,
                    padding: "10px 12px"
                }
            };

            function nm(e) {
                let {
                    integrationName: t,
                    moduleType: a,
                    state: o,
                    resultStepIdsToConfirm: i
                } = e, s = (0, n(533992).v3)(), {
                    confirmToolUse: l,
                    rejectToolUse: d
                } = (0, n(101491).Mp)(), [c, p] = (0, r.useState)(!1), [g, f] = (0, r.useState)(!1), m = (0, r.useRef)(!1), h = "aiConnector" === o.type ? o.connectorName : void 0, y = (0, n(682985).K8)(() => (0, n(876688).wd)(), []), v = h ? ? "slack", x = (0, n(682985).K8)(() => n(399077).NT[v].state.currentScreen, [v]), S = (0, n(476743).a)(), b = (0, n(682985).K8)(() => {
                    var e;
                    return null == (e = (0, n(427846)._)(s)) ? void 0 : e.pointer
                }, [s]), j = (0, r.useCallback)(e => {
                    f(!1), l(i, {
                        connectFlowCreatedModuleId: e
                    })
                }, [l, i]), w = (0, r.useCallback)(() => {
                    f(!1), d(i)
                }, [d, i]), I = (0, r.useCallback)(async () => {
                    if ("mail" === o.type) {
                        p(!0);
                        try {
                            let e = await (0, n(545856).MG)({
                                environment: s
                            });
                            if (e.success) l(i);
                            else {
                                let t = e.messageForModel ? ? "Notion Mail connection failed.";
                                d(i, {
                                    rejectToolStepErrors: Object.fromEntries(i.map(e => [e, t]))
                                })
                            }
                        } finally {
                            p(!1)
                        }
                        return
                    }
                    if ("calendar" === o.type) {
                        p(!0);
                        try {
                            let e = await (0, n(44196).xl)({
                                environment: s,
                                showSuccessToast: !0
                            });
                            if (e.success) l(i);
                            else {
                                let t = e.messageForModel ? ? "Notion Calendar connection failed.";
                                d(i, {
                                    rejectToolStepErrors: Object.fromEntries(i.map(e => [e, t]))
                                })
                            }
                        } finally {
                            p(!1)
                        }
                        return
                    }
                    if ("mcpServer" === o.type) return void f(!0);
                    if ("aiConnector" === o.type) {
                        p(!0), (0, n(166672).navigateToAIConnectorOnboarding)({
                            connector: o.connectorName,
                            analyticsFrom: "custom_agent_add_connection"
                        });
                        return
                    }
                    l(i)
                }, [l, s, d, i, o]);
                (0, r.useEffect)(() => {
                    c && "aiConnector" === o.type && void 0 !== h && !m.current && y.includes(h) && (m.current = !0, p(!1), l(i))
                }, [h, l, y, c, i, o.type]), (0, r.useEffect)(() => {
                    !c || "aiConnector" !== o.type || void 0 === h || m.current || "none" !== x || y.includes(h) || (p(!1), d(i))
                }, [h, y, x, c, d, i, o.type]);
                let C = (0, r.useCallback)(() => {
                        p(!1), d(i)
                    }, [d, i]),
                    M = (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "primary",
                            children: (0, u.jsx)(n(109939).sA, {
                                id: "AgentModulesCreateConnectConfirmation.title",
                                defaultMessage: "Agent wants to connect {integrationName}",
                                values: {
                                    integrationName: t
                                }
                            })
                        }), (0, u.jsxs)(n(4458).fI, {
                            gap: 8,
                            alignItems: "center",
                            width: "100%",
                            flexWrap: "nowrap",
                            children: [(0, u.jsx)(n(4458).fI, {
                                gap: "inherit",
                                minWidth: 0,
                                children: (0, u.jsx)(n(861510).N, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "secondary",
                                    text: (0, u.jsx)(n(109939).sA, {
                                        id: "AgentModulesCreateConnectConfirmation.description",
                                        defaultMessage: "Connect to enable this integration for the agent."
                                    }),
                                    animate: !0
                                })
                            }), (0, u.jsx)(n(4458).hK, {}), (0, u.jsxs)(n(4458).fI, {
                                gap: 8,
                                children: [(0, u.jsx)(n(265779).E, {
                                    onClick: C,
                                    children: (0, u.jsx)(n(109939).sA, {
                                        id: "AgentModulesCreateConnectConfirmation.later",
                                        defaultMessage: "Later"
                                    })
                                }), (0, u.jsx)(n(912946).A, {
                                    onClick: I,
                                    colorPalette: "blue",
                                    disabled: c,
                                    children: (0, u.jsx)(n(109939).sA, {
                                        id: "AgentModulesCreateConnectConfirmation.connect",
                                        defaultMessage: "Connect"
                                    })
                                })]
                            })]
                        })]
                    }),
                    k = "mail" === o.type || "calendar" === o.type || "mcpServer" === o.type || "aiConnector" === o.type,
                    T = "mail" === o.type ? (0, u.jsx)(n(708966).Q, {
                        iconGroup: n(246297).D,
                        style: {
                            width: 24,
                            height: 24
                        },
                        variantName: "default"
                    }) : "calendar" === o.type ? (0, u.jsx)(n(708966).Q, {
                        iconGroup: n(587292).Q,
                        style: {
                            width: 24,
                            height: 24
                        },
                        variantName: "default"
                    }) : "mcpServer" === o.type ? (0, u.jsx)(n(905335).X, {
                        serverUrl: o.serverUrl,
                        serverName: o.name,
                        size: 24
                    }) : "aiConnector" === o.type ? (0, u.jsx)(n(708966).Q, {
                        iconGroup: n(44183).G[o.connectorName],
                        style: {
                            width: 24,
                            height: 24
                        },
                        variantName: "default"
                    }) : null;
                return (0, u.jsxs)(u.Fragment, {
                    children: [k ? (0, u.jsxs)(n(4458).fI, {
                        gap: 12,
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        width: "100%",
                        style: nf.wrapper,
                        children: [T, (0, u.jsx)(n(4458).VP, {
                            gap: 4,
                            alignItems: "flex-start",
                            flexGrow: 1,
                            minWidth: 0,
                            children: M
                        })]
                    }) : (0, u.jsx)(n(4458).VP, {
                        gap: 4,
                        alignItems: "flex-start",
                        width: "100%",
                        style: nf.wrapper,
                        children: M
                    }), g && S && b ? (0, u.jsx)(n(841682).Z, {
                        isOpen: g,
                        onClose: w,
                        onSuccess: j,
                        spaceViewStore: S,
                        currentUserPointer: b,
                        initialName: "mcpServer" === o.type ? o.name : void 0,
                        initialUrl: "mcpServer" === o.type ? o.serverUrl : void 0
                    }) : null]
                })
            }
            let nh = {
                position: "relative"
            };

            function ny(e) {
                let {
                    resultStepIdsToConfirm: t
                } = e, {
                    confirmToolUse: a,
                    rejectToolUse: o
                } = (0, n(101491).Mp)(), i = (0, n(533992).v3)(), s = (0, n(723240).r)(), l = (0, r.useCallback)(() => {
                    a(t)
                }, [a, t]), d = (0, r.useCallback)(() => {
                    o(t)
                }, [o, t]), c = (0, r.useCallback)(() => {
                    s && (n(196473).Ci.setState({ ...n(196473).Ci.state,
                        analyticsFrom: "chat_menu",
                        forceShowAuthNotificationTriggeredAt: void 0
                    }), (0, n(882707).t)({
                        connector: "salesforce",
                        environment: i,
                        spaceId: s,
                        analyticsProperties: {
                            buttonName: "user_auth_connect",
                            analyticsFrom: "chat_menu"
                        }
                    }))
                }, [i, s]), p = (0, n(682985).K8)(() => "pending" === n(196473).Ci.state.userAuthStatus, []);
                return (0, u.jsxs)(n(4458).fI, {
                    gap: 8,
                    className: "autolayout-row autolayout-fill-width",
                    style: nf.wrapper,
                    alignItems: "flex-start",
                    children: [(0, u.jsx)(n(16275).I, {
                        icon: n(68722).salesforceIcon,
                        size: "default"
                    }), (0, u.jsxs)(n(4458).VP, {
                        className: "autolayout-col",
                        gap: 0,
                        style: nh,
                        flex: "1 1 0",
                        children: [(0, u.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "primary",
                            children: p ? (0, u.jsx)(n(109939).sA, {
                                id: "AgentSalesforceToolUseConfirmation.title",
                                defaultMessage: "Connect your Salesforce account"
                            }) : (0, u.jsx)(n(109939).sA, {
                                id: "AgentSalesforceToolUseConfirmation.connectedTitle",
                                defaultMessage: "Salesforce connected"
                            })
                        }), (0, u.jsx)(n(861510).N, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            text: p ? (0, u.jsx)(n(109939).sA, {
                                id: "AgentSalesforceToolUseConfirmation.description",
                                defaultMessage: "Connect to Salesforce for advanced querying and higher quality results."
                            }) : (0, u.jsx)(n(109939).sA, {
                                id: "AgentSalesforceToolUseConfirmation.connectedDescription",
                                defaultMessage: "Continue to continue your query."
                            }),
                            animate: !0
                        }), (0, u.jsx)(n(4458).fI, {
                            className: "autolayout-row",
                            gap: 8,
                            paddingTop: 8,
                            style: nh,
                            children: p ? (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)(n(265779).E, {
                                    onClick: d,
                                    children: (0, u.jsx)(n(109939).sA, {
                                        id: "AgentSalesforceToolUseConfirmation.cancel",
                                        defaultMessage: "Later"
                                    })
                                }), (0, u.jsx)(n(912946).A, {
                                    onClick: c,
                                    colorPalette: "blue",
                                    children: (0, u.jsx)(n(109939).sA, {
                                        id: "AgentSalesforceToolUseConfirmation.connect",
                                        defaultMessage: "Connect"
                                    })
                                })]
                            }) : (0, u.jsx)(n(912946).A, {
                                onClick: l,
                                colorPalette: "blue",
                                children: (0, u.jsx)(n(109939).sA, {
                                    id: "AgentSalesforceToolUseConfirmation.continue",
                                    defaultMessage: "Continue"
                                })
                            })
                        })]
                    })]
                })
            }
            n(814603), n(147566), n(198721);
            let nv = {
                wrapper: {
                    position: "relative",
                    boxShadow: `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                    borderRadius: 10,
                    backgroundColor: n(632079).Tj.background.elevated,
                    padding: "16px 20px"
                },
                description: {
                    marginBottom: "2px"
                },
                urlContainer: {
                    backgroundColor: n(632079).Tj.background.secondary,
                    borderRadius: "6px",
                    padding: "0px 2px",
                    wordBreak: "break-all"
                },
                showAllLink: {
                    fontSize: "13px",
                    marginTop: "-8px",
                    marginBottom: "8px",
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%"
                },
                agentSecurityImage: {
                    width: "32px",
                    height: "32px"
                },
                learnMoreLink: {
                    color: n(632079).Tj.blue.text.accentPrimary
                },
                hostnameHighlight: {
                    backgroundColor: n(632079).Tj.yellow.background.secondaryTranslucent,
                    padding: "2px 2px",
                    borderRadius: "4px"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function nx(e) {
                let {
                    urls: t,
                    onConfirm: a,
                    onCancel: o
                } = e, [i, s] = (0, r.useState)(!1), l = (0, n(960253).I)(() => ({
                    urlText: {
                        fontFamily: "monospace",
                        fontSize: "13px",
                        color: n(632079).Tj.text.secondary,
                        whiteSpace: "pre-wrap",
                        ...i ? {} : {
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                        }
                    }
                }), [i]), d = r.useMemo(() => (0, n(381453).sb)(t.map(e => {
                    try {
                        return new URL(e).hostname
                    } catch {
                        return (0, n(189684).xv)(e, 50)
                    }
                })), [t]), c = r.useMemo(() => d.map((e, t) => (0, u.jsxs)(r.Fragment, {
                    children: [(0, u.jsx)("span", {
                        style: nv.hostnameHighlight,
                        children: e
                    }), t < d.length - 1 ? ", " : null]
                }, t)), [d]), p = r.useMemo(() => 0 === t.length ? "" : i ? t.join("\n\n") : t[0], [t, i]), g = t.length > 1, f = p.length > 120;
                return (0, u.jsxs)(n(4458).VP, {
                    className: "autolayout-col autolayout-fill-width",
                    style: nv.wrapper,
                    gap: 8,
                    alignItems: "flex-start",
                    children: [(0, u.jsx)("img", {
                        src: n(108715),
                        alt: "Security",
                        style: nv.agentSecurityImage
                    }), (0, u.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        colorVariant: "primary",
                        children: (0, u.jsx)(n(109939).sA, {
                            id: "UnsafeUrlConfirmationDialog.title",
                            defaultMessage: "Do you trust {hostnames}?",
                            values: {
                                hostnames: c
                            }
                        })
                    }), (0, u.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        style: nv.description,
                        children: (0, u.jsx)(n(109939).sA, {
                            id: "UnsafeUrlConfirmationDialog.description",
                            defaultMessage: "Allowing Notion AI to access untrusted URLs can be a security risk. {learnMoreLink}",
                            values: {
                                learnMoreLink: (0, u.jsx)(n(428217).V, {
                                    hoverColor: "blue",
                                    style: nv.learnMoreLink,
                                    href: "https://www.notion.com/help/notion-ai-security-practices",
                                    external: !0,
                                    disableUnderline: !0,
                                    children: (0, u.jsx)(n(109939).sA, {
                                        id: "unifiedChatFileConfirmationBanner.learnMore",
                                        defaultMessage: "Learn more"
                                    })
                                })
                            }
                        })
                    }), (0, u.jsx)("div", {
                        style: nv.urlContainer,
                        children: (0, u.jsx)("div", {
                            style: l.urlText,
                            children: p
                        })
                    }), g || f ? (0, u.jsx)("div", {
                        style: nv.showAllLink,
                        children: (0, u.jsx)(n(428217).V, {
                            onClick: () => {
                                s(!i)
                            },
                            hoverColor: "blue",
                            color: n(632079).Tj.text.secondary,
                            disableUnderline: !0,
                            children: i ? (0, u.jsx)(n(109939).sA, {
                                id: "UnsafeUrlConfirmationDialog.showLess",
                                defaultMessage: "Show less"
                            }) : (0, u.jsx)(n(109939).sA, {
                                id: "UnsafeUrlConfirmationDialog.showAll",
                                defaultMessage: "Show all"
                            })
                        })
                    }) : void 0, (0, u.jsxs)(n(4458).fI, {
                        gap: 12,
                        className: "autolayout-row",
                        style: nv.positionRelative,
                        alignSelf: "stretch",
                        children: [(0, u.jsx)(n(265779).E, {
                            onClick: o,
                            children: (0, u.jsx)(n(109939).sA, {
                                id: "UnsafeUrlConfirmationDialog.cancel",
                                defaultMessage: "Cancel"
                            })
                        }), (0, u.jsx)(n(265779).E, {
                            onClick: a,
                            children: (0, u.jsx)(n(109939).sA, {
                                id: "UnsafeUrlConfirmationDialog.allowAccess",
                                defaultMessage: "Allow access"
                            })
                        })]
                    })]
                })
            }
            let nS = (0, n(109939).YK)({
                    waitingForConfirmation: {
                        id: "AgentToolUseFull.waitingForConfirmation",
                        defaultMessage: "Do you want to continue?"
                    },
                    customAgentSetupAdminModeWaitingForConfirmation: {
                        id: "AgentToolUseFull.customAgentSetupAdminModeWaitingForConfirmation",
                        defaultMessage: "Allow {agentName, select, undefined {this agent} other {{agentName}}} to make changes to itself in this session?"
                    },
                    cancel: {
                        id: "AgentToolUseFull.cancel",
                        defaultMessage: "Reject"
                    },
                    deletePagesButton: {
                        id: "AgentToolUseFull.deletePagesButton",
                        defaultMessage: "Delete pages"
                    },
                    continueButton: {
                        id: "AgentToolUseFull.continueButton",
                        defaultMessage: "Continue"
                    }
                }),
                nb = {
                    position: "relative"
                };

            function nj(e) {
                let {
                    resultStepIdsToConfirm: t,
                    variant: a = {
                        type: "continue"
                    }
                } = e, {
                    confirmToolUse: o,
                    rejectToolUse: i
                } = (0, n(101491).Mp)(), s = (0, r.useCallback)(() => {
                    o(t)
                }, [o, t]), l = (0, r.useCallback)(() => {
                    i(t)
                }, [i, t]);
                if ("potentiallyUnsafeUrl" === a.type) return (0, u.jsx)(nx, {
                    urls: a.urls,
                    onConfirm: s,
                    onCancel: l
                });
                if ("salesforceUserConnection" === a.type) return (0, u.jsx)(ny, {
                    resultStepIdsToConfirm: t
                });
                if ("connectIntegration" === a.type) return (0, u.jsx)(nm, {
                    integrationName: a.integrationName,
                    moduleType: a.moduleType,
                    state: a.state,
                    resultStepIdsToConfirm: t
                });
                let d = "customAgentSetupAdminMode" === a.type ? (0, u.jsx)(n(109939).sA, { ...nS.customAgentSetupAdminModeWaitingForConfirmation,
                        values: {
                            agentName: a.agentName
                        }
                    }) : "continue" === a.type && a.waitingText ? a.waitingText : (0, u.jsx)(n(109939).sA, { ...nS.waitingForConfirmation
                    }),
                    c = Array.isArray(d) ? (0, u.jsx)(n(4458).VP, {
                        gap: 2,
                        children: d.map(e => (0, u.jsx)(n(861510).N, {
                            styleKey: "bodyRegular",
                            text: e,
                            animate: !0
                        }, e))
                    }) : (0, u.jsx)(n(861510).N, {
                        styleKey: "bodyRegular",
                        text: d,
                        animate: !0
                    });
                return (0, u.jsxs)(n(4458).fI, {
                    className: "autolayout-row autolayout-fill-width",
                    style: nf.wrapper,
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [c, (0, u.jsxs)(n(4458).fI, {
                        className: "autolayout-row",
                        gap: 8,
                        style: nb,
                        children: [(0, u.jsx)(n(265779).E, {
                            onClick: l,
                            children: (0, u.jsx)(n(109939).sA, { ...nS.cancel
                            })
                        }), "deletePages" === a.type ? (0, u.jsx)(n(912946).A, {
                            onClick: s,
                            colorPalette: "red",
                            children: (0, u.jsx)(n(109939).sA, { ...nS.deletePagesButton
                            })
                        }) : "continue" === a.type || "customAgentSetupAdminMode" === a.type ? (0, u.jsx)(n(912946).A, {
                            onClick: s,
                            colorPalette: "blue",
                            children: (0, u.jsx)(n(109939).sA, { ...nS.continueButton
                            })
                        }) : null]
                    })]
                })
            }
            let nw = (0, n(109939).YK)({
                title: {
                    id: "AgentUpsellStep.title",
                    defaultMessage: "You’ve run out of free Notion AI"
                },
                subtitle: {
                    id: "AgentUpsellStep.subtitle",
                    defaultMessage: "Upgrade to continue using Notion AI to automate and simplify your work."
                },
                subtitleTrial: {
                    id: "AgentUpsellStep.subtitleTrial",
                    defaultMessage: "Start a free trial to keep using Notion AI and automate your work."
                },
                bannerImageAlt: {
                    id: "AgentUpsellStep.bannerImageAlt",
                    defaultMessage: "Image of a couple of hand drawn blocks"
                },
                minimalMessage: {
                    id: "AgentUpsellStep.minimalMessage",
                    defaultMessage: "You’ve run out of free Notion AI. <link>Upgrade</link>."
                }
            });

            function nI(e) {
                let {
                    step: t,
                    threadStore: n,
                    minimal: r = !1,
                    isCustomAgent: a
                } = e;
                return r ? (0, u.jsx)(nM, { ...e
                }) : (0, u.jsx)(nT, {
                    threadStore: n,
                    step: t,
                    isCustomAgent: a
                })
            }
            let nC = {
                message: {
                    fontSize: 14,
                    color: n(632079).Tj.text.primary,
                    lineHeight: 1.4
                },
                link: {
                    color: n(632079).Tj.blue.text.accentPrimary,
                    fontWeight: n(699422).Wy.semibold
                }
            };

            function nM(e) {
                let t = (0, n(109939).tz)(),
                    a = (0, n(533992).v3)(),
                    {
                        step: o
                    } = e,
                    {
                        featureAvailability: i
                    } = o,
                    [s, l] = (0, r.useState)(!1),
                    d = (0, r.useCallback)(() => {
                        (0, n(441746).RV)({
                            environment: a,
                            upsellType: "upsell",
                            isAssistantEnabled: !1,
                            aiUpsell: i.upsell
                        })
                    }, [a, i.upsell]),
                    c = (0, n(960253).I)(() => ({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            minHeight: 42,
                            paddingInline: 12,
                            borderRadius: 6,
                            cursor: "pointer",
                            transition: "background-color 80ms ease-out",
                            backgroundColor: s ? n(632079).Tj.background.tertiary : "transparent"
                        }
                    }), [s]);
                return (0, u.jsx)("div", {
                    role: "button",
                    tabIndex: 0,
                    style: c.container,
                    onClick: d,
                    onMouseEnter: () => l(!0),
                    onMouseLeave: () => l(!1),
                    onKeyDown: e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), d())
                    },
                    children: (0, u.jsx)("span", {
                        style: nC.message,
                        children: t.formatMessage(nw.minimalMessage, {
                            link: e => (0, u.jsx)("span", {
                                style: nC.link,
                                children: e
                            })
                        })
                    })
                })
            }
            let nk = {
                container: {
                    paddingTop: 0,
                    paddingInline: 20,
                    paddingBottom: 20,
                    marginBottom: 20,
                    maxWidth: 500
                },
                title: {
                    fontSize: 16,
                    fontWeight: n(699422).Wy.semibold,
                    color: n(632079).Tj.text.primary,
                    marginBottom: 8
                },
                image: {
                    width: 100
                }
            };

            function nT(e) {
                let t = (0, n(109939).tz)(),
                    r = (0, n(533992).v3)(),
                    {
                        step: a,
                        threadStore: o,
                        isCustomAgent: i
                    } = e,
                    {
                        featureAvailability: s
                    } = a,
                    l = (0, n(960253).e)(),
                    {
                        bodyStyleKey: d
                    } = (0, n(765846).yq)(),
                    c = (0, n(765846).Cd)(d),
                    p = (0, n(682985).K8)(() => o.getSpaceStore(), [o]),
                    g = (0, n(723240).r)(),
                    f = (0, n(217844)._)({
                        name: "ai_usage",
                        spaceId: g,
                        userId: r.currentUser.id,
                        amount: "unknown"
                    }),
                    m = !f && !!g,
                    h = (null == f ? void 0 : f.upsell) ? ? s.upsell,
                    y = i ? "custom_agent" : "ai_agent",
                    {
                        upgradeEligibility: v
                    } = (0, n(79268).C)({
                        upsell: h,
                        source: y,
                        spaceStore: p
                    }),
                    x = "eligible_for_trial" === v.status,
                    S = (0, n(960253).I)(() => ({
                        subtitle: { ...c,
                            color: n(632079).Tj.text.secondary,
                            marginBottom: 20,
                            lineHeight: 1.5
                        },
                        subtitleShimmerContainer: {
                            marginTop: 12,
                            marginBottom: 24
                        },
                        subtitleShimmerFirstLine: {
                            height: 14,
                            width: "90%",
                            borderRadius: 4,
                            marginBottom: 12
                        },
                        subtitleShimmerSecondLine: {
                            height: 14,
                            width: "15%",
                            borderRadius: 4
                        }
                    }), [c]);
                return (0, u.jsxs)(n(22262).Q, {
                    style: nk.container,
                    children: [(0, u.jsx)("img", {
                        style: nk.image,
                        alt: t.formatMessage(nw.bannerImageAlt),
                        src: "dark" === l ? n(896221).A.images.agent.upsellBannerDarkPng : n(896221).A.images.agent.upsellBannerLightPng
                    }), (0, u.jsx)("div", {
                        style: nk.title,
                        children: (0, u.jsx)(n(109939).sA, { ...nw.title
                        })
                    }), m ? (0, u.jsxs)("div", {
                        style: S.subtitleShimmerContainer,
                        children: [(0, u.jsx)(n(795830).P, {
                            style: S.subtitleShimmerFirstLine
                        }), (0, u.jsx)(n(795830).P, {
                            style: S.subtitleShimmerSecondLine
                        })]
                    }) : (0, u.jsx)("div", {
                        style: S.subtitle,
                        children: (0, u.jsx)(n(109939).sA, { ...x ? nw.subtitleTrial : nw.subtitle
                        })
                    }), (0, u.jsx)(n(754951).UpgradeButton, {
                        source: y,
                        upsell: h,
                        display: "primary",
                        spaceStore: p
                    })]
                })
            }

            function nA(e) {
                var t;
                return "agent-tool-result" === e.type && !!(0, a().gY)(e, "callFunction") && "string" == typeof(null == (t = e.input) ? void 0 : t.function) && "connections.computer.downloadFile" === s(e.input.function)
            }

            function nR(e) {
                var t, n;
                return (null == (t = e.result) ? void 0 : t.computerFileSteps) ? ? (null == (n = e.renderedResult) ? void 0 : n.computerFileSteps) ? ? []
            }

            function nD(e) {
                return nR(e).length > 0
            }

            function nP(e) {
                return "chat" === e || "follow-ups" === e || "custom-agent-template-picker" === e
            }

            function nF(e) {
                return "tool-use" === e.type && ("notion.wideResearch" === e.toolName || "callFunction" === e.toolName && (0, n(645604).DC)({
                    toolResultStep: e.toolResultStep,
                    toolUse: e.toolUse
                }))
            }

            function nE(e) {
                return "tool-use" === e.type && "callFunction" === e.toolName && (0, n(645604).JJ)({
                    toolResultStep: e.toolResultStep,
                    toolUse: e.toolUse
                })
            }

            function nN(e, t) {
                return nP(e.type) || nF(e) || !0 === t && nE(e)
            }

            function nU(e, t, r) {
                return !(nN(e, r) || "tool-use" === e.type && "wait" === e.toolName || "tool-use" === e.type && "callFunction" === e.toolName && (0, n(645604).JN)(e.toolResultStep) || "tool-use" === e.type && "escalate" === e.toolName || "tool-use" === e.type && "generate-plan" === e.toolName || !e.isFinished || ("tool-use" === e.type || "search-tool-use" === e.type || "mcp-tool-use" === e.type) && e.toolResultStep && (0, d().I6)(e.toolResultStep) || t.some(d().I6))
            }
            let nV = (0, n(109939).YK)({
                    personalAgentName: {
                        id: "subthreadCard.personalAgentName",
                        defaultMessage: "Notion AI"
                    },
                    calledSubAgent: {
                        id: "subthreadCard.calledSubAgent",
                        defaultMessage: "Called sub-agent"
                    },
                    calledAgent: {
                        id: "subthreadCard.calledAgent",
                        defaultMessage: "Called agent"
                    },
                    statusComplete: {
                        id: "subthreadCard.statusComplete",
                        defaultMessage: "Complete"
                    },
                    statusFailed: {
                        id: "subthreadCard.statusFailed",
                        defaultMessage: "Failed"
                    },
                    statusRunning: {
                        id: "subthreadCard.statusRunning",
                        defaultMessage: "Running"
                    },
                    viewChat: {
                        id: "subthreadCard.viewChat",
                        defaultMessage: "View chat"
                    },
                    noAccess: {
                        id: "subthreadCard.noAccess",
                        defaultMessage: "You do not have access to this thread."
                    }
                }),
                n_ = {
                    card: {
                        border: `1px solid ${n(632079).Tj.border.secondary}`,
                        borderRadius: 8,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingInlineStart: 10,
                        paddingInlineEnd: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        cursor: "pointer",
                        background: "none",
                        width: "100%",
                        textAlign: "start"
                    },
                    cardNoAccess: {
                        cursor: "default"
                    },
                    avatar: {
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    spacer: {
                        flex: "1 1 auto"
                    },
                    statusGroup: {
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: 4
                    },
                    chevron: {
                        flexShrink: 0,
                        fill: n(632079).Tj.icon.tertiary
                    }
                };

            function nB(e) {
                var t, r;
                let o, i, s = e.toolResultStep;
                if (!s || !(0, a().gY)(s, "callFunction")) return {
                    workflowId: void 0,
                    threadUrl: void 0
                };
                let l = null == (t = s.input) ? void 0 : t.args;
                if ((0, n(722371).Gv)(l)) {
                    let e = Reflect.get(l, "agentUrl");
                    "string" == typeof e && (o = (0, n(368584).al)(e))
                }
                let d = null == (r = s.result) ? void 0 : r.output;
                if ("string" == typeof d) try {
                    let e = JSON.parse(d);
                    if ((0, n(722371).Gv)(e)) {
                        let t = Reflect.get(e, "threadUrl");
                        "string" == typeof t && (i = t)
                    }
                } catch (e) {
                    (0, n(222024).t)().error({
                        from: "SubthreadCard",
                        type: "failedToParseCallFunctionOutput",
                        error: e
                    })
                }
                return {
                    workflowId: o,
                    threadUrl: i
                }
            }

            function nL(e) {
                let {
                    partData: t,
                    spaceStore: o,
                    hasAccess: i
                } = e, s = (0, n(533992).v3)(), l = (0, n(109939).tz)(), d = (0, r.useMemo)(() => nB(t), [t]), p = (0, r.useMemo)(() => {
                    if (o && d.workflowId && d.workflowId !== n(180139).Lj) return n(360851).N.createChildStore(o, {
                        table: c().C0E,
                        id: d.workflowId,
                        spaceId: o.id
                    })
                }, [o, d.workflowId]), g = d.workflowId === n(180139).Lj || "" === d.workflowId, f = (0, n(682985).K8)(() => null == p ? void 0 : p.getRawIcon(), [p]), m = (0, n(682985).K8)(() => g ? l.formatMessage(nV.personalAgentName) : d.workflowId ? null == p ? void 0 : p.getName() : void 0, [g, d.workflowId, p, l]), h = (0, r.useMemo)(() => {
                    if (!d.threadUrl) return;
                    let e = (0, n(140030).X1)(d.threadUrl, {
                        baseUrl: n(986939).A.domainBaseUrl,
                        publicDomainName: n(986939).A.publicDomainName
                    });
                    if ((null == e ? void 0 : e.type) === "thread") return {
                        threadId: e.threadId,
                        spaceId: e.spaceId
                    }
                }, [d.threadUrl]), y = t.isFinished, v = void 0 !== t.toolResultStep && "applied:error" === (0, a().Gu)(t.toolResultStep), x = (0, n(960253).e)(), S = (0, r.useMemo)(() => (0, n(632079).O4)({
                    theme: x
                }), [x]), b = (0, r.useCallback)(() => {
                    if (!i || !h) return;
                    let e = (0, n(862451).createInferenceTranscriptChatRoute)({
                        environment: s,
                        threadId: h.threadId,
                        spaceId: h.spaceId,
                        forceRouteToChat: !0
                    });
                    (0, n(79266).navigate)({
                        environment: s,
                        url: e
                    })
                }, [i, h, s]), [j, w] = (0, r.useState)(!1), I = (0, r.useCallback)(() => w(!0), []), C = (0, r.useCallback)(() => w(!1), []), M = (0, u.jsxs)("button", {
                    type: "button",
                    style: { ...n_.card,
                        ...i ? void 0 : n_.cardNoAccess
                    },
                    onClick: b,
                    onMouseEnter: I,
                    onMouseLeave: C,
                    children: [(0, u.jsx)("div", {
                        style: n_.avatar,
                        children: p ? (0, u.jsx)(n(651790).AgentIcon, {
                            agentIcon: f,
                            workflowStore: p,
                            size: 20
                        }) : (0, u.jsx)(n(651790).DefaultAgentIcon, {
                            size: 20
                        })
                    }), (0, u.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: (0, u.jsx)(n(109939).sA, { ...void 0 !== m ? nV.calledAgent : nV.calledSubAgent
                        })
                    }), void 0 !== m ? (0, u.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        lineClamp: 1,
                        children: m
                    }) : void 0, (0, u.jsx)("div", {
                        style: n_.spacer
                    }), j && i ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: (0, u.jsx)(n(109939).sA, { ...nV.viewChat
                            })
                        }), (0, u.jsx)(n(16275).I, {
                            icon: n(491469).arrowChevronSingleRightSmallIcon,
                            size: "xs",
                            style: n_.chevron
                        })]
                    }) : (0, u.jsxs)("div", {
                        style: n_.statusGroup,
                        children: [y ? (0, u.jsx)(n(16275).I, {
                            icon: v ? n(966559).exclamationMarkCircleSmallIcon : n(437102).checkmarkCircleSmallIcon,
                            size: "xs",
                            colorVariant: "secondary"
                        }) : (0, u.jsx)(n(265035).ScrollingSquiggle, {
                            width: 14,
                            height: 10,
                            strokeColor: S.icon.secondary
                        }), (0, u.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: y ? (0, u.jsx)(n(109939).sA, { ...v ? nV.statusFailed : nV.statusComplete
                            }) : (0, u.jsx)(n(109939).sA, { ...nV.statusRunning
                            })
                        })]
                    })]
                });
                return i ? M : (0, u.jsx)(n(51831).m, {
                    content: () => l.formatMessage(nV.noAccess),
                    children: e => (0, u.jsx)("div", { ...e,
                        children: M
                    })
                })
            }
            let nK = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.37 11.75 9.25",
                    svg: (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("path", {
                            d: "M4.48 5.545a.575.575 0 0 0 0 1.15h5.032a.575.575 0 1 0 0-1.15zm1.1 1.88a.575.575 0 1 0 0 1.15h5.033a.575.575 0 0 0 0-1.15zm.91 1.88a.575.575 0 1 0 0 1.15h5.032a.575.575 0 1 0 0-1.15z"
                        }), (0, u.jsx)("path", {
                            d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h8c1.036 0 1.875-.84 1.875-1.875v-5.5c0-1.036-.84-1.875-1.875-1.875zM3.375 5.25c0-.345.28-.625.625-.625h8c.345 0 .625.28.625.625v5.5c0 .345-.28.625-.625.625H4a.625.625 0 0 1-.625-.625z"
                        })]
                    })
                },
                nO = (0, n(104509).wt)("viewTimelineSmall", nK, "small");

            function nz(e) {
                let {
                    headerBlockValue: t,
                    threadTitle: r,
                    intl: a
                } = e;
                return void 0 !== t ? t : void 0 !== r ? n(247438).x9d(r) : n(247438).x9d(a.formatMessage(nq.defaultPageTitle))
            }

            function nW(e) {
                var t;
                let n = e[0],
                    r = (null == n ? void 0 : n.getType()) === "header" || (null == n ? void 0 : n.getType()) === "sub_header" ? n : void 0;
                return {
                    headerBlockStore: r,
                    headerBlockValue: null == r || null == (t = r.getTitleStore()) ? void 0 : t.getValue()
                }
            }
            let n$ = {
                    default: n(104509).Ev.sm,
                    large: n(104509).lD.default
                },
                nq = (0, n(109939).YK)({
                    responseCopied: {
                        id: "aiInferenceTranscript.agentActionsRow.copiedToClipboard",
                        defaultMessage: "Response copied to clipboard"
                    },
                    saveToPage: {
                        id: "aiInferenceTranscript.agentActionsRow.saveToPage",
                        defaultMessage: "Save to private pages"
                    },
                    defaultPageTitle: {
                        id: "inferenceTranscript.AIStepFollowupAction.defaultPageTitle",
                        defaultMessage: "AI Summary"
                    },
                    insertIntoPage: {
                        id: "aiInferenceTranscript.agentActionsRow.saveToCurrentPage",
                        defaultMessage: "Insert into this page"
                    },
                    insertIntoDatabase: {
                        id: "aiInferenceTranscript.agentActionsRow.saveToDatabase",
                        defaultMessage: "Create page in this database"
                    },
                    retry: {
                        id: "aiInferenceTranscript.agentActionsRow.retry",
                        defaultMessage: "Retry"
                    },
                    braintrustQuickLink: {
                        id: "aiInferenceTranscript.agentActionsRow.copyBraintrustLink",
                        defaultMessage: "[INTERNAL] Copy Braintrust logs link"
                    },
                    undoLaterTurnsFirst: {
                        id: "aiInferenceTranscript.agentActionsRow.undoLaterTurnsFirst",
                        defaultMessage: "To undo this, you’ll need to undo the most recent changes from this chat first"
                    }
                });

            function nY(e) {
                var t;
                let a, o, {
                        isHovered: i,
                        runningInference: s,
                        turn: l,
                        threadStore: d,
                        configType: p,
                        isCustomAgent: g,
                        spaceStore: f,
                        isLastTurn: m,
                        parts: h,
                        threadId: y,
                        previousUserPromptKey: v,
                        variant: x,
                        aiChatFeatureController: S,
                        workflowStore: b
                    } = e,
                    j = (0, n(533992).v3)(),
                    w = (0, n(109939).tz)(),
                    I = (0, n(682985).K8)(() => "on" === n(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_agent_retry_button",
                        defaultGroup: "control"
                    }), []),
                    C = (0, n(83208).X)("agent_braintrust_quick_link"),
                    M = (0, r.useMemo)(() => l.steps.some(e => "survey" === e.type && !e.submitted), [l.steps]),
                    k = (0, n(682985).K8)(() => {
                        var e, t, r;
                        let a = null == (e = d.getData()) ? void 0 : e.run_id;
                        if (!a || !(null != f && f.id)) return !1;
                        let o = null == (t = n(849697).t.createChildStore(f, {
                            table: c().QRx,
                            id: a,
                            spaceId: f.id
                        }).getData()) ? void 0 : t.paused_reason;
                        return !!o && (null == b || null == (r = b.getDraftData()) || null == (r = r.paused_reason) ? void 0 : r.reason) === o
                    }, [d, f, b]),
                    {
                        undoableToolResults: T,
                        hasModifiedRecords: A,
                        feedbackStep: R,
                        feedbackTraceId: D
                    } = (0, n(896045).N)({
                        turn: l,
                        parts: h,
                        spaceStore: f
                    }),
                    {
                        operationsToUndo: P,
                        stepsWithOperationsToUndo: F,
                        hasUndoneOperations: E
                    } = (0, e1().ji)({
                        diffResultSteps: T,
                        threadStore: d
                    }),
                    {
                        handleUndo: N
                    } = (0, n(860024).c)({
                        operationsToUndo: P,
                        stepsWithOperationsToUndo: F,
                        threadOverrideStore: d
                    }),
                    [U, V] = (0, r.useState)(!1),
                    [_, L] = (0, r.useState)(!1),
                    K = function(e) {
                        let {
                            hasUndoneOperations: t,
                            operationsToUndo: n
                        } = e;
                        return (0, r.useMemo)(() => t && 0 === n.length ? "reverted" : n.length > 0 ? "undo" : "none", [t, n])
                    }({
                        hasUndoneOperations: E,
                        operationsToUndo: P
                    }),
                    O = (0, n(469424).E)(),
                    z = l.steps.length > 0,
                    W = h.some(e => e.isFinished) || 0 === h.length && z || (null == (t = l.steps.at(-1)) ? void 0 : t.type) === "error" && m,
                    $ = h.some(e => {
                        var t;
                        return "tool-use" === e.type && (null == (t = e.toolResultStep) ? void 0 : t.userConfirmation) === "requested"
                    }),
                    q = (W || 0 === h.length) && !$ && !s && !!l.lastStepId,
                    Y = !!R && !!D && !!d && q,
                    H = A && "undo" === K,
                    G = O === l.feedbackComponentIndex,
                    Q = q || U,
                    X = H && G;
                (0, n(83208).X)("agent_diffs_undo_button") ? (a = H && Q, o = !G) : (a = X && Q, o = !1);
                let J = A && "reverted" === K && q,
                    Z = Y && I,
                    ee = C && Y ? R : void 0,
                    et = C && Y ? D : void 0,
                    en = !s && !M && (i || m && q),
                    er = i || m && a,
                    ea = (0, r.useCallback)(() => {
                        if (!_) {
                            try {
                                let e = B().calculateMetricsFromTranscript(Array.from(F));
                                B().trackUndoClicked({
                                    environment: j,
                                    from: "undo_button",
                                    undoneToolTypes: e.toolTypes
                                })
                            } catch (e) {}
                            L(!0), N().finally(() => {
                                L(!1), V(!1)
                            })
                        }
                    }, [j, N, _, F]),
                    {
                        handleRetry: eo,
                        retryFromStepId: ei
                    } = function(e) {
                        let t = (0, n(533992).v3)(),
                            {
                                threadStore: a
                            } = e,
                            o = (0, n(682985).K8)(() => {
                                var e;
                                return null == (e = a.getTranscript().findLast(e => "user" === e.type)) ? void 0 : e.id
                            }, [a]);
                        return {
                            handleRetry: (0, r.useCallback)(() => {
                                o && (0, n(757688).WF)({
                                    environment: t,
                                    threadStore: a,
                                    stepId: o,
                                    isRetry: !0
                                })
                            }, [t, a, o]),
                            retryFromStepId: o
                        }
                    }({
                        threadStore: d
                    }),
                    es = (0, r.useMemo)(() => (0, n(490591).Lq)({
                        turn: l
                    }).trim(), [l]),
                    el = (0, r.useMemo)(() => l.steps.some(e => "agent-search-query-generation" === e.type && e.queries.some(e => e.maybeNotionHelp)), [l.steps]),
                    ed = (0, r.useMemo)(() => l.steps.some(e => "agent-inference" === e.type), [l.steps]),
                    ec = (0, r.useCallback)(() => {
                        var e;
                        let t;
                        try {
                            t = X ? B().calculateMetricsFromTranscript(Array.from(F)) : void 0
                        } catch (e) {}
                        B().trackAgentRetryButtonClicked({
                            environment: j,
                            stepId: ei ? ? "",
                            promptKey: v,
                            hasUndo: X,
                            undoneToolTypes: X && null != (e = t) && e.toolTypes ? t.toolTypes : []
                        }), X ? (V(!1), N().finally(() => {
                            eo()
                        })) : eo()
                    }, [eo, N, X, j, v, ei, F]);
                (0, r.useEffect)(() => {
                    n(469424).f.updateStatus({
                        threadId: y,
                        index: l.feedbackComponentIndex,
                        status: K,
                        previousStepId: l.previousStepId
                    })
                }, [l.feedbackComponentIndex, K, y, l.previousStepId]);
                let eu = (0, n(960253).I)(() => ({
                        hoverDependentActions: {
                            position: "relative",
                            opacity: +!!en,
                            transition: "opacity 0.2s ease",
                            ...M && {
                                pointerEvents: "none"
                            }
                        },
                        undoActions: {
                            position: "relative",
                            opacity: +!!er,
                            transition: "opacity 0.2s ease",
                            ...M && {
                                pointerEvents: "none"
                            }
                        }
                    }), [en, er, M]),
                    ep = "slippery_slope" === (null == S ? void 0 : S.aiChatType);
                return (0, u.jsx)(n(4458).fI, {
                    className: "autolayout-fill-width",
                    height: 48,
                    paddingTop: "large" === x ? 12 : 8,
                    paddingInlineStart: ep ? 8 : void 0,
                    paddingInlineEnd: ep ? 8 : void 0,
                    style: {
                        position: "relative"
                    },
                    alignItems: "flex-start",
                    children: (0, u.jsxs)(n(4458).fI, {
                        style: {
                            gap: "large" === x ? 4 : void 0,
                            ...eu.hoverDependentActions
                        },
                        alignItems: "center",
                        className: "autolayout-row",
                        flex: "1 1 0",
                        children: [(null == R ? void 0 : R.type) !== "error" && ed ? (0, u.jsxs)(u.Fragment, {
                            children: [void 0 !== ee && void 0 !== et ? (0, u.jsx)(nX, {
                                runningInference: s,
                                variant: x,
                                threadStore: d,
                                feedbackStep: ee,
                                traceId: et,
                                promptKey: v
                            }) : void 0, (0, u.jsx)(nQ, {
                                runningInference: s,
                                variant: x,
                                agentResponseMarkdown: es,
                                spaceStore: f,
                                threadStore: d,
                                configType: p
                            }), g ? null : (0, u.jsx)(nG, {
                                turn: l,
                                runningInference: s,
                                variant: x,
                                threadStore: d,
                                configType: p,
                                spaceStore: f
                            })]
                        }) : null, Z ? (0, u.jsx)(nH, {
                            disabled: s || !ei || U || k,
                            variant: x,
                            onClick: ec
                        }) : void 0, Y && R && D ? (0, u.jsx)(nJ, {
                            step: R,
                            traceId: D,
                            threadStore: d,
                            previousUserPromptKey: v,
                            variant: x
                        }) : void 0, !s && el ? (0, u.jsx)(n9, {
                            turn: l,
                            threadId: y,
                            variant: x,
                            spaceStore: f
                        }) : void 0, a ? (0, u.jsxs)(n(4458).fI, {
                            style: {
                                gap: "large" === x ? void 0 : 4,
                                ...eu.undoActions
                            },
                            alignItems: "center",
                            className: "autolayout-row",
                            flex: "1 1 0",
                            children: [_ && U ? void 0 : (0, u.jsx)(n0, {
                                isConfirmingUndo: U,
                                onClick: () => V(!U),
                                variant: x,
                                disabled: o,
                                disabledTooltip: w.formatMessage(nq.undoLaterTurnsFirst)
                            }), U && !o ? (0, u.jsx)(n1, {
                                onClick: ea,
                                variant: x,
                                isLoading: _
                            }) : void 0]
                        }) : void 0, J ? (0, u.jsx)(nZ, {}) : void 0]
                    })
                })
            }

            function nH(e) {
                let t = (0, n(109939).tz)(),
                    {
                        onClick: r,
                        variant: a,
                        disabled: o
                    } = e;
                return (0, u.jsx)(n(51831).m, {
                    content: () => (0, u.jsx)(n(109939).sA, { ...nq.retry
                    }),
                    children: e => (0, u.jsx)(n(374533).A, {
                        icon: {
                            icon: "large" === a ? n(194123).a : n(670989).l,
                            size: n$[a]
                        },
                        size: "md",
                        ariaLabel: t.formatMessage(nq.retry),
                        onClick: r,
                        disabled: o,
                        ...e
                    })
                })
            }

            function nG(e) {
                let {
                    runningInference: t,
                    variant: a,
                    turn: o,
                    threadStore: i,
                    configType: s,
                    spaceStore: l
                } = e, d = (0, n(109939).tz)(), p = (0, n(533992).v3)(), g = (0, n(345776).T)(), f = (0, r.useMemo)(() => (0, n(490591).Lq)({
                    turn: o,
                    lastStepOnly: !0
                }).trim(), [o]), m = (0, n(83208).X)("ai_image_generation"), h = (0, n(682985).K8)(() => l.isAiImageGenerationEnabledOnSpace(), [l]), y = m && h, v = (0, r.useMemo)(() => y ? n(674230).W.filter(e => "image" !== e) : n(674230).W, [y]), x = (0, r.useMemo)(() => [...v, "edit_reference", "meeting_time_suggestions"], [v]), S = (0, n(682985).K8)(() => {
                    let e = i.getTranscript().find(e => "title" === e.type);
                    return null == e ? void 0 : e.value
                }, [i]), {
                    currentPageStore: b,
                    destinationType: j
                } = (0, n(682985).K8)(() => {
                    let e = (0, n(330870).a)();
                    return {
                        currentPageStore: e,
                        destinationType: null != e && e.isCollectionView() ? "database" : null != e && e.isPageBlock() ? "page" : "private"
                    }
                }, []), w = (0, n(254505).m)(), I = (0, r.useCallback)(e => {
                    (0, n(545586).navigateToBlock)({
                        environment: p,
                        store: e,
                        pageVisitSource: n(254656).y8.AIQna,
                        openInSidePeek: w || void 0
                    })
                }, [p, w]), C = (0, r.useCallback)(e => {
                    let {
                        pageStore: t,
                        headerBlockStore: r,
                        transaction: a
                    } = e;
                    r && (n(579695).zz({
                        parentStore: t,
                        childStore: r,
                        transaction: a
                    }), (0, n(173157).z)({
                        store: r,
                        data: {
                            alive: !1
                        },
                        transaction: a
                    }))
                }, []), M = (0, r.useCallback)(async e => {
                    let t = await (0, n(323836).M)({
                        environment: p,
                        from: "ai_agent",
                        pageVisitSource: n(254656).y8.AIQna,
                        navigateOnCreate: !1
                    });
                    if (!t) return;
                    let r = t.getSpaceId(),
                        a = (0, n(33983).a9)({
                            markdown: f,
                            pageId: t.id,
                            spaceId: r,
                            idCreator: p.idCreator.getSpaceIdCreatorSync(r),
                            actorPointer: {
                                table: c().oo9,
                                id: e
                            },
                            citationFormat: "link",
                            omitBlockTypes: x
                        });
                    (0, n(377796).createAndCommit)({
                        userAction: "AgentTranscript.saveTurnToPage",
                        environment: p,
                        cellTarget: {
                            spaceWithId: r
                        },
                        canUndo: !1,
                        perform: e => {
                            let {
                                headerBlockStore: r,
                                headerBlockValue: o
                            } = nW((0, n(33983).HS)({
                                environment: p,
                                transaction: e,
                                rootStore: t,
                                blockOperations: a
                            })), i = nz({
                                headerBlockValue: o,
                                threadTitle: S,
                                intl: d
                            });
                            n(41403).R9({
                                environment: p,
                                store: t.getBlockTitleStore(),
                                value: i,
                                transaction: e
                            }), C({
                                pageStore: t,
                                headerBlockStore: r,
                                transaction: e
                            })
                        }
                    }), I(t)
                }, [p, I, C, d, S, f, x]), k = (0, r.useCallback)((e, t) => {
                    let r = e.getSpaceId(),
                        a = (0, n(33983).a9)({
                            markdown: f,
                            pageId: e.id,
                            spaceId: r,
                            idCreator: p.idCreator.getSpaceIdCreatorSync(r),
                            actorPointer: {
                                table: c().oo9,
                                id: t
                            },
                            citationFormat: "link",
                            omitBlockTypes: x,
                            isUrlAllowed: n(203489).C
                        }),
                        o = [],
                        i = e.isEmptyPage();
                    (0, n(377796).createAndCommit)({
                        userAction: "AgentTranscript.saveTurnToExistingPage",
                        environment: p,
                        cellTarget: {
                            spaceWithId: r
                        },
                        canUndo: !1,
                        perform: t => {
                            let r = (0, n(33983).HS)({
                                environment: p,
                                transaction: t,
                                rootStore: e,
                                blockOperations: a
                            });
                            for (let e of r) o.push(e.id);
                            if (!i) return;
                            let {
                                headerBlockStore: s,
                                headerBlockValue: l
                            } = nW(r), c = nz({
                                headerBlockValue: l,
                                threadTitle: S,
                                intl: d
                            });
                            if (n(41403).R9({
                                    environment: p,
                                    store: e.getBlockTitleStore(),
                                    value: c,
                                    transaction: t
                                }), s) {
                                let e = o.indexOf(s.id);
                                e >= 0 && o.splice(e, 1)
                            }
                            C({
                                pageStore: e,
                                headerBlockStore: s,
                                transaction: t
                            })
                        }
                    }), o.length > 0 && n(374176).default.afterNextFlush(() => {
                        (0, n(250717).B)(o, !1, p)
                    })
                }, [p, d, C, S, f, x]), T = (0, r.useCallback)(async (e, t) => {
                    let r, a = (0, n(444610).U)(e);
                    if (!a) return M(t);
                    let o = !1;
                    ((0, n(377796).createAndCommit)({
                        userAction: "AgentTranscript.saveTurnToDatabase",
                        environment: p,
                        cellTarget: {
                            spaceWithId: l.id
                        },
                        canUndo: !1,
                        perform: e => {
                            let i = (0, n(127872).H)({
                                environment: p,
                                collectionContextStore: a,
                                groupsPointer: [],
                                insertAtIndex: 0,
                                shouldCoerce: !1,
                                transaction: e,
                                from: {
                                    createBlock: "cvb_add_item"
                                },
                                inMemoryRecordCache: p.defaultRecordCache.inMemoryRecordCache,
                                isKeyboard: !1
                            });
                            if (!i) {
                                o = !0;
                                return
                            }
                            let s = i.newStore;
                            r = s;
                            let l = s.getSpaceId(),
                                u = (0, n(33983).a9)({
                                    markdown: f,
                                    pageId: s.id,
                                    spaceId: l,
                                    idCreator: p.idCreator.getSpaceIdCreatorSync(l),
                                    actorPointer: {
                                        table: c().oo9,
                                        id: t
                                    },
                                    citationFormat: "link",
                                    omitBlockTypes: x,
                                    isUrlAllowed: n(203489).C
                                }),
                                {
                                    headerBlockStore: g,
                                    headerBlockValue: m
                                } = nW((0, n(33983).HS)({
                                    environment: p,
                                    transaction: e,
                                    rootStore: s,
                                    blockOperations: u
                                })),
                                h = nz({
                                    headerBlockValue: m,
                                    threadTitle: S,
                                    intl: d
                                });
                            n(41403).R9({
                                environment: p,
                                store: s.getBlockTitleStore(),
                                value: h,
                                transaction: e
                            }), C({
                                pageStore: s,
                                headerBlockStore: g,
                                transaction: e
                            })
                        }
                    }), o) ? await M(t): r && I(r)
                }, [p, I, C, M, d, S, f, x, l.id]), A = (0, r.useCallback)(async e => {
                    if (f && g) {
                        if (null != e && e.isCollectionView()) return void await T(e, g);
                        if (null != e && e.isPageBlock()) return void k(e, g);
                        await M(g)
                    }
                }, [k, T, g, M, f]), R = "database" === j ? nq.insertIntoDatabase : "page" === j ? nq.insertIntoPage : nq.saveToPage;
                if (!f) return null;
                let D = d.formatMessage(R);
                return (0, u.jsx)(n(51831).m, {
                    content: () => (0, u.jsx)(n(109939).sA, { ...R
                    }),
                    children: e => (0, u.jsx)(n(374533).A, {
                        icon: {
                            icon: "large" === a ? n(581923).plusIcon : n(638501).plusSmallIcon,
                            size: n$[a]
                        },
                        size: "md",
                        ariaLabel: D,
                        onClick: () => {
                            B().trackAgentFollowUpAction({
                                threadId: i.id,
                                mode: s,
                                action: "save_as_page"
                            }), A(b)
                        },
                        disabled: t,
                        ...e
                    })
                })
            }

            function nQ(e) {
                let {
                    runningInference: t,
                    variant: a,
                    agentResponseMarkdown: o,
                    spaceStore: i,
                    threadStore: s,
                    configType: l
                } = e, d = (0, n(109939).tz)(), c = (0, n(533992).v3)(), p = (0, r.useCallback)(async () => {
                    B().trackAgentFollowUpAction({
                        threadId: s.id,
                        mode: l,
                        action: "copy"
                    }), await (0, n(945009).w)({
                        environment: c,
                        spaceStore: i,
                        copySourceData: {
                            type: "markdown",
                            markdown: o,
                            name: "AgentCopyResponseButton.copy"
                        },
                        copiedMessageLabel: d.formatMessage(nq.responseCopied)
                    })
                }, [o, l, c, i, s, d]), g = d.formatMessage({
                    id: "aiInferenceTranscript.agentActionsRow.copyResponse",
                    defaultMessage: "Copy response"
                });
                return (0, u.jsx)(n(51831).m, {
                    content: () => g,
                    children: e => (0, u.jsx)(n(374533).A, {
                        icon: {
                            icon: "large" === a ? n(703696).V : n(682006).a,
                            size: n$[a]
                        },
                        size: "md",
                        ariaLabel: g,
                        onClick: () => {
                            p()
                        },
                        disabled: t,
                        ...e
                    })
                })
            }

            function nX(e) {
                let {
                    runningInference: t,
                    variant: a,
                    threadStore: o,
                    feedbackStep: i,
                    traceId: s,
                    promptKey: l
                } = e, d = (0, n(109939).tz)(), c = (0, n(533992).v3)(), p = (0, r.useCallback)(() => {
                    let e = o.getTranscript().find(e => "config" === e.type);
                    if (void 0 === e || "config" !== e.type) return;
                    let t = o.getSpaceId();
                    if (void 0 === t) return;
                    (0, n(522259).WB)({
                        environment: c,
                        type: e.value.type,
                        traceId: s,
                        spaceId: t,
                        feedbackType: void 0,
                        userComment: void 0,
                        threadId: o.id,
                        stepId: i.id,
                        config: e.value,
                        promptKey: l
                    });
                    let r = (0, n(998884).s0)({
                        environmentName: "production",
                        projectSuffix: e.value.type,
                        traceId: s
                    });
                    (async () => {
                        let [e, t] = await Promise.all([(0, n(161333).r)(), (0, n(969899).jd)()]);
                        t({
                            environment: c,
                            stringValue: r,
                            copiedMessage: e.copiedLinkToClipboard
                        })
                    })()
                }, [c, i.id, l, o, s]), g = d.formatMessage(nq.braintrustQuickLink);
                return (0, u.jsx)(n(51831).m, {
                    content: () => g,
                    children: e => (0, u.jsx)(n(374533).A, {
                        icon: {
                            icon: "large" === a ? n(840745).u : nO,
                            size: n$[a]
                        },
                        size: "md",
                        ariaLabel: g,
                        onClick: p,
                        disabled: t,
                        ...e
                    })
                })
            }

            function nJ(e) {
                let {
                    step: t,
                    traceId: r,
                    threadStore: a,
                    previousUserPromptKey: o,
                    variant: i
                } = e;
                return (0, u.jsxs)(u.Fragment, {
                    children: ["error" !== t.type ? (0, u.jsx)(n(305406).zg, {
                        step: t,
                        traceId: r,
                        feedbackType: "thumbs_up",
                        threadStore: a,
                        iconColorVariant: "secondary",
                        mode: "feedback-positive",
                        promptKey: o,
                        variant: i
                    }) : void 0, (0, u.jsx)(n(305406).zg, {
                        step: t,
                        traceId: r,
                        feedbackType: "thumbs_down",
                        threadStore: a,
                        iconColorVariant: "secondary",
                        variant: i,
                        promptKey: o,
                        label: "error" === t.type ? (0, u.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: (0, u.jsx)(n(109939).sA, {
                                id: "AgentUserFeedbackActions.errorFeedbackText",
                                defaultMessage: "Share feedback"
                            })
                        }) : void 0
                    })]
                })
            }

            function nZ() {
                return (0, u.jsx)(n(4458).fI, {
                    marginInlineStart: 6,
                    alignItems: "center",
                    children: (0, u.jsx)(n(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "secondary",
                        children: (0, u.jsx)(n(109939).sA, {
                            id: "AgentUserFeedbackActions.changesReverted",
                            defaultMessage: "Changes reverted"
                        })
                    })
                })
            }

            function n0(e) {
                let {
                    isConfirmingUndo: t,
                    onClick: r,
                    variant: a,
                    disabled: o,
                    disabledTooltip: i
                } = e, s = (0, n(109939).YK)({
                    labelCancel: {
                        id: "AgentUserFeedbackActions.cancel",
                        defaultMessage: "Cancel"
                    },
                    labelUndo: {
                        id: "AgentUserFeedbackActions.undo",
                        defaultMessage: "Undo"
                    }
                });
                if (t) return (0, u.jsx)(n(988022).p, {
                    size: "md",
                    onClick: r,
                    colorVariant: "secondary",
                    iconLeading: {
                        icon: "large" === a ? n(117152).xMarkIcon : n(25094).xMarkSmallIcon,
                        size: n$[a]
                    },
                    children: (0, u.jsx)(n(111010).D, {
                        styleKey: "captionMedium",
                        children: (0, u.jsx)(n(109939).sA, { ...s.labelCancel
                        })
                    })
                }, "cancel");
                let l = (0, u.jsx)(n(988022).p, {
                    size: "md",
                    onClick: o ? void 0 : r,
                    colorVariant: "secondary",
                    disabled: o,
                    disabledFeedback: o,
                    iconLeading: {
                        icon: "large" === a ? n(325336).arrowUTurnUpLeftIcon : n(555326).arrowUTurnUpLeftSmallIcon,
                        size: n$[a]
                    },
                    children: (0, u.jsx)(n(111010).D, {
                        styleKey: "captionMedium",
                        children: (0, u.jsx)(n(109939).sA, { ...s.labelUndo
                        })
                    })
                }, "undo");
                return o && i ? (0, u.jsx)(n(51831).m, {
                    content: () => i,
                    placement: "top",
                    children: e => (0, u.jsx)("div", { ...e,
                        children: l
                    })
                }) : l
            }

            function n1(e) {
                let {
                    onClick: t,
                    variant: r,
                    isLoading: a
                } = e, o = !0 === a, i = (0, n(109939).YK)({
                    labelConfirmUndo: {
                        id: "AgentUserFeedbackActions.confirmUndo",
                        defaultMessage: "Confirm Undo"
                    }
                });
                return (0, u.jsx)(n(988022).p, {
                    size: "md",
                    onClick: t,
                    colorPalette: o ? void 0 : "red",
                    colorVariant: o ? "secondary" : void 0,
                    iconLeading: o ? void 0 : {
                        icon: "large" === r ? n(15956).checkmarkIcon : n(971730).checkmarkSmallIcon,
                        size: n$[r]
                    },
                    isLoading: a,
                    children: (0, u.jsx)(n(111010).D, {
                        styleKey: "captionMedium",
                        children: (0, u.jsx)(n(109939).sA, { ...i.labelConfirmUndo
                        })
                    })
                })
            }

            function n9(e) {
                let {
                    turn: t,
                    variant: a,
                    threadId: o,
                    spaceStore: i
                } = e, {
                    isMobileNative: s
                } = (0, n(533992).Y0)(), l = (0, n(109939).YK)({
                    labelGetHelp: {
                        id: "AgentUserFeedbackActions.getHelp",
                        defaultMessage: "Contact Notion support"
                    }
                }), d = (0, n(533992).v3)(), c = (0, n(682985).K8)(() => (0, n(147470).Q)() && n(453997).default.state.isZendeskEnabled, []), {
                    value: p
                } = (0, n(815048).fJ)(n(310639).assistantDependency), [g, f] = (0, n(68740).P)(1), m = (0, r.useRef)(!1);
                (0, r.useEffect)(() => {
                    f && !m.current && (m.current = !0, B().trackGetHelpButtonImpression({
                        environment: d,
                        threadId: o
                    }))
                }, [f, d, o]);
                let h = (0, r.useCallback)(async () => {
                    if (n(803854).VX(d, {
                            qnaSessionId: o,
                            from: "qna_modal_chat"
                        }), null == p || p.assistantAnalyticsActions.trackAiDetectedGetSupportPillClick({
                            sessionId: o
                        }), c) {
                        (0, n(984107).dismissChatSidebar)();
                        let e = await n5(t.steps[0], o, i);
                        n(963430).S({
                            environment: d,
                            from: "ai_assistant_pill",
                            prepopulatedContent: e
                        })
                    } else s ? n(51599).r.setState({ ...n(51599).r.state,
                        open: !0,
                        source: "transcriptAgent"
                    }) : null == p || p.assistantMenuActions.openCornerChatHelp()
                }, [c, t.steps, d, o, s, i, p]);
                return p ? (0, u.jsx)(n(988022).p, {
                    ref: g,
                    size: "md",
                    onClick: h,
                    colorVariant: "secondary",
                    iconLeading: {
                        icon: "large" === a ? n(80094).questionMarkCircleIcon : n(211052).questionMarkCircleSmallIcon,
                        size: n$[a]
                    },
                    children: (0, u.jsx)(n(111010).D, {
                        styleKey: "captionMedium",
                        children: (0, u.jsx)(n(109939).sA, { ...l.labelGetHelp
                        })
                    })
                }, "get-help") : null
            }
            async function n5(e, t, r) {
                if (!r) return;
                let a = n(174148).E.createChildStore(r, {
                        table: c().Toz,
                        id: t,
                        spaceId: r.id
                    }).getTranscript(),
                    o = a.findIndex(t => t.id === e.id),
                    i = a.slice(0, o).find(e => "user" === e.type);
                if (i) return await (0, n(444700).rf)({
                    value: i.value,
                    loadRecordModel: r.loadRecordModel
                })
            }
            var n2 = () => n(500461);
            let n8 = (0, n(109939).YK)({
                    resultsTitle: {
                        id: "triggeredRunChangeSummary.resultsTitle",
                        defaultMessage: "Results"
                    }
                }),
                n3 = {
                    triggerPillLine: {
                        height: 15,
                        width: 1.5,
                        backgroundColor: n(632079).Tj.border.secondary,
                        marginInlineStart: 20
                    },
                    wrapper: {
                        borderRadius: 10,
                        overflow: "hidden",
                        boxShadow: `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px`
                    },
                    menuList: {
                        marginInline: 0
                    },
                    section: {
                        padding: 4
                    }
                },
                n6 = {
                    update: 1,
                    create: 2,
                    delete: 3
                };

            function n4(e, t) {
                return e ? t && n6[t] > n6[e] ? t : e : t
            }

            function n7(e) {
                return `${e.table}-${e.id}`
            }

            function re(e) {
                let {
                    turnSteps: t,
                    spaceStore: o,
                    aiChatFeatureController: i
                } = e, s = (0, n(109939).tz)(), l = (0, n(533992).v3)(), p = (0, n(960253).e)(), g = (0, n(254505).m)(), f = (0, r.useMemo)(() => t.filter(e => !(!("agent-tool-result" === e.type && (0, n(722371).Xk)(a().MV, e.toolType) && (0, d().nP)(e)) || (0, d().dB)(e)) || "agent-tool-result" !== e.type && !1), [t]), m = (0, r.useMemo)(() => (function(e, t) {
                    let r = new Map;
                    for (let o of e) {
                        let e = function(e) {
                                let t = new Map;
                                for (let a of e.threadOperations ? ? []) {
                                    var r;
                                    if (a.isMetadataOperation) continue;
                                    let {
                                        operation: e
                                    } = a, o = e.pointer;
                                    if (o.table !== c().evP && o.table !== c().VlP && o.table !== c().Gy1) continue;
                                    let i = n7(o),
                                        s = "set" === e.command && 1 === e.path.length && "alive" === e.path[0] && !1 === e.args || "update" === e.command && 0 === e.path.length && (0, n(722371).Gv)(e.args) && !1 === e.args.alive ? "delete" : "set" === e.command && 0 === e.path.length && (0, n(722371).Gv)(e.args) && "type" in e.args && "string" == typeof e.args.type && (0, n(722371).O)(n(955630)._0, e.args.type) && (0, n(955630).NC)(e.args.type) ? "create" : "update",
                                        l = n4(null == (r = t.get(i)) ? void 0 : r.action, s) ? ? s;
                                    t.set(i, {
                                        pointer: o,
                                        action: l
                                    })
                                }
                                return t
                            }(o),
                            i = Array.from(e.values()).map(({
                                pointer: e
                            }) => e).filter(e => e.table === c().evP),
                            s = (0, e1().PA)(o, t).filter(e => e.table === c().evP),
                            l = function(e) {
                                let t = [];
                                for (let n of e.threadOperations ? ? []) {
                                    if (n.isMetadataOperation) continue;
                                    let {
                                        operation: e
                                    } = n;
                                    ("listAfter" === e.command || "listBefore" === e.command || "listRemove" === e.command || "insertChildrenAfter" === e.command || "insertChildrenBefore" === e.command) && e.pointer.table === c().evP && 1 === e.path.length && "content" === e.path[0] && t.push(e.pointer)
                                }
                                let n = new Map;
                                for (let e of t) n.set(n7(e), e);
                                return Array.from(n.values())
                            }(o),
                            d = [];
                        for (let e of (0, n2().v)(o) ? ? []) e.table === c().evP && d.push(e);
                        let u = s.length > 0 ? s : l.length > 0 ? l : d.length > 0 ? d : i;
                        if (0 === u.length) continue;
                        let p = (0, e1().WM)(o.toolType) ? ? "update";
                        for (let t of u) {
                            var a;
                            let n = n7(t),
                                o = (null == (a = e.get(n)) ? void 0 : a.action) ? ? p,
                                i = r.get(n),
                                s = n4(null == i ? void 0 : i.agentAction, o) ? ? o;
                            r.set(n, {
                                recordPointer: t,
                                agentAction: s
                            })
                        }
                    }
                    return Array.from(r.values())
                })(f, o.id), [f, o.id]), h = (0, r.useMemo)(() => (function(e) {
                    let t = new Map;
                    for (let r of e) {
                        var n;
                        if ((0, a().gY)(r, "create-pages") && null != (n = r.result) && n.pages)
                            for (let e of r.result.pages) t.set(e.pointer.id, e)
                    }
                    return t
                })(f), [f]), y = (0, n(682985).K8)(() => {
                    let e = [];
                    for (let t of m) {
                        let {
                            recordPointer: n
                        } = t;
                        if (n.table === c().evP) {
                            if (h.has(n.id)) {
                                e.push(t);
                                continue
                            }
                            eX().B.createChildStore(o, n).isPageBlock() && e.push(t)
                        }
                    }
                    return e
                }, [m, h, o]), v = (0, r.useMemo)(() => (function(e) {
                    let t = {};
                    for (let r of e) {
                        let e;
                        if ((0, a().gY)(r, "create-database") || (0, a().gY)(r, "update-database")) {
                            var n;
                            e = null == (n = r.result) ? void 0 : n.propertyDiff
                        }
                        for (let n of (e || (e = te({
                                toolName: r.toolType,
                                operations: (0, ta().tr)(r.threadOperations)
                            })), Object.keys(e))) {
                            let r = t[n] ? ? [];
                            t[n] = r.concat(e[n])
                        }
                    }
                    return t
                })(f), [f]), x = (0, n(682985).K8)(() => {
                    let e = tv({
                            recordDiffInfos: y,
                            spaceStore: o,
                            intl: s,
                            environment: l,
                            toolType: void 0,
                            toolResultStep: void 0,
                            theme: n(632079).Tj,
                            themeMode: p,
                            aiChatFeatureController: i,
                            openInSidePeek: g || void 0,
                            serverPageResultsById: h
                        }),
                        t = function({
                            collectionIdToPropertyChangeInfos: e,
                            theme: t,
                            themeMode: n,
                            aiChatFeatureController: r,
                            spaceStore: a
                        }) {
                            let o = Object.keys(e);
                            if (0 !== o.length) {
                                if (1 === o.length) {
                                    let a = o[0],
                                        i = e[a];
                                    return tf({
                                        collectionId: a,
                                        propertyChangeInfos: i,
                                        theme: t,
                                        themeMode: n,
                                        aiChatFeatureController: r
                                    })
                                }
                                return tm({
                                    collectionIds: o,
                                    collectionIdToPropertyChangeInfos: e,
                                    theme: t,
                                    themeMode: n,
                                    aiChatFeatureController: r,
                                    spaceStore: a
                                })
                            }
                        }({
                            collectionIdToPropertyChangeInfos: v,
                            theme: n(632079).Tj,
                            themeMode: p,
                            aiChatFeatureController: i,
                            spaceStore: o
                        }),
                        r = [...(null == e ? void 0 : e.items) ? ? [], ...(null == t ? void 0 : t.items) ? ? []];
                    return 0 === r.length ? [] : [{
                        key: "triggered-run-change-summary-results",
                        items: r,
                        render: e => (0, u.jsx)(n(844565).A, { ...e,
                            title: s.formatMessage(n8.resultsTitle),
                            style: n3.section
                        })
                    }]
                }, [i, v, l, s, g, y, h, o, p]);
                return 0 === f.length || 0 === x.length ? null : (0, u.jsxs)(n(4458).VP, {
                    gap: 0,
                    children: [(0, u.jsx)("div", {
                        style: n3.triggerPillLine
                    }), (0, u.jsx)("div", {
                        style: n3.wrapper,
                        children: (0, u.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            initialFocus: void 0,
                            sections: x,
                            style: n3.menuList,
                            disableKeyboard: !0,
                            resetFocusOnMouseOut: !0
                        })
                    })]
                })
            }
            let rt = (0, n(109939).YK)({
                tryingAgain: {
                    id: "TranscriptAgentTurn.tryingAgain",
                    defaultMessage: "Oops! Trying again…"
                },
                postingMessageInSlackChannel: {
                    id: "TranscriptAgentTurn.postingMessageInSlackChannel",
                    defaultMessage: "Posting message in #{channelName}"
                },
                postingMessageInSlackThread: {
                    id: "TranscriptAgentTurn.postingMessageInSlackThread",
                    defaultMessage: "Replying in Slack thread"
                },
                postingMessageInSlackDirectMessage: {
                    id: "TranscriptAgentTurn.postingMessageInSlackDirectMessage",
                    defaultMessage: "Posting direct message in Slack"
                },
                waitingForConfirmation: {
                    id: "TranscriptAgentTurn.waitingForConfirmation",
                    defaultMessage: "Do you want to continue?"
                },
                mailConfirmSendEmail: {
                    id: "TranscriptAgentTurn.mailConfirmSendEmail",
                    defaultMessage: "Do you want to send this email?"
                },
                mailConfirmSendDraft: {
                    id: "TranscriptAgentTurn.mailConfirmSendDraft",
                    defaultMessage: "Do you want to send this draft?"
                },
                mailConfirmDeleteLabel: {
                    id: "TranscriptAgentTurn.mailConfirmDeleteLabel",
                    defaultMessage: "Do you want to delete this label?"
                }
            });

            function rn(e) {
                return e.startsWith("#") ? e.slice(1) : e
            }
            let rr = {
                    "connections.mail.sendNewEmail": rt.mailConfirmSendEmail,
                    "connections.mail.sendExistingDraft": rt.mailConfirmSendDraft,
                    "connections.mail.deleteLabel": rt.mailConfirmDeleteLabel
                },
                ra = {
                    padding: "0 4px"
                },
                ro = {
                    position: "relative"
                };

            function ri(e) {
                return Array.from(e.children).flatMap(e => e instanceof HTMLElement && "agent-thinking-face" !== e.getAttribute("data-testid") ? [e] : [])
            }

            function rs(e) {
                return "string" == typeof e && t7.has(e)
            }
            let rl = new Set(["search", "queryCalendar", "queryMail"]);

            function rd(e) {
                return "string" == typeof e && (rl.has(e) || e.endsWith(".search"))
            }

            function rc(e) {
                let {
                    partData: t,
                    threadStore: a,
                    spaceStore: o
                } = e, i = function({
                    partData: e,
                    spaceStore: t
                }) {
                    let a = (0, r.useMemo)(() => nB(e), [e]),
                        o = (0, r.useMemo)(() => {
                            if (!a.threadUrl) return;
                            let e = (0, n(140030).X1)(a.threadUrl, {
                                baseUrl: n(986939).A.domainBaseUrl,
                                publicDomainName: n(986939).A.publicDomainName
                            });
                            if ((null == e ? void 0 : e.type) === "thread") return e.threadId
                        }, [a.threadUrl]);
                    return (0, n(682985).K8)(() => !!t && !!o && n(174148).E.createChildStore(t, {
                        table: c().Toz,
                        id: o,
                        spaceId: t.id
                    }).canRead(), [t, o])
                }({
                    partData: t,
                    spaceStore: o
                });
                return (0, u.jsx)(nL, {
                    partData: t,
                    threadStore: a,
                    spaceStore: o,
                    hasAccess: i
                })
            }
            let ru = r.memo(function(e) {
                let t, {
                        turn: o,
                        previousUserTurn: s,
                        isLastTurn: p,
                        configType: f,
                        isCustomAgent: h,
                        spaceStore: y,
                        threadStore: v,
                        clientStore: x,
                        runningInference: S,
                        showDebug: b,
                        aiChatFeatureController: w,
                        showAttribution: I,
                        onFollowUpSelect: C,
                        cycleThinkingVerbs: M = !1,
                        cycleIntervalMs: k = 1e3,
                        suppressThinkingAnimation: T = !1,
                        stepGap: A = 20,
                        hideTextOutput: D = !1,
                        useMinimalTranscript: P = !1,
                        isPostOnboardingThread: F = !1
                    } = e,
                    N = !F && (w.supportsMinimalTranscript() || P),
                    U = (0, n(682985).K8)(() => v ? v.getTranscript() : [], [v]),
                    V = U.length > 0 ? U : o.steps,
                    _ = (0, n(682985).K8)(() => v.getSpaceId() || "", [v]),
                    B = (0, r.useMemo)(() => V.some(e => "agent-trigger" === e.type), [V]),
                    L = (0, r.useMemo)(() => (0, n(490591).O2)(o.steps), [o.steps]),
                    K = (0, n(533992).v3)(),
                    O = (0, n(109939).tz)(),
                    z = !0 === e.isMultiAgentDelegationEnabled,
                    W = (0, r.useMemo)(() => {
                        let e = null == s ? void 0 : s.userInitiatedStep;
                        return !!e && ("user" === e.type || "user-injected" === e.type || "agent-prebuilt-prompt" === e.type) && e.userId === K.currentUser.id
                    }, [s, K.currentUser.id]),
                    $ = (0, r.useMemo)(() => {
                        let e = null == s ? void 0 : s.userInitiatedStep;
                        if ((null == e ? void 0 : e.type) === "agent-prebuilt-prompt") return e.promptType
                    }, [s]),
                    [q, Y] = r.useState(!1),
                    H = (0, r.useRef)(null),
                    [G, Q] = (0, r.useState)(0),
                    [X, J] = (0, r.useState)(-4),
                    [Z, ee] = (0, r.useState)(!1),
                    [et, en] = (0, r.useState)(0),
                    [er, ea] = (0, r.useState)(void 0),
                    eo = (0, r.useRef)(void 0),
                    ei = (0, r.useMemo)(() => {
                        for (let e of o.steps)
                            if ("agent-inference" === e.type) return !0;
                        return !1
                    }, [o.steps]),
                    es = (0, r.useMemo)(() => {
                        let e = new Set;
                        for (let t of o.steps) "agent-inference" === t.type && e.add(t.id);
                        return e
                    }, [o.steps]),
                    el = (0, n(960253).I)(() => ({
                        agentTurn: { ...b && {
                                boxShadow: "calc(var(--direction, 1) * -4px) 0 0 0 rgba(255,0,0,0.3)"
                            },
                            display: "flex",
                            flexDirection: "column"
                        }
                    }), [b]),
                    ed = (0, r.useCallback)(() => {
                        Y(!0)
                    }, []),
                    ec = (0, r.useCallback)(() => {
                        Y(!1)
                    }, []),
                    {
                        stepPartsByStepId: eu,
                        allParts: ep,
                        allToolResults: eg
                    } = (0, n(946651).s)({
                        turn: o,
                        environment: K,
                        spaceStore: y,
                        threadStore: v,
                        clientStore: x,
                        runningInference: S,
                        showDebug: b
                    }),
                    ef = (0, r.useMemo)(() => eg.some(e => (0, a().h9)(e)), [eg]),
                    em = (0, r.useMemo)(() => {
                        let e = !1;
                        for (let n of eg) {
                            var t;
                            if ((0, a().gY)(n, "update-page-v2")) {
                                if (e && !(0, d().nP)(n)) return !0;
                                null != (t = n.warnings) && t.length && (0, d().nP)(n) && (e = !0)
                            }
                        }
                        return !1
                    }, [eg]),
                    eh = ef || em,
                    {
                        renderableSteps: ey,
                        renderableStepPartsByStepId: ev,
                        renderableParts: ex
                    } = (0, r.useMemo)(() => (function(e) {
                        let {
                            renderMinimalTranscript: t,
                            hideThinkingParts: n = !1,
                            steps: r,
                            stepPartsByStepId: a,
                            allParts: o
                        } = e;
                        if (!t && !n) return {
                            renderableSteps: r,
                            renderableStepPartsByStepId: a,
                            renderableParts: o
                        };
                        let i = [],
                            s = new Map,
                            l = [];
                        for (let e of r) {
                            if ("premium-feature-unavailable" === e.type) {
                                i.push(e);
                                continue
                            }
                            if ("agent-inference" !== e.type) {
                                (!t || nA(e) && nD(e)) && i.push(e);
                                continue
                            }
                            let r = a.get(e.id);
                            if (!r) {
                                t || i.push(e);
                                continue
                            }
                            let o = r.filter(e => (function(e) {
                                let {
                                    part: t,
                                    renderMinimalTranscript: n,
                                    hideThinkingParts: r
                                } = e;
                                return n ? "chat" === t.type || "custom-agent-template-picker" === t.type : !r || "thinking" !== t.type
                            })({
                                part: e,
                                renderMinimalTranscript: t,
                                hideThinkingParts: n
                            }));
                            (!t || 0 !== o.length) && (i.push(e), o.length > 0 && (s.set(e.id, o), l.push(...o)))
                        }
                        return {
                            renderableSteps: i,
                            renderableStepPartsByStepId: s,
                            renderableParts: l
                        }
                    })({
                        renderMinimalTranscript: N,
                        hideThinkingParts: F,
                        steps: o.steps,
                        stepPartsByStepId: eu,
                        allParts: ep
                    }), [N, F, o.steps, eu, ep]);
                (0, r.useMemo)(() => !!B && !V.some(e => (0, n(588831).z5)(e)), [B, V]);
                let eS = (0, r.useMemo)(() => {
                        for (let e = ey.length - 1; e >= 0; e--) {
                            let t = ey[e];
                            if ("agent-tool-result" === t.type && (0, a().gY)(t, "update-todos")) return t
                        }
                    }, [ey]),
                    eb = (0, n(83208).X)("agent_polish_2026"),
                    ej = "full_page" === w.agentChatFormFactor,
                    ew = eb && ej && !n(986939).A.isMobile && "agent_writer" !== w.aiChatType && !h,
                    eI = !T && (!eb || !ew),
                    eC = eI ? "scrolling-squiggle" : "none",
                    eM = T || eb ? "none" : "scrolling-squiggle",
                    ek = (0, r.useMemo)(() => b ? ey.map(e => ({
                        type: "normal-step",
                        step: e,
                        key: `legacy-${e.id}`
                    })) : (eb ? function(e) {
                        let t, {
                                steps: n,
                                stepPartsByStepId: r,
                                runningInference: a,
                                isLastTurn: o,
                                supportsDetailedError: i = !1,
                                finalTodoToolResultStep: s,
                                showFinalTodoListInCompletedTurn: l,
                                isMultiAgentDelegationEnabled: d
                            } = e,
                            c = new Set;
                        for (let e of n) "agent-inference" === e.type && c.add(e.id);
                        let u = [],
                            p = [],
                            g = !1,
                            f = () => {
                                p.length > 0 && t && (u.push({
                                    type: "collapsed-group",
                                    parts: p,
                                    key: `collapsed-${t}`
                                }), p = [], t = void 0)
                            };
                        for (let e of n) {
                            if ("agent-tool-result" === e.type) {
                                if (i && "applied:error" === e.state && (!e.agentStepId || !c.has(e.agentStepId)) || ("runScript" !== e.toolType || e.agentStepId && c.has(e.agentStepId) || (f(), u.push({
                                        type: "normal-step",
                                        step: e,
                                        key: e.id
                                    })), nA(e) && nD(e))) {
                                    f(), u.push({
                                        type: "normal-step",
                                        step: e,
                                        key: e.id
                                    });
                                    continue
                                }
                                if ("update-todos" === e.toolType) {
                                    let t = !!(a && o),
                                        n = !!(!a && o && l && s && e.id === s.id);
                                    (t || n) && (f(), u.push({
                                        type: "normal-step",
                                        step: e,
                                        key: n ? `final-todos-${e.id}` : e.id
                                    }), g = !0)
                                }
                                continue
                            }
                            if ("agent-search-query-generation" !== e.type) {
                                if ("activate-transcript-compaction" === e.type) {
                                    let n = {
                                        type: "compacted-transcript",
                                        key: `compacted-${e.id}`,
                                        step: e,
                                        isFinished: !0,
                                        summary: e.summary
                                    };
                                    t || (t = n.key), p.push(n);
                                    continue
                                }
                                if ("agent-inference" === e.type) {
                                    for (let n of r.get(e.id) ? ? []) !nN(n, d) && ("tool-use" !== n.type || "escalate" !== n.toolName) && ("tool-use" !== n.type || "generate-plan" !== n.toolName) && 1 ? (t || (t = n.key), p.push(n)) : (f(), u.push({
                                        type: "standalone-part",
                                        part: n,
                                        key: n.key
                                    }));
                                    continue
                                }
                                f(), u.push({
                                    type: "normal-step",
                                    step: e,
                                    key: e.id
                                })
                            }
                        }
                        if (f(), l && s && !g) {
                            let e = u.length;
                            for (let t = u.length - 1; t >= 0; t--) {
                                let n = u[t];
                                if ("standalone-part" === n.type && "chat" === n.part.type) {
                                    e = t;
                                    break
                                }
                            }
                            u.splice(e, 0, {
                                type: "normal-step",
                                step: s,
                                key: `final-todos-${s.id}`
                            })
                        }
                        if (a && o) {
                            let e = u[u.length - 1];
                            (null == e ? void 0 : e.type) === "collapsed-group" ? e.isRunning = !0: (null == e ? void 0 : e.type) !== "normal-step" && ((null == e ? void 0 : e.type) !== "standalone-part" || "chat" === e.part.type || nF(e.part)) || u.push({
                                type: "collapsed-group",
                                parts: [],
                                key: "running-view",
                                isRunning: !0
                            })
                        }
                        return u
                    } : function(e) {
                        let t, {
                                steps: n,
                                stepPartsByStepId: r,
                                runningInference: a,
                                isLastTurn: o,
                                supportsDetailedError: i = !1,
                                finalTodoToolResultStep: s,
                                showFinalTodoListInCompletedTurn: l,
                                isMultiAgentDelegationEnabled: d
                            } = e,
                            c = new Set;
                        for (let e of n) "agent-inference" === e.type && c.add(e.id);
                        let u = new Map;
                        for (let e of n)
                            if ("agent-tool-result" === e.type && e.agentStepId) {
                                let t = u.get(e.agentStepId) ? ? [];
                                t.push(e), u.set(e.agentStepId, t)
                            }
                        let p = [],
                            g = [],
                            f = !1,
                            m = () => {
                                g.length > 0 && t && (p.push({
                                    type: "collapsed-group",
                                    parts: g,
                                    key: `collapsed-${t}`
                                }), g = [], t = void 0)
                            };
                        for (let e of n) {
                            if ("agent-tool-result" === e.type) {
                                if (i && "applied:error" === e.state && (!e.agentStepId || !c.has(e.agentStepId)) || ("runScript" !== e.toolType || e.agentStepId && c.has(e.agentStepId) || (m(), p.push({
                                        type: "normal-step",
                                        step: e,
                                        key: e.id
                                    })), nA(e) && nD(e))) {
                                    m(), p.push({
                                        type: "normal-step",
                                        step: e,
                                        key: e.id
                                    });
                                    continue
                                }
                                "update-todos" === e.toolType && a && o && (m(), p.push({
                                    type: "normal-step",
                                    step: e,
                                    key: e.id
                                }), f = !0);
                                continue
                            }
                            if ("agent-search-query-generation" !== e.type) {
                                if ("activate-transcript-compaction" === e.type) {
                                    let n = {
                                        type: "compacted-transcript",
                                        key: `compacted-${e.id}`,
                                        step: e,
                                        isFinished: !0,
                                        summary: e.summary
                                    };
                                    nU(n, [], d) ? (t || (t = n.key), g.push(n)) : (m(), p.push({
                                        type: "standalone-part",
                                        part: n,
                                        key: n.key
                                    }));
                                    continue
                                }
                                if ("agent-inference" === e.type) {
                                    let n = r.get(e.id) ? ? [],
                                        a = u.get(e.id) ? ? [];
                                    for (let e of n) nU(e, a, d) ? (t || (t = e.key), g.push(e)) : (m(), p.push({
                                        type: "standalone-part",
                                        part: e,
                                        key: e.key
                                    }));
                                    continue
                                }
                                m(), p.push({
                                    type: "normal-step",
                                    step: e,
                                    key: e.id
                                })
                            }
                        }
                        if (m(), l && s && !f) {
                            let e = p.length;
                            for (let t = p.length - 1; t >= 0; t--) {
                                let n = p[t];
                                if ("standalone-part" === n.type && "chat" === n.part.type) {
                                    e = t;
                                    break
                                }
                            }
                            p.splice(e, 0, {
                                type: "normal-step",
                                step: s,
                                key: `final-todos-${s.id}`
                            })
                        }
                        if (a && o) {
                            let e = -1;
                            for (let t = n.length - 1; t >= 0; t--) {
                                var h;
                                if ((null == (h = n[t]) ? void 0 : h.type) === "agent-inference") {
                                    e = t;
                                    break
                                }
                            }
                            let t = -1;
                            for (let e = n.length - 1; e >= 0; e--) {
                                let a = n[e];
                                if ("agent-inference" === a.type && (r.get(a.id) ? ? []).some(e => nN(e, d))) {
                                    t = e;
                                    break
                                }
                            }
                            let a = [],
                                o = e => "tool-use" === e.type && "escalate" === e.toolName,
                                i = e => !o(e) && !nF(e);
                            if (t >= 0)
                                for (let e = t + 1; e < n.length; e++) {
                                    let t = n[e];
                                    if ("agent-inference" === t.type) {
                                        let e = r.get(t.id) ? ? [];
                                        a.push(...e.filter(i))
                                    }
                                } else
                                    for (let e of n)
                                        if ("agent-inference" === e.type) {
                                            let t = r.get(e.id) ? ? [];
                                            a.push(...t.filter(i))
                                        }
                            if (a.length > 0 && !nP(a[a.length - 1].type)) {
                                let e = e => "standalone-part" === e.type && "tool-use" === e.part.type && "escalate" === e.part.toolName,
                                    n = e => "standalone-part" === e.type && nF(e.part);
                                if (t < 0) return [...p.filter(t => "normal-step" === t.type || e(t) || n(t)), {
                                    type: "collapsed-group",
                                    parts: a,
                                    key: "running-view",
                                    isRunning: !0
                                }];
                                let r = p.length;
                                for (let e = p.length - 1; e >= 0; e--) {
                                    let t = p[e];
                                    if ("standalone-part" === t.type && nN(t.part, d)) {
                                        r = e + 1;
                                        break
                                    }
                                }
                                let o = p.slice(r).filter(t => "normal-step" === t.type || e(t) || n(t));
                                return [...p.slice(0, r), ...o, {
                                    type: "collapsed-group",
                                    parts: a,
                                    key: "running-view",
                                    isRunning: !0
                                }]
                            }
                            if (t >= 0 && t === e) {
                                let e = n[t];
                                if ((null == e ? void 0 : e.type) === "agent-inference") {
                                    let t = r.get(e.id) ? ? [],
                                        n = -1;
                                    for (let e = t.length - 1; e >= 0; e--)
                                        if (nN(t[e], d)) {
                                            n = e;
                                            break
                                        }
                                    if (n >= 0 && t.slice(n + 1).filter(e => !o(e) && !nF(e)).length > 0) {
                                        let e = p[p.length - 1];
                                        (null == e ? void 0 : e.type) === "collapsed-group" && (e.isRunning = !0)
                                    }
                                }
                            }
                            let s = p[p.length - 1];
                            (null == s ? void 0 : s.type) === "normal-step" && "agent-instruction-state" !== s.step.type && p.push({
                                type: "collapsed-group",
                                parts: [],
                                key: "running-view",
                                isRunning: !0
                            })
                        }
                        let y = [];
                        for (let e = 0; e < p.length; e++) {
                            let t = p[e];
                            if ("standalone-part" === t.type && "compacted-transcript" === t.part.type) {
                                let n = p[e + 1];
                                if ((null == n ? void 0 : n.type) === "collapsed-group") {
                                    y.push({ ...n,
                                        parts: [t.part, ...n.parts]
                                    }), e += 1;
                                    continue
                                }
                                let r = y.at(-1);
                                if ((null == r ? void 0 : r.type) === "collapsed-group") {
                                    y[y.length - 1] = { ...r,
                                        parts: [...r.parts, t.part]
                                    };
                                    continue
                                }
                            }
                            y.push(t)
                        }
                        return y
                    })({
                        steps: ey,
                        stepPartsByStepId: ev,
                        runningInference: S,
                        isLastTurn: p,
                        supportsDetailedError: w.supportsDetailedError,
                        finalTodoToolResultStep: eS,
                        showFinalTodoListInCompletedTurn: p && !S,
                        isMultiAgentDelegationEnabled: z
                    }), [w.supportsDetailedError, ey, ev, S, p, b, eS, eb, z]),
                    eT = (0, r.useMemo)(() => !!B || ey.some(e => "error" === e.type || "agent-debug-error" === e.type), [B, ey]),
                    eA = (0, r.useMemo)(() => {
                        let e = !1;
                        return ek.map(t => {
                            var r;
                            if ("collapsed-group" === t.type) return (0, u.jsx)(nd, {
                                parts: t.parts,
                                isRunning: t.isRunning,
                                turn: o,
                                threadStore: v,
                                spaceStore: y,
                                clientStore: x,
                                aiChatFeatureController: w,
                                isLastTurn: p,
                                runningInference: S,
                                expandByDefault: eT,
                                onFollowUpSelect: C,
                                shouldShowInlineRunningIndicator: eI,
                                onActiveSummaryStateChange: t.isRunning ? ea : void 0
                            }, t.key);
                            if ("standalone-part" === t.type) {
                                let e = t.part;
                                return z && "tool-use" === e.type && nE(e) ? (0, u.jsx)(n(305406).uQ, {
                                    step: e.step,
                                    threadStore: v,
                                    clientStore: x,
                                    children: (0, u.jsx)(rc, {
                                        partData: e,
                                        threadStore: v,
                                        spaceStore: y
                                    })
                                }, e.key) : (0, u.jsx)(n(305406).uQ, {
                                    step: e.step,
                                    threadStore: v,
                                    clientStore: x,
                                    children: "chat" !== e.type ? (0, u.jsx)(n(765846).Wd, {
                                        isFullPage: !1,
                                        children: (0, u.jsx)(t3, {
                                            partData: e,
                                            threadStore: v,
                                            clientStore: x,
                                            spaceStore: y,
                                            aiChatFeatureController: w,
                                            runningInference: S,
                                            isLastTurn: p,
                                            turnSteps: o.steps,
                                            blurOnExpand: w.supportsBlurOnToolExpand,
                                            hideIcons: !0,
                                            onFollowUpSelect: C,
                                            feedbackComponentIndex: o.feedbackComponentIndex
                                        })
                                    }) : (0, u.jsx)(t3, {
                                        partData: e,
                                        threadStore: v,
                                        clientStore: x,
                                        spaceStore: y,
                                        aiChatFeatureController: w,
                                        runningInference: S,
                                        isLastTurn: p,
                                        turnSteps: o.steps,
                                        blurOnExpand: w.supportsBlurOnToolExpand,
                                        hideIcons: !1,
                                        onFollowUpSelect: C,
                                        feedbackComponentIndex: o.feedbackComponentIndex
                                    })
                                }, e.key)
                            }
                            let i = t.step;
                            if (!ei && "agent-tool-result" === i.type && "runScript" === i.toolType && (!i.agentStepId || !es.has(i.agentStepId))) return (0, u.jsx)(n(305406).uQ, {
                                step: i,
                                threadStore: v,
                                clientStore: x,
                                children: (0, u.jsx)(t_, {
                                    stepId: i.id,
                                    toolName: i.toolType,
                                    toolResultStep: i,
                                    threadStore: v,
                                    runningInference: S,
                                    aiChatFeatureController: w,
                                    isLastTurn: p
                                })
                            }, i.id);
                            if ("agent-tool-result" === i.type && nA(i) && nD(i)) {
                                let e = nR(i);
                                return (0, u.jsx)(n(305406).uQ, {
                                    step: i,
                                    threadStore: v,
                                    clientStore: x,
                                    children: (0, u.jsx)(n(3087).l, {
                                        files: e,
                                        threadStore: v,
                                        threadSpaceId: _,
                                        showImagePreview: !0,
                                        aiChatFeatureController: w
                                    })
                                }, i.id)
                            }
                            if ("agent-tool-result" === i.type && (0, a().gY)(i, "update-todos")) {
                                let e = ((null == (r = i.result) ? void 0 : r.todos) ? ? []).map(e => S || "in_progress" !== e.status ? e : { ...e,
                                    status: "pending"
                                });
                                if (0 === e.length) return;
                                return (0, u.jsx)(n(305406).uQ, {
                                    step: i,
                                    threadStore: v,
                                    clientStore: x,
                                    children: (0, u.jsx)(ng, {
                                        todos: e
                                    })
                                }, i.id)
                            }
                            if ("agent-inference" === i.type) {
                                let e = ev.get(i.id) ? ? [];
                                if (0 === e.length) return;
                                return (0, u.jsx)(n(305406).uQ, {
                                    step: i,
                                    threadStore: v,
                                    clientStore: x,
                                    children: (0, u.jsx)(nu, {
                                        step: i,
                                        turn: o,
                                        isLastTurn: p,
                                        runningInference: S,
                                        threadStore: v,
                                        spaceStore: y,
                                        aiChatFeatureController: w,
                                        items: e,
                                        blurOnExpand: w.supportsBlurOnToolExpand,
                                        clientStore: x,
                                        onFollowUpSelect: C
                                    })
                                }, i.id)
                            }
                            if ("error" === i.type) return (0, u.jsx)(n(305406).uQ, {
                                step: i,
                                threadStore: v,
                                clientStore: x,
                                children: b ? (0, u.jsx)(n(305406).ze, {
                                    step: i
                                }) : (0, u.jsx)(n(983655).P, {
                                    errorStep: i,
                                    configType: "workflow",
                                    showDetailedError: w.supportsDetailedError,
                                    spaceStore: y
                                })
                            }, i.id);
                            if ("agent-debug-error" === i.type) return (0, u.jsx)(n(305406).uQ, {
                                step: i,
                                threadStore: v,
                                clientStore: x,
                                children: (0, u.jsx)(g, {
                                    step: i
                                })
                            }, i.id);
                            if ("agent-trigger" === i.type) {
                                let t = B && !e ? (0, u.jsx)(re, {
                                    turnSteps: o.steps,
                                    spaceStore: y,
                                    aiChatFeatureController: w
                                }) : void 0;
                                return e = !0, (0, u.jsxs)(n(4458).VP, {
                                    gap: 0,
                                    children: [(0, u.jsx)(n(305406).uQ, {
                                        step: i,
                                        threadStore: v,
                                        clientStore: x,
                                        children: (0, u.jsx)(R, {
                                            step: i,
                                            threadStore: v
                                        })
                                    }), t]
                                }, `trigger-${i.id}`)
                            }
                            if ("agent-route-trigger" === i.type) return (0, u.jsx)(n(305406).uQ, {
                                step: i,
                                threadStore: v,
                                clientStore: x,
                                children: (0, u.jsx)(j, {
                                    step: i
                                })
                            }, i.id);
                            if ("eval-result" === i.type) return (0, u.jsx)(n(305406).uQ, {
                                step: i,
                                threadStore: v,
                                clientStore: x,
                                children: (0, u.jsx)(m, {
                                    step: i
                                }, i.id)
                            }, i.id);
                            if ("premium-feature-unavailable" === i.type) return (0, u.jsx)(n(305406).uQ, {
                                step: i,
                                threadStore: v,
                                clientStore: x,
                                children: (0, u.jsx)(nI, {
                                    threadStore: v,
                                    step: i,
                                    minimal: N,
                                    isCustomAgent: h
                                })
                            }, i.id);
                            if ("agent-tool-result" === i.type && i.insufficientPermissions && !o.steps.some(e => "agent-inference" === e.type && e.id === i.agentStepId)) return (0, u.jsx)(n(305406).uQ, {
                                step: i,
                                threadStore: v,
                                clientStore: x,
                                children: (0, u.jsx)(e4, {
                                    toolName: i.toolType,
                                    toolResultStep: i,
                                    aiChatFeatureController: w
                                })
                            }, i.id);
                            if ("survey" === i.type) return (0, u.jsx)(n(305406).uQ, {
                                step: i,
                                threadStore: v,
                                clientStore: x
                            }, i.id);
                            else if ("activate-transcript-compaction" === i.type) return (0, u.jsx)(n(305406).uQ, {
                                step: i,
                                threadStore: v,
                                clientStore: x,
                                children: (0, u.jsx)(n(3375).X, {
                                    summary: i.summary
                                })
                            }, i.id);
                            else if (b) return (0, u.jsx)(n(305406).uQ, {
                                step: i,
                                threadStore: v,
                                clientStore: x
                            }, i.id)
                        }).filter(n(722371).O9)
                    }, [ek, o, ev, v, y, x, w, p, S, b, B, C, ei, es, _, eT, eI, N, h, z]),
                    eR = ek.some(e => "collapsed-group" === e.type && e.isRunning),
                    eD = p && S && (N && (0 === eA.length || eh) || F && 0 === eA.length && o.hasAgentInferenceStep),
                    eP = (0, r.useMemo)(() => !N && p && !o.hasAgentInferenceStep && !eR && S && !B, [N, p, o.hasAgentInferenceStep, eR, S, B]),
                    eF = (0, r.useMemo)(() => {
                        if (!eb || N || !p || !S || eR || !o.previousStepId || eD || eP) return;
                        let e = o.steps.find(e => e.id === o.previousStepId);
                        if (e && "agent-tool-result" === e.type) return o.previousStepId
                    }, [eb, N, p, S, eR, o.previousStepId, o.steps, eD, eP]),
                    eE = (0, n(682985).K8)(() => v.getParentPointer(), [v]),
                    eN = (0, r.useMemo)(() => {
                        if (y && (null == eE ? void 0 : eE.table) === c().C0E) return n(360851).N.createChildStore(y, eE)
                    }, [y, eE]),
                    eU = (0, n(682985).K8)(() => null == eN ? void 0 : eN.getRenderTitle(O), [eN, O]),
                    {
                        resultStepIdsToConfirm: eV,
                        confirmationVariant: e_
                    } = (0, r.useMemo)(() => {
                        let e, t, r, o = [],
                            s = 0,
                            c = [],
                            u = !1,
                            p = !1,
                            g = !1;
                        eg.filter(e => (0, d().I6)(e)).filter(e => "mcpServer.runTool" !== e.toolType && "generate-plan" !== e.toolType && !(0, n(885175).H1)(e)).forEach(t => {
                            var n, l;
                            if (c.push(t), o.push(t.id), t.threadOperations && t.threadOperations.forEach(e => {
                                    e.deletesPage && s++
                                }), t.pendingConfirmations) {
                                let n = t.pendingConfirmations.find(e => "urlSafety" === e.type);
                                n && (r = n.urls);
                                let a = t.pendingConfirmations.find(e => "connectIntegration" === e.type);
                                a && "connectIntegration" === a.type && (e = {
                                    moduleType: a.moduleType,
                                    state: a.state
                                }), t.pendingConfirmations.some(e => "custom_agent_setup_admin_mode" === e.type) && (p = !0)
                            }(0, a().gY)(t, "callFunction") && "adminUserConnections" === function(e) {
                                var t;
                                if ("string" == typeof e) return null == (t = i(e)) ? void 0 : t.namespace
                            }(null == (n = t.input) ? void 0 : n.function) && (g = !0);
                            let d = (null == (l = t.pendingConfirmations) ? void 0 : l.some(e => "connectIntegration" === e.type && "salesforce" === e.moduleType)) ? ? !1;
                            ("query-salesforce-tool" === t.toolType || t.toolType.startsWith("salesforce.") || d) && (u = !0)
                        });
                        let f = function(e) {
                            let {
                                intl: t,
                                pendingToolResults: n
                            } = e, r = [];
                            for (let e of n) {
                                let n = function(e) {
                                    if ((0, a().gY)(e, "callFunction")) {
                                        var n, r;
                                        let a = null == (n = e.input) ? void 0 : n.function;
                                        if (l({
                                                functionName: a,
                                                canonicalName: "connections.slack.createThreadInChannel"
                                            })) {
                                            let n = null != (r = e.input) && r.args && "channelName" in e.input.args && "string" == typeof e.input.args.channelName ? rn(e.input.args.channelName) : void 0;
                                            if (n) return t.formatMessage(rt.postingMessageInSlackChannel, {
                                                channelName: n
                                            })
                                        }
                                        if (l({
                                                functionName: a,
                                                canonicalName: "connections.slack.createThreadInDirectMessage"
                                            })) return t.formatMessage(rt.postingMessageInSlackDirectMessage);
                                        if (l({
                                                functionName: a,
                                                canonicalName: "connections.slack.replyInThread"
                                            })) return t.formatMessage(rt.postingMessageInSlackThread);
                                        let o = function(e) {
                                            if (e) {
                                                for (let [t, n] of Object.entries(rr))
                                                    if (l({
                                                            functionName: e,
                                                            canonicalName: t
                                                        })) return n
                                            }
                                        }(a);
                                        return o ? t.formatMessage(o) : t.formatMessage(rt.waitingForConfirmation)
                                    }
                                    switch (e.toolType) {
                                        case "slack.createThreadInChannel":
                                            {
                                                let {
                                                    input: n
                                                } = e,
                                                r = n && "channelName" in n && "string" == typeof n.channelName ? rn(n.channelName) : void 0;
                                                if (r) return t.formatMessage(rt.postingMessageInSlackChannel, {
                                                    channelName: r
                                                });
                                                break
                                            }
                                        case "slack.createThreadInDirectMessage":
                                            return t.formatMessage(rt.postingMessageInSlackDirectMessage);
                                        case "slack.replyInThread":
                                            return t.formatMessage(rt.postingMessageInSlackThread)
                                    }
                                    return t.formatMessage(rt.waitingForConfirmation)
                                }(e);
                                n && !r.includes(n) && r.push(n)
                            }
                            return r.length > 0 ? r : void 0
                        }({
                            intl: O,
                            pendingToolResults: c
                        });
                        return r ? t = {
                            type: "potentiallyUnsafeUrl",
                            urls: r
                        } : s > 0 ? t = {
                            type: "deletePages",
                            pageCount: s
                        } : u ? t = {
                            type: "salesforceUserConnection"
                        } : e ? t = {
                            type: "connectIntegration",
                            integrationName: function(e) {
                                switch (e.type) {
                                    case "mail":
                                        return n(590212).w0["notion-mail"];
                                    case "calendar":
                                        return n(590212).w0["notion-calendar"];
                                    case "mcpServer":
                                        return e.name ? ? "MCP Server";
                                    case "aiConnector":
                                        return n(590212).w0[e.connectorName];
                                    default:
                                        return "Integration"
                                }
                            }(e.state),
                            moduleType: e.moduleType,
                            state: e.state
                        } : p || g ? t = {
                            type: "customAgentSetupAdminMode",
                            agentName: eU
                        } : o.length > 0 && (t = {
                            type: "continue",
                            waitingText: f
                        }), {
                            resultStepIdsToConfirm: o,
                            confirmationVariant: t
                        }
                    }, [eg, eU, O]),
                    eB = eV.length > 0,
                    eL = (0, n(682985).K8)(() => (null == eN ? void 0 : eN.canRead()) ? ? !1, [eN]),
                    eK = W || B && eL,
                    eO = o.steps.filter(e => "agent-inference" === e.type).length,
                    ez = (0, r.useMemo)(() => {
                        let e = o.steps.findLast(e => "agent-inference" === e.type);
                        return Array.isArray(null == e ? void 0 : e.value) && !(null != e && e.value.some(e => "tool_use" === e.type))
                    }, [o.steps]),
                    eW = (0, n(682985).K8)(() => v.getConfig(), [v]);
                if (eW && "workflow" === eW.type) {
                    let e = o.steps.some(e => "agent-trigger" === e.type);
                    t = eW.enableScriptAgent ? 100 : e ? 50 : 15
                }
                let e$ = t && !ez && eO >= t && "infra_as_code" !== w.aiChatType,
                    eq = eA.length > 0 || eP || eD,
                    eY = (0, n(682985).K8)(() => h && (0, n(187353).SJ)(v), [v, h]),
                    eH = !N && w.shouldShowActionsInStep && !eB && (eq || p) && !eY,
                    eG = S && p,
                    eQ = (0, n(682985).K8)(() => x.getOrCreateClientAIChatThreadStore(v.id).state.wasForceStoppedByUser, [x, v]),
                    eX = (0, r.useMemo)(() => ey.findLast(e => "agent-tool-result" === e.type || "agent-inference" === e.type), [ey]),
                    eJ = (0, r.useMemo)(() => ey.some(e => "survey" === e.type), [ey]);
                (0, r.useEffect)(() => {
                    eR || ea(void 0)
                }, [eR]);
                let eZ = (0, r.useMemo)(() => eG && void 0 !== er ? er : function(e) {
                    let {
                        runningInference: t,
                        lastTrackedStep: n,
                        renderableStepPartsByStepId: r,
                        shouldShowThinkingAnimation: a,
                        shouldShowMinimalStreamingIndicator: o,
                        thinkingAfterToolsStepId: i
                    } = e;
                    if (!t) return "idle";
                    if (a || o || void 0 !== i || !n) return "thinking";
                    if ("agent-inference" === n.type) {
                        let e = r.get(n.id) ? ? [];
                        if (e.findLast(e => "search-tool-use" === e.type && !e.isFinished)) return "searching";
                        let t = e.findLast(e => !e.isFinished) ? ? e.at(-1);
                        if (!t) return "thinking";
                        switch (t.type) {
                            case "chat":
                                return "idle";
                            case "search-tool-use":
                                return "searching";
                            case "thinking":
                            default:
                                return "thinking";
                            case "tool-use":
                            case "mcp-tool-use":
                                if (rd(t.toolName)) return "searching";
                                return rs(t.toolName) ? "writing" : "thinking"
                        }
                    }
                    return rd(n.toolType) ? "searching" : rs(n.toolType) ? "writing" : "thinking"
                }({
                    runningInference: eG,
                    lastTrackedStep: eX,
                    renderableStepPartsByStepId: ev,
                    shouldShowThinkingAnimation: eP,
                    shouldShowMinimalStreamingIndicator: eD,
                    thinkingAfterToolsStepId: eF
                }), [er, eG, eX, ev, eP, eD, eF]);
                (0, r.useLayoutEffect)(() => {
                    if (!ew || !eG) return;
                    let e = H.current;
                    if (!e) return;
                    let t = function(e) {
                        var t;
                        let n = ri(e).at(-1);
                        for (; n && (t = n).classList.contains("autolayout-col") && ri(t).length > 1;) n = ri(n).at(-1);
                        return n ? function(e, t) {
                            let n = 0,
                                r = e;
                            for (; r && r !== t;) n += r.offsetTop, r = r.offsetParent instanceof HTMLElement ? r.offsetParent : null;
                            return r === t ? n : e.getBoundingClientRect().top - t.getBoundingClientRect().top
                        }(n, e) : void 0
                    }(e);
                    void 0 !== t && Q(t), J((null == eX ? void 0 : eX.type) === "agent-inference" && (ev.get(eX.id) ? ? []).some(e => "chat" === e.type) ? -4 : -6)
                }, [ew, eG, eX, ev]), (0, r.useEffect)(() => {
                    if (!ew || eQ || eJ) {
                        clearTimeout(eo.current), ee(!1);
                        return
                    }
                    if (eG) {
                        clearTimeout(eo.current), ee(e => e || (en(e => e + 1), !0));
                        return
                    }
                    return eo.current = setTimeout(() => {
                        ee(!1)
                    }, 4e3), () => {
                        clearTimeout(eo.current)
                    }
                }, [eG, ew, eQ, eJ]);
                let e0 = (0, u.jsxs)("div", {
                    onMouseEnter: ed,
                    onMouseLeave: ec,
                    style: el.agentTurn,
                    children: [eq && I && !L ? (0, u.jsx)(n(821480).U, {
                        type: "agent",
                        workflowStore: void 0,
                        displayName: O.formatMessage({
                            id: "TranscriptAgentTurn.notionAI",
                            defaultMessage: "Notion AI"
                        }),
                        gap: 8
                    }) : null, eq ? (0, u.jsxs)(n(4458).VP, {
                        ref: H,
                        className: "autolayout-col autolayout-fill-width",
                        style: {
                            gap: A,
                            ...ro
                        },
                        children: [ef || D ? null : eA, eD ? (0, u.jsx)("div", {
                            style: ra,
                            children: eb ? (0, u.jsx)(n(765846).Wd, {
                                isFullPage: !1,
                                children: (0, u.jsx)(n(473686).c, {
                                    message: eh ? rt.tryingAgain : (0, n(473686).U)(o.previousStepId),
                                    animationType: eC,
                                    cycleVerbs: M && !eh,
                                    cycleIntervalMs: k,
                                    seed: null == v ? void 0 : v.id
                                })
                            }) : (0, u.jsx)(n(473686).c, {
                                message: eh ? rt.tryingAgain : (0, n(473686).U)(o.previousStepId),
                                animationType: eC,
                                cycleVerbs: M && !eh,
                                cycleIntervalMs: k,
                                seed: null == v ? void 0 : v.id
                            })
                        }) : null, eb && eF ? (0, u.jsx)("div", {
                            style: ra,
                            children: eb ? (0, u.jsx)(n(765846).Wd, {
                                isFullPage: !1,
                                children: (0, u.jsx)(n(473686).c, {
                                    message: (0, n(473686).U)(eF),
                                    animationType: eM,
                                    cycleVerbs: M,
                                    cycleIntervalMs: k,
                                    seed: null == v ? void 0 : v.id
                                })
                            }) : (0, u.jsx)(n(473686).c, {
                                message: (0, n(473686).U)(eF),
                                animationType: eM,
                                cycleVerbs: M,
                                cycleIntervalMs: k,
                                seed: null == v ? void 0 : v.id
                            })
                        }) : null, eP ? (0, u.jsx)("div", {
                            style: ra,
                            children: eb ? (0, u.jsx)(n(765846).Wd, {
                                isFullPage: !1,
                                children: (0, u.jsx)(n(473686).c, {
                                    message: (0, n(473686).U)(o.previousStepId),
                                    animationType: eC,
                                    cycleVerbs: M,
                                    cycleIntervalMs: k,
                                    seed: null == v ? void 0 : v.id
                                })
                            }) : (0, u.jsx)(n(473686).c, {
                                message: (0, n(473686).U)(o.previousStepId),
                                animationType: eC,
                                cycleVerbs: M,
                                cycleIntervalMs: k,
                                seed: null == v ? void 0 : v.id
                            })
                        }) : null, !S && !N && eB && eK ? (0, u.jsx)(nj, {
                            resultStepIdsToConfirm: eV,
                            variant: e_
                        }) : void 0, S || N || !e$ ? void 0 : (0, u.jsx)(E, {
                            threadStore: v,
                            clientStore: x
                        }), ew && p ? eQ ? null : (0, u.jsx)(n(203066).N, {
                            children: Z ? (0, u.jsx)(n(913638).F, {
                                top: G,
                                marginTop: X,
                                highLevelState: eZ
                            }, `thinking-face-${et}`) : null
                        }) : null]
                    }) : null, eH ? (0, u.jsx)(nY, {
                        isHovered: q,
                        runningInference: S,
                        turn: o,
                        threadStore: v,
                        configType: f,
                        isCustomAgent: h,
                        spaceStore: y,
                        isLastTurn: p,
                        parts: ex,
                        threadId: v.id,
                        previousUserPromptKey: $,
                        variant: "agent_mobile" === w.aiChatType ? "large" : "default",
                        aiChatFeatureController: w,
                        workflowStore: eN
                    }) : void 0]
                });
                return L ? (0, u.jsx)(n(397985).f, {
                    speakerId: L.speakerId,
                    speakerDisplayName: L.speakerDisplayName,
                    speakerModelFamily: L.speakerModelFamily,
                    children: e0
                }) : e0
            })
        },
        381548: (e, t, n) => {
            n.d(t, {
                s: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.28 3.22 9.44 9.45",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M12.487 3.457a.804.804 0 0 0-1.13 0l-.553.552a.075.075 0 0 0 0 .106l1.03 1.03a.075.075 0 0 0 .106 0l.547-.546a.1.1 0 0 0 .019-.032.804.804 0 0 0-.019-1.11m-2.247 1.22a.075.075 0 0 0-.105 0l-6.337 6.326a1.1 1.1 0 0 0-.237.393l-.269.87v.002c-.063.232.153.466.388.383l.863-.267q.222-.061.398-.239l6.331-6.331a.075.075 0 0 0 0-.106z"
                    })
                },
                a = (0, n(104509).wt)("pencilSmall", r, "small")
        },
        440956: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                lightBulbBrightSmallIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.96 1.38 8.07 13.24",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.385c-2.23 0-4.035 1.793-4.035 3.985 0 .782.193 1.525.56 2.147.09.161.181.312.281.473.454.725.86 1.386.86 2.08a.63.63 0 0 0 .624.625.63.63 0 0 0 .625-.625c.01-1.064-.553-1.972-1.041-2.75l-.27-.448a3 3 0 0 1-.389-1.512C5.215 3.853 6.46 2.625 8 2.625s2.785 1.228 2.785 2.735c0 .558-.137 1.084-.39 1.512l-.269.449-.01.016c-.475.773-1.03 1.675-1.03 2.723a.63.63 0 0 0 .55.62v.015h.074a.63.63 0 0 0 .625-.625c0-.684.406-1.355.859-2.08v-.002l.001-.001q.067-.117.139-.233t.141-.237c.367-.622.56-1.365.56-2.147 0-2.202-1.815-3.985-4.035-3.985m-1.6 10.19a.63.63 0 0 0-.625.625.63.63 0 0 0 .625.625h3.2a.63.63 0 0 0 .625-.625.63.63 0 0 0-.625-.625zm.8 1.8a.63.63 0 0 0-.625.625.63.63 0 0 0 .625.625h1.6A.63.63 0 0 0 9.425 14a.63.63 0 0 0-.625-.625z"
                    })
                },
                a = (0, n(104509).wt)("lightBulbBrightSmall", r, "small")
        },
        497857: (e, t, n) => {
            n.d(t, {
                h: () => a
            }), n(296540);
            var r = n(474848);

            function a() {
                return (0, r.jsx)(n(16275).I, {
                    icon: n(746204).w,
                    size: "lg",
                    colorVariant: "primary"
                })
            }
        },
        519529: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                xMarkFillSmallIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                a = (0, n(104509).wt)("xMarkFillSmall", r, "fillSmall")
        },
        597484: (e, t, n) => {
            n.d(t, {
                E: () => r
            });

            function r(e) {
                return !!(0, n(722371).Xk)(n(717037).il, e)
            }
        },
        622356: (e, t, n) => {
            n.d(t, {
                l: () => i
            });
            var r = n(296540),
                a = n(474848);
            let o = {
                container: {
                    width: 200,
                    aspectRatio: "4 / 5",
                    minHeight: 250,
                    backgroundColor: n(632079).Tj.background.primary,
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: `0 0 0 2px ${n(632079).Tj.border.secondary}`,
                    display: "flex",
                    flexDirection: "column"
                },
                coverContainer: {
                    width: "100%",
                    flexShrink: 0
                },
                content: {
                    padding: 16,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                },
                contentForCollection: {
                    paddingBottom: 0,
                    flex: "0 0 auto"
                },
                iconWrapper: {
                    marginBottom: 4
                },
                title: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.semibold,
                    lineHeight: 1.3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical"
                },
                skeletonLine: {
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: n(632079).Tj.background.tertiary
                },
                tableButton: {
                    width: 24,
                    height: 10,
                    borderRadius: 4,
                    backgroundColor: n(632079).Tj.blue.background.accentSecondary
                },
                tableGrid: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    border: `1px solid ${n(632079).Tj.border.primary}`,
                    borderRadius: 4,
                    overflow: "hidden",
                    backgroundColor: n(632079).Tj.background.primary
                },
                tableRow: {
                    display: "flex",
                    flexDirection: "row",
                    borderBottom: `1px solid ${n(632079).Tj.border.primary}`,
                    paddingInlineStart: 6,
                    paddingInlineEnd: 6,
                    minHeight: 20,
                    alignItems: "center"
                },
                tableRowLast: {
                    borderBottom: "none"
                },
                tableCell: {
                    height: "100%",
                    borderInlineEnd: `1px solid ${n(632079).Tj.border.primary}`,
                    paddingInlineEnd: 8,
                    paddingInlineStart: 6,
                    display: "flex",
                    alignItems: "center"
                },
                tableCellLast: {
                    borderInlineEnd: "none"
                },
                skeletonBullet: {
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: n(632079).Tj.background.tertiary,
                    marginInlineEnd: 10,
                    flexShrink: 0
                },
                skeletonText: {
                    height: 5,
                    borderRadius: 2.5,
                    backgroundColor: n(632079).Tj.background.tertiary
                },
                style0: {
                    width: "90%"
                },
                style1: {
                    width: "70%"
                },
                style2: {
                    width: "80%"
                },
                style3: {
                    width: "60%"
                },
                style4: {
                    flex: "0 0 50%"
                },
                style5: {
                    flex: "1 1 25%"
                }
            };

            function i(e) {
                let {
                    pageId: t,
                    spaceId: i
                } = e, d = (0, n(533992).v3)(), c = (0, r.useMemo)(() => new(n(970831)).B(d, {
                    table: n(832375).evP,
                    id: t,
                    spaceId: i
                }), [d, t, i]);
                (0, r.useEffect)(() => {
                    c.load()
                }, [c]);
                let u = (0, n(682985).K8)(() => c.getIcon(), [c]),
                    p = (0, n(682985).K8)(() => (0, n(569553).Te)(c), [c]),
                    g = (0, n(682985).K8)(() => c.isReady(), [c]),
                    f = (0, n(682985).K8)(() => c.hasError(), [c]);
                return (0, n(682985).K8)(() => c.isCollectionView(), [c]) ? (0, a.jsxs)("div", {
                    style: o.container,
                    "aria-hidden": "true",
                    children: [(0, a.jsxs)("div", {
                        style: { ...o.content,
                            ...o.contentForCollection
                        },
                        children: [(0, a.jsx)("div", {
                            style: o.iconWrapper,
                            children: (0, a.jsx)(n(569553).B6, {
                                disabled: !0,
                                icon: u,
                                iconRecordCategory: p,
                                isEmptyPage: !1,
                                isLarge: !1,
                                size: 20,
                                emojiSize: 20
                            })
                        }), (0, a.jsx)("div", {
                            style: o.title,
                            children: (0, a.jsx)(n(627918).A, {
                                store: c,
                                shouldWrap: !0,
                                maxLines: 2
                            })
                        })]
                    }), (0, a.jsx)(l, {})]
                }) : !g || f ? (0, a.jsx)("div", {
                    style: o.container,
                    children: (0, a.jsx)(n(4458).VP, {
                        padding: 16,
                        flex: 1,
                        gap: 8,
                        children: (0, a.jsx)(s, {})
                    })
                }) : (0, a.jsxs)("div", {
                    style: o.container,
                    "aria-hidden": "true",
                    children: [(0, a.jsx)("div", {
                        style: o.coverContainer,
                        children: (0, a.jsx)(n(15021).d, {
                            store: c,
                            disabled: !0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            height: 36,
                            proxyWidth: 200
                        })
                    }), (0, a.jsxs)(n(4458).VP, {
                        padding: 16,
                        flex: 1,
                        gap: 8,
                        children: [(0, a.jsx)("div", {
                            style: o.iconWrapper,
                            children: (0, a.jsx)(n(569553).B6, {
                                disabled: !0,
                                icon: u,
                                iconRecordCategory: p,
                                isEmptyPage: !1,
                                isLarge: !1,
                                size: 20,
                                emojiSize: 20
                            })
                        }), (0, a.jsx)("div", {
                            style: o.title,
                            children: (0, a.jsx)(n(627918).A, {
                                store: c,
                                shouldWrap: !0,
                                maxLines: 2
                            })
                        }), (0, a.jsx)(s, {})]
                    })]
                })
            }

            function s() {
                return (0, a.jsxs)(n(4458).VP, {
                    gap: 6,
                    marginTop: 8,
                    children: [(0, a.jsx)("div", {
                        style: { ...o.skeletonLine,
                            ...o.style0
                        }
                    }), (0, a.jsx)("div", {
                        style: { ...o.skeletonLine,
                            ...o.style1
                        }
                    }), (0, a.jsx)("div", {
                        style: { ...o.skeletonLine,
                            ...o.style2
                        }
                    }), (0, a.jsx)("div", {
                        style: { ...o.skeletonLine,
                            ...o.style3
                        }
                    })]
                })
            }

            function l() {
                let e = ["85%", "70%", "90%", "65%", "75%"];
                return (0, a.jsxs)(n(4458).VP, {
                    paddingTop: 4,
                    paddingBottom: 16,
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16,
                    gap: 8,
                    children: [(0, a.jsx)(n(4458).fI, {
                        justifyContent: "flex-end",
                        children: (0, a.jsx)("div", {
                            style: o.tableButton
                        })
                    }), (0, a.jsx)("div", {
                        style: o.tableGrid,
                        children: e.map((t, n) => (0, a.jsxs)("div", {
                            style: { ...o.tableRow,
                                ...n === e.length - 1 ? o.tableRowLast : {}
                            },
                            children: [(0, a.jsxs)("div", {
                                style: { ...o.tableCell,
                                    ...o.style4
                                },
                                children: [(0, a.jsx)("div", {
                                    style: o.skeletonBullet
                                }), (0, a.jsx)("div", {
                                    style: { ...o.skeletonText,
                                        width: t,
                                        flex: 1
                                    }
                                })]
                            }), (0, a.jsx)("div", {
                                style: { ...o.tableCell,
                                    ...o.style5
                                }
                            }), (0, a.jsx)("div", {
                                style: { ...o.tableCell,
                                    ...o.tableCellLast,
                                    ...o.style5
                                }
                            })]
                        }, n))
                    })]
                })
            }
        },
        675053: (e, t, n) => {
            n.r(t), n.d(t, {
                setPostOnboardingAgentConfig: () => r
            });

            function r({
                environment: e,
                config: t
            }) {
                var a;
                let o = (0, n(904434).R$)(e);
                if (!o) return;
                let i = (null == (a = o.getSettings()) ? void 0 : a.post_onboarding_agent_config) ? ? {};
                (0, n(377796).createAndCommit)({
                    userAction: "contextualizedOnboardingActions.savePostOnboardingAgentConfig",
                    environment: e,
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: o,
                            data: {
                                post_onboarding_agent_config: { ...i,
                                    ...t
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }
        },
        746204: (e, t, n) => {
            n.d(t, {
                w: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                a = (0, n(104509).wt)("arrowChevronSingleLeftFill", r, "fill")
        },
        752104: (e, t, n) => {
            n.d(t, {
                j: () => s
            }), n(16280), n(944114);
            var r = () => n(426048),
                a = () => n(488307),
                o = () => n(832375),
                i = () => n(421439);
            async function s(e) {
                let {
                    environment: t,
                    threadStore: s,
                    confirmToolStepIds: l,
                    rejectToolStepIds: d,
                    connectFlowCreatedModuleId: c
                } = e, u = s.getSpaceId();
                if (!u) throw Error("Thread has no space ID");
                let p = s.getMessages(),
                    g = [];
                for (let e = 0; e < p.length; e++) {
                    let t = s.getMessageStoreAt(e);
                    if (!t) continue;
                    let n = t.getStep();
                    n && g.push(n)
                }
                let f = (0, n(851062).ey)(g);
                if (0 === f.length) return;
                let {
                    serverCommitResult: m
                } = (0, n(377796).createAndCommit)({
                    userAction: "confirmToolStepsInThread",
                    environment: t,
                    cellTarget: {
                        spaceWithId: u
                    },
                    canUndo: !1,
                    perform: e => {
                        for (let t of f) {
                            let n = l.includes(t.id),
                                g = void 0 !== d ? d.includes(t.id) : !n;
                            if (!n && !g) continue;
                            let f = n ? "confirmation:confirmed" : "confirmation:rejected",
                                m = (0, r().oA)(t, f);
                            n && void 0 !== c && "agent-tool-result" === m.type && (m = { ...m,
                                connectFlowCreatedModuleId: c
                            });
                            let h = p.indexOf(t.id),
                                y = s.getMessageStoreAt(h);
                            if (!y) continue;
                            let v = a().op.update({
                                pointer: {
                                    table: o().mSw,
                                    id: t.id,
                                    spaceId: u
                                },
                                path: ["step"],
                                args: m
                            });
                            (0, i().y4)({
                                store: y,
                                operation: v,
                                transaction: e
                            })
                        }
                    }
                });
                await m
            }
        },
        789722: (e, t, n) => {
            n.d(t, {
                W: () => r
            });
            let r = (0, n(109939).YK)({
                done: {
                    id: "modal.doneButton",
                    defaultMessage: "Done"
                },
                cancel: {
                    id: "modal.cancelButton",
                    defaultMessage: "Cancel"
                },
                back: {
                    id: "modal.backButton",
                    defaultMessage: "Back"
                }
            })
        },
        793292: (e, t, n) => {
            n.d(t, {
                $5: () => h,
                I: () => f,
                PA: () => d,
                WM: () => c,
                eb: () => m,
                ji: () => g,
                pg: () => y,
                yX: () => l
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(581454);
            var r = n(296540),
                a = () => n(915045),
                o = () => n(140030),
                i = () => n(682956),
                s = () => n(740170);

            function l(e, t) {
                let n = [];
                for (let r of e) {
                    let e = c(r.toolType),
                        a = d(r, t);
                    if (e)
                        for (let t of a) t.table === i().ev && n.push({
                            recordPointer: t,
                            agentAction: e
                        })
                }
                return n
            }

            function d(e, t) {
                var r;
                if (!e || (r = e.result, (!(0, n(722371).Gv)(r) || Array.isArray(r)) && 1)) return [];
                let a = e.result;
                return "appId" in a && "string" == typeof a.appId ? [{
                    table: i().ev,
                    id: a.appId
                }] : "pageId" in a && "string" == typeof a.pageId ? [{
                    table: i().ev,
                    id: a.pageId
                }] : "planPageId" in a && "string" == typeof a.planPageId ? [{
                    table: i().ev,
                    id: a.planPageId
                }] : "collectionViewBlockId" in a && "string" == typeof a.collectionViewBlockId ? [{
                    table: i().ev,
                    id: a.collectionViewBlockId
                }] : "pageIds" in a && Array.isArray(a.pageIds) ? a.pageIds.map(e => ({
                    table: i().ev,
                    id: e
                })) : "workflowId" in a && "string" == typeof a.workflowId && t ? [{
                    table: n(43296).C,
                    id: a.workflowId,
                    spaceId: t
                }] : "entities" in a ? function(e) {
                    let t = [];
                    for (let n of e) {
                        let e = (0, o().dw)(n);
                        e && t.push(e)
                    }
                    return n(381453).hS(t, e => `${e.table}-${e.id}`)
                }(a.entities) : (0, n(426048).gY)(e, "query-data-sources") && "collectionIds" in a && Array.isArray(a.collectionIds) ? a.collectionIds.map(e => ({
                    id: e,
                    table: n(46241).V
                })) : (0, n(426048).gY)(e, "marketplace.installTemplate") && "navigateToBlockId" in a && "string" == typeof a.navigateToBlockId ? [{
                    table: i().ev,
                    id: a.navigateToBlockId
                }] : []
            }

            function c(e) {
                if (!(0, n(597484).E)(e)) switch (e) {
                    case "create-database":
                    case "notion.createDatabase":
                    case "create-pages":
                    case "create-agent":
                    case "create-agent-v2":
                    case "generate-plan":
                        return "create";
                    case "update-database":
                    case "update-database-data-sources":
                    case "update-database-views":
                    case "update-database-triggers":
                    case "notion.updateDatabase":
                    case "notion.createTwoWayRelation":
                    case "update-page":
                    case "update-page-v2":
                    case "enter-setup-mode":
                    case "exit-setup-mode":
                    case "update-agent":
                    case "update-agent-v2":
                    case "callFunction":
                    case "runScript":
                        return "update";
                    case "delete-pages":
                    case "delete-agent":
                        return "delete";
                    case "search":
                    case "queryCalendar":
                    case "queryMail":
                    case "view":
                    case "view-notifications":
                    case "view-version-history":
                    case "view-database-files":
                    case "view-channel":
                    case "view-slack-channel":
                    case "view-code-repo":
                    case "query-data-sources":
                    case "error":
                    case "result":
                    case "wait":
                    case "edit-json":
                    case "query-salesforce-tool":
                    case "list-machines":
                    case "create-machine":
                    case "destroy-machine":
                    case "remote-coding-agent-tool":
                    case "external-agent-tool":
                    case "terminal":
                    case "browser":
                    case "summarize-meeting-note":
                    case "generate-image":
                    case "mcpServer.getPrompt":
                    case "mcpServer.listPrompts":
                    case "mcpServer.listResources":
                    case "mcpServer.readResource":
                    case "mcpServer.runTool":
                    case "mcpServer.listTools":
                    case "images.generate":
                    case "slack.addReactionToMessage":
                    case "slack.createThreadInChannel":
                    case "slack.createThreadInDirectMessage":
                    case "slack.findUserByEmail":
                    case "slack.getThreadsInChannelSince":
                    case "slack.getUser":
                    case "slack.parseSlackUriOrUrl":
                    case "slack.queryChannels":
                    case "slack.removeReactionFromMessage":
                    case "slack.replyInThread":
                    case "slack.updateMessage":
                    case "slack.viewFileUrl":
                    case "slack.loadMessage":
                    case "notion.addCommentToDiscussion":
                    case "notion.getPageDiscussions":
                    case "notion.sendNotification":
                    case "notion.viewFileUrl":
                    case "calendar.fetchPlaybook":
                    case "calendar.listCalendars":
                    case "calendar.listEvents":
                    case "calendar.listCoworkersEvents":
                    case "calendar.createEvents":
                    case "calendar.updateEvents":
                    case "calendar.cancelEvents":
                    case "calendar.suggestMeetingTimes":
                    case "calendar.listCalendarResources":
                    case "files.getFileContent":
                    case "files.getFileName":
                    case "files.getFileUrl":
                    case "cursor.createAgent":
                    case "cursor.addFollowup":
                    case "cursor.getAgent":
                    case "cursor.listRepositories":
                    case "boxy.createBox":
                    case "boxy.getBox":
                    case "boxy.sendBoxThread":
                    case "boxy.streamMessageToThread":
                    case "worker.runTool":
                    case "worker.listTools":
                    case "workers.list":
                    case "query-agent-threads":
                    case "investigate-agent-thread":
                    case "run-agent":
                    case "update-todos":
                    case "markSessionFailed":
                    case "computer.listMachines":
                    case "computer.listSecrets":
                    case "computer.createMachine":
                    case "computer.destroyMachine":
                    case "computer.setSecret":
                    case "computer.terminal":
                    case "computer.browser":
                    case "computer.viewFileUrl":
                    case "computer.getJobStatus":
                    case "computer.getJobLogs":
                    case "computer.getMachine":
                    case "computer.poll":
                    case "computer.wait":
                    case "computer.readFile":
                    case "computer.writeFile":
                    case "computer.listDir":
                    case "computer.mkdir":
                    case "computer.rm":
                    case "computer.getTags":
                    case "computer.setTags":
                    case "computer.deleteSecret":
                    case "computer.tunnels":
                    case "notion.createAgent":
                    case "notion.createDatabaseAgent":
                    case "notion.loadAgent":
                    case "notion.loadUser":
                    case "notion.updateAgent":
                    case "notion.loadDatabase":
                    case "notion.loadDataSource":
                    case "notion.getFormulaValue":
                    case "notion.loadPage":
                    case "notion.createPage":
                    case "notion.createFactoryTask":
                    case "notion.updatePage":
                    case "notion.querySql":
                    case "notion.queryDataSource":
                    case "notion.queryView":
                    case "notion.queryMeetings":
                    case "notion.createAndRunThread":
                    case "web.search":
                    case "web.loadPage":
                    case "browser.run":
                    case "search.search":
                    case "helpdocs.search":
                    case "search.unifiedSearch":
                    case "asana.search":
                    case "box.search":
                    case "box.loadFile":
                    case "box.findSharedItem":
                    case "discord.search":
                    case "discord.sendMessageToChannel":
                    case "discord.updateMessage":
                    case "discord.addReaction":
                    case "discord.removeReaction":
                    case "discord.listChannels":
                    case "discord.getRecentChannelMessages":
                    case "github.search":
                    case "github.grepCode":
                    case "github.lsDirectory":
                    case "github.loadPR":
                    case "github.loadIssue":
                    case "github.loadCommit":
                    case "github.loadFile":
                    case "gmail.search":
                    case "gmail.loadThread":
                    case "gmail.query":
                    case "googleDrive.search":
                    case "googleDrive.loadFile":
                    case "googleDrive.getFileComments":
                    case "googleDrive.lsFolder":
                    case "googleDrive.loadZipFile":
                    case "googleDrive.grepFiles":
                    case "googleCalendar.search":
                    case "googleCalendar.query":
                    case "jira.search":
                    case "jira.loadIssue":
                    case "linear.search":
                    case "linear.loadIssue":
                    case "microsoftTeams.search":
                    case "microsoftTeams.loadMessage":
                    case "microsoftTeams.viewChannel":
                    case "microsoftTeams.viewChat":
                    case "outlook.search":
                    case "outlook.loadMessage":
                    case "outlook.loadThread":
                    case "outlook.query":
                    case "asana.loadTask":
                    case "sharepoint.loadFile":
                    case "salesforce.search":
                    case "salesforce.soqlQuery":
                    case "salesforce.getSample":
                    case "salesforce.findUserIds":
                    case "salesforce.loadRecord":
                    case "security.searchAuditLogs":
                    case "security.getAuditLogEntry":
                    case "confluence.search":
                    case "confluence.cqlQuery":
                    case "confluence.loadPage":
                    case "sharepoint.search":
                    case "slack.search":
                    case "slack.getUserMessages":
                    case "microsoftTeams.getUserMessages":
                    case "notion.search":
                    case "notion.searchUsers":
                    case "notion.queryThreads":
                    case "notion.investigateThread":
                    case "notion.spawnSubagent":
                    case "notion.wideResearch":
                    case "notion.getUserEngagementAnalytics":
                    case "notion.getContentEngagementAnalytics":
                    case "notion.getDailyUsersAnalytics":
                    case "notion.listUsersAnalytics":
                    case "notion.listContentAnalytics":
                    case "notion.getPageAnalyticsTimeSeries":
                    case "notion.getPageVisitors":
                    case "notion.listTeamspaces":
                    case "notion.getTeamspaceTopLevelPagesAndDatabases":
                    case "notion.loadPermissions":
                    case "notion.updatePermission":
                    case "notion.deletePages":
                    case "notion.deleteDatabases":
                    case "notion.loadMeetingNoteTranscript":
                    case "notion.getUserActivity":
                    case "fs.readDir":
                    case "fs.readFiles":
                    case "test.getState":
                    case "claude.startRun":
                    case "claude.archiveRun":
                    case "claude.getRunStatus":
                    case "claude.listSessionEvents":
                    case "claude.sendUserMessage":
                    case "escalate":
                    case "computer.uploadFile":
                    case "marketplace.installTemplate":
                    case "marketplace.searchTemplates":
                    case "computer.downloadFile":
                    case "system.wait":
                    case "status":
                    case "ask-survey":
                    case "notion.listUserConnections":
                    case "notion.createUserConnection":
                    case "notion.archivePages":
                    case "notion.unarchivePages":
                        return;
                    default:
                        (0, n(722371).HB)(e)
                }
            }
            let u = new Set,
                p = {
                    operationsToUndo: n(891696).Pc,
                    hasUndoneOperations: !1,
                    stepsWithOperationsToUndo: u
                };

            function g({
                diffResultSteps: e,
                threadStore: t
            }) {
                var r;
                let o = !!(0, n(972740).L)(),
                    i = null == (r = (0, n(972740).L)()) ? void 0 : r.id;
                return (0, n(682985).K8)(() => {
                    if (!o || !i) return p;
                    let n = [],
                        r = new Map;
                    for (let o of e.slice().reverse())
                        if (o)
                            for (let e of a().X.createChildStore(t, {
                                    table: s().m,
                                    id: o.id,
                                    spaceId: i
                                }).getThreadOperationStores().slice().reverse()) n.push(e), r.set(e, o);
                    if (0 === n.length) return p;
                    let l = [],
                        d = new Set,
                        c = !1;
                    for (let e of n) {
                        let t = e.getKeyValue("userAction"),
                            n = e.getKeyValue("invertedOperations") ? ? [];
                        if ("undo" === t) c = !0;
                        else {
                            l.push(...n);
                            let t = r.get(e);
                            t && d.add(t)
                        }
                    }
                    return 0 !== l.length || c || 0 !== d.size ? {
                        operationsToUndo: l,
                        hasUndoneOperations: c,
                        stepsWithOperationsToUndo: d
                    } : p
                }, [e, o, i, t], {
                    equalityFn: n(381453).n4
                })
            }

            function f({
                runningInference: e,
                toolResultStep: t,
                isLastTurn: r
            }) {
                return !!e && (t ? !(0, n(780899).nP)(t) : r)
            }

            function m(e) {
                return "callFunction" !== e.toolType && "runScript" !== e.toolType && !!e.error && e.error !== n(851062).p9
            }

            function h(e) {
                return (0, n(960253).I)(() => ({
                    animationStyle: {
                        opacity: +!!e,
                        transition: "opacity 800ms ease-in-out"
                    }
                }), [e]).animationStyle
            }

            function y({
                numItems: e,
                animateIndexOffset: t = 0,
                disableAnimation: n = !1,
                onAllAnimationsComplete: a
            }) {
                let [o, i] = (0, r.useState)(new Set), s = (0, r.useMemo)(() => [...Array(e).keys()], [e]);
                return (0, r.useEffect)(() => {
                    if (n) {
                        i(new Set(s)), a && a();
                        return
                    }
                    for (let n of s) setTimeout(() => {
                        i(t => {
                            let r = new Set(t).add(n);
                            return r.size === e && a && setTimeout(a, 100), r
                        })
                    }, (n + t) * 100 + 200)
                }, [t, s, n, e, a]), o
            }
        },
        806875: (e, t, n) => {
            n.d(t, {
                z: () => l
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(430670), n(581454);
            var r = () => n(517013),
                a = () => n(832375),
                o = () => n(51929),
                i = () => n(987380),
                s = () => n(818646);

            function l(e) {
                let {
                    resultIds: t,
                    collectionViewStore: l,
                    collectionContextStore: d,
                    transaction: c
                } = e, u = l.getPageSortStore(), p = u.getValue() || [], {
                    beforeOps: g
                } = (0, n(219083).i)(p, t.slice(0, n(9247).WF));
                for (let [e, n] of Object.entries(g))
                    if (n) {
                        let t = (0, r().v3)(l, {
                            table: a().evP,
                            id: n
                        });
                        (0, i().n)({
                            parentStore: u,
                            insertStore: (0, r().v3)(l, {
                                table: a().evP,
                                id: e
                            }),
                            beforeStore: t,
                            transaction: c
                        })
                    } else {
                        let n = t.findIndex(t => t === e),
                            i = t[n - 1],
                            s = i ? (0, r().v3)(l, {
                                table: a().evP,
                                id: i
                            }) : void 0;
                        (0, o().W)({
                            parentStore: u,
                            insertStore: (0, r().v3)(l, {
                                table: a().evP,
                                id: e
                            }),
                            afterStore: s,
                            transaction: c
                        })
                    }! function(e) {
                    let {
                        collectionContextStore: t,
                        collectionViewStore: o,
                        transaction: i
                    } = e, l = o.getPageSortStore();
                    for (let e of function(e) {
                            let {
                                pageSort: t,
                                currentResults: r
                            } = e;
                            if (!t || t.length <= n(9247).WF) return [];
                            let a = t.filter(e => !r.has(e));
                            return n(381453).sb([...a.reverse(), ...n(381453).o8(t).reverse()]).slice(0, t.length - n(9247).WF)
                        }({
                            pageSort: l.getValue(),
                            currentResults: new Set(t.groupsStore.getAllGroupStates().flatMap(e => e.resultsStore.state.map(e => e.id)))
                        }))(0, s().T)({
                        parentStore: l,
                        childToRemoveStore: (0, r().v3)(l, {
                            table: a().evP,
                            id: e
                        }),
                        transaction: i
                    })
                }({
                    collectionContextStore: d,
                    collectionViewStore: l,
                    transaction: c
                })
            }
            n(354520)
        },
        848135: (e, t, n) => {
            n.d(t, {
                B: () => a
            });
            var r = n(296540);

            function a() {
                let e = (0, r.useRef)(null),
                    [t, n] = (0, r.useState)(!1),
                    a = (0, r.useCallback)(() => {
                        let t = e.current;
                        t && n(t.matches(":hover"))
                    }, []);
                return [(0, r.useCallback)(t => {
                    t ? (t.addEventListener("mouseenter", a), t.addEventListener("mouseleave", a), e.current = t, a()) : e.current && (e.current.removeEventListener("mouseenter", a), e.current.removeEventListener("mouseleave", a), e.current = null)
                }, [a]), t, e]
            }
        },
        860024: (e, t, n) => {
            n.d(t, {
                c: () => a
            }), n(581454);
            var r = n(296540);

            function a(e) {
                let {
                    stepsWithOperationsToUndo: t,
                    threadOverrideStore: a
                } = e, o = (0, n(533992).v3)(), i = (0, n(972740).L)(), s = (0, n(548124).useThreadStoreFromCurrentRoute)(), l = a ? ? s, d = (0, n(876252).$)();
                return {
                    handleUndo: (0, r.useCallback)(async () => {
                        let e = n(296738).lz.getSource(),
                            r = (null == e ? void 0 : e.type) === "edit-reference";
                        if (!l || !i || !d) return;
                        let a = Array.from(t).map(e => e.id);
                        if (0 !== a.length) try {
                            let e = await o.api.callCellCompatibleApi({
                                eventName: "undoAgentOperations",
                                environment: o,
                                data: {
                                    threadId: l.id,
                                    spaceId: i.id,
                                    stepIds: a
                                },
                                cellNavigation: {
                                    spaceId: i.id
                                }
                            });
                            if ("failed" === e.type) throw e.error;
                            e.data.recordMap && (0, n(31069)._)({
                                currentUserId: o.currentUser.id,
                                defaultRecordCache: o.defaultRecordCache,
                                userId: o.currentUser.id,
                                inMemoryRecordCache: i.inMemoryRecordCache,
                                recordMap: n(412951).RecordMapWithRole.create(e.data.recordMap),
                                debugSource: "undoAgentOperations",
                                isPendingTransactionForRecord: n(941701).transactionQueue.isPendingTransactionForRecord.bind(n(941701).transactionQueue)
                            });
                            let s = Array.from(t).map(e => ({
                                    name: e.toolName,
                                    id: e.toolCallId
                                })),
                                c = (0, n(674880).Xw)({
                                    environment: o,
                                    spaceId: i.id,
                                    message: `The user has undone the following tools:
${s.map(e=>`- ${e.name}${e.id?` ({{[prefix=tool]${e.id}}})`:""}`).join("\n")}`,
                                    notificationType: "info",
                                    metadata: {
                                        action: "undo",
                                        tools: s
                                    }
                                }),
                                {
                                    serverCommitResult: u
                                } = (0, n(377796).createAndCommit)({
                                    userAction: "GroupStepRenderer.handleUndo",
                                    environment: o,
                                    cellTarget: {
                                        spaceWithId: i.id
                                    },
                                    canUndo: !1,
                                    perform: e => {
                                        (0, n(757688).Vn)({
                                            threadStore: l,
                                            environment: o,
                                            spaceStore: i,
                                            userStore: d,
                                            addSteps: [c],
                                            transaction: e
                                        })
                                    }
                                });
                            return r && (0, n(115960).ML)(), u
                        } catch (e) {
                            throw e
                        }
                    }, [o, i, l, d, t])
                }
            }
        },
        875399: (e, t, n) => {
            n.d(t, {
                i: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.62 15.25 14",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.375 5.75c0-1.174.951-2.125 2.125-2.125h11c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125H12v1h1.5a.625.625 0 1 1 0 1.25h-7a.625.625 0 1 1 0-1.25H8v-1H4.5a2.125 2.125 0 0 1-2.125-2.125zM4.5 4.875a.875.875 0 0 0-.875.875v7.5c0 .483.392.875.875.875h11a.875.875 0 0 0 .875-.875v-7.5a.875.875 0 0 0-.875-.875z"
                    })
                },
                a = (0, n(104509).wt)("display", r, "default")
        },
        880522: (e, t, n) => {
            async function r(e) {
                let {
                    environment: t,
                    contentStores: r,
                    textValue: o,
                    parentStore: i,
                    copiedMessageLabel: s
                } = e;
                if (r && r.length > 0) {
                    let [e, o] = await Promise.all([n(235645).R.clipboardActions.load(), n(94386).g.load()]), i = r.map(e => e.getBlockTitleStore()), s = i[0], l = i[i.length - 1];
                    if (s && l) {
                        let e = n(247438).AhH(l.getValue() || []),
                            a = (0, n(478708).h)({
                                store: s,
                                index: 0
                            }, {
                                store: l,
                                index: e
                            });
                        (0, n(726923).setMultiSelection)({
                            multiSelection: a
                        }), (0, n(854924).t)({
                            environment: t,
                            stores: r,
                            phase: n(476987).o.Editing,
                            pivot: r[0]
                        })
                    } else(0, n(854924).t)({
                        environment: t,
                        stores: r
                    });
                    await n(374176).default.afterNextFlush(), await a({
                        clipboardActions: e,
                        environment: t,
                        markdownLinkifyIt: o
                    })
                } else {
                    let e = await (0, n(969899).jd)();
                    await e({
                        environment: t,
                        stringValue: (0, n(536614).r4)(o, i)
                    })
                }
                n(436555).D6({
                    label: s
                })
            }
            async function a(e) {
                let {
                    environment: t,
                    clipboardActions: r,
                    markdownLinkifyIt: a
                } = e;
                if (!t.device.isSafari || !document.queryCommandSupported("copy")) return void await r.copySelectionToClipboard({
                    environment: t,
                    markdownLinkifyIt: a
                });
                let o = document.createElement("span");
                o.textContent = "​", o.style.position = "fixed", o.style.opacity = "0", o.style.pointerEvents = "none", o.style.userSelect = "auto", document.body.appendChild(o);
                let i = e => {
                    var n;
                    null == (n = e.stopImmediatePropagation) || n.call(e), r.copy({
                        environment: t,
                        event: e,
                        disableSyncTextSelection: !0,
                        markdownLinkifyIt: a
                    })
                };
                try {
                    window.addEventListener("copy", i, {
                        capture: !0,
                        once: !0
                    }), n(239134).setOnNode(o, t.device), r.triggerBrowserCopy()
                } catch {
                    await r.copySelectionToClipboard({
                        environment: t,
                        markdownLinkifyIt: a
                    })
                } finally {
                    var s;
                    n(239134).clear(t), window.removeEventListener("copy", i, {
                        capture: !0
                    }), null == (s = o.parentNode) || s.removeChild(o)
                }
            }
            n.d(t, {
                i: () => r
            }), n(581454)
        },
        896045: (e, t, n) => {
            n.d(t, {
                N: () => a
            }), n(18107), n(410838), n(967357), n(898992), n(354520), n(581454), n(737550);
            var r = n(296540);

            function a(e) {
                let {
                    turn: t,
                    parts: a,
                    spaceStore: o
                } = e, i = (0, r.useMemo)(() => a.filter(e => "tool-use" === e.type).map(e => e.toolResultStep).filter(e => null != e).filter(e => !(0, n(780899).I6)(e) && !(0, n(780899).dB)(e) && !(0, n(793292).eb)(e) && n(426048).MV.some(t => t === e.toolName)), [a]), s = (0, n(682985).K8)(() => {
                    let e = (0, n(793292).yX)(i, (null == o ? void 0 : o.id) ? ? "").length > 0,
                        t = i.some(e => ("callFunction" === e.toolName || "runScript" === e.toolName) && e.threadOperations && e.threadOperations.length > 0);
                    return e || t
                }, [i, null == o ? void 0 : o.id]), l = (0, r.useMemo)(() => {
                    let e = t.steps.findLast(e => "error" === e.type),
                        n = Date.now(),
                        r = t.steps.filter(e => {
                            let t = "startedAt" in e && e.startedAt < n - 6e4,
                                r = "finishedAt" in e && e.finishedAt && e.finishedAt < n - 6e4;
                            return t || r
                        }),
                        o = i.at(-1),
                        s = a.findLast(e => e.isFinished),
                        l = (null == s ? void 0 : s.type) === "tool-use" ? s : null,
                        d = null == l ? void 0 : l.toolResultStep;
                    return e || o || d || (s ? s.step : t.steps.at(-1)) || r.at(-1)
                }, [a, i, t.steps]), d = l && "traceId" in l ? l.traceId : void 0;
                return {
                    undoableToolResults: i,
                    hasModifiedRecords: s,
                    feedbackStep: l,
                    feedbackTraceId: d
                }
            }
        },
        945009: (e, t, n) => {
            n.d(t, {
                w: () => r
            }), n(898992), n(354520);
            async function r(e) {
                let t, {
                        environment: r,
                        spaceStore: a,
                        copySourceData: o,
                        copiedMessageLabel: i
                    } = e,
                    s = function(e) {
                        var t;
                        let {
                            environment: r,
                            spaceStore: a,
                            copySourceData: o
                        } = e, i = a.id, s = null == (t = r.currentUser) ? void 0 : t.id;
                        if (!s) return;
                        let l = n(218744).default.checkGate({
                                gateName: "ai_image_generation"
                            }) && a.isAiImageGenerationEnabledOnSpace(),
                            d = new(n(870941)).A({
                                name: o.name,
                                isTemporaryData: !0
                            }),
                            c = r.idCreator.getSpaceIdCreatorSync(i),
                            u = c.idInSavedSpace(n(832375).evP),
                            p = l ? n(674230).W.filter(e => "image" !== e) : n(674230).W,
                            {
                                performResult: g
                            } = (0, n(377796).createAndCommit)({
                                userAction: `createTemporaryAgentCopyStore.${o.type}`,
                                environment: r,
                                cellTarget: {
                                    spaceWithId: i
                                },
                                canUndo: !1,
                                perform: e => {
                                    if ("markdown" === o.type) {
                                        let t = (0, n(33983).a9)({
                                                markdown: o.markdown,
                                                pageId: u,
                                                spaceId: i,
                                                idCreator: c,
                                                actorPointer: {
                                                    table: n(832375).oo9,
                                                    id: s
                                                },
                                                citationFormat: "link",
                                                omitBlockTypes: p,
                                                isUrlAllowed: n(203489).C
                                            }),
                                            a = n(124937).Wv({
                                                environment: r,
                                                type: "page",
                                                id: u,
                                                inMemoryRecordCache: d,
                                                transaction: e,
                                                spaceId: i,
                                                format: {
                                                    page_small_text: !0
                                                }
                                            });
                                        return (0, n(33983).HS)({
                                            environment: r,
                                            transaction: e,
                                            rootStore: a,
                                            blockOperations: t
                                        }), a
                                    }
                                    if ("textValue" === o.type) {
                                        let t = n(124937).Wv({
                                                environment: r,
                                                type: "page",
                                                id: u,
                                                inMemoryRecordCache: d,
                                                transaction: e,
                                                spaceId: i,
                                                format: {
                                                    page_small_text: !0
                                                }
                                            }),
                                            a = t.getContentStore(),
                                            s = n(124937).Wv({
                                                environment: r,
                                                type: "text",
                                                inMemoryRecordCache: d,
                                                transaction: e,
                                                spaceId: i,
                                                properties: {
                                                    title: o.textValue
                                                }
                                            });
                                        return n(579695).NI({
                                            parentStore: a,
                                            childStore: s,
                                            transaction: e
                                        }), t
                                    }(0, n(722371).HB)(o)
                                }
                            });
                        return g
                    }({
                        environment: r,
                        spaceStore: a,
                        copySourceData: o
                    }),
                    l = (null == s ? void 0 : s.getContentStores()) ? ? [];
                "textValue" === o.type ? t = o.textValue : "markdown" === o.type ? t = (0, n(247438).x9d)(o.markdown) : (0, n(722371).HB)(o);
                let d = null == s ? void 0 : s.inMemoryRecordCache;
                d && d.addCacheFallback(r.defaultRecordCache.inMemoryRecordCache), await (0, n(880522).i)({
                    environment: r,
                    contentStores: l,
                    textValue: t,
                    parentStore: a,
                    copiedMessageLabel: i
                }), d && d.removeCacheFallback(r.defaultRecordCache.inMemoryRecordCache)
            }
        },
        946651: (e, t, n) => {
            n.d(t, {
                s: () => a
            }), n(944114), n(898992), n(354520), n(803949);
            var r = n(296540);

            function a(e) {
                let {
                    turn: t,
                    environment: a,
                    spaceStore: o,
                    threadStore: i,
                    clientStore: s,
                    runningInference: l,
                    showDebug: d
                } = e, c = (0, r.useRef)(new Map), u = (0, r.useMemo)(() => t.steps ? ? [], [t.steps]), p = (0, r.useMemo)(() => u.filter(e => "agent-tool-result" === e.type), [u]), g = (0, n(682985).K8)(() => {
                    let e = c.current,
                        t = new Map,
                        r = !1,
                        g = new Map;
                    return (u.forEach(e => {
                        if ("agent-search-query-generation" === e.type && e.searchToolCallId) {
                            let t = g.get(e.searchToolCallId) || [];
                            t.push(e), g.set(e.searchToolCallId, t)
                        }
                    }), u.forEach(c => {
                        if ("agent-inference" === c.type) {
                            let u = p.filter(e => e.agentStepId === c.id),
                                f = (0, n(445567).xr)({
                                    environment: a,
                                    step: c,
                                    toolResultsForStep: u,
                                    spaceStore: o,
                                    threadStore: i,
                                    clientStore: s,
                                    runningInference: l,
                                    queryGenStepMapToSearchCallId: g,
                                    showDebug: d
                                }).filter(n(722371).O9),
                                m = e.get(c.id);
                            m && (0, n(381453).n4)(m, f) ? t.set(c.id, m) : (r = !0, t.set(c.id, f))
                        }
                    }), r || e.size !== t.size) ? (c.current = t, t) : e
                }, [u, a, p, o, i, s, l, d]), f = (0, r.useMemo)(() => {
                    let e = [];
                    for (let t of g.values()) e.push(...t);
                    return e
                }, [g]);
                return {
                    stepPartsByStepId: g,
                    allParts: f,
                    allToolResults: p
                }
            }
        },
        984107: (e, t, n) => {
            n.d(t, {
                dismissChatSidebar: () => r
            });

            function r() {
                "open" === n(562733).zI.state.chatPanelVisibility && n(562733).zI.update(e => ({ ...e,
                    chatPanelVisibility: "closing",
                    editorWidthUsed: 0,
                    explicitlyAddedTextSelection: void 0
                }))
            }
        }
    }
]);