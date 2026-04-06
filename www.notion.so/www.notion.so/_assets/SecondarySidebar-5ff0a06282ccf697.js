"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [95281], {
        15859: (e, t, a) => {
            a.d(t, {
                hG: () => r,
                X$: () => o,
                Y7: () => s
            });
            let i = (0, a(109939).YK)({
                    onboardingWelcomeToNotionTitle: {
                        id: "agentMessages.onboardingWelcomeToNotion.title",
                        defaultMessage: "Welcome to Notion!"
                    },
                    onboardingMeetingNotesTitle: {
                        id: "agentMessages.onboardingMeetingNotes.title",
                        defaultMessage: "Your first Meeting Note"
                    },
                    onboardingDatabasesTitle: {
                        id: "agentMessages.onboardingDatabases.title",
                        defaultMessage: "Intro to Databases"
                    },
                    dailyBriefTitle: {
                        id: "agentMessages.dailyBrief.title",
                        defaultMessage: "Daily Brief"
                    },
                    inboxZeroTitle: {
                        id: "agentMessages.inboxZero.title",
                        defaultMessage: "Inbox Zero"
                    }
                }),
                n = {
                    onboarding_welcome_to_notion: {
                        trigger: "custom",
                        category: "product_usage",
                        title: i.onboardingWelcomeToNotionTitle
                    },
                    onboarding_meeting_notes: {
                        trigger: "custom",
                        category: "product_usage",
                        title: i.onboardingMeetingNotesTitle
                    },
                    onboarding_databases: {
                        trigger: "custom",
                        category: "product_usage",
                        title: i.onboardingDatabasesTitle
                    },
                    daily_brief: {
                        trigger: "custom",
                        category: "product_usage",
                        title: i.dailyBriefTitle
                    },
                    inbox_zero: {
                        trigger: "custom",
                        category: "product_usage",
                        title: i.inboxZeroTitle
                    }
                },
                r = (0, a(722371).objectKeys)(n);

            function o(e) {
                return n[e]
            }

            function s(e) {
                return !!r.includes(e)
            }
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
        33402: (e, t, a) => {
            a.d(t, {
                J: () => n
            });
            let i = new(a(815048)).O2("PageAttributionHoverCard", async () => await a.e(73458).then(a.bind(a, 373592))),
                n = (0, a(815048)._h)(i, e => e.PageAttributionHoverCard)
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
                } = e, r = (0, a(109939).tz)(), s = r.formatMessage(o.settings), l = (0, i.useCallback)(() => {
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
                        onClick: l,
                        style: a(132261).DX.baseSidebarItem,
                        hoveredStyle: null == t ? void 0 : t.hoveredStyle,
                        children: (0, n.jsx)(a(380559).u, {
                            left: (0, n.jsx)(a(16275).I, {
                                icon: a(829968).gearIcon,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            children: s
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
        138105: (e, t, a) => {
            a.d(t, {
                W: () => o,
                U: () => l
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
                } = e, o = (0, a(533992).v3)(), l = (0, a(109939).tz)(), d = (0, i.useRef)(!1), c = (0, a(682985).K8)(() => {
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
                }), []), g = (0, a(892166).U)("marketplace_sidebar_option_click"), h = (0, i.useCallback)(() => {
                    var e;
                    let t = "control" === (e = p) || "v1" === e || "v2" === e ? e : "control";
                    return l.formatMessage(n[t].tooltip)
                }, [l, p]), m = (0, i.useCallback)(() => {
                    d.current || (d.current = !0, a(218744).default.manuallyLogExperimentExposure("adoption_marketplace_sidebar_tooltip_discovery_copy"))
                }, []);
                return (0, r.jsx)(a(51831).m, {
                    content: h,
                    originGap: 6,
                    placement: "right",
                    children: (e, i) => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s, {
                            isTooltipVisible: i,
                            onTooltipVisible: m
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
                                children: l.formatMessage(a(648880).L[u])
                            })
                        })]
                    })
                })
            }

            function s(e) {
                let {
                    isTooltipVisible: t,
                    onTooltipVisible: a
                } = e;
                return (0, i.useEffect)(() => {
                    t && a()
                }, [t, a]), null
            }
            let l = (0, a(109939).YK)({
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
        203007: (e, t, a) => {
            a.d(t, {
                U: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.12 2.37 15.02 16.77",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M6.25 2.375A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125h4.923a4.8 4.8 0 0 1-.789-1.25H6.25a.875.875 0 0 1-.875-.875v-11c0-.483.392-.875.875-.875h7.5c.483 0 .875.392.875.875v5.252a5 5 0 0 1 1.25.132V4.5a2.125 2.125 0 0 0-2.125-2.125z"
                        }), (0, i.jsx)("path", {
                            d: "M7.25 5.2a.55.55 0 0 0 0 1.1h5.5a.55.55 0 0 0 0-1.1zM6.7 8.25a.55.55 0 0 1 .55-.55h5.5a.55.55 0 0 1 0 1.1h-5.5a.55.55 0 0 1-.55-.55m11 8.357a3.625 3.625 0 1 0-.893.878l1.223 1.427a.625.625 0 1 0 .94-.823zM12.376 14.5a2.375 2.375 0 1 1 4.75 0 2.375 2.375 0 0 1-4.75 0"
                        })]
                    })
                },
                r = (0, a(104509).wt)("docTextMagnifyingGlass", n, "default")
        },
        252941: (e, t, a) => {
            a.d(t, {
                M: () => o,
                W: () => n
            });
            let i = new(a(815048)).O2("teamspaceDirectory", () => Promise.all([a.e(75134), a.e(33503), a.e(60262), a.e(10188), a.e(1843), a.e(49587)]).then(a.bind(a, 41947))),
                n = (0, a(815048)._h)(i, e => e.TeamspaceDirectoryView),
                r = new(a(815048)).O2("TeamspaceDirectoryOpenInSidePeekButton", async () => await Promise.all([a.e(75134), a.e(33503), a.e(60262), a.e(10188), a.e(1843), a.e(49587)]).then(a.bind(a, 707510))),
                o = (0, a(815048)._h)(r, e => e.TeamspaceDirectoryOpenInSidePeekButton)
        },
        292239: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var i = a(296540),
                n = a(474848);

            function r({
                scrollerStore: e,
                type: t,
                dividerColor: o,
                errorMargin: s = 4
            }) {
                let l = (0, a(682985).K8)(() => e.state.elementRef, [e]),
                    d = (0, a(239160).Xg)(l),
                    c = (0, a(239160).CR)(l),
                    u = (0, a(239160).sj)(l),
                    p = (0, a(239160).yE)(l),
                    g = (0, a(239160).o7)(l),
                    h = (0, a(239160).HJ)(l),
                    m = (0, i.useMemo)(() => {
                        if (!e) return !1;
                        switch (t) {
                            case "top":
                                return Math.round(p) > s;
                            case "bottom":
                                return Math.abs(Math.round(p) - (c - g)) > s;
                            case "left":
                                return Math.round(u) > s;
                            case "right":
                                return Math.abs(Math.round(u) - (d - h)) > s
                        }
                    }, [e, t, s, d, c, u, p, g, h]),
                    y = "left" === t || "right" === t,
                    f = (0, a(960253).I)(() => ({
                        divider: {
                            flexShrink: 0,
                            boxShadow: m ? y ? `1px 0 0 ${o??a(632079).Tj.border.secondaryTranslucent}` : `0 1px 0 ${o??a(632079).Tj.border.secondaryTranslucent}` : "0 0 0 transparent",
                            transition: "box-shadow 300ms",
                            ...y ? {
                                width: 1,
                                height: "100%",
                                marginInlineStart: -1
                            } : {
                                height: 1,
                                width: "100%",
                                marginTop: -1
                            },
                            zIndex: 99
                        }
                    }), [y, m, o]);
                return (0, n.jsx)("div", {
                    style: f.divider
                })
            }
        },
        349387: (e, t, a) => {
            a.d(t, {
                B: () => n,
                L: () => i
            });
            let i = 30,
                n = 20
        },
        360367: (e, t, a) => {
            function i(e) {
                let {
                    allPages: t,
                    state: i,
                    intl: n
                } = e, {
                    query: r
                } = i;
                return t.map(e => {
                    if (!e.isDefined()) return;
                    let t = e.getLastEditedTime() || e.getCreatedTime();
                    if (!t) return;
                    let i = e.getLastEditedByPointer() ? ? e.getCreatedByPointer();
                    if ((0, a(171231).Pt)({
                            block: e.getModel(),
                            query: r,
                            getRecordModel: e.getRecordModel,
                            userTimeZone: (0, a(714350).P)(),
                            intl: n
                        })) return {
                        blockId: e.id,
                        store: e,
                        timestamp: t,
                        authorPointer: i
                    }
                }).filter(a(722371).O9)
            }

            function n(e) {
                let {
                    pageItems: t
                } = e;
                return a(381453).Ul(t, ({
                    timestamp: e
                }) => e).reverse()
            }
            a.d(t, {
                $e: () => n,
                L$: () => i,
                Lh: () => s,
                OJ: () => o
            }), a(898992), a(354520), a(581454);
            let r = (0, a(109939).YK)({
                updatedToday: {
                    id: "sharedWithMePopover.updatedTodaySection.label",
                    defaultMessage: "Updated today"
                },
                today: {
                    id: "sharedWithMePopover.todaySection.label",
                    defaultMessage: "Today"
                },
                updatedPastWeek: {
                    id: "sharedWithMePopover.updatedPastWeekSection.label",
                    defaultMessage: "Updated in the past week"
                },
                pastWeek: {
                    id: "sharedWithMePopover.pastWeekSection.label",
                    defaultMessage: "Past week"
                },
                updatedEarlier: {
                    id: "sharedWithMePopover.updatedEarlierSection.label",
                    defaultMessage: "Updated earlier"
                },
                earlier: {
                    id: "sharedWithMePopover.earlierSection.label",
                    defaultMessage: "Earlier"
                }
            });

            function o(e) {
                let {
                    section: t,
                    isFirst: i
                } = e;
                switch (t) {
                    case "today":
                        return i ? a(962299).A.formatMessage(r.updatedToday) : a(962299).A.formatMessage(r.today);
                    case "past-week":
                        return i ? a(962299).A.formatMessage(r.updatedPastWeek) : a(962299).A.formatMessage(r.pastWeek);
                    case "earlier":
                        return i ? a(962299).A.formatMessage(r.updatedEarlier) : a(962299).A.formatMessage(r.earlier);
                    case "all":
                        return;
                    default:
                        throw (0, a(722371).HB)(t)
                }
            }

            function s(e) {
                let t = "today",
                    i = "past-week",
                    n = "earlier",
                    r = (0, a(25825).ah)((0, a(714350).P)()),
                    o = r.valueOf(),
                    s = r.minus({
                        week: 1
                    }).valueOf(),
                    l = a(381453).$z(e, ({
                        timestamp: e
                    }) => e > o ? t : e > s ? i : n),
                    d = -1;
                return a(381453).oE([t, i, n].map(e => {
                    let t = l[e];
                    if (t && 0 !== t.length) return {
                        key: e,
                        pages: t.map(e => (d += 1, { ...e,
                            index: d
                        }))
                    }
                }))
            }
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
        402991: (e, t, a) => {
            a.d(t, {
                X: () => s
            }), a(296540);
            var i = a(474848);
            let n = {
                    paddingInline: 16,
                    paddingTop: 8,
                    paddingBottom: 13
                },
                r = {
                    width: "100%"
                },
                o = {
                    paddingInline: 12,
                    paddingTop: 9,
                    paddingBottom: 12
                };

            function s(e) {
                let {
                    onClick: t,
                    isInNewSlipperyFlyout: s
                } = e, l = (0, a(109939).tz)();
                return (0, i.jsx)("div", {
                    style: s ? o : n,
                    children: (0, i.jsx)(a(265779).E, {
                        onClick: t,
                        style: r,
                        children: l.formatMessage(a(854615).D.openInLibrary)
                    })
                })
            }
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
        423905: (e, t, a) => {
            a.r(t), a.d(t, {
                SecondarySidebar: () => E
            });
            var i = a(296540);
            a(944114), a(898992), a(354520), a(581454);
            var n = a.n(a(844751)),
                r = a(474848);
            let o = (0, a(109939).YK)({
                    trashIconAriaLabel: {
                        id: "assistantChatHistoryIcon.deleteSession.label",
                        defaultMessage: "Delete chat"
                    },
                    chatHistoryConfirmation: {
                        id: "assistantChatHistory.deleteConfirmation.message",
                        defaultMessage: "Are you sure you want to delete this chat?"
                    }
                }),
                s = {
                    labelArea: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 6,
                        minWidth: 0
                    },
                    titleArea: {
                        overflow: "hidden"
                    },
                    captionStyle: {
                        fontSize: 12,
                        fontWeight: a(699422).Wy.regular,
                        color: a(632079).Tj.text.tertiary
                    },
                    style0: {
                        height: 16,
                        width: 16
                    }
                },
                l = i.forwardRef((e, t) => {
                    let {
                        chatTranscriptInfo: n,
                        hideBottomBorder: l,
                        isSelected: c,
                        isThreadActionsMenuEnabled: p,
                        ...g
                    } = e, h = (0, a(533992).v3)(), m = (0, a(109939).tz)(), {
                        type: y
                    } = (0, a(316258).jw)(), f = (0, a(960270).m)(n), S = (0, a(799843).nl)(f, {
                        useCompactFormat: !0,
                        roundDownYears: !0,
                        useWeeks: !0,
                        useLowercase: !0
                    }), x = (0, a(682985).K8)(() => {
                        if ("assistant" !== n.configType) {
                            var e;
                            let t = null == (e = n.store.getData()) ? void 0 : e.title;
                            if (t && t.length > 0) return t
                        }
                        return n.title
                    }, [n]), b = "corner" === y ? "corner_chat" : "full_page", v = (0, i.useCallback)(async () => {
                        if ("assistant" === n.configType) return;
                        let e = n.store.getSpaceId();
                        try {
                            await (0, a(757688).vy)({
                                chatTranscriptInfo: n,
                                environment: h,
                                clientStore: a(57168).defaultClientAIChatStore
                            })
                        } catch (e) {
                            (0, a(222024).t)().error({
                                from: "AssistantChatHistoryItem",
                                type: "deleteInferenceTranscriptFailed",
                                error: e
                            });
                            return
                        }
                        e && (0, a(104310).u)({
                            event: {
                                eventName: "chat_thread_deleted",
                                eventProperties: {
                                    thread_id: n.id,
                                    space_id: e,
                                    source: b
                                }
                            }
                        }), a(422052).trackAIChatTranscriptHistoryChatDeleted({
                            source: y
                        })
                    }, [h, y, n, b]), w = (0, i.useCallback)(async () => {
                        (await a(647095).Gh({
                            message: m.formatMessage(o.chatHistoryConfirmation)
                        })).accept && ("assistant" === n.configType ? ((0, a(928482).deleteAssistantChatSession)({
                            sessionId: n.id,
                            environment: h
                        }), a(422052).trackAIChatTranscriptHistoryChatDeleted({
                            source: y
                        })) : await v())
                    }, [m, h, y, n, v]), T = (0, i.useCallback)(async () => {
                        await v()
                    }, [v]), j = (0, i.useCallback)(() => {
                        "assistant" !== n.configType && (0, a(862451).navigateToInferenceTranscriptRoute)({
                            environment: h,
                            oldThreadStore: void 0,
                            newThreadStore: n.store,
                            openInNewTab: !0
                        })
                    }, [h, n]), [M, A] = (0, a(848135).B)(), k = (0, a(682985).K8)(() => "assistant" !== n.configType && "writer" === n.store.getCreatedSource(), [n]), I = (0, a(960253).I)(() => ({
                        buttonStyle: { ...a(986939).A.isMobile && {
                                background: a(632079).Tj.background.primary,
                                boxShadow: void 0
                            },
                            ...c && !a(986939).A.isMobile ? {
                                background: a(632079).Tj.sidebarItemSelectedBackground
                            } : {},
                            minHeight: 30,
                            borderRadius: 6,
                            padding: "4px 0px"
                        }
                    }), [c]), C = (0, a(421573).A)(t, M);
                    return (0, r.jsx)(a(95582).A, { ...g,
                        ref: C,
                        icon: (0, r.jsx)(d, {
                            chatTranscriptInfo: n
                        }),
                        buttonStyle: I.buttonStyle,
                        titleStyle: s.labelArea,
                        title: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a(111010).D, {
                                styleKey: "bodyMedium",
                                style: s.titleArea,
                                children: (0, r.jsx)(a(503473).j, {
                                    children: x
                                })
                            }), k ? (0, r.jsx)(a(746434).E, {
                                content: "Writer",
                                color: "gray"
                            }) : null]
                        }),
                        caption: S,
                        captionStyle: s.captionStyle,
                        right: (a(986939).A.isMobile || g.focused || A) && ("assistant" !== n.configType ? p ? (0, r.jsx)(a(693683).R, {
                            threadStore: n.store,
                            onDelete: T,
                            onOpenInNewTab: j
                        }) : (0, r.jsx)(a(374533).A, {
                            icon: a(968411).trashIcon,
                            ariaLabel: m.formatMessage(o.trashIconAriaLabel),
                            colorVariant: "secondary",
                            iconStyle: s.style0,
                            onClick: e => {
                                e.stopPropagation(), T()
                            }
                        }) : (0, r.jsx)(u, {
                            onDeleteHistoryItem: w
                        }))
                    })
                });

            function d(e) {
                let {
                    chatTranscriptInfo: t
                } = e, i = (0, a(682985).K8)(() => {
                    var e;
                    if ("assistant" === t.configType) return;
                    let i = null == (e = t.store.getData()) ? void 0 : e.agent_message_key;
                    if (i) return (0, a(221507).c)(i)
                }, [t]);
                if (i) return (0, r.jsx)(a(16275).I, {
                    size: "default",
                    icon: i,
                    colorVariant: "secondary"
                });
                switch (t.configType) {
                    case "researcher":
                        return (0, r.jsx)(a(16275).I, {
                            size: "default",
                            icon: a(46552).P,
                            colorVariant: "secondary"
                        });
                    case "setup-generator":
                        return (0, r.jsx)(a(16275).I, {
                            size: "default",
                            icon: a(334015).c,
                            colorVariant: "secondary"
                        });
                    default:
                        return (0, r.jsx)(a(16275).I, {
                            size: "default",
                            icon: a(799891).y,
                            colorVariant: "secondary"
                        })
                }
            }
            l.displayName = "AssistantChatHistoryItem";
            let c = {
                container: {
                    padding: 3,
                    borderRadius: 6,
                    ...a(986939).A.isMobile && {
                        marginInlineEnd: 16
                    }
                },
                trashIcon: {
                    height: 16,
                    width: 16,
                    color: a(632079).Tj.icon.tertiary
                }
            };

            function u(e) {
                let {
                    onDeleteHistoryItem: t
                } = e, i = (0, a(109939).tz)();
                return (0, r.jsx)(a(374533).A, {
                    icon: a(968411).trashIcon,
                    ariaLabel: i.formatMessage(o.trashIconAriaLabel),
                    style: c.container,
                    iconStyle: c.trashIcon,
                    onClick: t
                })
            }
            let p = (0, a(109939).YK)({
                    chatHistorySearchPlaceholder: {
                        id: "assistant.chatHistory.placeholder",
                        defaultMessage: "Search or start new chat"
                    },
                    untitledChat: {
                        id: "assistant.chatHistory.untitledChat",
                        defaultMessage: "New AI chat"
                    }
                }),
                g = {
                    padding: 12,
                    marginTop: 10
                };

            function h(e) {
                let {
                    onRestoreChatSession: t
                } = e, o = (0, a(533992).v3)(), s = (0, a(109939).tz)(), [d, c] = i.useState(""), u = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore), h = (0, a(316258).jw)(), {
                    renderChatHistoryAsFullPage: m
                } = h, f = h.isType("fullPage"), S = h.supportsChatHistoryWithInferenceTranscripts, x = (0, a(352118).s)({
                    parentStore: u,
                    threadStore: void 0,
                    isEnabled: S,
                    enableInfiniteScroll: !0,
                    includeWriterChats: !1
                }), b = (0, a(682985).K8)(() => {
                    let e = !a(611021).A.state.initialFetchComplete;
                    if (S) {
                        let t = "pending" === x.status || "idle" === x.status;
                        return e || t
                    }
                    return e
                }, [S, x.status]), v = (0, a(83208).X)("ai_thread_actions_menu");
                ! function(e = !0) {
                    let t = (0, i.useRef)(!1),
                        n = (0, a(533992).v3)(),
                        r = (0, a(723240).r)(),
                        {
                            haveFetchedChatHistory: o,
                            isFetchingChatHistory: s
                        } = (0, a(682985).K8)(() => ({
                            haveFetchedChatHistory: a(611021).A.state.initialFetchComplete,
                            isFetchingChatHistory: a(611021).A.state.isFetching
                        }), []);
                    (0, a(97668).Yb)(async () => {
                        s || o || !e || t.current || (t.current = !0, await (0, a(928482).loadChatHistoryForUserSpace)({
                            environment: n,
                            spaceId: r
                        }))
                    }, [n, o, r, e, s])
                }();
                let w = (0, a(682985).K8)(() => u ? (x.value ? ? []).map(e => {
                        let t = a(174148).E.createChildStore(u, {
                            id: e.id,
                            table: a(832375).Toz,
                            spaceId: u.id
                        });
                        if (t.isDefined() && !1 === t.getAlive()) return;
                        let i = e.type;
                        if (i) return {
                            id: e.id,
                            configType: i,
                            title: e.title ? ? s.formatMessage(p.untitledChat),
                            description: "",
                            updatedTime: e.updated_at,
                            createdTime: e.created_at,
                            store: t
                        }
                    }).filter(a(722371).O9) : [], [u, x.value, s]),
                    T = (0, i.useMemo)(() => a(381453).Ul(w, e => -(0, a(960270).m)(e)), [w]),
                    M = (0, i.useCallback)(() => {
                        x.loadMore && x.hasMore && !x.isLoadingMore && x.loadMore()
                    }, [x]),
                    I = (0, i.useMemo)(() => d ? n().filter(d, T, {
                        extract: e => "string" == typeof e.title ? `${e.title} ${e.description}` : e.description
                    }).map(e => e.original) : T, [d, T]),
                    C = (0, i.useMemo)(() => a(381453).$z(I, e => (0, a(601860).ht)((0, a(960270).m)(e))), [I]),
                    P = (0, a(682985).K8)(() => {
                        let {
                            route: e
                        } = o.RouterStore.state;
                        if ("chat" === e.name) {
                            let {
                                threadId: t
                            } = e;
                            if (t) return t
                        }
                        let t = a(838448).default.getActiveSession();
                        return null == t ? void 0 : t.sessionIdFromStoreState
                    }, [o]),
                    _ = (0, a(682985).K8)(() => {
                        let e = a(601860).Rj.map(e => {
                            let i = C[e] ? ? [];
                            if (0 === i.length) return;
                            let n = i.findIndex(e => e.id === P);
                            return {
                                key: e,
                                render: t => (0, r.jsx)(a(844565).A, { ...t,
                                    title: (0, r.jsx)(a(916084).sg, {
                                        bucket: e
                                    }),
                                    enableActionSheetTitle: !0
                                }),
                                items: i.map((e, i) => (function(e) {
                                    let {
                                        environment: t,
                                        onRestoreChatSession: i,
                                        chatTranscriptInfo: n,
                                        isChatItemSelected: o,
                                        isBeforeSelectedChatItem: s,
                                        assistantSurface: d,
                                        isThreadActionsMenuEnabled: c
                                    } = e;
                                    return {
                                        key: n.id,
                                        render: e => (0, r.jsx)(l, { ...e,
                                            chatTranscriptInfo: n,
                                            isSelected: o,
                                            hideBottomBorder: e.focused || e.isBeforeFocused || e.isLastInSection || s,
                                            isThreadActionsMenuEnabled: c
                                        }),
                                        action: ({
                                            event: e
                                        }) => {
                                            let r = "tab" === (0, a(7029).V)(e);
                                            a(305721).trackAgentChatHistoryItemClicked({
                                                threadId: n.id,
                                                from: "ai_home"
                                            }), (0, a(928482).performSecondarySidebarAction)({
                                                environment: t,
                                                action: () => {
                                                    "assistant" === n.configType ? (0, a(661518).bl)({
                                                        environment: t,
                                                        chatStore: n.store,
                                                        onRestoreChatSession: () => {
                                                            a(519110).assistantMenuStore.setState({
                                                                currentView: "chat",
                                                                open: d.shouldOpenAssistantMenuOnRestoreChatSession,
                                                                from: "secondary_sidebar",
                                                                isAssistantInputEmpty: !0
                                                            }), d.isType("fullPage") && (0, a(79266).navigate)({
                                                                environment: t,
                                                                url: a(168962).JZ.chat
                                                            }), null == i || i()
                                                        },
                                                        assistantSurface: d
                                                    }) : (a(519110).assistantMenuStore.setState({ ...a(519110).assistantMenuStore.state,
                                                        open: !1
                                                    }), (0, a(862451).navigateToInferenceTranscriptRoute)({
                                                        environment: t,
                                                        oldThreadStore: void 0,
                                                        newThreadStore: n.store,
                                                        openInNewTab: r
                                                    }), null == i || i())
                                                }
                                            })
                                        }
                                    }
                                })({
                                    environment: o,
                                    chatTranscriptInfo: e,
                                    onRestoreChatSession: t,
                                    isChatItemSelected: e.id === P,
                                    isBeforeSelectedChatItem: -1 !== n && n - 1 === i,
                                    assistantSurface: h,
                                    isThreadActionsMenuEnabled: v
                                })).filter(a(722371).O9)
                            }
                        }).filter(a(722371).O9);
                        return 0 === e.length && f && e.push({
                            key: "empty",
                            items: [{
                                key: "no_results",
                                render: () => (0, r.jsx)(A, {}),
                                action: a(763230).lQ
                            }]
                        }), f || e.push({
                            key: "empty",
                            items: [{
                                key: "start_new_chat_option",
                                render: e => (0, r.jsx)(k, { ...e
                                }),
                                action: () => {
                                    (0, a(928482).performSecondarySidebarAction)({
                                        environment: o,
                                        action: () => {
                                            (0, a(661518).Dd)({
                                                environment: o,
                                                source: h.type
                                            })
                                        }
                                    })
                                }
                            }]
                        }), e
                    }, [o, C, t, P, h, v, f]),
                    B = (0, r.jsx)(j, {
                        userSearchQuery: d,
                        setUserSearchQuery: c,
                        onFocus: () => {
                            (0, a(471e3).I)({
                                environment: o
                            })
                        }
                    }),
                    D = { ...(0, a(457067).e)(),
                        header: B,
                        ...m ? {
                            minHeight: 0,
                            maxHeight: a(986939).A.isMobile || f ? "100vh" : "calc(100vh - 36px)"
                        } : {
                            minHeight: 0,
                            height: 450
                        }
                    };
                return (0, r.jsx)(a(747369).A, { ...D,
                    children: b ? (0, r.jsx)("div", {
                        style: g,
                        children: (0, r.jsxs)(a(4458).VP, {
                            gap: 32,
                            children: [(0, r.jsx)(y, {
                                count: 4
                            }), (0, r.jsx)(y, {
                                count: 10
                            })]
                        })
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(a(558045).A, {
                            style: a(986939).A.isMobile ? void 0 : f ? {
                                padding: "0 4px 16px 4px"
                            } : {
                                padding: "0 4px 4px 4px"
                            },
                            type: a(558045).O.Vertical,
                            initialFocus: void 0,
                            sections: _
                        }), x.isLoadingMore ? (0, r.jsx)("div", {
                            style: g,
                            children: (0, r.jsx)(a(517334).k, {})
                        }) : void 0, (0, r.jsx)(a(775070).A, {
                            onLoadMore: M,
                            loading: !!x.isLoadingMore,
                            loadMoreOffsetThreshold: 100
                        })]
                    })
                })
            }
            let m = {
                sectionHeader: {
                    height: 13,
                    width: 60,
                    borderRadius: 4
                },
                icon: {
                    height: 28,
                    width: 28,
                    borderRadius: 4
                },
                container: {
                    borderBottom: `1px solid ${a(632079).Tj.border.secondaryTranslucent}`,
                    paddingBottom: 15
                }
            };

            function y(e) {
                let {
                    count: t
                } = e, i = Array.from({
                    length: t
                }, () => !0);
                return (0, r.jsxs)(a(4458).VP, {
                    gap: 24,
                    children: [(0, r.jsx)(a(795830).P, {
                        style: m.sectionHeader
                    }), (0, r.jsx)(a(4458).VP, {
                        gap: 12,
                        children: i.map((e, t) => (0, r.jsx)("div", {
                            style: m.container,
                            children: (0, r.jsxs)(a(4458).fI, {
                                gap: 16,
                                children: [(0, r.jsx)(a(795830).P, {
                                    style: m.icon
                                }), (0, r.jsx)(w, {})]
                            })
                        }, `chat-history-shimmer-${t}`))
                    })]
                })
            }
            let f = {
                    width: 200,
                    height: 20,
                    borderRadius: 4
                },
                S = {
                    height: 12,
                    borderRadius: 4
                },
                x = {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 5
                },
                b = {
                    width: "55%"
                },
                v = {
                    width: "65%"
                };

            function w() {
                return (0, r.jsxs)("div", {
                    style: x,
                    children: [(0, r.jsx)(a(795830).P, {
                        style: { ...f,
                            ...b
                        }
                    }), (0, r.jsx)(a(795830).P, {
                        style: { ...S,
                            ...v
                        }
                    })]
                })
            }
            let T = {
                inputOuterStyle: {
                    backgroundColor: a(632079).Tj.whiteButtonBackground,
                    borderRadius: 6,
                    padding: "4px 8px"
                },
                inputStyle: {
                    backgroundColor: a(632079).Tj.whiteButtonBackground
                }
            };

            function j(e) {
                let {
                    onFocus: t,
                    userSearchQuery: i,
                    setUserSearchQuery: n
                } = e, o = (0, a(109939).tz)(), s = (0, a(533992).v3)(), l = (0, a(316258).jw)(), d = (0, a(960253).I)(() => ({
                    container: l.isType("corner") || l.isType("fullPage") ? {
                        paddingTop: 0,
                        paddingInlineEnd: 8,
                        paddingBottom: 4,
                        paddingInlineStart: 8
                    } : l.isCommandSearchOrSearchPane ? {
                        paddingTop: 10,
                        paddingInlineEnd: 8,
                        paddingBottom: 2,
                        paddingInlineStart: 8,
                        ...l.isType("commandSearch") && { ...(0, a(1249).g)({
                                noDrag: !0
                            })
                        }
                    } : {
                        padding: "10px 0 2px"
                    }
                }), [l]);
                return (0, r.jsx)(a(310324).Ay, {
                    autoFocus: a(986939).A.isMobile,
                    onFocus: t,
                    ...l.isType("fullPage") ? {
                        showClearButton: !0
                    } : {},
                    style: d.container,
                    inputOuterStyle: T.inputOuterStyle,
                    inputStyle: T.inputStyle,
                    value: i,
                    onChange: e => {
                        n(e.target.value)
                    },
                    placeholder: o.formatMessage(p.chatHistorySearchPlaceholder),
                    onSubmit: () => {
                        (0, a(928482).performSecondarySidebarAction)({
                            environment: s,
                            action: async () => {
                                await (0, a(519110).handleSubmitNewQuestion)({
                                    newValue: [
                                        [i]
                                    ],
                                    environment: s,
                                    currentClientSkillWithSettings: void 0,
                                    shouldForceStartNewSession: !0,
                                    source: "transcript",
                                    assistantSurfaceType: l.type
                                }), a(519110).assistantMenuStore.setState({ ...a(519110).assistantMenuStore.state,
                                    currentView: "chat"
                                })
                            }
                        })
                    }
                })
            }
            let M = {
                noResultsMessage: {
                    paddingTop: 30,
                    paddingBottom: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: a(632079).Tj.text.tertiary,
                    fontSize: 12
                }
            };

            function A() {
                return (0, r.jsx)("div", {
                    style: M.noResultsMessage,
                    children: (0, r.jsx)(a(109939).sA, {
                        id: "assistant.chatHistory.noResults",
                        defaultMessage: "No results"
                    })
                })
            }
            let k = i.forwardRef((e, t) => (0, r.jsx)(a(95582).A, {
                ref: t,
                ...e,
                icon: (0, r.jsx)(a(16275).I, {
                    size: "default",
                    icon: a(581923).plusIcon,
                    colorVariant: "secondary"
                }),
                title: (0, r.jsx)(a(109939).sA, {
                    id: "assistant.chatHistory.startNewChat",
                    defaultMessage: "Start a new AI chat"
                })
            }));
            k.displayName = "CreateNewChatMenuItem";
            let I = (0, a(815048)._h)(new(a(815048)).O2("TeamsSecondarySidebarContent", async () => await Promise.all([a.e(48095), a.e(18802), a.e(20491), a.e(10469), a.e(87492)]).then(a.bind(a, 642204))), e => e.SidebarTeamBrowserContent),
                C = (0, a(815048)._h)(new(a(815048)).O2("AgentsSecondarySidebarContent", async () => await Promise.all([a.e(48095), a.e(18802), a.e(20491), a.e(10469), a.e(87492)]).then(a.bind(a, 357789))), e => e.AgentsSecondarySidebarContent),
                P = (0, a(109939).YK)({
                    searchPlaceholder: {
                        id: "morePagesSecondarySidebar.search.placeholder",
                        defaultMessage: "Search for a page…"
                    }
                }),
                _ = {
                    width: "100%",
                    height: "100%",
                    overflow: "hidden"
                },
                B = {
                    height: "100%"
                };

            function D(e) {
                let {
                    type: t
                } = e, n = (0, a(109939).tz)(), o = (0, a(533992).v3)(), s = (0, a(533992).Y0)(), l = (0, a(682985).uB)(void 0, a(593423).A), d = (0, i.useRef)(null), c = (0, i.useRef)(null), u = (0, a(239160).o7)(d), p = (0, a(239160).CR)(c) + 100 > u, {
                    sidebarSpaceStore: g,
                    sidebarSpaceViewStore: h,
                    currentUserSettingsStore: m
                } = (0, a(682985).K8)(() => ({
                    sidebarSpaceStore: (0, a(328765).S)(),
                    sidebarSpaceViewStore: a(728372).AppStoreSidebarSpaceViewStore.state,
                    currentUserSettingsStore: a(728372).AppStoreCurrentUserSettingsStore.state
                }), []), y = (0, a(682985).K8)(() => h && m ? "favorites" === t ? h.getBookmarkedPages() : (0, a(500957).a)({
                    environment: o,
                    spaceViewStore: h,
                    userSettingsStore: m,
                    type: t
                }).state.allPagesStores : [], [h, o, t, m]), f = (0, i.useMemo)(() => ({
                    query: "",
                    numPagesShown: a(349387).L
                }), []), [S, x] = i.useState(f), b = (0, a(682985).uB)(void 0, a(419110).$), v = (0, a(682985).K8)(() => h ? (0, a(822209).R)({
                    environment: o,
                    spaceViewStore: h,
                    type: t,
                    userSettingsStore: m
                }).sortOption : "manual", [h, t, m, o]), w = (0, a(682985).K8)(() => {
                    let e = (0, a(360367).L$)({
                        allPages: y,
                        state: S,
                        intl: n
                    });
                    return "manual" === v ? e : (0, a(360367).$e)({
                        pageItems: e
                    })
                }, [y, S, n, v]), T = (0, i.useMemo)(() => "manual" === v ? w.length > 0 ? [{
                    key: "all",
                    pages: w.map((e, t) => ({ ...e,
                        index: t
                    }))
                }] : [] : (0, a(360367).Lh)(w), [v, w]), j = (0, a(960253).I)(() => ({
                    scrollBorderContainer: {
                        width: s.isPhone ? void 0 : "calc(100% - 1px)"
                    }
                }), [s.isPhone]), M = (0, a(682985).K8)(() => a(550830).default.state.mode, []), A = (0, a(682985).K8)(() => a(475097).default.isCenterPeekOpen() || a(752085).A.state.open, []), k = (0, a(682985).K8)(() => a(550830).default.isVisible(), []), I = (0, i.useCallback)(() => {
                    a(477810).VI({
                        environment: o
                    })
                }, [o]), C = (0, a(83208).X)("sidebar_library") && !s.isPhone, P = (0, i.useCallback)(async e => {
                    (await (0, a(337439).p)())({
                        event: e,
                        environment: o,
                        analyticsFrom: "sidebar_section_more_button",
                        viewName: t
                    })
                }, [o, t]), D = (0, a(682985).K8)(() => void 0 !== h && (0, a(822209).X)({
                    environment: o,
                    spaceViewStore: h,
                    userSettingsStore: m
                }), [o, h, m]), V = (0, a(682985).K8)(() => (0, a(336136).Vk)(), []), L = (0, a(67499).S)(), R = (0, a(682985).K8)(() => {
                    if (h && g) return (0, a(576536).rE)({
                        typeWithTeam: {
                            type: "private"
                        },
                        spaceStore: g,
                        spaceViewStore: h
                    })
                }, [h, g]), K = (0, i.useCallback)(({
                    draggingStores: e
                }) => "private" === t && !!D && !!g && (0, a(576536).ox)({
                    environment: o,
                    draggingStores: e,
                    parentStore: R,
                    spaceStore: g,
                    pageContext: L
                }), [t, D, g, o, R, L]), {
                    value: N
                } = (0, a(815048).fJ)(a(411648).VI.duplicateActions), E = (0, a(993077).U2)(g), J = (0, i.useCallback)(async e => {
                    R && await a(245757).RM({
                        dropArgs: e,
                        environment: o,
                        type: "private",
                        isDroppingOnFullSection: !0,
                        parentStore: R,
                        duplicateActions: N,
                        spaceUserStore: E
                    })
                }, [N, o, R, E]);
                return g && h && k ? (0, r.jsx)(a(318981).A, {
                    droppable: !0,
                    disableEditNearestBlock: !0,
                    store: g,
                    disable: A,
                    disableRectangularSelection: !0,
                    render: ({
                        selectableEvents: e
                    }) => (0, r.jsx)("div", {
                        style: _,
                        ...e,
                        children: (0, r.jsxs)(a(747369).A, {
                            ref: d,
                            menuType: a(649476).gu.Popup,
                            disableScroller: !0,
                            header: (0, r.jsx)(z, {
                                state: S,
                                setState: x,
                                menuListStore: b,
                                type: t
                            }),
                            footer: C && p ? (0, r.jsx)(a(402991).X, {
                                onClick: P,
                                isInNewSlipperyFlyout: !1
                            }) : void 0,
                            maxHeight: "100%",
                            children: [(0, r.jsx)("div", {
                                style: j.scrollBorderContainer,
                                children: (0, r.jsx)(a(292239).A, {
                                    scrollerStore: l,
                                    type: "top"
                                })
                            }), (0, r.jsxs)(a(126767).H, {
                                store: l,
                                type: a(644154).A.Y,
                                style: B,
                                children: [(0, r.jsx)("div", {
                                    ref: c,
                                    children: (0, r.jsx)(a(634944).Tl, {
                                        dropTargetKey: "secondarySidebarPrivateSection",
                                        canDropOnto: !0,
                                        canDropBelow: !1,
                                        canAcceptDrop: K,
                                        onSelectableDrop: J,
                                        shouldShowDropZone: D,
                                        children: (0, r.jsx)(a(677299).A, {
                                            sections: T,
                                            state: S,
                                            setState: x,
                                            type: a(669439).BP[t],
                                            spaceStore: g,
                                            spaceViewStore: h,
                                            visiblePageIds: [],
                                            onClose: I,
                                            menuListStore: b,
                                            renderSections: e => (function(e) {
                                                let {
                                                    sections: t,
                                                    onClose: i,
                                                    environment: n,
                                                    mode: o,
                                                    type: s,
                                                    assistantCreatedPageIds: l,
                                                    hasManageLibrary: d
                                                } = e, c = 1 === t.length;
                                                return t.map(({
                                                    key: e,
                                                    pages: u
                                                }, p) => ({
                                                    key: e,
                                                    items: u.map(({
                                                        blockId: e,
                                                        store: t,
                                                        index: d
                                                    }) => {
                                                        if (!((0, a(722371).O9)(l) && l.includes(e))) return {
                                                            key: e,
                                                            action: ({
                                                                event: e
                                                            }) => {
                                                                let r = (0, a(7029).V)(e);
                                                                r || "peek" !== o || i(), (0, a(545586).navigateToBlock)({
                                                                    environment: n,
                                                                    store: t,
                                                                    openInNew: r,
                                                                    pageVisitSource: (0, a(318506).N)({
                                                                        type: F(s),
                                                                        from: "secondary_sidebar"
                                                                    })
                                                                })
                                                            },
                                                            render: () => (0, r.jsx)(O, {
                                                                store: t,
                                                                itemIndex: d,
                                                                type: s
                                                            })
                                                        }
                                                    }).filter(a(722371).O9),
                                                    render: i => (0, r.jsx)(a(844565).A, { ...i,
                                                        desktopTitleStyle: {
                                                            paddingInlineStart: 16,
                                                            paddingTop: 4 * (0 !== p)
                                                        },
                                                        topBorder: !1,
                                                        title: c ? void 0 : (0, a(360367).OJ)({
                                                            section: e,
                                                            isFirst: !1
                                                        }),
                                                        style: {
                                                            paddingTop: 0,
                                                            marginTop: 0,
                                                            paddingBottom: 30 * (p === t.length - 1 && !d)
                                                        }
                                                    })
                                                }))
                                            })({
                                                spaceStore: g,
                                                environment: o,
                                                onClose: I,
                                                sections: e,
                                                mode: M,
                                                type: t,
                                                assistantCreatedPageIds: V,
                                                hasManageLibrary: C && !p
                                            })
                                        })
                                    })
                                }), C && !p ? (0, r.jsx)(a(402991).X, {
                                    onClick: P,
                                    isInNewSlipperyFlyout: !1
                                }) : void 0]
                            })]
                        })
                    })
                }) : null
            }
            let V = {
                inputOuter: {
                    borderRadius: 6,
                    backgroundColor: a(632079).Tj.whiteButtonBackground,
                    padding: "4px 8px"
                },
                menuItem: {
                    paddingBottom: 8
                }
            };

            function z({
                state: e,
                setState: t,
                menuListStore: n,
                type: o
            }) {
                let s = (0, i.useRef)(null),
                    l = (0, a(533992).v3)(),
                    d = (0, a(109939).tz)(),
                    c = (0, i.useCallback)(e => {
                        t({
                            query: e.target.value,
                            numPagesShown: a(349387).L
                        }), n.setState({ ...n.state,
                            focus: {
                                section: 0,
                                indexLocal: 0,
                                indexGlobal: 0,
                                footerFocused: !1
                            }
                        }), (0, a(283674).I)(l, {
                            sidebar_section_type: o,
                            search_query: e.target.value,
                            flow_id: a(550830).default.state.flowId
                        })
                    }, [l, n, t, o]),
                    u = (0, i.useCallback)(() => {
                        s.current && (0, a(471e3).I)({
                            environment: l,
                            phase: a(476987).o.Editing
                        })
                    }, [l]);
                return (0, r.jsx)(a(844565).A, {
                    style: V.menuItem,
                    children: (0, r.jsx)(a(519451).A, {
                        debugName: "MorePagesSecondarySidebarContentInput",
                        capture: !0,
                        allowSearch: !0,
                        allowOpenLinkMenu: !0,
                        allowEsc: !0,
                        children: (0, r.jsx)(a(310324).Ay, {
                            ref: s,
                            focusInitial: !0,
                            onFocus: u,
                            showClearButton: !0,
                            inputOuterStyle: V.inputOuter,
                            itemMarginLeft: 0,
                            itemMarginRight: 0,
                            placeholder: d.formatMessage(P.searchPlaceholder),
                            value: e.query,
                            onChange: c
                        })
                    })
                })
            }
            let L = {
                borderRadius: 12,
                paddingInlineStart: 4,
                paddingInlineEnd: 4,
                width: "inherit",
                marginBottom: 1
            };

            function O(e) {
                let t = (0, a(533992).v3)(),
                    {
                        store: n,
                        itemIndex: o,
                        type: s
                    } = e,
                    {
                        sidebarSpaceViewStore: l,
                        sidebarSpaceStore: d,
                        currentUserSettingsStore: c
                    } = (0, a(682985).K8)(() => ({
                        sidebarSpaceViewStore: a(728372).AppStoreSidebarSpaceViewStore.state,
                        sidebarSpaceStore: (0, a(328765).S)(),
                        currentUserSettingsStore: a(728372).AppStoreCurrentUserSettingsStore.state
                    }), []),
                    u = F(s),
                    p = (0, a(682985).K8)(() => {
                        if (l && d) return (0, a(576536).rE)({
                            typeWithTeam: {
                                type: u
                            },
                            spaceStore: d,
                            spaceViewStore: l
                        })
                    }, [l, d, u]),
                    g = (0, a(682985).K8)(() => l ? "manual" === (0, a(822209).R)({
                        environment: t,
                        spaceViewStore: l,
                        type: s,
                        userSettingsStore: c
                    }).sortOption ? "primary" : "secondary" : "primary", [l, s, c, t]),
                    h = (0, a(828294).N)("ai_prompt_pages"),
                    m = (0, a(553635).sD)(),
                    y = (0, a(83208).X)("sidebar_loading_page_shimmer"),
                    {
                        agentProfilePageId: f,
                        dailyBriefPageId: S
                    } = (0, a(682985).K8)(() => {
                        var e;
                        let t = null == (e = a(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getSettingsStore().getKeyStore("agent_personalization_settings");
                        return {
                            agentProfilePageId: (null == t ? void 0 : t.getKeyValue("context_page_id")) ? ? void 0,
                            dailyBriefPageId: (null == t ? void 0 : t.getKeyStore("daily_brief_prompt").getKeyValue("page_id")) ? ? void 0
                        }
                    }, []),
                    x = (0, i.useCallback)(() => {
                        (0, a(541660).x)({
                            environment: t,
                            store: n,
                            type: u
                        })
                    }, [t, n, u]);
                return (0, r.jsx)("div", {
                    style: L,
                    children: (0, r.jsx)(a(824256).Mw, {
                        from: "secondary_sidebar",
                        parentStore: p,
                        variant: g,
                        type: u,
                        disabled: !1,
                        store: n,
                        itemIndex: o,
                        itemDepth: 0,
                        onNavigate: x,
                        isPromptPagesEnabled: h,
                        isMeetingNotesCustomPromptEnabled: m,
                        shimmerFeatureGateEnabled: y,
                        agentProfilePageId: f,
                        dailyBriefPageId: S
                    }, n.id)
                })
            }

            function F(e) {
                return "favorites" === e ? "bookmarks" : e
            }
            let R = {
                container: {
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    minHeight: 0,
                    color: a(632079).Tj.text.primary
                }
            };

            function K() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)(),
                    n = (0, a(972740).L)(),
                    o = (0, a(346596).L)(e),
                    s = (0, a(548124).useChatPanelState)(),
                    l = (0, a(558208).AD)(),
                    d = (0, a(682985).K8)(() => a(550830).default.isPeekDismissableState(), []),
                    c = (0, a(682985).K8)(() => {
                        let {
                            route: t
                        } = e.RouterStore.state;
                        return (0, a(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(t)
                    }, [e]),
                    u = (0, i.useCallback)(() => {
                        (0, a(705059).z)({
                            environment: e,
                            source: "button"
                        })
                    }, [e]),
                    p = (0, i.useCallback)(() => {
                        d && (0, a(705059).z)({
                            environment: e,
                            source: "keyboard_shortcut"
                        })
                    }, [e, d]),
                    {
                        state: g,
                        threadStore: h,
                        transcript: m
                    } = (0, a(732877).j)({
                        clientStore: a(57168).defaultClientAIChatStore,
                        chatPanelState: (null == s ? void 0 : s.isOpen) === !0 ? s : {
                            isOpen: !0,
                            isNewThread: !0
                        },
                        spaceStore: n
                    }),
                    y = (0, a(682985).K8)(() => {
                        var e;
                        return null == h || null == (e = h.getData()) ? void 0 : e.title
                    }, [h]);
                (0, i.useEffect)(() => {
                    a(550830).default.setState({ ...a(550830).default.state,
                        slipperySlopeChatThreadId: null == h ? void 0 : h.id,
                        slipperySlopeChatThreadTitle: y || void 0,
                        slipperySlopeChatThreadStore: h,
                        slipperySlopeChatThreadStoreState: g
                    })
                }, [g, h, y]), (0, i.useEffect)(() => () => {
                    a(550830).default.setState({ ...a(550830).default.state,
                        slipperySlopeChatThreadId: void 0,
                        slipperySlopeChatThreadTitle: void 0,
                        slipperySlopeChatThreadStore: void 0,
                        slipperySlopeChatThreadStoreState: void 0
                    })
                }, []);
                let f = (0, i.useCallback)(({
                    newThreadStore: i,
                    submitFrom: r
                }) => {
                    let s = a(728372).AppStoreMainEditorCurrentBlockStore.state || o;
                    if (!n || !s && !c) return;
                    let d = (0, a(951125).az)((0, a(478588).Bd)(n.id), r);
                    if (!i && "background" === d) return void a(819652).HK({
                        title: t.formatMessage(a(589820).LY.backgroundSendFailedToastTitle),
                        message: t.formatMessage(a(589820).LY.backgroundSendFailedToastMessage),
                        variant: "error",
                        presentationType: "transient"
                    });
                    if (l.reset(), "fullPage" === d) {
                        if (!i) return;
                        (0, a(705059).z)({
                            environment: e,
                            source: "programmatic"
                        }), (0, a(862451).navigateToInferenceTranscriptRoute)({
                            environment: e,
                            oldThreadStore: void 0,
                            newThreadStore: i
                        });
                        return
                    }
                    if ("background" === d) {
                        (0, a(705059).z)({
                            environment: e,
                            source: "programmatic"
                        }), a(819652).HK({
                            title: t.formatMessage(a(589820).LY.backgroundSendToastTitle),
                            message: t.formatMessage(a(589820).LY.backgroundSendToastMessage),
                            variant: "default",
                            presentationType: "transient"
                        });
                        return
                    }(0, a(358667).openChatPanel)({
                        environment: e,
                        store: s,
                        chatPanelState: i ? {
                            isOpen: !0,
                            threadId: i.id
                        } : {
                            isOpen: !0,
                            isNewThread: !0
                        }
                    })
                }, [o, e, t, c, n, l]);
                return (0, a(682985).K8)(() => !!(a(728372).AppStoreMainEditorCurrentBlockStore.state || o) || c, [o, c]) && n && null != s && s.isOpen ? (0, r.jsx)(a(316258).hP, {
                    surface: a(316258).wy.inferenceTranscriptChatView,
                    children: (0, r.jsx)(a(19187).e.Provider, {
                        value: u,
                        children: (0, r.jsx)("div", {
                            style: R.container,
                            children: (0, r.jsx)(a(656592).NV, {
                                aiChatFeature: "slippery_slope",
                                clientStore: a(57168).defaultClientAIChatStore,
                                hideAgentName: !0,
                                onEsc: p,
                                onThreadChange: f,
                                parentStore: n,
                                threadStore: h,
                                threadStoreState: g,
                                transcript: m || []
                            })
                        })
                    })
                }) : null
            }
            let N = {
                duration: 200
            };

            function E() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(682985).K8)(() => (0, a(715094).k)(e), [e]),
                    n = (0, i.useRef)(null),
                    {
                        mode: o,
                        openState: s,
                        contentType: l,
                        isOpen: d,
                        isVisible: c,
                        isTransitioningState: u,
                        isPeekDismissable: p
                    } = (0, a(682985).K8)(() => {
                        let {
                            mode: e,
                            openState: t,
                            contentType: i
                        } = a(550830).default.state;
                        return {
                            mode: e,
                            openState: t,
                            contentType: i,
                            isOpen: a(550830).default.isOpen(),
                            isVisible: a(550830).default.isVisible(),
                            isTransitioningState: a(550830).default.isTransitioningState(),
                            isPeekDismissable: a(550830).default.isPeekDismissableState()
                        }
                    }, []),
                    g = (0, i.useId)();
                (0, i.useEffect)(() => {
                    setTimeout(() => {
                        "closing" === s && a(550830).default.setState({ ...a(550830).default.state,
                            openState: "closed"
                        }), "opening" === s && a(550830).default.setState({ ...a(550830).default.state,
                            openState: "open"
                        })
                    }, N.duration + 100)
                }, [s]);
                let h = (0, a(682985).K8)(() => a(515492).Ay.getWidth(), []),
                    m = (0, a(682985).K8)(() => a(550830).default.state.isResizerHovered && a(550830).default.isOpen(), []),
                    y = (0, a(80384).n_)(),
                    f = (0, a(960253).I)(() => {
                        let e = {
                            transition: "box-shadow 300ms ease",
                            boxShadow: m ? `inset calc(var(--direction, 1) * -2px) 0 0 0 ${a(632079).Tj.border.primaryTranslucent}` : a(632079).Tj.secondarySidebarBorderBoxShadow
                        };
                        return {
                            container: {
                                order: a(866217).A.appCursorListener.secondarySidebar,
                                cursor: "default",
                                zIndex: c && !u ? 201 : 105,
                                width: h,
                                height: y ? `calc(100% - ${a(398879).ls}px)` : "100%",
                                background: a(632079).Tj.background.primary,
                                flexShrink: 0,
                                display: "flex",
                                visibility: c ? "visible" : "hidden",
                                position: "fixed",
                                insetInlineStart: t,
                                ..."peek" === o && {
                                    boxShadow: a(632079).Tj.shadow.base.lg,
                                    clipPath: (0, a(619157).A1)() ? "inset(0px 0px 0px -24px)" : "inset(0px -24px 0px 0px)"
                                }
                            },
                            overlayBackground: {
                                cursor: "default",
                                position: "fixed",
                                top: 0,
                                insetInlineStart: t,
                                width: `calc(100vw - ${t}px)`,
                                height: "100vh",
                                zIndex: 200
                            },
                            resizer: {
                                position: "absolute",
                                top: 0,
                                insetInlineEnd: 0,
                                zIndex: 1,
                                height: "100%",
                                width: 2,
                                ...e
                            }
                        }
                    }, [m, c, u, h, y, t, o]),
                    S = (0, i.useCallback)(() => {
                        p && a(477810).VI({
                            environment: e
                        })
                    }, [e, p]),
                    x = (0, i.useCallback)(() => {
                        a(550830).default.setState({ ...a(550830).default.state,
                            isMouseEntered: !0
                        })
                    }, []),
                    b = (0, i.useCallback)(() => {
                        a(550830).default.setState({ ...a(550830).default.state,
                            isMouseEntered: !1
                        })
                    }, []);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a(369064).N, {
                        debugName: "SecondarySidebar",
                        capture: p,
                        onEsc: () => {
                            a(477810).gO({
                                environment: e
                            })
                        }
                    }, String(p)), p ? (0, r.jsx)("div", {
                        style: f.overlayBackground,
                        onClick: S,
                        role: "presentation",
                        tabIndex: -1
                    }) : void 0, (0, r.jsxs)(a(654979).A, {
                        forceCompositeLayer: !0,
                        visible: d,
                        initial: {
                            opacity: .7,
                            translateX: -h
                        },
                        exit: {
                            opacity: .7,
                            translateX: -h
                        },
                        animate: {
                            opacity: 1,
                            translateX: 0,
                            width: h
                        },
                        skip: !u,
                        config: N,
                        onAnimationEnd: () => {
                            "opening" === s ? a(550830).default.setState({ ...a(550830).default.state,
                                openState: "open"
                            }) : "closing" === s && a(550830).default.setState({ ...a(550830).default.state,
                                openState: "closed"
                            })
                        },
                        style: f.container,
                        onMouseMove: x,
                        onMouseLeave: b,
                        role: "region",
                        "aria-labelledby": g,
                        "aria-hidden": !c || void 0,
                        ref: n,
                        children: [(0, r.jsx)(J, {
                            titleId: g
                        }, l), (0, r.jsx)("div", {
                            style: f.resizer
                        }), (0, r.jsx)(a(691886).h, {
                            sidebarRef: n,
                            type: "secondary_sidebar"
                        })]
                    })]
                })
            }

            function J(e) {
                let {
                    titleId: t
                } = e;
                switch ((0, a(682985).K8)(() => a(550830).default.state.contentType, [])) {
                    case "private_pages":
                        return (0, r.jsxs)(a(4458).VP, {
                            width: "100%",
                            height: "100vh",
                            children: [(0, r.jsx)(a(858446).Q, {
                                type: "private_pages",
                                titleId: t
                            }), (0, r.jsx)(D, {
                                type: "private"
                            })]
                        });
                    case "shared_pages":
                        return (0, r.jsxs)(a(4458).VP, {
                            width: "100%",
                            height: "100vh",
                            children: [(0, r.jsx)(a(858446).Q, {
                                type: "shared_pages",
                                titleId: t
                            }), (0, r.jsx)(D, {
                                type: "shared"
                            })]
                        });
                    case "favorites_pages":
                        return (0, r.jsxs)(a(4458).VP, {
                            width: "100%",
                            height: "100vh",
                            children: [(0, r.jsx)(a(858446).Q, {
                                type: "favorites_pages",
                                titleId: t
                            }), (0, r.jsx)(D, {
                                type: "favorites"
                            })]
                        });
                    case "inbox":
                        return (0, r.jsx)(a(162859).JN, {
                            titleId: t
                        });
                    case "assistant":
                        return (0, r.jsx)(a(316258).hP, {
                            surface: a(316258).wy.fullPage,
                            children: (0, r.jsxs)(a(4458).VP, {
                                width: "100%",
                                height: "100vh",
                                children: [(0, r.jsx)(a(858446).Q, {
                                    type: "assistant",
                                    titleId: t
                                }), (0, r.jsx)(h, {})]
                            })
                        });
                    case "teams":
                        return (0, r.jsxs)(a(4458).VP, {
                            width: "100%",
                            height: "100vh",
                            children: [(0, r.jsx)(a(858446).Q, {
                                type: "teams",
                                titleId: t
                            }), (0, r.jsx)(I, {})]
                        });
                    case "agents":
                        return (0, r.jsxs)(a(4458).VP, {
                            width: "100%",
                            height: "100vh",
                            children: [(0, r.jsx)(a(858446).Q, {
                                type: "agents",
                                titleId: t
                            }), (0, r.jsx)(C, {})]
                        });
                    case "slippery_slope_chat":
                        return (0, r.jsxs)(a(4458).VP, {
                            width: "100%",
                            height: "100vh",
                            children: [(0, r.jsx)(a(858446).Q, {
                                type: "slippery_slope_chat",
                                titleId: t
                            }), (0, r.jsx)(K, {})]
                        });
                    default:
                        return (0, r.jsx)(H, {})
                }
            }

            function H() {
                return (0, r.jsx)("div", {})
            }
        },
        437188: (e, t, a) => {
            a.d(t, {
                A: () => n
            }), a(296540);
            var i = a(474848);
            let n = function({
                collectionViewName: e,
                collectionViewType: t
            }) {
                return e ? (0, i.jsx)(a(93594).A, {
                    children: e
                }) : "page" === t ? (0, i.jsx)(a(109939).sA, {
                    id: "database.collectionView.untitledName.untitled",
                    defaultMessage: "Untitled"
                }) : (0, i.jsx)(a(109939).sA, { ...a(4587).X[t]
                })
            }
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
                        dotStyle: s
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
                            style: s
                        })
                    })
                })
        },
        541660: (e, t, a) => {
            a.d(t, {
                x: () => i
            });

            function i({
                environment: e,
                store: t,
                type: n
            }) {
                let r;
                switch (n) {
                    case "bookmarks":
                        r = a(981324).ig.Favorite;
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
                    case a(171231).sx:
                    case a(171231).tJ:
                    case a(171231).qe:
                    case a(171231).Vf:
                        r = a(981324).ig.Link;
                        break;
                    default:
                        (0, a(722371).HB)(n)
                }
                a(715265).A.recordVisit({
                    id: t.id,
                    systemBlockType: t.getSystemBlockTypeStore().getValue(),
                    type: r,
                    currentUserId: e.currentUser.id
                })
            }
        },
        553608: (e, t, a) => {
            a.d(t, {
                C8: () => u,
                Dz: () => s,
                GC: () => g,
                GL: () => h,
                YY: () => p,
                dM: () => d,
                h9: () => l,
                jX: () => o,
                oF: () => c,
                uj: () => r
            });
            let i = {
                    JiraSyncInfoPopup: new(a(815048)).O2("JiraSyncInfoPopup", async () => await Promise.all([a.e(75134), a.e(68744)]).then(a.bind(a, 295597))),
                    ImproveJiraSyncPopup: new(a(815048)).O2("ImproveJiraSyncPopup", async () => await Promise.all([a.e(75134), a.e(2686)]).then(a.bind(a, 473119))),
                    JiraDCAuthModal: new(a(815048)).O2("JiraDCAuthModal", async () => await Promise.all([a.e(75134), a.e(17250), a.e(56809), a.e(28763)]).then(a.bind(a, 190229))),
                    ExternalImportAndSyncIndicator: new(a(815048)).O2("ExternalImportAndSyncIndicator", async () => await Promise.all([a.e(75134), a.e(98288)]).then(a.bind(a, 292460))),
                    JiraSyncedAllProjectsTooltip: new(a(815048)).O2("JiraSyncedAllProjectsTooltip", async () => await a.e(21446).then(a.bind(a, 417580))),
                    JiraSyncedAllIssuesTooltip: new(a(815048)).O2("JiraSyncedAllIssuesTooltip", async () => await a.e(21446).then(a.bind(a, 417580))),
                    JiraSyncedDatabaseViewsAndFiltersTooltip: new(a(815048)).O2("JiraSyncedDatabaseViewsAndFiltersTooltip", async () => await a.e(21446).then(a.bind(a, 417580))),
                    JiraSyncSourceTooltip: new(a(815048)).O2("JiraSyncSourceTooltip", async () => await a.e(21446).then(a.bind(a, 417580))),
                    JiraSyncedSettingsToSetupProjectsAndIssuesTooltip: new(a(815048)).O2("JiraSyncedSettingsToSetupProjectsAndIssuesTooltip", async () => await a.e(21446).then(a.bind(a, 417580)))
                },
                n = {
                    JiraSyncTeamSpaceModal: new(a(815048)).O2("JiraSyncTeamSpaceModal", async () => Promise.all([a.e(75134), a.e(40994), a.e(80139), a.e(17250), a.e(28048), a.e(55940), a.e(12560), a.e(33503), a.e(21969), a.e(74145), a.e(56809), a.e(48860), a.e(18682), a.e(79349), a.e(47414), a.e(96579), a.e(21753), a.e(9817), a.e(29447), a.e(75189), a.e(41075), a.e(56188)]).then(a.bind(a, 76948)))
                },
                r = (0, a(815048)._h)(n.JiraSyncTeamSpaceModal, e => e.default),
                o = (0, a(815048)._h)(i.JiraSyncedAllProjectsTooltip, e => e.JiraSyncedAllProjectsTooltip),
                s = (0, a(815048)._h)(i.JiraDCAuthModal, e => e.default),
                l = (0, a(815048)._h)(i.JiraSyncedAllIssuesTooltip, e => e.JiraSyncedAllIssuesTooltip),
                d = (0, a(815048)._h)(i.JiraSyncedDatabaseViewsAndFiltersTooltip, e => e.JiraSyncedDatabaseViewsAndFiltersTooltip),
                c = (0, a(815048)._h)(i.JiraSyncedSettingsToSetupProjectsAndIssuesTooltip, e => e.JiraSyncedSettingsToSetupProjectsAndIssuesTooltip),
                u = (0, a(815048)._h)(i.JiraSyncSourceTooltip, e => e.JiraSyncSourceTooltip),
                p = (0, a(815048)._h)(i.JiraSyncInfoPopup, e => e.JiraSyncInfoPopup),
                g = (0, a(815048)._h)(i.ImproveJiraSyncPopup, e => e.ImproveJiraSyncPopup),
                h = (0, a(815048)._h)(i.ExternalImportAndSyncIndicator, e => e.ExternalImportAndSyncIndicator)
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
        677299: (e, t, a) => {
            a.d(t, {
                A: () => s
            }), a(581454);
            var i = a(296540),
                n = a(474848);
            let r = i.forwardRef(function(e, t) {
                    let {
                        store: i,
                        timestamp: r,
                        actorPointer: o,
                        type: s,
                        ...l
                    } = e, d = (0, a(682985).K8)(() => i.getIcon(), [i]), c = (0, a(682985).K8)(() => i.isEmptyPage(), [i]), u = (0, a(682985).K8)(() => (0, a(569553).Te)(i), [i]);
                    return (0, n.jsx)(a(33402).J, {
                        store: i,
                        placement: "right",
                        children: (0, n.jsx)(a(95582).A, { ...l,
                            ref: t,
                            title: (0, n.jsx)(a(4458).fI, {
                                alignItems: "center",
                                children: (0, n.jsx)(a(627918).A, {
                                    store: i
                                })
                            }),
                            icon: (0, n.jsx)(a(734914).A, {
                                icon: d,
                                isEmptyPage: c,
                                isAlias: !1,
                                iconRecordCategory: u
                            })
                        })
                    })
                }),
                o = {
                    height: "40vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                s = function(e) {
                    let {
                        sections: t,
                        onClose: s,
                        state: l,
                        menuListStore: d,
                        setState: c,
                        renderSections: u,
                        ...p
                    } = e, g = (0, a(533992).v3)(), h = a(381453).xu(t, e => e.pages.length), m = Math.min(h, l.numPagesShown), y = (0, i.useMemo)(() => {
                        let e = m;
                        return t.map(t => {
                            let a = { ...t,
                                pages: t.pages.slice(0, e)
                            };
                            return e = Math.max(0, e - t.pages.length), a
                        })
                    }, [m, t]);
                    return 0 === t.length ? (0, n.jsx)(a(844565).A, {
                        style: o,
                        children: (0, n.jsx)(a(782157).A, {
                            icon: a(203007).U,
                            title: (0, n.jsx)(a(109939).sA, {
                                defaultMessage: "No matches",
                                id: "outlinerViewAllPopover.search.noMatchesTitle"
                            }),
                            description: (0, n.jsx)(a(109939).sA, {
                                defaultMessage: "Try checking for typos",
                                id: "outlinerViewAllPopover.search.noMatchesDescription"
                            })
                        })
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(a(558045).A, {
                            type: a(558045).O.Vertical,
                            initialFocus: void 0,
                            sections: u ? u(y) : function(e) {
                                let {
                                    sections: t
                                } = e, i = 1 === t.length;
                                return t.map(({
                                    key: t,
                                    pages: o
                                }, s) => ({
                                    key: t,
                                    items: function(e) {
                                        let {
                                            environment: t,
                                            spaceStore: i,
                                            pages: o,
                                            visiblePageIds: s,
                                            onClose: l,
                                            type: d,
                                            state: c
                                        } = e, u = s.length;
                                        return o.map(({
                                            blockId: o,
                                            timestamp: p,
                                            authorPointer: g,
                                            index: h
                                        }) => {
                                            let m = a(970831).B.createChildStore(i, {
                                                    table: a(832375).evP,
                                                    id: o
                                                }),
                                                y = s.includes(o);
                                            return {
                                                key: o,
                                                action: ({
                                                    event: e
                                                }) => {
                                                    let i = (0, a(7029).V)(e);
                                                    i || l(), (0, a(545586).navigateToBlock)({
                                                        environment: t,
                                                        store: m,
                                                        openInNew: i,
                                                        pageVisitSource: (0, a(318506).N)({
                                                            type: d,
                                                            from: "secondary_sidebar"
                                                        })
                                                    }), t.device.isPhone && (0, a(713167).V)(), (0, a(727703).Q)(t, {
                                                        type: d,
                                                        queryStringLength: c.query.length,
                                                        selectedItemIndex: h
                                                    })
                                                },
                                                render: t => (0, n.jsx)(r, { ...t,
                                                    ...e,
                                                    store: m,
                                                    timestamp: p,
                                                    actorPointer: g,
                                                    isPinned: y,
                                                    spaceId: i.id,
                                                    pinnedAmount: u
                                                })
                                            }
                                        })
                                    }({ ...e,
                                        pages: o
                                    }),
                                    render: e => (0, n.jsx)(a(844565).A, { ...e,
                                        topBorder: 0 !== s,
                                        title: i ? void 0 : (0, a(360367).OJ)({
                                            section: t,
                                            isFirst: 0 === s
                                        })
                                    })
                                }))
                            }({ ...p,
                                setState: c,
                                state: l,
                                environment: g,
                                onClose: s,
                                sections: y,
                                menuListStore: d
                            }),
                            store: d
                        }), (0, n.jsx)(a(775070).A, {
                            fetchSize: m,
                            resultSize: h,
                            loading: !1,
                            onLoadMore: () => {
                                c({
                                    query: l.query,
                                    numPagesShown: Math.min(h, m + a(349387).B)
                                })
                            }
                        })]
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
                    showGlobeIcon: s,
                    showVisibleLabelPrefix: l = !1
                }) {
                    (0, a(533992).v3)();
                    let d = (0, a(109939).tz)(),
                        c = (0, a(682985).uB)(void 0, a(510969).A),
                        u = (0, a(83208).X)("polyglot");
                    if (a(986939).A.isMobile) return null;
                    let p = (0, a(601587).Vn)(d)[e].languageNameInThatLanguage,
                        g = s ? a(988022).p : a(548436).A;
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
                            let s = u ? [...a(619157).fy, ...a(619157).Tf] : [...a(619157).fy],
                                l = [{
                                    key: "languages",
                                    render: e => (0, i.jsx)(a(844565).A, { ...e,
                                        topBorder: 0 !== e.index
                                    }),
                                    items: (0, a(601587).O8)(s, d).map(s => ({
                                        key: s,
                                        render: e => (function(e, t, n, r) {
                                            let {
                                                languageNameInThatLanguage: s,
                                                languageNameInCurrentLanguage: l
                                            } = (0, a(601587).Vn)(r)[e];
                                            return (0, i.jsx)(o, {
                                                label: s,
                                                caption: l,
                                                focused: t,
                                                props: n,
                                                locale: e
                                            })
                                        })(s, e.focused, e, d),
                                        action: () => {
                                            var o, l, c, u, p;
                                            o = s, l = e, c = d, u = t, p = n, l !== o && function(e, t, n, r) {
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
                                    sections: l
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
                            colorPalette: s ? "gray" : void 0,
                            iconLeading: s ? a(515388).globeIcon : void 0,
                            iconTrailing: {
                                icon: a(595453).arrowChevronSingleDownSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            },
                            ...e,
                            children: l ? (0, i.jsx)(a(109939).sA, {
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
        715094: (e, t, a) => {
            a.d(t, {
                k: () => i
            });

            function i(e) {
                let {
                    shouldShowSidebar: t
                } = (0, a(846044).X)(e), i = (0, a(712358).K)(e);
                return t && i && (0, a(845181).t)(e) ? (0, a(623179).r)(e) : 0
            }
        },
        727703: (e, t, a) => {
            function i(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "open_view_all_popover",
                        eventProperties: t
                    }
                })
            }

            function n(e, t) {
                (0, a(195857).DO_NOT_USE_trackLegacy)("select_page_from_view_all_popover", t)
            }
            a.d(t, {
                H: () => i,
                Q: () => n
            })
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
        782157: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    description: {
                        textWrap: "balance",
                        color: a(632079).Tj.text.secondary
                    }
                },
                r = function({
                    icon: e,
                    title: t,
                    description: r,
                    cta: o,
                    bodyWidth: s,
                    iconSize: l = a(104509).Ev.lg
                }) {
                    let d = (0, a(960253).I)(() => ({
                        icon: {
                            width: l,
                            height: l,
                            color: a(632079).Tj.icon.secondary
                        },
                        body: {
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                            maxWidth: s ? ? 300,
                            gap: 8
                        }
                    }), [s, l]);
                    return (0, i.jsxs)(a(4458).VP, {
                        alignItems: "center",
                        gap: 16,
                        children: [e ? e(d.icon) : void 0, (0, i.jsxs)("div", {
                            style: d.body,
                            children: [(0, i.jsx)(a(111010).D, {
                                colorVariant: "primary",
                                styleKey: "titleSmSemibold",
                                children: t
                            }), (0, i.jsx)(a(111010).D, {
                                styleKey: "bodyRegular",
                                style: n.description,
                                children: r
                            })]
                        }), o ? (0, i.jsx)("div", {
                            children: o
                        }) : void 0]
                    })
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
                } = (0, a(533992).Y0)(), s = (0, i.useContext)(a(19187).e);
                return (0, i.useCallback)(i => {
                    if ((0, a(104310).u)({
                            event: {
                                eventName: e,
                                eventProperties: {}
                            }
                        }), o) null == s || s(), n({
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
                }, [r, e, t, o, s, n])
            }
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
        989068: (e, t, a) => {
            async function i(e) {
                var t;
                return null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (t = a(775657).electronApi.checkLocaleSupport) ? void 0 : t.call(a(775657).electronApi, e)
            }
            a.d(t, {
                o: () => l,
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
                intl: s
            }) {
                var l;
                if (t.device.isElectron) {
                    let t = await i(e);
                    if ((null == t ? void 0 : t.supported) === !1) return void a(819652).HK({
                        id: "unsupported_locale",
                        title: s.formatMessage(r.title),
                        message: s.formatMessage(r.message, {
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
                "success" === d.type ? (a(467008).A.set("preferredLocale", e), await a(941701).transactionQueue.drain(), t.device.isElectron) ? (null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (l = a(775657).electronApi.setLocale) || l.call(a(775657).electronApi, e), (0, a(518531).F)({
                    includeFocusedWindow: !0
                })) : window.location.reload(!0) : a(647095).Qg(d)
            }

            function s(e) {
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

            function l(e) {
                let {
                    device: t
                } = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => (0, a(405072).J)({
                    isMobileNative: t.isMobileNative,
                    isAndroid: t.isAndroid
                }), [t.isMobileNative, t.isAndroid]) ? (0, n.jsx)(a(31256).J, {}) : a(986939).A.isMobile ? null : (0, n.jsx)(s, { ...e
                })
            }
        }
    }
]);