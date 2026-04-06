"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [75484], {
        31256: (e, t, n) => {
            n.d(t, {
                J: () => l
            }), n(296540);
            var i = n(474848);
            let a = {
                marginTop: 12,
                marginBottom: 4
            };

            function l() {
                let e = (0, n(533992).v3)();
                return (0, i.jsx)(n(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, i.jsx)(n(109939).sA, {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    }),
                    byline: (0, i.jsx)(n(109939).sA, {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    }),
                    item: (0, i.jsx)(n(548436).A, {
                        size: "lg",
                        style: a,
                        onClick: () => {
                            (0, n(104310).u)({
                                event: {
                                    eventName: "change_language_button_clicked",
                                    eventProperties: {}
                                }
                            }), e.mobileNative && e.mobileNative.openAppLanguageSettings()
                        },
                        iconLeading: n(695142).arrowDiagonalUpRightFillIcon,
                        children: (0, i.jsx)(n(109939).sA, {
                            id: "languageSettings.languageSection.androidChangeLanguageButton",
                            defaultMessage: "Change Language"
                        })
                    })
                })
            }
        },
        53634: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                sparklesSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.17 1.53 13.65 12.93",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4.577 1.536a.7.7 0 0 0-.7.7c0 .362-.236.87-.684 1.317-.448.448-.955.683-1.316.683a.7.7 0 1 0 0 1.4c.36 0 .868.236 1.316.684s.684.955.684 1.316a.7.7 0 1 0 1.4 0c0-.36.235-.868.683-1.316s.955-.684 1.317-.684a.7.7 0 1 0 0-1.4c-.362 0-.87-.235-1.317-.683-.448-.448-.683-.955-.683-1.317a.7.7 0 0 0-.7-.7m-.394 3.007q.208-.208.394-.451a4.4 4.4 0 0 0 .844.844 4.4 4.4 0 0 0-.844.845 4.4 4.4 0 0 0-.845-.845 4 4 0 0 0 .451-.393m5.887.413a.7.7 0 0 0-.7.7c0 .831-.392 1.674-1.036 2.318S6.847 9.01 6.016 9.01a.7.7 0 1 0 0 1.4c.831 0 1.674.392 2.318 1.036s1.036 1.487 1.036 2.318a.7.7 0 1 0 1.4 0c0-.831.392-1.674 1.036-2.318s1.487-1.036 2.318-1.036a.7.7 0 1 0 0-1.4c-.831 0-1.674-.392-2.318-1.036S10.77 6.487 10.77 5.656a.7.7 0 0 0-.7-.7m-.746 4.008a5.2 5.2 0 0 0 .746-.941 5.2 5.2 0 0 0 1.687 1.687 5.2 5.2 0 0 0-1.687 1.687A5.2 5.2 0 0 0 8.383 9.71a5.2 5.2 0 0 0 .94-.746"
                    })
                },
                a = (0, n(104509).wt)("sparklesSmall", i, "small")
        },
        62412: (e, t, n) => {
            n.d(t, {
                O: () => o,
                u: () => l
            });
            var i = n(296540),
                a = n(474848);

            function l(e) {
                let {
                    buttonStyles: t
                } = e, l = (0, n(109939).tz)(), s = l.formatMessage(o.settings), r = (0, i.useCallback)(() => {
                    n(599754).Ow({
                        openedFrom: "sidebar",
                        currentPage: "user_settings"
                    })
                }, []);
                return (0, a.jsx)(n(51831).m, {
                    content: () => l.formatMessage(o.tooltip),
                    originGap: 6,
                    textWrap: !0,
                    placement: "right",
                    children: e => (0, a.jsx)(n(64960).Ay, { ...e,
                        onClick: r,
                        style: n(132261).DX.baseSidebarItem,
                        hoveredStyle: null == t ? void 0 : t.hoveredStyle,
                        children: (0, a.jsx)(n(380559).u, {
                            left: (0, a.jsx)(n(16275).I, {
                                icon: n(829968).gearIcon,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            children: s
                        })
                    })
                })
            }
            let o = (0, n(109939).YK)({
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
        97010: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                templatesIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.08 2.62 15.84 14.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.682 5.716V4.182c0-.858.7-1.557 1.557-1.557h5.823c.858 0 1.557.7 1.557 1.557v5.59a1.56 1.56 0 0 1-1.093 1.486l2.185 3.786c.589 1.038-.154 2.331-1.354 2.331H9.38c-1.138 0-1.895-1.18-1.421-2.201q-.513.113-1.057.114a4.81 4.81 0 0 1-4.818-4.818 4.812 4.812 0 0 1 5.6-4.754M9.24 3.875a.31.31 0 0 0-.307.307v5.6a.3.3 0 0 0 .298.296h1.66l.622-1.075a.6.6 0 0 1 .073-.103 1.56 1.56 0 0 1 2.638.1l.002.003.62 1.075h.217a.31.31 0 0 0 .307-.306v-5.59a.31.31 0 0 0-.307-.307zm-.01 7.453a1.55 1.55 0 0 1-1.547-1.547V6.99a3.562 3.562 0 0 0-4.35 3.481 3.56 3.56 0 0 0 3.569 3.568 3.54 3.54 0 0 0 2.09-.669l1.178-2.04zm3.914-1.7a.31.31 0 0 0-.54.002 1 1 0 0 1-.057.08L9.11 15.665l-.001.002a.306.306 0 0 0 .27.458h6.978a.31.31 0 0 0 .268-.463z"
                    })
                },
                a = (0, n(104509).wt)("templates", i, "default")
        },
        100410: (e, t, n) => {
            n.r(t), n.d(t, {
                iPhoneIcon: () => l,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
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
                l = (0, n(104509).wt)("iPhone", a, "default")
        },
        109925: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                phoneIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.58 2.77 14.78 14.57",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4.84 3.093a1.34 1.34 0 0 1 1.881.158l2.52 2.96a1.524 1.524 0 0 1-.083 2.066l-1.22 1.22 2.715 2.717 1.221-1.221a1.525 1.525 0 0 1 2.066-.084l2.962 2.517a1.29 1.29 0 0 1 .16 1.805l-.559.678a3.94 3.94 0 0 1-3.447 1.414l-.16-.016A11.564 11.564 0 0 1 2.614 7.299 3.88 3.88 0 0 1 3.97 3.822zm.93.969a.09.09 0 0 0-.128-.011l-.869.729a2.63 2.63 0 0 0-.919 2.358 10.314 10.314 0 0 0 9.17 8.925l.16.017a2.7 2.7 0 0 0 2.355-.966l.558-.678a.04.04 0 0 0-.005-.057l-2.961-2.517a.275.275 0 0 0-.373.015l-1.663 1.663a.625.625 0 0 1-.884 0l-3.6-3.6a.625.625 0 0 1 0-.884l1.663-1.663a.275.275 0 0 0 .015-.373z"
                    })
                },
                a = (0, n(104509).wt)("phone", i, "default")
        },
        138105: (e, t, n) => {
            n.d(t, {
                W: () => o,
                U: () => r
            });
            var i = n(296540);
            let a = {
                control: (0, n(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.control.tooltip",
                        defaultMessage: "Find templates by Notion’s community"
                    }
                }),
                v1: (0, n(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.v1.tooltip",
                        defaultMessage: "Discover tools and templates for your workspace"
                    }
                }),
                v2: (0, n(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.v2.tooltip",
                        defaultMessage: "Discover what the community has built"
                    }
                })
            };
            var l = n(474848);

            function o(e) {
                let {
                    styles: t
                } = e, o = (0, n(533992).v3)(), r = (0, n(109939).tz)(), c = (0, i.useRef)(!1), d = (0, n(682985).K8)(() => {
                    let {
                        RouterStore: e
                    } = o;
                    return e.state.route.name
                }, [o]), u = (0, n(682985).K8)(() => {
                    let e = n(218744).default.getEligibleGroup({
                        experimentId: "adoption_marketplace_sidebar_surface_exploratory_copy",
                        defaultGroup: "control"
                    });
                    return "v1" === e || "v2" === e ? e : "control"
                }, []), g = (0, n(682985).K8)(() => n(218744).default.getEligibleGroup({
                    experimentId: "adoption_marketplace_sidebar_tooltip_discovery_copy",
                    defaultGroup: "control",
                    disableExposureLogging: !0
                }), []), p = (0, n(892166).U)("marketplace_sidebar_option_click"), m = (0, i.useCallback)(() => {
                    var e;
                    let t = "control" === (e = g) || "v1" === e || "v2" === e ? e : "control";
                    return r.formatMessage(a[t].tooltip)
                }, [r, g]), x = (0, i.useCallback)(() => {
                    c.current || (c.current = !0, n(218744).default.manuallyLogExperimentExposure("adoption_marketplace_sidebar_tooltip_discovery_copy"))
                }, []);
                return (0, l.jsx)(n(51831).m, {
                    content: m,
                    originGap: 6,
                    placement: "right",
                    children: (e, i) => (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(s, {
                            isTooltipVisible: i,
                            onTooltipVisible: x
                        }), (0, l.jsx)(n(590422).Q, {
                            style: t.sidebarItemButtonStyle,
                            hoveredStyle: t.buttonHoveredStyle,
                            onClick: p,
                            ...e,
                            children: (0, l.jsx)(n(380559).u, {
                                left: (0, l.jsx)(n(16275).I, {
                                    icon: n(97010).templatesIcon,
                                    colorVariant: "secondary",
                                    size: "lg"
                                }),
                                isBottomItem: !0,
                                style: "gallery" === d ? t.sidebarItemActiveStyle : {},
                                children: r.formatMessage(n(648880).L[u])
                            })
                        })]
                    })
                })
            }

            function s(e) {
                let {
                    isTooltipVisible: t,
                    onTooltipVisible: n
                } = e;
                return (0, i.useEffect)(() => {
                    t && n()
                }, [t, n]), null
            }
            let r = (0, n(109939).YK)({
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
        139038: (e, t, n) => {
            n.d(t, {
                T: () => l
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.8 2.12 12.39 16.07",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10 5.702a2.775 2.775 0 1 0 0 5.55 2.775 2.775 0 0 0 0-5.55M8.475 8.477a1.525 1.525 0 1 1 3.05 0 1.525 1.525 0 0 1-3.05 0"
                        }), (0, i.jsx)("path", {
                            d: "M10 2.125a6.19 6.19 0 0 0-6.19 6.19v.129c0 1.403.467 2.767 1.327 3.876l4.37 5.626a.625.625 0 0 0 .986 0l4.37-5.626a6.32 6.32 0 0 0 1.328-3.876v-.128A6.19 6.19 0 0 0 10 2.125m-4.94 6.19a4.94 4.94 0 1 1 9.88 0v.129c0 1.126-.374 2.22-1.065 3.109L10 16.543l-3.875-4.99a5.07 5.07 0 0 1-1.066-3.109z"
                        })]
                    })
                },
                l = (0, n(104509).wt)("mapPin", a, "default")
        },
        141342: (e, t, n) => {
            n.d(t, {
                l: () => i().l
            });
            var i = () => n(748356)
        },
        166863: (e, t, n) => {
            n.d(t, {
                P: () => a
            });
            let i = (0, n(109939).YK)({
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
                a = {
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
        321412: (e, t, n) => {
            n.d(t, {
                b: () => r
            });
            var i = n(296540),
                a = n(474848);
            let l = {
                highlight: {
                    height: "calc(100% + 12px)",
                    width: "calc(100% + 24px)",
                    insetBlockStart: "-6px",
                    insetInlineStart: "-12px",
                    position: "absolute",
                    backgroundColor: n(632079).Tj.yellow.background.secondaryTranslucent,
                    borderRadius: 6,
                    pointerEvents: "none"
                }
            };

            function o({
                itemId: e,
                itemRef: t
            }) {
                let s = (0, n(533992).v3)(),
                    r = (0, i.useContext)(n(700587).U),
                    c = (0, n(682985).K8)(() => n(488301).J.state.highlightedSetting === e, [e]);
                return (0, i.useEffect)(() => {
                    c && t.current && (0, n(341471).h)({
                        element: t.current,
                        environment: s,
                        scrollerContext: r,
                        vertical: {
                            reveal: "closest"
                        },
                        horizontal: void 0,
                        animate: !0
                    })
                }, [c, s, t, r]), (0, a.jsx)(n(654979).A, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    visible: !!c,
                    config: {
                        duration: 250,
                        timingFunction: "ease-in-out"
                    },
                    style: l.highlight
                })
            }
            let s = {
                flex: 3,
                minWidth: 200
            };

            function r({
                id: e,
                title: t,
                titleId: l,
                byline: c,
                bylineId: d,
                item: u,
                badge: g,
                layout: p = "inline"
            }) {
                let m = (0, i.useRef)(null),
                    x = (0, n(960253).I)(() => ({
                        settingContainer: {
                            display: "flex",
                            width: "100%",
                            flexWrap: "wrap",
                            position: "relative",
                            gap: 12,
                            ..."stacked" === p ? {
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
                            ..."stacked" === p ? {
                                width: "100%"
                            } : {
                                alignItems: "flex-end"
                            }
                        }
                    }), [p]);
                return (0, a.jsxs)("div", {
                    ref: m,
                    style: x.settingContainer,
                    children: [(0, a.jsx)("div", {
                        style: s,
                        children: (0, a.jsx)(n(741489).j, {
                            title: t,
                            titleId: l,
                            byline: c,
                            bylineId: d,
                            badge: g
                        })
                    }), (0, a.jsx)("div", {
                        style: x.settingItem,
                        children: u
                    }), (0, a.jsx)(o, {
                        itemId: e,
                        itemRef: m
                    })]
                })
            }
        },
        337439: (e, t, n) => {
            n.d(t, {
                p: () => i
            });
            async function i() {
                return (await n.e(32675).then(n.bind(n, 271417))).navigateToLibraryPage
            }
        },
        372365: (e, t, n) => {
            n.r(t), n.d(t, {
                clockSmallIcon: () => l,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
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
                l = (0, n(104509).wt)("clockSmall", a, "small")
        },
        405072: (e, t, n) => {
            n.d(t, {
                J: () => i
            });

            function i(e) {
                var t;
                let {
                    isMobileNative: i,
                    isAndroid: a
                } = e, l = n(218744).default.checkGate({
                    gateName: "android_show_language_settings"
                }), o = null == (t = (0, n(663250).getMobileNativeDeviceInfo)()) ? void 0 : t.mobileNativeAndroidApiLevel;
                return l && i && a && "number" == typeof o && o >= 33
            }
        },
        451199: (e, t, n) => {
            n.d(t, {
                A: () => o,
                p: () => l
            });
            var i = n(296540),
                a = n(474848);
            let l = 8,
                o = i.forwardRef(function({
                    isSelected: e,
                    radioButtonColor: t = "blue"
                }, i) {
                    let {
                        radioButtonStyle: o,
                        dotStyle: s
                    } = (0, n(960253).I)(() => {
                        let i = "blue" === t ? n(632079).Tj.blue.icon.accentPrimary : n(632079).Tj.red.icon.accentPrimary;
                        return {
                            radioButtonStyle: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                width: 16,
                                height: 16,
                                borderRadius: 16,
                                marginInlineEnd: l,
                                background: e ? i : n(632079).Tj.whiteButtonBackground,
                                border: e ? "none" : `1px solid ${n(632079).Tj.border.strongTranslucent}`,
                                transition: "background 100ms ease-out"
                            },
                            dotStyle: {
                                width: 6,
                                height: 6,
                                borderRadius: 6,
                                background: n(632079).Tj.text.inversePrimary,
                                transition: "opacity 100ms ease-out",
                                opacity: +!!e
                            }
                        }
                    }, [e, t]);
                    return (0, a.jsx)("div", {
                        ref: i,
                        style: o,
                        children: (0, a.jsx)("div", {
                            style: s
                        })
                    })
                })
        },
        540336: (e, t, n) => {
            n.d(t, {
                Jy: () => f,
                LZ: () => h,
                vU: () => x
            }), n(581454);
            var i = n(296540),
                a = n(474848);
            let l = {
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
                s = {
                    kGuDYH: "xif65rj",
                    kZCmMZ: "xmzvs34",
                    kwRFfy: "xf159sx",
                    kY2c9j: "x1vjfegm",
                    $$css: !0
                },
                r = {
                    kGuDYH: "x1j61zf2",
                    kLKAdn: "x1nn3v0j",
                    kY2c9j: "xhtitgo",
                    kZKoxP: "xn3w4p2",
                    kC7eKd: "x1mmz80m",
                    $$css: !0
                },
                c = {
                    kZCmMZ: "xf7dkkf",
                    kwRFfy: "xv54qhq",
                    $$css: !0
                },
                d = {
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
                g = {
                    k4EQJz: "xkaiwgt",
                    kVAEAm: "x10l6tqk",
                    krVfgx: "x1ey2m1c",
                    kLqNvP: "xrotz4w",
                    kt4wiu: "x11dcrhx",
                    $$css: !0
                },
                p = {
                    k1xSpc: "x78zum5",
                    kzQI83: "x1iyjqo2",
                    $$css: !0
                },
                m = {
                    selectedTab: {
                        color: n(632079).Tj.text.primary
                    }
                };

            function x(e, t) {
                if (e) return `${e}-tab-${t}`
            }

            function f(e, t) {
                if (e) return `${e}-tabpanel-${t}`
            }
            let h = i.memo(function({
                tabs: e,
                selectedIndex: t,
                onChange: h,
                right: y,
                style: v,
                tabStyle: j,
                tabTitleStyle: b,
                selectedTabTitleStyle: k,
                tabBorderStyle: M,
                selectedTabStyle: w,
                readOnly: S,
                hideTabBorder: A,
                idPrefix: T
            }) {
                let I = (0, i.useContext)(n(649476).xu),
                    D = (0, n(616844).Y5)("left", 16),
                    C = (0, n(616844).Y5)("right", 16),
                    z = I.menuType === n(649476).gu.Popup;
                return (0, a.jsxs)("div", { ...n(952687).A.props(l, !A && o, n(986939).A.isMobile ? [r, z ? c : ((e, t) => [{
                        kZCmMZ: null != e ? "xnvo3vl" : e,
                        kwRFfy: null != t ? "x120eax6" : t,
                        $$css: !0
                    }, {
                        "--x-paddingInlineStart": "number" == typeof e ? e + "px" : null != e ? e : void 0,
                        "--x-paddingInlineEnd": "number" == typeof t ? t + "px" : null != t ? t : void 0
                    }])(D, C)] : s, v, {
                        $$css: !0,
                        className: "hide-scrollbar"
                    }),
                    children: [(0, a.jsx)("div", {
                        role: "tablist",
                        ...n(952687).A.props(p, "object" == typeof v && v && "flexDirection" in v && {
                            flexDirection: v.flexDirection
                        }),
                        children: e.map((e, l) => {
                            let o = l === t;
                            return (0, a.jsx)(i.Fragment, {
                                children: (0, a.jsxs)("div", { ...n(952687).A.props(d, j, o && u, o && m.selectedTab, o && w),
                                    children: [(0, a.jsx)(n(988022).p, {
                                        role: "tab",
                                        style: [b, o && k],
                                        onClick: () => h(l),
                                        disabled: S,
                                        "aria-selected": o,
                                        id: x(T, l),
                                        "aria-controls": f(T, l),
                                        colorPalette: o ? void 0 : "gray",
                                        children: e
                                    }), o ? (0, a.jsx)("div", { ...n(952687).A.props(g, M)
                                    }) : void 0]
                                }, `tabButton-${l}`)
                            }, l)
                        })
                    }), y ? (0, a.jsx)("div", {
                        className: "x1iyjqo2 x78zum5 x6s0dn4 x13a6bvl x1b8rd1j",
                        children: y
                    }) : void 0]
                })
            })
        },
        574657: (e, t, n) => {
            n.r(t), n.d(t, {
                checkmarkCircleFillSmallIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.94 1.95 12.11 12.11",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M1.95 8a6.05 6.05 0 1 1 12.1 0 6.05 6.05 0 0 1-12.1 0m8.444-1.623a.55.55 0 0 0-.944-.566L7.443 9.156 6.339 7.87a.55.55 0 1 0-.835.716l1.6 1.867a.55.55 0 0 0 .89-.075z"
                    })
                },
                a = (0, n(104509).wt)("checkmarkCircleFillSmall", i, "fillSmall")
        },
        598974: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => a,
                notionTemplateIcon: () => l
            }), n(296540);
            var i = n(474848);
            let a = {
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
                l = (0, n(104509).wt)("notionTemplate", a, "default")
        },
        666236: (e, t, n) => {
            n.d(t, {
                P: () => i
            });

            function i(e) {
                let {
                    environment: t
                } = e;
                (0, n(79266).navigate)({
                    environment: t,
                    url: n(168962).JZ.marketplace,
                    redirect: !1
                })
            }
        },
        678064: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(581454), n(296540);
            var i = n(474848);
            let a = function({
                    currentLocale: e,
                    confirm: t,
                    onChange: a,
                    origin: l,
                    showGlobeIcon: s,
                    showVisibleLabelPrefix: r = !1
                }) {
                    (0, n(533992).v3)();
                    let c = (0, n(109939).tz)(),
                        d = (0, n(682985).uB)(void 0, n(510969).A),
                        u = (0, n(83208).X)("polyglot");
                    if (n(986939).A.isMobile) return null;
                    let g = (0, n(601587).Vn)(c)[e].languageNameInThatLanguage,
                        p = s ? n(988022).p : n(548436).A;
                    return (0, i.jsx)(n(656252).A, {
                        onClick: () => {
                            (0, n(104310).u)({
                                event: {
                                    eventName: "change_locale_clicked",
                                    eventProperties: {
                                        origin: l
                                    }
                                }
                            })
                        },
                        ariaPopupType: "listbox",
                        popupType: n(656252).z.Popup,
                        buttonPopupStore: d,
                        ariaLabel: c.formatMessage({
                            id: "languagePicker.popup.ariaLabel",
                            defaultMessage: "Select language"
                        }),
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        content: l => {
                            let s = u ? [...n(619157).fy, ...n(619157).Tf] : [...n(619157).fy],
                                r = [{
                                    key: "languages",
                                    render: e => (0, i.jsx)(n(844565).A, { ...e,
                                        topBorder: 0 !== e.index
                                    }),
                                    items: (0, n(601587).O8)(s, c).map(s => ({
                                        key: s,
                                        render: e => (function(e, t, a, l) {
                                            let {
                                                languageNameInThatLanguage: s,
                                                languageNameInCurrentLanguage: r
                                            } = (0, n(601587).Vn)(l)[e];
                                            return (0, i.jsx)(o, {
                                                label: s,
                                                caption: r,
                                                focused: t,
                                                props: a,
                                                locale: e
                                            })
                                        })(s, e.focused, e, c),
                                        action: () => {
                                            var o, r, d, u, g;
                                            o = s, r = e, d = c, u = t, g = a, r !== o && function(e, t, a, l) {
                                                let {
                                                    languageNameInThatLanguage: o
                                                } = (0, n(601587).Vn)(t)[e];
                                                a ? n(647095).ui({
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
                                                            l(e)
                                                        }
                                                    }]
                                                }) : l(e)
                                            }(o, d, u, g), l.close()
                                        }
                                    }))
                                }],
                                d = {
                                    menuType: n(649476).gu.Popup,
                                    width: 240
                                };
                            return (0, i.jsx)(n(747369).A, {
                                className: n(828432).jtA,
                                ...d,
                                children: (0, i.jsx)(n(558045).A, {
                                    type: n(558045).O.Vertical,
                                    role: "listbox",
                                    initialFocus: void 0,
                                    sections: r
                                })
                            })
                        },
                        children: e => (0, i.jsx)(p, {
                            "aria-label": c.formatMessage({
                                id: "languagePicker.ariaLabel",
                                defaultMessage: "Language: {language}"
                            }, {
                                language: g
                            }),
                            colorPalette: s ? "gray" : void 0,
                            iconLeading: s ? n(515388).globeIcon : void 0,
                            iconTrailing: {
                                icon: n(595453).arrowChevronSingleDownSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            },
                            ...e,
                            children: r ? (0, i.jsx)(n(109939).sA, {
                                id: "languagePicker.visibleLabel",
                                defaultMessage: "Language: {language}",
                                values: {
                                    language: g
                                }
                            }) : g
                        })
                    })
                },
                l = {
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
                                ...l.style1
                            },
                            children: e.label
                        })
                    }),
                    caption: e.caption && (0, i.jsx)("span", {
                        style: l.style2,
                        children: e.caption
                    }),
                    shouldWrapCaption: !0
                })
            }
        },
        695142: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowDiagonalUpRightFillIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.16 4.17 11.67 11.67",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.825 5.05a.875.875 0 0 0-.875-.875H7.313a.875.875 0 1 0 0 1.75h5.524L4.393 14.37c-.32.32-.303.857.039 1.198.341.342.878.36 1.198.039l8.445-8.444v5.524a.875.875 0 1 0 1.75 0z"
                    })
                },
                a = (0, n(104509).wt)("arrowDiagonalUpRightFill", i, "fill")
        },
        736620: (e, t, n) => {
            n.d(t, {
                M: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.37 1.53 9.26 12.92",
                    svg: (0, n(474848).jsx)("path", {
                        d: "m10.225 6.095-.11-1.14.18-.16c.64-.57 1.01-1.4 1.01-2.26v-.38c0-.34-.28-.62-.62-.62h-5.36c-.34 0-.62.28-.62.62v.38c0 .86.37 1.68 1.01 2.26l.18.16-.11 1.14c-1.44.58-2.41 2-2.41 3.55v.5c0 .34.28.62.63.62h3.23v2.34c0 .14.03.27.09.4l.35.75c.05.11.14.18.26.2h.06c.09 0 .19-.04.26-.11l.06-.08.35-.77c.06-.12.09-.26.09-.4v-2.34h3.26c.34 0 .62-.28.62-.62v-.5c0-1.56-.96-2.98-2.41-3.55zm-3.66 1.05c.23-.08.4-.29.42-.53l.18-1.85c.02-.2-.06-.4-.21-.53l-.42-.38c-.32-.28-.52-.66-.58-1.08h4.07c-.06.42-.26.8-.58 1.08l-.42.38c-.15.13-.23.33-.21.53l.18 1.85c.02.24.19.45.42.53l.19.06c1 .34 1.7 1.27 1.75 2.32h-6.73c.05-1.05.74-1.98 1.75-2.32z"
                    })
                },
                a = (0, n(104509).wt)("pinSmall", i, "small")
        },
        741489: (e, t, n) => {
            n.d(t, {
                j: () => a
            }), n(296540);
            var i = n(474848);

            function a({
                title: e,
                titleId: t,
                byline: l,
                bylineId: o,
                badge: s
            }) {
                return (0, i.jsxs)(n(4458).VP, {
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 4,
                    children: [(0, i.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        children: [(0, i.jsx)(n(111010).D, {
                            id: t,
                            styleKey: n(986939).A.isMobile ? "captionMedium" : "bodyMedium",
                            colorVariant: "primary",
                            children: e
                        }), s]
                    }), l ? (0, i.jsx)(n(111010).D, {
                        id: o,
                        styleKey: n(986939).A.isMobile ? "captionSmRegular" : "bodySmRegular",
                        colorVariant: "secondary",
                        style: {
                            textWrap: "pretty"
                        },
                        children: l
                    }) : void 0]
                })
            }
        },
        748356: (e, t, n) => {
            n.d(t, {
                f: () => d,
                l: () => f
            }), n(581454), n(296540);
            var i = n(474848);
            let a = (0, n(109939).YK)({
                learnMore: {
                    id: "banner.learnMore",
                    defaultMessage: "Learn more"
                },
                dismiss: {
                    id: "banner.dismiss",
                    defaultMessage: "Dismiss"
                }
            });

            function l(e, t) {
                return (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[e].background.secondary,
                        padding: "8px 12px",
                        minHeight: 44,
                        flexShrink: 0
                    },
                    icon: {
                        width: n(986939).A.isMobile ? n(104509).Ev.default : n(104509).Ev.sm,
                        height: n(986939).A.isMobile ? n(104509).Ev.default : n(104509).Ev.sm,
                        fill: t ? n(632079).Tj[t].icon.accentPrimary : n(632079).Tj[e].icon.secondary
                    },
                    content: {
                        color: n(632079).Tj[e].text.secondary
                    },
                    contentAutoLayout: {
                        position: "relative",
                        color: n(632079).Tj[e].text.secondary
                    },
                    learnMoreIcon: {
                        fill: n(632079).Tj[e].icon.secondary
                    },
                    titleIcon: {
                        marginInlineEnd: 8
                    }
                }), [e, t])
            }

            function o(e) {
                let {
                    onDismiss: t
                } = e, l = (0, n(109939).tz)();
                return t ? (0, i.jsx)(n(374533).A, {
                    size: "xs",
                    onClick: t,
                    icon: n(25094).xMarkSmallIcon,
                    colorVariant: "primary",
                    ariaLabel: l.formatMessage(a.dismiss)
                }) : (0, i.jsx)("div", {})
            }

            function s(e) {
                let {
                    tint: t,
                    iconGroup: a,
                    style: l
                } = e;
                return a ? (0, i.jsx)(n(708966).Q, {
                    iconGroup: a,
                    variantName: "small",
                    colorPalette: t,
                    colorVariant: "secondary",
                    style: l
                }) : null
            }
            let r = {
                    k1xSpc: "x78zum5",
                    kXwgrk: "x1q0g3np",
                    kGNEyG: "x6s0dn4",
                    $$css: !0
                },
                c = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                };

            function d(e) {
                let {
                    tint: t,
                    action: a
                } = e, {
                    label: l,
                    onClick: o,
                    icon: s
                } = a, c = (0, n(960253).I)(() => ({
                    button: {
                        color: "gray" === t ? n(632079).Tj.text.primary : n(632079).Tj[t].text.secondary,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: n(632079).Tj[t].border.strongTranslucent
                    },
                    buttonHovered: {
                        backgroundColor: n(632079).Tj[t].background.secondaryTranslucent
                    },
                    buttonPressed: {
                        backgroundColor: n(632079).Tj[t].background.tertiaryTranslucent
                    }
                }), [t]);
                return (0, i.jsx)(n(548436).A, {
                    iconLeading: s ? {
                        icon: s,
                        size: "sm"
                    } : void 0,
                    onClick: o,
                    style: c.button,
                    hoveredStyle: c.buttonHovered,
                    pressedStyle: c.buttonPressed,
                    children: (0, i.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        style: r,
                        children: l
                    })
                })
            }

            function u(e) {
                let {
                    label: t,
                    iconGroup: r,
                    tint: u,
                    onDismiss: g,
                    actions: p,
                    onLearnMoreClick: m
                } = e, x = l(u), f = (0, n(109939).tz)();
                return (0, i.jsxs)(n(4458).fI, {
                    style: x.container,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [(0, i.jsxs)(n(4458).fI, {
                        style: x.contentAutoLayout,
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0, i.jsx)(s, {
                            tint: u,
                            iconGroup: r,
                            style: x.titleIcon
                        }), (0, i.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            children: t
                        }), m ? (0, i.jsx)(n(374533).A, {
                            onClick: m,
                            icon: () => (0, i.jsx)(n(708966).Q, {
                                iconGroup: n(799472).u,
                                variantName: "default",
                                colorPalette: u,
                                colorVariant: "secondary"
                            }),
                            ariaLabel: f.formatMessage(a.learnMore)
                        }) : void 0]
                    }), (0, i.jsxs)(n(4458).fI, {
                        gap: 12,
                        alignItems: "center",
                        justifyContent: "flex-end",
                        style: c,
                        flex: "1 1 0",
                        children: [(0, i.jsx)(n(4458).fI, {
                            gap: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            style: c,
                            children: null == p ? void 0 : p.map((e, t) => e.isCustom ? e.render() : (0, i.jsx)(d, {
                                tint: u,
                                action: e
                            }, t))
                        }), (0, i.jsx)(o, {
                            onDismiss: g
                        })]
                    })]
                })
            }

            function g(e) {
                let {
                    label: t,
                    iconGroup: r,
                    staticIcon: u,
                    iconColor: g,
                    tint: p,
                    onDismiss: m,
                    actions: x,
                    onLearnMoreClick: f,
                    alignment: h = "center"
                } = e, y = l(p, g), v = (0, n(109939).tz)(), j = r ? (0, i.jsx)(s, {
                    tint: p,
                    iconGroup: r,
                    style: y.titleIcon
                }) : u ? u({ ...y.icon,
                    ...y.titleIcon
                }) : null;
                return (0, i.jsxs)(n(4458).fI, {
                    style: y.container,
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    gap: 8,
                    children: [(0, i.jsxs)(n(4458).fI, {
                        style: y.contentAutoLayout,
                        gap: 24,
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "start" === h ? "space-between" : "center",
                        children: [(0, i.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            style: c,
                            children: [j, (0, i.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                children: t
                            }), f ? (0, i.jsx)(n(51831).m, {
                                content: () => v.formatMessage(a.learnMore),
                                children: e => (0, i.jsx)(n(374533).A, {
                                    onClick: f,
                                    icon: () => (0, i.jsx)(n(708966).Q, {
                                        iconGroup: n(799472).u,
                                        variantName: "default",
                                        colorPalette: p,
                                        colorVariant: "secondary"
                                    }),
                                    ariaLabel: v.formatMessage(a.learnMore),
                                    ...e
                                })
                            }) : void 0]
                        }), x ? (0, i.jsx)(n(4458).fI, {
                            gap: 8,
                            style: c,
                            children: null == x ? void 0 : x.map((e, t) => e.isCustom ? e.render() : (0, i.jsx)(d, {
                                tint: p,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, i.jsx)(o, {
                        onDismiss: m
                    })]
                })
            }

            function p(e) {
                let {
                    label: t,
                    description: a,
                    iconGroup: r,
                    staticIcon: u,
                    iconColor: g,
                    tint: p,
                    onDismiss: m,
                    actions: x,
                    noRoundedCorners: f
                } = e, h = l(p, g), y = (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[p].background.secondary,
                        padding: 16,
                        borderRadius: 8 * !f,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [p, f]), v = r ? (0, i.jsx)(s, {
                    tint: p,
                    iconGroup: r
                }) : u ? u(h.icon) : null;
                return (0, i.jsxs)(n(4458).fI, {
                    style: y.container,
                    gap: 8,
                    width: "100%",
                    children: [v ? (0, i.jsx)(n(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: v
                    }) : null, (0, i.jsxs)(n(4458).VP, {
                        style: h.content,
                        gap: 8,
                        flex: "1 1 0",
                        children: [(0, i.jsxs)(n(4458).VP, {
                            gap: 4,
                            style: c,
                            children: [(0, i.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "gray" === p ? "primary" : void 0,
                                children: t
                            }), a ? (0, i.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: a
                            }) : null]
                        }), x ? (0, i.jsx)(n(4458).fI, {
                            gap: 8,
                            style: c,
                            children: null == x ? void 0 : x.map((e, t) => e.isCustom ? e.render() : (0, i.jsx)(d, {
                                tint: p,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, i.jsx)(o, {
                        onDismiss: m
                    })]
                })
            }

            function m(e) {
                let {
                    label: t,
                    staticIcon: a,
                    tint: s,
                    iconColor: r,
                    onDismiss: u,
                    actions: g
                } = e, p = l(s, r), m = (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[s].background.secondary,
                        paddingTop: 8,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 12,
                        borderRadius: 8,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [s]);
                return (0, i.jsxs)(n(4458).fI, {
                    style: m.container,
                    gap: 8,
                    alignItems: g ? "center" : void 0,
                    justifyContent: g ? "center" : void 0,
                    width: "100%",
                    children: [a ? (0, i.jsx)(n(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: a(p.icon)
                    }) : null, (0, i.jsxs)(n(4458).fI, {
                        style: p.content,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flex: "1 1 0",
                        children: [(0, i.jsx)(n(4458).VP, {
                            gap: 4,
                            style: c,
                            flex: "1 1 0",
                            children: (0, i.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: t
                            })
                        }), g ? (0, i.jsx)(n(4458).fI, {
                            gap: 8,
                            style: c,
                            children: null == g ? void 0 : g.map((e, t) => e.isCustom ? e.render() : (0, i.jsx)(d, {
                                tint: s,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, i.jsx)(o, {
                        onDismiss: u
                    })]
                })
            }

            function x(e) {
                let {
                    tint: t,
                    onDismiss: a,
                    content: s,
                    alignment: r = "center",
                    verticalAlignment: c = "center"
                } = e, d = l(t);
                return (0, i.jsxs)(n(4458).fI, {
                    style: d.container,
                    gap: 8,
                    alignItems: c,
                    justifyContent: "space-between",
                    width: "100%",
                    children: [(0, i.jsx)(n(4458).fI, {
                        style: d.content,
                        flexGrow: 1,
                        justifyContent: r,
                        children: s
                    }), (0, i.jsx)(o, {
                        onDismiss: a
                    })]
                })
            }

            function f(e) {
                let {
                    display: t
                } = e;
                switch (t) {
                    case "inline":
                        return (0, i.jsx)(p, { ...e
                        });
                    case "full-width":
                        if (n(986939).A.isMobile) return (0, i.jsx)(u, { ...e
                        });
                        return (0, i.jsx)(g, { ...e
                        });
                    case "full-width-no-content":
                        return (0, i.jsx)(x, { ...e
                        });
                    case "inline-compact":
                        return (0, i.jsx)(m, { ...e
                        })
                }
                return (0, i.jsx)(i.Fragment, {})
            }
        },
        892166: (e, t, n) => {
            n.d(t, {
                U: () => a
            });
            var i = n(296540);

            function a(e, t) {
                let {
                    navigate: a
                } = (0, i.useContext)(n(44894).E), l = (0, n(533992).v3)(), {
                    isPhone: o
                } = (0, n(533992).Y0)(), s = (0, i.useContext)(n(19187).e);
                return (0, i.useCallback)(i => {
                    if ((0, n(104310).u)({
                            event: {
                                eventName: e,
                                eventProperties: {}
                            }
                        }), o) null == s || s(), a({
                        environment: l,
                        url: "/nativetab/templates",
                        redirect: !0
                    });
                    else {
                        let e = "click" === i.type && (i.metaKey || i.ctrlKey);
                        (null == t ? void 0 : t.forceOpenInNewTab) || e ? a({
                            environment: l,
                            url: n(168962).JZ.marketplace,
                            openInNew: "tab",
                            makeTabActive: !e && l.device.isDesktop
                        }) : (0, n(666236).P)({
                            environment: l
                        })
                    }
                }, [l, e, t, o, s, a])
            }
        },
        938211: (e, t, n) => {
            n.d(t, {
                J: () => i
            });

            function i() {
                return (0, n(682985).K8)(() => {
                    var e;
                    return !!(null == (e = n(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.setup_session_booked)
                }, [])
            }
        },
        950237: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                layoutIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.29 3.29 13.41 13.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.3 4.825c0-.842.683-1.525 1.525-1.525h3.15c.842 0 1.525.683 1.525 1.525v10.35c0 .842-.683 1.525-1.525 1.525h-3.15A1.525 1.525 0 0 1 3.3 15.175zm1.525-.275a.275.275 0 0 0-.275.275v10.35c0 .152.123.275.275.275h3.15a.275.275 0 0 0 .275-.275V4.825a.275.275 0 0 0-.275-.275zm5.675.275v3.15c0 .842.683 1.525 1.525 1.525h3.15c.842 0 1.525-.683 1.525-1.525v-3.15c0-.842-.683-1.525-1.525-1.525h-3.15c-.842 0-1.525.683-1.525 1.525m1.525-.275h3.15c.152 0 .275.123.275.275v3.15a.275.275 0 0 1-.275.275h-3.15a.275.275 0 0 1-.275-.275v-3.15c0-.152.123-.275.275-.275m0 5.95c-.842 0-1.525.683-1.525 1.525v3.15c0 .842.683 1.525 1.525 1.525h3.15c.842 0 1.525-.683 1.525-1.525v-3.15c0-.842-.683-1.525-1.525-1.525zm-.275 1.525c0-.152.123-.275.275-.275h3.15c.152 0 .275.123.275.275v3.15a.275.275 0 0 1-.275.275h-3.15a.275.275 0 0 1-.275-.275z"
                    })
                },
                a = (0, n(104509).wt)("layout", i, "default")
        },
        989068: (e, t, n) => {
            async function i(e) {
                var t;
                return null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (t = n(775657).electronApi.checkLocaleSupport) ? void 0 : t.call(n(775657).electronApi, e)
            }
            n.d(t, {
                o: () => r,
                i: () => o
            }), n(296540);
            var a = n(474848);
            let l = (0, n(109939).YK)({
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
                origin: a,
                intl: s
            }) {
                var r;
                if (t.device.isElectron) {
                    let t = await i(e);
                    if ((null == t ? void 0 : t.supported) === !1) return void n(819652).HK({
                        id: "unsupported_locale",
                        title: s.formatMessage(l.title),
                        message: s.formatMessage(l.message, {
                            localeName: e
                        })
                    })
                }(0, n(195857).DO_NOT_USE_trackLegacy)("locale_changed", {
                    locale: e,
                    origin: a
                });
                let c = await t.api.callApi({
                    eventName: "setlocale",
                    environment: t,
                    data: {
                        locale: e
                    }
                });
                "success" === c.type ? (n(467008).A.set("preferredLocale", e), await n(941701).transactionQueue.drain(), t.device.isElectron) ? (null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (r = n(775657).electronApi.setLocale) || r.call(n(775657).electronApi, e), (0, n(518531).F)({
                    includeFocusedWindow: !0
                })) : window.location.reload(!0) : n(647095).Qg(c)
            }

            function s(e) {
                let t = (0, n(533992).v3)(),
                    i = (0, n(109939).tz)();
                return (0, a.jsx)(n(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, a.jsx)(n(109939).sA, { ...n(166863).P.language.title
                    }),
                    byline: (0, a.jsx)(n(109939).sA, { ...n(166863).P.language.description
                    }),
                    item: (0, a.jsx)(n(678064).A, {
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

            function r(e) {
                let {
                    device: t
                } = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => (0, n(405072).J)({
                    isMobileNative: t.isMobileNative,
                    isAndroid: t.isAndroid
                }), [t.isMobileNative, t.isAndroid]) ? (0, a.jsx)(n(31256).J, {}) : n(986939).A.isMobile ? null : (0, a.jsx)(s, { ...e
                })
            }
        }
    }
]);