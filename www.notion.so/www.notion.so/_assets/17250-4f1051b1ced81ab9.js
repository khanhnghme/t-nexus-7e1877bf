"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [17250], {
        727238: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var n = () => r(546605);
            class o extends n().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let a = new o
        },
        994869: (e, t, r) => {
            r.r(t), r.d(t, {
                activateFromLinkCreation: () => S,
                activateFromRedirect: () => x,
                close: () => I,
                getExternalBots: () => m,
                getFirstPartyAccountAccessToken: () => w,
                initializeExternalIntegrationStore: () => f,
                openPlaceholderMenu: () => E,
                refreshExternalIntegrationStore: () => b,
                setUnfurlingOptionType: () => v,
                startUnfurlRequest: () => y,
                startUnfurlRequestForCollection: () => A,
                startUnfurlRequestForExternalObjectInstancePage: () => k,
                transformExternalObjectInstanceBlockIntoMention: () => T,
                transformExternalObjectInstanceMentionIntoBlock: () => V,
                updateExternalObjectInstance: () => F
            }), r(16280), r(944114), r(898992), r(354520), r(672577), r(430670), r(803949), r(581454);
            var n = () => r(56477),
                o = () => r(11266),
                a = () => r(517013),
                i = () => r(993189),
                l = () => r(832375);
            async function c(e, t) {
                let {
                    access_token: n
                } = e;
                try {
                    await (0, r(197603).Ay)("https://cdn01.boxcdn.net/polyfills/core-js/2.5.3/core.min.js", {
                        resourceType: r(197603).vt.Javascript
                    });
                    let e = [{
                        url: "https://cdn01.boxcdn.net/platform/elements/15.0.0/en-US/picker.js",
                        resourcetype: r(197603).vt.Javascript
                    }, {
                        url: "https://cdn01.boxcdn.net/platform/elements/15.0.0/en-US/picker.css",
                        resourcetype: r(197603).vt.Stylesheet
                    }];
                    await Promise.all(e.map(({
                        url: e,
                        resourcetype: t
                    }) => (0, r(197603).Ay)(e, {
                        resourceType: t
                    })))
                } catch (e) {
                    t(!0, "");
                    return
                }
                let o = document.createElement("div");
                o.setAttribute("id", "box-app-container"), document.body.appendChild(o);
                let a = new Box.FilePicker;
                a.show("0", n, {
                    size: "small",
                    container: "#box-app-container",
                    maxSelectable: 1,
                    logoUrl: "box"
                });
                let i = () => {
                    a.hide(), o.remove()
                };
                a.addListener("choose", function(e) {
                    var r;
                    let n = null == e || null == (r = e[0]) ? void 0 : r.id;
                    n && t(!1, `https://app.box.com/file/${n}`), i()
                }), a.addListener("cancel", i)
            }
            var s = () => r(421439);
            let d = [r(49361).MN],
                u = (0, r(109939).YK)({
                    browse: {
                        id: "externalBlock.mediaPicker.browseTab.title",
                        defaultMessage: "Browse {appName}"
                    },
                    somethingWentWrong: {
                        defaultMessage: "Something went wrong.",
                        id: "externalActions.dialogError.openFilePicker.errorMessage"
                    },
                    copyDebuggingInformation: {
                        id: "externalActions.dialogItem.openFilePicker.copyDebugData",
                        defaultMessage: "Copy debugging information"
                    },
                    copiedDebuggingInfo: {
                        id: "externalActions.dialogError.copiedDebuggingInfo",
                        defaultMessage: "Copied to clipboard."
                    },
                    userReAuth: {
                        id: "externalActions.dialogError.userReAuth",
                        defaultMessage: "Authentication Expired. Please Re-Authenticate to continue."
                    }
                }),
                p = !1;
            async function f(e) {
                let {
                    environment: t,
                    spaceId: n,
                    force: o
                } = e;
                await r(728372).default.waitUntilRendered();
                let a = r(610463).A.state,
                    i = t.currentUser.id;
                if (!a.loaded && !a.loading || a.loaded && n !== a.spaceId || a.loaded && i !== a.userId || o) {
                    let e = !p;
                    e && (p = !0, r(680007).default.measureFromPageOrigin("external_integration_store.page_origin_to_loading", {})), r(610463).A.setState({ ...r(610463).A.state,
                        loading: !0
                    });
                    let [o, a] = await Promise.all([g({
                        environment: t,
                        spaceId: n
                    }), m({
                        environment: t,
                        spaceId: n
                    })]);
                    if ("success" !== o.type || "success" !== a.type) throw Error("Request failed.");
                    let i = r(412951).RecordMapWithRole.create(o.data.recordMap),
                        c = r(412951).RecordMapWithRole.create(a.data.recordMap);
                    r(610463).A.setState({
                        loaded: !0,
                        loading: !1,
                        spaceId: n,
                        userId: t.currentUser.id,
                        integrations: r(381453).Ul(r(381453).oE(o.data.integrationIds.map(e => i.getValue({
                            table: l().Lij,
                            id: e
                        }))), ({
                            created_at: e
                        }) => e),
                        externalAuthentications: r(381453).Ul(r(381453).oE(a.data.externalAuthenticationIds.map(e => c.getValue({
                            table: l().AsL,
                            id: e
                        }))), ({
                            created_at: e
                        }) => e),
                        bots: r(381453).My(r(381453).oE(a.data.botIds.map(e => c.getValue({
                            table: l().GPl,
                            id: e
                        }))), ({
                            last_edited_at: e,
                            created_at: t
                        }) => e || t, "desc"),
                        completeSlackAuthentications: r(381453).Ul(r(381453).oE(a.data.completeSlackAuthenticationIds.map(e => c.getValue({
                            table: l().AsL,
                            id: e
                        }))), ({
                            created_at: e
                        }) => e),
                        externalEntities: r(381453).Ul(r(381453).oE(a.data.externalEntityIds.map(e => c.getModel({
                            table: l().$MF,
                            id: e
                        }))), ({
                            created_at: e
                        }) => e)
                    }), e && (p = !0, r(680007).default.measureFromPageOrigin("external_integration_store.page_origin_to_ready", {}))
                }
            }
            async function g(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e, o = r(680007).default.mark("external_integration_store.get_external_integrations"), a = await t.api.callCellCompatibleApi({
                    eventName: "getExternalIntegrations",
                    environment: t,
                    data: {
                        spaceId: n
                    },
                    cellNavigation: {
                        spaceId: n
                    }
                });
                return "success" === a.type && r(680007).default.measure(o, {}), a
            }
            async function m(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                if (!t.currentUser.isLoggedIn()) return {
                    type: "success",
                    status: 200,
                    headers: {},
                    data: {
                        botIds: [],
                        externalAuthenticationIds: [],
                        recordMap: {},
                        completeSlackAuthenticationIds: [],
                        externalEntityIds: []
                    }
                };
                let o = r(680007).default.mark("external_integration_store.get_user_space_external_bots"),
                    a = await t.api.callCellCompatibleApi({
                        eventName: "getUserSpaceExternalBots",
                        environment: t,
                        data: {
                            spaceId: n
                        },
                        cellNavigation: {
                            spaceId: n
                        }
                    });
                return "success" === a.type && r(680007).default.measure(o, {}), a
            }
            async function b(e) {
                let {
                    environment: t
                } = e, n = r(728372).AppStoreSidebarSpaceStore.state;
                n && await f({
                    environment: t,
                    spaceId: n.id,
                    force: !0
                })
            }

            function S(e) {
                var t;
                let n, o, {
                        environment: a,
                        blockStore: i,
                        textStore: c,
                        url: s,
                        textValueBeforePaste: d,
                        urlSelection: u
                    } = e,
                    p = r(239134).get();
                if (!i || r(994872).A.state.open || r(498368).Ay.state.open || r(727238).A.state.open || !p) return !1;
                let f = i.getSpaceStore(),
                    g = (0, r(939438).US)(s),
                    m = (0, r(758654).qg)(g);
                if (!m.host) return !1;
                let b = a.currentUser.id;
                if (!(null != f && f.isDefined()) || !b) return !1;
                let S = f.id,
                    I = r(610463).A.integrations.state.filter(e => e.id !== r(49361).ob),
                    _ = (0, r(375905).$B)({
                        url: g,
                        integrations: I,
                        currentSpaceId: S
                    });
                if ("partial" === _.type) return function(e) {
                    let {
                        parsedUrl: t,
                        urlDomain: n,
                        integrationId: o
                    } = e;
                    r(691968).FO({
                        integrationId: o,
                        urlDomain: n
                    }), r(773352).log({
                        level: "debug",
                        from: "activateFromLinkCreation",
                        type: "linkPreviewUrlMiss",
                        data: {
                            miscDataToConvertToString: {
                                integrationId: o,
                                urlDomain: n,
                                path: t.path
                            }
                        }
                    })
                }({ ..._,
                    integrationId: _.integration.id
                }), !1;
                if ("failure" === _.type) return !1;
                let {
                    integration: x,
                    pattern: k
                } = _;
                if (!(0, r(993077).dp)(f, b).isWorkspaceOwner() && !(0, r(573143).nH)({
                        spaceBotSettings: f.getBotSettingsStore().getValue(),
                        integrationId: x.id
                    })) return !1;
                let A = (0, r(88937).jw)(x.id),
                    C = h({
                        blockStore: i,
                        integration: x,
                        pattern: k,
                        textValueBeforePaste: d
                    }),
                    w = r(239134).getRect(p);
                if (!w) return !1;
                let O = i.getRecordStoreUIParent();
                if (!O || !(0, r(966980).iU)(O)) return !1;
                let P = new(r(870941)).A({
                    name: "unfurlingActions.activateFromLinkCreation",
                    isTemporaryData: !0
                });
                a.defaultRecordCache.inMemoryRecordCache.addCacheOverride(P);
                let j = O.clone(P),
                    B = i.clone(P),
                    U = c.table === l().evP && c === (null == (t = (0, r(534012).T)(c)) ? void 0 : t.getBlockTitleStore()) ? B.getBlockTitleStore() : c.clone(P),
                    E = (0, r(295447).JH)({
                        environment: a,
                        table: l().evP,
                        spaceId: S
                    }),
                    R = new(r(970831)).B(a, E),
                    M = R.clone(P),
                    T = r(381453).y1(r(375905).MV).map(() => new(r(970831)).B(a, {
                        table: l().evP,
                        id: (0, r(295447).Z1)({
                            environment: a,
                            table: l().evP,
                            spaceId: S
                        }),
                        spaceId: S
                    })),
                    V = T.map(e => e.clone(P)),
                    F = new(r(356912)).m(a, (0, r(295447).JH)({
                        environment: a,
                        table: l().VlP,
                        spaceId: S
                    })),
                    N = F.clone(P),
                    W = (n = k.defaultViews ? k.defaultViews.map(e => new(r(547131)).p(a, (0, r(295447).JH)({
                        environment: a,
                        table: l().Gy1,
                        spaceId: S
                    }))) : [new(r(547131)).p(a, (0, r(295447).JH)({
                        environment: a,
                        table: l().Gy1,
                        spaceId: S
                    }))]).map(e => e.clone(P)),
                    z = r(381453).y1(r(375905).MV).map(() => new(r(356912)).m(a, (0, r(295447).JH)({
                        environment: a,
                        table: l().VlP,
                        spaceId: S
                    }))),
                    q = z.map(e => e.clone(P)),
                    D = r(381453).y1(r(375905).MV).map(() => new(r(547131)).p(a, (0, r(295447).JH)({
                        environment: a,
                        table: l().Gy1,
                        spaceId: S
                    }))),
                    H = D.map(e => e.clone(P));
                return r(727238).A.setState({
                    open: !0,
                    url: g,
                    textValueBeforePaste: d,
                    textValueAfterPaste: c.getValue(),
                    urlSelection: u,
                    renderRect: w,
                    integration: x,
                    pattern: k,
                    currentOption: {
                        type: "link"
                    },
                    allOptionTypes: C,
                    temporaryRecordCache: P,
                    stores: {
                        blockStore: i,
                        blockParentStore: O,
                        textStore: c,
                        externalObjectInstanceBlockStore: R,
                        subExternalObjectInstanceBlockStores: T,
                        externalCollectionStore: F,
                        externalCollectionViewStores: n,
                        subExternalCollectionStores: z,
                        subExternalCollectionViewStores: D
                    },
                    temporaryStores: {
                        blockParentStore: j,
                        blockStore: B,
                        textStore: U,
                        externalObjectInstanceBlockStore: M,
                        subExternalObjectInstanceBlockStores: V,
                        externalCollectionStore: N,
                        externalCollectionViewStores: W,
                        subExternalCollectionStores: q,
                        subExternalCollectionViewStores: H
                    },
                    unfurlResponse: void 0
                }), A.length > 0 && y({
                    environment: a,
                    url: s,
                    botIds: A.map(({
                        id: e
                    }) => e),
                    integrationId: x.id,
                    externalObjectInstanceBlockStore: R
                }), r(691968).Ki({
                    integrationId: x.id,
                    entity: k.name,
                    domain: m.host,
                    from: "link_paste"
                }), o = "import" === C[0] ? "link" : C[0], r(374176).default.afterNextFlush(() => {
                    let e = "drive" !== o;
                    (0, r(377796).createAndCommit)({
                        userAction: "unfurlingActions.activateFromLinkCreation",
                        environment: a,
                        canUndo: !e,
                        cellTarget: {
                            spaceWithId: S
                        },
                        perform: t => {
                            v({
                                environment: a,
                                type: o,
                                useTemporaryRecordCache: e,
                                transaction: t,
                                intl: r(962299).A.getIntl()
                            })
                        }
                    })
                }), !0
            }

            function I(e) {
                let {
                    environment: t,
                    setType: n,
                    transaction: o
                } = e, a = r(728372).AppStoreCurrentUserSettingsStore.state, i = (0, r(830479).y)(t), l = r(727238).A.state;
                if (!l.open) return;
                t.defaultRecordCache.inMemoryRecordCache.removeCacheOverride(l.temporaryRecordCache);
                let c = (0, r(88937).jw)(l.integration.id).length > 0;
                if (v({
                        environment: t,
                        type: n || l.currentOption.type,
                        useTemporaryRecordCache: !1,
                        transaction: o,
                        intl: r(962299).A.getIntl()
                    }), ! function() {
                        let e = r(727238).A.state;
                        if (!e.open) return;
                        let {
                            unfurlResponse: t
                        } = e, {
                            type: n
                        } = e.currentOption, {
                            host: o
                        } = (0, r(758654).qg)((0, r(939438).US)(e.url));
                        o && r(691968).lR({
                            integrationId: e.integration.id,
                            type: n,
                            entity: e.pattern.name,
                            domain: o,
                            from: "unfurl_menu",
                            ...t && {
                                status: null != t && t.root.error ? "failure" : "success"
                            },
                            collection_id: "collection" === n ? e.stores.externalCollectionStore.pointer.id : void 0,
                            collection_view_block_id: "collection" === n && e.stores.blockStore.isCollectionView() ? e.stores.blockStore.id : void 0
                        })
                    }(), "preview" === l.currentOption.type)(0, r(854924).t)({
                    environment: t,
                    stores: [l.currentOption.externalObjectInstanceBlockStore]
                });
                else if ("drive" === l.currentOption.type) {
                    var s, d, u, p, f;
                    let e = r(758654).qg(l.url, {
                            slashesDenoteHost: !0
                        }),
                        n = e.href;
                    if (null != (s = e.hostname) && s.includes("docs.google.com") && (null != (d = e.pathname) && d.includes("presentation") || null != (u = e.pathname) && u.includes("document") || null != (p = e.pathname) && p.includes("spreadsheets")) && null != (f = e.pathname) && f.includes("/edit")) {
                        let t = e.pathname.replace("/edit", "/preview");
                        n = r(758654).Gm({
                            url: `https://${e.hostname}${t}`,
                            query: { ...e.query
                            },
                            hash: e.hash || void 0
                        })
                    } else n = (0, r(939438).US)(n);
                    r(556533).Fy(t, {
                        embeddedUrl: {
                            originUrl: n
                        },
                        isDataURL: !1,
                        store: l.stores.blockStore,
                        pageWidth: i,
                        preferredType: "drive"
                    })
                }
                l.integration && !c && ((null == a ? void 0 : a.hasDismissedIntegrationPopup({
                    integrationId: l.integration.id
                })) || r(336987).A.setState({
                    open: !0,
                    integration: l.integration,
                    externalObjectInstanceBlockId: l.stores.externalObjectInstanceBlockStore.id,
                    unfurlUrl: l.url
                })), _({
                    environment: t,
                    integrationId: l.integration.id,
                    blockStore: l.stores.externalObjectInstanceBlockStore,
                    unfurlResponse: l.unfurlResponse
                }), r(727238).A.setState({
                    open: !1
                })
            }
            async function _({
                environment: e,
                integrationId: t,
                blockStore: n,
                unfurlResponse: o
            }) {
                var a;
                o && t === r(49361).Hd && (null == (a = o.root.error) ? void 0 : a.status_code) === 428 && await (0, r(170612).R)({
                    environment: e,
                    store: n,
                    url: o.root.uri || ""
                })
            }

            function h(e) {
                var t;
                let n, {
                        integration: o,
                        pattern: a,
                        blockStore: i,
                        textValueBeforePaste: l
                    } = e,
                    c = i && i.getType() === r(955630).xd.text && 0 === (0, r(247438).q4_)(l).trim().length,
                    {
                        hasServerDeterminedOptionTypes: s,
                        canUnfurlAsCollection: u,
                        canUnfurlAsImport: p
                    } = {
                        hasServerDeterminedOptionTypes: n = !!(o && d.includes(o.id)),
                        canUnfurlAsCollection: !!(!n && (null == a || null == (t = a.additional_types) ? void 0 : t.collection)),
                        canUnfurlAsImport: !!(o && function(e, t) {
                            switch (e.id) {
                                case r(49361).MN:
                                    return !0;
                                case r(49361).Hd:
                                    return t && "google_docs" === t.name;
                                case r(49361).mn:
                                    return t && "Report" === t.name;
                                default:
                                    return !1
                            }
                        }(o, a))
                    };
                if (o)
                    if (!c) return r(381453).oE(["mention", "preview", "link", (s || u) && "collection", p && "import"]);
                    else {
                        let e = r(218744).default.getConfigKey("link_paste_order", (null == o ? void 0 : o.id) || "defaultOrder");
                        return e ? (u && !e.order.includes("collection") && e.order.splice(e.order.length - 1, 0, "collection"), p && !e.order.includes("import") && e.order.push("import"), r(381453).oE(e.order)) : r(381453).oE(["preview", "mention", "link", (s || u) && "collection", p && "import"])
                    }
                return c ? r(381453).oE(["preview", "mention", "link", (s || u) && "collection", p && "import"]) : r(381453).oE(["mention", "preview", "link", (s || u) && "collection", p && "import"])
            }

            function v(e) {
                let {
                    environment: t,
                    type: a,
                    transaction: c,
                    useTemporaryRecordCache: s
                } = e, d = r(727238).A.state;
                if (!d.open) return;
                let u = d.integration.id,
                    p = t.currentUser.id,
                    f = r(728372).AppStoreSidebarSpaceStore.state;
                if (!p || !(null != f && f.isDefined())) return;
                let g = f.id,
                    m = s ? d.temporaryStores : d.stores;
                if (s)
                    for (let e in d.temporaryRecordCache.clearCache(), d.temporaryStores) {
                        let r = d.temporaryStores[e];
                        for (let e of Array.isArray(r) ? r : [r]) {
                            let r = {
                                    userId: p,
                                    pointer: e.pointer
                                },
                                a = t.defaultRecordCache.inMemoryRecordCache.getRecord(r);
                            a ? (0, o().P)({
                                currentUserId: t.currentUser.id,
                                defaultRecordCache: t.defaultRecordCache,
                                inMemoryRecordCache: d.temporaryRecordCache,
                                pointer: e.pointer,
                                model: i().Bj6.fromValue(e.pointer.table, a.value),
                                role: a.role,
                                updatePaths: [
                                    []
                                ],
                                userId: p,
                                force: !0,
                                debugSource: "setUnfurlingOptionType"
                            }) : (0, n().o)({
                                inMemoryRecordCache: d.temporaryRecordCache,
                                persistedRecordCache: void 0,
                                pointer: e.pointer,
                                userId: p
                            })
                        }
                    }
                let b = (0, r(939438).US)(d.url),
                    {
                        host: S
                    } = (0, r(758654).qg)(b);
                if (S) {
                    if ("preview" === a || "mention" === a) {
                        let e, n = {
                                original_url: b,
                                domain: S
                            },
                            {
                                unfurlResponse: o
                            } = d;
                        if (o) {
                            let a = (0, r(722371).MU)(r(381453).oE(o.relations.map((e, n) => {
                                    if (e.external_schema) return;
                                    let o = m.subExternalObjectInstanceBlockStores[n];
                                    if (o) return (0, r(148337).MX)(!o.isDefined(), "Sub external object instance store should not have a value before creation"), r(124937).Wv({
                                        environment: t,
                                        id: o.id,
                                        type: r(955630).xd.externalObjectInstance,
                                        spaceId: g,
                                        format: e,
                                        inMemoryRecordCache: o.inMemoryRecordCache,
                                        transaction: c
                                    }), (0, r(173157).z)({
                                        store: o,
                                        data: {
                                            parent_table: l().evP,
                                            parent_id: m.externalObjectInstanceBlockStore.id,
                                            alive: !0
                                        },
                                        transaction: c
                                    }), [e.uri, o.id]
                                }))),
                                {
                                    external_object_id: i,
                                    uri: s,
                                    bot_id: d
                                } = o.root;
                            if (i && s && d) e = { ...n,
                                ...o.root,
                                external_schema: void 0,
                                related_external_object_uris_to_instance_ids: a,
                                external_object_id: i,
                                uri: s,
                                bot_id: d
                            };
                            else {
                                var I;
                                e = { ...n,
                                    attributes: o.root.attributes,
                                    error: o.root.error,
                                    auth_refresh_in_progress: (null == (I = o.root.error) ? void 0 : I.status_code) === 439 || null
                                }
                            }
                        } else e = n;
                        r(218744).default.checkGate({
                            gateName: "unfurl_disable_store_verify"
                        }) || (0, r(148337).MX)(!m.externalObjectInstanceBlockStore.isDefined(), "Preview/mention menu external object instance store should not have a value before creation"), r(124937).Wv({
                            environment: t,
                            id: m.externalObjectInstanceBlockStore.id,
                            type: r(955630).xd.externalObjectInstance,
                            format: e,
                            inMemoryRecordCache: m.externalObjectInstanceBlockStore.inMemoryRecordCache,
                            transaction: c
                        })
                    } else if ("collection" === a) {
                        let e, {
                                unfurlResponse: n
                            } = d,
                            o = m.externalCollectionStore.pointer,
                            a = m.externalCollectionViewStores.map((e, t) => {
                                var r, n, o;
                                return {
                                    id: e.id,
                                    version: 0,
                                    space_id: g,
                                    type: (null == (r = d.pattern.defaultViews) ? void 0 : r[t].type) || "table",
                                    format: null == (n = d.pattern.defaultViews) ? void 0 : n[t].format,
                                    query2: null == (o = d.pattern.defaultViews) ? void 0 : o[t].query2,
                                    parent_table: l().evP,
                                    parent_id: m.externalObjectInstanceBlockStore.id,
                                    alive: !0
                                }
                            }),
                            i = (0, r(59651).l)(u);
                        if (!i || (0, r(630131).Y)(t, {
                                spaceId: null == f ? void 0 : f.id,
                                userId: t.currentUser.id,
                                name: i
                            }))
                            if (n) {
                                let {
                                    external_object_id: t,
                                    uri: a,
                                    bot_id: i
                                } = n.root;
                                if (t && a && i)
                                    if ("collectionId" in n && n.collectionId) e = {
                                        id: n.collectionId,
                                        version: 0,
                                        space_id: g,
                                        parent_table: l().evP,
                                        parent_id: m.externalObjectInstanceBlockStore.id,
                                        alive: !0,
                                        schema: {}
                                    }, o = {
                                        id: n.collectionId,
                                        table: l().VlP,
                                        spaceId: g
                                    };
                                    else {
                                        let t = {};
                                        n.relations.forEach((e, n) => {
                                            let o = m.subExternalCollectionStores[n],
                                                a = {
                                                    id: o.id,
                                                    version: 0,
                                                    space_id: g,
                                                    parent_table: l().VlP,
                                                    parent_id: m.externalCollectionStore.id,
                                                    alive: !0,
                                                    format: e,
                                                    schema: {}
                                                };
                                            t[e.uri] = o.id, (0, r(173157).z)({
                                                store: o,
                                                data: a,
                                                transaction: c
                                            })
                                        }), e = {
                                            id: m.externalCollectionStore.id,
                                            version: 0,
                                            space_id: g,
                                            parent_table: l().evP,
                                            parent_id: m.externalObjectInstanceBlockStore.id,
                                            alive: !0,
                                            format: {
                                                original_url: b,
                                                domain: S,
                                                ...n.root,
                                                related_external_object_uris_to_instance_ids: { ...t
                                                }
                                            },
                                            schema: {}
                                        }
                                    }
                                else e = {
                                    id: m.externalCollectionStore.id,
                                    version: 0,
                                    space_id: g,
                                    parent_table: l().evP,
                                    parent_id: m.externalObjectInstanceBlockStore.id,
                                    alive: !0,
                                    format: {
                                        original_url: b,
                                        domain: S,
                                        error: n.root.error
                                    },
                                    schema: {}
                                }
                            } else e = {
                                id: m.externalCollectionStore.id,
                                version: 0,
                                space_id: g,
                                parent_table: l().evP,
                                parent_id: m.externalObjectInstanceBlockStore.id,
                                alive: !0,
                                format: {
                                    original_url: b,
                                    domain: S
                                },
                                schema: {}
                            };
                        else e = {
                            id: m.externalCollectionStore.id,
                            version: 0,
                            space_id: g,
                            parent_table: l().evP,
                            parent_id: m.externalObjectInstanceBlockStore.id,
                            alive: !0,
                            format: {
                                is_placeholder: !0,
                                integration_id: u
                            },
                            schema: {}
                        };
                        (0, r(148337).MX)(!m.externalObjectInstanceBlockStore.isDefined(), "Collection menu external object instance store should not have a value before creation");
                        let s = r(124937).Wv({
                            environment: t,
                            id: m.externalObjectInstanceBlockStore.id,
                            type: r(955630).xd.collectionView,
                            format: {
                                collection_pointer: o,
                                collection_pointers: [o]
                            },
                            spaceId: g,
                            inMemoryRecordCache: m.externalObjectInstanceBlockStore.inMemoryRecordCache,
                            transaction: c
                        });
                        (0, r(173157).z)({
                            store: s,
                            data: {
                                collection_id: o.id,
                                parent_table: l().evP,
                                parent_id: m.blockParentStore.id,
                                alive: !0,
                                view_ids: m.externalCollectionViewStores.map(e => e.id)
                            },
                            transaction: c
                        });
                        let p = U();
                        m.externalCollectionViewStores.forEach((e, t) => {
                            n && "collectionId" in n && n.collectionId && a[t].format && (a[t].format = {
                                collection_pointer: {
                                    id: n.collectionId,
                                    table: l().VlP
                                }
                            }), p && n && "table" === a[t].type && (a[t].format = { ...a[t].format,
                                table_properties: M(n.root.external_schema)
                            }), (0, r(173157).z)({
                                store: e,
                                data: a[t],
                                transaction: c
                            })
                        }), (0, r(173157).z)({
                            store: m.externalCollectionStore,
                            data: e,
                            transaction: c
                        });
                        let I = d.integration;
                        r(374176).default.afterNextFlush(() => {
                            let e = r(496704).K.findCollectionViewBlockFromId(m.externalObjectInstanceBlockStore.id);
                            if (e && "collectionContextStore" in e) {
                                let t = e.collectionContextStore.settingsStore;
                                (0, r(132425).R)({
                                    collectionSettingsStore: t,
                                    item: {
                                        type: "shareSyncedView",
                                        integrationName: I.name,
                                        integrationIcon: I.info.icon
                                    }
                                })
                            }
                        })
                    }
                    if ("preview" === a) {
                        r(41403).R9({
                            environment: t,
                            store: m.textStore,
                            value: d.textValueBeforePaste,
                            transaction: c
                        });
                        let e = r(970831).B.createChildStore(m.blockParentStore, m.externalObjectInstanceBlockStore.pointer);
                        if ((0, r(51929).W)({
                                parentStore: m.blockParentStore,
                                insertStore: e,
                                afterStore: m.blockStore,
                                transaction: c
                            }), 0 === (0, r(247438).q4_)(d.textValueBeforePaste).trim().length) {
                            let e = r(970831).B.createChildStore(m.blockParentStore, d.stores.blockStore.pointer);
                            (0, r(818646).T)({
                                parentStore: m.blockParentStore,
                                childToRemoveStore: e,
                                transaction: c
                            })
                        }
                        let n = r(970831).B.createChildStore(d.stores.blockParentStore, d.stores.externalObjectInstanceBlockStore.pointer);
                        (0, r(471e3).I)({
                            environment: t
                        }), r(727238).A.setState({ ...d,
                            currentOption: {
                                type: a,
                                externalObjectInstanceBlockStore: n
                            }
                        })
                    } else if ("mention" === a) {
                        let e = (0, r(247438).bMp)(m.externalObjectInstanceBlockStore.id),
                            n = (0, r(247438).wmz)(e),
                            o = (0, r(247438).xym)(d.textValueBeforePaste, [n], d.urlSelection.startIndex),
                            a = {
                                startIndex: d.urlSelection.startIndex + 1,
                                endIndex: d.urlSelection.startIndex + 1
                            };
                        r(41403).R9({
                            environment: t,
                            store: m.textStore,
                            value: o,
                            transaction: c
                        }), (0, r(173157).z)({
                            store: m.externalObjectInstanceBlockStore,
                            data: {
                                parent_id: m.textStore.id,
                                parent_table: l().evP,
                                alive: !0
                            },
                            transaction: c
                        }), (0, r(182553).h)({
                            environment: t,
                            store: d.stores.blockStore
                        }), (0, r(627974).t)({
                            store: d.stores.textStore,
                            selection: a
                        }), r(727238).A.setState({ ...d,
                            currentOption: {
                                type: "mention",
                                mentionTokenSelection: a
                            }
                        })
                    } else if ("link" === a) r(727238).A.setState({ ...d,
                        currentOption: {
                            type: "link"
                        }
                    }), (0, r(182553).h)({
                        environment: t,
                        store: d.stores.blockStore
                    }), (0, r(627974).t)({
                        store: d.stores.textStore,
                        selection: {
                            startIndex: d.urlSelection.endIndex,
                            endIndex: d.urlSelection.endIndex
                        }
                    });
                    else if ("drive" === a) r(727238).A.setState({ ...d,
                        currentOption: {
                            type: "drive"
                        }
                    }), (0, r(182553).h)({
                        environment: t,
                        store: d.stores.blockStore
                    }), (0, r(627974).t)({
                        store: d.stores.textStore,
                        selection: {
                            startIndex: d.urlSelection.endIndex,
                            endIndex: d.urlSelection.endIndex
                        }
                    });
                    else if ("collection" === a) {
                        r(41403).R9({
                            environment: t,
                            store: m.textStore,
                            value: d.textValueBeforePaste,
                            transaction: c
                        });
                        let e = r(970831).B.createChildStore(m.blockParentStore, m.externalObjectInstanceBlockStore.pointer);
                        if ((0, r(51929).W)({
                                parentStore: m.blockParentStore,
                                insertStore: e,
                                afterStore: m.blockStore,
                                transaction: c
                            }), 0 === (0, r(247438).q4_)(d.textValueBeforePaste).trim().length) {
                            let e = r(970831).B.createChildStore(m.blockParentStore, d.stores.blockStore.pointer);
                            (0, r(818646).T)({
                                parentStore: m.blockParentStore,
                                childToRemoveStore: e,
                                transaction: c
                            })
                        }(0, r(471e3).I)({
                            environment: t
                        }), r(727238).A.setState({ ...d,
                            currentOption: {
                                type: a
                            }
                        })
                    } else(0, r(722371).HB)(a)
                }
            }
            async function x(e) {
                let {
                    environment: t,
                    notionState: n
                } = e, {
                    externalObjectInstanceBlockId: o,
                    spaceId: a
                } = n;
                if (o) {
                    let e, n = new(r(970831)).B(t, {
                        table: l().evP,
                        id: o,
                        spaceId: a
                    });
                    if (await Promise.all([n.load(), r(610463).A.waitUntil(() => r(610463).A.state.loaded)]), n.isExternalObjectInstanceBlockStore() || n.isExternalObjectInstancePageBlockStore()) e = n.getFormat();
                    else if (n.isCollectionView()) {
                        var i;
                        e = null == (i = n.getCollectionStoreIfSingleSource()) ? void 0 : i.getFormat()
                    }
                    if (!e) throw Error("External object instance has no value.");
                    let c = e.original_url || e.uri;
                    if (!c) throw Error("External object instance has no original_url.");
                    let s = (0, r(375905).$B)({
                        url: c,
                        integrations: r(610463).A.integrations.state,
                        currentSpaceId: a
                    });
                    if ("success" !== s.type) throw Error("Could not find integration.");
                    let {
                        integration: d
                    } = s, u = (0, r(88937).jw)(d.id);
                    if (0 === u.length) throw Error("Could not find bot.");
                    if (n.isExternalObjectInstanceBlockStore() || n.isExternalObjectInstancePageBlockStore()) await y({
                        environment: t,
                        url: c,
                        botIds: u.map(({
                            id: e
                        }) => e),
                        integrationId: d.id,
                        externalObjectInstanceBlockStore: n
                    });
                    else if (n.isCollectionView()) {
                        let e = n.getCollectionStoreIfSingleSource();
                        if (!e) throw Error("Could not find collection store.");
                        await A({
                            environment: t,
                            url: c,
                            botIds: u.map(({
                                id: e
                            }) => e),
                            externalCollectionViewBlockStore: n,
                            externalCollectionStore: e,
                            integrationId: d.id
                        })
                    } else throw Error(`BlockStore is neither an ExternalObject nor a ExternalCollection. It has type: ${n.getType()}`)
                }
            }
            async function y(e) {
                let {
                    environment: t,
                    url: n,
                    botIds: o,
                    integrationId: a,
                    externalObjectInstanceBlockStore: i
                } = e;
                r(71997).A.add(n);
                let c = await t.api.callApi({
                    eventName: "unfurlUrl",
                    environment: t,
                    data: {
                        url: n,
                        botIds: o,
                        integrationId: a,
                        spaceId: (0, r(496722).a)()
                    }
                });
                r(71997).A.delete(n);
                let s = r(727238).A.state,
                    u = "success" === c.type ? c.data : {
                        root: {
                            error: {
                                status_code: c.status
                            }
                        },
                        relations: []
                    };
                if (s.open && s.stores.externalObjectInstanceBlockStore === i) {
                    r(727238).A.setState({ ...s,
                        unfurlResponse: u
                    });
                    let e = function(e, t, r) {
                        if (d.includes(e) && "collection" === r)
                            if (!t.root.hasOwnProperty("external_schema")) return "preview";
                            else return "collection";
                        return "import" === r ? "link" : r
                    }(a, u, s.currentOption.type);
                    (0, r(377796).createAndCommit)({
                        userAction: "unfurlingActions.startUnfurlRequest",
                        environment: t,
                        canUndo: !1,
                        cellTarget: i.pointer.spaceId ? {
                            spaceWithId: i.pointer.spaceId
                        } : void 0,
                        perform: n => {
                            v({
                                environment: t,
                                type: e,
                                useTemporaryRecordCache: !0,
                                transaction: n,
                                intl: r(962299).A.getIntl()
                            })
                        }
                    })
                } else {
                    if (i.isExternalObjectInstanceBlockStore())(function(e) {
                            let {
                                environment: t,
                                unfurlResponse: n,
                                url: o,
                                externalObjectInstanceBlockStore: a
                            } = e, i = a.pointer.spaceId;
                            if (!t.currentUser.id) return;
                            let c = (0, r(939438).US)(o),
                                {
                                    host: s
                                } = (0, r(758654).qg)(c);
                            if (!s || "collectionId" in n) return;
                            let d = a.getFormat().related_external_object_uris_to_instance_ids,
                                u = (0, r(722371).MU)(Object.entries(d || {}).map(([e, t]) => [e, r(970831).B.createChildStore(a, {
                                    id: t,
                                    table: l().evP,
                                    spaceId: a.getSpaceId()
                                })]));
                            (0, r(377796).createAndCommit)({
                                userAction: "unfurlingActions.createExternalObjectInstanceFromInitialUnfurl",
                                environment: t,
                                canUndo: !0,
                                cellTarget: i ? {
                                    spaceWithId: i
                                } : void 0,
                                perform: e => {
                                    let c, s, d = (0, r(722371).MU)(r(381453).oE(n.relations.map(n => {
                                            if (n.external_schema) return;
                                            let o = u[n.uri];
                                            return o ? ((0, r(173157).z)({
                                                store: o,
                                                data: {
                                                    type: r(955630).xd.externalObjectInstance,
                                                    parent_table: l().evP,
                                                    parent_id: a.id,
                                                    alive: !0
                                                },
                                                transaction: e
                                            }), (0, r(173157).z)({
                                                store: o.getFormatStore(),
                                                data: n,
                                                transaction: e
                                            })) : (o = r(124937).Wv({
                                                environment: t,
                                                type: r(955630).xd.externalObjectInstance,
                                                spaceId: i,
                                                format: n,
                                                inMemoryRecordCache: a.inMemoryRecordCache,
                                                transaction: e
                                            }), (0, r(173157).z)({
                                                store: o,
                                                data: {
                                                    parent_table: l().evP,
                                                    parent_id: a.id,
                                                    alive: !0
                                                },
                                                transaction: e
                                            })), [n.uri, o.id]
                                        }))),
                                        p = a.getFormatStore().getValue();
                                    p && (c = p.block_width, s = p.block_height), (0, r(173157).z)({
                                        store: a.getFormatStore(),
                                        data: { ...{ ...n.root,
                                                block_width: c,
                                                block_height: s,
                                                external_schema: void 0,
                                                integration_id: null,
                                                original_url: o,
                                                is_placeholder: null,
                                                error: n.root.error ? ? null
                                            },
                                            related_external_object_uris_to_instance_ids: d
                                        },
                                        transaction: e
                                    })
                                }
                            })
                        })({
                            environment: t,
                            unfurlResponse: u,
                            url: n,
                            externalObjectInstanceBlockStore: i
                        }),
                        function(e) {
                            let {
                                url: t,
                                spaceId: n,
                                status: o
                            } = e, a = (0, r(939042).g8)(t, n), i = (0, r(939438).US)(t), l = (0, r(758654).qg)(i);
                            a && l.host && r(691968).lR({
                                integrationId: a.integration.id,
                                type: "preview",
                                entity: a.pattern.name,
                                domain: l.host,
                                from: "link_preview_placeholder",
                                ...o && {
                                    status: o
                                }
                            })
                        }({
                            url: n,
                            spaceId: i.getSpaceId(),
                            ...u && {
                                status: u.root.error ? "failure" : "success"
                            }
                        });
                    else if (i.isCollectionView()) {
                        let e = i.getCollectionStoreIfSingleSource();
                        if (!e) throw Error("Could not find collection store.");
                        (0, r(377796).createAndCommit)({
                            userAction: "unfurlingActions.startUnfurlRequest",
                            environment: t,
                            canUndo: !0,
                            cellTarget: i.pointer.spaceId ? {
                                spaceWithId: i.pointer.spaceId
                            } : void 0,
                            perform: r => {
                                C({
                                    environment: t,
                                    unfurlResponse: u,
                                    url: n,
                                    externalCollectionStore: e,
                                    externalCollectionViewBlockStore: i,
                                    transaction: r,
                                    integrationId: a
                                })
                            }
                        })
                    } else if (i.isExternalObjectInstancePageBlockStore()) return;
                    else throw Error(`BlockStore is neither an ExternalObject nor a ExternalCollection. It has type: ${i.getType()}`);
                    _({
                        environment: t,
                        integrationId: a,
                        blockStore: i,
                        unfurlResponse: u
                    })
                }
            }
            async function k(e) {
                let {
                    environment: t,
                    url: n,
                    botIds: o,
                    userDefinedExternalCollectionStore: a,
                    relatedPageId: i
                } = e, c = a.getFormat();
                if (!(c.uri && void 0 === c.external_object_id)) return;
                r(71997).A.add(n);
                let s = await t.api.callApi({
                    eventName: "unfurlUrl",
                    environment: t,
                    data: {
                        url: n,
                        botIds: o,
                        spaceId: a.getSpaceId(),
                        targetCollectionId: a.id,
                        relatedPageId: i
                    }
                });
                if ("failed" === s.type) return void r(647095).Qg(s);
                r(71997).A.delete(n);
                let d = s.data;
                return "pageId" in d && d.pageId ? new(r(970831)).B(t, {
                    table: l().evP,
                    id: d.pageId,
                    spaceId: a.getSpaceId()
                }) : function(e) {
                    let {
                        environment: t,
                        unfurlResponse: n,
                        url: o,
                        rootUserDefinedExternalCollectionStore: a
                    } = e, i = a.pointer.spaceId;
                    if (!t.currentUser.id) return;
                    let l = (0, r(939438).US)(o),
                        {
                            host: c
                        } = (0, r(758654).qg)(l);
                    if (!c || !n.root.external_object_id) return;
                    let s = n.root;
                    return (0, r(377796).createAndCommit)({
                        userAction: "unfurlingActions.createExternalObjectInstancePageFromInitialUnfurl",
                        environment: t,
                        canUndo: !0,
                        cellTarget: i ? {
                            spaceWithId: i
                        } : void 0,
                        perform: e => {
                            let n = r(124937).Wv({
                                environment: t,
                                type: r(955630).xd.externalObjectInstancePage,
                                spaceId: i,
                                format: s,
                                inMemoryRecordCache: a.inMemoryRecordCache,
                                transaction: e
                            });
                            return r(579695).X$({
                                parentStore: a,
                                childStore: n,
                                transaction: e
                            }), new(r(970831)).B(t, n.pointer)
                        }
                    }).performResult
                }({
                    environment: t,
                    unfurlResponse: d,
                    url: n,
                    rootUserDefinedExternalCollectionStore: a
                })
            }
            async function A(e) {
                let {
                    environment: t,
                    url: n,
                    botIds: o,
                    externalCollectionStore: a,
                    externalCollectionViewBlockStore: i,
                    integrationId: l
                } = e;
                r(71997).A.add(n);
                let c = await t.api.callApi({
                    eventName: "unfurlUrl",
                    environment: t,
                    data: {
                        url: n,
                        botIds: o,
                        spaceId: (0, r(496722).a)()
                    }
                });
                r(71997).A.delete(n);
                let s = "success" === c.type ? c.data : {
                    root: {
                        error: {
                            status_code: c.status
                        }
                    },
                    relations: []
                };
                (0, r(377796).createAndCommit)({
                    userAction: "unfurlingActions.startUnfurlRequestForCollection",
                    environment: t,
                    canUndo: !0,
                    cellTarget: a.pointer.spaceId ? {
                        spaceWithId: a.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        C({
                            environment: t,
                            unfurlResponse: s,
                            url: n,
                            externalCollectionStore: a,
                            externalCollectionViewBlockStore: i,
                            transaction: e,
                            integrationId: l
                        })
                    }
                })
            }

            function C(e) {
                let {
                    environment: t,
                    unfurlResponse: n,
                    url: o,
                    externalCollectionStore: a,
                    externalCollectionViewBlockStore: i,
                    transaction: c,
                    integrationId: s
                } = e, d = (0, r(939438).US)(o), {
                    host: u
                } = (0, r(758654).qg)(d);
                if (!u) return;
                let {
                    external_object_id: p,
                    uri: f,
                    bot_id: g
                } = n.root;
                if (!p || !f || !g) return;
                let m = a.getSpaceId(),
                    b = (0, r(59651).l)(s);
                if (!b || (0, r(630131).Y)(t, {
                        spaceId: m,
                        userId: t.currentUser.id,
                        name: b
                    })) {
                    var S;
                    let e = r(381453).y1(r(375905).MV).map(() => new(r(356912)).m(t, (0, r(295447).JH)({
                            environment: t,
                            table: l().VlP,
                            spaceId: m
                        }))),
                        o = {};
                    n.relations.forEach((t, n) => {
                        let i = e[n],
                            s = {
                                id: i.id,
                                version: 0,
                                space_id: m,
                                parent_table: l().VlP,
                                parent_id: a.id,
                                alive: !0,
                                format: t,
                                schema: {}
                            };
                        o[t.uri] = i.id, (0, r(173157).z)({
                            store: i,
                            data: s,
                            transaction: c
                        })
                    });
                    let s = {
                        id: a.id,
                        version: 0,
                        space_id: m,
                        parent_table: l().evP,
                        parent_id: i.id,
                        alive: !0,
                        format: {
                            original_url: d,
                            domain: u,
                            ...n.root,
                            property_visibility: (S = n.root.external_schema) && Object.keys(S).flatMap(e => (0, r(9247).cC)(e) ? [] : {
                                property: `${r(235089).U}${e}`,
                                visibility: "hide_if_empty"
                            }),
                            related_external_object_uris_to_instance_ids: { ...o
                            },
                            is_placeholder: void 0,
                            integration_id: void 0
                        },
                        schema: {}
                    };
                    (0, r(173157).z)({
                        store: a,
                        data: s,
                        transaction: c
                    })
                } else {
                    let e = {
                        id: a.id,
                        version: 0,
                        space_id: m,
                        parent_table: l().evP,
                        parent_id: i.id,
                        alive: !0,
                        format: {
                            is_placeholder: !0,
                            integration_id: s
                        },
                        schema: {}
                    };
                    (0, r(173157).z)({
                        store: a,
                        data: e,
                        transaction: c
                    })
                }
                if (U() && n) {
                    let e = i.getCollectionViewIds();
                    null == e || e.forEach(e => {
                        let t = r(547131).p.createChildStore(i, {
                            table: l().Gy1,
                            id: e,
                            spaceId: i.getSpaceId()
                        });
                        if ("table" === t.getType()) {
                            let e = { ...t.getFormat(),
                                table_properties: M(n.root.external_schema)
                            };
                            (0, r(173157).z)({
                                store: t,
                                data: {
                                    format: e
                                },
                                transaction: c
                            })
                        }
                    })
                }
            }
            async function w(e) {
                let {
                    environment: t,
                    externalAuthenticationValue: n
                } = e, o = await t.api.callApi({
                    eventName: "getExternalIntegrationAccessToken",
                    environment: t,
                    data: {
                        botId: n.id,
                        integrationId: n.integration_id,
                        spaceId: n.space_id
                    }
                });
                if ("failed" === o.type) {
                    let e = r(610463).A.integrations.state.find(e => e.id === n.integration_id);
                    if (!e) return;
                    r(436555).D6({
                        label: r(962299).A.formatMessage(u.userReAuth)
                    }), await r(211791).Jq({
                        environment: t,
                        integration: e,
                        spaceId: n.space_id,
                        from: "integration_file_picker"
                    });
                    let a = r(610463).A.bots.state.filter(e => e.integration_id === n.integration_id)[0];
                    if (!a) return;
                    o = await t.api.callApi({
                        eventName: "getExternalIntegrationAccessToken",
                        environment: t,
                        data: {
                            botId: a.id,
                            integrationId: a.integration_id,
                            spaceId: a.space_id
                        }
                    })
                }
                return o
            }
            async function O(e, t, n, o, a) {
                if (!r(610463).A.state.loaded) return;
                a.setState({
                    error: !1,
                    loading: !0
                });
                let i = await w({
                    environment: e,
                    externalAuthenticationValue: o
                });
                return (a.setState({
                    error: !i || "success" !== i.type,
                    loading: !1
                }), i && "failed" !== i.type) ? i.data : void r(647095).ui({
                    message: r(962299).A.formatMessage(u.somethingWentWrong),
                    showCancel: !0,
                    keepFocus: !0,
                    items: [{
                        label: r(962299).A.formatMessage(u.copyDebuggingInformation),
                        color: void 0,
                        onAccept: async () => {
                            let t = {
                                statusCode: null == i ? void 0 : i.status,
                                integrationId: n.id,
                                botId: o.id
                            };
                            (await (0, r(969899).jd)())({
                                environment: e,
                                stringValue: JSON.stringify(t, null, 2),
                                copiedMessage: u.copiedDebuggingInfo
                            })
                        }
                    }]
                })
            }

            function P(e) {
                let {
                    integrationType: t,
                    integration: n
                } = e;
                return "box" === t ? {
                    type: t,
                    title: r(962299).A.formatMessage(u.browse, {
                        appName: n.name
                    }),
                    accounts: r(610463).A.externalAuthentications.state.filter(({
                        integration_id: e
                    }) => e === n.id),
                    onSelect: j(e)
                } : "drive" === t ? {
                    type: t,
                    title: r(962299).A.formatMessage(u.browse, {
                        appName: n.name
                    }),
                    accounts: r(610463).A.externalAuthentications.state.filter(({
                        integration_id: e
                    }) => e === n.id),
                    onSelect: j(e)
                } : void 0
            }

            function j(e) {
                let {
                    integration: t,
                    environment: n,
                    externalObjectTokenStore: o,
                    externalObjectInstanceBlockStore: a
                } = e;
                return async e => {
                    let i = e ? e.id : void 0;
                    if (!e) {
                        let e = (0, r(328765).S)(),
                            o = r(610463).A.integrations.state.find(({
                                id: e
                            }) => e === t.id);
                        if (o && e) {
                            let a = r(610463).A.bots.state;
                            await r(211791).Jq({
                                environment: n,
                                integration: o,
                                spaceId: e.id,
                                from: "integration_file_picker"
                            });
                            let l = function(e, t) {
                                let n = r(610463).A.bots.state;
                                if (e.length === n.length);
                                else {
                                    var o;
                                    return null == (o = n.filter(e => e.integration_id === t)[0]) ? void 0 : o.id
                                }
                            }(a, t.id);
                            l && (i = l)
                        }
                    }
                    let l = r(610463).A.externalAuthentications.state.find(e => e.id === i);
                    if (l) {
                        let e = await O(n, a, t, l, o);
                        e && (r(874443).I(), await
                            function(e) {
                                let {
                                    integration: t,
                                    tokenDetails: n,
                                    environment: o,
                                    externalObjectInstanceBlockStore: a,
                                    botId: i
                                } = e;
                                return t.id === r(49361).d0 ? c(n, B({
                                    environment: o,
                                    externalObjectInstanceBlockStore: a,
                                    botId: i
                                })) : t.id === r(49361).Hd ? (0, r(691755).openGoogleDriveFilePicker)({
                                    environment: o,
                                    accessToken: n.access_token,
                                    callback: B({
                                        environment: o,
                                        externalObjectInstanceBlockStore: a,
                                        botId: i
                                    }),
                                    integration: t,
                                    from: "link_preview_placeholder"
                                }) : void t.id
                            }({
                                integration: t,
                                environment: n,
                                externalObjectInstanceBlockStore: a,
                                externalObjectTokenStore: o,
                                botId: l.id,
                                tokenDetails: e
                            }))
                    }
                }
            }

            function B(e) {
                let {
                    environment: t,
                    externalObjectInstanceBlockStore: n,
                    botId: o
                } = e;
                return (e, a) => {
                    if (e) return r(647095).ui({
                        message: r(962299).A.formatMessage(u.somethingWentWrong),
                        showCancel: !0,
                        keepFocus: !0,
                        items: [{
                            label: r(962299).A.formatMessage(u.copyDebuggingInformation),
                            color: void 0,
                            onAccept: async () => {
                                (await (0, r(969899).jd)())({
                                    environment: t,
                                    stringValue: JSON.stringify({
                                        err: e,
                                        botId: o
                                    }, null, 2),
                                    copiedMessage: u.copiedDebuggingInfo
                                })
                            }
                        }]
                    });
                    R({
                        environment: t,
                        externalObjectInstanceBlockStore: n,
                        url: a,
                        botId: o
                    })
                }
            }

            function U() {
                return r(218744).default.checkGate({
                    gateName: "is_visibility_enabled_for_db_sync"
                })
            }

            function E(e) {
                let {
                    environment: t,
                    originRect: n,
                    externalObjectInstanceBlockStore: o,
                    integration: a
                } = e, i = [{
                    type: "embed",
                    onChange: n => {
                        R({
                            environment: t,
                            url: n.originUrl,
                            externalObjectInstanceBlockStore: o,
                            placeholderIntegrationId: e.placeholderIntegrationId
                        }), r(874443).I()
                    }
                }];
                if (a && !r(986939).A.isMobile) {
                    let n = function(e) {
                        let {
                            integration: t
                        } = e;
                        return t.id === r(49361).d0 ? P({
                            integrationType: "box",
                            ...e
                        }) : t.id === r(49361).Hd ? P({
                            integrationType: "drive",
                            ...e
                        }) : void 0
                    }({
                        integration: a,
                        environment: t,
                        externalObjectInstanceBlockStore: o,
                        externalObjectTokenStore: e.externalObjectTokenStore
                    });
                    n && i.push(n)
                }
                r(874443).W(t, {
                    originGap: 0,
                    originRect: n,
                    title: "Embed Link Preview",
                    currentTab: "embed",
                    tabs: i
                })
            }

            function R(e) {
                let {
                    environment: t,
                    url: n,
                    externalObjectInstanceBlockStore: o,
                    placeholderIntegrationId: a,
                    botId: i
                } = e, l = (0, r(375905).$B)({
                    url: n,
                    integrations: r(610463).A.integrations.state,
                    currentSpaceId: o.getSpaceId()
                });
                if ("success" === l.type) {
                    let {
                        integration: e,
                        pattern: a
                    } = l, c = i ? [i] : r(610463).A.bots.state.filter(t => t.integration_id === e.id).map(({
                        id: e
                    }) => e);
                    if (c.length > 0) {
                        let i = o.getParentId(),
                            l = (0, r(939438).US)(n),
                            {
                                host: s
                            } = (0, r(758654).qg)(l);
                        s && i && ((0, r(377796).createAndCommit)({
                            userAction: "unfurlingActions.startUnfurlFromPlaceholder",
                            environment: t,
                            canUndo: !0,
                            cellTarget: o.pointer.spaceId ? {
                                spaceWithId: o.pointer.spaceId
                            } : void 0,
                            perform: e => {
                                (0, r(173157).z)({
                                    store: o,
                                    data: {
                                        type: r(955630).xd.externalObjectInstance
                                    },
                                    transaction: e
                                }), (0, r(173157).z)({
                                    store: o.getFormatStore(),
                                    data: {
                                        original_url: n,
                                        domain: s
                                    },
                                    transaction: e
                                })
                            }
                        }), r(691968).Ki({
                            integrationId: e.id,
                            entity: a.name,
                            domain: s,
                            from: "placeholder"
                        })), h({
                            blockStore: o,
                            integration: e,
                            pattern: a,
                            textValueBeforePaste: void 0
                        }).includes("import") && (e.id === r(49361).mn || e.id === r(49361).Iy) ? r(26558).M2({
                            url: n,
                            environment: t,
                            from: "external_object_instance_block",
                            integration: e,
                            blockStore: o
                        }) : y({
                            environment: t,
                            url: n,
                            botIds: c,
                            integrationId: e.id,
                            externalObjectInstanceBlockStore: o
                        })
                    } else(0, r(377796).createAndCommit)({
                        userAction: "unfurlingActions.startUnfurlFromPlaceholder",
                        environment: t,
                        canUndo: !0,
                        cellTarget: o.pointer.spaceId ? {
                            spaceWithId: o.pointer.spaceId
                        } : void 0,
                        perform: e => {
                            (0, r(173157).z)({
                                store: o.getFormatStore(),
                                data: {
                                    integration_id: null,
                                    original_url: n,
                                    is_placeholder: null
                                },
                                transaction: e
                            })
                        }
                    })
                } else if ("partial" === l.type) {
                    let {
                        integration: e
                    } = l;
                    (0, r(377796).createAndCommit)({
                        userAction: "unfurlingActions.startUnfurlFromPlaceholder",
                        environment: t,
                        canUndo: !0,
                        cellTarget: o.pointer.spaceId ? {
                            spaceWithId: o.pointer.spaceId
                        } : void 0,
                        perform: t => {
                            (0, r(173157).z)({
                                store: o.getFormatStore(),
                                data: {
                                    is_placeholder: null,
                                    integration_id: e.id,
                                    original_url: n,
                                    error: {
                                        status_code: r(654070).xB.UNPROCESSABLE_ENTITY
                                    }
                                },
                                transaction: t
                            })
                        }
                    })
                } else "failure" === l.type ? (0, r(377796).createAndCommit)({
                    userAction: "unfurlingActions.startUnfurlFromPlaceholder",
                    environment: t,
                    canUndo: !0,
                    cellTarget: o.pointer.spaceId ? {
                        spaceWithId: o.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        (0, r(173157).z)({
                            store: o.getFormatStore(),
                            data: {
                                is_placeholder: null,
                                original_url: n,
                                integration_id: a,
                                error: {
                                    status_code: r(654070).xB.UNPROCESSABLE_ENTITY
                                }
                            },
                            transaction: e
                        })
                    }
                }) : (0, r(722371).HB)(l)
            }

            function M(e) {
                return e && Object.entries(e).flatMap(([e, t]) => (0, r(9247).cC)(e) ? [] : (null == t ? void 0 : t.visibility) === "hidden" ? {
                    property: `${r(235089).U}${e}`,
                    visible: !1
                } : {
                    property: `${r(235089).U}${e}`,
                    visible: !0
                })
            }

            function T(e) {
                let {
                    environment: t,
                    block: n,
                    transaction: o
                } = e;
                if (!n.isDefined() || !(0, r(194020).E)(t, (0, r(974410).f)(n)) || !n.isType(r(955630).xd.externalObjectInstance)) return;
                let i = (0, r(295447).Z1)({
                        environment: t,
                        table: l().evP,
                        spaceId: n.getSpaceId()
                    }),
                    c = r(124937).Wv({
                        environment: t,
                        id: i,
                        type: r(955630).xd.externalObjectInstance,
                        spaceId: n.getSpaceId(),
                        format: n.getFormat(),
                        inMemoryRecordCache: n.inMemoryRecordCache,
                        transaction: o
                    });
                (0, r(173157).z)({
                    store: c,
                    data: {
                        parent_id: n.id,
                        parent_table: n.table,
                        alive: !0
                    },
                    transaction: o
                });
                let d = n.getFormatStore().getKeyStore("related_external_object_uris_to_instance_ids").getValue();
                if (d)
                    for (let e of Object.values(d)) {
                        let t = {
                            table: l().evP,
                            id: e,
                            spaceId: n.getSpaceId()
                        };
                        (0, s().y4)({
                            store: (0, a().v3)(n, t),
                            operation: {
                                pointer: t,
                                path: [],
                                command: "update",
                                args: {
                                    parent_table: l().evP,
                                    parent_id: i
                                }
                            },
                            transaction: o
                        })
                    }
                let u = [(0, r(247438).wmz)((0, r(247438).bMp)(i))];
                (0, r(173157).z)({
                    store: n,
                    data: {
                        type: r(955630).xd.text
                    },
                    transaction: o
                }), r(41403).R9({
                    environment: t,
                    store: n.getBlockTitleStore(),
                    value: u,
                    transaction: o
                });
                let p = n.getFormat();
                (0, r(173157).z)({
                    store: n.getFormatStore(),
                    data: (0, r(627179).LG)(p, () => null),
                    transaction: o
                })
            }

            function V(e) {
                var t;
                let {
                    block: n,
                    transaction: o,
                    token: a,
                    parentStore: i
                } = e, {
                    tokenIndex: l
                } = a;
                if (!n.isDefined()) return;
                let c = null == (t = i.getParentBlockStore()) ? void 0 : t.getContentStore();
                !c || r(41403).eF({
                    block: i,
                    editorMode: "default",
                    transaction: o,
                    tokenIndex: l
                }) && (0, r(51929).W)({
                    parentStore: c,
                    insertStore: n,
                    afterStore: i,
                    transaction: o
                })
            }

            function F(e) {
                let {
                    environment: t,
                    spaceId: n,
                    from: o,
                    store: a,
                    bypassCache: i
                } = e, l = e.botIds, c = (0, r(939042).gV)(a), s = (null == c ? void 0 : c.original_url) || (null == c ? void 0 : c.uri);
                if (!s) return;
                let d = (0, r(939042).g8)(s, n),
                    u = (0, r(939042).au)(s, n);
                if (!d || 0 === u.length) return;
                let p = a.getCollectionStoreIfSingleSource(),
                    {
                        integration: f,
                        pattern: g
                    } = d;
                f.id === r(49361).Hd && !l && null != c && c.bot_id && (l = [c.bot_id]), a.isCollectionView() && p ? t.api.callCellCompatibleApi({
                    eventName: "refetchExternalObjectInstanceBlocks",
                    environment: t,
                    data: {
                        recordPointers: [{ ...p.pointer,
                            spaceId: n
                        }],
                        bypassCache: i
                    },
                    cellNavigation: {
                        spaceId: n
                    }
                }) : a.isExternalObjectInstancePageBlockStore() ? r(49361).tU.includes(f.id) ? y({
                    environment: t,
                    url: s,
                    botIds: l || u.map(({
                        id: e
                    }) => e),
                    integrationId: f.id,
                    externalObjectInstanceBlockStore: a
                }) : t.api.callCellCompatibleApi({
                    eventName: "refetchExternalObjectInstanceBlocks",
                    environment: t,
                    data: {
                        recordPointers: [{ ...a.pointer,
                            spaceId: n
                        }],
                        bypassCache: i
                    },
                    cellNavigation: {
                        spaceId: n
                    }
                }) : a.isExternalObjectInstanceBlockStore() && y({
                    environment: t,
                    url: s,
                    botIds: l || u.map(({
                        id: e
                    }) => e),
                    integrationId: f.id,
                    externalObjectInstanceBlockStore: a
                }), r(691968).zu({
                    integrationId: f.id,
                    entity: g.name,
                    from: o
                })
            }
        }
    }
]);