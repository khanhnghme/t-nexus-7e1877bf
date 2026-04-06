"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [34873], {
        288219: (e, t, a) => {
            a.r(t), a.d(t, {
                handleHttpFailure: () => u
            }), a(16280), a(296540);
            let o = (0, a(109939).YK)({
                trashFull: {
                    defaultMessage: "Your trash is full.",
                    id: "CollectionPropertyActions.trashFull"
                },
                permanentlyDeleteProperties: {
                    defaultMessage: "Permanently delete some properties to continue.",
                    id: "CollectionPropertyActions.permanentlyDeleteProperties"
                },
                resolve: {
                    defaultMessage: "Resolve",
                    id: "CollectionPropertyActions.resolve"
                }
            });
            var r = a(474848);
            async function i(e, t) {
                let r = new(a(356912)).m(t, {
                        table: a(832375).VlP,
                        id: e
                    }),
                    i = r.getParentBlockStore();
                await (null == i ? void 0 : i.load());
                let n = {
                    label: a(962299).A.formatMessage(a(647095)._0.dismissButtonLabel),
                    color: "gray"
                };
                if (!(null != i && i.isCollectionView())) return n;
                let s = i.getCollectionViewStores()[0],
                    l = (0, a(444610).U)(i);
                return s && l ? {
                    label: a(962299).A.formatMessage(o.resolve),
                    color: "gray",
                    onAccept: () => {
                        l.setContext({
                            type: "collectionSettings",
                            collectionStore: r,
                            collectionViewBlockStore: i,
                            collectionViewStore: s
                        }), (0, a(200371).O)({
                            collectionSettingsStore: l.settingsStore,
                            collectionContextStore: l,
                            initialStack: [{
                                type: "deletedProperties",
                                timelineViewTab: "table"
                            }]
                        })
                    }
                } : n
            }
            async function n(e, t) {
                let n = await i(e, t);
                a(647095).ui({
                    showCancel: !1,
                    keepFocus: !1,
                    message: a(962299).A.formatMessage(o.trashFull),
                    description: a(962299).A.formatMessage(o.permanentlyDeleteProperties),
                    icon: (0, r.jsx)(a(16275).I, {
                        icon: a(653905).exclamationMarkTriangleIcon,
                        size: "xl"
                    }),
                    innerStyle: {
                        textAlign: "center"
                    },
                    items: [n]
                })
            }
            let s = "http_health_tracker_config",
                l = 0,
                c = Date.now(),
                d = a(381453).sg(async (e, t) => {
                    await a(505262).y5({
                        environment: e,
                        userId: t,
                        doNotRedirect: !0,
                        logoutOrigin: a(279190).d.PageAccessDenied
                    })
                }, 1e3);
            async function u(e) {
                var t, o, r, i, u, g, p, y, m, b, f, w;
                let {
                    environment: _,
                    eventName: v,
                    response: h,
                    activeUserId: k
                } = e;
                if ((0, a(101787).CSE)(h.body)) {
                    let e = h.body.clientData && (0, a(214804).Y)(h.body.clientData);
                    if ((null == e ? void 0 : e.type) === "block_purged" || (null == e ? void 0 : e.type) === "collection_purged") {
                        let e = (0, a(262166).OX)(null == (u = (0, a(328765).S)()) ? void 0 : u.getSubscriptionTier()),
                            t = (0, a(922271).H)(a(962299).A.getIntl(), h, e);
                        a(647095).f1(t)
                    } else a(647095).Qg(h);
                    (0, a(104310).u)({
                        event: {
                            eventName: "show_user_validation_response",
                            eventProperties: {
                                type: null == e ? void 0 : e.type
                            }
                        }
                    })
                }
                if (! function(e) {
                        var t, o;
                        if (a(218744).default.getConfigKey(s, "enabled") && navigator.onLine && (!(e.status >= 400) || !(e.status < 500)) && (0 !== e.status || (null == (t = e.body) ? void 0 : t.name) !== "AbortedError")) {
                            let e = a(218744).default.getConfigKey(s, "windowMs");
                            Date.now() - c >= e && (l > 0 && (o = l, a(335776).A.sdk.withScope(e => {
                                e.setFingerprint(["server-unreachable"]), e.setLevel("warning"), e.setTag("detection_source", "http_health_tracker"), e.setTag("environment", "production"), e.setTag("disable_sampling", !0), e.setTag("failure_count", o), a(335776).A.sdk.captureMessage(`Server unreachable: ${o} failed requests while client had internet`)
                            })), l = 0, c = Date.now()), l++
                        }
                    }(h), h.offline) return h;
                console.error(h.error);
                let {
                    RouterStore: S
                } = _;
                switch (401 === h.status && a(773352).log({
                    level: "error",
                    from: "api",
                    type: "httpTrigger401",
                    data: {
                        eventName: v,
                        isLoggedIn: _.currentUser.isLoggedIn(),
                        miscDataToConvertToString: {
                            response: h
                        },
                        routeName: S.state.route.name
                    }
                }), 403 === h.status && h.headers["content-type"] && h.headers["content-type"].startsWith("text/html") && a(773352).logWithSampleRate({
                    logMessage: {
                        level: "error",
                        from: "api",
                        type: "httpTrigger403",
                        data: {
                            eventName: v,
                            isLoggedIn: _.currentUser.isLoggedIn(),
                            miscDataToConvertToString: {
                                response: h
                            },
                            userId: _.currentUser.id,
                            routeName: S.state.route.name
                        }
                    },
                    samplePercentage: 1
                }), h.status) {
                    case 403:
                        switch (null == (t = h.body) ? void 0 : t.name) {
                            case "CantAccessWorkspaceFromNetworkError":
                                if (!(0, a(101787).d5r)(h.body.clientData)) break;
                                let D = h.body.clientData.spaceId;
                                void 0 !== D && k && a(572682).zo.setAccessRestrictionForWorkspace({
                                    userId: k,
                                    spaceId: D,
                                    restriction: {
                                        type: "network-controls",
                                        errorId: h.body.errorId,
                                        errorType: h.body.clientData.type
                                    }
                                });
                                break;
                            case "CantAccessWorkspaceFromEKMError":
                                if ("getPublicPageData" === v || "getUserHomePages" === v) {
                                    (0, a(318620).Y)(a(168962).JZ.ekmError);
                                    break
                                }
                                let P = h.body.clientData,
                                    A = (null == P ? void 0 : P.spaceId) || (null == P || null == (o = P.errors) || null == (o = o[0]) || null == (o = o.clientData) ? void 0 : o.spaceId);
                                if (!A) throw Error("EKM error must have a spaceId");
                                await a(728372).default.waitUntil(() => void 0 !== (0, a(328765).S)(), {
                                    timeout: 1e3
                                });
                                let C = null == (r = (0, a(328765).S)()) ? void 0 : r.id,
                                    I = A === C,
                                    {
                                        spaceTransitionStatus: T
                                    } = a(728372).default.state;
                                !I && (0, a(728372).isTransitioningSpaces)(T) && (await a(728372).default.waitUntil(() => !(0, a(728372).isTransitioningSpaces)(a(728372).default.state.spaceTransitionStatus), {
                                    timeout: 1e3
                                }), C = null == (g = (0, a(328765).S)()) ? void 0 : g.id), I ? (0, a(79266).navigate)({
                                    environment: _,
                                    url: a(168962).JZ.ekmError,
                                    redirect: !0
                                }) : a(773352).log({
                                    from: "api.ts:CantAccessWorkspaceFromEKMError",
                                    level: "info",
                                    type: "ekmErrorForNonCurrentWorkspace",
                                    data: {
                                        message: "EKM error for non-current workspace",
                                        miscDataToConvertToString: {
                                            currentSpaceId: C,
                                            ekmSpaceId: A,
                                            spaceTransitionStatus: T
                                        }
                                    }
                                })
                        }
                        break;
                    case 401:
                        if (h.body && h.body.errorId && _.currentUser.isLoggedIn()) switch (S.state.route.name) {
                            case "settingsConsoleOrganization":
                                if (k && k === _.currentUser.id) {
                                    let e = (0, a(758654).Gm)({
                                        url: `${a(986939).A.domainBaseUrl}${a(168962).JZ.login}`,
                                        query: {
                                            redirectURL: window.location.pathname
                                        }
                                    });
                                    await a(505262).y5({
                                        environment: _,
                                        userId: k,
                                        nextLocation: e,
                                        logoutOrigin: a(279190).d.OrganizationConsoleDenied
                                    })
                                }
                                break;
                            case "page":
                                if ((0, a(59406).w)(_)) {
                                    await a(505262).y5({
                                        environment: _,
                                        nextLocation: window.location.pathname,
                                        logoutOrigin: a(279190).d.PublicPageAccessDenied
                                    });
                                    break
                                }
                            case "root":
                            case "space":
                            case "onboarding":
                            case "myIntegrations":
                            case "creatorProfile":
                            case "creatorProfileAnalytics":
                            case "creatorProfileTemplates":
                            case "creatorProfileCustomAgents":
                            case "creatorProfileCoupons":
                            case "creatorProfileIntegrations":
                            case "creatorProfilePersonalIntegrations":
                            case "creatorProfileServices":
                            case "creatorProfileLearn":
                            case "creatorProfileSettings":
                            case "studentGroupSignup":
                                k && k === _.currentUser.id && (await d(_, k), function(e, t) {
                                    let {
                                        RouterStore: o
                                    } = e;
                                    if ((0, a(101787).op4)(t.body) && "saml_sso_required" === t.body.clientData.type) {
                                        let e = (0, a(922271).H)(a(962299).A.getIntl(), t);
                                        a(83879).b.setState({ ...a(83879).b.state,
                                            loginType: "saml",
                                            alert: e
                                        })
                                    } else if ((0, a(101787).op4)(t.body) && "email_verification_required" === t.body.clientData.type) {
                                        let {
                                            email: e,
                                            thirdPartyToken: o
                                        } = t.body.clientData;
                                        a(83879).b.setState({ ...a(83879).b.state,
                                            loginType: "microsoft_login",
                                            email: e,
                                            thirdPartyToken: o,
                                            needsSendTemporaryPasswordReason: "microsoft_login_verification"
                                        })
                                    } else if ((0, a(101787).op4)(t.body) && ("login_custom_session_expired" === t.body.clientData.type || "login_generic_session_expired" === t.body.clientData.type)) {
                                        let e = a(962299).A.getIntl().formatMessage("login_custom_session_expired" === t.body.clientData.type ? a(669730).Y.login_custom_session_expired : a(669730).Y.login_generic_session_expired, {
                                            errorCode: t.status
                                        });
                                        a(83879).b.setState({ ...a(83879).b.state,
                                            alert: e
                                        })
                                    }(0, a(79266).navigate)({
                                        environment: e,
                                        url: "page" === o.state.route.name ? (0, a(758654).Gm)({
                                            url: `${a(986939).A.domainBaseUrl}${a(168962).JZ.login}`,
                                            query: {
                                                redirectURL: window.location.pathname + window.location.search
                                            }
                                        }) : a(168962).JZ.login
                                    })
                                }(await a(505262).g$(_), h));
                                break;
                            case "startupsApplication":
                            case "lennyApplication":
                            case "creatorProgramApplication":
                                k && k === _.currentUser.id && (await d(_, k), await a(505262).g$(_))
                        }
                        break;
                    case 400:
                        switch (null == (i = h.body) ? void 0 : i.name) {
                            case "CollectionDeletedSchemaMaxSize":
                                {
                                    let e = (null == (p = h.body) ? void 0 : p.clientData) && (0, a(214804).Y)(null == (y = h.body) ? void 0 : y.clientData);
                                    if (!e || "collection_deleted_schema_max_size" !== e.type) break;await n(e.collectionId, _);
                                    break
                                }
                            case "BlockPropertiesMaxSize":
                                {
                                    let e = (null == (m = h.body) ? void 0 : m.clientData) && (0, a(214804).Y)(null == (b = h.body) ? void 0 : b.clientData);
                                    if (!e || "block_properties_max_size_error" !== e.type) break;await a(70391)._p(_, e.blockId);
                                    break
                                }
                            case "CollectionSchemaMaxSize":
                                {
                                    let e = (null == (f = h.body) ? void 0 : f.clientData) && (0, a(214804).Y)(null == (w = h.body) ? void 0 : w.clientData);
                                    if (!e || "collection_schema_too_large" !== e.type) break;
                                    let {
                                        showCollectionSchemaMaxSizeError: t
                                    } = await a.e(69181).then(a.bind(a, 336621));t(_)
                                }
                        }
                }
                return h
            }
        }
    }
]);