"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [35210], {
        44027: (e, t, n) => {
            function i(e) {
                let {
                    businessTrialOffer: t,
                    billingTime: i,
                    modalLastShownAt: r,
                    modalShownTimes: a
                } = e;
                return !!(0, n(383378).V9)(t, i) && void 0 !== r && void 0 !== a && (!(r > 0) || !(i.diff(n(906745).DateTime.fromMillis(r), "days").days >= n(118999).ls)) && (a ? ? 0) >= n(118999).TY
            }

            function r(e, t = (0, n(192159).DS)(e)) {
                if (!e) return;
                let i = (0, n(192159).i5)(e);
                if (i) return Math.ceil(i.toUTC().diff(t.toUTC(), "days").days)
            }

            function a(e, t) {
                let i = n(906745).DateTime.fromMillis(e.endDateMs).toUTC();
                return (t ? ? n(906745).DateTime.now()).toUTC().hasSame(i, "day")
            }

            function o(e) {
                let t = (0, n(278662).Jd)(e);
                if (t) return (0, n(875472).Vm)(t)
            }

            function l(e) {
                let t = (0, n(278662).Jd)(e);
                if (t) return (0, n(875472).kd)(t)
            }

            function s(e) {
                let t = n(118999).Tu[e];
                if (void 0 === t) throw Error(`Unknown trial length: ${e}`);
                return t
            }

            function u(e) {
                return Math.round(e / 30)
            }

            function c({
                billingData: e
            }) {
                if (!(0, n(192159).TB)(e)) return !1;
                if ((0, n(192159).HY)(e)) {
                    var t;
                    return (null == e ? void 0 : e.type) === "admin" && (null == (t = e.trial) ? void 0 : t.autoConvert) === !0
                }
                return (null == e ? void 0 : e.type) === "admin" && (0, n(722371).O9)(null == e ? void 0 : e.paymentMethod)
            }

            function d(e) {
                return (0, n(192159).oD)(e) && (0, n(717274).pX)()
            }

            function _(e) {
                return (0, n(722371).Xk)(["multi_search_scope_menu", "ai_workspace_settings_connector_cards", "business_trial_ai_connectors_upsell", "ai_corner_chat_connectors_button"], e)
            }

            function p(e) {
                return (0, n(722371).Xk)(n(90416).K_, e)
            }

            function f(e) {
                return (0, n(722371).Xk)([...n(994234).iE, ...n(994234).wW, ...n(994234).Fh], e)
            }

            function m(e) {
                let {
                    openedFrom: t,
                    campaign: n,
                    isCustomAgentsGateEnabled: i
                } = e;
                return i && (p(t) || "deeplink" === t && f(n))
            }
            n.d(t, {
                F$: () => m,
                IU: () => d,
                J: () => o,
                SF: () => p,
                Tr: () => u,
                UP: () => r,
                XF: () => a,
                cn: () => l,
                dt: () => f,
                od: () => i,
                rE: () => s,
                tY: () => _,
                z2: () => c
            }), n(16280)
        },
        79423: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var i = () => n(546605);
            class r extends i().Store {
                getInitialState() {
                    return {
                        isHovered: !1
                    }
                }
            }
            let a = new r
        },
        90416: (e, t, n) => {
            n.d(t, {
                CT: () => o,
                K_: () => s,
                Mi: () => i,
                uv: () => a,
                zL: () => l,
                zj: () => r
            });
            let i = ["database_agents", "database_agent_autofill_button", "database_agent_run_dropdown", "database_agent_fill_rows", "database_agent_fill_all", "database_agent_preview_generate", "database_agent_edit_modal_toggle", "database_agent_setup_menu_item"],
                r = ["ai_unified_find_search_modal", "ai_unified_find_chat", "ai_chat_with_model", "ai_assistant_limit_in_app", "ai_autofill_fill_all_pages", "ai_autofill_bulk_fill", "ai_autofill_on_page_edit", "ai_autofill_try_on_view", "ai_limit_in_app", "ai_limit_property_autofill", "ai_limit_sidebar", "ai_limit_settings", "ai_limited_qna_no_results", "ai_limited_qna_upsell_action_button", "ai_qna_waitlist", "ai_qna_limit_in_app", "ai_upsell_notice", "ai_upsell_settings", "ai_page_translation", "ai_plans_page", "ai_formulas"],
                a = ["ai_research_mode"],
                o = ["ai_meeting_notes", "ai_meeting_notes_custom_transcript_retention"],
                l = ["ai_agent"],
                s = ["custom_agent", "custom_agents_sidebar", "new_custom_agents_sidebar", "new_custom_agents_library", "slippery_slope_flyout_menu", "custom_agents_launch_modal", "custom_agents_gift_box", "marketplace_agents"]
        },
        118999: (e, t, n) => {
            n.d(t, {
                Hb: () => f,
                Hu: () => c,
                TY: () => i,
                Tu: () => o,
                U4: () => p,
                U7: () => m,
                WO: () => s,
                XX: () => _,
                c4: () => u,
                ef: () => a,
                ej: () => d,
                hI: () => l,
                ls: () => r
            });
            let i = 2,
                r = 30,
                a = 30,
                o = {
                    365: 5,
                    180: 5,
                    90: 5,
                    30: 5,
                    14: 4
                },
                l = 332,
                s = 852,
                u = 800,
                c = 407,
                d = 24,
                _ = 400,
                p = 450,
                f = 524,
                m = 7
        },
        153828: (e, t, n) => {
            n.d(t, {
                P: () => r
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.5 3.05 15 13.82",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.08 3.341a1.625 1.625 0 0 1 1.84 0l5.875 4.035c.441.304.705.805.705 1.34v6.034a2.125 2.125 0 0 1-2.125 2.125h-2.716a1.625 1.625 0 0 1-1.625-1.625v-4.065H8.967v4.065c0 .898-.728 1.625-1.625 1.625H4.625A2.125 2.125 0 0 1 2.5 14.75V8.716c0-.535.264-1.036.705-1.34zm1.132 1.03a.375.375 0 0 0-.424 0L3.913 8.407a.38.38 0 0 0-.163.309v6.034c0 .483.392.875.875.875h2.716a.375.375 0 0 0 .375-.375v-4.19c0-.621.503-1.125 1.125-1.125h2.319c.62 0 1.124.504 1.124 1.125v4.19c0 .207.168.375.375.375h2.716a.875.875 0 0 0 .875-.875V8.716c0-.124-.06-.24-.163-.31z"
                    })
                },
                r = (0, n(104509).wt)("home", i, "default")
        },
        197411: (e, t, n) => {
            n.r(t), n.d(t, {
                ChatHistoryButton: () => l,
                PersonalHomeTopbar: () => a
            });
            var i = n(296540),
                r = n(474848);

            function a(e) {
                let {
                    store: t,
                    isInvalidPage: i,
                    onClickTopbar: a,
                    onMouseDown: o
                } = e, l = (0, n(682985).O$)(n(523511).A), s = (0, n(235364).m)({
                    location: l ? "PersonalHome" : "PersonalHomeScrolled"
                });
                return (0, r.jsx)(n(397319).W, {
                    store: t,
                    topbarFeatureController: s,
                    isInvalidPage: i,
                    onClickTopbar: a,
                    onMouseDown: o,
                    renderRight: () => (0, r.jsx)(n(168028).J, {
                        store: e.store,
                        isInvalidPage: e.isInvalidPage
                    })
                })
            }
            let o = {
                    iconButton: { ...n(440601).RN.iconButton,
                        marginInlineEnd: 0,
                        borderRadius: 4
                    }
                },
                l = i.forwardRef((e, t) => {
                    let {
                        onClickCallback: a,
                        disableTooltip: l
                    } = e, s = (0, n(533992).v3)(), u = (0, n(109939).tz)(), c = (0, i.useCallback)(() => {
                        null == a || a(), (0, n(477810).ZT)({
                            environment: s,
                            contentType: "assistant"
                        })
                    }, [s, a]), d = u.formatMessage({
                        id: "aiSidebarItem.askNotionAi.history.tooltip",
                        defaultMessage: "Chat history"
                    });
                    return (0, r.jsx)(n(51831).m, {
                        placement: "bottom",
                        content: () => d,
                        disableTooltip: l,
                        children: e => (0, r.jsx)(n(374533).A, { ...e,
                            icon: n(772683).clockIcon,
                            iconStyle: n(440601).RN.icon,
                            style: o.iconButton,
                            ariaLabel: d,
                            onClick: c,
                            ref: t
                        })
                    })
                });
            l.displayName = "ChatHistoryButton"
        },
        271349: (e, t, n) => {
            function i(e) {
                switch (e) {
                    case "browse-templates":
                        return "navigate";
                    case "create-page":
                    case "create-database":
                    case "create-meeting":
                        return "create";
                    case "custom":
                        return "custom";
                    default:
                        throw Error(`Unhandled shortcut action type: ${e}`)
                }
            }

            function r() {
                return "on" === n(218744).default.getEligibleGroup({
                    experimentId: "home_shortcut_actions",
                    defaultGroup: "control"
                })
            }
            n.d(t, {
                $Q: () => r,
                hW: () => i
            }), n(16280)
        },
        383378: (e, t, n) => {
            n.d(t, {
                $G: () => r,
                Hj: () => a,
                Nh: () => c,
                V9: () => l,
                WL: () => i,
                cv: () => u,
                nS: () => o,
                tz: () => s
            }), n(581454);
            let i = 30,
                r = 5;

            function a(e, t) {
                var n;
                return (null == (n = e.subscription) ? void 0 : n.trialEnd) !== void 0 && "reset_and_invoice" === t.subscription.type
            }

            function o(e, t, i) {
                return e ? (0, n(850640).W_)(e.toMillis(), i ? ? "long", t) : void 0
            }

            function l(e, t) {
                let i = n(906745).DateTime.fromMillis(e.endDateMs);
                return (t ? ? n(906745).DateTime.now()) > i
            }

            function s(e, t, i) {
                let r = n(906745).DateTime.fromMillis(e.endDateMs),
                    a = i ? ? n(906745).DateTime.now();
                return a < r && r.diff(a).as("days") <= t
            }

            function u(e) {
                let {
                    prices: t,
                    products: r,
                    interval: a,
                    memberCount: o,
                    currency: l = "USD",
                    trialLengthDays: s = i,
                    trialStartDate: u = n(906745).DateTime.now()
                } = e;
                return {
                    items: r.map(e => ({
                        price: (0, n(982473).vk)(t, {
                            product: e,
                            interval: a,
                            currency: l
                        }),
                        quantity: o
                    })),
                    trialEnd: u.plus({
                        days: s
                    })
                }
            }

            function c(e) {
                return (0, n(722371).Xk)(e, "plus") && (0, n(722371).Xk)(e, "ai")
            }
        },
        397319: (e, t, n) => {
            n.d(t, {
                W: () => o
            });
            var i = n(296540),
                r = n(474848);
            let a = {
                flexGrow: 1,
                flexShrink: 1
            };

            function o(e) {
                let {
                    store: t,
                    topbarFeatureController: o,
                    isInvalidPage: l,
                    onClickTopbar: u,
                    onMouseDown: c,
                    renderLeft: d,
                    renderRight: _
                } = e, p = (0, n(533992).v3)(), {
                    isElectron: f,
                    isElectronWindows: m
                } = (0, n(533992).Y0)(), b = (0, n(682985).O$)((0, n(846044).e)(p)), v = (0, n(682985).K8)(() => (0, n(712358).K)(p), [p]), g = (0, n(682985).K8)(() => n(550830).default.isPanelPinnedState(), []), h = (0, n(682985).K8)(() => n(896597).A.state.isFullScreen, []), y = (0, n(682985).K8)(() => n(584257).A.state.zoomFactor, []), k = p.currentUser.isLoggedIn(), x = (0, n(682985).O$)(n(584257).b), {
                    topbarActionsDisplayStyle: w
                } = o, C = (0, n(960253).I)(() => ({
                    container: { ...(0, n(370838).DW)({
                            environment: p,
                            isShowingTabBar: x,
                            shouldShowSidebar: b,
                            isSidebarExpanded: v,
                            isSecondarySidebarVisible: g,
                            isBrowserFullScreen: h,
                            zoom: y || n(196441).rx
                        })
                    }
                }), [b, p, h, x, v, y, g]), I = f && !x, T = !x && !v && !g && k, S = (0, i.useCallback)(() => (0, r.jsxs)("div", {
                    role: "toolbar",
                    tabIndex: 0,
                    style: C.container,
                    onClick: u,
                    onMouseDown: c,
                    onDoubleClick: n(319643).mz,
                    onMouseEnter: () => n(79423).A.setState({
                        isHovered: !0
                    }),
                    onMouseLeave: () => n(79423).A.setState({
                        isHovered: !1
                    }),
                    children: [T || I || !l || void 0 !== d ? (0, r.jsxs)(s, {
                        displayStyle: w,
                        children: [T ? (0, r.jsx)(n(457196).z, {}) : void 0, I ? (0, r.jsx)(n(554810)._, {
                            topbarFeatureController: o
                        }) : void 0, null == d ? void 0 : d({
                            topbarFeatureController: o
                        }), l ? void 0 : (0, r.jsx)(n(854862).A, {})]
                    }) : null, (0, r.jsx)("div", {
                        style: a
                    }), void 0 !== _ ? (0, r.jsx)(s, {
                        displayStyle: w,
                        children: null == _ ? void 0 : _({
                            topbarFeatureController: o
                        })
                    }) : null, m && !x && o.showDesktopAppMenuIconButton ? (0, r.jsx)(n(662886).K, {}) : null]
                }), [o, l, u, c, d, _, m, x, I, T, C.container, w]);
                return t ? (0, r.jsx)(n(318981).A, {
                    store: t,
                    disableRectangularSelection: !0,
                    disableEditNearestBlock: !0,
                    render: S
                }) : S()
            }
            let l = {
                position: "relative",
                display: "flex",
                flexShrink: 0,
                alignItems: "center",
                gap: 4
            };

            function s(e) {
                let {
                    displayStyle: t,
                    children: i
                } = e, a = (0, n(960253).e)(), o = (0, n(960253).I)(() => ({
                    background: {
                        position: "absolute",
                        inset: -2,
                        opacity: +("bordered" === t),
                        boxShadow: (0, n(681693).E_)({
                            isPhone: !1,
                            themeMode: a,
                            borderOnly: !0
                        }),
                        background: n(632079).Tj.whiteButtonBackground,
                        borderRadius: 6,
                        transition: "opacity 0.2s"
                    }
                }), [t, a]);
                return (0, r.jsxs)("div", {
                    style: l,
                    ...(0, n(463846).A)(!0),
                    children: ["solid" !== t ? (0, r.jsx)("div", {
                        style: o.background
                    }) : void 0, i]
                })
            }
        },
        465424: (e, t, n) => {
            n.d(t, {
                R: () => i
            });

            function i(e, t) {
                return (0, n(192159).N4)(e, {
                    subscription: t
                })
            }
        },
        523511: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            let i = n(546605).Store.createValue(!0)
        },
        562033: (e, t, n) => {
            n.d(t, {
                r: () => r
            }), n(296540);
            var i = n(474848);

            function r(e) {
                let {
                    item: t,
                    undoFunc: r
                } = e;
                n(436555).D6({ ...t,
                    right: (0, i.jsx)(n(531119).q6, {
                        onUndo: r
                    })
                })
            }
        },
        785267: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var i = n(296540),
                r = n(474848);
            let a = i.forwardRef(function(e, t) {
                let {
                    onClose: a,
                    persistOnClose: s,
                    content: u,
                    stopClickPropagation: c,
                    onClick: d,
                    disablePopup: _,
                    disabled: p,
                    forceInitialInbound: f,
                    children: m,
                    originGap: b,
                    borderRadius: v,
                    popupWrapStyle: g
                } = e, h = (0, n(682985).uB)(e.buttonPopupStore, n(510969).A);
                (0, i.useEffect)(() => () => {
                    h.setState({
                        open: !1
                    })
                }, [h]);
                let y = (0, i.useCallback)(() => o(a, s, h), [a, s, h]),
                    k = (0, i.useCallback)(() => (0, r.jsx)(l, {
                        onClose: a,
                        persistOnClose: s,
                        content: u,
                        buttonPopupStore: h
                    }), [a, s, u, h]),
                    x = (0, i.useCallback)(e => {
                        var t, i, r, a, o;
                        return t = e, i = c, r = d, a = _, o = h, void(i && (null == t || t.stopPropagation()), !(t && (0, n(85520).V)(t)) && (r && r(t), a || o.setState({ ...o.state,
                            open: !0
                        })))
                    }, [c, d, _, h]),
                    w = m ? m({ ...e,
                        onClick: p ? n(763230).D_ : x
                    }) : null,
                    C = (0, n(682985).K8)(() => h.state.open, [h]);
                return (0, r.jsx)(n(182718).zD, {
                    ref: t,
                    ...e,
                    forceInitialInbound: !!f,
                    content: k,
                    open: C,
                    onDismiss: y,
                    originGap: b,
                    borderRadius: v,
                    popupWrapStyle: g,
                    trapFocus: !0,
                    children: w
                })
            });

            function o(e, t, n) {
                e && e(), t || n.reset()
            }

            function l({
                onClose: e,
                persistOnClose: t,
                content: a,
                buttonPopupStore: s
            }) {
                let u = (0, i.useCallback)(() => o(e, t, s), [e, t, s]),
                    c = (0, n(682985).K8)(() => a({
                        close: u
                    }), [a, u], {
                        silenceRerenderDefender: !0
                    });
                return (0, r.jsx)(r.Fragment, {
                    children: c
                })
            }
        },
        982473: (e, t, n) => {
            function i(e, t) {
                var i, r;
                return (i = e.items, r = t.items, (0, n(627179).qq)({
                    as: i,
                    aKey: e => n(192159).IE(e),
                    bs: r,
                    bKey: e => n(192159).IE(e)
                })).some(([e, t]) => (function(e, t) {
                    if (!e) return !1;
                    if (!t) return !0;
                    let i = n(192159).xp(e),
                        r = n(192159).xp(t);
                    return !!i && !!r && n(262166).o3[i] > n(262166).o3[r]
                })(e, t))
            }

            function r(e, {
                trialEnd: t,
                items: n
            }, i) {
                return {
                    trialEnd: t,
                    items: n.map(t => {
                        let n = u(e, {
                            interval: i,
                            product: t.price.product,
                            currency: t.price.unitAmount.currencyCode
                        });
                        return { ...t,
                            price: n
                        }
                    })
                }
            }

            function a(e, t) {
                let i = e.items.filter(e => n(192159).IE(e) !== t);
                return { ...e,
                    items: i
                }
            }

            function o(e, t) {
                let i = n(192159).IE(t),
                    r = t.price.product,
                    a = e.items.filter(e => {
                        let t = e.price.product,
                            a = n(192159).IE(e),
                            o = "ai" === t && !n(192159).$0(e.price.externalId);
                        return i !== a && !(o && ("business" === r || "enterprise" === r))
                    });
                return { ...e,
                    items: a.concat([t])
                }
            }

            function l(e) {
                let {
                    state: t,
                    prices: i,
                    quantities: r,
                    params: {
                        planBillingInterval: a,
                        currency: o
                    },
                    products: l
                } = e, s = l.map(e => {
                    var t;
                    return "personal_free" === (t = e) || "team_free" === t ? "free" : t
                }), d = s.map(e => n(192159).Mr(e)), _ = t.items.filter(e => {
                    let t = e.price.product,
                        i = n(192159).IE(e),
                        r = d.includes(i),
                        a = "ai" === t && (s.includes("business") || s.includes("enterprise"));
                    return !r && !a
                }), p = s.map(e => c(u(i, {
                    interval: "ai_credit_pack" === e ? "month" : a,
                    currency: o,
                    product: e
                }), r));
                return { ...t,
                    items: _.concat(p)
                }
            }

            function s(e) {
                let {
                    prices: t,
                    billingData: i,
                    product: r
                } = e, a = n(192159).Ry(i), o = n(192159).Mr(r), l = n(192159).lQ(i), s = (0, n(465424).R)(o, l), u = n(192159).N4(o, i), c = s ? ? u;
                return t.find(e => e.product === r && e.billingInterval === c && e.unitAmount.currencyCode === a)
            }

            function u(e, {
                interval: t,
                product: n,
                currency: i
            }) {
                var r = e.find(e => e.product === n && e.billingInterval === t && e.unitAmount.currencyCode === i),
                    a = `Unable to find price with interval: ${t}, product: ${n}, currency: ${i}`;
                if (null == r) throw Error(a);
                return r
            }

            function c(e, t) {
                let {
                    numSeats: i,
                    numCustomHostnames: r,
                    numAiCreditPacks: a
                } = t;
                switch ((0, n(475413).vK)(e.product)) {
                    case "public_domain_custom_hostnames":
                        return {
                            price: e,
                            quantity: r
                        };
                    case "ai_credit_pack_units":
                        return {
                            price: e,
                            quantity: a
                        };
                    default:
                        return {
                            price: e,
                            quantity: i
                        }
                }
            }
            n.d(t, {
                V5: () => i,
                Vr: () => r,
                ef: () => l,
                gL: () => a,
                ng: () => c,
                vH: () => o,
                vk: () => u,
                z2: () => s
            }), n(16280), n(898992), n(354520), n(672577), n(581454), n(737550)
        }
    }
]);