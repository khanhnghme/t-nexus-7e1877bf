"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [63611], {
        338: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => s,
                personCircleIcon: () => a
            }), r(296540);
            var i = r(474848);
            let s = {
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
                a = (0, r(104509).wt)("personCircle", s, "default")
        },
        43484: (e, t, r) => {
            r.d(t, {
                e: () => s
            }), r(16280), r(898992), r(354520);
            var i = () => r(355095);
            class s extends i().o {
                _spaceId;
                _environment;
                _cursor;
                _limit;
                _query;
                constructor({
                    users: e,
                    environment: t,
                    spaceId: r,
                    initialMembershipFilter: i,
                    initialSort: s,
                    initialQuery: a,
                    limit: n
                }) {
                    super(e), this._environment = t, this._limit = n ? ? 20, this._cursor = void 0, this._query = void 0, this._spaceId = r, this.filter = i, this.sort = s, this._query = a, this.refresh()
                }
                async setFilter(e) {
                    this.filter !== e && (this._cursor = void 0, this.filter = e, await this.refresh())
                }
                async setSort(e) {
                    var t, r;
                    ((null == (t = this.sort) ? void 0 : t.field) !== (null == e ? void 0 : e.field) || (null == (r = this.sort) ? void 0 : r.direction) !== (null == e ? void 0 : e.direction)) && (this._cursor = void 0, this.sort = e, await this.refresh())
                }
                async setQuery(e) {
                    this._query !== e && (this._query = e, this._cursor = void 0, await this.refresh())
                }
                async refresh() {
                    this._cursor = void 0, await super.refresh()
                }
                async fetch() {
                    return await (0, r(612483).L5)({
                        fn: async () => {
                            var e, t;
                            let i = r(218744).default.getConfigKey("email_alias_migration", "mode");
                            this.abortController = new AbortController;
                            let s = await this._environment.api.callApi({
                                eventName: "listUsers",
                                environment: this._environment,
                                data: {
                                    cursor: this._cursor,
                                    membershipFilter: this.filter,
                                    limit: this._limit,
                                    sort: null == (e = this.sort) ? void 0 : e.field,
                                    sortDirection: null == (t = this.sort) ? void 0 : t.direction,
                                    query: this._query,
                                    spaceId: this._spaceId,
                                    includeAliasSearch: (0, r(485477).K)(i)
                                },
                                abortSignal: this.abortController.signal
                            });
                            if (this.abortController = void 0, "success" === s.type) return this._cursor = s.data.nextCursor, {
                                rows: s.data.users,
                                hasMore: s.data.hasMore
                            };
                            if ("failed" === s.type && (s.offline || 429 === s.status || 503 === s.status || 504 === s.status)) throw Error(`RetryableError:${s.status}`)
                        },
                        handleError: (e, t) => t ? {
                            status: "throw",
                            error: e
                        } : {
                            status: "retry"
                        },
                        retryAttemptsMS: [1e3, 2e3, 4e3],
                        retryAttemptRandomOffsetMS: 500,
                        initialInput: void 0
                    })
                }
            }
        },
        45508: (e, t, r) => {
            function i(e, t) {
                var i, s, a, n, o, l, d, c;
                let u = {
                    starting: void 0,
                    ending: void 0
                };
                return t.starting && t.ending ? (u = {
                    starting: {
                        type: "datetime",
                        start_time: "",
                        start_date: t.starting.start_date,
                        time_zone: ""
                    },
                    ending: {
                        type: "datetime",
                        start_time: "",
                        start_date: t.ending.start_date,
                        time_zone: ""
                    }
                }, null != (i = e.starting) && i.start_time && null != (s = e.starting) && s.time_zone && (u.starting = { ...u.starting,
                    start_time: e.starting.start_time,
                    time_zone: e.starting.time_zone
                }), null != (a = e.ending) && a.start_time && null != (n = e.ending) && n.time_zone ? u.ending = { ...u.ending,
                    start_time: e.ending.start_time,
                    time_zone: e.ending.time_zone
                } : u = {
                    starting: { ...u.starting,
                        start_time: "00:00",
                        time_zone: (0, r(714350).P)()
                    },
                    ending: { ...u.ending,
                        start_time: "23:59",
                        time_zone: (0, r(714350).P)()
                    }
                }) : u = t.starting ? null != (o = e.starting) && o.start_time && null != (l = e.starting) && l.time_zone ? {
                    starting: {
                        type: "datetime",
                        start_date: t.starting.start_date,
                        start_time: e.starting.start_time,
                        time_zone: e.starting.time_zone
                    },
                    ending: e.ending
                } : {
                    starting: {
                        type: "datetime",
                        start_date: t.starting.start_date,
                        start_time: "00:00",
                        time_zone: (0, r(714350).P)()
                    },
                    ending: e.ending
                } : t.ending ? null != (d = e.ending) && d.start_time && null != (c = e.ending) && c.time_zone ? {
                    ending: {
                        type: "datetime",
                        start_date: t.ending.start_date,
                        start_time: e.ending.start_time,
                        time_zone: e.ending.time_zone
                    },
                    starting: e.starting
                } : {
                    ending: {
                        type: "datetime",
                        start_date: t.ending.start_date,
                        start_time: "23:59",
                        time_zone: (0, r(714350).P)()
                    },
                    starting: e.starting
                } : {
                    starting: e.starting,
                    ending: e.ending
                }, u
            }

            function s(e) {
                return e.starting && e.ending ? {
                    starting: {
                        type: "date",
                        start_date: e.starting.start_date
                    },
                    ending: {
                        type: "date",
                        start_date: e.ending.start_date
                    }
                } : e.starting ? {
                    starting: {
                        type: "date",
                        start_date: e.starting.start_date
                    }
                } : e.ending ? {
                    ending: {
                        type: "date",
                        start_date: e.ending.start_date
                    }
                } : {}
            }

            function a(e) {
                if (e) return {
                    type: "date",
                    start_date: e.start_date
                }
            }

            function n(e) {
                return {
                    starting: e.starting ? {
                        type: "date",
                        start_date: e.starting.start_date
                    } : void 0,
                    ending: e.ending ? {
                        type: "date",
                        start_date: e.ending.start_date
                    } : void 0
                }
            }

            function o(e) {
                return void 0 === e.starting && void 0 === e.ending
            }
            r.d(t, {
                BI: () => s,
                ES: () => n,
                jO: () => o,
                qC: () => a,
                y2: () => i
            })
        },
        109266: (e, t, r) => {
            r.d(t, {
                Q: () => s
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            let i = new Set(["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com"]);

            function s({
                query: e,
                users: t,
                minFuzzyScore: a,
                currentUserValue: n,
                spaceDomains: o
            }) {
                return e ? (0, r(821048).Ay)(e, t, r(413818).T2, {
                    minScore: a,
                    getSortScore: e => {
                        let {
                            original: t,
                            score: s
                        } = e, a = t.email && (0, r(801109).zN)(t.email), l = n && (0, r(801109).zN)(n.email), d = a && o.has(a), c = l === a, u = l && i.has(l);
                        return s * (d || c && !u ? -2 : -1)
                    }
                }) : t
            }
        },
        111057: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var i = () => r(546605);
            class s extends i().Store {
                getInitialState() {
                    return {
                        recentRecoverableUsers: [],
                        searchQuery: void 0
                    }
                }
            }
            let a = new s
        },
        149402: (e, t, r) => {
            r.d(t, {
                w: () => a
            });
            var i = () => r(546605);
            class s extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                setCampaign(e) {
                    this.setState({ ...this.state,
                        campaign: e
                    })
                }
                open(e) {
                    this.setState({
                        open: !0,
                        ...e
                    })
                }
                close() {
                    this.setState({
                        open: !1
                    })
                }
            }
            let a = new s
        },
        153270: (e, t, r) => {
            r.d(t, {
                a: () => i
            });
            let i = (0, r(104509).xh)("checkmark", {
                default: {
                    loader: () => r.e(96772).then(r.bind(r, 15956))
                },
                small: {
                    loader: () => r.e(96772).then(r.bind(r, 971730))
                },
                fill: {
                    loader: () => r.e(96772).then(r.bind(r, 98702))
                },
                fillSmall: {
                    loader: () => r.e(96772).then(r.bind(r, 20413))
                }
            }, ["check", "tick", "confirm", "approve", "success"])
        },
        187374: (e, t, r) => {
            r.d(t, {
                Q: () => i,
                z: () => s
            });
            let i = 80,
                s = 200
        },
        205954: (e, t, r) => {
            function i({
                spaceStore: e,
                members: t
            }) {
                let s = n({
                        spaceStore: e
                    }),
                    a = (0, r(533992).v3)(),
                    o = e.id,
                    [l] = (0, r(97668).Yb)(async () => {
                        if (!s) return;
                        let e = await a.api.callApi({
                            eventName: "getRecentlyRemovedUsers",
                            environment: a,
                            data: {
                                spaceId: o
                            }
                        });
                        if ("failed" === e.type) throw r(647095).Qg(e), e;
                        return e.data.recentlyRemovedMembers
                    }, [o, a, s, t]);
                return l.value
            }

            function s({
                spaceStore: e,
                subscriptionData: t
            }) {
                let i = a({
                        spaceStore: e,
                        subscriptionData: t
                    }),
                    n = (0, r(533992).v3)();
                (0, r(97668).Yb)(async () => {
                    if (!i) return;
                    let t = await n.api.callApi({
                        eventName: "getRecoverableSpaceUserContent",
                        environment: n,
                        data: {
                            spaceId: e.id
                        }
                    });
                    if ("failed" === t.type) throw t;
                    let s = t.data.recentSpaceRecoverPages;
                    return r(111057).A.setState({ ...r(111057).A.state,
                        recentRecoverableUsers: s
                    }), s
                }, [e, n, i])
            }

            function a({
                spaceStore: e,
                subscriptionData: t
            }) {
                return (0, r(682985).K8)(() => e.canAdmin() && r(262166).OX(t.subscriptionTier), [t, e])
            }

            function n({
                spaceStore: e
            }) {
                return (0, r(682985).K8)(() => e.canAdmin(), [e])
            }

            function o({
                spaceStore: e
            }) {
                return (0, r(682985).K8)(() => !!e && e.canEditMembership(), [e])
            }

            function l({
                spaceStore: e
            }) {
                let t = (0, r(993077).U2)(e);
                return (0, r(682985).K8)(() => (0, r(405461).Ny)({
                    spaceStore: e,
                    spaceUserStore: t
                }), [e, t])
            }

            function d() {
                let e = (0, r(533992).v3)();
                return (0, r(682985).K8)(() => (0, r(939588).v)(e), [e])
            }

            function c({
                spaceStore: e
            }) {
                let t = (0, r(394810).h)(e);
                return (0, r(682985).K8)(() => !!((null == e ? void 0 : e.canEditMembership()) && t), [e, t])
            }

            function u({
                spaceStore: e
            }) {
                let t = (0, r(394810).h)(e),
                    i = !!((0, r(682985).K8)(() => null == e ? void 0 : e.canAdmin(), [e]) && t);
                return {
                    hoverCard: i,
                    directory: i,
                    activity: i
                }
            }
            r.d(t, {
                BV: () => i,
                Gg: () => c,
                Ul: () => u,
                k4: () => o,
                qz: () => l,
                r1: () => n,
                rl: () => s,
                t1: () => a,
                zh: () => d
            })
        },
        206567: (e, t, r) => {
            r.d(t, {
                Ay: () => l,
                N4: () => n,
                xt: () => a
            });
            var i = () => r(546605);
            let s = ["en", "en-us", "en-ca"];

            function a(e) {
                return "pdf" === e.exportOptions.exportType
            }

            function n() {
                return s.includes(r(849917).locale.toLowerCase()) ? "Letter" : "A4"
            }
            class o extends i().Store {
                getInitialState() {
                    return {
                        open: !1,
                        shouldExportComments: !1
                    }
                }
            }
            let l = new o
        },
        241075: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var i = r(296540),
                s = r(474848);

            function a(e) {
                let {
                    organizationBotStore: t,
                    size: i
                } = e, a = (0, r(109939).tz)(), n = (0, r(682985).K8)(() => (null == t ? void 0 : t.getDisplayName(a)) ? ? a.formatMessage(r(993189).c91.messages.unnamedBot), [t, a]);
                return (0, s.jsx)(r(569553).B6, {
                    icon: void 0,
                    iconRecordCategory: void 0,
                    title: n,
                    size: i || 18,
                    disabled: !0,
                    isEmptyPage: !1,
                    useInvertedColors: !0
                })
            }

            function n(e) {
                var t;
                let {
                    avatar: i,
                    size: a
                } = e, n = (t = a, (0, r(960253).I)(() => ({
                    container: {
                        width: t,
                        height: t,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }), [t])), o = i.icon ? ? r(85071).integrationIcon;
                return (0, s.jsx)("div", {
                    style: n.container,
                    children: (0, s.jsx)(r(16275).I, {
                        icon: o,
                        size: a
                    })
                })
            }
            let o = (0, r(109939).YK)({
                    workspaceOwnerTooltip: {
                        id: "shareMenu.cellMemberAvatar.workspaceOwnerTooltip",
                        defaultMessage: "Workspace owner"
                    }
                }),
                l = {
                    titleYouIndicator: {
                        color: r(632079).Tj.text.secondary
                    },
                    detailLabel: {
                        flex: 1,
                        minWidth: 0
                    },
                    badgeIcon: {
                        display: "inline-flex",
                        flexShrink: 0
                    }
                };

            function d(e) {
                let {
                    actorStore: t,
                    avatar: i,
                    isLarge: o
                } = e, l = o ? 32 : 28;
                if (!t) return i ? "mcp" === i.type ? (0, s.jsx)(n, {
                    avatar: i,
                    size: l
                }) : (0, s.jsx)(r(321753).A, {
                    avatar: i,
                    size: l
                }) : (0, s.jsx)(r(321753).A, {
                    userStore: void 0,
                    size: l
                });
                return t.table === r(832375).GPl ? (0, s.jsx)(r(31319).A, {
                    botStore: t,
                    size: l
                }) : t.table === r(832375).oo9 ? (0, s.jsx)(r(321753).A, {
                    userStore: t,
                    size: l
                }) : t.table === r(832375).rfw ? (0, s.jsx)(a, {
                    organizationBotStore: t,
                    size: l
                }) : void(0, r(722371).HB)(t)
            }
            let c = function(e) {
                let t = (0, r(109939).tz)(),
                    {
                        actorStore: a,
                        avatar: n,
                        containerStyle: c,
                        spaceRole: u,
                        avatarBadge: p,
                        caption: m,
                        isLarge: g,
                        restorationStatus: f,
                        hideRolePill: h
                    } = e,
                    v = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore),
                    x = (0, r(993077).V_)({
                        spaceStore: v,
                        userId: null == a ? void 0 : a.id
                    }),
                    y = u ? ? x,
                    b = (0, r(729052).kI)(y) && (0, r(729052).P)(y) || "team_level_guest" === y,
                    S = (0, r(682985).K8)(() => a ? a.getDisplayName(t) : null == n ? void 0 : n.name, [a, n, t]),
                    w = (0, r(682985).K8)(() => {
                        let e = r(728372).AppStoreCurrentUserStore.state;
                        return !!e && !!a && e.id === a.id
                    }, [a]),
                    _ = (0, r(960253).I)(() => ({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            maxWidth: g ? "unset" : 300,
                            marginInlineStart: 0
                        },
                        avatarWrapper: {
                            position: "relative",
                            ...!g && {
                                height: 28,
                                width: 28
                            }
                        },
                        textContainer: {
                            minWidth: 0,
                            marginInlineStart: g ? 10 : 6,
                            marginInlineEnd: g ? 10 : 6
                        }
                    }), [g]),
                    I = (0, r(682985).K8)(() => a ? a.getDetail() : null == n ? void 0 : n.email, [a, n]),
                    [j, A] = (0, i.useState)(!1);
                return (0, s.jsxs)("div", {
                    style: { ..._.container,
                        ...c
                    },
                    children: [(0, s.jsxs)("div", {
                        style: _.avatarWrapper,
                        children: [(0, s.jsx)(d, {
                            actorStore: a,
                            avatar: n,
                            isLarge: g
                        }), p]
                    }), (0, s.jsxs)("div", {
                        style: _.textContainer,
                        children: [(0, s.jsxs)(r(4458).fI, {
                            gap: 4,
                            alignItems: "center",
                            children: [(0, s.jsx)(r(324489).V, {
                                children: w ? (0, s.jsx)(r(109939).sA, {
                                    id: "cellMemberAvatar.displayName.title",
                                    defaultMessage: "{userFullDisplayName} <youIndicatorText>(You)</youIndicatorText>",
                                    values: {
                                        userFullDisplayName: S,
                                        youIndicatorText: e => (0, s.jsx)("span", {
                                            style: l.titleYouIndicator,
                                            children: e
                                        })
                                    }
                                }) : S
                            }), function(e, t) {
                                if (!h) switch (e) {
                                    case "owner":
                                    case "membership_admin":
                                        if ((null == t ? void 0 : t.type) === "mcp") return;
                                        return (0, s.jsx)(r(580244).l, {
                                            role: e
                                        });
                                    case "member":
                                    case "none":
                                    case void 0:
                                        return;
                                    case "restricted_member":
                                        return (0, s.jsx)(r(156379).L, {});
                                    case "page_guest":
                                    case "team_level_guest":
                                        return (0, s.jsx)(r(577280).w, {
                                            labelType: e
                                        });
                                    default:
                                        (0, r(722371).HB)(e)
                                }
                            }(y, n), v && f ? (0, s.jsx)(r(800668).A, {
                                spaceStore: v,
                                restorationStatus: f,
                                didAttemptRecovery: j
                            }) : void 0]
                        }), (0, s.jsxs)(r(4458).fI, {
                            gap: 6,
                            alignItems: "center",
                            children: [(0, s.jsx)(r(324489).V, {
                                isSmall: !0,
                                style: l.detailLabel,
                                children: m || I
                            }), function(e, i) {
                                if (!h && void 0 !== e && (null == i ? void 0 : i.type) === "mcp" && "team_level_guest" !== e && (0, r(729052).LF)(e)) {
                                    let e = t.formatMessage(o.workspaceOwnerTooltip);
                                    return (0, s.jsx)(r(51831).m, {
                                        placement: "top",
                                        content: () => e,
                                        children: t => (0, s.jsx)("span", { ...t,
                                            "aria-label": e,
                                            style: l.badgeIcon,
                                            children: (0, s.jsx)(r(16275).I, {
                                                icon: r(238542).teamspaceSmallIcon,
                                                size: "xs",
                                                colorVariant: "secondary"
                                            })
                                        })
                                    })
                                }
                            }(y, n)]
                        })]
                    }), !b && !j && v && (null == a ? void 0 : a.table) === r(832375).oo9 && S && (null == f ? void 0 : f.status) === "canBeRestored" ? (0, s.jsx)(r(369881).A, {
                        userStore: a,
                        spaceId: v.id,
                        onSubmit: () => A(!0)
                    }) : void 0]
                })
            }
        },
        250521: (e, t, r) => {
            r.d(t, {
                x: () => i
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            async function i({
                environment: e,
                parentStore: t,
                query: s,
                userIds: a,
                minFuzzyScore: n,
                placeSelfFirst: o
            }) {
                var l;
                let d, c = r(680007).default.mark("user_search_latency"),
                    u = r(218744).default.checkGate({
                        gateName: "search_batch_load_users"
                    }),
                    p = r(975162).lX(a, u ? 300 : Math.max(a.length, 1), async e => {
                        let i = r(807825).L.createChildStore(t, {
                            table: r(832375).oo9,
                            id: e
                        });
                        return await i.load(), i.getValue()
                    });
                (await (0, r(975162).nQ)(1e4, [p])).timeout && (r(773352).log({
                    level: "error",
                    from: "searchActions.searchUsers",
                    type: "UserStoreLoadTimeoutV1",
                    error: {
                        message: "The UserStore.load()'s took longer than 10 seconds"
                    },
                    data: {
                        searchedUserIdCount: a.length,
                        queryLength: s.length,
                        parentStoreLoaded: t.isReady(),
                        documentVisibilityState: document.visibilityState
                    }
                }), (0, r(104310).u)({
                    event: {
                        eventName: "user_search_timeout",
                        eventProperties: {
                            searchedUserIdCount: a.length,
                            queryLength: s.length,
                            parentStoreLoaded: t.isReady(),
                            documentVisibilityState: document.visibilityState
                        }
                    }
                }));
                let m = r(381453).oE(await p),
                    g = null == (l = r(728372).AppStoreCurrentUserStore.state) ? void 0 : l.userId;
                if (o && g) {
                    let e = m.findIndex(e => g === e.id);
                    e > -1 && (d = m[e], m.splice(e, 1))
                }
                let f = r(148344).k.state ? ? {},
                    h = Math.max(...Object.values(f));

                function v(e) {
                    var t;
                    return e === (null == (t = r(728372).AppStoreCurrentUserRootStore.state) ? void 0 : t.userId) ? h + 1e-5 : f[e] ? ? 0
                }
                let x = r(381453).Im(f) ? m : m.sort((e, t) => {
                        let r = v(e.id);
                        return v(t.id) - r
                    }),
                    y = new Set(t.getEmailDomains()),
                    b = s ? (0, r(109266).Q)({
                        query: s,
                        users: x,
                        minFuzzyScore: n,
                        currentUserValue: d,
                        spaceDomains: y
                    }) : m;
                return r(680007).default.measure(c, {}), d ? [d, ...b] : b
            }
        },
        369881: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var i = r(296540),
                s = r(474848);
            async function a(e, t, i) {
                return await r(280996).T.showAsyncModal(a => (0, s.jsx)(r(833503).s, {
                    isOpen: a.isOpen,
                    onDismiss: a.onDismiss,
                    onClosed: a.onClosed,
                    areaConstraint: {
                        width: {
                            type: "fixed",
                            length: 380
                        }
                    },
                    children: () => (0, s.jsx)(o, {
                        spaceId: e,
                        userStore: t,
                        onDismiss: a.onDismiss,
                        onSubmit: i
                    })
                }))
            }
            let n = {
                style0: {
                    textAlign: "center"
                },
                title: {
                    color: r(632079).Tj.text.primary,
                    textAlign: "center",
                    fontSize: 17,
                    fontWeight: r(699422).Wy.medium,
                    lineHeight: "22px"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function o({
                spaceId: e,
                userStore: t,
                onDismiss: a,
                onSubmit: l
            }) {
                let d = (0, r(533992).v3)(),
                    c = t.id,
                    u = (0, r(109939).tz)(),
                    p = (0, r(682985).K8)(() => t.getDisplayName(u), [t, u]),
                    m = (0, i.useCallback)(async () => {
                        let t = await d.api.callApi({
                            eventName: "recoverUserContentInSpace",
                            environment: d,
                            data: {
                                spaceId: e,
                                userId: c
                            }
                        });
                        if ("failed" === t.type) throw r(647095).Qg(t), t;
                        l(), a(), r(436555).D6({
                            label: (0, s.jsx)(r(109939).sA, {
                                id: "restoreAccessModal.snackbarMessage",
                                defaultMessage: "Initiated restoration of access for{nbsp}{displayName}",
                                values: {
                                    displayName: (0, s.jsx)("b", {
                                        children: p
                                    }),
                                    nbsp: (0, s.jsx)(s.Fragment, {
                                        children: " "
                                    })
                                }
                            })
                        })
                    }, [d, e, c, p, a, l]);
                return (0, s.jsx)(r(314084).t, {
                    header: (0, s.jsx)(r(582471).Y, {
                        iconAndTitle: (0, s.jsxs)(r(4458).VP, {
                            alignItems: "center",
                            className: "autolayout-fill-width",
                            style: {
                                gap: 9,
                                ...n.positionRelative
                            },
                            children: [(0, s.jsx)(r(321753).A, {
                                userStore: t,
                                size: 40
                            }), (0, s.jsx)("div", {
                                style: n.title,
                                children: (0, s.jsx)(r(109939).sA, {
                                    defaultMessage: "Restore access",
                                    id: "restoreAccessModal.title"
                                })
                            })]
                        }),
                        description: (0, s.jsx)(r(109939).sA, {
                            id: "restoreAccessModal.subtitle",
                            defaultMessage: "Restore additional access for members who were removed and re-added within the last 30 days"
                        })
                    }),
                    footer: (0, s.jsx)(r(591637).a, {
                        layout: "vertical",
                        primaryButtons: [{
                            buttonType: "primary",
                            label: (0, s.jsx)(r(109939).sA, {
                                defaultMessage: "Restore access",
                                id: "restoreAccessModal.restoreButton"
                            }),
                            onClick: m
                        }],
                        secondaryButtons: [{
                            buttonType: "secondary",
                            label: (0, s.jsx)(r(109939).sA, {
                                defaultMessage: "Cancel",
                                id: "restoreAccessModal.cancelButton"
                            }),
                            onClick: a
                        }]
                    }),
                    children: (0, s.jsxs)(r(4458).VP, {
                        gap: 24,
                        children: [(0, s.jsx)(r(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "primary",
                            style: n.style0,
                            children: (0, s.jsx)(r(109939).sA, {
                                id: "restoreAccessModal.contextDescription",
                                defaultMessage: "<b>{displayName}</b> already has access to their private pages",
                                values: {
                                    b: e => (0, s.jsx)("b", {
                                        children: e
                                    }),
                                    displayName: p
                                }
                            })
                        }), (0, s.jsx)(r(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "primary",
                            style: n.style0,
                            children: (0, s.jsx)(r(109939).sA, {
                                id: "restoreAccessModal.actionDescription",
                                defaultMessage: "Would you like to restore <b>{displayName}</b>’s access to their shared pages, groups, and teamspaces?",
                                values: {
                                    b: e => (0, s.jsx)("b", {
                                        children: e
                                    }),
                                    displayName: p
                                }
                            })
                        })]
                    })
                })
            }

            function l({
                spaceId: e,
                userStore: t,
                onSubmit: i
            }) {
                let n = (0, r(109939).tz)();
                return (0, s.jsx)(r(51831).m, {
                    placement: "right",
                    content: () => (0, s.jsx)(c, {}),
                    children: o => (0, s.jsx)(r(374533).A, {
                        icon: r(555326).arrowUTurnUpLeftSmallIcon,
                        ariaLabel: n.formatMessage({
                            id: "restoreAccessButton.aria",
                            defaultMessage: "Restore access"
                        }),
                        onClick: () => a(e, t, i),
                        ...o
                    })
                })
            }
            let d = {
                style0: {
                    fontWeight: r(699422).Wy.semibold
                }
            };

            function c() {
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        style: d.style0,
                        children: (0, s.jsx)(r(109939).sA, {
                            id: "userCell.restoreAccessTooltip.label",
                            defaultMessage: "Restore access to teamspaces, groups, and shared pages"
                        })
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)(r(109939).sA, {
                            id: "userCell.restoreAccessTooltip.description",
                            defaultMessage: "Only available if a member was removed and re-added in the last 30 days"
                        })
                    })]
                })
            }
        },
        413630: (e, t, r) => {
            r.d(t, {
                LN: () => g,
                Qh: () => l,
                Qs: () => c,
                gc: () => f,
                hL: () => n,
                m: () => m,
                rV: () => p
            }), r(57145), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(581454);
            var i = r(296540);
            let s = new Set(["Joined"]);

            function a(e) {
                let {
                    teamTypes: t
                } = e, s = (0, r(533992).v3)(), a = (0, r(682985).K8)(() => {
                    var t;
                    return e.userId ? ? (null == (t = r(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id)
                }, [e.userId]), n = (0, r(682985).K8)(() => e.spaceStore ? ? (0, r(328765).S)(), [e.spaceStore]);
                return (0, i.useEffect)(() => {
                    void 0 !== a && void 0 !== n && (0, r(455205).fetchUnfetchedTeams)({
                        userId: a,
                        spaceId: n.id,
                        teamTypes: t,
                        environment: s,
                        canTruncateRecordMap: null == e ? void 0 : e.canTruncateRecordMap,
                        sort: null == e ? void 0 : e.sort
                    })
                }, [a, n, t, s, null == e ? void 0 : e.canTruncateRecordMap, null == e ? void 0 : e.sort]), (0, r(682985).K8)(() => {
                    if (void 0 === a || void 0 === n) return {
                        teams: [],
                        isLoading: !0,
                        isError: !1
                    };
                    let {
                        teams: e,
                        isLoading: i,
                        isError: s
                    } = r(988752).E.readTeams(a, n.id, t);
                    return {
                        teams: e,
                        isLoading: i,
                        isError: s
                    }
                }, [a, n, t], {
                    equalityFn: r(795676).k
                })
            }

            function n(e) {
                let {
                    userId: t,
                    spaceStore: r
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: r,
                    teamTypes: s
                })
            }
            let o = new Set(["UnjoinedActive"]);

            function l(e) {
                let {
                    userId: t,
                    spaceStore: r
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: r,
                    teamTypes: o,
                    canTruncateRecordMap: null == e ? void 0 : e.canTruncateRecordMap,
                    sort: null == e ? void 0 : e.sort
                })
            }
            let d = new Set(["Joined", "UnjoinedActive"]);

            function c(e) {
                let {
                    userId: t,
                    spaceStore: r
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: r,
                    teamTypes: d
                })
            }
            let u = new Set(["Joined", "UnjoinedActive", "Archived"]);

            function p(e) {
                let {
                    userId: t,
                    spaceStore: r
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: r,
                    teamTypes: u
                })
            }

            function m(e) {
                let {
                    userId: t,
                    spaceStore: s
                } = e, {
                    teams: a,
                    isLoading: o,
                    isError: l
                } = n({
                    userId: t,
                    spaceStore: s
                }), d = (0, r(682985).K8)(() => {
                    var e;
                    return new Map(((null == (e = r(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getJoinedTeams()) ? ? []).map((e, t) => [e, t]))
                }, []);
                return {
                    teams: (0, i.useMemo)(() => a.toSorted((e, t) => (d.get(e.id) ? ? 1 / 0) - (d.get(t.id) ? ? 1 / 0)), [a, d]),
                    isLoading: o,
                    isError: l
                }
            }

            function g(e) {
                let {
                    spaceStore: t,
                    shouldCreateTeamStores: i
                } = e, {
                    teams: s
                } = m(e);
                return {
                    teams: (0, r(682985).K8)(() => t && i ? s.map(e => (0, r(455205).getTeamStore)({
                        teamId: e.id,
                        spaceStore: t
                    })) : [], [s, t, i]),
                    metadata: s
                }
            }

            function f(e) {
                let {
                    teams: t
                } = e, i = (0, r(682985).K8)(() => e.spaceStore ? ? (0, r(328765).S)(), [e.spaceStore]);
                return i ? t.map(({
                    id: e,
                    type: t,
                    membershipSummary: s
                }) => ({
                    store: (0, r(455205).getTeamStore)({
                        teamId: e,
                        spaceStore: i
                    }),
                    type: t,
                    membershipSummary: s
                })) : []
            }
        },
        423127: (e, t, r) => {
            function i(e) {
                let {
                    mostRecentOfferDate: t,
                    daysToAdd: i,
                    billingData: s
                } = e, a = (0, r(192159).DS)(s).toMillis();
                return (0, r(25825).K1)({
                    date: t,
                    daysToAdd: i
                }) < a
            }

            function s({
                memberCount: e,
                billingData: t,
                spaceId: i,
                environment: a
            }) {
                return !!e && !!t && !!i && !!(0, r(262166).dL)((0, r(192159).AI)(t)) && !(e > 10) && !(e < 2) && !!r(617995).I.getData(a, {
                    spaceId: i,
                    offerCampaign: "expansion_offer"
                }) && (0, r(717274).Nu)()
            }
            async function a({
                billingData: e,
                spaceStore: t,
                environment: i
            }) {
                var s;
                let [o, l] = await Promise.all([n({
                    billingData: e,
                    spaceStore: t,
                    environment: i
                }), (0, r(832129).x)({
                    environment: i,
                    spaceId: t.id
                })]), {
                    eligible: d,
                    campaign: c
                } = o;
                if (!d || !l) return {
                    shouldShow: !1,
                    campaign: void 0
                };
                let u = t.getModel();
                return (null == u || null == (s = u.getSettings()) || null == (s = s.offer_member_count) ? void 0 : s.find(e => e.campaign === c)) || !(l > 4) ? {
                    shouldShow: !0,
                    campaign: c
                } : {
                    shouldShow: !1,
                    campaign: void 0
                }
            }
            async function n({
                billingData: e,
                spaceStore: t,
                environment: s
            }) {
                if (!e || !(0, r(226309).qc)(e)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let a = (0, r(192159).AI)(e);
                if (!((0, r(262166).$P)(a) || (0, r(262166).tL)(a)) || "month" !== (0, r(192159).N4)("plan", e)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let o = (0, r(521469).UB)(a);
                if (!o) return {
                    eligible: !1,
                    campaign: void 0
                };
                let l = r(218744).default.getEligibleGroup({
                    experimentId: o,
                    defaultGroup: r(218745).STATSIG_DEFAULT_GROUP,
                    disableExposureLogging: !0
                });
                if ("control" === l || l === r(218745).STATSIG_DEFAULT_GROUP) return {
                    eligible: !1,
                    campaign: void 0
                };
                let d = (0, r(521469).$E)(a, l);
                if (!d) return {
                    eligible: !1,
                    campaign: void 0
                };
                let c = t.getModel();
                if ((0, r(521469).fd)(c, d)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let u = await r(185995).default.awaitData(s, {
                    spaceId: t.id
                });
                if (u) {
                    let {
                        isEligible: t
                    } = function(e) {
                        let {
                            campaign: t,
                            offerStatuses: s,
                            billingData: a
                        } = e, n = s.filter(r(90119).GK), o = [], l = (0, r(875472).e8)(n, "coupon"), d = !l || i({
                            mostRecentOfferDate: l.endDateMs,
                            daysToAdd: r(361200).offerEligibilityMap[t].couponRefreshDays,
                            billingData: a
                        });
                        d || o.push({
                            reason: "Coupon cooldown period has not passed",
                            extra: {
                                mostRecentCoupon: l,
                                requiredCouponRefreshDays: r(361200).offerEligibilityMap[t].couponRefreshDays
                            }
                        });
                        let c = (0, r(875472).e8)(n, "trial"),
                            u = !c || i({
                                mostRecentOfferDate: c.endDateMs,
                                daysToAdd: r(361200).offerEligibilityMap[t].trialRefreshDays,
                                billingData: a
                            });
                        return u || o.push({
                            reason: "Trial cooldown period has not passed",
                            extra: {
                                mostRecentTrial: c,
                                requiredTrialRefreshDays: r(361200).offerEligibilityMap[t].trialRefreshDays
                            }
                        }), {
                            isEligible: d && u,
                            ineligibleReasons: o
                        }
                    }({
                        campaign: d,
                        offerStatuses: u,
                        billingData: e
                    });
                    if (!t) return {
                        eligible: !1,
                        campaign: void 0
                    }
                }
                return {
                    eligible: !0,
                    campaign: d
                }
            }
            async function o({
                billingData: e,
                spaceStore: t,
                environment: i
            }) {
                let {
                    eligible: s,
                    campaign: a
                } = await n({
                    billingData: e,
                    spaceStore: t,
                    environment: i
                });
                if (!s || !a) return;
                let l = t.getModel(),
                    d = (0, r(521469)._w)(l, a);
                if (d) return {
                    shouldShowCallout: !0,
                    campaign: a,
                    membersAdded: d.membersAdded ? ? 0
                }
            }

            function l({
                initialTimestamp: e,
                dismissalKey: t,
                billingData: i
            }) {
                var s, a;
                let n = (0, r(192159).DS)(i).toMillis();
                if (n - e > 30 * Number(r(627179).nD)) return !1;
                let o = null == (s = r(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : s.getSettings(),
                    d = null == o || null == (a = o.callout_dismissal_timestamps) ? void 0 : a.find(e => e.name === t);
                return !(null != d && d.timestamp && (n - d.timestamp) / Number(r(627179).nD) < 3) && !0
            }
            r.d(t, {
                dM: () => s,
                Xd: () => o,
                ju: () => l,
                TO: () => a
            }), r(898992), r(672577), r(944114), r(354520)
        },
        425493: (e, t, r) => {
            r.d(t, {
                BY: () => a,
                Lg: () => o,
                id: () => p,
                nE: () => m,
                xi: () => l
            }), r(944114), r(898992), r(430670), r(581454);
            var i = () => r(993077),
                s = () => r(729052);
            async function a(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    contextualInviteStore: s
                } = e;
                ! function(e) {
                    let {
                        spaceStore: t,
                        contextualInviteStore: i
                    } = e, s = t.getRole();
                    return !(!s || !(0, r(642157).NB)(s) || !i.hasGuests() || t.getDisableMembershipRequests()) && (0, r(724175).x)()
                }({
                    environment: t,
                    spaceStore: i,
                    contextualInviteStore: s
                }) ? await n({
                    environment: t,
                    spaceStore: i,
                    contextualInviteStore: s
                }) ? s.startWorkspaceInvite() : s.setState({ ...s.state,
                    inviteStage: r(758972).d5.closed
                }): s.startRequestMembership()
            }
            async function n(e) {
                let {
                    spaceStore: t,
                    contextualInviteStore: i,
                    environment: s
                } = e, a = t.getRole();
                return !!a && !!(0, r(642157).vp)(a) && !!i.hasGuests() && await (0, r(655293).S)(s, {
                    name: "members",
                    spaceId: t.id,
                    userId: t.userId,
                    amount: 1
                })
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    contextualInviteStore: s,
                    from: a,
                    intl: n
                } = e, {
                    selection: o,
                    flowId: l
                } = s.state;
                if ("page_guest" === o || !s.hasGuests()) return s.reset(), !1;
                let {
                    inviteTargets: c,
                    unknownEmails: u
                } = await d({
                    environment: t,
                    contextualInviteStore: s,
                    spaceStore: i
                }), m = { ...s.state
                };
                s.reset();
                let g = await (0, r(655293).S)(t, {
                    name: "non_admin_members",
                    spaceId: i.id,
                    userId: i.userId
                });
                try {
                    await (0, r(487998).F)({
                        environment: t,
                        spaceStore: i,
                        inviteTargets: c,
                        membershipType: g ? "member" : "owner",
                        isOnboarding: !1,
                        invite: {
                            inviteOrigin: a,
                            inviteFlowId: l,
                            disable_invite_email: !0
                        }
                    })
                } catch (e) {
                    var f, h;
                    return f = n, 0 !== (h = m.invitedUsers).length && r(436555).D6({
                        label: f.formatMessage({
                            id: "contextual_invite.contextual_invite_failure",
                            defaultMessage: "{userCount, plural, one {Failed to invite {users} as member} other {Failed to invite {users} as members}}"
                        }, {
                            users: p(h, f),
                            userCount: h.length
                        })
                    }), r(773352).log({
                        level: "error",
                        from: "contextualInviteHelpers",
                        type: "inviteMembers.inviteTargets",
                        data: {
                            miscDataToConvertToString: { ...m,
                                inviteTargets: c
                            }
                        }
                    }), !1
                } finally {
                    u.length && r(773352).log({
                        level: "error",
                        from: "contextualInviteHelpers",
                        type: "inviteMembers.unknownUserId",
                        data: {
                            miscDataToConvertToString: { ...m,
                                unknownEmails: u
                            }
                        }
                    })
                }
                return !0
            }
            async function l(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    originId: s,
                    originType: a,
                    reasonMessage: n,
                    contextualInviteStore: o,
                    intl: l
                } = e, {
                    selection: c
                } = o.state;
                if ("page_guest" === c || !o.hasGuests()) return o.reset(), !1;
                let {
                    inviteTargets: u,
                    unknownEmails: m
                } = await d({
                    environment: t,
                    contextualInviteStore: o,
                    spaceStore: i
                }), g = { ...o.state
                };
                o.reset();
                let f = [];
                try {
                    let e = u.map(e => t.api.callApi({
                        eventName: "requestAccess",
                        environment: t,
                        data: {
                            type: "actor-to-space",
                            forActorId: e.value.id,
                            spaceId: i.id,
                            message: n,
                            attributes: {
                                origin_id: s,
                                origin_type: a,
                                origin_table: "share_menu" === a ? "block" : "space",
                                add_permissions_on_approval: !1
                            }
                        }
                    }).catch(() => f.push(e)));
                    await Promise.all(e)
                } catch (e) {
                    var h, v;
                    return h = l, 0 !== (v = g.invitedUsers).length && r(436555).D6({
                        label: h.formatMessage({
                            id: "contextual_invite.request_members_failure",
                            defaultMessage: "Failed to request {users} to become members"
                        }, {
                            users: p(v, h)
                        })
                    }), r(773352).log({
                        level: "error",
                        from: "contextualInviteHelpers",
                        type: "requestMembers.inviteTargets",
                        data: {
                            miscDataToConvertToString: { ...g,
                                inviteTargetsWithErrors: f
                            }
                        }
                    }), !1
                } finally {
                    m.length && r(773352).log({
                        level: "error",
                        from: "contextualInviteHelpers",
                        type: "requestMembers.unknownUserId",
                        data: {
                            miscDataToConvertToString: { ...g,
                                unknownEmails: m
                            }
                        }
                    })
                }
                return !0
            }
            async function d(e) {
                let {
                    environment: t,
                    contextualInviteStore: r,
                    spaceStore: a
                } = e, {
                    invitedEmailToUserIdMap: n
                } = r.state, o = [], l = [];
                for (let e of r.state.invitedUsers) {
                    if (!e.isGuest) continue;
                    let r = await u(t, e, n);
                    if (r) {
                        var d;
                        let t = null == (d = (0, i().dp)(a, r)) ? void 0 : d.getMembershipType();
                        if (t && (0, s().MN)(t)) continue;
                        o.push({
                            type: "existingUser",
                            value: {
                                id: r,
                                email: e.email,
                                version: 1
                            }
                        })
                    } else l.push(e.email)
                }
                return {
                    inviteTargets: o,
                    unknownEmails: l
                }
            }
            async function c(e, t, r) {
                let i = t.id;
                if (i || (i = r[t.email]), !i) {
                    let r = await e.api.callApi({
                        eventName: "findUser",
                        environment: e,
                        data: {
                            email: t.email
                        }
                    });
                    if ("failed" !== r.type) {
                        let e = r.data;
                        e.value && (i = e.value.value.id)
                    }
                }
                return i
            }
            async function u(e, t, i) {
                let s = await c(e, t, i);
                if (s) return s;
                let a = (0, r(599412).H)(r(962299).A.getIntl()),
                    n = await e.api.callApi({
                        eventName: "createEmailUser",
                        environment: e,
                        data: {
                            email: t.email,
                            preferredLocaleOrigin: "inferred_from_inviter",
                            preferredLocale: a
                        }
                    });
                if ("failed" !== n.type) return n.data.userId
            }

            function p(e, t) {
                return (0, r(890142).l)(e.flatMap(e => e.email || []))
            }

            function m(e, t) {
                var i;
                let {
                    state: s
                } = t, a = null == (i = (0, r(328765).S)()) ? void 0 : i.id, n = a ? (0, r(192159).AI)(r(54068).T.getData(e, {
                    spaceId: a
                })) : void 0, o = t.getGuestEmails();
                return {
                    invite_flow_id: s.flowId,
                    user_count: o.length,
                    user_emails: o,
                    invite_space_role_selection: s.selection,
                    is_bot: !1,
                    subscription_tier: n
                }
            }
        },
        431665: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var i = () => r(546605);
            class s extends i().Store {
                getInitialState() {
                    return {
                        count: 0,
                        exportedPageCount: 0
                    }
                }
            }
            let a = new s
        },
        447364: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => s,
                inviteMemberIcon: () => a
            }), r(296540);
            var i = r(474848);
            let s = {
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
                a = (0, r(104509).wt)("inviteMember", s, "default")
        },
        474438: (e, t, r) => {
            r.d(t, {
                Gr: () => a,
                WE: () => o,
                rC: () => n
            }), r(898992), r(581454), r(908872);
            var i = r(296540),
                s = r(474848);
            let a = 30;

            function n({
                columnRenderInfo: e,
                containerMarginTop: t
            }) {
                return {
                    container: {
                        marginTop: t ? ? 17,
                        tableLayout: "fixed",
                        borderCollapse: "collapse",
                        width: "100%",
                        minWidth: e.reduce((e, t) => e + g(t.widthData) + 24, 0)
                    },
                    tableHeaderRow: {},
                    paddingRowCell: {
                        height: 8
                    }
                }
            }

            function o({
                columnRenderInfo: e,
                sortState: t,
                onSortStateChanged: a,
                showRowBorders: n,
                hideHeaderRow: l,
                hideHeaderRowPadding: u,
                renderRowChild: p,
                rows: m,
                onRowClick: g,
                renderNoRowsComponent: f,
                styles: h,
                getStyleForRow: v,
                extendToFullScreen: x,
                multiselect: b,
                allowHorizontalScroll: w,
                setStickyHeaderColumn: _,
                maxHeight: I,
                setStickyHeaderRow: j,
                loadMoreMethod: A,
                maxRowHeight: M
            }) {
                let T = w ? _ ? ? !0 : void 0,
                    C = (0, r(960253).I)(() => ({
                        horizontalScrollContainer: {
                            position: "relative",
                            width: null != x && x.extendTableToFullWidthOffsetPx ? `calc(100% + ${null==x?void 0:x.extendTableToFullWidthOffsetPx}px)` : "100%",
                            display: "grid",
                            overflow: "auto"
                        },
                        scrollableContainer: {
                            maxHeight: I,
                            position: "relative",
                            display: "grid",
                            overflowX: "auto",
                            width: "100%"
                        },
                        table: T ? { ...h.container,
                            minWidth: "100%",
                            width: void 0
                        } : h.container
                    }), [h.container, T, I, null == x ? void 0 : x.extendTableToFullWidthOffsetPx]),
                    k = (0, i.useCallback)(e => {
                        var r;
                        let i = e.id === (null == t || null == (r = t.column) ? void 0 : r.id) && !(null != t && t.sortAscending);
                        a && a({
                            sortAscending: i,
                            column: e
                        })
                    }, [t, a]),
                    P = (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("table", {
                            style: C.table,
                            children: [l ? void 0 : (0, s.jsx)("thead", { ...{
                                    0: {},
                                    1: {
                                        className: "x7wzq59 x1vjfegm"
                                    }
                                }[0 | !!j],
                                children: (0, s.jsxs)("tr", {
                                    children: [e.map((e, r) => (0, s.jsx)(d, {
                                        index: r,
                                        column: e,
                                        sortState: t,
                                        handleSortableColumnClick: k,
                                        shouldShowSortIcon: 0 !== m.length,
                                        multiselect: b,
                                        setStickyHeaderColumn: T,
                                        setStickyHeaderRow: j,
                                        style: e.headerStyle
                                    }, `header_${e.id}`)), null != x && x.rightPaddingPx ? (0, s.jsx)(S, {
                                        width: null == x ? void 0 : x.rightPaddingPx,
                                        style: e[e.length - 1].rowStyle
                                    }) : null]
                                })
                            }), u ? void 0 : (0, s.jsx)("tbody", {
                                children: (0, s.jsxs)("tr", {
                                    children: [e.map(e => (0, s.jsx)("td", {
                                        style: h.paddingRowCell
                                    }, `padding_row_${e.id}`)), null != x && x.rightPaddingPx ? (0, s.jsx)("td", {
                                        style: h.paddingRowCell
                                    }) : null]
                                })
                            }), (0, s.jsx)("tbody", {
                                children: m.map(t => (0, s.jsx)(c, {
                                    columns: e,
                                    onRowClick: g,
                                    rowChild: null == p ? void 0 : p(t),
                                    showRowBorders: n,
                                    row: t,
                                    getStyleForRow: v,
                                    multiselect: b,
                                    setStickyHeaderColumn: T,
                                    rightPaddingPx: null == x ? void 0 : x.rightPaddingPx,
                                    maxRowHeight: M
                                }, `${t.id}_row`))
                            }), m.length > 0 && A && (!w || (null == A ? void 0 : A.type) !== "scroll") ? (0, s.jsx)("tfoot", {
                                children: (0, s.jsx)(y, {
                                    columnLength: e.length,
                                    loadMoreMethod: A,
                                    showRowBorders: n,
                                    rightPaddingPx: null == x ? void 0 : x.rightPaddingPx,
                                    style: e[e.length - 1].rowStyle
                                })
                            }) : null]
                        }), 0 === m.length ? f() : void 0]
                    });
                return w ? (0, s.jsxs)("div", {
                    style: C.horizontalScrollContainer,
                    children: [(0, s.jsxs)("div", {
                        style: C.scrollableContainer,
                        children: [P, I && (null == A ? void 0 : A.type) === "scroll" ? (0, s.jsx)(r(775070).A, {
                            loading: !1,
                            loadMoreOffsetThreshold: 100,
                            onLoadMore: A.onLoadMore
                        }) : void 0]
                    }), I || (null == A ? void 0 : A.type) !== "scroll" ? void 0 : (0, s.jsx)(r(775070).A, {
                        loading: !1,
                        loadMoreOffsetThreshold: 100,
                        onLoadMore: A.onLoadMore
                    })]
                }) : (0, s.jsx)("div", {
                    style: {
                        maxHeight: I,
                        overflowY: j && I ? "auto" : void 0,
                        overflowX: j && I ? "hidden" : void 0
                    },
                    children: P
                })
            }
            let l = {
                text: {
                    fontSize: r(699422).J.UISmall.desktop,
                    fontWeight: r(699422).Wy.regular,
                    color: r(632079).Tj.text.secondary,
                    ...r(699422).RC
                },
                sortButton: {
                    padding: 5,
                    margin: -5
                },
                sortIcon: {
                    color: r(632079).Tj.text.secondary,
                    fill: "currentColor"
                },
                tooltip: {
                    width: 380
                }
            };

            function d({
                column: e,
                index: t,
                sortState: a,
                handleSortableColumnClick: n,
                shouldShowSortIcon: o,
                multiselect: c,
                setStickyHeaderColumn: u,
                setStickyHeaderRow: p,
                style: m
            }) {
                let [h, v] = (0, i.useState)(!1), x = 0 === t, y = e.id === (null == a ? void 0 : a.column.id), b = (0, r(960253).I)(() => ({
                    th: {
                        boxShadow: `
					inset 0 1px 0 ${r(632079).Tj.border.primary},
					inset 0 -1px 0 ${r(632079).Tj.border.primary}
				`,
                        ...p && {
                            position: "sticky",
                            top: 0,
                            zIndex: 3,
                            background: r(632079).Tj.background.elevated
                        },
                        ...f(e),
                        ...u && x && {
                            position: "sticky",
                            zIndex: 4,
                            insetInlineStart: 0,
                            background: r(632079).Tj.background.elevated,
                            boxShadow: `
							inset calc(var(--direction, 1) * -1px) 0px 0px ${r(632079).Tj.border.primary},
							inset 0 1px 0 ${r(632079).Tj.border.primary},
							inset 0 -1px 0 ${r(632079).Tj.border.primary}
						`
                        },
                        height: 32,
                        ...m
                    },
                    innerDiv: {
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        minWidth: g(e.widthData),
                        maxWidth: e.widthData.maxWidth
                    },
                    multiselectCheckbox: {
                        color: r(632079).Tj.selectLightGray[300],
                        marginInlineEnd: 16,
                        opacity: null != c && c.header.isDisabled ? .5 : 1
                    },
                    tooltipIcon: {
                        marginInlineStart: 4,
                        color: h ? r(632079).Tj.icon.secondary : r(632079).Tj.icon.tertiary
                    }
                }), [e, c, u, p, m, x, h]), S = {
                    onMouseEnter: () => v(!0),
                    onMouseLeave: () => v(!1)
                }, w = e.headerInfoTooltip ? (0, s.jsxs)(r(4458).fI, {
                    alignItems: "center",
                    justifyContent: "flex-start",
                    children: [(0, s.jsx)("div", {
                        style: l.text,
                        children: e.headerTitle
                    }), (0, s.jsx)(r(51831).m, {
                        textWrap: !0,
                        style: l.tooltip,
                        delayThreshold: 0,
                        content: () => e.headerInfoTooltip,
                        children: e => (0, s.jsx)("div", { ...(0, r(63390).A)(e, S),
                            children: (0, s.jsx)(r(16275).I, {
                                icon: r(61107).infoCircleIcon,
                                size: "sm",
                                style: b.tooltipIcon
                            })
                        })
                    })]
                }) : (0, s.jsx)("div", {
                    style: l.text,
                    children: e.headerTitle
                }), _ = e.sortable ? (0, s.jsx)(r(51831).m, {
                    placement: "bottom",
                    disableTooltip: !e.shouldShowSortTooltip,
                    content: () => y ? (0, s.jsx)(r(109939).sA, {
                        id: "baseTable.hoverSortedHeaderCell",
                        defaultMessage: "Reverse sort order"
                    }) : (0, s.jsx)(r(109939).sA, {
                        id: "baseTable.hoverSortableHeaderCell",
                        defaultMessage: "Sort by this column"
                    }),
                    children: t => (0, s.jsx)(r(988022).p, {
                        size: "xs",
                        style: l.sortButton,
                        iconTrailing: (() => {
                            if (a && o && y) return {
                                icon: r(242912).arrowStraightDownSmallIcon,
                                size: "xxs",
                                style: { ...l.sortIcon,
                                    ...a.sortAscending && {
                                        transform: "rotate(180deg)"
                                    }
                                }
                            }
                        })(),
                        onClick: () => n(e),
                        ...t,
                        children: w
                    })
                }) : w, I = void 0 !== c && 0 === t ? (0, s.jsx)(r(349050).S, {
                    style: b.multiselectCheckbox,
                    disabled: c.header.isDisabled,
                    onClick: () => c.header.onClick(),
                    checked: c.header.isSelected,
                    size: 14,
                    tapArea: {
                        size: 30
                    }
                }) : null;
                return (0, s.jsx)("th", {
                    style: b.th,
                    children: (0, s.jsxs)("div", {
                        style: b.innerDiv,
                        children: [I, _]
                    })
                })
            }

            function c({
                row: e,
                columns: t,
                onRowClick: a,
                rowChild: n,
                showRowBorders: o,
                getStyleForRow: l,
                setStickyHeaderColumn: d,
                multiselect: m,
                rightPaddingPx: g,
                maxRowHeight: f
            }) {
                let [h, v] = (0, i.useState)(!1), x = e.isClickable, y = (0, i.useCallback)(() => v(!0), []), b = (0, i.useCallback)(() => v(!1), []), S = (0, i.useCallback)(t => {
                    x && void 0 !== a && p(t, () => a(e))
                }, [x, a, e]), w = (0, r(960253).I)(() => ({
                    row: {
                        height: 1,
                        ...x && {
                            cursor: "pointer"
                        },
                        ...o && {
                            borderBottom: `1px solid ${r(632079).Tj.border.primary}`
                        },
                        ...l && l(e)
                    }
                }), [x, o, l, e]);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("tr", {
                        onMouseLeave: b,
                        onMouseEnter: y,
                        style: w.row,
                        onClick: S,
                        children: [t.map((r, i) => (0, s.jsx)(u, {
                            isRowHovered: h,
                            isRowClickable: x,
                            columnIndex: i,
                            numColumns: t.length,
                            data: e,
                            column: r,
                            multiselect: m,
                            setStickyHeaderColumn: d,
                            cellStyle: r.rowStyle,
                            maxRowHeight: f
                        }, `cell_${e.id}_${r.id}`)), g ? (0, s.jsx)(_, {
                            style: t[t.length - 1].rowStyle
                        }) : null]
                    }), n ? (0, s.jsx)("tr", {
                        style: w.row,
                        children: (0, s.jsx)("td", {
                            colSpan: t.length,
                            children: n
                        })
                    }) : void 0]
                })
            }

            function u({
                data: e,
                column: t,
                columnIndex: i,
                numColumns: a,
                isRowHovered: n,
                isRowClickable: o,
                multiselect: l,
                setStickyHeaderColumn: d,
                cellStyle: c,
                maxRowHeight: m
            }) {
                let h = 0 === i,
                    v = i === a - 1,
                    x = (0, r(960253).e)(),
                    y = (0, r(960253).I)(() => ({
                        td: { ...f(t),
                            height: "inherit",
                            ...h && {
                                borderStartStartRadius: 4,
                                borderEndStartRadius: 4
                            },
                            ...v && {
                                borderStartEndRadius: 4,
                                borderEndEndRadius: 4
                            },
                            ...d && h && {
                                position: "sticky",
                                zIndex: 2,
                                insetInlineStart: 0,
                                background: r(632079).Tj.background.elevated,
                                boxShadow: `inset calc(var(--direction, 1) * -1px) 0px 0px ${r(632079).Tj.border.primary}`
                            },
                            ...c,
                            ...n && o && {
                                background: "light" === x ? "#f8f8f7" : r(632079).Tj.palette.gray[30]
                            }
                        },
                        innerDiv: {
                            minWidth: g(t.widthData),
                            maxWidth: t.widthData.maxWidth,
                            fontSize: r(699422).J.UIRegular.desktop,
                            color: r(632079).Tj.text.primary,
                            minHeight: 42,
                            maxHeight: m || 52,
                            display: "flex",
                            alignItems: "center",
                            height: "100%"
                        },
                        multiselectCheckbox: {
                            color: r(632079).Tj.selectLightGray[300],
                            marginInlineEnd: 16,
                            opacity: null != l && l.row.getDisabledState(e) ? .5 : 1
                        }
                    }), [t, h, v, n, o, l, e, d, c, m, x]),
                    b = !!t.hasClickableContents || !!t.computeClickableContents && t.computeClickableContents(e),
                    S = l && h ? (0, s.jsx)(r(349050).S, {
                        style: y.multiselectCheckbox,
                        checked: l.row.getSelectedState(e),
                        onClick: t => {
                            t.stopPropagation(), l.row.onClick(e)
                        },
                        disabled: l.row.getDisabledState(e),
                        size: 14,
                        tapArea: {
                            size: 30
                        }
                    }) : null;
                return (0, s.jsx)("td", {
                    style: y.td,
                    children: (0, s.jsxs)("div", {
                        style: y.innerDiv,
                        onClick: b ? p : void 0,
                        children: [S, t.renderCell({ ...e,
                            isRowHovered: n
                        })]
                    })
                })
            }

            function p(e, t) {
                (0, r(705660).SQ)(e, r(705660).y$.Click, t)
            }
            let m = {
                paddingInlineStart: 12,
                paddingInlineEnd: 12
            };

            function g(e) {
                return "minWidth" in e ? e.minWidth : e.width
            }

            function f(e) {
                let t;
                return t = "width" in e.widthData ? {
                    width: e.widthData.width
                } : {
                    width: `${e.widthData.widthPercent}%`,
                    minWidth: e.widthData.minWidth
                }, { ...m,
                    ...t
                }
            }
            let h = {
                keTefX: "xdwrcjd",
                k71WvV: "xbelrpt",
                $$css: !0
            };

            function v({
                columnLength: e,
                onLoadMore: t,
                showRowBorders: i,
                hasNextPage: a
            }) {
                let n = (0, r(960253).I)(() => ({
                    row: { ...i && {
                            borderBottom: `1px solid ${r(632079).Tj.border.primary}`
                        }
                    },
                    button: {
                        display: "flex",
                        alignItems: "center",
                        height: 30,
                        borderRadius: 6 * !i,
                        whiteSpace: "break-spaces",
                        fontSize: 14,
                        paddingInlineEnd: 8
                    }
                }), [i]);
                return !1 === a ? null : (0, s.jsx)("tr", {
                    style: n.row,
                    children: (0, s.jsx)("td", {
                        colSpan: e,
                        children: (0, s.jsx)(r(4458).fI, {
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 4,
                            children: (0, s.jsx)("div", { ...{
                                    className: "x7wzq59 x1o0tod x78zum5 x1nhvcw1 x6s0dn4 x1r0jzty x17zd0t2"
                                },
                                children: (0, s.jsxs)(r(64960).Ay, {
                                    style: n.button,
                                    onClick: t,
                                    children: [(0, s.jsx)(r(16275).I, {
                                        icon: r(309087).arrowStraightDownFillSmallIcon,
                                        size: "sm",
                                        colorVariant: "tertiary",
                                        style: h
                                    }), (0, s.jsx)("div", { ...{
                                            className: "x167d0v7"
                                        },
                                        children: (0, s.jsx)(r(109939).sA, {
                                            id: "baseTable.loadMoreButton",
                                            defaultMessage: "Load more"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }

            function x({
                columnLength: e,
                onLoadNext: t,
                onLoadPrevious: i,
                currentPage: a,
                finalPage: n,
                hasNextPage: o,
                hasPrevPage: l,
                showRowBorders: d,
                rightPaddingPx: c,
                style: u
            }) {
                let p = (0, r(960253).I)(() => ({
                    row: { ...d && {
                            borderBottom: `1px solid ${r(632079).Tj.border.primary}`
                        }
                    },
                    button: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 30,
                        width: 30,
                        borderRadius: 6 * !d,
                        whiteSpace: "break-spaces",
                        fontSize: 14,
                        paddingInlineStart: 4,
                        paddingInlineEnd: 6
                    }
                }), [d]);
                return (0, s.jsxs)("tr", {
                    style: p.row,
                    children: [(0, s.jsx)("td", {
                        colSpan: c ? e : e - 1,
                        children: (0, s.jsx)(r(4458).fI, {
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 4,
                            children: (0, s.jsxs)("div", { ...{
                                    className: "x7wzq59 x1o0tod x78zum5 x1nhvcw1 x6s0dn4 x1r0jzty x17zd0t2"
                                },
                                children: [(0, s.jsx)(r(64960).Ay, {
                                    ariaLabel: l ? "Previous page" : "No previous pages",
                                    style: p.button,
                                    onClick: i,
                                    disabled: !l,
                                    disabledFeedback: !l,
                                    children: (0, s.jsx)(r(16275).I, {
                                        icon: r(414243).v,
                                        size: "sm",
                                        colorVariant: "secondary"
                                    })
                                }), (0, s.jsx)(r(64960).Ay, {
                                    ariaLabel: o ? "Next page" : "No more pages",
                                    style: p.button,
                                    onClick: t,
                                    disabled: !o,
                                    disabledFeedback: !o,
                                    children: (0, s.jsx)(r(16275).I, {
                                        icon: r(588222).arrowChevronSingleRightFillSmallIcon,
                                        size: "sm",
                                        colorVariant: "secondary"
                                    })
                                }), (0, s.jsx)(r(111010).D, {
                                    styleKey: "captionMedium",
                                    colorVariant: "secondary",
                                    children: n ? (0, s.jsx)(r(109939).sA, {
                                        id: "baseTable.pages.currentPageWithFinalPageCount",
                                        defaultMessage: "Page {currentPage} of {finalPage}",
                                        values: {
                                            currentPage: a,
                                            finalPage: n
                                        }
                                    }) : (0, s.jsx)(r(109939).sA, {
                                        id: "baseTable.pages.currentPage",
                                        defaultMessage: "Page {currentPage}",
                                        values: {
                                            currentPage: a
                                        }
                                    })
                                })]
                            })
                        })
                    }), c ? (0, s.jsx)(_, {
                        style: u
                    }) : null]
                })
            }

            function y({
                columnLength: e,
                loadMoreMethod: t,
                showRowBorders: i,
                rightPaddingPx: a,
                style: n
            }) {
                switch (t.type) {
                    case "scroll":
                        return (0, s.jsx)(r(775070).A, {
                            loading: !1,
                            loadMoreOffsetThreshold: 100,
                            onLoadMore: t.onLoadMore
                        });
                    case "button":
                        return (0, s.jsx)(v, {
                            columnLength: e,
                            onLoadMore: t.onLoadMore,
                            showRowBorders: i,
                            hasNextPage: t.hasNextPage
                        });
                    case "pages":
                        return (0, s.jsx)(x, {
                            columnLength: e,
                            showRowBorders: i,
                            onLoadNext: t.onLoadNext,
                            onLoadPrevious: t.onLoadPrevious,
                            currentPage: t.currentPage,
                            finalPage: t.finalPage,
                            hasNextPage: t.hasNextPage,
                            hasPrevPage: t.hasPrevPage,
                            rightPaddingPx: a,
                            style: n
                        });
                    default:
                        return (0, r(722371).HB)(t)
                }
            }
            let b = {
                kC7eKd: "xu8wnyf",
                kVAEAm: "x10l6tqk",
                k87sOh: "x13vifvy",
                kLqNvP: "x1o0tod",
                kt4wiu: "xtijo5x",
                krVfgx: "xqmqy1e",
                $$css: !0
            };

            function S(e) {
                let t = (0, r(960253).I)(() => ({
                    extender: {
                        width: e.width,
                        height: 1
                    }
                }), [e.width]);
                return (0, s.jsxs)("th", { ...{
                        className: "x1n2onr6"
                    },
                    children: [(0, s.jsx)("div", {
                        style: t.extender
                    }), (0, s.jsx)("div", { ...r(952687).A.props(b, e.style)
                    })]
                })
            }
            let w = {
                kC7eKd: "xu8wnyf",
                kVAEAm: "x10l6tqk",
                k87sOh: "x13vifvy",
                kLqNvP: "x1o0tod",
                kt4wiu: "xtijo5x",
                krVfgx: "xqmqy1e",
                $$css: !0
            };

            function _(e) {
                return (0, s.jsx)("td", { ...{
                        className: "x1n2onr6"
                    },
                    children: (0, s.jsx)("div", { ...r(952687).A.props(w, e.style)
                    })
                })
            }
        },
        596400: (e, t, r) => {
            r.d(t, {
                G: () => s
            }), r(944114), r(898992), r(672577), r(581454), r(296540);
            var i = r(474848);

            function s({
                id: e,
                title: t,
                byline: a,
                badge: n,
                buttonVariant: o = "outline",
                isDisabled: l,
                currentOption: d,
                options: c,
                onSelectOption: u,
                optionsFooter: p,
                isLocked: m,
                tooltip: g
            }) {
                var f;
                let h = (0, r(817588).B)(),
                    v = (0, r(817588).B)(),
                    x = null == (f = c.find(({
                        key: e
                    }) => e === d)) ? void 0 : f.label,
                    y = (0, i.jsx)(r(127322).A, {
                        buttonVariant: o,
                        buttonProps: r(986939).A.isMobile ? {
                            size: "xl"
                        } : void 0,
                        disabled: l || m,
                        selectedTitle: x,
                        menuWidth: 250,
                        menuMaxHeight: 400,
                        menuTitle: t,
                        menuShowDone: !0,
                        renderMenuSections: e => {
                            let t = [{
                                key: "settings-dropdown-item-section",
                                items: c.map(({
                                    key: t,
                                    label: s,
                                    caption: a
                                }) => ({
                                    key: t,
                                    action: () => {
                                        u(t), e.close()
                                    },
                                    render: e => (0, i.jsx)(r(95582).A, { ...e,
                                        title: s,
                                        caption: a,
                                        shouldWrapCaption: !0,
                                        isChecked: t === d
                                    })
                                }))
                            }];
                            return p && t.push({
                                key: "settings-dropdown-footer-section",
                                render: e => (0, i.jsx)(r(844565).A, { ...e,
                                    topBorder: !0
                                }),
                                items: [{
                                    key: "footer",
                                    action: () => {},
                                    render: () => p
                                }]
                            }), t
                        }
                    }),
                    b = (0, i.jsx)(r(51831).m, {
                        placement: "top",
                        alignment: "center",
                        disableTooltip: !g,
                        content: () => g,
                        children: e => (0, i.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            ...e,
                            children: [m ? (0, i.jsx)(r(16275).I, {
                                icon: r(269298).lockFillIcon,
                                colorVariant: "secondary"
                            }) : void 0, y]
                        })
                    });
                return (0, i.jsx)(r(321412).b, {
                    id: e,
                    title: t,
                    titleId: h,
                    byline: a,
                    bylineId: v,
                    badge: n,
                    item: b
                })
            }
        },
        643070: (e, t, r) => {
            r.d(t, {
                h: () => i
            });

            function i() {
                return r(986939).A.isAdminMode
            }
        },
        724175: (e, t, r) => {
            r.d(t, {
                x: () => i
            });

            function i() {
                return (0, r(881016).d)()
            }
        },
        775070: (e, t, r) => {
            r.d(t, {
                A: () => s
            }), r(296540);
            var i = r(474848);
            let s = function({
                loading: e,
                onLoadMore: t,
                loadMoreOffsetThreshold: s,
                resultSize: a,
                fetchSize: n
            }) {
                return (0, i.jsx)(r(636255).A, {
                    onChange: r => (function(e) {
                        let {
                            offset: t,
                            loading: r,
                            onLoadMore: i,
                            loadMoreOffsetThreshold: s,
                            resultSize: a,
                            fetchSize: n
                        } = e;
                        r || t > (s || 200) || (void 0 === a || void 0 === n || a >= n) && i()
                    })({
                        offset: r,
                        loading: e,
                        onLoadMore: t,
                        loadMoreOffsetThreshold: s,
                        resultSize: a,
                        fetchSize: n
                    })
                })
            }
        },
        795526: (e, t, r) => {
            r.d(t, {
                n: () => i
            });

            function i(e, t) {
                return t === (0, r(216260).AI)()
            }
        },
        800668: (e, t, r) => {
            r.d(t, {
                A: () => a
            }), r(296540);
            var i = r(474848);
            let s = {
                recentlyReaddedBadge: {
                    background: r(632079).Tj.blue.background.secondary,
                    marginInlineStart: 0,
                    maxWidth: "max-content"
                },
                recentlyReaddedText: {
                    color: r(632079).Tj.blue.text.primary,
                    fontSize: r(699422).J.UISmall.desktop,
                    fontStyle: "normal",
                    fontWeight: r(699422).Wy.regular,
                    lineHeight: "15px"
                },
                tooltipFirstLine: {
                    color: r(632079).Tj.text.inversePrimary,
                    fontWeight: r(699422).Wy.semibold
                },
                tooltipSecondLine: {
                    color: r(632079).Tj.text.inverseSecondary
                }
            };

            function a({
                spaceStore: e,
                restorationStatus: t,
                didAttemptRecovery: o
            }) {
                return (0, i.jsx)(r(51831).m, {
                    placement: "bottom",
                    content: () => (0, i.jsx)(n, {
                        spaceStore: e,
                        restorationStatus: t,
                        didAttemptRecovery: o
                    }),
                    children: e => (0, i.jsx)("div", { ...e,
                        children: (0, i.jsx)(r(746434).E, {
                            content: (0, i.jsx)(r(324489).V, {
                                style: s.recentlyReaddedText,
                                children: (0, i.jsx)(r(109939).sA, {
                                    id: "userCell.recentlyReadded.label",
                                    defaultMessage: "Recently re-added"
                                })
                            }),
                            style: s.recentlyReaddedBadge
                        })
                    })
                })
            }

            function n({
                spaceStore: e,
                restorationStatus: t,
                didAttemptRecovery: a
            }) {
                let {
                    displayName: o,
                    displayTime: l
                } = function({
                    spaceStore: e,
                    restorationStatus: t
                }) {
                    let i = "restored" === t.status ? {
                            table: t.restoredByTable,
                            id: t.restoredById,
                            spaceId: e.id
                        } : void 0,
                        s = i ? (0, r(935786).JQ)({
                            parentStore: e,
                            pointer: i
                        }) : void 0,
                        a = (0, r(109939).tz)();
                    return {
                        displayName: (0, r(682985).K8)(() => null == s ? void 0 : s.getDisplayName(a), [s, a]),
                        displayTime: "restored" === t.status ? (0, r(850640).W_)(t.restoredTime, "medium_with_time", r(849917).locale) : void 0
                    }
                }({
                    spaceStore: e,
                    restorationStatus: t
                });
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        style: s.tooltipFirstLine,
                        children: (0, i.jsx)(r(109939).sA, {
                            id: "userCell.recentlyReaddedTooltip.label",
                            defaultMessage: "Member was removed and re-added within the last 30 days"
                        })
                    }), a ? (0, i.jsx)("div", {
                        style: s.tooltipSecondLine,
                        children: (0, i.jsx)(r(109939).sA, {
                            id: "userCell.recentlyReaddedTooltip.inProgress.description",
                            defaultMessage: "Restoration of access is in progress",
                            values: {
                                displayName: o,
                                displayTime: l
                            }
                        })
                    }) : void 0, !a && o && l ? (0, i.jsx)("div", {
                        style: s.tooltipSecondLine,
                        children: (0, i.jsx)(r(109939).sA, {
                            id: "userCell.recentlyReaddedTooltip.description",
                            defaultMessage: "{displayName} restored their access on {displayTime}",
                            values: {
                                displayName: o,
                                displayTime: l
                            }
                        })
                    }) : void 0]
                })
            }
        },
        843688: (e, t, r) => {
            r.d(t, {
                z: () => s
            }), r(944114), r(898992), r(354520), r(581454);
            var i = () => r(355095);
            class s extends i().o {
                _allUsers;
                _filteredAndSortedUsers = [];
                _currentPage = 0;
                _limit;
                _query;
                constructor(e) {
                    const {
                        users: t,
                        initialMembershipFilter: r,
                        initialSort: i,
                        initialQuery: s,
                        limit: a
                    } = e;
                    super([]), this._allUsers = [...t], this._limit = a ? ? 20, this._query = void 0, this.filter = r, this.sort = i, this._query = s, this._updateFilteredAndSortedUsers(), this.refresh()
                }
                _updateFilteredAndSortedUsers() {
                    let e = this._applyMembershipFilter(this._allUsers);
                    this._query && (e = this._applySearch(e)), this.sort && (e = this._applySort(e)), this._filteredAndSortedUsers = e
                }
                _applyMembershipFilter(e) {
                    return this.filter ? e.filter(e => {
                        var t;
                        return e.membership_type && (null == (t = this.filter) ? void 0 : t.includes(e.membership_type))
                    }) : e
                }
                _applySearch(e) {
                    return this._query && 0 !== this._query.length ? (0, r(821048).Ay)(this._query, e, e => {
                        let t = [e.name, e.email];
                        return e.aliases && e.aliases.length > 0 && t.push(...e.aliases), t.filter(Boolean).join(" ")
                    }, {
                        minScore: r(821048).XR
                    }) : e
                }
                _applySort(e) {
                    if (!this.sort) return e;
                    let {
                        field: t,
                        direction: r
                    } = this.sort, i = "asc" === r ? 1 : -1, s = e.map(e => {
                        let r, i;
                        switch (t) {
                            case "name_normalized":
                                r = this._normalizeName(e.name) || e.email.toLowerCase();
                                break;
                            case "type":
                                r = this._getMembershipTypeRank(e.membership_type), i = this._normalizeName(e.name) || e.email.toLowerCase();
                                break;
                            case "first_joined":
                                r = e.first_joined_space_time || 0;
                                break;
                            default:
                                r = null
                        }
                        return {
                            user: e,
                            sortValue: r,
                            secondarySortValue: i
                        }
                    });
                    return s.sort((e, r) => {
                        if (null === e.sortValue && null === r.sortValue);
                        else if (null === e.sortValue) return Number(i);
                        else if (null === r.sortValue) return -1 * i;
                        else if (e.sortValue < r.sortValue) return -1 * i;
                        else if (e.sortValue > r.sortValue) return Number(i);
                        if ("type" === t && e.secondarySortValue && r.secondarySortValue) {
                            if (e.secondarySortValue < r.secondarySortValue) return -1;
                            if (e.secondarySortValue > r.secondarySortValue) return 1
                        }
                        return (e.user.id < r.user.id ? -1 : 1) * i
                    }), s.map(e => e.user)
                }
                _normalizeName(e) {
                    return null == e ? void 0 : e.normalize("NFKD").toLowerCase().replace(/\p{Diacritic}/gu, "")
                }
                _getMembershipTypeRank(e) {
                    switch (e) {
                        case "owner":
                            return 6;
                        case "membership_admin":
                            return 5;
                        case "member":
                            return 4;
                        case "restricted_member":
                            return 3;
                        case "page_guest":
                            return 2;
                        case "none":
                            return 1;
                        default:
                            return 0
                    }
                }
                async setUsers(e) {
                    this._allUsers = [...e], this._updateFilteredAndSortedUsers(), await this.refresh()
                }
                async setFilter(e) {
                    this.filter !== e && (this._currentPage = 0, this.filter = e, this._updateFilteredAndSortedUsers(), await this.refresh())
                }
                async setSort(e) {
                    var t, r;
                    ((null == (t = this.sort) ? void 0 : t.field) !== (null == e ? void 0 : e.field) || (null == (r = this.sort) ? void 0 : r.direction) !== (null == e ? void 0 : e.direction)) && (this._currentPage = 0, this.sort = e, this._updateFilteredAndSortedUsers(), await this.refresh())
                }
                async setQuery(e) {
                    this._query !== e && (this._query = e, this._currentPage = 0, this._updateFilteredAndSortedUsers(), await this.refresh())
                }
                async fetch() {
                    let e = this._currentPage * this._limit,
                        t = e + this._limit;
                    return Promise.resolve({
                        rows: this._filteredAndSortedUsers.slice(e, t),
                        hasMore: t < this._filteredAndSortedUsers.length
                    })
                }
                async loadMore() {
                    this.isFetching || (this._currentPage++, await super.loadMore())
                }
                async refresh() {
                    this._currentPage = 0, await super.refresh()
                }
                TEST_ONLY_setLimit(e) {
                    this._limit = e
                }
            }
        },
        856863: (e, t, r) => {
            r.d(t, {
                j: () => a
            });
            var i = () => r(546605);
            class s extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                open(e) {
                    this.setState({
                        open: !0,
                        ...e
                    })
                }
            }
            let a = new s
        },
        929447: (e, t, r) => {
            r.d(t, {
                Oo: () => l,
                KW: () => d,
                hQ: () => v,
                Ah: () => g,
                St: () => p,
                Pp: () => f,
                kW: () => c,
                iS: () => u,
                lf: () => h,
                D6: () => m,
                l5: () => o
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(803949), r(581454), r(737550);
            var i = () => r(722371),
                s = () => r(378880);
            async function a(e) {
                let {
                    environment: t,
                    inviteTargets: r,
                    inviteRole: a
                } = e, n = [], o = [];
                for (let e of r) {
                    let r;
                    if ("newUser" === e.type) {
                        let i = await (0, s().J)(t, e);
                        r = {
                            entity_type: "user",
                            type: a,
                            user_id: i
                        }, n.push(i)
                    } else "existingUser" === e.type ? (r = {
                        entity_type: "user",
                        type: a,
                        user_id: e.value.id
                    }, ("page_guest" === e.membershipType || "none" === e.membershipType) && n.push(e.value.id)) : "group" === e.type ? r = {
                        entity_type: "group",
                        type: "owner" === a ? "owner" : "member",
                        group_id: e.value.group_id
                    } : (0, i().HB)(e);
                    o.push(r)
                }
                return {
                    teamMemberInfos: o,
                    invitedMemberIds: n
                }
            }
            async function n(e) {
                let {
                    environment: t,
                    teamStore: i,
                    inviteTargets: s,
                    inviteRole: n,
                    createNewTeamFlowId: o
                } = e;
                if (0 === s.length) return !0;
                let l = i.getSpaceId();
                if (!l) return !1;
                let {
                    teamMemberInfos: d,
                    invitedMemberIds: c
                } = await a({
                    environment: t,
                    inviteTargets: s,
                    inviteRole: n
                }), u = await (0, r(123026).Z)({
                    environment: t,
                    teamMemberInfos: d,
                    teamStore: i,
                    isSettingDefaultTeam: !1,
                    createNewTeamFlowId: o
                });
                return u && (r(287621).KX(t, {
                    invite_origin: "team_invite_overlay",
                    domainType: (0, r(904434).FX)(),
                    new_workspace_member_count: c.length,
                    new_workspace_member_ids: c
                }), await r(371151).nO({
                    environment: t,
                    spaceStore: {
                        id: l
                    }
                })), u
            }
            async function o(e) {
                let {
                    environment: t,
                    targetStore: i,
                    sudoModeStore: s,
                    permissionsInviteStore: a,
                    onInviteStart: o,
                    contextualInviteStore: l,
                    inviteOrigin: d
                } = e, {
                    tokenQuery: c
                } = a.state;
                if ((0, r(801109).DT)(c.trim())) {
                    let e = {
                        type: "newUser",
                        value: {
                            email: c.trim()
                        },
                        source: "email"
                    };
                    r(494341).mQ({
                        target: e,
                        permissionsInviteStore: a
                    }) || a.setState({ ...a.state,
                        inviteTargets: [...a.state.inviteTargets, e],
                        tokenQuery: ""
                    })
                }
                if (0 === a.state.inviteTargets.length) return {
                    success: !0,
                    requestedUserCount: 0
                };
                null == o || o();
                let u = a.state,
                    {
                        table: p,
                        inviteRole: m,
                        flowId: g,
                        emailMessage: f
                    } = u;
                a.reset();
                let h = {
                        inviteFlowId: g,
                        inviteMessage: f,
                        inviteOrigin: d
                    },
                    v = [];
                for (let e of u.inviteTargets) "agent" !== e.type && v.push(e);
                if ("team" === p && (0, r(966980).$R)(i)) {
                    let e = (0, r(862085).Nr)(i, v);
                    return {
                        success: await n({
                            environment: t,
                            teamStore: i,
                            inviteTargets: e,
                            inviteRole: m,
                            createNewTeamFlowId: g
                        }),
                        requestedUserCount: 0
                    }
                }
                if ("space" === p && (0, r(966980).Yu)(i)) {
                    let e = await (0, r(862085).Mz)(i, u.inviteTargets),
                        s = await (0, r(487998).F)({
                            environment: t,
                            spaceStore: i,
                            inviteTargets: e,
                            membershipType: m,
                            isOnboarding: !1,
                            invite: h
                        });
                    return {
                        success: s.success,
                        requestedUserCount: s.success ? Object.keys(s.requestedUsers).length : 0
                    }
                }
                if (!(0, r(966980).Yu)(i) && !(0, r(966980).$R)(i) && (0, r(642157).PW)(m)) {
                    let e = (0, r(862085).Nr)(i, v),
                        a = await (0, r(179349).e)({
                            environment: t,
                            store: i,
                            sudoModeStore: s,
                            inviteTargets: e,
                            inviteRole: m,
                            isOnboarding: !1,
                            invite: h
                        });
                    return a.success && (null == l || l.setState({ ...null == l ? void 0 : l.state,
                        invitedEmailToUserIdMap: a.invitedUsers
                    })), {
                        success: a.success,
                        requestedUserCount: a.success ? Object.keys(a.requestedUsers).length : 0
                    }
                }
                return {
                    success: !0,
                    requestedUserCount: 0
                }
            }

            function l(e) {
                e.permissionsInviteStore.setState({ ...e.permissionsInviteStore.state,
                    modalOpen: !1,
                    flowId: void 0
                })
            }

            function d(e) {
                let {
                    permissionsInviteStore: t,
                    contextualInviteStore: r
                } = e;
                if (!r) return;
                let i = [];
                t.state.inviteTargets.forEach(e => {
                    if ("newUser" === e.type) i.push({
                        email: e.value.email,
                        isGuest: !0
                    });
                    else if ("existingUser" === e.type) {
                        let t = { ...e.value,
                            email: e.value.email,
                            isGuest: "page_guest" === e.membershipType || "none" === e.membershipType
                        };
                        i.push(t)
                    }
                }), r.setState({ ...r.state,
                    invitedUsers: i
                })
            }
            async function c(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    targetStore: s,
                    sudoModeStore: a,
                    permissionsInviteStore: n,
                    contextualInviteStore: l,
                    onInviteClick: c,
                    onInviteComplete: u,
                    inviteOrigin: p,
                    intl: m
                } = e;
                if (s.getSpaceId() !== i.getSpaceId()) {
                    null == u || u(!1, 0);
                    return
                }
                if ((null == l ? void 0 : l.state.selection) === r(758972).NJ.workspace_member && (0, r(128729).p)(i) && !i.isTeamsEnabled()) {
                    if (!await r(821969).oH({
                            environment: t,
                            flowId: n.state.flowId || "",
                            trackCreateTeamComplete: !1
                        })) return;
                    d({
                        permissionsInviteStore: n,
                        contextualInviteStore: l
                    }), await (0, r(425493).Lg)({
                        environment: t,
                        spaceStore: i,
                        contextualInviteStore: l,
                        from: p,
                        intl: m
                    })
                } else d({
                    permissionsInviteStore: n,
                    contextualInviteStore: l
                });
                let g = {
                    success: !1,
                    requestedUserCount: 0
                };
                try {
                    g = await o({
                        environment: t,
                        targetStore: s,
                        sudoModeStore: a,
                        permissionsInviteStore: n,
                        contextualInviteStore: l,
                        onInviteStart: () => {
                            null == c || c()
                        },
                        inviteOrigin: p
                    })
                } catch (e) {} finally {
                    null == u || u(g.success, g.requestedUserCount)
                }
            }
            async function u(e) {
                let {
                    environment: t,
                    permissionsInviteStore: i,
                    from: s,
                    onClose: a,
                    store: n
                } = e;
                await r(494341).iQ({
                    environment: t,
                    permissionsInviteStoreState: i.state,
                    from: s,
                    spaceStore: (0, r(966980).Yu)(n) ? n : (0, r(974410).f)(n)
                }) || (i.reset(), null == a || a())
            }

            function p(e) {
                let {
                    permissionsInviteStore: t,
                    targetToRemove: r
                } = e, i = t.state.inviteTargets.filter(e => e !== r);
                t.setState({ ...t.state,
                    inviteTargets: i
                })
            }

            function m(e) {
                let {
                    environment: t,
                    onUpgradeButtonClick: i,
                    upgradeButtonName: s,
                    spaceStore: a
                } = e;
                r(907063).K(t, {
                    from: s,
                    upsell: {
                        type: "product",
                        product: "plus",
                        limit: {
                            type: "none"
                        },
                        trialability: "none"
                    },
                    spaceStore: a
                }), null == i || i()
            }
            async function g(e, t) {
                let r = Array.from(new Set(t)).map(async t => {
                    let r = await e.api.callApi({
                        eventName: "findUser",
                        environment: e,
                        data: {
                            email: t
                        }
                    });
                    if ("success" === r.type) {
                        let e = r.data;
                        if (e.value) return {
                            type: "existingUser",
                            value: e.value.value
                        }
                    }
                    return {
                        type: "newUser",
                        value: {
                            email: t
                        },
                        source: "email"
                    }
                });
                return await Promise.all(r)
            }
            async function f(e) {
                let {
                    environment: t,
                    permissionsInviteStore: i,
                    event: s
                } = e, a = s.target.value, {
                    extractedEmails: n,
                    newInputValue: o
                } = (0, r(801109).Ct)(a), l = (await g(t, n)).filter(e => !r(494341).mQ({
                    target: e,
                    permissionsInviteStore: i
                })), d = [...i.state.inviteTargets, ...l];
                i.setState({ ...i.state,
                    inviteTargets: d,
                    inputFocus: "invitee",
                    tokenQuery: o
                })
            }

            function h(e) {
                let {
                    environment: t,
                    newRole: i,
                    permissionsInviteStore: s,
                    spaceStore: a
                } = e, {
                    state: n
                } = s;
                r(179701).Jy({ ...r(494341).oX(t, n, a),
                    invite_updated_role: r(494341).Y5(i)
                }), s.setState({ ...n,
                    inviteRole: i
                })
            }
            async function v(e) {
                var t, s;
                let a, {
                        query: n,
                        environment: o,
                        sectionLimit: l,
                        intl: d,
                        membersOnly: c,
                        importContactType: u,
                        pageContext: p
                    } = e,
                    m = (0, r(888).$)(p) ? ? (0, r(328765).S)();
                if (!m) return {
                    inviteUsers: [],
                    inviteGroups: []
                };
                let g = r(218744).default.getConfigKey("search_contacts_timeout", "timeoutMs"),
                    {
                        userLimit: f,
                        groupLimit: h,
                        importContactLimit: v
                    } = l,
                    x = await r(308825).T.searchActions.load(),
                    [y, b, {
                        user: S,
                        email: w
                    }, _] = await Promise.all([f > 0 ? x.searchSpaceUsers({
                        environment: o,
                        query: n,
                        membersOnly: c,
                        limit: f
                    }) : [], h > 0 ? x.searchSpaceGroups({
                        query: n,
                        intl: d
                    }) : [], x.searchEmailUser(o, n), v > 0 ? (0, r(975162).nQ)(g, o.api.callApi({
                        eventName: "searchContacts",
                        environment: o,
                        data: {
                            spaceId: m.id,
                            limit: v,
                            query: n,
                            importContactType: u || "all",
                            includeNonNotionUsers: !c,
                            includeUserId: !0
                        }
                    })) : void 0]),
                    I = y.slice(0, f).map(e => ({
                        type: "existingUser",
                        value: e
                    })),
                    j = b.slice(0, h).map(e => ({
                        type: "group",
                        value: e
                    }));
                S && I.unshift({
                    type: "existingUser",
                    value: S
                }), w && I.unshift({
                    type: "newUser",
                    value: {
                        email: w
                    },
                    source: "email"
                });
                let A = 0,
                    M = [];
                (null == _ || null == (t = _.result) ? void 0 : t.type) === "success" && (M = _.result.data.contacts.map(e => ({
                    type: "newUser",
                    value: {
                        email: e.email,
                        name: e.name,
                        avatar_url: e.profile_photo,
                        user_id: e.user_id
                    },
                    source: e.type
                })), A = (null == _ || null == (s = _.result) || null == (s = s.data) ? void 0 : s.totalCount) ? ? 0);
                let T = l.agentLimit ? ? 0;
                if (T > 0) {
                    let [{
                        getCustomAgents: e
                    }, {
                        searchWorkflowStores: t
                    }, {
                        getBotIdFromStore: s
                    }, {
                        isWorkflowDataDatabaseAgent: l
                    }, {
                        AppStoreCurrentUserStore: d
                    }] = await Promise.all([r.e(48578).then(r.bind(r, 419218)), r.e(88980).then(r.bind(r, 587832)), Promise.all([r.e(40994), r.e(85464)]).then(r.bind(r, 646440)), r.e(40994).then(r.bind(r, 445568)), Promise.resolve().then(r.bind(r, 728372))]), c = d.state;
                    if (c) {
                        let {
                            workflowStores: r
                        } = await e({
                            environment: o,
                            spaceStore: m,
                            userStore: c
                        });
                        a = t({
                            query: n,
                            workflowStores: r,
                            limit: T
                        }).map(e => (function(e, t) {
                            var r;
                            if (!e.canEdit() || !1 === e.getAlive()) return;
                            let i = t.getBotIdFromStore(e);
                            if (!i) return;
                            let s = e.getData();
                            if (!t.isWorkflowDataDatabaseAgent(s) && null != s && null != (r = s.modules) && r.some(e => "notion" === e.type)) return {
                                type: "agent",
                                value: {
                                    workflowId: e.id,
                                    workflowStore: e,
                                    botId: i,
                                    name: e.getName() ? ? ""
                                }
                            }
                        })(e, {
                            getBotIdFromStore: s,
                            isWorkflowDataDatabaseAgent: l
                        })).filter(i().O9)
                    }
                }
                return {
                    inviteUsers: r(381453).hS(I, e => e.value.email),
                    inviteGroups: j,
                    inviteAgents: a,
                    importedContacts: M,
                    totalContactsCount: A
                }
            }
        },
        939588: (e, t, r) => {
            r.d(t, {
                v: () => i
            });

            function i(e) {
                var t;
                let i;
                return t = ["personal", "student", "personal_free"], !((i = (0, r(216260).AI)()) && t.includes(i))
            }
        },
        958220: (e, t, r) => {
            r.d(t, {
                Dd: () => K,
                z_: () => G,
                _3: () => H,
                SP: () => et,
                Je: () => ei,
                Nj: () => es,
                Lw: () => ea,
                uU: () => X,
                UP: () => U,
                QF: () => er,
                M0: () => J,
                AO: () => eo,
                P_: () => R,
                xi: () => z,
                aC: () => ee,
                X: () => en,
                Sg: () => F,
                id: () => Y,
                li: () => V,
                Co: () => L,
                Ss: () => N
            }), r(944114), r(898992), r(354520), r(430670), r(581454), r(296540);
            var i = () => r(962299),
                s = () => r(647095),
                a = () => r(13717),
                n = () => r(729052),
                o = () => r(975162);
            let l = (0, r(477465).Dv)("exportAdminContentSearch"),
                d = (0, r(477465).Dv)("exportAITopPagesAnalytics"),
                c = (0, r(477465).Dv)("exportAIUserAnalytics"),
                u = (0, r(477465).Dv)("exportAIWorkflowsAnalytics"),
                p = (0, r(477465).Dv)("exportAuditLog"),
                m = (0, r(477465).Dv)("exportContentAnalytics");
            (0, r(477465).Dv)("exportDomainClaimableSpaces");
            let g = (0, r(477465).Dv)("exportDomainClaimableSpacesForOrganization"),
                f = (0, r(477465).Dv)("exportLegalHoldContentSummary"),
                h = (0, r(477465).Dv)("exportSpace"),
                v = (0, r(477465).Dv)("exportUserAnalytics"),
                x = (0, r(477465).Dv)("partitionedExportBlock"),
                y = (0, r(477465).Dv)("partitionedExportBlockLongRunning");
            var b = () => r(262058),
                S = r(474848);
            let w = {
                    messageStyle: {
                        fontSize: 14,
                        color: r(632079).Tj.text.secondary,
                        textAlign: "center"
                    }
                },
                _ = function({
                    exportProgressStore: e
                }) {
                    return (0, S.jsxs)("div", {
                        style: w.messageStyle,
                        children: [(0, S.jsx)(r(4458).fI, {
                            marginTop: 24,
                            marginBottom: 24,
                            justifyContent: "center",
                            children: (0, S.jsx)(r(517334).k, {})
                        }), (0, S.jsx)(j, {
                            exportProgressStore: e
                        }), (0, S.jsx)(I, {
                            exportProgressStore: e
                        })]
                    })
                };

            function I({
                exportProgressStore: e
            }) {
                return (0, r(682985).K8)(() => e.state.targetEmailAddress, [e]) ? (0, S.jsx)("p", {
                    children: (0, S.jsx)(r(109939).sA, {
                        id: "exportProgressDialog.emailMessage",
                        defaultMessage: "We’ll also send you an email with the download link."
                    })
                }) : null
            }

            function j({
                exportProgressStore: e
            }) {
                let t = (0, r(682985).K8)(() => e.state.pagesExported, [e]),
                    i = (0, r(682985).K8)(() => e.state.filesExported, [e]);
                return i > 0 ? (0, S.jsx)("p", {
                    children: (0, S.jsx)(r(109939).sA, {
                        id: "exportProgressDialog.exportedFilesMessage",
                        defaultMessage: "{filesExported, plural, one {{filesExported} file exported} other {{filesExported} files exported}}",
                        values: {
                            filesExported: i
                        }
                    })
                }) : t > 0 ? (0, S.jsx)("p", {
                    children: (0, S.jsx)(r(109939).sA, {
                        id: "exportProgressDialog.exportedPagesMessage",
                        defaultMessage: "{pagesExported, plural, one {{pagesExported} page exported} other {{pagesExported} pages exported}}",
                        values: {
                            pagesExported: t
                        }
                    })
                }) : (0, S.jsx)("p", {
                    children: (0, S.jsx)(r(109939).sA, {
                        id: "exportProgressDialog.exportStartedMessage",
                        defaultMessage: "Exporting…"
                    })
                })
            }
            var A = () => r(546605);
            class M extends A().Store {
                getInitialState() {
                    return {
                        pagesExported: 0,
                        filesExported: 0
                    }
                }
            }
            var T = () => r(222365);

            function C(e, t) {
                (0, r(104310).u)({
                    event: {
                        eventName: "export",
                        eventProperties: t
                    }
                })
            }

            function k(e, t) {
                (0, r(104310).u)({
                    event: {
                        eventName: "export_failed",
                        eventProperties: t
                    }
                })
            }
            let P = (0, r(109939).YK)({
                exporting: {
                    id: "exportActions.exporting.loadingMessage",
                    defaultMessage: "Exporting"
                },
                exportAuditLogEmail: {
                    id: "exportActions.auditLog.exporting.EmailMessage",
                    defaultMessage: "Your CSV export is currently being generated. The generated CSV has a 2-hour delay from the real time audit log. Once it is ready, an email will be sent to you with the download link."
                },
                exportCSVEmail: {
                    id: "exportActions.exportingCSV.EmailMessage",
                    defaultMessage: "Your CSV export is currently being generated. Once it is ready, an email will be sent to you with the download link."
                },
                exportFailed: {
                    id: "exportActions.exportFailedError.message",
                    defaultMessage: "Export failed."
                },
                workspaceOwnerMessage: {
                    defaultMessage: "Workspace owner",
                    id: "export.userPermissionsRole.workspaceOwner.message"
                },
                membershipAdminMessage: {
                    defaultMessage: "Membership admin",
                    id: "export.userPermissionsRole.membershipAdmin.message"
                },
                memberMessage: {
                    defaultMessage: "Member",
                    id: "export.userPermissionsRole.member.message"
                },
                restrictedMemberMessage: {
                    defaultMessage: "Restricted member",
                    id: "export.userPermissionsRole.restrictedMember.message"
                },
                guestMessage: {
                    defaultMessage: "Guest",
                    id: "export.userPermissionsRole.guest.message"
                },
                idMessage: {
                    defaultMessage: "ID",
                    id: "export.csvHeader.id"
                },
                emailMessage: {
                    defaultMessage: "Email",
                    id: "export.csvHeader.email"
                },
                nameMessage: {
                    defaultMessage: "Name",
                    id: "export.csvHeader.name"
                },
                roleMessage: {
                    defaultMessage: "Role",
                    id: "export.csvHeader.role"
                },
                permissionGroupsMessage: {
                    defaultMessage: "Permission groups",
                    id: "export.csvHeader.permissionGroups"
                },
                pagesMessage: {
                    defaultMessage: "Pages",
                    id: "export.csvHeader.pages"
                },
                partitionedExportSpaceMessage: {
                    defaultMessage: "Export is still in progress due to file size. We will send you an email about its progress.",
                    id: "export.partitionedExportSpace.message"
                },
                partitionedExportBlockMessage: {
                    defaultMessage: "Export is still in progress due to file size. We will send you an email with a download link once it completes.",
                    id: "export.partitionedExportBlock.message"
                },
                privatePageMessage: {
                    defaultMessage: "Private page",
                    id: "export.privatePageTitle.message"
                },
                pageTitleAndIdMessage: {
                    defaultMessage: "{pageTitle} ({pageId})",
                    id: "export.pageTitleAndId.message"
                },
                pageSeparatorMessage: {
                    defaultMessage: ", ",
                    id: "export.pageSeparator.message"
                }
            });
            async function U(e, t) {
                if (!B({
                        environment: e,
                        ...t
                    })) return void k(e, {
                    target: "block",
                    format: t.exportOptions.exportType,
                    recursive: t.recursive
                });
                let i = r(728372).AppStoreCurrentUserStore.state;
                if (!i) return void k(e, {
                    target: "block",
                    format: t.exportOptions.exportType,
                    recursive: t.recursive
                });
                let s = i.getEmail();
                if (!s) return void k(e, {
                    target: "block",
                    format: t.exportOptions.exportType,
                    recursive: t.recursive
                });
                C(e, {
                    target: "block",
                    format: t.exportOptions.exportType,
                    recursive: t.recursive,
                    page_id: t.block.id
                }), "currentView" === t.exportOptions.collectionViewExportType && (t.exportOptions.preferredViewMap = D(i.id));
                let a = r(218744).default.checkGate({
                        gateName: "partitioned_export_block_long_running"
                    }) ? y : x,
                    n = { ...t,
                        eventName: a,
                        rootTaskId: r(92513).JW()
                    },
                    o = (0, r(259242).UT)({
                        environment: e,
                        eventName: a,
                        request: n,
                        multiCellRouting: {
                            spaceIds: [t.block.spaceId]
                        }
                    });
                await E(e, o, t.recursive, s, P.partitionedExportBlockMessage, t.block.spaceId)
            }
            async function R(e, t, i, s) {
                if (!B({
                        environment: e,
                        recursive: !0,
                        exportOptions: t.exportOptions,
                        isOrgConsole: void 0 !== i
                    })) return void k(e, {
                    target: "space",
                    format: t.exportOptions.exportType,
                    recursive: !0
                });
                let a = r(728372).AppStoreCurrentUserStore.state;
                if (!a) return void k(e, {
                    target: "space",
                    format: t.exportOptions.exportType,
                    recursive: !0
                });
                let n = a.getEmail();
                if (!n) return void k(e, {
                    target: "space",
                    format: t.exportOptions.exportType,
                    recursive: !0
                });
                C(e, {
                    target: "space",
                    format: t.exportOptions.exportType,
                    recursive: !0
                }), "currentView" === t.exportOptions.collectionViewExportType && (t.exportOptions.preferredViewMap = D(a.id));
                let o = (0, r(259242).UT)({
                    environment: e,
                    eventName: h,
                    request: t,
                    multiCellRouting: {
                        spaceIds: []
                    }
                });
                await E(e, o, !0, n, P.partitionedExportSpaceMessage, t.spaceId, s)
            }
            async function E(e, t, a, n, l, d, c) {
                let u, p = r(728372).AppStoreSidebarSpaceViewStore.state;
                if (!p && !c) return;
                let m = new M;
                m.setState({
                    pagesExported: 0,
                    filesExported: 0,
                    targetEmailAddress: n
                });
                let g = !1,
                    f = c ? ? [],
                    h = p ? (0, r(679321).r)(p) ? ? f : f,
                    v = null == h ? void 0 : h.filter(e => e.getSetting("disable_export")).flatMap(e => e.getName() || []);
                if (a) {
                    let t = v.length > 0 ? 6e3 : 1250;
                    u = (0, o().wR)(t), s().ui({
                        message: (0, S.jsx)(_, {
                            exportProgressStore: m,
                            disabledExportTeamNames: v
                        }),
                        showCancel: !1,
                        keepFocus: !0,
                        requiresUserAction: !0,
                        items: [{
                            label: (0, S.jsx)(r(109939).sA, {
                                id: "exportProgressDialog.closeButton.label",
                                defaultMessage: "Close"
                            }),
                            onAccept: () => {
                                en({
                                    environment: e,
                                    spaceId: d
                                }), g = !0
                            }
                        }]
                    })
                } else u = Promise.resolve(), b().m({
                    message: P.exporting
                });
                for await (let r of t) {
                    if (g) return;
                    if (r.error) {
                        b().V(), s().f1(i().A.formatMessage(P.exportFailed));
                        return
                    } {
                        let {
                            value: t
                        } = r;
                        if ("complete" === t.type || "partition" === t.type) {
                            await u, b().V(), "complete" === t.type ? (s().zw(), !g && t.exportURL && T().I5(e, t.exportURL)) : s().rG({
                                message: i().A.formatMessage(l)
                            });
                            return
                        }
                        "progress" === t.type ? m.setState({ ...m.state,
                            pagesExported: t.exportedCount
                        }) : "progressFiles" === t.type && m.setState({ ...m.state,
                            filesExported: t.exportedCount
                        })
                    }
                }
            }

            function D(e) {
                let t = {};
                return r(255482).K.scan((i, s) => {
                    if (i.includes(r(235029).Ie) && i.includes(e)) {
                        let e = i.split(r(235029).Ie)[1];
                        e && s && (t[e] = s)
                    }
                }), t
            }

            function N(e) {
                let {
                    root: t,
                    environment: i,
                    isCollectionViewExportTypeSupported: s
                } = e, a = i.currentUser.id, n = Q(a), o = n && n.exportType || "markdown", l = s ? "currentView" : void 0, d = "pdf" === o ? {
                    exportType: "pdf",
                    timeZone: (0, r(714350).P)(),
                    pdfFormat: Y(a),
                    locale: "en",
                    collectionViewExportType: l,
                    includeContents: "everything"
                } : {
                    exportType: o,
                    timeZone: (0, r(714350).P)(),
                    locale: "en",
                    collectionViewExportType: l,
                    includeContents: "everything"
                };
                G(i, {
                    open: !0,
                    root: t,
                    recursive: "space" === t.table,
                    exportOptions: d,
                    shouldExportComments: !1
                })
            }
            async function z(e, t) {
                let {
                    spaceStore: l,
                    intl: d
                } = t;
                await e.api.callApi({
                    eventName: "exportSpaceMembers",
                    environment: e,
                    data: {
                        spaceId: l.getSpaceId()
                    }
                });
                let c = r(218744).default.getConfigKey("email_alias_migration", "mode"),
                    u = await e.api.callApi({
                        eventName: "listUsers",
                        environment: e,
                        data: {
                            cursor: void 0,
                            membershipFilter: void 0,
                            limit: 2e4,
                            sort: "name_normalized",
                            sortDirection: "asc",
                            query: "",
                            spaceId: l.id,
                            includeAliasSearch: (0, r(485477).K)(c)
                        }
                    });
                if ("success" !== u.type) return void s().rG({
                    message: i().A.formatMessage(P.exportFailed)
                });
                let p = u.data.users.map(e => e.id),
                    m = [];
                for (let e of u.data.users) e.membership_type && !(0, n().$I)(e.membership_type) && m.push({
                    userId: e.id,
                    membershipType: e.membership_type
                });
                let g = await e.api.callCellCompatibleApi({
                        eventName: "getSpacePermissionGroupIdsContainingMembers",
                        environment: e,
                        data: {
                            spaceId: l.getSpaceId(),
                            userIds: p
                        },
                        cellNavigation: {
                            cellId: void 0,
                            spaceId: l.getSpaceId()
                        }
                    }),
                    f = {};
                if ("success" === g.type)
                    for (let [e, t] of Object.entries(g.data.userToGroupMap)) {
                        let r = (t || []).map(e => (0, a().E)({
                            spaceStore: l,
                            groupId: e
                        }));
                        await o().lX(r, 10, async e => {
                            await e.waitUntil(() => e.isReady())
                        }), f[e] = L(r.map(e => e.getName()))
                    }
                await F(l, m, f, d)
            }

            function L(e) {
                return r(381453).oE(e).sort().join(",")
            }
            async function F(e, t, i, s) {
                let a = r(381453).oE(await o().lX(t, 40, async t => {
                    let a = r(807825).L.createChildStore(e, {
                        table: r(832375).oo9,
                        id: t.userId
                    });
                    await a.waitUntil(() => a.isReady());
                    let n = a.getEmail(),
                        o = a.getFullName(s);
                    if (n || o) return [n || "", o || "", function(e, t) {
                        switch (t) {
                            case "owner":
                                return e.formatMessage(P.workspaceOwnerMessage);
                            case "membership_admin":
                                return e.formatMessage(P.membershipAdminMessage);
                            case "member":
                                return e.formatMessage(P.memberMessage);
                            case "restricted_member":
                                return e.formatMessage(P.restrictedMemberMessage);
                            case "page_guest":
                                return e.formatMessage(P.guestMessage);
                            case "none":
                                return "";
                            default:
                                return r(773352).log({
                                    level: "error",
                                    from: "exportActions",
                                    type: "roleNotFound",
                                    data: {
                                        miscDataToConvertToString: {
                                            role: t
                                        }
                                    }
                                }), ""
                        }
                    }(s, t.membershipType), i[t.userId] || "", a.id]
                }));
                O(q([
                    [P.emailMessage, P.nameMessage, P.roleMessage, P.permissionGroupsMessage, P.idMessage].map(e => s.formatMessage(e)), ...a
                ]), "members.csv")
            }

            function O(e, t) {
                let r = document.createElement("a");
                r.setAttribute("href", `data:text/csv;charset=utf-8,${encodeURIComponent(e)}`), r.setAttribute("download", t), r.style.display = "none", document.body.appendChild(r), r.click(), document.body.removeChild(r)
            }

            function q(e) {
                return e.map(e => e.map(e => ((e = e.replace(/"/g, '""')).search(/("|,|\n)/g) >= 0 && (e = `"${e}"`), e)).join(",")).join("\n")
            }
            async function V({
                spaceStore: e,
                intl: t,
                environment: a
            }) {
                if (!e.canAdmin()) return;
                let n = r(218744).default.getConfigKey("email_alias_migration", "mode"),
                    o = await a.api.callApi({
                        eventName: "listUsers",
                        environment: a,
                        data: {
                            cursor: void 0,
                            membershipFilter: "guests",
                            limit: 1e4,
                            sort: "name_normalized",
                            sortDirection: "asc",
                            query: "",
                            spaceId: e.id,
                            includeAliasSearch: (0, r(485477).K)(n)
                        }
                    });
                if ("success" !== o.type) return void s().rG({
                    message: i().A.formatMessage(P.exportFailed)
                });
                let l = o.data.users,
                    d = l.map(e => e.id),
                    c = await a.api.callCellCompatibleApi({
                        eventName: "getGuestPagesForUserIds",
                        environment: a,
                        data: {
                            spaceId: e.id,
                            guestUserIds: l.map(e => e.id),
                            includeRecordMap: !1
                        },
                        cellNavigation: {
                            cellId: void 0,
                            spaceId: e.id
                        }
                    });
                "success" !== c.type ? s().rG({
                    message: i().A.formatMessage(P.exportFailed)
                }) : W(a, {
                    intl: t,
                    spaceStore: e,
                    guestUserIds: d,
                    guestIdToPagesMap: c.data.guestIdToPages
                })
            }
            async function W(e, {
                guestUserIds: t,
                guestIdToPagesMap: i,
                intl: s,
                spaceStore: a
            }) {
                await e.api.callApi({
                    eventName: "exportSpaceGuests",
                    environment: e,
                    data: {
                        spaceId: a.getSpaceId()
                    }
                });
                let n = s.formatMessage(P.pageSeparatorMessage),
                    o = r(381453).oE(await Promise.all(t.map(async t => {
                        var o;
                        let l = r(807825).L.createChildStore(a, {
                            table: r(832375).oo9,
                            id: t
                        });
                        async function d(t) {
                            let i = r(970831).B.createChildStore(a.getPagesStore(), {
                                table: r(832375).evP,
                                id: t
                            });
                            if (await i.load(), i.isCollectionView()) {
                                let e = i.getCollectionStoreIfSingleSource();
                                e && await e.load()
                            } else if (i.getType() === r(955630).xd.alias) {
                                let e = i.getAliasTargetStore();
                                e && await e.load()
                            }
                            return (0, r(112293).Qe)({
                                store: i,
                                intl: s,
                                environment: e,
                                disableInsertedAnnotations: !1
                            }) ? ? s.formatMessage(P.privatePageMessage)
                        }
                        async function c(e) {
                            return s.formatMessage(P.pageTitleAndIdMessage, {
                                pageId: e,
                                pageTitle: await d(e)
                            })
                        }
                        let u = (null == (o = i[t]) ? void 0 : o.pageIds) ? ? [],
                            [, ...p] = await Promise.all([l.load(), ...u.map(e => c(e))]),
                            m = l.getEmail(),
                            g = l.getFullName(s);
                        if (m || g) return [m || "", g || "", p.join(n), l.id]
                    }))),
                    l = [
                        [P.emailMessage, P.nameMessage, P.pagesMessage, P.idMessage].map(e => s.formatMessage(e)), ...o
                    ];
                O(q(l), "guests.csv"), r(594311).Is({
                    line_count: l.length
                })
            }

            function B(e) {
                let t = "pdf" === e.exportOptions.exportType && e.recursive;
                return !!e.isOrgConsole || !t || K(e.environment)
            }

            function K(e) {
                return (0, r(795526).n)(e, "enterprise") || (0, r(795526).n)(e, "business") || (0, r(643070).h)()
            }

            function G(e, t) {
                let i = r(206567).Ay.state,
                    s = e.currentUser.id,
                    a = t;
                if (r(206567).xt(a) && !K(e))
                    if ("space" === a.root.table) {
                        let e = i.open && !r(206567).xt(i) ? i.exportOptions.exportType : "html";
                        a = { ...a,
                            exportOptions: { ...a.exportOptions,
                                exportType: e
                            }
                        }
                    } else a = { ...a,
                        recursive: !1
                    };
                if (!B({
                        environment: e,
                        ...a
                    })) throw new(r(101787)).Umn("Invalid export options", {
                    data: a
                });
                r(206567).Ay.setState(a),
                    function(e) {
                        let t = r(206567).Ay.state;
                        if (t.open) {
                            let i = { ...Q(e),
                                exportType: t.exportOptions.exportType
                            };
                            "pdf" === t.exportOptions.exportType && (i.pdfFormat = t.exportOptions.pdfFormat), r(255482).K.set({
                                userId: e,
                                key: $,
                                value: i
                            })
                        }
                    }(s)
            }

            function H() {
                r(206567).Ay.setState({
                    open: !1,
                    shouldExportComments: !1
                })
            }
            let $ = "ExportSettings";

            function Q(e) {
                return r(255482).K.get({
                    userId: e,
                    key: $
                })
            }

            function Y(e) {
                let t = Q(e);
                return t && t.pdfFormat || r(206567).N4()
            }
            async function X(e, t) {
                let a, n = r(728372).AppStoreCurrentUserStore.state,
                    {
                        targetPointer: o
                    } = t;
                if (!n) {
                    r(773352).log({
                        level: "error",
                        from: "exportActions",
                        type: "exportAuditLogCSV-currentUserStoreNotFound",
                        data: {
                            miscDataToConvertToString: {
                                targetPointer: o
                            }
                        }
                    }), s().rG({
                        message: i().A.formatMessage(P.exportFailed)
                    }), k(e, {
                        target: "auditLog",
                        format: "csv",
                        recursive: !1
                    });
                    return
                }
                if (!n.isDefined()) {
                    r(773352).log({
                        level: "error",
                        from: "exportActions",
                        type: "exportAuditLogCSV-currentUserValueNotFound",
                        data: {
                            miscDataToConvertToString: {
                                targetPointer: o
                            }
                        }
                    }), s().rG({
                        message: i().A.formatMessage(P.exportFailed)
                    }), k(e, {
                        target: "auditLog",
                        format: "csv",
                        recursive: !1
                    });
                    return
                }
                C(e, {
                    target: "auditLog",
                    format: "csv",
                    recursive: !1
                }), o.table === r(832375).NXh ? a = (0, r(259242).UT)({
                    environment: e,
                    eventName: p,
                    request: {
                        spaceId: o.id,
                        exportOptions: t.exportOptions
                    },
                    multiCellRouting: {
                        spaceIds: [o.id]
                    }
                }) : o.table === r(832375).y75 ? a = (0, r(259242).UT)({
                    environment: e,
                    eventName: p,
                    request: {
                        organizationId: o.id,
                        exportOptions: t.exportOptions
                    },
                    multiCellRouting: {
                        spaceIds: []
                    }
                }) : (0, r(722371).HB)(o), await Z(a, P.exportAuditLogEmail)
            }
            async function J(e) {
                let {
                    environment: t,
                    data: i
                } = e;
                C(t, {
                    target: "domainClaimableSpaces",
                    format: "csv",
                    recursive: !1
                });
                let s = (0, r(259242).UT)({
                    environment: t,
                    eventName: g,
                    request: i,
                    multiCellRouting: {
                        spaceIds: []
                    }
                });
                await Z(s, P.exportCSVEmail)
            }
            async function Z(e, t) {
                let a = await e.next();
                if (a.value.error) {
                    let e = (0, r(285482).A)(i().A.getIntl(), a.value.error);
                    s().f1(e)
                } else s().rG({
                    message: i().A.formatMessage(t)
                })
            }
            async function ee(e, t) {
                C(e, {
                    target: "userAnalytics",
                    format: "csv",
                    recursive: !1
                });
                let i = (0, r(259242).UT)({
                    environment: e,
                    eventName: v,
                    request: t,
                    multiCellRouting: {
                        spaceIds: [t.spaceId]
                    }
                });
                await Z(i, P.exportCSVEmail)
            }
            async function et(e, t) {
                C(e, {
                    target: "aiAnalyticsTopPages",
                    format: "csv",
                    recursive: !1
                });
                let i = (0, r(259242).UT)({
                    environment: e,
                    eventName: d,
                    request: t,
                    multiCellRouting: {
                        spaceIds: [t.spaceId]
                    }
                });
                await Z(i, P.exportCSVEmail)
            }
            async function er(e, t) {
                C(e, {
                    target: "contentAnalytics",
                    format: "csv",
                    recursive: !1
                });
                let i = (0, r(259242).UT)({
                    environment: e,
                    eventName: m,
                    request: t,
                    multiCellRouting: {
                        spaceIds: [t.spaceId]
                    }
                });
                await Z(i, P.exportCSVEmail)
            }
            async function ei(e, t) {
                C(e, {
                    target: "aiAnalyticsUsers",
                    format: "csv",
                    recursive: !1
                });
                let i = (0, r(259242).UT)({
                    environment: e,
                    eventName: c,
                    request: t,
                    multiCellRouting: {
                        spaceIds: [t.spaceId]
                    }
                });
                await Z(i, P.exportCSVEmail)
            }
            async function es(e, t) {
                C(e, {
                    target: "aiAnalyticsWorkflows",
                    format: "csv",
                    recursive: !1
                });
                let i = (0, r(259242).UT)({
                    environment: e,
                    eventName: u,
                    request: t,
                    multiCellRouting: {
                        spaceIds: [t.spaceId]
                    }
                });
                await Z(i, P.exportCSVEmail)
            }
            async function ea(e, t) {
                C(e, {
                    target: "adminContentSearchAnalytics",
                    format: "csv",
                    recursive: !1
                });
                let i = (0, r(259242).UT)({
                    environment: e,
                    eventName: l,
                    request: {
                        spaceId: t.spaceId,
                        organizationId: t.organizationId,
                        sort: {
                            field: "relevance",
                            direction: "desc"
                        },
                        query: t.filters.query,
                        audience: t.filters.audience,
                        lastEditedTime: (0, r(45508).ES)(t.filters.lastEditedTime),
                        createdTime: (0, r(45508).ES)(t.filters.createdTime),
                        createdBy: t.filters.createdBy,
                        sharedWith: t.filters.sharedWith,
                        teamspaceIds: t.filters.teamIds,
                        deletionStatuses: t.filters.pageStatus,
                        contentStatuses: t.filters.contentStatus
                    },
                    multiCellRouting: {
                        spaceIds: [t.spaceId]
                    }
                });
                await Z(i, P.exportCSVEmail)
            }
            async function en({
                environment: e,
                spaceId: t
            }) {
                if (!t) return;
                let i = await e.api.callApi({
                    eventName: "getActiveExportTasks",
                    environment: e,
                    data: {
                        spaceId: t
                    }
                });
                if ("success" === i.type) {
                    var s;
                    r(431665).A.setState({
                        count: i.data.length,
                        exportedPageCount: null == (s = i.data[0]) ? void 0 : s.exportedPageCount
                    })
                }
            }
            async function eo(e, t) {
                C(e, {
                    target: "legalHoldContentSummary",
                    format: "csv",
                    recursive: !1
                });
                let i = (0, r(259242).UT)({
                    environment: e,
                    eventName: f,
                    request: {
                        spaceId: t.spaceId,
                        legalHoldId: t.legalHoldId,
                        teamIds: t.teamIds,
                        userIds: t.userIds,
                        blockIds: t.blockIds,
                        query: t.query
                    },
                    multiCellRouting: {
                        spaceIds: [t.spaceId]
                    }
                });
                await Z(i, P.exportCSVEmail)
            }
        }
    }
]);