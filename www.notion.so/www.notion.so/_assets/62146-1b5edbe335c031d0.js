"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [31190, 62146, 87196], {
        8779: (e, t, a) => {
            e.exports = a.p + "95f76471471a22df.png"
        },
        13649: (e, t, a) => {
            a.d(t, {
                T: () => n
            });
            let n = {
                popup: { ...a(986939).A.isMobile && {
                        borderStartStartRadius: 12,
                        borderStartEndRadius: 12,
                        overflow: "hidden"
                    }
                },
                menuScroller: a(986939).A.isMobile ? {
                    background: a(632079).Tj.background.secondary
                } : {},
                header: a(986939).A.isMobile ? {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 16,
                    fontWeight: a(699422).Wy.semibold,
                    background: a(632079).Tj.background.secondary,
                    height: 45
                } : {
                    paddingInlineStart: 12,
                    paddingInlineEnd: 12,
                    paddingTop: 8,
                    fontWeight: a(699422).Wy.medium
                },
                subheader: a(986939).A.isMobile ? {
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    fontSize: 15,
                    fontWeight: a(699422).Wy.medium,
                    background: a(632079).Tj.background.secondary,
                    height: 45,
                    color: a(632079).Tj.text.secondary,
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16
                } : {
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16,
                    paddingTop: 10,
                    fontWeight: a(699422).Wy.semibold
                },
                sectionMenuItem: a(986939).A.isMobile ? {
                    overflow: "hidden",
                    background: a(632079).Tj.background.elevated,
                    borderRadius: 12,
                    marginInlineStart: 16,
                    marginInlineEnd: 16,
                    marginBottom: 16,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: a(632079).Tj.border.secondary,
                    padding: void 0
                } : {},
                buttonMenuItem: a(986939).A.isMobile ? {
                    backgroundColor: a(632079).Tj.background.elevated,
                    paddingTop: 12,
                    paddingBottom: 12,
                    borderBottomWidth: 1,
                    borderBottomStyle: "solid",
                    borderBottomColor: a(632079).Tj.border.secondary
                } : {},
                buttonMenuItemPressed: {
                    background: a(632079).Tj.buttonPressedBackground
                },
                transparentButtonMenuItemBorder: {
                    borderBottomColor: "transparent"
                },
                title: a(986939).A.isMobile ? {
                    fontSize: 16
                } : {},
                icon: { ...a(986939).A.isMobile ? {
                        height: 24,
                        width: 24
                    } : {
                        height: 20,
                        width: 20
                    }
                },
                checkIcon: { ...a(986939).A.isMobile ? {
                        height: 20,
                        width: 20
                    } : {
                        height: 16,
                        width: 16
                    }
                }
            }
        },
        13717: (e, t, a) => {
            function n(e) {
                let {
                    spaceStore: t,
                    groupId: n
                } = e;
                return a(398652).C.createChildStore(t, (0, a(659341).S4)({
                    spacePermissionGroupId: n,
                    spaceId: t.id
                }))
            }

            function o(e) {
                let {
                    spaceStore: t,
                    groupId: n,
                    userId: o
                } = e;
                return a(291886).m.createChildStore(t, (0, a(867863).BZ)({
                    spacePermissionGroupId: n,
                    spaceId: t.id,
                    userId: o
                }))
            }
            a.d(t, {
                A: () => o,
                E: () => n
            })
        },
        31461: (e, t, a) => {
            e.exports = a.p + "868a886d40b596cd.png"
        },
        49396: (e, t, a) => {
            e.exports = a.p + "3385d40630727f40.png"
        },
        58344: (e, t, a) => {
            e.exports = a.p + "056c81859ba06119.png"
        },
        85183: (e, t, a) => {
            a.d(t, {
                a: () => o
            }), a(898992), a(354520), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(823215), a(581454);
            var n = a(296540);

            function o({
                sidebarState: e,
                showLockedSidebar: t,
                isLibraryEnabled: i,
                isPhone: r
            }) {
                var s;
                let d, l, c, g, p = (0, a(972740).L)(),
                    u = (0, a(879101).n)({
                        key: ["sidebar", "sectionOrder", null == p ? void 0 : p.id, null == p ? void 0 : p.userId],
                        computedState: null == e ? void 0 : e.sidebarOrder
                    }),
                    f = (0, a(498e3).K)({
                        sidebarOrder: u ? ? [],
                        sidebarState: e,
                        showLockedSidebar: t
                    }),
                    h = (s = {
                        sidebarSections: f.filter(e => (0, a(190566).Yw)(e))
                    }, d = (0, a(482170).l)(s.sidebarSections, a(795676).A), l = (0, a(972740).L)(), c = (0, a(682985).K8)(() => {
                        if (!d) return [];
                        let e = d.map(e => a(678703).Lw.fromSpaceStore({
                            spaceIdCreator: null == l ? void 0 : l.getSpaceIdCreator(),
                            spaceStore: l,
                            sectionType: e
                        }));
                        if (e.every(e => null == e ? void 0 : e.isReady())) return e.filter(e => !(null == e ? void 0 : e.isHidden())).map(e => null == e ? void 0 : e.getSectionType()).filter(a(722371).O9)
                    }, [l, d]), g = (0, a(879101).n)({
                        key: ["sidebar", "visibleSections", null == l ? void 0 : l.id, null == l ? void 0 : l.userId],
                        computedState: (0, a(482170).l)(c, a(795676).A)
                    }), (0, n.useMemo)(() => g ? new Set(g) : void 0, [g])),
                    b = f.filter(e => !(!r && (0, a(190566).Yw)(e)) || (null == h ? void 0 : h.has(e)));
                return (0, a(482170).l)(b, a(795676).A)
            }
        },
        87945: (e, t, a) => {
            a.d(t, {
                F: () => n
            });
            let n = a(546605).Store.createValue(!1, {
                name: "slipperySlopeSidebarCustomizationModeStore"
            })
        },
        88721: (e, t, a) => {
            a.d(t, {
                C: () => i
            }), a(296540);
            var n = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 1.25 15.63 15.63",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M16.25 6.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
                        }), (0, n.jsx)("path", {
                            d: "M5.25 3.125h7.302a3.8 3.8 0 0 0 0 1.25H5.25a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875V7.448a3.8 3.8 0 0 0 1.25 0v7.302a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125v-9.5c0-1.174.951-2.125 2.125-2.125"
                        })]
                    })
                },
                i = (0, a(104509).wt)("markUnread", o, "default")
        },
        98303: (e, t, a) => {
            e.exports = a.p + "7a736746212f0f46.png"
        },
        103499: (e, t, a) => {
            a.r(t), a.d(t, {
                filterSmallIcon: () => o,
                iconDefinition: () => n
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.69 3.69 12.61 8.61",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.4 3.7a.7.7 0 1 0 0 1.4h11.2a.7.7 0 1 0 0-1.4zm9.5 3.594H4.1a.7.7 0 1 0 0 1.4h7.8a.7.7 0 1 0 0-1.4M5.8 10.9a.7.7 0 1 0 0 1.4h4.4a.7.7 0 1 0 0-1.4z"
                    })
                },
                o = (0, a(104509).wt)("filterSmall", n, "small")
        },
        104455: (e, t, a) => {
            e.exports = a.p + "1fac3e057348c509.png"
        },
        113174: (e, t, a) => {
            e.exports = a.p + "5a7ce521ec824981.png"
        },
        121421: (e, t, a) => {
            e.exports = a.p + "6ddab14ae1911792.png"
        },
        124394: (e, t, a) => {
            e.exports = a.p + "e02c2b36d656a621.png"
        },
        128817: (e, t, a) => {
            function n(e, t, n) {
                var o;
                let i = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!i) return;
                let r = null == (o = i.getSettings()) ? void 0 : o.tutorials;
                n ? (0, a(862759).m)({
                    userSettingsStore: i,
                    transaction: n,
                    data: {
                        tutorials: { ...r,
                            [t]: (0, a(752153).i9)(i, t)
                        }
                    }
                }) : g({
                    userAction: "TutorialActions.nextStep",
                    environment: e,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: i,
                            transaction: e,
                            data: {
                                tutorials: { ...r,
                                    [t]: (0, a(752153).i9)(i, t)
                                }
                            }
                        })
                    },
                    userId: i.id
                })
            }

            function o(e, t) {
                var n;
                let o = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!o) return;
                let i = null == (n = o.getSettings()) ? void 0 : n.tutorials;
                g({
                    userAction: "TutorialActions.prevStep",
                    environment: e,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: o,
                            transaction: e,
                            data: {
                                tutorials: { ...i,
                                    [t]: (0, a(752153).KD)(o, t)
                                }
                            }
                        })
                    },
                    userId: o.id
                })
            }

            function i(e, t) {
                var n;
                let o = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!o) return;
                let i = null == (n = o.getSettings()) ? void 0 : n.tutorials;
                (null == i ? void 0 : i[t]) !== a(212169).YD && g({
                    userAction: "TutorialActions.dismissTutorial",
                    environment: e,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: o,
                            transaction: e,
                            data: {
                                tutorials: { ...i,
                                    [t]: a(212169).YD
                                }
                            }
                        })
                    },
                    userId: o.id
                })
            }

            function r(e) {
                let t = a(728372).AppStoreCurrentUserSettingsStore.state;
                t && g({
                    userAction: "TutorialActions.resetTutorialsDebug",
                    environment: e,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                tutorials: {}
                            }
                        })
                    },
                    userId: t.id
                })
            }

            function s(e, t, n) {
                var o;
                let i = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!i || (0, a(752153).x$)(i, t)) return;
                let r = (0, a(752153).gt)(i, t);
                a(212169).c$[t].steps.findIndex(e => e.id === r) >= a(212169).c$[t].steps.findIndex(e => e.id === n) || (0, a(862759).m)({
                    userSettingsStore: i,
                    transaction: e,
                    data: {
                        tutorials: { ...null == (o = i.getSettings()) ? void 0 : o.tutorials,
                            [t]: n
                        }
                    }
                })
            }

            function d(e, t, n) {
                if ((0, a(752153).ll)(n)) return;
                let o = (0, a(752153).tb)(t, n);
                o && s(e, t, o)
            }

            function l(e) {
                var t;
                let {
                    environment: n,
                    tutorialId: o,
                    tutorialStepId: i,
                    transaction: r
                } = e, s = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!s) return;
                let d = null == (t = s.getSettings()) ? void 0 : t.tutorials;
                r ? (0, a(862759).m)({
                    userSettingsStore: s,
                    transaction: r,
                    data: {
                        tutorials: { ...d,
                            [o]: i
                        }
                    }
                }) : g({
                    userAction: "TutorialActions.nextStep",
                    environment: n,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: s,
                            transaction: e,
                            data: {
                                tutorials: { ...d,
                                    [o]: i
                                }
                            }
                        })
                    },
                    userId: s.id
                })
            }

            function c(e) {
                let t = a(728372).AppStoreCurrentUserSettingsStore.state;
                return !!t && (0, a(752153).x$)(t, e)
            }

            function g(e) {
                return (0, a(377796).createAndCommit)({ ...e,
                    canUndo: !1,
                    cellTarget: "main"
                })
            }
            a.r(t), a.d(t, {
                checkIsTutorialDone: () => c,
                dismissTutorial: () => i,
                resetTutorials: () => r,
                tutorialAdvanceToStep: () => s,
                tutorialAdvanceToStepAfter: () => d,
                tutorialGoToNextStep: () => n,
                tutorialGoToPrevStep: () => o,
                tutorialGoToStep: () => l
            })
        },
        146535: (e, t, a) => {
            e.exports = a.p + "d96dbdbbe0581121.gif"
        },
        161412: (e, t, a) => {
            e.exports = a.p + "e81e609390254b2a.png"
        },
        162103: (e, t, a) => {
            a.d(t, {
                F: () => o
            }), a(296540);
            var n = a(474848);

            function o({
                sizeVariant: e = "default"
            }) {
                let t = (0, a(109939).tz)(),
                    i = (0, a(682985).O$)(a(358386).Iq),
                    r = "small" === e ? a(103499).filterSmallIcon : a(895105).filterIcon,
                    s = (0, a(352202).zg)(a(986939).A.isMobile ? "default" : e),
                    d = (0, a(853284).U)(),
                    l = (0, a(960253).I)(() => ({
                        button: a(986939).A.isMobile ? {
                            height: 30,
                            width: 30
                        } : s.button,
                        icon: { ...s.icon,
                            ...d && {
                                fill: a(632079).Tj.icon.secondary
                            },
                            ...a(986939).A.isMobile && {
                                fill: a(632079).Tj.icon.primary,
                                width: a(104509).lD.default,
                                height: a(104509).lD.default
                            },
                            ..."unread_and_read" !== i ? {
                                fill: a(632079).Tj.blue.icon.accentPrimary
                            } : {}
                        }
                    }), [i, s, d]),
                    c = t.formatMessage({
                        defaultMessage: "Filter notifications",
                        id: "inbox.filterButton.tooltip"
                    });
                return (0, n.jsx)(a(656252).A, {
                    style: a(13649).T.popup,
                    popupType: a(986939).A.isMobile ? a(656252).z.SlideUp : a(656252).z.Popup,
                    content: e => (0, n.jsx)(a(522837).I, {
                        closePopup: e.close
                    }),
                    alignmentToOrigin: "start",
                    originGap: 2,
                    children: ({
                        onClick: e
                    }) => (0, n.jsx)(a(51831).m, {
                        content: () => c,
                        placement: "bottom",
                        alignment: "start",
                        delayThreshold: 0,
                        originGap: 6,
                        children: t => (0, n.jsx)(a(374533).A, {
                            ariaLabel: c,
                            icon: a(986939).A.isMobile ? a(430501).E : r,
                            iconStyle: l.icon,
                            onClick: e,
                            style: l.button,
                            ...t
                        })
                    })
                })
            }
        },
        189760: (e, t, a) => {
            a.d(t, {
                B: () => n,
                r: () => o
            });
            let n = {
                dog: (0, a(109939).YK)({
                    loyalWoof: {
                        id: "dogAccessory.speechBubble.loyalWoof",
                        defaultMessage: "Woof! I’m here to help!"
                    },
                    goodBoyOnDuty: {
                        id: "dogAccessory.speechBubble.goodBoyOnDuty",
                        defaultMessage: "Good boy on duty"
                    },
                    tailWags: {
                        id: "dogAccessory.speechBubble.tailWags",
                        defaultMessage: "*tail wags*"
                    },
                    barkBark: {
                        id: "dogAccessory.speechBubble.barkBark",
                        defaultMessage: "Bark bark! (That means hello)"
                    },
                    fetchedResults: {
                        id: "dogAccessory.speechBubble.fetchedResults",
                        defaultMessage: "I fetched your results!"
                    },
                    goodAI: {
                        id: "dogAccessory.speechBubble.goodAI",
                        defaultMessage: "Who’s a good AI? I’m a good AI."
                    },
                    sitStaySearch: {
                        id: "dogAccessory.speechBubble.sitStaySearch",
                        defaultMessage: "Sit. Stay. Search. Good boy."
                    },
                    willWorkForTreats: {
                        id: "dogAccessory.speechBubble.willWorkForTreats",
                        defaultMessage: "Will work for treats"
                    },
                    loyalSidekick: {
                        id: "dogAccessory.speechBubble.loyalSidekick",
                        defaultMessage: "Your loyal sidekick"
                    },
                    happyPanting: {
                        id: "dogAccessory.speechBubble.happyPanting",
                        defaultMessage: "*happy panting noises*"
                    },
                    sniffingAnswers: {
                        id: "dogAccessory.speechBubble.sniffingAnswers",
                        defaultMessage: "Sniffing out answers for you…"
                    },
                    alwaysByYourSide: {
                        id: "dogAccessory.speechBubble.alwaysByYourSide",
                        defaultMessage: "Always by your side"
                    },
                    dataRetriever: {
                        id: "dogAccessory.speechBubble.dataRetriever",
                        defaultMessage: "Data retriever at your service"
                    },
                    pawsitively: {
                        id: "dogAccessory.speechBubble.pawsitively",
                        defaultMessage: "Pawsitively ready to help"
                    },
                    digIntoThis: {
                        id: "dogAccessory.speechBubble.digIntoThis",
                        defaultMessage: "Let’s dig into this together"
                    },
                    noRuffDays: {
                        id: "dogAccessory.speechBubble.noRuffDays",
                        defaultMessage: "No ruff days on my watch"
                    },
                    boop: {
                        id: "dogAccessory.speechBubble.boop",
                        defaultMessage: "Boop!"
                    },
                    nuzzle: {
                        id: "dogAccessory.speechBubble.nuzzle",
                        defaultMessage: "*nuzzle*"
                    },
                    henloFren: {
                        id: "dogAccessory.speechBubble.henloFren",
                        defaultMessage: "Henlo fren"
                    },
                    arfArf: {
                        id: "dogAccessory.speechBubble.arfArf",
                        defaultMessage: "arf arf"
                    },
                    everyPageNeedsAGoodDog: {
                        id: "dogAccessory.speechBubble.everyPageNeedsAGoodDog",
                        defaultMessage: "Every page needs a good dog"
                    },
                    organizingWorkspace: {
                        id: "dogAccessory.speechBubble.organizingWorkspace",
                        defaultMessage: "Organizing your workspace, one bark at a time"
                    },
                    sidebarRentFree: {
                        id: "dogAccessory.speechBubble.sidebarRentFree",
                        defaultMessage: "I live in your sidebar rent-free"
                    },
                    goodestBoy: {
                        id: "dogAccessory.speechBubble.goodestBoy",
                        defaultMessage: "Notion’s goodest boy"
                    },
                    aiZoomies: {
                        id: "dogAccessory.speechBubble.aiZoomies",
                        defaultMessage: "AI-powered zoomies"
                    },
                    largeLanguageLabrador: {
                        id: "dogAccessory.speechBubble.largeLanguageLabrador",
                        defaultMessage: "Large Language Labrador at your service"
                    },
                    bellyRubsAndDatabases: {
                        id: "dogAccessory.speechBubble.bellyRubsAndDatabases",
                        defaultMessage: "Trained on belly rubs and databases"
                    },
                    neuralPetwork: {
                        id: "dogAccessory.speechBubble.neuralPetwork",
                        defaultMessage: "Neural network? I prefer neural *pet*work"
                    },
                    machineLearning: {
                        id: "dogAccessory.speechBubble.machineLearning",
                        defaultMessage: "Machine learning? I already know sit and stay"
                    },
                    goldenRetrieverModel: {
                        id: "dogAccessory.speechBubble.goldenRetrieverModel",
                        defaultMessage: "I’m basically a golden *retriever* model"
                    },
                    fetchingActionItems: {
                        id: "dogAccessory.speechBubble.fetchingActionItems",
                        defaultMessage: "Fetching your action items…"
                    },
                    sniffingThroughDocs: {
                        id: "dogAccessory.speechBubble.sniffingThroughDocs",
                        defaultMessage: "Sniffing through your docs for answers"
                    },
                    neverLoseTrack: {
                        id: "dogAccessory.speechBubble.neverLoseTrack",
                        defaultMessage: "I never lose track of a page. Or a bone."
                    },
                    toChews: {
                        id: "dogAccessory.speechBubble.toChews",
                        defaultMessage: "Your to-dos are my to-chews"
                    },
                    automatingTailWags: {
                        id: "dogAccessory.speechBubble.automatingTailWags",
                        defaultMessage: "Automating tail wags since 2026"
                    },
                    assistantsAssistant: {
                        id: "dogAccessory.speechBubble.assistantsAssistant",
                        defaultMessage: "I’m the AI assistant’s assistant"
                    },
                    accessorySlot: {
                        id: "dogAccessory.speechBubble.accessorySlot",
                        defaultMessage: "They gave me a whole accessory slot!"
                    },
                    smarterThanILook: {
                        id: "dogAccessory.speechBubble.smarterThanILook",
                        defaultMessage: "Smarter than I look. Cuter than you’d expect."
                    },
                    cuteCommand: {
                        id: "dogAccessory.speechBubble.cuteCommand",
                        defaultMessage: "/ command? More like /cute command"
                    },
                    syncedPup: {
                        id: "dogAccessory.speechBubble.syncedPup",
                        defaultMessage: "Synced pup"
                    },
                    linkedDogtabase: {
                        id: "dogAccessory.speechBubble.linkedDogtabase",
                        defaultMessage: "Linked dog-tabase"
                    },
                    dogEnteredChat: {
                        id: "dogAccessory.speechBubble.dogEnteredChat",
                        defaultMessage: "@dog has entered the chat"
                    },
                    teachNewTricks: {
                        id: "dogAccessory.speechBubble.teachNewTricks",
                        defaultMessage: "You can teach me new tricks!"
                    }
                })
            };

            function o(e) {
                return null != e && e in n
            }
        },
        190462: (e, t, a) => {
            e.exports = a.p + "46e91f58a3919e25.png"
        },
        200424: (e, t, a) => {
            e.exports = a.p + "9ade71d75a1c0e93.png"
        },
        202151: (e, t, a) => {
            e.exports = a.p + "f6041c6bf8f9f53e.png"
        },
        210037: (e, t, a) => {
            a.d(t, {
                r: () => i
            });
            var n = () => a(546605);
            class o extends n().Store {
                getInitialState() {
                    return {
                        isOpen: !1,
                        openCount: 0,
                        from: void 0
                    }
                }
            }
            let i = new o;
            (0, a(202146).exposeDebugValue)("agentPersonalizationSettingsModalStore", i)
        },
        212169: (e, t, a) => {
            a.d(t, {
                Ud: () => r,
                YD: () => i,
                c$: () => n,
                q_: () => o
            });
            let n = {
                    "sprints-onboarding": {
                        steps: [{
                            id: "current-sprint-view-tooltip"
                        }, {
                            id: "sprint-task-tooltip"
                        }, {
                            id: "complete-sprint-button-tooltip"
                        }]
                    },
                    "enhanced-qna-onboarding": {
                        steps: [{
                            id: "find-in-tooltip"
                        }, {
                            id: "mention-tooltip"
                        }]
                    },
                    "jira-sync-onboarding": {
                        steps: [{
                            id: "all-projects-tooltip"
                        }, {
                            id: "all-issues-tooltip"
                        }, {
                            id: "database-views-and-filters-tooltip"
                        }, {
                            id: "settings-to-setup-projects-and-issues"
                        }]
                    },
                    "project-management-import-onboarding": {
                        steps: [{
                            id: "your-teamspace-tooltip"
                        }, {
                            id: "all-projects-tooltip"
                        }, {
                            id: "navigate-to-project-tasks-tooltip"
                        }, {
                            id: "project-customization-tooltip"
                        }, {
                            id: "related-tasks-database-views-tooltip"
                        }]
                    },
                    "ai-comment-onboarding": {
                        steps: [{
                            id: "ai-comment-onboarding-tooltip"
                        }]
                    },
                    database_onboarding: {
                        steps: [{
                            id: "database_onboarding_status_property_tooltip"
                        }, {
                            id: "database_onboarding_add_property_tooltip"
                        }, {
                            id: "database_onboarding_database_page_tooltip"
                        }, {
                            id: "database_onboarding_board_view_tooltip"
                        }]
                    },
                    "new-user-home-workspace-tour": {
                        steps: [{
                            id: "teamspaces"
                        }]
                    }
                },
                o = "completed",
                i = "dismissed";

            function r(e, t) {
                return null == t ? void 0 : t[e]
            }
        },
        251861: (e, t, a) => {
            e.exports = a.p + "4166d500779ec2a7.png"
        },
        258527: (e, t, a) => {
            e.exports = a.p + "281f47e883097642.png"
        },
        269515: (e, t, a) => {
            e.exports = a.p + "c6b766e6d181c27f.png"
        },
        279206: (e, t, a) => {
            e.exports = a.p + "c07b23b03f31c7d0.png"
        },
        279728: (e, t, a) => {
            e.exports = a.p + "134453730e6e0d66.png"
        },
        303322: (e, t, a) => {
            a.d(t, {
                y: () => o
            });
            let n = (0, a(109939).YK)({
                favorites: {
                    id: "sidebar.favoritesSection.header",
                    defaultMessage: "Favorites"
                },
                private: {
                    id: "sidebar.privateSection.header",
                    defaultMessage: "Private"
                },
                shared: {
                    id: "sidebar.sharedSection.header",
                    defaultMessage: "Shared"
                },
                recents: {
                    id: "sidebar.recentsSection.header",
                    defaultMessage: "Recents"
                },
                myMeetings: {
                    id: "sidebar.meetingsSection.header",
                    defaultMessage: "AI meeting notes"
                },
                teamspaces: {
                    id: "sidebarOutliner.teamsSection.teamsLabel",
                    defaultMessage: "Teamspaces"
                },
                agents: {
                    id: "sidebar.agentsSection.header",
                    defaultMessage: "Agents"
                },
                meetings_today: {
                    id: "sidebar.slipperySlope.meetingsToday.heading",
                    defaultMessage: "Upcoming events"
                }
            });

            function o(e, t) {
                return t.formatMessage(n[e])
            }
        },
        303626: (e, t, a) => {
            e.exports = a.p + "d6b5a7d3fa534ce3.png"
        },
        313669: (e, t, a) => {
            e.exports = a.p + "c37502124fe50080.png"
        },
        327785: (e, t, a) => {
            a.d(t, {
                D: () => n
            }), a(944114);

            function n() {
                let e = (0, a(972740).L)(),
                    t = (0, a(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    n = (0, a(192159).TB)(t),
                    o = (0, a(682985).K8)(() => n && (0, a(717274).tL)({
                        disableExposureLogging: !0
                    }), [n]),
                    {
                        progress: i
                    } = (0, a(555583).n)({
                        useRedesigned: o
                    }),
                    r = (0, a(262166).HO)((0, a(192159).AI)(t));
                return (0, a(682985).K8)(() => {
                    if (!(0, a(717274).sw)()) return [];
                    let e = [];
                    return r && !n ? e.push("dog") : r && o && i >= 1 && e.push("dog"), e
                }, [r, n, o, i])
            }
        },
        340916: (e, t, a) => {
            e.exports = a.p + "8cc12fd49d607b13.png"
        },
        358667: (e, t, a) => {
            a.r(t), a.d(t, {
                openChatPanel: () => n
            }), a(16280), a(814603), a(147566), a(198721);

            function n(e) {
                var t;
                let n, {
                        environment: o,
                        store: i,
                        chatPanelState: r,
                        source: s = "button"
                    } = e,
                    d = a(680007).default.mark("agent_time_to_render"),
                    l = (0, a(420459).G4)();
                a(562733).zI.setState({ ...a(562733).zI.state,
                    agentTimeToRenderMetric: d,
                    openSource: s,
                    completionContext: l
                });
                let c = r ? ? {},
                    g = c.isNewThread,
                    p = "threadId" in c && !!c.threadId;
                !g && !p && a(973240).L.threadId && a(973240).L.updatedAt && a(973240).L.updatedAt + 6e5 > Date.now() && (c = { ...c,
                    threadId: a(973240).L.threadId
                }), (0, a(487246).a)();
                let u = (0, a(548124).getMergedChatSidebarRouteData)({
                        environment: o,
                        update: c
                    }),
                    f = (0, a(548124).routeArgsGivenChatSidebarRouteData)(u),
                    h = o.RouterStore.state.route;
                if (i)
                    if ((null == i ? void 0 : i.table) === a(832375).evP) n = (0, a(483227).Ef)({
                        environment: o,
                        updates: { ...f,
                            scrollToBlockId: void 0,
                            store: i
                        }
                    });
                    else if ((null == i ? void 0 : i.table) === a(832375).C0E) {
                    let e = {};
                    "agent" === h.name && (e = {
                        workflowViewType: h.workflowViewType,
                        workflowViewId: h.workflowViewId,
                        workflowPrompt: h.workflowPrompt,
                        agentChatThreadId: h.agentChatThreadId
                    }), n = (0, a(453573).Lm)({
                        workflowId: i.id,
                        params: {
                            workflowViewType: "agent",
                            ...f,
                            ...e
                        }
                    })
                } else(0, a(722371).HB)(i);
                else if (!i && (0, a(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(h)) {
                    let e = new URL(window.location.href);
                    f.chatThreadId && e.searchParams.set(a(737869).P5, f.chatThreadId), n = e.toString()
                }
                if (!n) throw Error(`Cannot open chat panel on route ${h.name} without a store`);
                let b = a(728372).AppStoreMainEditorCurrentBlockStore.state !== i;
                (0, a(79266).navigate)({
                    environment: o,
                    url: n,
                    redirect: !b
                });
                let m = (0, a(828560).hw)(),
                    y = a(562733).zI.state.chatPanelMode;
                m || (m && "sidebar" === y ? (0, a(16822).h)({
                    environment: o,
                    isExpanded: !0,
                    from: "slippery_slope_experiment",
                    saveDetailsSidebarPreference: !1
                }) : function(e) {
                    let {
                        environment: t
                    } = e;
                    !(0, a(712358).K)(t) || (0, a(548124).getIsChatPanelOpen)(t) || (a(984858).sidebarExpandedStore.setState(!1), a(475097).default.setSidebarExpandedStoreState(!1), a(562733).zI.setState({ ...a(562733).zI.state,
                        reopenMainSidebarOnClose: !0
                    }))
                }({
                    environment: o
                }));
                let C = null == (t = (0, a(328765).S)()) ? void 0 : t.id;
                C && (o.api.callApi({
                    eventName: "warmSearchCache",
                    environment: o,
                    data: {
                        spaceId: C
                    }
                }), o.api.callCellCompatibleApi({
                    eventName: "warmVectorDBCache",
                    environment: o,
                    data: {
                        spaceId: C
                    },
                    cellNavigation: {
                        spaceId: C
                    }
                })), (async () => {
                    try {
                        (await Promise.all([a.e(36556), a.e(55373), a.e(36192), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(53050), a.e(87353), a.e(5721), a.e(64696), a.e(94495)]).then(a.bind(a, 305721))).trackAgentOpened({
                            environment: o,
                            from: s,
                            leftNotionSidebarOpenState: a(984858).sidebarExpandedStore.state
                        })
                    } catch (e) {}
                })()
            }
        },
        368733: (e, t, a) => {
            e.exports = a.p + "6fd3d43e1320e88a.png"
        },
        386194: (e, t, a) => {
            e.exports = a.p + "6847e3eeb9ba8341.png"
        },
        390123: (e, t, a) => {
            e.exports = a.p + "e67d8b05e7c8adcb.png"
        },
        411106: (e, t, a) => {
            a.d(t, {
                L: () => r,
                p: () => i
            });
            let n = ["aiMeetingNotes", "meetAgent", "academy", "consultants"],
                o = ["aiMeetingNotes", "meetAgent", "database", "academy"],
                i = ["aiMeetingNotes", "mailAndCalendar", "aiSearch", "meetAgent"];

            function r(e, t) {
                return e ? "en-US" === t ? n : ["aiMeetingNotes", "meetAgent", "academy", "connectedApps"] : o
            }
        },
        420459: (e, t, a) => {
            a.d(t, {
                G4: () => r,
                gu: () => o,
                rs: () => i
            }), a(18107), a(967357);
            var n = () => a(970831);

            function o(e) {
                let t = e ? ? ("editing" === a(358377).default.state.mode ? a(358377).default.state.multiSelection : void 0);
                if (!t) return;
                let o = t.start.store,
                    i = o.getRecordStoreUIRoot(),
                    r = a(521595).n.findNodeFromStore(o),
                    s = (0, a(534012).T)(o),
                    d = null == s ? void 0 : s.getRecordStoreUIParent(),
                    l = (0, a(730994).K3)(i),
                    c = s && s instanceof n().B && s !== i ? s : void 0,
                    g = c ? ? r;
                if (i && i instanceof n().B && g) return {
                    type: "cursor",
                    textSelection: t,
                    currentPage: i,
                    currentBlock: c,
                    origin: g,
                    currentParent: d,
                    scrollerStore: l,
                    isPageTitle: i.id === o.id
                }
            }

            function i() {
                let {
                    stores: e
                } = a(584265).default.state, t = a(358377).default.state, o = "empty" !== t.mode ? t.multiSelection : void 0, i = "empty" !== t.mode ? t.multiSelection.start.store : void 0, r = i ? i.getRecordStoreUIRoot() : void 0;
                if (!(r instanceof n().B)) {
                    let e, t = null == i ? void 0 : i.getRecordStoreUIParent();
                    for (; null != t;) t instanceof n().B && (e = t), t = t.getRecordStoreUIParent();
                    e && (r = e)
                }
                if (o && r && r instanceof n().B) {
                    let t = (0, a(534012).T)(o.end.store),
                        n = null == t ? void 0 : t.getRecordStoreUIParent(),
                        i = (0, a(730994).K3)(r);
                    if (t && n) return {
                        type: "textSelection",
                        stores: e,
                        textSelection: o,
                        currentPage: r,
                        origin: t,
                        endBlock: t,
                        endBlockParent: n,
                        scrollerStore: i
                    }
                }
            }

            function r() {
                if (a(584265).default.state.stores.length > 0) {
                    let e = a(358377).default.state;
                    if ("empty" === e.mode) {
                        let e = function() {
                            if (1 !== a(584265).default.state.stores.length) return;
                            let e = a(584265).default.state.stores[0];
                            if (!(e instanceof n().B)) return;
                            let t = e.getTitleStore();
                            if (t) return {
                                start: {
                                    store: t,
                                    index: 0
                                },
                                end: {
                                    store: t,
                                    index: 0
                                }
                            }
                        }();
                        return e ? o(e) : function() {
                            let {
                                stores: e
                            } = a(584265).default.state, t = e[0], o = e.at(-1), i = t ? t.getRecordStoreUIRoot() : void 0;
                            if (i && i instanceof n().B && o) {
                                let t = (0, a(730994).K3)(i);
                                return {
                                    type: "blockSelection",
                                    stores: e,
                                    currentPage: i,
                                    origin: o,
                                    scrollerStore: t
                                }
                            }
                        }()
                    }
                    return (0, a(971541).k)(e.multiSelection) ? o() : i()
                }
            }
        },
        422550: (e, t, a) => {
            e.exports = a.p + "31299301d549e6d5.png"
        },
        441892: (e, t, a) => {
            e.exports = a.p + "46e349aec1d78e16.png"
        },
        445283: (e, t, a) => {
            a.d(t, {
                N: () => n
            });

            function n(e) {
                if ("avatar" === e) return a(616922).eQ;
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
                else return (0, a(722371).HB)(e)
            }
        },
        445872: (e, t, a) => {
            e.exports = a.p + "58cc418a06d8c43b.png"
        },
        448734: (e, t, a) => {
            a.d(t, {
                jh: () => b,
                wV: () => h,
                Ax: () => m
            });
            var n = a(296540);
            let o = a.p + "f3a1c2555bc7b26c.gif",
                i = a.p + "8ab52115da3e3fbd.gif",
                r = a.p + "160f5613d44c23ea.gif",
                s = a.p + "b68268645067ada1.gif",
                d = a.p + "fce2247087f1d227.gif",
                l = a.p + "896e2255367f2b04.gif";
            var c = a(474848);
            let g = {
                    dark: [a(146535), r, d],
                    light: [a(737497), s, l]
                },
                p = {
                    dark: [r, d],
                    light: [s, l]
                },
                u = new(a(839621)).O(1);

            function f({
                isDarkMode: e,
                onAssetChange: t,
                animationMode: n
            }) {
                let o = "minimal" === n ? p[e ? "dark" : "light"] : g[e ? "dark" : "light"],
                    i = Math.floor(Math.random() * o.length);
                u.enqueue(async () => {
                    t({
                        type: "animated",
                        asset: o[i]
                    }), await new Promise(e => setTimeout(e, 7e3)), t({
                        type: "static",
                        asset: a(200424)
                    })
                }).catch(e => {
                    console.error(`Error showing animated asset: ${e}`)
                })
            }

            function h(e) {
                let {
                    sizeVariant: t,
                    onMouseEnter: r,
                    animationMode: s = "normal"
                } = e, d = (0, a(960253).I)(() => {
                    let e = (0, a(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: a(632079).Tj.assistantCornerButtonBackground,
                            overflow: "hidden",
                            transform: "scaleX(var(--direction, 1))"
                        },
                        faceImg: {
                            height: e,
                            width: e,
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            WebkitTouchCallout: "none",
                            WebkitUserDrag: "none"
                        }
                    }
                }, [t]), [l, g] = (0, a(848135).B)(), p = function(e, t) {
                    let [r, s] = (0, n.useState)({
                        type: "static",
                        asset: a(200424)
                    }), d = "dark" === (0, a(960253).e)();
                    (0, n.useEffect)(() => {
                        let e = setInterval(() => {
                            f({
                                isDarkMode: d,
                                onAssetChange: s,
                                animationMode: t
                            })
                        }, 3e4);
                        return () => {
                            clearInterval(e), u.cancel()
                        }
                    }, [d, t]);
                    let l = (0, n.useMemo)(() => d ? o : i, [d]);
                    return (0, n.useMemo)(() => "animated" === r.type ? r.asset : e && "minimal" !== t && .1 >= Math.random() ? l : (e && f({
                        isDarkMode: d,
                        onAssetChange: s,
                        animationMode: t
                    }), r.asset), [l, r, d, e, t])
                }(g, s);
                return (0, c.jsx)("div", {
                    ref: l,
                    style: d.faceImgWrap,
                    onMouseEnter: r,
                    children: (0, c.jsx)("img", {
                        style: d.faceImg,
                        src: p,
                        alt: "Notion AI face"
                    })
                })
            }

            function b(e) {
                let {
                    sizeVariant: t
                } = e, n = (0, a(960253).I)(() => {
                    let e = (0, a(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: a(632079).Tj.assistantCornerButtonBackground,
                            overflow: "hidden",
                            transform: "scaleX(var(--direction, 1))",
                            WebkitUserDrag: "none"
                        },
                        faceImg: {
                            height: e,
                            width: e
                        }
                    }
                }, [t]), o = g["dark" === (0, a(960253).e)() ? "dark" : "light"][0];
                return (0, c.jsx)("div", {
                    style: n.faceImgWrap,
                    children: (0, c.jsx)("img", {
                        style: n.faceImg,
                        src: o,
                        alt: "Notion AI face"
                    })
                })
            }

            function m(e) {
                let {
                    variant: t,
                    shadowVariant: n = "strong",
                    cursorStyle: o,
                    ...i
                } = e, r = (0, a(960253).e)(), s = (0, a(960253).I)(() => {
                    let e = (0, a(445283).N)(t),
                        i = "dark" === r ? [a(632079).Tj.shadow.base.sm, `0 0 0 1px ${a(632079).Tj.border.secondaryTranslucent}`, "0 0.5px 0 0 rgba(255, 255, 255, 0.20) inset"] : [a(632079).Tj.shadow.base.md, `0 0 0 1px ${a(632079).Tj.border.secondaryTranslucent}`];
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: a(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === n && {
                                boxShadow: e >= 90 ? a(632079).Tj.shadowMDThickerOutline : a(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === n && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? a(632079).Tj.shadowSMThickerOutline : a(632079).Tj.shadow.outline.md
                            },
                            ..."notification" === n && {
                                boxShadow: i.join(", ")
                            },
                            overflow: "hidden",
                            ...o && {
                                cursor: o
                            },
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            WebkitTouchCallout: "none"
                        }
                    }
                }, [t, n, o, r]);
                return (0, c.jsx)("div", {
                    style: s.faceImgWrap,
                    children: (0, c.jsx)(h, {
                        sizeVariant: t,
                        ...i
                    })
                })
            }
        },
        458364: (e, t, a) => {
            a.d(t, {
                x: () => r
            }), a(296540);
            var n = a(474848);
            let o = {
                    "baseball-cap": a(584758),
                    bow: a(313669),
                    cat: a(641085),
                    cherry: a(941670),
                    cowboy: a(161412),
                    crown: a(722784),
                    dog: a(965967),
                    duck: a(190462),
                    firefighter: a(124394),
                    flower: a(784836),
                    glasses: a(31461),
                    headphone: a(202151),
                    leaf: a(938989),
                    magician: a(550122),
                    mustache: a(546579),
                    paprika: a(368733),
                    pencil: a(303626),
                    propeller: a(58344),
                    "safety-hat": a(682759),
                    scarf: a(832338),
                    "seasonal-bat": a(8779),
                    "seasonal-demon": a(269515),
                    "seasonal-frankenstein": a(441892),
                    "seasonal-pumpkin": a(113174),
                    "seasonal-santa-hat": a(970878),
                    "seasonal-new-year": a(465707)
                },
                i = {
                    "baseball-cap": a(340916),
                    bow: a(279206),
                    cat: a(422550),
                    cherry: a(580899),
                    cowboy: a(251861),
                    crown: a(121421),
                    dog: a(528440),
                    duck: a(104455),
                    firefighter: a(498667),
                    flower: a(733785),
                    glasses: a(701743),
                    headphone: a(665008),
                    leaf: a(620842),
                    magician: a(625031),
                    mustache: a(445872),
                    paprika: a(386194),
                    pencil: a(390123),
                    propeller: a(783925),
                    "safety-hat": a(702404),
                    scarf: a(98303),
                    "seasonal-bat": a(688220),
                    "seasonal-demon": a(279728),
                    "seasonal-frankenstein": a(879817),
                    "seasonal-pumpkin": a(258527),
                    "seasonal-santa-hat": a(667115),
                    "seasonal-new-year": a(49396)
                };

            function r({
                accessory: e,
                variant: t = "large",
                shadowVariant: s,
                smallerFace: d,
                accessorySpeechBubblePlacement: l = "none",
                speechBubbleTextOverride: c,
                speechBubbleVerticalOffsetPx: g,
                speechBubbleHorizontalOffsetPx: p,
                animateDogAccessory: u = !0,
                speechBubbleTailCircleTop: f,
                speechBubbleTailCircleInsetInlineStartPx: h,
                ...b
            }) {
                let m = "dark" === (0, a(960253).e)(),
                    y = (0, a(445283).N)(t),
                    C = Math.round(1.5625 * y),
                    k = (0, a(960253).I)(() => ({
                        container: {
                            position: "relative",
                            width: y,
                            height: y,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        faceWrapper: {
                            transform: d ? "scale(0.85)" : void 0
                        },
                        accessoryOverlay: {
                            position: "absolute",
                            width: C,
                            height: C,
                            objectFit: "contain",
                            pointerEvents: "none",
                            top: "50%",
                            transform: "translate(calc(var(--direction, 1) * -50%), -50%) scaleX(var(--direction, 1))",
                            insetInlineStart: "50%"
                        }
                    }), [y, C, d]),
                    v = e ? (m ? i : o)[e] : null;
                return (0, n.jsx)("div", { ...b,
                    children: (0, n.jsxs)("div", {
                        style: k.container,
                        children: [(0, n.jsx)("div", {
                            style: k.faceWrapper,
                            children: (0, n.jsx)(a(448734).Ax, {
                                variant: t,
                                animationMode: e ? "minimal" : "normal",
                                shadowVariant: s
                            })
                        }), "dog" === e ? (0, n.jsx)("div", {
                            style: k.accessoryOverlay,
                            children: (0, n.jsx)(a(503681).z, {
                                size: C,
                                speechBubblePlacement: l,
                                speechBubbleTextOverride: c,
                                speechBubbleVerticalOffsetPx: g,
                                speechBubbleHorizontalOffsetPx: p,
                                speechBubbleTailCircleTop: f,
                                speechBubbleTailCircleInsetInlineStartPx: h,
                                animated: u
                            })
                        }) : v ? (0, n.jsx)("img", {
                            src: v,
                            alt: `${e} accessory`,
                            style: k.accessoryOverlay
                        }) : void 0]
                    })
                })
            }
        },
        460327: (e, t, a) => {
            a.d(t, {
                Y: () => i
            }), a(296540);
            var n = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.638-6.938 5.705 0 1.438.583 2.752 1.617 3.759a.63.63 0 0 1 .18.547 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.008c4.006-.158 6.545-2.727 6.545-5.698m1.25 0c0 3.803-3.234 6.766-7.747 6.947l-.44.01c-.88 0-1.712-.107-2.485-.3-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.818 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.734-1.756-4.41 0-3.926 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                        }), (0, n.jsx)("path", {
                            d: "M10 5.875c.346 0 .626.28.626.625v2.375H13a.625.625 0 1 1 0 1.25h-2.375V12.5a.625.625 0 1 1-1.25 0v-2.375H7a.625.625 0 1 1 0-1.25h2.375V6.5c0-.346.28-.625.626-.625"
                        })]
                    })
                },
                i = (0, a(104509).wt)("chatBubblePlus", o, "default")
        },
        463226: (e, t, a) => {
            a.d(t, {
                DV: () => c,
                EQ: () => s,
                Mu: () => d,
                Nr: () => l,
                cP: () => o,
                m0: () => r,
                m2: () => n,
                s8: () => i
            }), a(898992), a(354520);
            let n = {
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

            function o(e) {
                let {
                    store: t,
                    from: n
                } = e;
                if (t.update(e => ({ ...e,
                        isOpen: !0,
                        openCount: e.openCount + 1,
                        from: n || "unknown"
                    })), e.shouldSetSeenPersonalizationSettingsModal) {
                    let t = a(728372).AppStoreSidebarSpaceViewStore.state;
                    t && (0, a(377796).createAndCommit)({
                        environment: e.environment,
                        cellTarget: {
                            spaceWithId: t.getSpaceId()
                        },
                        userAction: "AgentPersonalizationSettings.markSeen",
                        canUndo: !1,
                        perform: e => {
                            let n = t.getSettings() || {},
                                o = { ...n,
                                    agent_personalization_settings: { ...n.agent_personalization_settings || {},
                                        has_already_seen_personalization_settings_modal: !0
                                    }
                                };
                            a(380762).AG(t, e, o)
                        }
                    })
                }
            }

            function i(e) {
                let {
                    store: t
                } = e;
                t.update(e => ({ ...e,
                    isOpen: !1
                }))
            }

            function r(e) {
                let {
                    store: t
                } = e;
                return t.state.isOpen
            }

            function s(e) {
                let {
                    store: t
                } = e;
                return t.state.from || "unknown"
            }

            function d(e) {
                var t;
                let {
                    environment: n,
                    agentName: o,
                    customizationItems: i,
                    newPageIdToAdd: r,
                    contextPageId: s
                } = e, d = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!d) return;
                let l = null == (t = d.getSettings()) ? void 0 : t.agent_personalization_settings,
                    c = (null == l ? void 0 : l.recently_used_pages) || [];
                r && ((c = c.filter(e => e.page_id !== r)).unshift({
                    page_id: r,
                    used_at: Date.now()
                }), c = c.slice(0, 10));
                let g = {
                    name: o,
                    customization_items: i,
                    context_page_id: s,
                    recently_used_pages: c.length > 0 ? c : void 0,
                    has_already_seen_personalization_settings_modal: (null == l ? void 0 : l.has_already_seen_personalization_settings_modal) || !0
                };
                (0, a(795676).A)(g, l) || (0, a(377796).createAndCommit)({
                    environment: n,
                    cellTarget: {
                        spaceWithId: d.getSpaceId()
                    },
                    userAction: "AgentPersonalizationSettings.save",
                    canUndo: !0,
                    perform: e => {
                        let t = d.getSettings() || {},
                            o = { ...t,
                                agent_personalization_settings: { ...t.agent_personalization_settings || {},
                                    ...g
                                }
                            };
                        a(380762).AG(d, e, o);
                        let i = null == l ? void 0 : l.context_page_id;
                        if (void 0 !== i && i !== s) {
                            let t = new(a(970831)).B(n, {
                                table: a(832375).evP,
                                id: i
                            }).getPromptStore();
                            null != t && t.isDefined() && (0, a(173157).z)({
                                store: t,
                                data: {
                                    alive: !1
                                },
                                transaction: e
                            })
                        }
                        void 0 !== s && (t => {
                            let o = new(a(970831)).B(n, {
                                    table: a(832375).evP,
                                    id: t
                                }),
                                i = o.getSpaceId();
                            if (!i) return;
                            let r = o.getPromptStore();
                            if (r) {
                                if (r.isDefined()) return (0, a(173157).z)({
                                    store: r,
                                    data: {
                                        alive: !0,
                                        prompt_type: "instruction"
                                    },
                                    transaction: e
                                });
                                a(124937).vt({
                                    environment: n,
                                    table: a(832375).dod,
                                    args: {
                                        id: (0, a(986339).yW)(o.id),
                                        space_id: i,
                                        parent_id: o.id,
                                        parent_table: a(832375).evP,
                                        prompt_type: "instruction"
                                    },
                                    inMemoryRecordCache: o.inMemoryRecordCache,
                                    transaction: e
                                })
                            }
                        })(s)
                    }
                })
            }

            function l() {
                let e = (0, a(327785).D)();
                return (0, a(682985).K8)(() => {
                    let t = a(218744).default.getConfigKey("agent_seasonal_accessories", "batch"),
                        o = a(218744).default.getConfigKey("agent_seasonal_accessories", "batch_expiration_time"),
                        i = o && new Date(o) < new Date;
                    return a(485890).sy.filter(a => {
                        let o = n[a];
                        return "permanent" === o || ("unlockable" === o ? e.includes(a) : o === t && !i)
                    })
                }, [e])
            }

            function c(e) {
                let t = l();
                return (0, a(682985).K8)(() => {
                    var n;
                    let o = null == e ? void 0 : e.getSettings();
                    if (!o) return;
                    let i = o.agent_personalization_settings;
                    if (null != i && null != (n = i.customization_items) && n[0]) {
                        let e = i.customization_items[0];
                        if (t.includes(e)) return e
                    }
                    if (null == i ? void 0 : i.has_already_seen_personalization_settings_modal) return;
                    let r = a(218744).default.checkGate({
                            gateName: "adoption_enable_agent_personalization_phase_one",
                            disableExposureLogging: !0
                        }),
                        s = a(218744).default.checkGate({
                            gateName: "adoption_enable_agent_personalization_phase_two",
                            disableExposureLogging: !0
                        });
                    if (r) {
                        let e = a(218744).default.getEligibleGroup({
                            experimentId: "adoption_agent_random_personalization_bandit",
                            defaultGroup: "control"
                        });
                        if (!e) return;
                        let t = function(e) {
                            let {
                                variant: t
                            } = e, n = g[t];
                            if (!n) return;
                            let o = a(218744).default.getEligibleGroup({
                                experimentId: n
                            });
                            if (o && "control" !== o && o && a(485890).sy.includes(o)) return o
                        }({
                            variant: e
                        });
                        if (t) return t
                    } else if (s) {
                        let {
                            accessory: e
                        } = function() {
                            let e, t = a(218744).default.getEligibleGroup({
                                experimentId: "adoption_agent_long_running_bandit",
                                defaultGroup: "ineligible"
                            });
                            if ("test" === t) {
                                let t = a(218744).default.getEligibleGroup({
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
            let g = {
                control: void 0,
                group_one: "adoption_agent_personalization_phase_one_group_one",
                group_two: "adoption_agent_personalization_phase_one_group_two",
                group_three: "adoption_agent_personalization_phase_one_group_three",
                group_four: "adoption_agent_personalization_phase_one_group_four"
            }
        },
        465707: (e, t, a) => {
            e.exports = a.p + "c64bedded659e18d.png"
        },
        476743: (e, t, a) => {
            a.d(t, {
                a: () => n
            });

            function n() {
                return (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore)
            }
        },
        487415: (e, t, a) => {
            a.d(t, {
                O: () => i
            }), a(296540);
            var n = a(474848);
            let o = {
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
                i = (0, a(104509).wt)("arrowChevronDoubleForward", o, "default")
        },
        498667: (e, t, a) => {
            e.exports = a.p + "ebbfc682ffb9183b.png"
        },
        503681: (e, t, a) => {
            a.d(t, {
                z: () => k
            });
            var n = a(296540);
            a(581454);
            var o = a(474848);
            let i = `
	animation-duration: 2s;
	animation-direction: alternate;
	animation-iteration-count: infinite;
	animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
`,
                r = "M84.2513 81.7395C88.977 82.4048 90.6717 77.9739 90.8562 75.5247C91.1236 73.7435 93.5045 77.4968 90.1838 81.7561C88.1114 84.4142 84.495 84.3517 82.7126 83.226C82.1051 82.9047 81.0102 81.2832 84.2513 81.7395Z",
                s = "M70.5719 72.9453C69.9099 76.0342 66.8682 80.1714 66.3343 81.996C66.193 82.4788 65.8919 84.6494 67.5925 85.3012C68.6496 85.7063 70.0486 85.2456 71.0672 83.8076C71.9661 82.5385 73.2389 80.3849 73.7254 78.8907",
                d = "M81.3674 80.6071C80.0096 80.6071 75.6271 81.1468 75.3813 83.6491C75.3069 84.406 75.897 85.2639 76.991 85.2639C80.7189 85.2639 83.586 85.2878 83.9051 85.2639C86.1871 85.093 86.7281 83.2789 86.6934 81.7783C86.634 79.2117 85.903 77.1869 84.9662 75.5C83.2121 72.3413 80.7365 70.3673 80.5986 68.2393",
                l = "M81.8804 67.393L82.5295 65.5811C83.4844 62.2994 81.8804 57.7899 80.228 55.9816C79.6109 55.3062 77.9062 53.833 75.3259 53.833C73.4755 53.833 71.7706 54.8378 70.9613 55.6264C69.6193 56.934 69.1684 58.8522 68.4948 60.2513C67.4927 62.3325 65.1729 61.6477 64.0865 63.9062C63.5091 64.9101 63.3667 67.0446 64.0868 68.3343C64.807 69.624 66.6161 70.4021 68.4948 70.7995C70.264 71.1737 71.5432 71.2337 72.9333 71.2337C73.7944 71.2252 75.5588 71.0894 77.3272 70.4021",
                c = "M66.9294 64.6895C66.9001 65.1717 66.656 65.5492 65.662 65.4888C64.668 65.4285 64.4714 65.0242 64.5007 64.542C64.53 64.0598 65.0974 63.702 65.768 63.7427C66.4387 63.7834 66.9586 64.2073 66.9294 64.6895Z",
                g = "M79.6816 66.979C79.6816 64.529 80.4154 60.3832 81.1518 57.416C83.6256 60.95 86.3042 66.884 83.3275 68.6685C81.504 69.7617 79.6816 69.0329 79.6816 66.979Z",
                p = "M72.2065 59.658C71.7961 59.6024 71.5075 59.231 71.5817 58.6829C71.6559 58.1348 72.0328 57.8536 72.4433 57.9091C72.8538 57.9647 73.1335 58.4013 73.0681 58.8842C73.0028 59.3671 72.617 59.7135 72.2065 59.658Z",
                u = "M75.7954 59.8435C75.3849 59.7879 75.0964 59.4166 75.1706 58.8685C75.2448 58.3204 75.6217 58.0391 76.0322 58.0947C76.4426 58.1503 76.7224 58.5868 76.657 59.0697C76.5916 59.5526 76.2059 59.8991 75.7954 59.8435Z",
                f = "M73.062 79.4326 C71.7367 81.3275 71.5151 81.617 71.1477 83.1804 C70.8243 84.5568 71.8802 85.8228 73.738 85.2791 C75.5959 84.7353 77.938 81.4043 77.938 79.4327 C77.938 79.4327 77.938 79.4327 77.938 79.4327",
                h = "M72.4372 80.6925C68.0273 84 73.4246 85.323 76.0274 84.4997C78.874 83.5992 81.1506 81.6677 81.1448 79.1513C81.1423 78.0631 80.9619 76.9652 80.9368 76.7693L72.5612 74.2937C72.4563 77.7978 72.5212 79.1973 72.4372 80.6925Z",
                b = "M80.9666 77.4694C80.4498 79.3203 80.3912 80.6835 80.4498 81.2046C80.7488 83.8633 78.4457 84.1225 74.5339 84.5623C70.1565 85.0545 69.7203 82.221 72.7191 80.4413C71.6821 78.44 72.4056 75.8018 72.9875 74.8239",
                m = `
	#agent-acc-dog-left-leg-fill {
		animation-name: agent-acc-dog-left-leg-fill;
		${i}
	}
	@keyframes agent-acc-dog-left-leg-fill {
		0%, 40% { d: path("M72.4372 80.6925C68.0273 84 73.4246 85.323 76.0274 84.4997C78.874 83.5992 81.1506 81.6677 81.1448 79.1513C81.1423 78.0631 80.9619 76.9652 80.9368 76.7693L72.5612 74.2937C72.4563 77.7978 72.5212 79.1973 72.4372 80.6925Z"); }
		60%, 100% { d: path("M67.4372 81.6925C63.0273 85 68.4246 86.323 71.0274 85.4997C73.874 84.5992 76.1506 82.6677 76.1448 80.1513C76.1423 79.0631 75.9619 77.9652 75.9368 77.7693L67.5612 75.2937C67.4563 78.7978 67.5212 80.1973 67.4372 81.6925Z"); }
	}

	#agent-acc-dog-left-leg-stroke {
		animation-name: agent-acc-dog-left-leg-stroke;
		${i}
	}
	@keyframes agent-acc-dog-left-leg-stroke {
		0%, 40% { d: path("M80.9666 77.4694C80.4498 79.3203 80.3912 80.6835 80.4498 81.2046C80.7488 83.8633 78.4457 84.1225 74.5339 84.5623C70.1565 85.0545 69.7203 82.221 72.7191 80.4413C71.6821 78.44 72.4056 75.8018 72.9875 74.8239"); }
		60%, 100% { d: path("M75.9666 78.4694C75.4498 80.3203 75.3912 81.6835 75.4498 82.2046C75.7488 84.8633 73.4457 85.1225 69.5339 85.5623C65.1565 86.0545 64.7203 83.221 67.7191 81.4413C66.6821 79.44 67.4056 76.8018 67.9875 75.8239"); }
	}

	#agent-acc-dog-body-fill {
		animation-name: agent-acc-dog-body-fill;
		${i}
	}
	@keyframes agent-acc-dog-body-fill {
		0%, 40% { d: path("M68.5167 78.823C69.8415 76.5999 69.839 74.928 70.6031 73.1034C71.1234 70.4713 72.2666 69.7739 71.7436 67.9773C71.2207 66.1807 77.0344 65.2132 80.0066 64.9541C79.9864 66.4045 80.3439 69.6312 81.9353 70.9346C83.4208 73.1034 86.8612 75.7498 86.6665 82.0341C86.62 83.5343 86.2068 84.9953 84.4783 85.2635C84.1621 85.3126 80.7189 85.2635 76.9909 85.2635C75.8969 85.2635 75.3068 84.4056 75.3812 83.6487L72.4044 82.6585C72.1072 83.286 71.0647 84.3211 70.5806 84.7602C69.2791 86.036 67.2704 85.6107 66.9509 84.2668C66.5687 82.6594 67.7553 80.1008 68.5167 78.823Z"); }
		60%, 100% { d: path("M81.0632 70.0344C77.2518 69.1088 71.6576 71.5318 71.3769 71.6722L64.9737 70.7318L64.8825 81.0367C62.5186 81.446 61.5576 81.9423 61.3013 84.2131C61.0669 86.2894 61.8662 87.6019 67.3859 87.1218C69.259 86.7053 72.5358 86.0087 74.566 85.6664C76.4228 86.1123 79.5177 85.6581 82.8882 85.1022C86.5194 84.5032 87.63 79.9392 87.474 78.1766C87.3805 74.6202 84.3388 70.8299 81.0632 70.0344Z"); }
	}

	#agent-acc-dog-left-hand-fill {
		animation-name: agent-acc-dog-left-hand-fill;
		${i}
	}
	@keyframes agent-acc-dog-left-hand-fill {
		0%, 40% { d: path("M70.6026 72.8877C70.0746 74.8362 69.6915 76.4536 68.3667 78.6767C67.6053 79.9545 65.9049 82.533 66.4449 84.2665C66.8557 85.5853 68.7731 86.0357 70.0746 84.7599C70.5587 84.3208 71.6012 83.2856 71.8984 82.6582Z"); }
		60%, 100% { d: path("M54.3039 83.5936C54.6481 80.5445 59.7873 79.9305 61.9469 79.7188C65.9916 80.4513 73.3327 82.3533 70.3394 84.1016C69.628 83.9999 64.1182 85.1602 61.4523 85.7531C55.6035 86.7059 54.0695 85.6699 54.3039 83.5936Z"); }
	}

	#agent-acc-dog-left-hand-stroke {
		animation-name: agent-acc-dog-left-hand-stroke;
		${i}
	}
	@keyframes agent-acc-dog-left-hand-stroke {
		0%, 40% { d: path("M70.5719 72.9453C69.9099 76.0342 66.8682 80.1714 66.3343 81.996C66.193 82.4788 65.8919 84.6494 67.5925 85.3012C68.6496 85.7063 70.0486 85.2456 71.0672 83.8076C71.9661 82.5385 73.2389 80.3849 73.7254 78.8907"); }
		60%, 100% { d: path("M65.3076 78.1101C62.2783 79.3049 58.5688 79.9167 56.2894 81.0063C55.4092 81.4271 53.5897 83.2138 54.3842 84.8525C54.9456 86.0103 56.4324 86.1452 58.1945 86.1452C59.8961 86.1452 63.4693 85.3624 65.7494 84.6478"); }
	}

	#agent-acc-dog-tail {
		animation-name: agent-acc-dog-tail;
		${i}
	}
	@keyframes agent-acc-dog-tail {
		0%, 40% { d: path("M84.2513 81.7395C88.977 82.4048 90.6717 77.9739 90.8562 75.5247C91.1236 73.7435 93.5045 77.4968 90.1838 81.7561C88.1114 84.4142 84.495 84.3517 82.7126 83.226C82.1051 82.9047 81.0102 81.2832 84.2513 81.7395Z"); }
		60%, 80%, 100% { d: path("M85.2796 79.255C90.0172 78.6799 90.5127 73.9619 90.0597 71.5479C89.8591 69.7579 93.1268 72.7709 91.016 77.7421C89.6987 80.8444 86.1884 81.7162 84.176 81.0879C83.5063 80.934 82.0305 79.6494 85.2796 79.255Z"); }
		70%, 90% { d: path("M85.7386 77.9554C90.0132 80.0775 93.0191 76.4074 93.9668 74.1415C94.7825 72.5356 95.8577 76.8483 91.363 79.8426C88.5579 81.7112 85.1459 80.5111 83.8096 78.8806C83.3345 78.3841 82.807 76.5 85.7386 77.9554Z"); }
	}

	#agent-acc-dog-right-hand-fill {
		animation-name: agent-acc-dog-right-hand-fill;
		${i}
	}
	@keyframes agent-acc-dog-right-hand-fill {
		0%, 40% { d: path("M71.1477 83.1804 C71.5151 81.6169 71.7367 81.3274 73.062 79.4325 L77.938 79.4326 C77.938 81.4043 75.5959 84.7353 73.738 85.2791 C71.8802 85.8228 70.8243 84.5568 71.1477 83.1804 C71.1477 83.1804 71.1477 83.1804 71.1477 83.1804"); }
		60%, 100% { d: path("M68.7864 80.4014 C68.5973 80.4149 67.5291 80.4608 66.5068 80.6378 C64.1429 81.047 61.3414 82.1238 61.0851 84.3946 C60.8507 86.4708 62.3848 87.5069 68.2335 86.5541 C69.6201 86.2457 71.776 85.7839 73.6259 85.4259 C73.6259 85.4259 73.6259 85.4259 73.6259 85.4259"); }
	}

	#agent-acc-dog-right-hand-stroke {
		animation-name: agent-acc-dog-right-hand-stroke;
		${i}
	}
	@keyframes agent-acc-dog-right-hand-stroke {
		0%, 40% { d: path("M72.7738 77.2686C71.6065 78.9254 70.1924 81.5438 69.9469 82.3827C69.7863 82.9317 69.6719 84.857 71.6065 85.2869C72.9594 85.5875 74.7942 85.2229 75.9524 83.5878C76.9746 82.1448 78.4219 79.6959 78.9751 77.9969"); }
		60%, 100% { d: path("M68.7492 80.3111C65.1668 80.5556 63.4526 81.3209 62.2581 82.3619C61.2976 83.199 60.324 85.0797 61.6154 86.2501C62.5184 87.0686 65.4128 86.9896 67.1572 86.7404C69.3004 86.4343 71.5259 85.8499 73.5463 85.084"); }
	}

	#agent-acc-dog-back-stroke {
		animation-name: agent-acc-dog-back-stroke;
		${i}
	}
	@keyframes agent-acc-dog-back-stroke {
		0%, 40% { d: path("M81.3674 80.6071C80.0096 80.6071 75.6271 81.1468 75.3813 83.6491C75.3069 84.406 75.897 85.2639 76.991 85.2639C80.7189 85.2639 83.586 85.2878 83.9051 85.2639C86.1871 85.093 86.7281 83.2789 86.6934 81.7783C86.634 79.2117 85.903 77.1869 84.9662 75.5C83.2121 72.3413 80.7365 70.3673 80.5986 68.2393"); }
		60%, 100% { d: path("M80,75C78.1223,75.4266 76.8976,78.4574 76.8976,80.5163C74.5984,81.1775 72,83.5 74,85.5C75.3503,86.8503 79.5168,85.6581 82.8873,85.1022C86.5185,84.5032 87.6291,79.9392 87.4731,78.1766C87.3795,74.6202 84.3379,70.8299 81.0623,70.0344C77.2509,69.1088 71.6567,71.5318 71.376,71.6722"); }
	}

	#agent-acc-dog-head-stroke {
		animation-name: agent-acc-dog-head-stroke;
		${i}
	}
	@keyframes agent-acc-dog-head-stroke {
		0%, 40% { d: path("M81.8804 67.393L82.5295 65.5811C83.4844 62.2994 81.8804 57.7899 80.228 55.9816C79.6109 55.3062 77.9062 53.833 75.3259 53.833C73.4755 53.833 71.7706 54.8378 70.9613 55.6264C69.6193 56.934 69.1684 58.8522 68.4948 60.2513C67.4927 62.3325 65.1729 61.6477 64.0865 63.9062C63.5091 64.9101 63.3667 67.0446 64.0868 68.3343C64.807 69.624 66.6161 70.4021 68.4948 70.7995C70.264 71.1737 71.5432 71.2337 72.9333 71.2337C73.7944 71.2252 75.5588 71.0894 77.3272 70.4021"); }
		60%, 100% { d: path("M72.9796 76.7831L73.4539 74.9874C74.1006 71.7533 72.1856 67.5504 70.4473 65.9484C69.7982 65.3501 68.0374 64.0747 65.5566 64.2881C63.7775 64.4411 62.2214 65.5481 61.5084 66.3732C60.3263 67.7413 60.0514 69.6228 59.5194 71.0237C58.7281 73.1075 56.441 72.6409 55.5832 74.9021C55.1111 75.9151 55.1507 77.979 55.9497 79.1594C56.7487 80.3398 58.5525 80.9383 60.3916 81.165C62.1236 81.3785 63.3584 81.3304 64.695 81.2154C65.2965 81.1577 66.3518 80.9958 67.5148 80.6013"); }
	}

	#agent-acc-dog-nose {
		animation-name: agent-acc-dog-nose;
		${i}
	}
	@keyframes agent-acc-dog-nose {
		0%, 40% { d: path("M66.9294 64.6895C66.9001 65.1717 66.656 65.5492 65.662 65.4888C64.668 65.4285 64.4714 65.0242 64.5007 64.542C64.53 64.0598 65.0974 63.702 65.768 63.7427C66.4387 63.7834 66.9586 64.2073 66.9294 64.6895Z"); }
		60%, 100% { d: path("M58.5402 76.2138C58.4739 76.628 58.1564 76.9215 56.9668 76.7309C55.7772 76.5402 55.5673 76.1622 55.6337 75.748C55.7001 75.3338 56.4046 75.1023 57.2072 75.231C58.0098 75.3596 58.6066 75.7996 58.5402 76.2138Z"); }
	}

	#agent-acc-dog-right-ear {
		animation-name: agent-acc-dog-right-ear;
		${i}
	}
	@keyframes agent-acc-dog-right-ear {
		0%, 40% { d: path("M79.6816 66.979C79.6816 64.529 80.4154 60.3832 81.1518 57.416C83.6256 60.95 86.3042 66.884 83.3275 68.6685C81.504 69.7617 79.6816 69.0329 79.6816 66.979Z"); }
		60%, 100% { d: path("M70.8327 76.5672C70.6302 74.2117 70.9928 70.1651 71.4555 67.2515C74.1262 70.4446 77.1922 75.9282 74.4778 77.89C72.815 79.0918 71.0026 78.5418 70.8327 76.5672Z"); }
	}

	#agent-acc-dog-left-eye {
		animation-name: agent-acc-dog-left-eye;
		${i}
	}
	@keyframes agent-acc-dog-left-eye {
		0%, 40% { d: path("M72.2065 59.658C71.7961 59.6024 71.5075 59.231 71.5817 58.6829C71.6559 58.1348 72.0328 57.8536 72.4433 57.9091C72.8538 57.9647 73.1335 58.4013 73.0681 58.8842C73.0028 59.3671 72.617 59.7135 72.2065 59.658Z"); }
		60%, 100% { d: path("M63.1777 70.9001C62.6811 70.8759 62.2995 70.4261 62.3347 69.7036C62.37 68.981 62.7936 68.5705 63.2902 68.5948C63.7869 68.619 64.1643 69.1547 64.1332 69.7913C64.1021 70.4279 63.6743 70.9244 63.1777 70.9001Z"); }
	}

	#agent-acc-dog-right-eye {
		animation-name: agent-acc-dog-right-eye;
		${i}
	}
	@keyframes agent-acc-dog-right-eye {
		0%, 40% { d: path("M75.7954 59.8435C75.3849 59.7879 75.0964 59.4166 75.1706 58.8685C75.2448 58.3204 75.6217 58.0391 76.0322 58.0947C76.4426 58.1503 76.7224 58.5868 76.657 59.0697C76.5916 59.5526 76.2059 59.8991 75.7954 59.8435Z"); }
		60%, 100% { d: path("M66.6933 71.2234C66.1967 71.1991 65.8151 70.7493 65.8504 70.0268C65.8856 69.3043 66.3092 68.8938 66.8059 68.918C67.3025 68.9423 67.6799 69.478 67.6488 70.1146C67.6177 70.7512 67.19 71.2476 66.6933 71.2234Z"); }
	}

	/* Dark-mode outline duplicates */
	#agent-acc-dog-tail-outline {
		animation-name: agent-acc-dog-tail;
		${i}
	}
	#agent-acc-dog-left-hand-stroke-outline {
		animation-name: agent-acc-dog-left-hand-stroke;
		${i}
	}
	#agent-acc-dog-back-stroke-outline {
		animation-name: agent-acc-dog-back-stroke;
		${i}
	}
	#agent-acc-dog-head-stroke-outline {
		animation-name: agent-acc-dog-head-stroke;
		${i}
	}
	#agent-acc-dog-nose-outline {
		animation-name: agent-acc-dog-nose;
		${i}
	}
	#agent-acc-dog-right-ear-outline {
		animation-name: agent-acc-dog-right-ear;
		${i}
	}
	#agent-acc-dog-left-eye-outline {
		animation-name: agent-acc-dog-left-eye;
		${i}
	}
	#agent-acc-dog-right-eye-outline {
		animation-name: agent-acc-dog-right-eye;
		${i}
	}
	#agent-acc-dog-right-hand-stroke-outline {
		animation-name: agent-acc-dog-right-hand-stroke;
		${i}
	}
	#agent-acc-dog-left-leg-fill-outline {
		animation-name: agent-acc-dog-left-leg-fill;
		${i}
	}
	#agent-acc-dog-left-leg-stroke-outline {
		animation-name: agent-acc-dog-left-leg-stroke;
		${i}
	}
`,
                y = {
                    position: "relative",
                    pointerEvents: "none"
                },
                C = {
                    pointerEvents: "visiblePainted"
                };

            function k({
                size: e,
                speechBubblePlacement: t,
                speechBubbleTextOverride: i,
                speechBubbleVerticalOffsetPx: v = 20,
                speechBubbleHorizontalOffsetPx: S = 12,
                speechBubbleTailCircleTop: x,
                speechBubbleTailCircleInsetInlineStartPx: w,
                animated: M = !0
            }) {
                let A = "dark" === (0, a(960253).e)() ? "#d3d3d3" : "white",
                    {
                        showBubble: _,
                        isHiding: I,
                        currentPhrase: j,
                        handleMouseEnter: T,
                        handleMouseLeave: B
                    } = function(e, t) {
                        let o = (0, a(109939).tz)(),
                            i = a(189760).B.dog,
                            r = o.locale.startsWith("en"),
                            s = "none" !== e && !!i && r,
                            d = (0, n.useMemo)(() => t ? [t] : i ? (0, a(763230).k4)(Object.values(i).map(e => o.formatMessage(e))) : [], [o, i, t]),
                            [l, c] = (0, n.useState)(!1),
                            [g, p] = (0, n.useState)(!1),
                            u = (0, n.useRef)(0),
                            [f, h] = (0, n.useState)(""),
                            b = (0, n.useRef)(),
                            m = (0, n.useCallback)(() => {
                                s && 0 !== d.length && (clearTimeout(b.current), h(d[u.current % d.length]), u.current++, p(!1), c(!0))
                            }, [d, s]),
                            y = (0, n.useCallback)(() => {
                                s && (p(!0), b.current = setTimeout(() => {
                                    c(!1), p(!1)
                                }, 150))
                            }, [s]);
                        return {
                            showBubble: s && (l || g),
                            isHiding: g,
                            currentPhrase: f,
                            handleMouseEnter: s ? m : void 0,
                            handleMouseLeave: s ? y : void 0
                        }
                    }(t, i),
                    L = "none" !== t ? t : "topRight";
                return (0, o.jsxs)("div", {
                    style: y,
                    children: [_ ? (0, o.jsx)(a(679416).P, {
                        placement: L,
                        animated: M,
                        isHiding: I,
                        verticalOffsetPx: v,
                        horizontalOffsetPx: S,
                        tailCircleTop: x,
                        tailCircleInsetInlineStartPx: w,
                        children: j
                    }) : void 0, M ? (0, o.jsx)("style", {
                        children: m
                    }) : void 0, (0, o.jsxs)("svg", {
                        width: e,
                        height: e,
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: C,
                        onMouseEnter: T,
                        onMouseLeave: B,
                        children: [(0, o.jsxs)("g", {
                            children: [(0, o.jsx)("path", {
                                id: "agent-acc-dog-tail-outline",
                                d: r,
                                stroke: A,
                                strokeWidth: "4"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill-outline",
                                d: h,
                                stroke: A,
                                strokeWidth: "4"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke-outline",
                                d: b,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke-outline",
                                d: s,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-back-stroke-outline",
                                d: d,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-head-stroke-outline",
                                d: l,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-nose-outline",
                                d: c,
                                stroke: A,
                                strokeWidth: "3"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-right-ear-outline",
                                d: g,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-left-eye-outline",
                                d: p,
                                stroke: A,
                                strokeWidth: "3"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-right-eye-outline",
                                d: u,
                                stroke: A,
                                strokeWidth: "3"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-right-hand-stroke-outline",
                                d: f,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            })]
                        }), (0, o.jsxs)("g", {
                            children: [(0, o.jsx)("path", {
                                id: "agent-acc-dog-tail",
                                d: r,
                                fill: "black"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill",
                                d: h,
                                fill: "white"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke",
                                d: b,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-body-fill",
                                d: "M68.5167 78.823C69.8415 76.5999 69.839 74.928 70.6031 73.1034C71.1234 70.4713 72.2666 69.7739 71.7436 67.9773C71.2207 66.1807 77.0344 65.2132 80.0066 64.9541C79.9864 66.4045 80.3439 69.6312 81.9353 70.9346C83.4208 73.1034 86.8612 75.7498 86.6665 82.0341C86.62 83.5343 86.2068 84.9953 84.4783 85.2635C84.1621 85.3126 80.7189 85.2635 76.9909 85.2635C75.8969 85.2635 75.3068 84.4056 75.3812 83.6487L72.4044 82.6585C72.1072 83.286 71.0647 84.3211 70.5806 84.7602C69.2791 86.036 67.2704 85.6107 66.9509 84.2668C66.5687 82.6594 67.7553 80.1008 68.5167 78.823Z",
                                fill: "white"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke",
                                d: s,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                fill: "white"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-back-stroke",
                                d: d,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-head-stroke",
                                d: l,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                fill: "white"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-nose",
                                d: c,
                                fill: "black",
                                stroke: "black"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-right-ear",
                                d: g,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-left-eye",
                                d: p,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "0.5"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-right-eye",
                                d: u,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "0.5"
                            }), (0, o.jsx)("path", {
                                id: "agent-acc-dog-right-hand-stroke",
                                d: f,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                fill: "white"
                            })]
                        })]
                    })]
                })
            }
        },
        522837: (e, t, a) => {
            a.d(t, {
                I: () => r
            }), a(581454);
            var n = a(296540),
                o = a(474848);
            let i = {
                iconContainer: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    ...a(986939).A.isMobile && {
                        height: 20
                    }
                },
                icon: { ...a(986939).A.isMobile ? {
                        height: 24,
                        width: 24
                    } : {
                        height: 20,
                        width: 20
                    }
                }
            };

            function r(e) {
                let {
                    closePopup: t
                } = e, r = (0, a(533992).v3)(), s = (0, a(533992).Y0)(), d = (0, a(682985).O$)(a(358386).Iq), l = (0, n.useCallback)(e => {
                    a(358386).Ay.setState({ ...a(358386).Ay.state,
                        filter: e
                    }), a(142215).DK(r, {
                        tab: e
                    })
                }, [r]), c = !(0, a(83208).X)("hide_all_workspace_updates") || "all_updates" === d, g = [{
                    type: "unread_and_read",
                    title: (0, o.jsx)(a(109939).sA, {
                        id: "inboxFilterMenu.readAndUnreadOption.label",
                        defaultMessage: "Unread & read"
                    }),
                    icon: a(789701).y
                }, {
                    type: "unread_only",
                    title: (0, o.jsx)(a(109939).sA, {
                        id: "inboxFilterMenu.unreadOption.label",
                        defaultMessage: "Unread"
                    }),
                    icon: a(88721).C
                }, {
                    type: "archived_only",
                    title: (0, o.jsx)(a(109939).sA, {
                        id: "inboxFilterMenu.archivedOption.label",
                        defaultMessage: "Archived"
                    }),
                    icon: a(937776).B
                }, ...c ? [{
                    type: "all_updates",
                    title: (0, o.jsx)(a(109939).sA, {
                        id: "inboxFilterMenu.allUpdatesOption.label",
                        defaultMessage: "All workspace updates"
                    }),
                    icon: a(772683).clockIcon
                }] : []];
                return (0, o.jsx)(a(747369).A, {
                    menuType: a(649476).gu.Popup,
                    height: s.isTablet ? "100%" : a(986939).A.isMobile ? "50vh" : void 0,
                    minWidth: 250,
                    maxWidth: a(986939).A.isMobile ? "100vw" : void 0,
                    maxHeight: s.isTablet ? "100%" : void 0,
                    scrollerStyle: a(13649).T.menuScroller,
                    header: (0, o.jsx)(a(324489).V, {
                        style: a(13649).T.header,
                        isSmall: !a(986939).A.isMobile,
                        isSecondaryColor: !a(986939).A.isMobile,
                        children: (0, o.jsx)(a(109939).sA, {
                            id: "inbox.filterOptionsMenu.headerMobile",
                            defaultMessage: "Filter"
                        })
                    }),
                    children: (0, o.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        sections: [{
                            key: "inbox filters",
                            render: e => (0, o.jsx)(a(844565).A, { ...e,
                                topBorder: 0 !== e.index,
                                style: a(13649).T.sectionMenuItem
                            }),
                            items: g.map((e, n) => {
                                let r = e.type === d,
                                    s = n === g.length - 1,
                                    c = a(986939).A.isMobile && s;
                                return {
                                    key: e.type,
                                    render: t => (0, o.jsx)(a(95582).A, { ...t,
                                        style: { ...a(13649).T.buttonMenuItem,
                                            ...c && a(13649).T.transparentButtonMenuItemBorder
                                        },
                                        pressedStyle: a(13649).T.buttonMenuItemPressed,
                                        title: e.title,
                                        titleStyle: a(13649).T.title,
                                        icon: (0, o.jsx)("div", {
                                            style: i.iconContainer,
                                            children: e.icon(i.icon)
                                        }),
                                        right: r ? (0, o.jsx)(a(16275).I, {
                                            icon: a(971730).checkmarkSmallIcon,
                                            size: "sm"
                                        }) : void 0
                                    }),
                                    action: () => {
                                        t(), l(e.type)
                                    }
                                }
                            })
                        }],
                        initialFocus: void 0,
                        onAccept: () => t()
                    })
                })
            }
        },
        528440: (e, t, a) => {
            e.exports = a.p + "d15ce47ef6ddf83d.png"
        },
        546579: (e, t, a) => {
            e.exports = a.p + "a5098827bba61d4d.png"
        },
        550122: (e, t, a) => {
            e.exports = a.p + "176441c5ba020951.png"
        },
        552013: (e, t, a) => {
            function n({
                environment: e,
                notionApps: t
            }) {
                let o = a(728372).AppStoreSidebarSpaceViewStore.state;
                o && (0, a(377796).createAndCommit)({
                    userAction: "sidebarNotionAppsActions.moveNotionApp",
                    environment: e,
                    canUndo: !0,
                    cellTarget: o.pointer.spaceId ? {
                        spaceWithId: o.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        a(380762).AG(o, e, { ...o.getSettings(),
                            notion_apps: {
                                order: t
                            }
                        })
                    }
                })
            }

            function o(e) {
                let t = a(728372).AppStoreSidebarSpaceViewStore.state;
                t && (0, a(377796).createAndCommit)({
                    userAction: "sidebarNotionAppsActions.hideNotionAppsSection",
                    environment: e,
                    canUndo: !0,
                    cellTarget: t.pointer.spaceId ? {
                        spaceWithId: t.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        let n = t.getNotionAppsOrder();
                        a(380762).AG(t, e, {
                            notion_apps: {
                                hidden: !0,
                                order: n
                            }
                        })
                    }
                })
            }

            function i(e) {
                let t = a(728372).AppStoreSidebarSpaceViewStore.state;
                t && (0, a(377796).createAndCommit)({
                    userAction: "sidebarNotionAppsActions.showNotionAppsSection",
                    environment: e,
                    canUndo: !0,
                    cellTarget: t.pointer.spaceId ? {
                        spaceWithId: t.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        let n = t.getNotionAppsOrder();
                        a(380762).AG(t, e, {
                            notion_apps: {
                                hidden: !1,
                                order: n
                            }
                        })
                    }
                })
            }
            a.d(t, {
                G6: () => n,
                nQ: () => o,
                sh: () => i
            })
        },
        555583: (e, t, a) => {
            a.d(t, {
                n: () => o
            }), a(898992), a(354520);
            var n = a(296540);

            function o({
                useRedesigned: e
            } = {
                useRedesigned: !1
            }) {
                let t = (0, a(109939).tz)(),
                    i = (0, a(599412).H)(t),
                    r = (0, a(972740).L)(),
                    s = (0, a(682985).K8)(() => (null == r ? void 0 : r.canAdmin()) ? ? !1, [r]),
                    d = (0, a(871086).w)(),
                    l = (0, n.useMemo)(() => e ? a(411106).p : (0, a(411106).L)(s, i), [s, i, e]),
                    c = (0, n.useMemo)(() => Object.entries(d ? ? {}).filter(([e]) => (0, a(722371).Xk)(l, e)).length, [d, l]),
                    g = l.length,
                    p = g > 0 ? c / g : 0,
                    u = (0, n.useMemo)(() => new Intl.NumberFormat(i, {
                        style: "percent"
                    }).format(p), [p, i]);
                return {
                    progress: p,
                    progressDisplay: u,
                    completedCount: c,
                    totalCount: g,
                    completedItems: d ? ? {}
                }
            }
        },
        580899: (e, t, a) => {
            e.exports = a.p + "7afb74ab9eed1a81.png"
        },
        584758: (e, t, a) => {
            e.exports = a.p + "8cc12fd49d607b13.png"
        },
        620842: (e, t, a) => {
            e.exports = a.p + "14d5b1e86af73b85.png"
        },
        625031: (e, t, a) => {
            e.exports = a.p + "db48f4d686b63eb9.png"
        },
        641085: (e, t, a) => {
            e.exports = a.p + "85fb8ca2230ff394.png"
        },
        665008: (e, t, a) => {
            e.exports = a.p + "937ee299d2468780.png"
        },
        667115: (e, t, a) => {
            e.exports = a.p + "a95f553bf5241102.png"
        },
        679416: (e, t, a) => {
            a.d(t, {
                P: () => g
            }), a(296540);
            var n = a(474848);
            let o = `
	@keyframes accessory-speech-bubble-in {
		0% { opacity: 0; transform: scale(0.85); }
		100% { opacity: 1; transform: scale(1); }
	}
	@keyframes accessory-speech-bubble-out {
		0% { opacity: 1; transform: scale(1); }
		100% { opacity: 0; transform: scale(0.85); }
	}
`,
                i = (0, a(51831).n)(!0),
                r = `1.5px solid ${a(632079).Tj.border.secondary}`,
                s = {
                    container: {
                        position: "absolute",
                        zIndex: 2,
                        pointerEvents: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "max-content"
                    },
                    bubble: { ...i,
                        position: "relative",
                        whiteSpace: "normal",
                        maxWidth: 220,
                        color: a(632079).Tj.text.secondary,
                        fontWeight: a(699422).Wy.medium,
                        border: r,
                        boxShadow: "none",
                        borderRadius: 12,
                        padding: "6px 12px",
                        fontSize: 12
                    },
                    tailCircle: {
                        position: "absolute",
                        width: 8,
                        height: 8,
                        borderRadius: 999,
                        background: a(632079).Tj.background.primary,
                        border: r,
                        boxShadow: "none"
                    }
                },
                d = {
                    topLeft: {
                        container: {
                            bottom: "86%",
                            insetInlineEnd: "88%",
                            transformOrigin: "right bottom",
                            alignItems: "flex-end"
                        },
                        tailCircle: {
                            top: "calc(100% + 8px)",
                            insetInlineEnd: -10
                        }
                    },
                    topRight: {
                        container: {
                            bottom: "86%",
                            insetInlineStart: "88%",
                            transformOrigin: "left bottom",
                            alignItems: "flex-start"
                        },
                        tailCircle: {
                            top: "calc(100% + 8px)",
                            insetInlineStart: -6
                        }
                    }
                },
                l = {
                    animationName: "accessory-speech-bubble-in",
                    animationDuration: "150ms",
                    animationTimingFunction: "ease-out",
                    animationFillMode: "forwards"
                },
                c = {
                    animationName: "accessory-speech-bubble-out",
                    animationDuration: "150ms",
                    animationTimingFunction: "ease-in",
                    animationFillMode: "forwards"
                };

            function g({
                placement: e,
                children: t,
                animated: a = !1,
                isHiding: i = !1,
                verticalOffsetPx: r = 0,
                horizontalOffsetPx: p = 0,
                tailCircleTop: u,
                tailCircleInsetInlineStartPx: f
            }) {
                let h = function(e, t, a) {
                    let {
                        container: {
                            bottom: n,
                            insetInlineStart: o,
                            insetInlineEnd: i,
                            ...r
                        },
                        tailCircle: s
                    } = d[e], l = 0 !== t && void 0 !== n ? `calc(${String(n)} - ${t}px)` : n;
                    if ("topRight" === e) {
                        let e = 0 !== a && void 0 !== o ? `calc(${String(o)} + ${a}px)` : o;
                        return {
                            container: { ...r,
                                insetInlineStart: e,
                                bottom: l
                            },
                            tailCircle: s
                        }
                    }
                    let c = 0 !== a && void 0 !== i ? `calc(${String(i)} - ${a}px)` : i;
                    return {
                        container: { ...r,
                            insetInlineEnd: c,
                            bottom: l
                        },
                        tailCircle: s
                    }
                }(e, r, p);
                return (0, n.jsxs)(n.Fragment, {
                    children: [a ? (0, n.jsx)("style", {
                        children: o
                    }) : void 0, (0, n.jsxs)("div", {
                        style: { ...s.container,
                            ...h.container,
                            ...a ? i ? c : l : void 0
                        },
                        children: [(0, n.jsx)("div", {
                            style: s.bubble,
                            children: t
                        }), (0, n.jsx)("div", {
                            style: { ...s.tailCircle,
                                ...h.tailCircle,
                                ...void 0 !== u && {
                                    top: u
                                },
                                ...void 0 !== f && {
                                    insetInlineStart: f
                                }
                            }
                        })]
                    })]
                })
            }
        },
        682759: (e, t, a) => {
            e.exports = a.p + "d43593c297dd4340.png"
        },
        688220: (e, t, a) => {
            e.exports = a.p + "0fb564b08de74e8f.png"
        },
        701743: (e, t, a) => {
            e.exports = a.p + "868a886d40b596cd.png"
        },
        702404: (e, t, a) => {
            e.exports = a.p + "c8cb309f04348e5a.png"
        },
        714200: (e, t, a) => {
            a.d(t, {
                r: () => i
            }), a(296540);
            var n = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 15.25 15.57",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v3.904l-1.25 2.084V7.945h-9.25v7.305c0 .207.168.375.375.375h4.329c.05.338.192.667.431.945l.261.305H5.75a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm12.5 1.57V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375",
                            clipRule: "evenodd"
                        }), (0, n.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25zm10.282 2.697a.625.625 0 0 0-1.072-.644l-3.041 5.07-1.76-2.055a.625.625 0 1 0-.95.814l2.325 2.712a.625.625 0 0 0 1.01-.085z"
                        })]
                    })
                },
                i = (0, a(104509).wt)("archiveBoxCheck", o, "default")
        },
        722784: (e, t, a) => {
            e.exports = a.p + "6ddab14ae1911792.png"
        },
        733785: (e, t, a) => {
            e.exports = a.p + "451ac07fab6898ec.png"
        },
        737497: (e, t, a) => {
            e.exports = a.p + "5c61be7d1ab58977.gif"
        },
        752153: (e, t, a) => {
            function n(e, t) {
                return o(d(e, t))
            }

            function o(e) {
                return void 0 !== e && (e === a(212169).q_ || e === a(212169).YD)
            }

            function i(e, t) {
                if (o(t)) return;
                let n = a(212169).c$[e],
                    i = n.steps.findIndex(e => e.id === t);
                return -1 === i ? n.steps[0].id : i === n.steps.length - 1 ? a(212169).q_ : n.steps[i + 1].id
            }

            function r(e, t) {
                let a = d(e, t);
                if (!(!a || o(a))) return i(t, a)
            }

            function s(e, t) {
                let n = d(e, t);
                if (n) {
                    var i;
                    let e = a(212169).c$[t];
                    if (o(n)) return null == (i = e.steps.at(-1)) ? void 0 : i.id;
                    let r = e.steps.findIndex(e => e.id === n);
                    return -1 !== r && 0 !== r ? e.steps[r - 1].id : void 0
                }
            }

            function d(e, t) {
                var n;
                if (!e) return;
                let o = ((null == (n = e.getSettings()) ? void 0 : n.tutorials) || {})[t];
                return void 0 === o ? a(212169).c$[t].steps[0].id : o
            }
            a.d(t, {
                KD: () => s,
                gt: () => d,
                i9: () => r,
                ll: () => o,
                tb: () => i,
                x$: () => n
            }), a(18107), a(967357)
        },
        783925: (e, t, a) => {
            e.exports = a.p + "fc556f4d021cf665.png"
        },
        784836: (e, t, a) => {
            e.exports = a.p + "96fa7f82dea60fb2.png"
        },
        832338: (e, t, a) => {
            e.exports = a.p + "4d1ffa233a574cb5.png"
        },
        854615: (e, t, a) => {
            a.d(t, {
                D: () => n,
                R: () => o
            });
            let n = (0, a(109939).YK)({
                openInLibrary: {
                    id: "useOpenInLibraryActions.openInLibrary",
                    defaultMessage: "Open in Library"
                },
                customizeSidebar: {
                    id: "useOpenInLibraryActions.customizeSidebar",
                    defaultMessage: "Customize sidebar"
                }
            });

            function o(e) {
                let {
                    type: t,
                    onSelect: o
                } = e, i = (0, a(533992).v3)(), r = (0, a(853284).U)(), s = (0, a(83208).X)("slippery_slope_sidebar_customization"), d = (0, a(83208).X)("library_meetings_tab"), l = (0, a(784331).nr)(), c = (0, a(413388)._B)(t), g = (0, a(784331).cd)() && c && ("agents" !== c || l) && ("myMeetings" !== c || d), p = r && s && (g || "notion_apps" === t);
                return [...!r && g && c ? [(0, a(233319).Ls)({
                    key: "openInLibrary",
                    displayName: n.openInLibrary,
                    analyticsName: n.openInLibrary.defaultMessage,
                    validators: [],
                    svg: a(360610).H,
                    closeParentMenu: !0,
                    action: async () => {
                        (await (0, a(337439).p)())({
                            event: void 0,
                            analyticsFrom: "sidebar_overflow_menu",
                            environment: i,
                            viewName: c
                        }), o()
                    }
                })] : [], ...p ? [(0, a(233319).Ls)({
                    key: "customizeSidebar",
                    displayName: n.customizeSidebar,
                    analyticsName: n.customizeSidebar.defaultMessage,
                    validators: [],
                    svg: a(213039).M,
                    closeParentMenu: !0,
                    action: () => {
                        a(87945).F.setState(!0), o()
                    }
                })] : []]
            }
        },
        871086: (e, t, a) => {
            a.d(t, {
                w: () => n
            });

            function n() {
                let e = (0, a(476743).a)();
                return (0, a(682985).K8)(() => {
                    var t;
                    return (null == e || null == (t = e.getSettings()) ? void 0 : t.business_trial_items_completed) ? ? {}
                }, [e])
            }
        },
        879817: (e, t, a) => {
            e.exports = a.p + "1ff0049b43405408.png"
        },
        928896: (e, t, a) => {
            a.d(t, {
                U: () => n
            });

            function n(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "reorder_outliner_section",
                        eventProperties: {
                            section: t.section,
                            previous_order: t.previous_order,
                            new_order: t.new_order,
                            from: t.from
                        }
                    }
                })
            }
        },
        938989: (e, t, a) => {
            e.exports = a.p + "f134ff16443ed5ec.png"
        },
        941670: (e, t, a) => {
            e.exports = a.p + "e1d65fd069908905.png"
        },
        965967: (e, t, a) => {
            e.exports = a.p + "d15ce47ef6ddf83d.png"
        },
        970878: (e, t, a) => {
            e.exports = a.p + "082999214c472fe4.png"
        },
        971375: (e, t, a) => {
            a.d(t, {
                o: () => i,
                x: () => o
            }), a(296540);
            var n = a(474848);

            function o(e) {
                let {
                    variant: t,
                    imgSource: o,
                    tintColor: r,
                    faceStyle: s,
                    shadowVariant: d = "strong",
                    style: l,
                    ...c
                } = e, g = (0, a(960253).I)(() => {
                    let e = (0, a(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: a(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === d && {
                                boxShadow: e >= 90 ? a(632079).Tj.shadowMDThickerOutline : a(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === d && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? a(632079).Tj.shadowSMThickerOutline : a(632079).Tj.shadow.outline.md
                            },
                            overflow: "hidden",
                            ...l
                        }
                    }
                }, [t, d, l]);
                return (0, n.jsx)("div", { ...c,
                    children: (0, n.jsx)("div", {
                        style: g.faceImgWrap,
                        children: (0, n.jsx)(i, {
                            imgSource: o,
                            variant: t,
                            tintColor: r,
                            style: s
                        })
                    })
                })
            }

            function i(e) {
                let {
                    imgSource: t,
                    variant: o,
                    tintColor: i,
                    style: r,
                    alt: s,
                    ...d
                } = e, l = (0, a(445283).N)(o), c = t ? ? a(200424), g = s ? ? "Notion AI face", p = (0, a(960253).I)(() => ({
                    faceImg: {
                        height: l,
                        width: l,
                        transform: "scaleX(var(--direction, 1))",
                        ...r
                    },
                    tintedFace: {
                        height: l,
                        width: l,
                        transform: "scaleX(var(--direction, 1))",
                        backgroundColor: i,
                        WebkitMaskImage: `url(${c})`,
                        maskImage: `url(${c})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        ...r
                    }
                }), [l, r, i, c]);
                return void 0 !== i ? (0, n.jsx)("div", {
                    style: p.tintedFace,
                    role: "img",
                    "aria-label": g
                }) : (0, n.jsx)("img", { ...d,
                    style: p.faceImg,
                    src: c,
                    alt: g
                })
            }
        },
        999951: (e, t, a) => {
            a.d(t, {
                U: () => o
            });
            var n = a(296540);

            function o(e) {
                let {
                    action: t,
                    source: o
                } = e, i = (0, a(345776).T)(), r = (0, a(972740).L)(), s = (0, a(217844)._)({
                    name: "custom_agents",
                    spaceId: null == r ? void 0 : r.id,
                    userId: i
                }), d = (0, a(94418).Pd)(s), l = null == s ? void 0 : s.upsell, {
                    upgradeEligibility: c,
                    handleClick: g
                } = (0, a(79268).C)({
                    upsell: l,
                    source: o,
                    spaceStore: r
                });
                return {
                    handleClick: (0, n.useCallback)(async () => {
                        if (d) return g();
                        await t()
                    }, [d, g, t]),
                    shouldHide: d && "not_eligible" === c.status
                }
            }
        }
    }
]);