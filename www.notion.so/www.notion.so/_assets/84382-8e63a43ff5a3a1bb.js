"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [84382], {
        51030: (e, t, n) => {
            n.d(t, {
                w: () => a
            });
            let a = (0, n(104509).xh)("paymentVisa", {
                default: {
                    loader: () => n.e(41010).then(n.bind(n, 406324))
                }
            })
        },
        55525: (e, t, n) => {
            n.d(t, {
                z: () => a
            });
            let a = (0, n(104509).xh)("microsoft", {
                default: {
                    loader: () => n.e(72423).then(n.bind(n, 766751))
                }
            })
        },
        72828: (e, t, n) => {
            n.d(t, {
                C: () => a
            });
            let a = (0, n(104509).xh)("paymentAmex", {
                default: {
                    loader: () => n.e(85876).then(n.bind(n, 156938))
                }
            })
        },
        75843: (e, t, n) => {
            n.d(t, {
                V: () => a
            });

            function a() {
                let e = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => {
                    let t = n(728372).AppStoreSidebarSpaceStore.state;
                    return !(!t || "personal" !== t.getPlanType() || (0, n(471078).O)({
                        environment: e,
                        spaceId: t.id
                    })) && 0 === (0, n(112127).f)({
                        environment: e,
                        spaceStore: t
                    }).length
                }, [e])
            }
        },
        138862: (e, t, n) => {
            n.d(t, {
                W: () => a
            });

            function a({
                teamStore: e,
                isCurrentUserTeamOwner: t,
                isCurrentUserTeamMember: o
            }) {
                if (!(0, n(216260).El)()) return !1;
                let i = e.getSetting("invite_access");
                switch (i) {
                    case void 0:
                        return !1;
                    case "team_members":
                        return o;
                    case "team_owners":
                        return t;
                    default:
                        (0, n(722371).HB)(i)
                }
            }
        },
        179279: (e, t, n) => {
            n.d(t, {
                aI: () => r,
                $c: () => s,
                Xd: () => l,
                cx: () => d,
                Rc: () => o,
                uf: () => i
            });
            let a = new(n(815048)).O2("SlackImportsInviteWithModal", async () => await Promise.all([n.e(75134), n.e(33503), n.e(21969), n.e(79349), n.e(47414), n.e(29447), n.e(41075), n.e(7485), n.e(68117)]).then(n.bind(n, 482569))),
                o = (0, n(815048)._h)(a, e => e.SlackImportsInviteWithModal),
                i = {
                    RequestMembersModal: new(n(815048)).O2("RequestMembersModal", () => Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(26361), n.e(16471), n.e(37353), n.e(18965), n.e(36474), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(54951), n.e(43444), n.e(23979), n.e(17250), n.e(26997), n.e(73259), n.e(93430), n.e(88268), n.e(12001), n.e(40198), n.e(39726), n.e(31243), n.e(42534), n.e(86662), n.e(14886), n.e(39225), n.e(6212), n.e(2626), n.e(64453), n.e(4779), n.e(21969), n.e(29663), n.e(28482), n.e(14369), n.e(56308), n.e(75136), n.e(98175), n.e(79349), n.e(68583), n.e(77282)]).then(n.bind(n, 713676))),
                    GoogleImportsInviteWithModal: new(n(815048)).O2("GoogleImportsInviteWithModal", () => Promise.all([n.e(75134), n.e(33503), n.e(21969), n.e(79349), n.e(47414), n.e(29447), n.e(41075), n.e(7485), n.e(51226)]).then(n.bind(n, 941678))),
                    MicrosoftImportsInviteWithModal: new(n(815048)).O2("MicrosoftImportsInviteWithModal", () => Promise.all([n.e(75134), n.e(33503), n.e(21969), n.e(79349), n.e(47414), n.e(29447), n.e(41075), n.e(7485), n.e(64981)]).then(n.bind(n, 915525))),
                    InviteDropdownMenuItemLabel: new(n(815048)).O2("InviteDropdownMenuItemLabel", () => n.e(25171).then(n.bind(n, 418153))),
                    personPropertyInviteActions: new(n(815048)).O2("personPropertyInviteActions", () => Promise.all([n.e(21969), n.e(79349), n.e(47414), n.e(29447), n.e(57613)]).then(n.bind(n, 910772)))
                },
                d = (0, n(815048)._h)(i.RequestMembersModal, e => e.RequestMembersModal),
                r = (0, n(815048)._h)(i.GoogleImportsInviteWithModal, e => e.GoogleImportsInviteWithModal),
                l = (0, n(815048)._h)(i.MicrosoftImportsInviteWithModal, e => e.MicrosoftImportsInviteWithModal),
                s = (0, n(815048)._h)(i.InviteDropdownMenuItemLabel, e => e.InviteDropdownMenuItemLabel)
        },
        201668: (e, t, n) => {
            n.d(t, {
                B: () => a
            });
            async function a({
                environment: e,
                teamStore: t,
                groupId: o
            }) {
                let i = t.getSpaceId();
                if (!i) return !1;
                let d = (0, n(175110).x)({
                    teamStore: t,
                    groupId: o
                });
                if (!d) return !1;
                let {
                    ownerUserIds: r,
                    ownerGroupIds: l
                } = (0, n(140289).JQ)(t), s = r.length + l.length === 1;
                if (1 === l.length && l[0] === o && s) return (0, n(505034).SM)(), !1;
                if (!await n(505034).Pc({
                        groupId: o
                    })) return !1;
                let h = [d],
                    c = await e.api.callApi({
                        eventName: "updateTeamMembers",
                        environment: e,
                        data: {
                            spaceId: i,
                            teamId: t.id,
                            existingMembersToRemove: h
                        }
                    });
                return "failed" === c.type ? ((0, n(21731).O)(c), !1) : (n(649807).fx(e, {
                    store: t,
                    num_groups_removed: h.length
                }), !0)
            }
        },
        239697: (e, t, n) => {
            n.d(t, {
                H: () => o
            });
            let a = new(n(815048)).O2("permissionsInviteWithModal", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(26361), n.e(16471), n.e(37353), n.e(62475), n.e(3151), n.e(18965), n.e(98629), n.e(96527), n.e(30085), n.e(90109), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(54951), n.e(43444), n.e(23979), n.e(17250), n.e(26997), n.e(73259), n.e(28048), n.e(93430), n.e(55940), n.e(12560), n.e(88268), n.e(12001), n.e(40198), n.e(39726), n.e(31243), n.e(42534), n.e(86662), n.e(14886), n.e(39225), n.e(6212), n.e(2626), n.e(64453), n.e(4779), n.e(21969), n.e(29663), n.e(28482), n.e(76361), n.e(14369), n.e(74145), n.e(48860), n.e(75136), n.e(98175), n.e(18682), n.e(79349), n.e(58360), n.e(33162), n.e(82538), n.e(63793), n.e(18881), n.e(62731), n.e(41049), n.e(60262), n.e(72805), n.e(18416), n.e(2276), n.e(30532), n.e(73588), n.e(3723), n.e(91100), n.e(78311), n.e(4287), n.e(9817), n.e(65594), n.e(47302), n.e(91636), n.e(36441), n.e(64049), n.e(75189), n.e(28372), n.e(28663), n.e(47281), n.e(29087), n.e(46350), n.e(75234), n.e(67281), n.e(66200), n.e(52064), n.e(69626), n.e(82816), n.e(2832), n.e(48095), n.e(67098), n.e(35118), n.e(63611), n.e(94849), n.e(75484), n.e(98821), n.e(97711), n.e(89076), n.e(86998), n.e(58889), n.e(22920), n.e(9914), n.e(78257), n.e(84382), n.e(51386), n.e(95150), n.e(10471), n.e(87087), n.e(98419), n.e(11719), n.e(13592), n.e(6743), n.e(5234), n.e(85376), n.e(67252), n.e(42709), n.e(44903), n.e(92181), n.e(7251), n.e(72143), n.e(67612), n.e(53478), n.e(75559), n.e(86793), n.e(34), n.e(54253), n.e(26665), n.e(67984), n.e(605), n.e(75681)]).then(n.bind(n, 949290))),
                o = (0, n(815048)._h)(a, e => e.PermissionsInviteWithModal)
        },
        345514: (e, t, n) => {
            n.d(t, {
                s: () => a
            });

            function a({
                environment: e,
                spaceStore: t
            }) {
                let o;
                return !!t && !((0, n(916804).I)(t) || (o = e.currentUser.id, t && o && (0, n(993077).dp)(t, o).isRestrictedMember())) && ((0, n(887788).h)(e) || !t.getDisableTeamCreation())
            }
        },
        428456: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            let a = new(n(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }, n = !1) => {
                var a;
                let o = await e.api.callApi({
                    eventName: "getInternalDomains",
                    environment: e,
                    data: {
                        spaceId: t
                    }
                });
                return "success" === o.type ? null == (a = o.data) ? void 0 : a.internalDomainsWithInfo : void 0
            });
            n(202146).exposeDebugValue("InternalDomainsStore", a);
            let o = a
        },
        442219: (e, t, n) => {
            n.d(t, {
                w: () => i
            }), n(296540);
            var a = n(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.12 2.37 17.51 15.26",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M3.442 13.102a.625.625 0 0 1-.884 0L.304 10.848a.625.625 0 0 1 .884-.884l1.187 1.187V10a7.625 7.625 0 1 1 2.303 5.46.625.625 0 1 1 .872-.895A6.375 6.375 0 1 0 3.625 10v1.151l1.187-1.187a.625.625 0 1 1 .884.884z"
                        }), (0, a.jsx)("path", {
                            d: "M9.375 5.725a.625.625 0 0 1 1.25 0v3.65H13.6a.625.625 0 0 1 0 1.25H10A.625.625 0 0 1 9.375 10z"
                        })]
                    })
                },
                i = (0, n(104509).wt)("clockArrowBack", o, "default")
        },
        444755: (e, t, n) => {
            n.d(t, {
                h: () => a
            });
            let a = (0, n(104509).xh)("checkmarkShield", {
                default: {
                    loader: () => n.e(6855).then(n.bind(n, 777805))
                },
                small: {
                    loader: () => n.e(6855).then(n.bind(n, 504655))
                },
                fill: {
                    loader: () => n.e(6855).then(n.bind(n, 57165))
                },
                fillSmall: {
                    loader: () => n.e(6855).then(n.bind(n, 555972))
                }
            }, ["checkmark", "shield", "protect", "secure", "validate"])
        },
        451963: (e, t, n) => {
            n.d(t, {
                f: () => a
            });

            function a(e) {
                let {
                    spaceId: t,
                    userId: a,
                    enforceIdsCheck: o,
                    debugFrom: i
                } = e;
                if (!t || !a || !n(105692).subscriptionDataStoreInstance.userId || !n(105692).subscriptionDataStoreInstance.spaceId) {
                    if (o) return;
                    return n(105692).subscriptionDataStoreInstance
                }
                if (n(105692).subscriptionDataStoreInstance.spaceId === t || (n(773352).rateLimitedLog({
                        level: "warning",
                        from: "getSubscriptionDataStore",
                        type: o ? "rejectedCrossSpaceSubscriptionDataStoreRead" : "allowedCrossSpaceSubscriptionDataStoreRead",
                        spaceId: t,
                        data: {
                            userId: a,
                            miscDataToConvertToString: {
                                debugFrom: i,
                                enforceIdsCheck: o,
                                requestedUserId: a,
                                requestedSpaceId: t,
                                cachedSubscriptionDataUserId: n(105692).subscriptionDataStoreInstance.userId,
                                cachedSubscriptionDataSpaceId: n(105692).subscriptionDataStoreInstance.spaceId
                            }
                        }
                    }), !o)) {
                    if (n(105692).subscriptionDataStoreInstance.userId === a || (n(773352).rateLimitedLog({
                            level: "warning",
                            from: "getSubscriptionDataStore",
                            type: o ? "rejectedCrossUserSubscriptionDataStoreRead" : "allowedCrossUserSubscriptionDataStoreRead",
                            spaceId: t,
                            data: {
                                userId: a,
                                miscDataToConvertToString: {
                                    debugFrom: i,
                                    enforceIdsCheck: o,
                                    requestedUserId: a,
                                    requestedSpaceId: t,
                                    cachedSubscriptionDataUserId: n(105692).subscriptionDataStoreInstance.userId,
                                    cachedSubscriptionDataSpaceId: n(105692).subscriptionDataStoreInstance.spaceId
                                }
                            }
                        }), !o)) return n(105692).subscriptionDataStoreInstance
                }
            }
        },
        454829: (e, t, n) => {
            n.d(t, {
                n: () => a
            });
            let a = (0, n(104509).xh)("apple", {
                default: {
                    loader: () => n.e(5815).then(n.bind(n, 680983))
                },
                tintable: {
                    loader: () => n.e(5815).then(n.bind(n, 893167))
                }
            })
        },
        474551: (e, t, n) => {
            n.d(t, {
                u: () => d
            }), n(581454);
            var a = n(296540),
                o = n(474848);
            let i = {
                overflow: "auto"
            };

            function d(e) {
                let t = a.useRef(null),
                    {
                        rows: d = [],
                        hasMore: r
                    } = (0, n(682985).O$)(e.listSource.rowsStore),
                    l = (0, n(326361).Te)({
                        count: d.length,
                        getScrollElement: () => t.current,
                        estimateSize: t => e.estimateSize(d[t], t),
                        overscan: 10
                    }),
                    s = l.getVirtualItems();
                return (0, a.useEffect)(() => {
                    !async function() {
                        let t = s[s.length - 1];
                        r && (null == t ? void 0 : t.index) >= d.length - 1 && await e.listSource.loadMore()
                    }()
                }, [e.listSource, s, d.length, r]), (0, o.jsx)("div", {
                    ref: t,
                    style: { ...i,
                        ...e.style
                    },
                    children: (0, o.jsx)("div", {
                        style: {
                            height: `${l.getTotalSize()}px`,
                            width: "100%",
                            position: "relative"
                        },
                        children: s.map(t => (0, o.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                insetInlineStart: 0,
                                width: "100%",
                                height: `${t.size}px`,
                                transform: `translateY(${t.start}px)`
                            },
                            children: e.renderRow(d[t.index], t.index)
                        }, t.key.toString()))
                    })
                })
            }
        },
        497600: (e, t, n) => {
            n.d(t, {
                q: () => a
            });
            let a = (0, n(104509).xh)("paymentSepa", {
                default: {
                    loader: () => n.e(42716).then(n.bind(n, 748590))
                }
            })
        },
        535527: (e, t, n) => {
            n.d(t, {
                x: () => a
            });
            let a = (0, n(104509).xh)("paymentMastercard", {
                default: {
                    loader: () => n.e(42409).then(n.bind(n, 954609))
                }
            })
        },
        567096: (e, t, n) => {
            function a(e, t) {
                (0, n(195857).DO_NOT_USE_trackLegacy)("toggle_open_in_desktop_app", t)
            }

            function o(e) {
                (0, n(104310).u)({
                    event: {
                        eventName: "configure_open_in_desktop_app",
                        eventProperties: {}
                    }
                })
            }

            function i(e) {
                (0, n(195857).DO_NOT_USE_trackLegacy)("open_in_desktop_app_popup_dismiss")
            }

            function d(e) {
                (0, n(104310).u)({
                    event: {
                        eventName: "open_in_desktop_app_popup_display",
                        eventProperties: {}
                    }
                })
            }

            function r(e) {
                (0, n(104310).u)({
                    event: {
                        eventName: "open_in_desktop_app_popup_download",
                        eventProperties: {}
                    }
                })
            }

            function l(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "open_in_desktop_app_popup_open_in_app",
                        eventProperties: t
                    }
                })
            }
            n.d(t, {
                SS: () => l,
                _g: () => d,
                co: () => r,
                e1: () => i,
                kF: () => a,
                mu: () => o
            })
        },
        578449: (e, t, n) => {
            function a(e) {
                let {
                    environment: t,
                    spaceViewStore: a,
                    ...o
                } = e;
                if (!a.getModel()) return;
                let i = !(0, n(654863).x)(a)[e.feature],
                    d = a.getSpaceId();
                (0, n(377796).createAndCommit)({
                    userAction: "userHomeActions.toggleHomeFeature",
                    environment: t,
                    cellTarget: d ? {
                        spaceWithId: d
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        (0, n(421439).y4)({
                            store: a,
                            operation: {
                                pointer: a.pointer,
                                path: ["settings", "personal_home", "enabled_features"],
                                command: "update",
                                args: {
                                    [e.feature]: i
                                }
                            },
                            transaction: t
                        })
                    }
                }), (0, n(167552).f_)({
                    environment: t,
                    show: i,
                    ...o
                })
            }

            function o({
                environment: e,
                option: t,
                from: a,
                userAction: i
            }) {
                let d = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!d) return !1;
                let r = d.getOnAppStartStore().getValue(),
                    l = d.getSpaceId();
                return (0, n(377796).createAndCommit)({
                    userAction: i,
                    environment: e,
                    cellTarget: l ? {
                        spaceWithId: l
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, n(421439).y4)({
                            store: d,
                            operation: {
                                pointer: d.pointer,
                                path: ["settings", "on_app_start"],
                                command: "set",
                                args: t
                            },
                            transaction: e
                        })
                    }
                }), (0, n(377744).c)({
                    spaceView: d.getModel(),
                    preference: t
                }), (0, n(167552).lr)({
                    environment: e,
                    oldValue: r,
                    newValue: t,
                    from: a
                }), !0
            }

            function i(e) {
                let {
                    environment: t,
                    selectedStore: a,
                    spaceViewStore: o,
                    collectionContextStore: i
                } = e, d = i.collectionViewStore(), r = i.collectionStore(), l = i.collectionViewBlockStore();
                if (!r || !d || !l || !o) return;
                let s = (0, n(679321).r)(o),
                    h = a.table === n(832375).yKj ? s.indexOf(a) + 1 : 0,
                    c = a.table === n(832375).yKj ? a.id : void 0,
                    u = d.getSpaceId();
                (0, n(377796).createAndCommit)({
                    environment: t,
                    userAction: "PersonalHomeTrendingPanel.setCollectionViewSourceTeamId",
                    cellTarget: u ? {
                        spaceWithId: u
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, n(421439).y4)({
                            store: d,
                            operation: {
                                pointer: {
                                    id: d.id,
                                    table: n(832375).Gy1
                                },
                                path: ["format", "collection_view_source", "teamId"],
                                command: "set",
                                args: c
                            },
                            transaction: e
                        }), (0, n(316572).d)({
                            environment: t,
                            collectionViewBlockStore: l,
                            collectionViewStore: d,
                            collectionStore: r,
                            collectionContextStore: i,
                            isFullScreen: !1,
                            isRootChild: !1,
                            isInPeekRenderer: !1,
                            viewsModuleContext: void 0
                        })
                    }
                }), (0, n(167552).AP)({
                    environment: t,
                    teamId: c,
                    index: h
                })
            }
            n.d(t, {
                WO: () => a,
                _V: () => o,
                hK: () => i
            })
        },
        579914: (e, t, n) => {
            n.d(t, {
                b: () => a
            });
            async function a(e) {
                let {
                    bots: t,
                    spaceId: a,
                    environment: o
                } = e;
                await (0, n(975162).lX)(t, 10, async e => {
                    let {
                        botId: t,
                        importContactType: i
                    } = e, d = function(e) {
                        switch (e) {
                            case "google":
                                return n(49361).E8;
                            case "microsoft":
                                return n(49361).LF;
                            case "slack":
                                return n(49361).zG;
                            default:
                                (0, n(722371).HB)(e)
                        }
                    }(i);
                    await o.api.callApi({
                        eventName: "loadContacts",
                        environment: o,
                        data: {
                            botId: t,
                            spaceId: a,
                            integrationId: d,
                            importContactType: i
                        }
                    }).catch(e => {
                        n(773352).log({
                            level: "error",
                            from: "loadContactsForBots",
                            type: "loadContacts",
                            error: (0, n(416607).convertErrorToLog)(e)
                        })
                    })
                })
            }
        },
        589391: (e, t, n) => {
            n.d(t, {
                J: () => o
            }), n(296540);
            var a = n(474848);

            function o() {
                return (0, a.jsx)(n(109939).sA, {
                    id: "organization.workspaceSettings.locked.tooltip",
                    defaultMessage: "This setting is being managed by your organization."
                })
            }
        },
        593148: (e, t, n) => {
            n.d(t, {
                sK: () => a().s,
                mt: () => o().m,
                gs: () => i().g,
                jJ: () => d().j
            }), (0, n(104509).xh)("abstract", {
                default: {
                    loader: () => n.e(40471).then(n.bind(n, 405371))
                },
                tintable: {
                    loader: () => n.e(40471).then(n.bind(n, 518915))
                }
            }), (0, n(104509).xh)("adobeXd", {
                default: {
                    loader: () => n.e(56873).then(n.bind(n, 884908))
                }
            }), (0, n(104509).xh)("airtable", {
                default: {
                    loader: () => n.e(73865).then(n.bind(n, 965545))
                }
            }), (0, n(104509).xh)("android", {
                default: {
                    loader: () => n.e(81154).then(n.bind(n, 993508))
                },
                tintable: {
                    loader: () => n.e(81154).then(n.bind(n, 892290))
                }
            }), (0, n(104509).xh)("basecamp", {
                default: {
                    loader: () => n.e(67601).then(n.bind(n, 619749))
                }
            }), (0, n(104509).xh)("bitwarden", {
                default: {
                    loader: () => n.e(60245).then(n.bind(n, 335545))
                }
            }), (0, n(104509).xh)("clickUp", {
                default: {
                    loader: () => n.e(52084).then(n.bind(n, 914570))
                }
            }), (0, n(104509).xh)("coda", {
                default: {
                    loader: () => n.e(59430).then(n.bind(n, 382976))
                }
            }), (0, n(104509).xh)("codegen", {
                default: {
                    loader: () => n.e(19388).then(n.bind(n, 637358))
                }
            }), (0, n(104509).xh)("codepen", {
                default: {
                    loader: () => n.e(32179).then(n.bind(n, 286839))
                },
                tintable: {
                    loader: () => n.e(32179).then(n.bind(n, 429199))
                }
            }), (0, n(104509).xh)("dashlane", {
                default: {
                    loader: () => n.e(34251).then(n.bind(n, 683255))
                }
            }), (0, n(104509).xh)("deepnote", {
                default: {
                    loader: () => Promise.resolve().then(n.bind(n, 312951))
                }
            }), (0, n(104509).xh)("dropbox", {
                default: {
                    loader: () => n.e(30737).then(n.bind(n, 972133))
                }
            }), (0, n(104509).xh)("evernote", {
                default: {
                    loader: () => n.e(89253).then(n.bind(n, 392269))
                }
            }), (0, n(104509).xh)("excalidraw", {
                default: {
                    loader: () => n.e(23873).then(n.bind(n, 929445))
                },
                tintable: {
                    loader: () => n.e(23873).then(n.bind(n, 101021))
                }
            }), (0, n(104509).xh)("facebook", {
                default: {
                    loader: () => n.e(5209).then(n.bind(n, 78321))
                },
                tintable: {
                    loader: () => n.e(5209).then(n.bind(n, 344409))
                }
            }), (0, n(104509).xh)("framer", {
                default: {
                    loader: () => n.e(87102).then(n.bind(n, 272884))
                },
                tintable: {
                    loader: () => n.e(87102).then(n.bind(n, 744754))
                }
            }), (0, n(104509).xh)("giphy", {
                default: {
                    loader: () => n.e(15026).then(n.bind(n, 74932))
                },
                tintable: {
                    loader: () => n.e(15026).then(n.bind(n, 602098))
                }
            }), (0, n(104509).xh)("gitLab", {
                default: {
                    loader: () => n.e(70916).then(n.bind(n, 397402))
                }
            }), (0, n(104509).xh)("googleDocs", {
                default: {
                    loader: () => n.e(49373).then(n.bind(n, 149009))
                }
            });
            var a = () => n(526812),
                o = () => n(709720);
            (0, n(104509).xh)("googleMeet", {
                default: {
                    loader: () => n.e(8829).then(n.bind(n, 45053))
                }
            }), (0, n(104509).xh)("googlePlay", {
                default: {
                    loader: () => n.e(34222).then(n.bind(n, 479664))
                }
            }), (0, n(104509).xh)("instagram", {
                default: {
                    loader: () => n.e(77355).then(n.bind(n, 129891))
                },
                tintable: {
                    loader: () => n.e(77355).then(n.bind(n, 966331))
                }
            }), (0, n(104509).xh)("inVision", {
                default: {
                    loader: () => Promise.resolve().then(n.bind(n, 930758))
                }
            }), (0, n(104509).xh)("linkedin", {
                default: {
                    loader: () => n.e(58319).then(n.bind(n, 931319))
                },
                tintable: {
                    loader: () => n.e(58319).then(n.bind(n, 357775))
                }
            }), (0, n(104509).xh)("loom", {
                default: {
                    loader: () => n.e(68642).then(n.bind(n, 718260))
                },
                tintable: {
                    loader: () => n.e(68642).then(n.bind(n, 804722))
                }
            }), (0, n(104509).xh)("lucidchart", {
                default: {
                    loader: () => n.e(30512).then(n.bind(n, 987994))
                }
            }), (0, n(104509).xh)("lucidspark", {
                default: {
                    loader: () => n.e(7391).then(n.bind(n, 725091))
                }
            }), (0, n(104509).xh)("microsoftOneNote", {
                default: {
                    loader: () => n.e(96773).then(n.bind(n, 331453))
                }
            });
            var i = () => n(477940);
            (0, n(104509).xh)("microsoftWord", {
                default: {
                    loader: () => n.e(67199).then(n.bind(n, 95443))
                }
            }), (0, n(104509).xh)("mixpanel", {
                default: {
                    loader: () => n.e(41837).then(n.bind(n, 334033))
                },
                tintable: {
                    loader: () => n.e(41837).then(n.bind(n, 642105))
                }
            }), (0, n(104509).xh)("notionFlat", {
                default: {
                    loader: () => n.e(84379).then(n.bind(n, 394787))
                },
                tintable: {
                    loader: () => n.e(84379).then(n.bind(n, 106811))
                }
            }), (0, n(104509).xh)("notionTemplate", {
                default: {
                    loader: () => n.e(1392).then(n.bind(n, 598974))
                },
                tintable: {
                    loader: () => n.e(1392).then(n.bind(n, 646220))
                }
            }), (0, n(104509).xh)("oneDrive", {
                default: {
                    loader: () => n.e(77957).then(n.bind(n, 75765))
                }
            }), (0, n(104509).xh)("onePassword", {
                default: {
                    loader: () => n.e(71768).then(n.bind(n, 435158))
                }
            }), (0, n(104509).xh)("pagerDuty", {
                default: {
                    loader: () => n.e(19314).then(n.bind(n, 453528))
                }
            }), (0, n(104509).xh)("paymentAmazon", {
                default: {
                    loader: () => n.e(75205).then(n.bind(n, 396641))
                }
            }), (0, n(104509).xh)("paymentApplePay", {
                default: {
                    loader: () => n.e(17143).then(n.bind(n, 267419))
                }
            }), (0, n(104509).xh)("paymentDiscover", {
                default: {
                    loader: () => n.e(4544).then(n.bind(n, 272042))
                }
            }), (0, n(104509).xh)("paymentGooglePay", {
                default: {
                    loader: () => n.e(57246).then(n.bind(n, 24492))
                }
            }), (0, n(104509).xh)("paymentStripe", {
                default: {
                    loader: () => n.e(28286).then(n.bind(n, 845312))
                }
            }), (0, n(104509).xh)("pitch", {
                default: {
                    loader: () => n.e(39689).then(n.bind(n, 663505))
                }
            }), (0, n(104509).xh)("polymer", {
                default: {
                    loader: () => n.e(38949).then(n.bind(n, 312201))
                }
            }), (0, n(104509).xh)("protonPass", {
                default: {
                    loader: () => n.e(99998).then(n.bind(n, 329304))
                }
            }), (0, n(104509).xh)("quip", {
                default: {
                    loader: () => n.e(61492).then(n.bind(n, 906770))
                }
            }), (0, n(104509).xh)("replit", {
                default: {
                    loader: () => n.e(49229).then(n.bind(n, 841145))
                },
                tintable: {
                    loader: () => n.e(49229).then(n.bind(n, 809169))
                }
            }), (0, n(104509).xh)("sketch", {
                default: {
                    loader: () => n.e(64557).then(n.bind(n, 596841))
                },
                tintable: {
                    loader: () => n.e(64557).then(n.bind(n, 325409))
                }
            });
            var d = () => n(673733);
            (0, n(104509).xh)("smartSheet", {
                default: {
                    loader: () => n.e(87153).then(n.bind(n, 743565))
                }
            }), (0, n(104509).xh)("stripeText", {
                default: {
                    loader: () => n.e(63367).then(n.bind(n, 6563))
                }
            }), (0, n(104509).xh)("tex", {
                default: {
                    loader: () => n.e(92108).then(n.bind(n, 291758))
                },
                tintable: {
                    loader: () => n.e(92108).then(n.bind(n, 626716))
                }
            }), (0, n(104509).xh)("tiktok", {
                default: {
                    loader: () => n.e(80931).then(n.bind(n, 547323))
                },
                tintable: {
                    loader: () => n.e(80931).then(n.bind(n, 637635))
                }
            }), (0, n(104509).xh)("trello", {
                default: {
                    loader: () => n.e(9555).then(n.bind(n, 505967))
                }
            }), (0, n(104509).xh)("twitter", {
                default: {
                    loader: () => n.e(53974).then(n.bind(n, 981628))
                },
                tintable: {
                    loader: () => n.e(53974).then(n.bind(n, 622250))
                }
            }), (0, n(104509).xh)("typeform", {
                default: {
                    loader: () => n.e(61487).then(n.bind(n, 417063))
                },
                tintable: {
                    loader: () => n.e(61487).then(n.bind(n, 680479))
                }
            }), (0, n(104509).xh)("unsplash", {
                default: {
                    loader: () => n.e(37189).then(n.bind(n, 441457))
                },
                tintable: {
                    loader: () => n.e(37189).then(n.bind(n, 276889))
                }
            }), (0, n(104509).xh)("whatsApp", {
                default: {
                    loader: () => n.e(67035).then(n.bind(n, 361567))
                },
                tintable: {
                    loader: () => n.e(67035).then(n.bind(n, 427751))
                }
            }), (0, n(104509).xh)("whimsical", {
                default: {
                    loader: () => Promise.resolve().then(n.bind(n, 404448))
                }
            }), (0, n(104509).xh)("workflowy", {
                default: {
                    loader: () => n.e(15135).then(n.bind(n, 782123))
                }
            }), (0, n(104509).xh)("youTube", {
                default: {
                    loader: () => n.e(55724).then(n.bind(n, 614766))
                },
                tintable: {
                    loader: () => n.e(55724).then(n.bind(n, 362716))
                }
            }), (0, n(104509).xh)("zendesk", {
                default: {
                    loader: () => n.e(11235).then(n.bind(n, 527427))
                }
            }), (0, n(104509).xh)("zoom", {
                default: {
                    loader: () => n.e(9832).then(n.bind(n, 388930))
                }
            }), (0, n(104509).xh)("zoomMeetings", {
                default: {
                    loader: () => n.e(46314).then(n.bind(n, 481732))
                },
                tintable: {
                    loader: () => n.e(46314).then(n.bind(n, 927330))
                }
            })
        },
        654863: (e, t, n) => {
            n.d(t, {
                x: () => o
            });
            let a = {
                greeting: !0,
                tasks: !1,
                tips: !1,
                templates: !1,
                calendar: !1,
                custom_db: !1,
                suggested: !0,
                trending: !0,
                shortcuts: !0
            };

            function o(e) {
                let t = (null == e ? void 0 : e.getHomeEnabledFeatures()) ? ? {};
                return { ...a,
                    ...t
                }
            }
        },
        675386: (e, t, n) => {
            n.d(t, {
                n: () => o
            });
            let a = {};

            function o({
                spaceId: e
            }) {
                let t = (0, n(533992).v3)(),
                    [{
                        status: i,
                        error: d,
                        value: r
                    }] = (0, n(97668).Yb)(async () => {
                        if (!e) return {
                            overrides: {},
                            organizationInfo: void 0,
                            isOrganizationOwner: !1
                        };
                        let a = await t.api.callApi({
                            eventName: "getOrganizationSettingsOverrides",
                            environment: t,
                            data: {
                                spaceId: e
                            }
                        });
                        if ("success" === a.type) return a.data;
                        if ("failed" !== a.type) return (0, n(722371).HB)(a);
                        throw a.error
                    }, [t, e]);
                return {
                    organizationOverrides: (null == r ? void 0 : r.overrides) ? ? a,
                    organizationInfo: null == r ? void 0 : r.organizationInfo,
                    isOrganizationOwner: null == r ? void 0 : r.isOrganizationOwner,
                    loading: "pending" === i || "idle" === i,
                    error: d
                }
            }
        },
        765875: (e, t, n) => {
            n.d(t, {
                t: () => a
            });
            let a = (0, n(104509).xh)("googleGemini", {
                default: {
                    loader: () => n.e(19365).then(n.bind(n, 447405))
                }
            })
        },
        779095: (e, t, n) => {
            n.d(t, {
                Y: () => a
            }), n(898992), n(354520);

            function a(e) {
                return (0, n(576968).B)(e).filter(n(573143).c7)
            }
        },
        806457: (e, t, n) => {
            n.d(t, {
                F: () => i
            });
            var a = () => n(546605);
            class o extends a().Store {
                getInitialState() {
                    return {
                        forceImportDropdownOpen: !1,
                        shouldAddMembers: !0
                    }
                }
                closeImportDropdown() {
                    this.setState({
                        forceImportDropdownOpen: !1,
                        shouldAddMembers: !0
                    })
                }
                openImportDropdown(e) {
                    this.setState({
                        forceImportDropdownOpen: !0,
                        shouldAddMembers: e.shouldAddMembers
                    })
                }
            }
            let i = new o
        },
        840752: (e, t, n) => {
            n.d(t, {
                M: () => a
            });

            function a(e) {
                let {
                    spaceId: t,
                    userId: a,
                    enforceIdsCheck: o,
                    debugFrom: i
                } = e, d = (0, n(451963).f)({
                    spaceId: t,
                    userId: a,
                    enforceIdsCheck: o,
                    debugFrom: i
                });
                return null == d ? void 0 : d.state
            }
        },
        928884: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(104509).xh)("personCropCircleBadgeExclamationPoint", {
                default: {
                    loader: () => n.e(50710).then(n.bind(n, 587570))
                },
                small: {
                    loader: () => n.e(50710).then(n.bind(n, 367752))
                },
                fill: {
                    loader: () => n.e(50710).then(n.bind(n, 742864))
                },
                fillSmall: {
                    loader: () => n.e(50710).then(n.bind(n, 173463))
                }
            }, ["person", "alert", "exclamation", "warning", "user"])
        },
        971550: (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var a = n(296540),
                o = n(474848);
            let i = {
                    icon: {
                        fill: n(632079).Tj.icon.secondary
                    }
                },
                d = a.memo(function({
                    groupIcon: e,
                    spaceId: t
                }) {
                    return e && t ? (0, o.jsx)(n(427986).A, {
                        type: "circle",
                        iconType: "recordIcon",
                        icon: {
                            icon: e,
                            pointer: {
                                table: n(832375).NXh,
                                id: t
                            }
                        }
                    }) : (0, o.jsx)(n(427986).A, {
                        type: "circle",
                        iconType: "function",
                        iconFn: n(407598).peopleFillIcon,
                        iconStyle: i.icon
                    })
                })
        }
    }
]);