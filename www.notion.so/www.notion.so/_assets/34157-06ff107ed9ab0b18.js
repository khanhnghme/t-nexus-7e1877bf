"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [34157], {
        338: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                personCircleIcon: () => a
            }), n(296540);
            var i = n(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.755 6.169C8.277 5.519 9.05 5.125 10 5.125s1.723.393 2.245 1.044c.51.635.75 1.474.75 2.346s-.24 1.71-.75 2.346c-.522.65-1.294 1.044-2.245 1.044-.95 0-1.723-.394-2.245-1.044-.51-.635-.75-1.474-.75-2.346s.24-1.711.75-2.346m.975.782c-.293.365-.475.909-.475 1.564s.182 1.198.475 1.564c.281.35.694.576 1.27.576s.989-.226 1.27-.576c.294-.366.475-.909.475-1.564s-.181-1.199-.475-1.564c-.281-.35-.693-.576-1.27-.576-.576 0-.989.225-1.27.576"
                        }), (0, i.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 0 0-4.087 11.267c.789-1.397 2.333-2.33 4.087-2.33s3.298.933 4.087 2.33A6.375 6.375 0 0 0 10 3.625M13.049 15.6c-.547-1.049-1.697-1.789-3.05-1.789-1.351 0-2.501.74-3.048 1.789a6.35 6.35 0 0 0 3.049.775 6.34 6.34 0 0 0 3.049-.775"
                        })]
                    })
                },
                a = (0, n(104509).wt)("personCircle", o, "default")
        },
        107529: (e, t, n) => {
            n.d(t, {
                g: () => i
            });

            function i() {
                let {
                    connectionStatus: e
                } = n(711421).P0.state;
                "pending_selection" === e && n(711421).P0.setState({ ...n(711421).P0.state,
                    currentScreen: "pending_selection"
                })
            }
        },
        108653: (e, t, n) => {
            n.d(t, {
                h: () => i
            });
            async function i(e) {
                let t = n(728372).AppStoreSidebarSpaceStore.state;
                if (!t) return [];
                let i = e.query.startsWith("@") ? e.query.slice(1) : e.query,
                    o = await (0, n(334682).m)(e);
                return (await (0, n(250521).x)({
                    environment: e.environment,
                    parentStore: t,
                    query: i,
                    userIds: o,
                    minFuzzyScore: e.minFuzzyScore,
                    placeSelfFirst: e.placeSelfFirst
                })).slice(0, e.limit)
            }
        },
        109266: (e, t, n) => {
            n.d(t, {
                Q: () => o
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            let i = new Set(["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com"]);

            function o({
                query: e,
                users: t,
                minFuzzyScore: a,
                currentUserValue: s,
                spaceDomains: r
            }) {
                return e ? (0, n(821048).Ay)(e, t, n(413818).T2, {
                    minScore: a,
                    getSortScore: e => {
                        let {
                            original: t,
                            score: o
                        } = e, a = t.email && (0, n(801109).zN)(t.email), l = s && (0, n(801109).zN)(s.email), c = a && r.has(a), d = l === a, u = l && i.has(l);
                        return o * (c || d && !u ? -2 : -1)
                    }
                }) : t
            }
        },
        156379: (e, t, n) => {
            n.d(t, {
                L: () => o
            }), n(296540);
            var i = n(474848);

            function o() {
                return (0, i.jsx)(n(746434).E, {
                    content: (0, i.jsx)(n(109939).sA, {
                        id: "spaceUserMembershipType.restrictedMember",
                        defaultMessage: "Restricted"
                    }),
                    color: "yellow"
                })
            }
        },
        186320: (e, t, n) => {
            n.d(t, {
                YC: () => o,
                yG: () => s
            }), n(898992), n(354520);
            var i = n(296540);
            let o = {
                    isError: !1,
                    message: ""
                },
                a = (0, n(109939).YK)({
                    chatSubmissionError: {
                        id: "chatErrorHandler.submissionError",
                        defaultMessage: "Something went wrong while processing your request. Please try again."
                    }
                });

            function s(e) {
                let t = (0, n(109939).tz)(),
                    {
                        resetState: s
                    } = e,
                    [r, l] = (0, i.useState)({
                        isError: !1,
                        message: ""
                    }),
                    c = (0, i.useCallback)(() => {
                        l(o)
                    }, []),
                    d = (0, i.useCallback)((e, i, o) => {
                        let r, c;
                        r = (0, n(161179).A)(e), c = o ? Object.fromEntries(Object.entries(o).filter(([, e]) => void 0 !== e)) : {}, n(419750).O8(r, {
                            from: i,
                            type: "error",
                            ...c
                        }), null == s || s(), l({
                            isError: !0,
                            message: t.formatMessage(a.chatSubmissionError)
                        })
                    }, [s, t]);
                return (0, i.useMemo)(() => ({
                    errorState: r,
                    handleChatSubmissionError: d,
                    clearError: c
                }), [r, d, c])
            }
        },
        210037: (e, t, n) => {
            n.d(t, {
                r: () => a
            });
            var i = () => n(546605);
            class o extends i().Store {
                getInitialState() {
                    return {
                        isOpen: !1,
                        openCount: 0,
                        from: void 0
                    }
                }
            }
            let a = new o;
            (0, n(202146).exposeDebugValue)("agentPersonalizationSettingsModalStore", a)
        },
        212509: (e, t, n) => {
            n.d(t, {
                u: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.38 2.37 15.25 15.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.893 2.875a.63.63 0 0 1 .79-.02l.091.087.127.149.016.034.072.104 11.272 13.15a.623.623 0 0 1-1.035.678l-.756-.881A7.625 7.625 0 0 1 4.58 4.638l-.755-.881-.072-.105a.626.626 0 0 1 .14-.777m4.244 7.75c.054 1.559.31 2.937.681 3.943.212.572.449.992.68 1.256.232.266.404.318.502.318s.27-.052.502-.318c.231-.264.468-.684.68-1.256.18-.488.332-1.065.448-1.707l-1.917-2.236zm-4.48 0a6.38 6.38 0 0 0 4.509 5.48 6.5 6.5 0 0 1-.52-1.104c-.431-1.167-.704-2.697-.76-4.376zm8.992 3.426q-.131.507-.294.95c-.15.405-.324.779-.522 1.104a6.4 6.4 0 0 0 1.82-.883zM5.396 5.59a6.35 6.35 0 0 0-1.74 3.785h3.23c.022-.647.075-1.272.158-1.863zm2.74 3.785h.505l-.477-.556q-.017.274-.027.556m1.863-7A7.625 7.625 0 0 1 17.625 10a7.6 7.6 0 0 1-1.407 4.407l-.844-.983c.526-.824.87-1.775.97-2.799h-3.23l-.009.152-1.245-1.453c-.058-1.538-.31-2.897-.678-3.892-.212-.572-.449-.99-.68-1.255-.232-.266-.404-.319-.502-.319-.099 0-.27.053-.502.319-.231.264-.468.683-.68 1.255q-.043.119-.084.245l-.926-1.081q.163-.38.358-.702-.375.112-.73.268l-.843-.984A7.6 7.6 0 0 1 10 2.375m1.833 1.519c.198.326.372.7.521 1.105.432 1.167.704 2.697.76 4.376h3.23a6.38 6.38 0 0 0-4.511-5.481"
                    })
                },
                o = (0, n(104509).wt)("globeSlash", i, "default")
        },
        222195: (e, t, n) => {
            n.d(t, {
                n: () => i
            });

            function i() {
                let e = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => (0, n(89408).wz)({
                    environment: e,
                    featureKey: "adoption_agent_new_user_onboarding_checklist"
                }) ? {
                    variant: n(218744).default.getEligibleGroup({
                        experimentId: "adoption_new_user_agent_onboarding_checklist",
                        disableExposureLogging: !0
                    }),
                    hasSeenNewUserOnboardingChecklistExperience: (0, n(89408).mA)({
                        environment: e
                    })
                } : {
                    variant: void 0
                }, [e])
            }
        },
        237494: (e, t, n) => {
            n.d(t, {
                W: () => i
            });

            function i() {
                return 330
            }
        },
        250521: (e, t, n) => {
            n.d(t, {
                x: () => i
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            async function i({
                environment: e,
                parentStore: t,
                query: o,
                userIds: a,
                minFuzzyScore: s,
                placeSelfFirst: r
            }) {
                var l;
                let c, d = n(680007).default.mark("user_search_latency"),
                    u = n(218744).default.checkGate({
                        gateName: "search_batch_load_users"
                    }),
                    p = n(975162).lX(a, u ? 300 : Math.max(a.length, 1), async e => {
                        let i = n(807825).L.createChildStore(t, {
                            table: n(832375).oo9,
                            id: e
                        });
                        return await i.load(), i.getValue()
                    });
                (await (0, n(975162).nQ)(1e4, [p])).timeout && (n(773352).log({
                    level: "error",
                    from: "searchActions.searchUsers",
                    type: "UserStoreLoadTimeoutV1",
                    error: {
                        message: "The UserStore.load()'s took longer than 10 seconds"
                    },
                    data: {
                        searchedUserIdCount: a.length,
                        queryLength: o.length,
                        parentStoreLoaded: t.isReady(),
                        documentVisibilityState: document.visibilityState
                    }
                }), (0, n(104310).u)({
                    event: {
                        eventName: "user_search_timeout",
                        eventProperties: {
                            searchedUserIdCount: a.length,
                            queryLength: o.length,
                            parentStoreLoaded: t.isReady(),
                            documentVisibilityState: document.visibilityState
                        }
                    }
                }));
                let g = n(381453).oE(await p),
                    h = null == (l = n(728372).AppStoreCurrentUserStore.state) ? void 0 : l.userId;
                if (r && h) {
                    let e = g.findIndex(e => h === e.id);
                    e > -1 && (c = g[e], g.splice(e, 1))
                }
                let m = n(148344).k.state ? ? {},
                    f = Math.max(...Object.values(m));

                function y(e) {
                    var t;
                    return e === (null == (t = n(728372).AppStoreCurrentUserRootStore.state) ? void 0 : t.userId) ? f + 1e-5 : m[e] ? ? 0
                }
                let b = n(381453).Im(m) ? g : g.sort((e, t) => {
                        let n = y(e.id);
                        return y(t.id) - n
                    }),
                    S = new Set(t.getEmailDomains()),
                    v = o ? (0, n(109266).Q)({
                        query: o,
                        users: b,
                        minFuzzyScore: s,
                        currentUserValue: c,
                        spaceDomains: S
                    }) : g;
                return n(680007).default.measure(d, {}), c ? [c, ...v] : v
            }
        },
        291493: (e, t, n) => {
            n.d(t, {
                H: () => o
            });
            let i = ["reply_menu_all_updates", "reply_menu_archive", "reply_menu_mentions_comments"];

            function o() {
                let e = (0, n(682985).K8)(() => n(266960).A.state.open && i.includes(n(266960).A.state.discussionLocation), []),
                    t = (0, n(682985).K8)(() => n(498368).Ay.getIsMockText(), []),
                    o = (0, n(682985).K8)(() => (0, n(933062).lU)(n(728372).AppStoreMainEditorCurrentBlockStore.state), []);
                return !t && !e && !o
            }
        },
        308211: (e, t, n) => {
            n.d(t, {
                U: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3 3 10 10",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M11.75 3h-7.5C3.56 3 3 3.56 3 4.25v7.5c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-7.5C13 3.56 12.44 3 11.75 3"
                    })
                },
                o = (0, n(104509).wt)("mediaStopFillSmall", i, "fillSmall")
        },
        323425: (e, t, n) => {
            async function i(e) {
                let {
                    environment: t,
                    spaceId: i
                } = e, o = await t.api.callApi({
                    eventName: "disconnectSlackIngestion",
                    environment: t,
                    data: {
                        spaceId: i,
                        disconnectForWorkspace: !1
                    }
                });
                if ("success" === o.type) {
                    var a;
                    n(32913).Rh.setState({ ...n(32913).Rh.state,
                        connectedApps: null == (a = n(32913).Rh.state.connectedApps) ? void 0 : a.filter(e => "slack" !== e),
                        isPrivateSync: !1
                    })
                }
                return "success" === o.type
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceId: o
                } = e;
                if ((0, n(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "revoke_private_access_start",
                                integration_type: "slack",
                                setup_session_id: n(32913).Rh.state.sessionId,
                                from: n(32913).Rh.state.analyticsFrom
                            }
                        }
                    }), !await i({
                        environment: t,
                        spaceId: o
                    })) throw Error("Failed to disconnect Slack personal authentication")
            }

            function a() {
                n(32913).Rh.setState({ ...n(32913).Rh.state,
                    currentScreen: "settings"
                })
            }
            async function s(e) {
                let t, {
                        environment: i,
                        spaceId: o,
                        withPrivateAccess: a
                    } = e,
                    s = n(886556).z.isSlackV2AiConnectorEnabled(),
                    r = (n(32913).Rh.state.privateAccessEnabled ? ? !1) && a;
                (0, n(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: a ? "private_auth_connect_start" : "public_auth_connect_start",
                            integration_type: "slack",
                            setup_session_id: n(32913).Rh.state.sessionId,
                            from: n(32913).Rh.state.analyticsFrom,
                            connection_version: 2
                        }
                    }
                });
                let l = (0, n(242302).A)();
                (0, n(104310).u)({
                    event: {
                        eventName: "slack_auth_flow_initiated",
                        eventProperties: {
                            from: a ? "ai_connector_user_private" : "ai_connector_user_public",
                            slack_auth_session_id: l
                        }
                    }
                });
                let c = await i.api.callApi({
                    eventName: "getSlackIngestionAuthorizeUrl",
                    environment: i,
                    data: {
                        spaceId: o,
                        isAdminAuth: !1,
                        isDesktopApp: i.device.isElectron,
                        isPrivateAccessEnabled: r,
                        sessionId: l
                    }
                });
                if ("success" === c.type)
                    if (i.device.isElectron) t = await (0, n(754573).P)(c.data.url);
                    else {
                        let e = (0, n(600923).K)("slack");
                        if (!e.messages.userOverwritePopupTitleMessage) throw Error("User overwrite popup title message is not defined");
                        t = await n(956935).P(i, {
                            width: 800,
                            height: 600,
                            url: c.data.url,
                            titleMessage: e.messages.userOverwritePopupTitleMessage
                        })
                    }
                s && t && (n(32913).Rh.setState({ ...n(32913).Rh.state,
                    connectedApps: [...n(32913).Rh.state.connectedApps ? ? [], "slack"],
                    isPrivateAuth: r
                }), n(436555).D6({
                    label: n(962299).A.getIntl().formatMessage(r ? {
                        defaultMessage: "You are connected to both Private and Public messages",
                        id: "slack.v2.user.auth.success"
                    } : {
                        defaultMessage: "You are connected to Public messages",
                        id: "slack.v2.user.auth.public.success"
                    }),
                    position: "bottom"
                }), (0, n(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: r ? "private_auth_connect_success" : "public_auth_connect_success",
                            integration_type: "slack",
                            setup_session_id: n(32913).Rh.state.sessionId,
                            from: n(32913).Rh.state.analyticsFrom,
                            connection_version: 2
                        }
                    }
                }))
            }
            async function r(e) {
                let t, {
                    environment: i,
                    spaceId: o,
                    isWriteAccessApproved: a,
                    isPrivateAccessEnabled: s
                } = e;
                (0, n(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: "admin_migration_start",
                            integration_type: "slack",
                            setup_session_id: n(32913).Rh.state.sessionId,
                            from: n(32913).Rh.state.analyticsFrom,
                            connection_version: 2
                        }
                    }
                });
                let r = (0, n(242302).A)();
                (0, n(104310).u)({
                    event: {
                        eventName: "slack_auth_flow_initiated",
                        eventProperties: {
                            from: "ai_connector_admin_settings",
                            slack_auth_session_id: r
                        }
                    }
                });
                let l = await i.api.callApi({
                    eventName: "getSlackIngestionAuthorizeUrl",
                    environment: i,
                    data: {
                        spaceId: o,
                        isAdminAuth: !0,
                        isDesktopApp: i.device.isElectron,
                        isWriteAccessApproved: a,
                        isPrivateAccessEnabled: s,
                        sessionId: r
                    }
                });
                if ("success" === l.type)
                    if (i.device.isElectron) t = await (0, n(754573).P)(l.data.url);
                    else {
                        let e = (0, n(600923).K)("slack");
                        if (!e.messages.userOverwritePopupTitleMessage) throw Error("User overwrite popup title message is not defined");
                        t = await n(956935).P(i, {
                            width: 800,
                            height: 600,
                            url: l.data.url,
                            titleMessage: e.messages.userOverwritePopupTitleMessage
                        })
                    }
                if (t) {
                    if (n(32913).Rh.setState({ ...n(32913).Rh.state,
                            connectionVersion: 2,
                            connectedApps: [...n(32913).Rh.state.connectedApps ? ? [], "slack"],
                            writeAccessApproved: a
                        }), a) return;
                    n(436555).D6({
                        label: n(962299).A.getIntl().formatMessage(s ? {
                            defaultMessage: "Slack AI updated, You now have access to Private conversations",
                            id: "slack.v2.admin.auth.success"
                        } : {
                            defaultMessage: "Slack AI connector connected successfully",
                            id: "slack.v2.admin.auth.public.success"
                        }),
                        position: "bottom"
                    }), (0, n(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "admin_migration_success",
                                integration_type: "slack",
                                setup_session_id: n(32913).Rh.state.sessionId,
                                from: n(32913).Rh.state.analyticsFrom,
                                connection_version: 2
                            }
                        }
                    })
                }
            }
            n.d(t, {
                FM: () => r,
                JR: () => s,
                lx: () => i,
                mI: () => o,
                nh: () => a
            }), n(16280), n(898992), n(354520)
        },
        334682: (e, t, n) => {
            n.d(t, {
                m: () => i
            }), n(898992), n(354520), n(430670), n(581454);
            async function i(e) {
                let {
                    environment: t,
                    membersOnly: i
                } = e, o = n(728372).AppStoreSidebarSpaceStore.state;
                if (!o) return [];
                await n(371151).iV({
                    environment: t,
                    spaceId: o.id
                });
                let a = n(105692).subscriptionDataStoreInstance.state;
                if (!a) return [];
                let s = (0, n(576968).B)(a).filter(e => !i || !!(0, n(729052).MN)(e.membershipType)),
                    r = n(728372).AppStoreMainEditorCurrentBlockStore.state,
                    l = n(728372).AppStoreCurrentUserStore.state,
                    c = r && !i ? (0, n(862085).i0)(r).flatMap(({
                        permissionItem: e
                    }) => (0, n(642157).B2)(e) ? [e.user_id] : []) : [],
                    d = s.map(e => e.userId);
                return n(381453).sb([...n(381453).oE([null == l ? void 0 : l.userId]), ...c, ...d])
            }
        },
        407898: (e, t, n) => {
            n.d(t, {
                O: () => i
            });

            function i({
                isPhone: e,
                themeMode: t
            }) {
                if ("dark" === t) return "unset";
                let o = (0, n(681693).O0)({
                    mode: t
                });
                return (0, n(381453).oE)(["light" === t ? "0 12px 32px rgba(0, 0, 0, 0.03)" : n(632079).Tj.homeShadow.card.hovered, `0 0 0 ${o}px rgba(0, 0, 0, 0.05)`]).join(", ")
            }
        },
        420515: (e, t, n) => {
            async function i(e) {
                let {
                    environment: t,
                    spaceId: n,
                    jiraApiToken: i,
                    jiraSiteUrl: o,
                    developerSpaceId: a
                } = e, s = await t.api.callApi({
                    eventName: "authenticateJiraAiConnector",
                    environment: t,
                    data: {
                        spaceId: n,
                        jiraApiToken: i,
                        jiraSiteUrl: o,
                        developerSpaceId: a
                    }
                });
                return "success" !== s.type ? {
                    status: "failed"
                } : "success" === s.type && "failed" === s.data.connectionStatus ? {
                    status: "failed",
                    errorCode: s.data.errorCode
                } : {
                    status: "success"
                }
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceId: i,
                    analyticsProperties: o
                } = e, {
                    analyticsFrom: a,
                    buttonName: s,
                    sessionId: r
                } = o;
                (0, n(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: s,
                            integration_type: "jira",
                            setup_session_id: r,
                            from: a
                        }
                    }
                });
                let l = await t.api.callApi({
                    eventName: "getJiraUserAuthUrl",
                    environment: t,
                    data: {
                        spaceId: i,
                        isDesktop: t.device.isElectron,
                        sessionId: r
                    }
                });
                if ("success" === l.type)
                    if (t.device.isElectron)(0, n(754573).P)(l.data.url);
                    else {
                        let e = (0, n(600923).K)("jira");
                        n(956935).P(t, {
                            width: 800,
                            height: 600,
                            url: l.data.url,
                            titleMessage: e.messages.oauthPopupTitleMessage
                        })
                    }
            }
            async function a(e) {
                let {
                    environment: t,
                    spaceId: i
                } = e;
                "failed" === (await t.api.callApi({
                    eventName: "disconnectAiConnector",
                    environment: t,
                    data: {
                        spaceId: i,
                        connector: "jira"
                    }
                })).type ? n(436555).D6({
                    label: n(962299).A.getIntl().formatMessage({
                        defaultMessage: "Something went wrong. Please try again.",
                        id: "jira.v2.disconnect.failed"
                    })
                }) : (n(436555).D6({
                    label: n(962299).A.getIntl().formatMessage({
                        defaultMessage: "Started disconnecting Jira. This can take up to 3 hours.",
                        id: "jira.v2.disconnect.started"
                    }),
                    position: "bottom"
                }), n(213056).EF.setState({ ...n(213056).EF.state,
                    jiraSyncState: "disconnecting",
                    isDisconnecting: !0
                }))
            }

            function s(e) {
                let {
                    spaceId: t,
                    analyticsProperties: i
                } = e;
                t && ((0, n(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: "user_jira_resume_pending_connection",
                            integration_type: "jira",
                            setup_session_id: i.sessionId,
                            from: i.analyticsFrom
                        }
                    }
                }), (0, n(166672).navigateToAIConnectorOnboarding)({
                    connector: "jira",
                    analyticsFrom: i.analyticsFrom,
                    sessionId: i.sessionId
                }))
            }
            async function r(e) {
                let {
                    environment: t,
                    spaceId: i
                } = e, o = await t.api.callApi({
                    eventName: "getJiraSelection",
                    environment: t,
                    data: {
                        spaceId: i
                    }
                });
                if ("success" === o.type) return n(213056).EF.setState({ ...n(213056).EF.state,
                    syncControl: o.data
                }), o.data
            }

            function l() {
                n(213056).EF.setState({ ...n(213056).EF.state,
                    currentScreen: "connection_complete_screen"
                })
            }

            function c(e) {
                let {
                    analyticsFrom: t,
                    screenToShow: i
                } = e, o = e.sessionId ? ? n(92513).JW();
                n(213056).EF.setState({ ...n(213056).EF.state,
                    analyticsFrom: t,
                    currentScreen: i,
                    sessionId: o
                })
            }
            async function d(e) {
                let {
                    environment: t,
                    spaceId: i,
                    projectSelection: o
                } = e, a = await t.api.callApi({
                    eventName: "setJiraSelection",
                    environment: t,
                    data: {
                        spaceId: i,
                        ...o
                    }
                });
                if ("failed" === a.type) {
                    var s;
                    return (null == (s = a.error) || null == (s = s.data) || null == (s = s.responseBody) ? void 0 : s.debugMessage) === "NO_CHANGES" ? n(436555).D6({
                        label: n(962299).A.getIntl().formatMessage({
                            defaultMessage: "No changes to the selection",
                            id: "jira.v2.project.selection.no_changes"
                        }),
                        position: "bottom"
                    }) : n(436555).D6({
                        label: n(962299).A.getIntl().formatMessage({
                            defaultMessage: "Something went wrong. Please try again.",
                            id: "jira.v2.project.selection.failed"
                        }),
                        position: "bottom"
                    }), !1
                }
                return !0
            }
            async function u(e) {
                let {
                    environment: t,
                    spaceId: i
                } = e;
                "failed" === (await t.api.callApi({
                    eventName: "startJiraAIV2Editflow",
                    environment: t,
                    data: {
                        spaceId: i
                    }
                })).type ? n(436555).D6({
                    label: n(962299).A.getIntl().formatMessage({
                        defaultMessage: "Something went wrong. Please try again.",
                        id: "jira.v2.editflow.failed"
                    }),
                    position: "bottom"
                }) : (n(436555).D6({
                    label: n(962299).A.getIntl().formatMessage({
                        defaultMessage: "Editing Jira connection. This can take up to 36 hours.",
                        id: "jira.v2.editflow.started"
                    }),
                    position: "bottom"
                }), n(213056).EF.setState({ ...n(213056).EF.state,
                    jiraSyncState: "editing",
                    jiraSyncProgress: 0
                }))
            }
            async function p(e) {
                let {
                    environment: t,
                    spaceId: i,
                    analyticsProperties: o
                } = e, a = await t.api.callApi({
                    eventName: "startIngestion",
                    environment: t,
                    data: {
                        connector: "jira",
                        spaceId: i,
                        setupSessionId: o.sessionId
                    }
                });
                "failed" !== a.type && ("success" !== a.type || a.data.success) ? (n(436555).D6({
                    label: n(962299).A.getIntl().formatMessage({
                        defaultMessage: "Jira sync started. This can take up to 36 hours.",
                        id: "jira.v2.sync.started"
                    }),
                    position: "bottom"
                }), n(213056).EF.setState({ ...n(213056).EF.state,
                    jiraSyncState: "in_progress"
                })) : n(436555).D6({
                    label: n(962299).A.getIntl().formatMessage({
                        defaultMessage: "Something went wrong. Please try again.",
                        id: "jira.v2.sync.failed"
                    }),
                    position: "bottom"
                })
            }
            n.d(t, {
                Df: () => r,
                G: () => c,
                R: () => i,
                Rr: () => a,
                Zh: () => p,
                bS: () => s,
                ol: () => o,
                vq: () => d,
                zn: () => u,
                zr: () => l
            })
        },
        447364: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                inviteMemberIcon: () => a
            }), n(296540);
            var i = n(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.68 2.37 15.82 17.13",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10 2.375c-1.137 0-2.054.47-2.674 1.242-.608.757-.9 1.765-.9 2.824s.292 2.066.9 2.824c.62.772 1.537 1.241 2.674 1.241s2.055-.469 2.675-1.241c.608-.758.9-1.766.9-2.824 0-1.059-.292-2.067-.9-2.824-.62-.773-1.538-1.242-2.675-1.242M7.676 6.441c0-.842.233-1.554.624-2.042.38-.473.937-.774 1.7-.774s1.32.301 1.7.774c.391.488.624 1.2.624 2.042s-.233 1.554-.624 2.041c-.38.473-.937.774-1.7.774s-1.32-.3-1.7-.774c-.391-.487-.624-1.2-.624-2.041M10 11.63c-2.7 0-5.101 1.315-6.12 3.305-.361.706-.199 1.421.23 1.923.412.48 1.06.767 1.74.767h5.845a4.6 4.6 0 0 1-.28-1.25H5.85c-.342 0-.634-.148-.79-.33-.138-.162-.172-.336-.067-.54.761-1.488 2.672-2.626 5.007-2.626.83 0 1.605.144 2.294.395.269-.364.59-.688.952-.96A7.9 7.9 0 0 0 10 11.63"
                        }), (0, i.jsx)("path", {
                            d: "M16 19.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m2.594-3.469a.625.625 0 0 0-.625-.625h-1.375v-1.375a.625.625 0 0 0-1.25 0v1.375h-1.375a.625.625 0 0 0 0 1.25h1.375v1.375a.625.625 0 1 0 1.25 0v-1.375h1.375c.345 0 .625-.28.625-.625"
                        })]
                    })
                },
                a = (0, n(104509).wt)("inviteMember", o, "default")
        },
        447483: (e, t, n) => {
            n.d(t, {
                R: () => a
            }), n(296540);
            var i = n(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.37 11.75 9.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M6.75 5.073a1.275 1.275 0 1 0 0 2.55 1.275 1.275 0 0 0 0-2.55"
                        }), (0, i.jsx)("path", {
                            d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h8c1.036 0 1.875-.84 1.875-1.875v-5.5c0-1.036-.84-1.875-1.875-1.875zM3.375 5.25c0-.345.28-.625.625-.625h8c.345 0 .625.28.625.625v2.537l-1.768-1.769a.575.575 0 0 0-.813 0L6.788 9.274l-1.531-1.53a.575.575 0 0 0-.814 0L3.375 8.811zm3.82 5.244 3.255-3.256 2.175 2.175v1.337c0 .345-.28.625-.625.625H4a.625.625 0 0 1-.625-.625v-.312L4.85 8.963l1.531 1.531a.575.575 0 0 0 .813 0"
                        })]
                    })
                },
                a = (0, n(104509).wt)("photoSmall", o, "small")
        },
        533677: (e, t, n) => {
            n.d(t, {
                b: () => o,
                t: () => a
            }), n(18107), n(967357);
            var i = n(296540);

            function o() {
                let e = (0, n(682985).O$)(n(728372).AppStoreMainEditorCurrentBlockStore);
                return (0, i.useCallback)(t => {
                    let i = t.getRecordStoreUIRoot() === e,
                        o = (0, n(447036).cq)(t) && n(475097).default.isSidePeekOpen();
                    return i || o
                }, [e])
            }

            function a() {
                let e = o();
                return (0, i.useCallback)(t => {
                    if (!t) return !1;
                    if ("textSelection" === t.type) return e(t.textSelection.start.store);
                    if ("blockSelection" === t.type) {
                        let n = t.stores.at(0);
                        if (n) return e(n)
                    } else {
                        if ("cursor" === t.type) return !1;
                        (0, n(722371).HB)(t)
                    }
                    return !1
                }, [e])
            }
        },
        534268: (e, t, n) => {
            n.d(t, {
                q: () => o
            }), n(944114);
            var i = n(296540);

            function o(e) {
                let t = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore),
                    o = (0, n(876252).$)(),
                    a = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore),
                    s = (0, n(533992).v3)(),
                    {
                        threadStore: r,
                        clientAiChatStore: l,
                        aiChatFeatureController: c,
                        config: d
                    } = e,
                    u = (0, n(558208).AD)(),
                    p = (0, n(682985).K8)(() => {
                        let e = d ? ? l.state.configForNewTranscripts;
                        return c.shouldSupportAttachments(e.type)
                    }, [c, l, d]),
                    g = (0, n(682985).K8)(() => {
                        if (t) return u.getOrCreateThreadId({
                            environment: s,
                            maybeThreadStore: r,
                            spaceId: t.id
                        })
                    }, [t, s, r, u]),
                    h = (0, n(682985).K8)(() => {
                        if (g) return l.getOrCreateClientAIChatThreadStore(g)
                    }, [l, g]),
                    m = (0, n(425797).z)({
                        threadClientStore: h,
                        aiChatFeatureController: c,
                        config: d,
                        clientChatStore: l
                    }),
                    {
                        onPasteFiles: f,
                        uploadAttachments: y,
                        onDropFiles: b
                    } = function(e) {
                        let {
                            clientAiChatStore: t,
                            threadStore: o,
                            threadId: a,
                            spaceStore: s,
                            config: r,
                            aiChatFeatureController: l
                        } = e, c = (0, n(533992).v3)(), d = (0, n(729849).yB)(), u = (0, n(682985).K8)(() => {
                            if (a && t) return t.getOrCreateClientAIChatThreadStore(a)
                        }, [t, a]), p = (0, n(682985).K8)(() => null == u ? void 0 : u.getTemporaryAttachmentStagedDataOrInstantiate().stagedAttachmentUploadStore, [u]), g = (0, n(682985).K8)(() => (null == p ? void 0 : p.state.originalFileUrlToSuccessfullyUploadedFiles.size) ? ? 0, [p]), h = (0, n(682985).K8)(() => void 0 !== r ? r : (0, n(187353).zj)({
                            threadStore: o,
                            clientStore: t
                        }), [t, o, r]), m = h.type, f = (0, n(16712).BI)(h), y = (0, i.useCallback)(e => {
                            let t;
                            if (!u || !s) return;
                            let i = (0, n(295447).Z1)({
                                environment: c,
                                table: n(832375).mSw,
                                spaceId: s.id
                            });
                            if (e.isUnsupportedType) {
                                let o = (0, n(180139).sx)({
                                    id: i,
                                    fileUrl: e.fileUrl,
                                    fileName: e.fileName,
                                    fileSize: e.fileSize,
                                    contentType: e.contentType
                                });
                                u.stageAttachmentInferenceTranscriptStep({
                                    step: o
                                }), null == p || p.onComputerFileUploadCompleted(e.uploadIdentifier, {
                                    originalFileUrl: e.fileUrl,
                                    fileName: e.fileName,
                                    contentType: e.contentType,
                                    assistantSessionId: a ? ? ""
                                }), t = e.contentType
                            } else {
                                let o = u.getTemporaryAttachmentStagedDataOrInstantiate(),
                                    a = (0, n(180139).jx)({
                                        uploadedFileData: e,
                                        id: i
                                    });
                                u.stageAttachmentInferenceTranscriptStep({
                                    step: a
                                }), o.stagedAttachmentUploadStore.onFileUploadCompleted(e.uploadIdentifier, e), t = a.contentType
                            }(0, n(104310).u)({
                                event: {
                                    eventName: "assistant_attachment_upload_successful",
                                    eventProperties: {
                                        content_type: t,
                                        source: "custom_upload",
                                        framework: "inference_transcript",
                                        config_type: m
                                    }
                                }
                            })
                        }, [u, c, s, a, m, p]), b = (0, n(682985).K8)(() => l.analyticsSource(o), [l, o]), S = (0, n(83208).X)("filesystem_sandbox") && ("workflow" !== h.type || h.isCustomAgent || !0 === h.enableScriptAgent && (0, n(548161).Qw)({
                            config: h,
                            modules: []
                        })), v = (0, n(472643).U)({
                            currentSpaceId: null == s ? void 0 : s.id,
                            progressOverrides: {
                                threadPointer: a && s ? {
                                    spaceId: s.id,
                                    table: n(832375).Toz,
                                    id: a
                                } : void 0,
                                onSuccess: y,
                                progressStore: p
                            },
                            workflowId: f,
                            analyticsArgs: {
                                configType: m,
                                source: b
                            },
                            threadStore: o,
                            allowUnsupportedTypes: S
                        }), x = (0, n(425797).z)({
                            threadClientStore: u,
                            config: r,
                            clientChatStore: t,
                            aiChatFeatureController: l
                        }), k = (0, n(109939).tz)(), C = (0, i.useCallback)(e => {
                            if (0 !== e.files.length) {
                                if (!x.canUpload) return void n(436555).D6({
                                    label: k.formatMessage(n(65476).E[x.reason], {
                                        maxAttachments: d
                                    })
                                });
                                if (e.files.length + g > d) return void n(436555).D6({
                                    label: k.formatMessage(n(65476).E.multiple_uploads, {
                                        maxAttachments: d
                                    })
                                });
                                v({
                                    files: e.files,
                                    method: "paste"
                                })
                            }
                        }, [x, k, v, d, g]), M = (0, i.useCallback)(async e => {
                            if (0 !== e.length) {
                                if (!x.canUpload) return void n(436555).D6({
                                    label: k.formatMessage(n(65476).E[x.reason], {
                                        maxAttachments: d
                                    })
                                });
                                if (e.length + g > d) return void n(436555).D6({
                                    label: k.formatMessage(n(65476).E.multiple_uploads, {
                                        maxAttachments: d
                                    })
                                });
                                await v({
                                    files: e,
                                    method: "paste"
                                })
                            }
                        }, [x, k, v, d, g]);
                        return {
                            uploadAttachments: v,
                            onPasteFiles: C,
                            onDropFiles: M
                        }
                    }({
                        threadStore: r,
                        threadId: g,
                        spaceStore: t,
                        config: d,
                        clientAiChatStore: l,
                        aiChatFeatureController: c
                    }),
                    S = (0, i.useCallback)(async () => {
                        await y({
                            files: void 0,
                            method: "clicked_attachment_button"
                        })
                    }, [y]),
                    v = (0, i.useCallback)(e => {
                        e.transaction.postSubmitCallbacks.push(() => {
                            f(e)
                        })
                    }, [f]),
                    x = (0, i.useCallback)(async e => {
                        await b(e)
                    }, [b]);
                if (t && o && a && p && m && g) return {
                    onPasteFiles: v,
                    uploadFiles: S,
                    onDropFiles: x,
                    threadStore: r,
                    threadId: g,
                    spaceStore: t,
                    userStore: o,
                    spaceViewStore: a
                }
            }
            n(581454), n(474848), n(632079).Tj.text.inverseSecondary, n(986939).A.isMobile, n(986939).A.isMobile, (0, n(268661).h6)(n(986939).A.isMobile), (0, n(268661).h6)(n(986939).A.isMobile)
        },
        555972: (e, t, n) => {
            n.r(t), n.d(t, {
                checkmarkShieldFillSmallIcon: () => o,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.85 2.2 10.29 11.6",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.755 2.26a.55.55 0 0 1 .49 0l.962.482a7.3 7.3 0 0 0 3.277.774h.11c.302 0 .547.244.547.547v4.333a4.92 4.92 0 0 1-2.983 4.524l-1.943.833a.55.55 0 0 1-.43 0l-1.943-.833A4.92 4.92 0 0 1 2.86 8.396V4.062c0-.302.245-.546.547-.546h.11c1.138 0 2.26-.265 3.277-.774zm2.567 4.123a.55.55 0 0 0-.944-.566L7.371 9.163 6.268 7.875a.55.55 0 1 0-.836.716l1.6 1.867a.55.55 0 0 0 .89-.075z"
                    })
                },
                o = (0, n(104509).wt)("checkmarkShieldFillSmall", i, "fillSmall")
        },
        593830: (e, t, n) => {
            n.r(t), n.d(t, {
                PulsingWrapper: () => s
            });
            var i = n(296540),
                o = n(474848);

            function a(e) {
                let {
                    children: t,
                    withBackground: a,
                    onReturnPressed: s,
                    shape: r,
                    framerMotion: l,
                    forwardedRef: c
                } = e, d = "square" !== r && void 0 !== e.size ? e.size : 22, u = "square" === r ? e.width || "auto" : d, p = "square" === r ? e.height || "auto" : d, g = "pill" === r, h = (0, i.useRef)(null), m = "square" === r ? e.borderRadius : d + 2;
                (0, i.useEffect)(() => {
                    s && h.current && h.current.focus()
                }, [s]);
                let [f, y] = (0, i.useState)(!0), b = (0, n(960253).e)(), S = (0, n(632079).O4)({
                    theme: b
                }), v = S.palette.uiBlue[400], x = S.palette.uiBlue[200], k = "rgba(35, 131, 226, 0)", C = {
                    animate: {
                        boxShadow: f ? [`0 0 0 0px ${v}, 0 0 0 0px ${x}`, `0 0 0 2px ${v}, 0 0 4px 4px ${x}`, `0 0 0 5px ${k}, 0 0 4px 8px ${k}`] : void 0,
                        transition: {
                            duration: 1.8,
                            repeatDelay: .4,
                            repeat: 1 / 0,
                            ease: "easeInOut"
                        }
                    }
                }, M = (0, i.useCallback)(e => {
                    "Enter" === e.key && s && s()
                }, [s]), j = (0, n(960253).I)(() => ({
                    pulseStyle: {
                        borderRadius: m,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: g ? "auto" : u,
                        height: g ? d + 4 : p,
                        padding: "square" === r ? void 0 : 2,
                        backgroundColor: a ? n(632079).Tj.palette.uiBlue[300] : void 0
                    }
                }), [m, g, u, d, p, r, a]);
                if (!l) return (0, o.jsx)(i.Fragment, {
                    children: t
                });
                let {
                    motion: I
                } = l;
                return (0, o.jsx)(I.div, {
                    variants: C,
                    animate: f ? "animate" : void 0,
                    style: j.pulseStyle,
                    ref: (0, n(411048).Px)(h, c),
                    onBlur: () => {
                        y(!1)
                    },
                    tabIndex: s ? 0 : void 0,
                    onKeyDown: s ? M : void 0,
                    children: t
                })
            }
            let s = i.forwardRef(function(e, t) {
                let {
                    onDependencyLoaded: s,
                    ...r
                } = e, {
                    value: l,
                    status: c
                } = (0, n(815048).fJ)(n(448988).fM);
                return (i.useEffect(() => {
                    "resolved" === c && (null == s || s())
                }, [c, s]), l) ? (0, o.jsx)(a, { ...r,
                    framerMotion: l,
                    forwardedRef: t
                }) : (0, o.jsx)(i.Fragment, {
                    children: e.children
                })
            });
            s.displayName = "PulsingWrapper"
        },
        596104: (e, t, n) => {
            n.d(t, {
                J: () => a,
                L: () => s
            }), n(898992), n(430670), n(581454);
            let i = {
                    type: "helpdocs",
                    displayName: "Help Center",
                    icon: n(668068).s,
                    isEligible: e => n(886556).z.canShowHelpdocsScope(),
                    isLoading: () => !1,
                    isAvailable(e) {
                        return this.isEligible(e)
                    },
                    needsAuth: () => !1,
                    isInProgress: () => !1,
                    isDisconnecting: () => !1,
                    isConnected: e => !0,
                    createSearchScope: () => ({
                        type: "helpdocs"
                    }),
                    isEnabled: e => (0, n(226088).H5)(e, "helpdocs"),
                    setEnabled(e, t, i) {
                        return (0, n(226088).dV)({
                            value: e,
                            scopeType: "helpdocs",
                            enabled: t,
                            createScope: () => this.createSearchScope()
                        })
                    },
                    connect() {}
                },
                o = {
                    notion: {
                        type: "notion",
                        displayName: "Notion",
                        icon: n(539694)._,
                        isEligible: e => !0,
                        isLoading: () => !1,
                        isAvailable: e => !0,
                        needsAuth: () => !1,
                        isInProgress: () => !1,
                        isDisconnecting: () => !1,
                        isConnected: e => !0,
                        createSearchScope: () => ({
                            type: "notion"
                        }),
                        isEnabled(e) {
                            return (0, n(226088).H5)(e, this.type)
                        },
                        setEnabled(e, t) {
                            return (0, n(226088).dV)({
                                value: e,
                                scopeType: this.type,
                                enabled: t,
                                createScope: () => this.createSearchScope()
                            })
                        },
                        connect() {}
                    },
                    web: {
                        type: "web",
                        displayName: "Web access",
                        icon: n(579022).u,
                        isEligible: e => e.originSurface ? n(886556).z.isWebSearchEnabledForSource(e.originSurface) : n(886556).z.isResearchModeWebSearchEnabled(),
                        isLoading: () => !1,
                        isAvailable(e) {
                            return this.isEligible(e)
                        },
                        needsAuth: () => !1,
                        isInProgress: () => !1,
                        isDisconnecting: () => !1,
                        isConnected(e) {
                            return this.isAvailable(e)
                        },
                        createSearchScope: () => ({
                            type: "web"
                        }),
                        isEnabled: e => "workflow" === e.type ? (0, n(548161).H0)({
                            config: e,
                            modules: []
                        }) : e.useWebSearch ? ? !1,
                        setEnabled(e, t, n) {
                            return this.isAvailable(n ? ? {}) ? { ...e,
                                useWebSearch: t
                            } : e
                        },
                        connect() {}
                    },
                    ...{
                        github: (0, n(600923).K)("github").toSearchScopeModule(),
                        slack: (0, n(600923).K)("slack").toSearchScopeModule(),
                        "google-drive": (0, n(600923).K)("google-drive").toSearchScopeModule(),
                        outlook: (0, n(600923).K)("outlook").toSearchScopeModule(),
                        "microsoft-teams": (0, n(600923).K)("microsoft-teams").toSearchScopeModule(),
                        "notion-mail": (0, n(600923).K)("notion-mail").toSearchScopeModule(),
                        sharepoint: (0, n(600923).K)("sharepoint").toSearchScopeModule(),
                        "google-calendar": (0, n(600923).K)("google-calendar").toSearchScopeModule(),
                        "notion-calendar": (0, n(600923).K)("notion-calendar").toSearchScopeModule(),
                        salesforce: (0, n(600923).K)("salesforce").toSearchScopeModule(),
                        box: (0, n(600923).K)("box").toSearchScopeModule(),
                        jira: (0, n(600923).K)("jira").toSearchScopeModule(),
                        gmail: (0, n(600923).K)("gmail").toSearchScopeModule(),
                        linear: (0, n(600923).K)("linear").toSearchScopeModule(),
                        discord: (0, n(600923).K)("discord").toSearchScopeModule(),
                        asana: (0, n(600923).K)("asana").toSearchScopeModule(),
                        confluence: (0, n(600923).K)("confluence").toSearchScopeModule(),
                        custom: (0, n(600923).K)("custom").toSearchScopeModule()
                    },
                    helpdocs: i
                };

            function a(e) {
                let t = Object.values(o).flatMap(t => {
                        if (!(0, n(281708).SC)(t.type)) return t.isEligible(e) ? [t] : []; {
                            let i = (0, n(600923).K)(t.type);
                            return i.isEligible(e) ? i.getSearchScopeModules() : []
                        }
                    }),
                    i = new Map(n(876688).yc.map((e, t) => [e, t]));
                return t.sort((e, t) => (i.get(e.type) ? ? Number.MAX_SAFE_INTEGER) - (i.get(t.type) ? ? Number.MAX_SAFE_INTEGER))
            }

            function s(e) {
                return o[e]
            }
        },
        632342: (e, t, n) => {
            n.d(t, {
                g: () => u,
                i: () => d
            });
            let i = (0, n(109939).YK)({
                    placeholder: {
                        id: "aiInferenceTranscript.placeholder",
                        defaultMessage: "Ask AI anything…"
                    }
                }),
                o = (0, n(109939).YK)({
                    customAgentPlaceholder: {
                        id: "agentPage.chatInput.placeholder",
                        defaultMessage: "Ask {agentName, select, undefined {this agent} other {{agentName}}}…"
                    }
                }),
                a = (0, n(109939).YK)({
                    simplified: {
                        id: "aiInferenceTranscript.placeholder.slipperySlopeSimplified",
                        defaultMessage: "Do anything with AI…"
                    }
                }),
                s = (0, n(109939).YK)({
                    describeYourOwn: {
                        id: "aiInferenceTranscript.placeholder.postOnboardingDescribeYourOwn",
                        defaultMessage: "Describe your own"
                    }
                }),
                r = (0, n(109939).YK)({
                    new_agent_modal: {
                        id: "AIChatInput.placeholder.newAgentModal",
                        defaultMessage: "Answers questions and files tasks in Notion…"
                    },
                    custom_agent_activity: {
                        id: "AIChatInput.placeholder.customAgentActivity",
                        defaultMessage: "Ask followup questions…"
                    }
                }),
                l = (0, n(109939).YK)({
                    researcher: {
                        id: "aiInferenceTranscript.research_mode_placeholder",
                        defaultMessage: "Ask a follow up question…"
                    },
                    workflow: {
                        id: "AIChatInput.placeholder.workflow",
                        defaultMessage: "Ask, search, or make anything…"
                    }
                }),
                c = (0, n(109939).YK)({
                    search: {
                        id: "AIChatInput.placeholder.search",
                        defaultMessage: "Ask or find anything from your workspace…"
                    },
                    researcher: {
                        id: "AIChatInput.placeholder.researcher",
                        defaultMessage: "Research any topic and get a thorough report…"
                    },
                    workflow: {
                        id: "AIChatInput.placeholder.workflow",
                        defaultMessage: "Ask, search, or make anything…"
                    },
                    "setup-generator": {
                        id: "AIChatInput.placeholder.setupGenerator",
                        defaultMessage: "Build a custom database…"
                    }
                });

            function d(e) {
                let {
                    config: t,
                    threadStore: o,
                    intl: d,
                    aiChatFeatureController: u,
                    isSimplifiedInputEnabled: p,
                    environment: g,
                    spaceId: h
                } = e;
                if (o && (0, n(446062).F)(o.id)) return d.formatMessage(s.describeYourOwn);
                if (p ? ? u.supportsSimplifiedLayout) return "workflow" === t.type && t.useReadOnlyMode ? d.formatMessage(i.placeholder) : d.formatMessage(a.simplified);
                let m = r[u.aiChatType];
                if (m) return d.formatMessage(m);
                if (o && !(0, n(187353).av)(o)) {
                    let e = l[t.type];
                    return e ? d.formatMessage(e) : d.formatMessage(i.placeholder)
                }
                if ("markdown-chat" === t.type) {
                    let e = t.model,
                        i = e && g && h ? n(295206).P.getModelMessage(g, h, e) : void 0;
                    if (i) return d.formatMessage(n(516795).B.defaultAskMessage, {
                        modelName: i
                    })
                }
                let f = c[t.type];
                return f ? d.formatMessage(f) : d.formatMessage(i.placeholder)
            }

            function u(e) {
                let {
                    workflowStore: t,
                    intl: i
                } = e, a = t.getName(), s = n(218744).default.checkGate({
                    gateName: "handle_invalid_workflow_name"
                }) ? (0, n(166788).O)(a) : a, r = "string" == typeof s ? s.trim() : "";
                return i.formatMessage(o.customAgentPlaceholder, {
                    agentName: r ? s : void 0
                })
            }
        },
        634740: (e, t, n) => {
            n.d(t, {
                i: () => l
            });
            var i = n(296540),
                o = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.49 2.19 11.01 11.97",
                    svg: (0, o.jsx)("path", {
                        d: "m4.145 2.922-.227-.265a.55.55 0 1 0-.836.716l1.491 1.739a3.9 3.9 0 0 0-.46 1.836v.895a2.78 2.78 0 0 1-.687 1.83l-.616.703c-.709.81-.134 2.078.942 2.078h2.2a2.081 2.081 0 0 0 4.095 0h.819l1.216 1.419a.55.55 0 0 0 .843-.707L4.153 2.931zm1.068 4.026c0-.32.054-.626.152-.912l4.558 5.318h-6.17a.153.153 0 0 1-.116-.253l.617-.705a3.88 3.88 0 0 0 .959-2.553zm1.773 5.506h2.028a1.081 1.081 0 0 1-2.028 0m6.302-.554a1.244 1.244 0 0 0-.098-1.524l-.616-.704a2.78 2.78 0 0 1-.687-1.829v-.895a3.89 3.89 0 0 0-2.124-3.465 1.85 1.85 0 0 0-3.526 0l-.112.06.738.86.062-.027.29-.121.042-.312A.75.75 0 0 1 8 3.29c.378 0 .692.281.743.653l.043.312.29.121a2.79 2.79 0 0 1 1.711 2.572v.895c0 .513.102 1.016.294 1.482z"
                    })
                },
                s = (0, n(104509).wt)("bellSlashSmall", a, "small"),
                r = {
                    tooltip: {
                        color: n(632079).Tj.text.inverseSecondary,
                        fontWeight: n(699422).Wy.regular,
                        maxWidth: 240
                    },
                    tooltipHeader: {
                        color: n(632079).Tj.text.inversePrimary,
                        fontWeight: n(699422).Wy.medium
                    }
                },
                l = i.forwardRef(function(e, t) {
                    let {
                        user: a,
                        focused: l
                    } = e, u = (0, n(533992).v3)(), p = (0, n(109939).tz)(), g = (0, n(197018).A7)(a), h = (0, n(197018).lR)(p, g), m = (0, n(682985).K8)(() => {
                        let e = (0, n(330870).a)();
                        return !(e && (0, n(865768).Aj)({
                            store: e
                        })) || "none" !== (0, n(862085).om)(a.id)
                    }, [a.id]), f = (0, n(682985).K8)(() => {
                        var e;
                        return a.id === (null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id)
                    }, [a.id]), y = (0, n(291493).H)(), b = (0, n(682985).O$)(n(330870).S), S = (0, n(682985).K8)(() => null == b ? void 0 : b.canAdmin(), [b]), v = (0, i.useMemo)(() => {
                        if (y && l && !m) return !(b && n(255482).K.get({
                            userId: u.currentUser.id,
                            key: (0, n(650251).T)(b.id)
                        })) && S ? (0, o.jsx)(n(16275).I, {
                            icon: n(447364).inviteMemberIcon,
                            size: 17,
                            colorVariant: "secondary"
                        }) : (0, o.jsx)(n(16275).I, {
                            icon: s,
                            size: 17,
                            colorVariant: "secondary"
                        })
                    }, [y, u.currentUser.id, m, l, b, S]), x = (0, n(682985).K8)(() => a.email, [a]), k = (0, i.useMemo)(() => y ? (0, o.jsxs)("div", {
                        style: r.tooltip,
                        children: [(0, o.jsx)("header", {
                            style: r.tooltipHeader,
                            children: (0, o.jsx)(d, {
                                userName: h,
                                userHasAccessToPage: m,
                                userIsSelf: f
                            })
                        }), x]
                    }) : null, [y, m, f, h, x]);
                    return (0, o.jsx)(n(920224).A, { ...e,
                        ref: t,
                        actor: g,
                        right: v,
                        tooltip: k,
                        badge: (0, o.jsx)(c, {
                            user: a
                        }),
                        tooltipPlacement: y ? "right" : void 0,
                        useEmailAsTooltip: !y,
                        customUserTitleStyles: n(986939).A.isMobile ? {
                            fontSize: 14
                        } : void 0,
                        iconSizeOverride: n(986939).A.isMobile ? 24 : void 0
                    })
                });

            function c({
                user: e
            }) {
                let t = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore),
                    i = (0, n(682985).K8)(() => {
                        if (t) return n(229903).V.createChildStore(t, (0, n(729052).i1)({
                            userId: e.id,
                            spaceId: t.id
                        })).getMembershipType()
                    }, [t, e.id]);
                if (!i) return null;
                switch (i) {
                    case "none":
                    case "member":
                    case "membership_admin":
                    case "owner":
                        return null;
                    case "page_guest":
                        return (0, o.jsx)(n(577280).w, {
                            labelType: "guest"
                        });
                    case "restricted_member":
                        return (0, o.jsx)(n(156379).L, {});
                    default:
                        (0, n(722371).HB)(i)
                }
            }

            function d({
                userName: e,
                userHasAccessToPage: t,
                userIsSelf: i
            }) {
                return i ? (0, o.jsx)(n(109939).sA, {
                    defaultMessage: "You",
                    id: "activitySection.authorPhrase.forOneAuthorCurrentUser.label"
                }) : t ? null : (0, o.jsx)(n(109939).sA, {
                    id: "mentionMenu.UserMentionMenuItem.noAccessTooltip",
                    defaultMessage: "{userName} won’t be notified because they don’t have page access",
                    values: {
                        userName: e
                    }
                })
            }
        },
        650251: (e, t, n) => {
            n.d(t, {
                T: () => i
            });

            function i(e) {
                return `ShowMentionInvite-${e}`
            }
        },
        657775: (e, t, n) => {
            n.d(t, {
                DP: () => r,
                Xg: () => p,
                w3: () => u,
                xX: () => s,
                yU: () => l
            }), n(944114), n(898992), n(581454), n(737550);
            var i = n(296540),
                o = () => n(212490),
                a = n(474848);

            function s() {
                let e = n(218744).default.getConfigKey("ai_connectors_down", "connectors");
                return Array.isArray(e) ? e : []
            }

            function r(e) {
                switch (e) {
                    case "slack_re_auth":
                        return "dismissed_slack_personal_auth_prompt";
                    case "github_re_auth":
                        return "dismissed_github_personal_auth_prompt";
                    case "jira_connection_pending":
                        return "dismissed_jira_installation_pending_prompt";
                    case "jira_connect_user":
                        return "dismissed_jira_user_auth_prompt";
                    case "jira_select_projects":
                        return "dismissed_jira_select_projects_prompt";
                    case "jira_migrate":
                        return "dismissed_jira_migrate_prompt";
                    case "slack_migrate":
                        return "dismissed_slack_migrate_prompt";
                    case "linear_re_auth":
                        return "dismissed_linear_personal_auth_prompt";
                    case "salesforce_re_auth":
                        return "dismissed_salesforce_personal_auth_prompt";
                    case "slack_v2_user_connection":
                        return "dismissed_slack_v2_user_connection_prompt";
                    case "asana_select_workspace":
                        return "dismissed_asana_select_workspace_prompt";
                    case "confluence_re_auth":
                    case "confluence_awaiting_confirmation":
                        return "dismissed_confluence_personal_auth_prompt";
                    default:
                        return null
                }
            }

            function l(e, t, i, o) {
                if (o) switch (t.type) {
                    case "slack_select_channels":
                        n(323425).nh();
                        break;
                    case "sharepoint_select_sites":
                        n(827781).o();
                        break;
                    case "microsoft_teams_select_teams":
                        n(827781).v();
                        break;
                    case "slack_re_auth":
                        (0, n(882707).t)({
                            connector: "slack",
                            environment: i,
                            spaceId: o,
                            analyticsProperties: {
                                buttonName: "connect_slack_user_mapping_agent"
                            }
                        });
                        break;
                    case "slack_v2_user_connection":
                        n(323425).JR({
                            environment: i,
                            spaceId: o,
                            withPrivateAccess: !0
                        });
                        break;
                    case "github_re_auth":
                        (0, n(882707).t)({
                            connector: "github",
                            environment: i,
                            spaceId: o,
                            analyticsProperties: {
                                buttonName: "connect_github_user_mapping_agent"
                            }
                        });
                        break;
                    case "linear_re_auth":
                        (0, n(882707).t)({
                            connector: "linear",
                            environment: i,
                            spaceId: o,
                            analyticsProperties: {
                                buttonName: "connect_linear_user_mapping_agent"
                            }
                        });
                        break;
                    case "jira_connection_pending":
                        (0, n(166672).navigateToAIConnectorOnboarding)({
                            connector: "jira",
                            analyticsFrom: "chat_menu",
                            sessionId: n(329488).yg.state.sessionId
                        });
                        break;
                    case "google_drive_connection_pending":
                        (0, n(166672).navigateToAIConnectorOnboarding)({
                            connector: "google-drive",
                            analyticsFrom: "chat_menu",
                            sessionId: n(454752).d.state.sessionId
                        });
                        break;
                    case "jira_connect_user":
                        n(420515).ol({
                            environment: i,
                            spaceId: o,
                            analyticsProperties: {
                                buttonName: "user_auth_connect_agent",
                                analyticsFrom: "chat_menu",
                                sessionId: n(329488).yg.state.sessionId
                            }
                        });
                        break;
                    case "jira_select_projects":
                        n(420515).G({
                            analyticsFrom: "chat_menu",
                            screenToShow: "connection_complete_screen"
                        });
                        break;
                    case "jira_migrate":
                        (0, n(166672).navigateToAIConnectorOnboarding)({
                            connector: "jira",
                            analyticsFrom: "chat_menu"
                        });
                        break;
                    case "slack_migrate":
                        n(323425).FM({
                            environment: i,
                            spaceId: o
                        });
                        break;
                    case "asana_select_workspace":
                        n(107529).g();
                        break;
                    case "confluence_re_auth":
                    case "confluence_awaiting_confirmation":
                        {
                            let e = (0, n(828294).a)("notion_ai_settings_tab_v2");n(599754).Ow({
                                openedFrom: "assistant",
                                currentPage: "ai",
                                tab: e ? "ai_connectors" : void 0
                            })
                        }
                }
            }
            let c = {
                closeButton: {
                    position: "absolute",
                    top: 8,
                    insetInlineEnd: 8,
                    borderRadius: "50%"
                },
                closeButtonIcon: {
                    fill: n(632079).Tj.icon.secondary
                }
            };

            function d({
                icon: e,
                title: t,
                subtitle: i,
                buttonText: o,
                onAction: s,
                onDismiss: r,
                isSingleConnector: l = !0,
                showDismissIcon: u = !0
            }) {
                let p = (0, n(109939).tz)(),
                    g = (0, n(960253).e)(),
                    {
                        bodyStyleKey: h
                    } = (0, n(765846).yq)(),
                    m = (0, n(960253).I)(() => ({
                        container: {
                            boxSizing: "border-box",
                            display: "flex",
                            flexDirection: l ? "row" : "column",
                            alignItems: "flex-start",
                            padding: 12,
                            gap: 8,
                            width: "100%",
                            marginBottom: 8,
                            background: "dark" === g ? n(632079).Tj.background.secondary : n(632079).Tj.background.primary,
                            boxShadow: `0px 0px 0px 1px ${n(632079).Tj.border.secondary}, 0px 3px 8px rgba(0, 0, 0, 0.04)`,
                            borderRadius: 16,
                            position: "relative"
                        }
                    }), [l, g]);
                return (0, a.jsxs)("div", {
                    style: m.container,
                    children: [(0, a.jsx)(n(4458).fI, {
                        alignItems: "center",
                        flexShrink: 0,
                        children: e
                    }), (0, a.jsxs)(n(4458).VP, {
                        flex: 1,
                        gap: 8,
                        children: [(0, a.jsxs)(n(4458).VP, {
                            flex: 1,
                            children: [(0, a.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "primary",
                                children: t
                            }), (0, a.jsx)(n(111010).D, {
                                styleKey: h,
                                colorVariant: "secondary",
                                children: i
                            })]
                        }), (0, a.jsx)(n(4458).fI, {
                            width: "100%",
                            children: (0, a.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                onClick: s,
                                children: o
                            })
                        })]
                    }), u ? (0, a.jsx)(n(374533).A, {
                        style: c.closeButton,
                        icon: n(25094).xMarkSmallIcon,
                        iconStyle: c.closeButtonIcon,
                        onClick: r,
                        ariaLabel: p.formatMessage({
                            id: "agentConnectionStatus.dismissAriaLabel",
                            defaultMessage: "Dismiss"
                        })
                    }) : void 0]
                })
            }

            function u(e, t) {
                switch (t) {
                    case "slack_migrate":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.migrateTitle",
                                defaultMessage: "Connect Private Channels and Messages"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.migrateSubtitle",
                                defaultMessage: "Update the Slack AI Connector to enable answers from private channels and messages for your workspace. Every user must authenticate."
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.migrateButton",
                                defaultMessage: "Update"
                            }),
                            isDismissible: !0
                        };
                    case "jira_migrate":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.migrateTitle",
                                defaultMessage: "Update Jira AI connector"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.migrateSubtitle",
                                defaultMessage: "Update to the latest Jira connector to continue getting Jira answers in Notion AI"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.migrateButton",
                                defaultMessage: "Update"
                            })
                        };
                    case "microsoft_teams_select_teams":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentMicrosoftTeamsStatus.selectTeamsTitle",
                                defaultMessage: "No Microsoft Teams Team selected"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentMicrosoftTeamsStatus.selectTeamsSubtitle",
                                defaultMessage: "Finish your setup to get answers from Microsoft Teams"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentMicrosoftTeamsStatus.selectTeamsButton",
                                defaultMessage: "Select Teams"
                            })
                        };
                    case "jira_select_projects":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.selectProjectsTitle",
                                defaultMessage: "Select Jira projects"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.selectProjectsSubtitle",
                                defaultMessage: "Choose which Jira projects to sync with Notion AI"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.selectProjectsButton",
                                defaultMessage: "Select projects"
                            })
                        };
                    case "jira_connection_pending":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.pendingTitle",
                                defaultMessage: "Complete Jira setup"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.pendingSubtitle",
                                defaultMessage: "Jira installation is pending. Complete setup to use Jira with Notion AI"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.pendingButton",
                                defaultMessage: "Continue setup"
                            })
                        };
                    case "jira_connect_user":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.connectUserTitle",
                                defaultMessage: "Connect your Jira account"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.connectUserSubtitle",
                                defaultMessage: "Link your personal Jira account to access your issues in Notion AI"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentJiraStatus.connectUserButton",
                                defaultMessage: "Connect account"
                            })
                        };
                    case "google_drive_connection_pending":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentGoogleDriveStatus.pendingTitle",
                                defaultMessage: "Complete Google Drive setup"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentGoogleDriveStatus.pendingSubtitle",
                                defaultMessage: "Google Drive installation is pending. Complete setup to use Google Drive with Notion AI"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentGoogleDriveStatus.pendingButton",
                                defaultMessage: "Continue setup"
                            })
                        };
                    case "slack_select_channels":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.selectChannelsTitle",
                                defaultMessage: "No Slack channels selected"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.selectChannelsSubtitle",
                                defaultMessage: "Finish your setup to get answers from Slack"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.selectChannelsButton",
                                defaultMessage: "Select channels"
                            })
                        };
                    case "slack_v2_user_connection":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.v2UserConnectionTitle",
                                defaultMessage: "Log in to Slack"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.v2UserConnectionSubtitle",
                                defaultMessage: "Connect your Slack account to search private channels and DMs"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.v2UserConnectionButton",
                                defaultMessage: "Log in"
                            }),
                            isDismissible: !0
                        };
                    case "sharepoint_select_sites":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentSharepointStatus.selectSitesTitle",
                                defaultMessage: "No SharePoint sites selected"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentSharepointStatus.selectSitesSubtitle",
                                defaultMessage: "Finish your setup to get answers from SharePoint"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentSharepointStatus.selectSitesButton",
                                defaultMessage: "Select sites"
                            })
                        };
                    case "slack_re_auth":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.reAuthTitle",
                                defaultMessage: "Log in to Slack"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.reAuthSubtitle",
                                defaultMessage: "We couldn’t verify your Slack email. Authenticate to continue using Slack with Notion AI"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentSlackStatus.reAuthButton",
                                defaultMessage: "Log in"
                            })
                        };
                    case "github_re_auth":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentGithubStatus.reAuthTitle",
                                defaultMessage: "Log in to GitHub"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentGithubStatus.reAuthSubtitle",
                                defaultMessage: "Connect your GitHub account to search repositories"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentGithubStatus.reAuthButton",
                                defaultMessage: "Log in"
                            })
                        };
                    case "linear_re_auth":
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentLinearStatus.reAuthTitle",
                                defaultMessage: "Log in to Linear"
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentLinearStatus.reAuthSubtitle",
                                defaultMessage: "Connect your Linear account to access issues in Notion AI"
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentLinearStatus.reAuthButton",
                                defaultMessage: "Log in"
                            })
                        };
                    default:
                        return {
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "agentConnectionStatus.singleConnectorTitle",
                                defaultMessage: "Finish {connector} setup",
                                values: {
                                    connector: n(590212).w0[e]
                                }
                            }),
                            subtitle: (0, a.jsx)(n(109939).sA, {
                                id: "agentConnectionStatus.singleConnectorSubtitle",
                                defaultMessage: "Your workspace has added {connector} to Notion AI. Link your account for higher quality AI results",
                                values: {
                                    connector: n(590212).w0[e]
                                }
                            }),
                            buttonText: (0, a.jsx)(n(109939).sA, {
                                id: "agentConnectionStatus.singleConnectorButton",
                                defaultMessage: "Finish setup"
                            })
                        }
                }
            }

            function p({
                isCustomAgent: e
            }) {
                let t = (0, n(533992).v3)(),
                    s = (0, n(972740).L)(),
                    c = (0, n(84163).J)(s),
                    g = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore),
                    h = null == s ? void 0 : s.id,
                    m = (0, n(682985).K8)(() => {
                        let e = (0, n(876688).kB)(),
                            t = [];
                        for (let n of e)
                            if ("custom" !== n)
                                for (let e of (0, o().uD)(n, c)) ! function(e, t) {
                                    if (!t) return !1;
                                    let n = t.getSettings(),
                                        i = r(e);
                                    return !!i && !!(null == n ? void 0 : n[i])
                                }(e.type, g) && t.push({
                                    connector: n,
                                    action: e
                                });
                        return t
                    }, [c, g]),
                    f = (0, i.useMemo)(() => {
                        let e = new Map;
                        for (let t of m) e.has(t.connector) || e.set(t.connector, t);
                        return Array.from(e.values())
                    }, [m]),
                    y = (0, i.useMemo)(() => f.map(({
                        connector: e
                    }) => {
                        let t = (0, n(596104).L)(e);
                        return {
                            connector: e,
                            scopeModule: t
                        }
                    }), [f]),
                    b = (0, i.useCallback)(() => {
                        g && h && (0, n(377796).createAndCommit)({
                            userAction: "agentConnectionStatus.dismissCard",
                            environment: t,
                            cellTarget: {
                                spaceWithId: h
                            },
                            canUndo: !0,
                            perform: e => {
                                let t = { ...g.getSettings()
                                };
                                for (let {
                                        action: e
                                    } of f) {
                                    let n = r(e.type);
                                    n && Object.assign(t, {
                                        [n]: !0
                                    })
                                }(0, n(421439).y4)({
                                    store: g,
                                    operation: {
                                        pointer: g.pointer,
                                        path: ["settings"],
                                        command: "update",
                                        args: t
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }, [g, h, t, f]),
                    S = 1 === f.length,
                    v = (0, i.useCallback)(() => {
                        if (S && f.length > 0) {
                            let {
                                connector: e,
                                action: n
                            } = f[0];
                            l(e, n, t, h)
                        } else {
                            let e = (0, n(828294).a)("notion_ai_settings_tab_v2");
                            n(599754).Ow({
                                openedFrom: "assistant",
                                currentPage: "ai",
                                tab: e ? "ai_connectors" : void 0
                            })
                        }
                    }, [f, t, h, S]);
                if ((0, i.useEffect)(() => {
                        if (S) {
                            var e;
                            (null == (e = f[0]) || null == (e = e.action) ? void 0 : e.type) === "slack_v2_user_connection" && (0, n(104310).u)({
                                event: {
                                    eventName: "universal_qna_button_click",
                                    eventProperties: {
                                        button_name: "slack_v2_private_connect_shown",
                                        integration_type: "slack",
                                        setup_session_id: n(32913).Rh.state.sessionId,
                                        from: n(32913).Rh.state.analyticsFrom,
                                        connection_version: 2
                                    }
                                }
                            })
                        }
                    }, [S, f, t]), 0 === f.length || n(986939).A.isMobile || e) return null;
                if (S) {
                    let {
                        connector: e,
                        action: t
                    } = f[0], {
                        title: i,
                        subtitle: o,
                        buttonText: s
                    } = u(e, t.type), l = r(t.type);
                    return (0, a.jsx)(d, {
                        icon: (0, a.jsx)(n(708966).Q, {
                            iconGroup: n(44183).G[e],
                            style: {
                                width: 24,
                                height: 24
                            },
                            variantName: "default"
                        }),
                        title: i,
                        subtitle: o,
                        buttonText: s,
                        onAction: v,
                        onDismiss: b,
                        showDismissIcon: null !== l
                    })
                }
                let x = (0, a.jsx)(n(4458).fI, {
                        alignItems: "center",
                        gap: 8,
                        children: y.map(({
                            connector: e
                        }) => (0, a.jsx)(n(708966).Q, {
                            iconGroup: n(44183).G[e],
                            style: {
                                width: 24,
                                height: 24
                            },
                            variantName: "default"
                        }, e))
                    }),
                    k = f.some(({
                        action: e
                    }) => null !== r(e.type));
                return (0, a.jsx)(d, {
                    icon: x,
                    title: (0, a.jsx)(n(109939).sA, {
                        id: "agentConnectionStatus.multipleConnectorsTitle",
                        defaultMessage: "Finish setting up Notion AI connected apps"
                    }),
                    subtitle: (0, a.jsx)(n(109939).sA, {
                        id: "agentConnectionStatus.multipleConnectorsSubtitle",
                        defaultMessage: "Get answers from your team’s connected apps"
                    }),
                    buttonText: (0, a.jsx)(n(109939).sA, {
                        id: "agentConnectionStatus.multipleConnectorsButton",
                        defaultMessage: "Finish setup"
                    }),
                    onAction: v,
                    onDismiss: b,
                    isSingleConnector: !1,
                    showDismissIcon: k
                })
            }
        },
        658456: (e, t, n) => {
            n.d(t, {
                D: () => i
            });
            let i = (0, n(109939).YK)({
                personalAgentMentionName: {
                    id: "botMention.personalAgent.name",
                    defaultMessage: "Notion AI"
                }
            }).personalAgentMentionName
        },
        736371: (e, t, n) => {
            n.d(t, {
                Z: () => o
            }), n(296540);
            var i = n(474848);

            function o(e) {
                let {
                    icon: t,
                    size: o = 18
                } = e;
                if (!t) return (0, i.jsx)(n(16275).I, {
                    icon: n(273344).aiFaceIcon,
                    size: o
                });
                let a = (0, n(565546).WO)(t);
                if (!a) return (0, i.jsx)(n(16275).I, {
                    icon: n(273344).aiFaceIcon,
                    size: o
                });
                switch (a.type) {
                    case "unicode_emoji":
                        return (0, i.jsx)(n(968860).A, {
                            size: o,
                            emoji: a.emoji.unicode,
                            disableShrinking: !0
                        });
                    case "notion_icon":
                    case "app_package_asset":
                        return (0, i.jsx)(n(392392).A, {
                            type: a.type,
                            size: o,
                            icon: t,
                            alt: "bot icon",
                            isLoading: !1,
                            progressPercent: 0
                        });
                    case "custom_emoji":
                    case "url":
                        return (0, i.jsx)("img", {
                            src: t,
                            alt: "bot icon",
                            style: {
                                width: o,
                                height: o,
                                objectFit: "cover",
                                borderRadius: 2
                            }
                        });
                    default:
                        return (0, n(722371).HB)(a)
                }
            }
        },
        800411: (e, t, n) => {
            n.d(t, {
                W: () => r
            });
            var i = n(296540);
            n(16280), n(944114), n(816573), n(878100), n(177936);
            class o {
                static parseWavHeader(e) {
                    if (e.length < 44) throw Error("Invalid WAV file: header too short");
                    if ("RIFF" !== e.subarray(0, 4).toString("ascii")) throw Error("Invalid WAV file: missing RIFF header");
                    if ("WAVE" !== e.subarray(8, 12).toString("ascii")) throw Error("Invalid WAV file: missing WAVE format");
                    let t = 0,
                        n = 0,
                        i = 0,
                        o = 0,
                        a = 0,
                        s = !1,
                        r = !1,
                        l = 12;
                    for (; l < e.length - 8;) {
                        let c = e.subarray(l, l + 4).toString("ascii"),
                            d = e.readUInt32LE(l + 4),
                            u = l + 8;
                        if ("fmt " === c) {
                            if (d < 16) throw Error("Invalid WAV file: fmt chunk too small");
                            t = e.readUInt16LE(u + 2), n = e.readUInt32LE(u + 4), i = e.readUInt32LE(u + 8), o = e.readUInt16LE(u + 14), s = !0
                        } else if ("data" === c) {
                            a = d, r = !0;
                            break
                        }
                        l += 8 + (d + d % 2)
                    }
                    if (!s) throw Error("Invalid WAV file: no fmt chunk found");
                    if (!r) throw Error("Invalid WAV file: no data chunk found");
                    if (0 === i) throw Error("Invalid WAV file: byteRate is 0");
                    let c = a / i;
                    return {
                        sampleRate: n,
                        channels: t,
                        bitDepth: o,
                        byteRate: i,
                        dataSize: a,
                        durationSeconds: c
                    }
                }
                static convertFloatArrayToPCM16(e) {
                    let t = Buffer.alloc(2 * e.length);
                    for (let n = 0; n < e.length; n++) {
                        let i = Math.round(32767 * Math.max(-1, Math.min(1, e[n])));
                        t.writeInt16LE(i, 2 * n)
                    }
                    return t
                }
                static readFloatArrayFromFloat32PCM(e) {
                    let t = [];
                    for (let n = 0; n <= e.length - 4; n += 4) try {
                        t.push(e.readFloatLE(n))
                    } catch {
                        t.push(0)
                    }
                    return t
                }
                static encodeFloatArrayToWAV({
                    samples: e,
                    sampleRate: t,
                    numChannels: n,
                    bitDepth: i
                }) {
                    let o = i / 8,
                        s = n * o,
                        r = new ArrayBuffer(44 + e.length * o),
                        l = new DataView(r);
                    return a(l, 0, "RIFF"), l.setUint32(4, 36 + e.length * o, !0), a(l, 8, "WAVE"), a(l, 12, "fmt "), l.setUint32(16, 16, !0), l.setUint16(20, 3, !0), l.setUint16(22, n, !0), l.setUint32(24, t, !0), l.setUint32(28, t * s, !0), l.setUint16(32, s, !0), l.setUint16(34, i, !0), a(l, 36, "data"), l.setUint32(40, e.length * o, !0),
                        function(e, t, n) {
                            for (let i = 0; i < n.length; i++, t += 4) e.setFloat32(t, n[i], !0)
                        }(l, 44, e), r
                }
            }

            function a(e, t, n) {
                for (let i = 0; i < n.length; i++) e.setUint8(t + i, n.charCodeAt(i))
            }
            let s = (0, n(109939).YK)({
                default: {
                    id: "customAgentUpgradeButtonProps.default",
                    defaultMessage: "Custom agents are not available on your current plan. <highlight>Upgrade</highlight> to {productName}"
                },
                request: {
                    id: "customAgentUpgradeButtonProps.request",
                    defaultMessage: "Custom agents are not available on your current plan. <highlight>Request upgrade</highlight> to {productName}."
                },
                requestPending: {
                    id: "customAgentUpgradeButtonProps.requestPending",
                    defaultMessage: "Custom agents are not available on your current plan. Your upgrade request is pending."
                },
                notEligible: {
                    id: "customAgentUpgradeButtonProps.notEligible",
                    defaultMessage: "Custom agents are not available on your current plan."
                }
            });

            function r(e) {
                let {
                    errorState: t,
                    attachments: a,
                    clientStore: r,
                    threadStore: l,
                    nextConfig: c,
                    spaceStore: d,
                    textStore: u,
                    isMicInputEnabled: p
                } = e, {
                    upsellMessage: g,
                    upgradeButtonTextProps: h,
                    isUpgradeSystemEnabled: m
                } = function(e) {
                    let {
                        config: t
                    } = e, o = "workflow" === t.type && !0 === t.isCustomAgent && !t.ephemeralInstructions, a = (0, n(533992).v3)(), r = (0, n(723240).r)(), l = a.currentUser.id, c = (0, n(682985).K8)(() => {
                        var e;
                        if (r && l) return null == (e = (0, n(622081).Lx)({
                            spaceId: r,
                            userId: l,
                            config: t
                        })) ? void 0 : e.pfaFeatureLoadArgs
                    }, [r, l, t]), d = (0, n(217844)._)(c || {
                        name: "ai_usage",
                        spaceId: r,
                        userId: l
                    }), u = (0, n(217844)._)({
                        name: "custom_agents",
                        spaceId: r,
                        userId: l
                    }), p = o ? u : d, {
                        upsellMessage: g
                    } = (0, n(427724).x)({
                        featureAvailability: p,
                        upsellFrom: (0, n(622081).bl)(t),
                        showOptimisticUpsell: !1
                    }), h = (0, n(622081).bl)(t), m = (0, n(340309).o)({
                        featureAvailability: d,
                        source: h,
                        type: "text"
                    }), f = function(e) {
                        let {
                            featureAvailability: t,
                            source: i,
                            type: o
                        } = e, a = (0, n(972740).L)(), r = (0, n(811656).Pd)(t) ? null == t ? void 0 : t.upsell : void 0;
                        if (!r || "none" === r.type) return;
                        let l = {
                            source: i,
                            upsell: r,
                            featureName: "custom_agents",
                            spaceStore: a
                        };
                        switch (o) {
                            case "primary":
                                return { ...l,
                                    display: "primary"
                                };
                            case "button":
                                return { ...l,
                                    display: "button",
                                    size: "small"
                                };
                            case "icon":
                                return { ...l,
                                    showPlanName: !0,
                                    display: "icon"
                                };
                            case "text":
                                return { ...l,
                                    display: "text",
                                    size: e.size ? ? "small",
                                    customMessages: {
                                        eligible_to_purchase: s.default,
                                        eligible_for_trial: s.default,
                                        sales_eligible: s.request,
                                        sales_assisted: s.request,
                                        eligible_to_request: s.request,
                                        request_pending: s.requestPending,
                                        not_eligible: s.notEligible
                                    }
                                };
                            default:
                                (0, n(722371).HB)(o)
                        }
                    }({
                        featureAvailability: u,
                        source: h,
                        type: "text"
                    }), y = o ? f : m, b = (0, n(83208).X)("upgrade_system_ai"), S = (0, n(682985).K8)(() => p && "available" !== p.type && !!(g || b && y), [p, g, b, y]);
                    return (0, i.useEffect)(() => {
                        S && n(908672).d.setState({ ...n(908672).d.state,
                            inlineUsageErrorVisible: !0
                        })
                    }, [S]), (0, i.useMemo)(() => ({
                        upsellMessage: S ? g : void 0,
                        upgradeButtonTextProps: y,
                        isUpgradeSystemEnabled: b
                    }), [S, g, y, b])
                }({
                    config: c
                }), {
                    isRecording: f,
                    isStoppingRecording: y,
                    audioRecorder: b,
                    handleStartRecording: S,
                    handleStopRecording: v
                } = function(e) {
                    let {
                        textStore: t,
                        spaceStore: a,
                        enabled: s
                    } = e, r = (0, n(533992).v3)(), [l, c] = (0, i.useState)(!1), [d, u] = (0, i.useState)(!1), [p, g] = (0, i.useState)(void 0), h = (0, i.useRef)(void 0), m = (0, i.useRef)([]), f = (0, i.useRef)(void 0), y = (0, i.useRef)(void 0), b = (0, i.useRef)(void 0), S = (0, i.useRef)(void 0), v = (0, i.useRef)(!1), x = (0, i.useCallback)(e => {
                        v.current || c(e)
                    }, []), k = (0, i.useCallback)(e => {
                        v.current || g(e)
                    }, []), C = (0, i.useCallback)(e => {
                        v.current || u(e)
                    }, []), M = (0, i.useCallback)(async () => {
                        let e = b.current;
                        if (void 0 !== e) return e;
                        let t = (async () => {
                            let [{
                                AudioRecorder: e
                            }, {
                                getDictationLanguageValue: t
                            }, {
                                getPreferredDictationLanguage: i
                            }, {
                                transcribeAudioToText: o
                            }] = await Promise.all([Promise.resolve().then(n.bind(n, 83723)), n.e(97045).then(n.bind(n, 400986)), Promise.resolve().then(n.bind(n, 533096)), n.e(95344).then(n.bind(n, 504903))]);
                            return {
                                AudioRecorder: e,
                                getDictationLanguageValue: t,
                                getPreferredDictationLanguage: i,
                                transcribeAudioToText: o
                            }
                        })();
                        b.current = t;
                        try {
                            return await t
                        } catch (e) {
                            throw b.current === t && (b.current = void 0), e
                        }
                    }, []), j = (0, i.useCallback)(e => {
                        let t = m.current,
                            n = 48e5 - t.length;
                        if (n <= 0) return;
                        let i = Math.min(n, e.length);
                        for (let n = 0; n < i; n += 1) t.push(e[n])
                    }, []), I = (0, i.useCallback)(e => {
                        let i = t.getValue() ? ? [],
                            o = i.length > 0 ? (0, n(247438).x9d)("\n") : [],
                            s = [...i, ...o, ...(0, n(247438).x9d)(e)];
                        (0, n(377796).createAndCommit)({
                            userAction: "useTranscription.handleDictation",
                            environment: r,
                            cellTarget: null != a && a.id ? {
                                spaceWithId: a.id
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                n(41403).R9({
                                    environment: r,
                                    store: t,
                                    value: s,
                                    transaction: e
                                })
                            }
                        })
                    }, [r, t, null == a ? void 0 : a.id]), A = (0, i.useCallback)(async () => {
                        let e = y.current;
                        if (void 0 !== e) return void await e;
                        if (!s || l || void 0 !== h.current || void 0 !== f.current || (null == a ? void 0 : a.id) === void 0) return;
                        let t = (async () => {
                            let {
                                AudioRecorder: e
                            } = await M();
                            if (!s || v.current || l || void 0 !== h.current || void 0 !== f.current) return;
                            let t = new e({
                                environment: r,
                                includeSystemAudio: !1,
                                sampleRate: 16e3,
                                onDataReceived: e => {
                                    j(e)
                                },
                                onStop: e => {
                                    h.current === t && (h.current = void 0, m.current = [], k(void 0), x(!1), C(!1), void 0 !== e && (0, n(222024).t)().error({
                                        from: "useAgentChatDictation",
                                        type: "audio_recorder_unexpected_stop",
                                        error: e
                                    }))
                                }
                            });
                            m.current = [], h.current = t, k(t), x(!0);
                            try {
                                await t.start()
                            } catch (i) {
                                let e = void 0 !== f.current;
                                h.current === t && (h.current = void 0), m.current = [], k(void 0), t.destroy(), x(!1), e || (0, n(222024).t)().error({
                                    from: "useAgentChatDictation",
                                    type: "audio_recorder_start_failed",
                                    error: i
                                })
                            }
                        })();
                        y.current = t;
                        try {
                            await t
                        } finally {
                            y.current === t && (y.current = void 0)
                        }
                    }, [j, s, r, l, M, k, x, C, null == a ? void 0 : a.id]), w = (0, i.useCallback)(async () => {
                        let e = f.current;
                        if (void 0 !== e) return await e;
                        let t = h.current;
                        if (void 0 === t) return m.current = [], k(void 0), x(!1), C(!1), "noTranscript";
                        let i = (async () => {
                            var e;
                            C(!0);
                            try {
                                let {
                                    getDictationLanguageValue: n,
                                    getPreferredDictationLanguage: i,
                                    transcribeAudioToText: s
                                } = await M();
                                h.current === t && (h.current = void 0, k(void 0)), t.stop({
                                    triggerOnStop: !1
                                });
                                let l = m.current;
                                m.current = [];
                                let c = null == a ? void 0 : a.id;
                                if (void 0 === c || 0 === l.length) return "noTranscript";
                                if (l.length > 48e5) throw Error("Recorded audio exceeded the transcription duration limit");
                                let d = o.encodeFloatArrayToWAV({
                                        samples: l,
                                        sampleRate: 16e3,
                                        numChannels: 1,
                                        bitDepth: 32
                                    }),
                                    u = new Blob([d], {
                                        type: "audio/wav"
                                    }),
                                    p = null == (e = r.currentUser) ? void 0 : e.id;
                                if (void 0 === p) return "failed";
                                let g = n(i(p)),
                                    f = new AbortController;
                                S.current = f;
                                let {
                                    text: y
                                } = await s({
                                    environment: r,
                                    audioBlob: u,
                                    spaceId: c,
                                    language: g,
                                    signal: f.signal
                                }), b = y.trim();
                                if (0 === b.length) return "noTranscript";
                                return I(b), "transcribed"
                            } catch (e) {
                                if (e instanceof Error && "AbortError" === e.name) return "noTranscript";
                                return (0, n(222024).t)().error({
                                    from: "useAgentChatDictation",
                                    type: "stop_and_transcribe_failed",
                                    error: e
                                }), "failed"
                            } finally {
                                f.current = void 0, S.current = void 0, x(!1), C(!1)
                            }
                        })();
                        return f.current = i, await i
                    }, [I, r, M, k, x, C, null == a ? void 0 : a.id]);
                    return (0, i.useEffect)(() => (v.current = !1, () => {
                        var e;
                        v.current = !0, f.current = void 0, y.current = void 0, null == (e = S.current) || e.abort(), S.current = void 0, m.current = [];
                        let t = h.current;
                        h.current = void 0, void 0 !== t && t.destroy()
                    }), []), (0, i.useEffect)(() => {
                        var e;
                        if (s) return;
                        f.current = void 0, y.current = void 0, null == (e = S.current) || e.abort(), S.current = void 0, m.current = [], k(void 0), x(!1), C(!1);
                        let t = h.current;
                        h.current = void 0, void 0 !== t && t.destroy()
                    }, [s, k, x, C]), {
                        isRecording: l,
                        isStoppingRecording: d,
                        audioRecorder: p,
                        handleStartRecording: A,
                        handleStopRecording: w
                    }
                }({
                    textStore: u,
                    spaceStore: d,
                    enabled: p
                }), x = (0, i.useMemo)(() => {
                    if ("workflow" === c.type && c.model && c.modelFromUser) return n(426048).UO[c.model]
                }, [c]), k = (0, n(682985).K8)(() => !l || (0, n(187353).av)(l) ? "newThread" : "existingThread", [l]);
                return {
                    inputMode: (0, n(682985).K8)(() => {
                        var e;
                        if (!d) return "aiDisabled";
                        let i = u.getValue(),
                            o = n(886556).z.isAiEnabled(),
                            s = null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getModel(),
                            p = null == l ? void 0 : l.id,
                            y = p ? r.getOrCreateClientAIChatThreadStore(p) : void 0;
                        if (!o) return "aiDisabled";
                        if (t.isError) return "error";
                        if (null != y && y.state.pendingStop) return "pendingStop";
                        if ((0, n(432155).Re)(a)) return "filesRequireConfirmation";
                        if ((0, n(432155).X4)(a)) return "uploadingFiles";
                        let b = (0, n(187353).Rc)(l),
                            S = (0, n(187353).wC)(l);
                        return (0, n(187353).Ft)({
                            clientStore: r,
                            threadStore: l
                        }) || b || S ? "runningInference" : f ? "recording" : s && n(352120).R.isInferenceTranscriptConfigTypeDown({
                            configType: c.type,
                            spaceId: d.id,
                            actor: s
                        }) ? "configTypeDown" : s && x && n(352120).R.isModelDown({
                            actor: s,
                            spaceId: d.id,
                            model: x
                        }) ? "modelProviderDown" : (m ? h : g) ? "upgradeRequired" : l && !l.canEdit() ? "readOnlyThread" : (0, n(432155).d2)(i, a) ? "ready" : "noContent"
                    }, [t.isError, a, r, l, f, g, d, c.type, h, m, x, u]),
                    threadMode: k,
                    upsellMessage: g,
                    upgradeButtonTextProps: h,
                    isUpgradeSystemEnabled: m,
                    isRecording: f,
                    isStoppingRecording: y,
                    audioRecorder: b,
                    onStartRecording: S,
                    onStopRecording: v
                }
            }
        },
        802384: (e, t, n) => {
            n.d(t, {
                h: () => nw
            }), n(18107), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(967357), n(898992), n(803949), n(581454), n(737550);
            var i = n(296540),
                o = () => n(180139),
                a = () => n(247438);
            n(430670);
            var s = () => n(432155);
            let r = (0, n(109939).YK)({
                surveySkipped: {
                    defaultMessage: "Skipped survey",
                    id: "submitSurveyResponse.surveySkipped"
                },
                surveyAnswered: {
                    defaultMessage: "These are my answers",
                    id: "submitSurveyResponse.surveyAnswered"
                }
            });

            function l(e) {
                let {
                    environment: t,
                    threadStore: i,
                    surveyStepId: l,
                    responses: c,
                    dismissed: d,
                    additionalSteps: u
                } = e, p = i.getSpaceStore();
                if (!p) return;
                let g = t.currentUser.id;
                if (!g) return;
                let h = function(e, t) {
                    let n = e.getMessages();
                    for (let i = 0; i < n.length; i++) {
                        let n = e.getMessageStoreAt(i);
                        if (!n) continue;
                        let o = n.getStep();
                        if (o && "survey" === o.type && o.id === t) return {
                            step: o,
                            messageIndex: i
                        }
                    }
                }(i, l);
                if (!h) return;
                let {
                    step: m,
                    messageIndex: f
                } = h;
                if (m.submitted) return;
                let y = d ? {} : c,
                    b = (0, n(997486).SS)(m, y);
                ! function(e) {
                    let {
                        environment: t,
                        threadStore: i,
                        surveyStep: o,
                        messageIndex: a,
                        updatedStep: s,
                        userAction: r
                    } = e, l = i.getSpaceId();
                    if (!l) return;
                    let c = i.getMessageStoreAt(a);
                    c && (0, n(377796).createAndCommit)({
                        userAction: r,
                        environment: t,
                        cellTarget: {
                            spaceWithId: l
                        },
                        canUndo: !1,
                        perform: e => {
                            let t = n(488307).op.update({
                                pointer: {
                                    table: n(832375).mSw,
                                    id: o.id,
                                    spaceId: l
                                },
                                path: ["step"],
                                args: s
                            });
                            (0, n(421439).y4)({
                                store: c,
                                operation: t,
                                transaction: e
                            })
                        }
                    })
                }({
                    environment: t,
                    threadStore: i,
                    surveyStep: m,
                    messageIndex: f,
                    updatedStep: b,
                    userAction: "submitSurveyResponses"
                });
                let S = n(807825).L.createChildStore(p, {
                        table: n(832375).oo9,
                        id: g
                    }),
                    v = function(e, t, i) {
                        let s = [];
                        for (let r of e) {
                            let e = t[r.id];
                            if (void 0 === e) {
                                s.push(...(0, a().x9d)(`${r.prompt}: (skipped)
`));
                                continue
                            }
                            s.push(...(0, a().x9d)(`${r.prompt}: `)), s.push(... function(e, t, i) {
                                return (Array.isArray(t) ? t : [t]).flatMap((t, s) => [...0 === s ? [] : (0, a().x9d)(", "), ... function(e, t, i) {
                                    if (t === o().qr) return (0, a().x9d)("Other (no details provided)");
                                    if ((0, o().c9)(t)) return [...(0, a().x9d)("Other: "), ...t.value];
                                    if (t.startsWith(o().$_)) {
                                        let e = t.slice(o().$_.length);
                                        return e ? (0, a().x9d)(`Other: ${e}`) : (0, a().x9d)("Other (no details provided)")
                                    }
                                    return (0, n(347403).bZ)({
                                        question: e,
                                        optionId: t,
                                        spaceId: i
                                    })
                                }(e, t, i)])
                            }(r, e, i)), s.push(...(0, a().x9d)("\n"))
                        }
                        return s
                    }(m.questions, y, p.id),
                    x = d ? n(962299).A.formatMessage(r.surveySkipped) : n(962299).A.formatMessage(r.surveyAnswered),
                    k = (0, s().dd)(v, p, S),
                    C = (0, n(674880).BX)({
                        environment: t,
                        spaceId: p.id,
                        pointers: k
                    }),
                    M = [...u ? ? [], ...C ? [C] : [], (0, n(674880).uP)({
                        environment: t,
                        spaceStore: p,
                        userStore: S,
                        actualMessage: v,
                        displayMessage: (0, a().x9d)(x),
                        surveyStepId: m.id
                    })];
                (0, n(455764).T)({
                    environment: t,
                    clientStore: n(57168).defaultClientAIChatStore,
                    userStore: S,
                    spaceStore: p,
                    threadStore: i,
                    addSteps: M,
                    waitForServerCommit: !0,
                    temporaryAiThreadManager: void 0
                })
            }
            n(672577);
            let c = new Map,
                d = new WeakMap;

            function u(e, t) {
                if (t && Object.keys(t).length > 0) e.setState(t);
                else {
                    e.setState(void 0);
                    let t = d.get(e);
                    t && c.delete(t)
                }
            }
            var p = () => n(722371),
                g = n(474848);
            let h = (0, i.createContext)(void 0);

            function m({
                children: e
            }) {
                let [t, n] = (0, i.useState)(void 0), o = (0, i.useMemo)(() => ({
                    isSlotAllowedToShow: e => void 0 === t || t === e,
                    activateSlot: n
                }), [t]);
                return (0, g.jsx)(h.Provider, {
                    value: o,
                    children: e
                })
            }

            function f() {
                let e = (0, i.useContext)(h),
                    t = (0, i.useRef)({}).current,
                    n = (0, i.useCallback)(() => {
                        null == e || e.activateSlot(t)
                    }, [e, t]);
                return {
                    isActive: void 0 === e || e.isSlotAllowedToShow(t),
                    activate: n
                }
            }
            h.displayName = "TooltipGroupContext";
            let y = (0, n(109939).YK)({
                    submitAiMessage: {
                        id: "SendMessageButton.submitAiMessage",
                        defaultMessage: "Submit AI message"
                    }
                }),
                b = (0, n(64960)._S)({
                    color: n(632079).Tj.blue.background.accentPrimary
                });

            function S(e) {
                let t, i, {
                        onSubmit: o,
                        inputMode: a,
                        aiChatFeatureController: s
                    } = e,
                    r = (0, n(109939).tz)(),
                    l = (0, n(942829).u)(),
                    c = s.shouldUseCompactSubmitButton,
                    d = (t = s.shouldUseCompactSubmitButton, i = s.isSingleLineInput, t ? 20 : i ? 24 : 28),
                    u = c ? n(104509).Ev.xs : n(104509).Ev.sm,
                    p = (0, n(960253).I)(() => ({
                        button: {
                            width: d,
                            height: d,
                            borderRadius: 30,
                            pointerEvents: "auto",
                            background: n(632079).Tj.blue.icon.accentPrimary
                        },
                        icon: {
                            width: u,
                            height: u,
                            fill: n(632079).Tj.text.inversePrimary
                        },
                        hovered: {
                            background: b.hovered
                        },
                        pressed: {
                            background: b.pressed
                        }
                    }), [d, u]);
                return s.isChatSubmitDisabled(a) || s.isChatCompletelyDisabled(a) ? (0, g.jsx)(v, { ...e
                }) : l ? (0, g.jsx)(n(593830).PulsingWrapper, {
                    shape: "circle",
                    withBackground: !1,
                    size: d,
                    children: (0, g.jsx)(n(374533).A, {
                        testId: "agent-send-message-button",
                        icon: n(567738).arrowStraightUpFillSmallIcon,
                        onClick: o,
                        style: p.button,
                        iconStyle: p.icon,
                        hoveredStyle: p.hovered,
                        pressedStyle: p.pressed,
                        size: "lg",
                        ariaLabel: r.formatMessage(y.submitAiMessage)
                    }, "send-message")
                }) : (0, g.jsx)(n(374533).A, {
                    testId: "agent-send-message-button",
                    icon: n(567738).arrowStraightUpFillSmallIcon,
                    onClick: o,
                    style: p.button,
                    iconStyle: p.icon,
                    hoveredStyle: p.hovered,
                    pressedStyle: p.pressed,
                    size: "lg",
                    ariaLabel: r.formatMessage(y.submitAiMessage)
                }, "send-message")
            }

            function v(e) {
                let {
                    inputMode: t,
                    aiChatFeatureController: o,
                    disabledTooltip: a
                } = e, s = (0, n(109939).tz)(), {
                    isActive: r,
                    activate: l
                } = f(), c = o.shouldUseCompactSubmitButton, d = o.isSingleLineInput, u = c ? 20 : d ? 24 : 28, h = c ? n(104509).Ev.xs : n(104509).Ev.sm, m = (0, n(960253).I)(() => ({
                    button: {
                        width: u,
                        height: u,
                        borderRadius: 30,
                        pointerEvents: "auto",
                        background: n(632079).Tj.background.tertiaryTranslucent
                    },
                    icon: {
                        width: h,
                        height: h,
                        fill: n(632079).Tj.icon.tertiary
                    }
                }), [u, h]), b = (0, i.useMemo)(() => {
                    if (a) return a;
                    switch (t) {
                        case "configTypeDown":
                            return (0, g.jsx)(n(109939).sA, { ...n(352120).$.cannotSubmitMessage
                            });
                        case "modelProviderDown":
                            return (0, g.jsx)(n(109939).sA, { ...n(352120).$.modelProviderDown
                            });
                        case "error":
                            return (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatInput.error",
                                defaultMessage: "Please dismiss the error to continue"
                            });
                        case "ready":
                            return null;
                        case "noContent":
                            return (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatInput.emptyInput",
                                defaultMessage: "Type a message"
                            });
                        case "uploadingFiles":
                            return (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatInput.uploadingFiles",
                                defaultMessage: "Please wait for the files to finish uploading"
                            });
                        case "filesRequireConfirmation":
                            return (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatInput.filesRequireConfirmation",
                                defaultMessage: "Please confirm whether the uploaded files are trusted."
                            });
                        case "readOnlyThread":
                            return (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatInput.isReadOnlyThread",
                                defaultMessage: "This chat is read-only"
                            });
                        case "upgradeRequired":
                            return (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatInput.upgradeRequired",
                                defaultMessage: "Upgrade to continue using AI features"
                            });
                        case "runningInference":
                            return (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatInput.runningInference",
                                defaultMessage: "Please wait for the request to complete"
                            });
                        case "pendingStop":
                            return (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatInput.pendingStop",
                                defaultMessage: "Stopping request…"
                            });
                        case "aiDisabled":
                            return (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatInput.aiDisabled",
                                defaultMessage: "AI is disabled for this workspace"
                            });
                        default:
                            (0, p().HB)(t)
                    }
                }, [a, t]);
                return (0, g.jsx)(n(51831).m, {
                    content: e => (0, g.jsx)("div", { ...e,
                        children: b
                    }),
                    forceVisibleState: !!r && void 0,
                    children: e => (0, g.jsx)(n(374533).A, { ...(0, n(63390).A)({
                            onMouseEnter: l,
                            onFocus: l
                        }, e),
                        icon: n(567738).arrowStraightUpFillSmallIcon,
                        style: m.button,
                        iconStyle: m.icon,
                        colorVariant: "secondary",
                        size: "lg",
                        disabled: !0,
                        ariaLabel: s.formatMessage(y.submitAiMessage),
                        testId: "agent-send-message-button"
                    }, "send-message")
                })
            }
            let x = (0, n(109939).YK)({
                    stopInference: {
                        id: "aiInferenceTranscript.stopInference",
                        defaultMessage: "Stop AI message"
                    }
                }),
                k = {
                    icon: {
                        fill: n(632079).Tj.text.inversePrimary
                    }
                };

            function C(e) {
                let {
                    onClick: t,
                    disabled: o
                } = e, [a, s] = (0, i.useState)(!1), r = (0, n(109939).tz)(), l = "light" === (0, n(960253).e)() ? n(632079).Tj.background.accentPrimary : n(632079).Tj.gray.background.tertiary, {
                    hovered: c,
                    pressed: d
                } = (0, n(133251)._S)({
                    color: l
                }), u = (0, n(960253).I)(() => ({
                    button: {
                        width: 28,
                        height: 28,
                        borderRadius: 30,
                        pointerEvents: "auto",
                        background: l
                    },
                    hovered: {
                        background: c
                    },
                    pressed: {
                        background: d
                    }
                }), [c, d, l]), p = (0, i.useCallback)(() => {
                    s(!0), t({
                        userAction: "AgentChatTranscript.StopInference.stopButtonClick"
                    }).catch(() => void 0).finally(() => {
                        s(!1)
                    })
                }, [t]);
                return (0, g.jsx)(n(374533).A, {
                    testId: "agent-stop-inference-button",
                    icon: n(308211).U,
                    style: u.button,
                    hoveredStyle: u.hovered,
                    pressedStyle: u.pressed,
                    onClick: p,
                    iconStyle: k.icon,
                    ariaLabel: r.formatMessage(x.stopInference),
                    disabled: a || o
                }, "stop-inference")
            }
            n(354520);
            var M = () => n(212490);

            function j(e) {
                let t = new Set(["notion", ...(0, n(596104).J)({}).filter(e => "web" !== e.type && "notion" !== e.type && e.isAvailable({})).map(e => e.createSearchScope()).map(e => e.type)]);
                if (0 === t.size) return !1;
                let i = new Set(e.map(e => e.type));
                return [...t].every(e => i.has(e))
            }
            n(823215);
            var I = () => n(688172);
            let A = (0, n(109939).YK)({
                everythingScope: {
                    id: "useSearchScopeName.everythingScope",
                    defaultMessage: "All sources I can access"
                },
                webSearchOnly: {
                    id: "useSearchScopeName.webSearchOnly",
                    defaultMessage: "Web search only"
                },
                noSources: {
                    id: "useSearchScopeName.noSources",
                    defaultMessage: "No sources"
                },
                multipleScopes: {
                    id: "useSearchScopeName.multipleScopes",
                    defaultMessage: "{scopeCount, plural, one {# scope} other {# scopes}}"
                }
            });
            var w = () => n(657775),
                _ = () => n(708966),
                T = () => n(281708),
                P = () => n(296060),
                E = n.n(n(844751));
            let F = (0, n(109939).YK)({
                    inputPlaceholder: {
                        id: "UnifiedChatNotionScopeMenu.inputPlaceholder",
                        defaultMessage: "Find or use knowledge in…"
                    },
                    selectedNotionScopeCount: {
                        id: "UnifiedChatSpaceScopeMenu.selectedNotionScopeCount",
                        defaultMessage: "{count, plural, one {# scope} other {# scopes}}"
                    },
                    searchResultsAnnouncement: {
                        id: "UnifiedChatSpaceScopeMenu.searchResultsAnnouncement",
                        defaultMessage: "{count, plural, =0 {No results} one {1 result} other {# results}}"
                    },
                    expandTeamspace: {
                        id: "UnifiedChatSpaceScopeMenu.expandTeamspace",
                        defaultMessage: "Expand teamspace"
                    },
                    collapseTeamspace: {
                        id: "UnifiedChatSpaceScopeMenu.collapseTeamspace",
                        defaultMessage: "Collapse teamspace"
                    },
                    expandPage: {
                        id: "UnifiedChatSpaceScopeMenu.expandPage",
                        defaultMessage: "Expand page"
                    },
                    collapsePage: {
                        id: "UnifiedChatSpaceScopeMenu.collapsePage",
                        defaultMessage: "Collapse page"
                    },
                    expandDatabase: {
                        id: "UnifiedChatSpaceScopeMenu.expandDatabase",
                        defaultMessage: "Expand database"
                    },
                    collapseDatabase: {
                        id: "UnifiedChatSpaceScopeMenu.collapseDatabase",
                        defaultMessage: "Collapse database"
                    }
                }),
                R = (0, n(109939).YK)({
                    notion: {
                        id: "UnifiedChatNotionScopeMenu.workspaceFuzzyName",
                        defaultMessage: "{workspaceName} Notion workspace"
                    },
                    workspace: {
                        id: "UnifiedChatNotionScopeMenu.workspaceFuzzyName",
                        defaultMessage: "{workspaceName} Notion workspace"
                    },
                    teamspace: {
                        id: "UnifiedChatNotionScopeMenu.teamspaceFuzzyName",
                        defaultMessage: "Teamspace"
                    },
                    page: {
                        id: "UnifiedChatNotionScopeMenu.pageFuzzyName",
                        defaultMessage: "Page"
                    },
                    collection: {
                        id: "UnifiedChatNotionScopeMenu.collectionFuzzyName",
                        defaultMessage: "Database"
                    }
                }),
                D = {
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                },
                B = {
                    padding: 4
                },
                N = {
                    marginInlineEnd: 2
                };

            function U(e) {
                let {
                    aiChatFeatureController: t,
                    buttonPopupParent: o,
                    config: a,
                    currentSearchScopes: r,
                    extensionPopupButtonEvents: l,
                    onChange: c,
                    allIndividualScopes: d
                } = e, u = (0, s().in)(a), p = (0, n(109939).tz)(), h = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore), m = "workflow" === a.type, [f, y] = (0, i.useState)(""), [b, S] = (0, i.useState)(new Set), [v, x] = (0, n(739271).s)(), k = (0, n(682985).K8)(() => {
                    var e;
                    return (null == (e = (0, n(328765).S)()) || null == (e = e.getModel()) ? void 0 : e.getRenderTitle()) ? ? ""
                }, []), C = (0, i.useCallback)(e => {
                    var t;
                    let n = "workflow" === a.type,
                        i = "teamspace" === (t = e).type ? {
                            type: "teamspace",
                            teamId: t.teamId
                        } : "page" === t.type ? {
                            type: "page",
                            pageId: t.pageId
                        } : "collection" === t.type ? {
                            type: "collection",
                            pageId: t.pageId,
                            collectionId: t.collectionId
                        } : t,
                        l = d && r.some(e => "everything" === e.type) ? d : r,
                        u = (0, s().Af)({
                            currentScopes: l ? ? [],
                            scope: i,
                            isMultiScopeEnabled: n
                        });
                    n || o.close();
                    let p = (0, s().Zd)(a, u);
                    null == c || c(p)
                }, [d, o, r, a, c]), M = (0, i.useMemo)(() => [{
                    type: "notion"
                }], []), j = (0, i.useMemo)(() => M.filter(e => {
                    let t = p.formatMessage(R[e.type], {
                        workspaceName: k
                    });
                    return E().test(f, t)
                }), [f, p, M, k]), A = (0, n(682985).K8)(() => h ? (0, n(679321).r)(h).map(e => ({
                    type: "teamspace",
                    teamId: e.id,
                    teamStore: e
                })) : [], [h]), w = (0, n(682985).K8)(() => A.filter(e => {
                    var t;
                    let n = (null == (t = e.teamStore.getModel()) ? void 0 : t.getRenderTitle()) ? ? "",
                        i = p.formatMessage(R.teamspace),
                        o = `${i} ${n}`;
                    return E().test(f, o)
                }), [f, A, p]), {
                    results: _,
                    isResultsLoading: T
                } = (0, n(183464).W)({
                    source: "ai_chat_search_scope_menu",
                    query: f,
                    limit: 20,
                    type: n(821603).Vz.BlocksInSpace,
                    filters: {
                        requireEditPermissions: !1,
                        excludeTemplates: !0
                    },
                    options: {
                        disable: !f
                    },
                    peopleBlocksToInclude: "none"
                }), P = (0, n(934877).A)({
                    visibility: T,
                    delayShow: 400
                }), D = (0, n(682985).K8)(() => _.flatMap(e => {
                    var t;
                    let n = e.store,
                        i = (null == (t = n.getCollectionPointers()) ? void 0 : t.map(e => e.id)) ? ? [];
                    return n.isCollectionView() && i.length > 0 ? i.map(e => ({
                        type: "collection",
                        pageId: n.id,
                        pageStore: n,
                        collectionId: e
                    })) : [{
                        type: "page",
                        pageId: n.id,
                        pageStore: n
                    }]
                }), [_]), U = (0, n(682985).K8)(() => {
                    let e = {
                        sections: [],
                        addSection(e) {
                            e && this.sections.push(e)
                        }
                    };
                    return f ? (e.addSection(q({
                        filteredEligibleSearchScopes: j,
                        currentSearchScope: u,
                        currentSearchScopes: r,
                        isWorkflowMultiScopeEnabled: m,
                        handleSelectScope: C
                    })), e.addSection(function(e) {
                        let {
                            filteredTeamSpaceScopes: t,
                            currentSearchScope: i,
                            currentSearchScopes: o,
                            isWorkflowMultiScopeEnabled: a,
                            handleSelectScope: s
                        } = e;
                        return W({
                            key: "teamspace-results-section",
                            title: (0, g.jsx)(n(109939).sA, {
                                id: "UnifiedChatNotionScopeMenu.teamspaceResultsSectionTitle",
                                defaultMessage: "Teamspaces"
                            }),
                            items: t.map((e, t) => ({
                                key: (0, n(892229).S)(e, t),
                                render: t => (0, g.jsx)(H, { ...t,
                                    item: e,
                                    currentSearchScope: i,
                                    currentSearchScopes: o,
                                    isWorkflowMultiScopeEnabled: a
                                }),
                                action: () => {
                                    s(e)
                                }
                            }))
                        })
                    }({
                        filteredTeamSpaceScopes: w,
                        currentSearchScope: u,
                        currentSearchScopes: r,
                        isWorkflowMultiScopeEnabled: m,
                        handleSelectScope: C
                    })), e.addSection(function(e) {
                        let {
                            filteredBlockScopes: t,
                            currentSearchScope: i,
                            currentSearchScopes: o,
                            isWorkflowMultiScopeEnabled: a,
                            handleSelectScope: s
                        } = e;
                        return W({
                            key: "block-results-section",
                            title: (0, g.jsx)(n(109939).sA, {
                                id: "UnifiedChatNotionScopeMenu.blockResultsSectionTitle",
                                defaultMessage: "Pages"
                            }),
                            items: t.map((e, t) => ({
                                key: (0, n(892229).S)(e, t),
                                render: t => (0, g.jsx)(H, { ...t,
                                    item: e,
                                    currentSearchScope: i,
                                    currentSearchScopes: o,
                                    isWorkflowMultiScopeEnabled: a
                                }),
                                action: () => {
                                    s(e)
                                }
                            }))
                        })
                    }({
                        filteredBlockScopes: D,
                        currentSearchScope: u,
                        currentSearchScopes: r,
                        isWorkflowMultiScopeEnabled: m,
                        handleSelectScope: C
                    })), 0 === e.sections.length && e.addSection({
                        key: "no-results-section",
                        render: e => (0, g.jsx)(n(844565).A, { ...e
                        }),
                        items: [{
                            key: "no-results-item",
                            render: e => (0, g.jsx)(n(95582).A, { ...e,
                                title: (0, g.jsx)(n(109939).sA, {
                                    id: "UnifiedChatNotionScopeMenu.noResultsItemTitle",
                                    defaultMessage: "No results"
                                })
                            }),
                            action: () => null
                        }]
                    })) : (e.addSection(q({
                        filteredEligibleSearchScopes: j,
                        currentSearchScope: u,
                        currentSearchScopes: r,
                        isWorkflowMultiScopeEnabled: m,
                        handleSelectScope: C
                    })), e.addSection(function(e) {
                        let {
                            filteredTeamSpaceScopes: t,
                            currentSearchScope: i,
                            currentSearchScopes: o,
                            isWorkflowMultiScopeEnabled: a,
                            handleSelectScope: s,
                            expandedItems: r,
                            setExpandedItems: l,
                            aiChatFeatureController: c
                        } = e;
                        if (0 !== t.length) return {
                            key: "outliner-teamspace-scopes-section",
                            render: e => (0, g.jsx)(n(844565).A, { ...e,
                                title: (0, g.jsx)(n(109939).sA, {
                                    id: "UnifiedChatNotionScopeMenu.outlinerTeamspaceScopesSectionTitle",
                                    defaultMessage: "Select a team or page"
                                })
                            }),
                            items: function(e) {
                                let {
                                    items: t,
                                    onClick: i,
                                    currentSearchScope: o,
                                    currentSearchScopes: a,
                                    isWorkflowMultiScopeEnabled: s,
                                    expandedItems: r,
                                    setExpandedItems: l,
                                    aiChatFeatureController: c
                                } = e, d = function e(t, i, o, a = 0) {
                                    let s = [];
                                    for (let r of t) {
                                        let t = function(e) {
                                                switch (e.type) {
                                                    case "notion":
                                                        return "notion";
                                                    case "workspace":
                                                        return "workspace";
                                                    case "teamspace":
                                                        return `teamspace-${e.teamId}`;
                                                    case "page":
                                                        return `page-${e.pageId}`;
                                                    case "collection":
                                                        return `collection-${e.pageId}-${e.collectionId}`
                                                }
                                            }(r),
                                            l = i.has(t),
                                            c = function(e) {
                                                let t = (0, I().hX)();
                                                switch (e.type) {
                                                    case "workspace":
                                                    case "collection":
                                                    case "notion":
                                                    default:
                                                        return [];
                                                    case "teamspace":
                                                        return e.teamStore.getTeamPageStores();
                                                    case "page":
                                                        return (0, n(531353).yD)({
                                                            rootStore: e.pageStore,
                                                            shouldSkipItemTypes: I().j8,
                                                            shouldShowItemTypes: t
                                                        })
                                                }
                                            }(r),
                                            d = c.length > 0,
                                            u = {
                                                item: r,
                                                depth: a,
                                                parentId: o,
                                                itemId: t,
                                                hasChildren: d,
                                                childrenStores: c,
                                                visible: !0
                                            };
                                        if (s.push(u), d && l && a < 20) {
                                            let n = e(c.map((e, t) => {
                                                let n = (0, I().D0)(e);
                                                return n.type, { ...n,
                                                    pageId: e.id,
                                                    pageStore: e
                                                }
                                            }), i, t, a + 1);
                                            s.push(...n)
                                        }
                                    }
                                    return s
                                }(t, r);
                                return d.filter(e => {
                                    if (0 === e.depth) return !0;
                                    let t = e;
                                    for (; t.parentId;) {
                                        if (!r.has(t.parentId)) return !1;
                                        let e = d.find(e => e.itemId === t.parentId);
                                        if (!e) return !1;
                                        t = e
                                    }
                                    return !0
                                }).map(e => ({
                                    key: e.itemId,
                                    render: (t, n) => (0, g.jsx)(L, {
                                        menuListParent: n,
                                        menuListItemProps: t,
                                        item: e.item,
                                        showToggle: !0,
                                        depth: e.depth,
                                        currentSearchScope: o,
                                        currentSearchScopes: a,
                                        isWorkflowMultiScopeEnabled: s,
                                        isExpanded: r.has(e.itemId),
                                        onToggle: () => {
                                            var t;
                                            return t = e.itemId, void l(e => {
                                                let n = new Set(e);
                                                return n.has(t) ? n.delete(t) : n.add(t), n
                                            })
                                        },
                                        hasChildren: e.hasChildren,
                                        aiChatFeatureController: c
                                    }),
                                    action: () => {
                                        i(e.item)
                                    }
                                }))
                            }({
                                items: t,
                                onClick: s,
                                currentSearchScope: i,
                                currentSearchScopes: o,
                                isWorkflowMultiScopeEnabled: a,
                                expandedItems: r,
                                setExpandedItems: l,
                                aiChatFeatureController: c
                            })
                        }
                    }({
                        filteredTeamSpaceScopes: w,
                        currentSearchScope: u,
                        currentSearchScopes: r,
                        isWorkflowMultiScopeEnabled: m,
                        handleSelectScope: C,
                        expandedItems: b,
                        setExpandedItems: S,
                        aiChatFeatureController: t
                    }))), e.sections
                }, [f, j, w, D, u, r, C, b, S, m, t]), {
                    announce: z
                } = (0, n(813367).U)(), K = j.length + w.length + D.length;
                (0, i.useEffect)(() => {
                    f && z(p.formatMessage(F.searchResultsAnnouncement, {
                        count: K
                    }))
                }, [f, K, z, p]);
                let V = "agent_mobile" === t.aiChatType,
                    O = (0, i.useMemo)(() => V ? {
                        menuType: n(649476).gu.Modal
                    } : {
                        menuType: n(649476).gu.Popup,
                        width: 280,
                        maxHeight: 325
                    }, [V]);
                return (0, g.jsx)(n(747369).A, { ...l,
                    ...O,
                    children: (0, g.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        initialFocus: void 0,
                        comboboxProps: x,
                        sections: [{
                            key: "input-section",
                            render: e => (0, g.jsx)(n(844565).A, { ...e
                            }),
                            items: [{
                                key: "input",
                                render: e => (0, g.jsx)(n(310324).Ay, { ...e,
                                    ...v,
                                    style: B,
                                    placeholder: p.formatMessage(F.inputPlaceholder),
                                    value: f,
                                    onChange: e => {
                                        y(e.target.value)
                                    },
                                    inputRight: P && (0, g.jsx)(n(517334).k, {
                                        style: N
                                    })
                                }),
                                action: () => null
                            }]
                        }, ...U]
                    })
                })
            }
            let z = {
                    width: 20,
                    height: 20
                },
                K = {
                    display: "grid",
                    width: 20,
                    height: 20,
                    alignItems: "center",
                    justifyContent: "center"
                },
                V = {
                    whiteSpace: "pre-wrap"
                },
                O = {
                    flexShrink: 0
                };

            function L(e) {
                let {
                    menuListItemProps: t,
                    menuListParent: o,
                    item: a,
                    showToggle: s,
                    currentSearchScope: r,
                    currentSearchScopes: l,
                    isWorkflowMultiScopeEnabled: c,
                    isExpanded: d = !1,
                    onToggle: u,
                    hasChildren: p = !1,
                    aiChatFeatureController: h
                } = e, m = e.depth ? ? 0, f = (0, n(109939).tz)(), y = (null == h ? void 0 : h.aiChatType) === "agent_mobile" || n(986939).A.isMobile, b = (0, i.useMemo)(() => "teamspace" === a.type ? f.formatMessage(d ? F.collapseTeamspace : F.expandTeamspace) : "collection" === a.type ? f.formatMessage(d ? F.collapseDatabase : F.expandDatabase) : f.formatMessage(d ? F.collapsePage : F.expandPage), [a.type, d, f]), S = (0, i.useMemo)(() => c ? l.some(e => $({
                    scopeMenuItem: a,
                    scope: e
                })) : !!r && $({
                    scopeMenuItem: a,
                    scope: r
                }), [c, l, a, r]), v = (0, i.useCallback)(e => {
                    e.stopPropagation(), null == u || u()
                }, [u]), x = t.focused ? ? !1, k = (0, n(960253).I)(() => ({
                    menuItem: { ...y && {
                            height: 56,
                            backgroundColor: n(632079).Tj.background.primary,
                            borderBottom: `1px ${n(632079).Tj.border.primaryTranslucent} solid`
                        }
                    },
                    toggle: {
                        gridColumn: 1,
                        gridRow: 1,
                        opacity: x && !y ? 1 : 0,
                        order: x && !y ? 1 : 0,
                        transition: `opacity ${n(153262).bM}`
                    },
                    icon: {
                        gridColumn: 1,
                        gridRow: 1,
                        opacity: x && !y ? 0 : 1,
                        order: x && !y ? 0 : 1,
                        transition: `opacity ${n(153262).bM}`
                    }
                }), [y, x]), C = (0, i.useMemo)(() => !!s && "notion" !== a.type && "workspace" !== a.type && ("teamspace" === a.type || "page" === a.type || "collection" === a.type || void 0), [a, s]);
                if (!(0, n(682985).K8)(() => "teamspace" === a.type || "workspace" === a.type || "notion" === a.type || ("page" === a.type || "collection" === a.type) && (0, I().JW)(a.pageStore), [a])) return null;
                let M = (0, g.jsx)(Q, {
                        item: a,
                        iconSize: 18
                    }),
                    j = y ? void 0 : C && p ? (0, g.jsxs)("div", {
                        style: K,
                        children: [(0, g.jsx)("div", {
                            style: k.icon,
                            children: M
                        }), (0, g.jsx)("div", {
                            style: k.toggle,
                            children: (0, g.jsx)(n(890389).f, {
                                isSidebar: !1,
                                fill: !0,
                                icon: "chevron",
                                open: d,
                                color: n(632079).Tj.icon.secondary,
                                onClick: v,
                                style: z,
                                disabled: !x,
                                ariaLabel: b
                            })
                        })]
                    }) : M,
                    A = y ? C && p ? (0, g.jsx)(n(890389).f, {
                        isSidebar: !1,
                        fill: !0,
                        icon: "chevron",
                        open: d,
                        color: n(632079).Tj.icon.secondary,
                        onClick: v,
                        style: z,
                        ariaLabel: b
                    }) : (0, g.jsx)("div", {
                        style: z
                    }) : void 0,
                    w = y ? M : void 0;
                return (0, g.jsx)(n(51831).m, {
                    style: V,
                    placement: "left",
                    content: () => (0, g.jsx)(n(4458).VP, {
                        children: (0, g.jsx)(en, {
                            item: a
                        })
                    }),
                    children: e => (0, g.jsx)(n(95582).A, { ...t,
                        ...(0, n(63390).A)(t, e),
                        onFocus: o.onFocus,
                        left: A,
                        leftStyle: y && m > 0 ? {
                            paddingInlineStart: 12 * m
                        } : void 0,
                        icon: j,
                        right: w,
                        desktopIconStyle: O,
                        title: (0, g.jsx)(et, {
                            item: a
                        }),
                        isChecked: S,
                        style: { ...k.menuItem,
                            paddingInlineStart: y ? void 0 : n(255069).Qm + 12 * m
                        }
                    })
                })
            }

            function W(e) {
                let {
                    key: t,
                    title: i,
                    items: o
                } = e;
                if (0 !== o.length) return {
                    key: t,
                    render: e => (0, g.jsx)(n(844565).A, { ...e,
                        title: i
                    }),
                    items: o
                }
            }

            function q(e) {
                let {
                    filteredEligibleSearchScopes: t,
                    currentSearchScope: n,
                    currentSearchScopes: i,
                    isWorkflowMultiScopeEnabled: o,
                    handleSelectScope: a
                } = e;
                return W({
                    key: "suggested-scopes-section",
                    items: t.map(e => ({
                        key: e.type,
                        render: t => (0, g.jsx)(H, { ...t,
                            item: e,
                            currentSearchScope: n,
                            currentSearchScopes: i,
                            isWorkflowMultiScopeEnabled: o
                        }),
                        action: () => {
                            a(e)
                        }
                    }))
                })
            }
            let H = i.forwardRef((e, t) => {
                let {
                    item: o,
                    currentSearchScope: a,
                    currentSearchScopes: s,
                    isWorkflowMultiScopeEnabled: r,
                    ...l
                } = e, c = (0, i.useMemo)(() => r ? s.some(e => $({
                    scopeMenuItem: o,
                    scope: e
                })) : !!a && $({
                    scopeMenuItem: o,
                    scope: a
                }), [r, s, a, o]);
                return "page" === o.type || "collection" === o.type ? (0, g.jsx)(n(103558).A, { ...l,
                    ref: t,
                    store: o.pageStore
                }) : "teamspace" === o.type ? (0, g.jsx)(n(103558).A, { ...l,
                    ref: t,
                    store: o.teamStore
                }) : (0, g.jsx)(n(95582).A, { ...l,
                    ref: t,
                    icon: (0, g.jsx)(Q, {
                        item: o
                    }),
                    title: (0, g.jsx)(et, {
                        item: o
                    }),
                    isChecked: c
                })
            });

            function $(e) {
                let {
                    scopeMenuItem: t,
                    scope: n
                } = e;
                switch (n.type) {
                    case "notion":
                        return "notion" === t.type;
                    case "workspace":
                        return "workspace" === t.type;
                    case "teamspace":
                        return "teamspace" === t.type && t.teamId === n.teamId;
                    case "page":
                        return "page" === t.type && t.pageId === n.pageId;
                    case "collection":
                        return "collection" === t.type && t.pageId === n.pageId && t.collectionId === n.collectionId;
                    default:
                        return !1
                }
            }
            H.displayName = "ScopedSearchMenuItem";
            let Y = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    flexGrow: 0,
                    width: 20,
                    height: 20,
                    position: "relative"
                },
                J = {
                    alignItems: "center",
                    display: "flex",
                    ...n(699422).RC,
                    minWidth: 0,
                    flex: 1,
                    marginInlineEnd: 12,
                    width: "100%"
                },
                G = { ...n(699422).RC,
                    minWidth: 0
                };

            function Q(e) {
                let {
                    item: t
                } = e, i = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), o = (0, n(682985).K8)(() => {
                    var e;
                    return null == i || null == (e = i.getModel()) ? void 0 : e.getRenderIcon()
                }, [i]), a = (0, n(682985).K8)(() => {
                    var e;
                    return null == i || null == (e = i.getModel()) ? void 0 : e.getRenderTitle()
                }, [i]), s = "page" === t.type || "collection" === t.type ? t.pageStore : null, r = (0, n(682985).K8)(() => null == s ? void 0 : s.getIcon(), [s]), l = (0, n(682985).K8)(() => (null == s ? void 0 : s.isEmptyPage()) ? ? !1, [s]), c = (0, n(682985).K8)(() => s ? (0, n(569553).Te)(s) : "pageBlock", [s]), d = (null == e ? void 0 : e.iconSize) ? ? 20;
                return "workspace" === t.type || "notion" === t.type ? (0, g.jsx)("div", {
                    style: Y,
                    children: (0, g.jsx)(n(569553).B6, {
                        icon: o,
                        title: a,
                        iconRecordCategory: "workspace",
                        isEmptyPage: !1,
                        size: d,
                        disabled: !0
                    })
                }) : "teamspace" === t.type ? (0, g.jsx)("div", {
                    style: Y,
                    children: (0, g.jsx)(n(729746).x, {
                        disabled: !0,
                        store: t.teamStore,
                        size: d
                    })
                }) : "page" === t.type || "collection" === t.type ? (0, g.jsx)("div", {
                    style: Y,
                    children: (0, g.jsx)(n(569553).B6, {
                        icon: r,
                        iconRecordCategory: c,
                        isEmptyPage: l,
                        title: void 0,
                        size: d,
                        disabled: !0
                    })
                }) : null
            }
            let X = {
                style0: {
                    color: n(632079).Tj.text.tertiary,
                    whiteSpace: "nowrap"
                },
                style1: {
                    display: "inline-block",
                    marginInlineStart: 3,
                    marginInlineEnd: 3
                }
            };

            function Z(e) {
                let {
                    title: t,
                    suffix: n
                } = e;
                return (0, g.jsxs)("div", {
                    style: J,
                    children: [(0, g.jsx)("div", {
                        style: G,
                        children: t
                    }), (0, g.jsxs)("div", {
                        style: X.style0,
                        children: [(0, g.jsx)("div", {
                            style: X.style1,
                            children: "—"
                        }), n]
                    })]
                })
            }
            let ee = {
                marginInlineStart: 4
            };

            function et(e) {
                let {
                    item: t
                } = e, i = (0, n(109939).tz)(), o = (0, n(682985).K8)(() => {
                    var e;
                    return null == (e = (0, n(328765).S)()) || null == (e = e.getModel()) ? void 0 : e.getRenderTitle()
                }, []), a = (0, n(682985).K8)(() => (0, I().Nr)({
                    item: t,
                    intl: i
                }), [t, i]);
                if ("notion" === a.type) return (0, g.jsx)(Z, {
                    title: o ? ? "",
                    suffix: "Workspace"
                });
                if ("workspace" === a.type) return (0, g.jsx)(Z, {
                    title: o ? ? "",
                    suffix: "Public Workspace"
                });
                if ("teamspace" === a.type)
                    if ("private" === a.accessLevel) return (0, g.jsxs)("div", {
                        style: J,
                        children: [(0, g.jsx)(n(627918).A, {
                            store: a.store
                        }), (0, g.jsx)(n(16275).I, {
                            icon: n(269298).lockFillIcon,
                            size: "xs",
                            colorVariant: "secondary",
                            style: ee
                        })]
                    });
                    else return (0, g.jsx)("div", {
                        style: J,
                        children: (0, g.jsx)(n(627918).A, {
                            store: a.store
                        })
                    });
                return "page" === a.type ? a.isCurrentPage ? (0, g.jsx)(Z, {
                    title: a.title,
                    suffix: "Current page"
                }) : (0, g.jsx)("div", {
                    style: J,
                    children: (0, g.jsx)(n(627918).A, {
                        store: a.store
                    })
                }) : null
            }

            function en(e) {
                let {
                    item: t
                } = e, i = (0, n(109939).tz)(), o = (0, n(682985).K8)(() => (0, I().Nr)({
                    item: t,
                    intl: i
                }), [t, i]);
                return "notion" === o.type ? (0, g.jsx)(n(109939).sA, {
                    id: "UnifiedChatNotionScopeTooltip.notionItem.tooltip",
                    defaultMessage: "Find in Notion workspace"
                }) : "workspace" === o.type ? (0, g.jsx)(n(109939).sA, {
                    id: "UnifiedChatNotionScopeTooltip.workspaceItem.tooltip",
                    defaultMessage: "Find in your Notion workspace"
                }) : "teamspace" === o.type ? (0, g.jsx)(n(109939).sA, {
                    id: "UnifiedChatNotionScopeTooltip.teamspaceItem.tooltip",
                    defaultMessage: "Find in this teamspace"
                }) : "page" === o.type ? o.isCurrentPage ? (0, g.jsx)(n(109939).sA, {
                    id: "UnifiedChatNotionScopeTooltip.currentPageItem.tooltip",
                    defaultMessage: "Find in the currently opened page for context"
                }) : (0, g.jsx)(n(109939).sA, {
                    id: "UnifiedChatNotionScopeTooltip.pageItem.tooltip",
                    defaultMessage: "Find in a specific Notion page"
                }) : null
            }
            let ei = {
                width: "100%",
                userSelect: "none",
                whiteSpace: "normal"
            };

            function eo(e) {
                let {
                    aiChatFeatureController: t,
                    buttonPopupParent: o,
                    clientStore: a,
                    config: r,
                    currentSearchScopes: l,
                    extensionPopupButtonEvents: c,
                    onChangeNextConfig: d,
                    availableScopeModules: u,
                    downConnectorsList: p,
                    canAdmin: h,
                    sidebarSpaceId: m,
                    environment: f,
                    spaceName: y,
                    spaceIcon: b,
                    everythingScopeLabel: S
                } = e, v = "workflow" === r.type, {
                    allIndividualScopes: x,
                    availableScopeStatuses: k
                } = (0, n(682985).K8)(() => {
                    let e = [{
                            type: "notion"
                        }],
                        t = u.map(t => {
                            let n = t.isAvailable({}),
                                i = (0, T().SC)(t.type) && n && p.includes(t.type);
                            return n && !i && e.push(t.createSearchScope()), {
                                scopeModule: t,
                                isModuleDown: i
                            }
                        });
                    return {
                        allIndividualScopes: e,
                        availableScopeStatuses: t
                    }
                }, [u, p]), C = l.some(e => "everything" === e.type), j = l.some(e => "ai-knowledge" === e.type), I = !j && (C || l.some(e => "notion" === e.type)), A = (0, i.useCallback)(e => !j && (!!C || l.some(t => (0, s().YJ)(t, e))), [l, j, C]), E = (0, i.useMemo)(() => !j && (!!C || x.every(e => l.some(t => (0, s().YJ)(t, e)))), [x, l, j, C]), R = (0, i.useCallback)(() => {
                    E ? d((0, s().Zd)(r, [{
                        type: "ai-knowledge"
                    }])) : d((0, s().Zd)(r, x))
                }, [x, r, E, d]), B = (0, i.useCallback)(() => {
                    let e = {
                        type: "notion"
                    };
                    if (j) return void d((0, s().Zd)(r, [e]));
                    if (C) {
                        let e = x.filter(e => "notion" !== e.type);
                        d((0, s().Zd)(r, e));
                        return
                    }
                    let t = (0, s().Af)({
                        currentScopes: l,
                        scope: e,
                        isMultiScopeEnabled: v
                    });
                    d((0, s().Zd)(r, t))
                }, [x, r, l, j, C, v, d]), N = (0, i.useCallback)(e => {
                    if (j) return void d((0, s().Zd)(r, [e]));
                    if (C) {
                        let t = x.filter(t => !(0, s().YJ)(t, e));
                        d((0, s().Zd)(r, t));
                        return
                    }
                    let t = (0, s().Af)({
                        currentScopes: l,
                        scope: e,
                        isMultiScopeEnabled: v
                    });
                    d((0, s().Zd)(r, t))
                }, [x, r, l, j, C, v, d]), z = (0, n(682985).uB)(void 0, n(419110).$), K = (0, i.useMemo)(() => {
                    let e = [];
                    for (let {
                            scopeModule: i,
                            isModuleDown: c
                        } of (e.push({
                            key: "everything-toggle",
                            render: (e, t) => (0, g.jsx)(P().A, { ...e,
                                onFocus: t.onFocus,
                                icon: (0, g.jsx)(n(16275).I, {
                                    icon: n(338).personCircleIcon,
                                    size: "default"
                                }),
                                title: S,
                                on: E,
                                onClick: R
                            }),
                            action: R
                        }), e.push(function(e) {
                            let {
                                aiChatFeatureController: t,
                                buttonPopupParent: i,
                                clientStore: o,
                                config: a,
                                onChangeNextConfig: r,
                                currentSearchScopes: l,
                                spaceName: c,
                                spaceIcon: d,
                                isWorkspaceScopeSelected: u,
                                onToggleWorkspace: p,
                                allIndividualScopes: h
                            } = e, m = "workflow" === a.type ? l.filter(e => (0, s().ZB)(e)).length : +!!(0, s().ZB)((0, s().in)(a)), f = m > 0, y = "agent_mobile" === t.aiChatType;
                            return {
                                key: "workspace-scope-toggle",
                                render: (e, s) => {
                                    let b = f ? (0, g.jsxs)("span", {
                                        style: D,
                                        children: [(0, g.jsx)(n(111010).D, {
                                            styleKey: "bodySmRegular",
                                            colorVariant: "secondary",
                                            children: (0, g.jsx)(n(109939).sA, { ...F.selectedNotionScopeCount,
                                                values: {
                                                    count: m
                                                }
                                            })
                                        }), (0, g.jsx)(n(16275).I, {
                                            icon: n(491469).arrowChevronSingleRightSmallIcon,
                                            size: "xs",
                                            colorVariant: "secondary"
                                        })]
                                    }) : (0, g.jsx)(n(354491).d, {
                                        on: u,
                                        onClick: e => {
                                            e.stopPropagation(), p()
                                        },
                                        disallowTabbing: !0
                                    });
                                    return (0, g.jsx)(n(816231).A, { ...e,
                                        onFocus: s.onFocus,
                                        disableDefaultClick: !0,
                                        allowOptionalExtensionMenu: f && !y,
                                        disableCloseOnEnter: y,
                                        alignmentToOrigin: "start",
                                        renderExtension: (e, n) => (0, g.jsx)(U, {
                                            aiChatFeatureController: t,
                                            buttonPopupParent: {
                                                close: () => {
                                                    n.close(), i.close()
                                                }
                                            },
                                            clientStore: o,
                                            config: a,
                                            currentSearchScopes: l,
                                            extensionPopupButtonEvents: e,
                                            onChange: r,
                                            allIndividualScopes: h
                                        }),
                                        children: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                                            ref: t,
                                            role: "menuitemcheckbox",
                                            showExtensionArrow: !1,
                                            icon: (0, g.jsx)(n(569553).B6, {
                                                bucket: "public",
                                                disabled: !0,
                                                icon: d,
                                                iconRecordCategory: "workspace",
                                                isEmptyPage: !1,
                                                size: 20,
                                                title: c
                                            }),
                                            title: c,
                                            right: b,
                                            dontShrinkRight: !0
                                        })
                                    })
                                },
                                action: f ? () => {} : p
                            }
                        }({
                            aiChatFeatureController: t,
                            buttonPopupParent: o,
                            clientStore: a,
                            config: r,
                            onChangeNextConfig: d,
                            currentSearchScopes: l,
                            spaceName: y,
                            spaceIcon: b,
                            isWorkspaceScopeSelected: I,
                            onToggleWorkspace: B,
                            allIndividualScopes: x
                        })), k)) {
                        let t = i.createSearchScope(),
                            n = A(t),
                            o = i.moduleKey ? ? i.type;
                        e.push({
                            key: o,
                            render: (e, o) => (0, g.jsx)(P().A, { ...e,
                                onFocus: o.onFocus,
                                icon: (0, g.jsx)(_().Q, {
                                    iconGroup: i.icon,
                                    variantName: "default"
                                }),
                                title: "helpdocs" === i.type ? "Notion Help Center" : i.displayName,
                                on: n,
                                disabled: c,
                                onClick: () => {
                                    if (!c) {
                                        if ((0, T().SC)(i.type)) {
                                            let e = (0, M().uD)(i.type, h)[0];
                                            if (e) {
                                                let {
                                                    isDismissible: t
                                                } = (0, w().w3)(i.type, e.type);
                                                if (!i.isInProgress() && !i.isDisconnecting() && !t) {
                                                    m && (0, w().yU)(i.type, e, f, m);
                                                    return
                                                }
                                            }
                                        }
                                        N(t)
                                    }
                                }
                            }),
                            action: () => {
                                c || N(t)
                            }
                        })
                    }
                    let i = e[0];
                    return [{
                        key: "all-sources-section",
                        render: e => (0, g.jsx)(n(844565).A, { ...e
                        }),
                        items: i ? [i] : []
                    }, {
                        key: "individual-sources-section",
                        render: e => (0, g.jsx)(n(844565).A, { ...e,
                            topBorder: !0
                        }),
                        items: e.slice(1)
                    }]
                }, [t, x, k, o, h, a, r, l, f, S, R, N, B, E, A, I, d, m, b, y]);
                return (0, g.jsx)(n(747369).A, { ...c,
                    menuType: t.adaptiveMenuType,
                    hideMobileTopbar: !0,
                    width: t.adaptiveMenuType === n(649476).gu.Popup ? 280 : void 0,
                    footer: (0, g.jsx)(n(844565).A, {
                        children: (0, g.jsx)(n(636518).Ay, {
                            caption: (0, g.jsx)("div", {
                                style: ei,
                                children: (0, g.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: (0, g.jsx)(n(109939).sA, {
                                        id: "UnifiedChatScopePopup.searchFooter",
                                        defaultMessage: "Notion AI will only search information from the sources selected here."
                                    })
                                })
                            })
                        })
                    }),
                    children: (0, g.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        initialFocus: 0,
                        sections: K,
                        store: z
                    })
                })
            }

            function ea() {
                return [{
                    type: "ai-knowledge"
                }]
            }

            function es(e) {
                if (e && e.length > 1) return e;
                let t = null == e ? void 0 : e.at(0),
                    n = {
                        type: "everything"
                    },
                    i = t || n;
                return "ai-knowledge" === i.type ? [n] : [i]
            }
            let er = (0, n(109939).YK)({
                    askModeToggle: {
                        id: "UnifiedChatPlusMenuButton.askMode",
                        defaultMessage: "Can make changes"
                    },
                    askMode: {
                        id: "UnifiedChatScopeMenu.askMode",
                        defaultMessage: "Ask"
                    },
                    planMode: {
                        id: "UnifiedChatScopeMenu.planMode",
                        defaultMessage: "Plan"
                    },
                    modeLabel: {
                        id: "UnifiedChatScopeMenu.modeLabel",
                        defaultMessage: "Mode"
                    },
                    defaultMode: {
                        id: "UnifiedChatScopeMenu.defaultMode",
                        defaultMessage: "Default"
                    },
                    researchMode: {
                        id: "UnifiedChatScopeMenu.researchMode",
                        defaultMessage: "Research"
                    },
                    defaultModeDescription: {
                        id: "UnifiedChatScopeMenu.defaultModeDescription",
                        defaultMessage: "Can search, edit, and more"
                    },
                    askModeDescription: {
                        id: "UnifiedChatScopeMenu.askModeDescription",
                        defaultMessage: "Answers only, won’t make edits"
                    },
                    planModeDescription: {
                        id: "UnifiedChatScopeMenu.planModeDescription",
                        defaultMessage: "Clarifies approach before executing"
                    },
                    researchModeDescription: {
                        id: "UnifiedChatScopeMenu.researchModeDescription",
                        defaultMessage: "Think deeper and broader. Slower, more thorough analysis"
                    },
                    appsAndIntegrationsTitle: {
                        id: "UnifiedChatScopeMenu.appsAndIntegrationsTitle",
                        defaultMessage: "Apps and integrations"
                    },
                    everythingScope: {
                        id: "UnifiedChatScopePopup.everythingScope",
                        defaultMessage: "All sources I can access"
                    },
                    mySources: {
                        id: "UnifiedChatScopeMenu.mySources",
                        defaultMessage: "My sources"
                    },
                    connectApps: {
                        id: "UnifiedChatScopeMenu.connectApps",
                        defaultMessage: "Add sources"
                    },
                    agentComputer: {
                        id: "UnifiedChatScopeMenu.agentComputer",
                        defaultMessage: "Computer"
                    },
                    yoloMode: {
                        id: "UnifiedChatScopeMenu.yoloMode",
                        defaultMessage: "Internet Access (Computer)"
                    },
                    personalize: {
                        id: "UnifiedChatScopeMenu.personalize",
                        defaultMessage: "Personalize"
                    },
                    connectingStatus: {
                        id: "UnifiedChatScopeMenu.connectingStatus",
                        defaultMessage: "Connecting"
                    },
                    connectingStatusWithProgress: {
                        id: "UnifiedChatScopeMenu.connectingStatusWithProgress",
                        defaultMessage: "Connecting {progress}%"
                    },
                    disconnectingStatus: {
                        id: "UnifiedChatScopeMenu.disconnectingStatus",
                        defaultMessage: "Disconnecting"
                    },
                    connectingTooltipTitle: {
                        id: "UnifiedChatScopeMenu.connectingTooltipTitle",
                        defaultMessage: "Connecting {appName}"
                    },
                    connectingTooltipSubtitle: {
                        id: "UnifiedChatScopeMenu.connectingTooltipSubtitle",
                        defaultMessage: "This can take up to 36h"
                    },
                    disconnectingTooltipTitle: {
                        id: "UnifiedChatScopeMenu.disconnectingTooltipTitle",
                        defaultMessage: "Disconnecting {appName}"
                    },
                    disconnectingTooltipSubtitle: {
                        id: "UnifiedChatScopeMenu.disconnectingTooltipSubtitle",
                        defaultMessage: "Your workspace owner has disconnected {appName}. This can take up to 3 hours."
                    },
                    unavailableStatus: {
                        id: "UnifiedChatScopeMenu.unavailableStatus",
                        defaultMessage: "Unavailable"
                    },
                    unavailableTooltipTitle: {
                        id: "UnifiedChatScopeMenu.unavailableTooltipTitle",
                        defaultMessage: "{appName} unavailable"
                    },
                    unavailableTooltipSubtitle: {
                        id: "UnifiedChatScopeMenu.unavailableTooltipSubtitle",
                        defaultMessage: "The {appName} AI Connector is currently unavailable. Our team is working on it — please try again shortly."
                    }
                }),
                el = {
                    width: "100%",
                    userSelect: "none",
                    whiteSpace: "normal"
                },
                ec = {
                    marginTop: 0
                };

            function ed(e) {
                let {
                    aiChatFeatureController: t,
                    activeThreadId: o,
                    buttonPopupParent: a,
                    clientStore: r,
                    config: l,
                    extensionPopupButtonEvents: c,
                    intl: d,
                    onChangeNextConfig: u,
                    onSetPendingPlanModeStep: p,
                    spaceStore: h,
                    threadStore: m,
                    askModeToggleProps: f,
                    planModeToggleProps: y,
                    researchModeToggleProps: b
                } = e, S = (0, n(533992).v3)(), v = (0, n(723240).r)(), x = (0, n(876252).$)(), k = (0, n(84163).J)(h), {
                    spaceName: C,
                    spaceIcon: j
                } = (0, n(682985).K8)(() => ({
                    spaceName: (0, n(742197).G)(S, h),
                    spaceIcon: h.getIcon()
                }), [S, h]), I = (0, n(217844)._)({
                    name: "ai_connectors",
                    spaceId: v,
                    userId: S.currentUser.id
                }), A = (0, n(83208).X)("notion_ai_workspace_settings"), _ = (0, n(548161).n_)({
                    config: l,
                    modules: []
                }), E = "workflow" === l.type, R = (0, n(853284).U)(), D = d.formatMessage(er.everythingScope), B = (0, n(973567).N)({
                    threadStore: m,
                    spaceId: h.id
                }), {
                    aiSessionId: N,
                    aiDraftInferenceId: z
                } = B, K = (0, n(682985).K8)(() => r.getOrCreateClientAIChatThreadStore(o), [o, r]), V = (0, i.useRef)((0, s().Cs)({
                    config: l,
                    includeWeb: !0
                })), O = (0, i.useRef)((0, s().Cs)({
                    config: l,
                    includeWeb: !0
                })), L = (0, i.useCallback)(e => {
                    O.current = (0, s().Cs)({
                        config: e,
                        includeWeb: !0
                    }), u(e)
                }, [u]);
                (0, n(383953).w)(() => {
                    (0, n(422052).trackScopeSearchMenuOpen)({
                        from: t.analyticsSource(m),
                        config_type: l.type,
                        options_displayed: ["notion", "workspace", "teamspace", "page", "collection"],
                        ai_session_id: N,
                        ai_inference_id: z
                    })
                }), (0, n(637030).X)(() => {
                    let e = O.current,
                        i = V.current;
                    i.length === e.length && i.every(t => e.some(e => (0, s().YJ)(t, e))) || (0, n(422052).trackScopeSearchToggle)({
                        from: t.analyticsSource(m),
                        original_scopes: i,
                        new_scopes: e,
                        config_type: l.type,
                        ai_session_id: N,
                        ai_inference_id: z
                    })
                });
                let W = (0, i.useCallback)(e => (null == _ ? void 0 : _.some(t => (0, s().YJ)(t, e))) ? ? !1, [_]),
                    [q, H] = (0, i.useState)(),
                    $ = (0, n(682985).K8)(() => {
                        var e;
                        return !(e = (0, n(548161).n_)({
                            config: l,
                            modules: []
                        })) || 0 === e.length || !e.some(e => "ai-knowledge" === e.type)
                    }, [l]),
                    Y = (0, n(682985).K8)(() => (0, n(596104).J)({}).filter(e => "web" !== e.type && "notion" !== e.type), []),
                    J = (0, n(682985).K8)(() => Y.filter(e => !!(e.isAvailable({}) || e.isInProgress() || e.isDisconnecting()) || !!(0, T().SC)(e.type) && (0, M().uD)(e.type, k).length > 0), [Y, k]),
                    G = (0, n(682985).K8)(() => J.filter(e => e.isAvailable({})), [J]),
                    Q = (0, n(682985).K8)(() => R ? function(e) {
                        let {
                            currentSearchScopes: t,
                            availableConnectorScopeModules: n
                        } = e;
                        if (!t || 0 === t.length || t.some(e => "ai-knowledge" === e.type)) return 0;
                        if (t.some(e => "everything" === e.type)) return 1 + n.length;
                        let i = 0;
                        for (let e of (t.some(e => "notion" === e.type || (0, s().ZB)(e)) && i++, n)) {
                            let n = e.createSearchScope();
                            t.some(e => (0, s().YJ)(e, n)) && i++
                        }
                        return i
                    }({
                        currentSearchScopes: _,
                        availableConnectorScopeModules: G
                    }) : 0, [G, _, R]),
                    X = (0, n(83208).X)("filesystem_sandbox"),
                    Z = "workflow" === l.type && !l.isCustomAgent && !0 === l.enableScriptAgent && X,
                    ee = (0, n(548161).Qw)({
                        config: l,
                        modules: []
                    }),
                    et = (0, i.useCallback)(() => {
                        let e = !(0, n(548161).H0)({
                            config: l,
                            modules: []
                        });
                        switch (v && (0, s().Oq)(v, {
                            webEnabled: e
                        }), l.type) {
                            case "workflow":
                                let t = ((0, n(548161).n_)({
                                    config: l,
                                    modules: []
                                }) ? ? []).filter(e => "web" !== e.type);
                                L({ ...l,
                                    searchScopes: t,
                                    useWebSearch: e
                                });
                                break;
                            case "researcher":
                            case "search":
                                L({ ...l,
                                    useWebSearch: e
                                })
                        }
                    }, [l, L, v]),
                    en = (0, i.useCallback)(() => {
                        if ("workflow" !== l.type) return;
                        let e = !(0, n(548161).Qw)({
                            config: l,
                            modules: []
                        });
                        v && (0, s().Oq)(v, {
                            computerEnabled: e
                        }), e || null == K || K.clearStagedComputerFileSteps(), L({ ...l,
                            useComputer: e
                        })
                    }, [K, l, L, v]),
                    ei = (0, i.useCallback)(() => {
                        if ("workflow" !== l.type) return;
                        let e = !(0, n(548161).Pi)({
                            config: l,
                            modules: []
                        });
                        v && (0, s().Oq)(v, {
                            yoloModeEnabled: e
                        }), L({ ...l,
                            yoloMode: e
                        })
                    }, [l, L, v]),
                    ed = (0, i.useCallback)(e => {
                        let t = (0, s().Af)({
                            currentScopes: _ ? ? [],
                            scope: e,
                            isMultiScopeEnabled: E
                        });
                        L((0, s().Zd)(l, t))
                    }, [l, L, _, E]),
                    eu = (0, i.useCallback)(() => {
                        if ("workflow" === l.type) {
                            if ($) {
                                let e = (null == _ ? void 0 : _.filter(e => "ai-knowledge" !== e.type)) ? ? [];
                                H(e.length > 0 ? e : void 0), L({ ...l,
                                    searchScopes: ea()
                                })
                            } else {
                                let e = es(q);
                                L({ ...l,
                                    searchScopes: e
                                }), H(void 0)
                            }
                            return
                        }
                        let {
                            scopeToSelect: e,
                            scopesToSave: t
                        } = function(e, t, n) {
                            let i = null == t ? void 0 : t[0];
                            if (e) {
                                let e = ea(),
                                    t = e[0];
                                return {
                                    newSearchScopes: e,
                                    scopeToSelect: t,
                                    scopesToSave: void 0 !== i && "ai-knowledge" !== i.type ? [i] : void 0
                                }
                            } {
                                let e = es(n),
                                    t = e[0] ? ? {
                                        type: "everything"
                                    };
                                return {
                                    newSearchScopes: e.length > 0 ? e : [t],
                                    scopeToSelect: t,
                                    scopesToSave: void 0
                                }
                            }
                        }($, _, q);
                        t && H(t), "search" === l.type ? L({ ...l,
                            scopeForNextSearch: e
                        }) : "researcher" === l.type && L({ ...l,
                            searchScope: e
                        }), $ || H(void 0)
                    }, [$, _, q, l, L]),
                    eg = (0, n(682985).K8)(() => (0, n(876688).Nr)(), []),
                    em = (0, i.useCallback)(() => {
                        n(305721).trackConnectAppsClicked({
                            from: "ai_chat_scoped_search_menu",
                            inferenceInfo: B
                        }), (0, n(622081).pp)({
                            environment: S,
                            connector: "generic",
                            analyticsFrom: "multi_search_scope_menu",
                            connectorsFeatureAvailability: I
                        })
                    }, [I, S, B]),
                    ef = (0, i.useCallback)(() => {
                        n(463226).cP({
                            store: n(210037).r,
                            from: "ai_chat_scoped_search_menu"
                        }), a.close()
                    }, [a]),
                    ey = (0, n(682985).K8)(() => (0, w().xX)(), []),
                    eb = (0, i.useCallback)(() => {
                        if (!Z) return [];
                        let e = [{
                            key: "computer-toggle",
                            render: (e, t) => (0, g.jsx)(P().A, { ...e,
                                onFocus: t.onFocus,
                                icon: (0, g.jsx)(n(16275).I, {
                                    icon: n(337762).f,
                                    size: "default"
                                }),
                                title: d.formatMessage(er.agentComputer),
                                on: ee,
                                onClick: en
                            }),
                            action: en
                        }];
                        return ee && e.push({
                            key: "computer-yolo-mode-toggle",
                            render: (e, t) => (0, g.jsx)(P().A, { ...e,
                                onFocus: t.onFocus,
                                icon: (0, g.jsx)(n(16275).I, {
                                    icon: n(184641).shieldLockIcon,
                                    size: "default"
                                }),
                                title: d.formatMessage(er.yoloMode),
                                on: (0, n(548161).Pi)({
                                    config: l,
                                    modules: []
                                }),
                                onClick: ei
                            }),
                            action: ei
                        }), e
                    }, [l, en, ei, d, ee, Z]),
                    eS = (0, n(682985).K8)(() => {
                        let e = [],
                            i = t.supportsWebSearch(l.type),
                            o = n(352120).R.isWebSearchDown();
                        if (R) {
                            let s = [];
                            i && s.push({
                                key: "web-toggle",
                                render: (e, t) => (0, g.jsx)(P().A, { ...e,
                                    onFocus: t.onFocus,
                                    disabled: o,
                                    icon: (0, g.jsx)(n(16275).I, {
                                        icon: n(515388).globeIcon,
                                        size: "default"
                                    }),
                                    title: (0, g.jsx)(n(109939).sA, {
                                        id: "UnifiedChatScopePopup.webAccessMenuItemTitle",
                                        defaultMessage: "Web access"
                                    }),
                                    on: !o && (0, n(548161).H0)({
                                        config: l,
                                        modules: []
                                    }),
                                    onClick: et
                                }),
                                action: et
                            }), s.push(...eb()), s.push({
                                key: "my-sources",
                                render: (e, i) => (0, g.jsx)(n(816231).A, { ...e,
                                    onFocus: i.onFocus,
                                    disableDefaultClick: !0,
                                    renderExtension: e => (0, g.jsx)(eo, {
                                        aiChatFeatureController: t,
                                        buttonPopupParent: a,
                                        clientStore: r,
                                        config: l,
                                        currentSearchScopes: _ ? ? [],
                                        extensionPopupButtonEvents: e,
                                        onChangeNextConfig: L,
                                        availableScopeModules: J,
                                        downConnectorsList: ey,
                                        canAdmin: k,
                                        sidebarSpaceId: v,
                                        environment: S,
                                        spaceName: C,
                                        spaceIcon: j,
                                        everythingScopeLabel: D
                                    }),
                                    children: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                                        ref: t,
                                        icon: (0, g.jsx)(n(16275).I, {
                                            icon: n(85071).integrationIcon,
                                            size: "default"
                                        }),
                                        title: d.formatMessage(er.mySources),
                                        right: (0, g.jsx)(n(111010).D, {
                                            colorVariant: "tertiary",
                                            children: Q
                                        })
                                    })
                                }),
                                action: n(763230).lQ
                            }), A && s.push({
                                key: "connect-apps",
                                render: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                                    onFocus: t.onFocus,
                                    icon: (0, g.jsx)(n(16275).I, {
                                        icon: n(581923).plusIcon,
                                        size: "default"
                                    }),
                                    title: d.formatMessage(er.connectApps),
                                    onClick: em,
                                    right: eg.length > 0 ? (0, g.jsx)(n(894658).hC, {
                                        connectors: eg,
                                        maxBubbles: 3,
                                        iconSize: 12,
                                        disableNumericalEllipsis: !0,
                                        bubbleStyles: {
                                            width: 16,
                                            height: 16
                                        }
                                    }) : void 0
                                }),
                                action: em
                            }), s.length > 0 && e.push({
                                key: "primary-settings",
                                render: e => (0, g.jsx)(n(844565).A, { ...e
                                }),
                                items: s
                            });
                            let c = [];
                            if (void 0 !== y) {
                                let e = y.isPlanModeEnabled,
                                    i = !!f && !f.allowEditsEnabled,
                                    o = (null == b ? void 0 : b.isResearchModeEnabled) ? d.formatMessage(er.researchMode) : e ? d.formatMessage(er.planMode) : i ? d.formatMessage(er.askMode) : d.formatMessage(er.defaultMode);
                                c.push({
                                    key: "mode-picker",
                                    render: (e, i) => (0, g.jsx)(n(816231).A, { ...e,
                                        onFocus: i.onFocus,
                                        disableDefaultClick: !0,
                                        renderExtension: e => (0, g.jsx)(ep, {
                                            extensionPopupButtonEvents: e,
                                            askModeToggleProps: f,
                                            planModeToggleProps: y,
                                            researchModeToggleProps: b,
                                            config: l,
                                            onChangeNextConfig: u,
                                            aiChatFeatureController: t,
                                            onSetPendingPlanModeStep: p
                                        }),
                                        children: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                                            ref: t,
                                            icon: (0, g.jsx)(n(16275).I, {
                                                icon: n(636).pencilLineIcon,
                                                size: "default"
                                            }),
                                            title: d.formatMessage(er.modeLabel),
                                            right: (0, g.jsx)(n(111010).D, {
                                                colorVariant: "tertiary",
                                                children: o
                                            })
                                        })
                                    }),
                                    action: n(763230).lQ
                                })
                            } else f && c.push({
                                key: "ask-mode-toggle",
                                render: (e, t) => (0, g.jsx)(P().A, { ...e,
                                    onFocus: t.onFocus,
                                    disabled: f.isAskModeDisabled,
                                    icon: (0, g.jsx)(n(16275).I, {
                                        icon: n(636).pencilLineIcon,
                                        size: "default"
                                    }),
                                    title: d.formatMessage(er.askModeToggle),
                                    on: f.allowEditsEnabled,
                                    onClick: f.onToggleAskMode
                                }),
                                action: () => {
                                    f.isAskModeDisabled || f.onToggleAskMode()
                                }
                            });
                            return c.push({
                                key: "personalize",
                                render: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                                    onFocus: t.onFocus,
                                    icon: (0, g.jsx)(n(16275).I, {
                                        icon: n(895578).L,
                                        size: "default"
                                    }),
                                    title: d.formatMessage(er.personalize),
                                    onClick: ef
                                }),
                                action: ef
                            }), c.length > 0 && e.push({
                                key: "secondary-settings",
                                render: e => (0, g.jsx)(n(844565).A, { ...e,
                                    topBorder: !0
                                }),
                                items: c
                            }), e
                        }
                        let c = [];
                        if (void 0 !== y) {
                            let e = [],
                                t = y.isPlanModeEnabled,
                                i = y.canTogglePlanMode,
                                o = t && !i,
                                a = !!f && !f.allowEditsEnabled;
                            f && e.push({
                                key: "ask-mode-option",
                                render: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                                    onFocus: t.onFocus,
                                    icon: (0, g.jsx)(n(16275).I, {
                                        icon: n(636).pencilLineIcon,
                                        size: "default"
                                    }),
                                    title: d.formatMessage(er.askMode),
                                    role: "menuitemradio",
                                    "aria-checked": a,
                                    isChecked: a,
                                    disabled: f.isAskModeDisabled || o
                                }),
                                action: () => {
                                    if (!f.isAskModeDisabled && !o) {
                                        if (t && i && "workflow" === l.type && y) {
                                            y.onTogglePlanMode(), u({ ...l,
                                                useReadOnlyMode: !a
                                            });
                                            return
                                        }
                                        f.onToggleAskMode()
                                    }
                                }
                            }), e.push({
                                key: "plan-mode-option",
                                render: (e, o) => (0, g.jsx)(n(95582).A, { ...e,
                                    onFocus: o.onFocus,
                                    icon: (0, g.jsx)(n(16275).I, {
                                        icon: n(183519).O,
                                        size: "default"
                                    }),
                                    title: d.formatMessage(er.planMode),
                                    role: "menuitemradio",
                                    "aria-checked": t,
                                    isChecked: t,
                                    disabled: !i
                                }),
                                action: () => {
                                    i && (f && a && !f.isAskModeDisabled && f.onToggleAskMode(), y.onTogglePlanMode())
                                }
                            }), e.length > 0 && c.push(...e)
                        } else f && c.push({
                            key: "ask-mode-toggle",
                            render: (e, t) => (0, g.jsx)(P().A, { ...e,
                                onFocus: t.onFocus,
                                disabled: f.isAskModeDisabled,
                                icon: (0, g.jsx)(n(16275).I, {
                                    icon: n(636).pencilLineIcon,
                                    size: "default"
                                }),
                                title: d.formatMessage(er.askModeToggle),
                                on: f.allowEditsEnabled,
                                onClick: f.onToggleAskMode
                            }),
                            action: () => {
                                f.isAskModeDisabled || f.onToggleAskMode()
                            }
                        });
                        i && c.push({
                            key: "web-toggle",
                            render: (e, t) => (0, g.jsx)(P().A, { ...e,
                                onFocus: t.onFocus,
                                disabled: o,
                                icon: (0, g.jsx)(n(16275).I, {
                                    icon: n(515388).globeIcon,
                                    size: "default"
                                }),
                                title: (0, g.jsx)(n(109939).sA, {
                                    id: "UnifiedChatScopePopup.webAccessMenuItemTitle",
                                    defaultMessage: "Web access"
                                }),
                                on: !o && (0, n(548161).H0)({
                                    config: l,
                                    modules: []
                                }),
                                onClick: et
                            }),
                            action: et
                        }), c.push(...eb()), c.length > 0 && e.push({
                            key: "web-search",
                            render: e => (0, g.jsx)(n(844565).A, { ...e
                            }),
                            items: c
                        });
                        let m = [];
                        if (m.push({
                                key: "apps-integrations-toggle",
                                render: (e, t) => (0, g.jsx)(P().A, { ...e,
                                    onFocus: t.onFocus,
                                    icon: (0, g.jsx)(n(16275).I, {
                                        icon: n(85071).integrationIcon,
                                        size: "default"
                                    }),
                                    title: (0, g.jsx)(n(109939).sA, { ...er.appsAndIntegrationsTitle
                                    }),
                                    on: $,
                                    onClick: eu
                                }),
                                action: eu
                            }), $)
                            for (let e of (m.push({
                                    key: "everything-scope",
                                    render: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                                        onFocus: t.onFocus,
                                        icon: (0, g.jsx)(n(321753).A, {
                                            size: 20,
                                            userStore: x
                                        }),
                                        title: D,
                                        role: "menuitemradio",
                                        "aria-checked": W({
                                            type: "everything"
                                        }),
                                        isChecked: W({
                                            type: "everything"
                                        })
                                    }),
                                    action: () => {
                                        ed({
                                            type: "everything"
                                        })
                                    }
                                }), m.push(function(e) {
                                    let {
                                        aiChatFeatureController: t,
                                        buttonPopupParent: i,
                                        clientStore: o,
                                        config: a,
                                        onChangeNextConfig: r,
                                        currentSearchScopes: l,
                                        spaceName: c,
                                        spaceIcon: d
                                    } = e, u = (0, s().in)(a), p = "workflow" === a.type ? l.some(e => "notion" === e.type) : (null == u ? void 0 : u.type) === "notion", h = "workflow" === a.type ? l.filter(e => (0, s().ZB)(e)).length : +!!(0, s().ZB)(u), m = h > 0 ? (0, g.jsx)(n(111010).D, {
                                        styleKey: "bodySmRegular",
                                        colorVariant: "secondary",
                                        children: (0, g.jsx)(n(109939).sA, { ...F.selectedNotionScopeCount,
                                            values: {
                                                count: h
                                            }
                                        })
                                    }) : void 0, f = "agent_mobile" === t.aiChatType;
                                    return {
                                        key: "workspace-scope",
                                        render: (e, s) => (0, g.jsx)(n(816231).A, { ...e,
                                            onFocus: s.onFocus,
                                            disableDefaultClick: !0,
                                            allowOptionalExtensionMenu: !f,
                                            disableCloseOnEnter: f,
                                            isChecked: p,
                                            right: m,
                                            alignmentToOrigin: "start",
                                            renderExtension: (e, n) => (0, g.jsx)(U, {
                                                aiChatFeatureController: t,
                                                buttonPopupParent: {
                                                    close: () => {
                                                        n.close(), i.close()
                                                    }
                                                },
                                                clientStore: o,
                                                config: a,
                                                currentSearchScopes: l,
                                                extensionPopupButtonEvents: e,
                                                onChange: r
                                            }),
                                            children: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                                                ref: t,
                                                icon: (0, g.jsx)(n(569553).B6, {
                                                    bucket: "public",
                                                    disabled: !0,
                                                    icon: d,
                                                    iconRecordCategory: "workspace",
                                                    isEmptyPage: !1,
                                                    size: 20,
                                                    title: c
                                                }),
                                                title: c
                                            })
                                        }),
                                        action: () => {
                                            let e = (0, s().Af)({
                                                currentScopes: l,
                                                scope: {
                                                    type: "notion"
                                                },
                                                isMultiScopeEnabled: "workflow" === a.type
                                            });
                                            r((0, s().Zd)(a, e))
                                        }
                                    }
                                }({
                                    aiChatFeatureController: t,
                                    buttonPopupParent: a,
                                    clientStore: r,
                                    config: l,
                                    onChangeNextConfig: L,
                                    currentSearchScopes: _ ? ? [],
                                    spaceName: C,
                                    spaceIcon: j
                                })), J)) {
                                let n = e.createSearchScope(),
                                    i = W(n),
                                    o = (0, T().SC)(e.type) && e.isAvailable({}) && ey.includes(e.type),
                                    a = e.moduleKey ? ? e.type;
                                m.push({
                                    key: a,
                                    render: (n, o) => (0, g.jsx)(eh, {
                                        menuListItemProps: n,
                                        menuListParent: o,
                                        scope: e,
                                        isSelected: i,
                                        downConnectorsList: ey,
                                        canTakeAction: t.supportsConnectingNewIntegrations,
                                        spaceStore: h
                                    }),
                                    action: () => {
                                        if (!o) {
                                            if ((0, T().SC)(e.type)) {
                                                let t = (0, M().uD)(e.type, k)[0];
                                                if (t) {
                                                    let {
                                                        isDismissible: n
                                                    } = (0, w().w3)(e.type, t.type);
                                                    if (!e.isInProgress() && !e.isDisconnecting() && !n) {
                                                        v && (0, w().yU)(e.type, t, S, v);
                                                        return
                                                    }
                                                }
                                            }
                                            ed(n)
                                        }
                                    }
                                })
                            } else m.push({
                                key: "search-footer-label",
                                render: e => (0, g.jsx)(n(636518).Ay, { ...e,
                                    caption: (0, g.jsx)("div", {
                                        style: el,
                                        children: (0, g.jsx)(n(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "secondary",
                                            children: (0, g.jsx)(n(109939).sA, {
                                                id: "UnifiedChatScopePopup.searchFooter",
                                                defaultMessage: "Notion AI will only search information from the sources selected here."
                                            })
                                        })
                                    })
                                }),
                                action: n(763230).lQ
                            });
                        return m.length > 0 && e.push({
                            key: "search-scope",
                            render: e => (0, g.jsx)(n(844565).A, { ...e,
                                topBorder: i,
                                topBorderExtendToEdge: i,
                                desktopStyle: ec
                            }),
                            items: m
                        }), e
                    }, [t, $, J, h, a, r, l, _, x, Q, eb, ed, eu, em, ef, et, A, R, d, eg, L, j, C, k, v, S, ey, D, W, f, y, b, u, p]),
                    ev = A && eg.length > 0 && $,
                    ex = (0, n(682985).uB)(void 0, n(419110).$),
                    ek = (0, i.useCallback)(() => {
                        ex.unsetFocus()
                    }, [ex]);
                return (0, g.jsx)(n(747369).A, { ...c,
                    menuType: t.adaptiveMenuType,
                    hideMobileTopbar: !0,
                    width: t.adaptiveMenuType === n(649476).gu.Popup ? 280 : void 0,
                    footer: !R && $ && t.supportsConnectingNewIntegrations ? (0, g.jsxs)(n(844565).A, {
                        topBorder: !0,
                        topBorderExtendToEdge: !0,
                        children: [ev ? (0, g.jsx)(n(95582).A, {
                            icon: (0, g.jsx)(n(16275).I, {
                                icon: n(581923).plusIcon,
                                size: "default"
                            }),
                            focused: !1,
                            onMouseEnter: ek,
                            onClick: em,
                            title: (0, g.jsx)(n(109939).sA, { ...er.connectApps
                            }),
                            right: (0, g.jsx)(n(894658).hC, {
                                connectors: eg,
                                maxBubbles: 2,
                                iconSize: 12,
                                bubbleStyles: {
                                    width: 16,
                                    height: 16
                                }
                            })
                        }) : void 0, (0, g.jsx)(n(636518).Ay, {
                            caption: (0, g.jsx)("div", {
                                style: el,
                                children: (0, g.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: (0, g.jsx)(n(109939).sA, {
                                        id: "UnifiedChatScopePopup.searchFooter",
                                        defaultMessage: "Notion AI will only search information from the sources selected here."
                                    })
                                })
                            })
                        })]
                    }) : void 0,
                    children: (0, g.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        initialFocus: 0,
                        sections: eS,
                        ...E ? {} : {
                            onAccept: a.close
                        },
                        store: ex
                    })
                })
            }
            let eu = {
                whiteSpace: "normal"
            };

            function ep(e) {
                let {
                    extensionPopupButtonEvents: t,
                    askModeToggleProps: o,
                    planModeToggleProps: a,
                    researchModeToggleProps: s,
                    config: r,
                    onChangeNextConfig: l,
                    aiChatFeatureController: c,
                    onSetPendingPlanModeStep: d
                } = e, u = (0, n(109939).tz)(), p = (0, n(682985).uB)(void 0, n(419110).$), h = (0, n(723240).r)(), m = (0, n(533992).v3)(), f = (null == a ? void 0 : a.isPlanModeEnabled) ? ? !1, y = (null == a ? void 0 : a.canTogglePlanMode) ? ? !1, b = f && !y, S = !!o && !o.allowEditsEnabled, v = (null == s ? void 0 : s.isResearchModeEnabled) ? ? !1, x = v ? "research" : f ? "plan" : S ? "ask" : "default", k = (0, i.useCallback)(() => {
                    "default" !== x && ("ask" === x && o ? o.onToggleAskMode() : "plan" === x && a && y ? a.onTogglePlanMode() : "research" === x && s && s.onToggleResearchMode())
                }, [x, o, a, y, s]), C = (0, i.useCallback)(() => {
                    if ("ask" !== x && o && !o.isAskModeDisabled && !b) {
                        if (f && y && "workflow" === r.type && a) {
                            a.onTogglePlanMode(), l({ ...r,
                                useReadOnlyMode: !0
                            });
                            return
                        }
                        if (v) {
                            var e;
                            let t = null == (e = (0, n(548161).n_)({
                                    config: r,
                                    modules: []
                                })) ? void 0 : e.at(0),
                                i = (0, n(862451).getDefaultNewThreadConfigFromUserPreference)({
                                    environment: m,
                                    spaceId: h,
                                    searchScopes: t ? [t] : void 0
                                });
                            "workflow" === i.type && (d(void 0), l({ ...i,
                                useReadOnlyMode: !0
                            }));
                            return
                        }
                        o.onToggleAskMode()
                    }
                }, [x, o, b, f, y, a, r, l, d, v, m, h]), M = (0, i.useCallback)(() => {
                    if ("plan" !== x && a && y) {
                        if (v) {
                            var e;
                            let t = null == (e = (0, n(548161).n_)({
                                    config: r,
                                    modules: []
                                })) ? void 0 : e.at(0),
                                i = (0, n(862451).getDefaultNewThreadConfigFromUserPreference)({
                                    environment: m,
                                    spaceId: h,
                                    searchScopes: t ? [t] : void 0
                                });
                            "workflow" === i.type && (d({
                                id: (0, n(4962).Ay)(),
                                type: "plan-mode",
                                value: (0, n(997486).Ih)()
                            }), l({ ...i
                            }));
                            return
                        }
                        o && S && !o.isAskModeDisabled && o.onToggleAskMode(), a.onTogglePlanMode()
                    }
                }, [x, a, y, o, S, v, r, l, d, m, h]), j = (0, i.useCallback)(() => {
                    "research" === x || s && s.canToggleResearchMode && (d(void 0), s.onToggleResearchMode())
                }, [x, d, s]), I = (0, i.useMemo)(() => {
                    let e = [];
                    return e.push({
                        key: "default-mode",
                        render: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                            onFocus: t.onFocus,
                            icon: (0, g.jsx)(n(16275).I, {
                                icon: n(273344).aiFaceIcon,
                                size: "default"
                            }),
                            title: u.formatMessage(er.defaultMode),
                            caption: (0, g.jsx)("div", {
                                style: eu,
                                children: (0, g.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: u.formatMessage(er.defaultModeDescription)
                                })
                            }),
                            role: "menuitemradio",
                            "aria-checked": "default" === x,
                            isChecked: "default" === x,
                            disabled: b
                        }),
                        action: k
                    }), o && e.push({
                        key: "ask-mode",
                        render: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                            onFocus: t.onFocus,
                            icon: (0, g.jsx)(n(16275).I, {
                                icon: n(799891).y,
                                size: "default"
                            }),
                            title: u.formatMessage(er.askMode),
                            caption: (0, g.jsx)("div", {
                                style: eu,
                                children: (0, g.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: u.formatMessage(er.askModeDescription)
                                })
                            }),
                            role: "menuitemradio",
                            "aria-checked": "ask" === x,
                            isChecked: "ask" === x,
                            disabled: o.isAskModeDisabled || b
                        }),
                        action: C
                    }), a && e.push({
                        key: "plan-mode",
                        render: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                            onFocus: t.onFocus,
                            icon: (0, g.jsx)(n(16275).I, {
                                icon: n(183519).O,
                                size: "default"
                            }),
                            title: u.formatMessage(er.planMode),
                            caption: (0, g.jsx)("div", {
                                style: eu,
                                children: (0, g.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: u.formatMessage(er.planModeDescription)
                                })
                            }),
                            role: "menuitemradio",
                            "aria-checked": "plan" === x,
                            isChecked: "plan" === x,
                            disabled: !y
                        }),
                        action: M
                    }), s && e.push({
                        key: "research-mode",
                        render: (e, t) => (0, g.jsx)(n(95582).A, { ...e,
                            onFocus: t.onFocus,
                            icon: (0, g.jsx)(n(16275).I, {
                                icon: n(46552).P,
                                size: "default"
                            }),
                            title: u.formatMessage(er.researchMode),
                            caption: (0, g.jsx)("div", {
                                style: eu,
                                children: (0, g.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: u.formatMessage(er.researchModeDescription)
                                })
                            }),
                            role: "menuitemradio",
                            "aria-checked": "research" === x,
                            isChecked: "research" === x,
                            disabled: !s.canToggleResearchMode
                        }),
                        action: j
                    }), [{
                        key: "mode-options",
                        render: e => (0, g.jsx)(n(844565).A, { ...e
                        }),
                        items: e
                    }]
                }, [u, x, b, y, o, a, s, k, C, M, j]);
                return (0, g.jsx)(n(747369).A, { ...t,
                    menuType: c.adaptiveMenuType,
                    hideMobileTopbar: !0,
                    width: c.adaptiveMenuType === n(649476).gu.Popup ? 280 : void 0,
                    children: (0, g.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        initialFocus: 0,
                        sections: I,
                        store: p
                    })
                })
            }
            let eg = {
                width: 18,
                height: 18,
                borderRadius: 2,
                objectFit: "contain"
            };

            function eh(e) {
                let {
                    menuListItemProps: t,
                    menuListParent: i,
                    scope: o,
                    isSelected: a,
                    downConnectorsList: s,
                    canTakeAction: r,
                    spaceStore: l
                } = e, c = (0, n(109939).tz)(), d = (0, n(84163).J)(l), u = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore), p = (0, T().SC)(o.type), h = (0, n(682985).K8)(() => p && o.isAvailable({}) && s.includes(o.type), [p, o, s]), {
                    actionsRequired: m,
                    isInProgress: f,
                    isDisconnecting: y,
                    ingestionProgress: b,
                    isAdminOnlyAction: S
                } = (0, n(682985).K8)(() => {
                    let e, t = p ? (0, M().uD)(o.type, d) : [],
                        n = !1;
                    if (p && t.length > 0) {
                        let e = (0, M().uD)(o.type, !1);
                        n = t.some(t => !e.some(e => e.type === t.type))
                    }
                    let i = !1,
                        a = !1;
                    if (p) {
                        let t = (0, M().LT)(o.type);
                        i = t.isInProgress, t.isInProgress && (e = t.ingestionProgress), a = (0, M().$t)(o.type)
                    } else i = o.isInProgress(), a = o.isDisconnecting();
                    return {
                        actionsRequired: t,
                        isInProgress: i,
                        isDisconnecting: a,
                        ingestionProgress: e,
                        isAdminOnlyAction: n
                    }
                }, [o, d, p]), v = m[0], x = (0, n(682985).K8)(() => {
                    if (!v || !u) return !1;
                    let e = (0, w().DP)(v.type);
                    if (!e) return !1;
                    let t = u.getSettings();
                    return !!(null == t ? void 0 : t[e])
                }, [v, u]), k = f ? void 0 !== b ? (0, g.jsx)(n(109939).sA, { ...er.connectingStatusWithProgress,
                    values: {
                        progress: b
                    }
                }) : (0, g.jsx)(n(109939).sA, { ...er.connectingStatus
                }) : y ? (0, g.jsx)(n(109939).sA, { ...er.disconnectingStatus
                }) : null, C = f || y, j = h || C || v && !r, I = (() => {
                    if (h) return (0, g.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 4,
                        children: [(0, g.jsx)(n(16275).I, {
                            icon: n(813524).exclamationMarkCircleFillSmallIcon,
                            size: "xs",
                            colorPalette: "gray",
                            colorVariant: "secondary"
                        }), (0, g.jsx)(n(111010).D, {
                            colorVariant: "tertiary",
                            children: (0, g.jsx)(n(109939).sA, { ...er.unavailableStatus
                            })
                        })]
                    });
                    if (v && !C && p) {
                        let {
                            buttonText: e,
                            isDismissible: t
                        } = (0, w().w3)(o.type, v.type);
                        return t ? null : (0, g.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            children: [x ? (0, g.jsx)(n(16275).I, {
                                icon: n(813524).exclamationMarkCircleFillSmallIcon,
                                size: "xs",
                                colorPalette: d && S ? "red" : "gray",
                                colorVariant: "secondary"
                            }) : void 0, (0, g.jsx)(n(111010).D, {
                                colorVariant: "tertiary",
                                children: e
                            })]
                        })
                    }
                    return k ? (0, g.jsx)(n(861510).N, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        animate: !0,
                        text: k
                    }) : null
                })(), A = (0, g.jsx)(n(95582).A, { ...t,
                    role: "menuitemradio",
                    "aria-checked": a,
                    focused: t.focused,
                    disabled: j,
                    icon: o.iconUrl ? (0, g.jsx)("img", {
                        src: o.iconUrl,
                        alt: o.displayName,
                        style: eg
                    }) : (0, g.jsx)(_().Q, {
                        iconGroup: o.icon,
                        variantName: "default"
                    }),
                    title: o.displayName,
                    isChecked: a,
                    onFocus: i.onFocus,
                    right: I
                });
                if ((() => {
                        if (h || C) return !0;
                        if (v && p) {
                            let {
                                isDismissible: e
                            } = (0, w().w3)(o.type, v.type);
                            return !e
                        }
                        return !1
                    })()) {
                    let e, t;
                    if (h) e = c.formatMessage(er.unavailableTooltipTitle, {
                        appName: o.displayName
                    }), t = c.formatMessage(er.unavailableTooltipSubtitle, {
                        appName: o.displayName
                    });
                    else if (C) e = f ? c.formatMessage(er.connectingTooltipTitle, {
                        appName: o.displayName
                    }) : c.formatMessage(er.disconnectingTooltipTitle, {
                        appName: o.displayName
                    }), t = f ? c.formatMessage(er.connectingTooltipSubtitle) : c.formatMessage(er.disconnectingTooltipSubtitle, {
                        appName: o.displayName
                    });
                    else if (v && p) {
                        let {
                            title: n,
                            subtitle: i
                        } = (0, w().w3)(o.type, v.type);
                        e = n, t = i
                    }
                    return (0, g.jsx)(n(51831).m, {
                        textWrap: !0,
                        placement: "right",
                        content: () => (0, g.jsxs)(g.Fragment, {
                            children: [(0, g.jsx)("div", {
                                children: e
                            }), (0, g.jsx)(n(111010).D, {
                                colorVariant: "secondary",
                                children: t
                            })]
                        }),
                        children: e => (0, g.jsx)("div", { ...e,
                            children: A
                        })
                    })
                }
                return A
            }

            function em(e) {
                let {
                    config: t,
                    onChangeNextConfig: o
                } = e, a = (0, n(723240).r)(), r = (0, n(973567).N)({
                    spaceId: a
                }), {
                    isAvailable: l,
                    isAskModeEnabled: c
                } = (0, i.useMemo)(() => "workflow" !== t.type || t.isCustomAgent || t.isCustomAgentBuilder ? {
                    isAvailable: !1,
                    isAskModeEnabled: !1
                } : {
                    isAvailable: !0,
                    isAskModeEnabled: !!t.useReadOnlyMode
                }, [t]), d = (0, i.useCallback)(e => {
                    if (!l || "workflow" !== t.type) return;
                    a && (0, s().Oq)(a, {
                        readOnlyModeEnabled: e
                    });
                    let i = e ? {
                        eventName: "agent_allow_edits_turned_off",
                        eventProperties: {
                            ai_session_id: r.aiSessionId,
                            ai_inference_id: r.aiInferenceId,
                            allow_edits_enabled: !1
                        }
                    } : {
                        eventName: "agent_allow_edits_turned_on",
                        eventProperties: {
                            ai_session_id: r.aiSessionId,
                            ai_inference_id: r.aiInferenceId,
                            allow_edits_enabled: !0
                        }
                    };
                    (0, n(104310).u)({
                        event: i
                    }), o({ ...t,
                        useReadOnlyMode: e
                    })
                }, [t, a, l, o, r.aiInferenceId, r.aiSessionId]), u = (0, i.useCallback)(() => {
                    d(!c)
                }, [c, d]);
                return {
                    isAskModeAvailable: l,
                    isAskModeEnabled: c,
                    setAskModeEnabled: d,
                    toggleAskMode: u
                }
            }

            function ef(e) {
                let {
                    config: t,
                    threadStore: o,
                    pendingPlanModeStep: a,
                    onSetPendingPlanModeStep: s
                } = e, r = (0, n(723240).r)(), l = (0, n(973567).N)({
                    spaceId: r
                }), c = (0, n(682985).K8)(() => n(218744).default.checkGate({
                    gateName: "agent_plan_mode"
                }), []), d = (0, n(682985).K8)(() => {
                    if (!o) return;
                    let e = o.getTranscript();
                    return (0, n(997486).i)(e)
                }, [o]), {
                    isAvailable: u,
                    isPlanModeEnabled: p,
                    planModeMetadata: g,
                    currentState: h
                } = (0, i.useMemo)(() => {
                    if ("workflow" !== t.type || t.isCustomAgent || t.isCustomAgentBuilder || !c) return {
                        isAvailable: !1,
                        isPlanModeEnabled: !1,
                        planModeMetadata: void 0,
                        currentState: void 0
                    };
                    let e = void 0 !== a ? a.value : d;
                    return {
                        isAvailable: !0,
                        isPlanModeEnabled: (0, n(997486).ar)(e),
                        planModeMetadata: e,
                        currentState: null == e ? void 0 : e.state
                    }
                }, [t, d, a, c]), m = (0, i.useCallback)(e => {
                    if (u && "workflow" === t.type) {
                        if (e) {
                            if ((0, n(997486).ar)(g)) return
                        } else if ("planning" !== h) return;
                        (0, n(104310).u)({
                            event: {
                                eventName: "clicked_ai_chat_mode",
                                eventProperties: {
                                    mode: "workflow",
                                    ai_session_id: l.aiSessionId,
                                    ai_inference_id: l.aiDraftInferenceId
                                }
                            }
                        }), (0, n(104310).u)({
                            event: {
                                eventName: "plan_mode_toggled",
                                eventProperties: {
                                    thread_id: l.aiSessionId,
                                    ai_session_id: l.aiSessionId,
                                    enabled: e,
                                    previous_state: h
                                }
                            }
                        }), e ? s({
                            id: (0, n(4962).Ay)(),
                            type: "plan-mode",
                            value: (0, n(997486).Ih)()
                        }) : void 0 !== d ? s({
                            id: (0, n(4962).Ay)(),
                            type: "plan-mode",
                            value: {
                                state: "cancelled"
                            }
                        }) : s(void 0)
                    }
                }, [t, u, g, h, d, s, l.aiDraftInferenceId, l.aiSessionId]), f = (0, i.useCallback)(() => {
                    m(!p)
                }, [p, m]), y = u && !(0, n(997486).eH)(g) && !(0, n(997486).bI)(g);
                return {
                    isPlanModeAvailable: u,
                    isPlanModeEnabled: p,
                    setPlanModeEnabled: m,
                    togglePlanMode: f,
                    canTogglePlanMode: y,
                    currentState: h
                }
            }

            function ey(e) {
                let {
                    aiChatFeatureController: t,
                    config: o,
                    inputMode: a,
                    threadMode: s,
                    onChangeNextConfig: r,
                    threadStore: l,
                    spaceStore: c
                } = e, d = (0, n(533992).v3)(), u = (0, n(723240).r)(), p = (0, n(973567).N)({
                    threadStore: l,
                    spaceId: c.id
                }), g = t.supportsWorkspaceContext(o.type), h = t.supportsConfigTypeChanges({
                    mode: a,
                    threadMode: s
                }), m = "researcher" === o.type, f = g && (h || m), y = (0, i.useCallback)(() => {
                    var e;
                    let i;
                    if (!f) return;
                    let a = null == (e = (0, n(548161).n_)({
                            config: o,
                            modules: []
                        })) ? void 0 : e.at(0),
                        s = t.supportsWebSearch("researcher") && (0, n(548161).H0)({
                            config: o,
                            modules: []
                        });
                    i = m ? (0, n(862451).getDefaultNewThreadConfigFromUserPreference)({
                        spaceId: u,
                        environment: d,
                        searchScopes: a ? [a] : void 0
                    }) : {
                        type: "researcher",
                        searchScope: a,
                        useWebSearch: s
                    }, (0, n(104310).u)({
                        event: {
                            eventName: "clicked_ai_chat_mode",
                            eventProperties: {
                                mode: i.type,
                                ai_session_id: p.aiSessionId,
                                ai_inference_id: p.aiDraftInferenceId
                            }
                        }
                    }), r(i)
                }, [f, m, o, r, u, t, d, p.aiDraftInferenceId, p.aiSessionId]);
                return {
                    showResearchModeToggle: f,
                    isResearchModeEnabled: m,
                    supportsConfigTypeChange: h,
                    toggleResearchMode: y
                }
            }
            let eb = {
                "web-only-enabled": {
                    button: {
                        colorPalette: void 0
                    },
                    icon: {
                        icon: n(515388).globeIcon,
                        colorPalette: "gray",
                        colorVariant: "accentPrimary",
                        reducedOpacity: !1
                    },
                    text: {
                        colorPalette: "gray",
                        colorVariant: "accentPrimary",
                        reducedOpacity: !1
                    }
                },
                "web-only-disabled": {
                    button: {
                        colorPalette: void 0
                    },
                    icon: {
                        icon: n(212509).u,
                        colorPalette: "gray",
                        colorVariant: "accentPrimary",
                        reducedOpacity: !0
                    },
                    text: {
                        colorPalette: "gray",
                        colorVariant: "accentPrimary",
                        reducedOpacity: !0
                    }
                },
                "web-only-not-supported": {
                    button: {
                        colorPalette: void 0
                    },
                    icon: null,
                    text: {
                        colorPalette: "gray",
                        colorVariant: "secondary",
                        reducedOpacity: !1
                    }
                },
                "custom-enabled": {
                    button: {
                        colorPalette: "blue"
                    },
                    icon: {
                        icon: n(515388).globeIcon,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary",
                        reducedOpacity: !1
                    },
                    text: {
                        colorPalette: "blue",
                        colorVariant: "accentPrimary",
                        reducedOpacity: !1
                    }
                },
                "custom-disabled": {
                    button: {
                        colorPalette: "blue"
                    },
                    icon: {
                        icon: n(212509).u,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary",
                        reducedOpacity: !0
                    },
                    text: {
                        colorPalette: "blue",
                        colorVariant: "accentPrimary",
                        reducedOpacity: !1
                    }
                },
                "custom-not-supported": {
                    button: {
                        colorPalette: "blue"
                    },
                    icon: null,
                    text: {
                        colorPalette: "blue",
                        colorVariant: "secondary",
                        reducedOpacity: !1
                    }
                },
                "default-enabled": {
                    button: {
                        colorPalette: void 0
                    },
                    icon: {
                        icon: n(515388).globeIcon,
                        colorPalette: "gray",
                        colorVariant: "accentPrimary",
                        reducedOpacity: !1
                    },
                    text: {
                        colorPalette: "gray",
                        colorVariant: "secondary",
                        reducedOpacity: !1
                    }
                },
                "default-disabled": {
                    button: {
                        colorPalette: void 0
                    },
                    icon: {
                        icon: n(212509).u,
                        colorPalette: void 0,
                        colorVariant: "disabled",
                        reducedOpacity: !1
                    },
                    text: {
                        colorPalette: "gray",
                        colorVariant: "secondary",
                        reducedOpacity: !1
                    }
                },
                "default-not-supported": {
                    button: {
                        colorPalette: void 0
                    },
                    icon: null,
                    text: {
                        colorPalette: "gray",
                        colorVariant: "secondary",
                        reducedOpacity: !1
                    }
                }
            };

            function eS(e) {
                let t, n, {
                    isCustomScope: i,
                    webSearchAllowed: o,
                    webSearchEnabled: a,
                    hasAiKnowledgeScope: s
                } = e;
                return t = s && a ? "web-only" : i ? "custom" : "default", n = o ? a ? "enabled" : "disabled" : "not-supported", `${t}-${n}`
            }
            let ev = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.96 1.94 12.09 12.1",
                    svg: (0, g.jsx)("path", {
                        d: "M3.142 2.332a.55.55 0 0 1 .695-.017l.081.077.228.264.006.011 8.773 10.234.056.082a.55.55 0 0 1-.818.702l-.081-.077-.58-.676a6.05 6.05 0 0 1-7.84-9.147l-.58-.677-.063-.091a.55.55 0 0 1 .123-.685m3.42 6.218c.048 1.194.25 2.247.539 3.016.167.445.353.766.532.967s.304.234.367.234.188-.033.367-.234c.179-.2.365-.522.532-.967.138-.364.252-.793.343-1.27L7.746 8.55zm-3.481 0a4.95 4.95 0 0 0 3.326 4.137 5.4 5.4 0 0 1-.336-.734c-.343-.912-.562-2.1-.61-3.403zm7.047 2.78q-.091.329-.2.623-.147.396-.336.734a5 5 0 0 0 1.191-.594zM4.38 4.623a4.93 4.93 0 0 0-1.3 2.826h2.38a14 14 0 0 1 .127-1.418zM6.56 7.45h.243l-.228-.265zM8 1.95a6.05 6.05 0 0 1 5.04 9.394l-.75-.876a4.9 4.9 0 0 0 .629-1.918h-2.274L9.42 7.12c-.07-1.058-.257-1.988-.52-2.685-.167-.445-.353-.767-.532-.968S8.063 3.233 8 3.233s-.188.033-.367.234c-.177.199-.362.516-.528.954l-.794-.928q.046-.093.096-.18-.096.033-.19.07l-.752-.877A6 6 0 0 1 8 1.95m1.592 1.363q.188.336.337.734c.343.912.562 2.1.61 3.403h2.38a4.95 4.95 0 0 0-3.327-4.137"
                    })
                },
                ex = (0, n(104509).wt)("globeSlashSmall", ev, "small"),
                ek = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.07 1.61 13.5 13.5",
                    svg: (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)("path", {
                            d: "M5.066 8.077a.463.463 0 1 1 0 .927.463.463 0 0 1 0-.927m0-1.544a.463.463 0 1 1 0 .927.463.463 0 0 1 0-.927"
                        }), (0, g.jsx)("path", {
                            d: "M1.222 1.757a.5.5 0 0 1 .707 0l.632.633a.5.5 0 0 0 .06.074l11.871 11.871a.5.5 0 0 1-.77.629l-2.016-2.016H2.75a.55.55 0 0 1-.547-.547V4.912c0-.413.136-.794.364-1.102L1.222 2.464a.5.5 0 0 1 0-.707m2.14 2.848a.8.8 0 0 0-.065.307v6.943h1.178v-1.616c0-.241.195-.437.437-.437h2.47c.242 0 .438.196.438.437v1.616h1.177v-1.616l-1.41-1.41a.461.461 0 1 1-.649-.648zm1.988 7.25h1.595v-1.178H5.35zm4.74 0h.522l-.521-.522zM8.231 3.053a1.86 1.86 0 0 1 1.86 1.86v2h1.847a1.86 1.86 0 0 1 1.859 1.86v3.453l-1.094-1.094v-2.36a.766.766 0 0 0-.765-.765H10.09v.513L8.997 7.426V4.912a.766.766 0 0 0-.766-.765H5.718L4.624 3.053z"
                        }), (0, g.jsx)("path", {
                            d: "M11.397 8.695a.463.463 0 1 1 0 .926.463.463 0 0 1 0-.926M7.228 4.99a.46.46 0 0 1 .207.874l-.62-.62a.46.46 0 0 1 .412-.255"
                        })]
                    })
                },
                eC = (0, n(104509).wt)("teamspaceSlashSmall", ek, "small");

            function eM({
                themeMode: e,
                shouldRenderHeadless: t,
                usesElevatedDarkModeBackground: i
            }) {
                if (!t) return "dark" === e ? i ? n(632079).Tj.gray.background.elevated : n(632079).Tj.background.secondary : n(632079).Tj.background.primary
            }
            let ej = (0, n(109939).YK)({
                    noWebSearchTooltip: {
                        id: "UnifiedChatContextFacepile.noWebSearchTooltip",
                        defaultMessage: "No web access"
                    },
                    noAppsAndIntegrationsTooltip: {
                        id: "UnifiedChatContextFacepile.noAppsAndIntegrationsTooltip",
                        defaultMessage: "No apps and integrations"
                    },
                    workspaceSourceFallback: {
                        id: "UnifiedChatContextFacepile.workspaceSourceFallback",
                        defaultMessage: "Workspace"
                    },
                    teamspaceSourceFallback: {
                        id: "UnifiedChatContextFacepile.teamspaceSourceFallback",
                        defaultMessage: "Teamspace"
                    },
                    pageSourceFallback: {
                        id: "UnifiedChatContextFacepile.pageSourceFallback",
                        defaultMessage: "Page"
                    },
                    notionSourceName: {
                        id: "UnifiedChatContextFacepile.notionSourceName",
                        defaultMessage: "Notion"
                    },
                    unknownSourceName: {
                        id: "UnifiedChatContextFacepile.unknownSourceName",
                        defaultMessage: "Connected source"
                    }
                }),
                eI = n(104509).Ev.sm,
                eA = {
                    chatgpt: "ChatGPT",
                    claude: "Claude",
                    composio: "Composio",
                    cursor: "Cursor",
                    devin: "Devin",
                    figma_make: "Figma Make",
                    github: "GitHub",
                    grok: "Grok",
                    hubspot: "HubSpot",
                    lovable: "Lovable",
                    make: "Make",
                    microsoft_365_copilot: "Microsoft 365 Copilot",
                    mistral: "Mistral",
                    notion: "Notion",
                    other: "Other",
                    perplexity: "Perplexity",
                    poke: "Poke",
                    vscode: "VS Code",
                    zapier: "Zapier"
                };

            function ew(e) {
                let {
                    sourcePickerProps: t,
                    controller: n
                } = e;
                return (0, g.jsx)(eT, {
                    sourcePickerProps: t,
                    controller: n
                })
            }
            let e_ = {
                display: "flex",
                alignItems: "center",
                pointerEvents: "auto"
            };

            function eT(e) {
                let {
                    sourcePickerProps: t,
                    controller: o
                } = e, a = (0, n(109939).tz)(), {
                    uiState: s
                } = o, {
                    searchScopes: r,
                    webSearchEnabled: l,
                    isCustomScope: c,
                    hasAiKnowledgeScope: d
                } = s, u = (0, n(853284).U)(), p = (0, n(682985).K8)(() => o.buttonPopupStore.state.open, [o.buttonPopupStore]), h = (0, i.useMemo)(() => (function(e, t) {
                    let {
                        includeWorkspaceSubscopes: i
                    } = t;
                    if (!i) {
                        let t = [];
                        return e.forEach((e, i) => {
                            switch (e.type) {
                                case "workspace":
                                    t.push({
                                        kind: "workspace",
                                        key: `workspace-${i}`
                                    });
                                    break;
                                case "teamspace":
                                    t.push({
                                        kind: "teamspace",
                                        teamId: e.teamId,
                                        key: `teamspace-${e.teamId}-${i}`
                                    });
                                    break;
                                default:
                                    {
                                        let o = (0, n(894658).vd)(e);o && t.push({
                                            kind: "connector",
                                            iconType: o,
                                            key: `connector-${o}-${i}`
                                        })
                                    }
                            }
                        }), t
                    }
                    let o = [],
                        a = [];
                    return e.forEach((e, t) => {
                        switch (e.type) {
                            case "workspace":
                                o.push({
                                    kind: "workspace",
                                    key: `workspace-${t}`
                                });
                                break;
                            case "teamspace":
                                o.push({
                                    kind: "teamspace",
                                    teamId: e.teamId,
                                    key: `teamspace-${e.teamId}-${t}`
                                });
                                break;
                            case "page":
                                o.push({
                                    kind: "page",
                                    pageId: e.pageId,
                                    key: `page-${e.pageId}-${t}`
                                });
                                break;
                            case "collection":
                                o.push({
                                    kind: "collection",
                                    pageId: e.pageId,
                                    collectionId: e.collectionId,
                                    key: `collection-${e.collectionId}-${t}`
                                });
                                break;
                            default:
                                {
                                    let i = (0, n(894658).vd)(e);i && a.push({
                                        kind: "connector",
                                        iconType: i,
                                        key: `connector-${i}-${t}`
                                    })
                                }
                        }
                    }), [...o, ...a]
                })(r, {
                    includeWorkspaceSubscopes: u
                }), [u, r]), m = h.length > 3, f = m ? h.slice(0, 2) : h.slice(0, 3), y = m ? h.slice(2) : [], b = u && r.some(e => "teamspace" === e.type || "page" === e.type || "collection" === e.type), S = !l, v = d && !b, x = (0, i.useCallback)(() => {
                    o.canRenderPopup && (o.onOriginClick(), o.buttonPopupStore.setState({ ...o.buttonPopupStore.state,
                        open: !0
                    }))
                }, [o]), k = (0, i.useCallback)(e => {
                    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), x())
                }, [x]);
                if (!(c || S || v)) return null;
                let C = +!!S + +!!v,
                    M = C + f.length + +!!m;
                return (0, g.jsxs)("div", {
                    style: { ...e_,
                        cursor: o.canRenderPopup ? "pointer" : "default"
                    },
                    role: "button",
                    tabIndex: o.canRenderPopup ? 0 : -1,
                    "aria-haspopup": "menu",
                    "aria-expanded": p,
                    "aria-label": s.scopeName,
                    "aria-disabled": !o.canRenderPopup,
                    onClick: x,
                    onKeyDown: k,
                    children: [S ? (0, g.jsx)(eP, {
                        index: 0,
                        totalItems: M,
                        aiChatFeatureController: t.aiChatFeatureController,
                        tooltip: a.formatMessage(ej.noWebSearchTooltip),
                        children: (0, g.jsx)(n(16275).I, {
                            icon: ex,
                            size: "sm",
                            colorVariant: "tertiary"
                        })
                    }) : void 0, v ? (0, g.jsx)(eP, {
                        index: +!!S,
                        totalItems: M,
                        aiChatFeatureController: t.aiChatFeatureController,
                        tooltip: a.formatMessage(ej.noAppsAndIntegrationsTooltip),
                        children: (0, g.jsx)(n(16275).I, {
                            icon: eC,
                            size: "sm",
                            colorVariant: "tertiary"
                        })
                    }) : void 0, f.map((e, n) => (0, g.jsx)(eP, {
                        index: n + C,
                        totalItems: M,
                        aiChatFeatureController: t.aiChatFeatureController,
                        tooltip: (0, g.jsx)(eR, {
                            descriptor: e,
                            spaceStore: t.spaceStore,
                            intl: a
                        }),
                        children: (0, g.jsx)(eF, {
                            descriptor: e,
                            spaceStore: t.spaceStore
                        })
                    }, e.key)), m ? (0, g.jsx)(eE, {
                        index: C + f.length,
                        totalItems: M,
                        aiChatFeatureController: t.aiChatFeatureController,
                        tooltip: y.length ? (0, g.jsx)(g.Fragment, {
                            children: y.map((e, n) => (0, g.jsxs)(i.Fragment, {
                                children: [(0, g.jsx)(eR, {
                                    descriptor: e,
                                    spaceStore: t.spaceStore,
                                    intl: a
                                }), n < y.length - 1 ? (0, g.jsx)("br", {}) : null]
                            }, `${e.key}-tooltip`))
                        }) : void 0
                    }) : null]
                })
            }

            function eP(e) {
                let {
                    index: t,
                    totalItems: i,
                    aiChatFeatureController: o,
                    children: a,
                    highlighted: s,
                    tooltip: r
                } = e, l = (0, n(960253).e)(), c = (0, n(960253).I)(() => {
                    let e = eM({
                            themeMode: l,
                            shouldRenderHeadless: o.shouldRenderHeadless,
                            usesElevatedDarkModeBackground: o.usesElevatedDarkModeBackground
                        }) ? ? n(632079).Tj.background.primary,
                        a = "dark" === l ? n(632079).Tj.palette.gray[400] : n(632079).Tj.background.tertiary;
                    return {
                        iconWrapper: {
                            minWidth: 28,
                            height: 28,
                            borderRadius: 14,
                            border: `2px solid ${e}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "none",
                            paddingInlineStart: 4,
                            paddingInlineEnd: 4,
                            gap: 4,
                            position: "relative",
                            overflow: "hidden",
                            background: s ? n(632079).Tj.blue.background.secondary : a,
                            marginInlineStart: 0 === t ? 0 : -6,
                            zIndex: i - t
                        }
                    }
                }, [t, i, s, o.shouldRenderHeadless, o.usesElevatedDarkModeBackground, l]);
                return (0, g.jsx)(n(51831).m, {
                    content: () => r,
                    placement: "top",
                    textWrap: !1,
                    children: e => (0, g.jsx)("div", { ...e,
                        style: c.iconWrapper,
                        children: a
                    })
                })
            }

            function eE(e) {
                let {
                    index: t,
                    totalItems: i,
                    aiChatFeatureController: o,
                    tooltip: a
                } = e;
                return (0, g.jsx)(eP, {
                    index: t,
                    totalItems: i,
                    aiChatFeatureController: o,
                    tooltip: a ? ? "",
                    children: (0, g.jsx)(n(16275).I, {
                        icon: n(361226).ellipsisSmallIcon,
                        size: "sm",
                        colorVariant: "secondary"
                    })
                })
            }

            function eF(e) {
                let {
                    descriptor: t,
                    spaceStore: n
                } = e;
                switch (t.kind) {
                    case "workspace":
                        return (0, g.jsx)(ez, {
                            spaceStore: n
                        });
                    case "teamspace":
                        return (0, g.jsx)(eK, {
                            spaceStore: n,
                            teamId: t.teamId
                        });
                    case "page":
                    case "collection":
                        return (0, g.jsx)(eV, {
                            spaceStore: n,
                            pageId: t.pageId
                        });
                    case "connector":
                        return (0, g.jsx)(eO, {
                            iconType: t.iconType
                        });
                    default:
                        return null
                }
            }

            function eR(e) {
                let {
                    descriptor: t,
                    spaceStore: n,
                    intl: i
                } = e;
                switch (t.kind) {
                    case "workspace":
                        return (0, g.jsx)(eD, {
                            spaceStore: n,
                            intl: i
                        });
                    case "teamspace":
                        return (0, g.jsx)(eB, {
                            spaceStore: n,
                            teamId: t.teamId,
                            intl: i
                        });
                    case "page":
                    case "collection":
                        return (0, g.jsx)(eU, {
                            spaceStore: n,
                            pageId: t.pageId,
                            intl: i
                        });
                    case "connector":
                        return (0, g.jsx)(eN, {
                            iconType: t.iconType,
                            intl: i
                        });
                    default:
                        return null
                }
            }

            function eD(e) {
                let {
                    spaceStore: t,
                    intl: i
                } = e, o = (0, n(682985).K8)(() => t.getName(), [t]);
                return (0, g.jsx)("span", {
                    children: o ? ? i.formatMessage(ej.workspaceSourceFallback)
                })
            }

            function eB(e) {
                let {
                    spaceStore: t,
                    teamId: i,
                    intl: o
                } = e, a = n(681735).h.createChildStore(t, {
                    table: n(832375).yKj,
                    id: i
                }), s = (0, n(682985).K8)(() => null == a ? void 0 : a.getName(), [a]);
                return (0, g.jsx)("span", {
                    children: s ? ? o.formatMessage(ej.teamspaceSourceFallback)
                })
            }

            function eN(e) {
                let {
                    iconType: t,
                    intl: i
                } = e;
                return (0, g.jsx)("span", {
                    children: function(e, t) {
                        return "notion" === e ? t.formatMessage(ej.notionSourceName) : (0, T().SC)(e) ? n(590212).w0[e] : "chatgpt" === e || "claude" === e || "composio" === e || "cursor" === e || "devin" === e || "figma_make" === e || "github" === e || "grok" === e || "hubspot" === e || "lovable" === e || "make" === e || "microsoft_365_copilot" === e || "mistral" === e || "notion" === e || "other" === e || "perplexity" === e || "poke" === e || "vscode" === e || "zapier" === e ? eA[e] : t.formatMessage(ej.unknownSourceName)
                    }(t, i)
                })
            }

            function eU(e) {
                let {
                    spaceStore: t,
                    pageId: i,
                    intl: o
                } = e, a = n(970831).B.createChildStore(t, {
                    table: n(832375).evP,
                    id: i
                }), s = (0, n(682985).K8)(() => null == a ? void 0 : a.getRenderTitle({
                    userTimeZone: o.locale,
                    intl: o
                }), [a, o]);
                return (0, g.jsx)("span", {
                    children: s ? ? o.formatMessage(ej.pageSourceFallback)
                })
            }

            function ez(e) {
                let {
                    spaceStore: t
                } = e, i = (0, n(682985).K8)(() => t.getIcon(), [t]);
                return i ? (0, g.jsx)(n(569553).B6, {
                    icon: i,
                    size: eI,
                    disabled: !0,
                    isEmptyPage: !1
                }) : (0, g.jsx)(n(16275).I, {
                    icon: n(767816).teamspaceIcon,
                    size: "sm",
                    colorVariant: "secondary"
                })
            }

            function eK(e) {
                let {
                    spaceStore: t,
                    teamId: i
                } = e, o = n(681735).h.createChildStore(t, {
                    table: n(832375).yKj,
                    id: i
                }), a = (0, n(682985).K8)(() => null == o ? void 0 : o.getIcon(), [o]);
                return a ? (0, g.jsx)(n(569553).B6, {
                    icon: a,
                    size: eI,
                    disabled: !0,
                    isEmptyPage: !1
                }) : (0, g.jsx)(n(16275).I, {
                    icon: n(767816).teamspaceIcon,
                    size: "sm",
                    colorVariant: "secondary"
                })
            }

            function eV(e) {
                let {
                    spaceStore: t,
                    pageId: i
                } = e, o = n(970831).B.createChildStore(t, {
                    table: n(832375).evP,
                    id: i
                }), a = (0, n(682985).K8)(() => null == o ? void 0 : o.getIcon(), [o]), s = (0, n(682985).K8)(() => (null == o ? void 0 : o.isEmptyPage()) ? ? !1, [o]);
                return (0, g.jsx)(n(569553).B6, {
                    icon: a,
                    iconRecordCategory: "pageBlock",
                    size: eI,
                    disabled: !0,
                    isEmptyPage: s
                })
            }

            function eO(e) {
                let {
                    iconType: t
                } = e;
                return (0, g.jsx)(_().Q, {
                    iconGroup: (0, n(894658).e1)(t),
                    style: {
                        width: eI,
                        height: eI
                    },
                    variantName: "default"
                })
            }
            n(908872);
            let eL = (0, n(109939).YK)({
                    modelTooltip: {
                        id: "UnifiedChatModelButton.tooltip",
                        defaultMessage: "Change AI model"
                    },
                    modelPickerDisabledForConfig: {
                        id: "UnifiedChatModelButton.modelPickerDisabledForConfig",
                        defaultMessage: "Model selection is not available for research mode"
                    },
                    modelPickerDisabledForThreadMode: {
                        id: "UnifiedChatModelButton.modelPickerDisabledForThreadMode",
                        defaultMessage: "Response in progress"
                    },
                    existingThreadModelPickerDisabled: {
                        id: "UnifiedChatModelButton.existingThreadModelPickerDisabled",
                        defaultMessage: "Start a new chat to switch models"
                    }
                }),
                eW = {
                    cursor: "default",
                    pointerEvents: "none"
                };

            function eq(e) {
                let {
                    aiChatFeatureController: t,
                    config: o,
                    clientStore: a,
                    inputMode: s,
                    onChangeNextConfig: r,
                    spaceStore: l,
                    threadStore: c,
                    threadMode: d,
                    compact: u = !1
                } = e, p = (0, i.useMemo)(() => {
                    if ("workflow" === o.type && o.modelFromUser) return (0, n(220800).kD)(o)
                }, [o]), h = (0, n(109939).tz)(), m = (0, n(533992).v3)(), y = (0, n(973567).N)({
                    threadStore: c,
                    spaceId: l.id
                }), b = (0, n(682985).uB)(void 0, n(510969).A), {
                    modelTooltipMessage: S,
                    modelPickerLimitation: v
                } = (0, i.useMemo)(() => {
                    let e = t.isModelPickerLimited({
                        mode: s,
                        threadMode: d,
                        config: o
                    });
                    return {
                        modelPickerLimitation: e,
                        modelTooltipMessage: function(e) {
                            let {
                                intl: t,
                                modelPickerLimitation: n
                            } = e;
                            if (void 0 === n) return t.formatMessage(eL.modelTooltip);
                            switch (n.reason) {
                                case "custom_agent_config":
                                case "researcher_config":
                                    return t.formatMessage(eL.modelPickerDisabledForConfig);
                                case "running_inference":
                                    return t.formatMessage(eL.modelPickerDisabledForThreadMode);
                                case "existing_thread":
                                    return t.formatMessage(eL.existingThreadModelPickerDisabled)
                            }
                        }({
                            intl: h,
                            modelPickerLimitation: e
                        })
                    }
                }, [t, s, d, o, h]), {
                    modelName: x,
                    modelColor: k,
                    modelFamily: C
                } = (0, n(336399).R)({
                    config: o,
                    agentModelConfig: p,
                    intl: h
                }), M = (0, i.useMemo)(() => ({
                    close: () => {
                        b.setState({
                            open: !1
                        })
                    }
                }), [b]), j = (0, n(573271).w)({
                    aiChatFeatureController: t,
                    buttonPopupParent: M,
                    clientStore: a,
                    config: o,
                    environment: m,
                    inputMode: s,
                    threadMode: d,
                    onChangeNextConfig: r,
                    spaceStore: l,
                    inferenceInfo: y
                }), I = (0, n(960253).e)(), A = (0, n(107332).P)({
                    variant: "tint",
                    colorPalette: "gemini" === C ? void 0 : (null == k ? void 0 : k.buttonColor) ? ? void 0
                }), w = (0, i.useMemo)(() => ("gemini" === C ? "light" === I ? "#F5F7FE" : "#2F3951" : void 0) ? ? ("string" == typeof A.resting.background ? A.resting.background : n(632079).Tj.background.tertiaryTranslucent), [C, I, A.resting.background]), {
                    pressed: _
                } = (0, n(133251)._S)({
                    color: w
                }), T = (0, n(960253).I)(() => {
                    let e = {
                        background: "transparent"
                    };
                    return {
                        tooltipMinWidth: (null == v ? void 0 : v.action) === "warn" || (null == v ? void 0 : v.action) === "disable" ? {
                            minWidth: 150
                        } : {},
                        button: { ...e,
                            borderRadius: 50,
                            height: 28,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            pointerEvents: "auto",
                            minWidth: 0,
                            maxWidth: 200,
                            paddingInlineStart: void 0 !== C ? 8 : 12,
                            paddingInlineEnd: 12
                        },
                        compactButton: { ...e,
                            borderRadius: "50%",
                            width: 28,
                            height: 28,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 0,
                            minWidth: 0,
                            pointerEvents: "auto"
                        },
                        simplifiedHoveredButton: {
                            background: w
                        },
                        simplifiedPressedButton: {
                            background: _
                        }
                    }
                }, [C, null == v ? void 0 : v.action, w, _]), P = (0, i.useCallback)(() => {
                    n(305721).trackSourceMenuOpened({
                        button_name: "source_menu_model_diff",
                        from: t.analyticsFromSourceForActions,
                        model: null == p ? void 0 : p.type,
                        inferenceInfo: y
                    }), (0, n(471e3).I)({
                        environment: m
                    })
                }, [m, t.analyticsFromSourceForActions, null == p ? void 0 : p.type, y]), {
                    isActive: E,
                    activate: F
                } = f(), R = j.reduce((e, t) => e + t.items.length, 0);
                return t.isChatCompletelyDisabled(s) || !t.showModelButton ? null : (null == v ? void 0 : v.action) !== "hide" && R >= 1 ? (0, g.jsx)(n(51831).m, {
                    placement: "bottom",
                    allowHover: !0,
                    forceVisibleState: !!E && void 0,
                    textWrap: (null == v ? void 0 : v.action) === "warn" || (null == v ? void 0 : v.action) === "disable",
                    style: T.tooltipMinWidth,
                    content: () => (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)("div", {
                            children: S
                        }), (null == v ? void 0 : v.reason) !== "researcher_config" && void 0 !== x ? (0, g.jsx)(n(111010).D, {
                            colorVariant: "secondary",
                            children: x
                        }) : void 0]
                    }),
                    children: e => R > 1 ? (0, g.jsx)(n(656252).A, {
                        buttonPopupStore: b,
                        popupType: t.adaptiveMenuPopupType,
                        originGap: 2,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        onClick: P,
                        content: () => (0, g.jsx)(n(813152).J, {
                            buttonPopupParent: M,
                            extensionPopupButtonEvents: {},
                            sections: j,
                            menuType: t.adaptiveMenuType
                        }),
                        children: a => (0, g.jsx)(n(265779).E, { ...(0, n(63390).A)((0, n(63390).A)({
                                onMouseEnter: F,
                                onFocus: F
                            }, a), e),
                            style: u ? T.compactButton : T.button,
                            hoveredStyle: T.simplifiedHoveredButton,
                            pressedStyle: T.simplifiedPressedButton,
                            disabled: (null == v ? void 0 : v.action) === "disable",
                            testId: "unified-chat-model-button",
                            children: u ? void 0 !== C ? (0, g.jsx)(n(437225).H, {
                                modelFamily: C,
                                defaultNoAiFace: !1
                            }) : (0, g.jsx)(n(16275).I, {
                                icon: n(273344).aiFaceIcon,
                                colorVariant: "secondary",
                                style: {
                                    width: 20,
                                    height: 20
                                }
                            }) : "council-chat" === o.type && o.members.length > 0 ? (0, g.jsx)(n(4458).fI, {
                                gap: 4,
                                alignItems: "center",
                                children: o.members.map((e, t) => (0, g.jsxs)(i.Fragment, {
                                    children: [t > 0 ? (0, g.jsx)(n(111010).D, {
                                        styleKey: "bodySm",
                                        colorVariant: "secondary",
                                        children: "+"
                                    }) : void 0, (0, g.jsx)(n(437225).H, {
                                        modelFamily: e.modelFamily
                                    })]
                                }, e.memberId))
                            }) : (0, g.jsxs)(g.Fragment, {
                                children: [void 0 !== C ? (0, g.jsx)(n(437225).H, {
                                    modelFamily: C,
                                    defaultNoAiFace: !0
                                }) : void 0, void 0 !== x ? (0, g.jsx)(n(111010).D, {
                                    styleKey: t.unifiedChatInputModeButtonStyleKey,
                                    colorVariant: "secondary",
                                    lineClamp: 1,
                                    children: x
                                }) : void 0]
                            })
                        })
                    }) : (0, g.jsx)(n(265779).E, {
                        style: { ...T.button,
                            ...eW
                        },
                        colorPalette: "blue",
                        ...(0, n(63390).A)({
                            onMouseEnter: F,
                            onFocus: F
                        }, e),
                        children: void 0 !== x ? (0, g.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            colorPalette: "blue",
                            colorVariant: "secondary",
                            lineClamp: 1,
                            children: x
                        }) : void 0
                    })
                }) : null
            }
            let eH = {
                button: {
                    pointerEvents: "auto",
                    borderRadius: "50%",
                    width: 28,
                    height: 28
                },
                hoverButton: {
                    backgroundColor: n(632079).Tj.buttonHoveredBackground
                }
            };

            function e$(e) {
                let {
                    testId: t,
                    tooltipText: i,
                    tooltipCaption: o,
                    icon: a,
                    ...s
                } = e, r = (0, n(109939).tz)(), {
                    isActive: l,
                    activate: c
                } = f();
                return (0, g.jsx)(n(51831).m, {
                    placement: "bottom",
                    allowHover: !0,
                    forceVisibleState: !!l && void 0,
                    content: () => (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)("div", {
                            children: r.formatMessage(i)
                        }), o ? (0, g.jsx)(n(111010).D, {
                            colorVariant: "secondary",
                            children: r.formatMessage(o)
                        }) : void 0]
                    }),
                    children: e => (0, g.jsx)(n(374533).A, { ...(0, n(63390).A)((0, n(63390).A)({
                            onMouseEnter: c,
                            onFocus: c
                        }, e), s),
                        ariaLabel: r.formatMessage(i),
                        icon: () => (0, g.jsx)(n(16275).I, {
                            icon: a,
                            colorVariant: "secondary",
                            size: "default"
                        }),
                        style: eH.button,
                        hoveredStyle: eH.hoverButton,
                        testId: t
                    })
                })
            }
            let eY = (0, n(109939).YK)({
                tooltipLabel: {
                    id: "UnifiedChatModeMenuButton.tooltipLabel",
                    defaultMessage: "Settings"
                }
            });

            function eJ(e) {
                let {
                    aiChatFeatureController: t,
                    onMenuOpenChange: i,
                    controller: o
                } = e;
                return o.canRenderPopup ? (0, g.jsx)(n(656252).A, {
                    buttonPopupStore: o.buttonPopupStore,
                    popupType: t.adaptiveMenuPopupType,
                    originGap: 4,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    bottomSheetDisableDrag: !1,
                    onOpen: () => null == i ? void 0 : i(!0),
                    onClose: () => null == i ? void 0 : i(!1),
                    onClick: o.onOriginClick,
                    content: o.renderMenu,
                    children: e => (0, g.jsx)(e$, { ...e,
                        icon: n(213039).M,
                        testId: "unified-chat-mode-menu-button",
                        tooltipText: eY.tooltipLabel
                    })
                }) : null
            }

            function eG() {
                let e = (0, n(596663).k)(),
                    t = (0, n(83208).X)("ai_multi_player_chat");
                return e || t
            }
            n(16280);
            let eQ = "no-results",
                eX = (0, n(109939).YK)({
                    inputPlaceholder: {
                        id: "AgentChatContextChips.menu.searchPlaceholder",
                        defaultMessage: "Search…"
                    },
                    usersSectionTitle: {
                        id: "AgentChatContextChips.menu.usersSectionTitle",
                        defaultMessage: "Users"
                    },
                    pagesSectionTitle: {
                        id: "AgentChatContextChips.menu.pagesSectionTitle",
                        defaultMessage: "Pages"
                    },
                    agentsSectionTitle: {
                        id: "AgentChatContextChips.menu.agentsSectionTitle",
                        defaultMessage: "Agents"
                    },
                    skillsSectionTitle: {
                        id: "AgentChatContextChips.menu.skillsSectionTitle",
                        defaultMessage: "Skills"
                    },
                    editSkillTooltip: {
                        id: "AgentChatContextChips.menu.editSkillTooltip",
                        defaultMessage: "Edit skill"
                    },
                    noResultsMessage: {
                        id: "AgentChatContextChips.menu.noResults",
                        defaultMessage: "No results"
                    },
                    searchResultsAnnouncement: {
                        id: "AgentChatContextChips.menu.searchResultsAnnouncement",
                        defaultMessage: "{count, plural, =0 {No results} one {1 result} other {# results}}"
                    }
                }),
                eZ = {
                    paddingBlockStart: 8
                },
                e0 = {
                    opacity: 0,
                    transition: "opacity 100ms ease"
                },
                e1 = {
                    opacity: 1
                };

            function e2({
                store: e,
                environment: t,
                isVisible: o
            }) {
                let a = (0, n(109939).tz)(),
                    s = (0, i.useCallback)(i => {
                        i.stopPropagation(), i.preventDefault(), (0, n(545586).navigateToBlock)({
                            environment: t,
                            store: e,
                            pageVisitSource: n(254656).y8.AIChat
                        })
                    }, [t, e]);
                return (0, g.jsx)("div", {
                    style: { ...e0,
                        ...o && e1
                    },
                    children: (0, g.jsx)(n(51831).m, {
                        content: () => a.formatMessage(eX.editSkillTooltip),
                        children: e => (0, g.jsx)(n(374533).A, { ...e,
                            icon: n(753114).pencilLineSmallIcon,
                            onClick: s,
                            size: "sm",
                            ariaLabel: a.formatMessage(eX.editSkillTooltip)
                        })
                    })
                })
            }

            function e5(e) {
                let {
                    mentions: t,
                    onChangeMentions: o,
                    config: a,
                    menuType: s,
                    threadStore: r,
                    spaceStore: l,
                    disableAgentMentions: c
                } = e, d = "workflow" === a.type ? a.model : void 0, u = (0, n(533992).v3)(), h = (0, n(109939).tz)(), [m, f] = (0, i.useState)(""), y = (0, n(973567).N)({
                    threadStore: r,
                    spaceId: l.id
                }), [b, S] = (0, n(739271).s)(), v = (0, n(682985).O$)(n(728372).AppStoreMainEditorCurrentBlockStore), x = (0, n(682985).O$)(n(475097).default.peekTargetStore), {
                    results: k,
                    isLoading: C
                } = (0, n(845077).uE)({
                    query: m,
                    disabled: !1,
                    useMentionMenuStore: !1,
                    open: !0
                }), {
                    results: M,
                    isLoading: j
                } = (0, n(118416).h)(m, {
                    useMentionMenuStore: !1,
                    open: !0
                }, {
                    includeDataSources: !1
                }), {
                    results: I,
                    isLoading: A
                } = (0, n(845077).oY)({
                    query: m,
                    environment: u,
                    useMentionMenuStore: !1,
                    open: !0,
                    disabled: c
                }), w = (0, n(828294).N)("ai_prompt_pages"), _ = (0, n(682985).K8)(() => {
                    if (!w) return new Set;
                    let e = n(771827).x.getPromptsState({
                        userId: u.currentUser.id,
                        spaceId: l.id
                    });
                    if (!(null != e && e.categories)) return new Set;
                    let t = new Set;
                    for (let n of e.categories.createdByMe.items) t.add(n.blockId);
                    for (let n of e.categories.shared.items) t.add(n);
                    for (let n of e.categories.teamspaces.items) t.add(n);
                    for (let n of e.categories.workspace.items) t.add(n);
                    return t
                }, [u.currentUser.id, w, l.id]), T = (0, n(682985).K8)(() => {
                    if (!w) return [];
                    let e = n(771827).x.getPromptsState({
                        userId: u.currentUser.id,
                        spaceId: l.id
                    });
                    if (!(null != e && e.categories)) return [];
                    let t = [..._],
                        i = new Map;
                    if (e.usage)
                        for (let t of e.usage) i.set(t.promptBlockId, t.lastUsedTime);
                    return t.sort((e, t) => {
                        let n = i.get(e) ? ? 0;
                        return (i.get(t) ? ? 0) - n
                    }), t.slice(0, 5)
                }, [_, w, u.currentUser.id, l.id]), P = (0, i.useMemo)(() => {
                    if (!w || "" === m) return new Set;
                    let e = new Set;
                    for (let {
                            store: t
                        } of M)(t.isAiSkill() || _.has(t.id)) && e.add(t.id);
                    return e
                }, [_, w, M, m]), E = (0, i.useMemo)(() => {
                    let e = new Set(P);
                    for (let t of T) e.add(t);
                    return e
                }, [T, P]), F = (0, i.useMemo)(() => {
                    if (!w) return;
                    if ("" === m) {
                        let e = T.filter(e => !t.has({
                            id: e,
                            table: n(832375).evP
                        }));
                        if (0 === e.length) return;
                        return {
                            key: "skills",
                            items: e.map(e => {
                                let i = new(n(970831)).B(u, {
                                    table: n(832375).evP,
                                    id: e
                                });
                                return {
                                    key: e,
                                    render: e => (0, g.jsx)(n(103558).A, { ...e,
                                        store: i,
                                        showVerifiedPageBadge: !0,
                                        hidePath: !0,
                                        right: (0, g.jsx)(e2, {
                                            store: i,
                                            environment: u,
                                            isVisible: !!e.focused
                                        })
                                    }),
                                    action: () => {
                                        let e = i.getModel();
                                        if (!e) return;
                                        let a = new(n(227318)).d(t);
                                        a.add(e.pointer), n(305721).trackMentionAdded({
                                            mention: e.pointer,
                                            model: d,
                                            inferenceInfo: y
                                        }), o(a)
                                    }
                                }
                            }),
                            render: e => (0, g.jsx)(n(844565).A, { ...e,
                                title: (0, g.jsx)(n(109939).sA, { ...eX.skillsSectionTitle
                                })
                            })
                        }
                    }
                    let e = M.filter(({
                        store: e
                    }) => P.has(e.id)).filter(({
                        store: e
                    }) => !t.has({
                        id: e.id,
                        table: n(832375).evP
                    }));
                    if (0 !== e.length) return {
                        key: "skills",
                        items: e.map(({
                            store: e
                        }) => ({
                            key: e.id,
                            render: t => (0, g.jsx)(n(103558).A, { ...t,
                                store: e,
                                showVerifiedPageBadge: !0,
                                hidePath: !0,
                                right: (0, g.jsx)(e2, {
                                    store: e,
                                    environment: u,
                                    isVisible: !!t.focused
                                })
                            }),
                            action: () => {
                                let i = e.getModel();
                                if (!i) return;
                                let a = new(n(227318)).d(t);
                                a.add(i.pointer), n(305721).trackMentionAdded({
                                    mention: i.pointer,
                                    model: d,
                                    inferenceInfo: y
                                }), o(a)
                            }
                        })),
                        render: e => (0, g.jsx)(n(844565).A, { ...e,
                            title: (0, g.jsx)(n(109939).sA, { ...eX.skillsSectionTitle
                            })
                        })
                    }
                }, [d, T, u, y, w, t, o, M, m, P]), R = (0, i.useMemo)(() => {
                    if (C) return {
                        key: "loading-users",
                        items: [{
                            key: "loading",
                            render: () => (0, g.jsx)(n(200261).A, {}),
                            action: () => {}
                        }],
                        render: e => (0, g.jsx)(n(844565).A, { ...e,
                            title: (0, g.jsx)(n(109939).sA, { ...eX.usersSectionTitle
                            })
                        })
                    };
                    let e = k.filter(e => !t.has({
                        id: e.id,
                        table: n(832375).oo9
                    }));
                    if (0 !== e.length) return {
                        key: "users",
                        items: e.map(e => ({
                            key: e.id,
                            render: t => (0, i.createElement)(n(634740).i, { ...t,
                                key: e.id,
                                user: e
                            }),
                            action: () => {
                                let {
                                    model: i
                                } = n(993189).Fvx.create(e), a = new(n(227318)).d(t);
                                a.add(i.pointer), n(305721).trackMentionAdded({
                                    mention: i.pointer,
                                    model: d,
                                    inferenceInfo: y
                                }), o(a)
                            }
                        })),
                        render: e => (0, g.jsx)(n(844565).A, { ...e,
                            title: (0, g.jsx)(n(109939).sA, { ...eX.usersSectionTitle
                            })
                        })
                    }
                }, [d, y, C, t, o, k]), D = (0, i.useMemo)(() => {
                    if (j) return {
                        key: "loading-pages",
                        items: [{
                            key: "loading",
                            render: () => (0, g.jsx)(n(200261).A, {}),
                            action: () => {}
                        }],
                        render: e => (0, g.jsx)(n(844565).A, { ...e,
                            title: (0, g.jsx)(n(109939).sA, { ...eX.pagesSectionTitle
                            })
                        })
                    };
                    let e = M.filter(({
                            store: e
                        }) => !t.has({
                            id: e.id,
                            table: n(832375).evP
                        }) && !E.has(e.id)),
                        i = [];
                    "" === m && (x && !t.has({
                        id: x.id,
                        table: n(832375).evP
                    }) && i.push(x), v && !t.has({
                        id: v.id,
                        table: n(832375).evP
                    }) && i.push(v));
                    let a = new(n(227318)).d(i.map(e => e.pointer)),
                        s = [...i, ...e.filter(({
                            store: e
                        }) => !a.has(e.pointer)).map(e => e.store)];
                    if (0 !== s.length) return {
                        key: "pages",
                        items: s.filter(p().O9).map(e => ({
                            key: e.id,
                            render: t => (0, g.jsx)(n(103558).A, { ...t,
                                store: e,
                                showVerifiedPageBadge: !0
                            }),
                            action: () => {
                                let i = e.getModel();
                                if (!i) throw Error("Expected to find model");
                                let a = new(n(227318)).d(t);
                                a.add(i.pointer), n(305721).trackMentionAdded({
                                    mention: i.pointer,
                                    model: d,
                                    inferenceInfo: y
                                }), o(a)
                            }
                        })),
                        render: e => (0, g.jsx)(n(844565).A, { ...e,
                            title: (0, g.jsx)(n(109939).sA, { ...eX.pagesSectionTitle
                            })
                        })
                    }
                }, [d, E, y, v, t, o, M, j, x, m]), B = (0, i.useMemo)(() => {
                    if (A) return {
                        key: "loading-workflows",
                        items: [{
                            key: "loading",
                            render: () => (0, g.jsx)(n(200261).A, {}),
                            action: () => {}
                        }],
                        render: e => (0, g.jsx)(n(844565).A, { ...e,
                            title: (0, g.jsx)(n(109939).sA, { ...eX.agentsSectionTitle
                            })
                        })
                    };
                    let e = I.filter(e => !t.has(e.workflowStore.pointer));
                    if (0 !== e.length) return {
                        key: "workflows",
                        items: e.filter(e => {
                            var t;
                            return !!(null == e || null == (t = e.workflowStore) ? void 0 : t.id)
                        }).map(e => {
                            let a = e.workflowStore.id;
                            return {
                                key: a,
                                render: t => (0, i.createElement)(n(864728).M, { ...t,
                                    key: a,
                                    name: e.name,
                                    icon: e.icon
                                }),
                                action: () => {
                                    let i = new(n(227318)).d(t);
                                    i.add(e.workflowStore.pointer), n(305721).trackMentionAdded({
                                        mention: e.workflowStore.pointer,
                                        model: d,
                                        inferenceInfo: y
                                    }), o(i)
                                }
                            }
                        }),
                        render: e => (0, g.jsx)(n(844565).A, { ...e,
                            title: (0, g.jsx)(n(109939).sA, { ...eX.agentsSectionTitle
                            })
                        })
                    }
                }, [d, I, y, t, o, A]), N = (0, i.useMemo)(() => ({
                    key: eQ,
                    items: [{
                        key: eQ,
                        action: () => {},
                        render: e => (0, g.jsx)(n(636518).Ay, { ...e,
                            title: (0, g.jsx)(n(109939).sA, { ...eX.noResultsMessage
                            })
                        })
                    }],
                    render: e => (0, g.jsx)(n(844565).A, { ...e
                    })
                }), []), U = (0, i.useMemo)(() => {
                    let e = R || D || B || F ? (0, n(381453).oE)([F, D, B, R]) : [N];
                    return (0, n(381453).oE)([{
                        key: "input-section",
                        render: e => (0, g.jsx)(n(844565).A, { ...e
                        }),
                        items: [{
                            key: "input",
                            render: e => (0, g.jsx)(n(310324).Ay, { ...e,
                                ...b,
                                focus: !0,
                                placeholder: h.formatMessage(eX.inputPlaceholder),
                                value: m,
                                onChange: e => {
                                    f(e.target.value)
                                },
                                ignoreKeyboardMode: !0,
                                style: eZ
                            }),
                            action: () => {}
                        }]
                    }, ...e])
                }, [b, h, D, m, F, R, B, N]), {
                    announce: z
                } = (0, n(813367).U)(), K = (0, i.useMemo)(() => U.filter(e => "input-section" !== e.key && e.key !== eQ).reduce((e, t) => e + t.items.length, 0), [U]);
                return (0, i.useEffect)(() => {
                    m && z(h.formatMessage(eX.searchResultsAnnouncement, {
                        count: K
                    }))
                }, [m, K, z, h]), (0, g.jsx)(n(747369).A, {
                    menuType: s,
                    width: s === n(649476).gu.Popup ? (0, n(237494).W)() : void 0,
                    maxHeight: s === n(649476).gu.Popup ? 300 : void 0,
                    hideMobileTopbar: !0,
                    children: (0, g.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        initialFocus: 1,
                        sections: U,
                        comboboxProps: S
                    })
                })
            }
            let e9 = (0, n(109939).YK)({
                    tooltipLabel: {
                        id: "UnifiedChatPlusMenuButton.tooltipLabel",
                        defaultMessage: "Give context"
                    },
                    addContext: {
                        id: "UnifiedChatNewContextButton.label",
                        defaultMessage: "Mention pages or people"
                    },
                    uploadFile: {
                        id: "UnifiedChatPlusMenuButton.uploadFile",
                        defaultMessage: "Add images, PDFs, or CSVs"
                    },
                    uploadFileDisabled: {
                        id: "UnifiedChatPlusMenuButton.uploadFile.disabled",
                        defaultMessage: "File uploads are unavailable"
                    },
                    researchMode: {
                        id: "UnifiedChatPlusMenuButton.researchMode",
                        defaultMessage: "Research mode"
                    },
                    researchModeDisabled: {
                        id: "UnifiedChatPlusMenuButton.researchMode.disabled",
                        defaultMessage: "Start a new chat to change this mode"
                    },
                    createImage: {
                        id: "UnifiedChatPlusMenuButton.createImage",
                        defaultMessage: "Create image"
                    },
                    createImageNewBadge: {
                        id: "UnifiedChatPlusMenuButton.createImage.newBadge",
                        defaultMessage: "New"
                    }
                }),
                e3 = {
                    disabledMenuItemText: {
                        color: n(632079).Tj.gray.text.secondary
                    }
                };

            function e8(e) {
                let {
                    aiChatFeatureController: t,
                    config: o,
                    inputMode: a,
                    threadMode: s,
                    loadAttachmentData: r,
                    onChangeNextConfig: l,
                    spaceStore: c,
                    threadStore: d,
                    mentions: u,
                    onChangeMentions: p,
                    onAddContextMenuOpenChange: h,
                    onEnableImageMode: m
                } = e, f = (0, n(109939).tz)(), y = (0, n(682985).uB)(void 0, n(510969).A), b = "workflow" === o.type && !0 === o.isCustomAgent, S = (0, n(682985).K8)(() => !b && (0, n(272659).V)({
                    spaceStore: c
                }), [c, b]), v = (0, i.useCallback)(e => e ? e3.disabledMenuItemText : void 0, []), x = (0, i.useMemo)(() => ({
                    close: () => {
                        y.setState({
                            open: !1
                        })
                    }
                }), [y]), k = "workflow" === o.type ? o.model : void 0, C = t.supportsUserSpecifiedContext(o.type) && !t.isChatCompletelyDisabled(a), M = eG(), {
                    showResearchModeToggle: j,
                    isResearchModeEnabled: I,
                    supportsConfigTypeChange: A,
                    toggleResearchMode: w
                } = ey({
                    aiChatFeatureController: t,
                    config: o,
                    inputMode: a,
                    threadMode: s,
                    onChangeNextConfig: l,
                    threadStore: d,
                    spaceStore: c
                }), [_, T] = (0, i.useState)("root"), P = (0, n(973567).N)({
                    threadStore: d,
                    spaceId: c.id
                }), E = (0, i.useCallback)(() => {
                    r && (n(305721).trackAttachFileOpened({
                        from: t.analyticsFromSourceForActions,
                        model: k,
                        inferenceInfo: P
                    }), r.uploadFiles())
                }, [t.analyticsFromSourceForActions, k, P, r]), F = (0, i.useCallback)(() => {
                    h(!1), T("root")
                }, [h]), R = (0, i.useCallback)(() => {
                    C && (T("context"), h(!0), n(305721).trackMentionMenuOpened({
                        from: t.analyticsFromSourceForActions,
                        model: k,
                        inferenceInfo: P
                    }))
                }, [t.analyticsFromSourceForActions, k, C, P, h]), D = (0, i.useCallback)(e => {
                    let t = [],
                        i = void 0 === r;
                    if (t.push({
                            key: "upload",
                            action: () => {
                                E(), e.close()
                            },
                            render: e => (0, g.jsx)(n(95582).A, { ...e,
                                title: f.formatMessage(e9.uploadFile),
                                disabled: i,
                                textWrapperStyle: v(i),
                                caption: i ? f.formatMessage(e9.uploadFileDisabled) : void 0,
                                icon: (0, g.jsx)(n(16275).I, {
                                    icon: n(695317).o
                                })
                            })
                        }), C && t.push({
                            key: "add-context",
                            action: R,
                            render: e => (0, g.jsx)(n(95582).A, { ...e,
                                title: f.formatMessage(e9.addContext),
                                icon: (0, g.jsx)(n(16275).I, {
                                    icon: n(584578).b
                                })
                            })
                        }), S && t.push({
                            key: "create-image",
                            action: () => {
                                m(), e.close()
                            },
                            render: e => (0, g.jsx)(n(95582).A, { ...e,
                                title: f.formatMessage(e9.createImage),
                                badge: (0, g.jsx)(n(746434).E, {
                                    color: "blue",
                                    content: f.formatMessage(e9.createImageNewBadge)
                                }),
                                icon: (0, g.jsx)(n(16275).I, {
                                    icon: n(775451).W
                                })
                            })
                        }), j) {
                        let e = () => {
                                A && w()
                            },
                            i = !A;
                        t.push({
                            key: "research-mode",
                            action: e,
                            render: t => (0, g.jsx)(n(95582).A, { ...t,
                                title: f.formatMessage(e9.researchMode),
                                caption: i ? f.formatMessage(e9.researchModeDisabled) : void 0,
                                disabled: i,
                                textWrapperStyle: v(i),
                                icon: (0, g.jsx)(n(16275).I, {
                                    icon: n(46552).P
                                }),
                                right: (0, g.jsx)(n(354491).d, {
                                    on: I,
                                    disabled: i,
                                    onClick: t => {
                                        t.stopPropagation(), e()
                                    }
                                })
                            })
                        })
                    }
                    if (0 !== t.length) return {
                        key: "actions",
                        render: e => (0, g.jsx)(n(844565).A, { ...e
                        }),
                        items: t
                    }
                }, [C, A, v, R, E, f, I, S, r, m, j, w]), B = (0, i.useMemo)(() => {
                    let e = [],
                        t = D(x);
                    return t && e.push(t), e
                }, [x, D]), N = (0, i.useCallback)(e => "context" === _ ? (0, g.jsx)(e5, {
                    mentions: u,
                    onChangeMentions: t => {
                        p(t), requestAnimationFrame(() => {
                            F(), e.close()
                        })
                    },
                    config: o,
                    menuType: t.adaptiveMenuType,
                    threadStore: d,
                    spaceStore: c,
                    disableAgentMentions: !M
                }) : (0, g.jsx)(n(747369).A, {
                    menuType: t.adaptiveMenuType,
                    width: 240,
                    hideMobileTopbar: !0,
                    children: (0, g.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        initialFocus: 0,
                        sections: B
                    })
                }), [t.adaptiveMenuType, M, F, o, u, p, _, B, c, d]);
                return (0, g.jsx)(n(656252).A, {
                    buttonPopupStore: y,
                    popupType: n(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    originGap: 6,
                    onOpen: () => {
                        T("root"), h(!1)
                    },
                    onClose: () => {
                        T("root"), h(!1)
                    },
                    content: N,
                    children: e => (0, g.jsx)(e$, { ...e,
                        icon: n(581923).plusIcon,
                        testId: "unified-chat-plus-menu-button",
                        tooltipText: e9.tooltipLabel
                    })
                })
            }
            let e6 = (0, n(109939).YK)({
                    noEditsPillLabel: {
                        id: "unifiedChatLeftSimplifiedButtons.noEditsPill.label",
                        defaultMessage: "Ask mode"
                    },
                    noEditsPillCloseAria: {
                        id: "unifiedChatLeftSimplifiedButtons.noEditsPill.closeAriaLabel",
                        defaultMessage: "Allow edits"
                    },
                    planModePillLabel: {
                        id: "unifiedChatLeftSimplifiedButtons.planModePill.label",
                        defaultMessage: "Plan mode"
                    },
                    planModePillCloseAria: {
                        id: "unifiedChatLeftSimplifiedButtons.planModePill.closeAriaLabel",
                        defaultMessage: "Turn off plan mode"
                    },
                    researchPillLabel: {
                        id: "unifiedChatLeftSimplifiedButtons.researchPill.label",
                        defaultMessage: "Research"
                    },
                    researchPillCloseAria: {
                        id: "unifiedChatLeftSimplifiedButtons.researchPill.closeAriaLabel",
                        defaultMessage: "Turn off research mode"
                    },
                    imageModePillLabel: {
                        id: "unifiedChatLeftSimplifiedButtons.imageModePill.label",
                        defaultMessage: "Image"
                    },
                    imageModePillCloseAria: {
                        id: "unifiedChatLeftSimplifiedButtons.imageModePill.closeAriaLabel",
                        defaultMessage: "Turn off image mode"
                    },
                    stopRecordingAria: {
                        id: "unifiedChatLeftSimplifiedButtons.stopRecordingAriaLabel",
                        defaultMessage: "Stop voice recording"
                    },
                    stoppingRecordingAria: {
                        id: "unifiedChatLeftSimplifiedButtons.stoppingRecordingAriaLabel",
                        defaultMessage: "Stopping voice recording"
                    },
                    stopRecordingTooltip: {
                        id: "unifiedChatLeftSimplifiedButtons.stopRecordingTooltip",
                        defaultMessage: "Stop recording"
                    }
                }),
                e4 = {
                    stopButton: {
                        pointerEvents: "auto",
                        borderRadius: "50%",
                        width: 28,
                        height: 28
                    },
                    stopButtonHover: {
                        backgroundColor: n(632079).Tj.buttonHoveredBackground
                    }
                };

            function e7(e) {
                let {
                    aiChatFeatureController: t,
                    clientStore: o,
                    config: a,
                    inputMode: r,
                    threadMode: l,
                    onChangeNextConfig: c,
                    loadAttachmentData: d,
                    spaceStore: u,
                    threadStore: p,
                    mentions: h,
                    onChangeMentions: m,
                    onAddContextMenuOpenChange: f,
                    sourcePickerProps: y,
                    isImageModeEnabled: b,
                    onEnableImageMode: S,
                    onDisableImageMode: v,
                    isStoppingRecording: x,
                    onStopRecording: k,
                    compact: C = !1
                } = e, _ = (0, n(109939).tz)(), T = function(e) {
                    let {
                        aiChatFeatureController: t,
                        activeThreadId: o,
                        clientStore: a,
                        config: r,
                        inputMode: l,
                        onChangeNextConfig: c,
                        spaceStore: d,
                        threadStore: u,
                        onMenuOpenChange: p,
                        pendingPlanModeStep: h,
                        onSetPendingPlanModeStep: m
                    } = e, f = (0, n(109939).tz)(), y = (0, n(533992).v3)(), b = (0, n(973567).N)({
                        threadStore: u,
                        spaceId: d.id
                    }), S = (0, n(84163).J)(d), v = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore), x = (0, n(682985).uB)(void 0, n(510969).A), k = (0, n(853284).U)(), C = function(e) {
                        let {
                            config: t,
                            spaceStore: i,
                            aiChatFeatureController: o,
                            showEverythingLabel: a = !0
                        } = e, s = (0, n(533992).v3)(), r = (0, n(109939).tz)(), l = (0, n(853284).U)();
                        return (0, n(682985).K8)(() => {
                            let e = "workflow" === t.type ? (0, n(548161).n_)({
                                config: t,
                                modules: []
                            }) ? ? [] : "researcher" === t.type ? t.searchScope ? [t.searchScope] : [] : "search" === t.type && t.scopeForNextSearch ? [t.scopeForNextSearch] : [];
                            if (0 === e.length) return r.formatMessage(A.everythingScope);
                            if (e.length > 1) return l && j(e) ? r.formatMessage(A.everythingScope) : r.formatMessage(A.multipleScopes, {
                                scopeCount: e.length
                            });
                            let c = e[0];
                            if ("ai-knowledge" === c.type) {
                                let e = o.supportsWebSearch(t.type),
                                    i = (0, n(548161).H0)({
                                        config: t,
                                        modules: []
                                    });
                                return e && i ? r.formatMessage(A.webSearchOnly) : r.formatMessage(A.noSources)
                            }
                            let {
                                scopeTitle: d
                            } = (0, I().tu)({
                                environment: s,
                                searchScope: c,
                                spaceStore: i,
                                intl: r,
                                showEverythingLabel: a
                            });
                            return d ? ? r.formatMessage(A.everythingScope)
                        }, [t, s, i, r, a, o, l])
                    }({
                        config: r,
                        spaceStore: d,
                        showEverythingLabel: !0,
                        aiChatFeatureController: t
                    }), {
                        isCustomScope: _,
                        hasAiKnowledgeScope: T,
                        searchScopes: P
                    } = (0, n(682985).K8)(() => {
                        let e = (0, s().in)(r),
                            t = (0, n(548161).n_)({
                                config: r,
                                modules: []
                            }) ? ? [],
                            i = t.some(e => "everything" === e.type),
                            o = k && j(t);
                        return {
                            isCustomScope: !(i || o) && (t && t.length > 1 || void 0 !== e && !(0, n(425749).rz)(e)),
                            hasAiKnowledgeScope: t.some(e => "ai-knowledge" === e.type),
                            searchScopes: t
                        }
                    }, [r, k]), E = !!_, {
                        webSearchAllowed: F,
                        webSearchEnabled: R
                    } = (0, n(682985).K8)(() => {
                        let e = t.supportsWebSearch(r.type);
                        return {
                            webSearchAllowed: e,
                            webSearchEnabled: e && (0, n(548161).H0)({
                                config: r,
                                modules: []
                            })
                        }
                    }, [t, r]), D = (0, n(682985).K8)(() => (0, n(596104).J)({}).some(e => e.isInProgress() || e.isDisconnecting()), []), B = (0, n(682985).K8)(() => {
                        if (!v || !S) return !1;
                        let e = (0, n(876688).kB)(),
                            t = v.getSettings();
                        for (let n of e) {
                            let e = (0, M().uD)(n, !0),
                                i = (0, M().uD)(n, !1);
                            for (let n of e.filter(e => !i.some(t => t.type === e.type))) {
                                let e = (0, w().DP)(n.type);
                                if (e && null != t && t[e]) return !0
                            }
                        }
                        return !1
                    }, [S, v]), N = (0, n(682985).K8)(() => {
                        let e = (0, w().xX)();
                        return 0 !== e.length && (0, n(876688).kB)().some(t => e.includes(t))
                    }, []), U = !("workflow" === r.type && r.isCustomAgent) && t.supportsSearchScopePopup(r.type) && t.supportsScopePicker(r.type), z = (0, n(482170).l)({
                        isCustomScope: _,
                        webSearchAllowed: F,
                        webSearchEnabled: R,
                        hasAiKnowledgeScope: T
                    }), K = (0, i.useMemo)(() => (function(e) {
                        if (e.hasAiKnowledgeScope && e.webSearchEnabled && e.isCustomScope) {
                            let t = eb[eS({ ...e,
                                isCustomScope: !1
                            })];
                            return { ...t,
                                button: {
                                    colorPalette: "blue"
                                },
                                icon: t.icon ? { ...t.icon,
                                    colorPalette: "blue"
                                } : null,
                                text: { ...t.text,
                                    colorPalette: "blue"
                                }
                            }
                        }
                        return eb[eS(e)]
                    })(z), [z]), V = (0, i.useMemo)(() => {
                        if ("workflow" === r.type && r.modelFromUser) return (0, n(220800).kD)(r)
                    }, [r]), {
                        isAskModeAvailable: O,
                        isAskModeEnabled: L,
                        toggleAskMode: W
                    } = em({
                        config: r,
                        onChangeNextConfig: c
                    }), q = (0, i.useMemo)(() => O ? {
                        allowEditsEnabled: !L,
                        isAskModeDisabled: "researcher" === r.type,
                        onToggleAskMode: W
                    } : void 0, [O, L, r.type, W]), {
                        isPlanModeAvailable: H,
                        isPlanModeEnabled: $,
                        togglePlanMode: Y,
                        canTogglePlanMode: J
                    } = ef({
                        config: r,
                        threadStore: u,
                        pendingPlanModeStep: h,
                        onSetPendingPlanModeStep: m
                    }), G = (0, i.useMemo)(() => H ? {
                        isPlanModeEnabled: $,
                        canTogglePlanMode: J,
                        onTogglePlanMode: Y
                    } : void 0, [H, $, J, Y]), {
                        showResearchModeToggle: Q,
                        isResearchModeEnabled: X,
                        supportsConfigTypeChange: Z,
                        toggleResearchMode: ee
                    } = ey({
                        aiChatFeatureController: t,
                        config: r,
                        inputMode: l,
                        threadMode: e.threadMode ? ? "newThread",
                        onChangeNextConfig: c,
                        threadStore: u,
                        spaceStore: d
                    }), et = (0, i.useMemo)(() => Q ? {
                        isResearchModeEnabled: X,
                        canToggleResearchMode: Z,
                        onToggleResearchMode: ee
                    } : void 0, [Q, X, Z, ee]), en = (0, i.useCallback)(() => {
                        n(305721).trackSourceMenuOpened({
                            button_name: "source_menu_search_scope_diff",
                            from: t.analyticsFromSourceForActions,
                            model: null == V ? void 0 : V.type,
                            inferenceInfo: b
                        }), y.device.isMobileNative && (0, n(471e3).I)({
                            environment: y
                        })
                    }, [y, t.analyticsFromSourceForActions, null == V ? void 0 : V.type, b]), ei = (0, i.useMemo)(() => S ? N ? (0, g.jsx)(n(16275).I, {
                        icon: n(813524).exclamationMarkCircleFillSmallIcon,
                        size: "xs",
                        colorPalette: E ? "blue" : "gray",
                        colorVariant: E ? "primary" : "secondary"
                    }) : B ? (0, g.jsx)(n(16275).I, {
                        icon: n(813524).exclamationMarkCircleFillSmallIcon,
                        size: "xs",
                        colorPalette: "red",
                        colorVariant: "secondary"
                    }) : D ? (0, g.jsx)(n(16275).I, {
                        icon: n(670989).l,
                        size: "xs",
                        colorPalette: E ? "blue" : "gray",
                        colorVariant: E ? "primary" : "secondary"
                    }) : null : null, [S, N, B, D, E]), eo = (0, i.useCallback)(e => (0, g.jsx)(ed, {
                        aiChatFeatureController: t,
                        activeThreadId: o,
                        buttonPopupParent: e,
                        clientStore: a,
                        config: r,
                        extensionPopupButtonEvents: {},
                        intl: f,
                        onChangeNextConfig: c,
                        onSetPendingPlanModeStep: m,
                        spaceStore: d,
                        threadStore: u,
                        askModeToggleProps: q,
                        planModeToggleProps: G,
                        researchModeToggleProps: et
                    }), [t, o, a, r, f, c, d, u, q, G, et, m]);
                    return {
                        canRenderPopup: !t.isChatCompletelyDisabled(l) && U,
                        buttonPopupStore: x,
                        renderMenu: eo,
                        onOriginClick: () => {
                            null == p || p(!0), en()
                        },
                        uiState: {
                            buttonState: z,
                            buttonStyles: K,
                            shouldHighlightScopeButton: E,
                            scopeName: C,
                            connectorStatusIcon: ei,
                            webSearchAllowed: F,
                            webSearchEnabled: R,
                            hasAiKnowledgeScope: T,
                            isCustomScope: _,
                            searchScopes: P
                        }
                    }
                }(y), P = (0, n(853284).U)(), {
                    isAskModeAvailable: E,
                    isAskModeEnabled: F,
                    setAskModeEnabled: R
                } = em({
                    config: a,
                    onChangeNextConfig: c
                }), {
                    isPlanModeAvailable: D,
                    isPlanModeEnabled: B,
                    togglePlanMode: N,
                    canTogglePlanMode: U
                } = ef({
                    config: a,
                    threadStore: p,
                    pendingPlanModeStep: y.pendingPlanModeStep,
                    onSetPendingPlanModeStep: y.onSetPendingPlanModeStep
                }), {
                    showResearchModeToggle: z,
                    isResearchModeEnabled: K,
                    supportsConfigTypeChange: V,
                    toggleResearchMode: O
                } = ey({
                    aiChatFeatureController: t,
                    config: a,
                    inputMode: r,
                    threadMode: l,
                    onChangeNextConfig: c,
                    threadStore: p,
                    spaceStore: u
                }), L = t.unifiedChatInputModeButtonStyleKey, W = t.shouldShowSimplifiedInputSourceControls, q = D ? "subtle" : "blue", H = (0, i.useMemo)(() => {
                    let e = [];
                    return D && B ? e.push((0, g.jsx)(ti, {
                        label: _.formatMessage(e6.planModePillLabel),
                        closeAriaLabel: _.formatMessage(e6.planModePillCloseAria),
                        onClose: () => {
                            U && N()
                        },
                        testId: "unified-chat-plan-mode-pill",
                        textStyleKey: L,
                        isCloseDisabled: !U,
                        icon: n(183519).O,
                        variant: q
                    }, "plan-mode-pill")) : E && F && e.push((0, g.jsx)(ti, {
                        label: _.formatMessage(e6.noEditsPillLabel),
                        closeAriaLabel: _.formatMessage(e6.noEditsPillCloseAria),
                        onClose: () => {
                            R(!1)
                        },
                        testId: "unified-chat-no-edits-pill",
                        textStyleKey: L,
                        icon: n(636).pencilLineIcon,
                        variant: q
                    }, "no-edits-pill")), z && K && e.push((0, g.jsx)(ti, {
                        label: _.formatMessage(e6.researchPillLabel),
                        closeAriaLabel: _.formatMessage(e6.researchPillCloseAria),
                        onClose: () => {
                            V && O()
                        },
                        testId: "unified-chat-research-pill",
                        textStyleKey: L,
                        isCloseDisabled: !V,
                        icon: n(46552).P,
                        variant: q
                    }, "research-mode-pill")), b && e.push((0, g.jsx)(ti, {
                        label: _.formatMessage(e6.imageModePillLabel),
                        closeAriaLabel: _.formatMessage(e6.imageModePillCloseAria),
                        onClose: () => {
                            v()
                        },
                        testId: "unified-chat-image-mode-pill",
                        textStyleKey: L,
                        icon: n(775451).W,
                        variant: q
                    }, "image-mode-pill")), e
                }, [U, V, _, E, F, b, D, B, L, v, q, R, z, K, N, O]);
                return "recording" === r ? (0, g.jsx)(n(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    children: (0, g.jsx)(n(51831).m, {
                        placement: "bottom",
                        content: () => (0, g.jsx)("div", {
                            children: _.formatMessage(e6.stopRecordingTooltip)
                        }),
                        children: e => (0, g.jsx)(n(374533).A, { ...e,
                            icon: () => (0, g.jsx)(n(16275).I, {
                                icon: n(25094).xMarkSmallIcon,
                                colorVariant: "secondary",
                                size: "default"
                            }),
                            onClick: () => {
                                x || null == k || k()
                            },
                            ariaLabel: _.formatMessage(x ? e6.stoppingRecordingAria : e6.stopRecordingAria),
                            isLoading: x,
                            disabled: x,
                            style: e4.stopButton,
                            hoveredStyle: e4.stopButtonHover,
                            testId: "unified-chat-stop-recording-button"
                        })
                    })
                }) : (0, g.jsxs)(n(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    children: [W ? (0, g.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0, g.jsx)(e8, {
                            aiChatFeatureController: t,
                            config: a,
                            inputMode: r,
                            threadMode: l,
                            loadAttachmentData: d,
                            onChangeNextConfig: c,
                            spaceStore: u,
                            threadStore: p,
                            mentions: h,
                            onChangeMentions: m,
                            onAddContextMenuOpenChange: f,
                            onEnableImageMode: S
                        }), (0, g.jsx)(eJ, { ...y,
                            controller: T
                        }), C ? (0, g.jsx)(eq, {
                            aiChatFeatureController: t,
                            clientStore: o,
                            config: a,
                            inputMode: r,
                            onChangeNextConfig: c,
                            spaceStore: u,
                            threadStore: p,
                            threadMode: l,
                            compact: !0
                        }) : null]
                    }) : null, !P && W ? (0, g.jsx)(ew, {
                        sourcePickerProps: y,
                        controller: T
                    }) : null, H.length > 0 ? (0, g.jsx)(n(4458).fI, {
                        gap: 6,
                        alignItems: "center",
                        children: H
                    }) : null, P && W ? (0, g.jsx)(ew, {
                        sourcePickerProps: y,
                        controller: T
                    }) : null]
                })
            }
            let te = {
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: 999,
                    height: 24,
                    pointerEvents: "auto",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    background: "transparent",
                    paddingInlineStart: 6,
                    paddingInlineEnd: 6,
                    gap: 4
                },
                tt = {
                    pointerEvents: "none",
                    transition: "opacity 120ms ease-in-out"
                },
                tn = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 16,
                    height: 16,
                    flexShrink: 0
                };

            function ti(e) {
                let {
                    label: t,
                    onClose: o,
                    closeAriaLabel: a,
                    testId: s,
                    textStyleKey: r,
                    isCloseDisabled: l,
                    icon: c,
                    variant: d = "blue"
                } = e, [u, p] = (0, i.useState)(!1), h = (0, n(960253).I)(() => ({
                    closeButton: {
                        position: "absolute",
                        insetInlineEnd: 4,
                        top: "50%",
                        transform: "translateY(-50%)",
                        opacity: +!!u,
                        visibility: u ? "visible" : "hidden",
                        pointerEvents: u ? "auto" : "none",
                        transition: "opacity 120ms ease-in-out, visibility 120ms ease-in-out",
                        borderRadius: 999
                    }
                }), [u]), m = (0, n(960253).I)(() => {
                    let e = u && !l;
                    return {
                        container: { ...te,
                            background: n(632079).Tj.blue.background.secondaryTranslucent
                        },
                        label: { ...tt,
                            color: n(632079).Tj.blue.text.accentPrimary
                        },
                        iconContainer: { ...tn,
                            position: "relative"
                        },
                        icon: {
                            opacity: +!e,
                            visibility: e ? "hidden" : "visible",
                            transition: "opacity 120ms ease-in-out, visibility 120ms ease-in-out",
                            color: n(632079).Tj.blue.text.accentPrimary
                        },
                        closeButton: {
                            opacity: +!!e,
                            visibility: e ? "visible" : "hidden",
                            pointerEvents: e ? "auto" : "none",
                            transition: "opacity 120ms ease-in-out, visibility 120ms ease-in-out",
                            position: "absolute",
                            insetInlineStart: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: n(632079).Tj.blue.text.accentPrimary
                        }
                    }
                }, [u, l]), f = (0, i.useCallback)(() => {
                    l || o()
                }, [l, o]), y = (0, i.useCallback)(() => {
                    p(!0)
                }, []), b = (0, i.useCallback)(() => {
                    p(!1)
                }, []);
                if ("subtle" === d) {
                    let e = { ...te,
                        background: "transparent",
                        paddingInlineEnd: 26
                    };
                    return (0, g.jsxs)("div", {
                        style: e,
                        onMouseEnter: y,
                        onMouseLeave: b,
                        onFocusCapture: y,
                        onBlurCapture: b,
                        children: [(0, g.jsx)(n(111010).D, {
                            styleKey: r,
                            colorVariant: "secondary",
                            style: tt,
                            children: t
                        }), (0, g.jsx)(n(374533).A, {
                            icon: n(25094).xMarkSmallIcon,
                            size: "xs",
                            colorPalette: "gray",
                            colorVariant: "secondary",
                            onClick: f,
                            ariaLabel: a,
                            disabled: l,
                            testId: `${s}-close`,
                            style: h.closeButton
                        })]
                    })
                }
                return (0, g.jsxs)("div", {
                    style: m.container,
                    onMouseEnter: y,
                    onMouseLeave: b,
                    onFocusCapture: y,
                    onBlurCapture: b,
                    children: [(0, g.jsxs)("div", {
                        style: m.iconContainer,
                        children: [(0, g.jsx)(n(16275).I, {
                            icon: c,
                            size: "sm",
                            style: m.icon
                        }), (0, g.jsx)(n(374533).A, {
                            icon: n(25094).xMarkSmallIcon,
                            size: "xs",
                            colorPalette: "blue",
                            colorVariant: "secondary",
                            onClick: f,
                            ariaLabel: a,
                            disabled: l,
                            testId: `${s}-close`,
                            style: m.closeButton
                        })]
                    }), (0, g.jsx)(n(111010).D, {
                        styleKey: r,
                        style: m.label,
                        children: t
                    })]
                })
            }
            let to = (0, n(109939).YK)({
                    next: {
                        id: "unifiedChatButtons.surveyNext",
                        defaultMessage: "Next"
                    },
                    send: {
                        id: "unifiedChatButtons.surveySend",
                        defaultMessage: "Send"
                    }
                }),
                ta = (0, n(109939).YK)({
                    tooltip: {
                        id: "unifiedChatButtons.tokenUsageRing.tooltip",
                        defaultMessage: "Context remaining: {percent}%"
                    },
                    startRecordingAria: {
                        id: "unifiedChatButtons.startRecordingAriaLabel",
                        defaultMessage: "Start voice recording"
                    },
                    micTooltip: {
                        id: "unifiedChatButtons.micTooltip",
                        defaultMessage: "Record voice input"
                    },
                    transcribing: {
                        id: "unifiedChatButtons.transcribing",
                        defaultMessage: "Transcribing…"
                    }
                }),
                ts = {
                    button: {
                        pointerEvents: "auto"
                    },
                    micButton: {
                        pointerEvents: "auto",
                        borderRadius: "50%",
                        width: 28,
                        height: 28
                    },
                    micButtonHover: {
                        backgroundColor: n(632079).Tj.buttonHoveredBackground
                    },
                    tokenUsageRing: {
                        pointerEvents: "auto",
                        display: "flex",
                        alignItems: "center",
                        marginInline: 6
                    },
                    tooltipContent: {
                        whiteSpace: "nowrap"
                    }
                };

            function tr(e) {
                let {
                    aiChatFeatureController: t,
                    allowQueuingDuringStreaming: o,
                    clientStore: a,
                    config: s,
                    disabled: r,
                    inputMode: l,
                    isInputEmpty: c,
                    isStoppingRecording: d,
                    onChangeNextConfig: u,
                    onStartRecording: h,
                    onStopInference: m,
                    onSubmit: y,
                    spaceStore: b,
                    threadStore: v,
                    threadMode: x,
                    surveyToolbarAction: k,
                    compact: M = !1
                } = e, j = (0, n(109939).tz)(), I = (0, n(682985).K8)(() => v ? (0, n(187353).A3)({
                    clientStore: a,
                    threadStore: v
                }).steps : [], [a, v]), A = (0, i.useMemo)(() => {
                    for (let e = I.length - 1; e >= 0; e -= 1) {
                        let t = I[e];
                        if ("agent-inference" === t.type && ((0, p().O9)(t.inputTokens) || (0, p().O9)(t.outputTokens) || (0, p().O9)(t.cachedTokensCreated))) return t
                    }
                }, [I]), w = (0, i.useMemo)(() => {
                    if (!A) return;
                    let e = (A.inputTokens ? ? 0) + (A.outputTokens ? ? 0) + (A.cachedTokensCreated ? ? 0);
                    if (e <= 0) return;
                    let t = A.maxInputTokens ? ? A.maxContextTokens ? ? 272e3;
                    if (!(t <= 0)) return Math.min(100, Math.round(e / t * 100))
                }, [A]), _ = (0, i.useMemo)(() => {
                    if (!A) return;
                    let e = (A.inputTokens ? ? 0) + (A.outputTokens ? ? 0) + (A.cachedTokensCreated ? ? 0);
                    if (e <= 0) return;
                    let t = A.maxInputTokens ? ? A.maxContextTokens ? ? 272e3;
                    if (!(t <= 0)) return {
                        totalTokens: e,
                        maxInputTokens: t
                    }
                }, [A]), T = t.isChatReady(l), P = o && "runningInference" === l ? "ready" : l, E = "recording" === P ? d ? "runningInference" : "ready" : P, F = "recording" === P && d, R = () => (0, g.jsx)(S, {
                    onSubmit: y,
                    aiChatFeatureController: t,
                    inputMode: E,
                    disabledTooltip: F ? j.formatMessage(ta.transcribing) : void 0
                }), D = null;
                null != k && k.visible ? D = k.isLastQuestion ? (0, g.jsx)(n(912946).A, {
                    colorPalette: "blue",
                    shape: "pill",
                    style: ts.button,
                    iconLeading: {
                        icon: n(567738).arrowStraightUpFillSmallIcon,
                        size: "sm"
                    },
                    onClick: k.onNext,
                    children: (0, g.jsx)(n(109939).sA, { ...to.send
                    })
                }) : (0, g.jsx)(n(912946).A, {
                    colorPalette: "blue",
                    shape: "pill",
                    style: ts.button,
                    onClick: k.onNext,
                    children: (0, g.jsx)(n(109939).sA, { ...to.next
                    })
                }) : k ? D = null : "pendingStop" === l ? D = (0, g.jsx)(C, {
                    onClick: m,
                    disabled: !0
                }) : "runningInference" === l && t.supportsStopInference(s.type) ? D = !o || r || c ? (0, g.jsx)(C, {
                    onClick: m
                }) : R() : D = R();
                let {
                    isActive: B,
                    activate: N
                } = f(), {
                    isActive: U,
                    activate: z
                } = f(), K = t.isMicInputEnabled && ("ready" === l || "noContent" === l) && !r && !k, V = t.isTokenUsageRingEnabled && "recording" !== l && void 0 !== w && void 0 !== _, O = void 0 !== w ? Math.max(0, 100 - w) : void 0;
                return (0, g.jsxs)(g.Fragment, {
                    children: [V ? (0, g.jsx)(n(51831).m, {
                        content: () => (0, g.jsx)("div", {
                            style: ts.tooltipContent,
                            children: j.formatMessage(ta.tooltip, {
                                percent: O
                            })
                        }),
                        placement: "top",
                        textWrap: !0,
                        forceVisibleState: !!B && void 0,
                        children: e => (0, g.jsx)("div", { ...(0, n(63390).A)({
                                onMouseEnter: N,
                                onFocus: N
                            }, e),
                            style: ts.tokenUsageRing,
                            children: (0, g.jsx)(n(320500).E, {
                                size: "sm",
                                progressPercentage: w
                            })
                        })
                    }) : null, "recording" === l || M ? null : (0, g.jsx)(eq, {
                        aiChatFeatureController: t,
                        clientStore: a,
                        config: s,
                        inputMode: l,
                        onChangeNextConfig: u,
                        spaceStore: b,
                        threadStore: v,
                        threadMode: x
                    }), K ? (0, g.jsx)(n(51831).m, {
                        placement: "bottom",
                        content: () => (0, g.jsx)("div", {
                            children: j.formatMessage(ta.micTooltip)
                        }),
                        forceVisibleState: !!U && void 0,
                        children: e => (0, g.jsx)(n(374533).A, { ...(0, n(63390).A)({
                                onMouseEnter: z,
                                onFocus: z
                            }, e),
                            icon: () => (0, g.jsx)(n(16275).I, {
                                icon: n(958863).E,
                                colorVariant: "secondary",
                                size: "default"
                            }),
                            onClick: () => {
                                null == h || h()
                            },
                            ariaLabel: j.formatMessage(ta.startRecordingAria),
                            style: ts.micButton,
                            hoveredStyle: ts.micButtonHover,
                            testId: "unified-chat-start-recording-button"
                        })
                    }) : null, D]
                })
            }
            let tl = {
                    position: "relative",
                    pointerEvents: "none",
                    minWidth: 0
                },
                tc = {
                    position: "relative",
                    pointerEvents: "none",
                    minWidth: 0,
                    flexGrow: 1
                },
                td = {
                    position: "relative",
                    pointerEvents: "none"
                };

            function tu(e) {
                let {
                    aiChatFeatureController: t,
                    clientStore: i,
                    config: o,
                    inputMode: a,
                    isInputEmpty: s,
                    threadMode: r,
                    loadAttachmentData: l,
                    onChangeNextConfig: c,
                    isImageModeEnabled: d,
                    onEnableImageMode: u,
                    onDisableImageMode: p,
                    isStoppingRecording: h,
                    onStartRecording: f,
                    onStopRecording: y,
                    onStopInference: b,
                    onSubmit: S,
                    spaceStore: v,
                    threadStore: x,
                    disabled: k,
                    allowQueuingDuringStreaming: C,
                    mentions: M,
                    onChangeMentions: j,
                    onAddContextMenuOpenChange: I,
                    sourcePickerProps: A,
                    surveyToolbarAction: w,
                    compact: _ = !1
                } = e;
                return (0, g.jsx)(m, {
                    children: (0, g.jsxs)(n(4458).fI, {
                        gap: 12,
                        paddingInline: 8,
                        paddingTop: 4,
                        paddingBottom: 8,
                        style: tl,
                        alignItems: "center",
                        justifyContent: "center",
                        className: "autolayout-fill-width",
                        children: [(0, g.jsx)(n(4458).fI, {
                            className: "autolayout-row",
                            gap: 2,
                            style: tc,
                            alignItems: "center",
                            children: (0, g.jsx)(e7, {
                                aiChatFeatureController: t,
                                clientStore: i,
                                config: o,
                                inputMode: a,
                                threadMode: r,
                                loadAttachmentData: l,
                                onChangeNextConfig: c,
                                spaceStore: v,
                                threadStore: x,
                                mentions: M,
                                onChangeMentions: j,
                                onAddContextMenuOpenChange: I,
                                sourcePickerProps: A,
                                isImageModeEnabled: d,
                                onEnableImageMode: u,
                                onDisableImageMode: p,
                                isStoppingRecording: h,
                                onStopRecording: y,
                                compact: _
                            })
                        }), (0, g.jsx)(n(4458).fI, {
                            className: "autolayout-row",
                            gap: 4,
                            style: td,
                            alignItems: "center",
                            justifyContent: "flex-end",
                            children: (0, g.jsx)(tr, {
                                aiChatFeatureController: t,
                                clientStore: i,
                                inputMode: a,
                                isInputEmpty: s,
                                config: o,
                                threadMode: r,
                                onChangeNextConfig: c,
                                isStoppingRecording: h,
                                onStartRecording: f,
                                onStopInference: b,
                                onSubmit: S,
                                allowQueuingDuringStreaming: C,
                                disabled: k,
                                spaceStore: v,
                                threadStore: x,
                                surveyToolbarAction: w,
                                compact: _
                            })
                        })]
                    })
                })
            }
            let tp = (0, n(109939).YK)({
                    connectorsBanner: {
                        id: "connectorsBanner.bannerText",
                        defaultMessage: "Get better answers from your apps"
                    }
                }),
                tg = ["notion-mail", "notion-calendar"],
                th = {
                    zIndex: -1,
                    position: "relative"
                },
                tm = {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginInlineStart: "auto",
                    flexShrink: 1,
                    minWidth: 0,
                    overflow: "hidden"
                },
                tf = {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    flexShrink: 0
                };

            function ty(e) {
                let t, {
                        aiChatFeatureController: o,
                        inputMode: a
                    } = e,
                    s = (0, n(533992).Y0)(),
                    r = (0, n(109939).tz)(),
                    l = "dark" === (0, n(960253).e)(),
                    c = (0, n(682985).K8)(() => (function(e) {
                        let t = [],
                            n = [],
                            i = [],
                            o = [],
                            a = [];
                        for (let s of e)(0, p().Xk)(T().Si, s) ? t.push(s) : (0, p().Xk)(T().B6, s) ? n.push(s) : (0, p().Xk)(tg, s) ? i.push(s) : "slack" === s ? o.push(s) : a.push(s);
                        return [...i, ...o, ...t, ...n, ...a]
                    })((0, n(876688).kB)()), []),
                    [d, u] = (0, i.useState)(!1),
                    h = (0, i.useRef)(null),
                    m = (0, i.useRef)(null),
                    f = (0, n(533992).v3)(),
                    y = (0, n(723240).r)(),
                    b = (0, n(217844)._)({
                        name: "ai_connectors",
                        spaceId: y,
                        userId: f.currentUser.id
                    }),
                    S = (0, n(960253).e)(),
                    v = (0, n(960253).I)(() => ({
                        bannerContainer: {
                            position: "absolute",
                            cursor: "pointer",
                            backgroundColor: l ? d ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.02)" : d ? n(632079).Tj.background.tertiary : n(632079).Tj.background.secondary,
                            color: n(632079).Tj.text.secondary,
                            fontWeight: n(699422).Wy.medium,
                            borderStartStartRadius: 0,
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 12,
                            borderEndStartRadius: 12,
                            top: -14,
                            paddingTop: 22,
                            paddingInlineEnd: 9,
                            paddingBottom: 8,
                            paddingInlineStart: 16,
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            width: "100%",
                            border: "none",
                            justifyContent: "space-between",
                            boxShadow: (0, n(407898).O)({
                                isPhone: s.isPhone,
                                themeMode: S
                            })
                        }
                    }), [s.isPhone, d, l, S]),
                    x = (0, i.useCallback)(() => u(!0), []),
                    k = (0, i.useCallback)(() => u(!1), []),
                    C = (t = (0, n(729787).wY)(h), (0, i.useMemo)(() => {
                        if (!t || !m.current) return c;
                        let e = Math.max(0, Math.floor((t.width - (m.current.scrollWidth + 40 + 25 + 8)) / 22));
                        return c.slice(0, e)
                    }, [c, t, m])),
                    {
                        currentUserSettingsStore: M,
                        dismissedBanner: j
                    } = (0, n(682985).K8)(() => {
                        var e;
                        let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                        return {
                            currentUserSettingsStore: t,
                            dismissedBanner: null == t || null == (e = t.getSettings()) ? void 0 : e.dismissed_ai_chat_home_connectors_banner
                        }
                    }, []),
                    I = (0, i.useCallback)(e => {
                        e.stopPropagation(), M && !j && (0, n(377796).createAndCommit)({
                            environment: f,
                            cellTarget: "main",
                            userAction: "UnifiedChatInput.dismissConnectorsBanner",
                            canUndo: !1,
                            perform: e => {
                                (0, n(173157).z)({
                                    store: M,
                                    data: {
                                        settings: { ...M.getSettings(),
                                            dismissed_ai_chat_home_connectors_banner: !0
                                        }
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }, [M, j, f]),
                    A = (0, i.useCallback)(() => {
                        (0, n(622081).pp)({
                            environment: f,
                            connector: "generic",
                            analyticsFrom: "ai_chat_connectors_banner",
                            connectorsFeatureAvailability: b
                        })
                    }, [f, b]);
                return !o.supportsConnectorsBanner || j || "upgradeRequired" === a || 0 === c.length ? null : (0, g.jsx)("div", {
                    style: th,
                    children: (0, g.jsx)(n(654979).A, {
                        visible: !0,
                        initial: {
                            opacity: 0,
                            height: 0,
                            translateY: -100
                        },
                        animate: {
                            opacity: 1,
                            height: 40,
                            visibility: "visible",
                            translateY: 0
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        config: {
                            duration: 500
                        },
                        children: (0, g.jsxs)(n(64960).Ay, {
                            ref: h,
                            style: v.bannerContainer,
                            onClick: A,
                            onMouseEnter: x,
                            onMouseLeave: k,
                            children: [(0, g.jsx)(n(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                flexShrink: 0,
                                children: (0, g.jsx)("div", {
                                    ref: m,
                                    style: tf,
                                    children: r.formatMessage(tp.connectorsBanner)
                                })
                            }), (0, g.jsx)("div", {
                                style: tm,
                                children: C.map((e, t) => (0, g.jsx)(_().Q, {
                                    iconGroup: (0, n(894658).e1)(e),
                                    style: {
                                        width: 16,
                                        height: 16
                                    },
                                    variantName: "default"
                                }, e))
                            }), (0, g.jsx)(n(4458).fI, {
                                alignItems: "center",
                                gap: 4,
                                paddingInlineStart: 8,
                                children: (0, g.jsx)(n(374533).A, {
                                    ariaLabel: r.formatMessage({
                                        id: "connectorsBanner.close",
                                        defaultMessage: "Close"
                                    }),
                                    icon: n(25094).xMarkSmallIcon,
                                    onClick: I
                                })
                            })]
                        })
                    })
                })
            }
            let tb = (0, n(109939).YK)({
                learnMore: {
                    id: "infoBanner.learnMore",
                    defaultMessage: "Learn more"
                },
                dismiss: {
                    id: "infoBanner.dismiss",
                    defaultMessage: "Dismiss"
                },
                generalIncident: {
                    id: "infoBanner.generalIncident",
                    defaultMessage: "Notion AI is experiencing issues. See our status page for more information"
                },
                databaseQueryingIncident: {
                    id: "infoBanner.databaseQueryingIncident",
                    defaultMessage: "Notion AI is experiencing issues. You may experience degraded performance with database querying."
                }
            });

            function tS(e) {
                let {
                    inputMode: t,
                    aiChatFeatureController: n,
                    aiConnectorIncident: i,
                    aiGeneralIncident: o
                } = e;
                if ("agent_collections_new_view" === n.aiChatType || "agent_new_db_quick_access" === n.aiChatType) return !1;
                switch (t) {
                    case "configTypeDown":
                    case "modelProviderDown":
                    case "upgradeRequired":
                    case "error":
                    case "aiDisabled":
                        return !0;
                    case "ready":
                    case "readOnlyThread":
                    case "uploadingFiles":
                    case "filesRequireConfirmation":
                    case "recording":
                    case "runningInference":
                    case "pendingStop":
                    case "noContent":
                        if (i || o) return !0;
                        return !1;
                    default:
                        return (0, p().HB)(t)
                }
            }
            let tv = {
                inlineErrorContainer: {
                    marginBottom: -24,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: -1
                },
                inlineErrorText: {
                    textWrap: "pretty"
                },
                dismissIcon: {
                    fill: n(632079).Tj.text.secondary
                },
                inlineErrorExtension: {
                    position: "absolute",
                    bottom: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: 0,
                    height: 32,
                    zIndex: -1
                }
            };

            function tx(e) {
                let {
                    navigate: t
                } = (0, i.useContext)(n(44894).E), {
                    aiChatFeatureController: o,
                    upsellMessage: a,
                    upgradeButtonTextProps: s,
                    isUpgradeSystemEnabled: r,
                    inputMode: l,
                    errorMessage: c,
                    onErrorDismiss: d,
                    aiConnectorIncident: u,
                    aiGeneralIncident: p
                } = e, h = (0, n(533992).v3)(), m = (0, n(109939).tz)(), f = "configTypeDown" === l || "modelProviderDown" === l, y = "error" === l, b = !f && !y && "aiDisabled" !== l && !u && void 0 !== p, S = (0, i.useMemo)(() => {
                    if ("configTypeDown" === l || b && (null == p ? void 0 : p.linkToStatusPage) === !0) return () => {
                        t({
                            environment: h,
                            url: "https://www.notion-status.com",
                            openInNew: "tab"
                        })
                    }
                }, [null == p ? void 0 : p.linkToStatusPage, h, l, t, b]), v = (0, i.useMemo)(() => f ? (0, g.jsx)(n(109939).sA, { ..."modelProviderDown" === l ? n(352120).$.modelProviderDown : n(352120).$.cannotSubmitMessageSeeStatusPage
                }) : y && c ? c : "aiDisabled" === l ? (0, g.jsx)(n(109939).sA, {
                    id: "unifiedChatInput.aiDisabled",
                    defaultMessage: "AI is disabled for this workspace"
                }) : u ? u.customMessage ? u.customMessage : "degraded" === u.incidentType ? (0, g.jsx)(n(109939).sA, {
                    id: "infoBanner.aiConnectorDegraded",
                    defaultMessage: "{connectorName} AI connector is experiencing issues. You may experience degraded performance.",
                    values: {
                        connectorName: n(590212).w0[u.connector]
                    }
                }) : (0, g.jsx)(n(109939).sA, {
                    id: "infoBanner.aiConnectorIncident",
                    defaultMessage: "{connectorName} AI connector is temporarily unavailable. We’re working to resolve the issue.",
                    values: {
                        connectorName: n(590212).w0[u.connector]
                    }
                }) : b && p ? (0, g.jsx)(n(109939).sA, { ..."database-querying" === p.kind ? tb.databaseQueryingIncident : tb.generalIncident
                }) : r ? s ? (0, g.jsx)(n(754951).UpgradeButton, { ...s
                }) : null : a, [f, u, p, y, c, a, r, s, l, b]), x = (0, n(104361).d)({
                    disableExposureLogging: !0
                }), k = (0, n(214665).r)({
                    disableExposureLogging: !0
                }), C = (0, n(682985).K8)(() => void 0 !== n(218744).default.getEligibleGroup({
                    experimentId: "nus_trial_button_color",
                    disableExposureLogging: !0
                }), []), {
                    upgradeEligibility: M
                } = (0, n(79268).C)({
                    upsell: null == s ? void 0 : s.upsell,
                    source: (null == s ? void 0 : s.source) ? ? "ai_agent",
                    spaceStore: null == s ? void 0 : s.spaceStore
                }), j = (null == M ? void 0 : M.status) === "eligible_for_trial", I = "upgradeRequired" !== l ? "blue" : j ? C ? x ? ? "blue" : "orange" : k, A = tS({
                    inputMode: l,
                    aiChatFeatureController: o,
                    aiConnectorIncident: u,
                    aiGeneralIncident: p
                }), w = (0, n(960253).I)(() => ({
                    inlineError: {
                        backgroundColor: f || y ? n(632079).Tj.red.background.primary : n(632079).Tj[I].background.secondary,
                        color: f || y ? n(632079).Tj.red.text.primary : n(632079).Tj.text.secondary,
                        fontWeight: n(699422).Wy.medium,
                        borderStartStartRadius: 16,
                        borderStartEndRadius: 16,
                        borderEndEndRadius: 0,
                        borderEndStartRadius: 0,
                        paddingTop: 8,
                        paddingInlineEnd: 16,
                        paddingBottom: 32,
                        paddingInlineStart: 16,
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                        width: "100%",
                        border: "none",
                        justifyContent: "space-between",
                        position: "relative",
                        overflow: "hidden"
                    },
                    warningIcon: {
                        fill: f || y ? n(632079).Tj.red.text.primary : n(632079).Tj.text.secondary
                    },
                    learnMoreIcon: {
                        fill: f || y ? n(632079).Tj.red.text.primary : n(632079).Tj.text.secondary
                    }
                }), [f, y, I]), T = (0, i.useMemo)(() => ({
                    visible: A,
                    initial: {
                        opacity: 0,
                        translateY: 40
                    },
                    animate: {
                        opacity: +!!A,
                        translateY: 40 * !A
                    },
                    exit: {
                        opacity: 0,
                        translateY: 40
                    },
                    config: {
                        duration: 300
                    }
                }), [A]);
                return (0, g.jsx)(n(654979).A, {
                    visible: T.visible,
                    initial: T.initial,
                    animate: T.animate,
                    exit: T.exit,
                    config: T.config,
                    children: (0, g.jsx)("div", {
                        style: tv.inlineErrorContainer,
                        children: (0, g.jsxs)("div", {
                            style: w.inlineError,
                            children: [(0, g.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                flex: 1,
                                children: [f || y ? (0, g.jsx)(n(16275).I, {
                                    icon: n(789777).exclamationMarkTriangleFillIcon,
                                    size: "sm",
                                    style: w.warningIcon
                                }) : null, (0, g.jsxs)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    flex: 1,
                                    children: [(0, g.jsx)("div", {
                                        style: tv.inlineErrorText,
                                        children: v
                                    }), S ? (0, g.jsx)(n(51831).m, {
                                        content: () => m.formatMessage(tb.learnMore),
                                        children: e => (0, g.jsx)(n(374533).A, {
                                            onClick: S,
                                            icon: () => (0, g.jsx)(_().Q, {
                                                iconGroup: n(799472).u,
                                                variantName: "default",
                                                size: "lg",
                                                colorVariant: "secondary",
                                                style: w.learnMoreIcon
                                            }),
                                            ariaLabel: m.formatMessage(tb.learnMore),
                                            size: "xs",
                                            ...e
                                        })
                                    }) : void 0, y && d ? (0, g.jsx)(n(51831).m, {
                                        content: () => m.formatMessage(tb.dismiss),
                                        children: e => (0, g.jsx)(n(374533).A, {
                                            onClick: d,
                                            icon: () => (0, g.jsx)(n(16275).I, {
                                                icon: n(117152).xMarkIcon,
                                                style: w.learnMoreIcon
                                            }),
                                            ariaLabel: m.formatMessage(tb.dismiss),
                                            size: "xs",
                                            ...e
                                        })
                                    }) : void 0]
                                })]
                            }), u ? (0, g.jsx)(n(51831).m, {
                                content: () => m.formatMessage(tb.dismiss),
                                children: e => (0, g.jsx)(n(374533).A, {
                                    onClick: u.onDismiss,
                                    icon: () => (0, g.jsx)(n(16275).I, {
                                        icon: n(117152).xMarkIcon,
                                        size: "xs",
                                        style: tv.dismissIcon
                                    }),
                                    ariaLabel: m.formatMessage(tb.dismiss),
                                    size: "xs",
                                    ...e
                                })
                            }) : void 0, (0, g.jsx)("div", {
                                style: tv.inlineErrorExtension
                            })]
                        })
                    })
                })
            }
            let tk = {
                position: "relative"
            };

            function tC(e) {
                let {
                    aiChatFeatureController: t,
                    children: o,
                    inputMode: a,
                    loadAttachmentData: s,
                    onEsc: r,
                    textStoreFocus: l,
                    compact: c = !1
                } = e, d = t.isChatCompletelyDisabled(a), [u, p] = (0, i.useState)(!1), h = (0, n(960253).e)(), m = (0, n(960253).I)(() => {
                    let e, i, o = t.shouldRenderHeadless;
                    c ? e = l.isFocused ? `0 0 0 1px ${n(632079).Tj.border.primaryTranslucent}, ${n(632079).Tj.shadow.base.md}` : `0 0 0 1px ${n(632079).Tj.border.secondaryTranslucent}, ${n(632079).Tj.shadow.base.md}` : o || (e = l.isFocused ? t.isChatInputElevated ? n(632079).Tj.shadow.outline.lg : n(632079).Tj.shadow.outline.md : t.isChatInputElevated ? n(632079).Tj.shadow.outline.md : n(632079).Tj.shadow.outline.sm, i = u || l.isFocused && t.supportsBlueFocusRing ? `2px solid ${n(632079).Tj.blue.border.accentPrimary}` : void 0);
                    let s = eM({
                            themeMode: h,
                            shouldRenderHeadless: o,
                            usesElevatedDarkModeBackground: t.usesElevatedDarkModeBackground
                        }),
                        r = t.extraSpaciousStyle ? 22 : 16;
                    return {
                        container: {
                            position: "relative",
                            boxShadow: e,
                            backgroundColor: s,
                            ...o || "filesRequireConfirmation" !== a ? o ? {} : {
                                borderRadius: r
                            } : {
                                borderStartStartRadius: 0,
                                borderStartEndRadius: 0,
                                borderEndStartRadius: r,
                                borderEndEndRadius: r
                            },
                            outline: i,
                            minWidth: 0,
                            transition: c || !o ? "box-shadow 0.1s ease-in-out" : void 0,
                            padding: t.extraSpaciousStyle ? 4 : void 0,
                            pointerEvents: "none"
                        }
                    }
                }, [c, l.isFocused, u, t.supportsBlueFocusRing, t.isChatInputElevated, t.usesElevatedDarkModeBackground, t.shouldRenderHeadless, t.extraSpaciousStyle, a, h]), f = (0, i.useCallback)(e => {
                    e.preventDefault(), p(!0)
                }, []), y = (0, i.useCallback)(e => {
                    e.preventDefault(), p(!1)
                }, []), b = (0, i.useCallback)(e => {
                    if (!s || !s.onDropFiles) return;
                    e.stopPropagation(), e.preventDefault(), p(!1);
                    let t = Array.from(e.dataTransfer.files);
                    t.length > 0 && s.onDropFiles(t)
                }, [s]), S = !d && (null == s ? void 0 : s.onDropFiles) !== void 0, v = (0, i.useRef)(null), x = (0, i.useCallback)(e => {
                    e.target === v.current && l.focus()
                }, [l]);
                return (0, g.jsx)(n(369064).N, {
                    onEsc: r,
                    debugName: "UnifiedChatBorder",
                    capture: l.isFocused && !d,
                    children: (0, g.jsx)("div", {
                        ref: v,
                        role: "presentation",
                        style: tk,
                        onDragOver: S ? f : void 0,
                        onDragLeave: S ? y : void 0,
                        onDrop: S ? b : void 0,
                        onPointerDown: x,
                        children: (0, g.jsx)(n(4458).VP, {
                            className: "autolayout-col autolayout-fill-width",
                            style: m.container,
                            children: o
                        })
                    })
                })
            }

            function tM(e) {
                let {
                    textValue: t,
                    onAnimationEnd: o,
                    disableAnimation: s,
                    overrideTextStyles: r
                } = e, l = (0, n(533992).v3)(), c = (0, n(960253).e)(), d = (0, n(815048).fJ)(n(406921).V), u = e.chunkSize ? ? 20, h = (0, n(682985).K8)(() => {
                    let e = (0, n(328765).S)();
                    if (!e) return [];
                    let i = e.getSpaceId();
                    return (function(e) {
                        let {
                            textValue: t,
                            chunkSize: n
                        } = e, i = [];
                        for (let e of t)
                            if ((0, a().bHQ)(e)) {
                                let [t] = e;
                                for (let e of t) i.push([e])
                            } else if ((0, a().BEe)(e)) {
                            let [t, n] = e;
                            for (let e of t) {
                                let t = [e, n];
                                i.push(t)
                            }
                        } else(0, a().qXl)(e) ? i.push(e) : (0, a().GiG)(e) || (0, a().iHq)(e) || (0, p().HB)(e);
                        let o = 0,
                            s = [];
                        for (let e of i) {
                            let t = Math.floor(o / n),
                                i = s.at(t),
                                a = i ? [...i, e] : [e];
                            s[t] = a, o += 1
                        }
                        return s
                    })({
                        textValue: t,
                        chunkSize: u
                    }).map(t => n(536614).S5({
                        environment: l,
                        textValue: {
                            value: t,
                            spaceId: i
                        },
                        parentStore: e,
                        disableHover: !1,
                        disableStyleAnnotations: !0,
                        disableInsertedDeletedAnnotations: !0,
                        disableDateStyleAnnotations: !0,
                        disableSuggestionAnnotations: !0,
                        disabled: !0,
                        emojiType: (0, n(591404).FN)(l),
                        theme: n(632079).Tj,
                        themeMode: c,
                        katex: d.value,
                        formulaValueTypes: []
                    }))
                }, [l, c, t, u, d.value]), m = s ? h.length : 0, [f, y] = i.useState(m);
                return (0, i.useEffect)(() => {
                    if (f < h.length) {
                        let e = setTimeout(() => {
                            y(f + 1)
                        }, Math.floor(76 * Math.random() + 25));
                        return () => clearTimeout(e)
                    }
                }, [f, h]), (0, i.useEffect)(() => {
                    h.length !== f || s || null == o || o()
                }, [h.length, f, o, s]), (0, g.jsx)("div", {
                    style: r,
                    children: h.slice(0, f).map((e, t) => (0, g.jsx)(i.Fragment, {
                        children: e
                    }, t))
                })
            }
            let tj = (0, n(109939).YK)({
                    otherPlaceholder: {
                        id: "surveyInputContent.otherPlaceholder",
                        defaultMessage: "Or, describe your requirements…"
                    },
                    previousQuestion: {
                        id: "surveyInputContent.previousQuestion",
                        defaultMessage: "Previous question"
                    },
                    dismiss: {
                        id: "surveyInputContent.dismiss",
                        defaultMessage: "Dismiss survey"
                    },
                    questionCounter: {
                        id: "surveyInputContent.questionCounter",
                        defaultMessage: "{current} / {total}"
                    }
                }),
                tI = {
                    content: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        padding: "12px 4px",
                        pointerEvents: "auto",
                        position: "relative"
                    },
                    optionsScrollable: {
                        maxHeight: 200,
                        overflowY: "auto"
                    },
                    optionsTopFade: {
                        maskImage: "linear-gradient(to bottom, transparent 0%, black 40px, black 100%)"
                    },
                    optionsBottomFade: {
                        maskImage: "linear-gradient(to bottom, black 0%, black calc(100% - 40px), transparent 100%)"
                    },
                    optionsBothFade: {
                        maskImage: "linear-gradient(to bottom, transparent 0%, black 40px, black calc(100% - 40px), transparent 100%)"
                    },
                    backButtonContainer: {
                        width: 15,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                    },
                    backButton: {
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    backButtonHovered: {
                        background: n(632079).Tj.buttonHoveredBackground
                    },
                    questionText: {
                        flex: 1,
                        minWidth: 0
                    },
                    counter: {
                        flexShrink: 0
                    },
                    dismissButton: {
                        position: "absolute",
                        insetInlineEnd: 12,
                        top: 12,
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: n(632079).Tj.buttonHoveredBackground
                    },
                    dismissButtonHovered: {
                        background: n(632079).Tj.buttonPressedBackground
                    },
                    optionRow: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: 10,
                        cursor: "pointer",
                        padding: "8px 10px",
                        borderRadius: 8
                    },
                    optionRowHighlighted: {
                        background: n(632079).Tj.background.secondaryTranslucent
                    },
                    radioCircle: {
                        width: 15,
                        height: 15,
                        borderRadius: "50%",
                        boxShadow: `0 0 0 1.5px ${n(632079).Tj.border.strongTranslucent}`,
                        background: n(632079).Tj.background.primary,
                        flexShrink: 0,
                        transition: "background 100ms ease-out, box-shadow 100ms ease-out",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 5
                    },
                    radioCircleCompact: {
                        marginTop: 3
                    },
                    checkboxTopAlign: {
                        marginTop: 4
                    },
                    checkboxTopAlignCompact: {
                        marginTop: 2
                    },
                    radioCircleSelected: {
                        boxShadow: `0 0 0 1.5px ${n(632079).Tj.blue.background.accentPrimary}`,
                        background: n(632079).Tj.blue.background.accentPrimary
                    },
                    radioCircleInnerDot: {
                        width: 6,
                        height: 6,
                        borderRadius: 6,
                        background: n(632079).Tj.blue.text.inversePrimary
                    },
                    checkboxRow: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: 10,
                        cursor: "pointer",
                        padding: "8px 10px",
                        borderRadius: 8
                    },
                    otherRow: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "8px 10px",
                        borderRadius: 8,
                        cursor: "text"
                    },
                    otherTextInput: {
                        flex: 1,
                        padding: 0,
                        border: "none",
                        background: "transparent",
                        color: n(632079).Tj.text.primary,
                        fontSize: 16,
                        lineHeight: "24px",
                        outline: "none",
                        pointerEvents: "auto"
                    },
                    otherTextInputCompact: {
                        fontSize: 14,
                        lineHeight: "20px"
                    },
                    optionRichText: {
                        flex: 1,
                        minWidth: 0,
                        color: n(632079).Tj.text.primary,
                        fontSize: 16,
                        lineHeight: "24px"
                    },
                    optionRichTextCompact: {
                        fontSize: 14,
                        lineHeight: "20px"
                    },
                    optionLabelContainer: {
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        alignItems: "center"
                    }
                };

            function tA(e) {
                return void 0 !== e && (Array.isArray(e) ? e.some(tw) : tw(e))
            }

            function tw(e) {
                return e === o().qr || (0, o().c9)(e) || "string" == typeof e && e.startsWith(o().$_)
            }

            function t_(e) {
                let {
                    responses: t,
                    questionId: n,
                    response: i
                } = e;
                if (void 0 === i) {
                    let {
                        [n]: e, ...i
                    } = t;
                    return i
                }
                return { ...t,
                    [n]: i
                }
            }

            function tT(e) {
                let {
                    questions: t,
                    responses: n
                } = e, i = t.findIndex(e => {
                    var t;
                    return !(void 0 !== (t = n[e.id]) && (!Array.isArray(t) || t.length > 0))
                });
                return i >= 0 ? i : Math.max(t.length - 1, 0)
            }
            let tP = (0, i.memo)(function(e) {
                    let {
                        surveyStepId: t,
                        questions: s,
                        initialResponses: r,
                        onComplete: l,
                        onDraftResponsesChange: c,
                        onDismiss: d,
                        onToolbarActionChange: u,
                        showAnimatedFace: p,
                        animateInitialQuestion: h,
                        compact: m,
                        spaceStore: f,
                        threadId: y
                    } = e, b = (0, n(109939).tz)(), [S, v] = (0, i.useState)(() => tT({
                        questions: s,
                        responses: r ? ? {}
                    })), [x, k] = (0, i.useState)(() => r ? ? {}), C = (0, i.useRef)(x);
                    C.current = x;
                    let M = (0, i.useRef)(t),
                        j = (0, i.useRef)(JSON.stringify(r ? ? {})),
                        I = (0, i.useRef)(void 0),
                        A = s[S],
                        w = null == A ? void 0 : A.id,
                        _ = null == A ? void 0 : A.prompt,
                        T = S === s.length - 1,
                        [P, E] = (0, i.useState)(!1),
                        [F, R] = (0, i.useState)("static"),
                        D = (0, i.useRef)(w),
                        B = (0, i.useRef)(!1),
                        N = (0, i.useRef)(void 0),
                        [U, z] = (0, i.useState)(!1),
                        K = (0, i.useRef)(w);
                    (0, i.useEffect)(() => {
                        K.current !== w && (K.current = w, z(!1));
                        let e = requestAnimationFrame(() => {
                            z(!0)
                        });
                        return () => cancelAnimationFrame(e)
                    }, [w, t]);
                    let [V, O] = (0, i.useState)(0), [L, W] = (0, i.useState)(!1), [q, H] = (0, i.useState)(!1), $ = (0, i.useRef)(null), Y = (0, i.useRef)(null), J = (0, i.useCallback)(() => {
                        let e = Y.current;
                        e && (W(e.scrollTop > 1), H(e.scrollHeight - e.scrollTop - e.clientHeight > 1))
                    }, []);
                    (0, i.useEffect)(() => {
                        let e = Y.current;
                        if (e && m) return J(), e.addEventListener("scroll", J, {
                            passive: !0
                        }), () => e.removeEventListener("scroll", J)
                    }, [m, J, w]);
                    let G = (0, i.useCallback)(() => {
                            requestAnimationFrame(() => {
                                var e;
                                null == (e = Y.current) || e.focus()
                            })
                        }, []),
                        Q = void 0 !== w ? x[w] : void 0,
                        X = tA(Q),
                        Z = function(e) {
                            if (void 0 !== e) {
                                if (Array.isArray(e)) {
                                    let t = e.find(o().c9);
                                    if (t) return t.value;
                                    for (let t of e)
                                        if ("string" == typeof t && t.startsWith(o().$_)) return (0, a().x9d)(t.slice(o().$_.length));
                                    return
                                }
                                return (0, o().c9)(e) ? e.value : "string" == typeof e && e.startsWith(o().$_) ? (0, a().x9d)(e.slice(o().$_.length)) : void 0
                            }
                        }(Q),
                        ee = (0, i.useMemo)(() => {
                            if (void 0 !== _) return (0, a().x9d)(_)
                        }, [_]),
                        et = !!A;
                    (0, i.useEffect)(() => {
                        if (void 0 !== N.current && (window.clearTimeout(N.current), N.current = void 0), void 0 === w) {
                            D.current = void 0, R("static"), E(!1);
                            return
                        }
                        let e = M.current !== t,
                            n = void 0 !== D.current && D.current !== w,
                            i = !0 === h && (e || !B.current);
                        if (D.current = w, B.current = !0, O(0), i && !n) {
                            R("hidden"), E(!1), N.current = window.setTimeout(() => {
                                R("animated"), E(!0), N.current = void 0
                            }, 250);
                            return
                        }
                        R("static"), E(!1)
                    }, [h, !1, t, w]), (0, i.useEffect)(() => () => {
                        void 0 !== N.current && window.clearTimeout(N.current)
                    }, []), (0, i.useEffect)(() => {
                        if (M.current === t) return;
                        M.current = t;
                        let e = r ? ? {};
                        k(e), v(tT({
                            questions: s,
                            responses: e
                        })), j.current = JSON.stringify(e), void 0 !== I.current && (window.clearTimeout(I.current), I.current = void 0)
                    }, [t, s, r]);
                    let en = (0, i.useCallback)(e => {
                        let t = JSON.stringify(e);
                        t !== j.current && (c(e), j.current = t)
                    }, [c]);
                    (0, i.useEffect)(() => {
                        void 0 !== I.current && (window.clearTimeout(I.current), I.current = void 0), JSON.stringify(x) !== j.current && (I.current = window.setTimeout(() => {
                            en(C.current), I.current = void 0
                        }, 250))
                    }, [x, en]), (0, i.useEffect)(() => () => {
                        void 0 !== I.current && (window.clearTimeout(I.current), I.current = void 0), en(C.current)
                    }, [en]);
                    let ei = (0, i.useCallback)(() => {
                            T ? l(C.current) : v(e => e + 1)
                        }, [T, l]),
                        eo = (0, i.useCallback)(() => {
                            v(e => Math.max(0, e - 1))
                        }, []);
                    (0, i.useEffect)(() => {
                        A ? u({
                            onNext: ei,
                            visible: et,
                            isLastQuestion: T
                        }) : u(void 0)
                    }, [A, ei, T, u, et]), (0, i.useEffect)(() => () => u(void 0), [u]);
                    let {
                        store: ea,
                        setValue: es
                    } = (0, n(430937).AI)({
                        initialValue: (0, a().x9d)(""),
                        shouldUseDefaultRecordCacheFallback: !0,
                        onChange: e => {
                            A && k(t => {
                                let n = t[A.id];
                                if (!tA(n) && (0, a().w9s)(e)) return t;
                                let i = (0, a().w9s)(e) ? o().qr : {
                                    type: "other",
                                    value: e ? ? (0, a().x9d)("")
                                };
                                if (A.allowMultiple) {
                                    let e = (Array.isArray(n) ? n : []).filter(e => !tw(e));
                                    return t_({
                                        responses: t,
                                        questionId: A.id,
                                        response: [...e, i]
                                    })
                                }
                                return t_({
                                    responses: t,
                                    questionId: A.id,
                                    response: i
                                })
                            })
                        }
                    }), er = (0, n(49768).Q7)({
                        textStore: ea
                    });
                    (0, i.useEffect)(() => {
                        let e = Z ? ? (0, a().x9d)("");
                        JSON.stringify(ea.getValue() ? ? []) !== JSON.stringify(e) && es(e)
                    }, [null == A ? void 0 : A.id, ea, Z, es]);
                    let el = (0, i.useCallback)(e => {
                            A && (y && (0, n(104310).u)({
                                event: {
                                    eventName: "agent_survey_option_selected",
                                    eventProperties: {
                                        thread_id: y,
                                        survey_step_id: t,
                                        question_id: A.id,
                                        is_other: e === o().qr,
                                        allow_multiple: !1
                                    }
                                }
                            }), k({ ...C.current,
                                [A.id]: e
                            }), e === o().qr ? requestAnimationFrame(() => er.focus()) : G())
                        }, [A, G, er, t, y]),
                        ec = (0, i.useCallback)(e => {
                            A && (y && (0, n(104310).u)({
                                event: {
                                    eventName: "agent_survey_option_selected",
                                    eventProperties: {
                                        thread_id: y,
                                        survey_step_id: t,
                                        question_id: A.id,
                                        is_other: e === o().qr,
                                        allow_multiple: !0
                                    }
                                }
                            }), k(t => {
                                let n = t[A.id],
                                    i = Array.isArray(n) ? n : [];
                                if (e === o().qr) {
                                    if (i.some(tw)) {
                                        let e = i.filter(e => !tw(e));
                                        return G(), t_({
                                            responses: t,
                                            questionId: A.id,
                                            response: e.length > 0 ? e : void 0
                                        })
                                    }
                                    return requestAnimationFrame(() => er.focus()), t_({
                                        responses: t,
                                        questionId: A.id,
                                        response: [...i, o().qr]
                                    })
                                }
                                let a = i.includes(e);
                                G();
                                let s = a ? i.filter(t => t !== e) : [...i, e];
                                return t_({
                                    responses: t,
                                    questionId: A.id,
                                    response: s.length > 0 ? s : void 0
                                })
                            }))
                        }, [A, G, er, t, y]);
                    (0, i.useEffect)(() => {
                        if (!P && Y.current) {
                            var e;
                            let t = Y.current.ownerDocument.activeElement;
                            t instanceof HTMLElement && null != (e = $.current) && e.contains(t) || Y.current.focus()
                        }
                    }, [P, w]);
                    let ed = (0, i.useCallback)(() => {
                            d()
                        }, [d]),
                        eu = ((null == A ? void 0 : A.options.length) ? ? 0) + (null != A && A.allowOther ? 1 : 0),
                        ep = (0, i.useCallback)(e => {
                            var t;
                            if (!A) return "";
                            let n = e < A.options.length ? null == (t = A.options[e]) ? void 0 : t.id : o().qr;
                            return `survey-option-${A.id}-${n}`
                        }, [A]),
                        eg = eu > 0 ? ep(V) : void 0,
                        eh = (0, i.useMemo)(() => !!A && function(e) {
                            var t;
                            let {
                                currentQuestion: n,
                                currentResponse: i,
                                highlightedIndex: a
                            } = e, s = n.options.length, r = n.allowOther && a === s, l = r ? o().qr : null == (t = n.options[a]) ? void 0 : t.id;
                            return void 0 !== l && (r ? Array.isArray(i) ? i.some(tw) : void 0 !== i && tw(i) : n.allowMultiple ? Array.isArray(i) && i.includes(l) : i === l)
                        }({
                            currentQuestion: A,
                            currentResponse: Q,
                            highlightedIndex: V
                        }), [A, V, Q]),
                        em = (0, i.useCallback)(e => {
                            if (e.target === e.currentTarget && 0 !== eu) {
                                if ("ArrowDown" === e.key) e.preventDefault(), e.stopPropagation(), O(e => (e + 1) % eu);
                                else if ("ArrowUp" === e.key) e.preventDefault(), e.stopPropagation(), O(e => (e - 1 + eu) % eu);
                                else if ("Enter" === e.key) {
                                    var t;
                                    if (e.preventDefault(), e.stopPropagation(), !A) return;
                                    if (eh) return void ei();
                                    let n = A.options.length,
                                        i = A.allowOther && V === n ? o().qr : null == (t = A.options[V]) ? void 0 : t.id;
                                    if (void 0 === i) return;
                                    A.allowMultiple ? ec(i) : el(i)
                                }
                            }
                        }, [eu, A, V, eh, ei, ec, el]),
                        ef = (0, i.useCallback)(e => ({
                            opacity: +!!U,
                            transition: "opacity 500ms ease",
                            transitionDelay: `${100*e}ms`
                        }), [U]);
                    return A ? (0, g.jsxs)("div", {
                        ref: $,
                        style: tI.content,
                        role: "form",
                        "aria-live": "polite",
                        children: [p ? (0, g.jsx)(n(913638).F, {
                            top: 8,
                            marginTop: 0,
                            highLevelState: P ? "writing" : "idle"
                        }) : void 0, (0, g.jsxs)(n(4458).fI, {
                            gap: 10,
                            alignItems: "center",
                            paddingInlineStart: 10,
                            paddingInlineEnd: 48,
                            style: ef(0),
                            children: [S > 0 ? (0, g.jsx)("div", {
                                style: tI.backButtonContainer,
                                children: (0, g.jsx)(n(374533).A, {
                                    ariaLabel: b.formatMessage(tj.previousQuestion),
                                    icon: n(374241).arrowStraightLeftSmallIcon,
                                    onClick: eo,
                                    style: tI.backButton,
                                    hoveredStyle: tI.backButtonHovered,
                                    size: "sm"
                                })
                            }) : void 0, (0, g.jsx)(n(111010).D, {
                                styleKey: m ? "bodySemibold" : "bodyLgSemibold",
                                colorVariant: "primary",
                                style: tI.questionText,
                                children: "animated" === F && ee ? (0, g.jsx)(tM, {
                                    textValue: ee,
                                    onAnimationEnd: () => {
                                        E(!1)
                                    },
                                    chunkSize: 10
                                }, `${t}:${A.id}`) : "hidden" === F ? " " : A.prompt
                            }), s.length > 1 ? (0, g.jsx)(n(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "tertiary",
                                style: tI.counter,
                                children: b.formatMessage(tj.questionCounter, {
                                    current: S + 1,
                                    total: s.length
                                })
                            }) : void 0]
                        }), (0, g.jsxs)(n(4458).VP, {
                            ref: Y,
                            style: m ? { ...tI.optionsScrollable,
                                ...L && q && tI.optionsBothFade,
                                ...L && !q && tI.optionsTopFade,
                                ...!L && q && tI.optionsBottomFade
                            } : void 0,
                            onKeyDown: em,
                            tabIndex: 0,
                            role: "listbox",
                            "aria-multiselectable": !!A.allowMultiple || void 0,
                            "aria-activedescendant": eg,
                            children: [A.options.map((e, t) => (0, g.jsx)("div", {
                                style: ef(t + 1),
                                children: A.allowMultiple ? (0, g.jsx)(tR, {
                                    optionElementId: ep(t),
                                    option: e,
                                    isSelected: Array.isArray(Q) && Q.some(t => t === e.id),
                                    isHighlighted: V === t,
                                    onHighlight: () => O(t),
                                    onToggle: ec,
                                    compact: m,
                                    spaceStore: f
                                }) : (0, g.jsx)(tF, {
                                    optionElementId: ep(t),
                                    option: e,
                                    isSelected: Q === e.id,
                                    isHighlighted: V === t,
                                    onHighlight: () => O(t),
                                    onSelect: el,
                                    compact: m,
                                    spaceStore: f
                                })
                            }, e.id)), A.allowOther ? (0, g.jsx)("div", {
                                style: ef(A.options.length + 1),
                                children: (0, g.jsx)(tD, {
                                    optionElementId: ep(A.options.length),
                                    isMultiple: !0 === A.allowMultiple,
                                    isSelected: X,
                                    isHighlighted: V === A.options.length,
                                    onHighlight: () => O(A.options.length),
                                    onSelect: el,
                                    onToggle: ec,
                                    otherTextStore: ea,
                                    focusOtherTextStore: er.focus,
                                    onSubmit: ei,
                                    placeholder: b.formatMessage(tj.otherPlaceholder),
                                    compact: m
                                })
                            }) : void 0]
                        }), (0, g.jsx)(n(374533).A, {
                            ariaLabel: b.formatMessage(tj.dismiss),
                            icon: n(25094).xMarkSmallIcon,
                            onClick: ed,
                            style: tI.dismissButton,
                            hoveredStyle: tI.dismissButtonHovered,
                            size: "sm"
                        })]
                    }) : null
                }),
                tE = (0, i.memo)(function(e) {
                    let {
                        option: t,
                        compact: o,
                        spaceStore: a
                    } = e, s = (0, n(533992).v3)(), r = (0, n(109939).tz)(), l = (0, i.useMemo)(() => {
                        var e;
                        if (null != a && a.id && t.pageId && (null == (e = t.parts) || !e.length)) return new(n(970831)).B(s, {
                            table: n(832375).evP,
                            id: t.pageId,
                            spaceId: a.id
                        })
                    }, [s, t.pageId, t.parts, null == a ? void 0 : a.id]);
                    (0, i.useEffect)(() => {
                        l && l.load()
                    }, [l]);
                    let c = (0, n(682985).K8)(() => {
                            if (!l || !t.pageId || !l.isDefined()) return {};
                            let e = l.getRenderTitle({
                                intl: r,
                                userTimeZone: (0, n(714350).P)()
                            });
                            return e ? {
                                [t.pageId]: e
                            } : {}
                        }, [r, t.pageId, l]),
                        d = (0, i.useMemo)(() => (0, n(347403).oV)({
                            option: t,
                            spaceId: null == a ? void 0 : a.id,
                            pageTitleById: c
                        }), [t, c, null == a ? void 0 : a.id]),
                        {
                            store: u,
                            setValue: p
                        } = (0, n(430937).AI)({
                            initialValue: d,
                            shouldUseDefaultRecordCacheFallback: !0
                        });
                    return (0, i.useEffect)(() => {
                        JSON.stringify(u.getValue() ? ? []) !== JSON.stringify(d) && p(d)
                    }, [p, u, d]), (0, g.jsx)("div", {
                        style: tI.optionLabelContainer,
                        children: (0, g.jsx)(n(53373).A, {
                            store: u,
                            disabled: !0,
                            inPageFind: n(831719).Os.none,
                            disableEquationInteraction: !0,
                            style: { ...tI.optionRichText,
                                ...o && tI.optionRichTextCompact
                            }
                        })
                    })
                }),
                tF = (0, i.memo)(function(e) {
                    let {
                        optionElementId: t,
                        option: n,
                        isSelected: o,
                        isHighlighted: a,
                        onHighlight: s,
                        onSelect: r,
                        compact: l,
                        spaceStore: c
                    } = e, d = (0, i.useCallback)(() => {
                        r(n.id)
                    }, [r, n.id]);
                    return (0, g.jsxs)("div", {
                        id: t,
                        style: { ...tI.optionRow,
                            ...a && tI.optionRowHighlighted
                        },
                        onClick: d,
                        onMouseEnter: s,
                        role: "option",
                        "aria-selected": o,
                        tabIndex: -1,
                        children: [(0, g.jsx)("div", {
                            style: { ...tI.radioCircle,
                                ...l && tI.radioCircleCompact,
                                ...o && tI.radioCircleSelected
                            },
                            children: o ? (0, g.jsx)("div", {
                                style: tI.radioCircleInnerDot
                            }) : void 0
                        }), (0, g.jsx)(tE, {
                            option: n,
                            spaceStore: c,
                            compact: l
                        })]
                    })
                }),
                tR = (0, i.memo)(function(e) {
                    let {
                        optionElementId: t,
                        option: o,
                        isSelected: a,
                        isHighlighted: s,
                        onHighlight: r,
                        onToggle: l,
                        compact: c,
                        spaceStore: d
                    } = e, u = (0, i.useCallback)(() => {
                        l(o.id)
                    }, [l, o.id]), p = (0, i.useCallback)(e => {
                        e.stopPropagation(), l(o.id)
                    }, [l, o.id]);
                    return (0, g.jsxs)("div", {
                        id: t,
                        style: { ...tI.checkboxRow,
                            ...s && tI.optionRowHighlighted
                        },
                        onClick: u,
                        onMouseEnter: r,
                        role: "option",
                        "aria-selected": a,
                        tabIndex: -1,
                        children: [(0, g.jsx)("div", {
                            style: c ? tI.checkboxTopAlignCompact : tI.checkboxTopAlign,
                            children: (0, g.jsx)(n(349050).S, {
                                checked: a,
                                size: 16,
                                onClick: p
                            })
                        }), (0, g.jsx)(tE, {
                            option: o,
                            spaceStore: d,
                            compact: c
                        })]
                    })
                }),
                tD = (0, i.memo)(function(e) {
                    let {
                        optionElementId: t,
                        isMultiple: a,
                        isSelected: s,
                        isHighlighted: r,
                        onHighlight: l,
                        onSelect: c,
                        onToggle: d,
                        otherTextStore: u,
                        focusOtherTextStore: p,
                        onSubmit: h,
                        placeholder: m,
                        compact: f
                    } = e, y = (0, i.useCallback)(() => {
                        a ? s || d(o().qr) : s || c(o().qr), requestAnimationFrame(() => p())
                    }, [p, a, s, d, c]), b = (0, i.useCallback)(e => {
                        e.stopPropagation(), d(o().qr)
                    }, [d]);
                    return (0, g.jsxs)("div", {
                        id: t,
                        style: { ...tI.otherRow,
                            ...r && tI.optionRowHighlighted
                        },
                        onClick: y,
                        onMouseEnter: l,
                        role: "option",
                        "aria-selected": s,
                        tabIndex: -1,
                        children: [a ? (0, g.jsx)("div", {
                            style: f ? tI.checkboxTopAlignCompact : tI.checkboxTopAlign,
                            children: (0, g.jsx)(n(349050).S, {
                                checked: s,
                                size: 16,
                                onClick: b
                            })
                        }) : (0, g.jsx)("div", {
                            style: { ...tI.radioCircle,
                                ...f && tI.radioCircleCompact,
                                ...s && tI.radioCircleSelected
                            },
                            children: s ? (0, g.jsx)("div", {
                                style: tI.radioCircleInnerDot
                            }) : void 0
                        }), (0, g.jsx)(n(53373).A, {
                            store: u,
                            placeholder: m,
                            onEnter: h,
                            style: { ...tI.otherTextInput,
                                ...f && tI.otherTextInputCompact
                            },
                            disabled: !1,
                            pasteBehavior: "inline",
                            disableSlashCommands: !0,
                            disableEmbedMenu: !0,
                            disableEmojiCommands: !1,
                            disableComment: !0,
                            disableSelectAllBlocks: !0,
                            disableSelectionDrag: !0,
                            disableStyleAnnotations: !1,
                            disableInsertedDeletedAnnotations: !0,
                            disableSuggestEdit: !0,
                            disableMobileActionBar: !0,
                            inPageFind: n(831719).Os.none,
                            usePopupForMentionOnMobile: !0
                        })]
                    })
                }),
                tB = {
                    sm: 44,
                    default: 56,
                    md: 84,
                    lg: 112
                },
                tN = {
                    sm: 240,
                    default: 240,
                    md: 240,
                    lg: 240
                },
                tU = ["currentPage", "skill", "page"];

            function tz(e) {
                return e.shouldRenderHeadless ? 0 : e.isSingleLineInput ? 10 : 12
            }
            let tK = {
                    flexGrow: 1,
                    flexShrink: 1,
                    minWidth: 0,
                    maxWidth: "calc(100% - 40px)",
                    width: 0,
                    overflowX: "auto",
                    overflowY: "hidden"
                },
                tV = {
                    visibility: "hidden",
                    pointerEvents: "none"
                };

            function tO(e) {
                let {
                    aiChatFeatureController: t,
                    inputMode: o,
                    allowQueuingDuringStreaming: a,
                    loadAttachmentData: s,
                    onEsc: r,
                    onSubmit: l,
                    onCommandEnter: c,
                    onCommandAltEnter: d,
                    onBackspace: u,
                    onTextChange: p,
                    placeholder: h,
                    textStore: m,
                    textStoreFocus: f,
                    ignoreKeyboardMode: y,
                    alignWithSimplifiedActions: b,
                    hideTextInput: S = !1
                } = e, v = (0, n(533992).v3)(), {
                    bodyStyleKey: x
                } = (0, n(765846).yq)(), k = t.isChatCompletelyDisabled(o) || "recording" === o, C = t.isChatSubmitDisabled(a && "runningInference" === o ? "ready" : o), M = t.isSingleLineInput, j = (0, n(83208).X)("agent_enable_context_block_selection") && !M, I = eG(), A = (0, i.useMemo)(() => I ? { ...n(86484).md,
                    bot: !1
                } : n(86484).md, [I]), w = (0, i.useCallback)(() => {
                    n(986939).A.isMobile && f.blur()
                }, [f]), _ = (0, n(533677).t)(), T = (0, i.useCallback)(() => {
                    if (j) {
                        let e = (0, n(420459).G4)();
                        _(e) && n(562733).zI.update(t => ({ ...t,
                            completionContext: e
                        }))
                    }
                    n(169274).wr(), (0, n(411282).w)(), n(986939).A.isMobile && f.focus()
                }, [f, j, _]), P = (0, i.useCallback)(() => {
                    C || l()
                }, [l, C]), E = (0, i.useCallback)(() => {
                    n(374176).default.afterNextFlush(() => {
                        let e = n(521595).n.findNodeFromStore(m);
                        e && (e.scrollTop = e.scrollHeight)
                    })
                }, [m]), F = (0, n(682985).K8)(() => {
                    var e;
                    let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                    return (null == t || null == (e = t.getSettings()) ? void 0 : e.chat_enter_key_behavior) ? ? "send"
                }, []), R = t.isSubmitOnReturnEnabled && "send" === F, D = (0, i.useCallback)(e => {
                    C || null == c || c(e)
                }, [C, c]), B = (0, i.useCallback)(e => {
                    C || null == d || d(e)
                }, [C, d]), N = (0, i.useCallback)(e => {
                    if (null != u && u(e) || !(e instanceof KeyboardEvent)) return;
                    let t = n(358377).default.state;
                    if ("editing" !== t.mode) return;
                    let i = t.multiSelection;
                    if (i.start.store !== m || n(99147).CZ({
                            device: v.device,
                            event: e,
                            multiSelection: i
                        })) return;
                    let o = m.pointer.spaceId;
                    (0, n(377796).createAndCommit)({
                        userAction: "UnifiedChatTextInput.handleBackspace",
                        environment: v,
                        cellTarget: o ? {
                            spaceWithId: o
                        } : void 0,
                        canUndo: !0,
                        perform: t => {
                            n(99147).wT({
                                environment: v,
                                multiSelection: i,
                                deleteForwards: !1,
                                transaction: t,
                                event: e,
                                editorMode: "default"
                            })
                        }
                    })
                }, [v, u, m]), U = (0, n(960253).I)(() => {
                    let e = M ? 40 : tB[t.chatInputContainerMinHeight],
                        n = t.chatInputHeightCanGrow ? tN[t.chatInputContainerMinHeight] : e,
                        i = t.shouldShowInlineSubmit ? t.shouldUseCompactSubmitButton ? 30 : 44 : 12 * !t.shouldRenderHeadless,
                        o = function(e) {
                            let {
                                isSingleLine: t,
                                basePadding: n,
                                paddingInlineEnd: i,
                                alignWithSimplifiedActions: o
                            } = e;
                            return `${n}px ${i}px ${o?0:n}px ${(t?14:n)+2*!!o}px`
                        }({
                            basePadding: tz(t),
                            paddingInlineEnd: i,
                            isSingleLine: M,
                            alignWithSimplifiedActions: !!b && !t.shouldRenderHeadless
                        });
                    return {
                        placeholder: {
                            opacity: 1,
                            cursor: "text",
                            minHeight: e
                        },
                        textContainer: M ? {
                            padding: o,
                            minHeight: e,
                            maxHeight: n,
                            whiteSpace: "pre",
                            width: "100%",
                            boxSizing: "border-box",
                            pointerEvents: "auto"
                        } : {
                            flexGrow: 1,
                            padding: o,
                            minHeight: e,
                            maxHeight: n,
                            overflow: "auto",
                            width: "100%",
                            pointerEvents: "auto"
                        }
                    }
                }, [t, b, M]), z = (0, g.jsx)(n(53373).A, {
                    disableComment: !0,
                    disabled: k,
                    disabledMentionTypes: A,
                    disableEmbedMenu: !0,
                    disableEmojiCommands: !1,
                    disableInsertedDeletedAnnotations: !0,
                    disableMobileActionBar: !0,
                    disableSelectAllBlocks: !0,
                    disableSelectionDrag: !0,
                    disableSlashCommands: !0,
                    disableStyleAnnotations: !1,
                    disableSuggestEdit: !0,
                    disableRichTextActions: !0,
                    disableTryCloseSidePeek: !0,
                    disableShiftEnter: M,
                    enterBehavior: R ? "block-break" : "soft-break",
                    inPageFind: n(831719).Os.none,
                    onChange: p,
                    onEnter: R ? P : void 0,
                    onCommandEnter: c ? D : void 0,
                    onCommandAltEnter: d ? B : void 0,
                    onBackspace: N,
                    onEsc: r,
                    onBlur: w,
                    onFocus: T,
                    onPasteFiles: null == s ? void 0 : s.onPasteFiles,
                    onTab: () => !0,
                    onUntab: () => !0,
                    pasteBehavior: "inline",
                    placeholder: h,
                    placeholderStyle: U.placeholder,
                    preserveBlockSelection: j,
                    store: m,
                    style: U.textContainer,
                    usePopupForMentionOnMobile: !0,
                    emptyMentionSectionOrdering: tU,
                    testId: "agent-chat-input",
                    ignoreKeyboardMode: y,
                    context: "agent-chat-input",
                    enableChatSelectionContextTokens: !0,
                    onSoftBreak: E
                });
                return (0, g.jsx)(n(111010).D, {
                    colorVariant: k ? "secondary" : "primary",
                    styleKey: x,
                    style: S ? tV : void 0,
                    children: M ? (0, g.jsx)(n(4458).fI, {
                        flexGrow: 1,
                        flexShrink: 1,
                        minWidth: 0,
                        children: (0, g.jsx)("div", {
                            className: "hide-scrollbar",
                            style: tK,
                            children: z
                        })
                    }) : z
                })
            }

            function tL(e) {
                return "image/png" === e || "image/jpeg" === e || "image/gif" === e || "image/webp" === e || "image/heic" === e
            }
            let tW = new Set(["PDF", "CSV", "Image"]),
                tq = {
                    position: "absolute",
                    top: 4,
                    insetInlineEnd: 4,
                    borderRadius: 9999,
                    background: "rgba(0, 0, 0, 0.5)",
                    height: 16,
                    width: 16
                },
                tH = {
                    background: "rgba(0, 0, 0, 0.8)"
                },
                t$ = {
                    width: 12,
                    height: 12
                },
                tY = {
                    position: "relative"
                };

            function tJ(e) {
                let {
                    onRemove: t,
                    ariaLabel: i
                } = e;
                return (0, g.jsx)(n(374533).A, {
                    icon: n(25094).xMarkSmallIcon,
                    ariaLabel: i,
                    style: tq,
                    iconStyle: t$,
                    hoveredStyle: tH,
                    hasBackground: !0,
                    colorVariant: "inversePrimary",
                    onClick: t
                })
            }
            let tG = {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 10
                },
                tQ = {
                    position: "relative",
                    minWidth: 0,
                    overflow: "hidden"
                },
                tX = {
                    maxWidth: "100%",
                    display: "flex",
                    overflow: "hidden"
                },
                tZ = {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                t0 = {
                    flexShrink: 0,
                    whiteSpace: "nowrap"
                };

            function t1(e) {
                let {
                    fileName: t
                } = e, i = t.lastIndexOf("."), o = i > 0, a = o ? t.slice(0, i) : t, s = o ? t.slice(i) : "";
                return (0, g.jsxs)(n(111010).D, {
                    styleKey: "bodyMedium",
                    colorVariant: "primary",
                    style: tX,
                    children: [(0, g.jsx)("span", {
                        style: tZ,
                        children: a
                    }), s ? (0, g.jsx)("span", {
                        style: t0,
                        children: s
                    }) : void 0]
                })
            }

            function t2(e) {
                let {
                    attachment: t,
                    onDeleteStagedAttachment: i,
                    isDisabled: o,
                    permissionRecord: a
                } = e, s = (0, n(109939).tz)(), r = function(e) {
                    let {
                        attachment: t,
                        permissionRecord: i
                    } = e, o = (0, n(533992).v3)(), [{
                        value: a
                    }] = (0, n(97668).Yb)(async () => {
                        if ("complete" !== t.status) return;
                        if (!i) return tL(t.contentType) ? t.fileUrl : void 0;
                        let e = await o.api.callCellCompatibleApi({
                            eventName: "getSignedFileUrls",
                            environment: o,
                            data: {
                                urls: [{
                                    url: t.fileUrl,
                                    download: !1,
                                    downloadName: t.fileName,
                                    permissionRecord: i
                                }]
                            },
                            cellNavigation: {
                                spaceId: i.spaceId
                            }
                        });
                        if ("failed" === e.type) throw e.error;
                        return e.data.signedUrls[0]
                    }, [t, o, i]);
                    return a
                }({
                    attachment: t,
                    permissionRecord: a
                }), l = (0, n(685672).e)(t.fileName, t.contentType), c = l.icon, d = tL(t.contentType), u = "complete" === t.status ? r ? ? t.fileUrl : void 0, p = d && u, h = "in_progress" === t.status, m = h || p, f = (0, n(960253).I)(() => ({
                    card: {
                        position: "relative",
                        minWidth: m ? 64 : 210,
                        maxWidth: m ? 64 : 240,
                        height: 64,
                        borderRadius: 10,
                        boxShadow: n(632079).Tj.shadow.outline.sm,
                        flexShrink: 0
                    },
                    fileIconWrapper: {
                        position: "relative",
                        borderRadius: 6,
                        backgroundColor: l.backgroundColor
                    },
                    fileIcon: {
                        width: 22,
                        height: 22,
                        fill: l.iconColor
                    }
                }), [m, l]);
                return h ? (0, g.jsx)(n(4458).VP, {
                    className: "autolayout-col",
                    height: 64,
                    width: 64,
                    style: f.card,
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, g.jsx)(n(517334).k, {
                        size: "lg"
                    })
                }) : (0, g.jsxs)(n(4458).VP, {
                    height: 64,
                    gap: 8,
                    style: f.card,
                    alignItems: "flex-start",
                    justifyContent: "center",
                    className: "autolayout-col autolayout-fill-width",
                    children: [p ? (0, g.jsx)(n(989059).A, {
                        src: (0, n(148337).o9)(u),
                        alt: t.fileName,
                        style: tG
                    }) : (0, g.jsxs)(n(4458).fI, {
                        gap: 8,
                        paddingInlineEnd: 12,
                        paddingInlineStart: 4,
                        alignItems: "center",
                        style: tY,
                        alignSelf: "stretch",
                        children: [(0, g.jsx)(n(4458).VP, {
                            className: "autolayout-col",
                            height: 56,
                            width: 56,
                            style: f.fileIconWrapper,
                            alignItems: "center",
                            justifyContent: "center",
                            children: c(f.fileIcon)
                        }), (0, g.jsxs)(n(4458).VP, {
                            gap: 4,
                            className: "autolayout-col",
                            style: tQ,
                            alignItems: "flex-start",
                            justifyContent: "center",
                            flex: "1 1 0",
                            children: [(0, g.jsx)(t1, {
                                fileName: t.fileName
                            }), tW.has(l.label) ? (0, g.jsx)(n(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "secondary",
                                children: l.label
                            }) : void 0]
                        })]
                    }), o ? null : (0, g.jsx)(tJ, {
                        ariaLabel: s.formatMessage({
                            id: "unifiedChatAttachmentsCarousel.removeAttachment",
                            defaultMessage: "Remove {fileName} from context"
                        }, {
                            fileName: t.fileName
                        }),
                        onRemove: () => {
                            "complete" === t.status && i(t.fileUrl)
                        }
                    })]
                })
            }
            let t5 = {
                padding: "12px 12px 2px",
                pointerEvents: "auto",
                width: "100%"
            };

            function t9(e) {
                let {
                    attachments: t,
                    onDeleteStagedAttachment: o,
                    threadId: a,
                    spaceId: s,
                    isDisabled: r
                } = e, l = (0, i.useMemo)(() => {
                    if (a) return {
                        table: n(832375).Toz,
                        id: a,
                        spaceId: s
                    }
                }, [a, s]);
                return 0 === t.length ? null : (0, g.jsx)(n(126767).H, {
                    type: n(644154).A.X,
                    style: t5,
                    preventType: n(644154).A.Y,
                    children: (0, g.jsx)(n(4458).fI, {
                        gap: 10,
                        alignItems: "center",
                        className: "autolayout-row autolayout-fill-width",
                        style: tY,
                        children: t.map(e => (0, g.jsx)(t2, {
                            attachment: e,
                            permissionRecord: l,
                            onDeleteStagedAttachment: o,
                            isDisabled: r
                        }, "complete" === e.status ? e.fileUrl : `in-progress-${e.fileName}-${e.timeUploaded??"unknown"}`))
                    })
                })
            }
            let t3 = {
                container: {
                    position: "relative",
                    borderStartStartRadius: 12,
                    borderStartEndRadius: 12,
                    borderEndStartRadius: 0,
                    borderEndEndRadius: 0,
                    boxShadow: n(632079).Tj.shadow.outline.sm,
                    backgroundColor: n(632079).Tj.background.primary,
                    paddingTop: 12,
                    paddingInlineEnd: 14,
                    paddingBottom: 16,
                    paddingInlineStart: 14,
                    gap: 8
                },
                agentSecurityImage: {
                    width: 32,
                    height: 32,
                    flexShrink: 0
                },
                badge: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    backgroundColor: n(632079).Tj.blue.background.secondary,
                    color: n(632079).Tj.blue.icon.accentPrimary,
                    borderRadius: 1e3,
                    padding: "4px 10px",
                    width: "fit-content"
                },
                learnMoreLink: {
                    color: n(632079).Tj.blue.text.accentPrimary
                }
            };

            function t8(e) {
                let {
                    attachments: t,
                    onAllowUploads: o,
                    onRemoveFiles: a
                } = e, s = (0, i.useMemo)(() => t.filter(e => "complete" === e.status && "risky" === e.attachmentRisk), [t]).length;
                return 0 === s ? null : (0, g.jsx)(n(654979).A, {
                    visible: !0,
                    initial: {
                        opacity: 0,
                        height: 0,
                        translateY: 100
                    },
                    animate: {
                        opacity: 1,
                        height: "auto",
                        translateY: 0
                    },
                    config: {
                        duration: 1100
                    },
                    children: (0, g.jsxs)(n(4458).VP, {
                        style: t3.container,
                        className: "autolayout-col autolayout-fill-width",
                        children: [(0, g.jsxs)(n(4458).fI, {
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            marginBottom: 8,
                            children: [(0, g.jsx)("img", {
                                src: n(108715),
                                alt: "Security",
                                style: t3.agentSecurityImage
                            }), (0, g.jsxs)("div", {
                                style: t3.badge,
                                children: [(0, g.jsx)(n(16275).I, {
                                    icon: n(555972).checkmarkShieldFillSmallIcon,
                                    size: "sm"
                                }), (0, g.jsx)(n(111010).D, {
                                    styleKey: "captionMedium",
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary",
                                    children: (0, g.jsx)(n(109939).sA, {
                                        id: "unifiedChatFileConfirmationBanner.automaticallyScanned",
                                        defaultMessage: "Automatically scanned"
                                    })
                                })]
                            })]
                        }), (0, g.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "primary",
                            children: (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatFileConfirmationBanner.trustFilesHeading",
                                defaultMessage: "Do you trust these files?"
                            })
                        }), (0, g.jsxs)(n(111010).D, {
                            styleKey: "bodyRegular",
                            children: [(0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatFileConfirmationBanner.securityWarning",
                                defaultMessage: "Allowing Notion AI to access untrusted files can be a security risk."
                            }), " ", (0, g.jsx)(n(428217).V, {
                                hoverColor: "blue",
                                style: t3.learnMoreLink,
                                href: "https://www.notion.com/help/notion-ai-security-practices",
                                external: !0,
                                disableUnderline: !0,
                                children: (0, g.jsx)(n(109939).sA, {
                                    id: "unifiedChatFileConfirmationBanner.learnMore",
                                    defaultMessage: "Learn more"
                                })
                            })]
                        }), (0, g.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatFileConfirmationBanner.flaggedCount",
                                defaultMessage: "{count, plural, one {# file} other {# files}} flagged as potentially harmful",
                                values: {
                                    count: s
                                }
                            })
                        }), (0, g.jsxs)(n(4458).fI, {
                            paddingTop: 8,
                            gap: 8,
                            justifyContent: "flex-start",
                            children: [(0, g.jsx)(n(265779).E, {
                                onClick: a,
                                children: (0, g.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    children: (0, g.jsx)(n(109939).sA, {
                                        id: "unifiedChatFileConfirmationBanner.removeButton",
                                        defaultMessage: "Remove"
                                    })
                                })
                            }), (0, g.jsx)(n(265779).E, {
                                onClick: o,
                                children: (0, g.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    children: (0, g.jsx)(n(109939).sA, {
                                        id: "unifiedChatFileConfirmationBanner.allowUploadsButton",
                                        defaultMessage: "Allow uploads"
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            let t6 = (0, n(109939).YK)({
                    addContextTooltip: {
                        id: "UnifiedChatNewContextButton.tooltip",
                        defaultMessage: "Mention a person, page, or date"
                    },
                    addContextTooltipWithAgents: {
                        id: "UnifiedChatNewContextButton.agentTooltip",
                        defaultMessage: "Mention a person, page, date, or agent"
                    },
                    addContextLabel: {
                        id: "UnifiedChatNewContextButton.label",
                        defaultMessage: "Mention pages or people"
                    }
                }),
                t4 = [.45, 0, .55, 1],
                t7 = {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    minWidth: 0,
                    flex: 1
                },
                ne = {
                    flexShrink: 0
                },
                nt = {
                    overflow: "hidden"
                };

            function nn(e) {
                let {
                    mentions: t,
                    onChangeMentions: o,
                    showLabel: a,
                    isDisabled: s,
                    aiChatFeatureController: r,
                    config: l,
                    threadStore: c,
                    spaceStore: d,
                    onMenuOpenChange: u
                } = e, p = (0, n(960253).e)(), h = (0, n(960253).I)(() => ({
                    container: {
                        borderRadius: 50,
                        fontSize: 12,
                        fontWeight: n(699422).Wy.regular,
                        height: 28,
                        padding: "2px 3px",
                        display: "flex",
                        alignItems: "center",
                        outline: "none",
                        position: "relative",
                        pointerEvents: "auto",
                        border: `1px solid ${(0,n(365042).p)({themeMode:p,usesElevatedDarkModeBackground:null==r?void 0:r.usesElevatedDarkModeBackground})}`
                    }
                }), [null == r ? void 0 : r.usesElevatedDarkModeBackground, p]), m = (0, n(109939).tz)(), f = eG(), y = "workflow" === l.type ? l.model : void 0, b = (0, n(973567).N)({
                    threadStore: c,
                    spaceId: d.id
                }), S = (0, i.useCallback)(() => {
                    n(305721).trackMentionMenuOpened({
                        from: r.analyticsFromSourceForActions,
                        model: y,
                        inferenceInfo: b
                    })
                }, [r.analyticsFromSourceForActions, y, b]);
                return (0, g.jsx)(n(51831).m, {
                    placement: "top",
                    allowHover: !0,
                    content: () => (0, g.jsx)("div", {
                        children: m.formatMessage(f ? t6.addContextTooltipWithAgents : t6.addContextTooltip)
                    }),
                    children: e => (0, g.jsx)(n(656252).A, {
                        ariaPopupType: "menu",
                        originGap: 4,
                        content: e => (0, g.jsx)(e5, {
                            mentions: t,
                            onChangeMentions: t => {
                                o(t), requestAnimationFrame(() => {
                                    e.close(), null == u || u(!1)
                                })
                            },
                            config: l,
                            menuType: r.adaptiveMenuType,
                            threadStore: c,
                            spaceStore: d,
                            disableAgentMentions: !f
                        }),
                        popupType: r.adaptiveMenuPopupType,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        onOpen: () => {
                            S(), null == u || u(!0)
                        },
                        onClose: () => {
                            requestAnimationFrame(() => {
                                null == u || u(!1)
                            })
                        },
                        bottomSheetDisableDrag: !1,
                        keepFocus: !1,
                        children: t => (0, g.jsxs)(n(548436).A, {
                            style: h.container,
                            disabled: s,
                            ...t,
                            ...e,
                            testId: "unified-chat-add-context-button",
                            children: [(0, g.jsx)(n(4458).fI, {
                                alignItems: "center",
                                justifyContent: "center",
                                width: 20,
                                height: 20,
                                flexShrink: 0,
                                children: (0, g.jsx)(n(16275).I, {
                                    icon: n(160184).U,
                                    size: "sm",
                                    colorVariant: "secondary"
                                })
                            }), (0, g.jsx)(n(153321).P.div, {
                                initial: !1,
                                animate: a ? "visible" : "hidden",
                                transition: {
                                    ease: t4
                                },
                                variants: {
                                    visible: {
                                        width: 4,
                                        transition: {
                                            duration: .15
                                        }
                                    },
                                    hidden: {
                                        width: 0,
                                        transition: {
                                            duration: .1
                                        }
                                    }
                                },
                                style: ne
                            }), (0, g.jsx)(n(153321).P.div, {
                                initial: !1,
                                animate: a ? "visible" : "hidden",
                                transition: {
                                    ease: t4
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        width: "auto",
                                        transition: {
                                            duration: .15
                                        }
                                    },
                                    hidden: {
                                        opacity: 0,
                                        width: 0,
                                        transition: {
                                            duration: .1
                                        }
                                    }
                                },
                                style: nt,
                                children: (0, g.jsx)("div", {
                                    style: t7,
                                    children: (0, g.jsx)(n(111010).D, {
                                        styleKey: "captionRegular",
                                        colorVariant: "secondary",
                                        children: (0, g.jsx)(n(109939).sA, { ...t6.addContextLabel
                                        })
                                    })
                                })
                            }), (0, g.jsx)(n(153321).P.div, {
                                initial: !1,
                                animate: a ? "visible" : "hidden",
                                transition: {
                                    ease: t4
                                },
                                variants: {
                                    visible: {
                                        width: 8,
                                        transition: {
                                            duration: .15
                                        }
                                    },
                                    hidden: {
                                        width: 0
                                    }
                                },
                                style: ne
                            })]
                        })
                    })
                })
            }

            function ni(e) {
                let {
                    aiChatFeatureController: t,
                    isSimplifiedInputEnabled: o,
                    pointer: a,
                    spaceStore: s,
                    onRemove: r,
                    onClick: l,
                    isDisabled: c
                } = e, d = (0, n(109939).tz)(), u = (0, n(697006).ut)(a.id), p = (0, n(682985).K8)(() => u ? void 0 : n(360851).N.createChildStore(s, a), [s, a, u]), h = (0, n(682985).K8)(() => null == p ? void 0 : p.getRawIcon(), [p]), m = (0, n(682985).K8)(() => u ? d.formatMessage(n(658456).D) : null == p ? void 0 : p.getName(), [p, u, d]), f = (0, i.useCallback)(() => {
                    r(a)
                }, [r, a]);
                return (0, g.jsx)(n(365042).E, {
                    aiChatFeatureController: t,
                    isDisabled: c,
                    useSecondaryForeground: o,
                    icon: p ? (0, g.jsx)(n(651790).AgentIcon, {
                        agentIcon: h,
                        workflowStore: p,
                        size: 20
                    }) : (0, g.jsx)(n(651790).DefaultAgentIcon, {
                        size: 20
                    }),
                    text: m,
                    onClickRemove: f,
                    onClick: e => {
                        null == l || l(a, e)
                    }
                })
            }
            let no = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.17 1.77 12.42 12.46",
                    svg: (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)("path", {
                            d: "M8.103 1.775c.484 0 .948.192 1.29.535l2.897 2.897.121.134c.266.324.414.733.414 1.156v1.278h-1.25V6.75H9.601A1.75 1.75 0 0 1 7.85 5V3.025H5a.576.576 0 0 0-.575.576v8.8l.012.116a.576.576 0 0 0 .563.459h6l.049-.005h1.684A1.83 1.83 0 0 1 11 14.226H5a1.826 1.826 0 0 1-1.815-1.64l-.01-.186V3.6c0-1.007.817-1.824 1.825-1.825zM8.95 5c0 .359.292.65.65.65h1.366L8.95 3.634z"
                        }), (0, g.jsx)("path", {
                            d: "M7.007 8.56c.84 0 1.299.566 1.299 1.244 0 .672-.46 1.226-1.3 1.226H6.1v.83a.487.487 0 0 1-.483.487.487.487 0 0 1-.481-.488V9.07c0-.33.18-.51.51-.51zM6.1 10.214h.778c.257 0 .447-.162.447-.414 0-.258-.19-.426-.447-.426H6.1zm9.084-1.654a.41.41 0 0 1 .402.41.41.41 0 0 1-.402.403h-1.417v.621h1.377a.41.41 0 0 1 0 .817h-1.377v1.048a.487.487 0 0 1-.482.488.487.487 0 0 1-.482-.488V9.07c0-.33.18-.51.51-.51zm-4.881 0c1.176 0 2.021.707 2.021 1.866s-.846 1.87-2.016 1.87H9.244c-.33 0-.51-.18-.51-.51V9.07c0-.33.18-.51.51-.51zm-.606 2.896h.606c.655 0 1.036-.476 1.036-1.03 0-.577-.348-1.026-1.031-1.026h-.61z"
                        })]
                    })
                },
                na = (0, n(104509).wt)("filePdfSmall", no, "small"),
                ns = (0, n(109939).YK)({
                    attachmentSafeTooltip: {
                        id: "unifiedChatContextChipAttachment.attachmentSafe",
                        defaultMessage: "File uploaded"
                    },
                    attachmentRiskyTooltip: {
                        id: "unifiedChatContextChipAttachment.attachmentRisky",
                        defaultMessage: "File may contain risky content"
                    }
                });

            function nr(e) {
                let {
                    aiChatFeatureController: t,
                    isSimplifiedInputEnabled: i,
                    attachment: o,
                    onDeleteStagedAttachment: a,
                    isDisabled: s
                } = e;
                return "in_progress" === o.status ? (0, g.jsx)(n(365042).E, {
                    aiChatFeatureController: t,
                    isDisabled: s,
                    useSecondaryForeground: i,
                    icon: (0, g.jsx)(nc, {
                        attachment: o
                    }),
                    text: (0, g.jsx)(np, {
                        attachment: o
                    }),
                    onClickRemove: void 0
                }) : "complete" === o.status ? (0, g.jsx)(n(365042).E, {
                    aiChatFeatureController: t,
                    isDisabled: s,
                    useSecondaryForeground: i,
                    icon: (0, g.jsx)(nc, {
                        attachment: o
                    }),
                    text: (0, g.jsx)(np, {
                        attachment: o
                    }),
                    onClickRemove: () => a(o.fileUrl)
                }) : void(0, p().HB)(o)
            }
            let nl = {
                riskyIcon: {
                    fill: n(632079).Tj.red.text.accentPrimary
                },
                style0: {
                    rotate: "-90deg",
                    transformOrigin: "center"
                }
            };

            function nc(e) {
                let {
                    attachment: t
                } = e;
                return "in_progress" === t.status ? (0, g.jsxs)("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    children: [(0, g.jsx)(n(153321).P.circle, {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "none",
                        stroke: "#e0e0e0",
                        strokeWidth: "2"
                    }), (0, g.jsx)(n(153321).P.circle, {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "none",
                        stroke: n(632079).Tj.blue.icon.accentPrimary,
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        initial: {
                            pathLength: 0
                        },
                        animate: {
                            pathLength: t.uploadPercentage / 100
                        },
                        transition: {
                            duration: .5,
                            ease: "easeInOut"
                        },
                        style: nl.style0
                    })]
                }) : "risky" === t.attachmentRisk ? (0, g.jsx)(n(51831).m, {
                    placement: "top",
                    content: () => (0, g.jsx)(n(109939).sA, { ...ns.attachmentRiskyTooltip
                    }),
                    children: e => (0, g.jsx)("span", { ...e,
                        children: (0, g.jsx)(n(16275).I, {
                            icon: n(80925).exclamationMarkCircleFillIcon,
                            style: nl.riskyIcon
                        })
                    })
                }) : (0, g.jsx)(nu, {
                    contentType: t.contentType
                })
            }
            let nd = {
                safeIcon: {
                    fill: n(632079).Tj.blue.icon.accentPrimary
                },
                style0: {
                    position: "absolute"
                }
            };

            function nu(e) {
                let t, {
                    contentType: i
                } = e;
                t = "application/pdf" === i ? na : "text/csv" === i ? n(6957).B : n(447483).R;
                let o = {
                    delay: 1.3,
                    duration: .3,
                    ease: "easeInOut"
                };
                return (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(n(153321).P.div, {
                        initial: {
                            opacity: 1
                        },
                        animate: {
                            opacity: 0
                        },
                        transition: o,
                        style: nd.style0,
                        children: (0, g.jsx)(n(51831).m, {
                            placement: "top",
                            content: () => (0, g.jsx)(n(109939).sA, { ...ns.attachmentSafeTooltip
                            }),
                            children: e => (0, g.jsx)("span", { ...e,
                                children: (0, g.jsx)(n(16275).I, {
                                    icon: n(93042).checkmarkCircleFillIcon,
                                    style: nd.safeIcon
                                })
                            })
                        })
                    }), (0, g.jsx)(n(153321).P.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: o,
                        style: nd.style0,
                        children: (0, g.jsx)(n(16275).I, {
                            icon: t,
                            colorVariant: "secondary",
                            size: "sm"
                        })
                    })]
                })
            }

            function np(e) {
                let {
                    attachment: t
                } = e;
                return "in_progress" === t.status ? (0, g.jsx)(n(861510).N, {
                    text: t.fileName,
                    animate: !0,
                    colorVariant: "secondary",
                    lineClamp: 1
                }) : "complete" === t.status ? (0, g.jsx)("span", {
                    children: t.fileName
                }) : void(0, p().HB)(t)
            }

            function ng(e) {
                let {
                    aiChatFeatureController: t,
                    isSimplifiedInputEnabled: o,
                    pointer: a,
                    spaceStore: s,
                    onRemove: r,
                    onClick: l,
                    isDisabled: c
                } = e, d = n(970831).B.createChildStore(s, a), u = (0, n(682985).K8)(() => {
                    if (d) return {
                        icon: d.getIcon(),
                        iconRecordCategory: (0, n(569553).Te)(d)
                    }
                }, [d]), p = (0, i.useCallback)(() => {
                    r(a)
                }, [r, a]);
                return (0, g.jsx)(n(365042).E, {
                    aiChatFeatureController: t,
                    isDisabled: c,
                    useSecondaryForeground: o,
                    icon: u ? (0, g.jsx)(n(569553).B6, {
                        disabled: !0,
                        icon: u.icon,
                        isEmptyPage: !1,
                        size: 16,
                        iconRecordCategory: u.iconRecordCategory
                    }) : null,
                    text: (0, g.jsx)(n(627918).A, {
                        store: d
                    }),
                    onClickRemove: p,
                    onClick: e => {
                        null == l || l(a, e)
                    }
                })
            }
            let nh = {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    minWidth: 0,
                    flexShrink: 1
                },
                nm = {
                    opacity: .5,
                    marginInlineStart: 4,
                    flexShrink: 0
                };

            function nf(e) {
                let {
                    aiChatFeatureController: t,
                    isSimplifiedInputEnabled: i,
                    selectedBlocks: o,
                    onRemove: a,
                    onClick: s,
                    isDisabled: r
                } = e, l = o.length > 0 ? o[0] : void 0, c = o.length - 1, d = (0, n(682985).K8)(() => {
                    if (l) {
                        var e = l;
                        let t = e.getType();
                        if (!t) return;
                        let i = (0, n(495734).Z)(t);
                        return i ? (0, g.jsx)(n(109939).sA, { ...i
                        }) : void 0
                    }
                }, [l]);
                return l ? (0, g.jsx)(n(365042).E, {
                    aiChatFeatureController: t,
                    isDisabled: r,
                    useSecondaryForeground: i,
                    icon: (0, g.jsx)(n(16275).I, {
                        icon: n(308884).a,
                        size: "sm",
                        colorVariant: i ? "secondary" : void 0
                    }),
                    text: (0, g.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        minWidth: 0,
                        children: [(0, g.jsx)("span", {
                            style: nh,
                            children: (0, g.jsx)(n(627918).A, {
                                store: l,
                                shouldWrap: !0,
                                placeholder: d
                            })
                        }), c > 0 ? (0, g.jsx)("span", {
                            style: nm,
                            children: (0, g.jsx)(n(109939).sA, {
                                id: "unifiedChatContextChipSelectedBlocks.additionalBlocksCount",
                                defaultMessage: "+{count}",
                                values: {
                                    count: c
                                }
                            })
                        }) : null]
                    }),
                    onClickRemove: a,
                    onClick: s
                }) : null
            }

            function ny(e) {
                let {
                    aiChatFeatureController: t,
                    isDisabled: o,
                    isSimplifiedInputEnabled: a,
                    textSelection: s
                } = e, r = (0, n(533992).v3)(), l = (0, n(682985).K8)(() => (0, n(250943).E)({
                    mode: "editing",
                    multiSelection: s,
                    forceExtendAnnotations: {}
                }), [s]).trim(), c = (0, i.useCallback)(() => {
                    n(562733).zI.update(e => ({ ...e,
                        completionContext: void 0,
                        explicitlyAddedTextSelection: void 0
                    })), (0, n(525779).clear)({
                        environment: r
                    })
                }, [r]), d = (0, i.useCallback)(() => {
                    let e = s.start.store.id,
                        t = n(240414).T.findScrollToSelectablesFromIds([e]).at(0);
                    t && (0, n(840529).p)({
                        environment: r,
                        handle: t,
                        vertical: {
                            reveal: "top"
                        },
                        horizontal: {
                            reveal: "closest"
                        },
                        animate: !0
                    })
                }, [r, s]);
                return l ? (0, g.jsx)(n(365042).E, {
                    aiChatFeatureController: t,
                    isDisabled: o,
                    useSecondaryForeground: a,
                    icon: (0, g.jsx)(n(16275).I, {
                        icon: n(308884).a,
                        size: "sm",
                        colorVariant: a ? "secondary" : void 0
                    }),
                    text: (0, g.jsx)("span", {
                        children: l
                    }),
                    onClick: o ? void 0 : d,
                    onClickRemove: o ? void 0 : c
                }) : null
            }

            function nb(e) {
                let {
                    aiChatFeatureController: t,
                    isSimplifiedInputEnabled: o,
                    pointer: a,
                    spaceStore: s,
                    onRemove: r,
                    onClick: l,
                    isDisabled: c
                } = e, d = (0, n(109939).tz)(), u = (0, n(682985).K8)(() => n(807825).L.createChildStore(s, a), [s, a]), p = (0, n(682985).K8)(() => {
                    var e;
                    return null == (e = u.getModel()) ? void 0 : e.getFullName(d)
                }, [u, d]), h = (0, i.useCallback)(() => {
                    r(a)
                }, [r, a]);
                return (0, g.jsx)(n(365042).E, {
                    aiChatFeatureController: t,
                    isDisabled: c,
                    useSecondaryForeground: o,
                    icon: (0, g.jsx)(n(321753).A, {
                        userStore: u,
                        size: 16
                    }),
                    text: (0, g.jsx)("span", {
                        children: p
                    }),
                    onClickRemove: h,
                    onClick: e => {
                        null == l || l(a, e)
                    }
                })
            }
            let nS = {
                position: "relative",
                flexWrap: "wrap",
                gap: "6px 4px",
                pointerEvents: "none"
            };

            function nv(e) {
                let {
                    navigate: t
                } = (0, i.useContext)(n(44894).E), {
                    aiChatFeatureController: o,
                    attachments: a,
                    config: s,
                    inputMode: r,
                    mentions: l,
                    currentPageInContext: c,
                    onChangeMentions: d,
                    onDeleteStagedAttachment: u,
                    isSimplifiedInputEnabled: h,
                    onRemoveMentionChip: m,
                    onRemoveSelectedBlocks: f,
                    onClickSelectedBlocks: y,
                    selectedBlocks: b = [],
                    spaceStore: S,
                    pageVisitSource: v = n(254656).y8.NewAiChatInput,
                    isAddContextMenuOpen: x,
                    isAddContextMenuRecentlyClosed: k,
                    onAddContextMenuOpenChange: C,
                    forceFocusWhenContextPresent: M,
                    persistContextVisibility: j = !1
                } = e, I = o.isChatCompletelyDisabled(r), A = o.supportsUserSpecifiedContext(s.type), w = !h && !I && A, _ = (0, n(533992).v3)(), T = (0, n(548124).useThreadStoreFromCurrentRoute)(), P = (0, n(254505).m)(), E = (0, i.useCallback)(e => {
                    I || m(e)
                }, [m, I]), F = (0, i.useCallback)(() => {
                    I || null == f || f()
                }, [f, I]), R = (0, i.useCallback)((e, i) => {
                    if (I) return;
                    let o = (0, n(7029).V)(i),
                        a = e.table;
                    switch (a) {
                        case n(832375).evP:
                            let s = n(970831).B.createChildStore(S, e);
                            (0, n(836924).Y)({
                                store: s,
                                environment: _,
                                pageVisitSource: v,
                                openInNew: o,
                                chatThreadId: null == T ? void 0 : T.id,
                                openInSidePeek: P || void 0
                            });
                            break;
                        case n(832375).oo9:
                            let r = e.id,
                                l = S.id,
                                c = _.idCreator.getSpaceIdCreatorSync(l),
                                d = (0, n(805697).o4)({
                                    userId: r,
                                    spaceIdCreator: c,
                                    pageVisitSource: v
                                });
                            d && t({
                                environment: _,
                                url: d,
                                openInNew: o
                            });
                            break;
                        case n(832375).C0E:
                            let u = (0, n(739185).iZ)({
                                pageVisitSource: v,
                                workflowId: e.id,
                                params: {}
                            });
                            u && t({
                                environment: _,
                                url: u,
                                openInNew: o
                            });
                            break;
                        default:
                            (0, p().HB)(a)
                    }
                }, [_, S, v, I, T, t, P]), D = A && l.size() > 0, B = h ? [] : a, N = B.length > 0, U = (0, n(83208).X)("add_to_chat"), z = (0, n(682985).K8)(() => n(562733).zI.state.explicitlyAddedTextSelection, [], {
                    equalityFn: n(381453).n4
                }), K = void 0 !== z && !(0, n(971541).k)(z), V = "none" === o.selectionContextInsertionMode && (void 0 !== z || !U), O = V && (K || b.length > 0), L = 0 === l.size() && !N && !O, W = void 0 !== M ? M : o.showUserContextOnlyWhenFocused, q = (j || !W || !!(e.focusWithin || x || k)) && (D || N || O || w), H = (0, n(853284).U)();
                return (0, g.jsx)(n(153321).P.div, {
                    initial: !1,
                    animate: q ? "visible" : "hidden",
                    variants: {
                        visible: {
                            height: "auto",
                            opacity: 1,
                            transition: H ? {
                                duration: 0
                            } : {
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
                            transition: H ? {
                                duration: 0
                            } : {
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
                    style: {
                        pointerEvents: q ? "auto" : "none"
                    },
                    children: (0, g.jsx)("div", {
                        children: (0, g.jsx)(n(4458).fI, {
                            style: nS,
                            paddingInline: o.shouldRenderHeadless ? void 0 : 10,
                            paddingTop: o.shouldRenderHeadless ? void 0 : 10,
                            className: "autolayout-row autolayout-fill-width",
                            alignItems: "center",
                            children: (0, g.jsxs)(n(203066).N, {
                                children: [w ? (0, g.jsx)(n(153321).P.div, {
                                    initial: !1,
                                    animate: "visible",
                                    exit: "hidden",
                                    variants: {
                                        visible: {
                                            opacity: 1,
                                            filter: "blur(0px)",
                                            width: "auto"
                                        },
                                        hidden: {
                                            opacity: 0,
                                            filter: "blur(2px)",
                                            width: B.length > 0 ? 0 : "auto"
                                        }
                                    },
                                    transition: {
                                        duration: .15
                                    },
                                    children: (0, g.jsx)(nn, {
                                        mentions: l,
                                        onChangeMentions: d,
                                        showLabel: L,
                                        isDisabled: !w,
                                        aiChatFeatureController: o,
                                        config: s,
                                        threadStore: e.threadStore,
                                        onMenuOpenChange: C,
                                        spaceStore: S
                                    })
                                }, "addContext") : null, A ? Array.from(l).map(e => {
                                    switch (e.table) {
                                        case n(832375).oo9:
                                            return (0, g.jsx)(nb, {
                                                aiChatFeatureController: o,
                                                isDisabled: I,
                                                isSimplifiedInputEnabled: h,
                                                pointer: e,
                                                spaceStore: S,
                                                onRemove: E,
                                                onClick: R
                                            }, n(496282).L3.toKey(e));
                                        case n(832375).evP:
                                            return (0, g.jsx)(ng, {
                                                aiChatFeatureController: o,
                                                isDisabled: I,
                                                isSimplifiedInputEnabled: h,
                                                pointer: e,
                                                spaceStore: S,
                                                onRemove: E,
                                                onClick: R
                                            }, n(496282).L3.toKey(e));
                                        case n(832375).C0E:
                                            return (0, g.jsx)(ni, {
                                                aiChatFeatureController: o,
                                                onClick: R,
                                                isDisabled: I,
                                                isSimplifiedInputEnabled: h,
                                                pointer: e,
                                                spaceStore: S,
                                                onRemove: E
                                            }, n(496282).L3.toKey(e));
                                        default:
                                            return (0, p().HB)(e)
                                    }
                                }) : void 0, A && V && b.length > 0 ? (0, g.jsx)(nf, {
                                    aiChatFeatureController: o,
                                    isDisabled: I,
                                    isSimplifiedInputEnabled: h,
                                    selectedBlocks: b,
                                    onRemove: F,
                                    onClick: y
                                }, "selectedBlocksContext") : void 0, A && V && K ? (0, g.jsx)(ny, {
                                    aiChatFeatureController: o,
                                    isDisabled: I,
                                    isSimplifiedInputEnabled: h,
                                    textSelection: z
                                }, "textSelectionContext") : void 0, B.map((e, t) => (0, g.jsx)(nr, {
                                    aiChatFeatureController: o,
                                    isDisabled: I,
                                    isSimplifiedInputEnabled: h,
                                    attachment: e,
                                    onDeleteStagedAttachment: u
                                }, t))]
                            })
                        })
                    })
                })
            }
            let nx = {
                    minWidth: 0,
                    position: "relative"
                },
                nk = {
                    position: "relative",
                    width: "100%"
                },
                nC = {
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none"
                },
                nM = {
                    display: "flex",
                    width: "100%"
                },
                nj = {
                    position: "relative"
                },
                nI = (0, n(109939).YK)({
                    transcriptionFailedToSend: {
                        id: "chatErrorHandler.submissionError",
                        defaultMessage: "Something went wrong while processing your request. Please try again."
                    }
                });

            function nA() {}

            function nw(e) {
                let {
                    aiChatFeatureController: t,
                    attachments: s,
                    clientStore: r,
                    currentPageInContext: p,
                    mentions: h,
                    nextConfig: m,
                    onChangeMentions: f,
                    onChangeNextConfig: y,
                    onDeleteStagedAttachment: b,
                    onEsc: v,
                    onStartTyping: x,
                    onRemoveMentionChip: k,
                    onStopInference: M,
                    onSubmit: j,
                    onTextChange: I,
                    pageVisitSource: A,
                    spaceStore: w,
                    textStore: _,
                    disabled: T,
                    threadStore: P,
                    errorState: E,
                    onClearError: F,
                    placeholder: R,
                    ignoreKeyboardMode: D,
                    selectedBlockStores: B = [],
                    inputMode: N,
                    threadMode: U,
                    upsellMessage: z,
                    upgradeButtonTextProps: K,
                    isUpgradeSystemEnabled: V,
                    isStoppingRecording: O,
                    audioRecorder: L,
                    onStartRecording: W,
                    onStopRecording: q,
                    pendingPlanModeStep: H,
                    onSetPendingPlanModeStep: $,
                    onSurveyActive: Y,
                    compact: J = !1
                } = e, G = (0, n(109939).tz)(), Q = (0, n(533992).v3)(), X = (0, n(682985).O$)(n(728372).AppStoreMainEditorCurrentBlockStore), [Z, ee] = (0, n(641086).A)(), et = (0, i.useRef)(null), en = t.isChatCompletelyDisabled(N), ei = (0, n(960253).I)(() => {
                    let e = t.shouldUseCompactSubmitButton,
                        n = t.isSingleLineInput;
                    return {
                        inlineSendButton: {
                            position: "absolute",
                            bottom: e ? 0 : n ? 6 : 8,
                            insetInlineEnd: 8 * !e
                        },
                        recordingVisualizerPadding: {
                            paddingInline: tz(t)
                        }
                    }
                }, [t]), [eo, ea] = (0, i.useState)(!1), [es, er] = (0, i.useState)(!1), [el, ec] = (0, i.useState)(!1), [ed, eu] = (0, i.useState)(!1), ep = (0, i.useCallback)(() => {
                    eu(!0)
                }, []), eg = (0, i.useCallback)(() => {
                    eu(!1)
                }, []), eh = (0, n(49768).Q7)({
                    textStore: _,
                    initialFocus: t.shouldHaveInitialFocusOnInput
                }), em = (0, n(682985).K8)(() => {
                    if (!P) return;
                    let e = P.getTranscript();
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ((null == n ? void 0 : n.type) === "survey" && !n.submitted) return n
                    }
                }, [P]), [ef, ey] = (0, i.useState)(void 0), eb = (0, i.useRef)(void 0), eS = "full_page" === t.agentChatFormFactor, ev = (null == em ? void 0 : em.id) !== void 0 && em.id !== eb.current, ex = function(e) {
                    let {
                        draftStorageKey: t,
                        surveyStepId: n
                    } = e;
                    if (t && n) return `${t}:survey:${n}`
                }({
                    draftStorageKey: t.draftStorageKey,
                    surveyStepId: null == em ? void 0 : em.id
                }), {
                    surveyDraftStore: ek,
                    initialSurveyResponses: eC
                } = (0, n(682985).K8)(() => {
                    let e, t = ex ? ((e = c.get(ex)) || (e = new(n(245541)).R({
                        key: `aiChatSurveyDrafts:${ex}`,
                        namespace: n(274919).Bq,
                        important: !0,
                        trackingType: "necessary"
                    }), c.set(ex, e), d.set(e, ex)), e) : void 0;
                    return {
                        surveyDraftStore: t,
                        initialSurveyResponses: (null == t ? void 0 : t.state) ? ? (null == em ? void 0 : em.responses) ? ? {}
                    }
                }, [null == em ? void 0 : em.responses, ex]), eM = (0, i.useRef)(void 0);
                (0, i.useEffect)(() => {
                    em && P && eM.current !== em.id && (eM.current = em.id, (0, n(104310).u)({
                        event: {
                            eventName: "agent_survey_displayed",
                            eventProperties: {
                                thread_id: P.id,
                                ai_session_id: P.id,
                                survey_step_id: em.id,
                                question_count: em.questions.length
                            }
                        }
                    }))
                }, [em, P]);
                let ej = (0, i.useCallback)(e => {
                        if (!em || !P) return;
                        let t = Object.values(e).some(e => Array.isArray(e) ? e.some(e => "object" == typeof e && (0, o().c9)(e)) : "object" == typeof e && (0, o().c9)(e)),
                            i = Object.keys(e).length;
                        (0, n(104310).u)({
                            event: {
                                eventName: "agent_survey_completed",
                                eventProperties: {
                                    thread_id: P.id,
                                    ai_session_id: P.id,
                                    survey_step_id: em.id,
                                    question_count: em.questions.length,
                                    questions_answered: i,
                                    has_other_response: t
                                }
                            }
                        }), ek && u(ek, void 0), l({
                            environment: Q,
                            threadStore: P,
                            surveyStepId: em.id,
                            responses: e
                        })
                    }, [em, Q, ek, P]),
                    eI = (0, i.useCallback)(() => {
                        if (!em || !P) return;
                        let e = Object.keys((null == ek ? void 0 : ek.state) ? ? {}).length;
                        (0, n(104310).u)({
                            event: {
                                eventName: "agent_survey_dismissed",
                                eventProperties: {
                                    thread_id: P.id,
                                    ai_session_id: P.id,
                                    survey_step_id: em.id,
                                    questions_answered: e,
                                    question_count: em.questions.length
                                }
                            }
                        }), ek && u(ek, void 0), l({
                            environment: Q,
                            threadStore: P,
                            surveyStepId: em.id,
                            responses: {},
                            dismissed: !0
                        })
                    }, [em, Q, ek, P]),
                    eA = (0, i.useCallback)(e => {
                        ek && u(ek, e)
                    }, [ek]),
                    ew = (0, i.useCallback)(e => {
                        ey(e)
                    }, []);
                (0, i.useEffect)(() => {
                    em && (null == Y || Y())
                }, [em, Y]), (0, i.useEffect)(() => {
                    eb.current = null == em ? void 0 : em.id
                }, [null == em ? void 0 : em.id]), (0, i.useEffect)(() => {
                    !em || !P || !H || (0, n(997486).ar)(H.value) || (l({
                        environment: Q,
                        threadStore: P,
                        surveyStepId: em.id,
                        responses: {},
                        dismissed: !0,
                        additionalSteps: [H]
                    }), ek && u(ek, void 0), null == $ || $(void 0))
                }, [em, Q, ek, P, H, $]);
                let e_ = h.size(),
                    eT = s.length,
                    eP = eT > 0;
                (0, i.useEffect)(() => {
                    (ee || e_ > 0 || eT > 0) && ec(!0)
                }, [ee, e_, eT]), (0, i.useEffect)(() => {
                    n(562733).zI.update(e => ({ ...e,
                        isAgentInputFocused: ee
                    }))
                }, [ee]);
                let eE = (0, i.useRef)(void 0),
                    eF = (0, i.useCallback)(e => {
                        if (e) {
                            ea(!0), er(!1), eE.current && (window.clearTimeout(eE.current), eE.current = void 0);
                            return
                        }
                        ea(!1), er(!0), eE.current = window.setTimeout(() => {
                            er(!1), eE.current = void 0
                        }, 200)
                    }, []);
                (0, i.useEffect)(() => () => {
                    eE.current && window.clearTimeout(eE.current)
                }, []);
                let eR = (0, n(558208).AD)(),
                    eD = (0, n(682985).K8)(() => eR.getOrCreateThreadId({
                        environment: Q,
                        spaceId: w.id,
                        maybeThreadStore: P
                    }), [Q, w.id, eR, P]),
                    eB = (0, n(682985).K8)(() => r.getOrCreateClientAIChatThreadStore(eD), [r, eD]),
                    eN = (0, n(682985).K8)(() => null == eB ? void 0 : eB.getStagedAttachmentUploadStoreIfExists(), [eB]),
                    {
                        variant: eU
                    } = (0, n(222195).n)(),
                    {
                        variant: ez
                    } = (0, n(848825).C)(),
                    eK = function(e) {
                        let t, o, a, {
                                configType: s,
                                spaceId: r
                            } = e,
                            {
                                checkIfDismissed: l,
                                markDismissed: c
                            } = (t = (0, n(533992).v3)(), o = (0, n(723240).r)(), a = (0, n(476743).a)(), {
                                checkIfDismissed: (0, i.useCallback)(e => {
                                    if (!a) return !1;
                                    let t = a.getSettings();
                                    return !!((null == t ? void 0 : t.ai_connector_incident_dismissal_map) || {})[e]
                                }, [a]),
                                markDismissed: (0, i.useCallback)(e => {
                                    a && o && e && (0, n(377796).createAndCommit)({
                                        userAction: "aiConnectorIncident.dismissBanner",
                                        environment: t,
                                        cellTarget: {
                                            spaceWithId: o
                                        },
                                        canUndo: !1,
                                        perform: t => {
                                            let i = a.getSettings(),
                                                o = (null == i ? void 0 : i.ai_connector_incident_dismissal_map) || {};
                                            (0, n(421439).y4)({
                                                store: a,
                                                operation: {
                                                    pointer: a.pointer,
                                                    path: ["settings"],
                                                    command: "update",
                                                    args: { ...i,
                                                        ai_connector_incident_dismissal_map: { ...o,
                                                            [e]: !0
                                                        }
                                                    }
                                                },
                                                transaction: t
                                            })
                                        }
                                    })
                                }, [a, o, t])
                            });
                        return (0, n(682985).K8)(() => {
                            var e;
                            let t = null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getModel();
                            if (!t) return;
                            let i = n(352120).R.getDegradedServicesForInferenceTranscriptConfigType({
                                configType: s,
                                actor: t,
                                spaceId: r,
                                connectedConnectors: (0, n(876688).wd)()
                            }).find(e => "ai_connector" === e.type && !l(e.dismissalKey));
                            if (i && "ai_connector" === i.type) return {
                                connector: i.connector,
                                dismissalKey: i.dismissalKey,
                                onDismiss: () => c(i.dismissalKey),
                                customMessage: i.customMessage,
                                incidentType: i.incidentType
                            }
                        }, [s, r, l, c])
                    }({
                        configType: m.type,
                        spaceId: w.id
                    }),
                    eV = (0, n(682985).K8)(() => {
                        var e;
                        if (!(null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getModel())) return;
                        let t = n(218744).default.getConfig({
                            configName: "ai_general_incident"
                        });
                        return "degraded" === t.status ? t : void 0
                    }, []),
                    eO = (0, i.useCallback)(() => {
                        (0, n(962059).D)({
                            stores: []
                        })
                    }, []),
                    eL = (0, i.useCallback)(() => {
                        n(562733).zI.update(e => ({ ...e,
                            completionContext: void 0,
                            explicitlyAddedTextSelection: void 0
                        })), (0, n(525779).clear)({
                            environment: Q
                        })
                    }, [Q]),
                    eW = (0, i.useCallback)(() => {
                        if (0 === B.length) return;
                        let e = B.map(e => e.pointer);
                        (0, n(45464).e)({
                            environment: Q,
                            spaceStore: w,
                            blockPointers: e,
                            currentPageId: null == X ? void 0 : X.id,
                            pageVisitSource: A ? ? n(254656).y8.NewAiChatInput,
                            chatThreadId: null == P ? void 0 : P.id
                        })
                    }, [Q, X, A, B, w, P]),
                    eq = (0, n(534268).q)({
                        threadStore: P,
                        clientAiChatStore: r,
                        aiChatFeatureController: t,
                        config: m
                    }),
                    eH = (0, i.useCallback)(e => {
                        let t = h.size();
                        f(e), e.size() > t && ec(!0)
                    }, [h, f]),
                    e$ = (0, i.useCallback)(e => {
                        switch (N) {
                            case "runningInference":
                                M({
                                    userAction: "AgentChatTranscript.StopInference.keyboardInterrupt"
                                });
                                break;
                            case "recording":
                                null == q || q();
                                break;
                            default:
                                null == v || v(e)
                        }
                    }, [M, N, q, v]),
                    eY = (0, i.useCallback)(async ({
                        shouldRefocus: e,
                        submitFrom: i
                    }) => {
                        let o = _.getValue(),
                            s = ed && void 0 !== o && !(0, a().w9s)(o);
                        ed && eu(!1), await j({
                            prompt: o,
                            config: m,
                            prebuiltPrompt: s ? {
                                type: "image_generation_mode",
                                displayText: o,
                                locale: G.locale,
                                args: {
                                    type: "image_generation_mode",
                                    enableScriptAgent: "workflow" === m.type ? m.enableScriptAgent : void 0
                                }
                            } : void 0,
                            submitFrom: i,
                            pendingPlanModeStep: H
                        }), e && requestAnimationFrame(() => {
                            if (t.supportsClearSelectionOnSubmit) eh.blur();
                            else {
                                let e = n(521595).n.findNodeFromStore(_);
                                e && e.focus()
                            }
                        }), eU && "control" !== eU && n(968456)._.setState({ ...n(968456)._.state,
                            shouldRenderTextPrompt: !1
                        }), ez && "control" !== ez && n(576218).Y.setState({ ...n(576218).Y.state,
                            shouldRenderTextPrompt: !1
                        })
                    }, [_, j, m, H, ed, G.locale, t.supportsClearSelectionOnSubmit, eh, eU, ez]),
                    eJ = (0, i.useCallback)(async () => {
                        await eY({
                            shouldRefocus: !0
                        })
                    }, [eY]),
                    eG = t.canUseSendDestinationShortcuts({
                        inputMode: N,
                        threadMode: U
                    }),
                    eQ = t.isCommandEnterSubmitEnabled,
                    eX = (0, i.useCallback)(async e => {
                        await eY({
                            shouldRefocus: !0,
                            submitFrom: e
                        })
                    }, [eY]),
                    eZ = (0, i.useCallback)(e => {
                        (async () => {
                            if ("recording" !== N || !O) {
                                if ("recording" === N) {
                                    let e = await (null == q ? void 0 : q());
                                    if ("transcribed" !== e) {
                                        "failed" === e && n(436555).D6({
                                            label: G.formatMessage(nI.transcriptionFailedToSend)
                                        });
                                        return
                                    }
                                }
                                await eX(e)
                            }
                        })()
                    }, [G, eX, N, O, q]),
                    e0 = (0, i.useCallback)(e => {
                        eQ && ("function" == typeof e.preventDefault && e.preventDefault(), "stopPropagation" in e && "function" == typeof e.stopPropagation && e.stopPropagation(), eX("command+enter"))
                    }, [eX, eQ]),
                    e1 = (0, i.useCallback)(e => {
                        eG && ("function" == typeof e.preventDefault && e.preventDefault(), "stopPropagation" in e && "function" == typeof e.stopPropagation && e.stopPropagation(), eX("command+alt+enter"))
                    }, [eG, eX]),
                    e2 = "runningInference" === N,
                    e5 = e2 && "runningInference" === N ? "ready" : N,
                    e9 = "recording" === N,
                    e3 = (0, n(682985).K8)(() => R || (0, n(632342).i)({
                        config: m,
                        threadStore: P,
                        intl: G,
                        aiChatFeatureController: t,
                        isSimplifiedInputEnabled: !0,
                        environment: Q,
                        spaceId: w.id
                    }), [R, P, G, m, t, !0, Q, w.id]),
                    e8 = t.shouldShowInlineSubmit,
                    e6 = eh.focus;
                (0, i.useEffect)(() => {
                    if (t.shouldHaveInitialFocusOnInput) {
                        if (t.shouldHaveDelayedFocusOnInput) {
                            let e = setTimeout(() => {
                                e6()
                            }, 300);
                            return () => clearTimeout(e)
                        }
                        requestAnimationFrame(() => {
                            e6()
                        })
                    }
                }, [P, e6, t.shouldHaveInitialFocusOnInput, t.shouldHaveDelayedFocusOnInput]),
                function(e) {
                    let {
                        focus: t
                    } = e, o = (0, i.useRef)(void 0), a = (0, n(682985).K8)(() => n(562733).zI.state.focusRequest, []);
                    (0, i.useEffect)(() => {
                        a && a.id !== o.current && (o.current = a.id, requestAnimationFrame(() => {
                            t()
                        }), n(562733).zI.update(e => {
                            var t;
                            return (null == (t = e.focusRequest) ? void 0 : t.id) !== a.id ? e : { ...e,
                                focusRequest: void 0
                            }
                        }))
                    }, [a, t])
                }({
                    focus: e6
                }),
                function(e) {
                    let {
                        containerRef: t,
                        blur: o,
                        textStoreId: a
                    } = e;
                    (0, i.useEffect)(() => {
                        let e = e => {
                            let i = e.target;
                            if (!i || !(i instanceof Node)) return;
                            if (i instanceof Element) {
                                if (i.closest('[data-testid="popup-overlay"]')) return;
                                let e = i;
                                for (; e;) {
                                    let t = e.parentElement;
                                    if (t && t.querySelector('[data-testid="popup-overlay"]')) return;
                                    e = t
                                }
                                if (i.closest('[role="dialog"]')) return
                            }
                            let s = t.current;
                            if (!s) return;
                            let r = n(358377).default.state;
                            "empty" === r.mode || r.multiSelection.start.store.id === a && (s.contains(i) || o())
                        };
                        return document.addEventListener("mousedown", e, !0), () => {
                            document.removeEventListener("mousedown", e, !0)
                        }
                    }, [o, a, t])
                }({
                    containerRef: et,
                    blur: eh.blur,
                    textStoreId: _.id
                }), (0, i.useEffect)(() => {
                    let e = n(562733).zI.state.agentTimeToRenderMetric,
                        t = n(562733).zI.state.openSource;
                    e && t && (e.endTime = performance.now(), requestAnimationFrame(() => {
                        Promise.resolve().then(n.bind(n, 305721)).then(({
                            trackAgentTimeToRender: i
                        }) => {
                            i({
                                environment: Q,
                                metric: e,
                                from: t,
                                threadStore: P
                            }), n(562733).zI.setState({ ...n(562733).zI.state,
                                agentTimeToRenderMetric: void 0,
                                openSource: void 0
                            })
                        })
                    }))
                }, [Q, P]);
                let e4 = (0, i.useRef)(!1),
                    e7 = Array.from(h).at(-1),
                    te = (0, n(682985).K8)(() => {
                        let {
                            completionContext: e,
                            explicitlyAddedTextSelection: t
                        } = n(562733).zI.state;
                        return (null == e ? void 0 : e.type) === "textSelection" || void 0 !== t
                    }, []),
                    tt = B.length > 0,
                    tn = (0, n(682985).K8)(() => (0, a().w9s)(_.getValue()), [_]),
                    ti = (0, n(682985).K8)(() => {
                        let e = n(358377).default.state;
                        if ("editing" !== e.mode) return !1;
                        let {
                            multiSelection: t
                        } = e;
                        return (0, n(689461).K)(t) && (0, n(971541).k)(t) && t.start.store === _ && 0 === t.start.index
                    }, [_]),
                    to = (0, i.useCallback)(e => {
                        if (!(e && "key" in e && "Backspace" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey && !e.repeat) || !(ti || tn)) return !1;
                        if (te) eL();
                        else if (tt) eO();
                        else {
                            if (!e7) return !1;
                            k(e7)
                        }
                        return "function" == typeof e.preventDefault && e.preventDefault(), "stopPropagation" in e && "function" == typeof e.stopPropagation && e.stopPropagation(), !0
                    }, [ti, tn, te, tt, e7, eL, eO, k]),
                    ta = (0, i.useCallback)(() => {
                        let e = _.getValue();
                        E.isError && F(), null == I || I(e);
                        let t = (0, a().w9s)(e);
                        e4.current || t || (null == x || x(), e4.current = !0)
                    }, [E.isError, _, I, F, x]),
                    ts = (0, i.useCallback)(() => {
                        if (!eN || !eB) return;
                        let e = [],
                            t = new Set;
                        for (let n of s) "complete" === n.status && "risky" === n.attachmentRisk && (e.push(n.fileUrl), t.add(n.contentType));
                        0 !== e.length && (eN.markUploadedFilesAsSafe(e), e.forEach(e => {
                            eB.markStagedAttachmentInferenceTranscriptStepAsSafe({
                                fileUrl: e
                            })
                        }), n(305721).trackAgentUserActionOnRiskyAttachments({
                            action: "allow",
                            numFiles: e.length,
                            fileTypes: Array.from(t)
                        }))
                    }, [eN, s, eB]),
                    tr = (0, i.useCallback)(() => {
                        let e = 0,
                            t = new Set;
                        s.forEach(n => {
                            "complete" === n.status && "risky" === n.attachmentRisk && (b(n.fileUrl), e += 1, t.add(n.contentType))
                        }), n(305721).trackAgentUserActionOnRiskyAttachments({
                            action: "remove",
                            numFiles: e,
                            fileTypes: Array.from(t)
                        })
                    }, [s, b]),
                    tl = (0, n(421573).A)(Z, et);
                return (0, g.jsx)(n(4458).VP, {
                    ref: tl,
                    className: "autolayout-fill-width",
                    style: nx,
                    children: (0, g.jsxs)(n(4458).VP, {
                        className: "autolayout-col",
                        style: nj,
                        children: [tS({
                            inputMode: N,
                            aiChatFeatureController: t,
                            aiConnectorIncident: eK,
                            aiGeneralIncident: eV
                        }) ? (0, g.jsx)(tx, {
                            upsellMessage: z,
                            upgradeButtonTextProps: K,
                            isUpgradeSystemEnabled: V,
                            inputMode: N,
                            errorMessage: E.isError ? E.message : void 0,
                            onErrorDismiss: E.isError ? F : void 0,
                            aiChatFeatureController: t,
                            aiConnectorIncident: eK,
                            aiGeneralIncident: eV
                        }) : "filesRequireConfirmation" === N ? (0, g.jsx)(t8, {
                            attachments: s,
                            onAllowUploads: ts,
                            onRemoveFiles: tr
                        }) : null, (0, g.jsxs)(tC, {
                            aiChatFeatureController: t,
                            inputMode: N,
                            loadAttachmentData: eq,
                            onEsc: e$,
                            textStoreFocus: eh,
                            compact: J,
                            children: [em ? (0, g.jsx)(tP, {
                                surveyStepId: em.id,
                                questions: em.questions,
                                initialResponses: eC,
                                onComplete: ej,
                                onDraftResponsesChange: eA,
                                onDismiss: eI,
                                onToolbarActionChange: ew,
                                showAnimatedFace: eS,
                                animateInitialQuestion: ev,
                                compact: "sidebar" === t.agentChatFormFactor || "popup" === t.agentChatFormFactor,
                                spaceStore: w,
                                threadId: (null == P ? void 0 : P.id) ? ? eD
                            }) : (0, g.jsxs)(g.Fragment, {
                                children: [eP ? (0, g.jsx)(t9, {
                                    attachments: s,
                                    onDeleteStagedAttachment: b,
                                    threadId: (null == P ? void 0 : P.id) ? ? eD,
                                    spaceId: w.id,
                                    isDisabled: en
                                }) : null, e9 ? null : (0, g.jsx)(nv, {
                                    aiChatFeatureController: t,
                                    attachments: s,
                                    config: m,
                                    inputMode: N,
                                    isSimplifiedInputEnabled: !0,
                                    mentions: h,
                                    currentPageInContext: p,
                                    onChangeMentions: eH,
                                    onDeleteStagedAttachment: b,
                                    onRemoveMentionChip: k,
                                    onRemoveSelectedBlocks: eO,
                                    onClickSelectedBlocks: eW,
                                    selectedBlocks: B,
                                    spaceStore: w,
                                    threadStore: P,
                                    pageVisitSource: A,
                                    focusWithin: ee,
                                    isAddContextMenuOpen: eo,
                                    isAddContextMenuRecentlyClosed: es,
                                    onAddContextMenuOpenChange: eF,
                                    persistContextVisibility: el
                                }), (0, g.jsxs)("div", {
                                    style: nk,
                                    children: [(0, g.jsx)(tO, {
                                        aiChatFeatureController: t,
                                        inputMode: N,
                                        allowQueuingDuringStreaming: e2,
                                        loadAttachmentData: eq,
                                        onEsc: e$,
                                        onSubmit: eJ,
                                        onCommandEnter: eQ ? e0 : void 0,
                                        onCommandAltEnter: eG ? e1 : void 0,
                                        placeholder: e3,
                                        textStore: _,
                                        textStoreFocus: eh,
                                        onBackspace: to,
                                        onTextChange: ta,
                                        ignoreKeyboardMode: D,
                                        alignWithSimplifiedActions: !0,
                                        hideTextInput: e9
                                    }), e9 ? (0, g.jsx)("div", {
                                        style: nC,
                                        children: (0, g.jsx)("div", {
                                            style: { ...nM,
                                                ...ei.recordingVisualizerPadding
                                            },
                                            children: (0, g.jsx)(n(650354).t, {
                                                fillWidth: !0,
                                                audioRecorder: L,
                                                isAudioActive: !0,
                                                forceRender: void 0 === L
                                            })
                                        })
                                    }) : null]
                                })]
                            }), e8 && "recording" !== N ? (0, g.jsx)("div", {
                                style: ei.inlineSendButton,
                                children: "runningInference" === N && tn && t.supportsStopInference(m.type) ? (0, g.jsx)(C, {
                                    onClick: M
                                }) : (0, g.jsx)(S, {
                                    aiChatFeatureController: t,
                                    inputMode: "recording" === e5 ? "ready" : e5,
                                    onSubmit: eJ
                                })
                            }) : (0, g.jsx)(tu, {
                                aiChatFeatureController: t,
                                clientStore: r,
                                config: m,
                                inputMode: N,
                                isInputEmpty: tn,
                                threadMode: U,
                                loadAttachmentData: eq,
                                onChangeNextConfig: y,
                                isImageModeEnabled: ed,
                                onEnableImageMode: ep,
                                onDisableImageMode: eg,
                                isStoppingRecording: O,
                                onStartRecording: W,
                                onStopRecording: q,
                                onStopInference: M,
                                onSubmit: eZ,
                                spaceStore: w,
                                threadStore: P,
                                disabled: T,
                                allowQueuingDuringStreaming: e2,
                                mentions: h,
                                onChangeMentions: eH,
                                onAddContextMenuOpenChange: eF,
                                sourcePickerProps: {
                                    aiChatFeatureController: t,
                                    activeThreadId: (null == P ? void 0 : P.id) ? ? eD,
                                    clientStore: r,
                                    config: m,
                                    inputMode: N,
                                    onChangeNextConfig: y,
                                    spaceStore: w,
                                    threadStore: P,
                                    threadMode: U,
                                    pendingPlanModeStep: H,
                                    onSetPendingPlanModeStep: $ ? ? nA
                                },
                                surveyToolbarAction: em ? ef : void 0,
                                compact: J
                            })]
                        }), t.supportsConnectorsBanner ? (0, g.jsx)(ty, {
                            aiChatFeatureController: t,
                            inputMode: N
                        }) : null]
                    })
                })
            }
        },
        827781: (e, t, n) => {
            function i() {
                n(456925).F0.setState({ ...n(456925).F0.state,
                    currentScreen: "settings"
                })
            }

            function o() {
                n(443709).EF.setState({ ...n(443709).EF.state,
                    currentScreen: "settings"
                })
            }
            n.d(t, {
                o: () => o,
                v: () => i
            })
        },
        845077: (e, t, n) => {
            n.d(t, {
                oY: () => s,
                uE: () => a
            }), n(944114), n(898992), n(430670);
            var i = n(296540),
                o = () => n(575422);

            function a(e) {
                let {
                    query: t,
                    useMentionMenuStore: o
                } = e, {
                    results: a,
                    isLoading: s
                } = function(e) {
                    let {
                        query: t,
                        disabled: o,
                        useMentionMenuStore: a,
                        open: s
                    } = e, r = (0, n(109939).tz)(), l = (0, n(533992).v3)(), c = (0, n(682985).K8)(() => a ? n(498368).Ay.state.open : s, [s, a]), d = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), u = !o && t.length > 0 && d && c, p = (0, n(682985).K8)(() => {
                        var e;
                        let t = n(148344).k.getSortedUserIds(),
                            i = null == (e = (0, n(427846)._)(l)) ? void 0 : e.id;
                        return [...(0, n(381453).oE)([i]), ...t]
                    }, [l]), g = (0, n(682985).K8)(() => {
                        let e = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                        return e ? (0, n(862085).i0)(e).flatMap(({
                            permissionItem: e
                        }) => (0, n(642157).B2)(e) ? [e.user_id] : []) : []
                    }, []), h = (0, n(815048).fJ)(n(308825).T.searchActions), [{
                        value: m = [],
                        status: f
                    }] = (0, n(97668).Yb)(async () => {
                        if (!u || "resolved" !== h.status) return [];
                        let e = (0, n(381453).sb)([...p, ...g]),
                            i = h.value;
                        return (await i.searchUsers({
                            environment: l,
                            parentStore: d,
                            query: t,
                            userIds: e,
                            minFuzzyScore: n(821048).XR,
                            placeSelfFirst: i.isPersonalPronoun(t, r.locale)
                        })).slice(0, 3)
                    }, [u, h.status, h.value, p, g, l, d, t, r.locale]), y = (0, n(682985).K8)(() => d && n(36151).c.state.wasGetVisibleUsersCalled[d.id], [d]), [{
                        value: b = [],
                        status: S
                    }] = (0, n(97668).Yb)(async () => u && y ? (0, n(990959).L)({
                        environment: l,
                        query: t,
                        membersOnly: !1,
                        limit: 20,
                        minFuzzyScore: n(821048).XR
                    }) : [], [u, l, t, y], {
                        debounce: 75
                    });
                    return {
                        results: (0, i.useMemo)(() => {
                            let e = [...m, ...b];
                            return (0, n(381453).hS)(e, e => e.id)
                        }, [m, b]),
                        isLoading: "pending" === S || "pending" === f
                    }
                }({
                    query: t,
                    disabled: (0, n(682985).K8)(() => (!!e.disabled || !!o) && !n(498368).Ay.state.mentionTypes.user, [e.disabled, o]),
                    ...o ? {
                        useMentionMenuStore: !0
                    } : {
                        useMentionMenuStore: !1,
                        open: !0
                    }
                }), r = (0, n(682985).K8)(() => n(498368).Ay.state.emptyQueryUserRequestStore.state.result ? ? [], []);
                return {
                    results: 0 === t.length ? r.slice(0, 4) : a.slice(0, 20),
                    isLoading: s
                }
            }

            function s(e) {
                let {
                    query: t,
                    environment: i,
                    useMentionMenuStore: a,
                    open: s
                } = e, r = (0, n(109939).tz)(), l = (0, n(682985).K8)(() => a ? n(498368).Ay.state.open : s, [s, a]), c = (0, n(596663).k)(), d = (0, n(972740).L)(), u = (0, n(876252).$)(), p = !(0, n(682985).K8)(() => (!!e.disabled || !!a) && !n(498368).Ay.state.mentionTypes.bot, [e.disabled, a]) && c && l && !!d && !!u, [{
                    value: g = [],
                    status: h
                }] = (0, n(97668).Yb)(async () => {
                    if (!p) return [];
                    try {
                        if (!d || !u) return [];
                        let e = await n(308825).T.customAgentSearchService.load(),
                            {
                                workflowStores: a
                            } = await e.getCustomAgents({
                                environment: i,
                                spaceStore: d,
                                userStore: u
                            }),
                            s = e.searchWorkflowStores({
                                query: t,
                                workflowStores: a,
                                limit: 5
                            }),
                            l = [];
                        for (let e of s) {
                            let t = (0, o().m)(e, r);
                            l.push({
                                workflowStore: e,
                                name: t.name,
                                icon: t.icon
                            })
                        }
                        return l
                    } catch {
                        return []
                    }
                }, [p, d, u, t, i, r], {
                    debounce: 75
                });
                return {
                    results: g,
                    isLoading: "pending" === h
                }
            }
        },
        864728: (e, t, n) => {
            n.d(t, {
                M: () => a
            });
            var i = n(296540),
                o = n(474848);
            let a = i.forwardRef(function(e, t) {
                let {
                    name: i,
                    icon: a,
                    ...s
                } = e;
                return (0, o.jsx)(n(95582).A, { ...s,
                    ref: t,
                    icon: (0, o.jsx)(n(736371).Z, {
                        icon: a
                    }),
                    title: i
                })
            })
        },
        908672: (e, t, n) => {
            n.d(t, {
                d: () => a
            });
            var i = () => n(546605);
            class o extends i().Store {
                getInitialState() {
                    return {
                        inlineUsageErrorVisible: !1,
                        featureAvailability: void 0,
                        counterToTriggerRerender: 0
                    }
                }
                drawAttentionToError() {
                    this.setState({ ...this.state,
                        inlineUsageErrorVisible: !0,
                        ...this.state.inlineUsageErrorVisible ? {
                            counterToTriggerRerender: this.state.counterToTriggerRerender + 1
                        } : {}
                    })
                }
            }
            let a = new o;
            n(202146).exposeDebugValue("AiChatInlineUsageErrorStore", a)
        },
        942829: (e, t, n) => {
            n.d(t, {
                u: () => i
            });

            function i() {
                let e = (0, n(834772).V)(),
                    {
                        variant: t
                    } = (0, n(222195).n)(),
                    i = (0, n(682985).K8)(() => n(968456)._.getShouldRenderTextPrompt(), []),
                    o = (0, n(682985).K8)(() => n(576218).Y.getShouldRenderTextPrompt(), []);
                return i && "sidebar_d1" === t || e && o
            }
        },
        990959: (e, t, n) => {
            async function i(e) {
                let {
                    environment: t,
                    membersOnly: i,
                    minFuzzyScore: o = n(821048).XR - 1,
                    placeSelfFirst: a,
                    limit: s
                } = e, r = n(728372).AppStoreSidebarSpaceStore.state, l = n(728372).AppStoreMainEditorCurrentBlockStore.state, c = n(728372).AppStoreCurrentUserStore.state;
                if (!r) return [];
                let d = e.query.startsWith("@") ? e.query.slice(1) : e.query,
                    u = n(148344).k.getSortedUserIds().slice(0, 100),
                    p = l && !i ? (0, n(862085).i0)(l).flatMap(({
                        permissionItem: e
                    }) => (0, n(642157).B2)(e) ? [e.user_id] : []) : [],
                    g = await (0, n(250521).x)({
                        environment: e.environment,
                        parentStore: r,
                        query: d,
                        userIds: n(381453).sb([...n(381453).oE([null == c ? void 0 : c.userId]), ...u, ...p]),
                        minFuzzyScore: o,
                        placeSelfFirst: a
                    });
                if (s && g.length >= s) return g.slice(0, s);
                let h = n(218744).default.getConfigKey("email_alias_migration", "mode"),
                    m = await t.api.callApi({
                        eventName: "listUsers",
                        environment: t,
                        data: {
                            cursor: void 0,
                            membershipFilter: i ? "members" : void 0,
                            limit: s ? s - g.length : 100,
                            query: d,
                            spaceId: r.id,
                            includeAliasSearch: (0, n(485477).K)(h)
                        }
                    });
                if ("success" !== m.type || 0 === m.data.users.length) return g;
                let f = m.data.users.sort((e, t) => {
                        var i, o;
                        let a = (null == (i = n(148344).k.state) ? void 0 : i[e.id]) ? ? 0;
                        return ((null == (o = n(148344).k.state) ? void 0 : o[t.id]) ? ? 0) - a
                    }),
                    y = await (0, n(975162).lX)(f, f.length, async e => {
                        let t = n(807825).L.createChildStore(r, {
                            table: n(832375).oo9,
                            id: e.id
                        });
                        return await t.load(), t.getValue()
                    }),
                    b = n(381453).hS([...g, ...n(381453).oE(y)], e => e.id),
                    S = new Set(r.getEmailDomains());
                return (0, n(109266).Q)({
                    query: d,
                    users: b,
                    minFuzzyScore: o,
                    currentUserValue: null == c ? void 0 : c.getValue(),
                    spaceDomains: S
                })
            }
            async function o(e) {
                let t = (0, n(328765).S)(),
                    o = n(908032).i({
                        userId: e.environment.currentUser.id,
                        spaceId: null == t ? void 0 : t.id,
                        debugFrom: "searchSpaceUsers"
                    });
                if (t && !n(36151).c.state.wasGetVisibleUsersCalled[t.id]) {
                    var a;
                    n(773352).log({
                        level: "error",
                        from: "searchSpaceUsers",
                        type: "getVisibleUsersNotCalled",
                        spaceId: t.id,
                        data: {
                            userId: null == (a = n(728372).AppStoreCurrentUserStore.state) ? void 0 : a.id,
                            routeName: e.environment.RouterStore.state.route.name
                        }
                    })
                }
                return o ? i(e) : (0, n(108653).h)(e)
            }
            n.d(t, {
                L: () => o
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(430670)
        }
    }
]);