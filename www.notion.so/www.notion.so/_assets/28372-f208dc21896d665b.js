"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [28372], {
        171270: (e, t, o) => {
            o.d(t, {
                J: () => s
            }), o(16280);
            var i = () => o(955630),
                a = () => o(247438),
                r = () => o(124937),
                l = () => o(579695);

            function n(e) {
                let {
                    textValue: t,
                    prefixLength: o
                } = e;
                if (0 === o) return t;
                let i = [],
                    r = o;
                for (let e of a().RQ(t)) {
                    if (a().qXl(e)) {
                        i.push(e);
                        continue
                    }
                    let t = a().N8A(e),
                        o = a().uPN(e);
                    if (0 === r) i.push(e);
                    else if (r >= t.length) r -= t.length;
                    else {
                        let e = t.slice(r);
                        i.push(a().Ey_(e, o)), r = 0
                    }
                }
                return i
            }
            async function s(e) {
                var t;
                let {
                    workflowStore: s,
                    environment: d,
                    title: u,
                    draftInstructions: c
                } = e, p = c ? ? (null == (t = s.getData()) ? void 0 : t.instructions);
                if ((0, o(886883).ap)(p)) return o(970831).B.createChildStore(s, p);
                let f = s.getSpaceId();
                if (!f) throw Error("Workflow store is missing space id for instructions page");
                let g = (0, o(886883).Zv)(p) ? (0, o(886883).rr)(p) : [],
                    {
                        performResult: m,
                        serverCommitResult: h
                    } = (0, o(377796).createAndCommit)({
                        userAction: "WorkflowActions.ensureInstructionsPage",
                        environment: d,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: f
                        },
                        perform: e => {
                            let t = r().Wv({
                                environment: d,
                                type: i().xd.page,
                                properties: {
                                    title: (0, a().x9d)(u)
                                },
                                inMemoryRecordCache: s.inMemoryRecordCache,
                                transaction: e,
                                spaceId: f
                            });
                            if (o(161606).b({
                                    childStore: t,
                                    parentStore: s,
                                    alive: !0,
                                    transaction: e
                                }), g && g.length > 0)
                                for (let o of function(e) {
                                        let t = [];
                                        for (let o of function(e) {
                                                let t = [],
                                                    o = [];
                                                for (let i of a().RQ(e)) {
                                                    if (a().qXl(i)) {
                                                        o.push(i);
                                                        continue
                                                    }
                                                    let e = a().N8A(i),
                                                        r = a().uPN(i);
                                                    for (let [i, l] of e.split("\n").entries()) i > 0 && (t.push(o), o = []), l.length > 0 && o.push(a().Ey_(l, r))
                                                }
                                                return o.length > 0 && t.push(o), t
                                            }(e)) {
                                            if (0 === o.length) continue;
                                            let e = a().RQ(o)[0];
                                            if (!e) continue;
                                            let r = a().N8A(e),
                                                l = r.match(/^([-*+•–—])\s+/);
                                            if (l) {
                                                let e = n({
                                                    textValue: o,
                                                    prefixLength: l[0].length
                                                });
                                                t.push({
                                                    type: i().xd.bulletedList,
                                                    text: e
                                                });
                                                continue
                                            }
                                            let s = r.match(/^(\d+\.)\s+/);
                                            if (s) {
                                                let e = n({
                                                    textValue: o,
                                                    prefixLength: s[0].length
                                                });
                                                t.push({
                                                    type: i().xd.numberedList,
                                                    text: e
                                                });
                                                continue
                                            }
                                            t.push({
                                                type: i().xd.text,
                                                text: o
                                            })
                                        }
                                        return t
                                    }(g)) {
                                    let i = r().Wv({
                                        environment: d,
                                        type: o.type,
                                        properties: {
                                            title: o.text
                                        },
                                        inMemoryRecordCache: s.inMemoryRecordCache,
                                        transaction: e,
                                        spaceId: f
                                    });
                                    l().NI({
                                        parentStore: t,
                                        childStore: i,
                                        transaction: e
                                    })
                                }
                            return (0, o(421439).y4)({
                                store: s,
                                operation: o(861988).WV({
                                    pointer: s.pointer,
                                    instructions: t.pointer
                                }),
                                transaction: e
                            }), t
                        }
                    });
                return await h, m
            }
            o(944114)
        },
        307365: (e, t, o) => {
            function i(e, t) {
                return t.default_workflow_id === e
            }

            function a(e) {
                let {
                    collectionPointer: t,
                    propertyId: i,
                    workflowId: a
                } = e, r = o(218744).default.checkGate({
                    gateName: "collection_schema_hlop"
                });
                return (0, o(232456).T)({
                    updateCollectionPropertySchemaOperation: {
                        pointer: t,
                        command: "updateCollectionPropertySchema",
                        path: ["schema", i, "default_workflow_id"],
                        args: {
                            primitiveOp: {
                                command: "set",
                                args: a
                            }
                        }
                    },
                    collectionSchemaHLOPEnabled: r
                })
            }

            function r(e) {
                let {
                    collectionPointer: t,
                    propertyId: i
                } = e, a = o(218744).default.checkGate({
                    gateName: "collection_schema_hlop"
                });
                return (0, o(232456).T)({
                    updateCollectionPropertySchemaOperation: {
                        pointer: t,
                        command: "updateCollectionPropertySchema",
                        path: ["schema", i, "default_workflow_id"],
                        args: {
                            primitiveOp: {
                                command: "set",
                                args: void 0
                            }
                        }
                    },
                    collectionSchemaHLOPEnabled: a
                })
            }
            o.d(t, {
                DO: () => i,
                Eq: () => a,
                rK: () => r
            })
        },
        418819: (e, t, o) => {
            o.d(t, {
                S: () => r
            });
            var i = () => o(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        statuses: new Map
                    }
                }
                getStatus(e) {
                    return this.state.statuses.get(e)
                }
                updateStatus(e, t) {
                    let o = {
                            success: Math.max(0, t.success),
                            in_progress: Math.max(0, t.in_progress),
                            paused: Math.max(0, t.paused),
                            failure: Math.max(0, t.failure),
                            cancelled: Math.max(0, t.cancelled),
                            skipped: Math.max(0, t.skipped)
                        },
                        i = new Map(this.state.statuses);
                    i.set(e, o), this.setState({
                        statuses: i
                    })
                }
                initializeStatus(e, t) {
                    let o = new Map(this.state.statuses);
                    o.set(e, {
                        success: 0,
                        in_progress: t,
                        paused: 0,
                        failure: 0,
                        cancelled: 0,
                        skipped: 0
                    }), this.setState({
                        statuses: o
                    })
                }
            }
            let r = new a
        },
        528372: (e, t, o) => {
            o.d(t, {
                GK: () => m,
                MT: () => D,
                deleteDatabaseAgentsFromProperty: () => N,
                Xp: () => k,
                D9: () => y,
                XL: () => h,
                ay: () => v,
                UT: () => I,
                x4: () => w,
                Hj: () => S,
                wm: () => P,
                $6: () => C,
                r1: () => _,
                gT: () => A
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(672577), o(803949), o(581454), o(737550);
            var i = o.n(o(794148)),
                a = () => o(436555),
                r = () => o(356912),
                l = () => o(114588),
                n = () => o(496282),
                s = () => o(832375);
            let d = (0, o(477465).Dv)("triggerAgentOverCollectionTask");
            var u = () => o(307365),
                c = () => o(418819),
                p = () => o(421439);
            let f = (0, o(109939).YK)({
                autofillProperties: {
                    id: "collectionSettingsPropertyAgentAutofillActions.autofillProperties",
                    defaultMessage: "Autofill {propertyList}"
                },
                databaseAgentProperties: {
                    id: "collectionSettingsPropertyAgentAutofillActions.databaseAgentProperties",
                    defaultMessage: "{propertyList} agent"
                },
                instructionsPageTitle: {
                    id: "collectionSettingsPropertyAgentAutofillActions.instructionsPageTitle",
                    defaultMessage: "Autofill {propertyName} Instructions"
                },
                fillPropertyInstruction: {
                    id: "collectionSettingsPropertyAgentAutofillActions.fillPropertyInstruction",
                    defaultMessage: "Fill in the {propertyName} property in this database."
                },
                publishSuccess: {
                    id: "publishDBAgent.publishSuccess",
                    defaultMessage: "Agent published successfully"
                },
                publishAiAutofillSuccess: {
                    id: "publishDBAgent.publishAiAutofillSuccess",
                    defaultMessage: "AI Autofill published successfully"
                }
            });

            function g(e) {
                let t = e.getDraftData() ? ? e.getData();
                return (null == t ? void 0 : t.isLite) ? ? !1
            }
            async function m(e) {
                let {
                    environment: t,
                    collectionStore: i,
                    intl: a,
                    isLite: r,
                    propertyId: l,
                    propertySchema: n,
                    workflows: d,
                    collectionContextStore: u,
                    includeInstructions: c = !1,
                    shouldPublishAgent: p = !1,
                    presetInstructions: g,
                    onWorkflowIdReady: m
                } = e, w = await (0, o(572473).e)({
                    environment: t,
                    collectionStore: i,
                    intl: a,
                    isLite: r,
                    propertyId: l,
                    propertySchema: n,
                    collectionContextStore: u,
                    includeInstructions: c,
                    initialInstructionText: g,
                    shouldPublishAgent: p
                });
                if (w.workflowId && (null == m || m(w.workflowId)), !n.default_workflow_id && w.workflowId && h({
                        workflowId: w.workflowId,
                        propertyId: l,
                        collectionStore: i,
                        workflows: d,
                        environment: t
                    }), c && w.workflowId) {
                    let e = i.getParentCollectionViewBlockStore() ? ? u.collectionViewBlockStore(),
                        r = i.getSpaceId();
                    if (e && r) {
                        let i = o(360851).N.createChildStore(e, {
                            table: s().C0E,
                            id: w.workflowId,
                            spaceId: r
                        });
                        await (0, o(171270).J)({
                            workflowStore: i,
                            environment: t,
                            title: a.formatMessage(f.instructionsPageTitle, {
                                propertyName: n.name
                            }),
                            draftInstructions: (0, o(247438).x9d)(g ? ? a.formatMessage(f.fillPropertyInstruction, {
                                propertyName: n.name
                            }))
                        }), await y({
                            environment: t,
                            hideSnackbar: !0,
                            spaceId: r,
                            workflowStore: i,
                            intl: a
                        })
                    }
                }
                if (w.workflowId) {
                    let e = i.getSpaceId();
                    e && (0, o(599231).Ye)({
                        workflowId: w.workflowId,
                        spaceId: e
                    })
                }
                return w.workflowId
            }

            function h(e) {
                let {
                    workflowId: t,
                    propertyId: i,
                    collectionStore: a,
                    workflows: r,
                    environment: l
                } = e, n = a.getSpaceShardedPointer(), d = a.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "AgentsSubmenu.setDefaultWorkflow",
                    environment: l,
                    cellTarget: d ? {
                        spaceWithId: d
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        let o = (0, u().Eq)({
                            collectionPointer: n,
                            propertyId: i,
                            workflowId: t
                        });
                        (0, p().y4)({
                            store: a,
                            operation: o,
                            transaction: e
                        });
                        let l = r.find(e => e.id === t);
                        if (l) {
                            let o = l.getDraftData() ? ? l.getData();
                            if (null != o && o.modules) {
                                let r = o.modules.map(e => {
                                    if ("notion" === e.type) {
                                        var t;
                                        let o = (null == (t = e.state) ? void 0 : t.ownedByDatabasePropertyIds) ? ? [];
                                        if (!o.includes(i)) return { ...e,
                                            state: { ...e.state,
                                                ownedByDatabasePropertyIds: [...o, i]
                                            }
                                        }
                                    }
                                    return e
                                });
                                if (r.some((e, t) => {
                                        var i;
                                        return e !== (null == (i = o.modules) ? void 0 : i[t])
                                    })) {
                                    let o = a.getSpaceId(),
                                        i = {
                                            command: "set",
                                            path: ["data", "modules"],
                                            args: r,
                                            pointer: {
                                                id: t,
                                                table: s().C0E,
                                                spaceId: o
                                            }
                                        };
                                    (0, p().y4)({
                                        store: l,
                                        operation: i,
                                        transaction: e
                                    })
                                }
                            }
                        }
                    }
                })
            }
            async function y(e) {
                let {
                    workflowStore: t,
                    environment: i,
                    spaceId: r,
                    hideSnackbar: l = !1,
                    intl: n
                } = e;
                l || a().D6({
                    label: n.formatMessage({
                        defaultMessage: "Saving agent...",
                        id: "publishDBAgent.savingProgress"
                    }),
                    durationMs: "keep"
                });
                let s = "success" === (await i.api.callApi({
                        eventName: "publishCustomAgentVersion",
                        environment: i,
                        data: {
                            workflowId: t.id,
                            spaceId: r
                        }
                    })).type,
                    d = g(t) ? f.publishAiAutofillSuccess : f.publishSuccess;
                return l || (a().N2(), s ? a().D6({
                    label: n.formatMessage(d)
                }) : a().D6({
                    label: n.formatMessage({
                        defaultMessage: "Failed to publish agent",
                        id: "publishDBAgent.publishFail"
                    })
                })), s && (0, o(599231).j3)({
                    workflowId: t.id,
                    spaceId: r
                }), {
                    success: s
                }
            }
            async function w(e) {
                let {
                    environment: t,
                    blockStore: i,
                    property: a,
                    workflowId: r,
                    collectionId: l,
                    spaceId: n,
                    isLite: u,
                    isLiteFairQueueEnabled: c
                } = e;
                if (u && c) return void await t.api.callCellCompatibleApi({
                    eventName: "triggerLiteAgentAutofill",
                    environment: t,
                    data: {
                        spaceId: n,
                        type: "blockFill",
                        workflowPointer: {
                            table: s().C0E,
                            id: r,
                            spaceId: n
                        },
                        collectionId: l,
                        blockIds: [{
                            table: s().evP,
                            id: i.id,
                            spaceId: n
                        }],
                        propertyIds: [a]
                    },
                    cellNavigation: {
                        spaceId: n
                    }
                });
                for await (let e of (0, o(259242).UT)({
                    environment: t,
                    eventName: d,
                    request: {
                        type: "blockFill",
                        workflowPointer: {
                            table: s().C0E,
                            id: r,
                            spaceId: n
                        },
                        collectionId: l,
                        blockIds: [{
                            table: s().evP,
                            id: i.id,
                            spaceId: n
                        }],
                        propertyIds: [a]
                    },
                    multiCellRouting: {
                        spaceIds: [n]
                    }
                })) {
                    var p;
                    if ("failure" === e.taskStatus || "success" === e.taskStatus && "value" in e && null != (p = e.value) && p.success) break
                }
            }

            function b(e) {
                let {
                    environment: t,
                    collectionContextStore: i,
                    n: a,
                    spaceId: r,
                    blockIds: l
                } = e;
                if (l && l.length > 0) return Array.from(new Set(l)).slice(0, a).map(e => new(o(970831)).B(t, {
                    table: s().evP,
                    id: e,
                    spaceId: r
                }));
                let n = i.resultsInViewOrder(a);
                return n.length > 0 ? n.slice(0, a) : Array.from(i.resultSetStore.state.blockIds).map(e => new(o(970831)).B(t, {
                    table: s().evP,
                    id: e,
                    spaceId: r
                })).slice(0, a)
            }
            async function v(e) {
                let {
                    n: t,
                    collectionContextStore: o,
                    workflowStore: i,
                    currentCollectionStore: a,
                    environment: r,
                    properties: l,
                    spaceId: n,
                    onEnqueueStart: s,
                    onEnqueueComplete: d,
                    blockIds: u
                } = e;
                return I({
                    pageIds: b({
                        collectionContextStore: o,
                        environment: r,
                        n: t,
                        spaceId: n,
                        blockIds: u
                    }).map(e => e.id),
                    workflowStore: i,
                    currentCollectionStore: a,
                    environment: r,
                    properties: l,
                    spaceId: n,
                    onEnqueueStart: s,
                    onEnqueueComplete: d
                })
            }
            async function I(e) {
                let {
                    pageIds: t,
                    workflowStore: i,
                    currentCollectionStore: r,
                    environment: l,
                    properties: n,
                    spaceId: u,
                    onEnqueueStart: p,
                    onEnqueueComplete: f
                } = e;
                if (0 === t.length) return {
                    firstNWorkflowAutomationRunIds: [],
                    totalBlocks: 0
                };
                let m = Array.from(new Set(t)).slice(0, o(906659).mz);
                if (m.map(e => new(o(970831)).B(l, {
                        table: s().evP,
                        id: e,
                        spaceId: u
                    })).forEach(e => {
                        M({
                            blockStore: e,
                            propertyIds: n,
                            environment: l
                        })
                    }), p(), await Promise.resolve(), g(i) && o(218744).default.checkGate({
                        gateName: "database_agent_lite_fair_queue"
                    })) {
                    let e = await l.api.callCellCompatibleApi({
                        eventName: "triggerLiteAgentAutofill",
                        environment: l,
                        data: {
                            spaceId: u,
                            type: "blockFill",
                            workflowPointer: {
                                table: s().C0E,
                                id: i.id,
                                spaceId: u
                            },
                            collectionId: r.id,
                            blockIds: m.map(e => ({
                                table: s().evP,
                                id: e,
                                spaceId: u
                            })),
                            propertyIds: n
                        },
                        cellNavigation: {
                            spaceId: u
                        }
                    });
                    if ("failed" === e.type) return a().D6({
                        label: "Failed to trigger agent for selected rows"
                    }), {
                        firstNWorkflowAutomationRunIds: [],
                        totalBlocks: 0
                    };
                    let {
                        groupId: t,
                        totalBlocks: d,
                        workflowAutomationRunIds: p
                    } = e.data;
                    return c().S.initializeStatus(t, d), f(d), (0, o(599231).YH)({
                        workflowId: i.id,
                        spaceId: u,
                        rowCount: m.length,
                        propertyCount: n.length,
                        origin: "modal"
                    }), {
                        firstNWorkflowAutomationRunIds: p,
                        totalBlocks: d
                    }
                }
                let h = (0, o(259242).UT)({
                        environment: l,
                        eventName: d,
                        request: {
                            type: "blockFill",
                            workflowPointer: {
                                table: s().C0E,
                                id: i.id,
                                spaceId: u
                            },
                            collectionId: r.id,
                            blockIds: m.map(e => ({
                                table: s().evP,
                                id: e,
                                spaceId: u
                            })),
                            propertyIds: n
                        },
                        multiCellRouting: {
                            spaceIds: [u]
                        }
                    }),
                    y = !1,
                    w = [],
                    b = m.length;
                for await (let e of h) {
                    var v, I;
                    if ("failure" === e.taskStatus) return a().D6({
                        label: "Failed to trigger agent for selected rows"
                    }), {
                        firstNWorkflowAutomationRunIds: [],
                        totalBlocks: 0
                    };
                    "value" in e && null != (v = e.value) && v.groupId && !y && (b = e.value.totalBlocks ? ? m.length, c().S.initializeStatus(e.value.groupId, b), y = !0), "value" in e && null != (I = e.value) && I.workflowAutomationRunIds && (w = e.value.workflowAutomationRunIds)
                }
                return f(b), (0, o(599231).YH)({
                    workflowId: i.id,
                    spaceId: u,
                    rowCount: m.length,
                    propertyCount: n.length,
                    origin: "modal"
                }), {
                    firstNWorkflowAutomationRunIds: w,
                    totalBlocks: b
                }
            }
            async function k(e) {
                var t, i, r, l;
                let {
                    workflowStore: n,
                    currentCollectionStore: u,
                    collectionContextStore: p,
                    environment: f,
                    spaceId: m,
                    properties: h,
                    onEnqueueStart: y,
                    onEnqueueComplete: w
                } = e, v = u.id, I = null == (t = p.collectionViewStore()) ? void 0 : t.id;
                if (!I) return a().D6({
                    label: "Failed to start fill all operation"
                }), {
                    success: !1,
                    firstNWorkflowAutomationRunIds: [],
                    totalBlocks: 0
                };
                y();
                let k = g(n) && o(218744).default.checkGate({
                        gateName: "database_agent_lite_fair_queue"
                    }),
                    A = b({
                        collectionContextStore: p,
                        environment: f,
                        n: o(906659).mz,
                        spaceId: m
                    });
                if (0 === A.length) return {
                    success: !0,
                    firstNWorkflowAutomationRunIds: [],
                    totalBlocks: 0
                };
                if (A.forEach(e => {
                        M({
                            blockStore: e,
                            propertyIds: h,
                            environment: f
                        })
                    }), k) {
                    let e = await f.api.callCellCompatibleApi({
                        eventName: "triggerLiteAgentAutofill",
                        environment: f,
                        data: {
                            spaceId: m,
                            type: "viewFill",
                            workflowPointer: {
                                table: s().C0E,
                                id: n.id,
                                spaceId: m
                            },
                            collectionId: v,
                            ...I && {
                                viewId: I
                            },
                            propertyIds: h
                        },
                        cellNavigation: {
                            spaceId: m
                        }
                    });
                    if ("failed" === e.type) return a().D6({
                        label: "Failed to start fill all operation"
                    }), {
                        success: !1,
                        firstNWorkflowAutomationRunIds: [],
                        totalBlocks: 0
                    };
                    let {
                        groupId: t,
                        totalBlocks: i,
                        workflowAutomationRunIds: r
                    } = e.data;
                    return c().S.initializeStatus(t, i), w(i), (0, o(599231).YH)({
                        workflowId: n.id,
                        spaceId: m,
                        rowCount: "all",
                        propertyCount: h.length,
                        origin: "modal"
                    }), {
                        success: !0,
                        firstNWorkflowAutomationRunIds: r,
                        totalBlocks: i
                    }
                }
                let C = (0, o(259242).UT)({
                        environment: f,
                        eventName: d,
                        request: {
                            type: "viewFill",
                            workflowPointer: {
                                table: s().C0E,
                                id: n.id,
                                spaceId: m
                            },
                            collectionId: v,
                            ...I && {
                                viewId: I
                            },
                            propertyIds: h
                        },
                        multiCellRouting: {
                            spaceIds: [m]
                        }
                    }),
                    P = !1,
                    S = !1,
                    _ = [],
                    T = A.length;
                for await (let e of C) {
                    if ("failure" === e.taskStatus) {
                        P = !1;
                        break
                    }
                    "value" in e && null != (i = e.value) && i.groupId && !S && (T = e.value.totalBlocks ? ? A.length, c().S.initializeStatus(e.value.groupId, T), S = !0), "value" in e && null != (r = e.value) && r.workflowAutomationRunIds && (_ = e.value.workflowAutomationRunIds), "success" === e.taskStatus && "value" in e && null != (l = e.value) && l.success && (P = !0)
                }
                return P ? (w(T), (0, o(599231).YH)({
                    workflowId: n.id,
                    spaceId: m,
                    rowCount: "all",
                    propertyCount: h.length,
                    origin: "modal"
                })) : a().D6({
                    label: "Failed to start fill all operation"
                }), {
                    success: P,
                    firstNWorkflowAutomationRunIds: _,
                    totalBlocks: T
                }
            }

            function A(e) {
                let {
                    workflowStore: t,
                    currentCollectionStore: i,
                    environment: a,
                    spaceId: r,
                    triggerStates: l,
                    triggerType: n,
                    enabled: d
                } = e, u = i.id;
                (0, o(377796).createAndCommit)({
                    userAction: "CollectionSettingsPropertyAgentAutofill.updateTriggers",
                    environment: a,
                    cellTarget: {
                        spaceWithId: r
                    },
                    canUndo: !0,
                    perform: e => {
                        var i, a, c, f, g;
                        let m = t.getDraftData() ? ? t.getData(),
                            h = (null == m ? void 0 : m.triggers) ? ? [],
                            y = null == m || null == (i = m.modules) || null == (i = i.find(e => "notion" === e.type)) ? void 0 : i.id,
                            w = e => h.find(t => {
                                var o;
                                return (null == (o = t.state) ? void 0 : o.type) === e
                            }),
                            b = e => {
                                let {
                                    existing: t,
                                    defaultName: i,
                                    enabled: a,
                                    state: r
                                } = e;
                                return { ...t ? ? {},
                                    id : (null == t ? void 0 : t.id) ? ? (0, o(4962).lZ)(),
                                    name : (null == t ? void 0 : t.name) ? ? i,
                                    moduleId : (null == t ? void 0 : t.moduleId) ? ? y,
                                    enabled : a,
                                    state : r
                                }
                            },
                            v = { ...l,
                                [n]: d
                            },
                            I = [],
                            k = w("notion.button.pressed"),
                            A = (null == k || null == (a = k.state) ? void 0 : a.type) === "notion.button.pressed" ? k.state : {
                                type: "notion.button.pressed",
                                collectionId: u
                            };
                        I.push(b({
                            existing: k,
                            defaultName: "Database agent manually triggered",
                            enabled: !0,
                            state: A
                        }));
                        let C = w("notion.page.updated"),
                            P = (null == C || null == (c = C.state) ? void 0 : c.type) === "notion.page.updated" ? C.state : void 0,
                            S = v.shouldTriggerOnPageContentUpdate || v.shouldTriggerOnPropertyUpdate;
                        (S || C) && I.push(b({
                            existing: C,
                            defaultName: "Page Updated",
                            enabled: S,
                            state: { ...P ? ? {},
                                type : "notion.page.updated",
                                collectionId : u,
                                ...S && {
                                    shouldIgnorePageContentUpdates: v.shouldTriggerOnPropertyUpdate && !v.shouldTriggerOnPageContentUpdate
                                }
                            }
                        }));
                        let _ = w("notion.page.created"),
                            T = (null == _ || null == (f = _.state) ? void 0 : f.type) === "notion.page.created" ? _.state : void 0;
                        (v.shouldTriggerOnPageCreate || _) && I.push(b({
                            existing: _,
                            defaultName: "Page Created",
                            enabled: v.shouldTriggerOnPageCreate,
                            state: { ...T ? ? {},
                                type : "notion.page.created",
                                collectionId : u,
                                ...void 0 !== v.pageCreatedViewId && {
                                    viewId: v.pageCreatedViewId
                                }
                            }
                        }));
                        let D = w("recurrence"),
                            N = (null == D || null == (g = D.state) ? void 0 : g.type) === "recurrence" ? D.state : void 0;
                        if (v.shouldTriggerOnRecurrence && v.recurrenceConfig || D) {
                            let e = v.recurrenceConfig ? (0, o(832248).es)(v.recurrenceConfig) : void 0,
                                t = N && "recurrence" === N.type ? { ...N,
                                    ...e ? ? {},
                                    collectionId : u,
                                    ...void 0 !== v.recurrenceViewId && {
                                        viewId: v.recurrenceViewId
                                    }
                                } : e ? {
                                    type: "recurrence",
                                    collectionId: u,
                                    ...e,
                                    ...void 0 !== v.recurrenceViewId && {
                                        viewId: v.recurrenceViewId
                                    }
                                } : void 0;
                            I.push(b({
                                existing: D,
                                defaultName: "Recurring Schedule",
                                enabled: !!(v.shouldTriggerOnRecurrence && v.recurrenceConfig),
                                state: t
                            }))
                        }
                        let M = {
                            command: "update",
                            path: ["data"],
                            args: {
                                triggers: I
                            },
                            pointer: {
                                id: t.id,
                                table: s().C0E,
                                spaceId: r
                            }
                        };
                        (0, p().y4)({
                            store: t,
                            operation: M,
                            transaction: e
                        })
                    }
                })
            }

            function C(e) {
                let {
                    workflowStore: t,
                    environment: i,
                    spaceId: a,
                    newSearchStates: r
                } = e;
                (0, o(377796).createAndCommit)({
                    userAction: "CollectionSettingsPropertyAgentAutofill.updateSearchPermissions",
                    environment: i,
                    cellTarget: {
                        spaceWithId: a
                    },
                    canUndo: !0,
                    perform: e => {
                        var o, i;
                        let l = t.getDraftData() ? ? t.getData();
                        if (!(null != l && l.modules)) return;
                        let n = l.modules.find(e => "notion" === e.type);
                        if (!n || "notion" !== n.type) return;
                        let d = n.permissions ? ? [];
                        d = r.canSearchWorkspace ? (o = d).find(e => "notion" === e.type && "workspacePublic" === e.identifier.type) ? o : [...o, {
                            moduleType: "notion",
                            type: "notion",
                            identifier: {
                                type: "workspacePublic"
                            },
                            actions: ["reader"]
                        }] : d.filter(e => "notion" !== e.type || "workspacePublic" !== e.identifier.type), d = r.canSearchWeb ? (i = d).find(e => "search" === e.type && "web" === e.identifier.type) ? i : [...i, {
                            moduleType: "notion",
                            type: "search",
                            identifier: {
                                type: "web"
                            },
                            actions: ["allow"]
                        }] : d.filter(e => "search" !== e.type || "web" !== e.identifier.type);
                        let u = {
                            command: "set",
                            path: ["data", "modules"],
                            args: l.modules.map(e => "notion" === e.type ? { ...e,
                                permissions: d
                            } : e),
                            pointer: {
                                id: t.id,
                                table: s().C0E,
                                spaceId: a
                            }
                        };
                        (0, p().y4)({
                            store: t,
                            operation: u,
                            transaction: e
                        })
                    }
                }), (0, o(599231).G1)({
                    workflowId: t.id,
                    spaceId: a,
                    canSearchWorkspace: r.canSearchWorkspace,
                    canSearchWeb: r.canSearchWeb
                })
            }

            function P(e) {
                let {
                    workflowStore: t,
                    environment: i,
                    spaceId: a,
                    newName: r
                } = e;
                (0, o(377796).createAndCommit)({
                    userAction: "CollectionSettingsPropertyAgentAutofill.updateName",
                    environment: i,
                    cellTarget: {
                        spaceWithId: a
                    },
                    canUndo: !0,
                    perform: e => {
                        let o = t.getDraftData() ? ? t.getData();
                        if (!(null != o && o.modules)) return;
                        let i = {
                            command: "set",
                            path: ["data", "name"],
                            args: r,
                            pointer: {
                                id: t.id,
                                table: s().C0E,
                                spaceId: a
                            }
                        };
                        (0, p().y4)({
                            store: t,
                            operation: i,
                            transaction: e
                        })
                    }
                })
            }

            function S(e) {
                let {
                    workflowStore: t,
                    environment: i,
                    spaceId: a,
                    isLite: r
                } = e;
                (0, o(377796).createAndCommit)({
                    userAction: "CollectionSettingsPropertyAgentAutofill.updateIsLite",
                    environment: i,
                    cellTarget: {
                        spaceWithId: a
                    },
                    canUndo: !0,
                    perform: e => {
                        let o = {
                            command: "set",
                            path: ["data", "isLite"],
                            args: r,
                            pointer: {
                                id: t.id,
                                table: s().C0E,
                                spaceId: a
                            }
                        };
                        (0, p().y4)({
                            store: t,
                            operation: o,
                            transaction: e
                        })
                    }
                })
            }

            function _(e) {
                let {
                    workflowStore: t,
                    collectionStore: i,
                    environment: a,
                    intl: r,
                    spaceId: l,
                    selectedProperties: n
                } = e, d = t.getDraftData() ? ? t.getData(), c = i.getSpaceShardedPointer();
                (0, o(377796).createAndCommit)({
                    userAction: "CollectionSettingsPropertyAgentAutofill.updateSelectedProperties",
                    environment: a,
                    cellTarget: {
                        spaceWithId: l
                    },
                    canUndo: !0,
                    perform: e => {
                        var a;
                        if (!(null != d && d.modules)) return;
                        let m = d.modules.find(e => "notion" === e.type),
                            h = (null == m ? void 0 : m.type) === "notion" ? (null == (a = m.state) ? void 0 : a.ownedByDatabasePropertyIds) ? ? [] : [],
                            y = h.filter(e => !n.includes(e)),
                            w = n.filter(e => !h.includes(e)),
                            b = i.getSchema();
                        for (let o of y) {
                            let a = null == b ? void 0 : b[o];
                            if (a && a.default_workflow_id === t.id) {
                                let t = (0, u().rK)({
                                    collectionPointer: c,
                                    propertyId: o
                                });
                                (0, p().y4)({
                                    store: i,
                                    operation: t,
                                    transaction: e
                                })
                            }
                        }
                        for (let o of w) {
                            let a = null == b ? void 0 : b[o];
                            if (a && !a.default_workflow_id) {
                                let a = (0, u().Eq)({
                                    collectionPointer: c,
                                    propertyId: o,
                                    workflowId: t.id
                                });
                                (0, p().y4)({
                                    store: i,
                                    operation: a,
                                    transaction: e
                                })
                            }
                        }
                        let v = (null == m ? void 0 : m.type) === "notion" ? [...m.permissions ? ? []] : [],
                            I = T({
                                selectedProperties: y,
                                collectionSchema: b,
                                collectionStore: i,
                                spaceId: l
                            }),
                            k = T({
                                selectedProperties: w,
                                collectionSchema: b,
                                collectionStore: i,
                                spaceId: l
                            }),
                            A = new Set(T({
                                selectedProperties: n,
                                collectionSchema: b,
                                collectionStore: i,
                                spaceId: l
                            }));
                        for (let e of I) A.has(e) || (v = function(e, t) {
                            return e.filter(e => !!("notion" !== e.type || "pageOrCollectionViewBlock" !== e.identifier.type || e.identifier.blockId !== t || e.actions.includes("read_and_write")))
                        }(v, e));
                        for (let e of k) v = function(e, t) {
                            return e.find(e => "notion" === e.type && "pageOrCollectionViewBlock" === e.identifier.type && e.identifier.blockId === t) ? e : [...e, {
                                moduleType: "notion",
                                type: "notion",
                                identifier: {
                                    type: "pageOrCollectionViewBlock",
                                    blockId: t
                                },
                                actions: ["reader"]
                            }]
                        }(v, e);
                        let C = {
                            command: "set",
                            path: ["data", "modules"],
                            args: d.modules.map(e => "notion" === e.type ? { ...e,
                                state: { ...e.state,
                                    ownedByDatabasePropertyIds: n
                                },
                                permissions: v
                            } : e),
                            pointer: {
                                id: t.id,
                                table: s().C0E,
                                spaceId: l
                            }
                        };
                        (0, p().y4)({
                            store: t,
                            operation: C,
                            transaction: e
                        });
                        let P = function(e) {
                            let {
                                selectedPropertyIds: t,
                                collectionSchema: i,
                                intl: a,
                                isLite: r
                            } = e;
                            if (!i || 0 === t.length) return "";
                            let l = [];
                            for (let e of t) {
                                var n;
                                let t = null == (n = i[e]) ? void 0 : n.name;
                                t && l.push(t)
                            }
                            if (0 === l.length) return "";
                            let s = (0, o(890142).l)(l);
                            return a.formatMessage(r ? f.autofillProperties : f.databaseAgentProperties, {
                                propertyList: s
                            })
                        }({
                            selectedPropertyIds: n,
                            collectionSchema: b,
                            intl: r,
                            isLite: g(t)
                        });
                        if (P) {
                            let i = (0, o(861988).i)({
                                pointer: {
                                    id: t.id,
                                    table: s().C0E,
                                    spaceId: l
                                },
                                name: P
                            });
                            (0, p().y4)({
                                store: t,
                                operation: i,
                                transaction: e
                            })
                        }
                    }
                }), (0, o(599231).H)({
                    workflowId: t.id,
                    spaceId: l,
                    numProperties: n.length
                })
            }

            function T(e) {
                let {
                    selectedProperties: t,
                    collectionSchema: o,
                    collectionStore: i,
                    spaceId: a
                } = e, d = [];
                for (let e of t) {
                    let t = null == o ? void 0 : o[e];
                    if ((null == t ? void 0 : t.type) === "relation") {
                        let e = (0, l().z)(t);
                        if (e) {
                            let t = r().m.createChildStore(i, {
                                table: s().VlP,
                                id: e,
                                spaceId: a
                            }).getParentPointer();
                            null != t && t.id && (0, n().Yt)(t, s().evP) && d.push(t.id)
                        }
                    }
                }
                return d
            }

            function D(e) {
                let {
                    workflowStore: t,
                    collectionStore: i,
                    collectionViewBlockStore: a,
                    environment: r,
                    spaceId: l
                } = e;
                if (!a || !l) return;
                let n = i.getSpaceShardedPointer();
                (0, o(377796).createAndCommit)({
                    environment: r,
                    userAction: "CollectionViewAgentsMenu.deleteAgent",
                    cellTarget: {
                        spaceWithId: l
                    },
                    canUndo: !0,
                    perform: e => {
                        (0, p().y4)({
                            store: t,
                            transaction: e,
                            operation: {
                                pointer: t.pointer,
                                command: "set",
                                path: ["alive"],
                                args: !1
                            }
                        });
                        let o = a.getFormat() || {},
                            r = "database_agent_ids" in o && o.database_agent_ids || [],
                            d = r.filter(e => e !== t.id);
                        r.length !== d.length && (0, p().y4)({
                            store: a,
                            transaction: e,
                            operation: {
                                pointer: {
                                    id: a.id,
                                    table: s().evP,
                                    spaceId: l
                                },
                                command: "set",
                                path: ["format", "database_agent_ids"],
                                args: d
                            }
                        });
                        let c = i.getSchema();
                        if (c) {
                            for (let [o, a] of Object.entries(c))
                                if ((null == a ? void 0 : a.default_workflow_id) === t.id) {
                                    let t = (0, u().rK)({
                                        collectionPointer: n,
                                        propertyId: o
                                    });
                                    (0, p().y4)({
                                        store: i,
                                        transaction: e,
                                        operation: t
                                    })
                                }
                        }
                    }
                }), (0, o(599231).dQ)({
                    workflowId: t.id,
                    spaceId: l
                })
            }

            function N(e) {
                let {
                    collectionStore: t,
                    environment: a,
                    property: r
                } = e, l = t.getSpaceId(), n = t.getParentCollectionViewBlockStore();
                i().ok(n);
                let s = (0, o(772966).so)({
                    collectionStore: t,
                    spaceId: l
                });
                for (let e of (i().ok(!s.error), (0, o(772966).gY)({
                        workflowsData: s.value,
                        collectionViewBlockStore: n,
                        currentCollectionStore: t,
                        property: r,
                        spaceId: l
                    }))) D({
                    workflowStore: e,
                    collectionStore: t,
                    collectionViewBlockStore: n,
                    environment: a,
                    spaceId: l
                })
            }

            function M(e) {
                let {
                    blockStore: t,
                    propertyIds: i,
                    environment: a
                } = e;
                if (0 === i.length) return;
                let r = t.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "agentWorkflowCreatingTask",
                    environment: a,
                    cellTarget: r ? {
                        spaceWithId: r
                    } : void 0,
                    canUndo: !1,
                    perform: e => {
                        i.map(e => o(488307).op.update({
                            pointer: t.pointer,
                            path: ["format", "agent_workflow_status"],
                            args: {
                                [e]: {
                                    type: "creatingTask",
                                    createdAtMs: Date.now()
                                }
                            }
                        })).forEach(o => {
                            (0, p().y4)({
                                store: t,
                                operation: o,
                                transaction: e
                            })
                        })
                    }
                })
            }
        },
        572473: (e, t, o) => {
            o.d(t, {
                W: () => l,
                e: () => n
            }), o(16280), o(944114);
            var i = () => o(517013),
                a = () => o(421439);
            let r = (0, o(109939).YK)({
                    autofillSingleProperty: {
                        id: "createClientDbAgentWithTriggers.autofillSingleProperty",
                        defaultMessage: "Autofill {property1}"
                    },
                    databaseAgentSingleProperty: {
                        id: "createClientDbAgentWithTriggers.databaseAgentSingleProperty",
                        defaultMessage: "{property1} agent"
                    },
                    fillPropertyInstruction: {
                        id: "createClientDbAgentWithTriggers.fillPropertyInstruction",
                        defaultMessage: "Fill in the {propertyName} property in this database."
                    }
                }),
                l = {
                    shouldTriggerOnPageContentUpdate: !1,
                    shouldTriggerOnPageCreate: !1,
                    shouldTriggerOnPropertyUpdate: !1,
                    shouldTriggerOnRecurrence: !1,
                    recurrenceConfig: void 0,
                    recurrenceViewId: void 0,
                    pageCreatedViewId: void 0
                };
            async function n(e) {
                var t;
                let {
                    environment: n,
                    collectionStore: s,
                    intl: d,
                    isLite: u,
                    model: c,
                    propertyId: p,
                    propertySchema: f,
                    collectionContextStore: g,
                    includeInstructions: m = !1,
                    customInstructionText: h,
                    initialInstructionText: y,
                    shouldPublishAgent: w = !1
                } = e, b = s.getSpaceId(), v = s.id, I = n.currentUser.id;
                if (!I) throw Error("User ID is required to create agent");
                let k = await n.idCreator.idWithSpaceId(b, o(832375).C0E),
                    A = s.getParentId();
                if (s.getParentTable() !== o(832375).evP || !A) throw Error("Collection must have a parent block to attach agent");
                let C = {
                        table: o(832375).evP,
                        id: A,
                        spaceId: b
                    },
                    P = d.formatMessage(u ? r.autofillSingleProperty : r.databaseAgentSingleProperty, {
                        property1: f.name
                    }),
                    S = [{
                        moduleType: "notion",
                        type: "notion",
                        identifier: {
                            type: "pageOrCollectionViewBlock",
                            blockId: A
                        },
                        actions: ["read_and_write"]
                    }, {
                        moduleType: "notion",
                        type: "notion",
                        identifier: {
                            type: "workspacePublic"
                        },
                        actions: ["reader"]
                    }, {
                        moduleType: "notion",
                        type: "search",
                        identifier: {
                            type: "web"
                        },
                        actions: ["allow"]
                    }];
                if ("relation" === f.type) {
                    let e = (0, o(114588).z)(f);
                    if (e) {
                        let t = o(356912).m.createChildStore(s, {
                            table: o(832375).VlP,
                            id: e,
                            spaceId: b
                        }).getParentPointer();
                        null != t && t.id && (0, o(496282).Yt)(t, o(832375).evP) && S.push({
                            moduleType: "notion",
                            type: "notion",
                            identifier: {
                                type: "pageOrCollectionViewBlock",
                                blockId: t.id
                            },
                            actions: ["reader"]
                        })
                    }
                }
                let _ = {
                        type: "notion",
                        id: (0, o(4962).Ay)(),
                        name: P,
                        version: o(445568).notion.latestVersion,
                        permissions: S,
                        state: {
                            ownedByDatabasePropertyIds: [p]
                        }
                    },
                    T = (null == (t = g.remoteResultStore.state) ? void 0 : t.sizeHint) ? ? 1e3,
                    D = void 0 !== h ? (0, o(247438).x9d)(h) : m ? (0, o(247438).x9d)(y ? ? d.formatMessage(r.fillPropertyInstruction, {
                        propertyName: f.name
                    })) : [],
                    N = {
                        name: P,
                        icon: o(986939).A.domainBaseUrl ? (0, o(337222).vl)(o(986939).A.domainBaseUrl) : void 0,
                        triggers: [],
                        instructions: D,
                        modules: [_],
                        ...void 0 !== c ? {
                            model: c
                        } : void 0,
                        usage_limit: {
                            type: "runLimit",
                            maximum: Math.max(5 * T, 1e3)
                        },
                        isLite: u
                    },
                    {
                        operations: M,
                        model: W
                    } = o(993189).Bgh.create({
                        id: k,
                        parentPointer: C,
                        space_id: b,
                        data: N,
                        createdByPointer: {
                            table: o(832375).oo9,
                            id: I
                        }
                    }),
                    x = [];
                for (let e of function(e) {
                        let {
                            collectionId: t,
                            shouldTriggerOnPageContentUpdate: i,
                            shouldTriggerOnPageCreate: a,
                            shouldTriggerOnRecurrence: r,
                            recurrenceConfig: l,
                            notionModuleId: n
                        } = e, s = [{
                            id: (0, o(4962).Ay)(),
                            name: "Database agent manually triggered",
                            moduleId: n,
                            enabled: !0,
                            state: {
                                type: "notion.button.pressed",
                                collectionId: t
                            }
                        }];
                        if (i) {
                            let e = {
                                id: (0, o(4962).Ay)(),
                                name: "Page Updated",
                                moduleId: n,
                                enabled: !0,
                                state: {
                                    type: "notion.page.updated",
                                    collectionId: t,
                                    shouldIgnorePageContentUpdates: !i
                                }
                            };
                            s.push(e)
                        }
                        if (a) {
                            let e = {
                                id: (0, o(4962).Ay)(),
                                name: "Page Created",
                                moduleId: n,
                                enabled: !0,
                                state: {
                                    type: "notion.page.created",
                                    collectionId: t
                                }
                            };
                            s.push(e)
                        }
                        if (r && l) {
                            let e = (0, o(832248).es)(l),
                                i = {
                                    id: (0, o(4962).Ay)(),
                                    name: "Recurring Schedule",
                                    moduleId: n,
                                    enabled: !0,
                                    state: {
                                        type: "recurrence",
                                        collectionId: t,
                                        ...e
                                    }
                                };
                            s.push(i)
                        }
                        return s
                    }({ ...l,
                        collectionId: v,
                        notionModuleId: _.id
                    })) {
                    let t = {
                        pointer: W.pointer,
                        command: "keyedObjectListAfter",
                        path: ["data", "triggers"],
                        args: {
                            value: e
                        }
                    };
                    x.push(t)
                }
                let B = {
                        command: "listAfter",
                        path: ["format", "database_agent_ids"],
                        pointer: C,
                        args: {
                            id: W.id
                        }
                    },
                    R = s.getParentStore();
                if (!R) throw Error("Collection must have a parent store");
                let E = [...x, B],
                    U = s.pointer,
                    V = s.getSchema()[p];
                (null == V ? void 0 : V.default_workflow_id) === void 0 && V && E.push({
                    pointer: U,
                    command: "set",
                    path: ["schema", p, "default_workflow_id"],
                    args: k
                });
                let {
                    serverCommitResult: O
                } = (0, o(377796).createAndCommit)({
                    userAction: "TableHeaderCellMenu.createClientDbAgentWithTriggers",
                    environment: n,
                    canUndo: !1,
                    cellTarget: {
                        spaceWithId: b
                    },
                    perform: e => {
                        for (let t of M)(0, a().y4)({
                            store: (0, i().v3)(R, t.pointer),
                            operation: t,
                            transaction: e
                        });
                        for (let t of E)(0, a().y4)({
                            store: (0, i().v3)(R, t.pointer),
                            operation: t,
                            transaction: e
                        })
                    }
                }), F = [...M, ...E];
                if (await O, void 0 !== h) {
                    let e = o(360851).N.createChildStore(R, {
                        table: o(832375).C0E,
                        id: k,
                        spaceId: b
                    });
                    await (0, o(171270).J)({
                        workflowStore: e,
                        environment: n,
                        title: P,
                        draftInstructions: (0, o(247438).x9d)(h)
                    })
                }
                return (0, o(599231).Ql)({
                    workflowId: k,
                    creationMethod: "database_agent"
                }), w && await n.api.callApi({
                    eventName: "publishCustomAgentVersion",
                    environment: n,
                    data: {
                        workflowId: k,
                        spaceId: b
                    }
                }), {
                    workflowId: k,
                    operations: F
                }
            }
        },
        906659: (e, t, o) => {
            function i(e) {
                return `db_agent_subscription_key_${e}`
            }

            function a({
                schema: e,
                isLite: t
            }) {
                return t ? (0, o(9247).$M)(e) : r(e)
            }

            function r(e) {
                switch (e.type) {
                    case "text":
                    case "checkbox":
                    case "date":
                    case "email":
                    case "number":
                    case "phone_number":
                    case "person":
                    case "multi_select":
                    case "status":
                    case "select":
                    case "url":
                    case "title":
                    case "relation":
                        return !0;
                    case "rollup":
                    case "verification":
                    case "place":
                    case "last_edited_time":
                    case "file":
                    case "last_edited_by":
                    case "last_visited_time":
                    case "location":
                    case "created_time":
                    case "created_by":
                    case "auto_increment_id":
                    case "formula":
                    case "button":
                        return !1;
                    default:
                        (0, o(722371).HB)(e)
                }
            }
            o.d(t, {
                $i: () => i,
                CK: () => a,
                Ky: () => r,
                jE: () => n,
                mz: () => l
            });
            let l = 2e4,
                n = 100
        }
    }
]);