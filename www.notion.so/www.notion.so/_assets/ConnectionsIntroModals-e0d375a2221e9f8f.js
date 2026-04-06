"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [24754], {
        53445: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowLeftRightIcon: () => o,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 2.25 13.47 15.5",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.45 5.925a.625.625 0 0 0 0 .884l3.499 3.497a.625.625 0 1 0 .884-.883L5.402 6.992h10.705a.625.625 0 0 0 0-1.25H5.402l2.43-2.431a.625.625 0 0 0-.883-.884zm8.717 11.648a.625.625 0 0 1 0-.884l2.431-2.43H3.893a.625.625 0 1 1 0-1.25h10.705l-2.43-2.431a.625.625 0 0 1 .883-.884l3.498 3.497a.625.625 0 0 1 0 .884l-3.498 3.498a.625.625 0 0 1-.884 0"
                    })
                },
                o = (0, n(104509).wt)("arrowLeftRight", i, "default")
        },
        89162: (e, t, n) => {
            n.d(t, {
                C: () => r,
                j: () => a
            }), n(898992), n(354520), n(672577);
            var i = n(296540),
                o = n(474848);
            let s = {
                borderedContainer: {
                    borderRadius: 6,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: n(632079).Tj.border.secondary,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px 12px"
                },
                header: {
                    fontWeight: n(699422).Wy.medium,
                    color: n(632079).Tj.text.primary,
                    fontSize: n(699422).J.UIRegular.desktop,
                    marginTop: 0
                },
                iconGroup: {
                    marginBottom: 4
                },
                captionText: {
                    fontSize: n(699422).J.UISmall.desktop,
                    color: n(632079).Tj.text.secondary,
                    fontWeight: n(699422).Wy.regular,
                    textAlign: "center",
                    marginInlineEnd: "auto",
                    marginBottom: 4,
                    marginInlineStart: "auto",
                    maxWidth: "80%",
                    lineHeight: "20px"
                },
                style1: {
                    marginInlineEnd: "auto",
                    marginBottom: 0,
                    marginInlineStart: "auto"
                }
            };

            function r({
                integrationIconUrl: e,
                integrationIcon: t,
                spaceStore: l,
                flowId: c,
                renderActions: d,
                captionText: u,
                forceReauthForBot: h = !1,
                from: f
            }) {
                let {
                    status: p,
                    instanceUrl: g,
                    connectedByStore: x,
                    spaceBotStore: y
                } = a({
                    spaceStore: l
                }), m = (0, n(109939).tz)(), {
                    adminName: A,
                    connectedAtTs: j
                } = (0, n(682985).K8)(() => {
                    if (!x || !y || !y.getLastEditedAt()) return {
                        adminName: void 0,
                        connectedAtTs: void 0
                    };
                    let e = "number" == typeof y.getLastEditedAt() ? y.getLastEditedAt() : parseInt(String(y.getLastEditedAt()), 10);
                    return {
                        adminName: x.getDisplayName(m),
                        connectedAtTs: e
                    }
                }, [x, m, y]), S = (0, i.useCallback)(() => {
                    let e = "admin";
                    e = "no_user_access" === p ? "user" : "admin", "connected" === p && !1 !== h && (e = h.integration_id === n(49361).mn ? "admin" : "user"), n(26558).rT({
                        from: f,
                        flowId: c,
                        authType: e,
                        isReAuth: !!("connected" === p && h)
                    })
                }, [f, c, p, h]), v = (0, i.useMemo)(() => "not_connected" === p || "no_user_access" === p || "connected" === p && h ? (0, o.jsx)(n(720722).m, {
                    integrationIconUrl: e,
                    integrationIcon: t,
                    styles: {
                        wrapper: s.borderedContainer,
                        header: s.header,
                        iconGroup: s.iconGroup,
                        arrowRight: {
                            height: 24,
                            width: 24
                        },
                        icon: {
                            height: 36,
                            width: 36
                        }
                    },
                    title: (0, o.jsx)(n(109939).sA, {
                        defaultMessage: "Authenticate Salesforce",
                        id: "database.viewSettings.collectionSettingsExternalSource.connectToSalesforce.headline"
                    }),
                    description: (0, o.jsx)("div", {
                        style: s.captionText,
                        children: u
                    }),
                    children: (0, o.jsx)(n(4458).fI, {
                        justifyContent: "center",
                        children: (0, o.jsx)(n(265779).E, {
                            colorPalette: "blue",
                            style: s.style1,
                            onClick: S,
                            children: (0, o.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: h ? (0, o.jsx)(n(109939).sA, {
                                    defaultMessage: "Re-authenticate Salesforce",
                                    id: "database.viewSettings.collectionSettingsExternalSource.reAuthToSalesforce"
                                }) : (0, o.jsx)(n(109939).sA, {
                                    defaultMessage: "Connect to Salesforce",
                                    id: "database.viewSettings.collectionSettingsExternalSource.connectToSalesforce"
                                })
                            })
                        })
                    })
                }) : "connected" === p ? (0, o.jsx)(n(454043).z, {
                    integrationIconUrl: e,
                    integrationIcon: t,
                    primaryText: (0, n(252166).A)((null == g ? void 0 : g.split(".")[0]) || ""),
                    secondaryText: g || "",
                    compact: !0,
                    tooltipContent: {
                        connectedAt: j,
                        connectedBy: A
                    }
                }) : null, [A, j, p, e, t, g, u, S, h]);
                return (0, o.jsxs)(o.Fragment, {
                    children: [v, null == d ? void 0 : d(p)]
                })
            }

            function a(e) {
                let {
                    spaceStore: t
                } = e;
                return (0, n(682985).K8)(() => {
                    var e;
                    if (!t) return {
                        status: "not_connected",
                        spaceBotStore: void 0,
                        externalAuthentication: void 0,
                        instanceUrl: void 0,
                        connectedByStore: void 0
                    };
                    let i = n(610463).A.state;
                    if (!i.loaded) return {
                        status: "not_connected",
                        spaceBotStore: void 0,
                        externalAuthentication: void 0,
                        instanceUrl: void 0,
                        connectedByStore: void 0
                    };
                    let o = i.bots.filter(({
                        integration_id: e
                    }) => e === n(49361).mn);
                    if (0 === o.length) return {
                        status: "not_connected",
                        spaceBotStore: void 0,
                        externalAuthentication: void 0,
                        instanceUrl: void 0,
                        connectedByStore: void 0
                    };
                    let s = n(447003).v.createChildStore(t, {
                            table: n(832375).GPl,
                            id: o[0].id,
                            spaceId: t.id
                        }),
                        r = s.getLastEditedById(),
                        {
                            status: a,
                            externalAuthentication: l
                        } = (0, n(726292).i_)(s),
                        c = null == (e = i.externalEntities.find(e => e.getBotId() === s.id)) || null == (e = e.getMetainfo()) ? void 0 : e.instanceUrl;
                    return {
                        status: a,
                        spaceBotStore: s,
                        externalAuthentication: l,
                        instanceUrl: null == c ? void 0 : c.replace("https://", ""),
                        connectedByStore: r ? n(807825).L.createChildStore(t, {
                            table: n(832375).oo9,
                            id: r
                        }) : void 0
                    }
                }, [t])
            }
        },
        213039: (e, t, n) => {
            n.d(t, {
                M: () => s
            }), n(296540);
            var i = n(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.25 15.25 11.5",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M3 7.375h6.829a2.501 2.501 0 0 0 4.842 0H17a.625.625 0 1 0 0-1.25h-2.329a2.501 2.501 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25M12.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.75 15.75a2.5 2.5 0 0 0 2.421-1.875H17a.625.625 0 1 0 0-1.25h-6.829a2.5 2.5 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25h2.329A2.5 2.5 0 0 0 7.75 15.75m0-1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5",
                            clipRule: "evenodd"
                        })]
                    })
                },
                s = (0, n(104509).wt)("sliders", o, "default")
        },
        270528: (e, t, n) => {
            n.r(t), n.d(t, {
                ConnectionsIntroModals: () => T
            });
            var i = n(296540);
            async function o({
                environment: e,
                spaceId: t
            }) {
                try {
                    n(773352).log({
                        level: "info",
                        from: "salesforceAuthActions",
                        type: "handleDisconnectUsersForSpace",
                        data: {
                            message: "Disconnecting users from Salesforce",
                            spaceId: t
                        }
                    });
                    let {
                        botIds: i,
                        recordMap: o
                    } = await n(577464).Ju({
                        environment: e,
                        table: n(832375).NXh,
                        id: t,
                        type: "external"
                    }), s = n(412951).RecordMapWithRole.create(o), r = i.filter(e => {
                        let i = s.getModel({
                                table: n(832375).GPl,
                                id: e,
                                spaceId: t
                            }),
                            o = null == i ? void 0 : i.integration_id;
                        return o === n(49361).mn || o === n(49361).Iy
                    });
                    n(773352).log({
                        level: "info",
                        from: "salesforceAuthActions",
                        type: "handleDisconnectUsersForSpace",
                        data: {
                            message: "Disconnecting users from Salesforce",
                            spaceId: t,
                            miscDataToConvertToString: {
                                salesforceBots: r
                            }
                        }
                    }), await n(577464).jw({
                        botIds: r,
                        environment: e
                    })
                } catch (e) {
                    n(773352).log({
                        level: "error",
                        from: "salesforceAuthActions",
                        type: "handleDisconnectUsersError",
                        error: (0, n(416607).convertErrorToLog)(e),
                        data: {
                            message: "Failed to disconnect users from Salesforce",
                            miscDataToConvertToString: {
                                spaceId: t
                            }
                        }
                    })
                }
            }
            n(581454), n(898992), n(354520);
            var s = n(474848);
            let r = (0, n(109939).YK)({
                    headerTitle: {
                        id: "salesforceAuthModal.header.title",
                        defaultMessage: "Connect with Salesforce"
                    },
                    requestAdminAccessTitle: {
                        id: "salesforceAuthModal.requestAdminAccessTitle",
                        defaultMessage: "Salesforce access required"
                    },
                    integrationInfo: {
                        id: "salesforceAuthModal.integrationInfo",
                        defaultMessage: "Allow members to bring Salesforce data in Notion."
                    },
                    integrationInfoUser: {
                        id: "salesforceAuthModal.integrationInfoUser",
                        defaultMessage: "Authenticate with your Salesforce account to start syncing Salesforce objects and reports"
                    },
                    requestAdminReAuth: {
                        id: "salesforceAuthModal.requestAdminReAuth",
                        defaultMessage: "Please contact your admin to re-authenticate Salesforce for this workspace"
                    },
                    requestAdminAccessInfo: {
                        id: "salesforceAuthModal.requestAdminAccessInfo",
                        defaultMessage: "Contact the admins below to request access and have the integration enabled for your workspace"
                    },
                    howToGetStarted: {
                        id: "salesforceAuthModal.howToGetStarted",
                        defaultMessage: "How to get started"
                    },
                    step1: {
                        id: "salesforceAuthModal.step1",
                        defaultMessage: "Create a <link>Salesforce service</link> account"
                    },
                    step2: {
                        id: "salesforceAuthModal.step2",
                        defaultMessage: "Set up <link>access controls</link>. Workspace members will only be able to access data that has access control enabled."
                    },
                    step3: {
                        id: "salesforceAuthModal.step3",
                        defaultMessage: "Authorize Salesforce to connect with Notion"
                    },
                    connectSalesforce: {
                        id: "salesforceAuthModal.connectSalesforce",
                        defaultMessage: "Connect Salesforce"
                    },
                    reAuthSalesforce: {
                        id: "salesforceAuthModal.reAuthSalesforce",
                        defaultMessage: "Re-authenticate Salesforce"
                    },
                    learnMore: {
                        id: "salesforceAuthModal.learnMore",
                        defaultMessage: "Learn more about Salesforce"
                    },
                    salesforceConnected: {
                        id: "salesforceAuthModal.salesforceConnected",
                        defaultMessage: "Salesforce is now connected"
                    },
                    salesforceAdminBotAlreadyConnected: {
                        id: "salesforceAuthModal.salesforceAdminBotAlreadyConnected",
                        defaultMessage: "Salesforce is already connected"
                    },
                    salesforceNotConnected: {
                        id: "salesforceAuthModal.salesforceNotConnected",
                        defaultMessage: "Authentication failed"
                    },
                    fallbackErrorDescription: {
                        id: "salesforceAuthModal.fallbackErrorDescription",
                        defaultMessage: "Something went wrong when connecting Salesforce. Please try again or contact Notion support."
                    },
                    siteChangeErrorDescription: {
                        id: "salesforceAuthModal.siteChangeErrorDescription",
                        defaultMessage: "This requires disconnecting Salesforce for all users in this workspace. Disconnecting will revoke Salesforce access for all users in this workspace."
                    },
                    DisconnectSalesforce: {
                        id: "salesforceAuthModal.DisconnectSalesforce",
                        defaultMessage: "Disconnect Salesforce"
                    },
                    connectedDescription: {
                        id: "salesforceAuthModal.connectedDescription",
                        defaultMessage: "Allow members to bring Salesforce data into Notion"
                    },
                    strictPermissions: {
                        id: "salesforceAuthModal.strictPermissions",
                        defaultMessage: "Strict permissions enforcement"
                    },
                    strictPermissionsDesc: {
                        id: "salesforceAuthModal.strictPermissionsDesc",
                        defaultMessage: "Members can only sync data accessible to the service account."
                    },
                    certifiedSecurity: {
                        id: "salesforceAuthModal.certifiedSecurity",
                        defaultMessage: "Certified to the highest security standards"
                    },
                    certifiedSecurityDesc: {
                        id: "salesforceAuthModal.certifiedSecurityDesc",
                        defaultMessage: "Notion is SOC2 (Type 2), ISO 27001, GDPR, and CCPA certified and compliant."
                    },
                    controlYourData: {
                        id: "salesforceAuthModal.controlYourData",
                        defaultMessage: "You control your data"
                    },
                    controlYourDataDesc: {
                        id: "salesforceAuthModal.controlYourDataDesc",
                        defaultMessage: "You decide what data to bring in. Notion never uses your connected data to train models."
                    },
                    proceedToUserAuth: {
                        id: "salesforceAuthModal.proceedToUserAuth",
                        defaultMessage: "Proceed to user auth"
                    },
                    backToNotion: {
                        id: "salesforceAuthModal.backToNotion",
                        defaultMessage: "Back to Notion"
                    }
                }),
                a = {
                    width: {
                        type: "fixed",
                        length: 500
                    },
                    height: {
                        type: "min",
                        length: 400
                    }
                },
                l = {
                    width: {
                        type: "fixed",
                        length: 520
                    },
                    height: {
                        type: "fixed",
                        length: 600
                    }
                };

            function c() {
                let e = (0, n(682985).O$)(n(36423).A);
                return ("auth" === e.type || "auth_error" === e.type || "auth_success" === e.type) && e.open ? (0, s.jsx)(d, {
                    salesforceStoreState: e
                }) : null
            }

            function d({
                salesforceStoreState: e
            }) {
                let t = (0, n(533992).v3)(),
                    o = (0, n(109939).tz)(),
                    r = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore),
                    c = (0, n(84163).J)(r),
                    u = (0, n(682985).K8)(() => n(36423).A.getFlowId(), []),
                    f = (0, n(89162).j)({
                        spaceStore: r
                    }),
                    p = (0, n(682985).K8)(() => {
                        var e, t;
                        let n = f.instanceUrl,
                            i = null == (e = f.spaceBotStore) ? void 0 : e.getLastEditedAt(),
                            s = null == (t = f.connectedByStore) ? void 0 : t.getDisplayName(o);
                        return i && "number" != typeof i && (i = parseInt(String(i), 10)), {
                            instanceUrl: n,
                            connectedAtTs: i,
                            connectedBy: s
                        }
                    }, [f.instanceUrl, f.spaceBotStore, f.connectedByStore, o]),
                    x = (0, n(217844)._)({
                        name: "collection_synced_database_salesforce_workspace",
                        spaceId: null == r ? void 0 : r.id,
                        userId: t.currentUser.id
                    }),
                    y = "connected" === f.status,
                    A = (0, i.useCallback)(async i => {
                        r && e.from && await n(26558).jI({
                            environment: t,
                            spaceId: r.id,
                            flowId: u,
                            from: e.from,
                            authType: i,
                            isReAuth: y
                        })
                    }, [r, e.from, t, u, y]),
                    j = (0, i.useCallback)(() => {
                        n(26558).rT({
                            from: "connected_apps_settings",
                            flowId: u,
                            authType: "user"
                        })
                    }, [u]),
                    S = (0, n(682985).K8)(() => !!c && !!(f.externalAuthentication && f.externalAuthentication.integration_id === n(49361).mn && f.externalAuthentication.user_id === t.currentUser.id), [t.currentUser.id, c, f.externalAuthentication]),
                    b = (0, i.useCallback)(() => {
                        n(36423).A.reset()
                    }, []),
                    {
                        sizeConstraint: w,
                        renderAction: I
                    } = (0, i.useMemo)(() => {
                        if (x && !(0, n(94418).e2)(x)) return {
                            sizeConstraint: a,
                            renderAction: () => (0, s.jsx)(g, {})
                        };
                        if ("auth_error" === e.type || "auth_success" === e.type) return {
                            sizeConstraint: l,
                            renderAction: () => (0, s.jsx)(v, {
                                onBackToNotion: b,
                                salesforceStoreState: e,
                                siteInfo: p
                            })
                        };
                        if ("not_connected" === f.status)
                            if (c) return {
                                sizeConstraint: a,
                                renderAction: () => (0, s.jsx)(h, {
                                    onConnect: A,
                                    siteInfo: p,
                                    authType: "admin",
                                    isReAuth: y
                                })
                            };
                            else return {
                                sizeConstraint: a,
                                renderAction: () => (0, s.jsx)(m, {
                                    onBackToNotion: b,
                                    isReAuth: y,
                                    siteInfo: p
                                })
                            };
                        if ("no_user_access" === f.status && "admin" === e.action && c && !S) return {
                            sizeConstraint: l,
                            renderAction: () => (0, s.jsx)(v, {
                                isConnectedByAnotherAdmin: !0,
                                proceedToUserAuth: j,
                                siteInfo: p
                            })
                        };
                        if ("connected" === f.status) {
                            if ("user" === e.action && S) return {
                                sizeConstraint: l,
                                renderAction: () => (0, s.jsx)(v, {
                                    onBackToNotion: b,
                                    isCurrentUserWorkspaceBotOwner: !0,
                                    siteInfo: p
                                })
                            };
                            if ("admin" === e.action) {
                                if (c && !S) return {
                                    sizeConstraint: l,
                                    renderAction: () => (0, s.jsx)(m, {
                                        onBackToNotion: b,
                                        isReAuth: y,
                                        siteInfo: p
                                    })
                                };
                                if (!c) return {
                                    sizeConstraint: a,
                                    renderAction: () => (0, s.jsx)(m, {
                                        onBackToNotion: b,
                                        isReAuth: y,
                                        siteInfo: p
                                    })
                                }
                            }
                        }
                        return {
                            sizeConstraint: a,
                            renderAction: () => (0, s.jsx)(h, {
                                onConnect: A,
                                authType: e.action,
                                isReAuth: y,
                                siteInfo: p
                            })
                        }
                    }, [x, e, f.status, c, S, b, p, A, y, j]);
                return (0, s.jsx)(n(833503).s, {
                    isOpen: e.open,
                    areaConstraint: w,
                    onDismiss: () => {
                        n(36423).A.reset()
                    },
                    onClosed: () => {
                        n(36423).A.reset()
                    },
                    backgroundAppearance: "default",
                    children: I
                })
            }
            let u = {
                stepsSection: {
                    flexGrow: 1,
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    paddingTop: 16,
                    paddingInlineEnd: 16,
                    paddingBottom: 0,
                    paddingInlineStart: 16,
                    borderRadius: 6,
                    gap: 16
                },
                stepsSectionTitle: {
                    fontSize: 12,
                    fontWeight: n(699422).Wy.medium,
                    marginBottom: 6,
                    color: n(632079).Tj.text.primary
                },
                stepsList: {
                    paddingTop: 0,
                    paddingInlineEnd: 0,
                    paddingBottom: 16,
                    paddingInlineStart: 16,
                    gap: 16,
                    margin: 0
                },
                stepText: {
                    padding: "4px 0",
                    flex: 1,
                    fontSize: 12,
                    lineHeight: 1.2,
                    color: n(632079).Tj.text.secondary
                },
                buttonsSectionWrapper: {
                    marginTop: "auto"
                },
                buttonsSection: {},
                connectButton: {
                    width: "100%",
                    height: 36
                },
                link: {
                    color: n(632079).Tj.blue.text.accentPrimary,
                    display: "inline"
                }
            };

            function h({
                onConnect: e,
                authType: t,
                siteInfo: o,
                isReAuth: a
            }) {
                let [l, c] = (0, i.useState)(!1), d = (0, i.useCallback)(async () => {
                    c(!0), await e(t), c(!1)
                }, [e, t]), f = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(p, {
                        title: (0, s.jsx)(n(109939).sA, { ...r.headerTitle
                        }),
                        subtitle: "admin" === t ? (0, s.jsx)(n(109939).sA, { ...r.integrationInfo
                        }) : (0, s.jsx)(n(109939).sA, { ...r.integrationInfoUser
                        }),
                        showBetaBadge: !0
                    }), "admin" === t ? (0, s.jsxs)("div", {
                        style: u.stepsSection,
                        children: [(0, s.jsx)(n(324489).V, {
                            style: u.stepsSectionTitle,
                            isMultiline: !0,
                            children: (0, s.jsx)(n(109939).sA, { ...r.howToGetStarted
                            })
                        }), (0, s.jsxs)("ol", {
                            style: u.stepsList,
                            children: [(0, s.jsx)("li", {
                                style: u.stepText,
                                children: (0, s.jsx)(n(324489).V, {
                                    style: u.stepText,
                                    isMultiline: !0,
                                    children: (0, s.jsx)(n(109939).sA, { ...r.step1,
                                        values: {
                                            link: e => (0, s.jsx)(n(68774).N, {
                                                href: "https://www.notion.so/notion/How-to-Create-a-Service-Account-in-Salesforce-223efdeead0580afa387d14d9264b4c8",
                                                style: u.link,
                                                children: e
                                            })
                                        }
                                    })
                                })
                            }), (0, s.jsx)("li", {
                                style: u.stepText,
                                children: (0, s.jsx)(n(324489).V, {
                                    style: u.stepText,
                                    isMultiline: !0,
                                    children: (0, s.jsx)(n(109939).sA, { ...r.step2,
                                        values: {
                                            link: e => (0, s.jsx)(n(68774).N, {
                                                href: "https://www.notion.com/help/salesforce",
                                                style: u.link,
                                                children: e
                                            })
                                        }
                                    })
                                })
                            }), (0, s.jsx)("li", {
                                style: u.stepText,
                                children: (0, s.jsx)(n(324489).V, {
                                    style: u.stepText,
                                    isMultiline: !0,
                                    children: (0, s.jsx)(n(109939).sA, { ...r.step3
                                    })
                                })
                            })]
                        })]
                    }) : void 0, ("user" === t || a) && o.instanceUrl ? (0, s.jsx)(n(454043).z, {
                        integrationIcon: (0, s.jsx)(n(16275).I, {
                            icon: n(68722).salesforceIcon,
                            size: "default"
                        }),
                        primaryText: (0, n(381453).ZH)(o.instanceUrl.split(".")[0] || ""),
                        secondaryText: o.instanceUrl || "",
                        tooltipContent: {
                            connectedAt: o.connectedAtTs,
                            connectedBy: o.connectedBy
                        }
                    }) : void 0, (0, s.jsx)("div", {
                        style: u.buttonsSectionWrapper,
                        children: (0, s.jsxs)(n(4458).VP, {
                            gap: 8,
                            style: u.buttonsSection,
                            children: [(0, s.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                size: "lg",
                                style: u.connectButton,
                                onClick: d,
                                disabled: l,
                                children: a ? (0, s.jsx)(n(109939).sA, { ...r.reAuthSalesforce
                                }) : (0, s.jsx)(n(109939).sA, { ...r.connectSalesforce
                                })
                            }), (0, s.jsx)(M, {})]
                        })
                    })]
                });
                return (0, s.jsx)(j, {
                    sections: {
                        leftPanel: f
                    }
                })
            }
            let f = {
                logoSize: {
                    width: 40,
                    height: 40
                },
                headerContainer: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: 14
                },
                title: {
                    fontSize: 26,
                    fontWeight: n(699422).Wy.semibold,
                    marginBottom: 3,
                    lineHeight: "32px"
                },
                subtitle: {
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: n(632079).Tj.text.secondary,
                    textAlign: "center",
                    maxWidth: "80%"
                },
                betaBadgeWrapper: {
                    marginInlineStart: 6
                },
                betaBadge: {
                    padding: "1px 4px",
                    fontSize: 16
                },
                arrowRight: {
                    width: 17,
                    height: 20,
                    padding: 0,
                    opacity: 1,
                    color: n(632079).Tj.icon.secondary,
                    fontWeight: n(699422).Wy.regular
                }
            };

            function p({
                title: e,
                subtitle: t,
                showBetaBadge: i = !1
            }) {
                return (0, s.jsxs)("div", {
                    style: f.headerContainer,
                    children: [(0, s.jsx)(n(720722).m, {
                        integrationIcon: (0, n(68722).salesforceIcon)(f.logoSize),
                        styles: {
                            iconGroup: {
                                justifyContent: "center"
                            },
                            arrowRight: f.arrowRight
                        }
                    }), (0, s.jsxs)(n(4458).fI, {
                        marginBottom: 8,
                        children: [(0, s.jsx)(n(324489).V, {
                            style: f.title,
                            children: e
                        }), i ? (0, s.jsx)("span", {
                            style: f.betaBadgeWrapper,
                            children: (0, s.jsx)(n(18274).A, {
                                style: f.betaBadge
                            })
                        }) : void 0]
                    }), (0, s.jsx)(n(324489).V, {
                        style: f.subtitle,
                        isMultiline: !0,
                        children: t
                    })]
                })
            }

            function g() {
                let e = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(p, {
                        title: (0, s.jsx)(n(109939).sA, { ...r.headerTitle
                        }),
                        subtitle: (0, s.jsx)(n(109939).sA, { ...r.integrationInfo
                        }),
                        showBetaBadge: !0
                    }), (0, s.jsx)(n(960235).z, {
                        featureName: "collection_synced_database_salesforce_workspace",
                        source: "collection_synced_database",
                        margin: !1,
                        collectionContextStore: void 0
                    }), (0, s.jsx)(M, {})]
                });
                return (0, s.jsx)(j, {
                    sections: {
                        leftPanel: e
                    }
                })
            }
            let x = {},
                y = {
                    flexGrow: 1
                };

            function m({
                onBackToNotion: e,
                isReAuth: t,
                siteInfo: i
            }) {
                let o = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(p, {
                        title: (0, s.jsx)(n(109939).sA, { ...r.requestAdminAccessTitle
                        }),
                        subtitle: t ? (0, s.jsx)(n(109939).sA, { ...r.requestAdminReAuth
                        }) : (0, s.jsx)(n(109939).sA, { ...r.requestAdminAccessInfo
                        })
                    }), (0, s.jsx)("div", {
                        style: y,
                        children: (0, s.jsx)(w, {})
                    }), (0, s.jsx)(n(4458).VP, {
                        gap: 8,
                        style: x,
                        children: (0, s.jsx)(M, {})
                    })]
                });
                return (0, s.jsx)(j, {
                    sections: {
                        leftPanel: o
                    }
                })
            }
            let A = {
                minWidth: 300,
                paddingTop: 48,
                paddingInlineEnd: 24,
                paddingBottom: 20,
                paddingInlineStart: 24,
                display: "flex",
                flex: 1,
                gap: 24,
                flexGrow: 1,
                height: "100%",
                justifyContent: "space-between",
                flexDirection: "column"
            };

            function j({
                styleOverrides: e = {},
                sections: t
            }) {
                let n = {
                    leftPanel: { ...A,
                        ...e.leftPanel
                    }
                };
                return (0, s.jsx)("div", {
                    style: n.leftPanel,
                    children: t.leftPanel
                })
            }
            let S = {
                wrapper: {
                    maxWidth: 520,
                    width: "100%",
                    padding: "76px 20px 20px",
                    textAlign: "center",
                    height: "100%",
                    margin: "0 auto",
                    display: "flex",
                    gap: 24,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    backgroundColor: n(632079).Tj.background.primary
                },
                buttonsSectionWrapper: {
                    marginTop: "auto",
                    width: "100%"
                },
                buttonsSection: {},
                disconnectButton: {
                    width: "100%",
                    height: 36
                },
                backToNotionButton: {
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingInlineStart: 12,
                    paddingInlineEnd: 12,
                    gap: 6,
                    borderRadius: 6,
                    borderWidth: 1,
                    border: "1px solid rgba(84, 72, 49, 0.15)",
                    textAlign: "center",
                    width: "fit-content"
                },
                header: {},
                logoSize: {
                    width: 48,
                    height: 48
                },
                securityFeatures: {
                    gap: 7,
                    textAlign: "start"
                },
                securityFeature: {},
                featureIcon: {
                    width: 20,
                    height: 20
                },
                securityContent: {
                    flex: 1
                },
                featureTitle: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.semibold,
                    marginBottom: 4,
                    color: n(632079).Tj.text.primary
                },
                featureDescription: {
                    fontSize: 12,
                    lineHeight: 1.5,
                    fontWeight: n(699422).Wy.regular,
                    color: n(632079).Tj.text.secondary
                },
                connectedTitle: {
                    fontSize: 24,
                    fontWeight: n(699422).Wy.semibold,
                    marginBottom: 8,
                    color: n(632079).Tj.text.primary
                },
                connectedSubtitle: {
                    fontSize: 16,
                    lineHeight: 1.5,
                    width: "70%",
                    margin: "0 auto",
                    color: n(632079).Tj.text.secondary
                },
                proceedToUserAuthButton: {
                    width: "100%",
                    height: 36
                },
                errorDescription: {
                    textAlign: "start",
                    flexGrow: 1,
                    fontSize: 16,
                    lineHeight: 1.5,
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16,
                    color: n(632079).Tj.text.secondary
                }
            };

            function v(e) {
                let {
                    onBackToNotion: t,
                    salesforceStoreState: i,
                    isConnectedByAnotherAdmin: a,
                    isCurrentUserWorkspaceBotOwner: l,
                    proceedToUserAuth: c
                } = e, d = (0, n(533992).v3)(), u = function(e, t) {
                    var n, i, o;
                    if ((null == t ? void 0 : t.type) !== "auth_error") return;
                    let s = null == (n = t.authError) || null == (n = n.errorDescription) ? void 0 : n.includes("ERROR_CODE: SALESFORCE_SITE_CHANGE");
                    return s ? {
                        error: "site_change",
                        errorDescription: s ? null == (o = t.authError) || null == (o = o.errorDescription) ? void 0 : o.replace("ERROR_CODE: SALESFORCE_SITE_CHANGE", "") : (null == t ? void 0 : t.type) === "auth_error" ? t.authError.errorDescription : void 0
                    } : (null == (i = t.authError) ? void 0 : i.errorDescription) === "salesforce_no_api_access" ? {
                        error: "salesforce_no_api_access",
                        errorDescription: e.formatMessage({
                            defaultMessage: "Looks like your Salesforce account doesn’t have API access. Please add the 'API Access' permission in Salesforce, or reach out to your Salesforce admin.",
                            id: "salesforceAuthModal.salesforceNoApiAccessDescription"
                        })
                    } : t.authError
                }((0, n(109939).tz)(), i), h = a || l || "auth_success" === i.type, f = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), p = null == f ? void 0 : f.id, g = [{
                    icon: n(913825).personKeyFillIcon,
                    title: r.strictPermissions,
                    description: r.strictPermissionsDesc
                }, {
                    icon: n(269298).lockFillIcon,
                    title: r.certifiedSecurity,
                    description: r.certifiedSecurityDesc
                }, {
                    icon: n(213039).M,
                    title: r.controlYourData,
                    description: r.controlYourDataDesc
                }];
                return (0, s.jsxs)("div", {
                    style: S.wrapper,
                    children: [(0, s.jsxs)(n(4458).VP, {
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 12,
                        marginBottom: 24,
                        children: [(0, s.jsxs)(n(4458).fI, {
                            gap: 16,
                            justifyContent: "center",
                            alignItems: "center",
                            style: S.header,
                            children: [(0, s.jsx)(n(16275).I, {
                                icon: n(792668).notionIcon,
                                colorVariant: "primary",
                                style: S.logoSize
                            }), (0, s.jsx)(n(16275).I, {
                                icon: h ? n(555972).checkmarkShieldFillSmallIcon : n(519529).xMarkFillSmallIcon,
                                size: "sm",
                                colorPalette: h ? "blue" : "red",
                                colorVariant: "accentPrimary"
                            }), (0, s.jsx)(n(16275).I, {
                                icon: n(68722).salesforceIcon,
                                colorVariant: "primary",
                                style: S.logoSize
                            })]
                        }), (0, s.jsx)(n(324489).V, {
                            style: S.connectedTitle,
                            isMultiline: !0,
                            children: a || l ? (0, s.jsx)(n(109939).sA, { ...r.salesforceAdminBotAlreadyConnected
                            }) : "auth_success" === i.type ? (0, s.jsx)(n(109939).sA, { ...r.salesforceConnected
                            }) : (0, s.jsx)(n(109939).sA, { ...r.salesforceNotConnected
                            })
                        }), (0, s.jsx)(n(324489).V, {
                            style: S.connectedSubtitle,
                            isMultiline: !0,
                            children: (0, s.jsx)(n(109939).sA, { ...r.connectedDescription
                            })
                        }), t && (null == u ? void 0 : u.error) !== "site_change" ? (0, s.jsx)(n(64960).Ay, {
                            style: S.backToNotionButton,
                            onClick: t,
                            children: (0, s.jsx)(n(109939).sA, { ...r.backToNotion
                            })
                        }) : void 0]
                    }), h ? (0, s.jsx)(n(4458).VP, {
                        gap: "inherit",
                        width: "100%",
                        style: S.securityFeatures,
                        children: g.map((e, t) => (0, s.jsxs)(n(4458).fI, {
                            padding: 12,
                            gap: 16,
                            alignItems: "flex-start",
                            style: S.securityFeature,
                            children: [(0, s.jsx)(n(16275).I, {
                                icon: e.icon,
                                size: "default",
                                colorVariant: "secondary",
                                style: S.featureIcon
                            }), (0, s.jsxs)("div", {
                                style: S.securityContent,
                                children: [(0, s.jsx)(n(324489).V, {
                                    style: S.featureTitle,
                                    isMultiline: !0,
                                    children: (0, s.jsx)(n(109939).sA, { ...e.title
                                    })
                                }), (0, s.jsx)(n(324489).V, {
                                    style: S.featureDescription,
                                    isMultiline: !0,
                                    children: (0, s.jsx)(n(109939).sA, { ...e.description
                                    })
                                })]
                            })]
                        }, t))
                    }) : (0, s.jsx)(n(324489).V, {
                        style: S.errorDescription,
                        isMultiline: !0,
                        children: (null == u ? void 0 : u.errorDescription) || (0, s.jsx)(n(109939).sA, { ...r.fallbackErrorDescription
                        })
                    }), (null == u ? void 0 : u.error) === "site_change" && p ? (0, s.jsx)(n(324489).V, {
                        style: S.errorDescription,
                        isMultiline: !0,
                        children: (0, s.jsx)(n(109939).sA, { ...r.siteChangeErrorDescription
                        })
                    }) : null, (0, s.jsx)("div", {
                        style: S.buttonsSectionWrapper,
                        children: (0, s.jsxs)(n(4458).VP, {
                            gap: 8,
                            style: S.buttonsSection,
                            children: [c ? (0, s.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                size: "lg",
                                style: S.proceedToUserAuthButton,
                                onClick: c,
                                disabled: !1,
                                children: (0, s.jsx)(n(109939).sA, { ...r.proceedToUserAuth
                                })
                            }) : void 0, (null == u ? void 0 : u.error) === "site_change" && p ? (0, s.jsx)(n(912946).A, {
                                colorPalette: "red",
                                size: "lg",
                                style: S.disconnectButton,
                                onClick: async () => {
                                    n(36423).A.reset(), await o({
                                        environment: d,
                                        spaceId: p
                                    })
                                },
                                children: (0, s.jsx)(n(109939).sA, { ...r.DisconnectSalesforce
                                })
                            }) : void 0, h ? void 0 : (0, s.jsx)(M, {})]
                        })
                    })]
                })
            }
            let b = {
                box: {
                    border: `1px solid ${n(632079).Tj.border.secondary}`,
                    padding: "8px 4px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    marginBottom: 24,
                    borderRadius: 10,
                    height: "100%",
                    overflow: "scroll",
                    boxShadow: "0px 1px 2px 0px #00000008, 0px 4px 48px 0px #00000012",
                    backdropFilter: "blur(50px)"
                },
                avatar: {
                    borderRadius: 6,
                    gap: 8,
                    padding: "0px 8px"
                }
            };

            function w() {
                let e = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore),
                    {
                        workspaceOwners: t
                    } = (0, n(413297).P)({
                        spaceStore: e
                    });
                return (0, s.jsx)("div", {
                    style: b.box,
                    className: n(394112).A5,
                    children: (null == t ? void 0 : t.map(e => (0, s.jsx)(n(241075).A, {
                        actorStore: e,
                        containerStyle: b.avatar
                    }, e.id))) || null
                })
            }
            let I = {
                learnMoreButton: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    width: "100%",
                    height: 36,
                    lineHeight: 1.5,
                    textAlign: "center",
                    fontSize: 14,
                    color: n(632079).Tj.text.secondary
                }
            };

            function M() {
                return (0, s.jsx)(n(68774).N, {
                    href: "https://www.notion.com/help/salesforce",
                    external: !0,
                    children: (0, s.jsx)(n(988022).p, {
                        iconLeading: n(211052).questionMarkCircleSmallIcon,
                        colorPalette: "gray",
                        size: "lg",
                        style: I.learnMoreButton,
                        children: (0, s.jsx)(n(109939).sA, { ...r.learnMore
                        })
                    })
                })
            }

            function T() {
                return (0, s.jsx)(c, {})
            }
        },
        314084: (e, t, n) => {
            n.d(t, {
                t: () => s
            }), n(296540);
            var i = n(474848);
            let o = {
                kVAEAm: "x1n2onr6",
                $$css: !0
            };

            function s(e) {
                let {
                    children: t,
                    footer: s,
                    header: r,
                    showDismissButton: a = !0,
                    sizeRange: l,
                    gap: c = 24
                } = e;
                return (0, i.jsxs)(n(4458).VP, {
                    paddingBlock: 20,
                    minHeight: null == l ? void 0 : l.minHeight,
                    maxHeight: null == l ? void 0 : l.maxHeight,
                    minWidth: null == l ? void 0 : l.minWidth,
                    maxWidth: null == l ? void 0 : l.maxWidth,
                    gap: c,
                    style: o,
                    className: "autolayout-fill-width",
                    children: [(0, i.jsx)("div", {
                        className: "xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: r
                    }), t ? (0, i.jsx)("div", { ...{
                            className: "x78zum5 x1iyjqo2 x6ikm8r x10wlt62"
                        },
                        children: (0, i.jsx)("div", {
                            className: "x78zum5 x1iyjqo2 x1nn3v0j x1xnnf8n x1120s5i x106a9eq x1odjw0f",
                            children: t
                        })
                    }) : null, s ? (0, i.jsx)("div", {
                        className: "xr1yuqi xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: s
                    }) : null, a ? (0, i.jsx)(n(226512).R, {}) : null]
                })
            }
        },
        413297: (e, t, n) => {
            n.d(t, {
                P: () => i
            }), n(898992), n(354520), n(581454);

            function i(e) {
                let {
                    spaceStore: t,
                    skip: i = !1
                } = e, o = (0, n(533992).v3)(), s = (0, n(345776).T)(), [{
                    status: r,
                    value: a
                }] = (0, n(97668).Yb)(async () => {
                    let e = null == t ? void 0 : t.id;
                    if (!i && e) {
                        if (n(908032).i({
                                userId: s,
                                spaceId: e,
                                debugFrom: "useWorkspaceOwners"
                            })) {
                            let e = n(218744).default.getConfigKey("email_alias_migration", "mode"),
                                i = await o.api.callApi({
                                    eventName: "listUsers",
                                    environment: o,
                                    data: {
                                        cursor: void 0,
                                        membershipFilter: "owners",
                                        limit: 1e3,
                                        query: "",
                                        spaceId: t.id,
                                        includeAliasSearch: (0, n(485477).K)(e)
                                    }
                                });
                            return "success" === i.type ? i.data.users.map(e => e.id) : []
                        } {
                            let e = (0, n(840752).M)({
                                spaceId: null == t ? void 0 : t.id,
                                userId: s,
                                enforceIdsCheck: !1,
                                debugFrom: "useWorkspaceOwners"
                            });
                            return e ? (0, n(576968).B)(e).filter(e => (0, n(729052).Jm)(e.membershipType)).map(e => e.userId) : []
                        }
                    }
                }, [o, t, i, s]);
                return {
                    status: r,
                    workspaceOwners: (0, n(682985).K8)(() => !i && a && t ? a.map(e => (0, n(505116).z)({
                        userId: e,
                        spaceStore: t
                    })) : [], [a, t, i])
                }
            }
        },
        454043: (e, t, n) => {
            n.d(t, {
                z: () => r
            });
            var i = n(296540),
                o = n(474848);
            let s = {
                tooltipActorName: {
                    fontWeight: n(699422).Wy.medium,
                    color: n(632079).Tj.text.inversePrimary
                },
                tooltipText: {
                    color: n(632079).Tj.text.inverseSecondary,
                    fontSize: 12
                },
                icon: {
                    width: 18,
                    height: 18
                },
                textWrapper: {
                    overflow: "hidden",
                    minWidth: 0,
                    flex: 1
                },
                style0: {
                    alignSelf: "center",
                    cursor: "pointer"
                }
            };

            function r({
                integrationIconUrl: e,
                integrationIcon: t,
                primaryText: a,
                secondaryText: l,
                compact: c = !1,
                tooltipContent: d
            }) {
                let u = (0, n(960253).I)(() => ({
                        container: {
                            borderRadius: 8,
                            border: "1px solid rgba(84, 72, 49, 0.15)",
                            paddingTop: c ? 8 : 14,
                            paddingBottom: c ? 8 : 14,
                            paddingInline: c ? 8 : 14,
                            gap: 8,
                            display: "flex",
                            flexGrow: 1,
                            minWidth: 0,
                            overflow: "hidden"
                        }
                    }), [c]),
                    h = (0, i.useMemo)(() => {
                        if (!d) return;
                        let e = d.connectedAt ? (0, n(799843).nl)(d.connectedAt, {
                            useCompactFormat: !0,
                            useLowercase: !0
                        }) : void 0;
                        return (0, o.jsx)(n(109939).sA, {
                            defaultMessage: "Connected by {connectedBy} {connectedAt}",
                            id: "database.viewSettings.collectionSettingsExternalSource.salesforceConnectedBy",
                            values: {
                                connectedBy: (0, o.jsx)("span", {
                                    style: s.tooltipActorName,
                                    children: d.connectedBy
                                }),
                                connectedAt: e
                            }
                        })
                    }, [d]),
                    f = (0, o.jsx)(n(51831).m, {
                        content: e => (0, o.jsx)("span", {
                            style: s.tooltipText,
                            ...e,
                            children: h
                        }),
                        disableTooltip: !d,
                        placement: "top",
                        children: e => (0, o.jsx)("div", { ...e,
                            style: s.style0,
                            children: (0, o.jsx)(n(16275).I, {
                                icon: n(15956).checkmarkIcon,
                                size: "default",
                                colorVariant: "secondary"
                            })
                        })
                    });
                return (0, o.jsxs)("div", {
                    style: u.container,
                    children: [e ? (0, o.jsx)("img", {
                        style: s.icon,
                        src: e,
                        alt: ""
                    }) : t || void 0, (0, o.jsxs)("div", {
                        style: s.textWrapper,
                        children: [(0, o.jsx)(n(111010).D, {
                            lineClamp: 1,
                            styleKey: "bodyRegular",
                            colorVariant: "primary",
                            children: a
                        }), (0, o.jsx)(n(111010).D, {
                            lineClamp: 1,
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: l
                        })]
                    }), c ? void 0 : f]
                })
            }
        },
        505116: (e, t, n) => {
            n.d(t, {
                z: () => i
            });

            function i(e) {
                let {
                    userId: t,
                    spaceStore: i
                } = e;
                return n(807825).L.createChildStore(i, {
                    table: n(832375).oo9,
                    id: t
                })
            }
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
        577280: (e, t, n) => {
            n.d(t, {
                w: () => o
            }), n(296540);
            var i = n(474848);

            function o(e) {
                let {
                    labelType: t
                } = e, o = "invited" === t ? n(805186).S.invitedLabel : "external" === t ? n(805186).S.externalLabel : n(805186).S.guestLabel;
                return (0, i.jsx)(n(746434).E, {
                    content: (0, i.jsx)(n(109939).sA, { ...o
                    }),
                    color: "invited" === t || "external" === t ? "gray" : "yellow"
                })
            }
        },
        582471: (e, t, n) => {
            n.d(t, {
                Y: () => r
            }), n(296540);
            var i = n(474848);
            let o = {
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textWrap: "balance"
                },
                s = {
                    position: "relative"
                };

            function r(e) {
                let {
                    iconAndTitle: t,
                    description: r
                } = e;
                return t || r ? (0, i.jsxs)(n(4458).VP, {
                    gap: 8,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: s,
                    children: [t, r ? (0, i.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: o,
                        children: r
                    }) : null]
                }) : null
            }
        },
        720722: (e, t, n) => {
            n.d(t, {
                m: () => s
            }), n(296540);
            var i = n(474848);
            let o = {
                header: {
                    fontWeight: n(699422).Wy.bold,
                    fontSize: 26,
                    textAlign: "center",
                    marginBottom: 4,
                    lineHeight: "32px"
                },
                iconGroup: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gridColumnGap: 9,
                    marginBottom: 12,
                    height: 40
                },
                arrowRight: {
                    width: 20,
                    height: 20,
                    opacity: .4,
                    fontWeight: n(699422).Wy.bold,
                    padding: 3
                },
                notionLogo: {
                    height: 40,
                    width: 40,
                    color: n(632079).Tj.icon.primary
                },
                icon: {
                    height: 32,
                    width: 32
                },
                description: {
                    textAlign: "center",
                    color: n(632079).Tj.text.secondary,
                    fontWeight: n(699422).Wy.regular,
                    fontSize: 14,
                    lineHeight: "20px"
                }
            };

            function s(e) {
                let {
                    title: t,
                    description: s,
                    integrationIconUrl: r,
                    integrationIcon: a,
                    children: l,
                    styles: c
                } = e;
                return (0, i.jsxs)("div", {
                    style: null == c ? void 0 : c.wrapper,
                    children: [(0, i.jsxs)("div", {
                        style: { ...o.iconGroup,
                            ...null == c ? void 0 : c.iconGroup
                        },
                        children: [(0, n(792668).notionIcon)(o.notionLogo), (0, i.jsx)(n(16275).I, {
                            icon: n(53445).arrowLeftRightIcon,
                            style: { ...o.arrowRight,
                                ...null == c ? void 0 : c.arrowRight
                            }
                        }), r ? (0, i.jsx)("img", {
                            style: { ...o.icon,
                                ...null == c ? void 0 : c.icon
                            },
                            src: r,
                            alt: "Integration Icon"
                        }) : a]
                    }), t ? (0, i.jsx)("div", {
                        style: { ...o.header,
                            ...null == c ? void 0 : c.header
                        },
                        children: t
                    }) : void 0, s ? (0, i.jsx)("div", {
                        style: { ...o.description,
                            ...null == c ? void 0 : c.description
                        },
                        children: s
                    }) : void 0, l]
                })
            }
        },
        840752: (e, t, n) => {
            n.d(t, {
                M: () => i
            });

            function i(e) {
                let {
                    spaceId: t,
                    userId: i,
                    enforceIdsCheck: o,
                    debugFrom: s
                } = e, r = (0, n(451963).f)({
                    spaceId: t,
                    userId: i,
                    enforceIdsCheck: o,
                    debugFrom: s
                });
                return null == r ? void 0 : r.state
            }
        },
        913825: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personKeyFillIcon: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.68 2.37 15.23 17.3",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M10 2.375c-1.137 0-2.054.47-2.674 1.242-.608.757-.9 1.765-.9 2.824s.292 2.066.9 2.824c.62.772 1.537 1.241 2.674 1.241s2.055-.469 2.675-1.241c.608-.758.9-1.766.9-2.824 0-1.059-.292-2.067-.9-2.824-.62-.773-1.538-1.242-2.675-1.242m0 9.255c-2.7 0-5.101 1.315-6.12 3.305-.361.706-.199 1.421.23 1.923.412.48 1.06.767 1.74.767h7.88v-1.79a3.96 3.96 0 0 1-1.439-3.876 8 8 0 0 0-2.291-.33m8.906 1.09a2.72 2.72 0 0 1-1.51 2.436v1.34l-.906 1.057.906 1.057-1.209 1.058-1.208-1.058v-3.454a2.719 2.719 0 1 1 3.927-2.436m-2.02-.604a.698.698 0 1 0-1.396 0 .698.698 0 0 0 1.395 0"
                    })
                },
                o = (0, n(104509).wt)("personKeyFill", i, "fill")
        },
        960235: (e, t, n) => {
            n.d(t, {
                J: () => r,
                z: () => s
            });
            let i = new(n(815048)).O2("CollectionSettingsUpsell", async () => n.e(9243).then(n.bind(n, 137838))),
                o = new(n(815048)).O2("CollectionSettingsUpsellMaybe", async () => n.e(9243).then(n.bind(n, 137838))),
                s = (0, n(815048)._h)(i, e => e.CollectionSettingsUpsell),
                r = (0, n(815048)._h)(o, e => e.CollectionSettingsUpsellMaybe)
        }
    }
]);