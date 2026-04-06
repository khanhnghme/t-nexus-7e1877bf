"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [46794, 52237], {
        1299: (e, t, r) => {
            r.d(t, {
                cQ: () => i
            });
            let i = "[REDACTED FROM LOG]"
        },
        16453: (e, t, r) => {
            r.d(t, {
                m: () => i
            }), r(944114);
            let i = {
                derivePrimitiveOperations(e, t, i) {
                    let n = [{
                            command: "update",
                            pointer: e.pointer,
                            path: [],
                            args: {
                                parent_table: e.args.parentTable,
                                parent_id: e.args.parentId,
                                alive: !0
                            }
                        }],
                        a = t(e.pointer);
                    if (a && a.parent_id && a.parent_table) {
                        let t = (0, r(733622).YE)(a.parent_table, e.pointer.table);
                        t && n.push({
                            command: "listRemove",
                            pointer: r(496282).L3.fromPointerLike({
                                id: a.parent_id,
                                table: a.parent_table,
                                spaceId: a.space_id
                            }),
                            path: t,
                            args: {
                                id: e.pointer.id
                            }
                        })
                    }
                    return n
                },
                getAdditionalRelatedPointers: e => [],
                invert(e) {
                    let {
                        operation: t,
                        getRecordValue: i
                    } = e, n = i(t.pointer);
                    if (!n || !n.parent_id || !n.parent_table) return [{
                        command: "set",
                        pointer: t.pointer,
                        path: ["alive"],
                        args: !1
                    }];
                    if (n.parent_id === t.args.parentId && n.parent_table === t.args.parentTable) return [];
                    let a = n.parent_table;
                    if (!(0, r(733622).YE)(a, t.pointer.table)) return [{
                        command: "setParent",
                        pointer: t.pointer,
                        path: [],
                        args: {
                            parentId: n.parent_id,
                            parentTable: n.parent_table
                        }
                    }]; {
                        let e = i({
                            id: n.parent_id,
                            table: n.parent_table,
                            spaceId: n.space_id
                        });
                        if (e) {
                            let i = (0, r(937649).b)({
                                oldParentWithTable: r(761481).ms.create(n.parent_table, e),
                                parentTable: n.parent_table,
                                childPointer: t.pointer
                            });
                            if (i) return [i]
                        }
                        return []
                    }
                }
            }
        },
        17520: (e, t, r) => {
            r.d(t, {
                Q: () => i
            });

            function i(e) {
                let {
                    collectionViewId: t,
                    spaceId: i
                } = e;
                return {
                    id: t,
                    table: r(435544).G,
                    spaceId: i
                }
            }
        },
        19484: (e, t, r) => {
            r.d(t, {
                W: () => i
            });

            function i(e) {
                return Array.isArray(e.value) ? e.value : e.value.value ? [e.value] : []
            }
        },
        36418: (e, t, r) => {
            r.d(t, {
                v: () => n
            }), r(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.73 3.12 10.53 13.76",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M4.78 3.524a.63.63 0 0 1 .583-.399h9.274a.625.625 0 1 1 0 1.25H6.976l5.663 5.163a.625.625 0 0 1 0 .924l-5.663 5.163h7.661a.625.625 0 1 1 0 1.25H5.363a.625.625 0 0 1-.421-1.087L11.29 10 4.942 4.212a.625.625 0 0 1-.162-.688"
                    })
                },
                n = (0, r(104509).wt)("sum", i, "default")
        },
        41783: (e, t, r) => {
            r.d(t, {
                NV: () => i
            }), r(944114);

            function i(e, t) {
                if (t && (0, r(433261).$t)(e.table)) {
                    if ("space" === e.table) {
                        if (e.id !== t) return
                    } else if (!e.spaceId) return { ...e,
                        spaceId: t
                    };
                    else if (e.spaceId !== t) return
                }
                return e
            }
        },
        43296: (e, t, r) => {
            r.d(t, {
                C: () => i,
                r: () => n
            });
            let i = "workflow",
                n = {
                    table: i,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        space_id: r(759070).q.UUID,
                        data: r(759070).q.JSON,
                        created_by_table: r(759070).q.String,
                        created_by_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        last_edited_by_table: r(759070).q.String,
                        last_edited_by_id: r(759070).q.UUID,
                        last_edited_time: r(759070).q.Number,
                        alive: r(759070).q.Boolean,
                        permissions: r(759070).q.JSON,
                        moved_to_trash_table: r(759070).q.String,
                        moved_to_trash_id: r(759070).q.UUID,
                        moved_to_trash_time: r(759070).q.Number,
                        deleted_from_trash_time: r(759070).q.Number,
                        deleted_from_trash_table: r(759070).q.String,
                        deleted_from_trash_id: r(759070).q.UUID
                    },
                    requiredColumns: {
                        version: !0,
                        alive: !0,
                        parent_id: !0,
                        parent_table: !0,
                        space_id: !0
                    },
                    defaultColumnValues: {
                        created_by_table: "notion_user",
                        alive: !0,
                        permissions: []
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                }
        },
        46241: (e, t, r) => {
            r.d(t, {
                E: () => n,
                V: () => i
            });
            let i = "collection",
                n = {
                    table: i,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        name: r(759070).q.JSON,
                        description: r(759070).q.JSON,
                        icon: r(759070).q.String,
                        cover: r(759070).q.String,
                        schema: r(759070).q.JSON,
                        additional_property_ids: r(759070).q.UUIDArray,
                        additional_deleted_property_ids: r(759070).q.UUIDArray,
                        format: r(759070).q.JSON,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        alive: r(759070).q.Boolean,
                        file_ids: r(759070).q.StringArray,
                        template_pages: r(759070).q.StringArray,
                        copied_from: r(759070).q.UUID,
                        migrated: r(759070).q.Boolean,
                        space_id: r(759070).q.UUID,
                        deleted_schema: r(759070).q.JSON,
                        permissions: r(759070).q.JSON,
                        created_time: r(759070).q.Number,
                        last_edited_time: r(759070).q.Number,
                        created_by_table: r(759070).q.String,
                        created_by_id: r(759070).q.UUID,
                        last_edited_by_table: r(759070).q.String,
                        last_edited_by_id: r(759070).q.UUID,
                        moved_to_trash_table: r(759070).q.String,
                        moved_to_trash_id: r(759070).q.UUID,
                        moved_to_trash_time: r(759070).q.Number,
                        deleted_from_trash_time: r(759070).q.Number,
                        deleted_from_trash_table: r(759070).q.String,
                        deleted_from_trash_id: r(759070).q.UUID
                    },
                    requiredColumns: {
                        parent_id: !0,
                        parent_table: !0,
                        alive: !0
                    },
                    defaultColumnValues: {
                        alive: !1
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0,
                        properties: {
                            icon: {
                                getMethod: "getRawIcon",
                                getKeyStoreMethod: "getIconStore"
                            },
                            cover: {
                                getKeyStoreMethod: !0
                            },
                            format: {
                                defaultOnRead: r(891696).PL
                            },
                            schema: {
                                defaultOnRead: r(891696).PL
                            },
                            deleted_schema: {
                                defaultOnRead: r(891696).PL
                            },
                            copied_from: {
                                getMethod: !1
                            }
                        }
                    })
                }
        },
        53496: (e, t, r) => {
            r.d(t, {
                b: () => a
            }), r(296540);
            var i = r(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.144 8.954a.718.718 0 0 1 .62-1.079h4.472c.554 0 .9.6.62 1.08l-2.236 3.833a.718.718 0 0 1-1.24 0z"
                        }), (0, i.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                a = (0, r(104509).wt)("arrowTriangleDownCircle", n, "default")
        },
        53740: (e, t, r) => {
            r.d(t, {
                _: () => i
            });

            function i(e) {
                return (0, r(383431).h)(e.value || [])
            }
        },
        61334: (e, t, r) => {
            r.d(t, {
                z: () => n
            }), r(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "6.07 3.77 7.85 12.28",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M7.309 6.71c.22-.88 1.251-1.68 2.656-1.68 1.635 0 2.708 1.036 2.708 2.047 0 .603-.368 1.203-1.048 1.617l-.014.008-1.242.849-.003.002c-.805.556-1.31 1.45-1.31 2.417a.625.625 0 0 0 1.25 0c0-.522.275-1.046.769-1.388l1.215-.83c.944-.58 1.633-1.536 1.633-2.675 0-1.945-1.905-3.297-3.958-3.297-1.812 0-3.474 1.044-3.869 2.625a.625.625 0 1 0 1.213.303m3.435 8.351a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                    })
                },
                n = (0, r(104509).wt)("questionMark", i, "default")
        },
        89752: (e, t, r) => {
            function i(e, t) {
                var i;
                if (!e.spaceId) throw Error("addEdge operation requires a spaceId");
                let n = e.edgeId;
                if (!n) throw Error("addEdge operation requires an edge id");
                let a = e.updatedAt ? ? Date.now(),
                    o = e.createdAt ? ? (null == t ? void 0 : t.created_at) ? ? a,
                    d = void 0 === (i = e.metadata ? ? (null == t ? void 0 : t.metadata)) ? {} : i,
                    s = function(e) {
                        let {
                            orderSpec: t
                        } = e, i = null == t ? void 0 : t.proposedKey;
                        if (i) return i;
                        if (!t) return (0, r(498207).k)({
                            before: void 0,
                            after: void 0
                        });
                        let n = t.anchorKey;
                        return "after" === t.placement ? (0, r(498207).k)({
                            before: n,
                            after: void 0
                        }) : (0, r(498207).k)({
                            before: void 0,
                            after: n
                        })
                    }({
                        orderSpec: e.orderSpec,
                        currentValue: t
                    }),
                    l = e.version ? ? (null == t ? void 0 : t.version) ? ? 0,
                    u = e.lastVersion ? ? (null == t ? void 0 : t.last_version),
                    c = e.alive ? ? !0;
                return {
                    id: n,
                    space_id: e.spaceId,
                    version: l,
                    last_version: u,
                    edge_type: e.edgeType,
                    source_table: e.sourcePointer.table,
                    source_id: e.sourcePointer.id,
                    target_table: e.targetPointer.table,
                    target_id: e.targetPointer.id,
                    alive: c,
                    order_key: s,
                    metadata: d,
                    created_at: o,
                    updated_at: a
                }
            }

            function n(e, t) {
                return t ? r(488307).op.update({
                    pointer: e.pointer,
                    path: [],
                    args: {
                        order_key: null == t ? void 0 : t.order_key,
                        metadata: null == t ? void 0 : t.metadata,
                        alive: null == t ? void 0 : t.alive,
                        updated_at: Date.now()
                    }
                }) : r(488307).op.update({
                    pointer: e.pointer,
                    path: [],
                    args: {
                        alive: !1,
                        updated_at: Date.now()
                    }
                })
            }
            r.d(t, {
                S: () => i,
                x: () => n
            }), r(16280)
        },
        92529: (e, t, r) => {
            r.d(t, {
                C: () => i
            });
            let i = [r(832375).Oa6, r(832375).kzt, r(832375).KNP, r(832375).l1b, r(832375).TFd, r(832375).Nm7, r(832375).YVp, r(832375).yBS, r(832375).SC1, r(832375).kf7, r(832375).k$w, r(832375).evP, r(832375).ukB, r(832375).GPl, r(832375).qmW, r(832375).VlP, r(832375).BiG, r(832375).Gy1, r(832375).SNf, r(832375).$YH, r(832375).HxG, r(832375).AsL, r(832375).Klg, r(832375).PsW, r(832375).jsQ, r(832375).lo9, r(832375).yDO, r(832375).Lij, r(832375).CEK, r(832375).zx0, r(832375).HtE, r(832375).QOF, r(832375).yAZ, r(832375).a8w, r(832375).qtq, r(832375).qrH, r(832375).XXy, r(832375).OCn, r(832375).rfw, r(832375).ouC, r(832375).F9f, r(832375).dod, r(832375)._6L, r(832375).ez7, r(832375).sNL, r(832375).Fub, r(832375).iPf, r(832375).bwd, r(832375).nsO, r(832375).ZPG, r(832375).EuC, r(832375).VY8, r(832375).Xwe, r(832375).mu7, r(832375).ytf, r(832375).yKj, r(832375).Toz, r(832375).mSw, r(832375).GUg, r(832375).WQd, r(832375).TFg, r(832375).C0E, r(832375).U6v, r(832375).QRx, r(832375).lyl, r(832375).tEp, r(832375).yMG, r(832375).EcF];
            r(832375).eBi, r(832375).jft, r(832375).Wdc, r(832375).y$R, r(832375).Wuo, r(832375).cKY, r(832375).OfD, r(832375).Ok8, r(832375).hrX, r(832375).H3H, r(832375).qPS, r(832375).hGr, r(832375)._0W, r(832375).rqL, r(832375).$XM, r(832375).eUD, r(832375).e4Z, r(832375).$2J, r(832375).r1d, r(832375).m2N, r(832375).ITT, r(832375).$kK, r(832375).vjA, r(832375).XHn, r(832375).gEh, r(832375).adQ, r(832375).hWt, r(832375).$MF, r(832375).HBA, r(832375).rGg, r(832375).DHr, r(832375).kMj, r(832375).OjI, r(832375).T2, r(832375).Cy3, r(832375).iEO, r(832375).joQ, r(832375).W8A, r(832375).hyq, r(832375).hxQ, r(832375).Wnz, r(832375).$$c, r(832375).bhs, r(832375).SBl, r(832375).Q4N, r(832375).bnG, r(832375).Yxt, r(832375).Yxw, r(832375).aFA, r(832375).PXw, r(832375).dPx, r(832375).ozN, r(832375).nYQ, r(832375).IF6, r(832375).jvE, r(832375).uLb, r(832375).KcW, r(832375).pEW, r(832375).KqJ, r(832375)._ig, r(832375).ULG, r(832375).UNl, r(832375).EgT, r(832375).ziV, r(832375).V1v, r(832375).lMK, r(832375).enP, r(832375).J6M, r(832375).SS3, r(832375).es0, r(832375).Sd1, r(832375).MOG, r(832375)._pz, r(832375).oo9, r(832375).wl6, r(832375).mEg, r(832375).pkG, r(832375).y75, r(832375).GY9, r(832375).vbv, r(832375).MRl, r(832375).eV7, r(832375).KWb, r(832375).Z4m, r(832375).qNb, r(832375).AvP, r(832375).Ws0, r(832375)._71, r(832375).Xiz, r(832375).Xh, r(832375).GFx, r(832375).Ghx, r(832375).kW7, r(832375).mlj, r(832375).sLR, r(832375).H53, r(832375).eqd, r(832375).G4T, r(832375).oJm, r(832375).Q$N, r(832375).Crh, r(832375).ojG, r(832375).Kq7, r(832375).NXh, r(832375).iiK, r(832375).SMn, r(832375).DWi, r(832375).m3J, r(832375).aSp, r(832375).j0B, r(832375).$RT, r(832375).Jmj, r(832375).qcA, r(832375).gDn, r(832375).naB, r(832375).f3c, r(832375).JrE, r(832375).aJN, r(832375).sB_, r(832375).PcJ, r(832375).oNS, r(832375).IeV, r(832375).RWv, r(832375).JAq, r(832375).yiT, r(832375).XXO, r(832375).bf7, r(832375).vnT, r(832375).Hik, r(832375)._FR, r(832375).hRD, r(832375).R$c, r(832375).HAA, r(832375).wI1, r(832375).IvX, r(832375).A3P, r(832375).B7B, r(832375).yvd, r(832375).gDt, r(832375).S6u, r(832375)._0B, r(832375).rNM, r(832375).CsX, r(832375).bJl, r(832375).GDR, r(832375).pVl, r(832375).xMx, r(832375).NkI, r(832375).yHj, r(832375).PuY, r(832375).ef6
        },
        92974: (e, t, r) => {
            r.d(t, {
                gD: () => n,
                z8: () => i
            });
            let i = {
                table: "record_counter",
                columnTypes: {
                    id: r(759070).q.UUID,
                    version: r(759070).q.Number,
                    last_version: r(759070).q.Number,
                    space_id: r(759070).q.UUID,
                    parent_table: r(759070).q.String,
                    parent_id: r(759070).q.UUID,
                    next_value: r(759070).q.Number,
                    alive: r(759070).q.Boolean
                },
                requiredColumns: {
                    space_id: !0,
                    parent_table: !0,
                    parent_id: !0,
                    next_value: !0,
                    alive: !0
                },
                model: (0, r(68291).P)({
                    RecordStore: !0
                })
            };

            function n(e) {
                let {
                    spaceId: t,
                    parentTable: i,
                    parentId: n
                } = e;
                return (0, r(4962).gB)(`${t}-${i}-${n}`)
            }
        },
        94243: (e, t, r) => {
            r.d(t, {
                J6: () => i,
                O_: () => n
            });
            let i = "marketplace_service",
                n = {
                    table: i,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        creator_id: r(759070).q.UUID,
                        listing_id: r(759070).q.UUID,
                        name: r(759070).q.String,
                        slug: r(759070).q.String,
                        locales: r(759070).q.StringArray,
                        booking_status: r(759070).q.String,
                        price_range_start: r(759070).q.Number,
                        price_range_end: r(759070).q.Number,
                        currency: r(759070).q.String,
                        attributes: r(759070).q.JSON,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        updated_time: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        creator_id: !0,
                        name: !0,
                        slug: !0,
                        locales: !0,
                        attributes: !0,
                        version: !0,
                        created_time: !0,
                        updated_time: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                }
        },
        111362: (e, t, r) => {
            r(103249).dC, r(103249).Tw, r(103249).av, r(103249).BF, r(103249).yH, r(103249).TC, r(103249).pW, r(103249).iH, r(103249).dC, r(103249).Tw, r(103249).dC, r(103249).dC, r(103249).Tw, r(103249).av, r(103249).BF, r(103249).yH, r(103249).TC, r(103249).pW
        },
        114588: (e, t, r) => {
            r.d(t, {
                z: () => i
            });

            function i(e) {
                var t;
                return (null == (t = e.collection_pointer) ? void 0 : t.id) ? ? e.collection_id
            }
        },
        137606: (e, t, r) => {
            r(832375).Oa6, r(832375).evP, r(832375).NXh, r(832375).yKj, r(832375).kzt, r(832375).evP, r(832375).NXh, r(832375).GDR, r(832375).VlP, r(832375).yKj, r(832375).eBi, r(832375).jft, r(832375).KNP, r(832375).NXh, r(832375).y75, r(832375).l1b, r(832375).NXh, r(832375).y75, r(832375).Wdc, r(832375).y$R, r(832375).Wuo, r(832375).cKY, r(832375).TFd, r(832375).mu7, r(832375).Nm7, r(832375).TFd, r(832375).YVp, r(832375).mu7, r(832375).yBS, r(832375).evP, r(832375).VlP, r(832375).SC1, r(832375).yBS, r(832375).OfD, r(832375).Ok8, r(832375).kf7, r(832375).NXh, r(832375).OfD, r(832375).k$w, r(832375).NXh, r(832375).hrX, r(832375).evP, r(832375).evP, r(832375).VlP, r(832375).NXh, r(832375).SNf, r(832375).yKj, r(832375).SC1, r(832375).Gy1, r(832375).zx0, r(832375).qmW, r(832375).TFd, r(832375).C0E, r(832375).ukB, r(832375).evP, r(832375).H3H, r(832375).GPl, r(832375).oo9, r(832375).NXh, r(832375).qPS, r(832375).hGr, r(832375).qmW, r(832375).yKj, r(832375).VlP, r(832375).evP, r(832375).VlP, r(832375).BiG, r(832375).VlP, r(832375).Gy1, r(832375).evP, r(832375).zx0, r(832375).SNf, r(832375).$YH, r(832375)._0W, r(832375).rqL, r(832375).$XM, r(832375).eUD, r(832375).e4Z, r(832375).$2J, r(832375).r1d, r(832375).$YH, r(832375).evP, r(832375).HxG, r(832375).oo9, r(832375).m2N, r(832375).ITT, r(832375).$kK, r(832375).vjA, r(832375).XHn, r(832375).gEh, r(832375).adQ, r(832375).AsL, r(832375).GPl, r(832375).hWt, r(832375).Klg, r(832375).yMG, r(832375).C0E, r(832375).NXh, r(832375).oo9, r(832375).$MF, r(832375).HBA, r(832375).PsW, r(832375).oo9, r(832375).rGg, r(832375).DHr, r(832375).kMj, r(832375).jsQ, r(832375).NXh, r(832375).OjI, r(832375).T2, r(832375).Cy3, r(832375).lo9, r(832375).zx0, r(832375).iEO, r(832375).joQ, r(832375).W8A, r(832375).hyq, r(832375).hxQ, r(832375).Wnz, r(832375).$$c, r(832375).yDO, r(832375).C0E, r(832375).NXh, r(832375).Lij, r(832375).oo9, r(832375).NXh, r(832375).bhs, r(832375).SBl, r(832375).Q4N, r(832375).bnG, r(832375).CEK, r(832375).NXh, r(832375).Yxt, r(832375).Yxw, r(832375).aFA, r(832375).zx0, r(832375).VlP, r(832375).evP, r(832375).Gy1, r(832375).PXw, r(832375).dPx, r(832375).ozN, r(832375).nYQ, r(832375).IF6, r(832375).HtE, r(832375).NXh, r(832375).jvE, r(832375).uLb, r(832375).QOF, r(832375).Hik, r(832375).V1v, r(832375).KcW, r(832375).pEW, r(832375).yAZ, r(832375).V1v, r(832375).a8w, r(832375).yAZ, r(832375).KqJ, r(832375)._ig, r(832375).ULG, r(832375).UNl, r(832375).EgT, r(832375).ziV, r(832375).V1v, r(832375).qtq, r(832375).V1v, r(832375).qrH, r(832375).V1v, r(832375).lMK, r(832375).enP, r(832375).XXy, r(832375).Hik, r(832375).V1v, r(832375).J6M, r(832375).OCn, r(832375).NXh, r(832375).SS3, r(832375).es0, r(832375).Sd1, r(832375).MOG, r(832375)._pz, r(832375).oo9, r(832375).wl6, r(832375).mEg, r(832375).pkG, r(832375).y75, r(832375).rfw, r(832375).y75, r(832375).GY9, r(832375).vbv, r(832375).MRl, r(832375).ouC, r(832375).evP, r(832375).F9f, r(832375).evP, r(832375).eV7, r(832375).KWb, r(832375).Z4m, r(832375).dod, r(832375).evP, r(832375).qNb, r(832375)._6L, r(832375).NXh, r(832375).AvP, r(832375).ez7, r(832375).SNf, r(832375).$YH, r(832375).sNL, r(832375).VlP, r(832375).Fub, r(832375).VlP, r(832375).iPf, r(832375).evP, r(832375).SNf, r(832375).Ws0, r(832375).bwd, r(832375).evP, r(832375)._71, r(832375).Xiz, r(832375).Xh, r(832375).GFx, r(832375).Ghx, r(832375).kW7, r(832375).nsO, r(832375).sLR, r(832375).oJm, r(832375).eqd, r(832375).mlj, r(832375).sLR, r(832375).H53, r(832375).eqd, r(832375).G4T, r(832375).oJm, r(832375).Q$N, r(832375).Crh, r(832375).ZPG, r(832375).Crh, r(832375).ojG, r(832375).EuC, r(832375).evP, r(832375).VY8, r(832375).evP, r(832375).Kq7, r(832375).Xwe, r(832375).evP, r(832375).VlP, r(832375).NXh, r(832375).iiK, r(832375).SMn, r(832375).DWi, r(832375).m3J, r(832375).aSp, r(832375).j0B, r(832375).$RT, r(832375).Jmj, r(832375).qcA, r(832375).gDn, r(832375).naB, r(832375).f3c, r(832375).JrE, r(832375).aJN, r(832375).sB_, r(832375).PcJ, r(832375).mu7, r(832375).GDR, r(832375).oNS, r(832375).ytf, r(832375).NXh, r(832375).IeV, r(832375).RWv, r(832375).JAq, r(832375).yiT, r(832375).yKj, r(832375).NXh, r(832375).XXO, r(832375).bf7, r(832375).vnT, r(832375).Hik, r(832375)._FR, r(832375).hRD, r(832375).R$c, r(832375).HAA, r(832375).Toz, r(832375).C0E, r(832375).evP, r(832375).NXh, r(832375).mSw, r(832375).Toz, r(832375).wI1, r(832375).IvX, r(832375).A3P, r(832375).GUg, r(832375).mu7, r(832375).B7B, r(832375).yvd, r(832375).gDt, r(832375).S6u, r(832375)._0B, r(832375).rNM, r(832375).CsX, r(832375).bJl, r(832375).GDR, r(832375).WQd, r(832375).$YH, r(832375).pVl, r(832375).xMx, r(832375).TFg, r(832375).NXh, r(832375).C0E, r(832375).evP, r(832375).NXh, r(832375).U6v, r(832375).C0E, r(832375).Toz, r(832375).QRx, r(832375).C0E, r(832375).lyl, r(832375).NXh, r(832375).NkI, r(832375).tEp, r(832375).NXh, r(832375).yMG, r(832375).oo9, r(832375).C0E, r(832375).yHj, r(832375).PuY, r(832375).EcF, r(832375).C0E, r(832375).ef6
        },
        143303: (e, t, r) => {
            r.d(t, {
                W: () => function e(t) {
                    if ("conditional" === t.type) return {
                        type: t.type,
                        condition: e(t.condition),
                        true: e(t.true),
                        false: e(t.false),
                        result_type: t.result_type
                    };
                    if ("constant" === t.type) return {
                        type: t.type,
                        value: t.value,
                        value_type: t.value_type,
                        result_type: t.result_type
                    };
                    if ("function" === t.type) {
                        let r = t.args || [];
                        return {
                            type: t.type,
                            name: t.name,
                            args: r.map(e),
                            result_type: t.result_type
                        }
                    }
                    if ("operator" === t.type) {
                        let r = t.args || [];
                        return {
                            type: t.type,
                            operator: t.operator,
                            name: t.name,
                            args: r.map(e),
                            result_type: t.result_type
                        }
                    }
                    if ("symbol" === t.type) return {
                        type: t.type,
                        name: t.name,
                        result_type: t.result_type
                    };
                    else if ("property" === t.type) return {
                        type: t.type,
                        id: t.id,
                        name: t.name,
                        result_type: t.result_type
                    };
                    else if ("error" === t.type) return {
                        type: t.type,
                        message: t.message,
                        result_type: t.result_type,
                        size: t.size
                    };
                    else throw Error("Invalid formula type.")
                }
            }), r(16280), r(581454)
        },
        151429: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            let i = {
                Owner: "notion://wiki/owner_property"
            }
        },
        151877: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });

            function i(e) {
                let {
                    collectionId: t,
                    propertyId: i,
                    additionalPropertyIds: n
                } = e, a = (0, r(611971).xz)({
                    collectionId: t,
                    propertyId: i
                });
                return n.includes(a)
            }
        },
        179358: (e, t, r) => {
            r.d(t, {
                b: () => a
            });
            let i = new WeakMap;

            function n(e) {
                let t = r(247438).Cok(e);
                if (t.length > 0) {
                    if ("Invalid Date" === t[0].start_date || "Invalid date" === t[0].start_date) return;
                    return t[0]
                }
                let i = r(247438).k4p(e);
                return (0, r(629518).Z$)(i)
            }

            function a(e, t) {
                if (!((null == t ? void 0 : t.useCache) ? ? !0)) return n(e);
                if (e && i.has(e)) return i.get(e);
                let r = n(e);
                return e && i.set(e, r), r
            }
        },
        183657: (e, t, r) => {
            r.d(t, {
                i: () => n
            }), r(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.27 4.37 15.45 11.25",
                    directional: !0,
                    svg: (0, r(474848).jsx)("path", {
                        d: "M2.9 4.375a.625.625 0 1 0 0 1.25h14.2a.625.625 0 1 0 0-1.25zm0 3.333a.625.625 0 0 0 0 1.25h14.2a.625.625 0 1 0 0-1.25zM2.275 15c0-.345.28-.625.625-.625H10a.625.625 0 1 1 0 1.25H2.9A.625.625 0 0 1 2.275 15m.625-3.958a.625.625 0 1 0 0 1.25h14.2a.625.625 0 0 0 0-1.25z"
                    })
                },
                n = (0, r(104509).wt)("textJustifyLeft", i, "default")
        },
        192066: (e, t, r) => {
            r.d(t, {
                E: () => a,
                XT: () => n,
                u3: () => i
            }), r(832375).Oa6, r(832375).eBi, r(832375).jft, r(832375).KNP, r(832375).l1b, r(832375).y$R, r(832375).Wuo, r(832375).cKY, r(832375).OfD, r(832375).Ok8, r(832375).kf7, r(832375).k$w, r(832375).hrX, r(832375).H3H, r(832375).GPl, r(832375).hGr, r(832375)._0W, r(832375).rqL, r(832375).$XM, r(832375).eUD, r(832375).$2J, r(832375).r1d, r(832375).HxG, r(832375).m2N, r(832375).$kK, r(832375).vjA, r(832375).XHn, r(832375).gEh, r(832375).adQ, r(832375).AsL, r(832375).$MF, r(832375).HBA, r(832375).PsW, r(832375).DHr, r(832375).kMj, r(832375).T2, r(832375).W8A, r(832375).hyq, r(832375).hxQ, r(832375).Wnz, r(832375).$$c, r(832375).Lij, r(832375).bhs, r(832375).Q4N, r(832375).bnG, r(832375).CEK, r(832375).Yxw, r(832375).aFA, r(832375).PXw, r(832375).dPx, r(832375).IF6, r(832375).HtE, r(832375).jvE, r(832375).uLb, r(832375).QOF, r(832375).KcW, r(832375).pEW, r(832375).yAZ, r(832375).a8w, r(832375).KqJ, r(832375)._ig, r(832375).ULG, r(832375).UNl, r(832375).EgT, r(832375).ziV, r(832375).V1v, r(832375).qtq, r(832375).qrH, r(832375).lMK, r(832375).enP, r(832375).XXy, r(832375).J6M, r(832375).OCn, r(832375).SS3, r(832375).es0, r(832375).Sd1, r(832375).MOG, r(832375).oo9, r(832375).wl6, r(832375).mEg, r(832375).pkG, r(832375).y75, r(832375).rfw, r(832375).GY9, r(832375).vbv, r(832375).MRl, r(832375).eV7, r(832375).KWb, r(832375).Z4m, r(832375)._6L, r(832375).AvP, r(832375)._71, r(832375).GFx, r(832375).Ghx, r(832375).nsO, r(832375).mlj, r(832375).sLR, r(832375).H53, r(832375).eqd, r(832375).G4T, r(832375).oJm, r(832375).Q$N, r(832375).ojG, r(832375).VY8, r(832375).Kq7, r(832375).aSp, r(832375).j0B, r(832375).$RT, r(832375).qcA, r(832375).gDn, r(832375).JrE, r(832375).oNS, r(832375).yiT, r(832375).XXO, r(832375).bf7, r(832375).vnT, r(832375).Hik, r(832375)._FR, r(832375).hRD, r(832375).R$c, r(832375).wI1, r(832375).IvX, r(832375).B7B, r(832375).yvd, r(832375).gDt, r(832375).S6u, r(832375)._0B, r(832375).rNM, r(832375).CsX, r(832375).bJl, r(832375).GDR, r(832375).pVl, r(832375).xMx, r(832375).lyl, r(832375).NkI, r(832375).PuY;
            let i = [r(832375).kzt],
                n = [r(832375).Wdc, r(832375).TFd, r(832375).Nm7, r(832375).YVp, r(832375).yBS, r(832375).SC1, r(832375).evP, r(832375).ukB, r(832375).qPS, r(832375).qmW, r(832375).VlP, r(832375).BiG, r(832375).Gy1, r(832375).SNf, r(832375).e4Z, r(832375).$YH, r(832375).ITT, r(832375).hWt, r(832375).Klg, r(832375).rGg, r(832375).jsQ, r(832375).OjI, r(832375).Cy3, r(832375).lo9, r(832375).iEO, r(832375).joQ, r(832375).yDO, r(832375).SBl, r(832375).Yxt, r(832375).zx0, r(832375).ozN, r(832375).nYQ, r(832375).ouC, r(832375).F9f, r(832375).dod, r(832375).qNb, r(832375).ez7, r(832375).sNL, r(832375).Fub, r(832375).iPf, r(832375).Ws0, r(832375).bwd, r(832375).Xiz, r(832375).Xh, r(832375).kW7, r(832375).Crh, r(832375).ZPG, r(832375).EuC, r(832375).Xwe, r(832375).NXh, r(832375).iiK, r(832375).SMn, r(832375).DWi, r(832375).m3J, r(832375).Jmj, r(832375).naB, r(832375).f3c, r(832375).aJN, r(832375).sB_, r(832375).PcJ, r(832375).mu7, r(832375).ytf, r(832375).IeV, r(832375).RWv, r(832375).JAq, r(832375).yKj, r(832375).HAA, r(832375).Toz, r(832375).mSw, r(832375).A3P, r(832375).GUg, r(832375).WQd, r(832375).TFg, r(832375).C0E, r(832375).U6v, r(832375).QRx, r(832375).tEp, r(832375).yMG, r(832375).yHj, r(832375).EcF, r(832375).ef6],
                a = [r(832375)._pz]
        },
        196075: (e, t, r) => {
            r.d(t, {
                W: () => i
            });

            function i(e) {
                return "none" !== e.role && !!(!e.is_public_share_link || e.is_site)
            }
        },
        198936: (e, t, r) => {
            function i(e) {
                let {
                    parent_table: t,
                    parent_id: i,
                    user_id: n
                } = e;
                return (0, r(4962).gB)(`${t}:${i}:${n}`)
            }
            r.d(t, {
                e9: () => i,
                vc: () => n
            });
            let n = {
                table: "user_seen_record",
                columnTypes: {
                    id: r(759070).q.UUID,
                    version: r(759070).q.Number,
                    last_version: r(759070).q.Number,
                    parent_table: r(759070).q.String,
                    parent_id: r(759070).q.UUID,
                    user_id: r(759070).q.UUID,
                    last_seen_at: r(759070).q.Number,
                    space_id: r(759070).q.UUID,
                    subscription_state: r(759070).q.String
                },
                requiredColumns: {
                    space_id: !0,
                    parent_table: !0,
                    parent_id: !0,
                    user_id: !0
                },
                model: (0, r(68291).P)({
                    RecordStore: !0
                })
            }
        },
        199912: (e, t, r) => {
            r.d(t, {
                l: () => i
            });

            function i(e, t, i) {
                let n = (0, r(698596).Ay)(),
                    a = {
                        id: n,
                        type: "placeholder",
                        parentModuleId: t,
                        parentConditionalGroupId: i
                    };
                return {
                    operation: {
                        pointer: e,
                        command: "update",
                        path: ["modules", "form_conditional_modules"],
                        args: {
                            [a.id]: a
                        }
                    },
                    placeholderModuleId: n
                }
            }
        },
        211434: (e, t, r) => {
            r.d(t, {
                J: () => n,
                Y: () => i
            });
            let i = "assistant_session_starter",
                n = {
                    table: i,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        alive: r(759070).q.Boolean,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        created_by_table: r(759070).q.String,
                        created_by_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        last_edited_time: r(759070).q.Number,
                        last_edited_by_id: r(759070).q.UUID,
                        last_edited_by_table: r(759070).q.String,
                        space_id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        type: r(759070).q.String,
                        data: r(759070).q.JSON
                    },
                    requiredColumns: {
                        id: !0,
                        alive: !0,
                        version: !0,
                        parent_id: !0,
                        parent_table: !0,
                        created_by_table: !0,
                        created_by_id: !0,
                        created_time: !0,
                        last_edited_time: !0,
                        last_edited_by_id: !0,
                        last_edited_by_table: !0,
                        space_id: !0,
                        user_id: !0,
                        type: !0,
                        data: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                }
        },
        214582: (e, t, r) => {
            r.d(t, {
                i: () => u,
                l: () => l
            }), r(581454);

            function i(e) {
                return "before" === e ? "b" : "after" === e ? "a" : (0, r(722371).HB)(e)
            }

            function n(e) {
                return "b" === e ? "before" : "a" === e ? "after" : (0, r(722371).HB)(e)
            }

            function a(e) {
                switch (e.type) {
                    case "addAnnotation":
                        return {
                            t: "a",
                            x: e.textInstanceId,
                            l: e.searchLabel,
                            i: e.id,
                            s: {
                                i: e.start.id,
                                a: i(e.start.anchor)
                            },
                            e: {
                                i: e.end.id,
                                a: i(e.end.anchor)
                            },
                            a: e.annotation
                        };
                    case "removeAnnotation":
                        return {
                            t: "r",
                            x: e.textInstanceId,
                            l: e.searchLabel,
                            i: e.id,
                            s: {
                                i: e.start.id,
                                a: i(e.start.anchor)
                            },
                            e: {
                                i: e.end.id,
                                a: i(e.end.anchor)
                            },
                            k: e.annotationKey
                        }
                }
            }

            function o(e) {
                switch (e.t) {
                    case "a":
                        return {
                            type: "addAnnotation",
                            textInstanceId: e.x,
                            searchLabel: r(363372).i_(e.l),
                            id: e.i,
                            start: {
                                id: e.s.i,
                                anchor: n(e.s.a)
                            },
                            end: {
                                id: e.e.i,
                                anchor: n(e.e.a)
                            },
                            annotation: e.a
                        };
                    case "r":
                        return {
                            type: "removeAnnotation",
                            textInstanceId: e.x,
                            searchLabel: r(363372).i_(e.l),
                            id: e.i,
                            start: {
                                id: e.s.i,
                                anchor: n(e.s.a)
                            },
                            end: {
                                id: e.e.i,
                                anchor: n(e.e.a)
                            },
                            annotationKey: e.k
                        }
                }
            }

            function d(e) {
                return e.getOps().map(a)
            }

            function s(e) {
                return new(r(264952)).A(e.map(o))
            }

            function l(e) {
                var t, i;
                let n;
                e instanceof r(352139).mc ? n = {
                    t: "s"
                } : e instanceof r(352139).fn ? n = {
                    t: "e"
                } : e instanceof r(352139).of ? n = {
                    t: "p",
                    i: (t = e).id,
                    o: t.originId
                } : e instanceof r(352139).pC ? n = {
                    t: "t",
                    i: (i = e).id,
                    o: i.originId,
                    l: i.isDeleted() ? -i.getLength() : i.getLength(),
                    c: i.isDeleted() ? void 0 : i.getDefinedContent()
                } : (0, r(722371).HB)(e);
                let a = e.getAnnotationOpSetForAnchor("before");
                a && (n.b = d(a));
                let o = e.getAnnotationOpSetForAnchor("after");
                return o && (n.a = d(o)), n
            }

            function u(e) {
                var t, i;
                let n, a = 0;
                switch (e.t) {
                    case "s":
                        n = new(r(352139)).mc;
                        break;
                    case "e":
                        n = new(r(352139)).fn;
                        break;
                    case "p":
                        let o = (t = e, new(r(352139)).of(t.i, t.o));
                        n = o, a = Math.max("string" == typeof o.originId ? 0 : o.originId[1], o.id[1]);
                        break;
                    case "t":
                        let d = (i = e).l < 0 ? r(352139).pC.createDeleted(i.i, i.o, -i.l) : r(352139).pC.create(i.i, i.o, (0, r(765483).o9)(i.c, "Content not found for serialized text item"));
                        n = d, a = Math.max("string" == typeof d.originId ? 0 : d.originId[1], d.getEndId()[1]);
                        break;
                    default:
                        (0, r(722371).HB)(e)
                }
                let l = e.b;
                if (l)
                    for (let e of (n.maybeCreateAnnotationOpSetForAnchor("before", {
                            opSet: s(l),
                            deserializationSkipCloning: !0
                        }), l)) {
                        let t = e.s.i,
                            r = e.e.i;
                        a = Math.max(a, e.i[1], "string" == typeof t ? 0 : t[1], "string" == typeof r ? 0 : r[1])
                    }
                let u = e.a;
                if (u)
                    for (let e of (n.maybeCreateAnnotationOpSetForAnchor("after", {
                            opSet: s(u),
                            deserializationSkipCloning: !0
                        }), u)) {
                        let t = e.s.i,
                            r = e.e.i;
                        a = Math.max(a, e.i[1], "string" == typeof t ? 0 : t[1], "string" == typeof r ? 0 : r[1])
                    }
                return {
                    item: n,
                    maxTimestamp: a
                }
            }
        },
        220052: (e, t, r) => {
            r.d(t, {
                W: () => i
            });

            function i(e) {
                let {
                    propertyValue: t,
                    getRecordModel: i,
                    filterValueParseContext: n
                } = e, {
                    userTimeZone: a,
                    intl: o
                } = n;
                return {
                    type: "text",
                    value: (0, r(458230).r4)({
                        textValue: t,
                        getRecordModel: i,
                        userTimeZone: a,
                        intl: o
                    }).trim()
                }
            }
        },
        227318: (e, t, r) => {
            r.d(t, {
                d: () => i
            }), r(898992), r(354520), r(581454);
            class i {
                internalState;
                constructor(e) {
                    if (this.internalState = new(r(700135)).A(r(694402).jV), e)
                        for (const t of e) this.add(t)
                }
                size() {
                    return this.internalState.size
                }
                add(e) {
                    this.internalState.add(e)
                }
                addAll(e) {
                    for (let t of e) this.internalState.add(t);
                    return this
                }
                delete(e) {
                    this.internalState.delete(e)
                }
                has(e) {
                    return this.internalState.has(e)
                }
                union(e) {
                    return new i([...this, ...e])
                }
                difference(e) {
                    return new i([...this].filter(t => !e.has(t)))
                }*[Symbol.iterator]() {
                    for (let e of this.internalState) yield e
                }
                toJSON() {
                    return [...this].map(({
                        table: e,
                        id: t,
                        spaceId: r
                    }) => [e, t, ...r ? [r] : []].join(":"))
                }
            }
        },
        230960: (e, t, r) => {
            r.d(t, {
                PE: () => i
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(803949), r(581454);

            function i(e) {
                let {
                    before: t,
                    after: i,
                    schema: n
                } = e;
                return function(e) {
                    let {
                        before: t,
                        after: i,
                        schema: n
                    } = e, a = [];
                    return (n ? Object.keys(n) : r(511791).vn).forEach(e => {
                        (0, r(247438).dze)(t && t[e], i && i[e]) && a.push(e)
                    }), a
                }({
                    before: null == t ? void 0 : t.properties,
                    after: i.properties,
                    schema: n
                })
            }
        },
        232456: (e, t, r) => {
            r.d(t, {
                T: () => i
            });

            function i(e) {
                let {
                    updateCollectionPropertySchemaOperation: t,
                    collectionSchemaHLOPEnabled: r
                } = e;
                return r ? t : { ...t.args.primitiveOp,
                    pointer: t.pointer,
                    path: t.path
                }
            }
        },
        234184: (e, t, r) => {
            r.d(t, {
                w: () => i
            });

            function i(e) {
                let {
                    block: t,
                    propertyValue: i,
                    propertySchema: n,
                    skipDefault: a
                } = e;
                return {
                    type: "person",
                    value: (0, r(465256).e)({
                        textValue: i,
                        propertySchema: n,
                        blockCreatorPointer: t.getCreatedByPointer(),
                        skipDefault: a
                    })
                }
            }
        },
        235089: (e, t, r) => {
            r.d(t, {
                U: () => i,
                u: () => n
            });
            let i = " ";

            function n(e) {
                return e[0] === i
            }
        },
        260357: (e, t, r) => {
            function i(e) {
                let {
                    schema: t,
                    property: i,
                    block: n,
                    getRecordModel: o
                } = e, d = t[i];
                if (!d) return;
                let s = r(993189).Bj6.fromBlock(n).getProperty(i, o);
                return (0, a[d.type])({
                    textValue: s,
                    propertySchema: d,
                    ...e
                })
            }

            function n(e) {
                let {
                    textValue: t,
                    getRecordModel: i,
                    collectionRequestContext: n
                } = e, {
                    userTimeZone: a,
                    intl: o
                } = n;
                return (0, r(458230).r4)({
                    textValue: t,
                    getRecordModel: i,
                    userTimeZone: a,
                    intl: o
                })
            }
            r.d(t, {
                W: () => i
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(581454);
            let a = {
                title: n,
                text: n,
                select: e => {
                    let {
                        textValue: t,
                        propertySchema: i
                    } = e, n = i.options || [];
                    return r(561872).L3(t, n)
                },
                multi_select: e => {
                    let {
                        textValue: t,
                        propertySchema: i
                    } = e, n = i.options || [], a = r(561872).o2(t, n);
                    return a.sort(), a.join(",")
                },
                status: e => {
                    let {
                        textValue: t,
                        propertySchema: i
                    } = e;
                    return r(561872).RZ(t, i)
                },
                relation: ({
                    textValue: e,
                    getRecordModel: t,
                    propertySchema: i
                }) => {
                    if ("relation" !== i.type) return "";
                    let n = r(561872).bG({
                        relationValue: r(561872).n(e),
                        getRecordModel: t,
                        propertySchema: i,
                        includeNoAccess: !1
                    }).map(e => `https://www.notion.so/${(0,r(4962).Xw)(e.id)}`);
                    return n.sort(), n.join(", ")
                },
                rollup: e => r(26837).I({ ...e,
                    collectionRequestContext: { ...e.collectionRequestContext,
                        visitedProperties: new Set
                    },
                    formulasModule: e.formulasModule,
                    spaceIdCreator: e.spaceIdCreator
                }),
                url: ({
                    textValue: e
                }) => r(561872).MO(e),
                email: ({
                    textValue: e
                }) => (0, r(247438).k4p)(e),
                phone_number: ({
                    textValue: e
                }) => (0, r(247438).k4p)(e),
                checkbox: ({
                    textValue: e
                }) => (0, r(896216).w)(e) ? r(745680).I1 : r(745680).oP,
                person: e => {
                    let {
                        textValue: t,
                        getRecordModel: i,
                        propertySchema: n,
                        block: a,
                        collectionRequestContext: o
                    } = e, {
                        intl: d
                    } = o, s = r(993189).Bj6.fromBlock(a), l = (0, r(465256).e)({
                        textValue: t,
                        propertySchema: n,
                        blockCreatorPointer: s.getCreatedByPointer(),
                        convertGroupPointersToBeComposite: !0
                    }), u = r(381453).oE(l.map(e => {
                        if ("space_permission_group" === e.table) {
                            let t = i(e);
                            return (0, r(95384).n)({
                                intl: d,
                                permissionGroupModel: t
                            })
                        }
                        let t = i(e);
                        return null == t ? void 0 : t.getDisplayName(d)
                    }));
                    return u.sort(), u.join(",")
                },
                number: ({
                    textValue: e
                }) => {
                    let t = r(588688).M(e);
                    if (void 0 !== t) return t.toString()
                },
                auto_increment_id: ({
                    textValue: e,
                    block: t,
                    getRecordModel: i
                }) => {
                    let n = r(561872).On(e);
                    if (void 0 !== n) {
                        let e = r(993189).Bj6.fromBlock(t),
                            a = e.getParentTable();
                        if (a !== r(46241).V) return;
                        let o = i((0, r(288338).a)({
                            spaceId: e.getSpaceId(),
                            parentTable: a,
                            parentId: e.getParentId()
                        }));
                        return (0, r(154326).H4)(null == o ? void 0 : o.getRecordKey(), n)
                    }
                },
                date: ({
                    textValue: e,
                    propertySchema: t,
                    collectionRequestContext: i
                }) => {
                    let {
                        userTimeZone: n,
                        intl: a
                    } = i, o = (0, r(179358).b)(e), {
                        date_format: d,
                        time_format: s
                    } = t;
                    if (o) return (0, r(850640).ZF)({
                        allowRelativeDates: !1,
                        value: o,
                        date_format: d,
                        time_format: s,
                        userTimeZone: n,
                        intl: a
                    })
                },
                file: e => {
                    let t = r(561872).pJ(e.textValue, e.propertySchema).map(t => {
                        if (e.exportedFilePaths && e.secureFileS3Url && e.secureFileS3UrlV2 && r(728601)._J(t.url)) {
                            let e = r(728601).TV(t.url);
                            if (e) return e
                        }
                        return t.url
                    });
                    return t.sort(), t.join(",")
                },
                formula: e => {
                    let {
                        property: t,
                        schema: i,
                        block: n,
                        getRecordModel: a,
                        collectionRequestContext: o,
                        formulasModule: d,
                        spaceIdCreator: s
                    } = e, {
                        userTimeZone: l,
                        intl: u,
                        depth: c,
                        formulaTimeoutTimestampMs: _,
                        logFormulaTimeoutFn: p,
                        resultCache: m,
                        regExpCache: q,
                        formatDateCache: b,
                        experimentService: g,
                        collectionFeatureGates: f
                    } = o, v = i[t];
                    if (d)
                        if ((0, r(537664).F)(v)) {
                            if (!v.formula2) return;
                            let e = d.evaluateCollectionFormula2({
                                block: n,
                                property: t,
                                formulaCode: v.formula2.code,
                                getRecordModel: a,
                                intl: u,
                                userTimeZone: l,
                                depth: c,
                                visitedProperties: new Set,
                                resultCache: m,
                                regExpCache: q,
                                formatDateCache: b,
                                formulaTimeoutTimestampMs: _,
                                logFormulaTimeoutFn: p,
                                experimentService: g,
                                collectionFeatureGates: f,
                                spaceIdCreator: s
                            });
                            if (!e) return;
                            let i = (0, r(297493).Ht)(e);
                            return (0, r(458230).r4)({
                                textValue: i,
                                getRecordModel: a,
                                userTimeZone: l,
                                intl: u
                            })
                        } else {
                            let e = d.evaluateFormulaProperty({
                                schema: i,
                                property: t,
                                block: n,
                                getRecordModel: a,
                                collectionRequestContext: { ...o,
                                    visitedProperties: new Set
                                },
                                spaceIdCreator: s
                            });
                            return "boolean" == typeof e ? e ? r(745680).I1 : r(745680).oP : (0, r(627179).Et)(e) ? e.toString() : r(943003).kC(e) ? (0, r(850640).ZF)({
                                allowRelativeDates: !1,
                                value: e,
                                userTimeZone: l,
                                intl: u
                            }) : e
                        }
                },
                created_time: e => {
                    let {
                        block: t,
                        collectionRequestContext: i
                    } = e, {
                        userTimeZone: n,
                        intl: a
                    } = i, o = r(993189).Bj6.fromBlock(t);
                    if (o.getCreatedTime()) return (0, r(850640).ZF)({
                        allowRelativeDates: !1,
                        value: r(25825).KQ(o.getCreatedTime(), n),
                        userTimeZone: n,
                        intl: a
                    })
                },
                last_edited_time: e => {
                    let {
                        block: t,
                        collectionRequestContext: i
                    } = e, {
                        userTimeZone: n,
                        intl: a
                    } = i, o = r(993189).Bj6.fromBlock(t);
                    if (o.getLastEditedTime()) return (0, r(850640).ZF)({
                        allowRelativeDates: !1,
                        value: r(25825).KQ(o.getLastEditedTime(), n),
                        userTimeZone: n,
                        intl: a
                    })
                },
                created_by: e => {
                    let {
                        block: t,
                        getRecordModel: r,
                        collectionRequestContext: i
                    } = e, {
                        intl: n
                    } = i, a = t.getCreatedByPointer(), o = a && r(a);
                    return null == o ? void 0 : o.getDisplayName(n)
                },
                last_edited_by: e => {
                    let {
                        block: t,
                        getRecordModel: r,
                        collectionRequestContext: i
                    } = e, {
                        intl: n
                    } = i, a = t.getLastEditedByPointer(), o = a && r(a);
                    return null == o ? void 0 : o.getDisplayName(n)
                },
                place: e => {
                    let {
                        textValue: t
                    } = e, i = (0, r(862060).eC)(t);
                    return (0, r(862060).X1)(i)
                },
                last_visited_time: () => "",
                button: () => "",
                location: () => "",
                verification: () => void 0
            }
        },
        264952: (e, t, r) => {
            r.d(t, {
                A: () => l,
                G: () => c
            }), r(898992), r(581454), r(941795);
            var i = r.n(r(625473)),
                n = () => r(381453),
                a = () => r(722371),
                o = () => r(101787),
                d = () => r(670483),
                s = () => r(540180);
            class l {
                constructor(e = [], t = !1) {
                    if (this.ops = e, t) return;
                    ! function(e) {
                        for (let t = 1; t < e.length; t++)
                            if (!(0 > (0, s().Nf)(e[t - 1].id, e[t].id))) throw new(o()).QkH("Annotation operation ID is out of order")
                    }(e)
                }
                add(e) {
                    (0, r(765483).MX)(!(0, d().nj)(e.start, e.end), "Annotation start and end positions should not be the same"), "addAnnotation" === e.type && (r(247438).iGj(e.annotation) || r(247438).gir(e.annotation)) && (0, r(765483).MX)((0, d().lS)(e.start.id, e.end.id) && "before" === e.start.anchor && "after" === e.end.anchor, "Mention/equation annotation should only be applied to one character", {
                        start: e.start,
                        end: e.end,
                        id: e.id,
                        textInstanceId: e.textInstanceId,
                        searchLabel: e.searchLabel
                    });
                    let t = this.findInsertionIndex(e.id);
                    this.ops.splice(t, 0, e)
                }
                findInsertionIndex(e) {
                    let t = this.ops.findIndex(t => (0, s().Nf)(t.id, e) > 0);
                    return t >= 0 ? t : this.ops.length
                }
                getOps() {
                    return this.ops
                }
                getActiveAnnotationsInternal() {
                    let e = new(r(369516)).r;
                    for (let t of this.ops) {
                        let r = t.type;
                        "addAnnotation" === r ? e.add(t.annotation) : "removeAnnotation" === r ? "string" == typeof t.annotationKey ? e.removeGroupingKey(t.annotationKey) : e.remove(t.annotationKey) : (0, a().HB)(r)
                    }
                    return e
                }
                getActiveAnnotations() {
                    let e = new Map;
                    for (let t of this.getActiveAnnotationsInternal()) e.set(c(t), t);
                    return e
                }
                getResolvedAnnotations() {
                    return this.getActiveAnnotationsInternal().toArray()
                }
                containsOpId(e) {
                    for (let t of this.ops)
                        if ((0, d().Dx)(t.id, e.id)) {
                            if ("annotationOp" === e.type && n().n4(t, e.annotationOp)) return "exists_same";
                            return "exists_different"
                        }
                    return !1
                }
                clone() {
                    return new l([...this.ops], !0)
                }
                equals(e) {
                    return n().n4(this.ops, e.ops)
                }
                static equals(e, t) {
                    return e === t || (void 0 === e || void 0 === t ? e === t : e.equals(t))
                }
                toString() {
                    let e = this.ops.map(e => {
                            switch (e.type) {
                                case "addAnnotation":
                                    return `+${u(e.annotation)}`;
                                case "removeAnnotation":
                                    return `-${u(e.annotationKey)}`
                            }
                        }),
                        t = e.length ? e.join(", ") : "empty";
                    return `[AnnotationOpSet ${t}]`
                }
                count() {
                    return this.ops.length
                }
            }

            function u(e) {
                let t = "string" == typeof e ? e : r(247438).JIi(e);
                return "string" == typeof t ? t : `(${t.join(",")})`
            }

            function c(e) {
                let t = r(247438).JIi(e);
                return "string" == typeof t ? t : i()(t)
            }
        },
        265129: (e, t, r) => {
            r.d(t, {
                A: () => n,
                g: () => i
            });
            class i {
                constructor(e = 0) {
                    this.value = e
                }
                get() {
                    return this.value
                }
                set(e) {
                    this.value = e
                }
            }
            class n {
                valueHolder;
                constructor(e = 0) {
                    this.valueHolder = "number" == typeof e ? new i(e) : e, (0, r(765483).MX)(this.valueHolder.get() >= 0, "Clock value must be non-negative")
                }
                reserveTicks(e) {
                    (0, r(765483).MX)(e > 0, "Reserved ticks must be greater than 0");
                    let t = this.valueHolder.get();
                    return this.valueHolder.set(t + e), t + 1
                }
                maybeUpdateClock(e) {
                    return e > this.valueHolder.get() && (this.valueHolder.set(e), !0)
                }
                getValue() {
                    return this.valueHolder.get()
                }
            }
        },
        266858: (e, t, r) => {
            r.d(t, {
                r: () => i
            }), r(898992), r(908872);

            function i(e, t, i) {
                if (!e) return;
                let n = Array.from(r(433466).Zx(e)).reduce((e, r) => {
                    let i = t({
                        value: 0,
                        textInstanceId: r
                    });
                    return e[r] = i, e
                }, {});
                return r(433466).iu({
                    sessionId: i,
                    serialized: e,
                    opClockValueHolderMap: n
                })
            }
        },
        272139: (e, t, r) => {
            r.d(t, {
                h: () => i
            });

            function i(e) {
                return void 0 === e || isNaN(e) ? [] : [
                    [e.toString()]
                ]
            }
        },
        276303: (e, t, r) => {
            r.d(t, {
                e: () => i
            }), r(898992), r(803949);

            function i(e, t) {
                var i;
                let n, a, o = t ? ? void 0;
                switch (t = t ? ? {}, n = e.path.length > 0 ? (0, r(488307).OU)(t, e.path) : t, e.command) {
                    case "set":
                        return e.pointer.table === r(832375).evP && 0 === e.path.length && (0, r(722371).Gv)(e.args) && !Array.isArray(e.args) && (0, r(722371).Gv)(n) && !Array.isArray(n) && 0 === Object.keys(n).length || e.pointer.table === r(832375).ITT && 0 === e.path.length && (0, r(722371).Gv)(e.args) && !Array.isArray(e.args) && (0, r(722371).Gv)(n) && !Array.isArray(n) && 0 === Object.keys(n).length ? {
                            pointer: e.pointer,
                            path: [],
                            command: "update",
                            args: {
                                alive: !1
                            }
                        } : {
                            pointer: e.pointer,
                            path: e.path,
                            command: "set",
                            args: r(627179).pN(n) ? null : n
                        };
                    case "update":
                        return (i = n) || (i = {}), a = {}, Object.keys(e.args).forEach(e => {
                            a[e] = i[e], void 0 === a[e] && (a[e] = null)
                        }), {
                            pointer: e.pointer,
                            path: e.path,
                            command: "update",
                            args: a
                        };
                    case "listBefore":
                        return r(929891).WZ(e, n);
                    case "listAfter":
                        return r(929891).j3(e, n);
                    case "listRemove":
                        return r(929891).DB(e, n);
                    case "keyedObjectListBefore":
                        return r(929891).tU(e, n);
                    case "keyedObjectListAfter":
                        return r(929891).CY(e, n);
                    case "keyedObjectListRemove":
                        return r(929891).uT(e, n);
                    case "keyedObjectListUpdate":
                        return r(929891).J9(e, n);
                    case "addEdge":
                        return r(89752).x(e, o);
                    case "addRelationAfter":
                    case "addRelationBefore":
                        return r(601979).W_(e, n);
                    case "removeRelation":
                        return r(601979).dk(e, n);
                    case "addPersonAfter":
                    case "addPersonBefore":
                        return r(640937).J_(e, n);
                    case "removePerson":
                        return r(640937).GA(e, n);
                    case "addSelectOptionAfter":
                    case "addSelectOptionBefore":
                        return r(640937).du(e, n);
                    case "removeSelectOption":
                        return r(640937).UF(e, n);
                    case "appendActivity":
                    case "listReplace":
                    case "setPermissionItem":
                    case "temporarySetPermissionItemForBackfill":
                    case "setSingletonPermissionItem":
                    case "addRelations":
                    case "copyFile":
                    case "listBeforeMulti":
                    case "listAfterMulti":
                    case "removeTeamMembershipItem":
                    case "setTeamMembershipItem":
                    case "ensureScheduleId":
                        return;
                    default:
                        (0, r(722371).HB)(e)
                }
            }
        },
        288338: (e, t, r) => {
            r.d(t, {
                a: () => i
            });

            function i(e) {
                let {
                    spaceId: t
                } = e;
                return {
                    table: "record_key",
                    id: (0, r(406033).F3)(e),
                    spaceId: t
                }
            }
        },
        289879: (e, t, r) => {
            r.d(t, {
                d: () => i
            });
            let i = ["onboarding", "inapp_modal"]
        },
        298085: (e, t, r) => {
            r.d(t, {
                T: () => i,
                u: () => n
            });
            let i = "thread",
                n = {
                    table: i,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        messages: r(759070).q.UUIDArray,
                        data: r(759070).q.JSON,
                        permissions: r(759070).q.JSON,
                        space_id: r(759070).q.UUID,
                        current_inference_id: r(759070).q.UUID,
                        current_inference_lease_expiration: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        updated_time: r(759070).q.Number,
                        updated_by_id: r(759070).q.UUID,
                        updated_by_table: r(759070).q.String,
                        file_ids: r(759070).q.StringArray,
                        created_source: r(759070).q.String,
                        alive: r(759070).q.Boolean,
                        type: r(759070).q.String
                    },
                    requiredColumns: {
                        alive: !0,
                        version: !0,
                        parent_id: !0,
                        parent_table: !0,
                        space_id: !0,
                        created_time: !0,
                        created_by_id: !0,
                        created_by_table: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                }
        },
        312028: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            let i = function(e) {
                return !(!e || "string" != typeof e || e.length > 100 || e.startsWith("data") || e.startsWith("http") || e.startsWith("/images") || e.startsWith("/icons") || e.startsWith("notion:") || e.startsWith("attachment:")) && r(289887).onlyEmoji(e).length > 0
            }
        },
        317315: (e, t, r) => {
            r.d(t, {
                i: () => a
            }), r(296540);
            var i = r(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M12.876 7.982a.625.625 0 1 0-1.072-.644L9.25 11.595 7.815 9.92a.625.625 0 1 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                        }), (0, i.jsx)("path", {
                            d: "M5.25 3.125A2.125 2.125 0 0 0 3.125 5.25v9.5c0 1.174.951 2.125 2.125 2.125h9.5a2.125 2.125 0 0 0 2.125-2.125v-9.5a2.125 2.125 0 0 0-2.125-2.125zM4.375 5.25c0-.483.392-.875.875-.875h9.5c.483 0 .875.392.875.875v9.5a.875.875 0 0 1-.875.875h-9.5a.875.875 0 0 1-.875-.875z"
                        })]
                    })
                },
                a = (0, r(104509).wt)("checkmarkSquare", n, "default")
        },
        343778: (e, t, r) => {
            r.d(t, {
                y: () => i
            });

            function i(e) {
                return r(922934).E.hasOwnProperty(e)
            }
        },
        352139: (e, t, r) => {
            r.d(t, {
                fn: () => o,
                mc: () => a,
                of: () => d,
                pC: () => n
            });
            class i {
                prev = void 0;
                next = void 0;
                annotationOpSetBefore = void 0;
                annotationOpSetAfter = void 0;
                constructor(e) {
                    this.id = e
                }
                startsWithId(e) {
                    return this.containsId(e)
                }
                endsWithId(e) {
                    return this.containsId(e)
                }
                containsId(e) {
                    return (0, r(670483).lS)(this.id, e)
                }
                getAnnotationOpSetForAnchor(e) {
                    return "before" === e ? this.annotationOpSetBefore : "after" === e ? this.annotationOpSetAfter : void(0, r(722371).HB)(e)
                }
                getAnnotations(e) {
                    var t;
                    return (null == (t = this.getAnnotationOpSetForAnchor(e)) ? void 0 : t.getOps()) || []
                }
                maybeCreateAnnotationOpSetForAnchor(e, t) {
                    var i, n;
                    "before" === e ? this.annotationOpSetBefore ? ? = (null != t && t.deserializationSkipCloning ? null == t ? void 0 : t.opSet : null == t || null == (i = t.opSet) ? void 0 : i.clone()) ? ? new(r(264952)).A : "after" === e ? this.annotationOpSetAfter ? ? = (null != t && t.deserializationSkipCloning ? null == t ? void 0 : t.opSet : null == t || null == (n = t.opSet) ? void 0 : n.clone()) ? ? new(r(264952)).A : (0, r(722371).HB)(e)
                }
                copyAnnotationOpSetTo(e) {
                    this.annotationOpSetBefore && (e.annotationOpSetBefore = this.annotationOpSetBefore.clone()), this.annotationOpSetAfter && (e.annotationOpSetAfter = this.annotationOpSetAfter.clone())
                }
                equals(e) {
                    return typeof this == typeof e && r(264952).A.equals(this.annotationOpSetBefore, e.annotationOpSetBefore) && r(264952).A.equals(this.annotationOpSetAfter, e.annotationOpSetAfter)
                }
                toString() {
                    return `[${this.className}]`
                }
                getAnnotationOpsCount() {
                    var e, t;
                    return ((null == (e = this.annotationOpSetBefore) ? void 0 : e.count()) ? ? 0) + ((null == (t = this.annotationOpSetAfter) ? void 0 : t.count()) ? ? 0)
                }
            }
            class n extends i {
                className = "TextItem";
                deleted = !1;
                prev;
                next;
                constructor(e, t, r, i) {
                    super(e), this.id = e, this.originId = t, this.content = r, this.length = i, this.verifyValueAndLength()
                }
                verifyValueAndLength() {
                    (0, r(765483).MX)(!this.content || this.content.length === this.length, "TextItem content length must match item length"), (0, r(765483).MX)(this.length > 0, "TextItem must have nonzero length")
                }
                getStartId() {
                    return this.id
                }
                getEndId() {
                    let e = this.id;
                    return [e[0], e[1] + this.length - 1]
                }
                startsWithId(e) {
                    return (0, r(670483).lS)(this.getStartId(), e)
                }
                endsWithId(e) {
                    return (0, r(670483).lS)(this.getEndId(), e)
                }
                containsId(e) {
                    return "start" !== e && "end" !== e && this.id[0] === e[0] && this.id[1] <= e[1] && e[1] <= this.id[1] + this.length - 1
                }
                getDefinedContent() {
                    return (0, r(765483).o9)(this.content, "Text item content is not defined")
                }
                isDeleted() {
                    return this.deleted
                }
                setDeleted() {
                    this.deleted = !0, this.content = void 0
                }
                splitBeforeId(e) {
                    return this.split(e, "before")
                }
                splitAfterId(e) {
                    return this.split(e, "after")
                }
                split(e, t) {
                    var i;
                    (0, r(765483).MX)(this.length > 1, "Text item must have more than one item to split"), (0, r(765483).MX)(this.containsId(e), "Text item must contain op id to split");
                    let a = e[1] - this.id[1] + +("after" === t);
                    (0, r(765483).MX)(0 < a && a < this.length, "Split offset must be between 0 and item length");
                    let o = [this.id[0], this.id[1] + a],
                        d = [this.id[0], this.id[1] + a - 1],
                        s = this.deleted ? n.createDeleted(o, d, this.length - a) : n.create(o, d, this.getDefinedContent().slice(a));
                    this.annotationOpSetAfter && (s.annotationOpSetAfter = this.annotationOpSetAfter.clone());
                    let l = this.next;
                    return this.next = s, s.prev = this, l && (s.next = l, l.prev = s), this.content = null == (i = this.content) ? void 0 : i.slice(0, a), this.length = a, this.verifyValueAndLength(), this.annotationOpSetAfter = void 0, this.next = s, s
                }
                maybeMergeWithNext() {
                    let e = this.next;
                    if (!(e instanceof n)) return !1;
                    let t = this.getEndId(),
                        i = e.getStartId();
                    return !!(0, r(670483).lS)(t, e.originId) && t[0] === i[0] && t[1] === i[1] - 1 && this.deleted === e.deleted && void 0 === this.annotationOpSetAfter && void 0 === e.annotationOpSetBefore && (this.content && e.content && (this.content += e.content), this.length += e.length, this.verifyValueAndLength(), e.annotationOpSetAfter && (this.annotationOpSetAfter = e.annotationOpSetAfter.clone()), this.next = e.next, e.next && (e.next.prev = this), e.prev = void 0, e.next = void 0, !0)
                }
                getLength() {
                    return this.length
                }
                clone() {
                    let e = this.deleted ? n.createDeleted(this.id, this.originId, this.length) : n.create(this.id, this.originId, this.getDefinedContent());
                    return this.copyAnnotationOpSetTo(e), e
                }
                equals(e) {
                    return super.equals(e) && e instanceof n && (0, r(670483).lS)(this.id, e.id) && (0, r(670483).lS)(this.originId, e.originId) && this.deleted === e.deleted && this.content === e.content && this.length === e.length
                }
                static create(e, t, r) {
                    return new n(e, t, r, r.length)
                }
                static createDeleted(e, t, r) {
                    let i = new n(e, t, void 0, r);
                    return i.setDeleted(), i
                }
                toString() {
                    return this.deleted ? `[${this.className} (deleted)]` : `[${this.className} ${this.content}]`
                }
                toPrevItem() {
                    var e, t;
                    return {
                        type: "text",
                        originId: this.originId,
                        id: this.id,
                        length: this.length,
                        annotationOpsBefore: null == (e = this.annotationOpSetBefore) ? void 0 : e.getOps(),
                        annotationOpsAfter: null == (t = this.annotationOpSetAfter) ? void 0 : t.getOps(),
                        ...this.deleted ? {
                            deleted: !0,
                            content: void 0
                        } : {
                            deleted: !1,
                            content: this.getDefinedContent()
                        }
                    }
                }
            }
            class a extends i {
                className = "StartItem";
                prev = void 0;
                next;
                id = "start";
                constructor() {
                    super("start")
                }
                clone() {
                    let e = new a;
                    return this.copyAnnotationOpSetTo(e), e
                }
                equals(e) {
                    return super.equals(e) && e instanceof a
                }
                toPrevItem() {
                    var e, t;
                    return {
                        type: "start",
                        annotationOpsBefore: null == (e = this.annotationOpSetBefore) ? void 0 : e.getOps(),
                        annotationOpsAfter: null == (t = this.annotationOpSetAfter) ? void 0 : t.getOps()
                    }
                }
            }
            class o extends i {
                className = "EndItem";
                prev;
                next = void 0;
                id = "end";
                originId = "start";
                constructor() {
                    super("end")
                }
                clone() {
                    let e = new o;
                    return this.copyAnnotationOpSetTo(e), e
                }
                equals(e) {
                    return super.equals(e) && e instanceof o
                }
            }
            class d extends i {
                className = "SplitItem";
                prev;
                next;
                constructor(e, t) {
                    super(e), this.id = e, this.originId = t
                }
                clone() {
                    let e = new d(this.id, this.originId);
                    return this.copyAnnotationOpSetTo(e), e
                }
                equals(e) {
                    return super.equals(e) && e instanceof d && (0, r(670483).Dx)(this.id, e.id) && (0, r(670483).lS)(this.originId, e.originId)
                }
                toPrevItem() {
                    var e, t;
                    return {
                        type: "split",
                        originId: this.originId,
                        id: this.id,
                        annotationOpsBefore: null == (e = this.annotationOpSetBefore) ? void 0 : e.getOps(),
                        annotationOpsAfter: null == (t = this.annotationOpSetAfter) ? void 0 : t.getOps()
                    }
                }
            }
        },
        359995: (e, t, r) => {
            r.d(t, {
                r: () => i
            });

            function i(e) {
                return e ? r(745680).h4 : r(745680).ZO
            }
        },
        366129: (e, t, r) => {
            r.d(t, {
                Ay: () => b,
                XD: () => q,
                c$: () => c
            }), r(18107), r(944114), r(967357);
            var i = r.n(r(625473)),
                n = () => r(722371),
                a = () => r(101787),
                o = () => r(670483),
                d = () => r(83987),
                s = () => r(540180),
                l = () => r(352139),
                u = () => r(765483);

            function c(e) {
                return e instanceof l().mc || e instanceof l().of
            }

            function _(e) {
                return e instanceof l().fn || e instanceof l().of
            }

            function p(e) {
                return e instanceof l().pC
            }

            function m(e) {
                return "EndItem" !== e.className
            }

            function q(e) {
                return "end" !== e
            }
            class b {
                textInstanceId;
                searchLabel;
                opClock;
                startItem;
                endItem;
                visibleCount;
                indexToOpIdMap = void 0;
                constructor(e, t, i, n) {
                    this.textInstanceId = e, this.searchLabel = n, this.opClock = t, this.startItem = i;
                    const a = r(450694).W(i);
                    this.endItem = (0, u().Wg)(a, _, d().sF, {
                        from: "constructor",
                        textInstanceId: e,
                        searchLabel: this.searchLabel,
                        endItemType: null == a ? void 0 : a.className
                    }), (0, u().MX)(this.startItem !== this.endItem, "Text slice must not be empty"), this.visibleCount = r(450694).Gf(i)
                }
                rebuildIndexToOpIdMap() {
                    for (let e of (this.indexToOpIdMap = [], this.iterateItems({
                            includeDeleted: !1
                        }))) {
                        if (!(e instanceof l().pC)) continue;
                        let [t, r] = e.id, i = e.getLength();
                        for (let e = 0; e < i; e++) this.indexToOpIdMap.push([t, r + e])
                    }(0, u().MX)(this.indexToOpIdMap.length === this.visibleCount, "indexToOpIdMap length must match visible count", {
                        indexToOpIdMapLength: this.indexToOpIdMap.length,
                        visibleCount: this.visibleCount
                    })
                }
                getSearchLabel() {
                    return this.searchLabel
                }
                setSearchLabel(e) {
                    (0, u().MX)(!1, "setSearchLabel is for testing only"), this.searchLabel = e
                }
                getStartItem() {
                    return this.startItem
                }
                getEndItem() {
                    return this.endItem
                }
                getVisibleCount() {
                    return this.visibleCount
                }
                applyInsertTextOperation({
                    op: e,
                    originPresentInTextSlice: t = !0,
                    enforceMonotonicInsertTextOperations: i = !1,
                    logger: n
                }) {
                    (0, u().MX)(!r(247438).bJT(e.content), "TextItem must not contain disallowed characters");
                    let a = l().pC.create(e.id, e.originId, e.content);
                    return this.integrateItem({
                        newItem: a,
                        originItemOverride: t ? void 0 : this.startItem,
                        enforceMonotonicInsertTextOperations: i,
                        logger: n
                    }), this.opClock.maybeUpdateClock((0, r(458434).b)(e)), this.validateContent(), !0
                }
                backfillDeletedTextItem(e, t, i, n, a) {
                    let o = l().pC.createDeleted(e, t, i);
                    this.integrateItem({
                        newItem: o,
                        originItemOverride: n ? void 0 : this.startItem,
                        logger: a
                    }), this.opClock.maybeUpdateClock((0, r(458434).H)(e, i))
                }
                applyDeleteTextOperation(e) {
                    let t = !1;
                    for (let r of e.idRanges)
                        for (let e of this.getTextItemsInIdRange(r)) e.isDeleted() || (e.setDeleted(), this.visibleCount -= e.getLength(), t = !0, e.prev instanceof l().pC && e.prev.maybeMergeWithNext(), e.maybeMergeWithNext());
                    return t && (this.indexToOpIdMap = void 0, this.validateContent()), t
                }
                applySplitTextOperation({
                    op: e,
                    originPresentInTextSlice: t,
                    logger: i
                }) {
                    let n = new(l()).of(e.id, e.originId);
                    return this.integrateItem({
                        newItem: n,
                        originItemOverride: t ? void 0 : this.startItem,
                        logger: i
                    }), this.opClock.maybeUpdateClock((0, r(458434).b)(e)), !0
                }
                findInsertionPoint(e, t) {
                    let r = t;
                    for (; r.next && !((0, s()._3)(e, r.next.id) > 0);) r = (0, u().Wg)(r.next, m, d().M2);
                    return r
                }
                integrateItem({
                    newItem: e,
                    originItemOverride: t,
                    enforceMonotonicInsertTextOperations: r = !1,
                    logger: i
                }) {
                    this.verifyDoesNotContainOpId({
                        type: e instanceof l().pC ? "text" : "split",
                        id: e.id,
                        originId: e.originId,
                        enforceMonotonicInsertTextOperations: r,
                        logger: i
                    }), (0, u().MX)(1 === (0, s()._3)(e.id, e.originId), "new item ID must be strictly greater than its origin ID", {
                        newItemId: e.id,
                        newItemOriginId: e.originId
                    });
                    let n = t ? ? (0, u().o9)(this.getItemEndingWithId(e.originId), d().QS),
                        a = (0, u().Wg)(n, m, d().rQ),
                        o = this.findInsertionPoint(e.id, a),
                        c = o.next;
                    if (o.next = e, e.prev = o, c && (e.next = c, c.prev = e), e instanceof l().pC && (this.visibleCount += e.getLength()), e instanceof l().of) {
                        this.validateNotEndingWithHighSurrogate(o, "Cannot split content between a surrogate pair");
                        let t = this.getPrecedingAnnotationOpSet({
                            id: e.id,
                            anchor: "before"
                        });
                        t && e.maybeCreateAnnotationOpSetForAnchor("before", {
                            opSet: t
                        })
                    }
                    o instanceof l().pC && o.maybeMergeWithNext(), this.indexToOpIdMap = void 0
                }
                validateContent() {
                    (0, u().MX)(!r(247438).dCO(this.getText()), "Content must not contain unpaired surrogates")
                }
                validateNotEndingWithHighSurrogate(e, t) {
                    if (!(e instanceof l().pC) || e.isDeleted()) return;
                    let i = e.getDefinedContent().at(-1);
                    i && (0, u().MX)("high" !== r(247438).lSC(i), t)
                }
                applyAnnotationOperation({
                    op: e,
                    logger: t
                }) {
                    this.verifyDoesNotContainOpId({
                        type: "annotationOp",
                        id: e.id,
                        annotationOp: e,
                        enforceMonotonicInsertTextOperations: !1,
                        logger: t
                    });
                    let i = (0, u().o9)("before" === e.start.anchor ? this.getItemStartingWithId(e.start.id) : this.getItemEndingWithId(e.start.id), d().QS),
                        n = (0, u().o9)("before" === e.end.anchor ? this.getItemStartingWithId(e.end.id, {
                            includeEndItem: !0
                        }) : this.getItemEndingWithId(e.end.id, {
                            includeEndItem: !0
                        }), d().QS),
                        a = this.getPrecedingAnnotationOpSet(e.start);
                    for (let {
                            item: t,
                            anchor: r
                        } of (i.maybeCreateAnnotationOpSetForAnchor(e.start.anchor, {
                            opSet: a
                        }), this.iterateItemAnnotationOpSets({
                            direction: "forward",
                            from: e.start,
                            to: e.end,
                            includeSplitCharacters: !0
                        }))) {
                        t instanceof l().of && t.maybeCreateAnnotationOpSetForAnchor(r, {
                            opSet: a
                        });
                        let i = (0, u().o9)(t.getAnnotationOpSetForAnchor(r), "Annotation op set must exist for item annotation");
                        a = i.clone(), i.add(e)
                    }
                    return n.maybeCreateAnnotationOpSetForAnchor(e.end.anchor, {
                        opSet: a
                    }), this.opClock.maybeUpdateClock((0, r(458434).b)(e)), !0
                }
                getPrecedingAnnotationOpSet(e) {
                    for (let {
                            annotationOpSet: t
                        } of this.iterateItemAnnotationOpSets({
                            direction: "backward",
                            from: e
                        })) return (0, u().o9)(t, "Annotation op set must exist for item annotation")
                }
                getActiveAnnotationsAfterId(e) {
                    let t = (0, u().o9)(this.getItemContainingId(e), d().QS),
                        r = t.endsWithId(e) ? {
                            anchor: "after",
                            id: e
                        } : {
                            anchor: "before",
                            id: t instanceof l().pC ? t.getStartId() : t.id
                        },
                        i = this.getPrecedingAnnotationOpSet(r);
                    return i ? i.getActiveAnnotations() : new Map
                }* iterateItems(e) {
                    yield* r(450694).fe(this.startItem, e)
                }* iterateItemAnnotationOpSets(e) {
                    let {
                        direction: t,
                        from: r,
                        includeSplitCharacters: i,
                        to: a
                    } = e, o = (0, u().o9)(this.getItemContainingId(r.id), d().QS);
                    (0, u().MX)("before" === r.anchor ? o.startsWithId(r.id) : o.endsWithId(r.id), "Expected item to use 'from' ID", {
                        fromAnchor: r.anchor
                    });
                    let s = r.anchor;
                    for (; o;) {
                        if (a && o.containsId(a.id) && s === a.anchor) return void(0, u().MX)("before" === a.anchor ? o.startsWithId(a.id) : o.endsWithId(a.id), "Expected item to use 'to' ID", {
                            toAnchor: a.anchor
                        });
                        let e = o.getAnnotationOpSetForAnchor(s);
                        switch (e ? yield {
                            item: o,
                            anchor: s,
                            annotationOpSet: e
                        } : i && o instanceof l().of && ("forward" === t && "before" === s || "backward" === t && "after" === s) && (yield {
                            item: o,
                            anchor: s,
                            annotationOpSet: void 0
                        }), t) {
                            case "forward":
                                o = "before" === s ? o : o.next, s = "before" === s ? "after" : "before";
                                break;
                            case "backward":
                                o = "after" === s ? o : o.prev, s = "after" === s ? "before" : "after";
                                break;
                            default:
                                (0, n().HB)(t)
                        }
                    }
                }
                getItemStartingWithId(e, t) {
                    return this.getItemContainingId(e, { ...t,
                        shouldStartWithId: !0
                    })
                }
                getItemEndingWithId(e, t) {
                    return this.getItemContainingId(e, { ...t,
                        shouldEndWithId: !0
                    })
                }
                containsItemWithId(e, t) {
                    return !!this.getItemContainingId(e, t)
                }
                getItemContainingId(e, t) {
                    for (let r of this.iterateItems({
                            includeDeleted: !0,
                            includeEndItem: null == t ? void 0 : t.includeEndItem
                        })) {
                        if (!r.containsId(e)) continue;
                        if (!(r instanceof l().pC)) return r;
                        if ("start" === e || "end" === e) continue;
                        let i = r;
                        return null != t && t.shouldStartWithId && !i.startsWithId(e) && (i = i.splitBeforeId(e)), null != t && t.shouldEndWithId && !i.endsWithId(e) && i.splitAfterId(e), i
                    }
                }
                getTextItem(e) {
                    let t = this.getItemContainingId(e, {
                        shouldStartWithId: !0
                    });
                    return t instanceof l().pC ? t : void 0
                }
                getTextItemsInIdRange(e) {
                    let [t, i] = e, [n, a] = t, o = [n, a + i - 1], d = [];
                    for (let e of this.iterateItems({
                            includeDeleted: !0
                        })) !(e instanceof l().pC) || e.getStartId()[0] !== n || 0 > (0, s().zk)(o, e.getStartId()) || 0 > (0, s().zk)(e.getEndId(), t) || d.push(e);
                    if (0 === d.length) return [];
                    r(381453).Ul(d, e => e.getStartId()[1]);
                    let u = d[0];
                    if (0 > (0, s().zk)(u.getStartId(), t)) {
                        let e = u.splitBeforeId(t);
                        d[0] = e
                    }
                    let c = d[d.length - 1];
                    return 0 > (0, s().zk)(o, c.getEndId()) && c.splitAfterId(o), d
                }
                getIndexOfTextItem(e) {
                    let t = 0;
                    for (let r of this.iterateItems({
                            includeDeleted: !0
                        }))
                        if (r instanceof l().pC) {
                            if (r.containsId(e)) {
                                if (r.isDeleted()) return {
                                    type: "deleted",
                                    nextVisibleIndex: t
                                };
                                return {
                                    type: "visible",
                                    index: t + (e[1] - r.id[1])
                                }
                            }
                            r.isDeleted() || (t += r.getLength())
                        }
                }
                getItemIdsInRange(e, t) {
                    void 0 === this.indexToOpIdMap && this.rebuildIndexToOpIdMap();
                    let r = (0, u().o9)(this.indexToOpIdMap, "Index to OpID map not built");
                    (0, u().MX)(0 <= e && e <= t, "Start index must be between 0 and end index"), (0, u().MX)(t < this.visibleCount, "End index must be less than visible count");
                    let i = [],
                        n = e;
                    for (; n <= t;) {
                        let e = r[n],
                            [a, o] = e,
                            d = 1,
                            s = n + 1;
                        for (; s <= t && r[s][0] === a && r[s][1] === o + d;) d++, s++;
                        i.push([e, d]), n = s
                    }
                    return i
                }
                getItemIdAtIndex(e) {
                    void 0 === this.indexToOpIdMap && this.rebuildIndexToOpIdMap();
                    let t = (0, u().o9)(this.indexToOpIdMap, "Index to OpID map not built");
                    return (0, u().MX)(0 <= e && e < t.length, "getItemIdAtIndex index is out of bounds for indexToOpIdMap", {
                        index: e,
                        length: t.length
                    }), t[e]
                }
                getItemIdBeforeIndex(e) {
                    let t = this.getItemIdAtIndex(e),
                        r = (0, u().o9)(this.getItemContainingId(t), d().QS),
                        i = (0, u().Wg)(r, p, d().$5);
                    if (!i.startsWithId(t)) return [t[0], t[1] - 1];
                    let n = (0, u().o9)(i.prev, "Text item must have previous item");
                    return n instanceof l().pC ? n.getEndId() : n.id
                }
                getItemIdAfterIndex(e) {
                    let t = this.getItemIdAtIndex(e);
                    return this.getItemIdAfterItem(t)
                }
                getItemIdAfterItem(e) {
                    if ("start" === e) {
                        let e = this.getStartItem();
                        return (0, u().oC)(e, l().mc, d().MJ), (0, u().o9)(this.getStartItem().next, "Text slice must have at least one item other than start").id
                    }
                    let t = (0, u().o9)(this.getItemContainingId(e), "Text slice must contain text item");
                    if (!t.endsWithId(e)) return [e[0], e[1] + 1];
                    let r = (0, u().o9)(t.next, "Item must have next item");
                    return r instanceof l().pC ? r.getStartId() : r.id
                }
                getOriginItemForInsertionIndex(e) {
                    let t;
                    if ((0, u().MX)(0 <= e && e <= this.visibleCount, "Index must be between 0 and visible count"), e === this.visibleCount) t = this.getEndItem();
                    else {
                        let r = this.getItemIdAtIndex(e),
                            i = (0, u().o9)(this.getItemContainingId(r), d().QS),
                            n = (0, u().Wg)(i, p, d().$5);
                        if (!n.startsWithId(r)) return {
                            id: [r[0], r[1] - 1],
                            item: n
                        };
                        t = n
                    }
                    for (; t.prev;) {
                        let e = t.prev;
                        if (e instanceof l().pC && !e.isDeleted()) return {
                            id: e.getEndId(),
                            item: e
                        };
                        if (e instanceof l().fn) throw new(a()).QkH("Previous item should not be an EndItem");
                        if (e.getAnnotationOpSetForAnchor("after"))
                            if (e instanceof l().pC) return {
                                id: e.getEndId(),
                                item: e
                            };
                            else return {
                                id: (0, u().Wg)(e.id, q, d().JW),
                                item: e
                            };
                        t = t.prev
                    }
                    return {
                        id: (0, u().Wg)((0, u().Wg)(t, c, d().JW).id, q, d().qP),
                        item: t
                    }
                }
                getPrevItemsForOriginId(e) {
                    let t = [],
                        r = this.getItemContainingId(e, {
                            includeEndItem: !1
                        });
                    for (; r;) {
                        if (r instanceof l().fn) throw new(a()).QkH("originId of an item should never be the id of an end item");
                        if (t.push(r.toPrevItem()), r instanceof l().mc || t.length >= 100) break;
                        r = this.getItemContainingId(r.originId, {
                            includeEndItem: !1
                        })
                    }
                    return t
                }
                getOriginItemIdForInsertionIndex(e) {
                    return this.getOriginItemForInsertionIndex(e).id
                }
                isLastOriginItemId(e) {
                    return (0, o().lS)(this.getOriginItemIdForInsertionIndex(this.visibleCount), e)
                }
                verifyDoesNotContainOpId(e) {
                    let t = this.containsOpId(e);
                    if (t) switch (t) {
                        case "exists_likely_same":
                            throw new(a()).mh_("Text slice already contains ID", {
                                data: {
                                    id: e.id
                                }
                            });
                        case "exists_same":
                            throw new(a()).AMh("Text slice already contains ID", {
                                data: {
                                    id: e.id
                                }
                            });
                        case "exists_different":
                            throw new(a()).VHT("Text slice already contains ID", {
                                data: {
                                    id: e.id
                                }
                            });
                        case "old_operation":
                            throw new(a()).IX4("Operation is older than the latest operation that has been applied by the same session", {
                                data: {
                                    id: e.id
                                }
                            });
                        default:
                            (0, n().HB)(t)
                    }
                }
                containsOpId(e) {
                    let t = e.id[0],
                        r = e.id[1];
                    for (let d of this.iterateItems({
                            includeDeleted: !0,
                            includeEndItem: !0
                        })) {
                        var i, n, a;
                        if (d.containsId(e.id)) {
                            if (d instanceof l().pC && "text" === e.type && (d.startsWithId(e.id) && (0, o().lS)(d.originId, e.originId) || !d.startsWithId(e.id) && (0, o().lS)(e.originId, [e.id[0], e.id[1] - 1]))) return "exists_likely_same";
                            if (d instanceof l().of && "split" === e.type && (0, o().lS)(d.originId, e.originId)) return "exists_same";
                            return "exists_different"
                        }
                        if ("start" !== d.id && "end" !== d.id && t === d.id[0] && r < d.id[1] && (null == (a = e.logger) || a.addTagsToCurrentSpan({
                                "crdt.old_operation_error": !0,
                                "crdt.operation_type": e.type
                            }), e.enforceMonotonicInsertTextOperations)) return "old_operation";
                        let s = null == (i = d.getAnnotationOpSetForAnchor("before")) ? void 0 : i.containsOpId(e);
                        if (s) return s;
                        let u = null == (n = d.getAnnotationOpSetForAnchor("after")) ? void 0 : n.containsOpId(e);
                        if (u) return u
                    }
                    return !1
                }
                getTextValue() {
                    let e, t = [];
                    for (let n of this.iterateItems({
                            includeDeleted: !0
                        })) {
                        var r, i;
                        e = (null == (r = n.getAnnotationOpSetForAnchor("before")) ? void 0 : r.getResolvedAnnotations()) ? ? e, n instanceof l().pC && n.getLength() && !n.isDeleted() && (e ? (e.length ? t.push([n.getDefinedContent(), e]) : t.push([n.getDefinedContent()]), e = void 0) : t.length ? (0, u().o9)(t.at(-1), "Text value must be non-empty")[0] += n.getDefinedContent() : t.push([n.getDefinedContent()])), e = (null == (i = n.getAnnotationOpSetForAnchor("after")) ? void 0 : i.getResolvedAnnotations()) ? ? e
                    }
                    return t
                }
                getText() {
                    let e = [];
                    for (let t of this.iterateItems()) t instanceof l().pC && e.push(t.getDefinedContent());
                    return e.join("")
                }
                static isSliceKeyFromTextInstance(e, t) {
                    return e.startsWith(t)
                }
                getSliceStartKey() {
                    return `${this.textInstanceId},${i()(this.startItem.id)}`
                }
                getSliceKey() {
                    return `${this.textInstanceId},${i()(this.startItem.id)},${i()(this.endItem.id)}`
                }
                splitIntoSlices() {
                    let e = r(450694).r5(this.startItem),
                        t = r(450694).W(this.startItem);
                    this.endItem = (0, u().Wg)(t, _, d().sF, {
                        from: "splitIntoSlices",
                        textInstanceId: this.textInstanceId,
                        searchLabel: this.searchLabel,
                        endItemType: null == t ? void 0 : t.className
                    }), this.visibleCount = r(450694).Gf(this.startItem), (0, u().MX)(this.startItem !== this.endItem, "Split text slice must not be empty");
                    let i = [this];
                    for (let t = 1; t < e.length; t++) i.push(new b(this.textInstanceId, this.opClock, (0, u().Wg)(e[t], c, d().JW), this.searchLabel));
                    return i
                }
                static updateSearchLabelAfterSplit(e) {
                    let {
                        splitTextSlice: t,
                        newTextSlice: i
                    } = e, [n, a] = r(363372).lD(t.searchLabel);
                    t.searchLabel = n, i.searchLabel = a
                }
                equals(e) {
                    if (this === e) return !0;
                    if (this.textInstanceId !== e.textInstanceId || this.visibleCount !== e.visibleCount || this.searchLabel !== e.searchLabel) return !1;
                    let t = [...this.iterateItems({
                            includeDeleted: !0,
                            includeEndItem: !0
                        })],
                        r = [...e.iterateItems({
                            includeDeleted: !0,
                            includeEndItem: !0
                        })];
                    if (t.length !== r.length) return !1;
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e],
                            n = r[e];
                        if (!i.equals(n)) return !1
                    }
                    return !0
                }
                isIdInsertableIntoSlice(e, t) {
                    let r;
                    if ((0, s().yb)(e, this.endItem.id) >= 0) return !0;
                    if (t) {
                        let e = (0, u().o9)(this.getItemEndingWithId(t), d().QS);
                        r = (0, u().Wg)(e, m, d().qP)
                    } else r = this.startItem;
                    let i = this.findInsertionPoint(e, r);
                    return this.endItem !== i
                }
                static createEmpty({
                    textInstanceId: e,
                    searchLabel: t
                }) {
                    let i = new(l()).mc,
                        n = new(l()).fn;
                    return i.next = n, n.prev = i, new b(e, new(r(265129)).A, i, t)
                }
            }
        },
        369516: (e, t, r) => {
            r.d(t, {
                r: () => a
            }), r(944114), r(898992), r(581454), r(941795);
            var i = () => r(832002),
                n = () => r(623879);
            class a {
                unique = new Map;
                multi = new(r(277637)).G(() => new(r(700135)).A);
                static fromArray(e) {
                    let t = new this;
                    for (let r of e)(0, n().ER)(r) ? t.add(r) : (0, n()._X)(r) !== n().BQ.Highlight && (0, n()._X)(r) !== n().BQ.TemporaryHighlight && t.unique.has((0, n().Au)(r)) || t.add(r);
                    return t
                }
                static normalize(e) {
                    return this.fromArray(e).toArray()
                }
                static compareByGroupingKey([e, t], [r, i]) {
                    return e === r ? 0 : e < r ? -1 : 1
                }*[Symbol.iterator]() {
                    for (let e of this.getUniqueAnnotations()) yield e;
                    for (let [, e] of this.getMultiInstanceAnnotations())
                        for (let t of e) yield t
                }
                toArray() {
                    return Array(...this)
                }
                findFirstOfGroupingKey(e) {
                    return this.findByGroupingKey(e)[0]
                }
                findByGroupingKey(e) {
                    if (this.multi.has(e)) return this.multi.get(e).valuesArray();
                    let t = this.unique.get(e);
                    return t ? [t] : []
                }
                find(e) {
                    let t = [];
                    for (let r of this) e(r) && t.push(r);
                    return t
                }
                add(e) {
                    if ((0, n().ER)(e)) {
                        let t = (0, n().Au)(e);
                        this.multi.get(t).add(e)
                    } else {
                        let t = (0, n().Au)(e);
                        this.unique.set(t, e)
                    }
                }
                removeGroupingKey(e) {
                    if (this.multi.has(e)) {
                        let t = this.multi.get(e).size;
                        return this.multi.delete(e), t > 0
                    }
                    return !!this.unique.has(e) && this.unique.delete(e)
                }
                remove(e) {
                    if ((0, n().ER)(e)) {
                        let t = (0, n().Au)(e),
                            r = this.multi.get(t),
                            a = 0;
                        for (let t of r)(0, i().y)(t, e) && (r.delete(t), a++);
                        return a > 0
                    } {
                        let t = (0, n().Au)(e),
                            r = this.unique.get(t);
                        return !!(void 0 !== r && (0, i().y)(r, e)) && this.unique.delete(t)
                    }
                }
                getUniqueAnnotations() {
                    return [...this.unique.entries()].sort(a.compareByGroupingKey).map(([, e]) => e)
                }
                getMultiInstanceAnnotations() {
                    return new Map([...this.multi.entries()].sort(a.compareByGroupingKey).map(([e, t]) => [e, [...t]]))
                }
            }
        },
        386651: (e, t, r) => {
            r.d(t, {
                i: () => i
            });
            let i = (0, r(109939).YK)({
                placeholder: {
                    defaultMessage: "AI Meeting Notes",
                    id: "TranscriptionBlockHeading.placeholder"
                },
                searchPlaceholder: {
                    defaultMessage: "Search for a meeting…",
                    id: "TranscriptionBlockHeading.searchPlaceholder"
                }
            })
        },
        386883: (e, t, r) => {
            r.d(t, {
                L: () => i
            }), r(898992), r(672577);

            function i(e) {
                var t;
                if (!e) return !1;
                let i = null == (t = (0, r(758654).bk)(e)) ? void 0 : t.hostname;
                if (!i) return !1;
                let n = r(996740).br.find(e => (0, r(760578).ds)(e).find(e => i === e));
                return !!n && (0, r(917331).lR)(n)
            }
        },
        390768: (e, t, r) => {
            r.d(t, {
                N: () => i
            });

            function i(e) {
                return e.collection_pointer ? ? (void 0 !== e.collection_id ? {
                    table: r(832375).VlP,
                    id: e.collection_id,
                    spaceId: (0, r(226221).e)(void 0)
                } : void 0)
            }
        },
        393479: (e, t, r) => {
            function i(e, t) {
                return e.space_id === t.space_id && e.collection_id === t.collection_id && e.navigable_block_id === t.navigable_block_id
            }

            function n(e) {
                return e.table + e.id
            }

            function a(e, t) {
                return r(381453).n4(r(381453).Ul(e.authors || [], n), r(381453).Ul(t.authors || [], n))
            }

            function o(e, t) {
                return r(381453).Ul(r(381453).hS([...e.authors || [], ...t.authors || []], n), n)
            }

            function d(e, t) {
                return e.block_id === t.block_id && i(e, t)
            }

            function s(e, t) {
                return e.block_id === t.block_id && i(e, t)
            }

            function l(e, t) {
                return i(e, t) && e.comment_id === t.comment_id
            }
            r.d(t, {
                W9: () => S,
                gW: () => I
            }), r(944114), r(898992), r(354520), r(803949), r(581454), r(737550);

            function u(e, t) {
                return e.collection_property_id === t.collection_property_id && i(e, t)
            }

            function c(e, t) {
                return e.collection_view_id === t.collection_view_id && i(e, t)
            }

            function _(e, t) {
                return e.mentioned_block_id === t.mentioned_block_id && e.mentioned_user_id === t.mentioned_user_id && e.mentioned_property === t.mentioned_property && a(e, t) && i(e, t)
            }

            function p(e, t) {
                return e.mentioned_block_id === t.mentioned_block_id && e.mentioned_group_id === t.mentioned_group_id && e.mentioned_property === t.mentioned_property && a(e, t) && i(e, t)
            }

            function m(e, t) {
                return e.mentioned_block_id === t.mentioned_block_id && e.mentioned_team_id === t.mentioned_team_id && e.mentioned_property === t.mentioned_property && a(e, t) && i(e, t)
            }

            function q(e, t) {
                return i(e, t) && e.reaction_id === t.reaction_id && a(e, t)
            }

            function b(e) {
                let t = [];
                e: for (; e.list.length > 0;) {
                    let r, i = e.list.shift(),
                        n = 0;
                    for (; n < e.list.length;) {
                        let t = e.list[n];
                        if (e.cancel(i, t)) {
                            e.list.splice(n, 1);
                            continue e
                        }
                        if (r = e.replace(i, t)) {
                            e.list[n] = r;
                            continue e
                        }
                        n++
                    }
                    t.push(i)
                }
                return t
            }

            function g(e, t) {
                return 0 === r(381453).R9(e, t).length && 0 === r(381453).R9(t, e).length
            }

            function f(e, t) {
                return r(642157).Lw(e) === r(642157).Lw(t)
            }

            function v(e) {
                return "permission-created" === e.type || "permission-deleted" === e.type || "collection-property-permission-created" === e.type || "collection-property-permission-deleted" === e.type ? (0, r(138798).I$)(e.permission_data) : "permission-changed" === e.type || "collection-property-permission-updated" === e.type ? (0, r(138798).I$)(e.permission_data.before) : void(0, r(722371).HB)(e)
            }

            function h(e, t) {
                if (!i(e, t) || !a(e, t)) return !1;
                if ("permission-restriction-created" === e.type || "permission-restriction-deleted" === e.type)
                    if ("permission-restriction-created" === t.type || "permission-restriction-deleted" === t.type) return !0;
                    else {
                        var n;
                        return null == (n = e.permission_data) || null == (n = n.actual_changes) ? void 0 : n.some(e => (0, r(138798).I$)(e) === v(t))
                    }
                return "permission-restriction-created" === t.type || "permission-restriction-deleted" === t.type ? t.permission_data.actual_changes.some(t => (0, r(138798).I$)(t) === v(e)) : v(e) === v(t)
            }

            function y(e, t) {
                return !!i(e, t) && !!a(e, t) && v(e) === v(t)
            }

            function I(e) {
                let t = b({
                    list: b({
                        list: r(381453).Ul((0, r(799150).A)(e, "mangle-class-instances") || [], e => e.timestamp),
                        cancel: (e, t) => !1,
                        replace: (e, t) => (function(e, t) {
                            if ("permission-deleted" === e.type && "permission-created" === t.type && h(e, t) && !f(e.permission_data, t.permission_data)) return { ...t,
                                type: "permission-changed",
                                timestamp: t.timestamp,
                                permission_data: {
                                    before: e.permission_data,
                                    after: t.permission_data
                                }
                            }
                        })(e, t) || function(e, t) {
                            if ("collection-property-permission-deleted" === e.type && "collection-property-permission-created" === t.type && y(e, t) && !f(e.permission_data, t.permission_data)) return { ...t,
                                type: "collection-property-permission-updated",
                                timestamp: t.timestamp,
                                permission_data: {
                                    before: e.permission_data,
                                    after: t.permission_data
                                }
                            }
                        }(e, t)
                    }),
                    cancel: (e, t) => {
                        var n, a;
                        return "block-created" === e.type && "block-deleted" === t.type && d(e, t) || "block-deleted" === e.type && "block-created" === t.type && d(e, t) || function(e, t) {
                            if (!("block-changed" === e.type && "block-changed" === t.type && d(e, t))) return !1; {
                                if (e.block_data.after.block_value.type === r(955630).xd.tableRow) {
                                    let i = r(808168).mP({
                                            before: e.block_data.before.block_value,
                                            after: e.block_data.after.block_value
                                        }),
                                        n = r(808168).mP({
                                            before: t.block_data.before.block_value,
                                            after: t.block_data.after.block_value
                                        });
                                    return g(i, n) && r(381453).n4(r(381453).Up(e.block_data.before.block_value.properties || {}, i), r(381453).Up(t.block_data.after.block_value.properties || {}, n))
                                }
                                let i = r(230960).PE({
                                        before: e.block_data.before.block_value,
                                        after: e.block_data.after.block_value,
                                        schema: e.block_schema
                                    }),
                                    n = r(808168).TW({
                                        before: e.block_data.before.block_value,
                                        after: e.block_data.after.block_value
                                    }),
                                    a = r(230960).PE({
                                        before: t.block_data.before.block_value,
                                        after: t.block_data.after.block_value,
                                        schema: t.block_schema
                                    }),
                                    o = r(808168).TW({
                                        before: t.block_data.before.block_value,
                                        after: t.block_data.after.block_value
                                    });
                                return !r(808168).kJ({
                                    before: t.block_data.before.block_value,
                                    after: t.block_data.after.block_value
                                }) && g(i, a) && r(381453).n4(r(381453).Up(e.block_data.before.block_value.properties || {}, i), r(381453).Up(t.block_data.after.block_value.properties || {}, a)) && g(n, o) && r(381453).n4(r(381453).Up(e.block_data.before.block_value.format || {}, n), r(381453).Up(t.block_data.after.block_value.format || {}, o))
                            }
                        }(e, t) || !!("block-property-changed" === e.type && "block-property-changed" === t.type && s(e, t)) && g(Object.keys(e.property_updates), Object.keys(t.property_updates)) && r(381453).n4(Object.values(e.property_updates).map(e => e.before), Object.values(t.property_updates).map(e => e.after)) || "permission-created" === e.type && "permission-deleted" === t.type && h(e, t) || "permission-deleted" === e.type && "permission-created" === t.type && h(e, t) || "permission-changed" === e.type && "permission-changed" === t.type && h(e, t) && r(381453).n4(e.permission_data.before, t.permission_data.after) || "collection-property-permission-created" === e.type && "collection-property-permission-deleted" === t.type && y(e, t) || "collection-property-permission-deleted" === e.type && "collection-property-permission-created" === t.type && y(e, t) || !!("collection-property-permission-updated" === e.type && "collection-property-permission-updated" === t.type && y(e, t)) && f(e.permission_data.before, t.permission_data.after) && f(e.permission_data.after, t.permission_data.before) || "mention-created" === e.type && "mention-deleted" === t.type && _(e, t) || "mention-deleted" === e.type && "mention-created" === t.type && _(e, t) || "permission-group-mention-created" === e.type && "permission-group-mention-deleted" === t.type && p(e, t) || "permission-group-mention-deleted" === e.type && "permission-group-mention-created" === t.type && p(e, t) || "team-mention-created" === e.type && "team-mention-deleted" === t.type && m(e, t) || "team-mention-deleted" === e.type && "team-mention-created" === t.type && m(e, t) || "comment-created" === e.type && "comment-deleted" === t.type && l(e, t) || "comment-deleted" === e.type && "comment-created" === t.type && l(e, t) || "comment-changed" === e.type && "comment-changed" === t.type && l(e, t) && r(381453).n4(e.comment_data.before, t.comment_data.after) || (n = e, a = t, !!("collection-changed" === n.type && "collection-changed" === a.type && i(n, a)) && !!n.collection_data && !!a.collection_data && r(381453).n4(n.collection_data.before, a.collection_data.after)) || "collection-property-created" === e.type && "collection-property-deleted" === t.type && u(e, t) || "collection-property-deleted" === e.type && "collection-property-created" === t.type && u(e, t) || "collection-property-changed" === e.type && "collection-property-changed" === t.type && u(e, t) && r(381453).n4(e.collection_property_data.before, t.collection_property_data.after) || "collection-view-created" === e.type && "collection-view-deleted" === t.type && c(e, t) || "collection-view-deleted" === e.type && "collection-view-created" === t.type && c(e, t) || "collection-view-changed" === e.type && "collection-view-changed" === t.type && c(e, t) && r(381453).n4(e.collection_view_data.before, t.collection_view_data.after) || "reaction-created" === e.type && "reaction-deleted" === t.type && q(e, t) || "reaction-deleted" === e.type && "reaction-created" === t.type && q(e, t)
                    },
                    replace: (e, t) => (function(e, t) {
                        if ("block-created" === e.type && "block-changed" === t.type && d(e, t)) return { ...e,
                            timestamp: t.timestamp,
                            authors: o(e, t),
                            block_schema: t.block_schema,
                            block_data: t.block_data.after
                        }
                    })(e, t) || function(e, t) {
                        if ("block-changed" === e.type && "block-changed" === t.type && d(e, t)) return { ...e,
                            timestamp: t.timestamp,
                            authors: o(e, t),
                            block_schema: t.block_schema,
                            block_data: {
                                before: e.block_data.before,
                                after: t.block_data.after
                            }
                        }
                    }(e, t) || function(e, t) {
                        if ("block-property-changed" === e.type && "block-property-changed" === t.type && s(e, t)) {
                            let i = e.property_updates;
                            return t.property_updates && Object.entries(t.property_updates).forEach(([n, a]) => {
                                n in i ? r(381453).n4(i[n].before, a.after) ? (delete i[n], e.filtered_block_schema && delete e.filtered_block_schema[n], t.filtered_block_schema && delete t.filtered_block_schema[n]) : i[n].after = a.after : i[n] = a
                            }), { ...e,
                                timestamp: t.timestamp,
                                authors: o(e, t),
                                filtered_block_schema: { ...e.filtered_block_schema,
                                    ...t.filtered_block_schema
                                },
                                property_updates: i
                            }
                        }
                    }(e, t) || function(e, t) {
                        if ("comment-created" === e.type && "comment-changed" === t.type && l(e, t)) return { ...e,
                            comment_data: t.comment_data.after
                        }
                    }(e, t) || function(e, t) {
                        if ("comment-changed" === e.type && "comment-changed" === t.type && l(e, t)) return { ...e,
                            comment_data: {
                                before: e.comment_data.before,
                                after: t.comment_data.after
                            }
                        }
                    }(e, t) || function(e, t) {
                        if ("permission-created" === e.type && "permission-changed" === t.type && h(e, t)) return { ...e,
                            timestamp: t.timestamp,
                            permission_data: t.permission_data.after
                        }
                    }(e, t) || function(e, t) {
                        if ("permission-changed" === e.type && "permission-changed" === t.type && h(e, t)) return { ...e,
                            permission_data: {
                                before: e.permission_data.before,
                                after: t.permission_data.after
                            },
                            timestamp: t.timestamp
                        }
                    }(e, t) || function(e, t) {
                        if ("permission-created" === t.type && "permission-restriction-created" === e.type && h(e, t)) return { ...e,
                            timestamp: t.timestamp
                        }
                    }(e, t) || function(e, t) {
                        if ("permission-deleted" === t.type && "permission-restriction-deleted" === e.type && h(e, t)) return { ...e,
                            timestamp: t.timestamp
                        }
                    }(e, t) || function(e, t) {
                        if ("collection-property-permission-created" === e.type && "collection-property-permission-updated" === t.type && y(e, t)) return { ...e,
                            timestamp: t.timestamp,
                            permission_data: t.permission_data.after
                        }
                    }(e, t) || function(e, t) {
                        if ("collection-property-permission-updated" === e.type && "collection-property-permission-updated" === t.type && y(e, t)) return { ...e,
                            timestamp: t.timestamp,
                            permission_data: {
                                before: e.permission_data.before,
                                after: t.permission_data.after
                            }
                        }
                    }(e, t) || function(e, t) {
                        if ("collection-created" === e.type && "collection-changed" === t.type && i(e, t)) return { ...e,
                            authors: o(e, t),
                            collection_data: t.collection_data ? t.collection_data.after : void 0
                        }
                    }(e, t) || function(e, t) {
                        if ("collection-changed" === e.type && "collection-changed" === t.type && i(e, t)) return { ...e,
                            timestamp: t.timestamp,
                            authors: o(e, t),
                            collection_data: {
                                before: e.collection_data ? e.collection_data.before : void 0,
                                after: t.collection_data ? t.collection_data.after : void 0
                            }
                        }
                    }(e, t) || function(e, t) {
                        if ("collection-property-created" === e.type && "collection-property-changed" === t.type && u(e, t)) return { ...e,
                            timestamp: t.timestamp,
                            authors: o(e, t),
                            collection_property_data: t.collection_property_data.after
                        }
                    }(e, t) || function(e, t) {
                        if ("collection-property-changed" === e.type && "collection-property-changed" === t.type && u(e, t)) return { ...e,
                            timestamp: t.timestamp,
                            authors: o(e, t),
                            collection_property_data: {
                                before: e.collection_property_data.before,
                                after: t.collection_property_data.after
                            }
                        }
                    }(e, t) || function(e, t) {
                        if ("collection-view-created" === e.type && "collection-view-changed" === t.type && c(e, t)) return { ...e,
                            timestamp: t.timestamp,
                            authors: o(e, t),
                            collection_view_data: t.collection_view_data.after
                        }
                    }(e, t) || function(e, t) {
                        if ("collection-view-changed" === e.type && "collection-view-changed" === t.type && c(e, t)) return { ...e,
                            timestamp: t.timestamp,
                            authors: o(e, t),
                            collection_view_data: {
                                before: e.collection_view_data.before,
                                after: t.collection_view_data.after
                            }
                        }
                    }(e, t)
                }).filter(e => ! function(e) {
                    if ("block-changed" !== e.type) return !1; {
                        let t = r(808168).LR({
                                before: e.block_data.before.block_value,
                                after: e.block_data.after.block_value,
                                schema: e.block_schema
                            }),
                            i = r(808168).kJ({
                                before: e.block_data.before.block_value,
                                after: e.block_data.after.block_value
                            }),
                            n = r(808168).Ti({
                                before: e.block_data.before.block_value,
                                after: e.block_data.after.block_value
                            }),
                            a = r(808168).ar({
                                before: e.block_data.before.block_value,
                                after: e.block_data.after.block_value
                            });
                        return !t && !i && !n && !a
                    }
                }(e));
                return r(381453).Ul(t, e => e.timestamp)
            }

            function S(e) {
                var t;
                let i, n;
                return (i = b({
                    list: r(381453).Ul((0, r(799150).A)(e, "ignore-class-instances") || [], e => e.timestamp),
                    cancel: (e, t) => !1,
                    replace: (e, t) => (function(e, t) {
                        if ("block-changed" === e.type && "block-deleted" === t.type && d(e, t)) return { ...t,
                            authors: o(e, t)
                        }
                    })(e, t) || function(e, t) {
                        if ("permission-changed" === e.type && "permission-deleted" === t.type && h(e, t)) return { ...t,
                            timestamp: t.timestamp,
                            permission_data: e.permission_data.before
                        }
                    }(e, t) || function(e, t) {
                        if ("collection-property-permission-updated" === e.type && "collection-property-permission-deleted" === t.type && y(e, t)) return { ...t,
                            timestamp: t.timestamp,
                            permission_data: e.permission_data.before
                        }
                    }(e, t) || function(e, t) {
                        if ("collection-property-changed" === e.type && "collection-property-deleted" === t.type && u(e, t)) return { ...t,
                            authors: o(e, t)
                        }
                    }(e, t) || function(e, t) {
                        if ("collection-view-changed" === e.type && "collection-view-deleted" === t.type && c(e, t)) return { ...t,
                            authors: o(e, t)
                        }
                    }(e, t)
                }), t = r(381453).Ul(i, e => e.timestamp), n = [], t.forEach(e => {
                    if ("block-changed" === e.type)
                        if (r(808168).kJ({
                                before: e.block_data.before.block_value,
                                after: e.block_data.after.block_value
                            })) {
                            let t = { ...e,
                                    type: "block-created",
                                    block_data: e.block_data.after
                                },
                                r = { ...e,
                                    type: "block-deleted",
                                    block_data: e.block_data.before
                                };
                            n.push(r), n.push(t)
                        } else n.push(e);
                    else n.push(e)
                }), n).filter(e => !(("block-created" === e.type || "block-deleted" === e.type) && (0, r(955630).Db)(e.block_data.block_value.type, e.block_data.block_value.format) && "page" !== e.block_data.block_value.type && !r(993189).Bj6.fromBlock(e.block_data.block_value).getProperty("title", r(993189).b4_.constant(void 0))) && !(("block-created" === e.type || "block-deleted" === e.type) && r(955630).Wn[e.block_data.block_value.type]))
            }
        },
        394517: (e, t, r) => {
            r.d(t, {
                R: () => i
            }), r(581454);

            function i(e) {
                let t = e.map(e => {
                    if (r(247438).MMZ(e)) return r(247438).wmz(r(247438).Ii$({
                        type: e
                    }));
                    if ((0, r(197018).Pu)(e))
                        if (e.table === r(514214).oo) return r(247438).wmz(r(247438).P4h(e.id));
                        else return r(247438).wmz(r(247438).Vb6(e.id));
                    if ((0, r(659341).I6)(e)) return r(247438).wmz(r(247438).dWL(e.id, e.spaceId));
                    (0, r(722371).HB)(e)
                });
                return (0, r(405843).G)(t, () => r(247438).Ey_(","))
            }
        },
        395911: (e, t, r) => {
            r.d(t, {
                TF: () => i,
                wD: () => n
            });
            let i = "assistant_chat_session",
                n = {
                    table: i,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        chat_step_id: r(759070).q.UUID,
                        type: r(759070).q.String,
                        parent_external_id: r(759070).q.String,
                        alive: r(759070).q.Boolean,
                        properties: r(759070).q.JSON,
                        file_ids: r(759070).q.StringArray
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        space_id: !0,
                        type: !0,
                        created_time: !0,
                        alive: !0,
                        chat_step_id: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                }
        },
        406033: (e, t, r) => {
            r.d(t, {
                F3: () => n,
                Yd: () => i
            });
            let i = {
                table: "record_key",
                columnTypes: {
                    id: r(759070).q.UUID,
                    version: r(759070).q.Number,
                    last_version: r(759070).q.Number,
                    space_id: r(759070).q.UUID,
                    scope_table: r(759070).q.String,
                    scope_id: r(759070).q.UUID,
                    parent_table: r(759070).q.String,
                    parent_id: r(759070).q.UUID,
                    record_key: r(759070).q.String,
                    alive: r(759070).q.Boolean
                },
                requiredColumns: {
                    space_id: !0,
                    scope_table: !0,
                    scope_id: !0,
                    parent_table: !0,
                    parent_id: !0,
                    alive: !0
                },
                model: (0, r(68291).P)({
                    RecordStore: !0
                })
            };

            function n(e) {
                let {
                    spaceId: t,
                    parentTable: i,
                    parentId: n
                } = e, [a, o] = ["space", t];
                return (0, r(4962).gB)(`${t}-${a}-${o}-${i}-${n}`)
            }
        },
        406808: (e, t, r) => {
            r.d(t, {
                f: () => i
            });

            function i(e) {
                let {
                    propertyValue: t
                } = e;
                return {
                    type: "date",
                    value: (0, r(179358).b)(t)
                }
            }
        },
        420582: (e, t, r) => {
            r.d(t, {
                V: () => n,
                q: () => i
            });
            let i = "channel",
                n = {
                    table: i,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        name: r(759070).q.String,
                        description: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.UUID
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        parent_table: !0,
                        space_id: !0,
                        parent_id: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                }
        },
        422672: (e, t, r) => {
            r.d(t, {
                D: () => i
            });

            function i(e) {
                return "status" === e.type
            }
        },
        435254: (e, t, r) => {
            r.d(t, {
                b: () => i
            });

            function i(e) {
                let {
                    propertySchema: t
                } = e;
                return t.property ? ? t.one_way_relation_placeholder_property
            }
        },
        435544: (e, t, r) => {
            r.d(t, {
                G: () => i,
                P: () => n
            });
            let i = "collection_view",
                n = {
                    table: i,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        type: r(759070).q.String,
                        name: r(759070).q.String,
                        page_sort: r(759070).q.UUIDArray,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        alive: r(759070).q.Boolean,
                        format: r(759070).q.JSON,
                        query2: r(759070).q.JSON,
                        space_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        created_by_table: r(759070).q.String,
                        created_by_id: r(759070).q.UUID,
                        last_edited_time: r(759070).q.Number,
                        last_edited_by_table: r(759070).q.String,
                        last_edited_by_id: r(759070).q.UUID
                    },
                    requiredColumns: {
                        parent_id: !0,
                        parent_table: !0,
                        alive: !0,
                        type: !0
                    },
                    defaultColumnValues: {
                        alive: !1
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0,
                        properties: {
                            query2: {
                                getMethod: "getRawQuery",
                                getKeyStoreMethod: "getQueryStore"
                            },
                            format: {
                                defaultOnRead: {}
                            }
                        }
                    })
                }
        },
        442781: (e, t, r) => {
            r.d(t, {
                u: () => i
            });
            let i = (0, r(465822).V)({
                schemaField: "deleted_schema",
                additionalPropertyIdsField: "additional_deleted_property_ids",
                shouldSetAliveToFalseOnDeletion: !0
            })
        },
        446004: (e, t, r) => {
            r.d(t, {
                b: () => n,
                y: () => i
            });
            let i = "marketplace_custom_agent",
                n = {
                    table: i,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        last_edited_time: r(759070).q.Number,
                        attributes: r(759070).q.JSON,
                        listing_id: r(759070).q.UUID,
                        draft_versions: r(759070).q.JSON,
                        published_versions: r(759070).q.JSON,
                        pinned: r(759070).q.Boolean,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.UUID
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                }
        },
        450694: (e, t, r) => {
            r.d(t, {
                Gf: () => o,
                RT: () => s,
                W: () => a,
                fe: () => n,
                r5: () => d
            }), r(944114);
            var i = () => r(352139);

            function* n(e, t) {
                let r = e;
                for (; r;) {
                    let e = !0;
                    !(null != t && t.includeDeleted) && r instanceof i().pC && r.isDeleted() ? e = !1 : null != t && t.includeEndItem || r.next || (e = !1), e && (yield r), r = r.next
                }
            }

            function a(e) {
                let t = e;
                for (let r of n(e, {
                        includeDeleted: !0,
                        includeEndItem: !0
                    })) t = r;
                return t
            }

            function o(e) {
                let t = 0;
                for (let r of n(e, {
                        includeDeleted: !1
                    })) r instanceof i().pC && (t += r.getLength());
                return t
            }

            function d(e) {
                let t = [e],
                    r = e.next;
                for (; r;)
                    if (r instanceof i().of && r.next) {
                        let e = r.clone(),
                            i = r.next;
                        e.next = i, i.prev = e, e.prev = void 0, r.next = void 0, t.push(e), r = e.next
                    } else r = r.next;
                return t
            }

            function s(e) {
                for (let t = 1; t < e.length; t++) e[t].prev = e[t - 1], e[t - 1].next = e[t]
            }
        },
        458434: (e, t, r) => {
            function i(e) {
                switch (e.type) {
                    case "insertText":
                        return e.id[1] + e.content.length - 1;
                    case "splitText":
                    case "addAnnotation":
                    case "removeAnnotation":
                        return e.id[1]
                }
            }

            function n(e, t) {
                return e[1] + t - 1
            }
            r.d(t, {
                H: () => n,
                b: () => i
            })
        },
        465135: (e, t, r) => {
            r.d(t, {
                L: () => i
            });

            function i(e, t) {
                let {
                    lowerCaseFirstLetter: r = !0
                } = t ? ? {}, i = e.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "");
                return r && (i = i.replace(/^(.)/, e => e.toLowerCase())), "" === i && (i = "untitled"), r && /^[^a-z]/.test(i) && (i = `_${i}`), i
            }
        },
        465822: (e, t, r) => {
            r.d(t, {
                V: () => d
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(581454);
            var i = () => r(722371),
                n = () => r(276303),
                a = () => r(832375);

            function o(e, t) {
                switch (t) {
                    case "additional_property_ids":
                        return e.getAdditionalPropertyIds();
                    case "additional_deleted_property_ids":
                        return e.getAdditionalDeletedPropertyIds();
                    default:
                        (0, i().HB)(t)
                }
            }

            function d(e) {
                return {
                    derivePrimitiveOperations: (t, r, i) => s(t, i, e),
                    getAdditionalRelatedPointers(t) {
                        let {
                            pointer: n,
                            path: o
                        } = t, d = n.spaceId;
                        if (!d) return [];
                        if (c(t, e.schemaField)) {
                            let e = function(e) {
                                switch (e.command) {
                                    case "updateCollectionPropertySchema":
                                        if ("additionalPropertyIds" in e.args) return e.args.additionalPropertyIds;
                                        return;
                                    case "updateCollectionDeletedPropertySchema":
                                        if ("additionalDeletedPropertyIds" in e.args) return e.args.additionalDeletedPropertyIds;
                                        return;
                                    default:
                                        (0, i().HB)(e)
                                }
                            }(t);
                            return e ? e.map(e => ({
                                table: a().BiG,
                                id: e,
                                spaceId: d
                            })) : Object.keys(t.args.primitiveOp.args ? ? {}).map(e => (0, r(611971).rm)({
                                collectionId: n.id,
                                propertyId: e,
                                spaceId: d
                            }))
                        }
                        return [(0, r(611971).rm)({
                            collectionId: n.id,
                            propertyId: o[1],
                            spaceId: d
                        })]
                    },
                    invert(t) {
                        let {
                            operation: i,
                            getRecordValue: a
                        } = t, o = s(i, r(993189).b4_.fromGetRecordValueFn(a), e), d = [];
                        for (let e of o) {
                            let t = a(e.pointer),
                                r = (0, n().e)(e, t);
                            r && d.push(r)
                        }
                        return d
                    }
                }
            }

            function s(e, t, r) {
                let n = t(e.pointer);
                if (!n) return [];
                let d = n.getSpaceId(),
                    s = o(n, r.additionalPropertyIdsField);
                if (c(e, r.schemaField)) {
                    let {
                        primitiveOp: o
                    } = e.args;
                    if ("set" === o.command) {
                        let l = function(e) {
                            let {
                                baseSchema: t,
                                additionalPropertyIds: r,
                                getRecordModel: i,
                                spaceId: n
                            } = e, o = new Set;
                            for (let e of Object.keys(t ? ? {})) o.add(e);
                            for (let e of r) {
                                let t = i({
                                        table: a().BiG,
                                        id: e,
                                        spaceId: n
                                    }),
                                    r = null == t ? void 0 : t.getPropertyShortId();
                                r && o.add(r)
                            }
                            return o
                        }({
                            baseSchema: function(e, t) {
                                switch (t) {
                                    case "schema":
                                        return e.getSchema();
                                    case "deleted_schema":
                                        return e.getDeletedSchema();
                                    default:
                                        (0, i().HB)(t)
                                }
                            }(n, r.schemaField),
                            additionalPropertyIds: s,
                            getRecordModel: t,
                            spaceId: d
                        });
                        return u({
                            collectionPointer: e.pointer,
                            primitiveOp: o,
                            existingPropertyIds: l,
                            spaceId: d,
                            config: r,
                            collectionModel: n
                        })
                    }
                    return "update" === o.command ? u({
                        collectionPointer: e.pointer,
                        primitiveOp: o,
                        spaceId: d,
                        config: r,
                        collectionModel: n
                    }) : []
                }
                return l({
                    collectionPointer: e.pointer,
                    propertyId: e.path[1],
                    restPath: e.path.slice(2),
                    primitiveOp: e.args.primitiveOp,
                    spaceId: d,
                    config: r,
                    collectionModel: n
                })
            }

            function l(e) {
                let {
                    collectionPointer: t,
                    propertyId: n,
                    restPath: a,
                    primitiveOp: d,
                    spaceId: s,
                    config: l,
                    collectionModel: u
                } = e, c = [...u.getAdditionalPropertyIds(), ...u.getAdditionalDeletedPropertyIds()], _ = (0, r(151877).Z)({
                    collectionId: t.id,
                    propertyId: n,
                    additionalPropertyIds: c
                });
                if (0 === a.length && "set" === d.command && (0, i().uy)(d.args)) return function(e) {
                    let {
                        collectionPointer: t,
                        propertyId: i,
                        isAdditionalProperty: n,
                        spaceId: a,
                        config: o,
                        collectionModel: d
                    } = e;
                    if (n) {
                        let e = [];
                        return o.shouldSetAliveToFalseOnDeletion && ((0, r(151877).Z)({
                            collectionId: t.id,
                            propertyId: i,
                            additionalPropertyIds: d.getAdditionalPropertyIds()
                        }) || e.push({
                            command: "set",
                            pointer: (0, r(611971).rm)({
                                collectionId: t.id,
                                propertyId: i,
                                spaceId: a
                            }),
                            path: ["alive"],
                            args: !1
                        })), e.push({
                            command: "listRemove",
                            pointer: t,
                            path: [o.additionalPropertyIdsField],
                            args: {
                                id: (0, r(611971).xz)({
                                    collectionId: t.id,
                                    propertyId: i
                                })
                            }
                        }), e
                    }
                    return [{
                        command: "set",
                        pointer: t,
                        path: [o.schemaField, i],
                        args: null
                    }]
                }({
                    collectionPointer: t,
                    propertyId: n,
                    isAdditionalProperty: _,
                    spaceId: s,
                    config: l,
                    collectionModel: u
                });
                if (_) {
                    let e = [{ ...d,
                        pointer: (0, r(611971).rm)({
                            collectionId: t.id,
                            propertyId: n,
                            spaceId: s
                        }),
                        path: ["property_schema", ...a]
                    }];
                    if ("set" === d.command) {
                        let i = o(u, l.additionalPropertyIdsField);
                        (0, r(151877).Z)({
                            collectionId: t.id,
                            propertyId: n,
                            additionalPropertyIds: i
                        }) || e.push({
                            command: "listAfter",
                            pointer: t,
                            path: [l.additionalPropertyIdsField],
                            args: {
                                id: (0, r(611971).xz)({
                                    collectionId: t.id,
                                    propertyId: n
                                })
                            }
                        })
                    }
                    return e
                }
                return [{ ...d,
                    pointer: t,
                    path: [l.schemaField, n, ...a]
                }]
            }

            function u(e) {
                let {
                    collectionPointer: t,
                    primitiveOp: r,
                    existingPropertyIds: n,
                    spaceId: a,
                    config: o,
                    collectionModel: d
                } = e;
                if ("set" === r.command && void 0 === n) return [];
                let s = function(e) {
                        let {
                            primitiveOp: t,
                            existingPropertyIds: r
                        } = e, n = {};
                        for (let [e, r] of Object.entries(t.args ? ? {})) n[e] = (0, i().uy)(r) ? null : r;
                        if ("set" === t.command && r) {
                            let e = Object.keys(n);
                            for (let t of r) e.includes(t) || (n[t] = null)
                        }
                        return n
                    }({
                        primitiveOp: r,
                        existingPropertyIds: n
                    }),
                    u = [];
                for (let [e, r] of Object.entries(s)) u.push(...l({
                    collectionPointer: t,
                    propertyId: e,
                    restPath: [],
                    primitiveOp: {
                        command: "set",
                        args: r
                    },
                    spaceId: a,
                    config: o,
                    collectionModel: d
                }));
                return u
            }

            function c(e, t) {
                return 1 === e.path.length && e.path[0] === t
            }
        },
        468765: (e, t, r) => {
            r.d(t, {
                g: () => n
            });
            let i = (0, r(109939).YK)({
                workflowDefaultName: {
                    defaultMessage: "Unnamed agent",
                    id: "workflow.defaultName"
                }
            });

            function n(e) {
                return e.formatMessage(i.workflowDefaultName)
            }
        },
        486105: (e, t, r) => {
            r.d(t, {
                Yq: () => i,
                uo: () => n
            });
            let i = r(969475).literals("responses", "tokens", "seconds"),
                n = {
                    table: "space_entitlement_usage",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        usage: r(759070).q.Number,
                        entity_id: r(759070).q.UUID,
                        entity_table: r(759070).q.String,
                        period_start: r(759070).q.Number,
                        period_duration: r(759070).q.String,
                        type_unit: r(759070).q.String,
                        product: r(759070).q.String
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        created_at: !0,
                        updated_at: !0,
                        space_id: !0,
                        usage: !0,
                        entity_id: !0,
                        entity_table: !0,
                        period_duration: !0,
                        type_unit: !0
                    },
                    model: (0, r(68291).P)({})
                }
        },
        488851: (e, t, r) => {
            r.d(t, {
                W: () => a
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(581454);
            var i = () => r(722371),
                n = () => r(276303);
            let a = {
                derivePrimitiveOperations: (e, t, r) => o(e, r),
                getAdditionalRelatedPointers(e) {
                    let {
                        pointer: t
                    } = e, i = t.spaceId, n = [e.args.collectionPointer];
                    if (l(e)) {
                        if ("additionalPropertyIds" in e.args) return n.concat(e.args.additionalPropertyIds.map(e => ({
                            table: r(832375).ukB,
                            id: e,
                            spaceId: i
                        })));
                        let a = Object.keys(e.args.primitiveOp.args ? ? {});
                        return n.concat(a.map(e => (0, r(601088).M2)({
                            blockId: t.id,
                            propertyId: e,
                            spaceId: i
                        })))
                    }
                    return n.concat([(0, r(601088).M2)({
                        blockId: t.id,
                        propertyId: e.path[1],
                        spaceId: i
                    })])
                },
                invert(e) {
                    let {
                        operation: t,
                        getRecordValue: i
                    } = e, a = o(t, r(993189).b4_.fromGetRecordValueFn(i)), d = [];
                    for (let e of a) {
                        let t = i(e.pointer),
                            r = (0, n().e)(e, t);
                        r && d.push(r)
                    }
                    return d
                }
            };

            function o(e, t) {
                let r = t(e.pointer);
                if (!r) return [];
                let i = r.getSpaceId(),
                    n = r.getAdditionalPropertyIds(),
                    a = t(e.args.collectionPointer),
                    o = (null == a ? void 0 : a.getAdditionalPropertyIds()) ? ? [],
                    u = e.args.collectionPointer.id;
                if (l(e)) {
                    let {
                        primitiveOp: a
                    } = e.args;
                    if ("set" === a.command) {
                        let d = new Set(Object.keys(r.getProperties(t)));
                        return s({
                            blockPointer: e.pointer,
                            primitiveOp: a,
                            existingPropertyIds: d,
                            blockAdditionalPropertyIds: n,
                            collectionAdditionalPropertyIds: o,
                            collectionId: u,
                            spaceId: i,
                            getRecordModel: t
                        })
                    }
                    return "update" === a.command ? s({
                        blockPointer: e.pointer,
                        primitiveOp: a,
                        blockAdditionalPropertyIds: n,
                        collectionAdditionalPropertyIds: o,
                        collectionId: u,
                        spaceId: i,
                        getRecordModel: t
                    }) : []
                }
                return d({
                    blockPointer: e.pointer,
                    propertyId: e.path[1],
                    restPath: e.path.slice(2),
                    primitiveOp: e.args.primitiveOp,
                    blockAdditionalPropertyIds: n,
                    collectionAdditionalPropertyIds: o,
                    collectionId: u,
                    spaceId: i,
                    getRecordModel: t
                })
            }

            function d(e) {
                let {
                    blockPointer: t,
                    propertyId: n,
                    restPath: a,
                    primitiveOp: o,
                    blockAdditionalPropertyIds: d,
                    collectionAdditionalPropertyIds: s,
                    collectionId: l,
                    spaceId: u,
                    getRecordModel: c
                } = e, _ = function(e) {
                    let {
                        blockId: t,
                        propertyId: i,
                        blockAdditionalPropertyIds: n
                    } = e, a = (0, r(601088).ee)({
                        blockId: t,
                        propertyId: i
                    });
                    return n.includes(a)
                }({
                    blockId: t.id,
                    propertyId: n,
                    blockAdditionalPropertyIds: d
                }), p = (0, r(151877).Z)({
                    collectionId: l,
                    propertyId: n,
                    additionalPropertyIds: s
                });
                if ("title" === n || (0, r(682956).fQ)(n) || !_ && !p) return [{ ...o,
                    pointer: t,
                    path: ["properties", n, ...a]
                }];
                let m = (0, r(601088).M2)({
                        blockId: t.id,
                        propertyId: n,
                        spaceId: u
                    }),
                    q = c(m),
                    b = [];
                if (!_ && p && b.push({
                        command: "listAfter",
                        pointer: t,
                        path: ["additional_property_ids"],
                        args: {
                            id: m.id
                        }
                    }), !q && (0, i().uy)(o.args)) return [];
                if (!q) {
                    let {
                        operations: e
                    } = r(890219).$.create({
                        id: m.id,
                        space_id: u,
                        parentPointer: t,
                        property_short_id: n
                    });
                    b.push(...e)
                }
                return b.push({ ...o,
                    pointer: m,
                    path: ["property_value", ...a]
                }), b
            }

            function s(e) {
                let {
                    blockPointer: t,
                    primitiveOp: r,
                    blockAdditionalPropertyIds: n,
                    existingPropertyIds: a,
                    collectionAdditionalPropertyIds: o,
                    collectionId: s,
                    spaceId: l,
                    getRecordModel: u
                } = e;
                if ("set" === r.command && void 0 === a) return [];
                let c = function(e) {
                        let {
                            primitiveOp: t,
                            existingPropertyIds: r
                        } = e, n = {};
                        for (let [e, r] of Object.entries(t.args ? ? {})) n[e] = (0, i().uy)(r) ? null : r;
                        if ("set" === t.command && r) {
                            let e = Object.keys(n);
                            for (let t of r) e.includes(t) || (n[t] = null)
                        }
                        return n
                    }({
                        primitiveOp: r,
                        existingPropertyIds: a
                    }),
                    _ = [];
                for (let [e, r] of Object.entries(c)) _.push(...d({
                    blockPointer: t,
                    propertyId: e,
                    restPath: [],
                    primitiveOp: {
                        command: "set",
                        args: r
                    },
                    blockAdditionalPropertyIds: n,
                    collectionAdditionalPropertyIds: o,
                    collectionId: s,
                    spaceId: l,
                    getRecordModel: u
                }));
                return _
            }

            function l(e) {
                return 1 === e.path.length && "properties" === e.path[0]
            }
        },
        492569: (e, t, r) => {
            r.d(t, {
                Q: () => i
            });

            function i(e) {
                switch (e.model.table) {
                    case "collection":
                        return function(e) {
                            let {
                                baseUrl: t,
                                pageVisitSource: i,
                                model: n,
                                analyticsNotificationId: a,
                                chatThreadId: o,
                                swapDsPrefix: d
                            } = e;
                            return (0, r(506069).C)({
                                collectionId: n.id,
                                spaceId: n.getSpaceId(),
                                spaceDomain: void 0,
                                domainBaseUrl: t,
                                pageVisitSource: i,
                                parentCvbId: n.getParentPointer().id,
                                analyticsNotificationId: a,
                                chatThreadId: o,
                                swapDsPrefix: d
                            })
                        }(e);
                    case "block":
                        var t;
                        let i;
                        return (i = function(e) {
                            let {
                                blockModel: t,
                                getRecordModel: i,
                                baseUrl: n,
                                discussionId: a,
                                pageVisitSource: o,
                                notificationId: d,
                                analyticsNotificationId: s,
                                collectionViewId: l,
                                ...u
                            } = e;
                            if ((0, r(955630).$I)(t.getType())) return (0, r(234310).A)({
                                pageId: t.id,
                                pageModel: t,
                                baseUrl: n,
                                discussionId: a,
                                notificationId: d,
                                analyticsNotificationId: s,
                                collectionViewId: l,
                                pageVisitSource: o,
                                ...u
                            });
                            let c = r(688502).Yn(t.pointer, i),
                                _ = r(688502).yb(c);
                            if (_) {
                                let e = t.id;
                                if (a) {
                                    let n = i({
                                        table: r(609277).$Y,
                                        id: a,
                                        spaceId: t.getSpaceId()
                                    });
                                    if (n) {
                                        let t = i(n.getParentPointer());
                                        e = t && t.getType() === r(955630).xd.tableRow ? t.getParentId() : n.getParentId()
                                    }
                                }
                                return (0, r(234310).A)({
                                    pageId: _.id,
                                    pageModel: _,
                                    scrollToBlockId: e,
                                    baseUrl: n,
                                    discussionId: a,
                                    notificationId: d,
                                    analyticsNotificationId: s,
                                    pageVisitSource: o,
                                    ...u
                                })
                            }
                        }({ ...t = e,
                            blockModel: t.model,
                            addPagePrefix: t.addPagePrefix ? ? !1
                        })) || t.baseUrl || "/";
                    case "space":
                        return function(e) {
                            let {
                                model: t,
                                baseUrl: i
                            } = e, n = r(132702).p0({
                                route: {
                                    name: "space",
                                    spaceId: t.id,
                                    spaceDomain: void 0,
                                    requestedOnPublicDomain: void 0,
                                    searchQuery: void 0,
                                    searchRequest: void 0
                                }
                            });
                            return i ? r(758654).pf({
                                relativeUrl: n,
                                baseUrl: i
                            }) : n
                        }(e);
                    default:
                        (0, r(722371).HB)(e.model)
                }
            }
        },
        496273: (e, t, r) => {
            r.d(t, {
                I: () => i
            });

            function i(e) {
                return e.timestamp ? {
                    type: "date",
                    value: r(25825).KQ(e.timestamp, e.userTimeZone)
                } : {
                    type: "date",
                    value: void 0
                }
            }
        },
        504118: (e, t, r) => {
            r.d(t, {
                L: () => n
            }), r(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.5 3.07 13 13.83",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M8.848 3.085c.34.06.567.384.507.724l-.61 3.466h3.42l.65-3.683a.625.625 0 0 1 1.23.216l-.61 3.467h2.435a.625.625 0 1 1 0 1.25h-2.655l-.52 2.95h2.435a.625.625 0 0 1 0 1.25h-2.655l-.65 3.684a.625.625 0 0 1-1.23-.217l.61-3.467h-3.42l-.65 3.684a.625.625 0 0 1-1.23-.217l.61-3.467H4.13a.625.625 0 1 1 0-1.25h2.605l.52-2.95H4.87a.625.625 0 0 1 0-1.25h2.605l.65-3.683a.625.625 0 0 1 .723-.507m2.578 8.39.52-2.95H8.523l-.52 2.95z"
                    })
                },
                n = (0, r(104509).wt)("number", i, "default")
        },
        506440: (e, t, r) => {
            r.d(t, {
                V: () => i
            }), r(16280), r(944114);
            let i = {
                derivePrimitiveOperations(e) {
                    let {
                        pointer: t
                    } = e, {
                        spaceViewPointer: i,
                        userId: n,
                        removeFromParent: a
                    } = e.args;
                    if (t.spaceId !== i.spaceId) throw Error("Invalid moveToPrivateOperation: Cannot move to a different space");
                    let o = [(0, r(425851).Mr)({
                        pointer: t,
                        userId: n
                    }), (0, r(425851).$F)({
                        pointer: t,
                        parent_table: r(213003).NX,
                        parent_id: i.spaceId,
                        alive: !0
                    }), {
                        pointer: i,
                        path: ["private_pages"],
                        command: "listAfter",
                        args: {
                            id: t.id
                        }
                    }];
                    if (a) {
                        let e = (0, r(733622).YE)(a.table, t.table);
                        e && o.unshift({
                            pointer: a,
                            path: e,
                            command: "listRemove",
                            args: {
                                id: t.id
                            }
                        })
                    }
                    return o
                },
                getAdditionalRelatedPointers: e => (0, r(381453).oE)([e.args.spaceViewPointer, e.args.removeFromParent]),
                invert(e) {
                    let {
                        operation: t,
                        getRecordValue: i
                    } = e, {
                        pointer: n
                    } = t, {
                        spaceViewPointer: a,
                        removeFromParent: o
                    } = t.args, d = r(993189).b4_.fromGetRecordValueFn(i), s = d(n);
                    if (!s) return [];
                    let l = [{
                        command: "set",
                        pointer: n,
                        path: ["permissions"],
                        args: s.getPermissionItems()
                    }, (0, r(425851).$F)({
                        pointer: n,
                        parent_table: s.parent_table,
                        parent_id: s.parent_id,
                        alive: s.alive ? ? !0
                    }), {
                        pointer: a,
                        path: ["private_pages"],
                        command: "listRemove",
                        args: {
                            id: n.id
                        }
                    }];
                    if (o) {
                        let e = (0, r(733622).YE)(o.table, n.table);
                        if (e) {
                            let t = d(o);
                            if (t && t.table !== r(46241).V && t.table !== r(435544).G && t.table !== r(322683).zx && t.table !== r(420582).q && t.table !== r(395911).TF && t.table !== r(43296).C) {
                                let r = t.getChildren(),
                                    i = r.indexOf(n.id);
                                i <= 0 ? l.push({
                                    pointer: o,
                                    path: e,
                                    command: "listBefore",
                                    args: {
                                        id: n.id
                                    }
                                }) : l.push({
                                    pointer: o,
                                    path: e,
                                    command: "listAfter",
                                    args: {
                                        id: n.id,
                                        after: r[i - 1]
                                    }
                                })
                            }
                        }
                    }
                    return l
                }
            }
        },
        514773: (e, t, r) => {
            r.d(t, {
                p: () => i
            });

            function i(e) {
                let t = e.toString().replace(/[\r\n]/g, "").trim();
                return `${t.substring(0,60)}${t.length>60?"…":""}`
            }
        },
        532792: (e, t, r) => {
            r.d(t, {
                l: () => i
            });

            function i(e) {
                return "select" === e.type || "multi_select" === e.type
            }
        },
        537664: (e, t, r) => {
            r.d(t, {
                F: () => i
            });

            function i(e) {
                return "v2" === e.version || void 0 !== e.formula2
            }
        },
        547484: (e, t, r) => {
            r.d(t, {
                v: () => i
            });
            let i = {
                serialize: e => JSON.stringify(e),
                deserialize: e => JSON.parse(e)
            }
        },
        588688: (e, t, r) => {
            r.d(t, {
                M: () => i
            });

            function i(e) {
                let t = r(247438).k4p(e);
                return r(700369).$J(t)
            }
        },
        588749: (e, t, r) => {
            r.d(t, {
                r: () => i
            });
            let i = {
                CreatedBy: "notion://docs/created_by_property",
                CreatedTime: "notion://docs/created_time_property",
                LastEditedBy: "notion://docs/last_edited_by_property",
                LastEditedTime: "notion://docs/last_edited_time_property",
                Tags: "notion://docs/doc_tags_property",
                Type: "notion://docs/type_property",
                Status: "notion://docs/docs_status_property"
            }
        },
        601088: (e, t, r) => {
            r.d(t, {
                M2: () => a,
                ee: () => n,
                f4: () => o
            });
            let i = "block_property_value";

            function n(e) {
                return (0, r(4962).gB)(`${e.blockId}|${e.propertyId}`)
            }

            function a(e) {
                return {
                    table: i,
                    id: n({
                        blockId: e.blockId,
                        propertyId: e.propertyId
                    }),
                    spaceId: e.spaceId
                }
            }
            let o = {
                table: i,
                columnTypes: {
                    id: r(759070).q.UUID,
                    version: r(759070).q.Number,
                    last_version: r(759070).q.Number,
                    space_id: r(759070).q.UUID,
                    parent_table: r(759070).q.String,
                    parent_id: r(759070).q.UUID,
                    last_edited_by_id: r(759070).q.UUID,
                    last_edited_time: r(759070).q.Number,
                    last_edited_by_table: r(759070).q.String,
                    property_short_id: r(759070).q.String,
                    property_value: r(759070).q.JSON
                },
                requiredColumns: {
                    id: !0,
                    version: !0,
                    space_id: !0,
                    parent_table: !0,
                    parent_id: !0,
                    last_edited_by_id: !0,
                    last_edited_time: !0,
                    last_edited_by_table: !0,
                    property_short_id: !0
                },
                model: (0, r(68291).P)({
                    RecordStore: !0
                })
            }
        },
        601979: (e, t, r) => {
            r.d(t, {
                EY: () => l,
                Eg: () => d,
                W_: () => u,
                YQ: () => s,
                dk: () => c,
                x6: () => o
            }), r(581454);
            var i = () => r(561872),
                n = () => r(496282),
                a = () => r(682956);

            function o(e, t) {
                return (0, r(640937).bG)({
                    value: {
                        id: e.id,
                        spaceId: e.spaceId,
                        table: a().ev
                    },
                    after: e.after ? {
                        id: e.after,
                        spaceId: e.spaceId,
                        table: a().ev
                    } : void 0,
                    currentValueAtPath: t,
                    fromTextValueFn: i().n,
                    toTextValueFn: i().Ap,
                    equalityFn: n().L3.isEqualIdTable
                })
            }

            function d(e, t) {
                return (0, r(640937).Qx)({
                    value: {
                        id: e.id,
                        spaceId: e.spaceId,
                        table: a().ev
                    },
                    before: e.before ? {
                        id: e.before,
                        spaceId: e.spaceId,
                        table: a().ev
                    } : void 0,
                    currentValueAtPath: t,
                    fromTextValueFn: i().n,
                    toTextValueFn: i().Ap,
                    equalityFn: n().L3.isEqualIdTable
                })
            }

            function s(e, t) {
                let o = r(381453).Gv(t) ? t : {},
                    d = { ...o
                    };
                for (let t in e) {
                    let r = e[t],
                        s = (0, i().n)(o[t]),
                        l = n().L3.uniq([...s, ...r.map(e => ({
                            id: e.id,
                            spaceId: e.spaceId,
                            table: a().ev
                        }))]);
                    d[t] = (0, i().Ap)(l)
                }
                return d
            }

            function l(e, t) {
                return (0, i().Ap)((0, r(640937).oO)({
                    value: {
                        id: e.id,
                        spaceId: e.spaceId,
                        table: a().ev
                    },
                    currentValues: (0, i().n)(t),
                    equalityFn: n().L3.isEqualIdTable
                }))
            }

            function u(e, t) {
                let o = (0, i().n)(t);
                return (0, r(640937).T3)({
                    addedValue: {
                        id: e.args.id,
                        spaceId: e.args.spaceId,
                        table: a().ev
                    },
                    previousValues: o,
                    equalityFn: n().L3.isEqualIdTable,
                    createRemoveOpFn: t => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "removeRelation",
                        args: {
                            id: t.id,
                            spaceId: t.spaceId
                        }
                    }),
                    createAddAfterOpFn: t => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addRelationAfter",
                        args: {
                            id: t.id,
                            spaceId: t.spaceId
                        }
                    }),
                    createAddBeforeOpFn: (t, r) => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addRelationBefore",
                        args: {
                            id: t.id,
                            before: null == r ? void 0 : r.id,
                            spaceId: t.spaceId
                        }
                    })
                })
            }

            function c(e, t) {
                let o = (0, i().n)(t);
                return (0, r(640937).yG)({
                    removedValue: {
                        id: e.args.id,
                        spaceId: e.args.spaceId,
                        table: a().ev
                    },
                    previousValues: o,
                    equalityFn: n().L3.isEqualIdTable,
                    createAddAfterOpFn: (t, r) => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addRelationAfter",
                        args: {
                            id: t.id,
                            after: null == r ? void 0 : r.id,
                            spaceId: t.spaceId
                        }
                    }),
                    createAddBeforeOpFn: (t, r) => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addRelationBefore",
                        args: {
                            id: t.id,
                            before: null == r ? void 0 : r.id,
                            spaceId: t.spaceId
                        }
                    })
                })
            }
        },
        609277: (e, t, r) => {
            r.d(t, {
                $Y: () => i,
                Sh: () => n
            });
            let i = "discussion",
                n = {
                    table: i,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        type: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        context: r(759070).q.JSON,
                        resolved: r(759070).q.Boolean,
                        comments: r(759070).q.StringArray,
                        space_id: r(759070).q.UUID,
                        reactions: r(759070).q.UUIDArray,
                        property_id: r(759070).q.String
                    },
                    requiredColumns: {
                        parent_id: !0,
                        parent_table: !0,
                        resolved: !0,
                        type: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0,
                        properties: {
                            context: {
                                private: !0
                            }
                        }
                    })
                }
        },
        611971: (e, t, r) => {
            r.d(t, {
                SA: () => o,
                rm: () => a,
                xz: () => n
            });
            let i = "collection_property_schema";

            function n(e) {
                return (0, r(4962).gB)(`${e.collectionId}|${e.propertyId}`)
            }

            function a(e) {
                return {
                    table: i,
                    id: n({
                        collectionId: e.collectionId,
                        propertyId: e.propertyId
                    }),
                    spaceId: e.spaceId
                }
            }
            let o = {
                table: i,
                columnTypes: {
                    id: r(759070).q.UUID,
                    version: r(759070).q.Number,
                    last_version: r(759070).q.Number,
                    space_id: r(759070).q.UUID,
                    parent_table: r(759070).q.String,
                    parent_id: r(759070).q.UUID,
                    alive: r(759070).q.Boolean,
                    last_edited_by_id: r(759070).q.UUID,
                    last_edited_time: r(759070).q.Number,
                    last_edited_by_table: r(759070).q.String,
                    property_short_id: r(759070).q.String,
                    permissions: r(759070).q.JSON,
                    property_schema: r(759070).q.JSON
                },
                requiredColumns: {
                    id: !0,
                    version: !0,
                    space_id: !0,
                    parent_table: !0,
                    parent_id: !0,
                    alive: !0,
                    last_edited_by_id: !0,
                    last_edited_time: !0,
                    last_edited_by_table: !0,
                    property_short_id: !0,
                    property_schema: !0
                },
                model: (0, r(68291).P)({
                    RecordStore: !0
                })
            }
        },
        632754: (e, t, r) => {
            r.d(t, {
                H: () => i
            });
            let i = (0, r(109939).YK)({
                nowText: {
                    defaultMessage: "Now",
                    id: "mentionMenu.templateVariables.text.now"
                },
                nowDescription: {
                    defaultMessage: "Time when duplicated",
                    id: "mentionMenu.templateVariables.description.now"
                },
                nowKeywords: {
                    defaultMessage: "now",
                    id: "mentionMenu.templateVariables.keywords.now"
                },
                todayText: {
                    defaultMessage: "Today",
                    id: "mentionMenu.templateVariables.text.tday"
                },
                todayDescription: {
                    defaultMessage: "Date when duplicated",
                    id: "mentionMenu.templateVariables.description.today"
                },
                todayKeywords: {
                    defaultMessage: "today",
                    id: "mentionMenu.templateVariables.keywords.today"
                },
                meText: {
                    defaultMessage: "Me",
                    id: "mentionMenu.templateVariables.text.me"
                },
                meKeywords: {
                    defaultMessage: "me",
                    id: "mentionMenu.templateVariables.keywords.me"
                }
            })
        },
        640937: (e, t, r) => {
            function i(e, t) {
                return q({
                    value: e.pointer,
                    after: e.after,
                    currentValueAtPath: t,
                    fromTextValueFn: e => (0, r(247438).ELt)({
                        value: e,
                        includeTemplateVariables: !0
                    }),
                    toTextValueFn: r(394517).R,
                    equalityFn: s
                })
            }

            function n(e, t) {
                return b({
                    value: e.pointer,
                    before: e.before,
                    currentValueAtPath: t,
                    fromTextValueFn: e => (0, r(247438).ELt)({
                        value: e,
                        includeTemplateVariables: !0
                    }),
                    toTextValueFn: r(394517).R,
                    equalityFn: s
                })
            }

            function a(e, t) {
                return (0, r(394517).R)(g({
                    value: e.pointer,
                    currentValues: (0, r(247438).ELt)({
                        value: t,
                        includeTemplateVariables: !0
                    }),
                    equalityFn: s
                }))
            }

            function o(e, t) {
                let i = (0, r(247438).jEb)({
                    value: t
                });
                return f({
                    addedValue: e.args.pointer,
                    previousValues: i,
                    equalityFn: s,
                    createRemoveOpFn: t => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "removePerson",
                        args: {
                            pointer: t
                        }
                    }),
                    createAddAfterOpFn: t => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addPersonAfter",
                        args: {
                            pointer: t
                        }
                    }),
                    createAddBeforeOpFn: (t, r) => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addPersonBefore",
                        args: {
                            pointer: t,
                            before: r
                        }
                    })
                })
            }

            function d(e, t) {
                let i = (0, r(247438).jEb)({
                    value: t
                });
                return v({
                    removedValue: e.args.pointer,
                    previousValues: i,
                    equalityFn: s,
                    createAddAfterOpFn: (t, r) => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addPersonAfter",
                        args: {
                            pointer: t,
                            after: r
                        }
                    }),
                    createAddBeforeOpFn: (t, r) => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addPersonBefore",
                        args: {
                            pointer: t,
                            before: r
                        }
                    })
                })
            }

            function s(e, t) {
                return "me" === e || "me" === t ? "me" === e && "me" === t : (0, r(197018).Pu)(e) ? !!(0, r(197018).Pu)(t) && r(496282).L3.isEqualIdTable(e, t) : !!((0, r(659341).I6)(e) && (0, r(659341).I6)(t)) && r(496282).L3.isEqualIdTable(e, t)
            }

            function l(e, t) {
                return e.trim().toLowerCase() === t.trim().toLowerCase()
            }

            function u(e, t) {
                return q({
                    value: e.option,
                    after: e.after,
                    currentValueAtPath: t,
                    fromTextValueFn: r(561872).yH,
                    toTextValueFn: r(561872).rK,
                    equalityFn: l
                })
            }

            function c(e, t) {
                return b({
                    value: e.option,
                    before: e.before,
                    currentValueAtPath: t,
                    fromTextValueFn: r(561872).yH,
                    toTextValueFn: r(561872).rK,
                    equalityFn: l
                })
            }

            function _(e, t) {
                let i = g({
                    value: e.option,
                    currentValues: (0, r(561872).yH)(t),
                    equalityFn: l
                });
                return i.length > 0 ? (0, r(561872).rK)(i) : []
            }

            function p(e, t) {
                let i = (0, r(561872).yH)(t);
                return f({
                    addedValue: e.args.option,
                    previousValues: i,
                    equalityFn: l,
                    createRemoveOpFn: t => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "removeSelectOption",
                        args: {
                            option: t
                        }
                    }),
                    createAddAfterOpFn: t => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addSelectOptionAfter",
                        args: {
                            option: t
                        }
                    }),
                    createAddBeforeOpFn: (t, r) => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addSelectOptionBefore",
                        args: {
                            option: t,
                            before: r
                        }
                    })
                })
            }

            function m(e, t) {
                let i = (0, r(561872).yH)(t);
                return v({
                    removedValue: e.args.option,
                    previousValues: i,
                    equalityFn: l,
                    createAddAfterOpFn: (t, r) => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addSelectOptionAfter",
                        args: {
                            option: t,
                            after: r
                        }
                    }),
                    createAddBeforeOpFn: (t, r) => ({
                        pointer: e.pointer,
                        path: e.path,
                        command: "addSelectOptionBefore",
                        args: {
                            option: t,
                            before: r
                        }
                    })
                })
            }

            function q(e) {
                let t, {
                        value: i,
                        after: n,
                        currentValueAtPath: a,
                        fromTextValueFn: o,
                        toTextValueFn: d,
                        equalityFn: s
                    } = e,
                    l = g({
                        value: i,
                        currentValues: o(a),
                        equalityFn: s
                    });
                if (n) {
                    let e = l.findIndex(e => s(e, n));
                    t = r(381453).Mp([...l.slice(0, e + 1), i, ...l.slice(e + 1)], s)
                } else t = r(381453).Mp([...l, i], s);
                return d(t)
            }

            function b(e) {
                let t, {
                        value: i,
                        before: n,
                        currentValueAtPath: a,
                        fromTextValueFn: o,
                        toTextValueFn: d,
                        equalityFn: s
                    } = e,
                    l = g({
                        value: i,
                        currentValues: o(a),
                        equalityFn: s
                    });
                if (n) {
                    let e = l.findIndex(e => s(e, n));
                    t = r(381453).Mp([...l.slice(0, e), i, ...l.slice(e)], s)
                } else t = r(381453).Mp([i, ...l], s);
                return d(t)
            }

            function g(e) {
                let {
                    value: t,
                    currentValues: r,
                    equalityFn: i
                } = e;
                return r.filter(e => !i(e, t))
            }

            function f(e) {
                let {
                    addedValue: t,
                    previousValues: r,
                    equalityFn: i,
                    createRemoveOpFn: n,
                    createAddAfterOpFn: a,
                    createAddBeforeOpFn: o
                } = e, d = r.findIndex(e => i(e, t));
                return d < 0 ? n(t) : d === r.length - 1 ? a(t) : o(t, r[d + 1])
            }

            function v(e) {
                let {
                    removedValue: t,
                    previousValues: r,
                    equalityFn: i,
                    createAddAfterOpFn: n,
                    createAddBeforeOpFn: a
                } = e, o = r.findIndex(e => i(e, t));
                return o < 0 ? n(t) : 0 === o ? a(t, r.length > 1 ? r[1] : void 0) : n(t, r[o - 1])
            }
            r.d(t, {
                GA: () => d,
                J_: () => o,
                Qu: () => i,
                Qx: () => b,
                T3: () => f,
                UF: () => m,
                Xi: () => a,
                Zl: () => n,
                bG: () => q,
                du: () => p,
                oO: () => g,
                yG: () => v,
                yb: () => u,
                zi: () => _,
                zm: () => c
            }), r(898992), r(354520)
        },
        663341: (e, t, r) => {
            r.d(t, {
                O: () => i
            });

            function i(e) {
                let {
                    operatorValue: t,
                    userTimeZone: i
                } = e;
                if ("exact" === t.type) {
                    let e = t.value;
                    if (!(0, r(722371).O9)(e)) return;
                    return r(25825).ln(e, i)
                }
                return (0, r(866889).U)({
                    operatorValue: t,
                    userTimeZone: i
                })
            }
        },
        665619: (e, t, r) => {
            function i(e) {
                let {
                    parent_id: t,
                    user_id: i
                } = e;
                return (0, r(4962).gB)(`block:${t}:${i}`)
            }
            r.d(t, {
                $5: () => i,
                F9: () => n,
                gI: () => a
            });
            let n = "page_visit",
                a = {
                    table: n,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        visited_at: r(759070).q.Number,
                        total_visits: r(759070).q.Number,
                        decayed_visit_score: r(759070).q.Number,
                        decayed_visit_score_updated_at: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        was_unlisted: r(759070).q.Boolean,
                        type: r(759070).q.String
                    },
                    requiredColumns: {
                        parent_table: !0,
                        parent_id: !0,
                        user_id: !0,
                        visited_at: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                }
        },
        666451: (e, t, r) => {
            r.d(t, {
                f: () => i
            }), r(16280), r(898992), r(354520);

            function i(e) {
                let {
                    filter: t
                } = e, i = (0, r(400473).gc)(t) ? (t.value.value || "").trim().toLowerCase() : void 0;
                return e => {
                    var n;
                    let a = (e.value || "").trim().toLowerCase();
                    if (!(0, r(763230).Kg)(a)) throw Error(`str is not a string: ${a}`);
                    return "is_empty" === t.operator ? 0 === a.length : "is_not_empty" === t.operator ? a.length > 0 : "string_has_no_alphabet_prefix" === t.operator ? !!(a && !(0, r(910675).Wk)(a)) : !i || ("string_is" === t.operator ? a === i : "string_is_not" === t.operator ? a !== i : "string_contains" === t.operator ? a.indexOf(i) >= 0 : "string_does_not_contain" === t.operator ? 0 > a.indexOf(i) : "string_starts_with" === t.operator ? a.slice(0, i.length) === i : "string_ends_with" === t.operator ? a.slice(a.length - i.length) === i : void(null == (n = globalThis.__debugPrint__) || n.call(globalThis, "compileTextFilter - operator", t.operator), (0, r(722371).HB)(t.operator)))
                }
            }
        },
        670483: (e, t, r) => {
            function i(e, t) {
                return "start" === e || "end" === e ? e === t : "start" !== t && "end" !== t && n(e, t)
            }

            function n(e, t) {
                return e[0] === t[0] && e[1] === t[1]
            }

            function a(e, t) {
                return e.anchor === t.anchor && i(e.id, t.id)
            }
            r.d(t, {
                Dx: () => n,
                lS: () => i,
                nj: () => a
            })
        },
        681815: (e, t, r) => {
            r.d(t, {
                A: () => i
            });

            function i(e) {
                try {
                    return String(JSON.stringify(e, (e, t) => t instanceof Map ? Object.fromEntries(t) : "bigint" == typeof t ? t.toString() : "symbol" == typeof t ? t.description : t))
                } catch {
                    return "Unable to serialize your whatever it is. Sorry."
                }
            }
        },
        685136: (e, t, r) => {
            r.d(t, {
                NM: () => n,
                SN: () => i
            });
            let i = "comment",
                n = {
                    table: i,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        text: r(759070).q.JSON,
                        created_time: r(759070).q.Number,
                        last_edited_time: r(759070).q.Number,
                        alive: r(759070).q.Boolean,
                        created_by_table: r(759070).q.String,
                        created_by_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        content: r(759070).q.UUIDArray,
                        reactions: r(759070).q.UUIDArray,
                        display_name: r(759070).q.JSON
                    },
                    requiredColumns: {
                        parent_id: !0,
                        parent_table: !0,
                        alive: !0,
                        created_time: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                }
        },
        694945: (e, t, r) => {
            r.d(t, {
                Q: () => i
            });

            function i(e) {
                return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            }
        },
        700135: (e, t, r) => {
            r.d(t, {
                A: () => n
            }), r(898992), r(672577), r(803949), r(581454), r(737550);
            class i {
                map;
                constructor(e) {
                    this.map = new(r(793665)).A({
                        getKey: e
                    })
                }
                add(...e) {
                    for (let t of e) this.map.set(t, t)
                }
                delete(e) {
                    return this.map.delete(e)
                }
                valuesArray() {
                    return this.map.valuesArray()
                }
                has(e) {
                    return this.map.has(e)
                }
                some(e) {
                    return this.valuesArray().some(e)
                }
                find(e) {
                    return this.valuesArray().find(e)
                }
                equals(e) {
                    if (this.size !== e.size) return !1;
                    for (let t of e)
                        if (!this.has(t)) return !1;
                    return !0
                }
                get size() {
                    return this.map.size
                }[Symbol.iterator]() {
                    return this.map.values()
                }
                static fromArray(e) {
                    let {
                        values: t,
                        getKeyFn: r
                    } = e, n = void 0 !== r ? new i(r) : new i;
                    return t.forEach(e => n.add(e)), n
                }
            }
            let n = i
        },
        711536: (e, t, r) => {
            r.d(t, {
                SV: () => i
            }), r(16280);

            function i(e) {
                let t = e.edge_type;
                if (t.startsWith(r(933537).SC)) {
                    let {
                        sourceCollectionId: e,
                        sourcePropertyId: i,
                        targetCollectionId: n,
                        targetPropertyId: a
                    } = function(e) {
                        let [t, i] = e.substring(r(933537).SC.length).split(r(933537).tf);
                        if (!t || !i) throw Error(`Invalid edge type name: ${e}`);
                        let [n, a] = t.split(r(933537).vX), [o, d] = i.split(r(933537).vX);
                        if (!(0, r(4962).uj)(n)) throw Error(`Invalid source collection ID: ${n}`);
                        if (!(0, r(4962).uj)(o)) throw Error(`Invalid target collection ID: ${o}`);
                        return {
                            sourceCollectionId: n,
                            sourcePropertyId: a,
                            targetCollectionId: o,
                            targetPropertyId: d
                        }
                    }(t);
                    return (0, r(67382).Q)({
                        sourceCollectionId: e,
                        sourcePropertyId: i,
                        targetCollectionId: n,
                        targetPropertyId: a
                    })
                }
                for (let e of r(933537).lP)
                    if (t === e.typeName || t === e.reverseTypeName) return e;
                throw Error(`Invalid edge_type: ${t}`)
            }
        },
        714502: (e, t, r) => {
            r.d(t, {
                iu: () => o,
                lK: () => n,
                qL: () => a
            }), r(944114);
            var i = () => r(214582);

            function n(e) {
                let t = [];
                for (let r of e.iterateItems({
                        includeDeleted: !0,
                        includeEndItem: !0
                    })) t.push(i().l(r));
                return {
                    x: e.textInstanceId,
                    i: t,
                    l: e.getSearchLabel()
                }
            }

            function a(e, t, r) {
                let i = e.indexOf(",");
                if (null == r || r.addTagsToCurrentSpan({
                        "crdt.text_instance_id_fallback_used": -1 === i
                    }), -1 === i) return t;
                let n = e.slice(0, i);
                return null == r || r.addTagsToCurrentSpan({
                    "crdt.text_instance_id_mismatch": n !== t
                }), n
            }

            function o({
                serialized: e,
                opClockValueHolder: t,
                sliceKey: n,
                logger: d
            }) {
                let s = a(n, e.x, d),
                    l = [],
                    u = 0;
                for (let t of e.i) {
                    let {
                        item: e,
                        maxTimestamp: r
                    } = i().i(t);
                    l.push(e), u = Math.max(u, r)
                }
                r(450694).RT(l);
                let c = (0, r(765483).Wg)(l[0], r(366129).c$, r(83987).JW);
                return t.set(Math.max(t.get(), u)), new(r(366129)).Ay(s, new(r(265129)).A(t), c, r(363372).i_(e.l))
            }
        },
        718681: (e, t, r) => {
            r.d(t, {
                W: () => n
            }), r(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M6.25 3.125a.625.625 0 1 1 0 1.25h-1a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h1a.625.625 0 1 1 0 1.25h-1a2.125 2.125 0 0 1-2.125-2.125v-9.5c0-1.174.951-2.125 2.125-2.125zm8.5 0c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-1a.625.625 0 1 1 0-1.25h1a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875h-1a.625.625 0 1 1 0-1.25z"
                    })
                },
                n = (0, r(104509).wt)("bracket", i, "default")
        },
        725462: (e, t, r) => {
            r.d(t, {
                n: () => i
            });

            function i(e) {
                var t;
                return t = e.operator, !!(0, r(722371).O)(r(910369).hV, t)
            }
        },
        742655: (e, t, r) => {
            r.d(t, {
                o: () => i
            }), r(898992), r(430670);

            function i() {
                return {
                    derivePrimitiveOperations(e, t) {
                        let {
                            collectionId: i,
                            spaceId: n
                        } = e.args, a = t(e.pointer);
                        if (!a || a.is_template) return [];
                        let o = (0, r(975908).zN)({
                            block: a,
                            getRecordValue: t
                        });
                        if ((null == o ? void 0 : o.id) === i) {
                            let a = (0, r(154326).f_)({
                                    spaceId: n,
                                    parentTable: r(46241).V,
                                    parentId: i
                                }),
                                o = t(a),
                                d = t({
                                    table: r(46241).V,
                                    id: i,
                                    spaceId: n
                                }),
                                s = r(993189).b4_.fromGetRecordValueFn(t);
                            if (d && o && o.alive) return (0, r(154326).V_)(d, s).flatMap(t => [{
                                pointer: e.pointer,
                                command: "set",
                                path: ["properties", t],
                                args: (0, r(561872).$E)(o.next_value)
                            }, {
                                pointer: a,
                                command: "set",
                                path: ["next_value"],
                                args: o.next_value + 1
                            }])
                        }
                        return []
                    },
                    getAdditionalRelatedPointers(e) {
                        let {
                            collectionId: t,
                            spaceId: i
                        } = e.args;
                        return [(0, r(154326).f_)({
                            spaceId: i,
                            parentTable: r(46241).V,
                            parentId: t
                        })]
                    },
                    invert: e => []
                }
            }
        },
        745958: (e, t, r) => {
            r.d(t, {
                X: () => i
            });
            let i = (0, r(465822).V)({
                schemaField: "schema",
                additionalPropertyIdsField: "additional_property_ids",
                shouldSetAliveToFalseOnDeletion: !1
            })
        },
        749950: (e, t, r) => {
            r.d(t, {
                F: () => i
            });
            let i = {
                [r(832375).Oa6]: void 0,
                [r(832375).kzt]: 12,
                [r(832375).eBi]: void 0,
                [r(832375).jft]: void 0,
                [r(832375).KNP]: void 0,
                [r(832375).l1b]: void 0,
                [r(832375).Wdc]: void 0,
                [r(832375).y$R]: void 0,
                [r(832375).Wuo]: void 0,
                [r(832375).cKY]: void 0,
                [r(832375).TFd]: void 0,
                [r(832375).Nm7]: void 0,
                [r(832375).YVp]: void 0,
                [r(832375).yBS]: 25,
                [r(832375).SC1]: 26,
                [r(832375).OfD]: void 0,
                [r(832375).Ok8]: void 0,
                [r(832375).kf7]: void 0,
                [r(832375).k$w]: void 0,
                [r(832375).hrX]: void 0,
                [r(832375).evP]: 1,
                [r(832375).ukB]: 30,
                [r(832375).H3H]: void 0,
                [r(832375).GPl]: void 0,
                [r(832375).qPS]: void 0,
                [r(832375).hGr]: void 0,
                [r(832375).qmW]: void 0,
                [r(832375).VlP]: 7,
                [r(832375).BiG]: 29,
                [r(832375).Gy1]: 8,
                [r(832375).SNf]: 4,
                [r(832375)._0W]: void 0,
                [r(832375).rqL]: void 0,
                [r(832375).$XM]: void 0,
                [r(832375).eUD]: void 0,
                [r(832375).e4Z]: void 0,
                [r(832375).$2J]: void 0,
                [r(832375).r1d]: void 0,
                [r(832375).$YH]: 3,
                [r(832375).HxG]: void 0,
                [r(832375).m2N]: void 0,
                [r(832375).ITT]: 17,
                [r(832375).$kK]: void 0,
                [r(832375).vjA]: void 0,
                [r(832375).XHn]: void 0,
                [r(832375).gEh]: void 0,
                [r(832375).adQ]: void 0,
                [r(832375).AsL]: void 0,
                [r(832375).hWt]: void 0,
                [r(832375).Klg]: void 0,
                [r(832375).$MF]: void 0,
                [r(832375).HBA]: void 0,
                [r(832375).PsW]: void 0,
                [r(832375).rGg]: void 0,
                [r(832375).DHr]: void 0,
                [r(832375).kMj]: void 0,
                [r(832375).jsQ]: void 0,
                [r(832375).OjI]: void 0,
                [r(832375).T2]: void 0,
                [r(832375).Cy3]: void 0,
                [r(832375).lo9]: 28,
                [r(832375).iEO]: void 0,
                [r(832375).joQ]: void 0,
                [r(832375).W8A]: void 0,
                [r(832375).hyq]: void 0,
                [r(832375).hxQ]: void 0,
                [r(832375).Wnz]: void 0,
                [r(832375).$$c]: void 0,
                [r(832375).yDO]: void 0,
                [r(832375).Lij]: void 0,
                [r(832375).bhs]: void 0,
                [r(832375).SBl]: void 0,
                [r(832375).Q4N]: void 0,
                [r(832375).bnG]: void 0,
                [r(832375).CEK]: void 0,
                [r(832375).Yxt]: void 0,
                [r(832375).Yxw]: void 0,
                [r(832375).aFA]: void 0,
                [r(832375).zx0]: 27,
                [r(832375).PXw]: void 0,
                [r(832375).dPx]: void 0,
                [r(832375).ozN]: 10,
                [r(832375).nYQ]: 11,
                [r(832375).IF6]: void 0,
                [r(832375).HtE]: void 0,
                [r(832375).jvE]: void 0,
                [r(832375).uLb]: void 0,
                [r(832375).QOF]: void 0,
                [r(832375).KcW]: void 0,
                [r(832375).pEW]: void 0,
                [r(832375).yAZ]: void 0,
                [r(832375).a8w]: void 0,
                [r(832375).KqJ]: void 0,
                [r(832375)._ig]: 20,
                [r(832375).ULG]: void 0,
                [r(832375).UNl]: void 0,
                [r(832375).EgT]: void 0,
                [r(832375).ziV]: void 0,
                [r(832375).V1v]: void 0,
                [r(832375).qtq]: void 0,
                [r(832375).qrH]: void 0,
                [r(832375).lMK]: void 0,
                [r(832375).enP]: void 0,
                [r(832375).XXy]: void 0,
                [r(832375).J6M]: void 0,
                [r(832375).OCn]: void 0,
                [r(832375).SS3]: void 0,
                [r(832375).es0]: void 0,
                [r(832375).Sd1]: void 0,
                [r(832375).MOG]: void 0,
                [r(832375)._pz]: void 0,
                [r(832375).oo9]: void 0,
                [r(832375).wl6]: void 0,
                [r(832375).mEg]: void 0,
                [r(832375).pkG]: void 0,
                [r(832375).y75]: void 0,
                [r(832375).rfw]: void 0,
                [r(832375).GY9]: void 0,
                [r(832375).vbv]: void 0,
                [r(832375).MRl]: void 0,
                [r(832375).ouC]: void 0,
                [r(832375).F9f]: void 0,
                [r(832375).eV7]: void 0,
                [r(832375).KWb]: void 0,
                [r(832375).Z4m]: 5,
                [r(832375).dod]: void 0,
                [r(832375).qNb]: void 0,
                [r(832375)._6L]: void 0,
                [r(832375).AvP]: void 0,
                [r(832375).ez7]: 22,
                [r(832375).sNL]: 2,
                [r(832375).Fub]: void 0,
                [r(832375).iPf]: 6,
                [r(832375).Ws0]: void 0,
                [r(832375).bwd]: void 0,
                [r(832375)._71]: void 0,
                [r(832375).Xiz]: 14,
                [r(832375).Xh]: void 0,
                [r(832375).GFx]: void 0,
                [r(832375).Ghx]: void 0,
                [r(832375).kW7]: void 0,
                [r(832375).nsO]: void 0,
                [r(832375).mlj]: void 0,
                [r(832375).sLR]: void 0,
                [r(832375).H53]: void 0,
                [r(832375).eqd]: void 0,
                [r(832375).G4T]: void 0,
                [r(832375).oJm]: void 0,
                [r(832375).Q$N]: void 0,
                [r(832375).Crh]: 18,
                [r(832375).ZPG]: 19,
                [r(832375).ojG]: void 0,
                [r(832375).EuC]: void 0,
                [r(832375).VY8]: void 0,
                [r(832375).Kq7]: void 0,
                [r(832375).Xwe]: void 0,
                [r(832375).NXh]: void 0,
                [r(832375).iiK]: void 0,
                [r(832375).SMn]: void 0,
                [r(832375).DWi]: void 0,
                [r(832375).m3J]: void 0,
                [r(832375).aSp]: void 0,
                [r(832375).j0B]: void 0,
                [r(832375).$RT]: void 0,
                [r(832375).Jmj]: void 0,
                [r(832375).qcA]: void 0,
                [r(832375).gDn]: void 0,
                [r(832375).naB]: void 0,
                [r(832375).f3c]: void 0,
                [r(832375).JrE]: 9,
                [r(832375).aJN]: void 0,
                [r(832375).sB_]: void 0,
                [r(832375).PcJ]: void 0,
                [r(832375).mu7]: void 0,
                [r(832375).oNS]: void 0,
                [r(832375).ytf]: void 0,
                [r(832375).IeV]: void 0,
                [r(832375).RWv]: void 0,
                [r(832375).JAq]: void 0,
                [r(832375).yiT]: void 0,
                [r(832375).yKj]: 21,
                [r(832375).XXO]: void 0,
                [r(832375).bf7]: void 0,
                [r(832375).vnT]: void 0,
                [r(832375).Hik]: void 0,
                [r(832375)._FR]: void 0,
                [r(832375).hRD]: void 0,
                [r(832375).R$c]: void 0,
                [r(832375).HAA]: void 0,
                [r(832375).Toz]: 16,
                [r(832375).mSw]: 13,
                [r(832375).wI1]: void 0,
                [r(832375).IvX]: void 0,
                [r(832375).A3P]: void 0,
                [r(832375).GUg]: void 0,
                [r(832375).B7B]: void 0,
                [r(832375).yvd]: void 0,
                [r(832375).gDt]: void 0,
                [r(832375).S6u]: void 0,
                [r(832375)._0B]: void 0,
                [r(832375).rNM]: void 0,
                [r(832375).CsX]: void 0,
                [r(832375).bJl]: void 0,
                [r(832375).GDR]: void 0,
                [r(832375).WQd]: void 0,
                [r(832375).pVl]: void 0,
                [r(832375).xMx]: void 0,
                [r(832375).TFg]: void 0,
                [r(832375).C0E]: 23,
                [r(832375).U6v]: 15,
                [r(832375).QRx]: void 0,
                [r(832375).lyl]: void 0,
                [r(832375).NkI]: void 0,
                [r(832375).tEp]: void 0,
                [r(832375).yMG]: void 0,
                [r(832375).yHj]: void 0,
                [r(832375).PuY]: void 0,
                [r(832375).EcF]: void 0,
                [r(832375).ef6]: void 0
            }
        },
        758159: (e, t, r) => {
            function i(e, t) {
                var r;
                let i = null == (r = t.form_conditional_modules) ? void 0 : r[e];
                if (i && "formQuestion" === i.type) return {
                    module: i,
                    area: "form_conditional_modules"
                };
                let n = t.form_layout_schema.find(t => t.id === e);
                if (!n || "formQuestion" !== n.type) throw Error(`Cannot find module with id: ${e} in form areas`);
                return {
                    module: n,
                    area: "form_layout_schema"
                }
            }
            r.d(t, {
                A: () => i
            }), r(16280), r(898992), r(672577)
        },
        765483: (e, t, r) => {
            function i(e, t, i) {
                return r(148337).MX(e, t, i, r(101787).QkH)
            }

            function n(e, t, i) {
                return r(148337).o9(e, t, i, r(101787).QkH)
            }

            function a(e, t, i) {
                return r(148337).nh(e, t, i, r(101787).QkH)
            }

            function o(e, t, i, n) {
                return r(148337).Wg(e, t, i, n, r(101787).QkH)
            }

            function d(e, t, i, n) {
                return r(148337).oC(e, t, i, n, r(101787).QkH)
            }
            r.d(t, {
                MX: () => i,
                Wg: () => o,
                nh: () => a,
                o9: () => n,
                oC: () => d
            })
        },
        779760: (e, t, r) => {
            r.d(t, {
                O: () => i
            });

            function i(e) {
                let {
                    propertyValue: t
                } = e;
                return {
                    type: "number",
                    value: (0, r(588688).M)(t)
                }
            }
        },
        784923: (e, t, r) => {
            r.d(t, {
                I: () => i
            });

            function i(e) {
                var t;
                return (t = e.operator, (0, r(722371).O)(r(94296).ic, t) || 0) ? (e.operator, !0) : (e.operator, !1)
            }
        },
        785225: (e, t, r) => {
            r.d(t, {
                a: () => i
            });

            function i() {
                let e = "production";
                switch (e) {
                    case "local":
                    case "staging":
                    case "development":
                    case "production":
                        return e;
                    default:
                        return "production"
                }
            }
        },
        791513: (e, t, r) => {
            r.d(t, {
                A: () => o
            }), r(16280), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            var i = r.n(r(625473));
            let n = new WeakMap;

            function a(e) {
                let t = n.get(e);
                return void 0 !== t || (t = i()(e), n.set(e, t)), t
            }
            class o {
                nodes = new Map;
                constructor(e = a) {
                    this.getKey = e
                }
                addNode(e) {
                    let t = this.getKey(e);
                    this.nodes.has(t) || this.nodes.set(t, {
                        children: new Set,
                        value: e
                    })
                }
                hasNode(e) {
                    let t = this.getKey(e);
                    return this.nodes.has(t)
                }
                removeNode(e) {
                    let t = this.getKey(e);
                    if (this.nodes.has(t)) {
                        let e = (0, r(148337).o9)(this.nodes.get(t));
                        for (let {
                                children: r
                            } of (this.nodes.delete(t), this.nodes.values())) r.delete(e)
                    }
                }
                addEdge(e, t) {
                    this.addNode(e), this.addNode(t);
                    let i = (0, r(148337).o9)(this.nodes.get(this.getKey(e))),
                        n = (0, r(148337).o9)(this.nodes.get(this.getKey(t)));
                    if (!i.children.has(n) && (i.children.add(n), this.hasCycle(i))) throw i.children.delete(n), Error(`Cycle detected adding edge ${this.getKey(e)} -> ${this.getKey(t)}`)
                }
                removeEdge(e, t) {
                    let i = (0, r(148337).o9)(this.nodes.get(this.getKey(e))),
                        n = (0, r(148337).o9)(this.nodes.get(this.getKey(t)));
                    i.children.has(n) && i.children.delete(n)
                }
                hasEdge(e, t) {
                    let r = this.nodes.get(this.getKey(e)),
                        i = this.nodes.get(this.getKey(t));
                    return !!(r && i && r.children.has(i))
                }
                hasCycle(e) {
                    let t = new Set,
                        r = new Set,
                        i = e => {
                            if (t.has(e)) return !0;
                            if (r.has(e)) return !1;
                            for (let r of (t.add(e), e.children))
                                if (i(r)) return !0;
                            return t.delete(e), r.add(e), !1
                        };
                    return i(e)
                }
                getSortedNodes() {
                    let e = [],
                        t = new Set,
                        r = i => {
                            for (let e of (t.add(i), i.children)) t.has(e) || r(e);
                            e.unshift(i.value)
                        };
                    for (let e of this.nodes.values()) t.has(e) || r(e);
                    return e
                }
            }
        },
        795e3: (e, t, r) => {
            r.d(t, {
                n: () => i
            });

            function i(e) {
                return "relation" === e.type
            }
        },
        799150: (e, t, r) => {
            function i(e) {
                return "object" == typeof e && !!e && !(function(e) {
                    if ("object" != typeof e || null === e || "[object Object]" !== (null === e ? void 0 === e ? "[object Undefined]" : "[object Null]" : toString.call(e))) return !1;
                    if (null === Object.getPrototypeOf(e)) return !0;
                    let t = e;
                    for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                    return Object.getPrototypeOf(e) === t
                }(e) || Array.isArray(e) || d(e) || s(e))
            }

            function n(e, t) {
                return !("ignore-class-instances" === t && i(e)) && (null == e || Array.isArray(e) && 0 === e.length || d(e) && 0 === e.size || s(e) && 0 === e.size || l(e) && !d(e) && !s(e) && 0 === Object.keys(e).length)
            }
            r.d(t, {
                A: () => o
            }), r(16280), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            let a = {
                    annotationOpsBefore: !0,
                    annotationOpsAfter: !0,
                    a: !0,
                    b: !0,
                    crdt_data: !0,
                    workflowOperations: !0,
                    threadOperations: !0,
                    threadRecordMap: !0,
                    dashboard_layout_schema: !0
                },
                o = function e(t, r, o = []) {
                    if ("ignore-class-instances" === r && i(t)) return t;
                    if (Array.isArray(t)) {
                        let i = 0;
                        for (let a = 0; a < t.length; a++) {
                            if (o.length > 0 && o[0] !== a) {
                                t[i] = t[a], i += 1;
                                continue
                            }
                            let d = e(t[a], r, o.slice(1));
                            n(d, r) || (t[i] = d, i += 1)
                        }
                        t.length = i
                    } else if (d(t)) {
                        if (o.length > 0) throw Error("Cannot traverse path into a Set");
                        for (let e of t) n(e, r) && t.delete(e)
                    } else if (s(t)) {
                        if (o.length > 0) throw Error("Cannot traverse path into a map");
                        for (let i of t.keys()) {
                            let a = e(t.get(i), r);
                            n(a, r) ? t.delete(i) : t.set(i, a)
                        }
                    } else if (l(t))
                        for (let i of Object.keys(t)) {
                            if (a[i] || o.length > 0 && o[0] !== i) continue;
                            let d = e(t[i], r, o.slice(1));
                            n(d, r) ? delete t[i] : t[i] = d
                        }
                    if (!n(t, r)) return t
                };

            function d(e) {
                return e instanceof Set
            }

            function s(e) {
                return e instanceof Map
            }

            function l(e) {
                let t = typeof e;
                return null !== e && ("object" === t || "function" === t)
            }
        },
        801230: (e, t, r) => {
            r.d(t, {
                A: () => i,
                L: () => n
            });
            let i = 50,
                n = 100
        },
        811637: (e, t, r) => {
            r.d(t, {
                K: () => i
            });

            function i(e) {
                let {
                    block: t,
                    propertySchema: i,
                    getRecordModel: n,
                    filterValueParseContext: a
                } = e, {
                    userTimeZone: o,
                    userId: d
                } = a;
                if (!d || !i || "last_visited_time" !== i.type) return {
                    type: "date",
                    value: void 0
                };
                let s = (0, r(665619).$5)({
                        parent_id: t.id,
                        user_id: d
                    }),
                    l = n({
                        table: r(665619).F9,
                        id: s,
                        spaceId: t.getSpaceId()
                    });
                return (0, r(496273).I)({
                    timestamp: null == l ? void 0 : l.getVisitedAt(),
                    userTimeZone: o
                })
            }
        },
        814072: (e, t, r) => {
            r.d(t, {
                m: () => i
            });

            function i(e) {
                let {
                    propertyValue: t
                } = e;
                return {
                    type: "checkbox",
                    value: (0, r(896216).w)(t)
                }
            }
        },
        831127: (e, t, r) => {
            r.d(t, {
                s: () => i
            });

            function i(e) {
                let t = {},
                    {
                        pageVisitSource: i,
                        queryId: n,
                        analyticsNotificationId: a,
                        chatThreadId: o
                    } = e;
                if (i) {
                    let [e, n] = (0, r(254656).DU)(i);
                    t[e] = n
                }
                return n && (t[r(254656).CW] = n), a && (t[r(254656).rh] = (0, r(4962).S2)(a)), o && (t[r(737869).P5] = (0, r(4962).S2)(o)), t
            }
        },
        832002: (e, t, r) => {
            function i(e, t) {
                return e.length === t.length && (1 === e.length ? e[0] === t[0] : r(381453).n4(e, t))
            }

            function n(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                    if (!i(e[r], t[r])) return !1;
                return !0
            }
            r.d(t, {
                c: () => n,
                y: () => i
            })
        },
        844544: (e, t, r) => {
            r.d(t, {
                $: () => i
            });

            function i(e) {
                let {
                    operatorValue: t,
                    userTimeZone: i
                } = e;
                if ("exact" === t.type) {
                    let e = t.value;
                    if (!(0, r(722371).O9)(e)) return;
                    let {
                        start: n
                    } = r(25825).AA(e, i);
                    return n.startOf("day").valueOf()
                }
                return (0, r(866889).U)({
                    operatorValue: t,
                    userTimeZone: i
                })
            }
        },
        846684: (e, t, r) => {
            r.d(t, {
                y: () => i
            });
            let i = {
                CreatedBy: "notion://meetings/created_by_property",
                CreatedTime: "notion://meetings/created_time_property",
                LastEditedBy: "notion://meetings/last_edited_by_property",
                LastEditedTime: "notion://meetings/last_edited_time_property",
                Attendees: "notion://meetings/attendees_property",
                MeetingTime: "notion://meetings/meeting_time_property",
                MeetingType: "notion://meetings/meeting_type_property",
                Tags: "notion://meetings/meeting_tags_property"
            }
        },
        847963: (e, t, r) => {
            r.d(t, {
                b: () => n
            });
            let i = Symbol.for("CRDT_SESSION_ID");

            function n() {
                return (0, r(722371).GV)((0, r(227030).Ak)(12), i)
            }
        },
        854704: (e, t, r) => {
            r.d(t, {
                T: () => n,
                g: () => i
            });
            let i = {
                    number_equals: !0,
                    number_does_not_equal: !0,
                    number_greater_than: !0,
                    number_less_than: !0,
                    number_greater_than_or_equal_to: !0,
                    number_less_than_or_equal_to: !0,
                    is_empty: !0,
                    is_not_empty: !0
                },
                n = (0, r(722371).objectKeys)(i)
        },
        861334: (e, t, r) => {
            r.d(t, {
                K: () => i
            });

            function i(e) {
                return !!(0, r(722371).O)(r(854704).g, e)
            }
        },
        864816: (e, t, r) => {
            r.d(t, {
                A: () => o
            }), r(16280), r(18107), r(944114), r(967357);
            var i = r.n(r(625473)),
                n = () => r(148337),
                a = () => r(623879);
            class o {
                maxEndIndex = 0;
                annotationRanges = new(r(277637)).G(() => []);
                sorter = new(r(791513)).A;
                addOrderedAnnotationsInRange(e) {
                    let {
                        annotationLists: t,
                        startIndex: o,
                        endIndex: d
                    } = e;
                    (0, n().MX)(o >= 0, "Start index must be greater than or equal to 0"), (0, n().MX)(o < d, "End index must be greater than start index"), (0, n().MX)(o >= this.maxEndIndex, "Start of range should be greater than end of previously added ranges");
                    let s = new(r(700135)).A,
                        l = [];
                    try {
                        for (let e of t)
                            for (let t = 0; t < e.length; t++) {
                                let r = e[t];
                                if (this.sorter.hasNode(r) || (this.sorter.addNode(r), s.add(r)), t > 0) {
                                    let i = e[t - 1];
                                    this.sorter.hasEdge(i, r) || (this.sorter.addEdge(i, r), l.push([i, r]))
                                }
                            }
                    } catch (e) {
                        for (let [e, t] of l) this.sorter.removeEdge(e, t);
                        for (let e of s) this.sorter.removeNode(e);
                        throw Error("A list of annotations caused a cycle")
                    }
                    for (let e of t)
                        for (let t of e) {
                            let e = i()(t),
                                r = this.annotationRanges.get(e),
                                s = r.at(-1);
                            !s || s.endIndex !== o || (0, a().iG)(t) || (0, a().gi)(t) ? r.push({
                                startIndex: o,
                                endIndex: d
                            }) : (0, n().o9)(r.at(-1)).endIndex = d
                        }
                    this.maxEndIndex = d
                }
                getSortedAnnotationRanges() {
                    let e = this.sorter.getSortedNodes(),
                        t = [];
                    for (let r of e) {
                        let e = i()(r);
                        for (let i of this.annotationRanges.get(e)) t.push({
                            annotation: r,
                            ...i
                        })
                    }
                    return t
                }
            }
        },
        866889: (e, t, r) => {
            r.d(t, {
                U: () => i
            });

            function i(e) {
                let {
                    operatorValue: t,
                    userTimeZone: i
                } = e;
                return "today" === t.value ? r(25825).ah(i).valueOf() : "tomorrow" === t.value ? r(25825).ah(i).plus({
                    days: 1
                }).valueOf() : "yesterday" === t.value ? r(25825).ah(i).minus({
                    days: 1
                }).valueOf() : "one_week_from_now" === t.value ? r(25825).ah(i).plus({
                    weeks: 1
                }).valueOf() : "one_week_ago" === t.value ? r(25825).ah(i).minus({
                    weeks: 1
                }).valueOf() : "one_month_from_now" === t.value ? r(25825).ah(i).plus({
                    months: 1
                }).valueOf() : "one_month_ago" === t.value ? r(25825).ah(i).minus({
                    months: 1
                }).valueOf() : void(0, r(722371).HB)(t)
            }
        },
        872676: (e, t, r) => {
            r.d(t, {
                Y: () => i
            });

            function i(e) {
                let {
                    propertyValue: t
                } = e;
                return {
                    type: "text",
                    value: r(247438).k4p(t)
                }
            }
        },
        879151: (e, t, r) => {
            r.d(t, {
                o: () => i
            });

            function i(e) {
                let {
                    updateCollectionDeletedPropertySchemaOperation: t,
                    collectionDeletedSchemaHLOPEnabled: r
                } = e;
                return r ? t : { ...t.args.primitiveOp,
                    pointer: t.pointer,
                    path: t.path
                }
            }
        },
        893072: (e, t, r) => {
            r.d(t, {
                B: () => tg
            });
            let i = {
                    table: "admin_api_log",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        timestamp: r(759070).q.Number,
                        admin_user_id: r(759070).q.UUID,
                        event_name: r(759070).q.String,
                        params: r(759070).q.JSON,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        did_write: r(759070).q.Boolean
                    },
                    requiredColumns: {
                        id: !0,
                        event_name: !0,
                        admin_user_id: !0,
                        timestamp: !0,
                        version: !0
                    }
                },
                n = {
                    table: "admin_api_op_log",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        request_id: r(759070).q.UUID,
                        timestamp: r(759070).q.Number,
                        event_name: r(759070).q.String,
                        operation_index: r(759070).q.Number,
                        operation: r(759070).q.JSON,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        request_id: !0,
                        timestamp: !0,
                        event_name: !0,
                        operation: !0,
                        operation_index: !0
                    }
                },
                a = {
                    table: "ai_connector_user_connection",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        third_party_user_id: r(759070).q.String,
                        notion_user_id: r(759070).q.UUID,
                        notion_user_table: r(759070).q.String,
                        connection_type: r(759070).q.String,
                        connection_id: r(759070).q.UUID,
                        access_details: r(759070).q.JSON,
                        connection_status: r(759070).q.String,
                        alternate_id: r(759070).q.String,
                        created_time: r(759070).q.Number,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        last_edited_time: r(759070).q.Number,
                        last_edited_by_id: r(759070).q.UUID,
                        last_edited_by_table: r(759070).q.String,
                        last_version: r(759070).q.Number,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        third_party_user_id: !0,
                        notion_user_id: !0,
                        notion_user_table: !0,
                        connection_type: !0,
                        connection_id: !0,
                        access_details: !0,
                        connection_status: !0,
                        created_time: !0,
                        created_by_id: !0,
                        created_by_table: !0,
                        last_edited_time: !0,
                        last_edited_by_id: !0,
                        last_edited_by_table: !0,
                        last_version: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                },
                o = {
                    table: "ai_embedding_config",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        is_allowed: r(759070).q.Boolean
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                d = {
                    table: "ai_waitlist",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        created_at: r(759070).q.UUID,
                        updated_at: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        referring_id: r(759070).q.UUID,
                        enrolled: r(759070).q.Boolean,
                        email: r(759070).q.String,
                        position: r(759070).q.Number,
                        version: r(759070).q.Number,
                        invite_code: r(759070).q.String,
                        space_id: r(759070).q.String,
                        qna_priority: r(759070).q.Boolean
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                s = {
                    table: "apple_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        access_token: r(759070).q.String,
                        refresh_token: r(759070).q.String,
                        apple_user_id: r(759070).q.String
                    }
                },
                l = {
                    table: "asana_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        access_token: r(759070).q.String,
                        refresh_token: r(759070).q.String,
                        account: r(759070).q.String
                    }
                },
                u = {
                    table: "assistant_chat_step",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        properties: r(759070).q.JSON
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        space_id: !0,
                        created_time: !0,
                        parent_table: !0,
                        parent_id: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                c = {
                    table: "billing_contract",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        metronome_customer_id: r(759070).q.String,
                        metronome_contract_id: r(759070).q.String,
                        external_id: r(759070).q.String,
                        provider: r(759070).q.String,
                        start_date: r(759070).q.Number,
                        expiration_date: r(759070).q.Number,
                        alive: r(759070).q.Boolean,
                        msa_version: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        updated_time: r(759070).q.Number,
                        data: r(759070).q.JSON
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        provider: !0,
                        start_date: !0,
                        expiration_date: !0,
                        alive: !0,
                        msa_version: !0,
                        created_time: !0,
                        updated_time: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({})
                },
                _ = {
                    table: "billing_contract_space",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        contract_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        external_space_id: r(759070).q.String,
                        alive: r(759070).q.Boolean,
                        created_time: r(759070).q.Number,
                        updated_time: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        contract_id: !0,
                        space_id: !0,
                        external_space_id: !0,
                        alive: !0,
                        created_time: !0,
                        updated_time: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({})
                },
                p = {
                    table: "billing_data",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        created_at: r(759070).q.Number,
                        external_id: r(759070).q.String,
                        provider: r(759070).q.String,
                        clock: r(759070).q.JSON,
                        trial: r(759070).q.JSON,
                        email: r(759070).q.String,
                        address: r(759070).q.JSON,
                        payment_method: r(759070).q.JSON,
                        locked_currency_code: r(759070).q.String,
                        tax_ids: r(759070).q.JSON,
                        account_balances: r(759070).q.JSON,
                        has_paid_nonzero: r(759070).q.Boolean
                    },
                    requiredColumns: {
                        version: !0,
                        parent_id: !0,
                        parent_table: !0,
                        created_at: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({})
                },
                m = {
                    table: "billing_data_history_entry",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        start_time: r(759070).q.Number,
                        type_version: r(759070).q.Number,
                        billing_data: r(759070).q.JSON
                    },
                    requiredColumns: {
                        version: !0,
                        parent_id: !0,
                        parent_table: !0,
                        start_time: !0,
                        type_version: !0,
                        billing_data: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                q = {
                    table: "billing_subscription",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        billing_data_id: r(759070).q.UUID,
                        external_id: r(759070).q.String,
                        status: r(759070).q.String,
                        provider: r(759070).q.String,
                        start_date: r(759070).q.Number,
                        trial_end: r(759070).q.Number,
                        current_period_end: r(759070).q.Number,
                        items: r(759070).q.JSON,
                        created_at: r(759070).q.Number,
                        pending: r(759070).q.JSON,
                        pending_phases: r(759070).q.JSON,
                        unrepresentable_reason: r(759070).q.String
                    },
                    requiredColumns: {
                        version: !0,
                        billing_data_id: !0,
                        external_id: !0,
                        status: !0,
                        start_date: !0,
                        current_period_end: !0,
                        created_at: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({})
                },
                b = {
                    table: "block_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        token_id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number
                    }
                },
                g = {
                    table: "bot_extended_metadata",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        bot_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        type: r(759070).q.String,
                        metadata: r(759070).q.JSON,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        alive: r(759070).q.Boolean,
                        key: r(759070).q.String,
                        last_version: r(759070).q.Number,
                        integration_id: r(759070).q.UUID
                    }
                },
                f = {
                    table: "bot_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        bot_id: r(759070).q.UUID,
                        created_at: r(759070).q.Number,
                        revoked_at: r(759070).q.Number,
                        expires_at: r(759070).q.Number,
                        secret: r(759070).q.String,
                        secret_hash: r(759070).q.String,
                        key_id: r(759070).q.String,
                        refresh_token: r(759070).q.String,
                        refresh_token_hash: r(759070).q.String,
                        parent_bot_token_id: r(759070).q.UUID,
                        metadata: r(759070).q.JSON
                    }
                },
                v = {
                    table: "confluence_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        site: r(759070).q.String,
                        email: r(759070).q.String,
                        access_token: r(759070).q.String,
                        instance: r(759070).q.String,
                        authentication_type: r(759070).q.String,
                        user_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID
                    }
                },
                h = {
                    table: "contact_sales",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        submission_data: r(759070).q.JSON,
                        created_time: r(759070).q.Number
                    },
                    requiredColumns: {
                        created_time: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                y = {
                    table: "cookie_consent",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        consent_id: r(759070).q.UUID,
                        update_time: r(759070).q.Number,
                        permission: r(759070).q.JSON,
                        document_version: r(759070).q.String
                    }
                },
                I = {
                    table: "device",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        created_at: r(759070).q.Number,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        device_name: r(759070).q.String,
                        device_os: r(759070).q.String,
                        os_version: r(759070).q.NumberArray,
                        device_platform: r(759070).q.String
                    },
                    model: (0, r(68291).P)({})
                };
            r(969475).literals("ios", "android", "mac", "windows", "chrome", "linux", "unknown"), r(969475).literals("react-native", "electron", "browser", "unknown");
            let S = {
                    table: "drive_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        notion_user_id: r(759070).q.UUID,
                        google_user_id: r(759070).q.String,
                        email: r(759070).q.String,
                        access_token: r(759070).q.String,
                        refresh_token: r(759070).q.String,
                        expires_at: r(759070).q.Number
                    }
                },
                U = {
                    table: "edge",
                    columnTypes: {
                        id: r(759070).q.String,
                        space_id: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        edge_type: r(759070).q.String,
                        source_table: r(759070).q.String,
                        source_id: r(759070).q.String,
                        target_table: r(759070).q.String,
                        target_id: r(759070).q.String,
                        alive: r(759070).q.Boolean,
                        order_key: r(759070).q.String,
                        metadata: r(759070).q.JSON,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number
                    },
                    requiredColumns: {
                        space_id: !0,
                        edge_type: !0,
                        source_table: !0,
                        source_id: !0,
                        target_table: !0,
                        target_id: !0,
                        alive: !0,
                        created_at: !0,
                        updated_at: !0
                    },
                    defaultColumnValues: {
                        alive: !0,
                        metadata: {}
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                N = {
                    table: "education_domain",
                    columnTypes: {
                        id: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        domain: r(759070).q.String,
                        activated_count: r(759070).q.Number
                    },
                    requiredColumns: {
                        domain: !0,
                        activated_count: !0
                    },
                    defaultColumnValues: {
                        activated_count: 0
                    }
                },
                D = {
                    table: "education_email",
                    columnTypes: {
                        id: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        email: r(759070).q.String,
                        activated: r(759070).q.Boolean
                    },
                    requiredColumns: {
                        email: !0,
                        activated: !0
                    },
                    defaultColumnValues: {
                        activated: !1
                    }
                },
                k = {
                    table: "evernote_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        account: r(759070).q.String,
                        request_token: r(759070).q.String,
                        request_secret: r(759070).q.String,
                        access_token: r(759070).q.String,
                        access_secret: r(759070).q.String,
                        created_time: r(759070).q.Number
                    }
                },
                O = {
                    table: "experiment",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        experiment_id: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        groups: r(759070).q.JSON,
                        overrides: r(759070).q.JSON,
                        experiment_version: r(759070).q.Number,
                        start_time: r(759070).q.Number,
                        end_time: r(759070).q.Number,
                        target_type: r(759070).q.String
                    }
                },
                x = {
                    table: "external_authentication",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        last_edited_time: r(759070).q.Number,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        integration_id: r(759070).q.UUID,
                        account_key: r(759070).q.String,
                        account_name: r(759070).q.String
                    },
                    model: (0, r(68291).P)({
                        clientRecordModel: !0
                    })
                },
                A = {
                    table: "external_authentication_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        access_token: r(759070).q.String,
                        refresh_token: r(759070).q.String,
                        bot_id: r(759070).q.String,
                        user_id: r(759070).q.String,
                        integration_id: r(759070).q.String,
                        space_id: r(759070).q.String,
                        expires_at: r(759070).q.Number
                    }
                },
                T = {
                    table: "external_entity",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        entity_type: r(759070).q.String,
                        external_identifier: r(759070).q.String,
                        external_display_name: r(759070).q.String,
                        metainfo: r(759070).q.JSON,
                        external_integration_id: r(759070).q.String,
                        bot_id: r(759070).q.String,
                        user_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        alive: r(759070).q.Boolean,
                        version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        created_by_table: r(759070).q.String,
                        created_by_id: r(759070).q.String,
                        updated_by_table: r(759070).q.String,
                        updated_by_id: r(759070).q.String,
                        external_workspace_id: r(759070).q.String
                    },
                    model: (0, r(68291).P)({
                        clientRecordModel: !0
                    })
                },
                P = {
                    table: "external_integration_app",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        client_id: r(759070).q.String,
                        client_secret: r(759070).q.String,
                        oauth_authorize_url: r(759070).q.String,
                        oauth_token_url: r(759070).q.String,
                        deletion_url: r(759070).q.String,
                        scopes: r(759070).q.StringArray,
                        internal_integration_id: r(759070).q.UUID,
                        alive: r(759070).q.Boolean,
                        version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        created_by_table: r(759070).q.String,
                        created_by_id: r(759070).q.UUID,
                        updated_by_table: r(759070).q.String,
                        updated_by_id: r(759070).q.UUID,
                        updated_at: r(759070).q.Number
                    },
                    model: (0, r(68291).P)({})
                },
                w = {
                    table: "external_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        external_entity_id: r(759070).q.UUID,
                        scopes: r(759070).q.StringArray,
                        auth_type: r(759070).q.String,
                        access_token: r(759070).q.String,
                        refresh_token: r(759070).q.String,
                        expires_at: r(759070).q.Number,
                        lock_status: r(759070).q.String,
                        alive: r(759070).q.Boolean,
                        version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        created_by_table: r(759070).q.String,
                        created_by_id: r(759070).q.UUID,
                        updated_by_table: r(759070).q.String,
                        updated_by_id: r(759070).q.UUID
                    },
                    model: (0, r(68291).P)({})
                },
                C = {
                    table: "external_user_profile",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        owner_id: r(759070).q.UUID,
                        owner_table: r(759070).q.String,
                        scim: r(759070).q.JSON,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        user_id: !0,
                        owner_id: !0,
                        owner_table: !0,
                        version: !0
                    }
                },
                B = {
                    table: "factory",
                    columnTypes: {
                        id: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        data: r(759070).q.JSON,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        space_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        created_by_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        last_edited_by_table: r(759070).q.String,
                        last_edited_by_id: r(759070).q.UUID,
                        last_edited_time: r(759070).q.Number,
                        alive: r(759070).q.Boolean,
                        permissions: r(759070).q.JSON
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        parent_id: !0,
                        parent_table: !0,
                        space_id: !0,
                        alive: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({
                        clientRecordModel: !0
                    })
                },
                R = {
                    table: "file_upload",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        alive: r(759070).q.Boolean,
                        status: r(759070).q.String,
                        filename: r(759070).q.String,
                        internal_file_id: r(759070).q.UUID,
                        content_type: r(759070).q.String,
                        content_length: r(759070).q.Number,
                        expiry_time: r(759070).q.Number,
                        upload_id: r(759070).q.String,
                        multipart_upload_etags: r(759070).q.JSON,
                        number_of_parts: r(759070).q.Number,
                        external_url: r(759070).q.String,
                        import_file_result: r(759070).q.JSON,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        updated_time: r(759070).q.Number
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                },
                M = {
                    table: "form_response_snapshot",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        form_data: r(759070).q.JSON,
                        form_id: r(759070).q.UUID,
                        form_version: r(759070).q.Number,
                        user_provided_email: r(759070).q.String,
                        user_id: r(759070).q.UUID,
                        secret_key: r(759070).q.String
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        space_id: !0,
                        created_time: !0,
                        form_data: !0,
                        form_id: !0,
                        form_version: !0,
                        secret_key: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                J = {
                    table: "free_chart",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        free_chart_view_ids: r(759070).q.UUIDArray
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        space_id: !0,
                        free_chart_view_ids: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                E = {
                    table: "geo_ip_location",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        geoname_id: r(759070).q.Number,
                        locale_code: r(759070).q.String,
                        continent_code: r(759070).q.String,
                        continent_name: r(759070).q.String,
                        country_iso_code: r(759070).q.String,
                        country_name: r(759070).q.String,
                        subdivision_1_iso_code: r(759070).q.String,
                        subdivision_1_name: r(759070).q.String,
                        subdivision_2_iso_code: r(759070).q.String,
                        subdivision_2_name: r(759070).q.String,
                        city_name: r(759070).q.String,
                        metro_code: r(759070).q.Number,
                        time_zone: r(759070).q.String,
                        is_in_european_union: r(759070).q.Boolean
                    }
                },
                F = {
                    table: "geo_ip_network",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        network: r(759070).q.String,
                        geoname_id: r(759070).q.Number,
                        registered_country_geoname_id: r(759070).q.Number,
                        represented_country_geoname_id: r(759070).q.Number,
                        is_anonymous_proxy: r(759070).q.Boolean,
                        is_satellite_provider: r(759070).q.Boolean,
                        postal_code: r(759070).q.String,
                        latitude: r(759070).q.Number,
                        longitude: r(759070).q.Number,
                        accuracy_radius: r(759070).q.Number
                    }
                },
                V = {
                    table: "github_student_pack_redemption",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        github_user_id: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        created_time: !0,
                        github_user_id: !0,
                        space_id: !0,
                        user_id: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                },
                W = {
                    table: "global_oauth_client",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        client_name: r(759070).q.String,
                        client_secret: r(759070).q.String,
                        default_scopes: r(759070).q.JSON,
                        redirect_uris: r(759070).q.StringArray,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        metadata: r(759070).q.JSON,
                        external_client_id: r(759070).q.String
                    },
                    model: (0, r(68291).P)({
                        clientRecordModel: !0
                    })
                },
                j = {
                    table: "google_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        token: r(759070).q.String,
                        google_user_id: r(759070).q.String
                    }
                },
                L = {
                    table: "inference_transcript",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        transcript: r(759070).q.JSON,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        space_id: r(759070).q.UUID,
                        data: r(759070).q.JSON,
                        created_by: r(759070).q.UUID,
                        created_at: r(759070).q.Number
                    },
                    requiredColumns: {
                        version: !0,
                        parent_id: !0,
                        parent_table: !0,
                        space_id: !0,
                        created_by: !0,
                        created_at: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                G = {
                    table: "integration_management_permissions",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        integration_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        last_update_time: r(759070).q.Number,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        admin_only: r(759070).q.Boolean,
                        mcp_config: r(759070).q.JSON
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                X = {
                    table: "integration_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        integration_id: r(759070).q.UUID,
                        created_at: r(759070).q.Number,
                        revoked_at: r(759070).q.Number,
                        token_hash: r(759070).q.String
                    }
                },
                H = {
                    table: "internal_domain",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        parent_id: r(759070).q.String,
                        parent_table: r(759070).q.UUID,
                        url: r(759070).q.String,
                        type: r(759070).q.String
                    },
                    requiredColumns: {
                        version: !0,
                        parent_id: !0,
                        parent_table: !0,
                        created_time: !0,
                        space_id: !0,
                        url: !0,
                        type: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                $ = {
                    table: "invoice",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        subscription_id: r(759070).q.UUID,
                        billing_data_id: r(759070).q.UUID,
                        external_id: r(759070).q.String,
                        external_url: r(759070).q.String,
                        status: r(759070).q.String,
                        created_at: r(759070).q.Number,
                        due_date: r(759070).q.Number,
                        overrides: r(759070).q.JSON,
                        payment_intent: r(759070).q.JSON,
                        external_subscription_id: r(759070).q.String
                    },
                    requiredColumns: {
                        version: !0,
                        billing_data_id: !0,
                        subscription_id: !0,
                        external_id: !0,
                        status: !0,
                        created_at: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({})
                },
                z = {
                    table: "ip_restriction",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        name: r(759070).q.String,
                        enabled: r(759070).q.Boolean,
                        ip_restriction_type: r(759070).q.String,
                        ip_addresses: r(759070).q.CIDRArray,
                        organization_id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        alive: r(759070).q.Boolean,
                        created_time: r(759070).q.Number,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        last_edited_time: r(759070).q.Number,
                        last_edited_by_id: r(759070).q.UUID,
                        last_edited_by_table: r(759070).q.String
                    },
                    requiredColumns: {
                        id: !0,
                        name: !0,
                        enabled: !0,
                        ip_restriction_type: !0,
                        ip_addresses: !0,
                        organization_id: !0,
                        version: !0,
                        alive: !0,
                        created_time: !0,
                        created_by_id: !0,
                        created_by_table: !0,
                        last_edited_time: !0,
                        last_edited_by_id: !0,
                        last_edited_by_table: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                K = {
                    table: "legal_hold_page",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        legal_hold_id: r(759070).q.UUID,
                        block_id: r(759070).q.UUID
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        space_id: !0,
                        legal_hold_id: !0,
                        block_id: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                },
                Q = {
                    table: "legal_hold_page_actor",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        legal_hold_page_id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        space_id: !0,
                        legal_hold_page_id: !0,
                        created_by_id: !0,
                        created_by_table: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                },
                Y = {
                    table: "legal_hold_user",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        legal_hold_id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        deleted_at_time: r(759070).q.Number,
                        deleted_by_id: r(759070).q.UUID,
                        deleted_by_table: r(759070).q.String
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        legal_hold_id: !0,
                        user_id: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                },
                Z = {
                    table: "marketplace_badge_assignment",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        badge_id: r(759070).q.UUID,
                        assignee_table: r(759070).q.String,
                        assignee_id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        last_updated_at: r(759070).q.Number,
                        last_synced_at: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        badge_id: !0,
                        assignee_table: !0,
                        assignee_id: !0,
                        version: !0,
                        created_at: !0,
                        last_updated_at: !0,
                        last_synced_at: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                ee = {
                    table: "marketplace_coupon",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        code: r(759070).q.String,
                        active: r(759070).q.Boolean,
                        discount: r(759070).q.JSON,
                        eligible_listing_ids: r(759070).q.UUIDArray,
                        coupon_usage: r(759070).q.JSON,
                        start_time: r(759070).q.Number,
                        end_time: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        updated_time: r(759070).q.Number,
                        created_by: r(759070).q.UUID,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        apply_to_all: r(759070).q.Boolean,
                        deleted_time: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        code: !0,
                        discount: !0,
                        coupon_usage: !0,
                        active: !0,
                        created_time: !0,
                        updated_time: !0,
                        created_by: !0,
                        apply_to_all: !0,
                        parent_id: !0,
                        parent_table: !0
                    },
                    defaultColumnValues: {
                        apply_to_all: !1
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                et = {
                    table: "marketplace_creator_balance_transaction",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        external_id: r(759070).q.String,
                        seller_id: r(759070).q.UUID,
                        seller_account_id: r(759070).q.String,
                        payout_id: r(759070).q.UUID,
                        acquisition_id: r(759070).q.UUID,
                        amount: r(759070).q.Number,
                        currency: r(759070).q.String,
                        exchange_rate: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        attributes: r(759070).q.JSON
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        external_id: !0,
                        seller_id: !0,
                        seller_account_id: !0,
                        acquisition_id: !0,
                        amount: !0,
                        currency: !0,
                        exchange_rate: !0,
                        created_time: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                },
                er = {
                    table: "marketplace_creator_stripe_balance_log",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        type: r(759070).q.String,
                        seller_id: r(759070).q.UUID,
                        foreign_table: r(759070).q.String,
                        foreign_id: r(759070).q.String,
                        amount: r(759070).q.Number,
                        currency: r(759070).q.String,
                        available_at: r(759070).q.Number,
                        archived: r(759070).q.Boolean,
                        attributes: r(759070).q.JSON
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        created_at: !0,
                        updated_at: !0,
                        type: !0,
                        seller_id: !0,
                        amount: !0,
                        currency: !0,
                        available_at: !0,
                        archived: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                },
                ei = {
                    table: "marketplace_custom_agent_version",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        last_edited_time: r(759070).q.Number,
                        attributes: r(759070).q.JSON,
                        status: r(759070).q.String,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.UUID,
                        profile_id: r(759070).q.UUID,
                        locale: r(759070).q.String,
                        source_workflow_id: r(759070).q.UUID,
                        source_workflow_space_id: r(759070).q.UUID,
                        published_workflow_id: r(759070).q.UUID,
                        published_workflow_space_id: r(759070).q.UUID,
                        title: r(759070).q.String,
                        slug: r(759070).q.String,
                        tags: r(759070).q.StringArray
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                en = {
                    table: "marketplace_customer",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        acquirer_table: r(759070).q.String,
                        acquirer_id: r(759070).q.String,
                        stripe_customer_id: r(759070).q.String,
                        created_time: r(759070).q.Number,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                ea = {
                    table: "marketplace_payout",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        external_id: r(759070).q.String,
                        seller_id: r(759070).q.UUID,
                        amount: r(759070).q.Number,
                        currency: r(759070).q.String,
                        paid_time: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        attributes: r(759070).q.JSON
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        seller_id: !0,
                        amount: !0,
                        currency: !0,
                        created_time: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                },
                eo = {
                    table: "marketplace_payout_remainder",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        amount: r(759070).q.Number,
                        currency: r(759070).q.String,
                        source_payout_id: r(759070).q.UUID,
                        settlement_payout_id: r(759070).q.UUID,
                        seller_id: r(759070).q.UUID,
                        seller_account_id: r(759070).q.String,
                        created_time: r(759070).q.Number,
                        attributes: r(759070).q.JSON
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        amount: !0,
                        currency: !0,
                        source_payout_id: !0,
                        seller_id: !0,
                        seller_account_id: !0,
                        created_time: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                },
                ed = {
                    table: "marketplace_profile_invitation",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        membership_type: r(759070).q.String,
                        status: r(759070).q.String,
                        invitee_id: r(759070).q.UUID,
                        created_at: r(759070).q.Number,
                        created_by: r(759070).q.UUID,
                        cancelled_at: r(759070).q.Number,
                        cancelled_by: r(759070).q.UUID,
                        rejected_at: r(759070).q.Number,
                        accepted_at: r(759070).q.Number,
                        attributes: r(759070).q.JSON,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        parent_id: !0,
                        parent_table: !0,
                        membership_type: !0,
                        status: !0,
                        invitee_id: !0,
                        created_at: !0,
                        created_by: !0,
                        version: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                es = {
                    table: "marketplace_seller",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.UUID,
                        stripe_connected_account_id: r(759070).q.String,
                        stripe_connect_onboarding_phase: r(759070).q.String,
                        webhook_config: r(759070).q.JSON,
                        created_time: r(759070).q.Number,
                        updated_time: r(759070).q.Number,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                el = {
                    table: "mfa_settings",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        created_at: r(759070).q.Number,
                        enabled: r(759070).q.Boolean,
                        is_primary: r(759070).q.Boolean,
                        method: r(759070).q.String,
                        setting: r(759070).q.JSON,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number
                    }
                };
            r(969475).literals("totp", "sms", "backup_code"), r(969475).literals("totp", "sms");
            let eu = r(969475).literals("bcrypt"),
                ec = r(969475).literals("crypto-service");
            r(969475).object({
                required: {
                    backup_codes: r(969475).array(r(969475).object({
                        required: {
                            codeHash: r(969475).string(),
                            hasBeenUsed: r(969475).boolean()
                        },
                        optional: {}
                    })),
                    hash_method: eu
                },
                optional: {
                    recovery: r(969475).boolean()
                }
            }), r(969475).object({
                required: {
                    phone_number: r(969475).string(),
                    masked_phone_number: r(969475).string()
                },
                optional: {}
            }), r(969475).object({
                required: {
                    totp_secret: r(969475).string(),
                    encryption_method: ec,
                    key_version: r(969475).string(),
                    friendly_name: r(969475).string()
                },
                optional: {}
            });
            let e_ = {
                    table: "monday_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        email: r(759070).q.String,
                        api_token: r(759070).q.String,
                        user_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID
                    }
                },
                ep = {
                    table: "oauth_authorization_code",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        redirect_uri: r(759070).q.String,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        bot_id: r(759070).q.UUID,
                        created_bot_token_id: r(759070).q.UUID,
                        revoked_at: r(759070).q.Number,
                        type: r(759070).q.String,
                        space_id: r(759070).q.UUID,
                        integration_id: r(759070).q.UUID,
                        optional_info: r(759070).q.JSON,
                        capabilities: r(759070).q.JSON
                    }
                },
                em = {
                    table: "offer_code",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        code: r(759070).q.String,
                        campaign: r(759070).q.String,
                        status: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        redeemed_by: r(759070).q.Blob
                    },
                    requiredColumns: {
                        code: !0,
                        campaign: !0,
                        status: !0,
                        version: !0,
                        redeemed_by: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                eq = {
                    table: "offer_status",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        physical_device_id: r(759070).q.String,
                        offer_code_id: r(759070).q.UUID,
                        type: r(759070).q.String,
                        start_date_ms: r(759070).q.Number,
                        end_date_ms: r(759070).q.Number,
                        entrypoint: r(759070).q.String,
                        offer: r(759070).q.Blob,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        last_edited_time: r(759070).q.Number
                    },
                    requiredColumns: {
                        space_id: !0,
                        user_id: !0,
                        type: !0,
                        start_date_ms: !0,
                        entrypoint: !0,
                        offer: !0,
                        version: !0,
                        created_time: !0,
                        last_edited_time: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                eb = {
                    table: r(832375).rfw,
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        created_time: r(759070).q.Number,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        last_edited_time: r(759070).q.Number,
                        last_edited_by_id: r(759070).q.UUID,
                        last_edited_by_table: r(759070).q.String,
                        alive: r(759070).q.Boolean,
                        integration_id: r(759070).q.UUID,
                        scopes: r(759070).q.JSON,
                        name: r(759070).q.String
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        parent_id: !0,
                        parent_table: !0,
                        created_time: !0,
                        created_by_id: !0,
                        created_by_table: !0,
                        alive: !0,
                        scopes: !0,
                        last_edited_time: !0,
                        last_edited_by_id: !0,
                        last_edited_by_table: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                eg = {
                    table: r(832375).GY9,
                    columnTypes: {
                        id: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        bot_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        revoked_at: r(759070).q.Number,
                        secret: r(759070).q.String,
                        secret_hash: r(759070).q.String,
                        key_id: r(759070).q.String,
                        refresh_token: r(759070).q.String,
                        refresh_token_hash: r(759070).q.String
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        bot_id: !0,
                        created_time: !0,
                        secret: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({})
                },
                ef = {
                    table: "organization_request",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        organization_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        type: r(759070).q.String,
                        status: r(759070).q.String,
                        previous_request_id: r(759070).q.UUID,
                        properties: r(759070).q.JSON,
                        requested_by_id: r(759070).q.UUID,
                        requested_by_table: r(759070).q.String,
                        created_time: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        organization_id: !0,
                        type: !0,
                        status: !0,
                        requested_by_id: !0,
                        requested_by_table: !0,
                        created_time: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                ev = {
                    table: "organization_space",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        organization_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        alive: r(759070).q.Boolean
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        organization_id: !0,
                        space_id: !0,
                        alive: !0
                    },
                    model: (0, r(68291).P)({
                        clientRecordModel: !0
                    })
                },
                eh = {
                    table: "page_exit",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        exited_at: r(759070).q.Number,
                        space_id: r(759070).q.UUID
                    },
                    requiredColumns: {
                        parent_table: !0,
                        parent_id: !0,
                        user_id: !0,
                        exited_at: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                };
            r(969475).literals("direct", "indirect", "enterprise", "none"), r(969475).literals("ble", "cable", "hybrid", "internal", "nfc", "smart-card", "usb");
            let ey = {
                    table: "passkey_authenticator",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        credential_id: r(759070).q.Blob,
                        public_key: r(759070).q.Blob,
                        authenticator_name: r(759070).q.String,
                        signature_count: r(759070).q.Number,
                        aaguid: r(759070).q.String,
                        authenticator_attestation_type: r(759070).q.String,
                        transports: r(759070).q.StringArray,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        last_used_at: r(759070).q.Number,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        authenticator_signature: r(759070).q.String,
                        rp_id: r(759070).q.String
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                eI = {
                    table: "password",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        password_hash: r(759070).q.String
                    }
                },
                eS = {
                    table: "plus_lock_waitlist",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        opted_in_at: r(759070).q.Number,
                        opted_in_by_id: r(759070).q.UUID,
                        opted_in_by_table: r(759070).q.String,
                        metadata: r(759070).q.JSON
                    },
                    requiredColumns: {
                        version: !0,
                        space_id: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                eU = {
                    table: "prompt_usage",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        user_id: r(759070).q.UUID,
                        prompt_block_id: r(759070).q.UUID,
                        usage_count: r(759070).q.Number,
                        last_used_time: r(759070).q.Number,
                        metadata: r(759070).q.JSON
                    },
                    requiredColumns: {
                        id: !0,
                        space_id: !0,
                        version: !0,
                        created_time: !0,
                        user_id: !0,
                        prompt_block_id: !0,
                        usage_count: !0,
                        last_used_time: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                eN = {
                    table: "public_email_domain",
                    columnTypes: {
                        id: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        domain: r(759070).q.String
                    },
                    requiredColumns: {
                        domain: !0
                    }
                };
            r(898992), r(354520);
            let eD = {
                    table: "record_mention",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        type: r(759070).q.String,
                        space_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.UUID,
                        parent_property_id: r(759070).q.String,
                        mentioned_space_id: r(759070).q.UUID,
                        mentioned_table: r(759070).q.String,
                        mentioned_id: r(759070).q.UUID,
                        mentioned_property_id: r(759070).q.UUID
                    },
                    requiredColumns: {
                        type: !0,
                        space_id: !0,
                        parent_table: !0,
                        parent_id: !0,
                        mentioned_table: !0,
                        mentioned_id: !0
                    },
                    model: (0, r(68291).P)({})
                },
                ek = {
                    table: "referral",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        created_at: r(759070).q.Number,
                        referral_code: r(759070).q.String,
                        referral_program: r(759070).q.String
                    },
                    requiredColumns: {
                        space_id: !0,
                        created_at: !0,
                        referral_code: !0,
                        referral_program: !0
                    },
                    model: (0, r(68291).P)({})
                },
                eO = {
                    table: "related_content",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.String,
                        relationship: r(759070).q.String,
                        related_content: r(759070).q.JSON,
                        updated_time: r(759070).q.Number,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID
                    },
                    requiredColumns: {
                        version: !0,
                        parent_table: !0,
                        parent_id: !0,
                        relationship: !0,
                        related_content: !0,
                        updated_time: !0,
                        space_id: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                ex = {
                    table: "scheduled_digest_message",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        scheduling_key: r(759070).q.String,
                        content_module_requests: r(759070).q.JSON,
                        created_time: r(759070).q.Number,
                        updated_time: r(759070).q.Number,
                        version: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        user_id: !0,
                        space_id: !0,
                        scheduling_key: !0,
                        content_module_requests: !0,
                        created_time: !0,
                        updated_time: !0,
                        version: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                };
            (0, r(477465).Dv)("adminResetBotRateLimit"), (0, r(477465).Dv)("autoConvertStackedTrial"), (0, r(477465).Dv)("completeSprint"), (0, r(477465).Dv)("noop"), (0, r(477465).Dv)("recurrenceTask"), (0, r(477465).Dv)("sendNboMessage"), (0, r(477465).Dv)("sendReminder"), (0, r(477465).Dv)("workflowRecurrenceTrigger");
            let eA = {
                    table: "schedule_for_event",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        created_time: r(759070).q.Number,
                        status: r(759070).q.String,
                        app_name: r(759070).q.String,
                        recurrence: r(759070).q.JSON,
                        next_run_time: r(759070).q.Number,
                        flexible_window_in_minutes: r(759070).q.Number,
                        event_type: r(759070).q.String,
                        payload: r(759070).q.JSON,
                        deterministic_id: r(759070).q.String,
                        max_schedule_ahead_time: r(759070).q.Number,
                        disable_for_migration: r(759070).q.Boolean
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        space_id: !0,
                        created_by_id: !0,
                        created_by_table: !0,
                        created_time: !0,
                        status: !0,
                        app_name: !0,
                        recurrence: !0,
                        event_type: !0,
                        payload: !0,
                        disable_for_migration: !0,
                        max_schedule_ahead_time: !0
                    },
                    defaultColumnValues: {
                        status: "scheduled",
                        max_schedule_ahead_time: 15,
                        disable_for_migration: !1
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                eT = {
                    table: "server_integrations__discord_user_mapping",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        notion_user_id: r(759070).q.UUID,
                        notion_space_id: r(759070).q.UUID,
                        discord_user_id: r(759070).q.String,
                        discord_server_id: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        discord_user_id: !0,
                        discord_server_id: !0,
                        version: !0,
                        created_at: !0,
                        updated_at: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                eP = {
                    table: "server_integrations__github_installation",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        bot_id: r(759070).q.UUID,
                        installation_id: r(759070).q.String,
                        space_id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number
                    }
                },
                ew = {
                    table: "server_integrations__jira_webhook",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        bot_id: r(759070).q.UUID,
                        webhook_id: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        user_id: r(759070).q.UUID,
                        site: r(759070).q.String,
                        webhook_details: r(759070).q.JSON,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number
                    }
                },
                eC = {
                    table: "server_integrations__slack_bot_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        access_token: r(759070).q.String,
                        scopes: r(759070).q.StringArray,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.String
                    },
                    model: (0, r(68291).P)({})
                },
                eB = {
                    table: "server_integrations__slack_channel",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        slack_channel_id: r(759070).q.String,
                        slack_workspace_id: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        preferences: r(759070).q.JSON
                    }
                },
                eR = {
                    table: "server_integrations__slack_notion_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        slack_unique_global_user_id: r(759070).q.UUID,
                        access_token: r(759070).q.String,
                        notion_workspace_id: r(759070).q.String,
                        alive: r(759070).q.Boolean,
                        notion_bot_id: r(759070).q.UUID
                    }
                },
                eM = {
                    table: "server_integrations__slack_unique_global_user",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        slack_global_user_id: r(759070).q.String,
                        slack_enterprise_id: r(759070).q.String,
                        preferences: r(759070).q.JSON
                    }
                },
                eJ = {
                    table: "server_integrations__slack_unique_local_user",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        slack_workspace_id: r(759070).q.String,
                        slack_local_user_id: r(759070).q.String,
                        slack_unique_global_user_id: r(759070).q.UUID
                    }
                },
                eE = {
                    table: "server_integrations__zendesk_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        bot_id: r(759070).q.UUID,
                        zendesk_access_token: r(759070).q.String,
                        notion_access_token: r(759070).q.String,
                        zendesk_sub_domain: r(759070).q.String,
                        zendesk_user_id: r(759070).q.Number,
                        notion_proxy_token: r(759070).q.String,
                        space_id: r(759070).q.UUID,
                        refresh_token: r(759070).q.String,
                        expires_in: r(759070).q.Number,
                        refresh_token_expires_in: r(759070).q.Number,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number
                    }
                },
                eF = {
                    table: "signup_tracking",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        email: r(759070).q.String,
                        variant: r(759070).q.String,
                        temporary_password: r(759070).q.String,
                        csrf_token: r(759070).q.String,
                        attribution_data: r(759070).q.JSON,
                        created_at: r(759070).q.Number,
                        user_id: r(759070).q.UUID,
                        link_opened: r(759070).q.Boolean,
                        link_opened_at: r(759070).q.Number
                    }
                },
                eV = {
                    table: "slack_integration",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        team_name: r(759070).q.String,
                        channel: r(759070).q.String,
                        channel_id: r(759070).q.String,
                        configuration_url: r(759070).q.String,
                        webhook_url: r(759070).q.String,
                        enabled: r(759070).q.Boolean,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        channel_locale: r(759070).q.String
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                eW = {
                    table: "slack_notification",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        sent: r(759070).q.Boolean
                    }
                },
                ej = {
                    table: "snapshot",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_table: r(759070).q.String,
                        parent_id: r(759070).q.UUID,
                        collection_ids: r(759070).q.UUIDArray,
                        inline_collection_block_ids: r(759070).q.UUIDArray,
                        timestamp: r(759070).q.String,
                        authors: r(759070).q.JSON,
                        space_id: r(759070).q.UUID,
                        key_schema_version: r(759070).q.String
                    },
                    model: (0, r(68291).P)({})
                },
                eL = {
                    table: "space_billing_data",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        updated_time: r(759070).q.Number,
                        external_id: r(759070).q.String,
                        provider: r(759070).q.String,
                        clock: r(759070).q.JSON,
                        trial: r(759070).q.JSON,
                        email: r(759070).q.String,
                        address: r(759070).q.JSON,
                        payment_method: r(759070).q.JSON,
                        locked_currency_code: r(759070).q.String,
                        tax_ids: r(759070).q.JSON,
                        account_balances: r(759070).q.JSON,
                        has_paid_nonzero: r(759070).q.Boolean
                    },
                    requiredColumns: {
                        version: !0,
                        space_id: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({})
                },
                eG = {
                    table: "space_billing_invoices",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        updated_time: r(759070).q.Number,
                        billing_data_id: r(759070).q.UUID,
                        subscription_id: r(759070).q.UUID,
                        external_id: r(759070).q.String,
                        external_url: r(759070).q.String,
                        status: r(759070).q.String,
                        created_at: r(759070).q.Number,
                        due_date: r(759070).q.Number,
                        overrides: r(759070).q.JSON,
                        payment_intent: r(759070).q.JSON,
                        external_subscription_id: r(759070).q.String,
                        amount_due: r(759070).q.Number,
                        amount_paid: r(759070).q.Number,
                        currency: r(759070).q.String,
                        line_items: r(759070).q.JSON
                    },
                    requiredColumns: {
                        version: !0,
                        space_id: !0,
                        billing_data_id: !0,
                        external_id: !0,
                        status: !0,
                        created_at: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({})
                },
                eX = {
                    table: "space_billing_subscription",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        billing_data_id: r(759070).q.UUID,
                        external_id: r(759070).q.String,
                        status: r(759070).q.String,
                        provider: r(759070).q.String,
                        start_date: r(759070).q.Number,
                        trial_end: r(759070).q.Number,
                        current_period_end: r(759070).q.Number,
                        items: r(759070).q.JSON,
                        created_time: r(759070).q.Number,
                        updated_time: r(759070).q.Number,
                        pending: r(759070).q.JSON,
                        pending_phases: r(759070).q.JSON,
                        unrepresentable_reason: r(759070).q.String
                    },
                    requiredColumns: {
                        version: !0,
                        space_id: !0,
                        billing_data_id: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({})
                },
                eH = {
                    table: "space_content_duplication_lookup",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        source_space_id: r(759070).q.UUID,
                        target_space_id: r(759070).q.UUID,
                        source_id: r(759070).q.UUID,
                        source_type: r(759070).q.String,
                        target_id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_time: r(759070).q.Number
                    },
                    model: (0, r(68291).P)({
                        properties: {
                            source_id: {
                                getRelationalPointerMethod: !1
                            },
                            target_id: {
                                getRelationalPointerMethod: !1
                            }
                        }
                    })
                },
                e$ = {
                    table: "space_domain",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        domain: r(759070).q.String,
                        is_autogenerated: r(759070).q.Boolean
                    }
                },
                ez = {
                    table: "space_email_domain",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_created_by_id: r(759070).q.UUID,
                        space_created_by_table: r(759070).q.String,
                        space_created_by_email_domain: r(759070).q.String
                    },
                    model: (0, r(68291).P)({
                        properties: {
                            space_created_by_id: {
                                getRelationalPointerMethod: !1
                            }
                        }
                    })
                },
                eK = {
                    table: "space_invite_link",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.String,
                        invite_link_code: r(759070).q.String,
                        inviter_user_id: r(759070).q.UUID,
                        channel: r(759070).q.String
                    },
                    requiredColumns: {
                        space_id: !0,
                        invite_link_code: !0,
                        inviter_user_id: !0,
                        channel: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                eQ = {
                    table: "space_membership_update",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        created_at: r(759070).q.Number,
                        is_processed: r(759070).q.Boolean,
                        attributes: r(759070).q.JSON,
                        effective_time: r(759070).q.Number,
                        processed_time: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        space_id: !0,
                        created_at: !0,
                        is_processed: !0,
                        effective_time: !0
                    },
                    model: (0, r(68291).P)({})
                },
                eY = {
                    table: "space_recover_pages",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        user_id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        pages: r(759070).q.StringArray,
                        workflows: r(759070).q.StringArray,
                        created_time: r(759070).q.Number,
                        last_edited_time: r(759070).q.Number
                    }
                },
                eZ = {
                    table: "space_user_entitlement_usage",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        type: r(759070).q.String,
                        usage: r(759070).q.Number,
                        unit: r(759070).q.String
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        created_at: !0,
                        updated_at: !0,
                        space_id: !0,
                        user_id: !0,
                        type: !0,
                        usage: !0,
                        unit: !0
                    },
                    model: (0, r(68291).P)({})
                },
                e0 = {
                    table: "space_user_recovery",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        created_time: r(759070).q.Number,
                        type: r(759070).q.String,
                        block_id: r(759070).q.UUID,
                        team_id: r(759070).q.UUID,
                        permission_group_id: r(759070).q.UUID,
                        permission_role: r(759070).q.String,
                        membership_type: r(759070).q.String,
                        restored_time: r(759070).q.Number,
                        restored_by_id: r(759070).q.UUID,
                        restored_by_table: r(759070).q.String
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        created_time: !0,
                        space_id: !0,
                        user_id: !0,
                        type: !0
                    },
                    model: (0, r(68291).P)({})
                },
                e7 = {
                    table: "subscription",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        provider: r(759070).q.String,
                        api_version: r(759070).q.String,
                        product: r(759070).q.String,
                        expires_at: r(759070).q.Number,
                        data: r(759070).q.JSON,
                        updated_at: r(759070).q.Number,
                        write_id: r(759070).q.UUID
                    },
                    requiredColumns: {
                        space_id: !0,
                        provider: !0,
                        data: !0,
                        updated_at: !0
                    }
                },
                e5 = {
                    table: "subscription_banner",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        banner_type: r(759070).q.String,
                        banner_key: r(759070).q.String,
                        audience: r(759070).q.String,
                        banner_text: r(759070).q.String,
                        active_at: r(759070).q.Number,
                        expired_at: r(759070).q.Number
                    },
                    requiredColumns: {
                        space_id: !0,
                        version: !0,
                        parent_id: !0,
                        parent_table: !0,
                        banner_type: !0,
                        banner_key: !0,
                        audience: !0,
                        active_at: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                e3 = {
                    table: "sync",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        credential_id: r(759070).q.UUID,
                        source_key: r(759070).q.String,
                        resources: r(759070).q.JSON,
                        destination_mapping: r(759070).q.JSON,
                        schedule: r(759070).q.JSON,
                        rate_limit: r(759070).q.JSON,
                        concurrency_limit: r(759070).q.Number,
                        max_age_days: r(759070).q.Number,
                        config: r(759070).q.JSON,
                        disabled: r(759070).q.Boolean,
                        created_time: r(759070).q.Number,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        last_edited_time: r(759070).q.Number,
                        last_edited_by_id: r(759070).q.UUID,
                        last_edited_by_table: r(759070).q.String
                    },
                    model: (0, r(68291).P)({})
                },
                e9 = {
                    table: "sync_credential",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        provider: r(759070).q.String,
                        payload: r(759070).q.JSON,
                        display_name: r(759070).q.String,
                        created_time: r(759070).q.Number,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        last_edited_time: r(759070).q.Number,
                        last_edited_by_id: r(759070).q.UUID,
                        last_edited_by_table: r(759070).q.String
                    },
                    model: (0, r(68291).P)({})
                },
                e2 = {
                    table: "sync_upstream_resource",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        credential_id: r(759070).q.UUID,
                        upstream_id: r(759070).q.String,
                        display_name: r(759070).q.String,
                        metadata: r(759070).q.JSON,
                        schema: r(759070).q.JSON,
                        cached_at: r(759070).q.Number,
                        created_time: r(759070).q.Number,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String
                    },
                    model: (0, r(68291).P)({})
                },
                e8 = {
                    table: "synthetic_trial",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        start_date: r(759070).q.Number,
                        end_date: r(759070).q.Number,
                        converted_date: r(759070).q.Number,
                        canceled_date: r(759070).q.Number,
                        offer_campaign: r(759070).q.String,
                        auto_convert: r(759070).q.Boolean,
                        items: r(759070).q.JSON
                    },
                    requiredColumns: {
                        space_id: !0,
                        start_date: !0,
                        end_date: !0,
                        auto_convert: !0,
                        items: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                e1 = {
                    table: "template_collection",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        contentful_id: r(759070).q.String,
                        name: r(759070).q.String,
                        slug: r(759070).q.String,
                        authors: r(759070).q.StringArray,
                        locale: r(759070).q.String,
                        templates: r(759070).q.StringArray,
                        description: r(759070).q.String,
                        long_description: r(759070).q.String,
                        collection_body: r(759070).q.JSON,
                        meta_title: r(759070).q.String,
                        meta_description: r(759070).q.String,
                        last_version: r(759070).q.Number,
                        published_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        last_updated_at: r(759070).q.Number,
                        last_synced_at: r(759070).q.Number,
                        published_at: r(759070).q.Number,
                        attributes: r(759070).q.JSON,
                        display_in_app: r(759070).q.Boolean,
                        contents: r(759070).q.JSON
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        contentful_id: !0,
                        name: !0,
                        slug: !0,
                        authors: !0,
                        locale: !0,
                        templates: !0,
                        description: !0,
                        long_description: !0,
                        meta_title: !0,
                        meta_description: !0,
                        published_version: !0,
                        created_at: !0,
                        last_updated_at: !0,
                        last_synced_at: !0,
                        published_at: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                e4 = {
                    table: "template_content_group",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        contentful_id: r(759070).q.String,
                        title: r(759070).q.String,
                        contents: r(759070).q.JSON,
                        published_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        last_updated_at: r(759070).q.Number,
                        last_synced_at: r(759070).q.Number,
                        locale: r(759070).q.String,
                        category_id: r(759070).q.String,
                        is_editorial: r(759070).q.Boolean,
                        editorial_attributes: r(759070).q.JSON
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        contentful_id: !0,
                        title: !0,
                        contents: !0,
                        published_version: !0,
                        created_at: !0,
                        last_updated_at: !0,
                        last_synced_at: !0,
                        locale: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                e6 = {
                    table: "template_tag",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        contentful_id: r(759070).q.String,
                        name: r(759070).q.String,
                        slug: r(759070).q.String,
                        locale: r(759070).q.String,
                        description: r(759070).q.String,
                        contentful_parent_id: r(759070).q.String,
                        icon: r(759070).q.JSON,
                        published_version: r(759070).q.Number,
                        created_at: r(759070).q.Number,
                        last_updated_at: r(759070).q.Number,
                        last_synced_at: r(759070).q.Number,
                        subcategory_contentful_ids: r(759070).q.StringArray,
                        featured_template_contentful_ids: r(759070).q.StringArray,
                        attributes: r(759070).q.JSON,
                        number_of_templates: r(759070).q.Number,
                        template_image: r(759070).q.JSON,
                        score_1: r(759070).q.Number,
                        score_2: r(759070).q.Number,
                        score_3: r(759070).q.Number,
                        score_4: r(759070).q.Number,
                        score_5: r(759070).q.Number,
                        subcategory_contentful_ids_v2: r(759070).q.StringArray,
                        hide_in_web_gallery: r(759070).q.Boolean,
                        show_in_app: r(759070).q.Boolean,
                        number_of_templates_v2: r(759070).q.Number
                    },
                    requiredColumns: {
                        id: !0,
                        version: !0,
                        contentful_id: !0,
                        name: !0,
                        slug: !0,
                        locale: !0,
                        description: !0,
                        icon: !0,
                        published_version: !0,
                        created_at: !0,
                        last_updated_at: !0,
                        last_synced_at: !0,
                        attributes: !0,
                        number_of_templates: !0,
                        score_1: !0,
                        score_2: !0,
                        score_3: !0,
                        score_4: !0,
                        score_5: !0,
                        hide_in_web_gallery: !0,
                        show_in_app: !0,
                        number_of_templates_v2: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                te = {
                    table: "temporary_password",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        password: r(759070).q.String,
                        timestamp: r(759070).q.Number,
                        use_case: r(759070).q.String,
                        saml_config_id: r(759070).q.UUID,
                        challenge_token: r(759070).q.String
                    }
                },
                tt = {
                    table: "trello_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        account: r(759070).q.String,
                        request_token: r(759070).q.String,
                        request_secret: r(759070).q.String,
                        access_token: r(759070).q.String,
                        access_secret: r(759070).q.String
                    }
                },
                tr = {
                    table: "trusted_domain",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        space_id: r(759070).q.UUID,
                        email_domain: r(759070).q.String,
                        domain_link_sharing_enabled: r(759070).q.Boolean,
                        join_space_method: r(759070).q.String,
                        request_membership_customization_redirect_url: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                ti = {
                    table: "used_credit",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        amount: r(759070).q.Number
                    }
                },
                tn = {
                    table: "user_data_consent_permissions",
                    columnTypes: {
                        id: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        expiry_time: r(759070).q.Number
                    }
                },
                ta = {
                    table: "user_device",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        user_id: r(759070).q.UUID,
                        device_id: r(759070).q.UUID,
                        token_id: r(759070).q.UUID,
                        created_at: r(759070).q.Number,
                        last_login_at: r(759070).q.Number,
                        last_login_ip_address: r(759070).q.String,
                        last_login_geographic_location: r(759070).q.String,
                        last_seen_time: r(759070).q.Number,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        revoked: r(759070).q.Boolean
                    },
                    model: (0, r(68291).P)({
                        clientRecordModel: !0
                    })
                };
            r(969475).literals("member_list", "space", "block", "space_analytics_search", "space_analytics_content", "space_analytics_users", "admin_content_search", "audit_log", "post_workspace_consolidation_report", "domain_claimable_spaces", "marketplace_purchases", "legal_hold_content_summary", "legal_hold_content", "space_ai_analytics_top_pages", "space_ai_analytics_users", "space_ai_analytics_workflows");
            let to = {
                    table: "user_export",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        created_at: r(759070).q.Number,
                        created_by_table: r(759070).q.String,
                        created_by_id: r(759070).q.UUID,
                        file_ids: r(759070).q.StringArray,
                        type: r(759070).q.String,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        s3_bucket: r(759070).q.String
                    },
                    model: (0, r(68291).P)({
                        properties: {
                            created_by_id: {
                                getRelationalPointerMethod: !1
                            }
                        }
                    })
                },
                td = {
                    table: "user_metadata",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        metadata: r(759070).q.JSON,
                        updated_at: r(759070).q.Number
                    }
                },
                ts = {
                    table: "user_oauth_access_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        access_token: r(759070).q.String,
                        user_id: r(759070).q.UUID,
                        client_id: r(759070).q.UUID,
                        created_at: r(759070).q.Number,
                        revoked_at: r(759070).q.Number,
                        expires_at: r(759070).q.Number
                    },
                    model: (0, r(68291).P)({})
                },
                tl = {
                    table: "user_oauth_authorization_code",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        user_id: r(759070).q.UUID,
                        client_id: r(759070).q.UUID,
                        created_at: r(759070).q.Number,
                        expires_at: r(759070).q.Number,
                        revoked_at: r(759070).q.Number
                    },
                    model: (0, r(68291).P)({})
                },
                tu = {
                    table: "user_session_auth_token",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        expires_at: r(759070).q.Number,
                        cookies: r(759070).q.JSON,
                        source_type: r(759070).q.String
                    }
                },
                tc = {
                    table: "workflow_external_connection",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        created_time: r(759070).q.Number,
                        module_type: r(759070).q.String,
                        external_id: r(759070).q.String,
                        name: r(759070).q.String,
                        description: r(759070).q.String,
                        data: r(759070).q.JSON
                    },
                    requiredColumns: {
                        space_id: !0,
                        version: !0,
                        parent_id: !0,
                        parent_table: !0,
                        created_by_id: !0,
                        created_by_table: !0,
                        created_time: !0,
                        module_type: !0,
                        data: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({
                        clientRecordModel: !0
                    })
                },
                t_ = {
                    table: "workflow_external_connection_secret",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        workflow_external_connection_id: r(759070).q.UUID,
                        secret: r(759070).q.String,
                        secret_hash: r(759070).q.String
                    },
                    requiredColumns: {
                        workflow_external_connection_id: !0,
                        version: !0,
                        secret: !0,
                        secret_hash: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({})
                },
                tp = {
                    table: "workflow_property_edit_attribution",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        alive: r(759070).q.Boolean,
                        space_id: r(759070).q.UUID,
                        block_id: r(759070).q.UUID,
                        property_id: r(759070).q.String,
                        created_time: r(759070).q.Number,
                        created_by_id: r(759070).q.UUID,
                        created_by_table: r(759070).q.String,
                        last_edited_time: r(759070).q.Number,
                        last_edited_by_id: r(759070).q.UUID,
                        last_edited_by_table: r(759070).q.String
                    },
                    requiredColumns: {
                        version: !0,
                        space_id: !0,
                        block_id: !0,
                        property_id: !0,
                        created_time: !0,
                        created_by_id: !0,
                        created_by_table: !0,
                        last_edited_time: !0,
                        last_edited_by_id: !0,
                        last_edited_by_table: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                tm = {
                    table: "workflow_subscription",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        data: r(759070).q.JSON
                    },
                    requiredColumns: {
                        version: !0,
                        data: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({})
                },
                tq = {
                    table: "workflow_transcript",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        parent_id: r(759070).q.UUID,
                        parent_table: r(759070).q.String,
                        space_id: r(759070).q.UUID,
                        data: r(759070).q.JSON,
                        created_at: r(759070).q.Number
                    },
                    requiredColumns: {
                        version: !0,
                        parent_id: !0,
                        parent_table: !0,
                        space_id: !0,
                        created_at: !0
                    },
                    defaultColumnValues: {},
                    model: (0, r(68291).P)({
                        RecordStore: !0
                    })
                },
                tb = {
                    table: "workspace_encryption_key",
                    columnTypes: {
                        id: r(759070).q.UUID,
                        version: r(759070).q.Number,
                        last_version: r(759070).q.Number,
                        space_id: r(759070).q.UUID,
                        encrypted_key_blob: r(759070).q.String,
                        customer_kms_arn: r(759070).q.String,
                        created_at: r(759070).q.Number,
                        updated_at: r(759070).q.Number,
                        revoked_at: r(759070).q.Number
                    },
                    requiredColumns: {
                        version: !0,
                        space_id: !0,
                        encrypted_key_blob: !0,
                        customer_kms_arn: !0,
                        created_at: !0,
                        updated_at: !0
                    },
                    model: (0, r(68291).P)({
                        RecordStore: !1
                    })
                },
                tg = {
                    [r(832375).Oa6]: r(226962).NP,
                    [r(832375).kzt]: r(98120).L4,
                    [r(832375).eBi]: i,
                    [r(832375).jft]: n,
                    [r(832375).KNP]: r(929248).tO,
                    [r(832375).l1b]: a,
                    [r(832375).Wdc]: o,
                    [r(832375).y$R]: d,
                    [r(832375).Wuo]: s,
                    [r(832375).cKY]: l,
                    [r(832375).TFd]: r(395911).wD,
                    [r(832375).Nm7]: u,
                    [r(832375).YVp]: r(211434).J,
                    [r(832375).yBS]: r(199850).PX,
                    [r(832375).SC1]: r(901144).Rn,
                    [r(832375).OfD]: c,
                    [r(832375).Ok8]: _,
                    [r(832375).kf7]: p,
                    [r(832375).k$w]: m,
                    [r(832375).hrX]: q,
                    [r(832375).evP]: r(682956).bP,
                    [r(832375).ukB]: r(601088).f4,
                    [r(832375).H3H]: b,
                    [r(832375).GPl]: r(890920).Xx,
                    [r(832375).qPS]: g,
                    [r(832375).hGr]: f,
                    [r(832375).qmW]: r(420582).V,
                    [r(832375).VlP]: r(46241).E,
                    [r(832375).BiG]: r(611971).SA,
                    [r(832375).Gy1]: r(435544).P,
                    [r(832375).SNf]: r(685136).NM,
                    [r(832375)._0W]: v,
                    [r(832375).rqL]: h,
                    [r(832375).$XM]: y,
                    [r(832375).eUD]: r(114400).fu,
                    [r(832375).e4Z]: r(996034).n,
                    [r(832375).$2J]: r(126365).MK,
                    [r(832375).r1d]: I,
                    [r(832375).$YH]: r(609277).Sh,
                    [r(832375).HxG]: r(426723).Ss,
                    [r(832375).m2N]: S,
                    [r(832375).ITT]: U,
                    [r(832375).$kK]: N,
                    [r(832375).vjA]: D,
                    [r(832375).XHn]: r(281825).iA,
                    [r(832375).gEh]: k,
                    [r(832375).adQ]: O,
                    [r(832375).AsL]: x,
                    [r(832375).hWt]: A,
                    [r(832375).Klg]: r(53234).D,
                    [r(832375).$MF]: T,
                    [r(832375).HBA]: P,
                    [r(832375).PsW]: r(121325).ap,
                    [r(832375).rGg]: r(575201).MO,
                    [r(832375).DHr]: w,
                    [r(832375).kMj]: C,
                    [r(832375).jsQ]: B,
                    [r(832375).OjI]: R,
                    [r(832375).T2]: r(972075).Gb,
                    [r(832375).Cy3]: r(731747).ry,
                    [r(832375).lo9]: r(15883).m,
                    [r(832375).iEO]: M,
                    [r(832375).joQ]: J,
                    [r(832375).W8A]: E,
                    [r(832375).hyq]: F,
                    [r(832375).hxQ]: V,
                    [r(832375).Wnz]: W,
                    [r(832375).$$c]: j,
                    [r(832375).yDO]: L,
                    [r(832375).Lij]: r(720871).Kj,
                    [r(832375).bhs]: r(968591).o,
                    [r(832375).SBl]: G,
                    [r(832375).Q4N]: X,
                    [r(832375).bnG]: r(40819).kR,
                    [r(832375).CEK]: H,
                    [r(832375).Yxt]: r(434652).lH,
                    [r(832375).Yxw]: $,
                    [r(832375).aFA]: z,
                    [r(832375).zx0]: r(322683).oJ,
                    [r(832375).PXw]: r(306041)._8,
                    [r(832375).dPx]: r(936183).Qg,
                    [r(832375).ozN]: K,
                    [r(832375).nYQ]: Q,
                    [r(832375).IF6]: Y,
                    [r(832375).HtE]: r(600243).mo,
                    [r(832375).jvE]: r(161791).w9,
                    [r(832375).uLb]: Z,
                    [r(832375).QOF]: ee,
                    [r(832375).KcW]: et,
                    [r(832375).pEW]: er,
                    [r(832375).yAZ]: r(446004).b,
                    [r(832375).a8w]: ei,
                    [r(832375).KqJ]: en,
                    [r(832375)._ig]: r(252822).be,
                    [r(832375).ULG]: r(682880).Tw,
                    [r(832375).UNl]: r(295180).dF,
                    [r(832375).EgT]: ea,
                    [r(832375).ziV]: eo,
                    [r(832375).V1v]: r(238793).IO,
                    [r(832375).qtq]: r(698052).fZ,
                    [r(832375).qrH]: ed,
                    [r(832375).lMK]: r(784483).Ci,
                    [r(832375).enP]: r(552932).L7,
                    [r(832375).XXy]: es,
                    [r(832375).J6M]: r(94243).O_,
                    [r(832375).OCn]: r(985886).JR,
                    [r(832375).SS3]: r(722168).DI,
                    [r(832375).es0]: el,
                    [r(832375).Sd1]: r(379782).b,
                    [r(832375).MOG]: e_,
                    [r(832375)._pz]: r(105546).nH,
                    [r(832375).oo9]: r(514214).h4,
                    [r(832375).wl6]: ep,
                    [r(832375).mEg]: em,
                    [r(832375).pkG]: eq,
                    [r(832375).y75]: r(711042).tI,
                    [r(832375).rfw]: eb,
                    [r(832375).GY9]: eg,
                    [r(832375).vbv]: ef,
                    [r(832375).MRl]: ev,
                    [r(832375).ouC]: eh,
                    [r(832375).F9f]: r(665619).gI,
                    [r(832375).eV7]: ey,
                    [r(832375).KWb]: eI,
                    [r(832375).Z4m]: eS,
                    [r(832375).dod]: r(986339).Uz,
                    [r(832375).qNb]: eU,
                    [r(832375)._6L]: r(332672).v,
                    [r(832375).AvP]: eN,
                    [r(832375).ez7]: r(350110).bT,
                    [r(832375).sNL]: r(92974).z8,
                    [r(832375).Fub]: r(406033).Yd,
                    [r(832375).iPf]: eD,
                    [r(832375).Ws0]: ek,
                    [r(832375).bwd]: eO,
                    [r(832375)._71]: r(505710).$b,
                    [r(832375).Xiz]: eA,
                    [r(832375).Xh]: ex,
                    [r(832375).GFx]: eT,
                    [r(832375).Ghx]: eP,
                    [r(832375).kW7]: ew,
                    [r(832375).nsO]: eC,
                    [r(832375).mlj]: eB,
                    [r(832375).sLR]: r(290106).n,
                    [r(832375).H53]: eR,
                    [r(832375).eqd]: eM,
                    [r(832375).G4T]: eJ,
                    [r(832375).oJm]: r(628536).p,
                    [r(832375).Q$N]: eE,
                    [r(832375).Crh]: r(190566).zL,
                    [r(832375).ZPG]: r(441225).Kx,
                    [r(832375).ojG]: eF,
                    [r(832375).EuC]: r(493758).f,
                    [r(832375).VY8]: eV,
                    [r(832375).Kq7]: eW,
                    [r(832375).Xwe]: ej,
                    [r(832375).NXh]: r(213003).sW,
                    [r(832375).iiK]: eL,
                    [r(832375).SMn]: eG,
                    [r(832375).DWi]: eX,
                    [r(832375).m3J]: r(611042).lq,
                    [r(832375).aSp]: eH,
                    [r(832375).j0B]: e$,
                    [r(832375).$RT]: ez,
                    [r(832375).Jmj]: r(486105).uo,
                    [r(832375).qcA]: eK,
                    [r(832375).gDn]: eQ,
                    [r(832375).naB]: r(659341).cq,
                    [r(832375).f3c]: r(867863).Ix,
                    [r(832375).JrE]: eY,
                    [r(832375).aJN]: r(729052).zD,
                    [r(832375).sB_]: eZ,
                    [r(832375).PcJ]: e0,
                    [r(832375).mu7]: r(485890).VF,
                    [r(832375).oNS]: e7,
                    [r(832375).ytf]: e5,
                    [r(832375).IeV]: e3,
                    [r(832375).RWv]: e9,
                    [r(832375).JAq]: e2,
                    [r(832375).yiT]: e8,
                    [r(832375).yKj]: r(708628).dl,
                    [r(832375).XXO]: r(525407)._i,
                    [r(832375).bf7]: e1,
                    [r(832375).vnT]: e4,
                    [r(832375).Hik]: r(347355).ut,
                    [r(832375)._FR]: r(845756).nX,
                    [r(832375).hRD]: e6,
                    [r(832375).R$c]: te,
                    [r(832375).HAA]: r(748227).A,
                    [r(832375).Toz]: r(298085).u,
                    [r(832375).mSw]: r(740170).p,
                    [r(832375).wI1]: r(157008).x,
                    [r(832375).IvX]: tt,
                    [r(832375).A3P]: tr,
                    [r(832375).GUg]: r(880280).fw,
                    [r(832375).B7B]: ti,
                    [r(832375).yvd]: r(190864).nn,
                    [r(832375).gDt]: tn,
                    [r(832375).S6u]: ta,
                    [r(832375)._0B]: to,
                    [r(832375).rNM]: td,
                    [r(832375).CsX]: ts,
                    [r(832375).bJl]: tl,
                    [r(832375).GDR]: r(905514).rl,
                    [r(832375).WQd]: r(198936).vc,
                    [r(832375).pVl]: tu,
                    [r(832375).xMx]: r(934651).aK,
                    [r(832375).TFg]: r(923461).e,
                    [r(832375).C0E]: r(43296).r,
                    [r(832375).U6v]: r(581654).dk,
                    [r(832375).QRx]: r(584742).n,
                    [r(832375).lyl]: tc,
                    [r(832375).NkI]: t_,
                    [r(832375).tEp]: r(250447).A,
                    [r(832375).yMG]: r(272920).j,
                    [r(832375).yHj]: tp,
                    [r(832375).PuY]: tm,
                    [r(832375).EcF]: tq,
                    [r(832375).ef6]: tb
                }
        },
        896216: (e, t, r) => {
            r.d(t, {
                w: () => i
            });

            function i(e) {
                return r(247438).k4p(e).trim().toLowerCase() === r(745680).I1.trim().toLowerCase()
            }
        },
        922934: (e, t, r) => {
            r.d(t, {
                E: () => i,
                I: () => n
            }), r(898992), r(354520);
            let i = {
                    string_is: !0,
                    string_is_not: !0,
                    string_contains: !0,
                    string_does_not_contain: !0,
                    string_starts_with: !0,
                    string_ends_with: !0,
                    is_empty: !0,
                    is_not_empty: !0,
                    string_has_no_alphabet_prefix: !1
                },
                n = (0, r(627179).HP)(i).filter(e => i[e])
        },
        929891: (e, t, r) => {
            function i(e, t, r = !1) {
                return r && "string" == typeof e && "string" == typeof t ? e.toLowerCase() === t.toLowerCase() : e === t
            }

            function n(e, t) {
                let r = new Set(e.ids),
                    i = (Array.isArray(t) ? t : []).filter(e => !r.has(e)),
                    n = i.findIndex(t => t === e.before);
                return n >= 0 ? i.splice(n, 0, ...e.ids) : i.unshift(...e.ids), i
            }

            function a(e, t) {
                let r = new Set(e.ids),
                    i = (Array.isArray(t) ? t : []).filter(e => !r.has(e)),
                    n = i.findIndex(t => t === e.after);
                return n >= 0 ? i.splice(n + 1, 0, ...e.ids) : i.push(...e.ids), i
            }

            function o(e, t) {
                let r = Array.isArray(t) ? t : [],
                    i = (r = l({
                        id: e.id
                    }, r)).findIndex(t => t === e.before);
                return i >= 0 ? r.splice(i, 0, e.id) : r.unshift(e.id), r
            }

            function d(e, t) {
                let r = Array.isArray(t) ? t : [],
                    i = (r = l({
                        id: e.id
                    }, r)).findIndex(t => t === e.after);
                return i >= 0 ? r.splice(i + 1, 0, e.id) : r.push(e.id), r
            }

            function s(e, t) {
                let r = Array.isArray(t) ? t : [];
                return r.map(t => t === e.id ? e.newId : t)
            }

            function l(e, t) {
                let r = Array.isArray(t) ? t : [];
                return r.filter(t => t !== e.id)
            }

            function u(e, t) {
                let n = e.key ? ? "id",
                    a = (0, r(381453).mg)(e.value),
                    o = Array.isArray(t) ? t : [];
                o = _({
                    key: n,
                    remove: a,
                    caseInsensitive: e.caseInsensitive
                }, o);
                let d = e.before ? e.before[n] : void 0,
                    s = o.findIndex(t => t && void 0 !== t[n] && void 0 !== d && i(t[n], d, e.caseInsensitive));
                return s >= 0 ? o.splice(s, 0, a) : o.unshift(a), o
            }

            function c(e, t) {
                let n = e.key ? ? "id",
                    a = (0, r(381453).mg)(e.value),
                    o = Array.isArray(t) ? t : [];
                o = _({
                    key: n,
                    remove: a,
                    caseInsensitive: e.caseInsensitive
                }, o);
                let d = e.after ? e.after[n] : void 0,
                    s = o.findIndex(t => t && void 0 !== t[n] && void 0 !== d && i(t[n], d, e.caseInsensitive));
                return s >= 0 ? o.splice(s + 1, 0, a) : o.push(a), o
            }

            function _(e, t) {
                let r = e.key ? ? "id",
                    n = Array.isArray(t) ? t : [];
                return n.filter(t => t && t[r] && !i(t[r], e.remove[r], e.caseInsensitive))
            }

            function p(e, t) {
                let n = e.key ? ? "id",
                    a = (0, r(381453).mg)(e.value),
                    o = Array.isArray(t) ? [...t] : [],
                    d = o.findIndex(t => t && t[n] && i(t[n], e.value[n], e.caseInsensitive));
                return d >= 0 ? o[d] = { ...o[d],
                    ...a
                } : o.push(a), o
            }

            function m(e, t) {
                let r = Array.isArray(t) ? t : [],
                    i = r.findIndex(t => t === e.args.id);
                if (!(i >= 0)) return {
                    pointer: e.pointer,
                    path: e.path,
                    command: "listRemove",
                    args: {
                        id: e.args.id
                    }
                }; {
                    if (i + 1 === r.length) return {
                        pointer: e.pointer,
                        path: e.path,
                        command: "listAfter",
                        args: {
                            id: e.args.id
                        }
                    };
                    let t = r[i + 1];
                    return {
                        pointer: e.pointer,
                        path: e.path,
                        command: "listBefore",
                        args: {
                            id: e.args.id,
                            before: t
                        }
                    }
                }
            }

            function q(e, t) {
                let r = e.args.key ? ? "id",
                    n = Array.isArray(t) ? t : [],
                    a = n.findIndex(t => t && t[r] && i(t[r], e.args.value[r], e.args.caseInsensitive));
                if (!(a >= 0)) return {
                    pointer: e.pointer,
                    path: e.path,
                    command: "keyedObjectListRemove",
                    args: {
                        key: r,
                        remove: e.args.value,
                        caseInsensitive: e.args.caseInsensitive
                    }
                }; {
                    if (a + 1 === n.length) return {
                        pointer: e.pointer,
                        path: e.path,
                        command: "keyedObjectListAfter",
                        args: { ...e.args,
                            value: n[a]
                        }
                    };
                    let t = n[a + 1];
                    return {
                        pointer: e.pointer,
                        path: e.path,
                        command: "keyedObjectListBefore",
                        args: {
                            key: r,
                            value: n[a],
                            before: t,
                            caseInsensitive: e.args.caseInsensitive
                        }
                    }
                }
            }

            function b(e, t) {
                let r = Array.isArray(t) ? t : [],
                    i = r.findIndex(t => t === e.args.id);
                if (i > 0) {
                    let t = r[i - 1];
                    return {
                        pointer: e.pointer,
                        path: e.path,
                        command: "listAfter",
                        args: {
                            id: e.args.id,
                            after: t
                        }
                    }
                }
                return 0 === i ? {
                    pointer: e.pointer,
                    path: e.path,
                    command: "listBefore",
                    args: {
                        id: e.args.id
                    }
                } : {
                    pointer: e.pointer,
                    path: e.path,
                    command: "listRemove",
                    args: {
                        id: e.args.id
                    }
                }
            }

            function g(e, t) {
                let r = e.args.key ? ? "id",
                    n = Array.isArray(t) ? t : [],
                    a = n.findIndex(t => t && t[r] && i(t[r], e.args.value[r], e.args.caseInsensitive));
                if (a > 0) {
                    let t = n[a - 1];
                    return {
                        pointer: e.pointer,
                        path: e.path,
                        command: "keyedObjectListAfter",
                        args: {
                            key: r,
                            value: n[a],
                            after: t,
                            caseInsensitive: e.args.caseInsensitive
                        }
                    }
                }
                return 0 === a ? {
                    pointer: e.pointer,
                    path: e.path,
                    command: "keyedObjectListBefore",
                    args: {
                        key: r,
                        value: n[a],
                        caseInsensitive: e.args.caseInsensitive
                    }
                } : {
                    pointer: e.pointer,
                    path: e.path,
                    command: "keyedObjectListRemove",
                    args: {
                        key: r,
                        remove: e.args.value,
                        caseInsensitive: e.args.caseInsensitive
                    }
                }
            }

            function f(e, t) {
                let r = Array.isArray(t) ? t : [],
                    i = r.findIndex(t => t === e.args.id),
                    n = r[i - 1];
                return n ? {
                    pointer: e.pointer,
                    path: e.path,
                    command: "listAfter",
                    args: {
                        id: e.args.id,
                        after: n
                    }
                } : {
                    pointer: e.pointer,
                    path: e.path,
                    command: "listBefore",
                    args: {
                        id: e.args.id
                    }
                }
            }

            function v(e, t) {
                let r = e.args.key ? ? "id",
                    n = Array.isArray(t) ? t : [],
                    a = n.findIndex(t => t && t[r] && i(t[r], e.args.remove[r], e.args.caseInsensitive)),
                    o = n[a],
                    d = n[a - 1];
                return o ? d ? {
                    pointer: e.pointer,
                    path: e.path,
                    command: "keyedObjectListAfter",
                    args: {
                        key: r,
                        value: o,
                        after: d,
                        caseInsensitive: e.args.caseInsensitive
                    }
                } : {
                    pointer: e.pointer,
                    path: e.path,
                    command: "keyedObjectListBefore",
                    args: {
                        key: r,
                        value: o,
                        caseInsensitive: e.args.caseInsensitive
                    }
                } : {
                    pointer: e.pointer,
                    path: e.path,
                    command: "keyedObjectListRemove",
                    args: {
                        key: r,
                        remove: e.args.remove,
                        caseInsensitive: e.args.caseInsensitive
                    }
                }
            }

            function h(e, t) {
                let r = e.args.key ? ? "id";
                t || (t = {});
                let n = (Array.isArray(t) ? t : []).find(t => t && t[r] && i(t[r], e.args.value[r], e.args.caseInsensitive));
                return n ? {
                    pointer: e.pointer,
                    path: e.path,
                    command: "keyedObjectListUpdate",
                    args: {
                        key: r,
                        value: n,
                        caseInsensitive: e.args.caseInsensitive
                    }
                } : {
                    pointer: e.pointer,
                    path: e.path,
                    command: "keyedObjectListRemove",
                    args: {
                        key: r,
                        remove: e.args.value,
                        caseInsensitive: e.args.caseInsensitive
                    }
                }
            }
            r.d(t, {
                B8: () => a,
                CY: () => g,
                DB: () => f,
                EF: () => u,
                GV: () => n,
                I0: () => p,
                J9: () => h,
                Kh: () => l,
                Lj: () => o,
                N9: () => c,
                O5: () => s,
                P: () => _,
                WZ: () => m,
                j3: () => b,
                tU: () => q,
                uT: () => v,
                wb: () => d
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(581454)
        },
        937649: (e, t, r) => {
            r.d(t, {
                b: () => n,
                i: () => i
            }), r(16280), r(944114), r(898992), r(430670), r(803949), r(581454);
            let i = {
                derivePrimitiveOperations(e, t, i) {
                    let n = [];
                    n.push({ ...e,
                        command: "insertChildrenBefore" === e.command ? "listBeforeMulti" : "listAfterMulti",
                        args: { ...e.args
                        }
                    });
                    let a = (0, r(733622).k)(e.pointer.table, e.path);
                    if (!a) throw Error(`Unsupported operation table and operation path ${JSON.stringify(e)} `);
                    return e.args.ids.forEach(t => {
                        let o = {
                            id: t,
                            table: a,
                            spaceId: e.pointer.spaceId
                        };
                        n.push({
                            command: "update",
                            pointer: o,
                            path: [],
                            args: {
                                parent_table: e.pointer.table,
                                parent_id: e.pointer.id,
                                alive: !0
                            }
                        });
                        let d = i(o);
                        if (d && d.parent_id && d.parent_table && d.parent_id !== e.pointer.id)
                            if (o.table === r(682956).ev && d.parent_table === r(213003).NX) {
                                let e = {
                                        id: d.parent_id,
                                        table: d.parent_table,
                                        spaceId: d.getSpaceId()
                                    },
                                    t = i(e);
                                (t ? t.getPages() : []).includes(o.id) && n.push({
                                    command: "listRemove",
                                    pointer: e,
                                    path: ["pages"],
                                    args: {
                                        id: d.id
                                    }
                                })
                            } else {
                                let e = (0, r(733622).YE)(d.parent_table, a);
                                if (e) n.push({
                                    command: "listRemove",
                                    pointer: {
                                        id: d.parent_id,
                                        table: d.parent_table,
                                        spaceId: d.getSpaceId()
                                    },
                                    path: e,
                                    args: {
                                        id: d.id
                                    }
                                });
                                else if (d.parent_table !== r(46241).V) throw Error("Assertion failed in insertChildrenOperationHelper")
                            }
                    }), n
                },
                getAdditionalRelatedPointers(e) {
                    let t = (0, r(733622).k)(e.pointer.table, e.path);
                    if (!t) throw Error(`Invalid operation ${JSON.stringify(e)}`);
                    return e.args.ids.map(r => ({
                        id: r,
                        table: t,
                        spaceId: e.pointer.spaceId
                    }))
                },
                invert(e) {
                    let {
                        operation: t,
                        getRecordValue: i
                    } = e, a = (0, r(733622).k)(t.pointer.table, t.path);
                    if (!a) throw Error(`Invalid operation ${JSON.stringify(t)}`);
                    return t.args.ids.flatMap(e => {
                        let o = {
                                id: e,
                                table: a,
                                spaceId: t.pointer.spaceId
                            },
                            d = i(o);
                        if (!d || !d.parent_table || !d.parent_id) return [{
                            command: "removeChild",
                            pointer: t.pointer,
                            path: t.path,
                            args: {
                                id: e
                            }
                        }];
                        if (!(0, r(733622).YE)(d.parent_table, a)) return [{
                            command: "setParent",
                            pointer: o,
                            path: [],
                            args: {
                                parentId: d.parent_id,
                                parentTable: d.parent_table
                            }
                        }]; {
                            let a = i({
                                id: d.parent_id,
                                table: d.parent_table,
                                spaceId: d.space_id
                            });
                            if (!a) return [{
                                command: "removeChild",
                                pointer: t.pointer,
                                path: t.path,
                                args: {
                                    id: e
                                }
                            }]; {
                                if (d.parent_id === t.pointer.id && d.parent_table === t.pointer.table) {
                                    let i = (0, r(733622).YE)(d.parent_table, o.table);
                                    if (i) {
                                        let n = (0, r(488307).OU)(a, i);
                                        if (!n || !n.includes(d.id)) return [{
                                            command: "removeChild",
                                            pointer: t.pointer,
                                            path: t.path,
                                            args: {
                                                id: e
                                            }
                                        }]
                                    }
                                }
                                let i = n({
                                    oldParentWithTable: r(761481).ms.create(d.parent_table, a),
                                    parentTable: d.parent_table,
                                    childPointer: o
                                });
                                return i ? [i] : []
                            }
                        }
                    })
                }
            };

            function n(e) {
                let {
                    oldParentWithTable: t,
                    parentTable: i,
                    childPointer: n
                } = e, a = (0, r(733622).YE)(t.table, n.table), o = {
                    command: "setParent",
                    pointer: n,
                    path: [],
                    args: {
                        parentId: t.value.id,
                        parentTable: i
                    }
                };
                if (!a) return o;
                let d = (0, r(488307).OU)(t.value, a);
                if (!d) return o;
                let s = d.indexOf(n.id);
                if (-1 === s) return o;
                let l = {
                    id: t.value.id,
                    table: i,
                    spaceId: n.spaceId
                };
                return 0 === s ? {
                    command: "insertChildrenBefore",
                    pointer: l,
                    path: a,
                    args: {
                        ids: [n.id]
                    }
                } : {
                    command: "insertChildrenAfter",
                    pointer: l,
                    path: a,
                    args: {
                        ids: [n.id],
                        after: d[s - 1]
                    }
                }
            }
        },
        961015: (e, t, r) => {
            r.d(t, {
                c: () => i
            }), r(16280), r(944114);
            let i = {
                derivePrimitiveOperations(e, t, i) {
                    let n = [],
                        a = (0, r(733622).k)(e.pointer.table, e.path),
                        o = !1;
                    if (a === r(682956).ev && e.pointer.table === r(213003).NX) {
                        let t = i(e.pointer);
                        (t ? t.getPages() : []).includes(e.args.id) || (o = !0)
                    }
                    if (o || n.push({ ...e,
                            command: "listRemove"
                        }), a) n.push({
                        command: "set",
                        path: ["alive"],
                        args: !1,
                        pointer: {
                            table: a,
                            spaceId: e.pointer.spaceId,
                            id: e.args.id
                        }
                    });
                    else throw Error(`invalid operation ${JSON.stringify(e)}`);
                    return n
                },
                getAdditionalRelatedPointers(e) {
                    let t = (0, r(733622).k)(e.pointer.table, e.path);
                    if (!t) throw Error(`Invalid operation ${JSON.stringify(e)}`);
                    return [{
                        id: e.args.id,
                        table: t,
                        spaceId: e.pointer.spaceId
                    }]
                },
                invert(e) {
                    let {
                        operation: t,
                        getRecordValue: i
                    } = e, n = i(t.pointer);
                    if (!n) return [];
                    let a = (0, r(733622).k)(t.pointer.table, t.path);
                    if (!a) throw Error(`Invalid operation ${JSON.stringify(t)}`);
                    let o = (0, r(937649).b)({
                        oldParentWithTable: r(761481).ms.create(t.pointer.table, n),
                        parentTable: t.pointer.table,
                        childPointer: {
                            id: t.args.id,
                            table: a,
                            spaceId: t.pointer.spaceId
                        }
                    });
                    return o ? [o] : []
                }
            }
        },
        968092: (e, t, r) => {
            function i(e, t) {
                let i = t || [];
                return (i = i.filter(t => !(0, r(138798).nK)(t, e))).push(e), i = i.filter(e => !(0, r(642157).hI)(e) || "none" !== (0, r(642157).Lw)(e))
            }

            function n(e, t) {
                let i = t || [];
                if ("public_permission" === e.type) {
                    let t = i.filter(e => (0, r(642157).FP)(e)).map(e => e.added_timestamp || 0);
                    t.length > 0 ? e.added_timestamp = Math.min(...t) : e.added_timestamp = new Date().getTime()
                }
                return (i = i.filter(t => !(0, r(138798).nK)(t, e))).push(e), i = i.filter(e => !!(!(0, r(642157).hI)(e) || "none" !== (0, r(642157).Lw)(e) || (0, r(642157).i4)(e) && void 0 !== e.can_create_pages_in_collection) || "bot_permission" === e.type && !!e.access_revoked)
            }

            function a(e, t) {
                let {
                    singletonPermissionItem: i,
                    set: n
                } = e, a = t || [];
                return a = a.filter(e => !(0, r(138798).nK)(e, i)), n && a.push(i), a
            }
            r.d(t, {
                _1: () => n,
                qg: () => i,
                xF: () => a
            }), r(944114), r(898992), r(354520), r(581454)
        },
        971781: (e, t, r) => {
            r.d(t, {
                Y: () => i
            });
            class i extends WeakMap {
                defaultFactory;
                constructor(e, t) {
                    t ? super(t) : super(), this.defaultFactory = e
                }
                get(e) {
                    if (!super.has(e)) {
                        let t = this.defaultFactory(e);
                        super.set(e, t)
                    }
                    return super.get(e)
                }
            }
        },
        998252: (e, t, r) => {
            r.d(t, {
                S: () => i
            });

            function i(e, t) {
                let {
                    id: i,
                    scheduleId: n
                } = e, a = t || {};
                return (0, r(722371).O9)(a[i]) ? a : { ...a,
                    [i]: n
                }
            }
        }
    }
]);