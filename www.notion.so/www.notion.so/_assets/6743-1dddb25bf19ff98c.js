"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [6743, 11235, 70916], {
        6922: (e, t, i) => {
            function s(e) {
                let [t, s] = e.split(".");
                return function(e) {
                    let a = (0, i(722371).MU)((0, i(722371).WP)(e[t].items).filter(([e]) => e !== s)),
                        n = { ...e
                        };
                    return n[t] = { ...e[t],
                        items: a
                    }, n
                }
            }
            i.d(t, {
                MO: () => n,
                et: () => r,
                Dm: () => A
            }), i(581454), i(296540), i(898992), i(354520);
            var a = i(474848);
            let n = [{
                    tier: "free",
                    days: 7,
                    message: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.versionHistory.value.7DaysSavedHistory",
                        defaultMessage: "7 days"
                    }, "pricingGrid.planAttribute.versionHistory.value.7DaysSavedHistory")
                }, {
                    tier: "personal",
                    days: 30,
                    message: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.versionHistory.value.30DaysSavedHistory",
                        defaultMessage: "30 days"
                    })
                }, {
                    tier: "plus",
                    days: 30,
                    message: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.versionHistory.value.30DaysSavedHistory",
                        defaultMessage: "30 days"
                    })
                }, {
                    tier: "business",
                    days: 90,
                    message: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.versionHistory.value.90DaysSavedHistory",
                        defaultMessage: "90 days"
                    })
                }, {
                    tier: "enterprise",
                    days: Number.MAX_SAFE_INTEGER,
                    message: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.versionHistory.value.unlimitedPageHistory",
                        defaultMessage: "Unlimited"
                    })
                }],
                r = Object.fromEntries(n.map(e => [e.tier, e]));
            i(109939).sA;
            let o = {
                    width: 16,
                    height: 16,
                    display: "inline-block",
                    marginInlineEnd: 6
                },
                l = (0, a.jsx)(i(109939).sA, {
                    id: "pricingGrid.planAttribute.value.unlimitedMembers",
                    defaultMessage: "Unlimited"
                }),
                d = (0, a.jsx)(i(109939).sA, {
                    id: "pricingGrid.planAttribute.value.custom",
                    defaultMessage: "Custom"
                }),
                p = (0, a.jsx)(i(109939).sA, {
                    id: "pricingGrid.planAttribute.value.limitOne",
                    defaultMessage: "1"
                }),
                u = (0, a.jsx)(i(109939).sA, {
                    id: "pricingGrid.planAttribute.value.limitFive",
                    defaultMessage: "5"
                }),
                c = (0, a.jsx)(i(109939).sA, {
                    id: "pricingGrid.planAttribute.value.basic",
                    defaultMessage: "Basic"
                }),
                g = (0, a.jsx)(i(109939).sA, {
                    id: "pricingGrid.planAttribute.value.advanced",
                    defaultMessage: "Advanced"
                }),
                m = {
                    free: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.guestLimit.free",
                        defaultMessage: "10"
                    }),
                    plus: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.guestLimit.plus.unlimited",
                        defaultMessage: "Unlimited guests"
                    }),
                    business: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.guestLimit.business.unlimited",
                        defaultMessage: "Unlimited guests"
                    }),
                    enterprise: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.guestLimit.enterprise.unlimited",
                        defaultMessage: "Unlimited guests"
                    })
                },
                b = (0, a.jsx)(i(109939).sA, {
                    id: "pricingGrid.planAttribute.value.payPerDomain",
                    defaultMessage: "Pay per domain"
                });

            function A(e) {
                var t;
                let n, A, f, h, M, y, v, G, P, x, F, w, j, k, L, S, C, O, I, T, D, N, H, B, U, z, W, E, R, q, V, Y, K, _, J, $, Q, Z, X, ee, et, ei, es, ea, en, er, eo, el, ed, ep, eu, ec, eg, em, eb, eA, ef, eh, eM, ey, ev, eG, eP, ex, eF, ew, ej;
                return Object.values(function(e, {
                    enterpriseLimited: t
                }) {
                    let a;
                    return (t ? (a = (0, i(722371).MU)((0, i(722371).WP)(e).map(([e, t]) => {
                        let s = (0, i(722371).MU)((0, i(722371).WP)(t.items).map(([t]) => [t, `${e}.${t}`]));
                        return [e, s]
                    })), (0, i(627179).Fs)(s(a.support.premiumSupport), s(a.support.customerSuccessManager))) : i(763230).D_)(e)
                }((t = {
                    allTeamPlanFeatures: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.allTeamPlanFeatures.tooltip",
                            defaultMessage: "All the features of our Team Plan, plus more."
                        })],
                        isOneLiner: !0
                    },
                    freeForIndividuals: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.freeForIndividuals.tooltip",
                            defaultMessage: "Notion is now free for personal use."
                        })],
                        isOneLiner: !1
                    },
                    members: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.members.tooltip",
                            defaultMessage: "Members are teammates you invite to your workspace. They can access and add pages for all members to see, or be added to pages with permissions for private collaboration."
                        })],
                        isOneLiner: !1
                    },
                    pageAnalytics: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.pageAnalytics.tooltip",
                            defaultMessage: "Get actionable insights about who’s viewing and interacting with your content."
                        }, "pricingGrid.planAttribute.pageAnalytics.tooltip")],
                        isOneLiner: !1
                    },
                    databaseAutomations: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.databaseAutomations.tooltip",
                            defaultMessage: "Automatically set status, assignees, and more"
                        }, "pricingGrid.planAttribute.databaseAutomations.tooltip")],
                        isOneLiner: !1
                    },
                    membershipAdmin: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.membershipAdmin.tooltip",
                            defaultMessage: "Membership admins can add & remove members from workspaces and groups, but do not have access to other workspace settings."
                        })],
                        isOneLiner: !1
                    },
                    guests: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.guests.tooltip.external",
                            defaultMessage: "Guests are external collaborators outside your organization, such as agencies, partners, contractors, or vendors."
                        })],
                        isOneLiner: !1
                    },
                    blockStorage: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.blockStorage.tooltip",
                            defaultMessage: "Blocks are pieces of content you add to a page, like a paragraph, a to-do item, an image, an embedded file, etc. Blocks are now unlimited for all plans. A 1,000 block limit applies for Team Plan trials."
                        })],
                        isOneLiner: !1
                    },
                    blockStorageWithFreePlan: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.blockStorageWithFree.tooltip",
                            defaultMessage: "Blocks are pieces of content you add to a page (e.g. to-do checkboxes, paragraphs, bullet points, etc.). Teams who want to try collaborating in Notion can use the Free Plan with up to certain number of blocks before upgrading."
                        }, "pricingGrid.planAttribute.blockStorageWithFree.tooltip")],
                        isOneLiner: !1
                    },
                    fileUploads: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.fileUploads.tooltip",
                            defaultMessage: "A per file size limit may apply to any file that you upload to a Notion page or database."
                        })],
                        isOneLiner: !1
                    },
                    fileUploadsWithFreePlan: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.fileUploadsWithFree.tooltip",
                            defaultMessage: "On the Free plan, you can upload images, videos and file attachments up to 5MB each. Upgrade to a paid plan for unlimited file uploads with a ~5GB max per file."
                        }, "pricingGrid.planAttribute.fileUploadsWithFree.tooltip")],
                        isOneLiner: !1
                    },
                    limitedVersionHistory: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.limitedVersionHistory.tooltip",
                            defaultMessage: "View and restore past versions of any Notion page from the past 30 days."
                        })],
                        isOneLiner: !0
                    },
                    unlimitedVersionHistory: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.unlimitedVersionHistory.tooltip",
                            defaultMessage: "View and restore past versions of any Notion page."
                        })],
                        isOneLiner: !0
                    },
                    versionHistory: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.versionHistory.tooltip",
                            defaultMessage: "View and restore past versions of any Notion page."
                        })],
                        isOneLiner: !0
                    },
                    pageHistory: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.pageHistory.tooltip",
                            defaultMessage: "Restore your page to a previous version."
                        }, "pricingGrid.planAttribute.pageHistory.tooltip")],
                        isOneLiner: !0
                    },
                    auditLog: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.auditLog.tooltip",
                            defaultMessage: "Access a detailed log of security and safety-related activity for your workspace account to identify potential security issues, investigate suspicious behavior, or troubleshoot access."
                        })],
                        isOneLiner: !1
                    },
                    realTimeCollaboration: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.realTimeCollaboration.tooltip",
                            defaultMessage: "Work with others in real time, with live presence and comments."
                        })],
                        isOneLiner: !1
                    },
                    linkSharing: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.linkSharing.tooltip",
                            defaultMessage: "Share a secret link with anyone, so they can view, comment, or edit your page at your discretion."
                        })],
                        isOneLiner: !1
                    },
                    collaborativeWorkspace: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.collaborativeWorkspace.tooltip",
                            defaultMessage: "The collaborative workspace lets members easily share pages to the whole team in a shared hierarchy, with granular permissions."
                        })],
                        isOneLiner: !1
                    },
                    collaborativeWorkspaceWithFree: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.collaborativeWorkspaceWithFree.tooltip",
                            defaultMessage: "Plan, create, and get organized, together. Share your workspace with multiple people and teams, so everyone can stay aligned in a single place."
                        }, "pricingGrid.planAttribute.collaborativeWorkspaceWithFree.tooltip")],
                        isOneLiner: !1
                    },
                    apps: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.apps.tooltip",
                            defaultMessage: "Notion runs in your web browser with no installation required. Or download our app for Mac, Windows, iOS, or Android."
                        })],
                        isOneLiner: !1
                    },
                    granularDatabasePermissions: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.granularDatabasePermissions.tooltip",
                            defaultMessage: "Collaborate in Notion databases without giving access to the entire database. Limit access to rows where the collaborator is assigned."
                        })],
                        isOneLiner: !1
                    },
                    agent: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.agent.tooltip",
                            defaultMessage: "Does work for you. Completes complex, multi-step tasks using context from Notion, your connected apps, and the web."
                        })],
                        isOneLiner: !1
                    },
                    customAgents: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customAgents.tooltip",
                            defaultMessage: "AI agents handle repetitive tasks autonomously, so your team doesn’t have to. Free to try, then $10 per 1,000 credits."
                        })],
                        isOneLiner: !1
                    },
                    blockTypes: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.blockTypes.tooltip.line1",
                            defaultMessage: "Blocks are different types of content you can add to a page: a to-do item, an image, a code block, an uploaded file."
                        }), (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.blockTypes.tooltip.line2",
                            defaultMessage: "Blocks also help you embed content from services like Google Drive, GitHub, Twitter, and Typeform."
                        })],
                        isOneLiner: !1
                    },
                    templates: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.templates.tooltip.line1",
                            defaultMessage: "Start with a blank canvas or choose from our library of expertly designed templates."
                        }), (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.templates.tooltip.line2",
                            defaultMessage: "Some favorites include: notes, goals, company home, meeting notes, product roadmap, new hire onboarding, and engineering wiki."
                        })],
                        isOneLiner: !1
                    },
                    databases: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.databases.tooltip",
                            defaultMessage: "View databases in many ways, tailored to your own workflow. Use databases for project boards, event calendars, and more."
                        })],
                        isOneLiner: !1
                    },
                    linkPreviews: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.linkPreviews.tooltip",
                            defaultMessage: "See dynamic, up-to-date previews from dozens of tools like Slack, Dropbox, Figma, and more."
                        })],
                        isOneLiner: !1
                    },
                    syncedDatabases: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.syncedDatabases.tooltip",
                            defaultMessage: "See up-to-date information from Jira and GitHub, all synced into Notion as a database."
                        }), (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.syncedDatabases.tooltip.line2",
                            defaultMessage: "Personal plans are limited to 1 database with 100 rows."
                        })],
                        isOneLiner: !1
                    },
                    notionAiCore: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionAi.core.tooltip",
                            defaultMessage: "Chat about anything, generate and edit docs, autofill databases, and find answers across your Notion workspace."
                        }, "tooltip")],
                        isOneLiner: !1
                    },
                    meetingNotes: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionAi.meetingNotes.tooltip",
                            defaultMessage: "Automatically transcribes your meetings, along with a helpful summary."
                        }, "tooltip")],
                        isOneLiner: !1
                    },
                    enterpriseSearch: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.topLevelFeatures.enterpriseSearch.tooltip",
                            defaultMessage: "Search across connected apps like Slack, Github & more"
                        })],
                        isOneLiner: !1
                    },
                    researchMode: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.researchMode.tooltip",
                            defaultMessage: "Analyzes all of your sources, plus the web, to create detailed docs and reports"
                        }, "pricingGrid.planAttribute.researchMode.tooltip")],
                        isOneLiner: !1
                    },
                    zeroDataRetention: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.zeroDataRetention.tooltip",
                            defaultMessage: "When using Notion AI, our LLM providers utilize zero data retention for Enterprise plan workspaces"
                        }, "tooltip")],
                        isOneLiner: !1
                    },
                    notionCalendar: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionCalendar.tooltip",
                            defaultMessage: "Connect multiple Calendars to manage work and time together."
                        }, "tooltip")],
                        isOneLiner: !1
                    },
                    notionMail: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionMail.tooltip",
                            defaultMessage: "Connect your Gmail for an AI-powered, personalized inbox."
                        }, "1")],
                        isOneLiner: !0
                    },
                    notionMailAi: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.connectedApps.notionMailAi.tooltip",
                            defaultMessage: "Uses deep reasoning to produce detailed reports using info across your Notion workspace, connected tools, and current info from the web."
                        }, "tooltip")],
                        isOneLiner: !1
                    },
                    subtasks: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.subtasks.tooltip",
                            defaultMessage: "Add subtasks, and link dependencies."
                        }, "tooltip")],
                        isOneLiner: !1
                    },
                    customProperties: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customProperties.tooltip",
                            defaultMessage: "Add unlimited database properties and filters to organize information."
                        }, "tooltip")],
                        isOneLiner: !1
                    },
                    charts: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.chartsAndDashboards.tooltip",
                            defaultMessage: "Visualize data from databases in different ways (e.g. donut, bar, and line charts)."
                        }, "tooltip")],
                        isOneLiner: !1
                    },
                    dashboards: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.dashboards.tooltip",
                            defaultMessage: "Bring charts, tables, and lists into one dashboard for a unified view of your work."
                        }, "tooltip")],
                        isOneLiner: !1
                    },
                    forms: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.forms.tooltip",
                            defaultMessage: "Capture, organize, and act on responses right inside Notion."
                        }, "tooltip")],
                        isOneLiner: !1
                    },
                    databaseProperties: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.databaseProperties.tooltip",
                            defaultMessage: "Build powerful databases with rich properties, such as checkboxes, dropdown selects, currencies, assignees, dates, files, and more."
                        })],
                        isOneLiner: !1
                    },
                    proWebPublishing: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.proWebPublishing.tooltip",
                            defaultMessage: "Publish your Notion pages as a standalone website. Coming soon."
                        })],
                        isOneLiner: !1
                    },
                    contentApi: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.contentApi.tooltip.v3",
                            defaultMessage: "Access the Notion API to build custom integrations for your team."
                        })],
                        isOneLiner: !1
                    },
                    scimApi: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.scimApi.tooltip",
                            defaultMessage: "Access the Notion SCIM API to provision and manage users and groups."
                        })],
                        isOneLiner: !1
                    },
                    bulkExport: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.bulkExport.tooltip",
                            defaultMessage: "You own your data. Download all your pages as HTML, Markdown, or CSV (for databases), and any files/images you’ve uploaded, too."
                        })],
                        isOneLiner: !1
                    },
                    adminTools: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.adminTools.tooltip",
                            defaultMessage: "Create separate admin and member permissions for more control. Only admins can invite new members and change workspace settings."
                        })],
                        isOneLiner: !1
                    },
                    advancedSecurity: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.advancedSecurity.tooltip",
                            defaultMessage: "Unlock extra permission controls to prevent certain people from sharing pages externally, disable guests, and set workspace-level rules."
                        })],
                        isOneLiner: !1
                    },
                    sharingPermissions: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.sharingPermissions.tooltip",
                            defaultMessage: "Set more granular permission to restrict invited people from sharing the page to others."
                        })],
                        isOneLiner: !1
                    },
                    advancedPermissions: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.advancedPermissions.tooltip",
                            defaultMessage: "Set more granular permission to restrict invited people from sharing the page to others."
                        })],
                        isOneLiner: !1
                    },
                    permissionGroups: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.permissionGroups.tooltip",
                            defaultMessage: "Set varying and granular permissions for different groups and team."
                        })],
                        isOneLiner: !1
                    },
                    bulkPDFExport: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.bulkPDFExport.tooltip",
                            defaultMessage: "Export all of your content at once as PDFs. Handy for legal or compliance backups."
                        })],
                        isOneLiner: !1
                    },
                    sso: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.SSO.tooltip",
                            defaultMessage: "Manage employee access at scale with secure single sign-on."
                        })],
                        isOneLiner: !1
                    },
                    earlyAccess: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.earlyAccess.tooltip",
                            defaultMessage: "Early access means you’ll always have the most powerful version of Notion. You’ll also influence our future product roadmap."
                        })],
                        isOneLiner: !1
                    },
                    prioritySupport: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.prioritySupport.tooltip",
                            defaultMessage: "We’re always around to help."
                        })],
                        isOneLiner: !0
                    },
                    dedicatedManager: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.dedicatedManager.tooltip",
                            defaultMessage: "Reserved for teams larger than 100 people paying annually."
                        })],
                        isOneLiner: !1
                    },
                    customContract: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customContract.tooltip",
                            defaultMessage: "We’ll work with you to create a custom contract and payment via PO/invoice. Reserved for enterprise accounts with over 100 users."
                        })],
                        isOneLiner: !1
                    },
                    wikisDocsNotes: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.wikisDocsNotes.tooltip",
                            defaultMessage: "Use Notion for shared wikis and docs, and as a powerful notetaking tool."
                        })],
                        isOneLiner: !1
                    },
                    genericNotes: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.genericNotes.tooltip",
                            defaultMessage: "Create documents and share with others."
                        })],
                        isOneLiner: !0
                    },
                    genericTags: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.genericTags.tooltip",
                            defaultMessage: "Organize and track your notes."
                        })],
                        isOneLiner: !0
                    },
                    genericReminders: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.genericReminders.tooltip",
                            defaultMessage: "Get notified of due dates."
                        })],
                        isOneLiner: !0
                    },
                    genericWebClipper: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.genericWebClipper.tooltip",
                            defaultMessage: "Save pages from the web."
                        })],
                        isOneLiner: !0
                    },
                    evernoteHierarchy: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.evernoteHierarchy.tooltip",
                            defaultMessage: "Organize notes into notebooks and stacks."
                        })],
                        isOneLiner: !0
                    },
                    notionHierarchy: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionHierarchy.tooltip",
                            defaultMessage: "No limits on nesting notes within notes."
                        })],
                        isOneLiner: !0
                    },
                    notionCollaboration: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionCollaboration.tooltip",
                            defaultMessage: "Work with others on the same page at the same time."
                        })],
                        isOneLiner: !0
                    },
                    notionMarkdown: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionMarkdown.tooltip",
                            defaultMessage: "Write or export content in markdown."
                        })],
                        isOneLiner: !0
                    },
                    notionDatabases: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionDatabases.tooltip",
                            defaultMessage: "New workflows with database views, rollups, filters, and more."
                        })],
                        isOneLiner: !1
                    },
                    timeline: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.timeline.tooltip",
                            defaultMessage: "Use timeline views for project scheduling and planning."
                        })],
                        isOneLiner: !1
                    },
                    apiAdminControls: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.apiAdminControls.tooltip",
                            defaultMessage: "Provides admins with more control over APIs."
                        })],
                        isOneLiner: !1
                    },
                    slackIntegration: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.slackIntegration.tooltip",
                            defaultMessage: "Send information from Notion to Slack, and vice versa. Or connect to Zapier to create automated workflows with the tools you rely on."
                        })],
                        isOneLiner: !1
                    },
                    customDomain: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customDomain.tooltip",
                            defaultMessage: "Publish your resumé, startup pitch deck, company jobs page & more as a public webpage. Paid plans can select a homepage for their custom domain (e.g. acmedesign.notion.site)."
                        }, "pricingGrid.planAttribute.customDomain.tooltip")],
                        isOneLiner: !1
                    },
                    weekVersionHistory: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.weekVersionHistory.tooltip",
                            defaultMessage: "Restore your page to a previous version."
                        })],
                        isOneLiner: !0
                    },
                    tenGuests: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.tenGuests.tooltip",
                            defaultMessage: "Collaborate with friends, family & colleagues on your pages."
                        })],
                        isOneLiner: !0
                    },
                    unlimitedBlocksTeam: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.unlimitedBlocksTeam.tooltip",
                            defaultMessage: "Blocks are pieces of content you add to a page (e.g. to-do checkboxes, paragraphs, bullet points, etc.)."
                        })],
                        isOneLiner: !0
                    },
                    hundredGuests: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.hundredGuests.tooltip",
                            defaultMessage: "Add collaborators external to your organization (like clients or contractors) to specific pages in your workspace."
                        })],
                        isOneLiner: !0
                    },
                    privateTeamspaces: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.privateTeamspaces.tooltip",
                            defaultMessage: "Create teamspaces that can’t be seen or discovered by anyone except those you add. Great for sensitive information like company planning or performance reviews."
                        })],
                        isOneLiner: !1
                    },
                    permissionGroupsWithFree: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.permissionGroupsWithFree.tooltip",
                            defaultMessage: "Create groups of people according to role or department to streamline page & teamspace permissions."
                        }, "pricingGrid.planAttribute.permissionGroupsWithFree.tooltip")],
                        isOneLiner: !1
                    },
                    syncedDatabasesWithFree: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.syncedDatabasesWithFree.tooltip",
                            defaultMessage: "See up-to-date information from Jira, GitHub & Asana, all synced into Notion as a database."
                        }, "pricingGrid.planAttribute.syncedDatabasesWithFree.tooltip")],
                        isOneLiner: !1
                    },
                    dynamicLinkPreviews: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.dynamicLinkPreviews.tooltip",
                            defaultMessage: "Paste a link to a GitHub PR, Jira ticket, Figma artboard & more to add a dynamic preview of content in your docs & notes."
                        }, "pricingGrid.planAttribute.dynamicLinkPreviews.tooltip")],
                        isOneLiner: !1
                    },
                    connections: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.connections.tooltip",
                            defaultMessage: "Send information from Notion to Slack, and vice versa. Or connect to Zapier to create automated workflows with the tools you rely on."
                        }, "pricingGrid.planAttribute.connections.tooltip")],
                        isOneLiner: !1
                    },
                    publicApi: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.publicApi.tooltip",
                            defaultMessage: "Build bespoke integrations to connect your Notion workspace to internal tools and workflows."
                        }, "pricingGrid.planAttribute.publicApi.tooltip")],
                        isOneLiner: !1
                    },
                    webhooks: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.webhooks.tooltip",
                            defaultMessage: "Send real-time updates to your integrations when content changes in Notion."
                        }, "pricingGrid.planAttribute.webhooks.tooltip")],
                        isOneLiner: !1
                    },
                    basicAutomations: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.basicAutomations.tooltip",
                            defaultMessage: "Create custom workflows with buttons, automate your sprint tracker, and sync with Slack and GitHub."
                        }, "pricingGrid.planAttribute.basicAutomations.tooltip")],
                        isOneLiner: !1
                    },
                    customDatabaseAutomations: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customDatabaseAutomations.tooltip",
                            defaultMessage: "Design custom automations triggered by database status changes, assignees and more. Free Plan users can test database automations via templates."
                        }, "pricingGrid.planAttribute.customDatabaseAutomations.tooltip")],
                        isOneLiner: !1
                    },
                    bulkExportAsHtmlMarkdownAndCsv: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.bulkExportAsHtmlMarkdownAndCsv.tooltip",
                            defaultMessage: "Create a backup of all the pages and content across your workspace."
                        }, "pricingGrid.planAttribute.bulkExportAsHtmlMarkdownAndCsv.tooltip")],
                        isOneLiner: !1
                    },
                    twoStepVerification: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.twoStepVerification.tooltip",
                            defaultMessage: "Enable an extra layer of account security with a second method of verification, also known as 2FA or MFA."
                        }, "pricingGrid.planAttribute.twoStepVerification.tooltip")],
                        isOneLiner: !1
                    },
                    pdfExport: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.pdfExport.tooltip",
                            defaultMessage: "Export all your content at once as PDFs. Perfect for legal or compliance backups."
                        })],
                        isOneLiner: !1
                    },
                    bulkExportAsPdf: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.bulkExportAsPdf.tooltip",
                            defaultMessage: "Export all your content at once as PDFs. Perfect for legal or compliance backups."
                        }, "pricingGrid.planAttribute.bulkExportAsPdf.tooltip")],
                        isOneLiner: !1
                    },
                    advancedPageAnalytics: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.advancedPageAnalytics.tooltip",
                            defaultMessage: "Get actionable insights about who’s viewing and editing your content."
                        })],
                        isOneLiner: !0
                    },
                    ninetyVersionHistory: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.ninetyVersionHistory.tooltip",
                            defaultMessage: "Restore your page to a previous version."
                        })],
                        isOneLiner: !0
                    },
                    twoFiftyGuests: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.twoFiftyGuests.tooltip",
                            defaultMessage: "Add collaborators external to your organization (like clients or contractors) to specific pages in your workspace."
                        })],
                        isOneLiner: !0
                    },
                    customerSuccessManager: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customerSuccess.tooltip",
                            defaultMessage: "Our team of Customer Success Managers are experts to help you get the most out of Notion."
                        })],
                        isOneLiner: !0
                    },
                    workspaceAnalytics: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.workspaceAnalytics.tooltip",
                            defaultMessage: "Get actionable insights about how folks use your Notion workspace, from the most popular pages to overall traffic. Analytics data begins after Enterprise Plan start date."
                        })],
                        isOneLiner: !0
                    },
                    fiveHundredGuests: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.fiveHundredGuests.tooltip",
                            defaultMessage: "Add collaborators external to your organization (like clients or contractors) to specific pages in your workspace."
                        })],
                        isOneLiner: !0
                    },
                    customGuests: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customGuests.tooltip",
                            defaultMessage: "Add collaborators external to your organization (like clients or contractors) to specific pages in your workspace."
                        })],
                        isOneLiner: !0
                    },
                    ssoWithFree: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.ssoWithFree.tooltip",
                            defaultMessage: "Manage employee access at scale with single sign-on."
                        }, "pricingGrid.planAttribute.ssoWithFree.tooltip")],
                        isOneLiner: !1
                    },
                    scim: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.scim.tooltip",
                            defaultMessage: "Automatically provision members in and out of your workspace with identity providers like Okta."
                        }, "pricingGrid.planAttribute.scim.tooltip")],
                        isOneLiner: !1
                    },
                    advancedSecurityWithFree: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.advancedWorkspaceAndTeamspaceSecurity.tooltip",
                            defaultMessage: "Prevent employees from publishing pages to the web, exporting to their hard drives & more. Enable and restrict across the entire workspace, or on a teamspace-by-teamspace basis."
                        }, "pricingGrid.planAttribute.advancedWorkspaceAndTeamspaceSecurity.tooltip")],
                        isOneLiner: !1
                    },
                    granularAdminControls: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.granularAdminControls.tooltip",
                            defaultMessage: "Designate membership admins who can add and remove members from the workspace and groups, but can’t access other security & billing settings."
                        }, "pricingGrid.planAttribute.granularAdminControls.tooltip")],
                        isOneLiner: !1
                    },
                    adminContentSearch: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.adminContentSearch.tooltip",
                            defaultMessage: "Admin content search provides Workspace owners visibility into the content of their Notion workspace, letting them filter, search, and troubleshoot permissions."
                        }, "pricingGrid.planAttribute.adminContentSearch.tooltip")],
                        isOneLiner: !1
                    },
                    prioritySupportWithFree: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.priority.support.tooltip",
                            defaultMessage: "We’re always around to help. Just click the ( ? ) button at the bottom left on desktop, or tap “Help & support” if you’re on mobile."
                        }, "pricingGrid.planAttribute.priority.support.tooltip")],
                        isOneLiner: !1
                    },
                    premiumSupport: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.premium.support.tooltip",
                            defaultMessage: "Tailored, proactive around-the-clock support offerings for teams with more specialized needs."
                        }, "pricingGrid.planAttribute.premium.support.tooltip")],
                        isOneLiner: !1
                    },
                    securityCompliance: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.securityCompliance.tooltip",
                            defaultMessage: "Integrate with SIEM and DLP tools to automatically centralize audit logs & set policies to detect sensitive content in your workspace and trigger automated actions to remediate."
                        }, "pricingGrid.planAttribute.securityCompliance.tooltip")],
                        isOneLiner: !1
                    },
                    domainManagement: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.domainManagement.tooltip",
                            defaultMessage: "Establish ownership of your company domain and take actions on workspaces that belong to your verified domain (request ownership transfer, delete, claim)"
                        }, "pricingGrid.planAttribute.domainManagement.tooltip")],
                        isOneLiner: !1
                    },
                    workspaceConsolidation: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.workspaceConsolidation.tooltip",
                            defaultMessage: "Consolidate content from multiple workspaces, including users, page content, and permissions, into your main workspace as teamspace(s) that keep their structure."
                        }, "pricingGrid.planAttribute.workspaceConsolidation.tooltip")],
                        isOneLiner: !1
                    },
                    managedUsers: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.managedUsers.tooltip",
                            defaultMessage: "Manage the users within your domain, including a dashboard where you can get information and make changes."
                        }, "pricingGrid.planAttribute.managedUsers.tooltip")],
                        isOneLiner: !1
                    },
                    visibilityControls: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.visibilityControls.tooltip",
                            defaultMessage: "Give workspace owners visibility and control over profile information, external workspace access, removal from workspace, session duration, and account deactivation & deletion for any users that belong to their verified domain."
                        }, "pricingGrid.planAttribute.visibilityControls.tooltip")],
                        isOneLiner: !1
                    },
                    hipaaCompliance: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.hipaaCompliance.tooltip",
                            defaultMessage: "Customers can store and process Protected Health Information (PHI) in Notion once they sign a Business Associate Agreement (BAA) and configured their workspace(s) security settings according to our HIPAA configuration instructions. "
                        }, "pricingGrid.planAttribute.hipaaCompliance.tooltip")],
                        isOneLiner: !1
                    },
                    guestInviteRequest: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.guestInviteRequest.tooltip",
                            defaultMessage: "Workspace members can send guest invite requests to their workspace owners for review when guests are disabled in the workspace."
                        }, "pricingGrid.planAttribute.guestInviteRequest.tooltip")],
                        isOneLiner: !1
                    },
                    customDataRetention: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customDataRetention.tooltip",
                            defaultMessage: "Control over when pages are deleted from Trash, and how long they are retained afterward."
                        }, "pricingGrid.planAttribute.customDataRetention.tooltip")],
                        isOneLiner: !1
                    },
                    views: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.views.tooltip",
                            defaultMessage: "Customize how you see items and tasks."
                        }, "pricingGrid.planAttribute.views.tooltip")],
                        isOneLiner: !1
                    },
                    formulas: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.formulas.tooltip",
                            defaultMessage: "Add a formula property to run calculations and functions based on other properties."
                        }, "pricingGrid.planAttribute.formulas.tooltip")],
                        isOneLiner: !1
                    },
                    automations: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.automations.tooltip",
                            defaultMessage: "Automatically create pages and new blocks, set status, assignee, and property values, and more."
                        }, "pricingGrid.planAttribute.automations.tooltip")],
                        isOneLiner: !1
                    },
                    unlimitedPublishedPages: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.unlimitedPublishedPages.tooltip",
                            defaultMessage: "Publish an unlimited number of pages to the web."
                        }, "pricingGrid.planAttribute.unlimitedPublishedPages.tooltip")],
                        isOneLiner: !1
                    },
                    notionSitesDomains: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionSitesDomains.tooltip",
                            defaultMessage: "Select a custom notion.site domain for your published pages."
                        }, "pricingGrid.planAttribute.notionSitesDomains.tooltip")],
                        isOneLiner: !1
                    },
                    searchEngineIndexing: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.searchEngineIndexing.tooltip",
                            defaultMessage: "Turn on search engine indexing for any Site. Upgrade to a paid plan to customize your title and description metadata."
                        }, "pricingGrid.planAttribute.searchEngineIndexing.tooltip")],
                        isOneLiner: !1
                    },
                    siteCustomizations: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.siteCustomizations.tooltip",
                            defaultMessage: "Set a homepage, customize your Site’s favicon and share preview, build a custom header bar, and set light or dark mode."
                        }, "pricingGrid.planAttribute.siteCustomizations.tooltip")],
                        isOneLiner: !1
                    },
                    customDomainsBranding: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customDomainsBranding.tooltip",
                            defaultMessage: "Connect a custom domain to your Site and remove Notion branding for $8/month/domain paid annually, or $10/month per domain paid monthly."
                        }, "pricingGrid.planAttribute.customDomainsBranding.tooltip")],
                        isOneLiner: !1
                    },
                    syncedThirdParties: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.syncedThirdParties.tooltip",
                            defaultMessage: "Create a single source of truth for your team by syncing Jira, GitHub, Asana and more as Notion databases."
                        }, "pricingGrid.planAttribute.syncedThirdParties.tooltip")],
                        isOneLiner: !1
                    },
                    customWebsites: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customWebsites.tooltip",
                            defaultMessage: "Customize your top header, choose a light or dark theme, add a custom favicon, and integrate with Google Analytics."
                        }, "pricingGrid.planAttribute.customWebsites.tooltip")],
                        isOneLiner: !1
                    },
                    customAutomations: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customAutomations.tooltip",
                            defaultMessage: "Automate the most tedious parts of your work with database automations."
                        }, "pricingGrid.planAttribute.customAutomations.tooltip")],
                        isOneLiner: !1
                    },
                    chartsAndDashboards: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.chartsAndDashboards.tooltip",
                            defaultMessage: "Visualize data from databases in different ways (e.g. donut, bar, and line charts)."
                        }, "pricingGrid.planAttribute.chartsAndDashboards.tooltip")],
                        isOneLiner: !1
                    },
                    verifiedPages: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.verifiedPages.tooltip",
                            defaultMessage: "Add a verified badge to pages that are up to date. Appears in search results and AI citations."
                        }, "pricingGrid.planAttribute.verifiedPages.tooltip")],
                        isOneLiner: !1
                    },
                    offline: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.offline.tooltip",
                            defaultMessage: "Use Notion offline on the desktop and mobile app."
                        }, "pricingGrid.planAttribute.offline.tooltip")],
                        isOneLiner: !1
                    },
                    freeIndividualUse: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.freeIndividualUse.tooltip",
                            defaultMessage: "Unlimited storage for individuals. Limited trial for teams."
                        }, "pricingGrid.planAttribute.freeIndividualUse.tooltip")],
                        isOneLiner: !1
                    },
                    basicSites: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.basicSites.tooltip",
                            defaultMessage: "Publish a Notion page to the web"
                        }, "pricingGrid.planAttribute.basicSites.tooltip")],
                        isOneLiner: !1
                    },
                    databasesIncluding: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.databasesIncluding.tooltip",
                            defaultMessage: "Organize hundreds or thousands of items in one place, like projects or tasks"
                        }, "pricingGrid.planAttribute.databasesIncluding.tooltip")],
                        isOneLiner: !1
                    },
                    trialNotionAI: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.trialNotionAI.tooltip",
                            defaultMessage: "Trial AI capabilities like generating docs, or autofilling databases"
                        }, "pricingGrid.planAttribute.trialNotionAI.tooltip")],
                        isOneLiner: !1
                    },
                    customForms: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customForms.tooltip",
                            defaultMessage: "Remove Notion branding from public forms"
                        }, "pricingGrid.planAttribute.customForms.tooltip")],
                        isOneLiner: !1
                    },
                    basicIntegrations: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.basicIntegrations.tooltip",
                            defaultMessage: "Integrate with some tools like Slack & Google Drive"
                        }, "pricingGrid.planAttribute.basicIntegrations.tooltip")],
                        isOneLiner: !1
                    },
                    privateTeamspacesShorter: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.privateTeamspacesShorter.tooltip",
                            defaultMessage: "Private spaces to collaborate on sensitive content"
                        }, "pricingGrid.planAttribute.privateTeamspacesShorter.tooltip")],
                        isOneLiner: !1
                    },
                    conditionalFormsLogic: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.conditionalFormsLogic.tooltip",
                            defaultMessage: "Create dynamic forms where questions appear only when relevant based on previous responses"
                        }, "pricingGrid.planAttribute.conditionalFormsLogic.tooltip")],
                        isOneLiner: !1
                    },
                    domainVerification: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.domainVerification.tooltip",
                            defaultMessage: "Verify ownership of an email domain to access advanced security features including single-sign on."
                        }, "pricingGrid.planAttribute.domainVerification.tooltip")],
                        isOneLiner: !1
                    },
                    premiumIntegrations: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.premiumIntegrations.tooltip",
                            defaultMessage: "Integrate with GitHub, Asana & more"
                        }, "pricingGrid.planAttribute.premiumIntegrations.tooltip")],
                        isOneLiner: !1
                    },
                    notionAI: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionAI.tooltip",
                            defaultMessage: "All Notion AI core capabilities, and the latest advanced features"
                        }, "pricingGrid.planAttribute.notionAI.tooltip")],
                        isOneLiner: !1
                    },
                    aiMeetingNotes: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.aiMeetingNotes.tooltip",
                            defaultMessage: "Automate your meeting notes and follow-ups, no bot needed"
                        }, "pricingGrid.planAttribute.aiMeetingNotes.tooltip")],
                        isOneLiner: !1
                    },
                    aiMeetingNotesTranscriptDeletion: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.aiMeetingNotesTranscriptDeletion.tooltip",
                            defaultMessage: "Admins can auto-delete AI meeting transcripts on a customizable schedule to meet your data retention policies."
                        }, "pricingGrid.planAttribute.aiMeetingNotesTranscriptDeletion.tooltip")],
                        isOneLiner: !1
                    },
                    advancedIntegrations: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.advancedIntegrations.tooltip",
                            defaultMessage: "Integrate with even more tools"
                        }, "pricingGrid.planAttribute.advancedIntegrations.tooltip")],
                        isOneLiner: !1
                    },
                    organizationLevelControls: {
                        content: [(0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.organizationLevelControls.tooltip",
                            defaultMessage: "Integrate with even more tools"
                        }, "pricingGrid.planAttribute.organizationLevelControls.tooltip")],
                        isOneLiner: !1
                    }
                }, h = {
                    label: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.comparisonSection.content.title",
                        defaultMessage: "Content"
                    }, "pricingGrid.comparisonSection.content.title"),
                    items: (n = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.blocks.titleMessage",
                            defaultMessage: "Pages & blocks"
                        }, "pricingGrid.planAttribute.blocks.titleMessage"),
                        tooltip: t.blockStorageWithFreePlan,
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: (0, a.jsx)(i(109939).sA, {
                                    id: "pricingGrid.content.unlimitedForIndividuals",
                                    defaultMessage: "Unlimited for individuals"
                                }),
                                subLabel: (0, a.jsx)(i(109939).sA, {
                                    id: "pricingGrid.content.limitedForTwoPlus",
                                    defaultMessage: "limited for 2+ members"
                                })
                            },
                            plus: {
                                hasFeature: !0,
                                label: l
                            },
                            business: {
                                hasFeature: !0,
                                label: l
                            },
                            enterprise: {
                                hasFeature: !0,
                                label: l
                            }
                        }
                    }, A = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.fileUploads.title",
                            defaultMessage: "File uploads"
                        }),
                        tooltip: t.fileUploadsWithFreePlan,
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: (0, a.jsx)(i(109939).sA, {
                                    id: "pricingGrid.planAttribute.fileUploads.value.UpTo5MbFileUploadLimit",
                                    defaultMessage: "Up to 5 MB"
                                }, "pricingGrid.planAttribute.fileUploads.value.upTo5MbFileUploadLimit")
                            },
                            plus: {
                                hasFeature: !0,
                                label: l
                            },
                            business: {
                                hasFeature: !0,
                                label: l
                            },
                            enterprise: {
                                hasFeature: !0,
                                label: l
                            }
                        }
                    }, f = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.pageHistory.title",
                            defaultMessage: "Page history"
                        }, "pricingGrid.planAttribute.pageHistory.title"),
                        tooltip: t.pageHistory,
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: r.free.message
                            },
                            plus: {
                                hasFeature: !0,
                                label: r.plus.message
                            },
                            business: {
                                hasFeature: !0,
                                label: r.business.message
                            },
                            enterprise: {
                                hasFeature: !0,
                                label: r.enterprise.message
                            }
                        }
                    }, {
                        pagesAndBlocks: n,
                        fileUploads: A,
                        pageHistory: f,
                        verifiedPages: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.verifiedPages.titleMessage",
                                defaultMessage: "Verify any page"
                            }, "pricingGrid.planAttribute.verifiedPages.titleMessage"),
                            tooltip: t.verifiedPages,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        },
                        offline: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.offline.titleMessage",
                                defaultMessage: "Offline"
                            }, "pricingGrid.planAttribute.offline.titleMessage"),
                            tooltip: t.offline,
                            plans: {
                                free: {
                                    hasFeature: !0,
                                    label: (0, a.jsx)(i(109939).sA, {
                                        id: "pricingGrid.planAttribute.offline.value.choosePagesOffline",
                                        defaultMessage: "Choose pages to download for offline use."
                                    }, "pricingGrid.planAttribute.offline.value.choosePagesOffline")
                                },
                                plus: {
                                    hasFeature: !0,
                                    label: (0, a.jsx)(i(109939).sA, {
                                        id: "pricingGrid.planAttribute.offline.value.autoDownloadOffline",
                                        defaultMessage: "Recents and Favorites auto-download for offline use."
                                    }, "pricingGrid.planAttribute.offline.value.autoDownloadOffline")
                                },
                                business: {
                                    hasFeature: !0,
                                    label: (0, a.jsx)(i(109939).sA, {
                                        id: "pricingGrid.planAttribute.offline.value.autoDownloadOffline",
                                        defaultMessage: "Recents and Favorites auto-download for offline use."
                                    }, "pricingGrid.planAttribute.offline.value.autoDownloadOffline")
                                },
                                enterprise: {
                                    hasFeature: !0,
                                    label: (0, a.jsx)(i(109939).sA, {
                                        id: "pricingGrid.planAttribute.offline.value.autoDownloadOffline",
                                        defaultMessage: "Recents and Favorites auto-download for offline use."
                                    }, "pricingGrid.planAttribute.offline.value.autoDownloadOffline")
                                }
                            }
                        }
                    })
                }, P = {
                    label: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.comparisonSection.sharingAndCollaboration.title",
                        defaultMessage: "Sharing & collaboration"
                    }),
                    items: (M = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.guests.title.externalLimit",
                            defaultMessage: "External guest limit"
                        }),
                        tooltip: t.guests,
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: m.free
                            },
                            plus: {
                                hasFeature: !0,
                                label: m.plus
                            },
                            business: {
                                hasFeature: !0,
                                label: m.business
                            },
                            enterprise: {
                                hasFeature: !0,
                                label: m.enterprise
                            }
                        }
                    }, y = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.permissionGroups.title",
                            defaultMessage: "Permission groups"
                        }),
                        tooltip: t.permissionGroupsWithFree,
                        plans: {
                            free: {
                                hasFeature: !0
                            },
                            plus: {
                                hasFeature: !0
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, v = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.teamspacesSidebar.title",
                            defaultMessage: "Teamspaces (open & closed)"
                        }, "pricingGrid.planAttribute.teamspacesSidebar.title"),
                        tooltip: {
                            content: [(0, a.jsx)(i(109939).sA, {
                                id: "pricingPlanHelpers.planAttribute.teamspacesCustomizableSidebar.tooltip",
                                defaultMessage: "Create dedicated areas for folks to work together, without creating information silos. People can join the teamspaces that interest them, and leave the ones that don’t."
                            }, "pricingPlanHelpers.planAttribute.teamspacesCustomizableSidebar.tooltip")],
                            isOneLiner: !1
                        },
                        plans: {
                            free: {
                                hasFeature: !0
                            },
                            plus: {
                                hasFeature: !0
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, G = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.privateTeamspaces.title",
                            defaultMessage: "Teamspaces (private)"
                        }, "pricingGrid.planAttribute.privateTeamspaces.title"),
                        tooltip: {
                            content: [(0, a.jsx)(i(109939).sA, {
                                id: "pricingPlanHelpers.planAttribute.privateTeamspaces.tooltip",
                                defaultMessage: "Create teamspaces that can’t be seen or discovered by anyone except those you add. Great for sensitive information like company planning or performance reviews."
                            }, "pricingPlanHelpers.planAttribute.privateTeamspaces.tooltip")],
                            isOneLiner: !1
                        },
                        plans: {
                            free: {
                                hasFeature: !1
                            },
                            plus: {
                                hasFeature: !1
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, {
                        guests: M,
                        teamspacesOpenAndClosed: v,
                        teamspacesPrivate: G,
                        permissionGroups: y,
                        advancedTeamspacesPermissions: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.advancedTeamspaceControls.title",
                                defaultMessage: "Advanced teamspace permissions"
                            }, "pricingGrid.planAttribute.advancedTeamspaceControls.title"),
                            tooltip: {
                                content: [(0, a.jsx)(i(109939).sA, {
                                    id: "pricingPlanHelpers.planAttribute.advancedTeamspaceControls.tooltip",
                                    defaultMessage: "Override teamspace permissions for specific people or groups, giving you even more control over who has view vs. edit access to content."
                                }, "pricingPlanHelpers.planAttribute.advancedTeamspaceControls.tooltip")],
                                isOneLiner: !1
                            },
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        },
                        granularDatabasePermissions: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.granularDatabasePermissions.title",
                                defaultMessage: "Granular database permissions"
                            }, "pricingGrid.planAttribute.granularDatabasePermissions.title"),
                            tooltip: t.granularDatabasePermissions,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }
                    })
                }, H = {
                    label: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.comparisonSection.ai.title",
                        defaultMessage: "Notion AI"
                    }),
                    items: (x = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.usage.limitedTrial",
                        defaultMessage: "Limited Trial"
                    }), F = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionAi.core.titleMessage",
                            defaultMessage: "Notion AI Core (chat, generate, autofill, translate)"
                        }),
                        tooltip: t.notionAiCore,
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: x
                            },
                            plus: {
                                hasFeature: !0,
                                label: x
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, w = {
                        isBeta: !0,
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionAi.meetingNotes.titleMessage",
                            defaultMessage: "Meeting notes"
                        }),
                        tooltip: t.meetingNotes,
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: x
                            },
                            plus: {
                                hasFeature: !0,
                                label: x
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, j = {
                        isBeta: !1,
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionAi.notionAgent.titleMessage",
                            defaultMessage: "Notion Agent"
                        }),
                        tooltip: t.agent,
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: x
                            },
                            plus: {
                                hasFeature: !0,
                                label: x
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, k = () => [(0, i(378111).slackIcon)(o), (0, i(778434).gitHubIcon)(o), (0, i(898869).gmailIcon)(o), (0, i(933546).googleDriveIcon)(o)], L = () => [(0, i(330925).asanaIcon)(o), (0, i(382744).linearIcon)(o), (0, i(127201).U)(o)], S = (0, a.jsxs)(a.Fragment, {
                        children: [k(), L()]
                    }), C = (0, a.jsxs)(a.Fragment, {
                        children: [k(), (0, i(40242).microsoftOutlookIcon)(o), L()]
                    }), O = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionAi.enterpriseSearch.titleMessage",
                            defaultMessage: "Enterprise Search"
                        }),
                        tooltip: {
                            content: [(0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.notionAi.enterpriseSearch.tooltip",
                                defaultMessage: "Find quick answers using info across your Notion workspace, and connected tools like Slack, Microsoft Teams, GitHub and more."
                            }, "tooltip"), (0, a.jsx)("br", {}, "br"), (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.notionAi.enterpriseSearch.tooltip2",
                                defaultMessage: "Jira, MSFT Teams, SharePoint, OneDrive, and Asana are currently in Beta."
                            }, "tooltip2")],
                            isOneLiner: !1
                        },
                        hasPlansPagePricingGridQuestionMarkIcon: !0,
                        plans: {
                            free: {
                                hasFeature: !1
                            },
                            plus: {
                                hasFeature: !1
                            },
                            business: {
                                hasFeature: !0,
                                label: S
                            },
                            enterprise: {
                                hasFeature: !0,
                                label: C
                            }
                        }
                    }, I = {
                        isBeta: !0,
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionAi.researchMode.titleMessage",
                            defaultMessage: "Research mode"
                        }),
                        tooltip: {
                            content: [(0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.notionAi.researchMode.tooltip",
                                defaultMessage: "Uses deep reasoning to produce detailed reports using info across your Notion workspace, connected tools, and current info from the web."
                            }, "tooltip")],
                            isOneLiner: !1
                        },
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: x
                            },
                            plus: {
                                hasFeature: !0,
                                label: x
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, T = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.dataRetention.thirtyDayRetention",
                        defaultMessage: "30 day retention"
                    }), D = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionAi.dataRetention.titleMessage",
                            defaultMessage: "Data retention"
                        }),
                        tooltip: t.zeroDataRetention,
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: T
                            },
                            plus: {
                                hasFeature: !0,
                                label: T
                            },
                            business: {
                                hasFeature: !0,
                                label: T
                            },
                            enterprise: {
                                hasFeature: !0,
                                label: (0, a.jsx)(i(109939).sA, {
                                    id: "pricingGrid.planAttribute.dataRetention.zeroRetention",
                                    defaultMessage: "Zero data retention"
                                })
                            }
                        }
                    }, N = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.notionAi.customAgents.subLabel",
                        defaultMessage: "Requires AI credits"
                    }), {
                        core: F,
                        meetingNotes: w,
                        enterpriseSearch: O,
                        researchMode: I,
                        dataRetention: D,
                        agent: j,
                        customAgents: {
                            isBeta: !0,
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.notionAi.customAgents.titleMessage",
                                defaultMessage: "Custom Agents"
                            }),
                            tooltip: t.customAgents,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !0,
                                    subLabel: N
                                },
                                enterprise: {
                                    hasFeature: !0,
                                    subLabel: N
                                }
                            }
                        }
                    })
                }, z = {
                    label: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.comparisonSection.workAndTime.titleMessage.connectedApps",
                        defaultMessage: "Connected apps"
                    }),
                    items: (B = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.usage.limitedTrial",
                        defaultMessage: "Limited Trial"
                    }), U = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.NotionCalendar.title",
                            defaultMessage: "Notion Calendar"
                        }),
                        plans: {
                            free: {
                                hasFeature: !0
                            },
                            plus: {
                                hasFeature: !0
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        },
                        tooltip: t.notionCalendar
                    }, {
                        notionCalendar: U,
                        notionMail: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.NotionMail.title",
                                defaultMessage: "Notion Mail"
                            }),
                            plans: {
                                free: {
                                    hasFeature: !0
                                },
                                plus: {
                                    hasFeature: !0
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            },
                            tooltip: t.notionMail
                        },
                        notionMailAi: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.connectedApps.notionMailAi.titleMessage",
                                defaultMessage: "Notion Mail AI"
                            }),
                            tooltip: t.notionMailAi,
                            plans: {
                                free: {
                                    hasFeature: !0,
                                    label: B
                                },
                                plus: {
                                    hasFeature: !0,
                                    label: B
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }
                    })
                }, _ = {
                    label: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.comparisonSection.databaseFeatures.title",
                        defaultMessage: "Database features"
                    }),
                    items: (W = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.subtasks.title",
                            defaultMessage: "Subtasks and dependencies"
                        }),
                        tooltip: t.subtasks,
                        plans: {
                            free: {
                                hasFeature: !0
                            },
                            plus: {
                                hasFeature: !0
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, E = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.customProperties.title",
                            defaultMessage: "Custom properties and filtering"
                        }),
                        tooltip: t.customProperties,
                        plans: {
                            free: {
                                hasFeature: !0
                            },
                            plus: {
                                hasFeature: !0
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, R = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.value.limitOne",
                        defaultMessage: "1"
                    }), q = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.value.unlimitedMembers",
                        defaultMessage: "Unlimited"
                    }), V = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.charts.title",
                            defaultMessage: "Charts"
                        }),
                        tooltip: t.charts,
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: R
                            },
                            plus: {
                                hasFeature: !0,
                                label: q
                            },
                            business: {
                                hasFeature: !0,
                                label: q
                            },
                            enterprise: {
                                hasFeature: !0,
                                label: q
                            }
                        }
                    }, Y = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.connectedApps.forms.custom.label",
                        defaultMessage: "Custom"
                    }), K = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.connectedApps.forms.custom.subLabel",
                        defaultMessage: "+ conditional logic"
                    }), {
                        subtasks: W,
                        customProperties: E,
                        charts: V,
                        forms: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.forms.title",
                                defaultMessage: "Forms"
                            }),
                            tooltip: t.forms,
                            plans: {
                                free: {
                                    hasFeature: !0,
                                    label: (0, a.jsx)(i(109939).sA, {
                                        id: "pricingGrid.connectedApps.forms.free.label",
                                        defaultMessage: "Basic"
                                    })
                                },
                                plus: {
                                    hasFeature: !0,
                                    label: Y
                                },
                                business: {
                                    hasFeature: !0,
                                    label: Y,
                                    subLabel: K
                                },
                                enterprise: {
                                    hasFeature: !0,
                                    label: Y,
                                    subLabel: K
                                }
                            }
                        },
                        dashboards: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.dashboards.title",
                                defaultMessage: "Dashboards"
                            }),
                            tooltip: t.dashboards,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }
                    })
                }, er = {
                    label: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttributes.apiAndIntegrations.title",
                        defaultMessage: "API automations & integrations"
                    }),
                    items: (J = (0, i(933546).googleDriveIcon)(o), $ = (0, a.jsxs)(a.Fragment, {
                        children: [(0, i(581923).plusIcon)(o), (0, i(92915).figmaIcon)(o), (0, i(778434).gitHubIcon)(o), (0, i(527427).zendeskIcon)(o)]
                    }), Q = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.sameAsPlus",
                        defaultMessage: "Same as plus"
                    }), Z = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.sameAsBusiness",
                        defaultMessage: "Same as business"
                    }), X = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.planAttribute.automations.databaseAutomations",
                        defaultMessage: "database automations"
                    }), ee = (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.connectedApps.forms.custom.label",
                        defaultMessage: "Custom"
                    }), et = (0, a.jsxs)(a.Fragment, {
                        children: [(0, i(330925).asanaIcon)(o), (0, i(778434).gitHubIcon)(o), (0, i(117073).jiraIcon)(o), (0, i(397402).gitLabIcon)(o)]
                    }), ei = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.publicApi.title",
                            defaultMessage: "Public API"
                        }),
                        tooltip: t.publicApi,
                        plans: {
                            free: {
                                hasFeature: !0
                            },
                            plus: {
                                hasFeature: !0
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, es = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.webhooks.title",
                            defaultMessage: "Webhooks"
                        }),
                        tooltip: t.webhooks,
                        plans: {
                            free: {
                                hasFeature: !0
                            },
                            plus: {
                                hasFeature: !0
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, ea = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.linkPreviews.title.embeds",
                            defaultMessage: "Embeds and link previews"
                        }),
                        tooltip: t.dynamicLinkPreviews,
                        plans: {
                            free: {
                                hasFeature: !0
                            },
                            plus: {
                                hasFeature: !0
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, en = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.ApiAdminControls.title.connectedProperties",
                            defaultMessage: "Connected properties"
                        }),
                        tooltip: t.connections,
                        plans: {
                            free: {
                                hasFeature: !1
                            },
                            plus: {
                                hasFeature: !0,
                                label: J
                            },
                            business: {
                                hasFeature: !0,
                                label: $
                            },
                            enterprise: {
                                hasFeature: !0,
                                label: Z
                            }
                        }
                    }, {
                        publicApi: ei,
                        webhooks: es,
                        dynamicLinkPreviews: ea,
                        connections: en,
                        automations: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.automations.title",
                                defaultMessage: "Automations"
                            }),
                            tooltip: {
                                content: [(0, a.jsx)(i(109939).sA, {
                                    id: "pricingGrid.planAttribute.automations.tooltip",
                                    defaultMessage: "Automatically create pages and new blocks, set status, assignee, and property values, and more."
                                }, "tooltip")],
                                isOneLiner: !1
                            },
                            plans: {
                                free: {
                                    hasFeature: !0,
                                    label: (0, a.jsx)(i(109939).sA, {
                                        id: "pricingGrid.planAttribute.automations.free.label",
                                        defaultMessage: "Basic"
                                    }),
                                    subLabel: (0, a.jsx)(i(109939).sA, {
                                        id: "pricingGrid.planAttribute.automations.free.subLabel",
                                        defaultMessage: "buttons only"
                                    })
                                },
                                plus: {
                                    hasFeature: !0,
                                    label: ee,
                                    subLabel: X
                                },
                                business: {
                                    hasFeature: !0,
                                    label: Q
                                },
                                enterprise: {
                                    hasFeature: !0,
                                    label: Q
                                }
                            }
                        },
                        syncedDatabases: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.oneWaySyncedDatabases.title",
                                defaultMessage: "1-way database syncs"
                            }),
                            isBeta: !1,
                            tooltip: t.syncedDatabasesWithFree,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !0,
                                    label: et
                                },
                                enterprise: {
                                    hasFeature: !0,
                                    label: Z
                                }
                            }
                        }
                    })
                }, ep = {
                    label: (0, a.jsx)(i(109939).sA, {
                        id: "pricingGrid.comparisonSection.webPublishing.titleMessage",
                        defaultMessage: "Web publishing"
                    }),
                    items: (eo = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.unlimitedPublishedPages.title",
                            defaultMessage: "Unlimited published pages"
                        }),
                        tooltip: t.unlimitedPublishedPages,
                        plans: {
                            free: {
                                hasFeature: !0
                            },
                            plus: {
                                hasFeature: !0
                            },
                            business: {
                                hasFeature: !0
                            },
                            enterprise: {
                                hasFeature: !0
                            }
                        }
                    }, el = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.notionSitesDomains.title2",
                            defaultMessage: "notion.site domains"
                        }),
                        tooltip: t.notionSitesDomains,
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: p
                            },
                            plus: {
                                hasFeature: !0,
                                label: u
                            },
                            business: {
                                hasFeature: !0,
                                label: u
                            },
                            enterprise: {
                                hasFeature: !0,
                                label: u
                            }
                        }
                    }, ed = {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.planAttribute.searchEngineIndexing.title",
                            defaultMessage: "Search engine indexing (SEO)"
                        }),
                        tooltip: t.searchEngineIndexing,
                        plans: {
                            free: {
                                hasFeature: !0,
                                label: c
                            },
                            plus: {
                                hasFeature: !0,
                                label: g
                            },
                            business: {
                                hasFeature: !0,
                                label: g
                            },
                            enterprise: {
                                hasFeature: !0,
                                label: g
                            }
                        }
                    }, {
                        unlimitedPublishedPages: eo,
                        notionSitesDomains: el,
                        searchEngineIndexing: ed,
                        siteCustomizations: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.siteCustomizations.title",
                                defaultMessage: "Site customizations"
                            }),
                            tooltip: t.siteCustomizations,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !0
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        },
                        customDomainsAndBranding: {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.customDomainsBranding.title",
                                defaultMessage: "Custom domains and branding"
                            }),
                            tooltip: t.customDomainsBranding,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !0,
                                    label: b
                                },
                                business: {
                                    hasFeature: !0,
                                    label: b
                                },
                                enterprise: {
                                    hasFeature: !0,
                                    label: b
                                }
                            }
                        }
                    })
                }, {
                    pricingGridContent: h,
                    sharingAndCollaboration: P,
                    notionAi: H,
                    connectedApps: z,
                    databaseFeatures: _,
                    apiAndIntegrations: er,
                    webPublishing: ep,
                    adminAndSecurity: {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.comparisonSection.adminAndSecurityFeatures.titleMessage",
                            defaultMessage: "Admin & security"
                        }),
                        items: (eu = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.bulkExportAsHtmlMarkdownAndCsv.title",
                                defaultMessage: "Export entire workspace as HTML, Markdown, & CSV"
                            }),
                            tooltip: t.bulkExportAsHtmlMarkdownAndCsv,
                            plans: {
                                free: {
                                    hasFeature: !0
                                },
                                plus: {
                                    hasFeature: !0
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, ec = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.twoStepVerification.title",
                                defaultMessage: "2-step verification"
                            }),
                            tooltip: t.twoStepVerification,
                            plans: {
                                free: {
                                    hasFeature: !0
                                },
                                plus: {
                                    hasFeature: !0
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, eg = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.bulkExportAsPdf.title",
                                defaultMessage: "Export entire workspace as PDF"
                            }),
                            tooltip: t.bulkExportAsPdf,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, em = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.sso.title",
                                defaultMessage: "SAML single sign-on (SSO)"
                            }),
                            tooltip: t.sso,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, eb = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.scim.title",
                                defaultMessage: "User provisioning (SCIM)"
                            }),
                            tooltip: t.scim,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, eA = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.advancedWorkspaceAndTeamspaceControls.title",
                                defaultMessage: "Advanced workspace & teamspace security controls"
                            }),
                            tooltip: t.advancedSecurity,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, ef = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.orgControls.title",
                                defaultMessage: "Organization level controls"
                            }),
                            tooltip: {
                                content: [(0, a.jsx)(i(109939).sA, {
                                    id: "pricingGrid.planAttribute.orgControls.tooltip",
                                    defaultMessage: "Organization level controls"
                                }, "tooltip")],
                                isOneLiner: !1
                            },
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, eh = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.workspaceAnalytics.title",
                                defaultMessage: "Workspace analytics"
                            }),
                            tooltip: t.workspaceAnalytics,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, eM = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.granularAdminRoles.title",
                                defaultMessage: "Granular admin roles"
                            }),
                            tooltip: t.granularAdminControls,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, ey = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.auditLog.title",
                                defaultMessage: "Audit log"
                            }),
                            tooltip: t.auditLog,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, ev = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.adminContentSearch.title",
                                defaultMessage: "Admin content search"
                            }),
                            tooltip: t.adminContentSearch,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, eG = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.domainManagement.title",
                                defaultMessage: "Domain Management"
                            }),
                            tooltip: t.domainManagement,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, eP = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.WorkspaceConsolidation.title",
                                defaultMessage: "Workspace consolidation"
                            }),
                            tooltip: t.workspaceConsolidation,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, ex = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.visibilityAndControlsForManagedUsers.title",
                                defaultMessage: "Managed users dashboard & controls"
                            }),
                            tooltip: t.managedUsers,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, eF = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.securityAndComplianceIntegrations.title",
                                defaultMessage: "Security & Compliance integrations"
                            }),
                            tooltip: t.securityCompliance,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, ew = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.guestInviteRequests.title",
                                defaultMessage: "Guest invite requests"
                            }),
                            tooltip: t.guestInviteRequest,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !1
                                },
                                business: {
                                    hasFeature: !1
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, {
                            bulkExportAsHtmlMarkdownAndCsv: eu,
                            twoStepVerification: ec,
                            bulkExportAsPdf: eg,
                            sso: em,
                            scim: eb,
                            advancedSecurity: eA,
                            organizationLevelControls: ef,
                            workspaceAnalytics: eh,
                            granularAdminControls: eM,
                            auditLog: ey,
                            adminContentSearch: ev,
                            domainManagement: eG,
                            workspaceConsolidation: eP,
                            managedUsers: ex,
                            securityCompliance: eF,
                            guestInviteRequest: ew,
                            customDataRetention: {
                                label: (0, a.jsx)(i(109939).sA, {
                                    id: "pricingGrid.planAttribute.customDataRetention.title",
                                    defaultMessage: "Custom data retention settings"
                                }),
                                tooltip: t.customDataRetention,
                                plans: {
                                    free: {
                                        hasFeature: !1
                                    },
                                    plus: {
                                        hasFeature: !1
                                    },
                                    business: {
                                        hasFeature: !1
                                    },
                                    enterprise: {
                                        hasFeature: !0
                                    }
                                }
                            },
                            transcriptDeletion: {
                                label: (0, a.jsx)(i(109939).sA, {
                                    id: "pricingGrid.planAttribute.transcriptDeletion.title",
                                    defaultMessage: "AI Meeting Notes transcript deletion"
                                }),
                                tooltip: {
                                    content: [(0, a.jsx)(i(109939).sA, {
                                        id: "pricingGrid.planAttribute.transcriptDeletion.tooltip",
                                        defaultMessage: "Admins can auto-delete AI meeting transcripts on a customizable schedule to meet your data retention policies."
                                    }, "tooltip")],
                                    isOneLiner: !1
                                },
                                plans: {
                                    free: {
                                        hasFeature: !1
                                    },
                                    plus: {
                                        hasFeature: !1
                                    },
                                    business: {
                                        hasFeature: !1
                                    },
                                    enterprise: {
                                        hasFeature: !0
                                    }
                                }
                            }
                        })
                    },
                    support: {
                        label: (0, a.jsx)(i(109939).sA, {
                            id: "pricingGrid.comparisonSection.support.titleMessage",
                            defaultMessage: "Support"
                        }),
                        items: (ej = {
                            label: (0, a.jsx)(i(109939).sA, {
                                id: "pricingGrid.planAttribute.prioritySupport.title",
                                defaultMessage: "Priority support"
                            }),
                            tooltip: t.prioritySupportWithFree,
                            plans: {
                                free: {
                                    hasFeature: !1
                                },
                                plus: {
                                    hasFeature: !0
                                },
                                business: {
                                    hasFeature: !0
                                },
                                enterprise: {
                                    hasFeature: !0
                                }
                            }
                        }, {
                            prioritySupportWithFree: ej,
                            premiumSupport: {
                                label: (0, a.jsx)(i(109939).sA, {
                                    id: "pricingGrid.planAttribute.premiumSupport.title",
                                    defaultMessage: "Premium support"
                                }),
                                tooltip: t.premiumSupport,
                                plans: {
                                    free: {
                                        hasFeature: !1
                                    },
                                    plus: {
                                        hasFeature: !1
                                    },
                                    business: {
                                        hasFeature: !1
                                    },
                                    enterprise: {
                                        hasFeature: !0,
                                        label: d
                                    }
                                }
                            },
                            customerSuccessManager: {
                                label: (0, a.jsx)(i(109939).sA, {
                                    id: "pricingGrid.planAttribute.customerSuccessManager.title",
                                    defaultMessage: "Customer success manager"
                                }),
                                tooltip: t.customerSuccessManager,
                                plans: {
                                    free: {
                                        hasFeature: !1
                                    },
                                    plus: {
                                        hasFeature: !1
                                    },
                                    business: {
                                        hasFeature: !1
                                    },
                                    enterprise: {
                                        hasFeature: !0,
                                        label: d
                                    }
                                }
                            }
                        })
                    }
                }), e)).map(e => ({ ...e,
                    items: Object.values(e.items)
                }))
            }
        },
        115583: (e, t, i) => {
            i.d(t, {
                P: () => s
            });
            let s = (0, i(109939).YK)({
                request: {
                    id: "upgradeRequest.inAppRequests.request",
                    defaultMessage: "Request"
                },
                pending: {
                    id: "upgradeRequest.inAppRequests.requestPending",
                    defaultMessage: "Pending"
                },
                approved: {
                    id: "upgradeRequest.inAppRequests.requestApproved",
                    defaultMessage: "Approved"
                },
                declined: {
                    id: "upgradeRequest.inAppRequests.requestDeclined",
                    defaultMessage: "Declined"
                },
                requestPendingTooltip: {
                    id: "upgradeRequest.inAppRequests.requestPendingTooltip",
                    defaultMessage: "You’ve already sent a request to your workspace owners"
                }
            })
        },
        387786: (e, t, i) => {
            i.d(t, {
                g: () => s
            });
            let s = (0, i(104509).xh)("checkmarkCircle", {
                default: {
                    loader: () => i.e(44032).then(i.bind(i, 853160))
                },
                small: {
                    loader: () => i.e(44032).then(i.bind(i, 437102))
                },
                fill: {
                    loader: () => i.e(44032).then(i.bind(i, 93042))
                },
                fillSmall: {
                    loader: () => i.e(44032).then(i.bind(i, 574657))
                }
            }, ["check", "mark", "tick", "confirm", "approve"])
        },
        397402: (e, t, i) => {
            i.r(t), i.d(t, {
                gitLabIcon: () => n,
                iconDefinition: () => a
            }), i(296540);
            var s = i(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1 1.33 18.01 17.34",
                    svg: (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("path", {
                            fill: "#E24329",
                            d: "m18.7 8.192-.025-.065-2.45-6.394a.64.64 0 0 0-.633-.401.66.66 0 0 0-.369.138.66.66 0 0 0-.217.33l-1.654 5.06H6.653L5 1.8a.64.64 0 0 0-.218-.331.66.66 0 0 0-.75-.04.64.64 0 0 0-.251.303L1.325 8.123l-.024.065a4.55 4.55 0 0 0 1.509 5.258l.008.007.022.015 3.733 2.795 1.846 1.398 1.125.849a.756.756 0 0 0 .914 0l1.125-.85 1.846-1.397 3.755-2.812.01-.007A4.55 4.55 0 0 0 18.7 8.192"
                        }), (0, s.jsx)("path", {
                            fill: "#FC6D26",
                            d: "m18.7 8.192-.025-.065a8.3 8.3 0 0 0-3.294 1.48L10 13.678c1.832 1.386 3.428 2.59 3.428 2.59l3.754-2.812.01-.007A4.55 4.55 0 0 0 18.7 8.192"
                        }), (0, s.jsx)("path", {
                            fill: "#FCA326",
                            d: "m6.573 16.267 1.846 1.398 1.125.849a.756.756 0 0 0 .914 0l1.125-.85 1.846-1.397s-1.597-1.208-3.429-2.59c-1.832 1.382-3.427 2.59-3.427 2.59"
                        }), (0, s.jsx)("path", {
                            fill: "#FC6D26",
                            d: "M4.618 9.608a8.3 8.3 0 0 0-3.293-1.485l-.024.065a4.55 4.55 0 0 0 1.509 5.258l.008.006.022.016 3.733 2.795L10 13.673z"
                        })]
                    })
                },
                n = (0, i(104509).wt)("gitLab", a, "default")
        },
        527427: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => a,
                zendeskIcon: () => n
            }), i(296540);
            var s = i(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1 3.14 18.01 13.71",
                    svg: (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("g", {
                            className: "logo-light-mode",
                            children: (0, s.jsx)("path", {
                                fill: "#000",
                                d: "M9.298 6.778v10.073H1zm0-3.633a4.16 4.16 0 0 1-4.17 4.17C2.817 7.315 1 5.457 1 3.145zm1.363 13.665a4.16 4.16 0 0 1 4.17-4.17A4.16 4.16 0 0 1 19 16.81zm0-3.592V3.145H19z"
                            })
                        }), (0, s.jsx)("g", {
                            className: "logo-dark-mode",
                            children: (0, s.jsx)("path", {
                                fill: "#fff",
                                d: "M9.298 6.778v10.073H1zm0-3.633a4.16 4.16 0 0 1-4.17 4.17C2.817 7.315 1 5.457 1 3.145zm1.363 13.665a4.16 4.16 0 0 1 4.17-4.17A4.16 4.16 0 0 1 19 16.81zm0-3.592V3.145H19z"
                            })
                        })]
                    })
                },
                n = (0, i(104509).wt)("zendesk", a, "default")
        },
        795631: (e, t, i) => {
            i.d(t, {
                B: () => n
            });
            var s = i(296540),
                a = i(474848);

            function n(e) {
                let {
                    children: t,
                    title: n,
                    displayMode: r,
                    showDismissButtonBackground: o
                } = e, l = (0, s.useContext)(i(19187).e);
                switch (r) {
                    case "phone":
                        return (0, a.jsx)(i(747369).A, {
                            menuType: i(649476).gu.Modal,
                            onClickRight: l,
                            title: n,
                            whiteBackground: !0,
                            disableBottomPadding: !0,
                            right: l ? (0, a.jsx)(i(109939).sA, {
                                defaultMessage: "Done",
                                id: "appearanceSettings.modal.done"
                            }) : null,
                            children: t
                        });
                    case "desktop":
                        return (0, a.jsxs)(a.Fragment, {
                            children: [t, (0, a.jsx)(i(226512).R, {
                                showBackground: o
                            })]
                        });
                    default:
                        (0, i(722371).HB)(r)
                }
            }
        },
        849483: (e, t, i) => {
            i.d(t, {
                qY: () => m,
                r0: () => u,
                lh: () => A,
                dJ: () => g,
                d9: () => o,
                lY: () => j,
                Fz: () => w,
                yK: () => f,
                ab: () => F,
                tE: () => c,
                X8: () => l,
                $m: () => n,
                QR: () => d,
                P$: () => r
            });
            let s = i.p + "f6312fd4cd8217ce.png",
                a = i.p + "a9c59c32b6df48a5.png",
                n = ["free", "plus", "business", "enterprise"],
                r = (0, i(109939).YK)({
                    advancedAIButtonTooltip: {
                        id: "ProductLimit.advancedAIButtonTooltip",
                        defaultMessage: "Upgrade to Business"
                    },
                    advancedAIButtonMemberTooltipPrimary: {
                        id: "ProductLimit.advancedAIButtonMemberTooltipPrimary",
                        defaultMessage: "Request access to Advanced AI features on the Business Plan"
                    },
                    advancedAIButtonMemberTooltipSecondary: {
                        id: "ProductLimit.advancedAIButtonMemberTooltipSecondary",
                        defaultMessage: "Get AI Meeting Notes, Enterprise Search, and Research Mode"
                    },
                    coreAIButtonTooltip: {
                        id: "ProductLimit.coreAIButtonTooltip",
                        defaultMessage: "Upgrade with the AI Add On to access Notion AI for Writer, Q&A and foundational AI features"
                    },
                    upgrade: {
                        id: "ProductLimit.upgrade",
                        defaultMessage: "Upgrade"
                    },
                    addToPlan: {
                        id: "ProductLimit.addToPlan",
                        defaultMessage: "Add to plan"
                    },
                    contactSalesSalesAssisted: {
                        id: "ProductLimit.contactSalesSalesAssisted",
                        defaultMessage: "Contact sales"
                    },
                    advancedAILabel: {
                        id: "ProductLimit.advancedAILabel",
                        defaultMessage: "Advanced Notion AI"
                    },
                    advancedAIUpsellDescription: {
                        id: "ProductLimit.advancedAIUpsellDescription",
                        defaultMessage: "Upgrade to search everywhere, automate meeting notes & more"
                    },
                    advancedAIDescription: {
                        id: "ProductLimit.advancedAIDescription",
                        defaultMessage: "Search everywhere, automate meeting notes & more"
                    },
                    coreAILabel: {
                        id: "ProductLimit.coreAILabel",
                        defaultMessage: "Notion AI"
                    },
                    aiLabel: {
                        id: "ProductLimit.aiLabel",
                        defaultMessage: "Notion AI"
                    },
                    coreAIDescription: {
                        id: "ProductLimit.coreAIDescription",
                        defaultMessage: "Upgrade to search everywhere, automate meeting notes & more"
                    },
                    activePlan: {
                        id: "ProductLimit.activePlan",
                        defaultMessage: "Your current plan"
                    },
                    aiAddOnHeading: {
                        id: "ProductLimit.aiAddOnLabel",
                        defaultMessage: "Notion AI"
                    },
                    aiTierHeading: {
                        id: "ProductLimit.aiTierLabel",
                        defaultMessage: "Notion AI"
                    },
                    aiSettings: {
                        id: "ProductLimit.aiSettings",
                        defaultMessage: "Settings"
                    },
                    aiAddOnTooltip: {
                        id: "ProductLimit.aiAddOnTooltip",
                        defaultMessage: "Your workspace currently has access to Notion AI core features only. Upgrade to Business to get the full set of advanced features."
                    },
                    aiBusinessTierTooltip: {
                        id: "ProductLimit.aiBusinessTierTooltip",
                        defaultMessage: "Included with the Business Plan"
                    },
                    aiEnterpriseLimitedTierTooltip: {
                        id: "ProductLimit.aiEnterpriseTierTooltip",
                        defaultMessage: "Included with the Enterprise Limited Plan"
                    },
                    aiAddOnUsage: {
                        id: "ProductLimit.aiAddOnUsage",
                        defaultMessage: "{usedCount}/{totalCount} AI responses used"
                    },
                    aiAddedToPlan: {
                        id: "ProductLimit.aiAddedToPlan",
                        defaultMessage: "Added to plan"
                    },
                    aiIncludedInPlan: {
                        id: "ProductLimit.aiIncludedInPlan",
                        defaultMessage: "Included in plan"
                    },
                    otherPlans: {
                        id: "ProductLimit.otherPlans",
                        defaultMessage: "Other plans to consider"
                    },
                    teamBlocksLabel: {
                        id: "ProductLimit.teamBlocksLabel",
                        defaultMessage: "Team blocks"
                    },
                    teamBlocksUsage: {
                        id: "ProductLimit.teamBlocksUsage",
                        defaultMessage: "{usedCount}/{totalCount} team blocks used"
                    },
                    restrictions: {
                        id: "ProductLimit.downgrade",
                        defaultMessage: "Downgrade"
                    },
                    ctaPrice: {
                        id: "SpaceSubscriptionPlans.productCta",
                        defaultMessage: "From {money}/member per month"
                    },
                    ctaButtonLabel: {
                        id: "SpaceSubscriptionPlans.productCtaButtonLabel",
                        defaultMessage: "Upgrade"
                    },
                    unlimitedBlocksForIndividuals: {
                        id: "SpaceSubscriptionPlans.includes.unlimitedBlocksForIndividuals",
                        defaultMessage: "Unlimited blocks for individuals"
                    },
                    unlimitedBlocksForTeams: {
                        id: "SpaceSubscriptionPlans.includes.unlimitedBlocksForTeams",
                        defaultMessage: "Unlimited blocks for teams"
                    },
                    unlimitedFileUploads: {
                        id: "SpaceSubscriptionPlans.includes.unlimitedFileUploads",
                        defaultMessage: "Unlimited file uploads"
                    },
                    collaborativeWorkspace: {
                        id: "SpaceSubscriptionPlans.includes.collaborativeWorkspaces",
                        defaultMessage: "Collaborative workspace"
                    },
                    integrations: {
                        id: "SpaceSubscriptionPlans.includes.integrations",
                        defaultMessage: "Slack, GitHub, and more integrations"
                    },
                    pageHistory7Days: {
                        id: "SpaceSubscriptionPlans.includes.pageHistory.7",
                        defaultMessage: "7 day page history"
                    },
                    pageHistory30Days: {
                        id: "SpaceSubscriptionPlans.includes.pageHistory.30",
                        defaultMessage: "30 day page history"
                    },
                    pageHistory90Days: {
                        id: "SpaceSubscriptionPlans.includes.pageHistory.90",
                        defaultMessage: "90 day page history"
                    },
                    pageHistoryUnlimited: {
                        id: "SpaceSubscriptionPlans.includes.pageHistory.unlimited",
                        defaultMessage: "Unlimited page history"
                    },
                    guests10: {
                        id: "SpaceSubscriptionPlans.includes.guests.10",
                        defaultMessage: "Invite up to 10 guests"
                    },
                    guests100: {
                        id: "SpaceSubscriptionPlans.includes.guests.100",
                        defaultMessage: "Invite up to 100 guests"
                    },
                    guests250: {
                        id: "SpaceSubscriptionPlans.includes.guests.250",
                        defaultMessage: "Invite up to 250 guests"
                    },
                    guestsCustom: {
                        id: "SpaceSubscriptionPlans.includes.guests.custom",
                        defaultMessage: "Custom guest limits"
                    },
                    aiCredits: {
                        id: "SpaceSubscriptionPlans.includes.aiCredits",
                        defaultMessage: "10 free Notion credits"
                    },
                    samlSSO: {
                        id: "SpaceSubscriptionPlans.includes.saml.sso",
                        defaultMessage: "SAML SSO"
                    },
                    userProvisioning: {
                        id: "SpaceSubscriptionPlans.includes.scim",
                        defaultMessage: "User provisioning (SCIM)"
                    },
                    advancedSecurityControls: {
                        id: "SpaceSubscriptionPlans.includes.advancedSecurityControls",
                        defaultMessage: "Advanced security controls"
                    },
                    auditLog: {
                        id: "SpaceSubscriptionPlans.includes.auditLog",
                        defaultMessage: "Audit log"
                    },
                    privateTeamspaces: {
                        id: "SpaceSubscriptionPlans.includes.privateTeamspaces",
                        defaultMessage: "Private Teamspaces"
                    },
                    bulkPdfExport: {
                        id: "SpaceSubscriptionPlans.includes.bulkPdfExport",
                        defaultMessage: "Bulk PDF export"
                    },
                    customerSuccessManager: {
                        id: "SpaceSubscriptionPlans.includes.customerSuccessManager",
                        defaultMessage: "Customer success manager"
                    },
                    includesFree: {
                        id: "SpaceSubscriptionPlans.includes.free",
                        defaultMessage: "Includes"
                    },
                    includesPlus: {
                        id: "SpaceSubscriptionPlans.includes.plus",
                        defaultMessage: "Everything in Free"
                    },
                    includesBusiness: {
                        id: "SpaceSubscriptionPlans.includes.business",
                        defaultMessage: "Everything in Plus"
                    },
                    includesEnterprise: {
                        id: "SpaceSubscriptionPlans.includes.enterprise",
                        defaultMessage: "Everything in Business"
                    },
                    seeAllPlans: {
                        id: "SpaceSubscriptionPlans.seeAllPlans",
                        defaultMessage: "See all plans"
                    },
                    allPlans: {
                        id: "spaceSubscriptionPlans.allPlans.title",
                        defaultMessage: "Compare all plans"
                    },
                    salesAssistedDisabled: {
                        id: "spaceSubscriptionPlans.referToSalesRep",
                        defaultMessage: "Please contact your Notion account manager to make changes to your plan"
                    },
                    contactSales: {
                        id: "SpaceSubscriptionPlans.contactSales",
                        defaultMessage: "Contact Sales"
                    },
                    talkToSales: {
                        id: "SpaceSubscriptionPlans.talkToSales",
                        defaultMessage: "Talk to sales to learn more"
                    }
                }),
                o = (0, i(109939).YK)({
                    free: {
                        id: "ProductOverview.mayMoment.free.caption",
                        defaultMessage: "Organize every corner of your work and life"
                    },
                    personal: {
                        id: "ProductOverview.mayMoment.personal.caption",
                        defaultMessage: "A place to plan and get organized, with a 1-member limit"
                    },
                    plus: {
                        id: "ProductOverview.mayMoment.plus.caption",
                        defaultMessage: "For small groups to plan and get organized"
                    },
                    business: {
                        id: "ProductOverview.mayMoment.business.caption",
                        defaultMessage: "The connected workspace with all-in-one AI"
                    },
                    student: {
                        id: "ProductOverview.mayMoment.student.caption",
                        defaultMessage: "For students & educators"
                    },
                    enterprise: {
                        id: "ProductOverview.mayMoment.enterprise.caption",
                        defaultMessage: "For organizations to operate with scalability, control & security"
                    }
                }),
                l = {
                    free: r.includesFree,
                    student: r.includesPlus,
                    plus: r.includesPlus,
                    personal: r.includesPlus,
                    business: r.includesBusiness,
                    enterprise: r.includesEnterprise
                },
                d = (0, i(109939).YK)({
                    summary: {
                        id: "plansPage.highlightCards.summary",
                        defaultMessage: "Summary"
                    },
                    highlights: {
                        id: "plansPage.highlightCards.highlights",
                        defaultMessage: "Highlights"
                    },
                    compareAllFeatures: {
                        id: "plansPage.compareAllFeatures.button.label",
                        defaultMessage: "Compare all features"
                    },
                    price: {
                        id: "plansPage.price",
                        defaultMessage: "{money} per member / month"
                    },
                    priceOnTrial: {
                        id: "plansPage.price.onTrial",
                        defaultMessage: "{money} per member until {date}"
                    },
                    billedAnnually: {
                        id: "plansPage.billedAnnually",
                        defaultMessage: "billed annually"
                    },
                    billedMonthly: {
                        id: "plansPage.billedMonthly",
                        defaultMessage: "billed monthly"
                    },
                    priceMonthly: {
                        id: "plansPage.price.monthly",
                        defaultMessage: "{money} billed monthly"
                    }
                }),
                p = (0, i(109939).YK)({
                    free: {
                        id: "plansPage.activePlan.free.description",
                        defaultMessage: "For organizing every corner of your work and life"
                    },
                    student: {
                        id: "plansPage.activePlan.student.description",
                        defaultMessage: "For students & educators"
                    },
                    personal: {
                        id: "plansPage.activePlan.personal.description",
                        defaultMessage: "A place to plan and get organized, with a 1-member limit"
                    },
                    personalForIos: {
                        id: "plansPage.activePlan.personal.ios.description",
                        defaultMessage: "Purchased in-app, through Apple"
                    },
                    personalForAndroid: {
                        id: "plansPage.activePlan.personal.android.description",
                        defaultMessage: "Purchased in-app, through Google Play"
                    },
                    plus: {
                        id: "plansPage.activePlan.plus.description.afterMayMoment",
                        defaultMessage: "For small teams and professionals to work together"
                    },
                    business: {
                        id: "plansPage.activePlan.business.description.afterMayMoment",
                        defaultMessage: "The connected workspace with all-in-one AI"
                    },
                    businessTrial: {
                        id: "plansPage.activePlan.business.description.trialAfterMayMoment",
                        defaultMessage: "30 days of Notion AI and other Business features"
                    },
                    enterprise: {
                        id: "plansPage.activePlan.enterprise.description.afterMayMoment",
                        defaultMessage: "For organizations to operate with scalability, control & security"
                    }
                }),
                u = (0, i(109939).YK)({
                    singlePlayerPlans: {
                        id: "plansPage.activePlan.generic.tooltip",
                        defaultMessage: "Your plan has a 1-member limit. Switch your plan to add more members."
                    },
                    iosPlans: {
                        id: "plansPage.activePlan.personal.ios.tooltip",
                        defaultMessage: "Your plan has a 1-member limit. You can cancel this plan through Apple Subscriptions, and then upgrade in Notion."
                    },
                    androidPlans: {
                        id: "plansPage.activePlan.personal.android.tooltip",
                        defaultMessage: "Your plan has a 1-member limit. You can cancel this plan through Google Play, and then upgrade in Notion."
                    }
                }),
                c = {
                    label: i(262166).v0.personalForIos,
                    description: p.personalForIos,
                    tooltip: u.iosPlans
                },
                g = {
                    label: i(262166).v0.personalForAndroid,
                    description: p.personalForAndroid,
                    tooltip: u.androidPlans
                },
                m = {
                    free: {
                        label: i(262166).v0.free,
                        description: p.free
                    },
                    student: {
                        label: i(262166).v0.educationPlus,
                        description: p.student
                    },
                    personal: {
                        label: i(262166).v0.plus,
                        description: p.personal,
                        tooltip: u.singlePlayerPlans
                    },
                    plus: {
                        label: i(262166).v0.plus,
                        description: p.plus
                    },
                    business: {
                        label: i(262166).v0.business,
                        description: p.business
                    },
                    businessTrial: {
                        label: i(262166).v0.business,
                        description: p.businessTrial
                    },
                    enterprise: {
                        label: i(262166).v0.enterprise,
                        description: p.enterprise
                    },
                    enterprise_limited: {
                        label: i(262166).v0.enterpriseLimited,
                        description: p.enterprise
                    }
                },
                b = (0, i(109939).YK)({
                    description: {
                        id: "plansPage.aiSection.description",
                        defaultMessage: "Notion AI for Q&A, Autofill, Writer, and more"
                    },
                    descriptionV2: {
                        id: "plansPage.aiSection.descriptionV2",
                        defaultMessage: "Search, generate, analyze, and chat with Notion AI"
                    },
                    price: {
                        id: "plansPage.aiSection.price",
                        defaultMessage: "From {money} per member / month, billed annually"
                    },
                    added: {
                        id: "plansPage.aiSection.added",
                        defaultMessage: "Added"
                    },
                    mailAIDescription: {
                        id: "plansPage.aiSection.mailAIDescription",
                        defaultMessage: "Get AI-powered labels and writing for Notion Mail"
                    }
                }),
                A = {
                    upgrade: r.upgrade,
                    addToPlan: r.addToPlan,
                    advancedAIHeading: r.advancedAILabel,
                    advancedAIUpsellDescription: r.advancedAIUpsellDescription,
                    advancedAIDescription: r.advancedAIDescription,
                    advancedAIButtonTooltip: r.advancedAIButtonTooltip,
                    advancedAIRequestButtonTooltipPrimary: r.advancedAIButtonMemberTooltipPrimary,
                    advancedAIRequestButtonTooltipSecondary: r.advancedAIButtonMemberTooltipSecondary,
                    coreAIHeading: r.coreAILabel,
                    aiHeading: r.aiLabel,
                    coreAIDescription: r.coreAIDescription,
                    coreAIButtonTooltip: r.coreAIButtonTooltip,
                    aiAddOnHeading: r.aiAddOnHeading,
                    tierHeading: r.aiTierHeading,
                    aiAddOnTooltip: r.aiAddOnTooltip,
                    businessTierTooltip: r.aiBusinessTierTooltip,
                    enterpriseLimitedTierTooltip: r.aiEnterpriseLimitedTierTooltip,
                    description: b.description,
                    descriptionV2: b.descriptionV2,
                    mailAIDescription: b.mailAIDescription,
                    planPrice: b.price,
                    ctaMessage: r.addToPlan,
                    ctaMessageSalesAssisted: r.contactSalesSalesAssisted,
                    added: b.added,
                    addedToPlan: r.aiAddedToPlan,
                    includedInPlan: r.aiIncludedInPlan,
                    settings: r.aiSettings,
                    request: i(115583).P.request
                },
                f = (0, i(109939).YK)({
                    active: {
                        id: "plansPage.highlightCards.badge.active",
                        defaultMessage: "Active"
                    },
                    enterprise_limited: {
                        id: "plansPage.highlightCards.badge.enterpriseLimited",
                        defaultMessage: "Limited"
                    },
                    popular: {
                        id: "plansPage.highlightCards.badge.popular",
                        defaultMessage: "Popular"
                    },
                    best_value: {
                        id: "plansPage.highlightCards.badge.bestValue",
                        defaultMessage: "Best value"
                    },
                    recommended: {
                        id: "plansPage.highlightCards.badge.recommended",
                        defaultMessage: "Recommended"
                    },
                    free_trial: {
                        id: "plansPage.highlightCards.badge.freeTrial",
                        defaultMessage: "Free trial"
                    },
                    coming_soon: {
                        id: "plansPage.highlightCards.badge.comingSoon",
                        defaultMessage: "Coming soon"
                    },
                    beta: {
                        id: "plansPage.highlightCards.badge.beta",
                        defaultMessage: "Beta"
                    }
                }),
                h = (0, i(109939).YK)({
                    forms: {
                        id: "plansPage.highlightCards.mayMoment.free.forms",
                        defaultMessage: "Basic forms"
                    },
                    sites: {
                        id: "plansPage.highlightCards.mayMoment.free.sites",
                        defaultMessage: "Basic sites"
                    },
                    automations: {
                        id: "plansPage.highlightCards.mayMoment.free.automations",
                        defaultMessage: "Basic automations"
                    },
                    databases: {
                        id: "plansPage.highlightCards.mayMoment.free.databases",
                        defaultMessage: "Custom databases"
                    },
                    calendar: {
                        id: "plansPage.highlightCards.mayMoment.free.calendar",
                        defaultMessage: "Notion Calendar"
                    },
                    mail: {
                        id: "plansPage.highlightCards.mayMoment.free.mail",
                        defaultMessage: "Notion Mail"
                    }
                }),
                M = (0, i(109939).YK)({
                    blocks: {
                        id: "plansPage.highlightCards.mayMoment.plus.blocks",
                        defaultMessage: "Unlimited blocks"
                    },
                    blocksTooltip: {
                        id: "plansPage.highlightCards.mayMoment.plus.blocks.tooltip",
                        defaultMessage: "Workspaces with 2+ members are limited to {blockLimitNumber} blocks on the Free plan"
                    },
                    charts: {
                        id: "plansPage.highlightCards.mayMoment.plus.charts",
                        defaultMessage: "Unlimited charts"
                    },
                    forms: {
                        id: "plansPage.highlightCards.mayMoment.plus.forms",
                        defaultMessage: "Custom forms"
                    },
                    sites: {
                        id: "plansPage.highlightCards.mayMoment.plus.sites",
                        defaultMessage: "Custom sites"
                    },
                    integrations: {
                        id: "plansPage.highlightCards.mayMoment.plus.integrations",
                        defaultMessage: "Basic integrations"
                    },
                    integrationsTooltip: {
                        id: "plansPage.highlightCards.mayMoment.plus.integrations.tooltip",
                        defaultMessage: "Embeds, previews, custom automations and database syncs"
                    }
                }),
                y = (0, i(109939).YK)({
                    salesAssistedAIDescription: {
                        id: "plansPage.highlightCards.mayMoment.salesAssisted.business.aiDescription",
                        defaultMessage: "Contact Sales for Notion AI"
                    }
                }),
                v = (0, i(109939).YK)({
                    aiIncluded: {
                        id: "plansPage.highlightCards.mayMoment.business.aiIncluded",
                        defaultMessage: "Notion AI included"
                    },
                    saml: {
                        id: "plansPage.highlightCards.mayMoment.business.saml.sso",
                        defaultMessage: "SAML SSO"
                    },
                    verifyPages: {
                        id: "plansPage.highlightCards.mayMoment.business.verifyPages",
                        defaultMessage: "Verify any page"
                    },
                    search: {
                        id: "plansPage.highlightCards.mayMoment.business.search",
                        defaultMessage: "Enterprise search"
                    },
                    searchTooltip: {
                        id: "plansPage.highlightCards.mayMoment.business.search.tooltip",
                        defaultMessage: "Get instant answers across your connected apps with Notion AI"
                    },
                    integrations: {
                        id: "plansPage.highlightCards.mayMoment.business.integrations",
                        defaultMessage: "Premium integrations"
                    },
                    integrationsTooltip: {
                        id: "plansPage.highlightCards.mayMoment.business.integrations.tooltip",
                        defaultMessage: "Embeds, previews, custom automations and database syncs"
                    },
                    customAgents: {
                        id: "plansPage.highlightCards.mayMoment.business.customAgents",
                        defaultMessage: "Custom Agents"
                    },
                    notionAgent: {
                        id: "plansPage.highlightCards.mayMoment.business.notionAgent",
                        defaultMessage: "Notion Agent"
                    },
                    aiMeetingNotes: {
                        id: "plansPage.highlightCards.mayMoment.business.aiMeetingNotes",
                        defaultMessage: "AI Meeting Notes"
                    },
                    databasePermissions: {
                        id: "plansPage.highlightCards.mayMoment.business.databasePermissions",
                        defaultMessage: "Database permissions"
                    }
                }),
                G = (0, i(109939).YK)({
                    salesAssistedAIDescription: {
                        id: "plansPage.highlightCards.mayMoment.salesAssisted.enterprise.aiDescription",
                        defaultMessage: "Contact Sales for Notion AI"
                    }
                }),
                P = (0, i(109939).YK)({
                    aiAnalyticsAndControls: {
                        id: "plansPage.highlightCards.mayMoment.enterprise.aiAnalyticsAndControls",
                        defaultMessage: "AI analytics & controls"
                    },
                    auditLog: {
                        id: "plansPage.highlightCards.mayMoment.enterprise.auditLog",
                        defaultMessage: "Audit log"
                    },
                    security: {
                        id: "plansPage.highlightCards.mayMoment.enterprise.security",
                        defaultMessage: "Advanced security & controls"
                    },
                    integrations: {
                        id: "plansPage.highlightCards.mayMoment.enterprise.integrations",
                        defaultMessage: "Advanced integrations"
                    },
                    integrationsTooltip: {
                        id: "plansPage.highlightCards.mayMoment.enterprise.integrations.tooltip",
                        defaultMessage: "Embeds, previews, custom automations and database syncs"
                    },
                    zeroDataRetention: {
                        id: "plansPage.highlightCards.mayMoment.enterprise.zeroDataRetention",
                        defaultMessage: "Zero data retention with LLM providers"
                    },
                    scimUserProvisioning: {
                        id: "plansPage.highlightCards.mayMoment.enterprise.scimUserProvisioning",
                        defaultMessage: "SCIM user provisioning"
                    },
                    customerSuccessManager: {
                        id: "plansPage.highlightCards.mayMoment.enterprise.customerSuccessManager",
                        defaultMessage: "Customer success manager"
                    },
                    securityComplianceIntegrations: {
                        id: "plansPage.highlightCards.mayMoment.enterprise.securityComplianceIntegrations",
                        defaultMessage: "Security & Compliance integrations (DLP, SIEM)"
                    },
                    domainManagement: {
                        id: "plansPage.highlightCards.mayMoment.enterprise.domainManagement",
                        defaultMessage: "Domain management"
                    }
                }),
                x = {
                    integrations: (0, i(442564).x)("guides.dataAndIntegrations"),
                    enterpriseSearch: (0, i(442564).x)("guides.aiConnectors")
                },
                F = {
                    student: i(262166).v0.student,
                    personal: i(262166).v0.personal,
                    free: i(262166).v0.free,
                    plus: i(262166).v0.plus,
                    business: i(262166).v0.business,
                    enterprise: i(262166).v0.enterprise,
                    enterprise_limited: i(262166).v0.enterpriseLimited
                };

            function w({
                intl: e,
                billingData: t,
                salesStatus: n,
                usageBasedPricingDashboardEnabled: r
            }) {
                let o, l, d = (0, i(192159).N8)(t),
                    p = (0, i(993096).Mb)({
                        billingData: t
                    }),
                    u = (0, i(216260).RL)({
                        currentSubscriptionTier: (0, i(192159).AI)(t),
                        salesStatus: n
                    }),
                    c = d && "none" === p.currentState.featureSet,
                    g = {
                        message: v.integrations,
                        iconBar: {
                            icons: [i(898869).gmailIcon, i(92915).figmaIcon, i(527427).zendeskIcon, i(330925).asanaIcon],
                            followText: "+5"
                        },
                        multiLine: !0,
                        tooltip: {
                            imagePath: a,
                            description: e.formatMessage(v.integrationsTooltip),
                            link: x.integrations
                        }
                    },
                    m = {
                        message: v.search,
                        iconBar: {
                            icons: [i(378111).slackIcon, i(933546).googleDriveIcon, i(778434).gitHubIcon, i(127201).U],
                            followText: "+4"
                        },
                        multiLine: !0,
                        tooltip: {
                            imagePath: s,
                            description: e.formatMessage(v.searchTooltip),
                            link: x.enterpriseSearch
                        }
                    },
                    b = {
                        message: v.customAgents,
                        badgeType: "beta"
                    },
                    A = [{
                        message: v.aiMeetingNotes,
                        badgeType: "beta"
                    }, v.databasePermissions];
                o = c ? [v.saml, v.databasePermissions, g, v.verifyPages, {
                    message: y.salesAssistedAIDescription,
                    multiLine: !0
                }] : [v.notionAgent, ...r ? [b] : [], ...A, v.saml, m, g, v.verifyPages];
                let f = {
                        message: P.security,
                        multiLine: !0
                    },
                    F = {
                        message: P.integrations,
                        tooltip: {
                            imagePath: a,
                            description: e.formatMessage(P.integrationsTooltip),
                            link: x.integrations
                        }
                    },
                    j = [{
                        message: P.zeroDataRetention,
                        multiLine: !0
                    }, P.scimUserProvisioning, f, P.auditLog, ...u ? [] : [P.customerSuccessManager], {
                        message: P.securityComplianceIntegrations,
                        multiLine: !0
                    }, P.domainManagement, F];
                return l = c ? [...j, {
                    message: G.salesAssistedAIDescription,
                    multiLine: !0
                }] : r ? [P.aiAnalyticsAndControls, ...j] : [...j], {
                    free: [h.forms, h.sites, h.automations, h.databases, h.calendar, h.mail],
                    plus: [{
                        message: M.blocks,
                        tooltip: {
                            description: e.formatMessage(M.blocksTooltip, {
                                blockLimitNumber: (0, i(262166).lP)()
                            })
                        }
                    }, M.charts, M.forms, M.sites, {
                        message: M.integrations,
                        iconBar: {
                            icons: [i(378111).slackIcon, i(933546).googleDriveIcon, i(898869).gmailIcon]
                        },
                        multiLine: !0,
                        tooltip: {
                            description: e.formatMessage(M.integrationsTooltip),
                            link: x.integrations
                        }
                    }],
                    business: o,
                    enterprise: l
                }
            }

            function j({
                featureSet: e
            }) {
                switch (e) {
                    case "core":
                        return A.coreAIHeading;
                    case "none":
                    case "advanced":
                        return A.advancedAIHeading;
                    default:
                        return e
                }
            }
        }
    }
]);