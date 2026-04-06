"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [95857], {
        26178: (e, t, i) => {
            i.d(t, {
                I: () => n
            });
            let a = !1;

            function o() {
                a = !0, localStorage.setItem("__console.enableVerboseAnalytics", "true")
            }

            function n() {
                return i(986939).A.isAdminMode || a
            }(0, i(202146).exposeDebugValue)("enableVerboseAnalytics", o), (0, i(202146).exposeDebugValue)("disableVerboseAnalytics", function() {
                a = !1, localStorage.setItem("__console.enableVerboseAnalytics", "false")
            }), "u" > typeof window && "true" === localStorage.getItem("__console.enableVerboseAnalytics") && o()
        },
        29246: (e, t, i) => {
            i.d(t, {
                Bu: () => _,
                JK: () => r,
                LX: () => o,
                Py: () => n,
                XL: () => s
            }), i(944114), i(898992), i(354520);
            let a = "StatsigDebuggingLocalStorageStore",
                o = new(i(245541)).R({
                    key: "statsigDebuggingConfig",
                    namespace: "DataPlatformProduct",
                    important: !1,
                    trackingType: "preference"
                });

            function n(e) {
                var t;
                let i = JSON.parse(localStorage.getItem(`${a}`) ? ? "{}");
                null != (t = i.featureGateDebuggingEnabledSet) && t.includes(e) || (i.featureGateDebuggingEnabledSet ? i.featureGateDebuggingEnabledSet.push(e) : i.featureGateDebuggingEnabledSet = [e], localStorage.setItem(`${a}`, JSON.stringify(i)))
            }

            function r(e) {
                let t = JSON.parse(localStorage.getItem(`${a}`) ? ? "{}");
                if (e) {
                    var i;
                    t.featureGateDebuggingEnabledSet = null == (i = t.featureGateDebuggingEnabledSet) ? void 0 : i.filter(t => t !== e)
                } else t.featureGateDebuggingEnabledSet = [];
                localStorage.setItem(`${a}`, JSON.stringify(t))
            }

            function s(e) {
                var t;
                let i = JSON.parse(localStorage.getItem(`${a}`) ? ? "{}");
                null != (t = i.experimentDebuggingEnabledSet) && t.includes(e) || (i.experimentDebuggingEnabledSet ? i.experimentDebuggingEnabledSet.push(e) : i.experimentDebuggingEnabledSet = [e], localStorage.setItem(`${a}`, JSON.stringify(i)))
            }

            function _(e) {
                let t = JSON.parse(localStorage.getItem(`${a}`) ? ? "{}");
                if (e) {
                    var i;
                    t.experimentDebuggingEnabledSet = null == (i = t.experimentDebuggingEnabledSet) ? void 0 : i.filter(t => t !== e)
                } else t.experimentDebuggingEnabledSet = [];
                localStorage.setItem(`${a}`, JSON.stringify(t))
            }
        },
        195857: (e, t, i) => {
            i.d(t, {
                DO_NOT_USE_trackLegacy: () => o
            }), i(898992), i(803949), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            let a = new Set(["page_visit", "add_comment", "add_reaction", "create_block_discussion", "create_inline_discussion", "edit_comment", "resolve_discussion", "create_view", "edit_block_property_60", "drag", "edit_block_text_60", "insert_mention_from_mention_menu", "rich_text_menu_click", "todo_block_check", "create_block", "block_action", "initial_page_render", "navigation_page_render", "initial_database_items_visible", "collections.navigation_items_visible", "webview_termination", "app_open", "app_close", "navigation", "offline_access_failure", "sidebar.initial_render", "sidebar.initial_render_failure", "offline_image_load_failure"]);
            async function o(e, t, o) {
                try {
                    var n;
                    if (i(363256).e.withListenerIgnored(() => !i(205885).A.state.online && !a.has(e))) return;
                    let r = (null == o ? void 0 : o.sampling) || {
                            behavior: "statsig",
                            fallbackBehavior: "custom",
                            fallbackSampleRate: 1
                        },
                        s = await (0, i(351613).d)({
                            eventName: e,
                            eventProperties: t,
                            sampling: r
                        });
                    if (!s) return;
                    let {
                        data: _,
                        spaceId: l
                    } = await i(700511).h.fetchDefaultEventProperties(e, o ? {
                        preboot: o.preboot,
                        dontWait: o.dontWait
                    } : void 0), c = (0, i(799150).A)(i(381453).mg({ ...t,
                        ..._,
                        ...null == o ? void 0 : o.forceOverrideAutomaticEventData,
                        sample_decision: s
                    }), "ignore-class-instances"), d = {
                        eventName: e,
                        eventData: { ...(n = ["user_id", "device_id"], !c ? c : (n.forEach(e => {
                                e in c && (c[e] = c[e] ? c[e].replace(/-/g, "") : void 0)
                            }), (0, i(799150).A)(c, "ignore-class-instances"))),
                            __context: {
                                locale: _.preferred_locale,
                                page: {
                                    referrer: window.document.referrer,
                                    search: window.location.search
                                }
                            },
                            sharedUUID: i(92513).JW()
                        },
                        spaceId: l
                    };
                    "on" === i(218744).default.getEligibleGroup({
                        experimentId: "event_trail_client_performance_impact",
                        disableExposureLogging: !0
                    }) ? i(693171).kY.has(e) && i(693171).yC(d) : null != o && o.DO_NOT_USE_enableExperimentalDirectFetch ? i(693171).C8(d) : i(693171).nY(d), (0, i(26178).I)() && console.log(`trackAnalytics:%c ${e}`, "font-weight: bold;", t), i(700511).h.callDebugLog(e, t)
                } catch (t) {
                    i(773352).log({
                        level: "error",
                        from: "analyticsHelpers",
                        type: "trackAnalytics",
                        data: {
                            eventName: e,
                            miscDataToConvertToString: {
                                e: t
                            }
                        }
                    })
                }
            }
        },
        218744: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => p
            }), i(16280), i(898992), i(803949);
            var a = () => i(345426),
                o = () => i(546605),
                n = () => i(884132),
                r = () => i(722371),
                s = () => i(219279),
                _ = () => i(741729),
                l = () => i(473556);
            class c extends o().Store {
                computedStoreMap = new Map;
                constructor() {
                    super(), (0, s().isStatsigEnabled)() && l().default.addListener(() => {
                        this.recomputeAllGroupStores()
                    })
                }
                getInitialState() {
                    return {
                        isLoaded: !1,
                        deviceId: void 0,
                        userId: void 0
                    }
                }
                isStatsigEnabledAndInitialized() {
                    return (0, s().isStatsigEnabled)() && l().default.isInitialized()
                }
                isLoaded() {
                    return this.state.isLoaded
                }
                getEligibleGroup(e) {
                    let t, {
                            experimentId: i,
                            defaultGroup: a,
                            parameter: o = l().K,
                            disableExposureLogging: s = !1,
                            enableEventTrailLogging: c = !1,
                            enablePersistentAssignments: d,
                            idType: u
                        } = e,
                        p = (null == o ? void 0 : o.toLowerCase()) === l().K,
                        g;
                    if ((0, r().O9)(g)) {
                        let e = g[o];
                        return this.printExperimentDebuggingInfoIfEnabled(i, e, "Browser Test Override"), l().default.trackExperimentFlicker(i, o, e), e
                    }
                    let m = e.actor;
                    this.validateActor(m);
                    let h = `eligibleGroup.${i}.${o}${s?".disableLogging":""}${d?`.persistent.${u}`:""}`,
                        f = this.createComputedGroupStore(h, () => {
                            var e;
                            if (!this.isStatsigEnabledAndInitialized()) {
                                t = "Statsig Not Initialized";
                                return
                            }
                            let r = d ? {
                                    enablePersistentAssignments: d,
                                    idType: u
                                } : void 0,
                                g = l().default.getExperiment(i, s, r),
                                m = null == g ? void 0 : g.details.reason;
                            t = `Evaluation reason: ${m}
`, null != m && m.endsWith(n().C) && (t += "Please check your experiment is set up correctly in Statsig and that list of target apps contains 'notion-client'.");
                            let h = l().default.getGroup({
                                    experimentId: i,
                                    disableExposureLogging: s,
                                    param: o,
                                    defaultValue: a,
                                    persistentAssignmentOptions: r
                                }),
                                f = "string" == typeof(e = h) && "" !== e ? e : void 0;
                            return (void 0 !== f && c && _().y.set(`statsig-${i}`, f), p) ? f : h
                        }),
                        v = globalThis.Meticulous;
                    if (null != v && v.isRunningAsTest && (void 0 !== f.state.group || void 0 !== a)) {
                        var b;
                        null == (b = v.context) || b.recordFeatureFlag(i, JSON.stringify(f.state.group ? ? a))
                    }
                    let y = f.state.group ? ? a;
                    return this.printExperimentDebuggingInfoIfEnabled(i, y, t), l().default.trackExperimentFlicker(i, o, y), y
                }
                manuallyLogExperimentExposure(e) {
                    l().default.manuallyLogExperimentExposure(e)
                }
                validateActor(e) {
                    if (void 0 !== e && e !== i(810016).S) {
                        let t = this.isStatsigEnabledAndInitialized() && l().default.state.currentUserId ? {
                            table: i(832375).oo9,
                            id: l().default.state.currentUserId
                        } : void 0;
                        if (t && e !== t) throw Error("Invalid user: actor does not match currentUser")
                    }
                }
                checkGate(e) {
                    let t, {
                            gateName: i,
                            disableExposureLogging: a = !1,
                            enableEventTrailLogging: o = !1
                        } = e,
                        n = this.getFeatureGateContextDataStores();
                    t = a ? n.withoutExposureLoggingStore.state(i, o) : n.withExposureLoggingStore.state(i, o);
                    let r = globalThis.Meticulous;
                    if (null != r && r.isRunningAsTest && void 0 !== t) {
                        var s;
                        null == (s = r.context) || s.recordFeatureFlag(i, t)
                    }
                    return t
                }
                featureGateContextDataStores;
                getFeatureGateContextDataStores() {
                    if (!this.featureGateContextDataStores)
                        for (let e of (this.featureGateContextDataStores = Object.create(null), [!0, !1])) this.featureGateContextDataStores[e ? "withoutExposureLoggingStore" : "withExposureLoggingStore"] = new(a()).ComputedStore(() => {
                            let t = this.state,
                                i = Object.create(null);
                            return (a, o) => {
                                let s = this.isStatsigEnabledAndInitialized(),
                                    c = null == u ? void 0 : u(a);
                                if ((0, r().O9)(c)) return this.printFeatureGateDebuggingInfoIfEnabled(a, c, "Browser Test Override"), l().default.trackFeatureGateFlicker(a, c), c;
                                let p = null == d ? void 0 : d(a, t);
                                if ((0, r().O9)(p)) return this.printFeatureGateDebuggingInfoIfEnabled(a, p, "Unit Test Override"), l().default.trackFeatureGateFlicker(a, p), p;
                                if (!s) return this.printFeatureGateDebuggingInfoIfEnabled(a, !1, "Statsig Not Initialized"), l().default.trackFeatureGateFlicker(a, !1), !1;
                                let g = i[a],
                                    m = "";
                                if (void 0 === g) {
                                    let t = l().default.getFeatureGate(a, e);
                                    void 0 === t ? (m = "Statsig Not Initialized", g = !1) : (g = t.value, m = `Evaluation reason: ${t.details.reason}
`, t.details.reason.endsWith(n().C) && (m += "Please check your gate is set up correctly in Statsig and that list of target apps contains 'notion-client'.")), o && _().y.set(`statsig-${a}`, g), i[a] = g
                                }
                                let h = g;
                                return this.printFeatureGateDebuggingInfoIfEnabled(a, h, m), l().default.trackFeatureGateFlicker(a, h), h
                            }
                        }, {
                            debugName: "FeatureGateContextDataStore"
                        });
                    return this.featureGateContextDataStores
                }
                getConfigKey(e, t, a) {
                    let o = i(443037).statsigDynamicConfigDefaults[e][t];
                    return this.createComputedDynamicConfigKeyStore(e, t, () => {
                        var i;
                        return this.isStatsigEnabledAndInitialized() ? (null == (i = l().default.getConfig(e, a)) ? void 0 : i.get(String(t), o)) ? ? o : o
                    }).state.value
                }
                getConfig(e) {
                    let {
                        configName: t,
                        disableExposureLogging: a = !0
                    } = e, o = i(443037).statsigDynamicConfigDefaults[t], n = () => {
                        if (!this.isStatsigEnabledAndInitialized()) return o;
                        let e = l().default.getConfig(t, !a);
                        return (null == e ? void 0 : e.value) ? ? o
                    };
                    return this.createComputedDynamicConfigStore(t, n).state.value
                }
                getLayer(e) {
                    let {
                        layerName: t,
                        disableExposureLogging: i = !1
                    } = e, a = `layer.${t}${i?".disableLogging":""}`, o = this.createComputedLayerStore(a, t, () => {
                        if (this.isStatsigEnabledAndInitialized()) return l().default.getLayer(t, i)
                    }).state.layer;
                    return {
                        get: (e, t) => o ? o.get(e, t) : t,
                        rawLayer: o,
                        details: null == o ? void 0 : o.details
                    }
                }
                getLayerParam(e) {
                    let {
                        layerName: t,
                        param: i,
                        defaultValue: a,
                        disableExposureLogging: o
                    } = e;
                    return this.getLayer({
                        layerName: t,
                        disableExposureLogging: o
                    }).get(i, a)
                }
                getStatsigExperimentsMap() {
                    return function() {
                        for (let e of i(218745).jy) {
                            let t = `statsig-${e}`;
                            if (_().y.has(t)) continue;
                            let i = (0, s().ZP)({
                                experimentId: e,
                                disableExposureLogging: !0
                            });
                            _().y.set(t, i)
                        }
                        for (let e of i(218745).TQ) {
                            let t = `statsig-${e}`;
                            if (_().y.has(t)) continue;
                            let i = (0, s().aH)({
                                gateName: e,
                                disableExposureLogging: !0
                            });
                            _().y.set(t, i)
                        }
                    }(), _().y.toExperimentsMap()
                }
                updateState(e, t) {
                    ("userId" in e && void 0 === e.userId || this.state.isLoaded && this.state.userId !== e.userId) && _().y.clear(), super.setState({ ...this.state,
                        ...e
                    })
                }
                reset() {
                    super.reset(), _().y.clear(), this.recomputeAllGroupStores(), this.state.testExperimentGroups = void 0
                }
                async waitUntilStatsigReadyAsync() {
                    (0, s().isStatsigEnabled)() && await s().StatsigInitializer.initializePromise
                }
                isStatsigReady() {
                    return s().StatsigInitializer.isComplete
                }
                recomputeAllGroupStores() {
                    let {
                        computedStoreMap: e,
                        featureGateContextDataStores: t
                    } = this;
                    e.forEach(e => e.enqueueRecompute()), t && (t.withExposureLoggingStore.enqueueRecompute(), t.withoutExposureLoggingStore.enqueueRecompute())
                }
                createComputedGroupStore(e, t) {
                    return this.createComputedStore(e, () => ({
                        group: t(),
                        lastUpdatedMinute: new Date().getMinutes()
                    }))
                }
                createComputedDynamicConfigStore(e, t) {
                    return this.createComputedStore(`config.${e}`, () => ({
                        value: t(),
                        lastUpdatedMinute: new Date().getMinutes()
                    }))
                }
                createComputedDynamicConfigKeyStore(e, t, i) {
                    return this.createComputedStore(`config.${e}.${String(t)}`, () => ({
                        value: i(),
                        lastUpdatedMinute: new Date().getMinutes()
                    }))
                }
                createComputedLayerStore(e, t, i) {
                    return this.createComputedStore(e, () => ({
                        layer: i(),
                        layerName: t,
                        lastUpdatedMinute: new Date().getMinutes()
                    }))
                }
                createComputedStore(e, t) {
                    let o = this.computedStoreMap.get(e);
                    return o || ((o = new(a()).ComputedStore(t, {
                        debugName: `ExperimentStore.${e}`
                    })).addListener(i(763230).lQ), this.computedStoreMap.set(e, o)), o
                }
                printFeatureGateDebuggingInfoIfEnabled(e, t, i) {}
                printExperimentDebuggingInfoIfEnabled(e, t, i) {}
            }
            let d, u, p = new c
        },
        218745: (e, t, i) => {
            i.d(t, {
                Nh: () => l,
                If: () => m,
                STATSIG_DEFAULT_GROUP: () => g,
                A2: () => _,
                P7: () => s,
                jy: () => o,
                TQ: () => n,
                experimentsInStatsig: () => d,
                sE: () => u,
                Gn: () => h,
                XZ: () => p,
                hH: () => r
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(672577);
            let a = {
                    indexeddb_graceful_fallback_to_in_memory_queue: ["on"],
                    opfs_page_cache: ["on"],
                    sqlite_prefetch_cache: ["on"],
                    prefetch_full_screen_view_from_url_v3: ["on"],
                    login_page_aa_test: ["on"],
                    acquisition_email_signup_tile: ["test"],
                    acquisition_login_signup_links: ["treatment"],
                    acquisition_simplified_signup_google_tile: ["treatment"],
                    signup_work_email_business_trial_v2: ["treatment"],
                    prewarmed_tab_load_sidebar_exp: ["on"]
                },
                o = [...(0, i(722371).objectKeys)(a)],
                n = ["mobile_app_launch_blank_page", "download_for_offline", "query_client", "collection_group_reducer_visible", "abc_code_language", "content_reskin_v2", "content_reskin_v2_condensed_lists", "content_reskin_v2_wider_page", "enable_reorder_login_options", "acquisition_contextual_signup_page", "enable_early_space_store", "admin_unified_account_view"],
                r = {
                    "search-no-local-blending": ["on"],
                    "search-debug-only-no-recent-boosting": ["on"],
                    "search-debug-only-force-random-sample": ["on"],
                    "search-debug-force-log-signals": ["on"],
                    "search-more-recent-pages-in-local": ["lazy-100", "lazy-200", "lazy-500", "lazy-1000"],
                    location_search_service: ["google", "foursquare", "mapbox", "radar", "apple"],
                    location_search_service_rollout: ["google", "foursquare", "mapbox", "radar", "apple"],
                    "search-new-local-recall-v2": ["v1", "v2", "v3", "v4"],
                    "search-query-expansion": ["prefix-completion", "word-splitting", "spell-correction", "all"],
                    "search-debug-force-no-rerank": ["on", "always-rerank"],
                    "search-mention-model-feature-logging": ["on"],
                    "search-mentions-models": ["v1", "v2", "dev"],
                    "search-use-local-reranker-layered": ["on"],
                    "search-include-all-local-sources": ["on"],
                    "search-local-edited-pages-max": ["3", "8", "15"],
                    "search-local-sim-users-edited-pages-max": ["3", "8", "15"],
                    search_downrank_sync_bots: ["jira-10", "jira-100"],
                    search_refresh_user_signals: ["on"],
                    search_hydrate_ancestors_onestep: ["on"],
                    search_embedding_replay_eval: ["on"],
                    search_reranker_202507: ["control", "fast", "fast_no_es"],
                    search_agent_main_query_es: ["on"],
                    search_bge_hybrid_search: ["on"],
                    search_layered_firstpass_top_pages_v2: ["control", "on"],
                    search_modal_client_refactor: ["on"],
                    search_exact_match_symbol_preserving: ["on"],
                    search_arabic_analyzer_query: ["on"],
                    search_language_aware_reranker: ["on"],
                    search_rescore_function_scores: ["control", "500", "1000", "2000", "5000", "10000"],
                    search_personalization: ["control", "all-topics"]
                },
                s = ["assistant_0.25_with_marketing", "assistant_0.3", "development", "exploratory"];

            function _(e) {
                let {
                    mode: t,
                    currentMode: i
                } = e, a = ["control", ...s];
                return a.indexOf(t) <= a.indexOf(i)
            }
            let l = "assistant_0.25_with_marketing",
                c = {
                    test_experiment: ["on"],
                    ...a,
                    ...r,
                    calendar_onboarding_hide_upsell_media_personal_school: ["on"],
                    calendar_onboarding_nux_template: ["on", "on-no-defaults"],
                    in_app_meeting_activity: ["on"],
                    context_invite_copy: ["treatment"],
                    grant_access_via_mentions: ["on"],
                    share_menu_searchable_toggle: ["on"],
                    collaboration_reaction_notifications: ["on"],
                    access_request_email_reminder: ["on"],
                    teamwork_statsig_reliability_experiment: ["on"],
                    space_switcher_mobile_apps_link: ["on"],
                    sidebar_recents_update: ["asap"],
                    prefetch_shared_and_private_pages: ["on"],
                    omit_space_top_level_pages: ["on"],
                    omit_space_teams: ["on"],
                    enable_sidebar_state_cache: ["on"],
                    enable_strict_render_completion: ["on"],
                    defer_sidebar_loading_when_collapsed: ["on"],
                    lazier_peekrenderer: ["on"],
                    lazier_right_sidebar: ["on"],
                    improve_new_space_invite_email: ["link_to_settings", "no_email"],
                    guest_badge_navbar: ["on"],
                    onboarding_split_team_survey: ["on"],
                    sites_cta_copy_ko_kr: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"],
                    sites_cta_copy_zh_tw: ["v1", "v2", "v3", "v4", "v5", "v6", "v7"],
                    sites_cta_copy_zh_cn: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"],
                    sites_cta_copy_fr_fr: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"],
                    sites_cta_copy_de_de: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"],
                    sites_cta_copy_ja_jp: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"],
                    sites_cta_copy_es_la: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"],
                    sites_cta_copy_pt_br: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"],
                    sites_cta_copy_zh_tw_mobile: ["v1"],
                    sites_cta_copy_zh_cn_mobile: ["v1"],
                    sites_cta_copy_ja_jp_mobile: ["v1"],
                    sites_cta_copy_ko_kr_mobile: ["v1"],
                    sites_cta_copy_es_la_mobile: ["v1"],
                    sites_cta_copy_de_de_mobile: ["v1"],
                    sites_cta_copy_fr_fr_mobile: ["v1"],
                    sites_cta_copy_pt_br_mobile: ["v1"],
                    mweb_onboard_before_download_exp: ["on"],
                    sites_update_mobile_cta_content: ["on"],
                    logged_out_awtl_can_view_banner_cta: ["on"],
                    improve_new_workspace_cta_in_account_switcher: ["blue_text", "multi_cta", "blue_text_and_multi_cta"],
                    b2c2b_sidebar_callout_flow: ["copy1", "copy2", "copy3"],
                    contextual_sites_signup_page: ["default", "start_building_today", "try_notion_sites", "build_your_own_notion_site"],
                    startup_reverse_trial_length: ["1m", "3m"],
                    awtl_signup_cta_and_mobile_banner: ["new_mobile_banner", "new_mobile_banner_and_cta_v1", "new_mobile_banner_and_cta_v2", "new_mobile_banner_and_cta_v3"],
                    public_sites_mobile_bottom_bar: ["on"],
                    awtl_logged_out_sidebar: ["directly_open_signup_modal", "show_signup_upsell_before_signup_modal"],
                    mobile_onboarding_optional_password: ["no_password", "optional_default_no"],
                    desktop_onboarding_optional_password: ["no_password", "optional_default_no"],
                    reimagined_onboarding_4: ["reimagined_ui"],
                    reimagined_onboarding_old_plan_type: ["on"],
                    onboarding_flow_aa: ["on"],
                    setup_sessions_reimagined_onboarding_stage: ["on"],
                    reimagined_invite_single_inputs: ["new_copy", "old_copy"],
                    ai_meeting_notes_longer_notes_placeholder: ["v1"],
                    turn_on_seo_indexing_setting_on_sites_v2: ["on"],
                    onboarding_agent_personalization_for_work_users_at_end_of_onboarding: ["on"],
                    share_meeting_notes_summary_v2: ["on"],
                    signup_page_for_work: ["placeholder_only", "placeholder_and_copy", "placeholder_and_copy_and_banner_v1", "placeholder_and_copy_and_banner_v2"],
                    acquisition_email_signup_tile: ["test"],
                    acquisition_login_signup_links: ["treatment"],
                    acquisition_simplified_signup_google_tile: ["treatment"],
                    remove_unnecessary_stages_for_additional_workspace_creation: ["skip_download", "skip_category_select", "skip_both"],
                    remove_calendar_stage_from_additional_account_onboarding: ["on"],
                    remove_category_select_stage_from_additional_account_onboarding: ["on"],
                    remove_app_download_stage_from_additional_account_onboarding: ["on"],
                    second_onboarding_in_modal: ["on"],
                    nudge_account_adding_n1: ["join_add_create", "confirm_or_add_account"],
                    work_onboarding_for_professional_users: ["suggest_work", "force_work"],
                    school_onboarding_for_edu_users: ["suggest_school", "force_school"],
                    new_user_home_mvp: ["control", "design", "no_design"],
                    skip_profile_stage: ["nudge", "no_nudge"],
                    new_student_home: ["control", "on"],
                    onboarding_agent_m1_no_layer: ["v1", "v2", "v3", "v4", "v5"],
                    mobile_onboarding_educational_refresh: ["v1", "v2", "v3"],
                    mobile_ai_setup_gen: ["on"],
                    mobile_custom_agent: ["on"],
                    beam: ["on"],
                    block_management: ["on"],
                    business_resurrection_offer: ["on"],
                    business_resurrection_offer_50pct_1m: ["on"],
                    checkout_address_form: ["on"],
                    formula_assistant: ["on"],
                    guest_limit_policy: ["on"],
                    lic: ["lic_25", "lic_50"],
                    mobile_web_subscriptions: ["on"],
                    new_trial_onboarding_experience: ["on"],
                    new_year_2025: ["on"],
                    plan_selection_biz_trial_redesign: ["on"],
                    prices_test_country: ["US", "DE", "GB", "JP", "KR", "CH"],
                    quick_workspace_creation: ["on"],
                    referral_program: ["on"],
                    expansion_offer: ["on"],
                    checkout_ftc_checkbox: ["on"],
                    people_polish_member_invite: ["on"],
                    block_limit_offer: ["on"],
                    business_trials_notion_expert_highlight: ["on"],
                    business_trials_14d_personal_user: ["on"],
                    business_trial_loss_aversion_modal_redesign: ["prompted", "unprompted"],
                    signup_work_email_business_trial: ["v1", "v2"],
                    signup_work_email_business_trial_v2: ["treatment"],
                    trial_ai_info_modal: ["on"],
                    annual_block_limit_offer: ["month_offer", "annual_offer", "multi_offer"],
                    business_block_limit_offer: ["plus_coupon", "business_coupon", "business_trial"],
                    removing_member_block_limit_offer: ["on"],
                    aimn_offer: ["on", "exploding"],
                    post_upgrade_announcement_modal_invite_teammate_2: ["on"],
                    plus_expansion_offer: ["one_member", "two_member"],
                    business_expansion_offer: ["one_member", "two_member"],
                    meeting_notes_perf_marketing_trial_v2: ["0_minutes", "cc_upfront_required"],
                    agent_business_trial_upsell: ["on"],
                    nus_upgrade_button_color: ["green", "teal", "red"],
                    nus_trial_button_color: ["orange", "purple", "pink"],
                    trial_end_modal_cta: ["on"],
                    trial_end_modal_cta_autotune: ["stay_on_business", "keep_business", "keep_using_features", "continue_with_business"],
                    agent_business_trial_upsell_new_workspaces: ["on"],
                    business_trial_cc_upfront: ["on"],
                    business_trial_cc_upfront_30d: ["on"],
                    progress_bar: ["old_trial_home", "new_trial_home"],
                    progress_bar_trial_home: ["old_trial_home", "new_trial_home"],
                    progress_bar_onboarding: ["old_trial_home", "new_trial_home"],
                    progress_bar_trial_dog: ["old_trial_home", "new_trial_home"],
                    block_limit_direct_checkout: ["plus_checkout", "business_checkout"],
                    enterprise_price_increase_q1_2026: ["on"],
                    custom_domain_price_test: ["on"],
                    ai_credit_usage_limit_experiment: ["treatment_50", "treatment_100"],
                    mwn_2025_try_call_to_action: ["product_focus", "conversational"],
                    mwn_2025_trial_call_to_action: ["product_focus", "conversational"],
                    mwn_2025_modal_layout: ["four-nosey-modal", "long-modal"],
                    mwn_2025_modal_layout2: ["four-nosey-modal", "long-modal"],
                    adoption_marketplace_sidebar_surface_exploratory_copy: ["control", "v1", "v2"],
                    adoption_marketplace_sidebar_tooltip_discovery_copy: ["v1", "v2"],
                    marketplace_checkout_move_tc_checkbox: ["on"],
                    better_template_indicators: ["on"],
                    marketplace_consultant_launch_modal_experiment: ["on"],
                    marketplace_consultant_launch_modal_autotune: ["a", "b", "c", "d"],
                    marketplace_consultant_breadcrumb: ["on"],
                    settings_connections_consultant_callout: ["setup-sessions", "consultant-directory"],
                    settings_imports_consultant_callout: ["setup-sessions", "consultant-directory"],
                    consultant_matching_launch: ["test"],
                    marketplace_template_ranking_review_refresh: ["v1", "v2", "v3"],
                    marketplace_consultants_hide_hourly_rate: ["hide_hourly_rate"],
                    marketplace_randomized_consultants: ["random_user", "random_user_date", "random_user_date_with_booking_unavailable"],
                    adoption_share_menu_marketplace_tab_title_benefit_copy: ["v1"],
                    adoption_import_push: ["on"],
                    adoption_import_entry_point: ["db_create_empty_state", "nudge_on_large_paste", "nudge_on_block_create"],
                    adoption_promote_desktop_app_download_in_onboarding: ["optional_to_download"],
                    adoption_nux_education_database_date_range: ["day_four_to_six"],
                    adoption_custom_workspace_getting_started_page: ["on"],
                    adoption_skip_usecase_ship_todo_desktop: ["skip_category", "skip_category_no_templates", "skip_category_no_templates_add_todo", "no_skip_category_add_todo"],
                    adoption_new_user_agent_onboarding_checklist: ["checklist_d1", "checklist_d2", "checklist_nudge", "sidebar_d1", "sidebar_d2", "sidebar_nudge"],
                    adoption_new_user_agent_onboarding_joiner_v2: ["sidebar_d1", "sidebar_nudge", "sidebar_d2"],
                    onboarding_agent_m1: ["v1", "v2", "v3", "v4"],
                    onboarding_agent_m1_no_layer: ["v1", "v2", "v3", "v4", "v5"],
                    uxr_debug_onboarding_agent: ["v1", "v2", "v3", "v4"],
                    invite_members_sidebar_callout_exposure: ["test50", "test25"],
                    adoption_lifecycle_transcription_agent_exposure_new_agent_users: ["control", "on"],
                    adoption_database_newbie_create_property_inline_suggestion: ["single_suggestion"],
                    adoption_database_newbie_nudge_on_create_property: ["create_board_view", "create_view_from_property", "create_gallery_view"],
                    database_newbie_ai_property_preview: ["ghost_column"],
                    adoption_aimn_live_collab_discovery_nudge_video: ["on"],
                    adoption_custom_invite_message_redesign: ["flip_order_move_button", "new_step", "scrim"],
                    adoption_aimn_keyword_toast_title_pain_driven_copy: ["on"],
                    adoption_aimn_keyword_toast_copy_autotune: ["v1", "v2", "v3", "v4"],
                    adoption_getting_started_mobile_todo_list: ["control", "getting_started", "todo_start", "todo_end"],
                    getting_started_example_company_workspace: ["duplication_v2", "getting_started"],
                    adoption_agent_random_personalization_bandit: ["group_one", "group_two", "group_three", "group_four"],
                    adoption_agent_personalization_phase_one_group_one: ["flower", "bow", "cat", "cherry"],
                    adoption_agent_personalization_phase_one_group_two: ["cowboy", "crown", "duck", "firefighter"],
                    adoption_agent_personalization_phase_one_group_three: ["glasses", "leaf", "magician", "mustache"],
                    adoption_agent_personalization_phase_one_group_four: ["paprika", "pencil", "propeller", "scarf"],
                    adoption_agent_long_running_bandit: ["test"],
                    adoption_agent_personalization_phase_two_long_running: ["cherry", "magician", "bow", "paprika", "cowboy", "leaf", "scarf", "firefighter"],
                    adoption_nbo_system_test: ["static_message", "personalized_message"],
                    move_copy_link_button: ["copy_link_and_star", "copy_link_only"],
                    share_pill_update: ["pill_share_text", "pill_perm_text"],
                    adoption_share_menu_invite_to_share_copy: ["v1"],
                    workspace_discovery_callout_sidebar_v2: ["on"],
                    workspace_discovery_show_in_settings: ["on"],
                    workspace_discovery_workspace_switcher_v2: ["on"],
                    wysj_candidate_source_ip: ["v1", "v2", "v3"],
                    trusted_domains_admin_suggestions_batch_email_space: ["on"],
                    trusted_domains_admin_suggestions_settings: ["on"],
                    adoption_share_menu_permission_label_clarity_copy: ["restricted", "shared_with"],
                    adoption_aa_page_share_menu: ["test"],
                    adoption_aa_invited_user: ["test"],
                    adoption_aa_new_pro_domain_space: ["test"],
                    asana_to_single_team_space: ["on"],
                    packaging_open_modal_private_section_plus_button: ["on"],
                    packaging_setup_generator_model: ["sonnet_3_7", "sonnet_4_5", "gpt_4_1", "gpt_4_1_mini"],
                    "025m_ai_launch_entrypoints": ["corner", "writer"],
                    ai_signup_redirect_to_writer: ["writer"],
                    deep_find_skip_query_gen_heuristic: ["on"],
                    ai_sidebar_v2: ["deep_find_on_inference_transcript", "unified_home", "separate_home_and_ai_with_home_module"],
                    search_modal_auto_stream_ai_enabled: ["on"],
                    home_ai_input_show_search_results: ["on"],
                    research_mode_empty_page_entrypoint: ["on"],
                    ai_product_retention_agent_transcription: ["on"],
                    agent_suggested_actions: ["prebuilt_prompts"],
                    agent_writer_custom_skills: ["on"],
                    ai_product_retention_agent_follow_ups: ["button_nudge", "button_control", "nudge"],
                    ai_product_retention_agent_allow_edits_checkbox: ["allow_edits_on_default", "allow_edits_off_default"],
                    ai_product_retention_agent_default_model_v2: ["orange-tart", "anthropic-sonnet-alt-thinking", "anthropic-sonnet-alt-no-thinking", "oatmeal-cookie", "oatmeal-cake"],
                    ai_product_retention_script_agent: ["on"],
                    ai_product_retention_simplified_input: ["input", "input_and_ask_mode"],
                    ai_product_retention_agent_retry_button: ["on"],
                    ai_product_retention_agent_speculative_search: ["on"],
                    force_script_agent_for_custom_agents_experiment: ["on"],
                    ai_model_cost_validate_permissions: ["on"],
                    ai_cost_extend_sonnet_opus_context_window: ["400K", "750K", "1M"],
                    reset_user_selected_model: ["on"],
                    ai_product_adoption_nudge_database_fill: ["on"],
                    slippery_slope_default_on_existing_workspaces: ["on"],
                    slippery_slope_default_on_new_workspaces: ["on"],
                    public_api_cache_collection_experiments: ["on"],
                    ai_meeting_notes_demo_nux_banner: ["on"],
                    ai_meeting_notes_desktop_download_onboarding_stage: ["on"],
                    ai_meeting_notes_meetings_tab_limited_state: ["v1"],
                    ai_meeting_notes_meetings_tab_primary_button: ["v1"],
                    ai_meeting_notes_rename_block: ["ai_notes", "ai_voice_notes", "ai_notetaker"],
                    rich_text_menu_layout: ["vertical", "vertical_2", "vertical_margin", "vertical_margin_right"],
                    block_action_menu_agent_entrypoint: ["on"],
                    guest_upsell_banner_experiment: ["yellow", "gray"],
                    guest_upsell_banner_copy_experiment: ["v1", "v2", "v3", "v4", "v5"],
                    guest_upsell_banner_mobile_experiment: ["on"],
                    guest_upsell_banner_cta_copy_experiment: ["on"],
                    sharing_collaboration_sidebar_guest_aggregation: ["external_pages_sidebar"],
                    workspace_discovery_join_or_create_workspace_switcher_menu: ["on"],
                    microsoft_contacts_import: ["generic_tooltip", "ms_tooltip"],
                    cross_workspace_page_view_and_edit: ["on"],
                    sharing_guest_with_private_pages_space_id: ["on"],
                    workspace_discovery_all_onboarding_flows_2: ["on"],
                    page_invite_multivariant_test: ["on"],
                    workspace_discovery_digest_email: ["on"],
                    workspace_navigator_guest_only_cta: ["v1", "v2"],
                    guest_duplicate_page_topbar: ["topbar", "ellipsis"],
                    share_link_duplicate_page_topbar: ["topbar"],
                    query_collection_use_local_if_single_user_space: ["on"],
                    prefetch_full_screen_view_from_url_v3: ["on"],
                    formulas_disabled_functions: [],
                    collections_allow_offscreen_before_loaded: ["on"],
                    collection_table_header_add_property_menu: ["on"],
                    lazier_app_listeners: ["on"],
                    lazier_ad_analytics_iframe: ["on"],
                    desktop_unload_tabs_before_refresh: ["on"],
                    desktop_sqlite_journal_mode: ["wal", "delete", "off"],
                    desktop_prewarmed_tab_heuristic: ["no_heuristic", "use_heuristic"],
                    desktop_defer_tab_prewarming: ["0s", "1s", "3s", "5s"],
                    page_visit_initialization_exclusion: ["on"],
                    ai_content_mod_scanner_version: ["v2", "v3", "v4", "v5"],
                    prewarm_prefetch_more: ["on"],
                    enable_client_route_config_framework: ["on"],
                    enable_client_route_config_framework_phase_2: ["on"],
                    list_item_peek_subscription: ["hoist_props", "react_context"],
                    exports_collection_view_experiment: ["one", "five", "fifty"],
                    ai_meeting_notes_agent_xp: ["full_search", "low_search"],
                    ai_meetings_notes_custom_instructions: ["on"],
                    audio_detection_notification_opt_out: ["5_notifications", "15_notifications"],
                    meeting_notes_upsell_consolidation: ["always_show_remaining"],
                    share_meeting_notes_with_external_invitees: ["on"],
                    nudge_calendar_connection_in_meeting_notes: ["on"],
                    zendesk: ["on"],
                    highlight_legacy_transclusions: ["on"],
                    iframely_switch: ["on"],
                    parallel_confluence_importer: ["on"],
                    parallel_confluence_importer_via_api: ["on"],
                    special_case_confluence_file_size: ["on"],
                    special_case_pdf_file_size: ["on"],
                    confluence_dynamic_batch_size_temp: ["on"],
                    confluence_server_allow_requests: ["on"],
                    confluence_server_override_forward_proxy_bypass: ["on"],
                    confluence_enable_multipart_attachment_upload: ["on"],
                    confluence_logs: ["on"],
                    confluence_api_v2: ["on"],
                    confluence_search_api: ["on"],
                    confluence_page_tree_breadth_first: ["on"],
                    confluence_folder_support: ["on"],
                    show_instruction_on_auth_popup_blocked: ["on"],
                    monday_importer: ["on"],
                    pdf_importer: ["on"],
                    migrate_confluence_into_teamspace: ["on"],
                    generic_importer: ["on"],
                    slash_command_import: ["on"],
                    special_case_generic_file_size: ["on"],
                    prioritize_slash_menu_block_placeholder: ["on"],
                    slash_menu_tooltip: ["on"],
                    wiki_education_convert_modal: ["bottom_right"],
                    avoid_empty_eoip_creation_unfurl_collection: ["on"],
                    jira_sync_data_center_integration: ["on"],
                    assistant_variant: s,
                    ai_search_query_expansion: ["single_stack", "double_stack"],
                    ai_actions_on_paste_experiment: ["on"],
                    qna_abandoned_search_reminders: ["on"],
                    qna_vectorless_enabled: ["last_edited_200_pages", "es_query_n_last_edited_200_pages", "es_query_n_last_edited_k_pages"],
                    assistant_show_summarize_this_page_reminder: ["on"],
                    indexeddb_graceful_fallback_to_in_memory_queue: ["on"],
                    notion_mail_launch_modal_experiment: ["on"],
                    allow_auth_with_app_browser_for_mobile: ["on"],
                    dynamic_social_preview_image: ["on"],
                    search_surfaces_collection_search: ["on"],
                    stream_statsig: ["on"],
                    calendar_onboarding_default_benefit: ["manageTasks", "transcribeMeetings"],
                    query_client: ["on"],
                    constant_time_page_lookup_in_memory_preview: ["on"],
                    opfs_prefetch_on_dwell: ["on"],
                    opfs_page_cache_pre_process_first_chunk: ["on"],
                    home_shortcut_actions: ["on"],
                    home_custom_shortcuts: ["on"],
                    custom_agent_launch_modal_ux: ["marketing_focus"],
                    custom_agent_launch_create_agent_cta_autotune: ["create_x", "create_x_now", "meet_my_agent"],
                    custom_agent_launch_start_trial_cta_autotune: ["try_for_free", "try_free_for_x_days", "start_free_trial"],
                    ai_model_cost_slack_trigger_message_contains_filter: ["on"],
                    ai_model_cost_agent_page_created_deleted_trigger_filters: ["on"],
                    server_persistent_assignments_test: ["on"],
                    wysj_candidate_source_v1: ["on"],
                    event_trail_client_performance_impact: ["on"],
                    show_comment_guest_badge: ["badge"]
                },
                d = [...(0, i(722371).objectKeys)(c)],
                u = [...d].sort();

            function p(e) {
                return c[e]
            }
            let g = "_unassigned_",
                m = "NoExperimentTarget";

            function h(e, t) {
                let i = Object.keys(e.value).find(e => e.toLowerCase().trim() === t.toLowerCase().trim());
                if (void 0 !== i) {
                    let t = e.value[i];
                    if (void 0 !== t) return t
                }
                let a = "__no_such_experiment__",
                    o = i ? e.get(i, a) : e.get(t, a);
                return o === a ? null : o
            }
        },
        313432: (e, t, i) => {
            i.d(t, {
                PX: () => o,
                eR: () => n,
                i4: () => a
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            let a = "etClient",
                o = "render_duration";
            i(969475).literals("connected_apps_settings", "compliance_connected_apps_settings", "external_object_instance_block", "external_object_instance_inline_popup", "external_object_instance_block_error_dropdown", "placeholder_root_external_collection_view_block", "connected_relation_property_menu", "source_picker_connect_another_account", "integration_gallery", "collection_settings_property_type", "integration_file_picker", "inapp_notification", "send_to_notion", "unfurl", "messages_tab", "install_redirect", "all_updates", "notifications_and_settings", "collection_view_settings", "share_menu", "space_settings", "workspace_connections_redirect", "import_settings", "ui_doc", "collection_settings_external_source", "custom_agent_connection_modal", "custom_agent_trigger_modal", "ai_connector_admin_settings", "ai_connector_admin_configure_access", "ai_connector_admin_intro", "ai_connector_user_private", "ai_connector_user_public", "ai_connector_user_mapping", "ai_connector_user_reauth", "workflow_tools_and_access_reconnect");
            let n = ["reply_menu_mentions_comments", "reply_menu_archive", "reply_menu_all_updates", "updates_menu_mentions_comments", "updates_menu_archive", "updates_menu_all_updates"]
        },
        351613: (e, t, i) => {
            i.d(t, {
                d: () => a
            });
            async function a(e) {
                let {
                    eventName: t,
                    eventProperties: a,
                    sampling: o
                } = e;
                if ("decided" === o.behavior) return o.sampleDecision;
                if ("custom" === o.behavior) return !!(0, i(69741).ox)(o.sampleRate) && "custom";
                await i(374176).default.afterNextFlush();
                let n = i(218744).default.getConfigKey("event_trail_events", t),
                    r = i(69741).ox;
                if ("object" == typeof n && "string" == typeof n.sampleMethod && "client_init_id" === n.sampleMethod && (r = i(69741).fp.bind(null, i(810452).d)), "object" == typeof n && "object" == typeof n.sampleRateByProperty) {
                    let {
                        sampleRateByProperty: e
                    } = n;
                    for (let [t, i] of Object.entries(e)) {
                        let e = i[null == a ? void 0 : a[t]];
                        if (void 0 !== e) return !!r(e) && "by_property"
                    }
                }
                if ("object" == typeof n && "number" == typeof n.sampleRate) return !!r(n.sampleRate) && "by_event";
                if ("custom" === o.fallbackBehavior) return !!r(o.fallbackSampleRate) && "fallback_in_code";
                let s = i(218744).default.getConfigKey("event_trail_events", "defaultSampleRate");
                if ("number" == typeof s) return !!r(s) && "default";
                let {
                    statsigNotAvailableBehavior: _
                } = o;
                switch (_) {
                    case "track":
                        return "statsig_not_available";
                    case "drop":
                        return !1;
                    default:
                        (0, i(722371).HB)(_)
                }
            }
        },
        443037: (e, t, i) => {
            i.d(t, {
                jb: () => n,
                my: () => o,
                statsigDynamicConfigDefaults: () => r
            });
            let a = { ...Object.fromEntries(["fastest_llama_in_the_west_models", "summarize_transcript_models", "autofill_model_config_resolver"].map(e => [e, {
                        models: ["anthropic-sonnet-alt"]
                    }])),
                    fastest_llama_in_the_west_models: {
                        models: ["fireworks-llama3.3-70b-dedicated"]
                    }
                },
                o = ["openai", "anthropic", "gemini", "mystery"];

            function n(e) {
                return !!(void 0 !== e && (0, i(722371).Xk)(o, e))
            }
            let r = {
                this_is_a_fake_config_for_unit_tests: {
                    favoriteNumber: 123,
                    bestFriends: [{
                        name: "Bluejay",
                        favoriteColor: "blue"
                    }, {
                        name: "Gecko",
                        favoriteColor: "green"
                    }],
                    deeply: {
                        nested: {
                            object: !1
                        }
                    }
                },
                search_contacts_timeout: {
                    timeoutMs: 4500
                },
                automated_consent_reset_config: {
                    reset_initiated_at: void 0
                },
                audio_detection_notification_opt_out: {
                    dismiss_threshold: 0
                },
                meeting_notes_audio_process_detection_config: {
                    minimum_runtime_before_auto_stop_seconds: i(627179).m1
                },
                setup_sessions_redirect: {
                    group: "off",
                    url: i(168962).JZ.root
                },
                setup_sessions_confirm_redirect: {
                    attended_url: "https://solutions-partner-hub.notion.site/196c0723f43280debf44f946678be5b6",
                    no_show_url: "https://www.notion.com/md/expertmissedredirect"
                },
                marketplace_webhook: {
                    enabled: !1,
                    creator_to_webhook_url: {}
                },
                marketplace_creator_intervention: {
                    creators: [],
                    delay_days: 5
                },
                marketplace_refund_email_target: {
                    sendToEmail: "team@makenotion.com"
                },
                marketplace_acquisition_refund_processing_disallow_list: {
                    acquisition_ids: {}
                },
                event_trail_events: {},
                page_tree_query_strategy: {
                    strategy: "js_recursion_property_filter_sql"
                },
                event_trail_routing: {},
                file_block_download: {
                    force_download_extensions: [".html", ".htm"]
                },
                kafka_cluster_migration: {
                    topics: {},
                    eventTrailSchemalessPercentage: 100,
                    eventTrailSchemafulPercentage: 0
                },
                collection_request_settings: {
                    clientFormulaTimeoutMs: 30 * i(627179).TD
                },
                factory_ui_1: {
                    collectionIds: []
                },
                sentry: {
                    errorsSampleRate: 0,
                    "tracesSampleRate-v0": 0,
                    "replaysSessionSampleRate-v0": 0,
                    "replaysOnErrorSampleRate-v0": 0,
                    profilesSessionSampleRate: 0,
                    profilesSampleRate: 0,
                    sentryMetricSamplingOverrides: {}
                },
                gtm_ai_favorites: {
                    space_id: void 0,
                    collection_id: void 0
                },
                crdt_migration_skip_list: {
                    block_ids: []
                },
                crdt_migration_spaces_to_skip_list: {
                    space_ids: []
                },
                migration_task_supervisor_configs: {
                    is_not_default: !1,
                    universal_kill_switch: !1,
                    migration_cloud_watch_check: {
                        check_interval_seconds: 30,
                        get_metric_data_lookback_window_minutes: 5,
                        ebs_io_balance_percentage_threshold: 98,
                        ebs_byte_balance_percentage_threshold: 98,
                        total_iops_threshold: Number.MAX_SAFE_INTEGER,
                        should_throttle_based_on_total_iops: !1,
                        throttle_wait_time_ms: i(627179).Xb,
                        heartbeat_interval_ms: 10 * i(627179).TD,
                        max_consecutive_errors: 3
                    },
                    project_supervisor_config: {
                        default: {
                            project_kill_switch: !1,
                            is_dry_run: !0,
                            max_worker_per_db_shard: 1,
                            supervisor_check_worker_interval_ms: 5 * i(627179).Xb,
                            process_chunks_interval_ms: 10,
                            migration_process_chunk_size_number_of_rows: 1e3,
                            task_stream_hanging_timeout_ms: 3 * i(627179).Xb,
                            csv_migration_s3_bucket_name: void 0,
                            csv_migration_s3_index_file_prefix: void 0,
                            csv_migration_split_csv_file_in_chunk_size_bytes: void 0,
                            csv_migration_split_csv_file_worker_count: void 0,
                            postgres_migration_total_number_of_rows_per_worker: void 0,
                            ebs_io_balance_throttle_check_enabled: !1
                        }
                    }
                },
                permanently_delete_tree_queue_task_override: {
                    queue_task_kill_switch_on: !1,
                    task_delay_override_seconds: void 0,
                    elastic_search_request_batch_size: 200,
                    s3_request_batch_size: 50,
                    redis_read_batch_size: 1e4,
                    tree_iteration_batch_size: 1e4,
                    tree_iteration_max_buffer_size: 5e4,
                    postgres_query_batch_size: 1e5
                },
                message_store_client_config: {
                    min_reconnect_delay_secs: 4,
                    max_reconnect_delay_secs: 8,
                    url_override: void 0
                },
                message_store_client_config_com: {
                    min_reconnect_delay_secs: 4,
                    max_reconnect_delay_secs: 8,
                    url_override: void 0
                },
                audio_processor_client_config: {
                    url_override: void 0
                },
                audio_processor_client_config_com: {
                    url_override: void 0
                },
                unsync_transclusion_block_configs: {
                    duplication_task_check_status_interval_seconds: .5,
                    duplication_task_check_status_max_interval_seconds: 60,
                    duplication_task_check_status_exponential_after_seconds: 30,
                    duplication_task_check_status_timeout_minutes: 30,
                    duplication_task_check_status_wait_for_no_task_data_times: 10
                },
                load_test_simulator_configs: {
                    commenter_interval_ms: 1e3,
                    page_viewer_interval_ms: 100,
                    editor_interval_ms: 1e3,
                    editor_typing_interval_ms: 100,
                    presence_interval_ms: 1e3
                },
                audio_processor_dark_traffic_configs: {
                    enabled: !1,
                    endpoint: void 0
                },
                audio_processor_streaming_configs: {
                    server_socket_retry_number: 5e4,
                    interim_refresh_throttle_ms: 700,
                    server_socket_timeout_ms: 5e3,
                    outgoing_audio_buffer_max_ms: 1e4,
                    server_socket_retry_max_interval_seconds: 10,
                    max_block_char_size: 400,
                    use_streaming_api: "disabled",
                    allowed_languages: [{
                        language: "en",
                        score: 100
                    }, {
                        language: "zh-CN",
                        score: 0
                    }, {
                        language: "zh-TW",
                        score: 0
                    }, {
                        language: "es",
                        score: 0
                    }, {
                        language: "fr",
                        score: 0
                    }, {
                        language: "de",
                        score: 0
                    }, {
                        language: "ja",
                        score: 0
                    }, {
                        language: "ko",
                        score: 0
                    }, {
                        language: "pt",
                        score: 0
                    }, {
                        language: "ru",
                        score: 0
                    }, {
                        language: "th",
                        score: 0
                    }, {
                        language: "vi",
                        score: 0
                    }, {
                        language: "da",
                        score: 0
                    }, {
                        language: "fi",
                        score: 0
                    }, {
                        language: "no",
                        score: 0
                    }, {
                        language: "nl",
                        score: 0
                    }, {
                        language: "it",
                        score: 0
                    }, {
                        language: "sv",
                        score: 0
                    }],
                    health_check_configs: {
                        enable_trace_events: !0,
                        trace_event_interval_ms: 3e4,
                        trace_event_timeout_ms: 1e4
                    }
                },
                audio_processor_baseten_streaming_configs: {
                    is_baseten_employee: !1,
                    use_prompt: !0,
                    use_vad_config: !1,
                    vad_threshold: .5,
                    vad_min_silence_duration_ms: 500,
                    vad_speech_pad_ms: 30,
                    enable_repetition_removal: !0
                },
                client_stop_transcription_on_idle_configs: {
                    enabled: !1,
                    notify_threshold_min: 3,
                    stop_transcription_threshold_min: 30
                },
                audio_processor_fireworks_streaming_configs: {
                    streaming_url: "wss://audio-notion-diarization.link.fireworks.ai/v1/audio/transcriptions/streaming",
                    audio_buffer_seconds: 60,
                    use_prompt: !1,
                    use_vad_kwargs: !0,
                    vad_kwargs_threshold: .15
                },
                audio_processor_configs: {
                    monetization_record_usage_interval_ms: 10 * i(627179).TD,
                    provider_usage_recording_interval_ms: 30 * i(627179).TD,
                    transcription_heart_beat_state_ttl_ms: 30 * i(627179).TD,
                    transcription_heart_beat_interval_ms: 15 * i(627179).TD,
                    transcription_server_stop_delayed_seconds: 5 * i(627179).m1,
                    usage_limit_expire_seconds: 24 * i(627179).uu,
                    usage_limit_in_expire_window_seconds: 16 * i(627179).uu,
                    audio_stream_processor_sampling_rate: 1,
                    audio_stream_processor_sampling_interval_ms: 60 * i(627179).TD,
                    enforce_root_block_id_exist: !0,
                    interim_transcription_model_provider: "openai-gpt-4o-mini-transcribe",
                    final_transcription_model_provider: "openai-whisper-1",
                    auto_detection_interim_transcription_model_provider: "openai-gpt-4o-mini-transcribe",
                    auto_detection_final_transcription_model_provider: "openai-gpt-4o-transcribe"
                },
                confluence_server_groups: {
                    default: {
                        read: [],
                        create: []
                    }
                },
                mwn_refund_policy_link: {
                    link: ""
                },
                marketplace_redirect_url_after_purchase_config: {},
                marketplace_transactional_email_config: {
                    listingIds: []
                },
                page_template_duplication_verbose_logging_config: {
                    userIds: []
                },
                load_test_bypass_rate_limit_page_ids: {
                    pages: []
                },
                load_test_ids: {
                    spaceIds: []
                },
                csv_limits: {
                    maxRelationPages: 1e3,
                    maxRows: 1e5,
                    maxColumns: 500
                },
                xlsx_limits: {
                    maxRows: 1e5,
                    maxColumns: 1e3
                },
                confluence_import_page_size_limits: {
                    default: {
                        pageSizeLimitKB: 500
                    }
                },
                resolve_confluence_urls: {
                    maxConcurrency: 5,
                    maxPageUrls: 100
                },
                confluence_ingestion: {
                    defaultPageBatchSize: 100,
                    ingestionKafkaMaxSize: 4718592,
                    blockSizeInChars: 1e3,
                    sendToKafka: !0,
                    maxRecentPagesToSync: 1e4,
                    maxUserPagesToSync: 5e3,
                    liveSyncRestartAfterHours: 12,
                    ingestionCompleteDelay: 3600,
                    ingestionNextTaskDelay: 300,
                    liveIngestionPollerEnabled: !1,
                    staleSyncAlertThresholdInHours: 24,
                    staleRecallThresholdInHours: 24,
                    realtimeSearchTimeoutMs: 4e3,
                    realtimeSearchTimeoutMsPrimary: 1e4,
                    learnMoreUrl: "https://www.notion.com/help/notion-ai-connectors"
                },
                jira_resync_frequencies: {
                    importResyncFrequencyMS: 24 * i(627179).pT,
                    timelineSyncCleanupFrequencyMS: +Number(i(627179).lG)
                },
                jira_import_batch_config: {
                    processIssueBatchSize: 10,
                    attachmentBatchSize: 1
                },
                jira_importer_records_fetch_limit: {
                    records_limit: 10
                },
                jira_resync_records_fetch_limit: {
                    records_limit: 25,
                    process_records_limit: 1,
                    cleanup_records_limit: 100
                },
                jira_sync_fields_api_concurrency: {
                    maxConcurrency: 100
                },
                jira_attachments_config: {
                    attachmentSize: 1e6,
                    numberOfAttachments: 5
                },
                jira_properties_options_limit: {
                    optionsLimit: 400
                },
                jira_sync_time_filter_warning_deadline: {
                    deadline: "September 30, 2025"
                },
                jira_notion_version_to_force_update_external_object: {
                    notionVersion: 1
                },
                jira_recent_issues_limit: {
                    updatedInLastNDays: 0
                },
                jira_fields_that_require_dynamic_options_config: {
                    fieldIds: []
                },
                jira_sync_data_validation_spaceids: {
                    spaceIds: []
                },
                jira_sync_data_validation_config: {
                    minTimeBetweenValidationsMS: Number(i(627179).nD),
                    jiraFetchLimit: 25,
                    validationOnLastNumberOfDays: 30,
                    maxIssuesToValidate: 1e4
                },
                salesforce_bulk_unfurl_task_config: {
                    job_overall_block_limit: 2e4,
                    batch_size: 1e3,
                    max_scanned_blocks: 4e4
                },
                salesforce_resync_external_collection_task_config: {
                    job_overall_block_limit: 2e4,
                    batch_size: 1e3
                },
                salesforce_database_properties_limit: {
                    singleDatabaseLimit: 50,
                    workspaceLimit: 200,
                    warningThreshold: 10
                },
                assistant_attachment_limits: {
                    maxPaidFileSizeMb: 20,
                    maxFreeFileSizeMb: 5,
                    maxPaidSandboxFileSizeMb: 20,
                    maxFreeSandboxFileSizeMb: 5,
                    maxAllAttachmentsSizeMb: 30
                },
                deep_find_config: {
                    notionSourceNumResults: 100,
                    maxPagesToDecorate: 20,
                    maxFinalResults: 40,
                    maxResultsPerSourceToBoost: 0
                },
                ai_search_output_limits: {
                    maxFinalTokens: 12e3,
                    maxTotalResults: 40
                },
                autofill_model_config: {
                    primaryModel: "openai-gpt-4o-mini",
                    darkReadModels: []
                },
                transcribe_audio_queue_task_configs: {
                    provider: "baseten",
                    charLimit: 400,
                    signedUrlExpiryPolicy: "FIVE_MIN",
                    disableDiarization: !1,
                    maxAudioDurationMinutes: 600
                },
                transcribe_audio_to_text_config: {
                    model: "openai-gpt-4o-mini-transcribe",
                    maxAudioDurationSeconds: 300
                },
                edge_cache_config: {
                    spaceIdsForceEdgeCacheDisabled: []
                },
                automation_update_pages: {},
                active_token_counter_config: {},
                workflow_templates_builder_config: {},
                workflow_processor_markdown_agent_blocks_config: {
                    recordCountLimit: 200
                },
                dev_ai_context: {
                    suggestOnPageNavigationProbability: 0
                },
                qna_ai_reminders: {
                    abandonedSearchReminderProbability: 0
                },
                article_extractor_enable_urls: {
                    urls: []
                },
                ai_qna_silent_retry_mode: {},
                ai_connectors_onboarding_blocked: {
                    currently_facing_issues: []
                },
                ai_general_incident: {
                    status: "normal"
                },
                ai_connector_incident: {
                    recall_kill_switch: [],
                    degraded_connectors: []
                },
                ai_get_completion_config: {
                    maxTruncatedStepLength: 3e5
                },
                agent_tool_rate_limit: {
                    toolOverrides: {}
                },
                agent_tool_retry: {
                    maxAttempts: 1,
                    initialDelayMs: 1e3,
                    maxDelayMs: 3e4,
                    toolOverrides: {}
                },
                mcp_server_timeouts: {
                    defaultRequestTimeoutMs: 6e4,
                    defaultConnectionTimeoutMs: 1e4,
                    enabledContextTypes: ["customAgent"],
                    serverOverrides: {}
                },
                ai_generate_image_user_rate_limit: {
                    dailyLimit: 5,
                    monthlyLimit: 30
                },
                postprocess_transcript_turn_model_comparison: {},
                days_since_signup_education_content_delivery_override: {
                    days: void 0
                },
                get_calendar_events_user_limits: {
                    eventMaxPreloadedAttendees: 0,
                    maxGlobalAttendees: 0
                },
                ingestion: {
                    slack: {
                        similarityThreshold: .8,
                        gridAppId: "",
                        clientId: "",
                        prefix: "",
                        channelIds: [],
                        ingestionTopic: "",
                        adminScopes: [],
                        userScopes: [],
                        nonPrivateUserScopes: [],
                        userMappingScopes: [],
                        gridScopes: [],
                        ingestionCompleteDelay: 3600,
                        cleanUpDelay: 3600,
                        ingestionNextTaskDelay: 300,
                        maxChannelsPerPartition: 0,
                        enablePermissionsFilter: !1,
                        sendToKafka: !1,
                        showRemoveWorkspaceIntegration: !1,
                        ingestionKafkaMaxSize: 1992294,
                        learnMoreUrl: "https://notion.so",
                        runPoller: !0,
                        pollerBatchSize: 10,
                        maxProcessingTime: 30,
                        allowPollerToDelete: !1,
                        deprecateLegacy: !1,
                        stopProcessingOnLegacy: !1,
                        logSkippedEvents: !1,
                        sampleRate: 0,
                        qnaFromSlackEnabled: !1,
                        gridPollerWaitSinceLastPollInHours: 4,
                        pollerWaitSinceLastPollInHours: 24
                    },
                    googleDrive: {
                        mainPollTime: 600,
                        mainPollEnabled: !0,
                        ingestionTopic: "",
                        batchSizeForFileSync: 1,
                        learnMoreUrl: "https://notion.so",
                        ingestionKafkaMaxSize: 2097152,
                        initialSyncUserBatch: 30,
                        initialSyncFileBatch: 100,
                        googlePageSize: 100,
                        googleTokenAPIConcurrentRequestLimit: 10,
                        timeDeltaForActivityInMS: 6e5,
                        googleApiRetryConfig: {
                            retryAttemptsMS: [500, 1e3, 2e3],
                            retryAttemptRandomOffsetMS: 500
                        },
                        googleAuthUrl: "https://workspace.google.com/marketplace/app/notion_ai/988713442660",
                        troubleShootingUrl: "https://notion.so",
                        liveSyncSegmentTimeSec: 300,
                        googleApiTimeoutMS: 6e4,
                        googleApiTimeoutForRecallMS: 1e4,
                        marketplaceAppConfigureUrl: "https://admin.google.com/ac/apps/gmail/marketplace/appdetails/988713442660",
                        concurrentRequestLimitForFetchingViewedOrModifiedFiles: 10,
                        timeThresholdForFailingLiveSyncAlertMS: 864e5,
                        useSynchronousAPICallsInInit: !1,
                        maxFileToSyncPerUser: 1e4,
                        googleDriveFileSizeLimit: 0xa00000,
                        enableSpreadsheetParserV2: !1,
                        recallBlockThresholdHrs: 24,
                        maxRecentlyViewedFilesPerUser: 1e3,
                        maxWorkspaceRecentlyViewedFiles: 1e4,
                        skipFilesWithMimeType: [],
                        cleanupDeletedUserFiles: !1,
                        minThresholdForNoOverlappingUserMetrics: 1,
                        maxFileAgeInMS: 2592e6,
                        maxSyncTimeMS: 432e5
                    },
                    gmail: {
                        googleAuthUrl: "",
                        learnMoreUrl: "",
                        troubleShootingUrl: "",
                        marketplaceAppConfigureUrl: "",
                        marketplaceAppName: "Notion AI for Gmail"
                    },
                    "google-calendar": {
                        googleAuthUrl: "",
                        learnMoreUrl: "",
                        troubleShootingUrl: "",
                        marketplaceAppConfigureUrl: "",
                        marketplaceAppName: "Notion AI for Google Calendar"
                    },
                    outlook: {
                        learnMoreUrl: "",
                        outlookAuthUrl: "",
                        troubleShootingUrl: ""
                    },
                    "notion-mail": {
                        learnMoreUrl: "",
                        notionAuthUrl: "",
                        troubleShootingUrl: ""
                    },
                    "notion-calendar": {
                        learnMoreUrl: "",
                        notionAuthUrl: "",
                        troubleShootingUrl: ""
                    },
                    salesforce: {
                        learnMoreUrl: "https://www.notion.com/help/notion-ai-connectors"
                    },
                    discord: {
                        learnMoreUrl: "https://www.notion.com/help/notion-ai-connectors",
                        troubleShootingUrl: "https://www.notion.com/help/notion-ai-connectors"
                    },
                    asana: {
                        learnMoreUrl: "https://www.notion.com/help/notion-ai-connectors",
                        troubleShootingUrl: "https://www.notion.com/help/notion-ai-connectors"
                    },
                    bucket: "",
                    kafka: {
                        topic: "",
                        partitionCount: 0
                    },
                    batchSizeForS3FileDeletes: 10,
                    downgradeSpaceAIConnectorsAfterTimeMS: 2592e6,
                    excludedConnectorsForDeletion: [],
                    maxSpacesForAIConnectorDeletion: 0
                },
                create_snapshot_configs: {
                    load_subtree_batchSize: 500,
                    load_subtree_query_limit: 10,
                    load_subtree_yield_size: 500,
                    backpressure_drain_timeout_ms: 1e4,
                    s3_stream_high_water_mark_bytes: 0xa00000
                },
                agent_memory: {
                    maxTokens: 3e4,
                    maxTokensPerPage: 1500,
                    staleAfterDaysPaidTier: 3,
                    staleAfterDaysFreeTier: 14
                },
                agent_web_search: {
                    livecrawlTimeout: 5e3
                },
                agent_computer_genesis_snapshot: {
                    snapshotId: "snap_NWsSMqGghQwYMU5sUprkSoHfzomi"
                },
                ai_unified_search_config: {
                    maxTokens: 8e3,
                    timeoutMs: 12e3,
                    limit: 40,
                    fetchFactor: 3
                },
                agent_auto_model: {
                    model: void 0
                },
                custom_agent_auto_model: {
                    model: void 0,
                    shouldMigrate: !0
                },
                custom_agent_remove_accidental_data: {},
                mcp_runlayer_security_scanning: {
                    tool_list_scoring: !1,
                    tool_call_scoring: !1,
                    io_guard_scoring: !1,
                    malicious_threshold: .7,
                    monitor_only: !0
                },
                scrippy_agent_auto_model: {
                    model: void 0
                },
                ai_assistant_writer_fallback_model: {},
                universal_qna: {
                    defaultExternalSources: [],
                    blendedRecall: {
                        strategy: "cohere"
                    },
                    minCosScoreGoogleDrive: -1,
                    s3Parallelism: 100,
                    cohereRerankParallelCalls: 1,
                    maxSpreadsheetsToHydrate: 5,
                    asyncLabelingRatio: {},
                    listAIConnectorsCacheDurationMs: 3e3,
                    notion: {
                        loadAncestorsEagerlyLimit: 50,
                        maxAdditionalSpans: 3
                    },
                    github: {
                        maxAdditionalSpans: 3,
                        apiSearchRateLimitPeriodInSeconds: 60,
                        apiSearchRateLimit: 3
                    },
                    googleDrive: {
                        apiLoadRateLimitPeriodInSeconds: 60,
                        apiLoadRateLimit: 10,
                        apiSearchRateLimitPeriodInSeconds: 60,
                        apiSearchRateLimit: 8
                    },
                    jira: {
                        maxAdditionalSpans: 3,
                        skipHydration: !1
                    },
                    microsoftTeams: {
                        maxAdditionalSpans: 3,
                        maxDaysToLoadChannel: 90,
                        maxMessagesToLoadChannel: 120
                    },
                    sharepoint: {
                        skipHydration: !1
                    },
                    salesforce: {
                        skipHydration: !1
                    },
                    confluence: {
                        skipHydration: !1
                    },
                    gmail: {
                        recallResultsPerQuery: {
                            ai: 30,
                            keyword: 30,
                            ngram: 15
                        },
                        recallResultsPerQueryWithIntl: {
                            ai: 15,
                            keyword: 15,
                            ngram: 8
                        },
                        shouldUseKeywordsInQueryGen: !0,
                        shouldUseNgramsInQueryGen: !0,
                        maxQueries: 50,
                        maxResultsToHydrate: 100,
                        hydrateParallelism: 15,
                        recallParallelism: 20,
                        fullPipelineTimeoutMs: 4e3,
                        fullPipelineRetry: !1,
                        queryGenApproach: "ai-generated",
                        testNaiveLookahead: !1,
                        testRecencyCaching: !1,
                        testNaiveLookaheadMaxResults: 15,
                        testRecencyCachingMaxResults: 60,
                        snippetsTopN: 5
                    },
                    slack: {
                        recallResultsPerQuery: {
                            ai: 30
                        },
                        recallResultsPerQueryWithIntl: {
                            ai: 15
                        },
                        maxQueries: 50,
                        hydrateParallelism: 15,
                        recallParallelism: 20,
                        fullPipelineTimeoutMs: 6e3,
                        recencyDecayBaseShortLookback: .1,
                        recencyDecayMuShortLookback: 5,
                        recencyDecaySigmaShortLookback: 21,
                        recencyDecayBase: .25,
                        recencyDecayMu: 14,
                        recencyDecaySigma: 30,
                        maxContextMessagesBefore: 3,
                        maxContextMessagesAfter: 3,
                        fetchAllPagesFromAPI: !1,
                        skipRetry: !1,
                        apiSearchRateLimitPeriodInSeconds: 60,
                        apiLoadRateLimitPeriodInSeconds: 60,
                        apiSearchRateLimit: 3,
                        apiLoadRateLimit: 3,
                        maxDaysToLoadChannel: 90,
                        maxMessagesToLoadChannel: 120
                    },
                    "google-calendar": {
                        maxQueries: 50,
                        maxResultsPerQuery: 50,
                        maxResultsToHydrate: 100,
                        hydrateParallelism: 15,
                        recallParallelism: 20,
                        fullPipelineTimeoutMs: 4e3,
                        fullPipelineRetry: !1
                    },
                    outlook: {
                        maxQueries: 50,
                        maxResultsPerQuery: 50,
                        maxResultsToHydrate: 100,
                        hydrateParallelism: 15,
                        recallParallelism: 20,
                        recallJitterAverageMs: 600,
                        fullPipelineTimeoutMs: 6e3,
                        fullPipelineRetry: !1,
                        useBroadQueryOnly: !1
                    },
                    asana: {
                        skipHydration: !1
                    },
                    helpdocsCachingExpireMs: 36e5,
                    minCohereRelevanceOnNonPrimarySource: 0,
                    minCohereRelevance: 0,
                    maxUrlLength: 1e3,
                    maxDocumentsPerZerankRequest: 75,
                    zerankParallelism: 4
                },
                qna_embedding: {
                    embeddingMethod: void 0
                },
                slack_grid_pinned_space_ids: {},
                slack_pause_ingestion: {
                    liveIngestion: {
                        allWorkspaces: {
                            events: [{
                                type: "user_change"
                            }]
                        },
                        specificWorkspaces: []
                    },
                    bulkIngestion: []
                },
                link_paste_order: {
                    defaultOrder: {
                        name: "Default",
                        order: ["preview", "mention", "link"]
                    }
                },
                collection_service_concurrency_cost_limit: {
                    maxCost: 2e5
                },
                collection_service_max_collection_size: {
                    maxSize: 25e4,
                    maxMsvSize: 5e5
                },
                collection_direct_traversal_max_collection_size: {
                    maxSize: 25e4,
                    maxMsvSize: 5e5
                },
                query_collection_rate_limit: {
                    maxRequestsPerWindow: 300,
                    windowLengthSeconds: 5 * i(627179).m1,
                    publicMaxRequestsPerWindow: 500,
                    publicWindowLengthSeconds: i(627179).m1,
                    offlineMaxRequestsPerWindow: 100,
                    offlineWindowLengthSeconds: 5 * i(627179).m1
                },
                query_collections_with_sql_rate_limit: {
                    client_type: {
                        agent: 400,
                        custom_agent: 800,
                        database_agent: 100,
                        mcp_api: 100,
                        research_mode: 100
                    },
                    client_type_actor: {
                        custom_agent: 200
                    },
                    client_type_actor_space_overrides: {}
                },
                collection_sqlite_min_size_by_client_type: {
                    automations: 0,
                    calendar: 0,
                    notion_app: 200,
                    public_api: 2e3,
                    default: 200
                },
                query_collection_slow_mode: {
                    windowSeconds: 10,
                    requestThresholdPerWindow: 1e3,
                    clientThrottleMs: 1e3,
                    maxJitterMs: 0
                },
                query_collection_size_based_slow_mode: {
                    config: []
                },
                query_collection_chart_refetch_settings: {
                    clientThrottleMs: 3e3
                },
                offline_query_collection_settings: {
                    limit: 100,
                    skip_if_downloaded_within_ms: 36e5
                },
                offline_mode_settings: {
                    max_blocks_per_origin_page: 2e4,
                    refetch_interval_ms: 12e5,
                    refetch_collections_interval_ms: 36e5,
                    num_pages_per_refetch: 20,
                    num_collections_per_refetch: 3,
                    autosynced_pages_limit: 0,
                    autosynced_favorite_pages_limit: 0,
                    autosync_interval_ms: 12e5,
                    download_batch_size: 10,
                    download_max_requests_per_api_call: 100,
                    reinitialize_on_error_percentage: 0,
                    settings_response_percentage: 5
                },
                offline_monetization_settings: {
                    manual_toggles_that_trigger_upsell_toast: [2, 8]
                },
                biz_trial_lifecycle_campaign_config: {},
                offline_mode_sync_engine_config: {
                    update_sources: []
                },
                sidebar_cache_logging_config: {
                    sample_rate: 0
                },
                collection_reducer_request_settings: {
                    chart: {
                        debounce_wait_ms: 1e3
                    },
                    general_debounce_wait_ms: void 0
                },
                charts_query_collection_limits: {},
                mc_config: {},
                id_schema_dynamic_config_v2: {
                    percent: 0
                },
                sites_settings: {
                    custom_hostname_validation: {
                        retry_delay: 1e3,
                        max_retries: 5,
                        inject_failure_percent: 0
                    }
                },
                mobile_dictation_visualizer: {
                    lowshelf_filter_frequency: 1500,
                    lowshelf_filter_gain: -30,
                    fft_size: 256,
                    min_hz: void 0,
                    max_hz: void 0
                },
                load_test_trace_config: {
                    queue_page_viewer_simulator_sample_rate: 0,
                    load_test_inner_sample_rate: 0
                },
                load_page_chunk: {
                    recursive_query_cache_expire_ms: 6 * i(627179).pT
                },
                activity_type_aes_config: {
                    default: "iae"
                },
                activity_batched_queue_settings: {
                    groupBySpace: !1,
                    batchSize: 100,
                    maxWorkers: 2
                },
                assume_comment_read: {},
                jira_sync_events_aggregation_time_window_length_ms: {
                    time_window_length_ms: 5 * i(627179).TD
                },
                gdrive_app_id: {
                    app_id: ""
                },
                jira_data_validation_random_delay: {
                    max_delay_sec: 0
                },
                capi_v2_event_names: {
                    StartTrial: !1,
                    InitiateCheckout: !1,
                    CompleteRegistration: !1,
                    Purchase: !1,
                    PurchaseWorkType: !1,
                    PurchaseWorkTypeProfessionalDomain: !1,
                    Subscribe: !1,
                    SubscribeAI: !1
                },
                imports_queue_config: {
                    asana: {
                        saveTransactionsBatchSize: 100,
                        fetchTaskBatchSize: 100
                    }
                },
                always_force_refetch_for_specific_tables: {
                    tables: []
                },
                callout_config: {
                    callout_blocklist: [],
                    workspace_blocklist: []
                },
                integration_standards_url: {
                    url: ""
                },
                integration_tech_partners: {
                    tech_partner_ids: []
                },
                template_feed_ranking_config: {
                    formula_parameters: []
                },
                multicell_api_config: {
                    default_max_depth: 10,
                    api_overrides: {}
                },
                onboarding_templates: {
                    joiner: {}
                },
                monday_v2_config: {
                    unsupportedProperties: [],
                    boardItemsLimit: 100,
                    batchSize: 100,
                    itemSaveIntervalInQueueState: 1e3,
                    itemSaveBatchDelay: 100,
                    fetchBoardsInParallel: 3
                },
                zip_importer_partition_config: {
                    max_page_partition_size: 1e3,
                    max_page_partition_size_bytes: 0x40000000,
                    max_attachment_batch_size: 500,
                    max_attachment_batch_size_bytes: 0x40000000,
                    throttle_page_count_threshold: 5e3,
                    max_page_size_bytes: 2097152
                },
                zip_importer_limits: {
                    max_total_file_count: 5e4
                },
                github_ai_connector_configuration: {
                    appName: "",
                    clientId: "",
                    timeFrame: 365,
                    shouldIndexData: !0,
                    codeUploadBatchSize: 50,
                    knownUsersToIgnore: ["doug-engelbot"],
                    ingestPrReviews: !1,
                    maxIssuesToIngestPerPartition: 500,
                    itemsPerPage: 100,
                    learnMoreUrl: "",
                    maxDiffContentLength: 3e3,
                    enablePeriodicMetaSync: !1,
                    processingTimeThreshold: 12e4,
                    maxKafkaMessageSize: 2097152,
                    disableRecallAfterInHrs: 3,
                    githubDocsUrl: "https://docs.github.com",
                    ignorePushEventWithFilesAbove: 1e3,
                    ignoredEventIds: [],
                    githubDocsPath: "account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/converting-a-user-into-an-organization",
                    maxIngestionRepos: 1e3,
                    staleSyncAlertThresholdInHours: 6,
                    liveIngestionNotRunningThreshold: 72,
                    maxEventProcessingTimeout: 4.5 * i(627179).Xb
                },
                formula_compiler_diff_rate: {
                    rate: 0
                },
                jira_dc_auth_type_override_config: {
                    should_override_auth_type_to_bearer: !1,
                    jira_dc_sites: []
                },
                jira_ai_ingestion_config: {
                    learnMoreUrl: "https://notion.so",
                    jiraMarketPlaceAppUrl: "https://notion.so",
                    permissionPollerEnabled: !1,
                    permissionPollerPollTimeInSeconds: 1800,
                    enqueueNextTaskDelayInSeconds: 60,
                    enqueueFinishTaskDelayInSeconds: 3600,
                    enqueueNextDeleteTaskDelayInSeconds: 3600,
                    promiseBatchSize: 10,
                    bulkIngestionDelaySeconds: 3600,
                    chunkLength: 1e3,
                    maxNumberOfCustomFields: 100,
                    pollerNotRunningThresholdInHours: 5,
                    disableRecallAfterInHrs: 24,
                    promiseBatchForPoller: 5,
                    enableInternalComments: !0,
                    searchJiraFilterEntities: !1,
                    enableGroupsAndRoles: !1,
                    userOAuthAppClientId: "",
                    logWebhookEvents: !1,
                    permissionPollerSegmentTimeSec: 180,
                    usersSyncPollerEnabled: !1,
                    usersSyncPollerNotRunningThresholdInHours: 16,
                    userSyncPollerIntervalInHours: 4,
                    logApiUrls: !1,
                    logApiResponseHeaders: !1,
                    waitTimeAfterApiCall: 1e3,
                    serialSyncRunFrequencyInHours: 2,
                    permissionSerialMainPollerEnabled: !1,
                    serialTaskBatchSize: 1,
                    apiCountThresholdForLargeSpaces: 2e3,
                    issueSecurityAllowedCount: 0,
                    ingestionKafkaMaxSize: 1992294,
                    promiseBatchSizeS3: 5
                },
                jira_ingestion_config_v2: {
                    forgeAppName: "Notion-Jira-Connector",
                    enableForgeAppSetup: !1,
                    ingestionKafkaMaxSize: 1992294,
                    enqueueFinishTaskDelayInSeconds: 3600,
                    enqueueNextTaskDelayInSeconds: 60,
                    enqueueDelayForDisconnectInSeconds: 3600,
                    enqueueInitialTaskDelayInSeconds: 60,
                    permissionPollerEnabled: !1,
                    permissionPollerRunFrequencyInHours: 2,
                    sendToKafka: !0,
                    maxKafkaMessageSize: 1992294,
                    learnMoreUrl: "https://www.notion.com/help/notion-ai-connector-for-jira",
                    createTokenHelpUrl: "https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/",
                    temp_turbopuffer_index: "jira_v2",
                    staleRecallThresholdInHours: 24,
                    pollerNotRunningThresholdInHours: 6,
                    jiraMarketPlaceAppUrl: "https://marketplace.atlassian.com/apps/1235932/notion-ai",
                    logAPICalls: !1,
                    waitTimeAfterApiCallInMS: 1e3,
                    applyJitterToRetry: !1,
                    issueSecurityLimit: 1e3,
                    eventLoopYieldBatchSize: 500,
                    supportedBrowseProjectPermissionType: ["applicationRole", "projectRole", "group", "anyone", "projectLead", "sd.customer.portal.only"],
                    logBrowseProjectTypesForAllProjects: !1,
                    enablePollSyncCheckpointing: !1,
                    stateFileOldForPollSyncThresholdInHours: 12,
                    accessTokenTTLSeconds: 3600,
                    accessTokenBufferSeconds: 60,
                    userSyncBatchSize: 500,
                    enablePermissionsCheckpointing: !1
                },
                asana_ingestion_config: {
                    ingestionTimeWindow: 365,
                    enqueueNextTaskDelayInSeconds: 5,
                    enqueueFinishTaskDelayInSeconds: 60,
                    learnMoreUrl: "https://www.notion.com/help/asana-ai-connector",
                    sendToKafka: !0,
                    maxKafkaMessageSize: 2097152,
                    nextDisconnectTaskDelayInSeconds: 60,
                    finishDisconnectTaskDelayInSeconds: 3600,
                    liveIngestionPollerEnabled: !0,
                    staleSyncAlertThresholdInHours: 6,
                    staleRecallThresholdInHours: 24,
                    liveSyncRestartAfterHours: 12,
                    projectsIngestionBatchSize: 100,
                    projectsWebhooksIngestionBatchSize: 100,
                    projectsTasksIngestionBatchSize: 1,
                    projectsTasksLiveIngestionBatchSize: 10,
                    userTasksLiveIngestionBatchSize: 10,
                    usersIngestionBatchSize: 50,
                    useV2: !1,
                    maxLatestTasksLimit: 1e5
                },
                slack_v2_config: {
                    pollerEnabled: !0,
                    pollerRunFrequencyInHours: 1,
                    learnMoreUrl: "https://www.notion.com/help/slack-ai-connector",
                    pollerNotRunningThresholdInHours: 6
                },
                slack_redirect_uri: {
                    redirectUrl: "https://www.notion.so/workflows/slack/oauth/callback"
                },
                slack_ingestion_logging: {
                    enabledWebhookEventTypes: []
                },
                trello_import_batch_config: {
                    cardBatchSize: 20
                },
                onboarding_config: {
                    templatesDuplicationTimeoutInSeconds: 2
                },
                onetap_csrf_config: {
                    minEnforcementClientVersion: ""
                },
                automation_settings: {
                    action_execution_max_event_loop_block_time_ms: void 0,
                    action_execution_timeout_ms: 5 * i(627179).Xb,
                    client_formula_timeout_ms: 30 * i(627179).TD,
                    server_formula_timeout_ms: 30 * i(627179).TD,
                    web_request_timeout_ms: 15 * i(627179).TD,
                    max_retry_attempts: void 0,
                    retry_attempt_random_offset_ms: void 0
                },
                site_sitemap_known_spam_workspaces: {
                    space_ids: []
                },
                activity_digest_config: {
                    v2UnifiedDigestTaskMode: "enabled",
                    timeBufferMinutes: 5,
                    maxActivityGroups: 10,
                    maxActivityGroupSize: 5,
                    maxActivityGroupsWhenCombined: 5,
                    onlyTargetEnglishUsers: !1,
                    newEmailEnablementDate: "2025-06-30T00:00:00.00Z",
                    shouldTruncateEdits: !0,
                    numEditsPerActivity: 3,
                    maxNumNotifications: 101
                },
                unified_digest_scheduling_config: {
                    enabled: !0,
                    earliestScheduleHour: 6,
                    latestScheduleHour: 9,
                    dryRunEarliestScheduleHour: 3,
                    dryRunLatestScheduleHour: 6,
                    shouldPruneScheduledDigestMessage: !0,
                    maxMessageAgeInDays: 30
                },
                home_digest_email_config: {
                    shouldEnqueuePrimaryWorker: !1,
                    taskMode: "enabled",
                    runOnDayOfWeek: 5,
                    sendOnDayOfWeek: 1,
                    bucketSampleRate: 1,
                    bucketDelaySeconds: .6,
                    minDaysBetweenEmails: 5,
                    utcStartHour: 21,
                    numUserBuckets: 3e4,
                    numDataReadyTests: 10,
                    numPreviousDaysToCheck: 3,
                    maxTasksPerEnqueue: 1e3,
                    disabledEmailDomains: [],
                    disabledSpaceIds: [],
                    queryCollectionTimeoutMs: 10 * i(627179).TD
                },
                pickup_digest_config: {
                    shouldEnqueuePrimaryWorker: !1,
                    taskMode: "disabled",
                    runOnDayOfWeek: 1,
                    sendOnDayOfWeek: 2,
                    bucketSampleRate: 1,
                    bucketDelaySeconds: .6,
                    minDaysBetweenEmails: 12,
                    utcStartHour: 6,
                    numUserBuckets: 35e3,
                    numDataReadyTests: 10,
                    numPreviousDaysToCheck: 3,
                    maxTasksPerEnqueue: 1e3
                },
                expanded_activity_digest_hooks: {
                    directInvites: "disabled",
                    comments: "disabled",
                    favorites: "disabled",
                    significantEdits: "disabled",
                    significantEditOptions: {
                        minChangedChars: 100,
                        activityCountLimit: 100,
                        activityTimeLimitMs: i(627179).pT,
                        throttleSignificantEditsMs: 30 * i(627179).Xb
                    }
                },
                verification_idor_fix: {
                    validate: "ignore"
                },
                demo_tooltip_tour_config: {
                    tour: {}
                },
                jira_sync_traffic_tracking_space_ids: {
                    space_ids: []
                },
                marketplace_fee_overrides: {
                    data: {}
                },
                marketplace_profile_revenue: {
                    data: {}
                },
                throttle_notification_sent_analytics: {},
                mc_auth: {
                    group: "dual_version_on_new_token"
                },
                marketplace_payout_delay_days: {},
                gmail_action_email_delay: {
                    email_delivery_delay: 120
                },
                jira_ai_connector: {
                    prefix: "jira"
                },
                custom_emojis_config: {
                    limit: 5e3
                },
                creator_profile_allowlist: {
                    usernames: [],
                    names: []
                },
                integration_webhooks_config: {},
                marketplace_public_purchase_url_optout: {
                    usernames: ["thomas"],
                    contentful_ids: ["17bVrJyVTyegxdnESZOVPs"]
                },
                marketplace_localized_minimum_payouts: {},
                marketplace_setup_sessions_modal_config: {
                    calLink: "notionmarketplace/free-1-1-session-with-certified-notion-expert",
                    calOrigin: "https://notionpartners.cal.com",
                    namespace: "free-1-1-session-with-certified-notion-expert"
                },
                setup_sessions_instant_booking_config: {
                    calLink: "notionmarketplace/free-1-on-1-notion-setup-session-same-day-booking",
                    calOrigin: "https://notionpartners.cal.com",
                    namespace: "free-1-on-1-notion-setup-session-same-day-booking"
                },
                marketplace_setup_sessions_onboarding_config: {
                    calLink: "notionmarketplace/free-1-1-session-with-certified-notion-expert",
                    calOrigin: "https://notionpartners.cal.com",
                    namespace: "free-1-1-session-with-certified-notion-expert"
                },
                automation_http_request_action_denylist: {
                    list: []
                },
                help_center_search_config: {
                    maxTotalSearchResults: 50,
                    maxTemplateSearchResults: 10,
                    maxHelpCenterSearchResults: 40
                },
                microsoft_teams_ai_connector: {
                    kafkaMessageMaxSize: 2097152,
                    partitionBatchSize: 10,
                    maxChannelSyncLookbackTimeMS: 2592e6,
                    staleSyncAlertThresholdInHours: 6,
                    maxChatsToSyncPerUser: 1e3,
                    liveSyncLookbackTimeMS: 864e5,
                    maxMessagesPerChannel: 1e4,
                    learnMoreUrl: "https://notion.notion.site/Notion-AI-Connector-for-Microsoft-Teams-Beta-FAQ-1ecefdeead0580c7b3bcf870a7acab41?pvs=4",
                    staleRecallThresholdInHours: 24,
                    slowSyncTaskRunIntervalInHours: 24,
                    maxActiveTeamsToSync: 100,
                    minTeamThresholdForSlowSync: 200,
                    skipInActiveChannelsSync: !1,
                    slowSyncTaskNotRunningThresholdInHours: 168,
                    enableOptimizedUserChatsSync: !1,
                    enableOptimizedTeamAndChannelMembershipSync: !1,
                    enableSkipMeetingChats: !1,
                    useMicrosoftSDKExceptionV2: !1,
                    disableChatSearch: !1,
                    concurrentAPICallLimit: 1,
                    requireAdminCheck: !1,
                    enableAdminCheckForSpaceIds: [],
                    adminRoleTemplateIds: ["62e90394-69f5-4237-9190-012177145e10", "69091246-20e8-4a56-aa4d-066075b2a7a8"],
                    bypassAdminCheckForSpaceIds: [],
                    bypassAdminCheckForActorIds: [],
                    enableUpnFallbackMatching: !1
                },
                template_limits: {
                    maxNumBlocks: 5e4,
                    gettingStartedMaxNumBlocks: 500,
                    maxNumBlocksForDuplicationValidation: 1e4
                },
                template_validation_scan_opt_out: {
                    blockIds: []
                },
                export_block_task_blocked_actors: {
                    actorIds: []
                },
                export_block_space_rate_limit: {
                    enabled: !1,
                    windowSeconds: 3600,
                    maxRequests: 500
                },
                export_collection_csv_batch_settings: {
                    batchSize: 500,
                    maxBufferSize: 1e3
                },
                export_pdf_proactive_compression: {
                    image_threshold: 30,
                    compression_width: 1024,
                    high_density_image_threshold: 300,
                    high_density_compression_width: 512
                },
                sharepoint_ingestion: {
                    sendToKafka: !1,
                    ingestionCompleteDelay: 3600,
                    ingestionNextTaskDelay: 300,
                    prefix: "sharepoint-v1",
                    ingestionKafkaMaxSize: 4718592,
                    liveIngestionPollerEnabled: !1,
                    liveIngestionPollerInterval: 3600,
                    userActivityLookbackDays: 180,
                    maxDriveItemSizeInBytes: 0xa00000,
                    rowsPerSheet: 500,
                    blockSizeInChars: 1e3,
                    enableUserRecentFilesInRecall: !1,
                    staleRecallThresholdInHours: 24,
                    staleSyncAlertThresholdInHours: 6,
                    syncThresholdInDays: 730,
                    warnDriveItemSyncErrorPercentage: 2,
                    errorDriveItemSyncErrorPercentage: 5,
                    learnMoreUrl: "https://notion.notion.site/Notion-AI-Connector-for-SharePoint-and-OneDrive-Beta-FAQ-1ecefdeead05807f8c2dc62d1d20ed3a?pvs=4",
                    forceSyncDriveData: !1,
                    forceSkipSyncHistoricalData: !1,
                    liveSyncRestartAfterHours: 12,
                    enableV2Flow: !1,
                    maximumFilesToSyncInLive: 500,
                    maximumFilesToSyncInBulk: 5e3,
                    maxStalenessDaysForDriveResync: 2e3,
                    maxItemsForDriveResync: 1e5,
                    cleanEmptyDrives: !1,
                    requireAdminCheck: !1,
                    enableAdminCheckForSpaceIds: [],
                    adminRoleTemplateIds: ["62e90394-69f5-4237-9190-012177145e10", "f28a1f50-f6e7-4571-818b-6a12f2af6b6c"],
                    bypassAdminCheckForSpaceIds: [],
                    bypassAdminCheckForActorIds: [],
                    enableUpnFallbackMatching: !1
                },
                salesforce_ingestion: {
                    sendToKafka: !1,
                    prefix: "salesforce",
                    ingestionKafkaMaxSize: 4718592,
                    ingestionCompleteDelay: 3600,
                    ingestionNextTaskDelay: 300,
                    soqlRequestsPerUserPerSpaceLimit: 120,
                    soqlRequestsPerUserPerSpaceLimitPeriodInSeconds: 86400,
                    liveIngestionPollerEnabled: !0,
                    liveIngestionPollerInterval: 3600,
                    staleSyncAlertThresholdInHours: 6,
                    maxChunkLength: 1e3,
                    staleRecallThresholdInHours: 24,
                    maxAdditionalSpans: 30,
                    adminTokenApiCallsLimit: 100,
                    adminTokenApiCallsLimitPeriodInSeconds: 3600,
                    adminTokenRateLimitMaxRetryAttempts: 1e3,
                    stateFileOldForLiveSyncThresholdInHours: 12,
                    logApiCalls: !1,
                    maxRecordsToIngestPerObjectInInitialSync: 1e6,
                    maxRecordsToIngestPerObjectInLiveSync: 2e5,
                    enableOwdQueryFilter: !1,
                    skipAdminUserAuth: !0,
                    maxTokenRefreshFailures: 10,
                    permissionsShardFlushThreshold: 2e5,
                    bulkQueryMaxRecordsPerPage: 1e4,
                    maxRelationsPerAccountPerObject: 50,
                    maxRecordPermissionsPerObject: 1e5,
                    enableSimplifiedRecordPermissions: !1,
                    enableKafkaSendTimeout: !1,
                    kafkaSendTimeoutMs: 12e4
                },
                adoption_entry_point_time_delta: {
                    import_nudge_on_large_paste: {
                        view_delta: 432e6
                    },
                    import_nudge_on_block_create__collection_view: {
                        view_delta: 432e6
                    },
                    import_nudge_on_block_create__collection_view_page: {
                        view_delta: 432e6
                    },
                    import_nudge_on_block_create__page: {
                        view_delta: 432e6
                    },
                    import_nudge_on_block_create__table: {
                        view_delta: 432e6
                    },
                    import_nudge_on_drag: {
                        view_delta: 432e6
                    }
                },
                adoption_database_property_suggestion: {
                    ai_property_suggestion: {
                        max_exposure_count: 3,
                        cooldown_days: 1,
                        num_ai_property_suggestions: 4,
                        debounce_fetch_suggestion_delay_ms: 500,
                        max_database_age_days: 1,
                        max_non_title_properties: 1
                    }
                },
                adoption_database_newbie_create_property_inline_suggestion: {
                    ai_property_suggestion: {
                        max_exposure_count: 3,
                        cooldown_days: 1,
                        num_ai_property_suggestions: 10,
                        max_ai_property_suggestions_to_display: 5,
                        debounce_fetch_suggestion_delay_ms: 500,
                        max_database_age_days: 1,
                        max_non_title_properties: 1
                    }
                },
                database_newbie_ai_property_preview: {
                    ai_property_suggestion: {
                        max_exposure_count: 3,
                        cooldown_days: 1,
                        num_ai_property_suggestions: 3,
                        max_ai_property_suggestions_to_display: 3,
                        debounce_fetch_suggestion_delay_ms: 500,
                        max_database_age_days: 0,
                        max_non_title_properties: 0
                    }
                },
                lifecycle_profile_config: {},
                jira_get_api_request_limit: {
                    expireSeconds: 3600,
                    apiLimit: 5e3
                },
                aifw_modal_config: {
                    links: {},
                    meetingNotesVideos: {},
                    meetingNotesV2Locales: [],
                    meetingNotesV2Videos: {}
                },
                automations_update_pages_jitter_config: {
                    mode: "off",
                    amount_ms: 0
                },
                sharing_nudge_keywords: {
                    keywords: []
                },
                linear_ingestion: {
                    clientId: "",
                    prefix: "linear",
                    sendToKafka: !1,
                    nextQueueTaskDelayInSeconds: 3600,
                    finishQueueTaskDelayInSeconds: 3600,
                    pollerEnabled: !1,
                    nextDisconnectTaskDelayInSeconds: 0,
                    finishDisconnectTaskDelayInSeconds: 3600,
                    staleRecallThresholdInHrs: 6,
                    learnMoreUrl: "guides.aiConnectorLinear",
                    maxKafkaMessageSize: 2097152,
                    pollerNotRunningThresholdInHours: 6,
                    tokenMigrationEnabled: !1
                },
                box_ingestion: {
                    sendToKafka: !1,
                    prefix: "box",
                    maxKafkaMessageSize: 2097152,
                    nextQueueTaskDelayInSeconds: 3600,
                    finishQueueTaskDelayInSeconds: 3600,
                    learnMoreUrl: "https://www.notion.com/help/notion-ai-connectors-for-box",
                    nextDisconnectTaskDelayInSeconds: 0,
                    finishDisconnectTaskDelayInSeconds: 3600,
                    maxFolderDepth: 10,
                    fileAgeThresholdDays: 365,
                    chunkLength: 2e3,
                    liveIngestionPollerEnabled: !0,
                    staleSyncAlertThresholdInHours: 24,
                    maxFileSizeInBytes: 0xa00000,
                    maxPresentationFileSizeInBytes: 0xc800000,
                    pollerEnabled: !0,
                    usersToProcessConcurrently: 1,
                    maxFilesPerUser: 5e3,
                    maxEventsPerUser: 100,
                    maxEventPagesToFetch: 1,
                    eventPollingUsersConcurrency: 5,
                    usePerUserEventPolling: !1,
                    searchResultsCount: 1e3,
                    enableSearchLogging: !1,
                    realtimeSearchMaxFiles: 5,
                    realtimeSearchMaxCharsPerFile: 1e4,
                    realtimeSearchParallelism: 5,
                    useKeywordsAsIs: !0,
                    enableRealtimeSearchQuerySplitting: !0,
                    realtimeSearchMaxQueryLength: 20,
                    disconnectStaleThresholdInHours: 12
                },
                ai_connectors_monitoring_jobs: {
                    inProgressStaleDays: 1,
                    slackChannels: [],
                    slackUsername: "",
                    inProgressStaleTitle: "",
                    liveStaleTitle: "Live Ingestion Stale Spaces",
                    icon: ":robot_face:",
                    scriptApprovalChannelId: "",
                    scriptApprovalUserIds: ["U04A50TU064", "U04JRSSK11A"],
                    inProgressStaleBucketThresholdDays: [1, 3, 7],
                    liveStaleBucketThresholdHours: [6, 12, 24]
                },
                template_creator_derank_multiplier_config: {
                    config: {}
                },
                workflows_unsatisfactory_feedback_config: {
                    sampleRate: .1
                },
                disabled_collection_ids_for_indexactivityedits: {
                    disabled: []
                },
                jira_sync_data_validation_jira_properties_to_skip: {
                    properties: []
                },
                ai_disaster_recovery_global_model_fallback: i(969628).h,
                ai_model_picker_config_override: {
                    zeroRetentionModels: {
                        "openai-gpt-4.1": {
                            modelMessage: "GPT 4.1",
                            modelWithProviderMessage: "OpenAI GPT-4.1",
                            modelFamily: "openai",
                            modes: {
                                "markdown-chat": "stable"
                            }
                        },
                        "anthropic-sonnet-3.7": {
                            modelMessage: "Claude Sonnet 3.7",
                            modelWithProviderMessage: "Anthropic Claude Sonnet 3.7",
                            modelFamily: "anthropic",
                            modes: {
                                "markdown-chat": "stable"
                            }
                        }
                    },
                    nonZeroRetentionModels: {
                        "openai-gpt-4.1": {
                            modelMessage: "GPT 4.1",
                            modelWithProviderMessage: "OpenAI GPT-4.1",
                            modelFamily: "openai",
                            modes: {
                                "markdown-chat": "stable"
                            }
                        },
                        "anthropic-sonnet-4": {
                            modelMessage: "Claude Sonnet 4",
                            modelWithProviderMessage: "Anthropic Claude Sonnet 4",
                            modelFamily: "anthropic",
                            modes: {
                                "markdown-chat": "stable"
                            }
                        },
                        "anthropic-opus-4": {
                            modelMessage: "Claude Opus 4",
                            modelWithProviderMessage: "Anthropic Claude Opus 4",
                            modelFamily: "anthropic",
                            modes: {
                                "markdown-chat": "stable"
                            }
                        },
                        "anthropic-opus-4.1": {
                            modelMessage: "Claude Opus 4.1",
                            modelWithProviderMessage: "Anthropic Claude Opus 4.1",
                            modelFamily: "anthropic",
                            modes: {
                                "markdown-chat": "stable"
                            }
                        }
                    }
                },
                ai_disaster_recovery_model_blocklist: {},
                jira_sync_max_time_limit_for_timeline_sync: {
                    days: 90
                },
                tab_unload_threshold: {
                    thresholdInMs: 36e5
                },
                transcription_vad_settings: {
                    stopInterimTranscriptionsAfterMS: 2e4,
                    lowerWordBreakDurationAfterMS: 2e4,
                    forceWordBreakAfterMS: 3e4,
                    breakSegmentAfterMS: 1e4,
                    backBufferLengthMS: 2e3,
                    firstInferenceLengthMS: 500,
                    minimumInferenceLengthMS: 1e3,
                    fastInferenceWindowMS: 1e4,
                    fastInferenceStepMS: 1e3,
                    slowInferenceStepMS: 3e3,
                    silenceDurationMS: 2016,
                    wordBreakDurationMS: 288,
                    skipFalsePositiveBufferThreshold: .85,
                    talkingThreshold: .65,
                    stoppedTalkingThreshold: .5,
                    wordBreakThreshold: .5
                },
                meeting_notes_media_acquisition_config: {
                    timeoutMs: 15e3
                },
                getting_started_collection_subpage_relative_dates_definition: {},
                getting_started_templates: {},
                getting_started_unified_config: {
                    desktop: [],
                    mobile: []
                },
                transcription_summarization_model: {
                    model: "anthropic-sonnet-3.7"
                },
                ai_meeting_notes_agent_model: {
                    model: void 0
                },
                people_collection_queue_config: {
                    isSetupPeopleCollectionTaskEnabled: !0,
                    isReconcilePeopleCollectionTaskEnabled: !0,
                    isCreateOrUpdatePersonProfileTaskEnabled: !0,
                    isScheduleSetupPeopleCollectionEndpointEnabled: !0,
                    setupPeopleCollectionIntervalSeconds: 300,
                    reconcilePeopleCollectionIntervalSeconds: 86400,
                    createOrUpdatePersonProfileIntervalSeconds: 5,
                    personProfileSaveTransactionConcurrency: 2,
                    personProfileOperationCreationConcurrency: 100,
                    personProfileCountPerCreateOrUpdateTransaction: 250,
                    recordActorActivityIntervalSeconds: 600,
                    recordActorActivityThrottledIntervalSeconds: 14400,
                    recordActorActivityExcludedActivityTypes: ["collection-row-created", "collection-row-deleted", "collection-property-edited", "collection-view-edited", "collection-edited"]
                },
                library_version_config: {
                    version: 1
                },
                people_collection_version_config: {
                    peopleCollectionConfigurationVersion: 8,
                    personProfileConfigurationVersion: 3
                },
                get_recent_activity_feed_config: {
                    historyLimit: 90,
                    getRecentActivitiesEnableQuery: !0,
                    getRecentActivitiesNumIntervalsPerQuery: 7,
                    getRecentActivitiesNumParallelQueries: 3,
                    filterActivitiesBatchSize: 5,
                    filterActivitiesNumParallelBatches: 4,
                    recentActivitiesCacheRaceTimeoutMsWithCacheValues: 3e3,
                    recentActivitiesCacheRaceTimeoutMsWithoutCacheValues: 1e4,
                    loadRelatedRecordsLimit: 5
                },
                get_actor_activities_config: {
                    actorActivitiesDynamoQueryBatchSize: 100,
                    maxDynamoPaginationIterations: 10
                },
                csam_autoban_threshold: {
                    threshold: -1,
                    photodna_threshold: -1,
                    report: {
                        photodna: 2e3,
                        pdq: 31
                    }
                },
                premium_feature_availability: {
                    serverSampleRate: 0
                },
                jira_resync_delay_config: {
                    randomOffsetMaxHours: 6,
                    useUserTimezone: !0
                },
                jira_attachment_processing_throttle_config: {
                    enabled: !1,
                    minimumProcessingTimeMs: 0
                },
                ai_connector_user_notifications: {
                    notifications: []
                },
                ai_connectors_down: {
                    connectors: []
                },
                ai_connectors_csrf_protection: {
                    enabled_connectors: []
                },
                custom_connector_content_limits: {
                    maxContentSizeBytes: 0x40000000
                },
                ai_auto_stream_config: {
                    model: "openai-gpt-4.1",
                    disableReranking: !1,
                    disableSourceSpecificReranking: !1,
                    debounceTimeMs: 1500,
                    minWordCount: 3
                },
                agent_writer_model_config: {
                    defaultModel: "anthropic-haiku-4.5"
                },
                crdt_compaction_override: {
                    block_ids: []
                },
                template_feed_multiplicative_scores_config: {
                    score_fields: []
                },
                template_feed_ratings_ranking_scores_config: {
                    score_fields: []
                },
                skilljar_signup_field_labels_to_ids: {
                    notion_user_id: "",
                    profile_photo: "",
                    is_eligible_for_sales_certification: "",
                    is_eligible_for_service_certification: "",
                    is_eligible_for_technical_certification: ""
                },
                skilljar_courses: {
                    courses: []
                },
                workspace_analytics_pinot_rollout: {
                    tables: {
                        analytics_workspace_search_list: "enabled",
                        analytics_page_graph_views: "disabled"
                    }
                },
                event_trail_properties_allowlist: {},
                ekm_dynamic_config: {
                    ekmMigrationSpaceId: "you-forget-to-set-space-id-in-statsig-for-ekm-onboarding",
                    newWEKId: "you-forget-to-set-wek-id-in-statsig-for-ekm-migration"
                },
                email_alias_migration: {
                    mode: "notion-user-read-notion-user-write"
                },
                opfs_recordmap_cache_options: {
                    type: "shared-worker"
                },
                agent_max_attachments: {
                    value: 1
                },
                agent_seasonal_accessories: {
                    batch: "",
                    batch_expiration_time: ""
                },
                ai_agent_progressive_transcript_compression_threshold: {
                    threshold: .9,
                    createSummaryThreshold: .5,
                    updateSummaryInterval: .2
                },
                ai_agent_truncation_ratio_max_tokens_to_use: {
                    ratio: 1
                },
                offline_nux_localized_assets: {
                    videos: {}
                },
                offline_manual_sync_limit_config: {
                    limits: {
                        free: 5,
                        personal: "unlimited",
                        student: "unlimited",
                        plus: "unlimited",
                        business: "unlimited",
                        enterprise: "unlimited"
                    }
                },
                collection_size_limits: {
                    block_properties_max_size: void 0,
                    global_collection_schema_max_size: void 0,
                    collection_deleted_schema_max_size: void 0,
                    max_relations_for_single_property: void 0
                },
                public_api_nested_rollup_pointer_limits: {
                    enabled: !1,
                    max_total_nested_pointers: 500
                },
                subitem_validation_limits: {
                    max_subitem_validation_loads: 200
                },
                cove_item_id_to_space_mapping: {},
                adoption_test_space_in_app_message_eligibility: {},
                log_sidebar_invalid_blocks_config: {
                    rate: 0
                },
                manual_sidebar_order_migration: {
                    forwardWrite: "enabled"
                },
                getshardedrecordsincollection_max_concurrency: {
                    getShardedRecordsInCollection: 100,
                    getRecord: 100
                },
                google_drive_links_in_slack: {
                    ingest_public_channel_drive_links: !1,
                    sync_in_google_drive: !1
                },
                integration_allow_list_for_cleanup: {
                    integrations: []
                },
                custom_agent_sub_features: {
                    conversation_starters: !1,
                    preview_button: !1,
                    pricing_banner: !1,
                    analytics_view: !1,
                    allow_agent_embed: !1,
                    private_slack_channels: !1,
                    slack_user_group_sync: !0,
                    allow_custom_agent_reaction_triggers: !1,
                    hourly_recurrence_triggers: !0,
                    basic_save_warning_modal: !0,
                    efficient_all_agents_store_listener: !1,
                    available_run_increases: [500, 1e3, 5e3, 1e4, 1e5],
                    default_run_limit: 500,
                    usage_tracking_start_date: 1759958161e3,
                    duplicate_agents: !1,
                    trigger_debounce: !0,
                    resume_deduped_runs: !0,
                    wait_tool_enabled: !0,
                    set_slack_status: !1,
                    loading_jitter_config: {
                        initial: 0,
                        refetch: 10
                    },
                    run_limit_ui_variant: "request",
                    setup_mode_confirmation: !1,
                    pfa_workspace_spend_limit_at_inference: !1,
                    slack_reaction_dedupe: !0,
                    agent_credit_usage_display: !1,
                    agent_credit_request_flows: !1,
                    slack_deterministic_filters: !1,
                    runaway_credit_pause: void 0,
                    missing_page_access_toast: !0,
                    stop_all_runs_button: !1,
                    share_menu_add_agents: !1,
                    should_run_router_for_page_edits: !1
                },
                custom_agent_advanced_features: {
                    agentStatsView: !1,
                    exportRunsCsv: !1,
                    exportRunsCsvMaxLength: void 0,
                    transcriptDebugging: !1
                },
                custom_agent_spend_limit: {},
                notion_credit_pack_purchase_limit: {},
                ai_credits_enforcement_date: {
                    enforcement_date_ms: i(906745).DateTime.fromObject({
                        year: 2026,
                        month: 5,
                        day: 4,
                        hour: 9
                    }, {
                        zone: "America/Los_Angeles"
                    }).toMillis()
                },
                custom_agent_rollout_badge: {
                    badge_type: "none"
                },
                custom_agents_outage_banner: {
                    title: "",
                    contents: ""
                },
                custom_agent_experimental_features: {
                    availableOptions: []
                },
                custom_agent_queue_config: {
                    queueType: "standardTaskQueue"
                },
                custom_agent_permissions: {
                    allowed_permission_modes: ["botActor"]
                },
                custom_agent_auto_view_limits: {
                    maxTokens: void 0,
                    maxToolsAndAccessTokens: void 0
                },
                custom_agent_template_registry: {
                    locales: {}
                },
                agent_skill_template_registry: {
                    locales: {}
                },
                ai_agent_tool_result_tokens: {
                    maxToolResultTokens: 5e4
                },
                ai_agent_tool_result_group_cap_tokens: {
                    maxTokens: 0
                },
                getting_started_page_id: {
                    "en-US": {
                        local: "",
                        development: "",
                        staging: "",
                        production: ""
                    }
                },
                offers_metadata: {
                    post_biz_trial_coupon_eligible_days: 7,
                    agent_biz_trial_delay_days: 7
                },
                business_trial_cc_upfront_assets: {
                    videos: {},
                    thumbnails: {}
                },
                mwn_2025_modal_assets: {
                    videos: {},
                    images: {}
                },
                custom_agent_launch_modal_assets: {
                    videos: {},
                    images: {}
                },
                mwn_2025_sidebar_popup_assets: {
                    sidebarVideos: {}
                },
                external_integration_service_routing_config: {
                    migrated_to_integrations_server: []
                },
                formulas_disabled_functions: {
                    disabledFunctions: []
                },
                formula_dependency_limits_config: {
                    totalLimit: 1e6,
                    perFormulaLimit: 1e5,
                    totalWarningThreshold: 5e5,
                    perFormulaWarningThreshold: 5e4
                },
                collection_request_orchestrator_config: {
                    maxGlobalConcurrentRequests: 500,
                    maxPerCvbConcurrentRequests: 100,
                    circuitBreakerEnabled: !1,
                    circuitBreakerWindowMs: 3e3,
                    circuitBreakerThreshold: 200,
                    circuitBreakerCyclicRequestThreshold: 10,
                    cancelOnUnmountPercentage: 0,
                    cancelOnViewInvalidationPercentage: 0
                },
                trial_home_panel_config: {
                    experimentStartDate: "2025-10-28",
                    progressBarExperimentStartDate: "2026-03-02"
                },
                new_user_home_config: {
                    experimentStartDate: "2026-03-30"
                },
                release_notes_cache_config: {
                    ttlMs: 24 * i(627179).pT
                },
                special_releases_config: {
                    specialReleases: {}
                },
                disabled_ai_connector_consumers: {
                    consumers: []
                },
                workflow_outlier_detection_config: {
                    threshold: 20
                },
                mathpix_pdf_import_config: {
                    output_format: "md",
                    max_pages: 100
                },
                api_adaptive_retry_config: {},
                microsoft_eligible_domains_without_microsoft_mx_record: {
                    domains: []
                },
                exp_ping_polling_config: {
                    intervalSeconds: 300
                },
                http_health_tracker_config: {
                    enabled: !1,
                    windowMs: 6e4
                },
                onboarding_agent_instructions: {},
                uxr_debug_onboarding_agent_context: {
                    instructions: ""
                },
                adoption_post_onboarding_agent_model: {
                    model: "oatmeal-cookie"
                },
                nbo_message_cadence: {},
                nbo_users_block_messages: {
                    userIds: []
                },
                ai_image_cover_prompt: {
                    prompt: "You are a prompt writer for Notion page cover photos. The user has requested a generated cover photo and your goal is to write a great prompt that creates an image that surprises and delights the user. The image model that is being used is Google’s nano banana pro. If possible, please make the image relevant to the page the user is looking at. In certain cases, like if the page is empty, or the content has no coherent topic to focus on, you can generate a generic image. Do try to use the page title first. Since this image is being used as a Notion page cover photo and will be generated in a 16:9 aspect ratio, make sure we generate things that look good as a cover photo. As a rule of thumb, we don’t want to include a lot of text or have extremely complicated graphics. The goal of the cover photo is to be an elegant backdrop to the contents on the page. It should never be distracting. Here are some good themes we have identified for cover photos: - Repeating patterns - Atmospheric gradients - Subtle still-life - Material micro-textures - Geometric composition - Landscape art Avoid overly abstract or modern representations. One of Notion’s themes is keeping with beautiful art throughout history. Cover photos will look better in Notion if they are timeless rather than modern. Remember, you want to surprise and delight the user with the generation. It should look good as a backdrop for the contents on their page and be surprisingly relevant."
                },
                routes_enabled_in_client_route_config_framework: {
                    phase1: {},
                    phase2: {},
                    phase3: {}
                },
                metronome_config: {
                    apiCacheExpiryMs: 15 * i(627179).Xb
                },
                backfill_user_deleted_time: {
                    deleted_time: 17356896e5
                },
                ai_openai_prompt_cache_key_config: {
                    enabled: !1,
                    defaultNumShards: 1,
                    shardOverrides: {}
                },
                adoption_aimn_live_collab_discovery_nudge_config: {
                    min_users_present: void 0
                },
                workspace_recs_surface_registry: {
                    sidebar: {
                        experiment_name: "",
                        variants_config_key: "ws_recs_sidebar_variants"
                    },
                    switcher: {
                        experiment_name: "",
                        variants_config_key: "ws_recs_switcher_variants"
                    }
                },
                ws_recs_sidebar_variants: {
                    variants: {
                        control: {
                            variant_type: "control",
                            source: "joinable_spaces",
                            threshold: 0
                        }
                    }
                },
                ws_recs_switcher_variants: {
                    variants: {
                        control: {
                            variant_type: "control",
                            source: "joinable_spaces",
                            threshold: 0
                        }
                    }
                },
                agent_update_page_configs: {
                    concurrency_lock_enabled: !0,
                    concurrency_lock_retry_num: 1
                },
                mobile_meeting_notes_api_config: {
                    past_event_window_weeks: 3,
                    transcription_window_weeks: 3
                },
                ...a,
                dormant_deletion_caps: {
                    max_notify_7d: 0,
                    max_notify_30d: 0,
                    max_notify_90d: 0,
                    max_deletion: 0,
                    batch_size: 500
                },
                ai_credit_margin: {
                    active_margin: "default",
                    default_margin: 1.3,
                    reduced_incident_margin: 1.1
                },
                export_block_workspace_enqueue_rate_limit: {
                    enabled: !1,
                    shortWindowLimit: 500,
                    shortWindowExpireSeconds: 3600,
                    longWindowLimit: 5e3,
                    longWindowExpireSeconds: 86400
                }
            }
        },
        473556: (e, t, i) => {
            i.d(t, {
                K: () => r,
                default: () => l
            }), i(16280), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            var a = () => i(546605);
            i(898992), i(803949), i(581454);
            class o {
                cache = new Map;
                trackGate({
                    gateName: e,
                    value: t,
                    user: i
                }) {
                    let a = `feature_gate:${e}`;
                    this.trackEntity({
                        key: a,
                        value: t,
                        entityType: "feature_gate",
                        entityName: e,
                        user: i
                    })
                }
                trackExperiment({
                    experimentName: e,
                    paramName: t,
                    value: i,
                    user: a
                }) {
                    let o = `experiment:${e}:${t}`;
                    this.trackEntity({
                        key: o,
                        value: i,
                        entityType: "experiment",
                        entityName: e,
                        paramName: t,
                        user: a
                    })
                }
                clearCache() {
                    this.cache.clear()
                }
                getUserKey(e) {
                    if (!e) return "anonymous";
                    let t = e.userID ? ? "",
                        i = e.customIDs ? ? {},
                        a = Object.keys(i).sort().map(e => `${e}:${i[e]}`).join("|");
                    return `userID:${t}|${a}`
                }
                trackEntity({
                    key: e,
                    entityType: t,
                    entityName: a,
                    paramName: o,
                    value: n,
                    user: r
                }) {
                    let s = Date.now(),
                        _ = this.getUserKey(r),
                        l = `${e}:${_}`,
                        c = this.cache.get(l),
                        d = {
                            value: n,
                            timestamp: s
                        };
                    if (c && !(0, i(381453).n4)(c.value, d.value)) {
                        let e = s - c.timestamp;
                        e < 6e4 && function({
                            entityType: e,
                            entityName: t,
                            timeBetweenChangesMs: a,
                            paramName: o
                        }) {
                            var n;
                            let r = (0, i(737124).getAppStartTime)(),
                                s = r ? (Date.now() - r) / 6e4 : void 0,
                                _ = "u" > typeof navigator && void 0 !== navigator.onLine ? navigator.onLine ? "online" : "offline" : "online";
                            null == (n = i(219279).StatsigInitializer.track) || n.call(i(219279).StatsigInitializer, "statsig_flicker", {
                                entity_type: e,
                                entity_name: t,
                                param_name: o,
                                time_since_app_start_minutes: s,
                                time_between_changes_ms: a,
                                network_state: _
                            })
                        }({
                            entityType: t,
                            entityName: a,
                            timeBetweenChangesMs: e,
                            paramName: o
                        })
                    }
                    if (this.cache.set(l, d), this.cache.size > 1e4) {
                        let e = Array.from(this.cache.entries());
                        e.sort((e, t) => e[1].timestamp - t[1].timestamp), e.slice(0, Math.floor(.1 * this.cache.size)).forEach(([e]) => this.cache.delete(e))
                    }
                }
            }
            let n = new o,
                r = "group",
                s = new Set;
            class _ extends a().Store {
                getInitialState() {
                    return {
                        currentUserId: void 0,
                        currentSpaceId: void 0,
                        ready: !0
                    }
                }
                getEnvironment() {
                    if (this.isInitialized()) return i(219279).StatsigInitializer.environment
                }
                isInitialized() {
                    return i(219279).StatsigInitializer.isComplete
                }
                getStatsigClient() {
                    if (this.isInitialized()) return i(219279).statsigClientLoader.getClientSync() || void 0
                }
                getGroup(e) {
                    let {
                        experimentId: t,
                        disableExposureLogging: a = !1,
                        param: o = r,
                        defaultValue: n,
                        persistentAssignmentOptions: s
                    } = e, _ = this.getExperiment(t, a, s);
                    return void 0 !== _ ? (0, i(218745).Gn)(_, o) : n
                }
                getExperiment(e, t = !1, a) {
                    let o, n, r = this.getStatsigClient();
                    if (r) {
                        if (null != a && a.enablePersistentAssignments && a.idType) {
                            let e = i(219279).statsigClientLoader.getUserPersistentOverrideAdapter(),
                                t = i(219279).statsigClientLoader.getStatsigUser();
                            e && t && (o = e.loadUserPersistedValues(t, a.idType))
                        }
                        try {
                            return (n = r.getExperiment(e, {
                                disableExposureLog: t,
                                userPersistedValues: o
                            })).details.reason.endsWith(i(884132).C) && this.logUnrecognizedEntity(e, "experiment"), n
                        } catch (t) {
                            this.trackMetric("statsig_client_get_group_error", {
                                experiment_id: e
                            }), this.logError("getGroup", t, {
                                experimentId: e,
                                expConfig: JSON.stringify(n)
                            })
                        }
                    }
                }
                manuallyLogExperimentExposure(e) {
                    let t = this.getStatsigClient();
                    t && t.getExperiment(e)
                }
                checkGate(e, t = !1) {
                    let i = this.getFeatureGate(e, t);
                    return void 0 !== i && i.value
                }
                getFeatureGate(e, t = !1) {
                    let a, o = this.getStatsigClient();
                    if (o) try {
                        return (a = t ? o.getFeatureGate(e, {
                            disableExposureLog: !0
                        }) : o.getFeatureGate(e)).details.reason.endsWith(i(884132).C) && this.logUnrecognizedEntity(e, "gate"), a
                    } catch (i) {
                        let t = i instanceof Error ? i.message : void 0;
                        this.logError("checkGate", i, {
                            gateName: e,
                            ...t && {
                                errorMessage: t
                            }
                        }), this.trackMetric("statsig_client_check_gate_error", {
                            gate_name: e
                        });
                        return
                    }
                }
                getConfig(e, t = !1) {
                    let a, o = this.getStatsigClient();
                    if (o) try {
                        return (a = t ? o.getDynamicConfig(e) : o.getDynamicConfig(e, {
                            disableExposureLog: !0
                        })).details.reason.endsWith(i(884132).C) && this.logUnrecognizedEntity(e, "config"), a
                    } catch (i) {
                        let t = i instanceof Error ? i.message : void 0;
                        this.logError("getConfig", i, {
                            dynamicConfigName: e,
                            ...t && {
                                errorMessage: t
                            }
                        }), this.trackMetric("statsig_client_get_config_error", {
                            config_name: e
                        });
                        return
                    }
                }
                getLayer(e, t = !1) {
                    let a = this.getStatsigClient();
                    if (a) try {
                        let o = a.getLayer(e, t ? {
                            disableExposureLog: !0
                        } : void 0);
                        return o.details.reason.endsWith(i(884132).C) && this.logUnrecognizedEntity(e, "layer"), o
                    } catch (i) {
                        let t = i instanceof Error ? i.message : void 0;
                        this.logError("getLayer", i, {
                            layerName: e,
                            ...t && {
                                errorMessage: t
                            }
                        }), this.trackMetric("statsig_client_get_layer_error", {
                            layer_name: e
                        });
                        return
                    }
                }
                logEvent(e, t, i) {
                    let a = this.getStatsigClient();
                    if (!a) return !1;
                    try {
                        return a.logEvent(e, t, i), !0
                    } catch (o) {
                        let a = o instanceof Error ? o.message : void 0;
                        return this.logError("logEvent", o, {
                            eventName: e,
                            value: String(t),
                            ...i,
                            ...a && {
                                errorMessage: a
                            }
                        }), this.trackMetric("statsig_client_log_event_error", {
                            event_name: e
                        }), !1
                    }
                }
                getLocalOverride(e) {
                    var t;
                    let i = null == (t = this.getOverrideAdapter()) || null == (t = t.getAllOverrides()) ? void 0 : t.experiment[e];
                    return null == i ? void 0 : i[r]
                }
                getAllLocalOverrides() {
                    var e;
                    return null == (e = this.getOverrideAdapter()) ? void 0 : e.getAllOverrides()
                }
                updateLocalOverrideConfig(e, t) {
                    var i;
                    null == (i = this.getOverrideAdapter()) || i.overrideExperiment(e, {
                        [r]: t
                    })
                }
                updateLocalOverrideGate(e, t) {
                    var i;
                    null == (i = this.getOverrideAdapter()) || i.overrideGate(e, t)
                }
                updateLocalOverrideDynamicConfig(e, t) {
                    var i;
                    null == (i = this.getOverrideAdapter()) || i.overrideDynamicConfig(e, t)
                }
                getIsExperimentActive(e) {
                    var t;
                    let i = this.getStatsigClient();
                    return !!i && null != (t = i.getExperiment(e, {
                        disableExposureLog: !0
                    }).__evaluation) && !!t.is_experiment_active
                }
                removeAllLocalOverrides() {
                    var e;
                    null == (e = this.getOverrideAdapter()) || e.removeAllOverrides()
                }
                removeLocalOverrideGate(e) {
                    var t;
                    null == (t = this.getOverrideAdapter()) || t.removeGateOverride(e)
                }
                removeLocalOverrideExperiment(e) {
                    var t;
                    null == (t = this.getOverrideAdapter()) || t.removeExperimentOverride(e)
                }
                removeLocalOverrideDynamicConfig(e) {
                    var t;
                    null == (t = this.getOverrideAdapter()) || t.removeDynamicConfigOverride(e)
                }
                trackExperimentFlicker(e, t, a) {
                    let o = i(219279).StatsigInitializer.currentUserDoNotUse;
                    try {
                        n.trackExperiment({
                            experimentName: e,
                            paramName: t,
                            value: a,
                            user: o
                        })
                    } catch (i) {
                        this.logError("trackExperimentFlicker", i, {
                            experimentName: e,
                            paramName: t,
                            value: String(a)
                        })
                    }
                }
                trackFeatureGateFlicker(e, t) {
                    let a = i(219279).StatsigInitializer.currentUserDoNotUse;
                    try {
                        n.trackGate({
                            gateName: e,
                            value: t,
                            user: a
                        })
                    } catch (i) {
                        this.logError("trackFeatureGateFlicker", i, {
                            gateName: e,
                            value: String(t)
                        })
                    }
                }
                getOverrideAdapter() {
                    var e;
                    let t = null == (e = this.getStatsigClient()) ? void 0 : e.overrideAdapter;
                    return t && t.setPreSaveFunction(() => {
                        this.emit()
                    }), t
                }
                logUnrecognizedEntity(e, t) {
                    s.has(e) || (s.add(e), this.trackMetric("statsig_client_unrecognized_entity_error", {
                        [({
                            experiment: "experiment_id",
                            gate: "gate_name",
                            config: "config_name",
                            layer: "layer_name"
                        })[t]]: e
                    }))
                }
                logError(e, t, a) {
                    i(773352).log({
                        level: "error",
                        from: "statsig",
                        type: e,
                        error: (0, i(416607).convertErrorToLog)(t),
                        data: {
                            miscDataToConvertToString: { ...a,
                                ...this.state
                            }
                        }
                    })
                }
                trackMetric(e, t) {
                    if (this.getEnvironment() && e.endsWith("_error")) {
                        var a;
                        null == (a = i(219279).StatsigInitializer.track) || a.call(i(219279).StatsigInitializer, e, { ...t,
                            statsig_init_method: "classic"
                        })
                    }
                }
            }
            let l = new _
        },
        693171: (e, t, i) => {
            let a, o, n, r, s;
            i.d(t, {
                C8: () => z,
                yC: () => L,
                nY: () => A,
                kY: () => E,
                Pd: () => D,
                J1: () => T,
                gm: () => I,
                uX: () => P,
                n_: () => k,
                XQ: () => w,
                U5: () => C
            }), i(16280), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(803949), i(908872), i(814603), i(147566), i(198721), i(581454);
            let _ = "eventTrailBufferAvailabilityTest",
                l = "eventTrailBufferByInstanceID:";
            class c {
                storage = Object.create(null);
                pendingUpdates = new Set;
                isUnloaded = !1;
                instanceId = (0, i(4962).Ay)();
                instanceLockAcquired;
                constructor() {
                    let e;
                    const t = globalThis.window;
                    t && t.addEventListener("beforeunload", () => {
                        this.flush(), this.isUnloaded = !0
                    }), this.instanceLockAcquired = new Promise(t => {
                        e = t
                    }), navigator.locks.request(function(e) {
                        return `${l}${e}`
                    }(this.instanceId), {
                        mode: "exclusive"
                    }, async () => {
                        e(), await new Promise(() => {})
                    }).catch(t => {
                        console.error("EventTrailBufferedStorage lock acquisition failed:", t), e()
                    })
                }
                legacyKey(e) {
                    return e
                }
                perInstanceKey(e) {
                    return `${l}[${this.instanceId}]${e}`
                }
                isEnabled() {
                    try {
                        let e = `${Math.random()}`;
                        return localStorage.setItem(_, e), Promise.resolve(localStorage.getItem(_) === e)
                    } catch {
                        return Promise.resolve(!1)
                    } finally {
                        try {
                            localStorage.removeItem(_)
                        } catch {}
                    }
                }
                async get(e) {
                    await this.instanceLockAcquired;
                    let t = this.storage[e];
                    return void 0 === t && await navigator.locks.request(`EventTrailBufferByInstance:get:${e}`, {
                        mode: "exclusive"
                    }, async () => {
                        try {
                            var i;
                            let a = new Set(null == (i = (await navigator.locks.query()).held) ? void 0 : i.map(e => e.name)),
                                o = Object.keys(localStorage).filter(t => t.startsWith(`${l}[`) && t.endsWith(`]${e}`)).map(e => ({
                                    k: e,
                                    kInstanceId: e.split("[", 2)[1].split("]")[0]
                                })).concat([{
                                    k: this.legacyKey(e),
                                    kInstanceId: "legacy"
                                }]),
                                n = null;
                            for (let {
                                    k: e,
                                    kInstanceId: t
                                } of o) try {
                                if (t === this.instanceId || a.has(`${l}${t}`)) continue;
                                let i = localStorage.getItem(e);
                                localStorage.removeItem(e), null !== i && (n = n ? n.concat(JSON.parse(i)) : JSON.parse(i))
                            } catch {
                                try {
                                    localStorage.removeItem(e)
                                } catch {}
                            }
                            n ? (n.length > 100 && (n = n.slice(0, 100)), t = this.storage[e] = n) : t = this.storage[e] = null
                        } catch {}
                    }), Promise.resolve(t ? ? void 0)
                }
                getRaw(e) {
                    try {
                        let t = this.get(e);
                        return Promise.resolve(void 0 === t ? void 0 : JSON.stringify(t))
                    } catch {
                        return Promise.resolve(void 0)
                    }
                }
                set(e, t) {
                    let i = t;
                    return t.length > 100 && (i = t.slice(0, 100)), this.storage[e] = i, this.pendingUpdates.add(e), this.scheduleFlush(), Promise.resolve()
                }
                remove(e) {
                    return delete this.storage[e], this.pendingUpdates.add(e), this.scheduleFlush(), Promise.resolve()
                }
                reset() {
                    for (let e of Object.keys(this.storage)) this.pendingUpdates.add(e);
                    return this.storage = Object.create(null), this.scheduleFlush(), Promise.resolve()
                }
                nextFlush = null;
                scheduleFlush() {
                    this.isUnloaded ? this.flush() : null === this.nextFlush && (this.nextFlush = setTimeout(() => {
                        this.nextFlush = null, this.flush()
                    }, 1e4))
                }
                flush() {
                    let e = new Set;
                    for (let t of this.pendingUpdates) {
                        let i = this.storage[t],
                            a = this.perInstanceKey(t);
                        try {
                            void 0 !== i && (null == i ? void 0 : i.length) !== 0 ? localStorage.setItem(a, JSON.stringify(i)) : localStorage.removeItem(a)
                        } catch {
                            e.add(t)
                        }
                    }
                    this.pendingUpdates = e
                }
            }

            function d(e) {
                return "2023092001"
            }
            async function u() {
                let {
                    Identify: e
                } = await i.e(89920).then(i.bind(i, 995499));
                return e
            }
            var p = () => i(419750);
            let g = [],
                m = [],
                h = 0,
                f = [{
                    threshold: 500,
                    level: "warning",
                    message: "Event trail client volume is high",
                    lastUpdateTimestamp: 0
                }, {
                    threshold: 1e3,
                    level: "error",
                    message: "Event trail is flooded on the client",
                    lastUpdateTimestamp: 0
                }];

            function v(e) {
                let t = Date.now(),
                    i = 10 * Math.floor(t / 1e3 / 10);
                if ((g.length > 0 ? g[g.length - 1] : 0) === i) ++h, ++m[m.length - 1];
                else {
                    g.push(i), m.push(1);
                    let e = i - 60,
                        t = g.findIndex(t => t >= e); - 1 !== t ? (g.splice(0, t), m.splice(0, t)) : g.length > 0 && (g.splice(0, g.length), m.splice(0, m.length)), h = m.reduce((e, t) => e + t, 0)
                }
                for (let i of f) {
                    let {
                        threshold: a,
                        level: o,
                        message: n,
                        lastUpdateTimestamp: r
                    } = i;
                    h >= a && t - r > 3e5 && (p().Fg(Error(n), {
                        level: o,
                        extra: {
                            count: h,
                            windowSeconds: Math.floor(t / 1e3) - g[0],
                            lastEvent: e
                        }
                    }), i.lastUpdateTimestamp = t)
                }
                return h >= 1e3
            }
            let b = new(i(254656)).qK(async e => {
                let {
                    config: t,
                    endpoint: n,
                    deviceId: _
                } = e, l = await i.e(89920).then(i.bind(i, 995499));
                return await new Promise(e => {
                    let u, p = new URL(t.domainBaseUrl),
                        g = `${p.origin}${t.api.http}/${n||i(313432).i4}`;
                    _ && (u = _.startsWith("w_") || _.startsWith("a_") ? _.replaceAll("-", "") : (0, i(4962).S2)(_));
                    let m = u;
                    a = g, o = _, l.init("notion", "", {
                            serverUrl: g,
                            deviceId: m,
                            autocapture: !1,
                            identityStorage: "localStorage",
                            storageProvider: new c,
                            flushQueueSize: 40,
                            flushIntervalMillis: 2e3
                        }), s = d(t.env), e(l),
                        function() {
                            let e = (0, i(758654).bk)(r || "");
                            if (!e) return;
                            let t = {
                                utm_campaign: e.searchParams.get("utm_campaign") || i(156588).HM,
                                utm_content: e.searchParams.get("utm_content") || i(156588).HM,
                                utm_medium: e.searchParams.get("utm_medium") || i(156588).HM,
                                utm_source: e.searchParams.get("utm_source") || i(156588).HM,
                                utm_term: e.searchParams.get("utm_term") || i(156588).HM
                            };
                            T({
                                traits: (0, i(254656).B5)({ ...t
                                })
                            })
                        }()
                })
            });

            function y(e) {
                let {
                    eventName: t,
                    eventProperties: a,
                    groupProperties: o,
                    statusCode: n,
                    message: r
                } = e, s = i(381453).cJ(a, "experiments");
                i(773352).rateLimitedLog({
                    level: "error",
                    from: "eventTrailApiHelpers",
                    type: "trackFailure",
                    error: (0, i(416607).convertErrorToLog)({
                        data: {
                            eventName: t,
                            eventProperties: s,
                            groupProperties: o
                        },
                        statusCode: n,
                        message: r
                    })
                })
            }
            async function k(e) {
                r = window.location.href;
                let {
                    config: t,
                    isEnabled: a,
                    endpoint: o,
                    deviceId: n
                } = e;
                try {
                    await b.load({
                        config: t,
                        isEnabled: a,
                        endpoint: o,
                        deviceId: n
                    })
                } catch (e) {
                    i(773352).log({
                        level: "error",
                        from: "eventTrailApiHelpers",
                        type: "initialize",
                        error: (0, i(416607).convertErrorToLog)(e)
                    })
                }
            }

            function w(e) {
                r = window.location.href;
                let {
                    config: t,
                    deviceId: i,
                    isEnabled: a
                } = e;
                if (!a) return;
                let _ = new URL(t.domainBaseUrl);
                n = `${_.origin}${t.api.http}/etLite`, o = i, s = d(t.env)
            }
            async function S(e) {
                let {
                    traits: t,
                    traitsWithOperations: i
                } = e, a = new(await u());
                if (t)
                    for (let e of Object.keys(t)) {
                        let i = t[e];
                        void 0 !== i && (Array.isArray(i) ? a.append(e, i) : a.set(e, i))
                    }
                if (i)
                    for (let e of i) "set" === e.operation ? a.set(e.name, e.value) : "setOnce" === e.operation && a.setOnce(e.name, e.value);
                return a
            }
            async function x(e, t, i) {
                if (v(e)) return;
                let a = t.getUserProperties(),
                    o = await i.track({
                        event_type: e,
                        event_properties: a,
                        version_name: s
                    }).promise;
                200 !== o.code && y({
                    eventName: e,
                    eventProperties: a,
                    groupProperties: void 0,
                    statusCode: o.code,
                    message: o.message
                })
            }
            async function I(e) {
                let {
                    userId: t,
                    traits: a,
                    spaceIds: o
                } = e, n = await b.getInstance();
                if (!n) return;
                n.setUserId((0, i(4962).S2)(t));
                let r = await S({
                    traits: a
                });
                return o && r.set("workspace", i(381453).sb(o)), x("$identify_user", r, n)
            }
            async function T(e) {
                let {
                    traits: t
                } = e, i = await b.getInstance();
                if (i) return x("$identify_device", await S({
                    traitsWithOperations: t
                }), i)
            }
            async function D() {
                let e = await b.getInstance();
                null == e || e.setUserId(void 0)
            }
            async function P(e) {
                let {
                    analyticsSpaceId: t,
                    spaceAnalyticsData: a
                } = e;
                if (v("$group_identify")) return;
                let o = await b.getInstance();
                if (!o) return;
                let n = i(381453).o8(a),
                    r = Object.entries(n).filter(([e, t]) => Array.isArray(t));
                r.forEach(([e, t]) => delete n[e]);
                let s = await S({
                    traits: n
                });
                r.forEach(([e, t]) => s = s.set(e, t)), o.groupIdentify("workspace", t, s)
            }
            async function C(e) {
                let t = await b.getInstance();
                if (!t) return;
                let a = (0, i(4962).S2)(e);
                t.setDeviceId(a), o = a
            }
            async function A(e) {
                if (v(e.eventName)) return;
                let {
                    eventName: t,
                    eventData: i,
                    spaceId: a
                } = e, o = await b.getInstance();
                if (!o) return;
                let n = a ? {
                        workspace: a
                    } : void 0,
                    r = await o.track({
                        event_type: t,
                        event_properties: i,
                        groups: n,
                        version_name: s
                    }).promise;
                200 !== r.code && y({
                    eventName: t,
                    eventProperties: i,
                    groupProperties: n,
                    statusCode: r.code,
                    message: r.message
                })
            }
            let E = new Set(["initial_database_items_visible", "navigation_page_render", "initial_page_render", "sidebar.initial_render", "inp_data", "typing_lag", "long_animation_frame", "client_load_attempt", "client_load_complete", "collections.navigation_items_visible"]),
                M = 0;
            async function z(e) {
                let {
                    eventName: t,
                    eventData: n,
                    spaceId: r
                } = e;
                try {
                    M += 1;
                    let e = await b.getInstance(),
                        i = {
                            api_key: "notion",
                            client_upload_time: new Date().toISOString(),
                            events: [{
                                event_type: t,
                                event_properties: n,
                                device_id: o,
                                event_id: M,
                                version_name: s,
                                library: "notion-experimental/0.0.1",
                                language: navigator.language,
                                user_agent: navigator.userAgent,
                                session_id: e ? e.getSessionId() : Date.now(),
                                user_id: e ? e.getUserId() : void 0,
                                time: Date.now(),
                                ...r ? {
                                    groups: {
                                        workspace: r
                                    }
                                } : {}
                            }]
                        },
                        _ = await fetch(a, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(i),
                            keepalive: !0
                        });
                    if (!_.ok) throw Error(`HTTP ${_.status}: ${_.statusText}`)
                } catch (a) {
                    i(773352).log({
                        level: "error",
                        from: "sendEventDirectly",
                        type: "fetchError",
                        error: (0, i(416607).convertErrorToLog)(a),
                        data: {
                            miscDataToConvertToString: {
                                args: e,
                                eventName: t
                            }
                        }
                    })
                }
            }
            async function L(e) {
                if (!n) return;
                let {
                    eventName: t,
                    eventData: a,
                    spaceId: r
                } = e;
                try {
                    M += 1;
                    let e = {
                            api_key: "notion",
                            client_upload_time: new Date().toISOString(),
                            events: [{
                                event_type: t,
                                event_properties: a,
                                device_id: o,
                                event_id: M,
                                version_name: s,
                                library: "notion-experimental/0.0.1",
                                language: navigator.language,
                                user_agent: navigator.userAgent,
                                session_id: Date.now(),
                                time: Date.now(),
                                ...r ? {
                                    groups: {
                                        workspace: r
                                    }
                                } : {}
                            }]
                        },
                        i = await fetch(n, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e),
                            keepalive: !0
                        });
                    if (!i.ok) throw Error(`HTTP ${i.status}: ${i.statusText}`)
                } catch (a) {
                    i(773352).log({
                        level: "error",
                        from: "sendPerfEventsDirectly",
                        type: "fetchError",
                        error: (0, i(416607).convertErrorToLog)(a),
                        data: {
                            miscDataToConvertToString: {
                                args: e,
                                eventName: t
                            }
                        }
                    })
                }
            }
        },
        700511: (e, t, i) => {
            i.d(t, {
                h: () => a
            });
            let a = new class {
                _fetchAnalyticsSettings = () => Promise.resolve(void 0);
                _fetchDefaultEventProperties = () => Promise.resolve(this.getInitialDefaultEventProperties());
                _analyticsDebugLog;
                setAnalyticsSettingsFetcher(e) {
                    this._fetchAnalyticsSettings = e
                }
                async fetchAnalyticsSettings(e, t) {
                    return this._fetchAnalyticsSettings(e, t)
                }
                getInitialDefaultEventProperties() {
                    return {
                        data: {
                            client_initialization_id: i(810452).d,
                            appSource: "client",
                            query: "",
                            is_user_consent_to_track: !1,
                            experimentStoreLoaded: !1,
                            default_event_properties_initialized: !1
                        },
                        spaceId: void 0
                    }
                }
                setDefaultEventPropertiesFetcher(e) {
                    this._fetchDefaultEventProperties = e
                }
                async fetchDefaultEventProperties(e, t) {
                    let {
                        data: i,
                        spaceId: a
                    } = await this._fetchDefaultEventProperties(e, t);
                    return {
                        data: i,
                        spaceId: a
                    }
                }
                setAnalyticsDebugLog(e) {
                    this._analyticsDebugLog = e
                }
                callDebugLog(e, t) {
                    var i;
                    null == (i = this._analyticsDebugLog) || i.call(this, e, t)
                }
            }
        },
        737124: (e, t, i) => {
            i.r(t), i.d(t, {
                appStartTimeKey: () => a,
                getAppStartTime: () => o,
                getPageOriginTime: () => n
            }), i(16280), i(898992), i(672577);
            let a = "__webStartTime";

            function o() {
                let e = window[a];
                if ("number" != typeof e) {
                    let e = Error("App Start Time not found. It should be in index.html.");
                    return void i(419750).Fg(e)
                }
                return e
            }

            function n() {
                let e = performance.getEntriesByType("navigation"),
                    t = e.find(e => e instanceof PerformanceNavigationTiming),
                    a = (null == t ? void 0 : t.redirectStart) || (null == t ? void 0 : t.fetchStart);
                if ("number" != typeof a) {
                    let {
                        redirectStart: e,
                        fetchStart: t,
                        navigationStart: i
                    } = performance.timing;
                    e ? a = e - i : t && (a = t - i)
                }
                if ("number" != typeof a) {
                    let a = Error("Page Origin Time not found");
                    return void i(419750).Fg(a, {
                        extra: {
                            hasNavigationEntries: e.length > 0,
                            hasNavigationTimingEntry: !!t,
                            hasPerformanceTiming: !!performance.timing
                        }
                    })
                }
                return a
            }
        },
        810016: (e, t, i) => {
            i.d(t, {
                S: () => a
            });
            let a = "NoExperimentActor"
        },
        810452: (e, t, i) => {
            i.d(t, {
                d: () => a,
                o: () => o
            });
            let a = (0, i(4962).Ay)(),
                o = 18e5
        },
        917302: (e, t, i) => {
            i.d(t, {
                J: () => a
            });
            let a = ["anthropic-sonnet-4", "openai-gpt-4.1"]
        },
        969628: (e, t, i) => {
            i.d(t, {
                h: () => o,
                i: () => n
            }), i(944114), i(898992), i(823215);
            var a = () => i(69741);
            let o = {
                "openai-gpt-4o-mini": ["vertex-gemini-2.5-flash", "vertex-gemini-2.0-flash", "openai-gpt-4.1-mini", "openai-gpt-4o"],
                "openai-gpt-4o": ["anthropic-sonnet-alt"],
                "openai-gpt-4.1": ["anthropic-sonnet-alt", "openai-gpt-4o"],
                "openai-gpt-4.1-mini": ["openai-gpt-4o-mini", "vertex-gemini-2.5-flash", "vertex-gemini-2.0-flash", "openai-gpt-4o"],
                "openai-gpt-5-mini": ["openai-gpt-4.1-mini", "vertex-gemini-2.5-flash", "vertex-gemini-2.0-flash"],
                "openai-gpt-5-nano": ["openai-gpt-5-mini", "openai-gpt-4.1-mini", "vertex-gemini-2.5-flash"],
                "custom-openai-slot-1": [],
                "custom-openai-slot-2": [],
                "custom-openai-slot-3": [],
                "custom-openai-slot-4": [],
                "custom-openai-slot-5": [],
                "openai-turbo": ["orange-tart", "anthropic-sonnet-4", "gateau-roule"],
                "orange-tart": ["openai-turbo", "anthropic-sonnet-4", "gateau-roule"],
                "orange-tart-minimal-thinking": ["openai-turbo", "anthropic-sonnet-4", "gateau-roule"],
                "oatmeal-cookie": ["orange-tart", "openai-turbo", "anthropic-sonnet-4", "gateau-roule"],
                "oatmeal-cookie-medium-thinking": ["orange-tart", "anthropic-sonnet-4", "gateau-roule"],
                "oatmeal-cookie-high-thinking": ["orange-tart", "anthropic-sonnet-4", "gateau-roule"],
                "oatmeal-cake": ["orange-tart", "openai-turbo", "anthropic-sonnet-4", "gateau-roule"],
                "gpt-5.3-codex": ["gpt-5.2-codex", "gpt-5.1-codex-max", "gpt-5.1-codex", "oatmeal-cookie", "orange-tart", "openai-turbo"],
                "gpt-5.2-codex": ["gpt-5.3-codex", "gpt-5.1-codex-max", "gpt-5.1-codex", "oatmeal-cookie", "orange-tart", "openai-turbo"],
                "gpt-5.1-codex-max": ["gpt-5.3-codex", "gpt-5.2-codex", "gpt-5.1-codex", "orange-tart", "openai-turbo", "oatmeal-cookie"],
                "gpt-5.1-codex": ["gpt-5.3-codex", "gpt-5.2-codex", "gpt-5.1-codex-max", "orange-tart", "openai-turbo", "oatmeal-cookie"],
                "openai-o4-mini": [],
                "openai-o3": [],
                "anthropic-sonnet-4": ["anthropic-sonnet-alt", "oatmeal-cookie"],
                "anthropic-opus-4": ["anthropic-sonnet-alt", "oval-kumquat-medium"],
                "anthropic-opus-4.1": ["anthropic-opus-4", "anthropic-sonnet-alt", "oval-kumquat-medium"],
                "anthropic-sonnet-3.7": ["oatmeal-cookie", "bedrock-anthropic-sonnet-3.7"],
                "custom-anthropic-slot-1": [],
                "custom-anthropic-slot-2": [],
                "custom-anthropic-slot-3": [],
                "custom-anthropic-slot-4": [],
                "custom-anthropic-slot-5": [],
                "vertex-gemini-2.5-pro": [],
                "vertex-gemini-2.5-flash": [],
                "gateau-roule": ["openai-turbo", "anthropic-sonnet-4"],
                "gateau-roule-low-thinking": ["openai-turbo", "anthropic-sonnet-4"],
                "cinder-kite": ["openai-turbo", "anthropic-sonnet-4"],
                gingerbread: ["openai-turbo", "anthropic-sonnet-4"],
                galette: ["openai-turbo", "anthropic-sonnet-4"],
                "galette-low-thinking": ["openai-turbo", "anthropic-sonnet-4"],
                "almond-croissant-max": ["apple-danish", "anthropic-sonnet-alt", "oatmeal-cookie"],
                "almond-croissant-high": ["apple-danish", "anthropic-sonnet-alt", "oatmeal-cookie"],
                "almond-croissant-medium": ["apple-danish", "anthropic-sonnet-alt", "oatmeal-cookie"],
                "almond-croissant-low": ["apple-danish", "anthropic-sonnet-alt", "oatmeal-cookie"],
                "galette-medium-thinking": ["openai-turbo", "anthropic-sonnet-4"],
                "avocado-froyo-max": ["apple-danish", "anthropic-sonnet-alt", "oval-kumquat-medium"],
                "avocado-froyo-high": ["apple-danish", "anthropic-sonnet-alt", "oval-kumquat-medium"],
                "avocado-froyo-medium": ["apple-danish", "anthropic-sonnet-alt", "oval-kumquat-medium"],
                "avocado-froyo-low": ["apple-danish", "anthropic-sonnet-alt", "oval-kumquat-medium"],
                "cerebras-llama3.3-70b": ["fireworks-llama3.3-70b-dedicated", "fireworks-llama3.3-70b", "openai-gpt-4o-mini"],
                "fireworks-llama3.3-70b-dedicated": ["fireworks-llama3.3-70b", "openai-gpt-4o-mini"],
                "fireworks-kimi-k2.5": ["openai-turbo", "anthropic-sonnet-4", "gateau-roule"],
                "fireworks-minimax-m2.5": ["openai-turbo", "anthropic-sonnet-4", "gateau-roule"],
                "fireworks-glm-5": ["openai-turbo", "anthropic-sonnet-4", "gateau-roule"],
                "fireworks-ft-router-102": ["fireworks-llama3.3-70b-dedicated", "fireworks-llama3.3-70b", "openai-gpt-4o-mini"],
                "fireworks-llama3.3-70b": ["fireworks-llama3.3-70b-dedicated", "openai-gpt-4o-mini"],
                "anthropic-haiku-4.5": ["anthropic-sonnet-4", "anthropic-sonnet-alt", "oregon-grape-medium"],
                "apple-danish": ["anthropic-sonnet-alt", "anthropic-sonnet-4", "oval-kumquat-medium"],
                "anthropic-sonnet-alt": ["anthropic-sonnet-4", "oatmeal-cookie"],
                "anthropic-sonnet-alt-thinking": ["anthropic-sonnet-4", "oatmeal-cookie"],
                "anthropic-sonnet-alt-no-thinking": ["anthropic-sonnet-4", "oatmeal-cookie"],
                "oval-kumquat": ["oatmeal-cookie", "orange-tart", "openai-turbo"],
                "oval-kumquat-medium": ["oatmeal-cookie", "orange-tart", "openai-turbo"],
                "oval-kumquat-high": ["oatmeal-cookie", "orange-tart", "openai-turbo"],
                "oregon-grape-low": ["oval-kumquat"],
                "otaheite-apple-low": ["oregon-grape-low", "oval-kumquat"],
                "baseten-kimi-k2.5": []
            };
            class n {
                getEligibleGroup;
                checkGate;
                isInitialized;
                getConfig;
                constructor(e) {
                    this.getEligibleGroup = e.getEligibleGroup, this.checkGate = e.checkGate, this.isInitialized = e.isInitialized, this.getConfig = e.getConfigFn
                }
                getIsInitialized() {
                    return this.isInitialized
                }
                isSearchCurrentlyDown() {
                    return !!(this.checkGate("ai_disaster_recovery_disable_vector_search") || this.checkGate("ai_disaster_recovery_disable_cohere_rerank"))
                }
                isConnectorWideSearchDown() {
                    return !!this.checkGate("ai_disaster_recovery_disable_vector_search")
                }
                isWebSearchDown() {
                    return this.checkGate("ai_disaster_recovery_disable_web_search")
                }
                isSqliteConnectionsApiDown() {
                    return this.checkGate("ai_disaster_recovery_disable_database_querying")
                }
                isOpenAiModelPickerDown(e) {
                    let {
                        actor: t,
                        spaceId: i
                    } = e;
                    return this.getBlockListModels({
                        actor: t,
                        spaceId: i
                    }).includes("openai-gpt-4.1")
                }
                isAnthropicModelPickerDown(e) {
                    let {
                        actor: t,
                        spaceId: i
                    } = e, a = this.getBlockListModels({
                        actor: t,
                        spaceId: i
                    });
                    return a.includes("anthropic-sonnet-4") || a.includes("anthropic-opus-4")
                }
                isModelDown(e) {
                    let {
                        actor: t,
                        spaceId: i
                    } = e;
                    return this.getBlockListModels({
                        actor: t,
                        spaceId: i
                    }).includes(e.model)
                }
                isResearchModeDown() {
                    return this.isEverythingDown() || this.isSearchCurrentlyDown()
                }
                isUnifiedFindDown() {
                    return this.isEverythingDown() || this.isSearchCurrentlyDown()
                }
                isQnaDown() {
                    return this.isEverythingDown() || this.isSearchCurrentlyDown()
                }
                isAgentDown() {
                    return this.isEverythingDown()
                }
                isSetupGeneratorDown({
                    spaceId: e,
                    actor: t
                }) {
                    if (this.checkGate("ai_disaster_recovery_disable_vector_search")) return !0;
                    let a = this.getBlockListModels({
                        actor: t,
                        spaceId: e
                    });
                    return !!this.isEverythingDown() || i(917302).J.every(e => a.includes(e))
                }
                getBlockListModels(e) {
                    let {
                        actor: t,
                        spaceId: i
                    } = e, o = this.getConfig({
                        configName: "ai_disaster_recovery_model_blocklist",
                        actor: t,
                        customIDs: {
                            spaceId: i
                        }
                    });
                    if (!o) return [];
                    let n = [];
                    for (let [e, t] of Object.entries(o))(0, a().Yo)(i, t) && n.push(e);
                    return n
                }
                isOpenAi4oMiniDown(e) {
                    let {
                        actor: t,
                        spaceId: i
                    } = e;
                    return this.getBlockListModels({
                        actor: t,
                        spaceId: i
                    }).includes("openai-gpt-4o-mini")
                }
                isAutofillDown(e) {
                    return this.isEverythingDown() || this.isOpenAi4oMiniDown(e)
                }
                isAiBlockDown() {
                    return this.isEverythingDown()
                }
                isInferenceTranscriptConfigTypeDown({
                    configType: e,
                    spaceId: t,
                    actor: a
                }) {
                    switch (e) {
                        case "researcher":
                            return this.isResearchModeDown();
                        case "search":
                            return this.isUnifiedFindDown();
                        case "setup-generator":
                            return this.isSetupGeneratorDown({
                                spaceId: t,
                                actor: a
                            });
                        case "aiBlock":
                            return this.isAiBlockDown();
                        case "workflow":
                            return this.isAgentDown();
                        case "debug-inference":
                        case "fast-researcher":
                        case "route-inference-transcript":
                        case "markdown-chat":
                        case "memory-agent":
                        case "summarize-transcript":
                        case "formulas":
                        case "council-chat":
                            return !1;
                        default:
                            (0, i(722371).HB)(e)
                    }
                }
                getResearchModeDegradedServices(e) {
                    let t = [];
                    return this.isWebSearchDown() && t.push({
                        type: "web_search"
                    }), this.isSqliteConnectionsApiDown() && t.push({
                        type: "sqlite_connections_api"
                    }), this.isConnectorWideSearchDown() && t.push({
                        type: "connector_wide_search"
                    }), t.push(...this.getConnectorIncidents(e)), t
                }
                getSearchDegradedServices(e) {
                    let t = [];
                    return this.isWebSearchDegraded() && t.push({
                        type: "web_search"
                    }), t.push(...this.getConnectorIncidents(e)), t
                }
                isWebSearchDegraded() {
                    return this.isWebSearchDown()
                }
                getAgentDegradedServices(e) {
                    let t = [];
                    return this.isWebSearchDown() && t.push({
                        type: "web_search"
                    }), t.push(...this.getConnectorIncidents(e)), t
                }
                getConnectorIncidents(e) {
                    let {
                        actor: t,
                        spaceId: i,
                        connectedConnectors: a
                    } = e, o = this.getConfig({
                        configName: "ai_connector_incident",
                        actor: t,
                        customIDs: {
                            spaceId: i
                        }
                    }), n = [];
                    for (let e of o.recall_kill_switch ? ? []) a.includes(e.connector) && n.push({
                        type: "ai_connector",
                        connector: e.connector,
                        dismissalKey: e.unique_incident_key,
                        incidentType: "unavailable"
                    });
                    for (let e of o.degraded_connectors ? ? []) a.includes(e.connector) && n.push({
                        type: "ai_connector",
                        connector: e.connector,
                        dismissalKey: e.unique_incident_key,
                        customMessage: e.custom_message,
                        incidentType: "degraded"
                    });
                    return n
                }
                getDegradedServicesForInferenceTranscriptConfigType(e) {
                    let {
                        configType: t,
                        actor: a,
                        spaceId: o,
                        connectedConnectors: n
                    } = e;
                    switch (t) {
                        case "researcher":
                            return this.getResearchModeDegradedServices({
                                actor: a,
                                spaceId: o,
                                connectedConnectors: n
                            });
                        case "search":
                            return this.getSearchDegradedServices({
                                actor: a,
                                spaceId: o,
                                connectedConnectors: n
                            });
                        case "workflow":
                            return this.getAgentDegradedServices({
                                actor: a,
                                spaceId: o,
                                connectedConnectors: n
                            });
                        case "debug-inference":
                        case "fast-researcher":
                        case "route-inference-transcript":
                        case "markdown-chat":
                        case "memory-agent":
                        case "setup-generator":
                        case "summarize-transcript":
                        case "aiBlock":
                        case "formulas":
                        case "council-chat":
                            return [];
                        default:
                            (0, i(722371).HB)(t)
                    }
                }
                isEverythingDown() {
                    return this.checkGate("ai_unstable_message") || this.checkGate("disable_ai_big_red_button")
                }
            }
        }
    }
]);