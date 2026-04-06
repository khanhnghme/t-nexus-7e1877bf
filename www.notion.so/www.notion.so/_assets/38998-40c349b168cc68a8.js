"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [31426, 38998], {
        2681: (e, t, r) => {
            function n({
                newVisibleOrder: e,
                previousFullOrder: t
            }) {
                let r = 0;
                return t.map(t => {
                    if (!e.includes(t)) return t; {
                        let t = e[r];
                        return r++, t
                    }
                })
            }
            r.d(t, {
                v: () => n
            }), r(581454)
        },
        3161: (e, t, r) => {
            r.d(t, {
                m: () => n
            });

            function n(e, t) {
                let n = "msStore" === e.device.desktopTargetPlatform,
                    i = !t || (0, r(529587).X)(t);
                return !r(986939).A.isMobile && !n && !i
            }
        },
        17118: (e, t, r) => {
            r.d(t, {
                l: () => a
            });
            var n = () => r(546605);
            class i extends n().Store {
                getInitialState() {
                    return null
                }
            }
            let a = new i
        },
        21731: (e, t, r) => {
            r.d(t, {
                O: () => n
            });

            function n(e) {
                r(647095).Qg(e), r(773352).log({
                    level: "error",
                    from: "teamActions",
                    type: "TeamApiError",
                    error: (0, r(416607).convertErrorToLog)(e.error),
                    data: {
                        miscDataToConvertToString: {
                            body: e.body,
                            status: e.status
                        }
                    }
                })
            }
        },
        30616: (e, t, r) => {
            r.d(t, {
                D: () => n
            });
            let n = new(r(742112)).I
        },
        32957: (e, t, r) => {
            r.d(t, {
                o: () => n
            });
            let n = (0, r(815048)._h)(new(r(815048)).O2("PublicPageSidebarContent", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(35837), r.e(25867), r.e(88595), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(43444), r.e(23979), r.e(73259), r.e(87971), r.e(4779), r.e(55067), r.e(50354), r.e(14231), r.e(18406), r.e(97615), r.e(48095), r.e(10188), r.e(18802), r.e(20957), r.e(53157), r.e(58033), r.e(79563), r.e(6782), r.e(74936), r.e(5309), r.e(76060), r.e(2209)]).then(r.bind(r, 747754))), e => e.PublicPageSidebarContent)
        },
        69371: (e, t, r) => {
            r.d(t, {
                N: () => i
            });
            let n = new(r(815048)).O2("OutlinerDropdownMenuButton", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(71562), r.e(26361), r.e(16471), r.e(37353), r.e(62475), r.e(3151), r.e(18965), r.e(98629), r.e(96527), r.e(30085), r.e(90109), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(57688), r.e(54951), r.e(43444), r.e(23979), r.e(17250), r.e(26997), r.e(73259), r.e(28048), r.e(93430), r.e(55940), r.e(12560), r.e(88268), r.e(12001), r.e(40198), r.e(39726), r.e(31243), r.e(42534), r.e(86662), r.e(14886), r.e(39225), r.e(6212), r.e(2626), r.e(64453), r.e(4779), r.e(21969), r.e(29663), r.e(28482), r.e(76361), r.e(14369), r.e(74145), r.e(48860), r.e(75136), r.e(98175), r.e(18682), r.e(79349), r.e(58360), r.e(33162), r.e(82538), r.e(63793), r.e(18881), r.e(62731), r.e(41049), r.e(60262), r.e(72805), r.e(18416), r.e(2276), r.e(30532), r.e(73588), r.e(3723), r.e(91100), r.e(78311), r.e(4287), r.e(9817), r.e(65594), r.e(47302), r.e(91636), r.e(36441), r.e(64049), r.e(75189), r.e(28372), r.e(28663), r.e(47281), r.e(29087), r.e(46350), r.e(75234), r.e(67281), r.e(66200), r.e(52064), r.e(69626), r.e(82816), r.e(2832), r.e(48095), r.e(67098), r.e(35118), r.e(63611), r.e(94849), r.e(75484), r.e(98821), r.e(97711), r.e(89076), r.e(86998), r.e(58889), r.e(22920), r.e(9914), r.e(78257), r.e(84382), r.e(51386), r.e(95150), r.e(10471), r.e(87087), r.e(98419), r.e(11719), r.e(13592), r.e(6743), r.e(5234), r.e(85376), r.e(67252), r.e(42709), r.e(44903), r.e(92181), r.e(7251), r.e(72143), r.e(67612), r.e(53478), r.e(75559), r.e(86793), r.e(34), r.e(54253), r.e(26665), r.e(67984), r.e(605), r.e(75681)]).then(r.bind(r, 165668))),
                i = (0, r(815048)._h)(n, e => e.OutlinerDropdownMenuButton)
        },
        73233: (e, t, r) => {
            r.d(t, {
                getOnboardingAgentVariant: () => n
            });

            function n({
                disableExposureLogging: e = !0
            } = {}) {
                let t = r(218744).default.getEligibleGroup({
                    experimentId: "onboarding_agent_m1_no_layer",
                    disableExposureLogging: e
                });
                return void 0 !== t && "control" !== t ? t : r(218744).default.getEligibleGroup({
                    experimentId: "onboarding_agent_m1",
                    disableExposureLogging: !0
                })
            }
        },
        80380: (e, t, r) => {
            r.d(t, {
                u: () => o
            });
            var n = r(296540),
                i = r(474848);
            let a = (0, r(109939).YK)({
                title: {
                    id: "sidebar.softwareFactory.title",
                    defaultMessage: "Software Factory"
                },
                tooltip: {
                    id: "sidebar.softwareFactory.tooltip",
                    defaultMessage: "Open Software Factory"
                }
            });

            function o({
                styles: e
            }) {
                let t = (0, r(533992).v3)(),
                    s = (0, r(109939).tz)(),
                    {
                        sidebarTooltipStore: l,
                        handleFocus: d,
                        handleBlur: c
                    } = (0, r(783242).W)(),
                    u = (0, n.useCallback)(() => (0, i.jsx)("div", {
                        children: s.formatMessage(a.tooltip)
                    }), [s]),
                    p = (0, r(682985).K8)(() => "softwareFactory" === t.RouterStore.state.route.name, [t]),
                    m = (0, r(960253).I)(() => ({
                        linkBoxStyle: { ...r(132261).DX.baseSidebarItem,
                            ...p && r(132261).DX.currentSelectedSidebarItem
                        }
                    }), [p]);
                return (0, i.jsx)(r(51831).m, {
                    store: l,
                    content: u,
                    originGap: 6,
                    placement: "right",
                    children: t => (0, i.jsx)(r(590422).Q, {
                        style: m.linkBoxStyle,
                        href: "/software-factory",
                        hoveredStyle: e.buttonHoveredStyle,
                        ...t,
                        onFocus: e => {
                            var r;
                            null == (r = t.onFocus) || r.call(t, e), d(e)
                        },
                        onBlur: e => {
                            var r;
                            null == (r = t.onBlur) || r.call(t, e), c()
                        },
                        children: (0, i.jsx)(r(380559).u, {
                            left: (0, i.jsx)(r(16275).I, {
                                icon: r(877163).m,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            children: s.formatMessage(a.title)
                        })
                    })
                })
            }
        },
        87337: (e, t, r) => {
            r.d(t, {
                J: () => n
            });
            let n = [
                [2, 1, 3, 1],
                [1, 0, 2, 0],
                [0, 2, 0, 3],
                [3, 3, 0, 2],
                [1, 1, 2, 2]
            ]
        },
        96351: (e, t, r) => {
            r.d(t, {
                B: () => n
            });

            function n({
                openInNew: e,
                url: t,
                makeTabActive: i,
                position: a,
                isNewPage: o,
                environment: s
            }) {
                "tab" === e && i ? (0, r(266527).x)(s, {
                    url: t,
                    position: a,
                    makeTabActive: i,
                    isNewPage: o
                }) : "tab" !== e || i ? "window" === e && (0, r(714770).E)(t) : (0, r(380839).x)(s, {
                    url: t,
                    position: a
                })
            }
        },
        108861: (e, t, r) => {
            r.d(t, {
                t: () => n
            });
            let n = (0, r(815048)._h)(new(r(815048)).O2("UxrDebugOnboardingAgentButton", async () => await Promise.all([r.e(36556), r.e(55373), r.e(36192), r.e(49806), r.e(79974), r.e(45414), r.e(52466), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(53050), r.e(87353), r.e(45213), r.e(5721), r.e(57688), r.e(64696), r.e(76135), r.e(16922), r.e(31190), r.e(41882)]).then(r.bind(r, 847081))), e => e.UxrDebugOnboardingAgentButton)
        },
        109337: (e, t, r) => {
            r.d(t, {
                J: () => o,
                m: () => a
            });
            var n = r(296540);
            let i = (0, n.createContext)({
                onClose: r(763230).lQ
            });
            i.displayName = "SlipperySlopeFlyoutContext";
            let a = i.Provider;

            function o() {
                return (0, n.useContext)(i)
            }
        },
        119965: (e, t, r) => {
            r.d(t, {
                V: () => i
            });
            var n = r(296540);

            function i() {
                let e = (0, n.useRef)(!1),
                    t = (0, r(682985).K8)(() => r(728372).default.state.renderPhase, []),
                    i = (0, r(682985).K8)(() => r(329464).A.state.initialCollectionPendingRenderCount > 0, []);
                return "rendered" !== t || i || (e.current = !0), !e.current
            }
        },
        126592: (e, t, r) => {
            r.d(t, {
                e: () => n
            });
            async function n(e) {
                if (null !== r(17118).l.state) return r(17118).l.state;
                let t = e.device.os;
                if ("mac" !== t && "windows" !== t) return !1;
                let n = await e.api.callApi({
                    eventName: "getDesktopAppRegistration",
                    environment: e,
                    data: {
                        os: t
                    }
                });
                if ("failed" === n.type) return r(773352).log({
                    level: "error",
                    from: "getDesktopAppRegistered",
                    type: "api:getDesktopAppRegistration",
                    error: n.error
                }), !1;
                let i = n.data.isRegistered || !!n.data.isRegistered30Day;
                return r(17118).l.setState(i), i
            }
        },
        132261: (e, t, r) => {
            r.d(t, {
                DX: () => u,
                FD: () => a,
                Zr: () => o,
                aL: () => n,
                bG: () => s,
                qe: () => c,
                ry: () => i,
                sI: () => d,
                sx: () => l
            });
            let n = 800,
                i = 22,
                a = 24,
                o = 30,
                s = 8,
                l = 4,
                d = 6,
                c = 15,
                u = {
                    baseSidebarItem: { ...r(153262).hG,
                        fontWeight: r(699422).Wy.medium
                    },
                    currentSelectedSidebarItem: {
                        background: r(632079).Tj.sidebarItemSelectedBackground,
                        color: r(632079).Tj.text.primary,
                        ...r(986939).A.isMobile && {
                            boxShadow: `
                            0 1px 0 ${r(632079).Tj.buttonHoveredBackground}
                        `
                        }
                    }
                }
        },
        134604: (e, t, r) => {
            r.d(t, {
                h: () => n
            }), r(898992), r(354520);

            function n({
                environment: e,
                newSidebarOrder: t,
                previousSidebarOrder: i,
                dropArgs: a,
                spaceViewStore: o,
                sidebarState: s
            }) {
                let l = s.showWorkspaceSection ? t : t.filter(e => "workspace" !== e),
                    d = o.getSpaceId();
                (0, r(377796).createAndCommit)({
                    userAction: "SidebarOutliner.reorderSection",
                    environment: e,
                    cellTarget: {
                        spaceWithId: d
                    },
                    canUndo: !0,
                    perform: t => {
                        (0, r(173157).z)({
                            store: o,
                            data: {
                                sidebar_order: l
                            },
                            transaction: t
                        }), (0, r(928896).U)(e, {
                            section: a.key,
                            previous_order: i,
                            new_order: l,
                            from: "drag"
                        })
                    }
                })
            }
        },
        148777: (e, t, r) => {
            r.d(t, {
                g: () => a
            });
            var n = r(296540);
            async function i({
                environment: e
            }) {
                try {
                    let t = await e.api.callApi({
                        eventName: "getIsMailUser",
                        environment: e,
                        data: {}
                    });
                    if ("success" === t.type) return t.data.isMailUser
                } catch (e) {
                    return
                }
            }

            function a() {
                let [e, t] = (0, n.useState)((0, r(13565).HU)() ? "true" : "not-yet-known"), [a, o] = (0, n.useState)(!0), [s, l] = (0, n.useState)(!1), d = (0, r(533992).v3)(), c = (0, n.useRef)(!1), u = (0, n.useCallback)(() => {
                    o(!0)
                }, []), p = a && "true" !== e, m = (0, n.useCallback)(async () => {
                    if (!p || s) return;
                    l(!0);
                    let e = await i({
                        environment: d
                    });
                    l(!1), void 0 !== e && (t(e ? "true" : "false"), o(!1), e && (0, r(13565).L_)(), window.removeEventListener("blur", u), window.addEventListener("blur", u, {
                        once: !0
                    }))
                }, [p, s, d, u]);
                return (0, n.useEffect)(() => {
                    p && !c.current && (c.current = !0, (0, r(934927).$)(() => {
                        m()
                    }, 2e3))
                }, [m, p]), (0, n.useEffect)(() => () => {
                    window.removeEventListener("blur", u)
                }, [u]), {
                    isMailUser: e,
                    checkMailUser: m
                }
            }
        },
        161323: (e, t, r) => {
            r.d(t, {
                QM: () => n,
                Vz: () => a,
                nt: () => i
            });
            let n = "notion_mail_launch_2_callout",
                i = "notion_calendar_existing_user_activation_callout",
                a = {
                    mail: [n],
                    calendar: [i]
                }
        },
        168814: (e, t, r) => {
            r.d(t, {
                X: () => n
            });

            function n() {
                return (0, r(682985).K8)(() => r(329464).A.state.initialRenderCompleted, [])
            }
        },
        177370: (e, t, r) => {
            r.d(t, {
                l: () => n
            });

            function n() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(723240).r)();
                return (0, r(682985).K8)(() => t ? e.idCreator.getSpaceIdCreatorSync(t) : void 0, [e, t])
            }
        },
        179279: (e, t, r) => {
            r.d(t, {
                aI: () => s,
                $c: () => d,
                Xd: () => l,
                cx: () => o,
                Rc: () => i,
                uf: () => a
            });
            let n = new(r(815048)).O2("SlackImportsInviteWithModal", async () => await Promise.all([r.e(75134), r.e(33503), r.e(21969), r.e(79349), r.e(47414), r.e(29447), r.e(41075), r.e(7485), r.e(68117)]).then(r.bind(r, 482569))),
                i = (0, r(815048)._h)(n, e => e.SlackImportsInviteWithModal),
                a = {
                    RequestMembersModal: new(r(815048)).O2("RequestMembersModal", () => Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(71562), r.e(26361), r.e(16471), r.e(37353), r.e(18965), r.e(36474), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(57688), r.e(54951), r.e(43444), r.e(23979), r.e(17250), r.e(26997), r.e(73259), r.e(93430), r.e(88268), r.e(12001), r.e(40198), r.e(39726), r.e(31243), r.e(42534), r.e(86662), r.e(14886), r.e(39225), r.e(6212), r.e(2626), r.e(64453), r.e(4779), r.e(21969), r.e(29663), r.e(28482), r.e(14369), r.e(56308), r.e(75136), r.e(98175), r.e(79349), r.e(68583), r.e(77282)]).then(r.bind(r, 713676))),
                    GoogleImportsInviteWithModal: new(r(815048)).O2("GoogleImportsInviteWithModal", () => Promise.all([r.e(75134), r.e(33503), r.e(21969), r.e(79349), r.e(47414), r.e(29447), r.e(41075), r.e(7485), r.e(51226)]).then(r.bind(r, 941678))),
                    MicrosoftImportsInviteWithModal: new(r(815048)).O2("MicrosoftImportsInviteWithModal", () => Promise.all([r.e(75134), r.e(33503), r.e(21969), r.e(79349), r.e(47414), r.e(29447), r.e(41075), r.e(7485), r.e(64981)]).then(r.bind(r, 915525))),
                    InviteDropdownMenuItemLabel: new(r(815048)).O2("InviteDropdownMenuItemLabel", () => r.e(25171).then(r.bind(r, 418153))),
                    personPropertyInviteActions: new(r(815048)).O2("personPropertyInviteActions", () => Promise.all([r.e(21969), r.e(79349), r.e(47414), r.e(29447), r.e(57613)]).then(r.bind(r, 910772)))
                },
                o = (0, r(815048)._h)(a.RequestMembersModal, e => e.RequestMembersModal),
                s = (0, r(815048)._h)(a.GoogleImportsInviteWithModal, e => e.GoogleImportsInviteWithModal),
                l = (0, r(815048)._h)(a.MicrosoftImportsInviteWithModal, e => e.MicrosoftImportsInviteWithModal),
                d = (0, r(815048)._h)(a.InviteDropdownMenuItemLabel, e => e.InviteDropdownMenuItemLabel)
        },
        187041: (e, t, r) => {
            r.d(t, {
                g: () => n
            });

            function n({
                spaceId: e
            }) {
                let t = (0, r(533992).v3)();
                return (0, r(682985).K8)(() => {
                    if (e) return r(185995).default.getData(t, {
                        spaceId: e
                    })
                }, [t, e])
            }
        },
        189498: (e, t, r) => {
            r.d(t, {
                L: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    teamStore: n,
                    shouldScroll: i
                } = e;
                i && (0, r(639323).M)({
                    teamStore: n,
                    environment: t
                });
                let a = (0, r(709633).O)({
                    teamStore: n
                });
                a && !(a.length < 1) && ((0, r(545586).navigateToBlock)({
                    environment: t,
                    store: a[0],
                    pageVisitSource: r(254656).y8.JoinTeam
                }), r(649807)._L(t, {
                    store: n
                }))
            }
        },
        196441: (e, t, r) => {
            r.d(t, {
                n$: () => i,
                rx: () => n,
                yA: () => a
            });
            let n = 1;

            function i(e) {
                switch (r(381453).qE(r(381453).LI(e, 1), .5, 4.9)) {
                    case .5:
                        return 155;
                    case .6:
                        return 128;
                    case .7:
                        return 108;
                    case .8:
                        return 94;
                    case .9:
                        return 83;
                    default:
                        return 75
                }
            }

            function a(e) {
                let t = r(381453).qE(r(381453).LI(e, 1), .5, 4.9);
                switch (t) {
                    case .5:
                        return 273;
                    case .6:
                        return 228;
                    case .7:
                        return 195;
                    case .8:
                        return 171;
                    case .9:
                        return 151;
                    case 1:
                        return 136;
                    case 1.1:
                        return 123;
                    case 1.2:
                        return 113;
                    case 1.3:
                        return 105;
                    case 1.4:
                        return 97;
                    case 1.5:
                        return 91;
                    case 1.6:
                        return 85;
                    default:
                        return Math.max(85 - Math.floor((t - 1.6) * 50), 0)
                }
            }
        },
        214410: (e, t, r) => {
            r.d(t, {
                V: () => n
            });
            let n = (0, r(815048)._h)(new(r(815048)).O2("LoggedOutPublicSharingPageSidebar", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(35837), r.e(25867), r.e(88595), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(43444), r.e(23979), r.e(73259), r.e(87971), r.e(4779), r.e(55067), r.e(50354), r.e(14231), r.e(18406), r.e(97615), r.e(48095), r.e(10188), r.e(18802), r.e(20957), r.e(53157), r.e(58033), r.e(79563), r.e(6782), r.e(74936), r.e(5309), r.e(76060), r.e(2209)]).then(r.bind(r, 384712))), e => e.LoggedOutPublicSharingPageSidebar)
        },
        239697: (e, t, r) => {
            r.d(t, {
                H: () => i
            });
            let n = new(r(815048)).O2("permissionsInviteWithModal", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(71562), r.e(26361), r.e(16471), r.e(37353), r.e(62475), r.e(3151), r.e(18965), r.e(98629), r.e(96527), r.e(30085), r.e(90109), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(57688), r.e(54951), r.e(43444), r.e(23979), r.e(17250), r.e(26997), r.e(73259), r.e(28048), r.e(93430), r.e(55940), r.e(12560), r.e(88268), r.e(12001), r.e(40198), r.e(39726), r.e(31243), r.e(42534), r.e(86662), r.e(14886), r.e(39225), r.e(6212), r.e(2626), r.e(64453), r.e(4779), r.e(21969), r.e(29663), r.e(28482), r.e(76361), r.e(14369), r.e(74145), r.e(48860), r.e(75136), r.e(98175), r.e(18682), r.e(79349), r.e(58360), r.e(33162), r.e(82538), r.e(63793), r.e(18881), r.e(62731), r.e(41049), r.e(60262), r.e(72805), r.e(18416), r.e(2276), r.e(30532), r.e(73588), r.e(3723), r.e(91100), r.e(78311), r.e(4287), r.e(9817), r.e(65594), r.e(47302), r.e(91636), r.e(36441), r.e(64049), r.e(75189), r.e(28372), r.e(28663), r.e(47281), r.e(29087), r.e(46350), r.e(75234), r.e(67281), r.e(66200), r.e(52064), r.e(69626), r.e(82816), r.e(2832), r.e(48095), r.e(67098), r.e(35118), r.e(63611), r.e(94849), r.e(75484), r.e(98821), r.e(97711), r.e(89076), r.e(86998), r.e(58889), r.e(22920), r.e(9914), r.e(78257), r.e(84382), r.e(51386), r.e(95150), r.e(10471), r.e(87087), r.e(98419), r.e(11719), r.e(13592), r.e(6743), r.e(5234), r.e(85376), r.e(67252), r.e(42709), r.e(44903), r.e(92181), r.e(7251), r.e(72143), r.e(67612), r.e(53478), r.e(75559), r.e(86793), r.e(34), r.e(54253), r.e(26665), r.e(67984), r.e(605), r.e(75681)]).then(r.bind(r, 949290))),
                i = (0, r(815048)._h)(n, e => e.PermissionsInviteWithModal)
        },
        252941: (e, t, r) => {
            r.d(t, {
                M: () => o,
                W: () => i
            });
            let n = new(r(815048)).O2("teamspaceDirectory", () => Promise.all([r.e(75134), r.e(33503), r.e(60262), r.e(10188), r.e(1843), r.e(49587)]).then(r.bind(r, 41947))),
                i = (0, r(815048)._h)(n, e => e.TeamspaceDirectoryView),
                a = new(r(815048)).O2("TeamspaceDirectoryOpenInSidePeekButton", async () => await Promise.all([r.e(75134), r.e(33503), r.e(60262), r.e(10188), r.e(1843), r.e(49587)]).then(r.bind(r, 707510))),
                o = (0, r(815048)._h)(a, e => e.TeamspaceDirectoryOpenInSidePeekButton)
        },
        258381: (e, t, r) => {
            r.d(t, {
                L: () => m
            });
            var n = r(296540);
            r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(823215), r(737550);
            var i = r(474848);
            let a = {
                dropTarget: {
                    width: "100%"
                },
                style0: {
                    marginBottom: r(615096).kv
                }
            };

            function o(e) {
                var t, o;
                let l, d, c, u, {
                        sectionType: p,
                        itemStores: m,
                        showMoreIfTruncated: g,
                        isLoading: S,
                        emptyState: h
                    } = e,
                    f = (0, r(533992).v3)(),
                    v = (0, r(972740).L)(),
                    b = (0, r(476743).a)(),
                    y = (0, r(993077).U2)(),
                    _ = (0, r(961696).H)();
                t = m, o = p, l = (0, r(533992).v3)(), d = (0, r(853284).U)(), c = (0, r(83208).X)("sidebar_local_storage", {
                    disableExposureLogging: !0
                }), u = (0, r(682985).K8)(() => t.some(e => {
                    var t;
                    return e.isReady() || (null == (t = e.getTitleValue()) ? void 0 : t.length)
                }), [t]), (0, n.useEffect)(() => {
                    u && o && !s.has(o) && (s.add(o), r(680007).default.measureFromPageOrigin("sidebar.section_render", {
                        data: {
                            section_type: o,
                            slippery_slope: d,
                            cache_enabled: c
                        }
                    }))
                }, [u, l, o, d, c]);
                let w = (0, r(413388)._B)(p),
                    x = "favorites" === p ? "bookmarks" : p,
                    T = (0, r(190566).X4)(p),
                    A = (0, r(67499).S)(),
                    I = (0, n.useCallback)(e => {
                        let {
                            draggingStores: t
                        } = e;
                        if (!v) return !1;
                        if ("favorites" === p && b) {
                            let e = new Set(b.getBookmarkedPageIds());
                            if (t.every(t => e.has(t.id))) return !1
                        }
                        return (0, r(576536).ox)({
                            environment: f,
                            draggingStores: t,
                            parentStore: void 0,
                            spaceStore: v,
                            pageContext: A
                        })
                    }, [f, v, A, p, b]),
                    j = (0, n.useCallback)(async e => {
                        let {
                            droppedStores: t
                        } = e;
                        _ && b && y && w && await r(854108).V({
                            userSettingsStore: _,
                            spaceViewStore: b,
                            spaceUserStore: y,
                            selectedItems: t,
                            libraryViewName: w,
                            environment: f,
                            analyticsFrom: "list_section_selectable_drop"
                        })
                    }, [f, b, y, _, w]),
                    M = (0, n.useCallback)(async e => {
                        (await (0, r(337439).p)())({
                            event: e,
                            environment: f,
                            analyticsFrom: "sidebar_section_more_button",
                            viewName: w
                        })
                    }, [f, w]),
                    P = function(e) {
                        switch (e) {
                            case "private":
                                return "private_pages";
                            case "shared":
                                return "shared_pages";
                            case "favorites":
                                return "favorites_pages";
                            case "recents":
                            case "myMeetings":
                                return;
                            default:
                                (0, r(722371).HB)(e)
                        }
                    }(p),
                    k = (0, n.useCallback)(e => {
                        P && ((0, r(477810).ZT)({
                            environment: f,
                            contentType: P
                        }), r(707964).u4({
                            name: "panel_opened",
                            args: {
                                type: "favorites" === p ? "bookmarks" : p
                            }
                        }))
                    }, [f, P, p]),
                    O = (0, r(83208).X)("sidebar_library") && (0, r(722371).O9)(P) ? k : M;
                return (0, i.jsx)(r(634944).Tl, {
                    dropTargetKey: `Outliner-${p}`,
                    canDropOnto: T,
                    canDropBelow: !1,
                    canAcceptDrop: I,
                    onSelectableDrop: j,
                    shouldShowDropZone: !0,
                    style: a.dropTarget,
                    dropzoneStyle: a.style0,
                    children: (0, i.jsx)(r(615096).Lr, {
                        type: x,
                        from: "main_sidebar",
                        shouldPersistToggleState: !0,
                        spaceStore: v,
                        spaceViewStore: b,
                        showAddButton: "private" === p,
                        right: b ? (0, i.jsx)(r(69371).N, {
                            type: p,
                            spaceViewStore: b
                        }) : void 0,
                        renderSidebar: ({
                            labelAriaId: e,
                            contentsAriaId: t
                        }) => 0 === m.length && !0 === S ? (0, i.jsx)(r(860943).B, {
                            includeHeader: !1,
                            count: 5
                        }) : 0 === m.length && (0, r(722371).O9)(h) ? h : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(r(837764).W, {
                                type: x,
                                contentsAriaId: t,
                                labelAriaId: e,
                                explicitChildStores: m,
                                includeArchivedPages: "recents" === p
                            }), g ? (0, i.jsx)(r(540048).H, {
                                onClick: O,
                                tooltipMessage: (0, i.jsx)(r(109939).sA, {
                                    defaultMessage: "Show all pages",
                                    id: "sidebar.showAllPagesInSection.tooltip"
                                }),
                                sidebarSectionType: p
                            }) : void 0]
                        })
                    })
                })
            }
            let s = new Set;

            function l(e) {
                let {
                    sectionStore: t
                } = e, n = (0, r(476743).a)(), a = (0, r(682985).K8)(() => null != n && n.isDefined() ? n.getBookmarkedPages() : void 0, [n]), {
                    itemStores: s,
                    isTruncated: l,
                    isLoading: d
                } = (0, r(572743).z)({
                    sectionType: "favorites",
                    sidebarSectionStore: t,
                    explicitItemStores: a
                });
                return (0, i.jsx)(o, {
                    sectionStore: t,
                    sectionType: "favorites",
                    itemStores: s,
                    showMoreIfTruncated: l,
                    isLoading: d
                })
            }

            function d(e) {
                let {
                    sectionStore: t
                } = e, {
                    itemStores: n,
                    isTruncated: a,
                    isLoading: s
                } = (0, r(572743).z)({
                    sectionType: "myMeetings",
                    sidebarSectionStore: t,
                    explicitItemStores: "newApi",
                    overrideFlag: !0
                }), l = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceViewStore), d = (0, r(682985).K8)(() => (0, r(933132).P)(l), [l]), c = (0, r(682985).K8)(() => n.filter(e => !e.pathIsDead()), [n]);
                return ((0, r(861821).M)({
                    isEnabled: !!d,
                    itemStores: n,
                    sectionStore: t
                }), d && (s || 0 !== c.length)) ? (0, i.jsx)(o, {
                    sectionStore: t,
                    sectionType: "myMeetings",
                    itemStores: c,
                    showMoreIfTruncated: a,
                    isLoading: s
                }) : null
            }

            function c(e) {
                let {
                    sectionStore: t
                } = e, n = (0, r(533992).v3)(), a = (0, r(476743).a)(), s = (0, r(368891).g)(), l = (0, r(682985).K8)(() => {
                    var e;
                    return a && s ? null == (e = (0, r(633210).r)({
                        environment: n,
                        spaceViewStore: a,
                        userSettingsStore: s,
                        type: "private"
                    })) ? void 0 : e.allPagesStores : void 0
                }, [n, a, s]), d = (0, r(784331).gO)(), {
                    itemStores: c,
                    isTruncated: u,
                    isLoading: p
                } = (0, r(572743).z)({
                    sectionType: "private",
                    sidebarSectionStore: t,
                    explicitItemStores: d ? "newApi" : l
                });
                return (0, i.jsx)(o, {
                    sectionStore: t,
                    sectionType: "private",
                    itemStores: c,
                    showMoreIfTruncated: u,
                    isLoading: p
                })
            }

            function u(e) {
                let {
                    sectionStore: t
                } = e, a = (0, r(533992).v3)(), s = (0, r(476743).a)(), l = (0, r(961696).H)(), d = (0, r(682985).O$)(r(728372).AppStoreMainEditorCurrentBlockStore), c = null == d ? void 0 : d.id, u = (0, n.useRef)(void 0), p = (0, r(682985).K8)(() => s ? (0, r(822209).R)({
                    environment: a,
                    spaceViewStore: s,
                    type: "recents",
                    userSettingsStore: l
                }) : void 0, [s, l, a]), m = (0, r(604306).r)("sidebar_recents_update", {
                    disableExposureLogging: !0
                }), g = (null == p ? void 0 : p.truncationLimit) ? ? r(41664).Ji, S = (0, r(682985).K8)(() => {
                    let e = r(601860).wI.state;
                    if (!(void 0 === e || e.some(e => !e.store.isReady()))) return e.filter(e => e.store.canRead() && !e.store.isTranscriptionBlock()).map(e => e.store)
                }, []), [h, f] = (0, n.useState)(() => void 0);
                (0, n.useEffect)(() => {
                    s && (u.current = void 0, f(void 0), r(601860).wI.recompute())
                }, [s]), (0, n.useEffect)(() => {
                    S && !h && f(S)
                }, [S, h]), (0, n.useEffect)(() => {
                    if (u.current) {
                        let e = u.current,
                            t = e.id,
                            n = e.getParentTable() === r(832375).C0E;
                        t === c || e.isSystemBlock() || e.pathIsDead() || n || null != h && h.slice(0, g).find(e => e.id === t) || f(r => [e, ...(r ? ? []).filter(e => e.id !== t)])
                    }
                    u.current = d
                }, [d, c, h, g]);
                let v = (0, r(682985).K8)(() => "asap" === m ? S : null == h ? void 0 : h.filter(e => !(0, r(952592).z)(e) && e.canRead()), [m, S, h]),
                    {
                        itemStores: b,
                        isLoading: y
                    } = (0, r(572743).z)({
                        sectionType: "recents",
                        sidebarSectionStore: t,
                        explicitItemStores: v
                    });
                return (0, i.jsx)(o, {
                    sectionStore: t,
                    sectionType: "recents",
                    itemStores: b,
                    showMoreIfTruncated: !1,
                    isLoading: y
                })
            }

            function p(e) {
                let {
                    sectionStore: t
                } = e, n = (0, r(533992).v3)(), a = (0, r(476743).a)(), s = (0, r(961696).H)(), l = (0, r(682985).K8)(() => {
                    var e;
                    return null != a && a.isDefined() && s ? null == (e = (0, r(633210).r)({
                        environment: n,
                        spaceViewStore: a,
                        userSettingsStore: s,
                        type: "shared"
                    })) ? void 0 : e.allPagesStores : void 0
                }, [n, a, s]), d = (0, r(784331).gO)(), {
                    itemStores: c,
                    isTruncated: u,
                    isLoading: p
                } = (0, r(572743).z)({
                    sectionType: "shared",
                    sidebarSectionStore: t,
                    explicitItemStores: d ? "newApi" : l
                });
                return (0, i.jsx)(o, {
                    sectionStore: t,
                    sectionType: "shared",
                    itemStores: c,
                    showMoreIfTruncated: u,
                    isLoading: p,
                    emptyState: (0, i.jsx)(r(866284).m, {})
                })
            }

            function m(e) {
                let {
                    sectionType: t
                } = e, n = (0, r(972740).L)(), a = (0, r(177370).l)(), o = (0, r(682985).K8)(() => r(712241).L.fromSpaceStore({
                    spaceIdCreator: a,
                    spaceStore: n,
                    sectionType: t
                }), [a, n, t]);
                switch (t) {
                    case "private":
                        return (0, i.jsx)(c, {
                            sectionStore: o
                        });
                    case "shared":
                        return (0, i.jsx)(p, {
                            sectionStore: o
                        });
                    case "favorites":
                        return (0, i.jsx)(l, {
                            sectionStore: o
                        });
                    case "recents":
                        return (0, i.jsx)(u, {
                            sectionStore: o
                        });
                    case "myMeetings":
                        return (0, i.jsx)(d, {
                            sectionStore: o
                        });
                    default:
                        return null
                }
            }
            r(354520), r(672577), r(581454)
        },
        296031: (e, t, r) => {
            function n(e) {
                var t;
                let n = r(728372).AppStoreCurrentUserSettingsStore.state;
                return n ? null == (t = n.getSettings()) || null == (t = t.checklists) ? void 0 : t[e] : null
            }

            function i(e, t) {
                return r(934289).y[e].steps.map(e => ({
                    id: e.id,
                    completed: e.id in (t ? ? {})
                }))
            }

            function a({
                environment: e,
                checklistId: t,
                stepId: i,
                type: o
            }) {
                let s, l = Object.keys((null == (s = n(t)) ? void 0 : s.completedSteps) ? ? {}).length;
                (0, r(104310).u)({
                    event: {
                        eventName: "checklist_interaction",
                        eventProperties: {
                            checklist_id: t,
                            step_id: i,
                            num_completed_steps: l,
                            type: o
                        }
                    }
                })
            }

            function o(e) {
                return null == e ? e : (null == e ? null : !(null != e && e.completedAt || null != e && e.dismissedAt)) ? e.state : void 0
            }
            r.d(t, {
                KS: () => i,
                af: () => o,
                ik: () => a,
                w6: () => n
            }), r(581454)
        },
        329534: (e, t, r) => {
            r.d(t, {
                y: () => n
            });

            function n() {
                let e = (0, r(972740).L)(),
                    t = (0, r(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    n = (0, r(192159).xz)(t),
                    i = (0, r(682985).K8)(() => r(218744).default.getConfigKey("trial_home_panel_config", "progressBarExperimentStartDate"), []),
                    a = function({
                        billingData: e,
                        spaceId: t
                    }) {
                        let n = (0, r(187041).g)({
                            spaceId: t
                        });
                        return (0, r(682985).K8)(() => {
                            if (!(0, r(824574)._)(e) || !(null != n && n.length)) return !1;
                            let t = (0, r(875472).e8)(n, "trial");
                            return !!(t && (0, r(278662).LV)(t.offer.campaign))
                        }, [e, n])
                    }({
                        billingData: t,
                        spaceId: null == e ? void 0 : e.id
                    }),
                    o = (0, r(682985).K8)(() => {
                        var e;
                        return ((null == (e = r(728372).AppStoreSidebarSpaceViewStore.state) || null == (e = e.getSettings()) ? void 0 : e.business_trial_home_dismissed_at) ? ? 0) > 0
                    }, []);
                return (0, r(682985).K8)(() => {
                    var e;
                    if (o || !(0, r(824574)._)(t)) return;
                    let s = null == (e = r(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.post_onboarding_agent_config;
                    if (null != s && s.thread_id && (0, r(596244).B)(s) && s.has_user_responded || !n || n < r(906745).DateTime.fromISO(i)) return;
                    if (a) {
                        let e = r(218744).default.getEligibleGroup({
                            experimentId: "progress_bar_onboarding",
                            defaultGroup: r(218745).STATSIG_DEFAULT_GROUP
                        });
                        return "old_trial_home" === e || "new_trial_home" === e ? e : void 0
                    }
                    let l = r(218744).default.getEligibleGroup({
                        experimentId: "progress_bar_trial_home",
                        defaultGroup: r(218745).STATSIG_DEFAULT_GROUP
                    });
                    if ("old_trial_home" === l || "new_trial_home" === l) return l;
                    let d = r(218744).default.getEligibleGroup({
                        experimentId: "progress_bar_trial_dog",
                        defaultGroup: r(218745).STATSIG_DEFAULT_GROUP
                    });
                    if ("old_trial_home" === d || "new_trial_home" === d) return d
                }, [o, t, n, i, a])
            }
        },
        346813: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            let n = new(r(815048)).O2("CloseSharedSectionButton", async () => {
                    let {
                        CloseSharedSectionButton: e
                    } = await r.e(84605).then(r.bind(r, 249567));
                    return {
                        CloseSharedSectionButton: e
                    }
                }),
                i = (0, r(815048)._h)(n, e => e.CloseSharedSectionButton)
        },
        354158: (e, t, r) => {
            r.d(t, {
                q: () => i
            });
            var n = r(296540);

            function i(e) {
                let {
                    openState: t,
                    completedSteps: i,
                    completedAt: a,
                    dismissedAt: o
                } = (0, r(682985).K8)(() => {
                    let t = (0, r(296031).w6)(e);
                    return {
                        openState: (0, r(296031).af)(t),
                        completedSteps: null == t ? void 0 : t.completedSteps,
                        completedAt: null == t ? void 0 : t.completedAt,
                        dismissedAt: null == t ? void 0 : t.dismissedAt
                    }
                }, [e]);
                return {
                    state: t,
                    steps: (0, n.useMemo)(() => (0, r(296031).KS)(e, i), [e, i]),
                    completedAt: a,
                    dismissedAt: o
                }
            }
        },
        356164: (e, t, r) => {
            r.d(t, {
                VV: () => o,
                WE: () => d,
                cO: () => u,
                eh: () => c,
                fE: () => s,
                hX: () => l,
                jH: () => p,
                vH: () => a
            }), r(898992), r(430670);
            let n = (0, r(109939).YK)({
                leftTeam: {
                    id: "teamPermissionsActions.leftTeam",
                    defaultMessage: "Left {teamName}"
                },
                leftTeamNoName: {
                    id: "teamPermissionsActions.leftTeamNoName",
                    defaultMessage: "Left teamspace"
                },
                leftYetStillInTeam: {
                    id: "teamPermissionsActions.leftYetStillInTeam",
                    defaultMessage: "You are still in {hasTeamName, select, true {{teamName}} other {the teamspace}} because you are a member of the following groups: {groupsString}"
                },
                removedYetStillInTeam: {
                    id: "teamPermissionsActions.removedYetStillInTeam",
                    defaultMessage: "{hasMemberName, select, true {{memberName}} other {The removed user}} is still in {hasTeamName, select, true {{teamName}} other {the teamspace}} because they are a member of the following groups: {groupsString}"
                },
                joinedTeam: {
                    id: "teamPermissionsActions.joinedTeam",
                    defaultMessage: "Joined {teamName}"
                },
                joinedTeamUsingAdminPrivileges: {
                    id: "teamPermissionsActions.joinedTeamUsingAdminPrivileges",
                    defaultMessage: "Joined {teamName} using admin privileges"
                },
                upgradedSelfToOwner: {
                    id: "teamPermissionsActions.upgradedSelfToOwnerUsingAdminPrivileges",
                    defaultMessage: "Became owner of {teamName} using admin privileges"
                },
                archivedTeam: {
                    id: "teamPermissionsActions.archivedTeam",
                    defaultMessage: "Archived {teamName}"
                },
                restoredTeam: {
                    id: "teamPermissionsActions.restoredTeam",
                    defaultMessage: "Restored {teamName}"
                },
                restoredTeamNoName: {
                    id: "teamPermissionsActions.restoredTeamNoName",
                    defaultMessage: "Restored teamspace"
                },
                duplicatedTeam: {
                    id: "teamPermissionsActions.duplicatedTeam",
                    defaultMessage: "Duplicated {teamName}"
                },
                duplicatedTeamNoName: {
                    id: "teamPermissionsActions.duplicatedTeamNoName",
                    defaultMessage: "Duplicated teamspace"
                }
            });

            function i(e, t, n) {
                let i = r(962299).A.formatMessage(e, { ...t
                });
                r(436555).D6({
                    label: i,
                    durationMs: n
                })
            }

            function a(e) {
                return i(n.upgradedSelfToOwner, {
                    teamName: e
                })
            }

            function o({
                teamName: e,
                usingAdminPrivileges: t
            }) {
                return i(t ? n.joinedTeamUsingAdminPrivileges : n.joinedTeam, {
                    teamName: e
                })
            }

            function s(e) {
                return e ? i(n.leftTeam, {
                    teamName: e
                }) : i(n.leftTeamNoName)
            }

            function l(e, t) {
                let a = (0, r(890142).l)(t.flatMap(e => e.name || []));
                i(n.leftYetStillInTeam, {
                    hasTeamName: void 0 !== e,
                    teamName: e,
                    groupsString: a
                }, r(441742).LX)
            }

            function d(e, t, a) {
                let o = (0, r(890142).l)(a.flatMap(e => e.name || []));
                i(n.removedYetStillInTeam, {
                    hasMemberName: void 0 !== e,
                    hasTeamName: void 0 !== t,
                    memberName: e,
                    teamName: t,
                    groupsString: o
                }, r(441742).LX)
            }

            function c(e) {
                return i(n.archivedTeam, {
                    teamName: e
                })
            }

            function u(e) {
                return e ? i(n.restoredTeam, {
                    teamName: e
                }) : i(n.restoredTeamNoName)
            }

            function p(e) {
                return e ? i(n.duplicatedTeam, {
                    teamName: e
                }) : i(n.duplicatedTeamNoName)
            }
        },
        368891: (e, t, r) => {
            r.d(t, {
                g: () => n
            });

            function n() {
                return (0, r(682985).O$)(r(728372).AppStoreCurrentUserSettingsStore)
            }
        },
        437188: (e, t, r) => {
            r.d(t, {
                A: () => i
            }), r(296540);
            var n = r(474848);
            let i = function({
                collectionViewName: e,
                collectionViewType: t
            }) {
                return e ? (0, n.jsx)(r(93594).A, {
                    children: e
                }) : "page" === t ? (0, n.jsx)(r(109939).sA, {
                    id: "database.collectionView.untitledName.untitled",
                    defaultMessage: "Untitled"
                }) : (0, n.jsx)(r(109939).sA, { ...r(4587).X[t]
                })
            }
        },
        438390: (e, t, r) => {
            r.d(t, {
                K: () => n
            });
            let n = (0, r(815048)._h)(new(r(815048)).O2("AgentsSectionOutliner", async () => await Promise.all([r.e(40994), r.e(96579), r.e(16922), r.e(31190), r.e(20491), r.e(99430)]).then(r.bind(r, 398035))), e => e.AgentsSectionOutliner)
        },
        458196: (e, t, r) => {
            r.d(t, {
                V: () => n
            });

            function n({
                isExpanded: e,
                isFullScreenDesktop: t,
                isShowingTabBar: r,
                isElectron: i
            }) {
                return !r && function({
                    isExpanded: e,
                    isFullScreenDesktop: t,
                    isElectron: r
                }) {
                    return r && e && !t
                }({
                    isExpanded: e,
                    isFullScreenDesktop: t,
                    isElectron: i
                })
            }
        },
        472362: (e, t, r) => {
            r.d(t, {
                p: () => l
            });
            var n = r(296540);
            let i = new(r(815048)).O2("SecondSessionDatabaseLearningController", async () => await r.e(27476).then(r.bind(r, 321970))),
                a = (0, r(815048)._h)(i, e => e.SecondSessionDatabaseLearningController);
            var o = r(474848);
            let s = {
                dropTarget: {
                    width: "100%"
                },
                style0: {
                    marginBottom: r(615096).kv
                }
            };

            function l(e) {
                let {
                    addButtonOverride: t,
                    handleCanAcceptDrop: i,
                    handleDropOntoPrivateSection: a,
                    lastEditedSortedPrivateSection: l,
                    currentSpaceStore: c,
                    currentSpaceViewStore: u,
                    isTransactionQueueHealthy: p,
                    showPrivateOverflowButton: m
                } = e, g = (0, r(533992).v3)(), S = (0, r(917441).Rx)(), h = (0, n.useCallback)(e => {
                    (0, r(477810).ZT)({
                        environment: g,
                        contentType: "private_pages"
                    }), r(707964).u4({
                        name: "panel_opened",
                        args: {
                            type: "private"
                        }
                    })
                }, [g]);
                if (!S) return null;
                let f = !!(!t && S.showPrivateSection && p);
                return (0, o.jsx)(d, {
                    children: (0, o.jsx)(r(634944).Tl, {
                        dropTargetKey: "Outliner-private",
                        canDropOnto: !0,
                        canDropBelow: !1,
                        canAcceptDrop: i,
                        onSelectableDrop: a,
                        shouldShowDropZone: l,
                        style: s.dropTarget,
                        dropzoneStyle: s.style0,
                        children: (0, o.jsx)(r(615096).ty, {
                            type: "private",
                            from: "main_sidebar",
                            shouldPersistToggleState: !0,
                            spaceStore: c,
                            spaceViewStore: u,
                            showAddButton: f,
                            outlinerToggleButtonStore: r(988025).x,
                            labelTooltip: (0, o.jsx)(r(109939).sA, {
                                defaultMessage: "Pages you created that are not in any teamspace.",
                                id: "sidebar.privatePagesSection.tooltip"
                            }),
                            right: (0, o.jsxs)(o.Fragment, {
                                children: [u ? (0, o.jsx)(r(69371).N, {
                                    type: "private",
                                    spaceViewStore: u
                                }) : null, t]
                            }),
                            renderSidebar: ({
                                labelAriaId: e,
                                contentsAriaId: t
                            }) => (0, o.jsxs)(r(4458).VP, {
                                gap: 1,
                                width: "100%",
                                children: [(0, o.jsx)(r(837764).W, {
                                    type: "private",
                                    sidebarState: S,
                                    contentsAriaId: t,
                                    labelAriaId: e
                                }), m ? (0, o.jsx)(r(540048).H, {
                                    onClick: h,
                                    tooltipMessage: (0, o.jsx)(r(109939).sA, {
                                        defaultMessage: "All private pages",
                                        id: "sidebar.openAllPrivatePages.tooltip"
                                    }),
                                    sidebarSectionType: "private"
                                }) : void 0]
                            })
                        })
                    })
                })
            }

            function d(e) {
                let t = (0, r(682985).K8)(() => r(696190).default.isVisible("adoption_nux_second_session_database_learning_tooltip"), []),
                    n = (0, r(718012).V)(),
                    i = (0, r(153223).u)();
                return t ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(a, {}), (0, o.jsx)(r(24884).n, {
                        step: "private",
                        inAppCalloutStore: n,
                        teamIds: i,
                        renderTooltip: e => (0, o.jsx)(r(715539).Su, { ...e
                        }),
                        children: e.children
                    })]
                }) : (0, o.jsx)(r(24884).n, {
                    step: "private",
                    inAppCalloutStore: n,
                    teamIds: i,
                    renderTooltip: e => (0, o.jsx)(r(715539).Su, { ...e
                    }),
                    children: e.children
                })
            }
        },
        525887: (e, t, r) => {
            r.d(t, {
                F: () => a
            }), r(296540);
            var n = r(474848);
            let i = {
                unexpand: {
                    borderRadius: 6,
                    width: 24,
                    height: 24
                },
                hoveredUnexpand: {
                    fill: r(632079).Tj.text.primary,
                    background: r(632079).Tj.sidebarItemSelectedBackground
                }
            };

            function a({}) {
                var e;
                let {
                    isElectronMac: t
                } = (0, r(533992).Y0)(), o = (e = t, (0, r(960253).I)(() => ({
                    container: {
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        paddingInlineEnd: 10,
                        height: (0, r(801113).ek)(e)
                    }
                }), [e]));
                return (0, n.jsx)("div", {
                    style: o.container,
                    className: r(828432).sbV,
                    children: (0, n.jsx)("div", {
                        className: r(828432).qGl,
                        children: (0, n.jsx)(r(405907).I, {
                            style: i.unexpand,
                            hoveredStyle: i.hoveredUnexpand
                        })
                    })
                })
            }
        },
        539487: (e, t, r) => {
            r.d(t, {
                $: () => n
            });
            async function n(e) {
                let {
                    environment: t,
                    sidebarSectionStore: n
                } = e;
                if (await n.load(), !n.isDefined()) return;
                let i = n.getSpaceId(),
                    a = await t.api.callCellCompatibleApi({
                        eventName: "getSidebarSectionItems",
                        environment: t,
                        data: {
                            spaceId: i,
                            sectionId: n.id
                        },
                        cellNavigation: {
                            spaceId: i
                        }
                    });
                if ("success" !== a.type || !a.data || !a.data.inGate) return;
                let o = a.data.truncatedBlockIds,
                    s = a.data.hasMore;
                (0, r(465221).$)(n.pointer).setState({
                    visibleBlockIds: o,
                    hasMore: s
                })
            }
        },
        540048: (e, t, r) => {
            r.d(t, {
                H: () => l
            });
            var n = r(296540);
            let i = (0, r(815048)._h)(new(r(815048)).O2("SlipperySlopeFlyoutMenu", async () => await Promise.all([r.e(40994), r.e(96579), r.e(16922), r.e(20491), r.e(10469), r.e(76440)]).then(r.bind(r, 49075))), e => e.SlipperySlopeFlyoutMenu),
                a = ["favorites", "private", "shared", "agents", "teamspaces", "recents"];
            var o = r(474848);
            let s = {
                button: { ...r(153262).hG,
                    height: r(132261).Zr
                },
                buttonHovered: {
                    background: r(632079).Tj.sidebarItemSelectedBackground
                },
                sidebarItem: {
                    fontWeight: r(699422).Wy.medium,
                    color: r(632079).Tj.sidebarSecondaryColor
                }
            };

            function l(e) {
                let {
                    onClick: t,
                    tooltipMessage: l,
                    label: d,
                    icon: c,
                    sidebarSectionType: u
                } = e, p = (0, r(665002).g)(), m = (0, r(784331).qX)() && !!(0, r(722371).Xk)(a, u), g = (0, n.useCallback)(e => {
                    m || t(e)
                }, [t, m]), S = (0, n.useCallback)(e => (0, o.jsx)(r(51831).m, {
                    content: () => l,
                    originGap: 6,
                    placement: "right",
                    children: t => (0, o.jsx)(r(64960).Ay, {
                        onClick: g,
                        style: { ...s.button,
                            ...p && {
                                transition: "none"
                            }
                        },
                        hoveredStyle: s.buttonHovered,
                        ...(0, r(63390).A)(t, e ? ? {}),
                        children: (0, o.jsx)(r(380559).u, {
                            left: (0, o.jsx)(r(16275).I, {
                                icon: c ? ? r(361226).ellipsisSmallIcon,
                                size: "sm",
                                colorVariant: r(986939).A.isMobile ? "tertiary" : "secondary"
                            }),
                            childrenStyle: s.sidebarItem,
                            children: d ? ? (0, o.jsx)(r(109939).sA, {
                                defaultMessage: "More",
                                id: "sidebar.openAllPages.button"
                            })
                        })
                    })
                }), [l, g, p, d, c]);
                return m ? (0, o.jsx)(r(656252).A, {
                    content: e => (0, o.jsx)(r(109337).m, {
                        value: {
                            onClose: e.close
                        },
                        children: (0, o.jsx)(i, {
                            sidebarSectionType: u
                        })
                    }),
                    popupType: r(182718).nl.Popup,
                    placementToOrigin: "right",
                    alignmentToOrigin: "start",
                    originGap: 16,
                    preventScaleTransition: !0,
                    children: e => S(e)
                }) : S()
            }
        },
        541341: (e, t, r) => {
            r.d(t, {
                j: () => a
            }), r(296540);
            var n = r(474848);
            let i = {
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                gap: 6
            };

            function a(e) {
                let {
                    type: t,
                    withSelectedStyle: a,
                    style: o,
                    shouldUseStyledText: s,
                    shouldAlwaysShowAccessLevelTooltip: l
                } = e, {
                    teamName: d,
                    accessLevel: c
                } = (0, r(682985).K8)(() => {
                    if ("teamStore" === t) {
                        var n;
                        let t = e.teamStore,
                            i = null == (n = t.getSettingsStore()) ? void 0 : n.getValue();
                        return {
                            teamName: t.getName() ? ? "",
                            accessLevel: i ? (0, r(422280).MA)(i) : void 0
                        }
                    }
                    if ("teamMetadata" === t) {
                        let t = e.teamMetadata;
                        return {
                            teamName: t.title,
                            accessLevel: t.accessLevel
                        }
                    }(0, r(722371).HB)(t)
                }, [t, e.teamStore, e.teamMetadata]), u = (0, r(960253).I)(() => ({
                    labelText: { ...r(699422).RC,
                        color: a ? r(632079).Tj.text.primary : r(632079).Tj.text.accentPrimary,
                        fontWeight: r(699422).Wy.medium,
                        fontSize: r(418676).vQ,
                        ...o
                    }
                }), [a, o]);
                return (0, n.jsxs)("div", {
                    style: i,
                    children: [s ? (0, n.jsx)(r(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "primary",
                        children: d
                    }) : (0, n.jsx)("div", {
                        style: u.labelText,
                        children: d
                    }), "private" === c || l ? (0, r(729869).Q)(c) : void 0]
                })
            }
        },
        541660: (e, t, r) => {
            r.d(t, {
                x: () => n
            });

            function n({
                environment: e,
                store: t,
                type: i
            }) {
                let a;
                switch (i) {
                    case "bookmarks":
                        a = r(981324).ig.Favorite;
                        break;
                    case "team":
                    case "workspace":
                    case "shared":
                    case "private":
                    case "myMeetings":
                    case "agents":
                    case "notion_apps":
                    case "meetings_today":
                    case "recents":
                    case r(171231).sx:
                    case r(171231).tJ:
                    case r(171231).qe:
                    case r(171231).Vf:
                        a = r(981324).ig.Link;
                        break;
                    default:
                        (0, r(722371).HB)(i)
                }
                r(715265).A.recordVisit({
                    id: t.id,
                    systemBlockType: t.getSystemBlockTypeStore().getValue(),
                    type: a,
                    currentUserId: e.currentUser.id
                })
            }
        },
        541949: (e, t, r) => {
            r.r(t), r.d(t, {
                NotionAppsSection: () => p
            }), r(944114), r(898992), r(354520);
            var n = r(296540);
            let i = new(r(815048)).O2("NotionAppsCalendarItem", async () => await Promise.all([r.e(75134), r.e(87971), r.e(55067), r.e(5309), r.e(16459)]).then(r.bind(r, 820424))),
                a = (0, r(815048)._h)(i, e => e.NotionAppsCalendarItem),
                o = new(r(815048)).O2("NotionAppsDesktopItem", async () => await r.e(59593).then(r.bind(r, 423622))),
                s = (0, r(815048)._h)(o, e => e.NotionAppsDesktopItem),
                l = new(r(815048)).O2("NotionAppsMailItem", async () => await r.e(39916).then(r.bind(r, 78407))),
                d = (0, r(815048)._h)(l, e => e.NotionAppsMailItem);
            var c = r(474848);
            let u = {
                width: "100%"
            };

            function p() {
                let {
                    desktopTargetPlatform: e,
                    isDesktopBrowser: t
                } = (0, r(533992).Y0)(), i = (0, r(533992).v3)(), o = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), l = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceViewStore), p = (0, r(917441).a$)(), m = (0, r(682985).K8)(() => {
                    var e;
                    return (null == (e = p.getState()) ? void 0 : e.visibleNotionApps) ? ? []
                }, [p]), g = (0, r(682985).K8)(() => {
                    var e;
                    return (null == (e = p.getState()) ? void 0 : e.showNotionAppsSection) ? ? !1
                }, [p]);
                (0, r(624467).m)();
                let {
                    isMailUser: S,
                    checkMailUser: h
                } = (0, r(148777).g)(), {
                    isNotionMailDisabled: f
                } = (0, r(717885).a)({
                    environment: i
                }), v = "msStore" !== e && !f, b = (0, r(682985).O$)(r(17118).l), y = (0, r(682985).K8)(() => (0, r(3161).m)(i, o), [i, o]), _ = (0, r(83208).X)("adoption_sidebar_footer_revamp"), w = (0, n.useMemo)(() => m.filter(e => {
                    switch (e) {
                        case "mail":
                            return v;
                        case "calendar":
                            return y;
                        case "desktop":
                            return t;
                        default:
                            return !1
                    }
                }), [m, v, y, t]), x = (0, n.useCallback)(e => {
                    r(552013).G6({
                        environment: i,
                        notionApps: e
                    })
                }, [i]), T = (0, n.useCallback)(e => {
                    switch (e) {
                        case "mail":
                            return v ? (0, c.jsx)(d, {
                                isMailUser: S
                            }) : null;
                        case "calendar":
                            return y ? (0, c.jsx)(a, {}) : null;
                        case "desktop":
                            return t ? (0, c.jsx)(s, {}) : null;
                        default:
                            return null
                    }
                }, [v, y, t, S]), A = (0, n.useCallback)(async e => {
                    let t = [h];
                    null === b && t.push(() => (0, r(126592).e)(i)), await (0, r(975162).lX)(t, 10, async e => {
                        await e()
                    })
                }, [i, b, h]);
                return _ && g && (y || v) ? (0, c.jsx)(r(959526).s, {
                    type: "notion_apps",
                    content: (0, c.jsx)(r(615096).ty, {
                        type: "notion_apps",
                        showAddButton: !1,
                        from: "main_sidebar",
                        spaceStore: o,
                        spaceViewStore: l,
                        shouldPersistToggleState: !0,
                        outlinerToggleButtonStore: r(30616).D,
                        right: l ? (0, c.jsx)(r(69371).N, {
                            type: "notion_apps",
                            spaceViewStore: l
                        }) : null,
                        renderSidebar: ({
                            labelAriaId: e,
                            contentsAriaId: t
                        }) => (0, c.jsx)(r(4458).VP, {
                            gap: 1,
                            width: "100%",
                            onMouseEnter: A,
                            children: (0, c.jsx)(r(66467).Ay, {
                                keys: w,
                                direction: "vertical",
                                onDrop: e => x(e),
                                renderKey: e => {
                                    if ("mail" !== e && "calendar" !== e && "desktop" !== e) return null;
                                    let t = T(e);
                                    return t ? (0, c.jsx)("div", {
                                        style: u,
                                        children: t
                                    }, e) : null
                                },
                                gap: 2
                            })
                        })
                    })
                }) : null
            }
        },
        553164: (e, t, r) => {
            r.d(t, {
                Q: () => c
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(581454);
            var n = r(296540);
            r(944114), r(898992), r(803949);
            var i = () => r(280854);
            class a extends i().O {
                findTeamOutlinerItemsFromId(e) {
                    let t = [];
                    return this.forEach(r => {
                        r.teamId === e && t.push(r)
                    }), t
                }
            }
            let o = new a;
            var s = r(474848);
            let l = {
                emptyPlaceholder: {
                    color: r(632079).Tj.text.tertiary,
                    paddingInlineStart: 29,
                    ...!r(986939).A.isMobile && {
                        fontSize: 14
                    },
                    ...r(986939).A.isMobile && {
                        display: "flex",
                        alignItems: "center",
                        height: 32
                    },
                    display: "flex",
                    alignItems: "center"
                },
                addPageButtonText: {
                    color: r(632079).Tj.sidebarSecondaryColor
                },
                addPageButton: {
                    borderRadius: 6,
                    paddingInlineStart: r(986939).A.isMobile ? r(393658).RD : r(393658).Hc,
                    height: r(132261).Zr
                },
                addPageButtonHovered: {
                    background: r(632079).Tj.sidebarItemSelectedBackground
                },
                tooltip: {
                    width: "204px"
                }
            };

            function d({
                teamStore: e,
                numTeamPages: t,
                sidebarSpaceStore: i
            }) {
                let a = (0, r(533992).v3)(),
                    o = (0, r(876252).$)(),
                    c = (0, r(682985).K8)(() => e.canAddOrRemoveTopLevelPages(), [e]),
                    u = (0, r(682985).K8)(() => (0, r(194020).E)(a, i), [a, i]),
                    p = (0, r(682985).K8)(() => {
                        if (!o || !i) return !1;
                        let t = (0, r(993077).dp)(i, o.id).getModel();
                        return function(e) {
                            let {
                                teamStore: t,
                                userId: n,
                                userPermissionGroups: i,
                                spaceUser: a
                            } = e, o = (0, r(228091).a)({
                                teamStore: t,
                                userId: n,
                                userPermissionGroups: i,
                                spaceUser: a
                            });
                            switch (o) {
                                case "owner":
                                case "member":
                                case "team_level_guest":
                                    return !0;
                                case "none":
                                case void 0:
                                    if (a && (0, r(729052).MN)(a.membership_type)) return (0, r(642157).Tt)(t.getSpacePermissionRole());
                                    return !1;
                                default:
                                    (0, r(722371).HB)(o)
                            }
                        }({
                            teamStore: e,
                            userId: o.id,
                            userPermissionGroups: r(68809).f.getSpacePermissionGroupIds({
                                spaceId: i.id
                            }),
                            spaceUser: t
                        })
                    }, [e, o, i]),
                    m = t <= r(393658).iC,
                    g = m && c && u;
                (0, n.useEffect)(() => {
                    g && r(903673).O.load()
                }, [g]);
                let S = (0, n.useCallback)(async () => {
                    let t = r(728372).AppStoreSidebarSpaceStore.state,
                        n = r(728372).AppStoreSidebarSpaceViewStore.state;
                    if (t && n) {
                        if (!r(986939).A.isMobile) {
                            let {
                                openTemplateOnboardingModal: t,
                                getTemplateOnboardingVersion: n
                            } = await r(903673).O.load();
                            t({
                                origin: "sidebar_team_section_empty_state",
                                parentStore: e,
                                template: void 0,
                                version: n({
                                    template: void 0
                                })
                            });
                            return
                        }(0, r(675062).A)({
                            environment: a,
                            from: "sidebar_team_section_empty_state",
                            spaceStore: t,
                            spaceViewStore: n,
                            teamStore: e,
                            andNavigate: !0,
                            appendOrPrepend: "append"
                        })
                    }
                }, [a, e]);
                return m && (c || !(t > 0)) ? c ? (0, s.jsx)(r(51831).m, {
                    textWrap: !0,
                    content: () => (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            children: (0, s.jsx)(r(109939).sA, {
                                defaultMessage: "You’ve used up your free blocks.",
                                id: "teamOutliner.disabledTooltipUpper"
                            })
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)(r(109939).sA, {
                                defaultMessage: "Upgrade to add a new page.",
                                id: "teamOutliner.disabledTooltipLower"
                            })
                        })]
                    }),
                    placement: "bottom",
                    style: l.tooltip,
                    disableTooltip: u,
                    children: e => (0, s.jsx)(r(64960).Ay, {
                        onClick: S,
                        style: l.addPageButton,
                        hoveredStyle: l.addPageButtonHovered,
                        disabled: !u,
                        ...e,
                        children: (0, s.jsx)(r(380559).u, {
                            style: l.addPageButtonText,
                            disableMobileBorder: !0,
                            left: (0, s.jsx)(r(4458).fI, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: (0, s.jsx)(r(16275).I, {
                                    icon: r(638501).plusSmallIcon,
                                    size: "sm",
                                    colorVariant: r(986939).A.isMobile ? "tertiary" : "secondary"
                                })
                            }),
                            children: (0, s.jsx)(r(109939).sA, {
                                id: "teamOutlinerEmptyState.addNew",
                                defaultMessage: "Add new"
                            })
                        })
                    })
                }) : (0, s.jsx)(r(380559).u, {
                    disableMobileBorder: !0,
                    children: (0, s.jsx)("div", {
                        style: l.emptyPlaceholder,
                        children: (0, s.jsx)("span", {
                            children: (() => {
                                if (o)
                                    if (!p) return (0, s.jsx)(r(109939).sA, {
                                        defaultMessage: "No access",
                                        id: "teamOutliner.noOverflowEmptyMessage.noViewPermission"
                                    });
                                    else if (0 === t) return (0, s.jsx)(r(109939).sA, {
                                    defaultMessage: "No pages inside",
                                    id: "teamOutliner.noOverflowEmptyMessage"
                                });
                                else return
                            })()
                        })
                    })
                }) : null
            }

            function c({
                teamStore: e,
                sidebarState: t,
                isLastTeam: n,
                initialToggleState: i,
                shouldPersistToggleState: a,
                customToggleStore: l,
                teamOutlinerType: p,
                onNavigate: m,
                sidebarTourStep: g,
                from: S
            }) {
                let h = (0, r(718012).V)(),
                    f = (0, r(153223).u)(),
                    {
                        sidebarSpaceStore: v,
                        sidebarSpaceViewStore: b
                    } = (0, r(682985).K8)(() => ({
                        sidebarSpaceStore: r(728372).AppStoreSidebarSpaceStore.state,
                        sidebarSpaceViewStore: r(728372).AppStoreSidebarSpaceViewStore.state
                    }), []),
                    y = (0, r(682985).uB)(void 0, r(742112).I),
                    _ = l ? ? y;
                (0, r(336494).b)(o, () => ({
                    teamId: e.id,
                    setIsOpen: e => _.update(t => ({ ...t,
                        isHidden: !e
                    }))
                }), [e, _]);
                let w = (0, r(83208).X)("team_feed_as_any_other_db"),
                    x = (0, r(682985).K8)(() => (0, r(709633).O)({
                        teamStore: e,
                        includeTeamHomeFeed: w
                    }), [e, w]),
                    T = (0, r(722385).w)(e.id),
                    A = (0, r(682985).K8)(() => !r(986939).A.isMobile && T && _.state.isHidden, [T, _]);
                return (0, s.jsx)(r(615096).ty, {
                    type: "team",
                    from: "main_sidebar",
                    outlinerToggleButtonStore: _,
                    forceHoveredButtonStyle: A,
                    initialToggleState: i,
                    shouldPersistToggleState: a,
                    teamHeaderLabel: (0, s.jsx)(r(541341).j, {
                        type: "teamStore",
                        teamStore: e,
                        withSelectedStyle: A,
                        shouldAlwaysShowAccessLevelTooltip: "secondary_sidebar" === S
                    }),
                    teamStore: e,
                    spaceStore: v,
                    spaceViewStore: b,
                    showAddButton: !1,
                    isLastTeam: n,
                    teamOutlinerType: p,
                    labelTooltip: (0, s.jsx)(r(109939).sA, {
                        defaultMessage: "One of your teams",
                        id: "sidebar.teamSection.tooltip"
                    }),
                    marginBottomOverrideWhenExpanded: 16 * !r(986939).A.isMobile,
                    marginBottomOverrideWhenCollapsed: +!r(986939).A.isMobile,
                    renderSidebar: ({
                        labelAriaId: n,
                        contentsAriaId: i
                    }) => {
                        if (!e) return;
                        let a = new Set(x.map(e => e.id)),
                            o = (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(u, {
                                    teamSectionType: p,
                                    sidebarState: t,
                                    teamStore: e,
                                    onNavigate: m,
                                    labelAriaId: n,
                                    contentsAriaId: i,
                                    from: S
                                }), (0, s.jsx)(d, {
                                    numTeamPages: a.size,
                                    teamStore: e,
                                    sidebarSpaceStore: v
                                })]
                            });
                        return g ? (0, s.jsx)(r(24884).n, {
                            step: g,
                            inAppCalloutStore: h,
                            teamIds: f,
                            renderTooltip: e => (0, s.jsx)(r(715539).Lm, { ...e
                            }),
                            children: o
                        }) : o
                    }
                })
            }
            let u = n.memo(function(e) {
                let {
                    teamSectionType: t,
                    teamStore: i,
                    sidebarState: a,
                    contentsAriaId: o,
                    onNavigate: l,
                    labelAriaId: d,
                    from: c
                } = e, u = (0, n.useMemo)(() => ({
                    type: "team",
                    teamSectionType: t,
                    teamStore: i
                }), [t, i]), p = (0, n.useMemo)(() => ({
                    id: o,
                    "aria-labelledby": d
                }), [o, d]);
                return (0, s.jsx)(r(837764).o, {
                    outlinerTypeWithTeam: u,
                    sidebarState: a,
                    onNavigate: l,
                    additionalOutlinerProps: p,
                    from: c
                })
            })
        },
        553608: (e, t, r) => {
            r.d(t, {
                C8: () => u,
                Dz: () => s,
                GC: () => m,
                GL: () => g,
                YY: () => p,
                dM: () => d,
                h9: () => l,
                jX: () => o,
                oF: () => c,
                uj: () => a
            });
            let n = {
                    JiraSyncInfoPopup: new(r(815048)).O2("JiraSyncInfoPopup", async () => await Promise.all([r.e(75134), r.e(68744)]).then(r.bind(r, 295597))),
                    ImproveJiraSyncPopup: new(r(815048)).O2("ImproveJiraSyncPopup", async () => await Promise.all([r.e(75134), r.e(2686)]).then(r.bind(r, 473119))),
                    JiraDCAuthModal: new(r(815048)).O2("JiraDCAuthModal", async () => await Promise.all([r.e(75134), r.e(17250), r.e(56809), r.e(28763)]).then(r.bind(r, 190229))),
                    ExternalImportAndSyncIndicator: new(r(815048)).O2("ExternalImportAndSyncIndicator", async () => await Promise.all([r.e(75134), r.e(98288)]).then(r.bind(r, 292460))),
                    JiraSyncedAllProjectsTooltip: new(r(815048)).O2("JiraSyncedAllProjectsTooltip", async () => await r.e(21446).then(r.bind(r, 417580))),
                    JiraSyncedAllIssuesTooltip: new(r(815048)).O2("JiraSyncedAllIssuesTooltip", async () => await r.e(21446).then(r.bind(r, 417580))),
                    JiraSyncedDatabaseViewsAndFiltersTooltip: new(r(815048)).O2("JiraSyncedDatabaseViewsAndFiltersTooltip", async () => await r.e(21446).then(r.bind(r, 417580))),
                    JiraSyncSourceTooltip: new(r(815048)).O2("JiraSyncSourceTooltip", async () => await r.e(21446).then(r.bind(r, 417580))),
                    JiraSyncedSettingsToSetupProjectsAndIssuesTooltip: new(r(815048)).O2("JiraSyncedSettingsToSetupProjectsAndIssuesTooltip", async () => await r.e(21446).then(r.bind(r, 417580)))
                },
                i = {
                    JiraSyncTeamSpaceModal: new(r(815048)).O2("JiraSyncTeamSpaceModal", async () => Promise.all([r.e(75134), r.e(40994), r.e(80139), r.e(17250), r.e(28048), r.e(55940), r.e(12560), r.e(33503), r.e(21969), r.e(74145), r.e(56809), r.e(48860), r.e(18682), r.e(79349), r.e(47414), r.e(96579), r.e(21753), r.e(9817), r.e(29447), r.e(75189), r.e(41075), r.e(56188)]).then(r.bind(r, 76948)))
                },
                a = (0, r(815048)._h)(i.JiraSyncTeamSpaceModal, e => e.default),
                o = (0, r(815048)._h)(n.JiraSyncedAllProjectsTooltip, e => e.JiraSyncedAllProjectsTooltip),
                s = (0, r(815048)._h)(n.JiraDCAuthModal, e => e.default),
                l = (0, r(815048)._h)(n.JiraSyncedAllIssuesTooltip, e => e.JiraSyncedAllIssuesTooltip),
                d = (0, r(815048)._h)(n.JiraSyncedDatabaseViewsAndFiltersTooltip, e => e.JiraSyncedDatabaseViewsAndFiltersTooltip),
                c = (0, r(815048)._h)(n.JiraSyncedSettingsToSetupProjectsAndIssuesTooltip, e => e.JiraSyncedSettingsToSetupProjectsAndIssuesTooltip),
                u = (0, r(815048)._h)(n.JiraSyncSourceTooltip, e => e.JiraSyncSourceTooltip),
                p = (0, r(815048)._h)(n.JiraSyncInfoPopup, e => e.JiraSyncInfoPopup),
                m = (0, r(815048)._h)(n.ImproveJiraSyncPopup, e => e.ImproveJiraSyncPopup),
                g = (0, r(815048)._h)(n.ExternalImportAndSyncIndicator, e => e.ExternalImportAndSyncIndicator)
        },
        553635: (e, t, r) => {
            r.d(t, {
                t3: () => o,
                sD: () => s,
                VD: () => l
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            var n = r(296540);
            let i = "ai_meetings_notes_custom_instructions",
                a = new Set;

            function o(e = {}) {
                return "on" === function(e = {}) {
                    return r(218744).default.getEligibleGroup({
                        experimentId: i,
                        defaultGroup: "control",
                        disableExposureLogging: e.disableExposureLogging ? ? !0
                    })
                }(e)
            }

            function s(e = {}) {
                return "on" === function(e = {}) {
                    return (0, r(604306).r)(i, {
                        disableExposureLogging: e.disableExposureLogging ? ? !0
                    })
                }(e)
            }

            function l(e) {
                let {
                    blockId: t,
                    shouldLog: o
                } = e;
                (0, n.useEffect)(() => {
                    !o || a.has(t) || (a.add(t), r(218744).default.manuallyLogExperimentExposure(i))
                }, [t, o])
            }
        },
        572743: (e, t, r) => {
            r.d(t, {
                z: () => o
            }), r(898992), r(823215), r(581454);
            let n = new Map;
            var i = r(296540);
            let a = ["private", "shared", "myMeetings"];

            function o(e) {
                let {
                    sectionType: t,
                    sidebarSectionStore: o,
                    explicitItemStores: s,
                    overrideFlag: l
                } = e, d = (0, r(533992).v3)(), c = (0, r(723240).r)(), u = (0, r(345776).T)(), p = (0, r(476743).a)(), m = (0, r(961696).H)(), g = (0, r(917441).a$)(), S = (0, r(682985).K8)(() => {
                    let e = g.getState(),
                        t = null == o ? void 0 : o.getSectionType();
                    if (e && t && p && (0, r(722371).Xk)(a, t)) return function(e) {
                        let {
                            environment: t,
                            spaceViewStore: i,
                            type: a,
                            overrideFlag: o
                        } = e, s = n.get(a);
                        return s || (s = new(r(971026)).X, n.set(a, s)), s.memo(() => new(r(345426)).ComputedStore(() => (function(e) {
                            var t, n;
                            let {
                                environment: i,
                                spaceViewStore: a,
                                type: o,
                                overrideFlag: s
                            } = e;
                            if (!(0, r(784331).J)() && !s) return;
                            let l = a.getUserId(),
                                d = null == (t = a.getSpaceStore()) ? void 0 : t.getSpaceIdCreator();
                            if (!l || !d) return;
                            let c = d.getSpaceId(),
                                u = (0, r(190566).X3)({
                                    sectionType: o,
                                    userId: l,
                                    spaceIdCreator: d
                                }),
                                p = (0, r(465221).$)(u).state;
                            if (!p) return;
                            let {
                                visibleBlockIds: m,
                                hasMore: g
                            } = p, S = "private" === o ? a.getKeyStore("private_pages") : "shared" === o ? a.getKeyStore("shared_pages") : a, h = m.map(e => {
                                let t = {
                                    id: e,
                                    table: r(832375).evP,
                                    spaceId: c
                                };
                                return r(970831).B.createChildStore(S, t)
                            }), f = r(728372).AppStoreCurrentUserSettingsStore.state, {
                                sortOption: v,
                                truncationLimit: b
                            } = (0, r(822209).R)({
                                environment: i,
                                type: o,
                                spaceViewStore: a,
                                userSettingsStore: f
                            });
                            "manual" === v ? h = function({
                                visibleBlockStores: e,
                                spaceViewStore: t,
                                spaceIdCreator: n,
                                sectionPointer: i,
                                sectionType: a
                            }) {
                                if (!(0, r(190566).X4)(a)) return e;
                                let o = e.map(e => {
                                    let a = (0, r(441225).SW)({
                                        itemPointer: e.pointer,
                                        sectionId: i.id,
                                        spaceIdCreator: n
                                    });
                                    return [e, r(931672).E.createChildStore(t, a)]
                                });
                                return o.every(([e, t]) => t.isReady()) ? (o.sort((e, t) => {
                                    let r = e[1].getFractionalIndex(),
                                        n = t[1].getFractionalIndex();
                                    if (r && n)
                                        if (r > n) return 1;
                                        else if (r < n) return -1;
                                    else return 0;
                                    return r && !n ? -1 : !r && n ? 1 : 0
                                }), o.map(([e, t]) => e)) : e
                            }({
                                visibleBlockStores: h,
                                spaceViewStore: a,
                                spaceIdCreator: d,
                                sectionPointer: u,
                                sectionType: o
                            }) : "lastEdited" === v ? ((n = h).sort((e, t) => {
                                let r = e.getLastEditedTime();
                                return t.getLastEditedTime() - r
                            }), h = n) : (0, r(722371).HB)(v);
                            let y = (0, r(171231).lu)({
                                items: h,
                                limit: b
                            });
                            return {
                                visibleBlockStores: h,
                                hasMore: g || y.length < h.length
                            }
                        })({
                            environment: t,
                            spaceViewStore: i,
                            type: a,
                            overrideFlag: o
                        }), {
                            debugName: `SidebarSectionStateStore(${a})`
                        }), [i, a, o])
                    }({
                        environment: d,
                        spaceViewStore: p,
                        type: t,
                        overrideFlag: l
                    }).state
                }, [o, g, p, l, d]), h = (0, r(682985).K8)(() => {
                    let e = null == o ? void 0 : o.getSectionType();
                    return p && e ? (0, r(822209).R)({
                        environment: d,
                        spaceViewStore: p,
                        type: e,
                        userSettingsStore: m
                    }).truncationLimit : r(41664).Ji
                }, [o, p, m, d]), f = "newApi" !== s ? s : null == S ? void 0 : S.visibleBlockStores, v = (0, r(482170).l)(f, r(795676).k), b = (0, r(682985).K8)(() => v ? (0, r(171231).lu)({
                    items: v,
                    limit: h
                }) : void 0, [v, h]), y = function(e) {
                    let {
                        spaceId: t,
                        userId: n,
                        sectionType: a,
                        blockStores: o
                    } = e, s = (0, r(533992).v3)(), l = (0, r(83208).X)("sidebar_local_storage", {
                        disableExposureLogging: !0
                    }), d = (0, r(682985).K8)(() => l ? null == o ? void 0 : o.slice(0, 100).map(r(903443).Qj) : void 0, [l, o]), c = (0, r(879101).n)({
                        key: ["sidebarSection", "itemStores", t, n, a],
                        computedState: d
                    });
                    return (0, i.useMemo)(() => o || (null == c ? void 0 : c.map(e => (0, r(903443).Yk)(e, s))), [s, o, c])
                }({
                    spaceId: c,
                    userId: null == m ? void 0 : m.userId,
                    sectionType: t,
                    blockStores: b
                }) ? ? b ? ? [];
                return {
                    itemStores: y,
                    isTruncated: (0, r(879101).n)({
                        key: ["sidebarSection", "isTruncated", c, u, t],
                        computedState: b && v ? (null == S ? void 0 : S.hasMore) || b.length < v.length : void 0
                    }) ? ? !1,
                    isLoading: void 0 === f
                }
            }
        },
        594687: (e, t, r) => {
            r.d(t, {
                F: () => n
            });

            function n(e, {
                disableExposureLogging: t = !1
            } = {}) {
                var i, a, o;
                let s = null == (i = r(728372).AppStoreSidebarSpaceStore.state) || null == (i = i.getSpaceSurveyData()) || null == (i = i.intent) ? void 0 : i.value;
                if (e.isFirstTimeOnboarding || r(986939).A.isMobile || "school" !== s) return "control";
                let l = null == (a = r(728372).AppStoreCurrentUserStore.state) ? void 0 : a.id,
                    d = null == (o = r(728372).AppStoreSidebarSpaceStore.state) ? void 0 : o.getCreatedById();
                if (!l || l !== d) return "control";
                let c = r(728372).AppStoreCurrentUserSettingsStore.state;
                if (!c) return "control";
                let u = c.getSettings();
                if (null != u && u.finished_new_user_home_experience) return "control";
                let p = (0, r(996903).i)(c);
                return null === p || p > 7 ? "control" : r(218744).default.getEligibleGroup({
                    experimentId: "new_student_home",
                    defaultGroup: "control",
                    disableExposureLogging: t
                })
            }
        },
        612819: (e, t, r) => {
            r.d(t, {
                H: () => n
            });
            let n = (0, r(815048)._h)(new(r(815048)).O2("SidebarCard", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(35837), r.e(25867), r.e(88595), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(43444), r.e(23979), r.e(73259), r.e(87971), r.e(4779), r.e(55067), r.e(50354), r.e(14231), r.e(18406), r.e(97615), r.e(48095), r.e(10188), r.e(18802), r.e(20957), r.e(53157), r.e(58033), r.e(79563), r.e(6782), r.e(74936), r.e(5309), r.e(76060), r.e(2209)]).then(r.bind(r, 651443))), e => e.SidebarCard)
        },
        622862: (e, t, r) => {
            r.d(t, {
                Y: () => o
            }), r(581454);
            var n = () => r(722371),
                i = () => r(181472),
                a = () => r(818646);

            function o({
                modificationType: e,
                storesToModify: t,
                spaceViewStore: s,
                transaction: l
            }) {
                let d = s.getBookmarkedPagesStore();
                for (let o of t.map(e => r(970831).B.createChildStore(d, e.pointer)).reverse()) "add" === e ? (0, i().H)({
                    parentStore: d,
                    prependStore: o,
                    transaction: l
                }) : "remove" === e ? (0, a().T)({
                    parentStore: d,
                    childToRemoveStore: o,
                    transaction: l
                }) : (0, n().HB)(e)
            }
        },
        624467: (e, t, r) => {
            r.d(t, {
                m: () => n
            });

            function n(e) {
                let t = (0, r(533992).v3)(),
                    n = (0, r(682985).K8)(() => {
                        switch (e) {
                            case "mail":
                                return r(696190).default.isVisible(r(161323).QM);
                            case "calendar":
                                return r(696190).default.isVisible(r(161323).nt);
                            default:
                                return r(696190).default.isVisible(r(161323).QM) || r(696190).default.isVisible(r(161323).nt)
                        }
                    }, [e]);
                return (0, r(682985).K8)(() => {
                    let e = r(30616).D.state.isHidden,
                        i = r(728372).AppStoreSidebarSpaceViewStore.state;
                    return n && e && r(245757).Wx({
                        environment: t,
                        spaceViewStore: i,
                        type: "notion_apps",
                        outlinerToggleButtonStore: r(30616).D,
                        newIsHidden: !1,
                        shouldPersistToggleState: !1
                    }), e
                }, [t, n]), n
            }
        },
        632890: (e, t, r) => {
            r.d(t, {
                G: () => s
            });
            var n = r(296540);
            let i = (0, r(815048)._h)(new(r(815048)).O2("TabletSidebarButton", async () => await r.e(88873).then(r.bind(r, 266881))), e => e.TabletSidebarButton);
            var a = r(474848);
            let o = {
                header: {
                    display: "block",
                    flexShrink: 0,
                    flexGrow: 0
                },
                workspaceSwitcherContainer: {
                    flex: 1,
                    minWidth: 0
                },
                hiddenWorkspaceSwitcher: {
                    height: 0,
                    margin: 0,
                    padding: 0,
                    overflow: "hidden",
                    opacity: 0,
                    pointerEvents: "none"
                },
                tabletSidebarButton: {
                    height: 26,
                    width: 26
                },
                tabletNewPageButton: {
                    height: 26,
                    width: 26
                },
                expandButton: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    height: 32,
                    width: 32,
                    minWidth: 32,
                    borderRadius: 9999,
                    fill: r(632079).Tj.icon.tertiary
                },
                expandButtonHover: {
                    background: r(632079).Tj.gray.background.secondaryTranslucent,
                    fill: r(632079).Tj.text.primary
                },
                expandIcon: {
                    width: 22,
                    height: 22,
                    fill: "inherit"
                },
                keyboardShortcut: {
                    color: r(632079).Tj.text.inverseSecondary
                }
            };

            function s({
                layoutVariant: e = "default"
            }) {
                let t = (0, r(682985).O$)(r(984858).sidebarExpandedStore),
                    l = (0, r(718012).V)(),
                    d = (0, r(153223).u)(),
                    c = (0, r(682985).K8)(() => r(896597).A.state.isFullScreen, []),
                    u = (0, r(533992).v3)(),
                    p = (0, r(109939).tz)(),
                    {
                        isElectronMac: m,
                        isElectron: g
                    } = u.device,
                    {
                        isTablet: S
                    } = (0, r(533992).Y0)(),
                    h = (0, r(853284).U)(),
                    f = h && !t && !S,
                    v = (0, r(682985).O$)(r(584257).b),
                    [b, y] = (0, n.useState)(!1),
                    _ = (0, n.useCallback)(async ({
                        event: e,
                        spaceViewStore: t
                    }) => {
                        let n = (0, r(7029).V)(e);
                        await (0, r(72713).t)({
                            environment: u,
                            spaceViewStore: t,
                            userSettingsStore: r(728372).AppStoreCurrentUserSettingsStore.state,
                            userRootStore: r(728372).AppStoreCurrentUserRootStore.state,
                            openInNew: n,
                            pageVisitSource: r(254656).y8.SwitchSpace,
                            navigationType: "switchingToOrLoadingSpace"
                        })
                    }, [u]),
                    w = (0, n.useCallback)(() => {
                        (0, r(16822).h)({
                            isExpanded: !0,
                            environment: u,
                            from: "flyout_expand_button",
                            saveDetailsSidebarPreference: !0
                        })
                    }, [u]),
                    x = function({
                        isExpanded: e,
                        isFullScreenDesktop: t,
                        isShowingTabBar: n,
                        isElectron: i
                    }) {
                        return e && !n && !(0, r(458196).V)({
                            isExpanded: e,
                            isFullScreenDesktop: t,
                            isShowingTabBar: n,
                            isElectron: i
                        })
                    }({
                        isExpanded: t,
                        isFullScreenDesktop: c,
                        isShowingTabBar: v,
                        isElectron: g
                    }),
                    T = !g && h || f,
                    A = !(m && t && !c && !v) || g && h && t,
                    I = "bottom" === e,
                    j = g && h && t,
                    M = (0, r(960253).I)(() => ({
                        headerRowContainer: { ...h && {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingTop: 8 * !!f,
                                paddingInlineEnd: 12 * !!f
                            }
                        },
                        sidebarSwitcher: {
                            height: (0, r(801113).ek)(m) - 12,
                            borderRadius: T ? 9999 : 6,
                            marginInlineStart: I ? 0 : S ? 16 : 8,
                            marginInlineEnd: 8 * !I,
                            marginTop: I ? 0 : S ? -8 : 6 * !!A,
                            marginBottom: 6 * !I,
                            width: I ? "100%" : "auto"
                        }
                    }), [h, f, m, I, S, A, T]),
                    P = (0, r(458196).V)({
                        isExpanded: t,
                        isFullScreenDesktop: c,
                        isShowingTabBar: v,
                        isElectron: g
                    }),
                    k = p.formatMessage({
                        id: "sidebarExpandButton.tooltip",
                        defaultMessage: "Lock sidebar open"
                    });
                return (0, a.jsxs)("div", {
                    style: o.header,
                    onMouseEnter: () => y(!0),
                    onMouseLeave: () => y(!1),
                    children: [P ? (0, a.jsx)(r(525887).F, {
                        isExpanded: t
                    }) : void 0, (0, a.jsx)(r(24884).n, {
                        step: "welcome",
                        inAppCalloutStore: l,
                        teamIds: d,
                        renderTooltip: e => (0, a.jsx)(r(715539).Fl, { ...e
                        }),
                        children: (0, a.jsxs)("div", {
                            style: M.headerRowContainer,
                            children: [S ? (0, a.jsxs)(r(4458).fI, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingInlineStart: 16,
                                paddingInlineEnd: 16,
                                height: 44,
                                marginBottom: 16,
                                children: [(0, a.jsx)(i, {
                                    defaultMobileButtonStyle: o.tabletSidebarButton
                                }), (0, a.jsx)(r(784665).K, {
                                    from: "sidebar_new_page_button",
                                    iconStyle: o.tabletNewPageButton
                                })]
                            }) : void 0, (0, a.jsx)("div", {
                                style: o.workspaceSwitcherContainer,
                                children: (0, a.jsx)(r(359133).A, {
                                    shouldShowUnexpandButton: !S && x,
                                    shouldShowCreatePageButton: !0,
                                    format: m && t ? r(359133).z.DesktopMac : r(359133).z.Regular,
                                    onSpaceClick: _,
                                    buttonStyle: { ...M.sidebarSwitcher,
                                        ...j ? o.hiddenWorkspaceSwitcher : void 0
                                    },
                                    useGrayHoverBackground: f,
                                    hideEmail: !0,
                                    isHeaderHovered: b
                                })
                            }), f ? (0, a.jsx)(r(51831).m, {
                                content: () => (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("div", {
                                        children: k
                                    }), (0, a.jsx)(r(693592).A, {
                                        style: o.keyboardShortcut,
                                        name: "toggleSidebar"
                                    })]
                                }),
                                placement: "bottom",
                                children: e => (0, a.jsx)(r(374533).A, { ...e,
                                    icon: r(487415).O,
                                    ariaLabel: k,
                                    onClick: w,
                                    style: o.expandButton,
                                    iconStyle: o.expandIcon,
                                    hoveredStyle: o.expandButtonHover
                                })
                            }) : void 0]
                        })
                    })]
                })
            }
        },
        639323: (e, t, r) => {
            r.d(t, {
                M: () => n
            });

            function n({
                teamStore: e,
                environment: t
            }) {
                if (r(986939).A.isMobile) return;
                let i = (0, r(646044).p)(e),
                    a = r(791869).A.findDropTargetFromKey(i);
                if (a) {
                    let n = a.getNode();
                    if (!(n instanceof HTMLElement)) return;
                    if (r(862921).A.SidebarScroller) {
                        var o;
                        let i = (null == (o = r(862921).A.SidebarScroller.getNode()) ? void 0 : o.offsetTop) || 0,
                            a = r(862921).A.SidebarScroller.getNode();
                        (0, r(661767).V)({
                            element: a,
                            environment: t,
                            options: {
                                top: n.offsetTop - i,
                                left: 0,
                                behavior: "smooth"
                            }
                        }), r(854722).A.setState(e.id), setTimeout(() => {
                            r(854722).A.state === e.id && r(854722).A.setState(void 0)
                        }, 1500)
                    }
                }
            }
        },
        646044: (e, t, r) => {
            r.d(t, {
                p: () => n
            });

            function n(e) {
                return `TeamToggle_${e.id}`
            }
        },
        648188: (e, t, r) => {
            r.d(t, {
                W: () => n
            });

            function n() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(682985).O$)(r(831779).A);
                return (0, r(682985).K8)(() => {
                    var n, i;
                    let a = r(728372).AppStoreCurrentUserSettingsStore.state;
                    if (!(null != a && a.isReady())) return !1;
                    let o = (0, r(73233).getOnboardingAgentVariant)(),
                        s = r(218744).default.getEligibleGroup({
                            experimentId: "uxr_debug_onboarding_agent",
                            disableExposureLogging: !0
                        }),
                        l = void 0 !== s && "control" !== s;
                    if ("control" === o && !l) return !1;
                    let d = null == (n = r(728372).AppStoreSidebarSpaceStore.state) ? void 0 : n.id,
                        c = d ? r(54068).T.getData(e, {
                            spaceId: d
                        }) : void 0;
                    if ((0, r(824574)._)(c)) {
                        let e = null == (i = a.getSettings()) ? void 0 : i.post_onboarding_agent_config;
                        if (!(null != e && e.has_user_responded)) return !1
                    }
                    let u = (0, r(664949).$)(t, c, {
                        disableExposureLogging: !0
                    });
                    if (void 0 !== u && "control" !== u) return !1;
                    let p = (0, r(594687).F)(t, {
                        disableExposureLogging: !0
                    });
                    if (void 0 !== p && "control" !== p) return !1;
                    let m = a.getSettings();
                    if (null != m && m.finished_new_user_home_experience) return !1;
                    let g = null == m ? void 0 : m.post_onboarding_agent_config,
                        S = null == m ? void 0 : m.signup_time,
                        h = null == g ? void 0 : g.thread_id;
                    if (!h || !(0, r(596244).B)(g) || g.has_dismissed_callout || !l && void 0 !== S && (0, r(362008).Mn)(S) > 7) return !1;
                    let f = e.RouterStore.state.route,
                        v = (0, r(4962).Xw)(h);
                    if ("chat" === f.name) {
                        let e = f.threadId;
                        if (e && (0, r(4962).Xw)(e) === v) return !1
                    }
                    return ("page" !== f.name && "agent" !== f.name && "meet" !== f.name && "library" !== f.name && "desktopNosey" !== f.name || !f.chatThreadId || (0, r(4962).Xw)(f.chatThreadId) !== v) && !0
                }, [e, t])
            }
        },
        652853: (e, t, r) => {
            r.d(t, {
                p: () => o
            });
            var n = r(296540),
                i = r(474848);
            let a = (0, r(109939).YK)({
                title: {
                    id: "sidebar.skills.title",
                    defaultMessage: "AI Skills"
                },
                tooltip: {
                    id: "sidebar.skills.tooltip",
                    defaultMessage: "Open AI Skills"
                }
            });

            function o({
                styles: e
            }) {
                let t = (0, r(533992).v3)(),
                    s = (0, r(109939).tz)(),
                    {
                        sidebarTooltipStore: l,
                        handleFocus: d,
                        handleBlur: c
                    } = (0, r(783242).W)(),
                    u = (0, n.useCallback)(() => (0, i.jsx)("div", {
                        children: s.formatMessage(a.tooltip)
                    }), [s]),
                    p = (0, r(682985).K8)(() => "skills" === t.RouterStore.state.route.name, [t]),
                    m = (0, r(960253).I)(() => ({
                        linkBoxStyle: { ...r(132261).DX.baseSidebarItem,
                            ...p && r(132261).DX.currentSelectedSidebarItem
                        }
                    }), [p]);
                return (0, i.jsx)(r(51831).m, {
                    store: l,
                    content: u,
                    originGap: 6,
                    placement: "right",
                    children: t => (0, i.jsx)(r(590422).Q, {
                        style: m.linkBoxStyle,
                        href: r(168962).JZ.skills,
                        hoveredStyle: e.buttonHoveredStyle,
                        ...t,
                        onFocus: e => {
                            var r;
                            null == (r = t.onFocus) || r.call(t, e), d(e)
                        },
                        onBlur: e => {
                            var r;
                            null == (r = t.onBlur) || r.call(t, e), c()
                        },
                        children: (0, i.jsx)(r(380559).u, {
                            left: (0, i.jsx)(r(16275).I, {
                                icon: r(312528).x,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            children: s.formatMessage(a.title)
                        })
                    })
                })
            }
        },
        663679: (e, t, r) => {
            r.d(t, {
                q: () => n
            });

            function n() {
                let e = (0, r(533992).v3)(),
                    [{
                        status: t,
                        error: n,
                        value: i
                    }, a] = (0, r(97668).Yb)(async () => {
                        let t = await e.api.callApi({
                            eventName: "getUserOrganizations",
                            environment: e,
                            data: {}
                        });
                        if ("success" === t.type) return t.data;
                        if ("failed" !== t.type) return (0, r(722371).HB)(t);
                        throw t.error
                    }, [e]);
                return {
                    organizationsInfo: (null == i ? void 0 : i.organizationsInfo) ? ? [],
                    loading: "pending" === t || "idle" === t,
                    error: n,
                    refresh: a
                }
            }
        },
        664949: (e, t, r) => {
            r.d(t, {
                $: () => n
            });

            function n(e, t, {
                disableExposureLogging: i = !1
            } = {}) {
                var a, o, s;
                let l = null == (a = r(728372).AppStoreSidebarSpaceStore.state) || null == (a = a.getSpaceSurveyData()) || null == (a = a.intent) ? void 0 : a.value;
                if (e.isFirstTimeOnboarding || r(986939).A.isMobile || "team" !== l) return "control";
                let d = r(728372).AppStoreCurrentUserSettingsStore.state;
                if (!d) return "control";
                let c = d.getSettings();
                if (null != c && c.finished_new_user_home_experience || null != c && null != (o = c.post_onboarding_agent_config) && o.has_dismissed_callout) return "control";
                let u = (0, r(73233).getOnboardingAgentVariant)();
                if ("v5" === u && null != c && null != (s = c.post_onboarding_agent_config) && s.thread_id) return (0, r(824574)._)(t) && !c.post_onboarding_agent_config.has_user_responded ? "control" : "no_design";
                let p = r(218744).default.getConfigKey("new_user_home_config", "experimentStartDate"),
                    m = null == c ? void 0 : c.signup_time;
                if (!m || r(906745).DateTime.fromMillis(m) < r(906745).DateTime.fromISO(p, {
                        zone: "utc"
                    })) return "control";
                let g = (0, r(996903).i)(d);
                if (null === g || g > 7) return "control";
                let S = (null == c ? void 0 : c.preferred_locale) ? ? r(849917).locale;
                return "en-US" !== S && "en-GB" !== S || void 0 !== u && "control" !== u ? "control" : r(218744).default.getEligibleGroup({
                    experimentId: "new_user_home_mvp",
                    defaultGroup: "control",
                    disableExposureLogging: !0
                })
            }
        },
        678765: (e, t, r) => {
            r.d(t, {
                S: () => d
            }), r(898992), r(354520);
            var n = r(296540);
            let i = new(r(815048)).O2("NewStudentHomePopup", async () => await Promise.all([r.e(36556), r.e(55373), r.e(36192), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(53050), r.e(87353), r.e(45213), r.e(5721), r.e(57688), r.e(64696), r.e(76135), r.e(16922), r.e(31190), r.e(73890), r.e(82001)]).then(r.bind(r, 898755))),
                a = (0, r(815048)._h)(i, e => e.NewStudentHomePopup),
                o = new(r(815048)).O2("NewUserHomePopup", async () => await Promise.all([r.e(36556), r.e(55373), r.e(36192), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(53050), r.e(87353), r.e(45213), r.e(5721), r.e(57688), r.e(64696), r.e(76135), r.e(16922), r.e(31190), r.e(73890), r.e(73171)]).then(r.bind(r, 669245))),
                s = (0, r(815048)._h)(o, e => e.NewUserHomePopup);
            var l = r(474848);

            function d() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(682985).O$)(r(831779).A),
                    {
                        steps: i
                    } = (0, r(354158).q)("new_user_home_checklist"),
                    {
                        steps: o
                    } = (0, r(354158).q)("new_student_home_checklist"),
                    d = (0, r(682985).K8)(() => {
                        var n;
                        let i = null == (n = r(728372).AppStoreSidebarSpaceStore.state) ? void 0 : n.id,
                            a = i ? r(54068).T.getData(e, {
                                spaceId: i
                            }) : void 0;
                        return (0, r(664949).$)(t, a)
                    }, [e, t]),
                    c = (0, r(682985).K8)(() => (0, r(594687).F)(t), [t]);
                n.useEffect(() => {
                    r(968456)._.setState({ ...r(968456)._.state,
                        isNewUserHomeExperimentActive: "control" !== d
                    })
                }, [d]);
                let u = n.useRef(!1),
                    p = n.useRef(!1);
                return (n.useEffect(() => {
                    if (!u.current && "control" !== d && void 0 !== i) {
                        u.current = !0;
                        let t = r(934289).y.new_user_home_checklist.steps.filter(e => (0, r(831013).M)(e.id)),
                            n = i.filter(e => e.completed && (0, r(831013).M)(e.id)).length,
                            a = t.length;
                        (0, r(809063).l9)(e, {
                            homeType: "work_home",
                            variant: d,
                            completedCount: n,
                            totalCount: a
                        })
                    }
                    if (!p.current && "control" !== c && void 0 !== o) {
                        p.current = !0;
                        let t = o.filter(e => e.completed).length,
                            n = r(934289).y.new_student_home_checklist.steps.length;
                        (0, r(809063).l9)(e, {
                            homeType: "student_home",
                            variant: "no_design",
                            completedCount: t,
                            totalCount: n
                        })
                    }
                }, [d, i, c, o, e]), "control" !== c) ? (0, l.jsx)(a, {
                    layout: "no_design"
                }) : "control" !== d ? (0, l.jsx)(s, {
                    layout: d
                }) : null
            }
        },
        679192: (e, t, r) => {
            r.d(t, {
                w: () => a
            }), r(18107), r(967357), r(898992), r(672577), r(581454);
            var n = r(296540),
                i = r(474848);

            function a({
                teams: e,
                reorderable: t,
                onNavigate: o,
                id: s,
                teamOutlinerType: l,
                shouldPersistToggleState: d,
                from: c
            }) {
                let u = (0, r(533992).v3)(),
                    p = (0, r(917441).Rx)(),
                    m = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceViewStore),
                    g = (0, n.useMemo)(() => e.map(e => e.id), [e]),
                    S = (0, n.useMemo)(() => r(381453).pY(e, "id"), [e]),
                    [h, f] = (0, n.useState)({});
                (0, n.useEffect)(() => {
                    (null == p ? void 0 : p.spaceId) && f(e => r(138676).s({
                        teamIds: g,
                        oldState: e,
                        spaceId: p.spaceId,
                        userId: p.userId
                    }))
                }, [null == p ? void 0 : p.spaceId, null == p ? void 0 : p.userId, g]);
                let v = (0, r(682985).K8)(() => {
                    let e = r(563591).default.state.initialTeamId;
                    return g.find(t => t === e) ? ? g[0]
                }, [g]);
                return p ? (0, i.jsx)(r(66467).Ay, {
                    id: s,
                    direction: "vertical",
                    shouldAnimateDrop: !0,
                    keys: g,
                    disabled: !t || p.isCached,
                    hoverCursorStyleOverride: "pointer",
                    renderKey: e => h[e] && (0, i.jsx)(r(553164).Q, {
                        initialToggleState: d ? void 0 : "hidden",
                        shouldPersistToggleState: !!d,
                        teamStore: S[e],
                        sidebarState: p,
                        isLastTeam: g.at(-1) === e,
                        teamOutlinerType: l,
                        customToggleStore: h[e],
                        onNavigate: o,
                        sidebarTourStep: v === e ? "prebuilt_templates" : void 0,
                        from: c
                    }, e),
                    onDrop: (e, t) => {
                        m && r(89739).br({
                            environment: u,
                            spaceViewStore: m,
                            orderedTeamIds: e,
                            userAction: "SidebarOutliner.SidebarOutliner",
                            isExplicitUserAction: !0,
                            dropArgs: t
                        })
                    }
                }) : null
            }
        },
        717885: (e, t, r) => {
            r.d(t, {
                a: () => n
            });

            function n(e) {
                let {
                    environment: t
                } = e, [{
                    status: n,
                    error: i,
                    value: a
                }] = (0, r(97668).Yb)(async () => {
                    let e = await t.api.callMainCellApi({
                        eventName: "getEmailDomainSettings",
                        environment: t,
                        data: {}
                    });
                    if ("success" === e.type) return e.data;
                    if ("failed" !== e.type) return (0, r(722371).HB)(e);
                    throw e.error
                }, [t]);
                return {
                    loading: "pending" === n || "idle" === n,
                    error: i,
                    isNotionMailDisabled: !!(null == a ? void 0 : a.settings.disable_notion_mail)
                }
            }
        },
        722385: (e, t, r) => {
            r.d(t, {
                w: () => n
            });

            function n(e) {
                return (0, r(682985).K8)(() => {
                    if (!e) return !1;
                    let t = r(728372).AppStoreMainEditorCurrentBlockStore.state;
                    return (null == t ? void 0 : t.getParentTable()) === r(832375).yKj && (null == t ? void 0 : t.getParentId()) === e
                }, [e])
            }
        },
        729869: (e, t, r) => {
            r.d(t, {
                Q: () => i
            }), r(296540);
            var n = r(474848);

            function i(e) {
                if (!e) return !1;
                switch (e) {
                    case "private":
                    case "closed":
                        return (0, n.jsx)(s, {
                            accessLevel: e
                        });
                    case "open":
                        return null;
                    default:
                        (0, r(722371).HB)(e)
                }
            }
            let a = {
                    width: 210
                },
                o = {
                    alignContent: "center"
                };

            function s({
                accessLevel: e
            }) {
                let t = (0, r(422280).UN)(e);
                return (0, n.jsx)(r(51831).m, {
                    textWrap: !0,
                    style: a,
                    placement: "bottom",
                    content: () => {
                        switch (e) {
                            case "private":
                                return (0, n.jsx)(r(109939).sA, {
                                    id: "teamLockIcon.tooltip",
                                    defaultMessage: "Private teamspaces can only be accessed or joined by invitation"
                                });
                            case "closed":
                                return (0, n.jsx)(r(109939).sA, {
                                    id: "teamClosedIcon.tooltip",
                                    defaultMessage: "Closed teamspaces require approval to join"
                                });
                            default:
                                (0, r(722371).HB)(e)
                        }
                    },
                    children: e => (0, n.jsx)("div", { ...e,
                        style: o,
                        children: (0, n.jsx)(r(708966).Q, {
                            iconGroup: t,
                            variantName: "small",
                            size: "sm",
                            colorVariant: "secondary"
                        })
                    })
                })
            }
        },
        774562: (e, t, r) => {
            r.d(t, {
                v: () => i
            });
            let n = {
                    NotionAppsSection: new(r(815048)).O2("NotionAppsSection", () => Promise.resolve().then(r.bind(r, 541949)))
                },
                i = (0, r(815048)._h)(n.NotionAppsSection, e => e.NotionAppsSection)
        },
        801113: (e, t, r) => {
            r.d(t, {
                $C: () => i,
                Hi: () => n,
                Qy: () => a,
                Uu: () => o,
                ek: () => s,
                jq: () => l,
                pz: () => d
            });
            let n = 52,
                i = 45,
                a = 44,
                o = 44;

            function s(e) {
                return e ? o : a
            }

            function l(e) {
                return 2 * s(e)
            }

            function d(e, t, n) {
                return (e && !t ? (0, r(196441).n$)(n) : 12) + 30
            }
        },
        809063: (e, t, r) => {
            function n(e, t) {
                let n = r(728372).AppStoreCurrentUserSettingsStore.state;
                if (n) {
                    var i;
                    (null == (i = n.getSettings()) ? void 0 : i.new_user_home_first_shown_at) || (0, r(377796).createAndCommit)({
                        userAction: "newUserHomeAnalytics.recordFirstShownAt",
                        environment: e,
                        canUndo: !1,
                        cellTarget: "main",
                        perform: e => {
                            (0, r(862759).m)({
                                userSettingsStore: n,
                                transaction: e,
                                data: {
                                    new_user_home_first_shown_at: Date.now()
                                }
                            })
                        },
                        userId: n.id
                    })
                }(0, r(104310).u)({
                    event: {
                        eventName: "new_user_home_sidebar_shown",
                        eventProperties: {
                            home_type: t.homeType,
                            variant: t.variant,
                            completed_count: t.completedCount,
                            total_count: t.totalCount
                        }
                    }
                })
            }

            function i(e, t) {
                let n = t.totalCount > 0 ? Math.round(t.completedCount / t.totalCount * 100) : 0;
                (0, r(104310).u)({
                    event: {
                        eventName: "new_user_home_sidebar_click",
                        eventProperties: {
                            home_type: t.homeType,
                            variant: t.variant,
                            completed_count: t.completedCount,
                            total_count: t.totalCount,
                            progress_pct: n
                        }
                    }
                })
            }

            function a(e, t) {
                (0, r(104310).u)({
                    event: {
                        eventName: "new_user_home_step_click",
                        eventProperties: {
                            home_type: t.homeType,
                            variant: t.variant,
                            step_id: t.stepId,
                            step_already_completed: t.stepAlreadyCompleted,
                            completed_count: t.completedCount,
                            total_count: t.totalCount
                        }
                    }
                })
            }

            function o(e, t) {
                var n;
                let i = null == (n = r(728372).AppStoreCurrentUserSettingsStore.state) || null == (n = n.getSettings()) ? void 0 : n.new_user_home_first_shown_at,
                    a = void 0 !== i ? Date.now() - i : 0;
                (0, r(104310).u)({
                    event: {
                        eventName: "new_user_home_all_steps_completed",
                        eventProperties: {
                            home_type: t.homeType,
                            variant: t.variant,
                            ms_since_first_shown: a
                        }
                    }
                })
            }

            function s(e, t) {
                var n;
                let i = null == (n = r(728372).AppStoreCurrentUserSettingsStore.state) || null == (n = n.getSettings()) ? void 0 : n.new_user_home_first_shown_at,
                    a = void 0 !== i ? Date.now() - i : 0;
                (0, r(104310).u)({
                    event: {
                        eventName: "new_user_home_dismissed",
                        eventProperties: {
                            home_type: t.homeType,
                            variant: t.variant,
                            ms_since_first_shown: a
                        }
                    }
                })
            }
            r.d(t, {
                JX: () => s,
                T$: () => o,
                kN: () => a,
                l9: () => n,
                yX: () => i
            })
        },
        824574: (e, t, r) => {
            r.d(t, {
                _: () => n
            });

            function n(e) {
                return !!((0, r(192159).TB)(e) && "business" === (0, r(192159).AI)(e))
            }
        },
        831013: (e, t, r) => {
            r.d(t, {
                M: () => i,
                z: () => n
            });
            let n = {
                "search-inbox": () => r(886556).z.canUseAiConnectorSearchScope("notion-mail")
            };

            function i(e) {
                let t = n[e];
                return void 0 === t || t()
            }
        },
        837764: (e, t, r) => {
            r.d(t, {
                W: () => s,
                o: () => o
            }), r(898992), r(354520);
            var n = r(296540),
                i = r(474848);
            let a = {
                display: "block"
            };

            function o(e) {
                let {
                    outlinerTypeWithTeam: t,
                    sidebarState: o,
                    onNavigate: s,
                    additionalOutlinerProps: l,
                    id: d,
                    isHeaderless: c,
                    from: u,
                    explicitChildStores: p,
                    includeArchivedPages: m
                } = e, g = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), S = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceViewStore), h = (0, r(533992).v3)(), {
                    isTablet: f
                } = (0, r(533992).Y0)(), v = !(0, r(682985).O$)(r(420153).l), b = (0, r(682985).K8)(() => (null == g ? void 0 : g.canEdit()) && v, [g, v]), y = (0, r(682985).K8)(() => (0, r(484712).U)(S), [S]), _ = "shared" === t.type && (null == o ? void 0 : o.showCrossWorkspaceGuestPagesPrototype), w = (0, r(83208).X)("team_feed_as_any_other_db"), x = (0, r(682985).K8)(() => {
                    if (p) return p;
                    let e = o ? (0, r(576536).o_)({
                        typeWithTeam: t,
                        sidebarState: o,
                        teamFeedAsAnyOtherDBEnabled: w
                    }) : void 0;
                    return !m && e && (e = e.filter(e => !e.isArchived())), e
                }, [p, o, t, w, m]), T = (0, r(682985).K8)(() => {
                    if (S && g && !_) return (0, r(576536).rE)({
                        spaceStore: g,
                        spaceViewStore: S,
                        typeWithTeam: t
                    })
                }, [S, g, _, t]), A = (0, n.useCallback)(e => {
                    (0, r(541660).x)({
                        environment: h,
                        store: e,
                        type: t.type
                    }), null == s || s()
                }, [h, s, t]), I = (0, r(960253).I)(() => ({
                    outlinerItem: {
                        paddingTop: 5,
                        paddingBottom: f ? 3.5 : 5,
                        paddingInlineStart: "team" === t.type ? 16 : 8,
                        ...r(986939).A.isMobile && "team" === t.type ? {
                            paddingInlineStart: r(393658).ph + r(393658).RD
                        } : void 0
                    }
                }), [f, t]);
                return x ? (0, i.jsx)(r(770275).T, {
                    from: u,
                    type: t.type,
                    disabled: !b && !y,
                    itemDepth: 0,
                    childStores: x,
                    parentStore: T,
                    style: a,
                    itemStyle: I.outlinerItem,
                    onNavigate: A,
                    id: d,
                    "aria-labelledby": e["aria-labelledby"],
                    isHeaderless: c,
                    includeArchivedPages: m,
                    ...l
                }) : null
            }
            let s = n.memo(e => {
                let {
                    type: t,
                    sidebarState: r,
                    contentsAriaId: a,
                    labelAriaId: s,
                    isHeaderless: l,
                    explicitChildStores: d,
                    includeArchivedPages: c
                } = e, u = (0, n.useMemo)(() => ({
                    type: t
                }), [t]);
                return (0, i.jsx)(o, {
                    outlinerTypeWithTeam: u,
                    sidebarState: r,
                    id: a,
                    "aria-labelledby": s,
                    isHeaderless: l,
                    from: "main_sidebar",
                    explicitChildStores: d,
                    includeArchivedPages: c
                })
            });
            s.displayName = "MemoizedTopLevelSidebarOutliner"
        },
        841935: (e, t, r) => {
            r.d(t, {
                td: () => a,
                v4: () => i
            });
            let n = {
                    SidebarTrial: new(r(815048)).O2("SidebarTrial", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(23519), r.e(63771), r.e(45213), r.e(53847), r.e(12354), r.e(43444), r.e(23979), r.e(17250), r.e(33503), r.e(87971), r.e(55067), r.e(48486), r.e(90735), r.e(16922), r.e(61631)]).then(r.bind(r, 394720))),
                    SidebarTrialButton: new(r(815048)).O2("SidebarTrialButton", async () => await Promise.all([r.e(16922), r.e(31190), r.e(25315)]).then(r.bind(r, 306505)))
                },
                i = (0, r(815048)._h)(n.SidebarTrial, e => e.SidebarTrial),
                a = (0, r(815048)._h)(n.SidebarTrialButton, e => e.SidebarTrialButton)
        },
        854108: (e, t, r) => {
            r.d(t, {
                V: () => n
            });
            async function n({
                userSettingsStore: e,
                spaceViewStore: t,
                spaceUserStore: i,
                selectedItems: a,
                libraryViewName: o,
                analyticsFrom: s,
                environment: l
            }) {
                switch ("teamspaceDirectory" !== o && "libraryExternalPages" !== o && (0, r(723836).xN)({
                    environment: l,
                    eventProperties: {
                        from: s,
                        section_type: o,
                        item_count: a.length
                    }
                }), o) {
                    case "favorites":
                        let d = t.getSpaceId();
                        (0, r(377796).createAndCommit)({
                            userAction: "libraryBulkRowActions.addToFavorites",
                            environment: l,
                            cellTarget: {
                                spaceWithId: d
                            },
                            canUndo: !0,
                            perform: e => {
                                (0, r(622862).Y)({
                                    modificationType: "add",
                                    spaceViewStore: t,
                                    storesToModify: a,
                                    transaction: e
                                })
                            }
                        });
                        break;
                    case "shared":
                    case "private":
                        let c = "shared" === o ? t.getSharedPagesStore() : t.getPrivatePagesStore(),
                            u = "shared" === o ? (0, r(500957).a)({
                                environment: l,
                                spaceViewStore: t,
                                userSettingsStore: e,
                                type: o
                            }).state.visiblePagesStores[0] : void 0;
                        await r(245757).Hu({
                            type: o,
                            environment: l,
                            droppedStores: a,
                            duplicate: !1,
                            duplicateActions: void 0,
                            isDroppingOnFullSection: !1,
                            spaceUserStore: i,
                            isTopLevelItem: !0,
                            droppedDirection: r(966225).bH.Above,
                            targetParentStore: c,
                            targetStore: u
                        });
                        break;
                    case "recents":
                    case "teamspaceDirectory":
                    case "libraryExternalPages":
                    case "myMeetings":
                    case "agents":
                        break;
                    default:
                        (0, r(722371).HB)(o)
                }
            }
        },
        854722: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = r(546605).Store.createValue(void 0, {
                name: "TeamHighlightStore"
            })
        },
        860943: (e, t, r) => {
            r.d(t, {
                B: () => l
            }), r(296540);
            var n = r(474848);
            let i = {
                    marginBottom: 14,
                    width: 56,
                    marginInlineStart: 8,
                    height: 10,
                    borderRadius: 10
                },
                a = {
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 11,
                    paddingInline: 8
                },
                o = {
                    width: 20,
                    height: 20,
                    borderRadius: 4
                },
                s = {
                    marginInlineStart: 8,
                    height: 10,
                    borderRadius: 10
                };

            function l(e) {
                let {
                    includeHeader: t,
                    count: l
                } = e, d = r(87337).J.flat();
                return (0, n.jsxs)(n.Fragment, {
                    children: [t ? (0, n.jsx)(r(795830).P, {
                        style: i,
                        emphasized: !0
                    }) : void 0, Array.from({
                        length: l
                    }, (e, t) => (0, n.jsxs)("div", {
                        style: a,
                        children: [(0, n.jsx)(r(795830).P, {
                            style: o,
                            emphasized: !0
                        }), (0, n.jsx)(r(795830).P, {
                            style: {
                                width: 80 + 20 * d[t % d.length],
                                ...s
                            },
                            emphasized: !0
                        })]
                    }, t))]
                })
            }
        },
        861821: (e, t, r) => {
            r.d(t, {
                M: () => i
            });
            var n = r(296540);

            function i(e) {
                let {
                    isEnabled: t,
                    itemStores: i,
                    sectionStore: a
                } = e, o = (0, r(533992).v3)(), s = (0, r(682985).K8)(() => {
                    if (!t) return !1;
                    for (let e of i)
                        if (e.pathIsDead()) return !0;
                    return !1
                }, [t, i]), l = (0, n.useMemo)(() => (0, r(381453).sg)((e, t) => {
                    (0, r(539487).$)({
                        environment: e,
                        sidebarSectionStore: t
                    })
                }, 300), []);
                (0, n.useEffect)(() => (s && t && a && l(o, a), () => {
                    l.cancel()
                }), [s, t, o, a, l])
            }
        },
        866284: (e, t, r) => {
            r.d(t, {
                m: () => i
            });
            let n = new(r(815048)).O2("EmptySharedSidebarSection", async () => {
                    let {
                        EmptySharedSidebarSection: e
                    } = await r.e(84605).then(r.bind(r, 719086));
                    return {
                        EmptySharedSidebarSection: e
                    }
                }),
                i = (0, r(815048)._h)(n, e => e.EmptySharedSidebarSection)
        },
        887652: (e, t, r) => {
            function n(e) {
                let {
                    teamStore: t,
                    userId: r
                } = e;
                return function(e) {
                    let {
                        rawMembership: t,
                        userId: r
                    } = e;
                    return t.find(e => "user" === e.entity_type && e.user_id === r && "none" !== e.type)
                }({
                    rawMembership: t.getRawMembership(),
                    userId: r
                })
            }
            r.d(t, {
                p: () => n
            }), r(898992), r(672577)
        },
        896597: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var n = () => r(546605);
            class i extends n().Store {
                getInitialState() {
                    return {
                        isFullScreen: window.outerWidth === window.screen.width && window.outerHeight === window.screen.height
                    }
                }
                constructor() {
                    super(), r(884972).Y5.addListener(this.updateFromElectronState), this.updateFromElectronState()
                }
                updateFromElectronState = async () => {
                    let e = await r(884972).Y5.get();
                    void 0 !== e && this.setState({
                        isFullScreen: e
                    })
                }
            }
            let a = new i
        },
        934289: (e, t, r) => {
            r.d(t, {
                y: () => n
            });
            let n = {
                agent_new_user_onboarding: {
                    steps: [{
                        id: "manage-projects"
                    }, {
                        id: "action-items"
                    }, {
                        id: "meeting-notes"
                    }]
                },
                new_user_home_checklist: {
                    steps: [{
                        id: "agent-onboarding"
                    }, {
                        id: "ai-meeting-notes"
                    }, {
                        id: "search-inbox"
                    }, {
                        id: "invite-team"
                    }]
                },
                new_student_home_checklist: {
                    steps: [{
                        id: "class-notes"
                    }, {
                        id: "record-lectures"
                    }, {
                        id: "job-templates"
                    }, {
                        id: "personalize-notion-ai"
                    }]
                }
            }
        },
        945889: (e, t, r) => {
            r.d(t, {
                o: () => n
            });
            let n = (0, r(815048)._h)(new(r(815048)).O2("LockedTeamspacesSection", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(35837), r.e(25867), r.e(88595), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(43444), r.e(23979), r.e(73259), r.e(87971), r.e(4779), r.e(55067), r.e(50354), r.e(14231), r.e(18406), r.e(97615), r.e(48095), r.e(10188), r.e(18802), r.e(20957), r.e(53157), r.e(58033), r.e(79563), r.e(6782), r.e(74936), r.e(5309), r.e(76060), r.e(2209)]).then(r.bind(r, 87909))), e => e.LockedTeamspacesSection)
        },
        955118: (e, t, r) => {
            r.d(t, {
                B: () => n
            });
            let n = (0, r(815048)._h)(new(r(815048)).O2("PostOnboardingAgentCallout", async () => await Promise.all([r.e(36556), r.e(55373), r.e(36192), r.e(49806), r.e(79974), r.e(45414), r.e(52466), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(53050), r.e(87353), r.e(45213), r.e(5721), r.e(57688), r.e(64696), r.e(76135), r.e(16922), r.e(31190), r.e(41882)]).then(r.bind(r, 828948))), e => e.PostOnboardingAgentCallout)
        },
        959526: (e, t, r) => {
            r.d(t, {
                s: () => a
            }), r(296540);
            let n = (0, r(815048)._h)(new(r(815048)).O2("SidebarSectionWithPopup", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(35837), r.e(25867), r.e(88595), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(43444), r.e(23979), r.e(73259), r.e(87971), r.e(4779), r.e(55067), r.e(50354), r.e(14231), r.e(18406), r.e(97615), r.e(48095), r.e(10188), r.e(18802), r.e(20957), r.e(53157), r.e(58033), r.e(79563), r.e(6782), r.e(74936), r.e(5309), r.e(76060), r.e(2209)]).then(r.bind(r, 485059))), e => e.SidebarSectionWithPopup);
            var i = r(474848);

            function a(e) {
                let t = (0, r(972740).L)(),
                    a = (0, r(682985).K8)(() => null == t ? void 0 : t.getPlanType(), [t]);
                return t ? (0, i.jsx)(n, {
                    renderLoading: () => e.content,
                    spacePlan: a,
                    ...e
                }) : e.content
            }
        },
        961696: (e, t, r) => {
            r.d(t, {
                H: () => n
            });

            function n() {
                return (0, r(682985).O$)(r(728372).AppStoreCurrentUserSettingsStore)
            }
        },
        968456: (e, t, r) => {
            r.d(t, {
                _: () => a
            });
            var n = () => r(546605);
            class i extends n().Store {
                getInitialState() {
                    return {
                        shouldRenderTextPrompt: !1,
                        isNewUserHomeExperimentActive: !1,
                        isStudentHomeActive: !1
                    }
                }
                getShouldRenderTextPrompt() {
                    return this.state.shouldRenderTextPrompt
                }
                getIsNewUserHomeExperimentActive() {
                    return this.state.isNewUserHomeExperimentActive
                }
                getIsStudentHomeActive() {
                    return this.state.isStudentHomeActive
                }
            }
            let a = new i
        }
    }
]);