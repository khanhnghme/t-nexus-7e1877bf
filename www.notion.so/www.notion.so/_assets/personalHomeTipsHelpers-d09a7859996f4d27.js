"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [41135], {
        362008: (e, t, n) => {
            n.d(t, {
                AQ: () => u,
                Mn: () => i,
                YH: () => o,
                ap: () => r,
                jX: () => a,
                lH: () => s,
                qs: () => l
            });
            let a = (0, n(109939).YK)({
                year: {
                    id: "timeUtils.durationDescriptor.intervalYear",
                    defaultMessage: "{numYears, plural, one {1 year} other {{numYears} years}}"
                },
                week: {
                    id: "timeUtils.durationDescriptor.intervalWeek",
                    defaultMessage: "{numWeeks, plural, one {1 week} other {{numWeeks} weeks}}"
                },
                day: {
                    id: "timeUtils.durationDescriptor.intervalDay",
                    defaultMessage: "{numDays, plural, one {1 day} other {{numDays} days}}"
                },
                hour: {
                    id: "timeUtils.durationDescriptor.intervalHour",
                    defaultMessage: "{numHours, plural, one {1 hour} other {{numHours} hours}}"
                },
                minute: {
                    id: "timeUtils.durationDescriptor.intervalMinute",
                    defaultMessage: "{numMinutes, plural, one {1 minute} other {{numMinutes} minutes}}"
                },
                second: {
                    id: "timeUtils.durationDescriptor.intervalSecond",
                    defaultMessage: "{numSeconds, plural, one {1 second} other {{numSeconds} seconds}}"
                }
            });

            function s(e, t) {
                let s = Math.floor(e / n(627179).Gq),
                    i = Math.floor(e / n(627179).lG),
                    o = Math.floor(e / n(627179).nD),
                    r = Math.floor(e / n(627179).pT),
                    l = Math.floor(e / n(627179).Xb),
                    u = Math.floor(e / n(627179).TD);
                if (s >= 1) return t.formatMessage(a.year, {
                    numYears: s
                });
                if (i >= 1) return t.formatMessage(a.week, {
                    numWeeks: i
                });
                if (o >= 1) return t.formatMessage(a.day, {
                    numDays: o
                });
                if (r >= 1) return t.formatMessage(a.hour, {
                    numHours: r
                });
                if (l >= 1) return t.formatMessage(a.minute, {
                    numMinutes: l
                });
                else return t.formatMessage(a.second, {
                    numSeconds: u
                })
            }

            function i(e, t = Date.now()) {
                return Math.floor((t - e) / 864e5)
            }

            function o(e) {
                return Math.floor((Date.now() - e) / 6e4)
            }

            function r(e) {
                return Math.floor((e - Date.now()) / n(627179).Xb)
            }

            function l(e) {
                return Math.floor((e - Date.now()) / n(627179).pT)
            }

            function u(e) {
                return Math.floor((e - Date.now()) / n(627179).nD)
            }
        },
        405570: (e, t, n) => {
            n.r(t), n.d(t, {
                EXISTING_USER_MULTIPLAYER_KEYS: () => d,
                EXISTING_USER_SINGLEPLAYER_KEYS: () => g,
                NEW_USER_MULTIPLAYER_CREATOR_KEYS: () => r,
                NEW_USER_MULTIPLAYER_JOINER_KEYS: () => l,
                NEW_USER_SINGLEPLAYER_KEYS: () => u,
                getRelevantTipCards: () => s,
                getTipsEligibilityData: () => i
            }), n(581454), n(296540);
            var a = n(474848);

            function s(e) {
                let t = function(e) {
                        if (e.isNewAccount)
                            if (!e.isMultiplayer) return u;
                            else if (e.isWorkspaceOwner) return r;
                        else return l;
                        return e.isMultiplayer ? d : g
                    }(e),
                    a = function(e) {
                        switch (e) {
                            case "eng":
                            case "programmer":
                                return ["epdSprintPlanning", "notionAPI"];
                            case "marketing":
                                return ["marketingAIPrompts", "marketingCampaigns"];
                            case "product":
                            case "product_manager":
                                return ["notionForProductOkrs"];
                            case "creative":
                            case "productDesign":
                            case "designer":
                                return ["designersUltimateGuide"];
                            case "student":
                                return ["student"];
                            case "personal":
                                return ["templatesGuide", "switch", "personalTasks"];
                            default:
                                return []
                        }
                    }(e.persona),
                    s = e.isOnTrial ? ["timedTrial"] : [];
                return (0, n(627179).sb)(s.concat(t).concat(a)).map(e => o[e])
            }

            function i(e) {
                let {
                    environment: t,
                    isWorkspaceOwner: a,
                    isOnTrial: s
                } = e, i = n(728372).AppStoreCurrentUserSettingsStore.state, o = !!i && 30 >= Number((0, n(996903).i)(i));
                return {
                    isMultiplayer: (0, n(419144).Az)({
                        environment: t
                    }),
                    isNewAccount: o,
                    isWorkspaceOwner: a,
                    isOnTrial: s,
                    persona: null == i ? void 0 : i.getPersona()
                }
            }
            let o = {
                    block: {
                        key: "block",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.whatIsBlock.title",
                            defaultMessage: "What is a block?"
                        }),
                        durationMinutes: 2,
                        href: "/what-is-a-block",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.whatIsABlockPng
                    },
                    page: {
                        key: "page",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.createPage.title",
                            defaultMessage: "Create your first page"
                        }),
                        durationMinutes: 2,
                        href: "/create-your-first-page",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.createYourFirstPagePng
                    },
                    subpage: {
                        key: "subpage",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.createSubpage.title",
                            defaultMessage: "Create a subpage"
                        }),
                        durationMinutes: 2,
                        href: "/create-a-subpage",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.createASubpagePng
                    },
                    customize: {
                        key: "customize",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.customize.title",
                            defaultMessage: "Customize & style your content"
                        }),
                        durationMinutes: 9,
                        href: "/customize-and-style-your-content",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.customizeAndStyleYourContentPng
                    },
                    db: {
                        key: "db",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.whatIsDatabase.title",
                            defaultMessage: "What is a database?"
                        }),
                        durationMinutes: 2,
                        href: "/what-is-a-database",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.whatIsADatabasePng
                    },
                    createDb: {
                        key: "createDb",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.createDatabase.title",
                            defaultMessage: "Create a database"
                        }),
                        durationMinutes: 3,
                        href: "/create-a-database",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.createADatabasePng
                    },
                    template: {
                        key: "template",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.startWithTemplate.title",
                            defaultMessage: "Start with a template"
                        }),
                        durationMinutes: 4,
                        href: "/start-with-a-template",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.startWithATemplatePng
                    },
                    share: {
                        key: "share",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.shareYourWork.title",
                            defaultMessage: "Share your work"
                        }),
                        durationMinutes: 2,
                        href: "/share-your-work",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.shareYourWorkPng
                    },
                    notion: {
                        key: "notion",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.whatIsNotion.title",
                            defaultMessage: "What is Notion?"
                        }),
                        durationMinutes: 4,
                        href: "/guides/what-is-notion",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.whatIsNotionPng
                    },
                    collaborate: {
                        key: "collaborate",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.collaborate.title",
                            defaultMessage: "Collaborate with people"
                        }),
                        durationMinutes: 2,
                        href: "/collaborate-with-people",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.collaborateWithPeoplePng
                    },
                    workspaceBestPractices: {
                        key: "workspaceBestPractices",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.workspaceBestPractices.title",
                            defaultMessage: "Organized workspace best practices"
                        }),
                        durationMinutes: 5,
                        href: "/notion-academy/lesson/organized-workspace-best-practices",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.organizedWorkspaceBestPracticesPng
                    },
                    onboardingTeam: {
                        key: "onboardingTeam",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.onboardingTeam.title",
                            defaultMessage: "Onboarding your team"
                        }),
                        durationMinutes: 2,
                        href: "/guides/three-steps-before-onboarding-to-notion",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.threeStepsBeforeOnboardingToNotionPng
                    },
                    sharingAndPerms: {
                        key: "sharingAndPerms",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.sharingAndPerms.title",
                            defaultMessage: "Sharing & permissions"
                        }),
                        durationMinutes: 10,
                        href: "/sharing-and-permissions",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.sharingAndPermissionsPng
                    },
                    importingData: {
                        key: "importingData",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.importingData.title",
                            defaultMessage: "Importing data"
                        }),
                        durationMinutes: 3,
                        href: "/notion-academy/lesson/importing-data",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.importingDataPng
                    },
                    docsAndMeetings: {
                        key: "docsAndMeetings",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.docsAndMeetings.title",
                            defaultMessage: "Docs and meetings"
                        }),
                        durationMinutes: 3,
                        href: "/notion-academy/lesson/docs-and-meetings",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.docsAndMeetingsPng
                    },
                    wikiAndFaqs: {
                        key: "wikiAndFaqs",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.wikiAndFaqs.title",
                            defaultMessage: "Wikis and FAQs"
                        }),
                        durationMinutes: 3,
                        href: "/notion-academy/lesson/wikis-and-faqs",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.wikisAndFaqsPng
                    },
                    projects: {
                        key: "projects",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.projects.title",
                            defaultMessage: "Projects"
                        }),
                        durationMinutes: 3,
                        href: "/notion-academy/lesson/projects",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.gettingStartedProjectsPng
                    },
                    templatesGuide: {
                        key: "templatesGuide",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.templatesGuide.title",
                            defaultMessage: "The ultimate guide to Notion templates"
                        }),
                        durationMinutes: 5,
                        href: "/guides/the-ultimate-guide-to-notion-templates",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.theUltimateGuideToNotionTemplatesPng
                    },
                    projectsAndTasks: {
                        key: "projectsAndTasks",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.projectsAndTasks.title",
                            defaultMessage: "Getting started with projects and tasks"
                        }),
                        durationMinutes: 8,
                        href: "/guides/getting-started-with-projects-and-tasks",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.gettingStartedWithProjectsAndTasksPng
                    },
                    usingAI: {
                        key: "usingAI",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.usingAI.title",
                            defaultMessage: "Using Notion AI to extend your impact"
                        }),
                        durationMinutes: 3,
                        href: "/guides/using-notion-ai",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.usingNotionAiPng
                    },
                    keyboardShortcuts: {
                        key: "keyboardShortcuts",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.keyboardShortcuts.title",
                            defaultMessage: "Keyboard shortcuts"
                        }),
                        durationMinutes: 3,
                        href: "/keyboard-shortcuts",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.keyboardShortcutsPng
                    },
                    qnaPersonal: {
                        key: "qnaPersonal",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.qnaPersonal.title",
                            defaultMessage: "Unearth fresh insights using Q&A"
                        }),
                        durationMinutes: 10,
                        href: "/guides/unearth-fresh-insights-from-your-personal-knowledge-library-using-q-and-a",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.unearthFreshInsightsFromYourPersonalKnowledgeLibraryUsingQAndAPng
                    },
                    blockTypes: {
                        key: "blockTypes",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.blockTypes.title",
                            defaultMessage: "Types of content blocks"
                        }),
                        durationMinutes: 10,
                        href: "/guides/types-of-content-blocks",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.typesOfContentBlocksPng
                    },
                    tablesVsDatabases: {
                        key: "tablesVsDatabases",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.tablesVsDatabases.title",
                            defaultMessage: "The best ways to use simple tables"
                        }),
                        durationMinutes: 8,
                        href: "/guides/simple-tables-vs-databases",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.simpleTablesVsDatabasesPng
                    },
                    switch: {
                        key: "switch",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.switch.title",
                            defaultMessage: "Switch between accounts"
                        }),
                        durationMinutes: 3,
                        href: "/guides/a-notion-guide-on-switching-between-work-and-personal-accounts",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.aNotionGuideOnSwitchingBetweenWorkAndPersonalAccountsPng
                    },
                    sharingSettings: {
                        key: "sharingSettings",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.sharingSettings.title",
                            defaultMessage: "Understanding Notion’s sharing settings"
                        }),
                        durationMinutes: 6,
                        href: "/guides/understanding-notions-sharing-settings",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.understandingNotionsSharingSettingsPng
                    },
                    ecosystem: {
                        key: "ecosystem",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.ecosystem.title",
                            defaultMessage: "Notion and your company’s tool ecosystem"
                        }),
                        durationMinutes: 6,
                        href: "/guides/notion-fit-tool-ecosystem",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.notionFitToolEcosystemPng
                    },
                    qnaWork: {
                        key: "qnaWork",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.qnaWork.title",
                            defaultMessage: "Get answers about work content faster with Q&A"
                        }),
                        durationMinutes: 10,
                        href: "/guides/get-answers-about-content-faster-with-q-and-a",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.getAnswersAboutContentFasterWithQAndAPng
                    },
                    roadmaps: {
                        key: "roadmaps",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.roadmaps.title",
                            defaultMessage: "Using Notion for product roadmaps"
                        }),
                        durationMinutes: 4,
                        href: "/guides/using-notion-for-product-roadmaps",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.usingNotionForProductRoadmapsPng
                    },
                    personalTasks: {
                        key: "personalTasks",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.personalTasks.title",
                            defaultMessage: "Personal tasks"
                        }),
                        href: "/guides/personal-tasks",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.personalTasksPng,
                        durationMinutes: 10
                    },
                    student: {
                        key: "student",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.student.title",
                            defaultMessage: "Student guide"
                        }),
                        durationMinutes: 8,
                        href: "/guides/setting-up-notion-for-school",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.settingUpNotionForSchoolPng
                    },
                    epdSprintPlanning: {
                        key: "epdSprintPlanning",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.epdSprintPlanning.title",
                            defaultMessage: "How engineers use Notion for sprint planning"
                        }),
                        href: "/guides/product-engineering-notion-sprint-planning",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.productEngineeringNotionSprintPlanningPng,
                        durationMinutes: 10
                    },
                    notionAPI: {
                        key: "notionAPI",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.notionAPI.title",
                            defaultMessage: "Connect your tools to Notion with the API"
                        }),
                        href: "/guides/connect-tools-to-notion-api",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.connectToolsToNotionApiPng,
                        durationMinutes: 4
                    },
                    notionForProductOkrs: {
                        key: "notionForProductOkrs",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.notionForProductOkrs.title",
                            defaultMessage: "Using Notion for product & engineering OKRs"
                        }),
                        href: "/guides/using-notion-for-product-and-engineering-okrs",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.usingNotionForProductAndEngineeringOkrsPng,
                        durationMinutes: 5
                    },
                    marketingAIPrompts: {
                        key: "marketingAIPrompts",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.marketingAIPrompts.title",
                            defaultMessage: "10 AI prompts to help marketers write better copy, faster"
                        }),
                        href: "/guides/10-ai-prompts-to-help-marketers-write-better-copy-faster",
                        contentType: "article",
                        image: n(896221).A.images.home.learn["10AiPromptsToHelpMarketersWriteBetterCopyFasterPng"],
                        durationMinutes: 7
                    },
                    marketingCampaigns: {
                        key: "marketingCampaigns",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.marketingCampaigns.title",
                            defaultMessage: "Using Notion for marketing campaigns"
                        }),
                        href: "/guides/using-notion-for-marketing-campaigns",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.usingNotionForMarketingCampaignsPng,
                        durationMinutes: 4
                    },
                    designersUltimateGuide: {
                        key: "designersUltimateGuide",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.designersUltimateGuide.title",
                            defaultMessage: "A designer’s ultimate guide to using Notion"
                        }),
                        href: "/guides/a-designers-ultimate-guide-to-using-notion",
                        contentType: "video",
                        image: n(896221).A.images.home.learn.aDesignersUltimateGuideToUsingNotionPng,
                        durationMinutes: 4
                    },
                    timedTrial: {
                        key: "timedTrial",
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "tipsHomePanel.timedTrial.title",
                            defaultMessage: "Learn about your free trial"
                        }),
                        href: "/paid-plan-trials",
                        contentType: "article",
                        image: n(896221).A.images.home.learn.timedTrialGiftboxPng,
                        durationMinutes: 1
                    }
                },
                r = ["block", "page", "subpage", "workspaceBestPractices", "onboardingTeam", "sharingAndPerms", "importingData", "template", "docsAndMeetings", "wikiAndFaqs", "projects", "db", "createDb", "collaborate"],
                l = ["notion", "block", "page", "subpage", "db", "createDb", "template", "share", "collaborate"],
                u = ["block", "page", "subpage", "customize", "db", "createDb", "template", "share"],
                d = ["customize", "blockTypes", "sharingSettings", "usingAI", "projectsAndTasks", "keyboardShortcuts", "ecosystem", "qnaWork", "tablesVsDatabases", "roadmaps"],
                g = ["templatesGuide", "customize", "projectsAndTasks", "usingAI", "keyboardShortcuts", "qnaPersonal", "blockTypes", "tablesVsDatabases", "switch"]
        },
        419144: (e, t, n) => {
            n.d(t, {
                Az: () => c,
                Lt: () => r,
                Ol: () => o,
                U7: () => s,
                mh: () => i
            }), n(944114), n(898992), n(354520);
            var a = () => n(722371);
            let s = ["creative", "internal_communication", "eng", "product_design", "project_or_program_management", "product", "marketing", "sales_or_success", "support", "finance", "hr", "it_admin", "knowledge_management", "operations", "educator", "student"],
                i = ["life", "work", "school"],
                o = ["singleplayer", "multiplayer"];

            function r(e) {
                var t, n, s;
                let i, {
                    environment: o,
                    userPersonaValue: r,
                    userUseCases: c,
                    spaceSurveyData: p
                } = e;
                for (let e of [(t = r) ? d[t] : void 0, ... function({
                        userUseCases: e
                    }) {
                        let t = [];
                        for (let n of e ? ? []) switch (n) {
                            case "personal_notes_to_dos":
                                t.push({
                                    type: "space_intent",
                                    persona: "life"
                                });
                                continue;
                            case "team_docs_knowledge_base":
                            case "team_project_management":
                                t.push({
                                    type: "space_intent",
                                    persona: "work"
                                });
                                continue;
                            case "ai":
                            case "docs":
                            case "wikis":
                            case "notes":
                            case "project":
                            case "goals":
                            case "other":
                                continue;
                            default:
                                (0, a().HB)(n)
                        }
                        return t
                    }({
                        userUseCases: c
                    }), ... function({
                        spaceSurveyData: e
                    }) {
                        let t = [],
                            n = function({
                                spaceSurveyData: e
                            }) {
                                var t;
                                let n = null == e || null == (t = e.intent) ? void 0 : t.value;
                                if (n) switch (n) {
                                    case "personal":
                                    case "life":
                                        return "life";
                                    case "team":
                                    case "work":
                                        return "work";
                                    case "school":
                                        return "school";
                                    default:
                                        (0, a().HB)(n)
                                }
                            }({
                                spaceSurveyData: e
                            });
                        if (n && t.push({
                                type: "space_intent",
                                persona: n
                            }), null != e && e.use_cases)
                            for (let n of e.use_cases.value) switch (n) {
                                case "personal_notes_to_dos":
                                    t.push({
                                        type: "space_intent",
                                        persona: "life"
                                    });
                                    continue;
                                case "team_docs_knowledge_base":
                                case "team_project_management":
                                    t.push({
                                        type: "space_intent",
                                        persona: "work"
                                    });
                                    continue;
                                case "ai":
                                case "docs":
                                case "wikis":
                                case "notes":
                                case "project":
                                case "goals":
                                case "other":
                                    continue;
                                default:
                                    (0, a().HB)(n)
                            }
                        return t
                    }({
                        spaceSurveyData: p
                    }), function(e) {
                        let {
                            workspaceType: t
                        } = e;
                        return t ? g({
                            workspaceType: t
                        }) ? {
                            type: "space_type",
                            persona: "multiplayer"
                        } : {
                            type: "space_type",
                            persona: "singleplayer"
                        } : void 0
                    }({
                        workspaceType: u({
                            environment: o
                        })
                    })].filter(a().O9)) {
                    if (!i) {
                        i = e;
                        continue
                    }
                    n = i, s = e, i = l[n.type] >= l[s.type] ? n : s
                }
                return void 0 === i ? {
                    type: "space_type",
                    persona: "singleplayer"
                } : i
            }
            let l = {
                space_type: 0,
                space_intent: 1,
                function: 2
            };

            function u(e) {
                let {
                    environment: t
                } = e, a = (0, n(328765).S)();
                if (!a) return "singleplayer";
                let s = (0, n(616579).j)({
                    environment: t,
                    spaceId: a.id
                });
                return !s || s <= 1 ? "singleplayer" : s < 10 ? "multiplayer_small" : "multiplayer"
            }
            let d = {
                student: {
                    type: "function",
                    persona: "student"
                },
                educator: {
                    type: "function",
                    persona: "educator"
                },
                creative: {
                    type: "function",
                    persona: "creative"
                },
                finance: {
                    type: "function",
                    persona: "finance"
                },
                internal_communication: {
                    type: "function",
                    persona: "internal_communication"
                },
                project_or_program_management: {
                    type: "function",
                    persona: "project_or_program_management"
                },
                it_admin: {
                    type: "function",
                    persona: "it_admin"
                },
                knowledge_management: {
                    type: "function",
                    persona: "knowledge_management"
                },
                marketing: {
                    type: "function",
                    persona: "marketing"
                },
                eng: {
                    type: "function",
                    persona: "eng"
                },
                hr: {
                    type: "function",
                    persona: "hr"
                },
                product: {
                    type: "function",
                    persona: "product"
                },
                product_design: {
                    type: "function",
                    persona: "product_design"
                },
                sales: {
                    type: "function",
                    persona: "sales_or_success"
                },
                support: {
                    type: "function",
                    persona: "support"
                },
                operations: {
                    type: "function",
                    persona: "operations"
                },
                founder_or_ceo: void 0,
                other: void 0,
                unfilled: void 0
            };

            function g({
                workspaceType: e
            }) {
                switch (e) {
                    case "multiplayer":
                    case "multiplayer_small":
                        return !0;
                    case "singleplayer":
                        return !1;
                    default:
                        (0, a().HB)(e)
                }
            }

            function c(e) {
                let {
                    environment: t
                } = e;
                return g({
                    workspaceType: u({
                        environment: t
                    })
                })
            }
        },
        996903: (e, t, n) => {
            n.d(t, {
                i: () => a
            });

            function a(e) {
                let t = e.getSettings(),
                    a = null == t ? void 0 : t.signup_time;
                return a ? (0, n(362008).Mn)(a) : null
            }
        }
    }
]);