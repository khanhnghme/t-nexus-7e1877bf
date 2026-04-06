"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [14344, 16922, 21753, 27038, 48578, 56809, 60858, 80187, 88980], {
        1249: (e, t, a) => {
            a.d(t, {
                g: () => i
            });

            function i(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        6260: (e, t, a) => {
            a.d(t, {
                Z: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
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
                r = (0, a(104509).wt)("browserMagnifyingGlass", n, "default")
        },
        13717: (e, t, a) => {
            function i(e) {
                let {
                    spaceStore: t,
                    groupId: i
                } = e;
                return a(398652).C.createChildStore(t, (0, a(659341).S4)({
                    spacePermissionGroupId: i,
                    spaceId: t.id
                }))
            }

            function n(e) {
                let {
                    spaceStore: t,
                    groupId: i,
                    userId: n
                } = e;
                return a(291886).m.createChildStore(t, (0, a(867863).BZ)({
                    spacePermissionGroupId: i,
                    spaceId: t.id,
                    userId: n
                }))
            }
            a.d(t, {
                A: () => n,
                E: () => i
            })
        },
        31256: (e, t, a) => {
            a.d(t, {
                J: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                marginTop: 12,
                marginBottom: 4
            };

            function r() {
                let e = (0, a(533992).v3)();
                return (0, i.jsx)(a(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, i.jsx)(a(109939).sA, {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    }),
                    byline: (0, i.jsx)(a(109939).sA, {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    }),
                    item: (0, i.jsx)(a(548436).A, {
                        size: "lg",
                        style: n,
                        onClick: () => {
                            (0, a(104310).u)({
                                event: {
                                    eventName: "change_language_button_clicked",
                                    eventProperties: {}
                                }
                            }), e.mobileNative && e.mobileNative.openAppLanguageSettings()
                        },
                        iconLeading: a(695142).arrowDiagonalUpRightFillIcon,
                        children: (0, i.jsx)(a(109939).sA, {
                            id: "languageSettings.languageSection.androidChangeLanguageButton",
                            defaultMessage: "Change Language"
                        })
                    })
                })
            }
        },
        31319: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    activeDotStyle: {
                        height: 10,
                        width: 10,
                        backgroundColor: a(632079).Tj.palette.green[400],
                        border: "2px solid white",
                        borderRadius: "50%",
                        position: "absolute",
                        insetInlineStart: 11,
                        top: 11
                    }
                },
                r = function(e) {
                    let {
                        botValue: t,
                        botStore: r,
                        showActiveDot: o,
                        style: l,
                        size: s
                    } = e, d = (0, a(109939).tz)(), c = (0, a(682985).K8)(() => {
                        if (r) {
                            let e = r.getIcon();
                            if (e) return {
                                pointer: {
                                    table: a(832375).GPl,
                                    id: r.id,
                                    spaceId: r.getSpaceId()
                                },
                                icon: e
                            }
                        } else if (null != t && t.icon) return {
                            pointer: {
                                table: a(832375).GPl,
                                id: t.id,
                                spaceId: t.space_id
                            },
                            icon: t.icon
                        }
                    }, [r, t]), u = (0, a(682985).K8)(() => (null == r ? void 0 : r.getDisplayName(d)) ? ? (0, a(697006).Hg)(t), [r, t, d]);
                    return (0, i.jsxs)("div", {
                        style: l,
                        children: [(0, i.jsx)(a(569553).B6, {
                            icon: c,
                            title: u,
                            size: s || 18,
                            disabled: !0,
                            isEmptyPage: !1,
                            useInvertedColors: !0
                        }), o ? (0, i.jsx)("div", {
                            style: n.activeDotStyle
                        }) : void 0]
                    })
                }
        },
        35343: (e, t, a) => {
            a.d(t, {
                B: () => i
            });

            function i(e) {
                let {
                    query: t,
                    intl: i,
                    limit: n
                } = e, r = a(801062).h.getAllGroups();
                return 0 === r.length ? [] : (t ? (0, a(821048).Ay)(t, r, e => (0, a(405461).Pf)({
                    intl: i,
                    groupName: e.name
                }), {
                    normalizeFuzzyScore: !0
                }) : r).slice(0, n)
            }
        },
        36151: (e, t, a) => {
            a.d(t, {
                c: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        wasGetVisibleUsersCalled: {}
                    }
                }
            }
            let r = new n;
            a(202146).exposeDebugValue("GetVisibleUsersStore", r)
        },
        53634: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                sparklesSmallIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.17 1.53 13.65 12.93",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.577 1.536a.7.7 0 0 0-.7.7c0 .362-.236.87-.684 1.317-.448.448-.955.683-1.316.683a.7.7 0 1 0 0 1.4c.36 0 .868.236 1.316.684s.684.955.684 1.316a.7.7 0 1 0 1.4 0c0-.36.235-.868.683-1.316s.955-.684 1.317-.684a.7.7 0 1 0 0-1.4c-.362 0-.87-.235-1.317-.683-.448-.448-.683-.955-.683-1.317a.7.7 0 0 0-.7-.7m-.394 3.007q.208-.208.394-.451a4.4 4.4 0 0 0 .844.844 4.4 4.4 0 0 0-.844.845 4.4 4.4 0 0 0-.845-.845 4 4 0 0 0 .451-.393m5.887.413a.7.7 0 0 0-.7.7c0 .831-.392 1.674-1.036 2.318S6.847 9.01 6.016 9.01a.7.7 0 1 0 0 1.4c.831 0 1.674.392 2.318 1.036s1.036 1.487 1.036 2.318a.7.7 0 1 0 1.4 0c0-.831.392-1.674 1.036-2.318s1.487-1.036 2.318-1.036a.7.7 0 1 0 0-1.4c-.831 0-1.674-.392-2.318-1.036S10.77 6.487 10.77 5.656a.7.7 0 0 0-.7-.7m-.746 4.008a5.2 5.2 0 0 0 .746-.941 5.2 5.2 0 0 0 1.687 1.687 5.2 5.2 0 0 0-1.687 1.687A5.2 5.2 0 0 0 8.383 9.71a5.2 5.2 0 0 0 .94-.746"
                    })
                },
                n = (0, a(104509).wt)("sparklesSmall", i, "small")
        },
        59651: (e, t, a) => {
            a.d(t, {
                l: () => n
            });
            let i = {
                [a(49361).e1]: "collection_connected_property_figma",
                [a(49361).Hd]: "collection_connected_property_google_drive",
                [a(49361).ob]: "collection_connected_property_github",
                [a(49361).k0]: "collection_connected_property_zendesk",
                [a(49361).bh]: "collection_synced_database_github",
                [a(49361).MN]: "collection_synced_database_asana",
                [a(49361).Fo]: "collection_synced_database_gitlab",
                [a(49361).me]: "collection_synced_database_jira",
                [a(49361).F6]: "collection_synced_database_jira_workspace",
                [a(49361).Fv]: "collection_synced_database_jira_datacenter",
                [a(49361).mn]: "collection_synced_database_salesforce_workspace"
            };

            function n(e) {
                if (e) return i[e]
            }
        },
        59724: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    style0: { ...a(699422).RC
                    }
                },
                r = function(e) {
                    let {
                        botStore: t,
                        avatarSize: r,
                        shouldShowBadge: o,
                        style: l,
                        inline: s
                    } = e, d = (0, a(109939).tz)(), c = (0, a(533992).Y0)(), u = (0, a(682985).K8)(() => null == t ? void 0 : t.getDisplayName(d), [t, d]), {
                        outerStyle: p,
                        avatarWrapStyle: g,
                        badgeStyle: m
                    } = (0, a(960253).I)(() => ({
                        outerStyle: {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...l
                        },
                        avatarWrapStyle: s ? {
                            width: "none",
                            minHeight: "none",
                            marginInlineEnd: 6
                        } : {
                            marginInlineEnd: 6
                        },
                        badgeStyle: {
                            padding: "2px 6px",
                            borderRadius: 4,
                            color: a(632079).Tj.text.secondary,
                            background: a(632079).Tj.background.tertiaryTranslucent,
                            fontSize: a(986939).A.isMobile ? 11 : 9,
                            lineHeight: c.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginInlineStart: 8,
                            marginTop: 1
                        }
                    }), [l, s, c]);
                    return (0, i.jsxs)("div", {
                        style: p,
                        children: [(0, i.jsx)("div", {
                            style: g,
                            children: (0, i.jsx)(a(31319).A, {
                                botStore: t,
                                size: r
                            })
                        }), (0, i.jsx)("div", {
                            style: n.style0,
                            children: u
                        }), o ? (0, i.jsx)("div", {
                            style: m,
                            children: "Bot"
                        }) : void 0]
                    })
                }
        },
        62412: (e, t, a) => {
            a.d(t, {
                O: () => o,
                u: () => r
            });
            var i = a(296540),
                n = a(474848);

            function r(e) {
                let {
                    buttonStyles: t
                } = e, r = (0, a(109939).tz)(), l = r.formatMessage(o.settings), s = (0, i.useCallback)(() => {
                    a(599754).Ow({
                        openedFrom: "sidebar",
                        currentPage: "user_settings"
                    })
                }, []);
                return (0, n.jsx)(a(51831).m, {
                    content: () => r.formatMessage(o.tooltip),
                    originGap: 6,
                    textWrap: !0,
                    placement: "right",
                    children: e => (0, n.jsx)(a(64960).Ay, { ...e,
                        onClick: s,
                        style: a(132261).DX.baseSidebarItem,
                        hoveredStyle: null == t ? void 0 : t.hoveredStyle,
                        children: (0, n.jsx)(a(380559).u, {
                            left: (0, n.jsx)(a(16275).I, {
                                icon: a(829968).gearIcon,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            children: l
                        })
                    })
                })
            }
            let o = (0, a(109939).YK)({
                settingsAndMembers: {
                    id: "sidebarSettingsButton.settingsAndMembers",
                    defaultMessage: "Settings & members"
                },
                settings: {
                    id: "sidebarSettingsButton.settings",
                    defaultMessage: "Settings"
                },
                tooltip: {
                    id: "sidebarSettingsButton.tooltip",
                    defaultMessage: "Manage your account and settings"
                }
            })
        },
        67207: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                personSlashIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.31 2.31 14.13 16.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.53 2.463a.626.626 0 0 1 .882.067l.032.038q.008.013.018.025l12.687 14.875q.089.101.203.156a.625.625 0 0 1-1.014.72l-.928-1.08a2.4 2.4 0 0 1-1.26.362h-8.3c-.68 0-1.328-.288-1.74-.768-.43-.501-.591-1.217-.23-1.923C4.899 12.945 7.3 11.63 10 11.63q.3 0 .593.021l-1.001-1.166a3.28 3.28 0 0 1-2.267-1.22c-.536-.669-.825-1.532-.886-2.453L3.463 3.345a.626.626 0 0 1 .067-.882M10 12.88c-2.335 0-4.245 1.138-5.007 2.625-.104.203-.071.379.066.54.157.182.449.33.79.33h8.301c.155 0 .3-.032.426-.082l-2.707-3.154a6.8 6.8 0 0 0-1.87-.26M10 2.375c1.137 0 2.055.469 2.675 1.241.607.757.899 1.766.9 2.824 0 1.058-.292 2.067-.9 2.825q-.213.263-.472.477l-.811-.951q.168-.138.307-.309c.392-.487.625-1.2.625-2.042S12.09 4.887 11.7 4.4c-.38-.473-.936-.775-1.7-.775-.762 0-1.32.302-1.7.774a2.4 2.4 0 0 0-.278.44l-.857-1.004q.076-.113.161-.219c.62-.772 1.538-1.241 2.675-1.241"
                    })
                },
                n = (0, a(104509).wt)("personSlash", i, "default")
        },
        72762: (e, t, a) => {
            a.d(t, {
                o: () => i
            });

            function i(e) {
                let {
                    collectionSettingsStore: t
                } = e;
                t.setState({ ...t.state,
                    open: !1,
                    hideSettingsPopup: void 0,
                    hideSettingsHeader: void 0,
                    stack: [],
                    ref: void 0,
                    hideDuplicatePropertyOption: void 0,
                    closeOnEscape: void 0
                }), a(639675).Ay.setState({ ...a(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        80384: (e, t, a) => {
            a.d(t, {
                MG: () => r,
                T1: () => n,
                a1: () => c,
                dt: () => o,
                kg: () => l,
                lC: () => d,
                n_: () => s
            });
            var i = a(296540);
            let n = new(a(815048)).O2("PerformanceToolbar", () => Promise.all([a.e(39225), a.e(45624)]).then(a.bind(a, 476932))),
                r = (0, a(815048)._h)(n, e => e.PerformanceToolbar),
                o = (0, a(815048)._h)(n, e => e.PerformanceToolbarSettings);

            function l() {
                let e = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => (0, a(186452).D)(e, e.RouterStore.state), [e])
            }

            function s() {
                let e = (0, a(533992).v3)(),
                    t = u("performanceToolbarStore"),
                    i = u("isPerformanceToolbarVisible");
                return (0, a(682985).K8)(() => !!t && !!i && i(e, e.RouterStore.state, t.state), [i, e, t])
            }

            function d() {
                let e = u("performanceToolbarStore");
                return (0, a(682985).K8)(() => !!e && e.state.isPerformanceToolbarMounted, [e])
            }

            function c() {
                let e = (0, a(533992).v3)(),
                    t = u("createPerformanceToolbarMouseListeners"),
                    n = u("performanceToolbarStore"),
                    {
                        sidebarExpanded: r,
                        sidebarWidth: o,
                        secondarySidebarExpanded: l,
                        secondarySidebarWidth: s,
                        updateSidebarExpanded: d,
                        updateSidebarWidth: c
                    } = (0, a(682985).K8)(() => ({
                        sidebarExpanded: a(984858).sidebarExpandedStore.state,
                        sidebarWidth: a(984858).sidebarWidthStore.state,
                        secondarySidebarExpanded: a(550830).default.isOpen(),
                        secondarySidebarWidth: a(515492).Ay.getWidth(),
                        updateSidebarExpanded: a(449473).B8.state.expanded,
                        updateSidebarWidth: a(449473).B8.state.width
                    }), []);
                return (0, i.useEffect)(() => {
                    if (n && t) return t({
                        environment: e,
                        setMouseNearPerformanceToolbar: e => n.update(t => ({ ...t,
                            isMouseNearPerformanceToolbar: e
                        })),
                        sidebarExpanded: r,
                        sidebarWidth: o,
                        secondarySidebarExpanded: l,
                        secondarySidebarWidth: s,
                        updateSidebarExpanded: d,
                        updateSidebarWidth: c
                    })
                }, [t, e, n, r, o, l, s, d, c])
            }

            function u(e) {
                let t = l(),
                    [{
                        value: i
                    }] = (0, a(97668).Yb)(() => t ? n.load().then(t => t[e]) : Promise.resolve(void 0), [e, t]);
                return i
            }
        },
        96351: (e, t, a) => {
            a.d(t, {
                B: () => i
            });

            function i({
                openInNew: e,
                url: t,
                makeTabActive: n,
                position: r,
                isNewPage: o,
                environment: l
            }) {
                "tab" === e && n ? (0, a(266527).x)(l, {
                    url: t,
                    position: r,
                    makeTabActive: n,
                    isNewPage: o
                }) : "tab" !== e || n ? "window" === e && (0, a(714770).E)(t) : (0, a(380839).x)(l, {
                    url: t,
                    position: r
                })
            }
        },
        97010: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                templatesIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.08 2.62 15.84 14.75",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M7.682 5.716V4.182c0-.858.7-1.557 1.557-1.557h5.823c.858 0 1.557.7 1.557 1.557v5.59a1.56 1.56 0 0 1-1.093 1.486l2.185 3.786c.589 1.038-.154 2.331-1.354 2.331H9.38c-1.138 0-1.895-1.18-1.421-2.201q-.513.113-1.057.114a4.81 4.81 0 0 1-4.818-4.818 4.812 4.812 0 0 1 5.6-4.754M9.24 3.875a.31.31 0 0 0-.307.307v5.6a.3.3 0 0 0 .298.296h1.66l.622-1.075a.6.6 0 0 1 .073-.103 1.56 1.56 0 0 1 2.638.1l.002.003.62 1.075h.217a.31.31 0 0 0 .307-.306v-5.59a.31.31 0 0 0-.307-.307zm-.01 7.453a1.55 1.55 0 0 1-1.547-1.547V6.99a3.562 3.562 0 0 0-4.35 3.481 3.56 3.56 0 0 0 3.569 3.568 3.54 3.54 0 0 0 2.09-.669l1.178-2.04zm3.914-1.7a.31.31 0 0 0-.54.002 1 1 0 0 1-.057.08L9.11 15.665l-.001.002a.306.306 0 0 0 .27.458h6.978a.31.31 0 0 0 .268-.463z"
                    })
                },
                n = (0, a(104509).wt)("templates", i, "default")
        },
        100410: (e, t, a) => {
            a.r(t), a.d(t, {
                iPhoneIcon: () => r,
                iconDefinition: () => n
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.12 2.37 9.75 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.375 15c0-.345.28-.625.625-.625h4a.625.625 0 1 1 0 1.25H8A.625.625 0 0 1 7.375 15M9 4.375a.625.625 0 1 0 0 1.25h2a.625.625 0 1 0 0-1.25z"
                        }), (0, i.jsx)("path", {
                            d: "M5.125 4.5c0-1.174.951-2.125 2.125-2.125h5.5c1.174 0 2.125.951 2.125 2.125v11a2.125 2.125 0 0 1-2.125 2.125h-5.5A2.125 2.125 0 0 1 5.125 15.5zm2.125-.875a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875h5.5a.875.875 0 0 0 .875-.875v-11a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("iPhone", n, "default")
        },
        108653: (e, t, a) => {
            a.d(t, {
                h: () => i
            });
            async function i(e) {
                let t = a(728372).AppStoreSidebarSpaceStore.state;
                if (!t) return [];
                let i = e.query.startsWith("@") ? e.query.slice(1) : e.query,
                    n = await (0, a(334682).m)(e);
                return (await (0, a(250521).x)({
                    environment: e.environment,
                    parentStore: t,
                    query: i,
                    userIds: n,
                    minFuzzyScore: e.minFuzzyScore,
                    placeSelfFirst: e.placeSelfFirst
                })).slice(0, e.limit)
            }
        },
        109266: (e, t, a) => {
            a.d(t, {
                Q: () => n
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            let i = new Set(["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com"]);

            function n({
                query: e,
                users: t,
                minFuzzyScore: r,
                currentUserValue: o,
                spaceDomains: l
            }) {
                return e ? (0, a(821048).Ay)(e, t, a(413818).T2, {
                    minScore: r,
                    getSortScore: e => {
                        let {
                            original: t,
                            score: n
                        } = e, r = t.email && (0, a(801109).zN)(t.email), s = o && (0, a(801109).zN)(o.email), d = r && l.has(r), c = s === r, u = s && i.has(s);
                        return n * (d || c && !u ? -2 : -1)
                    }
                }) : t
            }
        },
        109925: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                phoneIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.58 2.77 14.78 14.57",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.84 3.093a1.34 1.34 0 0 1 1.881.158l2.52 2.96a1.524 1.524 0 0 1-.083 2.066l-1.22 1.22 2.715 2.717 1.221-1.221a1.525 1.525 0 0 1 2.066-.084l2.962 2.517a1.29 1.29 0 0 1 .16 1.805l-.559.678a3.94 3.94 0 0 1-3.447 1.414l-.16-.016A11.564 11.564 0 0 1 2.614 7.299 3.88 3.88 0 0 1 3.97 3.822zm.93.969a.09.09 0 0 0-.128-.011l-.869.729a2.63 2.63 0 0 0-.919 2.358 10.314 10.314 0 0 0 9.17 8.925l.16.017a2.7 2.7 0 0 0 2.355-.966l.558-.678a.04.04 0 0 0-.005-.057l-2.961-2.517a.275.275 0 0 0-.373.015l-1.663 1.663a.625.625 0 0 1-.884 0l-3.6-3.6a.625.625 0 0 1 0-.884l1.663-1.663a.275.275 0 0 0 .015-.373z"
                    })
                },
                n = (0, a(104509).wt)("phone", i, "default")
        },
        128743: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowStraightLeftIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.97 15.26 12.06",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.411 9.79a.6.6 0 0 1 .147-.232l5.4-5.4a.625.625 0 1 1 .884.884L4.509 9.375H17a.625.625 0 1 1 0 1.25H4.509l4.333 4.333a.625.625 0 1 1-.884.884l-5.4-5.4a.62.62 0 0 1-.147-.651"
                    })
                },
                n = (0, a(104509).wt)("arrowStraightLeft", i, "default")
        },
        132261: (e, t, a) => {
            a.d(t, {
                DX: () => u,
                FD: () => r,
                Zr: () => o,
                aL: () => i,
                bG: () => l,
                qe: () => c,
                ry: () => n,
                sI: () => d,
                sx: () => s
            });
            let i = 800,
                n = 22,
                r = 24,
                o = 30,
                l = 8,
                s = 4,
                d = 6,
                c = 15,
                u = {
                    baseSidebarItem: { ...a(153262).hG,
                        fontWeight: a(699422).Wy.medium
                    },
                    currentSelectedSidebarItem: {
                        background: a(632079).Tj.sidebarItemSelectedBackground,
                        color: a(632079).Tj.text.primary,
                        ...a(986939).A.isMobile && {
                            boxShadow: `
                            0 1px 0 ${a(632079).Tj.buttonHoveredBackground}
                        `
                        }
                    }
                }
        },
        138105: (e, t, a) => {
            a.d(t, {
                W: () => o,
                U: () => s
            });
            var i = a(296540);
            let n = {
                control: (0, a(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.control.tooltip",
                        defaultMessage: "Find templates by Notion’s community"
                    }
                }),
                v1: (0, a(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.v1.tooltip",
                        defaultMessage: "Discover tools and templates for your workspace"
                    }
                }),
                v2: (0, a(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.v2.tooltip",
                        defaultMessage: "Discover what the community has built"
                    }
                })
            };
            var r = a(474848);

            function o(e) {
                let {
                    styles: t
                } = e, o = (0, a(533992).v3)(), s = (0, a(109939).tz)(), d = (0, i.useRef)(!1), c = (0, a(682985).K8)(() => {
                    let {
                        RouterStore: e
                    } = o;
                    return e.state.route.name
                }, [o]), u = (0, a(682985).K8)(() => {
                    let e = a(218744).default.getEligibleGroup({
                        experimentId: "adoption_marketplace_sidebar_surface_exploratory_copy",
                        defaultGroup: "control"
                    });
                    return "v1" === e || "v2" === e ? e : "control"
                }, []), p = (0, a(682985).K8)(() => a(218744).default.getEligibleGroup({
                    experimentId: "adoption_marketplace_sidebar_tooltip_discovery_copy",
                    defaultGroup: "control",
                    disableExposureLogging: !0
                }), []), g = (0, a(892166).U)("marketplace_sidebar_option_click"), m = (0, i.useCallback)(() => {
                    var e;
                    let t = "control" === (e = p) || "v1" === e || "v2" === e ? e : "control";
                    return s.formatMessage(n[t].tooltip)
                }, [s, p]), f = (0, i.useCallback)(() => {
                    d.current || (d.current = !0, a(218744).default.manuallyLogExperimentExposure("adoption_marketplace_sidebar_tooltip_discovery_copy"))
                }, []);
                return (0, r.jsx)(a(51831).m, {
                    content: m,
                    originGap: 6,
                    placement: "right",
                    children: (e, i) => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l, {
                            isTooltipVisible: i,
                            onTooltipVisible: f
                        }), (0, r.jsx)(a(590422).Q, {
                            style: t.sidebarItemButtonStyle,
                            hoveredStyle: t.buttonHoveredStyle,
                            onClick: g,
                            ...e,
                            children: (0, r.jsx)(a(380559).u, {
                                left: (0, r.jsx)(a(16275).I, {
                                    icon: a(97010).templatesIcon,
                                    colorVariant: "secondary",
                                    size: "lg"
                                }),
                                isBottomItem: !0,
                                style: "gallery" === c ? t.sidebarItemActiveStyle : {},
                                children: s.formatMessage(a(648880).L[u])
                            })
                        })]
                    })
                })
            }

            function l(e) {
                let {
                    isTooltipVisible: t,
                    onTooltipVisible: a
                } = e;
                return (0, i.useEffect)(() => {
                    t && a()
                }, [t, a]), null
            }
            let s = (0, a(109939).YK)({
                templatesMwnTooltip: {
                    defaultMessage: "Find templates by Notion’s community",
                    id: "sidebar.openTemplatePickerButton.tooltip.mwn"
                },
                title: {
                    defaultMessage: "Templates",
                    id: "sidebar.openTemplatePickerButton"
                },
                marketplaceTitle: {
                    defaultMessage: "Marketplace",
                    id: "sidebar.openMarketplaceButton"
                }
            })
        },
        148344: (e, t, a) => {
            a.d(t, {
                k: () => r
            }), a(581454);
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {}
                waitUntilLoaded() {
                    return this.waitUntil(() => !!this.state)
                }
                getSortedUserIds() {
                    return Object.entries(this.state || {}).sort(([e, t], [a, i]) => i - t).map(([e, t]) => e)
                }
            }
            let r = new n;
            (0, a(202146).exposeDebugValue)("UserSimilarityStore", r)
        },
        151710: (e, t, a) => {
            a.d(t, {
                Jv: () => d,
                Rl: () => c,
                mA: () => s
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                    padding: "1px 4px",
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 1
                },
                o = function() {
                    return (0, n.jsx)(a(746434).E, {
                        color: "purple",
                        style: r,
                        content: (0, n.jsx)(a(109939).sA, {
                            defaultMessage: "AI",
                            id: "database.property.aiAutofillEnabledIndicator"
                        })
                    })
                },
                l = {
                    position: "absolute",
                    bottom: 0,
                    insetInlineStart: 8,
                    width: 12,
                    height: 12,
                    borderRadius: 12,
                    background: "transparent",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1
                },
                s = i.memo(function(e) {
                    let {
                        badge: t,
                        className: i,
                        dragHandleStyle: r,
                        hideName: o,
                        iconSize: s,
                        iconStyle: d,
                        labelSizeVariant: u,
                        propertySchema: p,
                        showDragIcon: g,
                        showIcon: m,
                        style: f,
                        textRef: h
                    } = e, v = (0, a(960253).I)(() => ({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            lineHeight: "120%",
                            minWidth: 0,
                            fontSize: a(986939).A.isMobile ? 16 : 14,
                            gap: "small" === u ? 2 : 6,
                            ...f
                        },
                        iconWrapper: {
                            display: "grid",
                            justifyContent: "center",
                            alignItems: "center",
                            position: e.showIntegrationIconOverlay ? "relative" : void 0,
                            ...d
                        },
                        dragHandle: {
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: +!!g,
                            transition: `opacity ${a(153262).bM}`
                        },
                        itemIcon: {
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: +!g,
                            transition: `opacity ${a(153262).bM}`
                        }
                    }), [d, u, g, f, e.showIntegrationIconOverlay]);
                    return (0, n.jsxs)("div", {
                        className: i,
                        style: v.container,
                        children: [m ? (0, n.jsxs)("div", {
                            style: v.iconWrapper,
                            children: [(0, n.jsx)("div", {
                                style: v.itemIcon,
                                children: (0, n.jsx)(c, {
                                    propertySchema: p,
                                    iconSize: s,
                                    iconStyle: d
                                })
                            }), e.showIntegrationIconOverlay ? (0, n.jsx)("div", {
                                style: l,
                                children: e.showIntegrationIconOverlay
                            }) : void 0, (0, n.jsx)("div", {
                                style: v.dragHandle,
                                children: (0, n.jsx)(a(544954).t, {
                                    wrapperStyle: r
                                })
                            })]
                        }) : void 0, o ? void 0 : (0, n.jsx)("div", {
                            ref: h,
                            style: a(699422).RC,
                            children: p.name
                        }), t]
                    })
                });

            function d(e) {
                let {
                    propertySchema: t
                } = e, i = a(9247).YE(t), {
                    shouldShowLegacyAutofill: r
                } = (0, a(251955).D)({
                    aiInference: i
                });
                return (0, a(682985).K8)(() => (0, a(576348).O0)() && a(9247).$M(t) && a(9247).om(t) && r, [r, t]) ? (0, n.jsx)(o, {}) : null
            }

            function c(e) {
                let {
                    propertySchema: t,
                    iconSize: i,
                    iconStyle: r
                } = e, o = (0, a(960253).e)(), l = a(986939).A.isMobile ? 18 : 16;
                return (0, n.jsx)(a(221535).zB, {
                    type: t.type,
                    icon: t.icon,
                    size: i || l,
                    theme: a(632079).Tj,
                    themeMode: o,
                    style: r
                })
            }
        },
        153262: (e, t, a) => {
            a.d(t, {
                Jg: () => n,
                bM: () => i,
                hG: () => r,
                ic: () => o
            });
            let i = "150ms ease";

            function n() {
                return {
                    borderRadius: 6
                }
            }
            let r = a(986939).A.isMobile ? {} : { ...n(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${i}`
            };

            function o() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        164177: (e, t, a) => {
            a.d(t, {
                j: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let r = new n
        },
        166863: (e, t, a) => {
            a.d(t, {
                P: () => n
            });
            let i = (0, a(109939).YK)({
                    languageTitle: {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    },
                    languageDescription: {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    },
                    numberFormatTitle: {
                        id: "languageRegionSettings.numberFormat.label",
                        defaultMessage: "Number format"
                    },
                    numberFormatDescription: {
                        id: "languageRegionSettings.numberFormat.description",
                        defaultMessage: "Choose how numbers and currencies are formatted. Default uses your language setting."
                    },
                    spellcheckerTitle: {
                        id: "languageRegionSettings.spellchecker.label",
                        defaultMessage: "Spellchecker languages"
                    },
                    spellcheckerDescription: {
                        id: "languageSettings.spellcheckerSwitcher.subtitle",
                        defaultMessage: "Change the languages used by the spellchecker."
                    },
                    textDirectionTitle: {
                        id: "textDirectionControlsSetting.title",
                        defaultMessage: "Always show text direction controls"
                    },
                    textDirectionDescription: {
                        id: "textDirectionControlsSetting.caption",
                        defaultMessage: "Show the option to change text direction (left to right or right to left) in the editor, regardless of what language you’re using"
                    },
                    startWeekOnMondayTitle: {
                        id: "calendarSettings.startWeekOnMonday.label",
                        defaultMessage: "Start week on Monday"
                    },
                    startWeekOnMondayDescription: {
                        id: "calendarSettings.startWeekOnMonday.message",
                        defaultMessage: "This will affect the way your calendars appear in Notion"
                    },
                    dateFormatTitle: {
                        id: "dateMentionFormatSettings.title",
                        defaultMessage: "Date format"
                    },
                    dateFormatDescription: {
                        id: "dateMentionFormatSettings.caption",
                        defaultMessage: "Set the default format for new @date mentions"
                    },
                    autoTimezoneTitle: {
                        id: "dateAndTimeSettings.autoTimeZone.title",
                        defaultMessage: "Set time zone automatically using your location"
                    },
                    autoTimezoneDescription: {
                        id: "dateAndTimeSettings.autoTimeZone.caption",
                        defaultMessage: "Reminders, notifications, and emails will be delivered to you based on your time zone"
                    },
                    timezoneTitle: {
                        id: "dateAndTimeSettings.timeZone.title",
                        defaultMessage: "Time zone"
                    },
                    timezoneDescription: {
                        id: "dateAndTimeSettings.timeZone.caption",
                        defaultMessage: "Choose your time zone"
                    }
                }),
                n = {
                    language: {
                        id: "languageAndRegionSettingsLanguage",
                        title: i.languageTitle,
                        description: i.languageDescription
                    },
                    numberFormat: {
                        id: "languageAndRegionSettingsNumberFormat",
                        title: i.numberFormatTitle,
                        description: i.numberFormatDescription
                    },
                    spellchecker: {
                        id: "languageAndRegionSettingsSpellchecker",
                        title: i.spellcheckerTitle,
                        description: i.spellcheckerDescription
                    },
                    textDirection: {
                        id: "languageAndRegionSettingsTextDirection",
                        title: i.textDirectionTitle,
                        description: i.textDirectionDescription
                    },
                    startWeekOnMonday: {
                        id: "languageAndRegionSettingsStartWeekOnMonday",
                        title: i.startWeekOnMondayTitle,
                        description: i.startWeekOnMondayDescription
                    },
                    dateFormat: {
                        id: "languageAndRegionSettingsDateFormat",
                        title: i.dateFormatTitle,
                        description: i.dateFormatDescription
                    },
                    autoTimezone: {
                        id: "languageAndRegionSettingsAutoTimezone",
                        title: i.autoTimezoneTitle,
                        description: i.autoTimezoneDescription
                    },
                    timezone: {
                        id: "languageAndRegionSettingsTimezone",
                        title: i.timezoneTitle,
                        description: i.timezoneDescription
                    }
                }
        },
        186452: (e, t, a) => {
            a.d(t, {
                D: () => i
            });

            function i(e, t) {
                return t.route.name, !1
            }
        },
        187649: (e, t, a) => {
            let i, n;

            function r(e) {
                i = e
            }
            async function o() {
                return n || (i ? n = await i() : void 0)
            }
            a.d(t, {
                Q: () => r,
                z: () => o
            })
        },
        196441: (e, t, a) => {
            a.d(t, {
                n$: () => n,
                rx: () => i,
                yA: () => r
            });
            let i = 1;

            function n(e) {
                switch (a(381453).qE(a(381453).LI(e, 1), .5, 4.9)) {
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

            function r(e) {
                let t = a(381453).qE(a(381453).LI(e, 1), .5, 4.9);
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
        198347: (e, t, a) => {
            a.d(t, {
                v: () => i
            });

            function i(e, t) {
                a(606047).A.setState({ ...a(606047).A.state,
                    open: !0,
                    from: e
                }), a(606047).A.state.onClose = null == t ? void 0 : t.onClose
            }
        },
        213458: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowUpRightSquareIcon: () => r,
                iconDefinition: () => n
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.875 7c0-.345.28-.625.625-.625H13c.345 0 .625.28.625.625v4.5a.625.625 0 1 1-1.25 0V8.509l-5.12 5.12a.625.625 0 1 1-.884-.883l5.12-5.121H8.5A.625.625 0 0 1 7.875 7"
                        }), (0, i.jsx)("path", {
                            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("arrowUpRightSquare", n, "default")
        },
        225476: (e, t, a) => {
            function i(e) {
                if (null != e && e.blockId) return e.blockId
            }

            function n(e, t) {
                let a = e.currentUser.id;
                return t.userId === a || t.present
            }

            function r(e) {
                var t;
                return (null == (t = e.state.rootStore) ? void 0 : t.canEdit()) ? ? !1
            }

            function o(e) {
                let {
                    pageVisitStore: t,
                    presenceStore: i
                } = e, {
                    remotePresenceData: n
                } = i.state, r = [];
                n && (0, a(763230).uk)(n, e => {
                    null != e && e.userId && r.push(e)
                });
                let {
                    pageId: o,
                    lastViewTime: l,
                    lastExitTime: s,
                    totalCount: d,
                    hasMore: c,
                    ...u
                } = t.state;
                return (0, a(763230).uk)(u, e => {
                    e.isDefined() && r.push({
                        userId: e.getUserId(),
                        activityTimestampNearestMinuteMs: (0, a(627179).WY)(e.getVisitedAt()),
                        present: !1
                    })
                }), r = (0, a(381453).hS)(r, e => e.userId), (0, a(381453).Ul)(r, ({
                    activityTimestampNearestMinuteMs: e
                }) => e ? -e : 0)
            }

            function l(e) {
                let {
                    userId: t,
                    theme: i
                } = e;
                return (0, a(514214).MF)(t) ? a(632079).Tj.icon.secondary : (0, a(632079).Nq)(t, i)
            }
            a.d(t, {
                $L: () => l,
                EV: () => i,
                PZ: () => o,
                dp: () => n,
                xm: () => r
            }), a(944114)
        },
        226512: (e, t, a) => {
            a.d(t, {
                R: () => r
            });
            var i = a(296540),
                n = a(474848);

            function r(e) {
                var t, r;
                let l, s = (0, a(109939).tz)(),
                    {
                        onClick: d,
                        onDismiss: c,
                        style: u,
                        hoveredStyle: p,
                        showBackground: g = !0
                    } = e,
                    m = (t = u, r = g, l = (0, a(781889).o)(), (0, a(960253).I)(() => ({
                        button: {
                            alignItems: "center",
                            background: r ? a(632079).Tj.buttonHoveredBackground : "none",
                            borderRadius: "100%",
                            display: "flex",
                            height: a(104509).Ev.lg,
                            width: a(104509).Ev.lg,
                            justifyContent: "center",
                            position: "absolute",
                            insetInlineEnd: 10 + l,
                            top: 10,
                            zIndex: 10,
                            ...t
                        },
                        buttonHovered: {
                            background: r ? a(632079).Tj.buttonPressedBackground : a(632079).Tj.buttonHoveredBackground
                        }
                    }), [r, t, l])),
                    f = (0, i.useContext)(a(19187).e),
                    h = function(e) {
                        let {
                            onClick: t,
                            onDismiss: a
                        } = e, n = (0, i.useCallback)(e => {
                            null == t || t(e), null == a || a()
                        }, [t, a]);
                        return t || a ? n : void 0
                    }({
                        onClick: d,
                        onDismiss: c ? ? f
                    });
                return h ? (0, n.jsx)(a(374533).A, {
                    ariaLabel: s.formatMessage(o.dismissModalAriaLabel),
                    icon: a(766970).xMarkFillIcon,
                    onClick: h,
                    style: m.button,
                    hoveredStyle: { ...m.buttonHovered,
                        ...p
                    }
                }) : null
            }
            let o = (0, a(109939).YK)({
                dismissModalAriaLabel: {
                    id: "dismiss.dismissButton.label",
                    defaultMessage: "Dismiss"
                }
            })
        },
        250521: (e, t, a) => {
            a.d(t, {
                x: () => i
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            async function i({
                environment: e,
                parentStore: t,
                query: n,
                userIds: r,
                minFuzzyScore: o,
                placeSelfFirst: l
            }) {
                var s;
                let d, c = a(680007).default.mark("user_search_latency"),
                    u = a(218744).default.checkGate({
                        gateName: "search_batch_load_users"
                    }),
                    p = a(975162).lX(r, u ? 300 : Math.max(r.length, 1), async e => {
                        let i = a(807825).L.createChildStore(t, {
                            table: a(832375).oo9,
                            id: e
                        });
                        return await i.load(), i.getValue()
                    });
                (await (0, a(975162).nQ)(1e4, [p])).timeout && (a(773352).log({
                    level: "error",
                    from: "searchActions.searchUsers",
                    type: "UserStoreLoadTimeoutV1",
                    error: {
                        message: "The UserStore.load()'s took longer than 10 seconds"
                    },
                    data: {
                        searchedUserIdCount: r.length,
                        queryLength: n.length,
                        parentStoreLoaded: t.isReady(),
                        documentVisibilityState: document.visibilityState
                    }
                }), (0, a(104310).u)({
                    event: {
                        eventName: "user_search_timeout",
                        eventProperties: {
                            searchedUserIdCount: r.length,
                            queryLength: n.length,
                            parentStoreLoaded: t.isReady(),
                            documentVisibilityState: document.visibilityState
                        }
                    }
                }));
                let g = a(381453).oE(await p),
                    m = null == (s = a(728372).AppStoreCurrentUserStore.state) ? void 0 : s.userId;
                if (l && m) {
                    let e = g.findIndex(e => m === e.id);
                    e > -1 && (d = g[e], g.splice(e, 1))
                }
                let f = a(148344).k.state ? ? {},
                    h = Math.max(...Object.values(f));

                function v(e) {
                    var t;
                    return e === (null == (t = a(728372).AppStoreCurrentUserRootStore.state) ? void 0 : t.userId) ? h + 1e-5 : f[e] ? ? 0
                }
                let y = a(381453).Im(f) ? g : g.sort((e, t) => {
                        let a = v(e.id);
                        return v(t.id) - a
                    }),
                    b = new Set(t.getEmailDomains()),
                    x = n ? (0, a(109266).Q)({
                        query: n,
                        users: y,
                        minFuzzyScore: o,
                        currentUserValue: d,
                        spaceDomains: b
                    }) : g;
                return a(680007).default.measure(c, {}), d ? [d, ...x] : x
            }
        },
        251955: (e, t, a) => {
            function i(e) {
                let {
                    aiInference: t
                } = e;
                return n({
                    isDatabaseAgentsEnabled: (0, a(551408).A)(),
                    aiInference: t
                })
            }

            function n(e) {
                let {
                    isDatabaseAgentsEnabled: t,
                    aiInference: a
                } = e;
                if (!t) return {
                    shouldShowDbAgent: !1,
                    shouldShowLegacyAutofill: !0
                };
                let i = !!a && !a.is_migrated;
                return {
                    shouldShowDbAgent: !i,
                    shouldShowLegacyAutofill: i
                }
            }
            a.d(t, {
                D: () => i,
                a: () => n
            })
        },
        262401: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                personSlashSmallIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.81 1.85 11.03 12.84",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.033 2.206a.625.625 0 0 1 .88.066l.1.116q.018.03.04.058l9.61 11.175.03.034a.625.625 0 0 1-.948.815l-.483-.562c-.28.155-.607.242-.942.242H4.68c-.557 0-1.09-.236-1.43-.631a1.405 1.405 0 0 1-.19-1.593C3.883 10.313 5.824 9.254 8 9.254q.135.001.27.008l-.72-.84a2.66 2.66 0 0 1-1.728-.979c-.41-.511-.64-1.162-.708-1.856l-2.148-2.5a.625.625 0 0 1 .067-.881M8 10.354c-1.854 0-3.363.903-3.961 2.073-.073.143-.052.262.046.377a.8.8 0 0 0 .595.247h6.64a1 1 0 0 0 .187-.022l-2.153-2.506A5.4 5.4 0 0 0 8 10.353M8 1.85c.925 0 1.674.383 2.18 1.012.494.617.73 1.436.73 2.291s-.236 1.674-.73 2.29l-.09.105-.73-.848c.28-.377.45-.913.45-1.547 0-.664-.185-1.223-.49-1.602-.293-.366-.724-.6-1.32-.6-.595 0-1.027.233-1.32.6l-.014.017-.726-.843c.5-.548 1.205-.874 2.06-.874"
                    })
                },
                n = (0, a(104509).wt)("personSlashSmall", i, "small")
        },
        269298: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                lockFillIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.95 12.05 15.66",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6 5.95a4 4 0 1 1 8 0v1.433a2.426 2.426 0 0 1 2.025 2.392v5.4A2.425 2.425 0 0 1 13.6 17.6H6.4a2.425 2.425 0 0 1-2.425-2.425v-5.4c0-1.203.876-2.201 2.025-2.392zm6.75 1.4v-1.4a2.75 2.75 0 1 0-5.5 0v1.4zm-2.2 5.458a1.35 1.35 0 1 0-1.1 0v1.242a.55.55 0 0 0 1.1 0z"
                    })
                },
                n = (0, a(104509).wt)("lockFill", i, "fill")
        },
        288442: (e, t, a) => {
            a.d(t, {
                y: () => c
            });
            var i = () => a(735303);
            let n = {
                    ko: () => a.e(2268).then(a.bind(a, 723608)),
                    es: () => a.e(95264).then(a.bind(a, 499735)),
                    de: () => a.e(35390).then(a.bind(a, 917797)),
                    fr: () => a.e(3272).then(a.bind(a, 32867)),
                    pt: () => a.e(27315).then(a.bind(a, 101699)),
                    zh: () => a.e(69945).then(a.bind(a, 560744)),
                    ja: () => a.e(77757).then(a.bind(a, 59910)),
                    da: () => a.e(9423).then(a.bind(a, 386963)),
                    fi: () => a.e(59337).then(a.bind(a, 23573)),
                    nb: () => a.e(2040).then(a.bind(a, 607288)),
                    nl: () => a.e(51106).then(a.bind(a, 59055)),
                    sv: () => a.e(53631).then(a.bind(a, 767056)),
                    th: () => a.e(17278).then(a.bind(a, 159935)),
                    id: () => a.e(5048).then(a.bind(a, 326497)),
                    vi: () => a.e(42853).then(a.bind(a, 631696)),
                    he: () => a.e(57481).then(a.bind(a, 127879)),
                    ar: () => a.e(29324).then(a.bind(a, 304206))
                },
                r = !1,
                o = !1;
            async function l(e) {
                for (let [a, n] of Object.entries(e.emojiLocaleKeywords)) {
                    var t;
                    i().fB[a] = { ...i().fB[a],
                        keywords: [...n, ...(null == (t = i().fB[a]) ? void 0 : t.keywords) || []]
                    }
                }
                await (0, a(895732).x)(), a(753281).A.update(({
                    emojiByName: t,
                    ...a
                }) => ({ ...a,
                    emojiByName: { ...t,
                        ...e.emojiByName
                    }
                }))
            }
            async function s() {
                o || (await l(await a.e(51872).then(a.bind(a, 348842))), o = !0)
            }
            async function d() {
                if (r) return;
                let [e] = a(849917).locale.split("-");
                e in n && (await l(await n[e]()), r = !0)
            }
            let c = (0, a(517122).A)(async () => {
                await s(), await d()
            })
        },
        295206: (e, t, a) => {
            a.d(t, {
                P: () => r
            }), a(16280), a(898992), a(354520);
            var i = () => a(273917);
            class n extends i().U {
                indexCache = new WeakMap;
                isModelAvailable(e, t, a) {
                    return void 0 !== this.getModelEntry(e, t, a)
                }
                isModelDisabled(e, t, a) {
                    let i = this.getModelEntry(e, t, a);
                    return (null == i ? void 0 : i.isDisabled) ? ? !1
                }
                getModelEntry(e, t, a) {
                    let i = this.getData(e, {
                        spaceId: t
                    });
                    if (i) return this.getIndex(i).get(a)
                }
                getModelMessage(e, t, a) {
                    var i;
                    return null == (i = this.getModelEntry(e, t, a)) ? void 0 : i.modelMessage
                }
                getModelFamily(e, t, i) {
                    var n;
                    let r = null == (n = this.getModelEntry(e, t, i)) ? void 0 : n.modelFamily;
                    return (0, a(443037).jb)(r) ? r : void 0
                }
                getModelsForMode(e, t, a) {
                    let i = this.getData(e, {
                        spaceId: t
                    });
                    if (i) return i.filter(e => "markdown-chat" === a ? void 0 !== e.markdownChat : "workflow" === a ? void 0 !== e.workflow : void 0 !== e.customAgent)
                }
                getIndex(e) {
                    let t = this.indexCache.get(e);
                    if (t) return t;
                    let a = new Map;
                    for (let t of e) a.set(t.model, t);
                    return this.indexCache.set(e, a), a
                }
            }
            let r = new n((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                let i = e.currentUser.id;
                try {
                    let n = await e.api.callCellCompatibleApi({
                        eventName: "getAvailableModels",
                        environment: e,
                        cellNavigation: {
                            spaceId: t
                        },
                        data: {
                            spaceId: t
                        }
                    });
                    if ("failed" === n.type) {
                        let e = (0, a(201790).V4)(n);
                        a(419750).O8(Error(`Failed to fetch available models: ${e}`), {
                            from: "AvailableModelsStore.fetch",
                            type: "api_failed_response",
                            data: {
                                spaceId: t,
                                userId: i,
                                errorMessage: e
                            }
                        });
                        return
                    }
                    return 0 === n.data.models.length && a(419750).O8(Error("Received empty model list from server"), {
                        from: "AvailableModelsStore.fetch",
                        type: "empty_response",
                        data: {
                            spaceId: t,
                            userId: i
                        }
                    }), n.data.models
                } catch (e) {
                    a(419750).O8(e, {
                        from: "AvailableModelsStore.fetch",
                        type: "error",
                        data: {
                            spaceId: t,
                            userId: i
                        }
                    });
                    return
                }
            }, {
                dontCacheUndefined: !0
            });
            (0, a(202146).exposeDebugValue)("availableAiModelsStore", r)
        },
        314331: (e, t, a) => {
            a.d(t, {
                n: () => i
            });

            function i(e) {
                return (0, a(682985).K8)(() => a(585823).gZ.state && (null == e ? void 0 : e.id) === a(585823).Di.state, [e])
            }
        },
        315144: (e, t, a) => {
            a.d(t, {
                a: () => n
            });
            let i = new(a(815048)).O2("StopDictationButton", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(5410), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(12354), a.e(5721), a.e(57688), a.e(17250), a.e(64696), a.e(39726), a.e(87971), a.e(29663), a.e(74145), a.e(55067), a.e(79349), a.e(90735), a.e(50354), a.e(71136), a.e(86102), a.e(30671), a.e(3101)]).then(a.bind(a, 985993))),
                n = (0, a(815048)._h)(i, e => e.StopDictationButton)
        },
        321412: (e, t, a) => {
            a.d(t, {
                b: () => s
            });
            var i = a(296540),
                n = a(474848);
            let r = {
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

            function o({
                itemId: e,
                itemRef: t
            }) {
                let l = (0, a(533992).v3)(),
                    s = (0, i.useContext)(a(700587).U),
                    d = (0, a(682985).K8)(() => a(488301).J.state.highlightedSetting === e, [e]);
                return (0, i.useEffect)(() => {
                    d && t.current && (0, a(341471).h)({
                        element: t.current,
                        environment: l,
                        scrollerContext: s,
                        vertical: {
                            reveal: "closest"
                        },
                        horizontal: void 0,
                        animate: !0
                    })
                }, [d, l, t, s]), (0, n.jsx)(a(654979).A, {
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
                    style: r.highlight
                })
            }
            let l = {
                flex: 3,
                minWidth: 200
            };

            function s({
                id: e,
                title: t,
                titleId: r,
                byline: d,
                bylineId: c,
                item: u,
                badge: p,
                layout: g = "inline"
            }) {
                let m = (0, i.useRef)(null),
                    f = (0, a(960253).I)(() => ({
                        settingContainer: {
                            display: "flex",
                            width: "100%",
                            flexWrap: "wrap",
                            position: "relative",
                            gap: 12,
                            ..."stacked" === g ? {
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
                            ..."stacked" === g ? {
                                width: "100%"
                            } : {
                                alignItems: "flex-end"
                            }
                        }
                    }), [g]);
                return (0, n.jsxs)("div", {
                    ref: m,
                    style: f.settingContainer,
                    children: [(0, n.jsx)("div", {
                        style: l,
                        children: (0, n.jsx)(a(741489).j, {
                            title: t,
                            titleId: r,
                            byline: d,
                            bylineId: c,
                            badge: p
                        })
                    }), (0, n.jsx)("div", {
                        style: f.settingItem,
                        children: u
                    }), (0, n.jsx)(o, {
                        itemId: e,
                        itemRef: m
                    })]
                })
            }
        },
        321753: (e, t, a) => {
            a.d(t, {
                A: () => o,
                n: () => r
            });
            var i = a(296540),
                n = a(474848);

            function r(e) {
                return (0, a(960253).I)(() => ({
                    tooltipTextStyle: {
                        color: a(632079).Tj.text.inverseSecondary
                    },
                    tooltipAvatarContainer: {
                        display: "flex",
                        alignItems: "center",
                        marginInlineEnd: 8
                    },
                    tooltipContainer: {
                        display: "flex",
                        flexDirection: "row",
                        padding: "4px 6px",
                        alignItems: "center",
                        ...e
                    },
                    tooltipUserInfoContainer: {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }), [e])
            }
            let o = function(e) {
                let {
                    hasTooltip: t,
                    showAvatarInTooltip: o,
                    tooltipHeader: l,
                    style: s,
                    iconStyle: d,
                    isOffline: c,
                    borderStyle: u,
                    avatarShouldShowShadow: p,
                    initialOverrideStyle: g,
                    tooltipOverrideStyle: m,
                    userValue: f,
                    userStore: h,
                    avatar: v,
                    type: y = "avatar",
                    delayThreshold: b,
                    hasPersonHoverCard: x,
                    personHoverCardEntrypoint: S = "avatar",
                    avatarOutlineOffset: w
                } = e, k = (0, a(109939).tz)(), I = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore), A = (0, a(67499).S)(), M = (0, a(682985).K8)(() => (0, a(888).$)(A) ? ? I, [A, I]), j = e.size ? ? 18, {
                    initialStyle: C,
                    avatarWrapStyle: T,
                    avatarStyle: _,
                    proxiedImageStyle: D,
                    suspendedUserStyle: B,
                    deletedUserStyle: P
                } = (0, a(960253).I)(() => ({
                    initialStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        lineHeight: `${j}px`,
                        width: j,
                        height: j,
                        overflow: "hidden",
                        textAlign: "center",
                        fontSize: Math.max(.4375 * j, 11),
                        background: a(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: a(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        isolation: "auto",
                        ...d,
                        ...g
                    },
                    avatarWrapStyle: {
                        background: a(632079).Tj.background.primary,
                        borderRadius: "100%",
                        boxShadow: p ? a(632079).Tj.avatarBoxShadow : "none",
                        outlineWidth: 1,
                        outlineStyle: u ? ? "solid",
                        outlineColor: a(632079).Tj.border.secondaryTranslucent,
                        outlineOffset: w ? ? -1,
                        ...d
                    },
                    avatarStyle: {
                        borderRadius: "100%",
                        width: j,
                        height: j,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        opacity: c ? .3 : 1,
                        ...d
                    },
                    proxiedImageStyle: {
                        width: j,
                        height: j,
                        ...d
                    },
                    suspendedUserStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        width: j - 2,
                        height: j - 2,
                        overflow: "hidden",
                        background: a(632079).Tj.suspendedUIUserAvatarBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: a(632079).Tj.text.primary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        ...d
                    },
                    deletedUserStyle: {
                        boxSizing: "border-box",
                        borderRadius: "100%",
                        width: j,
                        height: j,
                        overflow: "hidden",
                        background: a(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: a(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: `1px solid ${a(632079).Tj.border.secondary}`,
                        ...d
                    }
                }), [g, p, u, c, j, d, w]), {
                    tooltipTextStyle: E,
                    tooltipAvatarContainer: z,
                    tooltipContainer: L,
                    tooltipUserInfoContainer: V
                } = r(m), U = (0, i.useMemo)(() => h ? ? (f ? a(993189).Bj6.fromValue(a(832375).oo9, f) : void 0), [h, f]), N = (0, i.useMemo)(() => U instanceof a(807825).L ? U : M && U ? a(807825).L.createChildStore(M, {
                    id: U.id,
                    table: a(832375).oo9
                }) : void 0, [U, M]), R = (0, a(682985).K8)(() => null == U ? void 0 : U.getFullName(k), [U, k]), F = (0, a(682985).K8)(() => null == U ? void 0 : U.getDisplayName(k), [U, k]), O = (0, a(682985).K8)(() => null == U ? void 0 : U.getEmail(), [U]), W = (0, a(682985).K8)(() => null == U ? void 0 : U.getProfilePhoto(), [U]), H = (0, a(682985).K8)(() => null == U ? void 0 : U.getIsSuspended(), [U]), K = (0, a(682985).K8)(() => null == U ? void 0 : U.getIsDeleted(), [U]), G = (0, a(525272).E)({
                    spaceStore: M,
                    viewedUserId: null == U ? void 0 : U.id
                }) && x, q = () => e.defaultAvatar ? ? (0, n.jsx)(a(16275).I, {
                    icon: a(476719).personFillSmallIcon,
                    size: "sm",
                    colorVariant: "primary"
                }), $ = (e, t, i) => {
                    if (!e) return q();
                    let r = {
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                        ...i
                    };
                    return (0, n.jsx)(a(989059).A, {
                        alt: t,
                        src: e,
                        enableLoadingShimmer: !0,
                        style: r,
                        placeholderStyle: r
                    })
                }, Y = e => (0, n.jsxs)("div", {
                    style: L,
                    children: [(0, n.jsx)("div", {
                        style: z,
                        children: J()
                    }), (0, n.jsxs)("div", {
                        style: V,
                        children: [U ? F : null == v ? void 0 : v.name, e ? void 0 : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("br", {}), U ? (0, n.jsx)("span", {
                                style: E,
                                children: O
                            }) : null != v && v.email ? (0, n.jsx)("span", {
                                style: E,
                                children: null == v ? void 0 : v.email
                            }) : null]
                        })]
                    })]
                }), X = e => {
                    let t = a(871871).PE(e)[0].toUpperCase();
                    return (0, n.jsx)("div", {
                        style: T,
                        children: (0, n.jsx)("div", {
                            style: C,
                            children: (0, n.jsx)("div", {
                                children: t
                            })
                        })
                    })
                }, J = () => {
                    if (H && U) return (0, n.jsx)("div", {
                        style: T,
                        children: (0, n.jsx)("div", {
                            style: B,
                            children: (0, n.jsx)(a(16275).I, {
                                icon: a(67207).personSlashIcon,
                                size: j - 2,
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (K) return (0, n.jsx)("div", {
                        style: T,
                        children: (0, n.jsx)("div", {
                            style: P,
                            children: (0, n.jsx)(a(16275).I, {
                                icon: a(262401).personSlashSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (U) {
                        if (W) return (0, n.jsx)("div", {
                            style: _,
                            children: (0, n.jsx)(a(738251).A, {
                                stripGoogleIconQuery: !0,
                                url: W,
                                isAuthenticated: !1,
                                width: Math.max(Number(D.width), 120),
                                render: (e, t) => $(t, R, T)
                            })
                        });
                        else if (R) return X(R);
                        else if (O) return X(O)
                    } else if (v) {
                        if (!v.type && v.avatarUrl) return (0, n.jsx)("div", {
                            style: T,
                            children: (0, n.jsx)("div", {
                                style: _,
                                children: $(v.avatarUrl, v.name)
                            })
                        });
                        else if (v.name) return X(v.name);
                        else if (v.email) return X(v.email)
                    }
                    return q()
                };
                switch (y) {
                    case "avatar":
                        {
                            let e = (0, n.jsx)("div", {
                                style: s,
                                children: J()
                            });
                            if (G && N && M) return (0, n.jsx)(a(532755).D, {
                                userStore: N,
                                spaceStore: M,
                                from: S,
                                children: e
                            });
                            if (t) return (0, n.jsx)(a(51831).m, {
                                content: () => o ? Y() : (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("div", {
                                        children: l
                                    }), F, (0, n.jsx)("br", {}), U ? (0, n.jsx)("span", {
                                        style: E,
                                        children: O
                                    }) : void 0]
                                }),
                                placement: "bottom",
                                alignment: "start",
                                delayThreshold: b,
                                children: t => (0, n.jsx)("div", {
                                    style: s,
                                    "aria-label": F,
                                    ...t,
                                    children: e
                                })
                            });
                            return e
                        }
                    case "avatar-name":
                    case "avatar-name-email":
                        return Y("avatar-name" === y);
                    default:
                        (0, a(722371).HB)(y)
                }
            }
        },
        334682: (e, t, a) => {
            a.d(t, {
                m: () => i
            }), a(898992), a(354520), a(430670), a(581454);
            async function i(e) {
                let {
                    environment: t,
                    membersOnly: i
                } = e, n = a(728372).AppStoreSidebarSpaceStore.state;
                if (!n) return [];
                await a(371151).iV({
                    environment: t,
                    spaceId: n.id
                });
                let r = a(105692).subscriptionDataStoreInstance.state;
                if (!r) return [];
                let o = (0, a(576968).B)(r).filter(e => !i || !!(0, a(729052).MN)(e.membershipType)),
                    l = a(728372).AppStoreMainEditorCurrentBlockStore.state,
                    s = a(728372).AppStoreCurrentUserStore.state,
                    d = l && !i ? (0, a(862085).i0)(l).flatMap(({
                        permissionItem: e
                    }) => (0, a(642157).B2)(e) ? [e.user_id] : []) : [],
                    c = o.map(e => e.userId);
                return a(381453).sb([...a(381453).oE([null == s ? void 0 : s.userId]), ...d, ...c])
            }
        },
        337439: (e, t, a) => {
            a.d(t, {
                p: () => i
            });
            async function i() {
                return (await a.e(32675).then(a.bind(a, 271417))).navigateToLibraryPage
            }
        },
        346899: (e, t, a) => {
            a.d(t, {
                h: () => n
            });
            let i = new(a(815048)).O2("DictationAvatar", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(5410), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(12354), a.e(5721), a.e(57688), a.e(17250), a.e(64696), a.e(39726), a.e(87971), a.e(29663), a.e(74145), a.e(55067), a.e(79349), a.e(90735), a.e(50354), a.e(71136), a.e(86102), a.e(30671), a.e(3101)]).then(a.bind(a, 405957))),
                n = (0, a(815048)._h)(i, e => e.DictationAvatar)
        },
        372181: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                infoCircleSmallIcon: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.9 4.425a.775.775 0 1 0 0 1.55.775.775 0 0 0 0-1.55M6.95 6.5a.625.625 0 1 0 0 1.25h.425V10H6.95a.625.625 0 1 0 0 1.25h2.1a.625.625 0 1 0 0-1.25h-.425V7.125A.625.625 0 0 0 8 6.5z"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                r = (0, a(104509).wt)("infoCircleSmall", n, "small")
        },
        372365: (e, t, a) => {
            a.r(t), a.d(t, {
                clockSmallIcon: () => r,
                iconDefinition: () => n
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 3.955a.625.625 0 0 0-.625.625v2.795H5.12a.625.625 0 1 0 0 1.25H8c.345 0 .625-.28.625-.625V4.58A.625.625 0 0 0 8 3.955"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                r = (0, a(104509).wt)("clockSmall", n, "small")
        },
        374241: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowStraightLeftSmallIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.16 8.206q.046.13.148.236l4.32 4.32a.625.625 0 0 0 .884-.884L4.259 8.625h8.991a.625.625 0 1 0 0-1.25H4.259l3.253-3.253a.625.625 0 1 0-.884-.884l-4.32 4.32a.62.62 0 0 0-.148.648"
                    })
                },
                n = (0, a(104509).wt)("arrowStraightLeftSmall", i, "small")
        },
        376921: (e, t, a) => {
            a.d(t, {
                Ay: () => s,
                mI: () => r,
                vb: () => o
            }), a(296540);
            var i = a(474848);
            let n = (0, a(109939).YK)({
                    removeTokenLabel: {
                        defaultMessage: "Remove {title}",
                        id: "uiGenericToken.removeTokenLabel"
                    },
                    removeTokenLabelGeneric: {
                        defaultMessage: "Remove Item",
                        id: "uiGenericToken.removeTokenLabelGeneric"
                    }
                }),
                r = a(696654).NY,
                o = {
                    [a(696654).NY.ExtremeSmall]: {
                        height: 12,
                        fontSize: 10,
                        margin: "0 4px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [a(696654).NY.ExtraSmall]: {
                        height: 14,
                        fontSize: 12,
                        margin: "0 6px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [a(696654).NY.Small]: {
                        height: 18,
                        fontSize: 12,
                        margin: "0 6px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 16
                    },
                    [a(696654).NY.CompactEssential]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [a(696654).NY.Medium]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [a(696654).NY.Inline]: {
                        height: 20,
                        fontSize: 14,
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20,
                        margin: "0 -5px 0 0",
                        marginEditState: "0 6px 0 0"
                    },
                    [a(696654).NY.Large]: {
                        height: 24,
                        fontSize: 16,
                        margin: "0 8px 8px 0",
                        marginEditState: "0 8px 8px 0",
                        closeIconSize: a(104509).Ev.sm,
                        avatarSize: 24
                    }
                },
                l = {
                    style0: { ...a(699422).RC
                    },
                    style1: {
                        opacity: .5
                    }
                };

            function s({
                avatarSize: e,
                format: t,
                isSingle: r,
                onClickRemove: d,
                renderAvatar: c,
                showRemoveButton: u,
                shouldShrink: p,
                style: g,
                title: m
            }) {
                let f = (0, a(109939).tz)(),
                    {
                        height: h,
                        fontSize: v,
                        margin: y,
                        marginEditState: b,
                        closeIconSize: x,
                        avatarSize: S
                    } = o[t],
                    w = (0, a(960253).I)(() => ({
                        root: {
                            display: "flex",
                            alignItems: "center",
                            flexShrink: +!!p,
                            minWidth: 0,
                            height: h,
                            borderRadius: 6,
                            fontSize: v,
                            lineHeight: "120%",
                            margin: r ? 0 : u ? b : y,
                            ...g
                        }
                    }), [v, h, r, y, b, p, u, g]);
                return (0, i.jsxs)("div", {
                    style: w.root,
                    children: [null == c ? void 0 : c(e ? ? S), (0, i.jsx)("div", {
                        className: "notranslate",
                        style: l.style0,
                        children: m
                    }), u ? (0, i.jsx)(a(64960).Ay, {
                        ariaLabel: void 0 !== m ? f.formatMessage(n.removeTokenLabel, {
                            title: m
                        }) : f.formatMessage(n.removeTokenLabelGeneric),
                        onClick: d,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: h,
                            height: h,
                            marginInlineStart: 2,
                            marginInlineEnd: 2,
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: 6
                        },
                        children: (0, i.jsx)(a(16275).I, {
                            icon: a(519529).xMarkFillSmallIcon,
                            size: x,
                            style: l.style1
                        })
                    }) : null]
                })
            }
        },
        380559: (e, t, a) => {
            a.d(t, {
                u: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
                position: "absolute",
                insetInlineEnd: -2,
                bottom: -2
            };

            function r(e) {
                let {
                    size: t
                } = e;
                return (0, i.jsx)("span", {
                    style: n,
                    children: (0, i.jsx)(a(16275).I, {
                        icon: a(759706).arrowDiagonalUpRightSmallIcon,
                        size: t,
                        colorVariant: "primary",
                        showOutline: !0
                    })
                })
            }

            function o(e) {
                var t, n;
                let {
                    isTablet: o
                } = (0, a(533992).Y0)(), l = (0, a(853284).U)(), s = (0, a(665002).g)(), d = a(986939).A.isMobile ? (0, a(616844).Y5)("left", "number" == typeof(null == (t = e.style) ? void 0 : t.paddingInlineStart) ? null == (n = e.style) ? void 0 : n.paddingInlineStart : 10) : void 0, c = (0, a(960253).I)(() => {
                    let t = a(986939).A.isMobile ? {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            minHeight: 26,
                            fontSize: 16,
                            paddingTop: o ? 4 : 8,
                            paddingBottom: o ? 4 : 8,
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
                            height: a(132261).Zr,
                            paddingTop: 4,
                            paddingBottom: 4,
                            ...(0, a(153262).ic)()
                        },
                        i = a(986939).A.isMobile ? 24 : e.isLibrary ? a(132261).FD : a(132261).ry;
                    return {
                        wrapper: { ...t,
                            ...e.style,
                            ...s && {
                                transition: "none"
                            }
                        },
                        icon: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                            width: a(986939).A.isMobile ? 28 : 22,
                            height: a(986939).A.isMobile ? 24 : 18,
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
                            color: a(632079).Tj.text.secondary,
                            width: i,
                            height: i,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInlineEnd: l ? 6 * !e.icon : e.isLibrary ? 8 : 8 * !e.icon
                        },
                        children: {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: "auto",
                            whiteSpace: "nowrap",
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: e.right && !a(986939).A.isMobile ? "clip" : "ellipsis",
                            ...e.childrenStyle
                        }
                    }
                }, [o, d, e.shouldShowMobileMarginBottom, e.isBottomItem, e.style, e.rightStyle, e.isLibrary, e.icon, e.right, e.childrenStyle, l, s]);
                return (0, i.jsxs)("div", {
                    role: e.role,
                    dir: (0, a(619157).A1)() ? "rtl" : "ltr",
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
                        children: [e.icon, e.isAlias ? (0, i.jsx)(r, {
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
        397900: (e, t, a) => {
            a.r(t), a.d(t, {
                ellipsisIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 8.62 14.76 2.76",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
                    })
                },
                n = (0, a(104509).wt)("ellipsis", i, "default")
        },
        398879: (e, t, a) => {
            a.d(t, {
                EG: () => o,
                K5: () => r,
                RH: () => n,
                Yi: () => l,
                ls: () => i
            });
            let i = 32,
                n = 202,
                r = 1e3,
                o = "Want to add a metric? Look for 'src/client/performanceToolbar/config.ts' in notion-next.",
                l = "To disable the toolbar entirely, go to the 'Experiments' panel and look for the 'performance_debugging_toolbar' flag."
        },
        405072: (e, t, a) => {
            a.d(t, {
                J: () => i
            });

            function i(e) {
                var t;
                let {
                    isMobileNative: i,
                    isAndroid: n
                } = e, r = a(218744).default.checkGate({
                    gateName: "android_show_language_settings"
                }), o = null == (t = (0, a(663250).getMobileNativeDeviceInfo)()) ? void 0 : t.mobileNativeAndroidApiLevel;
                return r && i && n && "number" == typeof o && o >= 33
            }
        },
        405461: (e, t, a) => {
            function i(e) {
                let {
                    intl: t,
                    groupName: i
                } = e;
                return i || t.formatMessage(a(95384).D.untitledGroupName)
            }

            function n(e) {
                var t;
                return (null == (t = a(801062).h.getGroupData(e.groupId)) ? void 0 : t.memberCount) ? ? 0
            }

            function r(e) {
                let {
                    userIds: t,
                    limit: i,
                    spaceStore: n
                } = e;
                if (!n) return {
                    countRemainingUsers: 0,
                    limitedUserStores: []
                };
                let r = i ? t.slice(0, i) : t;
                return {
                    limitedUserStores: a(381453).oE(r.map(e => a(807825).L.createChildStore(n, {
                        table: a(832375).oo9,
                        id: e
                    }))),
                    countRemainingUsers: t.length - r.length
                }
            }

            function o({
                userStores: e,
                spaceStore: t,
                intl: i
            }) {
                return a(381453).Ul(e, e => e.getSearchName(i)).sort((e, i) => {
                    if (!t) return 0;
                    let n = (0, a(993077).dp)(t, e.id).getMembershipTypeAsRoleOrNone(),
                        r = (0, a(993077).dp)(t, i.id).getMembershipTypeAsRoleOrNone();
                    return n && r ? a(642157).hV.indexOf(r) - a(642157).hV.indexOf(n) : 0
                })
            }

            function l(e) {
                var t;
                let {
                    spaceStore: i,
                    spaceUserStore: n
                } = e;
                if (!i) return !1;
                let r = (null == n ? void 0 : n.getMembershipType()) ? ? "none",
                    o = null == (t = i.getModel()) ? void 0 : t.getGroupCreationPolicy();
                switch (r) {
                    case "none":
                    case "page_guest":
                    case "restricted_member":
                        return !1;
                    case "member":
                        return "all_workspace_members" === o;
                    case "membership_admin":
                    case "owner":
                        return !0;
                    default:
                        return (0, a(722371).HB)(r)
                }
            }

            function s(e) {
                let {
                    groupId: t,
                    delta: i
                } = e, n = a(801062).h.getGroupData(t);
                n && a(801062).h.updateGroup(t, {
                    memberCount: Math.max(0, n.memberCount + i)
                })
            }

            function d(e) {
                let {
                    members: t,
                    query: a
                } = e, i = a.trim().toLowerCase();
                return "" === i ? t : t.filter(e => e.name.toLowerCase().includes(i) || void 0 !== e.email && e.email.toLowerCase().includes(i))
            }

            function c(e) {
                let {
                    memberUserIds: t,
                    spaceStore: i,
                    groupId: n,
                    currentUserId: r
                } = e;
                return t.map(e => {
                    let t = a(807825).L.createChildStore(i, {
                            table: a(832375).oo9,
                            id: e
                        }),
                        o = (0, a(13717).A)({
                            spaceStore: i,
                            groupId: n,
                            userId: e
                        }),
                        l = a(229903).V.createChildStore(i, (0, a(729052).i1)({
                            userId: e,
                            spaceId: i.id
                        }));
                    return {
                        userId: e,
                        name: t.getName() ? ? t.getEmail() ? ? "",
                        email: t.getEmail(),
                        avatarUrl: t.getProfilePhoto(),
                        isCurrentUser: e === r,
                        isOwner: "owner" === o.getMembershipType(),
                        isWorkspaceOwner: i.canAdmin(),
                        isRestrictedMember: l.isRestrictedMember() ? ? !0
                    }
                })
            }

            function u(e) {
                let {
                    users: t,
                    existingMemberIds: a
                } = e, i = new Set(a);
                return t.filter(e => !i.has(e.id)).map(e => ({
                    userId: e.id,
                    name: e.name ? ? e.email ? ? "",
                    email: e.email,
                    avatarUrl: e.profile_photo
                }))
            }

            function p(e) {
                let {
                    groupId: t,
                    groupStore: i
                } = e;
                a(801062).h.updateGroup(t, {
                    group: i.getModel()
                })
            }
            a.d(t, {
                A9: () => u,
                Fz: () => c,
                Ny: () => l,
                Pf: () => i,
                cp: () => o,
                gA: () => r,
                mi: () => d,
                s: () => s,
                sd: () => p,
                xQ: () => n
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(581454)
        },
        408138: (e, t, a) => {
            a.d(t, {
                X: () => i
            });
            let i = a(546605).Store.createValue({
                shouldReset: !1
            }, {
                name: "MobileAssistantMenuStore"
            })
        },
        418001: (e, t, a) => {
            a.d(t, {
                j: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    blockStore: i,
                    tabToOpen: n,
                    from: r
                } = e, o = a(475097).default.state.open, {
                    currentTab: l
                } = a(449473).B8.state, s = l !== n || l === n && !(0, a(953099).N)(t), d = n === a(449473).tF.Comments && (l !== n || !(0, a(953099).N)(t));
                (0, a(34953).f)(n), d && a(449473).B8.update(e => ({ ...e,
                    timeOpenedComments: Date.now()
                })), o ? ((0, a(545586).navigateToBlock)({
                    environment: t,
                    store: i,
                    pageVisitSource: a(254656).y8.Expand
                }), (0, a(911046).u)({
                    environment: t,
                    isExpanded: !0,
                    from: r,
                    saveDetailsSidebarPreference: !0
                })) : (0, a(911046).u)({
                    environment: t,
                    isExpanded: s,
                    from: r,
                    saveDetailsSidebarPreference: !0
                })
            }
        },
        419218: (e, t, a) => {
            a.r(t), a.d(t, {
                getCustomAgents: () => r,
                getWorkflowSearchText: () => i().getWorkflowSearchText,
                initializeWorkflowDataCache: () => s,
                isAgentEsSearchEnabled: () => o,
                searchAgentsViaSearchApi: () => l,
                searchWorkflowStores: () => i().searchWorkflowStores,
                searchWorkflowStoresWithMinisearchIndex: () => i().searchWorkflowStoresWithMinisearchIndex
            }), a(581454);
            var i = () => a(587832);
            let n = new Map;
            async function r(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    skipClientSideGateChecks: r
                } = e;
                if (!r) {
                    if (!a(218744).default.checkGate({
                            gateName: "custom_agents_server"
                        })) return {
                        workflowStores: [],
                        workflowSearchIndex: await (0, i().createCustomAgentSearchIndex)([]),
                        mostRecentTranscripts: {}
                    };
                    let e = (0, a(630131).Y)(t, {
                            name: "custom_agents",
                            spaceId: n.id,
                            userId: t.currentUser.id
                        }),
                        r = (0, a(328765).S)(),
                        o = (null == r ? void 0 : r.id) === n.id;
                    if (!e && o) return {
                        workflowStores: [],
                        workflowSearchIndex: await (0, i().createCustomAgentSearchIndex)([]),
                        mostRecentTranscripts: {}
                    }
                }
                let o = n.id,
                    l = await (0, a(203462).zf)(t).awaitData(t, {
                        spaceId: o
                    });
                if (!l) return {
                    workflowStores: [],
                    workflowSearchIndex: await (0, i().createCustomAgentSearchIndex)([]),
                    mostRecentTranscripts: {}
                };
                let s = a(805148).p.getIndex(o),
                    d = (0, a(381453).oE)(l.agents.map(e => {
                        if (e.getData() ? ? e.getDraftData()) return e
                    }));
                return a(805148).p.refresh({
                    spaceId: o,
                    agents: l.agents
                }), {
                    workflowStores: d,
                    workflowSearchIndex: s ? ? await (0, i().createCustomAgentSearchIndex)(d),
                    mostRecentTranscripts: l.mostRecentThreads
                }
            }

            function o() {
                return a(218744).default.checkGate({
                    gateName: "agent_search_es_querying"
                })
            }
            async function l(e) {
                let {
                    environment: t,
                    spaceId: i,
                    query: n,
                    limit: r = 50
                } = e, o = await t.api.callApi({
                    eventName: "search",
                    environment: t,
                    data: {
                        type: a(821603).Vz.BlocksInSpace,
                        query: n,
                        spaceId: i,
                        filters: { ...a(821603).N2({}),
                            blockTypes: ["agent"]
                        },
                        sort: {
                            field: "relevance"
                        },
                        limit: r,
                        source: "agent_search"
                    }
                });
                return "success" !== o.type ? [] : o.data.results.map(e => new(a(360851)).N(t, {
                    table: a(832375).C0E,
                    id: e.id,
                    spaceId: i
                }))
            }

            function s(e) {
                if (!(0, a(56788).$)()) return;
                let t = a(728372).AppStoreSidebarSpaceStore.state,
                    i = a(728372).AppStoreCurrentUserStore.state;
                if (!t || !i) return;
                let o = `${i.id}:${t.id}`;
                if (n.has(o)) return;
                let l = r({
                    environment: e,
                    spaceStore: t,
                    userStore: i
                }).then(() => void 0);
                n.set(o, l), l.finally(() => {
                    n.get(o) === l && n.delete(o)
                })
            }
        },
        432376: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        open: !1,
                        openAnimationCompleted: !0,
                        closeAnimationCompleted: !0
                    }
                }
            }
            let r = n
        },
        451199: (e, t, a) => {
            a.d(t, {
                A: () => o,
                p: () => r
            });
            var i = a(296540),
                n = a(474848);
            let r = 8,
                o = i.forwardRef(function({
                    isSelected: e,
                    radioButtonColor: t = "blue"
                }, i) {
                    let {
                        radioButtonStyle: o,
                        dotStyle: l
                    } = (0, a(960253).I)(() => {
                        let i = "blue" === t ? a(632079).Tj.blue.icon.accentPrimary : a(632079).Tj.red.icon.accentPrimary;
                        return {
                            radioButtonStyle: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                width: 16,
                                height: 16,
                                borderRadius: 16,
                                marginInlineEnd: r,
                                background: e ? i : a(632079).Tj.whiteButtonBackground,
                                border: e ? "none" : `1px solid ${a(632079).Tj.border.strongTranslucent}`,
                                transition: "background 100ms ease-out"
                            },
                            dotStyle: {
                                width: 6,
                                height: 6,
                                borderRadius: 6,
                                background: a(632079).Tj.text.inversePrimary,
                                transition: "opacity 100ms ease-out",
                                opacity: +!!e
                            }
                        }
                    }, [e, t]);
                    return (0, n.jsx)("div", {
                        ref: i,
                        style: o,
                        children: (0, n.jsx)("div", {
                            style: l
                        })
                    })
                })
        },
        469589: (e, t, a) => {
            a.r(t), a.d(t, {
                STORE_MAX_LIMIT: () => o,
                initializePageVisit: () => l,
                updatePageVisits: () => s
            }), a(898992), a(354520), a(581454);
            var i = () => a(726570),
                n = () => a(226221),
                r = () => a(832375);
            let o = 100;
            async function l(e, t) {
                await a(728372).default.waitUntilRendered();
                let {
                    fromPageRefresh: i,
                    blockStore: o,
                    pageVisitStore: l,
                    timestamp: s,
                    type: u
                } = t, p = e.currentUser.id;
                if (void 0 === p || i) return;
                t.blockStore.id !== l.state.pageId && l.setState({ ...l.getInitialState(),
                    pageId: t.blockStore.id
                });
                let g = (0, a(517013).v3)(o, {
                        table: r().F9f,
                        id: (0, a(665619).$5)({
                            parent_id: o.id,
                            user_id: p
                        }),
                        spaceId: (0, n().e)(o.pointer.spaceId)
                    }),
                    m = (0, a(517013).v3)(o, {
                        table: r().ouC,
                        id: (0, a(665619).$5)({
                            parent_id: o.id,
                            user_id: p
                        }),
                        spaceId: (0, n().e)(o.pointer.spaceId)
                    });
                if (await a(941701).transactionQueue.awaitRecordTransaction({
                        table: r().evP,
                        id: o.id
                    }), await (0, a(966980).hS)(o), !o.canRead() || (0, a(142484).q)(e, o, o.getSpaceStore())) return;
                await g.load(), await m.load();
                let f = g.getKeyStore("visited_at").getValue(),
                    h = m.getKeyStore("exited_at").getValue(),
                    v = await c({
                        environment: e,
                        blockStore: o,
                        spaceId: (0, n().e)(o.pointer.spaceId),
                        timestamp: s,
                        type: u
                    });
                if ("skipped" === v.type || "failed" === v.type) return;
                let y = d({
                    pageVisits: v.data.pageVisits,
                    currentState: l.state,
                    blockStore: o,
                    totalCount: l.state.totalCount,
                    hasMore: void 0
                });
                l.state.pageId === o.id && l.setState({ ...y,
                    lastViewTime: f,
                    lastExitTime: h
                })
            }
            async function s(e, t) {
                let i, r;
                await a(728372).default.waitUntilRendered();
                let l = e.currentUser.id;
                if (void 0 === l) return;
                let {
                    blockStore: s,
                    pageVisitStore: c,
                    incremental: u
                } = t, p = t.limit || 32;
                if (u) {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: n,
                        totalCount: r,
                        hasMore: o,
                        ...s
                    } = c.state, d = Object.entries(s).map(([e, t]) => {
                        if (l === e) return;
                        let a = t.getVisitedAt();
                        if (void 0 !== a) return a + 1
                    });
                    i = (0, a(763230).T9)(d.filter(a(722371).O9))
                }
                let g = await e.api.callApi({
                    eventName: "getPageVisitors",
                    environment: e,
                    data: {
                        block: {
                            id: s.id,
                            spaceId: (0, n().e)(s.pointer.spaceId)
                        },
                        sinceTimestamp: i,
                        limit: p,
                        includeTotalCount: t.includeTotalCount
                    },
                    headers: {
                        recordId: s.id,
                        spaceId: (0, n().e)(s.pointer.spaceId)
                    }
                });
                if ("failed" === g.type) return;
                let m = d({
                    pageVisits: g.data.pageVisits,
                    blockStore: s,
                    currentState: c.state,
                    totalCount: g.data.totalCount,
                    hasMore: g.data.hasMore
                });
                if (Object.keys(m).length <= o) r = m;
                else {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: i,
                        totalCount: n,
                        hasMore: l,
                        ...s
                    } = m, d = (0, a(722371).WP)(s).map(([e, t]) => [e, t.getVisitedAt() ? ? 0]);
                    for (let [t] of (r = {
                            pageId: e,
                            lastViewTime: void 0,
                            lastExitTime: void 0,
                            totalCount: n,
                            hasMore: l
                        }, a(381453).Ul(d, ([, e]) => -e).slice(0, o))) r[t] = m[t]
                }
                c.state.pageId === m.pageId && c.setState(r)
            }

            function d(e) {
                let {
                    blockStore: t,
                    pageVisits: a,
                    currentState: o,
                    totalCount: l,
                    hasMore: s
                } = e, d = { ...o,
                    pageId: t.id,
                    totalCount: l,
                    hasMore: s
                };
                for (let e of a) {
                    let {
                        id: a,
                        user_id: o
                    } = e;
                    o in d || (d[o] = i()._.createChildStore(t, {
                        table: r().F9f,
                        id: a,
                        spaceId: (0, n().e)(t.pointer.spaceId)
                    }))
                }
                return d
            }
            async function c(e) {
                let {
                    environment: t,
                    blockStore: i,
                    spaceId: n,
                    timestamp: o,
                    type: l
                } = e, {
                    id: s
                } = t.currentUser, d = i.id, c = i.getSystemBlockTypeStore().getValue();
                if ((0, a(512845).kR)(c) || i.getParentTable() === r().C0E) return {
                    type: "skipped"
                };
                if (s && "passive" !== l) {
                    var u;
                    null == t || null == (u = t.mobileNative) || u.recordPageVisit(s, {
                        blockId: d,
                        spaceId: n,
                        visitedAt: o
                    }), a(715265).A.recordVisit({
                        id: d,
                        systemBlockType: c,
                        type: a(981324).ig.Default,
                        currentUserId: s
                    })
                }
                return await t.api.callApi({
                    eventName: "recordPageVisit",
                    environment: t,
                    data: {
                        block: {
                            id: d,
                            spaceId: n
                        },
                        timestamp: o,
                        type: l
                    },
                    headers: {
                        recordId: d,
                        spaceId: n
                    }
                })
            }
        },
        473182: (e, t, a) => {
            a.d(t, {
                $y: () => o,
                jc: () => r,
                x9: () => n
            }), a(296540);
            var i = a(474848);

            function n() {
                let e = (0, a(682985).K8)(() => {
                    let {
                        editsBlocked: e
                    } = a(177123).A.state;
                    return e ? ? !1
                }, []);
                return (0, a(682985).K8)(() => (0, a(717274).Jq)(), []) && e
            }

            function r() {
                return (0, a(682985).K8)(() => {
                    var e;
                    let t = a(731632).A.state;
                    return null == t || null == (e = t.data) ? void 0 : e.invoiceHostedUrl
                }, [])
            }

            function o() {
                var e, t;
                let n = (0, a(533992).v3)(),
                    o = r(),
                    s = (0, a(682985).K8)(() => {
                        var e;
                        let t = a(731632).A.state;
                        return (null == t || null == (e = t.data) ? void 0 : e.overdueInvoiceCount) ? ? 0
                    }, []),
                    d = (0, a(682985).K8)(() => (0, a(887788).h)(n), [n]),
                    c = (e = d, t = s, e ? t > 1 ? (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Access to Notion is limited because we couldn’t process {overdueInvoiceCount, plural, one {your last payment} other {{overdueInvoiceCount} payments}}.",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.multipleInvoicesMessageContent",
                        values: {
                            overdueInvoiceCount: t
                        }
                    }) : (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Access to Notion is limited because we couldn’t process your last payment",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.messageContent"
                    }) : (0, i.jsx)(a(109939).sA, {
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberMessageContent",
                        defaultMessage: "Access to Notion is limited"
                    })),
                    u = function(e) {
                        if (!e) return (0, i.jsx)(a(109939).sA, {
                            id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberSecondaryLabel",
                            defaultMessage: "Contact a workspace owner to update your workspace’s payment method"
                        })
                    }(d),
                    p = function(e, t, i) {
                        if (t) {
                            let n = (0, a(987954).a)(i);
                            return a => {
                                n && (l(t, e), n(a))
                            }
                        }
                        return i => {
                            l(t, e), a(599754).Ow()
                        }
                    }(n, d, o),
                    g = d ? (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "View unpaid invoice",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.buttonLabel"
                    }) : (0, i.jsx)(a(109939).sA, {
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberButtonLabel",
                        defaultMessage: "View workspace owner"
                    });
                return {
                    clickAction: p,
                    ctaMessage: g,
                    primaryMessage: c,
                    secondaryMessage: u,
                    ctaIcon: d ? a(213458).arrowUpRightSquareIcon : a(11056).personCircleFillIcon,
                    tooltipBodyMessage: d ? g : u,
                    isWorkspaceOwner: d,
                    overdueInvoiceCount: s
                }
            }

            function l(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "subscription_uncollectible_blurred_experience_cta_clicked",
                        eventProperties: {
                            is_workspace_owner: e
                        }
                    }
                })
            }
        },
        476719: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                personFillSmallIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.85 10.22 12.3",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 1.85c-.925 0-1.673.382-2.179 1.012-.495.617-.73 1.435-.73 2.29 0 .856.235 1.674.73 2.291.506.63 1.255 1.012 2.18 1.012.924 0 1.672-.382 2.178-1.012.495-.617.73-1.435.73-2.29 0-.856-.235-1.674-.73-2.291C9.673 2.232 8.925 1.85 8 1.85m0 7.403c-2.175 0-4.115 1.06-4.94 2.672-.3.585-.165 1.179.19 1.594.34.396.873.63 1.43.63h6.64c.557 0 1.09-.234 1.43-.63.355-.415.49-1.01.19-1.594-.825-1.612-2.765-2.672-4.94-2.672"
                    })
                },
                n = (0, a(104509).wt)("personFillSmall", i, "fillSmall")
        },
        497857: (e, t, a) => {
            a.d(t, {
                h: () => n
            }), a(296540);
            var i = a(474848);

            function n() {
                return (0, i.jsx)(a(16275).I, {
                    icon: a(746204).w,
                    size: "lg",
                    colorVariant: "primary"
                })
            }
        },
        511101: (e, t, a) => {
            a.d(t, {
                m: () => i
            });
            let i = "notion-modal-underlay"
        },
        515487: (e, t, a) => {
            a.d(t, {
                r: () => r
            });
            var i = a(296540),
                n = a(474848);

            function r({
                loadingMessage: e
            }) {
                let t = (0, a(934877).A)({
                    visibility: !0,
                    delayShow: 400
                });
                return (0, n.jsx)(a(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    children: t ? (0, n.jsxs)(i.Fragment, {
                        children: [(0, n.jsx)(a(517334).k, {}), e ? (0, n.jsx)("div", {
                            className: "x13fj5qh x1b8rd1j",
                            children: e
                        }) : void 0]
                    }) : void 0
                })
            }
        },
        517122: (e, t, a) => {
            a.d(t, {
                A: () => i
            });

            function i(e) {
                let t, a, i;
                return async (...n) => t ? (i = n, a) ? a : a = t.then(() => (a = void 0, t = e(...i))) : t = e(...n)
            }
        },
        519529: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                xMarkFillSmallIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                n = (0, a(104509).wt)("xMarkFillSmall", i, "fillSmall")
        },
        525272: (e, t, a) => {
            a.d(t, {
                E: () => i
            });

            function i(e) {
                let {
                    spaceStore: t,
                    viewedUserId: i
                } = e, n = (0, a(533992).v3)(), r = (0, a(993077).nB)(t), o = (0, a(993077).V_)({
                    spaceStore: t,
                    userId: i
                }), l = (0, a(682985).K8)(() => {
                    let e = null == t ? void 0 : t.id;
                    return !(0, a(455221).e)(n, e) && "control" !== a(218744).default.getEligibleGroup({
                        experimentId: "show_comment_guest_badge",
                        defaultGroup: "control"
                    })
                }, [n, t]);
                return (0, a(682985).K8)(() => (0, a(62694).V)({
                    spaceStore: t,
                    actorRole: r,
                    viewedRole: o,
                    shouldShowForExternalUsers: l
                }), [t, r, o, l])
            }
        },
        532755: (e, t, a) => {
            a.d(t, {
                D: () => r
            });
            var i = a(296540),
                n = a(474848);

            function r({
                userStore: e,
                suppressMouse: t,
                children: o,
                spaceStore: l,
                width: s,
                from: d = "unknown"
            }) {
                let c = (0, i.useRef)(null),
                    u = (0, a(525272).E)({
                        spaceStore: l,
                        viewedUserId: null == e ? void 0 : e.id
                    }),
                    p = (0, a(83208).X)("prefetch_extended_user_profiles"),
                    g = u && p,
                    m = (0, a(815048).fJ)(a(554666).u.extendedUserProfileActions, {
                        disabled: !g
                    }),
                    f = (0, a(533992).v3)();
                (0, i.useEffect)(() => {
                    g && "resolved" === m.status && null != e && e.id && l && null != l && l.userId && m.value.prefetchExtendedUserProfiles({
                        spaceStore: l,
                        actorUserId: l.userId,
                        viewedUserIds: [e.id]
                    }, f)
                }, [g, null == e ? void 0 : e.id, l, u, f, m]);
                let h = (0, i.useCallback)(() => {
                        c.current && e && l && !t && a(84300).A.setState({
                            type: "user",
                            store: e,
                            domRect: c.current.getBoundingClientRect(),
                            spaceStore: l,
                            from: d
                        })
                    }, [e, l, t, d]),
                    v = (0, i.useCallback)(() => {
                        a(84300).A.setState(void 0)
                    }, []);
                return e && u ? (0, n.jsx)("div", {
                    ref: c,
                    onMouseEnter: u ? h : void 0,
                    onMouseLeave: u ? v : void 0,
                    style: s ? {
                        width: s
                    } : void 0,
                    children: o
                }) : o
            }
        },
        538812: (e, t, a) => {
            function i({
                environment: e,
                localSearchAnalytics: t,
                eventProperties: n
            }) {
                t && (0, a(104310).u)({
                    event: {
                        eventName: "relation_property_menu_local_search_bug",
                        eventProperties: {
                            search_session_id: t.searchSessionId,
                            ...n
                        }
                    }
                })
            }
            async function n({
                environment: e,
                localSearchAnalytics: t
            }) {
                let r = a(728372).AppStoreSidebarSpaceStore.state,
                    o = a(728372).AppStoreSidebarSpaceViewStore.state,
                    l = a(728372).AppStoreCurrentUserSettingsStore.state,
                    s = a(728372).AppStoreCurrentUserStore.state;
                if (r) {
                    if (!a(218744).default.checkGate({
                            gateName: "search_use_local_search_cache",
                            enableEventTrailLogging: !0
                        })) return i({
                        environment: e,
                        localSearchAnalytics: t,
                        eventProperties: {
                            search_step: "get_searchable_blocks_before"
                        }
                    }), await (0, a(168534).h)({
                        environment: e,
                        sidebarSpaceStore: r,
                        sidebarSpaceViewStore: o,
                        localSearchAnalytics: t,
                        currentUserSettingsStore: l,
                        currentUserStore: s
                    });
                    if (i({
                            environment: e,
                            localSearchAnalytics: t,
                            eventProperties: {
                                search_step: "use_local_search_cache_before"
                            }
                        }), a(915681).A.state.localSearchableBlocksCache) return i({
                        environment: e,
                        localSearchAnalytics: t,
                        eventProperties: {
                            search_step: "use_local_search_cache_already_loaded"
                        }
                    }), a(915681).A.state.localSearchableBlocksCache;
                    i({
                        environment: e,
                        localSearchAnalytics: t,
                        eventProperties: {
                            search_step: "use_local_search_cache_before_loading"
                        }
                    });
                    try {
                        await Promise.race([a(915681).A.waitUntil(() => !!a(915681).A.state.localSearchableBlocksCache), new Promise((e, t) => setTimeout(() => t(Error("Cache load timeout")), 2e3))])
                    } catch (a) {
                        i({
                            environment: e,
                            localSearchAnalytics: t,
                            eventProperties: {
                                search_step: "use_local_search_cache_timed_out"
                            }
                        });
                        return
                    }
                    return i({
                        environment: e,
                        localSearchAnalytics: t,
                        eventProperties: {
                            search_step: "use_local_search_cache_after_loading"
                        }
                    }), a(915681).A.state.localSearchableBlocksCache
                }
            }
            async function r(e) {
                let {
                    environment: t
                } = e, i = a(728372).AppStoreSidebarSpaceStore.state;
                if (!i) return [];
                let n = i.id,
                    [r, o] = await Promise.all([a(577464).Ju({
                        environment: t,
                        table: a(832375).NXh,
                        id: n,
                        type: "guest"
                    }), a(577464).Ju({
                        environment: t,
                        table: a(832375).NXh,
                        id: n,
                        type: "workflow"
                    })]);
                return a(381453).sb([...r.botIds, ...o.botIds])
            }
            a.r(t), a.d(t, {
                getLocalCacheFromAppState: () => n,
                getSpaceBotIds: () => r,
                isPersonalPronoun: () => l,
                searchActorsById: () => c,
                searchCollections: () => u().E,
                searchCollectionsWithRecents: () => p().y,
                searchEmailUser: () => g,
                searchInstallableIntegrations: () => C,
                searchMentionablePages: () => v,
                searchPageIds: () => y,
                searchPageIdsInAncestor: () => b,
                searchPagesInCollection: () => x,
                searchPagesInSpace: () => f,
                searchPublicPages: () => S,
                searchSpaceActorIds: () => w,
                searchSpaceActors: () => A,
                searchSpaceBots: () => k,
                searchSpaceGroups: () => M().B,
                searchSpaceUsers: () => I().L,
                searchTeams: () => j,
                searchUsers: () => d().x,
                searchVisibleSpaceUsers: () => T().h
            }), a(16280), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            let o = new Set(["me", "you", "i"]);

            function l(e, t) {
                return !!(t.startsWith("en-") && o.has(e.toLowerCase()))
            }

            function s(e) {
                let {
                    parentStore: t,
                    query: i,
                    botIds: n
                } = e, r = a(381453).oE(n.map(e => {
                    let i = a(447003).v.createChildStore(t, {
                        table: a(832375).GPl,
                        id: e
                    });
                    if (i.getAlive()) return i.getValue()
                }));
                return i ? (0, a(821048).Ay)(i, r, a(697006).tb) : r
            }
            a(581454);
            var d = () => a(250521);
            async function c(e) {
                let {
                    query: t,
                    userIds: i,
                    botIds: n,
                    store: r,
                    environment: o
                } = e, l = r;
                if (!l) {
                    let e = a(728372).AppStoreSidebarSpaceStore.state;
                    if (!e) return {
                        users: [],
                        bots: []
                    };
                    l = e
                }
                return {
                    users: await (0, d().x)({
                        environment: o,
                        parentStore: l,
                        query: t,
                        userIds: i
                    }),
                    bots: s({
                        parentStore: l,
                        query: t,
                        botIds: n
                    })
                }
            }
            var u = () => a(893164),
                p = () => a(653738);
            async function g(e, t) {
                let i = (0, a(801109).qh)(t);
                if (!(0, a(801109).DT)(i) || !i) return {}; {
                    let t = await e.api.callApi({
                        eventName: "findUser",
                        environment: e,
                        data: {
                            email: i
                        }
                    });
                    if ("failed" === t.type) throw t.error;
                    let a = t.data;
                    return a.value ? {
                        user: a.value.value
                    } : {
                        email: i
                    }
                }
            }
            async function m(e) {
                let t, {
                        environment: i,
                        query: n,
                        ancestorId: r,
                        limit: o,
                        excludeTemplates: l,
                        source: s,
                        currentPageId: d,
                        searchSessionId: c,
                        searchSessionFlowNumber: u,
                        recentlyMentionedPageIds: p,
                        ignoresHighlight: g,
                        includePublicPagesWithoutExplicitAccess: m,
                        spaceId: f,
                        peopleBlocksToInclude: h
                    } = e,
                    v = a(821603).N2({
                        navigableBlockContentOnly: !0,
                        excludeTemplates: l,
                        includePublicPagesWithoutExplicitAccess: m
                    }),
                    y = v;
                if (f) {
                    let e = await i.idCreator.getSpaceIdCreator(f),
                        n = (0, a(255139).CT)({
                            peopleBlocksToInclude: h,
                            spaceIdCreator: e,
                            filters: v,
                            excludedBlockIds: void 0
                        });
                    y = n.filters, t = n.excludedBlockIds
                }
                let b = await i.api.callApi({
                    eventName: "search",
                    environment: i,
                    data: {
                        type: a(821603).Vz.BlocksInAncestor,
                        query: n,
                        ancestorId: r,
                        filters: y,
                        sort: {
                            field: "relevance"
                        },
                        limit: o,
                        source: s,
                        spaceId: f,
                        currentPageId: d,
                        searchSessionId: c,
                        searchSessionFlowNumber: u,
                        recentlyMentionedPageIds: p,
                        ignoresHighlight: g,
                        excludedBlockIds: t
                    }
                });
                if ("failed" !== b.type) return b.data;
                throw b.error
            }
            async function f(e) {
                let {
                    environment: t,
                    query: i,
                    limit: r,
                    currentPageId: o,
                    searchSessionId: l,
                    searchSessionFlowNumber: s,
                    recentlyMentionedPageIds: d,
                    spaceId: c,
                    requireEditPermissions: u,
                    excludeTemplates: p,
                    source: g,
                    boostRecentlyViewedPages: m,
                    ignoresHighlight: f,
                    filterOverrides: h,
                    spaceStore: v,
                    peopleBlocksToInclude: y
                } = e, b = {
                    results: [],
                    recordMap: a(412951).RecordMapWithRole.create().toJson(),
                    total: 0,
                    trackEventProperties: void 0
                };
                if (!v) return b;
                let x = await n({
                        environment: t
                    }),
                    S = a(821603).N2({
                        isDeletedOnly: !1,
                        navigableBlockContentOnly: !0,
                        excludeTemplates: p,
                        requireEditPermissions: u || void 0,
                        ...h
                    }),
                    w = await t.idCreator.getSpaceIdCreator(c),
                    {
                        filters: k,
                        excludedBlockIds: I
                    } = (0, a(255139).CT)({
                        peopleBlocksToInclude: y,
                        spaceIdCreator: w,
                        filters: S,
                        excludedBlockIds: void 0
                    }),
                    A = {
                        field: "relevance"
                    };
                if (!i && x) {
                    let e = (0, a(964593).searchAndRerankLocalPages)({
                        query: {
                            query: {
                                text: i,
                                filters: k,
                                sort: A
                            },
                            limit: r
                        },
                        localCachedPages: x,
                        userId: t.currentUser.id,
                        environment: t,
                        spaceStore: v
                    });
                    return e || b
                }
                let M = await t.api.callApi({
                    eventName: "search",
                    environment: t,
                    data: {
                        type: a(821603).Vz.BlocksInSpace,
                        query: i,
                        spaceId: c,
                        currentPageId: o,
                        searchSessionId: l,
                        searchSessionFlowNumber: s,
                        recentlyMentionedPageIds: d,
                        limit: r,
                        filters: k,
                        sort: A,
                        source: g,
                        recentPagesForBoosting: m ? (0, a(601860).cs)(a(420156).A.getWithoutSubscribing(c)) : void 0,
                        ignoresHighlight: f,
                        excludedBlockIds: I
                    }
                });
                if ("failed" !== M.type) return M.data;
                throw M.error
            }

            function h(e) {
                let {
                    trackEventProperties: t,
                    results: i
                } = e, n = (0, a(722371).MU)((0, a(722371).WP)(t).map(([e, t]) => [`server-${e}`, t]));
                return i.map(e => ({ ...e,
                    serverEventProperties: n
                }))
            }
            async function v(e) {
                let {
                    nearBlock: t,
                    environment: i,
                    query: n,
                    source: r,
                    searchSessionId: o,
                    searchSessionFlowNumber: l
                } = e, s = a(728372).AppStoreSidebarSpaceStore.state, d = (0, a(965142).s)(), c = "collection_view_page", u = t && (0, a(862085).i0)(t).find(({
                    permissionItem: e
                }) => (0, a(642157).FP)(e)), p = a(123646).A.getMentionedIds(i.currentUser.id);
                if (s) {
                    let e = await f({
                        environment: i,
                        query: n,
                        limit: 20,
                        spaceId: s.id,
                        currentPageId: d,
                        searchSessionId: o,
                        searchSessionFlowNumber: l,
                        recentlyMentionedPageIds: p,
                        requireEditPermissions: !1,
                        excludeTemplates: !0,
                        source: r,
                        boostRecentlyViewedPages: !0,
                        ignoresHighlight: !0,
                        spaceStore: s,
                        peopleBlocksToInclude: c
                    });
                    return h(e)
                }
                if (!u || u.from.table !== a(832375).evP) return []; {
                    let e = await m({
                        environment: i,
                        query: n,
                        limit: 20,
                        ancestorId: u.from.blockId,
                        excludeTemplates: !0,
                        source: r,
                        currentPageId: d,
                        searchSessionId: o,
                        searchSessionFlowNumber: l,
                        recentlyMentionedPageIds: p,
                        ignoresHighlight: !0,
                        peopleBlocksToInclude: c
                    });
                    return h(e)
                }
            }
            async function y(e) {
                let t = await f(e);
                return {
                    results: t.results.map(e => e.id),
                    recordMap: t.recordMap
                }
            }
            async function b(e) {
                return {
                    results: (await m(e)).results.map(e => e.id)
                }
            }
            async function x(e) {
                let {
                    environment: t,
                    query: r,
                    collectionId: o,
                    limit: l,
                    spaceId: s,
                    excludeTemplates: d,
                    source: c,
                    includePublicPagesWithoutExplicitAccess: u,
                    boostRecentlyViewedPages: p,
                    ignoresHighlight: g,
                    localSearchAnalytics: m
                } = e, f = [];
                m && i({
                    environment: t,
                    localSearchAnalytics: m,
                    eventProperties: {
                        search_step: "load_records_before",
                        local_storage_size_kb: Math.trunc(JSON.stringify(localStorage).length / 1024)
                    }
                });
                let h = await n({
                    environment: t,
                    localSearchAnalytics: m
                });
                i({
                    environment: t,
                    localSearchAnalytics: m,
                    eventProperties: {
                        search_step: "load_records_after"
                    }
                });
                let v = a(821603).N2({
                        isDeletedOnly: !1,
                        navigableBlockContentOnly: !0,
                        includePublicPagesWithoutExplicitAccess: u,
                        excludeTemplates: d
                    }),
                    y = {
                        field: "relevance"
                    },
                    b = t.api.callApi({
                        eventName: "search",
                        environment: t,
                        data: {
                            type: a(821603).Vz.BlocksInCollection,
                            query: r,
                            spaceId: s,
                            collectionId: o,
                            limit: l,
                            filters: v,
                            sort: y,
                            source: c,
                            recentPagesForBoosting: p ? (0, a(601860).cs)(a(420156).A.getWithoutSubscribing(s)) : void 0,
                            ignoresHighlight: g
                        }
                    });
                if (h) {
                    let e = {
                            table: a(832375).VlP,
                            id: o,
                            spaceId: s
                        },
                        i = new(a(356912)).m(t, e);
                    await i.load();
                    let n = (0, a(964593).searchAndRerankLocalPages)({
                        query: {
                            query: {
                                text: r,
                                filters: i.isPageTreeCollection() ? { ...v,
                                    ancestors: [o]
                                } : { ...v,
                                    parentId: o
                                },
                                sort: y
                            },
                            limit: l
                        },
                        localCachedPages: h,
                        userId: t.currentUser.id,
                        environment: t,
                        spaceStore: i.getSpaceStore()
                    });
                    n && f.push(...n.results)
                }
                let x = await b;
                if ("failed" === x.type) {
                    if (0 === f.length) throw x.error
                } else {
                    let e = x.data.results;
                    r || (e = function({
                        sort: e,
                        unsorted: t,
                        batchSize: i,
                        currentUserId: n
                    }) {
                        let r = Date.now();
                        if ("relevance" !== e.field) return t;
                        let o = a(381453).iv(t, i).map(e => a(715265).A.sortFrecencyHighToLow({
                            items: e,
                            now: r,
                            currentUserId: n,
                            recordFrecency: !0
                        }));
                        return a(381453).Bq(o)
                    }({
                        sort: y,
                        batchSize: l,
                        currentUserId: t.currentUser.id,
                        unsorted: e
                    })), f.push(...e)
                }
                return {
                    results: a(381453).oE(a(381453).sb(f.map(e => e.id)))
                }
            }
            async function S(e) {
                let {
                    environment: t,
                    query: i,
                    source: n,
                    limit: r
                } = e, o = a(728372).AppStoreSidebarSpaceStore.state;
                return o ? (await f({
                    environment: t,
                    query: i,
                    limit: r || 20,
                    spaceId: o.id,
                    requireEditPermissions: !0,
                    excludeTemplates: !0,
                    source: n,
                    boostRecentlyViewedPages: !1,
                    spaceStore: o,
                    peopleBlocksToInclude: "none"
                })).results.filter(e => {
                    let t = a(970831).B.createChildStore(o, {
                            table: a(832375).evP,
                            id: e.id
                        }),
                        i = (0, a(625925).E)(t);
                    return (0, a(688502).ot)(i)
                }) : []
            }
            async function w(e) {
                let [t, i] = await Promise.all([(0, a(334682).m)(e), r(e)]);
                return {
                    userIds: t,
                    botIds: i
                }
            }
            async function k(e) {
                let {
                    query: t,
                    limit: i
                } = e, n = a(728372).AppStoreSidebarSpaceStore.state;
                return n ? s({
                    parentStore: n,
                    query: t,
                    botIds: await r(e)
                }).slice(0, i) : []
            }
            a(898992), a(672577), a(944114), a(354520);
            var I = () => a(990959);
            async function A(e) {
                let {
                    query: t
                } = e, [a, i] = await Promise.all([(0, I().L)({ ...e,
                    placeSelfFirst: "" === t || l(t, e.userLocale)
                }), k(e)]);
                return {
                    users: a,
                    bots: i
                }
            }
            var M = () => a(35343);
            async function j({
                spaceViewStore: e,
                query: t,
                teamStores: i
            }) {
                let n = a(381453).oE(await Promise.all(i.map(async e => (await e.load(), e.getValue())))),
                    r = new Set((0, a(679321).r)(e).map(e => e.id));
                return t ? (0, a(821048).Ay)(t, n, e => e.name, {
                    getSortScore: e => {
                        let {
                            original: t,
                            score: a
                        } = e;
                        return a * (r.has(t.id) ? -2 : -1)
                    }
                }) : n
            }
            async function C(e) {
                let {
                    query: t,
                    environment: i,
                    spaceId: n,
                    botSettings: r
                } = e;
                if (!n) return [];
                let o = await i.api.callApi({
                    eventName: "searchIntegrations",
                    environment: i,
                    data: {
                        query: t
                    }
                });
                if ("success" === o.type) {
                    let e = o.data.integrationIds,
                        t = r && r.integration_approval_statuses ? Object.keys(r.integration_approval_statuses) : [],
                        i = !!(null == r ? void 0 : r.integration_restrictions),
                        n = (null == r ? void 0 : r.integration_restrictions) === "approved_or_built_by_notion";
                    return i ? e.filter(e => n ? t.includes(e) || (0, a(49361).CX)({
                        integrationId: e
                    }) : t.includes(e)) : e
                }
                if ("failed" === o.type) throw o.error;
                (0, a(722371).HB)(o)
            }
            var T = () => a(108653)
        },
        539694: (e, t, a) => {
            a.d(t, {
                _: () => i
            });
            let i = (0, a(104509).xh)("notion", {
                default: {
                    loader: () => a.e(60858).then(a.bind(a, 792668))
                },
                tintable: {
                    loader: () => a.e(60858).then(a.bind(a, 898378))
                }
            })
        },
        540336: (e, t, a) => {
            a.d(t, {
                Jy: () => h,
                LZ: () => v,
                vU: () => f
            }), a(581454);
            var i = a(296540),
                n = a(474848);
            let r = {
                    kORKVm: "xryxfnj",
                    kXHlph: "xw2csxc",
                    k1xSpc: "x78zum5",
                    kzqmXN: "xh8yej3",
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                o = {
                    kGVxlE: "xx4f2qb",
                    $$css: !0
                },
                l = {
                    kGuDYH: "xif65rj",
                    kZCmMZ: "xmzvs34",
                    kwRFfy: "xf159sx",
                    kY2c9j: "x1vjfegm",
                    $$css: !0
                },
                s = {
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
                g = {
                    k1xSpc: "x78zum5",
                    kzQI83: "x1iyjqo2",
                    $$css: !0
                },
                m = {
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
            let v = i.memo(function({
                tabs: e,
                selectedIndex: t,
                onChange: v,
                right: y,
                style: b,
                tabStyle: x,
                tabTitleStyle: S,
                selectedTabTitleStyle: w,
                tabBorderStyle: k,
                selectedTabStyle: I,
                readOnly: A,
                hideTabBorder: M,
                idPrefix: j
            }) {
                let C = (0, i.useContext)(a(649476).xu),
                    T = (0, a(616844).Y5)("left", 16),
                    _ = (0, a(616844).Y5)("right", 16),
                    D = C.menuType === a(649476).gu.Popup;
                return (0, n.jsxs)("div", { ...a(952687).A.props(r, !M && o, a(986939).A.isMobile ? [s, D ? d : ((e, t) => [{
                        kZCmMZ: null != e ? "xnvo3vl" : e,
                        kwRFfy: null != t ? "x120eax6" : t,
                        $$css: !0
                    }, {
                        "--x-paddingInlineStart": "number" == typeof e ? e + "px" : null != e ? e : void 0,
                        "--x-paddingInlineEnd": "number" == typeof t ? t + "px" : null != t ? t : void 0
                    }])(T, _)] : l, b, {
                        $$css: !0,
                        className: "hide-scrollbar"
                    }),
                    children: [(0, n.jsx)("div", {
                        role: "tablist",
                        ...a(952687).A.props(g, "object" == typeof b && b && "flexDirection" in b && {
                            flexDirection: b.flexDirection
                        }),
                        children: e.map((e, r) => {
                            let o = r === t;
                            return (0, n.jsx)(i.Fragment, {
                                children: (0, n.jsxs)("div", { ...a(952687).A.props(c, x, o && u, o && m.selectedTab, o && I),
                                    children: [(0, n.jsx)(a(988022).p, {
                                        role: "tab",
                                        style: [S, o && w],
                                        onClick: () => v(r),
                                        disabled: A,
                                        "aria-selected": o,
                                        id: f(j, r),
                                        "aria-controls": h(j, r),
                                        colorPalette: o ? void 0 : "gray",
                                        children: e
                                    }), o ? (0, n.jsx)("div", { ...a(952687).A.props(p, k)
                                    }) : void 0]
                                }, `tabButton-${r}`)
                            }, r)
                        })
                    }), y ? (0, n.jsx)("div", {
                        className: "x1iyjqo2 x78zum5 x6s0dn4 x13a6bvl x1b8rd1j",
                        children: y
                    }) : void 0]
                })
            })
        },
        545504: (e, t, a) => {
            a.d(t, {
                w: () => i
            });

            function i({
                url: e,
                config: t
            }) {
                let n = (0, a(132702).parseRoute)({
                    url: e,
                    baseUrl: t.domainBaseUrl,
                    publicDomainName: t.publicDomainName,
                    isMobile: !1,
                    protocol: t.protocol,
                    currentUrl: void 0,
                    requestedOnAlternateDomain: t.requestedOnAlternateDomain
                });
                if ("page" === n.name) return n.blockId
            }
        },
        550246: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                plusFillSmallIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.65 2.65 10.7 10.7",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 2.65a.75.75 0 0 1 .75.75v3.85h3.85a.75.75 0 0 1 0 1.5H8.75v3.85l-.004.077a.75.75 0 0 1-1.492 0L7.25 12.6V8.75H3.4a.75.75 0 0 1 0-1.5h3.85V3.4A.75.75 0 0 1 8 2.65"
                    })
                },
                n = (0, a(104509).wt)("plusFillSmall", i, "fillSmall")
        },
        551408: (e, t, a) => {
            function i() {
                let e = (0, a(83208).X)("database_agents"),
                    t = (0, a(682985).K8)(() => a(886556).z.isAiEnabled(), []);
                return e && t
            }

            function n() {
                return a(218744).default.checkGate({
                    gateName: "database_agents"
                }) && a(886556).z.isAiEnabled()
            }
            a.d(t, {
                A: () => i,
                R: () => n
            })
        },
        554666: (e, t, a) => {
            a.d(t, {
                i: () => n,
                u: () => i
            });
            let i = {
                    PersonProfileContainer: new(a(815048)).O2("PersonProfileContainer", () => Promise.all([a.e(75134), a.e(21969), a.e(29663), a.e(75136), a.e(98175), a.e(47414), a.e(16922), a.e(65594), a.e(15021), a.e(98821), a.e(77470), a.e(80068), a.e(44632)]).then(a.bind(a, 587386))),
                    extendedUserProfileActions: new(a(815048)).O2("extendedUserProfileActions", () => a.e(63717).then(a.bind(a, 433562)))
                },
                n = (0, a(815048)._h)(i.PersonProfileContainer, e => e.PersonProfileContainer)
        },
        555676: (e, t, a) => {
            let i;

            function n(e) {
                i = e
            }

            function r() {
                return i
            }
            a.d(t, {
                w: () => n,
                x: () => r
            })
        },
        556809: (e, t, a) => {
            a.d(t, {
                a: () => o
            });
            var i = a(296540);

            function n(e) {
                a(561599).A.state.openModals.has(e) && (a(561599).A.state.openModals.delete(e), a(561599).A.emit())
            }
            var r = a(474848);

            function o(e) {
                let {
                    open: t,
                    onOpen: o,
                    transitionAppearance: l = "modal"
                } = e, s = (0, i.useRef)();
                void 0 === s.current && (s.current = a(92513).JW());
                let c = s.current,
                    u = (0, a(682985).uB)(e.store, a(432376).A),
                    p = (0, a(682985).K8)(() => u.state.open, [u]),
                    g = (0, i.useRef)(!1),
                    m = function({
                        disableAnimationFromProps: e,
                        isShowingTabBar: t
                    }) {
                        return !!t || e
                    }({
                        disableAnimationFromProps: "none" === l,
                        isShowingTabBar: (0, a(682985).O$)(a(584257).b)
                    }),
                    f = (0, i.useCallback)(() => {
                        if (!g.current && t) u.setState({
                            open: !0,
                            openAnimationCompleted: !1,
                            closeAnimationCompleted: !0
                        }), a(561599).A.state.openModals.has(c) || (a(561599).A.state.openModals.add(c), a(561599).A.emit()), o && o();
                        else g.current && !t && (u.setState({
                            open: !0,
                            openAnimationCompleted: !0,
                            closeAnimationCompleted: !1
                        }), n(c));
                        g.current = t
                    }, [c, u, o, t]);
                return (0, i.useEffect)(() => {
                    f()
                }, [f]), (0, a(637030).X)(() => {
                    n(c)
                }), (0, r.jsx)(a(114596).O, {
                    open: p,
                    zIndex: e.overlayZIndex,
                    origin: e.origin,
                    trapFocus: !0,
                    children: (0, r.jsx)(a(369064).N, {
                        debugName: "Modal",
                        capture: e.open,
                        onEsc: t => {
                            e.onDismiss && e.onDismiss(t)
                        },
                        children: (0, r.jsx)(a(654979).A, {
                            tag: d,
                            visible: e.open,
                            animate: {
                                opacity: 1
                            },
                            initial: {
                                opacity: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            forceCompositeLayer: !0,
                            config: {
                                duration: m ? 0 : void 0
                            },
                            onAnimationEnd: () => {
                                var a, i, n;
                                return a = t, i = u, n = e.onClosed, void(a ? i.setState({
                                    open: !0,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }) : (i.setState({
                                    open: !1,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }), null == n || n()))
                            },
                            open: e.open,
                            keepFocus: e.keepFocus,
                            disableAnimation: m,
                            showCloseIcon: e.showCloseIcon,
                            onDismiss: e.onDismiss,
                            isWaxPaper: e.isWaxPaper,
                            ariaLabel: e.ariaLabel,
                            ariaLabelledBy: e.ariaLabelledBy,
                            ariaDescribedBy: e.ariaDescribedBy,
                            innerStyle: e.innerStyle,
                            children: e.children,
                            preventHideChildrenWhileOpening: e.preventHideChildrenWhileOpening,
                            style: e.style,
                            className: e.className,
                            backgroundStyle: e.backgroundStyle,
                            store: u,
                            isWash: e.isWash,
                            transitionAppearance: l
                        })
                    })
                })
            }

            function l({
                children: e,
                disableAnimation: t,
                preventHideChildrenWhileOpening: i,
                store: n
            }) {
                let o = (0, a(682985).uB)(n, a(432376).A),
                    s = (0, a(682985).K8)(() => o.state.openAnimationCompleted, [o]);
                return t || s || i ? (0, r.jsx)(r.Fragment, {
                    children: e
                }) : null
            }
            let s = i.forwardRef(function({
                    showCloseIcon: e,
                    onDismiss: t,
                    isWaxPaper: i,
                    isWash: n,
                    ariaLabel: o,
                    ariaLabelledBy: s,
                    ariaDescribedBy: d,
                    style: c,
                    children: u,
                    disableAnimation: p,
                    preventHideChildrenWhileOpening: g,
                    store: m
                }, f) {
                    let h = (0, a(682985).uB)(m, a(432376).A),
                        v = (0, a(960253).I)(() => ({
                            dialog: {
                                position: "relative",
                                zIndex: 1,
                                maxHeight: "100%",
                                boxShadow: a(632079).Tj.shadow.outline.scrim,
                                borderRadius: 12,
                                overflow: "hidden",
                                ...c,
                                background: i ? a(632079).Tj.popoverWaxPaperBackground : n ? a(632079).Tj.background.secondary : a(632079).Tj.background.elevated,
                                backdropFilter: i ? "blur(40px)" : "none",
                                WebkitBackdropFilter: i ? "blur(40px)" : "none"
                            }
                        }), [c, i, n]);
                    return (0, r.jsxs)("div", {
                        "aria-modal": !0,
                        role: "dialog",
                        className: "notion-dialog",
                        tabIndex: -1,
                        "aria-label": o,
                        "aria-labelledby": s,
                        "aria-describedby": d,
                        style: v.dialog,
                        ref: f,
                        children: [e ? (0, r.jsx)(a(226512).R, {
                            onClick: t
                        }) : void 0, (0, r.jsx)(l, {
                            children: u,
                            disableAnimation: p,
                            preventHideChildrenWhileOpening: g,
                            store: h
                        })]
                    })
                }),
                d = i.forwardRef(function({
                    open: e,
                    keepFocus: t = !1,
                    disableAnimation: i,
                    showCloseIcon: n,
                    onDismiss: o,
                    isWaxPaper: l,
                    isWash: d,
                    ariaLabel: c,
                    ariaLabelledBy: u,
                    ariaDescribedBy: p,
                    innerStyle: g,
                    children: m,
                    preventHideChildrenWhileOpening: f,
                    style: h,
                    className: v,
                    backgroundStyle: y,
                    transitionAppearance: b,
                    store: x
                }, S) {
                    let w = (0, a(336995).A)(t),
                        k = function(e) {
                            switch (e) {
                                case "none":
                                    return {
                                        animate: {},
                                        initial: {},
                                        exit: {}
                                    };
                                case "modal":
                                    return {
                                        animate: {
                                            scale: 1
                                        },
                                        initial: {
                                            scale: .97
                                        },
                                        exit: {
                                            scale: .97
                                        }
                                    };
                                case "full-screen":
                                    return {
                                        initial: {
                                            translateY: 5,
                                            opacity: 0
                                        },
                                        animate: {
                                            translateY: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        config: {
                                            duration: 650,
                                            timingFunction: "ease-in-out"
                                        }
                                    };
                                default:
                                    (0, a(722371).HB)(e)
                            }
                        }(b),
                        {
                            mobileTopPadding: I,
                            mobileBottomPadding: A
                        } = function() {
                            let {
                                WindowSizeStore: e
                            } = (0, a(533992).v3)();
                            return {
                                mobileTopPadding: (0, a(682985).K8)(() => e.getSafePaddingTopPx(0), [e]),
                                mobileBottomPadding: (0, a(571354).n)()
                            }
                        }();
                    return (0, r.jsxs)("div", {
                        style: {
                            paddingTop: I,
                            paddingBottom: A,
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: e ? "auto" : "none",
                            ...h
                        },
                        ...w,
                        className: v,
                        ref: S,
                        children: [(0, r.jsx)(a(781036).B, {
                            backgroundStyle: y,
                            onDismiss: o
                        }), (0, r.jsx)(a(654979).A, {
                            tag: s,
                            skip: i,
                            visible: e,
                            ...k,
                            forceCompositeLayer: !0,
                            showCloseIcon: n,
                            onDismiss: o,
                            isWaxPaper: l,
                            isWash: d,
                            ariaLabel: c,
                            ariaLabelledBy: u,
                            ariaDescribedBy: p,
                            style: g,
                            children: m,
                            disableAnimation: i,
                            preventHideChildrenWhileOpening: f,
                            store: x
                        })]
                    })
                })
        },
        561599: (e, t, a) => {
            a.d(t, {
                A: () => o
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        openModals: new Set
                    }
                }
            }
            let r = new n,
                o = r;
            (0, a(202146).exposeDebugValue)("GlobalModalStore", r)
        },
        565719: (e, t, a) => {
            a.d(t, {
                w: () => i
            });

            function i(e) {
                return "v1" === e || "v2" === e || "v3" === e
            }
        },
        574657: (e, t, a) => {
            a.r(t), a.d(t, {
                checkmarkCircleFillSmallIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.94 1.95 12.11 12.11",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M1.95 8a6.05 6.05 0 1 1 12.1 0 6.05 6.05 0 0 1-12.1 0m8.444-1.623a.55.55 0 0 0-.944-.566L7.443 9.156 6.339 7.87a.55.55 0 1 0-.835.716l1.6 1.867a.55.55 0 0 0 .89-.075z"
                    })
                },
                n = (0, a(104509).wt)("checkmarkCircleFillSmall", i, "fillSmall")
        },
        587832: (e, t, a) => {
            async function i(e) {
                let {
                    index: t
                } = await (0, a(901282).Fr)(), i = e.map(e => {
                    var t;
                    let i = null == (t = e.getPublishedArtifactStore()) ? void 0 : t.getData(),
                        r = e.getDraftData(),
                        o = i ? ? r;
                    return {
                        id: e.id,
                        text: n(e),
                        inits: (0, a(168534).IM)((null == o ? void 0 : o.name) || ""),
                        block: e
                    }
                });
                return await t.addAllAsync(i), t
            }

            function n(e) {
                return e.getName() ? ? ""
            }

            function r(e) {
                let {
                    query: t,
                    workflowStores: i,
                    limit: n = 10
                } = e;
                return t && 0 !== t.trim().length ? (0, a(821048).Ay)(t, i, e => e.getName() ? ? "", {
                    normalizeFuzzyScore: !0
                }).slice(0, n) : i.slice(0, n)
            }

            function o(e) {
                let {
                    query: t,
                    agentIndex: a,
                    limit: i = 100
                } = e;
                return t && 0 !== t.trim().length ? a.search(t, {
                    prefix: !0,
                    fields: ["text", "inits"]
                }).slice(0, i).map(e => e.block) : []
            }
            a.r(t), a.d(t, {
                createCustomAgentSearchIndex: () => i,
                getWorkflowSearchText: () => n,
                searchWorkflowStores: () => r,
                searchWorkflowStoresWithMinisearchIndex: () => o
            }), a(581454)
        },
        598974: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                notionTemplateIcon: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.58 3 16.83 14",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            fill: "#FFB110",
                            fillRule: "evenodd",
                            d: "M6.014 16.338a4.43 4.43 0 0 0 4.43-4.48H8.88c-.254 0-.512 0-.732-.018a2.3 2.3 0 0 1-.86-.226 2.24 2.24 0 0 1-.979-.979 2.3 2.3 0 0 1-.226-.86 10 10 0 0 1-.018-.731V7.48a4.44 4.44 0 0 1 2.297.678 4.431 4.431 0 0 0-6.777 3.751 4.43 4.43 0 0 0 4.43 4.43z",
                            clipRule: "evenodd"
                        }), (0, i.jsx)("path", {
                            fill: "#097FE8",
                            d: "M12.902 11.044c.463-.802.694-1.203.997-1.338a1.02 1.02 0 0 1 .828 0c.302.135.534.536.996 1.338l2.028 3.512c.463.802.695 1.203.66 1.532-.03.287-.18.548-.414.718-.267.194-.73.194-1.656.194h-4.057c-.925 0-1.388 0-1.656-.194a1.02 1.02 0 0 1-.414-.718c-.035-.329.197-.73.66-1.532z"
                        }), (0, i.jsx)("path", {
                            fill: "#F64932",
                            fillRule: "evenodd",
                            d: "M7.287 4.63c0-.571 0-.856.111-1.074.098-.192.254-.347.445-.445C8.061 3 8.346 3 8.916 3h4.38c.57 0 .854 0 1.072.111.191.098.347.253.445.445.11.218.11.503.11 1.073v3.852a2.24 2.24 0 0 0-1.52.109c-.46.204-.75.56-.94.83q-.318.472-.595.97l-.024.043-.118.203h-2.81c-.57 0-.855 0-1.073-.11a1 1 0 0 1-.445-.445c-.11-.218-.11-.503-.11-1.074z",
                            clipRule: "evenodd"
                        })]
                    })
                },
                r = (0, a(104509).wt)("notionTemplate", n, "default")
        },
        609328: (e, t, a) => {
            a.d(t, {
                P: () => r
            }), a(944114), a(296540);
            var i = a(474848);
            let n = (0, a(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function r({
                environment: e,
                title: t,
                ...o
            }) {
                var l, s, d;
                let c = [],
                    u = null == (l = o.error) ? void 0 : l.stack;
                if (u) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (s = t.replay) || null == (d = s.terminate) || d.call(s)), c.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, a(969899).Nu)())({
                                environment: e,
                                stringValue: u,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${u}
		</code></pre>`,
                                copiedMessage: n.errorStacktraceCopied
                            })
                        }
                    })
                }
                c.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, i.jsx)(a(109939).sA, { ...a(647095)._0.dismissButtonLabel
                    }),
                    onAccept: a(763230).D_
                }), a(647095).ui({
                    message: t,
                    description: (0, i.jsx)(a(149795).dD, { ...o
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: c
                })
            }
        },
        616922: (e, t, a) => {
            a.d(t, {
                eQ: () => g,
                hJ: () => k,
                Ay: () => m,
                Uo: () => v,
                XE: () => S
            }), a(944114), a(898992), a(823215), a(581454);
            var i = a(296540);
            let n = new(a(815048)).O2("AIMNLiveCollabCallout", async () => await a.e(35920).then(a.bind(a, 966085))),
                r = (0, a(815048)._h)(n, e => e.AIMNLiveCollabCallout);
            var o = () => a(225476);
            let l = function(e) {
                    let t = (0, a(533992).v3)(),
                        n = (0, i.useRef)(),
                        r = (0, a(396805).T)(),
                        o = (0, i.useCallback)(async () => {
                            if (await a(941701).transactionQueue.awaitRecordTransaction(e.blockStore.pointer), !r.current) return;
                            let i = (0, a(568479).Ws)(e.blockStore.id);
                            n.current = a(48091).Ay.addListener({
                                key: i,
                                authorizationToken: void 0,
                                listener: a(381453).nF(() => a(469589).updatePageVisits(t, {
                                    blockStore: e.blockStore,
                                    pageVisitStore: e.pageVisitStore,
                                    incremental: !0,
                                    limit: e.limit
                                }), 1e3),
                                subscriptionId: void 0
                            })
                        }, [t, r, e.blockStore, e.limit, e.pageVisitStore]),
                        l = (0, i.useCallback)(() => {
                            n.current && (a(48091).Ay.removeListener(n.current), n.current = void 0)
                        }, []);
                    return (0, i.useEffect)(() => (o(), l), [o, l]), null
                },
                s = new(a(815048)).O2("AvatarHoverCard", async () => await Promise.all([a.e(21969), a.e(47414), a.e(98821), a.e(77470), a.e(6608)]).then(a.bind(a, 691631))),
                d = (0, a(815048)._h)(s, e => e.AvatarHoverCard),
                c = new(a(815048)).O2("MoreViewersHoverCard", async () => await a.e(46118).then(a.bind(a, 479676))),
                u = (0, a(815048)._h)(c, e => e.MoreViewersHoverCard);
            var p = a(474848);
            let g = 22,
                m = function({
                    pageVisitStore: e,
                    presenceStore: t,
                    rootStore: i,
                    maxUsers: n
                }) {
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(a(315144).a, {
                            rootStore: i
                        }), (0, p.jsx)(k, {
                            rootStore: i,
                            pageVisitStore: e,
                            presenceStore: t,
                            maxUsers: n,
                            isShowingInFeed: !1
                        }), (0, p.jsx)(l, {
                            blockStore: i,
                            pageVisitStore: e,
                            limit: 1 + (n ? ? 5) + 25
                        })]
                    })
                };

            function f(e) {
                return a(381453).Ul(e, e => e.activityTimestampNearestMinuteMs)
            }

            function h(e, t) {
                return a(807825).L.createChildStore(t, {
                    table: a(832375).oo9,
                    id: e
                })
            }

            function v(e) {
                let {
                    environment: t,
                    isShowingTabBar: i,
                    isShowingInFeed: n
                } = e;
                return { ...(0, a(1249).g)({
                        noDrag: t.device.isElectron && !i
                    }),
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    flexDirection: "row-reverse",
                    marginInlineStart: 8,
                    paddingInlineEnd: 6,
                    transform: "translateZ(0)",
                    ...n && {
                        maxHeight: 54,
                        paddingBottom: 12
                    }
                }
            }

            function y({
                hiddenUsers: e,
                hiddenUsersCount: t,
                hasMore: a,
                rootStore: i,
                environment: n
            }) {
                return (0, p.jsx)(u, {
                    trigger: (0, p.jsx)(x, {
                        hiddenUsersCount: t,
                        environment: n,
                        rootStore: i
                    }),
                    viewers: e,
                    totalCount: t,
                    rootStore: i
                })
            }
            let b = {
                paddingInline: 8,
                marginInlineStart: 4,
                marginInlineEnd: -10
            };

            function x({
                hiddenUsersCount: e,
                environment: t,
                rootStore: n
            }) {
                let r = (0, i.useCallback)(() => {
                    (0, a(418001).j)({
                        environment: t,
                        blockStore: n,
                        tabToOpen: a(449473).tF.Updates,
                        from: "more_menu"
                    }), a(449473).B8.setState({ ...a(449473).B8.state,
                        updatesSubTab: a(449473).VE.Analytics
                    })
                }, [t, n]);
                return (0, p.jsx)(a(988022).p, {
                    style: b,
                    size: "sm",
                    shape: "pill",
                    colorPalette: "gray",
                    onClick: r,
                    children: (0, p.jsx)(a(109939).sA, {
                        defaultMessage: "{hiddenUsersCount, plural, one {+{hiddenUsersCount}} other {+{hiddenUsersCount}}}",
                        id: "topbar.presenceIndicator.hiddenUsers.otherCount.message",
                        values: {
                            hiddenUsersCount: e
                        }
                    })
                })
            }

            function S(e, t) {
                return (0, a(960253).I)(() => {
                    let i = {
                            width: g,
                            height: g,
                            borderRadius: g
                        },
                        n = e(a(632079).Tj);
                    return {
                        button: {
                            transition: "all 0.2s ease",
                            transform: "scale(1)"
                        },
                        buttonHovered: {
                            transform: "scale(1.15)",
                            background: "none"
                        },
                        buttonPressed: {
                            transform: "scale(0.9)",
                            background: "none"
                        },
                        uiUserAvatarStyles: { ...i
                        },
                        avatarInnerOutline: { ...i,
                            outlineStyle: "solid",
                            outlineColor: a(632079).Tj.UIUserAvatarInnerOutline,
                            outlineWidth: .5,
                            outlineOffset: -.5
                        },
                        avatarBorder: t ? { ...i,
                            outlineStyle: "solid",
                            outlineColor: n,
                            outlineWidth: 1.5,
                            outlineOffset: -.5
                        } : {},
                        avatarOuterOutline: { ...i,
                            outlineStyle: "solid",
                            outlineColor: t ? a(632079).Tj.background.primary : a(632079).Tj.UIUserAvatarIdleOutline,
                            outlineWidth: .5,
                            outlineOffset: +!!t,
                            backgroundColor: a(632079).Tj.background.primary,
                            marginInlineEnd: -6,
                            position: "relative"
                        },
                        initialColor: {
                            color: t ? n : a(632079).Tj.icon.secondary
                        }
                    }
                }, [e, t])
            }

            function w(e) {
                let {
                    userData: t,
                    rootStore: n,
                    isShowingInFeed: r = !1
                } = e, l = (0, a(533992).v3)(), {
                    userId: s
                } = t, c = (0, o().dp)(l, t), u = (0, a(514214).MF)(s), {
                    userStore: m,
                    showAvatar: f
                } = (0, a(682985).K8)(() => {
                    let e = h(s, n);
                    return {
                        userStore: e,
                        showAvatar: (e.isDefined() || u) && !e.getIsSuspended()
                    }
                }, [s, n, u]), v = (0, a(682985).K8)(() => n.getSpaceStore(), [n]), y = S((0, i.useCallback)(e => (0, a(514214).MF)(s) ? a(632079).Tj.icon.secondary : s === l.currentUser.id ? a(632079).Tj.border.accentPrimary : (0, a(632079).Nq)(s, e), [l.currentUser.id, s]), c);
                if (!f) return null;
                let b = (0, p.jsx)("div", {
                        style: y.avatarOuterOutline,
                        children: (0, p.jsx)("div", {
                            style: y.avatarBorder,
                            children: (0, p.jsx)(a(321753).A, {
                                iconStyle: y.avatarInnerOutline,
                                userStore: u ? a(268033).px : m,
                                style: y.uiUserAvatarStyles,
                                isOffline: !c,
                                size: g,
                                avatarShouldShowShadow: !r,
                                initialOverrideStyle: y.initialColor
                            })
                        })
                    }),
                    x = c && t.blockId ? (0, p.jsx)(a(64960).Ay, {
                        onClick: () => (0, a(250717).B)([t.blockId ? ? ""], !0, l),
                        style: y.button,
                        hoveredStyle: y.buttonHovered,
                        pressedStyle: y.buttonPressed,
                        children: b
                    }) : b;
                if (r || !l.currentUser.id) return x;
                let w = function({
                    userData: e,
                    isPresent: t,
                    currentUserId: i,
                    userId: n,
                    isShowingInFeed: r
                }) {
                    if (i !== n) {
                        if (t) return e.blockId && !r ? (0, p.jsx)(a(109939).sA, {
                            defaultMessage: "Viewing now. Click to see where they are.",
                            id: "topbar.presenceIndicator.viewingNowWithLocation.tooltip"
                        }) : (0, p.jsx)(a(109939).sA, {
                            defaultMessage: "Viewing now",
                            id: "topbar.presenceIndicator.viewingNow.tooltip"
                        });
                        if (e.activityTimestampNearestMinuteMs) return (0, p.jsx)(a(109939).sA, {
                            defaultMessage: "Last viewed {timeFromNow}",
                            id: "topbar.presenceIndicator.lastViewedTime.tooltip",
                            values: {
                                timeFromNow: (0, a(850640).v9)(Math.min(e.activityTimestampNearestMinuteMs, Date.now()), a(849917).locale)
                            }
                        })
                    }
                }({
                    userData: t,
                    isPresent: c,
                    currentUserId: l.currentUser.id,
                    userId: s,
                    isShowingInFeed: r
                });
                return (0, p.jsx)(d, {
                    trigger: x,
                    userStore: m,
                    header: w,
                    spaceStore: v
                })
            }

            function k(e) {
                let {
                    rootStore: t,
                    pageVisitStore: n,
                    presenceStore: l,
                    maxUsers: s,
                    isShowingInFeed: d
                } = e, c = (0, a(533992).v3)(), u = c.currentUser.id, g = (0, a(682985).K8)(() => {
                    let e = c.currentUser.id;
                    if (!e) return;
                    let t = d || (0, o().xm)(l) ? (0, o().PZ)({
                            pageVisitStore: n,
                            presenceStore: l
                        }) : [],
                        a = (null == n ? void 0 : n.state.totalCount) ? ? t.length,
                        i = [],
                        r = [];
                    for (let n of t)
                        if (n.userId === e) {
                            a--;
                            continue
                        } else(0, o().dp)(c, n) ? i.push(n) : r.push(n);
                    let u = [...f(i).reverse(), ...f(r).reverse()],
                        p = (s ? ? 5) - 1;
                    return {
                        visibleUsers: u.slice(0, p),
                        hiddenUsers: u.slice(p),
                        totalCount: a,
                        hasMore: !!(null == n ? void 0 : n.state.hasMore)
                    }
                }, [n, l, c, d, s], {
                    equalityFn: a(381453).n4
                }), {
                    visibleUsers: m,
                    hiddenUsers: b,
                    hiddenUsersCount: x,
                    hasMoreHiddenUsers: S,
                    isEveryUserStoreReady: k
                } = (0, a(682985).K8)(() => {
                    if (!u) return {};
                    let {
                        visibleUsers: e = [],
                        hiddenUsers: i = []
                    } = g ? ? {}, n = [u, ...e.map(e => e.userId), ...i.map(e => e.userId)].map(e => h(e, t));
                    return {
                        visibleUsers: e,
                        hiddenUsers: i,
                        hiddenUsersCount: Number(null == g ? void 0 : g.totalCount) - e.length,
                        hasMoreHiddenUsers: !!(null == g ? void 0 : g.hasMore),
                        isEveryUserStoreReady: n.every(e => e.isReady() || (0, a(514214).MF)(e.id))
                    }
                }, [u, g, t]), I = (0, i.useRef)(null), A = (0, a(682985).K8)(() => a(218744).default.getEligibleGroup({
                    experimentId: "adoption_aimn_live_collab_discovery_nudge_video",
                    disableExposureLogging: !0
                }), []), M = (0, a(682985).O$)(a(584257).b), j = (0, a(314331).n)(t), C = !(0, a(682985).O$)(a(205885).e);
                if (!u || !g || !k || C || u !== t.userId) return null;
                if (0 === m.length && 0 === b.length) return j ? (0, p.jsx)("div", {
                    style: v({
                        environment: c,
                        isShowingTabBar: M,
                        isShowingInFeed: d
                    }),
                    children: (0, p.jsx)(a(346899).h, {
                        enableClickToScroll: !0,
                        rootStore: t
                    })
                }) : null; {
                    let e = [...m];
                    return e.reverse(), (0, p.jsxs)("div", {
                        ref: I,
                        style: v({
                            environment: c,
                            isShowingTabBar: M,
                            isShowingInFeed: d
                        }),
                        children: [x > 0 ? (0, p.jsx)(y, {
                            rootStore: t,
                            hiddenUsers: b,
                            hiddenUsersCount: x,
                            hasMore: S,
                            environment: c
                        }) : void 0, e.map(e => (0, p.jsx)(w, {
                            userData: e,
                            rootStore: t
                        }, e.userId)), d ? void 0 : (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(w, {
                                rootStore: t,
                                userData: {
                                    userId: u,
                                    present: !0
                                }
                            }), (0, p.jsx)(a(346899).h, {
                                enableClickToScroll: !0,
                                rootStore: t
                            }), void 0 !== A ? (0, p.jsx)(r, {
                                origin: I
                            }) : void 0]
                        })]
                    })
                }
            }
        },
        653738: (e, t, a) => {
            a.d(t, {
                y: () => i
            }), a(898992), a(354520), a(581454);
            async function i(e) {
                let {
                    environment: t,
                    collectionViewBlockStore: i,
                    spaceStore: n,
                    parentStore: r,
                    query: o,
                    limit: l,
                    requireEditPermissions: s,
                    databaseType: d,
                    searchSessionId: c,
                    peopleBlocksToInclude: u
                } = e, p = [], g = 0;
                if (!o) {
                    let e = t.currentUser.id;
                    if (n) {
                        let i, o = t.idCreator.getSpaceIdCreatorSync(n.id),
                            l = (0, a(639328).FS)({
                                spaceIdCreator: o
                            }),
                            s = (0, a(233075).F)({
                                currentUserId: e,
                                spaceId: n.id
                            });
                        switch (u) {
                            case "none":
                            case "person_profiles":
                                i = s.filter(e => e !== l);
                                break;
                            case "all":
                            case "collection_view_page":
                                i = s;
                                break;
                            default:
                                (0, a(722371).HB)(u)
                        }
                        p = i.map(e => a(356912).m.createChildStore(r, {
                            table: a(832375).VlP,
                            id: e
                        }))
                    }
                    p = [...a(381453).oE(null == i ? void 0 : i.getCollectionViewStores().map(e => e.getCollectionStore())), ...p], d && (p = p.filter(e => {
                        let t = e.getDatabaseType();
                        return !!t && d.includes(t)
                    })), p = a(381453).hS(p, e => e.id).filter(e => !s || e.canEdit())
                }
                let m = await (0, a(893164).E)(t, {
                    query: o,
                    limit: l,
                    source: "collection_settings_source",
                    requireEditPermissions: s,
                    databaseType: d,
                    spaceStore: n,
                    searchSessionId: c,
                    peopleBlocksToInclude: u
                });
                return p = [...p, ...m.results.map(e => a(356912).m.createChildStore(r, {
                    table: a(832375).VlP,
                    id: e
                }))], g = m.total, p = p.filter(e => !(0, a(952592).z)(e) && e.canRead()), await Promise.all(p.map(async e => {
                    await e.load()
                })), {
                    results: a(381453).hS(p, e => e.id).slice(0, l).map(e => e.id),
                    total: g
                }
            }
        },
        665002: (e, t, a) => {
            a.d(t, {
                H: () => s,
                g: () => d
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                    disableHoverAnimations: !1
                },
                o = {
                    disableHoverAnimations: !0
                },
                l = (0, i.createContext)(r);

            function s({
                disableHoverAnimations: e,
                children: t
            }) {
                return (0, n.jsx)(l.Provider, {
                    value: e ? o : r,
                    children: t
                })
            }

            function d() {
                return (0, i.useContext)(l).disableHoverAnimations
            }
            l.displayName = "SidebarItemHoverAnimationContext"
        },
        666236: (e, t, a) => {
            a.d(t, {
                P: () => i
            });

            function i(e) {
                let {
                    environment: t
                } = e;
                (0, a(79266).navigate)({
                    environment: t,
                    url: a(168962).JZ.marketplace,
                    redirect: !1
                })
            }
        },
        678064: (e, t, a) => {
            a.d(t, {
                A: () => n
            }), a(581454), a(296540);
            var i = a(474848);
            let n = function({
                    currentLocale: e,
                    confirm: t,
                    onChange: n,
                    origin: r,
                    showGlobeIcon: l,
                    showVisibleLabelPrefix: s = !1
                }) {
                    (0, a(533992).v3)();
                    let d = (0, a(109939).tz)(),
                        c = (0, a(682985).uB)(void 0, a(510969).A),
                        u = (0, a(83208).X)("polyglot");
                    if (a(986939).A.isMobile) return null;
                    let p = (0, a(601587).Vn)(d)[e].languageNameInThatLanguage,
                        g = l ? a(988022).p : a(548436).A;
                    return (0, i.jsx)(a(656252).A, {
                        onClick: () => {
                            (0, a(104310).u)({
                                event: {
                                    eventName: "change_locale_clicked",
                                    eventProperties: {
                                        origin: r
                                    }
                                }
                            })
                        },
                        ariaPopupType: "listbox",
                        popupType: a(656252).z.Popup,
                        buttonPopupStore: c,
                        ariaLabel: d.formatMessage({
                            id: "languagePicker.popup.ariaLabel",
                            defaultMessage: "Select language"
                        }),
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        content: r => {
                            let l = u ? [...a(619157).fy, ...a(619157).Tf] : [...a(619157).fy],
                                s = [{
                                    key: "languages",
                                    render: e => (0, i.jsx)(a(844565).A, { ...e,
                                        topBorder: 0 !== e.index
                                    }),
                                    items: (0, a(601587).O8)(l, d).map(l => ({
                                        key: l,
                                        render: e => (function(e, t, n, r) {
                                            let {
                                                languageNameInThatLanguage: l,
                                                languageNameInCurrentLanguage: s
                                            } = (0, a(601587).Vn)(r)[e];
                                            return (0, i.jsx)(o, {
                                                label: l,
                                                caption: s,
                                                focused: t,
                                                props: n,
                                                locale: e
                                            })
                                        })(l, e.focused, e, d),
                                        action: () => {
                                            var o, s, c, u, p;
                                            o = l, s = e, c = d, u = t, p = n, s !== o && function(e, t, n, r) {
                                                let {
                                                    languageNameInThatLanguage: o
                                                } = (0, a(601587).Vn)(t)[e];
                                                n ? a(647095).ui({
                                                    showCancel: !0,
                                                    keepFocus: !1,
                                                    message: (0, i.jsx)(a(109939).sA, {
                                                        id: "languagePicker.changeLanguage.confirmationMessage",
                                                        defaultMessage: "Are you sure you want to update the language to {language}?",
                                                        values: {
                                                            language: o
                                                        }
                                                    }),
                                                    items: [{
                                                        label: (0, i.jsx)(a(109939).sA, {
                                                            id: "languagePicker.changeLanguage.updateButton.label",
                                                            defaultMessage: "Update"
                                                        }),
                                                        color: "red",
                                                        onAccept: () => {
                                                            r(e)
                                                        }
                                                    }]
                                                }) : r(e)
                                            }(o, c, u, p), r.close()
                                        }
                                    }))
                                }],
                                c = {
                                    menuType: a(649476).gu.Popup,
                                    width: 240
                                };
                            return (0, i.jsx)(a(747369).A, {
                                className: a(828432).jtA,
                                ...c,
                                children: (0, i.jsx)(a(558045).A, {
                                    type: a(558045).O.Vertical,
                                    role: "listbox",
                                    initialFocus: void 0,
                                    sections: s
                                })
                            })
                        },
                        children: e => (0, i.jsx)(g, {
                            "aria-label": d.formatMessage({
                                id: "languagePicker.ariaLabel",
                                defaultMessage: "Language: {language}"
                            }, {
                                language: p
                            }),
                            colorPalette: l ? "gray" : void 0,
                            iconLeading: l ? a(515388).globeIcon : void 0,
                            iconTrailing: {
                                icon: a(595453).arrowChevronSingleDownSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            },
                            ...e,
                            children: s ? (0, i.jsx)(a(109939).sA, {
                                id: "languagePicker.visibleLabel",
                                defaultMessage: "Language: {language}",
                                values: {
                                    language: p
                                }
                            }) : p
                        })
                    })
                },
                r = {
                    style1: {
                        marginInlineEnd: 0
                    },
                    style2: {
                        color: a(632079).Tj.text.secondary
                    }
                };

            function o(e) {
                return (0, i.jsx)(a(95582).A, { ...e.props,
                    title: (0, i.jsx)(a(4458).fI, {
                        alignItems: "center",
                        children: (0, i.jsx)("div", {
                            style: { ...e.style,
                                ...r.style1
                            },
                            children: e.label
                        })
                    }),
                    caption: e.caption && (0, i.jsx)("span", {
                        style: r.style2,
                        children: e.caption
                    }),
                    shouldWrapCaption: !0
                })
            }
        },
        690004: (e, t, a) => {
            a.d(t, {
                r: () => i
            });
            let i = (0, a(477465).Dv)("importEvernote")
        },
        695142: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowDiagonalUpRightFillIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.16 4.17 11.67 11.67",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M15.825 5.05a.875.875 0 0 0-.875-.875H7.313a.875.875 0 1 0 0 1.75h5.524L4.393 14.37c-.32.32-.303.857.039 1.198.341.342.878.36 1.198.039l8.445-8.444v5.524a.875.875 0 1 0 1.75 0z"
                    })
                },
                n = (0, a(104509).wt)("arrowDiagonalUpRightFill", i, "fill")
        },
        697198: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                lockSmallIcon: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.17 1.59 9.66 12.45",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 8.1a1.125 1.125 0 0 0-.525 2.12v.93a.525.525 0 1 0 1.05 0v-.93A1.125 1.125 0 0 0 8 8.1"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.6a3.25 3.25 0 0 0-3.25 3.25v1a2.026 2.026 0 0 0-1.575 1.975v4.2c0 1.118.907 2.025 2.025 2.025h5.6a2.025 2.025 0 0 0 2.025-2.025v-4.2c0-.964-.673-1.77-1.575-1.975v-1A3.25 3.25 0 0 0 8 1.6M6 4.85a2 2 0 1 1 4 0v.95H6zM4.425 7.825c0-.428.347-.775.775-.775h5.6c.428 0 .775.347.775.775v4.2a.775.775 0 0 1-.775.775H5.2a.775.775 0 0 1-.775-.775z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("lockSmall", n, "small")
        },
        710426: (e, t, a) => {
            a.d(t, {
                Ay: () => r,
                MR: () => l
            }), a(18107), a(967357), a(898992), a(354520), a(581454);
            var i = a(296540),
                n = a(474848);
            let r = i.memo(function(e) {
                let {
                    store: t,
                    from: i,
                    type: r,
                    canEditItem: l,
                    itemDepth: s,
                    isHovered: d,
                    isFocused: c,
                    onToggle: u
                } = e, g = a(986939).A.isMobile || d || c, m = (0, a(682985).K8)(() => {
                    var e;
                    let i = (0, a(162782).s)(t),
                        n = t.isPlaceholderWorkflowTemplateBlock(),
                        r = null == (e = t.getCollectionStoreIfSingleSource()) ? void 0 : e.isSyncedCollection(),
                        o = t.isPersonProfile(),
                        s = t.isPeopleCollectionViewPage();
                    return !!(t.getType() && l && !i && !n && !r && !o && !s)
                }, [t, l]), f = function(e) {
                    let {
                        showRightIcons: t
                    } = e;
                    return (0, a(960253).I)(() => ({
                        iconContainer: {
                            display: "flex",
                            paddingInlineStart: 3,
                            ...t ? {} : { ...a(69916).Qg,
                                display: "block"
                            }
                        }
                    }), [t])
                }({
                    showRightIcons: g
                });
                return r === a(171231).yy ? null : (0, n.jsx)("div", {
                    style: f.iconContainer,
                    children: "library" === i ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(p, {
                            store: t,
                            from: i,
                            type: e.type,
                            itemIndex: e.itemIndex,
                            itemDepth: s
                        }), m ? (0, n.jsx)(o, {
                            store: t,
                            onToggle: u,
                            isTopLevelItem: 0 === s,
                            from: i,
                            type: r
                        }) : void 0]
                    })
                })
            });

            function o(e) {
                let {
                    store: t,
                    onToggle: i,
                    isTopLevelItem: r,
                    from: o,
                    type: l
                } = e, d = (0, a(533992).v3)(), c = (0, a(109939).tz)(), p = (0, a(682985).K8)(() => t.isCollectionView(), [t]), g = (0, a(682985).K8)(() => t.getOwnedAndLinkedCollectionStores(), [t]), m = (0, a(682985).K8)(() => {
                    var e;
                    let i = null == (e = t.getCollectionViewStores().at(0)) ? void 0 : e.id;
                    if (!i) return;
                    let n = a(547131).p.createChildStore(t, {
                        table: a(832375).Gy1,
                        id: i
                    });
                    return null == n ? void 0 : n.getFormatStore().getValue()
                }, [t]), f = c.formatMessage(a(925021).v.addAPageInside);
                return p && !m && 0 === g.length ? (0, n.jsx)(s, {
                    disabled: !0
                }) : g.length <= 1 ? (0, n.jsx)(a(51831).m, {
                    content: () => f,
                    placement: "bottom",
                    children: e => {
                        let c = { ...e,
                            onClick: e => {
                                var n;
                                let s = (null == (n = g[0]) ? void 0 : n.getParentBlockStore()) ? ? t;
                                a(245757).ru({
                                    store: s,
                                    shouldNavigateToSource: !1,
                                    environment: d,
                                    analytics: {
                                        from: o,
                                        type: l
                                    },
                                    toggleOptions: {
                                        onToggle: i,
                                        isTopLevelItem: r
                                    }
                                })
                            }
                        };
                        return (0, n.jsx)(s, {
                            events: c
                        })
                    }
                }) : (0, n.jsx)(a(51831).m, {
                    content: () => f,
                    placement: "bottom",
                    children: e => (0, n.jsx)(a(656252).A, {
                        popupType: a(986939).A.isMobile ? a(656252).z.BottomSheet : a(656252).z.Popup,
                        content: e => (0, n.jsx)(u, {
                            blockStore: t,
                            parent: e,
                            from: o,
                            type: l
                        }),
                        children: t => (0, n.jsx)(s, {
                            events: (0, a(63390).A)(e, t)
                        })
                    })
                })
            }
            let l = {
                button: a(986939).A.isMobile ? {
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

            function s(e) {
                let t = (0, a(109939).tz)();
                return (0, n.jsx)(a(64960).Ay, {
                    ariaLabel: t.formatMessage(a(925021).v.addAPageInside),
                    style: l.button,
                    disabled: e.disabled,
                    disabledFeedback: e.disabled,
                    ...e.events,
                    children: (0, n.jsx)(a(16275).I, {
                        icon: a(638501).plusSmallIcon,
                        size: "sm",
                        colorVariant: a(986939).A.isMobile ? "tertiary" : "secondary"
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
                blockStore: r
            }) {
                let o = (0, a(682985).K8)(() => t.getIcon(), [t]),
                    l = (0, a(682985).K8)(() => {
                        var e;
                        return (null == (e = t.getParentBlockStore()) ? void 0 : e.id) !== r.id
                    }, [t, r]);
                return (0, n.jsx)(a(95582).A, { ...e,
                    disabled: i,
                    disabledFeedback: !0,
                    title: (0, n.jsx)("div", {
                        style: d,
                        children: (0, n.jsx)(a(627918).A, {
                            store: t
                        })
                    }),
                    icon: (0, n.jsx)(a(734914).A, {
                        icon: o,
                        size: 14,
                        isEmptyPage: !1,
                        isAlias: l,
                        iconRecordCategory: "collection"
                    })
                })
            }

            function u(e) {
                let {
                    blockStore: t,
                    parent: i,
                    from: r,
                    type: o
                } = e, l = (0, a(533992).v3)(), s = (0, a(682985).K8)(() => t.getOwnedAndLinkedCollectionStores().filter(e => !e.isSyncedCollection()), [t]), d = (0, a(682985).K8)(() => s.map(e => !a(352441).Q.getData(l, {
                    collectionId: e.id,
                    spaceId: e.getSpaceId()
                })), [s, l]), u = {
                    menuType: a(986939).A.isMobile ? a(649476).gu.Modal : a(649476).gu.Popup,
                    right: a(986939).A.isMobile ? (0, n.jsx)(a(109939).sA, { ...a(789722).W.done
                    }) : void 0
                }, p = {
                    key: "collections",
                    render: e => (0, n.jsx)(a(844565).A, { ...e,
                        title: (0, n.jsx)(a(109939).sA, {
                            defaultMessage: "Add to",
                            id: "sidebarItem.addAPageInside.popup.addTo"
                        })
                    }),
                    items: s.map((e, i) => ({
                        key: e.id,
                        render: a => (0, n.jsx)(c, {
                            itemProps: a,
                            store: e,
                            disabled: d[i],
                            blockStore: t
                        }),
                        action: t => {
                            a(245757).ru({
                                store: e,
                                environment: l,
                                shouldNavigateToSource: !0,
                                analytics: {
                                    from: r,
                                    type: o
                                }
                            })
                        }
                    }))
                };
                return (0, n.jsx)(a(747369).A, { ...u,
                    children: (0, n.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        onAccept: i.close,
                        initialFocus: void 0,
                        sections: [p]
                    })
                })
            }

            function p(e) {
                let {
                    store: t,
                    from: i,
                    type: r,
                    itemDepth: o,
                    itemIndex: s
                } = e, d = (0, a(109939).tz)(), c = (0, a(533992).v3)(), u = e => {
                    let n = (0, a(297311).U)(t);
                    (0, a(472709).L)({
                        environment: c,
                        store: t
                    }), a(899964).it({
                        environment: c,
                        stores: [t],
                        left: e.clientX,
                        top: e.clientY,
                        showInput: !1,
                        actionSectionGroupKey: "sidebar_outliner",
                        analyticsFrom: "sidebar_more_menu",
                        optionalAnalyticsProperties: {
                            teamStore: n,
                            type: 0 === o ? "top_level" : "nested",
                            outliner_type: r,
                            outliner_position: s,
                            outliner_depth: o,
                            outliner_location: "main_sidebar" === i ? "sidebar" : "library" === i ? "library" : "pane"
                        }
                    })
                }, p = "bookmarks" === r ? d.formatMessage({
                    defaultMessage: "Remove, rename, and more…",
                    id: "sidebarItem.favoritedPageMenuButton.tooltip"
                }) : "myMeetings" === r ? d.formatMessage({
                    defaultMessage: "Copy, move, and more…",
                    id: "sidebarItem.meetingNoteMenuButton.tooltip"
                }) : d.formatMessage({
                    defaultMessage: "Delete, duplicate, and more…",
                    id: "sidebarItem.pageMenuButton.tooltip"
                });
                return (0, n.jsx)(a(51831).m, {
                    content: () => p,
                    placement: "bottom",
                    children: e => (0, n.jsx)(a(64960).Ay, {
                        ariaLabel: p,
                        style: l.button,
                        onClick: u,
                        ...e,
                        children: (0, n.jsx)(a(16275).I, {
                            icon: a(361226).ellipsisSmallIcon,
                            size: "sm",
                            colorVariant: a(986939).A.isMobile ? "tertiary" : "secondary"
                        })
                    })
                })
            }
        },
        731632: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {}
            let r = new n
        },
        734914: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                wrap: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    flexGrow: 0,
                    width: a(986939).A.isMobile ? 28 : 22,
                    height: a(986939).A.isMobile ? 24 : 18,
                    position: "relative"
                }
            };

            function r(e) {
                let {
                    icon: t,
                    isAlias: r,
                    isEmptyPage: o,
                    iconStyle: l,
                    size: s,
                    iconRecordCategory: d
                } = e;
                return (0, i.jsxs)("div", {
                    style: n.wrap,
                    children: [(0, i.jsx)(a(569553).B6, {
                        disabled: !0,
                        icon: t,
                        iconRecordCategory: d,
                        isEmptyPage: o,
                        size: s ? ? 19,
                        style: l
                    }), r ? (0, i.jsx)(a(321825).H, {
                        size: "sm"
                    }) : void 0]
                })
            }
        },
        736620: (e, t, a) => {
            a.d(t, {
                M: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.37 1.53 9.26 12.92",
                    svg: (0, a(474848).jsx)("path", {
                        d: "m10.225 6.095-.11-1.14.18-.16c.64-.57 1.01-1.4 1.01-2.26v-.38c0-.34-.28-.62-.62-.62h-5.36c-.34 0-.62.28-.62.62v.38c0 .86.37 1.68 1.01 2.26l.18.16-.11 1.14c-1.44.58-2.41 2-2.41 3.55v.5c0 .34.28.62.63.62h3.23v2.34c0 .14.03.27.09.4l.35.75c.05.11.14.18.26.2h.06c.09 0 .19-.04.26-.11l.06-.08.35-.77c.06-.12.09-.26.09-.4v-2.34h3.26c.34 0 .62-.28.62-.62v-.5c0-1.56-.96-2.98-2.41-3.55zm-3.66 1.05c.23-.08.4-.29.42-.53l.18-1.85c.02-.2-.06-.4-.21-.53l-.42-.38c-.32-.28-.52-.66-.58-1.08h4.07c-.06.42-.26.8-.58 1.08l-.42.38c-.15.13-.23.33-.21.53l.18 1.85c.02.24.19.45.42.53l.19.06c1 .34 1.7 1.27 1.75 2.32h-6.73c.05-1.05.74-1.98 1.75-2.32z"
                    })
                },
                n = (0, a(104509).wt)("pinSmall", i, "small")
        },
        741489: (e, t, a) => {
            a.d(t, {
                j: () => n
            }), a(296540);
            var i = a(474848);

            function n({
                title: e,
                titleId: t,
                byline: r,
                bylineId: o,
                badge: l
            }) {
                return (0, i.jsxs)(a(4458).VP, {
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 4,
                    children: [(0, i.jsxs)(a(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        children: [(0, i.jsx)(a(111010).D, {
                            id: t,
                            styleKey: a(986939).A.isMobile ? "captionMedium" : "bodyMedium",
                            colorVariant: "primary",
                            children: e
                        }), l]
                    }), r ? (0, i.jsx)(a(111010).D, {
                        id: o,
                        styleKey: a(986939).A.isMobile ? "captionSmRegular" : "bodySmRegular",
                        colorVariant: "secondary",
                        style: {
                            textWrap: "pretty"
                        },
                        children: r
                    }) : void 0]
                })
            }
        },
        746204: (e, t, a) => {
            a.d(t, {
                w: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                n = (0, a(104509).wt)("arrowChevronSingleLeftFill", i, "fill")
        },
        748869: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                linkSmallIcon: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.19 12.19",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M12.848 2.8a3.145 3.145 0 0 0-4.448 0L6.918 4.283a.625.625 0 0 0 .884.883l1.482-1.482c.74-.74 1.94-.74 2.68 0l.294.294c.74.74.74 1.94 0 2.68l-1.482 1.483a.625.625 0 1 0 .884.884l1.482-1.482a3.145 3.145 0 0 0 0-4.449z"
                        }), (0, i.jsx)("path", {
                            d: "M10.472 5.47a.625.625 0 0 0-.884 0L5.229 9.83a.625.625 0 1 0 .884.883l4.359-4.359a.625.625 0 0 0 0-.883"
                        }), (0, i.jsx)("path", {
                            d: "M5.167 6.918a.625.625 0 0 0-.884 0L2.8 8.4a3.146 3.146 0 0 0 0 4.448l.294.294a3.145 3.145 0 0 0 4.449 0l1.482-1.482a.625.625 0 0 0-.884-.884L6.66 12.258c-.74.74-1.94.74-2.68 0l-.295-.294c-.74-.74-.74-1.94 0-2.68L5.167 7.8a.625.625 0 0 0 0-.883"
                        })]
                    })
                },
                r = (0, a(104509).wt)("linkSmall", n, "small")
        },
        766970: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                xMarkFillIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                n = (0, a(104509).wt)("xMarkFill", i, "fill")
        },
        781036: (e, t, a) => {
            a.d(t, {
                B: () => r
            });
            var i = a(296540),
                n = a(474848);

            function r({
                backgroundStyle: e,
                onDismiss: t
            }) {
                (0, i.useLayoutEffect)(() => {
                    if ((null == e ? void 0 : e.background) !== "transparent") return requestAnimationFrame(() => {
                        (0, a(960831).j)(!0)
                    }), a(164177).j.setState({
                        open: !0
                    }), () => {
                        (0, a(960831).j)(!1), a(164177).j.setState({
                            open: !1
                        })
                    }
                }, [null == e ? void 0 : e.background]);
                let o = (0, a(960253).I)(() => ({
                    underlay: function(e) {
                        let {
                            backgroundStyle: t
                        } = e;
                        return {
                            position: "absolute",
                            top: 0,
                            insetInlineStart: 0,
                            bottom: 0,
                            insetInlineEnd: 0,
                            background: a(632079).Tj.modalUnderlayBackground,
                            ...t
                        }
                    }({
                        backgroundStyle: e
                    })
                }), [e]);
                return (0, n.jsx)("div", {
                    role: "presentation",
                    style: o.underlay,
                    onClick: e => {
                        t && t(e)
                    },
                    className: a(511101).m
                })
            }
        },
        783129: (e, t, a) => {
            a.d(t, {
                m: () => r
            });
            let i = a(381453).sg((e, t) => {
                    a(707785).A.setState({ ...a(707785).A.state,
                        phase: e,
                        estimatedKeyboardWebViewOverlap: t
                    })
                }, 300),
                n = a(381453).sg((e, t) => {
                    a(707785).A.setState({ ...a(707785).A.state,
                        phase: e,
                        estimatedKeyboardWebViewOverlap: t
                    })
                }, 150);

            function r(e, t, r) {
                let {
                    device: o,
                    RouterStore: l
                } = e;
                if (!(0, a(907620).T)("supportsAlwaysMultiTextSelectionBehavior")) {
                    let e = "page" === l.state.route.name,
                        n = o.isAndroid && o.isMobileNative,
                        s = "editing" === a(358377).default.state.mode;
                    if (e && n && !s) return void i(t, r)
                }
                if ((0, a(907620).T)("supportsDebouncingKeyboardDuringOnboarding")) {
                    let e = "onboarding" === l.state.route.name,
                        a = o.isIOS && o.isMobileNative;
                    if (e && a) return void n(t, r)
                }
                a(707785).A.setState({ ...a(707785).A.state,
                    phase: t,
                    estimatedKeyboardWebViewOverlap: r
                })
            }
        },
        789722: (e, t, a) => {
            a.d(t, {
                W: () => i
            });
            let i = (0, a(109939).YK)({
                done: {
                    id: "modal.doneButton",
                    defaultMessage: "Done"
                },
                cancel: {
                    id: "modal.cancelButton",
                    defaultMessage: "Cancel"
                },
                back: {
                    id: "modal.backButton",
                    defaultMessage: "Back"
                }
            })
        },
        799843: (e, t, a) => {
            a.d(t, {
                DG: () => d,
                OH: () => l,
                nl: () => o,
                x$: () => s
            });
            let i = (0, a(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.year",
                        defaultMessage: "{numYears, plural, one {{numYears} year ago} other {{numYears} years ago}}"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.day",
                        defaultMessage: "{numDays, plural, one {{numDays} day ago} other {{numDays} days ago}}"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.week",
                        defaultMessage: "{numWeeks, plural, one {{numWeeks} week ago} other {{numWeeks} weeks ago}}"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.hour",
                        defaultMessage: "{numHours, plural, one {{numHours} hour ago} other {{numHours} hours ago}}"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.minute",
                        defaultMessage: "{numMinutes, plural, one {{numMinutes} minute ago} other {{numMinutes} minutes ago}}"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.second",
                        defaultMessage: "Just now"
                    }
                }),
                n = (0, a(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.ultraCompactYear",
                        defaultMessage: "{numYears}y"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.ultraCompactDay",
                        defaultMessage: "{numDays}d"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.ultraCompactWeek",
                        defaultMessage: "{numWeeks}w"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.ultraCompactHour",
                        defaultMessage: "{numHours}h"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.ultraCompactMinute",
                        defaultMessage: "{numMinutes}m"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.ultraCompactSeconds",
                        defaultMessage: "Just now"
                    }
                }),
                r = (0, a(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.compactYear",
                        defaultMessage: "{numYears}y ago"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.compactDay",
                        defaultMessage: "{numDays}d ago"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.compactWeek",
                        defaultMessage: "{numWeeks}w ago"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.compactHour",
                        defaultMessage: "{numHours}h ago"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.compactMinute",
                        defaultMessage: "{numMinutes}m ago"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.compactSecond",
                        defaultMessage: "Just now"
                    }
                });

            function o(e, {
                useCompactFormat: t,
                useUltraCompactFormat: l,
                useLowercase: s,
                roundDownYears: d,
                useWeeks: c,
                showDaysToOneWeek: u,
                nowOverrideMs: p = Date.now()
            } = {}) {
                let g = l ? n : t ? r : i,
                    m = new Date(e),
                    f = a(962299).A.getIntl().locale,
                    h = new Date(p),
                    v = Number(h) - e;
                if (v >= a(627179).Gq && d) {
                    let e = Math.floor(v / a(627179).Gq);
                    return a(962299).A.formatMessage(g.year, {
                        numYears: e
                    })
                }
                if (m.getFullYear() !== h.getFullYear()) return m.toLocaleDateString(f, l ? {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                } : {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                let y = Math.floor(v / a(627179).nD);
                if (y < 28 && y > 7 && c || u && 7 === y) {
                    let e = Math.floor(y / 7);
                    return a(962299).A.formatMessage(g.week, {
                        numWeeks: e
                    })
                }
                if (u && y > 6 || !u && y >= 3) return m.toLocaleDateString(f, {
                    month: "short",
                    day: "numeric"
                });
                if (y >= 1) return a(962299).A.formatMessage(g.day, {
                    numDays: y
                });
                let b = Math.floor(v / a(627179).pT);
                if (b >= 1) return a(962299).A.formatMessage(g.hour, {
                    numHours: b
                });
                let x = Math.floor(v / a(627179).Xb);
                return x >= 1 ? a(962299).A.formatMessage(g.minute, {
                    numMinutes: x
                }) : s ? a(962299).A.formatMessage(g.second).toLocaleLowerCase() : a(962299).A.formatMessage(g.second)
            }

            function l(e, t) {
                let i = t - e,
                    n = Math.floor(i / a(627179).Gq),
                    r = Math.floor(i / a(627179).nD),
                    o = Math.floor(i / a(627179).pT),
                    l = Math.floor(i / a(627179).Xb),
                    s = Math.floor(i / a(627179).TD);
                return n >= 1 ? a(962299).A.formatMessage(a(362008).jX.year, {
                    numYears: n
                }) : r >= 1 ? a(962299).A.formatMessage(a(362008).jX.day, {
                    numDays: r
                }) : o >= 1 ? a(962299).A.formatMessage(a(362008).jX.hour, {
                    numHours: o
                }) : l >= 1 ? a(962299).A.formatMessage(a(362008).jX.minute, {
                    numMinutes: l
                }) : a(962299).A.formatMessage(a(362008).jX.second, {
                    numSeconds: s
                })
            }

            function s(e, t) {
                return new Date(e).toLocaleDateString(a(962299).A.getIntl().locale, {
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: t ? void 0 : "2-digit"
                })
            }

            function d(e) {
                return new Date(e).toLocaleDateString(a(962299).A.getIntl().locale, {
                    month: "short",
                    year: "numeric",
                    day: "numeric"
                })
            }
        },
        801113: (e, t, a) => {
            a.d(t, {
                $C: () => n,
                Hi: () => i,
                Qy: () => r,
                Uu: () => o,
                ek: () => l,
                jq: () => s,
                pz: () => d
            });
            let i = 52,
                n = 45,
                r = 44,
                o = 44;

            function l(e) {
                return e ? o : r
            }

            function s(e) {
                return 2 * l(e)
            }

            function d(e, t, i) {
                return (e && !t ? (0, a(196441).n$)(i) : 12) + 30
            }
        },
        805148: (e, t, a) => {
            a.d(t, {
                p: () => r
            }), a(16280), a(944114);
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        indexBySpaceId: new Map,
                        refreshTokensBySpaceId: new Map
                    }
                }
                getIndex(e) {
                    return this.state.indexBySpaceId.get(e)
                }
                refresh(e) {
                    let {
                        spaceId: t,
                        agents: a
                    } = e, i = (this.state.refreshTokensBySpaceId.get(t) ? ? 0) + 1, n = new Map(this.state.refreshTokensBySpaceId);
                    n.set(t, i), this.setState({ ...this.state,
                        refreshTokensBySpaceId: n
                    }), this.buildIndex({
                        spaceId: t,
                        agents: a,
                        token: i
                    })
                }
                async buildIndex(e) {
                    let {
                        spaceId: t,
                        agents: i,
                        token: n
                    } = e;
                    try {
                        let e = [];
                        await (0, a(975162).lX)(i, 5, async n => {
                            try {
                                await n.load({
                                    timeout: 5e3
                                }), e.push(n)
                            } catch (e) {
                                var r;
                                if ((r = e) instanceof Error && "Timeout" === r.message) return void a(773352).log({
                                    level: "warning",
                                    from: "WorkflowSearchIndexStore",
                                    type: "agentStoreReadyTimeout",
                                    spaceId: t,
                                    error: (0, a(416607).convertErrorToLog)(e),
                                    data: {
                                        workflowId: n.id,
                                        timeoutMs: 5e3,
                                        agentCount: i.length
                                    }
                                });
                                a(419750).O8(e, {
                                    from: "WorkflowSearchIndexStore",
                                    type: "agentStoreLoadError",
                                    data: {
                                        miscDataToConvertToString: {
                                            workflowId: n.id,
                                            spaceId: t
                                        }
                                    }
                                })
                            }
                        });
                        let r = (0, a(381453).oE)(e.map(e => {
                                if (e.getData() ? ? e.getDraftData()) return e
                            })),
                            o = await (0, a(587832).createCustomAgentSearchIndex)(r);
                        if (this.state.refreshTokensBySpaceId.get(t) !== n) return;
                        let l = new Map(this.state.indexBySpaceId);
                        l.set(t, o), this.setState({ ...this.state,
                            indexBySpaceId: l
                        })
                    } catch (e) {
                        a(419750).O8(e, {
                            from: "WorkflowSearchIndexStore",
                            type: "indexBuildError"
                        })
                    }
                }
            }
            let r = new n
        },
        805469: (e, t, a) => {
            a.d(t, {
                A: () => n
            });
            var i = a(296540);
            let n = function({
                shouldPreserveTextSelection: e,
                shouldPreserveBlockSelection: t,
                shouldRestoreSelection: n,
                onClearSelection: r
            }) {
                let o = (0, a(533992).v3)(),
                    l = (0, i.useRef)(e),
                    s = (0, i.useRef)(""),
                    d = (0, i.useRef)({
                        selectionState: null,
                        textSelectionState: null
                    }),
                    c = (0, i.useCallback)(() => d.current, []),
                    u = (0, i.useCallback)(() => {
                        s.current = window.location.href, a(358377).default.hasSelection() && (d.current.textSelectionState = a(358377).default.cloneState()), (0, a(525779).clear)({
                            environment: o
                        }), t && (a(584265).default.isSelected() && (d.current.selectionState = a(584265).default.cloneState()), (0, a(471e3).I)({
                            environment: o
                        }))
                    }, [o, t]),
                    p = (0, i.useCallback)(() => {
                        d.current = {
                            selectionState: null,
                            textSelectionState: null
                        }, s.current = "", null == r || r()
                    }, [r]),
                    g = (0, i.useCallback)(() => {
                        let {
                            selectionState: e,
                            textSelectionState: i
                        } = d.current;
                        window.location.href === s.current && (i && "mode" in i && "editing" === i.mode && a(358377).default.setState({ ...a(358377).default.state,
                            ...i
                        }), t && e && a(584265).default.setState({ ...a(584265).default.state,
                            ...e
                        })), p()
                    }, [p, t]);
                return (0, a(383953).l)(() => {
                    l.current = e, e && u()
                }), (0, i.useEffect)(() => (l.current && !e ? n ? g() : p() : !l.current && e && u(), l.current = e, () => {
                    n ? g() : p()
                }), [e, p, g, u, n]), {
                    clearSavedSelection: p,
                    restoreSavedSelection: g,
                    getSavedSelection: c
                }
            }
        },
        828294: (e, t, a) => {
            function i(e) {
                let t = (0, a(83208).X)(e);
                return "on" === (0, a(604306).r)("agent_writer_custom_skills") || t
            }

            function n(e) {
                return "on" === a(218744).default.getEligibleGroup({
                    experimentId: "agent_writer_custom_skills",
                    defaultGroup: "control"
                }) || a(218744).default.checkGate({
                    gateName: e
                })
            }
            a.d(t, {
                N: () => i,
                a: () => n
            })
        },
        831957: (e, t, a) => {
            a.d(t, {
                k: () => i
            });

            function i(e, t) {
                let i = a(986939).A.isMobile ? 2 : 3;
                return t.slice(0, i)
            }
        },
        848135: (e, t, a) => {
            a.d(t, {
                B: () => n
            });
            var i = a(296540);

            function n() {
                let e = (0, i.useRef)(null),
                    [t, a] = (0, i.useState)(!1),
                    n = (0, i.useCallback)(() => {
                        let t = e.current;
                        t && a(t.matches(":hover"))
                    }, []);
                return [(0, i.useCallback)(t => {
                    t ? (t.addEventListener("mouseenter", n), t.addEventListener("mouseleave", n), e.current = t, n()) : e.current && (e.current.removeEventListener("mouseenter", n), e.current.removeEventListener("mouseleave", n), e.current = null)
                }, [n]), t, e]
            }
        },
        852864: (e, t, a) => {
            a.d(t, {
                H: () => i
            }), a(898992), a(672577);

            function i({
                spaceStore: e,
                userId: t,
                environment: n
            }) {
                let r = new(a(736309)).d(n, {
                    table: a(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return r ? a(994797).SpaceViewStore.createChildStore(e, {
                    id: r.id,
                    table: a(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        859941: (e, t, a) => {
            a.d(t, {
                a: () => i
            });

            function i() {
                let e = a(381453).XM(["Activities", "Objects", "Travel & Places"]),
                    t = a(753281).A.state.emojiByCategory[e];
                return a(381453).XM(t)
            }
        },
        892166: (e, t, a) => {
            a.d(t, {
                U: () => n
            });
            var i = a(296540);

            function n(e, t) {
                let {
                    navigate: n
                } = (0, i.useContext)(a(44894).E), r = (0, a(533992).v3)(), {
                    isPhone: o
                } = (0, a(533992).Y0)(), l = (0, i.useContext)(a(19187).e);
                return (0, i.useCallback)(i => {
                    if ((0, a(104310).u)({
                            event: {
                                eventName: e,
                                eventProperties: {}
                            }
                        }), o) null == l || l(), n({
                        environment: r,
                        url: "/nativetab/templates",
                        redirect: !0
                    });
                    else {
                        let e = "click" === i.type && (i.metaKey || i.ctrlKey);
                        (null == t ? void 0 : t.forceOpenInNewTab) || e ? n({
                            environment: r,
                            url: a(168962).JZ.marketplace,
                            openInNew: "tab",
                            makeTabActive: !e && r.device.isDesktop
                        }) : (0, a(666236).P)({
                            environment: r
                        })
                    }
                }, [r, e, t, o, l, n])
            }
        },
        893164: (e, t, a) => {
            a.d(t, {
                E: () => n
            }), a(944114), a(581454);
            var i = a.n(a(844751));
            async function n(e, t) {
                let {
                    query: n,
                    limit: r,
                    source: o,
                    requireEditPermissions: l,
                    databaseType: s,
                    spaceStore: d,
                    searchSessionId: c,
                    peopleBlocksToInclude: u
                } = t;
                if (!d) return {
                    results: [],
                    total: 0
                };
                let p = d.id,
                    g = a(821603).N2({
                        excludeTemplates: !0,
                        requireEditPermissions: l,
                        databaseType: s
                    }),
                    m = await e.idCreator.getSpaceIdCreator(p),
                    {
                        filters: f,
                        excludedBlockIds: h
                    } = (0, a(255139).CT)({
                        peopleBlocksToInclude: u,
                        spaceIdCreator: m,
                        filters: g,
                        excludedBlockIds: void 0
                    }),
                    [v, y] = await Promise.all([function(e, t) {
                        let {
                            query: n,
                            limit: r,
                            spaceId: o,
                            requireEditPermissions: l,
                            databaseType: s,
                            excludedBlockIds: d
                        } = t, c = [];
                        if (r > 0) {
                            let u = new AbortController;
                            e.defaultRecordCache.inMemoryRecordCache.forEachRecord({
                                userId: e.currentUser.id,
                                fn: ({
                                    model: e,
                                    role: p
                                }) => {
                                    if (e.table === a(832375).VlP) {
                                        let g = e.space_id === o,
                                            m = !l || (0, a(642157).p2)(p);
                                        if (!g || !m || (0, a(933062).Nh)(e.getParentId())) return;
                                        let f = e.getDatabaseType();
                                        if (!(!s || f && s.includes(f))) return;
                                        let h = (0, a(247438).q4_)(e.getName());
                                        if (!i().test(n, h)) return;
                                        let v = a(356912).m.createChildStore(t.parentStore, e.pointer),
                                            y = (0, a(457915).g)(v);
                                        if (!(0, a(447773).y)(y)) return;
                                        let b = e.getParentPointer();
                                        !d.includes(b.id) && (c.push(e.pointer.id), c.length >= r && u.abort())
                                    }
                                },
                                signal: u.signal
                            })
                        }
                        return c
                    }(e, { ...t,
                        spaceId: p,
                        requireEditPermissions: l,
                        databaseType: s,
                        parentStore: d,
                        excludedBlockIds: h
                    }), e.api.callApi({
                        eventName: "search",
                        environment: e,
                        data: {
                            type: a(821603).Vz.CollectionsInSpace,
                            query: n,
                            spaceId: p,
                            limit: r,
                            filters: f,
                            sort: {
                                field: "relevance"
                            },
                            source: o,
                            recentPagesForBoosting: (0, a(601860).cs)(a(420156).A.get(p)),
                            searchSessionId: c,
                            excludedBlockIds: h
                        }
                    })]),
                    b = a(381453).KC("success" === y.type ? a(381453).oE(y.data.results.map(e => e.collectionId)) : [], v).slice(0, r);
                return {
                    results: b,
                    total: "success" === y.type ? y.data.total : b.length
                }
            }
        },
        895732: (e, t, a) => {
            a.d(t, {
                A: () => n,
                x: () => r
            });
            var i = a(296540);

            function n() {
                (0, i.useEffect)(() => {
                    r()
                }, [])
            }
            let r = a(381453).Oo(async function() {
                let e = await a(765035).w.load();
                a(753281).A.setState((0, a(871871).Se)(e))
            })
        },
        898378: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                notionTintableIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.76 1.39 16.47 17.17",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M12.32 1.437c1.17-.1 1.47-.032 2.205.501l3.039 2.136c.5.367.668.467.668.867v11.715c0 .734-.267 1.168-1.202 1.234l-11.055.667c-.702.034-1.036-.066-1.404-.533L2.333 15.12c-.4-.534-.567-.934-.567-1.401V3.306c0-.6.267-1.101 1.035-1.168zm4.241 3.871-10.854.634c-.4.034-.534.235-.534.668v9.945c0 .535.267.735.868.702l10.388-.601c.6-.033.668-.401.668-.835V5.942c0-.433-.167-.667-.536-.634m-1.134 1.836c.066.3 0 .601-.301.635l-.501.1v7.342c-.434.233-.835.367-1.169.367-.534 0-.668-.168-1.068-.668L9.113 9.78v4.973l1.036.233c0 .008-.005.6-.836.6l-2.303.135c-.067-.134 0-.468.233-.535l.602-.167V8.446L7.01 8.38c-.067-.3.1-.734.567-.768l2.472-.166 3.407 5.206V8.046l-.868-.1c-.067-.367.2-.635.534-.668zm-2.705-4.772-9.153.668c-.333.033-.4.2-.267.333l1.303 1.035c.534.433.735.4 1.737.333l9.452-.567c.2 0 .034-.2-.033-.233l-1.57-1.136c-.301-.233-.702-.5-1.47-.433"
                    })
                },
                n = (0, a(104509).wt)("notionTintable", i, "tintable")
        },
        925021: (e, t, a) => {
            a.d(t, {
                K: () => n,
                v: () => i
            });
            let i = (0, a(109939).YK)({
                    addAPageInside: {
                        defaultMessage: "Add a page inside",
                        id: "sidebarItem.addAPageInside.tooltip"
                    }
                }),
                n = (0, a(109939).YK)({
                    addPageTooltip: {
                        defaultMessage: "Add a page",
                        id: "sidebar.addButton.addPageTooltip"
                    }
                })
        },
        930113: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                lockFillSmallIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.24 1.67 9.51 12.3",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.825 4.85a3.175 3.175 0 1 1 6.35 0v1.061a1.95 1.95 0 0 1 1.575 1.914v4.2a1.95 1.95 0 0 1-1.95 1.95H5.2a1.95 1.95 0 0 1-1.95-1.95v-4.2c0-.949.677-1.74 1.575-1.914zm1.1 1.025h4.15V4.85a2.075 2.075 0 0 0-4.15 0zm2.525 4.299a1.05 1.05 0 1 0-.9 0v.976a.45.45 0 0 0 .9 0z"
                    })
                },
                n = (0, a(104509).wt)("lockFillSmall", i, "fillSmall")
        },
        938211: (e, t, a) => {
            a.d(t, {
                J: () => i
            });

            function i() {
                return (0, a(682985).K8)(() => {
                    var e;
                    return !!(null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.setup_session_booked)
                }, [])
            }
        },
        950237: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                layoutIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.29 3.29 13.41 13.41",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.3 4.825c0-.842.683-1.525 1.525-1.525h3.15c.842 0 1.525.683 1.525 1.525v10.35c0 .842-.683 1.525-1.525 1.525h-3.15A1.525 1.525 0 0 1 3.3 15.175zm1.525-.275a.275.275 0 0 0-.275.275v10.35c0 .152.123.275.275.275h3.15a.275.275 0 0 0 .275-.275V4.825a.275.275 0 0 0-.275-.275zm5.675.275v3.15c0 .842.683 1.525 1.525 1.525h3.15c.842 0 1.525-.683 1.525-1.525v-3.15c0-.842-.683-1.525-1.525-1.525h-3.15c-.842 0-1.525.683-1.525 1.525m1.525-.275h3.15c.152 0 .275.123.275.275v3.15a.275.275 0 0 1-.275.275h-3.15a.275.275 0 0 1-.275-.275v-3.15c0-.152.123-.275.275-.275m0 5.95c-.842 0-1.525.683-1.525 1.525v3.15c0 .842.683 1.525 1.525 1.525h3.15c.842 0 1.525-.683 1.525-1.525v-3.15c0-.842-.683-1.525-1.525-1.525zm-.275 1.525c0-.152.123-.275.275-.275h3.15c.152 0 .275.123.275.275v3.15a.275.275 0 0 1-.275.275h-3.15a.275.275 0 0 1-.275-.275z"
                    })
                },
                n = (0, a(104509).wt)("layout", i, "default")
        },
        960831: (e, t, a) => {
            a.d(t, {
                j: () => i
            });

            function i(e) {
                var t;
                return null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (t = a(775657).electronApi.setOverlay) ? void 0 : t.call(a(775657).electronApi, e)
            }
        },
        961489: (e, t, a) => {
            function i(e) {
                let {
                    environment: t,
                    preference: i
                } = e, n = (0, a(904434).R$)(t);
                n && (0, a(377796).createAndCommit)({
                    environment: t,
                    userAction: "userSettingsActions.setContrastPreference",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                contrast_preference: i
                            }
                        })
                    }
                })
            }

            function n(e) {
                let t = (0, a(904434).R$)(e);
                return (null == t ? void 0 : t.getSettingsStore().getKeyStore("contrast_preference").getValue()) ? ? "auto"
            }

            function r(e) {
                return void 0 !== (0, a(904434).R$)(e)
            }
            a.d(t, {
                S4: () => i,
                Wu: () => n,
                rD: () => r
            })
        },
        974024: (e, t, a) => {
            a.d(t, {
                f: () => i
            });
            let i = new(a(815048)).O2("pageCovers", async () => {
                let {
                    pageCovers: e
                } = await a.e(40198).then(a.bind(a, 123367));
                return e
            })
        },
        989068: (e, t, a) => {
            async function i(e) {
                var t;
                return null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (t = a(775657).electronApi.checkLocaleSupport) ? void 0 : t.call(a(775657).electronApi, e)
            }
            a.d(t, {
                o: () => s,
                i: () => o
            }), a(296540);
            var n = a(474848);
            let r = (0, a(109939).YK)({
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
                origin: n,
                intl: l
            }) {
                var s;
                if (t.device.isElectron) {
                    let t = await i(e);
                    if ((null == t ? void 0 : t.supported) === !1) return void a(819652).HK({
                        id: "unsupported_locale",
                        title: l.formatMessage(r.title),
                        message: l.formatMessage(r.message, {
                            localeName: e
                        })
                    })
                }(0, a(195857).DO_NOT_USE_trackLegacy)("locale_changed", {
                    locale: e,
                    origin: n
                });
                let d = await t.api.callApi({
                    eventName: "setlocale",
                    environment: t,
                    data: {
                        locale: e
                    }
                });
                "success" === d.type ? (a(467008).A.set("preferredLocale", e), await a(941701).transactionQueue.drain(), t.device.isElectron) ? (null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (s = a(775657).electronApi.setLocale) || s.call(a(775657).electronApi, e), (0, a(518531).F)({
                    includeFocusedWindow: !0
                })) : window.location.reload(!0) : a(647095).Qg(d)
            }

            function l(e) {
                let t = (0, a(533992).v3)(),
                    i = (0, a(109939).tz)();
                return (0, n.jsx)(a(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, n.jsx)(a(109939).sA, { ...a(166863).P.language.title
                    }),
                    byline: (0, n.jsx)(a(109939).sA, { ...a(166863).P.language.description
                    }),
                    item: (0, n.jsx)(a(678064).A, {
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

            function s(e) {
                let {
                    device: t
                } = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => (0, a(405072).J)({
                    isMobileNative: t.isMobileNative,
                    isAndroid: t.isAndroid
                }), [t.isMobileNative, t.isAndroid]) ? (0, n.jsx)(a(31256).J, {}) : a(986939).A.isMobile ? null : (0, n.jsx)(l, { ...e
                })
            }
        },
        990959: (e, t, a) => {
            async function i(e) {
                let {
                    environment: t,
                    membersOnly: i,
                    minFuzzyScore: n = a(821048).XR - 1,
                    placeSelfFirst: r,
                    limit: o
                } = e, l = a(728372).AppStoreSidebarSpaceStore.state, s = a(728372).AppStoreMainEditorCurrentBlockStore.state, d = a(728372).AppStoreCurrentUserStore.state;
                if (!l) return [];
                let c = e.query.startsWith("@") ? e.query.slice(1) : e.query,
                    u = a(148344).k.getSortedUserIds().slice(0, 100),
                    p = s && !i ? (0, a(862085).i0)(s).flatMap(({
                        permissionItem: e
                    }) => (0, a(642157).B2)(e) ? [e.user_id] : []) : [],
                    g = await (0, a(250521).x)({
                        environment: e.environment,
                        parentStore: l,
                        query: c,
                        userIds: a(381453).sb([...a(381453).oE([null == d ? void 0 : d.userId]), ...u, ...p]),
                        minFuzzyScore: n,
                        placeSelfFirst: r
                    });
                if (o && g.length >= o) return g.slice(0, o);
                let m = a(218744).default.getConfigKey("email_alias_migration", "mode"),
                    f = await t.api.callApi({
                        eventName: "listUsers",
                        environment: t,
                        data: {
                            cursor: void 0,
                            membershipFilter: i ? "members" : void 0,
                            limit: o ? o - g.length : 100,
                            query: c,
                            spaceId: l.id,
                            includeAliasSearch: (0, a(485477).K)(m)
                        }
                    });
                if ("success" !== f.type || 0 === f.data.users.length) return g;
                let h = f.data.users.sort((e, t) => {
                        var i, n;
                        let r = (null == (i = a(148344).k.state) ? void 0 : i[e.id]) ? ? 0;
                        return ((null == (n = a(148344).k.state) ? void 0 : n[t.id]) ? ? 0) - r
                    }),
                    v = await (0, a(975162).lX)(h, h.length, async e => {
                        let t = a(807825).L.createChildStore(l, {
                            table: a(832375).oo9,
                            id: e.id
                        });
                        return await t.load(), t.getValue()
                    }),
                    y = a(381453).hS([...g, ...a(381453).oE(v)], e => e.id),
                    b = new Set(l.getEmailDomains());
                return (0, a(109266).Q)({
                    query: c,
                    users: y,
                    minFuzzyScore: n,
                    currentUserValue: null == d ? void 0 : d.getValue(),
                    spaceDomains: b
                })
            }
            async function n(e) {
                let t = (0, a(328765).S)(),
                    n = a(908032).i({
                        userId: e.environment.currentUser.id,
                        spaceId: null == t ? void 0 : t.id,
                        debugFrom: "searchSpaceUsers"
                    });
                if (t && !a(36151).c.state.wasGetVisibleUsersCalled[t.id]) {
                    var r;
                    a(773352).log({
                        level: "error",
                        from: "searchSpaceUsers",
                        type: "getVisibleUsersNotCalled",
                        spaceId: t.id,
                        data: {
                            userId: null == (r = a(728372).AppStoreCurrentUserStore.state) ? void 0 : r.id,
                            routeName: e.environment.RouterStore.state.route.name
                        }
                    })
                }
                return n ? i(e) : (0, a(108653).h)(e)
            }
            a.d(t, {
                L: () => n
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(430670)
        },
        997524: (e, t, a) => {
            a.d(t, {
                lv: () => u,
                C5: () => d,
                u7: () => s,
                uh: () => c
            });
            let i = "theme";

            function n(e, t) {
                var n, r;
                let o, {
                        ThemeStore: l
                    } = e,
                    {
                        mode: d,
                        usingSystemTheme: c
                    } = t;
                if (a(172474)._u) return;
                let u = {
                    mode: d
                };
                l.setState(u), e.mobileNative && e.mobileNative.setTheme(d, c), o = (0, a(632079).O4)({
                    theme: d
                }), n = {
                    mode: d,
                    usingSystemTheme: c,
                    colors: {
                        white: a(632079).oZ.white,
                        blue: o.blue.background.accentPrimary
                    },
                    borderRadius: 4,
                    textColor: o.text.primary,
                    popoverBackgroundColor: o.popoverBackground,
                    popoverBoxShadow: o.shadow.outline.lg,
                    inputBoxShadow: `${o.border.primaryTranslucent} 0 0 0 1px`,
                    inputBackgroundColor: o.background.secondaryTranslucent,
                    dividerColor: o.border.primaryTranslucent,
                    shadowOpacity: 0
                }, null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (r = a(775657).electronApi.setTheme) || r.call(a(775657).electronApi, n);
                try {
                    localStorage.setItem(i, JSON.stringify(u))
                } catch (e) {
                    (0, a(165219).x)({
                        keyId: i,
                        keyValue: JSON.stringify(u),
                        from: "ThemeActions",
                        error: e
                    })
                }
                s(d), "dark" === d ? (document.body.classList.add("dark"), document.body.classList.add("notion-dark-theme")) : (document.body.classList.remove("dark"), document.body.classList.remove("notion-dark-theme"))
            }
            async function r(e) {
                let {
                    mobileNative: t
                } = e, i = "light";
                i = t && t.api.getTheme ? await t.api.getTheme() : (0, a(172474).VD)(e), n(e, {
                    mode: i,
                    usingSystemTheme: !0
                })
            }
            let o = {
                    light: "rgba(0, 0, 0, 0)",
                    dark: "rgba(0, 0, 0, 0)"
                },
                l = {
                    light: "#D3D1CB",
                    dark: "rgba(255, 255, 255, 0.2)"
                };

            function s(e) {
                if (0 === a(190159).A.state) return;
                let t = document.getElementById("scroll-properties");
                t && (t.innerHTML = `
		* {
			scrollbar-width: 15px;
			scrollbar-color: ${l[e]}  ${o[e]};
		}
	`)
            }

            function d(e) {
                a(199162).A.setState(e)
            }

            function c(e) {
                let t = u();
                switch (t) {
                    case "dark":
                    case "light":
                        n(e, {
                            mode: t,
                            usingSystemTheme: !1
                        });
                        break;
                    case "system":
                        r(e);
                        break;
                    default:
                        (0, a(722371).HB)(t)
                }
            }

            function u() {
                var e;
                return "dark" === (e = a(199162).A.state || "system") || "light" === e || "system" === e ? e : "system"
            }
        }
    }
]);