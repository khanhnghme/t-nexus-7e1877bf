"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [47414, 85129], {
        153828: (e, t, a) => {
            a.d(t, {
                P: () => i
            }), a(296540);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.5 3.05 15 13.82",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.08 3.341a1.625 1.625 0 0 1 1.84 0l5.875 4.035c.441.304.705.805.705 1.34v6.034a2.125 2.125 0 0 1-2.125 2.125h-2.716a1.625 1.625 0 0 1-1.625-1.625v-4.065H8.967v4.065c0 .898-.728 1.625-1.625 1.625H4.625A2.125 2.125 0 0 1 2.5 14.75V8.716c0-.535.264-1.036.705-1.34zm1.132 1.03a.375.375 0 0 0-.424 0L3.913 8.407a.38.38 0 0 0-.163.309v6.034c0 .483.392.875.875.875h2.716a.375.375 0 0 0 .375-.375v-4.19c0-.621.503-1.125 1.125-1.125h2.319c.62 0 1.124.504 1.124 1.125v4.19c0 .207.168.375.375.375h2.716a.875.875 0 0 0 .875-.875V8.716c0-.124-.06-.24-.163-.31z"
                    })
                },
                i = (0, a(104509).wt)("home", s, "default")
        },
        210511: (e, t, a) => {
            a.r(t), a.d(t, {
                WorkflowTriggerConfiguration: () => f,
                findModuleForTrigger: () => l,
                getSpecificWorkflowTrigger: () => c,
                getSyntheticNotionModuleValue: () => n,
                getTriggerDefinitionBySpecificTrigger: () => m,
                getTriggerDefinitionByType: () => d,
                getTriggerWithDefinition: () => u,
                useTriggerWithDefinition: () => p
            }), a(898992), a(672577);
            var s = a(296540),
                i = () => a(255755),
                o = a(474848);
            let r = (0, a(109939).YK)({
                configurationHidden: {
                    id: "WorkflowTriggerConfiguration.configurationHidden",
                    defaultMessage: "Only the user who connected this integration can view or edit trigger settings"
                }
            });

            function l(e, t) {
                var s, i;
                let o = null == e || null == (s = e.modules) ? void 0 : s.find(e => e.id === t.moduleId && void 0 !== t.moduleId);
                return o || (Object.keys(a(445568).notion.triggers).includes((null == (i = t.state) ? void 0 : i.type) ? ? "") ? n() : void 0)
            }

            function n() {
                return {
                    id: "notion",
                    name: "notion",
                    type: "notion",
                    version: "1.0.0"
                }
            }

            function p(e) {
                let {
                    workflowValue: t,
                    trigger: a
                } = e;
                return (0, s.useMemo)(() => {
                    var e;
                    if (!a) return {
                        specificTrigger: void 0,
                        triggerDefinition: void 0,
                        specificModuleValue: void 0
                    };
                    let s = l(t, a);
                    if (!s || !(null != (e = a.state) && e.type)) return {
                        specificTrigger: void 0,
                        triggerDefinition: void 0,
                        specificModuleValue: void 0
                    };
                    let i = d({
                        moduleType: s.type,
                        triggerType: a.state.type
                    });
                    return i ? {
                        specificTrigger: a,
                        triggerDefinition: i,
                        specificModuleValue: s
                    } : {
                        specificTrigger: void 0,
                        triggerDefinition: void 0,
                        specificModuleValue: void 0
                    }
                }, [t, a])
            }

            function d(e) {
                let {
                    moduleType: t,
                    triggerType: a
                } = e, s = i().y[t];
                if (!s) return;
                let o = s.triggers[a];
                if (o) return o
            }

            function u(e) {
                var t;
                let {
                    moduleType: a,
                    trigger: s
                } = e, o = null == (t = s.state) ? void 0 : t.type;
                if (!o) return {
                    specificTrigger: void 0,
                    triggerDefinition: void 0
                };
                let r = i().y[a].triggers[o];
                return r ? {
                    specificTrigger: s,
                    triggerDefinition: r
                } : {
                    specificTrigger: void 0,
                    triggerDefinition: void 0
                }
            }

            function m(e) {
                if (!e || !e.state) return;
                let t = e.state.type;
                if (t)
                    for (let e of a(957042).zP) {
                        let a = i().y[e];
                        if (a && a.triggers) {
                            for (let [e, s] of Object.entries(a.triggers))
                                if (e === t && s) return s
                        }
                    }
            }

            function c(e) {
                let {
                    workflowData: t,
                    triggerId: a
                } = e;
                if (!(null != t && t.triggers)) return;
                let s = t.triggers.find(e => e.id === a);
                if (s) return s
            }
            let g = {
                position: "relative",
                paddingInline: 4
            };

            function f(e) {
                let {
                    workflowStore: t,
                    workflowValue: s,
                    trigger: i,
                    isInTranscript: l,
                    workflowDefinitionPointer: n,
                    saveTrigger: d,
                    disabled: u = !1
                } = e, m = (0, a(960253).I)(() => ({
                    title: l ? {
                        color: a(632079).Tj.text.tertiary,
                        fontWeight: a(699422).Wy.medium,
                        fontSize: 14
                    } : {
                        fontWeight: a(699422).Wy.medium
                    }
                }), [l]), {
                    specificTrigger: c,
                    triggerDefinition: f
                } = p({
                    workflowValue: s,
                    trigger: i
                }), h = (0, a(109939).tz)();
                return c && c.state && f && n ? (0, o.jsx)(a(4458).VP, {
                    gap: 12,
                    style: g,
                    className: "autolayout-fill-width",
                    children: (0, o.jsx)(a(4458).fI, {
                        gap: 4,
                        width: "100%",
                        children: (() => {
                            let e = t.table !== a(581654).U6;
                            if (u) return (0, o.jsx)(a(111010).D, {
                                styleKey: "bodySmRegular",
                                colorVariant: "secondary",
                                children: (0, o.jsx)(a(109939).sA, { ...r.configurationHidden
                                })
                            });
                            if ("full" === f.configuration) {
                                let {
                                    FullConfiguration: a
                                } = f;
                                return e ? (0, o.jsx)(a, {
                                    workflowStore: t,
                                    workflowValue: s,
                                    trigger: c,
                                    isInTranscript: l,
                                    workflowDefinitionPointer: n,
                                    saveTrigger: d
                                }) : void 0
                            }
                            return (0, o.jsxs)(o.Fragment, {
                                children: [l && f.transcriptDescription ? (0, o.jsx)("div", {
                                    style: m.title,
                                    children: f.transcriptDescription(h, c)
                                }) : void 0, f.ConfigurationComponent && e ? (0, o.jsx)(f.ConfigurationComponent, {
                                    workflowStore: t,
                                    workflowValue: s,
                                    trigger: c,
                                    isInTranscript: l,
                                    workflowDefinitionPointer: n,
                                    saveTrigger: d
                                }) : void 0]
                            })
                        })()
                    })
                }) : null
            }
        },
        598974: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                notionTemplateIcon: () => o
            }), a(296540);
            var s = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.58 3 16.83 14",
                    svg: (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("path", {
                            fill: "#FFB110",
                            fillRule: "evenodd",
                            d: "M6.014 16.338a4.43 4.43 0 0 0 4.43-4.48H8.88c-.254 0-.512 0-.732-.018a2.3 2.3 0 0 1-.86-.226 2.24 2.24 0 0 1-.979-.979 2.3 2.3 0 0 1-.226-.86 10 10 0 0 1-.018-.731V7.48a4.44 4.44 0 0 1 2.297.678 4.431 4.431 0 0 0-6.777 3.751 4.43 4.43 0 0 0 4.43 4.43z",
                            clipRule: "evenodd"
                        }), (0, s.jsx)("path", {
                            fill: "#097FE8",
                            d: "M12.902 11.044c.463-.802.694-1.203.997-1.338a1.02 1.02 0 0 1 .828 0c.302.135.534.536.996 1.338l2.028 3.512c.463.802.695 1.203.66 1.532-.03.287-.18.548-.414.718-.267.194-.73.194-1.656.194h-4.057c-.925 0-1.388 0-1.656-.194a1.02 1.02 0 0 1-.414-.718c-.035-.329.197-.73.66-1.532z"
                        }), (0, s.jsx)("path", {
                            fill: "#F64932",
                            fillRule: "evenodd",
                            d: "M7.287 4.63c0-.571 0-.856.111-1.074.098-.192.254-.347.445-.445C8.061 3 8.346 3 8.916 3h4.38c.57 0 .854 0 1.072.111.191.098.347.253.445.445.11.218.11.503.11 1.073v3.852a2.24 2.24 0 0 0-1.52.109c-.46.204-.75.56-.94.83q-.318.472-.595.97l-.024.043-.118.203h-2.81c-.57 0-.855 0-1.073-.11a1 1 0 0 1-.445-.445c-.11-.218-.11-.503-.11-1.074z",
                            clipRule: "evenodd"
                        })]
                    })
                },
                o = (0, a(104509).wt)("notionTemplate", i, "default")
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
        736620: (e, t, a) => {
            a.d(t, {
                M: () => i
            }), a(296540);
            let s = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.37 1.53 9.26 12.92",
                    svg: (0, a(474848).jsx)("path", {
                        d: "m10.225 6.095-.11-1.14.18-.16c.64-.57 1.01-1.4 1.01-2.26v-.38c0-.34-.28-.62-.62-.62h-5.36c-.34 0-.62.28-.62.62v.38c0 .86.37 1.68 1.01 2.26l.18.16-.11 1.14c-1.44.58-2.41 2-2.41 3.55v.5c0 .34.28.62.63.62h3.23v2.34c0 .14.03.27.09.4l.35.75c.05.11.14.18.26.2h.06c.09 0 .19-.04.26-.11l.06-.08.35-.77c.06-.12.09-.26.09-.4v-2.34h3.26c.34 0 .62-.28.62-.62v-.5c0-1.56-.96-2.98-2.41-3.55zm-3.66 1.05c.23-.08.4-.29.42-.53l.18-1.85c.02-.2-.06-.4-.21-.53l-.42-.38c-.32-.28-.52-.66-.58-1.08h4.07c-.06.42-.26.8-.58 1.08l-.42.38c-.15.13-.23.33-.21.53l.18 1.85c.02.24.19.45.42.53l.19.06c1 .34 1.7 1.27 1.75 2.32h-6.73c.05-1.05.74-1.98 1.75-2.32z"
                    })
                },
                i = (0, a(104509).wt)("pinSmall", s, "small")
        },
        819534: (e, t, a) => {
            a.d(t, {
                u: () => s
            });
            let s = (0, a(104509).xh)("pencilLine", {
                default: {
                    loader: () => a.e(92668).then(a.bind(a, 636))
                },
                small: {
                    loader: () => a.e(92668).then(a.bind(a, 753114))
                },
                fill: {
                    loader: () => a.e(92668).then(a.bind(a, 491558))
                },
                fillSmall: {
                    loader: () => a.e(92668).then(a.bind(a, 476309))
                }
            }, ["compose", "edit", "write", "create"])
        },
        927364: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                xMarkCircleIcon: () => o
            }), a(296540);
            var s = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("path", {
                            d: "M12.817 7.183a.625.625 0 0 1 0 .884L10.884 10l1.933 1.933a.625.625 0 1 1-.884.884L10 10.884l-1.933 1.933a.625.625 0 1 1-.884-.884L9.116 10 7.183 8.067a.625.625 0 1 1 .884-.884L10 9.116l1.933-1.933a.625.625 0 0 1 .884 0"
                        }), (0, s.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                o = (0, a(104509).wt)("xMarkCircle", i, "default")
        },
        938211: (e, t, a) => {
            a.d(t, {
                J: () => s
            });

            function s() {
                return (0, a(682985).K8)(() => {
                    var e;
                    return !!(null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.setup_session_booked)
                }, [])
            }
        },
        950237: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => s,
                layoutIcon: () => i
            }), a(296540);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.29 3.29 13.41 13.41",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.3 4.825c0-.842.683-1.525 1.525-1.525h3.15c.842 0 1.525.683 1.525 1.525v10.35c0 .842-.683 1.525-1.525 1.525h-3.15A1.525 1.525 0 0 1 3.3 15.175zm1.525-.275a.275.275 0 0 0-.275.275v10.35c0 .152.123.275.275.275h3.15a.275.275 0 0 0 .275-.275V4.825a.275.275 0 0 0-.275-.275zm5.675.275v3.15c0 .842.683 1.525 1.525 1.525h3.15c.842 0 1.525-.683 1.525-1.525v-3.15c0-.842-.683-1.525-1.525-1.525h-3.15c-.842 0-1.525.683-1.525 1.525m1.525-.275h3.15c.152 0 .275.123.275.275v3.15a.275.275 0 0 1-.275.275h-3.15a.275.275 0 0 1-.275-.275v-3.15c0-.152.123-.275.275-.275m0 5.95c-.842 0-1.525.683-1.525 1.525v3.15c0 .842.683 1.525 1.525 1.525h3.15c.842 0 1.525-.683 1.525-1.525v-3.15c0-.842-.683-1.525-1.525-1.525zm-.275 1.525c0-.152.123-.275.275-.275h3.15c.152 0 .275.123.275.275v3.15a.275.275 0 0 1-.275.275h-3.15a.275.275 0 0 1-.275-.275z"
                    })
                },
                i = (0, a(104509).wt)("layout", s, "default")
        }
    }
]);