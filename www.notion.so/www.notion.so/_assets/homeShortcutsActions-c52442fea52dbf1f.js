"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [21475, 29872, 32626], {
        33918: (e, t, n) => {
            n.d(t, {
                G: () => o
            });

            function o(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "delete_property",
                        eventProperties: t
                    }
                })
            }
        },
        72762: (e, t, n) => {
            n.d(t, {
                o: () => o
            });

            function o(e) {
                let {
                    collectionSettingsStore: t
                } = e;
                t.setState({ ...t.state,
                    open: !1,
                    hideSettingsPopup: void 0,
                    hideSettingsHeader: void 0,
                    stack: [],
                    ref: void 0,
                    hideDuplicatePropertyOption: void 0,
                    closeOnEscape: void 0
                }), n(639675).Ay.setState({ ...n(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        85071: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                integrationIcon: () => r
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                r = (0, n(104509).wt)("integration", o, "default")
        },
        199894: (e, t, n) => {
            n.d(t, {
                t: () => o
            }), n(16280), n(898992), n(672577), n(581454);

            function o(e) {
                let {
                    environment: t,
                    selection: o,
                    transaction: r,
                    preventSetSelection: i
                } = e, {
                    blocks: a
                } = e, l = (0, n(385941).Z)();
                if (!l) throw Error("No root store.");
                if (o.length > 0) {
                    let e = o[0],
                        l = n(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!l || !l.props.onInsertAbove) throw Error("No Selectable found.");
                    let c = l.props.onInsertAbove({
                        insertStores: a,
                        transaction: r
                    });
                    return i || (0, n(854924).t)({
                        environment: t,
                        stores: c
                    }), c
                } {
                    let e = l.getContentStore(),
                        o = a.map(t => (0, n(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: r
                        }).childStore);
                    return i || (0, n(854924).t)({
                        environment: t,
                        stores: o
                    }), o
                }
            }
        },
        285482: (e, t, n) => {
            n.d(t, {
                A: () => o
            });

            function o(e, t) {
                if ((0, n(101787).pA8)(t)) {
                    let o = (0, n(115964).$)(t.clientData);
                    if (o) return "messageValues" in t.clientData ? e.formatMessage(o, t.clientData.messageValues) : e.formatMessage(o)
                }
                return e.formatMessage(n(683646).k.generic_error)
            }
        },
        425749: (e, t, n) => {
            n.d(t, {
                I$: () => a,
                R2: () => s,
                WF: () => c,
                bZ: () => l,
                cE: () => r,
                jX: () => i,
                rz: () => d
            });
            var o = () => n(381453);

            function r(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let i = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function a(e) {
                return !!(void 0 !== e && (0, n(722371).Xk)(i, e))
            }

            function l() {
                let e = (0, n(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: n(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, n(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function c(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let s = [{
                type: "everything"
            }];

            function d(e) {
                for (let t of s)
                    if (o().n4(e, t)) return !0;
                return !1
            }
        },
        431666: (e, t, n) => {
            n.d(t, {
                i: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    collectionStore: o,
                    collectionViewStore: r,
                    property_type: i,
                    from: a,
                    property: l
                } = e;
                (0, n(33918).G)(t, {
                    property: l,
                    property_type: i,
                    from: a,
                    collection_id: null == o ? void 0 : o.id,
                    collection_view_id: null == r ? void 0 : r.id
                })
            }
        },
        432705: (e, t, n) => {
            function o(e) {
                return "event" === e || "recurrence" === e
            }

            function r(e) {
                let t = e.getTrigger();
                return (0, n(722371).O9)(t) && o(t.type)
            }

            function i(e) {
                return "event" === e ? "event" : "recurrence" === e ? "recurrence" : void(0, n(722371).HB)(e)
            }
            n.d(t, {
                $X: () => r,
                H8: () => i,
                x2: () => o
            })
        },
        487016: (e, t, n) => {
            n.d(t, {
                Bi: () => l,
                My: () => a,
                ZM: () => s,
                _M: () => c,
                navigateToWorkflowTemplateOnboardingModal: () => d
            }), n(16280), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454);
            var o = () => n(388507),
                r = () => n(715144),
                i = () => n(717673);

            function a({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                var l, c;
                let s = (null == (l = t.getParentBlockStore()) ? void 0 : l.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === s.length) return;
                let d = [];
                for (let e of n) {
                    let n = (0, i().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && d.push({
                        property: n.id,
                        visible: !(0, o().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== d.length)
                    for (let t of s) {
                        let n = (null == (c = t.getPropertyFormatsStore("table_properties")) ? void 0 : c.getValue()) ? ? [],
                            o = new Set(n.map(e => e.property)),
                            i = d.filter(e => !o.has(e.property));
                        0 !== i.length && (0, r().z)({
                            stores: [t],
                            update: {
                                table_properties: [...n, ...i]
                            },
                            transaction: e
                        })
                    }
            }

            function l({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                let o = [];
                for (let e of n) {
                    let n = (0, i().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && o.push({
                        property: n.id,
                        visible: !0
                    })
                }
                let a = t.getFormat().collection_page_properties ? ? [],
                    c = new Set(a.map(e => e.property)),
                    s = o.filter(e => !c.has(e.property));
                s.length && (0, r().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...a, ...s]
                    },
                    transaction: e
                })
            }

            function c({
                environment: e,
                newPageStore: t,
                result: o
            }) {
                if ("accepted_template" === o.type || "accepted_empty_collection" === o.type) {
                    let r = t.getSpaceId();
                    (0, n(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: r ? {
                            spaceWithId: r
                        } : void 0,
                        perform: r => {
                            let i = t.getTitleValue();
                            if ((0, n(173157).z)({
                                    store: t,
                                    transaction: r,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === o.type && !(0, n(247438).w9s)(i)) {
                                let a = n(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: o.blockId
                                }).getTitleStore();
                                a && n(41403).yr({
                                    environment: e,
                                    transaction: r,
                                    tokens: i,
                                    index: 0,
                                    store: a
                                })
                            }
                            let a = t.getParentStore();
                            if ((null == a ? void 0 : a.table) === n(682956).ev) {
                                let e = a.getContentIds();
                                (0, n(173157).z)({
                                    store: a,
                                    transaction: r,
                                    data: {
                                        content: e.filter(e => e !== t.id)
                                    }
                                })
                            }
                        },
                        userAction: "clean_up_empty_new_page"
                    })
                }
            }

            function s({
                environment: e,
                userAction: t,
                result: o,
                existingCollectionViewBlockStore: r,
                existingCollectionStore: i
            }) {
                if ("canceled" !== o.type) {
                    if ("accepted_empty_collection" === o.type && i) {
                        let r = i.getKeyStore("name"),
                            a = (0, n(247438).x9d)(o.newCollectionTitle);
                        if (r) {
                            let o = i.getSpaceId();
                            (0, n(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: o ? {
                                    spaceWithId: o
                                } : void 0,
                                perform: t => n(41403).R9({
                                    environment: e,
                                    store: r,
                                    transaction: t,
                                    value: a
                                })
                            })
                        }
                    }
                    if (r) {
                        var a;
                        let e = null == (a = (0, n(444610).U)(r)) ? void 0 : a.settingsStore;
                        e && (0, n(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === o.type && null != r && r.isCollectionView() && !(null != r && r.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, n(444610).U)(r),
                            i = r.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === o.collectionId
                            });
                        if (!t || !i) return;
                        (0, n(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: i.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function d({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let o = t.id;
                if (!t.isDefined()) {
                    let r = await (0, n(389323).$)({
                        environment: e,
                        blockId: o
                    });
                    if (!r) return;
                    e = await n(274662).T({
                        environment: e,
                        newCurrentUserId: r
                    }), t = new(n(970831)).B(e, {
                        table: n(682956).ev,
                        id: o
                    }), await t.load()
                }
                let r = t.getSpaceId();
                if (!r) throw Error("Space ID not found for collection block");
                let i = (0, n(593303).k)(r);
                if (!i) throw Error(`Space view not found for space ID: ${r}`);
                let a = n(728372).AppStoreSidebarSpaceStore.state;
                (null == a ? void 0 : a.id) !== r && await (0, n(269948).y)({
                    environment: e,
                    spaceViewStore: i
                });
                let l = t.getFormat();
                if ((null == l ? void 0 : l.collection_view_sub_type) === "workflow_template_placeholder" && null != l && l.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: o
                    } = await n(708370).t.load(), r = o(l.placeholder_workflow_template_id);
                    if (!r) throw Error(`Collection template "${l.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: i
                    } = await n(903673).O.load();
                    i({
                        environment: e,
                        collectionTemplate: r,
                        collectionViewBlockStore: t
                    })
                } else(0, n(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: n(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        605263: (e, t, n) => {
            n.d(t, {
                K4: () => c,
                To: () => p,
                fi: () => s,
                q8: () => l,
                u: () => a
            }), n(16280), n(18107), n(967357);
            var o = n(296540),
                r = n(474848);
            let i = (0, o.createContext)({
                ancestors: []
            });

            function a(e) {
                let {
                    automationStore: t,
                    children: a,
                    contextType: l,
                    collectionStore: c,
                    collectionSettingsStore: s,
                    collectionViewBlockStore: p,
                    collectionViewStore: m,
                    enableExistenceGuarantees: f
                } = e, h = (0, n(533992).v3)(), g = (0, n(109939).tz)(), {
                    value: v
                } = (0, n(815048).fJ)(n(864850).T.formulas), {
                    value: y
                } = (0, n(815048).fJ)(n(879267).QV.automationTypecheck), w = (0, n(470569).o)(t), _ = (0, n(67499).S)(), S = (0, n(682985).K8)(() => v ? y ? function(e) {
                    let {
                        environment: t,
                        automationStore: o,
                        automationTypecheckModule: r,
                        contextType: i,
                        formulasModule: a,
                        intl: l,
                        subscriptionInfo: c,
                        pageStore: s,
                        enableExistenceGuarantees: p
                    } = e, m = p ? d.get(o) : d.get(o) ? ? u.get(o);
                    if (m) return m;
                    let f = new(n(345426)).ComputedStore(() => {
                        let e = o.getTriggerType(),
                            d = i;
                        return (0, n(722371).O9)(e) && (0, n(432705).x2)(e) && (d = (0, n(432705).H8)(e)), (0, n(100197).Z)({
                            environment: t,
                            automationStore: o,
                            automationTypecheckModule: r,
                            contextType: d,
                            formulasModule: a,
                            intl: l,
                            subscriptionInfo: c,
                            pageStore: s,
                            enableExistenceGuarantees: p
                        })
                    }, {
                        debugName: "automationContextTypecheckResultCachedStore"
                    });
                    return p && d.set(o, f), u.set(o, f), f
                }({
                    automationStore: t,
                    automationTypecheckModule: y,
                    contextType: l,
                    environment: h,
                    formulasModule: v,
                    intl: g,
                    subscriptionInfo: w,
                    pageStore: "button_block" === l ? null == _ ? void 0 : _.pageStore : void 0,
                    enableExistenceGuarantees: f
                }).state : {
                    error: new(n(600005)).N9("Missing automation dependency")
                } : {
                    error: new(n(600005)).N9("Missing formulas dependency")
                }, [h, t, y, l, v, g, w, null == _ ? void 0 : _.pageStore, f]), b = (0, o.useContext)(i), k = (0, o.useMemo)(() => 0 === b.ancestors.length ? [{
                    automationStore: t,
                    contextType: l,
                    typecheckResult: S,
                    collectionStore: c,
                    collectionSettingsStore: s,
                    collectionViewBlockStore: p,
                    collectionViewStore: m
                }] : [...b.ancestors, {
                    automationStore: t,
                    contextType: l,
                    typecheckResult: S,
                    collectionStore: c,
                    collectionSettingsStore: s,
                    collectionViewBlockStore: p,
                    collectionViewStore: m
                }], [b, t, l, S, c, s, p, m]), T = (0, o.useMemo)(() => ({
                    ancestors: k,
                    enableExistenceGuarantees: f
                }), [k, f]);
                return (0, r.jsx)(i.Provider, {
                    value: T,
                    children: a
                })
            }

            function l() {
                let e = (0, o.useContext)(i).ancestors.at(-1);
                if (!e) throw Error("No automation context found!");
                return e
            }

            function c() {
                return (0, o.useContext)(i).ancestors.at(-1)
            }

            function s() {
                return (0, o.useContext)(i).enableExistenceGuarantees
            }
            i.displayName = "AutomationContext", i.Consumer;
            let d = new WeakMap,
                u = new WeakMap;

            function p(e) {
                var t;
                return null == (t = d.get(e)) ? void 0 : t.state
            }
        },
        609328: (e, t, n) => {
            n.d(t, {
                P: () => i
            }), n(944114), n(296540);
            var o = n(474848);
            let r = (0, n(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function i({
                environment: e,
                title: t,
                ...a
            }) {
                var l, c, s;
                let d = [],
                    u = null == (l = a.error) ? void 0 : l.stack;
                if (u) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (c = t.replay) || null == (s = c.terminate) || s.call(c)), d.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, n(969899).Nu)())({
                                environment: e,
                                stringValue: u,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${u}
		</code></pre>`,
                                copiedMessage: r.errorStacktraceCopied
                            })
                        }
                    })
                }
                d.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, o.jsx)(n(109939).sA, { ...n(647095)._0.dismissButtonLabel
                    }),
                    onAccept: n(763230).D_
                }), n(647095).ui({
                    message: t,
                    description: (0, o.jsx)(n(149795).dD, { ...a
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: d
                })
            }
        },
        675693: (e, t, n) => {
            async function o(e, t) {
                switch (t) {
                    case "create-page":
                        var o, a = e;
                        let l = (0, n(328765).S)(),
                            c = n(728372).AppStoreSidebarSpaceViewStore.state;
                        if (!l || !c) throw Error("Cannot create page: missing space or space view store");
                        n(245757).SE({
                            environment: a,
                            spaceStore: l,
                            spaceViewStore: c,
                            type: "private",
                            prepend: !0,
                            outlinerItemFrom: "main_sidebar"
                        });
                        return;
                    case "create-database":
                        return r(e);
                    case "create-meeting":
                        return i(e);
                    case "browse-templates":
                        return o = e, void(0, n(79266).navigate)({
                            environment: o,
                            url: n(168962).JZ.marketplace
                        });
                    default:
                        throw Error(`Unknown shortcut action type: ${t}`)
                }
            }

            function r(e, t) {
                let o = (0, n(328765).S)(),
                    r = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!o || !r) throw Error("Cannot create database: missing space or space view store");
                let i = (0, n(351418).my)({
                    environment: e,
                    parentStore: o
                });
                i && (0, n(545586).navigateToBlock)({
                    environment: e,
                    store: i.collectionViewBlockStore,
                    visitType: n(981324).ig.Link,
                    pageVisitSource: n(254656).y8.PersonalHomeShortcuts,
                    redirect: null == t || !t.openInNew || void 0,
                    openInNew: null == t ? void 0 : t.openInNew,
                    makeTabActive: null == t ? void 0 : t.makeTabActive
                })
            }
            async function i(e) {
                let t = (0, n(328765).S)(),
                    o = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!t || !o) throw Error("Cannot create meeting: missing space or space view store");
                (await n(68067).$.load()).createAndNavigateToTranscriptionBlock({
                    environment: e,
                    from: "home_shortcuts",
                    title: "title_with_event",
                    origin: "home_shortcuts"
                })
            }
            n.r(t), n.d(t, {
                createNewDatabase: () => r,
                executeShortcut: () => o
            }), n(16280)
        },
        726342: (e, t, n) => {
            n.d(t, {
                u: () => o
            });

            function o(e) {
                return e instanceof n(681735).h || e instanceof n(695906).SpaceStore || e instanceof n(970831).B
            }
        },
        832248: (e, t, n) => {
            n.d(t, {
                S7: () => l,
                fF: () => w,
                es: () => y,
                LE: () => g,
                zs: () => h,
                HE: () => f,
                yg: () => v,
                QH: () => m,
                kn: () => p,
                mB: () => c,
                L$: () => s,
                X3: () => d,
                jX: () => u
            }), n(898992), n(354520), n(581454), n(944114);
            var o = () => n(896346);
            class r extends o().p3 {
                constructor(e, t) {
                    super(e, t)
                }
                after(e, t) {
                    return super.after(e, t)
                }
            }
            let i = (0, n(109939).YK)({
                    dateAtTime: {
                        id: "automations.recurrenceHelpers.dateAtTime",
                        defaultMessage: "{date} at {time}"
                    },
                    dateBetweenMidnightAnd3AM: {
                        id: "automations.recurrenceHelpers.dateBetweenMidnightAnd3AM",
                        defaultMessage: "{date} between 12–3 AM"
                    },
                    numberEndConditionDescription: {
                        id: "automations.recurrenceHelpers.numberEndConditionDescription",
                        defaultMessage: "{number, plural, one {After {number} run} other {After {number} runs}}"
                    },
                    noEndCondition: {
                        id: "automations.recurrenceHelpers.noEndCondition",
                        defaultMessage: "Never"
                    }
                }),
                a = {
                    hour: r.HOURLY,
                    day: r.DAILY,
                    week: r.WEEKLY,
                    month: r.MONTHLY,
                    year: r.YEARLY
                },
                l = {
                    MO: r.MO,
                    TU: r.TU,
                    WE: r.WE,
                    TH: r.TH,
                    FR: r.FR,
                    SA: r.SA,
                    SU: r.SU
                };

            function c(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 99
            }

            function s(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 999
            }

            function d(e) {
                let {
                    start_date: t,
                    frequency: o,
                    interval: i,
                    weekdays: c,
                    timezone: s,
                    hour: d,
                    minute: u
                } = e, p = (0, n(943003).eU)(t);
                "hour" === o && p.setUTCHours(d ? ? 0, u ? ? 0, 0, 0);
                let m = "week" === o && c ? c.map(e => l[e]) : void 0,
                    f = {};
                return (0, n(722371).O9)(e.end_condition) && ("date" === e.end_condition.type ? f.until = (0, n(943003).eU)(e.end_condition.end_at) : "number" === e.end_condition.type ? f.count = e.end_condition.number_of_occurrences : (0, n(722371).HB)(e.end_condition)), "month" === e.frequency && (0, n(722371).O9)(e.monthly_restriction) && ("monthdays" === e.monthly_restriction.type ? f.bymonthday = e.monthly_restriction.monthdays : "weekdays_in_month" === e.monthly_restriction.type ? f.byweekday = (function e(t, ...n) {
                    if (0 === n.length) return t.map(e => [e]);
                    let o = [];
                    for (let r of t) o.push(...e(n[0], ...n.slice(1)).map(e => [r, ...e]));
                    return o
                })(e.monthly_restriction.weekdays, e.monthly_restriction.week_numbers).map(([e, t]) => l[e].nth(t)) : (0, n(722371).HB)(e.monthly_restriction)), new r({
                    freq: a[o],
                    dtstart: p,
                    interval: i,
                    byweekday: m,
                    tzid: "hour" === o ? void 0 : s,
                    ..."hour" === o ? {} : {
                        byhour: d ? ? 0,
                        byminute: u ? ? 0,
                        bysecond: 0
                    },
                    ...f
                })
            }

            function u(e) {
                var t;
                if (0 === e.length) return {
                    violatesConstraint: !1,
                    templateNestingExceedsMaxDepth: !1,
                    ancestorHasDailyTemplate: !1,
                    nestedDepthOfAutomationAncestors: void 0,
                    immediateAncestorRecurrenceType: void 0
                };
                let n = e.filter(e => {
                        var t;
                        return (null == (t = e.getRecurrence()) ? void 0 : t.frequency) === "day"
                    }),
                    o = e.length,
                    r = null == (t = e[0].getRecurrence()) ? void 0 : t.frequency,
                    i = o > 1,
                    a = n.length >= 1;
                return {
                    violatesConstraint: i || a,
                    templateNestingExceedsMaxDepth: i,
                    ancestorHasDailyTemplate: a,
                    nestedDepthOfAutomationAncestors: o,
                    immediateAncestorRecurrenceType: r
                }
            }

            function p(e) {
                return 0 === e.hour || 1 === e.hour || 2 === e.hour
            }

            function m(e) {
                return d(e).after((0, n(943003).eU)((0, n(943003).Rz)())) || void 0
            }

            function f(e) {
                let {
                    recurrence: t,
                    intl: o
                } = e, r = "hour" === t.frequency ? function(e) {
                    let t = n(906745).DateTime.now();
                    if (n(906745).DateTime.fromMillis(e.start_date) > t) return e;
                    let o = t.startOf("hour");
                    return { ...e,
                        start_date: o.toMillis(),
                        hour: o.hour,
                        minute: o.minute
                    }
                }(t) : t, a = m(y(r));
                if (!a) return;
                let l = n(906745).DateTime.fromJSDate(a).toUTC().setZone("local", {
                    keepLocalTime: !0
                }).setLocale((0, n(599412).H)(o));
                "hour" !== r.frequency && (l = l.setZone(r.timezone));
                let c = "hour" !== t.frequency && p(t),
                    s = (0, n(850640).Yq)({
                        date: l,
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: o,
                        shortenDate: !0
                    });
                if (c) return o.formatMessage(i.dateBetweenMidnightAnd3AM, {
                    date: s
                }); {
                    let e = l.toLocaleString(n(906745).DateTime.TIME_SIMPLE);
                    return t.timezone !== (0, n(714350).P)() && (e += ` ${l.toFormat("ZZZZ")}`), o.formatMessage(i.dateAtTime, {
                        date: s,
                        time: e
                    })
                }
            }

            function h(e, t) {
                return (0, n(722371).O9)(e) ? "number" === e.type ? t.formatMessage(i.numberEndConditionDescription, {
                    number: e.number_of_occurrences
                }) : "date" === e.type ? (0, n(850640).Yq)({
                    date: n(906745).DateTime.fromMillis(e.end_at),
                    dateFormat: "relative",
                    allowRelativeDates: !0,
                    intl: t,
                    shortenDate: !0
                }) : void(0, n(722371).HB)(e) : t.formatMessage(i.noEndCondition)
            }

            function g(e) {
                return { ...e,
                    start_date: (0, n(943003).l1)(e.start_date),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? {
                        type: "date",
                        end_at: (0, n(943003).l1)(e.end_condition.end_at)
                    } : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function v(e, t, n) {
                return e.plus(n - t)
            }

            function y(e) {
                var t;
                let o;
                return { ...e,
                    start_date: (0, n(943003).Rz)(new Date(e.start_date)),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? (t = e.end_condition, o = n(906745).DateTime.fromMillis(t.end_at).set({
                        hour: e.hour ? ? 0,
                        minute: e.minute ? ? 0
                    }), {
                        type: "date",
                        end_at: (0, n(943003).Rz)(o.toJSDate())
                    }) : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function w(e, t) {
                let o = n(381453).fN(e, e => void 0 !== e),
                    r = n(381453).fN(t, e => void 0 !== e);
                return n(381453).n4(o, r)
            }
        },
        852864: (e, t, n) => {
            n.d(t, {
                H: () => o
            }), n(898992), n(672577);

            function o({
                spaceStore: e,
                userId: t,
                environment: r
            }) {
                let i = new(n(736309)).d(r, {
                    table: n(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return i ? n(994797).SpaceViewStore.createChildStore(e, {
                    id: i.id,
                    table: n(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        937776: (e, t, n) => {
            n.d(t, {
                B: () => i
            }), n(296540);
            var o = n(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, o.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                i = (0, n(104509).wt)("archiveBox", r, "default")
        },
        966559: (e, t, n) => {
            n.r(t), n.d(t, {
                exclamationMarkCircleSmallIcon: () => i,
                iconDefinition: () => r
            }), n(296540);
            var o = n(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, o.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                i = (0, n(104509).wt)("exclamationMarkCircleSmall", r, "small")
        }
    }
]);