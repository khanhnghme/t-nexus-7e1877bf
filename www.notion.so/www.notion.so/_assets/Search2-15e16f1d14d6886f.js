"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [73603, 84084], {
        338: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => n,
                personCircleIcon: () => a
            }), r(296540);
            var i = r(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.755 6.169C8.277 5.519 9.05 5.125 10 5.125s1.723.393 2.245 1.044c.51.635.75 1.474.75 2.346s-.24 1.71-.75 2.346c-.522.65-1.294 1.044-2.245 1.044-.95 0-1.723-.394-2.245-1.044-.51-.635-.75-1.474-.75-2.346s.24-1.711.75-2.346m.975.782c-.293.365-.475.909-.475 1.564s.182 1.198.475 1.564c.281.35.694.576 1.27.576s.989-.226 1.27-.576c.294-.366.475-.909.475-1.564s-.181-1.199-.475-1.564c-.281-.35-.693-.576-1.27-.576-.576 0-.989.225-1.27.576"
                        }), (0, i.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 0 0-4.087 11.267c.789-1.397 2.333-2.33 4.087-2.33s3.298.933 4.087 2.33A6.375 6.375 0 0 0 10 3.625M13.049 15.6c-.547-1.049-1.697-1.789-3.05-1.789-1.351 0-2.501.74-3.048 1.789a6.35 6.35 0 0 0 3.049.775 6.34 6.34 0 0 0 3.049-.775"
                        })]
                    })
                },
                a = (0, r(104509).wt)("personCircle", n, "default")
        },
        10123: (e, t, r) => {
            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e) {
                (0, r(570551).A)(1, arguments);
                var t = Object.prototype.toString.call(e);
                return e instanceof Date || "object" === i(e) && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : (("string" == typeof e || "[object String]" === t) && "u" > typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(Error().stack)), new Date(NaN))
            }
            r.d(t, {
                A: () => n
            })
        },
        36151: (e, t, r) => {
            r.d(t, {
                c: () => a
            });
            var i = () => r(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        wasGetVisibleUsersCalled: {}
                    }
                }
            }
            let a = new n;
            r(202146).exposeDebugValue("GetVisibleUsersStore", a)
        },
        59724: (e, t, r) => {
            r.d(t, {
                A: () => a
            }), r(296540);
            var i = r(474848);
            let n = {
                    style0: { ...r(699422).RC
                    }
                },
                a = function(e) {
                    let {
                        botStore: t,
                        avatarSize: a,
                        shouldShowBadge: s,
                        style: o,
                        inline: l
                    } = e, d = (0, r(109939).tz)(), c = (0, r(533992).Y0)(), u = (0, r(682985).K8)(() => null == t ? void 0 : t.getDisplayName(d), [t, d]), {
                        outerStyle: g,
                        avatarWrapStyle: p,
                        badgeStyle: m
                    } = (0, r(960253).I)(() => ({
                        outerStyle: {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...o
                        },
                        avatarWrapStyle: l ? {
                            width: "none",
                            minHeight: "none",
                            marginInlineEnd: 6
                        } : {
                            marginInlineEnd: 6
                        },
                        badgeStyle: {
                            padding: "2px 6px",
                            borderRadius: 4,
                            color: r(632079).Tj.text.secondary,
                            background: r(632079).Tj.background.tertiaryTranslucent,
                            fontSize: r(986939).A.isMobile ? 11 : 9,
                            lineHeight: c.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginInlineStart: 8,
                            marginTop: 1
                        }
                    }), [o, l, c]);
                    return (0, i.jsxs)("div", {
                        style: g,
                        children: [(0, i.jsx)("div", {
                            style: p,
                            children: (0, i.jsx)(r(31319).A, {
                                botStore: t,
                                size: a
                            })
                        }), (0, i.jsx)("div", {
                            style: n.style0,
                            children: u
                        }), s ? (0, i.jsx)("div", {
                            style: m,
                            children: "Bot"
                        }) : void 0]
                    })
                }
        },
        108653: (e, t, r) => {
            r.d(t, {
                h: () => i
            });
            async function i(e) {
                let t = r(728372).AppStoreSidebarSpaceStore.state;
                if (!t) return [];
                let i = e.query.startsWith("@") ? e.query.slice(1) : e.query,
                    n = await (0, r(334682).m)(e);
                return (await (0, r(250521).x)({
                    environment: e.environment,
                    parentStore: t,
                    query: i,
                    userIds: n,
                    minFuzzyScore: e.minFuzzyScore,
                    placeSelfFirst: e.placeSelfFirst
                })).slice(0, e.limit)
            }
        },
        109266: (e, t, r) => {
            r.d(t, {
                Q: () => n
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            let i = new Set(["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com"]);

            function n({
                query: e,
                users: t,
                minFuzzyScore: a,
                currentUserValue: s,
                spaceDomains: o
            }) {
                return e ? (0, r(821048).Ay)(e, t, r(413818).T2, {
                    minScore: a,
                    getSortScore: e => {
                        let {
                            original: t,
                            score: n
                        } = e, a = t.email && (0, r(801109).zN)(t.email), l = s && (0, r(801109).zN)(s.email), d = a && o.has(a), c = l === a, u = l && i.has(l);
                        return n * (d || c && !u ? -2 : -1)
                    }
                }) : t
            }
        },
        111950: (e, t, r) => {
            r.d(t, {
                W: () => n
            }), r(944114);
            var i = () => r(821603);

            function n(e) {
                let t, r = [],
                    n = [];
                for (let o of e) {
                    var a, s;
                    (null == (a = o.sources) ? void 0 : a.includes(i().Ni.Local)) ? r.push(o): n.push(o), !t && o.serverEventProperties && (t = null == (s = o.serverEventProperties) ? void 0 : s["server-searchExperiments"])
                }
                return {
                    localResults: r,
                    serverResults: n,
                    exposedSearchExperiments: t
                }
            }
        },
        156379: (e, t, r) => {
            r.d(t, {
                L: () => n
            }), r(296540);
            var i = r(474848);

            function n() {
                return (0, i.jsx)(r(746434).E, {
                    content: (0, i.jsx)(r(109939).sA, {
                        id: "spaceUserMembershipType.restrictedMember",
                        defaultMessage: "Restricted"
                    }),
                    color: "yellow"
                })
            }
        },
        184785: (e, t, r) => {
            r.d(t, {
                q: () => n
            }), r(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.62 3.62 16.75 12.75",
                    directional: !0,
                    svg: (0, r(474848).jsx)("path", {
                        d: "M16.25 3.625c1.174 0 2.125.951 2.125 2.125v8.5a2.125 2.125 0 0 1-2.125 2.125H3.75a2.125 2.125 0 0 1-2.125-2.125v-8.5c0-1.174.951-2.125 2.125-2.125zm-12.5 1.25a.875.875 0 0 0-.875.875v8.5c0 .483.392.875.875.875h8.7V4.875zm9.8 10.25h2.7a.875.875 0 0 0 .875-.875v-8.5a.875.875 0 0 0-.875-.875h-2.7z"
                    })
                },
                n = (0, r(104509).wt)("sidebarRight", i, "default")
        },
        189125: (e, t, r) => {
            r.r(t), r.d(t, {
                Search2: () => tw
            }), r(898992), r(354520), r(737550);
            var i = r(296540),
                n = () => r(458230),
                a = () => r(247438);
            r(16280);
            let s = (0, r(222024).t)();
            async function o(e, t) {
                let {
                    intent: i
                } = t;
                if ("create_meeting_note" === i.type) return void(await r(68067).$.load()).createAndNavigateToTranscriptionBlock({
                    environment: e,
                    from: "command_search_meeting_notes",
                    title: "none",
                    origin: "command_search_meeting_notes"
                });
                let n = (0, r(440143).Y)().getEvent({
                    id: i.eventId,
                    calendarId: i.calendarId,
                    accountId: i.accountId
                });
                n ? n.isAllDay ? s.error({
                    from: "useCommandSearchListeners",
                    type: "quick_search_calendar_event_unsupported_all_day",
                    error: Error("All-day calendar events are not supported for meeting notes"),
                    data: {
                        miscDataToConvertToString: {
                            eventId: i.eventId
                        }
                    }
                }) : ("create_meeting_note_for_event" === i.type || "open_event_meeting_note" === i.type) && await (0, r(861842).Jf)({
                    environment: e,
                    from: "command_search_meeting_notes",
                    event: n,
                    peekMode: void 0
                }) : s.error({
                    from: "useCommandSearchListeners",
                    type: "quick_search_calendar_event_not_found",
                    error: Error("Calendar event not found for quick search IPC"),
                    data: {
                        miscDataToConvertToString: {
                            eventId: i.eventId,
                            calendarId: i.calendarId,
                            accountId: i.accountId
                        }
                    }
                })
            }
            var l = r(474848);
            let d = {
                width: 23,
                height: 23
            };

            function c(e) {
                let {
                    isShowingHighlightPane: t,
                    setIsShowingHighlightPane: n
                } = e, a = (0, r(533992).v3)().currentUser.id, s = (0, r(109939).tz)(), o = t ? s.formatMessage(u.hide) : s.formatMessage(u.show), c = (0, i.useCallback)(() => {
                    ! function(e) {
                        var t, i;
                        let {
                            currentUserId: n,
                            isShowingHighlightPane: a,
                            setIsShowingHighlightPane: s,
                            explicitVisibility: o
                        } = e, l = void 0 !== o ? o : !a;
                        n && (t = n, i = l, r(255482).K.set({
                            userId: t,
                            key: g,
                            value: i
                        })), s(l)
                    }({
                        currentUserId: a,
                        isShowingHighlightPane: t,
                        setIsShowingHighlightPane: n
                    })
                }, [a, t, n]);
                return (0, l.jsx)(r(51831).m, {
                    content: () => (0, l.jsx)("div", {
                        children: o
                    }),
                    placement: "bottom",
                    alignment: "start",
                    disableTooltip: r(986939).A.isMobile,
                    delayThreshold: 400,
                    children: e => (0, l.jsx)(r(374533).A, { ...e,
                        icon: r(184785).q,
                        size: "lg",
                        shape: "default",
                        iconStyle: d,
                        ariaLabel: o,
                        onClick: c,
                        ...t ? {
                            colorPalette: "blue",
                            colorVariant: "accentPrimary"
                        } : {}
                    })
                })
            }
            let u = (0, r(109939).YK)({
                    show: {
                        id: "search2.highlightPane.show",
                        defaultMessage: "Show highlight pane"
                    },
                    hide: {
                        id: "search2.highlightPane.hide",
                        defaultMessage: "Hide highlight pane"
                    }
                }),
                g = "search_highlight_pane_visibility",
                p = "Search2StickyFiltersEnabled",
                m = "Search2HideAiTopResultEnabled",
                h = {
                    field: "relevance"
                };

            function f(e) {
                let t = r(255482).K.get({
                    userId: e.userId,
                    key: e.key
                });
                return "boolean" == typeof t ? t : e.defaultValue
            }

            function x(e) {
                r(255482).K.set({
                    userId: e.userId,
                    key: e.key,
                    value: e.value
                })
            }

            function y(e) {
                r(255482).K.remove({
                    userId: e.userId,
                    key: e.key
                })
            }

            function b(e) {
                return `Search2PersistedFilters:${e}`
            }

            function v(e) {
                return `Search2PersistedSort:${e}`
            }

            function S(e) {
                return e ? {
                    stickyFiltersEnabled: f({
                        userId: e,
                        key: p,
                        defaultValue: !1
                    }),
                    hideAiTopResultEnabled: f({
                        userId: e,
                        key: m,
                        defaultValue: !1
                    })
                } : {
                    stickyFiltersEnabled: !1,
                    hideAiTopResultEnabled: !1
                }
            }

            function j(e) {
                var t, i;
                x({
                    userId: (t = {
                        userId: e.userId,
                        spaceId: e.spaceId,
                        filters: (0, r(821603).N2)(e.filters)
                    }).userId,
                    key: b(t.spaceId),
                    value: t.filters
                }), x({
                    userId: (i = {
                        userId: e.userId,
                        spaceId: e.spaceId,
                        sort: e.sort ? ? h
                    }).userId,
                    key: v(i.spaceId),
                    value: i.sort
                })
            }
            let w = {
                    container: {
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingInlineEnd: 12,
                        paddingInlineStart: 16,
                        color: r(632079).Tj.text.secondary,
                        display: "flex",
                        justifyContent: "space-between",
                        borderTop: `1px solid ${r(632079).Tj.border.secondaryTranslucent}`,
                        marginTop: 1
                    },
                    indexBuilding: {
                        color: r(632079).Tj.text.tertiary,
                        fontSize: 12,
                        display: "flex"
                    }
                },
                k = i.memo(function(e) {
                    let t = e.isResultsView,
                        n = (0, r(533992).v3)(),
                        {
                            localResults: a,
                            serverResults: s,
                            exposedSearchExperiments: o
                        } = (0, i.useMemo)(() => (0, r(111950).W)(e.results), [e.results]),
                        d = (0, r(682985).O$)(r(661238).Qb);
                    (0, r(682985).K8)(() => (0, r(755235).PE)({
                        environment: n
                    }).localSearchableBlocksCacheLoaded, [n]), (0, r(682985).K8)(() => (0, r(773438).E)(n).hasPublicAccessPermission, [n]);
                    let c = (0, r(682985).K8)(() => (0, r(131672).PF)({
                        env: "production",
                        isAdminMode: r(986939).A.isAdminMode,
                        experimentService: r(218744).default
                    }), []);
                    return (0, l.jsxs)("div", {
                        style: w.container,
                        children: [(0, l.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            gap: 12,
                            children: [null, (0, l.jsx)(r(702335).A, {})]
                        }), (0, l.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            children: [(0, l.jsx)(r(219346).c, {
                                productSurface: r(821603).xi.searchModal,
                                localResults: a,
                                serverResults: s,
                                debugInfo: e.debugInfo,
                                exposedSearchExperiments: o,
                                reportBadSearchInputRequest: e.reportBadSearchInputRequest,
                                buttonStyles: {
                                    visibility: t ? "visible" : "hidden",
                                    pointerEvents: t ? "auto" : "none"
                                }
                            }), c ? (0, l.jsx)(I, {
                                isDebugSidebarOpen: d
                            }) : null, (0, l.jsx)(M, {
                                searchUserPreferences: e.searchUserPreferences
                            })]
                        })]
                    })
                });

            function I(e) {
                let t = (0, r(109939).tz)(),
                    i = (0, r(960253).I)(() => ({
                        button: {
                            fill: e.isDebugSidebarOpen ? r(632079).Tj.blue.text.tertiary : void 0
                        }
                    }), [e.isDebugSidebarOpen]);
                return (0, l.jsx)(r(374533).A, {
                    onClick: () => {
                        r(661238).Ay.update(e => ({ ...e,
                            isDebugSidebarOpen: !e.isDebugSidebarOpen
                        }))
                    },
                    icon: r(850741).c,
                    ariaLabel: t.formatMessage(C.debugToggle),
                    style: i.button
                })
            }

            function M(e) {
                let t = (0, r(109939).tz)();
                return (0, l.jsx)(r(656252).A, {
                    popupType: r(656252).z.Popup,
                    enableOutsideClickDismiss: !0,
                    disableDarkOverlayBackground: !0,
                    placementToOrigin: "top",
                    alignmentToOrigin: "end",
                    originGap: 8,
                    trapFocus: !1,
                    ariaLabel: t.formatMessage(C.settingsMenuAriaLabel),
                    content: () => (0, l.jsx)(T, {
                        searchUserPreferences: e.searchUserPreferences
                    }),
                    children: e => (0, l.jsx)(r(374533).A, {
                        onClick: t => e.onClick(t),
                        icon: r(829968).gearIcon,
                        ariaLabel: t.formatMessage(C.settingsToggle)
                    })
                })
            }

            function T(e) {
                let t = (0, r(109939).tz)(),
                    n = (0, r(345776).T)(),
                    a = (0, r(723240).r)(),
                    {
                        searchUserPreferences: s
                    } = e,
                    {
                        settings: o,
                        setUserSettings: d,
                        storeFilters: c,
                        storeSort: u
                    } = s,
                    g = !!(a && n),
                    h = (0, i.useCallback)(() => {
                        if (!a || !n) return;
                        let e = !o.stickyFiltersEnabled;
                        if (d({
                                stickyFiltersEnabled: e
                            }), x({
                                userId: n,
                                key: p,
                                value: e
                            }), e) j({
                            userId: n,
                            spaceId: a,
                            filters: c,
                            sort: u
                        });
                        else {
                            var t, r;
                            y({
                                userId: (r = t = {
                                    userId: n,
                                    spaceId: a
                                }).userId,
                                key: b(r.spaceId)
                            }), y({
                                userId: t.userId,
                                key: v(t.spaceId)
                            })
                        }
                    }, [n, d, c, u, o.stickyFiltersEnabled, a]),
                    f = (0, i.useCallback)(() => {
                        if (!n) return;
                        let e = !o.hideAiTopResultEnabled;
                        d({
                            hideAiTopResultEnabled: e
                        }), x({
                            userId: n,
                            key: m,
                            value: e
                        })
                    }, [d, o.hideAiTopResultEnabled, n]),
                    S = (0, i.useMemo)(() => [{
                        key: "settings",
                        items: [{
                            key: "searchFooterStickyFilters",
                            action: h,
                            render: e => (0, l.jsx)(r(296060).A, { ...e,
                                title: t.formatMessage(C.stickyFilters),
                                on: o.stickyFiltersEnabled,
                                disabled: !g,
                                "aria-label": t.formatMessage(C.stickyFilters),
                                shouldWrapTitle: !0
                            })
                        }, {
                            key: "searchFooterAiTopResult",
                            action: f,
                            render: e => (0, l.jsx)(r(296060).A, { ...e,
                                title: t.formatMessage(C.aiTopResult),
                                on: o.hideAiTopResultEnabled,
                                disabled: !n,
                                "aria-label": t.formatMessage(C.aiTopResult),
                                shouldWrapTitle: !0
                            })
                        }]
                    }], [g, n, t, o.hideAiTopResultEnabled, o.stickyFiltersEnabled, f, h]);
                return (0, l.jsx)(r(747369).A, {
                    menuType: r(649476).gu.Popup,
                    width: 300,
                    disableScroller: !0,
                    children: (0, l.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: S
                    })
                })
            }
            let C = (0, r(109939).YK)({
                debugToggle: {
                    id: "search2.debugToggle",
                    defaultMessage: "Search debug tools"
                },
                settingsToggle: {
                    id: "search2.settingsToggle",
                    defaultMessage: "Search settings"
                },
                settingsMenuAriaLabel: {
                    id: "search2.settingsMenu.ariaLabel",
                    defaultMessage: "Search settings menu"
                },
                stickyFilters: {
                    id: "search2.settingsMenu.stickyFilters.label",
                    defaultMessage: "Persist filters across sessions"
                },
                aiTopResult: {
                    id: "search2.settingsMenu.aiTopResult.label",
                    defaultMessage: "Hide “Search all sources with AI”"
                }
            });

            function A() {
                let e = (0, r(533992).v3)();
                return (0, r(682985).K8)(() => {
                    let t = (0, r(555135).V)(e.device),
                        i = (0, r(773438).E)(e).hasPublicAccessPermission;
                    return t && !i
                }, [e])
            }
            r(581454);
            let P = (0, r(109939).YK)({
                    createdMode: {
                        id: "searchFilterMenu.dateRange.mode.created",
                        defaultMessage: "Created"
                    },
                    lastEditedMode: {
                        id: "searchFilterMenu.dateRange.mode.lastEdited",
                        defaultMessage: "Last edited"
                    },
                    today: {
                        id: "searchFilterMenu.dateRange.today",
                        defaultMessage: "Today"
                    },
                    last7Days: {
                        id: "searchFilterMenu.dateRange.last7Days",
                        defaultMessage: "Last 7 days"
                    },
                    last30Days: {
                        id: "searchFilterMenu.dateRange.last30Days",
                        defaultMessage: "Last 30 days"
                    }
                }),
                R = (0, r(109939).YK)({
                    sortSectionTitle: {
                        id: "searchFilterMenu.sortSection.title",
                        defaultMessage: "Sort by"
                    }
                });

            function _({
                show: e
            }) {
                let t = (0, r(934877).A)({
                    visibility: e,
                    delayShow: 500,
                    delayHold: 300
                });
                return (0, l.jsx)(r(517334).k, {
                    style: {
                        textAlign: "center",
                        visibility: t ? "visible" : "hidden",
                        display: "inline",
                        marginInlineStart: 8
                    }
                })
            }
            let E = (0, r(109939).YK)({
                noPageResults: {
                    defaultMessage: "No page results",
                    id: "searchFilterMenu.noPageSearchResults.title"
                },
                linkToPage: {
                    defaultMessage: "Add page filter",
                    id: "searchFilterMenu.addPageFilter.title"
                }
            });
            var F = () => r(832375);
            let N = (0, r(109939).YK)({
                    searchFilterTeamSection: {
                        defaultMessage: "Add teamspace filter",
                        id: "searchFilterMenu.teamSection.title"
                    },
                    noTeamspaceResults: {
                        defaultMessage: "No teamspace results",
                        id: "searchFilterMenu.teamSection.noResults"
                    }
                }),
                z = (0, r(109939).YK)({
                    searchFilterPeopleSection: {
                        defaultMessage: "Add creator filter",
                        id: "searchFilterMenu.peopleSection.title"
                    }
                }),
                L = {
                    width: 250,
                    maxHeight: 200
                };

            function B() {
                let e = (0, r(682985).O$)(r(377926).D),
                    t = e.open,
                    n = (0, r(682985).uB)(void 0, r(419110).$),
                    s = (0, r(682985).K8)(() => {
                        if (t) return (0, r(748814).a)(e.inputTextStore, e.oldTextValue, r(55019).D)
                    }, [e, t]),
                    o = function(e) {
                        let {
                            query: t,
                            menuListStore: n
                        } = e, s = (0, r(682985).O$)(r(377926).D), o = s.open ? s.targetSection : void 0, d = (0, r(682985).K8)(() => r(357887)._.state.sessionId, []), c = "user" === o, {
                            userResultsSection: u
                        } = function(e) {
                            let {
                                query: t,
                                isFirstSection: n,
                                disabled: s,
                                searchSessionId: o
                            } = e, d = (0, r(533992).v3)(), c = (0, r(682985).K8)(() => r(377926).D.state.open, []), u = c && !s, {
                                results: g,
                                isLoading: p
                            } = (0, r(845077).uE)({
                                query: t,
                                disabled: !u,
                                useMentionMenuStore: !1,
                                open: c
                            }), m = (0, i.useMemo)(() => g.map(e => {
                                let t = e.id;
                                return {
                                    key: t,
                                    render: n => (0, i.createElement)(r(634740).i, { ...n,
                                        key: t,
                                        user: e
                                    }),
                                    action: t => {
                                        (0, r(377796).createAndCommit)({
                                            userAction: "SearchFilterMenu.userMenuItem",
                                            environment: d,
                                            canUndo: !0,
                                            cellTarget: void 0,
                                            perform: t => {
                                                r(75115).Ju({
                                                    environment: d,
                                                    annotation: (0, a().J_S)(e.id),
                                                    transaction: t
                                                })
                                            }
                                        }), (0, r(104310).u)({
                                            event: {
                                                eventName: "search_insert_typeable_filter",
                                                eventProperties: {
                                                    type: "user",
                                                    search_session_id: o
                                                }
                                            }
                                        })
                                    }
                                }
                            }), [g, d, o]), h = (0, r(82002).h)({
                                resultsCount: m.length,
                                shouldShow: p,
                                variant: "mention-menu-people"
                            });
                            return {
                                userResultsSection: (0, i.useMemo)(() => {
                                    if (u) return {
                                        menuListSection: {
                                            key: "search-filter-user-results",
                                            render: e => (0, l.jsx)(r(844565).A, { ...e,
                                                title: (0, l.jsx)(r(109939).sA, { ...z.searchFilterPeopleSection
                                                }),
                                                topBorder: !n
                                            }),
                                            items: [...m, ...h]
                                        },
                                        element: void 0
                                    }
                                }, [n, u, h, m]),
                                isUserResultsLoading: p
                            }
                        }({
                            query: t,
                            isFirstSection: c,
                            disabled: !c,
                            searchSessionId: d
                        }), {
                            pageResultsSection: g
                        } = function(e) {
                            let {
                                query: t,
                                disabled: n,
                                searchSessionId: s
                            } = e, o = (0, r(109939).tz)(), d = (0, r(533992).v3)(), c = (0, r(682985).K8)(() => r(377926).D.state.open && !n, [n]), {
                                results: u,
                                isLoading: g
                            } = (0, r(699128).r)({
                                query: t,
                                disabled: !c,
                                includeDataSources: !1
                            }), p = (0, i.useMemo)(() => (0, r(381453).oE)(u.map(({
                                store: e,
                                serverEventProperties: t
                            }) => {
                                let i = e.id;
                                return {
                                    key: i,
                                    render: t => (0, l.jsx)(r(103558).A, { ...t,
                                        store: e,
                                        showVerifiedPageBadge: !0
                                    }),
                                    action: e => {
                                        (0, r(377796).createAndCommit)({
                                            userAction: "SearchFilterMenu.getPageResultsMenuSection",
                                            environment: d,
                                            canUndo: !0,
                                            cellTarget: void 0,
                                            perform: e => {
                                                r(75115).Ju({
                                                    environment: d,
                                                    annotation: (0, a().Umo)(i),
                                                    transaction: e
                                                })
                                            }
                                        }), (0, r(104310).u)({
                                            event: {
                                                eventName: "search_insert_typeable_filter",
                                                eventProperties: {
                                                    type: "page",
                                                    search_session_id: s
                                                }
                                            }
                                        })
                                    }
                                }
                            })), [d, u, s]), m = (0, r(82002).h)({
                                resultsCount: p.length,
                                shouldShow: g,
                                variant: "mention-menu-page"
                            }), h = p.length > 0, f = (0, i.useMemo)(() => {
                                let e = h || g ? E.linkToPage : E.noPageResults;
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [o.formatMessage(e), (0, l.jsx)(_, {
                                        show: g
                                    })]
                                })
                            }, [h, g, o]);
                            return {
                                pageResultsSection: (0, i.useMemo)(() => {
                                    if (c) return {
                                        menuListSection: {
                                            key: "search filter page results",
                                            render: e => (0, l.jsx)(r(844565).A, { ...e,
                                                title: f,
                                                topBorder: !1
                                            }),
                                            items: [...p, ...m]
                                        },
                                        element: void 0
                                    }
                                }, [c, p, m, f]),
                                isPageResultsLoading: g
                            }
                        }({
                            query: t,
                            disabled: "page" !== o,
                            searchSessionId: d
                        }), p = "team" === o, m = function(e) {
                            let {
                                query: t,
                                isFirstSection: n,
                                disabled: s,
                                searchSessionId: o
                            } = e, [d, c] = (0, i.useState)([]), u = (0, r(533992).v3)(), g = (0, r(723240).r)(), p = (0, r(682985).K8)(() => r(377926).D.state.open && !s, [s]), m = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore);
                            (0, r(97668).Yb)(async () => {
                                if (!p || !m) return void c([]);
                                let e = r(728372).AppStoreSidebarSpaceViewStore.state,
                                    i = e ? (0, r(679321).r)(e) : [];
                                if (!t) return void c(i);
                                let n = await (0, r(231246).lx)({
                                    query: t,
                                    current: []
                                }, u);
                                c(await (0, r(975162).lX)(n, r(231246).UO, async e => {
                                    let t = r(681735).h.createChildStore(m, {
                                        table: F().yKj,
                                        id: e,
                                        spaceId: g
                                    });
                                    return await t.load(), t
                                }))
                            }, [p, m, t, u, g]);
                            let h = (0, i.useMemo)(() => d.map(e => {
                                    let t = e.id;
                                    return {
                                        key: t,
                                        render: n => (0, i.createElement)(r(996712).A, { ...n,
                                            key: t,
                                            teamStore: e
                                        }),
                                        action: t => {
                                            g && ((0, r(377796).createAndCommit)({
                                                userAction: "SearchFilterMenu.teamMenuItem",
                                                environment: u,
                                                canUndo: !0,
                                                cellTarget: {
                                                    spaceWithId: g
                                                },
                                                perform: t => {
                                                    r(75115).Ju({
                                                        environment: u,
                                                        annotation: (0, a().tPj)({
                                                            teamId: e.id,
                                                            spaceId: g,
                                                            mentionType: "teamspace"
                                                        }),
                                                        transaction: t
                                                    })
                                                }
                                            }), (0, r(104310).u)({
                                                event: {
                                                    eventName: "search_insert_typeable_filter",
                                                    eventProperties: {
                                                        type: "team",
                                                        search_session_id: o
                                                    }
                                                }
                                            }))
                                        }
                                    }
                                }), [d, u, g, o]),
                                f = (0, i.useMemo)(() => {
                                    if (!p) return;
                                    let e = d.length > 0 ? (0, l.jsx)(r(109939).sA, { ...N.searchFilterTeamSection
                                    }) : (0, l.jsx)(r(109939).sA, { ...N.noTeamspaceResults
                                    });
                                    return {
                                        key: "search filter team results",
                                        render: t => (0, l.jsx)(r(844565).A, { ...t,
                                            title: e,
                                            topBorder: !n
                                        }),
                                        items: h
                                    }
                                }, [p, h, n, d.length]);
                            if (f) return {
                                menuListSection: f,
                                element: void 0
                            }
                        }({
                            query: t,
                            isFirstSection: p,
                            disabled: !p,
                            searchSessionId: d
                        }), h = "sort" === o, f = function(e) {
                            let {
                                isFirstSection: t,
                                query: n,
                                disabled: s = !1,
                                searchSessionId: o
                            } = e, d = (0, r(109939).tz)(), c = (0, r(533992).v3)(), u = (0, i.useMemo)(() => s ? [] : (0, r(821048).Ay)(n, r(727395)._9, e => (function(e, t) {
                                switch (e) {
                                    case "lastEdited.desc":
                                        return t.formatMessage(r(727395).Jq.lastEditedNewestFirst);
                                    case "lastEdited.asc":
                                        return t.formatMessage(r(727395).Jq.lastEditedOldestFirst);
                                    case "created.desc":
                                        return t.formatMessage(r(727395).Jq.createdNewestFirst);
                                    case "created.asc":
                                        return t.formatMessage(r(727395).Jq.createdOldestFirst);
                                    default:
                                        return t.formatMessage(r(727395).Jq.bestMatches)
                                }
                            })(e.key, d)), [n, d, s]), g = (0, i.useMemo)(() => s ? [] : u.map(e => ({
                                key: e.key,
                                render: t => (0, l.jsx)(r(95582).A, { ...t,
                                    title: d.formatMessage(e.formattedName)
                                }),
                                action: () => {
                                    let t = r(727395).Bo[e.key];
                                    t && ((0, r(377796).createAndCommit)({
                                        userAction: "SearchFilterMenu.sortMenuItem",
                                        environment: c,
                                        canUndo: !0,
                                        cellTarget: void 0,
                                        perform: e => {
                                            r(75115).Ju({
                                                environment: c,
                                                annotation: (0, a().wU2)(t),
                                                transaction: e
                                            })
                                        }
                                    }), (0, r(104310).u)({
                                        event: {
                                            eventName: "search_insert_typeable_filter",
                                            eventProperties: {
                                                type: "sort",
                                                search_session_id: o
                                            }
                                        }
                                    }))
                                }
                            })), [s, u, d, c, o]), p = (0, i.useMemo)(() => {
                                if (0 !== g.length) return {
                                    key: "sort results",
                                    render: e => (0, l.jsx)(r(844565).A, { ...e,
                                        title: d.formatMessage(R.sortSectionTitle),
                                        desktopTitleStyle: t ? {
                                            paddingTop: 4
                                        } : void 0,
                                        topBorder: !t
                                    }),
                                    items: g
                                }
                            }, [g, t, d]);
                            if (p) return {
                                menuListSection: p,
                                element: void 0
                            }
                        }({
                            query: t,
                            disabled: !h,
                            isFirstSection: h,
                            searchSessionId: d
                        }), x = "date" === o, y = function(e) {
                            let {
                                isFirstSection: t,
                                query: n,
                                disabled: s = !1,
                                searchSessionId: o,
                                menuListStore: d
                            } = e, c = (0, r(109939).tz)(), u = (0, r(533992).v3)(), [g, p] = (0, i.useState)("created"), [m, h] = (0, i.useState)({
                                starting: void 0,
                                ending: void 0
                            }), f = (0, i.useMemo)(() => [{
                                key: "today",
                                title: c.formatMessage(P.today),
                                value: 0
                            }, {
                                key: "last_7_days",
                                title: c.formatMessage(P.last7Days),
                                value: 7
                            }, {
                                key: "last_30_days",
                                title: c.formatMessage(P.last30Days),
                                value: 30
                            }], [c]), x = (0, i.useMemo)(() => s ? [] : f.filter(e => e.title.toLowerCase().includes(n.toLowerCase())), [f, n, s]);
                            ! function(e) {
                                let {
                                    disabled: t,
                                    query: n,
                                    results: a,
                                    menuListStore: s
                                } = e, o = n.trim().length > 0, l = a.length > 0;
                                (0, i.useEffect)(() => {
                                    if (t) return;
                                    let e = o && l ? {
                                        section: 0,
                                        indexLocal: 1,
                                        indexGlobal: 1,
                                        footerFocused: !1
                                    } : {
                                        section: 0,
                                        indexLocal: 0,
                                        indexGlobal: 0,
                                        footerFocused: !1
                                    };
                                    s.update(t => {
                                        let {
                                            focus: i
                                        } = t;
                                        return (0, r(381453).n4)(i, e) ? t : { ...t,
                                            focus: e
                                        }
                                    })
                                }, [t, l, s, n, o])
                            }({
                                disabled: s,
                                query: n,
                                results: x,
                                menuListStore: d
                            });
                            let y = (0, i.useCallback)(e => {
                                    !e.error && e.value && h(t => ({ ...t,
                                        ...e.value
                                    }))
                                }, []),
                                b = (0, i.useCallback)(() => {
                                    if (!m.starting || !m.ending) return;
                                    let e = (0, a().Ww9)({
                                        type: "daterange",
                                        start_date: m.starting.start_date,
                                        end_date: m.ending.start_date
                                    });
                                    (0, r(377796).createAndCommit)({
                                        userAction: "SearchFilterMenu.dateRangeMenuClose",
                                        environment: u,
                                        canUndo: !0,
                                        cellTarget: void 0,
                                        perform: t => {
                                            r(75115).Ju({
                                                environment: u,
                                                annotation: (0, a().uLW)({
                                                    date: e,
                                                    mode: g
                                                }),
                                                transaction: t
                                            })
                                        }
                                    }), h({
                                        starting: void 0,
                                        ending: void 0
                                    })
                                }, [m, u, g]),
                                v = (0, i.useMemo)(() => {
                                    if (s) return [];
                                    let e = x.map(e => ({
                                            key: e.key,
                                            render: t => (0, l.jsx)(r(95582).A, { ...t,
                                                title: e.title
                                            }),
                                            action: t => {
                                                let i = r(906745).DateTime.now(),
                                                    n = 0 === e.value ? i : i.minus({
                                                        days: e.value
                                                    }),
                                                    s = [a().BQP.Date, {
                                                        type: "daterange",
                                                        start_date: n.toISODate(),
                                                        end_date: i.toISODate()
                                                    }];
                                                (0, r(377796).createAndCommit)({
                                                    userAction: "SearchFilterMenu.dateRangeMenuItem",
                                                    environment: u,
                                                    canUndo: !0,
                                                    cellTarget: void 0,
                                                    perform: e => {
                                                        r(75115).Ju({
                                                            environment: u,
                                                            annotation: (0, a().uLW)({
                                                                date: s,
                                                                mode: g
                                                            }),
                                                            transaction: e
                                                        })
                                                    }
                                                }), (0, r(104310).u)({
                                                    event: {
                                                        eventName: "search_insert_typeable_filter",
                                                        eventProperties: {
                                                            type: "date",
                                                            search_session_id: o
                                                        }
                                                    }
                                                })
                                            }
                                        })),
                                        t = () => p("created" === g ? "lastEdited" : "created");
                                    return [{
                                        key: "date-mode-toggle",
                                        action: () => t(),
                                        render: e => (0, l.jsx)(r(296060).A, { ...e,
                                            focused: e.focused,
                                            title: "created" === g ? c.formatMessage(P.createdMode) : c.formatMessage(P.lastEditedMode),
                                            on: "lastEdited" === g,
                                            onClick: () => t()
                                        })
                                    }, ...e]
                                }, [s, x, u, o, g, c]),
                                S = (0, i.useMemo)(() => {
                                    if (!s && 0 !== v.length) return {
                                        key: "date range results",
                                        render: e => (0, l.jsx)(r(844565).A, { ...e,
                                            title: (0, l.jsx)(r(109939).sA, {
                                                defaultMessage: "Add date filter",
                                                id: "searchFilterMenu.dateRangeSection.title"
                                            }),
                                            desktopTitleStyle: t ? {
                                                paddingTop: 4
                                            } : void 0,
                                            topBorder: !t
                                        }),
                                        items: v
                                    }
                                }, [v, t, s]),
                                j = (0, i.useCallback)(() => {
                                    b()
                                }, [b]);
                            if (!s && S) return {
                                menuListSection: S,
                                element: (0, l.jsx)(r(102870).A, {
                                    title: "Select Date Range",
                                    value: m,
                                    onUpdate: y,
                                    onDismiss: j,
                                    disableMenuWrap: !0,
                                    hideDateInputMenuItems: !0
                                }),
                                onDismiss: j
                            }
                        }({
                            query: t,
                            isFirstSection: x,
                            disabled: !x,
                            searchSessionId: d,
                            menuListStore: n
                        }), b = (0, i.useMemo)(() => ({
                            user: u,
                            page: g,
                            team: m,
                            sort: f,
                            date: y
                        }), [u, g, m, f, y]);
                        return (0, i.useMemo)(() => {
                            if (s.open && o) return b[o]
                        }, [s.open, b, o])
                    }({
                        query: (0, r(682985).K8)(() => t ? (0, r(239236).m)(e.inputTextStore, s) ? ? "" : "", [s, e, t]),
                        menuListStore: n
                    }),
                    d = (0, i.useMemo)(() => {
                        let e = null == o ? void 0 : o.menuListSection;
                        return e ? [e] : []
                    }, [o]),
                    c = null == o ? void 0 : o.onDismiss,
                    u = (0, i.useCallback)(() => {
                        null == c || c(), r(75115).VN()
                    }, [c]),
                    g = null == o ? void 0 : o.element;
                return function(e) {
                    let {
                        inputSelections: t
                    } = e, n = (0, r(682985).O$)(r(377926).D), s = (0, r(682985).K8)(() => {
                        var e;
                        if (!n.open || !t) return !1;
                        let i = null == (e = n.inputTextStore) ? void 0 : e.getValue();
                        if (!i) return !1;
                        let s = (0, a().qAZ)(i);
                        return s.includes(r(55019).D) && s.length > 1
                    }, [n, t]), {
                        getSavedSelection: o
                    } = (0, r(805469).A)({
                        shouldPreserveTextSelection: !1,
                        shouldPreserveBlockSelection: !1,
                        shouldRestoreSelection: !1
                    }), l = (0, r(682985).K8)(() => {
                        var e;
                        if (!n.open) return !1;
                        let t = o().textSelectionState,
                            i = n.inputTextStore;
                        return !!(t && "editing" === t.mode && (null == (e = (0, r(778758).H)(t.multiSelection)) ? void 0 : e.store) === i)
                    }, [n, o]), d = (0, r(682985).K8)(() => {
                        if (!n.open) return !1;
                        let e = r(358377).default.state,
                            t = n.inputTextStore,
                            i = "editing" === e.mode ? (0, r(778758).H)(e.multiSelection) : void 0;
                        return (null == i ? void 0 : i.store) === t
                    }, [n]), c = (0, r(682985).K8)(() => {
                        if (!n.open || !d || !t) return !1;
                        let e = r(358377).default.state,
                            i = "editing" === e.mode ? (0, r(778758).H)(e.multiSelection) : void 0,
                            a = null == i ? void 0 : i.selection;
                        return !!a && (a.startIndex < t.filter.startIndex || a.endIndex > t.filter.endIndex)
                    }, [n, d, t]), u = d || l, g = !n.open || !u || c || !s;
                    (0, i.useEffect)(() => {
                        g && r(75115).VN()
                    }, [g])
                }({
                    inputSelections: s
                }), (0, l.jsx)(r(182718).zD, {
                    popupType: r(423291).n.Popup,
                    open: t,
                    originRect: t ? e.selectionRect : void 0,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    originGap: 12,
                    disableMouseCapture: !1,
                    disableContentScroll: !0,
                    onDismiss: u,
                    keepFocus: !0,
                    trapFocus: !1,
                    content: () => (0, l.jsxs)(r(126767).H, {
                        type: r(644154).A.Y,
                        style: g ? void 0 : L,
                        children: [(0, l.jsx)(r(558045).A, {
                            type: r(558045).O.Vertical,
                            initialFocus: 0,
                            resetInitialFocusOnSectionChange: !0,
                            resetInitialFocusOnSectionChangeAlways: !0,
                            sections: d,
                            disableKeyboardArrowWrap: !0,
                            onEmptyEnter: () => r(75115).VN(),
                            performHandleEnterOnTab: !0,
                            store: n
                        }), g]
                    })
                })
            }
            let V = {
                searchIcon: {
                    color: r(632079).Tj.icon.secondary,
                    width: 20,
                    height: 20,
                    marginInlineStart: 4,
                    marginInlineEnd: 4
                },
                textPlaceholder: {
                    cursor: "text"
                },
                textInput: {
                    overflowX: "auto",
                    overflowY: "hidden",
                    whiteSpace: "pre",
                    cursor: "text"
                },
                cancelButton: {
                    marginInlineEnd: 10,
                    color: r(632079).Tj.text.secondary
                }
            };

            function K(e) {
                let {
                    inputComboboxProps: t,
                    queryText: n,
                    scrollerRef: s,
                    onClose: o,
                    hasFilters: d,
                    isShowingFilterBar: u,
                    setIsShowingFilterBar: g,
                    isShowingHighlightPane: p,
                    setIsShowingHighlightPane: m
                } = e, h = (0, r(533992).v3)(), f = (0, r(109939).tz)(), x = A(), {
                    isNewElectronTab: y,
                    mode: b
                } = (0, r(682985).K8)(() => ({
                    isNewElectronTab: r(357887)._.state.isNewElectronTab,
                    mode: r(357887)._.state.mode
                }), [], {
                    debugName: "SearchInput.miniSearchStoreState"
                }), v = (0, r(682985).K8)(() => (0, r(817599).q)(h), [h], {
                    debugName: "SearchInput.isInQuickSearchMode"
                }), S = (0, r(118872).lW)().width >= 1006, j = (0, r(481129).H)({
                    intl: f,
                    isNewElectronTab: y
                }), w = (0, r(682985).K8)(() => (0, a().q4_)(n.store.getValue() || []).length, [n.store], {
                    debugName: "SearchInput.userTextLength"
                }), k = (0, i.useMemo)(() => 0 === w && v ? `min(${j.length}ch, 100%)` : "100%", [w, v, j.length]), I = (0, i.useCallback)(() => {
                    var e;
                    null == (e = s.current) || null == (e = e.getNode()) || e.scrollTo({
                        top: 0,
                        behavior: "auto"
                    });
                    let t = n.store.getValue();
                    if (t) {
                        let e = (0, a().q4_)(t);
                        if (e.includes("\n")) {
                            let t = e.replace(/[\r\n]+/g, " ");
                            n.setValue(t ? [
                                [t]
                            ] : [])
                        }
                    }
                    let i = void 0 === r(785385).default.state.firstKeyStrokeTimeMs;
                    r(785385).default.update(e => ({ ...e,
                        firstKeyStrokeTimeMs: i ? Date.now() : e.firstKeyStrokeTimeMs,
                        numKeystrokes: e.numKeystrokes + 1
                    }))
                }, [s, n]), M = (0, i.useCallback)(e => {
                    if (x) return;
                    let t = e.target.value;
                    C(t), n.setValue(t ? [
                        [t]
                    ] : []), I()
                }, [n, I, x]), [T, C] = (0, i.useState)("");
                (0, i.useEffect)(() => {
                    x || C((0, a().q4_)(n.store.getValue() ? ? []))
                }, [x, n.store]);
                let P = (0, r(960253).I)(() => ({
                    textContainer: {
                        display: "flex",
                        alignItems: "center",
                        margin: 12,
                        gap: v ? 4 : 10,
                        ...v ? (0, r(1249).g)({
                            noDrag: !0
                        }) : {}
                    },
                    workspaceSwitcherContainer: {
                        display: "flex",
                        alignItems: "center",
                        marginInlineStart: 4,
                        marginInlineEnd: 4 * !v
                    },
                    inputContainerWithDynamicWidth: {
                        width: k
                    }
                }), [k, v]);
                return (0, i.useMemo)(() => {
                    let e = v ? (0, l.jsx)("div", {
                            style: P.workspaceSwitcherContainer,
                            children: (0, l.jsx)(r(158645).L, {
                                mode: b
                            })
                        }) : (0, l.jsx)(r(16275).I, {
                            icon: r(330274).magnifyingGlassIcon,
                            colorVariant: "primary",
                            style: V.searchIcon
                        }),
                        i = x ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(r(53373).A, { ...t,
                                placeholder: j,
                                onClick: void 0,
                                disabled: !1,
                                store: n.store,
                                inPageFind: r(831719).Os.none,
                                pasteBehavior: "inline",
                                placeholderStyle: V.textPlaceholder,
                                disableUpDownArrows: !0,
                                disableSlashCommands: !0,
                                disableMobileActionBar: !0,
                                disableMentions: r(986939).A.isMobile,
                                disableEmbedMenu: !0,
                                disableInsertedDeletedAnnotations: !0,
                                disableEmojiCommands: !0,
                                disabledMentionTypes: r(86484).md,
                                allowSearchTypeableFilters: x,
                                disableShiftEnter: !0,
                                disableComment: !0,
                                style: V.textInput,
                                disableSelectAllBlocks: !0,
                                disableSelectionDrag: !0,
                                disableEnter: !0,
                                disableStyleAnnotations: !0,
                                disableSuggestEdit: !0,
                                disableRichTextActions: !0,
                                onChange: e => I(),
                                onEsc: o
                            }), (0, l.jsx)(B, {})]
                        }) : (0, l.jsx)(r(36481).p, { ...t,
                            format: "transparent",
                            placeholder: j,
                            value: T,
                            onChange: M,
                            focus: !0,
                            style: V.textInput,
                            selectAll: !0,
                            onKeyDown: e => {
                                "Escape" === e.key && o()
                            }
                        });
                    return (0, l.jsxs)(r(4458).fI, {
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "space-between",
                        className: v ? r(828432).sbV : void 0,
                        children: [(0, l.jsx)("div", {
                            style: P.inputContainerWithDynamicWidth,
                            children: (0, l.jsx)(r(519451).A, {
                                capture: !0,
                                debugName: "SearchInput",
                                children: (0, l.jsxs)("div", {
                                    style: P.textContainer,
                                    children: [e, i]
                                })
                            })
                        }), r(986939).A.isMobile ? (0, l.jsx)(r(988022).p, {
                            onClick: o,
                            style: V.cancelButton,
                            children: f.formatMessage(W.cancel)
                        }) : (0, l.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            marginInlineEnd: 10,
                            children: [S ? (0, l.jsx)(c, {
                                isShowingHighlightPane: p,
                                setIsShowingHighlightPane: m
                            }) : null, (0, l.jsx)(D, {
                                hasFilters: d,
                                queryText: n,
                                isShowingFilterBar: u,
                                setIsShowingFilterBar: g
                            })]
                        })]
                    })
                }, [v, P.workspaceSwitcherContainer, P.inputContainerWithDynamicWidth, P.textContainer, b, t, j, n, x, o, f, S, p, m, d, u, g, I, T, M])
            }

            function D(e) {
                let {
                    hasFilters: t,
                    isShowingFilterBar: i,
                    setIsShowingFilterBar: n,
                    queryText: a
                } = e;
                return A() ? (0, l.jsx)(U, {
                    inputStore: a.store,
                    setInput: a.setValue,
                    hasFilters: t
                }) : (0, l.jsx)(r(492491).g, {
                    hasFilters: t,
                    isShowingFilterBar: i,
                    setIsShowingFilterBar: n
                })
            }
            let O = {
                    width: 200
                },
                H = {
                    width: 24,
                    height: 24
                };

            function U(e) {
                let {
                    inputStore: t,
                    setInput: n,
                    hasFilters: s
                } = e, o = (0, r(533992).v3)(), d = (0, r(109939).tz)(), [c, u] = (0, i.useState)(!1), g = (0, r(682985).K8)(() => r(357887)._.state.sessionId, []), p = (0, i.useCallback)(() => {
                    let e = o.currentUser.id;
                    if (!e) return;
                    let i = t.getValue() || [],
                        s = (0, a().wmz)((0, a().J_S)(e));
                    n(i.length > 0 ? [...i, s] : [s]), (0, r(739204).z)({
                        store: t
                    }), u(!1)
                }, [o.currentUser.id, t, n]), m = (0, i.useCallback)(() => {
                    let e = t.getValue() || [],
                        r = (0, a().wmz)((0, a().C_C)());
                    n(e.length > 0 ? [...e, r] : [r]), u(!1)
                }, [t, n]), h = (0, i.useCallback)(e => {
                    r(55019).zU({
                        filterType: e,
                        inputStore: t,
                        setInput: n,
                        intl: d
                    }), u(!1), (0, r(104310).u)({
                        event: {
                            eventName: "search_add_filter_via_popup",
                            eventProperties: {
                                type: r(55019).dY[e],
                                search_session_id: g
                            }
                        }
                    })
                }, [t, g, n, d]), f = (0, i.useMemo)(() => ({
                    items: [{
                        key: "my-docs-option",
                        render: e => (0, l.jsx)(r(988022).p, { ...e,
                            iconLeading: r(338).personCircleIcon,
                            children: (0, l.jsx)("div", {
                                children: d.formatMessage(W.myDocsFilter)
                            })
                        }),
                        action: () => p()
                    }],
                    render: e => (0, l.jsx)(r(844565).A, { ...e,
                        title: d.formatMessage(W.suggestedSectionTitle)
                    }),
                    key: "suggested-filter-section"
                }), [p, d]), x = (0, i.useMemo)(() => ({
                    key: "filter-button-sort-section",
                    items: [{
                        key: "search-filters-sort-filter-option",
                        render: e => (0, l.jsx)(r(988022).p, { ...e,
                            iconLeading: r(300921).arrowUpDownIcon,
                            children: d.formatMessage(W.sortSectionTitle)
                        }),
                        action: () => h("sort")
                    }],
                    render: e => (0, l.jsx)(r(844565).A, { ...e,
                        title: d.formatMessage(W.sortSectionTitle)
                    })
                }), [h, d]), y = (0, i.useMemo)(() => ({
                    items: [{
                        key: "search-filters-author-filter-option",
                        render: e => (0, l.jsx)(r(988022).p, { ...e,
                            iconLeading: r(338).personCircleIcon,
                            children: d.formatMessage(W.authorFilter)
                        }),
                        action: () => h("by")
                    }, {
                        key: "search-filters-in-filter-option",
                        render: e => (0, l.jsx)(r(988022).p, { ...e,
                            iconLeading: r(865213).Y,
                            children: d.formatMessage(W.inFilter)
                        }),
                        action: () => h("in")
                    }, {
                        key: "search-filters-date-filter-option",
                        render: e => (0, l.jsx)(r(988022).p, { ...e,
                            iconLeading: r(998172).D,
                            children: d.formatMessage(W.dateFilter)
                        }),
                        action: () => h("date")
                    }, {
                        key: "title-only-option",
                        render: e => (0, l.jsx)(r(988022).p, { ...e,
                            iconLeading: r(517259).a,
                            children: `${d.formatMessage(W.titleOnlyFilter)}`
                        }),
                        action: () => m()
                    }, {
                        key: "search-filters-team-filter-option",
                        render: e => (0, l.jsx)(r(988022).p, { ...e,
                            iconLeading: r(767816).teamspaceIcon,
                            children: d.formatMessage(W.teamFilter)
                        }),
                        action: () => h("team")
                    }],
                    render: e => (0, l.jsx)(r(844565).A, { ...e,
                        title: d.formatMessage(W.addFilterSectionTitle)
                    }),
                    key: "filter-section"
                }), [m, h, d]), b = (0, i.useMemo)(() => (0, l.jsx)(r(558045).A, {
                    type: r(558045).O.Vertical,
                    disableKeyboardArrowWrap: !0,
                    initialFocus: 0,
                    sections: [x, y, f],
                    style: O
                }), [f, y, x]);
                return (0, l.jsx)(r(182718).zD, {
                    trapFocus: !0,
                    open: c,
                    popupType: r(182718).nl.Popup,
                    onDismiss: () => u(!1),
                    content: () => b,
                    children: (0, l.jsx)(r(374533).A, {
                        icon: c ? r(454433).filterFillIcon : r(895105).filterIcon,
                        size: "lg",
                        shape: "pill",
                        iconStyle: H,
                        ariaLabel: d.formatMessage(W.filterButtonCaption),
                        onClick: () => u(!0),
                        ...c ? {
                            colorPalette: "blue",
                            colorVariant: "accentPrimary"
                        } : {}
                    })
                })
            }
            let W = (0, r(109939).YK)({
                filterButtonCaption: {
                    defaultMessage: "Filters",
                    id: "SearchInput.filterButtonCaption"
                },
                myDocsFilter: {
                    defaultMessage: "My docs",
                    id: "SearchInput.myDocsFilter"
                },
                authorFilter: {
                    defaultMessage: "Author",
                    id: "SearchInput.authorFilter"
                },
                inFilter: {
                    defaultMessage: "In",
                    id: "SearchInput.inFilter"
                },
                teamFilter: {
                    defaultMessage: "Teamspace",
                    id: "SearchInput.teamFilter"
                },
                addFilterSectionTitle: {
                    defaultMessage: "Add a filter",
                    id: "SearchInput.addFilterSectionTitle"
                },
                dateFilter: {
                    defaultMessage: "Date",
                    id: "SearchInput.dateFilter"
                },
                suggestedSectionTitle: {
                    defaultMessage: "Suggested",
                    id: "SearchInput.suggestedSectionTitle"
                },
                titleOnlyFilter: {
                    defaultMessage: "Title only",
                    id: "SearchInput.titleOnlyFilter"
                },
                sortSectionTitle: {
                    defaultMessage: "Sort",
                    id: "SearchInput.sortSectionTitle"
                },
                cancel: {
                    defaultMessage: "Cancel",
                    id: "SearchInput.cancel"
                }
            });

            function q(e) {
                let {
                    result: t,
                    context: i,
                    queryId: n,
                    trackSelectSearchItem: a,
                    closeSearch: s,
                    isCommandSearch: o,
                    environment: l,
                    electronTabs: d,
                    isNewElectronTab: c,
                    event: u,
                    source: g,
                    fromSidePeekPanel: p
                } = e, m = t.store, h = (0, r(7029).V)(u);
                if (a({
                        result: t,
                        isMetaClick: !!h,
                        context: i,
                        fromSidePeekPanel: p
                    }), "query_results" === i && r(785385).default.update(e => ({ ...e,
                        selectedQueryResult: !0
                    })), r(41901).A.setState({
                        queryId: n,
                        pageId: t.store.id,
                        timeEntered: new Date
                    }), h || s({
                        shouldResetQuery: !1
                    }), o) {
                    let e = (0, r(234310).A)({
                        pageModel: m.getModel(),
                        pageId: m.id,
                        pageVisitSource: g,
                        queryId: n,
                        addPagePrefix: (0, r(700473).wasRequestedOnAlternateDomain)()
                    });
                    (0, r(916187).N)(e)
                } else {
                    let e = (0, r(945247).$)({
                        result: t
                    });
                    if (!e) return;
                    (0, r(135422).q)({
                        searchResult: e,
                        environment: l,
                        pageVisitSource: g,
                        queryId: n,
                        openInNew: h,
                        electronTabSearch: {
                            tabs: d,
                            isNewTab: !!c
                        },
                        context: i
                    })
                }
            }
            r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(430670), r(803949);
            let Y = (0, r(109939).YK)({
                now: {
                    id: "search2.now",
                    defaultMessage: "Now"
                },
                fromNow: {
                    id: "search2.fromNow",
                    defaultMessage: "from now"
                }
            });

            function $(e) {
                return "upcoming_meeting_no_linked_page" !== e.type
            }
            let G = "new-tab-actions",
                Q = "new-page-action",
                Z = "new-ai-chat-action",
                J = "for-you-pages";

            function X(e, t) {
                return e.isActive !== t.isActive ? e.isActive ? -1 : 1 : new Date(e.event.start.dateTime).getTime() - new Date(t.event.start.dateTime).getTime()
            }
            let ee = {
                width: 20,
                height: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            };

            function et(e) {
                let {
                    eventName: t,
                    timeUntilElement: i,
                    ...n
                } = e, a = (0, r(109939).tz)(), s = (0, r(120021).eD)({
                    view: "recents"
                });
                return (0, l.jsx)(r(95582).A, { ...n,
                    style: s.outerStyle,
                    buttonStyle: s.buttonStyle,
                    desktopIconStyle: s.desktopIconStyle,
                    icon: (0, l.jsx)("div", {
                        style: ee,
                        children: (0, l.jsx)(r(16275).I, {
                            icon: r(681875).a,
                            size: r(104509).Ev.sm,
                            colorVariant: "secondary"
                        })
                    }),
                    title: (0, l.jsxs)(r(4458).fI, {
                        gap: 4,
                        alignItems: "center",
                        children: [(0, l.jsx)("span", {
                            style: r(578751).S.title,
                            className: "notranslate",
                            children: t
                        }), (0, l.jsx)("span", {
                            style: r(578751).S.divider,
                            children: "—"
                        }), (0, l.jsx)(r(111010).D, {
                            colorPalette: "gray",
                            colorVariant: "secondary",
                            styleKey: "captionRegular",
                            children: a.formatMessage(ei.createMeetingNoteCaption)
                        })]
                    }),
                    right: i,
                    className: `notranslate ${r(828432).LF7}`
                })
            }

            function er(e) {
                let {
                    blockStore: t,
                    idx: i,
                    resultFeatureNames: n
                } = e;
                return {
                    id: t.id,
                    score: 0,
                    spaceId: t.getSpaceId(),
                    sources: [r(821603).Ni.Local],
                    featureGroups: n ? [{
                        groupName: "custom",
                        features: n.map(e => ({
                            name: e,
                            value: 1
                        }))
                    }] : [],
                    store: t,
                    originalPosition: i,
                    localSource: new Set,
                    serverEventProperties: void 0
                }
            }
            let ei = (0, r(109939).YK)({
                forYouSectionTitle: {
                    id: "search2.forYouSectionTitle",
                    defaultMessage: "For you"
                },
                showAllForYouItems: {
                    id: "search2.showAllForYouItems",
                    defaultMessage: "Show all"
                },
                showFewerForYouItems: {
                    id: "search2.showFewerForYouItems",
                    defaultMessage: "Show fewer"
                },
                untitledMeeting: {
                    id: "search2.untitledMeeting",
                    defaultMessage: "Untitled meeting"
                },
                fromCalendarEvents: {
                    id: "search2.fromCalendarEvents",
                    defaultMessage: "From calendar events"
                },
                createMeetingNoteCaption: {
                    id: "search2.createMeetingNoteCaption",
                    defaultMessage: "Create meeting note"
                }
            });
            r(672577);
            let en = "experiment-selector",
                ea = {
                    container: {
                        borderRadius: 6,
                        paddingInlineStart: 4
                    },
                    titleContainer: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        color: r(632079).Tj.text.primary,
                        fontWeight: r(699422).Wy.medium,
                        fontSize: 14,
                        ...r(699422).RC
                    },
                    activeOverrideSection: {
                        borderBottom: `1px solid ${r(632079).Tj.border.primaryTranslucent}`,
                        paddingBottom: 8
                    }
                },
                es = i.forwardRef(function(e, t) {
                    let {
                        allPossibleExperiments: n,
                        pendingOverrides: a,
                        onExperimentChange: s,
                        onCommitOverrides: o,
                        isPopupOpen: d,
                        onClosePopup: c,
                        debugInfo: u,
                        ...g
                    } = e, p = (0, r(109939).tz)(), [m, h] = (0, i.useState)(""), f = (0, i.useRef)(null), [x, y] = (0, r(739271).s)(), b = (0, i.useMemo)(() => {
                        if (!m.trim()) return n;
                        let e = m.toLowerCase();
                        return n.filter(t => t.experimentId.toLowerCase().includes(e))
                    }, [n, m]), v = (0, i.useCallback)((e, t) => {
                        s(function(e, t, r) {
                            if ("control" === r || void 0 === r) {
                                let {
                                    [t]: r, ...i
                                } = e;
                                return i
                            }
                            return { ...e,
                                [t]: r
                            }
                        }(a, e, t))
                    }, [a, s]);
                    (0, i.useEffect)(() => {
                        d && setTimeout(() => {
                            var e;
                            null == (e = f.current) || e.focus()
                        }, 100)
                    }, [d]);
                    let S = (0, i.useCallback)(() => {
                            h(""), c(), o(a)
                        }, [c, o, a]),
                        {
                            overriddenExperimentItems: j,
                            remainingExperimentItems: w
                        } = (0, i.useMemo)(() => {
                            let e = [],
                                t = [];
                            return b.forEach(i => {
                                let {
                                    experimentId: n,
                                    groups: s
                                } = i, o = a[n], d = void 0 !== o, c = (() => {
                                    if (!(s.length <= 2)) return {
                                        key: n,
                                        action: () => {},
                                        render: e => (0, l.jsx)(eo, { ...e,
                                            experimentId: n,
                                            groups: s,
                                            currentValue: o,
                                            experimentDefaultValue: i.group,
                                            onValueChange: v
                                        })
                                    }; {
                                        let e = s.find(e => "control" !== e),
                                            t = o === e,
                                            a = i.group === e,
                                            d = void 0 !== o,
                                            c = d ? o : i.group;
                                        return {
                                            key: n,
                                            action: () => {
                                                a && t ? v(n, void 0) : v(n, t ? void 0 : e)
                                            },
                                            render: e => (0, l.jsx)(r(95582).A, { ...e,
                                                title: ec(n),
                                                caption: c,
                                                right: d ? (0, l.jsx)(r(16275).I, {
                                                    icon: r(15956).checkmarkIcon,
                                                    size: "sm",
                                                    colorPalette: "blue",
                                                    colorVariant: "accentPrimary"
                                                }) : void 0
                                            })
                                        }
                                    }
                                })();
                                d ? e.push(c) : t.push(c)
                            }), {
                                overriddenExperimentItems: e,
                                remainingExperimentItems: t
                            }
                        }, [b, a, v]),
                        k = (0, i.useMemo)(() => {
                            let e = [];
                            return e.push({
                                key: "search-section",
                                render: e => (0, l.jsx)(r(844565).A, { ...e,
                                    title: p.formatMessage(eu.searchExperiments)
                                }),
                                items: [{
                                    key: "search-input",
                                    action: () => {},
                                    render: e => (0, l.jsx)(r(310324).Ay, { ...e,
                                        ref: f,
                                        value: m,
                                        onChange: e => h(e.target.value),
                                        onKeyDown: e => {
                                            if ("Escape" === e.key) {
                                                e.preventDefault(), S();
                                                return
                                            }
                                            "Backspace" === e.key || "Delete" === e.key ? 0 === m.length && e.preventDefault() : ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.preventDefault()
                                        },
                                        placeholder: p.formatMessage(eu.searchPlaceholder),
                                        focusInitial: !0,
                                        showClearButton: !0,
                                        ...x
                                    })
                                }]
                            }), j.length > 0 && e.push({
                                key: "active-overrides",
                                render: e => (0, l.jsx)(r(844565).A, { ...e,
                                    title: p.formatMessage(eu.activeOverrides),
                                    style: ea.activeOverrideSection
                                }),
                                items: j
                            }), w.length > 0 && e.push({
                                key: "experiments",
                                render: e => (0, l.jsx)(r(844565).A, { ...e,
                                    title: p.formatMessage(eu.availableExperiments)
                                }),
                                items: w
                            }), e
                        }, [j, w, p, m, x, S]),
                        I = Object.keys(a).length > 0;
                    return (0, l.jsx)(r(182718).zD, {
                        open: d,
                        onDismiss: S,
                        popupType: r(182718).nl.Popup,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "center",
                        trapFocus: !0,
                        ariaLabel: p.formatMessage(eu.searchExperimentsModalLabel),
                        content: () => (0, l.jsx)(r(747369).A, {
                            menuType: r(649476).gu.Popup,
                            width: 350,
                            minHeight: 150,
                            maxHeight: 330,
                            children: (0, l.jsx)(r(558045).A, {
                                type: r(558045).O.Vertical,
                                initialFocus: 0,
                                sections: k,
                                comboboxProps: y
                            })
                        }),
                        children: (0, l.jsx)(r(95582).A, { ...g,
                            ref: t,
                            title: (0, l.jsx)("div", {
                                style: ea.titleContainer,
                                children: I ? Object.keys(a).map(ec).join(", ") : p.formatMessage(eu.selectedExperiments)
                            }),
                            icon: (0, l.jsx)(r(16275).I, {
                                icon: r(850741).c,
                                colorVariant: "primary"
                            }),
                            style: ea.container,
                            buttonStyle: r(120021).CU,
                            right: u ? (0, l.jsx)(ed, {
                                debugInfo: u
                            }) : void 0
                        })
                    })
                });

            function eo(e) {
                let {
                    experimentId: t,
                    groups: i,
                    currentValue: n,
                    experimentDefaultValue: a,
                    onValueChange: s,
                    ...o
                } = e, d = void 0 !== n ? n : a || "control", c = void 0 !== n;
                return (0, l.jsx)(r(816231).A, { ...o,
                    onFocus: () => {},
                    renderExtension: (e, n) => (0, l.jsx)(r(747369).A, {
                        menuType: r(649476).gu.Popup,
                        width: 200,
                        children: (0, l.jsx)(r(558045).A, {
                            type: r(558045).O.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: "values",
                                render: e => (0, l.jsx)(r(844565).A, { ...e,
                                    title: ec(t)
                                }),
                                items: i.map(e => ({
                                    key: e,
                                    action: () => {
                                        e === a ? s(t, void 0) : s(t, e), n.close()
                                    },
                                    render: t => {
                                        let i;
                                        return (0, l.jsx)(r(95582).A, { ...t,
                                            title: e,
                                            right: (i = d === e, a === e ? (0, l.jsx)(r(16275).I, {
                                                icon: r(150963).w,
                                                size: "sm",
                                                colorVariant: "primary"
                                            }) : i ? (0, l.jsx)(r(16275).I, {
                                                icon: r(15956).checkmarkIcon,
                                                size: "sm",
                                                colorPalette: "blue",
                                                colorVariant: "accentPrimary"
                                            }) : void 0)
                                        })
                                    }
                                }))
                            }]
                        })
                    }),
                    children: (e, i) => (0, l.jsx)(r(95582).A, { ...e,
                        ref: i,
                        title: ec(t),
                        caption: c ? `Override: ${d}` : `Default: ${d}`,
                        right: c ? (0, l.jsx)(r(16275).I, {
                            icon: r(15956).checkmarkIcon,
                            size: "sm",
                            colorPalette: "blue",
                            colorVariant: "accentPrimary"
                        }) : void 0,
                        showExtensionArrow: !0
                    })
                })
            }
            let el = {
                button: {
                    fontSize: 12,
                    padding: "2px 6px",
                    borderRadius: 4,
                    border: `1px solid ${r(632079).Tj.border.primary}`,
                    background: r(632079).Tj.background.primary,
                    color: r(632079).Tj.text.secondary,
                    cursor: "pointer",
                    userSelect: "none"
                }
            };

            function ed(e) {
                let {
                    debugInfo: t
                } = e, n = (0, r(533992).v3)(), a = (0, i.useCallback)(async (e, i) => {
                    e.stopPropagation();
                    let a = "request" === i ? t.response.rawRequests : t.response.rawResponses;
                    if (a) {
                        let e = await (0, r(969899).jd)();
                        await e({
                            environment: n,
                            stringValue: JSON.stringify(a, null, 2),
                            copiedMessage: "request" === i ? eg.copiedSearchRequest : eg.copiedSearchResponse
                        })
                    }
                }, [t, n]), s = !!t.response.rawRequests, o = !!t.response.rawResponses;
                return (0, l.jsxs)(r(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    children: [s ? (0, l.jsx)(r(988022).p, {
                        size: "sm",
                        style: el.button,
                        onClick: e => a(e, "request"),
                        children: "Request"
                    }) : void 0, o ? (0, l.jsx)(r(988022).p, {
                        size: "sm",
                        style: el.button,
                        onClick: e => a(e, "response"),
                        children: "Response"
                    }) : void 0]
                })
            }

            function ec(e) {
                return e.replace(/^search-/, "")
            }
            let eu = (0, r(109939).YK)({
                    selectedExperiments: {
                        id: "search2.selectedExperiments.title",
                        defaultMessage: "Selected experiments"
                    },
                    searchExperiments: {
                        id: "search2.searchExperiments.sectionTitle",
                        defaultMessage: "Search Experiments"
                    },
                    searchExperimentsModalLabel: {
                        id: "search2.searchExperimentsModal.label",
                        defaultMessage: "Search Experiments Modal"
                    },
                    activeOverrides: {
                        id: "search2.activeOverrides.title",
                        defaultMessage: "Active Overrides"
                    },
                    availableExperiments: {
                        id: "search2.availableExperiments.title",
                        defaultMessage: "Available Experiments"
                    },
                    searchPlaceholder: {
                        id: "search2.searchExperimentsModal.placeholder",
                        defaultMessage: "Search experiments…"
                    }
                }),
                eg = (0, r(109939).YK)({
                    copiedSearchRequest: {
                        id: "search2.debugButtons.copiedSearchRequest",
                        defaultMessage: "Copied search request"
                    },
                    copiedSearchResponse: {
                        id: "search2.debugButtons.copiedSearchResponse",
                        defaultMessage: "Copied search response"
                    }
                });

            function ep(e) {
                let {
                    resultCount: t,
                    isLowerBound: i
                } = e;
                return void 0 === t ? (0, l.jsx)(r(109939).sA, { ...em.searchResults
                }) : i ? (0, l.jsx)(r(109939).sA, { ...em.searchResultsWithLowerBoundCount,
                    values: {
                        count: t
                    }
                }) : (0, l.jsx)(r(109939).sA, { ...em.searchResultsWithCount,
                    values: {
                        count: t
                    }
                })
            }
            let em = (0, r(109939).YK)({
                    searchResults: {
                        id: "search.results.searchResults",
                        defaultMessage: "Search results"
                    },
                    searchResultsWithCount: {
                        id: "search.results.searchResultsWithCount",
                        defaultMessage: "Search results ({count})"
                    },
                    searchResultsWithLowerBoundCount: {
                        id: "search.results.searchResultsWithLowerBoundCount",
                        defaultMessage: "Search results ({count}+)"
                    }
                }),
                eh = "deep-find-entry-point",
                ef = "auto-streaming-search",
                ex = {
                    container: {
                        borderRadius: 6,
                        paddingInline: 0,
                        gap: 12
                    },
                    queryText: {
                        display: "inline",
                        alignItems: "baseline",
                        minWidth: 200,
                        maxWidth: 200,
                        ...r(699422).RC
                    },
                    titleContainer: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        color: r(632079).Tj.text.primary,
                        fontWeight: r(699422).Wy.medium,
                        fontSize: 14,
                        ...r(699422).RC
                    }
                };

            function ey(e) {
                let {
                    menuListProps: t,
                    title: i,
                    query: n
                } = e;
                return (0, l.jsx)(r(95582).A, { ...t,
                    title: (0, l.jsxs)("div", {
                        style: ex.titleContainer,
                        children: [i, (0, l.jsx)(r(894576).O, {}), (0, l.jsx)(r(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "tertiary",
                            style: ex.queryText,
                            children: ` — "${n}"`
                        })]
                    }),
                    icon: (0, l.jsx)(r(16275).I, {
                        icon: r(330274).magnifyingGlassIcon
                    }),
                    style: ex.container,
                    right: void 0,
                    buttonStyle: r(120021).of
                })
            }
            let eb = (0, r(109939).YK)({
                deepFindTitle: {
                    id: "search2.deepFind.title",
                    defaultMessage: "Search all sources with AI"
                },
                quickMatchesSectionTitle: {
                    id: "search2.quickMatches.sectionTitle",
                    defaultMessage: "Best matches"
                }
            });

            function ev() {
                let e = (0, r(960253).e)();
                return (0, r(960253).I)(() => ({
                    cardContainer: {
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 12,
                        overflow: "auto",
                        backgroundColor: r(632079).Tj.background.primary,
                        boxShadow: r(632079).Tj.shadow.outline.lg,
                        width: 340,
                        height: 420
                    },
                    coverSection: {
                        position: "relative",
                        height: 80,
                        width: 340,
                        flexShrink: 0,
                        backgroundColor: r(632079).Tj.background.secondary
                    },
                    coverPlaceholder: {
                        position: "relative",
                        width: "100%",
                        flex: "none",
                        height: 80,
                        backgroundColor: r(632079).Tj.background.secondary
                    },
                    iconOverlay: {
                        position: "absolute",
                        bottom: "-20px",
                        insetInlineStart: 24,
                        zIndex: 2,
                        borderRadius: "6px"
                    },
                    iconStatic: {
                        insetInlineStart: 24,
                        zIndex: 2,
                        borderRadius: "6px"
                    },
                    contentSection: {
                        padding: 24,
                        paddingTop: 28,
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                        flexGrow: 1,
                        overflow: "visible",
                        position: "relative"
                    },
                    bodyTextContainer: {
                        paddingTop: 12
                    },
                    breadcrumbRow: {
                        marginBottom: 0
                    },
                    breadcrumbText: {
                        color: r(632079).Tj.text.tertiary,
                        fontSize: 12
                    },
                    title: {
                        fontSize: 20,
                        lineHeight: "24px",
                        fontWeight: r(699422).Wy.semibold,
                        color: r(632079).Tj.text.primary
                    },
                    badge: {},
                    badgeCaption: {
                        color: r(632079).Tj.text.secondary,
                        fontSize: 11,
                        fontWeight: r(699422).Wy.medium,
                        lineHeight: 1.3
                    }
                }), [e])
            }
            let eS = {
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                ej = {
                    breadcrumbRow: {
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        overflow: "hidden",
                        minWidth: 0
                    },
                    description: {
                        fontSize: 14,
                        color: r(632079).Tj.text.secondary,
                        lineHeight: 1.5
                    }
                };

            function ew(e) {
                let {
                    coverVariant: t = "default",
                    coverStore: i,
                    icon: n,
                    breadcrumb: a,
                    badge: s,
                    title: o,
                    description: d,
                    footer: c
                } = e, u = function(e) {
                    let {
                        coverVariant: t
                    } = e, i = ev(), n = (0, r(960253).e)();
                    return (0, r(960253).I)(() => {
                        let e = "gray" === t,
                            a = "light" === n ? "#F2F2F2" : r(632079).Tj.gray.background.primary;
                        return { ...i,
                            coverSection: { ...i.coverSection,
                                ...e && {
                                    backgroundColor: a
                                }
                            },
                            coverPlaceholder: { ...i.coverPlaceholder,
                                ...e && {
                                    backgroundColor: a
                                }
                            },
                            contentSection: { ...i.contentSection
                            },
                            breadcrumbText: i.breadcrumbText,
                            title: { ...i.title,
                                cursor: "pointer",
                                wordBreak: "break-word"
                            }
                        }
                    }, [i, t, n])
                }({
                    coverVariant: t
                });
                return (0, l.jsxs)("div", {
                    style: u.cardContainer,
                    children: [(0, l.jsxs)("div", {
                        style: u.coverSection,
                        children: [i ? (0, l.jsx)(r(742726).z, {
                            variant: "default",
                            store: i,
                            coverFormat: {
                                type: "page_cover"
                            },
                            allowVideoPlayback: !1,
                            coverSizeFormat: "large",
                            coverHeight: 80,
                            showEmptyGalleryCover: !1,
                            coverContentFadedOverlay: !1,
                            onLoadProxiedImage: () => {},
                            renderAdditionalBlocks: !1
                        }) : (0, l.jsx)("div", {
                            style: u.coverPlaceholder
                        }), (0, l.jsx)("div", {
                            style: u.iconOverlay,
                            children: n
                        })]
                    }), (0, l.jsxs)("div", {
                        style: u.contentSection,
                        children: [s ? (0, l.jsx)(r(4458).fI, {
                            alignItems: "center",
                            justifyContent: "flex-start",
                            flexWrap: "wrap",
                            gap: 4,
                            marginBottom: 8,
                            children: s
                        }) : void 0, a ? (0, l.jsx)("div", {
                            style: ej.breadcrumbRow,
                            children: (0, l.jsx)("span", {
                                style: u.breadcrumbText,
                                children: a
                            })
                        }) : void 0, (0, l.jsx)("div", {
                            style: u.title,
                            children: o
                        }), d ? (0, l.jsx)("div", {
                            style: u.bodyTextContainer,
                            children: (0, l.jsx)("div", {
                                style: ej.description,
                                children: d
                            })
                        }) : void 0, c]
                    })]
                })
            }
            let ek = {
                    container: {
                        paddingTop: 16,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8
                    },
                    shimmerRow: {
                        height: 10,
                        backgroundColor: r(632079).Tj.background.secondary,
                        borderRadius: 9999
                    }
                },
                eI = {
                    width: 294
                },
                eM = {
                    width: 271
                },
                eT = {
                    width: 117
                };

            function eC() {
                return (0, l.jsxs)("div", {
                    style: ek.container,
                    children: [(0, l.jsx)("div", {
                        style: { ...ek.shimmerRow,
                            ...eI
                        }
                    }), (0, l.jsx)("div", {
                        style: { ...ek.shimmerRow,
                            ...eM
                        }
                    }), (0, l.jsx)("div", {
                        style: { ...ek.shimmerRow,
                            ...eI
                        }
                    }), (0, l.jsx)("div", {
                        style: { ...ek.shimmerRow,
                            ...eM
                        }
                    }), (0, l.jsx)("div", {
                        style: { ...ek.shimmerRow,
                            ...eT
                        }
                    })]
                })
            }
            var eA = () => r(955630),
                eP = () => r(871871),
                eR = () => r(623879);
            let e_ = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.52 1.61 14.92 13",
                    svg: (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("path", {
                            d: "M6.604 8.883a.626.626 0 0 1 .788.063l.082.096.146.2a4.14 4.14 0 0 0 3.267 1.593 4.14 4.14 0 0 0 3.414-1.793l.082-.096a.625.625 0 0 1 .947.807l-.19.258a5.4 5.4 0 0 1-3.629 2.037v1.307h2.617l.126.013a.626.626 0 0 1 0 1.225l-.127.012h-6.48a.625.625 0 0 1 0-1.25h2.614v-1.307a5.4 5.4 0 0 1-3.626-2.037l-.19-.258-.06-.111a.626.626 0 0 1 .22-.76m-.977-.174c-.198.383-.224.84-.06 1.25H1.187a.626.626 0 1 1 0-1.25z"
                        }), (0, l.jsx)("path", {
                            d: "M10.886 1.615a2.425 2.425 0 0 1 2.425 2.424v3.28a2.425 2.425 0 1 1-4.85 0V4.04a2.426 2.426 0 0 1 2.425-2.424M7.587 7.292H1.186a.626.626 0 0 1 0-1.25h6.4zm.177-3.917a3.3 3.3 0 0 0-.177 1.064v.186H1.186a.626.626 0 1 1 0-1.25z"
                        })]
                    })
                },
                eE = (0, r(104509).wt)("microphoneTextFillSmall", e_, "fillSmall"),
                eF = (0, r(109939).YK)({
                    blockPlaceholderLabel: {
                        id: "simpleBlockPreview.placeholder.blockLabel",
                        defaultMessage: "Block"
                    },
                    openPageToViewMore: {
                        id: "simpleBlockPreview.openPageToViewMore",
                        defaultMessage: "Open page to view more…"
                    }
                }),
                eN = {
                    container: {
                        fontSize: "13px",
                        lineHeight: "18px",
                        overflow: "hidden",
                        paddingTop: "12px",
                        color: r(632079).Tj.text.secondary
                    },
                    header1: {
                        fontSize: "17px",
                        lineHeight: "20px",
                        fontWeight: r(699422).Wy.semibold,
                        marginTop: "1.4em",
                        color: r(632079).Tj.text.accentPrimary
                    },
                    header2: {
                        fontSize: "15px",
                        lineHeight: "20px",
                        fontWeight: r(699422).Wy.semibold,
                        marginTop: "1.2em",
                        color: r(632079).Tj.text.accentPrimary
                    },
                    header3: {
                        fontSize: "14px",
                        lineHeight: "18px",
                        fontWeight: r(699422).Wy.semibold,
                        marginTop: "1em",
                        color: r(632079).Tj.text.accentPrimary
                    },
                    header4: {
                        fontSize: "13px",
                        lineHeight: "18px",
                        fontWeight: r(699422).Wy.semibold,
                        marginTop: "0.8em",
                        color: r(632079).Tj.text.accentPrimary
                    },
                    text: {
                        marginTop: "8px"
                    },
                    bulletList: {
                        paddingInlineStart: "18px",
                        marginInlineStart: "0px",
                        marginTop: "8px",
                        marginBottom: "0"
                    },
                    bulletItem: {
                        marginTop: "8px",
                        listStyleType: "disc"
                    },
                    numberedList: {
                        paddingInlineStart: "18px",
                        marginInlineStart: "0px",
                        marginTop: "8px",
                        marginBottom: "0"
                    },
                    numberedItem: {
                        marginTop: "8px",
                        listStyleType: "decimal"
                    },
                    todoContainer: {
                        marginTop: "0.6em"
                    },
                    checkbox: {
                        width: "14px",
                        height: "14px",
                        border: `1.5px solid ${r(632079).Tj.border.primary}`,
                        borderRadius: 3,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    checkboxChecked: {
                        width: "14px",
                        height: "14px",
                        borderRadius: 3,
                        flexShrink: 0,
                        backgroundColor: r(632079).Tj.blue.background.accentPrimary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    checkmark: {
                        width: 10,
                        height: 10,
                        color: r(632079).Tj.blue.text.inversePrimary
                    },
                    todoText: {
                        textDecoration: "none"
                    },
                    todoTextChecked: {
                        textDecoration: "line-through",
                        opacity: .5
                    },
                    toggleContainer: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "6px",
                        marginTop: "8px"
                    },
                    toggleArrow: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "18px",
                        height: "18px",
                        color: r(632079).Tj.icon.accentPrimary,
                        flexShrink: 0
                    },
                    toggleArrowIcon: {
                        width: "0.8em",
                        height: "0.8em",
                        transform: "rotateZ(-90deg)"
                    },
                    toggleText: {
                        flex: 1
                    },
                    toggleHeader1Container: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "6px",
                        marginTop: "1.4em"
                    },
                    toggleHeader1Arrow: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "20px",
                        height: "20px",
                        color: r(632079).Tj.icon.accentPrimary,
                        flexShrink: 0
                    },
                    toggleHeader1ArrowIcon: {
                        width: "14px",
                        height: "14px",
                        transform: "rotateZ(-90deg)"
                    },
                    toggleHeader1Text: {
                        fontSize: "17px",
                        lineHeight: "20px",
                        fontWeight: r(699422).Wy.semibold,
                        color: r(632079).Tj.text.accentPrimary,
                        flex: 1
                    },
                    toggleHeader2Container: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "6px",
                        marginTop: "1.2em"
                    },
                    toggleHeader2Arrow: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "20px",
                        height: "20px",
                        color: r(632079).Tj.icon.accentPrimary,
                        flexShrink: 0
                    },
                    toggleHeader2ArrowIcon: {
                        width: "12px",
                        height: "12px",
                        transform: "rotateZ(-90deg)"
                    },
                    toggleHeader2Text: {
                        fontSize: "15px",
                        lineHeight: "20px",
                        fontWeight: r(699422).Wy.semibold,
                        color: r(632079).Tj.text.accentPrimary,
                        flex: 1
                    },
                    toggleHeader3Container: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "6px",
                        marginTop: "1em"
                    },
                    toggleHeader3Arrow: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "18px",
                        height: "18px",
                        color: r(632079).Tj.icon.accentPrimary,
                        flexShrink: 0
                    },
                    toggleHeader3ArrowIcon: {
                        width: "11px",
                        height: "11px",
                        transform: "rotateZ(-90deg)"
                    },
                    toggleHeader3Text: {
                        fontSize: "14px",
                        lineHeight: "18px",
                        fontWeight: r(699422).Wy.semibold,
                        color: r(632079).Tj.text.accentPrimary,
                        flex: 1
                    },
                    quoteContainer: {
                        marginTop: "8px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderInlineStart: `3px solid ${r(632079).Tj.border.strong}`,
                        paddingInlineStart: "12px"
                    },
                    calloutContainer: {
                        position: "relative",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "6px",
                        marginTop: "8px",
                        padding: "12px 12px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        backgroundColor: r(632079).Tj.background.secondaryTranslucent
                    },
                    calloutIcon: {
                        fontSize: "1.2em",
                        flexShrink: 0
                    },
                    calloutContent: {
                        flex: 1,
                        minWidth: 0
                    },
                    code: {
                        marginTop: "8px",
                        padding: "12px 12px",
                        fontFamily: r(699422).Tf.githubMono,
                        fontSize: "11px",
                        backgroundColor: r(632079).Tj.background.secondaryTranslucent,
                        borderRadius: "6px",
                        whiteSpace: "pre",
                        overflow: "hidden",
                        tabSize: 2
                    },
                    meetingNotesContainer: {
                        position: "relative",
                        marginTop: "16px",
                        marginBottom: "16px",
                        overflow: "hidden",
                        border: `1px solid ${r(632079).Tj.border.primary}`,
                        borderRadius: "8px",
                        padding: "8px 12px",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        color: r(632079).Tj.text.tertiary
                    },
                    meetingNotesIcon: {
                        width: "20px",
                        height: "20px",
                        flexShrink: 0
                    },
                    meetingNotesTitle: {
                        fontSize: "15px",
                        fontWeight: r(699422).Wy.medium,
                        color: r(632079).Tj.text.secondary
                    },
                    imageContainer: {
                        position: "relative",
                        marginTop: "16px",
                        marginBottom: "16px",
                        borderRadius: "6px",
                        aspectRatio: "16/9",
                        overflow: "hidden"
                    },
                    image: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    },
                    table: {
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "16px",
                        marginBottom: "16px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        aspectRatio: "16/9",
                        border: `1px solid ${r(632079).Tj.border.primary}`
                    },
                    tableHeader: {
                        paddingTop: 22,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 8,
                        fontWeight: r(699422).Wy.semibold,
                        lineHeight: "1",
                        color: r(632079).Tj.text.tertiary,
                        borderBottom: `1px solid ${r(632079).Tj.border.secondary}`
                    },
                    tableHeaderText: {
                        opacity: .5
                    },
                    tableBody: {
                        flex: "1"
                    },
                    tableCell: {
                        flex: "1",
                        height: "20px",
                        borderBottom: `1px solid ${r(632079).Tj.border.secondary}`
                    },
                    collectionView: {
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "16px",
                        marginBottom: "16px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        aspectRatio: "16/9",
                        border: `1px solid ${r(632079).Tj.border.primary}`
                    },
                    collectionViewHeader: {
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        paddingTop: 22,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 8,
                        fontWeight: r(699422).Wy.semibold,
                        lineHeight: "1",
                        color: r(632079).Tj.text.tertiary,
                        borderBottom: `1px solid ${r(632079).Tj.border.secondary}`
                    },
                    collectionViewHeaderText: {
                        opacity: .5
                    },
                    collectionViewHeaderCTA: {
                        width: "28px",
                        height: "8px",
                        borderRadius: "3px",
                        backgroundColor: r(632079).Tj.blue.background.accentPrimary
                    },
                    collectionViewBody: {
                        flex: "1"
                    },
                    collectionViewCell: {
                        display: "flex",
                        alignItems: "center",
                        paddingInlineStart: "8px",
                        flex: "1",
                        height: "20px",
                        borderBottom: `1px solid ${r(632079).Tj.border.secondary}`
                    },
                    formView: {
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "16px",
                        marginBottom: "16px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        aspectRatio: "16/9",
                        border: `1px solid ${r(632079).Tj.border.primary}`
                    },
                    formViewHeader: {
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        paddingTop: 22,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 8,
                        fontWeight: r(699422).Wy.semibold,
                        lineHeight: "1",
                        color: r(632079).Tj.text.tertiary,
                        borderBottom: `1px solid ${r(632079).Tj.border.secondary}`
                    },
                    formViewHeaderCTA: {
                        width: "28px",
                        height: "8px",
                        borderRadius: "3px",
                        backgroundColor: r(632079).Tj.blue.background.accentPrimary
                    },
                    formViewHeaderText: {
                        opacity: .5
                    },
                    formViewMediaContainer: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        width: "140px",
                        height: "40px",
                        padding: "6px",
                        borderRadius: "6px",
                        border: `1px solid ${r(632079).Tj.border.secondary}`
                    },
                    formViewMediaAvatar: {
                        width: "6px",
                        height: "6px",
                        borderRadius: "9999px",
                        backgroundColor: r(632079).Tj.background.tertiary
                    },
                    formViewMediaLabel: {
                        width: "80px",
                        height: "4px",
                        borderRadius: "9999px",
                        backgroundColor: r(632079).Tj.background.tertiary
                    },
                    bold: {
                        fontWeight: r(699422).Wy.semibold
                    },
                    italic: {
                        fontStyle: "italic"
                    },
                    underline: {
                        textDecoration: "underline"
                    },
                    strikethrough: {
                        textDecoration: "line-through"
                    },
                    inlineCode: {
                        fontFamily: r(699422).Tf.githubMono,
                        fontSize: "0.85em",
                        backgroundColor: r(632079).Tj.gray.background.secondaryTranslucent,
                        borderRadius: "3px",
                        padding: "0.2em 0.3em"
                    },
                    mention: {
                        display: "inline",
                        opacity: "0.5"
                    },
                    pageMention: {
                        display: "inline"
                    },
                    pageMentionIconContainer: {
                        display: "inline-block",
                        position: "relative",
                        width: "1.3em",
                        height: "1.3em",
                        marginInlineEnd: "6px"
                    },
                    pageMentionIcon: {
                        fontSize: "1em",
                        lineHeight: "1"
                    },
                    pageMentionArrow: {
                        position: "absolute",
                        bottom: "-1px",
                        insetInlineEnd: "-2px",
                        width: "8px",
                        height: "8px",
                        color: r(632079).Tj.icon.tertiary
                    },
                    pageMentionTitle: {
                        textDecoration: "underline",
                        textDecorationColor: r(632079).Tj.border.primaryTranslucent,
                        textUnderlineOffset: "2px"
                    },
                    externalLinkMention: {
                        display: "inline"
                    },
                    externalLinkIcon: {
                        width: "1em",
                        height: "1em",
                        borderRadius: "2px",
                        objectFit: "contain",
                        verticalAlign: "text-bottom",
                        marginInlineEnd: "4px"
                    },
                    externalLinkSource: {
                        color: r(632079).Tj.text.secondary
                    },
                    externalLinkTitle: {
                        fontWeight: r(699422).Wy.medium,
                        textDecoration: "underline",
                        textDecorationColor: r(632079).Tj.border.primaryTranslucent,
                        textUnderlineOffset: "2px"
                    },
                    inlineEquation: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        backgroundColor: r(632079).Tj.gray.background.secondaryTranslucent,
                        borderRadius: "3px",
                        padding: "0 0.4em",
                        fontSize: "0.9em"
                    },
                    link: {
                        textDecoration: "underline",
                        textDecorationColor: r(632079).Tj.border.primaryTranslucent,
                        textUnderlineOffset: "3px"
                    },
                    nestedChildren: {
                        marginInlineStart: "0px"
                    },
                    placeholder: {
                        backgroundColor: r(632079).Tj.gray.background.secondaryTranslucent,
                        borderRadius: "4px",
                        padding: "8px 12px",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: r(632079).Tj.text.tertiary,
                        marginTop: "16px",
                        marginBottom: "16px"
                    },
                    placeholderIcon: {
                        fontSize: "1em"
                    },
                    viewMoreText: {
                        marginTop: "12px",
                        fontWeight: r(699422).Wy.semibold
                    },
                    style0: {
                        marginTop: 0
                    },
                    style1: {
                        width: 18,
                        height: 18,
                        objectFit: "cover",
                        borderRadius: 4
                    }
                };

            function ez(e) {
                let {
                    block: t,
                    isFirstChild: i
                } = e;
                if (!t.imageUrl || !t.spaceId) return null;
                let n = i ? { ...eN.imageContainer,
                    marginTop: 0
                } : eN.imageContainer;
                return (0, l.jsx)(r(738251).A, {
                    url: t.imageUrl,
                    isAuthenticated: !0,
                    permissionRecord: {
                        table: "block",
                        id: t.id,
                        spaceId: t.spaceId
                    },
                    render: (e, t) => e || !t ? null : (0, l.jsx)("div", {
                        style: n,
                        children: (0, l.jsx)("img", {
                            src: t,
                            alt: "",
                            style: eN.image
                        })
                    })
                })
            }

            function eL(e) {
                let {
                    block: t
                } = e;
                return t.calloutIcon ? (0, r(312028).A)(t.calloutIcon) ? (0, l.jsx)(r(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    width: 18,
                    height: 18,
                    children: (0, l.jsx)("span", {
                        style: eN.calloutIcon,
                        children: t.calloutIcon
                    })
                }) : t.spaceId ? (0, l.jsx)(r(738251).A, {
                    url: t.calloutIcon,
                    isAuthenticated: !0,
                    permissionRecord: {
                        table: "block",
                        id: t.id,
                        spaceId: t.spaceId
                    },
                    render: (e, t) => e || !t ? null : (0, l.jsx)(r(4458).fI, {
                        alignItems: "center",
                        justifyContent: "center",
                        width: 18,
                        height: 18,
                        children: (0, l.jsx)(r(989059).A, {
                            src: t,
                            style: eN.style1
                        })
                    })
                }) : null : null
            }

            function eB() {
                return (0, l.jsx)("svg", {
                    style: eN.checkmark,
                    viewBox: "0 0 14 14",
                    fill: "none",
                    children: (0, l.jsx)("path", {
                        d: "M5.5 11.5L1 7l1.5-1.5L5.5 8.5 12 2l1.5 1.5L5.5 11.5z",
                        fill: "currentColor"
                    })
                })
            }

            function eV(e) {
                let t = e[0];
                return t === eR().BQ.User || t === eR().BQ.Page || t === eR().BQ.Date || t === eR().BQ.Bot || t === eR().BQ.Team || t === eR().BQ.Collection
            }

            function eK() {
                return (0, l.jsx)("svg", {
                    style: eN.pageMentionArrow,
                    viewBox: "0 0 8 8",
                    fill: "currentColor",
                    children: (0, l.jsx)("path", {
                        d: "M1 1h6v6H5.5V3.5L2.25 6.75 1.25 5.75 4.5 2.5H1V1z"
                    })
                })
            }
            let eD = {
                style0: {
                    width: "50%",
                    flex: "none",
                    borderInlineEnd: `1px solid ${r(632079).Tj.border.secondary}`
                },
                style2: {
                    width: "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    backgroundColor: r(632079).Tj.background.tertiary
                },
                style3: {
                    borderInlineEnd: `1px solid ${r(632079).Tj.border.secondary}`
                }
            };

            function eO(e) {
                let {
                    data: t
                } = e;
                return t.icon ? (0, r(312028).A)(t.icon) ? (0, l.jsx)("span", {
                    style: eN.pageMentionIcon,
                    children: t.icon
                }) : t.pageId && t.spaceId ? (0, l.jsx)(r(738251).A, {
                    url: t.icon,
                    isAuthenticated: !0,
                    permissionRecord: {
                        table: "block",
                        id: t.pageId,
                        spaceId: t.spaceId
                    },
                    render: (e, t) => e || !t ? (0, l.jsx)("span", {
                        style: eN.pageMentionIcon,
                        children: "📄"
                    }) : (0, l.jsx)(r(989059).A, {
                        src: t,
                        style: {
                            width: "1em",
                            height: "1em",
                            objectFit: "contain",
                            verticalAlign: "text-bottom"
                        }
                    })
                }) : (0, l.jsx)("span", {
                    style: eN.pageMentionIcon,
                    children: "📄"
                }) : (0, l.jsx)("span", {
                    style: eN.pageMentionIcon,
                    children: "📄"
                })
            }

            function eH(e) {
                let {
                    labelWidth: t
                } = e;
                return (0, l.jsxs)(r(4458).fI, {
                    children: [(0, l.jsx)("div", {
                        style: { ...eN.collectionViewCell,
                            ...eD.style0
                        },
                        children: (0, l.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            children: [(0, l.jsx)("div", {
                                style: eD.style2
                            }), (0, l.jsx)("div", {
                                style: {
                                    width: `${t}px`,
                                    height: "4px",
                                    borderRadius: "9999px",
                                    backgroundColor: r(632079).Tj.background.tertiary
                                }
                            })]
                        })
                    }), (0, l.jsx)("div", {
                        style: { ...eN.collectionViewCell,
                            ...eD.style3
                        }
                    }), (0, l.jsx)("div", {
                        style: { ...eN.collectionViewCell,
                            ...eD.style3
                        }
                    }), (0, l.jsx)("div", {
                        style: eN.collectionViewCell
                    })]
                })
            }

            function eU() {
                return (0, l.jsxs)("div", {
                    style: eN.collectionView,
                    children: [(0, l.jsxs)("div", {
                        style: eN.collectionViewHeader,
                        children: [(0, l.jsx)("span", {
                            style: eN.collectionViewHeaderText,
                            children: "Database"
                        }), (0, l.jsx)("div", {
                            style: eN.collectionViewHeaderCTA
                        })]
                    }), (0, l.jsxs)("div", {
                        style: eN.collectionViewBody,
                        children: [(0, l.jsx)(eH, {
                            labelWidth: 80
                        }), (0, l.jsx)(eH, {
                            labelWidth: 30
                        }), (0, l.jsx)(eH, {
                            labelWidth: 60
                        }), (0, l.jsx)(eH, {
                            labelWidth: 40
                        }), (0, l.jsx)(eH, {
                            labelWidth: 70
                        }), (0, l.jsx)(eH, {
                            labelWidth: 40
                        })]
                    })]
                })
            }

            function eW() {
                return (0, l.jsxs)("div", {
                    style: eN.formView,
                    children: [(0, l.jsxs)("div", {
                        style: eN.formViewHeader,
                        children: [(0, l.jsx)("span", {
                            style: eN.formViewHeaderText,
                            children: "Form"
                        }), (0, l.jsx)("div", {
                            style: eN.formViewHeaderCTA
                        })]
                    }), (0, l.jsxs)(r(4458).VP, {
                        flex: "1",
                        alignItems: "center",
                        gap: 6,
                        padding: 12,
                        children: [(0, l.jsx)("div", {
                            style: eN.formViewMediaContainer,
                            children: (0, l.jsxs)(r(4458).fI, {
                                alignItems: "center",
                                gap: 4,
                                children: [(0, l.jsx)("div", {
                                    style: eN.formViewMediaAvatar
                                }), (0, l.jsx)("div", {
                                    style: eN.formViewMediaLabel
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            style: eN.formViewMediaContainer,
                            children: (0, l.jsxs)(r(4458).fI, {
                                alignItems: "center",
                                gap: 4,
                                children: [(0, l.jsx)("div", {
                                    style: eN.formViewMediaAvatar
                                }), (0, l.jsx)("div", {
                                    style: eN.formViewMediaLabel
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            style: eN.formViewMediaContainer,
                            children: (0, l.jsxs)(r(4458).fI, {
                                alignItems: "center",
                                gap: 4,
                                children: [(0, l.jsx)("div", {
                                    style: eN.formViewMediaAvatar
                                }), (0, l.jsx)("div", {
                                    style: eN.formViewMediaLabel
                                })]
                            })
                        })]
                    })]
                })
            }
            let eq = {
                style0: {
                    borderInlineEnd: `1px solid ${r(632079).Tj.border.secondary}`
                }
            };

            function eY() {
                return (0, l.jsxs)(r(4458).fI, {
                    children: [(0, l.jsx)("div", {
                        style: { ...eN.tableCell,
                            ...eq.style0
                        }
                    }), (0, l.jsx)("div", {
                        style: { ...eN.tableCell,
                            ...eq.style0
                        }
                    }), (0, l.jsx)("div", {
                        style: eN.tableCell
                    })]
                })
            }

            function e$() {
                return (0, l.jsxs)("div", {
                    style: eN.table,
                    children: [(0, l.jsx)("div", {
                        style: eN.tableHeader,
                        children: (0, l.jsx)("span", {
                            style: eN.tableHeaderText,
                            children: "Table"
                        })
                    }), (0, l.jsxs)("div", {
                        style: eN.tableBody,
                        children: [(0, l.jsx)(eY, {}), (0, l.jsx)(eY, {}), (0, l.jsx)(eY, {}), (0, l.jsx)(eY, {}), (0, l.jsx)(eY, {}), (0, l.jsx)(eY, {})]
                    })]
                })
            }

            function eG(e) {
                let {
                    data: t
                } = e;
                return (0, l.jsxs)("span", {
                    style: eN.pageMention,
                    children: [(0, l.jsxs)("span", {
                        style: eN.pageMentionIconContainer,
                        children: [(0, l.jsx)(eO, {
                            data: t
                        }), (0, l.jsx)(eK, {})]
                    }), (0, l.jsx)("span", {
                        style: eN.pageMentionTitle,
                        children: t.title
                    })]
                })
            }

            function eQ(e) {
                if (e.text && e.text.length > 0) {
                    let t = a().RQ(e.text),
                        i = e.resolvedTokenTexts,
                        n = e.externalLinkMentions,
                        s = e.pageMentions;
                    return t.map((e, t) => {
                        let o = null == i ? void 0 : i[t],
                            d = null == n ? void 0 : n[t],
                            c = null == s ? void 0 : s[t];
                        return function(e) {
                            let {
                                token: t,
                                index: i,
                                resolvedText: n,
                                externalLinkMentionData: s,
                                pageMentionData: o
                            } = e, d = a().N8A(t), c = a().uPN(t);
                            if (s) return function(e) {
                                let {
                                    data: t,
                                    index: r
                                } = e;
                                return (0, l.jsxs)("span", {
                                    style: eN.externalLinkMention,
                                    children: [t.iconUrl ? (0, l.jsx)("img", {
                                        src: t.iconUrl,
                                        alt: "",
                                        style: eN.externalLinkIcon
                                    }) : void 0, t.source ? (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)("span", {
                                            style: eN.externalLinkSource,
                                            children: t.source
                                        }), " "]
                                    }) : void 0, (0, l.jsx)("span", {
                                        style: eN.externalLinkTitle,
                                        children: t.title
                                    })]
                                }, r)
                            }({
                                data: s,
                                index: i
                            });
                            if (o) return (0, l.jsx)(eG, {
                                data: o
                            }, i);
                            let u = n ? ? d;
                            if (!c || 0 === c.length) return u;
                            if (c.some(eR().gi)) return (0, l.jsxs)("span", {
                                style: eN.inlineEquation,
                                children: [(0, l.jsx)("span", {
                                    children: "Σ"
                                }), (0, l.jsx)("span", {
                                    children: "Equation"
                                })]
                            }, i);
                            if (c.some(eV)) return (0, l.jsx)("span", {
                                style: eN.mention,
                                children: u
                            }, i);
                            let g = function(e) {
                                let t = {},
                                    i = {
                                        gray: {
                                            color: r(632079).Tj.gray.text.accentPrimary
                                        },
                                        brown: {
                                            color: r(632079).Tj.brown.text.accentPrimary
                                        },
                                        orange: {
                                            color: r(632079).Tj.orange.text.accentPrimary
                                        },
                                        yellow: {
                                            color: r(632079).Tj.yellow.text.accentPrimary
                                        },
                                        green: {
                                            color: r(632079).Tj.green.text.accentPrimary
                                        },
                                        blue: {
                                            color: r(632079).Tj.blue.text.accentPrimary
                                        },
                                        purple: {
                                            color: r(632079).Tj.purple.text.accentPrimary
                                        },
                                        pink: {
                                            color: r(632079).Tj.pink.text.accentPrimary
                                        },
                                        red: {
                                            color: r(632079).Tj.red.text.accentPrimary
                                        },
                                        gray_background: {
                                            background: r(632079).Tj.gray.background.secondary
                                        },
                                        brown_background: {
                                            background: r(632079).Tj.brown.background.secondary
                                        },
                                        orange_background: {
                                            background: r(632079).Tj.orange.background.secondary
                                        },
                                        yellow_background: {
                                            background: r(632079).Tj.yellow.background.secondary
                                        },
                                        green_background: {
                                            background: r(632079).Tj.green.background.secondary
                                        },
                                        blue_background: {
                                            background: r(632079).Tj.blue.background.secondary
                                        },
                                        purple_background: {
                                            background: r(632079).Tj.purple.background.secondary
                                        },
                                        pink_background: {
                                            background: r(632079).Tj.pink.background.secondary
                                        },
                                        red_background: {
                                            background: r(632079).Tj.red.background.secondary
                                        }
                                    };
                                for (let r of e)
                                    if ((0, eR().dR)(r)) Object.assign(t, eN.bold);
                                    else if ((0, eR().WW)(r)) Object.assign(t, eN.italic);
                                else if ((0, eR().cy)(r)) Object.assign(t, eN.underline);
                                else if ((0, eR().Eg)(r)) Object.assign(t, eN.strikethrough);
                                else if ((0, eR().rl)(r)) Object.assign(t, eN.inlineCode);
                                else if ((0, eR().Yu)(r)) {
                                    let e = r[1],
                                        n = i[e.endsWith("_bg") ? e.replace("_bg", "_background") : e];
                                    n && (n.color && (t.color = n.color), n.background && (t.backgroundColor = n.background))
                                } else(0, eR().sh)(r) && Object.assign(t, eN.link);
                                return t
                            }(c);
                            return 0 === Object.keys(g).length ? u : (0, l.jsx)("span", {
                                style: g,
                                children: u
                            }, i)
                        }({
                            token: e,
                            index: t,
                            resolvedText: o,
                            externalLinkMentionData: d,
                            pageMentionData: c
                        })
                    })
                }
                return e.plainText || ""
            }

            function eZ(e) {
                let t = [],
                    r = null,
                    i = [];
                for (let n of e) "bullet" === n.type || "numbered" === n.type ? (null !== r && r !== n.type && (t.push(i), i = []), r = n.type, i.push(n)) : (i.length > 0 && (t.push(i), i = [], r = null), t.push(n));
                return i.length > 0 && t.push(i), t
            }

            function eJ(e, t) {
                if (!e || 0 === e.length) return null;
                let r = eZ(e);
                return (0, l.jsx)("div", {
                    style: eN.nestedChildren,
                    children: r.map((e, r) => {
                        let i = 0 === r;
                        if (Array.isArray(e)) {
                            let n = e[0].type,
                                a = { ...i ? {
                                        marginTop: 0
                                    } : {}
                                };
                            return "bullet" === n ? (0, l.jsx)("ul", {
                                style: { ...eN.bulletList,
                                    ...a
                                },
                                children: e.map(e => (0, l.jsxs)("li", {
                                    style: eN.bulletItem,
                                    children: [eQ(e), eJ(e.children, t)]
                                }, e.id))
                            }, `list-${r}`) : "numbered" === n ? (0, l.jsx)("ol", {
                                style: { ...eN.numberedList,
                                    ...a
                                },
                                children: e.map(e => (0, l.jsxs)("li", {
                                    style: eN.numberedItem,
                                    children: [eQ(e), eJ(e.children, t)]
                                }, e.id))
                            }, `list-${r}`) : null
                        }
                        return eX({
                            block: e,
                            isFirstChild: i,
                            Prism: t,
                            index: r
                        })
                    })
                })
            }

            function eX(e) {
                let {
                    block: t,
                    isFirstChild: i,
                    Prism: n,
                    index: a
                } = e, s = void 0 !== a ? `${t.id}-${a}` : t.id, o = { ...i ? {
                        marginTop: 0
                    } : {}
                };
                switch (t.type) {
                    case "text":
                        return (0, l.jsxs)("div", {
                            style: { ...eN.text,
                                ...o
                            },
                            children: [eQ(t), eJ(t.children, n)]
                        }, s);
                    case "header1":
                        return (0, l.jsxs)("div", {
                            style: { ...eN.header1,
                                ...o
                            },
                            children: [eQ(t), eJ(t.children, n)]
                        }, s);
                    case "header2":
                        return (0, l.jsxs)("div", {
                            style: { ...eN.header2,
                                ...o
                            },
                            children: [eQ(t), eJ(t.children, n)]
                        }, s);
                    case "header3":
                        return (0, l.jsxs)("div", {
                            style: { ...eN.header3,
                                ...o
                            },
                            children: [eQ(t), eJ(t.children, n)]
                        }, s);
                    case "header4":
                        return (0, l.jsxs)("div", {
                            style: { ...eN.header4,
                                ...o
                            },
                            children: [eQ(t), eJ(t.children, n)]
                        }, s);
                    case "toggleHeader1":
                        return (0, l.jsxs)("div", {
                            style: { ...eN.toggleHeader1Container,
                                ...o
                            },
                            children: [(0, l.jsx)("div", {
                                style: eN.toggleHeader1Arrow,
                                children: (0, l.jsx)(r(16275).I, {
                                    icon: r(463778).U,
                                    style: eN.toggleHeader1ArrowIcon
                                })
                            }), (0, l.jsx)("div", {
                                style: eN.toggleHeader1Text,
                                children: eQ(t)
                            })]
                        }, s);
                    case "toggleHeader2":
                        return (0, l.jsxs)("div", {
                            style: { ...eN.toggleHeader2Container,
                                ...o
                            },
                            children: [(0, l.jsx)("div", {
                                style: eN.toggleHeader2Arrow,
                                children: (0, l.jsx)(r(16275).I, {
                                    icon: r(463778).U,
                                    style: eN.toggleHeader2ArrowIcon
                                })
                            }), (0, l.jsx)("div", {
                                style: eN.toggleHeader2Text,
                                children: eQ(t)
                            })]
                        }, s);
                    case "toggleHeader3":
                        return (0, l.jsxs)("div", {
                            style: { ...eN.toggleHeader3Container,
                                ...o
                            },
                            children: [(0, l.jsx)("div", {
                                style: eN.toggleHeader3Arrow,
                                children: (0, l.jsx)(r(16275).I, {
                                    icon: r(463778).U,
                                    style: eN.toggleHeader3ArrowIcon
                                })
                            }), (0, l.jsx)("div", {
                                style: eN.toggleHeader3Text,
                                children: eQ(t)
                            })]
                        }, s);
                    case "bullet":
                        return (0, l.jsx)("ul", {
                            style: { ...eN.bulletList,
                                ...o
                            },
                            children: (0, l.jsxs)("li", {
                                style: eN.bulletItem,
                                children: [eQ(t), eJ(t.children, n)]
                            })
                        }, s);
                    case "numbered":
                        return (0, l.jsx)("ol", {
                            style: { ...eN.numberedList,
                                ...o
                            },
                            children: (0, l.jsxs)("li", {
                                style: eN.numberedItem,
                                children: [eQ(t), eJ(t.children, n)]
                            })
                        }, s);
                    case "todo":
                        return (0, l.jsx)("div", {
                            style: { ...eN.todoContainer,
                                ...o
                            },
                            children: (0, l.jsxs)(r(4458).fI, {
                                alignItems: "flex-start",
                                gap: 6,
                                marginTop: 8,
                                children: [(0, l.jsx)(r(4458).fI, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 18,
                                    height: 18,
                                    gap: 6,
                                    children: (0, l.jsx)("div", {
                                        style: t.checked ? eN.checkboxChecked : eN.checkbox,
                                        children: t.checked ? (0, l.jsx)(eB, {}) : void 0
                                    })
                                }), (0, l.jsxs)("div", {
                                    children: [(0, l.jsx)("span", {
                                        style: t.checked ? eN.todoTextChecked : eN.todoText,
                                        children: eQ(t)
                                    }), eJ(t.children, n)]
                                })]
                            })
                        }, s);
                    case "toggle":
                        return (0, l.jsxs)("div", {
                            style: { ...eN.toggleContainer,
                                ...o
                            },
                            children: [(0, l.jsx)("div", {
                                style: eN.toggleArrow,
                                children: (0, l.jsx)(r(16275).I, {
                                    icon: r(463778).U,
                                    style: eN.toggleArrowIcon
                                })
                            }), (0, l.jsx)("div", {
                                style: eN.toggleText,
                                children: eQ(t)
                            })]
                        }, s);
                    case "quote":
                        return (0, l.jsxs)("div", {
                            style: { ...eN.quoteContainer,
                                ...o
                            },
                            children: [eQ(t), eJ(t.children, n)]
                        }, s);
                    case "callout":
                        var d;
                        return (0, l.jsxs)("div", {
                            style: { ...eN.calloutContainer,
                                ...o
                            },
                            children: [(0, l.jsx)(eL, {
                                block: t
                            }), (0, l.jsxs)("div", {
                                style: eN.calloutContent,
                                children: [eQ(t), (d = t.children, d && 0 !== d.length ? (0, l.jsx)(l.Fragment, {
                                    children: d.map((e, t) => eX({
                                        block: e,
                                        isFirstChild: 0 === t,
                                        Prism: n,
                                        index: t
                                    }))
                                }) : null)]
                            })]
                        }, s);
                    case "code":
                        {
                            let e = t.plainText || "",
                                r = t.codeLanguage || "javascript";
                            if (n && e) try {
                                let t = n.languages[r] || n.languages.javascript,
                                    i = n.highlight(e, t, r);
                                return (0, l.jsx)("div", {
                                    style: { ...eN.code,
                                        ...o
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: i
                                    }
                                }, s)
                            } catch (e) {}
                            return (0, l.jsx)("div", {
                                style: { ...eN.code,
                                    ...o
                                },
                                children: e
                            }, s)
                        }
                    case "image":
                        return (0, l.jsx)(ez, {
                            block: t,
                            isFirstChild: i ? ? !1
                        }, s);
                    case "table":
                        return (0, l.jsx)(e$, {}, s);
                    case "collectionView":
                        return (0, l.jsx)(eU, {}, s);
                    case "form":
                        return (0, l.jsx)(eW, {}, s);
                    case "placeholder":
                        if ("Meeting Notes" === t.placeholderLabel) {
                            let e = t.transcriptionTitle || t.placeholderLabel;
                            return (0, l.jsxs)("div", {
                                style: { ...eN.meetingNotesContainer,
                                    ...o
                                },
                                children: [(0, l.jsx)(r(16275).I, {
                                    size: "sm",
                                    icon: eE,
                                    style: eN.meetingNotesIcon
                                }), (0, l.jsx)("span", {
                                    style: eN.meetingNotesTitle,
                                    children: e
                                })]
                            }, s)
                        }
                        return (0, l.jsxs)("div", {
                            style: { ...eN.placeholder,
                                ...o
                            },
                            children: [(0, l.jsx)("span", {
                                style: eN.placeholderIcon,
                                children: function(e) {
                                    switch (e) {
                                        case "Image":
                                            return "🖼️";
                                        case "Video":
                                            return "🎬";
                                        case "Audio":
                                            return "🎵";
                                        case "PDF":
                                            return "📄";
                                        case "File":
                                            return "📎";
                                        case "Database":
                                        case "Simple Table":
                                            return "🗂️";
                                        case "Form":
                                            return "📝";
                                        case "Tweet":
                                            return "💬";
                                        case "Embed":
                                            return "🔗";
                                        case "Equation":
                                            return "📈";
                                        case "Meeting Notes":
                                            return "🎤";
                                        default:
                                            return "📦"
                                    }
                                }(t.placeholderLabel ? ? r(962299).A.formatMessage(eF.blockPlaceholderLabel))
                            }), (0, l.jsx)("span", {
                                children: t.placeholderLabel
                            })]
                        }, s);
                    default:
                        return (0, l.jsx)("div", {
                            style: eN.text,
                            children: t.plainText || ""
                        }, s)
                }
            }

            function e0({
                blocks: e,
                hasMoreContent: t
            }) {
                let {
                    value: i
                } = (0, r(815048).fJ)(r(832737).y), n = eZ(e);
                return (0, l.jsxs)("div", {
                    style: eN.container,
                    children: [n.map((e, t) => {
                        let r = 0 === t;
                        if (Array.isArray(e)) {
                            let n = e[0].type;
                            return "bullet" === n ? (0, l.jsx)("ul", {
                                style: { ...eN.bulletList,
                                    ...r ? eN.style0 : {}
                                },
                                children: e.map(e => (0, l.jsxs)("li", {
                                    style: eN.bulletItem,
                                    children: [eQ(e), eJ(e.children, i)]
                                }, e.id))
                            }, `list-${t}`) : "numbered" === n ? (0, l.jsx)("ol", {
                                style: { ...eN.numberedList,
                                    ...r ? eN.style0 : {}
                                },
                                children: e.map(e => (0, l.jsxs)("li", {
                                    style: eN.numberedItem,
                                    children: [eQ(e), eJ(e.children, i)]
                                }, e.id))
                            }, `list-${t}`) : null
                        }
                        return eX({
                            block: e,
                            isFirstChild: r,
                            Prism: i,
                            index: t
                        })
                    }), t ? (0, l.jsx)("div", {
                        style: eN.viewMoreText,
                        children: (0, l.jsx)(r(109939).sA, { ...eF.openPageToViewMore
                        })
                    }) : void 0]
                })
            }

            function e2(e) {
                let {
                    workflowData: t,
                    workflowId: n,
                    spaceId: a,
                    store: s,
                    creatorName: o
                } = e, d = (0, r(109939).tz)(), c = r(360851).N.createChildStore(s, {
                    table: "workflow",
                    id: n,
                    spaceId: a
                }), u = (0, r(682985).K8)(() => {
                    var e;
                    return (null == (e = c.getData()) ? void 0 : e.name) ? ? t.name ? ? ""
                }, [c, t.name]), g = (0, r(682985).K8)(() => {
                    var e;
                    return (null == (e = c.getData()) ? void 0 : e.description) ? ? t.description ? ? ""
                }, [c, t.description]), p = (0, r(682985).K8)(() => c.getCreatedByStore(), [c]), m = (0, r(682985).K8)(() => null == p ? void 0 : p.getDisplayName(d), [p, d]), h = (0, r(682985).K8)(() => {
                    let e = c.getRawIcon();
                    return e || (t.icon ? ? (0, r(337222).Oy)({
                        baseUrl: r(986939).A.domainBaseUrl || "",
                        shape: r(337222).WJ,
                        color: r(337222).i
                    }))
                }, [t.icon, c]);
                (0, i.useEffect)(() => {
                    c.load()
                }, [c]), (0, i.useEffect)(() => {
                    null == p || p.load()
                }, [p]);
                let f = d.formatMessage(e8.agentBadge),
                    x = ev();
                return (0, l.jsx)(ew, {
                    coverVariant: "gray",
                    icon: (0, l.jsx)(r(569553).B6, {
                        disabled: !0,
                        icon: {
                            pointer: s.pointer,
                            icon: h
                        },
                        iconRecordCategory: "workflow",
                        isEmptyPage: !1,
                        size: 48,
                        largeIcon: !0
                    }),
                    breadcrumb: o ? ? m,
                    badge: (0, l.jsx)(r(746434).E, {
                        style: x.badge,
                        content: (0, l.jsx)("div", {
                            style: x.badgeCaption,
                            children: f
                        })
                    }),
                    title: u,
                    description: g || void 0,
                    footer: (0, l.jsx)(eC, {})
                })
            }
            let e8 = (0, r(109939).YK)({
                agentBadge: {
                    id: "searchModal.agentCard.badge",
                    defaultMessage: "Agent"
                }
            });

            function e1() {
                return (0, l.jsx)(r(4458).fI, {
                    paddingTop: 2,
                    paddingBottom: 2,
                    children: (0, l.jsx)(r(894658).hC, {
                        connectors: ["github", "slack", "gmail"],
                        maxBubbles: 3,
                        iconSize: 12
                    })
                })
            }
            let e9 = {
                    width: 294
                },
                e5 = {
                    width: 271
                },
                e3 = {
                    width: 117
                };

            function e6() {
                return (0, l.jsxs)("div", {
                    style: ek.container,
                    children: [(0, l.jsx)("div", {
                        style: { ...ek.shimmerRow,
                            ...e9
                        }
                    }), (0, l.jsx)("div", {
                        style: { ...ek.shimmerRow,
                            ...e5
                        }
                    }), (0, l.jsx)("div", {
                        style: { ...ek.shimmerRow,
                            ...e3
                        }
                    })]
                })
            }

            function e7(e) {
                let t = (0, r(109939).tz)(),
                    i = t.formatMessage(e4.breadcrumb),
                    n = t.formatMessage(e4.title),
                    a = t.formatMessage(e4.description);
                return (0, l.jsx)(ew, {
                    icon: (0, l.jsx)(r(971375).x, {
                        variant: "medium_large",
                        shadowVariant: "none"
                    }),
                    breadcrumb: i,
                    title: n,
                    description: a,
                    footer: (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(e1, {}), (0, l.jsx)(e6, {})]
                    })
                })
            }
            let e4 = (0, r(109939).YK)({
                breadcrumb: {
                    id: "searchModal.aiEntrypoint.breadcrumb",
                    defaultMessage: "Ask Notion AI"
                },
                title: {
                    id: "searchModal.aiEntrypoint.title",
                    defaultMessage: "Search all sources via AI"
                },
                description: {
                    id: "searchModal.aiEntrypoint.description",
                    defaultMessage: "Ask Notion AI to search across all your connected sources to find the best answer"
                }
            });

            function te() {
                let e = (0, r(109939).tz)(),
                    t = e.formatMessage(tt.breadcrumb),
                    i = e.formatMessage(tt.title),
                    n = e.formatMessage(tt.description),
                    a = e.formatMessage(tt.badge),
                    s = ev();
                return (0, l.jsx)(ew, {
                    icon: (0, l.jsx)("div", {
                        style: eS,
                        children: (0, l.jsx)(r(16275).I, {
                            icon: r(111481).M,
                            size: 48
                        })
                    }),
                    breadcrumb: t,
                    badge: (0, l.jsx)(r(746434).E, {
                        content: (0, l.jsx)("div", {
                            style: s.badgeCaption,
                            children: a
                        })
                    }),
                    title: i,
                    description: n,
                    footer: (0, l.jsx)(eC, {})
                })
            }
            let tt = (0, r(109939).YK)({
                breadcrumb: {
                    id: "searchModal.newPageCard.breadcrumb",
                    defaultMessage: "Notion / Create new page"
                },
                title: {
                    id: "searchModal.newPageCard.title",
                    defaultMessage: "Create a new page"
                },
                description: {
                    id: "searchModal.newPageCard.description",
                    defaultMessage: "Create a new Notion page"
                },
                badge: {
                    id: "searchModal.newPageCard.badge",
                    defaultMessage: "Settings"
                }
            });

            function tr(e) {
                let {
                    store: t
                } = e, i = (0, r(109939).tz)(), n = (0, r(533992).v3)(), {
                    personName: a,
                    personEmail: s,
                    personIcon: o,
                    isEmptyPage: d,
                    iconRecordCategory: c,
                    hasCover: u
                } = (0, r(682985).K8)(() => {
                    let e = t.getPersonProfileUserStore(),
                        a = (null == e ? void 0 : e.getEmail()) ? ? "",
                        s = (0, r(112293).Qe)({
                            store: t,
                            intl: i,
                            environment: n,
                            disableInsertedAnnotations: !r(886556).z.isXMLAssistantEnabled()
                        }),
                        o = t.getIcon(),
                        l = (0, r(569553).Te)(t);
                    return {
                        personName: s ? ? "",
                        personEmail: a,
                        personIcon: o,
                        isEmptyPage: t.isEmptyPage(),
                        iconRecordCategory: l,
                        hasCover: !!t.getFormatStore().getKeyValue("page_cover")
                    }
                }, [t, i, n]), g = i.formatMessage(ti.profileBadge), p = i.formatMessage(ti.breadcrumb, {
                    personName: a
                }), m = ev();
                return (0, l.jsx)(ew, {
                    coverStore: u ? t : void 0,
                    icon: o ? (0, l.jsx)(r(569553).B6, {
                        disabled: !0,
                        icon: o,
                        iconRecordCategory: c,
                        isEmptyPage: d,
                        size: 48,
                        largeIcon: !0
                    }) : void 0,
                    breadcrumb: p,
                    badge: (0, l.jsx)(r(746434).E, {
                        style: m.badge,
                        content: (0, l.jsx)("div", {
                            style: m.badgeCaption,
                            children: g
                        })
                    }),
                    title: a,
                    description: s || void 0,
                    footer: (0, l.jsx)(eC, {})
                })
            }
            let ti = (0, r(109939).YK)({
                    profileBadge: {
                        id: "searchModal.peopleCard.badge",
                        defaultMessage: "Profile"
                    },
                    breadcrumb: {
                        id: "searchModal.peopleCard.breadcrumb",
                        defaultMessage: "People / {personName}"
                    }
                }),
                tn = {
                    icon: {
                        height: 48,
                        width: 48,
                        fill: r(632079).Tj.icon.primary
                    }
                };

            function ta(e) {
                let {
                    action: t
                } = e, i = (0, r(109939).tz)(), {
                    title: n,
                    caption: a,
                    icon: s
                } = t.value, o = i.formatMessage(ts.settingsBadge), d = i.formatMessage(ts.breadcrumb, {
                    settingName: n
                }), c = ev();
                return (0, l.jsx)(ew, {
                    icon: (0, l.jsx)("div", {
                        style: eS,
                        children: s(tn.icon)
                    }),
                    breadcrumb: d,
                    badge: (0, l.jsx)(r(746434).E, {
                        content: (0, l.jsx)("div", {
                            style: c.badgeCaption,
                            children: o
                        })
                    }),
                    title: n,
                    description: a,
                    footer: (0, l.jsx)(eC, {})
                })
            }
            let ts = (0, r(109939).YK)({
                settingsBadge: {
                    id: "searchModal.settingsCard.badge",
                    defaultMessage: "Settings"
                },
                breadcrumb: {
                    id: "searchModal.settingsCard.breadcrumb",
                    defaultMessage: "Settings / {settingName}"
                }
            });

            function to(e) {
                if ("entrypoint" === e.variant) return e.entrypointKey === Q ? (0, l.jsx)(te, {}) : e.entrypointKey === Z ? (0, l.jsx)(tl, {}) : (0, l.jsx)(e7, {
                    entrypointKey: e.entrypointKey
                });
                if ("action" === e.variant) return (0, l.jsx)(ta, {
                    action: e.action
                });
                let {
                    result: t
                } = e;
                return t.workflowData ? (0, l.jsx)(e2, {
                    workflowData: t.workflowData,
                    workflowId: t.id,
                    spaceId: t.spaceId,
                    store: t.store,
                    creatorName: t.agentCreatorName
                }) : (0, l.jsx)(tu, {
                    result: t,
                    onSelectResult: e.onSelectResult
                })
            }

            function tl() {
                return (0, l.jsx)(ew, {
                    icon: (0, l.jsx)("div", {
                        style: eS,
                        children: (0, l.jsx)("div", {
                            style: td.icon
                        })
                    }),
                    title: "",
                    footer: (0, l.jsx)(eC, {})
                })
            }
            let td = {
                icon: {
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: r(632079).Tj.background.tertiary
                }
            };
            async function tc(e) {
                let t = e.getContentIds().slice(0, 100);
                if (0 === t.length) return;
                let i = t.map(t => r(970831).B.createChildStore(e, {
                    table: F().evP,
                    id: t
                }));
                await r(975162).lX(i, 100, e => e.load())
            }

            function tu(e) {
                let {
                    result: t,
                    onSelectResult: i
                } = e;
                return (0, r(682985).K8)(() => t.store.isPersonProfile(), [t.store]) ? (0, l.jsx)(tr, {
                    store: t.store
                }) : (0, l.jsx)(tp, {
                    result: t,
                    onSelectResult: i
                })
            }
            let tg = {
                gap: 8,
                overflow: "hidden"
            };

            function tp(e) {
                var t, s, o;
                let d, {
                        result: c,
                        onSelectResult: u
                    } = e,
                    g = (0, r(109939).tz)(),
                    p = (0, r(533992).v3)(),
                    m = (0, i.useRef)(null),
                    h = c.store;
                (0, i.useEffect)(() => {
                    m.current && (m.current.scrollTop = 0)
                }, [c]);
                let f = ((null == (t = c.highlights) ? void 0 : t.textHighlights) ? ? []).slice(1),
                    x = f.length > 0;
                (0, i.useEffect)(() => {
                    x || (h.load(), tc(h))
                }, [h, x]);
                let y = (0, r(682985).K8)(() => {
                        let e = p.currentUser.id;
                        if (e) return r(993189).b4_.fromGetRecordValueFn(p.defaultRecordCache.inMemoryRecordCache.makeGetRecordValueFn(e))
                    }, [p]),
                    {
                        simpleBlocks: b,
                        isPageContentReady: v,
                        mentionedPagePointers: S,
                        hasMoreContent: j
                    } = (0, r(682985).K8)(() => {
                        if (x) return {
                            simpleBlocks: [],
                            isPageContentReady: !0,
                            mentionedPagePointers: [],
                            hasMoreContent: !1
                        };
                        let e = function(e) {
                            let {
                                rootStore: t,
                                getRecordModel: i,
                                intl: s,
                                userTimeZone: o,
                                externalIntegrations: l
                            } = e, d = {
                                loadedCount: 0,
                                renderCount: 0,
                                hasUndefinedStore: !1,
                                hasMoreContent: !1,
                                numberedListCounters: new Map,
                                getRecordModel: i,
                                intl: s,
                                userTimeZone: o,
                                externalIntegrations: l,
                                mentionedPagePointers: []
                            }, c = [];
                            return ! function e(t) {
                                let {
                                    rootStore: i,
                                    depth: s,
                                    parentId: o,
                                    state: l,
                                    results: d
                                } = t;
                                if (i.getType() === eA().xd.transclusionReference) {
                                    let t = i.getTransclusionReferenceTargetStore();
                                    t && e({
                                        rootStore: t,
                                        depth: s,
                                        parentId: o,
                                        state: l,
                                        results: d
                                    });
                                    return
                                }
                                for (let t of i.getContentStores()) {
                                    if (l.loadedCount++, l.loadedCount > 200) {
                                        l.hasMoreContent = !0;
                                        return
                                    }
                                    t.isDefined() || (l.hasUndefinedStore = !0);
                                    let i = t.getType(),
                                        c = t.getModel();
                                    if (!i || !c) continue;
                                    let u = c.isType(eA().EY),
                                        g = c.isType(eA().Ib),
                                        p = !t.isEmptyTitle(),
                                        m = u && p || g || i === eA().xd.collectionView || i === eA().xd.table || i === eA().xd.form || i === eA().xd.callout || i === eA().xd.code || i === eA().xd.bookmark || i === eA().xd.file || i === eA().xd.equation;
                                    if (m && l.renderCount < 200) {
                                        let c = function(e) {
                                            let {
                                                blockStore: t,
                                                depth: i,
                                                state: s,
                                                parentId: o
                                            } = e, l = t.getType(), d = function(e, t) {
                                                var i, n, a;
                                                if (void 0 !== e) switch (e) {
                                                    case eA().xd.text:
                                                        return "text";
                                                    case eA().xd.header:
                                                        if (null != t && null != (i = t.getFormat()) && i.toggleable) return "toggleHeader1";
                                                        return "header1";
                                                    case eA().xd.subHeader:
                                                        if (null != t && null != (n = t.getFormat()) && n.toggleable) return "toggleHeader2";
                                                        return "header2";
                                                    case eA().xd.subSubHeader:
                                                        if (null != t && null != (a = t.getFormat()) && a.toggleable) return "toggleHeader3";
                                                        return "header3";
                                                    case eA().xd.header4:
                                                        return "header4";
                                                    case eA().xd.bulletedList:
                                                        return "bullet";
                                                    case eA().xd.numberedList:
                                                        return "numbered";
                                                    case eA().xd.toDo:
                                                        return "todo";
                                                    case eA().xd.toggle:
                                                        return "toggle";
                                                    case eA().xd.quote:
                                                        return "quote";
                                                    case eA().xd.callout:
                                                        return "callout";
                                                    case eA().xd.code:
                                                        return "code";
                                                    case eA().xd.image:
                                                        return "image";
                                                    case eA().xd.table:
                                                        return "table";
                                                    case eA().xd.collectionView:
                                                        if (t) {
                                                            for (let e of t.getCollectionViewStores())
                                                                if ("form_editor" === e.getType()) return "form"
                                                        }
                                                        return "collectionView";
                                                    case eA().xd.form:
                                                        return "form";
                                                    case eA().xd.collectionViewPage:
                                                    case eA().xd.equation:
                                                    case eA().xd.transcription:
                                                    case eA().xd.video:
                                                    case eA().xd.embed:
                                                    case eA().xd.audio:
                                                    case eA().xd.pdf:
                                                    case eA().xd.file:
                                                    case eA().xd.bookmark:
                                                    case eA().xd.tweet:
                                                    case eA().xd.gist:
                                                    case eA().xd.drive:
                                                    case eA().xd.figma:
                                                    case eA().xd.miro:
                                                    case eA().xd.excalidraw:
                                                    case eA().xd.drawing:
                                                    case eA().xd.loom:
                                                        return "placeholder";
                                                    case eA().xd.columnList:
                                                    case eA().xd.column:
                                                    case eA().xd.transclusionContainer:
                                                    case eA().xd.transclusionReference:
                                                    case eA().xd.page:
                                                    case eA().xd.factoryTask:
                                                    case eA().xd.linkToPage:
                                                    case eA().xd.linkToCollection:
                                                    case eA().xd.alias:
                                                    case eA().xd.personalHomePage:
                                                    case eA().xd.homeShortcuts:
                                                    case eA().xd.factory:
                                                    case eA().xd.button:
                                                    case eA().xd.divider:
                                                    case eA().xd.temporaryUi:
                                                    case eA().xd.editReference:
                                                    case eA().xd.copyIndicator:
                                                    case eA().xd.breadcrumb:
                                                    case eA().xd.tableOfContents:
                                                    case eA().xd.tableRow:
                                                    case eA().xd.tab:
                                                    case eA().xd.aiBlock:
                                                    case eA().xd.slide:
                                                    case eA().xd.post:
                                                    case eA().xd.workflow:
                                                    case eA().xd.mail:
                                                    case eA().xd.custom:
                                                    case eA().xd.framer:
                                                    case eA().xd.typeform:
                                                    case eA().xd.codepen:
                                                    case eA().xd.maps:
                                                    case eA().xd.invision:
                                                    case eA().xd.whimsical:
                                                    case eA().xd.abstract:
                                                    case eA().xd.sketch:
                                                    case eA().xd.replit:
                                                    case eA().xd.hex:
                                                    case eA().xd.deepnote:
                                                    case eA().xd.mixpanel:
                                                    case eA().xd.externalObjectInstance:
                                                    case eA().xd.externalObjectInstancePage:
                                                        return;
                                                    default:
                                                        return (0, r(722371).HB)(e)
                                                }
                                            }(l, t);
                                            if (!d) return;
                                            let c = {
                                                id: t.id,
                                                type: d,
                                                depth: i
                                            };
                                            if ("placeholder" !== d && "image" !== d && l && t.getTitleValue) {
                                                let e = t.getTitleValue();
                                                if (e && e.length > 0)
                                                    if (c.text = e, s.getRecordModel && s.intl && s.userTimeZone) {
                                                        c.plainText = (0, n().r4)({
                                                            textValue: e,
                                                            getRecordModel: s.getRecordModel,
                                                            intl: s.intl,
                                                            userTimeZone: s.userTimeZone
                                                        });
                                                        let t = a().RQ(e),
                                                            i = [],
                                                            o = {},
                                                            l = {},
                                                            d = new Set;
                                                        for (let e = 0; e < t.length; e++) {
                                                            let c = t[e],
                                                                f = (0, n().t2)({
                                                                    token: c,
                                                                    getRecordModel: s.getRecordModel,
                                                                    intl: s.intl,
                                                                    prefix: "@",
                                                                    seenBlocks: d,
                                                                    userTimeZone: s.userTimeZone,
                                                                    renderDateAnnotationsAsISO: !1,
                                                                    deterministic: !1,
                                                                    disableInsertedAnnotations: !1
                                                                });
                                                            i.push(f ? ? "");
                                                            let x = a().uPN(c);
                                                            if (x) {
                                                                if (s.externalIntegrations) {
                                                                    let t = x.find(eR().N5);
                                                                    if (t) {
                                                                        let i = a().T$c(t);
                                                                        if (i) {
                                                                            let t = function(e) {
                                                                                var t, i;
                                                                                let n, a, {
                                                                                        blockId: s,
                                                                                        getRecordModel: o,
                                                                                        externalIntegrations: l,
                                                                                        intl: d
                                                                                    } = e,
                                                                                    c = o({
                                                                                        table: F().evP,
                                                                                        id: s
                                                                                    });
                                                                                if (!(null != c && c.isType(eA().xd.externalObjectInstance)) && !(null != c && c.isType(eA().xd.externalObjectInstancePage))) return;
                                                                                let u = c.getFormatValue("original_url") || c.getFormatValue("uri");
                                                                                if (!u) return;
                                                                                let g = r(758654).Jf({
                                                                                        str: r(758654).qg(u).href,
                                                                                        allowNoProtocol: !0
                                                                                    }),
                                                                                    p = (0, r(375905).$B)({
                                                                                        url: u,
                                                                                        integrations: l,
                                                                                        currentSpaceId: c.getSpaceId()
                                                                                    }),
                                                                                    m = "success" === p.type ? p.integration.info.icon : void 0,
                                                                                    h = "success" === p.type ? p.pattern.name : void 0,
                                                                                    f = (0, r(625591).e)(h),
                                                                                    x = "success" === p.type ? (0, r(375905).WS)({
                                                                                        url: u,
                                                                                        integration: p.integration
                                                                                    }) : [],
                                                                                    y = c.getFormat(),
                                                                                    b = f.inline({
                                                                                        integrationIcon: m,
                                                                                        root: y,
                                                                                        relations: [],
                                                                                        parsedAttributes: x
                                                                                    });
                                                                                if (null != b && null != (t = b.title) && t.formatter && (0, r(375905).cz)(b.title.attribute)) {
                                                                                    let {
                                                                                        attribute: e,
                                                                                        formatter: t
                                                                                    } = b.title;
                                                                                    n = d.formatMessage(t, {
                                                                                        value: e.values[0]
                                                                                    })
                                                                                } else n = null != b && null != (i = b.title) && i.attribute && (0, r(375905).cz)(b.title.attribute) ? b.title.attribute.values[0] : g || u;
                                                                                return null != b && b.identifier && (0, r(375905).cz)(b.identifier) && (a = b.identifier.values[0]), {
                                                                                    iconUrl: m,
                                                                                    source: a,
                                                                                    title: n,
                                                                                    url: g || u
                                                                                }
                                                                            }({
                                                                                blockId: i,
                                                                                getRecordModel: s.getRecordModel,
                                                                                externalIntegrations: s.externalIntegrations,
                                                                                intl: s.intl
                                                                            });
                                                                            t && (o[e] = t)
                                                                        }
                                                                    }
                                                                }
                                                                let t = x.find(eR().ik);
                                                                if (t && !o[e]) {
                                                                    let r = a().q1R(t);
                                                                    o[e] = {
                                                                        iconUrl: r.icon_url,
                                                                        source: r.link_provider,
                                                                        title: r.title || r.href,
                                                                        url: r.href
                                                                    }
                                                                }
                                                                let n = x.find(eR().jI);
                                                                if (n) {
                                                                    let t = a().i$F(n);
                                                                    if (t && t.spaceId) {
                                                                        var u, g, p, m, h;
                                                                        s.mentionedPagePointers.push({
                                                                            id: t.id,
                                                                            spaceId: t.spaceId
                                                                        });
                                                                        let r = null == (u = s.getRecordModel) ? void 0 : u.call(s, {
                                                                                table: F().evP,
                                                                                id: t.id,
                                                                                spaceId: t.spaceId
                                                                            }),
                                                                            n = null == r || null == (g = r.getFormatValue) ? void 0 : g.call(r, "page_icon");
                                                                        if (n && eP().qg.isCustomEmojiString(n)) {
                                                                            let e = eP().qg.fromCustomEmojiString(n).pointer,
                                                                                t = null == (m = s.getRecordModel) ? void 0 : m.call(s, {
                                                                                    table: F().e4Z,
                                                                                    id: e.id,
                                                                                    spaceId: e.spaceId
                                                                                });
                                                                            n = (null == t || null == (h = t.getUrl) ? void 0 : h.call(t)) ? ? n
                                                                        }
                                                                        let a = null == (p = i[e]) ? void 0 : p.replace(/^@/, "");
                                                                        a && "Not found" !== a && (l[e] = {
                                                                            icon: n,
                                                                            title: a,
                                                                            pageId: t.id,
                                                                            spaceId: t.spaceId
                                                                        })
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        c.resolvedTokenTexts = i, Object.keys(o).length > 0 && (c.externalLinkMentions = o), Object.keys(l).length > 0 && (c.pageMentions = l)
                                                    } else c.plainText = (0, a().q4_)(e)
                                            }
                                            switch (d) {
                                                case "todo":
                                                    {
                                                        let e = t.getNonCollectionProperty("checked");e && (c.checked = "Yes" === (0, a().q4_)(e));
                                                        break
                                                    }
                                                case "numbered":
                                                    {
                                                        let e = (s.numberedListCounters.get(o) ? ? 0) + 1;s.numberedListCounters.set(o, e),
                                                        c.number = e;
                                                        break
                                                    }
                                                case "callout":
                                                    {
                                                        let e = t.getFormat();null != e && e.page_icon && (c.calloutIcon = e.page_icon, c.spaceId = t.getSpaceId());
                                                        break
                                                    }
                                                case "code":
                                                    {
                                                        let e = t.getNonCollectionProperty("language");
                                                        "string" == typeof e ? c.codeLanguage = e : Array.isArray(e) && (c.codeLanguage = (0, a().q4_)(e));
                                                        break
                                                    }
                                                case "image":
                                                    {
                                                        let e = t.getNonCollectionProperty("source");Array.isArray(e) && (c.imageUrl = (0, a().q4_)(e), c.spaceId = t.getSpaceId());
                                                        break
                                                    }
                                                case "placeholder":
                                                    if (l && (c.placeholderLabel = function(e) {
                                                            switch (e) {
                                                                case eA().xd.video:
                                                                    return "Video";
                                                                case eA().xd.audio:
                                                                    return "Audio";
                                                                case eA().xd.pdf:
                                                                    return "PDF";
                                                                case eA().xd.file:
                                                                    return "File";
                                                                case eA().xd.embed:
                                                                    return "Embed";
                                                                case eA().xd.bookmark:
                                                                    return "Bookmark";
                                                                case eA().xd.tweet:
                                                                    return "Tweet";
                                                                case eA().xd.gist:
                                                                    return "Gist";
                                                                case eA().xd.drive:
                                                                    return "Google Drive";
                                                                case eA().xd.figma:
                                                                    return "Figma";
                                                                case eA().xd.miro:
                                                                    return "Miro";
                                                                case eA().xd.excalidraw:
                                                                    return "Excalidraw";
                                                                case eA().xd.drawing:
                                                                    return "Drawing";
                                                                case eA().xd.loom:
                                                                    return "Loom";
                                                                case eA().xd.collectionViewPage:
                                                                    return "Database";
                                                                case eA().xd.equation:
                                                                    return "Equation";
                                                                case eA().xd.transcription:
                                                                    return "Meeting Notes";
                                                                default:
                                                                    return "Block"
                                                            }
                                                        }(l)), l === eA().xd.transcription) {
                                                        let e = t.getBlockTitleStore().getValue();
                                                        e && e.length > 0 && (s.getRecordModel && s.intl && s.userTimeZone ? c.transcriptionTitle = (0, n().r4)({
                                                            textValue: e,
                                                            getRecordModel: s.getRecordModel,
                                                            intl: s.intl,
                                                            userTimeZone: s.userTimeZone
                                                        }) : c.transcriptionTitle = (0, a().q4_)(e))
                                                    }
                                                    break;
                                                case "text":
                                                case "header1":
                                                case "header2":
                                                case "header3":
                                                case "header4":
                                                case "toggleHeader1":
                                                case "toggleHeader2":
                                                case "toggleHeader3":
                                                case "bullet":
                                                case "toggle":
                                                case "quote":
                                                case "table":
                                                case "collectionView":
                                                case "form":
                                                    break;
                                                default:
                                                    (0, r(722371).HB)(d)
                                            }
                                            return c
                                        }({
                                            blockStore: t,
                                            depth: s,
                                            parentId: o,
                                            state: l
                                        });
                                        if (c && (d.push(c), i !== eA().xd.transclusionContainer && i !== eA().xd.transclusionReference && l.renderCount++, i !== eA().xd.toggle && !t.isNavigableBlock())) {
                                            let r = [];
                                            e({
                                                rootStore: t,
                                                depth: s + 1,
                                                parentId: t.id,
                                                state: l,
                                                results: r
                                            }), r.length > 0 && (c.children = r)
                                        }
                                    } else m ? l.hasMoreContent = !0 : t.isNavigableBlock() || i === eA().xd.toggle || i !== eA().xd.columnList && i !== eA().xd.column && i !== eA().xd.transclusionContainer && i !== eA().xd.transclusionReference || e({
                                        rootStore: t,
                                        depth: s,
                                        parentId: o,
                                        state: l,
                                        results: d
                                    })
                                }
                            }({
                                rootStore: t,
                                depth: 0,
                                parentId: void 0,
                                state: d,
                                results: c
                            }), {
                                blocks: c,
                                hasUndefinedStore: d.hasUndefinedStore,
                                mentionedPagePointers: d.mentionedPagePointers,
                                hasMoreContent: d.hasMoreContent
                            }
                        }({
                            rootStore: h,
                            getRecordModel: y,
                            intl: g,
                            userTimeZone: (0, r(714350).P)()
                        });
                        return {
                            simpleBlocks: e.blocks,
                            isPageContentReady: !e.hasUndefinedStore,
                            mentionedPagePointers: e.mentionedPagePointers,
                            hasMoreContent: e.hasMoreContent
                        }
                    }, [h, x, y, g]);
                (0, i.useEffect)(() => {
                    if (0 === S.length) return;
                    let e = S.map(e => r(970831).B.createChildStore(h, {
                        table: F().evP,
                        id: e.id
                    }));
                    r(975162).lX(e, 10, e => e.load())
                }, [h, S]);
                let {
                    previewIcon: w,
                    isEmptyPage: k,
                    hasCover: I
                } = (0, r(682985).K8)(() => ({
                    previewIcon: h.getIcon(),
                    isEmptyPage: h.isEmptyPage(),
                    hasCover: !!h.getFormatStore().getKeyValue("page_cover")
                }), [h]), M = (0, r(682985).K8)(() => (0, r(569553).Te)(h), [h]), T = (0, r(682985).K8)(() => {
                    let e = (0, r(112293).Qe)({
                        store: h,
                        intl: g,
                        environment: p,
                        disableInsertedAnnotations: !r(886556).z.isXMLAssistantEnabled()
                    });
                    return e && e.trim().length > 0 ? e : void 0
                }, [h, g, p]), C = g.formatMessage({
                    id: "search.preview.untitledPage",
                    defaultMessage: "Untitled"
                }), A = (d = ev(), (0, r(960253).I)(() => ({ ...d,
                    coverSection: { ...d.coverSection,
                        position: "relative"
                    },
                    actionBarOverlay: {
                        position: "sticky",
                        top: 8,
                        paddingInlineEnd: 8,
                        zIndex: 3,
                        marginTop: -28,
                        display: "flex",
                        justifyContent: "flex-end"
                    },
                    contentSection: { ...d.contentSection,
                        gap: "6px",
                        position: "relative"
                    },
                    badgeRow: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                        gap: "4px",
                        marginBottom: "8px"
                    },
                    breadcrumbRow: {
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        overflow: "hidden",
                        minWidth: 0
                    },
                    pathHighlight: {
                        color: r(632079).Tj.blue.text.accentPrimary
                    },
                    title: { ...d.title,
                        cursor: "pointer",
                        wordBreak: "break-word"
                    },
                    untitledPageColor: {
                        color: r(632079).Tj.text.tertiary
                    },
                    highlightItem: {
                        fontSize: "13px",
                        lineHeight: "18px",
                        color: r(632079).Tj.text.secondary,
                        cursor: "pointer",
                        marginBottom: "8px",
                        wordBreak: "break-word",
                        overflowWrap: "break-word"
                    },
                    highlight: {
                        color: r(632079).Tj.blue.text.accentPrimary,
                        fontWeight: r(699422).Wy.semibold
                    },
                    pageContentPreview: {
                        cursor: "pointer",
                        overflow: "visible",
                        flexGrow: 1
                    },
                    loadingShimmer: {
                        backgroundColor: r(632079).Tj.background.primary
                    },
                    fadeOutOverlay: {
                        position: "absolute",
                        bottom: 0,
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        height: 80,
                        pointerEvents: "none"
                    }
                }), [d])), P = (0, r(648481).PO)({
                    words: (0, r(648481).oQ)(null == (s = c.highlight) ? void 0 : s.pathText),
                    highlightText: null == (o = c.highlight) ? void 0 : o.pathText,
                    styleOverride: A.pathHighlight
                }), R = (0, i.useMemo)(() => new Set((c.badges ? ? []).map(e => e.type)), [c.badges]), _ = (0, r(682985).K8)(() => (0, r(307983).mG)(h).length > 0, [h]);
                return (0, l.jsxs)("div", {
                    ref: m,
                    style: A.cardContainer,
                    children: [(0, l.jsx)("div", {
                        style: A.actionBarOverlay,
                        children: (0, l.jsxs)(r(330116).E, {
                            size: "sm",
                            children: [(0, l.jsx)(r(517352).e, {
                                iconLeading: r(588739).linkIcon,
                                tooltip: "Copy link",
                                onClick: async () => {
                                    let e = (0, r(483227).J8)({
                                            store: h,
                                            pageVisitSource: r(254656).y8.SearchQuery,
                                            fullyQualified: !0
                                        }),
                                        t = await (0, r(969899).jd)();
                                    await t({
                                        environment: p,
                                        stringValue: e
                                    }), r(436555).D6({
                                        label: g.formatMessage({
                                            id: "searchResultCard2.linkCopied",
                                            defaultMessage: "Link copied"
                                        })
                                    })
                                }
                            }), (0, l.jsx)(r(517352).e, {
                                iconLeading: r(684668).arrowDiagonalUpRightIcon,
                                tooltip: "Open page",
                                onClick: e => {
                                    u({
                                        result: c,
                                        event: e,
                                        fromSidePeekPanel: !0
                                    })
                                }
                            })]
                        })
                    }), I ? (0, l.jsxs)("div", {
                        style: A.coverSection,
                        children: [(0, l.jsx)(r(742726).z, {
                            variant: "gallery",
                            store: h,
                            coverFormat: {
                                type: "page_cover"
                            },
                            allowVideoPlayback: !1,
                            coverSizeFormat: "large",
                            coverHeight: 80,
                            showEmptyGalleryCover: !1,
                            coverContentFadedOverlay: !1,
                            onLoadProxiedImage: () => {},
                            renderAdditionalBlocks: !1,
                            style: {
                                border: "none",
                                borderRadius: 0
                            },
                            imageCoverWrapStyle: {
                                border: "none",
                                borderRadius: 0
                            }
                        }), w ? (0, l.jsx)("div", {
                            style: A.iconOverlay,
                            children: (0, l.jsx)(r(569553).B6, {
                                disabled: !0,
                                icon: w,
                                iconRecordCategory: M,
                                isEmptyPage: k,
                                size: 48,
                                largeIcon: !0
                            })
                        }) : void 0]
                    }) : (0, l.jsx)("div", {
                        style: A.coverPlaceholder,
                        children: w ? (0, l.jsx)("div", {
                            style: A.iconOverlay,
                            children: (0, l.jsx)(r(569553).B6, {
                                disabled: !0,
                                icon: w,
                                iconRecordCategory: M,
                                isEmptyPage: k,
                                size: 48,
                                largeIcon: !0
                            })
                        }) : void 0
                    }), (0, l.jsxs)("div", {
                        style: A.contentSection,
                        children: [R.has("is_collection") || R.has("is_template") || R.has("popular_this_week") || R.has("most_viewed") || R.has("agent") || R.has("ai_skill") ? (0, l.jsxs)("div", {
                            style: A.badgeRow,
                            children: [R.has("is_collection") ? (0, l.jsx)(r(621942).se, {}) : void 0, R.has("is_template") ? (0, l.jsx)(r(621942).rx, {}) : void 0, R.has("popular_this_week") ? (0, l.jsx)(r(621942).oj, {}) : void 0, R.has("most_viewed") ? (0, l.jsx)(r(621942).iY, {}) : void 0, R.has("agent") ? (0, l.jsx)(r(621942).Kg, {}) : void 0, R.has("ai_skill") ? (0, l.jsx)(r(621942).Wn, {}) : void 0]
                        }) : void 0, _ ? (0, l.jsx)("div", {
                            style: A.breadcrumbRow,
                            children: (0, l.jsx)(r(307983).Ay, {
                                store: h,
                                showFullPathInTooltip: !0,
                                highlighter: P,
                                style: {
                                    minWidth: 0,
                                    overflow: "hidden"
                                },
                                innerStyle: {
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    minWidth: 0,
                                    maxWidth: "none"
                                }
                            })
                        }) : void 0, (0, l.jsx)("div", {
                            role: "button",
                            tabIndex: 0,
                            style: { ...A.title,
                                ...!T && A.untitledPageColor
                            },
                            onClick: e => {
                                u({
                                    result: c,
                                    event: e,
                                    fromSidePeekPanel: !0
                                })
                            },
                            onKeyDown: e => {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), u({
                                    result: c,
                                    event: e,
                                    fromSidePeekPanel: !0
                                }))
                            },
                            children: (0, l.jsx)(r(627918).A, {
                                store: h,
                                placeholder: C,
                                shouldWrap: !0
                            })
                        }), x ? (0, l.jsx)(r(18079).A, {
                            maxLines: 15,
                            style: tg,
                            children: f.map((e, t) => {
                                let i = (0, r(648481).Ay)(e.highlightedText),
                                    n = (0, r(648481).fc)(e.highlightedText),
                                    a = (0, r(648481).n3)(e.highlightedText);
                                return (0, l.jsxs)("div", {
                                    role: "button",
                                    tabIndex: 0,
                                    style: A.highlightItem,
                                    onClick: e => {
                                        u({
                                            result: c,
                                            event: e,
                                            fromSidePeekPanel: !0
                                        })
                                    },
                                    onKeyDown: e => {
                                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), u({
                                            result: c,
                                            event: e,
                                            fromSidePeekPanel: !0
                                        }))
                                    },
                                    children: [n ? (0, l.jsx)("span", {
                                        children: "..."
                                    }) : void 0, (0, l.jsx)(r(663528).A, {
                                        text: e.highlightedText,
                                        highlighter: {
                                            tokenize: () => (0, r(648481).nB)(i),
                                            style: A.highlight
                                        }
                                    }), a ? (0, l.jsx)("span", {
                                        children: "..."
                                    }) : void 0]
                                }, t)
                            })
                        }) : (0, l.jsx)("div", {
                            role: "button",
                            tabIndex: 0,
                            style: A.pageContentPreview,
                            onClick: e => {
                                u({
                                    result: c,
                                    event: e,
                                    fromSidePeekPanel: !0
                                })
                            },
                            onKeyDown: e => {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), u({
                                    result: c,
                                    event: e,
                                    fromSidePeekPanel: !0
                                }))
                            },
                            children: v ? (0, l.jsx)(e0, {
                                blocks: b,
                                hasMoreContent: j
                            }) : (0, l.jsx)("div", {
                                style: A.loadingShimmer,
                                children: (0, l.jsx)(r(394673).A, {
                                    paragraphs: [{
                                        lineHeight: 11,
                                        lineMargin: 6,
                                        sectionWidths: [100, 100, 80],
                                        repeat: 3,
                                        sectionMargin: 0
                                    }]
                                })
                            })
                        })]
                    })]
                })
            }

            function tm(e) {
                let t, {
                        result: i,
                        cardTopPadding: n,
                        isVisible: a
                    } = e,
                    s = (0, r(960253).I)(() => ({
                        panel: {
                            width: 406,
                            height: "100%",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            flexShrink: 0,
                            zIndex: 1,
                            opacity: +!!a,
                            transform: a ? "scale(1)" : "scale(0.95)",
                            transformOrigin: "center center",
                            transition: "opacity 0.2s ease, transform 0.2s ease",
                            pointerEvents: a ? "auto" : "none"
                        },
                        cardContainer: {
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            paddingInlineStart: 24,
                            paddingInlineEnd: 40,
                            paddingTop: n
                        }
                    }), [n, a]);
                return t = "loading" === i.type ? (0, l.jsx)(tx, {}) : "special" === i.type ? (0, l.jsx)(to, {
                    variant: "entrypoint",
                    entrypointKey: i.key
                }) : "action" === i.type ? (0, l.jsx)(to, {
                    variant: "action",
                    action: i.action
                }) : "upcoming_meeting_no_linked_page" === i.type ? (0, l.jsx)(tf, {
                    event: i.event
                }) : (0, l.jsx)(to, {
                    variant: "result",
                    result: i.result,
                    onSelectResult: e.onSelectResult
                }), (0, l.jsx)("aside", {
                    style: s.panel,
                    children: (0, l.jsx)("div", {
                        style: s.cardContainer,
                        children: t
                    })
                })
            }
            let th = {
                shimmerCircle: {
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: r(632079).Tj.background.tertiary
                }
            };

            function tf(e) {
                let t = (0, r(109939).tz)(),
                    i = e.event.summary ? ? t.formatMessage(ty.untitledMeeting),
                    n = t.formatMessage(ty.createMeetingNoteCaption);
                return (0, l.jsx)(ew, {
                    icon: (0, l.jsx)("div", {
                        style: eS,
                        children: (0, l.jsx)(r(16275).I, {
                            icon: r(681875).a,
                            size: 48
                        })
                    }),
                    title: i,
                    description: n
                })
            }

            function tx() {
                return (0, l.jsx)(ew, {
                    icon: (0, l.jsx)("div", {
                        style: eS,
                        children: (0, l.jsx)("div", {
                            style: th.shimmerCircle
                        })
                    }),
                    title: "",
                    footer: (0, l.jsx)(eC, {})
                })
            }
            let ty = (0, r(109939).YK)({
                createMeetingNoteCaption: {
                    id: "search2.createMeetingNoteCaption",
                    defaultMessage: "Create meeting note"
                },
                untitledMeeting: {
                    id: "search2.untitledMeeting",
                    defaultMessage: "Untitled meeting"
                }
            });

            function tb(e) {
                return e === eh || e === ef || e === en || e === Q || e === Z
            }
            let tv = {
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    overflow: "hidden"
                },
                tS = i.forwardRef(function(e, t) {
                    var n;
                    let {
                        onDismiss: a,
                        currentView: s,
                        isResultsLoading: o,
                        searchUserPreferences: d,
                        query: c,
                        searchSessionId: u,
                        searchSessionFlowNumber: g,
                        results: p,
                        filters: m,
                        setCurrentView: h,
                        debugConfig: f,
                        searchActionResults: x,
                        isShowingHighlightPane: y,
                        disableSidePeek: b,
                        searchAnalytics: v,
                        sort: S,
                        onSortChange: j,
                        numTotalServerResults: w
                    } = e, k = d.settings.hideAiTopResultEnabled, [I, M] = (0, i.useState)(r(661238).ZK), [T, C] = (0, i.useState)(!1), [A, P] = (0, i.useState)(!1), R = (0, r(533992).v3)(), _ = (0, r(972740).L)(), E = (0, r(145075).E)({
                        query: c,
                        filters: m
                    }), F = (0, r(682985).K8)(() => r(357887)._.state.isNewElectronTab, [], {
                        debugName: "Search2.isNewElectronTab"
                    }), N = (0, r(851468).o)(), z = R.device.isElectron, L = (0, r(682985).K8)(() => (0, r(817599).q)(R) && z, [R, z]), B = (0, i.useCallback)(e => {
                        a(e), P(!1), C(!1), M(r(661238).ZK)
                    }, [a]), V = (0, r(255139).mk)({
                        searchSessionId: u,
                        searchSessionFlowNumber: g
                    }), K = (0, r(682985).K8)(() => r(357887)._.state.openedTimeMs, [], {
                        debugName: "SearchResults.openedTimeMs"
                    }), D = (0, i.useCallback)(e => {
                        let t = Date.now(),
                            i = v.getResultRenderTime(e.result.id),
                            n = r(785385).default.state,
                            a = n.firstKeyStrokeTimeMs,
                            s = K ? t - K : void 0;
                        v.trackSelectSearchItem({ ...e,
                            searchSessionMetrics: {
                                numKeystrokes: n.numKeystrokes,
                                hadMetaClick: n.hadMetaClick,
                                timeToSelectMs: s,
                                timeFromFirstKeyStrokeToSelectMs: a ? t - a : s,
                                timeToRenderResult: i
                            }
                        })
                    }, [v, K]), O = (0, i.useCallback)(({
                        result: e,
                        event: t,
                        fromSidePeekPanel: i
                    }) => {
                        ! function(e) {
                            if (!("button" in e)) return !0;
                            let t = 1 === e.button,
                                r = 0 === e.button,
                                i = "auxclick" === e.type;
                            return !t && (!r || !i)
                        }(t) || ((0, r(7029).V)(t) && r(785385).default.update(e => ({ ...e,
                            hadMetaClick: !0
                        })), q({
                            event: t,
                            result: e,
                            context: "results" === s ? "query_results" : "recent_pages",
                            queryId: V,
                            trackSelectSearchItem: D,
                            closeSearch: B,
                            isCommandSearch: L,
                            environment: R,
                            electronTabs: N,
                            isNewElectronTab: F,
                            source: r(254656).y8["results" === s ? "SearchQuery" : "SearchRecents"],
                            fromSidePeekPanel: i
                        }))
                    }, [D, B, s, N, R, L, F, V]), H = (E || "recents" === s) && y && !b, U = (0, i.useCallback)(e => {
                        let t = null != f && f.debugInfo ? f.debugInfo.response.resultsDebugMap[e.id] : void 0;
                        return {
                            action: ({
                                event: t
                            }) => O({
                                result: e,
                                event: t
                            }),
                            key: (0, r(898051).a)(e),
                            render: i => (0, l.jsx)(r(120021).Kr, { ...i,
                                currentView: s,
                                result: e,
                                queryId: V,
                                analytics: {
                                    endTimeToRenderServerResultsTiming: v.endTimeToRenderServerResultsTiming,
                                    setResultRenderTime: v.setResultRenderTime
                                },
                                debugHits: t
                            })
                        }
                    }, [O, s, V, v, f]), {
                        sections: W,
                        recentResults: ee
                    } = function(e) {
                        var t;
                        let n, a, s, o, d, c, u, g, p, {
                                numberOfRecentPagesToShow: m,
                                buildMenuListItem: h,
                                queryId: f,
                                closeSearch: x
                            } = e,
                            y = (0, r(533992).v3)(),
                            b = (0, r(972740).L)(),
                            v = (0, r(828294).N)("ai_prompt_pages"),
                            {
                                section: S,
                                pageIdsFromUpcomingMeetings: j,
                                upcomingMeetingResults: w
                            } = function(e) {
                                let {
                                    trackSelectSearchItem: t,
                                    closeSearch: n,
                                    queryId: a
                                } = e, s = (0, r(109939).tz)(), o = (0, r(533992).v3)(), d = (0, r(515467).m)(), {
                                    orderedDays: c,
                                    eventsByDay: u,
                                    displayState: g
                                } = (0, r(924394).tP)(), p = (0, r(851468).o)(), m = (0, r(682985).K8)(() => (0, r(817599).q)(o) && o.device.isElectron, [o]), {
                                    isNewElectronTab: h,
                                    searchSessionId: f
                                } = (0, r(682985).K8)(() => ({
                                    isNewElectronTab: r(357887)._.state.isNewElectronTab,
                                    searchSessionId: r(357887)._.state.sessionId
                                }), [], {
                                    debugName: "Search2.isNewElectronTab"
                                }), x = d.botId, {
                                    upcomingMeetingSection: y,
                                    pageResultsFromUpcomingMeetings: b
                                } = (0, i.useMemo)(() => {
                                    if ("events" !== g) return {
                                        upcomingMeetingSection: void 0,
                                        pageResultsFromUpcomingMeetings: []
                                    };
                                    let e = [];
                                    for (let t of c) {
                                        let r = u.get(t);
                                        r && e.push(...r)
                                    }
                                    let i = [...e].sort(X).slice(0, 2),
                                        y = e => {
                                            var t;
                                            let i, n = new Date(e.event.start.dateTime).getTime();
                                            return {
                                                eventName: e.event.summary ? ? s.formatMessage(ei.untitledMeeting),
                                                numberOfAttendees: (null == (t = e.event.attendees) ? void 0 : t.length) ? ? 0,
                                                timeUntilText: function(e) {
                                                    let {
                                                        meetingStartTime: t,
                                                        intl: i
                                                    } = e, n = t - Date.now();
                                                    if (n <= 0) return i.formatMessage(Y.now);
                                                    if (n < r(695216).pT) {
                                                        let e = (0, r(362008).ap)(t);
                                                        return `${e}m ${i.formatMessage(Y.fromNow)}`
                                                    }
                                                    if (n < r(695216).nD) {
                                                        let e = (0, r(362008).qs)(t);
                                                        return `${e}h ${i.formatMessage(Y.fromNow)}`
                                                    }
                                                    let a = (0, r(362008).AQ)(t);
                                                    return `${a}d ${i.formatMessage(Y.fromNow)}`
                                                }({
                                                    meetingStartTime: n,
                                                    intl: s
                                                }),
                                                timeUntilEventAnalyticsBucket: (i = n - Date.now()) <= 0 ? "now" : i < r(695216).pT ? "less_than_1h" : i < 8 * r(695216).pT ? "less_than_8h" : i < r(695216).nD ? "less_than_24h" : "more_than_1d"
                                            }
                                        },
                                        b = [];
                                    for (let e = 0; e < i.length; e++) {
                                        let t = i[e],
                                            r = function(e) {
                                                let t = e.primaryTranscriptionBlockStoreState;
                                                if (t && "primaryTranscriptionBlockStore" in t && t.primaryTranscriptionBlockStore) return t.primaryTranscriptionBlockStore
                                            }(t);
                                        r ? b.push({
                                            type: "with_page",
                                            event: t,
                                            result: er({
                                                blockStore: r,
                                                idx: e,
                                                resultFeatureNames: ["UPCOMING_MEETING_ATTACHMENTS"]
                                            })
                                        }) : b.push({
                                            type: "no_page",
                                            event: t
                                        })
                                    }
                                    if (0 === b.length) return {
                                        upcomingMeetingSection: void 0,
                                        pageResultsFromUpcomingMeetings: []
                                    };
                                    let v = b.map(e => "with_page" === e.type ? e.result : {
                                            type: "upcoming_meeting_no_linked_page",
                                            event: e.event.event
                                        }),
                                        S = e => {
                                            let {
                                                numberOfAttendees: t,
                                                timeUntilEventAnalyticsBucket: i
                                            } = y(e.event);
                                            (0, r(104310).u)({
                                                event: {
                                                    eventName: "search_calendar_attachment_click",
                                                    eventProperties: {
                                                        search_session_id: f,
                                                        number_of_attendees: t,
                                                        time_until_event_bucket: i
                                                    }
                                                }
                                            })
                                        };
                                    return {
                                        upcomingMeetingSection: {
                                            items: b.map((e, i) => ((e, i) => {
                                                let {
                                                    eventName: s,
                                                    timeUntilText: c
                                                } = y(e.event), u = r(986939).A.isMobile ? void 0 : (0, l.jsx)(r(111010).D, {
                                                    colorPalette: "gray",
                                                    colorVariant: "secondary",
                                                    styleKey: "captionRegular",
                                                    children: c
                                                });
                                                if ("with_page" === e.type) {
                                                    let d = (0, l.jsxs)(r(4458).fI, {
                                                            gap: 4,
                                                            children: [(0, l.jsx)(r(16275).I, {
                                                                icon: r(998172).D,
                                                                size: r(104509).Ev.sm
                                                            }), (0, l.jsx)(r(111010).D, {
                                                                colorPalette: "gray",
                                                                colorVariant: "secondary",
                                                                styleKey: "captionRegular",
                                                                children: s
                                                            })]
                                                        }),
                                                        {
                                                            result: c
                                                        } = e;
                                                    return {
                                                        render: e => (0, l.jsx)(r(120021).Kr, { ...e,
                                                            currentView: "recents",
                                                            result: c,
                                                            queryId: a,
                                                            rightOverride: u,
                                                            captionOverride: d
                                                        }),
                                                        key: `search-upcoming-meeting-${c.store.id}-${i}`,
                                                        action: ({
                                                            event: i
                                                        }) => {
                                                            q({
                                                                event: i,
                                                                result: c,
                                                                context: "recent_pages",
                                                                environment: o,
                                                                queryId: a,
                                                                trackSelectSearchItem: t,
                                                                closeSearch: n,
                                                                isCommandSearch: m,
                                                                electronTabs: p,
                                                                isNewElectronTab: h,
                                                                source: r(254656).y8.SearchRecents
                                                            }), S(e), x && (0, r(414824).R)({
                                                                environment: o,
                                                                data: {
                                                                    type: "track",
                                                                    payload: {
                                                                        event: "eventAttachmentOpened",
                                                                        provider: "notion",
                                                                        location: "notionSearchNoQueryView",
                                                                        method: "notionSearchNoQueryView"
                                                                    }
                                                                },
                                                                botId: x
                                                            })
                                                        }
                                                    }
                                                }
                                                return {
                                                    render: e => (0, l.jsx)(et, { ...e,
                                                        eventName: s,
                                                        timeUntilElement: u
                                                    }),
                                                    key: `search-upcoming-meeting-${e.event.event.id}-${i}`,
                                                    action: ({
                                                        event: t
                                                    }) => {
                                                        (function(e) {
                                                            if (!("button" in e)) return !0;
                                                            let t = 1 === e.button,
                                                                r = 0 === e.button,
                                                                i = "auxclick" === e.type;
                                                            return !t && (!r || !i)
                                                        })(t) && (async () => {
                                                            await (0, r(861842).nT)({
                                                                event: e.event.event,
                                                                from: "upcoming_meeting",
                                                                environment: o,
                                                                calendarBotId: d.botId
                                                            }), n({
                                                                shouldResetQuery: !1
                                                            }), S(e), x && (0, r(414824).R)({
                                                                environment: o,
                                                                data: {
                                                                    type: "track",
                                                                    payload: {
                                                                        event: "eventAttachmentOpened",
                                                                        provider: "notion",
                                                                        location: "notionSearchNoQueryView",
                                                                        method: "notionSearchNoQueryView"
                                                                    }
                                                                },
                                                                botId: x
                                                            })
                                                        })()
                                                    }
                                                }
                                            })(e, i)),
                                            key: "upcoming-meeting-attachments",
                                            render: e => (0, l.jsx)(r(844565).A, { ...e,
                                                title: s.formatMessage(ei.fromCalendarEvents)
                                            })
                                        },
                                        pageResultsFromUpcomingMeetings: v
                                    }
                                }, [g, c, u, s, a, o, t, n, m, p, h, f, x, d.botId]);
                                return {
                                    section: y,
                                    pageIdsFromUpcomingMeetings: (0, i.useMemo)(() => {
                                        let e = [];
                                        for (let t of b) $(t) && e.push(t.store.id);
                                        return e
                                    }, [b]),
                                    upcomingMeetingResults: b
                                }
                            }({
                                trackSelectSearchItem: e.trackSelectSearchItem,
                                closeSearch: x,
                                queryId: f
                            }),
                            k = (0, r(682985).O$)(r(330870).S),
                            I = (0, r(682985).K8)(() => r(601860).NK.state.filter(e => e.pageId !== (null == k ? void 0 : k.id) && !j.includes(e.pageId)).slice(0, m - j.length), [m, j, k]),
                            {
                                resultsByBucket: M,
                                recentAlivePageResults: T
                            } = (0, r(682985).K8)(() => {
                                var e;
                                let t = new Map,
                                    i = [],
                                    n = (0, r(185326).oi)({
                                        userId: null == (e = y.currentUser) ? void 0 : e.id,
                                        spaceId: null == b ? void 0 : b.id
                                    });
                                return I.forEach((e, a) => {
                                    let s = (0, r(601860).ht)(e.visitedAt),
                                        o = er({
                                            blockStore: e.store,
                                            idx: a,
                                            resultFeatureNames: ["RECENT_ALIVE_PAGES"]
                                        });
                                    (0, r(185326).$o)([o], n, v);
                                    let l = h(o);
                                    if (i.push(o), t.has(s)) {
                                        var d;
                                        null == (d = t.get(s)) || d.push(l)
                                    } else t.set(s, [l])
                                }), {
                                    resultsByBucket: t,
                                    recentAlivePageResults: i
                                }
                            }, [h, I, null == (t = y.currentUser) ? void 0 : t.id, null == b ? void 0 : b.id, v], {
                                debugName: "Search2.resultsByBucket"
                            }),
                            C = (n = (0, r(109939).tz)(), a = (0, r(533992).v3)(), s = (0, r(853284).U)(), o = (0, r(682985).K8)(() => r(357887)._.state.isNewElectronTab, [], {
                                debugName: "Search2.isNewElectronTab"
                            }), d = (0, r(851468).o)(), (0, i.useMemo)(() => {
                                if (o) return { ...(0, r(916084).mD)({
                                        environment: a,
                                        intl: n,
                                        electronTabs: d,
                                        isNewElectronTab: o,
                                        isSlipperySlopeEnabled: s,
                                        useTwoPaneStyle: !0
                                    }),
                                    key: Q
                                }
                            }, [a, n, o, d, s])),
                            A = (c = (0, r(109939).tz)(), u = (0, r(533992).v3)(), g = (0, r(853284).U)(), p = (0, r(682985).K8)(() => r(357887)._.state.isNewElectronTab, [], {
                                debugName: "Search2.isNewElectronTab"
                            }), (0, i.useMemo)(() => {
                                if (p && g) return { ...(0, r(122390).B)({
                                        environment: u,
                                        intl: c,
                                        useTwoPaneStyle: !0
                                    }),
                                    key: Z
                                }
                            }, [u, c, p, g])),
                            {
                                offlinePageSection: P,
                                isOfflineMode: R,
                                offlinePageResults: _
                            } = function(e) {
                                let t = (0, r(109939).tz)(),
                                    n = !!(0, r(556583).y)(),
                                    a = !(0, r(682985).O$)(r(205885).e),
                                    s = n && a,
                                    o = (0, r(120509).Q)({
                                        filterCategory: "all",
                                        availableOffline: !0,
                                        searchQuery: "",
                                        disable: !s
                                    }),
                                    {
                                        section: d,
                                        results: c
                                    } = (0, i.useMemo)(() => {
                                        let i = o.map((e, t) => er({
                                            idx: t,
                                            blockStore: e.pageBlockStore,
                                            resultFeatureNames: ["OFFLINE_PAGES"]
                                        }));
                                        return {
                                            section: {
                                                items: i.map(e),
                                                key: "offline-pages",
                                                render: e => (0, l.jsx)(r(844565).A, { ...e,
                                                    title: t.formatMessage(r(1422).g.offlinePages)
                                                })
                                            },
                                            results: i
                                        }
                                    }, [o, e, t]);
                                return {
                                    isOfflineMode: s,
                                    offlinePageSection: d,
                                    offlinePageResults: c
                                }
                            }(h),
                            {
                                forYouSections: E,
                                visibleForYouPageResults: F
                            } = function(e) {
                                var t;
                                let {
                                    buildMenuListItem: n,
                                    searchExperimentOverrides: a,
                                    dedupeAgainstResults: s
                                } = e, o = (0, r(109939).tz)(), d = (0, r(533992).v3)(), c = null == (t = (0, r(972740).L)()) ? void 0 : t.id, u = d.currentUser.id, [g, p] = (0, i.useState)(!1), m = null == a ? void 0 : a.search_personalization, h = (0, r(682985).K8)(() => !1, [m]);
                                (0, i.useEffect)(() => {
                                    h ? c && u && r(783782).loadPersonalizedPagesForSearch({
                                        spaceId: c,
                                        userId: u,
                                        environment: d,
                                        experimentGroupOverride: m
                                    }) : r(783782).clearPersonalizedPagesForSearch()
                                }, [u, d, h, m, c]);
                                let f = (0, r(682985).K8)(() => r(915681).A.state.personalizedPages.stores, []),
                                    x = (0, r(682985).K8)(() => r(915681).A.state.personalizedPages.clusters, []),
                                    y = (0, r(682985).K8)(() => h ? f.map((e, t) => er({
                                        blockStore: e,
                                        idx: t,
                                        resultFeatureNames: ["PERSONALIZED_RECENTS"]
                                    })) : [], [f, h]),
                                    b = (0, r(682985).K8)(() => h ? x.map(e => ({
                                        label: e.label,
                                        topicLabel: e.topicLabel,
                                        results: e.stores.map((e, t) => er({
                                            blockStore: e,
                                            idx: t,
                                            resultFeatureNames: ["PERSONALIZED_RECENTS"]
                                        }))
                                    })) : [], [x, h]),
                                    v = (0, i.useMemo)(() => {
                                        if (!g || 0 === b.length) return [];
                                        let e = new Set(s.map(r(898051).a));
                                        return b.map(t => {
                                            let i = t.results.filter(t => {
                                                let i = (0, r(898051).a)(t);
                                                return !e.has(i) && (e.add(i), !0)
                                            });
                                            return { ...t,
                                                results: i
                                            }
                                        }).filter(e => e.results.length > 0)
                                    }, [s, b, g]),
                                    S = (0, i.useMemo)(() => y.slice(0, 3), [y]),
                                    j = (0, i.useMemo)(() => {
                                        let e = new Set(s.map(r(898051).a));
                                        return S.filter(t => {
                                            let i = (0, r(898051).a)(t);
                                            return !e.has(i) && (e.add(i), !0)
                                        })
                                    }, [s, S]),
                                    w = v.length > 0,
                                    k = (0, i.useMemo)(() => j.map(n), [n, j]),
                                    I = (0, i.useCallback)(() => {
                                        p(e => !e)
                                    }, []);
                                return {
                                    forYouSections: (0, i.useMemo)(() => {
                                        if (w) return v.map((e, t) => ({
                                            items: e.results.map(n),
                                            key: `${J}-cluster-${e.label}`,
                                            render: i => (0, l.jsx)(r(844565).A, { ...i,
                                                title: e.topicLabel ? ? `Cluster ${e.label}`,
                                                right: 0 === t ? (0, l.jsx)(r(988022).p, {
                                                    colorPalette: "gray",
                                                    size: "sm",
                                                    onClick: I,
                                                    children: o.formatMessage(ei.showFewerForYouItems)
                                                }) : void 0,
                                                children: (0, l.jsx)(r(654979).A, {
                                                    initial: {
                                                        opacity: 0,
                                                        translateY: 8
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        translateY: 0
                                                    },
                                                    config: {
                                                        duration: 200,
                                                        timingFunction: "ease"
                                                    },
                                                    children: i.children
                                                }, `for-you-cluster-${e.label}`)
                                            })
                                        }));
                                        if (0 === k.length) return [];
                                        let e = y.length > 3;
                                        return [{
                                            items: k,
                                            key: J,
                                            render: t => (0, l.jsx)(r(844565).A, { ...t,
                                                title: o.formatMessage(ei.forYouSectionTitle),
                                                right: e ? (0, l.jsx)(r(988022).p, {
                                                    colorPalette: "gray",
                                                    size: "sm",
                                                    onClick: I,
                                                    children: o.formatMessage(g ? ei.showFewerForYouItems : ei.showAllForYouItems)
                                                }) : void 0,
                                                children: (0, l.jsx)(r(654979).A, {
                                                    initial: {
                                                        opacity: 0,
                                                        translateY: 8
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        translateY: 0
                                                    },
                                                    config: {
                                                        duration: 200,
                                                        timingFunction: "ease"
                                                    },
                                                    children: t.children
                                                }, "for-you-collapsed")
                                            })
                                        }]
                                    }, [n, v, k, y.length, g, o, w, I]),
                                    visibleForYouPageResults: (0, i.useMemo)(() => w ? v.flatMap(e => e.results) : j, [j, v, w])
                                }
                            }({
                                buildMenuListItem: h,
                                searchExperimentOverrides: e.searchExperimentOverrides,
                                dedupeAgainstResults: [...w.filter($), ...R ? _ : T]
                            }),
                            N = (0, r(413821).U)({
                                onClick: () => x({
                                    shouldResetQuery: !1
                                })
                            }),
                            z = (0, i.useMemo)(() => {
                                let e = [];
                                return r(601860).Rj.forEach(t => {
                                    let i = M.get(t);
                                    i && 0 !== i.length && e.push({
                                        items: i,
                                        key: `recent-pages-${t}`,
                                        render: e => (0, l.jsx)(r(844565).A, { ...e,
                                            title: (0, l.jsx)(r(916084).sg, {
                                                bucket: t
                                            })
                                        })
                                    })
                                }), e
                            }, [M]),
                            {
                                recentPageSections: L,
                                allRecentResults: B
                            } = (0, i.useMemo)(() => {
                                let e = [],
                                    t = [],
                                    r = [];
                                return A && r.push(A), C && r.push(C), r.length > 0 && e.push({
                                    items: r,
                                    key: G
                                }), S && (e.push(S), t.push(...w)), E.length > 0 && (e.push(...E), t.push(...F)), R ? (e.push(P), t.push(..._)) : (e.push(...z), t.push(...T)), N && e.push(N), {
                                    recentPageSections: e,
                                    allRecentResults: t
                                }
                            }, [C, A, R, S, w, E, F, P, _, z, T, N]),
                            V = (0, r(428401).F)({
                                buildMenuListItem: h
                            }),
                            K = !b && V;
                        return (0, i.useMemo)(() => K ? {
                            sections: V.sections ? ? [],
                            recentResults: V.results
                        } : {
                            sections: L,
                            recentResults: B
                        }, [K, null == V ? void 0 : V.sections, null == V ? void 0 : V.results, L, B])
                    }({
                        numberOfRecentPagesToShow: I,
                        buildMenuListItem: U,
                        trackSelectSearchItem: D,
                        closeSearch: B,
                        queryId: V,
                        searchExperimentOverrides: null == (n = e.debugConfig) ? void 0 : n.experimentOverrides
                    }), {
                        entrypointsSection: ea,
                        queryBasedResultsSection: eo
                    } = function(e) {
                        let {
                            query: t,
                            filters: n,
                            hideAiTopResultEnabled: a,
                            searchSessionId: s,
                            searchSessionFlowNumber: o,
                            queryTextValueWithoutSearchFilters: d,
                            isResultsLoading: c,
                            onDismiss: u,
                            results: g,
                            currentView: p,
                            buildMenuListItem: m,
                            source: h,
                            searchActionResults: f,
                            debugConfig: x,
                            sort: y,
                            onSortChange: b,
                            numTotalServerResults: v
                        } = e, S = (0, r(533992).v3)(), j = (0, r(109939).tz)(), w = !r(986939).A.isMobile, k = (0, r(682985).K8)(() => r(357887)._.state.debug.enabled, []), I = (0, r(682985).K8)(() => r(357887)._.state.isNewElectronTab, [], {
                            debugName: "Search2.isNewElectronTab"
                        }), M = (0, r(851468).o)(), T = (0, i.useMemo)(() => (0, r(255139).mk)({
                            searchSessionId: s,
                            searchSessionFlowNumber: o
                        }), [s, o]), C = (0, i.useCallback)(e => (0, r(674476).g)({
                            environment: S,
                            result: e,
                            searchSessionId: s,
                            source: h,
                            action: () => u({
                                shouldResetQuery: !1
                            }),
                            queryId: T,
                            isSearch2: !0,
                            desktopProps: {
                                electronTabs: M,
                                isNewElectronTabSearch: !!I
                            },
                            buttonStyles: {
                                paddingInlineStart: 0,
                                borderRadius: 12
                            },
                            isTwoPaneExperiment: !0
                        }), [M, S, I, u, T, h, s]), A = (0, i.useMemo)(() => f.map(e => C(e)), [C, f]), P = (0, r(682985).K8)(() => g.map(e => m(e)), [m, g], {
                            debugName: "Search2.resultItems"
                        }), R = (0, r(82002).h)({
                            resultsCount: g.length,
                            shouldShow: "results" === p && c,
                            variant: "search-modal-minimal"
                        }), _ = (0, r(682985).K8)(() => r(352120).R.isUnifiedFindDown(), []), E = (0, r(723240).r)(), F = (0, r(972740).L)(), N = (0, r(217844)._)({
                            name: "ai_usage",
                            amount: 1,
                            spaceId: E,
                            userId: S.currentUser.id
                        }), z = (0, r(682985).K8)(() => (0, r(94418).e2)(N), [N]), L = (0, r(682985).K8)(() => (0, r(773438).E)(S).hasPublicAccessPermission, [S]), B = z || null == N ? void 0 : N.upsell, {
                            handleClick: V
                        } = (0, r(79268).C)({
                            upsell: B,
                            source: "ai_unified_find_search_modal",
                            spaceStore: F
                        }), K = (0, i.useCallback)(async e => {
                            var t;
                            if (!z) return void await V();
                            let i = (0, r(7029).V)(null == (t = e.menuListItemAction) ? void 0 : t.event);
                            u({
                                shouldResetQuery: !1
                            });
                            let n = (0, r(922900).getWorkflowAgentConfig)({
                                environment: S,
                                useReadOnlyMode: !0,
                                searchSessionId: s
                            });
                            (0, r(862451).navigateAndStartInferenceTranscript)({
                                environment: S,
                                query: d,
                                clientStore: r(57168).defaultClientAIChatStore,
                                config: n,
                                openInNewTab: "tab" === i || I,
                                surface: "search_modal",
                                initialAgentActions: ["injectSearchTool"]
                            })
                        }, [z, V, u, S, d, s, I]), D = (0, i.useMemo)(() => (function(e) {
                            let {
                                onClick: t,
                                intl: r,
                                query: i
                            } = e;
                            return {
                                action: t,
                                key: eh,
                                render: e => (0, l.jsx)(ey, {
                                    menuListProps: e,
                                    title: r.formatMessage(eb.deepFindTitle),
                                    query: i
                                })
                            }
                        })({
                            onClick: e => K({
                                menuListItemAction: e
                            }),
                            intl: j,
                            query: t
                        }), [K, j, t]), {
                            variant: O
                        } = (0, r(750943).O)({
                            query: t,
                            searchSessionId: s
                        }), H = (0, i.useRef)(null), U = (0, i.useMemo)(() => ({
                            key: ef,
                            action: async e => {
                                if (_ || !H.current) return;
                                if (!z) return void await V();
                                let t = (0, r(7029).V)(null == e ? void 0 : e.event);
                                void 0 === t && u({
                                    shouldResetQuery: !1
                                });
                                let i = !!("tab" === t || I);
                                H.current.navigateToThread({
                                    openInNewTab: i
                                })
                            },
                            render: e => (0, l.jsx)(r(582629).bF, {
                                query: t,
                                searchFilters: n,
                                searchResultsStore: void 0,
                                searchSessionId: s,
                                menuListItemProps: e,
                                ref: H
                            })
                        }), [_, z, V, u, t, s, n, I]), W = function(e) {
                            let [t, n] = (0, i.useState)(!1), [a, s] = (0, i.useState)(e.experimentOverrides ? ? {}), o = (0, r(682985).K8)(() => r(357887)._.state.debug.enabled, []);
                            (0, i.useEffect)(() => {
                                o ? s(e.experimentOverrides ? ? {}) : (s({}), n(!1))
                            }, [o, e.experimentOverrides]);
                            let d = (0, r(682985).K8)(() => o ? (0, r(722371).WP)(r(218745).hH).map(([e, t]) => {
                                    let i = r(218744).default.getEligibleGroup({
                                            experimentId: e,
                                            defaultGroup: "control"
                                        }),
                                        n = [...t];
                                    return {
                                        experimentId: e,
                                        experimentVersion: 1,
                                        group: i,
                                        groups: n.includes("control") ? n : ["control", ...n]
                                    }
                                }) : [], [o]),
                                c = (0, i.useCallback)(() => n(!0), []),
                                u = (0, i.useCallback)(r => o ? (0, l.jsx)(es, { ...r,
                                    allPossibleExperiments: d,
                                    pendingOverrides: a,
                                    onExperimentChange: s,
                                    isPopupOpen: t,
                                    onClosePopup: () => n(!1),
                                    onCommitOverrides: e.onCommitOverrides,
                                    debugInfo: e.debugInfo
                                }) : null, [o, d, a, t, e.onCommitOverrides, e.debugInfo]);
                            return (0, i.useMemo)(() => ({
                                key: en,
                                action: () => {
                                    c()
                                },
                                render: u
                            }), [c, u])
                        }({
                            experimentOverrides: null == x ? void 0 : x.experimentOverrides,
                            debugInfo: null == x ? void 0 : x.debugInfo,
                            onCommitOverrides: e => {
                                var t;
                                null == x || null == (t = x.onExperimentOverridesChange) || t.call(x, e)
                            }
                        }), q = (0, r(682985).O$)(r(205885).e);
                        return {
                            entrypointsSection: (0, i.useMemo)(() => {
                                let e = [];
                                return _ || !q || L ? void 0 : k ? {
                                    items: [W],
                                    key: "search"
                                } : a ? void 0 : ("auto_streaming" === O ? e.push(U) : e.push(D), {
                                    items: e,
                                    key: "search"
                                })
                            }, [_, q, L, k, a, O, W, U, D]),
                            queryBasedResultsSection: (0, i.useMemo)(() => {
                                let e = [...A, ...P, ...R];
                                if (0 !== e.length) {
                                    if (w && y && b) {
                                        let t = function(e) {
                                            let {
                                                numTotalServerResults: t,
                                                renderedResultsCount: i,
                                                isResultsLoading: n,
                                                sort: a,
                                                onSortChange: s,
                                                onMenuOpen: o,
                                                onMenuDismiss: d
                                            } = e, c = !n, u = c && 0 === t && i > 0, g = c ? u ? i : t : void 0, p = c && void 0 !== g && g >= r(600614).ZW;
                                            return {
                                                title: (0, l.jsx)(ep, {
                                                    resultCount: g,
                                                    isLowerBound: p
                                                }),
                                                right: (0, l.jsx)(r(927829).X, {
                                                    sort: a,
                                                    onSortChange: s,
                                                    onMenuOpen: o,
                                                    onMenuDismiss: d,
                                                    showCurrentSortValue: !0,
                                                    variant: "text"
                                                })
                                            }
                                        }({
                                            numTotalServerResults: v,
                                            renderedResultsCount: P.length,
                                            isResultsLoading: c,
                                            sort: y,
                                            onSortChange: b
                                        });
                                        return {
                                            items: e,
                                            key: "results",
                                            render: e => (0, l.jsx)(r(844565).A, { ...e,
                                                title: t.title,
                                                right: t.right,
                                                noTextOverflow: !0
                                            })
                                        }
                                    }
                                    return {
                                        items: e,
                                        key: "results",
                                        render: e => (0, l.jsx)(r(844565).A, { ...e,
                                            title: j.formatMessage(eb.quickMatchesSectionTitle)
                                        })
                                    }
                                }
                            }, [j, A, P, R, w, y, b, v, c])
                        }
                    }({
                        query: c,
                        filters: m,
                        hideAiTopResultEnabled: k,
                        searchSessionId: u,
                        searchSessionFlowNumber: g,
                        queryTextValueWithoutSearchFilters: e.queryTextValueWithoutSearchFilters,
                        isResultsLoading: o,
                        onDismiss: a,
                        results: p,
                        currentView: s,
                        buildMenuListItem: U,
                        source: "quick_find",
                        searchActionResults: x,
                        debugConfig: f,
                        sort: S,
                        onSortChange: j,
                        numTotalServerResults: w
                    }), el = (0, i.useMemo)(() => {
                        let e = [];
                        return ea && e.push(ea), eo && e.push(eo), e
                    }, [ea, eo]), ed = (0, i.useCallback)((t, i) => {
                        var n, a;
                        "results" === s && !o && t < 200 ? null == (n = e.fetchAdditionalServerResultsOnChange) || n.call(e, r(661238).ZK) : "recents" === s && _ && (0, r(916084).fQ)({
                            environment: R,
                            offsetFromBottom: t,
                            spaceStore: _,
                            setIsLoadingRecents: C,
                            setEndOfRecentsReached: P,
                            numRecents: I,
                            setNumRecents: M,
                            endOfRecentsReached: A,
                            isLoadingRecents: T,
                            incrementBy: r(661238).ZK
                        }), i.offsetFromTop > 0 && "results" === s && (null == (a = e.onScrollInResultsView) || a.call(e))
                    }, [e, s, A, R, _, T, o, I]), ec = (0, i.useMemo)(() => new(r(419110)).$, []), eu = (0, i.useCallback)(() => {
                        ec.setState({
                            focus: {
                                section: 0,
                                indexLocal: 0,
                                indexGlobal: 0,
                                footerFocused: !1
                            }
                        })
                    }, [ec]), eg = (null == ea ? void 0 : ea.items.length) ? ? 0, em = (0, i.useCallback)(() => {
                        let e = +(0 !== eg);
                        ec.setState({
                            focus: {
                                section: e,
                                indexGlobal: eg,
                                indexLocal: 0,
                                footerFocused: !1
                            }
                        })
                    }, [eg, ec]), ex = (0, r(682985).K8)(() => {
                        let e = ec.state.focus;
                        return E && ((null == e ? void 0 : e.indexGlobal) ? ? 0) > eg + ((null == eo ? void 0 : eo.items.length) ? ? 0)
                    }, [ec, E, eg, null == eo ? void 0 : eo.items.length]), ev = E && ((null == eo ? void 0 : eo.items.length) ? ? 0) === 0 && "results" === s && !o, eS = function(e) {
                        let {
                            query: t,
                            hasResults: n,
                            isLoading: a,
                            onDismiss: s
                        } = e, o = (0, i.useCallback)(() => {
                            s({
                                shouldResetQuery: !1
                            }), r(843582).w.setState({ ...r(843582).w.state,
                                open: !0
                            }), r(198125).Ay.setState({ ...r(198125).Ay.state,
                                filter: t
                            })
                        }, [s, t]), d = (0, r(821603).N2)(e.filters);
                        if ((0, r(145075).E)({
                                query: t,
                                filters: d
                            }) && !n && !a) return (0, l.jsx)(r(499227).A, {
                            error: r(821603).yq.NoResults,
                            handleSearchDeletedOnly: o
                        })
                    }({
                        query: c,
                        filters: m,
                        hasResults: ((null == eo ? void 0 : eo.items.length) ? ? 0) > 0,
                        isLoading: o,
                        onDismiss: B
                    }), {
                        isNaturalLanguageQueryWithCredits: ej
                    } = (0, r(110419).T)({
                        query: c,
                        searchSessionId: u
                    }), ew = (0, i.useMemo)(() => {
                        let e = ((null == eo ? void 0 : eo.items.length) ? ? 0) === 0;
                        return "recents" === s || e ? 0 : eg > 0 ? ej ? 0 : eg : 0
                    }, [null == eo ? void 0 : eo.items.length, s, eg, ej]);
                    (0, i.useEffect)(() => {
                        E || "results" !== s ? E && "recents" === s && (h("results"), em()) : (h("recents"), eu()), ex ? em() : ev && eu()
                    }, [eu, em, ev, ex, s, E, h]);
                    let ek = (0, r(682985).K8)(() => {
                            let e = ec.state.focus;
                            if (!e || e.footerFocused || void 0 === e.indexGlobal) return {
                                type: "none"
                            };
                            if ("recents" === s) {
                                let t = W[0],
                                    r = (null == t ? void 0 : t.key) === G,
                                    i = r ? t.items.length : 0;
                                if (r && e.indexGlobal < i) {
                                    let r = t.items[e.indexGlobal],
                                        i = null == r ? void 0 : r.key;
                                    return tb(i) ? {
                                        type: "special",
                                        key: i
                                    } : {
                                        type: "none"
                                    }
                                }
                                let n = ee[e.indexGlobal - i];
                                return n ? "upcoming_meeting_no_linked_page" === n.type ? {
                                    type: "upcoming_meeting_no_linked_page",
                                    event: n.event
                                } : {
                                    type: "page",
                                    result: n
                                } : {
                                    type: "none"
                                }
                            }
                            let t = (null == ea ? void 0 : ea.items.length) ? ? 0;
                            if (e.indexGlobal < t) {
                                let t = e.indexGlobal,
                                    r = null == ea ? void 0 : ea.items[t];
                                if (!r) return {
                                    type: "none"
                                };
                                let i = r.key;
                                return tb(i) ? {
                                    type: "special",
                                    key: i
                                } : {
                                    type: "none"
                                }
                            }
                            let r = e.indexGlobal - t,
                                i = x.length;
                            if (r < i) {
                                let e = x[r];
                                return e ? {
                                    type: "action",
                                    action: e
                                } : {
                                    type: "none"
                                }
                            }
                            let n = p[r - i];
                            return n ? {
                                type: "page",
                                result: n
                            } : o ? {
                                type: "loading"
                            } : {
                                type: "none"
                            }
                        }, [ec, p, ee, W, ea, s, x, o], {
                            equalityFn: r(381453).n4
                        }),
                        eI = "none" !== ek.type,
                        eM = (0, r(960253).I)(() => ({
                            scroller: {
                                width: eI ? 600 : "100%",
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                flex: "none"
                            },
                            menuList: {
                                display: "flex",
                                flexDirection: "column",
                                gap: r(986939).A.isMobile ? 10 : void 0,
                                paddingInline: 10
                            }
                        }), [eI]),
                        eT = (0, i.useMemo)(() => {
                            let e = "recents" === s ? W : el;
                            return function(e) {
                                let {
                                    currentView: t,
                                    sections: r
                                } = e;
                                if (0 === r.length) return 33.897999999999996;
                                let i = r[0],
                                    n = null == i ? void 0 : i.key;
                                return "recents" === t ? n === G ? 45 : 33.897999999999996 : "search" === n ? 77.898 : 33.897999999999996
                            }({
                                currentView: s,
                                sections: e
                            })
                        }, [s, W, el]);
                    return (0, l.jsxs)("div", {
                        style: tv,
                        children: [(0, l.jsxs)(r(126767).H, {
                            ref: t,
                            type: r(644154).A.Y,
                            style: eM.scroller,
                            children: [(0, l.jsx)(r(558045).A, {
                                comboboxProps: e.menuListComboboxProps,
                                type: r(558045).O.Vertical,
                                initialFocus: ew,
                                sections: "recents" === s ? W : el,
                                disableKeyboardArrowWrap: !0,
                                store: ec,
                                style: eM.menuList
                            }), eS || (ev ? eS : null), (0, l.jsx)(r(636255).A, {
                                onChange: ed
                            })]
                        }), eI ? (0, l.jsx)(tm, {
                            result: ek,
                            onSelectResult: O,
                            cardTopPadding: eT,
                            isVisible: H
                        }) : null]
                    })
                });

            function tj(e) {
                if ("daterange" === e.type) return {
                    starting: e.start_date ? {
                        type: "date",
                        start_date: e.start_date
                    } : void 0,
                    ending: e.end_date ? {
                        type: "date",
                        start_date: e.end_date
                    } : void 0
                };
                if ("date" === e.type) {
                    let t = e.start_date;
                    if (t) return {
                        starting: {
                            type: "date",
                            start_date: t
                        },
                        ending: {
                            type: "date",
                            start_date: t
                        }
                    }
                }
                return {
                    starting: void 0,
                    ending: void 0
                }
            }

            function tw() {
                return (0, r(682985).K8)(() => r(886556).z.isSearchModalV2Enabled(), []) ? (0, l.jsx)(tC, {}) : null
            }
            let tk = {
                    width: "100vw"
                },
                tI = {
                    background: "transparent"
                },
                tM = {
                    alignItems: "start"
                },
                tT = {
                    width: "100%",
                    height: "100%"
                };

            function tC() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(533992).Y0)(),
                    s = (0, r(109939).tz)(),
                    d = (0, r(345776).T)(),
                    [c, u] = (0, i.useState)("recents"),
                    [p, m] = (0, i.useState)(!0),
                    f = (0, r(682985).K8)(() => (function(e) {
                        var t;
                        let i = null == e || null == (t = e.currentUser) ? void 0 : t.id;
                        if (!i) return !0;
                        let n = r(255482).K.get({
                            userId: i,
                            key: g
                        });
                        return "boolean" != typeof n || n
                    })(e), [e]),
                    [x, y] = (0, i.useState)(f),
                    [w, I] = (0, i.useState)([]),
                    M = (0, i.useRef)(!1),
                    T = (0, i.useRef)(null),
                    [C, P] = (0, r(739271).s)(),
                    R = (0, r(682985).O$)(r(357887)._),
                    {
                        searchUserPreferences: _,
                        handleFiltersChange: E,
                        handleSortChange: F
                    } = function() {
                        let e = (0, r(345776).T)(),
                            t = (0, r(723240).r)(),
                            n = (0, r(682985).K8)(() => r(357887)._.state.isOpen, []),
                            [a, s] = (0, i.useState)(() => S(e)),
                            o = (0, i.useCallback)(e => {
                                s(t => ({ ...t,
                                    ...e
                                }))
                            }, []),
                            l = (0, r(682985).K8)(() => r(357887)._.state.filters, [], {
                                equalityFn: r(381453).n4
                            }),
                            d = (0, r(682985).K8)(() => r(357887)._.state.sort, []),
                            c = (0, r(668745).ZC)(e),
                            u = (0, r(668745).ZC)(t),
                            g = (0, r(668745).ZC)(n),
                            p = n && !g,
                            m = void 0 !== e && e !== c,
                            f = void 0 !== t && t !== u,
                            x = (0, i.useMemo)(() => ({
                                settings: a,
                                setUserSettings: o,
                                storeFilters: l,
                                storeSort: d
                            }), [a, o, l, d]);
                        (0, i.useEffect)(() => {
                            e && (m || f) && s(S(e))
                        }, [e, m, f]);
                        let y = n && a.stickyFiltersEnabled && !!(e && t) && (p || f || m);
                        (0, i.useEffect)(() => {
                            var i, n;
                            let a, s, o;
                            if (!y || !e || !t) return;
                            let {
                                filters: c,
                                sort: u
                            } = {
                                filters: (n = i = {
                                    userId: e,
                                    spaceId: t
                                }, a = r(255482).K.get({
                                    userId: n.userId,
                                    key: b(n.spaceId)
                                }), (s = (0, r(358519).Qq)(r(821603).K_, a)) ? (0, r(821603).N2)(s) : void 0),
                                sort: (o = r(255482).K.get({
                                    userId: i.userId,
                                    key: v(i.spaceId)
                                }), (0, r(358519).Qq)(r(821603).gG, o))
                            }, g = (0, r(821603).N2)(l), p = (0, r(821603).N2)(c), m = d ? ? h, f = !(0, r(381453).n4)(g, p), x = !(0, r(381453).n4)(m, u ? ? h);
                            (f || x) && r(357887)._.update(e => ({ ...e,
                                filters: f ? c : l,
                                sort: x ? u : d
                            }))
                        }, [y, e, t, l, d]);
                        let w = (0, i.useCallback)(i => {
                                let n = (0, r(821603).vm)((0, r(821603).N2)(l), i);
                                r(357887)._.updateFilters(i), a.stickyFiltersEnabled && e && t && j({
                                    userId: e,
                                    spaceId: t,
                                    filters: n,
                                    sort: d
                                })
                            }, [l, d, a.stickyFiltersEnabled, e, t]),
                            k = (0, i.useCallback)(i => {
                                r(357887)._.updateSort(i), a.stickyFiltersEnabled && e && t && j({
                                    userId: e,
                                    spaceId: t,
                                    filters: l,
                                    sort: i
                                })
                            }, [l, a.stickyFiltersEnabled, e, t]);
                        return (0, i.useMemo)(() => ({
                            searchUserPreferences: x,
                            handleFiltersChange: w,
                            handleSortChange: k
                        }), [x, w, k])
                    }(),
                    {
                        storeFilters: N,
                        storeSort: z
                    } = _,
                    L = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore),
                    {
                        overriddenPublicShareLinkSpaceStore: B
                    } = (0, r(981284).W)(),
                    V = L ? ? B,
                    D = (0, r(430937).AI)({
                        initialValue: []
                    }),
                    O = (0, i.useRef)(),
                    H = (0, r(682985).K8)(() => (0, r(817599).q)(e), [e], {
                        debugName: "Search2.isInQuickSearchMode"
                    }),
                    U = (0, i.useCallback)(() => {
                        D.setValue([]), r(357887)._.closeAndResetMetricsState(), r(785385).default.reset()
                    }, [D]);
                (0, i.useEffect)(() => {
                    R.isOpen && (clearTimeout(O.current), M.current = !1)
                }, [R.isOpen]), (0, r(637030).X)(() => {
                    O.current && (clearTimeout(O.current), O.current = void 0)
                });
                let W = R.mode,
                    q = (0, r(682985).K8)(() => r(729247).E.state.searchExperimentOverrides, []),
                    Y = (0, r(682985).K8)(() => r(729247).nS.state.searchExperimentOverrides, []),
                    $ = (0, r(682985).K8)(() => r(729247).E.state.forcedBlockIds, []),
                    G = (0, r(682985).K8)(() => r(729247).nS.state.forcedBlockIds, []),
                    Q = (0, r(682985).K8)(() => r(729247).E.state.forcedClusterPattern, []),
                    Z = (0, r(682985).K8)(() => r(729247).nS.state.forcedClusterPattern, []),
                    J = (0, r(682985).K8)(() => "everything" === r(729247).Ay.state.debug || r(729247).Ay.state.showDebugInfo, []),
                    X = (0, r(682985).K8)(() => r(729247).nS.state.visible && "results" === c, [c]),
                    ee = (0, r(682985).K8)(() => (0, r(519048).bJ)({
                        device: t,
                        isPublicAccessPermissionForPage: (0, r(773438).E)(e).hasPublicAccessPermission
                    }), [t, e]),
                    et = (0, i.useCallback)((e, t) => {
                        ("main" === e ? r(729247).E : r(729247).nS).update(e => ({ ...e,
                            searchExperimentOverrides: t
                        }))
                    }, []);
                (0, r(383953).w)(() => {
                    let t = r(357887)._.state.initialQuery;
                    r(357887)._.update(e => ({ ...e,
                        query: D
                    })), t && D.setValue((0, a().x9d)(t)), r(308825).T.customAgentSearchService.load().then(({
                        initializeWorkflowDataCache: t
                    }) => t(e))
                }), (0, i.useEffect)(() => {
                    R.isOpen && (0, r(492368).x)({
                        environment: e,
                        store: D.store,
                        canSelectAllBlocks: !1
                    })
                }, [R.isOpen, e, D.store]);
                let er = (0, r(118872).lW)().width >= 1006,
                    ei = x && er,
                    {
                        query: en,
                        queryTextValue: ea,
                        queryTextValueWithoutSearchFilters: es
                    } = (0, r(682985).K8)(() => {
                        let t = D.store.getValue() ? ? [],
                            i = t.filter(e => !(0, a().uPN)(e).some(a().RXL));
                        return {
                            queryTextValue: t,
                            query: (0, n().r4)({
                                intl: s,
                                textValue: i,
                                userTimeZone: (0, r(714350).P)(),
                                deterministic: !1,
                                disableAnnotationPrefix: !0,
                                disableInsertedAnnotations: !1,
                                getRecordModel: r(774995).b.fromGetRecordValueFn(e.defaultRecordCache.inMemoryRecordCache.makeGetRecordValueFn(d))
                            }),
                            queryTextValueWithoutSearchFilters: i
                        }
                    }, [D.store, s, e.defaultRecordCache.inMemoryRecordCache, d]),
                    eo = (0, i.useCallback)(t => {
                        let i = t.query.trim();
                        0 === i.length ? I(e => 0 === e.length ? e : []) : I((0, r(185326).wn)({
                            query: i,
                            environment: e,
                            searchMode: "nav-local-only"
                        }) ? ? [])
                    }, [e]),
                    el = A(),
                    ed = (0, i.useMemo)(() => el ? (0, a().lfB)({
                        textValue: ea,
                        annotationGroupingKey: a().Ifu.TemporarySearchFilter
                    }) : [], [el, ea]),
                    ec = (0, r(903937).Q)(),
                    {
                        filters: eu,
                        sort: eg
                    } = (0, i.useMemo)(() => {
                        let e = el ? (0, r(821603).N2)(function(e) {
                            let t = e.filter(a().RXL);
                            if (0 === t.length) return;
                            let i = r(821603).N2();
                            for (let e of (i.inTeams = [], t)) {
                                let [t, r] = e;
                                if ((0, a().cgd)(r)) {
                                    i.navigableBlockContentOnly = !0;
                                    continue
                                }
                                let [n, s] = r;
                                switch (n) {
                                    case "p":
                                        i.ancestors.push(s);
                                        break;
                                    case "t":
                                        i.inTeams.push(s);
                                        break;
                                    case "u":
                                    case "r":
                                        i.createdBy.push(s);
                                        break;
                                    case "sfct":
                                        i.createdTime = tj(s);
                                        break;
                                    case "sflet":
                                        i.lastEditedTime = tj(s)
                                }
                            }
                            return i
                        }(ed)) : (0, r(821603).N2)(N ? ? {});
                        return void 0 === e.contentStatusFilter && ec && (e.contentStatusFilter = r(258888).T), {
                            filters: e,
                            sort: (el ? function(e) {
                                for (let t of e.filter(a().RXL)) {
                                    let [e, r] = t;
                                    if ((0, a().qUh)(r)) switch (r[1]) {
                                        case "led":
                                            return {
                                                field: "lastEdited",
                                                direction: "desc"
                                            };
                                        case "lea":
                                            return {
                                                field: "lastEdited",
                                                direction: "asc"
                                            };
                                        case "ctd":
                                            return {
                                                field: "created",
                                                direction: "desc"
                                            };
                                        case "cta":
                                            return {
                                                field: "created",
                                                direction: "asc"
                                            }
                                    }
                                }
                                return {
                                    field: "relevance"
                                }
                            }(ed) ? ? z : z) ? ? h
                        }
                    }, [el, ed, N, z, ec]),
                    {
                        mainPaneOverrides: ep,
                        secondaryPaneOverrides: em
                    } = (0, i.useMemo)(() => ({
                        mainPaneOverrides: q,
                        secondaryPaneOverrides: Y
                    }), [q, Y]),
                    eh = (0, r(145075).E)({
                        query: en,
                        filters: eu
                    }),
                    {
                        results: ef,
                        searchSessionId: ex,
                        searchSessionFlowNumber: ey,
                        isResultsLoading: eb,
                        numTotalServerResults: ev,
                        searchAnalytics: eS,
                        fetchAdditionalServerResultsOnChange: ej,
                        debugInfo: ew
                    } = (0, r(183464).W)({
                        type: r(821603).Vz.BlocksInSpace,
                        query: en,
                        limit: r(661238).ZK,
                        source: "quick_find",
                        filters: eu,
                        sort: eg,
                        options: {
                            disable: !eh,
                            isTitleOnly: void 0,
                            overrideSearchSessionId: R.sessionId,
                            overrideSpaceStore: V,
                            searchExperimentOverrides: Object.keys(ep).length > 0 ? ep : void 0,
                            debug: J ? "explain" : void 0,
                            onLocalSearchBegin: eo
                        },
                        forcedBlockIds: $,
                        forcedClusterPattern: Q,
                        peopleBlocksToInclude: "all"
                    }),
                    ek = (0, i.useCallback)(t => {
                        var i;
                        if ("agent" === W && t.isEscapeKey) return void r(357887)._.switchToSearchPane();
                        ! function(e) {
                            let {
                                environment: t,
                                sessionId: i,
                                openedTimeMs: n,
                                isOpen: a,
                                results: s,
                                scrollerRef: o,
                                hasScrolled: l,
                                searchSessionFlowNumber: d
                            } = e, {
                                selectedQueryResult: c,
                                numKeystrokes: u,
                                hadMetaClick: g,
                                firstKeyStrokeTimeMs: p
                            } = r(785385).default.state;
                            if (u > 0 && d > 0 && !c && !g && i && n && a) {
                                let e = Date.now(),
                                    a = s.length > 0 ? s[0].serverEventProperties : void 0;
                                (0, r(72356).m)(t, { ...a,
                                    timeToAbandonMs: e - n,
                                    timeFromFirstKeyStrokeToAbandonMs: p ? e - p : void 0,
                                    numKeystrokes: u,
                                    numResultsAboveFold: function(e) {
                                        var t;
                                        let i = null == (t = e.current) ? void 0 : t.getNode();
                                        if (!i) return 0;
                                        let n = i.scrollTop + i.clientHeight,
                                            a = Array.from(i.getElementsByClassName(r(828432).LF7)),
                                            s = 0,
                                            o = 0;
                                        for (let e of a)
                                            if (e instanceof HTMLElement)
                                                if (n - o > e.clientHeight / 2) s++, o += e.clientHeight;
                                                else break;
                                        return s
                                    }(o),
                                    searchSessionId: i,
                                    searchSessionFlowNumber: d,
                                    hasScrolled: l,
                                    numLocalResults: s.filter(e => e.sources.includes(r(821603).Ni.Local)).length,
                                    numTotalLocalResults: s.filter(e => e.sources.includes(r(821603).Ni.Local)).length,
                                    isMobile: r(986939).A.isMobile
                                })
                            }
                        }({
                            environment: e,
                            sessionId: R.sessionId,
                            openedTimeMs: R.openedTimeMs,
                            isOpen: R.isOpen,
                            results: ef,
                            scrollerRef: T,
                            searchSessionFlowNumber: ey,
                            hasScrolled: M.current
                        });
                        let n = null == (i = r(357887)._.state.previousTextSelection) ? void 0 : i.multiSelection;
                        t.shouldResetQuery && D.setValue([]), r(357887)._.update(e => ({ ...e,
                            isOpen: !1,
                            isNewElectronTab: !1,
                            openedTimeMs: void 0,
                            sessionId: void 0,
                            previousTextSelection: void 0
                        })), r(785385).default.reset(), H && (0, r(909718).y)(), r(986939).A.isMobile && (0, r(713167).V)(), O.current && clearTimeout(O.current), O.current = window.setTimeout(U, r(250227).INACTIVE_TIMEOUT_MS), n && "editing" !== r(358377).default.state.mode && r(358377).default.setState({
                            forceExtendAnnotations: {},
                            mode: "editing",
                            multiSelection: n
                        })
                    }, [W, R.openedTimeMs, R.sessionId, R.isOpen, e, D, U, H, ef, T, ey]);
                ! function({
                    environment: e,
                    closeSearch2: t
                }) {
                    let n = (0, i.useRef)(),
                        a = (0, i.useRef)(),
                        s = (0, i.useRef)(),
                        l = (0, i.useRef)(),
                        d = (0, i.useRef)(),
                        {
                            mode: c,
                            isOpen: u
                        } = (0, r(682985).K8)(() => ({
                            mode: r(357887)._.state.mode,
                            isOpen: r(357887)._.state.isOpen
                        }), []),
                        g = (0, i.useCallback)(() => {
                            var t, i;
                            let n = null == (t = (0, r(328765).S)()) ? void 0 : t.id;
                            d.current !== n && (d.current = n, null == (i = r(357887)._.state.query) || i.setValue([]), d.current && r(728372).AppStoreCurrentUserStore.state && (0, r(817599).q)(e) && (0, r(297459).Z)())
                        }, [e]),
                        p = (0, i.useCallback)(e => {
                            let {
                                environment: t,
                                openAssistant: i
                            } = e;
                            i && r(357887)._.switchToAgent(), r(635257)._N({
                                environment: t,
                                analyticsFrom: "keyboard-shortcut-quick-search-hotkey",
                                isQuickSearch: !0
                            })
                        }, []),
                        {
                            assistantSessionId: m,
                            assistantSessionContext: h
                        } = (0, r(682985).K8)(() => {
                            let e = r(838448).default.getActiveSessionId();
                            return {
                                assistantSessionId: e,
                                assistantSessionContext: e ? r(838448).default.getSessionContext(e) : void 0
                            }
                        }, []),
                        f = (0, i.useCallback)((i, n, a, s) => {
                            if ("stopQueueingSubscriptions" in r(48091).Ay && "function" == typeof r(48091).Ay.stopQueueingSubscriptions && r(48091).Ay.stopQueueingSubscriptions(), n) {
                                let t;
                                t = "tray-icon" === a ? "quick-search-tray-icon" : "shortcut" === a ? "quick-search-shortcut" : "debug-menu" === a ? "quick-search-debug-menu" : "quick-search", s && r(357887)._.switchToAgent(), !s && "agent" === c && u && (t = "command_search_switching_panes", r(357887)._.switchToSearchPane(), m && r(310639).assistantDependency.load().then(({
                                    assistantAnalyticsActions: e
                                }) => {
                                    e.trackAssistantClosed({
                                        from: "command_search_switching_panes",
                                        sessionContext: h
                                    })
                                })), r(635257)._N({
                                    environment: e,
                                    analyticsFrom: t,
                                    isQuickSearch: !0,
                                    doNotTrackOpenSearchEvent: s
                                }), r(374176).default.afterNextFlush().then(() => (0, r(302545).L)())
                            } else t({
                                shouldResetQuery: !1
                            })
                        }, [e, u, c, m, h, t]);
                    (0, r(383953).w)(() => {
                        var t;
                        !e.device.isElectron || (d.current = null == (t = (0, r(328765).S)()) ? void 0 : t.id, r(728372).AppStoreCurrentUserStore.state && (0, r(817599).q)(e) && (0, r(297459).Z)(), (0, r(817599).q)(e) || (l.current = r(884972).yd.addListener((t, r) => {
                            o(e, r)
                        })), null !== r(884972).Ht && void 0 !== r(884972).Ht && r(884972).Ht.quickSearchVisibilityState && (r(728372).default.addListener(g), s.current = r(884972).JW.addListener(f), n.current = r(884972).RS.addListener(() => {
                            p({
                                environment: e,
                                openAssistant: !1
                            })
                        }), a.current = r(884972).lS.addListener(() => {
                            "chat" !== e.RouterStore.state.route.name && p({
                                environment: e,
                                openAssistant: !0
                            })
                        })))
                    }), (0, r(637030).X)(() => {
                        var t, i, o, d;
                        e.device.isElectron && (null == (t = n.current) || t.call(n), null == (i = a.current) || i.call(a), null == (o = l.current) || o.call(l), null == (d = s.current) || d.call(s), r(728372).default.removeListener(g))
                    })
                }({
                    environment: e,
                    closeSearch2: ek
                });
                let {
                    results: eI,
                    searchSessionId: eM,
                    searchSessionFlowNumber: eT,
                    isResultsLoading: eC,
                    numTotalServerResults: eA,
                    searchAnalytics: eP,
                    fetchAdditionalServerResultsOnChange: eR,
                    debugInfo: e_
                } = (0, r(183464).W)({
                    type: r(821603).Vz.BlocksInSpace,
                    query: en,
                    limit: r(661238).ZK,
                    source: "quick_find",
                    filters: eu,
                    sort: eg,
                    options: {
                        disable: !X,
                        isTitleOnly: !1,
                        overrideSearchSessionId: R.sessionId,
                        overrideSpaceStore: V,
                        searchExperimentOverrides: Object.keys(em).length > 0 ? em : void 0,
                        debug: X ? "explain" : void 0
                    },
                    forcedBlockIds: G,
                    forcedClusterPattern: Z,
                    peopleBlocksToInclude: "all"
                }), eE = p ? 700 : 652, eF = (0, i.useMemo)(() => ({
                    maxHeight: p ? "48px" : "0px",
                    opacity: +!!p,
                    transform: p ? "translateY(0)" : "translateY(-8px)",
                    transition: "max-height 0.2s ease, opacity 0.2s ease, transform 0.2s ease",
                    pointerEvents: p ? "auto" : "none",
                    overflow: "hidden"
                }), [p]), eN = function(e) {
                    let {
                        shouldShowSecondaryDebugPane: t,
                        isCommandSearchMode: i,
                        shouldShowDebugSidebar: n,
                        isShowingHighlightPane: a,
                        modalHeight: s
                    } = e, o = (() => {
                        if (!r(986939).A.isMobile) return i ? t ? 1e3 : 755 : t ? 1200 : a ? 1006 : 600
                    })(), l = n && "number" == typeof o ? o + 380 : o, d = (0, r(682985).K8)(() => r(986939).A.isMobile ? "100%" : (0, r(519048).CX)({
                        quickSearchMode: i
                    }).maxHeight, [i]);
                    return (0, r(960253).I)(() => {
                        let e = r(986939).A.isMobile ? d : i ? "100%" : `${s}px`,
                            t = r(986939).A.isMobile ? void 0 : i ? "100%" : l;
                        return {
                            wrapper: {
                                display: "flex",
                                flexDirection: r(986939).A.isMobile ? "column" : "row",
                                justifyContent: "flex-start",
                                width: t,
                                height: e,
                                transition: "width 0.2s ease, height 0.2s ease"
                            },
                            container: {
                                display: "grid",
                                flexDirection: "column",
                                gridTemplateColumns: "100%",
                                gridTemplateRows: "auto auto minmax(0, 1fr) auto",
                                width: n ? o : "100%",
                                height: "100%",
                                transition: "width 0.2s ease, height 0.2s ease"
                            }
                        }
                    }, [l, d, n, o, s, i])
                }({
                    shouldShowSecondaryDebugPane: X,
                    isShowingHighlightPane: ei,
                    isCommandSearchMode: H,
                    shouldShowDebugSidebar: ee,
                    modalHeight: eE
                }), ez = (0, i.useMemo)(() => ({
                    query: {
                        text: en,
                        filters: eu,
                        sort: eg ? ? {
                            field: "relevance"
                        }
                    },
                    limit: r(661238).ZK
                }), [en, eu, eg]), eL = H ? r(316258).wy.commandSearch : r(986939).A.isMobile ? r(316258).wy.mobileSearch : r(316258).wy.searchPane, eB = (0, i.useCallback)((t, i) => {
                    t.preventDefault(), t.stopPropagation(), r(781945).uj(e, t, i)
                }, [e]), eV = (0, i.useCallback)(e => {
                    !e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || "j" !== e.key.toLowerCase() || eB(e, "down")
                }, [eB]), eK = (0, i.useCallback)(e => eB(e, "up"), [eB]), eD = (0, i.useCallback)(() => {
                    ek({
                        shouldResetQuery: !1
                    })
                }, [ek]), eO = (0, i.useMemo)(() => (0, l.jsx)(r(316258).hP, {
                    surface: eL,
                    children: (0, l.jsx)(r(369064).N, {
                        debugName: "Search2",
                        capture: R.isOpen && "search" === W,
                        priority: 1,
                        onKeypress: eV,
                        onDeleteToEndOfLine: eK,
                        children: (0, l.jsxs)("div", {
                            style: eN.wrapper,
                            children: [(0, l.jsx)("div", {
                                style: eN.container,
                                "data-search-2-container": !0,
                                className: "search-2-snapshot-container",
                                children: "search" === W ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(K, {
                                        inputComboboxProps: C,
                                        queryText: D,
                                        hasFilters: (0, r(421593).D)(eu),
                                        isShowingFilterBar: p,
                                        setIsShowingFilterBar: m,
                                        scrollerRef: T,
                                        isShowingHighlightPane: x,
                                        setIsShowingHighlightPane: y,
                                        onClose: eD
                                    }), r(986939).A.isMobile || !V || el ? void 0 : (0, l.jsx)("div", {
                                        style: eF,
                                        children: (0, l.jsx)(r(330551).S, {
                                            filters: eu,
                                            onFiltersChange: E,
                                            sort: eg,
                                            onSortChange: F,
                                            parentStore: V
                                        })
                                    }), (0, l.jsxs)(r(4458).fI, {
                                        gap: 12,
                                        height: "100%",
                                        children: [(0, l.jsx)(tS, {
                                            ref: T,
                                            currentView: c,
                                            isResultsLoading: eb,
                                            numTotalServerResults: ev,
                                            searchUserPreferences: _,
                                            fetchAdditionalServerResultsOnChange: ej,
                                            onDismiss: ek,
                                            searchAnalytics: eS,
                                            results: ef,
                                            searchActionResults: w,
                                            query: en,
                                            searchSessionId: ex,
                                            searchSessionFlowNumber: ey,
                                            menuListComboboxProps: P,
                                            queryTextValueWithoutSearchFilters: es,
                                            filters: eu,
                                            setCurrentView: u,
                                            debugConfig: {
                                                experimentOverrides: ep,
                                                onExperimentOverridesChange: e => et("main", e),
                                                debugInfo: ew
                                            },
                                            isShowingHighlightPane: ei,
                                            disableSidePeek: X,
                                            onScrollInResultsView: () => {
                                                M.current || (M.current = !0)
                                            },
                                            sort: eg ? ? {
                                                field: "relevance"
                                            },
                                            onSortChange: F
                                        }), X ? (0, l.jsx)(tS, {
                                            ref: T,
                                            currentView: c,
                                            isResultsLoading: eC,
                                            numTotalServerResults: eA,
                                            searchUserPreferences: _,
                                            fetchAdditionalServerResultsOnChange: eR,
                                            onDismiss: ek,
                                            searchAnalytics: eP,
                                            results: eI,
                                            query: en,
                                            searchSessionId: eM,
                                            searchSessionFlowNumber: eT,
                                            menuListComboboxProps: void 0,
                                            queryTextValueWithoutSearchFilters: es,
                                            filters: eu,
                                            setCurrentView: u,
                                            searchActionResults: w,
                                            debugConfig: {
                                                experimentOverrides: em,
                                                onExperimentOverridesChange: e => et("secondary", e),
                                                debugInfo: e_
                                            },
                                            isShowingHighlightPane: ei,
                                            disableSidePeek: !0,
                                            sort: eg ? ? {
                                                field: "relevance"
                                            },
                                            onSortChange: F
                                        }) : void 0]
                                    }), r(986939).A.isMobile ? void 0 : (0, l.jsx)(k, {
                                        results: ef,
                                        debugInfo: ew,
                                        reportBadSearchInputRequest: ez,
                                        isResultsView: "results" === c,
                                        searchUserPreferences: _
                                    })]
                                }) : (0, l.jsx)(r(656592).Yk, {
                                    quickSearchMode: H,
                                    searchContentPaneType: "recents" === c ? "default_body" : "search_results",
                                    onClose: () => ek({
                                        shouldResetQuery: !1,
                                        isEscapeKey: !0
                                    })
                                })
                            }), ee ? (0, l.jsx)(r(244103).s, {}) : void 0]
                        })
                    })
                }), [eL, eN, W, C, D, _, p, eF, x, ei, V, el, eu, E, eg, F, c, eb, ev, ej, ek, eS, ef, w, en, ex, ey, P, es, ep, ew, X, eC, eA, eR, eP, eI, eM, eT, em, e_, ez, H, et, ee, R.isOpen, eV, eK, eD]);
                return r(986939).A.isMobile ? (0, l.jsx)(r(182718).zD, {
                    popupType: r(182718).nl.BottomSheet,
                    open: R.isOpen,
                    content: () => eO,
                    style: tk,
                    bottomSheetDisableDrag: !0,
                    onDismiss: () => ek({
                        shouldResetQuery: !1
                    }),
                    trapFocus: !1,
                    ariaLabel: s.formatMessage(tA.ariaLabel)
                }) : H ? (0, l.jsx)("div", {
                    style: tT,
                    children: eO
                }) : (0, l.jsx)(r(556809).a, {
                    className: "mini-search-snapshot-container",
                    open: R.isOpen,
                    onDismiss: () => ek({
                        shouldResetQuery: !1
                    }),
                    transitionAppearance: "none",
                    isWaxPaper: !0,
                    backgroundStyle: tI,
                    ariaLabel: s.formatMessage(tA.ariaLabel),
                    innerStyle: {
                        width: "max-content",
                        height: `${eE}px`,
                        borderRadius: "20px",
                        top: H ? void 0 : "9vh",
                        transition: "height 0.2s ease, width 0.2s ease"
                    },
                    style: tM,
                    children: eO
                })
            }
            let tA = (0, r(109939).YK)({
                ariaLabel: {
                    defaultMessage: "Search Notion",
                    id: "Search2.ariaLabel"
                }
            })
        },
        194188: (e, t, r) => {
            r.d(t, {
                A: () => i
            });

            function i(e) {
                if (null === e || !0 === e || !1 === e) return NaN;
                var t = Number(e);
                return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
            }
        },
        198347: (e, t, r) => {
            r.d(t, {
                v: () => i
            });

            function i(e, t) {
                r(606047).A.setState({ ...r(606047).A.state,
                    open: !0,
                    from: e
                }), r(606047).A.state.onClose = null == t ? void 0 : t.onClose
            }
        },
        200424: (e, t, r) => {
            e.exports = r.p + "9ade71d75a1c0e93.png"
        },
        200979: (e, t, r) => {
            r.d(t, {
                A: () => i
            });

            function i(e, t) {
                (0, r(570551).A)(2, arguments);
                var i = (0, r(194188).A)(t);
                return (0, r(392998).A)(e, -i)
            }
        },
        250521: (e, t, r) => {
            r.d(t, {
                x: () => i
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            async function i({
                environment: e,
                parentStore: t,
                query: n,
                userIds: a,
                minFuzzyScore: s,
                placeSelfFirst: o
            }) {
                var l;
                let d, c = r(680007).default.mark("user_search_latency"),
                    u = r(218744).default.checkGate({
                        gateName: "search_batch_load_users"
                    }),
                    g = r(975162).lX(a, u ? 300 : Math.max(a.length, 1), async e => {
                        let i = r(807825).L.createChildStore(t, {
                            table: r(832375).oo9,
                            id: e
                        });
                        return await i.load(), i.getValue()
                    });
                (await (0, r(975162).nQ)(1e4, [g])).timeout && (r(773352).log({
                    level: "error",
                    from: "searchActions.searchUsers",
                    type: "UserStoreLoadTimeoutV1",
                    error: {
                        message: "The UserStore.load()'s took longer than 10 seconds"
                    },
                    data: {
                        searchedUserIdCount: a.length,
                        queryLength: n.length,
                        parentStoreLoaded: t.isReady(),
                        documentVisibilityState: document.visibilityState
                    }
                }), (0, r(104310).u)({
                    event: {
                        eventName: "user_search_timeout",
                        eventProperties: {
                            searchedUserIdCount: a.length,
                            queryLength: n.length,
                            parentStoreLoaded: t.isReady(),
                            documentVisibilityState: document.visibilityState
                        }
                    }
                }));
                let p = r(381453).oE(await g),
                    m = null == (l = r(728372).AppStoreCurrentUserStore.state) ? void 0 : l.userId;
                if (o && m) {
                    let e = p.findIndex(e => m === e.id);
                    e > -1 && (d = p[e], p.splice(e, 1))
                }
                let h = r(148344).k.state ? ? {},
                    f = Math.max(...Object.values(h));

                function x(e) {
                    var t;
                    return e === (null == (t = r(728372).AppStoreCurrentUserRootStore.state) ? void 0 : t.userId) ? f + 1e-5 : h[e] ? ? 0
                }
                let y = r(381453).Im(h) ? p : p.sort((e, t) => {
                        let r = x(e.id);
                        return x(t.id) - r
                    }),
                    b = new Set(t.getEmailDomains()),
                    v = n ? (0, r(109266).Q)({
                        query: n,
                        users: y,
                        minFuzzyScore: s,
                        currentUserValue: d,
                        spaceDomains: b
                    }) : p;
                return r(680007).default.measure(c, {}), d ? [d, ...v] : v
            }
        },
        291493: (e, t, r) => {
            r.d(t, {
                H: () => n
            });
            let i = ["reply_menu_all_updates", "reply_menu_archive", "reply_menu_mentions_comments"];

            function n() {
                let e = (0, r(682985).K8)(() => r(266960).A.state.open && i.includes(r(266960).A.state.discussionLocation), []),
                    t = (0, r(682985).K8)(() => r(498368).Ay.getIsMockText(), []),
                    n = (0, r(682985).K8)(() => (0, r(933062).lU)(r(728372).AppStoreMainEditorCurrentBlockStore.state), []);
                return !t && !e && !n
            }
        },
        311077: (e, t, r) => {
            r.d(t, {
                J: () => n,
                M: () => a
            }), r(16280);
            var i = r(296540);
            let n = i.createContext(null);

            function a() {
                let e = (0, i.useContext)(n);
                if (!e) throw Error("ActionBarContext must be used inside ActionBar");
                return e
            }
            n.displayName = "ActionBarContext"
        },
        330116: (e, t, r) => {
            r.d(t, {
                E: () => n
            }), r(296540);
            var i = r(474848);

            function n(e) {
                let {
                    children: t,
                    size: n = "sm",
                    ...a
                } = e, s = (0, r(960253).I)(() => ({
                    wrapper: {
                        display: "flex",
                        alignItems: "center",
                        gap: "lg" === n ? 2 : void 0,
                        background: r(632079).Tj.background.elevated,
                        boxShadow: r(632079).Tj.shadow.outline.md,
                        borderRadius: "lg" === n ? 12 : 6,
                        width: "fit-content",
                        padding: "lg" === n ? 4 : 2
                    }
                }), [n]);
                return (0, i.jsx)("div", { ...a,
                    dir: (0, r(619157).A1)() ? "rtl" : "ltr",
                    style: s.wrapper,
                    children: (0, i.jsx)(r(311077).J.Provider, {
                        value: {
                            size: n
                        },
                        children: t
                    })
                })
            }
        },
        334682: (e, t, r) => {
            r.d(t, {
                m: () => i
            }), r(898992), r(354520), r(430670), r(581454);
            async function i(e) {
                let {
                    environment: t,
                    membersOnly: i
                } = e, n = r(728372).AppStoreSidebarSpaceStore.state;
                if (!n) return [];
                await r(371151).iV({
                    environment: t,
                    spaceId: n.id
                });
                let a = r(105692).subscriptionDataStoreInstance.state;
                if (!a) return [];
                let s = (0, r(576968).B)(a).filter(e => !i || !!(0, r(729052).MN)(e.membershipType)),
                    o = r(728372).AppStoreMainEditorCurrentBlockStore.state,
                    l = r(728372).AppStoreCurrentUserStore.state,
                    d = o && !i ? (0, r(862085).i0)(o).flatMap(({
                        permissionItem: e
                    }) => (0, r(642157).B2)(e) ? [e.user_id] : []) : [],
                    c = s.map(e => e.userId);
                return r(381453).sb([...r(381453).oE([null == l ? void 0 : l.userId]), ...d, ...c])
            }
        },
        376921: (e, t, r) => {
            r.d(t, {
                Ay: () => l,
                mI: () => a,
                vb: () => s
            }), r(296540);
            var i = r(474848);
            let n = (0, r(109939).YK)({
                    removeTokenLabel: {
                        defaultMessage: "Remove {title}",
                        id: "uiGenericToken.removeTokenLabel"
                    },
                    removeTokenLabelGeneric: {
                        defaultMessage: "Remove Item",
                        id: "uiGenericToken.removeTokenLabelGeneric"
                    }
                }),
                a = r(696654).NY,
                s = {
                    [r(696654).NY.ExtremeSmall]: {
                        height: 12,
                        fontSize: 10,
                        margin: "0 4px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: r(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [r(696654).NY.ExtraSmall]: {
                        height: 14,
                        fontSize: 12,
                        margin: "0 6px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: r(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [r(696654).NY.Small]: {
                        height: 18,
                        fontSize: 12,
                        margin: "0 6px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: r(104509).Ev.xxs,
                        avatarSize: 16
                    },
                    [r(696654).NY.CompactEssential]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: r(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [r(696654).NY.Medium]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: r(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [r(696654).NY.Inline]: {
                        height: 20,
                        fontSize: 14,
                        closeIconSize: r(104509).Ev.xxs,
                        avatarSize: 20,
                        margin: "0 -5px 0 0",
                        marginEditState: "0 6px 0 0"
                    },
                    [r(696654).NY.Large]: {
                        height: 24,
                        fontSize: 16,
                        margin: "0 8px 8px 0",
                        marginEditState: "0 8px 8px 0",
                        closeIconSize: r(104509).Ev.sm,
                        avatarSize: 24
                    }
                },
                o = {
                    style0: { ...r(699422).RC
                    },
                    style1: {
                        opacity: .5
                    }
                };

            function l({
                avatarSize: e,
                format: t,
                isSingle: a,
                onClickRemove: d,
                renderAvatar: c,
                showRemoveButton: u,
                shouldShrink: g,
                style: p,
                title: m
            }) {
                let h = (0, r(109939).tz)(),
                    {
                        height: f,
                        fontSize: x,
                        margin: y,
                        marginEditState: b,
                        closeIconSize: v,
                        avatarSize: S
                    } = s[t],
                    j = (0, r(960253).I)(() => ({
                        root: {
                            display: "flex",
                            alignItems: "center",
                            flexShrink: +!!g,
                            minWidth: 0,
                            height: f,
                            borderRadius: 6,
                            fontSize: x,
                            lineHeight: "120%",
                            margin: a ? 0 : u ? b : y,
                            ...p
                        }
                    }), [x, f, a, y, b, g, u, p]);
                return (0, i.jsxs)("div", {
                    style: j.root,
                    children: [null == c ? void 0 : c(e ? ? S), (0, i.jsx)("div", {
                        className: "notranslate",
                        style: o.style0,
                        children: m
                    }), u ? (0, i.jsx)(r(64960).Ay, {
                        ariaLabel: void 0 !== m ? h.formatMessage(n.removeTokenLabel, {
                            title: m
                        }) : h.formatMessage(n.removeTokenLabelGeneric),
                        onClick: d,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: f,
                            height: f,
                            marginInlineStart: 2,
                            marginInlineEnd: 2,
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: 6
                        },
                        children: (0, i.jsx)(r(16275).I, {
                            icon: r(519529).xMarkFillSmallIcon,
                            size: v,
                            style: o.style1
                        })
                    }) : null]
                })
            }
        },
        380559: (e, t, r) => {
            r.d(t, {
                u: () => s
            }), r(296540);
            var i = r(474848);
            let n = {
                position: "absolute",
                insetInlineEnd: -2,
                bottom: -2
            };

            function a(e) {
                let {
                    size: t
                } = e;
                return (0, i.jsx)("span", {
                    style: n,
                    children: (0, i.jsx)(r(16275).I, {
                        icon: r(759706).arrowDiagonalUpRightSmallIcon,
                        size: t,
                        colorVariant: "primary",
                        showOutline: !0
                    })
                })
            }

            function s(e) {
                var t, n;
                let {
                    isTablet: s
                } = (0, r(533992).Y0)(), o = (0, r(853284).U)(), l = (0, r(665002).g)(), d = r(986939).A.isMobile ? (0, r(616844).Y5)("left", "number" == typeof(null == (t = e.style) ? void 0 : t.paddingInlineStart) ? null == (n = e.style) ? void 0 : n.paddingInlineStart : 10) : void 0, c = (0, r(960253).I)(() => {
                    let t = r(986939).A.isMobile ? {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            minHeight: 26,
                            fontSize: 16,
                            paddingTop: s ? 4 : 8,
                            paddingBottom: s ? 4 : 8,
                            paddingInlineStart: d,
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
                            height: r(132261).Zr,
                            paddingTop: 4,
                            paddingBottom: 4,
                            ...(0, r(153262).ic)()
                        },
                        i = r(986939).A.isMobile ? 24 : e.isLibrary ? r(132261).FD : r(132261).ry;
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
                            width: r(986939).A.isMobile ? 28 : 22,
                            height: r(986939).A.isMobile ? 24 : 18,
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
                            color: r(632079).Tj.text.secondary,
                            width: i,
                            height: i,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInlineEnd: o ? 6 * !e.icon : e.isLibrary ? 8 : 8 * !e.icon
                        },
                        children: {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: "auto",
                            whiteSpace: "nowrap",
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: e.right && !r(986939).A.isMobile ? "clip" : "ellipsis",
                            ...e.childrenStyle
                        }
                    }
                }, [s, d, e.shouldShowMobileMarginBottom, e.isBottomItem, e.style, e.rightStyle, e.isLibrary, e.icon, e.right, e.childrenStyle, o, l]);
                return (0, i.jsxs)("div", {
                    role: e.role,
                    dir: (0, r(619157).A1)() ? "rtl" : "ltr",
                    "aria-current": e["aria-current"],
                    "aria-expanded": e["aria-expanded"],
                    "aria-owns": e["aria-owns"],
                    "aria-labelledby": e["aria-labelledby"],
                    style: c.wrapper,
                    onFocus: e.onFocus,
                    onBlur: e.onBlur,
                    onMouseMove: e.onMouseMove,
                    onMouseLeave: e.onMouseLeave,
                    onClick: e.onClick,
                    className: e.className,
                    children: [e.left ? (0, i.jsx)("div", {
                        style: c.left,
                        children: e.left
                    }) : void 0, e.icon ? (0, i.jsxs)("div", {
                        style: c.icon,
                        children: [e.icon, e.isAlias ? (0, i.jsx)(a, {
                            size: "xs"
                        }) : void 0]
                    }) : void 0, (0, i.jsx)("div", {
                        style: c.children,
                        children: e.children
                    }), e.right ? (0, i.jsx)("div", {
                        style: c.right,
                        children: e.right
                    }) : void 0]
                })
            }
        },
        392998: (e, t, r) => {
            r.d(t, {
                A: () => i
            });

            function i(e, t) {
                (0, r(570551).A)(2, arguments);
                var i = (0, r(10123).A)(e),
                    n = (0, r(194188).A)(t);
                return isNaN(n) ? new Date(NaN) : (n && i.setDate(i.getDate() + n), i)
            }
        },
        445283: (e, t, r) => {
            r.d(t, {
                N: () => i
            });

            function i(e) {
                if ("avatar" === e) return r(616922).eQ;
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
                else return (0, r(722371).HB)(e)
            }
        },
        447364: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => n,
                inviteMemberIcon: () => a
            }), r(296540);
            var i = r(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.68 2.37 15.82 17.13",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10 2.375c-1.137 0-2.054.47-2.674 1.242-.608.757-.9 1.765-.9 2.824s.292 2.066.9 2.824c.62.772 1.537 1.241 2.674 1.241s2.055-.469 2.675-1.241c.608-.758.9-1.766.9-2.824 0-1.059-.292-2.067-.9-2.824-.62-.773-1.538-1.242-2.675-1.242M7.676 6.441c0-.842.233-1.554.624-2.042.38-.473.937-.774 1.7-.774s1.32.301 1.7.774c.391.488.624 1.2.624 2.042s-.233 1.554-.624 2.041c-.38.473-.937.774-1.7.774s-1.32-.3-1.7-.774c-.391-.487-.624-1.2-.624-2.041M10 11.63c-2.7 0-5.101 1.315-6.12 3.305-.361.706-.199 1.421.23 1.923.412.48 1.06.767 1.74.767h5.845a4.6 4.6 0 0 1-.28-1.25H5.85c-.342 0-.634-.148-.79-.33-.138-.162-.172-.336-.067-.54.761-1.488 2.672-2.626 5.007-2.626.83 0 1.605.144 2.294.395.269-.364.59-.688.952-.96A7.9 7.9 0 0 0 10 11.63"
                        }), (0, i.jsx)("path", {
                            d: "M16 19.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m2.594-3.469a.625.625 0 0 0-.625-.625h-1.375v-1.375a.625.625 0 0 0-1.25 0v1.375h-1.375a.625.625 0 0 0 0 1.25h1.375v1.375a.625.625 0 1 0 1.25 0v-1.375h1.375c.345 0 .625-.28.625-.625"
                        })]
                    })
                },
                a = (0, r(104509).wt)("inviteMember", n, "default")
        },
        454433: (e, t, r) => {
            r.r(t), r.d(t, {
                filterFillIcon: () => n,
                iconDefinition: () => i
            }), r(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 4.62 15.76 10.75",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M3 4.625a.875.875 0 1 0 0 1.75h14a.875.875 0 0 0 0-1.75zm2.125 6.242h9.75a.875.875 0 0 0 0-1.75h-9.75a.875.875 0 1 0 0 1.75m1.25 3.633c0-.483.392-.875.875-.875h5.5a.875.875 0 0 1 0 1.75h-5.5a.875.875 0 0 1-.875-.875"
                    })
                },
                n = (0, r(104509).wt)("filterFill", i, "fill")
        },
        483754: (e, t, r) => {
            r.d(t, {
                p: () => i
            });

            function i(e) {
                let {
                    recordMapWithRoleJson: t
                } = e, i = r(412951).RecordMapWithRole.create(t), n = r(412951).RecordMapWithRole.create();
                for (let {
                        pointer: e,
                        model: t
                    } of i) t && n.setModelAndRole(e, t, "editor");
                return n
            }
        },
        517352: (e, t, r) => {
            r.d(t, {
                e: () => a
            });
            var i = r(296540),
                n = r(474848);
            let a = (0, i.forwardRef)(function(e, t) {
                let {
                    children: a,
                    relative: s,
                    tooltip: o,
                    tooltipPlacement: l = "top",
                    iconLeading: d,
                    iconTrailing: c,
                    ...u
                } = e, {
                    size: g
                } = (0, r(311077).M)(), p = (0, i.useMemo)(() => d && "sm" !== g ? {
                    size: "default",
                    icon: d
                } : d, [d, g]), m = (0, i.useMemo)(() => c && "sm" !== g ? {
                    size: "default",
                    icon: c
                } : c, [c, g]), h = (0, r(960253).I)(() => ({
                    button: {
                        borderRadius: r(399411).VJ["lg" === g ? "xl" : "xs"],
                        position: s ? "relative" : void 0
                    }
                }), [s, g]), f = e => (0, n.jsx)(r(988022).p, {
                    ref: t,
                    colorPalette: "gray",
                    size: g,
                    iconLeading: p,
                    iconTrailing: m,
                    external: !0,
                    disabledFeedback: !0,
                    style: h.button,
                    ...(0, r(63390).A)(u, e),
                    children: a ? (0, n.jsx)(r(111010).D, {
                        styleKey: "captionRegular",
                        children: a
                    }) : void 0
                });
                return o ? (0, n.jsx)(r(51831).m, {
                    content: () => o,
                    placement: l,
                    alignment: "center",
                    children: f
                }) : f()
            })
        },
        539694: (e, t, r) => {
            r.d(t, {
                _: () => i
            });
            let i = (0, r(104509).xh)("notion", {
                default: {
                    loader: () => r.e(60858).then(r.bind(r, 792668))
                },
                tintable: {
                    loader: () => r.e(60858).then(r.bind(r, 898378))
                }
            })
        },
        570551: (e, t, r) => {
            r.d(t, {
                A: () => i
            });

            function i(e, t) {
                if (t.length < e) throw TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
            }
        },
        575422: (e, t, r) => {
            r.d(t, {
                m: () => n
            });
            let i = (0, r(109939).YK)({
                untitledAgent: {
                    id: "workflow.emptyWorkflowTitle",
                    defaultMessage: "Untitled agent"
                }
            });

            function n(e, t, r) {
                var n;
                return {
                    name: e.getName() || r || t.formatMessage(i.untitledAgent),
                    icon: e.getRawIcon() || "",
                    isLite: (null == (n = e.getData()) ? void 0 : n.isLite) ? ? !1
                }
            }
        },
        600614: (e, t, r) => {
            r.d(t, {
                ZW: () => i,
                dP: () => n
            });
            let i = 100,
                n = 9500
        },
        606982: (e, t, r) => {
            r.d(t, {
                A: () => i
            });

            function i(e, t) {
                (0, r(570551).A)(2, arguments);
                var i = (0, r(10123).A)(e),
                    n = (0, r(10123).A)(t),
                    a = i.getTime() - n.getTime();
                return a < 0 ? -1 : a > 0 ? 1 : a
            }
        },
        634740: (e, t, r) => {
            r.d(t, {
                i: () => l
            });
            var i = r(296540),
                n = r(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.49 2.19 11.01 11.97",
                    svg: (0, n.jsx)("path", {
                        d: "m4.145 2.922-.227-.265a.55.55 0 1 0-.836.716l1.491 1.739a3.9 3.9 0 0 0-.46 1.836v.895a2.78 2.78 0 0 1-.687 1.83l-.616.703c-.709.81-.134 2.078.942 2.078h2.2a2.081 2.081 0 0 0 4.095 0h.819l1.216 1.419a.55.55 0 0 0 .843-.707L4.153 2.931zm1.068 4.026c0-.32.054-.626.152-.912l4.558 5.318h-6.17a.153.153 0 0 1-.116-.253l.617-.705a3.88 3.88 0 0 0 .959-2.553zm1.773 5.506h2.028a1.081 1.081 0 0 1-2.028 0m6.302-.554a1.244 1.244 0 0 0-.098-1.524l-.616-.704a2.78 2.78 0 0 1-.687-1.829v-.895a3.89 3.89 0 0 0-2.124-3.465 1.85 1.85 0 0 0-3.526 0l-.112.06.738.86.062-.027.29-.121.042-.312A.75.75 0 0 1 8 3.29c.378 0 .692.281.743.653l.043.312.29.121a2.79 2.79 0 0 1 1.711 2.572v.895c0 .513.102 1.016.294 1.482z"
                    })
                },
                s = (0, r(104509).wt)("bellSlashSmall", a, "small"),
                o = {
                    tooltip: {
                        color: r(632079).Tj.text.inverseSecondary,
                        fontWeight: r(699422).Wy.regular,
                        maxWidth: 240
                    },
                    tooltipHeader: {
                        color: r(632079).Tj.text.inversePrimary,
                        fontWeight: r(699422).Wy.medium
                    }
                },
                l = i.forwardRef(function(e, t) {
                    let {
                        user: a,
                        focused: l
                    } = e, u = (0, r(533992).v3)(), g = (0, r(109939).tz)(), p = (0, r(197018).A7)(a), m = (0, r(197018).lR)(g, p), h = (0, r(682985).K8)(() => {
                        let e = (0, r(330870).a)();
                        return !(e && (0, r(865768).Aj)({
                            store: e
                        })) || "none" !== (0, r(862085).om)(a.id)
                    }, [a.id]), f = (0, r(682985).K8)(() => {
                        var e;
                        return a.id === (null == (e = r(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id)
                    }, [a.id]), x = (0, r(291493).H)(), y = (0, r(682985).O$)(r(330870).S), b = (0, r(682985).K8)(() => null == y ? void 0 : y.canAdmin(), [y]), v = (0, i.useMemo)(() => {
                        if (x && l && !h) return !(y && r(255482).K.get({
                            userId: u.currentUser.id,
                            key: (0, r(650251).T)(y.id)
                        })) && b ? (0, n.jsx)(r(16275).I, {
                            icon: r(447364).inviteMemberIcon,
                            size: 17,
                            colorVariant: "secondary"
                        }) : (0, n.jsx)(r(16275).I, {
                            icon: s,
                            size: 17,
                            colorVariant: "secondary"
                        })
                    }, [x, u.currentUser.id, h, l, y, b]), S = (0, r(682985).K8)(() => a.email, [a]), j = (0, i.useMemo)(() => x ? (0, n.jsxs)("div", {
                        style: o.tooltip,
                        children: [(0, n.jsx)("header", {
                            style: o.tooltipHeader,
                            children: (0, n.jsx)(c, {
                                userName: m,
                                userHasAccessToPage: h,
                                userIsSelf: f
                            })
                        }), S]
                    }) : null, [x, h, f, m, S]);
                    return (0, n.jsx)(r(920224).A, { ...e,
                        ref: t,
                        actor: p,
                        right: v,
                        tooltip: j,
                        badge: (0, n.jsx)(d, {
                            user: a
                        }),
                        tooltipPlacement: x ? "right" : void 0,
                        useEmailAsTooltip: !x,
                        customUserTitleStyles: r(986939).A.isMobile ? {
                            fontSize: 14
                        } : void 0,
                        iconSizeOverride: r(986939).A.isMobile ? 24 : void 0
                    })
                });

            function d({
                user: e
            }) {
                let t = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore),
                    i = (0, r(682985).K8)(() => {
                        if (t) return r(229903).V.createChildStore(t, (0, r(729052).i1)({
                            userId: e.id,
                            spaceId: t.id
                        })).getMembershipType()
                    }, [t, e.id]);
                if (!i) return null;
                switch (i) {
                    case "none":
                    case "member":
                    case "membership_admin":
                    case "owner":
                        return null;
                    case "page_guest":
                        return (0, n.jsx)(r(577280).w, {
                            labelType: "guest"
                        });
                    case "restricted_member":
                        return (0, n.jsx)(r(156379).L, {});
                    default:
                        (0, r(722371).HB)(i)
                }
            }

            function c({
                userName: e,
                userHasAccessToPage: t,
                userIsSelf: i
            }) {
                return i ? (0, n.jsx)(r(109939).sA, {
                    defaultMessage: "You",
                    id: "activitySection.authorPhrase.forOneAuthorCurrentUser.label"
                }) : t ? null : (0, n.jsx)(r(109939).sA, {
                    id: "mentionMenu.UserMentionMenuItem.noAccessTooltip",
                    defaultMessage: "{userName} won’t be notified because they don’t have page access",
                    values: {
                        userName: e
                    }
                })
            }
        },
        650251: (e, t, r) => {
            r.d(t, {
                T: () => i
            });

            function i(e) {
                return `ShowMentionInvite-${e}`
            }
        },
        665002: (e, t, r) => {
            r.d(t, {
                H: () => l,
                g: () => d
            });
            var i = r(296540),
                n = r(474848);
            let a = {
                    disableHoverAnimations: !1
                },
                s = {
                    disableHoverAnimations: !0
                },
                o = (0, i.createContext)(a);

            function l({
                disableHoverAnimations: e,
                children: t
            }) {
                return (0, n.jsx)(o.Provider, {
                    value: e ? s : a,
                    children: t
                })
            }

            function d() {
                return (0, i.useContext)(o).disableHoverAnimations
            }
            o.displayName = "SidebarItemHoverAnimationContext"
        },
        699128: (e, t, r) => {
            r.d(t, {
                r: () => o
            }), r(898992), r(354520), r(581454);
            var i = r(296540);

            function n(e, t) {
                return e instanceof r(970831).B ? t ? !e.isPersonProfile() : !e.isPersonProfile() && !e.isPeopleCollectionViewPage() : e instanceof r(356912).m || void(0, r(722371).HB)(e)
            }

            function a(e) {
                return !(e instanceof r(970831).B) || !e.isTeamPage()
            }

            function s(e) {
                return e instanceof r(356912).m ? !((0, r(398346).l)(e) || (0, r(952592).z)(e)) : e instanceof r(970831).B || void(0, r(722371).HB)(e)
            }

            function o(e) {
                let {
                    query: t,
                    disabled: o,
                    includeDataSources: l,
                    blockStore: d
                } = e, c = (0, r(533992).v3)(), u = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), g = (0, r(682985).K8)(() => (0, r(505941).y)(c), [c]), {
                    overriddenPublicShareLinkSpaceStore: p,
                    furthestPublicShareAncestorId: m
                } = (0, r(981284).W)(), h = !!(r(728372).AppStoreSidebarSpaceStore || p || d), f = (0, r(682985).O$)(r(330870).S), x = null == f ? void 0 : f.id, y = (0, r(682985).K8)(() => o ? [] : r(601860).NK.state.filter(e => e.pageId !== x).slice(0, 20).map(e => e.store), [x, o]), b = "" === t, v = (0, i.useMemo)(() => (0, r(821603).N2)({
                    isDeletedOnly: !1,
                    excludeTemplates: !0,
                    includePublicPagesWithoutExplicitAccess: g,
                    navigableBlockContentOnly: !0,
                    excludeSurrogateCollections: !l
                }), [g, l]), {
                    results: S,
                    isResultsLoading: j,
                    debugInfo: w
                } = (0, r(183464).W)({ ...g ? {
                        type: r(821603).Vz.BlocksInAncestor,
                        ancestorId: m ? ? ""
                    } : {
                        type: r(821603).Vz.BlocksInSpace
                    },
                    source: "mention_menu",
                    query: t,
                    limit: 20,
                    filters: v,
                    options: {
                        disable: o || !h || b || g && !m,
                        overrideSpaceStore: g ? p : void 0
                    },
                    peopleBlocksToInclude: "collection_view_page"
                }), k = (0, r(682985).K8)(() => (0, r(924448).jj)(u), [u]), I = (0, r(682985).K8)(() => b ? y.map(e => ({
                    store: e,
                    serverEventProperties: void 0
                })).filter(({
                    store: e
                }) => n(e, k) && a(e) && s(e)) : S.map(({
                    store: e,
                    collectionId: t,
                    isSurrogateCollection: i,
                    serverEventProperties: n
                }) => ({
                    store: i && t ? r(356912).m.createChildStore(e, {
                        table: r(832375).VlP,
                        id: t
                    }) : e,
                    serverEventProperties: n
                })).filter(({
                    store: e
                }) => n(e, k) && a(e) && s(e)), [S, y, b, k]), M = (0, i.useMemo)(() => {
                    let {
                        localResults: e,
                        serverResults: i,
                        exposedSearchExperiments: n
                    } = (0, r(111950).W)(S);
                    return {
                        debugInfo: w,
                        localResults: e,
                        serverResults: i,
                        exposedSearchExperiments: n,
                        reportBadSearchInputRequest: {
                            query: {
                                text: t,
                                filters: v,
                                sort: {
                                    field: "relevance"
                                }
                            },
                            limit: 20
                        }
                    }
                }, [S, w, t, v]);
                return l ? {
                    results: I,
                    isLoading: j,
                    reportBadSearchMetadata: M
                } : {
                    results: I.filter(e => e.store.table === r(832375).evP),
                    isLoading: j,
                    reportBadSearchMetadata: M
                }
            }
        },
        710426: (e, t, r) => {
            r.d(t, {
                Ay: () => a,
                MR: () => o
            }), r(18107), r(967357), r(898992), r(354520), r(581454);
            var i = r(296540),
                n = r(474848);
            let a = i.memo(function(e) {
                let {
                    store: t,
                    from: i,
                    type: a,
                    canEditItem: o,
                    itemDepth: l,
                    isHovered: d,
                    isFocused: c,
                    onToggle: u
                } = e, p = r(986939).A.isMobile || d || c, m = (0, r(682985).K8)(() => {
                    var e;
                    let i = (0, r(162782).s)(t),
                        n = t.isPlaceholderWorkflowTemplateBlock(),
                        a = null == (e = t.getCollectionStoreIfSingleSource()) ? void 0 : e.isSyncedCollection(),
                        s = t.isPersonProfile(),
                        l = t.isPeopleCollectionViewPage();
                    return !!(t.getType() && o && !i && !n && !a && !s && !l)
                }, [t, o]), h = function(e) {
                    let {
                        showRightIcons: t
                    } = e;
                    return (0, r(960253).I)(() => ({
                        iconContainer: {
                            display: "flex",
                            paddingInlineStart: 3,
                            ...t ? {} : { ...r(69916).Qg,
                                display: "block"
                            }
                        }
                    }), [t])
                }({
                    showRightIcons: p
                });
                return a === r(171231).yy ? null : (0, n.jsx)("div", {
                    style: h.iconContainer,
                    children: "library" === i ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(g, {
                            store: t,
                            from: i,
                            type: e.type,
                            itemIndex: e.itemIndex,
                            itemDepth: l
                        }), m ? (0, n.jsx)(s, {
                            store: t,
                            onToggle: u,
                            isTopLevelItem: 0 === l,
                            from: i,
                            type: a
                        }) : void 0]
                    })
                })
            });

            function s(e) {
                let {
                    store: t,
                    onToggle: i,
                    isTopLevelItem: a,
                    from: s,
                    type: o
                } = e, d = (0, r(533992).v3)(), c = (0, r(109939).tz)(), g = (0, r(682985).K8)(() => t.isCollectionView(), [t]), p = (0, r(682985).K8)(() => t.getOwnedAndLinkedCollectionStores(), [t]), m = (0, r(682985).K8)(() => {
                    var e;
                    let i = null == (e = t.getCollectionViewStores().at(0)) ? void 0 : e.id;
                    if (!i) return;
                    let n = r(547131).p.createChildStore(t, {
                        table: r(832375).Gy1,
                        id: i
                    });
                    return null == n ? void 0 : n.getFormatStore().getValue()
                }, [t]), h = c.formatMessage(r(925021).v.addAPageInside);
                return g && !m && 0 === p.length ? (0, n.jsx)(l, {
                    disabled: !0
                }) : p.length <= 1 ? (0, n.jsx)(r(51831).m, {
                    content: () => h,
                    placement: "bottom",
                    children: e => {
                        let c = { ...e,
                            onClick: e => {
                                var n;
                                let l = (null == (n = p[0]) ? void 0 : n.getParentBlockStore()) ? ? t;
                                r(245757).ru({
                                    store: l,
                                    shouldNavigateToSource: !1,
                                    environment: d,
                                    analytics: {
                                        from: s,
                                        type: o
                                    },
                                    toggleOptions: {
                                        onToggle: i,
                                        isTopLevelItem: a
                                    }
                                })
                            }
                        };
                        return (0, n.jsx)(l, {
                            events: c
                        })
                    }
                }) : (0, n.jsx)(r(51831).m, {
                    content: () => h,
                    placement: "bottom",
                    children: e => (0, n.jsx)(r(656252).A, {
                        popupType: r(986939).A.isMobile ? r(656252).z.BottomSheet : r(656252).z.Popup,
                        content: e => (0, n.jsx)(u, {
                            blockStore: t,
                            parent: e,
                            from: s,
                            type: o
                        }),
                        children: t => (0, n.jsx)(l, {
                            events: (0, r(63390).A)(e, t)
                        })
                    })
                })
            }
            let o = {
                button: r(986939).A.isMobile ? {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: 4,
                    marginInlineStart: 0
                } : {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    marginInlineStart: 4
                }
            };

            function l(e) {
                let t = (0, r(109939).tz)();
                return (0, n.jsx)(r(64960).Ay, {
                    ariaLabel: t.formatMessage(r(925021).v.addAPageInside),
                    style: o.button,
                    disabled: e.disabled,
                    disabledFeedback: e.disabled,
                    ...e.events,
                    children: (0, n.jsx)(r(16275).I, {
                        icon: r(638501).plusSmallIcon,
                        size: "sm",
                        colorVariant: r(986939).A.isMobile ? "tertiary" : "secondary"
                    })
                })
            }
            let d = {
                display: "flex",
                alignItems: "center",
                whiteSpace: "pre"
            };

            function c({
                itemProps: e,
                store: t,
                disabled: i,
                blockStore: a
            }) {
                let s = (0, r(682985).K8)(() => t.getIcon(), [t]),
                    o = (0, r(682985).K8)(() => {
                        var e;
                        return (null == (e = t.getParentBlockStore()) ? void 0 : e.id) !== a.id
                    }, [t, a]);
                return (0, n.jsx)(r(95582).A, { ...e,
                    disabled: i,
                    disabledFeedback: !0,
                    title: (0, n.jsx)("div", {
                        style: d,
                        children: (0, n.jsx)(r(627918).A, {
                            store: t
                        })
                    }),
                    icon: (0, n.jsx)(r(734914).A, {
                        icon: s,
                        size: 14,
                        isEmptyPage: !1,
                        isAlias: o,
                        iconRecordCategory: "collection"
                    })
                })
            }

            function u(e) {
                let {
                    blockStore: t,
                    parent: i,
                    from: a,
                    type: s
                } = e, o = (0, r(533992).v3)(), l = (0, r(682985).K8)(() => t.getOwnedAndLinkedCollectionStores().filter(e => !e.isSyncedCollection()), [t]), d = (0, r(682985).K8)(() => l.map(e => !r(352441).Q.getData(o, {
                    collectionId: e.id,
                    spaceId: e.getSpaceId()
                })), [l, o]), u = {
                    menuType: r(986939).A.isMobile ? r(649476).gu.Modal : r(649476).gu.Popup,
                    right: r(986939).A.isMobile ? (0, n.jsx)(r(109939).sA, { ...r(789722).W.done
                    }) : void 0
                }, g = {
                    key: "collections",
                    render: e => (0, n.jsx)(r(844565).A, { ...e,
                        title: (0, n.jsx)(r(109939).sA, {
                            defaultMessage: "Add to",
                            id: "sidebarItem.addAPageInside.popup.addTo"
                        })
                    }),
                    items: l.map((e, i) => ({
                        key: e.id,
                        render: r => (0, n.jsx)(c, {
                            itemProps: r,
                            store: e,
                            disabled: d[i],
                            blockStore: t
                        }),
                        action: t => {
                            r(245757).ru({
                                store: e,
                                environment: o,
                                shouldNavigateToSource: !0,
                                analytics: {
                                    from: a,
                                    type: s
                                }
                            })
                        }
                    }))
                };
                return (0, n.jsx)(r(747369).A, { ...u,
                    children: (0, n.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        onAccept: i.close,
                        initialFocus: void 0,
                        sections: [g]
                    })
                })
            }

            function g(e) {
                let {
                    store: t,
                    from: i,
                    type: a,
                    itemDepth: s,
                    itemIndex: l
                } = e, d = (0, r(109939).tz)(), c = (0, r(533992).v3)(), u = e => {
                    let n = (0, r(297311).U)(t);
                    (0, r(472709).L)({
                        environment: c,
                        store: t
                    }), r(899964).it({
                        environment: c,
                        stores: [t],
                        left: e.clientX,
                        top: e.clientY,
                        showInput: !1,
                        actionSectionGroupKey: "sidebar_outliner",
                        analyticsFrom: "sidebar_more_menu",
                        optionalAnalyticsProperties: {
                            teamStore: n,
                            type: 0 === s ? "top_level" : "nested",
                            outliner_type: a,
                            outliner_position: l,
                            outliner_depth: s,
                            outliner_location: "main_sidebar" === i ? "sidebar" : "library" === i ? "library" : "pane"
                        }
                    })
                }, g = "bookmarks" === a ? d.formatMessage({
                    defaultMessage: "Remove, rename, and more…",
                    id: "sidebarItem.favoritedPageMenuButton.tooltip"
                }) : "myMeetings" === a ? d.formatMessage({
                    defaultMessage: "Copy, move, and more…",
                    id: "sidebarItem.meetingNoteMenuButton.tooltip"
                }) : d.formatMessage({
                    defaultMessage: "Delete, duplicate, and more…",
                    id: "sidebarItem.pageMenuButton.tooltip"
                });
                return (0, n.jsx)(r(51831).m, {
                    content: () => g,
                    placement: "bottom",
                    children: e => (0, n.jsx)(r(64960).Ay, {
                        ariaLabel: g,
                        style: o.button,
                        onClick: u,
                        ...e,
                        children: (0, n.jsx)(r(16275).I, {
                            icon: r(361226).ellipsisSmallIcon,
                            size: "sm",
                            colorVariant: r(986939).A.isMobile ? "tertiary" : "secondary"
                        })
                    })
                })
            }
        },
        734914: (e, t, r) => {
            r.d(t, {
                A: () => a
            }), r(296540);
            var i = r(474848);
            let n = {
                wrap: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    flexGrow: 0,
                    width: r(986939).A.isMobile ? 28 : 22,
                    height: r(986939).A.isMobile ? 24 : 18,
                    position: "relative"
                }
            };

            function a(e) {
                let {
                    icon: t,
                    isAlias: a,
                    isEmptyPage: s,
                    iconStyle: o,
                    size: l,
                    iconRecordCategory: d
                } = e;
                return (0, i.jsxs)("div", {
                    style: n.wrap,
                    children: [(0, i.jsx)(r(569553).B6, {
                        disabled: !0,
                        icon: t,
                        iconRecordCategory: d,
                        isEmptyPage: s,
                        size: l ? ? 19,
                        style: o
                    }), a ? (0, i.jsx)(r(321825).H, {
                        size: "sm"
                    }) : void 0]
                })
            }
        },
        783782: (e, t, r) => {
            r.r(t), r.d(t, {
                clearPersonalizedPagesForSearch: () => d,
                computeSimilarUserRecentPagesState: () => a,
                fetchUserSignals: () => p,
                getSearchPersonalizationExperimentGroup: () => u,
                initializeAndLoadAllUserSignals: () => o,
                loadPersonalizedPagesForSearch: () => l,
                refreshAndBroadcastSimilarUserSignals: () => s,
                setUserSignals: () => g
            }), r(944114), r(898992), r(803949), r(581454);
            let i = 5 * r(627179).Xb;

            function n(e) {
                let t = r(218744).default.getEligibleGroup({
                    experimentId: e,
                    parameter: "editedPagesLookbackDays",
                    defaultGroup: "control"
                });
                return void 0 === t || "control" === t ? "1" : t
            }

            function a(e) {
                let t = {};
                return e.forEach(({
                    userId: e,
                    recentPages: i,
                    similarity: n
                }) => {
                    i.length && Object.entries(r(381453).$z(i, ({
                        pageId: e
                    }) => e)).forEach(([r, i]) => {
                        let a = i.map(({
                            visitedAt: e
                        }) => e).sort((e, t) => t - e);
                        t[r] || (t[r] = {
                            pageId: r,
                            sortedSimilarUserSignals: []
                        }), t[r].sortedSimilarUserSignals.push({
                            userId: e,
                            similarity: n,
                            visitedAt: a
                        })
                    })
                }), Object.values(t).forEach(e => {
                    e.sortedSimilarUserSignals.sort((e, t) => t.similarity - e.similarity)
                }), t
            }
            async function s(e) {
                var t;
                let {
                    spaceId: i,
                    userId: n,
                    environment: a
                } = e, s = await p({
                    spaceId: i,
                    environment: a,
                    signalsOverride: [{
                        name: "similarUserRecentPages",
                        includeRecords: !0
                    }, {
                        name: "similarUsersEditedPages",
                        includeRecords: !0,
                        lookbackDays: 1
                    }]
                });
                void 0 !== s && (g({
                    spaceId: i,
                    userId: n,
                    environment: a,
                    newSignals: s,
                    initialize: !1
                }), await (null == (t = r(915681).A.state.broadcastChannel) ? void 0 : t.postMessage({
                    type: "userSignals",
                    data: s
                })))
            }
            async function o(e) {
                let {
                    spaceId: t,
                    userId: n,
                    environment: a,
                    refreshTimer: o = i
                } = e, d = "control" === u() ? Promise.resolve() : l({
                    spaceId: t,
                    userId: n,
                    environment: a
                }), [c] = await Promise.all([p({
                    spaceId: t,
                    environment: a
                }), d]);
                if (void 0 !== c)
                    if (g({
                            spaceId: t,
                            userId: n,
                            environment: a,
                            newSignals: c,
                            initialize: !0
                        }), "on" === r(218744).default.getEligibleGroup({
                            experimentId: "search_refresh_user_signals",
                            defaultGroup: "control"
                        })) {
                        var m;
                        await r(383883).default.waitUntil(() => !!r(383883).default.getUserSignals({
                            spaceId: t,
                            userId: n
                        })), null == (m = r(915681).A.state.broadcastChannel) || m.addEventListener("message", e => {
                            "userSignals" === e.type && g({
                                spaceId: t,
                                userId: n,
                                environment: a,
                                newSignals: e.data,
                                initialize: !1
                            })
                        }), await r(915681).A.waitUntil(() => !!r(915681).A.state.elector), r(915681).A.state.elector.awaitLeadership().then(() => {
                            r(383883).default.update(e => {
                                e.refreshIntervalId && window.clearInterval(e.refreshIntervalId);
                                let r = window.setInterval(async () => {
                                    await s({
                                        spaceId: t,
                                        userId: n,
                                        environment: a
                                    })
                                }, o);
                                return { ...e,
                                    refreshIntervalId: r
                                }
                            })
                        })
                    } else r(383883).default.update(e => {
                        e.refreshIntervalId && window.clearTimeout(e.refreshIntervalId);
                        let r = window.setTimeout(async () => {
                            let e = await p({
                                spaceId: t,
                                environment: a
                            });
                            void 0 !== e && g({
                                spaceId: t,
                                userId: n,
                                environment: a,
                                newSignals: e,
                                initialize: !1
                            })
                        }, o);
                        return { ...e,
                            refreshIntervalId: r
                        }
                    })
            }
            async function l(e) {
                let {
                    spaceId: t,
                    userId: i,
                    environment: n,
                    experimentGroupOverride: a
                } = e, s = r(915681).A.state.personalizedPages.requestNumber + 1, o = u(a);
                r(915681).A.update(e => ({ ...e,
                    personalizedPages: { ...e.personalizedPages,
                        requestNumber: s
                    }
                }));
                let l = e => {
                    s === r(915681).A.state.personalizedPages.requestNumber && function(e) {
                        let {
                            pageStores: t,
                            clusters: i
                        } = e;
                        r(915681).A.update(e => ({ ...e,
                            personalizedPages: { ...e.personalizedPages,
                                stores: t,
                                clusters: i
                            }
                        }))
                    }(e)
                };
                if ("control" === o) return void l({
                    pageStores: [],
                    clusters: []
                });
                let d = await c({
                    environment: n,
                    spaceId: t
                });
                if (!d) return void l({
                    pageStores: [],
                    clusters: []
                });
                let g = [];
                for (let e of d.clusters) {
                    let a = await c({
                        environment: n,
                        spaceId: t,
                        clusterLabel: e.label,
                        limit: 10
                    });
                    if (!a) continue;
                    let s = function(e) {
                        let {
                            environment: t,
                            spaceId: i,
                            userId: n,
                            pageIds: a,
                            recordMap: s
                        } = e;
                        if (0 === a.length) return [];
                        let o = (0, r(483754).p)({
                                recordMapWithRoleJson: s
                            }),
                            l = new(r(870941)).A({
                                name: "search-personalized-pages-cache",
                                data: new(r(48202)).UserRecordMap({
                                    [n]: o
                                })
                            });
                        return l.addCacheFallback(t.defaultRecordCache.inMemoryRecordCache), a.map(e => new(r(970831)).B(t, {
                            table: "block",
                            id: e,
                            spaceId: i
                        }, {
                            inMemoryRecordCache: l
                        }))
                    }({
                        environment: n,
                        spaceId: t,
                        userId: i,
                        pageIds: a.pageIds,
                        recordMap: a.recordMap
                    });
                    g.push({
                        label: e.label,
                        topicLabel: e.topicLabel,
                        stores: s
                    })
                }
                l({
                    pageStores: g.flatMap(e => e.stores),
                    clusters: g
                })
            }

            function d() {
                r(915681).A.update(e => ({ ...e,
                    personalizedPages: {
                        stores: [],
                        clusters: [],
                        requestNumber: e.personalizedPages.requestNumber + 1
                    }
                }))
            }
            async function c(e) {
                let {
                    environment: t,
                    spaceId: r,
                    lastEditedTime: i,
                    clusterLabel: n
                } = e, a = e.limit ? ? 25, s = await t.api.callCellCompatibleApi({
                    eventName: "getPersonalizedPagesDoNotUse",
                    environment: t,
                    data: {
                        spaceId: r,
                        limit: a,
                        ...void 0 === i ? {} : {
                            lastEditedTime: i
                        },
                        ...void 0 === n ? {} : {
                            clusterLabel: n
                        }
                    },
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: r
                    }
                });
                if ("success" === s.type) return s.data
            }

            function u(e) {
                return "control"
            }

            function g(e) {
                let {
                    spaceId: t,
                    userId: i,
                    environment: n,
                    newSignals: a,
                    initialize: s
                } = e;
                a && (r(383883).default.setUserSignals({
                    spaceId: t,
                    userId: i,
                    userSignals: a,
                    initialize: s
                }), r(252116).G(n, s ? "userSignalsInitialization" : "userSignalsReload"))
            }
            async function p(e) {
                let {
                    spaceId: t,
                    environment: i,
                    signalsOverride: s
                } = e, o = n("search-local-edited-pages-max"), l = parseInt(n("search-local-sim-users-edited-pages-max")), d = parseInt(o), c = await i.api.callCellCompatibleApi({
                    eventName: "getUserSignals",
                    environment: i,
                    data: {
                        spaceId: t,
                        signals: s ? ? [{
                            name: "similarUserRecentPages",
                            includeRecords: !0
                        }, {
                            name: "topPages7dPageView",
                            includeRecords: !0
                        }, {
                            name: "editedPages",
                            includeRecords: !0,
                            lookbackDays: d
                        }, {
                            name: "similarUsersEditedPages",
                            includeRecords: !0,
                            lookbackDays: l
                        }, {
                            name: "inboxPages",
                            includeRecords: !0,
                            size: 25,
                            type: "unread_and_read"
                        }]
                    },
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: t
                    }
                });
                if ("success" !== c.type) return;
                let u = s ? r(381453).Up((0, r(383883).getInitialUserSignalsState)(), s.map(e => e.name)) : (0, r(383883).getInitialUserSignalsState)();
                return c.data.signals.forEach(e => {
                    if ("error" !== e.status) switch (e.name) {
                        case "similarUserRecentPages":
                            u.similarUserRecentPages = a(e.data);
                            break;
                        case "recentPages":
                            u.recentPages = e.data;
                            break;
                        case "topPages7dPageView":
                            u.topPages7dPageView = e.data;
                            break;
                        case "similarUsersEditedPages":
                            u.similarUsersEditedPages = e.data;
                            break;
                        case "editedPages":
                            u.editedPages = e.data;
                            break;
                        case "inboxPages":
                            u.inboxPages = e.data
                    }
                }), u
            }
        },
        805469: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var i = r(296540);
            let n = function({
                shouldPreserveTextSelection: e,
                shouldPreserveBlockSelection: t,
                shouldRestoreSelection: n,
                onClearSelection: a
            }) {
                let s = (0, r(533992).v3)(),
                    o = (0, i.useRef)(e),
                    l = (0, i.useRef)(""),
                    d = (0, i.useRef)({
                        selectionState: null,
                        textSelectionState: null
                    }),
                    c = (0, i.useCallback)(() => d.current, []),
                    u = (0, i.useCallback)(() => {
                        l.current = window.location.href, r(358377).default.hasSelection() && (d.current.textSelectionState = r(358377).default.cloneState()), (0, r(525779).clear)({
                            environment: s
                        }), t && (r(584265).default.isSelected() && (d.current.selectionState = r(584265).default.cloneState()), (0, r(471e3).I)({
                            environment: s
                        }))
                    }, [s, t]),
                    g = (0, i.useCallback)(() => {
                        d.current = {
                            selectionState: null,
                            textSelectionState: null
                        }, l.current = "", null == a || a()
                    }, [a]),
                    p = (0, i.useCallback)(() => {
                        let {
                            selectionState: e,
                            textSelectionState: i
                        } = d.current;
                        window.location.href === l.current && (i && "mode" in i && "editing" === i.mode && r(358377).default.setState({ ...r(358377).default.state,
                            ...i
                        }), t && e && r(584265).default.setState({ ...r(584265).default.state,
                            ...e
                        })), g()
                    }, [g, t]);
                return (0, r(383953).l)(() => {
                    o.current = e, e && u()
                }), (0, i.useEffect)(() => (o.current && !e ? n ? p() : g() : !o.current && e && u(), o.current = e, () => {
                    n ? p() : g()
                }), [e, g, p, u, n]), {
                    clearSavedSelection: g,
                    restoreSavedSelection: p,
                    getSavedSelection: c
                }
            }
        },
        827380: (e, t, r) => {
            r.d(t, {
                A: () => i
            });

            function i(e) {
                return {
                    all: e = e || new Map,
                    on: function(t, r) {
                        var i = e.get(t);
                        i ? i.push(r) : e.set(t, [r])
                    },
                    off: function(t, r) {
                        var i = e.get(t);
                        i && (r ? i.splice(i.indexOf(r) >>> 0, 1) : e.set(t, []))
                    },
                    emit: function(t, r) {
                        var i = e.get(t);
                        i && i.slice().map(function(e) {
                            e(r)
                        }), (i = e.get("*")) && i.slice().map(function(e) {
                            e(t, r)
                        })
                    }
                }
            }
        },
        845077: (e, t, r) => {
            r.d(t, {
                oY: () => s,
                uE: () => a
            }), r(944114), r(898992), r(430670);
            var i = r(296540),
                n = () => r(575422);

            function a(e) {
                let {
                    query: t,
                    useMentionMenuStore: n
                } = e, {
                    results: a,
                    isLoading: s
                } = function(e) {
                    let {
                        query: t,
                        disabled: n,
                        useMentionMenuStore: a,
                        open: s
                    } = e, o = (0, r(109939).tz)(), l = (0, r(533992).v3)(), d = (0, r(682985).K8)(() => a ? r(498368).Ay.state.open : s, [s, a]), c = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), u = !n && t.length > 0 && c && d, g = (0, r(682985).K8)(() => {
                        var e;
                        let t = r(148344).k.getSortedUserIds(),
                            i = null == (e = (0, r(427846)._)(l)) ? void 0 : e.id;
                        return [...(0, r(381453).oE)([i]), ...t]
                    }, [l]), p = (0, r(682985).K8)(() => {
                        let e = r(728372).AppStoreMainEditorCurrentBlockStore.state;
                        return e ? (0, r(862085).i0)(e).flatMap(({
                            permissionItem: e
                        }) => (0, r(642157).B2)(e) ? [e.user_id] : []) : []
                    }, []), m = (0, r(815048).fJ)(r(308825).T.searchActions), [{
                        value: h = [],
                        status: f
                    }] = (0, r(97668).Yb)(async () => {
                        if (!u || "resolved" !== m.status) return [];
                        let e = (0, r(381453).sb)([...g, ...p]),
                            i = m.value;
                        return (await i.searchUsers({
                            environment: l,
                            parentStore: c,
                            query: t,
                            userIds: e,
                            minFuzzyScore: r(821048).XR,
                            placeSelfFirst: i.isPersonalPronoun(t, o.locale)
                        })).slice(0, 3)
                    }, [u, m.status, m.value, g, p, l, c, t, o.locale]), x = (0, r(682985).K8)(() => c && r(36151).c.state.wasGetVisibleUsersCalled[c.id], [c]), [{
                        value: y = [],
                        status: b
                    }] = (0, r(97668).Yb)(async () => u && x ? (0, r(990959).L)({
                        environment: l,
                        query: t,
                        membersOnly: !1,
                        limit: 20,
                        minFuzzyScore: r(821048).XR
                    }) : [], [u, l, t, x], {
                        debounce: 75
                    });
                    return {
                        results: (0, i.useMemo)(() => {
                            let e = [...h, ...y];
                            return (0, r(381453).hS)(e, e => e.id)
                        }, [h, y]),
                        isLoading: "pending" === b || "pending" === f
                    }
                }({
                    query: t,
                    disabled: (0, r(682985).K8)(() => (!!e.disabled || !!n) && !r(498368).Ay.state.mentionTypes.user, [e.disabled, n]),
                    ...n ? {
                        useMentionMenuStore: !0
                    } : {
                        useMentionMenuStore: !1,
                        open: !0
                    }
                }), o = (0, r(682985).K8)(() => r(498368).Ay.state.emptyQueryUserRequestStore.state.result ? ? [], []);
                return {
                    results: 0 === t.length ? o.slice(0, 4) : a.slice(0, 20),
                    isLoading: s
                }
            }

            function s(e) {
                let {
                    query: t,
                    environment: i,
                    useMentionMenuStore: a,
                    open: s
                } = e, o = (0, r(109939).tz)(), l = (0, r(682985).K8)(() => a ? r(498368).Ay.state.open : s, [s, a]), d = (0, r(596663).k)(), c = (0, r(972740).L)(), u = (0, r(876252).$)(), g = !(0, r(682985).K8)(() => (!!e.disabled || !!a) && !r(498368).Ay.state.mentionTypes.bot, [e.disabled, a]) && d && l && !!c && !!u, [{
                    value: p = [],
                    status: m
                }] = (0, r(97668).Yb)(async () => {
                    if (!g) return [];
                    try {
                        if (!c || !u) return [];
                        let e = await r(308825).T.customAgentSearchService.load(),
                            {
                                workflowStores: a
                            } = await e.getCustomAgents({
                                environment: i,
                                spaceStore: c,
                                userStore: u
                            }),
                            s = e.searchWorkflowStores({
                                query: t,
                                workflowStores: a,
                                limit: 5
                            }),
                            l = [];
                        for (let e of s) {
                            let t = (0, n().m)(e, o);
                            l.push({
                                workflowStore: e,
                                name: t.name,
                                icon: t.icon
                            })
                        }
                        return l
                    } catch {
                        return []
                    }
                }, [g, c, u, t, i, o], {
                    debounce: 75
                });
                return {
                    results: p,
                    isLoading: "pending" === m
                }
            }
        },
        851775: (e, t, r) => {
            r.d(t, {
                A: () => i
            });

            function i(e, t) {
                (0, r(570551).A)(2, arguments);
                var i = (0, r(10123).A)(e),
                    n = (0, r(194188).A)(t),
                    a = i.getFullYear(),
                    s = i.getDate(),
                    o = new Date(0);
                o.setFullYear(a, n, 15), o.setHours(0, 0, 0, 0);
                var l = function(e) {
                    (0, r(570551).A)(1, arguments);
                    var t = (0, r(10123).A)(e),
                        i = t.getFullYear(),
                        n = t.getMonth(),
                        a = new Date(0);
                    return a.setFullYear(i, n + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
                }(o);
                return i.setMonth(n, Math.min(s, l)), i
            }
        },
        852864: (e, t, r) => {
            r.d(t, {
                H: () => i
            }), r(898992), r(672577);

            function i({
                spaceStore: e,
                userId: t,
                environment: n
            }) {
                let a = new(r(736309)).d(n, {
                    table: r(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return a ? r(994797).SpaceViewStore.createChildStore(e, {
                    id: a.id,
                    table: r(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        894074: (e, t, r) => {
            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, t) {
                if ((0, r(570551).A)(2, arguments), "object" !== i(t) || null === t) throw RangeError("values parameter must be an object");
                var n = (0, r(10123).A)(e);
                return isNaN(n.getTime()) ? new Date(NaN) : (null != t.year && n.setFullYear(t.year), null != t.month && (n = (0, r(851775).A)(n, t.month)), null != t.date && n.setDate((0, r(194188).A)(t.date)), null != t.hours && n.setHours((0, r(194188).A)(t.hours)), null != t.minutes && n.setMinutes((0, r(194188).A)(t.minutes)), null != t.seconds && n.setSeconds((0, r(194188).A)(t.seconds)), null != t.milliseconds && n.setMilliseconds((0, r(194188).A)(t.milliseconds)), n)
            }
            r.d(t, {
                A: () => n
            })
        },
        925021: (e, t, r) => {
            r.d(t, {
                K: () => n,
                v: () => i
            });
            let i = (0, r(109939).YK)({
                    addAPageInside: {
                        defaultMessage: "Add a page inside",
                        id: "sidebarItem.addAPageInside.tooltip"
                    }
                }),
                n = (0, r(109939).YK)({
                    addPageTooltip: {
                        defaultMessage: "Add a page",
                        id: "sidebar.addButton.addPageTooltip"
                    }
                })
        },
        971375: (e, t, r) => {
            r.d(t, {
                o: () => a,
                x: () => n
            }), r(296540);
            var i = r(474848);

            function n(e) {
                let {
                    variant: t,
                    imgSource: n,
                    tintColor: s,
                    faceStyle: o,
                    shadowVariant: l = "strong",
                    style: d,
                    ...c
                } = e, u = (0, r(960253).I)(() => {
                    let e = (0, r(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: r(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === l && {
                                boxShadow: e >= 90 ? r(632079).Tj.shadowMDThickerOutline : r(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === l && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? r(632079).Tj.shadowSMThickerOutline : r(632079).Tj.shadow.outline.md
                            },
                            overflow: "hidden",
                            ...d
                        }
                    }
                }, [t, l, d]);
                return (0, i.jsx)("div", { ...c,
                    children: (0, i.jsx)("div", {
                        style: u.faceImgWrap,
                        children: (0, i.jsx)(a, {
                            imgSource: n,
                            variant: t,
                            tintColor: s,
                            style: o
                        })
                    })
                })
            }

            function a(e) {
                let {
                    imgSource: t,
                    variant: n,
                    tintColor: a,
                    style: s,
                    alt: o,
                    ...l
                } = e, d = (0, r(445283).N)(n), c = t ? ? r(200424), u = o ? ? "Notion AI face", g = (0, r(960253).I)(() => ({
                    faceImg: {
                        height: d,
                        width: d,
                        transform: "scaleX(var(--direction, 1))",
                        ...s
                    },
                    tintedFace: {
                        height: d,
                        width: d,
                        transform: "scaleX(var(--direction, 1))",
                        backgroundColor: a,
                        WebkitMaskImage: `url(${c})`,
                        maskImage: `url(${c})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        ...s
                    }
                }), [d, s, a, c]);
                return void 0 !== a ? (0, i.jsx)("div", {
                    style: g.tintedFace,
                    role: "img",
                    "aria-label": u
                }) : (0, i.jsx)("img", { ...l,
                    style: g.faceImg,
                    src: c,
                    alt: u
                })
            }
        },
        990959: (e, t, r) => {
            async function i(e) {
                let {
                    environment: t,
                    membersOnly: i,
                    minFuzzyScore: n = r(821048).XR - 1,
                    placeSelfFirst: a,
                    limit: s
                } = e, o = r(728372).AppStoreSidebarSpaceStore.state, l = r(728372).AppStoreMainEditorCurrentBlockStore.state, d = r(728372).AppStoreCurrentUserStore.state;
                if (!o) return [];
                let c = e.query.startsWith("@") ? e.query.slice(1) : e.query,
                    u = r(148344).k.getSortedUserIds().slice(0, 100),
                    g = l && !i ? (0, r(862085).i0)(l).flatMap(({
                        permissionItem: e
                    }) => (0, r(642157).B2)(e) ? [e.user_id] : []) : [],
                    p = await (0, r(250521).x)({
                        environment: e.environment,
                        parentStore: o,
                        query: c,
                        userIds: r(381453).sb([...r(381453).oE([null == d ? void 0 : d.userId]), ...u, ...g]),
                        minFuzzyScore: n,
                        placeSelfFirst: a
                    });
                if (s && p.length >= s) return p.slice(0, s);
                let m = r(218744).default.getConfigKey("email_alias_migration", "mode"),
                    h = await t.api.callApi({
                        eventName: "listUsers",
                        environment: t,
                        data: {
                            cursor: void 0,
                            membershipFilter: i ? "members" : void 0,
                            limit: s ? s - p.length : 100,
                            query: c,
                            spaceId: o.id,
                            includeAliasSearch: (0, r(485477).K)(m)
                        }
                    });
                if ("success" !== h.type || 0 === h.data.users.length) return p;
                let f = h.data.users.sort((e, t) => {
                        var i, n;
                        let a = (null == (i = r(148344).k.state) ? void 0 : i[e.id]) ? ? 0;
                        return ((null == (n = r(148344).k.state) ? void 0 : n[t.id]) ? ? 0) - a
                    }),
                    x = await (0, r(975162).lX)(f, f.length, async e => {
                        let t = r(807825).L.createChildStore(o, {
                            table: r(832375).oo9,
                            id: e.id
                        });
                        return await t.load(), t.getValue()
                    }),
                    y = r(381453).hS([...p, ...r(381453).oE(x)], e => e.id),
                    b = new Set(o.getEmailDomains());
                return (0, r(109266).Q)({
                    query: c,
                    users: y,
                    minFuzzyScore: n,
                    currentUserValue: null == d ? void 0 : d.getValue(),
                    spaceDomains: b
                })
            }
            async function n(e) {
                let t = (0, r(328765).S)(),
                    n = r(908032).i({
                        userId: e.environment.currentUser.id,
                        spaceId: null == t ? void 0 : t.id,
                        debugFrom: "searchSpaceUsers"
                    });
                if (t && !r(36151).c.state.wasGetVisibleUsersCalled[t.id]) {
                    var a;
                    r(773352).log({
                        level: "error",
                        from: "searchSpaceUsers",
                        type: "getVisibleUsersNotCalled",
                        spaceId: t.id,
                        data: {
                            userId: null == (a = r(728372).AppStoreCurrentUserStore.state) ? void 0 : a.id,
                            routeName: e.environment.RouterStore.state.route.name
                        }
                    })
                }
                return n ? i(e) : (0, r(108653).h)(e)
            }
            r.d(t, {
                L: () => n
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(430670)
        }
    }
]);