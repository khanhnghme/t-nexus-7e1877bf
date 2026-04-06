"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [11126], {
        279398: (e, o, a) => {
            a.r(o), a.d(o, {
                onboardingFlowNameToFlowConfig: () => i
            });
            var t = a.n(a(794148));
            let i = {
                samsung_preload_onboarding_flow: {
                    isEnabledForDesktop: !1,
                    isEnabledForMobile: !0,
                    getMobileStages: e => ["mobile_profile", "mobile_onboarding_workspace_choose", "mobile_onboarding_plan_type_choose", "mobile_onboarding_category_survey", ...(0, a(938450).getMobileTutorialStages)(e)],
                    onStartFlow: () => {},
                    onCompleteFlow: async (e, o, t) => {
                        let {
                            defaultOnboardingComplete: i
                        } = await a(345453).contextualizedOnboardingDeps.contextualizedOnboardingActions.load();
                        await i(e, t, {
                            shouldApplyTrial: !0
                        })
                    },
                    shouldShowFlowToUser: async e => {
                        if (!(0, a(907620).T)("isSamsungPreload")) return !1;
                        let o = e.device.mobileNativeUniqueId;
                        return !!o && !!await (0, a(413552).Cy)(e, {
                            spaceId: void 0,
                            offerCampaign: "samsung_tablet_preload_2025_business",
                            deviceId: {
                                type: "android",
                                id: o
                            }
                        })
                    }
                },
                partner_program_onboarding_flow: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !0,
                    getDesktopStages: () => ["profile", "offer_eligibility_workspace_choose", "onboarding_plan_type_choose", "onboarding_category_survey", "partner_program_onboarding_checkout"],
                    getMobileStages: e => ["mobile_profile", "mobile_offer_eligibility_workspace_choose", "mobile_onboarding_plan_type_choose", "mobile_onboarding_category_survey", "mobile_partner_program_onboarding_checkout"],
                    onStartFlow: () => {},
                    onCompleteFlow: async (e, o, t) => {
                        if ("partner_program_onboarding_flow" !== o.flowName || !o.onboardingData) return;
                        if ((0, a(13565).fu)(), o.selectedEligibleWorkspaceId) {
                            var i, n;
                            let {
                                redirectAfterContextualizedOnboardingComplete: t
                            } = await a(345453).contextualizedOnboardingDeps.contextualizedOnboardingActions.load(), r = (0, a(909117).sg)(o.onboardingData);
                            await t({
                                environment: e,
                                spaceViewId: null == (i = a(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : i.id,
                                spaceId: null == (n = (0, a(328765).S)()) ? void 0 : n.id,
                                onboardingData: o.onboardingData,
                                spaceJoinOrCreate: "join",
                                redirectData: r,
                                onboardingFlow: o.flowName,
                                onboardingState: o,
                                permissionLevel: (0, a(909117).S1)(r)
                            });
                            return
                        }
                        let {
                            defaultOnboardingComplete: r
                        } = await a(345453).contextualizedOnboardingDeps.contextualizedOnboardingActions.load();
                        await r(e, t)
                    },
                    shouldShowFlowToUser: e => void 0 !== (0, a(13565).OC)()
                },
                startup_trial_onboarding_flow: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !1,
                    getDesktopStages: () => ["profile", "startup_application_survey", "offer_eligibility_workspace_choose", "team_onboarding_timed_trial_checkout"],
                    onStartFlow: () => {},
                    onCompleteFlow: async (e, o, t) => {
                        if ("startup_trial_onboarding_flow" !== o.flowName || !o.onboardingData) return;
                        if ((0, a(13565).JW)(), o.selectedEligibleWorkspaceId) {
                            var i, n;
                            let {
                                redirectAfterContextualizedOnboardingComplete: t
                            } = await a(345453).contextualizedOnboardingDeps.contextualizedOnboardingActions.load(), r = (0, a(909117).sg)(o.onboardingData);
                            await t({
                                environment: e,
                                spaceViewId: null == (i = a(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : i.id,
                                spaceId: null == (n = (0, a(328765).S)()) ? void 0 : n.id,
                                onboardingData: o.onboardingData,
                                spaceJoinOrCreate: "join",
                                redirectData: r,
                                onboardingFlow: o.flowName,
                                onboardingState: o,
                                permissionLevel: (0, a(909117).S1)(r)
                            });
                            return
                        }
                        if (o.startupTrialCampaign && (0, a(722371).Xk)(a(994234).jy, o.startupTrialCampaign)) {
                            let {
                                defaultOnboardingComplete: o
                            } = await a(345453).contextualizedOnboardingDeps.contextualizedOnboardingActions.load();
                            await o(e, t, {
                                shouldApplyTrial: !0
                            });
                            return
                        }
                        let {
                            defaultOnboardingComplete: r
                        } = await a(345453).contextualizedOnboardingDeps.contextualizedOnboardingActions.load();
                        await r(e, t)
                    },
                    shouldShowFlowToUser: () => {
                        var e;
                        return void 0 !== (0, a(13565).Qp)() && "professional" === (null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.domain_type)
                    }
                },
                meeting_notes_flow: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !0,
                    getDesktopStages: () => ["profile", "onboarding_workspace_choose", "cc_upfront_required" === (0, a(717274).tK)({
                        disableExposureLogging: !0
                    }) ? "meeting_notes_mandatory_cc_upfront_checkout" : "team_onboarding_timed_trial_checkout"],
                    getMobileStages: e => ["mobile_profile", "mobile_onboarding_workspace_choose"],
                    onStartFlow: () => {},
                    shouldShowFlowToUser: (e, o) => ((0, a(759466).R)(a(728372).AppStoreCurrentUserRootStore.state) ? ? 0) === 0 && "meeting_notes" === (0, a(13565).J0)()
                },
                notion_for_work_flow: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !1,
                    getDesktopStages: () => ["profile", "team_onboarding_invite", "team_onboarding_timed_trial_checkout"],
                    shouldShowFlowToUser: () => ((0, a(759466).R)(a(728372).AppStoreCurrentUserRootStore.state) ? ? 0) === 0 && "notion_for_work" === (0, a(13565).J0)(),
                    onStartFlow: () => {}
                },
                form_response_onboarding: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !0,
                    getDesktopStages: () => ["profile", "onboarding_workspace_choose"],
                    getMobileStages: () => ["mobile_profile", "mobile_onboarding_workspace_choose"],
                    onStartFlow: () => {},
                    onCompleteFlow: async (e, o, i) => {
                        t()("form_response_onboarding" === o.flowName);
                        let {
                            defaultOnboardingComplete: n
                        } = await a(345453).contextualizedOnboardingDeps.contextualizedOnboardingActions.load();
                        await n(e, i), (0, a(600774).V)({
                            formResponseId: o.formResponseId,
                            secretKey: o.secretKey,
                            formSpaceId: o.formSpaceId
                        })
                    },
                    shouldShowFlowToUser: () => 0 === (0, a(759466).R)(a(728372).AppStoreCurrentUserRootStore.state) && (0, a(690940).A)()
                },
                mail_onboarding: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !0,
                    getDesktopStages: () => [],
                    getMobileStages: () => [],
                    onStartFlow: () => {},
                    onCompleteFlow: async (e, o, t) => {
                        let {
                            setAndTrackContextualizedOnboardingComplete: i
                        } = await a(345453).contextualizedOnboardingDeps.contextualizedOnboardingActions.load(), {
                            onboardingData: n,
                            joinableSpaces: r
                        } = o;
                        if (!n) return;
                        let {
                            onboardingStateActions: l
                        } = await a(84).Q.load();
                        if (a(262058).m({
                                message: l.messages.creatingWorkspace
                            }), 0 === r.length && n.canUserCreateSpace) {
                            let t = a(962299).A.getIntl(),
                                r = n.userStore.getFullName(t),
                                {
                                    spaceViewStore: l
                                } = await (0, a(769818).b)({
                                    environment: e,
                                    planType: "personal",
                                    planSelection: "personal",
                                    name: r ? (0, a(909117).JR)(r, t) : (0, a(909117).CD)(t),
                                    userRootStore: n.userRootStore,
                                    analyticsFrom: "onboarding",
                                    icon: void 0,
                                    userPersona: "unfilled"
                                });
                            a(380762).I$(e, l, !0), i({
                                environment: e,
                                onboardingState: o,
                                userStore: n.userStore,
                                spaceJoinOrCreate: "create",
                                permissionLevel: "member"
                            })
                        }
                        await a(941701).transactionQueue.drain(), a(262058).V();
                        let s = (0, a(13565).dw)();
                        a(773352).log({
                            data: {
                                miscDataToConvertToString: {
                                    from: "getPostOnboardingRedirectURL",
                                    redirectUrl: s
                                }
                            },
                            from: "contextualizedOnboardingflowDefinitions",
                            level: "debug",
                            type: "mail_onboarding:onCompleteFlow"
                        });
                        let d = s && (0, a(760578).VB)(s, "production");
                        if (s && d) {
                            let o = a(758654).O$(s, {
                                from: "contextualizedOnboardingWithPostOnboardingRedirect"
                            });
                            (0, a(79266).navigate)({
                                environment: e,
                                url: `${o}#activeUserID=${e.currentUser.id}`
                            })
                        } else await (0, a(250662).Zt)({
                            environment: e,
                            from: "contextualizedOnboarding",
                            targetSelf: !0
                        })
                    },
                    shouldShowFlowToUser: () => "mail" === (0, a(13565).dY)()
                },
                calendar_onboarding: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !0,
                    getDesktopStages: () => ["profile"],
                    getMobileStages: () => ["mobile_profile"],
                    onStartFlow: () => {},
                    onCompleteFlow: async (e, o, t) => {
                        await a(941701).transactionQueue.drain(), await (0, a(874809).J7)({
                            environment: e,
                            url: `${a(986939).A.domainBaseUrl}/calendarAuth/`,
                            from: "contextualizedOnboarding",
                            targetSelf: !0
                        })
                    },
                    shouldShowFlowToUser: () => 0 === (0, a(759466).R)(a(728372).AppStoreCurrentUserRootStore.state) && "calendar" === (0, a(13565).dY)()
                },
                performance_marketing_term_onboarding: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !1,
                    getDesktopStages: () => ["reimagined_profile", "reimagined_workspace_choose", "reimagined_plan_type", "reimagined_invite"],
                    onStartFlow: () => {},
                    shouldShowFlowToUser: () => "gantt" === (0, a(639878).TQ)() || "crm" === (0, a(639878).TQ)() || "projectManagement" === (0, a(639878).TQ)()
                },
                mobile_tutorial_onboarding: {
                    isEnabledForDesktop: !1,
                    isEnabledForMobile: !0,
                    getMobileStages: e => (0, a(938450).getMobileTutorialStages)(e),
                    onStartFlow: () => {},
                    onCompleteFlow: async (e, o, t) => {
                        var i, n;
                        let r = o.onboardingData;
                        if (!r) return;
                        let {
                            redirectAfterContextualizedOnboardingComplete: l
                        } = await a(345453).contextualizedOnboardingDeps.contextualizedOnboardingActions.load(), s = (0, a(909117).sg)(r);
                        await l({
                            environment: e,
                            spaceViewId: null == (i = a(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : i.id,
                            spaceId: null == (n = (0, a(328765).S)()) ? void 0 : n.id,
                            onboardingData: r,
                            spaceJoinOrCreate: "join",
                            redirectData: s,
                            onboardingFlow: o.flowName,
                            onboardingState: o,
                            permissionLevel: (0, a(909117).S1)(s)
                        })
                    },
                    shouldShowFlowToUser: (e, o) => !!o
                },
                mobile_standalone_ai_app: {
                    isEnabledForDesktop: !1,
                    isEnabledForMobile: !0,
                    getMobileStages: e => ["mobile_profile", "mobile_onboarding_workspace_choose", "mobile_onboarding_plan_type_choose"],
                    onStartFlow: () => {},
                    onCompleteFlow: async (e, o, t) => {
                        let {
                            defaultOnboardingComplete: i
                        } = await a(345453).contextualizedOnboardingDeps.contextualizedOnboardingActions.load();
                        await i(e, t)
                    },
                    shouldShowFlowToUser: e => "standalone_ai" === (0, a(13565).dY)()
                },
                reimagined_default: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !1,
                    onStartFlow: () => {},
                    shouldShowFlowToUser: e => {
                        let o = (0, a(759466).R)(a(728372).AppStoreCurrentUserRootStore.state);
                        return void 0 === o && (0, a(104310).u)({
                            event: {
                                eventName: "onboarding_undefined_space_view_count",
                                eventProperties: {}
                            }
                        }), !((o ? ? 0) !== 0 || (0, a(938450).hasMultipleLoggedInUsers)(e)) && (a(218744).default.getEligibleGroup({
                            experimentId: "onboarding_flow_aa",
                            defaultGroup: "control"
                        }), "reimagined_ui" === a(218744).default.getEligibleGroup({
                            experimentId: "reimagined_onboarding_4",
                            defaultGroup: "control"
                        }))
                    },
                    getDesktopStages: () => ["reimagined_profile", "reimagined_workspace_choose", "reimagined_plan_type", "reimagined_desktop_download", "reimagined_invite", "reimagined_business_trial_offer", "reimagined_business_trial_checkout", "reimagined_team_desktop_download", "onboarding_setup_sessions_book"]
                },
                second_workspace_flow: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !1,
                    getDesktopStages: () => ["onboarding_workspace_choose", "onboarding_plan_type_choose", "reimagined_invite", "reimagined_business_trial_offer", "reimagined_business_trial_checkout"],
                    onStartFlow: () => {},
                    onCompleteFlow: async (e, o, t) => {
                        let {
                            defaultOnboardingComplete: i
                        } = await a(345453).contextualizedOnboardingDeps.contextualizedOnboardingActions.load();
                        await i(e, t), a(250384).H.close()
                    },
                    shouldShowFlowToUser: () => a(250384).H.state.isOpen
                },
                default: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !0,
                    getDesktopStages: () => ["profile", "onboarding_workspace_choose", "onboarding_plan_type_choose", "onboarding_category_survey", "desktop_onboarding_promote_app_download", "team_onboarding_invite", "team_onboarding_timed_trial_offer", "team_onboarding_timed_trial_checkout", "onboarding_calendar_signup", "team_desktop_onboarding_promote_app_download", "onboarding_agent_personalization_for_work_users_at_end_of_onboarding"],
                    getMobileStages: e => {
                        let o = ["mobile_profile", "mobile_onboarding_workspace_choose", "mobile_onboarding_plan_type_choose", ...a(218744).default.checkGate({
                                gateName: "adoption_skip_mobile_usecase_selection"
                            }) ? [] : ["mobile_onboarding_category_survey"], "mobile_team_onboarding_invite"],
                            t = (0, a(938450).getMobileTutorialStages)(e);
                        return "on" === (0, a(350200).K)({
                            environment: e,
                            disableExposureLogging: !0
                        }) ? [...o, "mobile_onboarding_promote_app_download"] : [...o, ...t]
                    },
                    onStartFlow: () => {},
                    shouldShowFlowToUser: (e, o) => (void 0 === (0, a(759466).R)(a(728372).AppStoreCurrentUserRootStore.state) && (0, a(104310).u)({
                        event: {
                            eventName: "onboarding_undefined_space_view_count",
                            eventProperties: {}
                        }
                    }), !o)
                },
                undefined: {
                    isEnabledForDesktop: !0,
                    isEnabledForMobile: !0,
                    getDesktopStages: () => [],
                    getMobileStages: () => [],
                    onStartFlow: () => {},
                    onCompleteFlow: async () => {},
                    shouldShowFlowToUser: () => !1
                }
            }
        },
        350200: (e, o, a) => {
            a.d(o, {
                K: () => t
            });

            function t(e) {
                let {
                    environment: o,
                    disableExposureLogging: t
                } = e;
                return o.device.isMobileBrowser ? a(218744).default.getEligibleGroup({
                    experimentId: "mweb_onboard_before_download_exp",
                    defaultGroup: "control",
                    disableExposureLogging: t
                }) : "control"
            }
        },
        413552: (e, o, a) => {
            async function t(e, o) {
                var t;
                let {
                    offerCampaign: i,
                    offerCode: n,
                    ...r
                } = o;
                if (i && (!r.spaceId || null != (t = (0, a(328765).S)()) && t.canAdmin())) {
                    if (r.spaceId) return a(617995).I.awaitData(e, {
                        spaceId: r.spaceId,
                        offerCampaign: i,
                        offerCode: n,
                        deviceId: r.deviceId
                    });
                    if (r.deviceId) {
                        let o = await e.api.callApi({
                            eventName: "getCustomerOffer",
                            environment: e,
                            data: { ...r,
                                offerCampaign: i,
                                offerCode: n
                            }
                        });
                        if ("failed" === o.type) return;
                        if ("offer" in o.data && o.data.offer) return o.data.offer
                    }
                }
            }
            a.d(o, {
                Cy: () => t,
                L6: () => r,
                VY: () => i
            }), a(898992), a(737550);
            let i = (0, a(381453).sg)(n, 1e3, {
                leading: !0,
                trailing: !1
            });
            async function n(e) {
                let {
                    environment: o,
                    spaceId: t,
                    offerCampaign: i,
                    entrypoint: n
                } = e, r = await o.api.callApi({
                    eventName: "applyCustomerOffer",
                    environment: o,
                    data: {
                        spaceId: t,
                        offerCampaign: i,
                        entrypoint: n ? ? "unknown"
                    }
                });
                return "failed" === r.type ? void a(647095).Qg(r) : (await a(185995).default.resetData(o, {
                    spaceId: t
                }), r)
            }
            async function r(e) {
                let {
                    environment: o,
                    spaceId: a,
                    offerCampaign: i,
                    deviceId: n
                } = e;
                return void 0 !== await t(o, {
                    spaceId: a,
                    offerCampaign: i,
                    deviceId: n
                })
            }
        },
        769818: (e, o, a) => {
            a.d(o, {
                b: () => i
            }), a(16280);
            let t = (0, a(109939).YK)({
                goOnlineCreateSpace: {
                    id: "spaceActions.createSpace.goOnlineCreateSpace",
                    defaultMessage: "Please go online to create your workspace."
                },
                createSpaceError: {
                    id: "spaceActions.createSpace.createSpaceError",
                    defaultMessage: "Sorry! We could not create your workspace. Please try again."
                },
                loginToCreateSpace: {
                    id: "spaceActions.createSpace.loginToCreateSpace",
                    defaultMessage: "Please log in to create a workspace."
                }
            });
            async function i(e) {
                let {
                    environment: o,
                    name: i,
                    domain: n,
                    userRootStore: r,
                    emailDomains: l,
                    analyticsFrom: s,
                    icon: d,
                    planType: p,
                    planSelection: _,
                    userPersona: g,
                    shouldCreateUserPersonaTeam: c,
                    shouldMakeUserPersonaTeamDefault: b,
                    collaborativeIntent: u,
                    source: m,
                    joinableSpacesViewType: w
                } = e, {
                    id: f
                } = o.currentUser;
                if (f) {
                    let e = await o.api.callApi({
                        eventName: "createSpace",
                        environment: o,
                        data: {
                            name: i,
                            domain: n,
                            emailDomains: l,
                            icon: d,
                            planType: p,
                            planSelection: _,
                            initialPersona: g,
                            shouldCreateUserPersonaTeam: c,
                            shouldMakeUserPersonaTeamDefault: b,
                            domainType: (0, a(904434).FX)(),
                            collaborativeIntent: u,
                            deviceId: await (0, a(128190).getExperimentDeviceId)(o),
                            deviceType: o.device.deviceType,
                            desktopTargetPlatform: o.device.desktopTargetPlatform,
                            source: m,
                            joinableSpacesViewType: w
                        }
                    });
                    if ("failed" === e.type) {
                        if (e.offline) throw Error(a(962299).A.formatMessage(t.goOnlineCreateSpace));
                        throw Error(a(962299).A.formatMessage(t.createSpaceError))
                    }
                    let {
                        spaceId: S,
                        teamId: h,
                        inviteLinkCode: F
                    } = e.data, k = new(a(695906)).SpaceStore(o, {
                        table: a(832375).NXh,
                        id: S
                    }), v = h ? a(681735).h.createChildStore(k, {
                        table: a(832375).yKj,
                        id: h
                    }) : void 0, {
                        serverCommitResult: y,
                        performResult: {
                            spaceViewStore: D
                        }
                    } = (0, a(377796).createAndCommit)({
                        userAction: "spaceActions.createSpace",
                        environment: o,
                        cellTarget: {
                            spaceWithId: S
                        },
                        canUndo: !0,
                        perform: e => {
                            let t = a(124937).vt({
                                    environment: o,
                                    table: a(832375).mu7,
                                    args: {
                                        id: (0, a(295447).Z1)({
                                            environment: o,
                                            table: a(832375).mu7,
                                            spaceId: k.id
                                        }),
                                        space_id: k.id,
                                        notify_mobile: !0,
                                        notify_desktop: !0,
                                        notify_email: !0,
                                        parentPointer: {
                                            table: a(832375).GDR,
                                            id: f
                                        },
                                        joined: !0,
                                        joined_teams: v && a(381453).oE([null == v ? void 0 : v.id]),
                                        settings: {
                                            notify_email_digest: !0,
                                            notify_home_digest_email: !0
                                        },
                                        first_joined_space_time: Date.now()
                                    },
                                    inMemoryRecordCache: r.inMemoryRecordCache,
                                    transaction: e
                                }),
                                i = new(a(994797)).SpaceViewStore(o, t.pointer);
                            return (0, a(135674).B)({
                                parentStore: r.getSpaceViewsStore(),
                                appendStore: t,
                                transaction: e
                            }), ! function(e) {
                                let {
                                    parentStore: o,
                                    appendStore: t,
                                    transaction: i
                                } = e;
                                (0, a(251687).Z)({
                                    parentStore: o,
                                    childStore: t,
                                    transaction: i
                                }), (0, a(421439).y4)({
                                    transaction: i,
                                    store: o,
                                    operation: {
                                        pointer: o.pointer,
                                        path: o.path,
                                        command: "keyedObjectListAfter",
                                        args: {
                                            value: t.pointer,
                                            after: void 0
                                        }
                                    }
                                }), t.cloneWithNewUIParent(o)
                            }({
                                parentStore: r.getSpaceViewPointersStore(),
                                appendStore: t,
                                transaction: e
                            }), o.device.isMobileNative && a(773352).log({
                                level: "info",
                                from: "spaceActions",
                                type: "SpaceSwitchingDebug",
                                data: {
                                    message: "spaceActions.createSpace setting space"
                                }
                            }), a(728372).default.setState({ ...a(728372).default.state,
                                sidebarSpaceStore: k,
                                sidebarSpaceViewStore: i
                            }), a(287621).qF(o, {
                                from: s,
                                planType: p,
                                isProfessionalTeamUser: (0, a(904434).YD)(),
                                domain_type: (0, a(904434).FX)(),
                                joinable_spaces_view_type: w
                            }), {
                                spaceViewStore: i
                            }
                        }
                    });
                    await y, await a(803229).fD(o);
                    let C = (0, a(13565).PM)();
                    return C && await (0, a(94221).Ho)({
                        environment: o,
                        spaceId: S,
                        referralCode: C
                    }), {
                        spaceViewStore: D,
                        spaceStore: k,
                        inviteLinkCode: F,
                        teamStore: v
                    }
                }
                throw Error(a(962299).A.formatMessage(t.loginToCreateSpace))
            }
        },
        938450: (e, o, a) => {
            a.r(o), a.d(o, {
                getContextualizedOnboardingFlowName: () => n,
                getMobileTutorialStages: () => r,
                hasMultipleLoggedInUsers: () => l
            }), a(898992), a(672577);
            var t = () => a(986939),
                i = () => a(279398);
            async function n(e, o) {
                let n = (0, a(13565).x5)();
                if (n) {
                    (0, a(13565).CG)();
                    let e = a(682733).uL.find(e => e === n);
                    if (e) return e
                }
                for (let n of a(682733).uL) {
                    let a = i().onboardingFlowNameToFlowConfig[n],
                        {
                            isEnabledForMobile: r,
                            isEnabledForDesktop: l
                        } = a;
                    if ((t().A.isMobile && r || !t().A.isMobile && l) && await a.shouldShowFlowToUser(e, o)) return n
                }
                return a(682733).JT
            }

            function r(e) {
                switch ((0, a(960267).D)({
                    environment: e
                })) {
                    case "v1":
                        return ["mobile_onboarding_home", "mobile_onboarding_creation", "mobile_onboarding_share", "mobile_onboarding_multi_platform"];
                    case "v2":
                        return ["mobile_onboarding_home", "mobile_onboarding_creation", "mobile_onboarding_share"];
                    case "v3":
                        return ["mobile_onboarding_skill_mab", "mobile_onboarding_skill_filing", "mobile_onboarding_skill_swipe"];
                    default:
                        return ["mobile_onboarding_editor", "mobile_onboarding_sidebar", "mobile_onboarding_desktop", "mobile_onboarding_web_clipper", "mobile_onboarding_app_download"]
                }
            }

            function l(e) {
                return e.currentUser.loggedInUserIds.length > 1
            }
        },
        960267: (e, o, a) => {
            a.d(o, {
                D: () => t
            });

            function t(e) {
                let {
                    environment: o
                } = e;
                return !o.device.isMobileNative || o.device.isTablet ? "control" : a(218744).default.getEligibleGroup({
                    experimentId: "mobile_onboarding_educational_refresh",
                    defaultGroup: "control"
                })
            }
        }
    }
]);