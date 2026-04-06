"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [68719, 77957], {
        45877: (e, t, n) => {
            n.d(t, {
                A: () => s
            }), n(296540);
            var o = n(474848);
            let i = {
                    "google-drive": "Google Workspace Super Admin",
                    "google-calendar": "Google Workspace Super Admin",
                    gmail: "Google Workspace Super Admin"
                },
                a = {
                    wrapper: {
                        width: 400
                    },
                    footer: {
                        boxShadow: n(632079).Tj.shadow.outline.lg
                    },
                    connectButton: {
                        fontSize: 14,
                        fontWeight: n(699422).Wy.semibold,
                        width: "100%"
                    },
                    iconWrapper: {
                        width: 16,
                        height: 16
                    }
                };

            function s(e) {
                let {
                    connector: t,
                    learnMoreUrl: s,
                    screenName: r
                } = e, l = (0, n(109939).tz)(), c = (0, n(682985).O$)(n(399077).NT[t]), {
                    currentScreen: d
                } = c;
                return (0, o.jsx)(n(556809).a, {
                    showCloseIcon: !0,
                    ariaLabel: l.formatMessage({
                        defaultMessage: "Ai Connector Not External Admin",
                        id: "aiConnectorOnboarding.notExternalAdmin.ariaLabel"
                    }),
                    onDismiss: () => n(399077).NT[t].setState({ ...c,
                        currentScreen: "none"
                    }),
                    open: d === r,
                    children: (0, o.jsxs)("div", {
                        style: a.wrapper,
                        children: [(0, o.jsx)(n(798790).b, {
                            connectorType: t,
                            title: (0, o.jsx)(n(109939).sA, {
                                id: "universalSearch.notAdmin.title",
                                defaultMessage: "Only a {externalAdminName} can connect",
                                values: {
                                    externalAdminName: i[t] ? ? ""
                                }
                            }),
                            subtext: (0, o.jsx)(n(109939).sA, {
                                id: "universalSearch.notAdmin.description",
                                defaultMessage: "We can’t verify that this account is a {externalAdminName}. Please contact your admin to link Notion using their account.",
                                values: {
                                    externalAdminName: i[t] ? ? ""
                                }
                            })
                        }), (0, o.jsx)(n(4458).VP, {
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: 60,
                            paddingTop: 20,
                            paddingInlineEnd: 20,
                            paddingBottom: 20,
                            paddingInlineStart: 20,
                            gap: 6,
                            style: a.footer,
                            children: (0, o.jsxs)(n(912946).A, {
                                colorPalette: "blue",
                                style: a.connectButton,
                                onClick: () => {
                                    window.open(s, "_blank")
                                },
                                children: [(0, o.jsx)(n(109939).sA, {
                                    id: "universalSearch.notAdmin.learnMore",
                                    defaultMessage: "Learn more"
                                }), (0, o.jsx)("div", {
                                    style: a.iconWrapper,
                                    children: (0, o.jsx)(n(16275).I, {
                                        icon: n(213458).arrowUpRightSquareIcon
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        75765: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                oneDriveIcon: () => a
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "-0.01 3.44 20.01 12.82",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)("g", {
                            clipPath: "url(#clip0_16020_1017)",
                            children: [(0, o.jsx)("path", {
                                fill: "#0364B8",
                                d: "m7.627 7.008 4.198 2.514 2.502-1.053a4.05 4.05 0 0 1 1.885-.321A6.25 6.25 0 0 0 4.936 6.264L5 6.262a5 5 0 0 1 2.627.746"
                            }), (0, o.jsx)("path", {
                                fill: "#0078D4",
                                d: "M7.627 7.007v.001A5 5 0 0 0 5 6.262l-.064.002A4.998 4.998 0 0 0 .898 14.12l3.703-1.558 1.646-.692 3.664-1.542 1.914-.806z"
                            }), (0, o.jsx)("path", {
                                fill: "#1490DF",
                                d: "M16.212 8.148a4.05 4.05 0 0 0-1.885.322l-2.502 1.052.726.435 2.378 1.424 1.037.622 3.548 2.125a4.062 4.062 0 0 0-3.302-5.98"
                            }), (0, o.jsx)("path", {
                                fill: "#28A8EA",
                                d: "m15.966 12.003-1.037-.622-2.378-1.424-.726-.435-1.914.806-3.664 1.542-1.646.692L.898 14.12A5 5 0 0 0 5 16.263h10.938a4.06 4.06 0 0 0 3.576-2.135z"
                            })]
                        }), (0, o.jsx)("defs", {
                            children: (0, o.jsx)("clipPath", {
                                id: "clip0_16020_1017",
                                children: (0, o.jsx)("path", {
                                    fill: "#fff",
                                    d: "M0 3.45h20v12.813H0z"
                                })
                            })
                        })]
                    })
                },
                a = (0, n(104509).wt)("oneDrive", i, "default")
        },
        92168: (e, t, n) => {
            n.d(t, {
                k: () => o
            });
            let o = (0, n(104509).xh)("arrowInCircleUp", {
                default: {
                    loader: () => n.e(15538).then(n.bind(n, 531718))
                },
                small: {
                    loader: () => n.e(15538).then(n.bind(n, 989556))
                },
                fill: {
                    loader: () => n.e(15538).then(n.bind(n, 682612))
                },
                fillSmall: {
                    loader: () => n.e(15538).then(n.bind(n, 96699))
                }
            }, ["arrow", "circle", "up", "direction", "pointer", "upgrade"])
        },
        93380: (e, t, n) => {
            n.d(t, {
                j: () => s
            });
            var o = () => n(546605);

            function i() {
                return {
                    isOpen: !1,
                    onSelect: void 0,
                    onDismiss: void 0,
                    isLoading: !1
                }
            }
            class a extends o().Store {
                getInitialState() {
                    return i()
                }
                open(e) {
                    this.setState({ ...this.state,
                        isOpen: !0,
                        onSelect: e.onSelect,
                        onDismiss: e.onDismiss
                    })
                }
                close() {
                    this.setState(i())
                }
                setLoading(e) {
                    this.setState({ ...this.state,
                        isLoading: e
                    })
                }
            }
            let s = new a;
            (0, n(202146).exposeDebugValue)("mailClientSelectionModalStore", s)
        },
        93684: (e, t, n) => {
            n.d(t, {
                A: () => l
            }), n(296540);
            var o = n(474848);
            let i = {
                    width: 400,
                    alignItems: "center"
                },
                a = {
                    paddingTop: 0,
                    paddingInlineEnd: 20,
                    paddingBottom: 24,
                    paddingInlineStart: 20,
                    gap: 8
                },
                s = {
                    gap: 19
                },
                r = {
                    width: "100%"
                },
                l = function(e) {
                    let {
                        onDismiss: t,
                        onClickGotItBtn: l,
                        open: c,
                        title: d,
                        descriptionMessage: u,
                        connectorType: p,
                        message: g
                    } = e;
                    return (0, o.jsx)(n(556809).a, {
                        showCloseIcon: !0,
                        open: c,
                        onDismiss: t,
                        children: (0, o.jsxs)("div", {
                            style: i,
                            children: [(0, o.jsx)(n(798790).b, {
                                connectorType: p,
                                title: d,
                                subtext: u
                            }), (0, o.jsxs)("div", {
                                style: a,
                                children: [g ? (0, o.jsx)("div", {
                                    style: s,
                                    children: g
                                }) : void 0, (0, o.jsx)("div", {
                                    children: (0, o.jsx)(n(548436).A, {
                                        size: "lg",
                                        style: r,
                                        onClick: l,
                                        children: (0, o.jsx)(n(109939).sA, {
                                            id: "aiConnectors.common.disconnectModal.confirmDisconnect",
                                            defaultMessage: "Got it"
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        103378: (e, t, n) => {
            n.d(t, {
                b: () => s
            });
            var o = n(296540),
                i = n(474848);
            let a = {
                wrapper: {
                    width: 400
                },
                footer: {
                    boxShadow: n(632079).Tj.shadow.outline.lg
                },
                connectButton: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.semibold,
                    width: "100%"
                }
            };

            function s(e) {
                let {
                    connector: t,
                    title: s,
                    subtext: r,
                    handleErrorDismissClick: l
                } = e, c = (0, n(109939).tz)(), d = (0, n(682985).O$)(n(399077).NT[t]), {
                    currentScreen: u,
                    sessionId: p,
                    analyticsFrom: g
                } = d, m = (0, n(533992).v3)(), h = "error" === u;
                (0, o.useEffect)(() => {
                    h && (0, n(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "info_screen_connect_error",
                                integration_type: t,
                                setup_session_id: p,
                                from: g
                            }
                        }
                    })
                }, [h, g, p, m, t]);
                let f = (0, o.useCallback)(() => {
                    n(399077).NT[t].setState({ ...d,
                        currentScreen: "none"
                    }), null == l || l()
                }, [d, t, l]);
                return (0, i.jsx)(n(556809).a, {
                    ariaLabel: c.formatMessage({
                        defaultMessage: "Ai Connector Error Modal",
                        id: "aiConnectorOnboarding.errorModal.ariaLabel"
                    }),
                    showCloseIcon: !0,
                    onDismiss: f,
                    open: h,
                    children: (0, i.jsxs)("div", {
                        style: a.wrapper,
                        children: [(0, i.jsx)(n(798790).b, {
                            connectorType: t,
                            title: s || (0, i.jsx)(n(109939).sA, {
                                id: "universalSearch.errorModal.title",
                                defaultMessage: "Oops! Something went wrong"
                            }),
                            subtext: r || (0, i.jsx)(n(109939).sA, {
                                id: "universalSearch.errorModal.description",
                                defaultMessage: "Something went wrong, please try again later."
                            })
                        }), (0, i.jsx)(n(4458).VP, {
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: 60,
                            paddingTop: 20,
                            paddingInlineEnd: 20,
                            paddingBottom: 20,
                            paddingInlineStart: 20,
                            gap: 6,
                            style: a.footer,
                            children: (0, i.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                style: a.connectButton,
                                onClick: f,
                                children: (0, i.jsx)(n(109939).sA, {
                                    id: "universalSearch.error.Dismiss",
                                    defaultMessage: "Close"
                                })
                            })
                        })]
                    })
                })
            }
        },
        152280: (e, t, n) => {
            n.r(t), n.d(t, {
                bookSmallIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.48 2.62 13.03 10.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M1.73 3.768C3.598 2.34 6.058 2.25 8 3.501c1.942-1.251 4.402-1.162 6.27.267a.63.63 0 0 1 .245.497v8.485a.625.625 0 0 1-1.005.496c-1.543-1.18-3.584-1.18-5.128-.001l-.015.01a.7.7 0 0 1-.19.094.62.62 0 0 1-.56-.105c-1.543-1.18-3.584-1.178-5.127.002a.625.625 0 0 1-1.005-.496V4.265c0-.195.09-.379.245-.497m1.005 7.87a5.37 5.37 0 0 1 4.64 0V4.586a4.14 4.14 0 0 0-4.64 0zm5.89 0a5.37 5.37 0 0 1 4.64 0V4.586a4.14 4.14 0 0 0-4.64 0z"
                    })
                },
                i = (0, n(104509).wt)("bookSmall", o, "small")
        },
        157254: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var o = n(474848);

            function i(e) {
                let t = (0, n(960253).e)(),
                    i = (0, n(960253).I)(() => ({
                        numberCircleBaseStyle: {
                            display: "flex",
                            flexShrink: 0,
                            borderRadius: "100%",
                            backgroundColor: e.isHighlighted ? n(632079).Tj.palette.uiBlue[600] : e.isLightBlueHighlighted ? n(632079).Tj.blue.background.primaryTranslucent : "dark" === t ? n(632079).Tj.palette.gray[300] : n(632079).Tj.palette.gray[75],
                            width: 20,
                            height: 20,
                            color: e.isHighlighted ? "white" : e.isLightBlueHighlighted ? n(632079).Tj.blue.text.accentPrimary : n(632079).Tj.palette.gray[600],
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: n(699422).Wy.semibold,
                            fontSize: "10px"
                        }
                    }), [e.isHighlighted, e.isLightBlueHighlighted, t]);
                return (0, o.jsx)("div", {
                    style: { ...i.numberCircleBaseStyle,
                        ...e.style
                    },
                    children: e.number
                })
            }
        },
        202570: (e, t, n) => {
            n.d(t, {
                R: () => s
            });
            var o = n(296540),
                i = n(474848);
            let a = {
                noteHeading: {
                    fontWeight: n(699422).Wy.medium,
                    fontSize: 14,
                    lineHeight: "18px"
                },
                noteBody: {
                    fontWeight: n(699422).Wy.regular,
                    color: n(632079).Tj.text.secondary,
                    fontSize: 14,
                    lineHeight: "18px",
                    letterSpacing: "0.2px"
                },
                link: {
                    color: n(632079).Tj.text.secondary,
                    textDecoration: "underline",
                    cursor: "pointer"
                },
                warningText: {
                    fontSize: 14,
                    lineHeight: "18px",
                    color: "#D7813A",
                    paddingInlineStart: 14
                },
                warningContainer: {
                    display: "flex",
                    marginInlineStart: 5,
                    marginInlineEnd: 5,
                    marginBottom: 15
                },
                style1: {
                    color: "#D7813A"
                }
            };

            function s(e) {
                let {
                    connector: t,
                    learnMoreUrl: s,
                    troubleShootingUrl: r,
                    staticConnectorAuthUrl: l,
                    setConnectionStateAsConnected: c,
                    callConnectionApi: d,
                    screenName: u,
                    connectorSpecificSetupNote: p,
                    nextScreens: g,
                    setConnectionConflictSpaceId: m
                } = e, [h, f] = o.useState(!1), b = (0, n(533992).v3)(), y = (0, n(723240).r)(), v = (0, n(399077).nB)({
                    connector: t,
                    authorizationType: "workspace",
                    existingAuthorizationUrl: l
                }), A = (0, n(590212).G6)(t), x = (0, n(682985).O$)(n(399077).NT[t]), {
                    sessionId: M,
                    currentScreen: _,
                    analyticsFrom: S
                } = x, j = (0, o.useCallback)(async () => {
                    if (!y) return;
                    await new Promise(e => setTimeout(e, 5e3));
                    let e = await d();
                    (0, n(399077).getAiConnectorRefreshFunction)(t)({
                        environment: b,
                        spaceId: y
                    });
                    let o = e => {
                        (0, n(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: e,
                                    integration_type: t,
                                    setup_session_id: M,
                                    from: S
                                }
                            }
                        })
                    };
                    if ("success" === e.type) {
                        var i, a, s, r;
                        null != (i = e.data) && i.connectionSuccess ? (o("auth_screen_connected"), n(399077).NT[t].setState({ ...x,
                            currentScreen: g.connectionSuccess
                        }), c()) : ((e, i, a) => {
                            switch (e) {
                                case 401:
                                    o("auth_screen_not_connected_warning"), f(!0);
                                    break;
                                case 403:
                                    o("info_screen_connect_not_admin_screen"), n(399077).NT[t].setState({ ...x,
                                        currentScreen: g.notAdminOfConnectorAccount
                                    });
                                    break;
                                case 400:
                                    "GOOGLE_MAPPING_EXIST" === i && a ? (o("workspace_already_connected"), n(399077).NT[t].setState({ ...x,
                                        currentScreen: g.connectionConflict
                                    }), null == m || m(a)) : n(399077).NT[t].setState({ ...x,
                                        currentScreen: g.error
                                    });
                                    break;
                                default:
                                    n(399077).NT[t].setState({ ...x,
                                        currentScreen: g.error
                                    })
                            }
                        })(null == e || null == (a = e.data) || null == (a = a.errorResponse) ? void 0 : a.status, null == e || null == (s = e.data) || null == (s = s.errorResponse) ? void 0 : s.errorCode, null == e || null == (r = e.data) || null == (r = r.errorResponse) || null == (r = r.data) ? void 0 : r.spaceId)
                    } else n(399077).NT[t].setState({ ...x,
                        currentScreen: g.error
                    })
                }, [S, b, M, y, t, x, c, d, g, m]), w = (0, o.useCallback)(() => [(0, i.jsxs)(n(4458).VP, {
                    gap: 4,
                    children: [(0, i.jsx)("div", {
                        style: a.noteHeading,
                        children: (0, i.jsx)(n(109939).sA, {
                            id: "universalSearch.authModal.waitingForConnectionNoteHeading1",
                            defaultMessage: "{connectorName} should open automatically on a new browser tab.",
                            values: {
                                connectorName: A
                            }
                        }, "note1-1")
                    }), (0, i.jsx)("div", {
                        style: a.noteBody,
                        children: (0, i.jsx)(n(109939).sA, {
                            id: "universalSearch.authModal.authWaiting",
                            defaultMessage: "If it doesn’t, {ClickHereToRetry}",
                            values: {
                                ClickHereToRetry: (0, i.jsx)("a", {
                                    style: a.link,
                                    href: v,
                                    target: "_blank",
                                    onClick: () => {
                                        (0, n(104310).u)({
                                            event: {
                                                eventName: "universal_qna_button_click",
                                                eventProperties: {
                                                    button_name: "auth_screen_open_auth_url",
                                                    integration_type: t,
                                                    setup_session_id: M,
                                                    from: S
                                                }
                                            }
                                        })
                                    },
                                    children: (0, i.jsx)(n(109939).sA, {
                                        id: "universalSearch.googleDrive.confirmModalNote1Retry",
                                        defaultMessage: "click here to retry"
                                    })
                                })
                            }
                        }, "note1-2")
                    })]
                }, "note-1"), (0, i.jsxs)(n(4458).VP, {
                    gap: 4,
                    children: [(0, i.jsx)("div", {
                        style: a.noteHeading,
                        children: (0, i.jsx)(n(109939).sA, {
                            id: "universalSearch.authModal.workspaceAdminHeading",
                            defaultMessage: "Follow {connectorName}’s setup instructions",
                            values: {
                                connectorName: A
                            }
                        }, "note2-1")
                    }), (0, i.jsx)("div", {
                        style: a.noteBody,
                        children: p ? (0, i.jsx)(n(109939).sA, { ...p
                        }) : (0, i.jsx)(n(109939).sA, {
                            id: "universalSearch.authModal.workspaceAdminBody",
                            defaultMessage: "For better AI answers, we recommend selecting the option “All users in my organization”."
                        }, "note2-2")
                    })]
                }, "note-2"), (0, i.jsx)(n(4458).VP, {
                    gap: 4,
                    children: (0, i.jsx)("div", {
                        style: a.noteHeading,
                        children: (0, i.jsx)(n(109939).sA, {
                            id: "universalSearch.authModal.done",
                            defaultMessage: "When you’re done, click the button below"
                        }, "note3-1")
                    })
                }, "note-3")], [v, M, S, t, A, p]), k = h ? (0, i.jsxs)("div", {
                    style: a.warningContainer,
                    children: [(0, i.jsx)(n(16275).I, {
                        icon: n(789777).exclamationMarkTriangleFillIcon,
                        colorPalette: "orange",
                        colorVariant: "accentPrimary"
                    }), (0, i.jsx)("div", {
                        style: a.warningText,
                        children: (0, i.jsx)(n(109939).sA, {
                            id: "universalQnA.authScreen.warning",
                            defaultMessage: "We couldn’t connect to {connectorName}. Please review the instructions and try again, or check our {TroubleshootingGuide}",
                            values: {
                                connectorName: A,
                                TroubleshootingGuide: (0, i.jsx)("a", {
                                    style: { ...a.link,
                                        ...a.style1
                                    },
                                    href: r,
                                    target: "_blank",
                                    onClick: () => {
                                        (0, n(104310).u)({
                                            event: {
                                                eventName: "universal_qna_button_click",
                                                eventProperties: {
                                                    button_name: "troubleshooting_guide_opened",
                                                    integration_type: t,
                                                    setup_session_id: M,
                                                    from: S
                                                }
                                            }
                                        })
                                    },
                                    children: (0, i.jsx)(n(109939).sA, {
                                        id: "universalSearch.authModal.troubleShootingLink",
                                        defaultMessage: "troubleshooting guide."
                                    })
                                })
                            }
                        })
                    })]
                }) : void 0;
                return (0, i.jsx)(n(641877).Q, {
                    title: (0, i.jsx)(n(109939).sA, {
                        id: "universalQnA.AuthScreen",
                        defaultMessage: "Follow instructions from {connectorName} in your browser",
                        values: {
                            connectorName: A
                        }
                    }),
                    open: _ === u,
                    onDismiss: () => {
                        f(!1), (0, n(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "auth_screen_dismiss",
                                    integration_type: t,
                                    setup_session_id: M,
                                    from: S
                                }
                            }
                        }), n(399077).NT[t].setState({ ...x,
                            currentScreen: "none"
                        })
                    },
                    warningMessage: k,
                    notes: w(),
                    openLearnMoreUrl: () => {
                        window.open(s)
                    },
                    connectorType: t,
                    primaryButtonText: (0, i.jsx)(n(109939).sA, {
                        id: "universalSearch.connector.Button.finishedSetup",
                        defaultMessage: "Confirm connection"
                    }, "note3-1"),
                    onClickPrimaryButton: j
                })
            }
        },
        273453: (e, t, n) => {
            n.d(t, {
                n: () => o
            });
            let o = (0, n(104509).xh)("office365", {
                default: {
                    loader: () => n.e(59287).then(n.bind(n, 117591))
                }
            })
        },
        277676: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                keyFillIcon: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.31 1.92 9.37 16.15",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M12.02 10.83a.3.3 0 0 0 .062-.023 4.684 4.684 0 1 0-4.164 0q.03.014.062.023v5.225c0 .086.034.169.095.23L9.77 17.98a.325.325 0 0 0 .46 0l1.695-1.695a.325.325 0 0 0 0-.46l-1.465-1.466 1.465-1.465a.33.33 0 0 0 .095-.23zM10 6.67a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
                    })
                },
                i = (0, n(104509).wt)("keyFill", o, "fill")
        },
        284920: (e, t, n) => {
            n.d(t, {
                BN: () => r,
                LA: () => a,
                zK: () => s
            });
            var o = n(296540),
                i = n(474848);
            let a = (0, n(109939).YK)({
                title: {
                    defaultMessage: "Find anything across all of your apps with Notion AI",
                    id: "NotionAIConnectorNonadminModal.title"
                },
                subtitleForAnnouncement: {
                    defaultMessage: "Notify your workspace owner to use AI connectors.",
                    id: "NotionAIConnectorNonadminModal.subtitleForAnnouncement"
                },
                learnMoreLink: {
                    defaultMessage: "Learn more about",
                    id: "NotionAIConnectorNonadminModal.learnMoreLink"
                },
                toast: {
                    defaultMessage: "We will send a notification to your workspace owner",
                    id: "NotionAIConnectorNonadminModal.toast"
                },
                alreadyRequestedToast: {
                    defaultMessage: "You’ve previously notified your workspace owner - your request is in review.",
                    id: "NotionAIConnectorNonadminModal.alreadyRequestedToast"
                }
            });

            function s() {
                let e = (0, n(682985).K8)(() => n(346593).O.state.open && "nonadmin_request" === n(346593).O.state.modal ? {
                        open: !0,
                        analyticsFrom: n(346593).O.state.analyticsFrom
                    } : {
                        open: !1
                    }, []),
                    t = (0, o.useCallback)(() => {
                        n(346593).O.setState({
                            open: !1
                        })
                    }, []);
                return e.open ? (0, i.jsx)(r, {
                    connector: "generic",
                    handleClose: t,
                    open: !0,
                    analyticsFrom: e.analyticsFrom,
                    setupSessionId: "none",
                    messages: { ...a,
                        betaDisclaimer: { ...n(916963).gp.betaDisclaimer
                        },
                        ctaButtonLabelWithAddon: { ...n(916963).gp.ctaButtonLabelWithAddon
                        },
                        ctaButtonLabelWithoutAddon: { ...n(916963).gp.ctaButtonLabelWithoutAddon
                        }
                    }
                }) : null
            }

            function r(e) {
                let {
                    open: t,
                    handleClose: s,
                    connector: r,
                    analyticsFrom: l,
                    setupSessionId: c,
                    messages: d
                } = e, u = (0, n(109939).tz)(), p = (0, n(533992).v3)(), g = (0, n(972740).L)(), m = (0, n(84163).J)(g), h = null == g ? void 0 : g.id, f = p.currentUser.id, b = (0, n(217844)._)({
                    name: "ai_connectors",
                    spaceId: h,
                    userId: f
                }), {
                    openModal: y,
                    canUserRequestUpgrade: v
                } = (0, n(726546).E)({
                    type: "feature",
                    featureAvailability: b,
                    entrypoint: "ai_connectors_request_modal",
                    analyticsEntrypoint: "ai_request_modal",
                    isOptimisticUpsell: !1
                }), A = (0, o.useCallback)(({
                    source: e,
                    upsell: t
                }) => {
                    "closeButton" === e ? s() : (l && (0, n(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "contact_workspace_owners",
                                integration_type: r,
                                setup_session_id: c,
                                from: l
                            }
                        }
                    }), t ? v ? (y(), s()) : (s(), n(436555).D6({
                        label: (0, i.jsx)(n(109939).sA, { ...a.alreadyRequestedToast
                        })
                    })) : (s(), n(436555).D6({
                        label: (0, i.jsx)(n(109939).sA, { ...a.toast
                        })
                    })))
                }, [s, r, y, v, l, c]);
                return b ? (0, i.jsx)(n(556809).a, {
                    showCloseIcon: !0,
                    onDismiss: () => A({
                        source: "closeButton",
                        upsell: void 0
                    }),
                    open: t,
                    ariaLabel: u.formatMessage(a.title),
                    children: (0, i.jsx)(n(511540).Y, {
                        aiConnectorsFeatureAvailability: b,
                        calloutKey: void 0,
                        eventName: "ai_connector_nonadmin_request_modal_shown",
                        messages: d,
                        onDismiss: A,
                        connector: r,
                        showNarrowCta: m
                    })
                }) : null
            }
        },
        322652: (e, t, n) => {
            n.d(t, {
                a: () => r,
                J: () => s
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.77 1.69 16.42 16.61",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M17.22 11.956a.626.626 0 0 1 .753.998l-6.377 4.815a2.65 2.65 0 0 1-3.012.125l-.18-.125-6.378-4.815-.093-.086a.626.626 0 0 1 .739-.977l.108.065 6.376 4.816.096.065a1.4 1.4 0 0 0 1.592-.065z"
                        }), (0, o.jsx)("path", {
                            d: "M8.403 2.232a2.65 2.65 0 0 1 3.193 0l5.553 4.192.106.085a2.2 2.2 0 0 1-.106 3.427l-5.553 4.192a2.65 2.65 0 0 1-3.193 0L2.85 9.936a2.2 2.2 0 0 1 0-3.512z"
                        })]
                    })
                },
                a = (0, n(104509).wt)("layerMultipleFill", i, "fill");

            function s(e) {
                let t = (0, n(590212).G6)(e);
                if ("notion-mail" === e) {
                    let i = n(590212).w0[(0, n(590212).uV)(e)];
                    return (0, o.jsx)(n(109939).sA, {
                        id: "universalQna.connector.introModalTitleNotionMail",
                        defaultMessage: "Connect your {workspaceConnectorName} account using {connectorName}",
                        values: {
                            workspaceConnectorName: i,
                            connectorName: t
                        }
                    })
                }
                return (0, o.jsx)(n(109939).sA, {
                    id: "universalQna.connector.introModalTitle",
                    defaultMessage: "To start, install the Notion AI app in {connectorName}",
                    values: {
                        connectorName: t
                    }
                })
            }

            function r(e) {
                let t = (0, n(590212).G6)(e),
                    i = n(590212).w0[(0, n(590212).uV)(e)],
                    s = [{
                        icon: n(943792).arrowUpRightSquareFillIcon,
                        title: (0, o.jsx)(n(109939).sA, {
                            id: "universalQna.connector.introModalNewTabNoteTitle",
                            defaultMessage: "{connectorName} will open in a new tab",
                            values: {
                                connectorName: t
                            }
                        }, "newTabNoteTitle"),
                        description: "notion-mail" === e ? (0, o.jsx)(n(109939).sA, {
                            id: "universalQna.connector.introModalNewTabNoteDescriptionNotionMail",
                            defaultMessage: "Authenticate or create a Notion Mail account"
                        }, "newTabNoteDescriptionNotionMail") : (0, o.jsx)(n(109939).sA, {
                            id: "universalQna.connector.introModalNewTabNoteDescription",
                            defaultMessage: "Click “Start connection” below, then authenticate and accept terms in the new tab"
                        }, "newTabNoteDescription")
                    }, {
                        icon: n(277676).keyFillIcon,
                        title: (0, o.jsx)(n(109939).sA, {
                            id: "universalQna.connector.introModalPermissionNoteTitle",
                            defaultMessage: "{workspaceConnectorName} permissions are strictly respected",
                            values: {
                                workspaceConnectorName: i
                            }
                        }, "permissionNoteTitle"),
                        description: (0, o.jsx)(n(109939).sA, {
                            id: "universalQna.connector.introModalPermissionNoteDescription",
                            defaultMessage: "Members can only get AI answers about content they are authorized to see in {connectorName}.",
                            values: {
                                connectorName: t
                            }
                        }, "permissionNoteDescription")
                    }, {
                        icon: n(269298).lockFillIcon,
                        title: (0, o.jsx)(n(109939).sA, {
                            id: "universalQna.connector.introModalWeDoNotTrainModelNoteTitle",
                            defaultMessage: "Notion does not train models on your {workspaceConnectorName} data",
                            values: {
                                workspaceConnectorName: i
                            }
                        }, "weDoNotTrainModelNoteTitle")
                    }],
                    r = {
                        icon: (0, o.jsx)(n(798790).E, {
                            size: 20
                        }),
                        title: (0, o.jsx)(n(109939).sA, {
                            id: "universalQna.connector.introModalSharePointAndOneDriveNoteTitle",
                            defaultMessage: "SharePoint and OneDrive content are connected through a single setup"
                        }, "sharepointAndOneDriveNoteTitle")
                    },
                    l = {
                        icon: a,
                        title: (0, o.jsx)(n(109939).sA, {
                            id: "universalQna.connector.introModalJiraV2NoteTitle",
                            defaultMessage: "We’ll help you create an Atlassian Forge App"
                        }, "jiraV2NoteTitle"),
                        description: (0, o.jsx)(n(109939).sA, {
                            id: "universalQna.connector.introModalJiraV2NoteDescription",
                            defaultMessage: "We’ll need admin information to create and connect your app. This might take a few minutes."
                        }, "jiraV2NoteDescription")
                    };
                switch (e) {
                    case "sharepoint":
                        return [r, ...s];
                    case "jira":
                        return [l, ...s.slice(1)];
                    default:
                        return s
                }
            }
        },
        355380: (e, t, n) => {
            function o(e) {
                let t = n(728372).AppStoreSidebarSpaceStore.state,
                    o = n(728372).AppStoreSidebarSpaceViewStore.state,
                    i = n(728372).AppStoreCurrentUserStore.state;
                if (!t || !o || !i) return void(0, n(79266).navigate)({
                    environment: e,
                    url: n(168962).JZ.chat
                });
                let a = (0, n(922900).getWorkflowAgentConfig)({
                        environment: e,
                        spaceId: t.id,
                        isCustomAgent: !1,
                        workflowId: void 0,
                        useReadOnlyMode: !1,
                        useWebSearch: !1
                    }),
                    s = (0, n(674880).Kf)({
                        environment: e,
                        spaceStore: t,
                        userStore: i,
                        value: (0, n(247438).x9d)("Using my Notion Mail connection, catch me up on my latest unread emails from the week that require an action from me")
                    }),
                    r = (0, n(674880).Xd)({
                        environment: e,
                        inferenceContext: {
                            userStore: i,
                            spaceStore: t,
                            spaceViewStore: o,
                            blockStore: void 0,
                            peekStore: void 0,
                            workflowStore: void 0
                        },
                        config: a,
                        addSteps: [s],
                        surface: "full_page_chat"
                    }),
                    l = (0, n(225900).N)({
                        environment: e,
                        spaceStore: t,
                        transcript: r,
                        createdSource: "full_page_chat"
                    });
                (0, n(540328).KY)(l), (0, n(79266).navigate)({
                    environment: e,
                    url: `${n(168962).JZ.chat}?t=${(0,n(4962).Xw)(l.id)}`
                })
            }

            function i(e) {
                var t;
                let o = n(728372).AppStoreSidebarSpaceStore.state,
                    i = n(728372).AppStoreSidebarSpaceViewStore.state,
                    a = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!o || !i || !a) return;
                let s = null == (t = a.getSettings()) ? void 0 : t.post_onboarding_agent_config;
                if (null != s && s.thread_id && s.space_id === o.id) return void(0, n(79266).navigate)({
                    environment: e,
                    url: `${n(168962).JZ.chat}?t=${(0,n(4962).Xw)(s.thread_id)}`
                });
                let r = (0, n(812591).X)({
                    environment: e,
                    spaceStore: o,
                    spaceViewStore: i,
                    instructions: "",
                    useOnboardingModule: !0
                });
                (0, n(377796).createAndCommit)({
                    userAction: "newUserHomeActions.savePostOnboardingAgentConfig",
                    environment: e,
                    cellTarget: {
                        spaceWithId: o.id
                    },
                    canUndo: !1,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                post_onboarding_agent_config: {
                                    thread_id: r.id,
                                    has_clicked_all_set: !1,
                                    space_id: o.id
                                }
                            }
                        })
                    }
                }), (0, n(79266).navigate)({
                    environment: e,
                    url: `${n(168962).JZ.chat}?t=${(0,n(4962).Xw)(r.id)}`
                })
            }
            async function a(e) {
                (await n(68067).$.load()).createAndNavigateToTranscriptionBlock({
                    environment: e,
                    from: "home_checklist",
                    title: "new_page"
                })
            }

            function s() {
                let e = n(105692).subscriptionDataStoreInstance.state,
                    t = !!(e && (0, n(322082).F)(e));
                n(64273).V0.setState({
                    modalOpen: !0,
                    tokenQuery: "",
                    inviteTargets: [],
                    inviteRole: t ? "member" : "owner",
                    table: n(832375).NXh,
                    flowId: n(92513).JW(),
                    inputFocus: "invitee",
                    emailMessage: ""
                }), (0, n(599754).Ow)({
                    currentPage: "members",
                    tab: "members",
                    openedFrom: "new_user_home_checklist"
                })
            }
            n.d(t, {
                HI: () => i,
                Md: () => s,
                OD: () => o,
                uE: () => a
            })
        },
        364937: (e, t, n) => {
            n.d(t, {
                A: () => l
            }), n(581454);
            var o = n(296540),
                i = n(474848);
            let a = {
                bannerLabelWrapper: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: -4
                },
                title: {
                    fontSize: n(699422).J.UIRegular.desktop,
                    fontWeight: n(699422).Wy.regular,
                    color: n(632079).Tj.text.secondary
                },
                style0: {
                    maxWidth: 360,
                    whiteSpace: "pre-wrap"
                }
            };

            function s(e) {
                let {
                    sunsetCheckSource: t,
                    additionalOnClickUpgrade: s
                } = e, r = (0, n(723240).r)(), l = (0, n(533992).v3)().currentUser.id, c = (0, n(217844)._)({
                    name: "ai_connectors",
                    spaceId: r,
                    userId: l
                }), {
                    upsellMessage: d,
                    upsellHeader: u,
                    actionButtonMsg: p,
                    actionForFeatureAvailability: g,
                    isSunset: m
                } = (0, n(427724).x)({
                    featureAvailability: c,
                    upsellFrom: "ai_connectors_sunset_banner",
                    sunsetCheckSource: t
                }), h = (0, o.useCallback)(() => {
                    g && g(), s && s()
                }, [g, s]), f = (0, n(972740).L)(), b = (0, n(682985).K8)(() => !!f && (0, n(128729).p)(f), [f]), y = (0, n(960253).I)(() => ({
                    wrapperStyle: "assistant_overflow_menu_add_connectors" === t ? {
                        paddingTop: 3,
                        paddingInlineEnd: 0,
                        paddingBottom: 0,
                        paddingInlineStart: 0
                    } : "ai_settings_banner" === t ? {
                        marginBottom: 24
                    } : "ai_connectors_modal" === t ? {
                        padding: "0px 20px"
                    } : {}
                }), [t]), {
                    bannerIcon: v,
                    bannerLabel: A,
                    bannerDescription: x,
                    bannerActions: M
                } = (0, o.useMemo)(() => {
                    switch (t) {
                        case "assistant_overflow_menu_add_connectors":
                            return {
                                bannerIcon: void 0,
                                bannerLabel: (0, i.jsxs)(n(4458).fI, {
                                    gap: 8,
                                    alignItems: "center",
                                    children: [(0, i.jsx)(n(708966).Q, {
                                        iconGroup: n(92168).k,
                                        variantName: "fill",
                                        colorPalette: "blue",
                                        colorVariant: "accentPrimary"
                                    }), (0, i.jsx)("div", {
                                        style: a.style0,
                                        children: u
                                    })]
                                }),
                                bannerDescription: (0, i.jsx)("div", {
                                    style: a.style0,
                                    children: d
                                }),
                                bannerActions: [{
                                    isCustom: !0,
                                    render: () => (0, i.jsx)(n(548436).A, {
                                        onClick: h,
                                        children: (0, i.jsx)(n(111010).D, {
                                            styleKey: "bodyMedium",
                                            colorVariant: "primary",
                                            children: p
                                        })
                                    })
                                }]
                            };
                        case "ai_settings_banner":
                            return {
                                bannerIcon: void 0,
                                bannerLabel: (0, i.jsxs)("div", {
                                    style: a.bannerLabelWrapper,
                                    children: [(0, i.jsxs)(n(4458).fI, {
                                        gap: 8,
                                        alignItems: "center",
                                        children: [(0, i.jsx)(n(708966).Q, {
                                            iconGroup: n(92168).k,
                                            variantName: "fill",
                                            colorPalette: "blue",
                                            colorVariant: "accentPrimary"
                                        }), (0, i.jsx)("div", {
                                            style: a.title,
                                            children: d
                                        })]
                                    }), (0, i.jsx)(n(548436).A, {
                                        onClick: h,
                                        children: (0, i.jsx)(n(111010).D, {
                                            styleKey: "bodyMedium",
                                            colorVariant: "primary",
                                            children: p
                                        })
                                    })]
                                }),
                                bannerDescription: void 0,
                                bannerActions: void 0
                            };
                        case "ai_connectors_modal":
                            return {
                                bannerIcon: n(682612).arrowInCircleUpFillIcon,
                                bannerLabel: u,
                                bannerDescription: d,
                                bannerActions: [{
                                    isCustom: !0,
                                    render: () => (0, i.jsx)(n(548436).A, {
                                        onClick: h,
                                        children: (0, i.jsx)(n(111010).D, {
                                            styleKey: "bodyMedium",
                                            colorVariant: "primary",
                                            children: p
                                        })
                                    })
                                }]
                            };
                        default:
                            (0, n(722371).HB)(t)
                    }
                }, [t, u, d, p, h]);
                return m && g && b && c ? (0, i.jsx)("div", {
                    style: y.wrapperStyle,
                    children: (0, i.jsx)(n(748356).l, {
                        staticIcon: v,
                        iconColor: "blue",
                        display: "inline",
                        tint: "gray",
                        label: A,
                        description: x,
                        actions: M
                    })
                }) : null
            }
            let r = {
                    noteTitle: {
                        fontWeight: n(699422).Wy.medium,
                        textWrap: "pretty"
                    },
                    connectButton: {
                        width: "100%"
                    },
                    learnMoreButton: {
                        width: "100%"
                    }
                },
                l = function(e) {
                    let {
                        title: t,
                        open: a,
                        notes: l,
                        connectorType: c,
                        onDismiss: d,
                        onConnect: u,
                        onLearnMore: p,
                        isLoading: g,
                        overridePrimaryMessage: m,
                        centerNotes: h,
                        noteStyleOverrides: f,
                        subtitle: b,
                        customContentBeforeFooter: y,
                        borderAroundNotes: v,
                        grayscaleNoteIcons: A,
                        connectDisabled: x
                    } = e, M = (0, n(109939).tz)(), _ = (0, n(960253).I)(() => ({
                        wrapper: {
                            width: v ? 428 : 400,
                            paddingTop: 8
                        },
                        dataSafetyWrapper: {
                            width: "100%",
                            justifyContent: "center",
                            marginTop: 8,
                            padding: "0px 20px",
                            ...v && {
                                border: `1px solid ${n(632079).Tj.border.secondary}`,
                                borderRadius: 8,
                                padding: "0px 12px",
                                marginTop: 0,
                                marginInlineEnd: 12,
                                marginBottom: 0,
                                marginInlineStart: 12,
                                maxWidth: 400
                            }
                        },
                        notes: {
                            display: "flex",
                            flexDirection: "column",
                            marginTop: 12,
                            gap: 12,
                            font: n(699422).Tf.sans,
                            listStylePosition: "outside",
                            paddingInlineStart: 2,
                            listStyleType: "none",
                            ...h && {
                                textAlign: "center",
                                justifyContent: "center"
                            }
                        },
                        note: {
                            display: "flex",
                            alignItems: "start",
                            fontSize: n(699422).J.UIRegular.desktop,
                            lineHeight: n(699422).K_.UIRegular.desktop,
                            color: `${n(632079).Tj.text.secondary}`,
                            padding: 2,
                            gap: 12,
                            listStylePosition: "outside",
                            marginBottom: 4,
                            ...h && {
                                alignItems: "center",
                                textAlign: "center",
                                justifyContent: "center"
                            },
                            ...f
                        },
                        noteIcon: {
                            width: 20,
                            height: 20,
                            color: A ? n(632079).Tj.palette.gray[600] : n(632079).Tj.palette.uiBlue[600]
                        }
                    }), [h, f, A, v]), S = (0, o.useCallback)(() => {
                        let e = n(399077).NT[c];
                        e.setState({ ...e.state,
                            currentScreen: "none"
                        })
                    }, [c]);
                    return (0, i.jsx)(n(556809).a, {
                        ariaLabel: M.formatMessage({
                            id: "universalSearch.integrations.introModalAriaLabel",
                            defaultMessage: "AI connector introduction"
                        }),
                        showCloseIcon: !0,
                        onDismiss: d,
                        open: a,
                        children: (0, i.jsxs)("div", {
                            style: _.wrapper,
                            children: [(0, i.jsx)(n(798790).b, {
                                connectorType: c,
                                title: t,
                                subtext: b
                            }), (0, i.jsx)(s, {
                                sunsetCheckSource: "ai_connectors_modal",
                                additionalOnClickUpgrade: S
                            }), l ? (0, i.jsx)(n(4458).fI, {
                                style: _.dataSafetyWrapper,
                                children: (0, i.jsx)("ul", {
                                    style: _.notes,
                                    children: l.map((e, t) => (0, i.jsxs)("li", {
                                        style: _.note,
                                        children: [(0, i.jsx)(n(4458).fI, {
                                            alignItems: "center",
                                            justifyContent: "center",
                                            children: e.icon ? "function" == typeof e.icon ? e.icon(_.noteIcon) : e.icon : void 0
                                        }), (0, i.jsxs)(n(4458).VP, {
                                            alignItems: "start",
                                            justifyContent: "center",
                                            gap: 4,
                                            children: [(0, i.jsx)(n(324489).V, {
                                                isMultiline: !0,
                                                style: r.noteTitle,
                                                children: e.title
                                            }), e.description ? (0, i.jsx)(n(324489).V, {
                                                isMultiline: !0,
                                                isSecondaryColor: !0,
                                                children: e.description
                                            }) : void 0]
                                        })]
                                    }, `note-${t}`))
                                })
                            }) : void 0, y, (0, i.jsxs)(n(4458).VP, {
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                paddingTop: 12,
                                paddingInlineEnd: 20,
                                paddingBottom: 20,
                                paddingInlineStart: 20,
                                gap: 6,
                                children: [(0, i.jsx)(n(912946).A, {
                                    colorPalette: "blue",
                                    size: "xl",
                                    isLoading: g,
                                    disabled: g || x,
                                    style: r.connectButton,
                                    onClick: u,
                                    children: m || (0, i.jsx)(n(109939).sA, {
                                        id: "universalSearch.integration.startConnection",
                                        defaultMessage: "Start connection"
                                    })
                                }), p ? (0, i.jsx)(n(548436).A, {
                                    size: "lg",
                                    iconLeading: {
                                        icon: n(152280).bookSmallIcon,
                                        size: "xs"
                                    },
                                    style: r.learnMoreButton,
                                    onClick: p,
                                    children: (0, i.jsx)(n(109939).sA, {
                                        id: "universalSearch.integrations.learnMore",
                                        defaultMessage: "Read our step-by-step guide"
                                    })
                                }) : void 0]
                            })]
                        })
                    })
                }
        },
        384214: (e, t, n) => {
            n.d(t, {
                X: () => s
            }), n(944114), n(581454);
            var o = n(296540),
                i = n(474848);
            let a = {
                confirmWrapper: {
                    width: 300,
                    alignItems: "center"
                },
                confirmContainer: {
                    padding: 20
                },
                confirmModalTitle: {
                    fontSize: 17,
                    fontWeight: n(699422).Wy.semibold,
                    color: n(632079).Tj.text.primary,
                    textAlign: "center"
                },
                confirmModalSubTitle: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.regular,
                    color: n(632079).Tj.text.secondary,
                    paddingTop: 8,
                    textAlign: "center"
                },
                confirmModalDescription: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.regular,
                    color: n(632079).Tj.text.secondary,
                    paddingTop: 8,
                    textAlign: "center"
                },
                goBackButton: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.regular,
                    width: "100%",
                    textAlign: "center",
                    paddingTop: 4,
                    paddingInlineEnd: 0,
                    paddingBottom: 4,
                    paddingInlineStart: 0
                },
                confirmDisconnectButton: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.medium,
                    width: "100%"
                },
                notesSectionWrapper: {
                    paddingTop: 12,
                    paddingInlineEnd: 12,
                    paddingBottom: 12,
                    paddingInlineStart: 12,
                    gap: 13
                },
                note: {
                    fontWeight: n(699422).Wy.regular,
                    fontSize: 14,
                    lineHeight: "18px"
                },
                noteHeading: {
                    fontWeight: n(699422).Wy.medium,
                    fontSize: 14,
                    lineHeight: "18px"
                },
                noteBody: {
                    fontWeight: n(699422).Wy.regular,
                    color: n(632079).Tj.text.secondary,
                    fontSize: 14,
                    lineHeight: "18px",
                    letterSpacing: "0.2px"
                },
                link: {
                    color: n(632079).Tj.text.secondary,
                    textDecoration: "underline",
                    cursor: "pointer"
                },
                icon: {
                    rotate: "45deg",
                    cursor: "pointer",
                    display: "inline",
                    padding: 0,
                    margin: 0
                }
            };

            function s(e) {
                let {
                    connector: t,
                    showGoogleWorkspaceNote: s,
                    postDisconnectScreenName: r,
                    disconnectScreenName: l,
                    settingsScreenName: c,
                    errorScreenName: d,
                    setStatusAsDisconnected: u
                } = e, p = (0, n(682985).O$)(n(399077).NT[t]), {
                    analyticsFrom: g,
                    sessionId: m,
                    currentScreen: h
                } = p, f = n(590212).w0[t], b = (0, n(723240).r)(), y = (0, n(533992).v3)(), v = (0, n(109939).tz)(), A = async () => {
                    if (!b) return;
                    let {
                        type: e
                    } = await (0, n(166672).disconnectConnector)({
                        connector: t,
                        spaceId: b,
                        environment: y,
                        disconnectReason: "admin_disconnect"
                    });
                    (0, n(399077).getAiConnectorRefreshFunction)(t)({
                        environment: y,
                        spaceId: b
                    }), "failed" === e ? n(399077).NT[t].setState({ ...p,
                        currentScreen: d
                    }) : u()
                }, x = (0, o.useCallback)(() => {
                    let {
                        noteHeading: o,
                        noteBody: r,
                        link: l
                    } = a, c = [];
                    return c.push((0, i.jsxs)(n(4458).VP, {
                        gap: 8,
                        marginBottom: 12,
                        children: [(0, i.jsx)("div", {
                            style: o,
                            children: (0, i.jsx)(n(109939).sA, {
                                id: "aiConnectors.post_disconnect_screen.note_1.heading",
                                defaultMessage: "{displayName} data will be permanently deleted from Notion",
                                values: {
                                    displayName: f
                                }
                            }, "note1-1")
                        }), (0, i.jsx)("div", {
                            style: r,
                            children: (0, n(281708).Gb)(t) ? (0, i.jsx)(n(109939).sA, {
                                id: "aiConnectors.post_disconnect_screen.note_1.bodyVectorless",
                                defaultMessage: "{connector} is now fully disconnected.",
                                values: {
                                    connector: f
                                }
                            }, "note1-2") : (0, i.jsx)(n(109939).sA, {
                                id: "aiConnectors.post_disconnect_screen.note_1.body",
                                defaultMessage: "This process can take up to 3 hours. You’ll only be able to reconnect after disconnecting is complete."
                            }, "note1-2")
                        })]
                    }, "note-1")), s && c.push((0, i.jsxs)(n(4458).VP, {
                        gap: 8,
                        marginBottom: 12,
                        children: [(0, i.jsx)("div", {
                            style: o,
                            children: "google-drive" === t || "gmail" === t ? (0, i.jsx)(n(109939).sA, {
                                id: "aiConnectors.post_disconnect_screen.note_2.headingForGoogle",
                                defaultMessage: "Uninstall the Notion AI app from your Google Workspace (optional)"
                            }, "note2-1-google") : (0, i.jsx)(n(109939).sA, {
                                id: "aiConnectors.post_disconnect_screen.note_2.heading",
                                defaultMessage: "Uninstall the Notion AI app from your {connectorParentOrganization} workspace (optional)",
                                values: {
                                    connectorParentOrganization: (0, n(590212).G6)(t)
                                }
                            }, "note2-1")
                        }), (0, i.jsx)("div", {
                            style: r,
                            children: (0, i.jsx)(n(109939).sA, {
                                id: "aiConnectors.post_disconnect_screen.note_2.body",
                                defaultMessage: "Go to your {NavigateToWorkspaceAppsSettings} and uninstall the Notion AI app.",
                                values: {
                                    marketplaceAppName: e.marketplaceAppName,
                                    NavigateToWorkspaceAppsSettings: (0, i.jsx)("a", {
                                        style: l,
                                        href: e.marketplaceAppConfigureUrl,
                                        target: "_blank",
                                        onClick: () => {
                                            (0, n(104310).u)({
                                                event: {
                                                    eventName: "universal_qna_button_click",
                                                    eventProperties: {
                                                        button_name: "disconnect_screen_marketplace_app_disconnect_btn",
                                                        integration_type: t,
                                                        setup_session_id: m,
                                                        from: g
                                                    }
                                                }
                                            })
                                        },
                                        children: (0, i.jsx)(n(109939).sA, {
                                            id: "universalSearch.googleDrive.post_disconnect_screen.disconnect_workspace_app",
                                            defaultMessage: "{connectorSettings} {ArrowIcon}",
                                            values: {
                                                connectorSettings: (0, n(590212).I6)(t),
                                                ArrowIcon: (0, i.jsx)(n(16275).I, {
                                                    icon: n(464913).arrowStraightUpSmallIcon,
                                                    size: "xxs",
                                                    style: a.icon
                                                })
                                            }
                                        })
                                    })
                                }
                            }, "note2-2")
                        })]
                    }, "note-2")), c
                }, [t, f, e, s, m, g]);
                return h === r ? (0, i.jsx)(n(93684).A, {
                    onClickGotItBtn: () => {
                        n(399077).NT[t].setState({ ...p,
                            currentScreen: "none"
                        })
                    },
                    onDismiss: () => {
                        n(399077).NT[t].setState({ ...p,
                            currentScreen: "none"
                        })
                    },
                    open: h === r,
                    connectorType: t,
                    title: (0, n(281708).Gb)(t) ? (0, i.jsx)(n(109939).sA, {
                        id: "aiConnectors.post_disconnect_modal.titleVectorless",
                        defaultMessage: "{displayName} is disconnected from Notion",
                        values: {
                            displayName: f
                        }
                    }) : (0, i.jsx)(n(109939).sA, {
                        id: "aiConnectors.post_disconnect_modal.title",
                        defaultMessage: "{displayName} is disconnecting from Notion",
                        values: {
                            displayName: f
                        }
                    }),
                    descriptionMessage: (0, n(281708).q1)(t) ? void 0 : (0, i.jsx)(n(109939).sA, {
                        id: "aiConnectors.post_disconnect_modal.description",
                        defaultMessage: "Here’s what’s next:"
                    }),
                    message: (0, n(281708).q1)(t) ? null : (0, i.jsx)("div", {
                        style: a.notesSectionWrapper,
                        children: x().map((e, t) => (0, i.jsxs)(n(4458).fI, {
                            marginTop: 4,
                            marginBottom: 6,
                            gap: 8,
                            children: [(0, i.jsx)(n(157254).A, {
                                number: t + 1
                            }), (0, i.jsx)("div", {
                                style: a.note,
                                children: e
                            })]
                        }, t))
                    })
                }) : (0, i.jsx)(n(556809).a, {
                    ariaLabel: v.formatMessage({
                        id: "aiConnectors.disconnectModal.label",
                        defaultMessage: "Disconnect {displayName} from Notion"
                    }, {
                        displayName: f
                    }),
                    showCloseIcon: !0,
                    open: h === l,
                    onDismiss: () => {
                        (0, n(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "disconnect_modal_close",
                                    integration_type: t,
                                    setup_session_id: m,
                                    from: g
                                }
                            }
                        }), n(399077).NT[t].setState({ ...p,
                            currentScreen: "none"
                        })
                    },
                    children: (0, i.jsx)("div", {
                        style: a.confirmWrapper,
                        children: (0, i.jsxs)("div", {
                            style: a.confirmContainer,
                            children: [(0, i.jsx)("div", {
                                style: a.confirmModalTitle,
                                children: (0, i.jsx)(n(109939).sA, {
                                    id: "aiConnectors.disconnectModal.title",
                                    defaultMessage: "Are you sure?"
                                })
                            }), (0, i.jsx)("div", {
                                style: a.confirmModalSubTitle,
                                children: (0, i.jsx)(n(109939).sA, {
                                    id: "aiConnectors.disconnectModal.subTitle",
                                    defaultMessage: "{displayName} data will be permanently deleted from Notion.",
                                    values: {
                                        displayName: f
                                    }
                                })
                            }), (0, i.jsx)("div", {
                                style: a.confirmModalDescription,
                                children: (0, n(281708).Gb)(t) ? (0, i.jsx)(n(109939).sA, {
                                    id: "aiConnectors.disconnectModal.descriptionVectorless",
                                    defaultMessage: "This process should be instant."
                                }) : (0, i.jsx)(n(109939).sA, {
                                    id: "aiConnectors.disconnectModal.description",
                                    defaultMessage: "This process can take up to 3 hours, and you’ll only be able to reconnect after disconnecting is complete."
                                })
                            }), (0, i.jsxs)(n(4458).VP, {
                                paddingTop: 20,
                                gap: 8,
                                children: [(0, i.jsx)(n(912946).A, {
                                    colorPalette: "red",
                                    style: a.confirmDisconnectButton,
                                    disabled: p.isDisconnecting ? ? !1,
                                    onClick: async () => {
                                        (0, n(104310).u)({
                                            event: {
                                                eventName: "universal_qna_button_click",
                                                eventProperties: {
                                                    button_name: "disconnect_modal_confirm_disconnect_button",
                                                    integration_type: t,
                                                    setup_session_id: m,
                                                    from: g
                                                }
                                            }
                                        }), await A(), n(399077).NT[t].setState({ ...p,
                                            currentScreen: r
                                        })
                                    },
                                    children: (0, n(281708).q1)(t) ? (0, i.jsx)(n(109939).sA, {
                                        id: "aiConnectors.disconnectModal.confirmDisconnectPersonal",
                                        defaultMessage: "Disconnect"
                                    }) : (0, i.jsx)(n(109939).sA, {
                                        id: "aiConnectors.disconnectModal.confirmDisconnect",
                                        defaultMessage: "Disconnect for everyone"
                                    })
                                }), (0, i.jsx)(n(64960).Ay, {
                                    style: a.goBackButton,
                                    onClick: () => {
                                        (0, n(104310).u)({
                                            event: {
                                                eventName: "universal_qna_button_click",
                                                eventProperties: {
                                                    button_name: "disconnect_modal_back_button",
                                                    integration_type: t,
                                                    setup_session_id: m,
                                                    from: g
                                                }
                                            }
                                        }), n(399077).NT[t].setState({ ...p,
                                            currentScreen: c
                                        })
                                    },
                                    children: (0, i.jsx)(n(109939).sA, {
                                        id: "aiConnectors.disconnectModal.goBack",
                                        defaultMessage: "Go back"
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
        },
        436579: (e, t, n) => {
            n.d(t, {
                a: () => s
            }), n(944114);
            var o = n(296540),
                i = n(474848);
            let a = {
                link: {
                    color: n(632079).Tj.text.secondary,
                    textDecoration: "underline",
                    cursor: "pointer"
                }
            };

            function s(e) {
                let {
                    connector: t,
                    screenName: s,
                    nextScreens: r,
                    onStartIngestion: l,
                    ingestionNotNeeded: c,
                    noSelectionAllowed: d,
                    forceIngestion: u = !1,
                    notes: p,
                    onDone: g
                } = e, m = (0, n(533992).v3)(), h = (0, n(723240).r)(), f = (0, n(682985).O$)(n(399077).NT[t]), {
                    sessionId: b,
                    currentScreen: y,
                    analyticsFrom: v
                } = f, A = y === s, x = n(590212).w0[t], M = (0, n(682985).K8)(() => (0, n(876688).XY)(t), [t]);
                (0, o.useEffect)(() => {
                    if (A && ((0, n(166672).maybeMarkAiConnectorOnboardingSurveyMomentInSettings)({
                            environment: m,
                            connector: t,
                            moment: "finished"
                        }), (0, n(717274).tL)({
                            disableExposureLogging: !0
                        }))) {
                        let e = n(728372).AppStoreSidebarSpaceViewStore.state;
                        e && (0, n(751568).T)({
                            spaceViewStore: e,
                            itemId: "aiSearch",
                            completionType: "action"
                        })
                    }
                }, [A, t, m]);
                let _ = (0, o.useCallback)(() => {
                        (0, n(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "completion_screen_dismiss",
                                    integration_type: t,
                                    setup_session_id: b,
                                    from: v
                                }
                            }
                        }), n(399077).NT[t].setState({ ...f,
                            currentScreen: "none"
                        })
                    }, [v, b, t, f]),
                    S = (0, o.useCallback)(async () => {
                        if (!h) return;
                        (0, n(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "shared_drive_settings",
                                    integration_type: t,
                                    setup_session_id: b,
                                    from: v
                                }
                            }
                        });
                        let {
                            status: e
                        } = await (0, n(399077).getAiConnectorRefreshFunction)(t)({
                            environment: m,
                            spaceId: h
                        });
                        if ("success" === e) {
                            let e = (0, n(876688).XY)(t);
                            "in_progress" === e ? n(399077).NT[t].setState({ ...f,
                                currentScreen: r.inProgress
                            }) : "not_started" === e ? n(399077).NT[t].setState({ ...f,
                                currentScreen: r.notStarted
                            }) : n(399077).NT[t].setState({ ...f,
                                currentScreen: r.error
                            })
                        } else n(399077).NT[t].setState({ ...f,
                            currentScreen: r.error
                        })
                    }, [v, m, t, h, f, r, b]),
                    j = "in_progress" === M,
                    w = (0, o.useMemo)(() => {
                        let e = [];
                        return c || e.push((0, i.jsx)(n(876042).L, {
                            number: 1,
                            title: n(904674).D.defaultConnectionTime,
                            description: d || j ? void 0 : (0, i.jsx)("div", {
                                children: (0, i.jsx)(n(109939).sA, {
                                    id: "universalSearch.connectionComplete.waitingForConnectionNoteBody1",
                                    defaultMessage: "If you want to choose content, {clickHere}",
                                    values: {
                                        clickHere: (0, i.jsx)("a", {
                                            style: a.link,
                                            onClick: S,
                                            children: (0, i.jsx)(n(109939).sA, {
                                                id: "universalSearch.connectionCompleteModal.settings",
                                                defaultMessage: "click here."
                                            })
                                        })
                                    }
                                })
                            })
                        }, "ingestionDelayNotice")), e.push((0, i.jsx)(n(876042).L, {
                            number: e.length + 1,
                            title: { ...n(904674).D.defaultNotionAiWillBeAbleToAnswerQuestions,
                                values: {
                                    appName: x
                                }
                            }
                        }, "notionAiAnswerQuestions")), e
                    }, [x, c, d, j, S]);
                return h ? (0, i.jsx)(n(904674).v, {
                    open: A,
                    connectorType: t,
                    notes: p ? ? w,
                    onPrimaryButtonClick: async () => {
                        var e;
                        (0, n(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "completion_screen_done",
                                    integration_type: t,
                                    setup_session_id: b,
                                    from: v
                                }
                            }
                        }), n(399077).NT[t].setState({ ...f,
                            currentScreen: "none"
                        }), null == g || g(), j && !u || await (null == l ? void 0 : l()) && (e = x, n(436555).D6({
                            label: (0, i.jsx)(n(109939).sA, {
                                id: "ingestionConfirmation.ingestion.acknowledge",
                                defaultMessage: "Started syncing from {connectorName}. This can take up to 36 hours.",
                                values: {
                                    connectorName: e
                                }
                            }),
                            position: "bottom",
                            style: {
                                width: "500px",
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            right: (0, i.jsx)(n(64960).Ay, {
                                onClick: n(436555).N2,
                                children: (0, i.jsx)(n(109939).sA, {
                                    id: "ingestionConfirmation.ingestion.startedMessageDismiss",
                                    defaultMessage: "Close"
                                })
                            })
                        }))
                    },
                    onDismiss: _
                }) : null
            }
        },
        464913: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowStraightUpSmallIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.05 2.12 9.9 11.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8.442 2.308a.625.625 0 0 0-.884 0l-4.32 4.32a.625.625 0 0 0 .884.884l3.253-3.253v9.017c0 .334.283.599.625.599a.61.61 0 0 0 .625-.599V4.26l3.253 3.253a.625.625 0 0 0 .884-.884z"
                    })
                },
                i = (0, n(104509).wt)("arrowStraightUpSmall", o, "small")
        },
        492421: (e, t, n) => {
            n.d(t, {
                e: () => s
            });
            var o = n(296540),
                i = n(474848);
            let a = {
                style0: {
                    width: 240
                },
                settingsHidden: {
                    display: "none"
                },
                disconnectButton: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.medium,
                    width: "100%"
                },
                learnMoreButton: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.semibold,
                    borderRadius: "4px",
                    width: "100%"
                },
                learnMoreText: {
                    fontWeight: n(699422).Wy.medium,
                    fontSize: 12,
                    color: `${n(632079).Tj.text.secondary}`,
                    gap: 5
                }
            };

            function s(e) {
                var t;
                let {
                    connector: s,
                    screenName: l,
                    nextScreens: c,
                    onDismiss: d,
                    learnMoreUrl: u,
                    settings: p
                } = e, g = (0, n(682985).O$)(n(399077).NT[s]), {
                    analyticsFrom: m,
                    sessionId: h,
                    currentScreen: f
                } = g, b = n(590212).w0[s], y = (0, n(682985).K8)(() => (0, n(876688).XY)(s), [s]), [v, A] = (0, o.useState)(!!p), [x, M] = (0, o.useState)(!p), _ = (t = v, (0, n(960253).I)(() => ({
                    wrapper: {
                        width: 400,
                        padding: "0 24px 16px",
                        minHeight: t ? 478 : void 0
                    }
                }), [t])), S = (0, n(109939).tz)();
                return (0, i.jsx)(n(556809).a, {
                    ariaLabel: S.formatMessage({
                        id: "aiConnectors.settingsModalAriaLabel",
                        defaultMessage: "AI Connector Settings"
                    }),
                    showCloseIcon: !0,
                    open: f === l,
                    onDismiss: () => {
                        (0, n(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "settings_modal_close",
                                    integration_type: s,
                                    setup_session_id: h,
                                    from: m
                                }
                            }
                        }), null == d || d(), n(399077).NT[s].setState({ ...g,
                            currentScreen: "none"
                        })
                    },
                    children: (0, i.jsxs)("div", {
                        style: _.wrapper,
                        children: [(0, i.jsx)(n(798790).b, {
                            connectorType: s,
                            title: "completed" === y ? (0, i.jsx)(n(109939).sA, {
                                id: "aiConnectors.settingsModalTitle",
                                defaultMessage: "{displayName} is connected to Notion AI",
                                values: {
                                    displayName: b
                                }
                            }) : (0, i.jsx)(n(109939).sA, {
                                id: "aiConnectors.settingsModalTitleNotCompleted",
                                defaultMessage: "{displayName} is connecting to Notion AI",
                                values: {
                                    displayName: b
                                }
                            })
                        }), p ? (0, i.jsx)("div", {
                            style: v ? a.settingsHidden : void 0,
                            children: (0, i.jsx)(n(4458).fI, {
                                justifyContent: "center",
                                gap: 12,
                                children: p({
                                    setIsLoading: A,
                                    setIsDisconnectButtonEnabled: M
                                })
                            })
                        }) : void 0, v ? (0, i.jsx)(n(4458).fI, {
                            paddingTop: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            children: (0, i.jsx)(n(517334).k, {})
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(n(4458).VP, {
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                gap: 8,
                                children: x ? (0, i.jsx)(r, {
                                    connector: s,
                                    styles: a.disconnectButton,
                                    isDisconnectButtonEnabled: x,
                                    nextScreens: c
                                }) : (0, i.jsx)(n(51831).m, {
                                    allowHover: !0,
                                    textWrap: !0,
                                    content: () => (0, i.jsx)("div", {
                                        style: a.style0,
                                        children: (0, i.jsx)(n(109939).sA, {
                                            id: "aiConnector.disconnectDisabled.tooltip",
                                            defaultMessage: "You can cancel or modify {displayName} when the connection is complete. ",
                                            values: {
                                                displayName: b
                                            }
                                        })
                                    }),
                                    children: e => (0, i.jsx)(r, {
                                        connector: s,
                                        events: e,
                                        styles: a.disconnectButton,
                                        isDisconnectButtonEnabled: x,
                                        nextScreens: c
                                    })
                                })
                            }), u ? (0, i.jsx)(n(4458).fI, {
                                paddingBlock: 24,
                                children: (0, i.jsx)(n(64960).Ay, {
                                    style: a.learnMoreButton,
                                    onClick: () => {
                                        (0, n(104310).u)({
                                            event: {
                                                eventName: "universal_qna_button_click",
                                                eventProperties: {
                                                    button_name: "settings_modal_learn_more_url_click",
                                                    integration_type: s,
                                                    setup_session_id: h,
                                                    from: m
                                                }
                                            }
                                        }), window.open(u, "_blank")
                                    },
                                    children: (0, i.jsxs)(n(4458).fI, {
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingTop: 4,
                                        paddingInlineEnd: 8,
                                        paddingBottom: 4,
                                        paddingInlineStart: 8,
                                        style: a.learnMoreText,
                                        children: [(0, i.jsx)(n(109939).sA, {
                                            id: "aiConnectors.integration.learnMore",
                                            defaultMessage: "Learn more"
                                        }), (0, i.jsx)(n(16275).I, {
                                            icon: n(166568).arrowUpRightSquareSmallIcon,
                                            size: "sm"
                                        })]
                                    })
                                })
                            }) : void 0]
                        })]
                    })
                })
            }

            function r(e) {
                let {
                    connector: t,
                    styles: o,
                    events: a,
                    isDisconnectButtonEnabled: s,
                    nextScreens: r
                } = e, l = (0, n(533992).v3)(), c = (0, n(682985).O$)(n(399077).NT[t]), {
                    sessionId: d,
                    analyticsFrom: u
                } = c, p = (0, n(723240).r)(), g = (0, n(682985).K8)(() => (0, n(876688).XY)(t), [t]);
                return (0, i.jsx)(n(265779).E, { ...a,
                    style: o,
                    disabled: !s,
                    onClick: async () => {
                        if (p) {
                            if ((0, n(104310).u)({
                                    event: {
                                        eventName: "universal_qna_button_click",
                                        eventProperties: {
                                            button_name: "settings_modal_disconnect_button",
                                            integration_type: t,
                                            setup_session_id: d,
                                            from: u
                                        }
                                    }
                                }), "completed" === g) return void n(399077).NT[t].setState({ ...c,
                                currentScreen: r.disconnect
                            });
                            if ("not_started" === g) {
                                let e = await (0, n(166672).disconnectConnector)({
                                    connector: t,
                                    spaceId: p,
                                    environment: l,
                                    disconnectReason: "admin_disconnect"
                                });
                                if (await (0, n(399077).getAiConnectorRefreshFunction)(t)({
                                        environment: l,
                                        spaceId: p
                                    }), "success" === e.type) return void n(399077).NT[t].setState({ ...c,
                                    currentScreen: "none"
                                })
                            }
                            n(399077).NT[t].setState({ ...c,
                                currentScreen: r.error
                            })
                        }
                    },
                    children: (0, i.jsx)(n(109939).sA, {
                        id: "aiConnectors.settingsModal.disconnect",
                        defaultMessage: "Disconnect"
                    })
                })
            }
        },
        511540: (e, t, n) => {
            n.d(t, {
                Y: () => u
            });
            var o = n(296540);
            n(581454);
            var i = n(474848);
            let a = (0, n(109939).YK)({
                    missedUpdates: {
                        defaultMessage: "What did I miss last week?",
                        id: "NotionAI.skillPill.missedUpdates"
                    },
                    projectsBehind: {
                        defaultMessage: "Are any projects behind?",
                        id: "NotionAI.skillPill.projectsBehind"
                    },
                    findPitchDecks: {
                        defaultMessage: "Find our latest pitch decks",
                        id: "NotionAI.skillPill.findPitchDecks"
                    },
                    findEventsNextWeek: {
                        defaultMessage: "What is on my calendar for next week?",
                        id: "NotionAI.skillPill.findCalendarEvents"
                    },
                    findEventSemantic: {
                        defaultMessage: "When are we meeting to discuss project Polar Bear?",
                        id: "NotionAI.skillPill.findEventSemantic"
                    },
                    summarizeMonthEvents: {
                        defaultMessage: "What is my weekly schedule like in June?",
                        id: "NotionAI.skillPill.summarizeMonthEvents"
                    },
                    summarizeThread: {
                        defaultMessage: "Summarize this thread",
                        id: "NotionAI.skillPill.summarizeThread"
                    },
                    findActionItems: {
                        defaultMessage: "Find action items in this thread",
                        id: "NotionAI.skillPill.findActionItems"
                    },
                    findDecisionPolarBear: {
                        defaultMessage: "What was the final decision about Polar Bear?",
                        id: "NotionAI.skillPill.findDecisionPolarBear"
                    },
                    findProjectDoc: {
                        defaultMessage: "What is the latest doc about project Polar Bear?",
                        id: "NotionAI.skillPill.findProjectDoc"
                    },
                    findUserTasks: {
                        defaultMessage: "What is @Vincent working on?",
                        id: "NotionAI.skillPill.jira.findUserTasks"
                    },
                    sprintTasks: {
                        defaultMessage: "What are my tasks this sprint?",
                        id: "NotionAI.skillPill.jira.sprintTasks"
                    },
                    resolutionTime: {
                        defaultMessage: "What is our resolution time for UX bugs last month?",
                        id: "NotionAI.skillPill.jira.resolutionTime"
                    },
                    findEngDoc: {
                        defaultMessage: "When is the office move date?",
                        id: "NotionAI.skillPill.drive.findEngDoc"
                    },
                    checkMergeStatus: {
                        defaultMessage: "Find Issues about the app menu",
                        id: "NotionAI.skillPill.github.checkMergeStatus"
                    },
                    prStatus: {
                        defaultMessage: "Is my latest PR merged?",
                        id: "NotionAI.skillPill.github.prStatus"
                    },
                    findFlag: {
                        defaultMessage: "Find the flag that enables the Polar Bear experiment",
                        id: "NotionAI.skillPill.github.findFlag"
                    },
                    findObjectRecord: {
                        defaultMessage: "Find the latest Salesforce object record",
                        id: "NotionAI.skillPill.salesforce.findObjectRecord"
                    }
                }),
                s = {
                    generic: [{
                        label: a.missedUpdates,
                        icon: n(673733).j
                    }, {
                        label: a.projectsBehind,
                        icon: n(93575).N
                    }, {
                        label: a.findPitchDecks,
                        icon: n(526812).s
                    }],
                    slack: [{
                        label: a.summarizeThread,
                        icon: n(673733).j
                    }, {
                        label: a.findActionItems,
                        icon: n(673733).j
                    }, {
                        label: a.findDecisionPolarBear,
                        icon: n(673733).j
                    }],
                    jira: [{
                        label: a.findUserTasks,
                        icon: n(93575).N
                    }, {
                        label: a.sprintTasks,
                        icon: n(93575).N
                    }, {
                        label: a.resolutionTime,
                        icon: n(93575).N
                    }],
                    "google-drive": [{
                        label: a.findPitchDecks,
                        icon: n(526812).s
                    }, {
                        label: a.findProjectDoc,
                        icon: n(526812).s
                    }, {
                        label: a.findEngDoc,
                        icon: n(526812).s
                    }],
                    github: [{
                        label: a.checkMergeStatus,
                        icon: n(198852).A
                    }, {
                        label: a.prStatus,
                        icon: n(198852).A
                    }, {
                        label: a.findFlag,
                        icon: n(198852).A
                    }],
                    "microsoft-teams": [{
                        label: a.summarizeThread,
                        icon: n(325133).F
                    }, {
                        label: a.findActionItems,
                        icon: n(325133).F
                    }, {
                        label: a.findDecisionPolarBear,
                        icon: n(325133).F
                    }],
                    gmail: [{
                        label: a.summarizeThread,
                        icon: n(851883).l
                    }, {
                        label: a.findActionItems,
                        icon: n(851883).l
                    }, {
                        label: a.findDecisionPolarBear,
                        icon: n(851883).l
                    }],
                    "google-calendar": [{
                        label: a.findEventsNextWeek,
                        icon: n(105586).c
                    }, {
                        label: a.findEventSemantic,
                        icon: n(105586).c
                    }, {
                        label: a.summarizeMonthEvents,
                        icon: n(105586).c
                    }],
                    "notion-calendar": [{
                        label: a.findEventsNextWeek,
                        icon: n(587292).Q
                    }, {
                        label: a.findEventSemantic,
                        icon: n(587292).Q
                    }, {
                        label: a.summarizeMonthEvents,
                        icon: n(587292).Q
                    }],
                    "notion-mail": [{
                        label: a.summarizeThread,
                        icon: n(851883).l
                    }, {
                        label: a.findActionItems,
                        icon: n(851883).l
                    }, {
                        label: a.findDecisionPolarBear,
                        icon: n(851883).l
                    }],
                    outlook: [{
                        label: a.summarizeThread,
                        icon: n(273453).n
                    }, {
                        label: a.findActionItems,
                        icon: n(273453).n
                    }, {
                        label: a.findDecisionPolarBear,
                        icon: n(273453).n
                    }],
                    sharepoint: [{
                        label: a.findPitchDecks,
                        icon: n(106762).s
                    }, {
                        label: a.findProjectDoc,
                        icon: n(106762).s
                    }, {
                        label: a.findDecisionPolarBear,
                        icon: n(106762).s
                    }],
                    linear: [{
                        label: a.projectsBehind,
                        icon: n(242426).u
                    }, {
                        label: a.findUserTasks,
                        icon: n(242426).u
                    }, {
                        label: a.checkMergeStatus,
                        icon: n(242426).u
                    }],
                    salesforce: [{
                        label: a.findObjectRecord,
                        icon: n(22836).M
                    }],
                    discord: [{
                        label: a.summarizeThread,
                        icon: n(109565).h
                    }],
                    box: [{
                        label: a.findEngDoc,
                        icon: n(625508).g
                    }],
                    asana: [{
                        label: a.findUserTasks,
                        icon: n(116531).X
                    }, {
                        label: a.projectsBehind,
                        icon: n(116531).X
                    }, {
                        label: a.checkMergeStatus,
                        icon: n(116531).X
                    }],
                    confluence: [],
                    custom: []
                },
                r = {
                    pillWrapperExtraStyle: {
                        backgroundColor: n(632079).Tj.whiteButtonBackground
                    },
                    faceWrapper: {
                        alignContent: "center",
                        paddingInlineStart: 2
                    },
                    faceImg: {
                        pointerEvents: "none",
                        width: 72,
                        height: 72,
                        boxShadow: n(632079).Tj.shadow.outline.md,
                        borderRadius: 100,
                        flexGrow: 0
                    },
                    skillListWrapper: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        marginInlineStart: 24,
                        overflowY: "hidden"
                    },
                    pillWrapper: {
                        display: "flex",
                        alignItems: "start",
                        paddingTop: 8,
                        paddingInlineEnd: 16,
                        paddingBottom: 8,
                        paddingInlineStart: 12,
                        borderRadius: 18,
                        backgroundColor: n(632079).Tj.background.tertiaryTranslucent,
                        color: n(632079).Tj.text.primary,
                        fontSize: 14,
                        flexWrap: "nowrap",
                        fontWeight: n(699422).Wy.medium,
                        gap: 8,
                        width: "fit-content"
                    },
                    style0: {
                        padding: "40px 24px"
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function l(e) {
                let {
                    label: t,
                    icon: o
                } = e;
                return (0, i.jsxs)("div", {
                    style: { ...r.pillWrapper,
                        ...r.pillWrapperExtraStyle
                    },
                    children: [(0, i.jsx)(n(708966).Q, {
                        iconGroup: o,
                        variantName: "default"
                    }), (0, i.jsx)(n(109939).sA, { ...t
                    })]
                })
            }

            function c({
                connector: e = "generic"
            }) {
                let t = "dark" === (0, n(960253).e)() ? n(146535) : n(737497),
                    o = s[e];
                return (0, i.jsx)("div", {
                    style: r.style0,
                    children: (0, i.jsxs)(n(4458).fI, {
                        className: "autolayout-fill-height autolayout-fill-width",
                        alignItems: "center",
                        justifyContent: "center",
                        style: r.positionRelative,
                        children: [(0, i.jsx)("div", {
                            style: r.faceWrapper,
                            children: (0, i.jsx)("img", {
                                style: r.faceImg,
                                src: t,
                                alt: "Notion AI logo"
                            })
                        }), (0, i.jsx)("div", {
                            style: r.skillListWrapper,
                            children: o.map((e, t) => (0, i.jsx)(l, {
                                label: e.label,
                                icon: e.icon
                            }, e.label.id + t))
                        })]
                    })
                })
            }
            let d = {
                style0: {
                    textAlign: "center"
                },
                title: {
                    fontWeight: n(699422).Wy.bold,
                    lineHeight: "32px",
                    fontSize: "26px",
                    display: "flex"
                },
                betaBadge: {
                    marginInlineStart: 0
                },
                modalContainer: {
                    width: 420
                },
                topContainer: {
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: n(632079).Tj.palette.gray[75]
                },
                mainContent: {
                    display: "grid",
                    padding: "24px",
                    gap: 6,
                    justifyItems: "flex-start"
                },
                learnMoreCopy: {
                    color: n(632079).Tj.text.tertiary,
                    fontSize: 12,
                    maxWidth: 225
                },
                learnMoreLink: {
                    display: "inline-grid",
                    gridAutoFlow: "column",
                    placeItems: "center",
                    paddingInlineStart: 2,
                    marginInlineStart: -2,
                    borderRadius: 2
                },
                ctaContainedButton: {
                    whiteSpace: "nowrap",
                    width: "fit-content"
                },
                ctaFullWidthButton: {
                    whiteSpace: "nowrap",
                    width: "100%"
                },
                gpt4: {
                    whiteSpace: "nowrap"
                }
            };

            function u(e) {
                let {
                    connector: t,
                    onDismiss: a,
                    calloutKey: s,
                    eventName: r,
                    messages: l,
                    aiConnectorsFeatureAvailability: u,
                    showNarrowCta: g,
                    learnMoreHref: m = (0, n(442564).x)("guides.aiConnectors"),
                    isSalesAssisted: h = !1
                } = e, f = (0, n(533992).v3)();
                (0, n(383953).w)(() => {
                    (0, n(104310).u)({
                        event: {
                            eventName: r,
                            eventProperties: {
                                type: (0, n(94418).e2)(u) ? "discovery" : "upsell"
                            }
                        }
                    })
                });
                let b = (0, o.useCallback)(() => {
                        s && n(357709).Y5(f, {
                            callout_key: s,
                            click_type: "primary_cta",
                            variant: (0, n(94418).e2)(u) ? "has_addon" : "no_addon",
                            placement_key: "Modal"
                        }), a({
                            source: "cta",
                            upsell: u.upsell
                        })
                    }, [a, f, u, s]),
                    y = (0, o.useCallback)(() => {
                        s && n(357709).Sq(f, {
                            callout_key: s,
                            dismiss_type: "modal_dismiss_clicked",
                            variant: (0, n(94418).e2)(u) ? "has_addon" : "no_addon",
                            placement_key: "Modal"
                        }), a({
                            source: "closeButton",
                            upsell: void 0
                        })
                    }, [a, f, u, s]),
                    v = function(e) {
                        let {
                            showNarrowCta: t
                        } = e;
                        return (0, n(960253).I)(() => ({
                            footer: {
                                borderTop: `1px solid ${n(632079).Tj.border.secondary}`,
                                padding: "18px 24px",
                                display: "flex",
                                justifyContent: t ? "space-between" : "center",
                                gap: 20
                            }
                        }), [t])
                    }({
                        showNarrowCta: g
                    });
                return (0, i.jsxs)("div", {
                    style: d.modalContainer,
                    children: [(0, i.jsx)(n(226512).R, {
                        onDismiss: y
                    }), (0, i.jsx)("div", {
                        style: d.topContainer,
                        children: (0, i.jsx)(c, {
                            connector: t
                        })
                    }), (0, i.jsxs)("div", {
                        style: d.mainContent,
                        children: ["generic" === t || (0, n(590212).Bm)(t) ? void 0 : (0, i.jsx)(n(18274).A, {
                            style: d.betaBadge
                        }), (0, i.jsx)("div", {
                            style: d.title,
                            children: (0, i.jsx)(n(109939).sA, { ...l.title
                            })
                        }), (0, i.jsx)(n(324489).V, {
                            isSecondaryColor: !0,
                            isMultiline: !0,
                            children: (0, i.jsx)(n(109939).sA, { ...l.subtitleForAnnouncement,
                                values: {
                                    gpt4: (0, i.jsx)("span", {
                                        style: d.gpt4,
                                        children: "GPT-4"
                                    })
                                }
                            })
                        })]
                    }), (0, i.jsx)("div", {
                        style: v.footer,
                        children: g ? (0, i.jsxs)(i.Fragment, {
                            children: [m ? (0, i.jsx)(p, {
                                hasAiConnectorFeature: (0, n(94418).e2)(u),
                                calloutKey: s,
                                href: m,
                                showNarrowCta: g
                            }) : void 0, (0, i.jsx)(n(912946).A, {
                                size: "xl",
                                onClick: b,
                                style: d.ctaContainedButton,
                                children: (0, i.jsx)(n(109939).sA, { ...(0, n(94418).e2)(u) ? l.ctaButtonLabelWithAddon : l.ctaButtonLabelWithoutAddon
                                })
                            })]
                        }) : (0, i.jsxs)(n(4458).VP, {
                            gap: 8,
                            children: [(0, i.jsx)(n(912946).A, {
                                size: "xl",
                                onClick: b,
                                style: d.ctaFullWidthButton,
                                iconLeading: n(758995).paperPlaneIcon,
                                children: (0, i.jsx)(n(109939).sA, { ...l.notifyWorkspaceOwner ? ? n(916963).gp.notifyWorkspaceOwner
                                })
                            }), h ? void 0 : (0, i.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "tertiary",
                                style: d.style0,
                                children: (0, i.jsx)(n(109939).sA, { ...n(916963).gp.notifyWorkspaceSubtitle
                                })
                            })]
                        })
                    })]
                })
            }

            function p(e) {
                let {
                    hasAiConnectorFeature: t,
                    calloutKey: a,
                    href: s
                } = e, r = (0, n(533992).v3)(), l = (0, o.useCallback)(() => {
                    a && n(357709).Y5(r, {
                        callout_key: a,
                        click_type: "learn_more",
                        variant: t ? "has_addon" : "no_addon",
                        placement_key: "Modal"
                    })
                }, [r, t, a]);
                return (0, i.jsxs)("div", {
                    style: d.learnMoreCopy,
                    children: [(0, i.jsx)(n(109939).sA, { ...n(916963).gp.betaDisclaimer
                    }), " ", (0, i.jsxs)(n(590422).Q, {
                        onClick: l,
                        style: d.learnMoreLink,
                        href: s,
                        external: !0,
                        inline: !0,
                        children: [(0, i.jsx)(n(109939).sA, { ...n(916963).gp.learnMoreLink
                        }), (0, i.jsx)(n(16275).I, {
                            icon: n(166568).arrowUpRightSquareSmallIcon,
                            size: "sm"
                        })]
                    })]
                })
            }
        },
        540328: (e, t, n) => {
            n.d(t, {
                KY: () => a,
                dr: () => s,
                xX: () => r
            });
            var o = () => n(558208);
            let i = new Map;

            function a(e) {
                i.set(e.id, e)
            }

            function s(e) {
                if (e) return i.get(e)
            }

            function r(e) {
                var t, a, s;
                let {
                    threadStore: r,
                    environment: l,
                    spaceStore: c,
                    userStore: d
                } = e;
                if (!r || !(0, o().Ci)(r)) return r;
                let u = l.defaultRecordCache.inMemoryRecordCache;
                for (let e of u.cacheOverrides.slice()) e.name === o().Ll && u.removeCacheOverride(e);
                let p = r.getTranscript(),
                    g = r.getParentId(),
                    m = r.getParentTable(),
                    h = null == (t = r.getData()) ? void 0 : t.workflow_id,
                    f = r.getType(),
                    b = null == (a = r.getData()) ? void 0 : a.title,
                    y = r.getSpaceId() ? ? c.id,
                    {
                        performResult: v
                    } = (0, n(377796).createAndCommit)({
                        userAction: "databaseAgent.persistTemporaryThread",
                        environment: l,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: y
                        },
                        perform: e => {
                            let t = (0, n(757688).aP)({
                                environment: l,
                                spaceStore: c,
                                userStore: d,
                                transcript: p,
                                transaction: e,
                                threadId: r.id,
                                workflowId: h,
                                threadType: f
                            });
                            return g && m && (0, n(173157).z)({
                                store: t,
                                transaction: e,
                                data: {
                                    parent_id: g,
                                    parent_table: m,
                                    space_id: y
                                }
                            }), b && (0, n(173157).z)({
                                store: t.getDataStore(),
                                transaction: e,
                                data: {
                                    title: b
                                }
                            }), t
                        }
                    });
                return s = r.id, i.delete(s), v ? ? n(174148).E.createChildStore(c, {
                    id: r.id,
                    spaceId: y,
                    table: n(832375).Toz
                })
            }
        },
        545856: (e, t, n) => {
            n.d(t, {
                Fp: () => g,
                MG: () => r,
                PY: () => b,
                aJ: () => c,
                cP: () => p,
                ht: () => f,
                m$: () => i,
                qt: () => h,
                vu: () => m,
                xF: () => a,
                y_: () => l
            }), n(296540);
            var o = n(474848);
            async function i(e, t) {
                let o = await new Promise(e => {
                    n(93380).j.open({
                        onSelect: t => {
                            n(93380).j.close(), e(t)
                        },
                        onDismiss: () => {
                            e(void 0)
                        }
                    })
                });
                o && e.api.callApi({
                    eventName: "setNotionMailConnectorPreference",
                    environment: e,
                    data: {
                        spaceId: t,
                        preferredMailClient: o
                    }
                }).catch(e => {
                    (0, n(222024).t)().error(e)
                })
            }

            function a() {
                let {
                    learnMoreUrl: e
                } = (0, n(399077).hP)("notion-mail"), t = (0, n(533992).v3)(), a = (0, n(723240).r)(), s = (0, n(83208).X)("script_agent_mail_module_available"), l = (0, n(83208).X)("mail_agent_draft_to_all_connected_clients");
                return (0, o.jsx)(n(683150).Z, {
                    connector: "notion-mail",
                    screenName: "introduction",
                    nextScreens: {
                        notStarted: "authentication",
                        inProgress: "connection_complete_screen",
                        alreadyConnected: "already_connected",
                        error: "error"
                    },
                    usesPopup: !1,
                    learnMoreUrl: e,
                    openAuthUrl: () => {
                        s ? (async () => {
                            (await r({
                                environment: t
                            })).success && (n(318329).Lf.setState({ ...n(318329).Lf.state,
                                status: "authenticated",
                                isConnected: !0,
                                isPersonalAuthComplete: !0,
                                currentScreen: "none"
                            }), a && !l && await i(t, a), n(318329).Lf.setState({ ...n(318329).Lf.state,
                                currentScreen: "connection_complete_screen"
                            }))
                        })() : r({
                            environment: t
                        })
                    },
                    onCheckConnectionFromInProgressState: async () => {
                        if (!a) return !1;
                        let e = await t.api.callApi({
                            eventName: "connectAiConnector",
                            environment: t,
                            data: {
                                spaceId: a,
                                connector: "notion-mail"
                            }
                        });
                        if (!("success" === e.type && e.data.success)) return !1;
                        let o = "success" === e.type ? e.data : void 0,
                            r = null != o && o.success ? o.externalSourceName : void 0;
                        if (n(318329).Lf.setState({ ...n(318329).Lf.state,
                                status: "authenticated",
                                isConnected: !0,
                                isPersonalAuthComplete: !0,
                                externalSourceName: r
                            }), s) {
                            let e = await t.api.callApi({
                                eventName: "getNotionMailConnectorPreference",
                                environment: t,
                                data: {
                                    spaceId: a
                                }
                            });
                            ("success" === e.type && "success" === e.data.type ? e.data.preferredMailClient : null) || l || await i(t, a)
                        }
                        return !0
                    }
                })
            }
            let s = (0, n(109939).YK)({
                successTitle: {
                    id: "notionMailOnboarding.signupSuccess.title",
                    defaultMessage: "Notion Mail connected"
                },
                successMessage: {
                    id: "notionMailOnboarding.signupSuccess.message",
                    defaultMessage: "Your email account has been connected. You can now ask the agent about your emails."
                },
                errorTitle: {
                    id: "notionMailOnboarding.signupError.title",
                    defaultMessage: "Failed to connect Notion Mail"
                },
                errorMessage: {
                    id: "notionMailOnboarding.signupError.message",
                    defaultMessage: "Please try again or contact support if the issue persists."
                },
                insufficientOAuthScopesTitle: {
                    id: "notionMailOnboarding.insufficientOAuthScopes.title",
                    defaultMessage: "Gmail permissions required"
                },
                insufficientOAuthScopesMessage: {
                    id: "notionMailOnboarding.insufficientOAuthScopes.message",
                    defaultMessage: "All Gmail permissions are required to connect Notion Mail. Please try again and allow all requested permissions."
                },
                emailMismatchTitle: {
                    id: "notionMailOnboarding.emailMismatch.title",
                    defaultMessage: "Wrong email account"
                },
                emailMismatchMessage: {
                    id: "notionMailOnboarding.emailMismatch.message",
                    defaultMessage: "Please sign in with {email} to reconnect this account."
                }
            });
            async function r(e) {
                var t, o;
                let {
                    environment: i,
                    authAction: a,
                    resyncEmailAddress: r
                } = e, l = null == (t = n(728372).AppStoreCurrentUserStore.state) ? void 0 : t.getEmail(), c = null == (o = n(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : o.getSpaceId(), d = (0, n(599412).wW)();
                if (!l || !c) return {
                    success: !1
                };
                let u = await (0, n(874809).i6)({
                    environment: i,
                    source: "mail",
                    providerContext: {
                        type: "google",
                        email: r,
                        authAction: a
                    }
                });
                if (!u || "dismissedDueToCleanup" === u) return {
                    success: !1
                };
                let p = await (0, n(250662).Ng)({
                    environment: i,
                    code: u.code,
                    encryptedToken: u.encryptedToken,
                    spaceId: c,
                    from: "aiConnector",
                    authAction: a
                });
                if ("success" !== p.type) {
                    let e = (0, n(206164).e)(p.body);
                    return n(819652).Iz({
                        variant: "error",
                        title: d.formatMessage(e ? s.insufficientOAuthScopesTitle : s.errorTitle),
                        message: d.formatMessage(e ? s.insufficientOAuthScopesMessage : s.errorMessage)
                    }), {
                        success: !1
                    }
                }
                if ("Resync" === a && r) {
                    let e = p.data.normalizedEmailAddress ? ? p.data.displayEmailAddress;
                    if (e && (0, n(285316).kM)(e) !== (0, n(285316).kM)(r)) return n(819652).Iz({
                        variant: "error",
                        title: d.formatMessage(s.emailMismatchTitle),
                        message: d.formatMessage(s.emailMismatchMessage, {
                            email: r
                        })
                    }), {
                        success: !1,
                        messageForModel: `The user signed in with a different email than the account that needs reconnecting (${r}). They need to sign in with that specific account.`
                    }
                }
                let g = await i.api.callApi({
                    eventName: "connectAiConnector",
                    environment: i,
                    data: {
                        spaceId: c,
                        connector: "notion-mail"
                    }
                });
                return "success" === g.type && g.data.success ? (n(819652).Iz({
                    title: d.formatMessage(s.successTitle),
                    message: d.formatMessage(s.successMessage)
                }), {
                    success: !0
                }) : (n(819652).Iz({
                    variant: "error",
                    title: d.formatMessage(s.errorTitle),
                    message: d.formatMessage(s.errorMessage)
                }), {
                    success: !1,
                    messageForModel: "Notion Mail connection failed. If this persists, please contact support."
                })
            }

            function l() {
                let e = (0, n(682985).K8)(() => n(318329).Lf.state.currentScreen, []);
                return (0, o.jsx)(n(748631).m, {
                    connector: "notion-mail",
                    open: "already_connected" === e,
                    onDismiss: () => {
                        n(318329).Lf.reset()
                    }
                })
            }

            function c() {
                let {
                    learnMoreUrl: e
                } = (0, n(399077).hP)("notion-mail");
                return (0, o.jsx)(n(45877).A, {
                    connector: "notion-mail",
                    screenName: "not_admin_screen",
                    learnMoreUrl: e
                })
            }
            let d = (0, n(109939).YK)({
                    notionAiWillBeAbleToAnswerQuestions: {
                        id: "notionMailOnboarding.connectionComplete.notionAiWillBeAbleToAnswerQuestions",
                        defaultMessage: "Notion AI will be able to search and answer questions across Notion and Notion Mail knowledge."
                    }
                }),
                u = [(0, o.jsx)(n(876042).L, {
                    number: 1,
                    title: d.notionAiWillBeAbleToAnswerQuestions
                }, "notionAiAnswerQuestions")];

            function p() {
                let e = (0, n(83208).X)("script_agent_mail_module_available"),
                    t = (0, n(533992).v3)(),
                    i = "new_user_home_checklist" === (0, n(682985).K8)(() => n(318329).Lf.state.analyticsFrom, []) ? () => (0, n(355380).OD)(t) : void 0;
                return (0, o.jsx)(n(436579).a, {
                    connector: "notion-mail",
                    screenName: "connection_complete_screen",
                    nextScreens: {
                        notStarted: "authentication",
                        inProgress: "none",
                        alreadyConnected: "already_connected",
                        error: "error"
                    },
                    ingestionNotNeeded: !0,
                    onStartIngestion: void 0,
                    notes: e ? u : void 0,
                    onDone: i
                })
            }

            function g() {
                return (0, o.jsx)(n(633302).$, {
                    connector: "notion-mail",
                    screenName: "connection_exist_screen",
                    nextScreens: {
                        settings: "none"
                    },
                    connectedSpaceId: ""
                })
            }

            function m() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(723240).r)(),
                    i = (0, n(83208).X)("script_agent_mail_module_available"),
                    {
                        learnMoreUrl: a,
                        notionAuthUrl: s,
                        troubleShootingUrl: r
                    } = (0, n(399077).hP)("notion-mail");
                return t ? (0, o.jsx)(n(202570).R, {
                    connector: "notion-mail",
                    screenName: "authentication",
                    nextScreens: {
                        notAdminOfConnectorAccount: "not_admin_screen",
                        connectionConflict: "connection_exist_screen",
                        connectionSuccess: i ? "none" : "connection_complete_screen",
                        error: "error"
                    },
                    learnMoreUrl: a,
                    troubleShootingUrl: r,
                    staticConnectorAuthUrl: s,
                    setConnectionStateAsConnected: () => {
                        n(318329).Lf.setState({ ...n(318329).Lf.state,
                            status: "authenticated",
                            isConnected: !0,
                            isPersonalAuthComplete: !0
                        })
                    },
                    callConnectionApi: async () => {
                        let o = await e.api.callApi({
                            eventName: "connectAiConnector",
                            environment: e,
                            data: {
                                spaceId: t,
                                connector: "notion-mail"
                            }
                        });
                        return i && "authentication" !== n(318329).Lf.state.currentScreen ? {
                            type: "success",
                            data: {
                                connectionSuccess: !1,
                                errorResponse: {
                                    status: 401
                                }
                            }
                        } : "success" === o.type && o.data.success ? {
                            type: "success",
                            data: {
                                connectionSuccess: !0
                            }
                        } : {
                            type: "success",
                            data: {
                                connectionSuccess: !1,
                                errorResponse: {
                                    status: 401
                                }
                            }
                        }
                    }
                }) : null
            }

            function h() {
                return (0, o.jsx)(n(492421).e, {
                    connector: "notion-mail",
                    screenName: "settings",
                    nextScreens: {
                        disconnect: "disconnect_screen",
                        error: "error"
                    }
                })
            }

            function f() {
                return (0, o.jsx)(n(384214).X, {
                    connector: "notion-mail",
                    postDisconnectScreenName: "post_disconnect_screen",
                    disconnectScreenName: "disconnect_screen",
                    settingsScreenName: "settings",
                    errorScreenName: "error",
                    setStatusAsDisconnected: () => {
                        n(318329).Lf.setState({ ...n(318329).Lf.state,
                            status: "not_started",
                            isConnected: !1,
                            isLoaded: !0,
                            isBackendConnected: !1
                        })
                    },
                    showGoogleWorkspaceNote: !1
                })
            }

            function b() {
                return (0, o.jsx)(n(103378).b, {
                    connector: "notion-mail",
                    screenName: "error"
                })
            }
        },
        633302: (e, t, n) => {
            n.d(t, {
                $: () => s
            }), n(898992), n(354520);
            var o = n(296540),
                i = n(474848);
            let a = {
                wrapper: {
                    width: 400
                },
                footer: {
                    boxShadow: n(632079).Tj.shadow.outline.lg
                },
                connectButton: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.semibold,
                    width: "100%"
                }
            };

            function s(e) {
                let {
                    connector: t,
                    connectedSpaceId: s,
                    screenName: r,
                    nextScreens: l
                } = e, c = (0, n(109939).tz)(), d = (0, n(682985).O$)(n(399077).NT[t]), {
                    currentScreen: u,
                    sessionId: p,
                    analyticsFrom: g
                } = d, m = n(590212).w0[t], h = (0, n(533992).v3)(), f = (0, o.useCallback)(async () => {
                    let e = n(728372).AppStoreCurrentUserRootStore.state;
                    if (!e) return;
                    (0, n(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "visit_other_workspace",
                                integration_type: t,
                                setup_session_id: p,
                                from: g
                            }
                        }
                    });
                    let o = e.getSpaceViewStores().filter(e => e.getSpaceId() === s)[0];
                    await (0, n(72713).t)({
                        environment: h,
                        navigationType: "switchingToOrLoadingSpace",
                        pageVisitSource: n(254656).y8.AIGoogleDriveQna,
                        spaceViewStore: o,
                        userRootStore: n(728372).AppStoreCurrentUserRootStore.state,
                        userSettingsStore: n(728372).AppStoreCurrentUserSettingsStore.state
                    }), n(399077).NT[t].setState({ ...d,
                        currentScreen: l.settings,
                        analyticsFrom: "google_other_workspace",
                        sessionId: p
                    })
                }, [g, s, h, p, t, d, l]);
                return (0, i.jsx)(n(556809).a, {
                    ariaLabel: c.formatMessage({
                        defaultMessage: "Ai Connector Connection Conflict Modal",
                        id: "aiConnectorOnboarding.connectionConflictModal.ariaLabel"
                    }),
                    showCloseIcon: !0,
                    onDismiss: () => n(399077).NT[t].setState({ ...d,
                        currentScreen: "none"
                    }),
                    open: u === r,
                    children: (0, i.jsxs)("div", {
                        style: a.wrapper,
                        children: [(0, i.jsx)(n(798790).b, {
                            connectorType: t,
                            title: (0, i.jsx)(n(109939).sA, {
                                id: "universalSearch.connectionExistModal.title",
                                defaultMessage: "You’ve already connected {connectorName} to another Notion workspace.",
                                values: {
                                    connectorName: m
                                }
                            }),
                            subtext: (0, i.jsx)(n(109939).sA, {
                                id: "universalSearch.connectionExistModal.description",
                                defaultMessage: "Currently, only one workspace can be connected to {connectorName}. To connect this workspace, please disconnect the existing connection.",
                                values: {
                                    connectorName: m
                                }
                            })
                        }), (0, i.jsx)(n(4458).VP, {
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: 60,
                            paddingTop: 20,
                            paddingInlineEnd: 20,
                            paddingBottom: 20,
                            paddingInlineStart: 20,
                            gap: 6,
                            style: a.footer,
                            children: (0, i.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                style: a.connectButton,
                                onClick: f,
                                children: (0, i.jsx)(n(109939).sA, {
                                    id: "universalSearch.connectionExistModal.navigateButton",
                                    defaultMessage: "Visit the other workspace"
                                })
                            })
                        })]
                    })
                })
            }
        },
        641877: (e, t, n) => {
            n.d(t, {
                Q: () => s
            }), n(581454);
            var o = n(296540),
                i = n(474848);
            let a = {
                wrapper: {
                    width: 400
                },
                note: {
                    fontWeight: n(699422).Wy.regular,
                    fontSize: 14,
                    lineHeight: "18px",
                    width: 330,
                    marginInlineStart: 8
                },
                primaryButton: {
                    width: "100%"
                },
                learnMoreButton: {
                    width: "100%"
                }
            };

            function s(e) {
                let {
                    notes: t,
                    connectorType: s,
                    openLearnMoreUrl: r,
                    open: l,
                    onDismiss: c,
                    title: d,
                    subText: u,
                    onClickPrimaryButton: p,
                    primaryButtonText: g,
                    warningMessage: m,
                    width: h
                } = e, [f, b] = (0, o.useState)(!1), y = (0, n(109939).tz)(), v = h ? ? 400, A = h ? h - 72 : 330;
                return (0, i.jsx)(n(556809).a, {
                    ariaLabel: y.formatMessage({
                        id: "universalSearch.waitingForConnection.ariaLabel",
                        defaultMessage: "Authentication modal"
                    }),
                    showCloseIcon: !0,
                    open: l,
                    onDismiss: c,
                    children: (0, i.jsxs)("div", {
                        style: { ...a.wrapper,
                            width: v
                        },
                        children: [(0, i.jsx)(n(798790).b, {
                            connectorType: s,
                            title: d,
                            subtext: u
                        }), (0, i.jsx)(n(4458).fI, {
                            paddingTop: 12,
                            paddingBottom: 20,
                            paddingInlineStart: 20,
                            paddingInlineEnd: 20,
                            width: v,
                            children: (0, i.jsx)(n(4458).VP, {
                                children: (0, i.jsxs)(n(4458).VP, {
                                    alignItems: "center",
                                    children: [t.map((e, t) => (0, i.jsxs)(n(4458).fI, {
                                        marginTop: 4,
                                        marginBottom: 6,
                                        gap: 8,
                                        children: [(0, i.jsx)(n(157254).A, {
                                            number: t + 1
                                        }), (0, i.jsx)("div", {
                                            style: { ...a.note,
                                                width: A
                                            },
                                            children: e
                                        })]
                                    }, t)), (0, i.jsxs)(n(4458).VP, {
                                        width: "100%",
                                        marginTop: 16,
                                        gap: 6,
                                        children: [m, p ? (0, i.jsx)(n(912946).A, {
                                            colorPalette: "blue",
                                            size: "xl",
                                            isLoading: f,
                                            disabled: f,
                                            style: a.primaryButton,
                                            onClick: async () => {
                                                b(!0), await p(), b(!1)
                                            },
                                            children: g
                                        }) : void 0, r ? (0, i.jsx)(n(548436).A, {
                                            size: "lg",
                                            iconLeading: {
                                                icon: n(152280).bookSmallIcon,
                                                size: "xs"
                                            },
                                            style: a.learnMoreButton,
                                            onClick: r,
                                            children: (0, i.jsx)(n(109939).sA, {
                                                id: "universalSearch.integrations.learnMore",
                                                defaultMessage: "Read our step-by-step guide"
                                            })
                                        }) : void 0]
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        683150: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var o = n(296540),
                i = n(474848);
            let a = (0, n(109939).YK)({
                oauthPopupTitle: {
                    defaultMessage: "Connect {connector} AI Connector",
                    id: "AIConnectorIntroModal.oauthPopupTitle"
                }
            });

            function s(e) {
                let {
                    connector: t,
                    learnMoreUrl: a,
                    staticAuthUrl: s,
                    openAuthUrl: l
                } = e, [c, d] = o.useState(!1), u = (0, n(533992).v3)(), p = (0, o.useMemo)(() => (0, n(322652).a)(t), [t]), g = (0, o.useMemo)(() => (0, n(322652).J)(t), [t]), m = (0, n(723240).r)(), h = (0, n(682985).O$)(n(399077).NT[t]), {
                    currentScreen: f,
                    analyticsFrom: b,
                    sessionId: y
                } = h, v = (0, n(682985).K8)(() => n(886556).z.canUseAiConnectorSearchScope(t), [t]), A = "introduction" === f, x = (0, n(972740).L)(), M = (0, n(84163).J)(x), _ = u.currentUser.id, S = (0, n(611285).P)({
                    name: "ai_connectors",
                    spaceId: m,
                    userId: _
                }), j = (0, n(399077).nB)({
                    connector: t,
                    authorizationType: "workspace",
                    existingAuthorizationUrl: s,
                    openAuthUrl: l
                });
                return ((0, o.useEffect)(() => {
                    A && v && (0, n(104310).u)({
                        event: {
                            eventName: "universal_qna_onboarding_modal_open",
                            eventProperties: {
                                integration_type: t,
                                setup_session_id: y,
                                from: b,
                                is_space_admin: M,
                                is_ai_eligible: S ? ? !1
                            }
                        }
                    })
                }, [u, b, S, A, M, y, t, v]), v && "sharepoint" !== t) ? n(986939).A.isMobile ? (0, i.jsx)(n(882591).S, {
                    connectorType: t,
                    open: A,
                    onClosed: () => n(399077).NT[t].reset(),
                    learnMoreUrl: a
                }) : M || (0, n(281708).q1)(t) ? (0, i.jsx)(n(364937).A, {
                    connectorType: t,
                    notes: p,
                    customContentBeforeFooter: e.customContentBeforeFooter,
                    connectDisabled: e.connectDisabled,
                    onLearnMore: () => {
                        window.open(a, "_blank")
                    },
                    onConnect: async () => {
                        m && (j || l) && (d(!0), await r({
                            environment: u,
                            spaceId: m,
                            setupSessionId: y,
                            from: `${(0,n(281708).aK)(t)}_connect_button`,
                            authUrl: j,
                            ...e
                        }), d(!1))
                    },
                    onDismiss: () => {
                        (0, n(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "info_screen_dismiss",
                                    integration_type: t,
                                    setup_session_id: y,
                                    from: b
                                }
                            }
                        }), n(399077).NT[t].setState({ ...h,
                            analyticsFrom: b,
                            sessionId: y,
                            currentScreen: "none"
                        })
                    },
                    title: g,
                    isLoading: c,
                    open: A
                }) : (0, i.jsx)(n(284920).BN, {
                    connector: t,
                    handleClose: () => (0, n(166672).resetAiConnectorStatus)(t),
                    open: A,
                    analyticsFrom: b,
                    setupSessionId: y,
                    messages: n(916963).vc[t]
                }) : null
            }
            async function r(e) {
                let {
                    connector: t,
                    environment: o,
                    spaceId: i,
                    setupSessionId: s,
                    from: r,
                    authUrl: l,
                    openAuthUrl: c,
                    onConnectNotStarted: d,
                    nextScreens: u,
                    usesPopup: p
                } = e;
                (0, n(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: "info_screen_connect",
                            integration_type: t,
                            setup_session_id: s,
                            from: r
                        }
                    }
                }), (0, n(166672).maybeMarkAiConnectorOnboardingSurveyMomentInSettings)({
                    environment: o,
                    connector: t,
                    moment: "started"
                });
                let g = await (0, n(628860).B)(o, {
                        name: "ai_connectors",
                        spaceId: i,
                        userId: o.currentUser.id
                    }),
                    m = (0, n(281708).q1)(t);
                if (!(0, n(94418).e2)(g) && !m) return void(0, n(622081).pp)({
                    connector: t,
                    environment: o,
                    analyticsFrom: r,
                    connectorsFeatureAvailability: g
                });
                let {
                    status: h
                } = await (0, n(399077).getAiConnectorRefreshFunction)(t)({
                    environment: o,
                    spaceId: i
                });
                if ("failed" === h) return void n(399077).NT[t].setState({ ...n(399077).NT[t].state,
                    currentScreen: u.error
                });
                let f = (0, n(876688).XY)(t);
                if ("in_progress" === f) {
                    var b;
                    if ((0, n(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "connection_complete_screen",
                                    integration_type: t,
                                    setup_session_id: s,
                                    from: r
                                }
                            }
                        }), !1 !== await (null == (b = e.onCheckConnectionFromInProgressState) ? void 0 : b.call(e))) return void n(399077).NT[t].setState({ ...n(399077).NT[t].state,
                        currentScreen: u.inProgress
                    })
                } else if ("completed" === f) {
                    (0, n(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "already_connected_screen",
                                integration_type: t,
                                setup_session_id: s,
                                from: r
                            }
                        }
                    }), n(399077).NT[t].setState({ ...n(399077).NT[t].state,
                        currentScreen: u.alreadyConnected
                    });
                    return
                }(0, n(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: "auth_screen",
                            integration_type: t,
                            setup_session_id: s,
                            from: r
                        }
                    }
                }), n(399077).NT[t].setState({ ...n(399077).NT[t].state,
                    currentScreen: u.notStarted
                }), c ? c() : p && l ? o.device.isElectron ? (0, n(754573).P)(l) : n(956935).P(o, {
                    width: 800,
                    height: 600,
                    url: l,
                    titleMessage: a.oauthPopupTitle,
                    titleMessageValues: {
                        connector: t
                    }
                }) : l && window.open(l, "_blank"), null == d || d()
            }
        },
        748631: (e, t, n) => {
            n.d(t, {
                m: () => l
            });
            var o = n(296540),
                i = n(474848);
            let a = {
                    github: {
                        analyticsFrom: "github_ai_connector_already_connected",
                        primedTextInput: "Find a GitHub PR/Issue/Code file about: ",
                        contentType: "repositories"
                    },
                    slack: {
                        analyticsFrom: "slack_already_connected",
                        primedTextInput: "Search for messages in Slack: ",
                        contentType: "conversations"
                    },
                    "microsoft-teams": {
                        analyticsFrom: "microsoft_teams_ai_connector_already_connected",
                        primedTextInput: "Search for messages in Microsoft Teams",
                        contentType: "messages"
                    },
                    "google-drive": {
                        analyticsFrom: "google_drive_already_connected",
                        primedTextInput: "Find a Google Drive file about: ",
                        contentType: "content"
                    },
                    jira: {
                        analyticsFrom: "jira_already_connected",
                        primedTextInput: "Find a Jira issue about: ",
                        contentType: "issues"
                    },
                    gmail: {
                        analyticsFrom: "gmail_already_connected",
                        primedTextInput: "Find a Gmail email about: ",
                        contentType: "email"
                    },
                    "google-calendar": {
                        analyticsFrom: "google-calendar_already_connected",
                        primedTextInput: "Find a Google Calendar event about: ",
                        contentType: "events"
                    },
                    "notion-calendar": {
                        analyticsFrom: "notion-calendar_already_connected",
                        primedTextInput: "Find a Notion Calendar event about: ",
                        contentType: "events"
                    },
                    salesforce: {
                        analyticsFrom: "salesforce_already_connected",
                        primedTextInput: "Find a Salesforce object about: ",
                        contentType: "objects"
                    },
                    discord: {
                        analyticsFrom: "discord_already_connected",
                        primedTextInput: "Search for messages in Discord: ",
                        contentType: "messages"
                    },
                    "notion-mail": {
                        analyticsFrom: "notion-mail_already_connected",
                        primedTextInput: "Find a Notion Mail email about: ",
                        contentType: "emails"
                    },
                    sharepoint: {
                        analyticsFrom: "sharepoint_already_connected",
                        primedTextInput: "Search for documents in SharePoint",
                        contentType: "content"
                    },
                    linear: {
                        analyticsFrom: "linear_already_connected",
                        primedTextInput: "Search for issues in Linear",
                        contentType: "issues"
                    },
                    outlook: {
                        analyticsFrom: "outlook_already_connected",
                        primedTextInput: "Search for emails in Outlook",
                        contentType: "emails"
                    },
                    asana: {
                        analyticsFrom: "asana_already_connected",
                        primedTextInput: "Search for tasks in Asana",
                        contentType: "tasks"
                    },
                    box: {
                        analyticsFrom: "box_already_connected",
                        primedTextInput: "Search for documents in Box",
                        contentType: "content"
                    },
                    confluence: {
                        analyticsFrom: "confluence_already_connected",
                        primedTextInput: "Search for pages in Confluence",
                        contentType: "pages"
                    }
                },
                s = (0, n(109939).YK)({
                    alreadyConnected: {
                        id: "universalQna.connector.alreadyConnected.title",
                        defaultMessage: "{connector} is already connected to Notion AI"
                    },
                    tryIt: {
                        id: "universalQna.connector.alreadyConnected.subtitle",
                        defaultMessage: "You’re fully set up. Try asking AI about your {connector} {contentType}!"
                    },
                    tryAskingAQuestion: {
                        id: "universalQna.connector.alreadyConnected.tryAskingAQuestionButton",
                        defaultMessage: "Try asking a question"
                    }
                }),
                r = {
                    marginTop: 16
                };

            function l({
                open: e,
                onDismiss: t,
                connector: c
            }) {
                let d = (0, n(533992).v3)(),
                    u = (0, n(109939).tz)(),
                    p = a[c],
                    g = (0, n(909212).i7)(),
                    {
                        value: m
                    } = (0, n(815048).fJ)(n(310639).assistantDependency),
                    h = (0, o.useCallback)(() => {
                        t(), g && p && m && m.agentActions.openNewAgentSidebarFromMainBlock({
                            environment: d,
                            primeTextInput: p.primedTextInput
                        })
                    }, [d, t, p, g, m]);
                if (!m) return null;
                let f = u.formatMessage(s.alreadyConnected, {
                    connector: n(590212).w0[c]
                });
                return (0, i.jsx)(n(556809).a, {
                    showCloseIcon: !0,
                    onDismiss: t,
                    open: e,
                    ariaLabel: f,
                    children: (0, i.jsxs)(n(4458).VP, {
                        padding: 16,
                        maxWidth: 400,
                        children: [(0, i.jsx)(n(798790).b, {
                            titleSubtitleGap: !0,
                            fullWidthTitle: !0,
                            subtext: p ? (0, i.jsx)(n(109939).sA, { ...s.tryIt,
                                values: {
                                    connector: n(590212).w0[c],
                                    contentType: p.contentType
                                }
                            }) : void 0,
                            connectorType: c,
                            title: (0, i.jsx)(n(109939).sA, { ...s.alreadyConnected,
                                values: {
                                    connector: n(590212).w0[c]
                                }
                            })
                        }), (0, i.jsx)(n(912946).A, {
                            colorPalette: "blue",
                            size: "lg",
                            style: r,
                            onClick: h,
                            children: (0, i.jsx)(n(109939).sA, { ...s.tryAskingAQuestion
                            })
                        })]
                    })
                })
            }
        },
        758995: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                paperPlaneIcon: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.07 2.87 15.11 15.1",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M16.994 3.06a.62.62 0 0 1 .136.673l-5.357 13.843a.625.625 0 0 1-1.131.074l-2.913-5.33L2.4 9.41a.625.625 0 0 1 .074-1.132L16.317 2.92a.63.63 0 0 1 .677.14M8.08 11.087l5.936-5.936L4.18 8.957zm.884.884 2.13 3.898L14.9 6.035z"
                    })
                },
                i = (0, n(104509).wt)("paperPlane", o, "default")
        },
        771721: (e, t, n) => {
            n.d(t, {
                T: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.62 2.87 12.76 10.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.25 5.531h5.692a2.126 2.126 0 0 0 4.116 0h1.692a.625.625 0 1 0 0-1.25H12a2.126 2.126 0 0 0-4 0H2.25a.625.625 0 1 0 0 1.25M10 4.125a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75m-4 9c.921 0 1.706-.586 2-1.406h5.75a.625.625 0 0 0 0-1.25H8.058a2.126 2.126 0 0 0-4.116 0H2.25a.625.625 0 1 0 0 1.25H4a2.13 2.13 0 0 0 2 1.406m0-1.25a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75"
                    })
                },
                i = (0, n(104509).wt)("slidersSmall", o, "small")
        },
        777805: (e, t, n) => {
            n.r(t), n.d(t, {
                checkmarkShieldIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.07 2.17 13.85 15.65",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M12.876 7.978a.625.625 0 0 0-1.072-.643L9.25 11.59 7.815 9.916a.625.625 0 0 0-.95.814l2 2.333a.625.625 0 0 0 1.011-.085z"
                        }), (0, o.jsx)("path", {
                            d: "M10.28 2.241a.63.63 0 0 0-.56 0l-1.889.945a7.5 7.5 0 0 1-3.343.789H3.7a.625.625 0 0 0-.625.625v6.933a5.13 5.13 0 0 0 3.106 4.71l3.573 1.532a.63.63 0 0 0 .492 0l3.573-1.532a5.13 5.13 0 0 0 3.106-4.71V4.6a.625.625 0 0 0-.625-.625h-.788c-1.16 0-2.305-.27-3.343-.79zM8.39 4.304 10 3.499l1.61.805a8.7 8.7 0 0 0 3.902.921h.163v6.308c0 1.55-.924 2.95-2.348 3.562L10 16.52l-3.326-1.425a3.88 3.88 0 0 1-2.349-3.562V5.225h.163c1.355 0 2.69-.315 3.902-.921"
                        })]
                    })
                },
                a = (0, n(104509).wt)("checkmarkShield", i, "default")
        },
        798790: (e, t, n) => {
            n.d(t, {
                E: () => a,
                b: () => l
            }), n(296540);
            var o = n(474848);
            let i = {
                largeLogo: {
                    width: "80%",
                    height: "80%",
                    position: "absolute",
                    top: "-10%",
                    insetInlineStart: "-5%"
                },
                smallLogoWrapper: {
                    width: "60%",
                    height: "60%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 0,
                    insetInlineEnd: 0,
                    boxShadow: n(632079).Tj.shadow.outline.lg,
                    borderRadius: "50%",
                    backgroundColor: n(632079).Tj.palette.gray[0]
                },
                smallLogo: {
                    width: "70%"
                }
            };

            function a({
                size: e = 40
            }) {
                let t = (0, n(960253).I)(() => ({
                    wrapper: {
                        width: e,
                        height: e,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative"
                    }
                }), [e]);
                return (0, o.jsxs)("div", {
                    style: t.wrapper,
                    children: [(0, o.jsx)(n(708966).Q, {
                        iconGroup: n(44183).G.sharepoint,
                        variantName: "default",
                        style: i.largeLogo
                    }), (0, o.jsx)("div", {
                        style: i.smallLogoWrapper,
                        children: (0, n(75765).oneDriveIcon)(i.smallLogo)
                    })]
                })
            }
            let s = {
                    logos: {
                        width: 40,
                        height: 40
                    },
                    subtext: {
                        fontSize: 14,
                        fontWeight: n(699422).Wy.regular,
                        color: `${n(632079).Tj.text.secondary}`,
                        textAlign: "center",
                        textWrap: "balance"
                    },
                    wrapper: {
                        paddingBottom: 16
                    }
                },
                r = {
                    titleWrapper: {
                        textAlign: "center"
                    },
                    title: {
                        fontSize: 16,
                        fontWeight: n(699422).Wy.medium,
                        lineHeight: "22px",
                        textWrap: "balance"
                    }
                };

            function l(e) {
                let {
                    connectorType: t,
                    title: i,
                    subtext: l,
                    titleSubtitleGap: c = !1,
                    fullWidthTitle: d = !1
                } = e, u = n(44183).G[t];
                return (0, o.jsxs)("div", {
                    style: s.wrapper,
                    children: [(0, o.jsxs)(n(4458).fI, {
                        paddingTop: 40,
                        paddingInlineEnd: 20,
                        paddingBottom: 24,
                        paddingInlineStart: 20,
                        gap: 8,
                        justifyContent: "center",
                        alignItems: "center",
                        children: [(0, n(792668).notionIcon)(s.logos), e.disconnectFlow ? (0, o.jsx)(n(16275).I, {
                            icon: n(117152).xMarkIcon,
                            colorVariant: "secondary"
                        }) : (0, o.jsx)(n(16275).I, {
                            icon: n(53445).arrowLeftRightIcon,
                            colorVariant: "secondary"
                        }), "sharepoint" === t ? (0, o.jsx)(a, {}) : (0, o.jsx)(n(708966).Q, {
                            iconGroup: u,
                            style: {
                                width: s.logos.width,
                                height: s.logos.width
                            },
                            variantName: "default"
                        })]
                    }), (0, o.jsxs)(n(4458).VP, {
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 12 * !!c,
                        style: r.titleWrapper,
                        children: [(0, o.jsx)(n(4458).fI, {
                            paddingInlineStart: 20,
                            paddingInlineEnd: 20,
                            width: d ? "auto" : 352,
                            marginBottom: 2,
                            justifyContent: "center",
                            style: r.title,
                            children: i
                        }), l ? (0, o.jsx)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            paddingInlineStart: 20,
                            paddingInlineEnd: 20,
                            style: s.subtext,
                            children: l
                        }) : (0, o.jsx)(o.Fragment, {})]
                    })]
                })
            }
        },
        812591: (e, t, n) => {
            n.d(t, {
                X: () => i
            });
            let o = {
                titleMessage: (0, n(109939).YK)({
                    onboardingThreadTitle: {
                        id: "oracle.thread.onboarding.title",
                        defaultMessage: "Welcome to Notion"
                    }
                }).onboardingThreadTitle,
                surface: "post_onboarding_agent",
                createdSource: "post_onboarding_agent",
                triggerPurpose: "Start the onboarding conversation now. Send your first onboarding message."
            };

            function i(e) {
                return (0, n(939679).p)({ ...e,
                    oracleThreadType: "onboarding",
                    oracleThreadConfig: o
                })
            }
        },
        876042: (e, t, n) => {
            n.d(t, {
                L: () => s
            });
            var o = n(296540),
                i = n(474848);
            let a = {
                title: {
                    fontSize: n(699422).J.UIRegular.desktop,
                    color: n(632079).Tj.text.primary,
                    fontWeight: n(699422).Wy.medium
                },
                body: {
                    fontSize: n(699422).J.UIRegular.desktop,
                    fontWeight: n(699422).Wy.regular,
                    color: n(632079).Tj.text.secondary
                }
            };

            function s({
                title: e,
                description: t,
                number: r
            }) {
                return (0, i.jsxs)(n(4458).fI, {
                    marginBottom: 8,
                    gap: 8,
                    children: [(0, i.jsx)(n(157254).A, {
                        number: r
                    }), (0, i.jsxs)(n(4458).VP, {
                        gap: 4,
                        children: [(0, i.jsx)("div", {
                            style: a.title,
                            children: (0, i.jsx)(n(109939).sA, { ...e
                            })
                        }), t ? (0, i.jsx)("div", {
                            style: a.body,
                            children: o.isValidElement(t) ? t : (0, i.jsx)(n(109939).sA, { ...t
                            })
                        }) : void 0]
                    })]
                })
            }
        },
        882591: (e, t, n) => {
            n.d(t, {
                S: () => a
            }), n(296540);
            var o = n(474848);
            let i = {
                learnMoreText: {
                    fontSize: 14,
                    color: n(632079).Tj.text.secondary
                },
                learnMoreButton: {
                    marginTop: 16,
                    borderRadius: 6,
                    width: "100%"
                },
                primaryButton: {
                    width: "100%"
                }
            };

            function a(e) {
                let {
                    connectorType: t,
                    open: a,
                    onClosed: s,
                    learnMoreUrl: r
                } = e;
                return n(986939).A.isMobile ? (0, o.jsx)(n(556809).a, {
                    showCloseIcon: !0,
                    onDismiss: s,
                    open: a,
                    children: (0, o.jsx)(n(4458).fI, {
                        width: "100vw",
                        height: "100vh",
                        justifyContent: "center",
                        alignItems: "center",
                        children: (0, o.jsxs)(n(4458).VP, {
                            alignItems: "center",
                            gap: 16,
                            children: [(0, o.jsx)(n(798790).b, {
                                connectorType: t,
                                title: (0, o.jsx)(n(109939).sA, {
                                    id: "universalQna.notAvailableOnMobile.heading",
                                    defaultMessage: "Connecting {appName} and Notion is only available on desktop",
                                    values: {
                                        appName: n(590212).w0[t]
                                    }
                                })
                            }), (0, o.jsxs)(n(4458).VP, {
                                width: 240,
                                alignItems: "center",
                                gap: 4,
                                children: [(0, o.jsx)(n(912946).A, {
                                    colorPalette: "blue",
                                    style: i.primaryButton,
                                    onClick: s,
                                    children: (0, o.jsx)(n(109939).sA, {
                                        id: "universalQna.notAvailableOnMobile.close",
                                        defaultMessage: "Got it"
                                    })
                                }), (0, o.jsx)(n(4458).fI, {
                                    width: "100%",
                                    children: (0, o.jsx)(n(64960).Ay, {
                                        style: i.learnMoreButton,
                                        onClick: () => {
                                            window.open(r, "_blank")
                                        },
                                        children: (0, o.jsxs)(n(4458).fI, {
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 4,
                                            style: i.learnMoreText,
                                            children: [(0, o.jsx)(n(109939).sA, {
                                                id: "universalSearch.slack.waitingForConnection.learnMore",
                                                defaultMessage: "Learn More"
                                            }), (0, o.jsx)(n(16275).I, {
                                                icon: n(166568).arrowUpRightSquareSmallIcon,
                                                size: "sm"
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                }) : (0, o.jsx)(o.Fragment, {})
            }
        },
        904674: (e, t, n) => {
            n.d(t, {
                D: () => a,
                v: () => r
            }), n(581454);
            var o = n(296540),
                i = n(474848);
            let a = (0, n(109939).YK)({
                    defaultTitle: {
                        id: "universalQna.connectionComplete.defaultTitle",
                        defaultMessage: "You’re done!"
                    },
                    defaultSubText: {
                        id: "universalQna.connectionComplete.defaultSubText",
                        defaultMessage: "What happens next:"
                    },
                    defaultPrimaryButton: {
                        id: "universalQna.connectionComplete.defaultPrimaryButton",
                        defaultMessage: "Got it"
                    },
                    connectionInProgressTitle: {
                        id: "universalQna.connectionComplete.connectionInProgressTitle",
                        defaultMessage: "We’re connecting your {appName} content"
                    },
                    defaultConnectionTime: {
                        id: "universalQna.connectionComplete.defaultConnectionTime",
                        defaultMessage: "This may take up to 36 hours"
                    },
                    defaultPermissionsWillBeRespected: {
                        id: "universalQna.connectionComplete.defaultPermissionsWillBeRespected",
                        defaultMessage: "{appName} permissions are strictly respected and members will only see content they have access to."
                    },
                    defaultNotionAiWillBeAbleToAnswerQuestions: {
                        id: "universalQna.connectionComplete.defaultNotionAiWillBeAbleToAnswerQuestions",
                        defaultMessage: "Notion AI will be able to search and answer questions across Notion and {appName} knowledge."
                    }
                }),
                s = {
                    wrapper: {
                        width: 400
                    },
                    singleNoteText: {
                        fontSize: 14,
                        fontWeight: n(699422).Wy.regular,
                        color: n(632079).Tj.text.secondary,
                        textAlign: "center",
                        paddingInlineStart: 8,
                        paddingInlineEnd: 8,
                        textWrap: "balance"
                    },
                    style0: {
                        width: "100%"
                    },
                    style1: {
                        fontSize: 14,
                        fontWeight: n(699422).Wy.semibold,
                        width: "100%"
                    }
                };

            function r(e) {
                let {
                    open: t,
                    connectorType: r,
                    notes: l,
                    onDismiss: c,
                    onPrimaryButtonClick: d,
                    onEditSettingsClick: u,
                    title: p,
                    subText: g,
                    primaryButtonText: m
                } = e, h = 1 === l.length, [f, b] = (0, o.useState)(!1), [y, v] = (0, o.useState)(!1), A = (0, n(109939).tz)(), x = (0, n(960253).I)(() => ({
                    notesContainer: {
                        marginTop: 24 * !h,
                        font: n(699422).Tf.sans,
                        paddingInlineStart: 20,
                        paddingInlineEnd: 20,
                        textAlign: h ? "center" : "start",
                        justifyContent: "center"
                    }
                }), [h]), M = p || (0, i.jsx)(n(109939).sA, { ...a.defaultTitle
                }), _ = h ? void 0 : g || (0, i.jsx)(n(109939).sA, { ...a.defaultSubText
                }), S = m || (0, i.jsx)(n(109939).sA, { ...a.defaultPrimaryButton
                });
                return (0, i.jsx)(n(556809).a, {
                    overlayZIndex: 999,
                    ariaLabel: A.formatMessage({
                        id: "universalQnAConnectionCompleteModal.title",
                        defaultMessage: "You’re done!"
                    }),
                    open: t,
                    onDismiss: () => {
                        c()
                    },
                    children: (0, i.jsxs)("div", {
                        style: s.wrapper,
                        children: [(0, i.jsx)(n(798790).b, {
                            connectorType: r,
                            title: M,
                            subtext: _
                        }), (0, i.jsx)(n(4458).VP, {
                            gap: 12,
                            style: x.notesContainer,
                            children: h && l.length > 0 ? (0, i.jsx)("div", {
                                style: s.singleNoteText,
                                children: (0, i.jsx)(n(109939).sA, { ...l[0].props.title ? l[0].props.title : a.defaultTitle
                                })
                            }) : l.map((e, t) => e)
                        }), d || u ? (0, i.jsxs)(n(4458).VP, {
                            margin: 20,
                            gap: 8,
                            children: [u ? (0, i.jsx)(n(548436).A, {
                                iconLeading: {
                                    icon: n(771721).T,
                                    size: "sm"
                                },
                                isLoading: y,
                                style: s.style0,
                                onClick: async () => {
                                    v(!0), await u(), v(!1)
                                },
                                children: (0, i.jsx)(n(109939).sA, {
                                    id: "universalSearch.connectionComplete.customizeConnectedContent",
                                    defaultMessage: "Customize connected content"
                                })
                            }) : void 0, d ? (0, i.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                isLoading: f,
                                style: s.style1,
                                onClick: async () => {
                                    b(!0), await d(), b(!1)
                                },
                                children: S
                            }) : void 0]
                        }) : void 0]
                    })
                })
            }
        },
        916963: (e, t, n) => {
            n.d(t, {
                A3: () => f,
                FH: () => b,
                Fj: () => d,
                Fn: () => u,
                Sn: () => i,
                gp: () => o,
                oO: () => h,
                vK: () => a,
                vc: () => y,
                z$: () => s
            });
            let o = (0, n(109939).YK)({
                    betaDisclaimer: {
                        defaultMessage: "Beta availability and pricing are subject to change.",
                        id: "GithubUniversalQnaAnnouncementModal.betaDisclaimer"
                    },
                    ctaButtonLabelWithAddon: {
                        defaultMessage: "Try now",
                        id: "GithubUniversalQnaAnnouncementModal.ctaButtonLabelWithAddon"
                    },
                    ctaButtonLabelWithoutAddon: {
                        defaultMessage: "Get Notion AI",
                        id: "GithubUniversalQnaAnnouncementModal.ctaButtonLabelWithoutAddon"
                    },
                    learnMoreLink: {
                        defaultMessage: "Learn more",
                        id: "GithubUniversalQnaAnnouncementModal.learnMoreLink"
                    },
                    notifyWorkspaceOwner: {
                        defaultMessage: "Request access",
                        id: "GithubUniversalQnaAnnouncementModal.notifyWorkspaceOwner"
                    },
                    notifyWorkspaceSubtitle: {
                        defaultMessage: "We’ll send your workspace owner a request to enable this feature",
                        id: "GithubUniversalQnaAnnouncementModal.notifyWorkspaceSubtitle"
                    }
                }),
                i = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get GitHub answers in Notion",
                        id: "GithubUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your GitHub Pull Requests, Issues, and more.",
                        id: "GithubUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about PRs, issues, and docs",
                        id: "GithubUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                a = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Slack answers in Notion AI",
                        id: "slackUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Summarize threads, get answers, find information from public channels, and more.",
                        id: "slackUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about channels and threads",
                        id: "slackUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                s = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Jira answers in Notion AI",
                        id: "JiraUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your Jira sites, projects, issues, and more.",
                        id: "JiraUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about sites, projects, and issues",
                        id: "JiraUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                r = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Gmail answers in Notion AI",
                        id: "GmailUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your Gmail emails.",
                        id: "GmailUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about your emails",
                        id: "GmailUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                l = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Notion Mail answers in Notion AI",
                        id: "NotionMailUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your Notion Mail emails.",
                        id: "NotionMailUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about your emails",
                        id: "NotionMailUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                c = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Outlook answers in Notion AI",
                        id: "OutlookUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your Outlook emails.",
                        id: "OutlookUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about your emails",
                        id: "OutlookUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                d = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Microsoft Teams answers in Notion AI",
                        id: "MicrosoftTeamsUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your Teams channels and chats.",
                        id: "MicrosoftTeamsUniversalQnaAnnouncementModal.subtitle"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about channels and chats",
                        id: "MicrosoftTeamsUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                u = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Google Drive answers in Notion AI",
                        id: "GoogleDriveUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your Google Docs, Slides, and Sheets.",
                        id: "GoogleDriveUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about your Drive content",
                        id: "GoogleDriveUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                p = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Google Calendar answers in Notion AI",
                        id: "GoogleCalendarUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your Google Calendar events.",
                        id: "GoogleCalendarUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about your Calendar events",
                        id: "GoogleCalendarUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                g = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Calendar answers in Notion AI",
                        id: "NotionCalendarUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your Calendar events.",
                        id: "NotionCalendarUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about your Calendar events",
                        id: "NotionCalendarUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                m = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Salesforce answers in Notion AI",
                        id: "SalesforceUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your Salesforce content.",
                        id: "SalesforceUniversalQnaAnnouncementModal.subtitle"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about your Salesforce content",
                        id: "SalesforceUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                h = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get SharePoint answers in Notion AI",
                        id: "sharePointUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your SharePoint content.",
                        id: "sharePointUniversalQnaAnnouncementModal.subtitle"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about your stored content",
                        id: "sharePointUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                f = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Linear answers in Notion AI",
                        id: "LinearUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers about your Linear projects, issues, and more.",
                        id: "LinearUniversalQnaAnnouncementModal.subtitle"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about tasks, issues and more",
                        id: "LinearUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                b = (0, n(109939).YK)({
                    title: {
                        defaultMessage: "Get Discord answers in Notion AI",
                        id: "discordUniversalQnaAnnouncementModal.title"
                    },
                    subtitleForAnnouncement: {
                        defaultMessage: "Find information and get answers from your Discord server.",
                        id: "discordUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                    },
                    shortDescription: {
                        defaultMessage: "Search and ask about your Discord content",
                        id: "discordUniversalQnaAnnouncementModal.shortDescription"
                    },
                    betaDisclaimer: o.betaDisclaimer,
                    ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                    ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                    learnMoreLink: o.learnMoreLink
                }),
                y = {
                    github: i,
                    slack: a,
                    jira: s,
                    gmail: r,
                    sharepoint: h,
                    linear: f,
                    "google-drive": u,
                    "microsoft-teams": d,
                    outlook: c,
                    "notion-mail": l,
                    "google-calendar": p,
                    "notion-calendar": g,
                    salesforce: m,
                    discord: b,
                    asana: (0, n(109939).YK)({
                        title: {
                            defaultMessage: "Get Asana answers in Notion AI",
                            id: "asanaUniversalQnaAnnouncementModal.title"
                        },
                        subtitleForAnnouncement: {
                            defaultMessage: "Find information and get answers from your Asana projects and tasks.",
                            id: "asanaUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                        },
                        shortDescription: {
                            defaultMessage: "Search and ask about your Asana content",
                            id: "asanaUniversalQnaAnnouncementModal.shortDescription"
                        },
                        betaDisclaimer: o.betaDisclaimer,
                        ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                        ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                        learnMoreLink: o.learnMoreLink
                    }),
                    box: (0, n(109939).YK)({
                        title: {
                            defaultMessage: "Get Box answers in Notion AI",
                            id: "BoxUniversalQnaAnnouncementModal.title"
                        },
                        subtitleForAnnouncement: {
                            defaultMessage: "Find information and get answers about your Box content.",
                            id: "BoxUniversalQnaAnnouncementModal.subtitle"
                        },
                        shortDescription: {
                            defaultMessage: "Search and ask about your Box content",
                            id: "BoxUniversalQnaAnnouncementModal.shortDescription"
                        },
                        betaDisclaimer: o.betaDisclaimer,
                        ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                        ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                        learnMoreLink: o.learnMoreLink
                    }),
                    confluence: (0, n(109939).YK)({
                        title: {
                            defaultMessage: "Get Confluence answers in Notion AI",
                            id: "ConfluenceUniversalQnaAnnouncementModal.title"
                        },
                        subtitleForAnnouncement: {
                            defaultMessage: "Find information and get answers about your Confluence content.",
                            id: "ConfluenceUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                        },
                        shortDescription: {
                            defaultMessage: "Search and ask about your Confluence content",
                            id: "ConfluenceUniversalQnaAnnouncementModal.shortDescription"
                        },
                        betaDisclaimer: o.betaDisclaimer,
                        ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                        ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                        learnMoreLink: o.learnMoreLink
                    }),
                    custom: (0, n(109939).YK)({
                        title: {
                            defaultMessage: "Get custom AI connector answers in Notion AI",
                            id: "CustomUniversalQnaAnnouncementModal.title"
                        },
                        subtitleForAnnouncement: {
                            defaultMessage: "Search data from your custom AI connectors—whether you push it via our API or sync it from external sources like S3.",
                            id: "CustomUniversalQnaAnnouncementModal.subtitleForAnnouncement"
                        },
                        shortDescription: {
                            defaultMessage: "Search and ask about data from your custom AI connectors",
                            id: "CustomUniversalQnaAnnouncementModal.shortDescription"
                        },
                        betaDisclaimer: o.betaDisclaimer,
                        ctaButtonLabelWithAddon: o.ctaButtonLabelWithAddon,
                        ctaButtonLabelWithoutAddon: o.ctaButtonLabelWithoutAddon,
                        learnMoreLink: o.learnMoreLink
                    })
                }
        },
        939679: (e, t, n) => {
            n.d(t, {
                p: () => o
            }), n(16280), n(944114);

            function o(e) {
                let t, {
                    environment: o,
                    spaceStore: i,
                    spaceViewStore: a,
                    oracleThreadType: s,
                    oracleThreadConfig: r,
                    instructions: l,
                    useOnboardingModule: c,
                    suppressNameInGreeting: d = !1,
                    model: u,
                    searchScope: p,
                    debugOverrides: g
                } = e;
                if (u) {
                    if (!(0, n(426048).R5)(u)) throw Error(`Model "${u}" is not a valid agent model. Please select a model that supports agent workflows.`);
                    t = u
                }
                let m = n(728372).AppStoreCurrentUserStore.state;
                if (!m) throw Error("User store is not available. Please wait for the app to fully load.");
                let h = (null == g ? void 0 : g.dynamicInstructions) !== void 0,
                    f = (0, n(922900).getWorkflowAgentConfig)({
                        environment: o,
                        spaceId: i.id,
                        isCustomAgent: !1,
                        workflowId: void 0,
                        model: t,
                        searchScopes: e.disableSearch ? [] : p ? [p] : void 0,
                        useReadOnlyMode: !1,
                        useWebSearch: !1,
                        onboardingAgentVersion: "onboarding" === s && (c || h) ? e.onboardingAgentVersion ? ? "work" : void 0
                    });
                f.oracleThreadType = s, f.enableScriptAgent = !0;
                let b = [],
                    y = n(962299).A.getIntl(),
                    v = {
                        id: (0, n(295447).Z1)({
                            environment: o,
                            table: n(832375).mSw,
                            spaceId: i.id
                        }),
                        type: "title",
                        value: y.formatMessage(r.titleMessage)
                    };
                if (b.push(v), !c && !h) {
                    let e = (0, n(674880).fd)({
                        environment: o,
                        spaceStore: i,
                        agentMessageKey: "post_onboarding_tips",
                        instructions: (0, n(247438).x9d)(l)
                    });
                    b.push(e)
                }
                let A = (0, n(674880).uP)({
                    environment: o,
                    spaceStore: i,
                    userStore: m,
                    displayMessage: void 0,
                    actualMessage: (0, n(247438).x9d)(c || h ? function(e) {
                        let {
                            triggerPurpose: t,
                            suppressNameInGreeting: o
                        } = e, i = `${t} The user's locale is "${n(849917).locale}". Respond in the user's language, not in English just because this prompt is in English.`;
                        return o ? `${i} The user has not set a display name yet, do not address them by name.` : i
                    }({
                        triggerPurpose: r.triggerPurpose,
                        suppressNameInGreeting: d
                    }) : "Send the proactive message described in the system instructions.")
                });
                b.push(A);
                let x = (0, n(674880).Xd)({
                        environment: o,
                        inferenceContext: {
                            userStore: m,
                            spaceStore: i,
                            spaceViewStore: a,
                            blockStore: void 0,
                            peekStore: void 0,
                            workflowStore: void 0
                        },
                        addSteps: b,
                        surface: r.surface,
                        config: f
                    }),
                    M = (0, n(225900).N)({
                        environment: o,
                        spaceStore: i,
                        transcript: x,
                        workflowId: void 0,
                        createdSource: r.createdSource,
                        parentPointer: void 0,
                        debugOverrides: g
                    });
                return (0, n(540328).KY)(M), n(218744).default.checkGate({
                    gateName: "onboarding_oracle_thread"
                }) && function(e) {
                    var t;
                    let {
                        environment: o,
                        oracleThreadType: i,
                        threadId: a
                    } = e, s = n(728372).AppStoreSidebarSpaceViewStore.state;
                    if (!s) return;
                    let r = (null == (t = s.getSettings()) ? void 0 : t.oracle_thread_configs) ? ? {},
                        l = s.getSpaceId();
                    n(377796).createAndCommit({
                        environment: o,
                        cellTarget: l ? {
                            spaceWithId: l
                        } : void 0,
                        userAction: "createOracleThread.registerThread",
                        canUndo: !0,
                        perform: e => {
                            (0, n(421439).y4)({
                                store: s,
                                operation: {
                                    pointer: s.pointer,
                                    path: ["settings"],
                                    command: "update",
                                    args: { ...s.getSettings(),
                                        oracle_thread_configs: { ...r,
                                            [i]: {
                                                thread_id: a
                                            }
                                        }
                                    }
                                },
                                transaction: e
                            })
                        }
                    })
                }({
                    environment: o,
                    oracleThreadType: s,
                    threadId: M.id
                }), M
            }
        },
        943792: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowUpRightSquareFillIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M5.25 3.125A2.125 2.125 0 0 0 3.125 5.25v9.5c0 1.174.951 2.125 2.125 2.125h9.5a2.125 2.125 0 0 0 2.125-2.125v-9.5a2.125 2.125 0 0 0-2.125-2.125zM7.875 7c0-.345.28-.625.625-.625H13c.345 0 .625.28.625.625v4.5a.625.625 0 1 1-1.25 0V8.509l-5.12 5.12a.625.625 0 1 1-.884-.883l5.12-5.121H8.5A.625.625 0 0 1 7.875 7"
                    })
                },
                i = (0, n(104509).wt)("arrowUpRightSquareFill", o, "fill")
        }
    }
]);