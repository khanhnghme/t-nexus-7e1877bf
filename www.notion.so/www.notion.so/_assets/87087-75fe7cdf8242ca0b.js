"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [31190, 87087], {
        6260: (e, t, a) => {
            a.d(t, {
                Z: () => n
            }), a(296540);
            var o = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 16.74 14.99",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M4.5 4.125A2.125 2.125 0 0 0 2.375 6.25v7.5c0 1.174.951 2.125 2.125 2.125h5.702a4.7 4.7 0 0 1-.2-1.25H4.5a.875.875 0 0 1-.875-.875V7.5h12.75v2.535a4.7 4.7 0 0 1 1.25.684V6.25A2.125 2.125 0 0 0 15.5 4.125zm.758 1.684a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0m1.375-.625a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m2.625.625a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0"
                        }), (0, o.jsx)("path", {
                            d: "M17.7 16.607a3.625 3.625 0 1 0-.893.878l1.223 1.427a.625.625 0 0 0 .94-.823zM12.375 14.5a2.375 2.375 0 1 1 4.75 0 2.375 2.375 0 0 1-4.75 0"
                        })]
                    })
                },
                n = (0, a(104509).wt)("browserMagnifyingGlass", s, "default")
        },
        8779: (e, t, a) => {
            e.exports = a.p + "95f76471471a22df.png"
        },
        31461: (e, t, a) => {
            e.exports = a.p + "868a886d40b596cd.png"
        },
        33402: (e, t, a) => {
            a.d(t, {
                J: () => s
            });
            let o = new(a(815048)).O2("PageAttributionHoverCard", async () => await a.e(73458).then(a.bind(a, 373592))),
                s = (0, a(815048)._h)(o, e => e.PageAttributionHoverCard)
        },
        49396: (e, t, a) => {
            e.exports = a.p + "3385d40630727f40.png"
        },
        58195: (e, t, a) => {
            a.d(t, {
                g: () => s
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.75 3.125c.345 0 .625.28.625.625v6.595l3.017-2.64.097-.07a.626.626 0 0 1 .756.098l3.035 3.037 4.442-4.442.098-.08a.626.626 0 0 1 .866.866l-.08.099-4.883 4.883a.626.626 0 0 1-.884 0L7.774 9.03l-3.399 2.975v2.745c0 .483.392.875.875.875h11l.126.013a.625.625 0 0 1 0 1.224l-.126.013h-11a2.125 2.125 0 0 1-2.125-2.125v-11c0-.345.28-.625.625-.625"
                    })
                },
                s = (0, a(104509).wt)("chartLine", o, "default")
        },
        58344: (e, t, a) => {
            e.exports = a.p + "056c81859ba06119.png"
        },
        98303: (e, t, a) => {
            e.exports = a.p + "7a736746212f0f46.png"
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
            function o(e, t, o) {
                var s;
                let n = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!n) return;
                let i = null == (s = n.getSettings()) ? void 0 : s.tutorials;
                o ? (0, a(862759).m)({
                    userSettingsStore: n,
                    transaction: o,
                    data: {
                        tutorials: { ...i,
                            [t]: (0, a(752153).i9)(n, t)
                        }
                    }
                }) : g({
                    userAction: "TutorialActions.nextStep",
                    environment: e,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                tutorials: { ...i,
                                    [t]: (0, a(752153).i9)(n, t)
                                }
                            }
                        })
                    },
                    userId: n.id
                })
            }

            function s(e, t) {
                var o;
                let s = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!s) return;
                let n = null == (o = s.getSettings()) ? void 0 : o.tutorials;
                g({
                    userAction: "TutorialActions.prevStep",
                    environment: e,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: s,
                            transaction: e,
                            data: {
                                tutorials: { ...n,
                                    [t]: (0, a(752153).KD)(s, t)
                                }
                            }
                        })
                    },
                    userId: s.id
                })
            }

            function n(e, t) {
                var o;
                let s = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!s) return;
                let n = null == (o = s.getSettings()) ? void 0 : o.tutorials;
                (null == n ? void 0 : n[t]) !== a(212169).YD && g({
                    userAction: "TutorialActions.dismissTutorial",
                    environment: e,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: s,
                            transaction: e,
                            data: {
                                tutorials: { ...n,
                                    [t]: a(212169).YD
                                }
                            }
                        })
                    },
                    userId: s.id
                })
            }

            function i(e) {
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

            function r(e, t, o) {
                var s;
                let n = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!n || (0, a(752153).x$)(n, t)) return;
                let i = (0, a(752153).gt)(n, t);
                a(212169).c$[t].steps.findIndex(e => e.id === i) >= a(212169).c$[t].steps.findIndex(e => e.id === o) || (0, a(862759).m)({
                    userSettingsStore: n,
                    transaction: e,
                    data: {
                        tutorials: { ...null == (s = n.getSettings()) ? void 0 : s.tutorials,
                            [t]: o
                        }
                    }
                })
            }

            function d(e, t, o) {
                if ((0, a(752153).ll)(o)) return;
                let s = (0, a(752153).tb)(t, o);
                s && r(e, t, s)
            }

            function l(e) {
                var t;
                let {
                    environment: o,
                    tutorialId: s,
                    tutorialStepId: n,
                    transaction: i
                } = e, r = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!r) return;
                let d = null == (t = r.getSettings()) ? void 0 : t.tutorials;
                i ? (0, a(862759).m)({
                    userSettingsStore: r,
                    transaction: i,
                    data: {
                        tutorials: { ...d,
                            [s]: n
                        }
                    }
                }) : g({
                    userAction: "TutorialActions.nextStep",
                    environment: o,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: r,
                            transaction: e,
                            data: {
                                tutorials: { ...d,
                                    [s]: n
                                }
                            }
                        })
                    },
                    userId: r.id
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
                dismissTutorial: () => n,
                resetTutorials: () => i,
                tutorialAdvanceToStep: () => r,
                tutorialAdvanceToStepAfter: () => d,
                tutorialGoToNextStep: () => o,
                tutorialGoToPrevStep: () => s,
                tutorialGoToStep: () => l
            })
        },
        146535: (e, t, a) => {
            e.exports = a.p + "d96dbdbbe0581121.gif"
        },
        153828: (e, t, a) => {
            a.d(t, {
                P: () => s
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.5 3.05 15 13.82",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.08 3.341a1.625 1.625 0 0 1 1.84 0l5.875 4.035c.441.304.705.805.705 1.34v6.034a2.125 2.125 0 0 1-2.125 2.125h-2.716a1.625 1.625 0 0 1-1.625-1.625v-4.065H8.967v4.065c0 .898-.728 1.625-1.625 1.625H4.625A2.125 2.125 0 0 1 2.5 14.75V8.716c0-.535.264-1.036.705-1.34zm1.132 1.03a.375.375 0 0 0-.424 0L3.913 8.407a.38.38 0 0 0-.163.309v6.034c0 .483.392.875.875.875h2.716a.375.375 0 0 0 .375-.375v-4.19c0-.621.503-1.125 1.125-1.125h2.319c.62 0 1.124.504 1.124 1.125v4.19c0 .207.168.375.375.375h2.716a.875.875 0 0 0 .875-.875V8.716c0-.124-.06-.24-.163-.31z"
                    })
                },
                s = (0, a(104509).wt)("home", o, "default")
        },
        161412: (e, t, a) => {
            e.exports = a.p + "e81e609390254b2a.png"
        },
        189760: (e, t, a) => {
            a.d(t, {
                B: () => o,
                r: () => s
            });
            let o = {
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

            function s(e) {
                return null != e && e in o
            }
        },
        190462: (e, t, a) => {
            e.exports = a.p + "46e91f58a3919e25.png"
        },
        202151: (e, t, a) => {
            e.exports = a.p + "f6041c6bf8f9f53e.png"
        },
        212169: (e, t, a) => {
            a.d(t, {
                Ud: () => i,
                YD: () => n,
                c$: () => o,
                q_: () => s
            });
            let o = {
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
                s = "completed",
                n = "dismissed";

            function i(e, t) {
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
        295206: (e, t, a) => {
            a.d(t, {
                P: () => n
            }), a(16280), a(898992), a(354520);
            var o = () => a(273917);
            class s extends o().U {
                indexCache = new WeakMap;
                isModelAvailable(e, t, a) {
                    return void 0 !== this.getModelEntry(e, t, a)
                }
                isModelDisabled(e, t, a) {
                    let o = this.getModelEntry(e, t, a);
                    return (null == o ? void 0 : o.isDisabled) ? ? !1
                }
                getModelEntry(e, t, a) {
                    let o = this.getData(e, {
                        spaceId: t
                    });
                    if (o) return this.getIndex(o).get(a)
                }
                getModelMessage(e, t, a) {
                    var o;
                    return null == (o = this.getModelEntry(e, t, a)) ? void 0 : o.modelMessage
                }
                getModelFamily(e, t, o) {
                    var s;
                    let n = null == (s = this.getModelEntry(e, t, o)) ? void 0 : s.modelFamily;
                    return (0, a(443037).jb)(n) ? n : void 0
                }
                getModelsForMode(e, t, a) {
                    let o = this.getData(e, {
                        spaceId: t
                    });
                    if (o) return o.filter(e => "markdown-chat" === a ? void 0 !== e.markdownChat : "workflow" === a ? void 0 !== e.workflow : void 0 !== e.customAgent)
                }
                getIndex(e) {
                    let t = this.indexCache.get(e);
                    if (t) return t;
                    let a = new Map;
                    for (let t of e) a.set(t.model, t);
                    return this.indexCache.set(e, a), a
                }
            }
            let n = new s((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                let o = e.currentUser.id;
                try {
                    let s = await e.api.callCellCompatibleApi({
                        eventName: "getAvailableModels",
                        environment: e,
                        cellNavigation: {
                            spaceId: t
                        },
                        data: {
                            spaceId: t
                        }
                    });
                    if ("failed" === s.type) {
                        let e = (0, a(201790).V4)(s);
                        a(419750).O8(Error(`Failed to fetch available models: ${e}`), {
                            from: "AvailableModelsStore.fetch",
                            type: "api_failed_response",
                            data: {
                                spaceId: t,
                                userId: o,
                                errorMessage: e
                            }
                        });
                        return
                    }
                    return 0 === s.data.models.length && a(419750).O8(Error("Received empty model list from server"), {
                        from: "AvailableModelsStore.fetch",
                        type: "empty_response",
                        data: {
                            spaceId: t,
                            userId: o
                        }
                    }), s.data.models
                } catch (e) {
                    a(419750).O8(e, {
                        from: "AvailableModelsStore.fetch",
                        type: "error",
                        data: {
                            spaceId: t,
                            userId: o
                        }
                    });
                    return
                }
            }, {
                dontCacheUndefined: !0
            });
            (0, a(202146).exposeDebugValue)("availableAiModelsStore", n)
        },
        303626: (e, t, a) => {
            e.exports = a.p + "d6b5a7d3fa534ce3.png"
        },
        308292: (e, t, a) => {
            a.d(t, {
                AL: () => o,
                Q6: () => n,
                vt: () => s
            }), a(898992), a(672577);
            let o = {
                autoCompleteSprints: !1,
                actionConfig: {
                    complete_sprint_action: "complete_sprint_and_move_incomplete_tasks_to_next_sprint"
                },
                recurrenceConfig: {
                    interval: 2,
                    weekdays: ["MO"]
                }
            };

            function s(e) {
                let {
                    eventTracker: t,
                    properties: a
                } = e;
                t.DO_NOT_USE_commonTrackEvent({
                    eventName: "complete_sprint_action",
                    properties: a
                })
            }

            function n(e, t) {
                var o;
                return null == (o = t.groups) || null == (o = o.find(t => t.id === a(11448).nl || (null == t ? void 0 : t.name) === a(998833).P0 || (null == t ? void 0 : t.name) === e.formatMessage(a(998833).oz.statusGroupNameComplete))) ? void 0 : o.name
            }
        },
        313669: (e, t, a) => {
            e.exports = a.p + "c37502124fe50080.png"
        },
        340916: (e, t, a) => {
            e.exports = a.p + "8cc12fd49d607b13.png"
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
        402524: (e, t, a) => {
            a.d(t, {
                P: () => n
            }), a(296540);
            var o = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 16.79 14.42",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M18.507 11.112c.362 0 .655.293.655.656v4.369a.656.656 0 0 1-1.311 0V13.35l-4.997 4.997a.655.655 0 1 1-.927-.928l4.997-4.997h-2.786a.655.655 0 1 1 0-1.31z"
                        }), (0, o.jsx)("path", {
                            d: "M15.5 4.125c1.174 0 2.125.951 2.125 2.125v3.612h-1.25v-.987h-5.75v2.25h1.72a2 2 0 0 0-.103.448l-.01.195.01.195q.024.214.091.412h-1.708v2.25h2.33l-1.25 1.25H4.5a2.125 2.125 0 0 1-2.125-2.125v-7.5c0-1.174.951-2.125 2.125-2.125zM3.625 13.75c0 .483.392.875.875.875h4.875v-2.25h-5.75zm0-2.625h5.75v-2.25h-5.75zm.875-5.75a.875.875 0 0 0-.875.875v1.375h5.75v-2.25zm6.125 2.25h5.75V6.25a.875.875 0 0 0-.875-.875h-4.875z"
                        })]
                    })
                },
                n = (0, a(104509).wt)("collectionArrow", s, "default")
        },
        408138: (e, t, a) => {
            a.d(t, {
                X: () => o
            });
            let o = a(546605).Store.createValue({
                shouldReset: !1
            }, {
                name: "MobileAssistantMenuStore"
            })
        },
        414243: (e, t, a) => {
            a.d(t, {
                v: () => s
            }), a(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "4.65 2.91 5.84 10.18",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.87 7.47a.75.75 0 0 0 0 1.06l4.32 4.32a.75.75 0 1 0 1.06-1.06L6.46 8l3.79-3.79a.75.75 0 1 0-1.06-1.06z"
                    })
                },
                s = (0, a(104509).wt)("arrowChevronSingleLeftFillSmall", o, "fillSmall")
        },
        422550: (e, t, a) => {
            e.exports = a.p + "31299301d549e6d5.png"
        },
        433837: (e, t, a) => {
            a.d(t, {
                Me: () => r,
                Vv: () => s,
                Z3: () => n,
                wI: () => i
            });
            var o = () => a(906745);

            function s(e) {
                if ("week" === e.frequency && e.weekdays && 1 === e.weekdays.length) return {
                    weekday: e.weekdays[0],
                    duration: e.interval
                }
            }

            function n(e) {
                let {
                    currentSprintEndDate: t,
                    sprintSchedule: a
                } = e;
                return d({
                    startDate: c({
                        dateToAdjust: o().DateTime.fromISO(t),
                        weekday: a.weekday,
                        wrapForEqualDays: !0
                    }),
                    duration: a.duration
                })
            }

            function i(e) {
                let {
                    userTimeZone: t,
                    sprintSchedule: a
                } = e;
                return d({
                    startDate: o().DateTime.local({
                        zone: t
                    }),
                    duration: a.duration
                })
            }

            function r(e) {
                let {
                    currentSprintStartDate: t,
                    sprintSchedule: a
                } = e, {
                    end_date: s
                } = d({
                    startDate: c({
                        dateToAdjust: o().DateTime.fromISO(t),
                        weekday: a.weekday,
                        wrapForEqualDays: !1
                    }),
                    duration: a.duration
                }), n = o().DateTime.fromISO(s), i = o().DateTime.now().startOf("day");
                for (; n.diff(i, "days").days < 0;) n = n.plus({
                    weeks: 1
                });
                return {
                    type: "daterange",
                    start_date: n.plus({
                        days: 1
                    }).minus({
                        weeks: a.duration
                    }).toISODate(),
                    end_date: n.toISODate()
                }
            }

            function d(e) {
                let {
                    startDate: t,
                    duration: a
                } = e, o = t.plus({
                    weeks: a
                }).minus({
                    days: 1
                });
                return {
                    type: "daterange",
                    start_date: t.toISODate(),
                    end_date: o.toISODate()
                }
            }
            let l = {
                SU: 0,
                MO: 1,
                TU: 2,
                WE: 3,
                TH: 4,
                FR: 5,
                SA: 6
            };

            function c(e) {
                let {
                    dateToAdjust: t,
                    weekday: a,
                    wrapForEqualDays: o
                } = e, s = function(e) {
                    let {
                        currentWeekday: t,
                        nextWeekday: a,
                        wrapForEqualDays: o
                    } = e, s = "number" == typeof t ? t : l[t], n = "number" == typeof a ? a : l[a];
                    if (s === n) return 7 * !!o;
                    let i = s,
                        r = 0;
                    for (; i !== n;) i === l.SA ? i = 0 : i += 1, r += 1;
                    return r
                }({
                    currentWeekday: t.weekday % 7,
                    nextWeekday: l[a],
                    wrapForEqualDays: o
                });
                return t.plus({
                    days: s
                })
            }
        },
        441892: (e, t, a) => {
            e.exports = a.p + "46e349aec1d78e16.png"
        },
        445872: (e, t, a) => {
            e.exports = a.p + "58cc418a06d8c43b.png"
        },
        448734: (e, t, a) => {
            a.d(t, {
                jh: () => m,
                wV: () => h,
                Ax: () => b
            });
            var o = a(296540);
            let s = a.p + "f3a1c2555bc7b26c.gif",
                n = a.p + "8ab52115da3e3fbd.gif",
                i = a.p + "160f5613d44c23ea.gif",
                r = a.p + "b68268645067ada1.gif",
                d = a.p + "fce2247087f1d227.gif",
                l = a.p + "896e2255367f2b04.gif";
            var c = a(474848);
            let g = {
                    dark: [a(146535), i, d],
                    light: [a(737497), r, l]
                },
                u = {
                    dark: [i, d],
                    light: [r, l]
                },
                p = new(a(839621)).O(1);

            function f({
                isDarkMode: e,
                onAssetChange: t,
                animationMode: o
            }) {
                let s = "minimal" === o ? u[e ? "dark" : "light"] : g[e ? "dark" : "light"],
                    n = Math.floor(Math.random() * s.length);
                p.enqueue(async () => {
                    t({
                        type: "animated",
                        asset: s[n]
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
                    onMouseEnter: i,
                    animationMode: r = "normal"
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
                }, [t]), [l, g] = (0, a(848135).B)(), u = function(e, t) {
                    let [i, r] = (0, o.useState)({
                        type: "static",
                        asset: a(200424)
                    }), d = "dark" === (0, a(960253).e)();
                    (0, o.useEffect)(() => {
                        let e = setInterval(() => {
                            f({
                                isDarkMode: d,
                                onAssetChange: r,
                                animationMode: t
                            })
                        }, 3e4);
                        return () => {
                            clearInterval(e), p.cancel()
                        }
                    }, [d, t]);
                    let l = (0, o.useMemo)(() => d ? s : n, [d]);
                    return (0, o.useMemo)(() => "animated" === i.type ? i.asset : e && "minimal" !== t && .1 >= Math.random() ? l : (e && f({
                        isDarkMode: d,
                        onAssetChange: r,
                        animationMode: t
                    }), i.asset), [l, i, d, e, t])
                }(g, r);
                return (0, c.jsx)("div", {
                    ref: l,
                    style: d.faceImgWrap,
                    onMouseEnter: i,
                    children: (0, c.jsx)("img", {
                        style: d.faceImg,
                        src: u,
                        alt: "Notion AI face"
                    })
                })
            }

            function m(e) {
                let {
                    sizeVariant: t
                } = e, o = (0, a(960253).I)(() => {
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
                }, [t]), s = g["dark" === (0, a(960253).e)() ? "dark" : "light"][0];
                return (0, c.jsx)("div", {
                    style: o.faceImgWrap,
                    children: (0, c.jsx)("img", {
                        style: o.faceImg,
                        src: s,
                        alt: "Notion AI face"
                    })
                })
            }

            function b(e) {
                let {
                    variant: t,
                    shadowVariant: o = "strong",
                    cursorStyle: s,
                    ...n
                } = e, i = (0, a(960253).e)(), r = (0, a(960253).I)(() => {
                    let e = (0, a(445283).N)(t),
                        n = "dark" === i ? [a(632079).Tj.shadow.base.sm, `0 0 0 1px ${a(632079).Tj.border.secondaryTranslucent}`, "0 0.5px 0 0 rgba(255, 255, 255, 0.20) inset"] : [a(632079).Tj.shadow.base.md, `0 0 0 1px ${a(632079).Tj.border.secondaryTranslucent}`];
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: a(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === o && {
                                boxShadow: e >= 90 ? a(632079).Tj.shadowMDThickerOutline : a(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === o && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? a(632079).Tj.shadowSMThickerOutline : a(632079).Tj.shadow.outline.md
                            },
                            ..."notification" === o && {
                                boxShadow: n.join(", ")
                            },
                            overflow: "hidden",
                            ...s && {
                                cursor: s
                            },
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            WebkitTouchCallout: "none"
                        }
                    }
                }, [t, o, s, i]);
                return (0, c.jsx)("div", {
                    style: r.faceImgWrap,
                    children: (0, c.jsx)(h, {
                        sizeVariant: t,
                        ...n
                    })
                })
            }
        },
        451248: (e, t, a) => {
            a.d(t, {
                w: () => n
            }), a(296540);
            var o = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.25",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M7.99 2.644a.624.624 0 0 1 .327 1.205 6.375 6.375 0 1 0 7.807 7.928.626.626 0 0 1 1.201.347 7.625 7.625 0 1 1-9.336-9.48"
                        }), (0, o.jsx)("path", {
                            d: "M7.857 6.475a.625.625 0 0 1 .65 1.068 2.875 2.875 0 1 0 3.905 4.022l.08-.1a.625.625 0 0 1 .969.78l-.144.207a4.125 4.125 0 1 1-5.46-5.977M10 2.375A7.625 7.625 0 0 1 17.625 10c0 .345-.28.625-.625.625h-3.5a.625.625 0 0 1-.625-.625A2.875 2.875 0 0 0 10 7.125a.625.625 0 0 1-.625-.625V3l.013-.126A.625.625 0 0 1 10 2.375m.625 3.547a4.13 4.13 0 0 1 3.452 3.453h2.267a6.376 6.376 0 0 0-5.719-5.72z"
                        })]
                    })
                },
                n = (0, a(104509).wt)("donutChart", s, "default")
        },
        458364: (e, t, a) => {
            a.d(t, {
                x: () => i
            }), a(296540);
            var o = a(474848);
            let s = {
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
                n = {
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

            function i({
                accessory: e,
                variant: t = "large",
                shadowVariant: r,
                smallerFace: d,
                accessorySpeechBubblePlacement: l = "none",
                speechBubbleTextOverride: c,
                speechBubbleVerticalOffsetPx: g,
                speechBubbleHorizontalOffsetPx: u,
                animateDogAccessory: p = !0,
                speechBubbleTailCircleTop: f,
                speechBubbleTailCircleInsetInlineStartPx: h,
                ...m
            }) {
                let b = "dark" === (0, a(960253).e)(),
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
                    x = e ? (b ? n : s)[e] : null;
                return (0, o.jsx)("div", { ...m,
                    children: (0, o.jsxs)("div", {
                        style: k.container,
                        children: [(0, o.jsx)("div", {
                            style: k.faceWrapper,
                            children: (0, o.jsx)(a(448734).Ax, {
                                variant: t,
                                animationMode: e ? "minimal" : "normal",
                                shadowVariant: r
                            })
                        }), "dog" === e ? (0, o.jsx)("div", {
                            style: k.accessoryOverlay,
                            children: (0, o.jsx)(a(503681).z, {
                                size: C,
                                speechBubblePlacement: l,
                                speechBubbleTextOverride: c,
                                speechBubbleVerticalOffsetPx: g,
                                speechBubbleHorizontalOffsetPx: u,
                                speechBubbleTailCircleTop: f,
                                speechBubbleTailCircleInsetInlineStartPx: h,
                                animated: p
                            })
                        }) : x ? (0, o.jsx)("img", {
                            src: x,
                            alt: `${e} accessory`,
                            style: k.accessoryOverlay
                        }) : void 0]
                    })
                })
            }
        },
        465707: (e, t, a) => {
            e.exports = a.p + "c64bedded659e18d.png"
        },
        479116: (e, t, a) => {
            a.d(t, {
                l: () => s
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M14.375 4.25c0-.621-.504-1.125-1.125-1.125h-9c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h9c.621 0 1.125-.504 1.125-1.125zm-10 .125h8.75v1.25h-8.75zm4.875 3.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-5a1.125 1.125 0 0 1-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125zm-.125 1.25h-4.75v1.25h4.75zm6.625 3.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H4.25a1.125 1.125 0 0 1-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125zm-.125 1.25H4.375v1.25h11.25z"
                    })
                },
                s = (0, a(104509).wt)("chartBarYAxis", o, "default")
        },
        481524: (e, t, a) => {
            a.d(t, {
                A: () => s
            }), a(296540);
            var o = a(474848);
            let s = function(e) {
                let {
                    color: t
                } = e;
                return (0, o.jsx)(a(95582).A, { ...e,
                    icon: (0, o.jsx)(n, {
                        color: t
                    }),
                    title: (0, a(746998).mN)(t)
                })
            };

            function n({
                color: e
            }) {
                let t = (0, a(960253).I)(() => {
                    let t = (0, a(632079).LD)(a(632079).Tj, e),
                        o = "default" === e ? a(632079).Tj.border.primaryTranslucent : a(632079).Tj[e].border.primaryTranslucent;
                    return {
                        tile: {
                            width: a(986939).A.isMobile ? 24 : 18,
                            height: a(986939).A.isMobile ? 24 : 18,
                            background: t.backgroundColor,
                            color: t.textColor,
                            boxShadow: `inset 0 0 0 1px ${o}`,
                            borderRadius: 4
                        }
                    }
                }, [e]);
                return (0, o.jsx)("div", {
                    style: t.tile
                })
            }
        },
        498667: (e, t, a) => {
            e.exports = a.p + "ebbfc682ffb9183b.png"
        },
        503681: (e, t, a) => {
            a.d(t, {
                z: () => k
            });
            var o = a(296540);
            a(581454);
            var s = a(474848);
            let n = `
	animation-duration: 2s;
	animation-direction: alternate;
	animation-iteration-count: infinite;
	animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
`,
                i = "M84.2513 81.7395C88.977 82.4048 90.6717 77.9739 90.8562 75.5247C91.1236 73.7435 93.5045 77.4968 90.1838 81.7561C88.1114 84.4142 84.495 84.3517 82.7126 83.226C82.1051 82.9047 81.0102 81.2832 84.2513 81.7395Z",
                r = "M70.5719 72.9453C69.9099 76.0342 66.8682 80.1714 66.3343 81.996C66.193 82.4788 65.8919 84.6494 67.5925 85.3012C68.6496 85.7063 70.0486 85.2456 71.0672 83.8076C71.9661 82.5385 73.2389 80.3849 73.7254 78.8907",
                d = "M81.3674 80.6071C80.0096 80.6071 75.6271 81.1468 75.3813 83.6491C75.3069 84.406 75.897 85.2639 76.991 85.2639C80.7189 85.2639 83.586 85.2878 83.9051 85.2639C86.1871 85.093 86.7281 83.2789 86.6934 81.7783C86.634 79.2117 85.903 77.1869 84.9662 75.5C83.2121 72.3413 80.7365 70.3673 80.5986 68.2393",
                l = "M81.8804 67.393L82.5295 65.5811C83.4844 62.2994 81.8804 57.7899 80.228 55.9816C79.6109 55.3062 77.9062 53.833 75.3259 53.833C73.4755 53.833 71.7706 54.8378 70.9613 55.6264C69.6193 56.934 69.1684 58.8522 68.4948 60.2513C67.4927 62.3325 65.1729 61.6477 64.0865 63.9062C63.5091 64.9101 63.3667 67.0446 64.0868 68.3343C64.807 69.624 66.6161 70.4021 68.4948 70.7995C70.264 71.1737 71.5432 71.2337 72.9333 71.2337C73.7944 71.2252 75.5588 71.0894 77.3272 70.4021",
                c = "M66.9294 64.6895C66.9001 65.1717 66.656 65.5492 65.662 65.4888C64.668 65.4285 64.4714 65.0242 64.5007 64.542C64.53 64.0598 65.0974 63.702 65.768 63.7427C66.4387 63.7834 66.9586 64.2073 66.9294 64.6895Z",
                g = "M79.6816 66.979C79.6816 64.529 80.4154 60.3832 81.1518 57.416C83.6256 60.95 86.3042 66.884 83.3275 68.6685C81.504 69.7617 79.6816 69.0329 79.6816 66.979Z",
                u = "M72.2065 59.658C71.7961 59.6024 71.5075 59.231 71.5817 58.6829C71.6559 58.1348 72.0328 57.8536 72.4433 57.9091C72.8538 57.9647 73.1335 58.4013 73.0681 58.8842C73.0028 59.3671 72.617 59.7135 72.2065 59.658Z",
                p = "M75.7954 59.8435C75.3849 59.7879 75.0964 59.4166 75.1706 58.8685C75.2448 58.3204 75.6217 58.0391 76.0322 58.0947C76.4426 58.1503 76.7224 58.5868 76.657 59.0697C76.5916 59.5526 76.2059 59.8991 75.7954 59.8435Z",
                f = "M73.062 79.4326 C71.7367 81.3275 71.5151 81.617 71.1477 83.1804 C70.8243 84.5568 71.8802 85.8228 73.738 85.2791 C75.5959 84.7353 77.938 81.4043 77.938 79.4327 C77.938 79.4327 77.938 79.4327 77.938 79.4327",
                h = "M72.4372 80.6925C68.0273 84 73.4246 85.323 76.0274 84.4997C78.874 83.5992 81.1506 81.6677 81.1448 79.1513C81.1423 78.0631 80.9619 76.9652 80.9368 76.7693L72.5612 74.2937C72.4563 77.7978 72.5212 79.1973 72.4372 80.6925Z",
                m = "M80.9666 77.4694C80.4498 79.3203 80.3912 80.6835 80.4498 81.2046C80.7488 83.8633 78.4457 84.1225 74.5339 84.5623C70.1565 85.0545 69.7203 82.221 72.7191 80.4413C71.6821 78.44 72.4056 75.8018 72.9875 74.8239",
                b = `
	#agent-acc-dog-left-leg-fill {
		animation-name: agent-acc-dog-left-leg-fill;
		${n}
	}
	@keyframes agent-acc-dog-left-leg-fill {
		0%, 40% { d: path("M72.4372 80.6925C68.0273 84 73.4246 85.323 76.0274 84.4997C78.874 83.5992 81.1506 81.6677 81.1448 79.1513C81.1423 78.0631 80.9619 76.9652 80.9368 76.7693L72.5612 74.2937C72.4563 77.7978 72.5212 79.1973 72.4372 80.6925Z"); }
		60%, 100% { d: path("M67.4372 81.6925C63.0273 85 68.4246 86.323 71.0274 85.4997C73.874 84.5992 76.1506 82.6677 76.1448 80.1513C76.1423 79.0631 75.9619 77.9652 75.9368 77.7693L67.5612 75.2937C67.4563 78.7978 67.5212 80.1973 67.4372 81.6925Z"); }
	}

	#agent-acc-dog-left-leg-stroke {
		animation-name: agent-acc-dog-left-leg-stroke;
		${n}
	}
	@keyframes agent-acc-dog-left-leg-stroke {
		0%, 40% { d: path("M80.9666 77.4694C80.4498 79.3203 80.3912 80.6835 80.4498 81.2046C80.7488 83.8633 78.4457 84.1225 74.5339 84.5623C70.1565 85.0545 69.7203 82.221 72.7191 80.4413C71.6821 78.44 72.4056 75.8018 72.9875 74.8239"); }
		60%, 100% { d: path("M75.9666 78.4694C75.4498 80.3203 75.3912 81.6835 75.4498 82.2046C75.7488 84.8633 73.4457 85.1225 69.5339 85.5623C65.1565 86.0545 64.7203 83.221 67.7191 81.4413C66.6821 79.44 67.4056 76.8018 67.9875 75.8239"); }
	}

	#agent-acc-dog-body-fill {
		animation-name: agent-acc-dog-body-fill;
		${n}
	}
	@keyframes agent-acc-dog-body-fill {
		0%, 40% { d: path("M68.5167 78.823C69.8415 76.5999 69.839 74.928 70.6031 73.1034C71.1234 70.4713 72.2666 69.7739 71.7436 67.9773C71.2207 66.1807 77.0344 65.2132 80.0066 64.9541C79.9864 66.4045 80.3439 69.6312 81.9353 70.9346C83.4208 73.1034 86.8612 75.7498 86.6665 82.0341C86.62 83.5343 86.2068 84.9953 84.4783 85.2635C84.1621 85.3126 80.7189 85.2635 76.9909 85.2635C75.8969 85.2635 75.3068 84.4056 75.3812 83.6487L72.4044 82.6585C72.1072 83.286 71.0647 84.3211 70.5806 84.7602C69.2791 86.036 67.2704 85.6107 66.9509 84.2668C66.5687 82.6594 67.7553 80.1008 68.5167 78.823Z"); }
		60%, 100% { d: path("M81.0632 70.0344C77.2518 69.1088 71.6576 71.5318 71.3769 71.6722L64.9737 70.7318L64.8825 81.0367C62.5186 81.446 61.5576 81.9423 61.3013 84.2131C61.0669 86.2894 61.8662 87.6019 67.3859 87.1218C69.259 86.7053 72.5358 86.0087 74.566 85.6664C76.4228 86.1123 79.5177 85.6581 82.8882 85.1022C86.5194 84.5032 87.63 79.9392 87.474 78.1766C87.3805 74.6202 84.3388 70.8299 81.0632 70.0344Z"); }
	}

	#agent-acc-dog-left-hand-fill {
		animation-name: agent-acc-dog-left-hand-fill;
		${n}
	}
	@keyframes agent-acc-dog-left-hand-fill {
		0%, 40% { d: path("M70.6026 72.8877C70.0746 74.8362 69.6915 76.4536 68.3667 78.6767C67.6053 79.9545 65.9049 82.533 66.4449 84.2665C66.8557 85.5853 68.7731 86.0357 70.0746 84.7599C70.5587 84.3208 71.6012 83.2856 71.8984 82.6582Z"); }
		60%, 100% { d: path("M54.3039 83.5936C54.6481 80.5445 59.7873 79.9305 61.9469 79.7188C65.9916 80.4513 73.3327 82.3533 70.3394 84.1016C69.628 83.9999 64.1182 85.1602 61.4523 85.7531C55.6035 86.7059 54.0695 85.6699 54.3039 83.5936Z"); }
	}

	#agent-acc-dog-left-hand-stroke {
		animation-name: agent-acc-dog-left-hand-stroke;
		${n}
	}
	@keyframes agent-acc-dog-left-hand-stroke {
		0%, 40% { d: path("M70.5719 72.9453C69.9099 76.0342 66.8682 80.1714 66.3343 81.996C66.193 82.4788 65.8919 84.6494 67.5925 85.3012C68.6496 85.7063 70.0486 85.2456 71.0672 83.8076C71.9661 82.5385 73.2389 80.3849 73.7254 78.8907"); }
		60%, 100% { d: path("M65.3076 78.1101C62.2783 79.3049 58.5688 79.9167 56.2894 81.0063C55.4092 81.4271 53.5897 83.2138 54.3842 84.8525C54.9456 86.0103 56.4324 86.1452 58.1945 86.1452C59.8961 86.1452 63.4693 85.3624 65.7494 84.6478"); }
	}

	#agent-acc-dog-tail {
		animation-name: agent-acc-dog-tail;
		${n}
	}
	@keyframes agent-acc-dog-tail {
		0%, 40% { d: path("M84.2513 81.7395C88.977 82.4048 90.6717 77.9739 90.8562 75.5247C91.1236 73.7435 93.5045 77.4968 90.1838 81.7561C88.1114 84.4142 84.495 84.3517 82.7126 83.226C82.1051 82.9047 81.0102 81.2832 84.2513 81.7395Z"); }
		60%, 80%, 100% { d: path("M85.2796 79.255C90.0172 78.6799 90.5127 73.9619 90.0597 71.5479C89.8591 69.7579 93.1268 72.7709 91.016 77.7421C89.6987 80.8444 86.1884 81.7162 84.176 81.0879C83.5063 80.934 82.0305 79.6494 85.2796 79.255Z"); }
		70%, 90% { d: path("M85.7386 77.9554C90.0132 80.0775 93.0191 76.4074 93.9668 74.1415C94.7825 72.5356 95.8577 76.8483 91.363 79.8426C88.5579 81.7112 85.1459 80.5111 83.8096 78.8806C83.3345 78.3841 82.807 76.5 85.7386 77.9554Z"); }
	}

	#agent-acc-dog-right-hand-fill {
		animation-name: agent-acc-dog-right-hand-fill;
		${n}
	}
	@keyframes agent-acc-dog-right-hand-fill {
		0%, 40% { d: path("M71.1477 83.1804 C71.5151 81.6169 71.7367 81.3274 73.062 79.4325 L77.938 79.4326 C77.938 81.4043 75.5959 84.7353 73.738 85.2791 C71.8802 85.8228 70.8243 84.5568 71.1477 83.1804 C71.1477 83.1804 71.1477 83.1804 71.1477 83.1804"); }
		60%, 100% { d: path("M68.7864 80.4014 C68.5973 80.4149 67.5291 80.4608 66.5068 80.6378 C64.1429 81.047 61.3414 82.1238 61.0851 84.3946 C60.8507 86.4708 62.3848 87.5069 68.2335 86.5541 C69.6201 86.2457 71.776 85.7839 73.6259 85.4259 C73.6259 85.4259 73.6259 85.4259 73.6259 85.4259"); }
	}

	#agent-acc-dog-right-hand-stroke {
		animation-name: agent-acc-dog-right-hand-stroke;
		${n}
	}
	@keyframes agent-acc-dog-right-hand-stroke {
		0%, 40% { d: path("M72.7738 77.2686C71.6065 78.9254 70.1924 81.5438 69.9469 82.3827C69.7863 82.9317 69.6719 84.857 71.6065 85.2869C72.9594 85.5875 74.7942 85.2229 75.9524 83.5878C76.9746 82.1448 78.4219 79.6959 78.9751 77.9969"); }
		60%, 100% { d: path("M68.7492 80.3111C65.1668 80.5556 63.4526 81.3209 62.2581 82.3619C61.2976 83.199 60.324 85.0797 61.6154 86.2501C62.5184 87.0686 65.4128 86.9896 67.1572 86.7404C69.3004 86.4343 71.5259 85.8499 73.5463 85.084"); }
	}

	#agent-acc-dog-back-stroke {
		animation-name: agent-acc-dog-back-stroke;
		${n}
	}
	@keyframes agent-acc-dog-back-stroke {
		0%, 40% { d: path("M81.3674 80.6071C80.0096 80.6071 75.6271 81.1468 75.3813 83.6491C75.3069 84.406 75.897 85.2639 76.991 85.2639C80.7189 85.2639 83.586 85.2878 83.9051 85.2639C86.1871 85.093 86.7281 83.2789 86.6934 81.7783C86.634 79.2117 85.903 77.1869 84.9662 75.5C83.2121 72.3413 80.7365 70.3673 80.5986 68.2393"); }
		60%, 100% { d: path("M80,75C78.1223,75.4266 76.8976,78.4574 76.8976,80.5163C74.5984,81.1775 72,83.5 74,85.5C75.3503,86.8503 79.5168,85.6581 82.8873,85.1022C86.5185,84.5032 87.6291,79.9392 87.4731,78.1766C87.3795,74.6202 84.3379,70.8299 81.0623,70.0344C77.2509,69.1088 71.6567,71.5318 71.376,71.6722"); }
	}

	#agent-acc-dog-head-stroke {
		animation-name: agent-acc-dog-head-stroke;
		${n}
	}
	@keyframes agent-acc-dog-head-stroke {
		0%, 40% { d: path("M81.8804 67.393L82.5295 65.5811C83.4844 62.2994 81.8804 57.7899 80.228 55.9816C79.6109 55.3062 77.9062 53.833 75.3259 53.833C73.4755 53.833 71.7706 54.8378 70.9613 55.6264C69.6193 56.934 69.1684 58.8522 68.4948 60.2513C67.4927 62.3325 65.1729 61.6477 64.0865 63.9062C63.5091 64.9101 63.3667 67.0446 64.0868 68.3343C64.807 69.624 66.6161 70.4021 68.4948 70.7995C70.264 71.1737 71.5432 71.2337 72.9333 71.2337C73.7944 71.2252 75.5588 71.0894 77.3272 70.4021"); }
		60%, 100% { d: path("M72.9796 76.7831L73.4539 74.9874C74.1006 71.7533 72.1856 67.5504 70.4473 65.9484C69.7982 65.3501 68.0374 64.0747 65.5566 64.2881C63.7775 64.4411 62.2214 65.5481 61.5084 66.3732C60.3263 67.7413 60.0514 69.6228 59.5194 71.0237C58.7281 73.1075 56.441 72.6409 55.5832 74.9021C55.1111 75.9151 55.1507 77.979 55.9497 79.1594C56.7487 80.3398 58.5525 80.9383 60.3916 81.165C62.1236 81.3785 63.3584 81.3304 64.695 81.2154C65.2965 81.1577 66.3518 80.9958 67.5148 80.6013"); }
	}

	#agent-acc-dog-nose {
		animation-name: agent-acc-dog-nose;
		${n}
	}
	@keyframes agent-acc-dog-nose {
		0%, 40% { d: path("M66.9294 64.6895C66.9001 65.1717 66.656 65.5492 65.662 65.4888C64.668 65.4285 64.4714 65.0242 64.5007 64.542C64.53 64.0598 65.0974 63.702 65.768 63.7427C66.4387 63.7834 66.9586 64.2073 66.9294 64.6895Z"); }
		60%, 100% { d: path("M58.5402 76.2138C58.4739 76.628 58.1564 76.9215 56.9668 76.7309C55.7772 76.5402 55.5673 76.1622 55.6337 75.748C55.7001 75.3338 56.4046 75.1023 57.2072 75.231C58.0098 75.3596 58.6066 75.7996 58.5402 76.2138Z"); }
	}

	#agent-acc-dog-right-ear {
		animation-name: agent-acc-dog-right-ear;
		${n}
	}
	@keyframes agent-acc-dog-right-ear {
		0%, 40% { d: path("M79.6816 66.979C79.6816 64.529 80.4154 60.3832 81.1518 57.416C83.6256 60.95 86.3042 66.884 83.3275 68.6685C81.504 69.7617 79.6816 69.0329 79.6816 66.979Z"); }
		60%, 100% { d: path("M70.8327 76.5672C70.6302 74.2117 70.9928 70.1651 71.4555 67.2515C74.1262 70.4446 77.1922 75.9282 74.4778 77.89C72.815 79.0918 71.0026 78.5418 70.8327 76.5672Z"); }
	}

	#agent-acc-dog-left-eye {
		animation-name: agent-acc-dog-left-eye;
		${n}
	}
	@keyframes agent-acc-dog-left-eye {
		0%, 40% { d: path("M72.2065 59.658C71.7961 59.6024 71.5075 59.231 71.5817 58.6829C71.6559 58.1348 72.0328 57.8536 72.4433 57.9091C72.8538 57.9647 73.1335 58.4013 73.0681 58.8842C73.0028 59.3671 72.617 59.7135 72.2065 59.658Z"); }
		60%, 100% { d: path("M63.1777 70.9001C62.6811 70.8759 62.2995 70.4261 62.3347 69.7036C62.37 68.981 62.7936 68.5705 63.2902 68.5948C63.7869 68.619 64.1643 69.1547 64.1332 69.7913C64.1021 70.4279 63.6743 70.9244 63.1777 70.9001Z"); }
	}

	#agent-acc-dog-right-eye {
		animation-name: agent-acc-dog-right-eye;
		${n}
	}
	@keyframes agent-acc-dog-right-eye {
		0%, 40% { d: path("M75.7954 59.8435C75.3849 59.7879 75.0964 59.4166 75.1706 58.8685C75.2448 58.3204 75.6217 58.0391 76.0322 58.0947C76.4426 58.1503 76.7224 58.5868 76.657 59.0697C76.5916 59.5526 76.2059 59.8991 75.7954 59.8435Z"); }
		60%, 100% { d: path("M66.6933 71.2234C66.1967 71.1991 65.8151 70.7493 65.8504 70.0268C65.8856 69.3043 66.3092 68.8938 66.8059 68.918C67.3025 68.9423 67.6799 69.478 67.6488 70.1146C67.6177 70.7512 67.19 71.2476 66.6933 71.2234Z"); }
	}

	/* Dark-mode outline duplicates */
	#agent-acc-dog-tail-outline {
		animation-name: agent-acc-dog-tail;
		${n}
	}
	#agent-acc-dog-left-hand-stroke-outline {
		animation-name: agent-acc-dog-left-hand-stroke;
		${n}
	}
	#agent-acc-dog-back-stroke-outline {
		animation-name: agent-acc-dog-back-stroke;
		${n}
	}
	#agent-acc-dog-head-stroke-outline {
		animation-name: agent-acc-dog-head-stroke;
		${n}
	}
	#agent-acc-dog-nose-outline {
		animation-name: agent-acc-dog-nose;
		${n}
	}
	#agent-acc-dog-right-ear-outline {
		animation-name: agent-acc-dog-right-ear;
		${n}
	}
	#agent-acc-dog-left-eye-outline {
		animation-name: agent-acc-dog-left-eye;
		${n}
	}
	#agent-acc-dog-right-eye-outline {
		animation-name: agent-acc-dog-right-eye;
		${n}
	}
	#agent-acc-dog-right-hand-stroke-outline {
		animation-name: agent-acc-dog-right-hand-stroke;
		${n}
	}
	#agent-acc-dog-left-leg-fill-outline {
		animation-name: agent-acc-dog-left-leg-fill;
		${n}
	}
	#agent-acc-dog-left-leg-stroke-outline {
		animation-name: agent-acc-dog-left-leg-stroke;
		${n}
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
                speechBubbleTextOverride: n,
                speechBubbleVerticalOffsetPx: x = 20,
                speechBubbleHorizontalOffsetPx: v = 12,
                speechBubbleTailCircleTop: M,
                speechBubbleTailCircleInsetInlineStartPx: w,
                animated: A = !0
            }) {
                let S = "dark" === (0, a(960253).e)() ? "#d3d3d3" : "white",
                    {
                        showBubble: j,
                        isHiding: B,
                        currentPhrase: T,
                        handleMouseEnter: I,
                        handleMouseLeave: L
                    } = function(e, t) {
                        let s = (0, a(109939).tz)(),
                            n = a(189760).B.dog,
                            i = s.locale.startsWith("en"),
                            r = "none" !== e && !!n && i,
                            d = (0, o.useMemo)(() => t ? [t] : n ? (0, a(763230).k4)(Object.values(n).map(e => s.formatMessage(e))) : [], [s, n, t]),
                            [l, c] = (0, o.useState)(!1),
                            [g, u] = (0, o.useState)(!1),
                            p = (0, o.useRef)(0),
                            [f, h] = (0, o.useState)(""),
                            m = (0, o.useRef)(),
                            b = (0, o.useCallback)(() => {
                                r && 0 !== d.length && (clearTimeout(m.current), h(d[p.current % d.length]), p.current++, u(!1), c(!0))
                            }, [d, r]),
                            y = (0, o.useCallback)(() => {
                                r && (u(!0), m.current = setTimeout(() => {
                                    c(!1), u(!1)
                                }, 150))
                            }, [r]);
                        return {
                            showBubble: r && (l || g),
                            isHiding: g,
                            currentPhrase: f,
                            handleMouseEnter: r ? b : void 0,
                            handleMouseLeave: r ? y : void 0
                        }
                    }(t, n),
                    D = "none" !== t ? t : "topRight";
                return (0, s.jsxs)("div", {
                    style: y,
                    children: [j ? (0, s.jsx)(a(679416).P, {
                        placement: D,
                        animated: A,
                        isHiding: B,
                        verticalOffsetPx: x,
                        horizontalOffsetPx: v,
                        tailCircleTop: M,
                        tailCircleInsetInlineStartPx: w,
                        children: T
                    }) : void 0, A ? (0, s.jsx)("style", {
                        children: b
                    }) : void 0, (0, s.jsxs)("svg", {
                        width: e,
                        height: e,
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: C,
                        onMouseEnter: I,
                        onMouseLeave: L,
                        children: [(0, s.jsxs)("g", {
                            children: [(0, s.jsx)("path", {
                                id: "agent-acc-dog-tail-outline",
                                d: i,
                                stroke: S,
                                strokeWidth: "4"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill-outline",
                                d: h,
                                stroke: S,
                                strokeWidth: "4"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke-outline",
                                d: m,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke-outline",
                                d: r,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-back-stroke-outline",
                                d: d,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-head-stroke-outline",
                                d: l,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-nose-outline",
                                d: c,
                                stroke: S,
                                strokeWidth: "3"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-right-ear-outline",
                                d: g,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-left-eye-outline",
                                d: u,
                                stroke: S,
                                strokeWidth: "3"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-right-eye-outline",
                                d: p,
                                stroke: S,
                                strokeWidth: "3"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-right-hand-stroke-outline",
                                d: f,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            })]
                        }), (0, s.jsxs)("g", {
                            children: [(0, s.jsx)("path", {
                                id: "agent-acc-dog-tail",
                                d: i,
                                fill: "black"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill",
                                d: h,
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke",
                                d: m,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-body-fill",
                                d: "M68.5167 78.823C69.8415 76.5999 69.839 74.928 70.6031 73.1034C71.1234 70.4713 72.2666 69.7739 71.7436 67.9773C71.2207 66.1807 77.0344 65.2132 80.0066 64.9541C79.9864 66.4045 80.3439 69.6312 81.9353 70.9346C83.4208 73.1034 86.8612 75.7498 86.6665 82.0341C86.62 83.5343 86.2068 84.9953 84.4783 85.2635C84.1621 85.3126 80.7189 85.2635 76.9909 85.2635C75.8969 85.2635 75.3068 84.4056 75.3812 83.6487L72.4044 82.6585C72.1072 83.286 71.0647 84.3211 70.5806 84.7602C69.2791 86.036 67.2704 85.6107 66.9509 84.2668C66.5687 82.6594 67.7553 80.1008 68.5167 78.823Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke",
                                d: r,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-back-stroke",
                                d: d,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-head-stroke",
                                d: l,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-nose",
                                d: c,
                                fill: "black",
                                stroke: "black"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-right-ear",
                                d: g,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-left-eye",
                                d: u,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "0.5"
                            }), (0, s.jsx)("path", {
                                id: "agent-acc-dog-right-eye",
                                d: p,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "0.5"
                            }), (0, s.jsx)("path", {
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
        512342: (e, t, a) => {
            a.d(t, {
                LB: () => n,
                VT: () => o,
                vr: () => s
            });
            let o = (0, a(109939).YK)({
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
                s = {
                    text: {
                        summarize: {
                            name: o.autofillSummary,
                            svg: a(636434).P
                        },
                        translate: {
                            name: o.autofillTranslate,
                            svg: a(740902).textTranslateIcon
                        },
                        extract: {
                            name: o.autofillExtract,
                            svg: a(774458).n
                        },
                        custom: {
                            name: o.autofillCustom,
                            svg: a(312528).x
                        }
                    },
                    select: {
                        select: {
                            name: o.autofillCustom,
                            svg: a(312528).x
                        }
                    },
                    multi_select: {
                        select: {
                            name: o.autofillCustom,
                            svg: a(312528).x
                        }
                    }
                };

            function n(e) {
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
        528440: (e, t, a) => {
            e.exports = a.p + "d15ce47ef6ddf83d.png"
        },
        546579: (e, t, a) => {
            e.exports = a.p + "a5098827bba61d4d.png"
        },
        550122: (e, t, a) => {
            e.exports = a.p + "176441c5ba020951.png"
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
            var o = a(474848);
            let s = `
	@keyframes accessory-speech-bubble-in {
		0% { opacity: 0; transform: scale(0.85); }
		100% { opacity: 1; transform: scale(1); }
	}
	@keyframes accessory-speech-bubble-out {
		0% { opacity: 1; transform: scale(1); }
		100% { opacity: 0; transform: scale(0.85); }
	}
`,
                n = (0, a(51831).n)(!0),
                i = `1.5px solid ${a(632079).Tj.border.secondary}`,
                r = {
                    container: {
                        position: "absolute",
                        zIndex: 2,
                        pointerEvents: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "max-content"
                    },
                    bubble: { ...n,
                        position: "relative",
                        whiteSpace: "normal",
                        maxWidth: 220,
                        color: a(632079).Tj.text.secondary,
                        fontWeight: a(699422).Wy.medium,
                        border: i,
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
                        border: i,
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
                isHiding: n = !1,
                verticalOffsetPx: i = 0,
                horizontalOffsetPx: u = 0,
                tailCircleTop: p,
                tailCircleInsetInlineStartPx: f
            }) {
                let h = function(e, t, a) {
                    let {
                        container: {
                            bottom: o,
                            insetInlineStart: s,
                            insetInlineEnd: n,
                            ...i
                        },
                        tailCircle: r
                    } = d[e], l = 0 !== t && void 0 !== o ? `calc(${String(o)} - ${t}px)` : o;
                    if ("topRight" === e) {
                        let e = 0 !== a && void 0 !== s ? `calc(${String(s)} + ${a}px)` : s;
                        return {
                            container: { ...i,
                                insetInlineStart: e,
                                bottom: l
                            },
                            tailCircle: r
                        }
                    }
                    let c = 0 !== a && void 0 !== n ? `calc(${String(n)} - ${a}px)` : n;
                    return {
                        container: { ...i,
                            insetInlineEnd: c,
                            bottom: l
                        },
                        tailCircle: r
                    }
                }(e, i, u);
                return (0, o.jsxs)(o.Fragment, {
                    children: [a ? (0, o.jsx)("style", {
                        children: s
                    }) : void 0, (0, o.jsxs)("div", {
                        style: { ...r.container,
                            ...h.container,
                            ...a ? n ? c : l : void 0
                        },
                        children: [(0, o.jsx)("div", {
                            style: r.bubble,
                            children: t
                        }), (0, o.jsx)("div", {
                            style: { ...r.tailCircle,
                                ...h.tailCircle,
                                ...void 0 !== p && {
                                    top: p
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
            function o(e, t) {
                return s(d(e, t))
            }

            function s(e) {
                return void 0 !== e && (e === a(212169).q_ || e === a(212169).YD)
            }

            function n(e, t) {
                if (s(t)) return;
                let o = a(212169).c$[e],
                    n = o.steps.findIndex(e => e.id === t);
                return -1 === n ? o.steps[0].id : n === o.steps.length - 1 ? a(212169).q_ : o.steps[n + 1].id
            }

            function i(e, t) {
                let a = d(e, t);
                if (!(!a || s(a))) return n(t, a)
            }

            function r(e, t) {
                let o = d(e, t);
                if (o) {
                    var n;
                    let e = a(212169).c$[t];
                    if (s(o)) return null == (n = e.steps.at(-1)) ? void 0 : n.id;
                    let i = e.steps.findIndex(e => e.id === o);
                    return -1 !== i && 0 !== i ? e.steps[i - 1].id : void 0
                }
            }

            function d(e, t) {
                var o;
                if (!e) return;
                let s = ((null == (o = e.getSettings()) ? void 0 : o.tutorials) || {})[t];
                return void 0 === s ? a(212169).c$[t].steps[0].id : s
            }
            a.d(t, {
                KD: () => r,
                gt: () => d,
                i9: () => i,
                ll: () => s,
                tb: () => n,
                x$: () => o
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
        879817: (e, t, a) => {
            e.exports = a.p + "1ff0049b43405408.png"
        },
        920224: (e, t, a) => {
            a.d(t, {
                A: () => g,
                S: () => l
            });
            var o = a(296540),
                s = a(474848);
            let n = "bodyRegular",
                i = "bodySemibold",
                r = "bodySmRegular",
                d = o.forwardRef((e, t) => {
                    let o, {
                            actor: n,
                            defaultUserTitle: i = "name_only",
                            useEmailAsTooltip: r,
                            tooltip: d,
                            tooltipPlacement: g,
                            hoveredStyle: u,
                            disabledFeedback: p,
                            customUserTitleStyles: f,
                            iconSizeOverride: h
                        } = e,
                        m = (0, a(682985).K8)(() => n.asActor && n.isUser() ? n.email : void 0, [n]),
                        b = r && m ? m : d,
                        y = h || (a(986939).A.isMobile ? a(636518).nd : a(636518).pg),
                        C = "name_and_email" !== i && ("name_and_email_unless_right" !== i || e.right) ? (0, s.jsx)(l, {
                            customStyles: f,
                            actor: null == n ? void 0 : n.asActor
                        }) : (0, s.jsx)(c, {
                            actor: null == n ? void 0 : n.asActor,
                            customStyles: f
                        });
                    return (0, a(197018).H3)(n) ? o = (0, s.jsx)(a(31319).A, {
                        botValue: null == n ? void 0 : n.asActor,
                        size: y
                    }) : (0, a(197018).ps)(n) ? o = (0, s.jsx)(a(321753).A, {
                        userValue: null == n ? void 0 : n.asActor,
                        size: y
                    }) : (0, a(722371).HB)(n), (0, s.jsx)(a(51831).m, {
                        placement: g ? ? "bottom",
                        alignment: "start",
                        textWrap: !0,
                        disableTooltip: !b,
                        content: () => b,
                        children: n => (0, s.jsx)(a(95582).A, { ...(0, a(63390).A)(n, e),
                            icon: o,
                            title: C,
                            disabledFeedback: p,
                            className: "notranslate",
                            ref: t,
                            hoveredStyle: u
                        })
                    })
                });

            function l(e) {
                let {
                    actor: t,
                    customStyles: o
                } = e, i = (0, a(533992).v3)(), d = (0, a(109939).tz)(), l = t && t.id === i.currentUser.id, c = (0, a(682985).K8)(() => t && t.getDisplayName(d), [t, d]), g = a(986939).A.isMobile ? r : n;
                return l ? (0, s.jsx)(a(109939).sA, {
                    id: "UserMenuItem.fullName.authorLabel",
                    defaultMessage: "<author>{fullName}</author> <you>(You)</you>",
                    values: {
                        author: e => (0, s.jsx)(a(111010).D, {
                            as: "span",
                            styleKey: g,
                            style: o,
                            children: e
                        }),
                        fullName: c,
                        you: e => (0, s.jsx)(a(111010).D, {
                            as: "span",
                            colorVariant: "secondary",
                            styleKey: g,
                            style: o,
                            children: e
                        })
                    }
                }) : c ? (0, s.jsx)(a(111010).D, {
                    lineClamp: 1,
                    styleKey: g,
                    style: o,
                    children: c
                }) : (0, s.jsx)(a(111010).D, {
                    styleKey: g,
                    style: o,
                    children: (0, s.jsx)(a(109939).sA, {
                        id: "UserMenuItem.fullName.unknownAuthorLabel",
                        defaultMessage: "Unknown author"
                    })
                })
            }

            function c(e) {
                let {
                    actor: t,
                    customStyles: o
                } = e, d = (0, a(109939).tz)(), l = (0, a(682985).K8)(() => t && t.getDisplayName(d), [t, d]), {
                    email: c,
                    showEmail: g
                } = (0, a(682985).K8)(() => {
                    let e = t && t.asActor && t.isUser() ? t.email : void 0;
                    return {
                        email: e,
                        showEmail: l !== e
                    }
                }, [t, l]), u = a(986939).A.isMobile ? "bodySmRegular" : i, p = a(986939).A.isMobile ? r : n;
                return l ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(a(111010).D, {
                        lineClamp: 1,
                        as: "span",
                        styleKey: u,
                        style: o,
                        children: l
                    }), g ? (0, s.jsx)(a(111010).D, {
                        lineClamp: 1,
                        as: "span",
                        styleKey: p,
                        style: o,
                        children: ` ${c}`
                    }) : void 0]
                }) : (0, s.jsx)(a(111010).D, {
                    styleKey: i,
                    style: o,
                    children: (0, s.jsx)(a(109939).sA, {
                        id: "UserMenuItem.fullName.unknownAuthorLabel",
                        defaultMessage: "Unknown author"
                    })
                })
            }
            d.displayName = "UserMenuItem";
            let g = d
        },
        927364: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => s,
                xMarkCircleIcon: () => n
            }), a(296540);
            var o = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M12.817 7.183a.625.625 0 0 1 0 .884L10.884 10l1.933 1.933a.625.625 0 1 1-.884.884L10 10.884l-1.933 1.933a.625.625 0 1 1-.884-.884L9.116 10 7.183 8.067a.625.625 0 1 1 .884-.884L10 9.116l1.933-1.933a.625.625 0 0 1 .884 0"
                        }), (0, o.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                n = (0, a(104509).wt)("xMarkCircle", s, "default")
        },
        932052: (e, t, a) => {
            function o(e) {
                return e.canEdit() && (0, a(909212).re)()
            }

            function s(e) {
                return e.canEdit() && !e.isSystemBlock() && (0, a(909212).re)()
            }
            a.d(t, {
                G: () => s,
                m: () => o
            })
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
        }
    }
]);