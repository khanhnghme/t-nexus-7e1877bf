"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [66444], {
        888: (e, t, i) => {
            i.d(t, {
                $: () => n
            });

            function n(e) {
                return null == e ? void 0 : e.spaceStore
            }
        },
        23803: (e, t, i) => {
            let n;
            i.d(t, {
                O1: () => f,
                eg: () => c,
                RL: () => T,
                pu: () => _,
                Pf: () => w,
                Be: () => k,
                ay: () => P,
                _M: () => h,
                nh: () => u,
                X7: () => s,
                Zf: () => l,
                ru: () => m,
                vL: () => a,
                qU: () => v,
                UJ: () => y,
                Sd: () => p,
                CS: () => g,
                JD: () => b,
                sc: () => C,
                MP: () => I,
                yX: () => d,
                n_: () => S
            });
            let r = [i(167346).yx.Assign, i(167346).yx.Status, i(167346).yx.DueDate, i(167346).yx.Priority, i(167346).yx.Tags, i(167346).yx.ParentTaskRelation, i(167346).yx.SubTaskRelation, i(167346).yx.TaskToProjectRelation, i(167346).yx.JiraSyncTaskToConnectedIssueRelation, i(167346).yx.BlockedRelation, i(167346).yx.BlockingRelation, i(167346).yx.JiraSyncIssueToTaskRelation],
                o = [i(111104).K4.Status, i(111104).K4.People, i(111104).K4.Priority, i(111104).K4.ProjectToTaskRelation, i(111104).K4.JiraSyncBoardToProjectRelation, i(111104).K4.JiraSyncProjectToConnectedBoardRelation];

            function a() {
                return void 0 === n && (n = new(i(345426)).ComputedStore(() => !0, {
                    debugName: "isJiraImportAndSyncEnabledCached"
                })), n.state
            }

            function s() {
                return "on" === i(218744).default.getEligibleGroup({
                    experimentId: "jira_sync_data_center_integration",
                    defaultGroup: "control"
                })
            }

            function l() {
                return i(218744).default.checkGate({
                    gateName: "jira_dc_members_flow_enabled"
                })
            }

            function u() {
                return i(218744).default.checkGate({
                    gateName: "jira_dc_basic_auth_enabled"
                })
            }

            function d() {
                return i(218744).default.checkGate({
                    gateName: "disable_jira_sync_source_for_members"
                })
            }
            let c = ["60%", "45%", "70%", "55%"];

            function p() {
                return i(218744).default.checkGate({
                    gateName: "jira_onboarding_tour"
                })
            }

            function m() {
                return i(218744).default.checkGate({
                    gateName: "jira_dc_streaming_projects"
                }) && s()
            }
            let f = 8;

            function _() {
                return ["28%", "24%", "32%", "36%", "20%", "25%", "34%", "15%"]
            }

            function g() {
                return i(218744).default.checkGate({
                    gateName: "jira_2_way_sync"
                })
            }

            function v() {
                return i(218744).default.checkGate({
                    gateName: "jira_notion_only_properties"
                })
            }

            function h() {
                return i(218744).default.checkGate({
                    gateName: "use_dynamic_options_for_jira_sync_status_field"
                })
            }

            function y(e) {
                return e === i(11448).Tw
            }

            function b(e) {
                return !!g() && (!e || "DataCenter" !== e.getFormat().synced_collection_instance_type && !i(986939).A.isMobile)
            }

            function S(e) {
                let {
                    collectionStore: t,
                    property: n,
                    propertySchema: r
                } = e, o = (0, i(83208).X)("jira_2_way_sync"), {
                    isJiraSyncedCollection: a,
                    isTwoWayToggleEnabled: s,
                    isExternallyImportedAndSyncedCollection: l,
                    externalCollectionType: u,
                    collectionId: d
                } = (0, i(682985).K8)(() => {
                    var e;
                    let n = null == t ? void 0 : t.getFormat();
                    return {
                        isJiraSyncedCollection: (null == n ? void 0 : n.external_collection_type) === i(565546).uO.Jira,
                        isTwoWayToggleEnabled: (null == n || null == (e = n.sync_state) ? void 0 : e.enable_two_way_sync) === !0,
                        isExternallyImportedAndSyncedCollection: (null == t ? void 0 : t.isExternallyImportedAndSyncedCollection()) ? ? !1,
                        externalCollectionType: null == n ? void 0 : n.external_collection_type,
                        collectionId: null == t ? void 0 : t.id
                    }
                }, [t], {
                    equalityFn: i(381453).n4
                }), c = (0, i(682985).K8)(() => {
                    if (t) return i(333042).u9.derivePropertyUri(n, t.getPropertyMapping())
                }, [t, n]);
                return (0, i(682985).K8)(() => !!s && function(e) {
                    let {
                        isJiraTwoWaySyncGateEnabled: t,
                        isJiraSyncedCollection: n,
                        propertySchema: r,
                        propertyUri: o,
                        propertyId: a,
                        collectionStore: s,
                        isExternallyImportedAndSyncedCollection: l,
                        collectionId: u,
                        externalCollectionType: d,
                        isTwoWayToggleEnabled: c
                    } = e;
                    return !(!t || !n || !c || a && C({
                        propertyId: a,
                        collectionStore: s,
                        propertySchema: r,
                        isExternallyImportedAndSyncedCollection: l,
                        collectionId: u,
                        externalCollectionType: d
                    })) && ((null == r ? void 0 : r.synced_permissions) ? ? "read_only") !== "read_write" && (!o || !i(159065).En.includes(o))
                }({
                    isJiraTwoWaySyncGateEnabled: o,
                    isJiraSyncedCollection: a,
                    propertySchema: r,
                    propertyUri: c,
                    propertyId: n,
                    collectionStore: t,
                    isExternallyImportedAndSyncedCollection: l,
                    collectionId: d,
                    externalCollectionType: u,
                    isTwoWayToggleEnabled: s
                }), [d, t, c, u, l, a, o, s, n, r])
            }

            function k(e) {
                let t = null,
                    n = null;
                if (!e) return {
                    projectCollectionPointer: t,
                    taskCollectionPointer: n
                };
                let r = e.getFormat();
                if (y(r.app_config_uri)) {
                    t = e.pointer;
                    let r = e.getSchema()[i(11448).K4.ProjectToTaskRelation];
                    r && (0, i(795e3).n)(r) && (n = (0, i(390768).N)(r) || null)
                } else if (r.app_config_uri === i(11448).dC) {
                    n = e.pointer;
                    let r = e.getSchema()[i(11448).yx.TaskToProjectRelation];
                    r && (0, i(795e3).n)(r) && (t = (0, i(390768).N)(r) || null)
                }
                return {
                    projectCollectionPointer: t,
                    taskCollectionPointer: n
                }
            }
            let x = (0, i(109939).YK)({
                issueKeyNotFound: {
                    id: "jiraSyncedCollectionUpdateError.issueKeyNotFound",
                    defaultMessage: "Could not find jira issue key from Notion task"
                },
                collectionPageNotFound: {
                    id: "jiraSyncedCollectionUpdateError.collectionPageNotFound",
                    defaultMessage: "Failed to update, collection page is either deleted or corrupted"
                },
                collectionNotFound: {
                    id: "jiraSyncedCollectionUpdateError.collectionNotFound",
                    defaultMessage: "Failed to update, collection is either deleted or corrupted"
                },
                invalidPropertyId: {
                    id: "jiraSyncedCollectionUpdateError.invalidPropertyId",
                    defaultMessage: "Failed to update, property is either deleted or not found in the collection"
                },
                unsupportedPropertyForTwoWaySync: {
                    id: "jiraSyncedCollectionUpdateError.unsupportedPropertyForTwoWaySync",
                    defaultMessage: "This property is not supported to edit for two way sync"
                },
                invalidPropertyValue: {
                    id: "jiraSyncedCollectionUpdateError.invalidPropertyValue",
                    defaultMessage: "Invalid value provided for the property"
                },
                updateFailed: {
                    id: "jiraSyncedCollectionUpdateError.updateFailed",
                    defaultMessage: "Failed to update Jira issue, please try again in some time"
                },
                permissionDeniedOrResourceNotFound: {
                    id: "jiraSyncedCollectionUpdateError.permissionDeniedOrResourceNotFound",
                    defaultMessage: "Permission denied or resource not found in Jira"
                },
                unknownError: {
                    id: "jiraSyncedCollectionUpdateError.unknownError",
                    defaultMessage: "Failed to update jira, please try again in some time"
                },
                transitionNotFound: {
                    id: "jiraSyncedCollectionUpdateError.transitionNotFound",
                    defaultMessage: "Status not found in the Jira issue workflow"
                },
                jiraUserNotFound: {
                    id: "jiraSyncedCollectionUpdateError.jiraUserNotFound",
                    defaultMessage: "User with the email address is not found in Jira"
                },
                notionUserNotFound: {
                    id: "jiraSyncedCollectionUpdateError.notionUserNotFound",
                    defaultMessage: "Notion user not found"
                },
                convertNotionCommentToJiraCommentBodyFailed: {
                    id: "jiraSyncedCollectionUpdateError.convertNotionCommentToJiraCommentBodyFailed",
                    defaultMessage: "Failed to convert notion comment to jira comment body"
                },
                propertyDoesNotExistOnProject: {
                    id: "jiraSyncedCollectionUpdateError.propertyDoesNotExistOnProject",
                    defaultMessage: "Property does not exist on this project or issue type in your jira site"
                },
                commentFormatNotSupported: {
                    id: "jiraSyncedCollectionUpdateError.commentFormatNotSupported",
                    defaultMessage: "Comment format not supported in Jira"
                },
                jiraAuthTokenFailed: {
                    id: "jiraSyncedCollectionUpdateError.jiraAuthTokenFailed",
                    defaultMessage: "Auth token not found for the user, please re-authenticate to edit"
                },
                attachmentSizeExceedsLimit: {
                    id: "jiraSyncedCollectionUpdateError.attachmentSizeExceedsLimit",
                    defaultMessage: "Attachment up to 1MB can be added from Notion, please try with smaller size"
                },
                numberOfAttachmentsLimitExceeded: {
                    id: "jiraSyncedCollectionUpdateError.numberOfAttachmentsLimitExceeded",
                    defaultMessage: "You can only add up to 5 attachments to a Jira issue, please try to add from jira"
                }
            });

            function w(e) {
                let {
                    errorCode: t
                } = e, n = i(962299).A.getIntl();
                switch (t) {
                    case "issue_key_not_found":
                        return n.formatMessage(x.issueKeyNotFound);
                    case "collection_page_not_found":
                        return n.formatMessage(x.collectionPageNotFound);
                    case "collection_not_found":
                        return n.formatMessage(x.collectionNotFound);
                    case "invalid_property_id":
                        return n.formatMessage(x.invalidPropertyId);
                    case "unsupported_property_for_two_way_sync":
                        return n.formatMessage(x.unsupportedPropertyForTwoWaySync);
                    case "invalid_property_value":
                        return n.formatMessage(x.invalidPropertyValue);
                    case "update_failed":
                        return n.formatMessage(x.updateFailed);
                    case "permission_denied_or_resource_not_found":
                        return n.formatMessage(x.permissionDeniedOrResourceNotFound);
                    case "transition_not_found":
                        return n.formatMessage(x.transitionNotFound);
                    case "jira_user_not_found":
                        return n.formatMessage(x.jiraUserNotFound);
                    case "notion_user_not_found":
                        return n.formatMessage(x.notionUserNotFound);
                    case "convert_notion_comment_to_jira_comment_body_failed":
                        return n.formatMessage(x.convertNotionCommentToJiraCommentBodyFailed);
                    case "property_does_not_exist_on_project":
                        return n.formatMessage(x.propertyDoesNotExistOnProject);
                    case "comment_format_not_supported":
                        return n.formatMessage(x.commentFormatNotSupported);
                    case "jira_auth_token_not_found":
                        return n.formatMessage(x.jiraAuthTokenFailed);
                    case "attachment_size_exceeds_limit":
                        return n.formatMessage(x.attachmentSizeExceedsLimit);
                    case "number_of_attachments_limit_exceeded":
                        return n.formatMessage(x.numberOfAttachmentsLimitExceeded);
                    default:
                        return n.formatMessage(x.unknownError)
                }
            }

            function P(e) {
                var t;
                return null == (t = (0, i(159065).nH)(e)) ? void 0 : t.split(".")[0]
            }

            function I(e) {
                return e === i(11448).d0 || e === i(11448).bq
            }

            function C(e) {
                var t;
                let {
                    propertyId: n,
                    collectionStore: a,
                    propertySchema: s,
                    isExternallyImportedAndSyncedCollection: l,
                    collectionId: u,
                    externalCollectionType: d
                } = e;
                if (!l || !s || (d ? ? (null == a || null == (t = a.getFormat()) ? void 0 : t.external_collection_type)) === i(565546).uO.Salesforce) return !1;
                let c = u ? ? (null == a ? void 0 : a.id);
                return !(!c || n.startsWith("notion://tasks") && r.includes(n) || n.startsWith("notion://projects") && o.includes(n) || (null == s ? void 0 : s.derived_property_record_metadata) || [(0, i(92513).gB)(`${c}:issuelinks`), (0, i(92513).gB)(`${c}:jira_browse_url`), (0, i(92513).gB)(`${c}:key`), (0, i(92513).gB)(`${c}:attachment`)].includes(n) || n.startsWith("sfdc://report"))
            }

            function T(e) {
                let {
                    isExternallyImportedAndSyncedCollection: t,
                    propertyId: i,
                    collectionStore: n,
                    propertySchema: r
                } = e;
                return !t || C({
                    propertyId: i,
                    collectionStore: n,
                    propertySchema: r,
                    isExternallyImportedAndSyncedCollection: t
                })
            }
        },
        36481: (e, t, i) => {
            i.d(t, {
                p: () => y
            });
            var n = i(296540),
                r = i(474848);
            let o = {
                    kzqmXN: "xh8yej3",
                    $$css: !0
                },
                a = n.forwardRef(function(e, t) {
                    let {
                        autosize: a,
                        autosizeMaxHeight: s,
                        autosizeMinHeight: l,
                        style: u,
                        textareaElementAttributes: d,
                        value: c,
                        className: p,
                        ...m
                    } = e, f = (0, n.useRef)(null), [_, g] = (0, n.useState)(void 0), v = (0, n.useCallback)(e => {
                        g(e.width)
                    }, []);
                    (0, i(729787).tK)(f, v);
                    let h = (0, n.useMemo)(() => {
                            if (a && void 0 !== _) return {
                                type: "fixed",
                                length: _
                            }
                        }, [a, _]),
                        y = (0, n.useMemo)(() => {
                            if (a && void 0 !== _)
                                if (void 0 !== l && void 0 !== s) return {
                                    type: "range",
                                    min: l,
                                    max: s
                                };
                                else if (void 0 !== l) return {
                                type: "min",
                                length: l
                            };
                            else if (void 0 !== s) return {
                                type: "max",
                                length: s
                            };
                            else return
                        }, [a, l, s, _]),
                        b = (0, n.useMemo)(() => (0, i(770808).Ve)({
                            width: h,
                            height: y
                        }), [y, h]),
                        {
                            preferredSize: S,
                            ref: k
                        } = (0, i(218381).e)(b);
                    return (0, r.jsxs)("div", { ...{
                            className: "x1lliihq x1n2onr6 xh8yej3"
                        },
                        children: [(0, r.jsx)("div", {
                            "aria-hidden": !0,
                            ref: f,
                            ...{
                                className: "x10l6tqk xbfkjp0 xdopbac x1e826z5 x1u0r3am xh8yej3 x1dquyif x7600vw x1mzt3pk x126k92a"
                            },
                            children: (0, r.jsxs)("div", { ...i(952687).A.props(u),
                                ref: k,
                                children: [(null == c ? void 0 : c.trim()) || (0, r.jsx)(r.Fragment, {
                                    children: " "
                                }), null != c && c.endsWith("\n") ? (0, r.jsx)("br", {}) : null]
                            })
                        }), (0, r.jsx)("textarea", {
                            ref: t,
                            ...m,
                            ...d,
                            rows: a ? void 0 : (null == d ? void 0 : d.rows) ? ? 3,
                            ...i(952687).A.props(u, a && void 0 !== S && {
                                height: S.height
                            }, o, void 0 !== p && {
                                $$css: !0,
                                className: p
                            })
                        })]
                    })
                }),
                s = n.forwardRef(function(e, t) {
                    let {
                        autosize: o,
                        value: a,
                        style: s,
                        inputElementAttributes: l,
                        customElementAttributes: u,
                        className: d,
                        ...c
                    } = e, p = (0, n.useRef)(null), [m, f] = (0, n.useState)("auto");
                    return (0, n.useEffect)(() => {
                        var e;
                        if (!o) return;
                        let t = null == (e = p.current) ? void 0 : e.offsetWidth;
                        "number" == typeof t && f(Math.max(t + 1, 20))
                    }, [o, a]), (0, r.jsxs)(r.Fragment, {
                        children: [o ? (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            ...{
                                className: "x10l6tqk x1dquyif x7600vw"
                            },
                            children: (0, r.jsx)("span", { ...i(952687).A.props(s),
                                ref: p,
                                children: a
                            })
                        }) : void 0, (0, r.jsx)("input", {
                            ref: t,
                            ...c,
                            ...l,
                            ...u,
                            ...i(952687).A.props(s, o && {
                                width: m
                            }, void 0 !== d && {
                                $$css: !0,
                                className: d
                            }, (null == l ? void 0 : l.className) !== void 0 && {
                                $$css: !0,
                                className: l.className
                            })
                        })]
                    })
                }),
                l = (0, i(109939).YK)({
                    clearInputLabel: {
                        id: "input.clearInputLabel",
                        defaultMessage: "Clear Input"
                    }
                }),
                u = {
                    k1xSpc: "x78zum5",
                    kGNEyG: "x6s0dn4",
                    kX8ASl: "x76ihet",
                    kwv6qe: "xtmcdsl",
                    k4EQJz: "x112ta8",
                    kO87eX: "x4gj9lk",
                    kLKAdn: "xexx8yu",
                    kwRFfy: "xyri2b",
                    kGO01o: "x18d9i69",
                    kZCmMZ: "x1c1uobl",
                    kzqmXN: "xh8yej3",
                    kC7eKd: "x1md70p1",
                    kGuDYH: "x1qlqyl8",
                    kLWn49: "x15bjb6t",
                    $$css: !0
                },
                d = {
                    k1xSpc: "x78zum5",
                    kGNEyG: "x6s0dn4",
                    kzqmXN: "xh8yej3",
                    kVAEAm: "x1n2onr6",
                    krdFHd: "x1i5p2am",
                    kfmiAY: "x1whfx0g",
                    kT0f0o: "xr2y4jy",
                    kVL7Gh: "x1ihp6rs",
                    kkrTdU: "x1ed109x",
                    $$css: !0
                },
                c = {
                    kLKAdn: "x1iorvi4",
                    kGO01o: "xjkvuk6",
                    kZCmMZ: "xe2zdcy",
                    kwRFfy: "x2vl965",
                    $$css: !0
                },
                p = {
                    kGuDYH: "xif65rj",
                    kLWn49: "x1fc57z9",
                    $$css: !0
                },
                m = {
                    kGuDYH: "xfifm61",
                    kLWn49: "x1d3mw78",
                    $$css: !0
                },
                f = {
                    kGuDYH: "x1jvydc1",
                    kLWn49: "xeqr9p9",
                    $$css: !0
                },
                _ = {
                    kGuDYH: "x19d36u7",
                    kLWn49: "xcgk4ki",
                    $$css: !0
                },
                g = {
                    keTefX: "xdwrcjd",
                    $$css: !0
                },
                v = {
                    baseStyle: {
                        boxShadow: `${i(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                        background: i(632079).Tj.background.secondaryTranslucent,
                        outline: "1px solid transparent"
                    },
                    focusRing: {
                        boxShadow: i(632079).Tj.inputBlueFocusRing,
                        outline: "2px solid transparent"
                    },
                    errorOutline: {
                        boxShadow: i(632079).Tj.inputRedFocusRing,
                        outline: "2px solid transparent"
                    },
                    iconButton: {
                        flexShrink: 0,
                        flexGrow: 0,
                        borderRadius: i(986939).A.isMobile ? 24 : 20
                    },
                    tooltipIconButtonIcon: {
                        height: i(104509).Ev.default,
                        width: i(104509).Ev.default
                    },
                    tooltipIconButton1: {
                        flexShrink: 0,
                        flexGrow: 0,
                        borderRadius: i(986939).A.isMobile ? 24 : 20,
                        marginInlineEnd: -4
                    },
                    tooltipIconButton2: {
                        alignSelf: "baseline",
                        marginTop: 4
                    }
                },
                h = n.forwardRef(function(e, t) {
                    let o, {
                            value: a,
                            forceShowClearButton: s,
                            showClearButton: h,
                            icon: y,
                            onIconClick: k,
                            onClearButtonClick: x,
                            onChange: w,
                            format: P,
                            style: I,
                            left: T,
                            maxlength: M,
                            isRightLastElementOfInput: A,
                            right: E,
                            rightStyle: D,
                            clearButtonStyle: B,
                            textarea: O,
                            autosize: U,
                            focusAfterAnimation: R,
                            focusInitial: N,
                            focus: L,
                            selectAll: j,
                            preventScrollOnFocus: F,
                            errorOutline: $,
                            suppressFocusRing: q = !1,
                            ...z
                        } = e,
                        V = (0, i(109939).tz)(),
                        G = (0, i(533992).v3)(),
                        W = s || h && a && a.length > 0,
                        K = (0, n.useRef)(!0),
                        H = (0, n.useRef)(null),
                        [X, Y] = (0, i(768397).s)(),
                        J = (0, i(421573).A)(t, H, X);
                    (0, n.useLayoutEffect)(() => {
                        let e = H.current,
                            t = a ? ? "";
                        e && t !== e.value && (e.value = t)
                    }, [a]), (0, n.useEffect)(() => {
                        K.current && (K.current = !1, N && S({
                            environment: G,
                            textInput: H.current,
                            focusAfterAnimation: R,
                            selectAll: j,
                            preventScrollOnFocus: F
                        }))
                    });
                    let Q = (o = (0, i(571354).n)(), (0, n.useCallback)(e => {
                        let {
                            el: t,
                            windowHeight: n,
                            minEdgeDist: r = 8
                        } = e, a = (0, i(54503).NM)(t);
                        if (!a || !a.getBoundingClientRect) return;
                        let s = t.getBoundingClientRect(),
                            l = a.getBoundingClientRect(),
                            u = n - o,
                            d = Math.min(l.bottom, u);
                        s.top < l.top ? a.scrollTop = a.scrollTop - (l.top - s.top) - r : s.bottom > d && (a.scrollTop = a.scrollTop + (s.bottom - d) + r)
                    }, [o]));
                    (0, n.useEffect)(() => {
                        function e() {
                            var e;
                            let {
                                device: t
                            } = G;
                            if (!t.isMobileNative) return;
                            let i = H.current;
                            if (!i || !(null != (e = window) && e.document.hasFocus())) return;
                            let n = window.document.activeElement;
                            n && n === i && Q({
                                environment: G,
                                el: i,
                                windowHeight: G.WindowSizeStore.state.height,
                                minEdgeDist: 64
                            })
                        }
                        return e(), i(707785).A.addListener(e), () => {
                            i(707785).A.removeListener(e)
                        }
                    }, [G, Q, H]), (0, n.useEffect)(() => {
                        let e = H.current;
                        if (void 0 !== L)
                            if (L) S({
                                environment: G,
                                textInput: e,
                                focusAfterAnimation: R,
                                selectAll: j,
                                preventScrollOnFocus: F
                            });
                            else {
                                var t;
                                (null == (t = window) ? void 0 : t.document.activeElement) === e && (null == e || e.blur())
                            }
                    }, [U, L, R, j, G, F]);
                    let Z = (0, n.useCallback)(e => {
                            if (x) x();
                            else {
                                let t = H.current;
                                t && (t.value = ""), w && (e.target.value = "", w(e)), null == t || t.focus()
                            }
                        }, [H, x, w]),
                        ee = (0, i(682985).K8)(() => b(), []);
                    return (0, r.jsxs)("div", { ...i(952687).A.props("transparent" !== P && [d, v.baseStyle, !ee && c], ("default" === P || !P) && p, "small" === P && m, "large" === P && f, "extra-large" === P && _, "transparent" === P && u, I, Y && "transparent" !== P && "extra-large" !== P && !q && v.focusRing, Y && $ && v.errorOutline),
                        children: [T ? (0, r.jsx)("div", {
                            className: "xbelrpt",
                            children: T
                        }) : void 0, (0, r.jsx)(C, {
                            ref: J,
                            ...z,
                            autosize: U,
                            textarea: O,
                            value: a,
                            onChange: w,
                            maxLength: M
                        }), !A && E ? (0, r.jsx)("div", { ...i(952687).A.props(g, D),
                            children: E
                        }) : void 0, y ? (0, r.jsx)(i(64960).Ay, {
                            onClick: k,
                            style: v.iconButton,
                            children: y
                        }, "icon") : void 0, W ? (0, r.jsx)(i(51831).m, {
                            content: () => (0, r.jsx)(i(109939).sA, { ...l.clearInputLabel
                            }),
                            placement: "bottom",
                            alignment: "start",
                            disableTooltip: i(986939).A.isMobile,
                            delayThreshold: 400,
                            children: e => (0, r.jsx)(i(374533).A, { ...e,
                                ariaLabel: V.formatMessage(l.clearInputLabel),
                                icon: i(367198).xMarkCircleFillIcon,
                                onClick: Z,
                                colorVariant: "tertiary",
                                iconStyle: v.tooltipIconButtonIcon,
                                style: { ...v.tooltipIconButton1,
                                    ...B,
                                    ...O && v.tooltipIconButton2
                                }
                            })
                        }) : void 0, A && E ? (0, r.jsx)("div", { ...i(952687).A.props(g, D),
                            children: E
                        }) : void 0]
                    })
                }),
                y = n.memo(h, () => !1);

            function b() {
                return !!i(218744).default.checkGate({
                    gateName: "input_padding"
                })
            }

            function S(e) {
                var t;
                let {
                    environment: n,
                    textInput: r,
                    focusAfterAnimation: o,
                    selectAll: a,
                    preventScrollOnFocus: s
                } = e, {
                    device: l
                } = n;
                if ((null == (t = window) ? void 0 : t.document.activeElement) === r) return;
                let u = async () => {
                    l.isMobileNative && await i(149476).K.waitUntil(() => !i(149476).K.state), a && r ? (l.isAndroid && r.focus(), r.select()) : null == r || r.focus({
                        preventScroll: s
                    })
                };
                i(986939).A.isMobile && o ? setTimeout(() => void i(374176).default.afterNextFlush(async () => await u()), 10) : window.requestAnimationFrame(async () => await u())
            }
            let k = {
                    kVAEAm: "x10l6tqk",
                    k87sOh: "x13vifvy",
                    kfzvcC: "x47corl",
                    kzqmXN: "xh8yej3",
                    khDVqt: "xuxw1ft",
                    kXHlph: "x6ikm8r",
                    kORKVm: "x10wlt62",
                    kg5iWk: "xlyipyv",
                    $$css: !0
                },
                x = {
                    kGuDYH: "x1qlqyl8",
                    kLWn49: "x15bjb6t",
                    kX8ASl: "x76ihet",
                    kwv6qe: "xtmcdsl",
                    k4EQJz: "x112ta8",
                    kO87eX: "x4gj9lk",
                    kC7eKd: "x11g6tue",
                    k1xSpc: "x1lliihq",
                    kHenm0: "xtt52l0",
                    kLKAdn: "xexx8yu",
                    kwRFfy: "xyri2b",
                    kGO01o: "x18d9i69",
                    kZCmMZ: "x1c1uobl",
                    kQ0QjF: "xa7awgv",
                    $$css: !0
                },
                w = {
                    kzqmXN: "xh8yej3",
                    $$css: !0
                },
                P = {
                    kSiTet: "xbyyjgo",
                    $$css: !0
                },
                I = {
                    kLKAdn: "x1iorvi4",
                    kwRFfy: "x2vl965",
                    kGO01o: "xjkvuk6",
                    kZCmMZ: "xe2zdcy",
                    $$css: !0
                },
                C = n.forwardRef(function(e, t) {
                    let {
                        onKeyDown: o,
                        textarea: l,
                        textareaSubmitOnEnter: u,
                        onSubmit: d,
                        onCancel: c,
                        ignoreKeyboardMode: p,
                        inputStyle: m,
                        readOnly: f,
                        overrideDefaultWidth: _,
                        type: g,
                        inputClassName: v,
                        name: h,
                        preventSafariAutofill: y,
                        value: S,
                        autosize: C,
                        autosizeMinHeight: T,
                        autosizeMaxHeight: M,
                        textareaElementAttributes: A,
                        suggestedText: E,
                        inputElementAttributes: D,
                        customElementAttributes: B,
                        suggestedTextStyle: O,
                        ...U
                    } = e, R = (0, i(533992).v3)(), N = (0, i(682985).K8)(() => b(), []), L = (0, n.useCallback)(e => {
                        p || i(200083).A.setKeyboardMode(!0), null == o || o(e), (0, i(745308).A)(R, e, "esc") && c && c(e), l && u && (0, i(745308).A)(R, e, "enter") && e.preventDefault(), (l && !u ? (0, i(745308).A)(R, e, ["command+enter", "ctrl+enter"]) : (0, i(745308).A)(R, e, "enter")) && d && d(e)
                    }, [R, o, l, u, d, c, p]), j = [x, !_ && w, f && P, N && I, m], F = { ...U,
                        readOnly: f,
                        onKeyDown: L,
                        type: g || "text",
                        className: v,
                        name: h || (y ? "search" : void 0)
                    };
                    return l ? (0, r.jsx)(a, {
                        ref: t,
                        value: S,
                        autosize: C,
                        autosizeMinHeight: T,
                        autosizeMaxHeight: M,
                        textareaElementAttributes: A,
                        style: j,
                        ...F
                    }, "textarea") : void 0 !== E ? (0, r.jsxs)("div", { ...{
                            className: "x1n2onr6 xh8yej3"
                        },
                        children: [(0, r.jsx)("input", {
                            ref: t,
                            ...F,
                            ...D,
                            ...B,
                            ...i(952687).A.props(j, void 0 !== F.className && {
                                $$css: !0,
                                className: F.className
                            })
                        }), (0, r.jsx)("div", { ...i(952687).A.props(k, O),
                            children: E
                        })]
                    }) : (0, r.jsx)(s, {
                        ref: t,
                        value: S,
                        autosize: C,
                        inputElementAttributes: D,
                        customElementAttributes: B,
                        style: j,
                        ...F
                    })
                })
        },
        41664: (e, t, i) => {
            i.d(t, {
                GL: () => r,
                Ji: () => n
            });
            let n = 5,
                r = 10
        },
        45262: (e, t, i) => {
            i.d(t, {
                Q: () => n
            });

            function n(e) {
                return !!e && e.hasPublicPermission && "edit" !== e.permission
            }
        },
        48023: (e, t, i) => {
            i.d(t, {
                _: () => s,
                p: () => o
            });
            var n, r = () => i(546605);
            let o = ((n = {})[n.General = 0] = "General", n[n.Members = 1] = "Members", n[n.Security = 2] = "Security", n);
            class a extends r().Store {
                getInitialState() {
                    return {
                        open: !1,
                        limitMembers: !0,
                        memberFilterQuery: "",
                        tab: void 0
                    }
                }
                getTeamStore() {
                    return this.state.open ? this.state.viewingUnjoinedPrivateTeamAsEnterpriseAdmin ? this.state.unjoinedPrivateTeamStore : this.state.teamStore : void 0
                }
            }
            let s = new a
        },
        51831: (e, t, i) => {
            i.d(t, {
                m: () => f,
                n: () => o
            });
            var n = i(296540),
                r = i(474848);

            function o(e) {
                return {
                    background: e ? i(632079).Tj.background.primary : i(632079).Tj.background.accentPrimary,
                    color: e ? i(632079).Tj.text.primary : i(632079).Tj.text.inversePrimary,
                    borderRadius: 6,
                    ...i(69916).Kf,
                    padding: "5px 8px",
                    boxShadow: "0px 4px 12px -2px rgba(0, 0, 0, 0.08), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.05)",
                    fontSize: 12,
                    lineHeight: 1.4
                }
            }
            let a = {
                    krdFHd: "x1i5p2am",
                    kfmiAY: "x1whfx0g",
                    kT0f0o: "xr2y4jy",
                    kVL7Gh: "x1ihp6rs",
                    kI3sdo: "xe0qb83",
                    kLKAdn: "x123j3cw",
                    kwRFfy: "xf159sx",
                    kGO01o: "xs9asl8",
                    kZCmMZ: "xmzvs34",
                    kGVxlE: "xzl2ilk",
                    kGuDYH: "xfifm61",
                    kLWn49: "x37zpob",
                    $$css: !0
                },
                s = {
                    kC7eKd: "xcxejci",
                    kMwMTN: "xb5q0e3",
                    $$css: !0
                },
                l = {
                    kC7eKd: "xd54fh8",
                    kMwMTN: "x39shxw",
                    $$css: !0
                },
                u = {
                    khDVqt: "xuxw1ft",
                    $$css: !0
                },
                d = {
                    duration: 50,
                    timingFunction: "ease-out"
                };

            function c({
                allowHover: e,
                alignment: t,
                children: o,
                closeDelay: p,
                delayThreshold: m,
                disableTooltip: f,
                forceVisibleState: b,
                isLightBackground: S,
                noStyle: k,
                originRect: x,
                originGap: w,
                originRectTransform: P,
                overlayContainerZIndex: I,
                placement: C,
                content: T,
                store: M,
                style: A,
                textWrap: E,
                tooltipClassName: D,
                preventScaleTransition: B,
                preventOpacityTransition: O
            }) {
                let U = (0, i(682985).uB)(M, i(235146).A),
                    R = (0, n.useRef)(),
                    N = (0, n.useRef)();
                (0, n.useEffect)(() => {
                    f && (U.state.hovered || U.state.focused) && h(R, N, U)
                }, [f, U]);
                let L = (0, n.useRef)(m);
                (0, n.useEffect)(() => {
                    R.current && (L.current ? ? 150) > 0 && 0 === m && y({
                        mouseEnterTimeoutRef: R,
                        mouseLeaveTimeoutRef: N,
                        store: U,
                        delayThreshold: m
                    }), L.current = m
                }, [m, U]), (0, n.useEffect)(() => () => {
                    h(R, N, U)
                }, [U]);
                let j = (0, n.useMemo)(() => ({
                        onMouseEnter: () => {
                            var e, t, i;
                            return e = R, t = N, i = U, void(v(e, t), g(i))
                        },
                        onMouseLeave: () => (function(e) {
                            let {
                                mouseEnterTimeoutRef: t,
                                mouseLeaveTimeoutRef: i,
                                store: n,
                                closeDelay: r
                            } = e;
                            v(t, i), i.current = window.setTimeout(() => {
                                h(t, i, n)
                            }, _(r))
                        })({
                            mouseEnterTimeoutRef: R,
                            mouseLeaveTimeoutRef: N,
                            store: U,
                            closeDelay: p
                        }),
                        onMouseOver: () => {
                            var e, t, i;
                            e = R, t = N, i = U, v(e, t), g(i)
                        }
                    }), [p, U]),
                    {
                        isOpen: F,
                        focused: $
                    } = (0, i(682985).K8)(() => {
                        var e, t;
                        return {
                            isOpen: (e = U, t = b, (0, i(627179).pN)(t) ? e.state.hovered || e.state.focused : t),
                            focused: U.state.focused
                        }
                    }, [b, U]),
                    q = (0, n.useCallback)(() => {
                        v(R, N), U.setState({ ...U.state,
                            hovered: !1,
                            focused: !1
                        })
                    }, [U]),
                    z = o((0, n.useMemo)(() => ({
                        onFocus: e => {
                            var t, n;
                            return t = e, n = U, void((0, i(768397).p)(t.target) && n.setState({ ...n.state,
                                focused: !0
                            }))
                        },
                        onBlur: () => {
                            var e;
                            (e = U).setState({ ...e.state,
                                focused: !1
                            })
                        },
                        onMouseEnter: () => y({
                            mouseEnterTimeoutRef: R,
                            mouseLeaveTimeoutRef: N,
                            store: U,
                            delayThreshold: m
                        }),
                        onMouseLeave: () => (function(e) {
                            let {
                                mouseEnterTimeoutRef: t,
                                mouseLeaveTimeoutRef: i,
                                store: n,
                                allowHover: r,
                                closeDelay: o
                            } = e;
                            r ? (v(t, i), i.current = window.setTimeout(() => {
                                h(t, i, n)
                            }, _(o))) : h(t, i, n)
                        })({
                            mouseEnterTimeoutRef: R,
                            mouseLeaveTimeoutRef: N,
                            store: U,
                            allowHover: e,
                            closeDelay: p
                        }),
                        onMouseDown: () => {
                            h(R, N, U)
                        }
                    }), [e, p, m, U]), F);
                return (0, r.jsx)(i(182718).zD, {
                    popupType: i(423291).n.Popup,
                    open: F,
                    popupClassName: D,
                    originRect: x,
                    originGap: w || 6,
                    originRectTransform: P,
                    placementToOrigin: C ? ? "top",
                    alignmentToOrigin: t ? ? "center",
                    preventScaleTransition: B ? ? !0,
                    preventOpacityTransition: O ? ? !1,
                    animationConfig: d,
                    style: [!k && [a, S ? l : s], !E && u, A],
                    viewportPadding: 4,
                    preventCaptureEsc: !$,
                    onDismiss: q,
                    preventPointerEvents: !e,
                    disableMouseCapture: !0,
                    content: () => T(j),
                    trapFocus: !1,
                    overlayContainerZIndex: I,
                    suppressOriginContext: !0,
                    children: z
                })
            }
            let p = {};

            function m({
                children: e
            }) {
                let t = e(p, !1);
                return (0, r.jsx)(r.Fragment, {
                    children: t
                })
            }

            function f(e) {
                return (0, i(533992).WS)() || e.disableTooltip && !e.forceRenderTooltipPopupComponent ? (0, r.jsx)(m, { ...e
                }) : (0, r.jsx)(c, { ...e
                })
            }

            function _(e) {
                return void 0 === e ? 500 : e
            }

            function g(e) {
                e.setState({ ...e.state,
                    hovered: !0
                })
            }

            function v(e, t) {
                e.current && (window.clearTimeout(e.current), e.current = void 0), t.current && (window.clearTimeout(t.current), t.current = void 0)
            }

            function h(e, t, i) {
                v(e, t), i.setState({ ...i.state,
                    hovered: !1
                })
            }

            function y(e) {
                let {
                    mouseEnterTimeoutRef: t,
                    mouseLeaveTimeoutRef: n,
                    store: r,
                    delayThreshold: o
                } = e;
                i(200083).A.state.isKeyboardMode || (v(t, n), t.current = window.setTimeout(() => {
                    g(r)
                }, void 0 === o ? 150 : o))
            }
        },
        54068: (e, t, i) => {
            i.d(t, {
                T: () => r
            }), i(16280);
            let n = new(i(88794)).y,
                r = new(i(227586)).n((e, {
                    spaceId: t
                }) => `${e.currentUser.id}:${t}`, async (e, {
                    spaceId: t
                }, {
                    forceRefetch: r
                }) => {
                    if (!e.currentUser.isLoggedIn()) return;
                    let o = await (0, i(273917).y)({
                        environment: e,
                        namespace: "BillingDataStore3",
                        key: t,
                        forceRefetch: r,
                        getValue: async () => {
                            if (t.includes("|")) throw Error("Invalid spaceId, you're likely passing a spaceUserId instead");
                            let o = `${e.currentUser.id}:${t}`;
                            if (!r && n.shouldSuppress(o)) return;
                            let a = await e.api.callCellCompatibleApi({
                                eventName: "getBillingData",
                                environment: e,
                                data: {
                                    spaceId: t
                                },
                                cellNavigation: {
                                    cellId: void 0,
                                    spaceId: t
                                }
                            });
                            if ("success" !== a.type) {
                                var s;
                                (0, i(614128).W)({
                                    environment: e,
                                    key: "billing_data_fetch_failed",
                                    eventName: "billing_data_fetch_failed",
                                    eventProperties: {
                                        space_id: t,
                                        http_status: a.status,
                                        is_offline: a.offline,
                                        is_force_refetch: r,
                                        error_type: a.offline || null == (s = a.body) || null == (s = s.clientData) ? void 0 : s.type
                                    },
                                    throttleSeconds: 60
                                }), n.recordFailure(o, a);
                                return
                            }
                            if (n.clearCooldown(o), !a.data.billingData) return;
                            let l = [{
                                key: (0, i(568479).Fi)({
                                    spaceId: t
                                }),
                                version: -1
                            }];
                            return {
                                value: a.data.billingData,
                                dependencies: a.data.dependencies ? ? l
                            }
                        }
                    });
                    if (o) return {
                        value: (0, i(337174).J1)(o.value),
                        dependencies: o.dependencies
                    }
                }, {
                    dontCacheUndefined: !0
                });
            i(202146).exposeDebugValue("BillingDataStore", r)
        },
        54503: (e, t, i) => {
            i.d(t, {
                NM: () => a,
                T8: () => s,
                bG: () => r,
                gi: () => o
            });
            var n = () => i(314543);
            let r = {
                auto: !0,
                scroll: !0
            };

            function o(e) {
                return e && e instanceof HTMLElement ? e : e && e.parentElement ? e.parentElement : void 0
            }

            function a(e) {
                let t = o(e);
                if (t) return l(t, n().RY)
            }

            function s(e) {
                let t = o(e);
                if (t) return l(t, n().Dk)
            }

            function l(e, t) {
                if (!e) return;
                let i = e;
                if (i)
                    do {
                        var o, a;
                        let e = window.getComputedStyle(i),
                            s = t === n().Dk ? !!((o = e) && o.overflowX && r[o.overflowX]) : !!((a = e) && a.overflowY && r[a.overflowY]);
                        if ((i.classList && i.classList.contains(n().Cn) && i.classList.contains(t) || s) && !(i.classList && i.classList.contains(n().V))) return i;
                        i = i.parentElement || void 0
                    } while (i) return document.body
            }
        },
        56788: (e, t, i) => {
            i.d(t, {
                $: () => n
            });

            function n(e) {
                var t, n;
                let r, o = i(218744).default.checkGate({
                        gateName: "custom_agents_server"
                    }),
                    a = i(218744).default.checkGate({
                        gateName: "custom_agent_upsell"
                    }),
                    s = (0, i(328765).S)(),
                    l = !!(null == s ? void 0 : s.getZeroRetentionEnabled()),
                    u = i(218744).default.checkGate({
                        gateName: "custom_agents_allow_hipaa"
                    }),
                    d = !!(null == s ? void 0 : s.isAiEnabledOnSpace());
                if (!o || !d || l && !u) return !1;
                if (null != e && e.skipPremiumFeatureCheck && a) return !0;
                let c = null == s ? void 0 : s.environment,
                    p = !!c && !!s && (t = {
                        name: "custom_agents",
                        spaceId: s.id,
                        userId: c.currentUser.id
                    }, !!(r = null == (n = (0, i(544978).g)()) ? void 0 : n.featureDataLoaders) && (0, i(893004).z)(c, r, t));
                return !s || p
            }
        },
        68809: (e, t, i) => {
            i.d(t, {
                f: () => o
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {}
                }
                getSpacePermissionGroupIds({
                    spaceId: e
                }) {
                    var t, n;
                    let r = null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id;
                    return r && e ? (null == (n = this.state[r]) || null == (n = n[e]) ? void 0 : n.spacePermissionGroupIds) ? ? new Set : new Set
                }
            }
            let o = new r
        },
        69916: (e, t, i) => {
            i.d(t, {
                Kf: () => o,
                Qg: () => n,
                bQ: () => r
            });
            let n = {
                    position: "absolute",
                    overflow: "hidden",
                    clip: "rect(1px, 1px, 1px, 1px)",
                    whiteSpace: "nowrap",
                    height: 1,
                    width: 1
                },
                r = {
                    outline: "2px solid transparent"
                },
                o = {
                    outline: "1px solid transparent"
                }
        },
        83208: (e, t, i) => {
            i.d(t, {
                X: () => r
            }), i(16280);
            var n = i(296540);

            function r(e, t) {
                let {
                    disableExposureLogging: r = !1,
                    enableEventTrailLogging: o = !1
                } = t ? ? {}, a = (0, n.useContext)(i(694220).p);
                if (!a) throw Error("useFeatureGate must be used within a FeatureGateContextProvider");
                return r ? a.withoutExposureLogging(e, o) : a.withExposureLogging(e, o)
            }
        },
        88794: (e, t, i) => {
            i.d(t, {
                y: () => n
            });
            class n {
                entries = new Map;
                shouldSuppress(e) {
                    let t = this.entries.get(e);
                    return void 0 !== t && Date.now() - t.timestamp < t.cooldownMs
                }
                recordFailure(e, t) {
                    let i = t.offline || 401 !== t.status ? 3e4 : 3e5;
                    this.entries.set(e, {
                        timestamp: Date.now(),
                        cooldownMs: i
                    })
                }
                clearCooldown(e) {
                    this.entries.delete(e)
                }
                TEST_ONLY__clear() {
                    this.entries.clear()
                }
            }
        },
        94418: (e, t, i) => {
            i.d(t, {
                rE: () => a,
                R0: () => o,
                vQ: () => g,
                jx: () => d,
                Dc: () => c,
                Xq: () => v,
                _d: () => u,
                e2: () => n().e2,
                Pd: () => n().Pd,
                N9: () => n().N9
            }), i(898992), i(354520), i(908872);
            var n = () => i(811656);
            let r = {
                    samsung_tablet_preload_2025: 1,
                    samsung_tablet_preload_2025_business: 1
                },
                o = {
                    guests: {
                        type: "cumulative",
                        data: (0, n().RN)({
                            current: n().t.number()
                        })
                    },
                    internal_guests: {
                        type: "cumulative",
                        data: (0, n().RN)({
                            current: n().t.number()
                        })
                    },
                    members: {
                        type: "cumulative",
                        data: (0, n().RN)({
                            current: n().t.number(),
                            currentOfferCampaign: n().t.undefinable(n().t.string())
                        })
                    },
                    non_admin_members: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    membership_admins: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    restricted_members: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    group_management: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    view_chart: {
                        type: "per_use",
                        data: n().t.isUndefined()
                    },
                    form_filesize: {
                        type: "per_use",
                        data: n().t.isUndefined()
                    },
                    form_customization: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    unbranded_forms: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    forms_conditional_logic: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    custom_agents: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    premium_automations: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    move_to: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    claimable_spaces: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    domain_settings: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    managed_users: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    saml: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    scim: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    legal_holds: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    export_members: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    hipaa_compliance: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    sites_multiple_public_domains: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    custom_image_upload_favicon: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    custom_public_sites_layout: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    seo_title_and_description: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    admin_transfer_private_content: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    configurable_mention_invites: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    configurable_retention: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    team_self_promotion: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    watermarkless_chart_export: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    configurable_deletion_and_retention_settings: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    sudo_mode: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    contacts_imports_invite: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    content_reprovisioning: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    ai_connectors: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    collection_property_autofill: {
                        type: "per_use",
                        data: n().t.object({
                            required: {
                                spaceUsage: n().t.number(),
                                userUsage: n().t.number(),
                                memberCount: n().t.number(),
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c)),
                                aiPromotionConfig: i(774123).Pv
                            },
                            optional: {}
                        })
                    },
                    ai_usage: {
                        type: "cumulative",
                        data: n().t.object({
                            required: {
                                current: n().t.number(),
                                userUsage: n().t.number(),
                                userPromotionalUsage: n().t.number(),
                                memberCount: n().t.number(),
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c)),
                                aiPromotionConfig: i(774123).Pv,
                                lastSpaceUsageAtMs: n().t.undefinable(n().t.number()),
                                lastSpaceUserUsageAtMs: n().t.undefinable(n().t.number())
                            },
                            optional: {}
                        })
                    },
                    custom_agents_credit_usage: {
                        type: "cumulative",
                        data: n().t.object({
                            required: {
                                current: n().t.number(),
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c)),
                                limits: n().t.object({
                                    required: {
                                        currentServicePeriodLimit: n().t.number(),
                                        overageLimit: n().t.union([n().t.number(), n().t.literal("unlimited")])
                                    },
                                    optional: {}
                                }),
                                usage: n().t.object({
                                    required: {
                                        totalCreditBalance: n().t.number(),
                                        creditsInOverage: n().t.number()
                                    },
                                    optional: {}
                                })
                            },
                            optional: {}
                        })
                    },
                    ai_research_mode: {
                        type: "cumulative",
                        data: n().t.object({
                            required: {
                                generalAiCurrent: n().t.number(),
                                generalAiUserUsage: n().t.number(),
                                generalAiUserPromotionalUsage: n().t.number(),
                                memberCount: n().t.number(),
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c)),
                                current: n().t.number(),
                                aiPromotionConfig: i(774123).Pv
                            },
                            optional: {}
                        })
                    },
                    ai_formulas: {
                        type: "cumulative",
                        data: n().t.object({
                            required: {
                                memberCount: n().t.number(),
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c)),
                                current: n().t.number(),
                                currentUserUsage: n().t.number(),
                                userPromotionalUsage: n().t.number(),
                                aiPromotionConfig: i(774123).Pv
                            },
                            optional: {}
                        })
                    },
                    ai_database_agents: {
                        type: "cumulative",
                        data: n().t.object({
                            required: {
                                memberCount: n().t.number(),
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c)),
                                current: n().t.number(),
                                currentUserUsage: n().t.number(),
                                userPromotionalUsage: n().t.number(),
                                aiPromotionConfig: i(774123).Pv
                            },
                            optional: {}
                        })
                    },
                    ai_voice_dictation: {
                        type: "cumulative",
                        data: n().t.object({
                            required: {
                                memberCount: n().t.number(),
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c)),
                                current: n().t.number(),
                                aiPromotionConfig: i(774123).Pv
                            },
                            optional: {}
                        })
                    },
                    ai_meeting_notes: {
                        type: "cumulative",
                        data: n().t.object({
                            required: {
                                current: n().t.number()
                            },
                            optional: {}
                        })
                    },
                    ai_meeting_notes_custom_transcript_retention: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    ai_app_builder: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    block_read_and_write_role: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    invite_user_to_workspace_mentions: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    assistant_image_filesize_bytes: {
                        type: "per_use",
                        data: n().t.isUndefined()
                    },
                    assistant_json_filesize_bytes: {
                        type: "per_use",
                        data: n().t.isUndefined()
                    },
                    assistant_pdf_filesize_bytes: {
                        type: "per_use",
                        data: n().t.isUndefined()
                    },
                    assistant_csv_filesize_bytes: {
                        type: "per_use",
                        data: n().t.isUndefined()
                    },
                    assistant_text_filesize_bytes: {
                        type: "per_use",
                        data: n().t.isUndefined()
                    },
                    filesystem_sandbox_filesize_bytes: {
                        type: "per_use",
                        data: n().t.isUndefined()
                    },
                    file_upload_size: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    custom_teamspace_permissions: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    collection_connected_property_google_drive: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    collection_connected_property_figma: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    collection_connected_property_zendesk: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    collection_connected_property_github: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    collection_synced_database_github: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    collection_synced_database_asana: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    collection_synced_database_gitlab: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    collection_synced_database_jira: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    collection_synced_database_jira_workspace: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    collection_synced_database_jira_datacenter: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    collection_synced_database_salesforce_workspace: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    offline_manual_sync: {
                        type: "cumulative",
                        data: n().t.object({
                            required: {
                                current: n().t.number(),
                                dynamicLimits: n().t.object({
                                    required: {},
                                    optional: {
                                        free: n().t.union([n().t.number(), n().t.literal("unlimited")]),
                                        personal: n().t.union([n().t.number(), n().t.literal("unlimited")]),
                                        student: n().t.union([n().t.number(), n().t.literal("unlimited")]),
                                        plus: n().t.union([n().t.number(), n().t.literal("unlimited")]),
                                        business: n().t.union([n().t.number(), n().t.literal("unlimited")]),
                                        enterprise: n().t.union([n().t.number(), n().t.literal("unlimited")])
                                    }
                                })
                            },
                            optional: {}
                        })
                    },
                    offline_auto_sync: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    collection_property_permissions: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    manage_integration_permissions: {
                        type: "check",
                        data: n().t.object({
                            required: {
                                space: n().t.undefinable(n().t.instanceOf(i(18354).c))
                            },
                            optional: {}
                        })
                    },
                    advanced_notion_mcp_tools: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    mcp_ai_access: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    disable_member_upgrade_requests: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    verified_pages: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    team_security_settings: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    disable_public_access_requests: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    private_teamspaces: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    dashboard_view: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    link_expiration: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    workers: {
                        type: "check",
                        data: n().t.isUndefined()
                    },
                    archive_content: {
                        type: "check",
                        data: n().t.isUndefined()
                    }
                },
                a = (0, i(722371).objectKeys)(o),
                s = i(906745).DateTime.fromISO("2025-08-13"),
                l = {
                    guests: ({
                        amount: e,
                        billingData: t,
                        data: {
                            current: i
                        }
                    }) => p({
                        billingData: t,
                        amount: e,
                        current: i,
                        limits: {
                            free: 10,
                            personal: "unlimited",
                            student: "unlimited",
                            plus: "unlimited",
                            business: "unlimited",
                            enterprise: "unlimited"
                        },
                        upsellMap: {
                            free: "personal"
                        }
                    }),
                    internal_guests: ({
                        amount: e,
                        billingData: t,
                        data: {
                            current: n
                        }
                    }) => p({
                        billingData: t,
                        amount: e,
                        current: n,
                        limits: (0, i(262166).m9)(),
                        upsellMap: {
                            free: "personal",
                            student: "business",
                            personal: "business",
                            plus: "business"
                        }
                    }),
                    members: ({
                        amount: e,
                        data: {
                            current: t,
                            currentOfferCampaign: n
                        },
                        billingData: o
                    }) => {
                        let a = i(192159).YF(o) ? 1 : "unlimited";
                        return p({
                            billingData: o,
                            amount: e,
                            current: t,
                            limits: {
                                free: a,
                                personal: 1,
                                student: 1,
                                plus: "unlimited",
                                business: "unlimited",
                                enterprise: "unlimited",
                                ... function(e) {
                                    if (!e) return {};
                                    let t = r[e];
                                    return void 0 === t ? {} : "samsung_tablet_preload_2025" === e ? {
                                        plus: t
                                    } : "samsung_tablet_preload_2025_business" === e ? {
                                        business: t
                                    } : {}
                                }(n && (0, i(165664).ZE)(n) ? n : void 0)
                            },
                            upsellMap: {
                                student: "plus",
                                personal: "plus"
                            }
                        })
                    },
                    non_admin_members: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "plus"
                    }),
                    group_management: ({
                        billingData: e
                    }) => {
                        let t = (0, i(192159).AI)(e);
                        return (0, i(262166).El)(t) ? {
                            type: "available",
                            limit: {
                                type: "none"
                            },
                            expiry: void 0
                        } : _({
                            billingData: e,
                            minimumTier: "plus"
                        })
                    },
                    membership_admins: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    restricted_members: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    view_chart: ({
                        amount: e,
                        billingData: t
                    }) => f({
                        billingData: t,
                        amount: e,
                        limits: {
                            free: 1,
                            personal: "unlimited",
                            student: "unlimited",
                            plus: "unlimited",
                            business: "unlimited",
                            enterprise: "unlimited"
                        },
                        upsellMap: {
                            free: "personal"
                        }
                    }),
                    form_filesize: ({
                        amount: e,
                        billingData: t
                    }) => f({
                        billingData: t,
                        amount: e,
                        limits: {
                            free: 5,
                            personal: 100,
                            student: 100,
                            plus: 100,
                            business: 100,
                            enterprise: 100
                        },
                        upsellMap: {
                            free: "personal"
                        }
                    }),
                    form_customization: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal"
                    }),
                    unbranded_forms: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal"
                    }),
                    forms_conditional_logic: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "business"
                    }),
                    custom_agents: ({
                        billingData: e,
                        environment: t
                    }) => {
                        let n = {
                            type: "none"
                        };
                        return i(149957).Hg(e) ? {
                            type: "available",
                            limit: n,
                            expiry: void 0
                        } : {
                            type: "unavailable",
                            limit: n,
                            upsell: {
                                type: "product",
                                product: (0, i(149957).$G)({
                                    isMobileNative: t.isMobileNative,
                                    experimentService: t.experimentService,
                                    billingData: e
                                }),
                                limit: n,
                                trialability: "preferred"
                            }
                        }
                    },
                    premium_automations: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal"
                    }),
                    move_to: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal"
                    }),
                    claimable_spaces: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    domain_settings: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    managed_users: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    invite_user_to_workspace_mentions: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    saml: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "business"
                    }),
                    scim: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    legal_holds: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    contacts_imports_invite: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    export_members: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "business"
                    }),
                    hipaa_compliance: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    sites_multiple_public_domains: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal"
                    }),
                    custom_image_upload_favicon: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal"
                    }),
                    custom_public_sites_layout: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal"
                    }),
                    seo_title_and_description: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal"
                    }),
                    admin_transfer_private_content: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    configurable_mention_invites: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    configurable_retention: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    watermarkless_chart_export: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal"
                    }),
                    team_self_promotion: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    configurable_deletion_and_retention_settings: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    sudo_mode: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    content_reprovisioning: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    ai_connectors: ({
                        billingData: e,
                        environment: t
                    }) => {
                        let n = (0, i(192159).AI)(e),
                            r = (0, i(192159).eh)(e, "personal"),
                            o = (0, i(192159).eh)(e, "plus"),
                            a = (0, i(192159).eh)(e, "ai"),
                            l = {
                                type: "none"
                            },
                            u = {
                                type: "product",
                                limit: l,
                                product: "ai",
                                trialability: "none"
                            },
                            d = {
                                type: "sunset",
                                endDate: s,
                                upsell: {
                                    type: "product",
                                    limit: l,
                                    product: "business",
                                    trialability: "none"
                                }
                            };
                        if ((0, i(192159).N8)(e))
                            if (o && a) return {
                                type: "available",
                                limit: l,
                                expiry: d
                            };
                            else if ((0, i(192159).hV)(e)) return {
                            type: "available",
                            limit: l,
                            expiry: void 0
                        };
                        else if ((0, i(262166).rV)(n, "business")) return {
                            type: "unavailable",
                            limit: l,
                            upsell: u
                        };
                        else return _({
                            billingData: e,
                            minimumTier: "business"
                        });
                        if ((0, i(262166).rV)(n, "business")) return _({
                            billingData: e,
                            minimumTier: "business",
                            trialability: "preferred"
                        });
                        if (o && a) return {
                            type: "available",
                            limit: l,
                            expiry: d
                        };
                        if (!(0, i(192159).YF)(e)) return _({
                            billingData: e,
                            minimumTier: "business",
                            trialability: "preferred"
                        });
                        if (r && a) return {
                            type: "available",
                            limit: l,
                            expiry: void 0
                        };
                        else if (r) return {
                            type: "unavailable",
                            limit: l,
                            upsell: u
                        };
                        else return {
                            type: "unavailable",
                            limit: l,
                            upsell: {
                                type: "product",
                                limit: l,
                                product: "personal",
                                trialability: "none"
                            }
                        }
                    },
                    collection_property_autofill: ({
                        billingData: e,
                        environment: t,
                        data: {
                            spaceUsage: n,
                            userUsage: r,
                            memberCount: o,
                            aiPromotionConfig: a,
                            space: s
                        },
                        amount: l
                    }) => {
                        let u = {
                                type: "per_use",
                                amount: "unlimited"
                            },
                            d = {
                                type: "per_use",
                                amount: 5
                            };
                        if ((0, i(330898).a)({
                                billingData: e,
                                experimentService: t.experimentService,
                                spaceId: null == s ? void 0 : s.id
                            })) return {
                            type: "available",
                            limit: u,
                            expiry: void 0
                        };
                        let c = {
                                type: "product",
                                product: (0, i(149957).$G)({
                                    isMobileNative: t.isMobileNative,
                                    experimentService: t.experimentService,
                                    billingData: e
                                }),
                                limit: u,
                                trialability: "none"
                            },
                            {
                                spaceLimit: p,
                                userLimit: m
                            } = i(149957).Q_({
                                billingData: e,
                                space: s,
                                config: a,
                                numMembers: o
                            });
                        return "unknown" === l || l > 5 ? {
                            type: "unavailable",
                            limit: d,
                            upsell: c
                        } : n + 1 <= p ? {
                            type: "available",
                            limit: d,
                            upsell: c,
                            expiry: void 0
                        } : r + 1 <= m ? {
                            type: "available",
                            limit: d,
                            upsell: c,
                            expiry: void 0
                        } : {
                            type: "unavailable",
                            limit: {
                                type: "per_use",
                                amount: 0
                            },
                            upsell: c
                        }
                    },
                    ai_usage: ({
                        billingData: e,
                        data: {
                            current: t,
                            userUsage: n,
                            userPromotionalUsage: r,
                            memberCount: o,
                            aiPromotionConfig: a,
                            space: s,
                            lastSpaceUsageAtMs: l,
                            lastSpaceUserUsageAtMs: u
                        },
                        amount: d,
                        actor: c,
                        environment: p,
                        supportedProducts: m,
                        spaceId: f
                    }) => (0, i(149957).A2)({
                        billingData: e,
                        data: {
                            current: t,
                            userUsage: n,
                            userPromotionalUsage: r,
                            memberCount: o,
                            aiPromotionConfig: a,
                            space: s,
                            lastSpaceUsageAtMs: l,
                            lastSpaceUserUsageAtMs: u
                        },
                        amount: d,
                        actor: c,
                        environment: p,
                        spaceId: f,
                        supportedProducts: m
                    }),
                    custom_agents_credit_usage: ({
                        billingData: e,
                        data: {
                            current: t,
                            space: n,
                            limits: r,
                            usage: o
                        },
                        amount: a,
                        actor: s,
                        environment: l
                    }) => (0, i(149957).ty)(l, {
                        actor: s,
                        billingData: e,
                        data: {
                            spaceId: null == n ? void 0 : n.id,
                            spaceUsage: t,
                            spaceLimit: r.currentServicePeriodLimit,
                            totalCreditBalance: o.totalCreditBalance ? ? 0,
                            creditsInOverage: o.creditsInOverage ? ? 0,
                            overageLimit: r.overageLimit
                        },
                        amount: a
                    }),
                    ai_research_mode: ({
                        billingData: e,
                        environment: t,
                        actor: n,
                        data: {
                            generalAiCurrent: r,
                            generalAiUserUsage: o,
                            generalAiUserPromotionalUsage: a,
                            memberCount: s,
                            aiPromotionConfig: l,
                            space: u,
                            current: d
                        },
                        amount: c,
                        spaceId: p,
                        supportedProducts: m
                    }) => {
                        let f, _ = (0, i(149957).A2)({
                            billingData: e,
                            data: {
                                current: r,
                                userUsage: o,
                                userPromotionalUsage: a,
                                memberCount: s,
                                aiPromotionConfig: l,
                                space: u,
                                lastSpaceUsageAtMs: void 0,
                                lastSpaceUserUsageAtMs: void 0
                            },
                            amount: c,
                            actor: n,
                            environment: t,
                            spaceId: p,
                            supportedProducts: m
                        });
                        if (t.experimentService.checkGate({
                                gateName: "usage_based_pricing_pfa_checks_purchased_credits_enabled",
                                actor: i(810016).S,
                                customIDs: {
                                    spaceId: null == u ? void 0 : u.id
                                }
                            }) || "unavailable" === _.type) return _;
                        let g = {
                                type: "cumulative",
                                current: d,
                                total: "unlimited"
                            },
                            v = {
                                type: "product",
                                limit: g,
                                product: "business",
                                trialability: "none"
                            },
                            h = {
                                type: "product",
                                limit: g,
                                product: "ai",
                                trialability: "none"
                            },
                            y = (0, i(192159).AI)(e),
                            b = (0, i(192159).eh)(e, "ai"),
                            S = (0, i(192159).eh)(e, "personal"),
                            k = {
                                type: "cumulative",
                                current: d,
                                total: 3
                            };
                        if ((0, i(192159).N8)(e))
                            if ((0, i(192159).hV)(e)) return {
                                type: "available",
                                limit: g,
                                expiry: void 0
                            };
                            else {
                                if ((0, i(262166).rV)(y, "business")) return {
                                    type: "unavailable",
                                    limit: {
                                        current: d,
                                        total: 0,
                                        type: "cumulative"
                                    },
                                    upsell: h
                                };
                                f = {
                                    type: "unavailable",
                                    limit: k,
                                    upsell: v
                                }
                            }
                        else if ((0, i(262166).rV)(y, "business")) return {
                            type: "available",
                            limit: g,
                            expiry: void 0
                        };
                        else if ((0, i(192159).YF)(e))
                            if (S && b) return {
                                type: "available",
                                limit: g,
                                expiry: void 0
                            };
                            else f = S ? {
                                type: "unavailable",
                                limit: k,
                                upsell: h
                            } : b ? {
                                type: "unavailable",
                                limit: k,
                                upsell: {
                                    type: "product",
                                    limit: g,
                                    product: "personal",
                                    trialability: "none"
                                }
                            } : {
                                type: "unavailable",
                                limit: k,
                                upsell: v
                            };
                        return "unknown" === c ? {
                            type: "unavailable",
                            limit: {
                                type: "cumulative",
                                current: d,
                                total: 3
                            },
                            upsell: v
                        } : d + c <= 3 ? {
                            type: "available",
                            limit: {
                                type: "cumulative",
                                current: d,
                                total: 3
                            },
                            upsell: void 0,
                            expiry: void 0
                        } : f ? ? {
                            type: "unavailable",
                            limit: {
                                type: "cumulative",
                                current: d,
                                total: 3
                            },
                            upsell: v
                        }
                    },
                    ai_formulas: ({
                        environment: e,
                        actor: t,
                        billingData: n,
                        data: {
                            aiPromotionConfig: r,
                            memberCount: o,
                            space: a,
                            current: s,
                            currentUserUsage: l,
                            userPromotionalUsage: u
                        },
                        amount: d,
                        spaceId: c,
                        supportedProducts: p
                    }) => (0, i(149957).A2)({
                        billingData: n,
                        data: {
                            current: s,
                            userUsage: l,
                            userPromotionalUsage: u,
                            memberCount: o,
                            aiPromotionConfig: r,
                            space: a,
                            lastSpaceUsageAtMs: void 0,
                            lastSpaceUserUsageAtMs: void 0
                        },
                        amount: d,
                        actor: t,
                        environment: e,
                        spaceId: c,
                        supportedProducts: p
                    }),
                    ai_database_agents: ({
                        environment: e,
                        actor: t,
                        billingData: n,
                        data: {
                            space: r,
                            current: o
                        },
                        amount: a
                    }) => {
                        let s = {
                            type: "cumulative",
                            current: o,
                            total: 0
                        };
                        if (e.experimentService.checkGate({
                                gateName: "database_agent_always_allowlist",
                                actor: i(810016).S,
                                customIDs: {
                                    spaceId: null == r ? void 0 : r.id
                                }
                            })) return {
                            type: "available",
                            limit: {
                                type: "cumulative",
                                current: o,
                                total: "unlimited"
                            },
                            expiry: void 0
                        };
                        if ((0, i(192159).N8)(n)) return {
                            type: "unavailable",
                            limit: s,
                            upsell: {
                                type: "none"
                            }
                        };
                        let l = e.experimentService.checkGate({
                            gateName: "custom_agents_allow_hipaa",
                            actor: i(810016).S,
                            customIDs: {
                                spaceId: null == r ? void 0 : r.id
                            }
                        });
                        return (null == r ? void 0 : r.getZeroRetentionEnabled()) !== !0 || l ? i(149957).bQ({
                            billingData: n,
                            data: {
                                spaceUsage: o,
                                space: r
                            },
                            amount: a,
                            actor: t,
                            environment: e
                        }) : {
                            type: "unavailable",
                            limit: s,
                            upsell: {
                                type: "none"
                            }
                        }
                    },
                    ai_voice_dictation: ({
                        environment: e,
                        actor: t,
                        billingData: n,
                        data: {
                            space: r,
                            current: o
                        },
                        amount: a
                    }) => i(149957).bQ({
                        environment: e,
                        actor: t,
                        billingData: n,
                        data: {
                            space: r,
                            spaceUsage: o
                        },
                        amount: a
                    }),
                    ai_meeting_notes: ({
                        amount: e,
                        billingData: t,
                        data: {
                            current: n
                        },
                        supportedProducts: r
                    }) => {
                        let o = 120 * i(695216).m1,
                            a = (0, i(192159).AI)(t),
                            s = (0, i(192159).eh)(t, "personal"),
                            l = (0, i(192159).eh)(t, "ai"),
                            u = {
                                type: "cumulative",
                                total: 0,
                                current: n
                            },
                            d = {
                                type: "cumulative",
                                total: 120 * i(695216).m1,
                                current: n
                            },
                            c = {
                                type: "cumulative",
                                total: "unlimited",
                                current: n
                            };
                        if ((0, i(192159).N8)(t))
                            if ((0, i(192159).hV)(t)) return {
                                type: "available",
                                limit: c,
                                upsell: {
                                    type: "product",
                                    product: "business",
                                    trialability: "none",
                                    limit: d
                                },
                                expiry: void 0
                            };
                            else if ((0, i(262166).rV)(a, "business")) return {
                            type: "unavailable",
                            limit: u,
                            upsell: {
                                type: "product",
                                product: "ai",
                                trialability: "none",
                                limit: c
                            }
                        };
                        else return {
                            type: "unavailable",
                            limit: u,
                            upsell: {
                                type: "product",
                                product: "business",
                                trialability: "none",
                                limit: d
                            }
                        };
                        if ((0, i(192159).YF)(t) && !(0, i(262166).rV)(a, "business"))
                            if (s && l) return {
                                type: "available",
                                limit: c,
                                expiry: void 0
                            };
                            else if (s)
                            if ("unknown" === e || n + e > d.total) return {
                                type: "unavailable",
                                limit: d,
                                upsell: {
                                    type: "product",
                                    product: "ai",
                                    trialability: "none",
                                    limit: c
                                }
                            };
                            else return {
                                type: "available",
                                limit: d,
                                upsell: {
                                    type: "product",
                                    product: "ai",
                                    trialability: "none",
                                    limit: c
                                },
                                expiry: void 0
                            };
                        else if ("unknown" === e || n + e > d.total) return {
                            type: "unavailable",
                            limit: d,
                            upsell: {
                                type: "product",
                                limit: c,
                                product: "personal",
                                trialability: "none"
                            }
                        };
                        else return {
                            type: "available",
                            limit: d,
                            upsell: {
                                type: "product",
                                limit: c,
                                product: "personal",
                                trialability: "none"
                            },
                            expiry: void 0
                        };
                        return !r.includes("ai") || r.includes("business") || (0, i(192159).oD)(t) ? p({
                            billingData: t,
                            amount: e,
                            current: n,
                            limits: {
                                free: o,
                                personal: o,
                                student: o,
                                plus: o,
                                business: "unlimited",
                                enterprise: "unlimited"
                            },
                            upsellMap: {
                                free: "business",
                                student: "business",
                                plus: "business"
                            }
                        }) : "unknown" === e || n + e > d.total ? {
                            type: "unavailable",
                            limit: d,
                            upsell: {
                                type: "product",
                                limit: c,
                                product: "ai",
                                trialability: "none"
                            }
                        } : {
                            type: "available",
                            limit: d,
                            upsell: {
                                type: "product",
                                limit: c,
                                product: "ai",
                                trialability: "none"
                            },
                            expiry: void 0
                        }
                    },
                    ai_meeting_notes_custom_transcript_retention: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    ai_app_builder: ({
                        billingData: e,
                        environment: t
                    }) => ({
                        type: "available",
                        limit: {
                            type: "none"
                        },
                        expiry: void 0
                    }),
                    block_read_and_write_role: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal"
                    }),
                    assistant_image_filesize_bytes: e => m(e),
                    assistant_json_filesize_bytes: e => m(e, {
                        allTiersSamePaidLimit: !0
                    }),
                    assistant_pdf_filesize_bytes: e => m(e),
                    assistant_csv_filesize_bytes: e => m(e),
                    filesystem_sandbox_filesize_bytes: e => m(e, {
                        sandbox: !0
                    }),
                    assistant_text_filesize_bytes: e => m(e),
                    file_upload_size: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "plus"
                    }),
                    custom_teamspace_permissions: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "business",
                        trialability: "none"
                    }),
                    collection_connected_property_figma: ({
                        environment: e,
                        billingData: t,
                        data: {
                            space: i
                        }
                    }) => y({
                        environment: e,
                        billingData: t,
                        space: i,
                        minimumTier: "business",
                        cutoffDate: h,
                        expiryDate: s
                    }),
                    collection_connected_property_zendesk: ({
                        environment: e,
                        billingData: t,
                        data: {
                            space: i
                        }
                    }) => y({
                        environment: e,
                        billingData: t,
                        space: i,
                        minimumTier: "business",
                        cutoffDate: h,
                        expiryDate: s
                    }),
                    collection_connected_property_github: ({
                        environment: e,
                        billingData: t,
                        data: {
                            space: i
                        }
                    }) => y({
                        environment: e,
                        billingData: t,
                        space: i,
                        minimumTier: "business",
                        cutoffDate: h,
                        expiryDate: s
                    }),
                    collection_connected_property_google_drive: ({
                        environment: e,
                        billingData: t,
                        data: {
                            space: i
                        }
                    }) => y({
                        environment: e,
                        billingData: t,
                        space: i,
                        minimumTier: "personal",
                        cutoffDate: h,
                        expiryDate: s
                    }),
                    collection_synced_database_github: ({
                        environment: e,
                        billingData: t,
                        data: {
                            space: i
                        }
                    }) => y({
                        environment: e,
                        billingData: t,
                        space: i,
                        minimumTier: "business",
                        cutoffDate: h,
                        expiryDate: s
                    }),
                    collection_synced_database_asana: ({
                        environment: e,
                        billingData: t,
                        data: {
                            space: i
                        }
                    }) => y({
                        environment: e,
                        billingData: t,
                        space: i,
                        minimumTier: "business",
                        cutoffDate: h,
                        expiryDate: s
                    }),
                    collection_synced_database_gitlab: ({
                        environment: e,
                        billingData: t,
                        data: {
                            space: i
                        }
                    }) => y({
                        environment: e,
                        billingData: t,
                        space: i,
                        minimumTier: "business",
                        cutoffDate: h,
                        expiryDate: s
                    }),
                    collection_synced_database_jira: ({
                        environment: e,
                        billingData: t,
                        data: {
                            space: i
                        }
                    }) => y({
                        environment: e,
                        billingData: t,
                        space: i,
                        minimumTier: "business",
                        cutoffDate: h,
                        expiryDate: s
                    }),
                    collection_synced_database_jira_workspace: ({
                        environment: e,
                        billingData: t,
                        data: {
                            space: i
                        }
                    }) => y({
                        environment: e,
                        billingData: t,
                        space: i,
                        minimumTier: "business",
                        cutoffDate: h,
                        expiryDate: s
                    }),
                    collection_synced_database_jira_datacenter: ({
                        environment: e,
                        billingData: t,
                        data: {
                            space: i
                        }
                    }) => y({
                        environment: e,
                        billingData: t,
                        space: i,
                        minimumTier: "enterprise",
                        cutoffDate: h,
                        expiryDate: s
                    }),
                    collection_synced_database_salesforce_workspace: ({
                        environment: e,
                        billingData: t,
                        data: {
                            space: i
                        }
                    }) => y({
                        environment: e,
                        billingData: t,
                        space: i,
                        minimumTier: "enterprise",
                        cutoffDate: h,
                        expiryDate: s
                    }),
                    offline_manual_sync: ({
                        amount: e,
                        billingData: t,
                        data: {
                            current: i,
                            dynamicLimits: n
                        }
                    }) => p({
                        amount: e,
                        billingData: t,
                        current: i,
                        limits: {
                            free: 5,
                            personal: "unlimited",
                            student: "unlimited",
                            plus: "unlimited",
                            business: "unlimited",
                            enterprise: "unlimited",
                            ...n
                        },
                        upsellMap: {
                            free: "personal"
                        }
                    }),
                    offline_auto_sync: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal",
                        trialability: void 0
                    }),
                    collection_property_permissions: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "business"
                    }),
                    manage_integration_permissions: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    advanced_notion_mcp_tools: ({
                        billingData: e
                    }) => {
                        let t = (0, i(192159).AI)(e),
                            n = (0, i(262166).rV)(t, "enterprise") && (0, i(192159).vA)(e),
                            r = {
                                type: "none"
                            };
                        return n ? {
                            type: "available",
                            limit: r,
                            expiry: void 0
                        } : {
                            type: "unavailable",
                            limit: r,
                            upsell: {
                                type: "product",
                                product: "enterprise",
                                limit: r,
                                trialability: "none"
                            }
                        }
                    },
                    mcp_ai_access: ({
                        billingData: e,
                        actor: t,
                        environment: n
                    }) => {
                        let r = {
                                type: "none"
                            },
                            o = i(149957).bQ({
                                environment: n,
                                actor: t,
                                billingData: e,
                                data: {
                                    spaceUsage: 0
                                },
                                amount: 0
                            });
                        if ("available" === o.type) return {
                            type: "available",
                            limit: r,
                            expiry: void 0
                        };
                        let a = o.upsell;
                        return "product" === a.type ? {
                            type: "unavailable",
                            limit: r,
                            upsell: {
                                type: "product",
                                product: a.product,
                                limit: r,
                                trialability: a.trialability
                            }
                        } : {
                            type: "unavailable",
                            limit: r,
                            upsell: {
                                type: "none"
                            }
                        }
                    },
                    disable_member_upgrade_requests: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "business"
                    }),
                    verified_pages: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "business",
                        trialability: "preferred"
                    }),
                    team_security_settings: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "enterprise"
                    }),
                    disable_public_access_requests: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "plus"
                    }),
                    private_teamspaces: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "business"
                    }),
                    dashboard_view: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "business"
                    }),
                    link_expiration: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "personal"
                    }),
                    workers: ({
                        billingData: e,
                        environment: t,
                        actor: n
                    }) => n.isGuest || !t.experimentService.checkGate({
                        gateName: "workers",
                        actor: i(810016).S
                    }) ? {
                        type: "unavailable",
                        limit: {
                            type: "none"
                        },
                        upsell: {
                            type: "none"
                        }
                    } : _({
                        billingData: e,
                        minimumTier: "business"
                    }),
                    archive_content: ({
                        billingData: e
                    }) => _({
                        billingData: e,
                        minimumTier: "business"
                    })
                };

            function u(e) {
                return (0, n()._d)(o, l, e)
            }

            function d(e) {
                return (0, n().jx)(o, l, e)
            }

            function c(e) {
                return (0, n().jx)(o, l, { ...e,
                    state: e.state,
                    scope: { ...e.scope,
                        billingData: { ...e.scope.billingData,
                            subscription: {
                                trialEnd: e.state.trialEnd,
                                items: e.state.items
                            }
                        }
                    }
                })
            }

            function p({
                billingData: e,
                amount: t,
                current: n,
                limits: r,
                upsellMap: o
            }) {
                let a = i(192159).AI(e),
                    s = r[a],
                    l = {
                        current: n,
                        total: s,
                        type: "cumulative"
                    },
                    u = o[a],
                    d = u ? {
                        type: "product",
                        product: u,
                        limit: {
                            type: "cumulative",
                            current: n,
                            total: r[u]
                        },
                        trialability: "none"
                    } : {
                        type: "none"
                    };
                return s && ("unlimited" === s || "unknown" !== t && t + n <= s) ? {
                    type: "available",
                    limit: l,
                    upsell: d,
                    expiry: void 0
                } : {
                    type: "unavailable",
                    limit: l,
                    upsell: d
                }
            }

            function m({
                actor: e,
                amount: t,
                billingData: n,
                environment: r,
                spaceId: o
            }, a) {
                let s = r.experimentService.getConfig({
                        configName: "assistant_attachment_limits",
                        actor: e.id ? {
                            table: "notion_user",
                            id: e.id
                        } : void 0,
                        customIDs: {
                            spaceId: o
                        }
                    }),
                    l = i(192159).eh(n, "ai"),
                    u = null != a && a.sandbox ? "maxPaidSandboxFileSizeMb" : "maxPaidFileSizeMb",
                    d = null != a && a.sandbox ? "maxFreeSandboxFileSizeMb" : "maxFreeFileSizeMb",
                    c = (s[u] ? ? i(745493).c / i(953325).B) * i(953325).B,
                    p = (s[d] ? ? i(745493).Y / i(953325).B) * i(953325).B;
                return f({
                    billingData: n,
                    amount: t,
                    limits: {
                        free: null != a && a.allTiersSamePaidLimit || l ? c : p,
                        personal: c,
                        student: c,
                        plus: c,
                        business: c,
                        enterprise: c
                    },
                    upsellMap: null != a && a.allTiersSamePaidLimit ? {} : {
                        free: "personal"
                    }
                })
            }

            function f({
                billingData: e,
                amount: t,
                limits: n,
                upsellMap: r
            }) {
                let o = i(192159).AI(e),
                    a = n[o],
                    s = {
                        amount: a,
                        type: "per_use"
                    },
                    l = r[o],
                    u = l ? {
                        type: "product",
                        product: l,
                        limit: {
                            type: "per_use",
                            amount: n[l]
                        },
                        trialability: "none"
                    } : {
                        type: "none"
                    };
                return a && ("unlimited" === a || "unknown" !== t && t <= a) ? {
                    type: "available",
                    limit: s,
                    upsell: u,
                    expiry: void 0
                } : {
                    type: "unavailable",
                    limit: s,
                    upsell: u
                }
            }

            function _({
                billingData: e,
                minimumTier: t,
                trialability: n = "none"
            }) {
                let r = i(192159).AI(e),
                    o = {
                        type: "none"
                    };
                return (0, i(262166).rV)(r, t) ? {
                    type: "available",
                    limit: o,
                    expiry: void 0
                } : {
                    type: "unavailable",
                    limit: o,
                    upsell: {
                        type: "product",
                        product: t,
                        limit: o,
                        trialability: n
                    }
                }
            }

            function g(e) {
                return ((null == e ? void 0 : e.items) ? ? []).filter(e => "sites_custom_hostnames" === i(192159).IE(e)).reduce((e, t) => e + t.quantity, 0)
            }

            function v(e) {
                if (e) {
                    if (!(0, n().e2)(e)) return e.upsell;
                    if (e.expiry) return e.expiry.upsell
                }
            }
            let h = i(906745).DateTime.fromISO("2025-05-13");

            function y({
                environment: e,
                billingData: t,
                space: n,
                minimumTier: r,
                cutoffDate: o,
                expiryDate: a
            }) {
                let s = i(192159).AI(t),
                    l = {
                        type: "none"
                    },
                    u = {
                        type: "product",
                        product: r,
                        limit: l,
                        trialability: "none"
                    };
                return (0, i(262166).rV)(s, r) ? {
                    type: "available",
                    limit: l,
                    expiry: void 0
                } : n && n.created_time && n.created_time > o.toMillis() || i(906745).DateTime.now().toMillis() > a.toMillis() ? {
                    type: "unavailable",
                    limit: l,
                    upsell: u
                } : {
                    type: "available",
                    limit: l,
                    expiry: {
                        type: "sunset",
                        endDate: a,
                        upsell: u
                    }
                }
            }
        },
        105692: (e, t, i) => {
            i.r(t), i.d(t, {
                SubscriptionDataStore: () => r,
                subscriptionDataStoreInstance: () => o
            });
            var n = () => i(546605);
            class r extends n().Store {
                spaceId;
                userId;
                getInitialState() {}
                waitUntilLoaded() {
                    return this.waitUntil(() => !!this.state)
                }
                getForSpaceUser(e) {
                    return this.state
                }
                setForSpaceUser(e) {
                    let {
                        userId: t,
                        spaceId: i,
                        subscriptionData: n
                    } = e;
                    this.spaceId = i, this.userId = t, this.setState(n), this.emit()
                }
                isEmpty() {
                    return void 0 === this.state
                }
            }
            let o = new r;
            (0, i(202146).exposeDebugValue)("subscriptionDataStoreInstance", o)
        },
        111010: (e, t, i) => {
            i.d(t, {
                D: () => n().D
            });
            var n = () => i(224044)
        },
        112127: (e, t, i) => {
            i.d(t, {
                f: () => n
            }), i(898992), i(354520);

            function n(e) {
                let {
                    environment: t,
                    spaceStore: n
                } = e;
                return (0, i(916804).I)(n) || n.isTeamsEnabled() ? [] : (0, i(868488).I)(t, n).filter(e => e.isTopLevelWorkspacePage(n.id) && e.isNavigableBlock())
            }
        },
        114596: (e, t, i) => {
            i.d(t, {
                O: () => l,
                f: () => a
            });
            var n = i(296540),
                r = i(440961),
                o = i(474848);
            let a = "data-portal",
                s = {
                    [a]: !0
                },
                l = n.memo(function(e) {
                    let {
                        origin: t,
                        open: r,
                        ...a
                    } = e;
                    return (0, n.useEffect)(() => () => {
                        i(374176).default.afterNextFlush()
                    }, []), (0, o.jsxs)(o.Fragment, {
                        children: [t, r ? (0, o.jsx)(d, { ...a
                        }) : void 0]
                    })
                }),
                u = {
                    kfzvcC: "x67bb7w",
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                };

            function d(e) {
                let {
                    children: t,
                    zIndex: a,
                    trapFocus: l = !1
                } = e, d = (0, n.useContext)(i(425930).A);
                return d ? r.createPortal((0, o.jsx)("div", { ...s,
                    ...f,
                    ...i(952687).A.props(u, void 0 !== a && {
                        zIndex: a
                    }),
                    children: (0, o.jsx)(i(868883).s, {
                        active: l && !i(986939).A.isMobile,
                        children: t
                    })
                }), d) : null
            }
            let c = {
                    eventPhase: Event.BUBBLING_PHASE,
                    currentTarget: window
                },
                p = {
                    CustomEvent: !0,
                    Event: !0,
                    FocusEvent: !0,
                    KeyboardEvent: !0,
                    MouseEvent: !0,
                    PointerEvent: !0,
                    WheelEvent: !0,
                    TouchEvent: !0
                };

            function m(e) {
                let t = e.nativeEvent;
                if (t && t.constructor && p[t.constructor.name || ({}).toString.call(t.constructor).slice(8, -1)]) try {
                    let i = new t.constructor(t.type, t);
                    for (let e in t) "isTrusted" !== e && "function" != typeof t[e] && Object.defineProperty(i, e, {
                        writable: !1,
                        value: c[e] || t[e]
                    });
                    e.stopPropagation(), window.dispatchEvent(i)
                } catch (e) {}
            }
            let f = {
                onCopy: void 0,
                onCopyCapture: void 0,
                onCut: void 0,
                onCutCapture: void 0,
                onPaste: void 0,
                onPasteCapture: void 0,
                onCompositionEnd: void 0,
                onCompositionEndCapture: void 0,
                onCompositionStart: void 0,
                onCompositionStartCapture: void 0,
                onCompositionUpdate: void 0,
                onCompositionUpdateCapture: void 0,
                onFocus: void 0,
                onFocusCapture: void 0,
                onBlur: void 0,
                onBlurCapture: void 0,
                onChange: void 0,
                onChangeCapture: void 0,
                onBeforeInput: void 0,
                onBeforeInputCapture: void 0,
                onInput: void 0,
                onInputCapture: void 0,
                onReset: void 0,
                onResetCapture: void 0,
                onSubmit: void 0,
                onSubmitCapture: void 0,
                onInvalid: void 0,
                onInvalidCapture: void 0,
                onLoad: void 0,
                onLoadCapture: void 0,
                onError: void 0,
                onErrorCapture: void 0,
                onKeyDown: void 0,
                onKeyDownCapture: void 0,
                onKeyPress: void 0,
                onKeyPressCapture: void 0,
                onKeyUp: void 0,
                onKeyUpCapture: void 0,
                onAbort: void 0,
                onAbortCapture: void 0,
                onCanPlay: void 0,
                onCanPlayCapture: void 0,
                onCanPlayThrough: void 0,
                onCanPlayThroughCapture: void 0,
                onDurationChange: void 0,
                onDurationChangeCapture: void 0,
                onEmptied: void 0,
                onEmptiedCapture: void 0,
                onEncrypted: void 0,
                onEncryptedCapture: void 0,
                onEnded: void 0,
                onEndedCapture: void 0,
                onLoadedData: void 0,
                onLoadedDataCapture: void 0,
                onLoadedMetadata: void 0,
                onLoadedMetadataCapture: void 0,
                onLoadStart: void 0,
                onLoadStartCapture: void 0,
                onPause: void 0,
                onPauseCapture: void 0,
                onPlay: void 0,
                onPlayCapture: void 0,
                onPlaying: void 0,
                onPlayingCapture: void 0,
                onProgress: void 0,
                onProgressCapture: void 0,
                onRateChange: void 0,
                onRateChangeCapture: void 0,
                onResize: void 0,
                onResizeCapture: void 0,
                onSeeked: void 0,
                onSeekedCapture: void 0,
                onSeeking: void 0,
                onSeekingCapture: void 0,
                onStalled: void 0,
                onStalledCapture: void 0,
                onSuspend: void 0,
                onSuspendCapture: void 0,
                onTimeUpdate: void 0,
                onTimeUpdateCapture: void 0,
                onVolumeChange: void 0,
                onVolumeChangeCapture: void 0,
                onWaiting: void 0,
                onWaitingCapture: void 0,
                onAuxClick: m,
                onAuxClickCapture: void 0,
                onClick: m,
                onClickCapture: void 0,
                onContextMenu: m,
                onContextMenuCapture: void 0,
                onDoubleClick: m,
                onDoubleClickCapture: void 0,
                onDrag: m,
                onDragCapture: void 0,
                onDragEnd: m,
                onDragEndCapture: void 0,
                onDragEnter: m,
                onDragEnterCapture: void 0,
                onDragExit: m,
                onDragExitCapture: void 0,
                onDragLeave: m,
                onDragLeaveCapture: void 0,
                onDragOver: m,
                onDragOverCapture: void 0,
                onDragStart: m,
                onDragStartCapture: void 0,
                onDrop: m,
                onDropCapture: void 0,
                onMouseDown: m,
                onMouseDownCapture: void 0,
                onMouseEnter: m,
                onMouseLeave: m,
                onMouseMove: m,
                onMouseMoveCapture: void 0,
                onMouseOut: m,
                onMouseOutCapture: void 0,
                onMouseOver: m,
                onMouseOverCapture: void 0,
                onMouseUp: m,
                onMouseUpCapture: void 0,
                onSelect: void 0,
                onSelectCapture: void 0,
                onTouchCancel: m,
                onTouchCancelCapture: void 0,
                onTouchEnd: m,
                onTouchEndCapture: void 0,
                onTouchMove: m,
                onTouchMoveCapture: void 0,
                onTouchStart: m,
                onTouchStartCapture: void 0,
                onPointerDown: m,
                onPointerDownCapture: void 0,
                onPointerMove: m,
                onPointerMoveCapture: void 0,
                onPointerUp: m,
                onPointerUpCapture: void 0,
                onPointerCancel: m,
                onPointerCancelCapture: void 0,
                onPointerEnter: m,
                onPointerLeave: m,
                onPointerOver: m,
                onPointerOverCapture: void 0,
                onPointerOut: m,
                onPointerOutCapture: void 0,
                onGotPointerCapture: m,
                onGotPointerCaptureCapture: void 0,
                onLostPointerCapture: m,
                onLostPointerCaptureCapture: void 0,
                onScroll: void 0,
                onScrollCapture: void 0,
                onWheel: void 0,
                onWheelCapture: void 0,
                onAnimationStart: void 0,
                onAnimationStartCapture: void 0,
                onAnimationEnd: void 0,
                onAnimationEndCapture: void 0,
                onAnimationIteration: void 0,
                onAnimationIterationCapture: void 0,
                onTransitionEnd: void 0,
                onTransitionEndCapture: void 0
            }
        },
        118483: (e, t, i) => {
            i.d(t, {
                C: () => n
            });

            function n(e, t, n) {
                let r = (0, i(312462).Y$)(e, t, n);
                if (r) {
                    if ("loading" !== r) return (0, i(94418).jx)(r)
                }
            }
        },
        120190: (e, t, i) => {
            i.d(t, {
                F: () => n
            });

            function n(e) {
                return e.device.isPhone ? 24 : 96
            }
        },
        136508: (e, t, i) => {
            i.d(t, {
                _: () => o
            }), i(944114), i(898992), i(354520);
            var n = i(296540),
                r = i(474848);
            let o = n.forwardRef(function(e, t) {
                    let {
                        type: o,
                        style: m,
                        children: f,
                        className: _,
                        onScroll: g,
                        preventType: v,
                        store: h,
                        ...y
                    } = e, b = (0, n.useRef)(null), S = (0, i(682985).uB)(h, i(593423).A), k = (0, n.useRef)(0), x = (0, n.useRef)(0), w = (0, n.useCallback)(e => {
                        S.setState({ ...S.state,
                            elementRef: b,
                            element: e ? new WeakRef(e) : null
                        })
                    }, [S]), P = (0, i(421573).A)(w, b), I = (0, n.useMemo)(() => ({
                        getNode: () => b.current,
                        getStore: () => S,
                        getClientRect: () => S.measureSize(),
                        getOverflowType: () => o
                    }), [b, S, o]);
                    (0, n.useImperativeHandle)(t, () => I, [I]);
                    let [C, T] = (0, n.useState)(!1);
                    (0, n.useLayoutEffect)(() => {
                        let e = b.current;
                        if (e) {
                            let t = (0, i(381453).sg)(() => {
                                    S.measureSize(), T(e.scrollHeight > e.clientHeight)
                                }, 500, {
                                    leading: !0
                                }),
                                n = new ResizeObserver(t);
                            return n.observe(e), () => {
                                t.cancel(), n.disconnect()
                            }
                        }
                    }, [S]);
                    let M = (0, n.useContext)(i(700587).U),
                        A = (0, n.useMemo)(() => ({
                            horizontalScroller: p(o, i(644154).A.X) ? I : null == M ? void 0 : M.horizontalScroller,
                            verticalScroller: p(o, i(644154).A.Y) ? I : null == M ? void 0 : M.verticalScroller
                        }), [M, o, I]),
                        E = (0, n.useContext)(i(396085).f),
                        D = (0, i(682985).K8)(() => E(S), [E, S]),
                        B = (0, i(83208).X)("preserve_scrollbar_gutter_on_overflow_hidden") && C && p(o, i(644154).A.Y) && p(v, i(644154).A.Y),
                        O = (0, n.useMemo)(() => [m, function(e, t) {
                            let n;
                            if (void 0 !== t) {
                                let r = p(e, i(644154).A.X),
                                    o = p(e, i(644154).A.Y);
                                p(t, i(644154).A.X) && (r = !1), p(t, i(644154).A.Y) && (o = !1), n = r && o ? i(644154).A.All : r ? i(644154).A.X : o ? i(644154).A.Y : i(644154).A.None
                            } else n = e;
                            let r = [];
                            return e !== i(644154).A.None && n === i(644154).A.None ? r.push(a) : n === i(644154).A.All ? r.push(s) : n === i(644154).A.X ? (r.push(s), r.push(u)) : n === i(644154).A.Y && (r.push(d), r.push(l)), i(986939).A.isMobile && r.push(c), r
                        }(o, v), D ? {
                            paddingBottom: D
                        } : {}, B ? {
                            scrollbarGutter: "stable"
                        } : {}], [m, o, v, D, B]);
                    return (0, r.jsx)(i(700587).U.Provider, {
                        value: A,
                        children: (0, r.jsx)("div", { ...i(952687).A.props(O, {
                                $$css: !0,
                                className: [i(314543).Cn, p(o, i(644154).A.Y) && i(314543).RY, p(o, i(644154).A.X) && i(314543).Dk, _].filter(Boolean).join(" ")
                            }),
                            onScroll: function(e) {
                                let t = b.current;
                                if (!t) return;
                                let {
                                    scrollTop: i,
                                    scrollLeft: n
                                } = t, r = i > x.current ? "down" : i < x.current ? "up" : n > k.current ? "right" : n < k.current ? "left" : void 0;
                                x.current = i, k.current = n, S.setState({ ...S.state,
                                    scrollTop_DEPRECATED: i
                                }), g && g(e, r)
                            },
                            ref: P,
                            ...y,
                            children: f
                        })
                    })
                }),
                a = {
                    kXHlph: "x6ikm8r",
                    kORKVm: "x10wlt62",
                    $$css: !0
                },
                s = {
                    kXHlph: "xw2csxc",
                    $$css: !0
                },
                l = {
                    kORKVm: "x1odjw0f",
                    $$css: !0
                },
                u = {
                    kORKVm: "x10wlt62",
                    $$css: !0
                },
                d = {
                    kXHlph: "x6ikm8r",
                    $$css: !0
                },
                c = {
                    k3aq6I: "x1naj3uh",
                    k6sLGO: "xv86n2c",
                    $$css: !0
                };

            function p(e, t) {
                return e === t || e === i(644154).A.All
            }
        },
        138375: (e, t, i) => {
            let n;

            function r(e) {
                n = e
            }

            function o() {
                var e;
                return null == (e = n) ? void 0 : e.getMainEditorBlockStore()
            }

            function a() {
                var e;
                return null == (e = n) ? void 0 : e.getPeekOverrideBlockStore()
            }
            i.d(t, {
                M6: () => a,
                cL: () => r,
                r$: () => o
            })
        },
        142484: (e, t, i) => {
            function n(e, t, n) {
                if (e.defaultRecordCache.inMemoryRecordCache !== t.inMemoryRecordCache) return o(e, t, n);
                let a = `${e.currentUser.id}:${t.table}:${t.id}:${null==n?void 0:n.id}`,
                    s = r.get(a);
                if (s) return s.state;
                let l = new(i(345426)).ComputedStore(() => o(e, t, n), {
                    debugName: `userHasPermissionViaPublicAccess:${t.id}`
                });
                return r.set(a, l), l.state
            }
            i.d(t, {
                q: () => n
            });
            let r = new(i(759303)).q({
                max: 30,
                ttl: i(627179).Xb,
                updateAgeOnGet: !0
            });

            function o(e, t, n) {
                let r, {
                    id: o
                } = e.currentUser;
                if (i(262166).OX(null == n ? void 0 : n.getSubscriptionTier()) && null != n && n.canAdmin()) return;
                o && (r = {
                    table: i(832375).oo9,
                    id: o
                });
                let a = (0, i(504127).I)(t) || t,
                    s = (0, i(310248).uI)({
                        recordPointers: new(i(227318)).d([t.pointer]),
                        actorPointers: new(i(227318)).d(void 0 === r ? [] : [r]),
                        getRecordModel: a.getRecordModel
                    }),
                    l = i(728372).AppStoreCurrentUserStore.state;
                return (0, i(310248).eV)({
                    actor: null == l ? void 0 : l.getModel(),
                    recordPointer: t.pointer,
                    spaceStore: n,
                    permissionsContext: s
                })
            }
        },
        149957: (e, t, i) => {
            i.d(t, {
                $G: () => l,
                A2: () => o,
                BL: () => d,
                Hg: () => u,
                QO: () => r,
                Q_: () => s,
                bQ: () => a,
                ty: () => p,
                xH: () => c
            }), i(898992), i(908872);
            let n = ["ai_connectors", "ai_research_mode", "ai_meeting_notes", "ai_app_builder", "ai_usage", "ai_formulas", "ai_database_agents", "ai_voice_dictation"];

            function r(e) {
                return !!(0, i(722371).Xk)(n, e)
            }

            function o({
                billingData: e,
                data: {
                    current: t,
                    userUsage: n,
                    userPromotionalUsage: r,
                    memberCount: u,
                    aiPromotionConfig: d,
                    space: c,
                    lastSpaceUsageAtMs: p,
                    lastSpaceUserUsageAtMs: m
                },
                amount: f,
                actor: _,
                environment: g
            }) {
                let v = a({
                    environment: g,
                    actor: _,
                    billingData: e,
                    data: {
                        space: c,
                        spaceUsage: t
                    },
                    amount: f
                });
                if ("available" === v.type) return v;
                let {
                    spaceLimit: h,
                    userLimit: y,
                    userPromotionalLimit: b
                } = s({
                    billingData: e,
                    config: d,
                    numMembers: u
                }), S = c && function(e) {
                    let {
                        experimentService: t,
                        spaceId: n,
                        lastSpaceUsageAtMs: r,
                        lastSpaceUserUsageAtMs: o,
                        spaceUsage: a,
                        spaceLimit: s,
                        userUsage: l,
                        userLimit: u
                    } = e;
                    if (a < s && l < u) return !1;
                    let d = Math.max(r ? ? 0, o ? ? 0);
                    if (0 === d) return !1;
                    let c = (t.getConfig({
                        configName: "offers_metadata",
                        actor: i(810016).S
                    }).agent_biz_trial_delay_days ? ? 0) * i(695216).nD;
                    return !(Date.now() - d < c) && ("on" === t.getEligibleGroup({
                        experimentTarget: {
                            spaceId: n
                        },
                        experimentId: "agent_business_trial_upsell",
                        defaultGroup: "control"
                    }) || "on" === t.getEligibleGroup({
                        experimentTarget: {
                            spaceId: n
                        },
                        experimentId: "agent_business_trial_upsell_new_workspaces",
                        defaultGroup: "control"
                    }))
                }({
                    experimentService: g.experimentService,
                    spaceId: c.id,
                    lastSpaceUsageAtMs: p,
                    lastSpaceUserUsageAtMs: m,
                    spaceUsage: t,
                    spaceLimit: h,
                    userUsage: n,
                    userLimit: y
                }), k = {
                    type: "product",
                    product: l({
                        isMobileNative: g.isMobileNative,
                        experimentService: g.experimentService,
                        billingData: e
                    }),
                    limit: {
                        type: "cumulative",
                        current: t,
                        total: "unlimited"
                    },
                    trialability: S ? "preferred" : "none"
                };
                return "unknown" === f ? {
                    type: "unavailable",
                    limit: {
                        type: "cumulative",
                        current: t,
                        total: h
                    },
                    upsell: k
                } : t + f <= h ? {
                    type: "available",
                    limit: {
                        type: "cumulative",
                        current: t,
                        total: h
                    },
                    upsell: k,
                    expiry: void 0
                } : n + f <= y ? {
                    type: "available",
                    limit: {
                        type: "cumulative",
                        current: t + n,
                        total: h + y
                    },
                    upsell: k,
                    expiry: void 0
                } : {
                    type: "unavailable",
                    limit: {
                        type: "cumulative",
                        current: t,
                        total: h
                    },
                    upsell: k
                }
            }

            function a(e) {
                let {
                    actor: t,
                    billingData: n,
                    data: {
                        spaceUsage: r
                    }
                } = e, o = {
                    type: "cumulative",
                    current: r,
                    total: "unlimited"
                }, a = {
                    type: "product",
                    limit: o,
                    product: "business",
                    trialability: "none"
                }, s = {
                    type: "product",
                    limit: o,
                    product: "ai",
                    trialability: "none"
                };
                if (t.isAdminActor) return {
                    type: "available",
                    limit: o,
                    expiry: void 0
                };
                let l = (0, i(192159).AI)(n),
                    u = (0, i(192159).eh)(n, "ai"),
                    d = (0, i(192159).eh)(n, "personal"),
                    c = {
                        type: "cumulative",
                        current: r,
                        total: 0
                    };
                if ((0, i(192159).N8)(n))
                    if ((0, i(262166).rV)(l, "business") && (u || (0, i(192159).PB)(n))) return {
                        type: "available",
                        limit: o,
                        expiry: void 0
                    };
                    else if ((0, i(262166).rV)(l, "business")) return {
                    type: "unavailable",
                    limit: c,
                    upsell: s
                };
                else return {
                    type: "unavailable",
                    limit: c,
                    upsell: a
                };
                if ((0, i(262166).rV)(l, "business") || (0, i(192159).eh)(n, "ai")) return {
                    type: "available",
                    limit: o,
                    expiry: void 0
                };
                if (!(0, i(192159).YF)(n)) return {
                    type: "unavailable",
                    limit: c,
                    upsell: a
                };
                if (d && u) return {
                    type: "available",
                    limit: o,
                    expiry: void 0
                };
                if (d) return {
                    type: "unavailable",
                    limit: c,
                    upsell: s
                };
                else if (u) return {
                    type: "unavailable",
                    limit: c,
                    upsell: {
                        type: "product",
                        limit: o,
                        product: "personal",
                        trialability: "none"
                    }
                };
                else return {
                    type: "unavailable",
                    limit: c,
                    upsell: a
                }
            }

            function s(e) {
                let {
                    billingData: t,
                    space: n,
                    config: r,
                    numMembers: o
                } = e;
                return !r || (0, i(192159).N8)(e.billingData) ? {
                    spaceLimit: 0,
                    userLimit: 0,
                    userPromotionalLimit: 0
                } : {
                    spaceLimit: function({
                        billingData: e,
                        space: t,
                        config: n,
                        numMembers: r
                    }) {
                        let {
                            baseGrant: o,
                            studentGrant: a,
                            grant032023: s,
                            maxAllowance: l,
                            studentGitHubGrant: u
                        } = n;
                        if ((0, i(192159).eh)(e, "student")) {
                            let e = i(774123).ji(n, a, 1);
                            return i(774123).Yg({
                                space: t,
                                grantId: i(774123).Rs
                            }) && (e += i(774123).ji(n, u, 1)), e
                        }
                        let d = i(774123).ji(n, o, r),
                            c = l.paid;
                        ["free", "personal"].includes((0, i(192159).AI)(e)) && (c = l.free);
                        let p = Math.min(d, c);
                        return i(774123).Yg({
                            space: t,
                            grantId: i(774123).jM
                        }) && (p += i(774123).ji(n, s, r)), p
                    }({
                        billingData: t,
                        space: n,
                        config: r,
                        numMembers: o
                    }),
                    userLimit: function({
                        config: e,
                        numMembers: t
                    }) {
                        let i = e.userGrant;
                        return 1 === t ? i.singlePlayerAmount : i.multiplayerAmount
                    }({
                        config: r,
                        numMembers: o
                    }),
                    userPromotionalLimit: 0
                }
            }

            function l({
                isMobileNative: e,
                billingData: t
            }) {
                return (0, i(192159).N8)(t) || e && (!(0, i(192159).oD)(t) || (0, i(192159).et)(t)) ? "ai" : "business"
            }

            function u(e) {
                return (0, i(192159).qV)(e).isRecurring || (0, i(192159).hV)(e)
            }

            function d(e) {
                return Object.values(e.perSource).reduce((e, t) => e + t.usageTotal, 0)
            }

            function c(e) {
                return Object.values(e.perSource).reduce((e, t) => e + t.limit, 0)
            }

            function p(e, t) {
                let {
                    actor: n,
                    billingData: r,
                    data: {
                        spaceId: o,
                        spaceUsage: a,
                        spaceLimit: s,
                        totalCreditBalance: l,
                        creditsInOverage: d,
                        overageLimit: c
                    },
                    amount: p
                } = t, m = "unknown" === p ? 1 : p, f = {
                    type: "cumulative",
                    current: a,
                    total: s ? ? 0
                }, _ = {
                    type: "cumulative",
                    current: a,
                    total: 0
                }, g = {
                    type: "cumulative",
                    current: a,
                    total: "unlimited"
                }, v = {
                    type: "product",
                    limit: f,
                    product: function(e) {
                        let {
                            isMobileNative: t,
                            billingData: n
                        } = e, r = (0, i(192159).AI)(n);
                        if ((0, i(192159).N8)(n))
                            if ((0, i(192159).hV)(n)) return "ai_credit_pack";
                            else if ((0, i(262166).rV)(r, "business")) return "ai";
                        else return "business";
                        if ((0, i(262166).rV)(r, "business")) return (0, i(192159).TB)(n) && (0, i(722371).Xk)(["business", "enterprise"], r) && (0, i(192159).N)(n).includes(r) ? r : "ai_credit_pack";
                        if (!(t || (0, i(192159).YF)(n))) return "business";
                        if ((0, i(192159).eh)(n, "personal") && (0, i(192159).eh)(n, "ai")) return "ai_credit_pack";
                        if ((0, i(192159).eh)(n, "personal")) return "ai";
                        else if ((0, i(192159).eh)(n, "ai")) return "personal";
                        else return "ai"
                    }({
                        isMobileNative: e.isMobileNative,
                        billingData: r
                    }),
                    trialability: "none"
                };
                if (null != n && n.isAdminActor) return {
                    type: "available",
                    limit: g,
                    expiry: void 0
                };
                if (void 0 === s)
                    if (u(r)) return {
                        type: "available",
                        limit: g,
                        expiry: void 0
                    };
                    else return {
                        type: "unavailable",
                        limit: _,
                        upsell: {
                            type: "none"
                        }
                    };
                let h = a + m > s ? {
                        type: "unavailable",
                        limit: f,
                        upsell: v
                    } : {
                        type: "available",
                        limit: f,
                        upsell: v,
                        expiry: void 0
                    },
                    y = {
                        type: "unavailable",
                        limit: _,
                        upsell: v
                    },
                    b = (0, i(192159).AI)(r);
                return (0, i(192159).ju)(r) ? e.experimentService.checkGate({
                    gateName: "usage_based_pricing_pfa_checks_purchased_credits_enabled",
                    actor: i(810016).S,
                    customIDs: {
                        spaceId: o
                    }
                }) ? function(e) {
                    let {
                        billingData: t,
                        spaceUsage: n,
                        spaceLimit: r,
                        totalCreditBalance: o,
                        creditsInOverage: a,
                        overageLimit: s,
                        amount: l
                    } = e, u = {
                        type: "cumulative",
                        current: n,
                        total: "unlimited" === s ? "unlimited" : r + s
                    }, d = "product" === e.upsell.type ? { ...e.upsell,
                        limit: u
                    } : e.upsell;
                    return (0, i(192159).hV)(t) ? o >= l || "unlimited" === s || s - a >= l - o ? {
                        type: "available",
                        limit: u,
                        upsell: d,
                        expiry: void 0
                    } : {
                        type: "unavailable",
                        limit: u,
                        upsell: d
                    } : {
                        type: "unavailable",
                        limit: {
                            type: "cumulative",
                            current: n,
                            total: 0
                        },
                        upsell: d
                    }
                }({
                    billingData: r,
                    spaceUsage: a,
                    spaceLimit: s,
                    totalCreditBalance: l,
                    creditsInOverage: d,
                    overageLimit: c,
                    amount: m,
                    upsell: v
                }) : (0, i(192159).hV)(r) ? h : y : (0, i(262166).rV)(b, "business") ? h : (0, i(192159).YF)(r) && (0, i(192159).eh)(r, "personal") ? (0, i(192159).eh)(r, "ai") ? { ...h,
                    upsell: {
                        type: "none"
                    }
                } : y : y
            }
        },
        152396: (e, t, i) => {
            i.d(t, {
                u: () => n
            });

            function n(e) {
                let t = e.isCopyIndicator(),
                    n = t && !!(i(941701).transactionQueue.isPendingTransactionForRecord(e.pointer) || i(817525).A.state[e.pointer.id]);
                return {
                    isCopyIndicator: t,
                    shouldShowAsLoadingSpinner: n
                }
            }
        },
        159065: (e, t, i) => {
            i.d(t, {
                $O: () => n,
                En: () => o,
                nH: () => r
            });
            let n = Number.MAX_SAFE_INTEGER;

            function r(e) {
                return (0, i(758654).FB)(e)
            }
            let o = [i(11448).yx.Status, i(11448).yx.Priority, i(11448).yx.Assign]
        },
        165664: (e, t, i) => {
            function n(e) {
                return !!(r(e) || o(e))
            }

            function r(e) {
                return !!(0, i(722371).Xk)(i(994234).EC, e)
            }

            function o(e) {
                return !!(0, i(722371).Xk)(i(595584).mR, e)
            }
            i.d(t, {
                FX: () => n,
                PH: () => o,
                ZE: () => r
            })
        },
        166654: (e, t, i) => {
            var n;
            i.d(t, {
                R: () => r,
                m: () => o
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            let r = ((n = {})[n.Frame = 0] = "Frame", n[n.PeekView = 1] = "PeekView", n[n.InAppTemplatePreview = 2] = "InAppTemplatePreview", n[n.InAppMarketplaceTemplatePreview = 3] = "InAppMarketplaceTemplatePreview", n[n.InPageSnapShot = 4] = "InPageSnapShot", n[n.CollectionViewBlockFullScreen = 5] = "CollectionViewBlockFullScreen", n[n.CollectionPageViewFullScreen = 6] = "CollectionPageViewFullScreen", n[n.CollectionPageView = 7] = "CollectionPageView", n[n.SitePreview = 8] = "SitePreview", n[n.Form = 9] = "Form", n[n.DraftPostInInlineComposer = 10] = "DraftPostInInlineComposer", n[n.PostInFullPageOrPeek = 11] = "PostInFullPageOrPeek", n[n.DraftPostInFullPageComposer = 12] = "DraftPostInFullPageComposer", n[n.PageInFeed = 13] = "PageInFeed", n[n.WorkflowInstructionsInInlineComposer = 14] = "WorkflowInstructionsInInlineComposer", n),
                o = new Set([r.DraftPostInInlineComposer, r.PageInFeed])
        },
        171231: (e, t, i) => {
            i.d(t, {
                AQ: () => m,
                AX: () => o,
                Fl: () => g,
                GU: () => r,
                Pt: () => v,
                Vf: () => c,
                ZL: () => h,
                iu: () => b,
                lu: () => _,
                qe: () => d,
                rP: () => y,
                st: () => n,
                sx: () => u,
                tJ: () => l,
                xz: () => p,
                yy: () => s,
                zt: () => a
            });
            let n = "teamSidebar",
                r = "teamBrowserSearch",
                o = "teamBrowserUnjoinedTeams",
                a = "teamBrowserJoinedTeams",
                s = "publicPageTemplateIncludes",
                l = "agentsMyAgents",
                u = "agentsFavorites",
                d = "agentsFromWorkspace",
                c = "agentsSearch",
                p = -1,
                m = [5, 10, 15, 20, -1];

            function f(e) {
                return !!(0, i(722371).Xk)(i(485890)._l, e)
            }

            function _(e) {
                let {
                    items: t
                } = e, i = g(e.limit);
                return t.length > i ? t.slice(0, i) : t
            }

            function g(e) {
                return e === p ? 100 : e
            }

            function v(e) {
                let {
                    block: t,
                    query: i,
                    getRecordModel: n,
                    userTimeZone: r,
                    intl: o
                } = e;
                if (!i) return !0;
                let a = null == t ? void 0 : t.getRenderTitle({
                    getRecordModel: n,
                    userTimeZone: r,
                    intl: o
                });
                return !!a && a.toLowerCase().indexOf(i.trim().toLowerCase()) >= 0
            }

            function h(e) {
                switch (e) {
                    case "bookmarks":
                    case "shared":
                    case "agents":
                    case "meetings_today":
                    case "myMeetings":
                    case l:
                    case u:
                    case d:
                    case c:
                    case "notion_apps":
                    case "recents":
                        return !0;
                    case "workspace":
                    case "private":
                    case "team":
                    case "teamSidebar":
                    case "teamBrowserSearch":
                    case "teamBrowserUnjoinedTeams":
                    case "teamBrowserJoinedTeams":
                    case "publicPageTemplateIncludes":
                        return !1;
                    default:
                        (0, i(722371).HB)(e)
                }
            }

            function y({
                spaceView: e,
                sidebarSection: t,
                type: n,
                isMultiMemberSpace: r
            }) {
                var o, a, s, l, u;
                let d = (0, i(190566).Yw)(n) ? null == t ? void 0 : t.getProperties() : void 0,
                    c = null == e || null == (o = e.getSettings()) ? void 0 : o.sidebar_section_menu,
                    m = f(n) ? null == c || null == (a = c.sortOption) ? void 0 : a[n] : void 0,
                    _ = f(n) ? null == c || null == (s = c.truncationLimit) ? void 0 : s[n] : void 0;
                return {
                    sortOption: (null == d ? void 0 : d.sortOption) ? ? m ? ? function(e) {
                        switch (e) {
                            case "private":
                            case "shared":
                            case "list":
                            case "myMeetings":
                            case "recents":
                            case "meetings_today":
                            case "workspace":
                                return "lastEdited";
                            case "agents":
                            case "notion_apps":
                            case "teamspaces":
                            case "favorites":
                                return "manual";
                            default:
                                return (0, i(722371).HB)(e), "lastEdited"
                        }
                    }(n),
                    truncationLimit: g((null == d ? void 0 : d.truncationLimit) ? ? _ ? ? (l = r, "favorites" === (u = n) ? p : "myMeetings" === u ? 100 : l ? i(41664).Ji : i(41664).GL))
                }
            }

            function b(e) {
                switch (e) {
                    case "private":
                    case "shared":
                    case "favorites":
                    case "recents":
                    case "teamspaces":
                        return !0;
                    case "list":
                    case "myMeetings":
                    case "meetings_today":
                    case "workspace":
                    case "agents":
                    case "notion_apps":
                        return !1;
                    default:
                        (0, i(722371).HB)(e)
                }
            }
        },
        182718: (e, t, i) => {
            i.d(t, {
                bJ: () => d,
                nl: () => r().n,
                zD: () => s
            });
            var n = i(296540),
                r = () => i(423291),
                o = i(474848);
            let a = {},
                s = n.forwardRef(function(e, t) {
                    let r = (0, i(533992).v3)(),
                        s = (0, n.useRef)(!0),
                        u = (0, i(682985).uB)(e.store, i(828898).I),
                        d = (0, n.useRef)(null),
                        y = (0, n.useRef)(null),
                        b = (0, n.useRef)(null),
                        x = (0, n.useRef)(void 0),
                        w = (0, n.useRef)(!1),
                        P = (0, n.useRef)(!1),
                        I = (0, n.useRef)(e.open),
                        C = (0, n.useRef)({
                            hidesMobileNativeBottomBar: e.hidesMobileNativeBottomBar,
                            popupType: e.popupType,
                            preventSlideUpTransition: e.preventSlideUpTransition,
                            disableMouseCapture: e.disableMouseCapture,
                            onDismiss: e.onDismiss
                        }),
                        [T, E, D] = (0, i(682985).K8)(() => {
                            let t = u.state;
                            return [t.repositionedPlacement, t.open, k(t, e.placementToOrigin)]
                        }, [u, e.placementToOrigin]),
                        B = (0, i(682985).K8)(() => u.state.originRect, [u]),
                        O = (0, n.useMemo)(() => {
                            var t, n;
                            let r;
                            return t = B, r = (n = e.enableRounding) ? Math.round(t.left) : t.left, t && i(195304).Lq(t) ? { ...(0, i(619157).A1)() ? {
                                    insetInlineEnd: r
                                } : {
                                    insetInlineStart: r
                                },
                                top: n ? Math.round(t.top) : t.top
                            } : {}
                        }, [B, e.enableRounding]),
                        U = (0, n.useMemo)(() => {
                            var e, t;
                            let i;
                            return e = B.width, t = B.height, i = {}, (e || t) && (i.width = Math.round(e), i.height = Math.round(t)), i
                        }, [B.width, B.height]),
                        R = M(e.popupType, e.disableDarkOverlayBackground),
                        N = (0, n.useMemo)(() => ({
                            open: e.open,
                            ariaPopupType: e.ariaPopupType ? ? "dialog"
                        }), [e.open, e.ariaPopupType]),
                        L = (0, i(75272).I)(),
                        j = (0, n.useCallback)(() => {
                            if (e.originRect) return e.originRect;
                            if (P.current) {
                                let t = c(b.current);
                                if (t && t instanceof Element) {
                                    let i = t.getBoundingClientRect(),
                                        n = e.originRectTransform;
                                    return (null == n ? void 0 : n(i)) ? ? i
                                }
                            }
                        }, [e.originRect, e.originRectTransform]),
                        $ = (0, n.useCallback)(() => {
                            let e = j();
                            e && u.setState({ ...u.state,
                                originRect: e
                            })
                        }, [u, j]),
                        q = (0, n.useCallback)(() => {
                            if (!d.current) return;
                            let {
                                originRect: t
                            } = u.state, n = new DOMRect(d.current.offsetLeft, d.current.offsetTop, d.current.offsetWidth, d.current.offsetHeight);
                            e.open && t && (e.forceInitialInbound || n.height > 0) && i(127057).B({
                                store: u,
                                placementToOrigin: m(e.placementToOrigin),
                                alignmentToOrigin: f(e.alignmentToOrigin),
                                originRect: t,
                                popupRect: n,
                                repositionedPlacement: u.state.repositionedPlacement,
                                disableFlippingPlacement: e.disableFlippingPlacement ? ? !1,
                                popupRectBottomPadding: e.popupRectBottomPadding,
                                viewportAdditionalBottomPadding: i(707785).A.keyboardHeight(),
                                originGap: e.originGap,
                                viewportPadding: e.viewportPadding
                            })
                        }, [u, e.open, e.forceInitialInbound, e.placementToOrigin, e.alignmentToOrigin, e.disableFlippingPlacement, e.popupRectBottomPadding, e.originGap, e.viewportPadding]);
                    (0, n.useEffect)(() => {
                        $(), q()
                    }, [$, q, e.originRect]);
                    let z = (0, n.useCallback)(() => {
                            w.current || q()
                        }, [q]),
                        V = (0, n.useMemo)(() => i(381453).nF(z, 10), [z]),
                        G = (0, n.useCallback)(t => {
                            d.current = t, t ? (x.current || e.disableMutationObserver || (x.current = new MutationObserver(V), x.current.observe(t, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })), q()) : x.current && (x.current.disconnect(), x.current = void 0)
                        }, [V, q, e.disableMutationObserver]),
                        W = (0, n.useCallback)(() => {
                            w.current = !0
                        }, []),
                        {
                            onClosed: K,
                            onAnimationEnd: H
                        } = e,
                        X = (0, n.useCallback)(t => {
                            w.current = !1, e.open || (p(u), null == K || K()), H && H(t), q(), S(r, e.open)
                        }, [e.open, K, H, q, r, u]),
                        [Y, J] = (0, n.useMemo)(() => {
                            let t = () => {
                                e.open && ($(), q())
                            };
                            return [() => {
                                setTimeout(t, 10)
                            }, i(381453).sg(t, 10)]
                        }, [q, $, e.open]),
                        Q = (0, n.useMemo)(() => i(381453).sg(() => L("Popup", "Popup/handleEstimatedKeyboardWebViewOverlapChangeDebounced"), 10), [L]);
                    (0, n.useImperativeHandle)(t, () => c(b.current)), (0, n.useEffect)(() => {
                        C.current = {
                            hidesMobileNativeBottomBar: e.hidesMobileNativeBottomBar,
                            popupType: e.popupType,
                            preventSlideUpTransition: e.preventSlideUpTransition,
                            disableMouseCapture: e.disableMouseCapture,
                            onDismiss: e.onDismiss
                        }
                    }, [e.hidesMobileNativeBottomBar, e.popupType, e.preventSlideUpTransition, e.disableMouseCapture, e.onDismiss]), (0, n.useEffect)(() => {
                        let t = !I.current && e.open,
                            n = I.current && !e.open;
                        t && !_(e.popupType) && $(), !e.preventPointerEvents && (t && (i(630121).A.state.openPopups.add(C), i(630121).A.emit()), n && (i(630121).A.state.openPopups.delete(C), i(630121).A.emit()))
                    }, [$, e.disableMouseCapture, e.hidesMobileNativeBottomBar, e.onDismiss, e.open, e.popupType, e.preventPointerEvents, e.preventSlideUpTransition]), (0, n.useEffect)(() => {
                        e.open && !u.state.open && u.setState({ ...u.state,
                            open: !0
                        })
                    }, [e.open, u]), (0, i(383953).l)(() => {
                        P.current = !0
                    }), (0, n.useEffect)(() => {
                        s.current && e.open && (_(e.popupType) || $(), u.setState({ ...u.state,
                            open: !0
                        }), i(630121).A.state.openPopups.add(C), i(630121).A.emit()), s.current = !1
                    }), (0, n.useEffect)(() => {
                        (function(e) {
                            let {
                                popupType: t,
                                preventScaleTransition: i,
                                preventOpacityTransition: n,
                                preventSlideUpTransition: r
                            } = e;
                            return !_(t) && i && n || _(t) && r
                        })({
                            popupType: e.popupType,
                            preventScaleTransition: e.preventScaleTransition,
                            preventOpacityTransition: e.preventOpacityTransition,
                            preventSlideUpTransition: e.preventSlideUpTransition
                        }) && (!e.open && u.state.open && p(u), I.current && S(r, e.open))
                    }, [r, e.open, e.popupType, e.preventScaleTransition, e.preventOpacityTransition, e.preventSlideUpTransition, u]);
                    let {
                        forceRemeasureStore: Z,
                        enableOutsideClickDismiss: ee,
                        onDismiss: et
                    } = e;
                    return (0, n.useEffect)(() => {
                        if (!e.open) return;
                        i(986939).A.isMobile ? i(707785).A.addListener(Q) : window.addEventListener("resize", J);
                        let t = t => {
                            if (!e.open || !ee) return;
                            let i = y.current,
                                n = t.target;
                            i && n && (i === n || i.contains(n) || null == et || et(t))
                        };
                        return window.addEventListener("click", t), window.addEventListener("contextmenu", t), null == Z || Z.addListener(Y), () => {
                            i(707785).A.removeListener(Q), window.removeEventListener("resize", J), window.removeEventListener("click", t), window.removeEventListener("contextmenu", t), null == Z || Z.removeListener(Y)
                        }
                    }, [ee, et, e.open, Z, T, Y, Q, J]), (0, i(637030).X)(() => {
                        e.preventPointerEvents || (i(630121).A.state.openPopups.delete(C), i(630121).A.emit())
                    }), (0, n.useEffect)(() => {
                        e.originRect && u.setState({ ...u.state,
                            originRect: e.originRect
                        })
                    }, [e.originRect, u]), (0, n.useEffect)(() => {
                        I.current = e.open
                    }, [e.open]), (0, o.jsx)(i(310335).A, {
                        capture: !!(e.open && e.disableContentScroll),
                        preventType: i(644154).A.All,
                        children: (0, o.jsx)(i(114596).O, {
                            open: E,
                            trapFocus: e.trapFocus,
                            origin: function() {
                                if (e.children) return (0, o.jsx)("div", {
                                    ref: b,
                                    ...{
                                        0: {
                                            className: "xjp7ctv"
                                        },
                                        1: {
                                            className: "xjp7ctv popup-origin-wrapper"
                                        }
                                    }[0 | !!r.device.isIOS],
                                    "data-popup-origin": "true",
                                    children: e.suppressOriginContext ? e.children ? ? void 0 : (0, o.jsx)(i(660343).k.Provider, {
                                        value: N,
                                        children: e.children
                                    })
                                })
                            }(),
                            zIndex: e.overlayContainerZIndex,
                            children: (0, o.jsx)(i(871709).k.Provider, {
                                value: g(e.popupType) ? a : void 0,
                                children: _(e.popupType) ? (0, o.jsx)(F, { ...e,
                                    handleAnimatedAnimationStart: W,
                                    handleAnimatedAnimationEnd: X
                                }) : g(e.popupType) ? (0, o.jsx)(i(675674).n, { ...e,
                                    initialState: e.bottomSheetInitialState ? ? "full"
                                }) : function() {
                                    if (e.hideInsteadOfFlip && void 0 !== u.state.repositionedPlacement) return null;
                                    let t = f(e.alignmentToOrigin);
                                    return (0, o.jsx)(i(815556).L, {
                                        keepFocus: e.keepFocus,
                                        preventCaptureEsc: e.preventCaptureEsc,
                                        onDismiss: e.onDismiss,
                                        children: n => (0, o.jsxs)("div", { ...n,
                                            ref: y,
                                            children: [e.open && !e.disableMouseCapture ? (0, o.jsx)("div", { ...i(952687).A.props(R, void 0 !== e.className && {
                                                    $$css: !0,
                                                    className: e.className
                                                }),
                                                onClick: t => {
                                                    var i, n;
                                                    return i = t, void((n = e.onDismiss) && n(i))
                                                },
                                                onContextMenu: e.onDismiss,
                                                "aria-hidden": !0,
                                                tabIndex: -1
                                            }) : void 0, (0, o.jsx)(i(75190).A, {
                                                style: [v.base, O, e.alignBoxStyle],
                                                origin: (0, o.jsx)("div", {
                                                    style: U
                                                }),
                                                placement: D,
                                                alignment: t,
                                                childrenWrapStyle: e.open && !e.preventPointerEvents ? h.pointerEventsAuto : h.pointerEventsNone,
                                                children: (0, o.jsx)(i(654979).A, { ...e,
                                                    tag: l,
                                                    visible: e.open,
                                                    config: e.animationConfig,
                                                    animate: function(e) {
                                                        let {
                                                            open: t,
                                                            preventScaleTransition: i,
                                                            preventOpacityTransition: n
                                                        } = e, r = {};
                                                        return i || (r.scaleX = t ? 1 : .96, r.scaleY = t ? 1 : .96), n || (r.opacity = +!!t), r
                                                    }({
                                                        open: !0,
                                                        preventScaleTransition: e.preventScaleTransition,
                                                        preventOpacityTransition: e.preventOpacityTransition
                                                    }),
                                                    initial: A({
                                                        popupType: e.popupType,
                                                        preventOpacityTransition: e.preventOpacityTransition,
                                                        preventScaleTransition: e.preventScaleTransition
                                                    }),
                                                    exit: A({
                                                        popupType: e.popupType,
                                                        preventOpacityTransition: e.preventOpacityTransition,
                                                        preventScaleTransition: e.preventScaleTransition
                                                    }),
                                                    onAnimationStart: W,
                                                    onAnimationEnd: X,
                                                    popupStore: u,
                                                    originRect: B,
                                                    handlePopupMount: G,
                                                    style: void 0,
                                                    popupStyle: e.style
                                                })
                                            })]
                                        })
                                    })
                                }()
                            })
                        })
                    })
                }),
                l = n.forwardRef(function(e, t) {
                    var r;
                    let {
                        offsetInlineStart: a,
                        offsetY: s,
                        resolvedPlacement: l
                    } = (0, i(682985).K8)(() => {
                        let {
                            offsetInlineStart: t,
                            offsetY: i
                        } = e.popupStore.state;
                        return {
                            offsetInlineStart: t,
                            offsetY: i,
                            resolvedPlacement: k(e.popupStore.state, e.placementToOrigin)
                        }
                    }, [e.popupStore, e.placementToOrigin]), d = (0, n.useMemo)(() => (function(e) {
                        let {
                            offsetInlineStart: t,
                            offsetY: i,
                            placementToOrigin: n,
                            alignmentToOriginFromArgs: r,
                            originGap: o
                        } = e, a = f(r), s = u[a], l = u[a], d = o || 0;
                        return [U, "top" === n && R(s, t, d - i), "bottom" === n && N(s, t, d + i), "left" === n && L(l, d - t, i), "right" === n && j(l, d + t, i)]
                    })({
                        offsetInlineStart: a,
                        offsetY: s,
                        placementToOrigin: l,
                        alignmentToOriginFromArgs: e.alignmentToOrigin,
                        originGap: e.originGap
                    }), [a, s, l, e.alignmentToOrigin, e.originGap]), c = (0, n.useMemo)(() => (function(e) {
                        let {
                            originRect: t,
                            borderRadius: n,
                            sameWidthAsOrigin: r,
                            isFullWidthOnMobile: o
                        } = e, a = {};
                        return void 0 !== n && (a.borderRadius = n), r && t && (a.width = Math.round(t.width)), o && i(986939).A.isMobile && (a.minWidth = a.maxWidth), a
                    })({
                        originRect: e.originRect,
                        borderRadius: e.borderRadius,
                        sameWidthAsOrigin: e.sameWidthAsOrigin,
                        isFullWidthOnMobile: e.isFullWidthOnMobile
                    }), [e.originRect, e.borderRadius, e.sameWidthAsOrigin, e.isFullWidthOnMobile]), p = null == (r = e.content) ? void 0 : r.call(e), m = (0, n.useMemo)(() => ({
                        ariaPopupType: e.ariaPopupType
                    }), [e.ariaPopupType]), _ = void 0 === e.ariaPopupType || "dialog" === e.ariaPopupType;
                    return (0, o.jsx)("div", { ...i(952687).A.props(d, e.style),
                        ref: t,
                        children: (0, o.jsx)("div", {
                            role: _ ? "dialog" : void 0,
                            "aria-label": e.ariaLabel,
                            "aria-labelledby": e.ariaLabelledBy,
                            "aria-describedby": e.ariaDescribedBy,
                            "aria-modal": !!_ && !!e.trapFocus || void 0,
                            ...i(952687).A.props(y.base, e.isWaxPaper ? y.baseWaxPaper : y.baseRegular, e.lightBoxShadow ? y.lightBoxShadow : y.darkBoxShadow, c, e.popupStyle, e.popupWrapStyle, void 0 !== e.popupClassName && {
                                $$css: !0,
                                className: e.popupClassName
                            }),
                            ref: e.handlePopupMount,
                            children: (0, o.jsx)(i(707580).F.Provider, {
                                value: m,
                                children: p
                            })
                        })
                    })
                }),
                u = {
                    start: "0%",
                    center: "50%",
                    end: "100%"
                },
                d = 414;

            function c(e) {
                let t = null == e ? void 0 : e.firstElementChild;
                return null != t && t.getAttribute("data-popup-origin") ? c(t) : t ? ? null
            }

            function p(e) {
                e.setState({ ...e.state,
                    open: !1,
                    repositionedPlacement: void 0
                })
            }

            function m(e) {
                return i(627179).pN(e) ? "bottom" : e
            }

            function f(e) {
                return i(627179).pN(e) ? "start" : e
            }

            function _(e) {
                return e === r().n.SlideUp
            }

            function g(e) {
                return e === r().n.BottomSheet
            }
            let v = {
                    base: {
                        kVAEAm: "xixxii4",
                        kfzvcC: "x47corl",
                        $$css: !0
                    }
                },
                h = {
                    pointerEventsAuto: {
                        kfzvcC: "x67bb7w",
                        $$css: !0
                    },
                    pointerEventsNone: {
                        kfzvcC: "x47corl",
                        $$css: !0
                    }
                },
                y = {
                    base: {
                        krdFHd: "x16qb05n",
                        kfmiAY: "xi7iut8",
                        kT0f0o: "x1dm3dyd",
                        kVL7Gh: "x1pv694p",
                        kVAEAm: "x1n2onr6",
                        ks0D6T: "xvv7f4i",
                        kI3sdo: "xe0qb83",
                        kXHlph: "x6ikm8r",
                        kORKVm: "x10wlt62",
                        $$css: !0
                    },
                    baseRegular: {
                        kC7eKd: "x1mmz80m",
                        k6WDB: "x1t853zo",
                        keRtuK: "xs1r7gh",
                        $$css: !0
                    },
                    baseWaxPaper: {
                        kC7eKd: "x1iypph2",
                        k6WDB: "x1qb2erx",
                        keRtuK: "xoy38ig",
                        $$css: !0
                    },
                    lightBoxShadow: {
                        kGVxlE: "xzzkygx",
                        $$css: !0
                    },
                    darkBoxShadow: {
                        kGVxlE: "x4ma8is",
                        $$css: !0
                    }
                },
                b = {
                    kVAEAm: "x10l6tqk",
                    kLqNvP: "x1o0tod",
                    kt4wiu: "xtijo5x",
                    kbCHJM: "",
                    kCIrl2: "",
                    kC7eKd: "x1mmz80m",
                    kGVxlE: "x4ma8is",
                    $$css: !0
                };

            function S(e, t) {
                if (t) {
                    var i;
                    null == (i = e.mobileNative) || i.markTransitionReady({
                        environment: e,
                        type: "modal"
                    })
                }
            }

            function k(e, t) {
                return void 0 !== e.repositionedPlacement ? e.repositionedPlacement : m(t)
            }
            let x = {
                    kVAEAm: "x10l6tqk",
                    k87sOh: "x13vifvy",
                    kLqNvP: "x1o0tod",
                    kzqmXN: "xn9wirt",
                    kZKoxP: "xn4qswa",
                    kXHlph: "x6ikm8r",
                    kORKVm: "x10wlt62",
                    $$css: !0
                },
                w = {
                    kfzvcC: "x67bb7w",
                    $$css: !0
                },
                P = {
                    kfzvcC: "x47corl",
                    $$css: !0
                },
                I = {
                    kVAEAm: "x10l6tqk",
                    k87sOh: "x13vifvy",
                    kLqNvP: "x1o0tod",
                    krVfgx: "x1ey2m1c",
                    kt4wiu: "xtijo5x",
                    kbCHJM: null,
                    kCIrl2: null,
                    $$css: !0
                },
                C = {
                    kC7eKd: "x1dxd6zf",
                    $$css: !0
                },
                T = {
                    kVAEAm: "xixxii4",
                    k87sOh: "x13vifvy",
                    kLqNvP: "x1o0tod",
                    kbCHJM: null,
                    kCIrl2: null,
                    kzqmXN: "xn9wirt",
                    kZKoxP: "x1dr59a3",
                    $$css: !0
                };

            function M(e, t) {
                return (0, n.useMemo)(() => [_(e) ? I : T, _(e) && !t && C], [e, t])
            }

            function A(e) {
                let {
                    popupType: t,
                    preventOpacityTransition: i,
                    preventScaleTransition: n
                } = e, r = {};
                return i || (r.opacity = 0), n || _(t) || (r.scaleX = .96, r.scaleY = .96), r
            }
            let E = {
                    kXwgrk: "xdt5ytf",
                    k3nNDw: "xf6vlc6",
                    kbCHJM: "",
                    kCIrl2: "",
                    $$css: !0
                },
                D = {
                    kXwgrk: "x3ieub6",
                    k3nNDw: "xf6vlc6",
                    kbCHJM: "",
                    kCIrl2: "",
                    $$css: !0
                },
                B = {
                    kXwgrk: "x1q0g3np",
                    k3nNDw: "xf6vlc6",
                    kbCHJM: "",
                    kCIrl2: "",
                    $$css: !0
                },
                O = {
                    kXwgrk: "x15zctf7",
                    k3nNDw: "xf6vlc6",
                    kbCHJM: "",
                    kCIrl2: "",
                    $$css: !0
                },
                U = {
                    k1xSpc: "x78zum5",
                    kGNEyG: "x6s0dn4",
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                R = (e, t, i) => {
                    let n;
                    return [E, {
                        kLqNvP: null != t ? "x1lxsm33" : t,
                        krVfgx: null != i ? "x1nqzi6q" : i,
                        $$css: !0
                    }, {
                        "--x-transformOrigin": "number" == typeof(n = `${e} bottom`) ? n + "px" : null != n ? n : void 0,
                        "--x-insetInlineStart": "number" == typeof t ? t + "px" : null != t ? t : void 0,
                        "--x-bottom": "number" == typeof i ? i + "px" : null != i ? i : void 0
                    }]
                },
                N = (e, t, i) => {
                    let n;
                    return [D, {
                        kLqNvP: null != t ? "x1lxsm33" : t,
                        k87sOh: null != i ? "xjbys53" : i,
                        $$css: !0
                    }, {
                        "--x-transformOrigin": "number" == typeof(n = `${e} top`) ? n + "px" : null != n ? n : void 0,
                        "--x-insetInlineStart": "number" == typeof t ? t + "px" : null != t ? t : void 0,
                        "--x-top": "number" == typeof i ? i + "px" : null != i ? i : void 0
                    }]
                },
                L = (e, t, i) => {
                    let n;
                    return [B, {
                        kt4wiu: null != t ? "xqxgn94" : t,
                        k87sOh: null != i ? "xjbys53" : i,
                        $$css: !0
                    }, {
                        "--x-transformOrigin": "number" == typeof(n = `${e} right`) ? n + "px" : null != n ? n : void 0,
                        "--x-insetInlineEnd": "number" == typeof t ? t + "px" : null != t ? t : void 0,
                        "--x-top": "number" == typeof i ? i + "px" : null != i ? i : void 0
                    }]
                },
                j = (e, t, i) => {
                    let n;
                    return [O, {
                        kLqNvP: null != t ? "x1lxsm33" : t,
                        k87sOh: null != i ? "xjbys53" : i,
                        $$css: !0
                    }, {
                        "--x-transformOrigin": "number" == typeof(n = `${e} left`) ? n + "px" : null != n ? n : void 0,
                        "--x-insetInlineStart": "number" == typeof t ? t + "px" : null != t ? t : void 0,
                        "--x-top": "number" == typeof i ? i + "px" : null != i ? i : void 0
                    }]
                };

            function F(e) {
                let t = (0, i(533992).v3)(),
                    {
                        open: r,
                        className: a
                    } = e,
                    s = void 0 === e.ariaPopupType || "dialog" === e.ariaPopupType,
                    {
                        animationStyle: l,
                        enterAnimationStyle: u,
                        exitAnimationStyle: c
                    } = {
                        animationStyle: {
                            translateY: "0vh"
                        },
                        enterAnimationStyle: {
                            translateY: "100vh"
                        },
                        exitAnimationStyle: {
                            translateY: "100vh"
                        }
                    },
                    p = M(e.popupType, e.disableDarkOverlayBackground),
                    m = (0, i(682985).K8)(() => (function(e, t) {
                        let {
                            environment: n,
                            forceFullScreenSlideUp: r,
                            isWideTabletWidth: o,
                            borderRadius: a
                        } = e, {
                            WindowSizeStore: s,
                            device: l
                        } = n, {
                            isTablet: u,
                            isAndroid: c,
                            isMobileNative: p
                        } = l, m = s.isPortrait(), f = i(707785).A.keyboardHeight(), _ = u && c && p && 0 === f ? s.getSafePaddingBottomPx(0) : 0, g = f + 20 + _, v = {
                            width: "100%",
                            maxHeight: `calc(var(--full-viewport-height) - ${f}px)`,
                            ...u && !r && {
                                maxWidth: d,
                                overflow: "hidden",
                                marginInlineStart: "auto",
                                marginInlineEnd: "auto",
                                borderRadius: a || 12,
                                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                                ...!m && {
                                    top: (0, i(616844).Y5)("top", i(515378).s1),
                                    bottom: g,
                                    ...o && {
                                        maxWidth: "60vw"
                                    }
                                },
                                ...m && {
                                    top: 0,
                                    bottom: g,
                                    maxHeight: "60vh",
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                    ...o && {
                                        maxWidth: "calc(100vw - 192px)"
                                    }
                                }
                            },
                            ...r && {
                                height: "100%"
                            }
                        };
                        return [(e => [b, {
                            krVfgx: null != e ? "x1nqzi6q" : e,
                            $$css: !0
                        }, {
                            "--x-bottom": "number" == typeof e ? e + "px" : null != e ? e : void 0
                        }])(f), t, v]
                    })({
                        environment: t,
                        forceFullScreenSlideUp: e.forceFullScreenSlideUp,
                        isWideTabletWidth: e.isWideTabletWidth,
                        borderRadius: e.borderRadius
                    }, e.style), [t, e.forceFullScreenSlideUp, e.isWideTabletWidth, e.style, e.borderRadius]),
                    f = (0, n.useCallback)(t => {
                        var i;
                        (i = e.onDismiss) && i(t)
                    }, [e.onDismiss]);
                return (0, o.jsx)(i(815556).L, {
                    keepFocus: e.keepFocus,
                    preventCaptureEsc: e.preventCaptureEsc,
                    onDismiss: e.onDismiss,
                    children: t => {
                        var n;
                        return (0, o.jsxs)("div", { ...t,
                            ...i(952687).A.props(x, void 0 !== r ? w : P, e.slideUpWrapStyle),
                            children: [(0, o.jsx)(i(654979).A, {
                                visible: r,
                                animate: {
                                    opacity: 1
                                },
                                initial: {
                                    opacity: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                onAnimationStart: e.handleAnimatedAnimationStart,
                                onAnimationEnd: e.handleAnimatedAnimationEnd,
                                forceCompositeLayer: !0,
                                ...i(952687).A.props(p),
                                onClick: f,
                                "aria-hidden": !0,
                                tabIndex: -1
                            }), (0, o.jsx)(i(654979).A, {
                                visible: r,
                                animate: l,
                                initial: e.preventSlideUpTransition ? l : u,
                                exit: e.preventSlideUpTransition ? l : c,
                                forceCompositeLayer: !0,
                                className: a,
                                role: s ? "dialog" : void 0,
                                "aria-label": e.ariaLabel,
                                "aria-labelledby": e.ariaLabelledBy,
                                "aria-describedby": e.ariaDescribedBy,
                                "aria-modal": !!s && !!e.trapFocus || void 0,
                                ...i(952687).A.props(m, void 0 !== a && {
                                    $$css: !0,
                                    className: a
                                }),
                                children: null == (n = e.content) ? void 0 : n.call(e)
                            })]
                        })
                    }
                })
            }
        },
        185995: (e, t, i) => {
            i.d(t, {
                default: () => n
            });
            let n = new(i(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                var n, r, o;
                if ((null == (n = (0, i(328765).S)()) ? void 0 : n.userId) !== void 0 && (null == (r = (0, i(328765).S)()) ? void 0 : r.userId) !== e.currentUser.id || !(null != (o = (0, i(328765).S)()) && o.canEdit())) return;
                let a = await e.api.callCellCompatibleApi({
                    eventName: "getCustomerOffersReceived",
                    environment: e,
                    data: {
                        spaceId: t
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: t
                    }
                });
                return "success" === a.type && (0, i(722371).EI)(a.data) ? a.data : void 0
            });
            i(202146).exposeDebugValue("ClaimedOffersStore", n)
        },
        187106: (e, t, i) => {
            i.d(t, {
                l: () => n
            });

            function n(e) {
                var t;
                return !i(986939).A.isMobile && !0 === (0, i(828560).XM)(e) && !(null != (t = e.getSettings()) && t.hide_meetings_tab)
            }
        },
        190159: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            let n = i(546605).Store.createValue(0)
        },
        192159: (e, t, i) => {
            i.d(t, {
                ek: () => k,
                qV: () => eU,
                Le: () => eR,
                Xu: () => K,
                o2: () => eA,
                $d: () => ed,
                ji: () => ec,
                cB: () => R,
                Oq: () => N,
                kQ: () => et,
                AW: () => er,
                N4: () => z,
                DS: () => eC,
                qd: () => eh,
                wj: () => eD,
                V9: () => ea,
                IF: () => h,
                KH: () => ee,
                k4: () => $,
                z1: () => W,
                Ue: () => q,
                pm: () => b,
                d$: () => es,
                gv: () => O,
                HI: () => eI,
                k_: () => eP,
                Rz: () => ey,
                q8: () => L,
                Ry: () => D,
                yB: () => U,
                AI: () => en,
                t_: () => eT,
                pK: () => T,
                i5: () => C,
                N: () => el,
                xz: () => I,
                YF: () => eb,
                et: () => eS,
                oD: () => A,
                Gm: () => ei,
                eh: () => eo,
                vA: () => P,
                di: () => ex,
                HY: () => E,
                bO: () => eM,
                $0: () => ek,
                N8: () => x,
                hV: () => eB,
                PB: () => w,
                Fq: () => B,
                TB: () => M,
                Qx: () => H,
                CF: () => em,
                IE: () => ef,
                xp: () => ep,
                HO: () => ev,
                OK: () => eu,
                Mr: () => e_,
                ju: () => ew,
                D_: () => eE,
                q5: () => eg,
                PP: () => S,
                lQ: () => y
            }), i(16280), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(823215), i(354520), i(672577), i(581454), i(737550);
            let n = {
                    revenueCatProductIds: ["notion.id.personal_pro_monthly", "notion.local.id.personal_pro_monthly", "notion.dev.id.personal_pro_monthly", "notion.stg.id.personal_pro_monthly"],
                    store: "app_store",
                    original_purchase_date_before: i(906745).DateTime.utc(2024, 10, 14),
                    original_purchase_date_after: void 0,
                    prices: [{
                        externalId: "notion.id.personal_pro_monthly",
                        billingInterval: "month",
                        product: "personal",
                        state: "current",
                        unitAmount: {
                            currencyCode: "USD",
                            amount: 499
                        }
                    }]
                },
                r = {
                    revenueCatProductIds: ["notion.id.personal_pro_yearly", "notion.local.id.personal_pro_yearly", "notion.dev.id.personal_pro_yearly", "notion.stg.id.personal_pro_yearly"],
                    store: "app_store",
                    original_purchase_date_before: i(906745).DateTime.utc(2024, 10, 14),
                    original_purchase_date_after: void 0,
                    prices: [{
                        externalId: "notion.id.personal_pro_yearly",
                        billingInterval: "year",
                        product: "personal",
                        state: "current",
                        unitAmount: {
                            currencyCode: "USD",
                            amount: 4799
                        }
                    }]
                },
                o = {
                    revenueCatProductIds: ["notion.id.personal_pro_monthly", "notion.local.id.personal_pro_monthly", "rc_promo_notion.local.id.personal_pro_monthly", "notion.dev.id.personal_pro_monthly", "rc_promo_notion.dev.id.personal_pro_monthly", "notion.stg.id.personal_pro_monthly", "rc_promo_notion.stg.id.personal_pro_monthly"],
                    store: "app_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: i(906745).DateTime.utc(2024, 10, 14),
                    prices: [{
                        externalId: "notion.id.personal_pro_monthly",
                        billingInterval: "month",
                        product: "personal",
                        state: "current",
                        unitAmount: {
                            currencyCode: "USD",
                            amount: 1199
                        }
                    }]
                },
                a = {
                    revenueCatProductIds: ["notion.id.ai_monthly", "notion.local.id.ai_monthly", "rc_promo_notion.local.id.ai_monthly", "notion.dev.id.ai_monthly", "rc_promo_notion.dev.id.ai_monthly", "notion.stg.id.ai_monthly", "rc_promo_notion.stg.id.ai_monthly"],
                    store: "app_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: void 0,
                    prices: [{
                        externalId: "notion.id.ai_monthly",
                        billingInterval: "month",
                        product: "ai",
                        state: "current",
                        unitAmount: {
                            currencyCode: "USD",
                            amount: 999
                        }
                    }]
                },
                s = {
                    revenueCatProductIds: ["notion.id.personal_pro_yearly", "notion.local.id.personal_pro_yearly", "rc_promo_notion.local.id.personal_pro_yearly", "notion.dev.id.personal_pro_yearly", "rc_promo_notion.dev.id.personal_pro_yearly", "notion.stg.id.personal_pro_yearly", "rc_promo_notion.stg.id.personal_pro_yearly"],
                    store: "app_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: i(906745).DateTime.utc(2024, 10, 14),
                    prices: [{
                        externalId: "notion.id.personal_pro_yearly",
                        billingInterval: "year",
                        product: "personal",
                        state: "current",
                        unitAmount: {
                            currencyCode: "USD",
                            amount: 11999
                        }
                    }]
                },
                l = {
                    revenueCatProductIds: ["notion.id.ai_yearly", "notion.local.id.ai_yearly", "rc_promo_notion.local.id.ai_yearly", "notion.dev.id.ai_yearly", "rc_promo_notion.dev.id.ai_yearly", "notion.stg.id.ai_yearly", "rc_promo_notion.stg.id.ai_yearly"],
                    store: "app_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: void 0,
                    prices: [{
                        externalId: "notion.id.ai_yearly",
                        billingInterval: "year",
                        product: "ai",
                        state: "current",
                        unitAmount: {
                            currencyCode: "USD",
                            amount: 9599
                        }
                    }]
                },
                u = {
                    revenueCatProductIds: ["notion.id.personal_plus:monthly", "notion.local.id.personal_plus:monthly", "notion.dev.id.personal_plus:monthly", "notion.stg.id.personal_plus:monthly"],
                    store: "play_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: void 0,
                    prices: [{
                        externalId: "notion.id.personal_plus:monthly",
                        billingInterval: "month",
                        product: "personal",
                        state: "current",
                        unitAmount: {
                            currencyCode: "USD",
                            amount: 1199
                        }
                    }]
                },
                d = {
                    revenueCatProductIds: ["notion.id.ai:monthly", "notion.local.id.ai:monthly", "notion.dev.id.ai:monthly", "notion.stg.id.ai:monthly"],
                    store: "play_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: void 0,
                    prices: [{
                        externalId: "notion.id.ai:monthly",
                        billingInterval: "month",
                        product: "ai",
                        state: "current",
                        unitAmount: {
                            currencyCode: "USD",
                            amount: 999
                        }
                    }]
                },
                c = {
                    revenueCatProductIds: ["notion.id.personal_plus:yearly", "notion.id.personal_plus:yearly-2", "notion.local.id.personal_plus:yearly", "notion.dev.id.personal_plus:yearly", "notion.stg.id.personal_plus:yearly"],
                    store: "play_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: void 0,
                    prices: [{
                        externalId: "notion.id.personal_plus:yearly",
                        billingInterval: "year",
                        product: "personal",
                        state: "current",
                        unitAmount: {
                            currencyCode: "USD",
                            amount: 11999
                        }
                    }]
                },
                p = {
                    revenueCatProductIds: ["notion.id.ai:yearly", "notion.local.id.ai:yearly", "notion.dev.id.ai:yearly", "notion.stg.id.ai:yearly"],
                    store: "play_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: void 0,
                    prices: [{
                        externalId: "notion.id.ai:yearly",
                        billingInterval: "year",
                        product: "ai",
                        state: "current",
                        unitAmount: {
                            currencyCode: "USD",
                            amount: 9499
                        }
                    }]
                },
                m = {
                    revenueCatProductIds: ["notion.id.plus_ai_monthly", "notion.id.plus_ai_sai_monthly", "notion.local.id.plus_ai_monthly", "notion.local.id.plus_ai_sai_monthly", "rc_promo_notion.local.id.plus_ai_monthly", "notion.dev.id.plus_ai_monthly", "notion.dev.id.plus_ai_sai_monthly", "rc_promo_notion.dev.id.plus_ai_monthly", "notion.stg.id.plus_ai_monthly", "notion.stg.id.plus_ai_sai_monthly", "rc_promo_notion.stg.id.plus_ai_monthly"],
                    store: "app_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: void 0,
                    prices: o.prices.concat(a.prices)
                },
                f = {
                    revenueCatProductIds: ["notion.id.plus_ai_yearly", "notion.id.plus_ai_sai_yearly", "notion.local.id.plus_ai_yearly", "notion.local.id.plus_ai_sai_yearly", "rc_promo_notion.local.id.plus_ai_yearly", "notion.dev.id.plus_ai_yearly", "notion.dev.id.plus_ai_sai_yearly", "rc_promo_notion.dev.id.plus_ai_yearly", "notion.stg.id.plus_ai_yearly", "notion.stg.id.plus_ai_sai_yearly", "rc_promo_notion.stg.id.plus_ai_yearly"],
                    store: "app_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: void 0,
                    prices: s.prices.concat(l.prices)
                },
                _ = {
                    revenueCatProductIds: ["notion.id.plus_ai:monthly", "notion.local.id.plus_ai:monthly", "notion.dev.id.plus_ai:monthly", "notion.stg.id.plus_ai:monthly"],
                    store: "play_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: void 0,
                    prices: u.prices.concat(d.prices)
                },
                g = {
                    revenueCatProductIds: ["notion.id.plus_ai:yearly", "notion.local.id.plus_ai:yearly", "notion.dev.id.plus_ai:yearly", "notion.stg.id.plus_ai:yearly"],
                    store: "play_store",
                    original_purchase_date_before: void 0,
                    original_purchase_date_after: void 0,
                    prices: c.prices.concat(p.prices)
                },
                v = [a, l, d, p, n, r, o, s, u, c, m, f, _, g];

            function h(e) {
                return e.hasPaidNonzero || e.invoices.some(e => (e.amountPaid ? ? 0) > 0)
            }

            function y(e) {
                if (!e.subscription) return {
                    items: [],
                    trialEnd: void 0
                };
                let t = b(e.subscription);
                return t ? { ...t,
                    trialEnd: void 0
                } : e.subscription
            }

            function b(e) {
                return null == e ? void 0 : e.pending
            }

            function S(e) {
                return e.subscription ? ? {
                    trialEnd: void 0,
                    items: []
                }
            }

            function k(e) {
                let t;
                return t = "free" === e || "personal_free" === e || "team_free" === e ? void 0 : {
                    quantity: 0,
                    price: {
                        externalId: "DANGEROUS__toFakeSubscriptionStateFromSubscriptionTier externalId",
                        product: e,
                        billingInterval: "month",
                        unitAmount: {
                            amount: 0,
                            currencyCode: "USD"
                        },
                        state: "current"
                    }
                }, {
                    trialEnd: void 0,
                    items: (0, i(381453).oE)([t])
                }
            }

            function x(e) {
                return !!e && X(e).some(e => i(126365).xB.includes(e.price.externalId))
            }

            function w(e) {
                return X(e).some(e => (0, i(722371).Xk)(i(126365).C5, e.price.externalId))
            }

            function P(e) {
                return !x(e) || eo(e, "ai") || w(e)
            }

            function I(e) {
                var t, i, n;
                if (!e) return;
                let r = null != (t = e.subscription) && t.trialEnd ? null == (i = e.subscription) ? void 0 : i.startDate : void 0,
                    o = null == (n = e.trial) ? void 0 : n.startDate;
                if (r || o) {
                    if (!r) return o;
                    if (!o) return r;
                    throw Error("Both subscription.startDate and trial.startDate cannot be defined")
                }
            }

            function C(e) {
                var t, i;
                if (!e) return;
                let n = null == (t = e.subscription) ? void 0 : t.trialEnd,
                    r = null == (i = e.trial) ? void 0 : i.endDate;
                if (n || r) {
                    if (!n) return r;
                    if (!r) return n;
                    throw Error("Both subscription.trialEnd and trial.endDate cannot be defined")
                }
            }

            function T(e, t = "days") {
                let i = I(e),
                    n = C(e);
                if (i && n) return n.diff(i, t)
            }

            function M(e) {
                let t = C(e),
                    i = eC(e);
                return !!(t && t.diff(i, "milliseconds").milliseconds > 0)
            }

            function A(e) {
                return Q(e).length > 0
            }

            function E(e) {
                return M(e) && A(e)
            }

            function D(e) {
                let t = J(X(e));
                if (0 === t.length) return;
                let [n, r] = (0, i(381453).jB)(t, e => ek(e.price.externalId)), o = (0, i(627179).Z$)(n.map(e => e.price.unitAmount.currencyCode), "All subscription items should have the same currency code.");
                return (0, i(627179).Z$)(r.map(e => e.price.unitAmount.currencyCode), "All subscription items should have the same currency code.") ? ? o
            }

            function B(e) {
                return !!(null != e && e.subscription) && e.subscription.items.length > 0
            }

            function O(e) {
                var t, i;
                let n, {
                    productType: r,
                    billingData: o
                } = e;
                return i = (null == o || null == (t = o.subscription) ? void 0 : t.items) ? ? [], (n = i.find(e => ef(e) === r)) ? n.quantity : 0
            }

            function U(e) {
                var t, n;
                let {
                    logFunction: r,
                    spaceId: o,
                    billingData: a,
                    desyncHandler: s
                } = e, l = Object.fromEntries(((null == (t = a) || null == (n = t.subscription) ? void 0 : n.items) ? ? []).filter(e => "seats" === (0, i(475413).vK)(e.price.product)).map(e => [e.price.externalId, e.quantity])), u = (0, i(381453).sb)(Object.values(l));
                if (u.length > 1) {
                    if (r({
                            level: "error",
                            from: "billingSeatHelpers",
                            type: "InaccurateSeatQuantity",
                            data: {
                                miscDataToConvertToString: {
                                    spaceId: o,
                                    subscriptionState: JSON.stringify(null == a ? void 0 : a.subscription, null, 2)
                                }
                            }
                        }), s) return s(l);
                    throw Error("All seat-based subscription items should have the same quantity.")
                }
                return u[0]
            }

            function R(e) {
                return N((null == e ? void 0 : e.items) ? ? [])
            }

            function N(e) {
                let t = e.filter(e => "ai_credit_pack_units" === (0, i(475413).vK)(e.price.product));
                return 0 === t.length ? 0 : t[0].quantity
            }

            function L(e) {
                var t;
                let n = (null == e || null == (t = e.subscription) ? void 0 : t.items) ? ? [],
                    [r, o] = (0, i(381453).jB)(n, e => ek(e.price.externalId)),
                    a = (0, i(627179).Z$)(r.map(e => e.price.billingInterval), "All subscription items should have the same billing interval.");
                return (0, i(627179).Z$)(o.map(e => e.price.billingInterval), "All subscription items should have the same billing interval.") ? ? a
            }
            let j = ["plan", "sites_custom_hostnames", "ai"],
                F = ["ai_credit_pack"];

            function $(e) {
                return (0, i(627179).Z$)((0, i(381453).oE)(j.map(t => V(t, e))), "All non-mobile subscription items of the requested product types should have the same billing interval.")
            }

            function q(e) {
                return (0, i(627179).Z$)((0, i(381453).oE)(F.map(t => V(t, e))), "All non-mobile subscription items of the requested product types should have the same billing interval.")
            }

            function z(e, t) {
                return (0, i(722371).Xk)(F, e) ? q(t) ? ? "month" : $(t)
            }

            function V(e, t) {
                var n;
                let r = ((null == t || null == (n = t.subscription) ? void 0 : n.items) ? ? []).filter(t => ef(t) === e),
                    [o, a] = (0, i(381453).jB)(r, e => ek(e.price.externalId)),
                    s = (0, i(627179).Z$)(a.map(e => e.price.billingInterval), "All non-mobile subscription items of the requested product type should have the same billing interval."),
                    l = (0, i(627179).Z$)(o.map(e => e.price.billingInterval), "All mobile subscription items of the requested product type should have the same billing interval.");
                return s ? ? l
            }

            function G(e, t) {
                let n = (0, i(381453).oE)(e.map(e => {
                    let n = function(e, t) {
                        var n;
                        let r = ((null == t || null == (n = t.subscription) ? void 0 : n.items) ? ? []).filter(t => ef(t) === e),
                            [o, a] = (0, i(381453).jB)(r, e => ek(e.price.externalId)),
                            s = (0, i(627179).Z$)((0, i(381453).oE)(a.map(e => e.currentPeriodEnd)), "All non-mobile subscription items of the requested product type should have the same current period end."),
                            l = (0, i(627179).Z$)((0, i(381453).oE)(o.map(e => e.currentPeriodEnd)), "All mobile subscription items of the requested product type should have the same current period end.");
                        return s ? ? l
                    }(e, t);
                    return n ? {
                        productType: e,
                        currentPeriodEnd: n
                    } : void 0
                }));
                if ([...new Set(n.map(e => e.currentPeriodEnd.toMillis()))].length > 1) {
                    var r;
                    (0, i(222024).t)().log({
                        level: "warning",
                        from: "lookupItemCurrentPeriodEnd",
                        type: "currentPeriodEndDesyncAcrossProductTypes",
                        data: {
                            miscDataToConvertToString: {
                                feature: "mixed_billing_intervals",
                                productTypes: e.join(","),
                                subscriptionExternalId: (null == t || null == (r = t.subscription) ? void 0 : r.externalId) ? ? "unknown",
                                periodEndsByProductType: n.map(e => `${e.productType}:${e.currentPeriodEnd.toISO()}`).join(";")
                            }
                        }
                    })
                }
                return n[0]
            }

            function W(e) {
                let t = null == e ? void 0 : e.subscription;
                if (!t) return;
                let n = G(j, e);
                return n ? t.currentPeriodEnd && !n.currentPeriodEnd.equals(t.currentPeriodEnd) && (0, i(222024).t)().log({
                    level: "warning",
                    from: "getMajorCurrentPeriodEnd",
                    type: "currentPeriodEndMismatch",
                    data: {
                        miscDataToConvertToString: {
                            feature: "mixed_billing_intervals",
                            group: "major",
                            itemProductType: n.productType,
                            subscriptionExternalId: t.externalId,
                            itemCurrentPeriodEnd: n.currentPeriodEnd.toISO(),
                            subscriptionCurrentPeriodEnd: t.currentPeriodEnd.toISO()
                        }
                    }
                }) : (0, i(222024).t)().log({
                    level: "warning",
                    from: "getMajorCurrentPeriodEnd",
                    type: "missingItemCurrentPeriodEnd",
                    data: {
                        miscDataToConvertToString: {
                            feature: "mixed_billing_intervals",
                            group: "major",
                            subscriptionExternalId: t.externalId,
                            groupProductTypes: j.join(",")
                        }
                    }
                }), t.currentPeriodEnd
            }

            function K(e, t) {
                if (!e.subscription) return t;
                let n = L(e);
                if (!n) return t;
                let r = e.subscription.currentPeriodEnd,
                    o = "month" === n ? i(906745).dw.fromObject({
                        month: 1
                    }) : i(906745).dw.fromObject({
                        year: 1
                    }),
                    a = i(906745).dw.fromObject({
                        hour: 2
                    });
                for (; t > r.plus(a);) r = r.plus(o);
                return r
            }

            function H(e) {
                return !!e && e.items.every(e => 0 === e.price.unitAmount.amount)
            }

            function X(e) {
                return [...Z(e), ...Q(e)]
            }

            function Y(e) {
                let t = ep(e) || "free";
                return i(262166).o3[t]
            }

            function J(e) {
                let [t, n] = (0, i(381453).jB)(e, e => "plan" === ef(e)), r = (0, i(381453).Sk)(t, Y);
                return (0, i(381453).oE)([r, ...n])
            }

            function Q(e) {
                var t, i;
                let n = eC(e),
                    r = null == e || null == (t = e.subscription) ? void 0 : t.trialEnd;
                return e ? r && r > n ? [] : (null == (i = e.subscription) ? void 0 : i.items) ? ? [] : []
            }

            function Z(e) {
                var t, i, n, r;
                let o = eC(e),
                    a = null == e || null == (t = e.subscription) ? void 0 : t.trialEnd,
                    s = null == e || null == (i = e.trial) ? void 0 : i.endDate;
                return e ? a && a > o ? (null == (n = e.subscription) ? void 0 : n.items) ? ? [] : s && s > o ? (null == (r = e.trial) ? void 0 : r.items) ? ? [] : [] : []
            }

            function ee(e, t) {
                let n = X(e);
                if ("plan" === t) {
                    let e = n.filter(e => ef(e) === t);
                    return (0, i(381453).Sk)(e, Y)
                }
                return n.find(e => ef(e) === t)
            }

            function et(e, t) {
                let n = Q(e);
                if ("plan" === t) {
                    let e = n.filter(e => ef(e) === t);
                    return (0, i(381453).Sk)(e, Y)
                }
                return n.find(e => ef(e) === t)
            }

            function ei(e) {
                return "free" !== en(e)
            }

            function en(e) {
                let t = ee(e, "plan");
                return (null == t ? void 0 : t.price.product) ? ? "free"
            }

            function er(e) {
                let t = et(e, "plan");
                return (null == t ? void 0 : t.price.product) ? ? "free"
            }

            function eo(e, t) {
                return J(X(e)).some(e => e.price.product === t)
            }

            function ea(e) {
                var t;
                let n = null == (t = ee(e, "plan")) ? void 0 : t.price.externalId;
                if (n && (0, i(126365).DS)(n)) return n
            }

            function es(e) {
                return J(X(e)).map(e => e.price.product)
            }

            function el(e) {
                return M(e) ? Z(e).map(e => e.price.product).filter(e => (0, i(645040).OV)(e) || (0, i(645040).Qt)(e)) : []
            }

            function eu(e) {
                return X(e).some(e => "seats" === (0, i(475413).vK)(e.price.product))
            }

            function ed(e) {
                let t = X(e);
                return (0, i(381453).oE)(t.map(e => (0, i(645040).Qt)(e.price.product) ? { ...e,
                    price: { ...e.price,
                        product: e.price.product
                    }
                } : void 0))
            }

            function ec(e) {
                return ed(e).map(e => e.price.product)
            }

            function ep(e) {
                if (e) return (0, i(645040).Qt)(e.price.product) ? void 0 : e.price.product
            }

            function em(e) {
                return e.price.product
            }

            function ef(e) {
                return e_(em(e))
            }

            function e_(e) {
                return (0, i(645040).Qt)(e) ? e : "plan"
            }

            function eg(e) {
                return new(i(886514)).gm({
                    external_id: e.externalId,
                    product: e.product,
                    billing_interval: e.billingInterval,
                    currency: e.unitAmount.currencyCode,
                    unit_amount: e.unitAmount.amount,
                    state: "current"
                })
            }

            function ev(e, t) {
                return (0, i(627179).oU)({
                    as: e,
                    aKey: e => ef(e),
                    bs: t,
                    bKey: e => ef(e)
                })
            }

            function eh({
                billingData: e,
                canUpdateBilling: t
            }) {
                return t && (null == e ? void 0 : e.provider) === "stripe"
            }

            function ey(e) {
                if (e && ("stripe" === e.provider || "mixed" === e.provider)) return e.externalId
            }

            function eb(e) {
                return (null == e ? void 0 : e.provider) === "app_store" || (null == e ? void 0 : e.provider) === "play_store" || (null == e ? void 0 : e.provider) === "mixed"
            }

            function eS(e) {
                return (null == e ? void 0 : e.provider) === "app_store" || (null == e ? void 0 : e.provider) === "play_store"
            }

            function ek(e) {
                return v.some(t => t.prices.some(t => t.externalId === e))
            }

            function ex(e) {
                let {
                    servicePeriodStart: t,
                    experimentService: n,
                    spaceId: r
                } = e;
                return !!t && !!n.checkGate({
                    gateName: "usage_based_pricing_pfa_checks_purchased_credits_enabled",
                    actor: i(810016).S,
                    customIDs: {
                        spaceId: r
                    }
                }) && function(e) {
                    let {
                        servicePeriodStart: t,
                        experimentService: n,
                        spaceId: r
                    } = e;
                    if (!t) return !1;
                    let {
                        enforcement_date_ms: o
                    } = n.getConfig({
                        configName: "ai_credits_enforcement_date",
                        actor: i(810016).S,
                        customIDs: {
                            spaceId: r
                        }
                    });
                    return t.getTime() >= o
                }({
                    servicePeriodStart: t,
                    experimentService: n,
                    spaceId: r
                })
            }

            function ew(e) {
                return !!e && x(e) && !(e && (X(e).some(e => (0, i(722371).Xk)(i(126365).TV, e.price.externalId)) || x(e) && M(e)))
            }

            function eP(e) {
                var t, n;
                let {
                    billingData: r
                } = e, o = null == (t = W(r)) ? void 0 : t.toUTC();
                if (!o) return;
                let a = ((null == (n = r.clock) ? void 0 : n.now) ? ? i(906745).DateTime.now()).toUTC(),
                    s = o.diff(a, "months").as("months");
                return o.minus({
                    months: Math.ceil(s)
                }).toUTC().toMillis()
            }

            function eI(e) {
                let {
                    billingData: t
                } = e, n = $(t);
                if (!n) return;
                let r = eP({
                    billingData: t
                });
                if (!r) return;
                let o = W(t),
                    a = "month" === n ? o : i(906745).DateTime.fromMillis(r).plus({
                        months: 1
                    });
                return null == a ? void 0 : a.toUTC().toMillis()
            }

            function eC(e) {
                var t;
                return null != e && null != (t = e.clock) && t.externalId ? e.clock.now : i(906745).DateTime.now()
            }

            function eT(e, t) {
                var i;
                return null == (i = e.taxIds.find(e => e.type === t)) ? void 0 : i.value
            }

            function eM(e) {
                var t;
                return (null == e || null == (t = e.paymentMethod) ? void 0 : t.trustLevel) === "verifying"
            }

            function eA(e, t) {
                return ((null == e ? void 0 : e.accountBalances) ? ? []).find(e => e.currencyCode === t) ? ? {
                    amount: 0,
                    currencyCode: t
                }
            }

            function eE(e) {
                var t;
                if (e) {
                    if (0 === y(e).items.length) return null == (t = b(e.subscription)) ? void 0 : t.startDate
                }
            }

            function eD(e, t) {
                return (0, i(722371).Xk)(F, t) ? function(e) {
                    let t = null == e ? void 0 : e.subscription;
                    if (!t) return;
                    let n = G(F, e);
                    return n || (0, i(222024).t)().log({
                        level: "warning",
                        from: "getMinorCurrentPeriodEnd",
                        type: "missingItemCurrentPeriodEnd",
                        data: {
                            miscDataToConvertToString: {
                                feature: "mixed_billing_intervals",
                                group: "minor",
                                subscriptionExternalId: t.externalId,
                                groupProductTypes: F.join(",")
                            }
                        }
                    }), null == n ? void 0 : n.currentPeriodEnd
                }(e) : W(e)
            }

            function eB(e) {
                return x(e) && (0, i(262166).rV)(en(e), "business") && (eo(e, "ai") || w(e))
            }

            function eO(e) {
                var t;
                let {
                    state: n
                } = e, r = (null == (t = n.items.find(e => "plan" === ef(e))) ? void 0 : t.price.product) ? ? "free", o = n.items.some(e => "ai" === e.price.product);
                if ("personal" === r && o) return {
                    isRecurring: !0,
                    tier: "personal"
                };
                if ("business" !== r && "enterprise" !== r) return {
                    isRecurring: !1
                };
                if (n.items.some(e => (0, i(722371).Xk)(i(126365).xB, e.price.externalId))) {
                    let e = n.items.some(e => (0, i(722371).Xk)(i(126365).C5, e.price.externalId));
                    return o || e ? {
                        isRecurring: !0,
                        tier: r
                    } : {
                        isRecurring: !1
                    }
                }
                return {
                    isRecurring: !0,
                    tier: r
                }
            }

            function eU(e) {
                return e ? eO({
                    state: e ? {
                        items: J(X(e)),
                        trialEnd: C(e) ? ? void 0
                    } : {
                        items: [],
                        trialEnd: void 0
                    }
                }) : {
                    isRecurring: !1
                }
            }

            function eR(e) {
                let t, i, n;
                return eO({
                    state: (t = y(e), i = e.trial, n = eC(e), null != i && i.autoConvert && i.endDate && i.endDate > n ? {
                        items: J([...i.items, ...t.items]),
                        trialEnd: i.endDate
                    } : t)
                })
            }
        },
        197603: (e, t, i) => {
            var n;
            i.d(t, {
                Ay: () => s,
                dC: () => a,
                vt: () => o
            }), i(16280);
            let r = {},
                o = ((n = {})[n.Javascript = 0] = "Javascript", n[n.Stylesheet = 1] = "Stylesheet", n);

            function a(e) {
                let t = r[e];
                void 0 !== t && (t.element.remove(), delete r[e])
            }
            let s = function(e, {
                resourceType: t = o.Javascript,
                id: i,
                attributes: n = {},
                async: s = !0,
                defer: l
            } = {}) {
                let u, d = r[e];
                if (d) return d.loaded;
                switch (t) {
                    case o.Javascript:
                        if ((u = document.createElement("script")).async = s, void 0 !== l && (u.defer = l), u.src = e, void 0 !== i && (u.id = i), void 0 !== n)
                            for (let e in n) u.setAttribute(e, n[e]);
                        break;
                    case o.Stylesheet:
                        (u = document.createElement("link")).href = e, u.type = "text/css", u.rel = "stylesheet"
                }
                let c = new Promise((i, n) => {
                    u.addEventListener("load", () => {
                        i(void 0)
                    }), u.addEventListener("error", () => {
                        a(e), n(Error(`Failed to load ${t===o.Stylesheet?"stylesheet":"script"}: ${e}`))
                    }), document.getElementsByTagName("head")[0].appendChild(u)
                });
                return r[e] = {
                    loaded: c,
                    element: u
                }, c
            }
        },
        197691: (e, t, i) => {
            function n({
                environment: e,
                spaceId: t
            }) {
                return new(i(695906)).SpaceStore(e, {
                    table: i(832375).NXh,
                    id: t
                }).getModel()
            }

            function r({
                environment: e,
                spaceId: t
            }) {
                let o = n({
                        environment: e,
                        spaceId: t
                    }),
                    a = (0, i(616579).j)({
                        environment: e,
                        spaceId: t
                    }) ? ? 1,
                    s = i(547631).a.getData(e, {
                        spaceId: t
                    });
                return {
                    space: o,
                    memberCount: a,
                    basicCredits: (null == s ? void 0 : s.basicCredits) ? ? i(547631).b.basicCredits,
                    premiumCredits: (null == s ? void 0 : s.premiumCredits) ? ? i(547631).b.premiumCredits
                }
            }

            function o({
                environment: e,
                spaceId: t
            }) {
                if (!t) return {
                    spaceUsage: 0,
                    userUsage: 0,
                    userPromotionalUsage: 0,
                    memberCount: 0,
                    aiPromotionConfig: i(986939).A.promotions.aiCredits.writer,
                    space: void 0,
                    lastSpaceUsageAtMs: void 0,
                    lastSpaceUserUsageAtMs: void 0
                };
                let a = n({
                        environment: e,
                        spaceId: t
                    }),
                    s = (0, i(774123).oR)({
                        promotionConfigs: i(986939).A.promotions,
                        space: a
                    }),
                    l = (0, i(616579).j)({
                        environment: e,
                        spaceId: t
                    }) ? ? 1,
                    {
                        basicCredits: u
                    } = r({
                        environment: e,
                        spaceId: t
                    });
                return {
                    spaceUsage: u.spaceUsage,
                    userUsage: u.userUsage,
                    userPromotionalUsage: u.userPromotionalUsage,
                    memberCount: l,
                    aiPromotionConfig: s,
                    space: a,
                    lastSpaceUsageAtMs: u.lastSpaceUsageAtMs,
                    lastSpaceUserUsageAtMs: u.lastSpaceUserUsageAtMs
                }
            }
            i.d(t, {
                L: () => a
            }), i(898992), i(672577);
            let a = {
                guests: e => {
                    let {
                        environment: t,
                        spaceId: n
                    } = e;
                    return {
                        current: (0, i(770694).C)({
                            environment: t,
                            spaceId: n
                        }) ? ? 0
                    }
                },
                team_self_promotion: e => {},
                internal_guests: e => {
                    let {
                        environment: t,
                        spaceId: n
                    } = e;
                    return {
                        current: (0, i(770694).C)({
                            environment: t,
                            spaceId: n
                        }) ? ? 0
                    }
                },
                members: e => {
                    var t;
                    let {
                        environment: n,
                        spaceId: r
                    } = e, o = (0, i(616579).j)({
                        environment: n,
                        spaceId: r
                    }) ? ? 0, a = i(185995).default.getData(n, {
                        spaceId: r
                    }) ? ? [];
                    return {
                        current: o,
                        currentOfferCampaign: null == a || null == (t = a.find(e => (0, i(875472).rM)(e))) ? void 0 : t.offer.campaign
                    }
                },
                non_admin_members: e => {},
                membership_admins: e => {},
                restricted_members: e => {},
                group_management: e => {},
                view_chart: e => {},
                form_filesize: e => {},
                form_customization: e => {},
                file_upload_size: e => {},
                unbranded_forms: e => {},
                forms_conditional_logic: e => {},
                custom_agents: e => {},
                premium_automations: e => {},
                move_to: e => {},
                claimable_spaces: e => {},
                domain_settings: e => {},
                managed_users: e => {},
                invite_user_to_workspace_mentions: e => {},
                saml: e => {},
                scim: e => {},
                legal_holds: e => {},
                export_members: e => {},
                hipaa_compliance: e => {},
                sites_multiple_public_domains: e => {},
                custom_image_upload_favicon: e => {},
                custom_public_sites_layout: e => {},
                seo_title_and_description: e => {},
                admin_transfer_private_content: e => {},
                configurable_mention_invites: e => {},
                configurable_retention: e => {},
                watermarkless_chart_export: e => {},
                configurable_deletion_and_retention_settings: e => {},
                sudo_mode: e => {},
                content_reprovisioning: e => {},
                ai_connectors: e => {},
                collection_property_autofill: e => {
                    let {
                        spaceUsage: t,
                        userUsage: i,
                        memberCount: n,
                        aiPromotionConfig: r,
                        space: a
                    } = o(e);
                    return {
                        spaceUsage: t,
                        userUsage: i,
                        memberCount: n,
                        aiPromotionConfig: r,
                        space: a
                    }
                },
                ai_usage: e => {
                    let {
                        spaceUsage: t,
                        userUsage: i,
                        userPromotionalUsage: n,
                        memberCount: r,
                        aiPromotionConfig: a,
                        space: s,
                        lastSpaceUsageAtMs: l,
                        lastSpaceUserUsageAtMs: u
                    } = o(e);
                    return {
                        current: t,
                        userPromotionalUsage: n,
                        userUsage: i,
                        memberCount: r,
                        aiPromotionConfig: a,
                        space: s,
                        lastSpaceUsageAtMs: l,
                        lastSpaceUserUsageAtMs: u
                    }
                },
                custom_agents_credit_usage: e => {
                    let {
                        space: t,
                        premiumCredits: n
                    } = r(e);
                    return {
                        current: (0, i(149957).BL)(n),
                        space: t,
                        limits: {
                            currentServicePeriodLimit: (0, i(149957).xH)(n),
                            overageLimit: n.overageLimit
                        },
                        usage: {
                            totalCreditBalance: n.totalCreditBalance,
                            creditsInOverage: n.creditsInOverage
                        }
                    }
                },
                ai_research_mode: e => {
                    let {
                        spaceUsage: t,
                        userUsage: n,
                        userPromotionalUsage: r,
                        memberCount: a,
                        aiPromotionConfig: s,
                        space: l
                    } = o(e), {
                        userResearchModeUsage: u,
                        spaceId: d
                    } = function({
                        environment: e,
                        spaceId: t
                    }) {
                        var n;
                        return t ? {
                            userResearchModeUsage: (null == (n = (0, i(541156).F)(e, t)) ? void 0 : n.researchModeUsage) ? ? 0,
                            spaceId: t
                        } : {
                            userResearchModeUsage: 0,
                            spaceId: t
                        }
                    }(e);
                    return {
                        generalAiCurrent: t,
                        generalAiUserUsage: n,
                        generalAiUserPromotionalUsage: r,
                        memberCount: a,
                        aiPromotionConfig: s,
                        space: l,
                        current: u,
                        spaceId: d
                    }
                },
                ai_formulas: e => {
                    let {
                        spaceUsage: t,
                        userUsage: i,
                        userPromotionalUsage: n,
                        memberCount: r,
                        aiPromotionConfig: a,
                        space: s
                    } = o(e);
                    return {
                        aiPromotionConfig: a,
                        memberCount: r,
                        space: s,
                        current: t,
                        currentUserUsage: i,
                        userPromotionalUsage: n
                    }
                },
                ai_database_agents: e => {
                    let {
                        spaceUsage: t,
                        userUsage: i,
                        userPromotionalUsage: n,
                        memberCount: r,
                        aiPromotionConfig: a,
                        space: s
                    } = o(e);
                    return {
                        aiPromotionConfig: a,
                        memberCount: r,
                        space: s,
                        current: t,
                        currentUserUsage: i,
                        userPromotionalUsage: n
                    }
                },
                ai_voice_dictation: e => {
                    let {
                        spaceUsage: t,
                        userUsage: i,
                        userPromotionalUsage: n,
                        memberCount: r,
                        aiPromotionConfig: a,
                        space: s
                    } = o(e);
                    return {
                        aiPromotionConfig: a,
                        memberCount: r,
                        space: s,
                        current: t,
                        currentUserUsage: i,
                        userPromotionalUsage: n
                    }
                },
                ai_meeting_notes: e => {
                    let t = i(992308).W.state;
                    return {
                        current: void 0 === t ? 0 : "available" === t.type ? t.usage : 1 / 0
                    }
                },
                ai_meeting_notes_custom_transcript_retention: e => {},
                ai_app_builder: e => {},
                block_read_and_write_role: e => {},
                assistant_image_filesize_bytes: e => {},
                assistant_json_filesize_bytes: e => {},
                assistant_pdf_filesize_bytes: e => {},
                assistant_csv_filesize_bytes: e => {},
                assistant_text_filesize_bytes: e => {},
                filesystem_sandbox_filesize_bytes: e => {},
                custom_teamspace_permissions: e => {},
                collection_connected_property_google_drive: e => ({
                    space: n(e)
                }),
                collection_connected_property_figma: e => ({
                    space: n(e)
                }),
                collection_connected_property_zendesk: e => ({
                    space: n(e)
                }),
                collection_connected_property_github: e => ({
                    space: n(e)
                }),
                collection_synced_database_github: e => ({
                    space: n(e)
                }),
                collection_synced_database_asana: e => ({
                    space: n(e)
                }),
                collection_synced_database_gitlab: e => ({
                    space: n(e)
                }),
                collection_synced_database_jira: e => ({
                    space: n(e)
                }),
                collection_synced_database_jira_workspace: e => ({
                    space: n(e)
                }),
                collection_synced_database_jira_datacenter: e => ({
                    space: n(e)
                }),
                collection_synced_database_salesforce_workspace: e => ({
                    space: n(e)
                }),
                offline_manual_sync: e => {
                    let t = i(218744).default.getConfigKey("offline_manual_sync_limit_config", "limits") ? ? {};
                    return {
                        current: (0, i(313442).AI)(e),
                        dynamicLimits: t
                    }
                },
                offline_auto_sync: e => {},
                collection_property_permissions: e => {},
                contacts_imports_invite: e => {},
                manage_integration_permissions: e => ({
                    space: n(e)
                }),
                advanced_notion_mcp_tools: e => {},
                mcp_ai_access: e => {},
                disable_member_upgrade_requests: e => {},
                verified_pages: e => {},
                team_security_settings: e => {},
                disable_public_access_requests: e => {},
                private_teamspaces: e => {},
                dashboard_view: e => {},
                link_expiration: e => {},
                workers: e => {},
                archive_content: e => {}
            }
        },
        203462: (e, t, i) => {
            let n;
            i.d(t, {
                g_: () => m,
                zf: () => f
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(581454), i(908872);
            var r = () => i(546605);
            let o = !0;
            async function a(e) {
                if (e <= 0) return;
                let t = Math.random() * e * 1e3;
                await new Promise(e => setTimeout(e, t))
            }

            function s(e) {
                return (null == e ? void 0 : e.trim()) || void 0
            }

            function l(e) {
                let {
                    environment: t,
                    spaceId: n,
                    agentIds: r,
                    mostRecentTranscripts: o
                } = e;
                return {
                    agents: r.map(e => new(i(360851)).N(t, {
                        table: i(832375).C0E,
                        id: e,
                        spaceId: n
                    })),
                    mostRecentThreads: o.reduce((e, r) => (e[r.parent_id] = new(i(174148)).E(t, {
                        table: i(832375).Toz,
                        id: r.id,
                        spaceId: n
                    }), e), {}),
                    activityScores: e.activityScores.reduce((e, t) => (e[t.parent_id] = t.activity_score, e), {})
                }
            }
            async function u(e) {
                let {
                    environment: t,
                    spaceId: n,
                    searchQuery: r
                } = e, o = await t.api.callApi({
                    eventName: "search",
                    environment: t,
                    data: {
                        type: i(821603).Vz.BlocksInSpace,
                        query: r,
                        spaceId: n,
                        filters: { ...i(821603).N2({}),
                            blockTypes: ["agent"]
                        },
                        sort: {
                            field: "relevance"
                        },
                        limit: 50,
                        source: "agent_search"
                    }
                });
                if ("success" === o.type) return {
                    agentIds: o.data.results.map(e => (0, i(226221).d)(e.id)),
                    mostRecentTranscripts: [],
                    activityScores: []
                }
            }
            async function d(e) {
                let {
                    environment: t,
                    spaceId: n,
                    searchQuery: r
                } = e, l = s(r);
                if (l && i(218744).default.checkGate({
                        gateName: "agent_search_es_querying"
                    })) return u({
                    environment: t,
                    spaceId: n,
                    searchQuery: l
                });
                let {
                    loading_jitter_config: d
                } = i(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                }), c = o ? (null == d ? void 0 : d.initial) ? ? 0 : (null == d ? void 0 : d.refetch) ? ? 10;
                await a(c), o = !1;
                let p = await t.api.callApi({
                    eventName: "getCustomAgents",
                    environment: t,
                    data: {
                        spaceId: n,
                        filter: "all",
                        searchQuery: l,
                        includeDeleted: !0
                    }
                });
                if ("success" === p.type) return p.data
            }
            async function c(e) {
                let t = await d(e);
                if (t) return l({
                    environment: e.environment,
                    spaceId: e.spaceId,
                    agentIds: t.agentIds,
                    mostRecentTranscripts: t.mostRecentTranscripts,
                    activityScores: t.activityScores
                })
            }
            class p extends r().Store {
                getInitialState() {
                    return {
                        promiseMap: {},
                        storeMap: {},
                        requestKeyToArgs: {}
                    }
                }
                static getKey(e, t) {
                    let i = s(t.searchQuery);
                    return `${e.currentUser.id}:${t.spaceId}:${i??"no-search-query"}`
                }
                getStore(e) {
                    let t = this.state.storeMap[e];
                    if (t) return t;
                    let i = r().Store.createValue(void 0);
                    return this.state.storeMap[e] = i, i
                }
                async fetchAndStore(e) {
                    let {
                        environment: t,
                        requestArgs: i,
                        shouldUpdateStore: n = !0
                    } = e, r = await c({
                        environment: t,
                        spaceId: i.spaceId,
                        searchQuery: i.searchQuery
                    });
                    if (r && n) {
                        let e = p.getKey(t, i);
                        this.getStore(e).setState(r), this.state.promiseMap[e] = Promise.resolve(r)
                    }
                    return r
                }
                getData(e, t, i = !1) {
                    let n = p.getKey(e, t);
                    this.state.requestKeyToArgs[n] = t, i && (this.state.promiseMap[n] = void 0);
                    let r = this.getStore(n);
                    return this.state.promiseMap[n] || (this.state.promiseMap[n] = this.fetchAndStore({
                        environment: e,
                        requestArgs: t
                    })), r.state
                }
                awaitData(e, t, i = !1) {
                    let n = p.getKey(e, t);
                    return this.state.requestKeyToArgs[n] = t, i && (this.state.promiseMap[n] = void 0), this.getStore(n), this.state.promiseMap[n] || (this.state.promiseMap[n] = this.fetchAndStore({
                        environment: e,
                        requestArgs: t
                    })), this.state.promiseMap[n] ? ? Promise.resolve(void 0)
                }
                resetData(e, t, i = !0) {
                    let n = p.getKey(e, t),
                        r = this.state.storeMap[n];
                    if (r && r.listenerCount() > 0 || i) {
                        let i = this.fetchAndStore({
                            environment: e,
                            requestArgs: t
                        });
                        return this.state.promiseMap[n] = i, i.then(() => void 0)
                    }
                    return this.state.promiseMap[n] = void 0, Promise.resolve(void 0)
                }
                async refetchAllForSpace(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, r = Object.entries(this.state.requestKeyToArgs).filter(([, e]) => e.spaceId === n);
                    await (0, i(975162).lX)(r, 5, async ([, e]) => {
                        let i = this.fetchAndStore({
                            environment: t,
                            requestArgs: e
                        });
                        this.state.promiseMap[p.getKey(t, e)] = i, await i
                    })
                }
                addWorkflowIds(e) {
                    let t, {
                        environment: n,
                        spaceId: r,
                        workflowIds: o
                    } = e;
                    if (0 === o.length) return;
                    let a = Object.entries(this.state.requestKeyToArgs).filter(([, e]) => e.spaceId === r && !e.searchQuery),
                        s = l({
                            environment: n,
                            spaceId: r,
                            agentIds: o,
                            mostRecentTranscripts: [],
                            activityScores: []
                        });
                    for (let [e] of a) {
                        let n = this.getStore(e),
                            r = n.state,
                            o = r ? function(e) {
                                let {
                                    existing: t,
                                    incoming: n
                                } = e, r = new Set(t.agents.map(e => e.id)), o = n.agents.filter(e => !r.has(e.id));
                                return {
                                    agents: (0, i(381453).hS)([...o, ...t.agents], e => e.id),
                                    mostRecentThreads: { ...t.mostRecentThreads,
                                        ...n.mostRecentThreads
                                    },
                                    activityScores: { ...t.activityScores,
                                        ...n.activityScores
                                    }
                                }
                            }({
                                existing: r,
                                incoming: s
                            }) : s;
                        n.setState(o), this.state.promiseMap[e] = Promise.resolve(o), t = o.agents
                    }
                    return t
                }
            }
            let m = new p;

            function f(e) {
                let {
                    efficient_all_agents_store_listener: t = !1
                } = i(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                });
                return t ? m : n ? ? = new(i(227586)).n((e, {
                    spaceId: t,
                    searchQuery: i
                }) => {
                    let n = s(i);
                    return `${e.currentUser.id}:${t}:${n??"no-search-query"}`
                }, async (e, t) => {
                    let n = await d({
                        environment: e,
                        spaceId: t.spaceId,
                        searchQuery: t.searchQuery
                    });
                    if (n) {
                        let r = l({
                                environment: e,
                                spaceId: t.spaceId,
                                agentIds: n.agentIds,
                                mostRecentTranscripts: n.mostRecentTranscripts,
                                activityScores: n.activityScores
                            }),
                            o = [{
                                key: (0, i(568479).o1)(t),
                                version: -1
                            }];
                        return {
                            value: r,
                            dependencies: n.dependencies ? ? o
                        }
                    }
                })
            }
        },
        208058: (e, t, i) => {
            i.d(t, {
                Y: () => o
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        readyPromise: (0, i(975162).yX)(),
                        localSpaceInaccessiblePages: void 0,
                        remoteSpaceInaccessiblePages: void 0
                    }
                }
                getSpaceInaccessiblePages(e, t) {
                    let i = this.state;
                    return i.remoteSpaceInaccessiblePages && i.remoteSpaceInaccessiblePages[t] ? i.remoteSpaceInaccessiblePages[t][e] : i.localSpaceInaccessiblePages && i.localSpaceInaccessiblePages[t] ? i.localSpaceInaccessiblePages[t][e] : void 0
                }
            }
            let o = new r
        },
        209654: (e, t, i) => {
            i.d(t, {
                Y1: () => w,
                js: () => P
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(803949);
            var n = () => i(722371),
                r = () => i(993189),
                o = () => i(227318),
                a = () => i(682956),
                s = () => i(890920),
                l = () => i(238793),
                u = () => i(784483),
                d = () => i(213003),
                c = () => i(611042),
                p = () => i(659341),
                m = () => i(867863),
                f = () => i(729052),
                _ = () => i(708628),
                g = () => i(298085),
                v = () => i(514214),
                h = () => i(43296),
                y = () => i(832375);
            i(16280);
            class b {
                botPointer;
                getRecordModel;
                logErrorFn;
                memoizedSpaceRoles;
                relevantEntities;
                logIfUnexpectedSpace(e) {
                    this.relevantEntities.relevantSpaceIds.has(e) || this.logErrorFn({
                        from: "BotActorMembership",
                        type: "NonRelevantSpaceRequested",
                        error: Error(`Space role was requested for ${e}, which was not a pre-determined "relevant" space id`),
                        data: {
                            spaceId: e
                        }
                    })
                }
                constructor(e) {
                    const {
                        botPointer: t,
                        getRecordModel: n,
                        logErrorFn: r,
                        relevantEntities: o
                    } = e;
                    this.botPointer = t, this.logErrorFn = r, this.getRecordModel = (0, i(938563).z)({
                        undecoratedGetRecordModel: n,
                        logErrorFn: r,
                        from: "BotActorMembership"
                    }), this.memoizedSpaceRoles = {}, this.relevantEntities = o
                }
                getActorPointer() {
                    return this.botPointer
                }
                getSpaceRole(e) {
                    this.logIfUnexpectedSpace(e);
                    let t = this.memoizedSpaceRoles[e];
                    if (void 0 !== t) return t;
                    let i = this.getRecordModel((0, c().gZ)({
                            botId: this.botPointer.id,
                            spaceId: e
                        })),
                        n = void 0 === i ? "none" : i.membership_type;
                    return this.memoizedSpaceRoles[e] = n, this.memoizedSpaceRoles[e]
                }
                getTeamRole(e) {
                    return "none"
                }
                getGroupRole(e) {
                    return "none"
                }
            }
            i(944114), i(354520), i(737550);
            class S {
                userPointer;
                getRecordModel;
                logErrorFn;
                relevantEntities;
                memoizedSpaceRoles;
                memoizedTeamRoles;
                memoizedSpaceToGroupMembership;
                memoizedMarketplaceProfileRoles;
                logIfUnexpectedSpace(e) {
                    this.relevantEntities.relevantSpaceIds.has(e) || this.logErrorFn({
                        from: "UserActorMembership",
                        type: "NonRelevantSpaceRequested",
                        error: Error(`Space role was requested for ${e}, which was not a pre-determined "relevant" space id`),
                        data: {
                            spaceId: e
                        }
                    })
                }
                logIfUnexpectedTeam(e) {
                    let {
                        teamId: t,
                        spaceId: i
                    } = e;
                    [...this.relevantEntities.relevantTeamIds.values()].some(e => e.has(t)) || this.logErrorFn({
                        from: "UserActorMembership",
                        type: "NonRelevantTeamRequested",
                        error: Error(`Team role was requested for ${t}, which was not a pre-determined "relevant" team id`),
                        data: {
                            teamId: t,
                            spaceId: i
                        }
                    })
                }
                logIfUnexpectedGroup(e) {
                    var t;
                    let {
                        groupId: i,
                        spaceId: n
                    } = e;
                    null != (t = this.relevantEntities.relevantGroupIds.get(n)) && t.has(i) || this.logErrorFn({
                        from: "UserActorMembership",
                        type: "NonRelevantGroupRequested",
                        error: Error(`Group role was requested for ${i}, which was not a pre-determined "relevant" group id`),
                        data: e
                    })
                }
                logIfUnexpectedMarketplaceProfile(e) {
                    this.relevantEntities.relevantMarketplaceProfileIds.has(e) || this.logErrorFn({
                        from: "UserActorMembership",
                        type: "NonRelevantMarketplaceProfileRequested",
                        error: Error(`Marketplace profile role was requested for ${e}, which was not a pre-determined "relevant" profile id`),
                        data: {
                            profileId: e
                        }
                    })
                }
                constructor(e) {
                    const {
                        userPointer: t,
                        getRecordModel: n,
                        logErrorFn: r,
                        relevantEntities: o
                    } = e;
                    this.userPointer = t, this.getRecordModel = (0, i(938563).z)({
                        undecoratedGetRecordModel: n,
                        logErrorFn: r,
                        from: "UserActorMembership"
                    }), this.logErrorFn = r, this.relevantEntities = o, this.memoizedSpaceRoles = {}, this.memoizedTeamRoles = {}, this.memoizedSpaceToGroupMembership = {}, this.memoizedMarketplaceProfileRoles = {}
                }
                getActorPointer() {
                    return this.userPointer
                }
                getSpaceRole(e) {
                    this.logIfUnexpectedSpace(e);
                    let t = this.memoizedSpaceRoles[e];
                    if (void 0 !== t) return t;
                    let i = this.getRecordModel((0, d().n2)(e));
                    if (null != i && i.isDeleted()) {
                        let t = "none";
                        return this.memoizedSpaceRoles[e] = t, t
                    }
                    let n = this.getRecordModel((0, f().i1)({
                            userId: this.userPointer.id,
                            spaceId: e
                        })),
                        r = void 0 === n ? "none" : n.membership_type;
                    return this.memoizedSpaceRoles[e] = r, this.memoizedSpaceRoles[e]
                }
                getTeamRole(e) {
                    let {
                        teamId: t,
                        spaceId: r
                    } = e;
                    this.logIfUnexpectedTeam({
                        teamId: t,
                        spaceId: r
                    });
                    let o = this.memoizedTeamRoles[t];
                    if (void 0 !== o) return o;
                    let a = this.getRecordModel({
                        table: _().yK,
                        id: t,
                        spaceId: r
                    });
                    if (void 0 === a || a.getSpaceId() !== r) return this.memoizedTeamRoles[t] = "none", this.memoizedTeamRoles[t];
                    let s = this.getSpaceRole(a.getSpaceId()),
                        l = (0, f().MN)(s),
                        u = (0, f().KM)(s),
                        d = [];
                    u && a.isDefault() && d.push("member"), a.getRawMembership().forEach(e => {
                        "user" === e.entity_type ? e.user_id === this.userPointer.id && d.push(e.type) : "group" === e.entity_type ? "owner" === e.type || "member" === e.type ? "none" !== this.getGroupRole({
                            spaceId: a.getSpaceId(),
                            groupId: e.group_id
                        }) && d.push(e.type) : (0, n().HB)(e.type) : (0, n().HB)(e)
                    }), l || (d = d.filter(e => "team_level_guest" === e));
                    let c = (0, i(422280).eF)(...d);
                    return this.memoizedTeamRoles[t] = c, this.memoizedTeamRoles[t]
                }
                getGroupRole(e) {
                    let {
                        groupId: t,
                        spaceId: i
                    } = e;
                    this.logIfUnexpectedGroup({
                        groupId: t,
                        spaceId: i
                    });
                    let n = this.getSpaceRole(i);
                    if (!(0, f().MN)(n)) return "none";
                    let r = this.getRecordModel({
                        table: p().n,
                        id: (0, p().gK)({
                            spacePermissionGroupId: t,
                            spaceId: i
                        }),
                        spaceId: i
                    });
                    if (!r || !r.isAlive()) return "none";
                    let o = this.memoizedSpaceToGroupMembership[i];
                    if (o && o[t]) return o[t];
                    o || (this.memoizedSpaceToGroupMembership[i] = {});
                    let a = this.getRecordModel((0, m().BZ)({
                        spacePermissionGroupId: t,
                        userId: this.userPointer.id,
                        spaceId: i
                    }));
                    return a && a.isAlive() ? this.memoizedSpaceToGroupMembership[i][t] = a.getMembershipType() ? ? "member" : this.memoizedSpaceToGroupMembership[i][t] = "none", this.memoizedSpaceToGroupMembership[i][t]
                }
                getMarketplaceProfileRole(e) {
                    this.logIfUnexpectedMarketplaceProfile(e);
                    let t = this.memoizedMarketplaceProfileRoles[e];
                    if (void 0 !== t) return t;
                    let i = this.getRecordModel((0, u().xJ)({
                            profileId: e,
                            userId: this.userPointer.id
                        })),
                        n = void 0 === i ? "none" : i.membership_type;
                    return this.memoizedMarketplaceProfileRoles[e] = n, this.memoizedMarketplaceProfileRoles[e]
                }
            }
            class k {
                userActorMemberships;
                botActorMemberships;
                logErrorFn;
                constructor(e) {
                    const {
                        logErrorFn: t,
                        relevantEntities: i,
                        getRecordModel: r,
                        actorPointers: o
                    } = e;
                    for (const e of (this.userActorMemberships = {}, this.botActorMemberships = {}, this.logErrorFn = t, o)) e.table === v().oo ? this.userActorMemberships[e.id] = new S({
                        userPointer: e,
                        relevantEntities: i,
                        logErrorFn: t,
                        getRecordModel: r
                    }) : e.table === s().GP ? this.botActorMemberships[e.id] = new b({
                        botPointer: e,
                        relevantEntities: i,
                        logErrorFn: t,
                        getRecordModel: r
                    }) : (0, n().HB)(e)
                }
                getActorMembership(e) {
                    let t;
                    if (e.table === v().oo ? t = this.userActorMemberships[e.id] : e.table === s().GP ? t = this.botActorMemberships[e.id] : (0, n().HB)(e), void 0 === t) {
                        let t = Error("Requested actor did not have an actor membership");
                        this.logErrorFn({
                            from: "ActorMemberships",
                            type: "MissingActorMembership",
                            error: t,
                            data: {
                                actorPointer: e
                            }
                        })
                    }
                    return t
                }*[Symbol.iterator]() {
                    yield* Object.values(this.userActorMemberships), yield* Object.values(this.botActorMemberships)
                }
            }

            function x(e) {
                let {
                    recordMapFromWhichToFindRelevantEntities: t,
                    alreadyKnownRelevantEntities: o
                } = e, s = {
                    relevantSpaceIds: new Set,
                    relevantTeamIds: new Map,
                    relevantGroupIds: new Map,
                    relevantMarketplaceProfileIds: new Set
                }, v = e => {
                    null != o && o.relevantSpaceIds.has(e) || s.relevantSpaceIds.add(e)
                }, b = (e, t) => {
                    var i;
                    if (null != o && null != (i = o.relevantTeamIds.get(t)) && i.has(e)) return;
                    let n = s.relevantTeamIds.get(t);
                    void 0 === n ? s.relevantTeamIds.set(t, new Set([e])) : n.add(e)
                }, S = (e, t) => {
                    var i;
                    if (null != o && null != (i = o.relevantGroupIds.get(t)) && i.has(e)) return;
                    let n = s.relevantGroupIds.get(t);
                    void 0 === n ? s.relevantGroupIds.set(t, new Set([e])) : n.add(e)
                }, k = e => {
                    s.relevantMarketplaceProfileIds.add(e)
                }, x = (e, t) => {
                    e.forEach(e => {
                        if ((0, i(642157).Ds)(e)) S(e.group_id, t);
                        else if ((0, i(642157).eu)(e) || (0, i(642157).un)(e)) b(e.team_id, t);
                        else if ((0, i(642157).B2)(e) || (0, i(642157).P3)(e) || !(0, i(642157).hI)(e) || (0, i(642157).FP)(e) || (0, i(642157).sk)(e) || (0, i(642157).Jx)(e) || (0, i(642157).tb)(e) || (0, i(642157).Lg)(e) || (0, i(642157).cd)(e) || (0, i(642157).$2)(e) || (0, i(642157)._S)(e) || (0, i(642157).ZK)(e));
                        else throw (0, n().HB)(e)
                    })
                }, w = (e, t) => {
                    void 0 !== e && e.forEach(e => {
                        (0, i(642157).Ds)(e) ? S(e.group_id, t): (0, i(642157).B2)(e) || (0, i(642157).hI)(e)
                    })
                }, P = ({
                    recordMapFromWhichToFindRelevantEntities: e,
                    blockModel: t
                }) => {
                    let n = r().b4_.fromRecordMap(e),
                        o = t.getParentPointer();
                    if (o.table !== i(46241).V) return;
                    let a = e.getModel(o);
                    if (void 0 === a) return;
                    let {
                        validItems: s
                    } = a.getPropertyPermissionItems();
                    s.forEach(e => {
                        if ("page_creator" === e.property_info.type) return;
                        let r = e.property_info.property_id,
                            o = t.getProperty(r, n);
                        void 0 === o || (0, i(247438).FAS)(o).forEach(e => {
                            S(e.groupId, e.spaceId)
                        })
                    })
                };
                for (let {
                        pointer: e,
                        model: i
                    } of t)
                    if (void 0 !== e.spaceId && v(e.spaceId), e.table === d().NX) v(e.id);
                    else if (e.table === _().yK) {
                    if (void 0 !== i) {
                        let t = i;
                        b(e.id, t.getSpaceId()), v(t.getSpaceId()), t.getRawMembership().forEach(e => {
                            "group" === e.entity_type && S(e.group_id, t.getSpaceId())
                        }), x(t.getPermissionItems(), t.getSpaceId());
                        let n = t.getParentPointer();
                        n.table === d().NX && void 0 !== n.id && v(n.id)
                    }
                } else if (e.table === f().aJ) {
                    let {
                        spaceId: t
                    } = (0, f().SM)(e.id);
                    v(t)
                } else if (e.table === c().m3) {
                    let {
                        spaceId: t
                    } = (0, c().uU)(e.id);
                    v(t)
                } else if (e.table === a().ev && void 0 !== i) v(i.getSpaceId()), x(i.getPermissionItems(), i.getSpaceId()), P({
                    recordMapFromWhichToFindRelevantEntities: t,
                    blockModel: i
                });
                else if (e.table === h().C && void 0 !== i) {
                    let i = r().b4_.fromRecordMap(t)(e);
                    if (void 0 === i) break;
                    let n = i.getSpaceId();
                    v(n), w(i.getPermissionItems(), n)
                } else if (e.table === g().T && void 0 !== i) {
                    let i = r().b4_.fromRecordMap(t)(e);
                    if (void 0 === i) continue;
                    v(i.getSpaceId())
                } else if (e.table === p().n) {
                    let {
                        spacePermissionGroupId: t,
                        spaceId: i
                    } = (0, p().HT)(e.id);
                    S(t, i), v(i)
                } else if (e.table === y().f3c) {
                    let {
                        spacePermissionGroupId: t,
                        spaceId: i
                    } = (0, m().Pq)(e.id);
                    S(t, i), v(i)
                } else if (e.table === l().V1) k(e.id);
                else if (e.table === u().lM) {
                    let {
                        profileId: t
                    } = (0, u().fc)(e.id);
                    k(t)
                }
                return s
            }
            async function w(e) {
                let {
                    ancestorsRecordMap: t,
                    actorPointers: r,
                    loadRecordModel: a
                } = e, l = x({
                    recordMapFromWhichToFindRelevantEntities: t
                }), g = i(412951).RecordMap.create(), h = l;
                for (let e = 0; e < 4; e++) {
                    let e = function(e) {
                            let {
                                relevantEntities: t,
                                pointerWasAlreadyQueriedFn: r,
                                actorPointers: a
                            } = e, l = new(o()).d;
                            for (let [e, o] of (t.relevantSpaceIds.forEach(e => {
                                    if (e === i(268033).ql);
                                    else {
                                        let t = {
                                            table: d().NX,
                                            id: e
                                        };
                                        for (let i of (r(t) || l.add(t), a))
                                            if (i.table === v().oo) {
                                                let t = (0, f().i1)({
                                                    spaceId: e,
                                                    userId: i.id
                                                });
                                                r(t) || l.add(t)
                                            } else if (i.table === s().GP) {
                                            let t = (0, c().gZ)({
                                                spaceId: e,
                                                botId: i.id
                                            });
                                            r(t) || l.add(t)
                                        } else(0, n().HB)(i)
                                    }
                                }), t.relevantTeamIds)) o.forEach(t => {
                                let i = {
                                    table: _().yK,
                                    id: t,
                                    spaceId: e
                                };
                                r(i) || l.add(i)
                            });
                            for (let [e, i] of t.relevantGroupIds) i.forEach(t => {
                                let i = (0, p().S4)({
                                    spacePermissionGroupId: t,
                                    spaceId: e
                                });
                                for (let n of (r(i) || l.add(i), l.add(i), a))
                                    if (n.table === v().oo) {
                                        let i = (0, m().BZ)({
                                            spacePermissionGroupId: t,
                                            spaceId: e,
                                            userId: n.id
                                        });
                                        r(i) || l.add(i), l.add(i)
                                    }
                            });
                            for (let e of t.relevantMarketplaceProfileIds)
                                for (let t of a)
                                    if (t.table === v().oo) {
                                        let i = (0, u().xJ)({
                                            profileId: e,
                                            userId: t.id
                                        });
                                        r(i) || l.add(i)
                                    }
                            return l
                        }({
                            relevantEntities: h,
                            pointerWasAlreadyQueriedFn: e => t.pointerWasExplicitlySet(e) || g.pointerWasExplicitlySet(e),
                            actorPointers: r
                        }),
                        y = new(o()).d;
                    for (let t of e)
                        if (t.table === c().m3) {
                            let {
                                botId: e
                            } = (0, c().uU)(t.id), i = await a({
                                table: s().GP,
                                id: e,
                                spaceId: t.spaceId
                            });
                            void 0 === i ? y.add(t) : i.shouldLoadSpaceBot() && y.add(t)
                        } else y.add(t);
                    if (0 === y.size()) break;
                    let b = await a(Array.from(y));
                    g.assign(b), h = x({
                            recordMapFromWhichToFindRelevantEntities: b,
                            alreadyKnownRelevantEntities: l
                        }),
                        function(e) {
                            let {
                                existingRelevantEntitiesToMutate: t,
                                newRelevantEntities: i
                            } = e;
                            i.relevantSpaceIds.forEach(e => {
                                t.relevantSpaceIds.add(e)
                            }), i.relevantTeamIds.forEach((e, i) => {
                                let n = t.relevantTeamIds.get(i);
                                if (void 0 === n) t.relevantTeamIds.set(i, e);
                                else
                                    for (let t of e) n.add(t)
                            }), i.relevantGroupIds.forEach((e, i) => {
                                let n = t.relevantGroupIds.get(i);
                                if (void 0 === n) t.relevantGroupIds.set(i, e);
                                else
                                    for (let t of e) n.add(t)
                            }), i.relevantMarketplaceProfileIds.forEach(e => {
                                t.relevantMarketplaceProfileIds.add(e)
                            })
                        }({
                            existingRelevantEntitiesToMutate: l,
                            newRelevantEntities: h
                        })
                }
                return {
                    supplementalRecordMap: g,
                    relevantEntities: l
                }
            }

            function P(e) {
                let {
                    recordMap: t,
                    actorPointers: i,
                    logErrorFn: n,
                    getRecordModelFnWithMaybeMissingRecords: r
                } = e;
                return new k({
                    getRecordModel: r,
                    actorPointers: i,
                    logErrorFn: n,
                    relevantEntities: x({
                        recordMapFromWhichToFindRelevantEntities: t
                    })
                })
            }
        },
        213538: (e, t, i) => {
            function n({
                environment: e,
                spaceId: t
            }) {
                if (!t) return {
                    isLoaded: !0,
                    hasExistingAgents: !1
                };
                let r = (0, i(203462).zf)(e).getData(e, {
                    spaceId: t
                });
                return r ? {
                    isLoaded: !0,
                    hasExistingAgents: r.agents.some(e => e.isDefined() && !1 !== e.getAlive())
                } : {
                    isLoaded: !1,
                    hasExistingAgents: !1
                }
            }

            function r() {
                let e = (0, i(533992).v3)(),
                    t = (0, i(972740).L)();
                return (0, i(682985).K8)(() => n({
                    environment: e,
                    spaceId: null == t ? void 0 : t.id
                }), [e, t])
            }
            i.d(t, {
                H: () => r,
                _: () => n
            }), i(898992), i(737550)
        },
        216260: (e, t, i) => {
            function n() {
                var e;
                return i(262166).Vm(null == (e = i(105692).subscriptionDataStoreInstance.state) ? void 0 : e.subscriptionTier)
            }

            function r() {
                return i(262166).y4(n())
            }

            function o() {
                return i(262166).HO(n())
            }

            function a() {
                return i(262166).OX(n())
            }

            function s() {
                return i(262166).dL(n())
            }

            function l() {
                return i(262166).El(n())
            }

            function u() {
                return i(262166).jR(n())
            }

            function d({
                currentSubscriptionTier: e,
                salesStatus: t
            }) {
                if ("enterprise" === e)
                    if ("self_serve" === t || "sales_eligible" === t) return !0;
                    else return !1;
                return "self_serve" === t
            }

            function c({
                subscriptionTier: e,
                currentSubscriptionTier: t,
                salesStatus: i
            }) {
                return "enterprise" === e && d({
                    currentSubscriptionTier: t,
                    salesStatus: i
                }) ? "enterprise_limited" : e
            }

            function p({
                product: e,
                currentSubscriptionTier: t,
                salesStatus: n
            }) {
                return (0, i(645040).OV)(e) ? c({
                    subscriptionTier: e,
                    currentSubscriptionTier: t,
                    salesStatus: n
                }) : e
            }
            i.d(t, {
                AI: () => n,
                El: () => l,
                HO: () => o,
                OX: () => a,
                RL: () => d,
                YS: () => p,
                dL: () => s,
                jR: () => u,
                kg: () => c,
                y4: () => r
            })
        },
        217844: (e, t, i) => {
            i.d(t, {
                _: () => r
            });
            var n = i(296540);

            function r(e) {
                let t = (0, n.useRef)(!1),
                    r = (0, i(533992).v3)(),
                    o = (0, i(544978).g)(),
                    a = (0, n.useMemo)(() => {
                        var e;
                        return null == o || null == (e = o.performanceMark) ? void 0 : e.call(o, "premium_feature_availability.client.latency")
                    }, [o]),
                    s = (0, i(783902).C)(null == o ? void 0 : o.featureDataLoaders, e),
                    l = (0, i(682985).K8)(() => {
                        if (s) return (0, i(94418).jx)(s)
                    }, [s], {
                        equalityFn: i(381453).n4
                    }),
                    u = !!l;
                return (0, n.useEffect)(() => {
                    if (u && !t.current) {
                        var i;
                        t.current = !0, null == o || null == (i = o.performanceMeasure) || i.call(o, a, {
                            data: {
                                feature_name: e.name,
                                flavor: "hook"
                            }
                        })
                    }
                }, [u, e.name, r, a, o]), l
            }
        },
        220530: (e, t, i) => {
            i.d(t, {
                f: () => n
            });

            function n(e) {
                let {
                    userId: t,
                    teamStore: n,
                    userPermissionGroups: r,
                    spaceUser: o
                } = e, a = (0, i(228091).a)({
                    teamStore: n,
                    userId: t,
                    userPermissionGroups: r,
                    spaceUser: o
                });
                switch (a) {
                    case "owner":
                    case "member":
                    case "team_level_guest":
                        return !0;
                    case "none":
                        return !1;
                    case void 0:
                        return;
                    default:
                        (0, i(722371).HB)(a)
                }
            }
        },
        228091: (e, t, i) => {
            i.d(t, {
                a: () => n
            }), i(944114), i(898992), i(354520), i(672577), i(803949), i(581454);

            function n(e) {
                let {
                    teamStore: t,
                    userId: n,
                    userPermissionGroups: r,
                    spaceUser: o
                } = e;
                if (void 0 === t.getModel()) return;
                let a = t.getSpaceStore(),
                    s = a && n ? i(229903).V.createChildStore(a, (0, i(729052).i1)({
                        userId: n,
                        spaceId: a.id
                    })) : void 0,
                    l = o ? ? (null == s ? void 0 : s.getModel());
                return function(e) {
                    let {
                        rawMembership: t,
                        isDefault: n,
                        userPermissionGroups: r,
                        spaceUser: o
                    } = e, a = [];
                    if (!o || 0 === (a = function(e) {
                            let {
                                rawMembership: t,
                                isDefault: n,
                                userPermissionGroups: r,
                                spaceUser: o
                            } = e, a = [], s = t.find(e => "user" === e.entity_type && e.user_id === o.user_id);
                            return (0, i(729052).MN)(o.membership_type) || (null == s ? void 0 : s.type) === "team_level_guest" ? (s && a.push(s), t.filter(e => "group" === e.entity_type && r.has(e.group_id)).forEach(e => {
                                a.push(e)
                            }), n && 0 === a.length && (0, i(729052).KM)(o.membership_type) && a.push({
                                type: "member",
                                entity_type: "user",
                                user_id: o.user_id
                            }), a) : []
                        }({
                            rawMembership: t,
                            isDefault: n,
                            spaceUser: o,
                            userPermissionGroups: r
                        })).length) return "none";
                    let s = a.map(e => e.type);
                    return (0, i(422280).eF)(...s)
                }({
                    rawMembership: t.getRawMembership(),
                    isDefault: t.isDefault(),
                    userPermissionGroups: r,
                    spaceUser: l
                })
            }
        },
        240414: (e, t, i) => {
            i.d(t, {
                T: () => s
            }), i(944114), i(898992), i(354520), i(672577), i(430670), i(803949);
            var n = () => i(375622);
            class r extends n().A {
                byStore = this.index(e => e.props.store);
                byId = this.index(e => e.props.store.id);
                getMembersByDOMOrder({
                    filter: e
                }) {
                    return super.getMembersByDOMOrder({
                        filter: t => o(t) && e(t)
                    })
                }
                findSelectableFromStore(e) {
                    return this.byStore.find(e, t => t.props.store === e)
                }
                findSelectablesFromStore(e) {
                    return this.byStore.filter(e, t => t.props.store === e)
                }
                findSelectableFromStoreAndLocation(e, t) {
                    return this.byStore.find(e, i => i.props.store === e && i.refLocation === t)
                }
                findNodeFromStore(e) {
                    let t = this.findSelectableFromStore(e);
                    if (t) return t.getNode()
                }
                getRectFromStore(e) {
                    let t = this.findNodeFromStore(e);
                    if (t && t instanceof Element) return t.getBoundingClientRect()
                }
                findScrollToSelectableFromStore(e) {
                    let t = i(584265).default.getCurrentDefaultContainer();
                    return this.byStore.find(e, i => i.props.store === e && a(t, i))
                }
                findScrollToSelectablesFromIds(e) {
                    let t = i(584265).default.getCurrentDefaultContainer();
                    return this.filter(i => e.includes(i.props.store.id) && a(t, i))
                }
                findSelectablesFromIdInDomOrder(e) {
                    let t = i(584265).default.getCurrentDefaultContainer();
                    return this.byId.filter(e, i => {
                        var n;
                        return o(i) && (null == (n = i.props.store) ? void 0 : n.id) === e && i.getContextSelectableContainer() === t
                    }).sort((e, t) => (0, i(771105).A)(e.getNode(), t.getNode()))
                }
                findSelectablesFromIds(e) {
                    let t = [];
                    return e.forEach(e => {
                        let i = this.findSelectablesFromIdInDomOrder(e);
                        i.length && t.push(i[0])
                    }), t
                }
                findAllSelectablesFromIds(e) {
                    return e.flatMap(e => this.findSelectablesFromIdInDomOrder(e))
                }
                findNodeFromBlockId(e) {
                    var t;
                    let i = this.findSelectablesFromIdInDomOrder(e);
                    return null == i || null == (t = i[0]) ? void 0 : t.getNode()
                }
                findSelectableFromChildNode(e) {
                    let t = this.getMembersByDOMOrder({
                        filter: t => {
                            var i;
                            return null == (i = t.getNode()) ? void 0 : i.contains(e)
                        }
                    });
                    return t[t.length - 1]
                }
                findClosestVisibleParent(e) {
                    let t = e.getParentBlockStore();
                    for (; t;) {
                        let e = t.getParentBlockStore();
                        if (!e) break;
                        let i = this.findNodeFromBlockId(t.id);
                        if (i) return {
                            node: i,
                            blockStore: t
                        };
                        t = e
                    }
                    return {}
                }
            }

            function o(e) {
                return !e.props.isHoverMenu
            }

            function a(e, t) {
                return !!(t.props.canSelect && !t.props.disableScrollToReveal && t.getContextSelectableContainer() === e)
            }
            let s = new r;
            (0, i(202146).exposeDebugValue)("GlobalSelectableRegistry", s)
        },
        259533: (e, t, i) => {
            let n;

            function r(e) {
                let t = {},
                    {
                        subMetricsStore: n,
                        metricDataStore: r,
                        OPFSMetricDataStore: o
                    } = i(329464).A.state;
                for (let [r, o] of (0, i(722371).WP)(n.state)) {
                    if (void 0 === o) continue;
                    let {
                        startTime: i,
                        endTime: n
                    } = o;
                    if (e.isPrewarmedTab) {
                        if (n <= e.prewarmedTabNavigationStart) {
                            t[r] = 0;
                            continue
                        }
                        if (i < e.prewarmedTabNavigationStart && n > e.prewarmedTabNavigationStart) {
                            t[r] = n - e.prewarmedTabNavigationStart;
                            continue
                        }
                    }
                    t[r] = n - i
                }
                return {
                    sub_metrics: t,
                    opfs_metrics: o.state,
                    ...r.state
                }
            }

            function o() {
                let {
                    page_origin_to_app_start: e,
                    app_start_to_main_start: t,
                    main_start_to_prefetch_initiated: n,
                    prefetch_initiated_to_statsig_bootup_blocking_start: r,
                    statsig_bootup_blocking: o,
                    render_start_to_render_end: a,
                    render_end_to_await_page_chunk_start: s,
                    await_page_chunk_start_to_await_page_chunk_end: l,
                    await_page_chunk_end_to_browser_repaint_start: u
                } = i(329464).A.state.subMetricsStore.state;
                return {
                    page_origin_to_app_start: e,
                    app_start_to_main_start: t,
                    main_start_to_prefetch_initiated: n,
                    prefetch_initiated_to_statsig_bootup_blocking_start: r,
                    statsig_bootup_blocking: o,
                    render_start_to_render_end: a,
                    render_end_to_await_page_chunk_start: s,
                    await_page_chunk_start_to_await_page_chunk_end: l,
                    await_page_chunk_end_to_browser_repaint_start: u
                }
            }

            function a() {
                let {
                    initialLoadCachedPageChunkCalledAt: e
                } = i(329464).A.state;
                void 0 === e && i(329464).A.update(e => ({ ...e,
                    initialLoadCachedPageChunkCalledAt: performance.now()
                }))
            }
            async function s() {
                await i(329464).A.waitUntil(() => i(329464).A.state.initialRenderCompleted)
            }

            function l() {
                let e, t = i(737124).getAppStartTime();
                if (t) {
                    try {
                        let i = performance.getEntriesByType("navigation")[0];
                        e = {
                            time_origin_to_fetch_start: i.fetchStart,
                            fetch_start_to_domain_lookup_start: d({
                                from: i.fetchStart,
                                to: i.domainLookupStart
                            }),
                            domain_lookup_start_to_domain_lookup_end: d({
                                from: i.domainLookupStart,
                                to: i.domainLookupEnd
                            }),
                            connect_start_to_secure_connection_start: d({
                                from: i.connectStart,
                                to: i.secureConnectionStart
                            }),
                            secure_connection_start_to_connect_end: d({
                                from: i.secureConnectionStart,
                                to: i.connectEnd
                            }),
                            connect_end_to_request_start: d({
                                from: i.connectEnd,
                                to: i.requestStart
                            }),
                            request_start_to_response_start: d({
                                from: i.requestStart,
                                to: i.responseStart
                            }),
                            response_start_to_response_end: d({
                                from: i.responseStart,
                                to: i.responseEnd
                            }),
                            response_end_to_app_start: d({
                                from: i.responseEnd,
                                to: t
                            })
                        }
                    } catch (e) {}
                    return e
                }
            }

            function u(e) {
                return e.RouterStore.state.wasPrewarmedTab
            }

            function d({
                from: e,
                to: t
            }) {
                return 0 === e || 0 === t ? 0 : t - e
            }

            function c() {
                let e = i(758654).qn(window.location.href, i(525644).Sn),
                    t = i(758654).qn(window.location.href, i(525644).g4),
                    n = i(758654).qn(window.location.href, i(525644).p2);
                if (!e) return;
                let r = i(758654).qm(window.location.href, i(525644).Sn),
                    o = i(758654).qm(r, i(525644).p2),
                    a = i(758654).qm(o, i(525644).g4);
                window.history.replaceState(window.history.state, "", a), i(329464).A.setDesktopLoadContext({
                    loadOrigin: e,
                    tabCount: t,
                    wasLoadedAtLogin: n
                })
            }

            function p() {
                return i(329464).A.state.desktopLoadOrigin
            }
            async function m() {
                if (void 0 !== n) return n;
                try {
                    var e, t;
                    return n = await (null == (e = await (null == (t = self.caches) ? void 0 : t.match("/active", {
                        cacheName: "notion-swv2-version"
                    }))) ? void 0 : e.text()) === i(986939).A.version
                } catch (e) {
                    return i(773352).log({
                        level: "warning",
                        from: "initialPageRenderActions",
                        type: "isSWV2",
                        error: (0, i(416607).convertErrorToLog)(e)
                    }), !1
                }
            }
            i.r(t), i.d(t, {
                BROWSER_SW_VERSION_CACHE_MIGRATION_VERSION_PATH: () => g,
                BROWSER_SW_VERSION_CACHE_NAME: () => f,
                BROWSER_SW_VERSION_CACHE_PATH: () => _,
                getDesktopLoadOrigin: () => p,
                getFilteredSubMetrics: () => o,
                getSubMetricsAndMetricDataForTracking: () => r,
                getTimeOriginToAppStartSubMetrics: () => l,
                isBrowserSW: () => v,
                isPrewarmedTabInitialRender: () => u,
                isSWV2: () => m,
                setDesktopLoadContext: () => c,
                updateLoadCachedPageChunkCalledAt: () => a,
                waitForInitialPageRenderToComplete: () => s
            }), i(413611);
            let f = "notion-sw-version",
                _ = "/active",
                g = "/activeMigrationVersion";
            async function v() {
                try {
                    return !!await self.caches.match(_, {
                        cacheName: f
                    })
                } catch (e) {
                    return i(773352).log({
                        level: "warning",
                        from: "initialPageRenderActions",
                        type: "isBrowserSW",
                        error: (0, i(416607).convertErrorToLog)(e)
                    }), !1
                }
            }
        },
        260405: (e, t, i) => {
            function n({
                store: e,
                spaceStore: t,
                userId: r
            }) {
                let o = (0, i(276682).L)(e);
                if (!o || !(0, i(892400)._)(e) || !e.isDefined() || !o.isDefined()) return !1;
                let a = e.canRead(),
                    s = (0, i(952592).z)(e),
                    l = (0, i(993077).dp)(t, r),
                    u = i(68809).f.getSpacePermissionGroupIds({
                        spaceId: t.id
                    }),
                    d = o instanceof i(681735).h && !!(0, i(220530).f)({
                        userId: r,
                        teamStore: o,
                        userPermissionGroups: u,
                        spaceUser: l.getModel()
                    });
                return function(e) {
                    let {
                        canReadModel: t,
                        isDeleted: n,
                        model: r
                    } = e;
                    return !n && !!t && !!r.isNavigableBlock() && !! function({
                        model: e,
                        userId: t,
                        currentUserGroupIds: n,
                        currentUserTeamIds: r,
                        isTeamsEnabled: o,
                        isInTranslateMode: a
                    }) {
                        let s = e.getPermissionItems();
                        if (0 === s.length) return !1;
                        let l = new Set(s.filter(i(642157).Ds).map(e => e.group_id));
                        if (Array.from(n).some(e => l.has(e))) return !0;
                        let u = new Set(s.filter(i(642157).eu).map(e => e.team_id));
                        return !!Array.from(r).some(e => u.has(e)) || !(!e.getUserPermissionForId(t) || (0, i(331818).K)({
                            blockModel: e,
                            spaceId: e.getSpaceId(),
                            currentUserId: t,
                            isTeamsEnabled: o,
                            isInTranslateMode: a
                        }))
                    }(e) && ! function({
                        ancestor: e,
                        model: t,
                        isAncestorJoinedTeam: n,
                        isTeamsEnabled: r,
                        canReadAncestor: o,
                        spaceUser: a
                    }) {
                        return e.table === i(682956).ev ? !r && t.hasSpacePermission() ? !!(null == a ? void 0 : a.isMember()) : !!(e.id !== t.id && o) : e.table === i(708628).yK && n
                    }(e)
                }({
                    model: e.getModel(),
                    userId: r,
                    ancestor: o.getModel(),
                    currentUserGroupIds: u,
                    isAncestorJoinedTeam: d,
                    currentUserTeamIds: new Set(i(988752).E.readTeams(r, t.id, new Set(["Joined"])).teams.map(e => e.id)),
                    canReadModel: a,
                    canReadAncestor: o.canRead(),
                    isDeleted: s,
                    isTeamsEnabled: !t.isDefined() || t.isTeamsEnabled(),
                    spaceUser: l.getModel()
                })
            }
            i.d(t, {
                B: () => n
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(581454), i(898992), i(354520), i(737550)
        },
        262166: (e, t, i) => {
            i.d(t, {
                $P: () => f,
                El: () => p,
                HG: () => C,
                HO: () => l,
                Kv: () => y,
                OX: () => d,
                Pg: () => m,
                R$: () => B,
                U7: () => x,
                Vm: () => a,
                ZC: () => A,
                bQ: () => O,
                bp: () => M,
                dL: () => c,
                gN: () => w,
                h0: () => h,
                hW: () => S,
                jR: () => _,
                lP: () => I,
                m9: () => T,
                o3: () => o,
                qR: () => k,
                rV: () => b,
                sP: () => g,
                tL: () => u,
                u2: () => D,
                v0: () => E,
                wb: () => v,
                y4: () => s
            }), i(898992), i(354520), i(672577);
            let n = ["free", "personal_free", "team_free"],
                r = ["personal", "student"],
                o = {
                    free: 0,
                    personal_free: 0,
                    personal: 1,
                    student: 2,
                    team_free: 3,
                    plus: 3,
                    business: 4,
                    enterprise: 5
                };

            function a(e) {
                return e || "free"
            }

            function s(e) {
                return _(e) || y(e, ["personal", "student"])
            }

            function l(e) {
                return y(e, ["business", "enterprise"])
            }

            function u(e) {
                return "business" === e
            }

            function d(e) {
                return "enterprise" === e
            }

            function c(e) {
                return !e || y(e, n)
            }

            function p(e) {
                return !g(e)
            }

            function m(e) {
                return void 0 !== e && ["free", "personal_free", "student", "personal"].includes(e)
            }

            function f(e) {
                return "plus" === e
            }

            function _(e) {
                return y(e, ["plus", "business", "enterprise"])
            }

            function g(e) {
                return y(e, r)
            }

            function v(e) {
                return "student" === e
            }

            function h(e) {
                return "enterprise" === e
            }

            function y(e, t) {
                return !!e && t.includes(e)
            }

            function b(e, t) {
                return o[e] >= o[t]
            }

            function S(e) {
                return (0, i(381453).Sk)((0, i(381453).oE)(e), e => o[e])
            }

            function k(e) {
                let {
                    oldTier: t,
                    newTier: i
                } = e, n = o[t], r = o[i];
                return n < r ? "upgrade" : n > r ? "downgrade" : "equal"
            }

            function x(e) {
                let {
                    oldTier: t,
                    newTier: i,
                    useEnterpriseLimitedName: n
                } = e, r = k({
                    oldTier: t,
                    newTier: i
                });
                return "equal" === r ? "none" : "downgrade" === r ? "downgrade" : "enterprise" !== i || n ? "upgrade" : "contact_sales"
            }

            function w(e, t) {
                let i = o[e] < o.plus ? o.plus - 1 : o[e];
                return o[t] === i + 1
            }
            let P = {
                free: {
                    guestLimit: 10,
                    guestLimitToEnforce: 10,
                    spaceBlockLimit: 1e3,
                    fileUploadMaxBytes: 5242880,
                    versionHistoryLimitDays: 7,
                    defaultPublicDomains: 1
                },
                personal_free: {
                    guestLimit: 10,
                    guestLimitToEnforce: 10,
                    spaceBlockLimit: 1e3,
                    fileUploadMaxBytes: 5242880,
                    versionHistoryLimitDays: 7,
                    defaultPublicDomains: 1
                },
                team_free: {
                    guestLimit: 10,
                    guestLimitToEnforce: 10,
                    spaceBlockLimit: 1e3,
                    fileUploadMaxBytes: 5242880,
                    versionHistoryLimitDays: 7,
                    defaultPublicDomains: 1
                },
                student: {
                    guestLimit: void 0,
                    guestLimitToEnforce: 100,
                    spaceBlockLimit: void 0,
                    fileUploadMaxBytes: 0x3200000,
                    versionHistoryLimitDays: 30,
                    defaultPublicDomains: 5
                },
                personal: {
                    guestLimit: void 0,
                    guestLimitToEnforce: 100,
                    spaceBlockLimit: void 0,
                    fileUploadMaxBytes: 0x3200000,
                    versionHistoryLimitDays: 7,
                    defaultPublicDomains: 5
                },
                plus: {
                    guestLimit: void 0,
                    guestLimitToEnforce: 100,
                    spaceBlockLimit: void 0,
                    fileUploadMaxBytes: 0x3200000,
                    versionHistoryLimitDays: 30,
                    defaultPublicDomains: 5
                },
                business: {
                    guestLimit: void 0,
                    guestLimitToEnforce: 250,
                    spaceBlockLimit: void 0,
                    fileUploadMaxBytes: 0x3200000,
                    versionHistoryLimitDays: 365,
                    defaultPublicDomains: 5
                },
                enterprise: {
                    guestLimit: void 0,
                    guestLimitToEnforce: 250,
                    spaceBlockLimit: void 0,
                    fileUploadMaxBytes: 0x3200000,
                    versionHistoryLimitDays: Number.MAX_SAFE_INTEGER,
                    defaultPublicDomains: 5
                }
            };

            function I() {
                let {
                    spaceBlockLimit: e
                } = P.free;
                return void 0 === e ? Number.MAX_SAFE_INTEGER : e
            }

            function C(e) {
                return P[e].fileUploadMaxBytes ? ? P.free.fileUploadMaxBytes
            }

            function T() {
                return {
                    free: 10,
                    personal_free: 10,
                    team_free: 10,
                    plus: 100,
                    student: 100,
                    personal: 100,
                    business: 250,
                    enterprise: 250
                }
            }

            function M(e) {
                return y(e, ["enterprise"])
            }

            function A(e) {
                return P[e].defaultPublicDomains ? ? P.free.defaultPublicDomains
            }
            let E = (0, i(109939).YK)({
                ai: {
                    defaultMessage: "AI",
                    id: "ai.title"
                },
                aiCreditPack: {
                    defaultMessage: "Notion Credits",
                    id: "aiCreditPack.title"
                },
                notionAi: {
                    defaultMessage: "Notion AI",
                    id: "notionAi.title"
                },
                aiCoreWithOfferPercentage: {
                    defaultMessage: "Notion AI core · {percentage}% off until {date}",
                    id: "aiCore.withOffer.label"
                },
                aiCoreWithOfferSeats: {
                    defaultMessage: "Notion AI core · {seats, plural, one {# seat} other {# seats}} free until {date}",
                    id: "aiCore.withOfferSeats.label"
                },
                sites: {
                    defaultMessage: "Custom Hostnames",
                    id: "sites.title"
                },
                personalFreePlan: {
                    defaultMessage: "Personal Plan",
                    id: "personalFreePlan.title"
                },
                personalFree: {
                    defaultMessage: "Personal",
                    id: "personalFree.title"
                },
                teamTrialPlan: {
                    defaultMessage: "Team Plan (Trial)",
                    id: "teamTrialPlan.title"
                },
                freePlan: {
                    defaultMessage: "Free Plan",
                    id: "freePlan.title"
                },
                free: {
                    defaultMessage: "Free",
                    id: "free.title"
                },
                personalPlan: {
                    defaultMessage: "Personal Pro Plan",
                    id: "personalPlan.label"
                },
                personal: {
                    defaultMessage: "Personal Pro",
                    id: "personal.label"
                },
                personalForIos: {
                    defaultMessage: "iOS Plus",
                    id: "personal.ios.label"
                },
                personalForAndroid: {
                    defaultMessage: "Android Plus",
                    id: "personal.android.label"
                },
                singlePlayerPlusPlan: {
                    defaultMessage: "Plus Plan with a 1-member limit",
                    id: "singlePlayerPlusPlan.title"
                },
                educationPlusPlan: {
                    defaultMessage: "Education Plus Plan",
                    id: "educationPlusPlan.title"
                },
                educationPlus: {
                    defaultMessage: "Education Plus",
                    id: "educationPlus.title"
                },
                student: {
                    defaultMessage: "Education Plus",
                    id: "educationPlus.title"
                },
                plusPlan: {
                    defaultMessage: "Plus Plan",
                    id: "plusPlan.title"
                },
                plus: {
                    defaultMessage: "Plus",
                    id: "plus.title"
                },
                plusTrial: {
                    defaultMessage: "Plus Trial",
                    id: "plusTrial.title"
                },
                plusWithCoreAi: {
                    defaultMessage: "Plus with Core AI",
                    id: "plusWithCoreAi.title"
                },
                plusWithOfferPercentage: {
                    defaultMessage: "Plus · {percentage}% off until {date}",
                    id: "plus.withOffer.label"
                },
                plusWithOfferSeats: {
                    defaultMessage: "Plus · {seats, plural, one {# seat} other {# seats}} free until {date}",
                    id: "plus.withOfferSeats.label"
                },
                businessPlan: {
                    id: "businessPlan.title",
                    defaultMessage: "Business Plan"
                },
                business: {
                    id: "business.title",
                    defaultMessage: "Business"
                },
                businessTrial: {
                    id: "businessTrial.title",
                    defaultMessage: "Business Trial"
                },
                businessWithOffer: {
                    defaultMessage: "Business · {percentage}% off until {date}",
                    id: "business.withOffer.label"
                },
                businessWithOfferSeats: {
                    defaultMessage: "Business · {seats, plural, one {# seat} other {# seats}} free until {date}",
                    id: "business.withOfferSeats.label"
                },
                enterprisePlan: {
                    defaultMessage: "Enterprise Plan",
                    id: "enterprisePlan.label"
                },
                enterprise: {
                    defaultMessage: "Enterprise",
                    id: "enterprise.label"
                },
                enterpriseLimited: {
                    defaultMessage: "Enterprise Limited",
                    id: "enterpriseLimited.label"
                },
                enterpriseLimitedPlan: {
                    defaultMessage: "Enterprise Limited Plan",
                    id: "enterpriseLimitedPlan.label"
                },
                enterpriseWithOffer: {
                    defaultMessage: "Enterprise · {percentage}% off until {date}",
                    id: "enterprise.withOffer.label"
                },
                enterpriseWithOfferSeats: {
                    defaultMessage: "Enterprise · {seats, plural, one {# seat} other {# seats}} free until {date}",
                    id: "enterprise.withOfferSeats.label"
                },
                enterpriseLimitedWithOffer: {
                    defaultMessage: "Enterprise Limited · {percentage}% off until {date}",
                    id: "enterpriseLimited.withOffer.label"
                },
                enterpriseLimitedWithOfferSeats: {
                    defaultMessage: "Enterprise Limited · {seats, plural, one {# seat} other {# seats}} free until {date}",
                    id: "enterpriseLimited.withOfferSeats.label"
                }
            });

            function D({
                product: e,
                intl: t
            }) {
                switch (e) {
                    case "personal_free":
                    case "team_free":
                    case "free":
                        return t.formatMessage(E.free);
                    case "personal":
                        return t.formatMessage(E.personal);
                    case "student":
                        return t.formatMessage(E.educationPlus);
                    case "plus":
                        return t.formatMessage(E.plus);
                    case "business":
                        return t.formatMessage(E.business);
                    case "enterprise":
                        return t.formatMessage(E.enterprise);
                    case "enterprise_limited":
                        return t.formatMessage(E.enterpriseLimited);
                    case "ai":
                        return t.formatMessage(E.ai);
                    case "ai_credit_pack":
                        return t.formatMessage(E.aiCreditPack);
                    case "sites_custom_hostnames":
                        return t.formatMessage(E.sites);
                    default:
                        return e
                }
            }

            function B({
                products: e,
                intl: t
            }) {
                let n = e.find(i(645040).OV) || "plus",
                    r = e.filter(i(645040).Qt);
                return "plus" === n && r.includes("ai") ? t.formatMessage(E.plusWithCoreAi) : D({
                    product: n,
                    intl: t
                })
            }

            function O({
                tier: e,
                intl: t,
                isTrialing: i
            }) {
                if (i) switch (e) {
                    case "plus":
                        return t.formatMessage(E.plusTrial);
                    case "business":
                        return t.formatMessage(E.businessTrial)
                }
                switch (e) {
                    case "free":
                        return t.formatMessage(E.freePlan);
                    case "personal":
                        return t.formatMessage(E.personalPlan);
                    case "student":
                        return t.formatMessage(E.educationPlusPlan);
                    case "plus":
                        return t.formatMessage(E.plusPlan);
                    case "business":
                        return t.formatMessage(E.businessPlan);
                    case "enterprise":
                        return t.formatMessage(E.enterprisePlan);
                    case "enterprise_limited":
                        return t.formatMessage(E.enterpriseLimitedPlan);
                    default:
                        return e
                }
            }
        },
        275619: (e, t, i) => {
            i.d(t, {
                I: () => n
            }), i(898992), i(354520), i(581454);

            function n({
                environment: e,
                spaceViewStore: t
            }) {
                var r;
                let o, a = t.getSpaceStore(),
                    s = e.currentUser.id;
                if (!a || !s) return;
                let l = i(295742).A.getSharedPagesState({
                        spaceId: a.id,
                        userId: s
                    }),
                    u = a.getPagesStore(),
                    d = (null == l || null == (r = l.currentPageIds) ? void 0 : r.map(e => i(970831).B.createChildStore(u, {
                        table: i(832375).evP,
                        id: e,
                        spaceId: a.id
                    }))) || [],
                    c = t.getPrivatePageStores(),
                    p = 0 === c.length;
                return o = p ? (0, i(868488).I)(e, a) : c, (0, i(635339).Hg)({
                    use_legacy_private_pages_ordering: p && o.length > 0
                }), i(381453).hS([...o, ...d], e => e.id).filter(e => (0, i(528991).K)(e) && !(0, i(952592).z)(e) && (e.isType("copy_indicator") || e.isNavigableBlock()))
            }
        },
        277581: (e, t, i) => {
            i.d(t, {
                v: () => n
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(803949), i(581454);

            function n(e) {
                let t = e.userId;
                if (!t) return {
                    teams: [],
                    hasUnjoinedActiveTeams: void 0
                }; {
                    let n = e.getJoinedTeams().slice(),
                        r = e.getSpaceStore();
                    if (!r) return {
                        teams: [],
                        hasUnjoinedActiveTeams: void 0
                    };
                    let o = (0, i(924425).Z)({
                        userId: t,
                        spaceStore: r,
                        teamTypes: new Set(["Joined"])
                    });
                    return ((null == o ? void 0 : o.teams.map(e => e.id)) ? ? []).forEach(e => {
                        n.includes(e) || n.push(e)
                    }), {
                        teams: n.map(t => i(681735).h.createChildStore(e, {
                            table: i(832375).yKj,
                            id: t
                        })),
                        hasUnjoinedActiveTeams: null == o ? void 0 : o.hasUnjoinedActiveTeams
                    }
                }
            }
        },
        295742: (e, t, i) => {
            i.d(t, {
                A: () => o
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {}
                }
                getSharedPagesState(e) {
                    let {
                        userId: t,
                        spaceId: i,
                        useStrictMode: n = !1
                    } = e, r = this.state[t];
                    if (n) {
                        if (!r) return;
                        return r[i]
                    }
                    let o = r;
                    return o || (o = {}, this.state[t] = o), o[i] ? ? {
                        currentPageIds: void 0,
                        loadingDone: void 0,
                        emitValue: -1
                    }
                }
                setSharedPagesState(e) {
                    let {
                        userId: t,
                        spaceId: i,
                        state: n
                    } = e, r = this.state[t];
                    r || (r = {}, this.state[t] = r), r[i] = n, this.emit()
                }
                hasLoaded(e) {
                    let t = this.getSharedPagesState(e);
                    return (null == t ? void 0 : t.currentPageIds) instanceof Array
                }
            }
            let o = new r
        },
        304636: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => a
            });
            var n = () => i(546605);
            class r extends n().Store {
                lastUpdater = 0;
                getInitialState() {
                    return {
                        type: "closed"
                    }
                }
                createUpdater() {
                    let e = ++this.lastUpdater;
                    return t => {
                        if (e === this.lastUpdater) return t()
                    }
                }
                invalidateLastUpdater() {
                    this.lastUpdater += 1
                }
                resetStore() {
                    this.invalidateLastUpdater(), "assistantCompletionPopup" === this.state.type && this.setState({
                        type: "closed"
                    })
                }
                getExistingAISessionId() {
                    if ("assistantCompletionPopup" === this.state.type) return this.state.sessionId;
                    "agentCompletionPopup" !== this.state.type && "closed" !== this.state.type && (0, i(722371).HB)(this.state)
                }
                isEditingEmptyBlock() {
                    var e;
                    let t = this.state;
                    return !!("assistantCompletionPopup" === t.type && "initialPrompt" === t.stage && "cursor" === t.context.type && (null == (e = t.context.currentBlock) ? void 0 : e.isEmptyEditableBlock()))
                }
                updateScrollerStore(e) {
                    let t = this.state;
                    if ("agentCompletionPopup" !== t.type && "assistantCompletionPopup" !== t.type) return;
                    let n = t.context.scrollerStore !== i(257130).A,
                        r = e === i(257130).A;
                    this.setState({ ...t,
                        didTransitionFromPeekToFullPage: n && r || void 0,
                        context: { ...t.context,
                            scrollerStore: e
                        }
                    })
                }
                setDidTransitionFromPeekToFullPage(e) {
                    let t = this.state;
                    ("assistantCompletionPopup" === t.type || "agentCompletionPopup" === t.type) && this.setState({ ...t,
                        didTransitionFromPeekToFullPage: e || void 0
                    })
                }
            }
            let o = new r;
            (0, i(202146).exposeDebugValue)("CompletionsStore", o);
            let a = o
        },
        310248: (e, t, i) => {
            i.d(t, {
                Dk: () => s,
                JF: () => r,
                eV: () => a,
                uI: () => o
            }), i(410838), i(898992), i(803949), i(737550);
            var n = () => i(688502);

            function r(e) {
                let {
                    store: t,
                    userId: r,
                    updatedPermissionItems: a
                } = e, l = t.getModel();
                if (!l) return !1;
                let u = r ? {
                        table: i(832375).oo9,
                        id: r
                    } : void 0,
                    d = i(412951).RecordMap.create();
                d.setValue(t.pointer, { ...l.__IM_SORRY__getValue(),
                    permissions: a
                });
                let c = i(993189).b4_.tryUntilFound(i(993189).b4_.fromRecordMap(d), t.getRecordModel),
                    p = (0, n().Yn)(t.pointer, c),
                    m = o({
                        actorPointers: new(i(227318)).d(void 0 === u ? [] : [u]),
                        recordPointers: new(i(227318)).d([t.pointer]),
                        getRecordModel: c
                    });
                return s({
                    actorPointer: u,
                    ancestors: p,
                    permissionsContext: m
                }).some(e => {
                    let t = e.permissionItem.role;
                    return t && (0, i(642157).Km)(t)
                })
            }

            function o(e) {
                let {
                    actorPointers: t,
                    getRecordModel: r,
                    recordPointers: o
                } = e, a = i(412951).RecordMap.create();
                for (let e of o) a.has(e) || (0, n().Yn)(e, r).forEach(e => {
                    a.setModel(e.pointer, e)
                });
                let s = (0, i(209654).js)({
                    recordMap: a,
                    getRecordModelFnWithMaybeMissingRecords: r,
                    actorPointers: t,
                    logErrorFn: e => {
                        let {
                            from: t,
                            type: n,
                            error: r,
                            data: o
                        } = e;
                        i(773352).log({
                            level: "error",
                            from: t,
                            type: n,
                            error: {
                                name: r.name,
                                message: r.message,
                                stack: r.stack
                            },
                            data: {
                                miscDataToConvertToString: o
                            }
                        })
                    }
                });
                return {
                    actorPointersSet: new(i(227318)).d(t),
                    actorMemberships: s,
                    ancestorsRecordMap: a,
                    domainLinkSharingEnabledDomainsMap: void 0
                }
            }

            function a(e) {
                let {
                    actor: t,
                    recordPointer: r,
                    spaceStore: o,
                    permissionsContext: a
                } = e, l = (0, n().Wy)(r, a.ancestorsRecordMap), u = o && o.isDefined() && !l.findLast(i(579825).vl) ? [...l, o.getModel()] : l, d = s({
                    actorPointer: null == t ? void 0 : t.pointer,
                    ancestors: u,
                    permissionsContext: a
                });
                if (1 === d.length) {
                    let e = d[0];
                    if ((0, i(642157).FP)(e.permissionItem) && (0, i(642157).Tt)(e.permissionItem.role)) return e
                }
            }

            function s(e) {
                let {
                    actorPointer: t,
                    ancestors: n,
                    ignorePublicPermissions: r,
                    permissionsContext: o
                } = e;
                return (0, i(138798).WH)({
                    actorPointer: t,
                    userActorEmail: void 0,
                    ancestors: n,
                    ignorePublicPermissions: r,
                    permissionsContext: o
                })
            }
        },
        312462: (e, t, i) => {
            function n(e, t, n) {
                var o, a;
                let s;
                return o = n.name, a = () => r(e, t, n), s = new(i(345426)).ComputedStore(a, {
                    debugName: `awaitComputedStore:${o}`
                }), new Promise(e => {
                    let t = () => {
                        let i = s.state;
                        "loading" !== i && (e(i), s.removeListener(t))
                    };
                    s.addListener(t)
                })
            }

            function r(e, t, n) {
                var r, o;
                let {
                    name: a,
                    spaceId: s,
                    userId: l
                } = n;
                if (!s) return;
                let u = i(377292).A.getData(e, {
                        spaceId: s
                    }),
                    d = i(54068).T.getData(e, {
                        spaceId: s
                    }),
                    c = null == u ? void 0 : u.overrides,
                    p = t[a]({
                        environment: e,
                        spaceId: s,
                        userId: l
                    });
                if (!d || !u || "loading" === p) return "loading";
                let m = l ? new(i(229903)).V(e, {
                        table: i(832375).aJN,
                        spaceId: s,
                        id: (0, i(729052).yO)({
                            spaceId: s,
                            userId: l
                        })
                    }) : void 0,
                    f = (r = e, "mixed" === (o = d).provider || ("app_store" === o.provider || "play_store" === o.provider) && !r.device.isMobileNative || "stripe" === o.provider && r.device.isMobileNative ? [] : function(e) {
                        if (!e.device.isMobileNative) return [...i(811656).iI];
                        let t = [];
                        return (0, i(663842).m)({
                            environment: e
                        }) && t.push("personal"), (0, i(907620).T)("supportsAiIAP") && t.push("ai"), t
                    }(r));
                return { ...{
                        name: a,
                        scope: {
                            id: s,
                            type: "space",
                            billingData: d,
                            premiumFeatureOverrides: c ? ? {}
                        },
                        actor: {
                            id: l,
                            isAdminActor: !1,
                            isSpaceAdmin: (null == m ? void 0 : m.isWorkspaceOwner()) ? ? !1,
                            isGuest: !!m && !m.isMember()
                        },
                        data: p,
                        supportedProducts: f,
                        environment: {
                            isMobileNative: e.device.isMobileNative,
                            experimentService: i(218744).default,
                            trackFunction: function(e) {
                                (0, i(104310).u)({
                                    event: {
                                        eventName: "premium_feature_availability",
                                        eventProperties: e
                                    }
                                })
                            },
                            logFunction: i(773352).log.bind(i(773352))
                        }
                    },
                    ..."amount" in n ? {
                        amount: n.amount
                    } : {}
                }
            }
            i.d(t, {
                Y$: () => r,
                lo: () => n
            }), i(944114)
        },
        313442: (e, t, i) => {
            function n(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e, r = i(987458).A.state.offlinePages;
                return r ? Object.values(r).filter(e => {
                    var r;
                    return void 0 !== e && e.is_explicitly_offlined_origin && (r = e.id, new(i(970831)).B(t, {
                        table: i(832375).evP,
                        id: r
                    }).getSpaceId() === n)
                }).length : 0
            }

            function r() {
                let e = (0, i(556583).K)(),
                    t = (0, i(723240).r)(),
                    n = (0, i(345776).T)(),
                    r = (0, i(217844)._)({
                        name: "offline_auto_sync",
                        spaceId: t,
                        userId: n
                    });
                if (e) return r
            }

            function o() {
                let e = (0, i(556583).y)(),
                    t = (0, i(723240).r)(),
                    n = (0, i(345776).T)(),
                    r = (0, i(217844)._)({
                        amount: 1,
                        name: "offline_manual_sync",
                        spaceId: t,
                        userId: n
                    });
                if (e) return r
            }
            i.d(t, {
                AI: () => n,
                EW: () => o,
                Vz: () => r
            }), i(898992), i(354520)
        },
        322730: (e, t, i) => {
            i.d(t, {
                X: () => o,
                q: () => r
            });
            let n = new(i(815048)).O2("errorBoundaryDebugger", async () => await i.e(14068).then(i.bind(i, 352743))),
                r = (0, i(815048)._h)(n, e => e.ErrorBoundaryDebugger),
                o = new(i(815048)).O2("errorBoundaryDebuggingStore", async () => await i.e(82430).then(i.bind(i, 34939)))
        },
        330870: (e, t, i) => {
            function n() {
                var e;
                let t = (0, i(138375).M6)() ? ? (0, i(138375).r$)(),
                    n = null == (e = i(506507).A.state.caches[i(526226).oB]) ? void 0 : e.inMemoryRecordCache;
                return n ? null == t ? void 0 : t.clone(n) : t
            }
            i.d(t, {
                S: () => r,
                a: () => n
            });
            let r = new(i(345426)).ComputedStore(() => n(), {
                debugName: "CurrentPageStore"
            })
        },
        330898: (e, t, i) => {
            i.d(t, {
                a: () => n
            });

            function n(e) {
                let {
                    billingData: t,
                    experimentService: n,
                    spaceId: r
                } = e;
                return !!(0, i(192159).eh)(t, "ai") || ((0, i(192159).N8)(t) ? (0, i(192159).PB)(t) : (0, i(262166).rV)((0, i(192159).AI)(t), "business") || n.checkGate({
                    gateName: "sonnet_launch_free_ai_092025",
                    actor: i(810016).S,
                    customIDs: {
                        spaceId: r
                    }
                }))
            }
        },
        331818: (e, t, i) => {
            i.d(t, {
                K: () => n
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(908872), i(737550);

            function n(e) {
                return function({
                    blockModel: e,
                    spaceId: t,
                    isTeamsEnabled: n,
                    isInTranslateMode: r = !1,
                    currentUserId: o
                }) {
                    if (!e.getParentId() || e.getParentTable() !== i(213003).NX || e.getParentId() !== t) return {
                        isTopLevelPrivatePage: !1
                    };
                    let a = e.getPermissionItems();
                    if (!a || o && !r && !a.some(e => (0, i(642157).B2)(e) && e.user_id === o && (0, i(642157).Km)((0, i(642157).Lw)(e))) || !n && a.some(i(642157).Lg) || a.some(i(642157).eu) || a.some(i(642157).Ds)) return {
                        isTopLevelPrivatePage: !1
                    };
                    let s = a.reduce((e, t) => ((0, i(642157).B2)(t) && e.add(t.user_id), e), new Set);
                    if (s.size > 1) return {
                        isTopLevelPrivatePage: !1
                    };
                    if (0 === s.size) return e.getPermissionItems().some(e => "public_permission" === e.type && "reader" !== e.role && "comment_only" !== e.role && "read_and_write" !== e.role) ? {
                        isTopLevelPrivatePage: !0,
                        reason: {
                            type: "legacyPublicEditPermission"
                        }
                    } : {
                        isTopLevelPrivatePage: !1
                    };
                    let l = s.values().next().value;
                    return l ? o && l !== o ? {
                        isTopLevelPrivatePage: !1
                    } : {
                        isTopLevelPrivatePage: !0,
                        reason: {
                            type: "userPermission",
                            userId: l
                        }
                    } : {
                        isTopLevelPrivatePage: !1
                    }
                }(e).isTopLevelPrivatePage
            }
        },
        335751: (e, t, i) => {
            i.d(t, {
                c: () => a
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520);
            var n = () => i(970831),
                r = () => i(832375);
            let o = new(i(971026)).X;

            function a(e) {
                let {
                    environment: t,
                    spaceViewStore: a,
                    userSettingsStore: s,
                    disableSorting: l = !1
                } = e, u = t.currentUser.id, d = a.getSpaceStore();
                if (!d || !u) return []; {
                    let e, c = i(295742).A.getSharedPagesState({
                            spaceId: d.id,
                            userId: u
                        }),
                        p = (null == c ? void 0 : c.currentPageIds) ? ? [],
                        m = o.memo(() => new(i(185890)).p({
                            debugName: "isValidSharedRemotePage",
                            memoizeRecursion: !1,
                            deepEquals: !1,
                            compute: function(e) {
                                let n = t.currentUser.id;
                                return !!n && (0, i(363244).SI)(d.getPagesStore(), () => (0, i(260405).B)({
                                    store: e,
                                    spaceStore: d,
                                    userId: n
                                }))
                            }
                        }), [t, d]),
                        f = d.getPagesStore(),
                        _ = [],
                        g = new Set;
                    for (let e of p) {
                        let t = n().B.createChildStore(f, {
                            table: r().evP,
                            id: e,
                            spaceId: d.id
                        });
                        m.getStateFor(t) && (_.push(t), g.add(e))
                    }
                    let v = a.getSharedPages() ? ? [],
                        h = 0 === v.length;
                    e = h ? (0, i(868488).I)(t, d).filter(e => {
                        g.has(e.id)
                    }) : v.filter(e => !(0, i(952592).z)(e) && g.has(e.id));
                    let y = a.getPublicShareLinkPageStores();
                    (0, i(635339).Hg)({
                        use_legacy_shared_pages_ordering: h && e.length > 0
                    });
                    let b = [],
                        S = new Set;
                    for (let t of e) S.has(t.id) || (b.push(t), S.add(t.id));
                    for (let e of _) S.has(e.id) || (b.push(e), S.add(e.id));
                    for (let e of y) S.has(e.id) || (b.push(e), S.add(e.id));
                    if (!l && (0, i(800574).r)()) {
                        let {
                            sortOption: e
                        } = (0, i(822209).R)({
                            environment: t,
                            spaceViewStore: a,
                            type: "shared",
                            userSettingsStore: s
                        });
                        if ("lastEdited" === e) return (0, i(649498).X)(b)
                    }
                    return b
                }
            }
        },
        335818: (e, t, i) => {
            i.d(t, {
                $n: () => x,
                A7: () => f,
                Ck: () => p,
                In: () => u,
                L5: () => v,
                Mi: () => y,
                NR: () => d,
                OU: () => b,
                Vi: () => g,
                XD: () => k,
                Zz: () => h,
                f1: () => s,
                fc: () => a,
                gV: () => r,
                jN: () => m,
                mb: () => S,
                sL: () => _,
                sV: () => o,
                uf: () => c,
                x6: () => n,
                yU: () => l
            }), i(944114), i(898992), i(803949);
            let n = 900;

            function r(e) {
                let t = e.getAssociatedCollectionStore();
                if (!t) return;
                let n = e.getSchema(),
                    r = t.getFormat();
                return (0, i(944940).L)(r, n, void 0, i(565546).jf.Collection)
            }

            function o(e) {
                if (e.isCollectionView()) {
                    let t = e.getCollectionStoreIfSingleSource();
                    return !!t && t.isSyncedCollection()
                }
                return e.isType(i(955630).xd.externalObjectInstancePage)
            }

            function a(e) {
                let t = e.getParentStore();
                if ((null == t ? void 0 : t.table) === i(832375).VlP) {
                    let e = t.getFormat();
                    if (null != e && e.external_collection_type) return !0
                }
                return !1
            }

            function s(e) {
                let t = e.getAssociatedCollectionStore(),
                    n = e.getSpaceStore();
                if (!(0, i(23803).JD)(t)) return !1;
                if (t) {
                    let e = t.getFormatStore(),
                        r = e.getKeyStore("sync_state").getValue(),
                        o = e.getKeyStore("app_config_uri").getValue();
                    if (null != r && r.enable_two_way_sync && !(null != r && r.syncing) && (() => {
                            if (n) {
                                let e = n.getSubscriptionTier();
                                if (!(0, i(262166).OX)(e)) return !1
                            }
                            return !0
                        })() && "notion://tasks_collection" === o) return !0
                }
                return !1
            }

            function l(e) {
                let t = (0, i(399348).f)(e, {
                        includeTeamHomeFeed: !1,
                        includeDataSources: !1
                    }),
                    n = [];
                return t.forEach(e => {
                    e instanceof i(970831).B && n.push(e)
                }), !!n.find(e => a(e))
            }

            function u(e) {
                return !e.hasContent() && (!e.isCollectionView() || e.isType("collection_view_page") && e.isCollectionViewPageWithContent())
            }

            function d(e, t) {
                let n = {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                    flexGrow: 0
                };
                return e.isCollectionView() && ((0, i(444285).S)(e) && (n.cursor = "default"), (0, i(424963).z)(t) && (n.position = "sticky", n.insetInlineStart = 0)), n
            }

            function c(e, t, i) {
                return p(e, t, i) ? "100%" : n
            }

            function p(e, t, n) {
                let {
                    isPhone: r
                } = n;
                if (r || t && v(t) || t === i(166654).R.CollectionPageViewFullScreen || t === i(166654).R.CollectionViewBlockFullScreen) return !0;
                let o = e.getRecordStoreUIRoot();
                return o instanceof i(970831).B && o.isFullWidth()
            }

            function m(e) {
                return e === i(166654).R.Frame
            }

            function f(e) {
                return e === i(166654).R.InAppTemplatePreview
            }

            function _(e) {
                return e === i(166654).R.InAppMarketplaceTemplatePreview
            }

            function g(e) {
                return e === i(166654).R.InPageSnapShot
            }

            function v(e) {
                return e === i(166654).R.PeekView
            }

            function h(e) {
                return e === i(166654).R.Frame || e === i(166654).R.PeekView
            }

            function y(e) {
                return void 0 !== e && (e === i(166654).R.PostInFullPageOrPeek || e === i(166654).R.DraftPostInFullPageComposer)
            }

            function b(e, t) {
                if (e !== i(166654).R.PeekView) return (0, i(120190).F)(t); {
                    let e = i(475097).default.getPeekMode();
                    return i(475097).PeekModePadding.horizontal[e]
                }
            }

            function S(e) {
                return (0, i(447036).cq)(e) && (i(475097).default.isSidePeekOpen() || i(475097).default.isSidePeekClosingStore.state)
            }

            function k(e) {
                return i(986939).A.isMobile ? 16 : v(e) || e === i(166654).R.Form ? 32 : 80
            }

            function x() {
                return i(986939).A.isMobile ? 12 : 4
            }
        },
        336136: (e, t, i) => {
            function n() {
                return i(381453).oE([i(838448).default.getActiveSession(), l()])
            }

            function r(e) {
                return n().some(t => t.groupedPendingOperations.state.some(t => t.pageId === e))
            }

            function o(e) {
                let t = e.getNavigableBlockStore();
                return !!(t && r(t.id))
            }

            function a(e) {
                let t = e.getNavigableBlockStore();
                if (!t) return !1;
                let i = t.id;
                return n().some(e => e.groupedPendingOperations.state.some(e => "updatedPage" === e.type && e.pageId === i && e.didCreatePage))
            }

            function s(e) {
                let t = i(838448).default.getActiveSession();
                if (!t) return [];
                let n = (0, i(132702).hZ)(e.RouterStore.state.route);
                return t.groupedPendingOperations.state.filter(e => "updatedPage" === e.type && !!e.didCreatePage).filter(e => n.includes(e.pageId))
            }

            function l() {
                let e = i(304636).default.state;
                if ("assistantCompletionPopup" === e.type) return i(838448).default.getSessionContext(e.sessionId)
            }

            function u() {
                let e = i(838448).default.getActiveSession();
                if (e) return e.groupedPendingOperations.state.filter(e => "updatedPage" === e.type && e.didCreatePage).map(e => e.pageId)
            }

            function d() {
                return n().some(e => e.getAllPendingNonCreateExecutableOperations().length > 0)
            }
            i.d(t, {
                A5: () => d,
                Fm: () => a,
                K1: () => l,
                Lz: () => s,
                Vk: () => u,
                dL: () => o,
                pQ: () => r,
                x3: () => n
            }), i(898992), i(354520), i(581454), i(737550)
        },
        337174: (e, t, i) => {
            function n(e) {
                var t;
                return {
                    provider: e.provider,
                    clock: {
                        now: e.clock.now.toISO(),
                        externalId: e.clock.externalId
                    },
                    trial: e.trial ? {
                        endDate: e.trial.endDate.toISO(),
                        items: e.trial.items
                    } : void 0,
                    subscription: e.subscription ? {
                        trialEnd: null == (t = e.subscription.trialEnd) ? void 0 : t.toISO(),
                        items: e.subscription.items
                    } : void 0
                }
            }

            function r(e) {
                var t;
                return {
                    items: e.items.map(e => {
                        var t, i;
                        return { ...e,
                            currentPeriodStart: null == (t = e.currentPeriodStart) ? void 0 : t.toISO(),
                            currentPeriodEnd: null == (i = e.currentPeriodEnd) ? void 0 : i.toISO()
                        }
                    }),
                    trialEnd: null == (t = e.trialEnd) ? void 0 : t.toISO()
                }
            }

            function o(e) {
                return (e ? ? []).map(e => ({ ...e,
                    currentPeriodStart: e.currentPeriodStart ? i(906745).DateTime.fromISO(e.currentPeriodStart) : void 0,
                    currentPeriodEnd: e.currentPeriodEnd ? i(906745).DateTime.fromISO(e.currentPeriodEnd) : void 0
                }))
            }

            function a(e) {
                var t;
                return "admin" !== e.type ? {
                    type: e.type,
                    provider: e.provider,
                    clock: {
                        now: i(906745).DateTime.fromISO(e.clock.now),
                        externalId: e.clock.externalId
                    },
                    subscription: e.subscription ? { ...e.subscription,
                        startDate: i(906745).DateTime.fromISO(e.subscription.startDate),
                        trialEnd: e.subscription.trialEnd ? i(906745).DateTime.fromISO(e.subscription.trialEnd) : void 0
                    } : void 0,
                    trial: e.trial ? { ...e.trial,
                        startDate: i(906745).DateTime.fromISO(e.trial.startDate),
                        endDate: i(906745).DateTime.fromISO(e.trial.endDate)
                    } : void 0
                } : {
                    type: "admin",
                    ...{
                        externalId: e.externalId,
                        provider: e.provider,
                        email: e.email,
                        address: e.address,
                        clock: (t = e.clock, {
                            now: i(906745).DateTime.fromISO(t.now),
                            externalId: t.externalId
                        }),
                        paymentMethod: e.paymentMethod,
                        invoices: (e.invoices ? ? []).map(e => ({
                            externalId: e.externalId,
                            status: e.status,
                            paymentIntent: e.paymentIntent,
                            overrides: e.overrides,
                            externalSubscriptionId: e.externalSubscriptionId,
                            dueDate: e.dueDate ? i(906745).DateTime.fromISO(e.dueDate) : void 0,
                            createdAt: i(906745).DateTime.fromISO(e.createdAt),
                            amountDue: e.amountDue,
                            amountPaid: e.amountPaid,
                            currency: e.currency,
                            lineItems: e.lineItems
                        })),
                        trial: function(e) {
                            if (e) return {
                                externalId: e.externalId,
                                items: o(e.items),
                                startDate: i(906745).DateTime.fromISO(e.startDate),
                                endDate: i(906745).DateTime.fromISO(e.endDate),
                                autoConvert: e.autoConvert
                            }
                        }(e.trial),
                        subscription: function(e) {
                            var t;
                            if (e) return {
                                externalId: e.externalId,
                                status: e.status,
                                provider: e.provider,
                                items: o(e.items),
                                unrepresentableReason: e.unrepresentableReason,
                                startDate: i(906745).DateTime.fromISO(e.startDate),
                                trialEnd: e.trialEnd ? i(906745).DateTime.fromISO(e.trialEnd) : void 0,
                                currentPeriodEnd: i(906745).DateTime.fromISO(e.currentPeriodEnd),
                                pending: e.pending ? {
                                    items: o(e.pending.items),
                                    startDate: i(906745).DateTime.fromISO(e.pending.startDate)
                                } : void 0,
                                pendingPhases: null == (t = e.pendingPhases) ? void 0 : t.map(e => ({
                                    items: o(e.items),
                                    startDate: i(906745).DateTime.fromISO(e.startDate)
                                }))
                            }
                        }(e.subscription),
                        lockedCurrencyCode: e.lockedCurrencyCode,
                        taxIds: e.taxIds,
                        accountBalances: e.accountBalances,
                        hasPaidNonzero: e.hasPaidNonzero
                    }
                }
            }
            i.d(t, {
                J1: () => a,
                Lm: () => r,
                hj: () => n
            }), i(581454)
        },
        337336: (e, t, i) => {
            i.d(t, {
                K: () => o
            });
            var n = i(296540),
                r = i(474848);

            function o({
                children: e,
                disableCapture: t,
                fallback: a,
                from: s,
                onError: l,
                type: u,
                team: d
            }) {
                let c = (0, n.useRef)(),
                    p = (0, i(83208).X)("enable_error_boundary_debugger");
                return (0, r.jsx)(i(657751).t, {
                    onError: function(e, n) {
                        t || (c.current = i(419750).O8(e, {
                            from: s,
                            type: u || "RenderError",
                            team: d,
                            data: {
                                miscDataToConvertToString: n
                            }
                        })), null == l || l({
                            error: e,
                            errorInfo: n,
                            errorId: c.current
                        })
                    },
                    fallback: function(e) {
                        return a({ ...e,
                            errorId: c.current
                        })
                    },
                    children: p ? (0, r.jsx)(i(322730).q, {
                        name: s,
                        children: e
                    }) : e
                })
            }
        },
        345776: (e, t, i) => {
            i.d(t, {
                T: () => r
            });
            let n = new(i(345426)).ComputedStore(() => {
                var e;
                return null == (e = i(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id
            }, {
                debugName: "currentUserIdStore"
            });

            function r() {
                return (0, i(682985).O$)(n)
            }
        },
        352441: (e, t, i) => {
            i.d(t, {
                Q: () => n
            });
            let n = new(i(273917)).U((e, t) => `${t.spaceId}-${t.collectionId}`, async (e, t) => {
                let n = new(i(356912)).m(e, {
                    table: i(832375).VlP,
                    id: t.collectionId,
                    spaceId: t.spaceId
                }).getRole();
                if (n && (0, i(642157).p2)(n)) return !0;
                if ("none" === n) return !1;
                if (!e.currentUser.id) return;
                let r = await e.api.callApi({
                    eventName: "getCanCreatePagesInCollection",
                    environment: e,
                    data: {
                        collectionId: t.collectionId,
                        spaceId: t.spaceId
                    }
                });
                return "success" === r.type && r.data.canCreatePagesInCollection
            })
        },
        353736: (e, t, i) => {
            i.d(t, {
                q: () => n
            });
            let n = i(546605).Store.createValue({
                attached: !1,
                animating: !1,
                proportion: 0
            }, {
                name: "PopupBottomSheetOpenProportionStore"
            })
        },
        367198: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                xMarkCircleFillIcon: () => r
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25m2.817 4.808a.625.625 0 0 1 0 .884L10.884 10l1.933 1.933a.625.625 0 1 1-.884.884L10 10.884l-1.933 1.933a.625.625 0 1 1-.884-.884L9.116 10 7.183 8.067a.625.625 0 1 1 .884-.884L10 9.116l1.933-1.933a.625.625 0 0 1 .884 0"
                    })
                },
                r = (0, i(104509).wt)("xMarkCircleFill", n, "fill")
        },
        367890: (e, t, i) => {
            i.d(t, {
                x: () => n
            });

            function n(e, t) {
                return (0, i(118483).C)(e, i(197691).L, t)
            }
        },
        374533: (e, t, i) => {
            i.d(t, {
                A: () => u
            });
            var n = i(296540),
                r = i(474848);
            let o = {
                    kmkexE: "x1ds2qyl",
                    $$css: !0
                },
                a = {
                    kmuXW: "x2lah0s",
                    $$css: !0
                },
                s = {
                    kGVxlE: "xzzkygx",
                    $$css: !0
                };

            function l({
                isLoading: e,
                icon: t,
                variant: n,
                iconSizeKey: o,
                colorPalette: a,
                colorVariant: s,
                defaultIconVariant: u,
                iconStyle: d,
                iconFillStyle: c,
                size: p
            }) {
                if (e) {
                    let e = t && "icon" in t && ("number" == typeof t.size || (0, i(104509).cr)(t.size)) ? t.size : i(399411).JC[p];
                    return (0, r.jsx)(i(517334).k, {
                        size: e,
                        onDarkBackground: "primary" === n
                    })
                }
                return t ? "icon" in t ? (0, r.jsx)(i(764262).I, {
                    size: t.size ? ? o,
                    colorPalette: a,
                    colorVariant: s ? ? u,
                    style: d,
                    ...t
                }) : "__iconDefinition" in t ? (0, r.jsx)(i(764262).I, {
                    icon: t,
                    size: o,
                    colorPalette: a,
                    colorVariant: s ? ? u,
                    style: d
                }) : t(c) : null
            }
            let u = n.memo(n.forwardRef(function({
                icon: e,
                colorPalette: t,
                colorVariant: u,
                variant: d = "plain",
                hasBackground: c,
                showShadow: p,
                disableBackground: m,
                style: f,
                iconStyle: _,
                hoveredStyle: g,
                pressedStyle: v,
                disabled: h,
                disabledFeedback: y,
                size: b = "sm",
                shape: S = "default",
                isLoading: k,
                hovered: x,
                focused: w,
                ...P
            }, I) {
                let C = i(399411).JC[b],
                    T = i(104509).Ev[C],
                    M = "primary" === d ? "inversePrimary" : t ? "accentPrimary" : "secondary",
                    A = (0, i(960253).e)(),
                    E = (0, n.useMemo)(() => (function({
                        variant: e,
                        palette: t,
                        colorVariant: n,
                        hasBackground: r,
                        themeMode: o
                    }) {
                        let a, s, {
                            colorSet: l,
                            textColor: u,
                            fillColor: d
                        } = function({
                            variant: e,
                            palette: t,
                            colorVariant: n
                        }) {
                            let r = t ? i(632079).Tj[t] : i(632079).Tj,
                                o = t ? i(632079).Tj[t].icon : i(632079).Tj.icon;
                            return {
                                colorSet: r,
                                textColor: "primary" === e ? r.text.inversePrimary : r.text[n ? ? (t ? "accentPrimary" : "primary")],
                                fillColor: "primary" === e ? r.text.inversePrimary : o[n ? ? ("primary" === e ? "inversePrimary" : t ? "accentPrimary" : "secondary")]
                            }
                        }({
                            variant: e,
                            palette: t,
                            colorVariant: n
                        });
                        if ("primary" === e) {
                            let e = l.background.accentPrimary,
                                n = (0, i(133251)._S)({
                                    color: e,
                                    adjustmentDirectionOverride: "dark" !== o && t ? "darken" : "lighten"
                                });
                            return {
                                textColor: u,
                                fillColor: d,
                                restingBg: e,
                                hoverBg: n.hovered,
                                pressedBg: n.pressed
                            }
                        }
                        let c = (a = t ? i(632079).Tj[t].background.secondaryTranslucent : i(632079).Tj.background.tertiaryTranslucent, s = t ? i(632079).Tj[t].background.secondary : i(632079).Tj.background.tertiary, r ? s : a),
                            p = (0, i(133251)._S)({
                                color: c
                            });
                        return "tint" === e ? {
                            textColor: u,
                            fillColor: d,
                            restingBg: c,
                            hoverBg: p.hovered,
                            pressedBg: p.pressed
                        } : {
                            textColor: u,
                            fillColor: d,
                            restingBg: r ? i(632079).Tj.background.primary : "transparent",
                            hoverBg: c,
                            pressedBg: p.pressed,
                            ..."outline" === e && {
                                border: `1px solid ${l.border.primaryTranslucent}`
                            },
                            highContrastHoverBg: p.hovered
                        }
                    })({
                        variant: d,
                        palette: t,
                        colorVariant: u,
                        hasBackground: c ? ? !1,
                        themeMode: A
                    }), [d, t, u, c, A]),
                    D = h || k,
                    B = (0, n.useMemo)(() => (function({
                        size: e,
                        shape: t,
                        variant: n,
                        disabled: r,
                        disabledFeedback: l,
                        disableBackground: u,
                        showShadow: d,
                        tokens: c,
                        style: p
                    }) {
                        let m, f, _, g, v, h = !r && !u && (c.highContrastHoverBg ? [{
                            kC7eKd: (null != (m = {
                                restingBg: c.restingBg,
                                hoverBg: c.hoverBg,
                                pressedBg: c.pressedBg,
                                highContrastHoverBg: c.highContrastHoverBg
                            }).restingBg ? "x16lehos " : m.restingBg) + (null != m.hoverBg ? "x1f1i3pa " : m.hoverBg) + (null != m.highContrastHoverBg ? "x1iazond " : m.highContrastHoverBg) + (null != m.pressedBg ? "xayv9eh " : m.pressedBg) + (null != m.hoverBg ? "x1811ece " : m.hoverBg) + (null != m.highContrastHoverBg ? "xigsv13" : m.highContrastHoverBg),
                            $$css: !0
                        }, {
                            "--x-l5dkfo": null != m.restingBg ? m.restingBg : void 0,
                            "--x-8zloot": null != m.hoverBg ? m.hoverBg : void 0,
                            "--x-13727ff": null != m.highContrastHoverBg ? m.highContrastHoverBg : void 0,
                            "--x-ph3bdx": null != m.pressedBg ? m.pressedBg : void 0,
                            "--x-pjywqs": null != m.hoverBg ? m.hoverBg : void 0,
                            "--x-ovxak1": null != m.highContrastHoverBg ? m.highContrastHoverBg : void 0
                        }] : [{
                            kC7eKd: (null != (f = {
                                restingBg: c.restingBg,
                                hoverBg: c.hoverBg,
                                pressedBg: c.pressedBg
                            }).restingBg ? "x16lehos " : f.restingBg) + (null != f.hoverBg ? "xdxgbl4 " : f.hoverBg) + (null != f.pressedBg ? "xayv9eh " : f.pressedBg) + (null != f.hoverBg ? "x19b482l" : f.hoverBg),
                            $$css: !0
                        }, {
                            "--x-l5dkfo": null != f.restingBg ? f.restingBg : void 0,
                            "--x-umghl": null != f.hoverBg ? f.hoverBg : void 0,
                            "--x-ph3bdx": null != f.pressedBg ? f.pressedBg : void 0,
                            "--x-13tdqfb": null != f.hoverBg ? f.hoverBg : void 0
                        }]);
                        return [i(399411).Zg.base, "pill" === t ? i(399411).$X[e] : i(399411).kG[e], i(399411).eA[e], a, [o, {
                            kMwMTN: null != (_ = c.textColor) ? "x14rh7hd" : _,
                            $$css: !0
                        }, {
                            "--x-color": null != _ ? _ : void 0
                        }], "primary" === n && [{
                            kDwRjp: null != (g = c.fillColor) ? "x19zyb68" : g,
                            $$css: !0
                        }, {
                            "--x-fill": null != g ? g : void 0
                        }], void 0 !== c.border && (e => [{
                            kX8ASl: null != e ? "x1ha54eg" : e,
                            kwv6qe: null != e ? "x1ym9u1z" : e,
                            k4EQJz: null != e ? "x1gat650" : e,
                            kO87eX: null != e ? "x1t8z4yu" : e,
                            $$css: !0
                        }, {
                            "--x-border": "number" == typeof e ? e + "px" : null != e ? e : void 0
                        }])(c.border), d && s, h, (r || u) && [{
                            kC7eKd: null != (v = c.restingBg) ? "xt2wqj3" : v,
                            $$css: !0
                        }, {
                            "--x-background": null != v ? v : void 0
                        }], r && !1 !== l && i(399411).Zg.disabled, p]
                    })({
                        size: b,
                        shape: S,
                        variant: d,
                        disabled: D,
                        disabledFeedback: y,
                        disableBackground: m,
                        showShadow: p,
                        tokens: E,
                        style: f
                    }), [b, S, d, D, y, m, p, E, f]),
                    O = (0, i(3755).J)(),
                    U = E.highContrastHoverBg && "high" === O ? E.highContrastHoverBg : E.hoverBg,
                    R = (0, n.useMemo)(() => ({
                        background: m ? "none" : U,
                        ...g
                    }), [m, U, g]),
                    N = (0, n.useMemo)(() => ({
                        background: m ? "none" : E.pressedBg,
                        ...v
                    }), [m, E.pressedBg, v]),
                    [L, j] = (0, i(768397).s)(),
                    F = (0, n.useContext)(i(660343).k),
                    $ = function({
                        disabled: e,
                        focused: t,
                        hovered: i,
                        isFocusVisible: n,
                        popupOpen: r,
                        style: o
                    }) {
                        return !e && (!0 === t || !0 === i || n || !0 === r || "object" == typeof o && null !== o && ("background" in o || "backgroundColor" in o))
                    }({
                        disabled: D,
                        focused: w,
                        hovered: x,
                        isFocusVisible: j,
                        popupOpen: null == F ? void 0 : F.open,
                        style: f
                    }),
                    q = void 0 !== g || void 0 !== v || $,
                    z = (0, n.useRef)(null),
                    V = (0, i(421573).A)(z, L, I),
                    G = (0, n.useMemo)(() => ({
                        width: T,
                        height: T,
                        fill: (t ? i(632079).Tj[t].icon : i(632079).Tj.icon)[u ? ? M],
                        ..._
                    }), [t, u, M, T, _]),
                    W = (0, n.useMemo)(() => (0, r.jsx)(l, {
                        isLoading: k,
                        icon: e,
                        variant: d,
                        iconSizeKey: C,
                        colorPalette: t,
                        colorVariant: u,
                        defaultIconVariant: M,
                        iconStyle: _,
                        iconFillStyle: G,
                        size: b
                    }), [k, e, d, C, t, u, M, _, G, b]);
                return (0, r.jsx)(i(64960).UD, {
                    style: B,
                    disabledFeedback: y ? ? !0,
                    hoveredStyle: q ? R : void 0,
                    pressedStyle: q ? N : void 0,
                    disabled: D,
                    ignoreLocalHoverState: !q,
                    hovered: x,
                    focused: w,
                    ref: V,
                    ...P,
                    children: W
                })
            }), i(795676).A)
        },
        377292: (e, t, i) => {
            i.d(t, {
                A: () => r
            }), i(16280);
            let n = new(i(227586)).n((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }, {
                forceRefetch: n
            }) => {
                let r = await (0, i(273917).y)({
                    environment: e,
                    namespace: "FeatureBillingDataStore",
                    key: t,
                    forceRefetch: n,
                    getValue: async () => {
                        if (t.includes("|")) throw Error("Invalid spaceId, you're likely passing a spaceUserId instead");
                        let n = await e.api.callCellCompatibleApi({
                            eventName: "getFeatureBillingData",
                            environment: e,
                            data: {
                                spaceId: t
                            },
                            cellNavigation: {
                                cellId: void 0,
                                spaceId: t
                            }
                        });
                        if ("success" !== n.type) return;
                        let r = [{
                            key: (0, i(568479).Fi)({
                                spaceId: t
                            }),
                            version: -1
                        }];
                        return {
                            value: n.data,
                            dependencies: n.data.dependencies ? ? r
                        }
                    }
                });
                if (r) return {
                    value: {
                        billingData: (0, i(337174).J1)(r.value.billingData),
                        overrides: r.value.overrides
                    },
                    dependencies: r.dependencies
                }
            });
            i(202146).exposeDebugValue("FeatureBillingDataStore", n);
            let r = n
        },
        387722: (e, t, i) => {
            i.d(t, {
                A: () => r,
                O: () => n
            });
            let n = "center_peek",
                r = "side_peek"
        },
        396085: (e, t, i) => {
            i.d(t, {
                f: () => n
            });
            let n = (0, i(296540).createContext)(() => 0);
            n.displayName = "BaseScrollerPaddingBottomContext"
        },
        403884: (e, t, i) => {
            function n({
                environment: e,
                section: t,
                isSectionShown: r,
                spaceViewId: o
            }) {
                return r ? !0 !== i(255482).K.get({
                    userId: e.currentUser.id,
                    key: (0, i(485050).L)(o, t)
                }) : null
            }

            function r({
                environment: e
            }) {
                var t;
                let o = null == (t = i(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : t.id,
                    a = (0, i(804011).r)(e).state,
                    s = i(984858).sidebarExpandedStore.state;
                if (!o || !a) return {
                    is_sidebar_open: s
                };
                let {
                    showBookmarksSection: l,
                    showSharedSection: u,
                    showTeamSection: d,
                    showPrivateSection: c
                } = a;
                return {
                    is_sidebar_open: s,
                    sidebar_state: {
                        is_bookmark_expanded: n({
                            environment: e,
                            isSectionShown: l,
                            section: "bookmarks",
                            spaceViewId: o
                        }),
                        is_team_expanded: n({
                            environment: e,
                            isSectionShown: d,
                            section: "teamSidebar",
                            spaceViewId: o
                        }),
                        is_shared_expanded: n({
                            environment: e,
                            isSectionShown: u,
                            section: "shared",
                            spaceViewId: o
                        }),
                        is_private_expanded: n({
                            environment: e,
                            isSectionShown: c,
                            section: "private",
                            spaceViewId: o
                        })
                    }
                }
            }
            i.d(t, {
                h: () => r
            })
        },
        411882: (e, t, i) => {
            i.d(t, {
                F: () => n
            });

            function n() {
                return (0, i(83208).X)("custom_agents_server")
            }
        },
        423291: (e, t, i) => {
            i.d(t, {
                n: () => n
            });
            let n = {
                Popup: "Popup",
                SlideUp: "SlideUp",
                BottomSheet: "BottomSheet"
            }
        },
        424963: (e, t, i) => {
            i.d(t, {
                z: () => n
            });

            function n(e) {
                return e.device.isDesktop && !e.device.isSafari
            }
        },
        425567: (e, t, i) => {
            i.d(t, {
                R: () => n
            });
            let n = 7
        },
        444285: (e, t, i) => {
            i.d(t, {
                B: () => o,
                S: () => r
            });
            let n = new WeakMap;

            function r(e) {
                return !!e && !!(e.isLocked() || e.pathIsDead() || (0, i(336136).dL)(e))
            }

            function o(e) {
                let t = n.get(e);
                if (t) return t;
                let o = new(i(345426)).ComputedStore(() => r(e), {
                    debugName: "block.isNonEditableStateStore"
                });
                return n.set(e, o), o
            }
        },
        444610: (e, t, i) => {
            i.d(t, {
                U: () => n
            });

            function n(e, t = !0) {
                let r = (0, i(713208).S)(e, t);
                if (r && "collectionContextStore" in r) return r.collectionContextStore
            }
        },
        447036: (e, t, i) => {
            i.d(t, {
                Gb: () => r,
                QX: () => s,
                RX: () => u,
                cq: () => a,
                ln: () => n,
                m3: () => o,
                rc: () => l
            });
            let n = 120;

            function r() {
                return i(475097).default.isCenterPeekOpen() || function() {
                    let e = i(584265).default.state;
                    if (e.anchorContainer) return !!e.anchorContainer.isPeekRenderer();
                    if (!i(475097).default.state.open) return !1;
                    if (!e.anchor) return !0;
                    let t = e.anchor.isPageBlock(),
                        n = e.anchor === i(475097).default.state.targetStore;
                    return t && n
                }()
            }

            function o() {
                let e = i(475097).default.state;
                return e.open && (r() || e.isOpening)
            }

            function a(e) {
                return !!e.findRecordStoreUIAncestor(e => e === i(475097).default.peekTargetStore.state).ancestor
            }

            function s() {
                let e = window.innerWidth;
                return e > 2 * i(475097).SIDEPEEK_MIN_WIDTH ? 2 / 3 * e : e
            }

            function l(e) {
                let t = i(190159).A.state;
                return Math.min(e.WindowSizeStore.state.width - 2 * i(475097).PeekModeOuterPadding, i(475097).CenterPeekModeOuterWidth + t)
            }

            function u(e) {
                return i(475097).default.isSidePeekOpen() && !a(e) && !e.isImmediateColumnChild() && (e.isRootOrDirectChild() || "page" === e.getType())
            }
        },
        471078: (e, t, i) => {
            i.d(t, {
                O: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e, r = (0, i(616579).j)({
                    environment: t,
                    spaceId: n
                });
                if (r) return r > 1
            }
        },
        475097: (e, t, i) => {
            i.r(t), i.d(t, {
                CenterPeekModeOuterWidth: () => a,
                PeekModeOuterPadding: () => o,
                PeekModePadding: () => r,
                SIDEPEEK_INITIAL_MAX_WIDTH: () => d,
                SIDEPEEK_MIN_WIDTH: () => p,
                SIDEPEEK_NO_COLUMN_WIDTH: () => c,
                default: () => f,
                getPeekModeFromCollectionPeekModeFormat: () => l,
                getPeekModeFromUrlParam: () => s,
                getUrlParamFromPeekMode: () => u
            });
            var n = () => i(546605);
            let r = {
                    horizontal: {
                        center_peek: 126,
                        side_peek: 76
                    }
                },
                o = 72,
                a = 708 + 2 * r.horizontal[i(387722).O];

            function s(e) {
                switch (e) {
                    case "s":
                        return i(387722).A;
                    case "c":
                        return i(387722).O
                }
            }

            function l(e) {
                switch (e) {
                    case "side_peek":
                        return i(387722).A;
                    case "center_peek":
                        return i(387722).O
                }
            }

            function u(e) {
                switch (e) {
                    case i(387722).A:
                        return "s";
                    case i(387722).O:
                        return "c"
                }
            }
            let d = 980,
                c = 640,
                p = 564;
            class m extends n().Store {
                getInitialState() {
                    return {
                        open: !1,
                        mode: i(387722).O,
                        preferredSidePeekWidth: 0,
                        savedSidebarExpandedStoreState: !1,
                        topHoverAreaEntered: !1,
                        scrollToBlockId: void 0
                    }
                }
                getCollectionModeFormat() {
                    switch (this.state.mode) {
                        case i(387722).A:
                            return "side_peek";
                        case i(387722).O:
                            return "center_peek"
                    }
                }
                getPeekMode() {
                    return this.state.open ? this.state.mode : i(387722).A
                }
                getPeekModeWidth(e) {
                    return this.isCenterPeekOpen() ? a : this.getSidePeekWidth(e)
                }
                getSidePeekWidth(e, t = p) {
                    let i = Math.min(e / 2, d);
                    return Math.min(Math.max(this.state.preferredSidePeekWidth || i, t), e)
                }
                setSidePeekWidth(e) {
                    let {
                        preferredSidePeekWidth: t,
                        windowWidth: i,
                        minWidth: n = p
                    } = e, r = Math.min(Math.max(t, n), i);
                    this.setState({ ...this.state,
                        preferredSidePeekWidth: r
                    })
                }
                isCenterPeekOpen() {
                    return this.state.open && this.state.mode === i(387722).O
                }
                isSidePeekOpen() {
                    return this.state.open && this.state.mode === i(387722).A && !this.state.isClosing
                }
                setSidebarExpandedStoreState(e) {
                    this.setState({ ...this.state,
                        savedSidebarExpandedStoreState: e
                    })
                }
                setTopHoverAreaEntered(e) {
                    this.setState({ ...this.state,
                        topHoverAreaEntered: e
                    })
                }
                isSidePeekOpenStore = new(i(345426)).ComputedStore(() => this.isSidePeekOpen(), {
                    debugName: "isSidePeekOpen"
                });
                isSidePeekOpeningStore = new(i(345426)).ComputedStore(() => this.state.open && this.isSidePeekOpen() && this.state.isOpening, {
                    debugName: "isSidePeekOpening"
                });
                isSidePeekClosingStore = new(i(345426)).ComputedStore(() => this.state.open && this.state.isClosing, {
                    debugName: "isSidePeekClosing"
                });
                peekTargetStore = new(i(345426)).ComputedStore(() => this.state.open ? this.state.targetStore : void 0, {
                    debugName: "peekTarget"
                })
            }
            let f = new m
        },
        475413: (e, t, i) => {
            i.d(t, {
                As: () => r,
                Bf: () => a,
                _y: () => l,
                gG: () => n,
                gX: () => o,
                vK: () => s
            });
            let n = ["free", "plus", "business", "enterprise"],
                r = ["team_monthly_10", "team_yearly_96", "plus_monthly_eur", "plus_yearly_eur", "plus_monthly_gbp", "plus_yearly_gbp"],
                o = ["business_monthly", "business_yearly", "business_monthly_eur", "business_yearly_eur", "business_monthly_gbp", "business_yearly_gbp", "business_monthly_jpy", "business_yearly_jpy", "business_monthly_krw", "business_yearly_krw"],
                a = ["enterprise_monthly_25", "enterprise_yearly_240", "enterprise_monthly_eur", "enterprise_yearly_eur", "enterprise_monthly_gbp", "enterprise_yearly_gbp", "enterprise_monthly_jpy", "enterprise_yearly_jpy", "enterprise_monthly_krw", "enterprise_yearly_krw"];

            function s(e) {
                switch (e) {
                    case "free":
                    case "student":
                    case "personal":
                    case "plus":
                    case "business":
                    case "enterprise":
                    case "ai":
                        return "seats";
                    case "sites_custom_hostnames":
                        return "public_domain_custom_hostnames";
                    case "ai_credit_pack":
                        return "ai_credit_pack_units";
                    default:
                        (0, i(722371).HB)(e)
                }
            }

            function l(e) {
                switch (e) {
                    case "free":
                    case "personal_free":
                    case "team_free":
                        return "free";
                    case "student":
                    case "personal":
                    case "plus":
                    case "business":
                    case "enterprise":
                        return e;
                    default:
                        (0, i(722371).HB)(e)
                }
            }
        },
        476003: (e, t, i) => {
            i.d(t, {
                H: () => n
            });
            let n = new(i(245541)).R({
                key: "emptySharePreference",
                namespace: i(274919).Bq,
                important: !0,
                trackingType: "necessary"
            })
        },
        476987: (e, t, i) => {
            var n, r;
            i.d(t, {
                S: () => o,
                o: () => a
            });
            let o = ((n = {})[n.SELECT = 0] = "SELECT", n[n.TOGGLE = 1] = "TOGGLE", n[n.MULTI_SELECT_FROM_FIRST_SELECTED_STORE = 2] = "MULTI_SELECT_FROM_FIRST_SELECTED_STORE", n[n.MULTI_SELECT_FROM_BOUNDARY = 3] = "MULTI_SELECT_FROM_BOUNDARY", n),
                a = ((r = {})[r.Selected = 0] = "Selected", r[r.Editing = 1] = "Editing", r)
        },
        483885: (e, t, i) => {
            i.d(t, {
                r: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    spaceStore: n
                } = e;
                return !!n && (0, i(112127).f)({
                    environment: t,
                    spaceStore: n
                }).length > 0
            }
        },
        484712: (e, t, i) => {
            i.d(t, {
                U: () => n
            });

            function n(e) {
                return !!e && !!(0, i(702482).w)(e) && "guest_with_private_pages" === e.getGuestExperience()
            }
        },
        485050: (e, t, i) => {
            i.d(t, {
                L: () => n
            });

            function n(e, t) {
                return `${e}:${t}`
            }
        },
        487174: (e, t, i) => {
            function n(e) {
                return e.customAgentsEnabled && (0, i(729052).Wf)(e.membershipType)
            }

            function r(e) {
                return n({
                    membershipType: e.membershipType,
                    customAgentsEnabled: (0, i(56788).$)({
                        skipPremiumFeatureCheck: e.skipPremiumFeatureCheck
                    })
                })
            }

            function o() {
                var e;
                let t, r = (0, i(83208).X)("slippery_slope_custom_agent_shortcuts"),
                    o = (e = {
                        skipPremiumFeatureCheck: !0
                    }, t = (0, i(993077).U2)(), n({
                        membershipType: (0, i(682985).K8)(() => null == t ? void 0 : t.getMembershipType(), [t]),
                        customAgentsEnabled: (0, i(596663).k)({
                            skipPremiumFeatureCheck: null == e ? void 0 : e.skipPremiumFeatureCheck
                        })
                    }));
                return r && o
            }
            i.d(t, {
                Pr: () => o,
                Q3: () => r
            })
        },
        494144: (e, t, i) => {
            i.d(t, {
                o: () => n
            });

            function n(e) {
                return !!e && !!((0, i(916804).I)(e.getSpaceStore()) && !(0, i(484712).U)(e) && "external_pages_sidebar" === i(218744).default.getEligibleGroup({
                    experimentId: "sharing_collaboration_sidebar_guest_aggregation",
                    disableExposureLogging: !0,
                    enableEventTrailLogging: !0
                }))
            }
        },
        496704: (e, t, i) => {
            i.d(t, {
                K: () => o
            }), i(898992), i(354520), i(672577);
            var n = () => i(375622);
            class r extends n().A {
                byBlockStore = this.index(e => e.getBlockStore());
                byId = this.index(e => e.getBlockStore().id);
                findBlockFromStore(e) {
                    return this.byBlockStore.find(e, t => t.getBlockStore() === e)
                }
                findAllBlocksFromStore(e) {
                    return this.byBlockStore.filter(e, t => t.getBlockStore() === e)
                }
                findBlockFromStoreWithMethod(e, t) {
                    return this.byBlockStore.find(e, i => i.getBlockStore() === e && "function" == typeof i[t])
                }
                findBlockFromId(e) {
                    return this.byId.find(e, t => {
                        var i;
                        return (null == (i = t.getBlockStore()) ? void 0 : i.id) === e
                    })
                }
                findNodeFromStore(e) {
                    let t = this.findBlockFromStore(e);
                    if (t) return t.getNode()
                }
                getRect(e) {
                    let t = this.findNodeFromStore(e);
                    if (t && t instanceof Element) return t.getBoundingClientRect()
                }
                findCollectionViewBlockFromStore(e) {
                    return this.byBlockStore.find(e, t => t.getBlockStore() === e && ("collection_view" === t.renderedType || "collection_view_page" === t.renderedType) && "collectionContextStore" in t)
                }
                findCollectionViewBlockFromId(e) {
                    return this.byId.find(e, t => {
                        var i;
                        return !!((null == (i = t.getBlockStore()) ? void 0 : i.id) === e && ("collection_view" === t.renderedType || "collection_view_page" === t.renderedType) && "collectionContextStore" in t)
                    })
                }
            }
            let o = new r;
            (0, i(202146).exposeDebugValue)("GlobalBlockRegistry", o)
        },
        500957: (e, t, i) => {
            i.d(t, {
                a: () => r
            });
            let n = {};

            function r(e) {
                let t = e.type,
                    r = n[t] ? ? new(i(971026)).X;
                return n[t] || (n[t] = r), r.memo(() => new(i(345426)).ComputedStore(() => (0, i(633210).r)(e) ? ? o, {
                    debugName: "pageContextStore",
                    equalityFn: i(795676).k
                }), [e.environment, e.spaceViewStore, e.userSettingsStore])
            }
            let o = {
                allPagesStores: [],
                visiblePagesStores: []
            }
        },
        506507: (e, t, i) => {
            i.d(t, {
                A: () => o
            }), i(898992), i(737550);
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        caches: {}
                    }
                }
                initializeCache(e, t) {
                    this.setState({
                        caches: { ...this.state.caches,
                            [e]: {
                                hasUnsavedChanges: !1,
                                inMemoryRecordCache: t
                            }
                        }
                    })
                }
                updateUnsavedCacheState(e, t) {
                    var i;
                    (null == (i = this.state.caches[e]) ? void 0 : i.hasUnsavedChanges) !== t && this.setState({
                        caches: { ...this.state.caches,
                            [e]: { ...this.state.caches[e],
                                hasUnsavedChanges: t
                            }
                        }
                    })
                }
                clearCache(e) {
                    var t;
                    let i = { ...this.state.caches
                    };
                    null == (t = i[e]) || t.inMemoryRecordCache.clearCache(), i[e].hasUnsavedChanges = !1, this.setState({
                        caches: i
                    })
                }
                expire(e) {
                    var t;
                    let i = { ...this.state.caches
                    };
                    null == (t = i[e]) || t.inMemoryRecordCache.expire(), delete i[e], this.setState({
                        caches: i
                    })
                }
                doesAnyCacheHaveUnsavedChanges() {
                    return (0, i(722371).WP)(this.state.caches).some(([e, t]) => t.hasUnsavedChanges)
                }
            }
            let o = new r
        },
        506584: (e, t, i) => {
            i.d(t, {
                A: () => o
            });
            var n = () => i(375622);
            class r extends n().A {}
            let o = new r
        },
        510969: (e, t, i) => {
            i.d(t, {
                A: () => o
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let o = r
        },
        519451: (e, t, i) => {
            i.d(t, {
                A: () => o
            });
            var n = i(296540),
                r = i(474848);
            let o = n.memo(function(e) {
                let t = {
                    children: e.children,
                    capture: e.capture,
                    innerKey: e.innerKey,
                    onEnter: e.allowMenuList || e.allowEnter ? void 0 : i(763230).D_,
                    onShiftEnter: i(763230).D_,
                    onCommandEnter: i(763230).D_,
                    onCommandAltEnter: i(763230).D_,
                    onCommandShiftEnter: i(763230).D_,
                    onCommandSlash: i(763230).D_,
                    onCommandJ: e.allowAIChatShortcuts ? void 0 : i(763230).D_,
                    onCommandAltJ: i(763230).D_,
                    onCommandCtrlE: i(763230).D_,
                    onEsc: e.allowMenuList || e.allowEsc ? void 0 : i(763230).D_,
                    onUp: e.allowMenuList ? void 0 : i(763230).D_,
                    onDown: e.allowMenuList ? void 0 : i(763230).D_,
                    onDelete: i(763230).D_,
                    onDeleteToEndOfLine: i(763230).D_,
                    onDeleteNextWord: i(763230).D_,
                    onSpace: i(763230).D_,
                    onBackspace: e.allowBackspace ? void 0 : i(763230).D_,
                    onLeft: e.allowLeft ? void 0 : i(763230).D_,
                    onRight: i(763230).D_,
                    onUntab: e.allowTabUntab ? void 0 : i(763230).D_,
                    onTab: e.allowTabUntab ? void 0 : i(763230).D_,
                    onGroup: i(763230).D_,
                    onUngroup: i(763230).D_,
                    onSelectAll: i(763230).D_,
                    onRedo: e.allowUndo ? void 0 : i(763230).D_,
                    onUndo: e.allowUndo ? void 0 : i(763230).D_,
                    onToggleUnderline: i(763230).D_,
                    onToggleHighlight: i(763230).D_,
                    onToggleBold: i(763230).D_,
                    onToggleItalics: i(763230).D_,
                    onToggleStrike: i(763230).D_,
                    onToggleCode: i(763230).D_,
                    onCut: e.allowCopyPaste ? void 0 : i(763230).D_,
                    onCopy: e.allowCopyPaste ? void 0 : i(763230).D_,
                    onPaste: e.allowCopyPaste ? void 0 : i(763230).D_,
                    onKeypress: i(763230).D_,
                    onHome: i(763230).D_,
                    onEnd: i(763230).D_,
                    onPageUp: i(763230).D_,
                    onPageDown: i(763230).D_,
                    onDuplicate: i(763230).D_,
                    onDuplicateSchema: i(763230).D_,
                    onFillRight: i(763230).D_,
                    onOpenLinkMenuOrOpenSearch: e.allowOpenLinkMenu ? void 0 : i(763230).D_,
                    onToggleInPageFindReplace: i(763230).D_,
                    onOpenEquationMenu: i(763230).D_,
                    onSearch: e.allowSearch ? void 0 : i(763230).D_,
                    onGoToBeginningOfLine: i(763230).D_,
                    onGoToEndOfLine: i(763230).D_,
                    onGoForwardOneChar: i(763230).D_,
                    onGoBackwardOneChar: i(763230).D_,
                    onMoveUp: i(763230).D_,
                    onMoveDown: i(763230).D_,
                    onPeekUp: i(763230).D_,
                    onPeekDown: i(763230).D_,
                    onComment: i(763230).D_,
                    onSuggest: i(763230).D_,
                    onCaption: i(763230).D_,
                    onReact: i(763230).D_,
                    onRename: i(763230).D_,
                    onTurnIntoType: i(763230).D_,
                    onMoveTo: i(763230).D_,
                    onToggleAllToggles: i(763230).D_,
                    onTogglePropertyVisibility: i(763230).D_,
                    onCommandLeft: i(763230).D_,
                    onCommandRight: i(763230).D_,
                    onCreateAIChatThread: e.allowAIChatShortcuts ? void 0 : i(763230).D_,
                    onToggleRecordingInputLatency: i(763230).D_,
                    onGoBack: void 0,
                    onGoForward: void 0,
                    onNewTab: void 0,
                    onGoUp: void 0,
                    onSwitchSpaces: void 0,
                    onQuickFind: void 0,
                    onToggleSidebar: void 0,
                    onToggleUpdateSidebar: void 0,
                    onToggleBothSidebars: void 0,
                    onToggleAISidebar: void 0,
                    onNewFullPageAIChat: void 0,
                    onOpenSlipperySlopeHomeTab: void 0,
                    onOpenSlipperySlopeChatsTab: void 0,
                    onOpenCommentsTabInUpdateSidebar: void 0,
                    onOpenUpdatesTabInUpdateSidebar: void 0,
                    onZoomIn: void 0,
                    onZoomOut: void 0,
                    onZoomReset: void 0,
                    onNewPage: void 0,
                    onBackButton: void 0,
                    onSettings: void 0,
                    onCopyLinkToCurrentPage: void 0,
                    onCopyLinkToBlock: void 0,
                    copyCurrentPageLinkifiedBlockTitle: void 0,
                    onToggleDarkMode: void 0,
                    onToggleFavorite: void 0,
                    onToggleAllUpdates: void 0,
                    onToggleAllTeams: void 0,
                    onOpenShareMenu: void 0,
                    onOpenHome: void 0,
                    onCommandS: void 0,
                    priority: e.priority ? ? 0,
                    onCopyLinkToPageInCommandSearch: void 0,
                    debugName: e.debugName,
                    onOpenExperimentSettings: void 0,
                    notionAiCommandSearchDefault: void 0,
                    onTranscription: void 0,
                    onToggleKeyboardShortcutsModalVisibility: void 0
                };
                return (0, r.jsx)(i(369064).N, { ...t
                })
            })
        },
        522820: (e, t, i) => {
            i.d(t, {
                s: () => n
            }), i(898992), i(354520);

            function n(e) {
                let t = e.userId;
                if (!t) return {
                    teams: [],
                    hasUnjoinedActiveTeams: void 0
                }; {
                    let {
                        teams: n,
                        hasUnjoinedActiveTeams: r
                    } = (0, i(277581).v)(e);
                    return {
                        teams: n.filter(n => n.isDefined() && (0, i(220530).f)({
                            userId: t,
                            teamStore: n,
                            userPermissionGroups: i(68809).f.getSpacePermissionGroupIds({
                                spaceId: e.getSpaceId()
                            })
                        }) && !n.isArchived()),
                        hasUnjoinedActiveTeams: r
                    }
                }
            }
        },
        525644: (e, t, i) => {
            i.d(t, {
                Sn: () => n,
                g4: () => r,
                p2: () => o
            });
            let n = "loadOrigin",
                r = "tabCount",
                o = "wasLoadedAtLogin"
        },
        526226: (e, t, i) => {
            i.d(t, {
                Zu: () => r,
                o8: () => o,
                oB: () => n,
                oW: () => a
            });
            let n = "PageLayoutEditorContext",
                r = "WorkflowTemplatesOnboarding",
                o = "CsvImportPreview",
                a = "ChartDrilldownContext"
        },
        528815: (e, t, i) => {
            function n(e) {
                let {
                    offerEligibility: t,
                    billingInterval: i
                } = e;
                if (!t) return !1;
                let {
                    billingIntervals: n
                } = t;
                return !n || !!(i && n.includes(i))
            }

            function r(e, t) {
                return "string" == typeof e ? t.includes(e) : "and" === e.type ? e.products.every(e => r(e, t)) : "or" === e.type ? e.products.some(e => r(e, t)) : "not" === e.type ? !r(e.product, t) : void(0, i(722371).HB)(e)
            }

            function o(e, t) {
                let n = function e(t) {
                    return "string" == typeof t ? [t] : "and" === t.type || "or" === t.type ? t.products.flatMap(e) : "not" === t.type ? [] : void(0, i(722371).HB)(t)
                }(e);
                return n.length > 0 ? n.includes(t) : r(e, [t])
            }
            i.d(t, {
                Z6: () => o,
                mQ: () => n,
                xw: () => r
            }), i(898992), i(823215), i(430670), i(737550)
        },
        528991: (e, t, i) => {
            i.d(t, {
                K: () => n
            });

            function n(e) {
                let t = e.getSpaceStore(),
                    n = e.userId,
                    r = e.getModel();
                return !!(t && n && r && (0, i(331818).K)({
                    blockModel: r,
                    spaceId: t.id,
                    currentUserId: n,
                    isTeamsEnabled: t.isTeamsEnabled(),
                    isInTranslateMode: i(708929).Uv.isBlockModeInTranslation(e.id)
                }))
            }
        },
        541156: (e, t, i) => {
            i.d(t, {
                F: () => n
            });

            function n(e, t) {
                return i(939707).o.state
            }
        },
        544978: (e, t, i) => {
            let n;

            function r(e) {
                n = e
            }

            function o() {
                return n
            }
            i.d(t, {
                a: () => r,
                g: () => o
            })
        },
        547631: (e, t, i) => {
            i.d(t, {
                a: () => a,
                b: () => r
            });
            let n = new(i(88794)).y,
                r = {
                    basicCredits: {
                        spaceUsage: 0,
                        userUsage: 0,
                        userPromotionalUsage: 0,
                        spaceLimit: 0,
                        userLimit: 0,
                        userPromotionalLimit: 0,
                        lastSpaceUsageAtMs: void 0,
                        lastSpaceUserUsageAtMs: void 0
                    },
                    premiumCredits: {
                        servicePeriodStartMs: void 0,
                        totalCreditBalance: 0,
                        creditsInOverage: 0,
                        overageLimit: 0,
                        perSource: {
                            monthlyAllocated: {
                                usageTotal: 0,
                                limit: 0
                            },
                            monthlyCommitted: {
                                usageTotal: 0,
                                limit: 0
                            },
                            yearlyElastic: {
                                usageTotal: 0,
                                limit: 0
                            }
                        }
                    },
                    lastUpdatedAt: 0
                };
            async function o(e, t, {
                suppressNetwork: r
            }) {
                if (r) return;
                let a = await e.api.callCellCompatibleApi({
                    eventName: "getAIUsageEligibilityV2",
                    environment: e,
                    data: {
                        spaceId: t
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: t
                    }
                });
                if ("success" !== a.type) return void n.recordFailure(t, a);
                n.clearCooldown(t);
                let s = a.data.dependencies ? ? [{
                    key: (0, i(568479).M5)({
                        spaceId: t
                    }),
                    version: -1
                }];
                return {
                    value: {
                        lastUpdatedAt: Date.now(),
                        basicCredits: a.data.basicCredits,
                        premiumCredits: a.data.premiumCredits
                    },
                    dependencies: s
                }
            }
            let a = new(i(227586)).n((e, {
                spaceId: t
            }) => t, async (e, {
                spaceId: t
            }, {
                forceRefetch: r
            }) => {
                let a = !r && n.shouldSuppress(t),
                    s = await (0, i(273917).y)({
                        environment: e,
                        namespace: "AIUsageEligibilityStoreV2_B",
                        key: t,
                        forceRefetch: r,
                        getValue: () => o(e, t, {
                            suppressNetwork: a
                        })
                    });
                if (s) return {
                    value: s.value,
                    dependencies: s.dependencies
                }
            }, {
                dontCacheUndefined: !0
            })
        },
        548436: (e, t, i) => {
            i.d(t, {
                A: () => n().r,
                r: () => n().r
            });
            var n = () => i(808446)
        },
        556583: (e, t, i) => {
            function n() {
                let e, t = (0, i(533992).v3)(),
                    n = o(),
                    r = (0, i(83208).X)("download_for_offline"),
                    a = (e = (0, i(67499).S)(), (0, i(682985).K8)(() => e ? (0, i(888).$)(e) : (0, i(328765).S)(), [e])),
                    s = (0, i(682985).K8)(() => {
                        let e = t.currentUser.id;
                        if (!e) return !1;
                        let n = a ? (0, i(993077).dp)(a, e).isMember() : void 0;
                        if (void 0 !== n) return n
                    }, [t, a]);
                return "full" === n && !!r && s
            }

            function r() {
                let e = o(),
                    t = (0, i(83208).X)("download_for_offline"),
                    n = (0, i(83208).X)("offline_caching");
                return "full" === e ? t || n : "cachingOnly" === e && n
            }

            function o() {
                let e = (0, i(533992).v3)();
                return (0, i(682985).K8)(() => (0, i(764919).U)(e), [e])
            }
            i.d(t, {
                K: () => r,
                y: () => n
            })
        },
        579825: (e, t, i) => {
            i.d(t, {
                Cd: () => _,
                FV: () => f,
                KI: () => h,
                MD: () => g,
                Sx: () => E,
                _L: () => y,
                an: () => S,
                bn: () => M,
                kL: () => v,
                lI: () => l,
                nQ: () => A,
                ns: () => T,
                ny: () => c,
                rd: () => k,
                sK: () => b,
                vl: () => u,
                wD: () => d,
                x8: () => x,
                z8: () => I,
                zK: () => m,
                zr: () => P
            }), i(16280), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(581454), i(737550);
            var n = () => i(381453),
                r = () => i(722371),
                o = () => i(729052),
                a = () => i(138798),
                s = () => i(642157);

            function l(e, t) {
                return e.some(e => "user_permission" === e.type && e.user_id === t)
            }

            function u(e) {
                return e.table === i(213003).NX
            }

            function d(e) {
                return (0, a().i0)((0, a().ch)(e)).map(({
                    permissionItem: e
                }) => e)
            }

            function c(e, t) {
                let i = [],
                    r = [],
                    o = [],
                    l = [],
                    u = {};
                for (let t of e) u[(0, a().I$)(t)] = t;
                for (let e of t) {
                    let t = (0, a().I$)(e);
                    if (u[t]) {
                        let i = u[t];
                        (0, s().hI)(i) && (0, s().hI)(e) && !n().n4(i.role, e.role) ? o.push([i, e]) : l.push(e), delete u[t]
                    } else i.push(e)
                }
                for (let e of Object.values(u)) r.push(e);
                return {
                    created: i.sort(m),
                    deleted: r.sort(m),
                    changed: o.sort(m),
                    unchanged: l.sort(m)
                }
            }

            function p(e) {
                return Array.isArray(e) ? e[0].type : e.type
            }

            function m(e, t) {
                return s().ZQ.indexOf(p(e)) - s().ZQ.indexOf(p(t))
            }

            function f(e, t, i) {
                let n = c(t, i),
                    r = n.unchanged.filter(e => (0, s().hI)(e));
                for (let [t, i] of n.changed) {
                    let n = (0, a().$q)(t.role, i.role);
                    (t.role !== i.role && t.role !== n || C({
                        block: e,
                        childPermissionItem: t,
                        parentPermissionItem: i
                    })) && r.push(t)
                }
                let o = [];
                for (let t of r) {
                    let i = {
                        pointer: e.pointer,
                        command: "setPermissionItem",
                        path: ["permissions"],
                        args: { ...t,
                            role: "none"
                        }
                    };
                    o.push(i)
                }
                let l = {
                    pointer: e.pointer,
                    command: "setSingletonPermissionItem",
                    path: ["permissions"],
                    args: {
                        singletonPermissionItem: {
                            type: "restricted_permission"
                        },
                        set: !1
                    }
                };
                return o.push(l), o
            }

            function _(e, t, i) {
                let n = [],
                    r = c(t, i);
                for (let e of r.created)
                    if ((0, s().hI)(e)) {
                        let t = { ...e,
                            role: "none"
                        };
                        n.push([t, e])
                    }
                for (let [t, i] of r.changed) {
                    let r = (0, a().$q)(t.role, i.role);
                    t.role === i.role || t.role === r || C({
                        block: e,
                        childPermissionItem: t,
                        parentPermissionItem: i
                    }) || n.push([t, i])
                }
                return n
            }

            function g(e) {
                if (e) {
                    let t = {},
                        i = new Set(["read_user_without_email", "read_user_with_email", "inherit_creator_permissions", "link_preview", "synced_database", ...s().w]);
                    for (let [n, r] of Object.entries(e)) i.has(n) || (t[n] = r);
                    if ((0, a().IL)(t)) return t
                }
                return "none"
            }

            function v(e) {
                if (!e) return {};
                let {
                    read_user_with_email: t,
                    read_user_without_email: i
                } = e;
                return i && t ? {
                    read_user_without_email: i,
                    read_user_with_email: t
                } : i ? {
                    read_user_without_email: i
                } : {}
            }

            function h(e) {
                if (!e) return {};
                let {
                    link_preview: t,
                    synced_database: i
                } = e;
                return t && i ? {
                    link_preview: t,
                    synced_database: i
                } : t ? {
                    link_preview: t
                } : {}
            }

            function y(e) {
                return !!(e && e.inherit_creator_permissions)
            }

            function b(e, t) {
                if (e)
                    if ("none" === e) return {
                        label: i(805186).S.noAccessLabel
                    };
                    else if (t === i(213003).NX || t === i(711042).y7) return {
                    label: i(805186).S.memberLabel,
                    caption: i(805186).S.memberCaption
                };
                else if (e.read_content && e.update_content && e.insert_content && e.manage_permissions) return {
                    label: i(805186).S.fullAccessLabel,
                    caption: i(805186).S.fullAccessCaption
                };
                else if (e.read_content && e.update_content && e.insert_content) return {
                    label: i(805186).S.canEditLabel,
                    caption: i(805186).S.canEditCaption
                };
                else if (e.insert_content || e.update_content || e.read_content || e.read_comment || e.manage_permissions || e.interact_with_agents) return {
                    label: i(805186).S.mixedAccessLabel,
                    caption: i(805186).S.mixedAccessCaption
                };
                else if (e.insert_comment) return {
                    label: i(805186).S.canCommentLabel,
                    caption: i(805186).S.canCommentCaption
                };
                else if (e.insert_property || e.update_property || e.read_property) throw Error("Unsupported permission role");
                else(0, r().HB)(e);
                else throw Error("Expected to have a role")
            }

            function S(e, t) {
                if ((0, a().II)(e)) {
                    let {
                        label: i
                    } = b(e, t);
                    return i
                }
                return "reader" === e ? i(805186).S.canReadLabel : "editor" === e ? i(805186).S.fullAccessLabel : "read_and_write" === e ? i(805186).S.canEditLabel : "content_only_editor" === e ? i(805186).S.canEditContentLabel : "comment_only" === e ? i(805186).S.canCommentLabel : "none" === e ? i(805186).S.noAccessLabel : "membership_admin" === e ? i(805186).S.membershipAdminLabel : void(0, r().HB)(e)
            }

            function k(e) {
                switch (e) {
                    case "owner":
                        return i(805186).S.workspaceOwnerLabel;
                    case "membership_admin":
                        return i(805186).S.membershipAdminLabel;
                    case "member":
                        return i(805186).S.memberLabel;
                    case "restricted_member":
                        return i(805186).S.restrictedMemberLabel;
                    case "none":
                    case "page_guest":
                        return i(805186).S.noneLabel;
                    default:
                        (0, r().HB)(e)
                }
            }
            async function x(e) {
                var t;
                return (t = await w(e)).shared_to_web ? "shared_to_web" : t.shared_externally ? "shared_externally" : t.shared_internally ? "shared_internally" : "private"
            }
            async function w(e) {
                let {
                    spaceId: t,
                    inheritedPermissionItemsForPage: i,
                    loadRecordModel: n,
                    teamHasTeamLevelGuestsCache: a
                } = e, l = {
                    shared_internally: !1,
                    shared_externally: !1,
                    shared_to_web: !1,
                    private: !1
                }, u = i.filter(e => !(0, s().T6)(e));
                if (1 === u.length && (0, s().B2)(u[0])) return l.private = !0, l;
                let d = u.filter(e => (0, s().B2)(e) || (0, s().Jx)(e)).map(e => (0, o().i1)({
                        spaceId: t,
                        userId: e.user_id
                    })),
                    c = await n(d),
                    p = async e => {
                        let i = await n({
                            table: "team",
                            id: e,
                            spaceId: t
                        });
                        return !!i && i.getRawMembership().some(e => "user" === e.entity_type && "team_level_guest" === e.type)
                    };
                for (let e of u) switch (e.type) {
                    case "user_permission":
                    case "exclusive_user_permission":
                        let i = (0, o().i1)({
                                spaceId: t,
                                userId: e.user_id
                            }),
                            n = c.getModel(i);
                        null != n && n.isMember() ? l.shared_internally = !0 : l.shared_externally = !0;
                        continue;
                    case "explicit_team_owner_permission":
                    case "explicit_team_permission":
                    case "explicit_team_guest_permission":
                        let s = e.team_id;
                        ((null == a ? void 0 : a[s]) !== void 0 ? a[s] : await p(s)) ? l.shared_externally = !0: l.shared_internally = !0;
                        continue;
                    case "bot_permission":
                        l.shared_externally = !0;
                        continue;
                    case "group_permission":
                    case "space_permission":
                    case "space_owner_permission":
                        l.shared_internally = !0;
                        continue;
                    case "public_permission":
                        l.shared_to_web = !0;
                        break;
                    case "deleted_permission":
                    case "team_owner_permission":
                    case "team_permission":
                    case "trusted_domain_permission":
                    case "collection_property_permission":
                    case "integration_space_owner_permission":
                        continue;
                    default:
                        (0, r().HB)(e)
                }
                return l
            }

            function P(e) {
                switch (e.type) {
                    case "explicit_team_owner_permission":
                    case "explicit_team_guest_permission":
                    case "explicit_team_permission":
                        return e.team_id;
                    case "bot_permission":
                        return e.bot_id;
                    case "exclusive_user_permission":
                    case "user_permission":
                        return e.user_id;
                    case "group_permission":
                        return e.group_id;
                    case "integration_space_owner_permission":
                        return e.space_id;
                    case "public_permission":
                    case "team_permission":
                    case "team_owner_permission":
                    case "deleted_permission":
                    case "restricted_permission":
                    case "space_permission":
                    case "space_owner_permission":
                    case "trusted_domain_permission":
                    case "collection_property_permission":
                        return;
                    default:
                        (0, r().HB)(e)
                }
            }

            function I(e) {
                let {
                    teamsThatUserIsANonGuestMemberOf: t,
                    teamsThatUserIsAOwnerOf: i,
                    spaceMembersCount: n
                } = e, r = t.filter(e => !e.isArchived());
                if (n > 1) return {
                    canArchive: !1,
                    reason: "multipleWorkspaceMembers"
                };
                if (1 !== r.length) return {
                    canArchive: !1,
                    reason: "multipleUnarchivedTeams"
                };
                let o = r[0];
                return i.includes(o) ? {
                    canArchive: !0
                } : {
                    canArchive: !1,
                    reason: "isNotOwnerOfTeam"
                }
            }

            function C(e) {
                let {
                    block: t,
                    childPermissionItem: i,
                    parentPermissionItem: n
                } = e;
                return !t.isCollectionView() && "read_and_write" === i.role && "content_only_editor" === n.role
            }
            async function T(e) {
                let {
                    pointer: t,
                    loadRecordModel: n
                } = e;
                return function(e) {
                    let {
                        path: t
                    } = e, i = (0, a().ch)(t);
                    return (0, a().i0)(i).map(({
                        permissionItem: e
                    }) => e).some(e => (0, s().Lg)(e) && "none" !== e.role)
                }({
                    path: await (0, i(688502).U0)(t, n)
                })
            }

            function M(e) {
                switch (e.permissionItem.type) {
                    case "space_permission":
                    case "space_owner_permission":
                    case "team_permission":
                    case "team_owner_permission":
                    case "explicit_team_permission":
                    case "explicit_team_owner_permission":
                    case "explicit_team_guest_permission":
                    case "group_permission":
                        return !0;
                    case "bot_permission":
                    case "deleted_permission":
                    case "exclusive_user_permission":
                    case "public_permission":
                    case "restricted_permission":
                    case "trusted_domain_permission":
                    case "user_permission":
                    case "collection_property_permission":
                    case "integration_space_owner_permission":
                        return !1;
                    default:
                        return e.permissionItem, !1
                }
            }

            function A(e) {
                return e.sort((e, t) => E(e.permissionItem, t.permissionItem)).reverse().sort((e, t) => {
                    var i, n;
                    let r, o, a = (0, s().hI)(e.permissionItem) ? e.permissionItem.role : void 0,
                        l = (0, s().hI)(t.permissionItem) ? t.permissionItem.role : void 0,
                        u = void 0 !== a && (0, s().PW)(a) ? s().TE[a] : 0,
                        d = void 0 !== l && (0, s().PW)(l) ? s().TE[l] : 0;
                    return u !== d ? d - u : (i = e.permissionItem, n = t.permissionItem, r = (0, s().i4)(i) ? i.can_create_pages_in_collection : void 0, r === (o = (0, s().i4)(n) ? n.can_create_pages_in_collection : void 0) ? 0 : r ? -1 : +!!o)
                })
            }

            function E(e, t) {
                let i = (0, s().B2)(e),
                    n = (0, s().B2)(t);
                if (i || n) return i && n ? 0 : i ? -1 : 1;
                let r = (0, s().Ds)(e),
                    o = (0, s().Ds)(t);
                if (r || o) return r && o ? 0 : r ? -1 : 1;
                let a = (0, s().nL)(e),
                    l = (0, s().nL)(t);
                return a || l ? a && l ? 0 : a ? -1 : 1 : 0
            }
        },
        584265: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => a
            }), i(898992), i(354520), i(672577), i(581454);
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        stores: [],
                        phase: i(476987).o.Selected
                    }
                }
                cloneState() {
                    return {
                        stores: [...this.state.stores],
                        phase: this.state.phase
                    }
                }
                getEditing() {
                    if (this.state.phase === i(476987).o.Editing) return this.state.stores[0]
                }
                isSelected() {
                    return this.state.stores.length > 0 && this.state.phase === i(476987).o.Selected
                }
                isStoreSelected(e) {
                    return this.state.stores.includes(e)
                }
                getNodes() {
                    return this.state.stores.map(e => i(240414).T.findNodeFromStore(e) || void 0).filter(i(722371).O9)
                }
                getCurrentRootStore() {
                    var e, t;
                    let n = null == (e = this.getCurrentDefaultContainer()) ? void 0 : e.getProps().store;
                    return n && n instanceof i(970831).B ? n : null == (t = this.getDefaultContainer()) || null == (t = t.getProps()) ? void 0 : t.store
                }
                getCurrentRecordCache() {
                    let e = this.getCurrentRootStore();
                    if (e) return e.inMemoryRecordCache
                }
                getDefaultContainerFromTarget(e) {
                    let t = e.closest(`.${i(962817).QH}`);
                    if (t) return i(506584).A.find(e => {
                        let i = e.getNode();
                        return !!(i && i === t)
                    })
                }
                getCurrentDefaultContainer() {
                    let e = this.state.anchorContainer;
                    return e || this.getDefaultContainer()
                }
                getDefaultContainer() {
                    let e = this.state.defaultContainerStack;
                    if (e && e.length > 0) return e[e.length - 1]
                }
            }
            let o = new r;
            (0, i(908717).D_)({
                key: (0, i(908717).Jw)("selectionStore"),
                restore: e => o.setState({ ...o.state,
                    ...e
                }),
                save: () => o.cloneState()
            });
            let a = o
        },
        591083: (e, t, i) => {
            let n, r;
            i.d(t, {
                v7: () => u,
                yc: () => l
            });
            let o = [250, 1e3];

            function a(e) {
                (0, i(222024).t)().error({
                    from: "offerEligibilityMap.lazy",
                    type: "offerEligibilityMapLoadFailed",
                    error: e
                })
            }
            async function s() {
                try {
                    await (0, i(612483).L5)({
                        fn: async () => {
                            n = (await i.e(46352).then(i.bind(i, 361200))).offerEligibilityMap
                        },
                        handleError: (e, t) => "ChunkLoadError" === e.name && e.message.includes("(timeout:") ? (t && a(e), {
                            status: "retry"
                        }) : (a(e), {
                            status: "throw",
                            error: e
                        }),
                        retryAttemptsMS: o,
                        retryAttemptRandomOffsetMS: 0,
                        initialInput: void 0
                    })
                } catch (e) {
                    throw r = void 0, e
                }
            }

            function l() {
                return r || (r = s()), r
            }

            function u() {
                return n
            }
        },
        594311: (e, t, i) => {
            function n(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "permissions_settings_security_banner_show",
                        eventProperties: e
                    }
                })
            }

            function r(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "permissions_settings_security_banner_click",
                        eventProperties: e
                    }
                })
            }

            function o(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "permissions_settings_search_click",
                        eventProperties: e
                    }
                })
            }

            function a(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "permissions_settings_export_guests_button_click",
                        eventProperties: e
                    }
                })
            }

            function s(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "permissions_settings_table_multiselect_click",
                        eventProperties: e
                    }
                })
            }

            function l(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "permissions_settings_table_button_click",
                        eventProperties: e
                    }
                })
            }

            function u(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "permissions_settings_invite_button_click",
                        eventProperties: e
                    }
                })
            }

            function d(e) {
                let {
                    user_id: t,
                    page_id: i,
                    ...n
                } = e;
                return n
            }

            function c(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "update_page_permission",
                        eventProperties: "user_id" in e || "page_id" in e ? d(e) : e
                    }
                })
            }

            function p(e) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("set_permission_item", e)
            }

            function m(e) {
                if ("team" === e.type) {
                    let {
                        team_id: t,
                        ...n
                    } = e;
                    (0, i(104310).u)({
                        event: {
                            eventName: "expand_permission",
                            eventProperties: { ...n
                            }
                        },
                        opts: {
                            forceOverrideAutomaticEventData: {
                                team_id: t
                            }
                        }
                    })
                } else(0, i(104310).u)({
                    event: {
                        eventName: "expand_permission",
                        eventProperties: e
                    }
                })
            }

            function f(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "page_share_user_access_role",
                        eventProperties: e
                    }
                })
            }

            function _(e) {
                let {
                    newRole: t,
                    availableRoles: n
                } = e;
                "none" === t || "content_only_editor" === t || n.some(e => "content_only_editor" === e.role) && i(707964).u4({
                    name: "save_non_content_editor_role"
                })
            }

            function g(e) {
                let {
                    spaceBot: t,
                    from: n,
                    status: r
                } = e;
                (0, i(104310).u)({
                    event: {
                        eventName: "update_space_permission",
                        eventProperties: {
                            updated_bot_id: (0, i(4962).Xw)(t.bot_id),
                            from: n,
                            membership_type: t.membership_type,
                            parent_table: t.bot_parent_table,
                            parent_id: t.bot_parent_id,
                            status: r
                        }
                    }
                })
            }

            function v(e) {
                let {
                    spaceUser: t,
                    from: n,
                    status: r
                } = e;
                (0, i(104310).u)({
                    event: {
                        eventName: "update_space_permission",
                        eventProperties: {
                            updated_user_id: (0, i(4962).Xw)(t.user_id),
                            membership_type: t.membership_type,
                            from: n,
                            status: r
                        }
                    }
                })
            }

            function h(e, {
                item: t,
                teamStore: n
            }) {
                var r;
                let o = null == (r = n.getPermissionItems()) ? void 0 : r.find(e => e.type === t.type);
                (null == o ? void 0 : o.role) !== t.role && i(649807).rP(e, "update_team_permission", {
                    store: n,
                    ..."user_id" in t || "page_id" in t ? d(t) : t,
                    ..."user_id" in t && {
                        permission_user_id: (0, i(4962).Xw)(t.user_id)
                    },
                    old_role: null == o ? void 0 : o.role,
                    is_team_role_change: !1,
                    is_permission_change: !0
                })
            }

            function y(e, {
                memberInfo: t,
                store: n,
                team_role: r
            }) {
                i(649807).rP(e, "update_team_permission", {
                    store: n,
                    team_role: r,
                    is_team_role_change: !0,
                    is_permission_change: !1,
                    ..."user" === t.entity_type ? {
                        permission_user_id: t.user_id
                    } : {
                        permission_group_id: t.group_id
                    }
                })
            }

            function b(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "permissions_settings_tab_click",
                        eventProperties: e
                    }
                })
            }

            function S() {
                (0, i(104310).u)({
                    event: {
                        eventName: "permission_group_rename",
                        eventProperties: {}
                    }
                })
            }

            function k(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "permission_group_set_icon",
                        eventProperties: e
                    }
                })
            }

            function x(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "permission_group_add_members",
                        eventProperties: e
                    }
                })
            }

            function w() {
                (0, i(104310).u)({
                    event: {
                        eventName: "permission_group_remove_member",
                        eventProperties: {}
                    }
                })
            }

            function P() {
                (0, i(104310).u)({
                    event: {
                        eventName: "permission_group_delete",
                        eventProperties: {}
                    }
                })
            }

            function I() {
                (0, i(104310).u)({
                    event: {
                        eventName: "permission_group_create",
                        eventProperties: {}
                    }
                })
            }

            function C({
                location: e,
                inSudoMode: t,
                store: n,
                newItems: r,
                fromPermissionWrapper: o,
                flowId: a
            }) {
                let {
                    collectionId: s,
                    ownedCollectionCount: l,
                    linkedCollectionCount: u
                } = (0, i(633171).P)(n, {
                    skipPages: !0
                }), d = n.getParentCollectionIdUpToTwoLevels();
                (function({
                    store: e,
                    newItems: t
                }) {
                    let n = e => `${e.type}:${i(579825).zr(e)}`,
                        r = e.getPermissionItems(),
                        o = i(381453).pY(r, n),
                        a = i(862085).i0(e).map(e => e.permissionItem),
                        s = i(381453).pY(a, n);
                    return t.map(e => {
                        var t;
                        let r = n(e),
                            a = s[r],
                            l = null == (t = o[r]) ? void 0 : t.role,
                            u = null == a ? void 0 : a.role;
                        return (0, i(642157).Lg)(e) ? {
                            newItem: e,
                            role_old_inherited_or_most_permissive: u,
                            role_old_on_page: l,
                            privacy_level: M(e),
                            old_privacy_level: a && (0, i(642157).Lg)(a) ? M(a) : "private"
                        } : {
                            newItem: e,
                            role_old_inherited_or_most_permissive: u,
                            role_old_on_page: l
                        }
                    })
                })({
                    store: n,
                    newItems: r
                }).forEach(({
                    role_old_inherited_or_most_permissive: n,
                    role_old_on_page: r,
                    privacy_level: p,
                    old_privacy_level: m,
                    newItem: f
                }) => {
                    p || m ? c({ ...f,
                        location: e,
                        in_sudo_mode: t || void 0,
                        role_old_inherited_or_most_permissive: n,
                        role_old_on_page: r,
                        privacy_level: p,
                        old_privacy_level: m,
                        share_menu_session_id: i(880853).Ay.state.sessionId,
                        from_permission_wrapper: o,
                        collection_id: s,
                        owned_collection_count: l,
                        linked_collection_count: u,
                        parent_collection_id: d,
                        invite_flow_id: a
                    }) : c({ ...f,
                        location: e,
                        in_sudo_mode: t || void 0,
                        role_old_inherited_or_most_permissive: n,
                        role_old_on_page: r,
                        share_menu_session_id: i(880853).Ay.state.sessionId,
                        from_permission_wrapper: o,
                        collection_id: s,
                        owned_collection_count: l,
                        linked_collection_count: u,
                        parent_collection_id: d,
                        invite_flow_id: a
                    })
                })
            }

            function T(e) {
                let {
                    calculatedPermissions: t
                } = e;
                (0, i(104310).u)({
                    event: {
                        eventName: "page_share_permissions_summary",
                        eventProperties: {
                            share_menu_session_id: i(880853).Ay.state.sessionId,
                            page_permission_summary: function(e) {
                                let {
                                    mostPermissiveSpaceItem: t,
                                    mostPermissiveAncestorTeamOwnerItem: n,
                                    mostPermissiveAncestorTeamMemberItem: r,
                                    pagePermissionUIModel: o,
                                    mostPermissivePublicItem: a
                                } = e, {
                                    mostPermissiveGroupPermissions: s,
                                    mostPermissiveUserPermissions: l
                                } = o;
                                return {
                                    public: {
                                        role: a.permissionItem.role,
                                        is_public_share_link: (0, i(809934).v)(a.permissionItem),
                                        is_site: (0, i(196075).W)(a.permissionItem)
                                    },
                                    space: t.permissionItem.role,
                                    team_owner: null == n ? void 0 : n.permissionItem.role,
                                    team_member: null == r ? void 0 : r.permissionItem.role,
                                    groups: {
                                        full_access: s.filter(({
                                            permissionItem: {
                                                role: e
                                            }
                                        }) => i(642157).Km(e)).length,
                                        can_edit: s.filter(({
                                            permissionItem: {
                                                role: e
                                            }
                                        }) => i(642157).BP(e)).length,
                                        can_edit_content: s.filter(({
                                            permissionItem: {
                                                role: e
                                            }
                                        }) => i(642157).uQ(e)).length,
                                        can_comment: s.filter(({
                                            permissionItem: {
                                                role: e
                                            }
                                        }) => i(642157).MZ(e)).length,
                                        can_view: s.filter(({
                                            permissionItem: {
                                                role: e
                                            }
                                        }) => i(642157).h9(e)).length
                                    },
                                    users: {
                                        full_access: l.filter(({
                                            permissionItem: {
                                                role: e
                                            }
                                        }) => i(642157).Km(e)).length,
                                        can_edit: l.filter(({
                                            permissionItem: {
                                                role: e
                                            }
                                        }) => i(642157).BP(e)).length,
                                        can_edit_content: l.filter(({
                                            permissionItem: {
                                                role: e
                                            }
                                        }) => i(642157).uQ(e)).length,
                                        can_comment: l.filter(({
                                            permissionItem: {
                                                role: e
                                            }
                                        }) => i(642157).MZ(e)).length,
                                        can_view: l.filter(({
                                            permissionItem: {
                                                role: e
                                            }
                                        }) => i(642157).h9(e)).length
                                    },
                                    privacy_level: M(t.permissionItem)
                                }
                            }(t)
                        }
                    }
                })
            }

            function M(e) {
                return "none" === e.role ? "private" : e.unlisted_timestamp ? "unlisted" : "open"
            }

            function A() {
                (0, i(195857).DO_NOT_USE_trackLegacy)("widen_permissions")
            }

            function E(e) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("request_access", e)
            }

            function D(e) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("grant_access", e)
            }

            function B(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "grant_access_update_access_level",
                        eventProperties: e
                    }
                })
            }

            function O(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "ignore_access_request",
                        eventProperties: e
                    }
                })
            }

            function U(e) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("toggle_request_access_security_setting", e)
            }

            function R(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "view_all_requests_from_membership_request_notification",
                        eventProperties: e
                    }
                })
            }

            function N() {
                (0, i(104310).u)({
                    event: {
                        eventName: "open_guest_membership_request_modal",
                        eventProperties: {}
                    }
                })
            }
            i.d(t, {
                $N: () => P,
                Ah: () => p,
                CW: () => u,
                FX: () => U,
                Fn: () => T,
                Fs: () => O,
                G8: () => w,
                Is: () => a,
                K4: () => b,
                KI: () => y,
                MR: () => A,
                Nn: () => k,
                Sd: () => B,
                Sp: () => R,
                T_: () => E,
                UY: () => I,
                Uo: () => _,
                VJ: () => f,
                W2: () => n,
                W7: () => g,
                Y1: () => s,
                Z9: () => o,
                Zf: () => h,
                cK: () => N,
                e1: () => C,
                jR: () => l,
                lD: () => m,
                pf: () => r,
                qI: () => D,
                s$: () => x,
                sY: () => v,
                yg: () => S
            }), i(898992), i(354520), i(672577), i(803949), i(581454), i(737550)
        },
        595584: (e, t, i) => {
            i.d(t, {
                Ad: () => r,
                G9: () => n,
                mR: () => o
            });
            let n = ["enterprise_three_months", "enterprise_annual", "business_three_months", "business_annual", "team_three_months", "team_annual", "ai_fifty_percent_downgrade"],
                r = ["linkedin_perk_2025_july", "linkedin_perk_2025_fall", "youtube_creators_2025_fall", "globis_offer", "lenny_business_12m_2026"],
                o = ["resurrection_offer", "business_resurrection_offer", "business_resurrection_offer_50pct_1m", "personal", "new_year_2025", "expansion_offer", "lic_25", "lic_50", "ai_fifty_percent_upgrade", "biz_upgrade_2025_8", "biz_upgrade_2025_10", ...n, ...r, "referral_50", "block_limit", "annual_block_limit", "removing_member_block_limit", "business_block_limit_coupon", "plus_block_limit_coupon", "aimn_monthly", "aimn_annual", "business_trial_non_conversion", "business_trial_non_conversion_delayed", "plus_expansion_one_member", "plus_expansion_two_member", "business_expansion_one_member", "business_expansion_two_member"];
            (0, i(722371).qb)()(["personal", "new_year_2025", "lic_25", "lic_50", "ai_fifty_percent_upgrade", "ai_fifty_percent_downgrade", "enterprise_annual", "business_annual", "team_annual", "linkedin_perk_2025_july", "linkedin_perk_2025_fall", "youtube_creators_2025_fall", "globis_offer", "lenny_business_12m_2026"]), (0, i(722371).qb)()([])
        },
        596663: (e, t, i) => {
            i.d(t, {
                k: () => n
            });

            function n(e) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(972740).L)(),
                    r = (0, i(411882).F)(),
                    o = (0, i(83208).X)("custom_agent_upsell"),
                    a = (0, i(611285).P)({
                        name: "custom_agents",
                        spaceId: null == n ? void 0 : n.id,
                        userId: t.currentUser.id
                    }) ? ? !1,
                    s = (0, i(682985).K8)(() => !!(null == n ? void 0 : n.getZeroRetentionEnabled()), [n]),
                    l = (0, i(83208).X)("custom_agents_allow_hipaa"),
                    u = (0, i(682985).K8)(() => !!(null == n ? void 0 : n.isAiEnabledOnSpace()), [n]);
                return !!r && !!u && (!s || !!l) && (null != e && !!e.skipPremiumFeatureCheck && !!o || !n || a)
            }
        },
        606047: (e, t, i) => {
            i.d(t, {
                A: () => s,
                s: () => o
            });
            var n, r = () => i(546605);
            let o = ((n = {})[n.Team = 0] = "Team", n[n.Members = 1] = "Members", n);
            class a extends r().Store {
                getInitialState() {
                    return {
                        open: !1,
                        screen: o.Team,
                        description: "",
                        accessLevel: "open",
                        isDefault: !1,
                        name: "",
                        icon: void 0,
                        flowId: i(92513).JW(),
                        pageNumber: 1,
                        onClose: void 0
                    }
                }
            }
            let s = new a
        },
        606995: (e, t, i) => {
            i.d(t, {
                Z: () => o,
                eN: () => r,
                nW: () => n,
                wp: () => a
            });
            let n = "slippery_slope_default_on_new_workspaces",
                r = "slippery_slope_default_on_existing_workspaces";

            function o(e) {
                let {
                    settings: t
                } = e, i = null == t ? void 0 : t.slippery_slope_experiment_group;
                if ("default_on_no_toggle" === i || "default_off" === i) return i
            }

            function a(e) {
                let {
                    settings: t,
                    experimentGroup: i
                } = e;
                return "control" !== i && ("default_on_no_toggle" === i || ((null == t ? void 0 : t.slippery_slope_is_enabled) !== void 0 ? t.slippery_slope_is_enabled : "default_on_with_toggle" === i))
            }
        },
        611285: (e, t, i) => {
            i.d(t, {
                P: () => n
            });

            function n(e) {
                var t;
                let n = (0, i(783902).C)(null == (t = (0, i(544978).g)()) ? void 0 : t.featureDataLoaders, e);
                return (0, i(682985).K8)(() => {
                    if (n) return (0, i(94418)._d)(n)
                }, [n])
            }
        },
        614128: (e, t, i) => {
            i.d(t, {
                W: () => r
            });
            let n = {};

            function r(e) {
                let {
                    eventName: t,
                    key: r,
                    throttleSeconds: o,
                    eventProperties: a,
                    opts: s
                } = e, l = n[r], u = Date.now();
                return (!l || u - l > 1e3 * o) && (n[r] = u, (0, i(195857).DO_NOT_USE_trackLegacy)(t, a, s), !0)
            }
        },
        633171: (e, t, i) => {
            i.d(t, {
                P: () => n
            });

            function n(e, t) {
                var n;
                if (!e || t.skipPages && !(null != e && e.isCollectionView())) return {
                    collectionId: void 0,
                    ownedCollectionCount: void 0,
                    linkedCollectionCount: void 0
                };
                let r = null == (n = (0, i(444610).U)(e)) || null == (n = n.collectionStore()) ? void 0 : n.id,
                    o = e.isCollectionView();
                return {
                    collectionId: r,
                    ownedCollectionCount: o ? e.getOwnedCollectionStores().length : void 0,
                    linkedCollectionCount: o ? e.getLinkedCollectionStores().length : void 0
                }
            }
        },
        633210: (e, t, i) => {
            i.d(t, {
                r: () => n
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(581454);

            function n(e) {
                let {
                    environment: t,
                    spaceViewStore: n,
                    userSettingsStore: r,
                    type: o
                } = e, a = n.getSpaceId(), s = i(335751).c, l = "shared" === o ? s({
                    environment: t,
                    spaceViewStore: n,
                    userSettingsStore: r
                }) : function(e) {
                    let {
                        environment: t,
                        spaceViewStore: n,
                        userSettingsStore: r
                    } = e, o = n.getSpaceStore(), a = (0, i(484712).U)(n) || (0, i(882061).J)({
                        environment: t
                    });
                    if ((0, i(916804).I)(o) && !a) return [];
                    let s = (0, i(275619).I)({
                        environment: t,
                        spaceViewStore: n
                    });
                    return (0, i(822209).X)({
                        environment: t,
                        spaceViewStore: n,
                        userSettingsStore: r
                    }) ? (0, i(649498).X)(s) : s
                }({
                    environment: t,
                    spaceViewStore: n,
                    userSettingsStore: r
                });
                if (!l) return;
                if (l = (l = l.filter(e => {
                        let {
                            isCopyIndicator: t,
                            shouldShowAsLoadingSpinner: n
                        } = (0, i(152396).u)(e);
                        return !t || t && n
                    })).filter(e => !e.isArchived()), !a) return {
                    allPagesStores: l,
                    visiblePagesStores: l
                };
                if ("private" === o || "shared" === o && (0, i(800574).r)()) {
                    let e = (0, i(822209).R)({
                            environment: t,
                            spaceViewStore: n,
                            type: o,
                            userSettingsStore: r
                        }),
                        a = (0, i(171231).lu)({
                            items: l,
                            limit: e.truncationLimit
                        });
                    return {
                        allPagesStores: l,
                        visiblePagesStores: a
                    }
                }
                if (!r.hasUserPinnedToOutliner({
                        type: i(669439).BP[o],
                        spaceId: a
                    })) return {
                    allPagesStores: l,
                    visiblePagesStores: l.length <= i(425567).R ? l : l.slice(0, i(425567).R)
                };
                let u = new Set(l.map(({
                    id: e
                }) => e));
                return {
                    allPagesStores: l,
                    visiblePagesStores: n.getPinnedSharedPages().filter(({
                        id: e
                    }) => u.has(e))
                }
            }
        },
        635339: (e, t, i) => {
            i.d(t, {
                Hg: () => a,
                Sz: () => c,
                Tc: () => s,
                q6: () => l,
                yd: () => r
            });
            let n = {};

            function r(e) {
                void 0 === n[e] && (n[e] = Math.floor(performance.now()))
            }
            let o = {};

            function a(e) {
                o = { ...e,
                    ...o
                }
            }

            function s() {
                return o
            }

            function l({
                environment: e
            }) {
                if (!n.initial_render) return r("initial_render"), { ...u(),
                    page_origin_or_prewarmed_tab_app_start: Math.floor((0, i(680007).getPageOriginOrPrewarmedTabAppStartTime)(e.RouterStore) ? ? 0)
                }
            }

            function u() {
                let {
                    app_start_to_main_start: e,
                    main_start_to_prefetch_initiated: t,
                    prefetch_initiated_to_statsig_bootup_blocking_start: r,
                    statsig_bootup_blocking: o,
                    render_start_to_render_end: a
                } = (0, i(259533).getSubMetricsAndMetricDataForTracking)({
                    isPrewarmedTab: !1
                }).sub_metrics;
                return (0, i(381453).z7)({
                    app_start_to_main_start: e,
                    main_start_to_prefetch_initiated: t,
                    prefetch_initiated_to_statsig_bootup_blocking_start: r,
                    statsig_bootup_blocking: o,
                    render_start_to_render_end: a,
                    ...n
                }, e => void 0 === e)
            }
            let d = !1;

            function c({
                reason: e,
                environment: t,
                is_expanded: n,
                spaceId: r
            }) {
                var a, s;
                d || (d = !0, (0, i(104310).u)({
                    event: {
                        eventName: "sidebar.initial_render_failure",
                        eventProperties: { ...o,
                            subMetrics: u(),
                            reason: e,
                            get_spaces_prefetch_type: null == (a = i(719100).i.cache.getPrefetchAnalytic("getSpaces")) ? void 0 : a.type,
                            get_user_shared_pages_in_space_prefetch_type: null == (s = i(719100).i.cache.getPrefetchAnalytic(`getUserSharedPagesInSpace(${r})`)) ? void 0 : s.type,
                            is_document_focused: document.hasFocus(),
                            is_expanded: n
                        }
                    }
                }))
            }
        },
        640310: (e, t, i) => {
            i.d(t, {
                d: () => a,
                o: () => o
            });
            let n = new(i(815048)).O2("InlineRenderError", () => i.e(90518).then(i.bind(i, 893633))),
                r = new(i(815048)).O2("LargeSurfaceRenderError", () => i.e(70593).then(i.bind(i, 789682))),
                o = (0, i(815048)._h)(n, e => e.InlineRenderError),
                a = (0, i(815048)._h)(r, e => e.LargeSurfaceRenderError)
        },
        645040: (e, t, i) => {
            i.d(t, {
                OV: () => a,
                Qt: () => r,
                bQ: () => s,
                xm: () => n
            });
            let n = ["ai", "sites_custom_hostnames", "ai_credit_pack"];

            function r(e) {
                return !!(0, i(722371).Xk)(n, e)
            }
            let o = ["student", "personal", "plus", "business", "enterprise"];

            function a(e) {
                return !!(0, i(722371).Xk)(o, e)
            }
            let s = [...o, ...n]
        },
        649476: (e, t, i) => {
            i.d(t, {
                PK: () => s,
                Tf: () => a,
                gu: () => r,
                xu: () => o
            });
            var n = i(296540);
            let r = {
                    Modal: "Modal",
                    ActionSheet: "ActionSheet",
                    Popup: "Popup"
                },
                o = (0, n.createContext)({
                    menuType: void 0,
                    enableMobileRefresh: void 0
                });

            function a() {
                let e = (0, i(871709).$)();
                return (0, n.useContext)(o).enableMobileRefresh || e
            }

            function s() {
                return i(986939).A.isMobile ? r.Modal : void 0
            }
            o.displayName = "MenuContext"
        },
        649498: (e, t, i) => {
            i.d(t, {
                X: () => n
            }), i(898992), i(354520), i(581454);

            function n(e) {
                if (e) return e.map(e => {
                    if (!e.isDefined()) return;
                    let t = e.getLastEditedTime() || e.getCreatedTime();
                    if (t) return {
                        store: e,
                        timestamp: t
                    }
                }).filter(i(722371).O9).sort((e, t) => e.timestamp === t.timestamp ? -1 : t.timestamp - e.timestamp).map(e => e.store)
            }
        },
        649807: (e, t, i) => {
            async function n(e) {
                await (0, i(195857).DO_NOT_USE_trackLegacy)("manage_teams_filter_click", e)
            }

            function r(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "manage_teams_sort",
                        eventProperties: e
                    }
                })
            }

            function o(e, t) {
                C(e, "duplicate_team", t)
            }

            function a(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "open_team_browser",
                        eventProperties: { ...t,
                            ...(0, i(403884).h)({
                                environment: e
                            })
                        }
                    }
                })
            }

            function s(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "team_browser_search_cleared",
                        eventProperties: {
                            from: e.from
                        }
                    }
                })
            }

            function l(e, t) {
                let {
                    teamStore: n,
                    outliner_type: r
                } = t, {
                    team_id: o,
                    ...a
                } = (0, i(998539).f)({
                    environment: e,
                    teamStore: n
                });
                (0, i(104310).u)({
                    event: {
                        eventName: "team_browser_member_list_hover",
                        eventProperties: { ...a,
                            outliner_type: r
                        }
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: o
                        }
                    }
                })
            }

            function u(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "create_team_start",
                        eventProperties: {
                            from: t.from,
                            flow_id: t.flowId
                        }
                    }
                })
            }
            async function d(e, t) {
                let {
                    store: n,
                    flowId: r
                } = t;
                await n.load();
                let o = (0, i(998539).f)({
                        environment: e,
                        teamStore: n
                    }),
                    a = i(381453).cJ(o, "team_id");
                (0, i(104310).u)({
                    event: {
                        eventName: "create_team_complete",
                        eventProperties: {
                            flow_id: r,
                            ...a
                        }
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: o.team_id
                        }
                    }
                })
            }
            async function c(e, t) {
                let {
                    store: n,
                    ...r
                } = t;
                await n.load();
                let {
                    team_id: o,
                    ...a
                } = (0, i(998539).f)({
                    environment: e,
                    teamStore: n
                });
                (0, i(104310).u)({
                    event: {
                        eventName: "enable_teams",
                        eventProperties: { ...a,
                            ...r
                        }
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: o
                        }
                    }
                })
            }

            function p(e, t) {
                let {
                    screen: n,
                    store: r,
                    ...o
                } = t;
                if (n === i(606047).s.Team) {
                    let t = {
                        screen: "team",
                        ...o
                    };
                    if (!r) return void(0, i(104310).u)({
                        event: {
                            eventName: "close_create_team_modal",
                            eventProperties: t
                        }
                    });
                    let {
                        team_id: n,
                        ...a
                    } = (0, i(998539).f)({
                        environment: e,
                        teamStore: r
                    });
                    return void(0, i(104310).u)({
                        event: {
                            eventName: "close_create_team_modal",
                            eventProperties: { ...a,
                                ...t
                            }
                        },
                        opts: {
                            forceOverrideAutomaticEventData: {
                                team_id: n
                            }
                        }
                    })
                }
                let a = {
                    screen: "members",
                    flow_id: t.flow_id,
                    from: t.from
                };
                if (!r) return void(0, i(104310).u)({
                    event: {
                        eventName: "close_create_team_modal",
                        eventProperties: a
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: t.team_id
                        }
                    }
                });
                let {
                    team_id: s,
                    ...l
                } = (0, i(998539).f)({
                    environment: e,
                    teamStore: r
                });
                (0, i(104310).u)({
                    event: {
                        eventName: "close_create_team_modal",
                        eventProperties: { ...l,
                            ...a
                        }
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: s
                        }
                    }
                })
            }

            function m(e, t) {
                C(e, "invite_team_members", t)
            }

            function f(e, t) {
                C(e, "invite_team_groups", t)
            }

            function _(e, t) {
                C(e, "set_default_team", t)
            }

            function g(e, t) {
                C(e, "join_team", t)
            }

            function v(e, t) {
                let {
                    store: n,
                    ...r
                } = t, {
                    team_id: o,
                    ...a
                } = (0, i(998539).f)({
                    environment: e,
                    teamStore: n
                });
                (0, i(104310).u)({
                    event: {
                        eventName: "archive_team",
                        eventProperties: { ...a,
                            ...r
                        }
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: o
                        }
                    }
                })
            }

            function h(e, t) {
                let {
                    store: n,
                    ...r
                } = t, {
                    team_id: o,
                    ...a
                } = (0, i(998539).f)({
                    environment: e,
                    teamStore: n
                });
                (0, i(104310).u)({
                    event: {
                        eventName: "transition_to_zero_teams",
                        eventProperties: { ...a,
                            ...r
                        }
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: o
                        }
                    }
                })
            }

            function y(e, t) {
                C(e, "restore_team", t)
            }

            function b(e, t) {
                C(e, "remove_team_members", t)
            }

            function S(e, t) {
                C(e, "remove_team_groups", t)
            }

            function k(e, t) {
                C(e, "change_teams_order", t)
            }

            function x(e, t) {
                C(e, "change_team_access_level", t)
            }

            function w(e, t) {
                C(e, "update_team_settings", t)
            }

            function P(e, t) {
                let {
                    team_id: n,
                    ...r
                } = (0, i(998539).f)({
                    environment: e,
                    teamStore: t.store
                });
                (0, i(104310).u)({
                    event: {
                        eventName: "open_outliner_team_overflow",
                        eventProperties: { ...r,
                            from: t.from,
                            ...(0, i(403884).h)({
                                environment: e
                            })
                        }
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: n
                        }
                    }
                })
            }

            function I(e, t) {
                let {
                    store: n,
                    ...r
                } = t, {
                    team_id: o,
                    ...a
                } = (0, i(998539).f)({
                    environment: e,
                    teamStore: n
                });
                (0, i(104310).u)({
                    event: {
                        eventName: "click_outliner_team_overflow_option",
                        eventProperties: { ...a,
                            ...r
                        }
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: o
                        }
                    }
                })
            }
            async function C(e, t, n) {
                let {
                    store: r,
                    ...o
                } = n;
                if (!r) return void await (0, i(195857).DO_NOT_USE_trackLegacy)(t, { ...o
                });
                let a = (0, i(998539).f)({
                        environment: e,
                        teamStore: r
                    }),
                    s = i(381453).cJ(a, "team_id");
                await (0, i(195857).DO_NOT_USE_trackLegacy)(t, { ...s,
                    ...o
                }, {
                    forceOverrideAutomaticEventData: {
                        team_id: a.team_id
                    }
                })
            }

            function T(e, t, n, r, o) {
                let {
                    store: a,
                    ...s
                } = o;
                if (!a) return void(0, i(614128).W)({
                    environment: e,
                    eventName: t,
                    key: n,
                    throttleSeconds: r,
                    eventProperties: { ...s
                    }
                });
                let l = (0, i(998539).f)({
                        environment: e,
                        teamStore: a
                    }),
                    u = i(381453).cJ(l, "team_id");
                (0, i(614128).W)({
                    environment: e,
                    eventName: t,
                    key: n,
                    throttleSeconds: r,
                    eventProperties: { ...u,
                        ...s
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: l.team_id
                        }
                    }
                })
            }

            function M(e, t) {
                let {
                    team_id: n,
                    ...r
                } = (0, i(998539).f)({
                    environment: e,
                    teamStore: t.store
                });
                (0, i(104310).u)({
                    event: {
                        eventName: "open_team_home",
                        eventProperties: { ...r
                        }
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: n
                        }
                    }
                })
            }

            function A(e) {
                switch (e) {
                    case i(48023).p.General:
                        return "general";
                    case i(48023).p.Members:
                        return "members";
                    case i(48023).p.Security:
                        return "security";
                    default:
                        (0, i(722371).HB)(e)
                }
            }

            function E(e, t) {
                C(e, "click_team_settings_tab", {
                    store: t.store,
                    tab_old_value: A(t.tab_old_value),
                    tab_new_value: A(t.tab_new_value)
                })
            }

            function D(e, t) {
                C(e, "restore_team_permissions", t)
            }

            function B(e, t) {
                let {
                    store: n,
                    ...r
                } = t;
                if (!n) return void(0, i(104310).u)({
                    event: {
                        eventName: "team_invite_link_confirmation_selection",
                        eventProperties: r
                    }
                });
                let {
                    team_id: o,
                    ...a
                } = (0, i(998539).f)({
                    environment: e,
                    teamStore: n
                });
                (0, i(104310).u)({
                    event: {
                        eventName: "team_invite_link_confirmation_selection",
                        eventProperties: { ...a,
                            ...r
                        }
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: o
                        }
                    }
                })
            }

            function O(e, t) {
                let {
                    team_id: n,
                    ...r
                } = (0, i(998539).f)({
                    environment: e,
                    teamStore: t.store
                });
                (0, i(104310).u)({
                    event: {
                        eventName: "copy_team_invite_link",
                        eventProperties: r
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: n
                        }
                    }
                })
            }

            function U(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "click_team_invite_link",
                        eventProperties: t
                    }
                })
            }

            function R(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "request_access_to_team",
                        eventProperties: { ...t
                        }
                    }
                })
            }

            function N(e, t) {
                let {
                    team_id: n,
                    ...r
                } = (0, i(998539).f)({
                    environment: e,
                    teamStore: t.store
                });
                (0, i(104310).u)({
                    event: {
                        eventName: "resolve_team_access_request",
                        eventProperties: { ...r,
                            resolution: t.resolution
                        }
                    },
                    opts: {
                        forceOverrideAutomaticEventData: {
                            team_id: n
                        }
                    }
                })
            }
            i.d(t, {
                By: () => w,
                ED: () => s,
                En: () => f,
                GW: () => N,
                H8: () => u,
                JG: () => l,
                KK: () => o,
                NB: () => v,
                PA: () => m,
                Rt: () => y,
                US: () => k,
                Vg: () => E,
                WO: () => U,
                XQ: () => R,
                Zl: () => a,
                _L: () => M,
                _P: () => d,
                b0: () => c,
                fx: () => S,
                h2: () => D,
                hj: () => n,
                ks: () => I,
                lR: () => P,
                lY: () => O,
                o$: () => b,
                pi: () => B,
                rP: () => C,
                tw: () => T,
                ug: () => _,
                vo: () => g,
                w_: () => p,
                xZ: () => x,
                xl: () => r,
                yB: () => h
            })
        },
        663842: (e, t, i) => {
            i.d(t, {
                m: () => n
            });

            function n(e) {
                var t;
                let {
                    environment: n
                } = e;
                if (!(null != (t = n.mobileNative) && t.api.openUpgradeModal)) return !1;
                if ((0, i(907620).T)("supportsPlusIAP")) return !0;
                if (!n.device.isIOS) return !1; {
                    if (!n.device.mobileAppVersion) return !1;
                    let e = i(355981).parseVersion(n.device.mobileAppVersion),
                        t = i(355981).parseVersion("0.4.165");
                    return !!(e && t) && "SamsungGalaxyStore" !== n.device.mobileNativeAppStoreName && !i(355981).isLessThanVersion(e, t)
                }
            }
        },
        669439: (e, t, i) => {
            i.d(t, {
                BP: () => o,
                T5: () => n,
                r_: () => r
            });
            let n = {
                    bookmarks: "favorites",
                    teamSidebar: "teamspaceDirectory",
                    myMeetings: "myMeetings",
                    shared: "shared",
                    private: "private",
                    recents: "recents",
                    agents: "agents",
                    notion_apps: void 0,
                    meetings_today: void 0,
                    teamBrowserSearch: void 0,
                    teamBrowserUnjoinedTeams: void 0,
                    teamBrowserJoinedTeams: void 0,
                    publicPageTemplateIncludes: void 0,
                    team: void 0,
                    workspace: void 0,
                    agentsFavorites: void 0,
                    agentsMyAgents: void 0,
                    agentsFromWorkspace: void 0,
                    agentsSearch: void 0
                },
                r = {
                    bookmarks: "favorites",
                    team: "teamspaces",
                    workspace: "workspace",
                    shared: "shared",
                    private: "private",
                    myMeetings: "myMeetings",
                    notion_apps: "notion_apps",
                    agents: "agents",
                    meetings_today: "meetings_today",
                    recents: "recents",
                    agentsFavorites: "agents",
                    agentsMyAgents: "agents",
                    agentsFromWorkspace: "agents",
                    agentsSearch: "agents",
                    teamSidebar: void 0,
                    teamBrowserSearch: void 0,
                    teamBrowserUnjoinedTeams: void 0,
                    teamBrowserJoinedTeams: void 0,
                    publicPageTemplateIncludes: void 0
                },
                o = {
                    favorites: "bookmarks",
                    teamspaces: "team",
                    workspace: "workspace",
                    shared: "shared",
                    private: "private",
                    myMeetings: "myMeetings",
                    agents: "agents",
                    notion_apps: "notion_apps",
                    meetings_today: "meetings_today",
                    recents: "recents"
                }
        },
        690099: (e, t, i) => {
            i.d(t, {
                V: () => u
            }), i(898992), i(354520);
            let n = new Date("May 16 2024 08:00:00 GMT+0000").getTime();

            function r(e) {
                return i(218744).default.checkGate({
                    gateName: "sidebar_library"
                }) && !(0, i(916804).I)(e)
            }
            let o = ["favorites", "agents", "workspace", "teamspaces", "shared", "private"],
                a = ["favorites", "agents", "private", "teamspaces", "shared"],
                s = ["favorites", "agents", "teamspaces", "shared", "private"];

            function l(e) {
                return !!(0, i(722371).Xk)(i(485890)._l, e)
            }

            function u(e) {
                let {
                    environment: t,
                    spaceStore: u,
                    spaceViewStore: d,
                    currentUserId: c
                } = e, p = (0, i(993077).sE)(u, c), m = function() {
                    var e;
                    let t = i(728372).AppStoreCurrentUserSettingsStore.state,
                        r = i(728372).AppStoreSidebarSpaceStore.state;
                    if (!r) return !0;
                    let o = null == t || null == (e = t.getSettings()) ? void 0 : e.signup_time,
                        a = null == r ? void 0 : r.getCreatedTime();
                    return (0, i(722371).O9)(o) && o > n || (0, i(722371).O9)(a) && a > n
                }(), f = (0, i(483885).r)({
                    environment: t,
                    spaceStore: u
                }) ? o : m ? a : s;
                (0, i(820935).I)() && (f = [...f, "notion_apps"]), r(u) && (f = ["recents", ...f]);
                let _ = null == p ? void 0 : p.getMembershipType();
                (0, i(487174).Q3)({
                    membershipType: _,
                    skipPremiumFeatureCheck: !0
                }) || (f = f.filter(e => "agents" !== e));
                let g = d.getSidebarOrder(),
                    v = i(381453).sb(g),
                    h = f.filter(e => !v.includes(e));
                if (r(u) && h.includes("recents") && (v.unshift("recents"), h = h.filter(e => "recents" !== e)), (0, i(187106).l)(d) && !v.includes("meetings_today") && (v.unshift("meetings_today"), h = h.filter(e => "meetings_today" !== e)), !(0, i(933132).P)(d) || v.includes("myMeetings") || h.includes("myMeetings") || (h = [...h, "myMeetings"]), h.includes("agents")) {
                    let e = v.filter(e => "agents" !== e),
                        t = e.indexOf("favorites");
                    if (-1 !== t) {
                        let i = [...e];
                        return i.splice(t + 1, 0, "agents"), [...i, ...h.filter(e => "agents" !== e)]
                    }
                }
                return [...v, ...h].filter(l)
            }
        },
        694220: (e, t, i) => {
            i.d(t, {
                k: () => a,
                p: () => o
            });
            var n = i(296540),
                r = i(474848);
            let o = (0, n.createContext)(void 0);

            function a(e) {
                let t = (0, i(682985).K8)(() => {
                    let e = i(218744).default.getFeatureGateContextDataStores();
                    return {
                        withExposureLogging: e.withExposureLoggingStore.state,
                        withoutExposureLogging: e.withoutExposureLoggingStore.state
                    }
                }, []);
                return (0, r.jsx)(o.Provider, {
                    value: t,
                    children: e.children
                })
            }
            o.displayName = "FeatureGateContext"
        },
        702482: (e, t, i) => {
            i.d(t, {
                w: () => n
            });

            function n(e) {
                if (!e) return !1;
                let t = e.getSpaceStore();
                if (!t || t.getDisableGuestWithPrivatePages()) return !1;
                let n = t.userId,
                    r = t && n ? (0, i(993077).dp)(t, n) : void 0;
                return !!(null != r && r.isPageGuest()) && (0, i(891369).H)()
            }
        },
        707964: (e, t, i) => {
            i.d(t, {
                Bq: () => u,
                u4: () => l,
                LW: () => s
            }), i(944114);
            var n = i(296540);
            let r = !1,
                o = !0,
                a = [];

            function s(e) {
                let {
                    isEnabled: t,
                    isLoggedIn: s,
                    userId: u,
                    userEmail: d,
                    spaceId: c,
                    sprigConfig: p,
                    userDaysSinceSignup: m,
                    daysSinceSpaceCreated: f,
                    userDomainType: _,
                    isSpaceAdmin: g,
                    spaceMemberCount: v
                } = e;
                (0, n.useEffect)(() => {
                    if (o = t, r = !0, !t || !s || void 0 === u || void 0 === d || void 0 === p || window.Sprig) return;
                    let e = function() {
                        e._queue.push(arguments)
                    };
                    e._queue = [], e.appId = p.environmentId, window.Sprig = e, window.UserLeap = e, window.Sprig("setUserId", u), window.Sprig("setEmail", d), c && window.Sprig("setAttribute", "SPACE_ID", c), v && window.Sprig("setAttribute", "SPACE_MEMBER_COUNT", v), f && window.Sprig("setAttribute", "DAYS_SINCE_SPACE_CREATED", f), window.Sprig("setAttribute", "DAYS_SINCE_USER_SIGNUP", m), window.Sprig("setAttribute", "USER_DOMAIN_TYPE", _), window.Sprig("setAttribute", "IS_SPACE_ADMIN", g), (0, i(197603).Ay)("https://cdn.sprig.com/shim.js").then(() => {
                        for (let e of a) l(e)
                    }).catch(e => {
                        console.error("Error loading Sprig shim", e)
                    })
                }, [t, s, u, p, d, c, g, _, m, f, v]);
                let h = (0, i(668745).ZC)(s);
                (0, n.useEffect)(() => {
                    h && !s && window.Sprig && window.Sprig("logoutUser")
                }, [h, s])
            }

            function l(e) {
                let t = e.name,
                    i = "args" in e ? e.args : {};
                if (!window.Sprig) {
                    r || (o ? a.push(e) : console.warn("Sprig not loaded, not tracking: ", t));
                    return
                }
                window.Sprig("track", t, i)
            }

            function u(e, t) {
                window.Sprig && window.Sprig("setAttribute", e, t)
            }
        },
        708929: (e, t, i) => {
            i.d(t, {
                Or: () => s,
                Uv: () => o,
                qu: () => a,
                vE: () => l
            }), i(16280);
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        blockStoreMode: {}
                    }
                }
                getStateForBlock(e) {
                    if (e in this.state.blockStoreMode) return this.state.blockStoreMode[e]
                }
                setStateForBlock(e, t) {
                    this.update(i => ({ ...i,
                        blockStoreMode: { ...i.blockStoreMode,
                            [e]: t
                        }
                    }))
                }
                clearStateForBlock(e) {
                    e in this.state.blockStoreMode && (delete this.state.blockStoreMode[e], this.emit())
                }
                getMode(e, t) {
                    var i, n, r;
                    if (t) return (null == (n = this.getStateForBlock(e.id)) ? void 0 : n.mode) ? ? "default";
                    let o = null == (i = e.getNavigableBlockStore()) ? void 0 : i.id;
                    return o ? (null == (r = this.getStateForBlock(o)) ? void 0 : r.mode) ? ? "default" : "default"
                }
                hasModeSet(e) {
                    let t = e;
                    if (!e.isNavigableBlock()) {
                        let i = e.getNavigableBlockStore();
                        if (!i) return !0;
                        t = i
                    }
                    return !!this.getStateForBlock(t.id)
                }
                getSessionId(e) {
                    var t;
                    if (!e.isNavigableBlock()) throw Error("getSessionId must be called with a navigable block.");
                    return null == (t = this.getStateForBlock(e.id)) ? void 0 : t.sessionId
                }
                getTranslateModeForBlock(e) {
                    let t = this.getStateForBlock(e);
                    if (t && a(t)) return t
                }
                isBlockModeInTranslation(e) {
                    return !!this.getTranslateModeForBlock(e)
                }
            }
            let o = new r;

            function a(e) {
                return !!e && s(e.mode)
            }

            function s(e) {
                return "translate_locked" === e || "translate_unlocked" === e
            }

            function l(e) {
                for (let t of e)
                    if (o.isBlockModeInTranslation(t.id)) return t
            }(0, i(202146).exposeDebugValue)("EditorModeStore", o)
        },
        713208: (e, t, i) => {
            i.d(t, {
                S: () => n
            });

            function n(e, t = !0) {
                let r = function(e, t = !0) {
                    return null == e ? void 0 : e.findRecordStoreUIAncestor(n => n instanceof i(970831).B && n.isCollectionView() && (t || n.id !== e.id)).ancestor
                }(e, t);
                if (r) return i(496704).K.findCollectionViewBlockFromId(r.id)
            }
        },
        723240: (e, t, i) => {
            i.d(t, {
                r: () => n
            });

            function n() {
                return (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceIdStore)
            }
        },
        742197: (e, t, i) => {
            i.d(t, {
                G: () => n
            });

            function n(e, t) {
                let n = t.getName(),
                    r = i(962299).A.getIntl().formatMessage({
                        defaultMessage: "Untitled workspace",
                        id: "spaceHelpers.getSpaceName.untitledWorkspace.name"
                    });
                if (n) return n || r; {
                    let n = i(949830).A.getData(e, {
                        spaceId: t.id,
                        userId: e.currentUser.id
                    });
                    if (n) return n.name || r
                }
                return r
            }
        },
        745493: (e, t, i) => {
            i.d(t, {
                Y: () => n,
                c: () => r
            });
            let n = 5 * i(953325).B,
                r = 20 * i(953325).B
        },
        747369: (e, t, i) => {
            i.d(t, {
                A: () => o
            });
            var n = i(296540),
                r = i(474848);
            let o = n.forwardRef(function(e, t) {
                    if (e.menuType !== i(649476).gu.Modal) return (0, r.jsx)(s, { ...e,
                        ref: t
                    }); {
                        let {
                            includeFixedHeaderSpacing: n,
                            header: o,
                            children: a,
                            ...l
                        } = e, u = n ? (0, r.jsx)(s, {
                            header: (0, r.jsx)("div", {
                                className: "x1l90r2v",
                                children: o
                            }),
                            children: (0, r.jsx)("div", {
                                className: "xwya9rg",
                                children: a
                            }),
                            ...l
                        }) : (0, r.jsx)(s, { ...e
                        });
                        return (0, r.jsx)(i(488796).s, { ...e,
                            ref: t,
                            children: u
                        })
                    }
                }),
                a = {
                    kZeWKH: "x8du1vd",
                    $$css: !0
                },
                s = n.forwardRef(function(e, t) {
                    let o = (0, i(533992).v3)(),
                        {
                            isIOS: s
                        } = (0, i(533992).Y0)(),
                        l = (0, n.useRef)(null),
                        u = (0, n.useRef)(!1),
                        d = (0, i(871709).$)(),
                        c = i(986939).A.isMobile && e.menuType === i(649476).gu.Modal && e.enableMobileRefresh,
                        p = (0, n.useMemo)(() => ({
                            menuType: e.menuType,
                            enableMobileRefresh: c
                        }), [e.menuType, c]),
                        f = (0, i(571354).n)(),
                        _ = (0, i(682985).K8)(() => (function(e) {
                            let {
                                menuProps: t,
                                environment: n,
                                isInBottomSheet: r,
                                isError: o,
                                mobileNativeBottomPadding: a
                            } = e, {
                                WindowSizeStore: s
                            } = n;
                            if (t.menuType === i(649476).gu.Popup) return [v({
                                width: t.width,
                                minWidth: t.minWidth || 180,
                                maxWidth: t.maxWidth || "calc(100vw - 24px)",
                                height: t.height || "100%",
                                maxHeight: t.maxHeight || "70vh",
                                minHeight: t.minHeight,
                                paddingTop: t.paddingTop,
                                paddingBottom: t.paddingBottom
                            }), o && h]; {
                                if (t.menuType === i(649476).gu.ActionSheet) return y({
                                    height: t.height || "100%",
                                    maxHeight: t.maxHeight || "70vh",
                                    paddingBottom: t.footer && !t.disableBottomPadding ? s.state.paddingBottomCSS : 0
                                });
                                let e = t.footer ? a : 0;
                                return [b({
                                    height: r ? t.height : t.height || "100%",
                                    minWidth: t.minWidth || void 0,
                                    paddingBottom: e
                                }), t.whiteBackground ? S : k]
                            }
                        })({
                            menuProps: e,
                            environment: o,
                            isInBottomSheet: d,
                            isError: u.current,
                            mobileNativeBottomPadding: f
                        }), [e, o, d, f]),
                        g = e.menuType === i(649476).gu.Popup ? e.onClickOutside : void 0;
                    (0, n.useEffect)(() => {
                        if (e.menuType === i(649476).gu.Popup && g) {
                            function t(t) {
                                if (e.menuType !== i(649476).gu.Popup || !g) return;
                                let n = l.current;
                                if (!n || !t.target) return;
                                let r = t.target;
                                (0, i(279954).o)({
                                    clickedElement: r,
                                    menuElement: n
                                }) && g(t)
                            }
                            return window.addEventListener("click", t), () => {
                                window.removeEventListener("click", t)
                            }
                        }
                    }, [g, e.menuType]);
                    let x = (0, i(421573).A)(l, e.innerRef, t);
                    return (0, r.jsx)(i(649476).xu.Provider, {
                        value: p,
                        children: (0, r.jsx)("div", {
                            onMouseEnter: e.onMouseEnter,
                            onMouseDown: e.onMouseDown,
                            onClick: e.onClick,
                            onDoubleClick: e.onDoubleClick,
                            onContextMenu: e.onContextMenu,
                            onTouchStart: e.onTouchStart,
                            onTouchMove: e.onTouchMove,
                            onTouchEnd: e.onTouchEnd,
                            onTouchCancel: e.onTouchCancel,
                            ...i(952687).A.props(_, void 0 !== e.className && {
                                $$css: !0,
                                className: e.className
                            }),
                            ref: x,
                            children: (0, r.jsxs)(i(337336).K, {
                                from: "Menu",
                                fallback: ({
                                    error: e,
                                    errorId: t
                                }) => (u.current = !0, (0, r.jsx)(i(640310).d, {
                                    error: e,
                                    errorId: t
                                })),
                                children: [(0, r.jsx)(P, {
                                    header: e.header,
                                    tokenInputHeader: e.tokenInputHeader,
                                    disableHeaderBorder: e.disableHeaderBorder
                                }), (0, r.jsx)(m, {
                                    children: e.children,
                                    disableScroller: e.disableScroller,
                                    onScroll: e.onScroll,
                                    bodyScrollerClassName: e.bodyScrollerClassName,
                                    renderAsPage: e.renderAsPage,
                                    menuType: e.menuType,
                                    environment: o,
                                    footer: e.footer,
                                    disableBottomPadding: e.disableBottomPadding,
                                    scrollerStyleOverrides: [e.scrollerStyle, s && a]
                                }), (0, r.jsx)("footer", { ...{
                                        className: "x2lah0s"
                                    },
                                    children: e.footer
                                })]
                            })
                        })
                    })
                }),
                l = {
                    kzQI83: "x1iyjqo2",
                    kAzted: "x2lwn1j",
                    k3aq6I: "x17dzmu4",
                    kGO01o: "x14jbevu",
                    $$css: !0
                },
                u = {
                    kGO01o: "x18d9i69",
                    $$css: !0
                },
                d = {
                    kzQI83: "x1iyjqo2",
                    kAzted: "x2lwn1j",
                    kGO01o: "x14jbevu",
                    $$css: !0
                },
                c = {
                    kGO01o: "x18d9i69",
                    $$css: !0
                },
                p = {
                    kzQI83: "x1iyjqo2",
                    kAzted: "x2lwn1j",
                    kGO01o: "x14jbevu",
                    $$css: !0
                };

            function m({
                children: e,
                disableScroller: t,
                onScroll: o,
                bodyScrollerClassName: a,
                renderAsPage: s,
                menuType: f,
                environment: _,
                footer: g,
                disableBottomPadding: v,
                scrollerStyleOverrides: h
            }) {
                let y = (0, n.useRef)(null),
                    {
                        moreContentScrollerHintStyle: b,
                        onScrollForMoreContentScrollerHint: S
                    } = (0, i(572779).j)(y),
                    k = (0, i(682985).K8)(() => (function(e) {
                        let {
                            menuType: t,
                            environment: n,
                            footer: r,
                            disableBottomPadding: o
                        } = e, {
                            WindowSizeStore: a,
                            device: s
                        } = n;
                        return t === i(649476).gu.Popup ? [l, s.isTablet && u] : t === i(649476).gu.ActionSheet ? [d, r || o ? c : (e => [{
                            kGO01o: null != e ? "xjqpyvm" : e,
                            $$css: !0
                        }, {
                            "--x-paddingBottom": "number" == typeof e ? e + "px" : null != e ? e : void 0
                        }])(a.state.paddingBottomCSS)] : p
                    })({
                        menuType: f,
                        environment: _,
                        footer: g,
                        disableBottomPadding: v
                    }), [f, _, g, v]),
                    x = (0, n.useMemo)(() => [k, h, b], [k, b, h]),
                    w = (0, n.useCallback)(e => {
                        S(), null == o || o(e)
                    }, [S, o]);
                if (e)
                    if (t) return (0, r.jsx)("div", { ...i(952687).A.props(x),
                        children: e
                    });
                    else return (0, r.jsx)(i(136508)._, {
                        type: i(644154).A.Y,
                        style: x,
                        onScroll: w,
                        className: a,
                        ref: e => {
                            y.current = e, s ? i(862921).A.MenuPageScroller = e : i(862921).A.MenuScroller = e
                        },
                        children: e
                    });
                return null
            }
            let f = {
                    k1xSpc: "x78zum5",
                    kXwgrk: "xdt5ytf",
                    $$css: !0
                },
                _ = {
                    k1xSpc: "x78zum5",
                    kXwgrk: "xdt5ytf",
                    kzqmXN: "xh8yej3",
                    kC7eKd: "xd54fh8",
                    $$css: !0
                },
                g = {
                    k1xSpc: "x78zum5",
                    kXwgrk: "xdt5ytf",
                    kzqmXN: "xh8yej3",
                    kskxy: "xmz0i5r",
                    kAzted: "x2lwn1j",
                    $$css: !0
                },
                v = e => {
                    let t, i, n, r, o, a, s, l;
                    return [f, {
                        kzqmXN: (e.width ? ? null) != null ? "x5lhr3w" : e.width ? ? null,
                        k7Eaqz: null != e.minWidth ? "xkj4a21" : e.minWidth,
                        ks0D6T: null != e.maxWidth ? "xf68679" : e.maxWidth,
                        kZKoxP: null != e.height ? "x16ye13r" : e.height,
                        kskxy: null != e.maxHeight ? "x1jols5v" : e.maxHeight,
                        kAzted: (e.minHeight ? ? null) != null ? "x82snj4" : e.minHeight ? ? null,
                        kLKAdn: (e.paddingTop ? ? null) != null ? "x1jm3axb" : e.paddingTop ? ? null,
                        kGO01o: (e.paddingBottom ? ? null) != null ? "xjqpyvm" : e.paddingBottom ? ? null,
                        $$css: !0
                    }, {
                        "--x-width": "number" == typeof(t = e.width ? ? null) ? t + "px" : null != t ? t : void 0,
                        "--x-minWidth": "number" == typeof(i = e.minWidth) ? i + "px" : null != i ? i : void 0,
                        "--x-maxWidth": "number" == typeof(n = e.maxWidth) ? n + "px" : null != n ? n : void 0,
                        "--x-height": "number" == typeof(r = e.height) ? r + "px" : null != r ? r : void 0,
                        "--x-maxHeight": "number" == typeof(o = e.maxHeight) ? o + "px" : null != o ? o : void 0,
                        "--x-minHeight": "number" == typeof(a = e.minHeight ? ? null) ? a + "px" : null != a ? a : void 0,
                        "--x-paddingTop": "number" == typeof(s = e.paddingTop ? ? null) ? s + "px" : null != s ? s : void 0,
                        "--x-paddingBottom": "number" == typeof(l = e.paddingBottom ? ? null) ? l + "px" : null != l ? l : void 0
                    }]
                },
                h = {
                    kjj79g: "xl56j7k",
                    $$css: !0
                },
                y = e => {
                    let t, i, n;
                    return [_, {
                        kZKoxP: (e.height ? ? null) != null ? "x16ye13r" : e.height ? ? null,
                        kskxy: (e.maxHeight ? ? null) != null ? "x1jols5v" : e.maxHeight ? ? null,
                        kGO01o: (e.paddingBottom ? ? null) != null ? "xjqpyvm" : e.paddingBottom ? ? null,
                        $$css: !0
                    }, {
                        "--x-height": "number" == typeof(t = e.height ? ? null) ? t + "px" : null != t ? t : void 0,
                        "--x-maxHeight": "number" == typeof(i = e.maxHeight ? ? null) ? i + "px" : null != i ? i : void 0,
                        "--x-paddingBottom": "number" == typeof(n = e.paddingBottom ? ? null) ? n + "px" : null != n ? n : void 0
                    }]
                },
                b = e => {
                    let t, i, n;
                    return [g, {
                        kZKoxP: (e.height ? ? null) != null ? "x16ye13r" : e.height ? ? null,
                        k7Eaqz: (e.minWidth ? ? null) != null ? "xkj4a21" : e.minWidth ? ? null,
                        kGO01o: (e.paddingBottom ? ? null) != null ? "xjqpyvm" : e.paddingBottom ? ? null,
                        $$css: !0
                    }, {
                        "--x-height": "number" == typeof(t = e.height ? ? null) ? t + "px" : null != t ? t : void 0,
                        "--x-minWidth": "number" == typeof(i = e.minWidth ? ? null) ? i + "px" : null != i ? i : void 0,
                        "--x-paddingBottom": "number" == typeof(n = e.paddingBottom ? ? null) ? n + "px" : null != n ? n : void 0
                    }]
                },
                S = {
                    kC7eKd: "xd54fh8",
                    $$css: !0
                },
                k = {
                    kC7eKd: "x1wwwm72",
                    $$css: !0
                },
                x = {
                    kmuXW: "x2lah0s",
                    kskxy: "x1xiyphd",
                    kGVxlE: "x1gnnqk1",
                    $$css: !0
                },
                w = {
                    kGVxlE: "xp8lv7t",
                    $$css: !0
                };

            function P({
                header: e,
                tokenInputHeader: t,
                disableHeaderBorder: n
            }) {
                if (e)
                    if (t) return (0, r.jsx)(i(136508)._, {
                        type: i(644154).A.Y,
                        style: [x, !n && w],
                        children: e
                    });
                    else return (0, r.jsx)("div", {
                        className: "x2lah0s",
                        children: e
                    });
                return null
            }
        },
        764919: (e, t, i) => {
            i.d(t, {
                U: () => n
            });

            function n(e) {
                var t;
                let n = e.device,
                    r = (0, i(817599).q)(e),
                    o = "blank" === e.RouterStore.state.route.name;
                return !r && !o && e.sqliteConnection ? "function" != typeof(null == (t = navigator.locks) ? void 0 : t.request) ? "none" : n.isElectron || n.isMobileNative ? "full" : "cachingOnly" : "none"
            }
        },
        770694: (e, t, i) => {
            i.d(t, {
                C: () => n
            });

            function n(e) {
                var t;
                let {
                    environment: n,
                    spaceId: r
                } = e, o = null == (t = n.currentUser) ? void 0 : t.id;
                if (o) return (0, i(273314).Jv)({
                    environment: n,
                    spaceId: r,
                    userId: o
                })
            }
        },
        776601: (e, t, i) => {
            i.d(t, {
                r: () => n
            });
            let n = {
                BRL: {
                    currencyCode: "BRL",
                    minorUnitDigits: 2
                },
                EUR: {
                    currencyCode: "EUR",
                    minorUnitDigits: 2
                },
                GBP: {
                    currencyCode: "GBP",
                    minorUnitDigits: 2
                },
                JPY: {
                    currencyCode: "JPY",
                    minorUnitDigits: 0
                },
                KRW: {
                    currencyCode: "KRW",
                    minorUnitDigits: 0
                },
                USD: {
                    currencyCode: "USD",
                    minorUnitDigits: 2
                }
            }
        },
        783902: (e, t, i) => {
            i.d(t, {
                C: () => n
            });

            function n(e, t) {
                let n = (0, i(533992).v3)(),
                    r = (0, i(482170).l)(t, i(795676).A);
                return (0, i(682985).K8)(() => {
                    var t;
                    if (!e) return;
                    let o = null == (t = (0, i(544978).g)()) ? void 0 : t.computeFeatureData(n, e, r);
                    if ("loading" !== o) return o
                }, [n, r, e], {
                    debugName: `useFeatureData(${t.name})`,
                    equalityFn: i(381453).n4
                })
            }
        },
        784331: (e, t, i) => {
            function n() {
                var e;
                let t = i(218744).default.checkGate({
                        gateName: "sidebar_library"
                    }),
                    n = !!(null == (e = (0, i(328765).S)()) ? void 0 : e.canRead());
                return t && n
            }

            function r() {
                let e = (0, i(83208).X)("sidebar_library"),
                    t = (0, i(682985).K8)(() => {
                        var e;
                        return !!(null == (e = (0, i(328765).S)()) ? void 0 : e.canRead())
                    }, []);
                return e && t
            }

            function o({
                environment: e,
                spaceId: t
            }) {
                let r = n(),
                    a = i(218744).default.checkGate({
                        gateName: "library_custom_agents_tab"
                    }),
                    s = (0, i(56788).$)(),
                    {
                        hasExistingAgents: l
                    } = (0, i(213538)._)({
                        environment: e,
                        spaceId: t
                    });
                return r && a && (s || l)
            }

            function a() {
                let e = r(),
                    t = (0, i(83208).X)("library_custom_agents_tab"),
                    n = (0, i(596663).k)(),
                    {
                        hasExistingAgents: o
                    } = (0, i(213538).H)();
                return e && t && (n || o)
            }

            function s() {
                return i(218744).default.checkGate({
                    gateName: "library_cross_workspace_shared_tab"
                }) && n()
            }

            function l() {
                let e = r();
                return (0, i(83208).X)("library_cross_workspace_shared_tab") && e
            }

            function u() {
                return i(218744).default.checkGate({
                    gateName: "sidebar_use_endpoint"
                })
            }

            function d() {
                return (0, i(83208).X)("sidebar_use_endpoint")
            }

            function c() {
                let e = (0, i(828560).hw)();
                return i(218744).default.checkGate({
                    gateName: "slippery_flyout"
                }) && e
            }

            function p() {
                let e = (0, i(853284).U)();
                return (0, i(83208).X)("slippery_flyout") && e
            }
            i.d(t, {
                J: () => u,
                Kv: () => l,
                Qr: () => o,
                cd: () => r,
                gO: () => d,
                i0: () => c,
                nr: () => a,
                qX: () => p,
                un: () => s,
                xc: () => n
            })
        },
        799853: (e, t, i) => {
            i.d(t, {
                C: () => n
            }), i(898992), i(737550);

            function n({
                userRootStore: e
            }) {
                return e.getSpaceViewStores().some(t => i(229903).V.createChildStore(t, i(729052).i1({
                    userId: e.id,
                    spaceId: t.getSpaceId()
                })).isMember())
            }
        },
        800574: (e, t, i) => {
            i.d(t, {
                r: () => n
            });

            function n() {
                return !i(986939).A.isMobile
            }
        },
        801062: (e, t, i) => {
            i.d(t, {
                h: () => o
            }), i(581454);
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        permissionGroupsAndMemberCounts: new Map
                    }
                }
                getAllGroups() {
                    return Array.from(this.state.permissionGroupsAndMemberCounts.values()).map(e => e.group)
                }
                getAllGroupData() {
                    return Array.from(this.state.permissionGroupsAndMemberCounts.values())
                }
                hasGroup(e) {
                    return this.state.permissionGroupsAndMemberCounts.has(e)
                }
                getGroupData(e) {
                    return this.state.permissionGroupsAndMemberCounts.get(e)
                }
                addGroup(e, t) {
                    let i = new Map(this.state.permissionGroupsAndMemberCounts);
                    i.set(e, t), this.setState({ ...this.state,
                        permissionGroupsAndMemberCounts: i
                    })
                }
                updateGroup(e, t) {
                    let i = new Map(this.state.permissionGroupsAndMemberCounts),
                        n = this.getGroupData(e);
                    n && (i.set(e, { ...n,
                        ...t
                    }), this.setState({ ...this.state,
                        permissionGroupsAndMemberCounts: i
                    }))
                }
            }
            let o = new r
        },
        804011: (e, t, i) => {
            i.d(t, {
                r: () => n
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(823215), i(354520), i(581454);
            let n = i(381453).Bj(e => new(i(345426)).ComputedStore(() => (function(e) {
                    var t, n, o;
                    let a, s, l = i(728372).AppStoreSidebarSpaceStore.state,
                        u = i(728372).AppStoreSidebarSpaceViewStore.state,
                        d = i(728372).AppStoreCurrentUserRootStore.state,
                        c = i(728372).AppStoreCurrentUserSettingsStore.state;
                    if (!u || !d || !l || !c) return;
                    (0, i(635339).yd)("sidebar_stores_loaded");
                    let p = l.id,
                        m = (0, i(800574).r)(),
                        f = u.getBookmarkedPages(),
                        {
                            teams: _,
                            hasUnjoinedActiveTeams: g
                        } = (0, i(522820).s)(u),
                        {
                            allPagesStores: v,
                            visiblePagesStores: h
                        } = (0, i(500957).a)({
                            environment: e,
                            spaceViewStore: u,
                            userSettingsStore: c,
                            type: "private"
                        }).state,
                        y = (0, i(500957).a)({
                            environment: e,
                            spaceViewStore: u,
                            userSettingsStore: c,
                            type: "shared"
                        }).state,
                        b = y.allPagesStores,
                        S = y.visiblePagesStores,
                        k = (0, i(112127).f)({
                            environment: e,
                            spaceStore: l
                        }),
                        x = (0, i(483885).r)({
                            environment: e,
                            spaceStore: l
                        }),
                        w = !(0, i(471078).O)({
                            environment: e,
                            spaceId: p
                        }) && 0 === k.length && "personal" === l.getPlanType(),
                        P = (0, i(916804).I)(l),
                        I = (0, i(494144).o)(u),
                        C = b.length > 0,
                        T = !C && w && (a = null == (t = i(476003).H.getState()) ? void 0 : t.dismissedExpiresAt, s = null == (n = i(476003).H.getState()) ? void 0 : n.dismissed, !a && !s),
                        M = !I && (0, i(484712).U)(u),
                        A = c.hasUserPinnedToOutliner({
                            spaceId: p,
                            type: "shared"
                        }),
                        E = (0, i(822209).R)({
                            environment: e,
                            spaceViewStore: u,
                            type: "teamspaces",
                            userSettingsStore: c
                        }),
                        D = (0, i(171231).lu)({
                            items: _,
                            limit: E.truncationLimit
                        }),
                        B = D.length > 0,
                        O = D.length < _.length,
                        U = m ? b.length > S.length : b.length > i(425567).R || A,
                        R = v.length > h.length,
                        N = !P || M,
                        L = f.length > 0 && !I,
                        j = !L && !x && !C && !B,
                        F = f.length + b.length + k.length + v.length >= 8,
                        $ = (0, i(56788).$)({
                            skipPremiumFeatureCheck: !0
                        }),
                        q = (0, i(820935).I)(),
                        z = (0, i(784331).xc)(),
                        V = (0, i(933132).P)(u),
                        G = (0, i(187106).l)(u),
                        W = r(l, u).state,
                        K = (0, i(822209).R)({
                            environment: e,
                            spaceViewStore: u,
                            type: "agents",
                            userSettingsStore: c
                        }),
                        H = (o = u) ? o.getNotionAppsOrder() : [],
                        X = (0, i(171231).lu)({
                            items: W,
                            limit: K.truncationLimit
                        }),
                        Y = [L, x, C, N, z, V, G, B].filter(Boolean).length,
                        J = e.currentUser.id,
                        Q = void 0 !== J && i(295742).A.hasLoaded({
                            userId: J,
                            spaceId: p
                        });
                    return {
                        isCached: !1,
                        spaceId: p,
                        spaceName: (0, i(742197).G)(e, l),
                        spaceViewId: u.id,
                        userId: J,
                        isMember: !P,
                        isPersonalSpace: w,
                        showBookmarksSection: L,
                        showWorkspaceSection: x,
                        showSharedSection: C,
                        showPrivateSection: N,
                        showOnlyPrivateSection: j,
                        showSharedOverflowButton: U,
                        showPrivateOverflowButton: R,
                        shownSidebarSectionCount: Y,
                        showTeamsOverflowButton: !P && (g || O),
                        stickTemplateItemsToBottom: F,
                        bookmarkedPagesStores: f,
                        workspacePagesStores: k,
                        allSharedPagesStores: b,
                        allPrivatePagesStores: v,
                        visibleSharedPagesStores: S,
                        visiblePrivatePagesStores: h,
                        showTeamSection: B,
                        userJoinedTeamsStores: _,
                        visibleTeamsStores: D,
                        visibleWorkflowStores: X,
                        allSidebarWorkflowStores: W,
                        isTeamContentReady: D.every(e => e.isReady() && e.areTeamPageStoresReady()),
                        showEmptySharedSection: T,
                        showCrossWorkspaceGuestPagesPrototype: I,
                        showChatsSection: $,
                        showRecentsSection: z,
                        showMeetingsTodaySection: G,
                        showMeetingsSection: V,
                        showNotionAppsSection: q && !u.getNotionAppsHidden() && !P,
                        sidebarOrder: (0, i(690099).V)({
                            environment: e,
                            spaceStore: l,
                            spaceViewStore: u,
                            currentUserId: J
                        }),
                        userSharedPagesForSpaceHasLoaded: Q,
                        visibleNotionApps: H
                    }
                })(e), {
                    equalityFn: i(381453).n4,
                    debugName: "sidebarStateStore"
                })),
                r = i(381453).Bj((e, t) => new(i(345426)).ComputedStore(() => {
                    var n, r, o;
                    return n = e, r = t, n && r ? Array.from(new Set((null == (o = r.getSettings()) ? void 0 : o.sidebar_workflow_ids) ? ? [])).map(e => i(360851).N.createChildStore(n, {
                        table: i(832375).C0E,
                        id: e,
                        spaceId: n.id
                    })) : []
                }, {
                    debugName: "workflowsStore",
                    equalityFn: i(795676).k
                }))
        },
        811656: (e, t, i) => {
            i.d(t, {
                N9: () => c,
                Pd: () => u,
                RN: () => m,
                Vi: () => p,
                _d: () => o,
                e2: () => l,
                iI: () => r,
                jx: () => a,
                t: () => n(),
                wy: () => d
            }), i(898992), i(354520);
            var n = () => i(969475);
            let r = ["plus", "business", "enterprise", "ai", "ai_credit_pack", "sites_custom_hostnames"];

            function o(e, t, i) {
                return l(a(e, t, i))
            }

            function a(e, t, n) {
                let r, {
                        name: o,
                        scope: a,
                        actor: l
                    } = n,
                    u = { ...n,
                        billingData: a.billingData,
                        spaceId: a.id,
                        supportedProducts: n.supportedProducts
                    },
                    d = a.premiumFeatureOverrides[o],
                    c = void 0 !== d ? function(e, t) {
                        var n;
                        if ("object" != typeof e || !("value" in e)) return {
                            active: !0,
                            value: e
                        };
                        let r = ((null == (n = t.clock) ? void 0 : n.now) ? ? i(906745).DateTime.now()).toMillis(),
                            {
                                value: o,
                                startMs: a,
                                endMs: s
                            } = e;
                        return void 0 !== a && r < a || void 0 !== s && r >= s ? {
                            active: !1
                        } : {
                            active: !0,
                            value: o
                        }
                    }(d, a.billingData) : {
                        active: !1
                    },
                    p = c.active ? function(e, t, n) {
                        let r = {
                                type: "none"
                            },
                            o = e[t.name].type;
                        if ("check" === o) {
                            let e = {
                                type: "none"
                            };
                            return !0 === n ? {
                                type: "available",
                                limit: e
                            } : {
                                type: "unavailable",
                                upsell: r,
                                limit: e
                            }
                        }
                        if ("per_use" === o) {
                            let e = t.amount,
                                i = {
                                    type: "per_use",
                                    amount: n
                                };
                            return "unlimited" === n || n > e ? {
                                type: "available",
                                limit: i
                            } : {
                                type: "unavailable",
                                upsell: r,
                                limit: i
                            }
                        }
                        if ("cumulative" === o) {
                            let e = t.amount,
                                i = t.data.current,
                                o = {
                                    type: "cumulative",
                                    current: i,
                                    total: n
                                };
                            return "unlimited" === n || n >= i + e ? {
                                type: "available",
                                limit: o
                            } : {
                                type: "unavailable",
                                upsell: r,
                                limit: o
                            }
                        }(0, i(722371).HB)(o)
                    }(e, n, c.value) : t[o](u);
                if ("available" === p.type)
                    if (p.expiry && p.expiry.endDate < i(906745).DateTime.now()) r = {
                        type: "unavailable",
                        limit: p.limit,
                        upsell: s(a.billingData, p.expiry.upsell, n.supportedProducts)
                    }, n.environment.logFunction({
                        level: "info",
                        from: "premiumFeatureFramework",
                        type: "expiredFeature",
                        data: {
                            featureName: o,
                            featureScope: f(a),
                            featureActor: l,
                            rawFeatureAvailability: p
                        }
                    });
                    else {
                        let e = p.upsell ? s(a.billingData, p.upsell, n.supportedProducts) : void 0;
                        r = { ...p,
                            upsell: e
                        }
                    }
                else {
                    let e = s(a.billingData, p.upsell, n.supportedProducts);
                    r = { ...p,
                        upsell: e
                    }
                }
                let m = (0, i(192159).N8)(a.billingData);
                return .001 > Math.random() && n.environment.logFunction({
                    level: "info",
                    from: "premiumFeatureFramework",
                    type: "getPremiumFeatureAvailability",
                    data: {
                        featureName: o,
                        featureScope: f(a),
                        featureActor: l,
                        rawFeatureAvailability: p,
                        isSalesAssisted: m,
                        featureBillingData: (0, i(337174).hj)(a.billingData),
                        overrideStatus: void 0 !== d ? {
                            hasOverride: !0,
                            active: c.active
                        } : {
                            hasOverride: !1
                        }
                    }
                }), n.environment.trackFunction({
                    feature_name: o,
                    is_feature_available: "available" === r.type
                }), r
            }

            function s(e, t, n) {
                if ("product" !== t.type || n.includes(t.product) || !(0, i(645040).OV)(t.product)) return t;
                let r = t.product,
                    o = n.filter(e => (0, i(645040).OV)(e)).filter(e => "student" !== e && "free" !== e).filter(e => i(262166).o3[e] >= i(262166).o3[r]),
                    a = (0, i(381453).wq)(o, e => i(262166).o3[e]);
                return a ? { ...t,
                    product: a
                } : {
                    type: "none"
                }
            }

            function l(e) {
                return (null == e ? void 0 : e.type) === "available"
            }

            function u(e) {
                return (null == e ? void 0 : e.type) === "unavailable"
            }

            function d(e) {
                return void 0 !== e && "product" === e.type
            }

            function c(e, {
                available: t,
                unavailable: n
            }) {
                return l(e) ? t() : u(e) ? n(e) : (0, i(722371).HB)(e)
            }

            function p(e, t) {
                if (void 0 !== e) return c(e, {
                    available: () => void 0,
                    unavailable: t
                })
            }

            function m(e) {
                return n().object({
                    required: e,
                    optional: {}
                })
            }

            function f(e) {
                return { ...e,
                    billingData: (0, i(337174).hj)(e.billingData)
                }
            }
        },
        817525: (e, t, i) => {
            i.d(t, {
                A: () => a,
                z: () => r
            });
            var n = () => i(546605);
            let r = 3e4;
            class o extends n().Store {
                getInitialState() {
                    return {}
                }
            }
            let a = new o
        },
        817599: (e, t, i) => {
            function n() {
                return !1
            }

            function r(e) {
                return "quickSearch" === e.RouterStore.state.route.name
            }
            i.d(t, {
                Y: () => n,
                q: () => r
            })
        },
        818963: (e, t, i) => {
            function n() {
                return i(92513).Dt()
            }
            i.d(t, {
                $F: () => r,
                Qr: () => n,
                W7: () => l,
                dx: () => a,
                gC: () => o,
                pg: () => s
            });
            let r = (0, i(358519).rv)(e => i(969475).uuid().validator(e), i(969475).uuid().toString);

            function o() {
                return i(92513).Dt()
            }
            let a = (0, i(358519).rv)(e => i(969475).uuid().validator(e), i(969475).uuid().toString);

            function s(e) {
                return e
            }

            function l(e) {
                return i(92513).Dt()
            }
        },
        820935: (e, t, i) => {
            i.d(t, {
                I: () => n
            });

            function n() {
                return !i(986939).A.isMobile && i(218744).default.checkGate({
                    gateName: "adoption_sidebar_footer_revamp"
                })
            }
        },
        821603: (e, t, i) => {
            var n, r;
            i.d(t, {
                $8: () => D,
                Iy: () => _,
                K_: () => d,
                Kl: () => O,
                N2: () => c,
                Ni: () => C,
                Nz: () => M,
                Vz: () => u,
                _x: () => B,
                fg: () => l,
                gG: () => I,
                jp: () => T,
                m2: () => m,
                vm: () => p,
                xi: () => f,
                yq: () => A
            }), i(944114);
            let o = i(969475).object({
                    required: {
                        type: i(969475).literal("date"),
                        start_date: i(969475).string()
                    },
                    optional: {}
                }),
                a = i(969475).union([i(969475).object({
                    required: {
                        starting: o,
                        ending: i(969475).isUndefined()
                    },
                    optional: {}
                }), i(969475).object({
                    required: {
                        starting: i(969475).isUndefined(),
                        ending: o
                    },
                    optional: {}
                }), i(969475).object({
                    required: {
                        starting: o,
                        ending: o
                    },
                    optional: {}
                }), i(969475).object({
                    required: {
                        starting: i(969475).isUndefined(),
                        ending: i(969475).isUndefined()
                    },
                    optional: {}
                })]),
                s = i(969475).union([i(969475).array(i(969475).string()), i(969475).object({
                    required: {
                        teamIds: i(969475).array(i(969475).string()),
                        includeSpaceRecords: i(969475).boolean()
                    },
                    optional: {}
                })]);

            function l(e) {
                if (e) {
                    if (Array.isArray(e)) return e;
                    if (e.teamIds) return e.teamIds
                }
            }
            let u = ((n = {}).CollectionsInSpace = "CollectionsInSpace", n.BlocksInSpace = "BlocksInSpace", n.BlocksInAncestor = "BlocksInAncestor", n.BlocksInParent = "BlocksInParent", n.BlocksInCollection = "BlocksInCollection", n),
                d = i(969475).object({
                    required: {
                        ancestors: i(969475).array(i(969475).string()),
                        createdBy: i(969475).array(i(969475).string()),
                        editedBy: i(969475).array(i(969475).string()),
                        lastEditedTime: a,
                        createdTime: a
                    },
                    optional: {
                        requireEditPermissions: i(969475).boolean(),
                        isDeletedOnly: i(969475).boolean(),
                        excludeTemplates: i(969475).boolean(),
                        verificationOwners: i(969475).array(i(969475).string()),
                        isAdminModeDeletedPageSearch: i(969475).boolean(),
                        blockTypes: i(969475).minLength(i(969475).array(i(969475).literals(...Object.values(i(955630).xd), "agent")), 1),
                        inTeams: s,
                        navigableBlockContentOnly: i(969475).boolean(),
                        includePublicPagesWithoutExplicitAccess: i(969475).boolean(),
                        audience: i(969475).array(i(969475).literals("private", "shared_internally", "shared_externally", "shared_to_web")),
                        dev_excludedPages: i(969475).array(i(969475).string()),
                        dev_excludedTeams: i(969475).array(i(969475).string()),
                        parentId: i(969475).string(),
                        databaseType: i(969475).array(i(969475).literals(...i(103249).kw)),
                        adminContentSearchDeletionStatus: i(969475).nonEmpty(i(969475).array(i(969475).literals("in_trash", "deleted_from_trash", "alive"))),
                        adminContentSearchContentStatus: i(969475).nonEmpty(i(969475).array(i(969475).literals("verified", "archived", "expired", "none"))),
                        isOfflineOnly: i(969475).boolean(),
                        legalHoldIds: i(969475).array(i(969475).string()),
                        excludeSurrogateCollections: i(969475).boolean(),
                        excludedParentCollectionIds: i(969475).array(i(969475).string()),
                        contentStatusFilter: i(969475).literals("all_with_archived", "all_without_archived", "verified_only", "archived_only")
                    }
                });

            function c(e) {
                return {
                    isDeletedOnly: !1,
                    excludeTemplates: !1,
                    navigableBlockContentOnly: !1,
                    requireEditPermissions: !1,
                    includePublicPagesWithoutExplicitAccess: !1,
                    ancestors: [],
                    parentId: void 0,
                    createdBy: [],
                    editedBy: [],
                    lastEditedTime: {
                        starting: void 0,
                        ending: void 0
                    },
                    createdTime: {
                        starting: void 0,
                        ending: void 0
                    },
                    inTeams: [],
                    excludeSurrogateCollections: !1,
                    excludedParentCollectionIds: [],
                    ...e
                }
            }

            function p(e, t) {
                return { ...e,
                    ...t,
                    createdTime: { ...e.createdTime,
                        ...t.createdTime
                    },
                    lastEditedTime: { ...e.lastEditedTime,
                        ...t.lastEditedTime
                    }
                }
            }
            let m = {
                    searchModal: "search_modal",
                    searchModalQueueTask: "search_modal_queue_task"
                },
                f = {
                    searchModal: "search_modal",
                    mentionMenu: "mention_menu"
                },
                _ = ["quick_find", "quick_find_public", "quick_find_input_change", "quick_find_scroll", "quick_find_filters", "quick_find_ancestor_filter", "quick_find_navigational_mode", "mini_quick_find", "mini_quick_find_prefetch", "admin_tool_search_as_user", "admin_tool_search_eval", "admin_tool_search_eval_mini_quick_find", "cli_run_default_search"],
                g = ["question_answer_limited_content_search", "assistant_mention_menu"],
                v = ["assistant", "cron", "queryCollection", "ai_autofill", "dark_read", "slack", "limitedQnADebug", "google-drive", "microsoft-teams", "assistant_cache_warm_up", "find_related_content", "search_modal_dark_read", "qna_dark_read", "unified_find", "research_mode", "icon_selection", "workflows", "agent", "db_agent", "eval", "mcp_api", "ai_block", "helpdoc", "cli_vector_debug", "bug_triage_search", "search_embedding", "search_vector_db", "search_vector_db_dual_read", "personalization_api"],
                h = ["cron_attachment_search_input_change", "cron_attachment_parent_search_input_change", "cron_time_collection_views_query"],
                y = ["mail_get_pages"],
                b = ["legacy_searchPagesWithParent", "relation_setup_menu"],
                S = i(969475).union([..._.map(i(969475).literal), ...h.map(i(969475).literal), ...y.map(i(969475).literal), ...g.map(i(969475).literal), ...v.map(i(969475).literal), ...b.map(i(969475).literal), i(969475).literal("ancestor_filter_page_search"), i(969475).literal("trash"), i(969475).literal("verified_pages_settings"), i(969475).literal("link_to_page_block"), i(969475).literal("link_to_collection_block"), i(969475).literal("mention_menu"), i(969475).literal("move_to_menu"), i(969475).literal("public_home_page_menu"), i(969475).literal("relation_menu"), i(969475).literal("link_existing_menu"), i(969475).literal("layout_builder_page_selector"), i(969475).literal("web_clipper"), i(969475).literal("oauth"), i(969475).literal("internal_integrations_page_picker"), i(969475).literal("collection_group_value"), i(969475).literal("collection_settings_source"), i(969475).literal("collection_settings_select_relation_source"), i(969475).literal("admin_search_permanently_deleted_pages"), i(969475).literal("bot_iterate_blocks_in_space"), i(969475).literal("api_unknown"), i(969475).literal("simple_formula_value_page_search"), i(969475).literal("automation_page_picker"), i(969475).literal("automation_collection_picker"), i(969475).literal("formula_editor_page_picker"), i(969475).literal("admin_content_search"), i(969475).literal("ediscovery_search_api"), i(969475).literal("admin_content_search_export"), i(969475).literal("export_content_analytics"), i(969475).literal("people_profile_their_pages"), i(969475).literal("send_to_notion_database_options"), i(969475).literal("send_to_notion_project_options"), i(969475).literal("search_content_analytics"), i(969475).literal("search_unique_id"), i(969475).literal("collection_page_tree_query"), i(969475).literal("assistant_scoped_search_menu"), i(969475).literal("assistant_search_databases"), i(969475).literal("admin_tool_search_as_user"), i(969475).literal("admin_tool_search_eval"), i(969475).literal("debugging"), i(969475).literal("report_bad_search"), i(969475).literal("benchmark_tests"), i(969475).literal("audit_log"), i(969475).literal("ui_doc"), i(969475).literal("unified_find_deep_dive"), i(969475).literal("legal_hold_pages_search"), i(969475).literal("ai_block_v2_page_context_search"), i(969475).literal("ai_chat_search_scope_menu"), i(969475).literal("analyze_query_cli"), i(969475).literal("public_api_mcp_run_tool"), i(969475).literal("search_date_mention"), i(969475).literal("ai_chat_query_input"), i(969475).literal("ai_meeting_notes_location_picker"), i(969475).literal("page_view_selector"), i(969475).literal("personality_page_selector"), i(969475).literal("sites_custom_header_builder_search"), i(969475).literal("client_console_debugging_search"), i(969475).literal("cli_run_default_search"), i(969475).literal("new_skill_search"), i(969475).literal("agent_search"), i(969475).literal("breadcrumb_browser")]);
            [...h, ...y, ...g, ...v, ...b];
            let k = i(969475).union([i(969475).literal("bulk_index_records")]),
                x = i(969475).union([i(969475).literal("permanently_delete_space")]);
            i(969475).union([S, k, x]);
            let w = i(969475).object({
                    required: {
                        field: i(969475).literals("relevance")
                    },
                    optional: {}
                }),
                P = i(969475).object({
                    required: {
                        field: i(969475).literals("lastEdited", "created", "scroll", "id", "pageViewsLast7Days", "pageViewsLast28Days", "pageViewsLast90Days", "pageViewsLast365Days", "pageViewsAllTime", "uniquePageViewsLast7Days", "uniquePageViewsLast28Days", "uniquePageViewsLast90Days", "uniquePageViewsLast365Days", "uniquePageViewsAllTime"),
                        direction: i(969475).literals("asc", "desc")
                    },
                    optional: {
                        missing: i(969475).union([i(969475).literal("_first"), i(969475).literal("_last"), i(969475).number(), i(969475).boolean(), i(969475).string()]),
                        searchAfter: i(969475).undefinable(i(969475).union([i(969475).number(), i(969475).string()]))
                    }
                }),
                I = i(969475).union([w, P]),
                C = ((r = {}).Local = "local", r.ElasticSearch = "es", r.Postgres = "pg", r.VectorDBBlock = "vector_block", r.VectorDBCollection = "vector_collection", r.VectorDBBlockOpenAI = "vector_block_openai", r.VectorDBCollectionOpenAI = "vector_collection_openai", r.VectorDBBlockBGE = "vector_block_bge", r.VectorDBCollectionBGE = "vector_collection_bge", r.VectorDBBlockBGE1024 = "vector_block_bge_1024", r.VectorDBCollectionBGE1024 = "vector_collection_bge_1024", r.VectorDBBlockBGE4096 = "vector_block_bge_4096", r.VectorDBCollectionBGE4096 = "vector_collection_bge_4096", r.VectorDBBlockE5 = "vector_block_e5", r.VectorDBCollectionE5 = "vector_collection_e5", r.ElasticsearchRandom = "es_random", r.ElasticsearchUniqueID = "es_uniqueId", r.ElasticsearchForcedRecentRecall = "es_forced_recent_recall", r.NotionUnknown = "notion_unknown", r.UniversalUnknown = "universal_unknown", r),
                T = ["spacePage", "recentVisit", "bookmarkedPage", "sharedPage", "frecencyStore", "teamPage", "defaultRecordCache", "unknown", "similarUser1dRecentPages", "topPages7dPageView", "editedPages1d", "similarUsersEditedPages1d", "meetingAttendee", "offlinePage", "inboxPage", "customAgent"],
                M = (0, i(109939).YK)({
                    popularThisWeek: {
                        defaultMessage: "Popular this week",
                        id: "search.result.popularThisWeek.badge.text"
                    },
                    mostViewed: {
                        defaultMessage: "Most viewed",
                        id: "search.result.mostViewed.badge.text"
                    },
                    verified: {
                        defaultMessage: "Verified",
                        id: "search.result.verified.badge.text"
                    },
                    verifiedExpired: {
                        defaultMessage: "Verification Expired",
                        id: "search.result.verifiedExpired.badge.text"
                    },
                    archived: {
                        defaultMessage: "Archived",
                        id: "search.result.archived.badge.text"
                    },
                    template: {
                        defaultMessage: "Template",
                        id: "search.result.template.badge.text"
                    },
                    agent: {
                        defaultMessage: "Agent",
                        id: "search.result.agent.badge.text"
                    },
                    aiSkill: {
                        defaultMessage: "AI Skill",
                        id: "search.result.aiSkill.badge.text"
                    }
                }),
                A = {
                    RequestFailed: {
                        type: "RequestFailed",
                        message: "Something went wrong."
                    },
                    NoResults: {
                        type: "NoResultsFound",
                        message: "No results found"
                    },
                    Offline: {
                        type: "Offline",
                        message: "Go online for more results."
                    }
                },
                E = "gzkNfoUU",
                D = `<${E}>`,
                B = `</${E}>`;

            function O(e) {
                return e.replaceAll(D, "").replaceAll(B, "").trim()
            }
        },
        822209: (e, t, i) => {
            function n(e) {
                let {
                    environment: t,
                    spaceViewStore: n,
                    type: r
                } = e, o = n.getSpaceStore(), a = null == o ? void 0 : o.id, s = a ? (0, i(616579).j)({
                    environment: t,
                    spaceId: a
                }) ? ? 0 : 0, l = (0, i(190566).Yw)(r) ? i(678703).Lw.fromSpaceViewStore(null == o ? void 0 : o.getSpaceIdCreator(), n, r) : void 0, u = (0, i(171231).rP)({
                    type: r,
                    spaceView: n.getModel(),
                    sidebarSection: null == l ? void 0 : l.getModel(),
                    isMultiMemberSpace: s > 1
                });
                return "myMeetings" === r ? { ...u,
                    truncationLimit: 100
                } : u
            }

            function r(e) {
                let {
                    environment: t,
                    spaceViewStore: i,
                    userSettingsStore: r
                } = e;
                return "lastEdited" === n({
                    environment: t,
                    spaceViewStore: i,
                    type: "private",
                    userSettingsStore: r
                }).sortOption
            }
            i.d(t, {
                R: () => n,
                X: () => r
            })
        },
        827482: (e, t, i) => {
            i.d(t, {
                A: () => a,
                s: () => r
            });
            var n = () => i(546605);
            let r = {
                disabled: {
                    hasPublicPermission: !1
                },
                view: {
                    hasPublicPermission: !0,
                    permission: "view"
                },
                comment: {
                    hasPublicPermission: !0,
                    permission: "comment"
                },
                edit: {
                    hasPublicPermission: !0,
                    permission: "edit"
                }
            };
            Object.freeze(r), Object.freeze(r.disabled), Object.freeze(r.view), Object.freeze(r.comment), Object.freeze(r.edit);
            class o extends n().Store {
                getInitialState() {
                    return {
                        editing: !1,
                        commenting: !1
                    }
                }
                getMode(e, t, i) {
                    return r[this.getModeType(e, t, i) || "disabled"]
                }
                getModeType(e, t, n) {
                    var r, o;
                    if (!t.isDefaultRecordCache() || !(0, i(142484).q)(e, t, n)) return;
                    let a = t.getRole(),
                        s = !a || (0, i(642157).p2)(a),
                        l = !a || (0, i(642157).ok)(a),
                        u = e.currentUser.isLoggedIn();
                    return s && u && (this.state.editing || null != (r = i(686494).A.state.publicPageData) && r.isPublicShareLink || null != (o = i(686494).A.state.publicPageData) && o.isEditableOrCommentableSite) ? "edit" : l && u ? "comment" : "view"
                }
            }
            let a = new o
        },
        828560: (e, t, i) => {
            function n(e) {
                return `lastKnownSlipperySlopeEnabled:${e}`
            }

            function r() {
                return !i(986939).A.isMobile && i(218744).default.checkGate({
                    gateName: "slippery_slope_experiment_override"
                })
            }

            function o(e) {
                let {
                    spaceStore: t
                } = e;
                return !i(986939).A.isMobile && (t && t.isDefined() ? !(0, i(916804).I)(t) : "not-ready")
            }

            function a() {
                let e = (0, i(328765).S)();
                if (r()) return "default_off";
                let t = o({
                    spaceStore: e
                });
                if (!1 === t) return "control";
                if ("not-ready" === t) return;
                let n = i(728372).AppStoreSidebarSpaceViewStore.state,
                    a = (0, i(606995).Z)({
                        settings: null == n ? void 0 : n.getSettings()
                    });
                return void 0 !== a ? "default_on_no_toggle" === a && i(218744).default.checkGate({
                    gateName: "slippery_slope_disable_new_workspace_experiment"
                }) ? "default_off" : a : function(e) {
                    var t;
                    let {
                        spaceStore: n,
                        spaceViewStore: r
                    } = e;
                    if ((null == r || null == (t = r.getSettings()) ? void 0 : t.slippery_slope_is_enabled) !== void 0 || !n || !n.isDefined()) return "default_off";
                    let o = n.getPublicSpaceData();
                    return !o || function(e) {
                        let t = null == e ? void 0 : e.membershipType;
                        switch (t) {
                            case void 0:
                            case "none":
                            case "page_guest":
                                return !1;
                            case "restricted_member":
                            case "member":
                            case "membership_admin":
                            case "owner":
                                return (null == e ? void 0 : e.is_sales_assisted) === !0;
                            default:
                                return (0, i(722371).HB)(t)
                        }
                    }(o) ? "default_off" : "on" === i(218744).default.getEligibleGroup({
                        experimentId: i(606995).eN,
                        defaultGroup: "control"
                    }) ? "default_on_with_toggle" : "default_off"
                }({
                    spaceStore: e,
                    spaceViewStore: n
                })
            }

            function s(e) {
                return "default_off" === e || "default_on_with_toggle" === e
            }

            function l(e, t) {
                if (void 0 === e) return "not-ready";
                let n = o({
                    spaceStore: (0, i(328765).S)()
                });
                if ("not-ready" === n) return "not-ready";
                if (!1 === n && !r()) return !1;
                let s = t ? ? a();
                return void 0 === s ? "not-ready" : (0, i(606995).wp)({
                    settings: e.getSettings(),
                    experimentGroup: s
                })
            }

            function u(e) {
                let {
                    spaceId: t,
                    enabled: r
                } = e;
                if (void 0 === t) return;
                let o = n(t);
                (0, i(49509).YN)(o) !== r && (0, i(49509).yE)(o, r)
            }

            function d(e) {
                if (void 0 === e) return;
                let t = n(e),
                    r = (0, i(49509).YN)(t);
                return "boolean" == typeof r ? r : void 0
            }

            function c() {
                return !0 === l(i(728372).AppStoreSidebarSpaceViewStore.state, a())
            }
            i.d(t, {
                RW: () => s,
                XM: () => l,
                hw: () => c,
                mO: () => a,
                si: () => d,
                yZ: () => u
            })
        },
        838448: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => s
            }), i(16280);
            var n = () => i(546605);
            let r = 10 * i(627179).Xb;
            class o extends n().Store {
                nextSessionId;
                getInitialState() {
                    return {
                        activeAiSessionId: void 0,
                        sessions: {},
                        lastSessionInitializedUnixEpochTime: Date.now()
                    }
                }
                clearAllSessions() {
                    this.reset()
                }
                getActiveSessionId() {
                    return this.state.activeAiSessionId
                }
                getNextSessionId() {
                    return this.nextSessionId || (this.nextSessionId = (0, i(818963).gC)()), this.nextSessionId
                }
                getNextSessionIdAndIncrement() {
                    let e = this.getNextSessionId();
                    return this.nextSessionId = (0, i(818963).gC)(), e
                }
                getActiveSession() {
                    let e = this.state.activeAiSessionId;
                    if (e) return this.state.sessions[e]
                }
                getActiveAssistantConfigurationStore() {
                    var e;
                    return null == (e = this.getActiveSession()) ? void 0 : e.assistantConfigurationStore
                }
                getActiveAssistantConfigurationState() {
                    var e;
                    return null == (e = this.getActiveAssistantConfigurationStore()) ? void 0 : e.state
                }
                getSessionContext(e) {
                    return this.state.sessions[e]
                }
                getSessionContextOrThrow(e) {
                    let t = this.getSessionContext(e);
                    if (!t) throw Error("No assistant context for given session");
                    return t
                }
                setActiveSessionId(e) {
                    this.update(t => ({ ...t,
                        activeAiSessionId: e
                    }))
                }
                setNewActiveSession(e) {
                    let {
                        sessionId: t,
                        context: i
                    } = e;
                    this.update(e => ({ ...e,
                        activeAiSessionId: t,
                        sessions: { ...e.sessions,
                            [t]: i
                        },
                        lastSessionInitializedUnixEpochTime: Date.now()
                    }))
                }
                addNewSession(e) {
                    let {
                        sessionId: t,
                        context: i
                    } = e;
                    this.update(e => ({ ...e,
                        sessions: { ...e.sessions,
                            [t]: i
                        }
                    }))
                }
                endCurrentSession() {
                    this.update(e => ({ ...e,
                        activeAiSessionId: void 0
                    }))
                }
                setLastSessionInitializedUnixEpochTime() {
                    this.update(e => ({ ...e,
                        lastSessionInitializedUnixEpochTime: Date.now()
                    }))
                }
                wasActiveSessionLastOpenedOutsideOfHistorySavedWindow() {
                    let e = this.state.lastSessionInitializedUnixEpochTime;
                    return !e || Date.now() - e >= r
                }
            }
            let a = new o,
                s = a;
            (0, i(202146).exposeDebugValue)("AssistantRegistryStore", a), (0, i(202146).exposeDebugValue)("getTranscript", () => {
                var e;
                return JSON.stringify((null == (e = a.getActiveSession()) ? void 0 : e.evaluatorFromStoreState.getTranscript()) ? ? [])
            })
        },
        853284: (e, t, i) => {
            i.d(t, {
                U: () => o
            });
            var n = i(296540);
            let r = new(i(345426)).ComputedStore(() => {
                let e = i(728372).AppStoreSidebarSpaceViewStore.state;
                return (0, i(828560).XM)(e)
            }, {
                debugName: "IsSlipperySlopeResult"
            });

            function o() {
                let e = (0, i(682985).O$)(r),
                    t = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceIdStore);
                return ((0, n.useEffect)(() => {
                    "not-ready" !== e && void 0 !== t && (0, i(828560).yZ)({
                        spaceId: t,
                        enabled: e
                    })
                }, [e, t]), "not-ready" === e) ? !0 === (0, i(828560).si)(t) : e
            }
        },
        861823: (e, t, i) => {
            i.d(t, {
                W: () => n
            });

            function n(e) {
                return "block" === e.table || "space" === e.table || "collection" === e.table || "comment" === e.table || "discussion" === e.table || "team" === e.table || "automation_action" === e.table || "automation" === e.table || "collection_view" === e.table || "layout" === e.table || "channel" === e.table || "assistant_chat_session" === e.table
            }
        },
        862085: (e, t, i) => {
            i.d(t, {
                A$: () => k,
                FC: () => c,
                Jh: () => l,
                K1: () => a,
                M0: () => E,
                MI: () => f,
                Mz: () => g,
                Nr: () => _,
                Qo: () => M,
                Wk: () => x,
                Ws: () => I,
                X2: () => y,
                X6: () => T,
                X9: () => d,
                YN: () => p,
                eO: () => A,
                ex: () => w,
                gN: () => D,
                i0: () => o,
                iP: () => P,
                om: () => v,
                qZ: () => m,
                qe: () => C,
                qw: () => s,
                zQ: () => u,
                zt: () => h
            }), i(16280), i(410838), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577), i(581454), i(737550);
            var n = () => i(993077),
                r = () => i(642157);

            function o(e) {
                if (e.table === i(832375).C0E) {
                    let t = e.getPermissionItems();
                    if (t && t.length > 0) {
                        let n = [{
                            from: {
                                table: i(832375).C0E,
                                workflowId: e.id
                            },
                            permissions: t
                        }];
                        return i(138798).i0(n)
                    }
                    return []
                }
                let t = (0, i(625925).E)(e),
                    n = t.find(e => e.table === i(832375).C0E);
                if (e.table === i(832375).evP && n) {
                    let e = n.getPermissionItems();
                    if (e && e.length > 0) {
                        let r = i(138798).ch(t);
                        return r.push({
                            from: {
                                table: i(832375).C0E,
                                workflowId: n.pointer.id
                            },
                            permissions: e
                        }), i(138798).i0(r)
                    }
                }
                let r = i(138798).ch(t);
                return i(138798).i0(r)
            }

            function a(e) {
                return o(e).map(({
                    permissionItem: e
                }) => e).some(e => r().W8(e) && r().Tt(e.role) && (void 0 === e.allow_duplicate || !0 === e.allow_duplicate))
            }

            function s(e) {
                return o(e).map(({
                    permissionItem: e
                }) => e).some(e => r().W8(e))
            }

            function l(e) {
                return o(e).map(({
                    permissionItem: e
                }) => e).some(e => r().Lg(e))
            }
            async function u(e) {
                let t = i(728372).AppStoreCurrentUserRootStore.state;
                if (!t || !(0, i(4962).uj)(e)) return !1;
                let n = i(970831).B.createChildStore(t, {
                    table: i(832375).evP,
                    id: e
                });
                try {
                    return await (0, i(612483).v8)(async () => {
                        if (await n.load(), !n.isDefined()) throw i(773352).log({
                            level: "warning",
                            from: "isPagePublicById",
                            type: "template_store_not_defined",
                            data: {
                                miscDataToConvertToString: {
                                    pageId: e,
                                    storeId: n.id,
                                    storeTable: n.table,
                                    isReady: n.isReady(),
                                    isDefined: n.isDefined(),
                                    hasCurrentUserRootStore: !!t
                                }
                            }
                        }), Error("Template store failed to load data");
                        return s(n)
                    })
                } catch (t) {
                    return i(773352).log({
                        level: "warning",
                        from: "isPagePublicById",
                        type: "template_load_failed_all_retries",
                        data: {
                            miscDataToConvertToString: {
                                pageId: e,
                                error: t instanceof Error ? {
                                    message: t.message,
                                    stack: t.stack
                                } : t
                            }
                        }
                    }), !1
                }
            }

            function d(e, t) {
                let i = o(t).filter(e => r().hI(e.permissionItem));
                if (1 === i.length) {
                    let t = i[0].permissionItem;
                    return "user_permission" === t.type && r().Km(t.role) && t.user_id === e.currentUser.id
                }
                return !1
            }

            function c(e) {
                let {
                    environment: t,
                    newGuestIds: r
                } = e, o = (0, i(328765).S)();
                if (!o) return !1;
                let a = 0;
                for (let e of r) {
                    let t = (0, n().dp)(o, e);
                    t.isReady() && !t.isDefined() && a++
                }
                if (0 === a) return !1;
                let s = (0, i(367890).x)(t, {
                    name: "guests",
                    userId: t.currentUser.id,
                    spaceId: o.id,
                    amount: a
                });
                return (0, i(94418).Pd)(s)
            }

            function p(e) {
                let {
                    store: t,
                    permissionItems: n,
                    environment: o
                } = e;
                return !(t instanceof i(695906).SpaceStore) && c({
                    environment: o,
                    newGuestIds: n.filter(r().B2).filter(e => "none" !== e.role).map(e => e.user_id)
                })
            }

            function m(e) {
                return ({
                    editor: "Full access",
                    read_and_write: "Can edit",
                    comment_only: "Can comment",
                    reader: "Can read",
                    none: "No access"
                })[e]
            }

            function f({
                environment: e,
                blockStore: t
            }) {
                let n = t.getParentStore();
                if (!n) return !1;
                let r = (0, i(861823).W)(n) && i(827482).A.getMode(e, n, t.getSpaceStore());
                return !(0, i(45262).Q)(r) && n.canEdit()
            }

            function _(e, t) {
                let i = e.getPermissionItems(),
                    n = new Set,
                    o = new Set;
                for (let e of i) r().B2(e) ? n.add(e.user_id) : r().P3(e) && "none" !== e.role && !e.access_revoked && o.add(e.bot_id);
                return t.filter(e => "agent" === e.type ? !o.has(e.value.botId) : "existingUser" !== e.type || !n.has(e.value.id))
            }
            async function g(e, t) {
                let r = t.filter(i(888173).ju).map(t => (0, n().dp)(e, t.value.id));
                await (0, i(975162).lX)(r, 10, e => e.load());
                let o = new Set(i(381453).oE(r.filter(e => e.isMember()).map(e => e.getUserId())));
                return t.filter(e => "existingUser" !== e.type || !o.has(e.value.id))
            }

            function v(e) {
                let t = (0, i(330870).a)();
                if (!t || !e) return;
                let n = h({
                    userId: e,
                    store: t
                }).role;
                if (!(!n || i(138798).II(n))) return n
            }

            function h({
                userId: e,
                store: t
            }) {
                return k({
                    userId: e,
                    store: t
                })[0]
            }

            function y({
                botId: e,
                store: t
            }) {
                return x({
                    botId: e,
                    store: t
                })[0]
            }

            function b(e) {
                let {
                    store: t,
                    permissionsPathAncestors: n,
                    actorPointer: r
                } = e, o = n.findLast(i(579825).vl), a = (0, i(328765).S)(), s = new(i(227318)).d([t.pointer]);
                !o && null != a && a.isDefined() && (s.add(a.pointer), n.push(a.getModel()));
                let l = (0, i(310248).uI)({
                    recordPointers: s,
                    actorPointers: new(i(227318)).d([r]),
                    getRecordModel: t.getRecordModel
                });
                return (0, i(310248).Dk)({
                    actorPointer: r,
                    ancestors: n,
                    permissionsContext: l
                })
            }

            function S({
                actorPointer: e,
                store: t
            }) {
                let n = i(688502).Yn(t.pointer, t.getRecordModel),
                    o = n.find(e => e.table === i(832375).C0E);
                if (t.table === i(832375).evP && o) {
                    let t = o.getPermissionItems();
                    if (t && t.length > 0) {
                        let n = new Set,
                            o = t.filter(t => (0, r().B2)(t) && e.table === i(832375).oo9 ? t.user_id === e.id : !!(0, r().Ds)(t) && n.has(t.group_id));
                        if (o.length > 0) return o
                    }
                }
                return b({
                    store: t,
                    permissionsPathAncestors: n,
                    actorPointer: e
                }).map(e => e.permissionItem)
            }

            function k({
                userId: e,
                store: t
            }) {
                let n = S({
                    actorPointer: {
                        table: i(832375).oo9,
                        id: e
                    },
                    store: t
                });
                if (0 === n.length) return [{
                    type: "user_permission",
                    role: "none",
                    user_id: e
                }];
                let r = i(381453).oE(n.map(e => e.role)),
                    o = i(138798).$q(...r);
                return n.filter(e => e.role === o).sort(i(579825).Sx)
            }

            function x({
                botId: e,
                store: t
            }) {
                let n = S({
                    actorPointer: {
                        table: i(832375).GPl,
                        id: e
                    },
                    store: t
                });
                return 0 === n.length ? [{
                    type: "bot_permission",
                    role: "none",
                    bot_id: e
                }] : n
            }

            function w({
                userId: e,
                store: t,
                explicitUserPermissionRole: n
            }) {
                let o = i(688502).Yn(t.pointer, t.getRecordModel),
                    a = b({
                        store: t,
                        permissionsPathAncestors: o,
                        actorPointer: {
                            table: i(832375).oo9,
                            id: e
                        }
                    }),
                    s = [...a];
                return a.find(e => "user_permission" === e.permissionItem.type) || s.push(n ? ? {
                    permissionItem: {
                        type: "user_permission",
                        role: "none",
                        user_id: e
                    },
                    from: r().M3(t.pointer)
                }), (0, i(579825).nQ)(s)
            }
            async function P({
                userId: e,
                store: t,
                explicitUserPermissionRole: n
            }) {
                let o = i(688502).Yn(t.pointer, t.getRecordModel),
                    a = {
                        table: i(832375).oo9,
                        id: e
                    },
                    s = new(i(227318)).d([t.pointer]),
                    l = new(i(227318)).d([{
                        table: i(832375).oo9,
                        id: e
                    }]),
                    u = (0, i(310248).uI)({
                        recordPointers: s,
                        actorPointers: l,
                        getRecordModel: t.getRecordModel
                    });
                await (0, i(209654).Y1)({
                    ancestorsRecordMap: u.ancestorsRecordMap,
                    actorPointers: l,
                    loadRecordModel: t.loadRecordModel
                });
                let d = (0, i(310248).Dk)({
                        actorPointer: a,
                        ancestors: o,
                        permissionsContext: u
                    }),
                    c = [...d];
                return d.find(e => "user_permission" === e.permissionItem.type) || c.push(n ? ? {
                    permissionItem: {
                        type: "user_permission",
                        role: "none",
                        user_id: e
                    },
                    from: r().M3(t.pointer)
                }), (0, i(579825).nQ)(c)
            }

            function I(e) {
                let {
                    botStore: t,
                    addPermission: n
                } = e, r = n ? i(579825).MD(t.getCapabilities()) : "none", o = t.getParentId(), a = t.getParentTable(), s = {
                    type: "bot_permission",
                    bot_id: t.id,
                    role: r
                };
                return o && a && (s = {
                    type: "bot_permission",
                    bot_id: t.id,
                    role: r,
                    parent_id: o,
                    parent_table: a
                }), s
            }

            function C(e) {
                let t = e.getParentBlockStore();
                return !t || t.pathIsDead()
            }

            function T(e) {
                let t = e.getParentBlockStore();
                return (null == t ? void 0 : t.isLocked()) ? ? !0
            }

            function M() {
                return i(801062).h.state.permissionGroupsAndMemberCounts.size
            }

            function A(e, t) {
                let n = i(708929).Uv.getMode(e);
                return !!((0, i(708929).Or)(n) || "suggest" === n || (0, i(45262).Q)(t) || e.pathIsDead() || (0, i(336136).dL)(e) || (0, i(335818).yU)(e))
            }

            function E(e, t, i) {
                return !A(e, t) && (!!e.canEdit() || !!e.isCollectionView() && e.getOwnedCollectionStores().some(e => D({
                    collectionStore: e,
                    environment: i
                })))
            }

            function D(e) {
                let {
                    collectionStore: t,
                    environment: n
                } = e;
                return !!t && (!!t.canEdit() || !!i(352441).Q.getData(n, {
                    collectionId: t.id,
                    spaceId: t.getSpaceId()
                }))
            }
        },
        864844: (e, t, i) => {
            i.d(t, {
                E: () => n
            });
            class n {
                rect = i(546605).Store.createValue(i(195304).v_, {
                    name: "rect"
                });
                el;
                resizeObserver;
                recomputeThrottled;
                constructor(e) {
                    const t = (null == e ? void 0 : e.throttleMs) ? ? 10;
                    t && (this.recomputeThrottled = i(381453).nF(this.recompute, t, {
                        leading: !0,
                        trailing: !0
                    }))
                }
                observe(e) {
                    var t;
                    this.el !== e && (null == (t = this.resizeObserver) || t.disconnect(), this.el = e, "u" > typeof ResizeObserver && (this.resizeObserver = new ResizeObserver(this.getRecomputeFn()), this.resizeObserver.observe(this.el)), this.recompute())
                }
                destroy() {
                    this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = void 0), this.el = void 0
                }
                recompute = () => {
                    var e;
                    let t = (null == (e = this.el) ? void 0 : e.getBoundingClientRect()) ? ? i(195304).v_;
                    return this.rect.setState(t), t
                };
                getRecomputeFn() {
                    return this.recomputeThrottled || this.recompute
                }
            }
        },
        867819: (e, t, i) => {
            i.d(t, {
                P: () => n
            });

            function n(e) {
                var t;
                let n, {
                        environment: r,
                        teamStore: o,
                        userId: a,
                        spaceId: s
                    } = e,
                    l = o.id,
                    u = a ? ? r.currentUser.id ? ? (null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id),
                    d = s ? ? o.getSpaceId();
                if (void 0 === u || void 0 === d) return;
                let {
                    counts: c
                } = (0, i(958692).V)({
                    environment: r,
                    userId: u,
                    spaceId: d,
                    teamId: l
                });
                return c ? {
                    totalMembersAndGuestsCount: n = c.ownerUserCount + c.memberUserCount,
                    ownersCount: c.ownerUserCount,
                    membersIncludingOwnersCount: n,
                    teamGuestsCount: 0,
                    sampleMemberUserIds: c.sampleMemberUserIds
                } : void 0
            }
        },
        868488: (e, t, i) => {
            function n(e, t) {
                let n = t.getPagesStore();
                return (function(e, t) {
                    let n = e.currentUser.id,
                        r = t.getPagesStore().getValue();
                    if (r && n) {
                        let e = i(208058).Y.getSpaceInaccessiblePages(t.id, n);
                        return e ? r.filter(t => !e.has(t)) : r
                    }
                    return []
                })(e, t).map(e => i(970831).B.createChildStore(n, {
                    table: i(832375).evP,
                    id: e
                }))
            }
            i.d(t, {
                I: () => n
            }), i(581454), i(898992), i(354520)
        },
        875472: (e, t, i) => {
            function n(e) {
                return !!e && !!(0, i(722371).Xk)(i(595584).G9, e.campaign)
            }

            function r(e) {
                return "resurrection_offer" === e || "business_resurrection_offer" === e
            }

            function o(e, t) {
                if (!e) return;
                let i = e.filter(e => e.offer.type === t);
                if (0 !== i.length) return 1 === i.length ? i[0] : i.reduce((e, t) => e.startDateMs > t.startDateMs ? e : t)
            }
            i.d(t, {
                Bc: () => l,
                ER: () => c,
                Iw: () => n,
                Kp: () => y,
                PZ: () => p,
                Si: () => d,
                Vi: () => s,
                Vm: () => f,
                b_: () => m,
                e8: () => o,
                i: () => h,
                kd: () => _,
                nb: () => S,
                oh: () => v,
                rM: () => b,
                sO: () => u,
                u6: () => r,
                vk: () => g
            }), i(944114), i(898992), i(354520), i(672577), i(908872);
            let a = {
                    block_limit_interval: {
                        campaign: "block_limit_interval",
                        yearly: "annual_block_limit",
                        monthly: "block_limit"
                    },
                    aimn: {
                        campaign: "aimn",
                        yearly: "aimn_annual",
                        monthly: "aimn_monthly"
                    }
                },
                s = (0, i(591083).yc)().catch(() => void 0);

            function l(e, t) {
                let n;
                if (!e) return;
                let r = void 0 !== t ? (0, i(591083).v7)() : void 0;
                if ((0, i(165664).FX)(e)) {
                    if (t && r && !(0, i(528815).mQ)({
                            offerEligibility: r[e],
                            billingInterval: t
                        })) return;
                    n = e
                } else if ((0, i(889089).w)(e)) {
                    let i = a[e];
                    if (!i || !t) return;
                    n = "month" === t ? i.monthly : i.yearly
                } else(0, i(722371).HB)(e);
                return i(848003).bC[n]
            }

            function u(e) {
                let t = l(e, "month"),
                    i = l(e, "year"),
                    n = t ? ? i;
                if (n) return {
                    type: n.type,
                    subscriptionTier: "trial" === n.type ? n.subscriptionTier : void 0
                }
            }

            function d(e, t) {
                let n = t ? ? i(906745).DateTime.now(),
                    r = f(e),
                    o = _(e);
                return Math.round((o < n ? o : n).diff(r, "days").days)
            }

            function c(e, t) {
                return Math.round(_(e).diff(t ? ? i(906745).DateTime.now(), "days").days)
            }

            function p(e, t) {
                return e ? Math.round(e.diff(t ? ? i(906745).DateTime.now(), "days").days) : 0
            }

            function m(e) {
                return i(906745).dw.fromObject(e.duration)
            }

            function f(e) {
                return i(906745).DateTime.fromMillis(e.startDateMs)
            }

            function _(e) {
                return i(906745).DateTime.fromMillis(e.endDateMs)
            }

            function g(e, t) {
                return e && "coupon" === e.type && "percent_off" === e.discount.type ? e.discount.percentOff * ("decimal_number" === t ? .01 : 1) : 0
            }

            function v(e, t, i, n) {
                let r = i * t;
                return e && "coupon" === e.type ? "percent_off" === e.discount.type ? r * (1 - g(e, n)) : "seat_count" === e.discount.type ? i * Math.max(0, t - e.discount.seatCount) : (e.discount, r) : r
            }

            function h(e) {
                return e && "trial" === e.offer.type ? e.offer.subscriptionTier : "plus"
            }

            function y(e) {
                return "trial" !== e.offer.type ? [] : e.offer.products.filter(i(645040).Qt)
            }

            function b(e, t) {
                let n = t ? ? i(906745).DateTime.now();
                return _(e) > n
            }

            function S(e) {
                let t = i(906745).dw.fromObject(e.offer.duration),
                    n = i(906745).DateTime.fromMillis(e.endDateMs).diff(i(906745).DateTime.fromMillis(e.startDateMs)).as("days");
                return t.as("days") - n > .05 && n < t.as("days")
            }
        },
        880853: (e, t, i) => {
            i.d(t, {
                Ay: () => _,
                NL: () => p,
                QC: () => u,
                mc: () => c,
                pP: () => d,
                yZ: () => m
            });
            var n, r, o, a, s, l = () => i(546605);
            let u = ((n = {}).Share = "share", n.Publish = "publish", n.Marketplace = "marketplace", n),
                d = ((r = {}).MainShareMenu = "mainShareMenu", r.Invite = "invite", r.Publish = "publish", r.AddInviteMessage = "addInviteMessage", r.Marketplace = "marketplace", r),
                c = ((o = {}).InviteBackButton = "invite_back_navigation", o.ShareTopbarButton = "share_topbar_button_click", o.ShareTab = "share_tab_click", o.PublicPermissionLevelBanner = "public_permission_level_banner", o),
                p = ((a = {}).Notion = "notion", a.Slack = "slack", a.Google = "google", a.Microsoft = "microsoft", a),
                m = ((s = {}).Search = "search", s.Message = "message", s);
            class f extends l().Store {
                getInitialState() {
                    return {
                        sessionId: i(92513).JW(),
                        display: d.MainShareMenu,
                        tab: u.Share,
                        isInitialized: !1,
                        source: c.ShareTopbarButton
                    }
                }
                getIsInitialized() {
                    return this.state.isInitialized
                }
            }
            let _ = new f
        },
        882061: (e, t, i) => {
            i.d(t, {
                J: () => n
            }), i(898992), i(354520);

            function n(e) {
                var t;
                let {
                    environment: n
                } = e, r = e.spaceViewStore ? ? i(728372).AppStoreSidebarSpaceViewStore.state;
                return !!n.currentUser.isLoggedIn() && !!i(728372).AppStoreCurrentUserRootStore.state && !!(0, i(494144).o)(r) && !((null == (t = i(728372).AppStoreCurrentUserRootStore.state) ? void 0 : t.getSpaceViewStores().filter(e => (0, i(916804).I)(e.getSpaceStore())).length) > 1) && !(0, i(799853).C)({
                    userRootStore: i(728372).AppStoreCurrentUserRootStore.state
                })
            }
        },
        886514: (e, t, i) => {
            i.d(t, {
                Kq: () => n,
                gm: () => r
            });
            let n = ["student", "personal", "plus", "business", "enterprise"];
            class r {
                lastVersion;
                externalId;
                product;
                billingInterval;
                unitAmount;
                state;
                constructor(e) {
                    this.externalId = e.external_id, this.product = e.product, this.billingInterval = e.billing_interval, this.unitAmount = i(972457).W.fromValue({
                        amount: e.unit_amount,
                        currencyCode: e.currency
                    }), this.state = e.state
                }
                getCurrencyCode() {
                    return this.unitAmount.currencyCode
                }
                getMonthlyUnitCost(e) {
                    let t = this.getAdjustedUnitAmount(e);
                    return "year" === this.billingInterval ? t.withDividedAmount(12) : t
                }
                getMonthlyCost(e) {
                    let {
                        quantity: t,
                        offer: i
                    } = e;
                    return this.getMonthlyUnitCost(i).withMultipliedAmount(t)
                }
                getCostPerBillingInterval(e) {
                    let {
                        quantity: t,
                        offer: i
                    } = e;
                    return this.getAdjustedUnitAmount(i).withMultipliedAmount(t)
                }
                getDiscountPerBillingInterval(e) {
                    var t;
                    let {
                        quantity: n,
                        offer: r,
                        promo: o
                    } = e, a = this.unitAmount.withMultipliedAmount(n);
                    if (r) return a.withMultipliedAmount((0, i(875472).vk)(r, "decimal_number"));
                    let s = 0;
                    return null != o && o.percent_off && null != (t = o.applies_to) && t.includes(this.externalId) && (s = o.percent_off / 100), a.withMultipliedAmount(s)
                }
                getAdjustedUnitAmount(e) {
                    let t = 1;
                    return e && (t = 1 - (0, i(875472).vk)(e, "decimal_number")), this.unitAmount.withMultipliedAmount(t)
                }
            }
        },
        888173: (e, t, i) => {
            i.d(t, {
                Ay: () => l,
                Gz: () => o,
                ju: () => r,
                rP: () => a
            });
            var n = () => i(546605);

            function r(e) {
                return "existingUser" === e.type
            }

            function o(e) {
                return "newUser" === e.type
            }

            function a(e) {
                return "newUser" === e.type && "email" !== e.source
            }
            class s extends n().Store {
                getInitialState() {
                    return {
                        tokenQuery: "",
                        inviteTargets: []
                    }
                }
            }
            let l = s
        },
        889089: (e, t, i) => {
            i.d(t, {
                w: () => r
            });
            let n = ["block_limit_interval", "aimn"];

            function r(e) {
                return !!(0, i(722371).Xk)(n, e)
            }
        },
        891369: (e, t, i) => {
            i.d(t, {
                H: () => n
            });

            function n() {
                return "on" === i(218744).default.getEligibleGroup({
                    experimentId: "sharing_guest_with_private_pages_space_id"
                })
            }
        },
        892400: (e, t, i) => {
            i.d(t, {
                _: () => o
            });
            var n = () => i(190623);
            let r = i(381453).nF(e => {
                i(773352).log(e)
            }, 500);

            function o(e) {
                let t = e,
                    i = 0;
                for (; t;) {
                    if (!t.isReady()) return !1;
                    if (i >= 128) return r({
                        level: "error",
                        from: "recordStoreHelpers",
                        type: "areAncestorsLoaded",
                        data: {
                            message: "max depth reached",
                            miscDataToConvertToString: {
                                maxDepth: 128,
                                id: e.id,
                                table: e.table,
                                currentStoreId: t.id,
                                currentTable: t.table
                            }
                        }
                    }), !1;
                    i += 1, t = (0, n().K)(t)
                }
                return !0
            }
        },
        893004: (e, t, i) => {
            i.d(t, {
                z: () => n
            });

            function n(e, t, n) {
                let r = (0, i(118483).C)(e, t, n);
                return !!r && !!i(94418).e2 && (0, i(94418).e2)(r)
            }
        },
        916804: (e, t, i) => {
            i.d(t, {
                I: () => n
            });

            function n(e) {
                return !!e && !e.canRead()
            }
        },
        924425: (e, t, i) => {
            i.d(t, {
                Z: () => n
            });

            function n(e) {
                let {
                    userId: t,
                    spaceStore: n,
                    teamTypes: r
                } = e, {
                    teams: o,
                    hasUnjoinedActiveTeams: a
                } = i(988752).E.readTeams(t, n.id, r);
                return {
                    teams: o,
                    hasUnjoinedActiveTeams: a
                }
            }
        },
        933132: (e, t, i) => {
            i.d(t, {
                P: () => n
            });

            function n(e) {
                return !i(986939).A.isMobile && !!e && !0 === (0, i(828560).XM)(e) && i(218744).default.checkGate({
                    gateName: "show_my_meetings_in_sidebar"
                })
            }
        },
        939707: (e, t, i) => {
            i.d(t, {
                o: () => o
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {}
                didRequest() {
                    let e = this.state;
                    return !!e && !e.isEligible && !!e.requestedAccess
                }
            }
            let o = new r
        },
        958692: (e, t, i) => {
            i.d(t, {
                V: () => d,
                z5: () => u,
                X7: () => l
            });
            var n = () => i(988752);
            i(944114), i(581454);
            var r = () => i(568479),
                o = () => i(381453);
            let a = new(i(34128)).A({
                    batchSize: 100,
                    maxWorkers: 1,
                    performRequests: async e => {
                        let t = Array(e.length),
                            i = new Map;
                        for (let [t, n] of e.entries()) {
                            let e = `${n.userId}:${n.spaceId}`,
                                r = i.get(e);
                            r ? r.push({
                                request: n,
                                index: t
                            }) : i.set(e, [{
                                request: n,
                                index: t
                            }])
                        }
                        for (let e of i.values()) {
                            let {
                                environment: i,
                                spaceId: n
                            } = e[0].request, a = [{
                                key: (0, r().kf)(n),
                                version: -1
                            }], s = o().sb(e.map(({
                                request: e
                            }) => e.teamId)), l = await i.api.callCellCompatibleApi({
                                eventName: "getMemberCountsInTeams",
                                environment: i,
                                data: {
                                    spaceId: n,
                                    teamIds: s
                                },
                                cellNavigation: {
                                    spaceId: n
                                }
                            }), u = "success" === l.type ? l.data.membershipByTeam : void 0, d = "success" === l.type && l.data.dependencies.length > 0 ? l.data.dependencies : a;
                            for (let {
                                    request: i,
                                    index: n
                                } of e) t[n] = {
                                counts: null == u ? void 0 : u[i.teamId],
                                dependencies: d
                            }
                        }
                        return t
                    }
                }),
                s = new(i(227586)).n(function(e, t) {
                    return `${t.userId}:${t.spaceId}:${t.teamId}`
                }, async (e, t) => {
                    let {
                        userId: i,
                        spaceId: n,
                        teamId: r
                    } = t, {
                        counts: o,
                        dependencies: s
                    } = await a.enqueue({
                        environment: e,
                        userId: i,
                        spaceId: n,
                        teamId: r
                    });
                    return {
                        value: {
                            counts: o
                        },
                        dependencies: s
                    }
                }, {
                    shouldInvalidateRequest: (e, t) => {
                        if (t.dependencyKey !== (0, r().kf)(e.spaceId)) return !1;
                        if (!Array.isArray(t.passThroughData)) return !0;
                        for (let i of t.passThroughData)
                            if ("string" != typeof i || i === e.teamId) return !0;
                        return !1
                    }
                });

            function l() {
                return i(218744).default.checkGate({
                    gateName: "use_get_member_counts_in_teams"
                })
            }

            function u(e) {
                let {
                    environment: t,
                    userId: i,
                    spaceId: r,
                    teamIds: o
                } = e, a = new Map;
                if (void 0 === i || void 0 === r || 0 === o.length) return {
                    countsByTeamId: a,
                    isLoading: !1
                };
                if (!l()) {
                    for (let e of o) {
                        let t = n().E.readMembershipCount({
                            userId: i,
                            spaceId: r,
                            teamId: e
                        });
                        a.set(e, t ? {
                            ownerUserCount: t.ownersCount,
                            memberUserCount: t.membersIncludingOwnersCount - t.ownersCount,
                            sampleMemberUserIds: t.sampleMemberUserIds
                        } : void 0)
                    }
                    return {
                        countsByTeamId: a,
                        isLoading: !1
                    }
                }
                let u = !1;
                for (let e of o) {
                    let n = s.getData(t, {
                        userId: i,
                        spaceId: r,
                        teamId: e
                    });
                    void 0 === n ? (u = !0, a.set(e, void 0)) : a.set(e, n.counts)
                }
                return {
                    countsByTeamId: a,
                    isLoading: u
                }
            }

            function d(e) {
                let {
                    teamId: t,
                    userId: i,
                    spaceId: n,
                    environment: r
                } = e, {
                    countsByTeamId: o,
                    isLoading: a
                } = u({
                    environment: r,
                    userId: i,
                    spaceId: n,
                    teamIds: [t]
                });
                return {
                    counts: t ? o.get(t) : void 0,
                    isLoading: a
                }
            }
        },
        962817: (e, t, i) => {
            i.d(t, {
                JR: () => r,
                QH: () => l,
                Xv: () => s,
                bD: () => a,
                nK: () => n,
                rb: () => o,
                zN: () => u
            });
            let n = "notion-selectable-halo",
                r = "notion-suggest-remove-halo",
                o = "notion-selectable",
                a = "notion-selectable-rtl",
                s = "notion-selectable-ltr",
                l = "notion-selectable-container",
                u = "notion-selectable-hover-menu-item"
        },
        972457: (e, t, i) => {
            i.d(t, {
                W: () => n
            }), i(16280), i(898992), i(354520), i(908872), i(737550);
            class n {
                static fromValue(e) {
                    let {
                        amount: t,
                        currencyCode: i
                    } = e;
                    return new n(i, t)
                }
                static sum(...e) {
                    let t = e.filter(e => void 0 !== e);
                    if (0 === t.length) return;
                    let {
                        currencyCode: i
                    } = t[0];
                    if (t.some(e => e.currencyCode !== i)) throw Error("Cannot add money with different currencies");
                    let r = t.reduce((e, t) => e + t.amount, 0);
                    return n.fromValue({
                        amount: r,
                        currencyCode: i
                    })
                }
                static zero(e) {
                    return n.fromValue({
                        amount: 0,
                        currencyCode: e
                    })
                }
                currencyCode;
                amount;
                constructor(e, t) {
                    this.currencyCode = e, this.amount = t
                }
                toMoneyValue() {
                    return {
                        amount: this.amount,
                        currencyCode: this.currencyCode
                    }
                }
                withAmount(e) {
                    return new n(this.currencyCode, e)
                }
                withAddedAmount(e) {
                    return new n(this.currencyCode, this.amount + e)
                }
                plus(e) {
                    if (this.currencyCode !== e.currencyCode) throw Error(`Cannot add money with currency code ${this.currencyCode} to money with currency code ${e.currencyCode}`);
                    return new n(this.currencyCode, this.amount + e.amount)
                }
                minus(e) {
                    return this.plus(e.withMultipliedAmount(-1))
                }
                withMultipliedAmount(e) {
                    return new n(this.currencyCode, this.amount * e)
                }
                withDividedAmount(e) {
                    return new n(this.currencyCode, this.amount / e)
                }
                zeroIfNegative() {
                    return new n(this.currencyCode, Math.max(0, this.amount))
                }
                zeroIfPositive() {
                    return new n(this.currencyCode, Math.min(0, this.amount))
                }
                isPositive() {
                    return this.amount > 0
                }
                isNegative() {
                    return this.amount < 0
                }
            }
        },
        972740: (e, t, i) => {
            i.d(t, {
                L: () => n
            });

            function n() {
                return (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore)
            }
        },
        984858: (e, t, i) => {
            i.r(t), i.d(t, {
                SIDEBAR_MIN_WIDTH: () => n,
                SLIPPERY_SLOPE_SIDEBAR_MIN_WIDTH: () => r,
                peekResizingStore: () => m,
                sidebarAnimatingStore: () => c,
                sidebarElectronMousePeekStore: () => g,
                sidebarExpandedStore: () => l,
                sidebarHoverPreviewDisabledStore: () => u,
                sidebarMouseEnteredStore: () => d,
                sidebarMousePeekXStore: () => s,
                sidebarOpenStore: () => a,
                sidebarResizingStore: () => p,
                sidebarShouldLogInitialRenderStore: () => _,
                sidebarSizeObserver: () => f,
                sidebarWidthStore: () => o
            });
            let n = 240,
                r = 270,
                o = i(546605).Store.createValue(n, {
                    name: "sidebarWidthStore"
                }),
                a = i(546605).Store.createValue(!1, {
                    name: "sidebarOpenStore"
                }),
                s = i(546605).Store.createValue(0, {
                    name: "sidebarMousePeekXStore"
                }),
                l = i(546605).Store.createValue(!0, {
                    name: "sidebarExpandedStore"
                }),
                u = i(546605).Store.createValue(!1, {
                    name: "sidebarHoverPreviewDisabledStore"
                }),
                d = i(546605).Store.createValue(!1, {
                    name: "sidebarMouseEnteredStore"
                }),
                c = i(546605).Store.createValue(!1, {
                    name: "sidebarAnimatingStore"
                }),
                p = i(546605).Store.createValue({
                    isResizing: !1,
                    isResizerHovered: !1
                }, {
                    name: "sidebarResizingStore"
                }),
                m = i(546605).Store.createValue(!1, {
                    name: "peekResizingStore"
                }),
                f = new(i(864844)).E,
                _ = i(546605).Store.createValue(!0, {
                    name: "sidebarShouldLogInitialRenderStore"
                }),
                g = i(546605).Store.createValue(!1, {
                    name: "sidebarElectronMousePeekStore"
                })
        },
        987458: (e, t, i) => {
            i.d(t, {
                A: () => a
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        offlinePages: void 0,
                        isSlowWrite: !1
                    }
                }
            }
            let o = new r;
            (0, i(202146).exposeDebugValue)("OfflinePagesStore", o);
            let a = o
        },
        988752: (e, t, i) => {
            i.d(t, {
                E: () => o
            }), i(898992), i(354520);
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {}
                }
                getUnit(e, t) {
                    var i;
                    return null == (i = this.state[e]) ? void 0 : i[t]
                }
                getOrCreateUnit(e, t) {
                    return this.state[e] || (this.state[e] = {}), this.state[e][t] || (this.state[e][t] = {
                        teams: {},
                        lastFetchSourceOfTeamType: {
                            Joined: "none",
                            UnjoinedActive: "none",
                            Archived: "none"
                        },
                        pendingUpdates: Promise.resolve(),
                        isLoading: !0,
                        isError: !1,
                        hasUnjoinedActiveTeams: void 0
                    }), this.state[e][t]
                }
                queueUpdateForSpaceUser(e) {
                    let {
                        userId: t,
                        spaceId: i,
                        fetchedTeamsPromise: n,
                        fetchedTeamsSource: r,
                        teamTypesToUpdate: o,
                        teamIdsToUpdate: a
                    } = e, s = this.getOrCreateUnit(t, i);
                    s.isError = !1;
                    let l = new Map;
                    for (let e of o) l.set(e, s.lastFetchSourceOfTeamType[e]), s.lastFetchSourceOfTeamType[e] = r;
                    this.emit(), s.pendingUpdates = (async () => {
                        let e;
                        await s.pendingUpdates;
                        try {
                            e = await n
                        } catch (e) {
                            for (let [e, t] of l) s.lastFetchSourceOfTeamType[e] = t;
                            s.isError = !0, s.isLoading = !1, this.emit();
                            return
                        }
                        let {
                            teams: t,
                            hasUnjoinedActiveTeams: i
                        } = e;
                        for (let [e, t] of Object.entries(s.teams)) o.has(t.type) && ("all" === a || a.has(e)) && delete s.teams[e];
                        for (let e of t) o.has(e.type) && ("all" === a || a.has(e.id)) && (s.teams[e.id] = e);
                        void 0 !== i && (s.hasUnjoinedActiveTeams = i), s.isLoading = !1, s.isError = !1, this.emit()
                    })()
                }
                readTeamMetadata(e) {
                    let {
                        userId: t,
                        spaceId: i,
                        teamId: n
                    } = e, r = this.getUnit(t, i);
                    return null == r ? void 0 : r.teams[n]
                }
                readTeams(e, t, i) {
                    let n = this.getUnit(e, t);
                    return void 0 === n ? {
                        teams: [],
                        isLoading: !0,
                        isError: !1,
                        hasUnjoinedActiveTeams: void 0
                    } : {
                        teams: Object.values(n.teams).filter(({
                            type: e
                        }) => i.has(e)),
                        isLoading: n.isLoading,
                        isError: n.isError,
                        hasUnjoinedActiveTeams: n.hasUnjoinedActiveTeams
                    }
                }
                readMembershipCount(e) {
                    var t;
                    let {
                        userId: i,
                        spaceId: n,
                        teamId: r
                    } = e;
                    return null == (t = this.getUnit(i, n)) || null == (t = t.teams[r]) ? void 0 : t.membershipSummary
                }
            }
            let o = new r
        },
        992308: (e, t, i) => {
            i.d(t, {
                W: () => o
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {}
            }
            let o = new r
        },
        993077: (e, t, i) => {
            function n(e) {
                let t = (0, i(345776).T)();
                return (0, i(682985).K8)(() => {
                    if (t) return o(e ? ? (0, i(328765).S)(), t)
                }, [t, e])
            }

            function r(e, t) {
                return i(229903).V.createChildStore(e, i(729052).i1({
                    userId: t,
                    spaceId: e.id
                }))
            }

            function o(e, t) {
                return e && t ? r(e, t) : void 0
            }

            function a(e, t) {
                return i(264541).b.createChildStore(e, i(611042).gZ({
                    botId: t,
                    spaceId: e.id
                }))
            }

            function s(e) {
                let t = n(e);
                return (0, i(682985).K8)(() => null == t ? void 0 : t.getMembershipType(), [t])
            }

            function l(e) {
                let {
                    spaceStore: t,
                    userId: n
                } = e;
                return (0, i(682985).K8)(() => {
                    var e;
                    if (t && n) return null == (e = r(t, n)) ? void 0 : e.getMembershipType()
                }, [t, n])
            }
            i.d(t, {
                Ts: () => a,
                U2: () => n,
                V_: () => l,
                dp: () => r,
                nB: () => s,
                sE: () => o
            })
        },
        998539: (e, t, i) => {
            i.d(t, {
                f: () => n
            });

            function n(e) {
                var t, n;
                let {
                    environment: r,
                    teamStore: o
                } = e, a = o.id, s = o.getSettingsStore().getValue();
                if (!o.isDefined() || void 0 === s) return {
                    team_id: (0, i(4962).Xw)(a),
                    no_team_value: !0
                };
                let l = null == (t = (0, i(867819).P)({
                    environment: r,
                    teamStore: o
                })) ? void 0 : t.membersIncludingOwnersCount;
                return {
                    team_id: (0, i(4962).Xw)(a),
                    team_current_size: l,
                    team_access_level: (0, i(422280).MA)(s),
                    team_is_default: o.isDefault(),
                    team_has_description: !!o.getDescription(),
                    team_has_icon: !!o.getIcon(),
                    team_top_pages: (null == (n = o.getTeamPagesStore().getValue()) ? void 0 : n.length) ? ? 0
                }
            }
        }
    }
]);