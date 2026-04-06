"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [2411, 40600, 90871], {
        5556: (e, t, o) => {
            o.d(t, {
                u: () => r
            });

            function r(e) {
                let {
                    blocks: t,
                    transaction: r
                } = e;
                if (1 === t.length) {
                    let e = t[0];
                    e && o(966980).wm(e) && (0, o(210191).T)({
                        store: e,
                        transaction: r
                    })
                }
            }
        },
        85071: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => r,
                integrationIcon: () => a
            }), o(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                a = (0, o(104509).wt)("integration", r, "default")
        },
        95783: (e, t, o) => {
            o.d(t, {
                w: () => r
            }), o(16280), o(18107), o(967357), o(898992), o(737550);

            function r(e) {
                var t, r, a, i, l, n;
                let {
                    environment: s,
                    createBlockItem: c,
                    from: d,
                    inMemoryRecordCache: u,
                    transaction: p,
                    selection: g
                } = e;
                if (!c.templateRootBlockId || !c.createTemplate) throw Error("Invalid createBlock item.");
                let m = (g.length > 0 ? g[0].getSpaceId() : void 0) ? ? e.spaceId ? ? (null == (t = o(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.getSpaceId()),
                    h = m ? s.idCreator.getSpaceIdCreatorSync(m) : void 0,
                    f = g.some(e => (0, o(398346).l)(e)),
                    k = c.createTemplate(s),
                    {
                        targetBlockStore: v
                    } = (0, o(963771).initializeTemplate)({
                        environment: s,
                        sourceBlockId: c.templateRootBlockId,
                        targetBlockPointer: (0, o(295447).zP)({
                            environment: s,
                            table: o(832375).evP,
                            spaceId: m
                        }),
                        sourceBlockSubtree: (0, o(412951).partialRecordMapToRecordMap)(k),
                        targetRecordCache: u,
                        transaction: p,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !f,
                        spaceIdCreator: h
                    });
                null == (r = c.postCreateCallback) || r.call(c, v, s, p);
                let [b] = g;
                if (o(205103).eY({
                        environment: s,
                        store: v,
                        transaction: p,
                        previousStore: b
                    }), d && c.blockType) {
                    let e, t, r, u, p = c.collectionViewType,
                        m = 0 !== g.length ? null == (a = g[0]) ? void 0 : a.getParentCollectionIdUpToTwoLevels() : void 0;
                    if ("chart" === p) {
                        let o = null == (i = v.getCollectionViewStores()) ? void 0 : i.at(0);
                        e = null == o || null == (l = o.getChartConfig()) ? void 0 : l.type, t = null == o ? void 0 : o.getChartPlaceholderType()
                    }
                    if ("form_editor" === p) {
                        let e = null == (n = v.getCollectionViewStores()) ? void 0 : n.at(0),
                            t = null == e ? void 0 : e.getFormBlockStore();
                        r = null == t ? void 0 : t.id, u = null == e ? void 0 : e.id
                    }
                    let {
                        collectionId: h,
                        ownedCollectionCount: f,
                        linkedCollectionCount: k
                    } = (0, o(633171).P)(v, {
                        skipPages: !1
                    }), b = {
                        from: d,
                        collection_id: h,
                        owned_collection_count: f,
                        linked_collection_count: k,
                        view_type: "inline" === p || "full_page" === p ? "table" : p,
                        is_toggleable: c.isToggleable,
                        automation_id: v.getAutomationId(),
                        new_page_id: "page" === c.blockType ? v.id : void 0,
                        creating_block_id: v.id,
                        parent_collection_id: m,
                        is_full_screen: "full_page" === p,
                        chart_type: "placeholder" === e ? t : e,
                        is_chart_placeholder: "placeholder" === e,
                        form_id: r,
                        view_id: u
                    }, _ = c.blockType;
                    o(549960).tP(_) ? o(549960).vH(s, { ...b,
                        type: _,
                        collection_id: h || ""
                    }) : o(549960).vH(s, { ...b,
                        type: _
                    })
                }
                return v
            }
        },
        150945: (e, t, o) => {
            function r(e) {
                let t, {
                        environment: r,
                        createBlockItem: a,
                        selection: i,
                        transaction: l,
                        analyticsFrom: n,
                        preventSetSelection: s
                    } = e,
                    c = o(584265).default.getCurrentRecordCache(),
                    d = new(o(303541)).UF({
                        environment: r,
                        userFlow: (null == a ? void 0 : a.blockType) === "page" ? "user_flow_create_page" : "user_flow_create_block",
                        from: n,
                        succeedOnEnqueue: !0
                    });
                if ((0, o(194020).E)(r, (0, o(974410).f)(i[0])) && a && c) {
                    let e = o(95783).w({
                        environment: r,
                        createBlockItem: a,
                        transaction: l,
                        inMemoryRecordCache: c,
                        from: n,
                        selection: i
                    });
                    d.track(e.pointer, l), t = (0, o(210318).L)({
                        environment: r,
                        blocksToInsert: [e],
                        target: i,
                        transaction: l,
                        replaceEmptyTextBlock: !1,
                        preventSetSelection: s
                    })[0]
                } else d.fail("invalid_state");
                return t
            }

            function a(e) {
                let t, {
                        environment: r,
                        createBlockItem: a,
                        selection: i,
                        transaction: l,
                        analyticsFrom: n,
                        preventSetSelection: s
                    } = e,
                    c = o(584265).default.getCurrentRecordCache();
                if ((0, o(194020).E)(r, (0, o(974410).f)(i[0])) && a && c) {
                    let e = o(95783).w({
                        environment: r,
                        createBlockItem: a,
                        transaction: l,
                        inMemoryRecordCache: c,
                        from: n,
                        selection: i
                    });
                    t = (0, o(199894).t)({
                        environment: r,
                        blocks: [e],
                        selection: i,
                        transaction: l,
                        preventSetSelection: s
                    })[0]
                }
                return t
            }

            function i(e) {
                let {
                    environment: t,
                    selection: a,
                    transaction: i
                } = e, l = r({ ...e,
                    preventSetSelection: !0
                });
                if (l) {
                    var n;
                    (0, o(270819).x)({
                        environment: t,
                        insertedStores: [l],
                        isCreated: !0
                    });
                    let e = o(708929).Uv.getMode(l);
                    if ("suggest" === e) {
                        let e = (0, o(714577).R)(t, i, l);
                        (0, o(132993).t)(i, l, {
                            id: o(92513).JW(),
                            type: "insert",
                            discussionId: e.id
                        }), (0, o(941538).c)({
                            environment: t,
                            transaction: i,
                            discussionStore: e,
                            addModifiedBlockIdsAfter: [l.id]
                        })
                    }
                    "suggest" === e && null != (n = l.getNavigableBlockStore({
                        skipCurrent: !0
                    })) && n.isCommentOnly() || (0, o(5556).u)({
                        transaction: i,
                        blocks: a
                    })
                }
                return l
            }

            function l(e) {
                let {
                    blocks: t,
                    transaction: a,
                    environment: i,
                    skipAnalytics: l
                } = e, n = r({
                    environment: i,
                    selection: t,
                    createBlockItem: o(992140).ry.text,
                    analyticsFrom: l ? void 0 : "text_insert_below",
                    transaction: a
                });
                return n && o(374176).default.afterNextFlush(() => {
                    (0, o(464515).z)({
                        environment: i,
                        blockStore: n,
                        insertedTextBlockLocation: "below",
                        editSelection: o(182553).h,
                        getRectFromStore: o(240414).T.getRectFromStore.bind(o(240414).T)
                    })
                }), n
            }

            function n(e) {
                let {
                    blocks: t,
                    transaction: r,
                    environment: i,
                    skipAnalytics: l
                } = e, n = a({
                    environment: i,
                    selection: t,
                    createBlockItem: o(992140).ry.text,
                    analyticsFrom: l ? void 0 : "text_insert_below",
                    transaction: r
                });
                return n && o(374176).default.afterNextFlush(() => {
                    (0, o(464515).z)({
                        environment: i,
                        blockStore: n,
                        insertedTextBlockLocation: "above",
                        editSelection: o(182553).h,
                        getRectFromStore: o(240414).T.getRectFromStore.bind(o(240414).T)
                    })
                }), n
            }
            o.r(t), o.d(t, {
                insertBlockAbove: () => a,
                insertBlockAndEdit: () => i,
                insertBlockBelow: () => r,
                insertTextAbove: () => n,
                insertTextBelow: () => l
            })
        },
        199894: (e, t, o) => {
            o.d(t, {
                t: () => r
            }), o(16280), o(898992), o(672577), o(581454);

            function r(e) {
                let {
                    environment: t,
                    selection: r,
                    transaction: a,
                    preventSetSelection: i
                } = e, {
                    blocks: l
                } = e, n = (0, o(385941).Z)();
                if (!n) throw Error("No root store.");
                if (r.length > 0) {
                    let e = r[0],
                        n = o(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!n || !n.props.onInsertAbove) throw Error("No Selectable found.");
                    let s = n.props.onInsertAbove({
                        insertStores: l,
                        transaction: a
                    });
                    return i || (0, o(854924).t)({
                        environment: t,
                        stores: s
                    }), s
                } {
                    let e = n.getContentStore(),
                        r = l.map(t => (0, o(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: a
                        }).childStore);
                    return i || (0, o(854924).t)({
                        environment: t,
                        stores: r
                    }), r
                }
            }
        },
        285482: (e, t, o) => {
            o.d(t, {
                A: () => r
            });

            function r(e, t) {
                if ((0, o(101787).pA8)(t)) {
                    let r = (0, o(115964).$)(t.clientData);
                    if (r) return "messageValues" in t.clientData ? e.formatMessage(r, t.clientData.messageValues) : e.formatMessage(r)
                }
                return e.formatMessage(o(683646).k.generic_error)
            }
        },
        425749: (e, t, o) => {
            o.d(t, {
                I$: () => l,
                R2: () => c,
                WF: () => s,
                bZ: () => n,
                cE: () => a,
                jX: () => i,
                rz: () => d
            });
            var r = () => o(381453);

            function a(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let i = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function l(e) {
                return !!(void 0 !== e && (0, o(722371).Xk)(i, e))
            }

            function n() {
                let e = (0, o(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: o(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, o(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function s(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let c = [{
                type: "everything"
            }];

            function d(e) {
                for (let t of c)
                    if (r().n4(e, t)) return !0;
                return !1
            }
        },
        450228: (e, t, o) => {
            o.r(t), o.d(t, {
                duplicateBlock: () => g
            }), o(16280), o(898992), o(823215), o(581454), o(737550);
            var r = () => o(728372);
            class a {
                metricName;
                startMetric;
                prevLapMetric;
                extraData;
                constructor(e) {
                    this.metricName = e.metricName, this.startMetric = o(680007).default.mark(e.metricName), this.prevLapMetric = o(680007).default.mark(e.metricName), this.extraData = e.extraData ? ? {}
                }
                mark(e) {
                    o(680007).default.measure(this.prevLapMetric, {
                        data: {
                            type: e,
                            ...this.extraData
                        },
                        sampleDecision: "default"
                    }), this.prevLapMetric = o(680007).default.mark(this.metricName)
                }
                end() {
                    o(680007).default.measure(this.startMetric, {
                        data: {
                            type: "total",
                            ...this.extraData
                        },
                        sampleDecision: "default"
                    })
                }
            }
            var i = () => o(746473),
                l = () => o(681735),
                n = () => o(955630),
                s = () => o(832375),
                c = () => o(549960),
                d = () => o(205103),
                u = () => o(633171);
            let p = (0, o(109939).YK)({
                blocksDuplicated: {
                    id: "duplication.a11y.blocksDuplicated",
                    defaultMessage: "{count, plural, one {# block duplicated} other {# blocks duplicated}}"
                }
            });

            function g(e) {
                if (e.skipUserFacingMessages) return m(e);
                let t = o(617154).CU({
                    sourceBlocks: e.stores
                });
                try {
                    let r = m({ ...e,
                        onRedundantDuplicationError: () => {
                            (0, o(977283).Yv)()
                        }
                    });
                    return { ...r,
                        onComplete: r.onComplete.then(r => ("success" === r.status ? (o(617154).MK(t), (0, o(663123).l)(o(962299).A.formatMessage(p.blocksDuplicated, {
                            count: e.stores.length
                        }))) : o(617154).UO(t), r)).catch(e => {
                            throw o(617154).UO(t), e
                        })
                    }
                } catch (e) {
                    throw o(617154).UO(t), e
                }
            }

            function m(e) {
                let {
                    environment: t,
                    stores: p,
                    transaction: g,
                    targetSpaceId: m,
                    executionTarget: h,
                    from: f,
                    options: k,
                    installationImprint: v,
                    templateInstallationMetadata: b,
                    shouldUseSynchronousDuplicationAPI: _,
                    skipUserFacingMessages: y,
                    onRedundantDuplicationError: S
                } = e, w = "local" === (o(730125).A.getState().executionTarget ? ? h) ? "local_duplication" : _ ? "server_synchronous_duplication" : "server_duplication", C = new a({
                    metricName: "duplicate_block_stopwatch",
                    extraData: {
                        duplication_type: w,
                        from: f
                    }
                });
                if (0 === p.length) throw Error("Must duplicate at least one block");
                let x = p[0].getSpaceId();
                if (!p.every(e => e.getSpaceId() === x)) throw Error("All stores must be in the same space");
                if (p.length > 1 && !k.useSharedContext && !p.every(e => e.isTypedCollectionViewBlock())) throw Error("Multiple source blocks only supported for grouped typed DB duplication unless useSharedContext option is true");
                (function(e) {
                    let {
                        environment: t,
                        stores: o
                    } = e;
                    for (let e of o) {
                        let o, a = (0, i().zH)(e).getValue();
                        if (!a) continue;
                        let d = r().AppStoreSidebarSpaceStore.state;
                        d && a.parent_table === s().yKj && (o = l().h.createChildStore(d, {
                            table: s().yKj,
                            id: a.parent_id
                        }));
                        let {
                            collectionId: p,
                            ownedCollectionCount: g,
                            linkedCollectionCount: m
                        } = (0, u().P)(e, {
                            skipPages: !1
                        }), h = {
                            from: "copy",
                            type: a.type,
                            teamStore: o,
                            is_toggleable: (0, n().Yt)(a.type, a.format),
                            collection_id: p,
                            owned_collection_count: g,
                            linked_collection_count: m,
                            new_page_id: "page" === a.type ? e.id : void 0,
                            creating_block_id: e.id,
                            parent_collection_id: e.getParentCollectionIdUpToTwoLevels(),
                            form_id: e.getFirstFormIdInCollectionViewBlock()
                        };
                        c().tP(a.type) ? c().vH(t, { ...h,
                            type: a.type,
                            collection_id: p || ""
                        }) : c().vH(t, { ...h,
                            type: a.type
                        })
                    }
                })({
                    environment: t,
                    stores: p
                }), C.mark("track_create_blocks"), k.convertExternalObjectInstancesToPlaceholders = x !== m;
                let T = b && (0, o(252822).Fe)(b.source) && b.isListedTemplate;
                if (1 === p.length && "local_duplication" === w && !T) {
                    let e = p[0],
                        r = (0, o(44226).tryLocalDuplicateWithTransaction)({
                            environment: t,
                            store: e,
                            options: k,
                            sourceSpaceId: x,
                            targetSpaceId: m,
                            transaction: g,
                            installationImprint: v,
                            templateInstallationMetadata: b,
                            stopwatch: C,
                            from: f,
                            destinationTable: e.getParentTable()
                        });
                    if (r) {
                        let {
                            targetBlockStore: e
                        } = r;
                        return C.mark("try_local_duplication_success"), C.end(), {
                            blockStores: [e],
                            onComplete: Promise.resolve({
                                status: "success"
                            })
                        }
                    }
                    C.mark("try_local_duplication_failure")
                }
                let M = t.defaultRecordCache.inMemoryRecordCache;
                if (p.some(e => e.inMemoryRecordCache !== M)) throw Error("Can only server duplicate from the environment.defaultRecordCache.inMemoryRecordCache.");
                o(205885).A.state.online || o(647095).f1(o(962299).A.formatMessage(o(450976).V.offlineError));
                let B = (0, o(994731).serverDuplicate)({
                    environment: t,
                    sourceBlocks: p.map(e => ({
                        id: e.id,
                        spaceId: e.getSpaceId()
                    })),
                    targetInMemoryRecordCache: M,
                    transaction: g,
                    targetSpaceId: m,
                    installationImprint: v,
                    templateInstallationMetadata: b,
                    stopwatch: C,
                    shouldUseSynchronousDuplicationAPI: _,
                    options: k,
                    from: f,
                    onRedundantDuplicationError: S,
                    destinationTable: p[0].getParentTable(),
                    blockType: p[0].getType()
                });
                if (C.mark("duplicate_block_immediate_return"), o(300441).Q.isFail(B)) throw y || (0, o(648048).x)({
                    environment: t,
                    duplicateError: B.error
                }), B.error;
                let {
                    blockStores: I,
                    onComplete: D
                } = B.value, A = o(975162).yX();
                return D.then(e => {
                    if (C.end(), o(300441).Q.isSuccess(e)) {
                        for (let e of I)
                            if ("ai_block" === e.getType()) {
                                d().EF.setState(e.pointer.id);
                                break
                            }
                        A.resolve({
                            status: "success",
                            recordIdMap: e.value.recordIdMap
                        })
                    } else {
                        var r;
                        y || (0, o(648048).x)({
                            environment: t,
                            duplicateError: e.error,
                            blockStores: I
                        }), A.resolve({
                            status: "error",
                            error: e.error,
                            errorMessage: null == (r = (0, o(648048).V2)(e.error)) ? void 0 : r.description
                        })
                    }
                }), {
                    blockStores: I,
                    onComplete: A.promise
                }
            }
        },
        464515: (e, t, o) => {
            o.d(t, {
                z: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    blockStore: r,
                    insertedTextBlockLocation: a,
                    editSelection: i,
                    getRectFromStore: l
                } = e, n = o(764615).Ay.state;
                if (i({
                        environment: t,
                        store: r
                    }), (0, o(940763).e)({
                        store: r.getBlockTitleStore()
                    }), !n.open && !t.device.isPhone) {
                    let e = r.getBlockTitleStore(),
                        i = l(r),
                        n = o(92513).JW();
                    i && (o(764615).Ay.setState({
                        id: n,
                        open: !0,
                        isAddMenu: !0,
                        collapsed: !0,
                        textStore: e,
                        oldTextValue: e.getValue(),
                        oldSelection: {
                            startIndex: 0,
                            endIndex: 0
                        },
                        selectionRect: i,
                        lettersAtLastResult: 0,
                        filter: "",
                        temporaryInputDataStore: o(546605).Store.createValue(void 0, {
                            name: "temporaryInputData"
                        }),
                        insertedTextBlockLocation: a
                    }), (0, o(525779).clear)({
                        environment: t
                    }), (0, o(940763).e)({
                        store: e
                    }), (0, o(104310).u)({
                        event: {
                            eventName: "open_slash_menu",
                            eventProperties: {
                                id: n,
                                source: "add_button"
                            }
                        }
                    }))
                }
            }
        },
        609328: (e, t, o) => {
            o.d(t, {
                P: () => i
            }), o(944114), o(296540);
            var r = o(474848);
            let a = (0, o(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function i({
                environment: e,
                title: t,
                ...l
            }) {
                var n, s, c;
                let d = [],
                    u = null == (n = l.error) ? void 0 : n.stack;
                if (u) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (s = t.replay) || null == (c = s.terminate) || c.call(s)), d.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, o(969899).Nu)())({
                                environment: e,
                                stringValue: u,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${u}
		</code></pre>`,
                                copiedMessage: a.errorStacktraceCopied
                            })
                        }
                    })
                }
                d.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, r.jsx)(o(109939).sA, { ...o(647095)._0.dismissButtonLabel
                    }),
                    onAccept: o(763230).D_
                }), o(647095).ui({
                    message: t,
                    description: (0, r.jsx)(o(149795).dD, { ...l
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: d
                })
            }
        },
        617154: (e, t, o) => {
            o.d(t, {
                UO: () => s,
                MK: () => c,
                CU: () => n
            }), o(296540);
            var r = o(474848);
            let a = (0, o(109939).YK)({
                    pageDuplicatingMessage: {
                        id: "duplicateProgressSnackbar.pageDuplicating",
                        defaultMessage: "Page is duplicating"
                    },
                    contentDuplicatingMessage: {
                        id: "duplicateProgressSnackbar.contentDuplicating",
                        defaultMessage: "Content is duplicating"
                    }
                }),
                i = {
                    height: 24
                };

            function l(e) {
                let t, {
                        sourceBlocks: l,
                        stage: n
                    } = e,
                    s = (0, o(682985).K8)(() => !(l.length < 1) && l[0].isType(o(955630).Gz), [l]);
                return "initial" === n ? t = s ? a.pageDuplicatingMessage : a.contentDuplicatingMessage : (0, o(722371).HB)(n), (0, r.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    gap: 8,
                    children: [(0, r.jsx)(o(517334).k, {
                        size: "sm",
                        onDarkBackground: !0
                    }), (0, r.jsx)("span", {
                        children: (0, r.jsx)(o(109939).sA, { ...t
                        })
                    }), (0, r.jsx)("div", {
                        style: i,
                        children: (0, r.jsx)(o(346268).c, {
                            type: "vertical",
                            colorVariant: "inversePrimary",
                            colorPalette: "gray",
                            size: 24
                        })
                    })]
                })
            }

            function n(e) {
                let {
                    sourceBlocks: t
                } = e, r = new(o(977283)).DI({
                    sourceBlocks: t,
                    showInitialMessage: d,
                    onClear: u
                });
                return r.start(), r.id
            }

            function s(e) {
                let t = (0, o(977283).lq)(e);
                null == t || t.clear()
            }

            function c(e) {
                let t = (0, o(977283).lq)(e);
                null == t || t.complete()
            }

            function d(e) {
                let t = (0, r.jsx)(l, {
                    sourceBlocks: e,
                    stage: "initial"
                });
                (0, o(984211).f)({
                    item: {
                        label: t,
                        durationMs: "keep"
                    },
                    onDismiss: () => {
                        (0, o(977283).Yv)()
                    }
                })
            }

            function u() {
                o(436555).N2()
            }
        },
        730125: (e, t, o) => {
            o.d(t, {
                A: () => r
            });
            let r = o(546605).Store.createValue({
                executionTarget: null
            }, {
                name: "DuplicationDebuggingStore"
            })
        },
        852864: (e, t, o) => {
            o.d(t, {
                H: () => r
            }), o(898992), o(672577);

            function r({
                spaceStore: e,
                userId: t,
                environment: a
            }) {
                let i = new(o(736309)).d(a, {
                    table: o(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return i ? o(994797).SpaceViewStore.createChildStore(e, {
                    id: i.id,
                    table: o(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        937776: (e, t, o) => {
            o.d(t, {
                B: () => i
            }), o(296540);
            var r = o(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, r.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                i = (0, o(104509).wt)("archiveBox", a, "default")
        },
        966559: (e, t, o) => {
            o.r(t), o.d(t, {
                exclamationMarkCircleSmallIcon: () => i,
                iconDefinition: () => a
            }), o(296540);
            var r = o(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, r.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                i = (0, o(104509).wt)("exclamationMarkCircleSmall", a, "small")
        },
        977283: (e, t, o) => {
            o.d(t, {
                DI: () => s,
                Yv: () => n,
                lq: () => i
            });
            let r = 2 * o(695216).TD,
                a = new Map;

            function i(e) {
                return a.get(e)
            }

            function l() {
                return a.values().next().value
            }

            function n() {
                for (let e of Array.from(a.values())) e.clear()
            }
            class s {
                id;
                sourceBlocks;
                currentTimeout = null;
                stage;
                showInitialMessage;
                onClear;
                constructor(e) {
                    this.id = (0, o(4962).Ay)(), this.sourceBlocks = e.sourceBlocks, this.stage = "started", this.showInitialMessage = e.showInitialMessage, this.onClear = e.onClear, a.set(this.id, this)
                }
                isOldestActive() {
                    return l() === this
                }
                start() {
                    this.currentTimeout = setTimeout(() => {
                        this.stage = "initial_message", this.isOldestActive() && this.showInitialMessage(this.sourceBlocks)
                    }, r)
                }
                showSnackbarForCurrentStage() {
                    "started" === this.stage || ("initial_message" === this.stage ? this.showInitialMessage(this.sourceBlocks) : (0, o(722371).HB)(this.stage))
                }
                clear() {
                    let e;
                    this.currentTimeout && (clearTimeout(this.currentTimeout), this.currentTimeout = null), a.delete(this.id), this.onClear(), (e = l()) && e.showSnackbarForCurrentStage()
                }
                complete() {
                    this.isOldestActive() && this.stage, this.clear()
                }
            }
        },
        984211: (e, t, o) => {
            o.d(t, {
                f: () => a
            }), o(296540);
            var r = o(474848);

            function a(e) {
                let {
                    item: t,
                    onDismiss: a
                } = e;
                o(436555).D6({ ...t,
                    right: (0, r.jsx)(o(531119).Ag, {
                        onClick: a ? ? o(436555).N2,
                        children: (0, r.jsx)(o(109939).sA, {
                            id: "snackbar.dismiss.title",
                            defaultMessage: "Dismiss"
                        })
                    })
                })
            }
        }
    }
]);