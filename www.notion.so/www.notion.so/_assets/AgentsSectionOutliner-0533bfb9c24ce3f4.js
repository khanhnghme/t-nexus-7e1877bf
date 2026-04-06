"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [22197, 99430], {
        1249: (e, t, n) => {
            n.d(t, {
                g: () => a
            });

            function a(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        18274: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var a = n(474848);

            function i(e) {
                return (0, a.jsx)(n(746434).E, {
                    style: e.style,
                    content: (0, a.jsx)(n(109939).sA, {
                        id: "betaBadgeComponent.label",
                        defaultMessage: "Beta"
                    })
                })
            }
        },
        69371: (e, t, n) => {
            n.d(t, {
                N: () => i
            });
            let a = new(n(815048)).O2("OutlinerDropdownMenuButton", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(26361), n.e(16471), n.e(37353), n.e(62475), n.e(3151), n.e(18965), n.e(98629), n.e(96527), n.e(30085), n.e(90109), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(54951), n.e(43444), n.e(23979), n.e(17250), n.e(26997), n.e(73259), n.e(28048), n.e(93430), n.e(55940), n.e(12560), n.e(88268), n.e(12001), n.e(40198), n.e(39726), n.e(31243), n.e(42534), n.e(86662), n.e(14886), n.e(39225), n.e(6212), n.e(2626), n.e(64453), n.e(4779), n.e(21969), n.e(29663), n.e(28482), n.e(76361), n.e(14369), n.e(74145), n.e(48860), n.e(75136), n.e(98175), n.e(18682), n.e(79349), n.e(58360), n.e(33162), n.e(82538), n.e(63793), n.e(18881), n.e(62731), n.e(41049), n.e(60262), n.e(72805), n.e(18416), n.e(2276), n.e(30532), n.e(73588), n.e(3723), n.e(91100), n.e(78311), n.e(4287), n.e(9817), n.e(65594), n.e(47302), n.e(91636), n.e(36441), n.e(64049), n.e(75189), n.e(28372), n.e(28663), n.e(47281), n.e(29087), n.e(46350), n.e(75234), n.e(67281), n.e(66200), n.e(52064), n.e(69626), n.e(82816), n.e(2832), n.e(48095), n.e(67098), n.e(35118), n.e(63611), n.e(94849), n.e(75484), n.e(98821), n.e(97711), n.e(89076), n.e(86998), n.e(58889), n.e(22920), n.e(9914), n.e(78257), n.e(84382), n.e(51386), n.e(95150), n.e(10471), n.e(87087), n.e(98419), n.e(11719), n.e(13592), n.e(6743), n.e(5234), n.e(85376), n.e(67252), n.e(42709), n.e(44903), n.e(92181), n.e(7251), n.e(72143), n.e(67612), n.e(53478), n.e(75559), n.e(86793), n.e(34), n.e(54253), n.e(26665), n.e(67984), n.e(605), n.e(75681)]).then(n.bind(n, 165668))),
                i = (0, n(815048)._h)(a, e => e.OutlinerDropdownMenuButton)
        },
        79268: (e, t, n) => {
            n.d(t, {
                C: () => i
            });
            var a = n(296540);

            function i({
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
                        campaign: g,
                        loading: h
                    } = (0, n(435276).V)(t),
                    [m, f] = function(e) {
                        let {
                            upsell: t
                        } = e, i = (0, n(533992).v3)(), r = (0, n(972740).L)(), l = (0, n(993077).U2)(), o = null == r ? void 0 : r.id, s = (0, n(345776).T)(), d = (0, n(226309).lh)({
                            spaceId: o
                        }), u = (null == t ? void 0 : t.type) === "product" ? t.product : void 0, c = (0, n(682985).K8)(() => {
                            if (o) return n(477870).L.getData(i, {
                                spaceId: o
                            })
                        }, [i, o]), p = (0, n(682985).K8)(() => (0, n(966458).Jg)({
                            product: u,
                            userId: s,
                            billingData: d,
                            spaceStore: r,
                            spaceUserStore: l,
                            existingRequests: c
                        }), [u, s, d, r, l, c]), [g, h] = (0, a.useState)(p);
                        return (0, a.useEffect)(() => {
                            h(p)
                        }, [p]), [g, h]
                    }({
                        upsell: e ? ? {
                            type: "none"
                        }
                    }),
                    b = (0, n(682985).K8)(() => e ? (0, n(96495).a)({
                        environment: d,
                        upsell: e,
                        spaceStore: s,
                        salesStatus: u,
                        campaign: g,
                        requestState: m,
                        billingData: c,
                        source: t,
                        loading: h
                    }) : {
                        status: "not_eligible",
                        reason: "feature_not_upsellable"
                    }, [s, d, e, u, g, m, c, t, h]),
                    v = (0, a.useCallback)(async () => {
                        if (!e) return;
                        let a = "product" === e.type ? e.product : void 0,
                            i = (0, n(555676).x)();
                        if (!i) return;
                        let [, {
                            getUpgradeSystemAction: u
                        }] = await Promise.all([null == l ? void 0 : l(), i()]), h = u(b);
                        await h({
                            source: t,
                            spaceStore: s,
                            product: a,
                            billingData: c,
                            environment: d,
                            setRequestState: f,
                            userId: p,
                            buttonDisplayType: r,
                            postUpgradeCallback: o,
                            campaign: g,
                            isEligibleForAgentBusinessTrial: "ai_agent" === t && "product" === e.type && "preferred" === e.trialability
                        })
                    }, [e, l, b, t, s, c, d, f, p, r, o, g]);
                return {
                    upgradeEligibility: b,
                    handleClick: v
                }
            }
        },
        109337: (e, t, n) => {
            n.d(t, {
                J: () => l,
                m: () => r
            });
            var a = n(296540);
            let i = (0, a.createContext)({
                onClose: n(763230).lQ
            });
            i.displayName = "SlipperySlopeFlyoutContext";
            let r = i.Provider;

            function l() {
                return (0, a.useContext)(i)
            }
        },
        191627: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var a = n(296540),
                i = n(474848);

            function r({
                badgeConfig: e
            }) {
                let {
                    badge_type: t,
                    badge_click_url: l,
                    standard_badge_click_url: s
                } = e, d = (0, a.useMemo)(() => null != s && s.length ? s : null != l && l.length ? l : void 0, [l, s]);
                switch (t) {
                    case "alpha":
                        return d ? (0, i.jsx)(n(331700).m, {
                            href: d,
                            type: "alpha"
                        }) : null;
                    case "beta":
                        return (0, i.jsx)(o, {
                            href: d
                        });
                    default:
                        return null
                }
            }
            let l = {
                bold: {
                    fontWeight: n(699422).Wy.semibold
                }
            };

            function o({
                href: e
            }) {
                let [t, r] = (0, a.useState)(!1), {
                    state: s,
                    pinPopup: d,
                    unpinPopup: u
                } = (0, n(473234).v)({
                    immediateState: t || void 0
                }), c = (0, a.useMemo)(() => ({
                    onMouseEnter: () => r(!0),
                    onMouseLeave: () => r(!1)
                }), []);
                return (0, i.jsx)(n(182718).zD, {
                    disableMouseCapture: !0,
                    preventCaptureEsc: !0,
                    preventScaleTransition: !0,
                    preventOpacityTransition: !0,
                    originGap: 6,
                    open: !!s,
                    popupType: n(182718).nl.Popup,
                    alignmentToOrigin: "start",
                    placementToOrigin: "bottom",
                    trapFocus: !1,
                    content: () => (0, i.jsxs)(n(4458).VP, {
                        width: 212,
                        alignItems: "flex-start",
                        gap: 8,
                        padding: 12,
                        onMouseEnter: d,
                        onMouseLeave: u,
                        children: [(0, i.jsx)(n(908975).W, {}), (0, i.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            children: (0, i.jsx)(n(109939).sA, {
                                id: "customAgentsRolloutBadge.beta.popupText",
                                defaultMessage: "<b>Custom Agents are free to try during beta.</b> Starting May 4, they use Notion credits, which workspace admins can purchase as an add-on to your plan.",
                                values: {
                                    b: e => (0, i.jsx)("span", {
                                        style: l.bold,
                                        children: e
                                    })
                                }
                            })
                        }), e ? (0, i.jsx)(n(548436).A, {
                            href: e,
                            external: !0,
                            children: (0, i.jsx)(n(109939).sA, {
                                id: "customAgentsRolloutBadge.learnMore",
                                defaultMessage: "Learn more"
                            })
                        }) : null]
                    }),
                    children: (0, i.jsx)("div", { ...c,
                        children: e ? (0, i.jsx)(n(331700).m, {
                            href: e,
                            type: "beta"
                        }) : (0, i.jsx)(n(18274).A, {})
                    })
                })
            }
        },
        200424: (e, t, n) => {
            e.exports = n.p + "9ade71d75a1c0e93.png"
        },
        210037: (e, t, n) => {
            n.d(t, {
                r: () => r
            });
            var a = () => n(546605);
            class i extends a().Store {
                getInitialState() {
                    return {
                        isOpen: !1,
                        openCount: 0,
                        from: void 0
                    }
                }
            }
            let r = new i;
            (0, n(202146).exposeDebugValue)("agentPersonalizationSettingsModalStore", r)
        },
        220171: (e, t, n) => {
            n.d(t, {
                ew: () => i
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            let a = {
                development: "3d71863b-5974-8105-a661-0003ef2bd936",
                production: "e12b42ac-4e54-476f-a4f5-7d6bdb1e61e2"
            };

            function i(e) {
                let {
                    env: t,
                    localTemplateSpaceId: n
                } = e;
                return "local" !== t ? a[t] : n
            }
        },
        291193: (e, t, n) => {
            n.d(t, {
                M: () => a
            });
            let a = new(n(273917)).U((e, {
                templateSpaceId: t,
                locale: n
            }) => `${t??"local"}:${n}`, async (e, {
                spaceId: t,
                templateSpaceId: n,
                locale: a
            }) => {
                if (!t) return;
                let i = await e.api.callCellCompatibleApi({
                    eventName: "getAgentTemplates",
                    environment: e,
                    data: {
                        spaceId: t,
                        locale: a
                    },
                    cellNavigation: {
                        spaceId: n ? ? t
                    }
                });
                return "success" === i.type ? i.data.templates : void 0
            })
        },
        327785: (e, t, n) => {
            n.d(t, {
                D: () => a
            }), n(944114);

            function a() {
                let e = (0, n(972740).L)(),
                    t = (0, n(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    a = (0, n(192159).TB)(t),
                    i = (0, n(682985).K8)(() => a && (0, n(717274).tL)({
                        disableExposureLogging: !0
                    }), [a]),
                    {
                        progress: r
                    } = (0, n(555583).n)({
                        useRedesigned: i
                    }),
                    l = (0, n(262166).HO)((0, n(192159).AI)(t));
                return (0, n(682985).K8)(() => {
                    if (!(0, n(717274).sw)()) return [];
                    let e = [];
                    return l && !a ? e.push("dog") : l && i && r >= 1 && e.push("dog"), e
                }, [l, a, i, r])
            }
        },
        331700: (e, t, n) => {
            n.d(t, {
                m: () => l
            }), n(296540);
            var a = n(474848);
            let i = (0, n(109939).YK)({
                    alpha: {
                        id: "linkBadge.alpha",
                        defaultMessage: "Alpha"
                    },
                    beta: {
                        id: "linkBadge.beta",
                        defaultMessage: "Beta"
                    }
                }),
                r = {
                    borderRadius: 4
                };

            function l({
                href: e,
                type: t
            }) {
                return (0, a.jsx)(n(64960).Ay, {
                    href: e,
                    style: r,
                    external: !0,
                    children: (0, a.jsx)(n(746434).E, {
                        content: (0, a.jsx)(n(109939).sA, { ...i[t]
                        })
                    })
                })
            }
        },
        346596: (e, t, n) => {
            n.d(t, {
                L: () => i,
                k: () => r
            });
            var a = n(296540);

            function i(e) {
                let {
                    workflowIdFromRoute: t,
                    spaceStore: i
                } = (0, n(682985).K8)(() => ({
                    workflowIdFromRoute: "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    spaceStore: n(728372).AppStoreSidebarSpaceStore.state
                }), [e]);
                return (0, a.useMemo)(() => {
                    if (t && i) return n(360851).N.createChildStore(i, {
                        table: n(43296).C,
                        id: t,
                        spaceId: i.id
                    })
                }, [t, i])
            }

            function r(e) {
                let t = "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    a = n(728372).AppStoreSidebarSpaceStore.state;
                if (t && a) return n(360851).N.createChildStore(a, {
                    table: n(43296).C,
                    id: t,
                    spaceId: a.id
                })
            }
        },
        368891: (e, t, n) => {
            n.d(t, {
                g: () => a
            });

            function a() {
                return (0, n(682985).O$)(n(728372).AppStoreCurrentUserSettingsStore)
            }
        },
        398035: (e, t, n) => {
            n.r(t), n.d(t, {
                AgentsSectionOutliner: () => r
            });
            var a = n(296540),
                i = n(474848);

            function r() {
                var e;
                let t, r, l = (0, n(345776).T)(),
                    {
                        sidebarSpaceViewStore: o,
                        sidebarSpaceStore: s
                    } = (0, n(682985).K8)(() => ({
                        sidebarSpaceViewStore: n(728372).AppStoreSidebarSpaceViewStore.state,
                        sidebarSpaceStore: (0, n(328765).S)()
                    }), []);
                e = null == s ? void 0 : s.id, t = (0, n(533992).v3)(), r = (0, n(83208).X)("use_multi_cell_agent_templates") ? (0, n(220171).ew)({
                    env: "production",
                    localTemplateSpaceId: n(986939).A.localAgentTemplateSpaceId
                }) : void 0, (0, a.useEffect)(() => {
                    e && n(291193).M.getData(t, {
                        spaceId: e,
                        templateSpaceId: r,
                        locale: n(849917).locale
                    })
                }, [t, e, r]);
                let d = (0, n(682985).uB)(void 0, n(742112).I),
                    u = (0, n(682985).K8)(() => d.state.isHidden, [d]),
                    c = (0, n(611285).P)({
                        name: "custom_agents",
                        spaceId: null == s ? void 0 : s.id,
                        userId: l
                    }) ? ? !1,
                    {
                        canCreate: p
                    } = (0, n(639938).V)(),
                    [g, h] = (0, a.useState)(u);
                (0, a.useEffect)(() => {
                    g !== u && h(u)
                }, [u, g]);
                let m = (0, n(682985).K8)(() => n(218744).default.getConfig({
                    configName: "custom_agent_rollout_badge"
                }), []);
                return (0, i.jsx)(n(959526).s, {
                    content: (0, i.jsx)(n(615096).ty, {
                        type: "agents",
                        from: "main_sidebar",
                        spaceStore: s,
                        spaceViewStore: o,
                        shouldPersistToggleState: !0,
                        showAddButton: c && p,
                        sectionLabelBadge: "none" === m.badge_type ? void 0 : (0, i.jsx)(n(191627).A, {
                            badgeConfig: m
                        }),
                        outlinerToggleButtonStore: d,
                        labelTooltip: (0, i.jsx)(n(109939).sA, {
                            defaultMessage: "Agents you have visited recently.",
                            id: "sidebar.agentsSection.tooltip"
                        }),
                        right: o ? (0, i.jsx)(n(69371).N, {
                            type: "agents",
                            spaceViewStore: o
                        }) : null,
                        renderSidebar: ({
                            labelAriaId: e,
                            contentsAriaId: t
                        }) => (0, i.jsx)(n(4458).VP, {
                            gap: 1,
                            width: "100%",
                            children: (0, i.jsx)(n(584592).Dg, {
                                id: t,
                                "aria-labelledby": e
                            })
                        })
                    }),
                    type: "agents"
                })
            }
        },
        411106: (e, t, n) => {
            n.d(t, {
                L: () => l,
                p: () => r
            });
            let a = ["aiMeetingNotes", "meetAgent", "academy", "consultants"],
                i = ["aiMeetingNotes", "meetAgent", "database", "academy"],
                r = ["aiMeetingNotes", "mailAndCalendar", "aiSearch", "meetAgent"];

            function l(e, t) {
                return e ? "en-US" === t ? a : ["aiMeetingNotes", "meetAgent", "academy", "connectedApps"] : i
            }
        },
        425749: (e, t, n) => {
            n.d(t, {
                I$: () => l,
                R2: () => d,
                WF: () => s,
                bZ: () => o,
                cE: () => i,
                jX: () => r,
                rz: () => u
            });
            var a = () => n(381453);

            function i(e) {
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
                    if (a().n4(e, t)) return !0;
                return !1
            }
        },
        435276: (e, t, n) => {
            n.d(t, {
                V: () => a
            });

            function a(e) {
                let t = (0, n(533992).v3)(),
                    a = (0, n(972740).L)(),
                    {
                        spaceId: i,
                        spaceName: r
                    } = (0, n(682985).K8)(() => a ? {
                        spaceId: a.getSpaceId(),
                        spaceName: (0, n(742197).G)(t, a)
                    } : {
                        spaceId: void 0,
                        spaceName: void 0
                    }, [t, a]),
                    [{
                        value: l,
                        status: o
                    }] = (0, n(97668).Yb)(async () => {
                        if (!i) return;
                        let a = await (0, n(124094).E)(t, i, e);
                        if (a) return r && (0, n(124094).Z)({
                            environment: t,
                            spaceName: r,
                            campaign: a,
                            entrypoint: e
                        }), a
                    }, [t, i, r, e]);
                return {
                    campaign: l,
                    loading: "pending" === o || "idle" === o
                }
            }
        },
        445283: (e, t, n) => {
            n.d(t, {
                N: () => a
            });

            function a(e) {
                if ("avatar" === e) return n(616922).eQ;
                if ("xsmall" === e) return 18;
                if ("xsmall_plus" === e) return 24;
                if ("small" === e) return 28;
                if ("small_plus" === e) return 32;
                else if ("medium" === e) return 36;
                else if ("medium_sidebar_button" === e) return 40;
                else if ("medium_plus" === e) return 44;
                else if ("medium_large" === e) return 48;
                else if ("large" === e) return 50;
                else if ("large_plus" === e) return 64;
                else if ("xlarge" === e) return 94;
                else if ("plans" === e) return 20;
                else if ("deep_dive" === e) return 16;
                else if ("upsell_banner" === e) return 74;
                else if ("personalization_modal" === e) return 96;
                else return (0, n(722371).HB)(e)
            }
        },
        458364: (e, t, n) => {
            n.d(t, {
                x: () => l
            }), n(296540);
            var a = n(474848);
            let i = {
                    "baseball-cap": n(584758),
                    bow: n(313669),
                    cat: n(641085),
                    cherry: n(941670),
                    cowboy: n(161412),
                    crown: n(722784),
                    dog: n(965967),
                    duck: n(190462),
                    firefighter: n(124394),
                    flower: n(784836),
                    glasses: n(31461),
                    headphone: n(202151),
                    leaf: n(938989),
                    magician: n(550122),
                    mustache: n(546579),
                    paprika: n(368733),
                    pencil: n(303626),
                    propeller: n(58344),
                    "safety-hat": n(682759),
                    scarf: n(832338),
                    "seasonal-bat": n(8779),
                    "seasonal-demon": n(269515),
                    "seasonal-frankenstein": n(441892),
                    "seasonal-pumpkin": n(113174),
                    "seasonal-santa-hat": n(970878),
                    "seasonal-new-year": n(465707)
                },
                r = {
                    "baseball-cap": n(340916),
                    bow: n(279206),
                    cat: n(422550),
                    cherry: n(580899),
                    cowboy: n(251861),
                    crown: n(121421),
                    dog: n(528440),
                    duck: n(104455),
                    firefighter: n(498667),
                    flower: n(733785),
                    glasses: n(701743),
                    headphone: n(665008),
                    leaf: n(620842),
                    magician: n(625031),
                    mustache: n(445872),
                    paprika: n(386194),
                    pencil: n(390123),
                    propeller: n(783925),
                    "safety-hat": n(702404),
                    scarf: n(98303),
                    "seasonal-bat": n(688220),
                    "seasonal-demon": n(279728),
                    "seasonal-frankenstein": n(879817),
                    "seasonal-pumpkin": n(258527),
                    "seasonal-santa-hat": n(667115),
                    "seasonal-new-year": n(49396)
                };

            function l({
                accessory: e,
                variant: t = "large",
                shadowVariant: o,
                smallerFace: s,
                accessorySpeechBubblePlacement: d = "none",
                speechBubbleTextOverride: u,
                speechBubbleVerticalOffsetPx: c,
                speechBubbleHorizontalOffsetPx: p,
                animateDogAccessory: g = !0,
                speechBubbleTailCircleTop: h,
                speechBubbleTailCircleInsetInlineStartPx: m,
                ...f
            }) {
                let b = "dark" === (0, n(960253).e)(),
                    v = (0, n(445283).N)(t),
                    y = Math.round(1.5625 * v),
                    C = (0, n(960253).I)(() => ({
                        container: {
                            position: "relative",
                            width: v,
                            height: v,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        faceWrapper: {
                            transform: s ? "scale(0.85)" : void 0
                        },
                        accessoryOverlay: {
                            position: "absolute",
                            width: y,
                            height: y,
                            objectFit: "contain",
                            pointerEvents: "none",
                            top: "50%",
                            transform: "translate(calc(var(--direction, 1) * -50%), -50%) scaleX(var(--direction, 1))",
                            insetInlineStart: "50%"
                        }
                    }), [v, y, s]),
                    _ = e ? (b ? r : i)[e] : null;
                return (0, a.jsx)("div", { ...f,
                    children: (0, a.jsxs)("div", {
                        style: C.container,
                        children: [(0, a.jsx)("div", {
                            style: C.faceWrapper,
                            children: (0, a.jsx)(n(448734).Ax, {
                                variant: t,
                                animationMode: e ? "minimal" : "normal",
                                shadowVariant: o
                            })
                        }), "dog" === e ? (0, a.jsx)("div", {
                            style: C.accessoryOverlay,
                            children: (0, a.jsx)(n(503681).z, {
                                size: y,
                                speechBubblePlacement: d,
                                speechBubbleTextOverride: u,
                                speechBubbleVerticalOffsetPx: c,
                                speechBubbleHorizontalOffsetPx: p,
                                speechBubbleTailCircleTop: h,
                                speechBubbleTailCircleInsetInlineStartPx: m,
                                animated: g
                            })
                        }) : _ ? (0, a.jsx)("img", {
                            src: _,
                            alt: `${e} accessory`,
                            style: C.accessoryOverlay
                        }) : void 0]
                    })
                })
            }
        },
        463226: (e, t, n) => {
            n.d(t, {
                DV: () => u,
                EQ: () => o,
                Mu: () => s,
                Nr: () => d,
                cP: () => i,
                m0: () => l,
                m2: () => a,
                s8: () => r
            }), n(898992), n(354520);
            let a = {
                "baseball-cap": "permanent",
                bow: "permanent",
                cat: "permanent",
                cherry: "permanent",
                cowboy: "permanent",
                crown: "permanent",
                dog: "unlockable",
                duck: "permanent",
                firefighter: "permanent",
                flower: "permanent",
                glasses: "permanent",
                headphone: "permanent",
                leaf: "permanent",
                magician: "permanent",
                mustache: "permanent",
                paprika: "permanent",
                pencil: "permanent",
                propeller: "permanent",
                "safety-hat": "permanent",
                scarf: "permanent",
                "seasonal-bat": "october25",
                "seasonal-demon": "october25",
                "seasonal-frankenstein": "october25",
                "seasonal-pumpkin": "october25",
                "seasonal-santa-hat": "december25",
                "seasonal-new-year": "january26"
            };

            function i(e) {
                let {
                    store: t,
                    from: a
                } = e;
                if (t.update(e => ({ ...e,
                        isOpen: !0,
                        openCount: e.openCount + 1,
                        from: a || "unknown"
                    })), e.shouldSetSeenPersonalizationSettingsModal) {
                    let t = n(728372).AppStoreSidebarSpaceViewStore.state;
                    t && (0, n(377796).createAndCommit)({
                        environment: e.environment,
                        cellTarget: {
                            spaceWithId: t.getSpaceId()
                        },
                        userAction: "AgentPersonalizationSettings.markSeen",
                        canUndo: !1,
                        perform: e => {
                            let a = t.getSettings() || {},
                                i = { ...a,
                                    agent_personalization_settings: { ...a.agent_personalization_settings || {},
                                        has_already_seen_personalization_settings_modal: !0
                                    }
                                };
                            n(380762).AG(t, e, i)
                        }
                    })
                }
            }

            function r(e) {
                let {
                    store: t
                } = e;
                t.update(e => ({ ...e,
                    isOpen: !1
                }))
            }

            function l(e) {
                let {
                    store: t
                } = e;
                return t.state.isOpen
            }

            function o(e) {
                let {
                    store: t
                } = e;
                return t.state.from || "unknown"
            }

            function s(e) {
                var t;
                let {
                    environment: a,
                    agentName: i,
                    customizationItems: r,
                    newPageIdToAdd: l,
                    contextPageId: o
                } = e, s = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!s) return;
                let d = null == (t = s.getSettings()) ? void 0 : t.agent_personalization_settings,
                    u = (null == d ? void 0 : d.recently_used_pages) || [];
                l && ((u = u.filter(e => e.page_id !== l)).unshift({
                    page_id: l,
                    used_at: Date.now()
                }), u = u.slice(0, 10));
                let c = {
                    name: i,
                    customization_items: r,
                    context_page_id: o,
                    recently_used_pages: u.length > 0 ? u : void 0,
                    has_already_seen_personalization_settings_modal: (null == d ? void 0 : d.has_already_seen_personalization_settings_modal) || !0
                };
                (0, n(795676).A)(c, d) || (0, n(377796).createAndCommit)({
                    environment: a,
                    cellTarget: {
                        spaceWithId: s.getSpaceId()
                    },
                    userAction: "AgentPersonalizationSettings.save",
                    canUndo: !0,
                    perform: e => {
                        let t = s.getSettings() || {},
                            i = { ...t,
                                agent_personalization_settings: { ...t.agent_personalization_settings || {},
                                    ...c
                                }
                            };
                        n(380762).AG(s, e, i);
                        let r = null == d ? void 0 : d.context_page_id;
                        if (void 0 !== r && r !== o) {
                            let t = new(n(970831)).B(a, {
                                table: n(832375).evP,
                                id: r
                            }).getPromptStore();
                            null != t && t.isDefined() && (0, n(173157).z)({
                                store: t,
                                data: {
                                    alive: !1
                                },
                                transaction: e
                            })
                        }
                        void 0 !== o && (t => {
                            let i = new(n(970831)).B(a, {
                                    table: n(832375).evP,
                                    id: t
                                }),
                                r = i.getSpaceId();
                            if (!r) return;
                            let l = i.getPromptStore();
                            if (l) {
                                if (l.isDefined()) return (0, n(173157).z)({
                                    store: l,
                                    data: {
                                        alive: !0,
                                        prompt_type: "instruction"
                                    },
                                    transaction: e
                                });
                                n(124937).vt({
                                    environment: a,
                                    table: n(832375).dod,
                                    args: {
                                        id: (0, n(986339).yW)(i.id),
                                        space_id: r,
                                        parent_id: i.id,
                                        parent_table: n(832375).evP,
                                        prompt_type: "instruction"
                                    },
                                    inMemoryRecordCache: i.inMemoryRecordCache,
                                    transaction: e
                                })
                            }
                        })(o)
                    }
                })
            }

            function d() {
                let e = (0, n(327785).D)();
                return (0, n(682985).K8)(() => {
                    let t = n(218744).default.getConfigKey("agent_seasonal_accessories", "batch"),
                        i = n(218744).default.getConfigKey("agent_seasonal_accessories", "batch_expiration_time"),
                        r = i && new Date(i) < new Date;
                    return n(485890).sy.filter(n => {
                        let i = a[n];
                        return "permanent" === i || ("unlockable" === i ? e.includes(n) : i === t && !r)
                    })
                }, [e])
            }

            function u(e) {
                let t = d();
                return (0, n(682985).K8)(() => {
                    var a;
                    let i = null == e ? void 0 : e.getSettings();
                    if (!i) return;
                    let r = i.agent_personalization_settings;
                    if (null != r && null != (a = r.customization_items) && a[0]) {
                        let e = r.customization_items[0];
                        if (t.includes(e)) return e
                    }
                    if (null == r ? void 0 : r.has_already_seen_personalization_settings_modal) return;
                    let l = n(218744).default.checkGate({
                            gateName: "adoption_enable_agent_personalization_phase_one",
                            disableExposureLogging: !0
                        }),
                        o = n(218744).default.checkGate({
                            gateName: "adoption_enable_agent_personalization_phase_two",
                            disableExposureLogging: !0
                        });
                    if (l) {
                        let e = n(218744).default.getEligibleGroup({
                            experimentId: "adoption_agent_random_personalization_bandit",
                            defaultGroup: "control"
                        });
                        if (!e) return;
                        let t = function(e) {
                            let {
                                variant: t
                            } = e, a = c[t];
                            if (!a) return;
                            let i = n(218744).default.getEligibleGroup({
                                experimentId: a
                            });
                            if (i && "control" !== i && i && n(485890).sy.includes(i)) return i
                        }({
                            variant: e
                        });
                        if (t) return t
                    } else if (o) {
                        let {
                            accessory: e
                        } = function() {
                            let e, t = n(218744).default.getEligibleGroup({
                                experimentId: "adoption_agent_long_running_bandit",
                                defaultGroup: "ineligible"
                            });
                            if ("test" === t) {
                                let t = n(218744).default.getEligibleGroup({
                                    experimentId: "adoption_agent_personalization_phase_two_long_running"
                                });
                                t && "control" !== t && (e = t)
                            }
                            return {
                                accessory: e,
                                variant: t
                            }
                        }();
                        if (e) return e
                    }
                }, [e, t])
            }
            let c = {
                control: void 0,
                group_one: "adoption_agent_personalization_phase_one_group_one",
                group_two: "adoption_agent_personalization_phase_one_group_two",
                group_three: "adoption_agent_personalization_phase_one_group_three",
                group_four: "adoption_agent_personalization_phase_one_group_four"
            }
        },
        473234: (e, t, n) => {
            n.d(t, {
                v: () => i
            });
            var a = n(296540);

            function i(e) {
                let {
                    immediateState: t,
                    isEqual: n = Object.is,
                    openDelayMs: i = 400,
                    closeDelayMs: r = 150
                } = e, [l, o] = (0, a.useState)(!1), [s, d] = (0, a.useState)(void 0), u = !!(s && !n(t, s));
                (0, a.useEffect)(() => {
                    if (u) {
                        let e = setTimeout(() => {
                            d(void 0)
                        }, r);
                        return () => clearTimeout(e)
                    }
                }, [u, r]);
                let c = !!(t && !n(t, s));
                (0, a.useEffect)(() => {
                    if (t && c) {
                        let e = setTimeout(() => {
                            d(t)
                        }, i);
                        return () => clearTimeout(e)
                    }
                }, [t, c, i]);
                let [p, g] = (0, a.useState)(void 0), h = p ? ? (l ? void 0 : s), m = (0, a.useCallback)(() => {
                    g(h)
                }, [h]), f = (0, a.useCallback)(() => {
                    g(void 0)
                }, []), b = (0, a.useCallback)(() => {
                    f(), o(!0)
                }, [f]);
                return (0, a.useEffect)(() => {
                    o(!1)
                }, [s]), {
                    state: h,
                    pinPopup: m,
                    unpinPopup: f,
                    hasBeenHovering: !!(t && n(t, h)),
                    isPinned: !!p,
                    dismissPopup: b
                }
            }
        },
        476743: (e, t, n) => {
            n.d(t, {
                a: () => a
            });

            function a() {
                return (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore)
            }
        },
        540048: (e, t, n) => {
            n.d(t, {
                H: () => s
            });
            var a = n(296540);
            let i = (0, n(815048)._h)(new(n(815048)).O2("SlipperySlopeFlyoutMenu", async () => await Promise.all([n.e(40994), n.e(96579), n.e(16922), n.e(20491), n.e(10469), n.e(76440)]).then(n.bind(n, 49075))), e => e.SlipperySlopeFlyoutMenu),
                r = ["favorites", "private", "shared", "agents", "teamspaces", "recents"];
            var l = n(474848);
            let o = {
                button: { ...n(153262).hG,
                    height: n(132261).Zr
                },
                buttonHovered: {
                    background: n(632079).Tj.sidebarItemSelectedBackground
                },
                sidebarItem: {
                    fontWeight: n(699422).Wy.medium,
                    color: n(632079).Tj.sidebarSecondaryColor
                }
            };

            function s(e) {
                let {
                    onClick: t,
                    tooltipMessage: s,
                    label: d,
                    icon: u,
                    sidebarSectionType: c
                } = e, p = (0, n(665002).g)(), g = (0, n(784331).qX)() && !!(0, n(722371).Xk)(r, c), h = (0, a.useCallback)(e => {
                    g || t(e)
                }, [t, g]), m = (0, a.useCallback)(e => (0, l.jsx)(n(51831).m, {
                    content: () => s,
                    originGap: 6,
                    placement: "right",
                    children: t => (0, l.jsx)(n(64960).Ay, {
                        onClick: h,
                        style: { ...o.button,
                            ...p && {
                                transition: "none"
                            }
                        },
                        hoveredStyle: o.buttonHovered,
                        ...(0, n(63390).A)(t, e ? ? {}),
                        children: (0, l.jsx)(n(380559).u, {
                            left: (0, l.jsx)(n(16275).I, {
                                icon: u ? ? n(361226).ellipsisSmallIcon,
                                size: "sm",
                                colorVariant: n(986939).A.isMobile ? "tertiary" : "secondary"
                            }),
                            childrenStyle: o.sidebarItem,
                            children: d ? ? (0, l.jsx)(n(109939).sA, {
                                defaultMessage: "More",
                                id: "sidebar.openAllPages.button"
                            })
                        })
                    })
                }), [s, h, p, d, u]);
                return g ? (0, l.jsx)(n(656252).A, {
                    content: e => (0, l.jsx)(n(109337).m, {
                        value: {
                            onClose: e.close
                        },
                        children: (0, l.jsx)(i, {
                            sidebarSectionType: c
                        })
                    }),
                    popupType: n(182718).nl.Popup,
                    placementToOrigin: "right",
                    alignmentToOrigin: "start",
                    originGap: 16,
                    preventScaleTransition: !0,
                    children: e => m(e)
                }) : m()
            }
        },
        555583: (e, t, n) => {
            n.d(t, {
                n: () => i
            }), n(898992), n(354520);
            var a = n(296540);

            function i({
                useRedesigned: e
            } = {
                useRedesigned: !1
            }) {
                let t = (0, n(109939).tz)(),
                    r = (0, n(599412).H)(t),
                    l = (0, n(972740).L)(),
                    o = (0, n(682985).K8)(() => (null == l ? void 0 : l.canAdmin()) ? ? !1, [l]),
                    s = (0, n(871086).w)(),
                    d = (0, a.useMemo)(() => e ? n(411106).p : (0, n(411106).L)(o, r), [o, r, e]),
                    u = (0, a.useMemo)(() => Object.entries(s ? ? {}).filter(([e]) => (0, n(722371).Xk)(d, e)).length, [s, d]),
                    c = d.length,
                    p = c > 0 ? u / c : 0,
                    g = (0, a.useMemo)(() => new Intl.NumberFormat(r, {
                        style: "percent"
                    }).format(p), [p, r]);
                return {
                    progress: p,
                    progressDisplay: g,
                    completedCount: u,
                    totalCount: c,
                    completedItems: s ? ? {}
                }
            }
        },
        555676: (e, t, n) => {
            let a;

            function i(e) {
                a = e
            }

            function r() {
                return a
            }
            n.d(t, {
                w: () => i,
                x: () => r
            })
        },
        584592: (e, t, n) => {
            n.d(t, {
                Dg: () => _,
                Kb: () => b,
                wu: () => f,
                Hd: () => y,
                qT: () => v
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454);
            var a = n(296540);
            n(944114), n(803949);
            var i = n(474848);
            let r = {
                    gridWrapper: {
                        width: "100%",
                        transition: "all 0.3s cubic-bezier(0.45, 0, 0.55, 1)"
                    },
                    grid: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(76px, 1fr))",
                        width: "100%"
                    },
                    cell: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                        padding: 8,
                        borderRadius: 8,
                        minWidth: 0,
                        overflow: "visible",
                        width: "100%"
                    },
                    bubbleContainer: {
                        width: 44,
                        height: 44,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                    },
                    label: {
                        fontSize: 10,
                        lineHeight: "14px",
                        color: n(632079).Tj.text.tertiary,
                        textAlign: "center",
                        width: "100%",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical"
                    },
                    cellHovered: {
                        background: n(632079).Tj.sidebarItemSelectedBackground
                    },
                    newAgentBubble: {
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: `1.5px dashed ${n(632079).Tj.border.primaryTranslucent}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                    },
                    moreBubble: {
                        width: 44,
                        height: 44,
                        flexShrink: 0
                    },
                    moreBubbleSvg: {
                        color: n(632079).Tj.icon.primary,
                        opacity: .25
                    },
                    notionAiBubbleContainer: {
                        width: 44,
                        height: 44,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                    },
                    notionAiFace: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                },
                l = new Set(["firefighter", "duck", "paprika", "cat", "crown", "cherry", "leaf", "cowboy", "propeller"]),
                o = "__notion-ai__",
                s = "__more__",
                d = "__new-agent__";

            function u(e) {
                let {
                    showNotionAiItem: t,
                    allFavoriteStores: u,
                    workspaceAgentCount: c,
                    shouldHideNewAgent: C,
                    maxRows: _ = b,
                    onInteraction: w,
                    onNewAgentClick: x,
                    canCreateAgent: S,
                    newAgentTooltipMessage: k,
                    onDrop: j
                } = e, A = (0, a.useRef)(null), M = (0, n(729787).wY)(A), {
                    visibleAgentCount: I,
                    showMore: T,
                    showNewAgent: z
                } = v({
                    layout: "gallery",
                    agentCapacity: y({
                        containerWidth: (null == M ? void 0 : M.width) ? ? 3 * f + 2,
                        maxRows: _,
                        showNotionAi: t
                    }),
                    favoriteCount: u.length,
                    workspaceAgentCount: c,
                    shouldHideNewAgent: C
                }), B = (0, a.useMemo)(() => u.slice(0, I), [u, I]), P = (0, a.useMemo)(() => {
                    let e = new Map;
                    for (let t of B) e.set(t.id, t);
                    return e
                }, [B]), L = (0, a.useMemo)(() => {
                    let e = [];
                    for (let n of (t && e.push({
                            key: o,
                            draggable: !1
                        }), B)) e.push(n.id);
                    return T && e.push({
                        key: s,
                        draggable: !1
                    }), z && e.push({
                        key: d,
                        draggable: !1
                    }), e
                }, [t, B, T, z]), D = (0, a.useCallback)(e => {
                    let t = L.findIndex(t => ("string" == typeof t ? t : t.key) === e),
                        n = new Set;
                    return L.forEach((e, a) => {
                        "string" == typeof e || e.draggable || n.add(-1 !== t && a > t ? a + 1 : a)
                    }), n
                }, [L]), N = (0, a.useCallback)((e, t) => {
                    let n = t + 1;
                    if (e === o) return (0, i.jsx)(p, {
                        onInteraction: w,
                        position: n
                    });
                    if (e === s) return (0, i.jsx)(h, {
                        onInteraction: w,
                        position: n
                    });
                    if (e === d) return (0, i.jsx)(m, {
                        onClick: x,
                        disabled: !S,
                        tooltipMessage: k,
                        position: n
                    });
                    let a = P.get(e);
                    return a ? (0, i.jsx)(g, {
                        workflowStore: a,
                        onInteraction: w,
                        position: n,
                        isFavorite: !0
                    }) : null
                }, [w, x, S, k, P]), W = (0, a.useCallback)((e, t) => {
                    null == j || j(e, t)
                }, [j]), O = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore), R = (0, n(463226).DV)(O), V = void 0 !== R && l.has(R);
                return (0, i.jsx)("div", {
                    ref: A,
                    style: { ...r.gridWrapper,
                        ...V && {
                            paddingTop: 8
                        }
                    },
                    children: (0, i.jsx)(n(66467).Ay, {
                        direction: "grid",
                        style: r.grid,
                        gap: 1,
                        keys: L,
                        renderKey: N,
                        onDrop: W,
                        getInvalidDropIndices: D,
                        disabled: !j,
                        role: "list"
                    })
                })
            }
            let c = (0, n(109939).YK)({
                personalize: {
                    id: "sidebar.agentsGallery.notionAi.personalize",
                    defaultMessage: "Personalize"
                }
            });

            function p(e) {
                let {
                    onInteraction: t,
                    position: l
                } = e, o = (0, n(533992).v3)(), s = (0, n(109939).tz)(), d = (0, n(723240).r)(), u = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore), p = (0, n(463226).DV)(u), g = (0, n(682985).uB)(void 0, n(510969).A), [h, m] = (0, a.useState)(void 0), f = (0, n(682985).K8)(() => {
                    var e;
                    return (null == u || null == (e = u.getSettings()) || null == (e = e.agent_personalization_settings) ? void 0 : e.name) || s.formatMessage(n(658456).D)
                }, [s, u]), b = o.device.isElectron && d ? (0, n(758654).Gm)({
                    url: n(168962).JZ.ai,
                    query: {
                        spaceId: d
                    }
                }) : n(168962).JZ.ai, v = (0, a.useCallback)(e => {
                    e.preventDefault(), null == t || t(), Promise.all([n.e(36556), n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(5721), n.e(64696), n.e(94495)]).then(n.bind(n, 305721)).then(e => e.trackAgentSlopeShortcutClicked({
                        type: "agent",
                        favorite: !1,
                        owned: !1,
                        position: l
                    }));
                    let a = o.device.isElectron ? "tab" : (0, n(7029).V)(e),
                        i = !!o.device.isElectron || ("tab" === a ? (0, n(7029).t)(e) : void 0);
                    (0, n(79266).navigate)({
                        environment: o,
                        url: b,
                        openInNew: a,
                        makeTabActive: i
                    })
                }, [o, b, t, l]), y = (0, a.useCallback)(e => {
                    e.preventDefault(), m(new DOMRect(e.clientX, e.clientY)), g.setState({
                        open: !0
                    })
                }, [g]), C = (0, a.useCallback)(() => {
                    (0, n(463226).cP)({
                        store: n(210037).r,
                        from: "sidebar_notion_ai_gallery_menu"
                    })
                }, []);
                return (0, i.jsx)(n(656252).A, {
                    buttonPopupStore: g,
                    popupType: n(986939).A.isMobile ? n(656252).z.BottomSheet : n(656252).z.Popup,
                    originGap: 4,
                    originRect: h,
                    content: e => (0, i.jsx)(n(747369).A, {
                        menuType: n(986939).A.isMobile ? n(649476).gu.Modal : n(649476).gu.Popup,
                        children: (0, i.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            onAccept: e.close,
                            initialFocus: void 0,
                            sections: [{
                                key: "default",
                                render: e => (0, i.jsx)(n(844565).A, { ...e,
                                    topBorder: !1
                                }),
                                items: [{
                                    key: "personalize",
                                    render: e => (0, i.jsx)(n(95582).A, { ...e,
                                        icon: (0, i.jsx)(n(16275).I, {
                                            icon: n(895578).L,
                                            size: "default"
                                        }),
                                        title: s.formatMessage(c.personalize)
                                    }),
                                    action: () => {
                                        C(), e.close()
                                    }
                                }]
                            }]
                        })
                    }),
                    children: () => (0, i.jsxs)(n(590422).Q, {
                        style: r.cell,
                        hoveredStyle: r.cellHovered,
                        href: b,
                        onClick: v,
                        onContextMenu: y,
                        role: "listitem",
                        "aria-label": f,
                        children: [(0, i.jsx)("div", {
                            style: r.notionAiBubbleContainer,
                            children: (0, i.jsx)("div", {
                                style: r.notionAiFace,
                                children: (0, i.jsx)(n(458364).x, {
                                    variant: "medium_plus",
                                    accessory: p,
                                    shadowVariant: "light"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            style: r.label,
                            children: f
                        })]
                    })
                })
            }

            function g(e) {
                let {
                    workflowStore: t,
                    onInteraction: l,
                    position: o,
                    isFavorite: s
                } = e, d = (0, n(109939).tz)(), u = (0, n(345776).T)(), c = (0, n(682985).uB)(void 0, n(510969).A), [p, g] = (0, a.useState)(void 0), {
                    name: h,
                    icon: m
                } = (0, n(682985).K8)(() => (0, n(575422).m)(t, d), [d, t]), f = (0, n(102292).V)(h), b = (0, n(682985).K8)(() => {
                    let e = t.getCreatedByPointer();
                    return (null == e ? void 0 : e.id) === u
                }, [t, u]), v = (0, n(682985).K8)(() => (0, n(739185).iZ)({
                    workflowId: t.id,
                    params: {}
                }), [t.id]), y = (0, a.useCallback)(() => {
                    null == l || l(), Promise.all([n.e(36556), n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(5721), n.e(64696), n.e(94495)]).then(n.bind(n, 305721)).then(e => e.trackAgentSlopeShortcutClicked({
                        type: "custom_agent",
                        favorite: s,
                        owned: b,
                        position: o,
                        workflowId: t.id
                    })), (0, n(599231).qt)({
                        action: "open_agent",
                        workflowId: t.id
                    })
                }, [s, b, l, o, t.id]), C = (0, a.useCallback)(e => {
                    e.preventDefault(), g(new DOMRect(e.clientX, e.clientY)), c.setState({
                        open: !0
                    })
                }, [c]);
                return (0, i.jsx)(n(656252).A, {
                    buttonPopupStore: c,
                    popupType: n(986939).A.isMobile ? n(656252).z.BottomSheet : n(656252).z.Popup,
                    originGap: 4,
                    originRect: p,
                    content: e => (0, i.jsx)(n(957768)._, {
                        workflowStore: t,
                        context: "sidebar-static",
                        dismiss: e.close
                    }),
                    children: () => (0, i.jsxs)(n(590422).Q, {
                        style: r.cell,
                        hoveredStyle: r.cellHovered,
                        href: v,
                        onClick: y,
                        onContextMenu: C,
                        role: "listitem",
                        "aria-label": f,
                        children: [(0, i.jsx)("div", {
                            style: r.bubbleContainer,
                            children: (0, i.jsx)(n(651790).AgentIcon, {
                                agentIcon: m,
                                workflowStore: t,
                                size: 44
                            })
                        }), (0, i.jsx)("div", {
                            style: r.label,
                            children: f
                        })]
                    })
                })
            }

            function h({
                onInteraction: e,
                position: t
            }) {
                let l = (0, n(109939).tz)(),
                    o = (0, n(533992).v3)(),
                    s = (0, n(784331).nr)(),
                    d = (0, a.useCallback)(async a => {
                        (null == e || e(), Promise.all([n.e(36556), n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(5721), n.e(64696), n.e(94495)]).then(n.bind(n, 305721)).then(e => e.trackAgentSlopeShortcutMoreClicked({
                            position: t
                        })), s) ? (await (0, n(337439).p)())({
                            event: a,
                            environment: o,
                            analyticsFrom: "slippery_slope_agents_gallery_grid",
                            viewName: "agents"
                        }) : (0, n(477810).ZT)({
                            environment: o,
                            contentType: "agents"
                        })
                    }, [o, s, e, t]),
                    u = l.formatMessage({
                        defaultMessage: "More",
                        id: "sidebar.agentsGallery.more"
                    });
                return (0, i.jsxs)(n(64960).Ay, {
                    style: r.cell,
                    hoveredStyle: r.cellHovered,
                    onClick: d,
                    ariaLabel: u,
                    role: "listitem",
                    children: [(0, i.jsx)("div", {
                        style: r.moreBubble,
                        children: (0, i.jsxs)("svg", {
                            width: 44,
                            height: 44,
                            viewBox: "0 0 44 44",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            style: r.moreBubbleSvg,
                            children: [(0, i.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M12.21 4.491C12.2151 4.49112 12.2202 4.49128 12.2253 4.49151C15.3052 4.63163 17.0908 5.8368 18.0635 7.44347C18.9987 8.98806 19.1124 10.795 19.1133 12.0334C19.1134 12.0387 19.1135 12.0439 19.1135 12.0492C19.1135 13.1883 18.8051 14.0906 18.2438 14.7771C17.6893 15.4553 16.938 15.8618 16.157 16.1091C14.7541 16.5534 13.0779 16.5299 11.8733 16.5232L9.89513 18.8028C9.71106 19.0149 9.41462 19.0904 9.15152 18.9922C8.88842 18.8939 8.714 18.6426 8.714 18.3618V16.1078C7.56572 15.8501 6.66335 15.4809 6.05277 14.7978C5.33522 13.9949 5.14241 12.8996 5.14241 11.5301C5.14241 9.86085 5.70281 8.10657 6.87633 6.75991C8.06252 5.39871 9.84456 4.49082 12.1947 4.49082L12.21 4.491Z"
                            }), (0, i.jsx)("path", {
                                d: "M33.6312 4.38112C33.7674 4.13785 34.0402 4.00339 34.3169 4.04441C34.598 4.0861 34.8227 4.29992 34.8782 4.57864L36.4092 12.2682C36.8457 12.2843 37.4238 12.3224 37.9313 12.4681C38.3292 12.5823 38.7563 12.7776 39.0927 13.13C39.4422 13.4961 39.645 13.9809 39.6663 14.5738C39.6929 15.3118 39.3358 15.8875 38.8541 16.3015C38.387 16.703 37.774 16.9828 37.1636 17.182C35.938 17.5819 34.5153 17.7223 33.6701 17.7365C32.8077 17.751 31.1074 17.6045 29.5692 17.1956C28.801 16.9914 28.0309 16.711 27.4181 16.3251C26.8151 15.9453 26.2572 15.393 26.1393 14.6143C26.0564 14.0669 26.1191 13.5621 26.3569 13.1335C26.5948 12.7046 26.9683 12.4239 27.3751 12.2522C28.013 11.983 28.7942 11.953 29.5353 12.0422L33.6248 4.39278L33.6312 4.38112Z"
                            }), (0, i.jsx)("path", {
                                d: "M12.1679 24.7334C12.2176 24.2404 12.6575 23.881 13.1505 23.9307C13.6436 23.9803 14.0029 24.4203 13.9533 24.9133C13.9327 25.1175 13.9044 25.3797 13.8699 25.6886C17.7077 26.5874 19.1498 30.4181 19.5267 32.7098C19.5951 33.126 19.2317 33.4673 18.8129 33.4171C16.3361 33.12 14.6208 32.9163 13.0234 32.7251C12.749 34.9305 12.4996 36.885 12.4071 37.5458C12.2714 38.5158 11.8426 39.2781 11.2154 39.7748C10.5962 40.2652 9.83765 40.4527 9.12529 40.3715C8.4148 40.2905 7.72446 39.9383 7.26001 39.3224C6.7862 38.6941 6.60301 37.8661 6.77723 36.9461C6.86943 36.4593 7.33884 36.1393 7.82569 36.2315C8.31254 36.3237 8.63247 36.7932 8.54028 37.28C8.44814 37.7666 8.56027 38.0664 8.69273 38.2421C8.83456 38.4302 9.06147 38.5582 9.32852 38.5887C9.5937 38.6189 9.873 38.549 10.1013 38.3682C10.3215 38.1938 10.5497 37.8711 10.63 37.2972C10.7214 36.6439 10.9691 34.7027 11.2418 32.5109C9.64405 32.318 7.92295 32.1073 5.43696 31.7984C5.0104 31.7454 4.7385 31.3107 4.90995 30.9166C5.98752 28.4392 8.24076 25.5235 12.086 25.4952C12.12 25.1913 12.1478 24.9337 12.1679 24.7334Z"
                            }), (0, i.jsx)("path", {
                                d: "M32.8538 27.8272C36.2434 27.8272 38.9912 30.575 38.9912 33.9646C38.9912 37.3542 36.2434 40.102 32.8538 40.102C29.4643 40.102 26.7165 37.3541 26.7165 33.9646C26.7165 30.575 29.4643 27.8272 32.8538 27.8272Z"
                            }), (0, i.jsx)("path", {
                                d: "M35.4941 26.2071C36.3194 25.5119 37.537 25.4194 38.4722 26.0572C39.4074 26.6949 39.7659 27.8623 39.4201 28.8845C39.301 29.2365 38.8715 29.3151 38.5644 29.1057L35.6005 27.0844C35.2935 26.875 35.2098 26.4465 35.4941 26.2071Z"
                            }), (0, i.jsx)("path", {
                                d: "M27.8501 25.6455C28.8304 25.0795 30.0377 25.2629 30.8087 26.0179C31.0742 26.2779 30.9587 26.699 30.6368 26.8848L27.5299 28.6785C27.2081 28.8644 26.7857 28.7539 26.6933 28.3939C26.4249 27.3487 26.8698 26.2115 27.8501 25.6455Z"
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        style: r.label,
                        children: u
                    })]
                })
            }

            function m(e) {
                let {
                    onClick: t,
                    disabled: l,
                    tooltipMessage: o,
                    position: s
                } = e, d = (0, n(109939).tz)(), u = (0, a.useCallback)(() => {
                    Promise.all([n.e(36556), n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(5721), n.e(64696), n.e(94495)]).then(n.bind(n, 305721)).then(e => e.trackAgentSlopeShortcutNewAgentClicked({
                        position: s
                    })), t()
                }, [t, s]), c = d.formatMessage({
                    defaultMessage: "New agent",
                    id: "sidebar.agentsGallery.newAgent"
                });
                return (0, i.jsx)(n(51831).m, {
                    disableTooltip: !l,
                    content: () => o,
                    children: e => (0, i.jsxs)(n(64960).Ay, { ...e,
                        style: r.cell,
                        hoveredStyle: r.cellHovered,
                        onClick: u,
                        disabled: l,
                        disabledFeedback: !0,
                        ariaLabel: c,
                        role: "listitem",
                        children: [(0, i.jsx)("div", {
                            style: r.newAgentBubble,
                            children: (0, i.jsx)(n(16275).I, {
                                icon: n(638501).plusSmallIcon,
                                colorVariant: "secondary"
                            })
                        }), (0, i.jsx)("div", {
                            style: r.label,
                            children: c
                        })]
                    })
                })
            }
            let f = 76,
                b = 2;

            function v(e) {
                let {
                    layout: t,
                    agentCapacity: n,
                    favoriteCount: a,
                    workspaceAgentCount: i,
                    shouldHideNewAgent: r
                } = e, l = Math.min(a, n), o = i > l;
                o && "gallery" === t && (l = Math.min(a, Math.max(0, n - 1)));
                let s = !1;
                return r || o || !(i < 5) || (s = "list" === t || l < n), {
                    visibleAgentCount: l,
                    showMore: o,
                    showNewAgent: s
                }
            }

            function y(e) {
                let {
                    containerWidth: t,
                    maxRows: n,
                    showNotionAi: a
                } = e, i = Math.max(1, Math.floor((t + 1) / (f + 1))) * n;
                return Math.max(0, a ? i - 1 : i)
            }
            let C = {
                width: "100%"
            };

            function _(e) {
                let {
                    id: t,
                    "aria-labelledby": r,
                    onInteraction: l,
                    layout: o = "list"
                } = e, s = (0, n(533992).v3)(), d = (0, n(368891).g)(), c = (0, n(972740).L)(), p = (0, n(917441).a$)(), g = (0, n(476743).a)(), h = (0, n(83208).X)("slippery_slope_custom_agent_shortcuts") && "gallery" === o, {
                    canCreate: m,
                    tooltipMessage: f
                } = (0, n(639938).$)(), b = (0, n(682985).K8)(() => g ? (0, n(822209).R)({
                    environment: s,
                    type: "agents",
                    spaceViewStore: g,
                    userSettingsStore: d
                }).truncationLimit : n(41664).Ji, [s, d, g]), {
                    sidebarWorkflowStores: y,
                    allSidebarWorkflowStores: _
                } = (0, n(682985).K8)(() => {
                    let e = p.getState();
                    return {
                        sidebarWorkflowStores: (null == e ? void 0 : e.visibleWorkflowStores) ? ? [],
                        allSidebarWorkflowStores: (null == e ? void 0 : e.allSidebarWorkflowStores) ? ? []
                    }
                }, [p]), w = (0, n(682985).K8)(() => {
                    if (!(null != c && c.id)) return y.length;
                    let e = (0, n(203462).zf)(s).getData(s, {
                        spaceId: c.id
                    });
                    return e ? e.agents.filter(e => e.isDefined() && !1 !== e.getAlive()).length : y.length
                }, [s, c, y.length]), S = (0, a.useCallback)(() => {
                    null == l || l(), (0, n(477810).ZT)({
                        environment: s,
                        contentType: "agents"
                    })
                }, [s, l]);
                (0, n(383953).w)(() => {
                    (0, n(104310).u)({
                        event: {
                            eventName: "sidebar_render_agents_outliner",
                            eventProperties: {}
                        }
                    })
                });
                let k = (0, a.useMemo)(() => new Set(y.map(e => e.id)), [y]),
                    j = (0, a.useCallback)(e => {
                        let t = e.filter(e => k.has(e));
                        n(280772).Oj({
                            environment: s,
                            workflowIds: t,
                            from: "agents_outliner"
                        })
                    }, [s, k]),
                    A = (0, a.useCallback)(async () => {
                        null == l || l();
                        let e = await n(178801).oQ.agentActions.load(),
                            t = n(92513).JW();
                        await e.showCreationModal({
                            analytics: {
                                flowId: t,
                                origin: "sidebar_agents_empty_state"
                            }
                        })
                    }, [l]),
                    {
                        handleClick: M,
                        shouldHide: I
                    } = (0, n(999951).U)({
                        action: A,
                        source: "new_custom_agents_sidebar"
                    }),
                    T = v({
                        layout: "list",
                        agentCapacity: function(e) {
                            let {
                                truncationLimit: t,
                                showNotionAi: n
                            } = e;
                            return Math.max(0, n ? t - 1 : t)
                        }({
                            truncationLimit: b,
                            showNotionAi: h
                        }),
                        favoriteCount: y.length,
                        workspaceAgentCount: w,
                        shouldHideNewAgent: I
                    }),
                    z = (0, a.useMemo)(() => y.slice(0, T.visibleAgentCount), [y, T.visibleAgentCount]),
                    B = (0, a.useMemo)(() => {
                        if (0 === z.length) return;
                        let e = z.map(e => e.id);
                        return (0, i.jsx)(n(66467).Ay, {
                            direction: "vertical",
                            keys: e,
                            onDrop: j,
                            renderKey: e => {
                                let t = z.find(t => t.id === e);
                                return t ? (0, i.jsx)("div", {
                                    style: C,
                                    children: (0, i.jsx)(n(620491).z, {
                                        workflowStore: t,
                                        isDraggableListItem: !0,
                                        onInteraction: l
                                    })
                                }, e) : null
                            },
                            gap: 1
                        })
                    }, [z, j, l]);
                return "gallery" === o ? (0, i.jsx)(u, {
                    showNotionAiItem: h,
                    allFavoriteStores: _,
                    workspaceAgentCount: w,
                    shouldHideNewAgent: I,
                    onInteraction: l,
                    onNewAgentClick: M,
                    canCreateAgent: m,
                    newAgentTooltipMessage: f,
                    onDrop: j
                }) : (0, i.jsxs)(n(4458).VP, {
                    id: t,
                    "aria-labelledby": r,
                    role: "list",
                    gap: 1,
                    children: [B, T.showMore ? (0, i.jsx)(n(540048).H, {
                        onClick: S,
                        tooltipMessage: (0, i.jsx)(n(109939).sA, {
                            defaultMessage: "All agents",
                            id: "sidebar.openAllAgents.tooltip"
                        }),
                        sidebarSectionType: "agents"
                    }) : void 0, T.showNewAgent ? (0, i.jsx)(x, {
                        onClick: M,
                        disabled: !m,
                        tooltipMessage: f
                    }) : void 0]
                })
            }
            let w = {
                sidebarItemHoveredStyle: {
                    background: n(632079).Tj.sidebarItemSelectedBackground
                },
                sidebarItem: {
                    color: n(632079).Tj.sidebarSecondaryColor
                }
            };

            function x({
                onClick: e,
                disabled: t,
                tooltipMessage: a
            }) {
                let r = (0, n(109939).tz)(),
                    l = (0, n(665002).g)(),
                    o = r.formatMessage({
                        defaultMessage: "New agent",
                        id: "sidebar.agents.newAgent"
                    });
                return (0, i.jsx)(n(51831).m, {
                    disableTooltip: !t,
                    content: () => a,
                    children: a => (0, i.jsx)(n(64960).Ay, { ...a,
                        style: { ...n(132261).DX.baseSidebarItem,
                            ...l && {
                                transition: "none"
                            }
                        },
                        hoveredStyle: w.sidebarItemHoveredStyle,
                        disabled: t,
                        disabledFeedback: !0,
                        onClick: e,
                        ariaLabel: o,
                        children: (0, i.jsx)(n(380559).u, {
                            left: (0, i.jsx)(n(16275).I, {
                                icon: n(638501).plusSmallIcon,
                                colorVariant: "secondary",
                                size: "sm"
                            }),
                            childrenStyle: w.sidebarItem,
                            children: o
                        })
                    })
                })
            }
        },
        658456: (e, t, n) => {
            n.d(t, {
                D: () => a
            });
            let a = (0, n(109939).YK)({
                personalAgentMentionName: {
                    id: "botMention.personalAgent.name",
                    defaultMessage: "Notion AI"
                }
            }).personalAgentMentionName
        },
        848135: (e, t, n) => {
            n.d(t, {
                B: () => i
            });
            var a = n(296540);

            function i() {
                let e = (0, a.useRef)(null),
                    [t, n] = (0, a.useState)(!1),
                    i = (0, a.useCallback)(() => {
                        let t = e.current;
                        t && n(t.matches(":hover"))
                    }, []);
                return [(0, a.useCallback)(t => {
                    t ? (t.addEventListener("mouseenter", i), t.addEventListener("mouseleave", i), e.current = t, i()) : e.current && (e.current.removeEventListener("mouseenter", i), e.current.removeEventListener("mouseleave", i), e.current = null)
                }, [i]), t, e]
            }
        },
        855021: (e, t, n) => {
            n.d(t, {
                q: () => a
            });

            function a() {
                let e = (0, n(972740).L)(),
                    t = (0, n(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    a = (0, n(533992).v3)(),
                    i = (0, n(682985).K8)(() => n(375592).T.getData(a, {
                        userId: a.currentUser.id || ""
                    }), [a]);
                return (0, n(682985).K8)(() => (0, n(407998).V)({
                    environment: a,
                    spaceStore: e,
                    billingData: t,
                    externalOrgSummary: i
                }), [a, e, t, i])
            }
        },
        871086: (e, t, n) => {
            n.d(t, {
                w: () => a
            });

            function a() {
                let e = (0, n(476743).a)();
                return (0, n(682985).K8)(() => {
                    var t;
                    return (null == e || null == (t = e.getSettings()) ? void 0 : t.business_trial_items_completed) ? ? {}
                }, [e])
            }
        },
        895578: (e, t, n) => {
            n.d(t, {
                L: () => r
            }), n(296540);
            var a = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M8.04761 1.40332L8.29565 1.41797C9.5354 1.51917 10.7877 2.05748 11.5691 3.03418C12.4248 4.10414 12.576 5.59336 12.2527 6.84082C12.1648 7.17964 12.0368 7.51547 11.8699 7.83496C12.4573 7.95393 13.014 8.1496 13.5232 8.44336C14.1514 8.80586 14.6705 9.29599 15.0779 9.90723C15.4453 9.55352 15.8874 9.31134 16.3923 9.24805H16.3933C17.0674 9.16392 17.7001 9.43393 18.1248 9.95508C18.5282 10.4502 18.698 11.1051 18.698 11.79C18.698 12.8535 18.6409 14.7357 17.2517 16.2207C15.8442 17.7246 13.3476 18.5467 9.17065 18.2373C7.03585 18.0791 5.40971 17.5784 4.25854 16.792C3.08147 15.9878 2.43669 14.9037 2.28296 13.7256C2.05362 11.9659 2.93173 10.2243 4.21851 9.04883C3.75332 9.08904 3.22319 9.06701 2.60327 9.00293H2.60229C2.07328 8.94808 1.55858 8.78222 1.15112 8.47656L0.983154 8.33691C0.529882 7.91784 0.255671 7.2623 0.478271 6.55469C0.679436 5.91656 1.20941 5.4862 1.77222 5.2207C2.19407 5.0218 2.70477 4.87921 3.29761 4.79395C3.48184 4.15662 3.79961 3.54947 4.24194 3.01855C5.2426 1.81786 6.70976 1.35719 8.04761 1.40332Z",
                            fill: "white",
                            stroke: "white",
                            strokeWidth: "1.2"
                        }), (0, a.jsx)("path", {
                            d: "M2.71145 7.95867C0.896282 7.771 0.784523 5.97447 4.07815 5.7696C4.79543 6.02556 6.62315 6.09221 5.94924 6.85552C5.10685 7.80966 4.8839 8.18328 2.71145 7.95867Z",
                            fill: "white",
                            stroke: "black",
                            strokeWidth: "1"
                        }), (0, a.jsx)("path", {
                            d: "M9.24829 17.1903C1.14829 16.5903 2.64829 10.8903 5.94829 9.09026C3.84832 7.89022 3.66342 5.35224 5.04832 3.69029C6.54832 1.89022 9.54832 2.19024 10.7483 3.69024C11.9483 5.19024 11.3483 8.19021 9.24829 8.79026C12.2483 8.49026 14.3483 9.39026 14.9483 12.3903C15.5483 9.69026 17.6483 9.69019 17.6483 11.7902C17.6483 13.8902 17.3483 17.7903 9.24829 17.1903Z",
                            fill: "#FFB110",
                            stroke: "black",
                            strokeWidth: "1",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M5.76867 6.1671C5.52984 5.87387 5.90069 4.67884 6.46816 5.14099C7.11453 5.6674 6.37472 6.91121 5.76867 6.1671Z",
                            fill: "black"
                        })]
                    })
                },
                r = (0, n(104509).wt)("duck", i, "default")
        },
        908975: (e, t, n) => {
            n.d(t, {
                W: () => r
            }), n(296540);
            var a = n(474848);
            let i = {
                container: {
                    width: 80,
                    height: 52,
                    display: "flex",
                    alignItems: "center",
                    position: "relative"
                },
                avatarLeft: {
                    width: 28,
                    height: 28,
                    position: "absolute",
                    insetInlineStart: 0
                },
                avatarRight: {
                    width: 28,
                    height: 28,
                    position: "absolute",
                    insetInlineEnd: 0
                },
                avatarCenter: {
                    width: 40,
                    height: 40,
                    position: "absolute",
                    insetInlineStart: 0,
                    insetInlineEnd: 0,
                    margin: "0 auto",
                    zIndex: 1,
                    boxShadow: n(632079).Tj.shadow.base.sm,
                    borderRadius: "50%"
                }
            };

            function r() {
                return (0, a.jsxs)("div", {
                    style: i.container,
                    children: [(0, a.jsx)("img", {
                        src: n(896221).A.images.customAgentAvatars.appleRedPng,
                        style: i.avatarLeft,
                        alt: ""
                    }), (0, a.jsx)("img", {
                        src: n(896221).A.images.customAgentAvatars.bookBluePng,
                        style: i.avatarCenter,
                        alt: ""
                    }), (0, a.jsx)("img", {
                        src: n(896221).A.images.customAgentAvatars.bulbYellowPng,
                        style: i.avatarRight,
                        alt: ""
                    })]
                })
            }
        },
        947449: (e, t, n) => {
            n.d(t, {
                o: () => i
            }), n(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.76 13.75",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.75 3.125c.345 0 .625.28.625.625v7.097l3.016-2.639a.625.625 0 0 1 .854.028l3.036 3.037 3.485-3.485H12.75a.625.625 0 1 1 0-1.25h3.5c.345 0 .625.28.625.625v3.5a.625.625 0 1 1-1.25 0V8.696l-3.902 3.902a.625.625 0 0 1-.884 0L7.774 9.534l-3.399 2.974v2.242c0 .483.392.875.875.875h11a.625.625 0 1 1 0 1.25h-11a2.125 2.125 0 0 1-2.125-2.125v-11c0-.345.28-.625.625-.625"
                    })
                },
                i = (0, n(104509).wt)("chartLineUptrend", a, "default")
        },
        959526: (e, t, n) => {
            n.d(t, {
                s: () => r
            }), n(296540);
            let a = (0, n(815048)._h)(new(n(815048)).O2("SidebarSectionWithPopup", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(35837), n.e(25867), n.e(88595), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(43444), n.e(23979), n.e(73259), n.e(87971), n.e(4779), n.e(55067), n.e(50354), n.e(14231), n.e(18406), n.e(97615), n.e(48095), n.e(10188), n.e(18802), n.e(20957), n.e(53157), n.e(58033), n.e(79563), n.e(6782), n.e(74936), n.e(5309), n.e(76060), n.e(2209)]).then(n.bind(n, 485059))), e => e.SidebarSectionWithPopup);
            var i = n(474848);

            function r(e) {
                let t = (0, n(972740).L)(),
                    r = (0, n(682985).K8)(() => null == t ? void 0 : t.getPlanType(), [t]);
                return t ? (0, i.jsx)(a, {
                    renderLoading: () => e.content,
                    spacePlan: r,
                    ...e
                }) : e.content
            }
        },
        971375: (e, t, n) => {
            n.d(t, {
                o: () => r,
                x: () => i
            }), n(296540);
            var a = n(474848);

            function i(e) {
                let {
                    variant: t,
                    imgSource: i,
                    tintColor: l,
                    faceStyle: o,
                    shadowVariant: s = "strong",
                    style: d,
                    ...u
                } = e, c = (0, n(960253).I)(() => {
                    let e = (0, n(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: n(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === s && {
                                boxShadow: e >= 90 ? n(632079).Tj.shadowMDThickerOutline : n(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === s && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? n(632079).Tj.shadowSMThickerOutline : n(632079).Tj.shadow.outline.md
                            },
                            overflow: "hidden",
                            ...d
                        }
                    }
                }, [t, s, d]);
                return (0, a.jsx)("div", { ...u,
                    children: (0, a.jsx)("div", {
                        style: c.faceImgWrap,
                        children: (0, a.jsx)(r, {
                            imgSource: i,
                            variant: t,
                            tintColor: l,
                            style: o
                        })
                    })
                })
            }

            function r(e) {
                let {
                    imgSource: t,
                    variant: i,
                    tintColor: r,
                    style: l,
                    alt: o,
                    ...s
                } = e, d = (0, n(445283).N)(i), u = t ? ? n(200424), c = o ? ? "Notion AI face", p = (0, n(960253).I)(() => ({
                    faceImg: {
                        height: d,
                        width: d,
                        transform: "scaleX(var(--direction, 1))",
                        ...l
                    },
                    tintedFace: {
                        height: d,
                        width: d,
                        transform: "scaleX(var(--direction, 1))",
                        backgroundColor: r,
                        WebkitMaskImage: `url(${u})`,
                        maskImage: `url(${u})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        ...l
                    }
                }), [d, l, r, u]);
                return void 0 !== r ? (0, a.jsx)("div", {
                    style: p.tintedFace,
                    role: "img",
                    "aria-label": c
                }) : (0, a.jsx)("img", { ...s,
                    style: p.faceImg,
                    src: u,
                    alt: c
                })
            }
        },
        999951: (e, t, n) => {
            n.d(t, {
                U: () => i
            });
            var a = n(296540);

            function i(e) {
                let {
                    action: t,
                    source: i
                } = e, r = (0, n(345776).T)(), l = (0, n(972740).L)(), o = (0, n(217844)._)({
                    name: "custom_agents",
                    spaceId: null == l ? void 0 : l.id,
                    userId: r
                }), s = (0, n(94418).Pd)(o), d = null == o ? void 0 : o.upsell, {
                    upgradeEligibility: u,
                    handleClick: c
                } = (0, n(79268).C)({
                    upsell: d,
                    source: i,
                    spaceStore: l
                });
                return {
                    handleClick: (0, a.useCallback)(async () => {
                        if (s) return c();
                        await t()
                    }, [s, c, t]),
                    shouldHide: s && "not_eligible" === u.status
                }
            }
        }
    }
]);