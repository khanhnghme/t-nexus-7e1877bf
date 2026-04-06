"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [59042, 70916, 72017], {
        72017: (e, o, n) => {
            n.d(o, {
                j: () => d
            }), n(296540);
            var a = n(474848);
            let r = (0, a.jsx)(n(109939).sA, {
                    id: "churnSurvey.downgradeSection.restrictions.included.title",
                    defaultMessage: "Included"
                }),
                i = (0, a.jsx)(n(109939).sA, {
                    id: "pricingGrid.planAttribute.value.unlimitedMembers",
                    defaultMessage: "Unlimited"
                }),
                t = (0, a.jsx)(n(109939).sA, {
                    id: "churnSurvey.downgradeSection.restrictions.noPrivateTeamspaces.title",
                    defaultMessage: "No private teamspaces"
                }, "churnSurvey.downgradeSection.restrictions.noPrivateTeamspaces.title");

            function s(e, o) {
                return (0, n(700369).ZV)(e, "number_with_commas", o)
            }

            function c(e, ...o) {
                return (0, a.jsx)("span", {
                    style: e,
                    children: o
                })
            }

            function d({
                highlightStyle: e,
                intl: o
            }) {
                let l = {
                    aiConnectors: {
                        icon: n(273344).aiFaceIcon,
                        beforeDowngrade: (0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.included.aiConnectors",
                            defaultMessage: "AI connectors"
                        }),
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.aiConnectors",
                            defaultMessage: "not supported"
                        }, "churnSurvey.downgradeSection.restrictions.aiConnectors")]),
                        tooltip: {
                            id: "churnSurvey.downgradeSection.restrictions.aiConnectors.tooltip",
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "churnSurvey.downgradeSection.restrictions.aiConnectors.tooltip.message",
                                defaultMessage: "Connects external tools to your Notion workspace — enabling Notion AI to consolidate knowledge for your team"
                            }),
                            description: (0, a.jsx)(n(109939).sA, {
                                id: "churnSurvey.downgradeSection.restrictions.aiConnectors.tooltip.description",
                                defaultMessage: "Click to learn more"
                            }),
                            link: (0, n(442564).x)("guides.aiConnectors")
                        }
                    },
                    aiUsage: {
                        icon: n(273344).aiFaceIcon,
                        beforeDowngrade: (0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.included.aiUsage",
                            defaultMessage: "Advanced AI"
                        }),
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.aiUsage",
                            defaultMessage: "Limited usage"
                        }, "churnSurvey.downgradeSection.restrictions.aiUsage")])
                    },
                    blocks: {
                        icon: n(896714).P,
                        beforeDowngrade: i,
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.blocks",
                            defaultMessage: "{number} team blocks",
                            values: {
                                number: s(1e3, o)
                            }
                        }, "churnSurvey.downgradeSection.restrictions.blocks")])
                    },
                    guests: {
                        icon: n(515749).o,
                        beforeDowngrade: s(100, o),
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.guests",
                            defaultMessage: "{number} guests",
                            values: {
                                number: s(10, o)
                            }
                        }, "churnSurvey.downgradeSection.restrictions.guests")])
                    },
                    charts: {
                        icon: n(289871).q,
                        beforeDowngrade: i,
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.charts",
                            defaultMessage: "{number} chart",
                            values: {
                                number: s(1, o)
                            }
                        }, "churnSurvey.downgradeSection.restrictions.charts")])
                    },
                    fileUpload: {
                        icon: n(138266).B,
                        beforeDowngrade: i,
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.mbFileUpload",
                            defaultMessage: "{number}MB max file size",
                            values: {
                                number: s(5, o)
                            }
                        }, "churnSurvey.downgradeSection.restrictions.mbFileUpload")])
                    },
                    integrations: {
                        icon: n(412889).Y,
                        beforeDowngrade: (0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.included.integrations",
                            defaultMessage: "Integrations"
                        }),
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.integrations",
                            defaultMessage: "removed"
                        }, "churnSurvey.downgradeSection.restrictions.integrations")]),
                        tooltip: {
                            id: "churnSurvey.downgradeSection.restrictions.integrations.tooltip",
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "churnSurvey.downgradeSection.restrictions.integrations.tooltip.message",
                                defaultMessage: "Connects external tools to your Notion workspace via connected properties, synced databases, and automations"
                            }),
                            description: (0, a.jsx)(n(109939).sA, {
                                id: "churnSurvey.downgradeSection.restrictions.integrations.tooltip.description",
                                defaultMessage: "Click to learn more"
                            }),
                            link: (0, n(442564).x)("guides.dataAndIntegrations")
                        }
                    },
                    pageVerification: {
                        icon: n(900822).badgeCheckIcon,
                        beforeDowngrade: (0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.included.pageVerification",
                            defaultMessage: "Verify any page"
                        }),
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.pageVerification",
                            defaultMessage: "No page verification"
                        }, "churnSurvey.downgradeSection.restrictions.pageVerification")])
                    },
                    versionHistory: {
                        icon: n(442219).w,
                        beforeDowngrade: (0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.versionHistory.limit",
                            defaultMessage: "{number} days",
                            values: {
                                number: s(30, o)
                            }
                        }),
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.pageHistory",
                            defaultMessage: "{number} days page history",
                            values: {
                                number: s(7, o)
                            }
                        }, "churnSurvey.downgradeSection.restrictions.pageHistory")])
                    },
                    samlSso: {
                        icon: n(777805).checkmarkShieldIcon,
                        beforeDowngrade: r,
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.noSamlSso.title",
                            defaultMessage: "No SAML SSO"
                        }, "churnSurvey.downgradeSection.restrictions.noSamlSso.title")])
                    },
                    privateTeamspaces: {
                        icon: n(767816).teamspaceIcon,
                        beforeDowngrade: (0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.included.privateTeamspaces",
                            defaultMessage: "Private teamspaces"
                        }),
                        afterDowngrade: c(e, [t])
                    },
                    adminTools: {
                        icon: n(829968).gearIcon,
                        beforeDowngrade: r,
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.noAdminTools.title",
                            defaultMessage: "No admin tools"
                        }, "churnSurvey.downgradeSection.restrictions.noAdminTools.title")])
                    },
                    permissionGroups: {
                        icon: n(157160).lockIcon,
                        beforeDowngrade: i,
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.noPermissionGroups.title",
                            defaultMessage: "No permission groups"
                        }, "churnSurvey.downgradeSection.restrictions.noPermissionGroups.title")])
                    },
                    teamspaces: {
                        icon: n(767816).teamspaceIcon,
                        beforeDowngrade: i,
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.noTeamspaces.title",
                            defaultMessage: "No teamspaces"
                        }, "churnSurvey.downgradeSection.restrictions.noTeamspaces.title")])
                    },
                    auditLog: {
                        icon: n(418470).F,
                        beforeDowngrade: (0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.included.auditLog",
                            defaultMessage: "Audit log"
                        }),
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.noAuditLog.title.MayMoment",
                            defaultMessage: "No access to Audit log"
                        }, "churnSurvey.downgradeSection.restrictions.noAuditLog.title.MayMoment")])
                    },
                    scim: {
                        icon: n(777805).checkmarkShieldIcon,
                        beforeDowngrade: (0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.included.SCIM",
                            defaultMessage: "SCIM"
                        }),
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.noSCIM.title.MayMoment",
                            defaultMessage: "No access to SCIM"
                        }, "churnSurvey.downgradeSection.restrictions.noSCIM.title.MayMoment")])
                    },
                    security: {
                        icon: n(829968).gearIcon,
                        beforeDowngrade: (0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.included.advancedSecurity",
                            defaultMessage: "Advanced"
                        }),
                        afterDowngrade: c(e, [(0, a.jsx)(n(109939).sA, {
                            id: "churnSurvey.downgradeSection.restrictions.basicSecurity.title",
                            defaultMessage: "Basic security & controls"
                        }, "churnSurvey.downgradeSection.restrictions.basicSecurity.title")])
                    }
                };
                return {
                    free: {},
                    student: {
                        free: [l.blocks, l.charts, l.fileUpload, l.versionHistory, l.guests]
                    },
                    personal: {
                        free: [l.adminTools, l.permissionGroups, l.teamspaces]
                    },
                    plus: {
                        free: [l.blocks, l.fileUpload, l.versionHistory, { ...l.integrations,
                            afterDowngradeIcons: {
                                icons: [n(933546).googleDriveIcon, n(378111).slackIcon, n(898869).gmailIcon]
                            }
                        }]
                    },
                    business: {
                        free: [l.blocks, l.aiUsage, { ...l.aiConnectors,
                            afterDowngradeIcons: {
                                icons: [n(378111).slackIcon, n(933546).googleDriveIcon, n(117073).jiraIcon, n(778434).gitHubIcon, n(394615).microsoftTeamsIcon]
                            }
                        }, { ...l.integrations,
                            afterDowngradeIcons: {
                                icons: [n(378111).slackIcon, n(933546).googleDriveIcon, n(92915).figmaIcon, n(778434).gitHubIcon, n(527427).zendeskIcon],
                                extraCount: 2
                            }
                        }],
                        plus: [l.aiUsage, { ...l.aiConnectors,
                            afterDowngradeIcons: {
                                icons: [n(378111).slackIcon, n(933546).googleDriveIcon, n(117073).jiraIcon, n(778434).gitHubIcon, n(394615).microsoftTeamsIcon]
                            }
                        }, { ...l.integrations,
                            afterDowngradeIcons: {
                                icons: [n(92915).figmaIcon, n(778434).gitHubIcon, n(527427).zendeskIcon, n(330925).asanaIcon, n(397402).gitLabIcon, n(117073).jiraIcon]
                            }
                        }, l.privateTeamspaces, l.pageVerification]
                    },
                    enterprise: {
                        free: [l.blocks, l.aiUsage, { ...l.aiConnectors,
                            afterDowngradeIcons: {
                                icons: [n(378111).slackIcon, n(933546).googleDriveIcon, n(117073).jiraIcon, n(778434).gitHubIcon, n(394615).microsoftTeamsIcon]
                            }
                        }, { ...l.integrations,
                            afterDowngradeIcons: {
                                icons: [n(378111).slackIcon, n(933546).googleDriveIcon, n(92915).figmaIcon, n(778434).gitHubIcon, n(527427).zendeskIcon],
                                extraCount: 2
                            }
                        }],
                        plus: [l.aiUsage, { ...l.aiConnectors,
                            afterDowngradeIcons: {
                                icons: [n(378111).slackIcon, n(933546).googleDriveIcon, n(117073).jiraIcon, n(778434).gitHubIcon, n(394615).microsoftTeamsIcon]
                            }
                        }, { ...l.integrations,
                            afterDowngradeIcons: {
                                icons: [n(92915).figmaIcon, n(778434).gitHubIcon, n(527427).zendeskIcon, n(330925).asanaIcon, n(397402).gitLabIcon, n(117073).jiraIcon]
                            }
                        }, l.privateTeamspaces, l.pageVerification],
                        business: [l.scim, l.auditLog, l.security]
                    }
                }
            }
        },
        289871: (e, o, n) => {
            n.d(o, {
                q: () => r
            }), n(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M13.125 4.25c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v11.5c0 .621-.504 1.125-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125zm1.25.125v11.25h1.25V4.375zm-6.25 6.375c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v5c0 .621-.504 1.125-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125zm1.25.125v4.75h1.25v-4.75zM4.25 5.625c-.621 0-1.125.504-1.125 1.125v9c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125v-9c0-.621-.504-1.125-1.125-1.125zm.125 10v-8.75h1.25v8.75z"
                    })
                },
                r = (0, n(104509).wt)("chartBarXAxis", a, "default")
        },
        397402: (e, o, n) => {
            n.r(o), n.d(o, {
                gitLabIcon: () => i,
                iconDefinition: () => r
            }), n(296540);
            var a = n(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1 1.33 18.01 17.34",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            fill: "#E24329",
                            d: "m18.7 8.192-.025-.065-2.45-6.394a.64.64 0 0 0-.633-.401.66.66 0 0 0-.369.138.66.66 0 0 0-.217.33l-1.654 5.06H6.653L5 1.8a.64.64 0 0 0-.218-.331.66.66 0 0 0-.75-.04.64.64 0 0 0-.251.303L1.325 8.123l-.024.065a4.55 4.55 0 0 0 1.509 5.258l.008.007.022.015 3.733 2.795 1.846 1.398 1.125.849a.756.756 0 0 0 .914 0l1.125-.85 1.846-1.397 3.755-2.812.01-.007A4.55 4.55 0 0 0 18.7 8.192"
                        }), (0, a.jsx)("path", {
                            fill: "#FC6D26",
                            d: "m18.7 8.192-.025-.065a8.3 8.3 0 0 0-3.294 1.48L10 13.678c1.832 1.386 3.428 2.59 3.428 2.59l3.754-2.812.01-.007A4.55 4.55 0 0 0 18.7 8.192"
                        }), (0, a.jsx)("path", {
                            fill: "#FCA326",
                            d: "m6.573 16.267 1.846 1.398 1.125.849a.756.756 0 0 0 .914 0l1.125-.85 1.846-1.397s-1.597-1.208-3.429-2.59c-1.832 1.382-3.427 2.59-3.427 2.59"
                        }), (0, a.jsx)("path", {
                            fill: "#FC6D26",
                            d: "M4.618 9.608a8.3 8.3 0 0 0-3.293-1.485l-.024.065a4.55 4.55 0 0 0 1.509 5.258l.008.006.022.016 3.733 2.795L10 13.673z"
                        })]
                    })
                },
                i = (0, n(104509).wt)("gitLab", r, "default")
        },
        412889: (e, o, n) => {
            n.d(o, {
                Y: () => r
            }), n(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 2.62 12.26 14.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.875 3.25c0-.345.28-.625.625-.625h4c.345 0 .625.28.625.625v4c0 .345-.28.625-.625.625H7.125v.596c0 .179.126.333.302.368l5.39 1.075c.76.152 1.308.819 1.308 1.594v.617H15.5c.345 0 .625.28.625.625v4c0 .345-.28.625-.625.625h-4a.625.625 0 0 1-.625-.625v-4c0-.345.28-.625.625-.625h1.375v-.617a.375.375 0 0 0-.302-.368l-5.39-1.076a1.625 1.625 0 0 1-1.308-1.593v-.596H4.5a.625.625 0 0 1-.625-.625z"
                    })
                },
                r = (0, n(104509).wt)("connectionsFill", a, "fill")
        },
        418470: (e, o, n) => {
            n.d(o, {
                F: () => i
            }), n(296540);
            var a = n(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.4 2.88 15.21 14.27",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M7.975 5.175a.55.55 0 1 0 0 1.1h4.05a.55.55 0 1 0 0-1.1zm-.55 2.692a.55.55 0 0 1 .55-.55h4.05a.55.55 0 1 1 0 1.1h-4.05a.55.55 0 0 1-.55-.55"
                        }), (0, a.jsx)("path", {
                            d: "M2.4 4.861c0-1.092.883-1.975 1.975-1.975h8.55c1.092 0 1.975.883 1.975 1.975v7.889h2.075c.345 0 .625.28.625.625v1.8a1.973 1.973 0 0 1-1.975 1.975h-8.55A1.973 1.973 0 0 1 5.1 15.175V7.25H3.025a.625.625 0 0 1-.625-.625zM9.554 15.9h6.07a.723.723 0 0 0 .726-.725V14H9.5v1.175c0 .256-.049.5-.137.725zm-2.025 0c.4-.002.72-.325.72-.725v-1.8c0-.345.28-.625.626-.625h4.775V4.861a.723.723 0 0 0-.725-.725H6.213c.088.224.137.469.137.725v10.314c0 .402.323.725.725.725zM5.1 4.861a.723.723 0 0 0-.724-.725.723.723 0 0 0-.725.725V6H5.1z"
                        })]
                    })
                },
                i = (0, n(104509).wt)("scroll", r, "default")
        },
        442219: (e, o, n) => {
            n.d(o, {
                w: () => i
            }), n(296540);
            var a = n(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.12 2.37 17.51 15.26",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M3.442 13.102a.625.625 0 0 1-.884 0L.304 10.848a.625.625 0 0 1 .884-.884l1.187 1.187V10a7.625 7.625 0 1 1 2.303 5.46.625.625 0 1 1 .872-.895A6.375 6.375 0 1 0 3.625 10v1.151l1.187-1.187a.625.625 0 1 1 .884.884z"
                        }), (0, a.jsx)("path", {
                            d: "M9.375 5.725a.625.625 0 0 1 1.25 0v3.65H13.6a.625.625 0 0 1 0 1.25H10A.625.625 0 0 1 9.375 10z"
                        })]
                    })
                },
                i = (0, n(104509).wt)("clockArrowBack", r, "default")
        },
        515749: (e, o, n) => {
            n.d(o, {
                o: () => r
            }), n(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M10 2.375q-.634 0-1.242.1A.625.625 0 0 0 8.96 3.71a6.4 6.4 0 0 1 2.08 0 .625.625 0 0 0 .202-1.233q-.608-.1-1.242-.101m4.442 1.426a.625.625 0 0 0-.729 1.015 6.4 6.4 0 0 1 1.47 1.47.625.625 0 1 0 1.015-.73 7.7 7.7 0 0 0-1.756-1.755M6.287 4.817a.625.625 0 0 0-.73-1.015 7.7 7.7 0 0 0-1.755 1.756.625.625 0 1 0 1.015.729 6.4 6.4 0 0 1 1.47-1.47m11.237 3.941a.625.625 0 0 0-1.233.202 6.4 6.4 0 0 1 0 2.08.625.625 0 0 0 1.233.202 7.7 7.7 0 0 0 0-2.484M3.71 8.96a.625.625 0 0 0-1.234-.202 7.7 7.7 0 0 0 0 2.484.625.625 0 1 0 1.233-.202 6.4 6.4 0 0 1 0-2.08m12.489 5.482a.625.625 0 0 0-1.015-.729 6.4 6.4 0 0 1-1.096 1.18c-.79-1.398-2.333-2.332-4.087-2.332s-3.298.934-4.087 2.331a6 6 0 0 1-.567-.536l-.006-.006a6 6 0 0 1-.523-.637.625.625 0 0 0-1.015.73 7.7 7.7 0 0 0 1.756 1.755l.008.006a7.6 7.6 0 0 0 4.74 1.415 7.6 7.6 0 0 0 5.261-2.408l.006-.007q.337-.36.625-.762M6.951 15.6c.547-1.049 1.697-1.789 3.049-1.789s2.502.74 3.049 1.79a6.34 6.34 0 0 1-3.046.774H10a6.35 6.35 0 0 1-3.05-.775m.805-9.431C8.277 5.519 9.05 5.125 10 5.125s1.723.393 2.245 1.044c.51.635.75 1.474.75 2.346s-.24 1.71-.75 2.346c-.522.65-1.294 1.044-2.245 1.044-.95 0-1.723-.394-2.245-1.044-.51-.635-.75-1.474-.75-2.346s.24-1.711.75-2.346m.975.782c-.293.365-.475.909-.475 1.564s.182 1.198.475 1.564c.281.35.694.576 1.27.576s.989-.226 1.27-.576c.294-.366.475-.909.475-1.564s-.181-1.199-.475-1.564c-.281-.35-.693-.576-1.27-.576-.576 0-.989.225-1.27.576"
                    })
                },
                r = (0, n(104509).wt)("personCropCircleDashed", a, "default")
        },
        777805: (e, o, n) => {
            n.r(o), n.d(o, {
                checkmarkShieldIcon: () => i,
                iconDefinition: () => r
            }), n(296540);
            var a = n(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.07 2.17 13.85 15.65",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M12.876 7.978a.625.625 0 0 0-1.072-.643L9.25 11.59 7.815 9.916a.625.625 0 0 0-.95.814l2 2.333a.625.625 0 0 0 1.011-.085z"
                        }), (0, a.jsx)("path", {
                            d: "M10.28 2.241a.63.63 0 0 0-.56 0l-1.889.945a7.5 7.5 0 0 1-3.343.789H3.7a.625.625 0 0 0-.625.625v6.933a5.13 5.13 0 0 0 3.106 4.71l3.573 1.532a.63.63 0 0 0 .492 0l3.573-1.532a5.13 5.13 0 0 0 3.106-4.71V4.6a.625.625 0 0 0-.625-.625h-.788c-1.16 0-2.305-.27-3.343-.79zM8.39 4.304 10 3.499l1.61.805a8.7 8.7 0 0 0 3.902.921h.163v6.308c0 1.55-.924 2.95-2.348 3.562L10 16.52l-3.326-1.425a3.88 3.88 0 0 1-2.349-3.562V5.225h.163c1.355 0 2.69-.315 3.902-.921"
                        })]
                    })
                },
                i = (0, n(104509).wt)("checkmarkShield", r, "default")
        },
        896714: (e, o, n) => {
            n.d(o, {
                P: () => r
            }), n(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.72 1.77 14.55 16.45",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M10.302 1.853a.63.63 0 0 0-.604 0l-6.65 3.669c-.2.11-.323.32-.323.547v7.862c0 .228.124.437.323.547l6.65 3.67a.63.63 0 0 0 .604 0l6.65-3.67c.2-.11.323-.32.323-.547V6.069a.63.63 0 0 0-.323-.547zM3.975 7.127l5.4 2.98v6.434l-5.4-2.98zm6.65 9.414v-6.434l5.4-2.98v6.435zM15.356 6.07 10 9.024 4.644 6.069 10 3.114z"
                    })
                },
                r = (0, n(104509).wt)("cube", a, "default")
        },
        900822: (e, o, n) => {
            n.r(o), n.d(o, {
                badgeCheckIcon: () => i,
                iconDefinition: () => r
            }), n(296540);
            var a = n(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.57 1.57 16.86 16.86",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M12.806 8.074a.625.625 0 1 0-1.072-.643l-2.512 4.185-1.407-1.642a.625.625 0 1 0-.95.814l1.973 2.3a.625.625 0 0 0 1.01-.085z"
                        }), (0, a.jsx)("path", {
                            d: "M10.405 1.724a.625.625 0 0 0-.81 0L7.36 3.628l-2.926.233a.625.625 0 0 0-.573.574L3.628 7.36 1.724 9.595a.624.624 0 0 0 0 .81l1.904 2.234.233 2.926a.625.625 0 0 0 .574.573l2.926.234 2.234 1.904a.624.624 0 0 0 .81 0l2.234-1.904 2.926-.234a.625.625 0 0 0 .573-.573l.234-2.926 1.904-2.234a.624.624 0 0 0 0-.81L16.372 7.36l-.234-2.926a.625.625 0 0 0-.573-.573l-2.926-.234zM8.017 4.711 10 3.02l1.983 1.69c.1.085.224.136.355.147l2.597.207.207 2.597c.01.13.062.255.147.355L16.98 10l-1.69 1.983a.63.63 0 0 0-.147.355l-.207 2.597-2.597.207a.63.63 0 0 0-.355.147L10 16.98l-1.983-1.69a.63.63 0 0 0-.355-.147l-2.597-.207-.207-2.597a.63.63 0 0 0-.147-.355L3.02 10l1.69-1.983a.63.63 0 0 0 .147-.355l.207-2.597 2.597-.207a.63.63 0 0 0 .355-.147"
                        })]
                    })
                },
                i = (0, n(104509).wt)("badgeCheck", r, "default")
        }
    }
]);