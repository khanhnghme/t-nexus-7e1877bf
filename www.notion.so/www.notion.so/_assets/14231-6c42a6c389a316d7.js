"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [14231], {
        61066: (e, t, i) => {
            i.d(t, {
                U: () => n
            });
            var r = () => i(546605);
            class s extends r().Store {
                getInitialState() {
                    return {
                        isOpen: !1,
                        userId: void 0
                    }
                }
                open(e) {
                    this.setState({
                        isOpen: !0,
                        userId: e
                    })
                }
                close() {
                    this.setState({
                        isOpen: !1,
                        userId: void 0
                    })
                }
            }
            let n = new s
        },
        78e3: (e, t, i) => {
            i.d(t, {
                M: () => r
            });

            function r(e) {
                let {
                    userRootStore: t,
                    spaceViewIds: r,
                    transaction: s,
                    spaceViewPointers: n
                } = e;
                (0, i(173157).z)({
                    store: t,
                    data: {
                        space_views: r,
                        space_view_pointers: n
                    },
                    transaction: s
                })
            }
        },
        99928: (e, t, i) => {
            i.d(t, {
                _: () => r
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(803949), i(581454);
            class r {
                constructor(e = i(48091).Ay) {
                    this.dispatcher = e
                }
                shouldConnect = !1;
                keys = new Set;
                authToken;
                listener;
                listeners = new Map;
                connect(e) {
                    let {
                        keys: t,
                        authToken: i,
                        listener: r
                    } = e;
                    this.shouldConnect = !0, this.listener = r, this.keys = new Set(t), this.authToken = i, this.reconcile()
                }
                getKeys() {
                    return this.keys.values()
                }
                setKeys(e) {
                    this.keys = new Set(e), this.reconcile()
                }
                getListenerFn() {
                    return this.listener
                }
                setListenerFn(e) {
                    this.listener = e
                }
                getListenerReferences() {
                    return this.listeners.values().map(e => e.reference)
                }
                disconnect() {
                    this.shouldConnect = !1, this.reconcile()
                }
                reconcile() {
                    if (!this.shouldConnect) {
                        this.listeners.size > 0 && (this.listeners.values().forEach(e => {
                            this.dispatcher.removeListener(e.reference)
                        }), this.listeners.clear());
                        return
                    }
                    for (let [e, t] of this.listeners) this.keys.has(e) || (this.dispatcher.removeListener(t.reference), this.listeners.delete(e));
                    for (let e of this.keys) {
                        let t = this.listeners.get(e);
                        if (t) {
                            if (t.authToken === this.authToken) continue;
                            this.dispatcher.removeListener(t.reference)
                        }
                        let i = this.dispatcher.addListener({
                            key: e,
                            authorizationToken: this.authToken,
                            listener: this.groupListener,
                            subscriptionId: null == t ? void 0 : t.reference.subscriptionId
                        });
                        if (!i) {
                            this.listeners.delete(e);
                            continue
                        }
                        this.listeners.set(e, {
                            reference: i,
                            authToken: this.authToken
                        })
                    }
                }
                groupListener = e => {
                    var t;
                    return null == (t = this.listener) ? void 0 : t.call(this, e)
                }
            }
        },
        100236: (e, t, i) => {
            i.d(t, {
                e: () => r
            }), i(16280);

            function r({
                environment: e,
                setLocalJoinState: t,
                totalSpaces: s,
                viewSpaceLabel: n,
                analyticsFrom: a,
                joinableSpacesViewType: o
            }) {
                return async r => {
                    let {
                        joinableSpace: n,
                        spacePosition: l
                    } = r;
                    if (e.currentUser.id) {
                        if (! function(e) {
                                let {
                                    from: t,
                                    joinabilityStatus: r,
                                    spaceId: s,
                                    spacePosition: n,
                                    totalSpaces: a
                                } = e;
                                (0, i(104310).u)({
                                    event: {
                                        eventName: "click_join_space_from_workspace_discovery",
                                        eventProperties: {
                                            from: t,
                                            joinability_status: r,
                                            space_id: s,
                                            space_position: n,
                                            total_spaces: a
                                        }
                                    }
                                })
                            }({
                                from: a,
                                joinabilityStatus: n.joinabilityStatus,
                                spaceId: n.id,
                                spacePosition: l,
                                totalSpaces: s
                            }), "CAN_REQUEST" === n.joinabilityStatus) {
                            if (n.requestMembershipCustomizationRedirectUrl) {
                                t(n.id, "requested"), window.open(n.requestMembershipCustomizationRedirectUrl, "_blank");
                                return
                            }
                            t(n.id, "loading");
                            try {
                                let i = await e.api.callCellCompatibleApi({
                                    cellNavigation: {
                                        spaceId: n.id
                                    },
                                    eventName: "requestAccess",
                                    environment: e,
                                    data: {
                                        type: "actor-to-space",
                                        forActorId: e.currentUser.id,
                                        spaceId: n.id
                                    }
                                });
                                if ("failed" === i.type) throw i.error;
                                t(n.id, "requested")
                            } catch (e) {
                                t(n.id, "idle"), i(773352).log({
                                    level: "error",
                                    from: "workspaceDiscoverySidebarCallout",
                                    type: "requestAccessFailed",
                                    error: (0, i(416607).convertErrorToLog)(e),
                                    data: {
                                        miscDataToConvertToString: {
                                            spaceId: n.id,
                                            spacePosition: l,
                                            totalSpaces: s
                                        }
                                    }
                                })
                            }
                            return
                        }
                        if (i(728372).AppStoreCurrentUserRootStore.state && "CAN_JOIN" === n.joinabilityStatus) {
                            t(n.id, "loading");
                            try {
                                await (0, i(758097).y)({
                                    environment: e,
                                    spaceId: n.id,
                                    userId: e.currentUser.id,
                                    joinableSpacesViewType: o
                                }), t(n.id, "joined")
                            } catch (e) {
                                t(n.id, "idle"), e instanceof Error && i(441742).Ay.setState({ ...i(441742).Ay.state,
                                    currentItem: {
                                        key: "workspace-discovery-join-error",
                                        label: e.message
                                    }
                                }), i(773352).log({
                                    level: "error",
                                    from: "workspaceDiscoverySidebarCallout",
                                    type: "joinSpaceError",
                                    error: (0, i(416607).convertErrorToLog)(e)
                                })
                            }
                        }
                    }
                }
            }
        },
        153828: (e, t, i) => {
            i.d(t, {
                P: () => s
            }), i(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.5 3.05 15 13.82",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M9.08 3.341a1.625 1.625 0 0 1 1.84 0l5.875 4.035c.441.304.705.805.705 1.34v6.034a2.125 2.125 0 0 1-2.125 2.125h-2.716a1.625 1.625 0 0 1-1.625-1.625v-4.065H8.967v4.065c0 .898-.728 1.625-1.625 1.625H4.625A2.125 2.125 0 0 1 2.5 14.75V8.716c0-.535.264-1.036.705-1.34zm1.132 1.03a.375.375 0 0 0-.424 0L3.913 8.407a.38.38 0 0 0-.163.309v6.034c0 .483.392.875.875.875h2.716a.375.375 0 0 0 .375-.375v-4.19c0-.621.503-1.125 1.125-1.125h2.319c.62 0 1.124.504 1.124 1.125v4.19c0 .207.168.375.375.375h2.716a.875.875 0 0 0 .875-.875V8.716c0-.124-.06-.24-.163-.31z"
                    })
                },
                s = (0, i(104509).wt)("home", r, "default")
        },
        207924: (e, t, i) => {
            i.d(t, {
                A: () => n
            }), i(296540);
            var r = i(474848);
            let s = {
                    text: {
                        fontSize: i(418676).Kw,
                        lineHeight: i(699422).K_.UISmall.desktop,
                        fontWeight: i(699422).Wy.medium,
                        marginInlineEnd: 6
                    },
                    button: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        width: i(986939).A.isMobile ? 24 : 20,
                        height: i(986939).A.isMobile ? 24 : 20,
                        borderRadius: 4
                    },
                    prefix: {
                        textAlign: "end",
                        height: i(986939).A.isMobile ? 16 : 18,
                        marginTop: i(986939).A.isMobile ? 8 : 4,
                        marginInlineStart: 12,
                        marginInlineEnd: 18,
                        color: i(632079).Tj.text.secondary,
                        transition: "opacity 150ms ease"
                    }
                },
                n = function({
                    emailAddress: e,
                    userId: t,
                    disabled: n,
                    accountActions: a,
                    prefix: o,
                    source: l
                }) {
                    let c, d = (0, i(533992).v3)(),
                        u = (0, i(533992).Y0)(),
                        p = (0, i(682985).uB)(void 0, i(510969).A),
                        h = (0, i(649476).Tf)(),
                        g = (0, i(67499).S)();
                    c = i(986939).A.isMobile ? {
                        menuType: i(649476).gu.Modal,
                        enableMobileRefresh: u.isTablet
                    } : {
                        menuType: i(649476).gu.Popup
                    };
                    let m = (0, i(960253).I)(() => ({
                        container: {
                            height: i(986939).A.isMobile ? 24 : 20,
                            marginTop: o ? 1 : i(986939).A.isMobile ? 20 : 8,
                            marginInlineStart: 12,
                            marginInlineEnd: 12,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: i(632079).Tj.text.secondary,
                            transition: "opacity 150ms ease",
                            paddingInlineStart: u.isTablet && h ? 16 : void 0,
                            paddingInlineEnd: u.isTablet && h ? 16 : void 0
                        }
                    }), [o, u.isTablet, h]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [o ? (0, r.jsx)("div", {
                            style: s.prefix,
                            children: o
                        }) : void 0, (0, r.jsxs)("div", {
                            style: m.container,
                            children: [(0, r.jsx)(i(503473).j, {
                                style: s.text,
                                children: e
                            }), (0, r.jsx)(i(656252).A, {
                                popupType: (() => {
                                    switch (!0) {
                                        case u.isTablet:
                                            return i(656252).z.BottomSheet;
                                        case i(986939).A.isMobile:
                                            return i(656252).z.SlideUp;
                                        default:
                                            return i(656252).z.Popup
                                    }
                                })(),
                                bottomSheetInitialState: u.isTablet ? "half" : void 0,
                                buttonPopupStore: p,
                                content: () => (0, r.jsx)(i(747369).A, { ...c,
                                    children: (0, r.jsx)(i(530500).A, {
                                        sections: [{
                                            key: "option section",
                                            actions: a
                                        }],
                                        context: {
                                            environment: d,
                                            blocks: [],
                                            publicEditMode: void 0,
                                            pageContext: g
                                        }
                                    })
                                }),
                                children: e => {
                                    if (!n) return (0, r.jsx)(i(64960).Ay, { ...e,
                                        style: s.button,
                                        children: (0, r.jsx)(i(16275).I, {
                                            icon: i(361226).ellipsisSmallIcon,
                                            size: i(986939).A.isMobile ? "default" : "sm"
                                        })
                                    })
                                }
                            })]
                        })]
                    })
                }
        },
        223477: (e, t, i) => {
            i.d(t, {
                b: () => r
            }), i(16280);
            class r {
                name;
                scope;
                queryOptions;
                queryKeyFn;
                queryFn;
                messageStoreKeys;
                constructor(e) {
                    this.name = e.name, this.scope = e.scope, this.queryKeyFn = e.queryKeyFn, this.queryFn = e.queryFn, this.queryOptions = e.options, this.messageStoreKeys = e.messageStoreKeys
                }
                getOptions(e, t) {
                    var r;
                    let s = this.getQueryScopeArgs(e, t),
                        n = null == (r = this.messageStoreKeys) ? void 0 : r.call(this, t);
                    return {
                        queryKey: this.getKey(s, t),
                        queryFn: i => this.queryFn(t, e, i),
                        queryOptions: this.queryOptions,
                        meta: {
                            effect: n ? function(e, t) {
                                if (!("api" in t)) throw Error("Message store effect is only supported in ClientEnvironment");
                                return r => {
                                    let s = new(i(99928))._;
                                    return s.connect({
                                        keys: e,
                                        authToken: void 0,
                                        listener: () => {
                                            var e;
                                            null == (e = t.queryClient) || e.invalidateQueries({
                                                queryKey: r.queryKey
                                            })
                                        }
                                    }), () => s.disconnect()
                                }
                            }(n, e) : void 0
                        }
                    }
                }
                getKeyFromSuffix(e, t) {
                    var r, s;
                    switch (this.scope) {
                        case "device":
                            return (0, i(83007).Eh)(this.name, "device", t);
                        case "user":
                            if (!e.currentUser) throw Error(`QueryType(${this.name}): user scope requires { currentUser: { id } }`);
                            return (0, i(83007).Eh)(this.name, (0, i(83007).OW)(null == (r = e.currentUser) ? void 0 : r.id), t);
                        case "space":
                            if (!e.currentUser || !e.spaceId) throw Error(`QueryType(${this.name}): space scope requires { currentUser: { id }, spaceId }`);
                            return (0, i(83007).Eh)(this.name, [(0, i(83007).OW)(null == (s = e.currentUser) ? void 0 : s.id), (0, i(83007).jJ)(e.spaceId)], t)
                    }
                }
                getKey(e, t) {
                    let i = this.queryKeyFn(t);
                    return this.getKeyFromSuffix(e, i)
                }
                getQueryScopeArgs(e, t) {
                    switch (this.scope) {
                        case "device":
                        case "user":
                            return {
                                currentUser: e.currentUser
                            };
                        case "space":
                            return {
                                currentUser: e.currentUser,
                                spaceId: t.spaceId
                            };
                        default:
                            (0, i(722371).HB)(this.scope)
                    }
                }
            }
            new r({
                name: "__EXAMPLE__usingQueryType",
                scope: "user",
                queryKeyFn: e => [e.bingo],
                queryFn: e => Promise.resolve({
                    BANGO: e.bingo.toUpperCase()
                }),
                options: {
                    persist: !1
                }
            }), new r({
                name: "__EXAMPLE__usingSpaceQueryType",
                scope: "space",
                queryKeyFn: e => [e.bingo],
                queryFn: e => Promise.resolve({
                    BANGO: e.bingo.toUpperCase()
                }),
                options: {
                    persist: !1
                }
            }), new r({
                name: "__EXAMPLE__usingQueryTypeInfinite",
                scope: "user",
                queryKeyFn: e => [e.foo],
                queryFn: (e, t, {
                    pageParam: i
                }) => Promise.resolve({
                    FOO: e.foo.toUpperCase()
                }),
                options: {
                    persist: !1
                }
            })
        },
        417066: (e, t, i) => {
            i.d(t, {
                P: () => s
            });
            let r = new Map;

            function s({
                environment: e,
                skipServerFetch: t,
                includeTopSpaces: r = !1,
                limit: a
            }) {
                return (0, i(97668).Yb)(async () => await n({
                    environment: e,
                    includeTopSpaces: r,
                    limit: a,
                    skipServerFetch: t
                }), [e, t, r, a])
            }
            async function n(e) {
                let {
                    environment: t,
                    includeTopSpaces: i,
                    limit: s,
                    skipServerFetch: n
                } = e, a = t.currentUser.id, o = `${i}-${s??"default"}`, l = r.get(o);
                if (l && l.userId === a) return l.response;
                if (n) return;
                let c = await t.api.callMainCellApi({
                    eventName: "hasJoinableSpaces",
                    environment: t,
                    data: {
                        includeTopSpaces: i,
                        limit: s
                    }
                });
                if ("failed" !== c.type && a) return r.set(o, {
                    userId: a,
                    response: c.data
                }), c.data
            }
        },
        518241: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => s,
                shieldLockFillIcon: () => n
            }), i(296540);
            var r = i(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.07 2.17 13.85 15.65",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M10 10.453a.756.756 0 1 1 0 1.513.756.756 0 0 1 0-1.513m0-3.622a.9.9 0 0 1 .9.9v1.01H9.1V7.73a.9.9 0 0 1 .9-.9"
                        }), (0, r.jsx)("path", {
                            d: "M9.788 2.212a.63.63 0 0 1 .491.03l1.89.944a7.5 7.5 0 0 0 3.344.789h.787c.345 0 .625.28.625.625v6.933a5.13 5.13 0 0 1-3.106 4.71l-3.573 1.532a.63.63 0 0 1-.492 0l-3.572-1.532a5.13 5.13 0 0 1-3.107-4.71V4.6c0-.345.28-.625.625-.625h.788c1.16 0 2.305-.27 3.343-.79l1.89-.944zM10 5.607a2.125 2.125 0 0 0-2.125 2.125v1.093c-.525.194-.9.698-.9 1.29v2.291c0 .76.616 1.375 1.375 1.375h3.3c.759 0 1.374-.615 1.374-1.375v-2.29c0-.593-.375-1.097-.9-1.29V7.731c0-1.174-.95-2.125-2.124-2.125"
                        })]
                    })
                },
                n = (0, i(104509).wt)("shieldLockFill", s, "fill")
        },
        577280: (e, t, i) => {
            i.d(t, {
                w: () => s
            }), i(296540);
            var r = i(474848);

            function s(e) {
                let {
                    labelType: t
                } = e, s = "invited" === t ? i(805186).S.invitedLabel : "external" === t ? i(805186).S.externalLabel : i(805186).S.guestLabel;
                return (0, r.jsx)(i(746434).E, {
                    content: (0, r.jsx)(i(109939).sA, { ...s
                    }),
                    color: "invited" === t || "external" === t ? "gray" : "yellow"
                })
            }
        },
        615079: (e, t, i) => {
            function r(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "open_space_switcher",
                        eventProperties: {}
                    }
                })
            }

            function s(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "space_switcher_select_space",
                        eventProperties: {}
                    }
                })
            }

            function n(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "space_switcher_logout_click",
                        eventProperties: {}
                    }
                })
            }

            function a(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "multi_account_add_or_create_account_clicked",
                        eventProperties: t
                    }
                })
            }

            function o(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "quick_workspace_creation_click",
                        eventProperties: {}
                    }
                })
            }
            i.d(t, {
                Bw: () => s,
                PL: () => r,
                Pz: () => n,
                dD: () => o,
                ff: () => a
            })
        },
        714231: (e, t, i) => {
            i.d(t, {
                ti: () => I,
                rY: () => V,
                rK: () => N
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577), i(581454);
            var r = i(296540),
                s = () => i(742197),
                n = () => i(995735),
                a = () => i(492047);
            let o = (0, i(109939).YK)({
                createOrJoinWorkspace: {
                    defaultMessage: "Create or join workspace",
                    id: "sidebarSwitcher.createOrJoinWorkspaceButton.prompt"
                },
                personalPlan: {
                    defaultMessage: "Personal Plan",
                    id: "sidebarSwitcher.personalPlan.label"
                },
                proPlan: {
                    defaultMessage: "Personal Pro Plan",
                    id: "sidebarSwitcher.proPlan.label"
                },
                educationPlan: {
                    defaultMessage: "Personal Pro Plan (Education)",
                    id: "educationPlan.title"
                },
                educationPlusPlan: {
                    defaultMessage: "Education Plus Plan",
                    id: "sidebarSwitcher.educationPlusPlan.label"
                },
                freePlan: {
                    defaultMessage: "Free Plan",
                    id: "sidebarSwitcher.freePlan.label"
                },
                teamTrialPlan: {
                    defaultMessage: "Team Plan (Trial)",
                    id: "teamTrialPlan.title"
                },
                teamPlan: {
                    defaultMessage: "Team Plan",
                    id: "teamPlan.title"
                },
                plusPlan: {
                    defaultMessage: "Plus Plan",
                    id: "plusPlan.title"
                },
                businessPlan: {
                    id: "businessPlan.title",
                    defaultMessage: "Business Plan"
                },
                enterprisePlan: {
                    defaultMessage: "Enterprise Plan",
                    id: "sidebarSwitcher.enterprisePlan.label"
                },
                legacyPlan: {
                    defaultMessage: "Legacy Plan",
                    id: "sidebarSwitcher.legacyPlan.label"
                },
                workspaceSubtitleWithMembers: {
                    id: "sidebarSwitcher.workspaceSubtitleWithMembers.label",
                    defaultMessage: "{planType} · {numberOfWorkspaceMembers, plural, one {{numberOfWorkspaceMembers} member} other {{numberOfWorkspaceMembers} members}}"
                },
                workspaceSubtitleWithoutMembers: {
                    id: "sidebarSwitcher.workspaceSubtitleWithoutMembers.label",
                    defaultMessage: "{planType}"
                }
            });
            async function l({
                environment: e,
                sidebarSpaceId: t
            }) {
                i(2907).V.reset(), (0, i(104310).u)({
                    event: {
                        eventName: "click_workspace_navigator_finish_setup",
                        eventProperties: {
                            sidebar_space_id: t
                        }
                    }
                });
                try {
                    await i(807717).createOrJoinSpace(e, "workspace_navigator_guest_only_cta")
                } catch (e) {
                    throw i(773352).log({
                        level: "error",
                        from: "workspaceNavigatorFirstTimeGuestActions",
                        type: "workspace_navigator_guest_only_cta.create_or_join_failed",
                        team: "acquisition",
                        data: {
                            miscDataToConvertToString: {
                                errorMessage: e instanceof Error ? e.message : String(e),
                                sidebarSpaceId: t
                            }
                        }
                    }), e
                }
            }
            i(16280), i(908872);
            let c = new(i(223477)).b({
                    name: "GetBillingDataQuery",
                    scope: "space",
                    queryKeyFn: () => [],
                    queryFn: async (e, t) => {
                        if (!t.currentUser.isLoggedIn()) throw Error("User must be logged in to fetch billing data");
                        let i = e.spaceId;
                        if (i.includes("|")) throw Error("Invalid spaceId, you're likely passing a spaceUserId instead");
                        let r = await t.api.callCellCompatibleApiOrThrow({
                            eventName: "getBillingData",
                            environment: t,
                            data: {
                                spaceId: i
                            },
                            cellNavigation: {
                                cellId: void 0,
                                spaceId: i
                            }
                        });
                        if (!r.billingData) throw Error("No billing data available");
                        return {
                            value: r.billingData
                        }
                    },
                    options: {
                        persist: !0
                    },
                    messageStoreKeys: ({
                        spaceId: e
                    }) => [(0, i(568479).Fi)({
                        spaceId: e
                    })]
                }),
                d = new(i(815048)).O2("EnsureNotionQueryClient", () => Promise.all([i.e(75134), i.e(28556), i.e(53923), i.e(48787)]).then(i.bind(i, 210508))),
                u = new(i(815048)).O2("QueryStore", () => Promise.all([i.e(75134), i.e(53923), i.e(81188)]).then(i.bind(i, 564681)));
            var p = i(474848);
            let h = {
                iconContainer: {
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center"
                },
                checkIcon: {
                    marginInlineStart: "auto"
                },
                chevronRightIcon: {
                    marginInlineStart: "auto",
                    marginInlineEnd: 6
                },
                tooltipCaption: {
                    color: i(632079).Tj.text.inverseSecondary
                }
            };

            function g(e) {
                let t = (0, i(815048).fJ)(d),
                    r = (0, i(815048).fJ)(u),
                    s = "resolved" === r.status ? r.value : void 0;
                if ("resolved" !== t.status) return (0, p.jsx)(y, { ...e
                });
                let {
                    EnsureNotionQueryClient: n
                } = t.value;
                return (0, p.jsx)(n, {
                    children: (0, p.jsx)(y, { ...e,
                        queryStoreModule: s
                    })
                })
            }

            function m(e) {
                return (0, i(83208).X)("enable_get_billing_data_tanstack") ? (0, p.jsx)(g, { ...e
                }) : (0, p.jsx)(y, { ...e
                })
            }

            function y({
                spaceId: e,
                focused: t,
                title: s,
                showTooltip: n = !1,
                disabled: a,
                isCheck: o,
                isRightArrow: l,
                icon: d,
                menuListItemProps: u,
                hideDragHandle: g,
                enterpriseWorkspaceAccessRestriction: m,
                spaceRequiredAuthStep: f,
                right: v,
                onMouseLeave: S,
                queryStoreModule: x
            }) {
                let j = (0, i(109939).tz)(),
                    k = (0, i(533992).Y0)(),
                    M = (0, i(533992).v3)(),
                    [I, _] = (0, r.useState)(!1),
                    T = (0, i(649476).Tf)(),
                    A = k.isTablet,
                    C = (0, i(855361).S)({
                        environment: M,
                        spaceId: n ? e : void 0
                    }),
                    {
                        subscriptionTierLabel: P,
                        shouldShowTooltip: L
                    } = (0, i(682985).K8)(() => {
                        let t = (() => {
                            if (e) {
                                if (x) {
                                    let t = function(e, t, i) {
                                        let r = e.queryClient;
                                        if (!r) return;
                                        let s = c.getOptions(e, {
                                            spaceId: t
                                        });
                                        return r.queryStoreCache.memoizeQueryStore(i.QueryStore, s)
                                    }(M, e, x);
                                    if (t) {
                                        let e = t.state;
                                        return null != e && e.isSuccess && e.data ? (0, i(337174).J1)(e.data.value) : void 0
                                    }
                                }
                                return i(54068).T.getData(M, {
                                    spaceId: e
                                })
                            }
                        })();
                        return n && t ? {
                            subscriptionTierLabel: (0, i(226309).Vx)({
                                intl: j,
                                billingData: t
                            }),
                            shouldShowTooltip: (C ? ? 0) > 0
                        } : {
                            subscriptionTierLabel: void 0,
                            shouldShowTooltip: !1
                        }
                    }, [M, e, x, n, j, C]),
                    q = (0, r.useCallback)(() => {
                        e && n && (0, i(832129).x)({
                            environment: M,
                            spaceId: e
                        })
                    }, [M, n, e]),
                    E = (0, r.useCallback)(() => _(!0), []),
                    U = (0, r.useCallback)(() => _(!1), []),
                    F = (0, r.useCallback)(() => {
                        _(!0), q()
                    }, [q]),
                    K = (0, r.useCallback)(() => q(), [q]),
                    R = (0, r.useMemo)(() => e ? ? (0, i(4962).lZ)(), [e]),
                    {
                        isMenuListFocusVisible: N
                    } = (0, r.useContext)(i(842459).V),
                    V = (0, i(960253).I)(() => ({
                        button: {
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: k.isTablet && T ? 40 : 32,
                            alignItems: "center",
                            padding: "4px 8px",
                            gap: k.isTablet && T ? 12 : 8,
                            transition: "background 150ms ease",
                            ...!a && t && N && {
                                boxShadow: i(632079).Tj.buttonBlueFocusRing,
                                ...i(69916).bQ
                            },
                            borderRadius: 6
                        },
                        contentContainer: {
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "center",
                            minWidth: 0,
                            gap: 4,
                            ...v && {
                                justifyContent: "space-between"
                            }
                        },
                        dragHandle: {
                            width: 20,
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: +!!I,
                            transition: `opacity ${i(153262).bM}`
                        },
                        spaceIcon: {
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: I && !g ? 0 : 1,
                            transition: `opacity ${i(153262).bM}`
                        }
                    }), [a, t, v, N, I, g, k.isTablet, T]),
                    W = (0, r.useMemo)(() => (0, p.jsxs)(i(4458).VP, {
                        children: [P, (0, p.jsx)("div", {
                            style: h.tooltipCaption,
                            children: (0, p.jsx)(i(109939).sA, {
                                id: "sidebarSwitcherMenuItem.spaceSubscriptionTier.tooltipMessage",
                                defaultMessage: "{memberCount, plural, one {{memberCount, number} member} other {{memberCount, number} members}}",
                                values: {
                                    memberCount: C
                                }
                            })
                        })]
                    }, `sidebarswitchermenuitem-tooltip-${e}`), [P, C, e]);
                if (A && T) {
                    let e = (0, p.jsxs)("div", {
                            style: h.iconContainer,
                            children: [g ? void 0 : (0, p.jsx)(i(544954).t, {
                                iconSize: "xs",
                                wrapperStyle: V.dragHandle
                            }), (0, p.jsx)("div", {
                                style: V.spaceIcon,
                                children: d
                            })]
                        }),
                        t = (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(w, {
                                spaceRequiredAuthStep: f,
                                enterpriseWorkspaceAccessRestriction: m
                            }), o ? (0, p.jsx)(i(16275).I, {
                                icon: i(15956).checkmarkIcon,
                                size: A && T ? "lg" : "default"
                            }) : void 0, l ? (0, p.jsx)("div", {
                                style: h.chevronRightIcon,
                                children: (0, p.jsx)(i(16275).I, {
                                    icon: i(588222).arrowChevronSingleRightFillSmallIcon,
                                    size: "sm"
                                })
                            }) : void 0]
                        });
                    return (0, p.jsx)(i(51831).m, {
                        content: () => W,
                        disableTooltip: !L,
                        forceVisibleState: I && L,
                        placement: "right",
                        children: r => (0, p.jsx)(i(95582).A, { ...[u ? ? {}, r, {
                                onMouseEnter: F,
                                onMouseMove: E,
                                onMouseLeave: U,
                                onFocus: K
                            }].reduce(i(63390).A),
                            focused: !1,
                            disabled: a,
                            icon: e,
                            title: s,
                            right: t ? ? v
                        })
                    }, `sidebarswitchermenuitem-tooltip-${R}`)
                }
                return (0, p.jsx)(i(51831).m, {
                    content: () => W,
                    disableTooltip: !L,
                    forceVisibleState: I && L,
                    placement: "right",
                    children: e => (0, p.jsxs)(i(64960).Ay, { ...[u ? ? {}, e, {
                            onMouseMove: E,
                            onMouseLeave: U
                        }, ...S ? [{
                            onMouseLeave: S
                        }] : []].reduce(i(63390).A),
                        hovered: I,
                        focused: !1,
                        disabled: a,
                        style: V.button,
                        children: [(0, p.jsxs)("div", {
                            style: h.iconContainer,
                            children: [g ? void 0 : (0, p.jsx)(i(544954).t, {
                                iconSize: "xs",
                                wrapperStyle: V.dragHandle
                            }), (0, p.jsx)("div", {
                                style: V.spaceIcon,
                                children: d
                            })]
                        }), (0, p.jsxs)("div", {
                            style: V.contentContainer,
                            children: [(0, p.jsx)(b, {
                                title: s
                            }), (0, p.jsx)(w, {
                                spaceRequiredAuthStep: f,
                                enterpriseWorkspaceAccessRestriction: m
                            }), o ? (0, p.jsx)("span", {
                                style: h.checkIcon,
                                children: (0, p.jsx)(i(16275).I, {
                                    icon: i(15956).checkmarkIcon,
                                    size: k.isTablet && T ? "lg" : "default"
                                })
                            }) : void 0, l ? (0, p.jsx)(i(16275).I, {
                                icon: i(588222).arrowChevronSingleRightFillSmallIcon,
                                size: "xxs"
                            }) : void 0, v]
                        })]
                    })
                }, `sidebarswitchermenuitem-tooltip-${R}`)
            }
            let f = {
                minWidth: 0
            };

            function b(e) {
                let {
                    title: t
                } = e;
                return (0, p.jsx)(i(324489).V, {
                    className: "notranslate",
                    style: f,
                    children: t
                })
            }
            let v = {
                display: "grid",
                justifyContent: "center",
                alignItems: "center"
            };

            function w(e) {
                let {
                    enterpriseWorkspaceAccessRestriction: t,
                    spaceRequiredAuthStep: r
                } = e;
                return r && "required-saml-auth" === r.type ? (0, p.jsx)(i(51831).m, {
                    content: () => (0, p.jsx)(i(109939).sA, {
                        id: "sidebarSwitcherMenuItem.spaceAccessRestriction.tooltip",
                        defaultMessage: "Requires SSO Sign-in"
                    }),
                    children: e => (0, p.jsx)("div", { ...e,
                        style: v,
                        children: (0, p.jsx)(i(16275).I, {
                            icon: i(518241).shieldLockFillIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        })
                    })
                }) : t && (0, i(572682).mR)(t) ? (0, p.jsx)("div", {
                    style: v,
                    children: (0, p.jsx)(i(16275).I, {
                        icon: i(269298).lockFillIcon,
                        size: "sm",
                        colorVariant: "secondary"
                    })
                }) : null
            }
            let S = (0, i(109939).YK)({
                    fallbackSpaceName: {
                        id: "yourWorkspaceButton.fallbackSpaceName",
                        defaultMessage: "this workspace"
                    }
                }),
                x = {
                    finishSetupLink: {
                        color: i(632079).Tj.blue.text.accentPrimary,
                        fontSize: 12,
                        fontWeight: i(699422).Wy.medium
                    },
                    tooltipContent: {
                        maxWidth: 240,
                        whiteSpace: "normal",
                        wordWrap: "break-word"
                    }
                };

            function j(e) {
                let {
                    experimentVariant: t,
                    currentGuestSpaceName: r,
                    ...s
                } = e, n = (0, i(109939).tz)(), a = (0, i(533992).Y0)(), o = (0, i(649476).Tf)(), l = a.isTablet && o ? 24 : 20, c = (0, i(960253).I)(() => ({
                    iconContainer: {
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                        width: l,
                        height: l
                    },
                    icon: {
                        fill: i(632079).Tj.icon.secondary,
                        width: l - 4,
                        height: l - 4
                    }
                }), [l]), d = (0, p.jsx)("div", {
                    style: c.iconContainer,
                    children: (0, p.jsx)(i(16275).I, {
                        icon: i(153828).P,
                        size: "sm",
                        style: c.icon
                    })
                }), u = (0, p.jsx)(i(324489).V, {
                    children: (0, p.jsx)(i(109939).sA, {
                        id: "yourWorkspaceButton.title",
                        defaultMessage: "Your workspace"
                    })
                }), h = (0, p.jsx)("div", {
                    style: x.finishSetupLink,
                    children: (0, p.jsx)(i(109939).sA, {
                        id: "yourWorkspaceButton.finishSetup",
                        defaultMessage: "Finish setup →"
                    })
                }), g = (0, p.jsx)(m, {
                    spaceId: "your-workspace-button",
                    focused: !1,
                    title: u,
                    right: h,
                    menuListItemProps: s,
                    hideDragHandle: !0,
                    icon: d
                });
                if ("v2" === t) {
                    let e = r || n.formatMessage(S.fallbackSpaceName);
                    return (0, p.jsx)(i(51831).m, {
                        content: () => (0, p.jsx)("div", {
                            style: x.tooltipContent,
                            children: (0, p.jsx)(i(109939).sA, {
                                id: "yourWorkspaceButton.v2Tooltip",
                                defaultMessage: "You’re a guest in {spaceName}. To use Notion for different work, create your own space.",
                                values: {
                                    spaceName: e
                                }
                            })
                        }),
                        placement: "right",
                        children: e => (0, p.jsx)("div", { ...e,
                            children: g
                        })
                    })
                }
                return g
            }
            let k = {
                    paddingBottom: 8
                },
                M = {
                    marginBottom: 1
                };

            function I(e) {
                let {
                    userId: t,
                    isLastUser: o,
                    shouldShowNewWorkspaceButtonInUserSpaceView: c,
                    joinableSpacesCount: d,
                    joinableSpaces: u,
                    onSpaceClick: h,
                    close: g,
                    disableAccountActions: y,
                    disableDrag: f,
                    spaceViewStoreFilterFn: b,
                    hideEmptySection: v
                } = e, w = (0, i(533992).v3)(), S = (0, i(533992).Y0)(), x = (0, i(533992).Ww)(), I = (0, i(533992).WS)(), T = (0, i(649476).Tf)(), C = (0, i(960253).I)(() => ({
                    menuList: S.isPhone ? {
                        paddingTop: 10
                    } : {}
                }), [S.isPhone]), P = (0, i(682985).K8)(() => {
                    let e = a().A.getSpaceViewStores(w, t);
                    return b ? e.filter(b) : e
                }, [w, t, b]), R = (0, i(682985).K8)(() => [...P.map(e => (0, i(694402).sZ)({
                    id: e.pointer.id,
                    spaceId: e.pointer.spaceId || ""
                })), "create-workspace-row"], [P]), {
                    currentUserRootStore: V,
                    sidebarSpaceStore: W
                } = (0, i(682985).K8)(() => ({
                    currentUserRootStore: i(728372).AppStoreCurrentUserRootStore.state,
                    sidebarSpaceStore: i(728372).AppStoreSidebarSpaceStore.state
                }), []), D = (0, i(109939).tz)(), {
                    shouldShowTab: O
                } = (0, i(915945).M)(W, {
                    experimentId: "workspace_discovery_workspace_switcher_v2"
                }), z = 1 === w.currentUser.loggedInUserIds.length, B = O && z, [J, G] = (0, r.useState)(() => ({})), Q = (0, r.useCallback)(e => J[e] ? ? "idle", [J]), H = (0, r.useCallback)((e, t) => {
                    G(i => ({ ...i,
                        [e]: t
                    }))
                }, []), Y = (0, i(100236).e)({
                    environment: w,
                    setLocalJoinState: H,
                    totalSpaces: (null == u ? void 0 : u.length) ? ? 0,
                    viewSpaceLabel: D.formatMessage(K.viewSpace),
                    analyticsFrom: "workspace_switcher",
                    joinableSpacesViewType: "workspace_discovery_workspace_switcher"
                }), $ = (0, i(682985).uB)(i(572682).zo), X = (0, r.useRef)(new Set), Z = (0, r.useRef)(void 0), ee = (0, r.useCallback)(() => {
                    let e = Z.current;
                    if (!e || X.current.has(e)) return;
                    X.current.add(e);
                    let r = () => {
                        X.current.delete(e)
                    };
                    i(905717).Z({
                        environment: w,
                        spaceId: e,
                        userId: t
                    }).catch(r), (0, i(455205).fetchUnfetchedTeamsFromLocalStorage)(), i(205885).A.state.online && (0, i(455205).fetchUnfetchedTeams)({
                        userId: t,
                        spaceId: e,
                        teamTypes: new Set(["Joined"]),
                        environment: w
                    }).catch(r)
                }, [w, t]), {
                    startDwell: et,
                    stopDwell: ei
                } = (0, i(508941).w)(ee, i(508941).T.medium), er = (0, i(682985).K8)(() => {
                    if (!V) return [];
                    let e = [];
                    for (let [o, l] of P.entries()) {
                        var r;
                        let o = l.getSpaceStore();
                        if (!o || (r = l).getPublicShareLinkPages().length > 0 && !r.getJoined()) continue;
                        let c = t === V.id && o.id === (null == W ? void 0 : W.id),
                            {
                                results: d
                            } = n().B.state,
                            u = d.find(e => e.spaceId === o.id),
                            y = (0, s().G)(w, o),
                            b = N({
                                environment: w,
                                spaceStore: o,
                                userId: t
                            }),
                            v = $.getWorkspaceAccessRestrictionForSpace({
                                userId: t,
                                spaceId: o.id
                            }),
                            S = o.getSettings().required_auth_step,
                            j = o.getIcon(),
                            k = o.id,
                            M = function(e, t) {
                                let {
                                    online: r
                                } = i(205885).A.state;
                                return !r && e.currentUser.id !== t
                            }(w, t);
                        e.push({
                            key: l.id,
                            render: i => {
                                let {
                                    focused: r
                                } = i, s = e => {
                                    i.onMouseEnter(e), c || X.current.has(k) || (Z.current = k, et())
                                };
                                return (0, p.jsx)(m, {
                                    spaceId: k,
                                    showTooltip: !0,
                                    menuListItemProps: { ...i,
                                        onMouseEnter: s
                                    },
                                    onMouseLeave: ei,
                                    focused: r,
                                    icon: (0, p.jsx)(A, {
                                        id: k,
                                        icon: j,
                                        size: x && T ? 24 : 20,
                                        spaceName: y,
                                        unreadMentions: t === w.currentUser.id && u && u.spaceId !== (null == W ? void 0 : W.id) && u.unread.mentions > 0 ? u.unread.mentions : void 0
                                    }),
                                    title: b,
                                    isCheck: c,
                                    disabled: M,
                                    hideDragHandle: f || e.length <= 1,
                                    enterpriseWorkspaceAccessRestriction: v,
                                    spaceRequiredAuthStep: S
                                })
                            },
                            action: async ({
                                event: e
                            }) => {
                                (g(), (0, a().t)(l)) ? function({
                                    environment: e,
                                    spaceViewStore: t
                                }) {
                                    i(647095).rG({
                                        message: i(962299).A.formatMessage(K.noAccessAsGuest),
                                        onAccept: () => {
                                            i(380762).kg({
                                                environment: e,
                                                spaceViewStore: t
                                            })
                                        }
                                    })
                                }({
                                    environment: w,
                                    spaceViewStore: l
                                }) : c || await h({
                                    event: e,
                                    spaceViewStore: l
                                })
                            }
                        })
                    }
                    return e
                }, [V, P, t, null == W ? void 0 : W.id, w, f, x, T, g, h, $, et, ei]), es = f || er.length <= 1, en = function({
                    shouldShowNewWorkspaceButtonInUserSpaceView: e,
                    joinableSpacesCount: t,
                    userId: n
                }) {
                    let o = (0, i(533992).v3)(),
                        c = (0, i(533992).Ww)(),
                        d = (0, i(649476).Tf)(),
                        {
                            sidebarSpaceStore: u,
                            sidebarSpaceViewStore: h
                        } = (0, i(682985).K8)(() => ({
                            sidebarSpaceStore: (0, i(328765).S)(),
                            sidebarSpaceViewStore: i(728372).AppStoreSidebarSpaceViewStore.state
                        }), []),
                        {
                            experimentVariant: g,
                            currentGuestSpaceName: m
                        } = function({
                            sidebarSpaceStore: e,
                            sidebarSpaceViewStore: t
                        }) {
                            let n = (0, i(533992).v3)(),
                                o = (0, i(682985).K8)(() => !!e && (0, i(916804).I)(e), [e]),
                                l = (0, i(682985).K8)(() => (function(e) {
                                    for (let t of a().A.getAllSpaceViewStores(e)) {
                                        let e = t.getSpaceStore();
                                        if (e && e.canRead()) return !1
                                    }
                                    return !0
                                })(n), [n]),
                                c = (0, i(682985).K8)(() => {
                                    if (e) return (0, s().G)(n, e)
                                }, [e, n]),
                                d = (0, i(682985).K8)(() => !i(986939).A.isMobile && !(0, i(494144).o)(t) && o && l, [t, o, l]),
                                u = (0, i(682985).K8)(() => d ? i(218744).default.getEligibleGroup({
                                    experimentId: "workspace_navigator_guest_only_cta",
                                    defaultGroup: "control"
                                }) : "control", [d]);
                            return (0, r.useMemo)(() => ({
                                currentGuestSpaceName: c,
                                experimentVariant: u
                            }), [c, u])
                        }({
                            sidebarSpaceStore: u,
                            sidebarSpaceViewStore: h
                        });
                    return "control" !== g ? [{
                        key: "your-workspace-section",
                        render: e => (0, p.jsx)(i(844565).A, { ...e,
                            disableMobilePadding: !(c && d),
                            style: L
                        }),
                        items: [{
                            key: "your-workspace",
                            render: e => (0, p.jsx)(j, { ...e,
                                experimentVariant: g,
                                currentGuestSpaceName: m
                            }),
                            action: async () => {
                                await l({
                                    environment: o,
                                    sidebarSpaceId: null == u ? void 0 : u.id
                                })
                            }
                        }]
                    }] : (t ? ? 0) > 0 ? [{
                        key: "add-workspace-section",
                        render: e => (0, p.jsx)(i(844565).A, { ...e,
                            disableMobilePadding: !(c && d),
                            style: L
                        }),
                        items: [{
                            key: "add-workspace",
                            render: e => (0, p.jsx)(U, { ...e,
                                usePlusIcon: !0,
                                title: (0, p.jsx)(i(109939).sA, {
                                    id: "sidebarSwitcherMultiAccount.singleAccountMenu.userSpaceViewList.addWorkspace.label",
                                    defaultMessage: "Add workspace"
                                })
                            }),
                            action: () => {
                                F({
                                    userId: n,
                                    environment: o,
                                    source: "workspace_discovery_switcher"
                                })
                            }
                        }]
                    }] : e ? [{
                        key: "join-and-new-workspace-section",
                        render: e => (0, p.jsx)(i(844565).A, { ...e,
                            disableMobilePadding: !(c && d),
                            style: L
                        }),
                        items: [{
                            key: "new-workspace",
                            render: e => (0, p.jsx)(U, { ...e,
                                title: (0, p.jsx)(i(109939).sA, {
                                    id: "sidebarSwitcherMultiAccount.singleAccountMenu.userSpaceViewList.newWorkspace.label",
                                    defaultMessage: "New workspace"
                                }),
                                usePlusIcon: !0
                            }),
                            action: () => {
                                F({
                                    userId: n,
                                    environment: o,
                                    source: "sidebar_switcher"
                                }), (0, i(615079).dD)(o)
                            }
                        }]
                    }] : void 0
                }({
                    shouldShowNewWorkspaceButtonInUserSpaceView: c,
                    joinableSpacesCount: d,
                    userId: t
                }), ea = function(e) {
                    let {
                        joinableSpaces: t,
                        getLocalJoinState: s,
                        onJoinSpace: n,
                        intl: a,
                        userId: o
                    } = e, l = (0, i(533992).Ww)(), c = (0, i(533992).v3)(), d = (0, i(649476).Tf)(), u = (0, r.useCallback)(e => {
                        let t = s(e.id);
                        return "idle" === t && "PENDING_REQUEST" === e.joinabilityStatus ? "requested" : t
                    }, [s]), h = (0, r.useMemo)(() => {
                        if (t) return t.map(e => {
                            let t = u(e);
                            return {
                                joinableSpace: e,
                                localJoinState: t
                            }
                        }).filter(({
                            localJoinState: e
                        }) => "joined" !== e)
                    }, [u, t]), g = (0, r.useMemo)(() => h && h.length > 0 ? h.map(({
                        joinableSpace: e,
                        localJoinState: t
                    }, r) => {
                        let s = e.name ? ? "";
                        return {
                            key: `joinable-space-${e.id}`,
                            render: o => {
                                var l, c;
                                return (0, p.jsx)(m, {
                                    spaceId: e.id,
                                    menuListItemProps: o,
                                    disabled: !0,
                                    focused: o.focused,
                                    hideDragHandle: !0,
                                    icon: (0, p.jsx)(i(569553).B6, {
                                        icon: (l = e.spaceIcon, c = e.id, l ? {
                                            pointer: {
                                                table: i(832375).NXh,
                                                id: c
                                            },
                                            icon: l
                                        } : void 0),
                                        title: e.name,
                                        iconRecordCategory: "workspace",
                                        disabled: !0,
                                        bucket: "public",
                                        isEmptyPage: !1,
                                        size: 20,
                                        emojiSize: 20,
                                        iconBoxStyles: q.spaceIconBox,
                                        placeholderStyle: q.spaceIconPlaceholder
                                    }),
                                    title: (0, p.jsx)(i(51831).m, {
                                        content: () => s,
                                        disableTooltip: 0 === s.length,
                                        placement: "top",
                                        children: e => (0, p.jsx)("div", { ...e,
                                            children: (0, p.jsxs)(i(4458).fI, {
                                                alignItems: "center",
                                                gap: 6,
                                                children: [(0, p.jsx)("span", {
                                                    style: q.style0,
                                                    children: s
                                                }), (0, p.jsx)(i(746434).E, {
                                                    content: (0, p.jsx)(i(109939).sA, { ...K.suggestedLabel
                                                    }),
                                                    color: "gray"
                                                })]
                                            })
                                        })
                                    }),
                                    right: (0, p.jsx)(E, {
                                        intl: a,
                                        joinableSpace: e,
                                        localJoinState: t,
                                        onJoinSpace: () => n(e, r)
                                    })
                                })
                            },
                            action: () => {}
                        }
                    }) : [], [a, h, n]);
                    if (null != h && h.length) return {
                        key: "joinable-workspaces",
                        render: e => (0, p.jsx)(i(844565).A, { ...e,
                            disableMobilePadding: !(l && d),
                            style: q.style1
                        }),
                        items: [...g, {
                            key: "explore-more-workspaces",
                            render: e => (0, p.jsx)(U, { ...e,
                                title: (0, p.jsx)(i(109939).sA, {
                                    id: "sidebarSwitcherMultiAccount.singleAccountMenu.userSpaceViewList.addWorkspace.label",
                                    defaultMessage: "Add workspace"
                                }),
                                usePlusIcon: !0
                            }),
                            action: () => {
                                F({
                                    userId: o,
                                    environment: c,
                                    source: "workspace_discovery_workspace_switcher"
                                })
                            }
                        }]
                    }
                }({
                    joinableSpaces: B ? null == u ? void 0 : u.slice(0, 3) : void 0,
                    getLocalJoinState: Q,
                    onJoinSpace: (e, t) => {
                        Y({
                            joinableSpace: e,
                            spacePosition: t
                        })
                    },
                    intl: D,
                    userId: t
                }), eo = [];
                er.length > 0 && eo.push({
                    key: "spaces",
                    render: e => (0, p.jsx)(i(844565).A, { ...e,
                        disableMobilePadding: !(x && T),
                        topBorder: I,
                        children: i(986939).A.isMobile ? e.children : (0, p.jsx)(i(66467).Ay, {
                            direction: "vertical",
                            keys: R,
                            renderKey: t => e.children[R.indexOf(t)],
                            onDrop: function(e) {
                                let {
                                    userId: t,
                                    environment: r,
                                    prependSpaceViewStores: s,
                                    appendSpaceViewStores: n
                                } = e;
                                return function(e) {
                                    let a = [...s ? s.map(e => e.pointer) : [], ...e.filter(e => "create-workspace-row" !== e && "guest-workspaces" !== e && "external-pages" !== e && "your-workspace" !== e).map(e => i(496282).L3.fromSpaceShardRecordId((0, i(694402).gK)(e), i(832375).mu7)), ...n ? n.map(e => e.pointer) : []],
                                        o = new(i(736309)).d(r, {
                                            table: i(832375).GDR,
                                            id: t
                                        }, {
                                            userId: t
                                        });
                                    (0, i(377796).createAndCommit)({
                                        userAction: "SidebarSwitcherMultiAccount.handleDraggableListDrop",
                                        environment: r,
                                        cellTarget: "main",
                                        canUndo: !0,
                                        perform: e => {
                                            (0, i(78e3).M)({
                                                userRootStore: o,
                                                transaction: e,
                                                spaceViewIds: a.map(e => e.id),
                                                spaceViewPointers: a
                                            })
                                        },
                                        userId: t
                                    }), (0, i(987674).p)(r, {
                                        workspace_count: e.length
                                    })
                                }
                            }({
                                userId: t,
                                environment: w,
                                appendSpaceViewStores: void 0
                            }),
                            style: M,
                            disabled: es
                        }),
                        style: c ? {
                            paddingBottom: 0
                        } : void 0
                    }),
                    items: er
                }), B && ea ? eo.push(ea) : er.length > 0 && en && eo.push(...en);
                let el = 0 === er.length;
                return v && !P.length ? null : (0, p.jsxs)("div", {
                    style: el && o ? k : {},
                    children: [(0, p.jsx)(_, {
                        userId: t,
                        disableAccountActions: y
                    }), eo.length > 0 ? (0, p.jsx)("div", {
                        style: C.menuList,
                        children: (0, p.jsx)(i(558045).A, {
                            type: i(558045).O.Vertical,
                            sections: eo,
                            initialFocus: void 0,
                            captureKeyboardOnlyWhenFocused: !0
                        })
                    }) : null]
                }, t)
            }

            function _(e) {
                let {
                    userId: t,
                    disableAccountActions: r = !1
                } = e, s = (0, i(682985).O$)(i(205885).e), n = (0, i(533992).v3)(), o = (0, i(682985).K8)(() => a().A.getUserEmailAddress(n, t), [n, t]);
                if (!o) return null;
                let l = r ? [] : [(0, i(781272).rR)(t), (0, i(781272).D9)(t)];
                return (0, p.jsx)(i(207924).A, {
                    emailAddress: o,
                    userId: t,
                    disabled: !s || r,
                    accountActions: l,
                    source: "userSpaceViewList"
                })
            }
            let T = {
                position: "relative"
            };

            function A({
                id: e,
                icon: t,
                size: r,
                spaceName: s,
                unreadMentions: n
            }) {
                return (0, p.jsx)(i(4458).fI, {
                    alignItems: "center",
                    children: (0, p.jsxs)("div", {
                        style: T,
                        children: [e ? (0, p.jsx)(i(569553).B6, {
                            disabled: !0,
                            icon: t,
                            isEmptyPage: !1,
                            title: s,
                            size: r,
                            isLarge: !0,
                            iconRecordCategory: "workspace"
                        }) : void 0, n ? (0, p.jsx)(P, {}) : void 0]
                    })
                })
            }
            let C = {
                unreadBadge: {
                    backgroundColor: i(632079).Tj.red.icon.accentPrimary,
                    position: "absolute",
                    top: -3,
                    insetInlineEnd: -4,
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    border: `1px solid ${i(632079).Tj.background.secondary}`
                }
            };

            function P() {
                return (0, p.jsx)("div", {
                    style: C.unreadBadge
                })
            }
            let L = {
                    paddingTop: 0
                },
                q = {
                    style0: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        maxWidth: "100%"
                    },
                    style1: {
                        paddingTop: 0
                    },
                    spaceIconBox: {
                        borderRadius: 6
                    },
                    spaceIconPlaceholder: {
                        fontWeight: i(699422).Wy.medium
                    }
                };

            function E(e) {
                let {
                    joinableSpace: t,
                    localJoinState: r,
                    onJoinSpace: s,
                    intl: n
                } = e, a = "loading" === r || "joined" === r || "requested" === r || "PENDING_REQUEST" === t.joinabilityStatus, o = (0, i(960253).I)(() => ({
                    button: {
                        marginInlineStart: 8,
                        ...a ? {
                            opacity: .6,
                            cursor: "not-allowed"
                        } : {}
                    }
                }), [a]);
                return (0, p.jsx)(i(406910).p, {
                    onClick: () => {
                        s()
                    },
                    disabled: a,
                    isLoading: "loading" === r,
                    colorPalette: a ? "gray" : "blue",
                    colorVariant: a ? "secondary" : "primary",
                    size: "xs",
                    style: o.button,
                    children: (0, p.jsx)(i(111010).D, {
                        styleKey: "captionMedium",
                        colorPalette: a ? "gray" : "blue",
                        colorVariant: a ? "secondary" : "accentPrimary",
                        children: function(e) {
                            let {
                                joinableSpace: t,
                                localJoinState: r,
                                intl: s
                            } = e;
                            switch (r) {
                                case "joined":
                                    return s.formatMessage(K.joinedCTA);
                                case "requested":
                                    return s.formatMessage(K.requestedCTA);
                                case "idle":
                                case "loading":
                                    if ("PENDING_REQUEST" === t.joinabilityStatus) return s.formatMessage(K.requestedCTA);
                                    if ("CAN_REQUEST" === t.joinabilityStatus) return s.formatMessage(K.requestCTA);
                                    return s.formatMessage(K.joinCTA);
                                default:
                                    return (0, i(722371).HB)(r)
                            }
                        }({
                            joinableSpace: t,
                            localJoinState: r,
                            intl: n
                        })
                    })
                })
            }

            function U(e) {
                let t, {
                        title: r,
                        colorVariant: s = "secondary",
                        ignoreBlueOverrides: n,
                        usePlusIcon: a,
                        ...o
                    } = e,
                    l = (0, i(604306).r)("improve_new_workspace_cta_in_account_switcher"),
                    c = (0, i(533992).Ww)(),
                    d = (0, i(649476).Tf)(),
                    u = function(e) {
                        let {
                            isTabletDesign: t,
                            colorVariant: r,
                            iconSize: s
                        } = e, n = "blue" === r;
                        return (0, i(960253).I)(() => ({
                            iconContainer: {
                                display: "grid",
                                justifyContent: "center",
                                alignItems: "center",
                                width: t ? 24 : 20,
                                height: t ? 24 : 20
                            },
                            icon: {
                                fill: n ? i(632079).Tj.blue.text.accentPrimary : i(632079).Tj.icon.secondary,
                                width: t ? 16 : s,
                                height: t ? 16 : s
                            },
                            label: {
                                color: "blue" === r ? i(632079).Tj.blue.text.accentPrimary : "primary" === r ? i(632079).Tj.text.primary : i(632079).Tj.text.secondary
                            }
                        }), [n, r, t, s])
                    }({
                        isTabletDesign: c && d,
                        colorVariant: n || "blue_text" !== l && "blue_text_and_multi_cta" !== l ? s : "blue",
                        iconSize: a ? 16 : 14
                    });
                return t = a ? (0, p.jsx)(i(16275).I, {
                    icon: i(223759).plusFillIcon,
                    size: "sm",
                    style: u.icon
                }) : (0, p.jsx)(i(16275).I, {
                    icon: i(330274).magnifyingGlassIcon,
                    size: "default",
                    style: u.icon
                }), (0, p.jsx)(m, {
                    spaceId: void 0,
                    focused: !1,
                    title: (0, p.jsx)("div", {
                        style: u.label,
                        children: r
                    }),
                    menuListItemProps: o,
                    hideDragHandle: !0,
                    icon: (0, p.jsx)("div", {
                        style: u.iconContainer,
                        children: t
                    })
                })
            }

            function F(e) {
                (0, i(837680).Z)(e.environment, {
                    from: "workspace_switcher"
                }), "control" !== i(218744).default.getEligibleGroup({
                    experimentId: "nudge_account_adding_n1",
                    defaultGroup: "control"
                }) ? i(61066).U.open(e.userId) : (i(2907).V.reset(), (0, i(781272).bU)(e).then(t => {
                    i(807717).createOrJoinSpace(t, e.source)
                }))
            }
            let K = (0, i(109939).YK)({
                    joinCTA: {
                        defaultMessage: "Join",
                        id: "workspaceDiscoverySidebarCallout.joinCTA"
                    },
                    requestCTA: {
                        defaultMessage: "Request",
                        id: "workspaceDiscoverySidebarCallout.requestCTA"
                    },
                    requestedCTA: {
                        defaultMessage: "Requested",
                        id: "workspaceDiscoverySidebarCallout.requestedCTA"
                    },
                    joinedCTA: {
                        defaultMessage: "Joined",
                        id: "workspaceDiscoverySidebarCallout.joinedCTA"
                    },
                    viewSpace: {
                        defaultMessage: "View workspace",
                        id: "workspaceDiscoverySidebarCallout.viewSpace"
                    },
                    suggestedLabel: {
                        defaultMessage: "Suggested",
                        id: "UserSpaceViewList.joinableSpace.suggestedLabel"
                    },
                    noAccessAsGuest: {
                        defaultMessage: "You no longer have access to this workspace.",
                        id: "UserSpaceViewList.noAccessAsGuest.label"
                    }
                }),
                R = {
                    flexShrink: 1,
                    textOverflow: "ellipsis",
                    overflow: "hidden"
                };

            function N(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    userId: n
                } = e, a = (0, s().G)(t, r), o = i(949830).A.getData(t, {
                    spaceId: r.id,
                    userId: n
                });
                return o && "none" === o.role ? (0, p.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    gap: 8,
                    children: [(0, p.jsx)("span", {
                        style: R,
                        children: a
                    }), (0, p.jsx)(i(577280).w, {
                        labelType: "guest"
                    })]
                }) : a
            }

            function V(e) {
                let {
                    environment: t,
                    intl: r,
                    spaceStore: s
                } = e, n = s.id, a = i(949830).A.getData(t, {
                    spaceId: n,
                    userId: t.currentUser.id
                });
                if (!a || "page_guest" === a.membershipType || "none" === a.membershipType) return {
                    subtitle: void 0,
                    subscriptionTierLabel: void 0
                };
                if ("restricted_member" === a.membershipType || "member" === a.membershipType || "membership_admin" === a.membershipType || "owner" === a.membershipType) {
                    let e = i(54068).T.getData(t, {
                        spaceId: n
                    });
                    if (!e) return {
                        subtitle: void 0,
                        subscriptionTierLabel: void 0
                    };
                    let s = (0, i(226309).Vx)({
                            intl: r,
                            billingData: e
                        }),
                        l = (0, i(616579).j)({
                            environment: t,
                            spaceId: n
                        }),
                        c = r.formatNumber(l ? ? 0);
                    return {
                        subtitle: "restricted_member" === a.membershipType ? r.formatMessage(o.workspaceSubtitleWithoutMembers, {
                            planType: s
                        }) : r.formatMessage(o.workspaceSubtitleWithMembers, {
                            numberOfWorkspaceMembers: c,
                            planType: s
                        }),
                        subscriptionTierLabel: s
                    }
                }(0, i(722371).HB)(a.membershipType)
            }
        },
        758097: (e, t, i) => {
            i.d(t, {
                y: () => r
            }), i(16280);
            async function r({
                environment: e,
                spaceId: t,
                userId: s,
                joinableSpacesViewType: n,
                analyticsFrom: a
            }) {
                let o = new(i(695906)).SpaceStore(e, {
                    table: i(832375).NXh,
                    id: t
                });
                await o.load();
                let l = i(229903).V.createChildStore(o, (0, i(729052).i1)({
                    userId: s,
                    spaceId: t
                }));
                if (await l.load(), l.isDefined())
                    if ("none" !== l.getMembershipType()) return Promise.resolve();
                    else throw Error(i(962299).A.formatMessage(i(271720).J.unableToJoinSpace)); {
                    let r = await e.api.callCellCompatibleApi({
                        eventName: "selfJoinSpaceByDomain",
                        environment: e,
                        cellNavigation: {
                            spaceId: t
                        },
                        data: {
                            spaceId: t,
                            joinableSpacesViewType: n,
                            analyticsFrom: a
                        }
                    });
                    if ("failed" === r.type) {
                        var c;
                        switch (null == (c = r.body) || null == (c = c.clientData) ? void 0 : c.type) {
                            case "unable_to_join_space":
                                throw Error(i(962299).A.formatMessage(i(271720).J.unableToJoinSpace));
                            case "space_user_already_exists_for_space":
                                i(773352).log({
                                    level: "warning",
                                    from: "selfJoinSpaceByDomain",
                                    type: "spaceUserAlreadyExistsForSpace",
                                    spaceId: t,
                                    data: {
                                        miscDataToConvertToString: {
                                            userId: s
                                        }
                                    }
                                });
                                break;
                            default:
                                throw r.error
                        }
                    }
                }
            }
        },
        781272: (e, t, i) => {
            i.d(t, {
                D9: () => a,
                bU: () => s,
                rR: () => n
            });
            let r = (0, i(109939).YK)({
                joinOrCreateWorkspace: {
                    id: "sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label",
                    defaultMessage: "Join or create workspace"
                },
                logOut: {
                    id: "sidebarSwitcherMultiAccount.singleAccountMenu.logOut.label",
                    defaultMessage: "Log out"
                }
            });
            async function s(e) {
                let {
                    userId: t,
                    environment: r
                } = e;
                return r.currentUser.id !== t ? await i(274662).T({
                    environment: r,
                    newCurrentUserId: t
                }) : r
            }

            function n(e) {
                return (0, i(233319).Ls)({
                    key: "join or create a workspace",
                    displayName: r.joinOrCreateWorkspace,
                    analyticsName: r.joinOrCreateWorkspace.defaultMessage,
                    svg: i(885822).addSquareRoundedIcon,
                    validators: [],
                    closeParentMenu: !0,
                    action: async ({
                        environment: t
                    }) => {
                        i(2907).V.reset();
                        let r = await s({
                                userId: e,
                                environment: t
                            }),
                            n = (0, i(908837).uA)() ? "workspace_discovery" : "space_switcher";
                        i(807717).createOrJoinSpace(r, n)
                    }
                })
            }

            function a(e) {
                return (0, i(233319).Ls)({
                    key: "log out of a single account",
                    displayName: r.logOut,
                    analyticsName: r.logOut.defaultMessage,
                    svg: i(927364).xMarkCircleIcon,
                    validators: [],
                    closeParentMenu: !0,
                    action: ({
                        environment: t
                    }) => {
                        let {
                            online: r
                        } = i(205885).A.state;
                        r && (i(724942).Yq({
                            environment: t,
                            userId: e,
                            logoutOrigin: i(279190).d.SpaceSwitcher
                        }), (0, i(615079).Pz)(t))
                    }
                })
            }
        },
        837680: (e, t, i) => {
            i.d(t, {
                Z: () => r
            });

            function r(e, t) {
                let {
                    from: r
                } = t;
                (0, i(104310).u)({
                    event: {
                        eventName: "click_workspace_discovery",
                        eventProperties: {
                            from: r
                        }
                    }
                })
            }
        },
        885822: (e, t, i) => {
            i.r(t), i.d(t, {
                addSquareRoundedIcon: () => n,
                iconDefinition: () => s
            }), i(296540);
            var r = i(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M10 6.375c.345 0 .625.28.625.625v2.375H13a.625.625 0 1 1 0 1.25h-2.375V13a.625.625 0 1 1-1.25 0v-2.375H7a.625.625 0 1 1 0-1.25h2.375V7c0-.345.28-.625.625-.625"
                        }), (0, r.jsx)("path", {
                            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                n = (0, i(104509).wt)("addSquareRounded", s, "default")
        },
        915945: (e, t, i) => {
            i.d(t, {
                M: () => r
            });

            function r(e, {
                experimentId: t
            }) {
                let s = (0, i(533992).v3)(),
                    n = (0, i(682985).K8)(() => "professional" === (0, i(904434).FX)(), []),
                    a = (0, i(682985).K8)(() => (null == e ? void 0 : e.canRead()) ? ? !1, [e]),
                    o = (0, i(83208).X)("should_request_joinable_spaces_for_workspace_discovery_surface") && !!e && n && a,
                    [{
                        value: l,
                        status: c
                    }] = (0, i(417066).P)({
                        environment: s,
                        skipServerFetch: !o
                    }),
                    d = !!(null == l ? void 0 : l.hasJoinableSpaces),
                    u = null == l ? void 0 : l.joinableSpacesCount,
                    p = !!e && n && a && d,
                    h = (0, i(682985).K8)(() => !!p && "on" === i(218744).default.getEligibleGroup({
                        experimentId: t,
                        defaultGroup: "control"
                    }), [t, p]);
                return {
                    shouldShowTab: p && h,
                    totalJoinableSpacesCount: u ? ? 0,
                    isLoading: "pending" === c && o
                }
            }
        },
        927364: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => s,
                xMarkCircleIcon: () => n
            }), i(296540);
            var r = i(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M12.817 7.183a.625.625 0 0 1 0 .884L10.884 10l1.933 1.933a.625.625 0 1 1-.884.884L10 10.884l-1.933 1.933a.625.625 0 1 1-.884-.884L9.116 10 7.183 8.067a.625.625 0 1 1 .884-.884L10 9.116l1.933-1.933a.625.625 0 0 1 .884 0"
                        }), (0, r.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                n = (0, i(104509).wt)("xMarkCircle", s, "default")
        },
        987674: (e, t, i) => {
            i.d(t, {
                p: () => r
            });

            function r(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "reorder_workspaces",
                        eventProperties: t
                    }
                })
            }
        }
    }
]);