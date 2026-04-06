"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [6782, 60858, 87539, 96579], {
        6260: (e, t, n) => {
            n.d(t, {
                Z: () => a
            }), n(296540);
            var i = n(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 16.74 14.99",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M4.5 4.125A2.125 2.125 0 0 0 2.375 6.25v7.5c0 1.174.951 2.125 2.125 2.125h5.702a4.7 4.7 0 0 1-.2-1.25H4.5a.875.875 0 0 1-.875-.875V7.5h12.75v2.535a4.7 4.7 0 0 1 1.25.684V6.25A2.125 2.125 0 0 0 15.5 4.125zm.758 1.684a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0m1.375-.625a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m2.625.625a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0"
                        }), (0, i.jsx)("path", {
                            d: "M17.7 16.607a3.625 3.625 0 1 0-.893.878l1.223 1.427a.625.625 0 0 0 .94-.823zM12.375 14.5a2.375 2.375 0 1 1 4.75 0 2.375 2.375 0 0 1-4.75 0"
                        })]
                    })
                },
                a = (0, n(104509).wt)("browserMagnifyingGlass", s, "default")
        },
        17118: (e, t, n) => {
            n.d(t, {
                l: () => a
            });
            var i = () => n(546605);
            class s extends i().Store {
                getInitialState() {
                    return null
                }
            }
            let a = new s
        },
        35370: (e, t, n) => {
            n.d(t, {
                u: () => a
            }), n(296540);
            var i = n(474848);

            function s(e) {
                let t, {
                        context: s,
                        extensionMenuParent: a,
                        actionMenuListParent: o,
                        popupEvents: r,
                        displayName: l,
                        width: c,
                        initialFocus: u,
                        subActions: d
                    } = e,
                    {
                        isPhone: p
                    } = (0, n(533992).Y0)(),
                    g = (0, n(649476).Tf)();
                t = p ? g ? {
                    menuType: n(649476).gu.Modal,
                    onClickLeft: a.close,
                    left: (0, i.jsx)(n(497857).h, {}),
                    enableMobileRefresh: g,
                    paddingTop: 10,
                    title: (0, i.jsx)(n(109939).sA, { ...l
                    }),
                    ...r
                } : {
                    menuType: n(649476).gu.Modal,
                    right: (0, i.jsx)(n(109939).sA, { ...n(789722).W.done
                    }),
                    onClickRight: a.close,
                    ...r
                } : {
                    menuType: n(649476).gu.Popup,
                    width: c ? ? 220,
                    ...r
                };
                let b = (0, n(682985).K8)(() => d(s), [s, d]);
                return (0, i.jsx)(n(747369).A, { ...t,
                    children: (0, i.jsx)(n(530500).A, {
                        initialFocus: u ? ? 0,
                        context: s,
                        sections: b,
                        onAccept: o.onAccept
                    })
                })
            }

            function a(e) {
                let {
                    key: t,
                    displayName: s,
                    displayNameInterpolatedValues: a,
                    analyticsName: r,
                    validators: l,
                    subActions: c,
                    collapseSubActionsIntoParent: u,
                    hideSubActions: d,
                    clientSkill: p,
                    fuzzySearchKeywordsArray: g,
                    disabled: b
                } = e, m = (0, n(233319).Ls)({
                    clientSkill: p,
                    key: `extension ${t}`,
                    displayName: s,
                    displayNameInterpolatedValues: a,
                    analyticsName: r,
                    validators: l,
                    subActions: c,
                    collapseSubActionsIntoParent: u,
                    hideSubActions: d,
                    fuzzySearchKeywordsArray: g,
                    closeParentMenu: !0,
                    disabled: b,
                    action: () => {},
                    render: (t, n, s) => (0, i.jsx)(o, {
                        actionDisplayName: m.displayName,
                        args: e,
                        props: t,
                        context: n,
                        actionMenuListParent: s
                    })
                });
                return m
            }

            function o({
                actionDisplayName: e,
                args: t,
                props: a,
                context: r,
                actionMenuListParent: l
            }) {
                let {
                    displayName: c,
                    subTitle: u,
                    renderTooltip: d,
                    tooltipPlacement: p,
                    svg: g,
                    icon: b,
                    right: m,
                    rightStyle: f,
                    dontShrinkTitle: _,
                    width: h,
                    initialFocus: v,
                    subActions: x,
                    bottomSheetInitialState: y,
                    disableDefaultClick: S
                } = t, {
                    disabled: A,
                    disableTooltip: w
                } = (0, n(682985).K8)(() => {
                    var e, n;
                    return {
                        disabled: (null == (e = t.disabled) ? void 0 : e.call(t, r)) || !1,
                        disableTooltip: !d || (null == (n = t.disableTooltip) ? void 0 : n.call(t, r))
                    }
                }, [t, r, d]), k = null == u ? void 0 : u(r);
                return (0, i.jsx)(n(51831).m, {
                    content: () => (0, i.jsx)("div", {
                        style: n(233319).FG,
                        children: null == d ? void 0 : d({
                            context: r,
                            title: e
                        })
                    }),
                    disableTooltip: w,
                    placement: p,
                    children: t => (0, i.jsx)(n(816231).A, { ...a,
                        disabled: A,
                        disabledFeedback: A,
                        disableDefaultClick: S,
                        onFocus: l.onFocus,
                        renderExtension: (e, t) => (0, i.jsx)(s, {
                            context: r,
                            extensionMenuParent: t,
                            actionMenuListParent: l,
                            popupEvents: e,
                            displayName: c,
                            width: h,
                            initialFocus: v,
                            subActions: x
                        }),
                        bottomSheetInitialState: y,
                        children: (s, a) => {
                            let o = { ...(0, n(63390).A)(s, t),
                                title: k ? (0, i.jsx)(n(233319).fh, {
                                    subTitle: k,
                                    children: e
                                }) : e,
                                right: m,
                                rightStyle: f,
                                dontShrinkTitle: _
                            };
                            return g ? (0, i.jsx)(n(860287).A, { ...o,
                                svg: g,
                                ref: a
                            }) : (0, i.jsx)(n(95582).A, { ...o,
                                icon: b,
                                ref: a
                            })
                        }
                    })
                })
            }
        },
        75170: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = () => n(546605);
            let s = [];
            class a extends i().Store {
                getInitialState() {
                    return {
                        open: !1,
                        createOrUpdateMenuState: void 0,
                        tabSpacesState: {
                            tabSpaces: {},
                            orderedTabSpaceIds: s,
                            ungroupedTabCount: 0,
                            activeTabSectionId: "ungrouped"
                        }
                    }
                }
            }
            let o = new a;
            (0, n(202146).exposeDebugValue)("ElectronTabSpacesMenuStore", o);
            let r = o
        },
        96495: (e, t, n) => {
            n.d(t, {
                a: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    upsell: i,
                    spaceStore: s,
                    salesStatus: a,
                    campaign: o,
                    requestState: r,
                    billingData: l,
                    source: c,
                    loading: u
                } = e;
                if (u) return {
                    status: "loading"
                };
                let d = (0, n(875472).sO)(o);
                if ("none" === i.type) return {
                    status: "not_eligible",
                    reason: "feature_not_upsellable"
                };
                if ((0, n(916804).I)(s)) return {
                    status: "not_eligible",
                    reason: "guest"
                };
                let p = i.product,
                    {
                        addOnFeature: g
                    } = (0, n(269612).p)({
                        billingData: l,
                        product: p
                    });
                if (!(0, n(192159).Gm)(l) && ["block_limit_sidebar", "block_limit_settings", "block_limit_banner", "database_chart_paywall", "delete_blocks_modal", "slash_menu", "out_of_blocks_toast", "forms_increase_file_limit", "forms_notion_branding", "forms_customize_settings"].includes(c) && !g) return {
                    status: "eligible_to_purchase",
                    reason: "plans_page_redirect"
                };
                let b = function(e) {
                    let {
                        product: t,
                        environment: i,
                        spaceStore: s
                    } = e;
                    if ((0, n(832139).A)()) return {
                        status: "not_eligible",
                        reason: "samsung_purchases_not_supported"
                    };
                    let a = (0, n(663842).m)({
                        environment: i
                    }) && ("personal" === t || "ai" === t);
                    return a && s && (0, n(471078).O)({
                        environment: i,
                        spaceId: s.id
                    }) ? {
                        status: "not_eligible",
                        reason: "mobile_multi_member_workspace"
                    } : i.device.isMobileNative ? "ai" !== t || (0, n(907620).T)("supportsAiIAP") ? a ? {
                        status: "eligible_to_purchase",
                        reason: "show_mobile_native_upgrade_modal"
                    } : {
                        status: "not_eligible",
                        reason: "mobile_purchase_not_supported"
                    } : {
                        status: "not_eligible",
                        reason: "mobile_ai_add_on_purchase_not_supported"
                    } : void 0
                }({
                    product: p,
                    environment: t,
                    spaceStore: s
                });
                return b || ((null == l ? void 0 : l.provider) === "app_store" || (null == l ? void 0 : l.provider) === "play_store" ? {
                    status: "not_eligible",
                    reason: "subscribed_via_in_app_purchase"
                } : "unrequested" === r ? {
                    status: "eligible_to_request"
                } : "pending" === r ? {
                    status: "request_pending"
                } : "sales_assisted" === a ? {
                    status: "sales_assisted"
                } : (0, n(262166).h0)(p) && "sales_eligible" === a ? {
                    status: "sales_eligible"
                } : null != s && s.canAdmin() ? (0, n(192159).bO)((0, n(226309).a9)(l)) ? {
                    status: "not_eligible",
                    reason: "unverified_payment"
                } : "preferred" === i.trialability && (null == d ? void 0 : d.type) === "trial" && d.subscriptionTier === i.product ? {
                    status: "eligible_for_trial"
                } : {
                    status: "eligible_to_purchase",
                    reason: "show_upgrade_modal"
                } : {
                    status: "not_eligible",
                    reason: "not_workspace_owner"
                })
            }
        },
        124094: (e, t, n) => {
            n.d(t, {
                E: () => l,
                Z: () => c
            });
            var i = () => n(889089);
            let s = {
                plans_page: ["business_trial_non_conversion", "business_block_limit_coupon", "plus_block_limit_coupon", "aimn", "annual_block_limit", "block_limit", "business_resurrection_offer", "resurrection_offer"],
                checkout_modal: ["business_trial_non_conversion", "business_block_limit_coupon", "plus_block_limit_coupon", "aimn", "annual_block_limit", "block_limit", "business_resurrection_offer", "resurrection_offer"],
                business_trial_verify_pages_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_settings_centralized_view: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_upsell_item_page_entrypoint: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_upsell_item_collection_entrypoint: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                business_trial_private_teamspaces_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                business_trial_ai_connectors_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                upgrade_requests_page: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_workspace_settings_connector_cards: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                multi_search_scope_menu: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                assistant_overflow_menu_add_connectors: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_corner_chat_welcome_connector_action_card: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_chat_connectors_banner: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                post_business_trial_coupon_callout: ["business_trial_non_conversion"],
                resurrection_offer_callout: ["business_resurrection_offer", "resurrection_offer"],
                ai_agent: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d"],
                custom_agent: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_sidebar: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                new_custom_agents_sidebar: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                new_custom_agents_library: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                slippery_slope_flyout_menu: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_launch_modal: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_gift_box: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                marketplace_agents: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"]
            };
            var a = () => n(617995),
                o = () => n(705820);
            async function r(e) {
                var t;
                let {
                    campaign: i,
                    eligibleCampaigns: s
                } = e;
                if (!s.includes(i)) return !1;
                await (0, n(591083).yc)().catch(() => void 0);
                let a = (0, n(591083).v7)(),
                    o = null == a || null == (t = a[i]) ? void 0 : t.statsigDetails;
                return !!o && (await n(218744).default.waitUntilStatsigReadyAsync(), (0, n(134213).l)({
                    experimentService: n(218744).default,
                    statsigDetails: o
                }).isEligible)
            }
            async function l(e, t, n) {
                let l, c = function(e) {
                    if (s.hasOwnProperty(e)) return s[e]
                }(n);
                if (c)
                    for (let n of c) {
                        if ((0, i().w)(n)) {
                            if (l || (l = await o().P.awaitData(e, {
                                    spaceId: t
                                }) ? ? []), await r({
                                    campaign: n,
                                    eligibleCampaigns: l
                                })) return n;
                            continue
                        }
                        let s = await a().I.awaitData(e, {
                            spaceId: t,
                            offerCampaign: n
                        });
                        if ((null == s ? void 0 : s.campaign) === n) return n
                    }
            }

            function c({
                environment: e,
                spaceName: t,
                campaign: i,
                entrypoint: s
            }) {
                if (t) switch (i) {
                    case "resurrection_offer":
                    case "business_resurrection_offer":
                        (0, n(104310).u)({
                            event: {
                                eventName: "offer_viewed",
                                eventProperties: {
                                    offer_campaign: i,
                                    entrypoint: s
                                }
                            }
                        })
                }
            }
        },
        126592: (e, t, n) => {
            n.d(t, {
                e: () => i
            });
            async function i(e) {
                if (null !== n(17118).l.state) return n(17118).l.state;
                let t = e.device.os;
                if ("mac" !== t && "windows" !== t) return !1;
                let i = await e.api.callApi({
                    eventName: "getDesktopAppRegistration",
                    environment: e,
                    data: {
                        os: t
                    }
                });
                if ("failed" === i.type) return n(773352).log({
                    level: "error",
                    from: "getDesktopAppRegistered",
                    type: "api:getDesktopAppRegistration",
                    error: i.error
                }), !1;
                let s = i.data.isRegistered || !!i.data.isRegistered30Day;
                return n(17118).l.setState(s), s
            }
        },
        132261: (e, t, n) => {
            n.d(t, {
                DX: () => d,
                FD: () => a,
                Zr: () => o,
                aL: () => i,
                bG: () => r,
                qe: () => u,
                ry: () => s,
                sI: () => c,
                sx: () => l
            });
            let i = 800,
                s = 22,
                a = 24,
                o = 30,
                r = 8,
                l = 4,
                c = 6,
                u = 15,
                d = {
                    baseSidebarItem: { ...n(153262).hG,
                        fontWeight: n(699422).Wy.medium
                    },
                    currentSelectedSidebarItem: {
                        background: n(632079).Tj.sidebarItemSelectedBackground,
                        color: n(632079).Tj.text.primary,
                        ...n(986939).A.isMobile && {
                            boxShadow: `
                            0 1px 0 ${n(632079).Tj.buttonHoveredBackground}
                        `
                        }
                    }
                }
        },
        151760: (e, t, n) => {
            n.d(t, {
                R: () => a
            }), n(296540);
            var i = n(474848);
            let s = (0, n(109939).YK)({
                notOpeningPrompt: {
                    id: "openInDesktopApp.notOpeningPrompt",
                    defaultMessage: "Not opening?"
                },
                downloadDesktopApp: {
                    id: "openInDesktopApp.downloadDesktopApp",
                    defaultMessage: "Downloading Notion for Desktop. Already have the app?"
                }
            });
            async function a(e) {
                let {
                    environment: t,
                    from: a,
                    isRegistered: r,
                    alwaysAttemptOpenNativeApp: l
                } = e, c = (0, n(4688).PT)(window.location.href);
                r ? ((0, n(104310).u)({
                    event: {
                        eventName: "open_desktop_app_from_notion",
                        eventProperties: {
                            from: a,
                            always_attempt_open_native_app: l
                        }
                    }
                }), (0, n(884015).e)({
                    environment: t,
                    url: c
                }), function(e) {
                    let {
                        item: t,
                        downloadDesktopCallback: s
                    } = e;
                    n(436555).D6({ ...t,
                        right: (0, i.jsx)(n(531119).jj, {
                            downloadDesktopCallback: s
                        })
                    })
                }({
                    item: {
                        label: n(962299).A.formatMessage(s.notOpeningPrompt),
                        durationMs: 1e4
                    },
                    downloadDesktopCallback: () => {
                        o({
                            environment: t,
                            from: "appSwitcher"
                        })
                    }
                })) : await o({
                    environment: t,
                    from: "appSwitcher"
                })
            }
            async function o(e) {
                let {
                    environment: t,
                    from: o
                } = e, r = await (0, n(542061).a)(t.device);
                r && ((0, n(787786).p)({
                    environment: t,
                    from: o
                }), (0, n(79266).navigate)({
                    environment: t,
                    url: r,
                    openInNew: "tab"
                }), n(436555).Sy(), function(e) {
                    let {
                        item: t,
                        openDesktopCallback: s
                    } = e;
                    n(436555).D6({ ...t,
                        right: (0, i.jsx)(n(531119).zn, {
                            openDesktopCallback: s
                        })
                    })
                }({
                    item: {
                        label: n(962299).A.formatMessage(s.downloadDesktopApp),
                        durationMs: 1e4
                    },
                    openDesktopCallback: () => {
                        a({
                            environment: t,
                            from: "appSwitcher",
                            isRegistered: !0
                        })
                    }
                }))
            }
        },
        154457: (e, t, n) => {
            n.d(t, {
                h: () => i
            });
            let i = (0, n(104509).xh)("plus", {
                default: {
                    loader: () => n.e(8881).then(n.bind(n, 581923))
                },
                small: {
                    loader: () => n.e(8881).then(n.bind(n, 638501))
                },
                fill: {
                    loader: () => n.e(8881).then(n.bind(n, 223759))
                },
                fillSmall: {
                    loader: () => n.e(8881).then(n.bind(n, 550246))
                }
            }, ["plus", "add", "new", "create", "increase"])
        },
        173231: (e, t, n) => {
            n.d(t, {
                hS: () => u,
                o2: () => d,
                js: () => o,
                Oe: () => r,
                Le: () => c,
                F6: () => p
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(430670), n(581454), n(296540);
            var i = n(474848);
            let s = (0, n(109939).YK)({
                    moreOptions: {
                        id: "action.moreOptions",
                        defaultMessage: "More options"
                    }
                }),
                a = (0, n(109939).YK)({
                    mixedBlocks: {
                        id: "actionMenuHelpers.mixedBlocks.title",
                        defaultMessage: "{count, plural, one {{count} block} other {{count} blocks}}"
                    }
                });

            function o(e) {
                return l(e).groupedSections
            }

            function r(e) {
                let t = l(e);
                return t.rankedActions.map(e => ({
                    action: e,
                    section: t.actionSectionMap.get(e)
                }))
            }

            function l(e) {
                let t = n(962299).A.getIntl(),
                    {
                        sections: o,
                        context: r,
                        query: l,
                        shouldShowBlockTypeTitle: c
                    } = e,
                    u = l.trim().toLowerCase();
                u.startsWith("/") && (u = u.slice(1));
                let g = d(o, r).map((e, o) => {
                    var l, u;
                    let {
                        actions: d,
                        title: p
                    } = e, g = d.length - 5;
                    if (e.shouldShowMoreOptions && g > 1) {
                        let e = (l = d.slice(5), (0, n(35370).u)({
                            key: "more options",
                            displayName: s.moreOptions,
                            analyticsName: s.moreOptions.defaultMessage,
                            svg: n(397900).ellipsisIcon,
                            validators: [],
                            subActions: () => [{
                                key: 0,
                                title: void 0,
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                actions: l
                            }]
                        }));
                        d = [...d.slice(0, 5), e]
                    }
                    let b = r.blocks[0];
                    if (b) {
                        let e = b.getType();
                        if (c && e && 0 === o) {
                            let i = r.blocks.every(t => t.getType() === e) ? (0, n(495734).Z)(e) : a.mixedBlocks;
                            if (i) {
                                p = t.formatMessage(i, {
                                    count: r.blocks.length
                                });
                                let e = null == (u = n(496704).K.findCollectionViewBlockFromStore(b)) ? void 0 : u.collectionContextStore.getViewType();
                                if (e) {
                                    let t = n(799514).to[e];
                                    t && (p += ` \xb7 ${t}`)
                                }
                            }
                        }
                    }
                    return { ...e,
                        actions: d,
                        title: p
                    }
                });
                if (!u) {
                    let e = new Map;
                    for (let t of g)
                        for (let n of t.actions) e.set(n, t);
                    return {
                        groupedSections: g,
                        rankedActions: g.flatMap(e => e.actions),
                        actionSectionMap: e
                    }
                }
                let b = (function(e, t) {
                        let n = [];
                        for (let i of e) {
                            let e = { ...i,
                                actions: []
                            };
                            for (let s of i.actions)
                                if (p(s, t))
                                    if (s.subActions) {
                                        let a = d(s.subActions(t), t);
                                        if (s.hideSubActions) {
                                            e.actions.push(s);
                                            continue
                                        }
                                        if (s.collapseSubActionsIntoParent) {
                                            for (let t of a)
                                                for (let n of t.actions) e.actions.push(n);
                                            continue
                                        }
                                        for (let e of a.map(e => ({ ...e,
                                                key: `${i.key} ${s.key} ${e.key}`,
                                                title: e.title || s.displayName,
                                                searchTitle: [s.searchName || s.displayName, e.searchTitle || e.title].filter(Boolean).join(" ")
                                            }))) n.push(e)
                                    } else e.actions.push(s);
                            e.actions.length && n.push(e)
                        }
                        return n
                    })(o, r).map(e => ({ ...e,
                        actions: e.actions.map(t => {
                            let n = t.searchName || t.displayName || "",
                                i = [n, e.searchTitle || e.title || "", n].join(" ");
                            return { ...t,
                                searchName: i
                            }
                        })
                    })),
                    m = [],
                    f = new Map;
                for (let e of b)
                    for (let t of e.actions) f.set(t, e), m.push(t);
                let _ = (0, n(821048).Ay)(u, m, e => e.searchName || "", {
                        minScore: 25,
                        getSortScore: e => -e.score * (e.original.sortScoreMultiplier ? ? 1)
                    }),
                    h = new Set(_),
                    v = m.filter(e => !!e.alwaysShowInSearch && !h.has(e)),
                    x = [...v.filter(e => "start" === e.alwaysShowInSearch), ..._, ...v.filter(e => "end" === e.alwaysShowInSearch)],
                    y = n(381453).$z(x, e => {
                        let t = f.get(e);
                        if (t) return t.title
                    }),
                    S = [];
                for (let e of Object.keys(y)) {
                    let t = y[e],
                        n = f.get(t[0]);
                    n && S.push({ ...n,
                        actions: t
                    })
                }
                return {
                    groupedSections: S,
                    rankedActions: x,
                    actionSectionMap: f
                }
            }

            function c(e, t) {
                if (!t) return e;
                let n = 0,
                    i = [];
                for (let s of e) {
                    if (n >= t) break;
                    let e = s.actions.slice(0, t - n);
                    e.length > 0 && (n += e.length, i.push({ ...s,
                        actions: e
                    }))
                }
                return i
            }

            function u(e, t) {
                let n = [];
                for (let i of e) {
                    let e = i.actions.filter(t);
                    e.length > 0 && n.push({ ...i,
                        actions: e
                    })
                }
                return n
            }

            function d(e, t) {
                return u(e, e => p(e, t))
            }

            function p(e, t) {
                return null != e && (!e.validators || e.validators.every(e => e(t)))
            }
        },
        187649: (e, t, n) => {
            let i, s;

            function a(e) {
                i = e
            }
            async function o() {
                return s || (i ? s = await i() : void 0)
            }
            n.d(t, {
                Q: () => a,
                z: () => o
            })
        },
        208117: (e, t, n) => {
            function i(e) {
                let {
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: a,
                    billingData: o
                } = e;
                return s({
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: a,
                    billingData: o
                }) && !(0, n(192159).N8)(o) && !!(!a || !(0, n(556306).h)(a))
            }

            function s(e) {
                let {
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: s,
                    billingData: a
                } = e;
                if (a && (0, n(192159).N8)(a)) return !0;
                let o = null == s ? void 0 : s.id;
                return !!o && (!!(((0, n(616579).j)({
                    environment: t,
                    spaceId: o
                }) ? ? 1) > 99 || (0, n(192159).N8)(a)) || !!i && "company_employee_count" in i && parseInt(i.company_employee_count) > 99)
            }
            n.d(t, {
                H: () => s,
                q: () => i
            })
        },
        250616: (e, t, n) => {
            n.d(t, {
                g: () => i
            });
            let i = "space-id"
        },
        269612: (e, t, n) => {
            n.d(t, {
                p: () => i
            });

            function i({
                billingData: e,
                product: t
            }) {
                return (0, n(722371).Xk)(n(645040).xm, t) ? {
                    addOnFeature: t,
                    for_subscription_tier: (0, n(192159).AI)(e)
                } : {
                    for_subscription_tier: t
                }
            }
        },
        279351: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => s,
                personCircleFillSmallIcon: () => a
            }), n(296540);
            var i = n(474848);
            let s = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.94 1.95 12.11 12.11",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 4.11c-.764 0-1.388.318-1.81.843-.41.511-.602 1.185-.602 1.88s.192 1.369.602 1.88c.422.525 1.046.842 1.81.842.765 0 1.389-.317 1.81-.842.41-.511.602-1.185.602-1.88s-.191-1.369-.602-1.88C9.389 4.428 8.765 4.11 8 4.11"
                        }), (0, i.jsx)("path", {
                            d: "M1.95 8a6.05 6.05 0 1 1 12.1 0 6.05 6.05 0 0 1-12.1 0M8 3.05a4.95 4.95 0 0 0-3.227 8.703c.64-1.082 1.854-1.8 3.227-1.8s2.586.718 3.227 1.8A4.95 4.95 0 0 0 8 3.05"
                        })]
                    })
                },
                a = (0, n(104509).wt)("personCircleFillSmall", s, "fillSmall")
        },
        310961: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var i = () => n(546605);
            class s extends i().Store {
                getInitialState() {
                    return {
                        open: !1,
                        focus: "none"
                    }
                }
                open() {
                    this.setState({
                        open: !0,
                        focus: "none"
                    })
                }
                close() {
                    this.setState({
                        open: !1,
                        focus: "none"
                    })
                }
            }
            let a = new s
        },
        330602: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            let i = n(546605).Store.createValue(!1)
        },
        340024: (e, t, n) => {
            n.d(t, {
                W: () => s
            }), n(296540);
            var i = n(474848);

            function s() {
                return (0, i.jsx)(n(746434).E, {
                    color: "blue",
                    content: (0, i.jsx)(n(109939).sA, {
                        id: "previewBadgeComponent.label",
                        defaultMessage: "New"
                    })
                })
            }
        },
        348295: (e, t, n) => {
            n.d(t, {
                $: () => i
            });
            let i = n(381453).Bj(e => new(n(345426)).ComputedStore(() => {
                let t = n(728372).AppStoreMainEditorCurrentBlockStore.state,
                    i = t && t.isCollectionView(),
                    s = (0, n(548124).getChatPanelState)(e),
                    a = (null == s ? void 0 : s.isOpen) ? ? !1;
                return n(200083).A.state.isKeyboardMode && !n(330602).A.state && !n(11446).A.isActive() && !i && !n(930179).default.state.open && !n(847591).Ay.state.open && !(0, n(659262).y)() && 0 === n(465361).A.state.banners.length && !n(585823).gZ.state && !n(75170).A.state.open && !a
            }, {
                debugName: "appHelpers.shouldHideTopbarStore"
            }))
        },
        355551: (e, t, n) => {
            n.d(t, {
                b: () => i
            });

            function i() {
                return !(n(986939).A.isMobile || (0, n(216260).OX)())
            }
        },
        375592: (e, t, n) => {
            n.d(t, {
                T: () => i
            });
            let i = new(n(273917)).U(e => `${e.currentUser.id}`, async e => {
                let t = await e.api.callApi({
                    eventName: "getExternalOrgData",
                    environment: e,
                    data: {}
                });
                return "success" === t.type ? t.data : void 0
            });
            n(202146).exposeDebugValue("ExternalOrgDataStore", i)
        },
        380559: (e, t, n) => {
            n.d(t, {
                u: () => o
            }), n(296540);
            var i = n(474848);
            let s = {
                position: "absolute",
                insetInlineEnd: -2,
                bottom: -2
            };

            function a(e) {
                let {
                    size: t
                } = e;
                return (0, i.jsx)("span", {
                    style: s,
                    children: (0, i.jsx)(n(16275).I, {
                        icon: n(759706).arrowDiagonalUpRightSmallIcon,
                        size: t,
                        colorVariant: "primary",
                        showOutline: !0
                    })
                })
            }

            function o(e) {
                var t, s;
                let {
                    isTablet: o
                } = (0, n(533992).Y0)(), r = (0, n(853284).U)(), l = (0, n(665002).g)(), c = n(986939).A.isMobile ? (0, n(616844).Y5)("left", "number" == typeof(null == (t = e.style) ? void 0 : t.paddingInlineStart) ? null == (s = e.style) ? void 0 : s.paddingInlineStart : 10) : void 0, u = (0, n(960253).I)(() => {
                    let t = n(986939).A.isMobile ? {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            minHeight: 26,
                            fontSize: 16,
                            paddingTop: o ? 4 : 8,
                            paddingBottom: o ? 4 : 8,
                            paddingInlineStart: c,
                            paddingInlineEnd: 10,
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            boxShadow: void 0,
                            marginBottom: e.shouldShowMobileMarginBottom ? 12 : 1
                        } : {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            fontSize: 14,
                            minHeight: e.isBottomItem ? 24 : 27,
                            height: n(132261).Zr,
                            paddingTop: 4,
                            paddingBottom: 4,
                            ...(0, n(153262).ic)()
                        },
                        i = n(986939).A.isMobile ? 24 : e.isLibrary ? n(132261).FD : n(132261).ry;
                    return {
                        wrapper: { ...t,
                            ...e.style,
                            ...l && {
                                transition: "none"
                            }
                        },
                        icon: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                            width: n(986939).A.isMobile ? 28 : 22,
                            height: n(986939).A.isMobile ? 24 : 18,
                            marginInlineEnd: e.isLibrary ? 3 : 8,
                            position: "relative"
                        },
                        right: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                            height: "100%",
                            ...e.rightStyle
                        },
                        left: {
                            flexShrink: 0,
                            flexGrow: 0,
                            borderRadius: 4,
                            color: n(632079).Tj.text.secondary,
                            width: i,
                            height: i,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInlineEnd: r ? 6 * !e.icon : e.isLibrary ? 8 : 8 * !e.icon
                        },
                        children: {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: "auto",
                            whiteSpace: "nowrap",
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: e.right && !n(986939).A.isMobile ? "clip" : "ellipsis",
                            ...e.childrenStyle
                        }
                    }
                }, [o, c, e.shouldShowMobileMarginBottom, e.isBottomItem, e.style, e.rightStyle, e.isLibrary, e.icon, e.right, e.childrenStyle, r, l]);
                return (0, i.jsxs)("div", {
                    role: e.role,
                    dir: (0, n(619157).A1)() ? "rtl" : "ltr",
                    "aria-current": e["aria-current"],
                    "aria-expanded": e["aria-expanded"],
                    "aria-owns": e["aria-owns"],
                    "aria-labelledby": e["aria-labelledby"],
                    style: u.wrapper,
                    onFocus: e.onFocus,
                    onBlur: e.onBlur,
                    onMouseMove: e.onMouseMove,
                    onMouseLeave: e.onMouseLeave,
                    onClick: e.onClick,
                    className: e.className,
                    children: [e.left ? (0, i.jsx)("div", {
                        style: u.left,
                        children: e.left
                    }) : void 0, e.icon ? (0, i.jsxs)("div", {
                        style: u.icon,
                        children: [e.icon, e.isAlias ? (0, i.jsx)(a, {
                            size: "xs"
                        }) : void 0]
                    }) : void 0, (0, i.jsx)("div", {
                        style: u.children,
                        children: e.children
                    }), e.right ? (0, i.jsx)("div", {
                        style: u.right,
                        children: e.right
                    }) : void 0]
                })
            }
        },
        407998: (e, t, n) => {
            n.d(t, {
                V: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    billingData: s,
                    externalOrgSummary: a
                } = e;
                return (0, n(192159).N8)(s) ? "sales_assisted" : i && (0, n(208117).H)({
                    environment: t,
                    externalOrgSummary: a,
                    spaceStore: i,
                    billingData: s
                }) && !(0, n(556306).h)(i) ? "sales_eligible" : "self_serve"
            }
        },
        408138: (e, t, n) => {
            n.d(t, {
                X: () => i
            });
            let i = n(546605).Store.createValue({
                shouldReset: !1
            }, {
                name: "MobileAssistantMenuStore"
            })
        },
        476743: (e, t, n) => {
            n.d(t, {
                a: () => i
            });

            function i() {
                return (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore)
            }
        },
        477870: (e, t, n) => {
            n.d(t, {
                L: () => i
            });
            let i = new(n(227586)).n((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, t) => {
                let i = await e.api.callApi({
                        eventName: "getAllUpgradeRequestsForSpace",
                        environment: e,
                        data: t
                    }),
                    s = [{
                        key: (0, n(568479).VI)(t),
                        version: -1
                    }];
                return "success" === i.type ? {
                    value: i.data.requests,
                    dependencies: i.data.dependencies ? ? s
                } : void 0
            })
        },
        511358: (e, t, n) => {
            function i(e) {
                let t = !e.currentSlipperySlopeEnabled;
                return ! function(e) {
                    let {
                        environment: t,
                        spaceViewStore: i,
                        slipperySlopeEnabled: s,
                        from: a,
                        userAction: o,
                        canUndo: r = !0
                    } = e, l = i.getSpaceId();
                    (0, n(377796).createAndCommit)({
                        environment: t,
                        userAction: o,
                        cellTarget: {
                            spaceWithId: l
                        },
                        canUndo: r,
                        perform: e => {
                            n(380762).AG(i, e, {
                                slippery_slope_is_enabled: s
                            })
                        }
                    }), (0, n(828560).yZ)({
                        spaceId: i.getSpaceId(),
                        enabled: s
                    }), n(305721).trackSlipperySlopePreferenceToggled({
                        slipperySlopeEnabled: s,
                        from: a
                    }), (0, n(477810).VI)({
                        environment: t
                    })
                }({
                    environment: e.environment,
                    spaceViewStore: e.spaceViewStore,
                    slipperySlopeEnabled: t,
                    from: e.from,
                    userAction: e.userAction,
                    canUndo: e.canUndo
                }), t
            }

            function s(e) {
                var t;
                let {
                    environment: i,
                    spaceViewStore: s,
                    messageKey: a,
                    currentCompleted: o,
                    userAction: r
                } = e, l = !o, c = (null == (t = s.getSettings()) ? void 0 : t.slippery_slope_setup_completed_message_keys) ? ? [], u = l ? Array.from(new Set([...c, a])) : c.filter(e => e !== a);
                return (0, n(377796).createAndCommit)({
                    environment: i,
                    userAction: r,
                    cellTarget: {
                        spaceWithId: s.getSpaceId()
                    },
                    canUndo: !1,
                    perform: e => {
                        n(380762).AG(s, e, {
                            slippery_slope_setup_completed_message_keys: u
                        })
                    }
                }), l
            }
            n.d(t, {
                Kc: () => s,
                dS: () => i
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520)
        },
        530500: (e, t, n) => {
            n.d(t, {
                A: () => l
            }), n(898992), n(354520), n(581454);
            var i = n(296540),
                s = () => n(124858),
                a = n(474848);

            function o(e) {
                return (0, a.jsx)(n(844565).A, { ...e
                })
            }
            let r = n(546605).Store.createClass(25, {
                name: "limitStore"
            });

            function l({
                topBorder: e,
                context: t,
                onAccept: c,
                onFocus: u,
                empty: d,
                keyboardPriority: p,
                disableKeyboard: g,
                initialFocus: b,
                onEmptyEnter: m,
                comboboxProps: f,
                useLimit: _,
                filter: h,
                sections: v,
                menuListStore: x,
                resetInitialFocusOnSectionChangeAlways: y,
                resetFocusOnMouseOut: S,
                role: A,
                showNoResultsMessage: w,
                onFooterEnter: k,
                filterSections: j,
                flattenSectionsOnSearch: M,
                renderItemStyles: I,
                shouldShowBlockTypeTitle: T
            }) {
                let B = (0, n(682985).uB)(void 0, r),
                    C = (0, n(682985).uB)(x, n(419110).$),
                    L = !!(M && h),
                    {
                        visibleActionSections: P,
                        actionsCount: D,
                        allActionSections: z,
                        flatActions: N
                    } = (0, n(682985).K8)(() => {
                        let e = h && j ? j : v;
                        if (L) {
                            let i = (0, n(173231).Oe)({
                                sections: e,
                                context: t,
                                query: h || "",
                                shouldShowBlockTypeTitle: T
                            });
                            return {
                                visibleActionSections: [],
                                actionsCount: i.length,
                                allActionSections: [],
                                flatActions: _ ? i.slice(0, B.state) : i
                            }
                        }
                        let i = (0, n(173231).js)({
                                sections: e,
                                context: t,
                                query: h || "",
                                shouldShowBlockTypeTitle: T
                            }),
                            s = 0;
                        for (let e of i) s += e.actions.length;
                        return {
                            visibleActionSections: _ ? (0, n(173231).Le)(i, B.state) : i,
                            actionsCount: s,
                            allActionSections: i,
                            flatActions: void 0
                        }
                    }, [v, t, h, _, B, j, T, L]);
                (0, i.useEffect)(() => {
                    n(764615).Ay.state.open && n(764615).rA.setState(0 === D)
                }, [D]);
                let O = (0, i.useRef)(h),
                    W = (0, i.useCallback)(e => {
                        e < 200 && B.state < D && B.setState(B.state + 25)
                    }, [B, D]),
                    V = (0, i.useMemo)(() => {
                        let e = new Map;
                        for (let t of z)
                            if (t.key !== s().IZ)
                                for (let n of t.actions) e.set(n.key, t.title);
                        return e
                    }, [z]),
                    {
                        menuItemActionMap: F,
                        menuItemSectionKeyMap: E,
                        menuListSections: U
                    } = (0, i.useMemo)(() => {
                        let i = new Map,
                            r = new Map;

                        function l(e, a) {
                            let o = null == a ? void 0 : a.key.toString();
                            e.lazyDependencyKeys && (0, n(968864).G)(...e.lazyDependencyKeys);
                            let l = {
                                key: e.key,
                                render: (n, i) => {
                                    let r = (null == a ? void 0 : a.key) === s().IZ ? V.get(e.key) : null == a ? void 0 : a.title,
                                        l = L || (null == a ? void 0 : a.key) === s().IZ;
                                    return e.render(n, t, {
                                        onAccept: (e, t, n) => {
                                            null == c || c(e, t, n, o)
                                        },
                                        onFocus: i.onFocus,
                                        sectionTitle: r,
                                        extendItemTitle: l,
                                        styles: I
                                    })
                                },
                                action: ({
                                    event: n
                                }) => {
                                    e.action(t, n)
                                }
                            };
                            return i.set(l, e), r.set(l, o), l
                        }
                        return L ? {
                            menuItemActionMap: i,
                            menuItemSectionKeyMap: r,
                            menuListSections: [{
                                key: "flat",
                                render: e => (0, a.jsx)(n(844565).A, { ...e,
                                    topBorder: !1,
                                    hideTitle: !0
                                }),
                                items: (null == N ? void 0 : N.map(e => l(e.action, e.section))) ? ? []
                            }]
                        } : {
                            menuItemActionMap: i,
                            menuItemSectionKeyMap: r,
                            menuListSections: P.map(t => {
                                let n = t.render ? ? o;
                                return {
                                    key: t.key,
                                    render: i => n({ ...i,
                                        topBorder: 0 !== i.index || !!e,
                                        title: t.title
                                    }),
                                    items: t.actions.map(e => l(e, t))
                                }
                            })
                        }
                    }, [P, L, e, V, t, I, c, N]);
                (0, i.useEffect)(() => {
                    if (h !== O.current && 0 === b) {
                        if (O.current = h, k && 0 === D) return n(163657).rd({
                            store: C
                        });
                        C.setState({ ...C.state,
                            focus: {
                                section: 0,
                                indexLocal: 0,
                                indexGlobal: 0,
                                footerFocused: !1
                            }
                        })
                    }
                }, [h, b, D, C, k]);
                let R = (0, i.useCallback)((e, n) => {
                        if (c) {
                            let s = F.get(e),
                                a = E.get(e);
                            if (s) {
                                var i;
                                if (null != (i = s.isDisabled) && i.call(s, t)) return;
                                c(s, t, n.event, a, n.index)
                            }
                        }
                    }, [c, t, F, E]),
                    H = (0, i.useCallback)(e => {
                        let i;
                        if (e.indexLocal && (i = n(130711).SG(e.indexLocal, U)), e.indexGlobal) {
                            var s;
                            i = null == (s = n(130711).e7(e.indexGlobal, U)) ? void 0 : s.item
                        }
                        if (!i) return;
                        let a = F.get(i),
                            o = E.get(i);
                        a && (null == u || u(a, t, o))
                    }, [F, E, u, U, t]),
                    G = D > 0;
                return (0, a.jsxs)(a.Fragment, {
                    children: [w && !G ? (0, a.jsx)(n(844565).A, {
                        children: (0, a.jsx)(n(498341).u, {
                            title: d || (0, a.jsx)(n(109939).sA, {
                                id: "action.search.noResults",
                                defaultMessage: "No results"
                            })
                        })
                    }) : void 0, (0, a.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        role: A,
                        priority: p,
                        store: C,
                        disableKeyboard: g,
                        sections: U,
                        initialFocus: b,
                        onEmptyEnter: m,
                        onAccept: R,
                        onFocus: H,
                        comboboxProps: f,
                        resetInitialFocusOnSectionChangeAlways: y,
                        resetFocusOnMouseOut: S,
                        onFooterEnter: k
                    }), _ ? (0, a.jsx)(n(636255).A, {
                        onChange: W
                    }) : void 0]
                })
            }
        },
        545504: (e, t, n) => {
            n.d(t, {
                w: () => i
            });

            function i({
                url: e,
                config: t
            }) {
                let s = (0, n(132702).parseRoute)({
                    url: e,
                    baseUrl: t.domainBaseUrl,
                    publicDomainName: t.publicDomainName,
                    isMobile: !1,
                    protocol: t.protocol,
                    currentUrl: void 0,
                    requestedOnAlternateDomain: t.requestedOnAlternateDomain
                });
                if ("page" === s.name) return s.blockId
            }
        },
        556306: (e, t, n) => {
            n.d(t, {
                h: () => i
            });

            function i(e) {
                return !!e.getSetting("self_serve_enterprise_eligible")
            }
        },
        564706: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => s,
                inviteMemberSmallIcon: () => a
            }), n(296540);
            var i = n(474848);
            let s = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.82 1.77 12.86 13.91",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 1.775c-.947 0-1.717.392-2.237 1.04-.508.633-.747 1.47-.747 2.337 0 .869.239 1.705.747 2.338.52.648 1.29 1.04 2.237 1.04s1.717-.392 2.237-1.04c.508-.633.748-1.47.748-2.338s-.24-1.704-.748-2.337c-.52-.648-1.29-1.04-2.237-1.04M6.738 3.597c.28-.348.69-.572 1.262-.572s.983.224 1.263.572c.291.364.472.904.472 1.555 0 .652-.18 1.192-.472 1.556-.28.348-.69.572-1.263.572s-.982-.224-1.262-.572c-.292-.364-.472-.904-.472-1.556 0-.651.18-1.191.472-1.555M8 9.178c-2.196 0-4.166 1.07-5.007 2.713a1.48 1.48 0 0 0 .2 1.676c.356.414.91.658 1.487.658h4.293a.075.075 0 0 0 .07-.105 3.8 3.8 0 0 1-.286-1.079.075.075 0 0 0-.075-.066H4.68a.72.72 0 0 1-.537-.22.3.3 0 0 1-.07-.14.26.26 0 0 1 .033-.154c.583-1.14 2.062-2.033 3.894-2.033.437 0 .855.051 1.245.144a.075.075 0 0 0 .081-.033 3.9 3.9 0 0 1 .78-.896.075.075 0 0 0-.024-.128A6.5 6.5 0 0 0 8 9.178"
                        }), (0, i.jsx)("path", {
                            d: "M12.6 9.525a3.06 3.06 0 0 0-2.474 1.248 3.06 3.06 0 0 0-.566 2.288 3.074 3.074 0 0 0 3.04 2.614 3.075 3.075 0 1 0 0-6.15m-.425 1.408a.425.425 0 0 1 .85 0V12.1c0 .041.034.075.075.075h1.167a.425.425 0 0 1 0 .85H13.1a.075.075 0 0 0-.075.075v1.166a.425.425 0 0 1-.85 0V13.1a.075.075 0 0 0-.075-.075h-1.166a.425.425 0 0 1 0-.85H12.1a.075.075 0 0 0 .075-.075z"
                        })]
                    })
                },
                a = (0, n(104509).wt)("inviteMemberSmall", s, "small")
        },
        657070: (e, t, n) => {
            n.r(t), n.d(t, {
                SidebarSwitcherMultiAccountPopup: () => d,
                _DesktopDownloadButton: () => S,
                _DownloadApps: () => M,
                _SmartDesktopDownloadButton: () => w,
                footerStyles: () => v,
                handleDraggableListDrop: () => T,
                shouldDisableSpaceSwitcherItem: () => B
            }), n(898992), n(354520), n(581454);
            var i = n(296540);

            function s() {
                return n(218744).default.getEligibleGroup({
                    experimentId: "improve_new_workspace_cta_in_account_switcher",
                    defaultGroup: "control"
                })
            }
            var a = n(474848);

            function o(e) {
                let {
                    spaceInfo: t
                } = e, i = e.organizationsInfo.filter(e => "completed" === e.onboardingStatus), s = i.map(e => (function(e) {
                    let {
                        organizationInfo: t,
                        isOnlyEntry: i
                    } = e;
                    return (0, a.jsx)(c, {
                        url: (0, n(269577).re)({
                            organizationId: t.id,
                            tabRoute: n(970046).Vo
                        }),
                        label: i ? (0, a.jsx)(n(109939).sA, {
                            id: "sidebarSwitcherMultiAccount.menuItem.organization.generic",
                            defaultMessage: "Manage organization"
                        }) : (0, a.jsx)(n(109939).sA, {
                            id: "sidebarSwitcherMultiAccount.menuItem.organization.name",
                            defaultMessage: "Manage {organizationName}",
                            values: {
                                organizationName: t.name
                            }
                        })
                    })
                })({
                    organizationInfo: e,
                    isOnlyEntry: 1 === i.length && 0 === t.length
                })), o = [...t.map(e => (function(e) {
                    let {
                        spaceInfo: t,
                        isOnlyEntry: i
                    } = e;
                    return (0, a.jsx)(c, {
                        onFireAnalyticsEvent: () => {
                            (0, n(104310).u)({
                                event: {
                                    eventName: "org_console_onboarding_navigate",
                                    eventProperties: {
                                        spaceId: t.spaceId,
                                        route: n(970046)._P.name,
                                        from: "workspace-switcher"
                                    }
                                }
                            })
                        },
                        url: (0, n(269577).re)({
                            organizationId: n(269577).Zf,
                            tabRoute: n(970046)._P,
                            queryParams: {
                                [n(250616).g]: t.spaceId
                            }
                        }),
                        label: i ? (0, a.jsx)(n(109939).sA, {
                            id: "sidebarSwitcherMultiAccount.menuItem.organization.setup.generic",
                            defaultMessage: "Set up organization"
                        }) : (0, a.jsx)(n(109939).sA, {
                            id: "sidebarSwitcherMultiAccount.menuItem.organization.setup.name",
                            defaultMessage: "Set up {spaceName}",
                            values: {
                                spaceName: t.spaceName
                            }
                        })
                    })
                })({
                    spaceInfo: e,
                    isOnlyEntry: 1 === t.length && 0 === i.length
                })), ...s];
                return o.length > 0 ? (0, a.jsx)(n(844565).A, {
                    topBorder: !0,
                    children: (0, a.jsx)(r, {
                        allMenuItems: o
                    })
                }) : null
            }

            function r(e) {
                let t = (0, n(682985).uB)(void 0, n(510969).A),
                    {
                        allMenuItems: i
                    } = e;
                if (0 === i.length) return null;
                if (1 === i.length) return i[0];
                let s = i.map((e, t) => ({
                    key: t,
                    render: () => e,
                    action: () => {}
                }));
                return (0, a.jsx)(n(656252).A, {
                    placementToOrigin: "right",
                    popupType: n(656252).z.Popup,
                    buttonPopupStore: t,
                    content: () => {
                        let e = {
                            menuType: n(649476).gu.Popup,
                            width: 250
                        };
                        return (0, a.jsx)(n(747369).A, { ...e,
                            children: (0, a.jsx)(n(558045).A, {
                                type: n(558045).O.Vertical,
                                initialFocus: 0,
                                sections: [{
                                    key: "organizations-management",
                                    items: s
                                }]
                            })
                        })
                    },
                    children: e => (0, a.jsx)(c, {
                        events: e,
                        label: (0, a.jsx)(n(109939).sA, {
                            id: "sidebarSwitcherMultiAccount.menuItem.organization.manage",
                            defaultMessage: "Manage organizations"
                        }),
                        alternateIconFunc: n(588222).arrowChevronSingleRightFillSmallIcon
                    })
                })
            }
            let l = {
                accountAction: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: n(632079).Tj.text.secondary,
                    whiteSpace: "nowrap",
                    fontSize: 12,
                    paddingInlineStart: 0
                },
                iconStyle: {
                    height: 12,
                    width: 12,
                    fill: "current"
                }
            };

            function c(e) {
                let {
                    navigate: t
                } = (0, i.useContext)(n(44894).E), {
                    url: s,
                    label: o,
                    events: r,
                    alternateIconFunc: c,
                    onFireAnalyticsEvent: u
                } = e, d = (0, n(533992).v3)();
                return (0, a.jsx)(n(95582).A, {
                    onClick: s ? () => {
                        u && u(), t({
                            environment: d,
                            openInNew: "tab",
                            makeTabActive: !0,
                            url: s
                        })
                    } : void 0,
                    textWrapperStyle: v.buttonWrapper,
                    focused: !1,
                    title: (0, a.jsxs)("div", {
                        style: l.accountAction,
                        children: [(0, a.jsx)("div", {
                            style: n(699422).RC,
                            children: o
                        }), c ? c(l.iconStyle) : (0, a.jsx)(n(16275).I, {
                            icon: n(759706).arrowDiagonalUpRightSmallIcon,
                            size: "xs"
                        })]
                    }),
                    ...r
                })
            }
            let u = {
                container: {
                    background: n(632079).Tj.background.elevated,
                    height: "100%"
                }
            };

            function d(e) {
                let t, {
                        parent: i,
                        redirectURL: o,
                        disableLoginLink: r,
                        onSpaceClick: l,
                        loginPermissionsStore: c,
                        organizationEntryPointProps: d,
                        permissionsInviteStore: p,
                        shouldShowCreateOrJoinWorkspaceButtonInFooter: b,
                        shouldShowConfigurationOptions: m = !0,
                        shouldShowHeader: f = !0,
                        isEnterpriseWorkspaceAccessRestriction: _,
                        width: h = n(970801).Q,
                        joinableSpacesCount: v,
                        joinableSpaces: x
                    } = e,
                    y = (0, n(533992).v3)(),
                    S = (0, n(533992).Y0)(),
                    A = (0, n(476743).a)(),
                    w = y.currentUser.loggedInUserIds,
                    k = (0, n(682985).K8)(() => (0, n(828560).mO)(), []),
                    j = (0, n(682985).K8)(() => !!A && (0, n(494144).o)(A), [A]),
                    M = m && void 0 !== A && !j && (0, n(828560).RW)(k),
                    T = m || M ? (0, a.jsx)(g, {
                        redirectURL: o,
                        disableLoginLink: r,
                        loginPermissionsStore: c,
                        organizationEntryPointProps: d,
                        shouldShowConfigurationOptions: m,
                        shouldShowCreateOrJoinWorkspaceButtonInFooter: b,
                        shouldHideDownloadAppsSectionInFooter: _,
                        shouldShowSlipperySlopeSection: M,
                        slipperySlopeExperimentGroup: k,
                        spaceViewStore: A
                    }) : void 0;
                t = n(986939).A.isMobile ? {
                    menuType: n(649476).gu.Modal,
                    title: (0, a.jsx)(n(109939).sA, {
                        defaultMessage: "Accounts & Workspaces",
                        id: "sidebarSwitcherMultiAccount.mobileMenu.title"
                    }),
                    right: (0, a.jsx)(n(109939).sA, { ...n(789722).W.done
                    }),
                    onClickRight: i.close,
                    enableMobileRefresh: S.isTablet
                } : {
                    menuType: n(649476).gu.Popup,
                    minWidth: h,
                    maxWidth: h,
                    maxHeight: "min(60vh, 420px)",
                    footer: T
                };
                let [{
                    value: B
                }] = (0, n(97668).Yb)(async () => {
                    let e = await y.api.callApi({
                        eventName: "validateUserCanCreateWorkspace",
                        environment: y,
                        data: {}
                    });
                    return "success" !== e.type || e.data.canUserCreateSpace
                }, [y]), C = (0, n(682985).K8)(() => !!m && !b && !1 != !!B && (!(w.length > 1) || "multi_cta" === s() || "blue_text_and_multi_cta" === s()), [m, w, b, B]);
                return (0, a.jsxs)("div", {
                    style: u.container,
                    children: [!_ && f ? (0, a.jsx)(n(786850).A, {
                        permissionsInviteStore: p,
                        shouldShowHeaderButtons: m
                    }) : void 0, (0, a.jsxs)(n(747369).A, { ...t,
                        children: [w.map((e, t) => (0, a.jsx)(n(714231).ti, {
                            userId: e,
                            isLastUser: t === w.length - 1,
                            shouldShowNewWorkspaceButtonInUserSpaceView: C,
                            joinableSpacesCount: v,
                            joinableSpaces: x,
                            onSpaceClick: async e => {
                                await l(e), (0, n(615079).Bw)(y)
                            },
                            close: I,
                            disableAccountActions: !m,
                            disableDrag: !m
                        }, e)), n(986939).A.isMobile ? T : void 0]
                    })]
                })
            }
            let p = {
                footer: {
                    background: n(986939).A.isMobile ? void 0 : n(632079).Tj.background.elevated,
                    fontWeight: n(699422).Wy.medium
                }
            };

            function g(e) {
                let {
                    redirectURL: t,
                    disableLoginLink: i,
                    organizationEntryPointProps: s,
                    shouldShowConfigurationOptions: r,
                    shouldShowCreateOrJoinWorkspaceButtonInFooter: l,
                    shouldHideDownloadAppsSectionInFooter: c,
                    shouldShowSlipperySlopeSection: u,
                    slipperySlopeExperimentGroup: d,
                    spaceViewStore: g
                } = e, b = (0, n(533992).v3)(), f = (0, n(682985).K8)(() => n(492047).A.hasAtLeastOneTeamPlan(b), [b]), h = (0, a.jsxs)(a.Fragment, {
                    children: [f ? void 0 : (0, a.jsx)(n(664919).W, {
                        createType: "create-work",
                        redirectURL: t,
                        disableLoginLink: i
                    }), (0, n(907620).T)("supportsNativeHome") ? void 0 : (0, a.jsx)(n(664919).W, {
                        createType: "add-account",
                        redirectURL: t,
                        disableLoginLink: i
                    })]
                });
                return (0, a.jsxs)("div", {
                    style: p.footer,
                    children: [r ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o, {
                            organizationsInfo: s.organizationsInfo,
                            spaceInfo: s.spaceInfo
                        }), l ? (0, a.jsx)(_, {}) : void 0, (0, a.jsxs)(n(844565).A, {
                            topBorder: !0,
                            children: [n(483908).T_(b) ? h : void 0, (0, a.jsx)(x, {}), n(986939).A.isMobile || c ? void 0 : (0, a.jsx)(M, {})]
                        })]
                    }) : void 0, u && !n(986939).A.isMobile ? (0, a.jsx)(m, {
                        slipperySlopeExperimentGroup: d,
                        spaceViewStore: g
                    }) : void 0]
                })
            }
            let b = {
                button: {
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 6,
                    padding: 6
                },
                buttonHovered: {
                    background: n(632079).Tj.background.secondaryTranslucent,
                    border: `1px solid ${n(632079).Tj.border.primary}`
                },
                buttonPressed: {
                    background: "transparent"
                },
                switchGap: {
                    marginInlineStart: 20
                },
                title: {
                    minWidth: 0
                }
            };

            function m(e) {
                let {
                    slipperySlopeExperimentGroup: t,
                    spaceViewStore: s
                } = e, o = (0, n(533992).v3)(), r = (0, n(682985).K8)(() => (0, n(828560).XM)(s, t), [s, t]), l = (0, i.useCallback)(() => {
                    void 0 !== s && "not-ready" !== r && (0, n(511358).dS)({
                        environment: o,
                        spaceViewStore: s,
                        currentSlipperySlopeEnabled: r,
                        from: "workspace_switcher",
                        userAction: "SidebarSwitcherMultiAccount.toggleSlipperySlope"
                    })
                }, [o, r, s]);
                return s ? (0, a.jsx)(n(844565).A, {
                    extraPadding: !0,
                    children: (0, a.jsx)(n(296060).A, {
                        focused: !1,
                        on: !0 === r,
                        onClick: l,
                        buttonStyle: b.button,
                        rightStyle: b.switchGap,
                        hoveredStyle: b.buttonHovered,
                        pressedStyle: b.buttonPressed,
                        caption: (0, a.jsx)(n(109939).sA, {
                            id: "spaceBasicSettings.sidebar.slipperySlope.toggle.description",
                            defaultMessage: "Keep your pages, meetings, and AI within reach."
                        }),
                        shouldWrapCaption: !0,
                        shouldWrapTitle: !0,
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "spaceBasicSettings.sidebar.slipperySlope.toggle.title",
                            defaultMessage: "Try the new sidebar"
                        }),
                        badge: (0, a.jsx)(n(340024).W, {}),
                        titleStyle: b.title
                    })
                }) : null
            }
            let f = {
                createWorkspaceButton: {
                    background: n(632079).Tj.background.tertiaryTranslucent,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    lineHeight: 1,
                    display: "flex",
                    margin: "0px 14px 16px"
                }
            };

            function _() {
                let e = (0, n(533992).v3)();
                return (0, a.jsxs)(n(988022).p, {
                    onClick: async () => {
                        let t = window.location.pathname;
                        await n(807717).startOnboarding(e, {
                            type: "create-or-join",
                            redirectUrl: t,
                            source: "public_share_link"
                        })
                    },
                    style: f.createWorkspaceButton,
                    children: [(0, a.jsx)(n(708966).Q, {
                        colorPalette: "gray",
                        colorVariant: "accentPrimary",
                        iconGroup: n(154457).h,
                        variantName: "small"
                    }), (0, a.jsx)(n(109939).sA, {
                        id: "sidebarSwitcherMultiAccount.singleAccountMenu.footer.createOrJoinWorkspace.label",
                        defaultMessage: "Create workspace"
                    })]
                })
            }
            let h = {
                    accountAction: {
                        display: "flex",
                        color: n(632079).Tj.text.secondary,
                        whiteSpace: "nowrap",
                        fontSize: n(986939).A.isMobile ? 16 : 12,
                        paddingInlineStart: 0
                    },
                    description: {
                        textAlign: "center"
                    },
                    style0: {
                        fontWeight: n(699422).Wy.medium,
                        fontSize: 18
                    }
                },
                v = {
                    buttonWrapper: {
                        marginInlineStart: 12 * !!n(986939).A.isMobile
                    }
                };

            function x() {
                let e = (0, n(682985).O$)(n(205885).e),
                    t = (0, n(533992).v3)(),
                    s = t.currentUser.loggedInUserIds.length > 1,
                    o = (0, i.useCallback)(async () => {
                        let {
                            online: e
                        } = n(205885).A.state, i = (0, a.jsxs)(n(4458).VP, {
                            gap: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            children: [(0, a.jsx)(n(16275).I, {
                                icon: n(742864).personCropCircleBadgeExclamationPointFillIcon,
                                size: "lg",
                                colorVariant: "primary"
                            }), (0, a.jsx)(n(109939).sA, {
                                id: "sidebarSwitcherMultiAccount.menuItem.logoutAllButton.confirmationMessage",
                                defaultMessage: "{isLoggedIntoMultipleAccounts, select, true {<bold>Log out of all your accounts?</bold>} other {<bold>Log out of your account?</bold>}}",
                                values: {
                                    isLoggedIntoMultipleAccounts: s,
                                    bold: e => (0, a.jsx)("span", {
                                        style: h.style0,
                                        children: e
                                    })
                                }
                            })]
                        }), o = (0, a.jsx)(n(109939).sA, {
                            id: "sidebarSwitcherMultiAccount.menuItem.logoutAllButton.acceptLabel",
                            defaultMessage: "{isLoggedIntoMultipleAccounts, select, true {Log out all accounts} other {Log out}}",
                            values: {
                                isLoggedIntoMultipleAccounts: s
                            }
                        }), r = (0, a.jsx)(n(109939).sA, {
                            id: "sidebarSwitcherMultiAccount.menuItem.logoutAllButton.cancelLabel",
                            defaultMessage: "Cancel"
                        }), l = (0, a.jsx)("div", {
                            style: h.description,
                            children: (0, a.jsx)(n(109939).sA, {
                                id: "sidebarSwitcherMultiAccount.menuItem.logoutAllButton.description",
                                defaultMessage: "You will need to log back in to access your Notion workspaces."
                            })
                        }), {
                            accept: c
                        } = await n(647095).Gh({
                            message: i,
                            acceptLabel: o,
                            cancelLabel: r,
                            description: l
                        });
                        c && e && (n(2907).V.setState({ ...n(2907).V.state,
                            open: !1
                        }), (0, n(615079).Pz)(t), n(724942).ri(t))
                    }, [t, s]);
                return (0, a.jsx)(n(95582).A, {
                    onClick: o,
                    focused: !1,
                    disabled: !e,
                    textWrapperStyle: v.buttonWrapper,
                    title: (0, a.jsx)("div", {
                        style: h.accountAction,
                        children: (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "{isLoggedIntoMultipleAccounts, select, true {Log out all accounts} other {Log out}}",
                            id: "sidebarSwitcherMultiAccount.menuItem.logoutAllButton.label",
                            values: {
                                isLoggedIntoMultipleAccounts: s
                            }
                        })
                    })
                })
            }
            let y = {
                title: {
                    color: n(632079).Tj.text.secondary,
                    fontSize: 12
                }
            };

            function S() {
                return (0, n(83208).X)("space_switcher_smart_desktop_button") ? (0, a.jsx)(w, {}) : (0, a.jsx)(A, {})
            }

            function A() {
                let {
                    navigate: e
                } = (0, i.useContext)(n(44894).E), t = (0, n(533992).Y0)(), s = (0, n(533992).v3)(), o = (0, n(542061).E)(), r = (0, i.useCallback)(() => {
                    o.current && (e({
                        environment: s,
                        url: o.current,
                        openInNew: "tab"
                    }), I())
                }, [s, o, e]);
                return (0, a.jsx)(n(95582).A, {
                    external: !0,
                    onClick: r,
                    textWrapperStyle: v.buttonWrapper,
                    focused: !1,
                    title: (0, a.jsx)("div", {
                        style: y.title,
                        children: t.isWindows ? (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Get Windows app",
                            id: "sidebarMultiSwitcher.windowsAppButton.text"
                        }) : (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Get Mac app",
                            id: "sidebarMultiSwitcher.macAppButton.text"
                        })
                    })
                })
            }

            function w() {
                let {
                    navigate: e
                } = (0, i.useContext)(n(44894).E), t = (0, n(533992).Y0)(), s = (0, n(533992).v3)(), o = (0, n(542061).E)(), [r, l] = (0, i.useState)(!1), c = (0, i.useRef)(!1);
                (0, i.useEffect)(() => {
                    c.current || ((0, n(126592).e)(s).then(e => {
                        l(e)
                    }), c.current = !0)
                }, [s]);
                let u = (0, i.useCallback)(() => {
                    if (r) {
                        (0, n(151760).R)({
                            environment: s,
                            from: "appSwitcher",
                            isRegistered: !0
                        }), I();
                        return
                    }
                    o.current && (e({
                        environment: s,
                        url: o.current,
                        openInNew: "tab"
                    }), I())
                }, [s, o, r, e]);
                return (0, a.jsx)(n(95582).A, {
                    external: !r,
                    onClick: u,
                    textWrapperStyle: v.buttonWrapper,
                    focused: !1,
                    title: (0, a.jsx)("div", {
                        style: y.title,
                        children: t.isWindows ? r ? (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Open in Windows app",
                            id: "sidebarMultiSwitcher.openWindowsAppButton.text"
                        }) : (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Get Windows app",
                            id: "sidebarMultiSwitcher.windowsAppButton.text"
                        }) : r ? (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Open in Mac app",
                            id: "sidebarMultiSwitcher.openMacAppButton.text"
                        }) : (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Get Mac app",
                            id: "sidebarMultiSwitcher.macAppButton.text"
                        })
                    })
                })
            }
            let k = {
                title: {
                    color: n(632079).Tj.text.secondary,
                    fontSize: 12
                }
            };

            function j() {
                return (0, a.jsx)(n(95582).A, {
                    external: !0,
                    href: "https://www.notion.com/mobile",
                    onClick: I,
                    textWrapperStyle: v.buttonWrapper,
                    focused: !1,
                    title: (0, a.jsx)("div", {
                        style: k.title,
                        children: (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Get iOS & Android app",
                            id: "sidebarMultiSwitcher.desktopAppGetMobileApp.prompt"
                        })
                    })
                })
            }

            function M() {
                let e = (0, n(533992).Y0)(),
                    t = e.isElectron,
                    i = (0, n(83208).X)("space_switcher_smart_desktop_button"),
                    s = "on" === (0, n(604306).r)("space_switcher_mobile_apps_link");
                if (!i) return t ? (0, a.jsx)(j, {}) : s ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(S, {}), (0, a.jsx)(j, {})]
                }) : (0, a.jsx)(S, {});
                let o = e.isLinux || e.isChromebook;
                return t || o ? s || t ? (0, a.jsx)(j, {}) : null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(S, {}), s ? (0, a.jsx)(j, {}) : void 0]
                })
            }

            function I() {
                n(2907).V.setState({ ...n(2907).V.state,
                    open: !1
                })
            }

            function T(e) {
                let {
                    userId: t,
                    environment: i,
                    prependSpaceViewStores: s,
                    appendSpaceViewStores: a
                } = e;
                return function(e) {
                    let o = [...s ? s.map(e => e.pointer) : [], ...e.filter(e => "create-workspace-row" !== e && "guest-workspaces" !== e).map(n(694402).gK).map(e => n(496282).L3.fromSpaceShardRecordId(e, n(832375).mu7)), ...a ? a.map(e => e.pointer) : []],
                        r = new(n(736309)).d(i, {
                            table: n(832375).GDR,
                            id: t
                        }, {
                            userId: t
                        });
                    (0, n(377796).createAndCommit)({
                        userAction: "SidebarSwitcherMultiAccount.handleDraggableListDrop",
                        environment: i,
                        cellTarget: "main",
                        canUndo: !0,
                        perform: e => {
                            (0, n(78e3).M)({
                                userRootStore: r,
                                transaction: e,
                                spaceViewIds: o.map(e => e.id),
                                spaceViewPointers: o
                            })
                        },
                        userId: t
                    }), (0, n(987674).p)(i, {
                        workspace_count: e.length
                    })
                }
            }

            function B(e, t) {
                let {
                    online: i
                } = n(205885).A.state;
                return !i && e.currentUser.id !== t
            }
        },
        659262: (e, t, n) => {
            n.d(t, {
                L: () => s,
                y: () => a
            });
            let i = Number(n(627179).Xb);

            function s() {
                var e, t;
                if (n(205885).A.state.online) {
                    if (null != (e = n(420153).A.state.connectionError) && e.startTime && Date.now() - (null == (t = n(420153).A.state.connectionError) ? void 0 : t.startTime) < i) return;
                    return n(420153).A.state.connectionError
                }
            }

            function a() {
                return !!s()
            }
        },
        662886: (e, t, n) => {
            n.d(t, {
                K: () => o
            }), n(296540);
            var i = n(474848);
            let s = (0, n(109939).YK)({
                    menu: {
                        defaultMessage: "Menu",
                        id: "topbar.appMenuButton.title"
                    }
                }),
                a = {
                    style0: {
                        position: "absolute",
                        top: "10px",
                        insetInlineStart: "14px",
                        width: 24,
                        height: 24,
                        zIndex: 1e5,
                        ...(0, n(1249).g)({
                            noDrag: !0
                        })
                    }
                };

            function o() {
                let e = (0, n(109939).tz)();
                return (0, n(682985).O$)(n(584257).b) ? null : (0, i.jsx)(n(374533).A, {
                    style: a.style0,
                    colorVariant: "primary",
                    onClick: () => {
                        var e;
                        null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (e = n(775657).electronApi.openAppMenu) || e.call(n(775657).electronApi)
                    },
                    icon: n(898378).notionTintableIcon,
                    ariaLabel: e.formatMessage(s.menu)
                })
            }
        },
        664919: (e, t, n) => {
            n.d(t, {
                W: () => s
            }), n(16280), n(296540);
            var i = n(474848);

            function s({
                createType: e,
                icon: t,
                disableLoginLink: r,
                redirectURL: l
            }) {
                return n(986939).A.isMobile ? (0, i.jsx)(o, {
                    createType: e,
                    icon: t,
                    disableLoginLink: r,
                    redirectURL: l
                }) : (0, i.jsx)(a, {
                    createType: e,
                    icon: t,
                    disableLoginLink: r,
                    redirectURL: l
                })
            }

            function a({
                createType: e,
                icon: t,
                disableLoginLink: s,
                redirectURL: o
            }) {
                let r = (0, n(533992).v3)(),
                    u = (0, n(109939).tz)(),
                    d = (0, n(682985).uB)(void 0, n(436614).A),
                    p = (0, n(682985).O$)(n(205885).e);
                return (0, i.jsxs)("div", {
                    onClick: () => {
                        p && ((0, n(615079).ff)(r, {
                            createType: e
                        }), n(492047).A.setState({ ...n(492047).A.getState(),
                            createType: e
                        }), d.setState({
                            open: !0
                        }))
                    },
                    children: [(0, i.jsx)(n(95582).A, {
                        textWrapperStyle: n(657070).footerStyles.buttonWrapper,
                        focused: !1,
                        disabled: !p,
                        title: (0, i.jsx)(l, {
                            createType: e
                        }),
                        icon: t
                    }), (0, i.jsx)(c, {
                        intl: u,
                        disableLoginLink: s,
                        redirectURL: o,
                        loginModalStore: d,
                        createType: e
                    })]
                })
            }

            function o({
                createType: e,
                icon: t,
                disableLoginLink: s,
                redirectURL: a
            }) {
                let r = (0, n(533992).v3)(),
                    c = (0, n(682985).uB)(void 0, n(436614).A);
                (0, n(383953).l)(() => {
                    "email" === n(83879).b.state.loginType && n(83879).b.setState({ ...n(83879).b.state,
                        loginType: "google"
                    })
                });
                let u = (0, n(682985).O$)(n(205885).e),
                    d = (0, n(682985).K8)(() => {
                        var e;
                        return null == (e = r.mobileNative) ? void 0 : e.supportsNativeHomeOnPhone()
                    }, [r]);
                return (0, i.jsx)(n(656252).A, {
                    popupType: n(656252).z.BottomSheet,
                    hidesMobileNativeBottomBar: d,
                    preventSlideUpTransition: d,
                    buttonPopupStore: "add-account" === e ? n(754669).c : n(754669).y,
                    alignmentToOrigin: "start",
                    placementToOrigin: "top",
                    originGap: 0,
                    isFullWidthOnMobile: !0,
                    onClose: () => {
                        n(83879).b.reset(), d && (0, n(922425).navigateToHomeTab)(r)
                    },
                    content: () => (c.setState({
                        open: !0
                    }), (0, i.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Modal,
                        hideMobileTopbar: !0,
                        children: (0, i.jsx)(n(4458).fI, {
                            justifyContent: "center",
                            marginTop: 20,
                            children: (0, i.jsx)(n(887483).f, {
                                emailLabelType: "add-account" === e ? "work_email" : "email",
                                isSignup: "create-work" === e,
                                isAddAnotherAccount: !0,
                                redirectURL: a,
                                centerTitleText: !0,
                                disableDisclaimer: !0,
                                isCreateAWorkAccount: "create-work" === e
                            })
                        })
                    })),
                    preventScaleTransition: !0,
                    children: s => (0, i.jsx)(n(95582).A, {
                        textWrapperStyle: n(657070).footerStyles.buttonWrapper,
                        focused: !1,
                        disabled: !u,
                        title: (0, i.jsx)(l, {
                            createType: e
                        }),
                        icon: t,
                        ...s
                    })
                })
            }
            let r = {
                accountAction: {
                    display: "flex",
                    color: n(632079).Tj.text.secondary,
                    whiteSpace: "nowrap",
                    fontSize: n(986939).A.isMobile ? 16 : 12
                }
            };

            function l({
                createType: e
            }) {
                let t;
                switch (e) {
                    case "create-work":
                        t = (0, i.jsx)(n(109939).sA, {
                            defaultMessage: "Create work account",
                            id: "sidebarSwitcherMultiAccount.menuItem.createWorkAccountButton.label"
                        });
                        break;
                    case "add-account":
                        t = (0, i.jsx)(n(109939).sA, {
                            defaultMessage: "Add another account",
                            id: "sidebarSwitcherMultiAccount.addAccountButton.label"
                        })
                }
                return t ? (0, i.jsx)("div", {
                    style: r.accountAction,
                    children: t
                }) : null
            }

            function c({
                createType: e,
                onDismiss: t,
                intl: s,
                disableLoginLink: a,
                redirectURL: o,
                loginModalStore: r
            }) {
                let l, u, d = (0, n(682985).uB)(r, n(436614).A);
                switch (e) {
                    case "add-account":
                        l = (0, i.jsx)(n(109939).sA, {
                            id: "sidebarSwitcherMultiAccount.addAccount.title",
                            defaultMessage: "Add an account"
                        }), u = (0, i.jsx)(n(109939).sA, {
                            id: "sidebarSwitcherMultiAccount.addAccount.description",
                            defaultMessage: "Use an existing account, or sign up with a new email. Your current account will remain logged in."
                        });
                        break;
                    case "create-work":
                        l = (0, i.jsx)(n(109939).sA, {
                            id: "sidebarSwitcherMultiAccount.createWork.title",
                            defaultMessage: "Create a work account"
                        }), u = (0, i.jsx)(n(109939).sA, {
                            id: "sidebarSwitcherMultiAccount.createWork.description",
                            defaultMessage: "We’ll check if your teammates are already on Notion. If not, we’ll create a new home for you and your team."
                        });
                        break;
                    default:
                        throw Error(s.formatMessage({
                            defaultMessage: "Unexpected createType in SidebarSwitcherMultiAccount",
                            id: "sidebarSwitcherMultiAccount.errorMessage"
                        }))
                }
                return (0, i.jsx)(n(813515).z, {
                    loginModalStore: d,
                    title: l,
                    description: u,
                    disableLoginLink: a,
                    className: n(828432).w7$,
                    redirectURL: o,
                    onDismiss: t
                })
            }
        },
        665002: (e, t, n) => {
            n.d(t, {
                H: () => l,
                g: () => c
            });
            var i = n(296540),
                s = n(474848);
            let a = {
                    disableHoverAnimations: !1
                },
                o = {
                    disableHoverAnimations: !0
                },
                r = (0, i.createContext)(a);

            function l({
                disableHoverAnimations: e,
                children: t
            }) {
                return (0, s.jsx)(r.Provider, {
                    value: e ? o : a,
                    children: t
                })
            }

            function c() {
                return (0, i.useContext)(r).disableHoverAnimations
            }
            r.displayName = "SidebarItemHoverAnimationContext"
        },
        678064: (e, t, n) => {
            n.d(t, {
                A: () => s
            }), n(581454), n(296540);
            var i = n(474848);
            let s = function({
                    currentLocale: e,
                    confirm: t,
                    onChange: s,
                    origin: a,
                    showGlobeIcon: r,
                    showVisibleLabelPrefix: l = !1
                }) {
                    (0, n(533992).v3)();
                    let c = (0, n(109939).tz)(),
                        u = (0, n(682985).uB)(void 0, n(510969).A),
                        d = (0, n(83208).X)("polyglot");
                    if (n(986939).A.isMobile) return null;
                    let p = (0, n(601587).Vn)(c)[e].languageNameInThatLanguage,
                        g = r ? n(988022).p : n(548436).A;
                    return (0, i.jsx)(n(656252).A, {
                        onClick: () => {
                            (0, n(104310).u)({
                                event: {
                                    eventName: "change_locale_clicked",
                                    eventProperties: {
                                        origin: a
                                    }
                                }
                            })
                        },
                        ariaPopupType: "listbox",
                        popupType: n(656252).z.Popup,
                        buttonPopupStore: u,
                        ariaLabel: c.formatMessage({
                            id: "languagePicker.popup.ariaLabel",
                            defaultMessage: "Select language"
                        }),
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        content: a => {
                            let r = d ? [...n(619157).fy, ...n(619157).Tf] : [...n(619157).fy],
                                l = [{
                                    key: "languages",
                                    render: e => (0, i.jsx)(n(844565).A, { ...e,
                                        topBorder: 0 !== e.index
                                    }),
                                    items: (0, n(601587).O8)(r, c).map(r => ({
                                        key: r,
                                        render: e => (function(e, t, s, a) {
                                            let {
                                                languageNameInThatLanguage: r,
                                                languageNameInCurrentLanguage: l
                                            } = (0, n(601587).Vn)(a)[e];
                                            return (0, i.jsx)(o, {
                                                label: r,
                                                caption: l,
                                                focused: t,
                                                props: s,
                                                locale: e
                                            })
                                        })(r, e.focused, e, c),
                                        action: () => {
                                            var o, l, u, d, p;
                                            o = r, l = e, u = c, d = t, p = s, l !== o && function(e, t, s, a) {
                                                let {
                                                    languageNameInThatLanguage: o
                                                } = (0, n(601587).Vn)(t)[e];
                                                s ? n(647095).ui({
                                                    showCancel: !0,
                                                    keepFocus: !1,
                                                    message: (0, i.jsx)(n(109939).sA, {
                                                        id: "languagePicker.changeLanguage.confirmationMessage",
                                                        defaultMessage: "Are you sure you want to update the language to {language}?",
                                                        values: {
                                                            language: o
                                                        }
                                                    }),
                                                    items: [{
                                                        label: (0, i.jsx)(n(109939).sA, {
                                                            id: "languagePicker.changeLanguage.updateButton.label",
                                                            defaultMessage: "Update"
                                                        }),
                                                        color: "red",
                                                        onAccept: () => {
                                                            a(e)
                                                        }
                                                    }]
                                                }) : a(e)
                                            }(o, u, d, p), a.close()
                                        }
                                    }))
                                }],
                                u = {
                                    menuType: n(649476).gu.Popup,
                                    width: 240
                                };
                            return (0, i.jsx)(n(747369).A, {
                                className: n(828432).jtA,
                                ...u,
                                children: (0, i.jsx)(n(558045).A, {
                                    type: n(558045).O.Vertical,
                                    role: "listbox",
                                    initialFocus: void 0,
                                    sections: l
                                })
                            })
                        },
                        children: e => (0, i.jsx)(g, {
                            "aria-label": c.formatMessage({
                                id: "languagePicker.ariaLabel",
                                defaultMessage: "Language: {language}"
                            }, {
                                language: p
                            }),
                            colorPalette: r ? "gray" : void 0,
                            iconLeading: r ? n(515388).globeIcon : void 0,
                            iconTrailing: {
                                icon: n(595453).arrowChevronSingleDownSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            },
                            ...e,
                            children: l ? (0, i.jsx)(n(109939).sA, {
                                id: "languagePicker.visibleLabel",
                                defaultMessage: "Language: {language}",
                                values: {
                                    language: p
                                }
                            }) : p
                        })
                    })
                },
                a = {
                    style1: {
                        marginInlineEnd: 0
                    },
                    style2: {
                        color: n(632079).Tj.text.secondary
                    }
                };

            function o(e) {
                return (0, i.jsx)(n(95582).A, { ...e.props,
                    title: (0, i.jsx)(n(4458).fI, {
                        alignItems: "center",
                        children: (0, i.jsx)("div", {
                            style: { ...e.style,
                                ...a.style1
                            },
                            children: e.label
                        })
                    }),
                    caption: e.caption && (0, i.jsx)("span", {
                        style: a.style2,
                        children: e.caption
                    }),
                    shouldWrapCaption: !0
                })
            }
        },
        705820: (e, t, n) => {
            n.d(t, {
                P: () => i
            });
            let i = new(n(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                if (!n(218744).default.checkGate({
                        gateName: "eligible_interval_select_campaigns_fetch"
                    })) return;
                let i = new(n(695906)).SpaceStore(e, {
                    id: t,
                    table: "space"
                });
                if (await i.load(), !i.canAdmin()) return;
                let s = await e.api.callCellCompatibleApi({
                    eventName: "getEligibleIntervalSelectCampaigns",
                    environment: e,
                    data: {
                        spaceId: t
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: t
                    }
                });
                if ("success" === s.type) return s.data.campaigns
            });
            n(202146).exposeDebugValue("EligibleIntervalSelectCampaignsStore", i)
        },
        742864: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => s,
                personCropCircleBadgeExclamationPointFillIcon: () => a
            }), n(296540);
            var i = n(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.5 2.37 17.12 17.13",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 5.992 7.45c.151-.456.233-.944.233-1.45a4.58 4.58 0 0 0-.966-2.82A4.8 4.8 0 0 1 10 12.561c1.754 0 3.298.934 4.087 2.332A6.375 6.375 0 1 0 3.78 11.406q-.643.032-1.23.227A7.7 7.7 0 0 1 2.375 10"
                        }), (0, i.jsx)("path", {
                            d: "M4 12.5a3.5 3.5 0 0 0-1.137.189A3.502 3.502 0 0 0 4 19.5a3.5 3.5 0 1 0 0-7m.031.906c.345 0 .625.28.625.625v2a.625.625 0 1 1-1.25 0v-2c0-.345.28-.625.625-.625m-.625 4.471a.625.625 0 1 1 1.25-.004.625.625 0 0 1-1.25.004M10 5.125c-.95 0-1.723.393-2.245 1.044-.51.635-.75 1.474-.75 2.346s.24 1.71.75 2.346c.522.65 1.295 1.044 2.245 1.044s1.723-.394 2.245-1.044c.51-.635.75-1.474.75-2.346s-.24-1.711-.75-2.346c-.522-.65-1.294-1.044-2.245-1.044"
                        })]
                    })
                },
                a = (0, n(104509).wt)("personCropCircleBadgeExclamationPointFill", s, "fill")
        },
        754669: (e, t, n) => {
            n.d(t, {
                c: () => s,
                y: () => i
            });
            let i = new(n(510969)).A,
                s = new(n(510969)).A
        },
        786850: (e, t, n) => {
            n.d(t, {
                A: () => c,
                O: () => o
            });
            var i = n(296540),
                s = n(474848);
            let a = {
                title: {
                    fontWeight: n(699422).Wy.medium
                },
                labels: {
                    display: "flex",
                    flexDirection: "column",
                    ...n(699422).RC
                }
            };

            function o(e) {
                let {
                    spaceStore: t
                } = e, i = (0, n(533992).v3)(), o = (0, n(109939).tz)(), {
                    spaceName: r,
                    spaceIcon: l,
                    spaceSubtitle: c
                } = (0, n(682985).K8)(() => {
                    if (!t) return {};
                    let e = (0, n(916804).I)(t),
                        s = o.formatMessage({
                            id: "sidebarSwitcherMultiAccount.guestWorkspaceSubtitle",
                            defaultMessage: "Guest"
                        });
                    return {
                        spaceName: (0, n(742197).G)(i, t),
                        spaceIcon: t.getIcon(),
                        spaceSubtitle: e ? s : (0, n(714231).rY)({
                            environment: i,
                            intl: o,
                            spaceStore: t
                        }).subtitle
                    }
                }, [i, o, t]);
                return (0, s.jsxs)(n(4458).fI, {
                    gap: 10,
                    alignItems: "center",
                    children: [(0, s.jsx)(n(569553).B6, {
                        isLarge: !0,
                        largeIcon: !0,
                        disabled: !0,
                        icon: l,
                        isEmptyPage: !1,
                        title: r,
                        size: 36,
                        iconRecordCategory: "workspace"
                    }), (0, s.jsxs)("div", {
                        style: a.labels,
                        children: [(0, s.jsx)(n(324489).V, {
                            style: a.title,
                            className: "notranslate",
                            children: r
                        }), (0, s.jsx)(n(324489).V, {
                            isSmall: !0,
                            children: c
                        })]
                    })]
                })
            }
            let r = {
                fontSize: 12
            };

            function l({
                permissionsInviteStore: e
            }) {
                let t = (0, n(345776).T)(),
                    {
                        sidebarSpaceStore: a,
                        currentUserStore: o
                    } = (0, n(682985).K8)(() => ({
                        sidebarSpaceStore: n(728372).AppStoreSidebarSpaceStore.state,
                        currentUserStore: n(728372).AppStoreCurrentUserStore.state
                    }), []),
                    c = (0, n(611285).P)({
                        name: "members",
                        spaceId: null == a ? void 0 : a.id,
                        userId: t,
                        amount: 1
                    }),
                    u = (0, n(682985).K8)(() => !a || (0, n(916804).I)(a) ? "none" : c ? a.canEditMembership() ? "invite_members" : a.getDisableMembershipRequests() ? "settings_members" : "request_members" : "settings_members", [a, c]),
                    d = (0, n(682985).K8)(() => (0, n(355551).b)(), []),
                    p = (0, i.useCallback)(() => {
                        n(599754).Ow({
                            openedFrom: "space_switcher",
                            currentPage: "user_settings"
                        }), n(2907).V.reset()
                    }, []),
                    {
                        shouldShow: g,
                        campaign: b
                    } = (0, n(812971).j)(),
                    m = (0, i.useCallback)(() => {
                        if ("none" !== u) {
                            if ("invite_members" === u) {
                                let t;
                                g && b ? (t = "updated_expansion_offer", (0, n(336960).d)({
                                    campaign: b
                                })) : e.setState({ ...e.state,
                                    modalOpen: !0
                                }), n(179701).vX({
                                    type: "invite",
                                    from: "space_switcher",
                                    variant: t
                                })
                            } else "request_members" === u && (n(310961).A.setState({
                                open: !0,
                                focus: "none"
                            }), n(179701).vX({
                                type: "request",
                                from: "space_switcher"
                            }));
                            n(2907).V.reset()
                        }
                    }, [u, e, g, b]),
                    f = (0, i.useCallback)(() => {
                        n(599754).Ow({
                            openedFrom: "space_switcher",
                            currentPage: "members"
                        }), n(2907).V.reset()
                    }, []);
                return a ? (0, s.jsxs)(n(4458).fI, {
                    gap: 8,
                    inline: !0,
                    children: [o ? (0, s.jsx)(n(548436).r, {
                        size: "md",
                        colorVariant: "secondary",
                        onClick: p,
                        iconLeading: {
                            icon: n(829968).gearIcon,
                            size: "sm"
                        },
                        style: r,
                        children: (0, s.jsx)(n(109939).sA, {
                            defaultMessage: "Settings",
                            id: "sidebarSwitcherMultiAccount.menuItem.settingsButton.label"
                        })
                    }) : void 0, "invite_members" === u || "request_members" === u ? (0, s.jsx)(n(548436).r, {
                        size: "md",
                        colorVariant: "secondary",
                        iconLeading: {
                            icon: n(564706).inviteMemberSmallIcon,
                            size: "xs"
                        },
                        style: r,
                        onClick: m,
                        children: (0, s.jsx)(n(109939).sA, {
                            defaultMessage: "Invite members",
                            id: "sidebarSwitcherMultiAccount.menuItem.inviteButton.label"
                        })
                    }) : "settings_members" === u ? (0, s.jsx)(n(548436).r, {
                        size: "md",
                        colorVariant: "secondary",
                        iconLeading: {
                            icon: n(279351).personCircleFillSmallIcon,
                            size: "sm"
                        },
                        style: r,
                        onClick: f,
                        children: d ? (0, s.jsx)(n(109939).sA, {
                            defaultMessage: "People",
                            id: "sidebarSwitcherMultiAccount.menuItem.peopleButton.label"
                        }) : (0, s.jsx)(n(109939).sA, {
                            defaultMessage: "Members",
                            id: "sidebarSwitcherMultiAccount.menuItem.membersButton.label"
                        })
                    }) : null]
                }) : null
            }
            let c = i.memo(function({
                permissionsInviteStore: e,
                shouldShowHeaderButtons: t
            }) {
                let i = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore),
                    a = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore),
                    r = (0, n(960253).e)(),
                    c = (0, n(960253).I)(() => ({
                        container: {
                            padding: 12,
                            background: "dark" === r ? n(632079).Tj.palette.gray[200] : n(632079).Tj.white,
                            display: "flex",
                            flexDirection: "column",
                            gap: 12
                        }
                    }), [r]);
                return !i || n(986939).A.isMobile ? null : (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        style: c.container,
                        children: [(0, s.jsx)(o, {
                            spaceStore: i,
                            spaceViewStore: a
                        }), t ? (0, s.jsx)(l, {
                            permissionsInviteStore: e
                        }) : void 0]
                    }), (0, s.jsx)(n(346268).c, {
                        size: 1
                    })]
                })
            })
        },
        787786: (e, t, n) => {
            n.d(t, {
                p: () => i
            });

            function i(e) {
                let {
                    from: t
                } = e;
                (0, n(104310).u)({
                    event: {
                        eventName: "download_desktop_app_from_notion",
                        eventProperties: {
                            from: t
                        }
                    }
                })
            }
        },
        799472: (e, t, n) => {
            n.d(t, {
                u: () => i
            });
            let i = (0, n(104509).xh)("questionMarkCircle", {
                default: {
                    loader: () => n.e(82106).then(n.bind(n, 80094))
                },
                small: {
                    loader: () => n.e(82106).then(n.bind(n, 211052))
                },
                fill: {
                    loader: () => n.e(82106).then(n.bind(n, 769980))
                },
                fillSmall: {
                    loader: () => n.e(82106).then(n.bind(n, 479491))
                }
            }, ["question", "query", "inquiry", "uncertain", "unknown", "help", "circle"])
        },
        801510: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = n(296540),
                s = n(474848);
            let a = {
                    marginInlineEnd: 4,
                    marginInlineStart: "auto"
                },
                o = {
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center"
                },
                r = i.memo(i.forwardRef(function(e, t) {
                    let {
                        id: i,
                        children: r,
                        disabledFeedback: l,
                        isFullWidth: c,
                        isLoading: u,
                        onClick: d,
                        style: p,
                        variant: g,
                        disabled: b,
                        ...m
                    } = e, f = (0, n(960253).e)(), _ = {
                        display: "inline-grid",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "nowrap",
                        height: 36,
                        borderRadius: 4,
                        fontSize: 14,
                        lineHeight: 1,
                        paddingInlineStart: 12,
                        paddingInlineEnd: 12,
                        fontWeight: n(699422).Wy.medium,
                        ...u && {
                            gridTemplateColumns: "1fr auto 1fr"
                        },
                        transition: "background-color color 150ms ease"
                    };
                    return (0, s.jsxs)(n(64960).Ay, {
                        ref: t,
                        id: i,
                        onClick: d,
                        style: { ..._,
                            ... function(e) {
                                switch (e) {
                                    case "primary":
                                        return {
                                            background: n(632079).oZ.frontBlueButtonBackground,
                                            boxShadow: n(632079).Tj.buttonBoxShadow,
                                            color: "white"
                                        };
                                    case "secondary":
                                        return {
                                            background: n(632079).oZ.frontSecondaryButtonBackground,
                                            boxShadow: "0 1px 2px rgba(15, 15, 15, 0.1), inset 0 0 0 1px rgba(235, 87, 87, 0.3)",
                                            color: n(632079).oZ.red
                                        };
                                    case "tertiary":
                                    case "aiTertiary":
                                        return {
                                            background: n(632079).oZ.white,
                                            color: n(632079).oZ.frontTextDark,
                                            border: "1px solid rgba(15, 15, 15, 0.15)",
                                            width: "100%",
                                            boxShadow: "0 1px 2px rgba(15, 15, 15, 0.05)"
                                        };
                                    case "quaternary":
                                        return {
                                            background: n(632079).oZ.frontQuaternaryButtonBackground,
                                            border: `1px solid ${n(632079).oZ.frontQuaternaryButtonBorder}`,
                                            boxShadow: "0 1px 2px rgba(15, 15, 15, 0.1)",
                                            color: "white"
                                        };
                                    case "aiPrimary":
                                        return {
                                            background: "#CA59FF",
                                            color: "white"
                                        };
                                    case "lightGray":
                                        return {
                                            background: n(632079).Tj.background.tertiaryTranslucent,
                                            color: n(632079).Tj.text.secondary
                                        };
                                    default:
                                        (0, n(722371).HB)(e)
                                }
                            }(g),
                            ...p,
                            ...c && {
                                width: "100%",
                                justifyContent: "center"
                            }
                        },
                        hoveredStyle: function(e, t) {
                            switch (e) {
                                case "primary":
                                    return {
                                        background: n(632079).oZ.frontBlueButtonHoveredBackground
                                    };
                                case "secondary":
                                    return {
                                        background: n(632079).oZ.frontSecondaryButtonBackgroundHovered
                                    };
                                case "tertiary":
                                    return {
                                        background: "light" === t ? n(632079).Tj.buttonHoveredBackground : "rgba(255, 255, 255, 0.8)"
                                    };
                                case "quaternary":
                                    return {
                                        background: n(632079).oZ.frontQuaternaryButtonBackgroundHovered
                                    };
                                case "aiPrimary":
                                case "aiTertiary":
                                    return {
                                        background: "#C592DD"
                                    };
                                case "lightGray":
                                    return {
                                        background: n(632079).Tj.background.tertiaryTranslucent,
                                        color: n(632079).Tj.text.primary
                                    };
                                default:
                                    (0, n(722371).HB)(e)
                            }
                        }(g, f),
                        pressedStyle: function(e, t) {
                            switch (e) {
                                case "primary":
                                    return {
                                        background: n(632079).oZ.frontBlueButtonPressedBackground
                                    };
                                case "secondary":
                                    return {
                                        background: n(632079).Tj.buttonPressedBackground
                                    };
                                case "tertiary":
                                    return {
                                        background: "light" === t ? n(632079).Tj.buttonPressedBackground : "rgba(255, 255, 255, 0.85)"
                                    };
                                case "quaternary":
                                    return {
                                        background: n(632079).oZ.frontQuaternaryButtonBackgroundPressed
                                    };
                                case "aiPrimary":
                                case "aiTertiary":
                                    return {
                                        background: "#946EA6"
                                    };
                                case "lightGray":
                                    return {
                                        background: n(632079).Tj.state.pressed,
                                        color: n(632079).Tj.text.primary
                                    };
                                default:
                                    (0, n(722371).HB)(e)
                            }
                        }(g, f),
                        disabled: b || u,
                        disabledFeedback: l,
                        ...m,
                        children: [u ? (0, s.jsx)(n(517334).k, {
                            style: a
                        }) : null, (0, s.jsx)("div", {
                            style: o,
                            children: r
                        })]
                    })
                }), n(795676).A)
        },
        812971: (e, t, n) => {
            n.d(t, {
                j: () => i
            });

            function i() {
                var e;
                let t = (0, n(972740).L)(),
                    i = (0, n(226309)._3)({
                        spaceId: null == t ? void 0 : t.id
                    }),
                    s = (0, n(533992).v3)(),
                    [a] = (0, n(97668).Yb)(() => t ? (0, n(423127).Xd)({
                        billingData: i,
                        spaceStore: t,
                        environment: s
                    }) : Promise.resolve(void 0), [i, t, s]),
                    o = "idle" === a.status || "pending" === a.status;
                return "resolved" === a.status && null != (e = a.value) && e.shouldShowCallout ? {
                    shouldShow: !0,
                    campaign: a.value.campaign,
                    loading: o
                } : {
                    shouldShow: !1,
                    campaign: void 0,
                    loading: o
                }
            }
        },
        813515: (e, t, n) => {
            n.d(t, {
                z: () => a
            });
            var i = n(296540),
                s = n(474848);

            function a({
                loginModalStore: e,
                title: t,
                description: r,
                isSignup: u,
                disableLoginLink: d,
                redirectURL: p,
                className: g,
                onDismiss: b,
                trustedDomain: m
            }) {
                let f = (0, n(682985).K8)(() => e.state.open, [e]),
                    _ = (0, i.useId)(),
                    h = (0, i.useId)(),
                    v = {
                        title: t,
                        description: r,
                        isSignup: u,
                        redirectURL: p,
                        disableLoginLink: d,
                        titleAriaId: _,
                        descriptionAriaId: h,
                        trustedDomain: m
                    };
                return (0, s.jsx)(n(833503).s, {
                    ariaLabelledBy: _,
                    ariaDescribedBy: h,
                    isOpen: f,
                    onDismiss: () => {
                        c({
                            loginModalStore: e,
                            onDismiss: b
                        })
                    },
                    areaConstraint: {
                        width: {
                            type: "fixed",
                            length: 480
                        },
                        height: {
                            type: "unlimited",
                            scroll: "allow"
                        }
                    },
                    deprecatedCompatibilityOverrides: {
                        tabletsUsePhoneDisplayMode: !0
                    },
                    children: () => (0, s.jsx)(o, {
                        children: (0, s.jsxs)("div", {
                            className: g,
                            children: [n(986939).A.isMobile ? void 0 : (0, s.jsx)(l, {
                                loginModalStore: e,
                                onDismiss: b
                            }), (0, s.jsx)(n(901240).Yo, { ...v
                            })]
                        })
                    })
                })
            }

            function o({
                children: e
            }) {
                return n(986939).A.isMobile ? (0, s.jsx)(n(126767).H, {
                    type: n(644154).A.Y,
                    children: e
                }) : e
            }
            let r = {
                style0: {
                    fontSize: 14,
                    color: n(632079).Tj.text.secondary,
                    position: "absolute",
                    insetInlineEnd: 0,
                    marginTop: 16,
                    marginInlineEnd: 16,
                    cursor: "pointer",
                    zIndex: 1
                }
            };

            function l({
                loginModalStore: e,
                onDismiss: t
            }) {
                return (0, s.jsx)("div", {
                    style: r.style0,
                    onClick: () => {
                        c({
                            loginModalStore: e,
                            onDismiss: t
                        })
                    },
                    children: (0, s.jsx)(n(109939).sA, {
                        defaultMessage: "Cancel",
                        id: "sidebarSwitcherMultiAccount.addAccountModal.cancelButton.label"
                    })
                })
            }

            function c(e) {
                let {
                    loginModalStore: t,
                    onDismiss: i
                } = e;
                n(83879).b.reset(), t.setState({
                    open: !1
                }), i && i()
            }
        },
        832139: (e, t, n) => {
            n.d(t, {
                A: () => i
            });

            function i() {
                return ((0, n(907620).T)("isSamsungPreload") || (0, n(907620).T)("isInstalledFromSamsungAppStore")) && n(218744).default.checkGate({
                    gateName: "samsung_disable_all_upgrades"
                })
            }
        },
        877163: (e, t, n) => {
            n.d(t, {
                m: () => s
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 1.77 10.75 15.98",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M11.633 1.812c.263.096.43.354.41.632l-.392 5.51h3.099a.625.625 0 0 1 .506.992l-6.18 8.54a.625.625 0 0 1-1.13-.412l.402-5.5H5.25a.625.625 0 0 1-.507-.99l6.17-8.55a.625.625 0 0 1 .72-.222m-5.161 8.513H9.02a.625.625 0 0 1 .623.67l-.29 3.976 4.173-5.766H10.98a.625.625 0 0 1-.623-.67l.284-3.987z"
                    })
                },
                s = (0, n(104509).wt)("lightning", i, "default")
        },
        898378: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                notionTintableIcon: () => s
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.76 1.39 16.47 17.17",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M12.32 1.437c1.17-.1 1.47-.032 2.205.501l3.039 2.136c.5.367.668.467.668.867v11.715c0 .734-.267 1.168-1.202 1.234l-11.055.667c-.702.034-1.036-.066-1.404-.533L2.333 15.12c-.4-.534-.567-.934-.567-1.401V3.306c0-.6.267-1.101 1.035-1.168zm4.241 3.871-10.854.634c-.4.034-.534.235-.534.668v9.945c0 .535.267.735.868.702l10.388-.601c.6-.033.668-.401.668-.835V5.942c0-.433-.167-.667-.536-.634m-1.134 1.836c.066.3 0 .601-.301.635l-.501.1v7.342c-.434.233-.835.367-1.169.367-.534 0-.668-.168-1.068-.668L9.113 9.78v4.973l1.036.233c0 .008-.005.6-.836.6l-2.303.135c-.067-.134 0-.468.233-.535l.602-.167V8.446L7.01 8.38c-.067-.3.1-.734.567-.768l2.472-.166 3.407 5.206V8.046l-.868-.1c-.067-.367.2-.635.534-.668zm-2.705-4.772-9.153.668c-.333.033-.4.2-.267.333l1.303 1.035c.534.433.735.4 1.737.333l9.452-.567c.2 0 .034-.2-.033-.233l-1.57-1.136c-.301-.233-.702-.5-1.47-.433"
                    })
                },
                s = (0, n(104509).wt)("notionTintable", i, "tintable")
        },
        901240: (e, t, n) => {
            n.d(t, {
                C6: () => a,
                HQ: () => s,
                Yo: () => o
            });
            let i = new(n(815048)).O2("login", async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e(49806), n.e(79974), n.e(35837), n.e(18406), n.e(97615), n.e(3079), n.e(96966)]).then(n.bind(n, 622207)), {
                        default: t
                    } = await Promise.all([n.e(49806), n.e(79974), n.e(35837), n.e(18406), n.e(97615), n.e(3079), n.e(96966)]).then(n.bind(n, 949204)), {
                        LoginMobileNative: i
                    } = await Promise.all([n.e(49806), n.e(79974), n.e(35837), n.e(18406), n.e(97615), n.e(3079), n.e(96966)]).then(n.bind(n, 210909)), {
                        default: s
                    } = await Promise.all([n.e(49806), n.e(79974), n.e(35837), n.e(18406), n.e(97615), n.e(3079), n.e(96966)]).then(n.bind(n, 555348)), {
                        default: a
                    } = await Promise.all([n.e(49806), n.e(79974), n.e(35837), n.e(18406), n.e(97615), n.e(3079), n.e(96966)]).then(n.bind(n, 352668));
                    return {
                        LoginPage: e,
                        LoginDesktop: t,
                        LoginMobileNative: i,
                        FrontLoginPage: s,
                        LoginModalContent: a
                    }
                }),
                s = (0, n(815048)._h)(i, e => e.LoginPage),
                a = (0, n(815048)._h)(i, e => e.FrontLoginPage),
                o = (0, n(815048)._h)(i, e => e.LoginModalContent)
        },
        937776: (e, t, n) => {
            n.d(t, {
                B: () => a
            }), n(296540);
            var i = n(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, i.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                a = (0, n(104509).wt)("archiveBox", s, "default")
        },
        966458: (e, t, n) => {
            n.d(t, {
                Jg: () => i
            }), n(898992), n(672577);

            function i(e) {
                var t;
                let {
                    product: i,
                    userId: s,
                    billingData: a,
                    spaceUserStore: o,
                    spaceStore: r,
                    existingRequests: l
                } = e;
                if (!i || !(null != r && r.id) || !s) return "not_eligible";
                if ((0, n(192159).eh)(a, i) && "ai_credit_pack" !== i) return "product_already_available";
                let c = (0, n(880280).rU)(i),
                    u = function(e) {
                        let {
                            billingData: t,
                            spaceUserStore: i,
                            spaceStore: s
                        } = e;
                        if (!s || !i || !t) return !1;
                        let a = s.getDisableMemberUpgradeRequests();
                        return !(n(986939).A.isMobile || a || !(0, n(262166).jR)((0, n(192159).AI)(t)) || (0, n(192159).et)(t)) && !!(i.isMember() && !i.isWorkspaceOwner())
                    }({
                        billingData: a,
                        spaceUserStore: o,
                        spaceStore: r
                    });
                if (!(c && u) || void 0 === l) return "not_eligible";
                let d = null == (t = l[i]) ? void 0 : t.find(e => e.created_by_id === s);
                return (null == d ? void 0 : d.request_status) || "unrequested"
            }
        },
        968864: (e, t, n) => {
            n.d(t, {
                Y: () => a,
                G: () => s
            });
            let i = {
                clipboardActions: n(235645).R.clipboardActions,
                duplicationActions: n(411648).VI.duplicateActions,
                formulasModule: n(864850).T.formulas,
                insertBlockActions: n(162865).H,
                katex: n(406921).V,
                markdownLinkifyIt: n(94386).g,
                pagePresentationActions: n(590943).e,
                tinyMceMicrosoftWordPasteFilter: n(393771).S
            };

            function s(...e) {
                for (let t of e) i[t].load()
            }

            function a(e) {
                let t = i[e].getLoadingState();
                if ("idle" === t.status) s(e);
                else if ("pending" === t.status || "rejected" === t.status);
                else {
                    if ("resolved" === t.status) return t.value;
                    (0, n(722371).HB)(t)
                }
            }
        },
        970801: (e, t, n) => {
            n.d(t, {
                Q: () => i
            });
            let i = 300
        },
        976800: (e, t, n) => {
            n.d(t, {
                o: () => l
            });
            var i = n(296540),
                s = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.47 16.26 12.66",
                    directional: !0,
                    svg: (0, s.jsx)("path", {
                        d: "M12.231 4.969A.875.875 0 1 1 13.47 3.73l4.4 4.4a.875.875 0 0 1 0 1.238l-4.4 4.4a.875.875 0 1 1-1.238-1.238l2.906-2.906H6a2.375 2.375 0 1 0 0 4.75h1.42a.875.875 0 0 1 0 1.75H6a4.125 4.125 0 1 1 0-8.25h9.138z"
                    })
                },
                o = (0, n(104509).wt)("arrowUTurnUpRightFill", a, "fill"),
                r = {
                    skipLink: {
                        position: "absolute",
                        insetInlineStart: 12,
                        top: 12,
                        width: 200,
                        height: 48,
                        overflow: "hidden",
                        zIndex: 9999,
                        padding: 12,
                        background: n(632079).Tj.blue.background.accentPrimary,
                        color: "white",
                        textAlign: "center",
                        textDecoration: "none",
                        borderRadius: 16
                    },
                    buttonHoveredStyle: {
                        background: n(632079).Tj.blueButtonHoveredBackground
                    },
                    buttonPressedStyle: {
                        background: n(632079).Tj.blueButtonPressedBackground
                    },
                    style1: {
                        width: "auto"
                    }
                };

            function l({
                sidebarAware: e = !0
            }) {
                let t = (0, n(533992).v3)(),
                    a = (0, n(682985).O$)(n(984858).sidebarWidthStore),
                    c = e ? a : void 0,
                    u = (0, n(682985).K8)(() => !!e && (0, n(712358).K)(t), [t, e]),
                    [d, p] = (0, i.useState)(!1),
                    g = (0, i.useRef)(null),
                    b = (0, n(960253).e)(),
                    m = (0, n(960253).I)(() => ({
                        container: {
                            background: u ? "light" === b ? n(632079).Tj.background.secondary : n(632079).Tj.background.elevated : void 0,
                            height: 68,
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            zIndex: 1e3
                        }
                    }), [u, b]);
                return (0, s.jsx)(n(654979).A, {
                    tag: "div",
                    animate: { ...void 0 !== c && {
                            width: c
                        },
                        translateY: d ? 0 : -100
                    },
                    style: { ...m.container,
                        ...void 0 === c && r.style1
                    },
                    className: "notion-print-ignore",
                    children: (0, s.jsx)(n(64960).Ay, {
                        style: r.skipLink,
                        hoveredStyle: r.buttonHoveredStyle,
                        pressedStyle: r.buttonPressedStyle,
                        href: "#main",
                        id: "skip-to-content",
                        ref: g,
                        onClick: e => {
                            let t = 0 === e.detail || 0 === e.screenX && 0 === e.screenY,
                                i = document.getElementById("main");
                            if (i) {
                                let e = (0, n(949054).Kr)(i);
                                e.length > 0 && e[0].focus()
                            }
                            p(!1), (0, n(104310).u)({
                                event: {
                                    eventName: "skip_to_content_click",
                                    eventProperties: {
                                        user_navigation_type: t ? "keyboard" : "mouse"
                                    }
                                }
                            })
                        },
                        onFocus: () => {
                            p(!0)
                        },
                        onBlur: () => {
                            p(!1)
                        },
                        children: (0, s.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            children: [(0, s.jsx)(n(109939).sA, {
                                defaultMessage: "Skip to content",
                                id: "skipToContent.skipToContent"
                            }), (0, s.jsx)(n(16275).I, {
                                icon: o
                            })]
                        })
                    })
                })
            }
        },
        989068: (e, t, n) => {
            async function i(e) {
                var t;
                return null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (t = n(775657).electronApi.checkLocaleSupport) ? void 0 : t.call(n(775657).electronApi, e)
            }
            n.d(t, {
                o: () => l,
                i: () => o
            }), n(296540);
            var s = n(474848);
            let a = (0, n(109939).YK)({
                title: {
                    id: "desktop.unsupportedLocale.title",
                    defaultMessage: "Language not supported on desktop"
                },
                message: {
                    id: "desktop.unsupportedLocale.message",
                    defaultMessage: "The {localeName} locale isn’t supported in this version of the desktop app. Try updating to the latest desktop version."
                }
            });
            async function o({
                locale: e,
                environment: t,
                origin: s,
                intl: r
            }) {
                var l;
                if (t.device.isElectron) {
                    let t = await i(e);
                    if ((null == t ? void 0 : t.supported) === !1) return void n(819652).HK({
                        id: "unsupported_locale",
                        title: r.formatMessage(a.title),
                        message: r.formatMessage(a.message, {
                            localeName: e
                        })
                    })
                }(0, n(195857).DO_NOT_USE_trackLegacy)("locale_changed", {
                    locale: e,
                    origin: s
                });
                let c = await t.api.callApi({
                    eventName: "setlocale",
                    environment: t,
                    data: {
                        locale: e
                    }
                });
                "success" === c.type ? (n(467008).A.set("preferredLocale", e), await n(941701).transactionQueue.drain(), t.device.isElectron) ? (null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (l = n(775657).electronApi.setLocale) || l.call(n(775657).electronApi, e), (0, n(518531).F)({
                    includeFocusedWindow: !0
                })) : window.location.reload(!0) : n(647095).Qg(c)
            }

            function r(e) {
                let t = (0, n(533992).v3)(),
                    i = (0, n(109939).tz)();
                return (0, s.jsx)(n(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, s.jsx)(n(109939).sA, { ...n(166863).P.language.title
                    }),
                    byline: (0, s.jsx)(n(109939).sA, { ...n(166863).P.language.description
                    }),
                    item: (0, s.jsx)(n(678064).A, {
                        confirm: !0,
                        onChange: e => o({
                            locale: e,
                            environment: t,
                            origin: "languageSettings",
                            intl: i
                        }),
                        currentLocale: e.locale,
                        origin: "languageSettings"
                    })
                })
            }

            function l(e) {
                let {
                    device: t
                } = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => (0, n(405072).J)({
                    isMobileNative: t.isMobileNative,
                    isAndroid: t.isAndroid
                }), [t.isMobileNative, t.isAndroid]) ? (0, s.jsx)(n(31256).J, {}) : n(986939).A.isMobile ? null : (0, s.jsx)(r, { ...e
                })
            }
        },
        992894: (e, t, n) => {
            n.d(t, {
                h: () => a
            });
            var i = n(296540),
                s = n(474848);

            function a({
                store: e,
                onClick: t,
                onMouseEnter: c,
                onMouseLeave: u,
                buttonStyles: d
            }) {
                let p = (0, n(533992).v3)(),
                    g = (0, i.useCallback)(n => (0, s.jsx)(l, {
                        store: e,
                        onClick: t,
                        onMouseEnter: c,
                        onMouseLeave: u,
                        buttonStyles: d,
                        buttonPopupEvents: n
                    }), [e, t, c, u, d]),
                    {
                        mobileNative: b
                    } = p,
                    m = (0, n(533992).Y0)(),
                    f = (0, n(682985).K8)(() => (null == b ? void 0 : b.supportsNativeHomeOnPhone()) || !1, [b]);
                return (0, s.jsx)(n(656252).A, {
                    popupType: (() => {
                        switch (!0) {
                            case m.isPhone:
                                return n(656252).z.SlideUp;
                            case m.isTablet:
                                return n(656252).z.BottomSheet;
                            default:
                                return n(656252).z.Popup
                        }
                    })(),
                    bottomSheetInitialState: m.isTablet ? "full" : void 0,
                    hidesMobileNativeBottomBar: f,
                    preventSlideUpTransition: f,
                    buttonPopupStore: n(843582).w,
                    alignmentToOrigin: "start",
                    placementToOrigin: "right",
                    originGap: 0,
                    onClick: e => {
                        r(p)
                    },
                    isFullWidthOnMobile: !0,
                    content: () => (0, s.jsx)(o, {}),
                    preventScaleTransition: !0,
                    children: g
                })
            }

            function o() {
                return (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore) ? (0, s.jsx)(n(896053).V, {}) : null
            }

            function r(e) {
                (0, n(195857).DO_NOT_USE_trackLegacy)("open_trash", (0, n(403884).h)({
                    environment: e
                }))
            }

            function l({
                store: e,
                buttonPopupEvents: t,
                onClick: a,
                onMouseEnter: o,
                onMouseLeave: c,
                buttonStyles: u
            }) {
                let d = (0, n(533992).v3)(),
                    p = (0, n(665002).g)(),
                    {
                        onClick: g,
                        ...b
                    } = (0, i.useMemo)(() => (0, n(63390).A)(t, {
                        onClick: a,
                        onMouseEnter: o,
                        onMouseLeave: c
                    }), [t, a, o, c]),
                    m = (0, i.useMemo)(() => null == e ? void 0 : e.clone(), [e]),
                    f = (0, n(682985).K8)(() => n(843582).w.state.open, []),
                    _ = (0, s.jsx)(n(64960).Ay, { ...b,
                        style: { ...n(132261).DX.baseSidebarItem,
                            ...f && n(132261).DX.currentSelectedSidebarItem,
                            ...p && {
                                transition: "none"
                            }
                        },
                        hoveredStyle: null == u ? void 0 : u.hoveredStyle,
                        onClick: g || (e => {
                            r(d)
                        }),
                        children: (0, s.jsx)(n(380559).u, {
                            left: (0, s.jsx)(n(16275).I, {
                                icon: n(968411).trashIcon,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            disableMobileBorder: !0,
                            isBottomItem: !0,
                            children: (0, s.jsx)(n(109939).sA, {
                                defaultMessage: "Trash",
                                id: "sidebarTrashButton.text"
                            })
                        })
                    });
                return m ? (0, s.jsx)(n(611752).Ay, {
                    store: m,
                    canDropOnto: !0,
                    onSelectableDrop: e => (function(e, t) {
                        let {
                            droppedStores: i,
                            duplicate: s,
                            targetStore: a
                        } = e;
                        if (!s) {
                            let e = a.getSpaceId();
                            (0, n(377796).createAndCommit)({
                                userAction: "SidebarTrashButton.handleDrop",
                                environment: t,
                                cellTarget: {
                                    spaceWithId: e
                                },
                                canUndo: !0,
                                perform: e => {
                                    (0, n(596740).Z)({
                                        environment: t,
                                        blocks: i,
                                        transaction: e
                                    })
                                }
                            })
                        }
                    })({ ...e,
                        targetStore: m
                    }, d),
                    analyticsName: "sidebar_trash",
                    shouldShowDropZone: !0,
                    children: _
                }) : _
            }
        }
    }
]);