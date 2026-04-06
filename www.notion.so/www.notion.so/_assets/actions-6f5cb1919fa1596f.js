"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [54236], {
        59651: (e, t, i) => {
            i.d(t, {
                l: () => a
            });
            let o = {
                [i(49361).e1]: "collection_connected_property_figma",
                [i(49361).Hd]: "collection_connected_property_google_drive",
                [i(49361).ob]: "collection_connected_property_github",
                [i(49361).k0]: "collection_connected_property_zendesk",
                [i(49361).bh]: "collection_synced_database_github",
                [i(49361).MN]: "collection_synced_database_asana",
                [i(49361).Fo]: "collection_synced_database_gitlab",
                [i(49361).me]: "collection_synced_database_jira",
                [i(49361).F6]: "collection_synced_database_jira_workspace",
                [i(49361).Fv]: "collection_synced_database_jira_datacenter",
                [i(49361).mn]: "collection_synced_database_salesforce_workspace"
            };

            function a(e) {
                if (e) return o[e]
            }
        },
        148465: (e, t, i) => {
            async function o(e) {
                let t = i(728372).AppStoreSidebarSpaceStore.state;
                t && await a({
                    environment: e.environment,
                    spaceId: t.id,
                    force: !0
                })
            }
            async function a(e) {
                let {
                    environment: t,
                    spaceId: o,
                    force: a
                } = e;
                if (!t.currentUser.id) return;
                await i(728372).default.waitUntilRendered();
                let r = i(701328).A.state;
                if (!r.loaded && !r.loading || r.loaded && o !== r.spaceId || a) {
                    i(701328).A.setState({ ...i(701328).A.state,
                        loading: !0
                    });
                    let e = async () => {
                            let e = await t.api.callApi({
                                eventName: "searchIntegrations",
                                environment: t,
                                data: {
                                    query: "",
                                    type: "compliance",
                                    spaceId: o
                                }
                            });
                            return "success" !== e.type ? (i(773352).log({
                                level: "error",
                                from: "complianceIntegrationActions",
                                type: "searchIntegrationsError",
                                error: (0, i(416607).convertErrorToLog)(e.error)
                            }), {
                                status: "rejected",
                                error: e.error
                            }) : {
                                status: "resolved",
                                value: e
                            }
                        },
                        a = async () => {
                            try {
                                let e = await i(508523).C({
                                    environment: t,
                                    spaceId: o
                                });
                                return {
                                    status: "resolved",
                                    value: e
                                }
                            } catch (e) {
                                return i(773352).log({
                                    level: "error",
                                    from: "complianceIntegrationActions",
                                    type: "fetchWebhookSubscriptionsError",
                                    error: (0, i(416607).convertErrorToLog)(e)
                                }), {
                                    status: "rejected",
                                    error: e
                                }
                            }
                        },
                        [r, n] = await Promise.all([e(), a()]);
                    if ("rejected" === r.status || "rejected" === n.status) return;
                    let {
                        value: l
                    } = r, {
                        value: d
                    } = n, s = i(412951).RecordMapWithRole.create(l.data.recordMap), c = i(412951).RecordMapWithRole.create(d.recordMap);
                    i(701328).A.setState({
                        loaded: !0,
                        loading: !1,
                        spaceId: o,
                        integrations: i(381453).Ul(i(381453).oE(l.data.integrationIds.map(e => s.getModel({
                            table: i(832375).Lij,
                            id: e
                        }))).filter(i(720871).kC), ({
                            created_at: e
                        }) => e),
                        webhookSubscriptions: i(381453).oE(d.webhookSubscriptionIds.map(e => c.getModel({
                            table: i(832375).TFg,
                            id: e,
                            spaceId: o
                        })))
                    })
                }
            }
            i.r(t), i.d(t, {
                initializeComplianceIntegrationStore: () => a,
                refreshComplianceIntegrationStore: () => o
            }), i(898992), i(354520), i(581454)
        },
        417317: (e, t, i) => {
            function o({
                icon: e,
                themeMode: t
            }) {
                if (e) {
                    if ((0, i(312028).A)(e)) return i(753281).A.state.emojiByColorProcessed[e];
                    if ((0, i(337222).MP)(e)) {
                        let {
                            color: t
                        } = (0, i(337222).uX)(e);
                        return (0, i(337222).hI)(t)
                    }
                    if ((0, i(111012).T8)(e)) return function({
                        uri: e,
                        themeMode: t
                    }) {
                        var o, r;
                        let n = null == (o = e.match(/\/icons\/[\w\-]*_(.+)\.svg/)) ? void 0 : o[1];
                        if ((r = n) && a.has(r)) return i(111012).l8[t][n]
                    }({
                        uri: e,
                        themeMode: t
                    })
                }
            }
            i.d(t, {
                b: () => o
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            let a = new Set((0, i(722371).objectKeys)(i(111012).l8.light))
        },
        469589: (e, t, i) => {
            i.r(t), i.d(t, {
                STORE_MAX_LIMIT: () => n,
                initializePageVisit: () => l,
                updatePageVisits: () => d
            }), i(898992), i(354520), i(581454);
            var o = () => i(726570),
                a = () => i(226221),
                r = () => i(832375);
            let n = 100;
            async function l(e, t) {
                await i(728372).default.waitUntilRendered();
                let {
                    fromPageRefresh: o,
                    blockStore: n,
                    pageVisitStore: l,
                    timestamp: d,
                    type: u
                } = t, p = e.currentUser.id;
                if (void 0 === p || o) return;
                t.blockStore.id !== l.state.pageId && l.setState({ ...l.getInitialState(),
                    pageId: t.blockStore.id
                });
                let g = (0, i(517013).v3)(n, {
                        table: r().F9f,
                        id: (0, i(665619).$5)({
                            parent_id: n.id,
                            user_id: p
                        }),
                        spaceId: (0, a().e)(n.pointer.spaceId)
                    }),
                    f = (0, i(517013).v3)(n, {
                        table: r().ouC,
                        id: (0, i(665619).$5)({
                            parent_id: n.id,
                            user_id: p
                        }),
                        spaceId: (0, a().e)(n.pointer.spaceId)
                    });
                if (await i(941701).transactionQueue.awaitRecordTransaction({
                        table: r().evP,
                        id: n.id
                    }), await (0, i(966980).hS)(n), !n.canRead() || (0, i(142484).q)(e, n, n.getSpaceStore())) return;
                await g.load(), await f.load();
                let b = g.getKeyStore("visited_at").getValue(),
                    h = f.getKeyStore("exited_at").getValue(),
                    m = await c({
                        environment: e,
                        blockStore: n,
                        spaceId: (0, a().e)(n.pointer.spaceId),
                        timestamp: d,
                        type: u
                    });
                if ("skipped" === m.type || "failed" === m.type) return;
                let w = s({
                    pageVisits: m.data.pageVisits,
                    currentState: l.state,
                    blockStore: n,
                    totalCount: l.state.totalCount,
                    hasMore: void 0
                });
                l.state.pageId === n.id && l.setState({ ...w,
                    lastViewTime: b,
                    lastExitTime: h
                })
            }
            async function d(e, t) {
                let o, r;
                await i(728372).default.waitUntilRendered();
                let l = e.currentUser.id;
                if (void 0 === l) return;
                let {
                    blockStore: d,
                    pageVisitStore: c,
                    incremental: u
                } = t, p = t.limit || 32;
                if (u) {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: a,
                        totalCount: r,
                        hasMore: n,
                        ...d
                    } = c.state, s = Object.entries(d).map(([e, t]) => {
                        if (l === e) return;
                        let i = t.getVisitedAt();
                        if (void 0 !== i) return i + 1
                    });
                    o = (0, i(763230).T9)(s.filter(i(722371).O9))
                }
                let g = await e.api.callApi({
                    eventName: "getPageVisitors",
                    environment: e,
                    data: {
                        block: {
                            id: d.id,
                            spaceId: (0, a().e)(d.pointer.spaceId)
                        },
                        sinceTimestamp: o,
                        limit: p,
                        includeTotalCount: t.includeTotalCount
                    },
                    headers: {
                        recordId: d.id,
                        spaceId: (0, a().e)(d.pointer.spaceId)
                    }
                });
                if ("failed" === g.type) return;
                let f = s({
                    pageVisits: g.data.pageVisits,
                    blockStore: d,
                    currentState: c.state,
                    totalCount: g.data.totalCount,
                    hasMore: g.data.hasMore
                });
                if (Object.keys(f).length <= n) r = f;
                else {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: o,
                        totalCount: a,
                        hasMore: l,
                        ...d
                    } = f, s = (0, i(722371).WP)(d).map(([e, t]) => [e, t.getVisitedAt() ? ? 0]);
                    for (let [t] of (r = {
                            pageId: e,
                            lastViewTime: void 0,
                            lastExitTime: void 0,
                            totalCount: a,
                            hasMore: l
                        }, i(381453).Ul(s, ([, e]) => -e).slice(0, n))) r[t] = f[t]
                }
                c.state.pageId === f.pageId && c.setState(r)
            }

            function s(e) {
                let {
                    blockStore: t,
                    pageVisits: i,
                    currentState: n,
                    totalCount: l,
                    hasMore: d
                } = e, s = { ...n,
                    pageId: t.id,
                    totalCount: l,
                    hasMore: d
                };
                for (let e of i) {
                    let {
                        id: i,
                        user_id: n
                    } = e;
                    n in s || (s[n] = o()._.createChildStore(t, {
                        table: r().F9f,
                        id: i,
                        spaceId: (0, a().e)(t.pointer.spaceId)
                    }))
                }
                return s
            }
            async function c(e) {
                let {
                    environment: t,
                    blockStore: o,
                    spaceId: a,
                    timestamp: n,
                    type: l
                } = e, {
                    id: d
                } = t.currentUser, s = o.id, c = o.getSystemBlockTypeStore().getValue();
                if ((0, i(512845).kR)(c) || o.getParentTable() === r().C0E) return {
                    type: "skipped"
                };
                if (d && "passive" !== l) {
                    var u;
                    null == t || null == (u = t.mobileNative) || u.recordPageVisit(d, {
                        blockId: s,
                        spaceId: a,
                        visitedAt: n
                    }), i(715265).A.recordVisit({
                        id: s,
                        systemBlockType: c,
                        type: i(981324).ig.Default,
                        currentUserId: d
                    })
                }
                return await t.api.callApi({
                    eventName: "recordPageVisit",
                    environment: t,
                    data: {
                        block: {
                            id: s,
                            spaceId: a
                        },
                        timestamp: n,
                        type: l
                    },
                    headers: {
                        recordId: s,
                        spaceId: a
                    }
                })
            }
        },
        496722: (e, t, i) => {
            i.d(t, {
                a: () => o
            });

            function o() {
                let e = i(728372).AppStoreSidebarSpaceStore.state;
                return e ? e.id : void 0
            }
        },
        508523: (e, t, i) => {
            i.d(t, {
                C: () => r,
                v: () => a
            }), i(898992), i(354520), i(803949), i(581454);
            let o = (0, i(109939).YK)({
                webhookUrlError: {
                    id: "webhookActions.webhookUrlError",
                    defaultMessage: "Connection failed. Please wait and try again or try another URL."
                }
            });
            async function a(e) {
                let {
                    environment: t,
                    integration: a,
                    webhookUrl: r,
                    webhookSecret: n,
                    webhookHeaders: l,
                    webhookSubscriptionId: d,
                    onError: s,
                    onSuccess: c = () => {}
                } = e, u = i(728372).AppStoreCurrentUserRootStore.state, p = i(728372).AppStoreSidebarSpaceStore.state;
                if (!u || !p) return {
                    error: {
                        success: !1
                    }
                };
                let g = {};
                l.map(e => {
                    let {
                        key: t,
                        value: i
                    } = e;
                    return {
                        key: t.trim(),
                        value: String(i).trim()
                    }
                }).filter(({
                    key: e,
                    value: t
                }) => e && t).forEach(({
                    key: e,
                    value: t
                }) => {
                    g[e] = t
                });
                let f = {
                    headers: g
                };
                if ("failed" === (await t.api.callApi({
                        eventName: "testWebhookConnection",
                        environment: t,
                        data: {
                            integrationId: a.id,
                            webhookUrl: r,
                            webhookSecret: n || void 0,
                            webhookCustomization: f,
                            spaceId: p.id
                        }
                    })).type) return i(647095).f1(i(962299).A.formatMessage(o.webhookUrlError)), {
                    error: {
                        success: !1
                    }
                };
                let b = p.id,
                    {
                        serverCommitResult: h
                    } = (0, i(377796).createAndCommit)({
                        userAction: "webhookActions.createWebhookSubscription",
                        environment: t,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: b
                        },
                        perform: o => {
                            if (o.postSubmitCallbacks = [s], e.webhookSubscriptionId) {
                                let e = (0, i(328765).S)(),
                                    t = d && e ? i(62148).g.createChildStore(e, {
                                        id: d,
                                        table: i(923461).T,
                                        spaceId: e.id
                                    }) : void 0;
                                if (t) {
                                    let e = t.getWebhookUrl() !== r,
                                        l = t.getWebhookSecret() !== n,
                                        d = !i(381453).n4(t.getWebhookCustomization(), f);
                                    (e || l || d) && (i(691968).zW({
                                        integration_id: a.id,
                                        has_updated_webhook_url: e || void 0,
                                        has_updated_webhook_secret: l || void 0
                                    }), (0, i(173157).z)({
                                        transaction: o,
                                        data: {
                                            webhook_url: r,
                                            webhook_secret: n,
                                            webhook_customization: f,
                                            health: {
                                                status: "active"
                                            }
                                        },
                                        store: t
                                    }))
                                }
                            } else {
                                let e = (0, i(295447).Z1)({
                                    environment: t,
                                    table: i(890920).GP,
                                    spaceId: b
                                });
                                i(124937).vt({
                                    environment: t,
                                    table: i(890920).GP,
                                    args: {
                                        id: e,
                                        space_id: b,
                                        parent: {
                                            table: "space",
                                            id: p.id
                                        },
                                        type: "external",
                                        name: a.getName(),
                                        icon: a.getInfo().icon,
                                        integration_id: a.id,
                                        capabilities: a.getCapabilities(),
                                        createdBy: {
                                            table: i(514214).oo,
                                            id: u.id
                                        }
                                    },
                                    inMemoryRecordCache: p.inMemoryRecordCache,
                                    transaction: o
                                }), i(124937).vt({
                                    environment: t,
                                    table: i(923461).T,
                                    args: {
                                        id: (0, i(295447).Z1)({
                                            environment: t,
                                            spaceId: b,
                                            table: i(923461).T
                                        }),
                                        bot_id: e,
                                        space_id: b,
                                        parentPointer: {
                                            table: "space",
                                            id: p.id
                                        },
                                        createdByPointer: {
                                            table: i(514214).oo,
                                            id: u.id
                                        },
                                        api_version: i(623644).rj,
                                        webhook_url: r,
                                        webhook_secret: n,
                                        webhook_customization: f,
                                        health: {
                                            status: "active"
                                        }
                                    },
                                    inMemoryRecordCache: p.inMemoryRecordCache,
                                    transaction: o
                                }), i(691968).dm({
                                    integration_id: a.id,
                                    configuration_type: "manual",
                                    bot_id: e
                                })
                            }
                        }
                    });
                return await h, c(), {
                    value: {
                        success: !0
                    }
                }
            }
            async function r(e) {
                let t = i(218744).default.checkGate({
                        gateName: "webhooks_beta"
                    }),
                    {
                        environment: o,
                        spaceId: a
                    } = e;
                if (!o.currentUser.isLoggedIn() || !t) return {
                    webhookSubscriptionIds: [],
                    recordMap: {
                        __version__: 3
                    }
                };
                let r = await o.api.callCellCompatibleApi({
                    eventName: "getWebhookSubscriptions",
                    environment: o,
                    data: {
                        spaceId: a
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: a
                    }
                });
                if ("failed" === r.type) throw r.error;
                return r.data
            }
        },
        621928: (e, t, i) => {
            i.r(t), i.d(t, {
                generateImage: () => p
            });
            let o = "light",
                a = (0, i(632079).O4)({
                    theme: o
                }),
                r = a.text.tertiary,
                n = (0, i(109939).YK)({
                    builtWithNotion: {
                        id: "socialMediaPreview.madeWithNotion",
                        defaultMessage: "Made with Notion"
                    }
                });

            function l(e) {
                return new Promise((t, i) => {
                    let o = new Image;
                    o.onload = () => t(o), o.onerror = i, o.crossOrigin = "anonymous", o.src = e
                })
            }
            async function d({
                context: e,
                coverImageUrl: t,
                icon: r,
                coverPosition: n = .5
            }) {
                if (t) {
                    let o = await l(t),
                        a = .2 * o.width,
                        r = ((0, i(763230).Et)(n) ? 1 - n : .5) * (o.height - a);
                    e.drawImage(o, 0, r, o.width, a, 0, 0, 1200, 240)
                } else {
                    let t = (0, i(417317).b)({
                        icon: r,
                        themeMode: o
                    });
                    e.fillStyle = t ? (0, i(650342).X4)(t, .1) : a.home.cards.coverPhoto.base, e.fillRect(0, 0, 1200, 240), e.fillStyle = "rgb(0,0,0,1)"
                }
            }
            async function s({
                context: e,
                store: t,
                icon: o
            }) {
                if (o)
                    if ((0, i(312028).A)(o)) e.font = '200px "Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols', e.textAlign = (0, i(619157).A1)() ? "right" : "left", e.textBaseline = "top", e.fillText(o, (0, i(619157).A1)() ? 1104 : 96, 150);
                    else {
                        let a = i(587031).wY({
                                url: o,
                                baseUrl: i(986939).A.domainBaseUrl,
                                fullyQualified: !0,
                                permissionRecord: t.pointer,
                                width: 184,
                                userId: void 0
                            }),
                            r = await l(a);
                        e.drawImage(r, (0, i(619157).A1)() ? 1100 : 100, 145, 184, 184)
                    }
            }

            function c(e, t) {
                let o = i(699422).Wy.bold,
                    a = (0, i(699422).xf)({
                        pageFont: e,
                        locale: i(849917).locale
                    });
                return `${o} ${t}px ${a}`
            }

            function u({
                context: e,
                text: t,
                font: i,
                color: o,
                x: a,
                y: r,
                direction: n
            }) {
                e.font = i, e.textAlign = "ltr" === n ? "left" : "right", e.textBaseline = "top", e.direction = n, e.fillStyle = o, e.fillText(t, "ltr" === n ? a : 1200 - a, r)
            }
            async function p({
                store: e,
                environment: t
            }) {
                var o, a;
                if (e.pathIsDead() || !(0, i(688502).ot)((0, i(625925).E)(e)) || (0, i(336136).dL)(e) || e.inMemoryRecordCache.recordHasOverride({
                        pointer: e.pointer,
                        userId: t.currentUser.id
                    })) return;
                let l = i(247438).q4_(e.getTitleValue()) || "",
                    g = null == (o = e.getIcon()) ? void 0 : o.icon,
                    f = function(e, t) {
                        var o;
                        let a = null == (o = t.getCover()) ? void 0 : o.cover;
                        if (a) return i(587031).wY({
                            url: a,
                            width: 1200,
                            permissionRecord: t.pointer,
                            stripGoogleIconQuery: !0,
                            baseUrl: i(986939).A.domainBaseUrl,
                            fullyQualified: !1,
                            userId: e.currentUser.id
                        })
                    }(t, e),
                    b = e.getFormat(),
                    h = new OffscreenCanvas(1200, 630),
                    m = h.getContext("2d"),
                    {
                        title: w,
                        fontSize: _,
                        direction: y
                    } = function(e, t) {
                        let i = document.createElement("div");
                        i.dir = "auto", i.style.direction = "auto", i.style.width = "auto", i.style.position = "absolute", i.style.whiteSpace = "nowrap", i.style.font = c(t, 96), i.style.top = "110vh", i.innerText = e;
                        let o = document.body;
                        o.appendChild(i);
                        let a = "rtl" === window.getComputedStyle(i).direction ? "rtl" : "ltr";
                        if (i.clientWidth < 1e3) return o.removeChild(i), {
                            title: e,
                            fontSize: 96,
                            direction: a
                        };
                        if (i.style.font = c(t, 68), i.clientWidth < 1e3) return o.removeChild(i), {
                            title: e,
                            fontSize: 68,
                            direction: a
                        };
                        let r = e;
                        for (; i.clientWidth > 1e3;) r = r.substring(0, r.length - 1), i.innerText = `${r}…`;
                        return o.removeChild(i), {
                            title: `${r}…`,
                            fontSize: 68,
                            direction: a
                        }
                    }(l, b.page_font),
                    S = c(b.page_font, _),
                    v = 347 + 23 * !!g;
                if (m) {
                    let o, l;
                    m.fillStyle = "white", m.fillRect(0, 0, 1200, 630), await d({
                            context: m,
                            coverImageUrl: f,
                            icon: g,
                            coverPosition: b.page_cover_position
                        }), await s({
                            context: m,
                            store: e,
                            icon: g
                        }), u({
                            context: m,
                            text: w,
                            font: S,
                            color: "black",
                            x: 100,
                            y: v,
                            direction: y
                        }), u({
                            context: m,
                            text: i(962299).A.formatMessage(n.builtWithNotion),
                            font: (a = b.page_font, o = i(699422).Wy.medium, l = (0, i(699422).xf)({
                                pageFont: a,
                                locale: i(849917).locale
                            }), `${o} 40px ${l}`),
                            color: r,
                            x: 100,
                            y: v + 24 + _,
                            direction: (0, i(619157).A1)() ? "rtl" : "ltr"
                        }),
                        function({
                            store: e,
                            file: t,
                            environment: o
                        }) {
                            i(385475).QM({
                                environment: o,
                                file: t,
                                bucket: "secure",
                                record: e.pointer,
                                isFileBlock: !1,
                                onComplete: t => {
                                    (0, i(377796).createAndCommit)({
                                        userAction: "SocialMediaPreviewImageUploadStore.updateSocialMediaPreviewImage",
                                        environment: o,
                                        cellTarget: e.getSpaceId() ? {
                                            spaceWithId: e.getSpaceId()
                                        } : void 0,
                                        canUndo: !1,
                                        perform: o => {
                                            ! function(e) {
                                                let {
                                                    store: t,
                                                    url: o,
                                                    transaction: a
                                                } = e;
                                                (0, i(715144).z)({
                                                    stores: [t],
                                                    update: {
                                                        social_media_image_preview_url: o
                                                    },
                                                    transaction: a
                                                })
                                            }({
                                                store: e,
                                                url: t,
                                                transaction: o
                                            })
                                        }
                                    })
                                },
                                retryWhenOffline: !0
                            })
                        }({
                            store: e,
                            environment: t,
                            file: new File([await h.convertToBlob()], "SocialMediaPreviewImage.png", {
                                type: "image/png"
                            })
                        })
                }
            }
        },
        701328: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            var o = () => i(546605);
            class a extends o().Store {
                getInitialState() {
                    return {
                        loaded: !1,
                        loading: !1
                    }
                }
                integrations = new(i(345426)).ComputedStore(() => {
                    let e = this.state;
                    return e.loaded ? e.integrations : []
                }, {
                    debugName: "ComplianceIntegrationStore.integrations"
                });
                webhookSubscriptions = new(i(345426)).ComputedStore(() => {
                    let e = this.state;
                    return e.loaded ? e.webhookSubscriptions : []
                }, {
                    debugName: "ComplianceIntegrationStore.webhookSubscriptions"
                })
            }
            let r = new a;
            (0, i(202146).exposeDebugValue)("ComplianceIntegrationStore", r);
            let n = r
        }
    }
]);