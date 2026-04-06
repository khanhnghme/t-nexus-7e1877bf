"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [30673, 90735], {
        6779: (e, t, n) => {
            n.d(t, {
                s: () => a
            });

            function a() {
                return n(205885).A.state.online
            }
        },
        53445: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowLeftRightIcon: () => i,
                iconDefinition: () => a
            }), n(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 2.25 13.47 15.5",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.45 5.925a.625.625 0 0 0 0 .884l3.499 3.497a.625.625 0 1 0 .884-.883L5.402 6.992h10.705a.625.625 0 0 0 0-1.25H5.402l2.43-2.431a.625.625 0 0 0-.883-.884zm8.717 11.648a.625.625 0 0 1 0-.884l2.431-2.43H3.893a.625.625 0 1 1 0-1.25h10.705l-2.43-2.431a.625.625 0 0 1 .883-.884l3.498 3.497a.625.625 0 0 1 0 .884l-3.498 3.498a.625.625 0 0 1-.884 0"
                    })
                },
                i = (0, n(104509).wt)("arrowLeftRight", a, "default")
        },
        100986: (e, t, n) => {
            n.d(t, {
                a: () => i
            }), n(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.87 1.87 10.25 12.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.5 1.875a.625.625 0 0 0-.625.625v3c0 .345.28.625.625.625h.875v.42c0 .768.537 1.43 1.289 1.59l4.414.934c.173.036.297.19.297.367v.439H9.5a.625.625 0 0 0-.625.625v3c0 .345.28.625.625.625h3c.345 0 .625-.28.625-.625v-3a.625.625 0 0 0-.625-.625h-.875v-.44c0-.767-.537-1.43-1.289-1.59l-4.414-.933a.375.375 0 0 1-.297-.367v-.42H6.5c.345 0 .625-.28.625-.625v-3a.625.625 0 0 0-.625-.625zm.625 3v-1.75h1.75v1.75zm6 8v-1.75h1.75v1.75z"
                    })
                },
                i = (0, n(104509).wt)("connectionsSmall", a, "small")
        },
        557737: (e, t, n) => {
            n.d(t, {
                K: () => i
            }), n(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M5.612 4.08A1.895 1.895 0 0 0 3.971 5.81l-.005.092.001 9.439-.864.053h-.035a.883.883 0 0 1-.571-.245.921.921 0 0 1-.28-.646V4.137c0-.88.683-1.61 1.562-1.665l10.187-.651a.755.755 0 0 1 .786.551.826.826 0 0 1 .03.175v.943l-9.133.583-.037.007Zm12.172 12.67a.779.779 0 0 1-.617.747c-.006 0-.013.003-.02.003l-11.045.681h-.034a.883.883 0 0 1-.571-.245.921.921 0 0 1-.28-.647l-.001-.03V6.072l.001-.047a.777.777 0 0 1 .67-.709c.01 0 .018-.003.027-.003l11.052-.706a.755.755 0 0 1 .786.551.824.824 0 0 1 .03.175l.002 11.418Zm-1.248-8.726a.388.388 0 0 0-.418-.393l-9.213.563c-.23.012-.439.177-.439.436v7.533c-.01.484.31.61.673.583L16 16.221l.002-.001c.466-.018.534-.374.534-.65V8.024Zm-7.35 2.458c-.429.026-.574.353-.573.856v.089c-.051.012-.094.023-.146.026-.309.02-.531-.232-.532-.682 0-.689.616-1.336 1.79-1.41 1.045-.064 1.714.441 1.715 1.333 0 .67-.556 1.147-1.104 1.296 1.028.05 1.458.624 1.459 1.357.001 1.254-.915 1.964-2.329 2.052l-.034.002c-1.063.066-1.809-.338-1.81-1.035 0-.397.29-.733.728-.76.035-.003.068.004.103.002.087.71.567.97 1.046.941.463-.029.788-.34.788-.782v-.018c0-.688-.575-.723-1.44-.757l-.138-.822c.805-.147 1.207-.41 1.207-.887 0-.512-.284-.83-.73-.801Zm3.864-.339c-.857.248-1.045-.129-.952-.523.514-.12 1.85-.521 2.356-.703l.006 5.289.934.136c0 .344-.197.56-.548.581-.291.018-.968.043-1.294.063-.505.031-1.43.107-1.43.107a.572.572 0 0 1-.035-.201c0-.168.068-.34.29-.416l.677-.219-.004-4.114Z"
                    })
                },
                i = (0, n(104509).wt)("calendarDate31", a, "default")
        },
        602949: (e, t, n) => {
            async function* a(e) {
                var t;
                let a, {
                        environment: o,
                        from: l,
                        provider: r,
                        enforceCurrentUserEmail: s = !0
                    } = e,
                    c = n(728372).AppStoreSidebarSpaceViewStore.state,
                    d = new Set(n(440143).Q.getState().getCurrentAccounts().filter(e => e.provider === r).map(e => e.id)),
                    u = null == (t = n(728372).AppStoreCurrentUserStore.state) ? void 0 : t.getEmail(),
                    p = null == c ? void 0 : c.getSpaceId();
                if (!u || !p || !c) return n(773352).log({
                    level: "error",
                    from: "generateNotionCalendarSignup",
                    type: "unableToConnectCalendar - missing email or spaceId",
                    data: {
                        miscDataToConvertToString: {
                            email: u,
                            spaceId: p,
                            source: l
                        }
                    }
                }), "missingEmailOrSpaceId";
                switch (r) {
                    case "icloud":
                        {
                            let e = await (0, n(874809).i6)({
                                environment: o,
                                providerContext: {
                                    type: "icloud"
                                }
                            });
                            if (!e) return "oAuthWindowClosedByUser";
                            if ("dismissedDueToCleanup" === e) return "oAuthWindowClosedDueToCleanup";a = i({
                                environment: o,
                                code: e.code,
                                spaceId: p,
                                provider: r,
                                from: l
                            });
                            break
                        }
                    case "google":
                    case "outlook":
                        {
                            let e = await (0, n(874809).i6)({
                                environment: o,
                                providerContext: "google" === r ? {
                                    type: "google",
                                    email: s ? u : void 0
                                } : {
                                    type: "outlook"
                                }
                            });
                            if (!e) return "oAuthWindowClosedByUser";
                            if ("dismissedDueToCleanup" === e) return "oAuthWindowClosedDueToCleanup";a = i({
                                environment: o,
                                spaceId: p,
                                provider: r,
                                from: l,
                                ...e
                            });
                            break
                        }
                    default:
                        (0, n(722371).HB)(r)
                }
                yield "signupInitiated";
                let g = await a;
                if (!(0, n(6779).s)()) return "wentOffline";
                if ("failed" === g.type) return "signupFailure";
                yield "signupSuccess", await n(994869).refreshExternalIntegrationStore({
                    environment: o
                });
                let f = g.data.botId,
                    x = "failure";
                async function h() {
                    x = await (0, n(55067).qq)({
                        environment: o,
                        sidebarSpaceViewStore: c,
                        botId: f,
                        forceRefetch: !0,
                        timeRange: (0, n(83748).M)(),
                        reason: {
                            reason: "notion_calendar_oauth"
                        }
                    })
                }
                if (await h(), "failure" === x && (await (0, n(975162).wR)(1e3), await h()), !(0, n(6779).s)()) return "wentOffline";
                if ("failure" === x) return "secondaryDataLoadFailure";
                let m = n(440143).Q.getState().getCurrentAccounts().filter(e => e.provider === r);
                if (s) {
                    let e = m.find(e => e.email === u);
                    if (!e) return "accountMismatch";
                    if ("authorized" !== e.authorizationStatus) return "insufficientScopes"
                } else {
                    let e = m.find(e => !d.has(e.id));
                    if (e && (null == e ? void 0 : e.authorizationStatus) !== "authorized") return "insufficientScopes"
                }
                return "secondaryDataLoaded"
            }
            async function i(e) {
                let {
                    environment: t
                } = e, n = "icloud" === e.provider ? {
                    code: e.code,
                    provider: e.provider,
                    spaceId: e.spaceId,
                    from: e.from
                } : {
                    code: e.code,
                    encryptedToken: e.encryptedToken,
                    provider: e.provider,
                    spaceId: e.spaceId,
                    from: e.from
                };
                return await t.api.callApi({
                    eventName: "createCompleteCalendarUser",
                    environment: t,
                    data: n
                })
            }
            n.d(t, {
                $: () => a,
                l: () => i
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454)
        },
        634663: (e, t, n) => {
            n.r(t), n.d(t, {
                circleIcon: () => i,
                iconDefinition: () => a
            }), n(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                    })
                },
                i = (0, n(104509).wt)("circle", a, "default")
        },
        748713: (e, t, n) => {
            n.d(t, {
                U: () => L
            });
            var a = n(296540),
                i = () => n(773352);
            let o = new Map;
            n(898992), n(354520), n(581454);
            var l = n(474848);
            let r = {
                    button: {
                        flex: 1,
                        padding: "0 8px"
                    },
                    buttonText: {
                        flex: 1,
                        textAlign: "center"
                    },
                    outlookGroupButton: {
                        padding: "0 8px",
                        boxShadow: n(632079).Tj.shadow.outline.sm,
                        flex: 1
                    },
                    outlookGroupButtonRow: {
                        zIndex: 1,
                        display: "flex"
                    },
                    adminHelpRow: {
                        backgroundColor: n(632079).Tj.background.secondary,
                        clipPath: "polygon(0px 0px, 0px 100%, 100% 100%, 100% 0px, calc(100% - 8px) 0px, calc(100% - 8px) 8px, 8px 8px, 8px 0px)",
                        maskImage: "radial-gradient(8px at 8px 0px, transparent 100%, black 100%), radial-gradient(8px at calc(100% - 8px) 0px, transparent 100%, black 100%)",
                        maskComposite: "intersect",
                        padding: 12,
                        paddingTop: 16,
                        marginTop: -16,
                        borderEndStartRadius: 8,
                        borderEndEndRadius: 8
                    }
                },
                s = (0, n(109939).YK)({
                    connectGoogleButton: {
                        id: "notionCalendar.providerButtons.connectGoogle",
                        defaultMessage: "Continue with Google"
                    },
                    connectIcloudButton: {
                        id: "notionCalendar.providerButtons.connectIcloud",
                        defaultMessage: "Continue with iCloud"
                    },
                    connectOutlookButton: {
                        id: "notionCalendar.providerButtons.connectOutlook",
                        defaultMessage: "Continue with Outlook"
                    },
                    adminHelpTitle: {
                        id: "notionCalendar.providerButtons.adminHelpTitle",
                        defaultMessage: "Need admin approval?"
                    },
                    adminHelpDescription: {
                        id: "notionCalendar.providerButtons.adminHelpDescription",
                        defaultMessage: "Share this link with an IT admin to connect Outlook"
                    },
                    copyLink: {
                        id: "notionCalendar.providerButtons.copyLink",
                        defaultMessage: "Copy link"
                    },
                    linkCopied: {
                        id: "notionCalendar.providerButtons.linkCopied",
                        defaultMessage: "Admin consent link copied"
                    }
                }),
                c = [{
                    provider: "google",
                    icon: n(930646).googleIcon,
                    messageKey: "connectGoogleButton"
                }, {
                    provider: "icloud",
                    icon: n(680983).appleIcon,
                    messageKey: "connectIcloudButton"
                }, {
                    provider: "outlook",
                    icon: n(40242).microsoftOutlookIcon,
                    messageKey: "connectOutlookButton"
                }];

            function d({
                onProviderSelected: e,
                primaryProvider: t
            }) {
                let a = (0, n(109939).tz)(),
                    i = (0, n(83208).X)("outlook_calendar_signup"),
                    o = c.filter(e => "outlook" !== e.provider || i),
                    r = t ? [...o.filter(e => e.provider === t), ...o.filter(e => e.provider !== t)] : o;
                return (0, l.jsx)(n(4458).VP, {
                    gap: 8,
                    width: "100%",
                    children: r.map(n => "outlook" === n.provider && "outlook" === t ? (0, l.jsx)(p, {
                        icon: n.icon,
                        label: a.formatMessage(s[n.messageKey]),
                        onClick: () => e(n.provider)
                    }, n.provider) : (0, l.jsx)(u, {
                        icon: n.icon,
                        label: a.formatMessage(s[n.messageKey]),
                        onClick: () => e(n.provider)
                    }, n.provider))
                })
            }

            function u({
                icon: e,
                label: t,
                onClick: a
            }) {
                return (0, l.jsx)(n(4458).fI, {
                    gap: 8,
                    alignSelf: "stretch",
                    children: (0, l.jsx)(n(548436).A, {
                        size: "xl",
                        iconLeading: e,
                        style: r.button,
                        onClick: a,
                        children: (0, l.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            style: r.buttonText,
                            children: t
                        })
                    })
                })
            }

            function p({
                icon: e,
                label: t,
                onClick: i
            }) {
                let o = (0, n(533992).v3)(),
                    c = (0, a.useCallback)(async () => {
                        (await (0, n(969899).jd)())({
                            environment: o,
                            stringValue: "https://login.microsoftonline.com/common/adminconsent?client_id=11d64db8-e94e-4bbe-bbab-3cbd0f74e3e1&redirect_uri=https://www.notion.so/microsoftpopupcallback",
                            copiedMessage: s.linkCopied
                        })
                    }, [o]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(n(4458).fI, {
                        alignSelf: "stretch",
                        style: r.outlookGroupButtonRow,
                        children: (0, l.jsx)(n(988022).p, {
                            size: "xl",
                            iconLeading: e,
                            style: r.outlookGroupButton,
                            onClick: i,
                            children: (0, l.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                style: r.buttonText,
                                children: t
                            })
                        })
                    }), (0, l.jsxs)(n(4458).fI, {
                        gap: 12,
                        alignItems: "flex-start",
                        justifyContent: "center",
                        style: r.adminHelpRow,
                        children: [(0, l.jsxs)(n(4458).VP, {
                            gap: 0,
                            flex: 1,
                            children: [(0, l.jsx)(n(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "primary",
                                children: (0, l.jsx)(n(109939).sA, { ...s.adminHelpTitle
                                })
                            }), (0, l.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                children: (0, l.jsx)(n(109939).sA, { ...s.adminHelpDescription
                                })
                            })]
                        }), (0, l.jsx)(n(988022).p, {
                            size: "xs",
                            colorPalette: "blue",
                            iconLeading: n(748869).linkSmallIcon,
                            onClick: c,
                            children: (0, l.jsx)(n(109939).sA, { ...s.copyLink
                            })
                        })]
                    })]
                })
            }
            let g = {
                    display: "flex",
                    flexDirection: "column",
                    width: 460,
                    padding: "24px 20px"
                },
                f = {
                    textAlign: "center"
                },
                x = {
                    width: 290
                },
                h = {
                    position: "relative",
                    paddingTop: 12
                },
                m = (0, n(109939).YK)({
                    ariaLabel: {
                        id: "notionCalendar.disambiguationModal.ariaLabel",
                        defaultMessage: "Connect your calendar"
                    },
                    title: {
                        id: "notionCalendar.disambiguationModal.title",
                        defaultMessage: "Connect your calendar to Notion"
                    },
                    subtitle: {
                        id: "notionCalendar.disambiguationModal.subtitle",
                        defaultMessage: "Start AI Meeting Notes for your upcoming events, schedule events via Notion AI, and more."
                    }
                });

            function y({
                onProviderSelected: e,
                onDismiss: t
            }) {
                let a = (0, n(109939).tz)();
                return (0, l.jsx)(n(556809).a, {
                    ariaLabel: a.formatMessage(m.ariaLabel),
                    innerStyle: g,
                    open: !0,
                    preventHideChildrenWhileOpening: !0,
                    onDismiss: t,
                    children: (0, l.jsxs)(n(4458).VP, {
                        gap: 24,
                        alignItems: "center",
                        justifyContent: "center",
                        className: "autolayout-fill-width",
                        style: h,
                        children: [(0, l.jsxs)(n(4458).VP, {
                            gap: 12,
                            width: 375,
                            alignItems: "center",
                            justifyContent: "center",
                            style: h,
                            children: [(0, l.jsxs)(n(4458).fI, {
                                gap: 8,
                                alignItems: "center",
                                justifyContent: "center",
                                style: h,
                                alignSelf: "stretch",
                                children: [(0, l.jsx)(n(16275).I, {
                                    icon: n(792668).notionIcon,
                                    size: "xl",
                                    colorVariant: "primary"
                                }), (0, l.jsx)(n(16275).I, {
                                    icon: n(53445).arrowLeftRightIcon,
                                    colorVariant: "secondary"
                                }), (0, l.jsx)(n(968107).y, {
                                    size: "xl",
                                    colorVariant: "primary"
                                })]
                            }), (0, l.jsxs)(n(4458).VP, {
                                gap: 4,
                                alignItems: "center",
                                justifyContent: "center",
                                style: h,
                                alignSelf: "stretch",
                                children: [(0, l.jsx)(n(111010).D, {
                                    styleKey: "titleLgBold",
                                    colorVariant: "primary",
                                    style: f,
                                    children: (0, l.jsx)(n(109939).sA, { ...m.title
                                    })
                                }), (0, l.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "secondary",
                                    style: { ...f,
                                        ...x
                                    },
                                    children: (0, l.jsx)(n(109939).sA, { ...m.subtitle
                                    })
                                })]
                            })]
                        }), (0, l.jsx)(d, {
                            onProviderSelected: e
                        })]
                    })
                })
            }
            let v = (0, n(109939).YK)({
                    accountMismatchTitle: {
                        id: "calendarOAuthPopups.accountMismatchTitle",
                        defaultMessage: "Connect your Notion account email"
                    },
                    accountMismatchDescription: {
                        id: "calendarOAuthPopups.accountMismatchDescription",
                        defaultMessage: "You’ve connected an email that doesn’t match your current Notion email, {email}. Try again with the right email or switch Notion accounts."
                    },
                    cancel: {
                        id: "calendarOAuthPopups.cancel",
                        defaultMessage: "Cancel"
                    },
                    connectCalendar: {
                        id: "calendarOAuthPopups.connectCalendar",
                        defaultMessage: "Connect calendar"
                    }
                }),
                b = {
                    container: {
                        backgroundColor: n(632079).Tj.background.elevated,
                        borderRadius: 16,
                        boxShadow: "0px 0px 0px 1px rgba(42, 28, 0, 0.07), 0px 5px 8px 0px rgba(25, 25, 25, 0.03), 0px 20px 24px 0px rgba(25, 25, 25, 0.05)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        padding: 20,
                        width: 480,
                        maxWidth: "calc(100vw - 32px)"
                    },
                    boldEmail: {
                        fontWeight: n(699422).Wy.semibold
                    }
                };

            function j({
                onConnectCalendar: e,
                onDismiss: t
            }) {
                let i = (0, n(109939).tz)(),
                    o = (0, n(682985).K8)(() => {
                        var e;
                        return (null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getEmail()) ? ? ""
                    }, []),
                    r = (0, a.useCallback)(() => {
                        e()
                    }, [e]),
                    s = (0, a.useCallback)(() => {
                        t()
                    }, [t]),
                    c = (0, a.useCallback)(() => (0, l.jsxs)("div", {
                        style: b.container,
                        children: [(0, l.jsxs)(n(4458).VP, {
                            gap: 2,
                            paddingInlineEnd: 20,
                            children: [(0, l.jsx)(n(111010).D, {
                                styleKey: "bodyLgSemibold",
                                colorVariant: "primary",
                                children: (0, l.jsx)(n(109939).sA, { ...v.accountMismatchTitle
                                })
                            }), (0, l.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: (0, l.jsx)(n(109939).sA, { ...v.accountMismatchDescription,
                                    values: {
                                        email: (0, l.jsx)("strong", {
                                            style: b.boldEmail,
                                            children: o
                                        })
                                    }
                                })
                            })]
                        }), (0, l.jsxs)(n(4458).fI, {
                            gap: 8,
                            justifyContent: "flex-end",
                            children: [(0, l.jsx)(n(988022).p, {
                                size: "md",
                                onClick: s,
                                children: (0, l.jsx)(n(109939).sA, { ...v.cancel
                                })
                            }), (0, l.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                size: "md",
                                onClick: r,
                                children: (0, l.jsx)(n(109939).sA, { ...v.connectCalendar
                                })
                            })]
                        })]
                    }), [r, s, o]);
                return (0, l.jsx)(n(556809).a, {
                    open: !0,
                    preventHideChildrenWhileOpening: !0,
                    onDismiss: s,
                    ariaLabel: i.formatMessage(v.accountMismatchTitle),
                    children: c()
                })
            }
            let C = (0, n(109939).YK)({
                    insufficientScopesTitle: {
                        id: "calendarOAuthPopups.insufficientScopesTitle",
                        defaultMessage: "Grant all necessary permissions to continue"
                    },
                    insufficientScopesDescription: {
                        id: "calendarOAuthPopups.insufficientScopesDescription",
                        defaultMessage: "Select all required permissions to connect your email. We only request what’s needed. "
                    },
                    learnMoreSecurity: {
                        id: "calendarOAuthPopups.learnMoreSecurity",
                        defaultMessage: "Learn more about our security practices."
                    },
                    cancel: {
                        id: "calendarOAuthPopups.cancel",
                        defaultMessage: "Cancel"
                    },
                    connectCalendar: {
                        id: "calendarOAuthPopups.connectCalendar",
                        defaultMessage: "Connect calendar"
                    }
                }),
                w = {
                    container: {
                        backgroundColor: n(632079).Tj.background.elevated,
                        borderRadius: 16,
                        boxShadow: "0px 0px 0px 1px rgba(42, 28, 0, 0.07), 0px 5px 8px 0px rgba(25, 25, 25, 0.03), 0px 20px 24px 0px rgba(25, 25, 25, 0.05)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        padding: 20,
                        width: 480,
                        maxWidth: "calc(100vw - 32px)"
                    },
                    link: {
                        color: n(632079).Tj.blue.text.primary
                    }
                };

            function k({
                onConnectCalendar: e,
                onDismiss: t
            }) {
                let i = (0, n(109939).tz)(),
                    o = (0, a.useCallback)(() => {
                        e()
                    }, [e]),
                    r = (0, a.useCallback)(() => {
                        t()
                    }, [t]),
                    s = (0, a.useCallback)(() => (0, l.jsxs)("div", {
                        style: w.container,
                        children: [(0, l.jsxs)(n(4458).VP, {
                            gap: 2,
                            paddingInlineEnd: 20,
                            children: [(0, l.jsx)(n(111010).D, {
                                styleKey: "bodyLgSemibold",
                                colorVariant: "primary",
                                children: (0, l.jsx)(n(109939).sA, { ...C.insufficientScopesTitle
                                })
                            }), (0, l.jsxs)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: [(0, l.jsx)(n(109939).sA, { ...C.insufficientScopesDescription
                                }), (0, l.jsx)(n(428217).V, {
                                    href: "https://www.notion.so/security",
                                    external: !0,
                                    hoverColor: "blue",
                                    style: w.link,
                                    children: (0, l.jsx)(n(109939).sA, { ...C.learnMoreSecurity
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)(n(4458).fI, {
                            gap: 8,
                            justifyContent: "flex-end",
                            children: [(0, l.jsx)(n(988022).p, {
                                size: "md",
                                onClick: r,
                                children: (0, l.jsx)(n(109939).sA, { ...C.cancel
                                })
                            }), (0, l.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                size: "md",
                                onClick: o,
                                children: (0, l.jsx)(n(109939).sA, { ...C.connectCalendar
                                })
                            })]
                        })]
                    }), [o, r]);
                return (0, l.jsx)(n(556809).a, {
                    open: !0,
                    preventHideChildrenWhileOpening: !0,
                    onDismiss: r,
                    ariaLabel: i.formatMessage(C.insufficientScopesTitle),
                    children: s()
                })
            }
            let S = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.09 2.27 13.46 10.48",
                    svg: (0, l.jsx)("path", {
                        d: "M4.875 8.65c.566 0 1.025.459 1.025 1.025v2.05c0 .566-.459 1.025-1.025 1.025h-2.05A1.025 1.025 0 0 1 1.8 11.725v-2.05c0-.566.459-1.025 1.025-1.025zm8.925 1.3a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5zM5.206 2.64a.75.75 0 0 1 1.288.77l-2.4 4a.75.75 0 0 1-1.214.103l-1.6-1.867a.75.75 0 0 1 1.14-.975l.922 1.076zM13.8 4.55a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5z"
                    })
                },
                T = (0, n(104509).wt)("checklistFillSmall", S, "fillSmall"),
                A = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.97 3.37 14.21 9.26",
                    svg: (0, l.jsx)("path", {
                        d: "M2.8 3.375A1.825 1.825 0 0 0 .975 5.2v5.6c0 1.008.817 1.825 1.825 1.825H10a1.825 1.825 0 0 0 1.825-1.825v-.645l2.401 1.455a.625.625 0 0 0 .95-.535v-6.15a.625.625 0 0 0-.95-.535l-2.4 1.455V5.2A1.825 1.825 0 0 0 10 3.375zM2.225 5.2c0-.318.258-.575.575-.575H10c.318 0 .575.257.575.575v5.6a.575.575 0 0 1-.575.575H2.8a.575.575 0 0 1-.575-.575zm9.6 3.493V7.307l2.1-1.273v3.932z"
                    })
                },
                I = (0, n(104509).wt)("videoCameraSmall", A, "small"),
                D = (0, n(109939).YK)({
                    finishConnectingTitle: {
                        id: "calendarOAuthPopups.finishConnectingTitle",
                        defaultMessage: "Finish connecting to Notion Calendar"
                    },
                    finishConnectingDescription: {
                        id: "calendarOAuthPopups.finishConnectingDescription",
                        defaultMessage: "By connecting your calendar to Notion, you can do so much more:"
                    },
                    featureTranscribe: {
                        id: "calendarOAuthPopups.featureTranscribe",
                        defaultMessage: "Transcribe meetings in person or online"
                    },
                    featureActionItems: {
                        id: "calendarOAuthPopups.featureActionItems",
                        defaultMessage: "Integrate your calendar with AI Agent workflows"
                    },
                    featureDatabases: {
                        id: "calendarOAuthPopups.featureDatabases",
                        defaultMessage: "Add databases to your calendar"
                    },
                    closeButton: {
                        id: "calendarOAuthPopups.closeButton",
                        defaultMessage: "Close"
                    }
                }),
                M = {
                    container: {
                        backgroundColor: n(632079).Tj.background.elevated,
                        borderRadius: 12,
                        boxShadow: n(632079).Tj.shadow.outline.md,
                        border: `1px solid ${n(632079).Tj.border.primary}`,
                        display: "flex",
                        flexDirection: "column",
                        gap: 24,
                        paddingTop: 20,
                        paddingBottom: 16,
                        paddingInlineStart: 20,
                        paddingInlineEnd: 20,
                        position: "relative",
                        width: 455,
                        maxWidth: "calc(100vw - 32px)"
                    },
                    header: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 7,
                        alignItems: "center"
                    },
                    iconAndTitle: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 9,
                        alignItems: "center",
                        paddingInline: 20
                    },
                    title: {
                        textAlign: "center"
                    },
                    description: {
                        textAlign: "center"
                    },
                    closeButton: {
                        position: "absolute",
                        top: 10,
                        insetInlineEnd: 10,
                        borderRadius: 12,
                        background: n(632079).Tj.background.tertiaryTranslucent,
                        backdropFilter: "blur(16px)",
                        height: 24,
                        width: 24,
                        zIndex: 10
                    },
                    closeIcon: {
                        fill: n(632079).Tj.icon.secondary,
                        width: 14,
                        height: 14
                    },
                    featureList: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 14
                    },
                    featureIcon: {
                        flexShrink: 0,
                        marginTop: 0
                    }
                };

            function P({
                onProviderSelected: e,
                previousProvider: t,
                onDismiss: i
            }) {
                let o = (0, n(109939).tz)(),
                    r = (0, a.useCallback)(() => {
                        i()
                    }, [i]),
                    s = (0, a.useCallback)(() => (0, l.jsxs)("div", {
                        style: M.container,
                        children: [(0, l.jsx)(n(374533).A, {
                            style: M.closeButton,
                            iconStyle: M.closeIcon,
                            ariaLabel: o.formatMessage(D.closeButton),
                            icon: n(25094).xMarkSmallIcon,
                            onClick: r
                        }), (0, l.jsxs)("div", {
                            style: M.header,
                            children: [(0, l.jsxs)("div", {
                                style: M.iconAndTitle,
                                children: [(0, l.jsx)(n(4458).fI, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    children: (0, l.jsx)(n(764262).I, {
                                        icon: n(100986).a,
                                        size: 32,
                                        colorVariant: "primary"
                                    })
                                }), (0, l.jsx)(n(111010).D, {
                                    styleKey: "titleSmSemibold",
                                    colorVariant: "primary",
                                    style: M.title,
                                    children: (0, l.jsx)(n(109939).sA, { ...D.finishConnectingTitle
                                    })
                                })]
                            }), (0, l.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                style: M.description,
                                children: (0, l.jsx)(n(109939).sA, { ...D.finishConnectingDescription
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            style: M.featureList,
                            children: [(0, l.jsxs)(n(4458).fI, {
                                gap: 6,
                                alignItems: "flex-start",
                                children: [(0, l.jsx)("div", {
                                    style: M.featureIcon,
                                    children: (0, l.jsx)(n(764262).I, {
                                        icon: I,
                                        size: 20,
                                        colorVariant: "secondary"
                                    })
                                }), (0, l.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "secondary",
                                    children: (0, l.jsx)(n(109939).sA, { ...D.featureTranscribe
                                    })
                                })]
                            }), (0, l.jsxs)(n(4458).fI, {
                                gap: 6,
                                alignItems: "flex-start",
                                children: [(0, l.jsx)("div", {
                                    style: M.featureIcon,
                                    children: (0, l.jsx)(n(764262).I, {
                                        icon: T,
                                        size: 20,
                                        colorVariant: "secondary"
                                    })
                                }), (0, l.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "secondary",
                                    children: (0, l.jsx)(n(109939).sA, { ...D.featureActionItems
                                    })
                                })]
                            }), (0, l.jsxs)(n(4458).fI, {
                                gap: 6,
                                alignItems: "flex-start",
                                children: [(0, l.jsx)("div", {
                                    style: M.featureIcon,
                                    children: (0, l.jsx)(n(764262).I, {
                                        icon: n(862868).a,
                                        size: 20,
                                        colorVariant: "secondary"
                                    })
                                }), (0, l.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "secondary",
                                    children: (0, l.jsx)(n(109939).sA, { ...D.featureDatabases
                                    })
                                })]
                            })]
                        }), (0, l.jsx)(d, {
                            onProviderSelected: e,
                            primaryProvider: t
                        })]
                    }), [e, t, r, o]);
                return (0, l.jsx)(n(556809).a, {
                    open: !0,
                    preventHideChildrenWhileOpening: !0,
                    onDismiss: r,
                    ariaLabel: o.formatMessage(D.finishConnectingTitle),
                    children: s()
                })
            }
            let V = (0, n(109939).YK)({
                    signupFailureTitle: {
                        id: "calendarOAuthPopups.signupFailureTitle",
                        defaultMessage: "Unable to connect calendar"
                    },
                    signupFailureDescription: {
                        id: "calendarOAuthPopups.signupFailureDescription",
                        defaultMessage: "Something went wrong while connecting your calendar account. Please check your credentials and try again."
                    },
                    cancel: {
                        id: "calendarOAuthPopups.cancel",
                        defaultMessage: "Cancel"
                    },
                    tryAgain: {
                        id: "calendarOAuthPopups.tryAgain",
                        defaultMessage: "Try again"
                    }
                }),
                z = {
                    container: {
                        backgroundColor: n(632079).Tj.background.elevated,
                        borderRadius: 16,
                        boxShadow: n(632079).Tj.shadow.outline.md,
                        border: `1px solid ${n(632079).Tj.border.primary}`,
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        padding: 20,
                        width: 480,
                        maxWidth: "calc(100vw - 32px)"
                    }
                };

            function B({
                onRetry: e,
                onDismiss: t
            }) {
                let i = (0, n(109939).tz)(),
                    o = (0, a.useCallback)(() => {
                        e()
                    }, [e]),
                    r = (0, a.useCallback)(() => {
                        t()
                    }, [t]),
                    s = (0, a.useCallback)(() => (0, l.jsxs)("div", {
                        style: z.container,
                        children: [(0, l.jsxs)(n(4458).VP, {
                            gap: 2,
                            paddingInlineEnd: 20,
                            children: [(0, l.jsx)(n(111010).D, {
                                styleKey: "bodyLgSemibold",
                                colorVariant: "primary",
                                children: (0, l.jsx)(n(109939).sA, { ...V.signupFailureTitle
                                })
                            }), (0, l.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: (0, l.jsx)(n(109939).sA, { ...V.signupFailureDescription
                                })
                            })]
                        }), (0, l.jsxs)(n(4458).fI, {
                            gap: 8,
                            justifyContent: "flex-end",
                            children: [(0, l.jsx)(n(988022).p, {
                                size: "md",
                                onClick: r,
                                children: (0, l.jsx)(n(109939).sA, { ...V.cancel
                                })
                            }), (0, l.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                size: "md",
                                onClick: o,
                                children: (0, l.jsx)(n(109939).sA, { ...V.tryAgain
                                })
                            })]
                        })]
                    }), [o, r]);
                return (0, l.jsx)(n(556809).a, {
                    open: !0,
                    preventHideChildrenWhileOpening: !0,
                    onDismiss: r,
                    ariaLabel: i.formatMessage(V.signupFailureTitle),
                    children: s()
                })
            }

            function L(e) {
                var t;
                let r, {
                        from: s,
                        children: c,
                        onGeneratorYield: d,
                        hidePopups: u = !1,
                        enforceCurrentUserEmail: p = !0
                    } = e,
                    g = (0, n(533992).v3)(),
                    [f, x] = (0, a.useState)(!1),
                    [h, m] = (0, a.useState)(void 0),
                    [v, b] = (0, a.useState)(void 0),
                    [C, w] = (0, a.useState)("idle"),
                    S = (0, a.useRef)("idle"),
                    T = (0, a.useRef)(void 0),
                    A = (t = e.provider, r = (0, n(533992).v3)(), (0, n(682985).K8)(() => {
                        var e, a;
                        if ("disambiguate" === t) return {
                            providerType: "unknown",
                            status: "idle"
                        };
                        if ("auto" !== t) return {
                            providerType: t,
                            status: "resolved"
                        };
                        let l = null == (e = (0, n(427846)._)(r)) ? void 0 : e.getEmail(),
                            s = null == (a = n(728372).AppStoreSidebarSpaceStore.state) ? void 0 : a.getSpaceId();
                        return l && s ? function(e) {
                            let {
                                environment: t,
                                userEmail: a,
                                spaceId: l
                            } = e, r = `${l}:${a}`, s = o.get(r) ? ? new(n(552923)).u({
                                getInitialState: () => ({
                                    providerType: "unknown",
                                    status: "loading"
                                }),
                                effect: () => ("resolved" !== s.state.status && c(), () => {}),
                                debugName: "PrimaryEmailProviderStore"
                            });
                            async function c() {
                                try {
                                    let e = await t.api.callCellCompatibleApi({
                                        eventName: "checkEmailEligibilityForConnectedAppProducts",
                                        environment: t,
                                        data: {
                                            email: a
                                        },
                                        cellNavigation: {
                                            spaceId: l
                                        }
                                    });
                                    if ("resolved" === s.state.status) return;
                                    "success" === e.type ? s.setState({
                                        providerType: e.data.providerType ? ? "unknown",
                                        status: "resolved"
                                    }) : (i().log({
                                        level: "error",
                                        from: "fetchPrimaryEmailProvider",
                                        type: "failedToResolveProvider",
                                        data: {
                                            miscDataToConvertToString: {
                                                error: e.error
                                            }
                                        }
                                    }), s.setState({
                                        providerType: "unknown",
                                        status: "idle"
                                    }))
                                } catch (e) {
                                    i().log({
                                        level: "error",
                                        from: "fetchPrimaryEmailProvider",
                                        type: "failedToResolveProvider",
                                        data: {
                                            miscDataToConvertToString: {
                                                error: e
                                            }
                                        }
                                    }), s.setState({
                                        providerType: "unknown",
                                        status: "idle"
                                    })
                                }
                            }
                            return o.set(r, s), s
                        }({
                            environment: r,
                            userEmail: l,
                            spaceId: s
                        }).state : {
                            providerType: "unknown",
                            status: "idle"
                        }
                    }, [r, t], {
                        debugName: "PrimaryEmailProviderStore"
                    }));
                (0, a.useEffect)(() => {
                    S.current = C
                }, [C]), (0, a.useEffect)(() => {
                    if ("inProgress" === C) return window.addEventListener("focus", e), () => {
                        window.removeEventListener("focus", e)
                    };

                    function e() {
                        setTimeout(() => {
                            "inProgress" === S.current && m("oAuthWindowClosed")
                        }, 100)
                    }
                }, [C]);
                let I = (0, a.useCallback)(async e => {
                        let t;
                        T.current = e, w("inProgress");
                        let a = (0, n(602949).$)({
                                environment: g,
                                from: s,
                                provider: e,
                                enforceCurrentUserEmail: p
                            }),
                            o = !0;
                        do {
                            let {
                                value: e
                            } = t = await a.next();
                            switch (null == d || d(e), e) {
                                case "signupFailure":
                                    i().log({
                                        level: "error",
                                        from: "NotionCalendarSignup",
                                        type: "failedToConnectCalendar",
                                        data: {
                                            miscDataToConvertToString: {
                                                value: e,
                                                source: s
                                            }
                                        }
                                    }), m("signupFailure"), w("completed");
                                    break;
                                case "secondaryDataLoadFailure":
                                case "missingEmailOrSpaceId":
                                    i().log({
                                        level: "error",
                                        from: "NotionCalendarSignup",
                                        type: "failedToConnectCalendar",
                                        data: {
                                            miscDataToConvertToString: {
                                                value: e,
                                                source: s
                                            }
                                        }
                                    }), w("completed");
                                    break;
                                case "wentOffline":
                                case "oAuthWindowClosedByUser":
                                    w("completed");
                                    break;
                                case "signupSuccess":
                                    x(!0);
                                    break;
                                case "signupInitiated":
                                    w("completed"), x(!0);
                                    break;
                                case "secondaryDataLoaded":
                                    x(!1), m(void 0);
                                    break;
                                case "insufficientScopes":
                                case "accountMismatch":
                                    m(e);
                                    break;
                                case "oAuthWindowClosedDueToCleanup":
                                    o = !1
                            }
                        } while (!t.done) o && x(!1)
                    }, [g, s, d, p]),
                    D = (0, a.useCallback)(async () => {
                        let e = v ? ? A.providerType;
                        return "unknown" === e ? void m("providerDisambiguation") : I(e)
                    }, [I, A.providerType, v]),
                    M = (0, a.useCallback)(() => {
                        m(void 0), w("idle"), b(void 0)
                    }, []),
                    V = (0, a.useCallback)(async () => {
                        m(void 0), await D()
                    }, [D]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [c({
                        isLoading: f,
                        resolvedProvider: A.providerType,
                        onClick: D
                    }), "providerDisambiguation" === h ? (0, l.jsx)(y, {
                        onProviderSelected: e => {
                            b(e), m(void 0), I(e)
                        },
                        onDismiss: M
                    }) : null, u || "oAuthWindowClosed" !== h ? null : (0, l.jsx)(P, {
                        onProviderSelected: e => {
                            b(e), m(void 0), I(e)
                        },
                        previousProvider: T.current,
                        onDismiss: M
                    }), u || "accountMismatch" !== h ? null : (0, l.jsx)(j, {
                        onConnectCalendar: V,
                        onDismiss: M
                    }), u || "insufficientScopes" !== h ? null : (0, l.jsx)(k, {
                        onConnectCalendar: V,
                        onDismiss: M
                    }), u || "signupFailure" !== h ? null : (0, l.jsx)(B, {
                        onRetry: V,
                        onDismiss: M
                    })]
                })
            }
        },
        748869: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                linkSmallIcon: () => o
            }), n(296540);
            var a = n(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.19 12.19",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M12.848 2.8a3.145 3.145 0 0 0-4.448 0L6.918 4.283a.625.625 0 0 0 .884.883l1.482-1.482c.74-.74 1.94-.74 2.68 0l.294.294c.74.74.74 1.94 0 2.68l-1.482 1.483a.625.625 0 1 0 .884.884l1.482-1.482a3.145 3.145 0 0 0 0-4.449z"
                        }), (0, a.jsx)("path", {
                            d: "M10.472 5.47a.625.625 0 0 0-.884 0L5.229 9.83a.625.625 0 1 0 .884.883l4.359-4.359a.625.625 0 0 0 0-.883"
                        }), (0, a.jsx)("path", {
                            d: "M5.167 6.918a.625.625 0 0 0-.884 0L2.8 8.4a3.146 3.146 0 0 0 0 4.448l.294.294a3.145 3.145 0 0 0 4.449 0l1.482-1.482a.625.625 0 0 0-.884-.884L6.66 12.258c-.74.74-1.94.74-2.68 0l-.295-.294c-.74-.74-.74-1.94 0-2.68L5.167 7.8a.625.625 0 0 0 0-.883"
                        })]
                    })
                },
                o = (0, n(104509).wt)("linkSmall", i, "small")
        },
        862868: (e, t, n) => {
            n.d(t, {
                a: () => i
            }), n(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.37 11.75 9.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h8c1.036 0 1.875-.84 1.875-1.875v-5.5c0-1.036-.84-1.875-1.875-1.875zM3.375 5.25c0-.345.28-.625.625-.625h3.375v1.417h-4zm5.25.792V4.625H12c.345 0 .625.28.625.625v.792zm0 2.666V7.292h4v1.416zm-5.25 0V7.292h4v1.416zm0 2.042v-.792h4v1.417H4a.625.625 0 0 1-.625-.625m5.25.625V9.958h4v.792c0 .345-.28.625-.625.625z"
                    })
                },
                i = (0, n(104509).wt)("viewTableSmall", a, "small")
        },
        897638: (e, t, n) => {
            n.d(t, {
                N: () => o
            });
            var a = n(296540);
            let i = new(n(815048)).O2("notionCalendarLogos", async () => n.e(94366).then(n.bind(n, 916243)));

            function o(e) {
                let t = function() {
                    let [e, t] = (0, a.useState)(new Date), i = (0, a.useRef)();
                    return (0, a.useEffect)(() => {
                        let a = () => {
                                let n = new Date;
                                n.getDate() !== e.getDate() && t(n)
                            },
                            o = new Date,
                            l = new Date(o);
                        l.setHours(o.getHours() + 1), l.setMinutes(0), l.setSeconds(0), l.setMilliseconds(0);
                        let r = setTimeout(() => {
                            a(), i.current = window.setInterval(a, n(695216).pT)
                        }, l.getTime() - o.getTime());
                        return () => {
                            clearTimeout(r), clearInterval(i.current)
                        }
                    }, [e]), e
                }();
                return function({
                    dateNumber: e,
                    calendarDateIcons: t
                }) {
                    let a = n(557737).K;
                    if (e < 1 || e > 31) return a;
                    let i = e < 10 ? `0${e}` : `${e}`,
                        o = `calendarDate${i}Icon`;
                    return "resolved" !== t.status ? a : t.value[o]
                }({
                    dateNumber: e ? ? t.getDate(),
                    calendarDateIcons: (0, n(815048).fJ)(i)
                })
            }
        },
        968107: (e, t, n) => {
            n.d(t, {
                y: () => i
            }), n(296540);
            var a = n(474848);

            function i({
                dateNumber: e,
                ...t
            }) {
                let o = (0, n(897638).N)(e);
                return (0, a.jsx)(n(16275).I, {
                    icon: o,
                    size: "default",
                    ...t
                })
            }
        }
    }
]);