"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [28763, 60858], {
        59651: (e, t, i) => {
            i.d(t, {
                l: () => n
            });
            let a = {
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

            function n(e) {
                if (e) return a[e]
            }
        },
        190229: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => g
            }), i(898992), i(354520);
            var a = i(296540);
            i(672577), i(581454);
            let n = (0, i(109939).YK)({
                pleaseTryAgainMsg: {
                    defaultMessage: "Please try again",
                    id: "dialog.pleaseTryAgainMsg"
                },
                AuthenticationFailedMsg: {
                    defaultMessage: "Authentication failed. Please try again.",
                    id: "jiraDCAuthActions.authenticationFailedMsg"
                }
            });
            async function s(e) {
                let {
                    environment: t,
                    siteValue: a,
                    tokenValue: s,
                    usernameValue: o,
                    passwordValue: r
                } = e, l = i(639675).Ay.getFlowId(), c = i(639675).Ay.state;
                (0, i(104310).u)({
                    event: {
                        eventName: "external_sync_auth",
                        eventProperties: {
                            integration: "jira-dc",
                            actionType: "auth_initiated",
                            flowId: l
                        }
                    }
                });
                try {
                    let e, d = i(610463).A.integrations.state.find(e => e.id === i(49361).Fv);
                    if (!d || !c.spaceId || !t.currentUser.id) {
                        i(647095).ui({
                            message: i(962299).A.formatMessage(n.pleaseTryAgainMsg),
                            showCancel: !1,
                            keepFocus: !1,
                            items: [{
                                label: i(962299).A.formatMessage(n.pleaseTryAgainMsg),
                                onAccept: i(763230).D_
                            }]
                        }), i(773352).log({
                            level: "info",
                            from: "jiraDCAuthActions",
                            type: "authenticateWithJiraDC",
                            data: {
                                message: "Missing required data to authenticate with Jira DC",
                                miscDataToConvertToString: {
                                    siteValue: a,
                                    userId: t.currentUser.id,
                                    spaceId: c.spaceId
                                }
                            }
                        });
                        return
                    }
                    let u = d.id,
                        h = (0, i(212527).UI)(i(986939).A.domainBaseUrl),
                        p = d.redirect_uris.includes(h) ? h : d.redirect_uris[0],
                        g = await t.api.callApi({
                            eventName: "createOauthAuthorizationCode",
                            environment: t,
                            data: {
                                integrationId: u,
                                spaceId: c.spaceId,
                                redirectUri: p
                            }
                        });
                    if ("failed" === g.type) {
                        i(647095).Qg(g);
                        let e = (0, i(201790).V4)(g);
                        return i(773352).log({
                            level: "error",
                            from: "jiraDCAuthActions",
                            type: "authenticateWithJiraDC",
                            data: {
                                message: "Unexpected error creating authorization code",
                                miscDataToConvertToString: {
                                    response: g,
                                    errorMessage: e,
                                    siteValue: a,
                                    userId: t.currentUser.id,
                                    spaceId: c.spaceId
                                }
                            }
                        }), (0, i(104310).u)({
                            event: {
                                eventName: "external_sync_auth",
                                eventProperties: {
                                    integration: "jira-dc",
                                    actionType: "auth_status",
                                    flowId: l,
                                    status: "failed"
                                }
                            }
                        }), {
                            error: `Unexpected error creating authorization code: ${e}`
                        }
                    }
                    let m = g.data.code;
                    if (e = "Basic" === c.authenticationType ? await t.api.callApi({
                            eventName: "authenticateJiraDCUser",
                            environment: t,
                            data: {
                                domain: a,
                                userId: t.currentUser.id,
                                spaceId: c.spaceId,
                                notionAuthorizationCode: m,
                                username: o,
                                password: r,
                                authType: "Basic"
                            }
                        }) : await t.api.callApi({
                            eventName: "authenticateJiraDCUser",
                            environment: t,
                            data: {
                                domain: a,
                                userId: t.currentUser.id,
                                spaceId: c.spaceId,
                                personalAccessToken: s,
                                notionAuthorizationCode: m
                            }
                        }), (0, i(104310).u)({
                            event: {
                                eventName: "external_sync_auth",
                                eventProperties: {
                                    integration: "jira-dc",
                                    actionType: "auth_status",
                                    flowId: l,
                                    status: "success" === e.type ? "success" : "failed"
                                }
                            }
                        }), "failed" === e.type || "AUTHENTICATION_FAILED" === e.data.code) {
                        let s = "failed" === e.type ? (0, i(201790).V4)(e) : n.AuthenticationFailedMsg.defaultMessage;
                        i(647095).ui({
                            message: s,
                            showCancel: !1,
                            keepFocus: !1,
                            items: [{
                                label: i(962299).A.formatMessage(i(647095)._0.dismissButtonLabel),
                                onAccept: i(763230).D_
                            }]
                        }), i(773352).log({
                            level: "error",
                            from: "jiraDCAuthActions",
                            type: "authenticateWithJiraDC",
                            data: {
                                message: "Failed to authenticate with Jira DC",
                                miscDataToConvertToString: {
                                    authResponse: e,
                                    errorMessage: s,
                                    errorStatus: e.status,
                                    siteValue: a,
                                    userId: t.currentUser.id,
                                    spaceId: c.spaceId
                                }
                            }
                        })
                    } else {
                        i(773352).log({
                            level: "info",
                            from: "jiraDCAuthActions",
                            type: "authenticateWithJiraDC",
                            data: {
                                message: "Authentication with Jira DC is successful",
                                miscDataToConvertToString: {
                                    siteValue: a,
                                    userId: t.currentUser.id,
                                    spaceId: c.spaceId
                                }
                            }
                        }), await i(994869).refreshExternalIntegrationStore({
                            environment: t
                        });
                        let e = c.notionState;
                        i(639675).Ay.setState({ ...i(639675).Ay.state,
                            open: !1,
                            isMemberAuthSuccessForDataCenter: !0,
                            notionState: void 0
                        }), e && await i(994869).activateFromRedirect({
                            environment: t,
                            notionState: e
                        })
                    }
                } catch (e) {
                    (0, i(104310).u)({
                        event: {
                            eventName: "external_sync_auth",
                            eventProperties: {
                                integration: "jira-dc",
                                actionType: "auth_status",
                                flowId: l,
                                status: "failed"
                            }
                        }
                    }), i(773352).log({
                        level: "error",
                        from: "jiraDCAuthActions",
                        type: "authenticateWithJiraDC",
                        data: {
                            message: "Failed to authenticate with Jira DC",
                            miscDataToConvertToString: {
                                siteValue: a,
                                userId: t.currentUser.id,
                                spaceId: c.spaceId
                            }
                        },
                        error: (0, i(416607).convertErrorToLog)(e)
                    })
                }
            }
            var o = i(474848);
            let r = {
                    width: 300,
                    whiteSpace: "normal"
                },
                l = {
                    inputLabels: {
                        fontSize: i(699422).J.UISmall.desktop,
                        fontWeight: i(699422).Wy.semibold,
                        font: "SF Pro",
                        lineHeight: i(699422).K_.UISmall.desktop,
                        color: i(632079).Tj.text.tertiary
                    },
                    inputBox: {
                        width: "100%",
                        height: 28,
                        padding: 4,
                        gap: 4
                    },
                    invalidInput: {
                        boxShadow: i(632079).Tj.inputRedFocusRing
                    },
                    style1: {
                        overflowY: "scroll"
                    },
                    style2: {
                        padding: 2
                    },
                    style4: {
                        marginInlineStart: 12
                    }
                };

            function c(e) {
                let {
                    site: t,
                    APIToken: a,
                    username: n,
                    password: r,
                    jiraDataCenterBasicAuthEnabled: c,
                    jiraDCVersion: d,
                    formValues: {
                        site: h,
                        token: p,
                        username: g,
                        password: m
                    },
                    onChange: f,
                    invalidFields: y,
                    hidePopup: x,
                    environment: A
                } = e, j = (0, i(682985).O$)(i(639675).Ay);
                return (0, o.jsx)(i(519451).A, {
                    debugName: "AtlassianAPIAuthContentPopup",
                    capture: !0,
                    children: (0, o.jsxs)(i(4458).VP, {
                        justifyContent: "space-between",
                        height: "100%",
                        width: "100%",
                        children: [(0, o.jsx)("div", {
                            style: l.style1,
                            children: (0, o.jsxs)("div", {
                                style: l.style2,
                                children: [(0, o.jsx)("div", {
                                    children: c ? (0, o.jsx)("div", {
                                        children: (0, o.jsxs)("div", {
                                            children: [(0, o.jsx)("label", {
                                                htmlFor: "jiraDCVersion",
                                                style: l.inputLabels,
                                                children: d
                                            }), (0, o.jsx)(u, {
                                                onSelectOption: e => {
                                                    i(639675).Ay.setState({ ...i(639675).Ay.state,
                                                        authenticationType: e
                                                    })
                                                },
                                                options: [{
                                                    key: i(639675).XT.Bearer,
                                                    label: (0, o.jsx)(i(109939).sA, {
                                                        id: "jiraAuthentication.jiraDCNewerVersionOption.label",
                                                        defaultMessage: "8.14 or later"
                                                    })
                                                }, {
                                                    key: i(639675).XT.Basic,
                                                    label: (0, o.jsx)(i(109939).sA, {
                                                        id: "jiraAuthentication.jiraDCOlderVersionOption.label",
                                                        defaultMessage: "Prior to 8.14"
                                                    })
                                                }],
                                                currentOption: j.authenticationType ? ? i(639675).XT.Bearer
                                            })]
                                        })
                                    }) : void 0
                                }), (0, o.jsx)(i(346268).c, {
                                    size: 14,
                                    isHidden: !0
                                }), (0, o.jsxs)("div", {
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "site",
                                        style: l.inputLabels,
                                        children: t
                                    }), (0, o.jsx)(i(346268).c, {
                                        size: 8,
                                        isHidden: !0
                                    }), (0, o.jsx)(i(36481).p, {
                                        id: "site",
                                        value: h,
                                        onChange: e => f("site", e.target.value),
                                        showClearButton: !0,
                                        placeholder: "https://domain.com",
                                        inputElementAttributes: {
                                            minLength: 4
                                        },
                                        style: { ...l.inputBox,
                                            ...y.includes("site") && l.invalidInput
                                        }
                                    })]
                                }), (0, o.jsx)(i(346268).c, {
                                    size: 14,
                                    isHidden: !0
                                }), (0, o.jsx)("div", {
                                    children: c && j.authenticationType === i(639675).XT.Basic ? (0, o.jsxs)("div", {
                                        children: [(0, o.jsxs)("div", {
                                            children: [(0, o.jsx)("label", {
                                                htmlFor: "username",
                                                style: l.inputLabels,
                                                children: n
                                            }), (0, o.jsx)(i(346268).c, {
                                                size: 8,
                                                isHidden: !0
                                            }), (0, o.jsx)(i(36481).p, {
                                                id: "username",
                                                type: "username",
                                                value: g,
                                                onChange: e => {
                                                    f("username", e.target.value)
                                                },
                                                showClearButton: !0,
                                                placeholder: "Enter your username",
                                                inputElementAttributes: {
                                                    minLength: 4
                                                },
                                                style: { ...l.inputBox,
                                                    ...y.includes("username") && l.invalidInput
                                                }
                                            }), (0, o.jsx)(i(346268).c, {
                                                size: 8,
                                                isHidden: !0
                                            })]
                                        }), (0, o.jsx)(i(346268).c, {
                                            size: 14,
                                            isHidden: !0
                                        }), (0, o.jsxs)("div", {
                                            children: [(0, o.jsx)("label", {
                                                htmlFor: "password",
                                                style: l.inputLabels,
                                                children: r
                                            }), (0, o.jsx)(i(346268).c, {
                                                size: 8,
                                                isHidden: !0
                                            }), (0, o.jsx)(i(36481).p, {
                                                id: "password",
                                                type: "password",
                                                value: m,
                                                onChange: e => {
                                                    f("password", e.target.value)
                                                },
                                                showClearButton: !0,
                                                placeholder: "Enter your password",
                                                inputElementAttributes: {
                                                    minLength: 4
                                                },
                                                style: { ...l.inputBox,
                                                    ...y.includes("password") && l.invalidInput
                                                }
                                            }), (0, o.jsx)(i(346268).c, {
                                                size: 8,
                                                isHidden: !0
                                            })]
                                        }), (0, o.jsx)(i(346268).c, {
                                            size: 14,
                                            isHidden: !0
                                        })]
                                    }) : (0, o.jsxs)("div", {
                                        children: [(0, o.jsxs)("div", {
                                            children: [(0, o.jsx)("label", {
                                                htmlFor: "APIToken",
                                                style: l.inputLabels,
                                                children: a
                                            }), (0, o.jsx)(i(346268).c, {
                                                size: 8,
                                                isHidden: !0
                                            }), (0, o.jsx)(i(36481).p, {
                                                id: "AccessToken",
                                                type: "password",
                                                value: p,
                                                onChange: e => {
                                                    f("token", e.target.value)
                                                },
                                                showClearButton: !0,
                                                placeholder: "Paste your token here",
                                                inputElementAttributes: {
                                                    minLength: 4
                                                },
                                                style: { ...l.inputBox,
                                                    ...(j.adminTokenError || y.includes("token")) && l.invalidInput
                                                }
                                            }), j.adminTokenError ? (0, o.jsxs)(o.Fragment, {
                                                children: [(0, o.jsx)(i(346268).c, {
                                                    size: 6,
                                                    isHidden: !0
                                                }), (0, o.jsx)(i(111010).D, {
                                                    styleKey: "captionRegular",
                                                    colorPalette: "red",
                                                    colorVariant: "accentPrimary",
                                                    children: (0, o.jsx)(i(109939).sA, {
                                                        id: "AtlassianDCApiTokenAuthentication.adminPermissionError",
                                                        defaultMessage: "The API token doesn’t have admin permissions. Please add the admin scope to this token and try again"
                                                    })
                                                })]
                                            }) : void 0, (0, o.jsx)(i(346268).c, {
                                                size: 8,
                                                isHidden: !0
                                            })]
                                        }), (0, o.jsx)(i(346268).c, {
                                            size: 14,
                                            isHidden: !0
                                        })]
                                    })
                                })]
                            })
                        }), (0, o.jsxs)(i(4458).fI, {
                            justifyContent: "normal",
                            children: [(0, o.jsx)(i(912946).A, {
                                colorPalette: "blue",
                                size: "lg",
                                disabled: "Basic" === j.authenticationType && c ? !h || !g || !m : !h || !p,
                                onClick: async () => {
                                    await s({
                                        environment: A,
                                        siteValue: h,
                                        tokenValue: p,
                                        usernameValue: g,
                                        passwordValue: m
                                    })
                                },
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "JiraDCAuthentication.authenticateButton.label",
                                    defaultMessage: "Authenticate"
                                })
                            }), (0, o.jsx)(i(548436).A, {
                                size: "lg",
                                style: l.style4,
                                onClick: () => {
                                    x()
                                },
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "JiraDCAuthentication.cancelButton.label",
                                    defaultMessage: "Cancel"
                                })
                            })]
                        })]
                    })
                })
            }
            let d = {
                dropdownLabel: {
                    font: "SF Pro",
                    fontSize: i(699422).J.UIRegular.desktop,
                    fontWeight: i(699422).Wy.regular,
                    lineHeight: i(699422).K_.UISmall.desktop
                },
                style0: {
                    background: "rgba(0, 0, 0, 0)"
                },
                style1: {
                    position: "relative",
                    alignItems: "flex-end"
                }
            };

            function u(e) {
                var t;
                let {
                    onSelectOption: a,
                    options: n,
                    currentOption: s
                } = e, r = null == (t = n.find(({
                    key: e
                }) => e === s)) ? void 0 : t.label;
                return (0, o.jsx)(i(656252).A, {
                    popupType: i(656252).z.Popup,
                    placementToOrigin: "left",
                    content: e => {
                        let t = {
                                menuType: i(649476).gu.Popup,
                                width: 250,
                                left: 50
                            },
                            s = n.map(({
                                key: t,
                                label: n
                            }) => ({
                                key: t,
                                action: () => {
                                    a(t), e.close()
                                },
                                render: e => (0, o.jsx)(i(95582).A, { ...e,
                                    title: n,
                                    shouldWrapCaption: !0,
                                    isChecked: r === n
                                })
                            }));
                        return (0, o.jsx)(i(747369).A, { ...t,
                            children: (0, o.jsx)(i(558045).A, {
                                type: i(558045).O.Vertical,
                                sections: [{
                                    key: "settings-item-section",
                                    items: s
                                }],
                                initialFocus: void 0,
                                style: d.style1
                            })
                        })
                    },
                    children: e => (0, o.jsx)(i(988022).p, { ...e,
                        size: "lg",
                        style: d.dropdownLabel,
                        disabled: !1,
                        hoveredStyle: d.style0,
                        iconTrailing: {
                            icon: i(87963).arrowChevronSingleDownIcon,
                            colorVariant: "tertiary"
                        },
                        children: r
                    })
                })
            }
            let h = function(e) {
                    let t = (0, i(109939).tz)(),
                        a = t.formatMessage({
                            id: "jiraDataCenterAuth.siteHelperText",
                            defaultMessage: "The base URL that is used to access Jira. If you are running on a non-standard port, please provide the input in host:port format"
                        }),
                        n = t.formatMessage({
                            id: "jiraDataCenterAuth.stepsToGetPAT.caption",
                            defaultMessage: "Click to learn how to get personal authentication token from Jira server"
                        }),
                        s = t.formatMessage({
                            id: "AtlassianApiTokenAuthentication.stepsToGetDCVersion.captions",
                            defaultMessage: "Click to learn how to know the version of DC Server you are running"
                        });
                    return (0, o.jsx)(c, {
                        hidePopup: () => {
                            ! function(e) {
                                let {
                                    key: t,
                                    value: a
                                } = e;
                                i(639675).Ay.setState({ ...i(639675).Ay.state,
                                    [t]: a
                                })
                            }({
                                key: "open",
                                value: !1
                            })
                        },
                        site: (0, o.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: [(0, o.jsx)(i(109939).sA, {
                                id: "AtlassianApiTokenAuthentication.siteMessage",
                                defaultMessage: "Jira site url"
                            }), (0, o.jsx)(i(51831).m, {
                                style: r,
                                placement: "right",
                                content: () => a,
                                children: e => (0, o.jsx)(i(374533).A, {
                                    ariaLabel: a,
                                    disableBackground: !0,
                                    icon: i(372181).infoCircleSmallIcon,
                                    ...e
                                })
                            })]
                        }),
                        APIToken: (0, o.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: [(0, o.jsx)(i(109939).sA, {
                                id: "AtlassianDCApiTokenAuthentication.apiTokenMessage",
                                defaultMessage: "API token"
                            }), (0, o.jsx)(i(51831).m, {
                                placement: "right",
                                content: () => n,
                                children: e => (0, o.jsx)(i(374533).A, {
                                    ariaLabel: n,
                                    onClick: () => {
                                        window.open("https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html", "_blank")
                                    },
                                    icon: i(372181).infoCircleSmallIcon,
                                    ...e
                                })
                            })]
                        }),
                        username: (0, o.jsx)(i(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: (0, o.jsx)(i(109939).sA, {
                                id: "AtlassianDCApiTokenAuthentication.usernameMessage",
                                defaultMessage: "Jira username"
                            })
                        }),
                        password: (0, o.jsx)(i(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: (0, o.jsx)(i(109939).sA, {
                                id: "AtlassianDCApiTokenAuthentication.passwordMessage",
                                defaultMessage: "Jira password"
                            })
                        }),
                        jiraDCVersion: (0, o.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: [(0, o.jsx)(i(109939).sA, {
                                id: "AtlassianApiTokenAuthentication.DCVersion",
                                defaultMessage: "Jira version"
                            }), (0, o.jsx)(i(51831).m, {
                                style: r,
                                placement: "right",
                                content: () => s,
                                children: e => (0, o.jsx)(i(374533).A, {
                                    ariaLabel: s,
                                    onClick: () => {
                                        window.open("https://community.atlassian.com/t5/Jira-questions/Re-where-can-i-check-jira-version-am-using-how-to-check/qaq-p/664639/comment-id/218177#M218177", "_blank")
                                    },
                                    icon: i(372181).infoCircleSmallIcon,
                                    ...e
                                })
                            })]
                        }),
                        ...e
                    })
                },
                p = (0, i(109939).YK)({
                    headerTitle: {
                        id: "jiraDCAuthModal.header.title",
                        defaultMessage: "Authenticate your account"
                    }
                });

            function g() {
                let e = (0, i(533992).v3)(),
                    t = (0, i(682985).O$)(i(639675).Ay),
                    {
                        open: a,
                        type: n
                    } = t,
                    s = () => {
                        let e = i(639675).Ay.getInitialState();
                        i(639675).Ay.setState({ ...e,
                            open: !1
                        })
                    },
                    r = (0, i(682985).uB)(void 0, i(519156).A),
                    l = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore),
                    c = t.flowId || i(92513).JW(),
                    d = !!n && void 0 !== l && t.instanceValue !== i(639675).cK.Cloud && "dc-auth" === t.type;
                if ((0, i(805469).A)({
                        shouldPreserveTextSelection: a && d,
                        shouldPreserveBlockSelection: a && d,
                        shouldRestoreSelection: !0
                    }), !d) return null;
                let {
                    height: u,
                    width: h
                } = "auth" === n ? {
                    width: 450,
                    height: "fit-content"
                } : {
                    width: 400,
                    height: "fit-content"
                };
                return (0, o.jsx)(i(556809).a, {
                    open: a,
                    innerStyle: {
                        width: h,
                        height: u,
                        overflow: "scroll",
                        borderRadius: 5,
                        maxHeight: 675,
                        minHeight: 300,
                        padding: 6
                    },
                    onDismiss: s,
                    children: (0, o.jsx)(i(790124).A, {
                        capture: !0,
                        allowEsc: !0,
                        children: () => (0, o.jsx)(f, {
                            type: n,
                            handleModalClose: s,
                            environment: e,
                            requestStore: r,
                            spaceStore: l,
                            flowId: c
                        })
                    })
                })
            }
            let m = {
                paddingTop: 20,
                paddingInlineEnd: 14,
                paddingBottom: 10,
                paddingInlineStart: 14,
                height: "100%",
                display: "flex",
                flexDirection: "column"
            };

            function f(e) {
                let {
                    environment: t,
                    requestStore: n,
                    spaceStore: s
                } = e, r = e.flowId || i(92513).JW(), l = (0, i(682985).O$)(i(639675).Ay);
                return (0, a.useEffect)(() => {
                    l.flowId || i(639675).Ay.setState({ ...l,
                        flowId: r
                    })
                }, [l, r]), (0, o.jsx)("div", {
                    style: m,
                    children: (0, o.jsx)(A, {
                        handleModalClose: e.handleModalClose,
                        environment: t,
                        requestStore: n,
                        spaceStore: s,
                        flowId: r
                    })
                })
            }
            let y = {
                wrapper: {
                    marginBottom: 18
                },
                header: {
                    fontWeight: i(699422).Wy.medium,
                    fontSize: 17,
                    textAlign: "center",
                    marginTop: 8
                },
                icon: {
                    height: 40,
                    width: 40
                },
                iconGroup: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gridColumnGap: 9,
                    marginBottom: 9
                },
                arrowRight: {
                    opacity: .4,
                    fontWeight: i(699422).Wy.bold,
                    padding: 3
                },
                notionLogo: {
                    height: 40,
                    width: 40,
                    color: i(632079).Tj.icon.primary
                },
                closeButton: {
                    position: "absolute",
                    top: 14,
                    insetInlineEnd: 14,
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100%",
                    background: i(632079).Tj.buttonHoveredBackground,
                    width: 20,
                    height: 20
                },
                closeButtonHover: {
                    background: i(632079).Tj.buttonPressedBackground
                },
                closeButtonIcon: {
                    width: i(104509).Ev.xs,
                    height: i(104509).Ev.xs,
                    fill: i(632079).Tj.text.secondary
                }
            };

            function x({
                handleModalClose: e,
                caption: t,
                title: a
            }) {
                let n = (0, i(109939).tz)(),
                    s = a || p.headerTitle;
                return (0, o.jsxs)("div", {
                    style: y.wrapper,
                    children: [(0, o.jsx)(i(374533).A, {
                        ariaLabel: n.formatMessage({
                            id: "jiraDCAuthModal.header.closeButton.ariaLabel",
                            defaultMessage: "Close"
                        }),
                        onClick: e,
                        style: y.closeButton,
                        hoveredStyle: y.closeButtonHover,
                        icon: i(25094).xMarkSmallIcon,
                        iconStyle: y.closeButtonIcon
                    }), (0, o.jsxs)("div", {
                        style: y.iconGroup,
                        children: [(0, o.jsx)("img", {
                            style: y.icon,
                            src: i(896221).A.images.externalIntegrations.jiraPng,
                            alt: "Jira Icon"
                        }), (0, o.jsx)(i(16275).I, {
                            icon: i(988824).arrowStraightRightIcon,
                            style: y.arrowRight
                        }), (0, i(898378).notionTintableIcon)(y.notionLogo)]
                    }), (0, o.jsx)("div", {
                        style: y.header,
                        children: (0, o.jsx)(i(109939).sA, { ...s
                        })
                    }), t]
                })
            }

            function A({
                environment: e,
                handleModalClose: t
            }) {
                let [n, s] = (0, a.useState)([]), r = (0, i(682985).K8)(() => i(639675).Ay.state.site, []), [l, c] = a.useState({
                    site: r || "",
                    token: "",
                    username: "",
                    password: ""
                }), d = (0, i(682985).K8)(() => (0, i(23803).nh)(), []);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(x, {
                        handleModalClose: t
                    }), (0, o.jsx)(h, {
                        formValues: l,
                        onChange: (e, t) => {
                            c({ ...l,
                                [e]: t
                            }), s(t => t.filter(t => t !== e))
                        },
                        invalidFields: n,
                        environment: e,
                        jiraDataCenterBasicAuthEnabled: d
                    })]
                })
            }
        },
        372181: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                infoCircleSmallIcon: () => s
            }), i(296540);
            var a = i(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M7.9 4.425a.775.775 0 1 0 0 1.55.775.775 0 0 0 0-1.55M6.95 6.5a.625.625 0 1 0 0 1.25h.425V10H6.95a.625.625 0 1 0 0 1.25h2.1a.625.625 0 1 0 0-1.25h-.425V7.125A.625.625 0 0 0 8 6.5z"
                        }), (0, a.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                s = (0, i(104509).wt)("infoCircleSmall", n, "small")
        },
        496722: (e, t, i) => {
            i.d(t, {
                a: () => a
            });

            function a() {
                let e = i(728372).AppStoreSidebarSpaceStore.state;
                return e ? e.id : void 0
            }
        },
        766970: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => a,
                xMarkFillIcon: () => n
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                n = (0, i(104509).wt)("xMarkFill", a, "fill")
        },
        805469: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            var a = i(296540);
            let n = function({
                shouldPreserveTextSelection: e,
                shouldPreserveBlockSelection: t,
                shouldRestoreSelection: n,
                onClearSelection: s
            }) {
                let o = (0, i(533992).v3)(),
                    r = (0, a.useRef)(e),
                    l = (0, a.useRef)(""),
                    c = (0, a.useRef)({
                        selectionState: null,
                        textSelectionState: null
                    }),
                    d = (0, a.useCallback)(() => c.current, []),
                    u = (0, a.useCallback)(() => {
                        l.current = window.location.href, i(358377).default.hasSelection() && (c.current.textSelectionState = i(358377).default.cloneState()), (0, i(525779).clear)({
                            environment: o
                        }), t && (i(584265).default.isSelected() && (c.current.selectionState = i(584265).default.cloneState()), (0, i(471e3).I)({
                            environment: o
                        }))
                    }, [o, t]),
                    h = (0, a.useCallback)(() => {
                        c.current = {
                            selectionState: null,
                            textSelectionState: null
                        }, l.current = "", null == s || s()
                    }, [s]),
                    p = (0, a.useCallback)(() => {
                        let {
                            selectionState: e,
                            textSelectionState: a
                        } = c.current;
                        window.location.href === l.current && (a && "mode" in a && "editing" === a.mode && i(358377).default.setState({ ...i(358377).default.state,
                            ...a
                        }), t && e && i(584265).default.setState({ ...i(584265).default.state,
                            ...e
                        })), h()
                    }, [h, t]);
                return (0, i(383953).l)(() => {
                    r.current = e, e && u()
                }), (0, a.useEffect)(() => (r.current && !e ? n ? p() : h() : !r.current && e && u(), r.current = e, () => {
                    n ? p() : h()
                }), [e, h, p, u, n]), {
                    clearSavedSelection: h,
                    restoreSavedSelection: p,
                    getSavedSelection: d
                }
            }
        },
        898378: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => a,
                notionTintableIcon: () => n
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.76 1.39 16.47 17.17",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M12.32 1.437c1.17-.1 1.47-.032 2.205.501l3.039 2.136c.5.367.668.467.668.867v11.715c0 .734-.267 1.168-1.202 1.234l-11.055.667c-.702.034-1.036-.066-1.404-.533L2.333 15.12c-.4-.534-.567-.934-.567-1.401V3.306c0-.6.267-1.101 1.035-1.168zm4.241 3.871-10.854.634c-.4.034-.534.235-.534.668v9.945c0 .535.267.735.868.702l10.388-.601c.6-.033.668-.401.668-.835V5.942c0-.433-.167-.667-.536-.634m-1.134 1.836c.066.3 0 .601-.301.635l-.501.1v7.342c-.434.233-.835.367-1.169.367-.534 0-.668-.168-1.068-.668L9.113 9.78v4.973l1.036.233c0 .008-.005.6-.836.6l-2.303.135c-.067-.134 0-.468.233-.535l.602-.167V8.446L7.01 8.38c-.067-.3.1-.734.567-.768l2.472-.166 3.407 5.206V8.046l-.868-.1c-.067-.367.2-.635.534-.668zm-2.705-4.772-9.153.668c-.333.033-.4.2-.267.333l1.303 1.035c.534.433.735.4 1.737.333l9.452-.567c.2 0 .034-.2-.033-.233l-1.57-1.136c-.301-.233-.702-.5-1.47-.433"
                    })
                },
                n = (0, i(104509).wt)("notionTintable", a, "tintable")
        }
    }
]);