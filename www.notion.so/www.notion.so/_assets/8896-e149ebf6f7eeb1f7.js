(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [8896], {
        11255: (e, t, a) => {
            "use strict";
            a.d(t, {
                qB: () => i,
                sq: () => n
            });
            let n = ["favorite", "edit", "writeInsert", "create", "thinkAskChat", "findSearch", "custom", "notionActions", "recent", "databaseAgent"],
                i = ["improve_writing", "fix_spelling_grammar", "explain_this", "reformat", "create_daily_brief"]
        },
        37458: (e, t, a) => {
            e.exports = a(708009)
        },
        44027: (e, t, a) => {
            "use strict";

            function n(e) {
                let {
                    businessTrialOffer: t,
                    billingTime: n,
                    modalLastShownAt: i,
                    modalShownTimes: o
                } = e;
                return !!(0, a(383378).V9)(t, n) && void 0 !== i && void 0 !== o && (!(i > 0) || !(n.diff(a(906745).DateTime.fromMillis(i), "days").days >= a(118999).ls)) && (o ? ? 0) >= a(118999).TY
            }

            function i(e, t = (0, a(192159).DS)(e)) {
                if (!e) return;
                let n = (0, a(192159).i5)(e);
                if (n) return Math.ceil(n.toUTC().diff(t.toUTC(), "days").days)
            }

            function o(e, t) {
                let n = a(906745).DateTime.fromMillis(e.endDateMs).toUTC();
                return (t ? ? a(906745).DateTime.now()).toUTC().hasSame(n, "day")
            }

            function r(e) {
                let t = (0, a(278662).Jd)(e);
                if (t) return (0, a(875472).Vm)(t)
            }

            function s(e) {
                let t = (0, a(278662).Jd)(e);
                if (t) return (0, a(875472).kd)(t)
            }

            function l(e) {
                let t = a(118999).Tu[e];
                if (void 0 === t) throw Error(`Unknown trial length: ${e}`);
                return t
            }

            function d(e) {
                return Math.round(e / 30)
            }

            function c({
                billingData: e
            }) {
                if (!(0, a(192159).TB)(e)) return !1;
                if ((0, a(192159).HY)(e)) {
                    var t;
                    return (null == e ? void 0 : e.type) === "admin" && (null == (t = e.trial) ? void 0 : t.autoConvert) === !0
                }
                return (null == e ? void 0 : e.type) === "admin" && (0, a(722371).O9)(null == e ? void 0 : e.paymentMethod)
            }

            function u(e) {
                return (0, a(192159).oD)(e) && (0, a(717274).pX)()
            }

            function p(e) {
                return (0, a(722371).Xk)(["multi_search_scope_menu", "ai_workspace_settings_connector_cards", "business_trial_ai_connectors_upsell", "ai_corner_chat_connectors_button"], e)
            }

            function m(e) {
                return (0, a(722371).Xk)(a(90416).K_, e)
            }

            function g(e) {
                return (0, a(722371).Xk)([...a(994234).iE, ...a(994234).wW, ...a(994234).Fh], e)
            }

            function f(e) {
                let {
                    openedFrom: t,
                    campaign: a,
                    isCustomAgentsGateEnabled: n
                } = e;
                return n && (m(t) || "deeplink" === t && g(a))
            }
            a.d(t, {
                F$: () => f,
                IU: () => u,
                J: () => r,
                SF: () => m,
                Tr: () => d,
                UP: () => i,
                XF: () => o,
                cn: () => s,
                dt: () => g,
                od: () => n,
                rE: () => l,
                tY: () => p,
                z2: () => c
            }), a(16280)
        },
        49204: (e, t, a) => {
            "use strict";
            a.d(t, {
                J: () => n,
                X: () => i
            });
            let n = [function(e) {
                    var t, n;
                    return (0, a(576348).ZE)(e.publicEditMode, (null == (t = e.blocks) ? void 0 : t.length) === 1 ? e.blocks[0] : null == (n = e.pageContext) ? void 0 : n.pageStore)
                }, a(998256).p, (0, a(572251).A)(a(287310).J)],
                i = [...n, (0, a(572251).A)(a(99378).v), (0, a(572251).A)(a(183205).y), function(e) {
                    return e.blocks.length > 0
                }]
        },
        56281: (e, t, a) => {
            "use strict";

            function n(e, t) {
                return t ? t.percent_off ? {
                    amount: e * t.percent_off / 100,
                    monthsRemaining: t.duration_in_months
                } : t.amount_off ? {
                    amount: t.amount_off
                } : {
                    amount: 0
                } : {
                    amount: 0
                }
            }

            function i(e) {
                return "personal" !== e && a(126365).tX.find(t => t === e)
            }
            a.d(t, {
                VV: () => r,
                _6: () => i,
                _q: () => o,
                ex: () => n
            }), a(16280), a(944114), a(898992), a(672577);
            let o = ["kr_card", "kakao_pay", "naver_pay"];

            function r(e) {
                let {
                    currency: t
                } = e, a = ["card", "link"];
                return "EUR" === t && a.push("sepa_debit"), "KRW" === t && a.push(...o), a
            }
        },
        90416: (e, t, a) => {
            "use strict";
            a.d(t, {
                CT: () => r,
                K_: () => l,
                Mi: () => n,
                uv: () => o,
                zL: () => s,
                zj: () => i
            });
            let n = ["database_agents", "database_agent_autofill_button", "database_agent_run_dropdown", "database_agent_fill_rows", "database_agent_fill_all", "database_agent_preview_generate", "database_agent_edit_modal_toggle", "database_agent_setup_menu_item"],
                i = ["ai_unified_find_search_modal", "ai_unified_find_chat", "ai_chat_with_model", "ai_assistant_limit_in_app", "ai_autofill_fill_all_pages", "ai_autofill_bulk_fill", "ai_autofill_on_page_edit", "ai_autofill_try_on_view", "ai_limit_in_app", "ai_limit_property_autofill", "ai_limit_sidebar", "ai_limit_settings", "ai_limited_qna_no_results", "ai_limited_qna_upsell_action_button", "ai_qna_waitlist", "ai_qna_limit_in_app", "ai_upsell_notice", "ai_upsell_settings", "ai_page_translation", "ai_plans_page", "ai_formulas"],
                o = ["ai_research_mode"],
                r = ["ai_meeting_notes", "ai_meeting_notes_custom_transcript_retention"],
                s = ["ai_agent"],
                l = ["custom_agent", "custom_agents_sidebar", "new_custom_agents_sidebar", "new_custom_agents_library", "slippery_slope_flyout_menu", "custom_agents_launch_modal", "custom_agents_gift_box", "marketplace_agents"]
        },
        94021: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.27 2.85 17.64 14.57",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M1.293 6.583A2.125 2.125 0 0 1 3.12 4.195l9.912-1.321A2.125 2.125 0 0 1 15.418 4.7l.264 1.975h1.103c1.174 0 2.125.951 2.125 2.125v6.5a2.125 2.125 0 0 1-2.125 2.125h-10A2.125 2.125 0 0 1 4.66 15.3v-.465l-.12.016a2.125 2.125 0 0 1-2.388-1.825zm3.367 6.991V8.8c0-1.174.952-2.125 2.125-2.125h7.636l-.242-1.81a.875.875 0 0 0-.983-.752L3.284 5.434a.875.875 0 0 0-.752.983l.86 6.443a.875.875 0 0 0 .982.752zM5.91 8.8v6.5c0 .483.392.875.875.875h10a.875.875 0 0 0 .875-.875V8.8a.875.875 0 0 0-.875-.875h-10a.875.875 0 0 0-.875.875"
                    })
                },
                i = (0, a(104509).wt)("rectangleOnRectangleTilt", n, "default")
        },
        95405: (e, t, a) => {
            "use strict";
            a.d(t, {
                $S: () => o,
                I4: () => n,
                IQ: () => i
            }), a(898992), a(354520);

            function n(e, t, n) {
                let o = i(t).slice(),
                    r = o.findIndex(t => e.id === t.id); - 1 === r ? o.unshift(e) : o.splice(r, 1, e), (0, a(862759).m)({
                    userSettingsStore: t,
                    transaction: n,
                    data: {
                        favorite_ai_actions: o
                    }
                })
            }

            function i(e) {
                var t;
                return (null == (t = e.getModel()) || null == (t = t.getSettings()) ? void 0 : t.favorite_ai_actions) ? ? []
            }

            function o(e, t, n) {
                let o = i(t).filter(t => t.id !== e.id);
                (0, a(862759).m)({
                    userSettingsStore: t,
                    transaction: n,
                    data: {
                        favorite_ai_actions: o
                    }
                })
            }
        },
        99378: (e, t, a) => {
            "use strict";

            function n(e) {
                return e.blocks.some(e => {
                    let t = (0, a(330870).a)();
                    return !!(t && (0, a(335818).fc)(t) || (0, a(444285).S)(t) && null != t && t.uiContains(e) && t !== e)
                })
            }
            a.d(t, {
                v: () => n
            }), a(898992), a(737550)
        },
        113867: (e, t, a) => {
            "use strict";
            a.d(t, {
                _: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.67 2.37 12.66 15.94",
                    svg: (0, a(474848).jsx)("path", {
                        d: "m4.897 3.085-.122-.142a.625.625 0 0 0-.95.814l3.56 4.152-.013.131a4.625 4.625 0 0 0-2.997 4.33V13c0 .345.28.625.625.625h4.13v3.08c0 .158.035.317.1.46l.433.94a.35.35 0 0 0 .565.103l.063-.087.44-.956c.065-.142.1-.3.1-.46v-3.08h1.453l2.941 3.432a.625.625 0 0 0 1.042-.67L4.989 3.228a.6.6 0 0 1-.093-.144m3.258 6.007a.6.6 0 0 0 .169-.088l2.889 3.371H5.625v-.006c0-1.447.922-2.733 2.293-3.197zm7.259 4.379a.62.62 0 0 0 .212-.47v-.63a4.625 4.625 0 0 0-2.997-4.33l-.157-1.603.289-.258a3.63 3.63 0 0 0 1.212-2.705V3a.625.625 0 0 0-.625-.625H6.653a.62.62 0 0 0-.516.272l1.216 1.419a2.4 2.4 0 0 1-.07-.441h5.434a2.38 2.38 0 0 1-.79 1.621l-.525.47a.63.63 0 0 0-.206.527l.227 2.318a.63.63 0 0 0 .422.531l.237.08a3.375 3.375 0 0 1 2.291 3.084z"
                    })
                },
                i = (0, a(104509).wt)("pinSlash", n, "default")
        },
        118999: (e, t, a) => {
            "use strict";
            a.d(t, {
                Hb: () => g,
                Hu: () => c,
                TY: () => n,
                Tu: () => r,
                U4: () => m,
                U7: () => f,
                WO: () => l,
                XX: () => p,
                c4: () => d,
                ef: () => o,
                ej: () => u,
                hI: () => s,
                ls: () => i
            });
            let n = 2,
                i = 30,
                o = 30,
                r = {
                    365: 5,
                    180: 5,
                    90: 5,
                    30: 5,
                    14: 4
                },
                s = 332,
                l = 852,
                d = 800,
                c = 407,
                u = 24,
                p = 400,
                m = 450,
                g = 524,
                f = 7
        },
        133121: (e, t, a) => {
            "use strict";
            a.d(t, {
                u: () => n
            });
            let n = "return-to-writer-button"
        },
        137032: (e, t, a) => {
            "use strict";

            function n(e) {
                a(984858).sidebarWidthStore.setState(e.width), (0, a(936221).U)(e.environment) < a(655567).gJ && a(270912).VN({
                    environment: e.environment,
                    from: "sidebar_expand"
                }), (0, a(455108).Z)()
            }
            a.d(t, {
                z: () => n
            })
        },
        140758: (e, t, a) => {
            "use strict";
            a.d(t, {
                R: () => o
            }), a(296540);
            var n = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.62 15.26 15.26",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8.875 5.75c.345 0 .625.28.625.625V8.25h1.875a.625.625 0 1 1 0 1.25H9.5v1.875a.625.625 0 1 1-1.25 0V9.5H6.375a.625.625 0 1 1 0-1.25H8.25V6.375c0-.345.28-.625.625-.625"
                        }), (0, n.jsx)("path", {
                            d: "M8.875 2.625a6.25 6.25 0 1 0 3.955 11.09l3.983 3.982a.625.625 0 1 0 .884-.884l-3.983-3.982a6.25 6.25 0 0 0-4.84-10.205m-5 6.25a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
                        })]
                    })
                },
                o = (0, a(104509).wt)("magnifyingGlassPlus", i, "default")
        },
        152208: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                eyeIcon: () => o,
                iconDefinition: () => i
            }), a(296540);
            var n = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.96 4.19 18.07 11.62",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M10.17 6.694a3.307 3.307 0 0 1 3.135 3.303l-.005.17a3.305 3.305 0 0 1-3.3 3.137l-.17-.004a3.307 3.307 0 0 1-3.132-3.133l-.004-.17A3.307 3.307 0 0 1 10 6.69zm-.17 2.2a1.104 1.104 0 0 0 0 2.207 1.103 1.103 0 0 0 0-2.207"
                        }), (0, n.jsx)("path", {
                            d: "M10 4.194c3.878 0 7.26 2.075 8.862 5.127l.073.163c.126.333.126.7 0 1.033l-.073.163c-1.602 3.052-4.984 5.126-8.862 5.126-3.757 0-7.049-1.946-8.707-4.843l-.156-.283a1.46 1.46 0 0 1 0-1.359l.156-.283C2.95 6.141 6.243 4.194 10 4.194m0 1.251c-3.33 0-6.196 1.724-7.622 4.214l-.134.243a.21.21 0 0 0 0 .197l.134.243c1.426 2.49 4.292 4.214 7.622 4.214 3.437 0 6.38-1.837 7.756-4.457l.018-.048a.2.2 0 0 0 0-.1l-.018-.049C16.38 7.282 13.437 5.445 10 5.445"
                        })]
                    })
                },
                o = (0, a(104509).wt)("eye", i, "default")
        },
        154911: (e, t, a) => {
            "use strict";

            function n() {
                return [(0, a(828294).a)("agent_writer") ? "commandAltJ" : "commandJ"]
            }
            a.d(t, {
                K: () => n
            })
        },
        162948: (e, t, a) => {
            "use strict";
            a.d(t, {
                C: () => r
            }), a(944114);
            var n = a(296540),
                i = a(474848);
            let o = {
                popup: { ...a(986939).A.isMobile && {
                        borderStartStartRadius: 12,
                        borderStartEndRadius: 12,
                        overflow: "hidden"
                    }
                }
            };

            function r({
                sizeVariant: e = "default"
            }) {
                let t = (0, a(109939).tz)(),
                    n = "small" === e ? a(361226).ellipsisSmallIcon : a(397900).ellipsisIcon,
                    l = (0, a(682985).K8)(() => {
                        let e = a(729508).dl(),
                            {
                                currentTab: t,
                                isCurrentTabEmpty: n
                            } = a(825109).Ay.state;
                        if ("all_updates" === e || "archived_only" === e || "mentions" !== t || n) return;
                        let {
                            containsUnreadNotifications: i,
                            containsBothReadAndUnreadNotifications: o
                        } = a(825109).Ay.state;
                        return {
                            containsUnreadNotifications: i,
                            containsBothReadAndUnreadNotifications: o,
                            showOnlyUnreadNotifications: "unread_only" === e
                        }
                    }, []),
                    d = (0, a(352202).zg)(a(986939).A.isMobile ? "default" : e),
                    u = (0, a(960253).I)(() => ({
                        button: a(986939).A.isMobile ? {
                            height: 30,
                            width: 30
                        } : d.button,
                        ellipsisIcon: { ...d.icon,
                            ...a(986939).A.isMobile && {
                                fill: a(632079).Tj.icon.primary
                            }
                        }
                    }), [d]);
                if (!l) return null;
                let p = t.formatMessage({
                    defaultMessage: "More actions",
                    id: "inbox.ellipsisButton.tooltip"
                });
                return (0, i.jsx)(a(656252).A, {
                    style: o.popup,
                    popupType: a(986939).A.isMobile ? a(656252).z.SlideUp : a(656252).z.Popup,
                    content: e => (0, i.jsx)(s, { ...l,
                        closePopup: e.close
                    }),
                    alignmentToOrigin: "start",
                    originGap: 2,
                    children: ({
                        onClick: e
                    }) => (0, i.jsx)(a(51831).m, {
                        content: () => p,
                        placement: "bottom",
                        alignment: "start",
                        delayThreshold: 0,
                        originGap: 6,
                        children: o => (0, i.jsx)(a(374533).A, {
                            ariaLabel: t.formatMessage(c.moreActionsButtonAriaLabel),
                            icon: n,
                            iconStyle: u.ellipsisIcon,
                            style: u.button,
                            onClick: e,
                            ...o
                        })
                    })
                })
            }

            function s(e) {
                let {
                    containsUnreadNotifications: t,
                    containsBothReadAndUnreadNotifications: o,
                    showOnlyUnreadNotifications: r,
                    closePopup: s
                } = e, c = (0, a(533992).v3)(), u = (0, a(533992).Y0)(), p = ["markAllAsRead"];
                r ? p.push("archiveUnread") : (p.push("archiveAll"), o && p.push("archiveRead"));
                let m = (0, n.useCallback)(() => {
                        a(142215).cZ(c), a(543861).hY(c)
                    }, [c]),
                    g = (0, n.useCallback)(e => {
                        let t = "none";
                        "archiveAll" === e ? t = "none" : "archiveUnread" === e ? t = "unread" : "archiveRead" === e && (t = "read"), a(142215).xd(c, {
                            readFilter: t
                        }), a(543861).Sy(c, "mentions", t)
                    }, [c]);
                return (0, i.jsx)(a(747369).A, {
                    menuType: a(649476).gu.Popup,
                    height: u.isTablet ? "100%" : a(986939).A.isMobile ? "50vh" : void 0,
                    maxWidth: a(986939).A.isMobile ? "100vw" : void 0,
                    maxHeight: u.isTablet ? "100%" : void 0,
                    header: a(986939).A.isMobile ? (0, i.jsx)(a(324489).V, {
                        style: a(13649).T.header,
                        isSmall: !a(986939).A.isMobile,
                        isSecondaryColor: !a(986939).A.isMobile,
                        children: (0, i.jsx)(a(109939).sA, {
                            id: "inbox.moreActionsMenu.header",
                            defaultMessage: "Actions"
                        })
                    }) : void 0,
                    minWidth: 250,
                    scrollerStyle: a(13649).T.menuScroller,
                    children: (0, i.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        sections: [{
                            key: "inbox global actions",
                            render: e => (0, i.jsx)(a(844565).A, { ...e,
                                topBorder: 0 !== e.index,
                                style: a(13649).T.sectionMenuItem
                            }),
                            items: p.map((e, n) => ({
                                key: e,
                                render: o => {
                                    let r = n === p.length - 1,
                                        s = a(986939).A.isMobile && r;
                                    return "archiveAll" === e || "archiveRead" === e || "archiveUnread" === e ? (0, i.jsx)(d, { ...o,
                                        archiveActionType: e,
                                        showTransparentButtonMenuItemDivider: s
                                    }) : "markAllAsRead" === e ? (0, i.jsx)(l, { ...o,
                                        showTransparentButtonMenuItemDivider: s,
                                        containsUnreadNotifications: t
                                    }) : void(0, a(722371).HB)(e)
                                },
                                action: () => {
                                    s(), "archiveAll" === e || "archiveUnread" === e || "archiveRead" === e ? g(e) : "markAllAsRead" === e ? m() : (0, a(722371).HB)(e)
                                }
                            }))
                        }],
                        initialFocus: void 0,
                        onAccept: () => s()
                    })
                })
            }
            let l = n.forwardRef((e, t) => {
                let {
                    containsUnreadNotifications: n,
                    showTransparentButtonMenuItemDivider: o,
                    ...r
                } = e, s = (0, a(682985).K8)(() => a(995735).B.getUnreadCountForSidebarSpace().mentions > 0, []), l = !(n || s);
                return (0, i.jsx)(a(51831).m, {
                    placement: "left",
                    disableTooltip: !l,
                    content: () => (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "All notifications have been marked as read.",
                        id: "updatesModal.spaceUpdatesTab.markAllReadButton.disabledTooltip"
                    }),
                    children: e => (0, i.jsx)(a(95582).A, { ...(0, a(63390).A)(r, e),
                        ref: t,
                        icon: (0, i.jsx)(a(16275).I, {
                            icon: a(15956).checkmarkIcon,
                            style: a(13649).T.icon
                        }),
                        title: (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "Mark all as read",
                            id: "updatesModal.spaceUpdates.mentionsTab.markAllReadButtonTitle"
                        }),
                        titleStyle: a(13649).T.title,
                        disabled: l,
                        disabledFeedback: l,
                        style: { ...a(13649).T.buttonMenuItem,
                            ...o && a(13649).T.transparentButtonMenuItemBorder
                        }
                    })
                })
            });
            l.displayName = "InboxMarkReadButtonMenuItem";
            let d = n.forwardRef((e, t) => {
                let {
                    archiveActionType: n,
                    showTransparentButtonMenuItemDivider: o,
                    ...r
                } = e, s = "archiveRead" === n;
                return (0, i.jsx)(a(95582).A, { ...r,
                    ref: t,
                    icon: s ? (0, i.jsx)(a(16275).I, {
                        icon: a(714200).r,
                        style: a(13649).T.icon
                    }) : (0, i.jsx)(a(16275).I, {
                        icon: a(937776).B,
                        style: a(13649).T.icon
                    }),
                    title: (() => {
                        switch (n) {
                            case "archiveAll":
                                return (0, i.jsx)(a(109939).sA, {
                                    defaultMessage: "Archive all",
                                    id: "updatesModal.spaceUpdatesTab.archiveAll.tooltip"
                                });
                            case "archiveUnread":
                                return (0, i.jsx)(a(109939).sA, {
                                    defaultMessage: "Archive unread",
                                    id: "updatesModal.spaceUpdatesTab.archiveUnread.tooltip"
                                });
                            case "archiveRead":
                                return (0, i.jsx)(a(109939).sA, {
                                    defaultMessage: "Archive read",
                                    id: "updatesModal.spaceUpdatesTab.archiveRead.tooltip"
                                });
                            default:
                                (0, a(722371).HB)(n)
                        }
                    })(),
                    titleStyle: a(13649).T.title,
                    style: { ...a(13649).T.buttonMenuItem,
                        ...o && a(13649).T.transparentButtonMenuItemBorder
                    }
                })
            });
            d.displayName = "InboxArchiveButtonMenuItem";
            let c = (0, a(109939).YK)({
                moreActionsButtonAriaLabel: {
                    defaultMessage: "More actions",
                    id: "inbox.button.moreActionsButtonAriaLabel"
                }
            })
        },
        165668: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                OutlinerDropdownMenuButton: () => d,
                useSortActions: () => _
            }), a(898992), a(354520), a(803949), a(581454);
            var n = a(296540),
                i = a(474848);
            let o = (0, a(109939).YK)({
                    move: {
                        id: "useMoveSidebarAction.title.moveSection",
                        defaultMessage: "Move section"
                    },
                    moveUp: {
                        id: "useMoveSidebarAction.option.moveUp",
                        defaultMessage: "Move up"
                    },
                    moveDown: {
                        id: "useMoveSidebarAction.option.moveDown",
                        defaultMessage: "Move down"
                    }
                }),
                r = (0, a(109939).YK)({
                    removeFromSidebar: {
                        id: "useRemoveSidebarSectionAction.removeFromSidebar",
                        defaultMessage: "Hide section"
                    },
                    showInHome: {
                        id: "useRemoveSidebarSectionAction.showInHome",
                        defaultMessage: "Show in Home"
                    },
                    removeFromSidebarCaptionNotionApps: {
                        id: "useRemoveSidebarSectionAction.removeFromSidebar.caption.notionApps",
                        defaultMessage: "You can manage Notion apps from settings at any time."
                    },
                    hideSectionToastTitle: {
                        id: "useRemoveSidebarSectionAction.hideSectionToast.title",
                        defaultMessage: "{sectionName} section has been hidden in the sidebar"
                    },
                    hideSectionToastMessageForLibrary: {
                        id: "useRemoveSidebarSectionAction.hideSectionToast.message",
                        defaultMessage: "You can unhide sidebar sections from Library"
                    },
                    hideSectionToastUndo: {
                        id: "useRemoveSidebarSectionAction.hideSectionToast.undo",
                        defaultMessage: "Undo"
                    },
                    hideSectionToastOpenLibrary: {
                        id: "useRemoveSidebarSectionAction.hideSectionToast.openLibrary",
                        defaultMessage: "Open in Library"
                    },
                    hideSectionToastTitleForCustomizeSidebar: {
                        id: "useRemoveSidebarSectionAction.hideSectionToast.customizeSidebar",
                        defaultMessage: "Customize sidebar"
                    }
                }),
                s = (0, a(109939).YK)({
                    manual: {
                        id: "outlinerDropdownMenuButton.sort.manual",
                        defaultMessage: "Manual"
                    },
                    lastEdited: {
                        id: "outlinerDropdownMenuButton.sort.lastEdited",
                        defaultMessage: "Last edited"
                    }
                }),
                l = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 20,
                    width: 20,
                    borderRadius: 4
                };

            function d(e) {
                let {
                    type: t,
                    spaceViewStore: o,
                    hideMoveSectionActions: r
                } = e, s = (0, a(533992).v3)(), d = (0, n.useCallback)(() => {
                    a(89690).W.setState({
                            open: !0
                        }),
                        function(e, t) {
                            let {
                                outliner_type: n
                            } = t;
                            (0, a(104310).u)({
                                event: {
                                    eventName: "open_outliner_section_menu",
                                    eventProperties: {
                                        outliner_type: n,
                                        ...(0, a(403884).h)({
                                            environment: e
                                        })
                                    }
                                }
                            })
                        }(s, {
                            outliner_type: a(669439).BP[t]
                        })
                }, [s, t]), c = (0, n.useCallback)(() => {
                    a(89690).W.setState({
                        open: !1
                    })
                }, []), u = (0, a(109939).tz)().formatMessage({
                    id: "outlinerDropdownMenuButton.ariaLabel",
                    defaultMessage: "Open menu"
                });
                return o ? (0, i.jsx)(a(656252).A, {
                    popupType: a(656252).z.Popup,
                    alignmentToOrigin: "start",
                    onClick: d,
                    onClose: c,
                    content: e => (0, i.jsx)(h, {
                        type: t,
                        spaceViewStore: o,
                        onClose: () => {
                            e.close()
                        },
                        hideMoveSectionActions: r
                    }),
                    originGap: 2,
                    children: e => (0, i.jsx)(a(64960).Ay, {
                        style: l,
                        ariaLabel: u,
                        ...e,
                        children: (0, i.jsx)(a(16275).I, {
                            icon: a(361226).ellipsisSmallIcon,
                            size: "sm",
                            colorVariant: a(986939).A.isMobile ? "tertiary" : "secondary"
                        })
                    })
                }) : null
            }
            let c = (0, a(109939).YK)({
                    sort: {
                        id: "outlinerDropdownMenu.sort",
                        defaultMessage: "Sort"
                    },
                    truncationLimit: {
                        id: "outlinerDropdownMenu.truncationLimit",
                        defaultMessage: "Show"
                    },
                    addTeam: {
                        id: "outlinerDropdownMenu.addTeam",
                        defaultMessage: "New teamspace"
                    }
                }),
                u = (0, a(109939).YK)({
                    label: {
                        id: "outlinerDropdownMenu.setupExperience.label",
                        defaultMessage: "Setup experience [dev]"
                    },
                    production: {
                        id: "outlinerDropdownMenu.setupExperience.production",
                        defaultMessage: "🏭 Production"
                    },
                    productionDescription: {
                        id: "outlinerDropdownMenu.setupExperience.productionDescription",
                        defaultMessage: "Current custom agent setup experience for production users (includes flippy layout and custom agent self-setup and testing)."
                    },
                    development: {
                        id: "outlinerDropdownMenu.setupExperience.development",
                        defaultMessage: "🛠️ Development"
                    },
                    developmentDescription: {
                        id: "outlinerDropdownMenu.setupExperience.developmentDescription",
                        defaultMessage: "Work in progress experience - iterating on flippy layout, no Agent 2.0"
                    },
                    wildWest: {
                        id: "outlinerDropdownMenu.setupExperience.wildWest",
                        defaultMessage: "🤠 Wild west"
                    },
                    wildWestDescription: {
                        id: "outlinerDropdownMenu.setupExperience.wildWestDescription",
                        defaultMessage: "Latest setup UX and self-setup using Agent 2.0."
                    }
                }),
                p = ["production", "development", "wild_west"],
                m = {
                    production: {
                        agent_script_agent_advanced: !1,
                        agent_page_icon_chat_bubble_tooltip: !1
                    },
                    development: {
                        agent_script_agent_advanced: !1,
                        agent_page_icon_chat_bubble_tooltip: !0
                    },
                    wild_west: {
                        agent_script_agent_advanced: !1,
                        agent_page_icon_chat_bubble_tooltip: !0
                    }
                },
                g = {
                    production: !1,
                    development: !1,
                    wild_west: !0
                },
                f = {
                    rightText: {
                        fontSize: 12,
                        color: a(632079).Tj.text.secondary
                    },
                    right: {
                        width: 16
                    }
                };

            function h(e) {
                let {
                    type: t,
                    spaceViewStore: l,
                    onClose: d,
                    hideMoveSectionActions: h
                } = e, v = (0, a(533992).v3)(), y = (0, a(682985).O$)(a(728372).AppStoreCurrentUserSettingsStore), S = (0, a(109939).tz)(), x = (0, a(682985).K8)(() => (0, a(822209).R)({
                    environment: v,
                    spaceViewStore: l,
                    type: t,
                    userSettingsStore: y
                }), [l, t, v, y]), M = x.sortOption, w = x.truncationLimit, k = "shared" === t, A = (0, a(784331).cd)(), T = k || "private" === t || "teamspaces" === t || "agents" === t || "myMeetings" === t || "favorites" === t && A || "recents" === t && A, j = (0, a(190566).gX)(t), C = !(0, a(682985).O$)(a(420153).l), I = (0, a(682985).K8)(() => {
                    let e = a(728372).AppStoreSidebarSpaceStore.state;
                    return !!e && (0, a(345514).s)({
                        environment: v,
                        spaceStore: e
                    })
                }, [v]), B = C && "teamspaces" === t && I, z = _({
                    type: t,
                    onSelect: d,
                    spaceViewStore: l,
                    outlinerLocation: "sidebar"
                }), P = function(e) {
                    let {
                        type: t,
                        spaceViewStore: n,
                        onSelect: o,
                        isLibraryEnabled: r
                    } = e, s = (0, a(682985).O$)(a(728372).AppStoreCurrentUserSettingsStore), l = (0, a(533992).v3)(), d = (0, a(682985).K8)(() => (0, a(822209).R)({
                        environment: l,
                        type: t,
                        spaceViewStore: n,
                        userSettingsStore: s
                    }).truncationLimit, [t, n, l, s]);
                    return ("recents" === t ? a(171231).AQ.filter(e => e !== a(171231).xz) : a(171231).AQ).map(e => {
                        let s = (0, a(171231).Fl)(e);
                        return (0, a(233319).Ls)({
                            key: s.toString(),
                            displayName: void 0,
                            analyticsName: s.toString(),
                            validators: [],
                            closeParentMenu: !0,
                            action: () => {
                                let e = n.getSpaceId();
                                (0, a(377796).createAndCommit)({
                                    userAction: "OutlinerDropdownMenuButton.setTruncationLimit",
                                    environment: l,
                                    cellTarget: e ? {
                                        spaceWithId: e
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        (0, a(536806).c)({
                                            environment: l,
                                            transaction: e,
                                            spaceViewStore: n,
                                            update: {
                                                type: "truncationLimit",
                                                value: s
                                            },
                                            sectionType: t
                                        })
                                    }
                                }), a(707964).u4({
                                    name: "update_sidebar_section_option",
                                    args: {
                                        option: "show",
                                        type: t
                                    }
                                }), (0, a(714485).nT)(l, {
                                    outliner_type: a(669439).BP[t],
                                    option: s,
                                    before_option: d,
                                    are_library_sidebar_sections_enabled: r
                                }), (0, a(435163).O)({
                                    environment: l,
                                    trigger: "setting_change"
                                }), o()
                            },
                            render: e => (0, i.jsx)(a(860287).A, { ...e,
                                title: (0, i.jsx)(b, {
                                    limit: s,
                                    withItems: !0
                                }),
                                right: d === s && (0, i.jsx)(a(16275).I, {
                                    icon: a(971730).checkmarkSmallIcon,
                                    size: "sm"
                                }),
                                rightStyle: f.right
                            })
                        })
                    })
                }({
                    type: t,
                    onSelect: d,
                    spaceViewStore: l,
                    isLibraryEnabled: A
                }), L = function(e) {
                    let {
                        onSelect: t
                    } = e, o = (0, a(388647).k)(), r = (0, a(83208).X)("agent_script_agent_advanced"), s = (0, a(83208).X)("agent_page_icon_chat_bubble_tooltip"), l = (0, a(109939).tz)(), d = (0, n.useMemo)(() => {
                        for (let e of p) {
                            let {
                                agent_script_agent_advanced: t,
                                agent_page_icon_chat_bubble_tooltip: a
                            } = m[e];
                            if (g[e] === o && t === r && a === s) return e
                        }
                    }, [o, r, s]), c = (0, n.useCallback)(e => {
                        switch (e) {
                            case "production":
                                return l.formatMessage(u.production);
                            case "development":
                                return l.formatMessage(u.development);
                            case "wild_west":
                                return l.formatMessage(u.wildWest);
                            default:
                                return (0, a(722371).HB)(e)
                        }
                    }, [l]), h = (0, n.useCallback)(e => {
                        switch (e) {
                            case "production":
                                return l.formatMessage(u.productionDescription);
                            case "development":
                                return l.formatMessage(u.developmentDescription);
                            case "wild_west":
                                return l.formatMessage(u.wildWestDescription);
                            default:
                                return (0, a(722371).HB)(e)
                        }
                    }, [l]);
                    return p.map(e => (0, a(233319).Ls)({
                        key: e,
                        displayName: void 0,
                        analyticsName: e,
                        validators: [],
                        closeParentMenu: !0,
                        action: () => {
                            (0, a(722371).WP)(m[e]).forEach(([e, t]) => {
                                a(473556).default.updateLocalOverrideGate(e, t)
                            });
                            let n = g[e];
                            a(473556).default.updateLocalOverrideConfig("ai_product_retention_script_agent", n ? "on" : "control"), t()
                        },
                        render: t => (0, i.jsx)(a(860287).A, { ...t,
                            title: c(e),
                            caption: h(e),
                            shouldWrapCaption: !0,
                            right: d === e && (0, i.jsx)(a(16275).I, {
                                icon: a(971730).checkmarkSmallIcon,
                                size: "sm"
                            }),
                            rightStyle: f.right
                        })
                    }))
                }({
                    onSelect: d
                }), R = "agents" === t && !1, E = (0, a(854615).R)({
                    type: t,
                    onSelect: d
                }), D = function(e) {
                    let {
                        type: t,
                        onSelect: n
                    } = e, r = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore), s = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore), {
                        currentUserRootStore: l,
                        currentUserStore: d
                    } = (0, a(682985).K8)(() => ({
                        currentUserRootStore: a(728372).AppStoreCurrentUserRootStore.state,
                        currentUserStore: a(728372).AppStoreCurrentUserStore.state
                    }), []), c = (0, a(109939).tz)(), u = (0, a(917441).Rx)(), p = (0, a(784331).cd)(), m = (0, a(533992).WS)(), g = (null == u ? void 0 : u.sidebarOrder) ? ? [], f = (0, a(682985).K8)(() => (0, a(367584).i)({
                        spaceStore: r,
                        spaceViewStore: s,
                        userRootStore: l,
                        currentUserStore: d
                    }), [r, l, d, s]), h = (0, a(85183).a)({
                        sidebarState: u,
                        showLockedSidebar: f,
                        isLibraryEnabled: p,
                        isPhone: m
                    });
                    if (!s) return [];
                    let _ = h.indexOf(t),
                        b = 0 === _,
                        v = _ === h.length - 1,
                        y = (null == u ? void 0 : u.shownSidebarSectionCount) ? ? 0;
                    return ["moveUp", "moveDown"].map(e => {
                        let r = o[e];
                        return (0, a(233319).Ls)({
                            key: e,
                            displayName: void 0,
                            analyticsName: r.defaultMessage,
                            validators: [() => y > 1],
                            closeParentMenu: !0,
                            action: ({
                                environment: i
                            }) => {
                                let o = function({
                                        sidebarSection: e,
                                        selectedMoveOption: t,
                                        sidebarOrder: a,
                                        visibleSidebarOrder: n
                                    }) {
                                        let i = [...a],
                                            o = a.indexOf(e),
                                            r = n.indexOf(e);
                                        if ("moveUp" === t && r > 0) {
                                            let t = n[r - 1];
                                            i[a.indexOf(t)] = e, i[o] = t
                                        }
                                        if ("moveDown" === t && r < n.length - 1) {
                                            let t = n[r + 1];
                                            i[a.indexOf(t)] = e, i[o] = t
                                        }
                                        return i
                                    }({
                                        sidebarSection: t,
                                        selectedMoveOption: e,
                                        sidebarOrder: g,
                                        visibleSidebarOrder: h
                                    }),
                                    r = s.getSpaceId();
                                (0, a(377796).createAndCommit)({
                                    userAction: `useMoveSidebarAction.${e}`,
                                    environment: i,
                                    cellTarget: {
                                        spaceWithId: r
                                    },
                                    canUndo: !0,
                                    perform: e => {
                                        (0, a(173157).z)({
                                            store: s,
                                            data: {
                                                sidebar_order: o
                                            },
                                            transaction: e
                                        })
                                    }
                                }), (0, a(928896).U)(i, {
                                    section: t,
                                    previous_order: g,
                                    new_order: o,
                                    from: "outliner_section_menu"
                                }), n()
                            },
                            render: t => {
                                let n = "moveUp" === e && b || "moveDown" === e && v,
                                    o = "moveUp" === e ? a(358839).arrowStraightUpIcon : a(356938).arrowStraightDownIcon;
                                return (0, i.jsx)(a(860287).A, { ...t,
                                    disabled: n,
                                    disabledFeedback: n,
                                    title: c.formatMessage(r),
                                    svg: o
                                })
                            }
                        })
                    })
                }({
                    type: t,
                    onSelect: d
                }), H = function(e) {
                    let {
                        type: t,
                        onSelect: n
                    } = e, o = (0, a(533992).v3)(), s = (0, a(476743).a)(), l = (0, a(109939).tz)(), d = (0, a(784331).cd)(), c = (0, a(784331).nr)(), u = (0, a(853284).U)(), p = (0, a(83208).X)("slippery_slope_sidebar_customization"), m = (0, a(682985).K8)(() => {
                        var e;
                        if (!d || !(0, a(190566).Yw)(t)) return;
                        let n = (0, a(413388)._B)(t);
                        if (!(u || "agents" !== n && (0, a(722371).O9)(n) || "agents" === n && c)) return;
                        let i = a(712241).L.fromSpaceViewStore(null == s || null == (e = s.getSpaceStore()) ? void 0 : e.getSpaceIdCreator(), s, t);
                        return null != i && i.isDefined() ? i : void 0
                    }, [d, s, t, c, u]), g = (0, a(682985).K8)(() => null == m ? void 0 : m.getSectionType(), [m]), f = (0, a(682985).K8)(() => (null == m ? void 0 : m.isHidden()) ? ? !1, [m]);
                    if ("meetings_today" === t) {
                        if (!m) return [];
                        let e = f ? r.showInHome : r.removeFromSidebar,
                            t = f ? a(152208).eyeIcon : a(319681).e;
                        return [(0, a(233319).Ls)({
                            key: "toggleMeetingsTodayVisibility",
                            displayName: e,
                            analyticsName: e.defaultMessage,
                            validators: [],
                            closeParentMenu: !0,
                            action: () => {
                                let e = null == s ? void 0 : s.getSpaceId();
                                (0, a(377796).createAndCommit)({
                                    userAction: "useRemoveSidebarSectionAction.toggleMeetingsTodaySection",
                                    environment: o,
                                    cellTarget: e ? {
                                        spaceWithId: e
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        let t = m.getPropertiesStore().getKeyStore("hidden");
                                        (0, a(368198).K)({
                                            transaction: e,
                                            store: t,
                                            value: !f
                                        })
                                    }
                                }), n()
                            },
                            render: n => (0, i.jsx)(a(860287).A, { ...n,
                                title: l.formatMessage(e),
                                svg: t
                            })
                        })]
                    }
                    if ("notion_apps" === t) {
                        let e = r.removeFromSidebar;
                        return [(0, a(233319).Ls)({
                            key: "removeFromSidebar",
                            displayName: e,
                            analyticsName: e.defaultMessage,
                            validators: [],
                            closeParentMenu: !0,
                            action: () => {
                                a(552013).nQ(o), n()
                            },
                            render: t => (0, i.jsx)(a(860287).A, { ...t,
                                shouldWrapCaption: !0,
                                title: l.formatMessage(e),
                                caption: l.formatMessage(r.removeFromSidebarCaptionNotionApps),
                                svg: a(319681).e
                            })
                        })]
                    }
                    if (!m || !(0, a(190566).VL)(g)) return [];
                    let h = r.removeFromSidebar;
                    return [(0, a(233319).Ls)({
                        key: "removeFromSidebar",
                        displayName: h,
                        analyticsName: h.defaultMessage,
                        validators: [],
                        closeParentMenu: !0,
                        action: () => {
                            (0, a(723836).rx)({
                                environment: o,
                                eventProperties: {
                                    visibility_after_change: "hidden",
                                    section_type: g,
                                    from: "outliner_section_menu"
                                }
                            });
                            let e = null == s ? void 0 : s.getSpaceId();
                            (0, a(377796).createAndCommit)({
                                userAction: "useRemoveSidebarSectionAction.removeFromSidebar",
                                environment: o,
                                cellTarget: e ? {
                                    spaceWithId: e
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    let t = m.getPropertiesStore().getKeyStore("hidden");
                                    (0, a(368198).K)({
                                        transaction: e,
                                        store: t,
                                        value: !0
                                    })
                                }
                            }), (0, a(435163).O)({
                                environment: o,
                                trigger: "setting_change"
                            });
                            let i = `hide-sidebar-section-${t}`;
                            if (n(), u && p) {
                                let e = (0, a(303322).y)(g, l);
                                a(819652).Iz({
                                    id: i,
                                    icon: a(924171).V,
                                    title: l.formatMessage(r.hideSectionToastTitle, {
                                        sectionName: e
                                    }),
                                    presentationType: "transient",
                                    actions: {
                                        primary: {
                                            title: l.formatMessage(r.hideSectionToastTitleForCustomizeSidebar),
                                            onAction: () => {
                                                a(819652).UW({
                                                    id: i
                                                }), a(87945).F.setState(!0)
                                            }
                                        },
                                        secondary: {
                                            title: l.formatMessage(r.hideSectionToastUndo),
                                            onAction: () => {
                                                a(819652).UW({
                                                    id: i
                                                }), (0, a(462446).t)({
                                                    environment: o,
                                                    preventSelectText: !0
                                                })
                                            }
                                        }
                                    }
                                });
                                return
                            }
                            let d = (0, a(413388)._B)(t);
                            if (!d) return;
                            let c = (0, a(413388).Ws)(d, l);
                            a(819652).Iz({
                                id: i,
                                icon: a(924171).V,
                                title: l.formatMessage(r.hideSectionToastTitle, {
                                    sectionName: c
                                }),
                                message: l.formatMessage(r.hideSectionToastMessageForLibrary),
                                presentationType: "transient",
                                actions: {
                                    primary: {
                                        title: l.formatMessage(r.hideSectionToastOpenLibrary),
                                        onAction: async () => {
                                            a(819652).UW({
                                                id: i
                                            }), (await (0, a(337439).p)())({
                                                event: void 0,
                                                analyticsFrom: "hide_section_toast",
                                                environment: o,
                                                viewName: d
                                            })
                                        }
                                    },
                                    secondary: {
                                        title: l.formatMessage(r.hideSectionToastUndo),
                                        onAction: () => {
                                            a(819652).UW({
                                                id: i
                                            }), (0, a(462446).t)({
                                                environment: o,
                                                preventSelectText: !0
                                            })
                                        }
                                    }
                                }
                            })
                        },
                        render: e => (0, i.jsx)(a(860287).A, { ...e,
                            title: l.formatMessage(h),
                            svg: a(319681).e
                        })
                    })]
                }({
                    type: t,
                    onSelect: d
                }), U = [(0, a(35370).u)({
                    key: "sort",
                    displayName: c.sort,
                    analyticsName: c.sort.defaultMessage,
                    validators: [() => j],
                    svg: a(300921).arrowUpDownIcon,
                    right: S.formatMessage(s[M]),
                    rightStyle: f.rightText,
                    subActions: () => [(0, a(233319).gy)({
                        key: "sort",
                        actions: z
                    })]
                }), (0, a(35370).u)({
                    key: "truncationLimit",
                    displayName: c.truncationLimit,
                    analyticsName: c.truncationLimit.defaultMessage,
                    validators: [() => T],
                    svg: a(504118).L,
                    right: (0, i.jsx)(b, {
                        limit: w
                    }),
                    rightStyle: f.rightText,
                    subActions: () => [(0, a(233319).gy)({
                        key: "truncationLimit",
                        actions: P
                    })]
                }), ...h ? [] : D, ...H, (0, a(35370).u)({
                    key: "setupExperience",
                    displayName: u.label,
                    analyticsName: u.label.defaultMessage,
                    validators: [() => R],
                    svg: a(829968).gearIcon,
                    width: 420,
                    subActions: () => [(0, a(233319).gy)({
                        key: "setupExperience",
                        actions: L
                    })]
                })], F = "teamspaces" === t, V = [(0, a(233319).gy)({
                    key: "all",
                    actions: U
                }), (0, a(233319).gy)({
                    key: "openInLibrary",
                    render: e => (0, i.jsx)(a(844565).A, { ...e,
                        topBorder: !0
                    }),
                    actions: F ? [] : E
                }), (0, a(233319).gy)({
                    key: "addTeam",
                    actions: [(0, a(233319).Ls)({
                        key: "addTeam",
                        displayName: c.addTeam,
                        analyticsName: c.addTeam.defaultMessage,
                        validators: [() => B],
                        svg: a(581923).plusIcon,
                        closeParentMenu: !0,
                        action: () => {
                            (0, a(198347).v)("sidebar_team_section"), d()
                        }
                    }), ...F ? E : []]
                })], N = (0, a(67499).S)();
                return (0, i.jsx)(a(747369).A, {
                    menuType: a(649476).gu.Popup,
                    minWidth: 220,
                    children: (0, i.jsx)(a(530500).A, {
                        context: {
                            blocks: [],
                            environment: v,
                            publicEditMode: void 0,
                            pageContext: N
                        },
                        sections: V,
                        initialFocus: void 0
                    })
                })
            }

            function _(e) {
                let {
                    type: t,
                    spaceViewStore: n,
                    onSelect: o,
                    outlinerLocation: r
                } = e, l = (0, a(533992).v3)(), d = (0, a(109939).tz)(), {
                    sidebarSpaceStore: c,
                    currentUserSettingsStore: u
                } = (0, a(682985).K8)(() => ({
                    sidebarSpaceStore: (0, a(328765).S)(),
                    currentUserSettingsStore: a(728372).AppStoreCurrentUserSettingsStore.state
                }), []), p = l.currentUser.id, m = (0, a(83208).X)("sidebar_add_new_pages_to_bottom"), g = (0, a(682985).K8)(() => (0, a(822209).R)({
                    environment: l,
                    type: t,
                    spaceViewStore: n,
                    userSettingsStore: u
                }).sortOption, [t, n, l, u]);
                return ["manual", "lastEdited"].map(e => {
                    let u = s[e];
                    return (0, a(233319).Ls)({
                        key: e,
                        displayName: void 0,
                        analyticsName: u.defaultMessage,
                        validators: [],
                        closeParentMenu: !0,
                        action: async () => {
                            let i = n.getSpaceId();
                            (0, a(377796).createAndCommit)({
                                userAction: "OutlinerDropdownMenuButton.setSortOption",
                                environment: l,
                                cellTarget: {
                                    spaceWithId: i
                                },
                                canUndo: !0,
                                perform: i => {
                                    (0, a(536806).c)({
                                        environment: l,
                                        transaction: i,
                                        spaceViewStore: n,
                                        update: {
                                            type: "sortOption",
                                            value: e
                                        },
                                        sectionType: t
                                    })
                                }
                            }), "manual" === e && "shared" === t && !m && p && c && await a(905717).Z({
                                environment: l,
                                spaceId: c.id,
                                userId: p
                            }), a(707964).u4({
                                name: "update_sidebar_section_option",
                                args: {
                                    option: "sort",
                                    type: t
                                }
                            }), (0, a(714485).Rf)(l, {
                                outliner_type: a(669439).BP[t],
                                outliner_location: r,
                                option: e
                            }), o()
                        },
                        render: t => (0, i.jsx)(a(860287).A, { ...t,
                            title: d.formatMessage(u),
                            right: g === e && (0, i.jsx)(a(16275).I, {
                                icon: a(971730).checkmarkSmallIcon,
                                size: "sm"
                            }),
                            rightStyle: f.right
                        })
                    })
                })
            }

            function b(e) {
                let {
                    limit: t,
                    withItems: n
                } = e;
                return n ? (0, i.jsx)(a(109939).sA, {
                    id: "outlinerDropdownMenuButton.truncationLimit",
                    defaultMessage: "{limit} items",
                    values: {
                        limit: t
                    }
                }) : (0, i.jsx)("span", {
                    children: t
                })
            }
        },
        183205: (e, t, a) => {
            "use strict";

            function n(e) {
                return e.blocks.some(a(574676).u)
            }
            a.d(t, {
                y: () => n
            }), a(898992), a(737550)
        },
        213039: (e, t, a) => {
            "use strict";
            a.d(t, {
                M: () => o
            }), a(296540);
            var n = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.25 15.25 11.5",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M3 7.375h6.829a2.501 2.501 0 0 0 4.842 0H17a.625.625 0 1 0 0-1.25h-2.329a2.501 2.501 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25M12.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
                        }), (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.75 15.75a2.5 2.5 0 0 0 2.421-1.875H17a.625.625 0 1 0 0-1.25h-6.829a2.5 2.5 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25h2.329A2.5 2.5 0 0 0 7.75 15.75m0-1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5",
                            clipRule: "evenodd"
                        })]
                    })
                },
                o = (0, a(104509).wt)("sliders", i, "default")
        },
        216736: (e, t, a) => {
            "use strict";

            function n(e) {
                let {
                    svgElement: t,
                    padding: a,
                    backgroundColor: n
                } = e, i = t.cloneNode(!0);
                if (!(i instanceof SVGSVGElement)) throw Error("Failed to clone SVG element");
                i.getAttribute("xmlns") || i.setAttribute("xmlns", "http://www.w3.org/2000/svg"), i.getAttribute("xmlns:xlink") || i.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                let o = function(e) {
                        var t;
                        try {
                            let t = e.getBBox();
                            if (t.width > 0 && t.height > 0) return t
                        } catch {}
                        let a = null == (t = e.viewBox) ? void 0 : t.baseVal;
                        if (a && a.width > 0 && a.height > 0) return {
                            x: a.x,
                            y: a.y,
                            width: a.width,
                            height: a.height
                        };
                        let n = e.getBoundingClientRect();
                        return {
                            x: 0,
                            y: 0,
                            width: n.width,
                            height: n.height
                        }
                    }(t),
                    r = o.width,
                    s = o.height,
                    l = r + 2 * a,
                    d = s + 2 * a;
                i.setAttribute("width", l.toString()), i.setAttribute("height", d.toString()), i.setAttribute("viewBox", `${o.x-a} ${o.y-a} ${l} ${d}`);
                let c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                return c.setAttribute("x", (o.x - a).toString()), c.setAttribute("y", (o.y - a).toString()), c.setAttribute("width", l.toString()), c.setAttribute("height", d.toString()), c.setAttribute("fill", n), i.insertBefore(c, i.firstChild), {
                    svgText: new XMLSerializer().serializeToString(i),
                    width: l,
                    height: d
                }
            }

            function i(e) {
                let t = encodeURIComponent(e);
                return `data:image/svg+xml;charset=utf-8,${t}`
            }

            function o(e) {
                let t = e;
                return (t = (t = (t = t.replace(/@import[^;]+;/g, "")).replace(/url\(\s*(['"]?)(https?:\/\/|\/\/)[^)"']+\1\s*\)/g, 'url("")')).replace(/<image\b[^>]*(?:href|xlink:href)=["'](?:https?:)?\/\/[^"']+["'][^>]*\/?>/gi, "")).replace(/<use\b[^>]*(?:href|xlink:href)=["'](?:https?:)?\/\/[^"']+["'][^>]*\/?>/gi, "")
            }
            async function r(e) {
                let {
                    svgText: t,
                    width: a,
                    height: n,
                    mimeType: i,
                    quality: o,
                    pixelRatio: r,
                    platform: s
                } = e;
                return await new Promise((e, l) => {
                    if (s) {
                        if (!s.createImage || !s.createCanvas) return void l(Error("RasterizePlatform requires createImage and createCanvas"));
                        let d = s.createImage,
                            c = s.createCanvas,
                            u = s.createObjectUrl ? ? (e => URL.createObjectURL(e)),
                            p = s.revokeObjectUrl ? ? (e => URL.revokeObjectURL(e)),
                            m = new Blob([t], {
                                type: "image/svg+xml"
                            }),
                            g = d();
                        g.crossOrigin = "anonymous";
                        let f = u(m);
                        return g.onload = () => {
                            p(f);
                            let t = c(),
                                s = t.getContext("2d");
                            if (!s) return void l(Error("Failed to get canvas context"));
                            let d = r ? ? 1;
                            t.width = Math.max(1, Math.floor(a * d)), t.height = Math.max(1, Math.floor(n * d)), s.setTransform(d, 0, 0, d, 0, 0), s.drawImage(g, 0, 0);
                            try {
                                t.toBlob(a => {
                                    t.remove(), a ? e(a) : l(Error("Failed to rasterize SVG"))
                                }, i, "image/jpeg" === i ? o : void 0)
                            } catch (a) {
                                t.remove();
                                let e = a instanceof Error ? a.message : "Unknown rasterization error";
                                l(Error(`Failed to export image: ${e}`))
                            }
                        }, g.onerror = () => {
                            p(f), l(Error("Failed to load SVG for rasterization"))
                        }, void(g.src = f)
                    }
                    let d = new Image;
                    d.crossOrigin = "anonymous", d.onload = () => {
                        let t = document.createElement("canvas"),
                            s = t.getContext("2d");
                        if (!s) return void l(Error("Failed to get canvas context"));
                        let c = r ? ? 1;
                        t.width = Math.max(1, Math.floor(a * c)), t.height = Math.max(1, Math.floor(n * c)), s.setTransform(c, 0, 0, c, 0, 0), s.drawImage(d, 0, 0);
                        try {
                            t.toBlob(a => {
                                t.remove(), a ? e(a) : l(Error("Failed to rasterize SVG"))
                            }, i, "image/jpeg" === i ? o : void 0)
                        } catch (a) {
                            t.remove();
                            let e = a instanceof Error ? a.message : "Unknown rasterization error";
                            l(Error(`Failed to export image: ${e}`))
                        }
                    }, d.onerror = () => {
                        l(Error("Failed to load SVG for rasterization"))
                    }, d.src = `data:image/svg+xml;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(t)))}`
                })
            }

            function s(e) {
                let {
                    blob: t,
                    filename: a
                } = e, n = URL.createObjectURL(t), i = document.createElement("a");
                i.href = n, i.download = a, i.style.display = "none", document.body.appendChild(i), i.click(), i.remove(), setTimeout(() => URL.revokeObjectURL(n), 0)
            }
            a.d(t, {
                Ep: () => i,
                WN: () => s,
                Zu: () => r,
                l8: () => n,
                r1: () => o
            }), a(16280), a(964979), a(814603), a(147566), a(198721)
        },
        272799: (e, t, a) => {
            "use strict";

            function n(e) {
                a(986939).A.isMobile || a(822284).HL.setState({
                    open: !0,
                    ...e
                })
            }

            function i() {
                a(822284).HL.update(e => ({ ...e,
                    open: !1
                }))
            }

            function o(e) {
                a(986939).A.isMobile || a(822284).BusinessTrialEndingModalStore.update(() => ({
                    modalState: "initial",
                    ...e,
                    open: !0
                }))
            }

            function r(e) {
                a(822284).BusinessTrialEndingModalStore.update(t => ({ ...t,
                    modalState: e
                }))
            }

            function s() {
                a(822284).BusinessTrialEndingModalStore.update(e => ({ ...e,
                    open: !1,
                    modalState: "initial"
                }))
            }

            function l(e) {
                a(822284).BS.setState({ ...e,
                    open: !0
                })
            }

            function d() {
                a(822284).BS.update(e => ({ ...e,
                    open: !1
                }))
            }

            function c(e) {
                a(822284).jz.setState({
                    open: !0,
                    ...e
                })
            }

            function u() {
                a(822284).jz.update(e => ({ ...e,
                    open: !1
                }))
            }

            function p(e) {
                a(986939).A.isMobile || a(822284).ZJ.setState({
                    open: !0,
                    ...e
                })
            }

            function m() {
                a(822284).ZJ.update(e => ({ ...e,
                    open: !1
                }))
            }
            async function g(e) {
                var t;
                let {
                    billingData: n,
                    environment: i,
                    spaceStore: o,
                    from: r,
                    memberCount: s,
                    prices: l,
                    offerToApply: d,
                    autoConvert: c,
                    captchaToken: u,
                    sessionId: p
                } = e;
                if (!o || !r || !n || void 0 === s || !d) return {
                    success: !1,
                    error: "Invalid arguments"
                };
                let m = e.nowForTesting ? ? a(906745).DateTime.now(),
                    g = a(653828).H.state.selectedCurrencyCode ? ? "USD",
                    f = (0, a(982473).vk)(l, {
                        product: "business",
                        interval: "month",
                        currency: g
                    }),
                    h = (0, a(982473).vH)({
                        items: (null == (t = n.subscription) ? void 0 : t.items) ? ? [],
                        trialEnd: m.plus({
                            days: (0, a(337592).s1)(d)
                        })
                    }, {
                        price: f,
                        quantity: s
                    }),
                    _ = d.campaign;
                try {
                    return await (0, a(129909).n)({
                        environment: i,
                        spaceStore: o,
                        from: r,
                        desiredState: h,
                        trialData: {
                            id: _,
                            from: r,
                            autoConvert: c
                        },
                        captchaToken: u,
                        sessionId: p
                    }), {
                        success: !0,
                        error: void 0
                    }
                } catch (e) {
                    return {
                        success: !1,
                        error: e instanceof Error ? e.message : void 0
                    }
                }
            }
            async function f(e) {
                let {
                    billingData: t,
                    environment: n,
                    spaceStore: i
                } = e, o = i.getSpaceId();
                if (!t || !(0, a(192159).TB)(t) || !i.canAdmin()) return;
                let r = await n.api.callCellCompatibleApi({
                    eventName: "getCustomerOffersReceived",
                    environment: n,
                    data: {
                        spaceId: o
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: o
                    }
                });
                if ("failed" !== r.type) return (0, a(278662).Jd)(r.data)
            }

            function h(e) {
                var t, n;
                let i, {
                    billingData: o,
                    businessTrialOffer: r,
                    modalLastShownAt: s,
                    modalShownTimes: l
                } = e;
                if (!o) return !1;
                let d = (0, a(192159).DS)(o);
                if (t = s, n = d, t && a(906745).DateTime.fromMillis(t).startOf("day").equals(n.startOf("day")) || "business" === (0, a(192159).AW)(o) || "enterprise" === (0, a(192159).AW)(o) || !r || (0, a(44027).od)({
                        businessTrialOffer: r,
                        billingTime: d,
                        modalLastShownAt: s,
                        modalShownTimes: l
                    }) || (0, a(44027).z2)({
                        billingData: o
                    }) || void 0 === r || (0, a(875472).nb)(r)) return !1;
                let c = r.offer.duration.days;
                if (void 0 === c) return !1;
                try {
                    i = (0, a(44027).rE)(c)
                } catch {
                    i = void 0
                }
                return void 0 !== i && (0, a(383378).tz)(r, i, d) || (0, a(44027).XF)(r, d) || (0, a(383378).V9)(r, d)
            }
            a.r(t), a.d(t, {
                closeBusinessTrialCCUpfrontModal: () => m,
                closeBusinessTrialEndingModal: () => s,
                closeBusinessTrialExplorePlanModal: () => u,
                closeBusinessTrialLossAversionModal: () => d,
                closeBusinessTrialStartModal: () => i,
                createBusinessTrial: () => g,
                determineShouldShowTrialEndingModal: () => h,
                getBusinessTrialUsingOffersReceived: () => f,
                openBusinessTrialCCUpfrontModal: () => p,
                openBusinessTrialEndingModal: () => o,
                openBusinessTrialExplorePlanModal: () => c,
                openBusinessTrialLossAversionModal: () => l,
                openBusinessTrialStartModal: () => n,
                updateBusinessTrialEndingModalState: () => r
            }), a(16280)
        },
        321412: (e, t, a) => {
            "use strict";
            a.d(t, {
                b: () => l
            });
            var n = a(296540),
                i = a(474848);
            let o = {
                highlight: {
                    height: "calc(100% + 12px)",
                    width: "calc(100% + 24px)",
                    insetBlockStart: "-6px",
                    insetInlineStart: "-12px",
                    position: "absolute",
                    backgroundColor: a(632079).Tj.yellow.background.secondaryTranslucent,
                    borderRadius: 6,
                    pointerEvents: "none"
                }
            };

            function r({
                itemId: e,
                itemRef: t
            }) {
                let s = (0, a(533992).v3)(),
                    l = (0, n.useContext)(a(700587).U),
                    d = (0, a(682985).K8)(() => a(488301).J.state.highlightedSetting === e, [e]);
                return (0, n.useEffect)(() => {
                    d && t.current && (0, a(341471).h)({
                        element: t.current,
                        environment: s,
                        scrollerContext: l,
                        vertical: {
                            reveal: "closest"
                        },
                        horizontal: void 0,
                        animate: !0
                    })
                }, [d, s, t, l]), (0, i.jsx)(a(654979).A, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    visible: !!d,
                    config: {
                        duration: 250,
                        timingFunction: "ease-in-out"
                    },
                    style: o.highlight
                })
            }
            let s = {
                flex: 3,
                minWidth: 200
            };

            function l({
                id: e,
                title: t,
                titleId: o,
                byline: d,
                bylineId: c,
                item: u,
                badge: p,
                layout: m = "inline"
            }) {
                let g = (0, n.useRef)(null),
                    f = (0, a(960253).I)(() => ({
                        settingContainer: {
                            display: "flex",
                            width: "100%",
                            flexWrap: "wrap",
                            position: "relative",
                            gap: 12,
                            ..."stacked" === m ? {
                                flexDirection: "column"
                            } : {
                                justifyContent: "space-between",
                                alignItems: "center"
                            }
                        },
                        settingItem: {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            ..."stacked" === m ? {
                                width: "100%"
                            } : {
                                alignItems: "flex-end"
                            }
                        }
                    }), [m]);
                return (0, i.jsxs)("div", {
                    ref: g,
                    style: f.settingContainer,
                    children: [(0, i.jsx)("div", {
                        style: s,
                        children: (0, i.jsx)(a(741489).j, {
                            title: t,
                            titleId: o,
                            byline: d,
                            bylineId: c,
                            badge: p
                        })
                    }), (0, i.jsx)("div", {
                        style: f.settingItem,
                        children: u
                    }), (0, i.jsx)(r, {
                        itemId: e,
                        itemRef: g
                    })]
                })
            }
        },
        325336: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                arrowUTurnUpLeftIcon: () => i,
                iconDefinition: () => n
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.72 15.76 12.16",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M7.592 4.792a.625.625 0 1 0-.884-.884l-4.4 4.4a.625.625 0 0 0 0 .884l4.4 4.4a.625.625 0 1 0 .884-.884L4.259 9.375H14a2.625 2.625 0 0 1 0 5.25h-1.42a.625.625 0 1 0 0 1.25H14a3.875 3.875 0 0 0 0-7.75H4.259z"
                    })
                },
                i = (0, a(104509).wt)("arrowUTurnUpLeft", n, "default")
        },
        337439: (e, t, a) => {
            "use strict";
            async function n() {
                return (await a.e(32675).then(a.bind(a, 271417))).navigateToLibraryPage
            }
            a.d(t, {
                p: () => n
            })
        },
        337592: (e, t, a) => {
            "use strict";
            a.d(t, {
                Ki: () => i,
                d1: () => o,
                j8: () => l,
                s1: () => s,
                yX: () => r
            }), a(898992), a(737550), a(296540);
            var n = a(474848);

            function i(e) {
                if (!e) return;
                let t = (0, a(875472).b_)(e);
                return (0, n.jsx)(a(109939).sA, {
                    id: "coupon.duration.months",
                    defaultMessage: "{formattedMonths} months",
                    values: {
                        formattedMonths: (0, n.jsx)(a(109939).Gr, {
                            value: t.months
                        })
                    }
                })
            }

            function o(e, t, n, i) {
                return i && (0, a(90119).FV)(i, t) ? i : n && e === t && (0, a(90119).FV)(n.campaign, e) ? n.campaign : void 0
            }

            function r(e, t, n) {
                let i, o;
                if (e && (0, a(875472).rM)(e) && (i = (0, a(90119).MN)(e.offer.campaign, t), o = !!n && (0, a(90119).sZ)(e.offer.campaign, n), i && o)) return (0, a(875472).kd)(e)
            }

            function s(e) {
                return (0, a(875472).b_)(e).days
            }
            async function l({
                billingData: e,
                environment: t,
                sidebarSpaceStore: n,
                offerCampaign: i
            }) {
                return !n.id || !e || !n.getSetting("reach_block_limit_time") || (0, a(192159).Gm)(e) ? Promise.resolve(!1) : Promise.resolve(!!await a(617995).I.awaitData(t, {
                    offerCampaign: i,
                    spaceId: n.id
                }))
            }
        },
        345514: (e, t, a) => {
            "use strict";

            function n({
                environment: e,
                spaceStore: t
            }) {
                let i;
                return !!t && !((0, a(916804).I)(t) || (i = e.currentUser.id, t && i && (0, a(993077).dp)(t, i).isRestrictedMember())) && ((0, a(887788).h)(e) || !t.getDisableTeamCreation())
            }
            a.d(t, {
                s: () => n
            })
        },
        356938: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                arrowStraightDownIcon: () => i,
                iconDefinition: () => n
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 2.37 12.06 15.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10.625 3a.625.625 0 1 0-1.25 0v12.491l-4.333-4.333a.625.625 0 1 0-.884.884l5.4 5.4a.62.62 0 0 0 .884 0l5.4-5.4a.625.625 0 1 0-.884-.884l-4.333 4.333z"
                    })
                },
                i = (0, a(104509).wt)("arrowStraightDown", n, "default")
        },
        358839: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                arrowStraightUpIcon: () => i,
                iconDefinition: () => n
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 2.37 12.06 15.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.792 2.41a.6.6 0 0 0-.234.148l-5.4 5.4a.625.625 0 1 0 .884.884l4.333-4.333V17a.625.625 0 1 0 1.25 0V4.509l4.333 4.333a.625.625 0 1 0 .884-.884l-5.4-5.4a.62.62 0 0 0-.65-.147"
                    })
                },
                i = (0, a(104509).wt)("arrowStraightUp", n, "default")
        },
        378347: (e, t, a) => {
            "use strict";
            a(746518)({
                target: "Object",
                stat: !0
            }, {
                hasOwn: a(39297)
            })
        },
        383378: (e, t, a) => {
            "use strict";
            a.d(t, {
                $G: () => i,
                Hj: () => o,
                Nh: () => c,
                V9: () => s,
                WL: () => n,
                cv: () => d,
                nS: () => r,
                tz: () => l
            }), a(581454);
            let n = 30,
                i = 5;

            function o(e, t) {
                var a;
                return (null == (a = e.subscription) ? void 0 : a.trialEnd) !== void 0 && "reset_and_invoice" === t.subscription.type
            }

            function r(e, t, n) {
                return e ? (0, a(850640).W_)(e.toMillis(), n ? ? "long", t) : void 0
            }

            function s(e, t) {
                let n = a(906745).DateTime.fromMillis(e.endDateMs);
                return (t ? ? a(906745).DateTime.now()) > n
            }

            function l(e, t, n) {
                let i = a(906745).DateTime.fromMillis(e.endDateMs),
                    o = n ? ? a(906745).DateTime.now();
                return o < i && i.diff(o).as("days") <= t
            }

            function d(e) {
                let {
                    prices: t,
                    products: i,
                    interval: o,
                    memberCount: r,
                    currency: s = "USD",
                    trialLengthDays: l = n,
                    trialStartDate: d = a(906745).DateTime.now()
                } = e;
                return {
                    items: i.map(e => ({
                        price: (0, a(982473).vk)(t, {
                            product: e,
                            interval: o,
                            currency: s
                        }),
                        quantity: r
                    })),
                    trialEnd: d.plus({
                        days: l
                    })
                }
            }

            function c(e) {
                return (0, a(722371).Xk)(e, "plus") && (0, a(722371).Xk)(e, "ai")
            }
        },
        448988: (e, t, a) => {
            "use strict";
            a.d(t, {
                Wx: () => o,
                fM: () => n,
                sM: () => i
            });
            let n = new(a(815048)).O2("framer-motion", async () => await Promise.all([a.e(49806), a.e(79974), a.e(45414), a.e(37043)]).then(a.bind(a, 301716)));

            function i(e) {
                return e.useAnimation()
            }

            function o(e, ...t) {
                return e.useInView(...t)
            }
        },
        476081: (e, t, a) => {
            "use strict";
            async function n(e) {
                var t;
                let {
                    environment: n,
                    blockStore: i,
                    rect: o,
                    property_id: r,
                    from: s
                } = e;
                if (a(332190).A.hasContent()) return void(0, a(58931)._y)({
                    environment: n,
                    reason: "starting_new"
                });
                let l = a(496704).K.getRect(i);
                if (!l) return;
                let d = new(a(478597)).A(n, (0, a(226221).e)(i.pointer.spaceId)),
                    c = l.width,
                    u = l.height,
                    p = l.right - c;
                a(332190).A.setState({
                    open: !0,
                    rect: o || new DOMRect(p, l.top, c, u),
                    type: "block",
                    content: "comment",
                    blockStore: i,
                    blockId: i.id,
                    discussionInputStore: d,
                    property_id: r,
                    lastKnownBlockStore: i,
                    from: s
                }), (0, a(661767).V)({
                    element: null == (t = a(862921).A.UpdateSidebarCommentScroller) ? void 0 : t.getNode(),
                    environment: n,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), a(827862).A.setActiveWithSource("text_annotation"), await (0, a(745990).M)({
                    discussionInputStore: d,
                    environment: n
                }), a(65255).j4(n, {
                    from: s
                })
            }
            a.d(t, {
                l: () => n
            })
        },
        512342: (e, t, a) => {
            "use strict";
            a.d(t, {
                LB: () => o,
                VT: () => n,
                vr: () => i
            });
            let n = (0, a(109939).YK)({
                    askAI: {
                        defaultMessage: "Ask AI",
                        id: "id.completions.askAI"
                    },
                    genericHelpMeWrite: {
                        defaultMessage: "{filter}",
                        id: "id.completions.genericHelpMeWrite"
                    },
                    summarize: {
                        defaultMessage: "Summarize",
                        id: "id.completions.summarize"
                    },
                    findActionItems: {
                        defaultMessage: "Find action items",
                        id: "id.completions.findActionItems"
                    },
                    autofillSummary: {
                        defaultMessage: "Summary",
                        id: "id.completions.autofillSummary"
                    },
                    autofillTranslate: {
                        defaultMessage: "Translate",
                        id: "id.completions.autofillTranslate"
                    },
                    autofillExtract: {
                        defaultMessage: "Key info",
                        id: "id.completions.autofillExtract"
                    },
                    autofillCustom: {
                        defaultMessage: "Custom autofill",
                        id: "id.completions.autofillCustom"
                    }
                }),
                i = {
                    text: {
                        summarize: {
                            name: n.autofillSummary,
                            svg: a(636434).P
                        },
                        translate: {
                            name: n.autofillTranslate,
                            svg: a(740902).textTranslateIcon
                        },
                        extract: {
                            name: n.autofillExtract,
                            svg: a(774458).n
                        },
                        custom: {
                            name: n.autofillCustom,
                            svg: a(312528).x
                        }
                    },
                    select: {
                        select: {
                            name: n.autofillCustom,
                            svg: a(312528).x
                        }
                    },
                    multi_select: {
                        select: {
                            name: n.autofillCustom,
                            svg: a(312528).x
                        }
                    }
                };

            function o(e) {
                let {
                    origin: t
                } = e;
                if (t instanceof a(970831).B) {
                    let e = a(240414).T.findNodeFromStore(t);
                    return e ? ("table" === t.getType() && (e = e.querySelector(`.${a(962817).rb}.notion-table-block`) ? ? e), e.getBoundingClientRect()) : void 0
                }
                return t instanceof HTMLElement ? t.getBoundingClientRect() : t
            }
        },
        525765: (e, t, a) => {
            "use strict";
            a.d(t, {
                R: () => i
            }), a(296540);
            var n = a(474848);

            function i() {
                let e = (0, a(682985).O$)(a(358386).Iq);
                switch (e) {
                    case "unread_and_read":
                        return (0, n.jsx)(a(109939).sA, {
                            id: "inbox.unreadAndUnreadFilter.title",
                            defaultMessage: "Inbox"
                        });
                    case "unread_only":
                        return (0, n.jsx)(a(109939).sA, {
                            id: "inbox.unreadOnlyFilter.title",
                            defaultMessage: "Unread"
                        });
                    case "archived_only":
                        return (0, n.jsx)(a(109939).sA, {
                            id: "inbox.archivedFilter.title",
                            defaultMessage: "Archived"
                        });
                    case "all_updates":
                        return (0, n.jsx)(a(109939).sA, {
                            id: "inbox.allUpdatesFilter.title",
                            defaultMessage: "All workspace updates"
                        });
                    default:
                        return (0, a(722371).HB)(e)
                }
            }
        },
        540336: (e, t, a) => {
            "use strict";
            a.d(t, {
                Jy: () => h,
                LZ: () => _,
                vU: () => f
            }), a(581454);
            var n = a(296540),
                i = a(474848);
            let o = {
                    kORKVm: "xryxfnj",
                    kXHlph: "xw2csxc",
                    k1xSpc: "x78zum5",
                    kzqmXN: "xh8yej3",
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                r = {
                    kGVxlE: "xx4f2qb",
                    $$css: !0
                },
                s = {
                    kGuDYH: "xif65rj",
                    kZCmMZ: "xmzvs34",
                    kwRFfy: "xf159sx",
                    kY2c9j: "x1vjfegm",
                    $$css: !0
                },
                l = {
                    kGuDYH: "x1j61zf2",
                    kLKAdn: "x1nn3v0j",
                    kY2c9j: "xhtitgo",
                    kZKoxP: "xn3w4p2",
                    kC7eKd: "x1mmz80m",
                    $$css: !0
                },
                d = {
                    kZCmMZ: "xf7dkkf",
                    kwRFfy: "xv54qhq",
                    $$css: !0
                },
                c = {
                    kLKAdn: "x1yrsyyn",
                    kGO01o: "x10b6aqq",
                    khDVqt: "xuxw1ft",
                    k7Eaqz: "xeuugli",
                    kmuXW: "x2lah0s",
                    kMwMTN: "x1b8rd1j",
                    $$css: !0
                },
                u = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                p = {
                    k4EQJz: "xkaiwgt",
                    kVAEAm: "x10l6tqk",
                    krVfgx: "x1ey2m1c",
                    kLqNvP: "xrotz4w",
                    kt4wiu: "x11dcrhx",
                    $$css: !0
                },
                m = {
                    k1xSpc: "x78zum5",
                    kzQI83: "x1iyjqo2",
                    $$css: !0
                },
                g = {
                    selectedTab: {
                        color: a(632079).Tj.text.primary
                    }
                };

            function f(e, t) {
                if (e) return `${e}-tab-${t}`
            }

            function h(e, t) {
                if (e) return `${e}-tabpanel-${t}`
            }
            let _ = n.memo(function({
                tabs: e,
                selectedIndex: t,
                onChange: _,
                right: b,
                style: v,
                tabStyle: y,
                tabTitleStyle: S,
                selectedTabTitleStyle: x,
                tabBorderStyle: M,
                selectedTabStyle: w,
                readOnly: k,
                hideTabBorder: A,
                idPrefix: T
            }) {
                let j = (0, n.useContext)(a(649476).xu),
                    C = (0, a(616844).Y5)("left", 16),
                    I = (0, a(616844).Y5)("right", 16),
                    B = j.menuType === a(649476).gu.Popup;
                return (0, i.jsxs)("div", { ...a(952687).A.props(o, !A && r, a(986939).A.isMobile ? [l, B ? d : ((e, t) => [{
                        kZCmMZ: null != e ? "xnvo3vl" : e,
                        kwRFfy: null != t ? "x120eax6" : t,
                        $$css: !0
                    }, {
                        "--x-paddingInlineStart": "number" == typeof e ? e + "px" : null != e ? e : void 0,
                        "--x-paddingInlineEnd": "number" == typeof t ? t + "px" : null != t ? t : void 0
                    }])(C, I)] : s, v, {
                        $$css: !0,
                        className: "hide-scrollbar"
                    }),
                    children: [(0, i.jsx)("div", {
                        role: "tablist",
                        ...a(952687).A.props(m, "object" == typeof v && v && "flexDirection" in v && {
                            flexDirection: v.flexDirection
                        }),
                        children: e.map((e, o) => {
                            let r = o === t;
                            return (0, i.jsx)(n.Fragment, {
                                children: (0, i.jsxs)("div", { ...a(952687).A.props(c, y, r && u, r && g.selectedTab, r && w),
                                    children: [(0, i.jsx)(a(988022).p, {
                                        role: "tab",
                                        style: [S, r && x],
                                        onClick: () => _(o),
                                        disabled: k,
                                        "aria-selected": r,
                                        id: f(T, o),
                                        "aria-controls": h(T, o),
                                        colorPalette: r ? void 0 : "gray",
                                        children: e
                                    }), r ? (0, i.jsx)("div", { ...a(952687).A.props(p, M)
                                    }) : void 0]
                                }, `tabButton-${o}`)
                            }, o)
                        })
                    }), b ? (0, i.jsx)("div", {
                        className: "x1iyjqo2 x78zum5 x6s0dn4 x13a6bvl x1b8rd1j",
                        children: b
                    }) : void 0]
                })
            })
        },
        546846: (e, t, a) => {
            "use strict";
            a.d(t, {
                N: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.37 2.37 11.26 15.94",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6.653 2.375A.625.625 0 0 0 6.028 3v.474A3.62 3.62 0 0 0 7.24 6.179l.289.258-.157 1.603a4.625 4.625 0 0 0-2.997 4.33V13c0 .345.28.625.625.625h4.13v3.08c0 .158.035.317.1.46l.433.94a.35.35 0 0 0 .565.103l.063-.087.44-.956c.065-.142.1-.3.1-.46v-3.08H15c.345 0 .625-.28.625-.625v-.63a4.625 4.625 0 0 0-2.997-4.33l-.157-1.603.289-.258a3.63 3.63 0 0 0 1.212-2.705V3a.625.625 0 0 0-.625-.625zm1.42 2.871c-.468-.417-.75-1-.79-1.621h5.434a2.38 2.38 0 0 1-.79 1.621l-.525.47a.63.63 0 0 0-.206.527l.227 2.318a.63.63 0 0 0 .422.531l.237.08a3.375 3.375 0 0 1 2.293 3.197v.006h-8.75v-.006c0-1.447.922-2.733 2.293-3.197l.237-.08a.63.63 0 0 0 .422-.531l.227-2.318a.63.63 0 0 0-.206-.528z"
                    })
                },
                i = (0, a(104509).wt)("pin", n, "default")
        },
        595413: (e, t, a) => {
            "use strict";
            a.d(t, {
                f: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.1 11.57",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 1.95c-.27 0-.51.174-.594.431l-1.14 3.51H2.574a.625.625 0 0 0-.367 1.13l2.985 2.17-1.14 3.509a.625.625 0 0 0 .962.699L8 11.229l2.986 2.17a.625.625 0 0 0 .961-.699l-1.14-3.51 2.985-2.169a.625.625 0 0 0-.367-1.13h-3.69l-1.14-3.51A.625.625 0 0 0 8 1.95m-.686 4.759L8 4.597l.686 2.112a.625.625 0 0 0 .595.432h2.22L9.705 8.446a.625.625 0 0 0-.227.699l.686 2.112-1.797-1.305a.625.625 0 0 0-.734 0l-1.797 1.305.686-2.112a.625.625 0 0 0-.227-.699L4.5 7.141h2.22a.63.63 0 0 0 .595-.432"
                    })
                },
                i = (0, a(104509).wt)("starSmall", n, "small")
        },
        607372: (e, t, a) => {
            "use strict";
            a.d(t, {
                Mc: () => i,
                NM: () => n,
                Nf: () => r,
                dx: () => o
            }), a(16280), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(672577), a(737550);
            let n = new Set(["sites_custom_hostnames_add_on_monthly_usd_4", "sites_custom_hostnames_add_on_yearly_usd_36"]),
                i = ["ai_add_on_employee_discount_monthly", "ai_add_on_employee_discount_yearly"],
                o = ["ai_add_on_standard_sales_assisted", "ai_add_on_standard_sales_assisted_eur", "ai_add_on_standard_sales_assisted_gbp", "ai_add_on_standard_sales_assisted_jpy", "ai_add_on_standard_sales_assisted_krw", "ai_add_on_employee_discount_monthly", "ai_add_on_employee_discount_yearly", "ai_add_on_marketing_discount_monthly", "ai_add_on_marketing_discount_yearly", "sites_custom_hostnames_add_on_sales_assisted_gbp", "sites_custom_hostnames_add_on_sales_assisted_usd", "sites_custom_hostnames_add_on_sales_assisted_eur", "sites_custom_hostnames_add_on_sales_assisted_jpy", "sites_custom_hostnames_add_on_sales_assisted_krw", "ai_add_on_standard_trial_monthly_usd", "ai_add_on_standard_trial_yearly_usd", "ai_add_on_standard_trial_monthly_eur", "ai_add_on_standard_trial_yearly_eur", "ai_add_on_standard_trial_monthly_gbp", "ai_add_on_standard_trial_yearly_gbp", "ai_add_on_standard_trial_monthly_jpy", "ai_add_on_standard_trial_yearly_jpy", "ai_add_on_standard_trial_monthly_krw", "ai_add_on_standard_trial_yearly_krw", "free_ai_credit_pack_100_monthly", "ai_add_on_standard_monthly_10", "ai_add_on_standard_monthly_eur", "ai_add_on_standard_monthly_gbp", "ai_add_on_standard_monthly_jpy", "ai_add_on_standard_monthly_krw", "ai_add_on_standard_yearly_96", "ai_add_on_standard_yearly_eur", "ai_add_on_standard_yearly_gbp", "ai_add_on_standard_yearly_jpy", "ai_add_on_standard_yearly_krw", "sites_custom_hostnames_add_on_monthly_usd", "sites_custom_hostnames_add_on_yearly_usd", "sites_custom_hostnames_add_on_monthly_usd_4", "sites_custom_hostnames_add_on_yearly_usd_36", "sites_custom_hostnames_add_on_monthly_eur", "sites_custom_hostnames_add_on_yearly_eur", "sites_custom_hostnames_add_on_monthly_gbp", "sites_custom_hostnames_add_on_yearly_gbp", "sites_custom_hostnames_add_on_monthly_jpy", "sites_custom_hostnames_add_on_yearly_jpy", "sites_custom_hostnames_add_on_monthly_krw", "sites_custom_hostnames_add_on_yearly_krw", "ai_credit_pack_100_monthly_usd_revised", "ai_credit_pack_100_monthly_eur", "ai_credit_pack_100_monthly_gbp", "ai_credit_pack_100_monthly_jpy", "ai_credit_pack_100_monthly_krw"];

            function r(e) {
                return e === a(101787)._D_
            }
        },
        652134: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                aiFaceSmallIcon: () => o,
                iconDefinition: () => i
            }), a(296540);
            var n = a(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.43 11.63 12.81",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.204 1.93a3.47 3.47 0 0 0-4.097.39.625.625 0 1 0 .834.931 2.22 2.22 0 0 1 3.16.202.625.625 0 0 0 .944-.818 3.5 3.5 0 0 0-.84-.705m6.018.976A3.47 3.47 0 0 0 8.463 4.1l-5.077 8.476a.625.625 0 0 0 .437.938l4.41.715a.625.625 0 0 0 .2-1.234l-3.5-.568 4.602-7.685a2.22 2.22 0 0 1 3.822.02.625.625 0 1 0 1.08-.63 3.46 3.46 0 0 0-1.214-1.226m-7.83 2.105a1.094 1.094 0 1 0-.35 2.159 1.094 1.094 0 0 0 .35-2.159"
                        }), (0, n.jsx)("path", {
                            d: "M10.762 5.881a1.093 1.093 0 1 0-.35 2.159 1.093 1.093 0 0 0 .35-2.159"
                        })]
                    })
                },
                o = (0, a(104509).wt)("aiFaceSmall", i, "small")
        },
        661044: (e, t, a) => {
            "use strict";

            function n(e, t = !0) {
                t && function(e, t) {
                    if ((0, a(730994).Ku)(e), ("assistantCompletionPopup" === t.type || "agentCompletionPopup" === t.type) && ("results" === t.stage || "initialPrompt" === t.stage) && ("textSelection" === t.context.type || "cursor" === t.context.type)) {
                        let n = t.context.textSelection;
                        a(374176).default.afterNextFlush(() => {
                            (0, a(726923).setMultiSelection)({
                                multiSelection: n
                            }),
                            function(e) {
                                let {
                                    multiSelection: t,
                                    environment: n
                                } = e;
                                if (void 0 === t.start || void 0 === t.end || !Number.isFinite(t.start.index) || !Number.isFinite(t.end.index)) return;
                                let i = a(521595).n.findNodeFromStore(t.start.store),
                                    o = a(521595).n.findNodeFromStore(t.end.store);
                                if (!i || !o) return;
                                let r = (0, a(536614).vA)(i, t.start.index),
                                    s = (0, a(536614).vA)(o, t.end.index),
                                    l = document.createRange();
                                l.setStart(r.container, r.offset), l.setEnd(s.container, s.offset), a(239134).set(l, n.device)
                            }({
                                multiSelection: n,
                                environment: e
                            })
                        })
                    }
                }(e, a(304636).default.state), a(304636).default.setState({
                    type: "closed"
                })
            }
            async function i(e) {
                let {
                    environment: t,
                    from: n,
                    forceAgentWriter: i
                } = e, {
                    context: o,
                    prefilledValue: r,
                    sessionId: s
                } = e, {
                    assistantDependency: l
                } = await Promise.resolve().then(a.bind(a, 310639)), d = await l.load();
                if (!await d.assistantMenuActions.closeAssistantRightHandSideMenu({
                        environment: t
                    })) return;
                let c = {
                    type: "closed"
                };
                if ("closed" === a(304636).default.state.type && (o || (o = (0, a(420459).G4)()), o))
                    if (i || (0, a(828294).a)("agent_writer")) c = {
                        type: "agentCompletionPopup",
                        stage: "initialPrompt",
                        context: o,
                        from: n,
                        prefilledValue: e.prefilledTextValue ? ? (0, a(247438).x9d)(r ? ? ""),
                        pendingSkill: e.agentPrebuiltPromptType,
                        autoSubmit: e.autoSubmit,
                        onAccept: e.onAccept,
                        acceptButtonTooltipOverride: e.acceptButtonTooltipOverride
                    };
                    else {
                        var u;
                        r || (r = ""), s || (s = (0, a(818963).gC)()), c = {
                            type: "assistantCompletionPopup",
                            stage: "initialPrompt",
                            context: o,
                            from: n,
                            prefilledValue: r,
                            sessionId: s,
                            loading: !1,
                            hasErrored: !1
                        };
                        let e = (0, a(974410).f)(null == (u = o) ? void 0 : u.currentPage);
                        e && t.api.callApi({
                            eventName: "publishAiSession",
                            environment: t,
                            data: {
                                inference_type: "writer",
                                spaceId: e.id,
                                id: s,
                                metadata: {
                                    from: n
                                }
                            }
                        })
                    }
                a(304636).default.setState(c),
                    function(e) {
                        let {
                            environment: t,
                            promptForAnalytics: n
                        } = e, {
                            state: i
                        } = a(304636).default;
                        if ("assistantCompletionPopup" === i.type && "results" !== i.stage) {
                            a(218744).default.checkGate({
                                gateName: "mobile_assistant_prevent_clear_selection"
                            }) || (0, a(525779).clear)({
                                environment: t
                            });
                            let e = i.sessionId,
                                o = a(838448).default.getSessionContext(e);
                            a(942806).trackAICompletionPopupOpen(t, {
                                session_id: i.sessionId,
                                prompt_key: (null == n ? void 0 : n.key) ? ? "unknown",
                                from: i.from,
                                sessionContext: o
                            }), (0, a(259413).V)({
                                dismissed: !1,
                                environment: t,
                                trackCreateBlock: a(549960).vH
                            })
                        }
                    }(e)
            }

            function o(e) {
                let {
                    environment: t,
                    prefilledValue: n,
                    from: o
                } = e, r = (0, a(420459).gu)();
                r && i({
                    environment: t,
                    from: o ? ? "page_menu",
                    sessionId: a(92513).JW(),
                    context: r,
                    prefilledValue: n,
                    promptForAnalytics: void 0
                })
            }
            a.r(t), a.d(t, {
                closeInitialPromptAndEndSession: () => n,
                openHelpMeWriteGenericPopup: () => o,
                toggleInitialPrompt: () => i
            })
        },
        691886: (e, t, a) => {
            "use strict";
            a.d(t, {
                h: () => s
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var n = a(296540);

            function i(e) {
                a(449473).B8.setState({ ...a(449473).B8.state,
                    width: e.width
                }), (0, a(123538).Q)()
            }
            var o = a(474848);
            let r = new Set(["page", "secondary_sidebar"]);

            function s({
                type: e,
                sidebarRef: t
            }) {
                let p = (0, a(109939).tz)(),
                    _ = (0, a(533992).v3)(),
                    [b, v] = (0, a(768397).s)(),
                    y = (0, n.useRef)(null),
                    S = (0, a(421573).A)(b, y),
                    x = (0, n.useRef)(!1),
                    M = (0, n.useCallback)(() => {
                        u({
                            isResizing: !1
                        }, e)
                    }, [e]),
                    w = (0, n.useCallback)(() => {
                        var t, a;
                        return t = _, a = e, void(x.current || f(a, t), u({
                            isResizing: !1
                        }, a))
                    }, [_, e]),
                    k = (0, n.useCallback)(n => {
                        if (t.current) {
                            var o = n,
                                r = _,
                                s = t.current,
                                l = e,
                                d = x;
                            switch (a(239134).clear(r), d.current = !0, l) {
                                case "page":
                                    (0, a(137032).z)({
                                        width: m(o.currentX, s, l),
                                        environment: r
                                    });
                                    break;
                                case "update":
                                    i({
                                        width: m(o.currentX, s, l),
                                        environment: r
                                    });
                                    break;
                                case "peek":
                                    (0, a(17729).A)({
                                        width: m(o.currentX, s, l),
                                        environment: r
                                    });
                                    break;
                                case "secondary_sidebar":
                                    a(515492).Ay.setWidth(m(o.currentX, s, l));
                                    break;
                                default:
                                    (0, a(722371).HB)(l)
                            }
                            return
                        }
                    }, [_, e, t]),
                    A = (0, n.useCallback)(() => {
                        var t, n, i;
                        return t = _, n = e, i = x, void((0, a(471e3).I)({
                            environment: t
                        }), i.current = !1, u({ ...a(984858).sidebarResizingStore.state,
                            isResizing: !0
                        }, n))
                    }, [_, e]),
                    {
                        device: T
                    } = _,
                    j = (0, a(682985).O$)(a(395364).A),
                    C = (0, a(682985).K8)(() => ({
                        cursor: "col-resize",
                        height: "100%",
                        width: 12
                    }), [e]),
                    I = (0, a(682985).K8)(() => {
                        var t, n;
                        let i, o;
                        return t = e, n = _, i = (0, a(712358).K)(n), {
                            position: "absolute",
                            insetInlineStart: (o = "peek" === t || "update" === t) ? 0 : void 0,
                            insetInlineEnd: o ? void 0 : 0,
                            width: 1,
                            flexGrow: 0,
                            zIndex: "peek" === t ? 109 : 1,
                            top: i ? 0 : -1,
                            bottom: i ? 0 : -1,
                            pointerEvents: "auto",
                            backfaceVisibility: "hidden"
                        }
                    }, [e, _]),
                    B = (0, a(682985).K8)(() => {
                        var t, a;
                        let n, i, o = c(e);
                        return t = e, a = o, n = d(t), (i = l(t)) === n ? 0 : (a - i) / (n - i)
                    }, [e]),
                    z = (0, n.useRef)(!1),
                    [P, L] = (0, n.useState)(null);

                function R(e) {
                    L(e.clientY)
                }
                let E = (0, n.useCallback)(() => {
                    u({
                        isResizerHovered: z.current || v
                    }, e)
                }, [v, e]);

                function D() {
                    z.current = !0, E()
                }

                function H() {
                    z.current = !1, E()
                }(0, n.useEffect)(() => {
                    E()
                }, [v, E]);
                let U = (0, n.useCallback)(() => {
                        t.current && h(10, t.current, e, _)
                    }, [e, _, t]),
                    F = (0, n.useCallback)(() => {
                        t.current && h(-10, t.current, e, _)
                    }, [e, _, t]),
                    V = (0, a(619157).A1)() && !r.has(e) || !(0, a(619157).A1)() && r.has(e) ? "left" : "right",
                    N = "left" === V ? F : U,
                    W = "left" === V ? U : F,
                    O = (0, n.useCallback)(() => {
                        f(e, _)
                    }, [e, _]);
                return j || T.isChromebook ? null : (0, o.jsx)(a(369064).N, {
                    capture: v,
                    debugName: "SidebarResizer",
                    onLeft: N,
                    onRight: W,
                    onUp: a(763230).D_,
                    onDown: a(763230).D_,
                    onTab: a(763230).D_,
                    onUntab: a(763230).D_,
                    onEnter: O,
                    children: (0, o.jsx)(a(51831).m, {
                        content: () => (0, o.jsx)(g, {
                            type: e
                        }),
                        delayThreshold: 0,
                        originRectTransform: e => P ? new DOMRect(e.left, P, 0, 0) : e,
                        placement: "page" === e || "secondary_sidebar" === e ? "right" : "left",
                        originGap: 10,
                        children: e => (0, o.jsx)("div", {
                            style: I,
                            ...(0, a(63390).A)(e, {
                                onMouseMove: D,
                                onMouseLeave: H,
                                onMouseEnter: R
                            }),
                            children: (0, o.jsx)(a(245483).A, {
                                onDraggableDragStart: A,
                                onDraggableDragMove: k,
                                onDraggableDragEnd: w,
                                onDraggableDragCancel: M,
                                disableVerticalEdgeScroll: !0,
                                disableHorizontalEdgeScroll: !0,
                                render: e => (0, o.jsx)("div", {
                                    ref: S,
                                    role: "separator",
                                    tabIndex: 0,
                                    "aria-label": p.formatMessage({
                                        id: "sidebarResizer.tooltip.resizeLabel",
                                        defaultMessage: "Resize with left and right arrow keys"
                                    }),
                                    "aria-orientation": "vertical",
                                    "aria-valuenow": Math.round(100 * B),
                                    "aria-valuemin": 0,
                                    "aria-valuemax": 100,
                                    style: C,
                                    ...e
                                })
                            })
                        })
                    })
                })
            }

            function l(e) {
                switch (e) {
                    case "page":
                        return (0, a(828560).hw)() ? a(984858).SLIPPERY_SLOPE_SIDEBAR_MIN_WIDTH : a(984858).SIDEBAR_MIN_WIDTH;
                    case "update":
                        return a(449473).Iz;
                    case "peek":
                        return a(475097).SIDEPEEK_MIN_WIDTH;
                    case "secondary_sidebar":
                        return a(515492).WR;
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function d(e) {
                switch (e) {
                    case "page":
                        return (0, a(828560).hw)() ? 600 : 480;
                    case "secondary_sidebar":
                        return a(515492).y8;
                    case "update":
                        return a(132261).aL;
                    case "peek":
                        return (0, a(447036).QX)();
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function c(e) {
                switch (e) {
                    case "page":
                        return a(984858).sidebarWidthStore.state;
                    case "secondary_sidebar":
                        let t = a(984858).sidebarExpandedStore.state,
                            n = a(352202).n5();
                        return t ? a(984858).sidebarWidthStore.state + n : n;
                    case "update":
                        return a(449473).B8.state.width;
                    case "peek":
                        return a(475097).default.state.preferredSidePeekWidth;
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function u(e, t) {
                switch (t) {
                    case "page":
                        a(984858).sidebarResizingStore.update(t => ({ ...t,
                            ...e
                        }));
                        break;
                    case "update":
                        a(449473).B8.update(t => ({ ...t,
                            ...e
                        }));
                        break;
                    case "secondary_sidebar":
                        a(550830).default.update(t => ({ ...t,
                            ...e
                        }));
                        break;
                    case "peek":
                        a(984858).peekResizingStore.setState(e.isResizing ? ? !1);
                        break;
                    default:
                        (0, a(722371).HB)(t)
                }
            }

            function p(e, t) {
                let n = d(t),
                    i = l(t);
                return (0, a(627179).qE)({
                    value: e,
                    min: i,
                    max: n
                })
            }

            function m(e, t, n) {
                let i, o = (0, a(619157).A1)();
                switch (n) {
                    case "page":
                        i = o ? window.innerWidth - e : e;
                        break;
                    case "secondary_sidebar":
                        let r = a(984858).sidebarExpandedStore.state ? a(984858).sidebarWidthStore.state : 0;
                        i = o ? window.innerWidth - e - r : e - r;
                        break;
                    case "peek":
                    case "update":
                        let s = t.getBoundingClientRect();
                        i = o ? e - s.left : s.right - e;
                        break;
                    default:
                        (0, a(722371).HB)(n)
                }
                return p(i, n)
            }

            function g({
                type: e
            }) {
                let t, n = (0, a(533992).v3)(),
                    i = (0, a(682985).K8)(() => (function(e, t) {
                        switch (e) {
                            case "page":
                                return (0, a(712358).K)(t);
                            case "update":
                                return (0, a(953099).N)(t);
                            case "peek":
                                return a(475097).default.state.open;
                            case "secondary_sidebar":
                                return a(550830).default.isOpen();
                            default:
                                (0, a(722371).HB)(e)
                        }
                    })(e, n), [e, n]),
                    r = a(632079).Tj.text.inverseSecondary,
                    s = (0, o.jsx)(a(693592).A, {
                        name: "toggleSidebar"
                    }),
                    l = e => (0, o.jsx)("span", {
                        style: {
                            color: r
                        },
                        children: e
                    });
                if (i) switch (e) {
                    case "secondary_sidebar":
                    case "update":
                        t = (0, o.jsx)(a(109939).sA, {
                            defaultMessage: "Close <invertedcolor>Click</invertedcolor>",
                            id: "sidebarResizer.tooltip.closeMessage.noShortcut",
                            values: {
                                invertedcolor: l,
                                keyboardShortcut: s
                            }
                        });
                        break;
                    default:
                        t = (0, o.jsx)(a(109939).sA, {
                            defaultMessage: "Close <invertedcolor>Click or {keyboardShortcut}</invertedcolor>",
                            id: "sidebarResizer.tooltip.closeMessage",
                            values: {
                                invertedcolor: l,
                                keyboardShortcut: s
                            }
                        })
                } else t = (0, o.jsx)(a(109939).sA, {
                    defaultMessage: "Lock open <invertedcolor>Click or {keyboardShortcut}</invertedcolor>",
                    id: "sidebarResizer.tooltip.lockMessage",
                    values: {
                        invertedcolor: l,
                        keyboardShortcut: s
                    }
                });
                return (0, o.jsxs)(o.Fragment, {
                    children: [t ? (0, o.jsxs)(o.Fragment, {
                        children: [t, (0, o.jsx)("br", {})]
                    }) : null, (0, o.jsx)(a(109939).sA, {
                        defaultMessage: "Resize <invertedcolor>Drag</invertedcolor>",
                        id: "sidebarResizer.tooltip.resizeMessage",
                        values: {
                            invertedcolor: l,
                            keyboardShortcut: s
                        }
                    })]
                })
            }

            function f(e, t) {
                switch (e) {
                    case "page":
                        (0, a(16822).h)({
                            environment: t,
                            isExpanded: !a(984858).sidebarExpandedStore.state,
                            from: "sidebar_resizer",
                            saveDetailsSidebarPreference: !0
                        }), a(984858).sidebarOpenStore.setState(!1);
                        break;
                    case "update":
                        (0, a(911046).u)({
                            environment: t,
                            isExpanded: !(0, a(953099).N)(t),
                            from: "drag",
                            saveDetailsSidebarPreference: !0
                        });
                        break;
                    case "peek":
                        a(270912).VN({
                            environment: t,
                            from: "resizer_click"
                        });
                        break;
                    case "secondary_sidebar":
                        a(477810).VI({
                            environment: t
                        });
                        break;
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function h(e, t, n, o) {
                let r = c(n) + e;
                switch (n) {
                    case "page":
                        (0, a(137032).z)({
                            width: p(r, n),
                            environment: o
                        });
                        break;
                    case "update":
                        i({
                            width: p(r, n),
                            environment: o
                        });
                        break;
                    case "peek":
                        (0, a(17729).A)({
                            width: p(r, n),
                            environment: o
                        });
                        break;
                    case "secondary_sidebar":
                        let s = a(984858).sidebarExpandedStore.state ? a(984858).sidebarWidthStore.state : 0;
                        a(515492).Ay.setWidth(p(r - s, n));
                        break;
                    default:
                        (0, a(722371).HB)(n)
                }
            }
        },
        708009: (e, t) => {
            "use strict";

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var n, i = "https://js.stripe.com/v3",
                o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                r = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
                s = function() {
                    for (var e = document.querySelectorAll('script[src^="'.concat(i, '"]')), t = 0; t < e.length; t++) {
                        var a = e[t];
                        if (o.test(a.src)) return a
                    }
                    return null
                },
                l = function(e) {
                    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                        a = document.createElement("script");
                    a.src = "".concat(i).concat(t);
                    var n = document.head || document.body;
                    if (!n) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                    return n.appendChild(a), a
                },
                d = function(e, t) {
                    e && e._registerWrapper && e._registerWrapper({
                        name: "stripe-js",
                        version: "1.52.1",
                        startTime: t
                    })
                },
                c = null,
                u = function(e, t, a) {
                    if (null === e) return null;
                    var n = e.apply(void 0, t);
                    return d(n, a), n
                },
                p = function(e) {
                    var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
                    if (null === e || "object" !== a(e)) throw Error(t);
                    if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
                    throw Error(t)
                },
                m = !1,
                g = function() {
                    for (var e, t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                    m = !0;
                    var o = Date.now();
                    return (e = n, null !== c ? c : c = new Promise(function(t, a) {
                        if ("u" < typeof window || "u" < typeof document) return void t(null);
                        if (window.Stripe && e && console.warn(r), window.Stripe) return void t(window.Stripe);
                        try {
                            var n = s();
                            n && e ? console.warn(r) : n || (n = l(e)), n.addEventListener("load", function() {
                                window.Stripe ? t(window.Stripe) : a(Error("Stripe.js not available"))
                            }), n.addEventListener("error", function() {
                                a(Error("Failed to load Stripe.js"))
                            })
                        } catch (e) {
                            a(e);
                            return
                        }
                    })).then(function(e) {
                        return u(e, a, o)
                    })
                };
            g.setLoadParameters = function(e) {
                if (!(m && n && Object.keys(p(e)).reduce(function(t, a) {
                        var i;
                        return t && e[a] === (null == (i = n) ? void 0 : i[a])
                    }, !0))) {
                    if (m) throw Error("You cannot change load parameters after calling loadStripe");
                    n = p(e)
                }
            }, t.loadStripe = g
        },
        741489: (e, t, a) => {
            "use strict";
            a.d(t, {
                j: () => i
            }), a(296540);
            var n = a(474848);

            function i({
                title: e,
                titleId: t,
                byline: o,
                bylineId: r,
                badge: s
            }) {
                return (0, n.jsxs)(a(4458).VP, {
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 4,
                    children: [(0, n.jsxs)(a(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        children: [(0, n.jsx)(a(111010).D, {
                            id: t,
                            styleKey: a(986939).A.isMobile ? "captionMedium" : "bodyMedium",
                            colorVariant: "primary",
                            children: e
                        }), s]
                    }), o ? (0, n.jsx)(a(111010).D, {
                        id: r,
                        styleKey: a(986939).A.isMobile ? "captionSmRegular" : "bodySmRegular",
                        colorVariant: "secondary",
                        style: {
                            textWrap: "pretty"
                        },
                        children: o
                    }) : void 0]
                })
            }
        },
        770408: (e, t, a) => {
            "use strict";
            a.d(t, {
                s: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.56 0.68 12.88 12.7",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.8.788a1.65 1.65 0 0 0-2.013.73l-.274.563c-.143.237-.29.53-.427.802v.002l-.103.203c-.178.35-.336.639-.483.833L4.823 5.709H2.914c-.746 0-1.352.605-1.352 1.351v4.181c0 .747.606 1.352 1.352 1.352h2.657l.945.324.01.005h.001c.598.3 1.252.454 1.923.454h3.425a1.594 1.594 0 0 0 1.562-1.912c.432-.286.714-.779.714-1.333 0-.213-.044-.413-.119-.593.251-.278.406-.645.406-1.058a1.56 1.56 0 0 0-.284-.901c.12-.218.19-.47.19-.742 0-.88-.713-1.593-1.593-1.593H9.94q.05-.106.11-.225l.002-.004c.11-.222.243-.491.338-.817v-.002l.403-1.41A1.65 1.65 0 0 0 9.808.791zM8.623 2.655l.27-.556a.4.4 0 0 1 .464-.141.4.4 0 0 1 .235.483L9.19 3.85a3.5 3.5 0 0 1-.26.612l-.011.025c-.106.214-.236.475-.33.787a.946.946 0 0 0 .907 1.219h3.255c.19 0 .344.154.344.343 0 .1-.052.198-.157.266a.625.625 0 0 0 .066 1.087.32.32 0 0 1 .184.29.33.33 0 0 1-.231.317.625.625 0 0 0-.192 1.073.34.34 0 0 1 .136.261.34.34 0 0 1-.336.344.625.625 0 0 0-.452 1.057.344.344 0 0 1-.238.594H8.45c-.45 0-.886-.097-1.29-.286a.6.6 0 0 0-.151-.076l-1.131-.387a.6.6 0 0 0-.203-.034h-.006V6.634l1.764-1.88.037-.043c.236-.302.449-.705.627-1.057l.117-.232a10 10 0 0 1 .41-.767M2.812 7.06c0-.056.046-.101.102-.101H4.52v4.384H2.914a.1.1 0 0 1-.102-.102z"
                    })
                },
                i = (0, a(104509).wt)("handThumbsUpSmall", n, "small")
        },
        775070: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => i
            }), a(296540);
            var n = a(474848);
            let i = function({
                loading: e,
                onLoadMore: t,
                loadMoreOffsetThreshold: i,
                resultSize: o,
                fetchSize: r
            }) {
                return (0, n.jsx)(a(636255).A, {
                    onChange: a => (function(e) {
                        let {
                            offset: t,
                            loading: a,
                            onLoadMore: n,
                            loadMoreOffsetThreshold: i,
                            resultSize: o,
                            fetchSize: r
                        } = e;
                        a || t > (i || 200) || (void 0 === o || void 0 === r || o >= r) && n()
                    })({
                        offset: a,
                        loading: e,
                        onLoadMore: t,
                        loadMoreOffsetThreshold: i,
                        resultSize: o,
                        fetchSize: r
                    })
                })
            }
        },
        822284: (e, t, a) => {
            "use strict";
            a.d(t, {
                BS: () => o,
                BusinessTrialEndingModalStore: () => i,
                HL: () => n,
                ZJ: () => s,
                jz: () => r
            });
            let n = a(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    potentialCampaigns: []
                }, {
                    name: "BusinessTrialStartModalStore"
                }),
                i = a(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    recentPageStores: [],
                    verifiedPageStores: [],
                    teamStores: [],
                    workspaceUserStores: [],
                    connectedApps: [],
                    workflowStores: [],
                    numAiMeetingMinutes: 0,
                    modalState: "initial"
                }, {
                    name: "BusinessTrialEndingModalStore"
                }),
                o = a(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: [],
                    onSecondaryButtonClick: void 0
                }, {
                    name: "BusinessTrialLossAversionModalStore"
                }),
                r = a(546605).Store.createValue({
                    open: !1,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: []
                }, {
                    name: "BusinessTrialExplorePlanModalStore"
                }),
                s = a(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    trialCampaign: void 0,
                    showBillingIntervalSelect: !1
                }, {
                    name: "BusinessTrialCCUpfrontModalStore"
                })
        },
        852864: (e, t, a) => {
            "use strict";

            function n({
                spaceStore: e,
                userId: t,
                environment: i
            }) {
                let o = new(a(736309)).d(i, {
                    table: a(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return o ? a(994797).SpaceViewStore.createChildStore(e, {
                    id: o.id,
                    table: a(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
            a.d(t, {
                H: () => n
            }), a(898992), a(672577)
        },
        858446: (e, t, a) => {
            "use strict";
            a.d(t, {
                Q: () => b
            }), a(944114);
            var n = a(296540),
                i = a(474848);

            function o() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)(),
                    o = (0, n.useCallback)(() => {
                        a(477810).VI({
                            environment: e
                        })
                    }, [e]),
                    r = a(352202).zg(),
                    s = t.formatMessage({
                        id: "secondarySidebar.close.tooltip",
                        defaultMessage: "Close"
                    });
                return (0, i.jsx)(a(51831).m, {
                    content: () => s,
                    placement: "bottom",
                    alignment: "center",
                    delayThreshold: 0,
                    originGap: 6,
                    children: e => (0, i.jsx)(a(374533).A, {
                        ariaLabel: s,
                        onClick: o,
                        icon: a(437959).S,
                        colorVariant: "primary",
                        iconStyle: r.icon,
                        style: r.button,
                        ...e
                    })
                })
            }
            let r = (0, a(109939).YK)({
                newTeamPlusIcon: {
                    id: "sidebarTeamBrowser.newTeam.button",
                    defaultMessage: "New teamspace"
                }
            });

            function s() {
                let e = (0, a(109939).tz)(),
                    t = a(352202).zg(),
                    o = (0, n.useCallback)(() => (0, a(198347).v)("team_browser"), []);
                return (0, i.jsx)(a(51831).m, {
                    content: () => e.formatMessage(r.newTeamPlusIcon),
                    placement: "bottom",
                    alignment: "center",
                    delayThreshold: 0,
                    originGap: 6,
                    children: n => (0, i.jsx)(a(374533).A, { ...n,
                        icon: a(581923).plusIcon,
                        iconStyle: t.icon,
                        style: t.button,
                        ariaLabel: e.formatMessage(r.newTeamPlusIcon),
                        onClick: o
                    })
                })
            }
            let l = {
                container: { ...(0, a(1249).g)({
                        drag: !0
                    }),
                    flexShrink: 0,
                    height: 30,
                    width: "100%"
                }
            };

            function d(e) {
                let t = (0, a(533992).v3)(),
                    {
                        isElectron: n
                    } = (0, a(533992).Y0)(),
                    o = (0, a(682985).O$)(a(584257).b),
                    r = (0, a(682985).K8)(() => (0, a(712358).K)(t), [t]);
                return o || r || !n ? null : (0, i.jsx)("div", {
                    style: l.container
                })
            }

            function c() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(682985).O$)(a(584257).b);
                return (0, a(682985).K8)(() => !(0, a(712358).K)(e) && !t, [e, t]) ? (0, i.jsx)(a(457196).z, {}) : null
            }

            function u(e) {
                let {
                    type: t
                } = e, o = (0, a(533992).v3)(), {
                    peekModeTooltipMessage: r,
                    panelModeTooltipMessage: s
                } = function(e, t) {
                    let n = (0, a(109939).tz)();
                    if (t) return {
                        peekModeTooltipMessage: n.formatMessage({
                            id: "secondarySidebar.pin.tooltip",
                            defaultMessage: "Pin"
                        }),
                        panelModeTooltipMessage: n.formatMessage({
                            id: "secondarySidebar.unpin.tooltip",
                            defaultMessage: "Unpin"
                        })
                    };
                    let i = {
                        peekModeTooltipMessage: n.formatMessage({
                            id: "secondarySidebar.lockInbox.tooltip",
                            defaultMessage: "Lock inbox pane open"
                        }),
                        panelModeTooltipMessage: n.formatMessage({
                            id: "secondarySidebar.closeInbox.tooltip",
                            defaultMessage: "Close inbox pane"
                        })
                    };
                    switch (e) {
                        case "inbox":
                        case "none":
                            return i;
                        case "assistant":
                            return {
                                peekModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.lockChatHistory.tooltip",
                                    defaultMessage: "Lock chat history open"
                                }),
                                panelModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.closeChatHistory.tooltip",
                                    defaultMessage: "Close chat history"
                                })
                            };
                        case "slippery_slope_chat":
                            return {
                                peekModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.lockSlipperySlopeChat.tooltip",
                                    defaultMessage: "Lock chat pane open"
                                }),
                                panelModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.closeSlipperySlopeChat.tooltip",
                                    defaultMessage: "Close chat pane"
                                })
                            };
                        case "private_pages":
                            return {
                                peekModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.lockPrivate.tooltip",
                                    defaultMessage: "Lock private pane open"
                                }),
                                panelModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.closePrivate.tooltip",
                                    defaultMessage: "Close private pane"
                                })
                            };
                        case "shared_pages":
                            return {
                                peekModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.lockShared.tooltip",
                                    defaultMessage: "Lock shared pane open"
                                }),
                                panelModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.closeShared.tooltip",
                                    defaultMessage: "Close shared pane"
                                })
                            };
                        case "favorites_pages":
                            return {
                                peekModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.lockFavorites.tooltip",
                                    defaultMessage: "Lock favorites pane open"
                                }),
                                panelModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.closeFavorites.tooltip",
                                    defaultMessage: "Close favorites pane"
                                })
                            };
                        case "teams":
                            return {
                                peekModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.lockTeams.tooltip",
                                    defaultMessage: "Lock teamspaces pane open"
                                }),
                                panelModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.closeTeams.tooltip",
                                    defaultMessage: "Close teamspaces pane"
                                })
                            };
                        case "agents":
                            return {
                                peekModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.lockAgents.tooltip",
                                    defaultMessage: "Lock agents pane open"
                                }),
                                panelModeTooltipMessage: n.formatMessage({
                                    id: "secondarySidebar.closeAgents.tooltip",
                                    defaultMessage: "Close agents pane"
                                })
                            };
                        default:
                            (0, a(722371).HB)(e)
                    }
                }(t, !0), l = (0, n.useCallback)(() => {
                    let e = a(477810).oe();
                    switch (t) {
                        case "inbox":
                            let n = {
                                tab: (0, a(729508).dl)(),
                                unread_notifications_count: a(543861).j0(),
                                sessionId: a(825109).Ay.state.sessionId,
                                ...(0, a(403884).h)({
                                    environment: o
                                })
                            };
                            (0, a(283674).x7)(o, {
                                view_type: e,
                                section: t,
                                ...n
                            });
                            return;
                        case "private_pages":
                        case "shared_pages":
                        case "favorites_pages":
                        case "assistant":
                        case "teams":
                        case "agents":
                            (0, a(283674).x7)(o, {
                                view_type: e,
                                section: t,
                                ...(0, a(403884).h)({
                                    environment: o
                                })
                            });
                            return;
                        case "slippery_slope_chat":
                        case "none":
                            return;
                        default:
                            (0, a(722371).HB)(t)
                    }
                }, [o, !0, t]), d = (0, a(682985).K8)(() => a(550830).default.state.mode, []), c = a(352202).zg(), u = ((0, a(960253).I)(() => ({
                    icon: {
                        transform: "rotate(180deg)",
                        ...c.icon
                    }
                }), [c]), "peek" === d ? r : s), p = "panel" === d ? a(113867)._ : a(546846).N, m = c.icon;
                return (0, i.jsx)(a(51831).m, {
                    content: () => u,
                    placement: "bottom",
                    alignment: "center",
                    delayThreshold: 0,
                    originGap: 6,
                    children: e => (0, i.jsx)(a(374533).A, {
                        ariaLabel: u,
                        onClick: l,
                        icon: p,
                        colorVariant: "primary",
                        iconStyle: m,
                        style: c.button,
                        ...e
                    })
                })
            }
            let p = {
                header: {
                    display: "flex",
                    alignItems: "center",
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16,
                    paddingTop: 10,
                    fontSize: 12,
                    lineHeight: "16px",
                    fontWeight: a(699422).Wy.semibold,
                    color: a(632079).Tj.text.secondary
                }
            };

            function m(e) {
                let {
                    type: t,
                    spaceViewStore: n,
                    onClick: o
                } = e, r = (0, a(533992).v3)(), s = (0, a(67499).S)(), l = (0, a(165668).useSortActions)({
                    type: t,
                    spaceViewStore: n,
                    onSelect: o,
                    outlinerLocation: "pane"
                }), d = [(0, a(233319).gy)({
                    key: "sort",
                    actions: l
                })];
                return (0, i.jsxs)(a(747369).A, {
                    menuType: a(649476).gu.Popup,
                    children: [(0, i.jsx)(a(324489).V, {
                        style: p.header,
                        children: (0, i.jsx)(a(109939).sA, {
                            id: "secondarySidebar.sortMenu.headerLabel",
                            defaultMessage: "Sort"
                        })
                    }), (0, i.jsx)(a(530500).A, {
                        context: {
                            blocks: [],
                            environment: r,
                            publicEditMode: void 0,
                            analyticsFrom: "sidebar_sort_menu",
                            pageContext: s
                        },
                        sections: d,
                        initialFocus: void 0
                    })]
                })
            }
            let g = (0, a(109939).YK)({
                    favorites: {
                        defaultMessage: "Sort favorite pages",
                        id: "secondarySidebar.sortButton.tooltip.favorites"
                    },
                    teamspaces: {
                        defaultMessage: "Sort teamspace pages",
                        id: "secondarySidebar.sortButton.tooltip.teamspaces"
                    },
                    shared: {
                        defaultMessage: "Sort shared pages",
                        id: "secondarySidebar.sortButton.tooltip.shared"
                    },
                    private: {
                        defaultMessage: "Sort private pages",
                        id: "secondarySidebar.sortButton.tooltip.private"
                    },
                    workspace: {
                        defaultMessage: "Sort workspace pages",
                        id: "secondarySidebar.sortButton.tooltip.workspace"
                    },
                    agents: {
                        defaultMessage: "Sort agents",
                        id: "secondarySidebar.sortButton.tooltip.agents"
                    },
                    notion_apps: {
                        defaultMessage: "Sort apps",
                        id: "secondarySidebar.sortButton.tooltip.notionApps"
                    },
                    meetings_today: {
                        defaultMessage: "Sort meetings",
                        id: "secondarySidebar.sortButton.tooltip.meetingsToday"
                    },
                    myMeetings: {
                        defaultMessage: "Sort meetings",
                        id: "secondarySidebar.sortButton.tooltip.myMeetings"
                    },
                    recents: {
                        defaultMessage: "Sort recent pages",
                        id: "secondarySidebar.sortButton.tooltip.recents"
                    }
                }),
                f = {
                    icon: {
                        fill: a(632079).Tj.icon.primary,
                        width: a(104509).Ev.default,
                        height: a(104509).Ev.default
                    }
                };

            function h({
                type: e
            }) {
                let t = (0, a(109939).tz)(),
                    n = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore),
                    o = (0, a(352202).zg)();
                if (!n) return (0, i.jsx)(i.Fragment, {});
                let r = t.formatMessage(g[e]);
                return (0, i.jsx)(a(656252).A, {
                    popupType: a(656252).z.Popup,
                    content: t => (0, i.jsx)(m, {
                        onClick: t.close,
                        type: e,
                        spaceViewStore: n
                    }),
                    alignmentToOrigin: "start",
                    originGap: 2,
                    children: ({
                        onClick: e
                    }) => (0, i.jsx)(a(51831).m, {
                        content: () => r,
                        placement: "bottom",
                        alignment: "center",
                        delayThreshold: 0,
                        originGap: 6,
                        children: t => (0, i.jsx)(a(374533).A, {
                            ariaLabel: r,
                            icon: a(300921).arrowUpDownIcon,
                            iconStyle: f.icon,
                            onClick: e,
                            style: o.button,
                            ...t
                        })
                    })
                })
            }
            let _ = {
                createPageButtonIcon: {
                    fill: a(632079).Tj.icon.primary
                }
            };

            function b(e) {
                let {
                    type: t,
                    titleId: r
                } = e, l = (0, a(533992).v3)(), {
                    isElectron: p,
                    isTablet: m
                } = (0, a(533992).Y0)(), g = (0, a(682985).O$)(a(584257).b), f = (0, a(960253).I)(() => ({
                    header: {
                        paddingTop: m ? 32 : 8,
                        paddingInlineStart: 12,
                        paddingInlineEnd: 10,
                        paddingBottom: 8,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    },
                    title: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0,
                        fontSize: m ? 16 : 14,
                        fontWeight: a(699422).Wy.medium,
                        flex: 1,
                        minWidth: 0
                    },
                    titleText: {
                        font: "inherit",
                        margin: 0,
                        display: "flex",
                        gap: 4,
                        flex: 1,
                        minWidth: 0,
                        ..."slippery_slope_chat" !== t && {
                            paddingInline: 6
                        }
                    }
                }), [m, t]), b = (0, n.useCallback)(() => {
                    "peek" === a(550830).default.state.mode && (0, a(477810).VI)({
                        environment: l
                    })
                }, [l]), M = (0, a(682985).K8)(() => {
                    let e = a(728372).AppStoreSidebarSpaceStore.state;
                    return !!e && (0, a(345514).s)({
                        environment: l,
                        spaceStore: e
                    })
                }, [l]), w = [];
                switch (t) {
                    case "inbox":
                        m || (w.push((0, i.jsx)(u, {
                            type: t
                        }, "mode_toggle")), w.push((0, i.jsx)(o, {}, "close"))), w.push((0, i.jsx)(a(162103).F, {}, "inbox_filter"), (0, i.jsx)(a(162948).C, {}, "inbox_ellipsis"));
                        break;
                    case "private_pages":
                        m || (w.push((0, i.jsx)(u, {
                            type: t
                        }, "mode_toggle")), w.push((0, i.jsx)(o, {}, "close"))), w.push((0, i.jsx)(h, {
                            type: "private"
                        }, "sort"), (0, i.jsx)(a(784665).K, {
                            from: "sidebar_private_pane",
                            onClick: b,
                            iconStyle: _.createPageButtonIcon
                        }, "create_page"));
                        break;
                    case "shared_pages":
                        m || (w.push((0, i.jsx)(u, {
                            type: t
                        }, "mode_toggle")), w.push((0, i.jsx)(o, {}, "close"))), w.push((0, i.jsx)(h, {
                            type: "shared"
                        }, "sort"));
                        break;
                    case "favorites_pages":
                        m || (w.push((0, i.jsx)(u, {
                            type: t
                        }, "mode_toggle")), w.push((0, i.jsx)(o, {}, "close")));
                        break;
                    case "assistant":
                        m || (w.push((0, i.jsx)(u, {
                            type: t
                        }, "mode_toggle")), w.push((0, i.jsx)(o, {}, "close"))), w.push((0, i.jsx)(S, {}, "new_chat"));
                        break;
                    case "teams":
                        m || (w.push((0, i.jsx)(u, {
                            type: t
                        }, "mode_toggle")), w.push((0, i.jsx)(o, {}, "close"))), M && w.push((0, i.jsx)(s, {}, "add_team"));
                        break;
                    case "agents":
                        m || (w.push((0, i.jsx)(u, {
                            type: t
                        }, "mode_toggle")), w.push((0, i.jsx)(o, {}, "close"))), w.push((0, i.jsx)(y, {}, "new_agent"));
                        break;
                    case "slippery_slope_chat":
                        m || (w.push((0, i.jsx)(u, {
                            type: t
                        }, "mode_toggle")), w.push((0, i.jsx)(o, {}, "close"))), w.push((0, i.jsx)(j, {}, "new_chat"), (0, i.jsx)(I, {}, "open_full_page"));
                        break;
                    case "none":
                        break;
                    default:
                        (0, a(722371).HB)(t)
                }
                return (0, i.jsxs)(a(4458).VP, {
                    className: p && !g ? a(828432).sbV : void 0,
                    children: [(0, i.jsx)(d, {
                        type: t
                    }), (0, i.jsxs)("div", {
                        style: f.header,
                        children: [(0, i.jsxs)("div", {
                            style: f.title,
                            children: [(0, i.jsx)(c, {}), (0, i.jsxs)("h2", {
                                style: f.titleText,
                                id: r,
                                children: [(0, i.jsx)(v, {
                                    type: t
                                }), "agents" === t ? (0, i.jsx)(x, {}) : void 0]
                            })]
                        }), (0, i.jsx)(a(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            flexShrink: 0,
                            children: w
                        })]
                    })]
                })
            }

            function v(e) {
                let {
                    type: t
                } = e;
                switch (t) {
                    case "inbox":
                        return (0, i.jsx)(a(525765).R, {});
                    case "private_pages":
                        return (0, i.jsx)(a(109939).sA, {
                            id: "secondarySidebarHeader.title.privatePages",
                            defaultMessage: "Private"
                        });
                    case "shared_pages":
                        return (0, i.jsx)(a(109939).sA, {
                            id: "secondarySidebarHeader.title.sharedPages",
                            defaultMessage: "Shared"
                        });
                    case "favorites_pages":
                        return (0, i.jsx)(a(109939).sA, {
                            id: "secondarySidebarHeader.title.favoritesPages",
                            defaultMessage: "Favorites"
                        });
                    case "assistant":
                        return (0, i.jsx)(a(109939).sA, {
                            id: "secondarySidebarHeader.title.assistantChatHistory",
                            defaultMessage: "Chat history"
                        });
                    case "teams":
                        return (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "All teamspaces",
                            id: "sidebarTeamBrowserHeader.title"
                        });
                    case "agents":
                        return (0, i.jsx)(a(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            children: (0, i.jsx)(a(109939).sA, {
                                id: "secondarySidebarHeader.title.agents",
                                defaultMessage: "Agents"
                            })
                        });
                    case "slippery_slope_chat":
                        return (0, i.jsx)(A, {});
                    case "none":
                        return null;
                    default:
                        (0, a(722371).HB)(t)
                }
            }

            function y() {
                let e = (0, a(109939).tz)(),
                    t = (0, a(352202).zg)(),
                    {
                        canCreate: o,
                        tooltipMessage: r
                    } = (0, a(639938).$)(),
                    s = (0, n.useCallback)(async () => {
                        let e = await a(178801).oQ.agentActions.load(),
                            t = a(92513).JW();
                        await e.showCreationModal({
                            analytics: {
                                flowId: t,
                                origin: "secondary_sidebar_new_agent"
                            }
                        })
                    }, []),
                    {
                        handleClick: l,
                        shouldHide: d
                    } = (0, a(999951).U)({
                        action: s,
                        source: "new_custom_agents_sidebar"
                    }),
                    c = e.formatMessage({
                        id: "agents.topbar.newAgent",
                        defaultMessage: "Create new agent"
                    }),
                    u = !o;
                return d ? null : (0, i.jsx)(a(51831).m, {
                    content: () => u ? r : c,
                    placement: "bottom",
                    alignment: "center",
                    delayThreshold: 0,
                    originGap: 6,
                    children: e => (0, i.jsx)(a(374533).A, { ...e,
                        icon: a(581923).plusIcon,
                        colorVariant: "primary",
                        iconStyle: t.icon,
                        style: t.button,
                        onClick: l,
                        ariaLabel: c,
                        disabled: u,
                        disabledFeedback: !0
                    })
                })
            }

            function S() {
                let e = (0, a(109939).tz)(),
                    t = (0, a(352202).zg)(),
                    n = (0, a(533992).v3)(),
                    o = (0, a(548124).useThreadStoreFromCurrentRoute)(),
                    r = e.formatMessage(M.newChat);
                return (0, i.jsx)(a(51831).m, {
                    content: () => r,
                    placement: "bottom",
                    alignment: "center",
                    delayThreshold: 0,
                    originGap: 6,
                    children: e => (0, i.jsx)(a(374533).A, { ...e,
                        icon: a(581923).plusIcon,
                        colorVariant: "primary",
                        iconStyle: t.icon,
                        style: t.button,
                        onClick: () => (0, a(928482).performSecondarySidebarAction)({
                            environment: n,
                            action: () => {
                                (0, a(757688).Wq)({
                                    environment: n,
                                    clientStore: a(57168).defaultClientAIChatStore
                                }), (0, a(862451).navigateToInferenceTranscriptRoute)({
                                    environment: n,
                                    oldThreadStore: o,
                                    newThreadStore: void 0
                                })
                            }
                        }),
                        ariaLabel: r
                    })
                })
            }

            function x() {
                let e = (0, a(345776).T)(),
                    t = (0, a(972740).L)(),
                    {
                        hasExistingAgents: n
                    } = (0, a(213538).H)(),
                    o = (0, a(217844)._)({
                        name: "custom_agents",
                        spaceId: null == t ? void 0 : t.id,
                        userId: e
                    }),
                    r = null == o ? void 0 : o.upsell;
                return n && (0, a(94418).Pd)(o) && r && "none" !== r.type ? (0, i.jsx)(a(754951).UpgradeButton, {
                    display: "text",
                    size: "small",
                    source: "custom_agents_sidebar",
                    upsell: r,
                    spaceStore: t,
                    customMessages: {
                        eligible_to_purchase: M.upgrade,
                        eligible_for_trial: M.upgrade,
                        sales_eligible: M.request,
                        sales_assisted: M.request,
                        eligible_to_request: M.request,
                        request_pending: M.pending,
                        not_eligible: M.request
                    }
                }) : null
            }
            let M = (0, a(109939).YK)({
                    upgrade: {
                        id: "secondarySidebarHeader.upgradeButton.upgrade",
                        defaultMessage: "<highlight>Upgrade</highlight>"
                    },
                    request: {
                        id: "secondarySidebarHeader.upgradeButton.request",
                        defaultMessage: "<highlight>Request</highlight>"
                    },
                    pending: {
                        id: "secondarySidebarHeader.upgradeButton.pending",
                        defaultMessage: "<highlight>Requested</highlight>"
                    },
                    newChat: {
                        id: "assistantFullPageChat.newChat.ariaLabel",
                        defaultMessage: "Start new chat"
                    }
                }),
                w = {
                    width: 24,
                    height: 24,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    overflow: "visible"
                },
                k = {
                    transform: "scale(1.1)"
                };

            function A() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(972740).L)(),
                    o = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore),
                    r = (0, a(463226).DV)(o),
                    [s, l] = (0, a(848135).B)(),
                    {
                        threadStore: d,
                        threadStoreState: c
                    } = (0, a(682985).K8)(() => ({
                        threadStore: a(550830).default.state.slipperySlopeChatThreadStore,
                        threadStoreState: a(550830).default.state.slipperySlopeChatThreadStoreState
                    }), []),
                    u = (0, a(682985).K8)(() => {
                        var e;
                        if (!o) return;
                        let t = null == (e = o.getSettings()) ? void 0 : e.agent_personalization_settings;
                        return (null == t ? void 0 : t.name) ? ? void 0
                    }, [o]),
                    p = (0, n.useCallback)(({
                        newThreadStore: t
                    }) => {
                        let n = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                        (0, a(358667).openChatPanel)({
                            environment: e,
                            store: n,
                            chatPanelState: t ? {
                                isOpen: !0,
                                threadId: t.id
                            } : {
                                isOpen: !0,
                                isNewThread: !0
                            }
                        })
                    }, [e]),
                    m = (0, n.useCallback)(t => {
                        t.stopPropagation(), (0, a(463226).cP)({
                            store: a(210037).r,
                            from: "agent_chat_face",
                            shouldSetSeenPersonalizationSettingsModal: !0,
                            environment: e
                        })
                    }, [e]),
                    g = (0, n.useMemo)(() => {
                        let e = (0, a(927720).N)(r, u);
                        return e || (0, i.jsx)(a(109939).sA, {
                            id: "AgentChatHeader.personalize",
                            defaultMessage: "Personalize"
                        })
                    }, [r, u]);
                if (!t || !c) return null;
                let f = "new" !== c;
                return (0, i.jsxs)(a(4458).fI, {
                    alignItems: "center",
                    gap: 4,
                    flex: 1,
                    minWidth: 0,
                    children: [f ? (0, i.jsx)("div", {
                        ref: s,
                        style: { ...w,
                            ...l ? k : {}
                        },
                        onClick: m,
                        onKeyDown: e => {
                            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), m(e))
                        },
                        role: "button",
                        tabIndex: 0,
                        children: (0, i.jsx)(a(51831).m, {
                            placement: "bottom",
                            content: () => g,
                            children: e => (0, i.jsx)(a(458364).x, {
                                variant: "xsmall_plus",
                                accessory: r,
                                accessorySpeechBubblePlacement: "topRight",
                                ...e
                            })
                        })
                    }) : void 0, (0, i.jsx)(a(30767).AgentThreadHistoryMenu, {
                        buttonShape: "roundrect",
                        onThreadChange: p,
                        parentStore: t,
                        threadStore: d,
                        threadStoreState: c
                    })]
                })
            }
            let T = {
                style0: {
                    color: a(632079).Tj.text.inverseSecondary
                }
            };

            function j() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)(),
                    o = (0, a(352202).zg)(),
                    r = (0, a(682985).K8)(() => a(550830).default.state.slipperySlopeChatThreadId, []),
                    s = (0, n.useCallback)(() => {
                        (0, a(358667).openChatPanel)({
                            environment: e,
                            store: void 0,
                            chatPanelState: {
                                isOpen: !0,
                                isNewThread: !0
                            }
                        })
                    }, [e]);
                return r ? (0, i.jsx)(a(51831).m, {
                    content: () => (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("div", {
                            children: (0, i.jsx)(a(109939).sA, {
                                id: "secondarySidebarHeader.slipperySlopeChat.newChat",
                                defaultMessage: "New chat"
                            })
                        }), (0, i.jsx)(a(693592).A, {
                            style: T.style0,
                            name: "createAIChatThread"
                        })]
                    }),
                    placement: "bottom",
                    alignment: "center",
                    delayThreshold: 0,
                    originGap: 6,
                    children: e => (0, i.jsx)(a(374533).A, { ...e,
                        icon: a(460327).Y,
                        colorVariant: "primary",
                        iconStyle: o.icon,
                        style: o.button,
                        ariaLabel: t.formatMessage({
                            id: "secondarySidebarHeader.slipperySlopeChat.newChat",
                            defaultMessage: "New chat"
                        }),
                        onClick: s,
                        testId: "secondary-sidebar-new-chat-button"
                    })
                }) : null
            }
            let C = {
                transform: "scaleX(-1)"
            };

            function I() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)(),
                    o = (0, a(352202).zg)(),
                    r = (0, a(972740).L)(),
                    s = (0, a(682985).K8)(() => a(550830).default.state.slipperySlopeChatThreadId, []),
                    l = (0, n.useCallback)(() => {
                        let t = (0, a(862451).createInferenceTranscriptChatRoute)({
                            environment: e,
                            threadId: s,
                            spaceId: null == r ? void 0 : r.id
                        });
                        (0, a(79266).navigate)({
                            environment: e,
                            url: t
                        })
                    }, [e, s, null == r ? void 0 : r.id]),
                    d = {
                        id: "secondarySidebarHeader.slipperySlopeChat.openInFullPage",
                        defaultMessage: "Open in full page",
                        description: "Open chat in full page instead of sidebar"
                    };
                return (0, i.jsx)(a(51831).m, {
                    content: () => (0, i.jsx)(a(109939).sA, { ...d
                    }),
                    placement: "bottom",
                    alignment: "center",
                    delayThreshold: 0,
                    originGap: 6,
                    children: e => (0, i.jsx)(a(374533).A, { ...e,
                        icon: a(577507).m,
                        colorVariant: "primary",
                        iconStyle: { ...o.icon,
                            ...C
                        },
                        style: o.button,
                        ariaLabel: t.formatMessage(d),
                        onClick: l,
                        testId: "secondary-sidebar-open-in-full-page-button"
                    })
                })
            }
        },
        889503: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                getStripe: () => o,
                getStripeAppearance: () => d,
                optionalPaymentMethodIdGivenPaymentData: () => u,
                stripeElementLocaleGivenNotionLocale: () => r,
                translateStripeError: () => l,
                useElementsOptions: () => s
            });
            var n = a(296540);
            let i = null;
            async function o() {
                return i || (a(37458).loadStripe.setLoadParameters({
                    advancedFraudSignals: !1
                }), i = (0, a(37458).loadStripe)(a(986939).A.stripe.key)), i
            }

            function r(e) {
                switch (e) {
                    case "en-US":
                        return "en";
                    case "ko-KR":
                        return "ko";
                    case "ja-JP":
                        return "ja";
                    case "fr-FR":
                        return "fr-FR";
                    case "de-DE":
                        return "de";
                    case "es-ES":
                        return "es-ES";
                    case "es-LA":
                        return "es-419";
                    case "pt-BR":
                        return "pt-BR";
                    case "zh-CN":
                        return "zh";
                    case "zh-TW":
                        return "zh-TW";
                    case "da-DK":
                        return "da";
                    case "nl-NL":
                        return "nl";
                    case "fi-FI":
                        return "fi";
                    case "nb-NO":
                        return "nb";
                    case "sv-SE":
                        return "sv";
                    default:
                        return "auto"
                }
            }

            function s(e) {
                let t = (0, a(960253).e)(),
                    i = (0, a(632079).O4)({
                        theme: t
                    }),
                    {
                        type: o
                    } = e,
                    s = "setup" === o || "subscription" === o ? e.currency : void 0,
                    l = "subscription" === o ? e.amount : void 0,
                    c = (0, a(682985).K8)(() => {
                        var e;
                        return (null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) || a(599412).q
                    }, []);
                return (0, n.useMemo)(() => {
                    let e = {
                            appearance: d(i, t),
                            locale: r(c)
                        },
                        n = {
                            paymentMethodTypes: (0, a(56281).VV)({
                                currency: s
                            })
                        };
                    switch (o) {
                        case "address":
                            return e;
                        case "setup":
                            return { ...e,
                                ...n,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "setup",
                                paymentMethodCreation: "manual"
                            };
                        case "subscription":
                            return { ...e,
                                ...n,
                                amount: l,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "subscription",
                                paymentMethodCreation: "manual",
                                setupFutureUsage: "off_session",
                                loader: "never"
                            };
                        default:
                            (0, a(722371).HB)(o)
                    }
                }, [i, t, c, s, o, l])
            }

            function l(e, t) {
                if (!t.code) return t.message || "";
                switch (t.code) {
                    case "invalid_expiry_year_past":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidExpiryYear.error.message",
                            defaultMessage: "Your card's expiration year is in the past."
                        });
                    case "invalid_cvc":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidCVC.error.message",
                            defaultMessage: "Your card's security code is invalid."
                        });
                    case "invalid_number":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidNumber.error.message",
                            defaultMessage: "Your card number is not a valid credit card number."
                        });
                    case "card_declined":
                        var a = e,
                            n = t.decline_code;
                        switch (n) {
                            case "expired_card":
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.expiredCard",
                                    defaultMessage: "Your card was declined because it is an expired card."
                                });
                            case "incorrect_number":
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.incorrectNumber",
                                    defaultMessage: "Your card was declined because you input an incorrect number."
                                });
                            case "insufficient_funds":
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.declinedFunds",
                                    defaultMessage: "Your card was declined because of insufficient funds."
                                });
                            case "invalid_cvc":
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidCvc",
                                    defaultMessage: "Your card was declined because you input an invalid CVC number"
                                });
                            case "invalid_amount":
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidAmount",
                                    defaultMessage: "Your card was declined because payment amount exceeds the amount that's allowed."
                                });
                            default:
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message",
                                    defaultMessage: "Your card was declined."
                                })
                        }
                    default:
                        return t.message || ""
                }
            }

            function d(e, t) {
                let n = c(e.text.primary),
                    i = c(e.text.secondary),
                    o = c(e.text.tertiary),
                    r = c(e.red.text.accentPrimary),
                    s = c(e.blue.text.accentPrimary);
                return {
                    labels: "above",
                    theme: "dark" === t ? "night" : "stripe",
                    variables: {
                        spacingGridRow: "12px",
                        spacingGridColumn: "12px",
                        spacingUnit: "4px",
                        spacingTab: "6px",
                        colorPrimary: n,
                        colorPrimaryText: n,
                        colorText: n,
                        colorTextSecondary: i,
                        colorTextPlaceholder: o,
                        colorIcon: n,
                        colorIconCheckmark: c(e.icon.inversePrimary),
                        colorDanger: r,
                        colorBackground: c(e.whiteButtonBackground),
                        colorIconTabHover: n,
                        colorIconTabSelected: s,
                        colorIconChevronDown: n,
                        fontFamily: a(699422).Tf.sans,
                        fontWeightLight: `${a(699422).Wy.light}`,
                        fontWeightNormal: `${a(699422).Wy.regular}`,
                        fontWeightMedium: `${a(699422).Wy.medium}`,
                        fontWeightBold: `${a(699422).Wy.medium}`,
                        fontSizeBase: "14px",
                        fontSizeSm: "12px",
                        colorLogo: t,
                        colorLogoBlock: t,
                        colorLogoTab: t,
                        colorLogoTabSelected: t,
                        borderRadius: "6px"
                    },
                    rules: {
                        ".Tab": {
                            padding: "10px 16px 10px 10px",
                            fontSize: "13px",
                            fontWeight: "500",
                            lineHeight: "16px",
                            color: n,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            backgroundColor: e.whiteButtonBackground
                        },
                        ".Tab:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground
                        },
                        ".Tab:focus": {
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".Tab--selected, .Tab--selected:active": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            color: n,
                            boxShadow: "none",
                            outline: "none"
                        },
                        ".Tab--selected:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            color: n
                        },
                        ".Tab--selected:focus": {
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".Input": {
                            fontSize: "14px",
                            lineHeight: "18px",
                            padding: "7px 8px",
                            backgroundColor: e.background.secondary,
                            boxShadow: `0 0 0 1px ${e.border.primary}`,
                            border: "none",
                            color: n
                        },
                        ".Input--invalid": {
                            color: n,
                            boxShadow: e.inputRedFocusRing
                        },
                        ".Input:focus": {
                            color: n,
                            boxShadow: e.inputBlueFocusRing
                        },
                        ".Label": {
                            fontSize: "12px",
                            lineHeight: "15px",
                            fontWeight: "500",
                            color: i,
                            marginBottom: "8px"
                        },
                        ".Error": {
                            fontSize: "12px",
                            fontWeight: "400",
                            lineHeight: "15px",
                            color: r
                        },
                        ".CodeInput": {
                            backgroundColor: e.background.secondary,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem, .PickerItem--selected": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            color: n
                        },
                        ".PickerItem:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground,
                            color: n,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem--selected:hover": {
                            boxShadow: "none"
                        },
                        ".PickerItem--new": {
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: "18px",
                            color: n
                        },
                        ".PickerItem--highlight, .PickerItem--highlight:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem--highlight:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground
                        },
                        ".TermsText": {
                            color: i,
                            fontSize: "10px",
                            fontWeight: "400",
                            lineHeight: "13px",
                            letterSpacing: "0.12px"
                        },
                        ".CheckboxLabel": {
                            color: n,
                            fontSize: "12px",
                            fontWeight: "500",
                            lineHeight: "15px"
                        },
                        ".Action, .MenuAction": {
                            color: n,
                            fontWeight: "400",
                            padding: "4px 8px"
                        },
                        ".Action:hover, .MenuAction:hover": {
                            backgroundColor: e.buttonHoveredBackground
                        },
                        ".BlockAction:focus, .CodeInput:focus, .Input:focus,.CheckboxInput:focus, .PickerItem:focus, .PickerAction:focus,.MenuAction:focus, .Action:focus, .SecondaryLink:focus": {
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".MenuIcon, .MenuIcon:hover": {
                            fill: n
                        },
                        ".Block": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            padding: "16px"
                        },
                        ".Icon": {
                            fill: n
                        }
                    }
                }
            }

            function c(e) {
                let [t, a, n, i] = e.match(/[\d.]+/g) ? ? [];
                return t && a && n && i && 1 === parseInt(i) ? `rgb(${t}, ${a}, ${n})` : e
            }

            function u(e) {
                return (null == e ? void 0 : e.type) === "paymentMethodId" ? e.value : void 0
            }
        },
        942806: (e, t, a) => {
            "use strict";

            function n(e, t) {
                let {
                    user_comment: n,
                    ...i
                } = t;
                (0, a(104310).u)({
                    event: {
                        eventName: "ai_action",
                        eventProperties: i
                    }
                })
            }

            function i(e, t, n) {
                let i = {
                    site: "client",
                    ...n
                };
                (0, a(195857).DO_NOT_USE_trackLegacy)(t, i)
            }

            function o(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "ai_favorite_action",
                        eventProperties: t
                    }
                })
            }

            function r(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "ai_autofill_action",
                        eventProperties: t
                    }
                })
            }

            function s(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "ai_autofill_settings_action",
                        eventProperties: t
                    }
                })
            }

            function l(e, t) {
                if (a(886556).z.isXMLAssistantEnabled()) {
                    var n;
                    let i = (null == (n = t.sessionContext) ? void 0 : n.evaluatorFromStoreState.getTranscript()) ? ? [];
                    a(310639).assistantDependency.load().then(({
                        assistantAnalyticsActions: a
                    }) => {
                        a.trackAssistantOpened(e, {
                            from: t.from,
                            sessionId: t.session_id,
                            isReminder: !1,
                            reminderType: void 0,
                            startTimestamp: Date.now(),
                            transcript: i,
                            hasQuery: !1,
                            searchSessionId: void 0
                        })
                    })
                } else(0, a(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_open",
                        eventProperties: {
                            session_id: t.session_id,
                            prompt_key: t.prompt_key,
                            from: t.from
                        }
                    }
                })
            }

            function d(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_close",
                        eventProperties: t
                    }
                })
            }

            function c(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "ai_assistant_error",
                        eventProperties: t
                    }
                })
            }
            a.r(t), a.d(t, {
                trackAIAction: () => n,
                trackAIAssistantEngineError: () => c,
                trackAICompletionPopupClose: () => d,
                trackAICompletionPopupOpen: () => l,
                trackAIFavoriteAction: () => o,
                trackAiAutofillAction: () => r,
                trackAiAutofillSettingsAction: () => s,
                trackUserFlow: () => i
            })
        }
    }
]);