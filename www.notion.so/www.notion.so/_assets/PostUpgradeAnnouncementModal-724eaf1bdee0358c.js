"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [47161], {
        13717: (e, t, n) => {
            function i(e) {
                let {
                    spaceStore: t,
                    groupId: i
                } = e;
                return n(398652).C.createChildStore(t, (0, n(659341).S4)({
                    spacePermissionGroupId: i,
                    spaceId: t.id
                }))
            }

            function r(e) {
                let {
                    spaceStore: t,
                    groupId: i,
                    userId: r
                } = e;
                return n(291886).m.createChildStore(t, (0, n(867863).BZ)({
                    spacePermissionGroupId: i,
                    spaceId: t.id,
                    userId: r
                }))
            }
            n.d(t, {
                A: () => r,
                E: () => i
            })
        },
        91028: (e, t, n) => {
            n.d(t, {
                i: () => i
            });
            let i = (0, n(104509).xh)("arrowUpRightSquare", {
                default: {
                    loader: () => n.e(18710).then(n.bind(n, 213458))
                },
                small: {
                    loader: () => n.e(18710).then(n.bind(n, 166568))
                },
                fill: {
                    loader: () => n.e(18710).then(n.bind(n, 943792))
                },
                fillSmall: {
                    loader: () => n.e(18710).then(n.bind(n, 476919))
                }
            }, ["arrow", "upright", "northeast", "direction", "diagonal", "link", "external"])
        },
        111057: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var i = () => n(546605);
            class r extends i().Store {
                getInitialState() {
                    return {
                        recentRecoverableUsers: [],
                        searchQuery: void 0
                    }
                }
            }
            let o = new r
        },
        133565: (e, t, n) => {
            n.d(t, {
                E: () => i
            });

            function i(e) {
                let {
                    spaceId: t
                } = e, i = (0, n(226309).lh)({
                    spaceId: t
                });
                return (0, n(192159).Fq)(i)
            }
        },
        156581: (e, t, n) => {
            n.r(t), n.d(t, {
                PostUpgradeAnnouncementModal: () => N,
                getModalComponent: () => _
            });
            var i = n(296540);
            let r = (0, n(109939).YK)({
                featureContentCreation: {
                    defaultMessage: "Unlimited content creation",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureUnlimitedContentCreation"
                },
                featureFileUploads: {
                    defaultMessage: "Unlimited file uploads",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureUnlimitedFileUploads"
                },
                featureCharts: {
                    defaultMessage: "Unlimited charts",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureUnlimitedCharts"
                },
                featurePageHistory: {
                    defaultMessage: "30 days page history",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeaturePageHistory"
                },
                featureCustomWebsites: {
                    defaultMessage: "Custom websites",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureCustomWebsites"
                },
                featureSamlSSO: {
                    defaultMessage: "SAML SSO",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureSamlSSO"
                },
                featureNotionAI: {
                    defaultMessage: "Advanced Notion AI",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureNotionAI"
                },
                enterpriseSearch: {
                    defaultMessage: "Enterprise Search",
                    id: "subscriptions.PostUpgradeAnnouncementModal.enterpriseSearch"
                },
                aiMeetingNotes: {
                    defaultMessage: "AI Meeting Notes",
                    id: "subscriptions.PostUpgradeAnnouncementModal.aiMeetingNotes"
                },
                researchMode: {
                    defaultMessage: "Research Mode",
                    id: "subscriptions.PostUpgradeAnnouncementModal.researchMode"
                },
                featureAIConnectors: {
                    defaultMessage: "AI connectors",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureAIConnectors"
                },
                featureBulkPdfExport: {
                    defaultMessage: "Bulk PDF Export",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureBulkPdfExport"
                },
                featureVerifiedPages: {
                    defaultMessage: "Verified Pages",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureVerifiedPages"
                },
                featureJiraSync: {
                    defaultMessage: "Jira Sync",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureJiraSync"
                },
                featurePrivateTeamspaces: {
                    defaultMessage: "Private teamspaces",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeaturePrivateTeamspaces"
                },
                featureAndMore: {
                    defaultMessage: "and more…",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureAndMore"
                },
                featureUserProvisioning: {
                    defaultMessage: "User provisioning (SCIM)",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureUserProvisioning"
                },
                featureAdvancedSecurity: {
                    defaultMessage: "Advanced security & controls",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureAdvancedSecurity"
                },
                featureAuditLog: {
                    defaultMessage: "Audit log",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureAuditLog"
                },
                featureWorkspaceAnalytics: {
                    defaultMessage: "Workspace analytics",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureWorkspaceAnalytics"
                },
                featureCustomerSuccessManager: {
                    defaultMessage: "Customer success manager",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureCustomerSuccessManager"
                },
                featureSearch: {
                    defaultMessage: "Search",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureSearch"
                },
                featureSearchDescription: {
                    defaultMessage: "Find answers across all of your apps",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureSearchDescription"
                },
                featureGenerate: {
                    defaultMessage: "Generate",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureGenerate"
                },
                featureGenerateDescription: {
                    defaultMessage: "Create and edit docs in your style",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureGenerateDescription"
                },
                featureAnalyze: {
                    defaultMessage: "Analyze",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureAnalyze"
                },
                featureAnalyzeDescription: {
                    defaultMessage: "Get insights from PDFs and images",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureAnalyzeDescription"
                },
                featureChat: {
                    defaultMessage: "Chat",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureChat"
                },
                featureChatDescription: {
                    defaultMessage: "Access knowledge from GPT-4/Claude",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FeatureChatDescription"
                },
                plusFooterTitle: {
                    defaultMessage: "Welcome to Notion Plus",
                    id: "subscriptions.PostUpgradeAnnouncementModal.PlusFooterTitle"
                },
                businessFooterTitle: {
                    defaultMessage: "Welcome to Notion Business",
                    id: "subscriptions.PostUpgradeAnnouncementModal.BusinessFooterTitle"
                },
                plusFooterBody: {
                    defaultMessage: "Create, collaborate and customize in Notion",
                    id: "subscriptions.PostUpgradeAnnouncementModal.PlusFooterBody"
                },
                businessFooterBodyBeforeBundling: {
                    defaultMessage: "Create and collaborate across teams in Notion",
                    id: "subscriptions.PostUpgradeAnnouncementModal.BusinessFooterBody"
                },
                businessFooterBodyAfterBundling: {
                    defaultMessage: "Find answers across tools, build team workflows, and automate with AI",
                    id: "subscriptions.PostUpgradeAnnouncementModal.BusinessFooterBodyAfterBundling"
                },
                educationFooterTitle: {
                    defaultMessage: "Welcome to Notion for Education",
                    id: "subscriptions.PostUpgradeAnnouncementModal.EducationFooterTitle"
                },
                enterpriseFooterTitle: {
                    defaultMessage: "Welcome to Notion Enterprise",
                    id: "subscriptions.PostUpgradeAnnouncementModal.EnterpriseFooterTitle"
                },
                enterpriseLimitedFooterTitle: {
                    defaultMessage: "Welcome to Enterprise Limited",
                    id: "subscriptions.PostUpgradeAnnouncementModal.EnterpriseLimitedFooterTitle"
                },
                enterpriseFooterBody: {
                    defaultMessage: "For organizations to operate with scalability, control and security",
                    id: "subscriptions.PostUpgradeAnnouncementModal.EnterpriseFooterBodyAfterBundling"
                },
                educationFooterBody: {
                    defaultMessage: "Get the best of Notion for school and life, 100% free",
                    id: "subscriptions.PostUpgradeAnnouncementModal.EducationFooterBody"
                },
                footerButtonText: {
                    defaultMessage: "Let’s go",
                    id: "subscriptions.PostUpgradeAnnouncementModal.FooterButtonText"
                },
                plusPlanTitle: {
                    defaultMessage: "{workspaceName} with Plus",
                    id: "subscriptions.PostUpgradeAnnouncementModal.PlusPlanTitle"
                },
                businessPlanTitle: {
                    defaultMessage: "{workspaceName} with Business",
                    id: "subscriptions.PostUpgradeAnnouncementModal.BusinessPlanTitle"
                },
                enterprisePlanTitle: {
                    defaultMessage: "{workspaceName} with Enterprise",
                    id: "subscriptions.PostUpgradeAnnouncementModal.EnterprisePlanTitle"
                },
                enterpriseLimitedPlanTitle: {
                    defaultMessage: "{workspaceName} with Enterprise Limited",
                    id: "subscriptions.PostUpgradeAnnouncementModal.EnterpriseLimitedPlanTitle"
                },
                educationPlanTitle: {
                    defaultMessage: "The Education Plan",
                    id: "subscriptions.PostUpgradeAnnouncementModal.EducationPlanTitle"
                },
                aiAddOnTitle: {
                    defaultMessage: "Notion AI to…",
                    id: "subscriptions.PostUpgradeAnnouncementModal.AiAddOnTitle"
                },
                aiAddOnFooterTitle: {
                    defaultMessage: "Welcome to Notion AI",
                    id: "subscriptions.PostUpgradeAnnouncementModal.AiAddOnFooterTitle"
                },
                aiAddOnFooterBody: {
                    defaultMessage: "Notion AI to create and find content, faster",
                    id: "subscriptions.PostUpgradeAnnouncementModal.AiAddOnFooterBody"
                },
                learnMore: {
                    defaultMessage: "Learn More",
                    id: "subscriptions.PostUpgradeAnnouncementModal.LearnMore"
                },
                aiAddonTemplate: {
                    defaultMessage: "Show me how to use AI",
                    id: "subscriptions.PostUpgradeAnnouncementModal.AiAddonTemplate"
                }
            });

            function o({
                upgrade: e,
                environment: t
            }) {
                (0, n(104310).u)({
                    event: {
                        eventName: "subscription_post_upgrade_modal_clicked",
                        eventProperties: {
                            action: "action_button_clicked",
                            upgrade: e
                        }
                    }
                })
            }

            function s({
                environment: e,
                upgrade: t
            }) {
                (0, n(104310).u)({
                    event: {
                        eventName: "subscription_post_upgrade_modal_seen",
                        eventProperties: {
                            upgrade: t
                        }
                    }
                })
            }
            var a = n(474848);
            let l = {
                SubscriptionAnnouncementModal: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative"
                },
                dismissButton: {
                    position: "static",
                    background: n(632079).Tj.background.elevated,
                    height: 24,
                    width: 24
                },
                dismissButtonContainer: {
                    position: "absolute",
                    background: n(632079).Tj.background.elevated,
                    height: 24,
                    width: 24,
                    top: 20,
                    insetInlineEnd: 20,
                    borderRadius: "100%",
                    zIndex: 1
                },
                title: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: 250
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function d(e) {
                let {
                    content: t,
                    footer: i,
                    onDismiss: r
                } = e, o = (0, n(109939).tz)(), s = (0, n(481522).X)();
                return (0, a.jsxs)("div", {
                    style: l.SubscriptionAnnouncementModal,
                    children: [(0, a.jsx)("div", {
                        style: l.dismissButtonContainer,
                        children: (0, a.jsx)(n(226512).R, {
                            style: l.dismissButton,
                            onDismiss: r
                        })
                    }), (0, a.jsx)(n(446566).c, { ...t,
                        title: (0, a.jsx)(n(111010).D, {
                            styleKey: "titleSmMedium",
                            colorPalette: "blue",
                            colorVariant: "accentPrimary",
                            style: l.title,
                            children: o.formatMessage(t.title, {
                                workspaceName: s
                            })
                        })
                    }), (0, a.jsx)(c, { ...i
                    })]
                })
            }
            let u = {
                style0: {
                    maxWidth: 360
                },
                container: {
                    position: "relative",
                    flex: 1,
                    background: n(632079).Tj.background.elevated,
                    borderTop: `1px solid ${n(632079).Tj.border.secondary}`
                }
            };

            function c(e) {
                let {
                    title: t,
                    body: i,
                    buttonText: r,
                    buttonAction: o,
                    tertiaryContent: s
                } = e, d = (0, n(533992).v3)(), c = (0, n(109939).tz)();
                return (0, a.jsxs)(n(4458).VP, {
                    style: u.container,
                    className: "autolayout-fill-width",
                    children: [(0, a.jsxs)(n(4458).VP, {
                        gap: 4,
                        paddingTop: 24,
                        paddingInlineStart: 24,
                        style: l.positionRelative,
                        children: [(0, a.jsx)(n(111010).D, {
                            styleKey: "titleXlBold",
                            colorVariant: "primary",
                            children: c.formatMessage(t)
                        }), (0, a.jsx)("div", {
                            style: u.style0,
                            children: (0, a.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: c.formatMessage(i)
                            })
                        })]
                    }), (0, a.jsxs)(n(4458).fI, {
                        paddingInlineEnd: 20,
                        paddingInlineStart: 16,
                        gap: 8,
                        height: 72,
                        alignItems: "center",
                        justifyContent: "center",
                        style: l.positionRelative,
                        children: [(0, a.jsx)(n(4458).fI, {
                            style: l.positionRelative,
                            flex: "1 1 0",
                            children: (0, a.jsx)("div", {
                                children: s
                            })
                        }), (0, a.jsx)(n(912946).A, {
                            size: "lg",
                            onClick: () => o(d),
                            children: c.formatMessage(r)
                        })]
                    })]
                })
            }
            let p = {
                link: {
                    borderRadius: 6,
                    padding: "4px 8px",
                    display: "flex",
                    alignItems: "center"
                },
                learnMoreText: { ...n(649316).U.bodyRegular,
                    color: n(632079).Tj.text.secondary,
                    lineHeight: "20px"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function g({
                externalLink: e,
                upgrade: t
            }) {
                let i = (0, n(109939).tz)(),
                    o = (0, n(533992).v3)();
                return (0, a.jsx)(n(4458).VP, {
                    className: "autolayout-fill-width",
                    style: p.positionRelative,
                    children: (0, a.jsx)(n(590422).Q, {
                        onClick: () => (function({
                            upgrade: e,
                            environment: t
                        }) {
                            (0, n(104310).u)({
                                event: {
                                    eventName: "subscription_post_upgrade_modal_clicked",
                                    eventProperties: {
                                        action: "learn_more_clicked",
                                        upgrade: e
                                    }
                                }
                            })
                        })({
                            upgrade: t,
                            environment: o
                        }),
                        style: p.link,
                        external: !0,
                        href: e,
                        children: (0, a.jsxs)(n(4458).fI, {
                            gap: 2,
                            className: "autolayout-fill-width",
                            style: p.positionRelative,
                            children: [(0, a.jsx)("span", {
                                style: p.learnMoreText,
                                children: i.formatMessage(r.learnMore)
                            }), (0, a.jsx)(n(708966).Q, {
                                iconGroup: n(91028).i,
                                variantName: "default",
                                colorVariant: "secondary"
                            })]
                        })
                    })
                })
            }

            function m() {
                let e = (0, n(533992).v3)();
                return (0, n(383953).w)(() => {
                    s({
                        environment: e,
                        upgrade: "ai"
                    })
                }), (0, a.jsx)(d, { ...b
                })
            }
            let f = {
                    src: n(896221).A.images.subscriptions.strokesPng,
                    width: 28.028,
                    height: 34.093,
                    insetInlineStart: -22,
                    top: -16.1
                },
                y = {
                    container: {
                        boxShadow: n(632079).Tj.shadow.outline.md,
                        background: "lightgray 50% / cover no-repeat",
                        borderRadius: "94px"
                    }
                },
                h = {
                    src: (0, a.jsx)(function() {
                        return (0, a.jsx)("div", {
                            style: y.container,
                            children: (0, a.jsx)(n(448734).wV, {
                                sizeVariant: "xlarge"
                            })
                        })
                    }, {}),
                    height: 94,
                    width: 94,
                    top: 108.5,
                    insetInlineEnd: -45
                },
                b = {
                    content: {
                        innerWidth: 318,
                        title: r.aiAddOnTitle,
                        leftIllustration: f,
                        rightIllustration: h,
                        features: [{
                            text: r.featureSearch,
                            iconGroup: n(153270).a,
                            styleType: "primary",
                            secondaryText: r.featureSearchDescription
                        }, {
                            text: r.featureGenerate,
                            iconGroup: n(153270).a,
                            styleType: "primary",
                            secondaryText: r.featureGenerateDescription
                        }, {
                            text: r.featureAnalyze,
                            iconGroup: n(153270).a,
                            styleType: "primary",
                            secondaryText: r.featureAnalyzeDescription
                        }, {
                            text: r.featureChat,
                            iconGroup: n(153270).a,
                            styleType: "primary",
                            secondaryText: r.featureChatDescription
                        }]
                    },
                    footer: {
                        title: r.aiAddOnFooterTitle,
                        body: r.aiAddOnFooterBody,
                        buttonText: r.footerButtonText,
                        buttonAction: e => {
                            o({
                                environment: e,
                                upgrade: "ai"
                            }), n(672965).q.close()
                        },
                        tertiaryContent: (0, a.jsx)(g, {
                            upgrade: "ai",
                            externalLink: "https://www.notion.com/product/ai"
                        })
                    }
                };

            function M({
                onButtonAction: e
            }) {
                let t = (0, n(533992).v3)();
                return (0, n(383953).w)(() => {
                    s({
                        environment: t,
                        upgrade: "business"
                    })
                }), (0, a.jsx)(d, { ... function({
                        onButtonAction: e
                    }) {
                        return {
                            content: {
                                title: r.businessPlanTitle,
                                leftIllustration: A,
                                rightIllustration: x,
                                features: [{
                                    text: r.featureNotionAI,
                                    iconGroup: n(153270).a,
                                    styleType: "primary"
                                }, {
                                    text: r.enterpriseSearch,
                                    iconGroup: n(153270).a,
                                    styleType: "primary"
                                }, {
                                    text: r.aiMeetingNotes,
                                    iconGroup: n(153270).a,
                                    styleType: "primary"
                                }, {
                                    text: r.researchMode,
                                    iconGroup: n(153270).a,
                                    styleType: "primary"
                                }, {
                                    text: r.featureSamlSSO,
                                    iconGroup: n(153270).a,
                                    styleType: "primary"
                                }, {
                                    text: r.featureAndMore,
                                    styleType: "secondary"
                                }],
                                innerWidth: 318
                            },
                            footer: {
                                title: r.businessFooterTitle,
                                body: r.businessFooterBodyAfterBundling,
                                buttonText: r.footerButtonText,
                                buttonAction: e,
                                tertiaryContent: (0, a.jsx)(g, {
                                    upgrade: "business",
                                    externalLink: "https://www.notion.so/pricing"
                                })
                            }
                        }
                    }({
                        onButtonAction: e
                    })
                })
            }
            let A = {
                    src: n(896221).A.images.subscriptions.strokePng,
                    height: 62,
                    width: 58,
                    top: 4.5,
                    insetInlineStart: -45
                },
                x = {
                    src: n(896221).A.images.subscriptions.postUpgradeAssistantFaceWinkPng,
                    height: 70,
                    width: 70,
                    top: 176.5,
                    insetInlineEnd: -22
                };

            function P() {
                let e = (0, n(533992).v3)();
                return (0, n(383953).w)(() => {
                    s({
                        environment: e,
                        upgrade: "student"
                    })
                }), (0, a.jsx)(d, { ...w
                })
            }
            let T = {
                    src: n(896221).A.images.subscriptions.strokePng,
                    height: 62,
                    width: 58,
                    top: 4.5,
                    insetInlineStart: -45
                },
                v = {
                    src: n(896221).A.images.subscriptions.postUpgradeEducationPlanPng,
                    height: 70,
                    width: 71,
                    top: 172,
                    insetInlineEnd: -33
                },
                w = {
                    content: {
                        title: r.educationPlanTitle,
                        leftIllustration: T,
                        rightIllustration: v,
                        features: [{
                            text: r.featureContentCreation,
                            iconGroup: n(153270).a,
                            styleType: "primary"
                        }, {
                            text: r.featureFileUploads,
                            iconGroup: n(153270).a,
                            styleType: "primary"
                        }, {
                            text: r.featureCharts,
                            iconGroup: n(153270).a,
                            styleType: "primary"
                        }, {
                            text: r.featurePageHistory,
                            iconGroup: n(153270).a,
                            styleType: "primary"
                        }, {
                            text: r.featureCustomWebsites,
                            iconGroup: n(153270).a,
                            styleType: "primary"
                        }, {
                            text: r.featureAndMore,
                            styleType: "secondary"
                        }]
                    },
                    footer: {
                        title: r.educationFooterTitle,
                        body: r.educationFooterBody,
                        buttonText: r.footerButtonText,
                        buttonAction: e => {
                            o({
                                environment: e,
                                upgrade: "student"
                            }), n(672965).q.close()
                        },
                        tertiaryContent: (0, a.jsx)(g, {
                            upgrade: "student",
                            externalLink: (0, n(442564).x)("guides.notionForEducation")
                        })
                    }
                };

            function U({
                onButtonAction: e
            }) {
                let t = (0, n(533992).v3)();
                (0, n(383953).w)(() => {
                    s({
                        environment: t,
                        upgrade: "enterprise"
                    })
                });
                let i = function({
                    salesStatus: e,
                    onButtonAction: t
                }) {
                    let i = (0, n(216260).RL)({
                        currentSubscriptionTier: "enterprise",
                        salesStatus: e
                    });
                    return {
                        content: {
                            title: i ? r.enterpriseLimitedPlanTitle : r.enterprisePlanTitle,
                            leftIllustration: F,
                            rightIllustration: S,
                            features: C,
                            innerWidth: 318
                        },
                        footer: {
                            title: i ? r.enterpriseLimitedFooterTitle : r.enterpriseFooterTitle,
                            body: r.enterpriseFooterBody,
                            buttonText: r.footerButtonText,
                            buttonAction: t,
                            tertiaryContent: (0, a.jsx)(g, {
                                upgrade: "enterprise",
                                externalLink: "https://www.notion.com/enterprise"
                            })
                        }
                    }
                }({
                    salesStatus: (0, n(855021).q)(),
                    onButtonAction: e
                });
                return (0, a.jsx)(d, { ...i
                })
            }
            let F = {
                    src: n(896221).A.images.subscriptions.strokePng,
                    height: 62,
                    width: 58,
                    top: 4.5,
                    insetInlineStart: -45
                },
                S = {
                    src: n(896221).A.images.subscriptions.postUpgradeAssistantFaceWinkPng,
                    height: 106,
                    width: 107,
                    top: 153.5,
                    insetInlineEnd: -37
                },
                C = [{
                    text: r.featureNotionAI,
                    iconGroup: n(153270).a,
                    styleType: "primary"
                }, {
                    text: r.enterpriseSearch,
                    iconGroup: n(153270).a,
                    styleType: "primary"
                }, {
                    text: r.aiMeetingNotes,
                    iconGroup: n(153270).a,
                    styleType: "primary"
                }, {
                    text: r.featureUserProvisioning,
                    iconGroup: n(153270).a,
                    styleType: "primary"
                }, {
                    text: r.featureAdvancedSecurity,
                    iconGroup: n(153270).a,
                    styleType: "primary"
                }];

            function j({
                onButtonAction: e
            }) {
                let t = (0, n(533992).v3)(),
                    i = (0, n(960253).e)();
                return (0, n(383953).w)(() => {
                    s({
                        environment: t,
                        upgrade: "plus"
                    })
                }), (0, a.jsx)(d, { ... function({
                        onButtonAction: e,
                        theme: t
                    }) {
                        return {
                            content: {
                                title: r.plusPlanTitle,
                                leftIllustration: I,
                                rightIllustration: "dark" === t ? G : B,
                                features: [{
                                    text: r.featureContentCreation,
                                    iconGroup: n(153270).a,
                                    styleType: "primary"
                                }, {
                                    text: r.featureFileUploads,
                                    iconGroup: n(153270).a,
                                    styleType: "primary"
                                }, {
                                    text: r.featureCharts,
                                    iconGroup: n(153270).a,
                                    styleType: "primary"
                                }, {
                                    text: r.featurePageHistory,
                                    iconGroup: n(153270).a,
                                    styleType: "primary"
                                }, {
                                    text: r.featureCustomWebsites,
                                    iconGroup: n(153270).a,
                                    styleType: "primary"
                                }, {
                                    text: r.featureAndMore,
                                    styleType: "secondary"
                                }]
                            },
                            footer: {
                                title: r.plusFooterTitle,
                                body: r.plusFooterBody,
                                buttonText: r.footerButtonText,
                                buttonAction: e,
                                tertiaryContent: (0, a.jsx)(g, {
                                    upgrade: "plus",
                                    externalLink: "https://www.notion.so/pricing"
                                })
                            }
                        }
                    }({
                        onButtonAction: e,
                        theme: i
                    })
                })
            }
            let I = {
                    src: n(896221).A.images.subscriptions.strokePng,
                    height: 62,
                    width: 58,
                    top: 4.5,
                    insetInlineStart: -45
                },
                k = {
                    height: 67.595,
                    width: 95.357,
                    top: 178,
                    insetInlineEnd: -29
                },
                B = { ...k,
                    src: n(896221).A.images.aiForWork.airplanePng
                },
                G = { ...k,
                    src: n(896221).A.images.aiForWork.airplaneDarkPng
                };

            function N({
                spaceStore: e,
                data: t
            }) {
                let r, s = null == e ? void 0 : e.id,
                    l = (0, n(682985).O$)(n(672965).q),
                    d = (0, n(682985).K8)(() => (0, n(717274).Pe)(), []),
                    u = (0, i.useMemo)(() => (0, n(64273).nc)(), []),
                    c = (0, n(682985).K8)(() => u.state.modalOpen, [u]),
                    p = (0, n(133565).E)({
                        spaceId: s
                    }),
                    g = (0, n(205954).k4)({
                        spaceStore: e
                    }),
                    m = (0, i.useCallback)(() => "on" === n(218744).default.getEligibleGroup({
                        experimentId: "post_upgrade_announcement_modal_invite_teammate_2",
                        defaultGroup: "control"
                    }), []),
                    f = (0, i.useCallback)(() => {
                        n(672965).q.close(), m() && u.update(e => ({ ...e,
                            modalOpen: !0
                        }))
                    }, [u, m]);
                if (!d) return null;
                if (c) return (0, a.jsx)(n(239697).H, {
                    disabled: !g,
                    targetStore: e,
                    spaceStore: e,
                    permissionsInviteStore: u,
                    isSubscribed: p,
                    membersOnly: !1,
                    upgradeButtonName: "space_permission_settings_invite_teammate_button",
                    shouldGrow: !1,
                    analyticsFrom: "post_upgrade_announcement",
                    origin: (0, a.jsx)(a.Fragment, {})
                });
                if (!l.open || !l.productUpgrade) return null;
                let y = _({
                    product: l.productUpgrade,
                    buttonActionHandler: (r = l.productUpgrade, e => {
                        o({
                            environment: e,
                            upgrade: r
                        }), n(672965).q.close(), m() && u.update(e => ({ ...e,
                            modalOpen: !0
                        }))
                    })
                });
                return y ? (0, a.jsx)(n(833503).s, {
                    ariaLabelledBy: n(828432).CQ2,
                    isOpen: l.open,
                    onClosed: f,
                    animateSizeTransition: !1,
                    areaConstraint: {
                        width: {
                            type: "min",
                            length: 480
                        },
                        height: {
                            type: "unlimited",
                            scroll: "allow"
                        }
                    },
                    children: () => y
                }) : null
            }

            function _({
                product: e,
                buttonActionHandler: t
            }) {
                switch (e) {
                    case "plus":
                        return (0, a.jsx)(j, {
                            onButtonAction: t
                        });
                    case "business":
                        return (0, a.jsx)(M, {
                            onButtonAction: t
                        });
                    case "enterprise":
                        return (0, a.jsx)(U, {
                            onButtonAction: t
                        });
                    case "student":
                        return (0, a.jsx)(P, {});
                    case "ai":
                        return (0, a.jsx)(m, {});
                    default:
                        return null
                }
            }
        },
        205954: (e, t, n) => {
            function i({
                spaceStore: e,
                members: t
            }) {
                let r = s({
                        spaceStore: e
                    }),
                    o = (0, n(533992).v3)(),
                    a = e.id,
                    [l] = (0, n(97668).Yb)(async () => {
                        if (!r) return;
                        let e = await o.api.callApi({
                            eventName: "getRecentlyRemovedUsers",
                            environment: o,
                            data: {
                                spaceId: a
                            }
                        });
                        if ("failed" === e.type) throw n(647095).Qg(e), e;
                        return e.data.recentlyRemovedMembers
                    }, [a, o, r, t]);
                return l.value
            }

            function r({
                spaceStore: e,
                subscriptionData: t
            }) {
                let i = o({
                        spaceStore: e,
                        subscriptionData: t
                    }),
                    s = (0, n(533992).v3)();
                (0, n(97668).Yb)(async () => {
                    if (!i) return;
                    let t = await s.api.callApi({
                        eventName: "getRecoverableSpaceUserContent",
                        environment: s,
                        data: {
                            spaceId: e.id
                        }
                    });
                    if ("failed" === t.type) throw t;
                    let r = t.data.recentSpaceRecoverPages;
                    return n(111057).A.setState({ ...n(111057).A.state,
                        recentRecoverableUsers: r
                    }), r
                }, [e, s, i])
            }

            function o({
                spaceStore: e,
                subscriptionData: t
            }) {
                return (0, n(682985).K8)(() => e.canAdmin() && n(262166).OX(t.subscriptionTier), [t, e])
            }

            function s({
                spaceStore: e
            }) {
                return (0, n(682985).K8)(() => e.canAdmin(), [e])
            }

            function a({
                spaceStore: e
            }) {
                return (0, n(682985).K8)(() => !!e && e.canEditMembership(), [e])
            }

            function l({
                spaceStore: e
            }) {
                let t = (0, n(993077).U2)(e);
                return (0, n(682985).K8)(() => (0, n(405461).Ny)({
                    spaceStore: e,
                    spaceUserStore: t
                }), [e, t])
            }

            function d() {
                let e = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => (0, n(939588).v)(e), [e])
            }

            function u({
                spaceStore: e
            }) {
                let t = (0, n(394810).h)(e);
                return (0, n(682985).K8)(() => !!((null == e ? void 0 : e.canEditMembership()) && t), [e, t])
            }

            function c({
                spaceStore: e
            }) {
                let t = (0, n(394810).h)(e),
                    i = !!((0, n(682985).K8)(() => null == e ? void 0 : e.canAdmin(), [e]) && t);
                return {
                    hoverCard: i,
                    directory: i,
                    activity: i
                }
            }
            n.d(t, {
                BV: () => i,
                Gg: () => u,
                Ul: () => c,
                k4: () => a,
                qz: () => l,
                r1: () => s,
                rl: () => r,
                t1: () => o,
                zh: () => d
            })
        },
        239697: (e, t, n) => {
            n.d(t, {
                H: () => r
            });
            let i = new(n(815048)).O2("permissionsInviteWithModal", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(26361), n.e(16471), n.e(37353), n.e(62475), n.e(3151), n.e(18965), n.e(98629), n.e(96527), n.e(30085), n.e(90109), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(54951), n.e(43444), n.e(23979), n.e(17250), n.e(26997), n.e(73259), n.e(28048), n.e(93430), n.e(55940), n.e(12560), n.e(88268), n.e(12001), n.e(40198), n.e(39726), n.e(31243), n.e(42534), n.e(86662), n.e(14886), n.e(39225), n.e(6212), n.e(2626), n.e(64453), n.e(4779), n.e(21969), n.e(29663), n.e(28482), n.e(76361), n.e(14369), n.e(74145), n.e(48860), n.e(75136), n.e(98175), n.e(18682), n.e(79349), n.e(58360), n.e(33162), n.e(82538), n.e(63793), n.e(18881), n.e(62731), n.e(41049), n.e(60262), n.e(72805), n.e(18416), n.e(2276), n.e(30532), n.e(73588), n.e(3723), n.e(91100), n.e(78311), n.e(4287), n.e(9817), n.e(65594), n.e(47302), n.e(91636), n.e(36441), n.e(64049), n.e(75189), n.e(28372), n.e(28663), n.e(47281), n.e(29087), n.e(46350), n.e(75234), n.e(67281), n.e(66200), n.e(52064), n.e(69626), n.e(82816), n.e(2832), n.e(48095), n.e(67098), n.e(35118), n.e(63611), n.e(94849), n.e(75484), n.e(98821), n.e(97711), n.e(89076), n.e(86998), n.e(58889), n.e(22920), n.e(9914), n.e(78257), n.e(84382), n.e(51386), n.e(95150), n.e(10471), n.e(87087), n.e(98419), n.e(11719), n.e(13592), n.e(6743), n.e(5234), n.e(85376), n.e(67252), n.e(42709), n.e(44903), n.e(92181), n.e(7251), n.e(72143), n.e(67612), n.e(53478), n.e(75559), n.e(86793), n.e(34), n.e(54253), n.e(26665), n.e(67984), n.e(605), n.e(75681)]).then(n.bind(n, 949290))),
                r = (0, n(815048)._h)(i, e => e.PermissionsInviteWithModal)
        },
        394810: (e, t, n) => {
            n.d(t, {
                h: () => i
            });

            function i(e) {
                var t;
                let {
                    spaceId: i,
                    currentUserId: r
                } = (0, n(682985).K8)(() => {
                    var t;
                    return {
                        spaceId: null == e ? void 0 : e.id,
                        currentUserId: null == (t = n(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id
                    }
                }, [e]), o = (0, n(217844)._)({
                    name: "members",
                    spaceId: i,
                    userId: r,
                    amount: "unknown"
                }), s = null == o || null == (t = o.limit) ? void 0 : t.total;
                return !!s && ("unlimited" === s || s > 1)
            }
        },
        405461: (e, t, n) => {
            function i(e) {
                let {
                    intl: t,
                    groupName: i
                } = e;
                return i || t.formatMessage(n(95384).D.untitledGroupName)
            }

            function r(e) {
                var t;
                return (null == (t = n(801062).h.getGroupData(e.groupId)) ? void 0 : t.memberCount) ? ? 0
            }

            function o(e) {
                let {
                    userIds: t,
                    limit: i,
                    spaceStore: r
                } = e;
                if (!r) return {
                    countRemainingUsers: 0,
                    limitedUserStores: []
                };
                let o = i ? t.slice(0, i) : t;
                return {
                    limitedUserStores: n(381453).oE(o.map(e => n(807825).L.createChildStore(r, {
                        table: n(832375).oo9,
                        id: e
                    }))),
                    countRemainingUsers: t.length - o.length
                }
            }

            function s({
                userStores: e,
                spaceStore: t,
                intl: i
            }) {
                return n(381453).Ul(e, e => e.getSearchName(i)).sort((e, i) => {
                    if (!t) return 0;
                    let r = (0, n(993077).dp)(t, e.id).getMembershipTypeAsRoleOrNone(),
                        o = (0, n(993077).dp)(t, i.id).getMembershipTypeAsRoleOrNone();
                    return r && o ? n(642157).hV.indexOf(o) - n(642157).hV.indexOf(r) : 0
                })
            }

            function a(e) {
                var t;
                let {
                    spaceStore: i,
                    spaceUserStore: r
                } = e;
                if (!i) return !1;
                let o = (null == r ? void 0 : r.getMembershipType()) ? ? "none",
                    s = null == (t = i.getModel()) ? void 0 : t.getGroupCreationPolicy();
                switch (o) {
                    case "none":
                    case "page_guest":
                    case "restricted_member":
                        return !1;
                    case "member":
                        return "all_workspace_members" === s;
                    case "membership_admin":
                    case "owner":
                        return !0;
                    default:
                        return (0, n(722371).HB)(o)
                }
            }

            function l(e) {
                let {
                    groupId: t,
                    delta: i
                } = e, r = n(801062).h.getGroupData(t);
                r && n(801062).h.updateGroup(t, {
                    memberCount: Math.max(0, r.memberCount + i)
                })
            }

            function d(e) {
                let {
                    members: t,
                    query: n
                } = e, i = n.trim().toLowerCase();
                return "" === i ? t : t.filter(e => e.name.toLowerCase().includes(i) || void 0 !== e.email && e.email.toLowerCase().includes(i))
            }

            function u(e) {
                let {
                    memberUserIds: t,
                    spaceStore: i,
                    groupId: r,
                    currentUserId: o
                } = e;
                return t.map(e => {
                    let t = n(807825).L.createChildStore(i, {
                            table: n(832375).oo9,
                            id: e
                        }),
                        s = (0, n(13717).A)({
                            spaceStore: i,
                            groupId: r,
                            userId: e
                        }),
                        a = n(229903).V.createChildStore(i, (0, n(729052).i1)({
                            userId: e,
                            spaceId: i.id
                        }));
                    return {
                        userId: e,
                        name: t.getName() ? ? t.getEmail() ? ? "",
                        email: t.getEmail(),
                        avatarUrl: t.getProfilePhoto(),
                        isCurrentUser: e === o,
                        isOwner: "owner" === s.getMembershipType(),
                        isWorkspaceOwner: i.canAdmin(),
                        isRestrictedMember: a.isRestrictedMember() ? ? !0
                    }
                })
            }

            function c(e) {
                let {
                    users: t,
                    existingMemberIds: n
                } = e, i = new Set(n);
                return t.filter(e => !i.has(e.id)).map(e => ({
                    userId: e.id,
                    name: e.name ? ? e.email ? ? "",
                    email: e.email,
                    avatarUrl: e.profile_photo
                }))
            }

            function p(e) {
                let {
                    groupId: t,
                    groupStore: i
                } = e;
                n(801062).h.updateGroup(t, {
                    group: i.getModel()
                })
            }
            n.d(t, {
                A9: () => c,
                Fz: () => u,
                Ny: () => a,
                Pf: () => i,
                cp: () => s,
                gA: () => o,
                mi: () => d,
                s: () => l,
                sd: () => p,
                xQ: () => r
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(581454)
        },
        446566: (e, t, n) => {
            n.d(t, {
                c: () => s
            }), n(581454), n(296540);
            var i = n(474848);
            let r = {
                    width: "fit-content"
                },
                o = {
                    position: "relative"
                };

            function s(e) {
                let {
                    title: t,
                    features: o,
                    leftIllustration: s,
                    rightIllustration: a,
                    innerWidth: l,
                    height: u,
                    variant: c
                } = e, p = function(e) {
                    let {
                        variant: t
                    } = e;
                    return (0, n(960253).I)(() => ({
                        container: {
                            position: "relative",
                            background: "announcement" === t ? n(632079).Tj.background.secondaryTranslucent : n(632079).Tj.blue.text.accentPrimary,
                            overflow: "hidden"
                        },
                        innerContainer: {
                            position: "relative",
                            top: 16.5,
                            background: n(632079).Tj.background.elevated,
                            borderRadius: 16,
                            boxShadow: "announcement" === t ? n(632079).Tj.shadow.outline.diffuse : n(632079).Tj.shadow.outline.md
                        }
                    }), [t])
                }({
                    variant: c
                });
                return (0, i.jsx)(n(4458).VP, {
                    className: "autolayout-fill-width",
                    height: u,
                    style: p.container,
                    paddingInline: 16,
                    paddingTop: 24,
                    gap: 8,
                    alignItems: "center",
                    children: (0, i.jsxs)(n(4458).VP, {
                        gap: 16,
                        paddingTop: 32,
                        paddingInlineEnd: 24,
                        paddingBottom: 20,
                        paddingInlineStart: 32,
                        width: l ? ? 300,
                        height: 306,
                        style: p.innerContainer,
                        children: [s ? (0, i.jsx)(d, { ...s
                        }) : void 0, a ? (0, i.jsx)(d, { ...a
                        }) : void 0, (0, i.jsx)("div", {
                            style: r,
                            children: t
                        }), (0, i.jsx)(g, {
                            features: o
                        })]
                    })
                })
            }
            let a = {
                    position: "absolute",
                    zIndex: 2
                },
                l = {
                    height: "100%",
                    width: "100%"
                };

            function d(e) {
                let {
                    src: t,
                    ...n
                } = e;
                return t ? "string" == typeof t ? (0, i.jsx)("div", {
                    style: { ...a,
                        ...n
                    },
                    children: (0, i.jsx)("img", {
                        style: l,
                        src: t,
                        alt: "illustration"
                    })
                }) : (0, i.jsx)("div", {
                    style: n,
                    children: t
                }) : null
            }
            let u = {
                overflow: "hidden",
                textOverflow: "ellipsis"
            };

            function c(e) {
                let {
                    secondaryText: t,
                    text: r,
                    iconGroup: s,
                    styleType: a
                } = e, l = (0, n(109939).tz)();
                return (0, i.jsxs)(n(4458).fI, {
                    gap: 6,
                    style: o,
                    children: [s ? (0, i.jsx)(n(708966).Q, {
                        variantName: "default",
                        iconGroup: s,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    }) : void 0, (0, i.jsxs)(n(4458).VP, {
                        gap: 2,
                        style: o,
                        flex: "1 1 0",
                        children: [(0, i.jsx)(n(111010).D, {
                            colorVariant: "secondary" === a ? "tertiary" : "primary",
                            styleKey: "bodyRegular",
                            children: l.formatMessage(r)
                        }), t ? (0, i.jsx)(n(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            style: u,
                            children: l.formatMessage(t)
                        }) : void 0]
                    })]
                })
            }
            let p = {
                position: "relative",
                listStyleType: "none",
                lineHeight: "22px",
                gap: 14,
                paddingInlineStart: 0
            };

            function g(e) {
                let {
                    features: t
                } = e;
                return (0, i.jsx)(n(4458).VP, {
                    style: p,
                    children: t.map((e, t) => (0, i.jsx)(c, { ...e
                    }, t))
                })
            }
        },
        939588: (e, t, n) => {
            n.d(t, {
                v: () => i
            });

            function i(e) {
                var t;
                let i;
                return t = ["personal", "student", "personal_free"], !((i = (0, n(216260).AI)()) && t.includes(i))
            }
        }
    }
]);