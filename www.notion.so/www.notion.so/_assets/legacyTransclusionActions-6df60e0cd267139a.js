"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [2411, 40600, 99314], {
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
                integrationIcon: () => l
            }), o(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                l = (0, o(104509).wt)("integration", r, "default")
        },
        95783: (e, t, o) => {
            o.d(t, {
                w: () => r
            }), o(16280), o(18107), o(967357), o(898992), o(737550);

            function r(e) {
                var t, r, l, a, n, i;
                let {
                    environment: c,
                    createBlockItem: s,
                    from: d,
                    inMemoryRecordCache: u,
                    transaction: p,
                    selection: g
                } = e;
                if (!s.templateRootBlockId || !s.createTemplate) throw Error("Invalid createBlock item.");
                let f = (g.length > 0 ? g[0].getSpaceId() : void 0) ? ? e.spaceId ? ? (null == (t = o(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.getSpaceId()),
                    m = f ? c.idCreator.getSpaceIdCreatorSync(f) : void 0,
                    b = g.some(e => (0, o(398346).l)(e)),
                    v = s.createTemplate(c),
                    {
                        targetBlockStore: h
                    } = (0, o(963771).initializeTemplate)({
                        environment: c,
                        sourceBlockId: s.templateRootBlockId,
                        targetBlockPointer: (0, o(295447).zP)({
                            environment: c,
                            table: o(832375).evP,
                            spaceId: f
                        }),
                        sourceBlockSubtree: (0, o(412951).partialRecordMapToRecordMap)(v),
                        targetRecordCache: u,
                        transaction: p,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !b,
                        spaceIdCreator: m
                    });
                null == (r = s.postCreateCallback) || r.call(s, h, c, p);
                let [y] = g;
                if (o(205103).eY({
                        environment: c,
                        store: h,
                        transaction: p,
                        previousStore: y
                    }), d && s.blockType) {
                    let e, t, r, u, p = s.collectionViewType,
                        f = 0 !== g.length ? null == (l = g[0]) ? void 0 : l.getParentCollectionIdUpToTwoLevels() : void 0;
                    if ("chart" === p) {
                        let o = null == (a = h.getCollectionViewStores()) ? void 0 : a.at(0);
                        e = null == o || null == (n = o.getChartConfig()) ? void 0 : n.type, t = null == o ? void 0 : o.getChartPlaceholderType()
                    }
                    if ("form_editor" === p) {
                        let e = null == (i = h.getCollectionViewStores()) ? void 0 : i.at(0),
                            t = null == e ? void 0 : e.getFormBlockStore();
                        r = null == t ? void 0 : t.id, u = null == e ? void 0 : e.id
                    }
                    let {
                        collectionId: m,
                        ownedCollectionCount: b,
                        linkedCollectionCount: v
                    } = (0, o(633171).P)(h, {
                        skipPages: !1
                    }), y = {
                        from: d,
                        collection_id: m,
                        owned_collection_count: b,
                        linked_collection_count: v,
                        view_type: "inline" === p || "full_page" === p ? "table" : p,
                        is_toggleable: s.isToggleable,
                        automation_id: h.getAutomationId(),
                        new_page_id: "page" === s.blockType ? h.id : void 0,
                        creating_block_id: h.id,
                        parent_collection_id: f,
                        is_full_screen: "full_page" === p,
                        chart_type: "placeholder" === e ? t : e,
                        is_chart_placeholder: "placeholder" === e,
                        form_id: r,
                        view_id: u
                    }, k = s.blockType;
                    o(549960).tP(k) ? o(549960).vH(c, { ...y,
                        type: k,
                        collection_id: m || ""
                    }) : o(549960).vH(c, { ...y,
                        type: k
                    })
                }
                return h
            }
        },
        150945: (e, t, o) => {
            function r(e) {
                let t, {
                        environment: r,
                        createBlockItem: l,
                        selection: a,
                        transaction: n,
                        analyticsFrom: i,
                        preventSetSelection: c
                    } = e,
                    s = o(584265).default.getCurrentRecordCache(),
                    d = new(o(303541)).UF({
                        environment: r,
                        userFlow: (null == l ? void 0 : l.blockType) === "page" ? "user_flow_create_page" : "user_flow_create_block",
                        from: i,
                        succeedOnEnqueue: !0
                    });
                if ((0, o(194020).E)(r, (0, o(974410).f)(a[0])) && l && s) {
                    let e = o(95783).w({
                        environment: r,
                        createBlockItem: l,
                        transaction: n,
                        inMemoryRecordCache: s,
                        from: i,
                        selection: a
                    });
                    d.track(e.pointer, n), t = (0, o(210318).L)({
                        environment: r,
                        blocksToInsert: [e],
                        target: a,
                        transaction: n,
                        replaceEmptyTextBlock: !1,
                        preventSetSelection: c
                    })[0]
                } else d.fail("invalid_state");
                return t
            }

            function l(e) {
                let t, {
                        environment: r,
                        createBlockItem: l,
                        selection: a,
                        transaction: n,
                        analyticsFrom: i,
                        preventSetSelection: c
                    } = e,
                    s = o(584265).default.getCurrentRecordCache();
                if ((0, o(194020).E)(r, (0, o(974410).f)(a[0])) && l && s) {
                    let e = o(95783).w({
                        environment: r,
                        createBlockItem: l,
                        transaction: n,
                        inMemoryRecordCache: s,
                        from: i,
                        selection: a
                    });
                    t = (0, o(199894).t)({
                        environment: r,
                        blocks: [e],
                        selection: a,
                        transaction: n,
                        preventSetSelection: c
                    })[0]
                }
                return t
            }

            function a(e) {
                let {
                    environment: t,
                    selection: l,
                    transaction: a
                } = e, n = r({ ...e,
                    preventSetSelection: !0
                });
                if (n) {
                    var i;
                    (0, o(270819).x)({
                        environment: t,
                        insertedStores: [n],
                        isCreated: !0
                    });
                    let e = o(708929).Uv.getMode(n);
                    if ("suggest" === e) {
                        let e = (0, o(714577).R)(t, a, n);
                        (0, o(132993).t)(a, n, {
                            id: o(92513).JW(),
                            type: "insert",
                            discussionId: e.id
                        }), (0, o(941538).c)({
                            environment: t,
                            transaction: a,
                            discussionStore: e,
                            addModifiedBlockIdsAfter: [n.id]
                        })
                    }
                    "suggest" === e && null != (i = n.getNavigableBlockStore({
                        skipCurrent: !0
                    })) && i.isCommentOnly() || (0, o(5556).u)({
                        transaction: a,
                        blocks: l
                    })
                }
                return n
            }

            function n(e) {
                let {
                    blocks: t,
                    transaction: l,
                    environment: a,
                    skipAnalytics: n
                } = e, i = r({
                    environment: a,
                    selection: t,
                    createBlockItem: o(992140).ry.text,
                    analyticsFrom: n ? void 0 : "text_insert_below",
                    transaction: l
                });
                return i && o(374176).default.afterNextFlush(() => {
                    (0, o(464515).z)({
                        environment: a,
                        blockStore: i,
                        insertedTextBlockLocation: "below",
                        editSelection: o(182553).h,
                        getRectFromStore: o(240414).T.getRectFromStore.bind(o(240414).T)
                    })
                }), i
            }

            function i(e) {
                let {
                    blocks: t,
                    transaction: r,
                    environment: a,
                    skipAnalytics: n
                } = e, i = l({
                    environment: a,
                    selection: t,
                    createBlockItem: o(992140).ry.text,
                    analyticsFrom: n ? void 0 : "text_insert_below",
                    transaction: r
                });
                return i && o(374176).default.afterNextFlush(() => {
                    (0, o(464515).z)({
                        environment: a,
                        blockStore: i,
                        insertedTextBlockLocation: "above",
                        editSelection: o(182553).h,
                        getRectFromStore: o(240414).T.getRectFromStore.bind(o(240414).T)
                    })
                }), i
            }
            o.r(t), o.d(t, {
                insertBlockAbove: () => l,
                insertBlockAndEdit: () => a,
                insertBlockBelow: () => r,
                insertTextAbove: () => i,
                insertTextBelow: () => n
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
                    transaction: l,
                    preventSetSelection: a
                } = e, {
                    blocks: n
                } = e, i = (0, o(385941).Z)();
                if (!i) throw Error("No root store.");
                if (r.length > 0) {
                    let e = r[0],
                        i = o(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!i || !i.props.onInsertAbove) throw Error("No Selectable found.");
                    let c = i.props.onInsertAbove({
                        insertStores: n,
                        transaction: l
                    });
                    return a || (0, o(854924).t)({
                        environment: t,
                        stores: c
                    }), c
                } {
                    let e = i.getContentStore(),
                        r = n.map(t => (0, o(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: l
                        }).childStore);
                    return a || (0, o(854924).t)({
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
        331217: (e, t, o) => {
            o.r(t), o.d(t, {
                fixLegacyTransclusion: () => a,
                maybeAutofixLegacyTransclusionProperty: () => l
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698);
            let r = new Set(["text", "table_row", "header", "sub_header", "sub_sub_header", "to_do", "bulleted_list", "numbered_list", "toggle"]);

            function l(e) {
                let {
                    parentStore: t,
                    transaction: l,
                    store: a,
                    environment: n
                } = e, i = a.path[1];
                if (2 !== a.path.length || "properties" !== a.path[0] || "string" != typeof i) return;
                let c = (0, o(746473).zH)(a);
                if (!(c instanceof o(970831).B)) return;
                let s = c.getType();
                if (!s || !r.has(s)) return;
                let d = function(e) {
                    var t;
                    let {
                        environment: r,
                        store: l,
                        parentStore: a,
                        transaction: n
                    } = e;
                    if (l.getSpaceId() !== a.getSpaceId()) return;
                    let i = null == (t = a.getModel()) ? void 0 : t.getContentIds();
                    if (!(null != i && i.includes(l.id)) || o(941701).transactionQueue.isPendingTransactionForRecord(a.pointer) || o(941701).transactionQueue.isPendingTransactionForRecord(l.pointer)) return;
                    let c = (0, o(559096).loadLocalSubtree)({
                        environment: r,
                        blockId: l.id,
                        inMemoryRecordCache: l.inMemoryRecordCache,
                        options: {
                            allowCopyCollections: !1,
                            requireFullSubtree: !0,
                            skipTransclusionContainerChildren: !0,
                            allowCopyExternalObjectInstances: !0,
                            includeLegacyTransclusionBlockValues: !0
                        }
                    }).recordMap;
                    if (!c) return;
                    let s = (0, o(44226).localDuplicate)({
                        environment: r,
                        sourceBlockId: l.id,
                        targetBlockPointer: (0, o(295447).zP)({
                            environment: r,
                            table: o(832375).evP,
                            spaceId: l.pointer.spaceId
                        }),
                        sourceBlockSubtree: c,
                        targetInMemoryRecordCache: l.inMemoryRecordCache,
                        transaction: n,
                        from: "legacy_transclusion_fix",
                        destinationTable: o(832375).evP,
                        options: {
                            allowRedundancy: !0,
                            deepCopyTransclusionContainers: !1,
                            resolveTemplateVariables: !1,
                            preventLegacyTransclusions: !0
                        },
                        skipUserFacingMessages: !0
                    });
                    return (0, o(818636).B)({
                        parentStore: a.getContentStore(),
                        oldChildStore: l,
                        newChildStore: s.targetBlockStore,
                        transaction: n
                    }), s.targetBlockStore
                }({
                    environment: n,
                    store: c,
                    parentStore: t,
                    transaction: l
                });
                if (!d) return;
                let u = d.getPropertyStore(i);
                return u ? (l.postSubmitCallbacks.push(e => {
                    e && o(773352).log({
                        from: "legacyTransclusionActions",
                        level: "error",
                        type: "maybeAutofixLegacyTransclusionProperty",
                        error: {
                            miscErrorString: (0, o(416607).safelyConvertAnyToString)(e)
                        }
                    }), o(508297).Yr({
                        block_type: s,
                        successful: !e
                    })
                }), u) : void o(773352).log({
                    from: "legacyTransclusionActions",
                    level: "error",
                    type: "maybeAutofixLegacyTransclusionProperty",
                    error: {
                        message: "copied transclusion block does not have expected property"
                    }
                })
            }

            function a(e) {
                let {
                    environment: t,
                    store: r
                } = e, l = r.getRecordStoreUIParent();
                if (!l || !(0, o(966980).iU)(l)) return;
                let a = r.getParentStore();
                if (!a || "block" !== a.table && "collection" !== a.table && "space" !== a.table && "team" !== a.table) return;
                let n = (0, o(208322).LT)(a);
                (0, o(918103).hh)({
                    environment: t,
                    sourceBlocks: [r],
                    destination: n,
                    from: "legacy_transclusion_fix",
                    options: {
                        addCopyName: !1,
                        allowRedundancy: !0,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !1
                    },
                    skipUserFacingMessages: !1,
                    duplicateSubtreeGateName: "duplicate_subtree_basic_flows"
                }).then(e => {
                    if (o(300441).Q.isFail(e)) return;
                    (0, o(854924).t)({
                        environment: t,
                        stores: [e.value.createdBlocks[0]]
                    });
                    let l = r.pointer.spaceId;
                    (0, o(377796).createAndCommit)({
                        userAction: "legacyTransclusionActions.fixLegacyTransclusion.removeOldData",
                        environment: t,
                        canUndo: !0,
                        cellTarget: l ? {
                            spaceWithId: l
                        } : void 0,
                        perform: e => {
                            (0, o(210191).T)({
                                store: r,
                                transaction: e
                            })
                        }
                    })
                })
            }
        },
        425749: (e, t, o) => {
            o.d(t, {
                I$: () => n,
                R2: () => s,
                WF: () => c,
                bZ: () => i,
                cE: () => l,
                jX: () => a,
                rz: () => d
            });
            var r = () => o(381453);

            function l(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let a = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function n(e) {
                return !!(void 0 !== e && (0, o(722371).Xk)(a, e))
            }

            function i() {
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

            function c(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let s = [{
                type: "everything"
            }];

            function d(e) {
                for (let t of s)
                    if (r().n4(e, t)) return !0;
                return !1
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
                    insertedTextBlockLocation: l,
                    editSelection: a,
                    getRectFromStore: n
                } = e, i = o(764615).Ay.state;
                if (a({
                        environment: t,
                        store: r
                    }), (0, o(940763).e)({
                        store: r.getBlockTitleStore()
                    }), !i.open && !t.device.isPhone) {
                    let e = r.getBlockTitleStore(),
                        a = n(r),
                        i = o(92513).JW();
                    a && (o(764615).Ay.setState({
                        id: i,
                        open: !0,
                        isAddMenu: !0,
                        collapsed: !0,
                        textStore: e,
                        oldTextValue: e.getValue(),
                        oldSelection: {
                            startIndex: 0,
                            endIndex: 0
                        },
                        selectionRect: a,
                        lettersAtLastResult: 0,
                        filter: "",
                        temporaryInputDataStore: o(546605).Store.createValue(void 0, {
                            name: "temporaryInputData"
                        }),
                        insertedTextBlockLocation: l
                    }), (0, o(525779).clear)({
                        environment: t
                    }), (0, o(940763).e)({
                        store: e
                    }), (0, o(104310).u)({
                        event: {
                            eventName: "open_slash_menu",
                            eventProperties: {
                                id: i,
                                source: "add_button"
                            }
                        }
                    }))
                }
            }
        },
        609328: (e, t, o) => {
            o.d(t, {
                P: () => a
            }), o(944114), o(296540);
            var r = o(474848);
            let l = (0, o(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function a({
                environment: e,
                title: t,
                ...n
            }) {
                var i, c, s;
                let d = [],
                    u = null == (i = n.error) ? void 0 : i.stack;
                if (u) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (c = t.replay) || null == (s = c.terminate) || s.call(c)), d.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, o(969899).Nu)())({
                                environment: e,
                                stringValue: u,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${u}
		</code></pre>`,
                                copiedMessage: l.errorStacktraceCopied
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
                    description: (0, r.jsx)(o(149795).dD, { ...n
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: d
                })
            }
        },
        852864: (e, t, o) => {
            o.d(t, {
                H: () => r
            }), o(898992), o(672577);

            function r({
                spaceStore: e,
                userId: t,
                environment: l
            }) {
                let a = new(o(736309)).d(l, {
                    table: o(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return a ? o(994797).SpaceViewStore.createChildStore(e, {
                    id: a.id,
                    table: o(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        937776: (e, t, o) => {
            o.d(t, {
                B: () => a
            }), o(296540);
            var r = o(474848);
            let l = {
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
                a = (0, o(104509).wt)("archiveBox", l, "default")
        },
        966559: (e, t, o) => {
            o.r(t), o.d(t, {
                exclamationMarkCircleSmallIcon: () => a,
                iconDefinition: () => l
            }), o(296540);
            var r = o(474848);
            let l = {
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
                a = (0, o(104509).wt)("exclamationMarkCircleSmall", l, "small")
        }
    }
]);