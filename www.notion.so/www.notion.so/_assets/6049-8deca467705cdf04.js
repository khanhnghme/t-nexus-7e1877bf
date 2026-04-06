"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [6049], {
        210037: (e, t, a) => {
            a.d(t, {
                r: () => s
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        isOpen: !1,
                        openCount: 0,
                        from: void 0
                    }
                }
            }
            let s = new n;
            (0, a(202146).exposeDebugValue)("agentPersonalizationSettingsModalStore", s)
        },
        544424: (e, t, a) => {
            a.d(t, {
                B: () => p
            }), a(944114), a(898992), a(354520), a(581454);
            var i = a(296540),
                n = () => a(970831),
                s = () => a(95582),
                o = () => a(569553),
                r = () => a(627918),
                l = a(474848);
            let c = (0, a(109939).YK)({
                    searchPages: {
                        id: "PageSearchMenu.searchForAPage",
                        defaultMessage: "Search for a page…"
                    },
                    noResults: {
                        id: "PageSearchMenu.noPagesFound",
                        defaultMessage: "No pages found"
                    },
                    useExistingPage: {
                        id: "PageSearchMenu.useExistingPage",
                        defaultMessage: "Use existing page"
                    },
                    recentlyUsed: {
                        id: "PageSearchMenu.recentlyUsed",
                        defaultMessage: "Recently used"
                    }
                }),
                d = {
                    padding: 4
                },
                u = {
                    marginInlineEnd: 2
                };

            function p(e) {
                let {
                    selectedPageId: t,
                    onSelectPage: p,
                    extensionPopupButtonEvents: m,
                    recentlyUsedPages: g
                } = e, f = (0, a(109939).tz)(), [h, y] = (0, i.useState)(""), {
                    results: k,
                    isResultsLoading: M
                } = (0, a(183464).W)({
                    source: "ai_chat_query_input",
                    query: h,
                    limit: 20,
                    type: a(821603).Vz.BlocksInSpace,
                    filters: {
                        requireEditPermissions: !1,
                        excludeTemplates: !0,
                        isDeletedOnly: !1
                    },
                    options: {
                        disable: 0 === h.length,
                        disableLocalSearch: !0
                    },
                    peopleBlocksToInclude: "none"
                }), I = (0, a(934877).A)({
                    visibility: M,
                    delayShow: 400
                }), b = (0, a(682985).K8)(() => k.slice(0, 10).map(e => {
                    let a = e.store.getIcon(),
                        i = e.store.isEmptyPage();
                    return {
                        key: `page-${e.store.id}`,
                        render: (n, c) => (0, l.jsx)(s().A, { ...n,
                            onFocus: c.onFocus,
                            icon: (0, l.jsx)(o().B6, {
                                bucket: "public",
                                disabled: !0,
                                icon: a,
                                iconRecordCategory: "pageBlock",
                                isEmptyPage: i,
                                size: 20,
                                title: ""
                            }),
                            title: (0, l.jsx)(r().A, {
                                store: e.store
                            }),
                            isChecked: e.store.id === t
                        }),
                        action: ({
                            event: t
                        }) => {
                            p(e.store.id, !1, t)
                        }
                    }
                }), [k, t, p]), v = {
                    key: "search-input",
                    render: e => (0, l.jsx)(a(310324).Ay, { ...e,
                        style: d,
                        placeholder: f.formatMessage(c.searchPages),
                        value: h,
                        onChange: e => {
                            y(e.target.value)
                        },
                        inputRight: I && (0, l.jsx)(a(517334).k, {
                            style: u
                        }),
                        autoFocus: !0
                    }),
                    action: () => null
                }, w = (0, a(682985).K8)(() => {
                    if (!g || 0 === g.length) return [];
                    let e = a(728372).AppStoreSidebarSpaceStore.state;
                    if (!e) return [];
                    let i = g.filter(e => e.page_id !== t).slice(0, 5),
                        c = [];
                    for (let t of i) {
                        let a = n().B.createChildStore(e, {
                            id: t.page_id,
                            table: "block",
                            spaceId: e.id
                        });
                        if (!a.isDefined()) continue;
                        let i = a.getIcon(),
                            d = a.isEmptyPage();
                        c.push({
                            key: `recent-${t.page_id}`,
                            render: (e, t) => (0, l.jsx)(s().A, { ...e,
                                onFocus: t.onFocus,
                                icon: (0, l.jsx)(o().B6, {
                                    bucket: "public",
                                    disabled: !0,
                                    icon: i,
                                    iconRecordCategory: "pageBlock",
                                    isEmptyPage: d,
                                    size: 20,
                                    title: ""
                                }),
                                title: (0, l.jsx)(r().A, {
                                    store: a
                                }),
                                isChecked: !1
                            }),
                            action: ({
                                event: e
                            }) => {
                                p(t.page_id, !0, e)
                            }
                        })
                    }
                    return c
                }, [g, t, p]), T = [];
                return h.length > 0 && b.length > 0 ? T.push({
                    key: "search-section",
                    render: e => (0, l.jsx)(a(844565).A, { ...e,
                        title: f.formatMessage(c.useExistingPage)
                    }),
                    items: [v, ...b]
                }) : h.length > 0 && !M ? T.push({
                    key: "search-section",
                    render: e => (0, l.jsx)(a(844565).A, { ...e,
                        title: f.formatMessage(c.useExistingPage)
                    }),
                    items: [v, {
                        key: "no-results",
                        render: e => (0, l.jsx)(s().A, { ...e,
                            title: f.formatMessage(c.noResults),
                            disabled: !0
                        }),
                        action: () => null
                    }]
                }) : (T.push({
                    key: "search-section",
                    render: e => (0, l.jsx)(a(844565).A, { ...e,
                        title: f.formatMessage(c.useExistingPage)
                    }),
                    items: [v]
                }), w.length > 0 && T.push({
                    key: "recently-used-section",
                    render: e => (0, l.jsx)(a(844565).A, { ...e,
                        title: f.formatMessage(c.recentlyUsed),
                        topBorder: !0
                    }),
                    items: w
                })), (0, l.jsx)(a(747369).A, { ...m,
                    menuType: a(649476).gu.Popup,
                    width: 240,
                    maxHeight: 380,
                    children: (0, l.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: T
                    })
                })
            }
        },
        801110: (e, t, a) => {
            a.d(t, {
                d: () => o,
                t: () => r
            });
            let i = {
                    createYourOwn: "2fd17954-d9c2-80f0-af59-db9bd653061f",
                    sidekick: "2fd17954-d9c2-8012-b862-d19b092ffcc6",
                    minimalist: "2fd17954-d9c2-8071-9633-c4ab6ea99781",
                    analyst: "2fd17954-d9c2-80b6-b602-c1a2d0094d14"
                },
                n = {
                    createYourOwn: "32517954-d9c2-80d1-bd9e-e8d9e9a237a0",
                    sidekick: "32517954-d9c2-80bb-8298-e4903be1655b",
                    minimalist: "32517954-d9c2-803e-84d0-ff79d3c2d338",
                    analyst: "32517954-d9c2-8073-8724-d2f93a8b5035"
                },
                s = (0, a(109939).YK)({
                    templateIntro: {
                        id: "pageTemplates.content.intro",
                        defaultMessage: "This page defines your interactions, work style and identity. You will always respect the instructions outlined here, and act accordingly. Whenever explicit feedback about preferences for your behavior is given to you within a chat, update the Memories section so that it reflects the preference, always keeping that section updated and organized."
                    },
                    templateTip: {
                        id: "pageTemplates.content.tip",
                        defaultMessage: "Notion Tip"
                    },
                    templateTipContent: {
                        id: "pageTemplates.content.tipContent",
                        defaultMessage: "As a Notion user, you can edit this page to customize your agent’s behavior. Add more context and even reference other pages in your workspace."
                    },
                    agentIdentityHeading: {
                        id: "pageTemplates.content.agentIdentityHeading",
                        defaultMessage: "Agent Identity"
                    },
                    agentIdentityDescription: {
                        id: "pageTemplates.content.agentIdentityDescription",
                        defaultMessage: "This section defines your identity and behavior"
                    },
                    chatInteractionHeading: {
                        id: "pageTemplates.content.chatInteractionHeading",
                        defaultMessage: "Chat Interaction"
                    },
                    chatInteractionDescription: {
                        id: "pageTemplates.content.chatInteractionDescription",
                        defaultMessage: "This section outlines the communication style you use in chat interactions"
                    },
                    memoriesHeading: {
                        id: "pageTemplates.content.memoriesHeading",
                        defaultMessage: "Memories"
                    },
                    memoriesDescription: {
                        id: "pageTemplates.content.memoriesDescription",
                        defaultMessage: "Automatically capture preferences as bullet points below as they come up in conversation"
                    },
                    memoriesPlaceholder: {
                        id: "pageTemplates.content.memoriesPlaceholder",
                        defaultMessage: "… add new preferences here …"
                    },
                    createYourOwnTitle: {
                        id: "pageTemplates.createYourOwn.title",
                        defaultMessage: "Create your own"
                    },
                    createYourOwnPageTitle: {
                        id: "pageTemplates.createYourOwn.pageTitle",
                        defaultMessage: "My Notion AI"
                    },
                    createYourOwnDescription: {
                        id: "pageTemplates.createYourOwn.description",
                        defaultMessage: "Define your own style"
                    },
                    createYourOwnIdentity: {
                        id: "pageTemplates.createYourOwn.identity",
                        defaultMessage: "…"
                    },
                    createYourOwnInteraction: {
                        id: "pageTemplates.createYourOwn.interaction",
                        defaultMessage: "…"
                    },
                    sidekickTitle: {
                        id: "pageTemplates.sidekick.title",
                        defaultMessage: "Sidekick"
                    },
                    sidekickDescription: {
                        id: "pageTemplates.sidekick.description",
                        defaultMessage: "Warm and friendly"
                    },
                    sidekickIdentity: {
                        id: "pageTemplates.sidekick.identity",
                        defaultMessage: "You are warm, supportive, and genuinely invested in the user’s success. You approach interactions with empathy and understanding. You prioritize relationship-building alongside task completion. You believe the best assistance comes from caring about the person. You use concise expression with maximum information density. You write short paragraphs with clear hierarchies. You predominantly use active voice. You avoid filler words or redundant phrases."
                    },
                    sidekickInteraction: {
                        id: "pageTemplates.sidekick.interaction",
                        defaultMessage: "You give genuine greetings that acknowledge their presence. You practice active listening reflected in your responses. You use an encouraging tone that celebrates progress. You offer patient clarification when needed. Every interaction should leave users feeling supported. You provide direct responses that address core requests immediately. Every word you use serves a purpose."
                    },
                    analystTitle: {
                        id: "pageTemplates.analyst.title",
                        defaultMessage: "Analyst"
                    },
                    analystDescription: {
                        id: "pageTemplates.analyst.description",
                        defaultMessage: "Structured and logical"
                    },
                    analystIdentity: {
                        id: "pageTemplates.analyst.identity",
                        defaultMessage: "You are methodical, data-driven, and committed to thorough analysis. You value accuracy, logical reasoning, and evidence-based decisions. You approach problems systematically with careful consideration. You believe better information leads to better decisions. You use concise expression with maximum information density. You write short paragraphs with clear hierarchies. You predominantly use active voice. You avoid filler words or redundant phrases."
                    },
                    analystInteraction: {
                        id: "pageTemplates.analyst.interaction",
                        defaultMessage: "You conduct systematic information gathering through targeted questions. You provide clear frameworks for organizing discussion topics. You offer step-by-step explanations of your reasoning processes. You give comprehensive summaries before making recommendations. You provide multiple options with pros/cons analysis. You provide direct responses that address core requests immediately. Every word you use serves a purpose."
                    },
                    minimalistTitle: {
                        id: "pageTemplates.minimalist.title",
                        defaultMessage: "Minimalist"
                    },
                    minimalistDescription: {
                        id: "pageTemplates.minimalist.description",
                        defaultMessage: "Simple and efficient"
                    },
                    minimalistIdentity: {
                        id: "pageTemplates.minimalist.identity",
                        defaultMessage: "You are simple, efficient, focused on delivering exactly what’s needed. You value clarity and purposeful action. You take a clean, uncluttered approach to problem-solving. You use concise expression with maximum information density. You write short paragraphs with clear hierarchies. You predominantly use active voice. You avoid filler words or redundant phrases."
                    },
                    minimalistInteraction: {
                        id: "pageTemplates.minimalist.interaction",
                        defaultMessage: "You give brief acknowledgments without unnecessary pleasantries. You provide direct responses that address core requests immediately. You ask minimal follow-up questions. Every word you use serves a purpose."
                    }
                });

            function o(e, t, a) {
                let i = e.formatMessage(s.templateIntro),
                    n = e.formatMessage(s.templateTip),
                    o = e.formatMessage(s.templateTipContent),
                    r = e.formatMessage(s.agentIdentityHeading),
                    l = e.formatMessage(s.agentIdentityDescription),
                    c = e.formatMessage(s.chatInteractionHeading),
                    d = e.formatMessage(s.chatInteractionDescription),
                    u = e.formatMessage(s.memoriesHeading),
                    p = e.formatMessage(s.memoriesDescription),
                    m = e.formatMessage(s.memoriesPlaceholder);
                return `${i}

::: aside 💡
**${n}:** ${o}
:::

## ${r}

*${l}*

${t}

## ${c}

*${d}*

${a}

## ${u}

*${p}*

- *${m}*`
            }

            function r(e, t) {
                let a = "production" === t ? n : i;
                return [{
                    name: "Create your own",
                    menuIcon: "/icons/user-circle-filled_gray.svg",
                    pageIconOverride: "",
                    menuTitle: e.formatMessage(s.createYourOwnTitle),
                    pageTitleOverride: e.formatMessage(s.createYourOwnPageTitle),
                    description: e.formatMessage(s.createYourOwnDescription),
                    agentIdentityInstructions: e.formatMessage(s.createYourOwnIdentity),
                    chatInteractionInstructions: e.formatMessage(s.createYourOwnInteraction),
                    templatePageId: a.createYourOwn
                }, {
                    name: "Sidekick",
                    menuIcon: "/icons/sunglasses_yellow.svg",
                    menuTitle: e.formatMessage(s.sidekickTitle),
                    description: e.formatMessage(s.sidekickDescription),
                    agentIdentityInstructions: e.formatMessage(s.sidekickIdentity),
                    chatInteractionInstructions: e.formatMessage(s.sidekickInteraction),
                    templatePageId: a.sidekick
                }, {
                    name: "Minimalist",
                    menuIcon: "/icons/leaf_green.svg",
                    menuTitle: e.formatMessage(s.minimalistTitle),
                    description: e.formatMessage(s.minimalistDescription),
                    agentIdentityInstructions: e.formatMessage(s.minimalistIdentity),
                    chatInteractionInstructions: e.formatMessage(s.minimalistInteraction),
                    templatePageId: a.minimalist
                }, {
                    name: "Analyst",
                    menuIcon: "/icons/chart-pie_orange.svg",
                    menuTitle: e.formatMessage(s.analystTitle),
                    description: e.formatMessage(s.analystDescription),
                    agentIdentityInstructions: e.formatMessage(s.analystIdentity),
                    chatInteractionInstructions: e.formatMessage(s.analystInteraction),
                    templatePageId: a.analyst
                }]
            }
        },
        823635: (e, t, a) => {
            a.d(t, {
                O: () => f
            }), a(944114), a(581454);
            var i = a(296540),
                n = a(474848);
            let s = (0, a(109939).YK)({
                goToMarketplace: {
                    id: "AgentChatSettingsMenu.PageSelectionSection.GoToMarketplace",
                    defaultMessage: "Go to Marketplace"
                }
            });

            function o({
                onClick: e
            }) {
                let t = (0, a(109939).tz)(),
                    i = (0, a(533992).v3)();
                return (0, n.jsx)(a(844565).A, {
                    topBorder: !0,
                    children: (0, n.jsx)(a(95582).A, {
                        role: "menuitem",
                        title: (0, n.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: 4,
                            children: [t.formatMessage(s.goToMarketplace), (0, n.jsx)(a(16275).I, {
                                icon: a(759706).arrowDiagonalUpRightSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            })]
                        }),
                        focused: !1,
                        onClick: () => {
                            null == e || e(), a(463226).s8({
                                store: a(210037).r
                            }), (0, a(888668).mu)({
                                environment: i
                            })
                        }
                    }, "marketplace-footer-item")
                })
            }
            let r = (0, a(109939).YK)({
                    templates: {
                        id: "AgentChatSettingsMenu.PageSelectionSection.Templates",
                        defaultMessage: "Templates"
                    },
                    searchMarketplace: {
                        id: "AgentChatSettingsMenu.PageSelectionSection.SearchMarketplace",
                        defaultMessage: "Search marketplace…"
                    },
                    error: {
                        id: "AgentChatSettingsMenu.PageSelectionSection.Error",
                        defaultMessage: "Error loading templates"
                    },
                    noTemplatesFound: {
                        id: "AgentChatSettingsMenu.PageSelectionSection.NoTemplatesFound",
                        defaultMessage: "No templates found"
                    }
                }),
                l = {
                    loadingIconContainer: {
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    style0: {
                        fontWeight: a(699422).Wy.semibold
                    }
                };

            function c({
                state: e,
                query: t,
                onQueryChange: i,
                onBack: s,
                onSelect: o
            }) {
                let d = (0, a(109939).tz)(),
                    {
                        templates: u,
                        loadingStatus: m,
                        error: g
                    } = e,
                    f = (0, a(682985).K8)(() => ({
                        key: "marketplace-back-button",
                        render: (e, t) => (0, n.jsx)(a(95582).A, { ...e,
                            onFocus: t.onFocus,
                            icon: (0, n.jsx)(a(16275).I, {
                                icon: a(740158).$,
                                size: "default"
                            }),
                            title: d.formatMessage(r.templates),
                            textWrapperStyle: l.style0
                        }),
                        action: () => {
                            s()
                        }
                    }), [d, s]),
                    h = u.map(e => ({
                        key: `marketplace-template-${e.id}`,
                        render: (t, a) => (0, n.jsx)(p, {
                            template: e,
                            menuListItemProps: t,
                            menuListParent: a
                        }),
                        action: () => {
                            o(e)
                        }
                    })),
                    y = [],
                    k = [f, {
                        key: "marketplace-search-input",
                        render: e => (0, n.jsx)(a(310324).Ay, { ...e,
                            placeholder: d.formatMessage(r.searchMarketplace),
                            value: t,
                            onChange: e => {
                                i(e.target.value)
                            },
                            autoFocus: !0,
                            inputRight: "loading" === m && (0, n.jsx)("span", {
                                style: l.loadingIconContainer,
                                children: (0, n.jsx)(a(517334).k, {
                                    size: "sm"
                                })
                            })
                        }),
                        action: () => null
                    }];
                return g ? k.push({
                    key: "marketplace-error",
                    render: e => (0, n.jsx)(a(95582).A, { ...e,
                        title: d.formatMessage(r.error),
                        disabled: !0
                    }),
                    action: () => null
                }) : 0 === u.length ? k.push({
                    key: "marketplace-no-templates",
                    render: e => (0, n.jsx)(a(95582).A, { ...e,
                        title: d.formatMessage(r.noTemplatesFound),
                        disabled: !0
                    }),
                    action: () => null
                }) : k.push(...h), y.push({
                    key: "marketplace-section",
                    render: e => (0, n.jsx)(a(844565).A, { ...e
                    }),
                    items: k
                }), (0, n.jsx)(a(558045).A, {
                    type: a(558045).O.Vertical,
                    initialFocus: void 0,
                    sections: y
                })
            }
            let d = {
                    fontSize: 20
                },
                u = {
                    padding: 8
                };

            function p({
                template: e,
                menuListItemProps: t,
                menuListParent: s
            }) {
                var o;
                let r = (0, a(960253).e)(),
                    l = (0, a(109939).tz)(),
                    {
                        iconName: c,
                        emoji: m
                    } = (0, a(682985).K8)(() => {
                        var t;
                        let a = e.attributes.icon;
                        return null != (t = a) && t.startsWith("/icons/") || (a = void 0), {
                            iconName: a,
                            emoji: e.attributes.emoji
                        }
                    }, [e.attributes.icon, e.attributes.emoji]),
                    g = (0, a(682985).K8)(() => (0, a(417317).b)({
                        icon: c || m,
                        themeMode: r
                    }), [c, m, r]),
                    f = (0, a(960253).I)(() => ({
                        iconContainer: {
                            width: 36,
                            height: 36,
                            minWidth: 36,
                            minHeight: 36,
                            backgroundColor: (0, a(650342).X4)(g || a(111012).l8[r].lightgray, .1),
                            borderRadius: 6,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                            lineHeight: 1
                        }
                    }), [g, r]),
                    h = (0, i.useMemo)(() => c ? (0, n.jsx)(a(392392).A, {
                        type: "notion_icon",
                        icon: c,
                        size: 20,
                        largeIcon: !1,
                        alt: e.name
                    }) : m ? (0, n.jsx)("div", {
                        style: d,
                        children: m
                    }) : void 0, [c, m, e.name]);
                return (0, n.jsx)(a(95582).A, { ...t,
                    style: u,
                    onFocus: s.onFocus,
                    desktopIconStyle: f.iconContainer,
                    icon: h,
                    title: e.name,
                    caption: `By ${null==(o=e.creator)?void 0:o.name}`,
                    right: (0, n.jsx)(a(746434).E, {
                        content: void 0 !== e.price && 0 !== e.price ? (0, n.jsx)(a(887949).v, {
                            cost: {
                                amount: 100 * e.price,
                                currencyCode: "USD"
                            },
                            intl: l,
                            trailingZeroDisplay: "stripIfInteger"
                        }) : (0, n.jsx)(a(109939).sA, {
                            id: "inApp.marketplace.listing.free",
                            defaultMessage: "Free"
                        })
                    })
                })
            }

            function m(e) {
                let {
                    onBack: t,
                    onSelectTemplate: s,
                    onFooterClick: r,
                    extensionPopupButtonEvents: l
                } = e, [d, u] = (0, i.useState)(""), p = function(e) {
                    let t = (0, a(533992).v3)(),
                        n = (0, a(723240).r)(),
                        [s, o] = (0, i.useState)([]),
                        [r, l] = (0, i.useState)("uninitialized"),
                        [c, d] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        l("loading"), d(!1);
                        let i = new AbortController;
                        return a(888668).R_({
                            environment: t,
                            query: e,
                            spaceId: n
                        }).then(e => {
                            i.signal.aborted || (o(e), d(!1))
                        }).catch(() => {
                            i.signal.aborted || (o([]), d(!0))
                        }).finally(() => {
                            i.signal.aborted || l("loaded")
                        }), () => {
                            i.abort()
                        }
                    }, [e, t, n]), {
                        templates: s,
                        loadingStatus: r,
                        error: c
                    }
                }(d), m = (0, a(84235).Y)(u, 250);
                return (0, n.jsx)(a(747369).A, { ...l,
                    menuType: a(649476).gu.Popup,
                    width: 300,
                    maxHeight: 325,
                    footer: (0, n.jsx)(o, {
                        onClick: () => {
                            r()
                        }
                    }),
                    children: (0, n.jsx)(c, {
                        state: p,
                        query: d,
                        onQueryChange: e => {
                            m(e)
                        },
                        onBack: () => {
                            t()
                        },
                        onSelect: e => {
                            s(e)
                        }
                    })
                })
            }
            let g = (0, a(109939).YK)({
                browseTemplates: {
                    id: "CombinedProfileMenu.browseTemplates",
                    defaultMessage: "Browse templates"
                },
                useYourOwnPage: {
                    id: "CombinedProfileMenu.useYourOwnPage",
                    defaultMessage: "Use existing page"
                },
                removeProfilePage: {
                    id: "CombinedProfileMenu.removePage",
                    defaultMessage: "Remove instructions"
                }
            });

            function f(e) {
                let {
                    onSelectTemplate: t,
                    selectedPageId: s,
                    onSelectPage: o,
                    recentlyUsedPages: r,
                    onRemoveProfile: l,
                    extensionPopupButtonEvents: c,
                    onMarketplaceTemplateSelected: d,
                    onMarketplaceFooterClick: u
                } = e, p = (0, a(83208).X)("agent_enable_personalization_settings_marketplace_integration"), f = (0, a(109939).tz)(), [h, y] = (0, i.useState)("templates");
                if ("search" === h) return (0, n.jsx)(a(544424).B, {
                    selectedPageId: s,
                    onSelectPage: o,
                    recentlyUsedPages: r,
                    extensionPopupButtonEvents: c
                });
                if ("marketplace" === h) return (0, n.jsx)(m, {
                    extensionPopupButtonEvents: c,
                    onBack: () => y("templates"),
                    onSelectTemplate: d,
                    onFooterClick: u
                });
                let k = (0, a(801110).t)(f, "production").map((e, i) => ({
                    key: `template-${i}`,
                    render: (t, i) => (0, n.jsx)(a(95582).A, { ...t,
                        onFocus: i.onFocus,
                        icon: (0, n.jsx)(a(392392).A, {
                            type: "notion_icon",
                            icon: e.menuIcon,
                            size: 20,
                            largeIcon: !1,
                            alt: e.menuTitle
                        }),
                        title: e.menuTitle,
                        caption: e.description
                    }),
                    action: ({
                        event: a
                    }) => {
                        t(e, a)
                    }
                }));
                p && k.push({
                    key: "browse-more",
                    render: (e, t) => (0, n.jsx)(a(95582).A, { ...e,
                        onFocus: t.onFocus,
                        icon: (0, n.jsx)(a(16275).I, {
                            icon: a(97010).templatesIcon,
                            size: "default"
                        }),
                        title: f.formatMessage(g.browseTemplates)
                    }),
                    action: () => {
                        y("marketplace")
                    }
                });
                let M = [{
                    key: "use-own-page",
                    render: (e, t) => (0, n.jsx)(a(95582).A, { ...e,
                        onFocus: t.onFocus,
                        icon: (0, n.jsx)(a(16275).I, {
                            icon: a(330274).magnifyingGlassIcon,
                            size: "default"
                        }),
                        title: f.formatMessage(g.useYourOwnPage)
                    }),
                    action: () => y("search")
                }];
                l && M.push({
                    key: "remove-profile",
                    render: (e, t) => (0, n.jsx)(a(95582).A, { ...e,
                        onFocus: t.onFocus,
                        icon: (0, n.jsx)(a(16275).I, {
                            icon: a(927364).xMarkCircleIcon,
                            size: "default"
                        }),
                        title: f.formatMessage(g.removeProfilePage)
                    }),
                    action: l
                });
                let I = [{
                    key: "templates-section",
                    render: e => (0, n.jsx)(a(844565).A, { ...e
                    }),
                    items: k
                }, {
                    key: "use-own-page-section",
                    render: e => (0, n.jsx)(a(844565).A, { ...e,
                        topBorder: !0
                    }),
                    items: M
                }];
                return (0, n.jsx)(a(747369).A, { ...c,
                    menuType: a(649476).gu.Popup,
                    width: 240,
                    maxHeight: 380,
                    children: (0, n.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: I
                    })
                })
            }
        },
        888668: (e, t, a) => {
            async function i(e) {
                let {
                    environment: t,
                    query: i,
                    spaceId: n
                } = e, s = (0, a(599412).H)(a(962299).A.getIntl()), o = await t.api.callApi({
                    eventName: "inAppGetAgentPersonalityTemplates",
                    environment: t,
                    data: {
                        query: i,
                        locale: s,
                        isMobile: a(986939).A.isMobile,
                        limit: 10
                    },
                    headers: (0, a(115118).WS)({
                        spaceId: n
                    })
                });
                return "success" === o.type && o.data.success ? o.data.templates : []
            }

            function n(e) {
                let {
                    environment: t
                } = e, i = a(54353).UH;
                (0, a(79266).navigate)({
                    environment: t,
                    url: `${a(168962).JZ.marketplace}/categories/${i}`
                })
            }

            function s(e) {
                let {
                    environment: t,
                    slug: i
                } = e;
                (0, a(79266).navigate)({
                    environment: t,
                    url: `${a(168962).JZ.marketplace}/templates/${i}`
                })
            }
            a.d(t, {
                R_: () => i,
                Sb: () => s,
                mu: () => n
            })
        },
        942159: (e, t, a) => {
            a.d(t, {
                k: () => s
            });
            var i = a(296540),
                n = () => a(579695);

            function s(e) {
                let {
                    environment: t,
                    intl: s,
                    customizationSessionId: o,
                    spaceStore: r,
                    spaceViewStore: l,
                    onTemplatePageCreated: c,
                    onExistingPageSelected: d,
                    onPaidMarketplaceTemplateSelected: u,
                    getDuplicationFinishedToastMessage: p
                } = e, m = (0, a(83208).X)("agent_enable_personalization_settings_template_workspace_duplication") && !0, g = (0, a(815048).fJ)(a(235645).R.clipboardActions), f = (0, a(815048).fJ)(a(94386).g), h = (0, a(815048).fJ)(a(393771).S), y = (0, i.useCallback)(async (e, i) => {
                    if (!r || !l) return null;
                    let n = e.templatePageId;
                    if (!n) return null;
                    try {
                        let s = await t.api.callApi({
                            eventName: "loadBlockSubtree",
                            environment: t,
                            data: {
                                block: {
                                    id: n,
                                    spaceId: a(54353).rQ
                                },
                                shallow: !1
                            },
                            headers: (0, a(115118).WS)({
                                spaceId: a(54353).rQ
                            })
                        });
                        if ("failed" === s.type) return null;
                        let o = a(412951).RecordMapWithRole.create(s.data.subtreeRecordMap),
                            {
                                createAndDuplicatePageInSpace: c
                            } = await Promise.all([a.e(9773), a.e(36556), a.e(40537), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(23519), a.e(63771), a.e(53847), a.e(48486), a.e(37045)]).then(a.bind(a, 120335)),
                            {
                                performResult: d,
                                serverCommitResult: u
                            } = (0, a(377796).createAndCommit)({
                                environment: t,
                                cellTarget: {
                                    spaceWithId: r.id
                                },
                                userAction: i,
                                canUndo: !0,
                                perform: i => {
                                    let s = c({
                                        environment: t,
                                        spaceStore: r,
                                        spaceViewStore: l,
                                        transaction: i,
                                        copyPageId: n,
                                        recordMap: o,
                                        isPrivate: !0,
                                        allowCopyExternalObjectInstances: !0
                                    });
                                    return (0, a(715144).z)({
                                        stores: [s],
                                        update: {
                                            ai_personalization_page: {
                                                templateName: e.name
                                            }
                                        },
                                        transaction: i
                                    }), s
                                }
                            });
                        return await u, d || null
                    } catch (e) {
                        return (0, a(222024).t)().error({
                            from: "useCombinedProfileMenuSelectionHandlers",
                            type: "duplicateTemplateFromWorkspaceFailed",
                            error: e
                        }), null
                    }
                }, [t, r, l]), k = (0, i.useCallback)((e, i) => {
                    if (!r || !l) return null;
                    let o = null == g ? void 0 : g.value,
                        c = null == f ? void 0 : f.value,
                        d = null == h ? void 0 : h.value;
                    return void 0 === o || void 0 === c || void 0 === d ? null : (0, a(377796).createAndCommit)({
                        environment: t,
                        cellTarget: {
                            spaceWithId: r.id
                        },
                        userAction: i,
                        canUndo: !0,
                        perform: i => {
                            let u = a(964232).IT({
                                    environment: t,
                                    spaceStore: r,
                                    spaceViewStore: l,
                                    parent: "private",
                                    prepend: !1,
                                    title: void 0 !== e.pageTitleOverride ? e.pageTitleOverride : e.menuTitle,
                                    transaction: i
                                }),
                                p = new Map,
                                m = (0, a(392325).ge)(p),
                                g = (0, a(801110).d)(s, e.agentIdentityInstructions, e.chatInteractionInstructions),
                                f = o.markdownToBlocks({
                                    environment: t,
                                    text: g,
                                    inMemoryRecordCache: r.inMemoryRecordCache,
                                    transaction: i,
                                    markdownOptions: m,
                                    markdownLinkifyIt: c,
                                    tinyMceMicrosoftWordPasteFilter: d,
                                    parentPointer: {
                                        id: r.id,
                                        table: "space",
                                        spaceId: r.id
                                    }
                                });
                            if (f && f.length > 0) {
                                let e = u.getContentStore();
                                for (let t of f) n().NI({
                                    parentStore: e,
                                    childStore: t,
                                    transaction: i
                                })
                            }
                            return (0, a(715144).z)({
                                stores: [u],
                                update: {
                                    page_icon: void 0 !== e.pageIconOverride ? e.pageIconOverride : e.menuIcon,
                                    ai_personalization_page: {
                                        templateName: e.name
                                    }
                                },
                                transaction: i
                            }), {
                                createdPage: u
                            }
                        }
                    }).performResult.createdPage || null
                }, [t, s, r, l, g, f, h]), M = (0, i.useCallback)(async e => {
                    a(305721).trackAgentPersonalizationTemplateSelected({
                        customizationSessionId: o,
                        templateName: e.name
                    });
                    let t = "AgentPersonalizationSettings.selectTemplate";
                    if (m) {
                        let a = await y(e, t);
                        if (a) return void c({
                            blockStore: a,
                            templateName: e.menuTitle
                        })
                    }
                    let i = k(e, t);
                    i && c({
                        blockStore: i,
                        templateName: e.menuTitle
                    })
                }, [m, y, k, c, o]);
                return {
                    handleSelectTemplate: M,
                    handleMarketplaceTemplateSelected: (0, i.useCallback)(async e => {
                        a(305721).trackAgentPersonalizationMarketplaceTemplateSelected({
                            customizationSessionId: o,
                            templateId: e.id
                        });
                        let i = !e.price || 0 === e.price,
                            n = "required" === e.attributes.email_requirement || "optional" === e.attributes.email_requirement;
                        if (i && e.block_id && !n) {
                            if (!r || !l) return;
                            let i = a(970831).B.createChildStore(r, {
                                    id: e.block_id,
                                    table: "block",
                                    spaceId: r.id
                                }),
                                n = await (0, a(887527).CI)({
                                    environment: t,
                                    blockStore: i,
                                    spaceStore: r,
                                    spaceViewStore: l,
                                    from: "agent_personalization_settings",
                                    duplicationFinishedToastProps: p ? {
                                        message: p(e.name)
                                    } : void 0,
                                    durationMsBeforeShowingFinishedToast: 1e3
                                });
                            n && ((0, a(377796).createAndCommit)({
                                environment: t,
                                cellTarget: {
                                    spaceWithId: r.id
                                },
                                userAction: "AgentPersonalizationSettings.updatePersonalizationPageFormat",
                                canUndo: !0,
                                perform: t => {
                                    (0, a(715144).z)({
                                        stores: [n],
                                        update: {
                                            ai_personalization_page: {
                                                templateName: e.name
                                            }
                                        },
                                        transaction: t
                                    })
                                }
                            }), c({
                                blockStore: n,
                                templateName: e.name
                            }));
                            return
                        }
                        a(888668).Sb({
                            environment: t,
                            slug: e.slug
                        }), u()
                    }, [t, o, r, l, c, u, p]),
                    handleSelectPageFromSearch: (0, i.useCallback)((e, t) => {
                        d({
                            pageId: e,
                            isFromRecentlyUsed: t
                        }), a(305721).trackAgentPersonalizationExistingPageSelected({
                            customizationSessionId: o,
                            pageId: e,
                            isFromRecentlyUsed: t
                        })
                    }, [d, o])
                }
            }
        }
    }
]);