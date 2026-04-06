"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [65026], {
        34359: (e, t, a) => {
            a.r(t), a.d(t, {
                AgentChatView: () => et,
                getMentionPointersForPrompt: () => $,
                getNewUserInitiatedStep: () => el
            }), a(16280), a(410838), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(823215), a(354520), a(581454), a(737550);
            var n = a(296540);
            let r = (0, a(109939).YK)({
                personalIntentPrompt: {
                    id: "useNewUserAIAssistantDefaultTextStore.personalIntentPrompt",
                    defaultMessage: "Create a simple daily planner for today with three priority tasks in a new page."
                },
                teamIntentPrompt: {
                    id: "useNewUserAIAssistantDefaultTextStore.teamIntentPrompt",
                    defaultMessage: "Build a project management hub in a new page."
                },
                schoolIntentPrompt: {
                    id: "useNewUserAIAssistantDefaultTextStore.schoolIntentPrompt",
                    defaultMessage: "Build a weekly study schedule template for 4 classes in a new page."
                },
                joinerPrompt: {
                    id: "useNewUserAIAssistantDefaultTextStore.joinerPrompt",
                    defaultMessage: "Summarize this workspace to help me get started."
                }
            });
            var i = a(474848);
            let s = (0, a(109939).YK)({
                    personalAgentName: {
                        id: "agentCallerThreadHeaderV2.personalAgentName",
                        defaultMessage: "Notion AI"
                    },
                    agentFallbackName: {
                        id: "agentCallerThreadHeaderV2.agentFallbackName",
                        defaultMessage: "Agent"
                    }
                }),
                o = {
                    messageBubble: {
                        padding: 12,
                        borderRadius: 12,
                        background: a(632079).Tj.background.secondary,
                        marginTop: 8
                    }
                };

            function l(e) {
                let {
                    threadStore: t,
                    callerMessageStep: r
                } = e, l = (0, a(533992).v3)(), d = (0, a(109939).tz)(), c = (0, a(972740).L)(), {
                    navigate: u
                } = (0, n.useContext)(a(44894).E), p = (0, n.useMemo)(() => {
                    if (r.parentThreadUrl) try {
                        let e = (0, a(140030).Mg)(r.parentThreadUrl, {
                            baseUrl: a(986939).A.domainBaseUrl,
                            publicDomainName: a(986939).A.publicDomainName
                        });
                        if ("thread" !== e.type) return;
                        return e.threadId
                    } catch (e) {
                        (0, a(222024).t)().error({
                            from: "AgentCallerThreadHeaderV2",
                            type: "failedToParseParentThreadUrl",
                            error: e
                        });
                        return
                    }
                }, [r.parentThreadUrl]), g = (0, n.useMemo)(() => {
                    if (c && p) return a(174148).E.createChildStore(c, {
                        table: a(832375).Toz,
                        id: p,
                        spaceId: c.id
                    })
                }, [p, c]);
                (0, n.useEffect)(() => {
                    !g || g.isReady() || g.load()
                }, [g]);
                let m = (0, a(682985).K8)(() => {
                        let e = a(728372).AppStoreSidebarSpaceStore.state;
                        if (!(!e || !r.parentAgentId || (0, a(697006).ut)(r.parentAgentId))) return a(360851).N.createChildStore(e, {
                            table: a(832375).C0E,
                            id: r.parentAgentId,
                            spaceId: e.id
                        })
                    }, [r.parentAgentId]),
                    h = (0, a(682985).K8)(() => r.parentAgentId && r.parentAgentId !== a(180139).Lj ? (null == m ? void 0 : m.getName()) ? ? d.formatMessage(s.agentFallbackName) : d.formatMessage(s.personalAgentName), [r.parentAgentId, d, m]),
                    f = (0, a(284376).gg)({
                        threadStore: t,
                        step: r
                    }),
                    y = (0, n.useCallback)(() => {
                        if (!g) return;
                        let e = (0, a(368584).C3)(l.RouterStore.state.route, g.id);
                        e ? u({
                            environment: l,
                            url: e,
                            redirect: !1
                        }) : (0, a(862451).navigateToInferenceTranscriptRoute)({
                            environment: l,
                            oldThreadStore: t,
                            newThreadStore: g,
                            isAgent: !0
                        })
                    }, [g, l, u, t]);
                return p && g ? (0, i.jsxs)(a(4458).VP, {
                    paddingTop: 12,
                    paddingInlineEnd: 12,
                    paddingBottom: 12,
                    paddingInlineStart: 12,
                    marginBottom: 16,
                    children: [(0, i.jsx)(a(821480).U, {
                        type: "agent",
                        workflowStore: m,
                        displayName: h,
                        onCallerThreadClick: y
                    }), (0, i.jsx)("div", {
                        style: o.messageBubble,
                        children: (0, i.jsx)(a(111010).D, {
                            styleKey: "bodyRegular",
                            children: f
                        })
                    })]
                }) : null
            }
            let d = {
                    width: 24,
                    height: 24,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginInlineStart: 2,
                    marginInlineEnd: 4,
                    transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)"
                },
                c = {
                    transform: "scale(1.1)"
                };

            function u(e) {
                let {
                    aiChatFeatureController: t
                } = e, r = (0, a(533992).v3)(), s = t.supportsUpdatingExistingPersonalizationSettings(), o = (0, n.useCallback)(e => {
                    e.stopPropagation(), s && (0, a(463226).cP)({
                        store: a(210037).r,
                        from: "agent_chat_face",
                        shouldSetSeenPersonalizationSettingsModal: !0,
                        environment: r
                    })
                }, [s, r]), [l, u] = (0, a(848135).B)(), p = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore), g = (0, a(463226).DV)(p), m = (0, a(682985).K8)(() => {
                    var e;
                    if (!p) return;
                    let t = null == (e = p.getSettings()) ? void 0 : e.agent_personalization_settings;
                    return (null == t ? void 0 : t.name) ? ? void 0
                }, [p]), h = (0, n.useMemo)(() => {
                    let e = (0, a(927720).N)(g, m);
                    return e || (0, i.jsx)(a(109939).sA, {
                        id: "AgentChatHeader.personalize",
                        defaultMessage: "Personalize"
                    })
                }, [g, m]);
                return (0, i.jsx)("div", {
                    ref: l,
                    style: { ...d,
                        ...u ? c : {}
                    },
                    onClick: o,
                    onKeyDown: e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), o(e))
                    },
                    role: "button",
                    tabIndex: 0,
                    children: (0, i.jsx)(a(51831).m, {
                        placement: "left",
                        content: () => h,
                        children: e => (0, i.jsx)(a(458364).x, {
                            variant: "xsmall_plus",
                            accessory: g,
                            ...e
                        })
                    })
                })
            }
            let p = (0, a(109939).YK)({
                welcomeMessage: {
                    id: "agentChatView.welcomeMessageTitle",
                    defaultMessage: "How can I help you today?"
                },
                safetyHatWelcomeMessage: {
                    id: "agentChatView.safetyHatWelcomeMessage",
                    defaultMessage: "Ready to work! Let me know what you need."
                },
                mustacheWelcomeMessage: {
                    id: "agentChatView.mustacheWelcomeMessage",
                    defaultMessage: "How may I be of service?"
                },
                headphoneWelcomeMessage: {
                    id: "agentChatView.headphoneWelcomeMessage",
                    defaultMessage: "How can I help you today?"
                },
                flowerWelcomeMessage: {
                    id: "agentChatView.flowerWelcomeMessage",
                    defaultMessage: "What can I brighten up for you today?"
                },
                pencilWelcomeMessage: {
                    id: "agentChatView.pencilWelcomeMessage",
                    defaultMessage: "What are we sketching out first?"
                },
                paprikaWelcomeMessage: {
                    id: "agentChatView.paprikaWelcomeMessage",
                    defaultMessage: "Spice it up — what do you need?"
                },
                duckWelcomeMessage: {
                    id: "agentChatView.duckWelcomeMessage",
                    defaultMessage: "Quack! What’s the plan?"
                },
                catWelcomeMessage: {
                    id: "agentChatView.catWelcomeMessage",
                    defaultMessage: "Meow… what’s your request?"
                },
                crownWelcomeMessage: {
                    id: "agentChatView.crownWelcomeMessage",
                    defaultMessage: "What royal service do you require?"
                },
                cowboyWelcomeMessage: {
                    id: "agentChatView.cowboyWelcomeMessage",
                    defaultMessage: "What can I wrangle up for ya?"
                },
                leafWelcomeMessage: {
                    id: "agentChatView.leafWelcomeMessage",
                    defaultMessage: "What’s our quest today?"
                },
                magicianWelcomeMessage: {
                    id: "agentChatView.magicianWelcomeMessage",
                    defaultMessage: "What magic shall we make happen?"
                },
                bowWelcomeMessage: {
                    id: "agentChatView.bowWelcomeMessage",
                    defaultMessage: "What can I tie up nicely for you?"
                },
                cherryWelcomeMessage: {
                    id: "agentChatView.cherryWelcomeMessage",
                    defaultMessage: "How can I help you today?"
                },
                propellerWelcomeMessage: {
                    id: "agentChatView.propellerWelcomeMessage",
                    defaultMessage: "Where are we off to first?"
                },
                firefighterWelcomeMessage: {
                    id: "agentChatView.firefighterWelcomeMessage",
                    defaultMessage: "On call and ready, how can I help?"
                },
                scarfWelcomeMessage: {
                    id: "agentChatView.scarfWelcomeMessage",
                    defaultMessage: "What can I do for you?"
                },
                dogWelcomeMessage: {
                    id: "agentChatView.dogWelcomeMessage",
                    defaultMessage: "Woof! What can I fetch for you?"
                },
                seasonalOctober25WelcomeMessage: {
                    id: "agentChatView.seasonalOctober25WelcomeMessage",
                    defaultMessage: "What shall I conjure for you?"
                },
                seasonalDecember25WelcomeMessage: {
                    id: "agentChatView.seasonalDecember25WelcomeMessage",
                    defaultMessage: "What’s on your wishlist?"
                }
            });

            function g(e) {
                let {
                    selectedAccessory: t,
                    agentEmptyStateFormat: r,
                    textSize: s = "default"
                } = e, o = "centered" === r, l = "single_line" === r, d = (0, a(960253).I)(() => ({
                    welcomeMessageTitle: {
                        fontSize: 17,
                        lineHeight: 1.3,
                        fontWeight: a(699422).Wy.semibold,
                        paddingInline: 8,
                        ...l && {
                            textAlign: "start",
                            flexShrink: 0
                        },
                        ...o && {
                            textAlign: "center"
                        }
                    },
                    welcomeMessageTitleLarge: {
                        fontSize: 30,
                        lineHeight: 1.2,
                        fontWeight: a(699422).Wy.semibold,
                        paddingInline: 8,
                        ...l && {
                            textAlign: "start",
                            flexShrink: 0
                        },
                        ...o && {
                            textAlign: "center"
                        }
                    }
                }), [o, l]), c = (0, n.useMemo)(() => {
                    if (!t) return (0, i.jsx)(a(109939).sA, { ...p.welcomeMessage
                    });
                    switch (t) {
                        case "safety-hat":
                            return (0, i.jsx)(a(109939).sA, { ...p.safetyHatWelcomeMessage
                            });
                        case "mustache":
                            return (0, i.jsx)(a(109939).sA, { ...p.mustacheWelcomeMessage
                            });
                        case "headphone":
                            return (0, i.jsx)(a(109939).sA, { ...p.headphoneWelcomeMessage
                            });
                        case "flower":
                            return (0, i.jsx)(a(109939).sA, { ...p.flowerWelcomeMessage
                            });
                        case "pencil":
                            return (0, i.jsx)(a(109939).sA, { ...p.pencilWelcomeMessage
                            });
                        case "paprika":
                            return (0, i.jsx)(a(109939).sA, { ...p.paprikaWelcomeMessage
                            });
                        case "duck":
                            return (0, i.jsx)(a(109939).sA, { ...p.duckWelcomeMessage
                            });
                        case "cat":
                            return (0, i.jsx)(a(109939).sA, { ...p.catWelcomeMessage
                            });
                        case "crown":
                            return (0, i.jsx)(a(109939).sA, { ...p.crownWelcomeMessage
                            });
                        case "cowboy":
                            return (0, i.jsx)(a(109939).sA, { ...p.cowboyWelcomeMessage
                            });
                        case "leaf":
                            return (0, i.jsx)(a(109939).sA, { ...p.leafWelcomeMessage
                            });
                        case "magician":
                            return (0, i.jsx)(a(109939).sA, { ...p.magicianWelcomeMessage
                            });
                        case "bow":
                            return (0, i.jsx)(a(109939).sA, { ...p.bowWelcomeMessage
                            });
                        case "cherry":
                            return (0, i.jsx)(a(109939).sA, { ...p.cherryWelcomeMessage
                            });
                        case "propeller":
                            return (0, i.jsx)(a(109939).sA, { ...p.propellerWelcomeMessage
                            });
                        case "firefighter":
                            return (0, i.jsx)(a(109939).sA, { ...p.firefighterWelcomeMessage
                            });
                        case "scarf":
                            return (0, i.jsx)(a(109939).sA, { ...p.scarfWelcomeMessage
                            });
                        case "dog":
                            return (0, i.jsx)(a(109939).sA, { ...p.dogWelcomeMessage
                            });
                        case "seasonal-bat":
                        case "seasonal-demon":
                        case "seasonal-frankenstein":
                        case "seasonal-pumpkin":
                            return (0, i.jsx)(a(109939).sA, { ...p.seasonalOctober25WelcomeMessage
                            });
                        case "seasonal-santa-hat":
                            return (0, i.jsx)(a(109939).sA, { ...p.seasonalDecember25WelcomeMessage
                            });
                        default:
                            return (0, i.jsx)(a(109939).sA, { ...p.welcomeMessage
                            })
                    }
                }, [t]);
                return "compact" === r ? null : (0, i.jsx)("div", {
                    style: "large" === s ? d.welcomeMessageTitleLarge : d.welcomeMessageTitle,
                    children: c
                })
            }
            let m = {
                    marginBottom: 8
                },
                h = {
                    position: "relative"
                };

            function f(e) {
                let t = (0, a(109939).tz)(),
                    r = (0, a(533992).v3)(),
                    {
                        aiChatFeatureController: s,
                        startedAgentChatThread: o,
                        onWelcomeAnimationsComplete: l
                    } = e,
                    d = "centered" === s.agentEmptyStateFormat,
                    c = "single_line" === s.agentEmptyStateFormat,
                    u = "default" === s.agentEmptyStateFormat,
                    p = "compact" === s.agentEmptyStateFormat,
                    [f, x] = (0, n.useState)(!1),
                    b = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore),
                    v = (0, a(463226).DV)(b),
                    S = (0, a(682985).K8)(() => {
                        var e;
                        let t = a(728372).AppStoreSidebarSpaceViewStore.state;
                        return null == t || null == (e = t.getSettings()) || null == (e = e.agent_personalization_settings) ? void 0 : e.name
                    }, []),
                    w = (0, a(682985).K8)(() => {
                        let e = (0, a(427846)._)(r);
                        return null == e ? void 0 : e.getFullName(t)
                    }, [r, t]),
                    C = (0, a(942829).u)(),
                    I = C && !!w,
                    A = (0, n.useMemo)(() => {
                        let e = "full_page" === s.agentChatFormFactor ? "large_plus" : "large",
                            t = (0, a(445283).N)(e);
                        return Math.ceil((Math.round(1.5625 * t) - t) / 2)
                    }, [s.agentChatFormFactor]),
                    {
                        bodyStyleKey: M
                    } = (0, a(765846).yq)(),
                    k = (0, a(960253).I)(() => ({
                        hoverContainer: {
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: d || c ? "center" : "flex-start",
                            paddingTop: 16,
                            paddingBottom: 16,
                            marginTop: -16,
                            marginBottom: -16
                        },
                        welcomeMessageTitle: {
                            paddingInline: 8,
                            ...c && {
                                textAlign: "start",
                                flexShrink: 0,
                                fontSize: 20,
                                lineHeight: 1.2
                            },
                            ...d && {
                                paddingInline: 0,
                                textAlign: "center"
                            }
                        },
                        container: {
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            justifyContent: "flex-end",
                            alignItems: "stretch",
                            maxWidth: s.chatInputWidth,
                            width: "100%",
                            pointerEvents: "auto",
                            alignSelf: "center",
                            ...c && {
                                maxWidth: "auto",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            ...d && {
                                alignItems: "center",
                                paddingBottom: 32
                            },
                            paddingTop: A,
                            ...C && {
                                paddingBottom: 8
                            }
                        }
                    }), [s.chatInputWidth, d, c, A, C]),
                    j = (0, n.useCallback)(() => {
                        x(!0)
                    }, []),
                    T = (0, n.useCallback)(() => {
                        x(!1)
                    }, []),
                    _ = (0, n.useCallback)(e => {
                        let {
                            key: t,
                            fullWidthHoverContainer: n = !1
                        } = e, r = (0, i.jsx)(a(543914).o, {
                            aiChatFeatureController: s,
                            selectedAccessory: v,
                            isHoveringContainer: f
                        });
                        return n ? (0, i.jsx)("div", {
                            style: k.hoverContainer,
                            onMouseEnter: j,
                            onMouseLeave: T,
                            children: r
                        }, t) : (0, i.jsx)("div", {
                            children: r
                        }, t)
                    }, [s, v, f, k.hoverContainer, j, T]),
                    P = (0, n.useMemo)(() => {
                        if (o || !u)
                            if (c) return [(0, i.jsxs)(a(4458).fI, {
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 20,
                                width: "auto",
                                flexShrink: 0,
                                padding: 8,
                                onMouseEnter: j,
                                onMouseLeave: T,
                                children: [_({
                                    key: "face-inline",
                                    fullWidthHoverContainer: !1
                                }), (0, i.jsx)(g, {
                                    selectedAccessory: v,
                                    personalizedName: S,
                                    agentEmptyStateFormat: s.agentEmptyStateFormat
                                })]
                            }, "inline-container")];
                            else return [_({
                                key: "face",
                                fullWidthHoverContainer: !0
                            }), (0, i.jsx)(g, {
                                selectedAccessory: v,
                                personalizedName: S,
                                agentEmptyStateFormat: s.agentEmptyStateFormat,
                                textSize: u ? "default" : "large"
                            }, "welcome-message")];
                        return [(0, i.jsx)("div", {
                            style: k.hoverContainer,
                            onMouseEnter: j,
                            onMouseLeave: T,
                            children: (0, i.jsx)(a(654979).A, {
                                visible: !0,
                                initial: {
                                    transform: "scale(0)"
                                },
                                animate: {
                                    transform: "scale(1)"
                                },
                                style: m,
                                config: {
                                    duration: 1200,
                                    timingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
                                },
                                children: _({
                                    key: "face-inner",
                                    fullWidthHoverContainer: !1
                                })
                            })
                        }, "face-animated-container"), (0, i.jsx)(a(111010).D, {
                            styleKey: "titleSmSemibold",
                            style: k.welcomeMessageTitle,
                            children: I ? (0, i.jsx)(a(109939).sA, {
                                id: "agentChatView.welcomeMessageTitleAIToNewUserExperiment",
                                defaultMessage: "Welcome {name}! 👋",
                                values: {
                                    name: w
                                }
                            }) : (0, i.jsx)(a(109939).sA, {
                                id: "agentChatView.welcomeMessageTitleFirstUse",
                                defaultMessage: "Your improved Notion AI"
                            })
                        }, "title"), (0, i.jsx)(a(111010).D, {
                            styleKey: M,
                            style: k.welcomeMessageTitle,
                            children: C ? (0, i.jsx)(a(109939).sA, {
                                id: "agentChatView.welcomeMessageDescriptionFirstUseAIToNewUserExperiment",
                                defaultMessage: "I’m your Notion Agent and I’m here to help you get set up!"
                            }) : (0, i.jsx)(a(109939).sA, {
                                id: "agentChatView.welcomeMessageDescriptionFirstUse",
                                defaultMessage: "Here are a few things I can do, or ask me anything!"
                            })
                        }, "description"), ...C ? [(0, i.jsx)(a(111010).D, {
                            styleKey: M,
                            style: k.welcomeMessageTitle,
                            children: (0, i.jsx)(a(109939).sA, {
                                id: "agentChatView.welcomeMessageSubDescriptionFirstUseAIToNewUserExperiment",
                                defaultMessage: "Start by sending the prompt below to see what I can do."
                            })
                        }, "description")] : []]
                    }, [k.welcomeMessageTitle, k.hoverContainer, o, _, c, u, j, T, s.agentEmptyStateFormat, S, v, I, C, w, M]),
                    B = (0, n.useCallback)(() => {
                        l && requestAnimationFrame(() => l())
                    }, [l]);
                (0, n.useEffect)(() => {
                    o && l && P.length > 0 && requestAnimationFrame(() => l())
                }, [o, l, P.length]);
                let R = (0, a(793292).pg)({
                        numItems: P.length,
                        disableAnimation: o,
                        onAllAnimationsComplete: o ? void 0 : B
                    }),
                    W = (0, n.useMemo)(() => c ? "0" : p ? "0px 16px 0px 20px" : "16px 16px 0 16px", [c, p]);
                return (0, i.jsx)("div", {
                    style: k.container,
                    children: (0, i.jsx)("div", {
                        className: "autolayout-fill-width",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                            ...h,
                            padding: W
                        },
                        children: P.map((e, t) => (0, i.jsx)(y, {
                            visible: R.has(t),
                            disableAnimation: o,
                            children: e
                        }, `welcome-message-${t}`))
                    })
                })
            }

            function y({
                visible: e,
                children: t,
                disableAnimation: n
            }) {
                let r = (0, a(793292).$5)(e);
                return (0, i.jsx)("div", {
                    style: n ? {} : { ...r
                    },
                    children: t
                })
            }
            let x = (0, a(109939).YK)({
                    translateThisPage: {
                        id: "AgentSuggestedActions.translateThisPage",
                        defaultMessage: "Translate this page"
                    }
                }),
                b = {
                    actionItemStyle: {
                        width: "100%",
                        minHeight: "unset",
                        padding: "8px 8px"
                    },
                    pillButton: {
                        display: "flex",
                        alignItems: "center",
                        height: 28,
                        padding: "4px 10px",
                        borderRadius: 16,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        whiteSpace: "nowrap",
                        color: a(632079).Tj.text.secondary,
                        backgroundColor: a(632079).Tj.gray.background.primaryTranslucent
                    },
                    hoveredPillButton: {
                        backgroundColor: a(632079).Tj.gray.background.tertiary
                    },
                    pillShimmer: {
                        height: 16,
                        width: 140,
                        borderRadius: 16
                    },
                    style0: {
                        margin: 0
                    }
                };

            function v({
                menuListItemProps: e,
                isLoading: t,
                variant: r = "list"
            }) {
                let s = (0, a(533992).v3)(),
                    o = (0, a(109939).tz)(),
                    l = (0, a(682985).uB)(void 0, a(510969).A),
                    d = (0, a(533992).WS)(),
                    c = (0, a(682985).K8)(() => {
                        let e = (0, a(92049).G)(s);
                        if (e && e instanceof a(970831).B) return e
                    }, [s]),
                    u = (0, a(682985).K8)(() => a(886556).z.isFullPageTranslateEnabled(), []),
                    {
                        detectedLanguage: p
                    } = (0, a(572577).H)({
                        pageStore: c,
                        enabled: !!c && u
                    }),
                    g = (0, a(768718).n)(),
                    [m, h] = (0, n.useState)(void 0),
                    f = m ? ? p ? ? g,
                    y = (0, a(682985).K8)(() => c ? a(708929).Uv.getTranslateModeForBlock(c.id) || {
                        mode: "translate_unlocked",
                        status: "pre_activation",
                        sourceLanguage: f
                    } : {
                        mode: "translate_unlocked",
                        status: "pre_activation",
                        sourceLanguage: f
                    }, [c, f]),
                    S = !(0, a(682985).O$)(a(205885).e),
                    w = (0, n.useCallback)(e => {
                        let {
                            sourceLanguage: t
                        } = e;
                        h(t)
                    }, []),
                    C = (0, n.useCallback)(e => {
                        if (!c) return;
                        let {
                            targetLanguage: t
                        } = e;
                        a(307594).Z9({
                            pageStore: c,
                            environment: s
                        }), a(307594).Ww({
                            pageStore: c,
                            targetLanguage: t,
                            sourceLanguage: f,
                            environment: s,
                            triggeredFrom: "action_menu"
                        }), l.reset()
                    }, [c, f, s, l]),
                    I = (0, a(682985).K8)(() => a(562733).zI.state.chatPanelMode, []),
                    A = (0, a(960253).I)(() => ({
                        actionItemButtonStyle: {
                            marginBottom: "1px",
                            marginTop: "1px",
                            borderRadius: "popup" === I ? "16px" : "6px",
                            display: "flex",
                            justifyContent: "space-between",
                            height: 32
                        }
                    }), [I]),
                    M = d ? a(649476).gu.ActionSheet : a(649476).gu.Popup,
                    k = (0, n.useCallback)(() => {
                        let e = M === a(649476).gu.ActionSheet ? void 0 : 400;
                        return (0, i.jsx)(a(747369).A, {
                            menuType: M,
                            width: e,
                            height: e,
                            children: (0, i.jsx)(a(158145).Z, {
                                onSelectTargetLanguage: C,
                                onSelectSourceLanguage: w,
                                editorModeConfigTranslateState: y,
                                sourceLanguage: f,
                                detectedPageLanguage: p,
                                preferredLanguage: g,
                                subMenuPlacement: "left",
                                pageId: (null == c ? void 0 : c.id) ? ? ""
                            })
                        })
                    }, [M, C, w, y, f, p, g, null == c ? void 0 : c.id]);
                return !c || S ? null : "pill" === r ? t ? (0, i.jsx)(a(795830).P, {
                    style: b.pillShimmer
                }) : (0, i.jsx)(a(656252).A, {
                    buttonPopupStore: l,
                    popupType: a(423291).n.Popup,
                    placementToOrigin: "top",
                    originGap: 4,
                    content: k,
                    children: e => (0, i.jsx)(a(64960).Ay, { ...e,
                        disabled: t,
                        style: b.pillButton,
                        hoveredStyle: b.hoveredPillButton,
                        children: o.formatMessage(x.translateThisPage)
                    })
                }) : e ? (0, i.jsx)(a(656252).A, {
                    buttonPopupStore: l,
                    popupType: a(423291).n.Popup,
                    placementToOrigin: "top",
                    originGap: 4,
                    content: k,
                    children: n => (0, i.jsx)(a(95582).A, { ...e,
                        ...n,
                        title: (0, i.jsx)(a(111010).D, {
                            styleKey: "bodyRegular",
                            children: o.formatMessage(x.translateThisPage)
                        }),
                        left: t ? null : (0, i.jsx)(a(16275).I, {
                            icon: a(740902).textTranslateIcon,
                            colorVariant: "primary"
                        }),
                        leftStyle: b.style0,
                        disabled: t,
                        buttonStyle: A.actionItemButtonStyle,
                        style: b.actionItemStyle,
                        dontShrinkTitle: !0,
                        ignoreLocalHoverState: !1
                    })
                }) : null
            }

            function S(e) {
                let {
                    environment: t,
                    userSettingsStore: n,
                    dismissed: r
                } = e;
                (0, a(377796).createAndCommit)({
                    environment: t,
                    userAction: "userSettingsActions.setDismissAgentGetStartedBanner",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                dismissed_agent_get_started_banner: r
                            }
                        })
                    }
                })
            }
            let w = (0, a(109939).YK)({
                    getStarted: {
                        id: "agentSuggestedActions.getStarted",
                        defaultMessage: "Get started"
                    },
                    dismissButton: {
                        id: "agentSuggestedActions.dismissButton",
                        defaultMessage: "Dismiss"
                    },
                    clearDailyBriefButton: {
                        id: "agentSuggestedActions.clearDailyBriefButton",
                        defaultMessage: "Clear today’s brief"
                    },
                    dailyBriefPillGenerate: {
                        id: "agentSuggestedActions.dailyBriefPillGenerate",
                        defaultMessage: "Help start my day"
                    },
                    dailyBriefPillReview: {
                        id: "agentSuggestedActions.dailyBriefPillReview",
                        defaultMessage: "Review my daily brief"
                    },
                    writeMySelfReview: {
                        id: "AgentSuggestedActions.writeMySelfReview",
                        defaultMessage: "Write my self review"
                    }
                }),
                C = [140, 180, 160, 150];

            function I({
                loadAttachmentData: e,
                handlePromptSubmit: t,
                readyToAnimate: n = !0,
                disableAnimation: r,
                variant: s = "list",
                aiChatFeatureController: o,
                chatLoaded: l,
                inferenceInfo: d
            }) {
                let c = (0, a(604306).r)("agent_suggested_actions"),
                    u = (0, a(960253).I)(() => ({
                        wrapper: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            maxWidth: "number" == typeof o.chatInputWidth ? o.chatInputWidth : void 0,
                            width: "100%",
                            alignSelf: "center",
                            margin: "0 auto",
                            ..."card" === s ? {
                                paddingTop: 16
                            } : o.suggestedActionsContainerPadding
                        }
                    }), [o.chatInputWidth, o.suggestedActionsContainerPadding, s]),
                    p = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => "ai" === p.RouterStore.state.route.name, [p]) && !l ? null : "prebuilt_prompts" === c ? (0, i.jsx)("div", {
                    style: u.wrapper,
                    children: (0, i.jsx)(A, {
                        loadAttachmentData: e,
                        handlePromptSubmit: t,
                        readyToAnimate: n,
                        disableAnimation: r,
                        variant: s,
                        inferenceInfo: d
                    })
                }) : "control" === c ? null : void(0, a(722371).HB)(c)
            }

            function A({
                loadAttachmentData: e,
                handlePromptSubmit: t,
                readyToAnimate: r,
                disableAnimation: s,
                variant: o = "list",
                inferenceInfo: l
            }) {
                let d = (0, a(109939).tz)(),
                    c = (0, a(533992).v3)(),
                    u = (0, a(682985).K8)(() => (0, a(92049).G)(c), [c]),
                    p = (0, a(682985).K8)(() => {
                        if (u && !(u instanceof a(360851).N)) return (0, a(444610).U)(u)
                    }, [u]),
                    g = (0, a(682985).K8)(() => {
                        var e;
                        if (!p) return {
                            isLoading: !1,
                            hasContent: !1
                        };
                        let t = p.isLoadedStore.state,
                            n = p.isEmptyStore.state,
                            r = (null == (e = p.collectionStore()) ? void 0 : e.isPageTreeCollection()) ? ? !1,
                            i = !(u instanceof a(360851).N) && ((null == u ? void 0 : u.isCollectionView()) ? ? !1) && !r;
                        return {
                            isLoading: !t && i,
                            hasContent: t && !n
                        }
                    }, [p, u]),
                    m = g.isLoading,
                    h = g.hasContent,
                    f = (0, a(682985).K8)(() => (0, a(599412).H)(d), [d]),
                    y = (0, a(682985).K8)(() => {
                        var e;
                        let t = a(728372).AppStoreSidebarSpaceViewStore.state;
                        return (null == t || null == (e = t.getSettings()) || null == (e = e.agent_personalization_settings) ? void 0 : e.has_already_seen_personalization_settings_modal) ? ? !1
                    }, []),
                    x = (0, a(83208).X)("agent_whats_new_education_action"),
                    b = (0, a(83208).X)("ai_image_generation"),
                    v = (0, a(83208).X)("agent_self_review_suggested_action"),
                    S = (0, a(972740).L)(),
                    C = (0, a(682985).K8)(() => (null == S ? void 0 : S.isAiImageGenerationEnabledOnSpace()) ? ? !0, [S]),
                    I = b && C,
                    M = (0, a(596663).k)(),
                    {
                        canCreate: k
                    } = (0, a(639938).V)(),
                    j = M && k,
                    T = (0, n.useCallback)(async () => {
                        let e = await a(178801).oQ.agentActions.load(),
                            t = a(92513).JW();
                        await e.showCreationModal({
                            analytics: {
                                flowId: t,
                                origin: "personal_agent_suggested_action"
                            }
                        })
                    }, []),
                    _ = (0, n.useCallback)(() => {
                        a(463226).cP({
                            store: a(210037).r,
                            from: "agent_suggested_actions",
                            shouldSetSeenPersonalizationSettingsModal: !0,
                            environment: c
                        })
                    }, [c]),
                    P = (0, a(682985).K8)(() => "ai" === c.RouterStore.state.route.name, [c]),
                    R = (0, a(682985).K8)(() => {
                        var e;
                        return !(0, a(722371).O9)(null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.whats_new_in_agent_suggestion_last_interacted_at) && x || P
                    }, [x, P]),
                    W = (0, a(682985).K8)(() => {
                        let n = (0, a(503507).MY)({
                            store: u,
                            hasCollectionContent: h,
                            loadAttachmentData: e,
                            handlePromptSubmit: ({
                                text: e,
                                prebuiltPromptType: n
                            }) => {
                                "whats_new_in_agent" === n && function(e) {
                                    let t = a(728372).AppStoreCurrentUserSettingsStore.state;
                                    if (!t) return;
                                    let {
                                        environment: n
                                    } = e;
                                    (0, a(377796).createAndCommit)({
                                        environment: n,
                                        userAction: "userSettingsActions.setWhatsNewInAgentSuggestionLastInteractedAt",
                                        canUndo: !1,
                                        cellTarget: "main",
                                        perform: e => {
                                            (0, a(862759).m)({
                                                userSettingsStore: t,
                                                transaction: e,
                                                data: {
                                                    whats_new_in_agent_suggestion_last_interacted_at: Date.now()
                                                }
                                            })
                                        }
                                    })
                                }({
                                    environment: c
                                }), t({
                                    type: "prebuilt-prompt",
                                    text: e,
                                    promptType: n,
                                    locale: f
                                })
                            },
                            intl: d,
                            enableAiImageGeneration: I,
                            canShowPersonalizationSettingsModal: !a(986939).A.isMobile && !y,
                            openFaceCustomizationModal: _,
                            openCreateCustomAgentModal: T,
                            isAiLandingPage: P,
                            enableWhatsNewEducationAction: R,
                            enableCreateCustomAgentAction: j
                        });
                        return !v || u instanceof a(360851).N || n.unshift({
                            type: "write_my_self_review",
                            suggestedAction: d.formatMessage(w.writeMySelfReview),
                            icon: a(636).pencilLineIcon,
                            handleClick: () => t({
                                type: "text-value",
                                text: a(316836).S.mentionPage({
                                    table: a(832375).evP,
                                    id: "326b35e6-e67f-8068-b1f4-e822b3548cc9"
                                }).build()
                            })
                        }), n.slice(0, P ? 5 : 4)
                    }, [u, h, e, d, I, v, y, _, T, P, R, j, t, f, c]);
                return (0, i.jsx)(B, {
                    suggestedActionInfos: W,
                    readyToAnimate: r,
                    isLoading: m,
                    disableAnimation: s,
                    variant: o,
                    inferenceInfo: l,
                    handlePromptSubmit: t
                })
            }
            let M = {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                },
                k = {
                    width: "100%",
                    padding: "4px 0"
                },
                j = {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                    rowGap: 12,
                    columnGap: 8,
                    justifyContent: "center"
                },
                T = {
                    gridColumn: "1 / -1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingInlineStart: 8,
                    marginBottom: -8
                },
                _ = {
                    borderRadius: "50%",
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                P = {
                    position: "relative"
                };

            function B({
                suggestedActionInfos: e,
                readyToAnimate: t,
                isLoading: r,
                disableAnimation: s,
                variant: o = "list",
                inferenceInfo: l,
                handlePromptSubmit: d
            }) {
                let [c, u] = (0, n.useState)(!1), p = (0, a(109939).tz)(), g = (0, a(533992).v3)(), {
                    navigate: m
                } = (0, n.useContext)(a(44894).E), h = (0, a(682985).O$)(a(728372).AppStoreCurrentUserSettingsStore), f = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore), y = (0, a(853284).U)(), x = (0, a(682985).K8)(() => "ai" === g.RouterStore.state.route.name, [g]), [b, v] = (0, n.useState)(4), C = (0, n.useRef)(null), I = (0, n.useRef)(void 0), A = (0, a(972740).L)(), {
                    threadIds: P
                } = (0, a(234622).m)({
                    spaceStore: A,
                    isEnabled: y && x,
                    includeWorkflows: !0
                }), R = void 0 === P || P.length > 0, L = (0, a(682985).K8)(() => {
                    var e;
                    return null == f || null == (e = f.getSettings()) || null == (e = e.agent_personalization_settings) ? void 0 : e.daily_brief_prompt
                }, [f]), [F, D] = (0, n.useState)(void 0);
                (0, n.useEffect)(() => {
                    (async () => {
                        let {
                            getDailyBriefInfoForToday: e
                        } = await a.e(96267).then(a.bind(a, 711336));
                        D(e(L))
                    })()
                }, [L]);
                let E = (null == F ? void 0 : F.status) === "ready" || (null == F ? void 0 : F.status) === "viewed",
                    N = (0, n.useCallback)(() => {
                        (async () => {
                            let e = g.RouterStore.state.route.name,
                                t = "ai" === e || "chat" === e,
                                {
                                    openOrCreateDailyBrief: n
                                } = await Promise.all([a.e(67098), a.e(73199)]).then(a.bind(a, 376608));
                            await n({
                                environment: g,
                                showChatSidebarSource: "daily_brief_reminder",
                                navigationMethod: t ? "route" : "panel",
                                navigate: t ? m : void 0
                            })
                        })()
                    }, [g, m]),
                    K = (0, n.useCallback)(() => {
                        (async () => {
                            if (!(null == F ? void 0 : F.threadId) || !A) return;
                            let {
                                clearLatestDailyBriefThreadId: e
                            } = await Promise.all([a.e(67098), a.e(73199)]).then(a.bind(a, 376608));
                            await e({
                                environment: g
                            })
                        })()
                    }, [F, g, A]),
                    [q, z] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    (async () => {
                        let {
                            isEligibleForDailyBrief: e
                        } = await a.e(94105).then(a.bind(a, 477954));
                        z(e())
                    })()
                }, []);
                let U = (0, n.useMemo)(() => {
                        if (!q) return;
                        let e = (null == F ? void 0 : F.threadId) !== void 0;
                        return {
                            type: "daily_brief",
                            suggestedAction: p.formatMessage(E ? w.dailyBriefPillReview : w.dailyBriefPillGenerate),
                            icon: a(128382).N,
                            handleClick: N,
                            hasThreadForToday: e,
                            onSecondaryButtonClick: e ? K : void 0
                        }
                    }, [q, F, N, K, p, E]),
                    V = (0, n.useMemo)(() => {
                        if (!U) return e;
                        let t = e.slice(0, 3);
                        return t.push(U), t
                    }, [U, e]),
                    H = s || t,
                    O = (0, a(793292).pg)({
                        numItems: H ? V.length : 0,
                        animateIndexOffset: 0,
                        disableAnimation: s
                    });
                (0, n.useEffect)(() => {
                    if ("card" !== o || !C.current) return;
                    let e = e => e > 690 ? 4 : e > 340 ? 2 : 1,
                        t = new ResizeObserver(t => {
                            for (let a of t) v(e(a.contentRect.width))
                        });
                    return t.observe(C.current), () => {
                        t.disconnect()
                    }
                }, [o]);
                let $ = (0, n.useCallback)(() => {
                    h && S({
                        environment: g,
                        userSettingsStore: h,
                        dismissed: !0
                    })
                }, [h, g]);
                (0, n.useEffect)(() => () => {
                    I.current && ($(), clearTimeout(I.current))
                }, [$]);
                let G = (0, n.useRef)(!1),
                    Y = (0, n.useMemo)(() => V.filter((e, t) => O.has(t)).map(e => e.type), [V, O]);
                (0, n.useEffect)(() => {
                    Y.length > 0 && !G.current && (a(305721).trackAgentPrebuiltPromptShownToUser({
                        promptTypes: Y,
                        inferenceInfo: l
                    }), G.current = !0)
                }, [Y, l]);
                let X = [{
                        key: "agent-suggested-actions",
                        items: V.map((e, t) => ({
                            key: `suggested-action-${t}`,
                            render: a => (0, i.jsx)(W, {
                                suggestedActionInfo: e,
                                menuListItemProps: a,
                                visible: O.has(t),
                                isLoading: r,
                                index: t,
                                disableAnimation: s,
                                variant: o
                            }),
                            action: () => e.handleClick()
                        })),
                        render: e => (0, i.jsx)(a(844565).A, {
                            style: k,
                            ...e
                        })
                    }],
                    Z = (0, a(960253).I)(() => ({
                        cardContainer: {
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: `repeat(${b}, 1fr)`,
                            gap: 16,
                            justifyContent: "center",
                            marginBottom: 16 * !c,
                            maxHeight: 200 * !c,
                            opacity: +!c,
                            transform: c ? "translateY(-20px)" : "translateY(0)",
                            transition: "margin-bottom 400ms ease-out, max-height 400ms ease-out, opacity 400ms ease-out, transform 400ms ease-out",
                            overflow: "hidden"
                        }
                    }), [b, c]),
                    J = (0, n.useCallback)(() => {
                        u(!0), I.current && clearTimeout(I.current), I.current = setTimeout(() => {
                            $(), I.current = void 0
                        }, 400)
                    }, [$]),
                    Q = (0, a(682985).K8)(() => {
                        if ("card" !== o || y && (!x || R)) return !1;
                        if (!h) return !0;
                        let e = h.getSettings();
                        return !(null != e && e.dismissed_agent_get_started_banner)
                    }, [R, x, y, h, o]);
                return "pill" === o || "card" === o ? "card" !== o || Q ? (0, i.jsxs)("div", {
                    ref: "card" === o ? C : void 0,
                    style: "card" === o ? Z.cardContainer : j,
                    children: ["card" === o ? (0, i.jsxs)("div", {
                        style: T,
                        children: [(0, i.jsx)(a(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: (0, i.jsx)(a(109939).sA, { ...w.getStarted
                            })
                        }), (0, i.jsx)(a(374533).A, {
                            icon: a(25094).xMarkSmallIcon,
                            style: _,
                            colorPalette: "gray",
                            ariaLabel: p.formatMessage(w.dismissButton),
                            onClick: J
                        })]
                    }) : void 0, V.map((e, t) => (0, i.jsx)(W, {
                        suggestedActionInfo: e,
                        menuListItemProps: void 0,
                        visible: O.has(t),
                        isLoading: r,
                        index: t,
                        disableAnimation: s,
                        variant: o
                    }, `suggested-action-${t}`))]
                }) : null : (0, i.jsx)(a(747369).A, {
                    menuType: a(649476).gu.Popup,
                    disableScroller: !0,
                    height: "auto",
                    maxHeight: 220,
                    width: "100%",
                    children: (0, i.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        sections: X,
                        initialFocus: void 0,
                        disableInitialScroll: !0,
                        resetFocusOnMouseOut: !0,
                        captureKeyboardOnlyWhenFocused: !0,
                        style: M
                    })
                })
            }
            let R = {
                actionItemRightStyles: {
                    marginInlineStart: 0
                },
                pillIcon: {
                    marginInlineEnd: 6,
                    flexShrink: 0
                },
                pillText: {
                    minWidth: 0,
                    flex: 1
                },
                pillSecondaryButton: {
                    height: 24,
                    width: 24,
                    margin: 0,
                    padding: 0
                },
                listSecondaryButton: {
                    height: 24,
                    width: 24,
                    margin: 0,
                    padding: 0
                },
                pillShimmerItem: {
                    height: 16,
                    borderRadius: 16
                },
                cardText: {
                    fontSize: 12,
                    fontWeight: a(699422).Wy.regular,
                    lineHeight: 1.2,
                    width: "100%",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    whiteSpace: "normal"
                },
                cardShimmerItem: {
                    height: 16,
                    borderRadius: 16
                },
                cardSecondaryButton: {
                    height: 24,
                    width: 24,
                    margin: 0,
                    padding: 0
                },
                style0: {
                    margin: 0
                },
                style1: {
                    width: "100%"
                }
            };

            function W({
                suggestedActionInfo: e,
                menuListItemProps: t,
                visible: r,
                isLoading: s,
                index: o,
                disableAnimation: l,
                variant: d = "list"
            }) {
                let c = (0, a(109939).tz)(),
                    [u, p] = (0, n.useState)(!1),
                    [g, m] = (0, n.useState)(!1),
                    [h, f] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    if (l) return void f(!0);
                    if (r && e.isNew && !s) {
                        let e = setTimeout(() => {
                            f(!0)
                        }, 300);
                        return () => clearTimeout(e)
                    }
                }, [r, e.isNew, s, l]);
                let y = (0, a(682985).K8)(() => a(562733).zI.state.chatPanelMode, []),
                    x = (0, i.jsx)(a(746434).E, {
                        color: "blue",
                        content: (0, i.jsx)(a(111010).D, {
                            styleKey: "captionRegular",
                            colorPalette: "blue",
                            children: (0, i.jsx)(a(109939).sA, {
                                id: "AgentSuggestedActions.newBadge",
                                defaultMessage: "New"
                            })
                        })
                    }),
                    b = (0, a(793292).$5)(r),
                    S = (0, a(960253).I)(() => ({
                        animatedItem: { ...l ? {} : b
                        },
                        actionItemStyle: {
                            width: "100%",
                            minHeight: "unset",
                            padding: "8px 8px",
                            ...l ? {} : b
                        },
                        actionItemButtonStyle: {
                            marginBottom: "1px",
                            marginTop: "1px",
                            borderRadius: "popup" === y ? "16px" : "6px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 8,
                            maxWidth: "100%",
                            overflow: "hidden",
                            height: 32
                        },
                        shimmerItem: {
                            width: "100%",
                            height: 16,
                            padding: "8px 8px",
                            borderRadius: "popup" === y ? 16 : 6
                        },
                        pillButton: {
                            display: "flex",
                            alignItems: "center",
                            height: 32,
                            maxWidth: "100%",
                            minWidth: 0,
                            padding: "4px 10px",
                            borderRadius: 16,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            color: a(632079).Tj.text.primary,
                            backgroundColor: a(632079).Tj.gray.background.primaryTranslucent,
                            gap: 6,
                            ...l ? {} : b
                        },
                        secondaryButtonContainer: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInlineStart: 4,
                            flexShrink: 0,
                            opacity: +!!u,
                            transition: "opacity 0.1s ease-in-out"
                        },
                        cardButton: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 10,
                            padding: 12,
                            borderRadius: 16,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            whiteSpace: "nowrap",
                            color: a(632079).Tj.text.secondary,
                            backgroundColor: a(632079).Tj.gray.background.primaryTranslucent,
                            flexBasis: 0,
                            flexGrow: 1,
                            ...l ? {} : b
                        }
                    }), [b, l, y, u]);
                if ("translate" === e.type) return (0, i.jsx)("div", {
                    style: S.animatedItem,
                    children: (0, i.jsx)(v, {
                        menuListItemProps: t,
                        isLoading: s,
                        variant: "card" === d ? "pill" : d
                    })
                });
                let I = "daily_brief" === e.type && !0 === e.hasThreadForToday && void 0 !== e.onSecondaryButtonClick,
                    A = c.formatMessage(w.clearDailyBriefButton);
                return "pill" === d ? (0, i.jsx)(a(64960).Ay, {
                    disabled: s,
                    onClick: () => e.handleClick(),
                    onMouseEnter: () => p(!0),
                    onMouseLeave: () => p(!1),
                    style: S.pillButton,
                    children: s ? (0, i.jsx)(a(795830).P, {
                        style: { ...R.pillShimmerItem,
                            width: C[o]
                        }
                    }, o) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(a(16275).I, {
                            style: R.pillIcon,
                            icon: e.icon,
                            colorVariant: "primary"
                        }), (0, i.jsx)(a(111010).D, {
                            styleKey: "bodyRegular",
                            lineClamp: 1,
                            style: R.pillText,
                            children: e.suggestedAction
                        }), I ? (0, i.jsx)("div", {
                            style: S.secondaryButtonContainer,
                            children: (0, i.jsx)(a(51831).m, {
                                content: () => A,
                                placement: "top",
                                alignment: "center",
                                delayThreshold: 400,
                                children: t => (0, i.jsx)(a(374533).A, { ...t,
                                    onMouseEnter: e => {
                                        var a;
                                        m(!0), null == (a = t.onMouseEnter) || a.call(t, e)
                                    },
                                    onMouseLeave: e => {
                                        var a;
                                        m(!1), null == (a = t.onMouseLeave) || a.call(t, e)
                                    },
                                    icon: {
                                        icon: a(660658).N,
                                        size: "default"
                                    },
                                    style: R.pillSecondaryButton,
                                    ariaLabel: A,
                                    onClick: t => {
                                        var a;
                                        t.stopPropagation(), null == (a = e.onSecondaryButtonClick) || a.call(e)
                                    }
                                })
                            })
                        }) : null]
                    })
                }) : "card" === d ? (0, i.jsx)(a(64960).Ay, {
                    disabled: s,
                    onClick: () => e.handleClick(),
                    onMouseEnter: () => p(!0),
                    onMouseLeave: () => p(!1),
                    style: S.cardButton,
                    children: s ? (0, i.jsx)(a(795830).P, {
                        style: { ...R.cardShimmerItem,
                            ...R.style1
                        }
                    }, o) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            children: [(0, i.jsx)(a(16275).I, {
                                icon: e.icon,
                                colorVariant: "secondary"
                            }), I ? (0, i.jsx)("div", {
                                style: S.secondaryButtonContainer,
                                children: (0, i.jsx)(a(51831).m, {
                                    content: () => A,
                                    placement: "bottom",
                                    alignment: "center",
                                    delayThreshold: 400,
                                    children: t => (0, i.jsx)(a(374533).A, { ...t,
                                        onMouseEnter: e => {
                                            var a;
                                            m(!0), null == (a = t.onMouseEnter) || a.call(t, e)
                                        },
                                        onMouseLeave: e => {
                                            var a;
                                            m(!1), null == (a = t.onMouseLeave) || a.call(t, e)
                                        },
                                        icon: {
                                            icon: a(660658).N,
                                            size: "default"
                                        },
                                        style: R.cardSecondaryButton,
                                        ariaLabel: A,
                                        onClick: t => {
                                            var a;
                                            t.stopPropagation(), null == (a = e.onSecondaryButtonClick) || a.call(e)
                                        }
                                    })
                                })
                            }) : null]
                        }), (0, i.jsx)("div", {
                            style: R.cardText,
                            children: e.suggestedAction
                        })]
                    })
                }) : t ? (0, i.jsx)("div", {
                    onMouseEnter: () => p(!0),
                    onMouseLeave: () => p(!1),
                    children: (0, i.jsx)(a(95582).A, { ...t,
                        disabled: s,
                        onClick: () => e.handleClick(),
                        title: s ? (0, i.jsx)(a(795830).P, {
                            style: { ...S.shimmerItem,
                                width: C[o]
                            }
                        }, o) : (0, i.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            className: "autolayout-row autolayout-fill-width",
                            style: {
                                gap: 14,
                                ...P
                            },
                            children: [(0, i.jsx)(a(111010).D, {
                                styleKey: "bodyRegular",
                                lineClamp: 1,
                                children: e.suggestedAction
                            }), e.isNew && h ? l ? x : (0, i.jsx)(a(153321).P.span, {
                                initial: {
                                    opacity: 0,
                                    scale: 0
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    delay: .12 * o,
                                    duration: .3,
                                    type: "spring",
                                    damping: 25
                                },
                                children: x
                            }) : null]
                        }),
                        focused: t.focused,
                        left: s ? null : (0, i.jsx)(a(16275).I, {
                            icon: e.icon,
                            colorVariant: "primary"
                        }),
                        right: I ? (0, i.jsx)("div", {
                            style: S.secondaryButtonContainer,
                            children: (0, i.jsx)(a(51831).m, {
                                content: () => A,
                                placement: "top",
                                alignment: "center",
                                delayThreshold: 400,
                                children: t => (0, i.jsx)(a(374533).A, { ...t,
                                    onMouseEnter: e => {
                                        var a;
                                        m(!0), null == (a = t.onMouseEnter) || a.call(t, e)
                                    },
                                    onMouseLeave: e => {
                                        var a;
                                        m(!1), null == (a = t.onMouseLeave) || a.call(t, e)
                                    },
                                    icon: {
                                        icon: a(660658).N,
                                        size: "default"
                                    },
                                    style: R.listSecondaryButton,
                                    ariaLabel: A,
                                    onClick: t => {
                                        var a;
                                        t.stopPropagation(), null == (a = e.onSecondaryButtonClick) || a.call(e)
                                    }
                                })
                            })
                        }) : void 0,
                        leftStyle: R.style0,
                        buttonStyle: S.actionItemButtonStyle,
                        style: S.actionItemStyle,
                        rightStyle: R.actionItemRightStyles,
                        ignoreLocalHoverState: !1
                    })
                }) : null
            }(0, a(887789).exposeDebugEnvironmentValue)("resetAgentGetStartedBanner", e => () => {
                let t = a(728372).AppStoreCurrentUserSettingsStore.state;
                return t ? (S({
                    environment: e,
                    userSettingsStore: t,
                    dismissed: !1
                }), "Agent get started banner dismissal state has been reset. Refresh the page to see it again.") : "No user settings store found"
            });
            var L = () => a(426048),
                F = () => a(997486);
            async function D(e) {
                let {
                    environment: t,
                    threadStore: n,
                    planStepId: r,
                    planTitle: i,
                    planPageUrl: s
                } = e;
                if (!n.getSpaceId()) throw Error("Missing spaceId on threadStore during plan approval");
                let o = n.getSpaceStore();
                if (!o) throw Error("Missing spaceStore on threadStore during plan approval");
                let l = t.currentUser.id;
                if (!l) throw Error("Missing currentUserId during plan approval");
                let d = a(807825).L.createChildStore(o, {
                    table: a(832375).oo9,
                    id: l
                });
                await (0, a(752104).j)({
                    environment: t,
                    threadStore: n,
                    confirmToolStepIds: [r]
                });
                let c = `The plan '${i}' has been approved. Execute it now. Plan page: ${s} View the plan page and execute each step in order.`,
                    u = (0, a(674880).uP)({
                        environment: t,
                        spaceStore: o,
                        userStore: d,
                        actualMessage: (0, a(247438).x9d)(c),
                        displayMessage: (0, a(247438).x9d)("Approve & Execute")
                    });
                (0, a(455764).T)({
                    environment: t,
                    clientStore: a(57168).defaultClientAIChatStore,
                    userStore: d,
                    spaceStore: o,
                    threadStore: n,
                    addSteps: [u],
                    waitForServerCommit: !0,
                    temporaryAiThreadManager: void 0
                })
            }
            let E = (0, a(109939).YK)({
                    approvePlanMessage: {
                        id: "floatingPlanApprovalBar.approvePlanMessage",
                        defaultMessage: "“{planTitle}” is ready for review"
                    },
                    approvePlanButton: {
                        id: "floatingPlanApprovalBar.approvePlanButton",
                        defaultMessage: "Approve & build"
                    },
                    planApproved: {
                        id: "floatingPlanApprovalBar.planApproved",
                        defaultMessage: "Plan approved"
                    },
                    discardPlan: {
                        id: "floatingPlanApprovalBar.discardPlan",
                        defaultMessage: "Discard plan"
                    },
                    planDiscarded: {
                        id: "floatingPlanApprovalBar.planDiscarded",
                        defaultMessage: "Plan discarded"
                    }
                }),
                N = {
                    wrapper: {
                        boxShadow: `${a(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                        borderRadius: 10,
                        backgroundColor: a(632079).Tj.background.elevated,
                        padding: "10px 12px",
                        marginBottom: 8
                    },
                    textContainer: {
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        flex: 1,
                        minWidth: 0
                    },
                    checkIcon: {
                        flexShrink: 0
                    }
                };

            function K(e) {
                let {
                    threadStore: t,
                    runningInference: r,
                    pendingPlanModeStep: s
                } = e, o = (0, a(533992).v3)(), l = (0, a(109939).tz)(), [d, c] = (0, n.useState)(() => new Set), [u, p] = (0, n.useState)(!1), g = (0, n.useRef)(!1), [m, h] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    if (!m) return;
                    let e = window.setTimeout(() => h(!1), 2e3);
                    return () => window.clearTimeout(e)
                }, [m]), (0, n.useEffect)(() => {
                    u && (r ? g.current = !0 : g.current && (p(!1), g.current = !1))
                }, [u, r]);
                let f = (0, a(682985).K8)(() => {
                        if (s && !(0, F().ar)(s.value) || !t) return;
                        let e = t.getTranscript();
                        if (!(0, F().bI)((0, F().i)(e)))
                            for (let t = e.length - 1; t >= 0; t--) {
                                let a = e[t];
                                if ("agent-tool-result" === a.type && (0, L().gY)(a, "generate-plan")) {
                                    if (!(0, F().ws)(a) || d.has(a.id)) continue;
                                    let n = (0, F().c1)(e, t);
                                    if (n && (0, F().r$)(e, t)) return;
                                    let i = a.result;
                                    if (!i || !i.planPageUrl) return;
                                    return {
                                        stepId: a.id,
                                        planTitle: i.planTitle ? ? "Plan",
                                        planPageUrl: i.planPageUrl,
                                        disableActions: n && r
                                    }
                                }
                            }
                    }, [t, d, s, r]),
                    y = (0, n.useCallback)(() => {
                        if (f && t) {
                            var e;
                            (0, a(104310).u)({
                                event: {
                                    eventName: "plan_approval_action",
                                    eventProperties: {
                                        thread_id: t.id,
                                        action: "discard",
                                        plan_step_id: f.stepId
                                    }
                                }
                            }), h(!0), e = {
                                environment: o,
                                threadStore: t,
                                planStepId: f.stepId
                            }, (0, a(752104).j)({
                                environment: e.environment,
                                threadStore: e.threadStore,
                                confirmToolStepIds: [],
                                rejectToolStepIds: [e.planStepId]
                            }).catch(e => {
                                (0, a(222024).t)().error({
                                    from: "approvePlanActions",
                                    type: "planDiscardFailed",
                                    error: e
                                })
                            })
                        }
                    }, [o, f, t]),
                    x = (0, n.useCallback)(() => {
                        if (f && t) {
                            var e;
                            (0, a(104310).u)({
                                event: {
                                    eventName: "plan_approval_action",
                                    eventProperties: {
                                        thread_id: t.id,
                                        action: "approve",
                                        plan_step_id: f.stepId
                                    }
                                }
                            }), p(!0), c(e => new Set(e).add(f.stepId)), D(e = {
                                environment: o,
                                threadStore: t,
                                planStepId: f.stepId,
                                planTitle: f.planTitle,
                                planPageUrl: f.planPageUrl,
                                onError: () => {
                                    p(!1), c(e => {
                                        let t = new Set(e);
                                        return t.delete(f.stepId), t
                                    })
                                }
                            }).catch(t => {
                                (0, a(222024).t)().error({
                                    from: "approvePlanActions",
                                    type: "planApprovalFailed",
                                    error: t
                                }), e.onError()
                            })
                        }
                    }, [o, f, t]);
                return u ? (0, i.jsxs)(a(4458).fI, {
                    width: "fill",
                    gap: 8,
                    alignItems: "center",
                    style: N.wrapper,
                    children: [(0, i.jsx)(a(16275).I, {
                        icon: a(971730).checkmarkSmallIcon,
                        size: "sm",
                        colorPalette: "green",
                        colorVariant: "accentPrimary",
                        style: N.checkIcon
                    }), (0, i.jsx)("div", {
                        style: N.textContainer,
                        children: (0, i.jsx)(a(111010).D, {
                            styleKey: "bodyRegular",
                            children: (0, i.jsx)(a(109939).sA, { ...E.planApproved
                            })
                        })
                    }), (0, i.jsx)(a(861510).N, {
                        styleKey: "bodyRegular",
                        text: "Executing…",
                        animate: !0
                    })]
                }) : m ? (0, i.jsxs)(a(4458).fI, {
                    width: "fill",
                    gap: 8,
                    alignItems: "center",
                    style: N.wrapper,
                    children: [(0, i.jsx)(a(16275).I, {
                        icon: a(968411).trashIcon,
                        size: "sm",
                        colorVariant: "tertiary",
                        style: N.checkIcon
                    }), (0, i.jsx)("div", {
                        style: N.textContainer,
                        children: (0, i.jsx)(a(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: (0, i.jsx)(a(109939).sA, { ...E.planDiscarded
                            })
                        })
                    })]
                }) : f ? (0, i.jsxs)(a(4458).fI, {
                    width: "fill",
                    gap: 8,
                    alignItems: "center",
                    style: N.wrapper,
                    children: [(0, i.jsx)("div", {
                        style: N.textContainer,
                        children: (0, i.jsx)(a(861510).N, {
                            styleKey: "bodyRegular",
                            text: (0, i.jsx)(a(109939).sA, { ...E.approvePlanMessage,
                                values: {
                                    planTitle: f.planTitle
                                }
                            }),
                            animate: !0
                        })
                    }), (0, i.jsx)(a(51831).m, {
                        content: () => (0, i.jsx)(a(109939).sA, { ...E.discardPlan
                        }),
                        children: e => (0, i.jsx)(a(374533).A, { ...e,
                            ariaLabel: l.formatMessage(E.discardPlan),
                            icon: a(968411).trashIcon,
                            onClick: y,
                            size: "md",
                            disabled: f.disableActions
                        })
                    }), (0, i.jsx)(a(912946).A, {
                        onClick: x,
                        colorPalette: "blue",
                        disabled: f.disableActions,
                        children: (0, i.jsx)(a(109939).sA, { ...E.approvePlanButton
                        })
                    })]
                }) : null
            }
            let q = a(699422).Wy.bold,
                z = {
                    headerContainer: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        marginBlockStart: 0,
                        marginBlockEnd: 16
                    },
                    headerContainerOverlapCover: {
                        marginBlockStart: -(a(421405).d + a(421405).w)
                    },
                    headerContainerCompact: {
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 12,
                        marginBlockStart: 0,
                        marginBlockEnd: 12
                    },
                    buttonGroupSpacer: {
                        height: 28
                    },
                    nameStack: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 8
                    },
                    nameStackCompact: {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexBasis: 0,
                        minWidth: 0
                    },
                    nameInputBase: {
                        fontWeight: a(699422).Wy.bold,
                        color: a(632079).Tj.text.primary,
                        lineHeight: a(314925).iU,
                        flexGrow: 1
                    },
                    titleContainer: {
                        fontSize: 24,
                        fontWeight: a(699422).Wy.bold,
                        display: "flex",
                        alignItems: "center",
                        minWidth: 0,
                        flexGrow: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }
                },
                U = { ...z.nameInputBase,
                    fontSize: 32,
                    fontWeight: q
                };

            function V(e) {
                let {
                    workflowStore: t
                } = e, {
                    workflowValue: r
                } = (0, a(867587).N)(t, !0), {
                    name: s
                } = r, {
                    disabled: o,
                    saveName: l
                } = (0, a(322160).T)({
                    workflowStore: t,
                    workflowValue: r,
                    disabled: e.disabled
                }), d = (0, n.useCallback)(e => {
                    l(e.target.value)
                }, [l]);
                return (0, i.jsxs)("div", {
                    style: { ...z.headerContainer,
                        ...z.headerContainerOverlapCover
                    },
                    children: [(0, i.jsx)(a(432349).L, {
                        workflowStore: t,
                        disabled: o
                    }), (0, i.jsx)("div", {
                        style: z.buttonGroupSpacer
                    }), (0, i.jsx)("div", {
                        style: z.nameStack,
                        children: (0, i.jsx)("div", {
                            style: U,
                            children: (0, i.jsx)(a(157982).E, {
                                placeholder: "New agent",
                                value: s,
                                onChange: d,
                                disabled: o,
                                debugName: "AgentChatHeaderName",
                                autosizeMinHeight: 32 * a(314925).iU,
                                inputClassName: a(828432).O2b
                            })
                        })
                    })]
                })
            }
            let H = {
                identityName: {
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                titleText: {
                    display: "inline",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    minWidth: 0
                },
                titleContainer: { ...z.titleContainer,
                    width: "100%",
                    display: "block"
                }
            };

            function O(e) {
                let {
                    workflowStore: t,
                    title: n
                } = e, {
                    workflowValue: r
                } = (0, a(867587).N)(t, !0), s = r.name ? ? "New agent", o = (0, a(337222).xr)(r.icon ? ? (0, a(337222).Oy)({
                    baseUrl: a(986939).A.domainBaseUrl || "",
                    shape: a(337222).WJ,
                    color: a(337222).i
                })), {
                    ref: l,
                    isTruncated: d
                } = (0, a(455659).o)([n]);
                return (0, i.jsxs)("div", {
                    style: z.headerContainer,
                    children: [(0, i.jsxs)(a(4458).fI, {
                        alignItems: "center",
                        gap: 8,
                        minWidth: 0,
                        children: [(0, i.jsx)(a(569553).B6, {
                            icon: {
                                pointer: t.pointer,
                                icon: o
                            },
                            iconRecordCategory: "workflow",
                            isEmptyPage: !1,
                            size: 16,
                            disabled: !0
                        }), (0, i.jsx)("div", {
                            style: H.identityName,
                            children: (0, i.jsx)(a(111010).D, {
                                as: "span",
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: s
                            })
                        })]
                    }), (0, i.jsx)(a(51831).m, {
                        disableTooltip: !d,
                        content: () => n,
                        children: e => (0, i.jsx)("div", {
                            ref: l,
                            style: H.titleContainer,
                            ...e,
                            children: (0, i.jsx)("div", {
                                style: H.titleText,
                                children: n
                            })
                        })
                    })]
                })
            }

            function $(e) {
                let {
                    prompt: t,
                    spaceStore: n,
                    userStore: r
                } = e;
                return "text-value" !== t.type ? [] : (0, a(432155).dd)(t.text, n, r)
            }
            let G = a(115343).l,
                Y = {
                    position: "relative",
                    minHeight: 0,
                    flex: 1,
                    pointerEvents: "auto"
                },
                X = {
                    pointerEvents: "auto",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 0,
                    maxWidth: "100%",
                    position: "relative"
                },
                Z = {
                    flex: 1
                },
                J = {
                    opacity: 1,
                    transform: "translate(-50%, -16px)",
                    pointerEvents: "auto"
                },
                Q = {
                    flex: 1,
                    minHeight: 0
                },
                ee = {
                    position: "relative"
                };

            function et(e) {
                let {
                    aiChatFeature: t,
                    clientStore: s,
                    onAutoSubmitHandlerReady: o,
                    onEsc: d,
                    onThreadChange: c,
                    parentStore: u,
                    threadStore: p,
                    threadStoreState: g = "ready",
                    transcript: m,
                    isFullPageOverride: h,
                    isFullPage: y = !0
                } = e, x = (0, a(758360).K7)(t), b = (0, a(533992).v3)(), v = (0, a(254505).k)(), {
                    isTablet: S
                } = (0, a(533992).Y0)(), w = (0, a(853284).U)(), [C, A] = (0, n.useState)(p), M = (0, a(972740).L)(), k = (0, a(682985).K8)(() => {
                    let e;
                    if (!M) return;
                    let t = null == C ? void 0 : C.getParentStore();
                    if (t) {
                        if (t && t.table === a(832375).C0E) return t.isDefined() ? t : void 0;
                        if (C) {
                            for (let t of C.getTranscript())
                                if ("config" === t.type && "workflow" === t.value.type && !0 === t.value.isCustomAgent) {
                                    e = t.value.workflowId;
                                    break
                                }
                            if (!e) {
                                var n;
                                e = null == (n = C.getData()) ? void 0 : n.workflow_id
                            }
                            if (e) return a(360851).N.createChildStore(M, {
                                table: a(832375).C0E,
                                id: e,
                                spaceId: M.id
                            })
                        }
                    }
                }, [C, M]), j = (0, a(682985).K8)(() => s.state.navigateToLoadedWorkflowStore, [s]), T = j ? ? k;
                (0, n.useEffect)(() => {
                    if (void 0 !== j) return k && k.isDefined() && k.isReady() && s.update(e => ({ ...e,
                        navigateToLoadedWorkflowStore: void 0
                    })), () => {
                        s.state.navigateToLoadedWorkflowStore === j && s.update(e => ({ ...e,
                            navigateToLoadedWorkflowStore: void 0
                        }))
                    }
                }, [k, s, j]);
                let [_, P] = (0, n.useState)(void 0), B = (0, a(682985).K8)(() => {
                    var e;
                    return (null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.started_agent_chat_thread) ? ? !1
                }, []), R = (0, a(682985).K8)(() => (0, a(604384).jp)(T), [T]), {
                    isAgentCreditUsageDisplayEnabled: W,
                    isAgentCreditRequestFlowsEnabled: L
                } = (0, a(682985).K8)(() => {
                    let e = a(218744).default.getConfig({
                        configName: "custom_agent_sub_features"
                    });
                    return {
                        isAgentCreditUsageDisplayEnabled: e.agent_credit_usage_display ? ? !1,
                        isAgentCreditRequestFlowsEnabled: e.agent_credit_request_flows ? ? !1
                    }
                }, []), F = (0, a(999524).z)({
                    spaceId: u.id,
                    workflowStore: T
                }), D = W && void 0 !== F, E = (0, a(682985).K8)(() => (null == T ? void 0 : T.canAdmin()) ? ? !1, [T]), N = (0, a(682985).K8)(() => {
                    var e;
                    if (C) return (null == (e = C.getData()) || null == (e = e.title) ? void 0 : e.trim()) || "Untitled chat"
                }, [C]), q = (0, a(352118).s)({
                    parentStore: u,
                    threadStore: void 0,
                    workflowId: null == T ? void 0 : T.id,
                    isEnabled: !!(T && u && E)
                }), z = (0, n.useMemo)(() => new(a(331460)).t(q), [q]);
                (0, n.useEffect)(() => {
                    z.updateThreadHistory(q)
                }, [z, q]), (0, n.useEffect)(() => {
                    A((0, a(540328).dr)(null == p ? void 0 : p.id) ? ? p), tr(B)
                }, [p, B]);
                let U = (0, a(682985).K8)(() => {
                        let {
                            device: e
                        } = b, t = x.aiChatType;
                        return (e.isMobileNative || e.isTablet) && ("agent" === t || "agent_full_page" === t || "custom_agent" === t || "custom_agent_activity" === t) ? (0, a(849584).y)(b, a(707785).A.state.estimatedKeyboardWebViewOverlap, a(707785).A.state.nativeBottomBarHeight) : 0
                    }, [b, x.aiChatType]),
                    H = (0, a(682985).K8)(() => s.state.showDebug, [s]),
                    et = (0, a(83208).X)("multi_agent_delegation"),
                    en = (0, n.useMemo)(() => {
                        for (let e of m)
                            if ("agent-message" === e.type && e.parentThreadUrl) return e
                    }, [m]),
                    ei = (0, n.useMemo)(() => en ? m.filter(e => e.id !== en.id) : m, [en, m]),
                    es = (0, n.useRef)(null),
                    ed = (0, n.useRef)(null),
                    ec = (0, a(729787).wY)(ed),
                    [eu, ep] = (0, n.useState)(!1),
                    eg = (0, a(682985).K8)(() => (0, a(187353).OT)(C), [C]),
                    em = (0, a(682985).K8)(() => (0, a(187353).Ft)({
                        threadStore: C,
                        clientStore: s
                    }), [C, s]);
                (0, a(480359).l)(em);
                let eh = (0, a(682985).K8)(() => !!C && C.getTranscript().some(e => "config" === e.type), [C]),
                    ef = (0, a(682985).K8)(() => !C || C.inMemoryRecordCache !== b.defaultRecordCache.inMemoryRecordCache || !!C.isReady() && C.getMessageStores().every(e => e.isReady()), [b.defaultRecordCache.inMemoryRecordCache, C]);
                ! function(e) {
                    let {
                        threadStore: t,
                        threadStoreState: r,
                        threadMessagesReady: i
                    } = e, s = (0, a(533992).v3)(), o = s.currentUser.id, l = (0, a(83208).X)("agent_combined_threads"), d = (0, a(414274).u)({
                        includeWorkflowsEffective: l,
                        includeWriterChats: !1
                    }), c = (0, n.useRef)({
                        threadStoreState: r,
                        threadMessagesReady: i
                    });
                    (0, n.useEffect)(() => {
                        c.current = {
                            threadStoreState: r,
                            threadMessagesReady: i
                        }
                    }, [r, i]);
                    let u = (0, n.useRef)(void 0),
                        p = (0, n.useCallback)(() => {
                            if (!t || !o) return;
                            if (!("visible" === document.visibilityState && document.hasFocus())) {
                                u.current = void 0;
                                return
                            }
                            let e = c.current;
                            if ("loading" === e.threadStoreState || !e.threadMessagesReady) return;
                            let n = t.id;
                            if (u.current === n) return;
                            u.current = n;
                            let r = t.getSpaceId();
                            if (!r) return;
                            let i = a(211607).O.isThreadUnread({
                                spaceId: r,
                                threadId: n
                            });
                            a(211607).O.setThreadUnread({
                                spaceId: r,
                                threadId: n,
                                isUnread: !1
                            }), i && a(968105).a.decrementForSpace(r), (0, a(549740).sd)({
                                environment: s,
                                spaceId: r,
                                threadId: n
                            }).then(e => {
                                e || a(414274).c.refresh({
                                    spaceId: r,
                                    environment: s,
                                    includeWorkflows: l,
                                    queryKey: d
                                })
                            })
                        }, [l, s, d, t, o]);
                    (0, n.useEffect)(() => {
                        p()
                    }, [p, r, i]), (0, n.useEffect)(() => (a(825244).A.addListener(p), window.addEventListener("focus", p), () => {
                        a(825244).A.removeListener(p), window.removeEventListener("focus", p)
                    }), [p])
                }({
                    threadStore: C,
                    threadStoreState: g,
                    threadMessagesReady: ef
                });
                let ey = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore),
                    ex = (0, a(83208).X)("agent_daily_brief"),
                    eb = (0, a(83208).X)("agent_plan_mode"),
                    [ev, eS] = (0, n.useState)(void 0),
                    ew = (0, a(83208).X)("agent_polish_2026") && "full_page" === x.agentChatFormFactor && !a(986939).A.isMobile && "agent_writer" !== x.aiChatType;
                (0, n.useEffect)(() => {
                    ex && C && ey && ef && !em && (async e => {
                        let t = null == (e = ey.getSettings()) || null == (e = e.agent_personalization_settings) ? void 0 : e.daily_brief_prompt,
                            {
                                getDailyBriefInfoForToday: n
                            } = await a.e(96267).then(a.bind(a, 711336)),
                            r = n(t);
                        if ((null == r ? void 0 : r.threadId) === C.id && "viewed" !== r.status) {
                            let {
                                setLatestDailyBriefThreadIdAndClicked: e
                            } = await Promise.all([a.e(67098), a.e(73199)]).then(a.bind(a, 376608));
                            e({
                                environment: b,
                                threadId: C.id
                            })
                        }
                    })()
                }, [b, ex, em, ey, ef, C]);
                let eC = (0, a(942829).u)(),
                    eI = !eg && "loading" !== g && ef,
                    eA = (0, a(682985).K8)(() => {
                        if (T && M) return (0, a(922900).getWorkflowAgentConfig)({
                            environment: b,
                            spaceId: M.id,
                            isCustomAgent: !0,
                            workflowId: T.id,
                            useCustomAgentDraft: E
                        })
                    }, [b, E, M, T]),
                    {
                        nextConfig: eM,
                        setNextConfig: ek
                    } = (0, a(891603).I)({
                        threadStore: C,
                        spaceId: null == u ? void 0 : u.id,
                        defaultConfig: eh ? void 0 : eA
                    }),
                    ej = (0, a(682985).K8)(() => {
                        var e;
                        if (!T) return;
                        let t = null == (e = T.getPublishedArtifactStore) || null == (e = e.call(T)) ? void 0 : e.getData();
                        return (0, a(16712).Z0)({
                            publishedWorkflowData: t
                        })
                    }, [T]);
                (0, n.useEffect)(() => {
                    if (!ej || "workflow" !== eM.type) return;
                    let e = void 0 !== ej.useComputer && ej.useComputer !== eM.useComputer,
                        t = void 0 !== ej.yoloMode && ej.yoloMode !== eM.yoloMode;
                    (e || t) && ek({ ...eM,
                        ...e && {
                            useComputer: ej.useComputer
                        },
                        ...t && {
                            yoloMode: ej.yoloMode
                        }
                    })
                }, [ej, eM, ek]);
                let eT = (0, a(109939).tz)(),
                    e_ = (0, n.useMemo)(() => (0, a(706968).p0)(m) || void 0 !== T, [m, T]),
                    eP = "workflow" === eM.type && !0 === eM.isCustomAgent,
                    eB = e_ || eP,
                    eR = (0, a(682985).K8)(() => {
                        if (T) return (0, a(632342).g)({
                            workflowStore: T,
                            intl: eT
                        })
                    }, [T, eT]),
                    eW = (0, a(682985).K8)(() => {
                        let e = !!(a(273061).S.state.open && a(273061).S.state.agentId && a(273061).S.state.mode),
                            t = null == ec ? void 0 : ec.width;
                        return e && (0, a(722371).O9)(t) && t < a(115343).C ? G : x.chatInputWidth
                    }, [x.chatInputWidth, null == ec ? void 0 : ec.width]),
                    {
                        scrollableRef: eL,
                        transcriptBottomRef: eF,
                        bottomSpacerHeight: eD,
                        isScrolledToTop: eE,
                        scrollToBottom: eN,
                        onWillSubmit: eK,
                        onScrollToBottomButtonClick: eq,
                        scrollToBottomButtonTabIndex: ez,
                        shouldShowScrollToBottomButton: eU
                    } = function(e) {
                        let {
                            environment: t,
                            isTablet: r,
                            nextConfigType: i,
                            runningInference: s,
                            threadId: o,
                            threadStarted: l,
                            transcript: d
                        } = e, c = (0, n.useRef)(d);
                        c.current = d;
                        let u = (0, n.useRef)(null),
                            p = (0, n.useRef)(null),
                            g = (0, n.useRef)(!1),
                            m = (0, n.useRef)(void 0),
                            h = (0, n.useRef)(void 0),
                            f = (0, n.useRef)(void 0),
                            y = (0, n.useRef)(void 0),
                            x = (0, n.useRef)(void 0),
                            b = (0, n.useRef)(!1),
                            v = (0, n.useRef)(void 0),
                            S = (0, n.useRef)(void 0),
                            w = (0, n.useRef)(void 0),
                            [C, I] = (0, n.useState)(!1),
                            [A, M] = (0, n.useState)(!0),
                            [k, j] = (0, n.useState)(0),
                            T = (0, n.useRef)(!1),
                            _ = (0, n.useCallback)(() => {
                                (0, a(471e3).I)({
                                    environment: t
                                })
                            }, [t]),
                            P = !s && (0, a(850563).G1)(d),
                            B = (0, n.useCallback)((e = "smooth") => {
                                let n = u.current;
                                if (!n) return;
                                let r = p.current;
                                if (!r) return;
                                let i = n.getBoundingClientRect(),
                                    s = r.getBoundingClientRect().bottom - i.bottom,
                                    o = Math.max(0, n.scrollTop + s + 12);
                                (0, a(661767).V)({
                                    element: n,
                                    environment: t,
                                    options: {
                                        top: o,
                                        behavior: e
                                    }
                                })
                            }, [t]),
                            {
                                checkScrollPosition: R
                            } = function({
                                scrollableRef: e,
                                enabled: t,
                                scrollToBottom: r,
                                dismissKeyboard: i
                            }) {
                                let s = (0, n.useRef)(0),
                                    o = (0, n.useRef)(0),
                                    l = (0, n.useRef)(0),
                                    d = (0, n.useRef)(0),
                                    c = (0, n.useRef)(!1),
                                    u = (0, n.useCallback)(() => {
                                        let n = e.current;
                                        if (!n) return;
                                        let r = n.scrollTop,
                                            u = performance.now(),
                                            p = u - l.current,
                                            g = r - s.current,
                                            m = p > 10 && Math.abs(g) > 0 ? Math.abs(g) / p : 0;
                                        if (o.current = m, t && g < 0 && ((0, a(81422).W)(n) ? ? 0) > 0) {
                                            let e = Math.abs(g);
                                            u - d.current > 1e3 && (m > 1 && r <= 50 && e > 20 || m > 2 && e > 50) && (d.current = u, c.current = !0, i())
                                        }
                                        s.current = r, l.current = u
                                    }, [t, i, e]),
                                    p = (0, a(682985).K8)(() => a(707785).A.state.phase, []);
                                return (0, n.useEffect)(() => {
                                    if (t)
                                        if (p === a(707785).i.shown) {
                                            if (c.current) {
                                                c.current = !1;
                                                return
                                            }
                                            setTimeout(() => {
                                                let t = e.current;
                                                t && r(t.scrollHeight - t.scrollTop - t.clientHeight > 500 ? "instant" : "smooth")
                                            }, 400)
                                        } else(p === a(707785).i.hidden || p === a(707785).i.willHide) && setTimeout(() => {
                                            let t = e.current;
                                            if (t)
                                                if (t.scrollHeight - t.scrollTop - t.clientHeight < 100) r("instant");
                                                else {
                                                    let e = Math.max(0, t.scrollHeight - t.clientHeight);
                                                    t.scrollTop > e && r("instant")
                                                }
                                        }, 200)
                                }, [p, r, t, e]), (0, n.useEffect)(() => {
                                    if (!t) return;
                                    let a = () => {
                                        let t = e.current;
                                        !t || t.scrollTop < 500 && setTimeout(() => {
                                            r("instant")
                                        }, 100)
                                    };
                                    return window.addEventListener("resize", a), () => window.removeEventListener("resize", a)
                                }, [r, t, e]), (0, n.useEffect)(() => {
                                    0 === l.current && (l.current = performance.now())
                                }, []), {
                                    checkScrollPosition: u
                                }
                            }({
                                scrollableRef: u,
                                enabled: !0 === a(986939).A.isMobile && !r,
                                scrollToBottom: B,
                                dismissKeyboard: _
                            }),
                            W = (0, n.useCallback)(() => {
                                let e = u.current;
                                if (!e) return;
                                let t = e.scrollTop,
                                    a = p.current,
                                    n = (() => {
                                        if (!a) return !0;
                                        let t = e.getBoundingClientRect();
                                        return a.getBoundingClientRect().bottom - t.bottom <= 50
                                    })();
                                I(0 === t), M(n), R()
                            }, [R]),
                            L = (0, n.useCallback)(() => {
                                let e = u.current;
                                if (!e) return;
                                let t = p.current;
                                if (!t || !T.current) return void j(0);
                                let a = (() => {
                                    let t = y.current,
                                        a = x.current;
                                    if (t && t.isConnected && (!a || t.getAttribute("data-agent-chat-user-step-id") === a)) return t;
                                    if (a) {
                                        let t = e.querySelector(`[data-agent-chat-user-step-id="${a}"]`);
                                        if (t instanceof HTMLElement) return y.current = t, t
                                    }
                                    let n = e.querySelectorAll("[data-agent-chat-user-step-id]"),
                                        r = n.item(n.length - 1);
                                    return r && (y.current = r, x.current = r.getAttribute("data-agent-chat-user-step-id") ? ? void 0), r ? ? void 0
                                })();
                                if (!a) return void j(0);
                                let n = e.getBoundingClientRect(),
                                    r = a.getBoundingClientRect(),
                                    i = t.getBoundingClientRect(),
                                    s = e.scrollTop + (r.top - n.top),
                                    o = Math.max(0, e.scrollTop + (i.bottom - n.top) - s),
                                    l = Math.round(Math.max(0, e.clientHeight - 32 - o));
                                j(e => e === l ? e : l)
                            }, []);
                        (0, n.useEffect)(() => {
                            let e, t = u.current,
                                a = p.current;
                            if (!t || !a) return;
                            let n = a.parentElement;
                            if (!n) return;
                            let r = () => {
                                void 0 === e && (e = requestAnimationFrame(() => {
                                    e = void 0, L()
                                }))
                            };
                            r();
                            let i = new ResizeObserver(r);
                            return i.observe(t), i.observe(n), () => {
                                i.disconnect(), void 0 !== e && cancelAnimationFrame(e)
                            }
                        }, [o, L]), (0, n.useEffect)(() => {
                            let e = u.current;
                            if (!e) {
                                I(!0), M(!0);
                                return
                            }
                            if (m.current = void 0, g.current) {
                                g.current = !1, m.current = o, e.scrollTop = 0, requestAnimationFrame(() => W());
                                return
                            }
                            if (T.current = !1, "search" === i) {
                                e.scrollTop = 0, requestAnimationFrame(() => W());
                                return
                            }
                            requestAnimationFrame(() => {
                                B("instant"), W()
                            })
                        }, [W, i, B, o]), (0, n.useEffect)(() => {
                            if (!o || g.current || "search" === i || m.current === o || 0 === d.length) return;
                            let e = u.current,
                                t = p.current;
                            e && t && requestAnimationFrame(() => {
                                let e = u.current,
                                    t = p.current;
                                e && t && (B("instant"), m.current = o, W())
                            })
                        }, [W, i, B, o, d.length]), (0, n.useEffect)(() => {
                            if (!P) return;
                            let e = u.current;
                            e && (e.scrollTop = 0, requestAnimationFrame(() => W()))
                        }, [W, P]), (0, n.useEffect)(() => {
                            let e, n, r, i = u.current;
                            if (!i) return;
                            let s = e => {
                                if (!(e instanceof Element)) return;
                                if (e instanceof HTMLElement && e.hasAttribute("data-agent-chat-user-step-id")) return e;
                                let t = e.querySelector("[data-agent-chat-user-step-id]");
                                return t instanceof HTMLElement ? t : void 0
                            };
                            i.addEventListener("scroll", W), r = (null == (n = (e = i.querySelectorAll("[data-agent-chat-user-step-id]")).item(e.length - 1)) ? void 0 : n.getAttribute("data-agent-chat-user-step-id")) ? ? void 0, h.current = o, f.current = r, y.current = n ? ? void 0, x.current = r;
                            let l = new MutationObserver(e => {
                                let n, r;
                                for (let t of e)
                                    if ("childList" === t.type)
                                        for (let e of Array.from(t.addedNodes)) {
                                            let t = s(e),
                                                a = (null == t ? void 0 : t.getAttribute("data-agent-chat-user-step-id")) ? ? void 0;
                                            t && a && (n = t, r = a)
                                        }
                                if (n && r) {
                                    let e = c.current.findLast(e => e.id === r);
                                    (null == e ? void 0 : e.type) === "user-injected" && (T.current = !0), y.current = n, x.current = r, L(), v.current = n, S.current = r, b.current || (b.current = !0, requestAnimationFrame(() => {
                                        b.current = !1;
                                        let e = u.current;
                                        if (!e) return;
                                        let n = v.current ? ? void 0,
                                            r = S.current ? ? void 0;
                                        if (v.current = void 0, S.current = void 0, !n || !r) return;
                                        if (h.current !== o) {
                                            h.current = o, f.current = r;
                                            return
                                        }
                                        let s = f.current;
                                        if (s === r || (f.current = r, !s)) return;
                                        let l = e.getBoundingClientRect(),
                                            d = n.getBoundingClientRect();
                                        (e => {
                                            void 0 !== w.current && (cancelAnimationFrame(w.current), w.current = void 0);
                                            let n = Math.max(0, Math.min(e, i.scrollHeight - i.clientHeight));
                                            if (a(986939).A.isMobile || t.device.isSafari) {
                                                i.scrollTop = n, requestAnimationFrame(() => W());
                                                return
                                            }
                                            let r = i.scrollTop,
                                                s = n - r;
                                            if (1 > Math.abs(s)) return requestAnimationFrame(() => W());
                                            let o = performance.now(),
                                                l = e => {
                                                    let t = Math.min(1, (e - o) / 150);
                                                    i.scrollTop = r + s * (1 - Math.pow(1 - t, 3)), t < 1 ? w.current = requestAnimationFrame(l) : (w.current = void 0, requestAnimationFrame(() => W()))
                                                };
                                            w.current = requestAnimationFrame(l)
                                        })(e.scrollTop + (d.top - (l.top + 32)))
                                    }))
                                }
                                setTimeout(W, 100)
                            });
                            return l.observe(i, {
                                childList: !0,
                                subtree: !0
                            }), setTimeout(W, 100), () => {
                                i.removeEventListener("scroll", W), l.disconnect(), void 0 !== w.current && (cancelAnimationFrame(w.current), w.current = void 0)
                            }
                        }, [W, t.device.isSafari, o, L]), (0, n.useEffect)(() => {
                            requestAnimationFrame(() => W())
                        }, [W, s]);
                        let F = (0, n.useCallback)(() => {
                                l || (g.current = !0), T.current = !0
                            }, [l]),
                            D = !A && !s;
                        return {
                            isScrolledToBottom: A,
                            isScrolledToTop: C,
                            onScrollToBottomButtonClick: (0, n.useCallback)(() => {
                                B("smooth")
                            }, [B]),
                            onWillSubmit: F,
                            scrollToBottom: B,
                            scrollToBottomButtonTabIndex: D ? 0 : -1,
                            shouldShowScrollToBottomButton: D,
                            scrollableRef: u,
                            bottomSpacerHeight: k,
                            transcriptBottomRef: p
                        }
                    }({
                        environment: b,
                        isTablet: S,
                        nextConfigType: eM.type,
                        runningInference: em,
                        threadId: null == C ? void 0 : C.id,
                        threadStarted: eg,
                        transcript: m
                    }),
                    eV = (0, a(960253).e)(),
                    eH = (0, a(960253).I)(() => {
                        let e = (0, a(382885).o)({
                                gradientMaskHeight: 32,
                                isScrolledToTop: eE
                            }),
                            t = "full_page" === x.agentChatFormFactor ? ew ? 52 : 24 : 16,
                            n = x.chatInputPadding;
                        return {
                            chatContainer: {
                                flex: 1,
                                position: "relative",
                                scrollbarGutter: "stable",
                                overflowY: "auto",
                                ...e
                            },
                            contentContainer: {
                                margin: "0 auto",
                                width: "100%",
                                maxWidth: ew && "number" == typeof eW ? eW + 56 : eW,
                                paddingTop: 16,
                                paddingInlineEnd: t,
                                paddingBottom: 0,
                                paddingInlineStart: t,
                                marginInlineStart: "auto",
                                transition: `max-width ${a(654979).k.duration}ms ${a(654979).k.timingFunction}`
                            },
                            emptyContainer: {
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                paddingBottom: x.emptyContainerBottomPadding
                            },
                            inputWrapper: {
                                flex: "0 0 auto",
                                position: "relative",
                                backgroundColor: x.hasAgentBackground && !w ? a(632079).Tj.background.primary : void 0,
                                padding: x.chatInputContainerPadding
                            },
                            scrollToBottomButton: {
                                position: "absolute",
                                insetInlineStart: "50%",
                                bottom: "100%",
                                transform: "translate(-50%, -8px)",
                                zIndex: 2,
                                padding: 6,
                                borderRadius: 20,
                                backgroundColor: "dark" === eV ? "#fff" : "#000",
                                border: "none",
                                cursor: "pointer",
                                fontWeight: a(699422).Wy.medium,
                                boxShadow: "dark" === eV ? `0px 0px 0px 0.5px ${a(632079).Tj.border.primary}, 0px 1px 2px 0px rgba(0, 0, 0, 0.12), 0px 4px 16px -2px rgba(0, 0, 0, 0.6)` : `0px 0px 0px 0.5px ${a(632079).Tj.border.primary}, 0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 4px 16px -2px rgba(0, 0, 0, 0.1)`,
                                transition: "opacity 150ms ease-out, transform 150ms ease-out",
                                opacity: 0,
                                pointerEvents: "none"
                            },
                            inputContainer: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 8,
                                margin: "0 auto",
                                width: "100%",
                                maxWidth: eW,
                                padding: n,
                                marginInlineStart: "auto",
                                flex: "0 0 auto",
                                paddingBottom: U,
                                transition: `max-width ${a(654979).k.duration}ms ${a(654979).k.timingFunction}`
                            },
                            chevronDownIcon: {
                                fill: "dark" === eV ? "#000" : a(632079).Tj.white,
                                transform: "translateY(1px)"
                            }
                        }
                    }, [x.hasAgentBackground, x.chatInputContainerPadding, x.chatInputPadding, x.emptyContainerBottomPadding, x.agentChatFormFactor, U, eE, w, eW, ew, eV]),
                    eO = !!T,
                    {
                        shouldBlockChat: e$,
                        isLoading: eG,
                        resources: eY
                    } = (0, a(730236).r)({
                        environment: b,
                        workflowStore: T,
                        isCustomAgent: eB,
                        spaceStore: M
                    }),
                    eX = (0, n.useMemo)(() => {
                        if (eB || !m) return !1;
                        if ((0, a(60123).L)(m)) return !0;
                        let e = b.currentUser.id,
                            t = new Set;
                        for (let e of m) "user" === e.type && e.userId && t.add(e.userId);
                        return !!e && t.size > 0 && !t.has(e)
                    }, [eB, m, b.currentUser.id]),
                    eZ = (0, n.useCallback)(e => {
                        es.current = e
                    }, []),
                    eJ = (0, a(682985).K8)(() => {
                        let e = a(562733).zI.state;
                        if ("open" === e.chatPanelVisibility) return e.chatPanelMode
                    }, []);
                (0, n.useEffect)(() => {
                    eJ && eN("instant")
                }, [eJ, eN]);
                let eQ = (0, n.useCallback)(() => {
                        eN("smooth")
                    }, [eN]),
                    e0 = (0, a(682985).O$)(a(728372).AppStoreMainEditorCurrentBlockStore),
                    e1 = (0, a(682985).O$)(a(475097).default.peekTargetStore),
                    e2 = (0, a(534268).q)({
                        threadStore: C,
                        clientAiChatStore: s,
                        aiChatFeatureController: x,
                        config: eM
                    });
                (0, a(765743).n)({
                    environment: b,
                    clientStore: s
                });
                let e9 = (0, a(682985).O$)(a(674880).defaultInferenceContextStore),
                    e8 = (0, a(558208).AD)(),
                    e5 = (0, a(973567).N)({
                        threadStore: p,
                        spaceId: u.id
                    }),
                    e4 = (0, a(682985).K8)(() => (0, a(708929).vE)([e0, e1].filter(a(722371).O9)), [e0, e1]),
                    {
                        handleChatSubmissionError: e3
                    } = (0, a(186320).yG)({}),
                    e6 = (0, n.useCallback)(e => {
                        let t, {
                            prompt: n,
                            config: r,
                            contextStepSurfaceOverride: i,
                            checklistId: o,
                            checklistStepId: l
                        } = e;
                        try {
                            let e = function(e) {
                                let {
                                    prompt: t
                                } = e, n = t.type;
                                return "string" === n ? {
                                    suggestedPrompt: {
                                        promptKey: "string_prompt",
                                        promptDescription: t.text
                                    }
                                } : "text-value" === n ? void 0 !== t.text ? {
                                    suggestedPrompt: {
                                        promptKey: "text_value_prompt",
                                        promptDescription: (0, a(247438).q4_)(t.text)
                                    }
                                } : void 0 : "prebuilt-prompt" === n ? {
                                    suggestedPrompt: {
                                        promptKey: t.promptType,
                                        promptDescription: t.text
                                    }
                                } : void(0, a(722371).HB)(n)
                            }({
                                prompt: n
                            });
                            if ("prebuilt-prompt" === n.type && x.supportsClearSelectionOnSubmit && (0, a(471e3).I)({
                                    environment: b
                                }), s.setState({ ...s.state,
                                    userSelectedConfig: !0
                                }), !e9) throw Error("No inference context");
                            let {
                                spaceStore: d,
                                userStore: p
                            } = e9;
                            if (!u) throw Error("No parent store");
                            e4 && a(307594).DL({
                                pageStore: e4,
                                environment: b,
                                triggeredFrom: "agent"
                            }), (0, a(745015).Z)(b, u.id);
                            let g = el({
                                environment: b,
                                spaceStore: d,
                                userStore: p,
                                prompt: n,
                                intl: eT
                            });
                            if (!g) return;
                            let m = null == C ? void 0 : C.getTranscript().findLast(e => "context" === e.type),
                                h = e8.getOrCreateThreadId({
                                    environment: b,
                                    spaceId: d.id,
                                    maybeThreadStore: C
                                }),
                                f = [],
                                y = s.getOrCreateClientAIChatThreadStore(h),
                                v = [...new(a(227318)).d([...y.getStagedMentionPointers(), ...$({
                                    prompt: n,
                                    spaceStore: d,
                                    userStore: p
                                })])],
                                S = (0, a(674880).BX)({
                                    environment: b,
                                    spaceId: d.id,
                                    pointers: v
                                });
                            S && f.push(S);
                            let w = null == y ? void 0 : y.getAndClearStagedAssistantAttachmentSteps();
                            if (w && f.push(...w), !C || (0, a(187353).av)(C)) {
                                let n = (0, a(674880).Xd)({
                                    environment: b,
                                    inferenceContext: e9,
                                    config: r,
                                    addSteps: [...f, g],
                                    surface: i ? ? x.contextStepSurface,
                                    ..."onboarding_checklist" === i ? {
                                        checklistId: o,
                                        checklistStepId: l
                                    } : {}
                                });
                                if (C) {
                                    let t = (0, a(455764).T)({
                                        environment: b,
                                        clientStore: s,
                                        spaceStore: d,
                                        userStore: p,
                                        threadStore: C,
                                        addSteps: n,
                                        waitForServerCommit: !0,
                                        sendPartialTranscript: !0,
                                        temporaryAiThreadManager: e8,
                                        analyticsArgs: e
                                    });
                                    c({
                                        newThreadStore: t
                                    })
                                } else t = (0, a(225900).N)({
                                    environment: b,
                                    spaceStore: d,
                                    transcript: n
                                }), c({
                                    newThreadStore: t
                                });
                                _ && _.length > 0 && (y.updateMentionedStagedData(ea({
                                    inputMentionPointers: _,
                                    stagedMentionPointers: v
                                })), P([]))
                            } else {
                                let t, n = (t = C.getTranscript(), (0, a(850563).py)({
                                    transcript: t
                                }));
                                (0, a(743624).K)({
                                    existingWorkflowConfig: n,
                                    nextConfig: r
                                }) || (0, a(757688).kh)({
                                    threadStore: C,
                                    config: r,
                                    environment: b
                                });
                                let c = [],
                                    u = (0, a(674880).i6)({
                                        existingTranscript: C.getTranscript(),
                                        environment: b,
                                        spaceStore: d,
                                        config: r
                                    });
                                u && c.push(u);
                                let h = (null == m ? void 0 : m.value.collectionViewBlockId) ? ? (null == m ? void 0 : m.value.blockId),
                                    f = null == m ? void 0 : m.value.peekBlockId;
                                ("onboarding_checklist" === i || h !== (null == e0 ? void 0 : e0.id) || f !== (null == e1 ? void 0 : e1.id)) && c.push((0, a(674880).WM)({
                                    environment: b,
                                    inferenceContext: e9,
                                    surface: i ? ? x.contextStepSurface,
                                    config: r,
                                    ..."onboarding_checklist" === i ? {
                                        checklistId: o,
                                        checklistStepId: l
                                    } : {}
                                })), w && c.push(...w), S && c.push(S);
                                let I = (0, a(743624).d)({
                                    environment: b,
                                    spaceStore: d,
                                    existingWorkflowConfig: n,
                                    nextConfig: r
                                });
                                I && c.push(I), c.push(g), (0, a(455764).T)({
                                    environment: b,
                                    clientStore: s,
                                    spaceStore: d,
                                    userStore: p,
                                    threadStore: C,
                                    addSteps: c,
                                    waitForServerCommit: !0,
                                    sendPartialTranscript: !0,
                                    temporaryAiThreadManager: e8,
                                    analyticsArgs: e
                                }), _ && _.length > 0 && (y.updateMentionedStagedData(ea({
                                    inputMentionPointers: _,
                                    stagedMentionPointers: v
                                })), P([]))
                            }
                            return t
                        } catch (e) {
                            e3(e, "AgentChatView.handlePromptSubmit", {
                                threadExists: !!C,
                                spaceId: null == u ? void 0 : u.id,
                                configType: r.type
                            })
                        }
                    }, [s, e9, u, e4, b, e8, C, eT, x.contextStepSurface, _, c, null == e0 ? void 0 : e0.id, null == e1 ? void 0 : e1.id, e3, x.supportsClearSelectionOnSubmit]),
                    e7 = (0, a(682985).K8)(() => (0, a(909212).Ke)(), []);
                (0, n.useEffect)(() => {
                    o && o(async e => {
                        es.current && await es.current({
                            prompt: (0, a(247438).x9d)(e),
                            config: eM
                        })
                    })
                }, [o, eM]);
                let te = (0, n.useCallback)(async (e, t, n, r) => {
                        let i = null == M ? void 0 : M.id,
                            s = eM;
                        if ("daily_brief_reminder" === n && i) {
                            let {
                                getDailyBriefAgentConfig: e
                            } = await a.e(64865).then(a.bind(a, 657835));
                            s = await e({
                                environment: b,
                                spaceId: i
                            })
                        }
                        let o = e6({
                            prompt: e,
                            config: s,
                            actionCardId: "text-value" === e.type ? (0, a(247438).q4_)(e.text ? ? []) : e.text,
                            prebuiltPromptType: "prebuilt-prompt" === e.type ? e.promptType : void 0,
                            contextStepSurfaceOverride: n,
                            checklistId: null == r ? void 0 : r.checklistId,
                            checklistStepId: null == r ? void 0 : r.checklistStepId
                        });
                        o && await (null == t ? void 0 : t(o));
                        try {
                            let t = "workflow" === eM.type ? eM.model : void 0;
                            a(305721).trackPillsClicked({
                                prompt: e,
                                model: t,
                                aiModule: "ai_module" === x.contextStepSurface,
                                inferenceInfo: e5,
                                blockStore: e0
                            })
                        } catch (e) {}
                    }, [e6, eM, b, x.contextStepSurface, e5, e0, null == M ? void 0 : M.id]),
                    tt = (0, n.useCallback)(async (e, t) => {
                        var n;
                        if ((null == t || null == (n = t.metadata) ? void 0 : n.variant) !== "custom_agent_setup") return void await te({
                            type: "string",
                            text: e
                        });
                        let r = "create_custom_agent_from_follow_up",
                            i = (0, a(599412).H)(eT),
                            s = "workflow" === eM.type,
                            o = {
                                type: r,
                                isCustomAgent: s ? eM.isCustomAgent : void 0,
                                enableScriptAgent: s ? eM.enableScriptAgent : void 0,
                                enableQueryMail: s ? eM.enableQueryMail : void 0,
                                enableQueryCalendar: s ? eM.enableQueryCalendar : void 0
                            };
                        await te({
                            type: "prebuilt-prompt",
                            text: e,
                            promptType: r,
                            locale: i,
                            args: o
                        })
                    }, [te, eT, eM]),
                    ta = (0, n.useCallback)(() => {
                        ep(!0)
                    }, []),
                    [tn, tr] = (0, n.useState)(B);
                (0, n.useEffect)(() => {
                    let e = a(728372).AppStoreCurrentUserSettingsStore.state;
                    e && !B && eg && (0, a(377796).createAndCommit)({
                        environment: b,
                        cellTarget: "main",
                        userAction: "AgentChatView.setStartedAgentChatThread",
                        canUndo: !1,
                        perform: t => {
                            (0, a(173157).z)({
                                store: e,
                                data: {
                                    settings: { ...e.getSettings(),
                                        started_agent_chat_thread: !0
                                    }
                                },
                                transaction: t
                            })
                        }
                    })
                }), (0, n.useEffect)(() => {
                    let e = null == C ? void 0 : C.id;
                    x.recordLastOpenState && eg && e && !eB && (0, a(733177).f)(e)
                }, [eg, null == C ? void 0 : C.id, x.recordLastOpenState, eB]);
                let ti = (0, n.useCallback)(() => tr(!0), []),
                    ts = "loading" !== g,
                    to = function() {
                        let e = (0, a(109939).tz)(),
                            t = (0, a(682985).K8)(() => (0, a(745452).p)().intent, []),
                            n = "create",
                            i = (0, a(682985).K8)(() => a(968456)._.getShouldRenderTextPrompt(), []),
                            s = (0, a(682985).K8)(() => a(576218).Y.getShouldRenderTextPrompt(), []),
                            o = (0, a(682985).K8)(() => a(968456)._.getIsNewUserHomeExperimentActive() || a(968456)._.getIsStudentHomeActive(), []),
                            l = (0, a(682985).K8)(() => (function(e) {
                                let {
                                    intl: t,
                                    intent: n,
                                    spaceJoinOrCreate: i,
                                    shouldRenderTextPromptForJoinerV2Experiment: s
                                } = e;
                                if ("create" === i && !s) switch (n) {
                                    case "personal":
                                    default:
                                        return (0, a(247438).x9d)(t.formatMessage(r.personalIntentPrompt));
                                    case "team":
                                        return (0, a(247438).x9d)(t.formatMessage(r.teamIntentPrompt));
                                    case "school":
                                        return (0, a(247438).x9d)(t.formatMessage(r.schoolIntentPrompt))
                                }
                                return (0, a(247438).x9d)(t.formatMessage(r.joinerPrompt))
                            })({
                                intl: e,
                                intent: t,
                                spaceJoinOrCreate: n,
                                shouldRenderTextPromptForJoinerV2Experiment: s
                            }), [e, t, n, s]),
                            d = (0, a(430937).AI)({
                                initialValue: l
                            }),
                            c = (0, a(942829).u)(),
                            u = i || s;
                        if (c && u && !o) return d
                    }();
                return (0, i.jsx)(a(765846).Wd, {
                    isFullPage: h ? ? ("agent_full_page" === x.aiChatType || "full_page" === x.aiChatType || "ai_module" === x.aiChatType || "custom_agent" === x.aiChatType || "custom_agent_activity" === x.aiChatType),
                    children: (0, i.jsx)(a(203066).N, {
                        mode: "popLayout",
                        children: (0, i.jsxs)(a(4458).VP, {
                            className: "autolayout-col autolayout-fill-width",
                            style: {
                                position: "relative",
                                ...Q,
                                ...x.chatViewMinWidth && {
                                    minWidth: x.chatViewMinWidth
                                }
                            },
                            children: [x.supportsChatHeader ? (0, i.jsx)(er, {
                                aiChatFeatureController: x,
                                threadStore: C,
                                workflowStore: T,
                                clientStore: s,
                                onThreadChange: c,
                                parentStore: u,
                                threadStoreState: g,
                                config: eM,
                                hideThreadPicker: e.hideThreadPicker,
                                hideActions: e.hideActions,
                                hideAgentName: e.hideAgentName,
                                shouldShowEmptyState: eI
                            }) : void 0, (0, i.jsxs)(a(4458).fI, {
                                style: Y,
                                className: "autolayout-row",
                                alignSelf: "stretch",
                                children: [x.supportsCollapsiblePanel && e7 ? (0, i.jsx)(a(650089).z, {
                                    config: H ? {
                                        mode: "resizable",
                                        min: 300,
                                        max: 900,
                                        defaultSize: 515,
                                        userOverride: void 0
                                    } : {
                                        mode: "closed"
                                    },
                                    anchorToSide: "left",
                                    children: (0, i.jsx)(a(301704).m, {
                                        clientStore: s,
                                        threadStore: C
                                    })
                                }) : null, (0, i.jsxs)("div", {
                                    style: X,
                                    ref: ed,
                                    onClickCapture: v,
                                    children: [(0, i.jsx)("div", {
                                        style: eH.chatContainer,
                                        ref: eL,
                                        children: (0, i.jsx)(a(337336).K, {
                                            from: "AgentChatView",
                                            fallback: ({
                                                error: e,
                                                errorId: t
                                            }) => (0, i.jsx)(a(789682).LargeSurfaceRenderError, {
                                                error: e,
                                                errorId: t
                                            }),
                                            children: e$ ? (0, i.jsx)("div", {
                                                style: eH.contentContainer,
                                                children: (0, i.jsx)(a(37402).i, {
                                                    resources: eY,
                                                    isLoading: eG
                                                })
                                            }) : eI ? (0, i.jsxs)(i.Fragment, {
                                                children: [eO && T ? (0, i.jsxs)(i.Fragment, {
                                                    children: [y ? (0, i.jsx)(a(104808).g, {
                                                        workflowStore: T,
                                                        disabled: !0
                                                    }) : null, (0, i.jsx)("div", {
                                                        style: eH.contentContainer,
                                                        children: y || void 0 === N ? (0, i.jsx)(V, {
                                                            workflowStore: T,
                                                            disabled: R
                                                        }) : (0, i.jsx)(O, {
                                                            workflowStore: T,
                                                            disabled: R,
                                                            title: N
                                                        })
                                                    })]
                                                }) : null, (0, i.jsxs)("div", {
                                                    style: eH.emptyContainer,
                                                    children: [(0, i.jsx)("div", {
                                                        style: Z
                                                    }), (0, i.jsx)(f, {
                                                        aiChatFeatureController: x,
                                                        startedAgentChatThread: B,
                                                        onWelcomeAnimationsComplete: ti
                                                    }), x.shouldShowSuggestedActions && "above" === x.agentSuggestedActionsPlacementRelativeToChat && !eC ? (0, i.jsx)(I, {
                                                        loadAttachmentData: e2,
                                                        handlePromptSubmit: te,
                                                        readyToAnimate: tn,
                                                        disableAnimation: B,
                                                        variant: x.agentSuggestedActionsDisplay,
                                                        aiChatFeatureController: x,
                                                        inferenceInfo: e5
                                                    }) : null]
                                                })]
                                            }) : ts ? (0, i.jsxs)(i.Fragment, {
                                                children: [eO && T && y ? (0, i.jsx)(a(104808).g, {
                                                    workflowStore: T,
                                                    disabled: !0
                                                }) : null, (0, i.jsxs)("div", {
                                                    style: eH.contentContainer,
                                                    children: [eO && T ? y || void 0 === N ? (0, i.jsx)(V, {
                                                        workflowStore: T,
                                                        disabled: R
                                                    }) : (0, i.jsx)(O, {
                                                        workflowStore: T,
                                                        disabled: R,
                                                        title: N
                                                    }) : null, en && C ? et ? (0, i.jsx)(l, {
                                                        threadStore: C,
                                                        callerMessageStep: en
                                                    }) : (0, i.jsx)(a(258416).a, {
                                                        threadStore: C,
                                                        callerMessageStep: en
                                                    }) : null, C ? (0, i.jsx)(a(4458).VP, {
                                                        marginBottom: 16,
                                                        gap: 8,
                                                        children: (0, i.jsx)(a(111010).D, {
                                                            styleKey: "bodyRegular",
                                                            children: (0, i.jsxs)(a(865494).kW, {
                                                                threadStore: e.threadStore,
                                                                children: [(0, i.jsx)(a(390184).Z, {
                                                                    transcript: ei || [],
                                                                    spaceStore: u,
                                                                    threadStore: C,
                                                                    clientStore: s,
                                                                    configType: eM.type,
                                                                    isCustomAgent: eB,
                                                                    runningInference: em,
                                                                    showDebugOverride: H,
                                                                    aiChatFeatureController: x,
                                                                    showAttribution: eX,
                                                                    onFollowUpSelect: tt,
                                                                    isMultiAgentDelegationEnabled: et
                                                                }), (0, i.jsx)("div", {
                                                                    ref: eF
                                                                }), eD > 0 ? (0, i.jsx)("div", {
                                                                    style: {
                                                                        height: eD,
                                                                        flexShrink: 0
                                                                    }
                                                                }) : null]
                                                            })
                                                        })
                                                    }) : void 0]
                                                })]
                                            }) : (0, i.jsx)(a(4458).VP, {
                                                className: "autolayout-col autolayout-fill-width autolayout-fill-height",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                style: ee,
                                                children: (0, i.jsx)(a(517334).k, {})
                                            })
                                        })
                                    }), e$ ? null : (0, i.jsxs)("div", {
                                        style: eH.inputWrapper,
                                        children: [R ? (0, i.jsx)("div", {
                                            style: eH.inputContainer,
                                            children: (0, i.jsx)(a(533141).t, {})
                                        }) : D ? (0, i.jsx)("div", {
                                            style: eH.inputContainer,
                                            children: "workspaceSpendLimit" === F.type ? (0, i.jsx)(a(148249).Q, {
                                                spaceStore: u,
                                                featureAvailability: F.featureAvailability
                                            }) : (0, i.jsx)(a(397171).z, {
                                                reason: F.type,
                                                cta: L ? {
                                                    label: (0, i.jsx)(a(109939).sA, { ...a(611051).S.requestMoreCreditsLabel
                                                    }),
                                                    onClick: () => void 0
                                                } : void 0
                                            })
                                        }) : void 0, R || D ? void 0 : (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)("button", {
                                                onClick: eq,
                                                tabIndex: ez,
                                                style: { ...eH.scrollToBottomButton,
                                                    ...eU && J
                                                },
                                                children: (0, i.jsx)(a(16275).I, {
                                                    icon: a(36663).arrowChevronSingleDownFillIcon,
                                                    style: eH.chevronDownIcon
                                                })
                                            }), (0, i.jsxs)("div", {
                                                style: eH.inputContainer,
                                                children: [eC ? null : (0, i.jsxs)(i.Fragment, {
                                                    children: [(0, i.jsx)(a(657775).Xg, {
                                                        isCustomAgent: eB
                                                    }), (0, i.jsx)(a(693712).q, {
                                                        clientStore: s,
                                                        threadStore: C,
                                                        userStore: void 0
                                                    })]
                                                }), T && u && u.table === a(832375).NXh && !eC ? (0, i.jsx)(a(505213).D, {
                                                    section: "chat",
                                                    spaceStore: u,
                                                    workflowStore: T
                                                }) : null, eb ? (0, i.jsx)(K, {
                                                    threadStore: C,
                                                    runningInference: em,
                                                    pendingPlanModeStep: ev
                                                }) : null, (0, i.jsx)(a(163731).UnifiedChatInputProvider, {
                                                    aiChatFeatureController: x,
                                                    clientStore: s,
                                                    threadStore: C,
                                                    onEsc: d,
                                                    onThreadChange: c,
                                                    nextConfig: eM,
                                                    setNextConfig: ek,
                                                    placeholder: eR,
                                                    onLoaded: ta,
                                                    onWillSubmit: eK,
                                                    onSubmitHandlerReady: eZ,
                                                    mockTextStoreWithSetter: to,
                                                    pendingPlanModeStep: ev,
                                                    onSetPendingPlanModeStep: eS,
                                                    onSurveyActive: eQ
                                                }), eu || "ai_module" !== x.aiChatType ? null : (0, i.jsx)(eo, {
                                                    contentWidth: "number" == typeof x.chatInputWidth ? x.chatInputWidth : 600
                                                })]
                                            })]
                                        })]
                                    }), e$ || !x.shouldShowSuggestedActions || "below" !== x.agentSuggestedActionsPlacementRelativeToChat || eC ? null : (0, i.jsx)(I, {
                                        loadAttachmentData: e2,
                                        handlePromptSubmit: te,
                                        readyToAnimate: tn,
                                        disableAnimation: B,
                                        variant: x.agentSuggestedActionsDisplay,
                                        aiChatFeatureController: x,
                                        chatLoaded: eu,
                                        inferenceInfo: e5
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }

            function ea({
                inputMentionPointers: e,
                stagedMentionPointers: t
            }) {
                let n = e.map(e => a(496282).L3.toKey(e));
                return t.filter(e => !n.includes(a(496282).L3.toKey(e)))
            }
            let en = {
                headerContainer: {
                    position: "relative"
                },
                agentName: {
                    flexShrink: 0,
                    paddingInlineStart: 6,
                    paddingInlineEnd: 6,
                    minHeight: "unset"
                },
                separator: {
                    color: a(632079).Tj.text.disabled,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 2
                },
                style1: {
                    position: "relative",
                    pointerEvents: "auto",
                    minWidth: 0
                },
                style2: {
                    marginInlineStart: 2,
                    marginInlineEnd: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingInline: 0
                },
                style3: {
                    fontSize: 14,
                    cursor: "pointer",
                    textDecoration: "none"
                },
                style4: {
                    pointerEvents: "none"
                },
                style5: {
                    position: "relative",
                    flexShrink: 0,
                    pointerEvents: "auto"
                }
            };

            function er(e) {
                let {
                    navigate: t
                } = (0, n.useContext)(a(44894).E), {
                    aiChatFeatureController: r,
                    onThreadChange: s,
                    clientStore: o,
                    threadStore: l,
                    workflowStore: d,
                    parentStore: c,
                    threadStoreState: p,
                    config: g,
                    shouldShowEmptyState: m
                } = e, h = (0, a(533992).v3)(), f = (0, a(972740).L)(), y = (0, a(682985).K8)(() => {
                    let {
                        device: e,
                        WindowSizeStore: t
                    } = h, n = "sidebar" === r.agentChatFormFactor;
                    return (e.isMobileNative || e.isTablet) && n ? t.getSafePaddingTopPx(0) : ! function(e) {
                        if (!e.isIOS) return !1;
                        let t = (0, a(663250).getMobileNativeDeviceInfo)();
                        if (!t.mobileNativeSystemVersion) return !1;
                        let n = t.mobileNativeSystemVersion.split(".").map(e => parseInt(e, 10));
                        return (0, a(355981).isGreaterThanOrEqualToVersion)(n, [26, 0])
                    }(e) ? 0 : t.getSafePaddingTopPx(8)
                }, [h, r.agentChatFormFactor]), x = (0, n.useContext)(a(19187).e), {
                    isElectronWindows: b,
                    isTablet: v
                } = (0, a(533992).Y0)(), S = (0, n.useCallback)(e => {
                    if (!d) return;
                    let n = (0, a(453573).Lm)({
                            workflowId: d.id,
                            params: {
                                workflowViewType: "chat"
                            }
                        }),
                        r = (0, a(7029).V)(e);
                    t({
                        environment: h,
                        url: n,
                        openInNew: r,
                        makeTabActive: "tab" === r ? (0, a(7029).t)(e) : void 0
                    })
                }, [d, h, t]), w = (0, a(682985).K8)(() => {
                    var e;
                    return null == d || null == (e = d.getData()) ? void 0 : e.icon
                }, [d]), C = (0, a(682985).K8)(() => {
                    let e = (null == d ? void 0 : d.getDraftData()) ? ? (null == d ? void 0 : d.getData());
                    return (0, a(445568).isWorkflowDataDatabaseAgent)(e)
                }, [d]), I = (0, n.useCallback)(async ({
                    newThreadStore: e
                }) => {
                    (0, a(757688).Wq)({
                        environment: h,
                        clientStore: o
                    }), e && await e.load(), !d || e || C ? s({
                        newThreadStore: e
                    }) : S()
                }, [h, o, d, S, C, s]), A = (0, a(83208).X)("agent_sidebar_only_agent_threads") || r.onlyShowAgentThreads, M = (0, a(682985).O$)(a(584257).b), k = (0, a(682985).K8)(() => !(0, a(712358).K)(h), [h]), j = !m && !e.hideThreadPicker, T = "pill" === r.headerButtonShape, _ = (0, n.useCallback)(e => {
                    if (d) S(e);
                    else {
                        let n = (0, a(7029).V)(e);
                        t({
                            environment: h,
                            url: a(168962).JZ.ai,
                            openInNew: n,
                            makeTabActive: "tab" === n ? (0, a(7029).t)(e) : void 0
                        })
                    }
                }, [d, S, h, t]), P = (0, a(682985).K8)(() => {
                    let e = "Notion AI";
                    if (d) {
                        let t = d.getData();
                        null != t && t.name && (e = t.name)
                    }
                    if ("Notion AI" === e && a(728372).AppStoreSidebarSpaceViewStore.state) {
                        var t;
                        let n = null == (t = a(728372).AppStoreSidebarSpaceViewStore.state.getSettings()) ? void 0 : t.agent_personalization_settings;
                        null != n && n.name && (e = n.name)
                    }
                    return e
                }, [d]), B = (0, n.useCallback)(async () => {
                    var e;
                    if (!l || !g) return;
                    let n = null == f ? void 0 : f.id,
                        i = l.id,
                        s = "full_page" === r.agentChatFormFactor ? "full_page" : "corner_chat",
                        o = {
                            id: i,
                            configType: g.type,
                            store: l,
                            title: (null == (e = l.getData()) ? void 0 : e.title) ? ? "",
                            description: "",
                            createdTime: l.getCreatedTime() ? ? Date.now(),
                            updatedTime: l.getUpdatedTime()
                        };
                    await (0, a(757688).vy)({
                        chatTranscriptInfo: o,
                        environment: h,
                        clientStore: a(57168).defaultClientAIChatStore
                    }), n && (0, a(104310).u)({
                        event: {
                            eventName: "chat_thread_deleted",
                            eventProperties: {
                                thread_id: i,
                                space_id: n,
                                source: s
                            }
                        }
                    }), (0, a(487246).a)(), "popup" === r.agentChatFormFactor || "sidebar" === r.agentChatFormFactor ? (0, a(701513).D)(h) : t({
                        environment: h,
                        url: a(168962).JZ.ai
                    })
                }, [l, g, h, t, f, r.agentChatFormFactor]), R = (0, n.useCallback)(() => {
                    l && (0, a(862451).navigateToInferenceTranscriptRoute)({
                        environment: h,
                        oldThreadStore: void 0,
                        newThreadStore: l,
                        openInNewTab: !0
                    })
                }, [h, l]), W = (0, i.jsxs)(a(4458).fI, {
                    className: "autolayout-row",
                    style: en.style1,
                    alignItems: "center",
                    children: [!M && k && r.supportsNotionSidebarButton ? (0, i.jsx)(a(457196).z, {}) : null, j ? d && !C ? (0, i.jsx)(a(988022).p, {
                        onClick: S,
                        style: en.style2,
                        children: (0, i.jsx)(a(651790).AgentIcon, {
                            agentIcon: w,
                            workflowStore: d,
                            size: 24
                        })
                    }) : (0, i.jsx)(u, {
                        aiChatFeatureController: r
                    }) : void 0, e.hideAgentName ? null : (0, i.jsx)(a(988022).p, {
                        onClick: _,
                        style: en.agentName,
                        children: (0, i.jsx)(a(111010).D, {
                            styleKey: "bodyRegular",
                            style: en.style3,
                            children: P
                        })
                    }), e.hideThreadPicker ? null : (0, i.jsxs)(i.Fragment, {
                        children: [e.hideAgentName ? null : (0, i.jsx)("span", {
                            style: en.separator,
                            children: "/"
                        }), (0, i.jsx)(a(30767).AgentThreadHistoryMenu, {
                            aiChatFeatureController: r,
                            buttonShape: r.headerButtonShape,
                            workflowId: null == d ? void 0 : d.id,
                            onThreadChange: I,
                            parentStore: c,
                            threadStore: l,
                            threadStoreState: p,
                            types: A ? ["workflow"] : void 0
                        })]
                    })]
                });
                return (0, i.jsx)(a(4458).VP, {
                    className: "autolayout-fill-width",
                    style: { ...en.style4,
                        ...en.headerContainer
                    },
                    children: (0, i.jsx)("div", {
                        className: "autolayout-col",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            alignSelf: "stretch",
                            ...ee,
                            padding: T ? `${8+y}px 8px 8px 8px` : `${8+y}px 12px 8px 12px`
                        },
                        children: (0, i.jsxs)(a(4458).fI, {
                            gap: 16,
                            alignItems: "center",
                            className: "autolayout-row",
                            justifyContent: "space-between",
                            style: ee,
                            children: [W, e.hideActions ? void 0 : (0, i.jsxs)(a(4458).fI, {
                                className: "autolayout-row",
                                gap: 2,
                                style: en.style5,
                                alignItems: "center",
                                justifyContent: "flex-end",
                                flex: "1 1 0",
                                children: [(0, i.jsx)(a(135621).AgentChatActions, {
                                    threadStore: l,
                                    workflowStore: d,
                                    clientStore: o,
                                    aiChatFeatureController: r,
                                    onThreadChange: I,
                                    showOnHover: r.supportsChatActionsOnHover,
                                    features: {
                                        showInviteButton: !0,
                                        showNewChatButton: !0,
                                        showNewChatButtonIcon: !1
                                    }
                                }), r.supportsChatSidebarModeButton && !v ? (0, i.jsx)(a(471286).ChatSidebarModeButton, {
                                    aiChatFeatureController: r
                                }) : null, r.supportsHeaderMenu && l ? (0, i.jsx)(a(693683).R, {
                                    threadStore: l,
                                    onDelete: B,
                                    onOpenInNewTab: "popup" === r.agentChatFormFactor ? R : void 0,
                                    variant: "full_page" === r.agentChatFormFactor ? "header" : "header_compact",
                                    aiChatFeatureController: r
                                }) : null, x ? (0, i.jsx)(es, {
                                    aiChatFeatureController: r,
                                    onClick: x
                                }) : null]
                            }), b ? (0, i.jsx)(a(662886).K, {}) : void 0]
                        })
                    })
                })
            }
            let ei = {
                shortcut: {
                    color: a(632079).Tj.text.inverseSecondary
                }
            };

            function es(e) {
                let {
                    aiChatFeatureController: t,
                    onClick: n
                } = e, r = "sidebar" === t.agentChatFormFactor, s = (0, a(109939).tz)(), o = (0, a(719298).v)({
                    shape: t.headerButtonShape,
                    aiChatFeatureController: t
                }), l = (0, a(960253).I)(() => ({
                    minimizeIcon: { ...o.iconButtonIcon
                    }
                }), [o.iconButtonIcon]), d = r ? a(487415).O : a(453013).o;
                return (0, i.jsx)(a(51831).m, {
                    content: () => (0, i.jsxs)(a(4458).fI, {
                        alignItems: "center",
                        gap: 8,
                        children: [(0, i.jsx)(a(109939).sA, {
                            id: "chatSidebar.hideChat",
                            defaultMessage: "Hide chat"
                        }), (0, i.jsx)(a(693592).A, {
                            style: ei.shortcut,
                            name: "commandJ"
                        })]
                    }),
                    children: e => (0, i.jsx)(a(374533).A, { ...e,
                        icon: d,
                        iconStyle: r ? o.iconButtonIcon : l.minimizeIcon,
                        style: o.iconButton,
                        ariaLabel: s.formatMessage({
                            id: "chatSidebar.hideChat",
                            defaultMessage: "Hide chat"
                        }),
                        onClick: n,
                        testId: "agent-chat-view-minimize-button"
                    })
                })
            }

            function eo({
                contentWidth: e
            }) {
                let t = (0, a(960253).e)(),
                    n = (0, a(960253).I)(() => ({
                        mockAgentChatInputWrap: {
                            width: e,
                            maxWidth: "100%",
                            height: 120,
                            boxShadow: `0px 0px 0px 0.5px ${a(632079).Tj.border.primary}, 0px 4px 12px -2px rgba(0, 0, 0, 0.08)`,
                            backgroundColor: "dark" === t ? a(632079).Tj.background.elevated : a(632079).Tj.background.primary,
                            borderRadius: 12,
                            position: "relative"
                        },
                        placeholderShimmer: {
                            position: "absolute",
                            insetInlineStart: 16,
                            top: 16,
                            borderRadius: 6,
                            height: 20,
                            width: Math.min(400, e - 32)
                        },
                        modeShimmer: {
                            position: "absolute",
                            insetInlineStart: 16,
                            bottom: 16,
                            borderRadius: 6,
                            width: Math.min(180, (e - 32) * .4),
                            height: 24
                        },
                        sourcesShimmer: {
                            position: "absolute",
                            insetInlineEnd: 16,
                            bottom: 16,
                            borderRadius: 6,
                            width: Math.min(160, (e - 32) * .35),
                            height: 24
                        }
                    }), [e, t]);
                return (0, i.jsxs)("div", {
                    style: n.mockAgentChatInputWrap,
                    children: [(0, i.jsx)(a(795830).P, {
                        style: n.placeholderShimmer
                    }), (0, i.jsx)(a(795830).P, {
                        style: n.modeShimmer
                    }), (0, i.jsx)(a(795830).P, {
                        style: n.sourcesShimmer
                    })]
                })
            }

            function el({
                environment: e,
                spaceStore: t,
                userStore: n,
                prompt: r,
                intl: i
            }) {
                let {
                    type: s
                } = r;
                if ("string" === s || "text-value" === s) {
                    if (!r.text || 0 === r.text.length) return;
                    return (0, a(674880).Kf)({
                        environment: e,
                        spaceStore: t,
                        userStore: n,
                        value: "string" == typeof r.text ? (0, a(247438).x9d)(r.text) : r.text
                    })
                }
                if ("prebuilt-prompt" === s) {
                    let s = (0, a(247438).x9d)(r.text || i.formatMessage((0, a(503507).CN)(r.promptType).message));
                    return (0, a(674880).Jv)({
                        environment: e,
                        spaceStore: t,
                        userStore: n,
                        promptType: r.promptType,
                        locale: r.locale,
                        value: s,
                        args: r.args
                    })
                }(0, a(722371).HB)(s)
            }
        },
        37402: (e, t, a) => {
            a.d(t, {
                i: () => d
            }), a(581454);
            var n = a(296540),
                r = () => a(4962),
                i = () => a(730236),
                s = a(474848);
            let o = (0, a(109939).YK)({
                    title: {
                        id: "agent.chat.permissionGate.title",
                        defaultMessage: "Request access to chat"
                    },
                    description: {
                        id: "agent.chat.permissionGate.description",
                        defaultMessage: "This agent uses pages you can’t access yet."
                    },
                    untitledResource: {
                        id: "agent.chat.permissionGate.untitled",
                        defaultMessage: "Untitled page"
                    },
                    resourceTypePage: {
                        id: "agent.chat.permissionGate.resource.page",
                        defaultMessage: "Page"
                    },
                    resourceTypeDatabase: {
                        id: "agent.chat.permissionGate.resource.database",
                        defaultMessage: "Database"
                    },
                    resourceTypeIntegration: {
                        id: "agent.chat.permissionGate.resource.integration",
                        defaultMessage: "Integration"
                    },
                    statusGranted: {
                        id: "agent.chat.permissionGate.status.granted",
                        defaultMessage: "Granted"
                    },
                    statusNeedsUpgrade: {
                        id: "agent.chat.permissionGate.status.needsUpgrade",
                        defaultMessage: "Requires additional access"
                    },
                    statusNeedsUpgradeWithRole: {
                        id: "agent.chat.permissionGate.status.needsUpgradeWithRole",
                        defaultMessage: "Requires {role}"
                    },
                    statusRequestAccessUnavailable: {
                        id: "agent.chat.permissionGate.status.requestAccessUnavailable",
                        defaultMessage: "Contact an admin to manage this access."
                    },
                    requestEditAccess: {
                        id: "agent.chat.permissionGate.requestEdit",
                        defaultMessage: "Request edit access"
                    }
                }),
                l = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        padding: 24,
                        borderRadius: 12,
                        border: `1px solid ${a(632079).Tj.border.primary}`,
                        backgroundColor: a(632079).Tj.background.primary,
                        width: "100%"
                    },
                    titleButton: {
                        padding: 0,
                        margin: 0,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "start",
                        display: "inline-flex",
                        color: a(632079).Tj.text.primary
                    },
                    statusDetails: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: 2,
                        textAlign: "end"
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function d(e) {
                let {
                    resources: t,
                    isLoading: d
                } = e, c = (0, a(109939).tz)(), u = (0, a(533992).v3)(), p = (0, n.useMemo)(() => {
                    let e = new Map;
                    for (let a of t) {
                        let t = (0, i().h)(a);
                        e.has(t) || e.set(t, (0, r().Ay)())
                    }
                    return e
                }, [t]);
                return d ? (0, s.jsx)(a(4458).VP, {
                    className: "autolayout-col autolayout-fill-width autolayout-fill-height",
                    alignItems: "center",
                    justifyContent: "center",
                    style: l.positionRelative,
                    children: (0, s.jsx)(a(517334).k, {})
                }) : (0, s.jsxs)("div", {
                    style: l.container,
                    children: [(0, s.jsx)(a(111010).D, {
                        styleKey: "bodyMedium",
                        children: c.formatMessage(o.title)
                    }), (0, s.jsx)(a(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: c.formatMessage(o.description)
                    }), (0, s.jsx)(a(4458).VP, {
                        gap: 12,
                        children: t.map(e => {
                            var t;
                            let n = (0, i().h)(e),
                                d = null != (t = e.title) && t.trim().length ? e.title : c.formatMessage(o.untitledResource),
                                g = "collection" === e.resourceType ? c.formatMessage(o.resourceTypeDatabase) : "integrationConnection" === e.resourceType ? c.formatMessage(o.resourceTypeIntegration) : c.formatMessage(o.resourceTypePage),
                                m = e.pointer.spaceId ? {
                                    id: e.pointer.id,
                                    spaceId: e.pointer.spaceId
                                } : void 0,
                                h = function(e) {
                                    let {
                                        resource: t,
                                        shardPointer: n,
                                        flowId: r
                                    } = e;
                                    if (!n) return null;
                                    let i = "needsUpgrade" === t.status ? o.requestEditAccess : void 0;
                                    return "collection" === t.resourceType ? (0, s.jsx)(a(476972).c, {
                                        type: "collection",
                                        collection: n,
                                        flowId: r,
                                        buttonType: "outline",
                                        labelMessage: i
                                    }) : "page" === t.resourceType ? (0, s.jsx)(a(476972).c, {
                                        type: "page",
                                        block: n,
                                        flowId: r,
                                        buttonType: "outline",
                                        labelMessage: i
                                    }) : null
                                }({
                                    resource: e,
                                    shardPointer: m,
                                    flowId: p.get(n) ? ? (0, r().Ay)()
                                }),
                                f = function(e) {
                                    let {
                                        intl: t,
                                        resource: n,
                                        requestAccessControl: r
                                    } = e, i = function(e) {
                                        let {
                                            intl: t,
                                            role: n
                                        } = e;
                                        if (n) try {
                                            let e = (0, a(579825).an)(n, void 0);
                                            return t.formatMessage(e)
                                        } catch {
                                            return
                                        }
                                    }({
                                        intl: t,
                                        role: n.requiredRole
                                    });
                                    switch (n.status) {
                                        case "granted":
                                            return (0, s.jsx)(a(111010).D, {
                                                styleKey: "bodyMedium",
                                                colorVariant: "accentPrimary",
                                                children: t.formatMessage(o.statusGranted)
                                            });
                                        case "needsUpgrade":
                                            return (0, s.jsxs)("div", {
                                                style: l.statusDetails,
                                                children: [r ? ? (0, s.jsx)(a(111010).D, {
                                                    styleKey: "bodyMedium",
                                                    colorVariant: "primary",
                                                    children: i ? t.formatMessage(o.statusNeedsUpgradeWithRole, {
                                                        role: i
                                                    }) : t.formatMessage(o.statusNeedsUpgrade)
                                                }), r ? null : (0, s.jsx)(a(111010).D, {
                                                    styleKey: "bodyMedium",
                                                    colorVariant: "secondary",
                                                    children: t.formatMessage(o.statusRequestAccessUnavailable)
                                                })]
                                            });
                                        case "requestAccess":
                                            return r ? ? (0, s.jsx)(a(111010).D, {
                                                styleKey: "bodyMedium",
                                                colorVariant: "secondary",
                                                children: t.formatMessage(o.statusRequestAccessUnavailable)
                                            });
                                        default:
                                            (0, a(722371).HB)(n.status)
                                    }
                                }({
                                    intl: c,
                                    resource: e,
                                    requestAccessControl: h
                                }),
                                y = "page" === e.resourceType && e.store instanceof a(970831).B && e.store ? function(e) {
                                    let {
                                        title: t,
                                        store: n,
                                        environment: r
                                    } = e;
                                    return (0, s.jsx)(a(988022).p, {
                                        style: l.titleButton,
                                        onClick: () => {
                                            (0, a(545586).navigateToBlock)({
                                                environment: r,
                                                store: n,
                                                pageVisitSource: void 0
                                            })
                                        },
                                        children: (0, s.jsx)(a(111010).D, {
                                            styleKey: "bodyMedium",
                                            colorVariant: "primary",
                                            children: t
                                        })
                                    })
                                }({
                                    title: d,
                                    store: e.store,
                                    environment: u
                                }) : (0, s.jsx)(a(111010).D, {
                                    styleKey: "bodyMedium",
                                    children: d
                                });
                            return (0, s.jsxs)(a(4458).fI, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: 12,
                                flexWrap: "wrap",
                                children: [(0, s.jsxs)(a(4458).VP, {
                                    gap: 2,
                                    minWidth: 0,
                                    children: [y, (0, s.jsx)(a(111010).D, {
                                        styleKey: "captionRegular",
                                        colorVariant: "secondary",
                                        children: g
                                    })]
                                }), (0, s.jsx)(a(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    minHeight: 32,
                                    children: f
                                })]
                            }, n)
                        })
                    })]
                })
            }
        },
        81422: (e, t, a) => {
            a.d(t, {
                W: () => n
            });

            function n(e) {
                return e.scrollHeight - (e.scrollTop + e.clientHeight)
            }
        },
        104808: (e, t, a) => {
            a.d(t, {
                g: () => l
            });
            var n = a(296540);

            function r(e) {
                let {
                    cover: t,
                    workflowStore: n
                } = e;
                (0, a(377796).createAndCommit)({
                    userAction: "WorkflowActions.saveCover",
                    environment: e.environment,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: n.pointer.spaceId
                    },
                    perform: e => {
                        (0, a(421439).y4)({
                            store: n,
                            operation: a(861988).KF({
                                pointer: n.pointer,
                                cover: t
                            }),
                            transaction: e
                        })
                    }
                })
            }
            var i = a(474848);
            let s = (0, a(109939).YK)({
                    agentCover: {
                        defaultMessage: "Agent cover",
                        id: "agentCover.title"
                    },
                    fileTypeCaption: {
                        defaultMessage: "Images wider than 1500 pixels work best.",
                        id: "agentCover.fileType.caption"
                    },
                    uploadFailed: {
                        defaultMessage: "Upload failed",
                        id: "agentCover.errorDialogMessage.uploadFailed"
                    },
                    embedTitle: {
                        defaultMessage: "Link",
                        id: "agentCover.embedType.title"
                    },
                    embedPlaceholder: {
                        defaultMessage: "Paste an image link…",
                        id: "agentCover.embedType.placeholder"
                    },
                    embedCaption: {
                        defaultMessage: "Works with any image from the web.",
                        id: "agentCover.embedType.caption"
                    },
                    embedSubmit: {
                        defaultMessage: "Submit",
                        id: "agentCover.embedType.buttonText"
                    },
                    actionBarAriaLabel: {
                        defaultMessage: "Agent cover action bar",
                        id: "agentCover.actionBar.ariaLabel"
                    },
                    changeAriaLabel: {
                        defaultMessage: "Change the agent cover image",
                        id: "agentCover.changeCover.ariaLabel"
                    },
                    repositionAriaLabel: {
                        defaultMessage: "Reposition the agent cover image",
                        id: "agentCover.repositionAriaLabel"
                    },
                    savePositionAriaLabel: {
                        defaultMessage: "Save the position of the agent cover image",
                        id: "agentCover.savePositionAriaLabel"
                    },
                    cancelPositionAriaLabel: {
                        defaultMessage: "Cancel the position change of the agent cover image",
                        id: "agentCover.cancelPositionAriaLabel"
                    }
                }),
                o = {
                    actionBar: {
                        position: "absolute",
                        top: 12,
                        insetInlineEnd: 12
                    },
                    style0: {
                        width: "100%",
                        height: "100%"
                    },
                    style1: {
                        position: "absolute",
                        top: "calc(50% - 10px)",
                        insetInlineStart: "calc(50% - 90px)",
                        width: 180,
                        padding: "0.3em 1.5em 0.3em",
                        background: (0, a(650342).X4)("#000", .4),
                        borderRadius: 4,
                        color: "white",
                        fontSize: 12,
                        textAlign: "center",
                        pointerEvents: "none"
                    }
                },
                l = n.memo(function(e) {
                    let {
                        workflowStore: t,
                        disabled: l
                    } = e, {
                        workflowValue: d
                    } = (0, a(867587).N)(t, !0), c = (0, a(533992).v3)(), u = (0, a(109939).tz)(), p = (0, a(960253).e)(), g = (0, n.useRef)(null), [m, h] = (0, n.useState)(!1), {
                        cover: f,
                        icon: y,
                        cover_position: x
                    } = d, b = (0, a(682985).K8)(() => a(588466).A.state.isActive, []), v = (0, a(682985).K8)(() => (0, a(417317).b)({
                        icon: y,
                        themeMode: p
                    }), [y, p]), {
                        isRepositioning: S,
                        currentImagePosition: w,
                        handleDragStart: C,
                        handleDragMove: I,
                        handleDragEnd: A,
                        handleStartReposition: M,
                        handleSavePosition: k,
                        handleCancelReposition: j,
                        repositioningCursor: T
                    } = (0, a(70703).p)({
                        currentPosition: x ? ? .5,
                        imageUrl: f,
                        onSavePosition: e => {
                            t.table === a(581654).U6 || l || function(e) {
                                let {
                                    coverPosition: t,
                                    workflowStore: n
                                } = e;
                                (0, a(377796).createAndCommit)({
                                    userAction: "WorkflowActions.saveCoverPosition",
                                    environment: e.environment,
                                    canUndo: !0,
                                    cellTarget: {
                                        spaceWithId: n.pointer.spaceId
                                    },
                                    perform: e => {
                                        (0, a(421439).y4)({
                                            store: n,
                                            operation: a(861988).Bw({
                                                pointer: n.pointer,
                                                coverPosition: t
                                            }),
                                            transaction: e
                                        })
                                    }
                                })
                            }({
                                workflowStore: t,
                                coverPosition: e,
                                environment: c
                            })
                        },
                        rootRef: g,
                        environment: c
                    }), _ = (0, n.useMemo)(() => (0, a(381453).nF)(() => {
                        h(!0)
                    }, 100), []), P = (0, n.useMemo)(() => (0, a(381453).sg)(() => {
                        h(!1)
                    }, 100), []), B = (0, n.useCallback)(e => {
                        t.table === a(581654).U6 || l || a(874443).W(c, {
                            originGap: 8,
                            originRect: e.currentTarget.getBoundingClientRect(),
                            isSmallWidth: !1,
                            popupWidth: 540,
                            maxHeight: 485,
                            title: u.formatMessage(s.agentCover),
                            onDelete: () => {
                                a(874443).I(), r({
                                    workflowStore: t,
                                    cover: void 0,
                                    environment: c
                                })
                            },
                            currentTab: "gallery",
                            tabs: [{
                                type: "gallery",
                                onChange: ({
                                    url: e
                                }) => {
                                    r({
                                        workflowStore: t,
                                        cover: e,
                                        environment: c
                                    })
                                }
                            }, {
                                type: "file",
                                fileUpload: !1,
                                imageUpload: !0,
                                videoUpload: !1,
                                caption: u.formatMessage(s.fileTypeCaption),
                                onUpload: e => {
                                    a(874443).I(), a(385475).Zn({
                                        environment: c,
                                        files: [e[0]],
                                        bucket: "temporary",
                                        onBatchComplete: e => {
                                            let a = e[0];
                                            a && r({
                                                workflowStore: t,
                                                cover: a,
                                                environment: c
                                            })
                                        },
                                        onBatchError: e => {
                                            a(647095).f1(u.formatMessage(s.uploadFailed))
                                        }
                                    })
                                }
                            }, {
                                type: "embed",
                                title: u.formatMessage(s.embedTitle),
                                inputPlaceholder: u.formatMessage(s.embedPlaceholder),
                                caption: u.formatMessage(s.embedCaption),
                                buttonText: u.formatMessage(s.embedSubmit),
                                onChange: e => {
                                    r({
                                        workflowStore: t,
                                        cover: e.originUrl,
                                        environment: c
                                    }), a(874443).I()
                                }
                            }, {
                                type: "unsplash",
                                onChange: ({
                                    url: e
                                }) => {
                                    r({
                                        workflowStore: t,
                                        cover: e,
                                        environment: c
                                    })
                                }
                            }]
                        })
                    }, [t, c, u, l]), R = (0, n.useCallback)(() => {
                        t.table === a(581654).U6 || l || k()
                    }, [t, l, k]), W = (0, a(960253).I)(() => ({
                        cover: {
                            height: "min(20vh, 280px)",
                            width: "100%",
                            position: "relative",
                            cursor: T,
                            userSelect: S ? "none" : "inherit",
                            ...f ? {
                                backgroundImage: `url(${f})`,
                                backgroundSize: "cover",
                                backgroundPosition: `center ${(1-w)*100}%`,
                                backgroundRepeat: "no-repeat"
                            } : {
                                backgroundColor: (0, a(650342).X4)(v || (0, a(337222).hI)("gray"), .1)
                            }
                        }
                    }), [f, w, S, v, T]);
                    return (0, i.jsxs)("div", {
                        ref: g,
                        style: W.cover,
                        onMouseEnter: _,
                        onMouseLeave: P,
                        children: [(0, i.jsx)(a(245483).A, {
                            onDraggableDragStart: C,
                            onDraggableDragMove: I,
                            onDraggableDragEnd: A,
                            onDraggableDragCancel: A,
                            disabled: !S,
                            render: e => (0, i.jsx)("div", { ...e,
                                style: o.style0
                            })
                        }), l ? void 0 : (0, i.jsx)(a(490289).L, {
                            style: o.actionBar,
                            visible: m || S || b,
                            children: (0, i.jsx)(a(330116).E, {
                                "aria-label": u.formatMessage(s.actionBarAriaLabel),
                                children: S ? (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(a(517352).e, {
                                        "aria-label": u.formatMessage(s.savePositionAriaLabel),
                                        onClick: R,
                                        children: (0, i.jsx)(a(109939).sA, {
                                            defaultMessage: "Save position",
                                            id: "agentCover.savePosition.button"
                                        })
                                    }), (0, i.jsx)(a(517352).e, {
                                        "aria-label": u.formatMessage(s.cancelPositionAriaLabel),
                                        onClick: j,
                                        children: (0, i.jsx)(a(109939).sA, {
                                            defaultMessage: "Cancel",
                                            id: "agentCover.cancelPosition.button"
                                        })
                                    })]
                                }) : (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(a(517352).e, {
                                        "aria-label": u.formatMessage(s.changeAriaLabel),
                                        onClick: B,
                                        children: f ? (0, i.jsx)(a(109939).sA, {
                                            defaultMessage: "Change cover",
                                            id: "workflowAgentHeader.changeCover.button"
                                        }) : (0, i.jsx)(a(109939).sA, {
                                            defaultMessage: "Add cover",
                                            id: "workflowAgentHeader.addCover.button"
                                        })
                                    }), f ? (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(a(457655).b, {}), (0, i.jsx)(a(517352).e, {
                                            "aria-label": u.formatMessage(s.repositionAriaLabel),
                                            onClick: () => M(f),
                                            children: (0, i.jsx)(a(109939).sA, {
                                                defaultMessage: "Reposition",
                                                id: "agentCover.reposition.button"
                                            })
                                        })]
                                    }) : void 0]
                                })
                            })
                        }), S ? (0, i.jsx)("div", {
                            style: o.style1,
                            children: (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "Drag image to reposition",
                                id: "workflowAgentCover.dragImage.text"
                            })
                        }) : void 0]
                    })
                })
        },
        115343: (e, t, a) => {
            a.d(t, {
                C: () => n,
                l: () => r
            });
            let n = 774,
                r = 696
        },
        135140: (e, t, a) => {
            a.d(t, {
                I: () => i
            }), a(296540);
            var n = a(474848);
            let r = {
                container: {
                    paddingTop: 12,
                    paddingInline: 12,
                    paddingBottom: 12,
                    width: "100%"
                },
                box: {
                    borderRadius: 14,
                    backgroundColor: a(632079).Tj.background.primary,
                    border: `1px solid ${a(632079).Tj.border.primary}`,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    gap: 20
                },
                messageArea: {
                    paddingTop: 12,
                    paddingInline: 16
                },
                messageContent: {
                    paddingBottom: 6,
                    width: "100%"
                },
                attachButton: {
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                },
                sendButton: {
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 16,
                    backgroundColor: a(632079).Tj.gray.background.secondaryTranslucent
                },
                sendIcon: {
                    fill: a(632079).Tj.icon.tertiary
                },
                actions: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 8,
                    paddingInlineStart: 10,
                    paddingInlineEnd: 12,
                    paddingBottom: 12
                }
            };

            function i(e) {
                let {
                    message: t
                } = e;
                return (0, n.jsx)("div", {
                    style: r.container,
                    children: (0, n.jsxs)("div", {
                        style: r.box,
                        children: [(0, n.jsx)("div", {
                            style: r.messageArea,
                            children: (0, n.jsx)("div", {
                                style: r.messageContent,
                                children: t
                            })
                        }), (0, n.jsxs)("div", {
                            style: r.actions,
                            children: [(0, n.jsx)("div", {
                                style: r.attachButton,
                                children: (0, n.jsx)(a(16275).I, {
                                    icon: a(695317).o,
                                    size: 20,
                                    colorVariant: "secondary",
                                    "aria-hidden": !0
                                })
                            }), (0, n.jsx)("div", {
                                style: r.sendButton,
                                children: (0, n.jsx)(a(16275).I, {
                                    icon: a(567738).arrowStraightUpFillSmallIcon,
                                    size: "sm",
                                    style: r.sendIcon
                                })
                            })]
                        })]
                    })
                })
            }
        },
        148249: (e, t, a) => {
            a.d(t, {
                Q: () => d
            });
            var n = a(296540),
                r = a(474848);
            let i = {
                    display: "inline"
                },
                s = {
                    display: "inline",
                    verticalAlign: "baseline",
                    cursor: "pointer"
                },
                o = {
                    display: "inline"
                };

            function l(e) {
                let {
                    cta: t,
                    isStatusOnlyMessage: n
                } = e;
                return (0, r.jsx)(a(135140).I, {
                    message: (0, r.jsx)(a(111010).D, {
                        as: "span",
                        styleKey: "bodyLgRegular",
                        colorVariant: "secondary",
                        style: i,
                        children: (0, r.jsx)(a(109939).sA, { ...n ? a(611051).x.workspaceSpendLimitStatusMessage : a(611051).x.workspaceSpendLimitRestoreAccessMessage,
                            values: {
                                upgradePhrase: (0, r.jsx)(a(428217).V, {
                                    onClick: t.onClick,
                                    disableUnderline: !0,
                                    style: s,
                                    hoverColor: "blue",
                                    color: a(632079).Tj.blue.text.accentPrimary,
                                    children: (0, r.jsx)(a(111010).D, {
                                        as: "span",
                                        styleKey: "bodyLgMedium",
                                        style: o,
                                        children: t.label
                                    })
                                })
                            }
                        })
                    })
                })
            }

            function d(e) {
                let {
                    spaceStore: t,
                    featureAvailability: i
                } = e, s = (0, a(533992).v3)(), o = (0, a(109939).tz)(), d = (0, a(555017).o)(t.id), c = i.upsell, u = !0 === d && void 0 !== c, {
                    handleClick: p,
                    upgradeEligibility: g
                } = (0, a(79268).C)({
                    upsell: c,
                    source: "custom_agent",
                    spaceStore: t
                }), m = n.useCallback(() => {
                    a(963430).S({
                        environment: s,
                        from: "assistant",
                        prepopulatedContent: o.formatMessage(a(611051).x.requestLimitIncreaseFromSupportDefaultMessage).toString()
                    })
                }, [s, o]);
                if (void 0 === d) return null;
                let {
                    handleCtaClick: h,
                    ctaLabel: f
                } = u && void 0 !== c ? {
                    handleCtaClick: p,
                    ctaLabel: (0, a(327506).n)({
                        upsell: c,
                        intl: o,
                        featureName: "custom_agents_credit_usage",
                        upgradeStatus: g.status
                    }).upgradePhrase
                } : {
                    handleCtaClick: m,
                    ctaLabel: o.formatMessage(a(611051).x.workspaceSpendLimitContactSupportLabel)
                };
                if (u && "loading" === g.status) return null;
                let y = u && ("request_pending" === g.status || "sales_assisted" === g.status || "sales_eligible" === g.status);
                return (0, r.jsx)(l, {
                    cta: {
                        label: f,
                        onClick: h
                    },
                    isStatusOnlyMessage: y
                })
            }
        },
        158145: (e, t, a) => {
            a.d(t, {
                Z: () => l
            }), a(944114), a(898992), a(354520), a(581454);
            var n = a(296540),
                r = () => a(20707),
                i = a(474848);
            let s = (0, a(109939).YK)({
                    sourceLanguage: {
                        id: "translation.languageMenuList.sourceLanguage",
                        defaultMessage: "From"
                    },
                    selectLanguage: {
                        id: "translation.languageMenuList.selectLanguage",
                        defaultMessage: "To"
                    },
                    detectedLanguage: {
                        id: "translation.languageMenuList.detectedLanguage",
                        defaultMessage: "Detected language"
                    },
                    preferredLanguage: {
                        id: "translation.languageMenuList.preferredLanguage",
                        defaultMessage: "Preferred language"
                    },
                    languageSearchPlaceholder: {
                        id: "translation.languageMenuList.languageSearchPlaceholder",
                        defaultMessage: "Search languages…"
                    }
                }),
                o = {
                    menuItemSectionBottomBorder: {
                        boxShadow: `${a(632079).Tj.border.secondaryTranslucent} 0px 1px 0px`
                    },
                    style0: {
                        marginInlineStart: 2,
                        marginInlineEnd: 2
                    }
                };

            function l(e) {
                let {
                    onSelectTargetLanguage: t,
                    onSelectSourceLanguage: l,
                    editorModeConfigTranslateState: p,
                    sourceLanguage: g,
                    detectedPageLanguage: m,
                    preferredLanguage: h,
                    subMenuPlacement: f,
                    subMenuAlignment: y,
                    pageId: x
                } = e, b = (0, a(533992).v3)(), v = (0, a(109939).tz)(), S = "loading" === p.status, w = d(S), C = (0, a(960253).I)(() => ({ ...w
                }), [w]);
                (0, n.useEffect)(() => {
                    if ("pre_activation" === p.status) {
                        let e = setTimeout(() => {
                            (0, a(104310).u)({
                                event: {
                                    eventName: "translate_page_interaction",
                                    eventProperties: {
                                        type: "action_menu_rendered",
                                        page_id: x
                                    }
                                }
                            })
                        }, 750);
                        return () => clearTimeout(e)
                    }
                }, [p.status, x, b]);
                let I = p.targetLanguage,
                    [A, M] = (0, a(739271).s)(),
                    k = u({
                        disabled: S,
                        filter: e => g !== e,
                        currentSelectedLanguage: p.targetLanguage,
                        onSelectLanguage: e => {
                            t({
                                targetLanguage: e
                            })
                        },
                        inputComboboxProps: A
                    });
                return (0, i.jsx)(a(558045).A, {
                    initialFocus: 1,
                    type: a(558045).O.Vertical,
                    disableInitialScroll: !0,
                    comboboxProps: M,
                    sections: [{
                        key: "sourceLanguage",
                        render: e => (0, i.jsx)(a(844565).A, { ...e,
                            title: v.formatMessage(s.sourceLanguage),
                            desktopTitleStyle: o.style0,
                            style: o.menuItemSectionBottomBorder
                        }),
                        items: [{
                            key: g,
                            render: (e, {
                                onFocus: t
                            }) => (0, i.jsx)(a(816231).A, { ...e,
                                onFocus: t,
                                disableDefaultClick: !0,
                                placementToOrigin: f,
                                alignmentToOrigin: y,
                                renderExtension: e => (0, i.jsx)(c, {
                                    disabled: S,
                                    extensionPopupButtonEvents: e,
                                    currentTargetLanguage: I,
                                    sourceLanguage: g,
                                    onSelectSourceLanguage: l
                                }),
                                children: (e, t) => (0, i.jsx)(a(95582).A, { ...e,
                                    disabled: S,
                                    buttonStyle: C.button,
                                    ref: t,
                                    title: v.formatMessage((0, r().Bj)(g)),
                                    caption: g === m ? v.formatMessage(s.detectedLanguage) : g === h ? v.formatMessage(s.preferredLanguage) : void 0
                                })
                            }),
                            action: () => {}
                        }]
                    }, {
                        key: "selectLanguage",
                        render: e => (0, i.jsx)(a(844565).A, { ...e,
                            title: v.formatMessage(s.selectLanguage),
                            desktopTitleStyle: o.style0
                        }),
                        items: k
                    }]
                })
            }

            function d(e) {
                return (0, a(960253).I)(() => ({
                    button: {
                        color: e ? a(632079).Tj.text.tertiary : a(632079).Tj.text.primary
                    }
                }), [e])
            }

            function c(e) {
                let {
                    extensionPopupButtonEvents: t,
                    currentTargetLanguage: n,
                    disabled: r,
                    sourceLanguage: s,
                    onSelectSourceLanguage: o
                } = e, [l, d] = (0, a(739271).s)(), c = u({
                    disabled: r,
                    filter: e => e !== n,
                    currentSelectedLanguage: s,
                    onSelectLanguage: e => {
                        o({
                            sourceLanguage: e
                        })
                    },
                    inputComboboxProps: l
                }), p = a(986939).A.isMobile ? {
                    menuType: a(649476).gu.ActionSheet,
                    ...t
                } : {
                    menuType: a(649476).gu.Popup,
                    width: 200,
                    height: 380,
                    ...t
                };
                return (0, i.jsx)(a(747369).A, { ...p,
                    onClick: e => {
                        e.preventDefault()
                    },
                    children: (0, i.jsx)(a(558045).A, {
                        initialFocus: void 0,
                        type: a(558045).O.Vertical,
                        comboboxProps: d,
                        sections: [{
                            key: "originalLanguage",
                            items: c
                        }]
                    })
                })
            }

            function u(e) {
                let {
                    disabled: t,
                    filter: o,
                    currentSelectedLanguage: l,
                    onSelectLanguage: c,
                    inputComboboxProps: u
                } = e, p = (0, a(109939).tz)(), [g, m] = (0, n.useState)(""), h = d(t), f = (0, n.useMemo)(() => ({
                    key: "language-search-input",
                    render: e => (0, i.jsx)(a(310324).Ay, { ...e,
                        disabled: t,
                        placeholder: p.formatMessage(s.languageSearchPlaceholder),
                        value: g,
                        onChange: e => m(e.target.value),
                        focus: !0,
                        inputLeft: (0, i.jsx)(a(708966).Q, {
                            iconGroup: a(673700).C,
                            colorPalette: "gray",
                            colorVariant: "accentPrimary",
                            variantName: "default"
                        }),
                        ...u
                    }),
                    action: () => {}
                }), [g, t, p, u]), y = (0, n.useMemo)(() => ({
                    key: "no-results",
                    render: () => (0, i.jsx)(a(498341).u, {
                        title: (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "No results found",
                            id: "TranslationLanguageMenuList.noResults"
                        })
                    }),
                    action: () => {}
                }), []), x = (0, n.useMemo)(() => (0, a(703820).J6)({
                    includeRtlLanguages: !0
                }), []), b = (0, n.useMemo)(() => {
                    let e = [];
                    for (let t of x)
                        if (o(t)) {
                            let a = p.formatMessage((0, r().Bj)(t));
                            e.push({
                                languageCode: t,
                                languageName: a
                            })
                        }
                    return e.sort((e, t) => e.languageName.localeCompare(t.languageName))
                }, [o, p, x]), v = (0, n.useMemo)(() => (0, a(821048).Ay)(g, b, ({
                    languageName: e
                }) => e.toLowerCase()), [g, b]), S = (0, n.useMemo)(() => v.map(({
                    languageCode: e,
                    languageName: n
                }) => ({
                    key: e,
                    render: r => (0, i.jsx)(a(95582).A, { ...r,
                        buttonStyle: h.button,
                        disabled: t,
                        title: n,
                        isChecked: l === e
                    }),
                    action: () => {
                        t || c(e)
                    }
                })), [v, t, l, c, h.button]);
                return 0 === S.length ? [f, y] : [f, ...S]
            }
        },
        211607: (e, t, a) => {
            a.d(t, {
                O: () => i
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(803949);
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        unreadBySpaceId: {}
                    }
                }
                isThreadUnread(e) {
                    var t;
                    let {
                        spaceId: a,
                        threadId: n
                    } = e;
                    return (null == (t = this.state.unreadBySpaceId[a]) ? void 0 : t[n]) ? ? !1
                }
                setThreadUnread(e) {
                    let {
                        spaceId: t,
                        threadId: a,
                        isUnread: n
                    } = e, r = this.state.unreadBySpaceId[t] ? ? {};
                    this.setState({
                        unreadBySpaceId: { ...this.state.unreadBySpaceId,
                            [t]: { ...r,
                                [a]: n
                            }
                        }
                    })
                }
                setUnreadStateForThreads(e) {
                    let {
                        spaceId: t,
                        threadIds: a,
                        unreadThreadIds: n
                    } = e, r = new Set(n), i = { ...this.state.unreadBySpaceId[t] ? ? {}
                    };
                    a.forEach(e => {
                        i[e] = r.has(e)
                    }), this.setState({
                        unreadBySpaceId: { ...this.state.unreadBySpaceId,
                            [t]: i
                        }
                    })
                }
            }
            let i = new r
        },
        234622: (e, t, a) => {
            a.d(t, {
                m: () => r
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var n = a(296540);

            function r(e) {
                let {
                    spaceStore: t,
                    currentThreadStore: r,
                    isEnabled: i = !0,
                    includeWorkflows: s = !1,
                    includeWriterChats: o = !1
                } = e, l = (0, a(533992).v3)(), d = (0, a(83208).X)("agent_combined_threads"), c = (0, n.useMemo)(() => !!s && d, [s, d]), u = (0, n.useMemo)(() => (0, a(414274).u)({
                    includeWorkflowsEffective: c,
                    includeWriterChats: o
                }), [c, o]), p = (0, a(682985).K8)(() => {
                    if (i && t) return a(414274).c.getListSource({
                        environment: l,
                        spaceId: t.id,
                        initialFetchState: "refreshing",
                        includeWorkflows: c,
                        queryKey: u,
                        includeWriterChats: o
                    })
                }, [l, c, o, i, u, t]), g = (0, a(682985).K8)(() => i && t ? a(414274).c.getFetchState(t.id, u) : "idle", [i, u, t]);
                (0, a(97668).Yb)(async () => {
                    i && t && p && void 0 === p.rowsStore.state.rows && await a(414274).c.refresh({
                        spaceId: t.id,
                        environment: l,
                        includeWorkflows: c,
                        includeWriterChats: o,
                        queryKey: u
                    })
                }, [l, c, o, i, p, u, t]), (0, n.useEffect)(() => {
                    if (!i || !t || !p) return;
                    let e = l.currentUser.id;
                    if (!e) return;
                    let n = a(48091).Ay.addListener({
                        key: (0, a(568479).i7)({
                            spaceId: t.id,
                            userId: e
                        }),
                        authorizationToken: void 0,
                        listener: ({
                            value: e
                        }) => {
                            "string" == typeof e && 0 !== e.length && a(414274).c.prependThreadId(t.id, e, u)
                        },
                        subscriptionId: void 0
                    });
                    return () => {
                        n && a(48091).Ay.removeListener(n)
                    }
                }, [l, l.currentUser.id, i, o, p, u, t]);
                let m = (0, a(682985).K8)(() => {
                        if (!i || !t) return;
                        let e = null == p ? void 0 : p.rowsStore.state.rows;
                        if (void 0 === e) return;
                        let a = new Set(e ? ? []);
                        return r && r.getSpaceId() === t.id && a.add(r.id), Array.from(a)
                    }, [r, i, p, t]),
                    h = (0, a(682985).K8)(() => !!i && !!t && ((null == p ? void 0 : p.rowsStore.state.hasMore) ? ? !1), [i, p, t]);
                return {
                    fetchState: g,
                    threadIds: m,
                    loadMore: (0, n.useCallback)(async () => {
                        i && t && await a(414274).c.loadMore({
                            spaceId: t.id,
                            environment: l,
                            includeWorkflows: c,
                            includeWriterChats: o,
                            queryKey: u
                        })
                    }, [l, c, o, i, u, t]),
                    refetch: (0, n.useCallback)(async () => {
                        i && t && await a(414274).c.refresh({
                            spaceId: t.id,
                            environment: l,
                            includeWorkflows: c,
                            includeWriterChats: o,
                            queryKey: u
                        })
                    }, [l, c, o, i, u, t]),
                    hasMore: h
                }
            }
        },
        258416: (e, t, a) => {
            a.d(t, {
                a: () => o
            });
            var n = a(296540),
                r = a(474848);
            let i = (0, a(109939).YK)({
                    untitledThread: {
                        id: "agentCallerThreadHeader.untitledThread",
                        defaultMessage: "Untitled chat"
                    },
                    instructionsFrom: {
                        id: "agentCallerThreadHeader.instructionsFrom",
                        defaultMessage: "Instructions from {agentName}"
                    },
                    personalAgentName: {
                        id: "agentCallerThreadHeader.personalAgentName",
                        defaultMessage: "Personal Agent"
                    },
                    agentFallbackName: {
                        id: "agentCallerThreadHeader.agentFallbackName",
                        defaultMessage: "Agent"
                    }
                }),
                s = {
                    pill: {
                        alignSelf: "flex-start",
                        display: "flex",
                        gap: 6,
                        alignItems: "center",
                        paddingInline: 10,
                        paddingBlock: 6,
                        borderRadius: 999,
                        background: a(632079).Tj.background.secondary
                    },
                    pillHover: {
                        background: a(632079).Tj.state.hover
                    },
                    pillPressed: {
                        background: a(632079).Tj.state.pressed
                    },
                    verticalDivider: {
                        width: 1,
                        height: 12,
                        backgroundColor: a(632079).Tj.border.secondary,
                        marginInlineStart: 14
                    },
                    title: {
                        minWidth: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    },
                    messageHeader: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 8,
                        width: "100%",
                        paddingInline: 4,
                        paddingBlock: 4
                    },
                    messageCard: {
                        padding: 10,
                        borderRadius: 12,
                        border: `1px solid ${a(632079).Tj.border.secondary}`
                    },
                    messageChevron: {
                        transition: "transform 150ms ease"
                    },
                    messageChevronExpanded: {
                        transform: "rotate(180deg)"
                    },
                    instructionsContainer: {
                        marginTop: 8,
                        paddingInlineEnd: 12,
                        paddingInlineStart: 12,
                        borderRadius: 10,
                        overflow: "hidden",
                        transition: "max-height 150ms ease"
                    }
                };

            function o(e) {
                let {
                    threadStore: t,
                    callerMessageStep: o
                } = e, l = (0, a(533992).v3)(), d = (0, a(109939).tz)(), c = (0, a(972740).L)(), {
                    navigate: u
                } = (0, n.useContext)(a(44894).E), p = (0, n.useMemo)(() => {
                    if (o.parentThreadUrl) try {
                        let e = (0, a(140030).Mg)(o.parentThreadUrl, {
                            baseUrl: a(986939).A.domainBaseUrl,
                            publicDomainName: a(986939).A.publicDomainName
                        });
                        if ("thread" !== e.type) return;
                        return e.threadId
                    } catch {
                        return
                    }
                }, [o.parentThreadUrl]), g = (0, n.useMemo)(() => {
                    if (c && p) return a(174148).E.createChildStore(c, {
                        table: a(832375).Toz,
                        id: p,
                        spaceId: c.id
                    })
                }, [p, c]);
                (0, n.useEffect)(() => {
                    !g || g.isReady() || g.load()
                }, [g]);
                let m = (0, a(682985).K8)(() => {
                        var e;
                        return null == g || null == (e = g.getData()) ? void 0 : e.title
                    }, [g]),
                    h = (0, a(682985).K8)(() => {
                        let e = a(728372).AppStoreSidebarSpaceStore.state;
                        if (!(!e || !o.parentAgentId || (0, a(697006).ut)(o.parentAgentId))) return a(360851).N.createChildStore(e, {
                            table: a(832375).C0E,
                            id: o.parentAgentId,
                            spaceId: e.id
                        })
                    }, [o.parentAgentId]),
                    f = (0, a(682985).K8)(() => o.parentAgentId === a(180139).Lj ? d.formatMessage(i.personalAgentName) : (null == h ? void 0 : h.getName()) ? ? d.formatMessage(i.agentFallbackName), [o.parentAgentId, d, h]),
                    y = (0, a(284376).gg)({
                        threadStore: t,
                        step: o
                    }),
                    x = (0, n.useCallback)(() => {
                        if (!g) return;
                        let e = (0, a(368584).C3)(l.RouterStore.state.route, g.id);
                        e ? u({
                            environment: l,
                            url: e,
                            redirect: !1
                        }) : (0, a(862451).navigateToInferenceTranscriptRoute)({
                            environment: l,
                            oldThreadStore: t,
                            newThreadStore: g,
                            isAgent: !0
                        })
                    }, [g, l, u, t]),
                    [b, v] = (0, n.useState)(!1),
                    S = (0, n.useCallback)(() => {
                        v(e => !e)
                    }, []);
                return p && g ? (0, r.jsxs)(a(4458).VP, {
                    paddingTop: 12,
                    paddingInlineEnd: 12,
                    paddingBottom: 12,
                    paddingInlineStart: 12,
                    marginBottom: 16,
                    children: [(0, r.jsxs)(a(988022).p, {
                        style: s.pill,
                        hoveredStyle: s.pillHover,
                        pressedStyle: s.pillPressed,
                        onClick: x,
                        children: [(0, r.jsx)(a(16275).I, {
                            icon: a(241996).s,
                            colorVariant: "secondary"
                        }), (0, r.jsx)(a(111010).D, {
                            styleKey: "bodyRegular",
                            style: s.title,
                            children: (null == m ? void 0 : m.trim()) || d.formatMessage(i.untitledThread)
                        })]
                    }), (0, r.jsx)("div", {
                        style: s.verticalDivider
                    }), (0, r.jsxs)("div", {
                        style: s.messageCard,
                        children: [(0, r.jsxs)(a(988022).p, {
                            style: s.messageHeader,
                            onClick: S,
                            "aria-expanded": b,
                            children: [(0, r.jsx)(a(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "secondary",
                                children: d.formatMessage(i.instructionsFrom, {
                                    agentName: f
                                })
                            }), (0, r.jsx)(a(16275).I, {
                                icon: a(36663).arrowChevronSingleDownFillIcon,
                                colorVariant: "secondary",
                                style: { ...s.messageChevron,
                                    ...b ? s.messageChevronExpanded : void 0
                                }
                            })]
                        }), (0, r.jsx)("div", {
                            style: { ...s.instructionsContainer,
                                maxHeight: 1e3 * !!b
                            },
                            children: (0, r.jsx)(a(111010).D, {
                                styleKey: "bodyRegular",
                                children: y
                            })
                        })]
                    })]
                }) : null
            }
        },
        316836: (e, t, a) => {
            a.d(t, {
                S: () => n
            }), a(944114);
            class n {
                static text = e => new s(e);
                static textValue = e => "string" == typeof e ? this.text(e).build() : e;
                static mentionDate = e => new l(e);
                static mentionUser = e => new c(e);
                static mentionGroup = (e, t) => new m(e, t);
                static mentionTeam = (e, t, a) => new h(e, t, a);
                static mentionBot = e => new c(e);
                static mentionPage = e => new c(e);
                static mentionLink = e => new d(e);
                static mentionCustomEmoji = e => new c(e);
                static mentionTemplateVariable = e => new u(e);
                static mentionFormulaContextVariable = e => new p(e);
                static mentionFormulaPagePropertyVariable = e => new g(e);
                static mentionCitation = e => new f(e);
                static equation = e => new o(e);
                static concat = e => new r(e)
            }
            class r {
                constructor(e) {
                    this.tokens = e
                }
                build = () => {
                    let e = [];
                    for (let t of this.tokens) {
                        let a = t.build();
                        e.push(a[0])
                    }
                    return e
                }
            }
            class i {
                styles = {};
                highlight = void 0;
                linkData = void 0;
                suggestionInsertTextDiscussionId;
                suggestionRemoveTextDiscussionId;
                constructor(e) {
                    this.onBuild = e
                }
                bold = () => (this.styles[a(247438).Ifu.Bold] = !0, this);
                italic = () => (this.styles[a(247438).Ifu.Italic] = !0, this);
                strike = () => (this.styles[a(247438).Ifu.Strike] = !0, this);
                code = () => (this.styles[a(247438).Ifu.Code] = !0, this);
                underline = () => (this.styles[a(247438).Ifu.Underline] = !0, this);
                color = e => (this.highlight = e, this);
                link = e => (this.linkData = e, this);
                suggestionInsertText = e => (this.suggestionInsertTextDiscussionId = e, this);
                suggestionRemoveText = e => (this.suggestionRemoveTextDiscussionId = e, this);
                build = () => {
                    let e = [];
                    for (let t of (0, a(722371).objectKeys)(this.styles)) e.push([t]);
                    return this.highlight && e.push([a(247438).Ifu.Highlight, this.highlight]), this.linkData && e.push([a(247438).Ifu.Link, this.linkData]), this.suggestionInsertTextDiscussionId && e.push([a(247438).Ifu.SuggestionInsertText, this.suggestionInsertTextDiscussionId]), this.suggestionRemoveTextDiscussionId && e.push([a(247438).Ifu.SuggestionRemoveText, this.suggestionRemoveTextDiscussionId]), this.onBuild(e)
                }
            }
            class s extends i {
                url = void 0;
                constructor(e) {
                    super(t => (this.url && t.unshift(a(247438).Sez(this.url)), t.length > 0) ? [
                        [e, t]
                    ] : [
                        [e]
                    ])
                }
                link = e => (this.url = e, this)
            }
            class o extends i {
                constructor(e) {
                    super(t => [a(247438).G0H(e, t)])
                }
            }
            class l extends i {
                constructor(e) {
                    super(t => {
                        let n;
                        "date" in e ? n = this.getDateAnnotationData(e.date, e.reminder) : "time" in e ? n = this.getTimeAnnotationData(e.time, e.timeZone, e.reminder) : (0, a(722371).HB)(e);
                        let r = a(247438).Ww9(n);
                        return [a(247438).wmz(r, t)]
                    })
                }
                getDateAnnotationData(e, t) {
                    if (!Array.isArray(e)) return {
                        type: "date",
                        start_date: this.getDateString(e),
                        reminder: t
                    }; {
                        let [a, n] = e;
                        return {
                            type: "daterange",
                            start_date: this.getDateString(a),
                            end_date: this.getDateString(n),
                            reminder: t
                        }
                    }
                }
                getTimeAnnotationData(e, t, a) {
                    if (!Array.isArray(e)) return {
                        type: "datetime",
                        start_date: this.getDateString(e),
                        start_time: this.getTimeString(e),
                        time_zone: t ? ? "Etc/GMT",
                        reminder: a
                    }; {
                        let [n, r] = e;
                        return {
                            type: "datetimerange",
                            start_date: this.getDateString(n),
                            start_time: this.getTimeString(n),
                            end_date: this.getDateString(r),
                            end_time: this.getTimeString(r),
                            time_zone: t ? ? "Etc/GMT",
                            reminder: a
                        }
                    }
                }
                getDateString = e => e.toISOString().split("T")[0];
                getTimeString = e => e.toISOString().split("T")[1].slice(0, 5)
            }
            class d extends i {
                constructor(e) {
                    super(t => {
                        let n = a(247438).gru(e);
                        return [a(247438).wmz(n, t)]
                    })
                }
            }
            class c extends i {
                constructor(e) {
                    super(t => {
                        let n;
                        return e.table === a(514214).oo ? n = a(247438).P4h(e.id) : e.table === a(890920).GP ? n = a(247438).Vb6(e.id) : e.table === a(682956).ev ? n = a(247438).ld4(e.id, e.spaceId) : e.table === a(996034).e ? n = a(247438).XTT(e) : (0, a(722371).HB)(e), [a(247438).wmz(n, t)]
                    })
                }
            }
            class u extends i {
                constructor(e) {
                    super(t => {
                        let n = a(247438).Ii$({
                            type: e
                        });
                        return [a(247438).wmz(n, t)]
                    })
                }
            }
            class p extends i {
                constructor(e) {
                    super(t => {
                        let n = a(247438).CA$(e);
                        return [a(247438).wmz(n, t)]
                    })
                }
            }
            class g extends i {
                constructor(e) {
                    super(t => {
                        let n = a(247438).ESw(e);
                        return [a(247438).wmz(n, t)]
                    })
                }
            }
            class m extends i {
                constructor(e, t) {
                    super(n => {
                        let r = a(247438).dWL(e, t);
                        return [a(247438).wmz(r, n)]
                    })
                }
            }
            class h extends i {
                constructor(e, t, n) {
                    super(r => {
                        let i = a(247438).DH3(e, t, n);
                        return [a(247438).wmz(i, r)]
                    })
                }
            }
            class f extends i {
                constructor(e) {
                    super(t => {
                        let n = a(247438).X$(e);
                        return [a(247438).wmz(n, t)]
                    })
                }
            }
        },
        382885: (e, t, a) => {
            a.d(t, {
                o: () => n
            });

            function n(e = {}) {
                let {
                    gradientMaskHeight: t = 32,
                    isScrolledToTop: a = !0,
                    isScrolledToBottom: r = !1,
                    excludeScrollbarFromFade: i = !1
                } = e, s = `linear-gradient(to bottom,
		${a?"black 0px":"transparent 0px"},
		black ${t}px,
		black calc(100% - ${t}px),
		${r?"black 100%":"transparent 100%"})`, o = i ? `${s}, linear-gradient(black, black)` : s, l = i ? "calc(100% - 16px) 100%, 16px 100%" : "100% 100%", d = i ? "0 0, 100% 0" : "0 0", c = i ? "no-repeat, no-repeat" : "no-repeat";
                return {
                    maskImage: o,
                    maskSize: l,
                    maskPosition: d,
                    maskRepeat: c,
                    WebkitMaskImage: o,
                    WebkitMaskSize: l,
                    WebkitMaskPosition: d,
                    WebkitMaskRepeat: c
                }
            }
        },
        397171: (e, t, a) => {
            a.d(t, {
                z: () => o
            }), a(296540);
            var n = a(474848);
            let r = {
                    display: "inline"
                },
                i = {
                    display: "inline",
                    verticalAlign: "baseline",
                    cursor: "pointer"
                },
                s = {
                    display: "inline"
                };

            function o(e) {
                let {
                    reason: t,
                    cta: o
                } = e;
                return (0, n.jsx)(a(135140).I, {
                    message: "runawayCreditUsage" === t ? (0, n.jsx)(a(111010).D, {
                        as: "span",
                        styleKey: "bodyLgRegular",
                        colorVariant: "secondary",
                        style: r,
                        children: (0, n.jsx)(a(109939).sA, {
                            id: "workflows.agentCreditLimitChatState.runawayCreditUsage",
                            defaultMessage: "We think this agent might be running away. We auto-paused it for you."
                        })
                    }) : o ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(a(111010).D, {
                            as: "span",
                            styleKey: "bodyLgRegular",
                            colorVariant: "secondary",
                            style: r,
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "workflows.agentCreditLimitChatState.agentPrefix",
                                defaultMessage: "Custom agent has reached its monthly limit."
                            })
                        }), " ", (0, n.jsx)(a(428217).V, {
                            onClick: o.onClick,
                            disableUnderline: !0,
                            style: i,
                            hoverColor: "blue",
                            color: a(632079).Tj.blue.text.accentPrimary,
                            children: (0, n.jsx)(a(111010).D, {
                                as: "span",
                                styleKey: "bodyLgMedium",
                                style: s,
                                children: o.label
                            })
                        }), " ", (0, n.jsx)(a(111010).D, {
                            as: "span",
                            styleKey: "bodyLgRegular",
                            colorVariant: "secondary",
                            style: r,
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "workflows.agentCreditLimitChatState.agentRestoreAccess",
                                defaultMessage: "to restore access."
                            })
                        })]
                    }) : (0, n.jsx)(a(111010).D, {
                        as: "span",
                        styleKey: "bodyLgRegular",
                        colorVariant: "secondary",
                        style: r,
                        children: (0, n.jsx)(a(109939).sA, {
                            id: "workflows.agentCreditLimitChatState.agentIncreaseLimit",
                            defaultMessage: "Custom agent has reached its monthly limit. Increase credit limit to restore access."
                        })
                    })
                })
            }
        },
        414274: (e, t, a) => {
            a.d(t, {
                u: () => o,
                c: () => d
            }), a(898992), a(354520);
            var n = () => a(546605),
                r = () => a(355095);
            class i extends r().o {
                cursor;
                environment;
                limit;
                spaceId;
                includeWorkflows;
                includeWriterChats;
                constructor(e) {
                    super(void 0), this.environment = e.environment, this.spaceId = e.spaceId, this.limit = e.limit, this.includeWorkflows = e.includeWorkflows ? ? !1, this.includeWriterChats = e.includeWriterChats ? ? !1
                }
                async refresh() {
                    this.cursor = void 0, await super.refresh()
                }
                async fetch() {
                    let e = e => this.environment.api.callCellCompatibleApi(e),
                        t = this.cursor;
                    this.abortController = new AbortController;
                    try {
                        let n = await e({
                            eventName: "getInferenceTranscriptsForUser",
                            environment: this.environment,
                            cellNavigation: {
                                spaceId: this.spaceId
                            },
                            data: {
                                threadParentPointer: {
                                    table: a(832375).NXh,
                                    id: this.spaceId,
                                    spaceId: this.spaceId
                                },
                                limit: this.limit,
                                cursor: this.cursor,
                                includeWorkflowThreads: !!this.includeWorkflows || void 0,
                                includeWriterChats: this.includeWriterChats
                            },
                            abortSignal: this.abortController.signal
                        });
                        if ("failed" === n.type) return this.cursor = void 0, {
                            rows: void 0 === t ? this.rowsStore.getState().rows ? ? [] : [],
                            hasMore: !1
                        };
                        let {
                            nextCursor: r,
                            threadIds: i,
                            unreadThreadIds: s
                        } = n.data;
                        return this.cursor = r, void 0 !== s && a(211607).O.setUnreadStateForThreads({
                            spaceId: this.spaceId,
                            threadIds: i,
                            unreadThreadIds: s
                        }), {
                            rows: i,
                            hasMore: !!r
                        }
                    } finally {
                        this.abortController = void 0
                    }
                }
            }

            function s(e, t) {
                return `${e}|${t??"default"}`
            }

            function o(e) {
                let {
                    includeWorkflowsEffective: t,
                    includeWriterChats: a
                } = e;
                return [t ? "include_workflows_effective" : "exclude_workflows_effective", a ? "include_writer_chats" : "exclude_writer_chats"].join("|")
            }
            class l extends n().Store {
                getInitialState() {
                    return {
                        entries: new Map
                    }
                }
                getFetchState(e, t) {
                    var a;
                    return (null == (a = this.state.entries.get(s(e, t))) ? void 0 : a.fetchState) ? ? "idle"
                }
                getListSource({
                    spaceId: e,
                    environment: t,
                    initialFetchState: a = "idle",
                    includeWorkflows: n = !1,
                    queryKey: r,
                    includeWriterChats: o = !1
                }) {
                    let l = s(e, r),
                        d = this.state.entries.get(l);
                    if (d) return d.listSource;
                    let c = new i({
                        environment: t,
                        spaceId: e,
                        includeWorkflows: n,
                        includeWriterChats: o
                    });
                    return this.update(e => {
                        let t = new Map(e.entries);
                        return t.set(l, {
                            listSource: c,
                            fetchState: a
                        }), {
                            entries: t
                        }
                    }), c
                }
                async refresh(e) {
                    let {
                        spaceId: t,
                        environment: a,
                        includeWorkflows: n = !1,
                        includeWriterChats: r = !1,
                        queryKey: i
                    } = e, s = this.getListSource({
                        spaceId: t,
                        environment: a,
                        includeWorkflows: n,
                        includeWriterChats: r,
                        queryKey: i
                    });
                    this.setFetchState(t, "refreshing", i);
                    try {
                        await s.refresh()
                    } finally {
                        this.setFetchState(t, "idle", i)
                    }
                }
                async loadMore(e) {
                    let {
                        spaceId: t,
                        environment: a,
                        includeWorkflows: n = !1,
                        includeWriterChats: r = !1,
                        queryKey: i
                    } = e, s = this.getListSource({
                        spaceId: t,
                        environment: a,
                        includeWorkflows: n,
                        includeWriterChats: r,
                        queryKey: i
                    });
                    if (s.rowsStore.getState().hasMore) {
                        this.setFetchState(t, "loadingMore", i);
                        try {
                            await s.loadMore()
                        } finally {
                            this.setFetchState(t, "idle", i)
                        }
                    }
                }
                prependThreadId(e, t, a) {
                    let n = this.state.entries.get(s(e, a));
                    if (!n) return;
                    let r = n.listSource.rowsStore.getState(),
                        i = r.rows ? ? [];
                    if (i.includes(t)) return;
                    let o = [t, ...i.filter(e => e !== t)];
                    n.listSource.rowsStore.setState({
                        rows: o,
                        hasMore: r.hasMore
                    })
                }
                clearEntry(e) {
                    let {
                        spaceId: t,
                        queryKey: a
                    } = e;
                    this.update(e => {
                        let n = s(t, a);
                        if (!e.entries.has(n)) return e;
                        let r = new Map(e.entries);
                        return r.delete(n), {
                            entries: r
                        }
                    })
                }
                setFetchState(e, t, a) {
                    this.update(n => {
                        let r = s(e, a),
                            i = n.entries.get(r);
                        if (!i) return n;
                        let o = new Map(n.entries);
                        return o.set(r, { ...i,
                            fetchState: t
                        }), {
                            entries: o
                        }
                    })
                }
            }
            let d = new l
        },
        421405: (e, t, a) => {
            a.d(t, {
                d: () => n,
                w: () => r
            });
            let n = 48,
                r = 18
        },
        457655: (e, t, a) => {
            a.d(t, {
                b: () => i
            }), a(296540);
            var n = a(474848);
            let r = {
                divider: {
                    width: 1,
                    height: 16,
                    margin: "0px 4px",
                    background: a(632079).Tj.gray.background.secondary,
                    borderRadius: 2
                }
            };

            function i() {
                return (0, n.jsx)("div", {
                    style: r.divider
                })
            }
        },
        471286: (e, t, a) => {
            a.r(t), a.d(t, {
                ChatSidebarModeButton: () => d,
                ChatSidebarModeButtonPopupContents: () => c,
                getChatSidebarModeOptions: () => u
            }), a(944114), a(581454);
            var n = a(296540);
            let r = (0, a(109939).YK)({
                sidebar: {
                    defaultMessage: "Sidebar",
                    id: "chatSidebar.mode.sidebar"
                },
                popup: {
                    defaultMessage: "Floating",
                    id: "chatSidebar.mode.popup"
                },
                full: {
                    defaultMessage: "Full",
                    id: "chatSidebar.mode.full"
                }
            });

            function i(e) {
                switch (e) {
                    case "sidebar":
                        return a(357055).A;
                    case "popup":
                    case "full":
                        return a(530993).q;
                    default:
                        (0, a(722371).HB)(e)
                }
            }
            var s = a(474848);
            let o = (0, a(109939).YK)({
                    switchMode: {
                        id: "chatSidebar.switchMode.button",
                        defaultMessage: "Switch chat mode"
                    },
                    fullscreen: {
                        id: "chatSidebar.fullscreen.button",
                        defaultMessage: "Full screen"
                    }
                }),
                l = {
                    minWidth: 190
                };

            function d(e) {
                let {
                    aiChatFeatureController: t
                } = e, n = (0, a(109939).tz)(), r = (0, a(682985).K8)(() => a(562733).zI.state.chatPanelMode, []), d = u(), p = (0, a(719298).v)({
                    shape: t.headerButtonShape,
                    aiChatFeatureController: t
                });
                return t.supportsChatSidebarModes ? (0, s.jsx)(a(656252).A, {
                    popupType: a(182718).nl.Popup,
                    alignmentToOrigin: "center",
                    placementToOrigin: "bottom",
                    style: l,
                    originGap: 0,
                    content: e => (0, s.jsx)(c, {
                        parent: e,
                        options: d
                    }),
                    children: e => (0, s.jsx)(a(51831).m, {
                        content: () => (0, s.jsx)(a(109939).sA, { ...o.switchMode
                        }),
                        children: t => (0, s.jsx)(a(374533).A, { ...e,
                            ...t,
                            icon: () => (0, s.jsx)(a(16275).I, {
                                icon: i(r)
                            }),
                            style: p.iconButton,
                            ariaLabel: n.formatMessage(o.switchMode),
                            testId: "switch-chat-mode-button"
                        })
                    })
                }) : null
            }

            function c(e) {
                let t, {
                        options: r,
                        parent: i,
                        onSelectMode: l
                    } = e,
                    d = (0, a(533992).v3)(),
                    c = (0, a(972740).L)(),
                    u = (0, a(682985).K8)(() => a(562733).zI.state.chatPanelMode, []);
                t = a(986939).A.isMobile ? {
                    menuType: a(649476).gu.ActionSheet
                } : {
                    menuType: a(649476).gu.Popup,
                    width: 220
                };
                let p = (0, n.useCallback)(e => {
                        (0, a(168682).M)({
                            environment: d,
                            chatPanelMode: e,
                            trackAnalytics: !0,
                            saveUserPreference: !0
                        }), i.close(), requestAnimationFrame(() => {
                            null == l || l(e)
                        })
                    }, [i, l, d]),
                    g = (0, a(109939).tz)(),
                    m = (0, a(83208).X)("agent_popup_fs"),
                    h = (0, a(682985).K8)(() => r.map((e, t) => {
                        let n = e.key;
                        return {
                            key: t,
                            render: t => (0, s.jsx)(a(95582).A, { ...t,
                                disabled: !1,
                                title: e.title,
                                icon: e.icon,
                                isChecked: (0, a(381453).n4)(e.key, u)
                            }),
                            action: () => p(n)
                        }
                    }), [r, u, p]),
                    f = (0, a(682985).K8)(() => {
                        let e = (0, a(548124).getChatPanelState)(d),
                            t = c && e ? (0, a(548124).threadStoreGivenRouteData)({
                                spaceStore: c,
                                chatPanelState: e
                            }) : void 0;
                        return {
                            key: 0,
                            render: e => (0, s.jsx)(a(95582).A, { ...e,
                                disabled: !1,
                                title: g.formatMessage(o.fullscreen),
                                icon: (0, s.jsx)(a(16275).I, {
                                    icon: a(89873).o
                                }),
                                isChecked: !1
                            }),
                            action: () => {
                                a(305721).trackAgentToggleChatMode({
                                    environment: d,
                                    chatMode: "full"
                                }), (0, a(862451).navigateToInferenceTranscriptRoute)({
                                    environment: d,
                                    oldThreadStore: t,
                                    newThreadStore: t
                                }), i.close()
                            }
                        }
                    }, [g, i, d, c]),
                    y = (0, n.useMemo)(() => {
                        let e = [{
                            key: "panel",
                            render: e => (0, s.jsx)(a(844565).A, {
                                enableActionSheetTitle: !0,
                                ...e
                            }),
                            items: h
                        }];
                        return m && e.push({
                            key: "fullscreen",
                            render: e => (0, s.jsx)(a(844565).A, {
                                topBorder: !0,
                                ...e
                            }),
                            items: [f]
                        }), e
                    }, [m, h, f]);
                return (0, s.jsx)(a(747369).A, { ...t,
                    children: (0, s.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        sections: y,
                        initialFocus: 0
                    })
                })
            }

            function u() {
                return ["sidebar", "popup"].map(e => ({
                    key: e,
                    type: "button",
                    title: function(e) {
                        switch (e) {
                            case "sidebar":
                                return a(962299).A.formatMessage(r.sidebar);
                            case "popup":
                                return a(962299).A.formatMessage(r.popup);
                            case "full":
                                return a(962299).A.formatMessage(r.full);
                            default:
                                (0, a(722371).HB)(e)
                        }
                    }(e),
                    icon: (0, s.jsx)(a(16275).I, {
                        icon: i(e)
                    })
                }))
            }
        },
        476972: (e, t, a) => {
            a.d(t, {
                A: () => u,
                c: () => S
            });
            var n = a(296540),
                r = a(474848);
            let i = {
                    marginBottom: 10
                },
                s = { ...i,
                    width: "100%",
                    height: "100%",
                    padding: 10,
                    alignItems: "top",
                    borderRadius: 0
                },
                o = (0, a(109939).YK)({
                    requestAccessMessagePlaceholder: {
                        defaultMessage: "Message (optional)",
                        id: "requestAccessForm.messageInput.placeholder"
                    },
                    rateLimitError: {
                        defaultMessage: "You have recently requested access to this page.",
                        id: "requestAccessForm.errorMessage.rateLimit"
                    },
                    currentUserNotFound: {
                        defaultMessage: "Current user not found.",
                        id: "requestAccessForm.errorMessage.currentUserNotFound"
                    }
                });

            function l() {
                return (0, r.jsx)(a(109939).sA, {
                    defaultMessage: "Cancel",
                    id: "requestAccessForm.cancelButton.label"
                })
            }
            let d = a(546605).Store.createClass(0, {
                    name: "RequestAttemptStore"
                }),
                c = a(546605).Store.createClass(void 0, {
                    name: "MessageStore"
                }),
                u = function(e) {
                    let t = (0, a(533992).v3)(),
                        i = (0, a(533992).WS)(),
                        s = (0, a(682985).uB)(e.popupStore, a(510969).A),
                        o = (0, a(682985).uB)(void 0, c),
                        l = (0, a(682985).uB)(void 0, d),
                        u = (0, n.useCallback)(() => f(s), [s]),
                        p = (0, n.useCallback)(() => (0, r.jsx)(v, { ...e,
                            requestAttemptStore: l,
                            messageStore: o,
                            buttonPopupStore: s
                        }), [e, l, o, s]),
                        g = (0, a(682985).K8)(() => l.state > 0, [l]),
                        m = (0, a(682985).K8)(() => s.state.open, [s]);
                    if ("current-actor-to-block" === e.type) return (0, r.jsx)(S, {
                        type: "page",
                        block: e.block,
                        flowId: e.flowId,
                        buttonType: e.buttonType
                    });
                    if ("current-actor-to-collection" === e.type) return (0, r.jsx)(S, {
                        type: "collection",
                        collection: e.collection,
                        flowId: e.flowId,
                        buttonType: e.buttonType
                    });
                    let h = "primary" === e.buttonType ? a(912946).A : "plain" === e.buttonType ? a(988022).p : a(548436).A,
                        y = i ? (0, r.jsx)(a(182718).zD, {
                            popupType: a(423291).n.SlideUp,
                            open: m,
                            content: p
                        }) : (0, r.jsx)(a(556809).a, {
                            open: m,
                            onDismiss: u,
                            children: p()
                        });
                    return "current-actor-to-space-via-onboarding" === e.type ? y : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(h, {
                            size: "plain" === e.buttonType ? "md" : "lg",
                            colorPalette: e.buttonType && ["primary", "plain"].includes(e.buttonType) ? "blue" : void 0,
                            disabled: g,
                            onClick: () => {
                                var n, r;
                                return function(e, t) {
                                    let {
                                        environment: n,
                                        flowId: r,
                                        type: i,
                                        source: s,
                                        spaceId: o,
                                        pageId: l
                                    } = e;
                                    "trusted_domain_page" === s && o && a(928658).w(n, {
                                        spaceId: o,
                                        pageId: l,
                                        joinSpaceMethod: "request_to_join"
                                    }), "current-actor-to-block" === i ? (0, a(498113).X)(n, {
                                        button_name: "request-access",
                                        flow_id: r,
                                        request_access_type: "page"
                                    }) : "current-actor-to-space-via-team" === i && (0, a(498113).X)(n, {
                                        button_name: "request-access",
                                        flow_id: r,
                                        request_access_type: "team"
                                    }), t.setState({
                                        open: !0
                                    })
                                }({
                                    environment: t,
                                    flowId: e.flowId,
                                    type: e.type,
                                    source: e.source,
                                    pageId: null == (n = e.block) ? void 0 : n.id,
                                    spaceId: null == (r = e.block) ? void 0 : r.spaceId
                                }, s)
                            },
                            style: "outline" === e.buttonType ? { ...e.buttonStyle,
                                fontWeight: a(699422).Wy.semibold
                            } : e.buttonStyle,
                            children: g ? (0, r.jsx)(a(109939).sA, {
                                id: "fullPageError.requestAccessButton.requested",
                                defaultMessage: "Requested access"
                            }) : (0, r.jsxs)(a(4458).fI, {
                                gap: 4,
                                alignItems: "center",
                                justifyContent: "center",
                                children: [e.icon, w(e.type)]
                            })
                        }), y]
                    })
                },
                p = {
                    color: "rgba(235, 87, 87, 1)",
                    textAlign: "center",
                    width: "100%",
                    marginBottom: 16
                };

            function g({
                result: e
            }) {
                return e && e.error ? (0, r.jsx)("div", {
                    style: p,
                    children: e.error
                }) : null
            }
            async function m(e) {
                let {
                    messageStore: t,
                    buttonPopupStore: n,
                    type: r,
                    teamId: i,
                    requestAttempt: s,
                    environment: l,
                    currentUserId: d,
                    intl: c,
                    flowId: u
                } = e;
                if (0 === s) return;
                let p = t.state;
                async function g() {
                    if ("current-actor-to-block" === r) return l.api.callApi({
                        eventName: "requestAccess",
                        environment: l,
                        data: {
                            type: "current-actor-to-block",
                            block: e.block,
                            message: p
                        }
                    });
                    if ("current-actor-to-collection" === r) return l.api.callApi({
                        eventName: "requestAccess",
                        environment: l,
                        data: {
                            type: "current-actor-to-collection",
                            collection: e.collection,
                            message: p
                        }
                    });
                    if ("current-actor-to-space-via-team" === r) return l.api.callApi({
                        eventName: "requestAccess",
                        environment: l,
                        data: {
                            type: "current-actor-to-space-via-team",
                            teamId: i,
                            message: p
                        }
                    });
                    if ("current-actor-to-space-via-block" === r) {
                        if (!d) return;
                        return l.api.callApi({
                            eventName: "requestAccess",
                            environment: l,
                            data: {
                                type: "actor-to-space",
                                spaceId: e.block.spaceId,
                                message: p,
                                forActorId: d,
                                attributes: {
                                    add_permissions_on_approval: !1,
                                    origin_type: "trusted_domain_page"
                                }
                            }
                        })
                    }
                    if ("current-actor-to-space-via-onboarding" === r) {
                        if (!d) return;
                        return l.api.callApi({
                            eventName: "requestAccess",
                            environment: l,
                            data: {
                                type: "actor-to-space",
                                spaceId: e.spaceId,
                                message: p,
                                forActorId: d,
                                attributes: {
                                    add_permissions_on_approval: !1,
                                    origin_type: "onboarding"
                                }
                            }
                        })
                    }
                }
                let m = await g();
                if (!m) return {
                    error: c.formatMessage(o.currentUserNotFound)
                };
                if ("success" !== m.type) {
                    var h;
                    return (null == (h = m.body) ? void 0 : h.name) === "UserRateLimitResponse" ? {
                        error: c.formatMessage(o.rateLimitError)
                    } : {
                        error: (0, a(922271).H)(c, m)
                    }
                }
                return "current-actor-to-block" === r ? a(594311).T_({
                    request_access_type: "page",
                    flow_id: u,
                    requestId: m.data.requestId
                }) : "current-actor-to-space-via-team" === r ? a(594311).T_({
                    request_access_type: "team",
                    flow_id: u
                }) : "current-actor-to-space-via-block" === r ? a(594311).T_({
                    request_access_type: "space",
                    flow_id: u,
                    source: "trusted_domain_page"
                }) : "current-actor-to-collection" === r ? a(594311).T_({
                    request_access_type: "collection",
                    flow_id: u,
                    requestId: m.data.requestId
                }) : "current-actor-to-space-via-onboarding" === r ? a(594311).T_({
                    request_access_type: "space",
                    flow_id: u,
                    source: "onboarding"
                }) : (0, a(722371).HB)(r), n.reset(), {
                    value: !0
                }
            }

            function h(e) {
                e.update(e => e + 1)
            }

            function f(e) {
                return e.setState({
                    open: !1
                })
            }
            let y = {
                style0: {
                    fontSize: 16,
                    fontWeight: a(699422).Wy.semibold,
                    marginBottom: 16
                },
                style1: {
                    padding: "16px"
                },
                style2: {
                    marginBottom: 16,
                    padding: "8px 12px",
                    alignItems: "flex-start"
                }
            };

            function x({
                error: e,
                result: t,
                ready: l,
                requestAttemptStore: d,
                messageStore: c,
                type: u
            }) {
                let p = (0, a(109939).tz)(),
                    m = (0, a(533992).WS)(),
                    f = (0, n.useCallback)(() => h(d), [d]),
                    b = (0, n.useCallback)(e => {
                        c.setState(e.target.value)
                    }, [c]),
                    v = (0, a(682985).K8)(() => !!(0 === d.state || l && t && t.error), [d, l, t]),
                    S = (0, a(682985).K8)(() => c.state || "", [c]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [m ? void 0 : (0, r.jsx)("div", {
                        style: y.style0,
                        children: w(u)
                    }), (0, r.jsx)(a(36481).p, {
                        format: m ? "transparent" : void 0,
                        textarea: !0,
                        value: S,
                        onChange: b,
                        disabled: !v,
                        placeholder: p.formatMessage(o.requestAccessMessagePlaceholder),
                        style: { ...m ? { ...s,
                                ...y.style1
                            } : { ...i,
                                ...y.style2
                            }
                        }
                    }), m ? void 0 : (0, r.jsx)(a(912946).A, {
                        colorPalette: "blue",
                        size: "lg",
                        disabled: !v,
                        onClick: f,
                        style: i,
                        children: (0, r.jsx)(a(109939).sA, {
                            defaultMessage: "Send request",
                            id: "requestAccessForm.sendRequestButton.label"
                        })
                    }), (0, r.jsx)(g, {
                        result: t
                    })]
                })
            }
            let b = {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evently",
                alignItems: "stretch",
                padding: "20px 28px 24px",
                width: "340px"
            };

            function v(e) {
                let {
                    requestAttemptStore: t,
                    messageStore: i,
                    buttonPopupStore: s
                } = e, o = (0, a(533992).v3)(), d = (0, a(533992).WS)(), c = (0, a(109939).tz)(), u = (0, n.useCallback)((a, n, s) => (0, r.jsx)(x, {
                    requestAttemptStore: t,
                    messageStore: i,
                    error: a,
                    result: n,
                    ready: s,
                    type: e.type
                }), [t, i, e.type]), p = (0, a(345776).T)(), g = (0, n.useCallback)(t => m({ ...e,
                    requestAttempt: t,
                    environment: o,
                    intl: c,
                    currentUserId: p
                }), [o, c, e, p]), y = (0, n.useCallback)(() => h(t), [t]), v = (0, n.useCallback)(() => f(s), [s]), S = (0, a(682985).O$)(t);
                return d ? (0, r.jsx)(a(747369).A, {
                    menuType: a(649476).gu.Modal,
                    whiteBackground: !0,
                    title: w(e.type),
                    left: l(),
                    onClickLeft: v,
                    right: (0, r.jsx)(a(109939).sA, {
                        id: "requestAccessForm.mobileSend.label",
                        defaultMessage: "Send"
                    }),
                    onClickRight: y,
                    children: (0, r.jsx)(a(519451).A, {
                        debugName: "RequestAccessForm",
                        capture: !0,
                        children: (0, r.jsx)(a(4458).VP, {
                            justifyContent: "stretch",
                            alignItems: "stretch",
                            width: "100%",
                            height: "100%",
                            children: (0, r.jsx)(a(814255).A, {
                                request: S,
                                performRequest: g,
                                render: u
                            })
                        })
                    })
                }) : (0, r.jsx)(a(519451).A, {
                    debugName: "RequestAccessForm",
                    capture: !0,
                    children: (0, r.jsxs)("div", {
                        style: b,
                        children: [(0, r.jsx)(a(814255).A, {
                            request: S,
                            performRequest: g,
                            render: u
                        }), (0, r.jsx)(a(548436).A, {
                            size: "lg",
                            onClick: v,
                            children: l()
                        })]
                    })
                })
            }

            function S(e) {
                let t, {
                        type: i,
                        flowId: s,
                        buttonType: o,
                        labelMessage: l
                    } = e,
                    d = (0, a(533992).v3)(),
                    c = "outline" === o ? a(548436).A : a(912946).A,
                    [u, p] = (0, n.useState)(!1),
                    [g, m] = (0, n.useState)(!1),
                    h = e.customIsAccessRequestPending ? ? u,
                    f = e.customSetIsAccessRequestPending ? ? p,
                    y = {
                        attributes: {
                            add_permissions_on_approval: !1,
                            role: (0, a(682985).K8)(() => (0, a(216260).dL)(), []) ? "reader" : "read_and_write"
                        },
                        message: void 0
                    };
                "page" === i ? t = { ...y,
                    type: "current-actor-to-block",
                    block: {
                        id: e.block.id,
                        spaceId: e.block.spaceId
                    }
                } : "collection" === i ? t = { ...y,
                    type: "current-actor-to-collection",
                    collection: {
                        id: e.collection.id,
                        spaceId: e.collection.spaceId
                    }
                } : (0, a(722371).HB)(i);
                let x = (0, n.useCallback)(async () => {
                    var e;
                    let n = await d.api.callApi({
                        eventName: "requestAccess",
                        environment: d,
                        data: t
                    });
                    "success" === n.type && n.data.request ? (f(!0), a(594311).T_({
                        request_access_type: i,
                        previous_access_level: "none",
                        requested_access_level: "read_and_write",
                        flow_id: s,
                        requestId: n.data.requestId
                    })) : "failed" === n.type && (null == (e = n.body) ? void 0 : e.name) === "UserRateLimitResponse" && m(!0)
                }, [d, t, f, i, s]);
                return (0, r.jsx)(c, {
                    size: "lg",
                    colorPalette: "outline" === o ? void 0 : "blue",
                    disabled: h || g,
                    disabledFeedback: h || g,
                    onClick: x,
                    style: e.buttonStyle,
                    children: h ? (0, r.jsx)(a(109939).sA, {
                        id: "fullPageError.requestAccessButton.edit.Requested",
                        defaultMessage: "Requested access"
                    }) : g ? (0, r.jsx)(a(109939).sA, {
                        id: "fullPageError.requestAccessButton.edit.TryAgain",
                        defaultMessage: "Try again later"
                    }) : l ? (0, r.jsx)(a(109939).sA, { ...l
                    }) : w("page" === i ? "current-actor-to-block" : "current-actor-to-collection")
                })
            }

            function w(e) {
                return "current-actor-to-space-via-block" === e || "current-actor-to-space-via-onboarding" === e ? (0, r.jsx)(a(109939).sA, {
                    defaultMessage: "Request membership",
                    id: "requestAccessForm.requestAccessToSpaceButton.title"
                }) : (0, r.jsx)(a(109939).sA, {
                    defaultMessage: "Request access",
                    id: "requestAccessForm.requestAccessButton.title"
                })
            }
        },
        487415: (e, t, a) => {
            a.d(t, {
                O: () => i
            }), a(296540);
            var n = a(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.42 3.97 12.16 12.06",
                    directional: !0,
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "m5.492 4.158 5.4 5.4a.625.625 0 0 1 0 .884l-5.4 5.4a.625.625 0 1 1-.884-.884L9.566 10 4.608 5.042a.625.625 0 1 1 .884-.884"
                        }), (0, n.jsx)("path", {
                            d: "m16.392 10.442-5.4 5.4a.625.625 0 0 1-.884-.884L15.066 10l-4.958-4.958a.625.625 0 0 1 .884-.884l5.4 5.4a.625.625 0 0 1 0 .884"
                        })]
                    })
                },
                i = (0, a(104509).wt)("arrowChevronDoubleForward", r, "default")
        },
        498113: (e, t, a) => {
            a.d(t, {
                X: () => n
            });

            function n(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "page_error_button_click",
                        eventProperties: t
                    }
                })
            }
        },
        503270: (e, t, a) => {
            a.d(t, {
                H: () => r
            });
            let n = new(a(815048)).O2("AdminReactJson", async () => Promise.all([a.e(75134), a.e(29151), a.e(64038), a.e(56809), a.e(83755)]).then(a.bind(a, 842179))),
                r = (0, a(815048)._h)(n, e => e.AdminReactJson)
        },
        530993: (e, t, a) => {
            a.d(t, {
                q: () => i
            }), a(296540);
            var n = a(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    directional: !0,
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M11.93 9.125a.5.5 0 0 0-.5.5v3.75a.5.5 0 0 0 .5.5h3.145a.5.5 0 0 0 .5-.5v-3.75a.5.5 0 0 0-.5-.5z"
                        }), (0, n.jsx)("path", {
                            d: "M4.5 4.125A2.125 2.125 0 0 0 2.375 6.25v7.5c0 1.174.951 2.125 2.125 2.125h11a2.125 2.125 0 0 0 2.125-2.125v-7.5A2.125 2.125 0 0 0 15.5 4.125zM3.625 6.25c0-.483.392-.875.875-.875h11c.483 0 .875.392.875.875v7.5a.875.875 0 0 1-.875.875h-11a.875.875 0 0 1-.875-.875z"
                        })]
                    })
                },
                i = (0, a(104509).wt)("peekCorner", r, "default")
        },
        533141: (e, t, a) => {
            a.d(t, {
                t: () => i
            }), a(296540);
            var n = a(474848);
            let r = {
                container: {
                    paddingBottom: 12,
                    opacity: .8,
                    pointerEvents: "none",
                    width: "100%"
                },
                box: {
                    borderRadius: 16,
                    backgroundColor: a(632079).Tj.gray.background.primary,
                    boxShadow: a(632079).Tj.shadow.outline.sm,
                    paddingTop: 4,
                    paddingInline: 8,
                    paddingBottom: 8,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                },
                addContextButtonWrapper: {
                    backgroundColor: a(632079).Tj.white,
                    borderRadius: 50,
                    display: "inline-flex"
                },
                addContextButton: {
                    borderRadius: 50,
                    fontSize: 12,
                    fontWeight: a(699422).Wy.regular,
                    height: 28,
                    padding: "2px 8px 2px 3px",
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                },
                centerArea: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    textAlign: "center",
                    padding: "12px 0"
                },
                attachButton: {
                    width: 28,
                    height: 28,
                    borderRadius: "50%"
                },
                sendButton: {
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    backgroundColor: a(632079).Tj.icon.secondary
                },
                sendIcon: {
                    fill: a(632079).Tj.text.inversePrimary
                }
            };

            function i() {
                let e = (0, a(109939).tz)();
                return (0, n.jsx)("div", {
                    style: r.container,
                    children: (0, n.jsxs)("div", {
                        style: r.box,
                        children: [(0, n.jsx)(a(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            children: (0, n.jsx)("div", {
                                style: r.addContextButtonWrapper,
                                children: (0, n.jsxs)(a(548436).A, {
                                    style: r.addContextButton,
                                    disabled: !0,
                                    children: [(0, n.jsx)(a(4458).fI, {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 20,
                                        height: 20,
                                        flexShrink: 0,
                                        children: (0, n.jsx)(a(16275).I, {
                                            icon: a(160184).U,
                                            size: "sm",
                                            colorVariant: "secondary"
                                        })
                                    }), (0, n.jsx)(a(111010).D, {
                                        styleKey: "captionRegular",
                                        colorVariant: "secondary",
                                        children: (0, n.jsx)(a(109939).sA, {
                                            defaultMessage: "Add context",
                                            id: "workflows.disabledAgentChatState.addContext"
                                        })
                                    })]
                                })
                            })
                        }), (0, n.jsx)("div", {
                            style: r.centerArea,
                            children: (0, n.jsx)(a(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: (0, n.jsx)(a(109939).sA, {
                                    defaultMessage: "This agent has been disabled. Chat is not available",
                                    id: "workflows.disabledAgentChatState.disabledMessage"
                                })
                            })
                        }), (0, n.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [(0, n.jsx)(a(374533).A, {
                                icon: a(695317).o,
                                colorPalette: "gray",
                                colorVariant: "tertiary",
                                disabled: !0,
                                size: "md",
                                style: r.attachButton,
                                ariaLabel: e.formatMessage({
                                    id: "workflows.disabledAgentChatState.attachButton",
                                    defaultMessage: "Attach file"
                                })
                            }), (0, n.jsx)("div", {
                                style: r.sendButton,
                                children: (0, n.jsx)(a(16275).I, {
                                    icon: a(567738).arrowStraightUpFillSmallIcon,
                                    size: "sm",
                                    style: r.sendIcon
                                })
                            })]
                        })]
                    })
                })
            }
        },
        543914: (e, t, a) => {
            a.d(t, {
                o: () => o
            });
            var n = a(296540),
                r = a(474848);
            let i = (0, a(109939).YK)({
                    customizeTooltip: {
                        id: "agentEmptyState.customizeTooltip",
                        defaultMessage: "Personalize"
                    }
                }),
                s = {
                    faceWrapper: {
                        position: "relative",
                        display: "inline-block"
                    },
                    customizeText: {
                        transition: "opacity 200ms ease-in-out",
                        marginInlineStart: 6,
                        fontSize: 12,
                        color: a(632079).Tj.text.secondary,
                        whiteSpace: "nowrap"
                    }
                };

            function o(e) {
                let {
                    aiChatFeatureController: t,
                    selectedAccessory: o,
                    isHoveringContainer: l
                } = e, d = (0, a(109939).tz)(), [c, u] = (0, n.useState)(!1), p = "single_line" === t.agentEmptyStateFormat, g = "compact" === t.agentEmptyStateFormat, m = "full_page" === t.agentChatFormFactor, h = p ? 32 : g ? 40 : m ? 64 : 50, f = p ? "medium" : g ? "medium_large" : "full_page" === t.agentChatFormFactor ? "large_plus" : "large", y = (0, a(960253).I)(() => ({
                    welcomeMessageFace: {
                        width: h,
                        height: h,
                        borderRadius: "50%",
                        background: a(632079).Tj.background.elevated,
                        boxShadow: a(632079).Tj.shadow.outline.md,
                        paddingInline: 0,
                        overflow: "visible",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        WebkitTouchCallout: "none",
                        pointerEvents: "auto",
                        WebkitUserDrag: "none",
                        touchAction: "manipulation"
                    },
                    customizeButton: {
                        position: "absolute",
                        bottom: 4,
                        insetInlineStart: "100%",
                        marginInlineStart: -10,
                        width: "auto",
                        maxWidth: c ? 200 : 26,
                        overflow: "hidden",
                        height: 26,
                        borderRadius: 13,
                        backgroundColor: a(632079).Tj.background.elevated,
                        boxShadow: a(632079).Tj.shadowMDPrimaryOutline,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        opacity: +!!l,
                        transition: "all 200ms cubic-bezier(0.5, 1, 0.89, 1)",
                        pointerEvents: l ? "auto" : "none",
                        cursor: "pointer",
                        paddingInlineStart: 6,
                        paddingInlineEnd: 10,
                        ...p && {
                            maxWidth: 20,
                            width: 20,
                            height: 20,
                            bottom: 2,
                            marginInlineStart: -8,
                            borderRadius: 10,
                            paddingInlineStart: 4,
                            paddingInlineEnd: 4
                        }
                    },
                    customizeIcon: {
                        width: p ? 12 : 14,
                        height: p ? 12 : 14,
                        color: a(632079).Tj.text.secondary
                    }
                }), [l, c, p, h]), x = t.supportsUpdatingExistingPersonalizationSettings(), b = (0, n.useCallback)(() => {
                    x && a(463226).cP({
                        store: a(210037).r,
                        from: t.aiChatType,
                        shouldSetSeenPersonalizationSettingsModal: !1
                    })
                }, [x, t.aiChatType]), v = (0, n.useCallback)(e => {
                    e.preventDefault()
                }, []), S = (0, n.useCallback)(e => {
                    e.stopPropagation()
                }, []), w = (0, n.useCallback)(e => {
                    e.preventDefault(), e.stopPropagation()
                }, []);
                return (0, r.jsxs)("div", {
                    style: s.faceWrapper,
                    onMouseEnter: () => u(!0),
                    onMouseLeave: () => u(!1),
                    children: [(0, r.jsx)(a(406910).p, {
                        style: y.welcomeMessageFace,
                        onClick: b,
                        onContextMenu: v,
                        onTouchStart: S,
                        onTouchEnd: w,
                        disabled: !x,
                        "aria-label": "Open personalization settings",
                        children: (0, r.jsx)(a(458364).x, {
                            accessory: o,
                            variant: f,
                            accessorySpeechBubblePlacement: "topRight",
                            speechBubbleVerticalOffsetPx: "dog" === o ? 43 : void 0,
                            speechBubbleHorizontalOffsetPx: "dog" === o ? 24 : void 0,
                            animateDogAccessory: "dog" !== o && void 0,
                            speechBubbleTailCircleTop: "dog" === o ? "calc(100% - 8px)" : void 0,
                            speechBubbleTailCircleInsetInlineStartPx: "dog" === o ? -16 : void 0
                        })
                    }), x && !((0, a(189760).r)(o) && d.locale.startsWith("en")) ? (0, r.jsxs)("div", {
                        style: y.customizeButton,
                        onClick: b,
                        role: "button",
                        tabIndex: -1,
                        "aria-label": "Personalize assistant",
                        "aria-hidden": !l,
                        children: [(0, r.jsx)(a(708966).Q, {
                            iconGroup: a(819534).u,
                            variantName: "small",
                            style: y.customizeIcon
                        }), p ? null : (0, r.jsx)("div", {
                            style: s.customizeText,
                            children: (0, r.jsx)(a(109939).sA, { ...i.customizeTooltip
                            })
                        })]
                    }) : void 0]
                })
            }
        },
        549740: (e, t, a) => {
            async function n(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                if (!a(205885).A.state.online) return;
                let r = await t.api.callCellCompatibleApi({
                    eventName: "getInferenceTranscriptsUnreadCount",
                    environment: t,
                    cellNavigation: {
                        spaceId: n
                    },
                    data: {
                        spaceId: n,
                        threadParentId: n
                    }
                });
                "failed" !== r.type && a(968105).a.setCountForSpace(n, r.data.count)
            }
            async function r(e) {
                let {
                    environment: t,
                    spaceId: r
                } = e;
                if (!a(205885).A.state.online) return !1;
                let i = Date.now() - 2592e6;
                return "failed" !== (await t.api.callCellCompatibleApi({
                    eventName: "markAllInferenceTranscriptsAsSeen",
                    environment: t,
                    cellNavigation: {
                        spaceId: r
                    },
                    data: {
                        spaceId: r,
                        timestamp: i
                    }
                })).type || (await n({
                    environment: t,
                    spaceId: r
                }), !1)
            }
            async function i(e) {
                let {
                    environment: t,
                    spaceId: r,
                    threadId: i,
                    lastAgentResponseTimeSeen: s,
                    refetchUnreadCountOnFailure: o = !0
                } = e;
                return !!a(205885).A.state.online && ("failed" !== (await t.api.callCellCompatibleApi({
                    eventName: "markInferenceTranscriptSeen",
                    environment: t,
                    cellNavigation: {
                        spaceId: r
                    },
                    data: {
                        spaceId: r,
                        threadId: i,
                        lastAgentResponseTimeSeen: s
                    }
                })).type || (o && await n({
                    environment: t,
                    spaceId: r
                }), !1))
            }
            async function s(e) {
                let {
                    environment: t,
                    spaceId: r,
                    threadId: i,
                    refetchUnreadCountOnFailure: s = !0
                } = e;
                return !!a(205885).A.state.online && ("failed" !== (await t.api.callCellCompatibleApi({
                    eventName: "markInferenceTranscriptUnseen",
                    environment: t,
                    cellNavigation: {
                        spaceId: r
                    },
                    data: {
                        spaceId: r,
                        threadId: i
                    }
                })).type || (s && await n({
                    environment: t,
                    spaceId: r
                }), !1))
            }
            a.d(t, {
                Jj: () => s,
                dU: () => n,
                s3: () => r,
                sd: () => i
            })
        },
        572577: (e, t, a) => {
            a.d(t, {
                H: () => n
            });

            function n(e) {
                let {
                    detectedLanguage: t,
                    canSuggestInConfidence: n
                } = function(e) {
                    let {
                        pageStore: t,
                        enabled: n,
                        forceUpdate: r = !1
                    } = e, i = (0, a(533992).v3)();
                    return (0, a(682985).K8)(() => n && t ? a(307594).bY({
                        pageStore: t,
                        environment: i,
                        enabled: n,
                        forceUpdate: r
                    }) : {
                        detectedLanguage: void 0,
                        canSuggestInConfidence: !1
                    }, [t, i, n, r])
                }(e);
                return t && !(0, a(703820).cE)(t) ? {
                    detectedLanguage: void 0,
                    canSuggestInConfidence: !1
                } : {
                    detectedLanguage: t,
                    canSuggestInConfidence: n
                }
            }
        },
        577497: (e, t, a) => {
            a.d(t, {
                Zp: () => c,
                fT: () => i,
                v3: () => s
            }), a(944114);
            var n = a(296540),
                r = a(474848);
            let i = {
                    xxs: 4,
                    xs: 6,
                    sm: 8,
                    md: 10,
                    lg: 12
                },
                s = {
                    none: 0,
                    sm: 12,
                    md: 16,
                    lg: 20,
                    xl: 24
                },
                o = {
                    kzqmXN: "xh8yej3",
                    $$css: !0
                },
                l = {
                    xxs: {
                        krdFHd: "xjwep3j",
                        kfmiAY: "x1t39747",
                        kT0f0o: "x1wcsgtt",
                        kVL7Gh: "x1pczhz8",
                        $$css: !0
                    },
                    xs: {
                        krdFHd: "x1i5p2am",
                        kfmiAY: "x1whfx0g",
                        kT0f0o: "xr2y4jy",
                        kVL7Gh: "x1ihp6rs",
                        $$css: !0
                    },
                    sm: {
                        krdFHd: "x1obq294",
                        kfmiAY: "x5a5i1n",
                        kT0f0o: "xde0f50",
                        kVL7Gh: "x15x8krk",
                        $$css: !0
                    },
                    md: {
                        krdFHd: "x16qb05n",
                        kfmiAY: "xi7iut8",
                        kT0f0o: "x1dm3dyd",
                        kVL7Gh: "x1pv694p",
                        $$css: !0
                    },
                    lg: {
                        krdFHd: "x6nl9eh",
                        kfmiAY: "x1a5l9x9",
                        kT0f0o: "x7vuprf",
                        kVL7Gh: "x1mg3h75",
                        $$css: !0
                    }
                },
                d = {
                    none: {
                        kLKAdn: "xexx8yu",
                        kwRFfy: "xyri2b",
                        kGO01o: "x18d9i69",
                        kZCmMZ: "x1c1uobl",
                        $$css: !0
                    },
                    sm: {
                        kLKAdn: "xz9dl7a",
                        kwRFfy: "xpdmqnj",
                        kGO01o: "xsag5q8",
                        kZCmMZ: "x1g0dm76",
                        $$css: !0
                    },
                    md: {
                        kLKAdn: "xyamay9",
                        kwRFfy: "xv54qhq",
                        kGO01o: "x1l90r2v",
                        kZCmMZ: "xf7dkkf",
                        $$css: !0
                    },
                    lg: {
                        kLKAdn: "x1cnzs8",
                        kwRFfy: "x1xnnf8n",
                        kGO01o: "xx6bls6",
                        kZCmMZ: "x106a9eq",
                        $$css: !0
                    },
                    xl: {
                        kLKAdn: "x1p5oq8j",
                        kwRFfy: "x64bnmy",
                        kGO01o: "xwxc41k",
                        kZCmMZ: "x13jy36j",
                        $$css: !0
                    }
                },
                c = n.forwardRef(function(e, t) {
                    let n, i, {
                            children: s,
                            colorPalette: c,
                            colorVariant: u = "primary",
                            borderRadius: p = "md",
                            borderVariant: g,
                            padding: m = "none",
                            shadowVariant: h
                        } = e,
                        f = c ? a(632079).Tj[c] : a(632079).Tj,
                        y = [];
                    h && y.push(a(632079).Tj.shadow.base[h]), g && y.push(`inset 0 0 0 1px ${f.border[g]}`);
                    let x = (0, a(722371).O)(f.background, u) ? f.background[u] : f.background.primary;
                    return (0, r.jsx)("div", { ...a(952687).A.props(o, l[p], "number" == typeof m ? {
                            padding: m
                        } : d[m], [{
                            kC7eKd: null != (n = x) ? "xt2wqj3" : n,
                            $$css: !0
                        }, {
                            "--x-background": null != n ? n : void 0
                        }], y.length > 0 && [{
                            kGVxlE: null != (i = y.join(", ")) ? "x1iotiob" : i,
                            $$css: !0
                        }, {
                            "--x-boxShadow": null != i ? i : void 0
                        }]),
                        ref: t,
                        children: s
                    })
                })
        },
        611051: (e, t, a) => {
            a.d(t, {
                S: () => r,
                x: () => n
            });
            let n = (0, a(109939).YK)({
                    workspaceSpendLimitContactSupportLabel: {
                        id: "workflows.creditLimit.contactSupportLabel",
                        defaultMessage: "Contact support"
                    },
                    requestLimitIncreaseFromSupportDefaultMessage: {
                        id: "appBuilderNotificationActivityError.body.requestLimitIncreaseFromSupportDefaultMessage",
                        defaultMessage: "Please increase my workspace’s Custom Agents usage limit"
                    },
                    workspaceSpendLimitRestoreAccessMessage: {
                        id: "workflows.creditLimit.workspaceRestoreAccessMessage",
                        defaultMessage: "Your workspace has reached its credit limit. {upgradePhrase} to restore access to this agent."
                    },
                    workspaceSpendLimitStatusMessage: {
                        id: "workflows.creditLimit.workspaceSpendLimitStatusMessage",
                        defaultMessage: "Your workspace has reached its credit limit. {upgradePhrase}."
                    },
                    workspaceSpendLimitBannerStatusMessage: {
                        id: "workflows.creditLimit.workspaceSpendLimitBannerStatusMessage",
                        defaultMessage: "Your workspace has reached its credit limit."
                    }
                }),
                r = (0, a(109939).YK)({
                    requestMoreCreditsLabel: {
                        id: "workflows.agentCreditLimit.requestMoreCreditsLabel",
                        defaultMessage: "Request more credits"
                    }
                })
        },
        650089: (e, t, a) => {
            a.d(t, {
                z: () => r
            });
            let n = {
                    CollapsiblePanel: new(a(815048)).O2("CollapsiblePanel", () => a.e(35905).then(a.bind(a, 901587)))
                },
                r = (0, a(815048)._h)(n.CollapsiblePanel, e => e.CollapsiblePanel)
        },
        660658: (e, t, a) => {
            a.d(t, {
                N: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.37 1.37 13.26 16.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.191 1.478a.624.624 0 0 1 .864.867l-.08.099-1.942 1.932H10A6.625 6.625 0 1 1 3.375 11a.625.625 0 1 1 1.25 0A5.375 5.375 0 1 0 10 5.626H8.037L9.962 7.56l.08.098a.626.626 0 0 1-.966.783L6.083 5.434l-.077-.096a.626.626 0 0 1 .08-.788l3.007-2.993z"
                    })
                },
                r = (0, a(104509).wt)("arrowCircleSpinCounterClockwise", n, "default")
        },
        673700: (e, t, a) => {
            a.d(t, {
                C: () => n
            });
            let n = (0, a(104509).xh)("magnifyingGlass", {
                default: {
                    loader: () => a.e(42022).then(a.bind(a, 330274))
                },
                small: {
                    loader: () => a.e(42022).then(a.bind(a, 921048))
                },
                fill: {
                    loader: () => a.e(42022).then(a.bind(a, 367008))
                },
                fillSmall: {
                    loader: () => a.e(42022).then(a.bind(a, 693863))
                }
            }, ["magnifying", "glass", "search", "zoom", "explore"])
        },
        693683: (e, t, a) => {
            a.d(t, {
                R: () => c
            }), a(944114);
            var n = a(296540);
            a(898992), a(737550);
            let r = new(a(815048)).O2("RenameThreadPopup", async () => await a.e(42489).then(a.bind(a, 262255))),
                i = (0, a(815048)._h)(r, e => e.RenameThreadPopup);
            var s = a(474848);

            function o({
                variant: e = "sidebar",
                ariaLabel: t,
                onClick: n,
                aiChatFeatureController: r,
                ...i
            }) {
                let l = "header" === e ? a(397900).ellipsisIcon : a(361226).ellipsisSmallIcon,
                    d = a(986939).A.isMobile ? "tertiary" : "sidebar" === e ? "secondary" : "primary",
                    c = "header" === e || "header_compact" === e,
                    u = (0, a(719298).v)({
                        shape: (null == r ? void 0 : r.headerButtonShape) ? ? "roundrect",
                        aiChatFeatureController: r
                    });
                return (0, s.jsx)(a(374533).A, {
                    icon: l,
                    ariaLabel: t,
                    onClick: n,
                    colorVariant: d,
                    style: c ? u.iconButton : void 0,
                    iconStyle: c ? u.iconButtonIcon : void 0,
                    ...i
                })
            }
            let l = (0, a(109939).YK)({
                    menuTooltip: {
                        id: "chatHistoryItemMenu.tooltip",
                        defaultMessage: "Delete, rename, and more…"
                    },
                    rename: {
                        id: "chatHistoryItemMenu.rename",
                        defaultMessage: "Rename"
                    },
                    changeIcon: {
                        id: "chatHistoryItemMenu.changeIcon",
                        defaultMessage: "Change icon"
                    },
                    iconTab: {
                        id: "chatHistoryItemMenu.iconTab",
                        defaultMessage: "Icons"
                    },
                    delete: {
                        id: "chatHistoryItemMenu.delete",
                        defaultMessage: "Delete"
                    },
                    clearDailyBrief: {
                        id: "chatHistoryItemMenu.clearDailyBrief",
                        defaultMessage: "Clear today’s brief"
                    },
                    openInSidebar: {
                        id: "chatHistoryItemMenu.openInSidebar",
                        defaultMessage: "Open in sidebar"
                    },
                    openInFloating: {
                        id: "chatHistoryItemMenu.openInFloating",
                        defaultMessage: "Open in floating"
                    },
                    openInNewTab: {
                        id: "chatHistoryItemMenu.openInNewTab",
                        defaultMessage: "Open in new tab"
                    },
                    lastUpdated: {
                        id: "chatHistoryItemMenu.lastUpdated",
                        defaultMessage: "Last updated {timestamp}"
                    },
                    deleteConfirmation: {
                        id: "chatHistoryItemMenu.deleteConfirmation",
                        defaultMessage: "Are you sure you want to delete this chat?"
                    }
                }),
                d = {
                    paddingBlock: 4,
                    paddingInline: 14
                };

            function c({
                threadStore: e,
                isDailyBriefThread: t,
                onDelete: r,
                onClearDailyBrief: u,
                onOpenInPreferredMode: p,
                preferredChatPanelMode: g,
                onOpenInNewTab: m,
                onRename: h,
                variant: f = "sidebar",
                buttonPopupStore: y,
                originRect: x,
                onMenuClosed: b,
                hideOriginButton: v,
                aiChatFeatureController: S
            }) {
                let w, C = (0, a(109939).tz)(),
                    I = (0, a(533992).v3)(),
                    A = (0, a(682985).K8)(() => {
                        let t = e.getUpdatedTime();
                        if (t) return (0, a(799843).nl)(t, {
                            useLowercase: !0,
                            useCompactFormat: !0,
                            roundDownYears: !0
                        })
                    }, [e]),
                    [M, k] = (0, n.useState)(!1),
                    [j, T] = (0, n.useState)(void 0),
                    _ = (0, n.useRef)(null),
                    P = (0, n.useRef)(void 0),
                    B = (w = (0, a(533992).v3)(), (0, a(682985).K8)(() => {
                        if (!e) return !1;
                        let t = e.getTranscript();
                        if (!(null == t ? void 0 : t.some(e => "title" === e.type))) return !1;
                        let a = w.currentUser.id,
                            n = e.getCreatedById() === a,
                            r = "editor" === e.getRole();
                        return n || r
                    }, [e, w.currentUser.id])),
                    R = (0, n.useCallback)(() => {
                        k(!1), T(void 0)
                    }, []),
                    W = (0, n.useCallback)(() => {
                        var e, t;
                        if (h) return void h();
                        let a = null == (e = _.current) ? void 0 : e.getAnchor();
                        if (a instanceof HTMLElement) {
                            let e = a.getBoundingClientRect();
                            null == (t = P.current) || t.call(P), requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    T(e), k(!0)
                                })
                            })
                        }
                    }, [h]),
                    L = (0, n.useCallback)(async () => {
                        var e;
                        null == (e = P.current) || e.call(P), (await a(647095).Gh({
                            message: C.formatMessage(l.deleteConfirmation)
                        })).accept && (null == r || r())
                    }, [C, r]),
                    F = (0, n.useCallback)(() => {
                        var e;
                        null == (e = P.current) || e.call(P), null == u || u()
                    }, [u]),
                    D = (0, n.useCallback)(() => {
                        var e;
                        null == (e = P.current) || e.call(P), null == p || p()
                    }, [p]),
                    E = (0, n.useCallback)(() => {
                        var e;
                        null == (e = P.current) || e.call(P), null == m || m()
                    }, [m]),
                    N = (0, n.useCallback)(() => {
                        var t, n;
                        let r = null == (t = _.current) || null == (t = t.getAnchor()) ? void 0 : t.getBoundingClientRect();
                        null == (n = P.current) || n.call(P), a(874443).W(I, {
                            originGap: 16,
                            originRect: r,
                            popupWidth: a(703188).jv,
                            title: C.formatMessage(l.changeIcon),
                            currentTab: "icon",
                            tabs: [{
                                type: "icon",
                                title: C.formatMessage(l.iconTab),
                                onChange: t => {
                                    a(874443).I(), (0, a(635587).pS)({
                                        environment: I,
                                        threadStore: e,
                                        icon: t
                                    })
                                },
                                tabHeight: a(703188).GF,
                                enforceIconColor: "lightgray",
                                hideRandomButton: !0
                            }]
                        })
                    }, [I, C, e]),
                    K = C.formatMessage(l.menuTooltip);
                if (!(B || r || p || m || t && u)) return null;
                let q = [];
                B && q.push({
                    key: "rename",
                    render: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, s.jsx)(a(95582).A, { ...n,
                            icon: (0, s.jsx)(a(16275).I, {
                                icon: a(111481).M
                            }),
                            title: C.formatMessage(l.rename),
                            ref: t
                        })
                    },
                    action: W
                }), B && q.push({
                    key: "change-icon",
                    render: e => (0, s.jsx)(a(95582).A, {
                        icon: (0, s.jsx)(a(16275).I, {
                            icon: a(976898).emojiFaceIcon
                        }),
                        title: C.formatMessage(l.changeIcon),
                        ...e
                    }),
                    action: N
                }), t && u && q.push({
                    key: "clear-daily-brief",
                    render: e => (0, s.jsx)(a(95582).A, {
                        icon: (0, s.jsx)(a(16275).I, {
                            icon: a(660658).N
                        }),
                        title: C.formatMessage(l.clearDailyBrief),
                        ...e
                    }),
                    action: F
                }), r && q.push({
                    key: "delete",
                    render: e => (0, s.jsx)(a(95582).A, {
                        icon: (0, s.jsx)(a(16275).I, {
                            icon: a(968411).trashIcon
                        }),
                        title: C.formatMessage(l.delete),
                        ...e
                    }),
                    action: L
                });
                let z = [];
                if (p) {
                    let e = "popup" === g;
                    z.push({
                        key: "open-in-preferred-mode",
                        render: t => (0, s.jsx)(a(95582).A, {
                            icon: (0, s.jsx)(a(16275).I, {
                                icon: e ? a(530993).q : a(357055).A
                            }),
                            title: C.formatMessage(e ? l.openInFloating : l.openInSidebar),
                            ...t
                        }),
                        action: D
                    })
                }
                m && z.push({
                    key: "open-in-new-tab",
                    render: e => (0, s.jsx)(a(95582).A, {
                        icon: (0, s.jsx)(a(16275).I, {
                            icon: a(684668).arrowDiagonalUpRightIcon
                        }),
                        title: C.formatMessage(l.openInNewTab),
                        ...e
                    }),
                    action: E
                });
                let U = [];
                return q.length > 0 && U.push({
                    key: "primary-actions",
                    render: e => (0, s.jsx)(a(844565).A, { ...e,
                        topBorder: !1
                    }),
                    items: q
                }), z.length > 0 && U.push({
                    key: "navigation-actions",
                    render: e => (0, s.jsx)(a(844565).A, { ...e,
                        topBorder: q.length > 0
                    }),
                    items: z
                }), A && U.push({
                    key: "metadata",
                    render: e => (0, s.jsx)(a(844565).A, { ...e,
                        topBorder: !0
                    }),
                    items: [{
                        key: "last-updated",
                        render: () => (0, s.jsx)(a(636518).Ay, {
                            shouldWrapTitle: !0,
                            title: (0, s.jsx)(a(324489).V, {
                                isSmall: !0,
                                isSecondaryColor: !0,
                                children: (0, s.jsx)(a(109939).sA, { ...l.lastUpdated,
                                    values: {
                                        timestamp: A
                                    }
                                })
                            }),
                            style: d
                        }),
                        action: () => {}
                    }]
                }), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(a(656252).A, {
                        ref: _,
                        buttonPopupStore: y,
                        popupType: a(656252).z.Popup,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "end",
                        originGap: 4,
                        originRect: x,
                        onClosed: b,
                        trapFocus: !0,
                        content: e => (P.current = e.close, (0, s.jsx)(a(747369).A, {
                            menuType: a(649476).gu.Popup,
                            children: (0, s.jsx)(a(558045).A, {
                                type: a(558045).O.Vertical,
                                onAccept: e.close,
                                initialFocus: void 0,
                                sections: U
                            })
                        })),
                        children: ({
                            onClick: e
                        }) => v ? (0, s.jsx)("div", {
                            "aria-hidden": !0
                        }) : (0, s.jsx)(a(51831).m, {
                            content: () => (0, s.jsx)(a(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                children: (0, s.jsx)(a(109939).sA, { ...l.menuTooltip
                                })
                            }),
                            children: t => (0, s.jsx)(o, {
                                variant: f,
                                ariaLabel: K,
                                onClick: e,
                                aiChatFeatureController: S,
                                ...t
                            })
                        })
                    }), h ? void 0 : (0, s.jsx)(i, {
                        threadStore: e,
                        open: M,
                        originRect: j,
                        onDismiss: R
                    })]
                })
            }
        },
        693712: (e, t, a) => {
            a.d(t, {
                q: () => r
            });
            let n = new(a(815048)).O2("WorkflowSetupInstructions", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(71562), a.e(26361), a.e(16471), a.e(37353), a.e(62475), a.e(3151), a.e(18965), a.e(98629), a.e(63328), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(54951), a.e(43444), a.e(23979), a.e(17250), a.e(26997), a.e(73259), a.e(28048), a.e(93430), a.e(55940), a.e(12560), a.e(88268), a.e(12001), a.e(40198), a.e(39726), a.e(31243), a.e(42534), a.e(86662), a.e(14886), a.e(39225), a.e(87971), a.e(6212), a.e(2626), a.e(64453), a.e(4779), a.e(29663), a.e(28482), a.e(76361), a.e(14369), a.e(74145), a.e(56308), a.e(48860), a.e(75136), a.e(98175), a.e(18682), a.e(55067), a.e(83490), a.e(58360), a.e(33162), a.e(63793), a.e(18881), a.e(12690), a.e(62731), a.e(68583), a.e(41049), a.e(18416), a.e(35602), a.e(90735), a.e(12024), a.e(30532), a.e(69684), a.e(81603), a.e(49297), a.e(78288), a.e(68719), a.e(55755), a.e(19812), a.e(18378), a.e(50659), a.e(97132)]).then(a.bind(a, 945562))),
                r = (0, a(815048)._h)(n, e => e.WorkflowSetupInstructions)
        },
        703820: (e, t, a) => {
            var n;
            a.d(t, {
                FM: () => d,
                J6: () => l,
                cE: () => i,
                h5: () => p,
                kl: () => u,
                oQ: () => c
            });
            let r = ["ar", "bg", "cs", "da", "de", "el", "es", "et", "fi", "fr", "he", "hu", "id", "it", "ja", "ko", "lt", "lv", "nb", "nl", "pl", "ro", "ru", "sk", "sl", "sv", "th", "tr", "uk", "vi", "zh", "en", "pt"];

            function i(e) {
                return !!(0, a(722371).Xk)(r, e)
            }
            let s = ["en-US", "ko", "ja", "fr", "de", "es", "pt-BR", "pt-PT", "fi", "da", "nl", "nb", "sv", "zh-HANS", "zh-HANT", "ru", "it", "id", "th", "vi"],
                o = [...s, "ar", "he"];

            function l(e) {
                return (null == e ? void 0 : e.includeRtlLanguages) ? o : s
            }

            function d(e) {
                var t;
                return t = (0, a(20707).JE)(e), !!(0, a(722371).Xk)(o, t)
            }

            function c(e) {
                return (0, a(955630).Db)(e, void 0) || "form" === e || "collection_view_page" === e ? "title" : (0, a(955630).z9)(e) ? "caption" : "table_row" === e || "collection_view" === e ? "properties" : (0, a(955630).Mp)(e) || "column" === e || "column_list" === e || "table" === e ? "unmapped" : void(0, a(722371).HB)(e)
            }
            let u = ((n = {}).NAME = "name", n.VIEW_NAME = "view_name", n.DESCRIPTION = "description", n.SCHEMA_PROPERTY_NAME = "schema_property_name", n.SCHEMA_PROPERTY_OPTION = "schema_property_option", n.SCHEMA_PROPERTY_AI_INFERENCE = "schema_property_ai_inference_prompt", n),
                p = {
                    questionName: "question_name",
                    questionDescription: "question_description",
                    checkboxLabel: "checkbox_label"
                }
        },
        730236: (e, t, a) => {
            a.d(t, {
                h: () => r,
                r: () => i
            }), a(898992), a(581454), a(737550);
            var n = a(296540);

            function r(e) {
                let t = e.pointer;
                return `${t.table}:${t.id}:${t.spaceId??""}`
            }

            function i(e) {
                let {
                    environment: t,
                    workflowStore: i,
                    isCustomAgent: s,
                    spaceStore: o
                } = e, {
                    workflowId: l,
                    workflowSpaceId: d,
                    isStrictMode: c
                } = (0, a(682985).K8)(() => {
                    var e;
                    return i ? {
                        workflowId: i.id,
                        workflowSpaceId: i.getSpaceId(),
                        isStrictMode: (null == (e = i.getData()) ? void 0 : e.permissionMode) === "strictMode"
                    } : {
                        workflowId: void 0,
                        workflowSpaceId: void 0,
                        isStrictMode: !1
                    }
                }, [i]), u = !!(s && l && d && c), [p, g] = (0, n.useState)({
                    status: "idle"
                }), [m, h] = (0, n.useState)(0), f = (0, n.useCallback)(() => {
                    h(e => e + 1)
                }, []);
                (0, n.useEffect)(() => {
                    if (!u || !l || !d) return void g(e => "idle" === e.status ? e : {
                        status: "idle"
                    });
                    let e = !1;
                    return g({
                        status: "loading"
                    }), (async () => {
                        let a = await t.api.callCellCompatibleApi({
                            environment: t,
                            eventName: "getCustomAgentPermissionRequirements",
                            data: {
                                workflowId: l,
                                spaceId: d
                            },
                            cellNavigation: {
                                spaceId: d
                            }
                        });
                        e || ("success" === a.type && a.data ? g({
                            status: "loaded",
                            permissionMode: a.data.permissionMode,
                            resources: a.data.requirements
                        }) : g({
                            status: "error"
                        }))
                    })(), () => {
                        e = !0
                    }
                }, [t, l, d, u, m]);
                let y = (0, n.useMemo)(() => "loaded" === p.status ? p.resources : [], [p]),
                    x = (0, n.useMemo)(() => y.map(e => ({
                        resource: e,
                        key: r(e)
                    })), [y]),
                    b = function(e) {
                        let {
                            spaceStore: t,
                            resources: r
                        } = e, i = (0, n.useMemo)(() => r.map(e => ({ ...e,
                            store: t && function(e) {
                                let {
                                    spaceStore: t,
                                    resource: n
                                } = e;
                                if (n.pointer.table === a(832375).evP) {
                                    let e = {
                                        table: a(832375).evP,
                                        id: n.pointer.id,
                                        spaceId: n.pointer.spaceId ? ? t.id
                                    };
                                    return a(970831).B.createChildStore(t, e)
                                }
                                if (n.pointer.table === a(832375).VlP) {
                                    let e = {
                                        table: a(832375).VlP,
                                        id: n.pointer.id,
                                        spaceId: n.pointer.spaceId ? ? t.id
                                    };
                                    return a(356912).m.createChildStore(t, e)
                                }
                                if (n.pointer.table === a(832375).tEp) {
                                    let e = {
                                        table: a(832375).tEp,
                                        id: n.pointer.id,
                                        spaceId: n.pointer.spaceId ? ? t.id
                                    };
                                    return a(142566).s.createChildStore(t, e)
                                }
                            }({
                                spaceStore: t,
                                resource: e.resource
                            })
                        })), [r, t]);
                        (0, n.useEffect)(() => {
                            for (let {
                                    store: e
                                } of i) e && e.load()
                        }, [i]);
                        let s = (0, a(682985).K8)(() => i.map(({
                            key: e,
                            store: t
                        }) => {
                            if (!t) return {
                                key: e,
                                role: void 0,
                                hasAccess: !1,
                                title: void 0,
                                store: void 0
                            };
                            let n = t.getRole();
                            return {
                                key: e,
                                role: n,
                                hasAccess: !!(n && (0, a(642157).Tt)(n)),
                                title: function(e) {
                                    if (e instanceof a(970831).B) {
                                        let t = e.getTitleValue(),
                                            n = (0, a(247438).q4_)(t);
                                        return n.length > 0 ? n : void 0
                                    }
                                    if (e instanceof a(356912).m) {
                                        let t = e.getName();
                                        if (!t) return;
                                        let n = (0, a(247438).q4_)(t);
                                        return n.length > 0 ? n : void 0
                                    }
                                    if (e instanceof a(142566).s) {
                                        let t = e.getName();
                                        return t && t.trim().length > 0 ? t : void 0
                                    }
                                }(t),
                                store: t
                            }
                        }), [i]);
                        return (0, n.useMemo)(() => {
                            let e = new Map;
                            for (let t of s) e.set(t.key, t);
                            return e
                        }, [s])
                    }({
                        spaceStore: o,
                        resources: x
                    }),
                    v = (0, n.useMemo)(() => x.map(({
                        resource: e,
                        key: t
                    }) => {
                        let n, r = b.get(t),
                            i = (null == r ? void 0 : r.role) ? ? e.requesterRole;
                        return n = (null == r ? void 0 : r.hasAccess) ? ? !!(i && (0, a(642157).Tt)(i)) ? !e.requiredRole || i && (0, a(138798).q_)(i, e.requiredRole) ? "granted" : "needsUpgrade" : "requestAccess", { ...e,
                            key: t,
                            status: n,
                            currentRole: i,
                            title: (null == r ? void 0 : r.title) ? ? e.title,
                            store: null == r ? void 0 : r.store
                        }
                    }), [b, x]),
                    S = (0, n.useMemo)(() => v.some(e => "granted" !== e.status), [v]),
                    w = u && "loading" === p.status;
                return {
                    shouldBlockChat: u && ("loading" === p.status || "loaded" === p.status && S),
                    isLoading: w,
                    resources: "loaded" === p.status ? v : [],
                    refresh: f
                }
            }
        },
        765743: (e, t, a) => {
            a.d(t, {
                n: () => r
            }), a(898992), a(354520);
            var n = a(296540);

            function r(e) {
                let {
                    environment: t,
                    clientStore: r
                } = e, i = (0, a(548124).useThreadStoreFromCurrentRoute)(), s = e.threadStore ? ? i, o = (0, a(757688).Cx)({
                    providedThreadStore: s
                }), l = (0, a(682985).K8)(() => o ? (0, a(187353).A3)({
                    threadStore: s,
                    clientStore: r
                }).steps.filter(e => "agent-tool-result" === e.type).filter(e => !(0, a(780899).nP)(e) && e.threadOperations && e.threadOperations.length > 0 && "delete-pages" !== e.toolName && "callFunction" !== e.toolName && "runScript" !== e.toolName && ("generate-plan" !== e.toolName || "confirmation:requested" !== e.state) && !e.error) : [], [s, r, o]);
                (0, n.useEffect)(() => {
                    let e = (0, a(354128).getAgentPreviewWrapper)(t);
                    0 === l.length ? e.exit(t) : e.enter({
                        environment: t,
                        steps: l,
                        transactionActions: a(377796),
                        applyOperation: (n, r) => {
                            (0, a(757688).Hp)({
                                environment: t,
                                operation: r,
                                recordCache: e.getInMemoryRecordCache(),
                                transaction: n
                            })
                        }
                    })
                }, [t, l, s]), (0, n.useEffect)(() => () => {
                    (0, a(354128).getAgentPreviewWrapper)(t).exit(t)
                }, [t])
            }
        },
        768718: (e, t, a) => {
            a.d(t, {
                n: () => n
            });

            function n() {
                return (0, a(682985).K8)(() => {
                    var e;
                    let t = (null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) ? ? a(619157).q;
                    return (0, a(619157).o_)(t)
                }, [])
            }
        },
        928658: (e, t, a) => {
            a.d(t, {
                w: () => n
            });

            function n(e, t) {
                let {
                    spaceId: n,
                    pageId: r,
                    joinSpaceMethod: i
                } = t;
                (0, a(104310).u)({
                    event: {
                        eventName: "trusted_domain_banner_cta_clicked",
                        eventProperties: {
                            spaceId: n,
                            pageId: r,
                            joinSpaceMethod: i
                        }
                    }
                })
            }
        },
        968105: (e, t, a) => {
            a.d(t, {
                a: () => i
            });
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        countsBySpaceId: {}
                    }
                }
                getUnreadCountForSidebarSpace() {
                    let e = a(728372).AppStoreSidebarSpaceStore.state;
                    return e ? this.state.countsBySpaceId[e.id] ? ? 0 : 0
                }
                getCountForSpace(e) {
                    return this.state.countsBySpaceId[e] ? ? 0
                }
                setCountForSpace(e, t) {
                    let a = Math.max(0, t);
                    this.setState({
                        countsBySpaceId: { ...this.state.countsBySpaceId,
                            [e]: a
                        }
                    })
                }
                decrementForSpace(e) {
                    let t = this.state.countsBySpaceId[e] ? ? 0;
                    t <= 0 || this.setState({
                        countsBySpaceId: { ...this.state.countsBySpaceId,
                            [e]: Math.max(0, t - 1)
                        }
                    })
                }
                incrementForSpace(e) {
                    let t = this.state.countsBySpaceId[e] ? ? 0;
                    this.setState({
                        countsBySpaceId: { ...this.state.countsBySpaceId,
                            [e]: t + 1
                        }
                    })
                }
            }
            let i = new r
        },
        999524: (e, t, a) => {
            a.d(t, {
                z: () => n
            });

            function n(e) {
                let {
                    spaceId: t,
                    workflowStore: n
                } = e, r = (0, a(533992).v3)(), i = (0, a(217844)._)({
                    name: "custom_agents_credit_usage",
                    spaceId: t,
                    userId: r.currentUser.id,
                    amount: "unknown"
                });
                return (0, a(682985).K8)(() => {
                    if (!n) return;
                    if ((0, a(94418).Pd)(i) && i.upsell) return {
                        type: "workspaceSpendLimit",
                        featureAvailability: i
                    };
                    let e = (0, a(604384).W0)(n);
                    return "creditLimit" === e ? {
                        type: "agentCreditLimit"
                    } : "runawayCreditUsage" === e ? {
                        type: "runawayCreditUsage",
                        runawayCheck: "newAgentThreshold"
                    } : void 0
                }, [n, i])
            }
        }
    }
]);