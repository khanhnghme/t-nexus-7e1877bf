"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [33503, 47302, 47414], {
        56281: (e, t, a) => {
            function s(e, t) {
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
                ex: () => s
            }), a(16280), a(944114), a(898992), a(672577);
            let o = ["kr_card", "kakao_pay", "naver_pay"];

            function r(e) {
                let {
                    currency: t
                } = e, a = ["card", "link"];
                return "EUR" === t && a.push("sepa_debit"), "KRW" === t && a.push(...o), a
            }
        },
        327785: (e, t, a) => {
            a.d(t, {
                D: () => s
            }), a(944114);

            function s() {
                let e = (0, a(972740).L)(),
                    t = (0, a(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    s = (0, a(192159).TB)(t),
                    i = (0, a(682985).K8)(() => s && (0, a(717274).tL)({
                        disableExposureLogging: !0
                    }), [s]),
                    {
                        progress: o
                    } = (0, a(555583).n)({
                        useRedesigned: i
                    }),
                    r = (0, a(262166).HO)((0, a(192159).AI)(t));
                return (0, a(682985).K8)(() => {
                    if (!(0, a(717274).sw)()) return [];
                    let e = [];
                    return r && !s ? e.push("dog") : r && i && o >= 1 && e.push("dog"), e
                }, [r, s, i, o])
            }
        },
        411106: (e, t, a) => {
            a.d(t, {
                L: () => r,
                p: () => o
            });
            let s = ["aiMeetingNotes", "meetAgent", "academy", "consultants"],
                i = ["aiMeetingNotes", "meetAgent", "database", "academy"],
                o = ["aiMeetingNotes", "mailAndCalendar", "aiSearch", "meetAgent"];

            function r(e, t) {
                return e ? "en-US" === t ? s : ["aiMeetingNotes", "meetAgent", "academy", "connectedApps"] : i
            }
        },
        463226: (e, t, a) => {
            a.d(t, {
                DV: () => p,
                EQ: () => n,
                Mu: () => l,
                Nr: () => d,
                cP: () => i,
                m0: () => r,
                m2: () => s,
                s8: () => o
            }), a(898992), a(354520);
            let s = {
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

            function i(e) {
                let {
                    store: t,
                    from: s
                } = e;
                if (t.update(e => ({ ...e,
                        isOpen: !0,
                        openCount: e.openCount + 1,
                        from: s || "unknown"
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
                            let s = t.getSettings() || {},
                                i = { ...s,
                                    agent_personalization_settings: { ...s.agent_personalization_settings || {},
                                        has_already_seen_personalization_settings_modal: !0
                                    }
                                };
                            a(380762).AG(t, e, i)
                        }
                    })
                }
            }

            function o(e) {
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

            function n(e) {
                let {
                    store: t
                } = e;
                return t.state.from || "unknown"
            }

            function l(e) {
                var t;
                let {
                    environment: s,
                    agentName: i,
                    customizationItems: o,
                    newPageIdToAdd: r,
                    contextPageId: n
                } = e, l = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!l) return;
                let d = null == (t = l.getSettings()) ? void 0 : t.agent_personalization_settings,
                    p = (null == d ? void 0 : d.recently_used_pages) || [];
                r && ((p = p.filter(e => e.page_id !== r)).unshift({
                    page_id: r,
                    used_at: Date.now()
                }), p = p.slice(0, 10));
                let u = {
                    name: i,
                    customization_items: o,
                    context_page_id: n,
                    recently_used_pages: p.length > 0 ? p : void 0,
                    has_already_seen_personalization_settings_modal: (null == d ? void 0 : d.has_already_seen_personalization_settings_modal) || !0
                };
                (0, a(795676).A)(u, d) || (0, a(377796).createAndCommit)({
                    environment: s,
                    cellTarget: {
                        spaceWithId: l.getSpaceId()
                    },
                    userAction: "AgentPersonalizationSettings.save",
                    canUndo: !0,
                    perform: e => {
                        let t = l.getSettings() || {},
                            i = { ...t,
                                agent_personalization_settings: { ...t.agent_personalization_settings || {},
                                    ...u
                                }
                            };
                        a(380762).AG(l, e, i);
                        let o = null == d ? void 0 : d.context_page_id;
                        if (void 0 !== o && o !== n) {
                            let t = new(a(970831)).B(s, {
                                table: a(832375).evP,
                                id: o
                            }).getPromptStore();
                            null != t && t.isDefined() && (0, a(173157).z)({
                                store: t,
                                data: {
                                    alive: !1
                                },
                                transaction: e
                            })
                        }
                        void 0 !== n && (t => {
                            let i = new(a(970831)).B(s, {
                                    table: a(832375).evP,
                                    id: t
                                }),
                                o = i.getSpaceId();
                            if (!o) return;
                            let r = i.getPromptStore();
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
                                    environment: s,
                                    table: a(832375).dod,
                                    args: {
                                        id: (0, a(986339).yW)(i.id),
                                        space_id: o,
                                        parent_id: i.id,
                                        parent_table: a(832375).evP,
                                        prompt_type: "instruction"
                                    },
                                    inMemoryRecordCache: i.inMemoryRecordCache,
                                    transaction: e
                                })
                            }
                        })(n)
                    }
                })
            }

            function d() {
                let e = (0, a(327785).D)();
                return (0, a(682985).K8)(() => {
                    let t = a(218744).default.getConfigKey("agent_seasonal_accessories", "batch"),
                        i = a(218744).default.getConfigKey("agent_seasonal_accessories", "batch_expiration_time"),
                        o = i && new Date(i) < new Date;
                    return a(485890).sy.filter(a => {
                        let i = s[a];
                        return "permanent" === i || ("unlockable" === i ? e.includes(a) : i === t && !o)
                    })
                }, [e])
            }

            function p(e) {
                let t = d();
                return (0, a(682985).K8)(() => {
                    var s;
                    let i = null == e ? void 0 : e.getSettings();
                    if (!i) return;
                    let o = i.agent_personalization_settings;
                    if (null != o && null != (s = o.customization_items) && s[0]) {
                        let e = o.customization_items[0];
                        if (t.includes(e)) return e
                    }
                    if (null == o ? void 0 : o.has_already_seen_personalization_settings_modal) return;
                    let r = a(218744).default.checkGate({
                            gateName: "adoption_enable_agent_personalization_phase_one",
                            disableExposureLogging: !0
                        }),
                        n = a(218744).default.checkGate({
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
                            } = e, s = u[t];
                            if (!s) return;
                            let i = a(218744).default.getEligibleGroup({
                                experimentId: s
                            });
                            if (i && "control" !== i && i && a(485890).sy.includes(i)) return i
                        }({
                            variant: e
                        });
                        if (t) return t
                    } else if (n) {
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
            let u = {
                control: void 0,
                group_one: "adoption_agent_personalization_phase_one_group_one",
                group_two: "adoption_agent_personalization_phase_one_group_two",
                group_three: "adoption_agent_personalization_phase_one_group_three",
                group_four: "adoption_agent_personalization_phase_one_group_four"
            }
        },
        476743: (e, t, a) => {
            a.d(t, {
                a: () => s
            });

            function s() {
                return (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore)
            }
        },
        555583: (e, t, a) => {
            a.d(t, {
                n: () => i
            }), a(898992), a(354520);
            var s = a(296540);

            function i({
                useRedesigned: e
            } = {
                useRedesigned: !1
            }) {
                let t = (0, a(109939).tz)(),
                    o = (0, a(599412).H)(t),
                    r = (0, a(972740).L)(),
                    n = (0, a(682985).K8)(() => (null == r ? void 0 : r.canAdmin()) ? ? !1, [r]),
                    l = (0, a(871086).w)(),
                    d = (0, s.useMemo)(() => e ? a(411106).p : (0, a(411106).L)(n, o), [n, o, e]),
                    p = (0, s.useMemo)(() => Object.entries(l ? ? {}).filter(([e]) => (0, a(722371).Xk)(d, e)).length, [l, d]),
                    u = d.length,
                    c = u > 0 ? p / u : 0,
                    m = (0, s.useMemo)(() => new Intl.NumberFormat(o, {
                        style: "percent"
                    }).format(c), [c, o]);
                return {
                    progress: c,
                    progressDisplay: m,
                    completedCount: p,
                    totalCount: u,
                    completedItems: l ? ? {}
                }
            }
        },
        647414: (e, t, a) => {
            a.d(t, {
                DZ: () => s,
                l4: () => i
            });
            let s = (0, a(109939).YK)({
                notionCalendar: {
                    defaultMessage: "Notion Calendar",
                    id: "templateHelpers.connectedApps.notionCalendar"
                },
                gettingStarted: {
                    defaultMessage: "Getting started",
                    id: "templateHelpers.personas.gettingStarted"
                },
                life: {
                    defaultMessage: "Life",
                    id: "templateGallery.sidebar.life"
                },
                personal: {
                    defaultMessage: "Personal",
                    id: "templateHelpers.personas.personal"
                },
                designer: {
                    defaultMessage: "Design",
                    id: "templateHelpers.personas.design"
                },
                engineering: {
                    defaultMessage: "Engineering",
                    id: "templateHelpers.personas.engineering"
                },
                marketing: {
                    defaultMessage: "Marketing",
                    id: "templateHelpers.personas.marketing"
                },
                media: {
                    defaultMessage: "Media",
                    id: "templateHelpers.personas.media"
                },
                it: {
                    defaultMessage: "IT",
                    id: "templateHelpers.personas.it"
                },
                entrepreneur: {
                    defaultMessage: "Entrepreneur",
                    id: "templateHelpers.personas.entrepreneur"
                },
                freelancer: {
                    defaultMessage: "Freelancer",
                    id: "templateHelpers.personas.freelancer"
                },
                educator: {
                    defaultMessage: "Educator",
                    id: "templateHelpers.personas.educator"
                },
                student: {
                    defaultMessage: "Student",
                    id: "templateHelpers.personas.student"
                },
                other: {
                    defaultMessage: "Other",
                    id: "templateHelpers.personas.otherOptionLabel"
                },
                hr: {
                    defaultMessage: "Human resources",
                    id: "templateHelpers.personas.humanResources"
                },
                truncated_hr: {
                    defaultMessage: "HR",
                    id: "templateHelpers.personas.truncated.humanResources"
                },
                productManagement: {
                    defaultMessage: "Product management",
                    id: "templateHelpers.personas.productManagement"
                },
                productManagementV2: {
                    defaultMessage: "Product",
                    id: "templateHelpers.personas.productManagementV2"
                },
                support: {
                    defaultMessage: "Support",
                    id: "templateHelpers.personas.support"
                },
                education: {
                    defaultMessage: "Education",
                    id: "templateHelpers.personas.education"
                },
                sales: {
                    defaultMessage: "Sales",
                    id: "templateHelpers.personas.sales"
                },
                getStartedPage: {
                    defaultMessage: "Getting started",
                    id: "templateHelpers.templates.getStarted"
                },
                getStartedPageEvernote: {
                    defaultMessage: "Getting started from Evernote",
                    id: "templateHelpers.templates.getStartedOnEvernote"
                },
                getStartedPageMobile: {
                    defaultMessage: "Getting started on mobile",
                    id: "templateHelpers.templates.getStartedOnMobile"
                },
                readingList: {
                    defaultMessage: "Reading List",
                    id: "templateHelpers.templates.readingList"
                },
                taskList: {
                    defaultMessage: "Task List",
                    id: "templateHelpers.templates.taskList"
                },
                todoList: {
                    defaultMessage: "To-do List",
                    id: "templateHelpers.templates.todo"
                },
                journal: {
                    defaultMessage: "Journal",
                    id: "templateHelpers.templates.journal"
                },
                travelPlanner: {
                    defaultMessage: "Travel Planner",
                    id: "templateHelpers.templates.travelPlanner"
                },
                quickNote: {
                    defaultMessage: "Quick Note",
                    id: "templateHelpers.templates.quickNote"
                },
                blogPost: {
                    defaultMessage: "Blog Post",
                    id: "templateHelpers.templates.blogPost"
                },
                personalHome: {
                    defaultMessage: "Personal Home",
                    id: "templateHelpers.templates.personalHome"
                },
                userResearch: {
                    defaultMessage: "User Research Database",
                    id: "templateHelpers.templates.userResearchDatabase"
                },
                userResearchDescription: {
                    defaultMessage: "Use this template to schedule and track the status of your user research.",
                    id: "templateHelpers.templates.userResearchDatabase.description"
                },
                designSystem: {
                    defaultMessage: "Design System",
                    id: "templateHelpers.templates.designSystem"
                },
                designSystemDescription: {
                    defaultMessage: "A design system is a great way to keep everyone aligned. Use this template to document design patterns, assets, and brand, and make assets downloadable for everyone on your team.",
                    id: "templateHelpers.templates.designSystem.description"
                },
                engineeringWiki: {
                    defaultMessage: "Engineering Wiki",
                    id: "templateHelpers.templates.engineeringWiki"
                },
                engineeringWikiDescription: {
                    defaultMessage: "Use this template to give engineering teams a single source of truth for processes, documentation, and projects, build good programming habits, and keep everyone aligned.",
                    id: "templateHelpers.templates.engineeringWiki.description"
                },
                engineeringMeetingNotes: {
                    defaultMessage: "Meeting Notes",
                    id: "templateHelpers.templates.meetingNotes"
                },
                brandAssets: {
                    defaultMessage: "Brand Assets",
                    id: "templateHelpers.templates.brandAssets"
                },
                brandAssetsDescription: {
                    defaultMessage: "This template makes it easy to keep track of brand assets like logos, images, and fonts by tagging them so they’re easily sortable by file type or application.",
                    id: "templateHelpers.templates.brandAssets.description"
                },
                marketingWiki: {
                    defaultMessage: "Marketing Wiki",
                    id: "templateHelpers.templates.marketingWiki"
                },
                mediaList: {
                    defaultMessage: "Media List",
                    id: "templateHelpers.templates.mediaList"
                },
                mediaListDescription: {
                    defaultMessage: "Use this template to follow news coverage of your company and the people reporting it. Subpages help you keep track of press details and more.",
                    id: "templateHelpers.templates.mediaList.description"
                },
                contentCalendar: {
                    defaultMessage: "Content Calendar",
                    id: "templateHelpers.templates.contentCalendar"
                },
                contentCalendarDescription: {
                    defaultMessage: "Use this template to schedule and track all the content you’re putting out, from blog posts to podcasts to tweets.",
                    id: "templateHelpers.templates.contentCalendar.description"
                },
                moodBoard: {
                    defaultMessage: "Mood Board",
                    id: "templateHelpers.templates.moodBoard"
                },
                moodBoardDescription: {
                    defaultMessage: "Ideal template for assembling mood or inspiration boards for events, products, brand campaigns, and more.",
                    id: "templateHelpers.templates.moodBoard.description"
                },
                jobBoard: {
                    defaultMessage: "Job Board",
                    id: "templateHelpers.templates.jobBoard"
                },
                jobBoardDescription: {
                    defaultMessage: "Easily list and edit your company’s openings with this jobs templates that lets you make real-time changes to a lightweight, public-facing job site. ",
                    id: "templateHelpers.templates.jobBoard.description"
                },
                newHireOnboarding: {
                    defaultMessage: "New Hire Onboarding",
                    id: "templateHelpers.templates.newHireOnboarding"
                },
                newHireOnboardingDescription: {
                    defaultMessage: "Onboarding checklists help new hires get settled at your company. You can sort by status, team, and start date, and click into any individual card to review onboarding tasks and notes for that person.",
                    id: "templateHelpers.templates.newHireOnboarding.description"
                },
                applicantTracker: {
                    defaultMessage: "Applicant Tracker",
                    id: "templateHelpers.templates.applicantTracker"
                },
                applicantTrackerDescription: {
                    defaultMessage: "Manage candidate progress across the hiring cycle with this template that lets you easily view each candidate’s information, notes, documents, offers, next steps, and more.",
                    id: "templateHelpers.templates.applicantTracker.description"
                },
                companyHome: {
                    defaultMessage: "Company Home",
                    id: "templateHelpers.templates.companyHome"
                },
                companyHomeDescription: {
                    defaultMessage: "Every company needs a place where important info is easy to find. This template gathers everything your company needs in order to run smoothly, from mission and values to the employee directory. ",
                    id: "templateHelpers.templates.companyHome.description"
                },
                productWiki: {
                    defaultMessage: "Product Wiki",
                    id: "templateHelpers.templates.productWiki"
                },
                productWikiDescription: {
                    defaultMessage: "Organize all your product-related documentation with this template, which unifies guides and processes in one place with easy-to-navigate sections.",
                    id: "templateHelpers.templates.productWiki.description"
                },
                salesCRM: {
                    defaultMessage: "Sales CRM",
                    id: "templateHelpers.templates.salesCRM"
                },
                salesCRMDescription: {
                    defaultMessage: "Your sales funnel doesn’t have to feel like heavy SaaS software. This template offers you a clean canvas to define only the fields you need to track leads.",
                    id: "templateHelpers.templates.salesCRM.description"
                },
                salesWiki: {
                    defaultMessage: "Sales Wiki",
                    id: "templateHelpers.templates.salesWiki"
                },
                salesWikiDescription: {
                    defaultMessage: "With this template you can keep all your company’s sales documentation and projects in one place so crucial info is easy for anyone across the team or organization to find at a moment’s notice. ",
                    id: "templateHelpers.templates.salesWiki.description"
                },
                competitiveAnalysis: {
                    defaultMessage: "Competitive Analysis",
                    id: "templateHelpers.templates.competitiveAnalysis"
                },
                salesAssets: {
                    defaultMessage: "Sales Assets",
                    id: "templateHelpers.templates.salesAssets"
                },
                salesAssetsDescription: {
                    defaultMessage: "Use this template to keep your sales assets organized so you always use the proper demo, white paper, video, etc. for every meeting. You can upload any type of file to this page for instant access and version control.",
                    id: "templateHelpers.templates.salesAssets.description"
                },
                productFAQs: {
                    defaultMessage: "Product FAQs",
                    id: "templateHelpers.templates.productFAQs"
                },
                productFAQsDescription: {
                    defaultMessage: "Keep responses to your customers’ common support questions in one place for everyone to see. Every row of this template is its own Notion page, to which you can add any content you want.",
                    id: "templateHelpers.templates.productFAQs.description"
                },
                helpCenter: {
                    defaultMessage: "Help Center",
                    id: "templateHelpers.templates.helpCenter"
                },
                helpCenterDescription: {
                    defaultMessage: "This template lets you build your own help center, with columns, headings, and sub-pages. You can easily share this page with users and quickly add new support pages as needed.",
                    id: "templateHelpers.templates.helpCenter.description"
                },
                classNotes: {
                    defaultMessage: "Class Notes",
                    id: "templateHelpers.templates.classNotes"
                },
                jobApplications: {
                    defaultMessage: "Job Applications",
                    id: "templateHelpers.templates.jobApplications"
                },
                gradeCalculator: {
                    defaultMessage: "Grade Calculator",
                    id: "templateHelpers.templates.gradeCalculator"
                },
                clubHomepage: {
                    defaultMessage: "Club Homepage",
                    id: "templateHelpers.templates.clubHomepage"
                },
                cornellNotesSystem: {
                    defaultMessage: "Cornell Notes System",
                    id: "templateHelpers.templates.cornellNotesSystem"
                },
                personalCRM: {
                    defaultMessage: "Personal CRM",
                    id: "templateHelpers.templates.personalCRM"
                },
                simpleBudget: {
                    defaultMessage: "Simple Budget",
                    id: "templateHelpers.templates.simpleBudget"
                },
                syllabus: {
                    defaultMessage: "Syllabus",
                    id: "templateHelpers.templates.syllabus"
                },
                classroomHome: {
                    defaultMessage: "Classroom Home",
                    id: "templateHelpers.templates.classroomHome"
                },
                lessonPlans: {
                    defaultMessage: "Lesson Plans",
                    id: "templateHelpers.templates.lessonPlans"
                },
                courseSchedule: {
                    defaultMessage: "Course Schedule",
                    id: "templateHelpers.templates.courseSchedule"
                },
                groupProjects: {
                    defaultMessage: "Group Projects",
                    id: "templateHelpers.templates.groupProjects"
                },
                classDirectory: {
                    defaultMessage: "Class Directory",
                    id: "templateHelpers.templates.classDirectory"
                },
                lifeWiki: {
                    defaultMessage: "Life Wiki",
                    id: "templateHelpers.templates.lifeWiki"
                },
                habitTracker: {
                    defaultMessage: "Habit Tracker",
                    id: "templateHelpers.templates.habitTracker"
                },
                hobbies: {
                    defaultMessage: "Hobbies",
                    id: "templateHelpers.templates.hobbies"
                },
                resume: {
                    defaultMessage: "Resume",
                    id: "templateHelpers.templates.resume"
                },
                resumeDescription: {
                    defaultMessage: "Build a beautiful, functional resume within your Notion workspace, make it publicly accessible and send over the link with your job applications. You can keep improving the resume even after you send it out.",
                    id: "templateHelpers.templates.resume.description"
                },
                teamsGettingStarted: {
                    defaultMessage: "Teams Getting Started",
                    id: "templateHelpers.templates.teamsGettingStarted"
                },
                teamsHomepage: {
                    defaultMessage: "Teamspaces Home",
                    id: "templateHelpers.templates.teamsHomepage"
                },
                wiki: {
                    defaultMessage: "Team Wiki",
                    id: "templateHelpers.templates.wiki"
                },
                notes: {
                    defaultMessage: "Notes & docs",
                    id: "templateHelpers.templates.notes"
                },
                projectManagement: {
                    defaultMessage: "Project & tasks",
                    id: "templateHelpers.templates.projectManagement"
                },
                suggested: {
                    defaultMessage: "Suggested templates",
                    id: "templateHelpers.personas.suggestedTemplates"
                },
                suggestedCategory: {
                    defaultMessage: "Suggested",
                    id: "templateGallery.sidebar.suggested"
                },
                teamHome: {
                    defaultMessage: "Team Home",
                    id: "templateHelpers.useCase.teamHome"
                },
                teamTasks: {
                    defaultMessage: "Team Tasks",
                    id: "templateHelpers.useCase.teamTasks"
                },
                teamMeetingNotes: {
                    defaultMessage: "Meeting Notes",
                    id: "templateHelpers.useCase.teamMeetingNotes"
                },
                teamDocs: {
                    defaultMessage: "Docs",
                    id: "templateHelpers.useCase.teamDocs"
                },
                peopleDirectory: {
                    defaultMessage: "People Directory",
                    id: "templateHelpers.useCase.peopleDirectory"
                },
                peopleDirectoryDescription: {
                    defaultMessage: "Help your team keep track of who’s who with this simple template. Each card can be updated to store an employee’s bio, past achievements, goals, and more. ",
                    id: "templateHelpers.useCase.peopleDirectory.description"
                },
                employeeBenefits: {
                    defaultMessage: "Employee Benefits",
                    id: "templateHelpers.useCase.employeeBenefits"
                },
                employeeBenefitsDescription: {
                    defaultMessage: "This template is a perfect place to describe your company’s benefits and link out to all necessary info so your employees feel appreciated and informed.",
                    id: "templateHelpers.useCase.employeeBenefits.description"
                },
                recruitingTracker: {
                    defaultMessage: "Recruiting Tracker",
                    id: "templateHelpers.useCase.recruitingTracker"
                },
                recruitingTrackerDescription: {
                    defaultMessage: "This template makes it easy for your company to keep up with your headcount, including job postings and relevant details like role, status, location, and more.",
                    id: "templateHelpers.useCase.recruitingTracker.description"
                },
                investorUpdate: {
                    defaultMessage: "Investor Update",
                    id: "templateHelpers.useCase.investorUpdate"
                },
                investorUpdateDescription: {
                    defaultMessage: "Instead of sending the usual disorganized email updates to your investors, use this template to offer them a more comprehensive and digestible look at your company’s progress.",
                    id: "templateHelpers.useCase.investorUpdate.description"
                },
                designSprint: {
                    defaultMessage: "Design Sprint",
                    id: "templateHelpers.useCase.designSprint"
                },
                designSprintDescription: {
                    defaultMessage: "This template is designed to help design teams continuously track and iterate on their projects, from creative sprints to finished projects based on user feedback.",
                    id: "templateHelpers.useCase.designSprint.description"
                },
                visionAndStrategy: {
                    defaultMessage: "Vision and strategy",
                    id: "templateHelpers.useCase.visionAndStrategy"
                },
                visionAndStrategyDescription: {
                    defaultMessage: "Use this template to put your organization’s guiding principles in one place so that they stay top of mind and easy for employees to reference.",
                    id: "templateHelpers.useCase.visionAndStrategy.description"
                },
                designPortfolio: {
                    defaultMessage: "Design Portfolio",
                    id: "templateHelpers.useCase.designPortfolio"
                },
                designPortfolioDescription: {
                    defaultMessage: "Use this template to showcase creative projects you’ve worked on and offer more context on their purpose and the development process you or your team followed.",
                    id: "templateHelpers.useCase.designPortfolio.description"
                },
                teamWiki: {
                    defaultMessage: "Team Wiki",
                    id: "templateHelpers.useCase.teamWiki"
                },
                defaultWiki: {
                    defaultMessage: "Wiki",
                    id: "templateHelpers.useCase.wiki"
                },
                teamWikiDescription: {
                    defaultMessage: "This template lets every team in your company create and manage a personalized homepage where they can organize processes, projects, and knowledge specific to their work.",
                    id: "templateHelpers.useCase.teamWiki.description"
                },
                teamGoals: {
                    defaultMessage: "Goals",
                    id: "templateHelpers.useCase.teamGoals"
                },
                campaignBrief: {
                    defaultMessage: "Campaign Brief",
                    id: "templateHelpers.useCase.campaignBrief"
                },
                campaignBriefDescription: {
                    defaultMessage: "Use this template to brief other team members on any given campaign’s goals, messaging, timeline, and more. You can also easily add any relevant supporting documents so everyone in the company stays well-informed. ",
                    id: "templateHelpers.useCase.campaignBrief.description"
                },
                presentation: {
                    defaultMessage: "Presentation",
                    id: "templateHelpers.useCase.presentation"
                },
                presentationDescription: {
                    defaultMessage: "Use this template to present new ideas and status updates to your team, organized in a way that’s easily updated and scannable. ",
                    id: "templateHelpers.useCase.presentation.description"
                },
                experimentResults: {
                    defaultMessage: "Experiment Results",
                    id: "templateHelpers.useCase.experimentResults"
                },
                experimentResultsDescription: {
                    defaultMessage: "Use this template to track your experiments along with their results. Anyone from any team can quickly add an experiment by using the database templates.",
                    id: "templateHelpers.useCase.experimentResults.description"
                },
                engineeringTechSpec: {
                    defaultMessage: "Engineering Tech Spec",
                    id: "templateHelpers.useCase.engineeringTechSpec"
                },
                engineeringTechSpecDescription: {
                    defaultMessage: "Use this template to organize a project kickoff and deliver the necessary context so team members are all up to speed and well-informed.",
                    id: "templateHelpers.useCase.engineeringTechSpec.description"
                },
                productSpec: {
                    defaultMessage: "Product Spec",
                    id: "templateHelpers.useCase.productSpec"
                },
                productSpecDescription: {
                    defaultMessage: "A product spec should contain all the info your team needs to build something new. Use this template as a source of truth to give context, set goals, see edge cases, and plan development steps.",
                    id: "templateHelpers.useCase.productSpec.description"
                },
                interviewGuide: {
                    defaultMessage: "Interview Guide",
                    id: "templateHelpers.useCase.interviewGuide"
                },
                interviewGuideDescription: {
                    defaultMessage: "Use this template to prepare your job candidates for their interviews and offer them helpful resources like videos, links, schedules and more.",
                    id: "templateHelpers.useCase.interviewGuide.description"
                },
                brainstorm: {
                    defaultMessage: "Remote Brainstorming",
                    id: "templateHelpers.useCase.brainstorm"
                },
                brainstormDescription: {
                    defaultMessage: "Boost your team’s remote collaboration with this remote brainstorming template. Designed to streamline brainstorming sessions and maximize creativity using Notion’s new button and AI blocks. This template helps team members to generate brainstorming questions and effortlessly contribute ideas with just a click of a button. Use this template for seamless idea generation and action planning.",
                    id: "templateHelpers.useCase.brainstorm.description"
                },
                oneOnOneNotes: {
                    defaultMessage: "1:1 Notes",
                    id: "templateHelpers.useCase.oneOnOneNotes"
                },
                oneOnOneNotesDescription: {
                    defaultMessage: "This template is perfect for keeping all of your 1:1 notes and docs in one place. You can add dates to each meeting and even check off action items as the week progresses.",
                    id: "templateHelpers.useCase.oneOnOneNotes.description"
                },
                productLaunchBrief: {
                    defaultMessage: "Product Launch Brief",
                    id: "templateHelpers.useCase.productLaunchBrief"
                },
                productLaunchBriefDescription: {
                    defaultMessage: "Use this template to plan and execute every part of your launch with your team, in one, centralized page.",
                    id: "templateHelpers.useCase.productLaunchBrief.description"
                },
                blogEditorialCalendar: {
                    defaultMessage: "Blog Editorial Calendar",
                    id: "templateHelpers.useCase.blogEditorialCalendar"
                },
                blogEditorialCalendarDescription: {
                    defaultMessage: "Use this template to plan and write all your marketing content with a database that lets you track each project’s status, audience, author, reviewer, publish date, and more. ",
                    id: "templateHelpers.useCase.blogEditorialCalendar.description"
                },
                socialMediaCalendar: {
                    defaultMessage: "Social Media Calendar",
                    id: "templateHelpers.useCase.socialMediaCalendar"
                },
                socialMediaCalendarDescription: {
                    defaultMessage: "Use this template to draft, plan, and write all of your social posts in one simple database. You can view your own posts in a calendar to get an idea of timelines, or switch to a board view to see platform usage.",
                    id: "templateHelpers.useCase.socialMediaCalendar.description"
                },
                simpleBudgetDescription: {
                    defaultMessage: "Track your spending to reach your financial goals. Set a monthly cap for your spending, then enter your expenses in the database below. View your expenses in different ways using different database views.",
                    id: "templateHelpers.useCase.simpleBudget.description"
                },
                readingListDescription: {
                    defaultMessage: "The modern day reading list includes more than just books. We’ve created a dashboard to help you track all of the articles, videos, podcasts, blog posts, Twitter threads, and — yes, books.",
                    id: "templateHelpers.useCase.readingList.description"
                },
                habitTrackerDescription: {
                    defaultMessage: "Keep yourself accountable by tracking your habits everyday. With Notion’s new button block, you can easily check off completed habits for the day with a single click. Whether you’re trying to drink more water, exercise regularly, or meditate every day, this template will help you build healthy habits with ease.",
                    id: "templateHelpers.useCase.habitTracker.description"
                },
                travelPlannerDescription: {
                    defaultMessage: "Travel planning can be a fragmented mess with different documents and information everywhere. With this template, you can pull all the essential details about your plans into one spot.",
                    id: "templateHelpers.useCase.travelPlanner.description"
                },
                jobApplicationsDescription: {
                    defaultMessage: "Keep track of the entire job application process all in one page. Easily add customized resumes, cover letters, and portfolio’s while keeping track of companies you’ve reached out to.",
                    id: "templateHelpers.useCase.jobApplication.description"
                },
                meetingNotes: {
                    defaultMessage: "Meeting Notes",
                    id: "templateHelpers.useCase.meetingNotes"
                },
                weeklyPlan: {
                    defaultMessage: "Weekly Plan",
                    id: "templateHelpers.useCase.weeklyPlan"
                },
                weeklyPlanDescription: {
                    defaultMessage: "Use this template to plan and organize all the work you need to accomplish over the next week. Visualize your most important to-do’s with an agenda that helps you prioritize.",
                    id: "templateHelpers.useCase.weeklyPlan.description"
                },
                weeklyTodo: {
                    defaultMessage: "Weekly To-do List",
                    id: "templateHelpers.useCase.weeklyTodo"
                },
                weeklyTodoDescription: {
                    defaultMessage: "Use this template to plan and organize all the work you need to accomplish over the next week. Visualize your most important to-do’s with an agenda that helps you prioritize.",
                    id: "templateHelpers.useCase.weeklyTodo.description"
                },
                journalDescription: {
                    defaultMessage: "Document your life - daily happenings, special occasions, and reflections on your goals. Categorize entries with tags and automatically capture the date.",
                    id: "templateHelpers.useCase.journal.description"
                },
                quickNoteDescription: {
                    defaultMessage: "This template gives you a sense of the many different types of content you can add while taking quick notes in any situation. It includes a to-do list, web bookmarks, sub-headings, and more!",
                    id: "templateHelpers.useCase.quickNote.description"
                },
                personalHomeDescription: {
                    defaultMessage: "Just like a wiki can help keep all the important information in a company somewhere central, a personal wiki can give you a helpful knowledge base for your life!",
                    id: "templateHelpers.useCase.personalHome.description"
                },
                lifeWikiDescription: {
                    defaultMessage: "Plan and keep track of your entire life with this comprehensive dashboard. Take charge of your growth with setting goals, tracking daily habits and maintaining a log of everything you’re reading.",
                    id: "templateHelpers.useCase.lifeWiki.description"
                },
                blogPostDescription: {
                    defaultMessage: "Use this template as a format for your blog posts. Format your writing and images in any format you like. Make your page live by enable the ‘Share to web’ feature.",
                    id: "templateHelpers.useCase.blogPost.description"
                },
                personalCRMDescription: {
                    defaultMessage: "Keep track of all the people you meet, what you know about them, when to reach out, and whether they’re a professional contact. Be the person who always follows up and knows the exact gift to give.",
                    id: "templateHelpers.useCase.personalCRM.description"
                },
                classNotesDescription: {
                    defaultMessage: "Keep all your notes from all your classes in one spot. This template makes it easy to capture all your notes and tag them by class, date, and topic.",
                    id: "templateHelpers.useCase.classNotes.description"
                },
                classDirectoryDescription: {
                    defaultMessage: "Put names to faces. Use this directory to track class participation, absences, and take any other notes that will be helpful when it comes time to calculate final grades or give feedback to students.",
                    id: "templateHelpers.useCase.classDirectory.description"
                },
                clubHomepageDescription: {
                    defaultMessage: "We know that school probably isn’t just about school for you. Notion is the perfect solution for managing information for clubs, organizations, and group projects.",
                    id: "templateHelpers.useCase.clubHomepage.description"
                },
                gradeCalculatorDescription: {
                    defaultMessage: "Strategize your quarter or semester by knowing how much every assignment, exam, and project is worth for your final grade. Use this template to stay on top of your grades and plan accordingly.",
                    id: "templateHelpers.useCase.gradeCalculator.description"
                },
                cornellNotesSystemDescription: {
                    defaultMessage: "In the 1940s, Cornell Professor Walter Pauk developed a new note-taking system to give college students a better way to organize, condense, and intake knowledge. Here’s the Notion version!",
                    id: "templateHelpers.useCase.cornellNotesSystem.description"
                },
                syllabusDescription: {
                    defaultMessage: "Create a digital syllabus that all your students can easily access on the web. Notion makes building a web page like this as easy as typing a document. Just replace this sample content with your own!",
                    id: "templateHelpers.useCase.syllabus.description"
                },
                classroomHomeDescription: {
                    defaultMessage: "Give your students one source of truth for class information, course materials, assignments, announcements, scheduling and more. Editing this web page is as easy as writing any document.",
                    id: "templateHelpers.useCase.classroomHome.description"
                },
                lessonPlansDescription: {
                    defaultMessage: "These lesson plans are based on Harvard Business School’s Elements of Effective Class Preparation. This makes it easy to track their status, keep all related notes in one spot, and make progress.",
                    id: "templateHelpers.useCase.lessonPlans.description"
                },
                classroomManagement: {
                    defaultMessage: "Classroom Management",
                    id: "templateHelpers.useCase.classroomManagement"
                },
                courseScheduleDescription: {
                    defaultMessage: "This course schedule provides a comprehensive list of weekly topics, readings, assignments, and exams. You can create your own categories and topics for whatever you’re teaching.",
                    id: "templateHelpers.useCase.courseSchedule.description"
                },
                studentPlanner: {
                    defaultMessage: "Student Planner",
                    id: "templateHelpers.useCase.studentPlanner"
                },
                studentPlannerDescription: {
                    id: "templateHelpers.useCase.studentPlanner.description",
                    defaultMessage: "From your courses to your calendar, personal projects to club meetings and event, use this template to stay organized, focused, and inspired to have a successful school year."
                },
                scratchpad: {
                    defaultMessage: "Scratchpad",
                    id: "templateHelpers.private.scratchpad"
                },
                aiUpgrade: {
                    defaultMessage: "Getting Started with Notion AI",
                    id: "templateHelpers.private.aiUpgrade"
                },
                websiteBuilder: {
                    defaultMessage: "Website Builder",
                    id: "templateHelpers.private.websiteBuilder"
                },
                research: {
                    defaultMessage: "Research",
                    id: "templateHelpers.private.research"
                },
                galaxyStudyNotebook: {
                    defaultMessage: "Galaxy Study Notebook",
                    id: "templateHelpers.samsung.galaxyStudyNotebook"
                },
                galaxyLifePlanner: {
                    defaultMessage: "Galaxy Life Planner",
                    id: "templateHelpers.samsung.galaxyLifePlanner"
                },
                galaxyCompanyHome: {
                    defaultMessage: "Galaxy Company Home",
                    id: "templateHelpers.samsung.galaxyCompanyHome"
                }
            });
            (0, a(109939).YK)({
                creative: {
                    id: "teamHelpers.creativeTeam.name",
                    defaultMessage: "Creative"
                },
                support: {
                    id: "teamHelpers.supportTeam.name",
                    defaultMessage: "Customer Service"
                },
                educator: {
                    id: "teamHelpers.educatorTeam.name",
                    defaultMessage: "Educator"
                },
                eng: {
                    id: "teamHelpers.engTeam.name",
                    defaultMessage: "Engineering"
                },
                finance: {
                    id: "teamHelpers.financeTeam.name",
                    defaultMessage: "Finance"
                },
                founder_or_ceo: {
                    id: "teamHelpers.founderCeoTeam.name",
                    defaultMessage: "Executive"
                },
                hr: {
                    id: "teamHelpers.hrTeam.name",
                    defaultMessage: "Human Resources"
                },
                internal_communication: {
                    id: "teamHelpers.internalCommunicationTeam.name",
                    defaultMessage: "Internal Communication"
                },
                it_admin: {
                    id: "teamHelpers.itAdminTeam.name",
                    defaultMessage: "IT Admin"
                },
                knowledge_management: {
                    id: "teamHelpers.knowledgeManagementTeam.name",
                    defaultMessage: "Knowledge Management"
                },
                marketing: {
                    id: "teamHelpers.marketingTeam.name",
                    defaultMessage: "Marketing"
                },
                operations: {
                    id: "teamHelpers.operationsTeam.name",
                    defaultMessage: "Operations"
                },
                product_design: {
                    id: "teamHelpers.productDesignTeam.name",
                    defaultMessage: "Product Design"
                },
                product: {
                    id: "teamHelpers.productTeam.name",
                    defaultMessage: "Product Management"
                },
                project_or_program_management: {
                    id: "teamHelpers.projectProgramMgmtTeam.name",
                    defaultMessage: "Project / Program Management"
                },
                sales: {
                    id: "teamHelpers.salesTeam.name",
                    defaultMessage: "Sales"
                },
                student: {
                    id: "teamHelpers.studentTeam.name",
                    defaultMessage: "Student"
                },
                other: {
                    id: "teamHelpers.otherTeam.name",
                    defaultMessage: "Your Team"
                }
            });
            let i = (0, a(109939).YK)({
                generalTeamLabel: {
                    defaultMessage: "General",
                    id: "teamHelpers.generalTeam.name"
                },
                personaTeamDescription: {
                    id: "teamHelpers.personaTeam.description",
                    defaultMessage: "A home for you and your team"
                },
                workspaceNameHq: {
                    defaultMessage: "{workspaceName} HQ",
                    id: "templateMessages.workspaceNameHQ"
                }
            })
        },
        771807: (e, t, a) => {
            a.d(t, {
                c: () => s
            });

            function s(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "subscription_upgrade_modal_stripe_error",
                        eventProperties: t
                    }
                })
            }
        },
        833503: (e, t, a) => {
            a.d(t, {
                s: () => h
            });
            var s = a(296540),
                i = () => a(722371),
                o = () => a(770808),
                r = a(474848);

            function n(e) {
                let {
                    children: t,
                    isSizeTransitionAnimated: i,
                    onSizeChanged: n
                } = e, l = (0, s.useMemo)(() => (0, o().Ve)(e.areaConstraint), [e.areaConstraint]), {
                    preferredSize: d,
                    ref: p
                } = (0, a(218381).e)(l), u = (0, s.useMemo)(() => (function(e) {
                    let {
                        areaConstraint: t,
                        preferredSize: s
                    } = e;
                    return {
                        width: (0, a(627179).qE)({
                            value: (null == s ? void 0 : s.width) ? ? 0,
                            min: t.width.min,
                            max: t.width.max
                        }),
                        height: (0, a(627179).qE)({
                            value: (null == s ? void 0 : s.height) ? ? 0,
                            min: t.height.min,
                            max: t.height.max
                        })
                    }
                })({
                    areaConstraint: l,
                    preferredSize: d
                }), [l, d]), c = function(e) {
                    let {
                        actualSize: t,
                        preferredSize: a,
                        areaConstraint: s
                    } = e, i = "allow" === s.width.scroll, o = "allow" === s.height.scroll, r = i && (null == a ? void 0 : a.width) !== void 0 && t.width < a.width, n = o && (null == a ? void 0 : a.width) !== void 0 && t.height < a.height;
                    return {
                        actualSize: t,
                        constrainedSize: {
                            minWidth: s.width.min,
                            maxWidth: i ? void 0 : s.width.max,
                            minHeight: s.height.min,
                            maxHeight: o ? void 0 : s.height.max
                        },
                        isWidthScrollbarVisible: r,
                        isHeightScrollbarVisible: n
                    }
                }({
                    actualSize: u,
                    preferredSize: d,
                    areaConstraint: l
                }), m = function(e) {
                    let {
                        actualSize: t,
                        areaConstraint: s,
                        isSizeTransitionAnimated: i
                    } = e, r = (0, a(11012).j)(100), {
                        prefersReducedMotion: n
                    } = (0, a(533992).Y0)(), l = (0, o().bv)(s);
                    return (0, a(960253).I)(() => {
                        let e = "allow" === s.width.scroll,
                            a = "allow" === s.height.scroll;
                        return {
                            wrapper: {
                                position: "relative"
                            },
                            content: {
                                height: null == t ? void 0 : t.height,
                                overflowX: e ? "auto" : "clip",
                                overflowY: a ? "auto" : "clip",
                                WebkitOverflowScrolling: "touch",
                                width: null == t ? void 0 : t.width,
                                transition: i && r && !n ? "0.25s ease width, 0.25s ease height" : void 0
                            },
                            measure: {
                                display: "flex",
                                flexDirection: "column",
                                height: l.height ? "fit-content" : "100%",
                                maxHeight: s.height.max,
                                maxWidth: s.width.max,
                                minHeight: s.height.min,
                                minWidth: s.width.min,
                                width: l.width ? "fit-content" : "100%"
                            }
                        }
                    }, [t, s, i, r, n, l])
                }({
                    actualSize: u,
                    areaConstraint: l,
                    isSizeTransitionAnimated: i
                });
                return (0, s.useEffect)(() => {
                    null == n || n(u, d)
                }, [u, n, d]), (0, r.jsx)(a(858803).w.Provider, {
                    value: c,
                    children: (0, r.jsx)("div", {
                        style: m.wrapper,
                        children: (0, r.jsx)("div", {
                            style: m.content,
                            children: (0, r.jsx)("div", {
                                ref: p,
                                className: "measure",
                                style: m.measure,
                                children: t
                            })
                        })
                    })
                })
            }
            a(898992), a(354520), a(581454);
            var l = () => a(381453);

            function d(e) {
                let t = 0,
                    a = Number.MAX_SAFE_INTEGER;
                for (let s of e) {
                    if (!s) continue;
                    let e = (0, o().Vo)(s),
                        i = (0, l().qE)(e.max, 0, Number.MAX_SAFE_INTEGER);
                    t = Math.max(t, (0, l().qE)(e.min, 0, i)), a = Math.min(a, i)
                }
                let s = function(e) {
                    let t;
                    for (let a of e) {
                        let e = null == a ? void 0 : a.scroll;
                        switch (e) {
                            case "disallow":
                                return "disallow";
                            case "allow":
                                t = "allow";
                                break;
                            case void 0:
                                break;
                            default:
                                (0, i().HB)(e)
                        }
                    }
                    return t
                }(e);
                return {
                    type: "range",
                    min: (0, l().qE)(t, 0, a),
                    max: a,
                    scroll: s
                }
            }

            function p(e) {
                let t = e.filter(Boolean);
                return {
                    width: d(t.map(e => null == e ? void 0 : e.width)),
                    height: d(t.map(e => null == e ? void 0 : e.height))
                }
            }

            function u(e) {
                let {
                    minimumOutsideSpacing: t
                } = e, i = (0, a(118872).lW)();
                return (0, s.useMemo)(() => {
                    let e = i.width - t.left - t.right,
                        a = i.height - t.top - t.bottom;
                    return (0, o().Ve)({
                        width: {
                            type: "max",
                            length: e
                        },
                        height: {
                            type: "max",
                            length: a
                        }
                    })
                }, [t.bottom, t.left, t.right, t.top, i.height, i.width])
            }

            function c(e) {
                let t, {
                        allowMenuList: o,
                        allowDismissByEscape: l = !0,
                        anchor: d = "center",
                        animateSizeTransition: c = !0,
                        ariaLabel: m,
                        ariaLabelledBy: g,
                        ariaDescribedBy: f,
                        keyboardAreaPriority: h,
                        children: y,
                        transition: b,
                        showCloseIcon: M,
                        borderRadius: k,
                        backgroundAppearance: H,
                        transitionAppearance: w
                    } = e,
                    [v, C] = (0, s.useState)(!1);
                (0, a(202146).exposeDebugValue)("screenshotMode", () => {
                    C(e => !e)
                });
                let S = function(e) {
                        let {
                            partial: t,
                            defaultLength: a = 0
                        } = e;
                        switch (null == t ? void 0 : t.type) {
                            case "sides":
                                return {
                                    type: "sides",
                                    left: t.left ? ? a,
                                    right: t.right ? ? a,
                                    top: t.top ? ? a,
                                    bottom: t.bottom ? ? a
                                };
                            case "axes":
                                return {
                                    type: "sides",
                                    left: t.horizontal ? ? a,
                                    right: t.horizontal ? ? a,
                                    top: t.vertical ? ? a,
                                    bottom: t.vertical ? ? a
                                };
                            case "all":
                                return {
                                    type: "sides",
                                    left: t.length ? ? a,
                                    right: t.length ? ? a,
                                    top: t.length ? ? a,
                                    bottom: t.length ? ? a
                                };
                            case void 0:
                                return {
                                    type: "sides",
                                    left: a,
                                    right: a,
                                    top: a,
                                    bottom: a
                                };
                            default:
                                (0, i().HB)(t)
                        }
                    }({
                        partial: e.minimumOutsideSpacing,
                        defaultLength: 40
                    }),
                    x = u({
                        minimumOutsideSpacing: S
                    });
                e.areaConstraint && (t = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "desktop"
                }) : e.areaConstraint);
                let _ = p([x, t]),
                    D = function(e) {
                        let {
                            screenshotMode: t,
                            anchor: s,
                            minimumOutsideSpacing: o,
                            borderRadius: r
                        } = e;
                        return (0, a(960253).I)(() => {
                            let e, n, l;
                            switch (s) {
                                case "top":
                                    e = "flex-start", n = o.top;
                                    break;
                                case "bottom":
                                    e = "flex-end", l = o.bottom;
                                    break;
                                case "center":
                                case void 0:
                                    e = "center";
                                    break;
                                default:
                                    (0, i().HB)(s)
                            }
                            return {
                                innerStyle: {
                                    borderRadius: r ? ? 12,
                                    display: "flex",
                                    overflow: "hidden",
                                    position: "relative"
                                },
                                outerStyle: {
                                    alignItems: e,
                                    paddingTop: n,
                                    paddingBottom: l
                                },
                                overlay: t ? {
                                    background: a(632079).Tj.background.primary,
                                    transition: "0.2s ease background"
                                } : {},
                                fullScreenOverlay: {
                                    background: a(632079).Tj.background.primary
                                }
                            }
                        }, [s, t, o.bottom, o.top, r])
                    }({
                        screenshotMode: v,
                        anchor: d,
                        minimumOutsideSpacing: S,
                        borderRadius: k
                    }),
                    T = (0, r.jsx)(a(790124).A, {
                        capture: !0,
                        keyboardAreaPriority: h,
                        allowEsc: !0,
                        allowMenuList: o,
                        children: () => (0, r.jsx)(n, {
                            areaConstraint: _,
                            isSizeTransitionAnimated: c,
                            children: (0, r.jsx)(a(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? y({
                                    displayMode: "desktop",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    });
                return (0, r.jsx)(a(19187).e.Provider, {
                    value: b.onDismiss,
                    children: (0, r.jsx)(a(556809).a, {
                        ariaDescribedBy: f,
                        ariaLabel: m,
                        ariaLabelledBy: g,
                        backgroundStyle: "full-screen" === w ? D.fullScreenOverlay : D.overlay,
                        innerStyle: D.innerStyle,
                        isWaxPaper: "waxPaper" === H,
                        isWash: "wash" === H,
                        transitionAppearance: w,
                        onClosed: b.onClosed,
                        onDismiss: l ? b.onDismiss : void 0,
                        open: b.isOpen,
                        preventHideChildrenWhileOpening: !0,
                        children: T,
                        showCloseIcon: M,
                        style: D.outerStyle,
                        className: e.className
                    })
                })
            }
            let m = {
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto"
                },
                g = {
                    height: "var(--full-viewport-height)"
                };

            function f(e) {
                var t, i, o;
                let l, d, {
                        allowDismissByEscape: c = !0,
                        animateSizeTransition: f = !0,
                        ariaLabel: h,
                        ariaLabelledBy: y,
                        ariaDescribedBy: b,
                        children: M,
                        transition: k
                    } = e,
                    H = u({
                        minimumOutsideSpacing: {
                            type: "sides",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        }
                    }),
                    {
                        isTablet: w
                    } = (0, a(533992).Y0)();
                null != (t = e.deprecatedCompatibilityOverrides) && t.tabletsUsePhoneDisplayMode && w && (l = {
                    width: {
                        type: "fixed",
                        length: a(182718).bJ
                    }
                }), e.areaConstraint && (d = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "phone"
                }) : e.areaConstraint);
                let v = p([H, l, {
                        width: {
                            type: "fill",
                            scroll: null == (i = d) || null == (i = i.width) ? void 0 : i.scroll
                        },
                        height: null == (o = d) ? void 0 : o.height
                    }]),
                    C = (0, s.useCallback)(() => (0, r.jsx)(a(790124).A, {
                        capture: !0,
                        allowEsc: !0,
                        children: () => (0, r.jsx)(n, {
                            areaConstraint: v,
                            isSizeTransitionAnimated: f,
                            children: (0, r.jsx)(a(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? M({
                                    displayMode: "phone",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    }), [v, f, M]);
                return (0, r.jsx)(a(19187).e.Provider, {
                    value: k.onDismiss,
                    children: (0, r.jsx)(a(182718).zD, {
                        ariaLabel: h,
                        ariaLabelledBy: y,
                        ariaDescribedBy: b,
                        open: k.isOpen,
                        popupType: a(423291).n.BottomSheet,
                        onDismiss: c ? k.onDismiss : void 0,
                        onClosed: k.onClosed,
                        slideUpWrapStyle: g,
                        style: m,
                        content: C,
                        className: e.className,
                        bottomSheetBackgroundColor: "elevated"
                    })
                })
            }

            function h(e) {
                let {
                    isOpen: t,
                    onClosed: s,
                    onDismiss: o,
                    deprecatedCompatibilityOverrides: n,
                    startClosingOnDismiss: l
                } = e, d = function(e) {
                    let {
                        isPhone: t
                    } = (0, a(533992).Y0)();
                    return null != e && e.tabletsUsePhoneDisplayMode ? a(986939).A.isMobile ? "phone" : "desktop" : t ? "phone" : "desktop"
                }(n), p = (0, a(245372).j)({
                    isOpen: t,
                    onClosed: s,
                    onDismiss: o,
                    startClosingOnDismiss: l
                });
                if (!p.shouldRender) return null;
                switch (d) {
                    case "phone":
                        return (0, r.jsx)(f, { ...e,
                            transition: p
                        });
                    case "desktop":
                        return (0, r.jsx)(c, { ...e,
                            transition: p
                        });
                    default:
                        (0, i().HB)(d)
                }
            }
        },
        834817: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            let s = /^\d{5}(-\d{4})?$/,
                i = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] ?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i;

            function o(e) {
                if (!e || !e.country) return !1;
                switch (e.country) {
                    case "US":
                        return s.test(e.zipCode);
                    case "CA":
                        return i.test(e.zipCode);
                    default:
                        return !0
                }
            }
        },
        871086: (e, t, a) => {
            a.d(t, {
                w: () => s
            });

            function s() {
                let e = (0, a(476743).a)();
                return (0, a(682985).K8)(() => {
                    var t;
                    return (null == e || null == (t = e.getSettings()) ? void 0 : t.business_trial_items_completed) ? ? {}
                }, [e])
            }
        },
        887949: (e, t, a) => {
            a.d(t, {
                u: () => o,
                v: () => i
            }), a(16280), a(296540);
            var s = a(474848);

            function i(e) {
                return (0, s.jsx)(s.Fragment, {
                    children: o(e)
                })
            }

            function o(e) {
                let {
                    cost: t,
                    intl: s
                } = e, i = e.trailingZeroDisplay ? ? "auto", o = e.currencySign ? ? "accounting", r = a(972457).W.fromValue(t), n = a(776601).r[r.currencyCode];
                if (!n) throw Error(`Unsupported currency code: ${r.currencyCode}`);
                let l = s.formatNumber(r.amount / Math.pow(10, n.minorUnitDigits), {
                    style: "currency",
                    currency: r.currencyCode,
                    currencyDisplay: "symbol",
                    currencySign: o,
                    numberingSystem: "latn"
                });
                return "stripIfInteger" === i && (l = l.replace(RegExp(`[.,]0{${n.minorUnitDigits}}(\\s+.*)?$`), "$1")), l
            }
        },
        889503: (e, t, a) => {
            a.r(t), a.d(t, {
                getStripe: () => o,
                getStripeAppearance: () => d,
                optionalPaymentMethodIdGivenPaymentData: () => u,
                stripeElementLocaleGivenNotionLocale: () => r,
                translateStripeError: () => l,
                useElementsOptions: () => n
            });
            var s = a(296540);
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

            function n(e) {
                let t = (0, a(960253).e)(),
                    i = (0, a(632079).O4)({
                        theme: t
                    }),
                    {
                        type: o
                    } = e,
                    n = "setup" === o || "subscription" === o ? e.currency : void 0,
                    l = "subscription" === o ? e.amount : void 0,
                    p = (0, a(682985).K8)(() => {
                        var e;
                        return (null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) || a(599412).q
                    }, []);
                return (0, s.useMemo)(() => {
                    let e = {
                            appearance: d(i, t),
                            locale: r(p)
                        },
                        s = {
                            paymentMethodTypes: (0, a(56281).VV)({
                                currency: n
                            })
                        };
                    switch (o) {
                        case "address":
                            return e;
                        case "setup":
                            return { ...e,
                                ...s,
                                currency: null == n ? void 0 : n.toLowerCase(),
                                mode: "setup",
                                paymentMethodCreation: "manual"
                            };
                        case "subscription":
                            return { ...e,
                                ...s,
                                amount: l,
                                currency: null == n ? void 0 : n.toLowerCase(),
                                mode: "subscription",
                                paymentMethodCreation: "manual",
                                setupFutureUsage: "off_session",
                                loader: "never"
                            };
                        default:
                            (0, a(722371).HB)(o)
                    }
                }, [i, t, p, n, o, l])
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
                            s = t.decline_code;
                        switch (s) {
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
                let s = p(e.text.primary),
                    i = p(e.text.secondary),
                    o = p(e.text.tertiary),
                    r = p(e.red.text.accentPrimary),
                    n = p(e.blue.text.accentPrimary);
                return {
                    labels: "above",
                    theme: "dark" === t ? "night" : "stripe",
                    variables: {
                        spacingGridRow: "12px",
                        spacingGridColumn: "12px",
                        spacingUnit: "4px",
                        spacingTab: "6px",
                        colorPrimary: s,
                        colorPrimaryText: s,
                        colorText: s,
                        colorTextSecondary: i,
                        colorTextPlaceholder: o,
                        colorIcon: s,
                        colorIconCheckmark: p(e.icon.inversePrimary),
                        colorDanger: r,
                        colorBackground: p(e.whiteButtonBackground),
                        colorIconTabHover: s,
                        colorIconTabSelected: n,
                        colorIconChevronDown: s,
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
                            color: s,
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
                            color: s,
                            boxShadow: "none",
                            outline: "none"
                        },
                        ".Tab--selected:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            color: s
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
                            color: s
                        },
                        ".Input--invalid": {
                            color: s,
                            boxShadow: e.inputRedFocusRing
                        },
                        ".Input:focus": {
                            color: s,
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
                            color: s
                        },
                        ".PickerItem:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground,
                            color: s,
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
                            color: s
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
                            color: s,
                            fontSize: "12px",
                            fontWeight: "500",
                            lineHeight: "15px"
                        },
                        ".Action, .MenuAction": {
                            color: s,
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
                            fill: s
                        },
                        ".Block": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            padding: "16px"
                        },
                        ".Icon": {
                            fill: s
                        }
                    }
                }
            }

            function p(e) {
                let [t, a, s, i] = e.match(/[\d.]+/g) ? ? [];
                return t && a && s && i && 1 === parseInt(i) ? `rgb(${t}, ${a}, ${s})` : e
            }

            function u(e) {
                return (null == e ? void 0 : e.type) === "paymentMethodId" ? e.value : void 0
            }
        },
        937776: (e, t, a) => {
            a.d(t, {
                B: () => o
            }), a(296540);
            var s = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, s.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                o = (0, a(104509).wt)("archiveBox", i, "default")
        }
    }
]);