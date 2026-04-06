"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [23644, 43239, 44098], {
        28267: (e, t, n) => {
            n.d(t, {
                I: () => a
            });
            let i = {
                    AddAnotherAccountLoginModal: new(n(815048)).O2("AddAnotherAccountLoginModal", async () => await Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(35837), n.e(33503), n.e(18406), n.e(97615), n.e(3079), n.e(20488)]).then(n.bind(n, 272072)))
                },
                a = (0, n(815048)._h)(i.AddAnotherAccountLoginModal, e => e.default)
        },
        50171: (e, t, n) => {
            n.r(t), n.d(t, {
                exclamationMarkTriangleSmallIcon: () => r,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.49 1.87 13.01 11.75",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.9 5.281a.625.625 0 0 0-.625.625v2.5a.625.625 0 0 0 1.25 0v-2.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, i.jsx)("path", {
                            d: "M9.58 2.788c-.702-1.217-2.458-1.217-3.16 0l-4.677 8.1c-.702 1.216.176 2.737 1.58 2.737h9.354c1.405 0 2.283-1.52 1.58-2.738zm-2.078.625a.575.575 0 0 1 .996 0l4.677 8.1a.575.575 0 0 1-.498.862H3.324a.575.575 0 0 1-.498-.863z"
                        })]
                    })
                },
                r = (0, n(104509).wt)("exclamationMarkTriangleSmall", a, "small")
        },
        79268: (e, t, n) => {
            n.d(t, {
                C: () => a
            });
            var i = n(296540);

            function a({
                upsell: e,
                source: t,
                buttonDisplayType: r,
                onClickBeforeUpgradeAction: l,
                postUpgradeCallback: o,
                spaceStore: s
            }) {
                let d = (0, n(533992).v3)(),
                    u = (0, n(855021).q)(),
                    c = (0, n(226309)._3)({
                        spaceId: null == s ? void 0 : s.id
                    }),
                    p = (0, n(345776).T)(),
                    {
                        campaign: m,
                        loading: f
                    } = (0, n(435276).V)(t),
                    [y, g] = function(e) {
                        let {
                            upsell: t
                        } = e, a = (0, n(533992).v3)(), r = (0, n(972740).L)(), l = (0, n(993077).U2)(), o = null == r ? void 0 : r.id, s = (0, n(345776).T)(), d = (0, n(226309).lh)({
                            spaceId: o
                        }), u = (null == t ? void 0 : t.type) === "product" ? t.product : void 0, c = (0, n(682985).K8)(() => {
                            if (o) return n(477870).L.getData(a, {
                                spaceId: o
                            })
                        }, [a, o]), p = (0, n(682985).K8)(() => (0, n(966458).Jg)({
                            product: u,
                            userId: s,
                            billingData: d,
                            spaceStore: r,
                            spaceUserStore: l,
                            existingRequests: c
                        }), [u, s, d, r, l, c]), [m, f] = (0, i.useState)(p);
                        return (0, i.useEffect)(() => {
                            f(p)
                        }, [p]), [m, f]
                    }({
                        upsell: e ? ? {
                            type: "none"
                        }
                    }),
                    h = (0, n(682985).K8)(() => e ? (0, n(96495).a)({
                        environment: d,
                        upsell: e,
                        spaceStore: s,
                        salesStatus: u,
                        campaign: m,
                        requestState: y,
                        billingData: c,
                        source: t,
                        loading: f
                    }) : {
                        status: "not_eligible",
                        reason: "feature_not_upsellable"
                    }, [s, d, e, u, m, y, c, t, f]),
                    v = (0, i.useCallback)(async () => {
                        if (!e) return;
                        let i = "product" === e.type ? e.product : void 0,
                            a = (0, n(555676).x)();
                        if (!a) return;
                        let [, {
                            getUpgradeSystemAction: u
                        }] = await Promise.all([null == l ? void 0 : l(), a()]), f = u(h);
                        await f({
                            source: t,
                            spaceStore: s,
                            product: i,
                            billingData: c,
                            environment: d,
                            setRequestState: g,
                            userId: p,
                            buttonDisplayType: r,
                            postUpgradeCallback: o,
                            campaign: m,
                            isEligibleForAgentBusinessTrial: "ai_agent" === t && "product" === e.type && "preferred" === e.trialability
                        })
                    }, [e, l, h, t, s, c, d, g, p, r, o, m]);
                return {
                    upgradeEligibility: h,
                    handleClick: v
                }
            }
        },
        85071: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                integrationIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                a = (0, n(104509).wt)("integration", i, "default")
        },
        120011: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowChevronSingleRightIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "7.22 3.97 6.66 12.06",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M13.692 10.442a.625.625 0 0 0 0-.884l-5.4-5.4a.625.625 0 1 0-.884.884L12.366 10l-4.958 4.958a.625.625 0 0 0 .884.884z"
                    })
                },
                a = (0, n(104509).wt)("arrowChevronSingleRight", i, "default")
        },
        322095: (e, t, n) => {
            function i(e, t) {
                return e.map(e => a(e, t))
            }

            function a(e, t) {
                var i, a;
                let r, {
                        nameMessage: l,
                        descriptionMessage: o,
                        ...s
                    } = e,
                    {
                        rootId: d,
                        previewRootId: u,
                        spaceId: c
                    } = (i = e, a = t, r = (0, n(599412).H)(a), i.sources[r] || i.sources[n(599412).q]);
                return { ...s,
                    id: l.id,
                    rootId: d,
                    spaceId: c,
                    previewRootId: u,
                    name: t.formatMessage(l),
                    description: o ? t.formatMessage(o) : void 0
                }
            }
            n.d(t, {
                B: () => a,
                o: () => i
            }), n(581454)
        },
        391330: (e, t, n) => {
            n.d(t, {
                U: () => l
            });
            var i = () => n(546605);
            let a = {
                isOpen: !1,
                serviceRequest: null
            };
            class r extends i().Store {
                getInitialState() {
                    return { ...a
                    }
                }
                openModal(e) {
                    this.setState({ ...a,
                        isOpen: !0,
                        serviceRequest: e
                    })
                }
                closeModal() {
                    this.setState({ ...a
                    })
                }
            }
            let l = new r
        },
        425749: (e, t, n) => {
            n.d(t, {
                I$: () => l,
                R2: () => d,
                WF: () => s,
                bZ: () => o,
                cE: () => a,
                jX: () => r,
                rz: () => u
            });
            var i = () => n(381453);

            function a(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let r = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function l(e) {
                return !!(void 0 !== e && (0, n(722371).Xk)(r, e))
            }

            function o() {
                let e = (0, n(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: n(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, n(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function s(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let d = [{
                type: "everything"
            }];

            function u(e) {
                for (let t of d)
                    if (i().n4(e, t)) return !0;
                return !1
            }
        },
        435276: (e, t, n) => {
            n.d(t, {
                V: () => i
            });

            function i(e) {
                let t = (0, n(533992).v3)(),
                    i = (0, n(972740).L)(),
                    {
                        spaceId: a,
                        spaceName: r
                    } = (0, n(682985).K8)(() => i ? {
                        spaceId: i.getSpaceId(),
                        spaceName: (0, n(742197).G)(t, i)
                    } : {
                        spaceId: void 0,
                        spaceName: void 0
                    }, [t, i]),
                    [{
                        value: l,
                        status: o
                    }] = (0, n(97668).Yb)(async () => {
                        if (!a) return;
                        let i = await (0, n(124094).E)(t, a, e);
                        if (i) return r && (0, n(124094).Z)({
                            environment: t,
                            spaceName: r,
                            campaign: i,
                            entrypoint: e
                        }), i
                    }, [t, a, r, e]);
                return {
                    campaign: l,
                    loading: "pending" === o || "idle" === o
                }
            }
        },
        455205: (e, t, n) => {
            n.r(t), n.d(t, {
                FETCHABLE_TEAM_TYPES: () => l,
                fetchUnfetchedTeams: () => s,
                fetchUnfetchedTeamsFromLocalStorage: () => u,
                getActiveTeamsMetadataForUserInSpace: () => p,
                getAllTeamsMetadataForUserInSpace: () => m,
                getTeamMetadataFromStore: () => y,
                getTeamStore: () => f,
                refetchTeams: () => d
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520);
            var i = () => n(988752);
            async function a(e) {
                let {
                    actorUserId: t,
                    targetUserId: i,
                    spaceId: a,
                    teamTypes: r,
                    teamIds: l,
                    environment: o
                } = e;
                if (!(0, n(422280).GL)({
                        actorUserId: t,
                        targetUserId: i,
                        teamTypes: r
                    })) throw new(n(101787)).qQk("User does not have permission to fetch teams for another user.");
                let s = await o.api.callCellCompatibleApi({
                    eventName: "getTeamsV2",
                    environment: o,
                    data: {
                        spaceId: a,
                        teamTypes: Array.from(r),
                        teamIds: "all" === l ? void 0 : Array.from(l),
                        sort: e.sort,
                        canTruncateRecordMap: e.canTruncateRecordMap,
                        includeMembershipSummary: !(0, n(958692).X7)() && void 0,
                        targetUserId: i
                    },
                    userId: t,
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: a
                    }
                });
                if ("failed" === s.type) throw s.error;
                let {
                    teams: d,
                    hasUnjoinedActiveTeams: u
                } = s.data;
                return {
                    teams: d,
                    ...void 0 !== u && {
                        hasUnjoinedActiveTeams: u
                    }
                }
            }
            let r = new(n(245541)).R({
                    key: "localStorageTeams",
                    namespace: n(274919).Bq,
                    important: !1,
                    trackingType: "preference"
                }),
                l = ["Joined", "UnjoinedActive", "Archived"];
            async function o(e) {
                let {
                    userId: t,
                    spaceId: l,
                    teamTypesToUpdate: o,
                    teamIdsToUpdate: s,
                    environment: d,
                    canTruncateRecordMap: u,
                    sort: c
                } = e, p = i().E.getOrCreateUnit(t, l);
                if (0 === o.size || "all" !== s && 0 === s.size) return void await p.pendingUpdates;
                let m = a({
                    actorUserId: t,
                    targetUserId: t,
                    spaceId: l,
                    teamTypes: o,
                    teamIds: s,
                    environment: d,
                    canTruncateRecordMap: u,
                    sort: c
                });
                i().E.queueUpdateForSpaceUser({
                        userId: t,
                        spaceId: l,
                        fetchedTeamsPromise: m,
                        fetchedTeamsSource: "server",
                        teamTypesToUpdate: o,
                        teamIdsToUpdate: s
                    }), await p.pendingUpdates,
                    function(e) {
                        let {
                            userId: t,
                            spaceId: i,
                            teamsResponse: a
                        } = e;
                        if (!n(218744).default.checkGate({
                                gateName: "teams_local_storage_write"
                            })) return;
                        let {
                            teams: l
                        } = a, o = l.filter(e => "Joined" === e.type), s = l.filter(e => "UnjoinedActive" === e.type), d = l.filter(e => "Archived" === e.type), u = o.concat(s, d).slice(0, 1e3);
                        r.update(e => ({ ...e ? ? {},
                            [t] : { ...(null == e ? void 0 : e[t]) ? ? {},
                                [i] : { ...a,
                                    teams: u
                                }
                            }
                        }))
                    }({
                        userId: t,
                        spaceId: l,
                        teamsResponse: {
                            teams: Object.values(p.teams),
                            hasUnjoinedActiveTeams: p.hasUnjoinedActiveTeams
                        }
                    })
            }
            async function s(e) {
                let {
                    userId: t,
                    spaceId: n,
                    teamTypes: a,
                    environment: r,
                    canTruncateRecordMap: l,
                    sort: s
                } = e, d = i().E.getOrCreateUnit(t, n), u = new Set(Array.from(a.values()).filter(e => "server" !== d.lastFetchSourceOfTeamType[e]));
                await o({
                    userId: t,
                    spaceId: n,
                    teamTypesToUpdate: u,
                    teamIdsToUpdate: "all",
                    environment: r,
                    canTruncateRecordMap: l,
                    sort: s
                })
            }
            async function d(e) {
                let {
                    userId: t,
                    spaceId: n,
                    teamIds: a,
                    environment: r
                } = e, s = i().E.getOrCreateUnit(t, n), d = new Set(l.filter(e => "server" === s.lastFetchSourceOfTeamType[e]));
                await o({
                    userId: t,
                    spaceId: n,
                    teamTypesToUpdate: d,
                    teamIdsToUpdate: a,
                    environment: r
                })
            }

            function u() {
                let e = r.getState();
                for (let t in e)
                    for (let n in e[t]) {
                        let a = i().E.getOrCreateUnit(t, n),
                            r = new Set(l.filter(e => "none" === a.lastFetchSourceOfTeamType[e]));
                        0 !== r.size && i().E.queueUpdateForSpaceUser({
                            userId: t,
                            spaceId: n,
                            fetchedTeamsPromise: Promise.resolve(e[t][n]),
                            fetchedTeamsSource: "local",
                            teamTypesToUpdate: r,
                            teamIdsToUpdate: "all"
                        })
                    }
            }
            async function c(e) {
                let {
                    userId: t,
                    spaceStore: n,
                    teamTypes: a,
                    environment: r
                } = e;
                return await s({
                    userId: t,
                    spaceId: n.id,
                    teamTypes: a,
                    environment: r
                }), i().E.readTeams(t, n.id, a).teams
            }
            async function p(e) {
                let {
                    userId: t,
                    spaceStore: n,
                    environment: i
                } = e;
                return await c({
                    userId: t,
                    spaceStore: n,
                    teamTypes: new Set(["Joined", "UnjoinedActive"]),
                    environment: i
                })
            }
            async function m(e) {
                let {
                    userId: t,
                    spaceStore: n,
                    environment: i
                } = e;
                return await c({
                    userId: t,
                    spaceStore: n,
                    teamTypes: new Set(["Joined", "UnjoinedActive", "Archived"]),
                    environment: i
                })
            }

            function f(e) {
                let {
                    teamId: t,
                    spaceStore: i
                } = e;
                return n(681735).h.createChildStore(i, {
                    table: n(832375).yKj,
                    id: t
                })
            }

            function y(e) {
                var t;
                let {
                    teamStore: a,
                    userId: r,
                    spaceStore: l
                } = e, o = i().E.readMembershipCount({
                    userId: r,
                    spaceId: l.id,
                    teamId: a.id
                }), s = a.getArchivedBy() ? "Archived" : (0, n(220530).f)({
                    userId: r,
                    teamStore: a,
                    userPermissionGroups: n(68809).f.getSpacePermissionGroupIds({
                        spaceId: l.id
                    })
                }) ? "Joined" : "UnjoinedActive", d = (0, n(228091).a)({
                    teamStore: a,
                    userId: r,
                    userPermissionGroups: n(68809).f.getSpacePermissionGroupIds({
                        spaceId: l.id
                    })
                }) ? ? "none";
                return {
                    id: a.id,
                    title: a.getName() ? ? "",
                    icon: null == (t = a.getIcon()) ? void 0 : t.icon,
                    type: s,
                    membershipSummary: o,
                    lastEditedTime: 0 === a.getLastEditedTime() ? void 0 : a.getLastEditedTime(),
                    securitySettings: {
                        disablePublicAccess: a.getDisablePublicAccess(),
                        disableGuests: a.getDisableGuests(),
                        disableExport: a.getDisableExport()
                    },
                    teamRole: d,
                    isDefaultTeam: a.isDefault(),
                    accessLevel: a.getTeamAccessLevel(),
                    description: a.getDescription()
                }
            }
        },
        489561: (e, t, n) => {
            n.d(t, {
                CA: () => l
            }), n(16280), n(898992), n(354520), n(581454);
            let i = Symbol("JSON Schema"),
                a = Symbol("JSON Schema Components"),
                r = Symbol("No JSON Schema"),
                l = (0, n(722371).MU)((0, n(722371).WP)({
                    isNull: () => ({
                        type: "null",
                        [a]: {}
                    }),
                    boolean: () => ({
                        type: "boolean",
                        [a]: {}
                    }),
                    number: () => ({
                        type: "number",
                        [a]: {}
                    }),
                    integer: () => ({
                        type: "integer",
                        [a]: {}
                    }),
                    string: () => ({
                        type: "string",
                        [a]: {}
                    }),
                    matchesRegExp: e => ({
                        type: "string",
                        pattern: e.source,
                        [a]: {}
                    }),
                    dateString: () => ({
                        type: "string",
                        format: "date",
                        [a]: {}
                    }),
                    dateTimeString: () => ({
                        type: "string",
                        format: "date-time",
                        [a]: {}
                    }),
                    literal: e => {
                        let t = {
                            const: e,
                            [a]: {}
                        };
                        return "boolean" == typeof e ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof e ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    literals: (...e) => {
                        let t = {
                                enum: e,
                                [a]: {}
                            },
                            n = e[0];
                        return "boolean" == typeof n ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof n ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    uuid: () => ({
                        type: "string",
                        format: "uuid",
                        [a]: {}
                    }),
                    binary: () => ({
                        type: "string",
                        format: "binary",
                        [a]: {}
                    }),
                    uuidWithoutDashes: () => ({
                        type: "string",
                        format: "uuid",
                        [a]: {}
                    }),
                    array: e => ({
                        type: "array",
                        items: e[i],
                        [a]: e[i][a]
                    }),
                    tuple: e => ({
                        type: "tuple",
                        items: !1,
                        prefixItems: e.map(e => e[i]).filter(e => e !== r),
                        [a]: Object.assign({}, ...e.map(e => e[i][a]))
                    }),
                    record: (e, t) => ({
                        type: "object",
                        additionalProperties: t[i],
                        [a]: t[i][a]
                    }),
                    object: ({
                        required: e,
                        optional: t,
                        exact: l
                    }) => ({
                        type: "object",
                        properties: (0, n(722371).MU)(Object.entries({ ...e,
                            ...t
                        }).filter(([e, t]) => t[i] !== r).map(([e, t]) => [e, t[i]])),
                        ...l && {
                            additionalProperties: !1
                        },
                        ...Object.keys(e).length > 0 && {
                            required: Object.keys(e)
                        },
                        [a]: Object.assign({}, ...Object.values({ ...e,
                            ...t
                        }).map(e => e[i][a]))
                    }),
                    union: e => {
                        let t = (0, n(381453).hS)(e.map(e => e[i]).filter(e => e !== r), e => JSON.stringify(e)),
                            l = (0, n(381453).hS)(e.map(e => e[i][a]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [a]: Object.assign({}, ...l)
                        } : {
                            anyOf: t,
                            [a]: Object.assign({}, ...l)
                        }
                    },
                    intersection: e => {
                        let t = (0, n(381453).hS)(e.map(e => e[i]).filter(e => e !== r), e => JSON.stringify(e)),
                            l = (0, n(381453).hS)(e.map(e => e[i][a]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [a]: Object.assign({}, ...l)
                        } : {
                            allOf: t,
                            [a]: Object.assign({}, ...l)
                        }
                    },
                    gte: (e, t) => {
                        let n = e[i];
                        return n !== r ? { ...n,
                            minimum: t
                        } : n
                    },
                    gt: (e, t) => {
                        let n = e[i];
                        return n !== r ? { ...n,
                            exclusiveMinimum: t
                        } : n
                    },
                    lte: (e, t) => {
                        let n = e[i];
                        return n !== r ? { ...n,
                            maximum: t
                        } : n
                    },
                    lt: (e, t) => {
                        let n = e[i];
                        return n !== r ? { ...n,
                            exclusiveMaximum: t
                        } : n
                    },
                    maxLength: (e, t) => {
                        let n = e[i];
                        if (n === r) return n;
                        if ("type" in n) {
                            if ("string" === n.type) return { ...n,
                                maxLength: t
                            };
                            else if ("array" === n.type) return { ...n,
                                maxItems: t
                            }
                        }
                        throw Error("Unknown type for max length.")
                    },
                    minLength: (e, t) => {
                        let n = e[i];
                        if (n === r) return n;
                        if ("type" in n) {
                            if ("string" === n.type) return { ...n,
                                minLength: t
                            };
                            else if ("array" === n.type) return { ...n,
                                minItems: t
                            }
                        }
                        throw Error("Unknown type for min length.")
                    },
                    nonEmpty: e => {
                        let t = e[i];
                        if (t === r) return t;
                        if ("type" in t) {
                            if ("string" === t.type) return { ...t,
                                minLength: 1
                            };
                            else if ("object" === t.type) return { ...t,
                                minProperties: 1
                            };
                            else if ("array" === t.type) return { ...t,
                                minItems: 1
                            }
                        }
                        throw Error("Unknown non-emptyable type.")
                    },
                    nullable: e => {
                        let t = e[i];
                        if (t === r) return t;
                        if ("const" in t) return { ...t,
                            const: void 0,
                            enum: [t.const, null]
                        };
                        if ("type" in t)
                            if (Array.isArray(t.type))
                                if ("null" === t.type[1]) return t;
                                else(0, n(722371).HB)(t.type[1]);
                        else {
                            if ("string" === t.type || "object" === t.type || "array" === t.type || "tuple" === t.type || "boolean" === t.type || "integer" === t.type || "number" === t.type) return { ...t,
                                type: [t.type, "null"]
                            };
                            if ("null" === t.type) return t;
                            (0, n(722371).HB)(t.type)
                        } else if ("enum" in t) {
                            let e = t.enum;
                            return { ...t,
                                enum: Array.isArray(e) ? [...e, null] : [null]
                            }
                        } else {
                            var l;
                            if ("anyOf" in t) return { ...t,
                                anyOf: [...t.anyOf, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("oneOf" in t) return { ...t,
                                oneOf: [...t.oneOf, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("allOf" in t) return { ...t,
                                oneOf: [{
                                    allOf: t.allOf,
                                    [a]: {}
                                }, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("$ref" in t) return {
                                anyOf: [t, {
                                    type: "null",
                                    [a]: {}
                                }],
                                [a]: t[a]
                            };
                            if (l = t, (0, n(722371).Gv)(l) && 0 === Object.keys(l).length) return t;
                            (0, n(722371).HB)(t)
                        }
                    }
                }).map(([e, t]) => [e, (...r) => 1 === r.length && (0, n(722371).Gv)(r[0]) && ("id" in r[0] || "title" in r[0] || "description" in r[0] || "examples" in r[0]) ? (...l) => {
                    let {
                        description: o,
                        examples: s,
                        id: d,
                        title: u
                    } = r[0], c = { ...u && {
                            title: u
                        },
                        description: o,
                        ...s && {
                            examples: s
                        },
                        ...t(...l)
                    };
                    return d && (c = {
                        $ref: `#/components/schemas/${d}`,
                        [a]: { ...c[a],
                            [d]: c
                        }
                    }), {
                        [i]: c,
                        ...n(969475)[e](...l)
                    }
                } : {
                    [i]: t(...r),
                    ...n(969475)[e](...r),
                    describe: t => l[e]({
                        description: t
                    })(...r)
                }]));
            Symbol("Exact empty object ({})"), l.object({
                id: "emptyObject"
            })({
                required: {},
                optional: {},
                exact: !0
            })
        },
        503473: (e, t, n) => {
            n.d(t, {
                j: () => l
            });
            var i = n(296540),
                a = n(474848);
            let r = {
                khDVqt: "xuxw1ft",
                kXHlph: "x6ikm8r",
                kORKVm: "x10wlt62",
                kg5iWk: "xlyipyv",
                $$css: !0
            };

            function l(e) {
                let {
                    children: t,
                    style: l,
                    overlayContainerZIndex: o,
                    placement: s = "bottom",
                    tooltipStyle: d
                } = e, {
                    isSafari: u
                } = (0, n(533992).Y0)(), c = (0, i.useRef)(null), p = function(e) {
                    let [t, n] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        let {
                            current: t
                        } = e;
                        if (!t) return void n(!1);
                        let i = "ResizeObserver" in window ? new ResizeObserver(([e]) => {
                            n(e.target.scrollWidth > e.target.clientWidth)
                        }) : void 0;
                        return null == i || i.observe(t), () => null == i ? void 0 : i.unobserve(t)
                    }, []), t
                }(c);
                return (0, a.jsx)(n(51831).m, {
                    delayThreshold: 500,
                    placement: s,
                    textWrap: !0,
                    style: d,
                    overlayContainerZIndex: o,
                    forceVisibleState: !!p && void 0,
                    disableTooltip: u,
                    content: () => p ? t : void 0,
                    children: e => (0, a.jsx)("div", {
                        ref: c,
                        ...n(952687).A.props(r, l),
                        ...e,
                        children: t
                    })
                })
            }
        },
        574657: (e, t, n) => {
            n.r(t), n.d(t, {
                checkmarkCircleFillSmallIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.94 1.95 12.11 12.11",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M1.95 8a6.05 6.05 0 1 1 12.1 0 6.05 6.05 0 0 1-12.1 0m8.444-1.623a.55.55 0 0 0-.944-.566L7.443 9.156 6.339 7.87a.55.55 0 1 0-.835.716l1.6 1.867a.55.55 0 0 0 .89-.075z"
                    })
                },
                a = (0, n(104509).wt)("checkmarkCircleFillSmall", i, "fillSmall")
        },
        623644: (e, t, n) => {
            n.d(t, {
                NX: () => a,
                gp: () => l,
                h9: () => r,
                i6: () => s,
                rj: () => o,
                tw: () => i
            }), n(581454);
            let i = ["2021-05-11", "2021-05-13", "2021-08-16", "2022-02-22", "2022-06-28", "2025-09-03", "2026-03-11"],
                a = ["2022-06-28", "2025-09-03", "2026-03-11"],
                r = "2026-03-11",
                l = "2022-06-28",
                o = "2026-03-11";
            n(489561).CA.literals(...i);
            let s = "2025-09-03"
        },
        669737: (e, t, n) => {
            n.d(t, {
                KT: () => r,
                _c: () => l,
                jM: () => a
            });
            let i = {
                    CreatorProfileModal: new(n(815048)).O2("CreatorProfileModal", async () => await n.e(22931).then(n.bind(n, 896197))),
                    ConsultantBookingModal: new(n(815048)).O2("ConsultantBookingModal", async () => await Promise.all([n.e(64268), n.e(80730), n.e(97041), n.e(16871), n.e(67788)]).then(n.bind(n, 65702))),
                    ConsultantCustomerBookingReplyModal: new(n(815048)).O2("ConsultantCustomerBookingReplyModal", async () => await Promise.all([n.e(64268), n.e(16871), n.e(64498)]).then(n.bind(n, 84246)))
                },
                a = (0, n(815048)._h)(i.CreatorProfileModal, e => e.default),
                r = (0, n(815048)._h)(i.ConsultantBookingModal, e => e.ConsultantBookingModal),
                l = (0, n(815048)._h)(i.ConsultantCustomerBookingReplyModal, e => e.ConsultantCustomerBookingReplyModal)
        },
        758984: (e, t, n) => {
            n.d(t, {
                J: () => r
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.27 3.52 17.42 14.36",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M9.63 8.478a.626.626 0 0 1 .787.08l2.5 2.5.08.098a.626.626 0 0 1-.866.867l-.099-.08-1.407-1.408v6.715a.625.625 0 1 1-1.25 0v-6.766l-1.458 1.458a.626.626 0 0 1-.885-.884l2.5-2.5z"
                        }), (0, i.jsx)("path", {
                            d: "M10.45 3.525a6.474 6.474 0 0 1 6.474 6.42 3.495 3.495 0 0 1-1.544 6.526l-.18.005-.039-.001h-3.286v-1.25h3.245l.026-.001h.059a2.244 2.244 0 0 0 .848-4.318l-.411-.169.024-.443q.01-.155.01-.294A5.226 5.226 0 0 0 5.25 9.49l-.047.483-.478.074a2.606 2.606 0 0 0-2.2 2.574l.012.253a2.605 2.605 0 0 0 2.372 2.34l.075.008.012.004h3.129v1.25H4.929a1 1 0 0 1-.175-.02A3.854 3.854 0 0 1 1.28 12.81l-.006-.189a3.86 3.86 0 0 1 2.793-3.707 6.476 6.476 0 0 1 6.383-5.389m4.799 12.942h.006l.008-.001z"
                        })]
                    })
                },
                r = (0, n(104509).wt)("cloudArrowUp", a, "default")
        },
        855021: (e, t, n) => {
            n.d(t, {
                q: () => i
            });

            function i() {
                let e = (0, n(972740).L)(),
                    t = (0, n(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    i = (0, n(533992).v3)(),
                    a = (0, n(682985).K8)(() => n(375592).T.getData(i, {
                        userId: i.currentUser.id || ""
                    }), [i]);
                return (0, n(682985).K8)(() => (0, n(407998).V)({
                    environment: i,
                    spaceStore: e,
                    billingData: t,
                    externalOrgSummary: a
                }), [i, e, t, a])
            }
        },
        921048: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                magnifyingGlassSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.97 1.97 12.46 12.46",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.1 1.975a5.125 5.125 0 1 0 3.155 9.164l3.107 3.107a.625.625 0 1 0 .884-.884l-3.107-3.107A5.125 5.125 0 0 0 7.1 1.975M3.225 7.1a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
                    })
                },
                a = (0, n(104509).wt)("magnifyingGlassSmall", i, "small")
        },
        979479: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var i = n(474848);

            function a(e) {
                return n(986939).A.isMobile ? (0, i.jsx)(n(182718).zD, {
                    ariaLabel: e.ariaLabel,
                    open: e.isOpen,
                    popupType: n(423291).n.SlideUp,
                    onDismiss: e.onDismiss,
                    content: e.content,
                    style: e.style,
                    children: e.children
                }) : (0, i.jsx)(n(556809).a, {
                    ariaLabel: e.ariaLabel,
                    open: e.isOpen,
                    preventHideChildrenWhileOpening: !0,
                    onDismiss: e.onDismiss,
                    style: e.style,
                    innerStyle: e.innerStyle,
                    showCloseIcon: e.showCloseIcon,
                    children: e.content()
                })
            }
        }
    }
]);