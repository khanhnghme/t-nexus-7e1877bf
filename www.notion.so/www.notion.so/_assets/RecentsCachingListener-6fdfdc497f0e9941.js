"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [62516], {
        271653: (e, t, i) => {
            i.r(t), i.d(t, {
                RecentsCachingListener: () => a
            }), i(898992), i(354520), i(581454);
            var r = i(296540);
            let a = r.memo(function() {
                let e = (0, i(682985).K8)(() => {
                    var e;
                    let t = i(728372).AppStoreSidebarSpaceStore.state;
                    if (i(420156).A.getIsInitialized() && null != t && t.id) return null == (e = i(420156).A.get(t.id)) || null == (e = e.slice(0, i(488736).zf)) || null == (e = e.map(e => e.store)) ? void 0 : e.filter(i(722371).O9)
                }, []);
                return (0, r.useEffect)(() => {
                    e && (0, i(488736)._D)(e)
                }, [e]), null
            })
        },
        488736: (e, t, i) => {
            i.d(t, {
                GW: () => s,
                _D: () => d,
                zf: () => a
            }), i(898992), i(354520), i(581454);
            var r = () => i(832375);
            let a = 10;
            class o {
                localStorageStore = new(i(274919)).Ay({
                    namespace: "recentsCache",
                    important: !1,
                    trackingType: "preference"
                });
                waitUntilReady() {
                    return this.localStorageStore.waitUntilReady()
                }
                get(e) {
                    let t = this.localStorageStore.get(e),
                        r = i(969475).object({
                            required: {
                                id: i(969475).uuid(),
                                version: i(969475).number(),
                                parentId: i(969475).uuid(),
                                parentTable: i(969475).string(),
                                spaceId: i(969475).uuid()
                            },
                            optional: {}
                        });
                    return null == t ? void 0 : t.filter(e => !r.validator(e))
                }
                set(e, t) {
                    this.localStorageStore.set(e, t)
                }
                remove(e) {
                    this.localStorageStore.remove(e)
                }
            }
            let l = new o;

            function n(e) {
                var t, i;
                let r = e.getVersion(),
                    a = e.getType(),
                    o = e.getParentId(),
                    l = e.getParentTable(),
                    n = e.getLastEditedByPointer(),
                    d = e.getLastEditedTime(),
                    s = e.getSpaceId();
                if (void 0 !== r && void 0 !== a && void 0 !== o && void 0 !== l && void 0 !== s) return {
                    id: e.id,
                    version: r,
                    title: e.getTitleValue(),
                    icon: null == (t = e.getIcon()) ? void 0 : t.icon,
                    cover: null == (i = e.getCover()) ? void 0 : i.cover,
                    coverPosition: e.getFormatStore().getKeyValue("page_cover_position"),
                    parentId: o,
                    parentTable: l,
                    lastEditedByPointer: n,
                    lastEditedTime: d,
                    spaceId: s
                }
            }

            function d(e) {
                var t;
                let r = null == (t = i(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : t.id;
                if (!r) return !1;
                let o = e.filter(e => e.canRead()).slice(0, a).map(n).filter(i(722371).O9);
                return l.set(r, o), !0
            }

            function s() {
                var e;
                let {
                    sidebarSpaceViewStore: t,
                    currentUserStore: a
                } = (0, i(682985).K8)(() => ({
                    sidebarSpaceViewStore: i(728372).AppStoreSidebarSpaceViewStore.state,
                    currentUserStore: i(728372).AppStoreCurrentUserStore.state
                }), []), [o] = (0, i(97668).Yb)(async () => {
                    var e;
                    if (await l.waitUntilReady(), !t || i(728372).AppStoreSidebarSpaceViewStore.state !== t) return;
                    let o = null == a ? void 0 : a.id,
                        n = t.id,
                        d = t.getSpaceId(),
                        s = null == (e = l.get(n)) ? void 0 : e.filter(e => e.spaceId === d);
                    if (!s) return;
                    let c = new(i(48202)).UserRecordMap;
                    for (let e of s) {
                        let t = function(e) {
                            var t, i;
                            return {
                                type: "page",
                                id: e.id,
                                last_edited_by_id: null == (t = e.lastEditedByPointer) ? void 0 : t.id,
                                last_edited_by_table: null == (i = e.lastEditedByPointer) ? void 0 : i.table,
                                last_edited_time: e.lastEditedTime,
                                properties: {
                                    title: e.title
                                },
                                format: {
                                    page_icon: e.icon,
                                    page_cover: e.cover,
                                    page_cover_position: e.coverPosition
                                },
                                version: e.version,
                                alive: !0,
                                parent_id: e.parentId,
                                parent_table: e.parentTable,
                                space_id: e.spaceId
                            }
                        }(e);
                        void 0 !== t && c.setValueAndRole({
                            pointer: {
                                id: e.id,
                                table: r().evP,
                                spaceId: e.spaceId
                            },
                            userId: o
                        }, t, "reader")
                    }
                    c.setModelAndRole({
                        pointer: t.pointer,
                        userId: o
                    }, t.getModel(), t.getRole() ? ? "none");
                    let p = new(i(870941)).A({
                        name: "recentPagesCache",
                        isTemporaryData: !0,
                        data: c
                    });
                    p.freeze();
                    let u = t.clone(p);
                    return s.map(e => {
                        let a = {
                            id: e.id,
                            table: r().evP,
                            spaceId: e.spaceId
                        };
                        return {
                            cacheStore: i(970831).B.createChildStore(u, a),
                            liveStore: i(970831).B.createChildStore(t, a)
                        }
                    })
                }, [t, null == a ? void 0 : a.id]), n = (e = o.value, (0, i(682985).K8)(() => null == e ? void 0 : e.map(({
                    cacheStore: e,
                    liveStore: t
                }) => t.isDefined() ? t : e), [e]));
                return "resolved" === o.status ? { ...o,
                    value: n
                } : { ...o,
                    value: void 0
                }
            }
        }
    }
]);