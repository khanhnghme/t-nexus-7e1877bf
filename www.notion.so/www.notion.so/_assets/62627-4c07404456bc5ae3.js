"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [62627], {
        10218: (e, t, r) => {
            r.d(t, {
                y: () => d
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            var a = () => r(694402),
                o = () => r(653834),
                n = () => r(148337);
            r(16280), r(581454);
            class s extends o().A {
                blocks;
                liveBlocks;
                rootBlock;
                detachedRootBlocks;
                constructor(e) {
                    super(), this.blocks = new Map, this.liveBlocks = new Map, this.rootBlock = this.createBlock(e, "page"), this.detachedRootBlocks = new Map
                }
                hasBlock(e) {
                    return this.blocks.has(e)
                }
                getBlock(e) {
                    return (0, n().o9)(this.blocks.get(e))
                }
                createBlock(e, t) {
                    (0, n().MX)(!this.hasBlock(e.id), "Block already exists on page");
                    let r = new i({
                        blockStore: e,
                        tracker: this,
                        reference: t,
                        onCreated: e => {
                            this.blocks.set(e.getId(), e)
                        }
                    });
                    return r.hasLiveReference() && this.addLiveBlock(r), r
                }
                removeBlock(e) {
                    (0, n().MX)(this.hasBlock(e), "Block must exist on page"), (0, n().MX)(!this.liveBlocks.has(e), "Should not be possible to remove a live block"), this.blocks.delete(e)
                }
                getLiveBlocks() {
                    return [...this.liveBlocks.values()]
                }
                addLiveBlock(e) {
                    (0, n().MX)(!this.liveBlocks.has(e.getId()), "Block already added to live blocks"), this.liveBlocks.set(e.getId(), e), this.emit({
                        type: "add_block",
                        blockStore: e.blockStore
                    })
                }
                removeLiveBlock(e) {
                    this.liveBlocks.delete(e), this.emit({
                        type: "remove_block",
                        blockId: e
                    })
                }
                destroy() {
                    for (let e of this.blocks.values()) e.destroy();
                    this.blocks.clear(), this.liveBlocks.clear(), this.detachedRootBlocks.clear()
                }
                getClosestPageAndTransclusionReferenceAncestorIds(e) {
                    let t = this.liveBlocks.get(e);
                    return t ? t.getClosestPageAndTransclusionReferenceAncestors().map(e => e.getId()) : []
                }
                getPathToBlock(e) {
                    let t = this.liveBlocks.get(e);
                    if (!t) return;
                    let r = [],
                        a = t;
                    for (; a;) {
                        r.unshift(a.getId());
                        let e = a.liveReferences.values().next().value;
                        if ("page" === e) return r;
                        e && (a = e)
                    }
                    throw Error("Block should have a page ancestor")
                }
            }
            class i {
                tracker;
                blockStore;
                liveReferences;
                detachedReferences;
                childBlocks;
                childBlocksList;
                contentStoreListener;
                constructor(e) {
                    const {
                        blockStore: t,
                        tracker: r,
                        reference: a,
                        onCreated: o
                    } = e;
                    this.tracker = r, this.blockStore = t, this.liveReferences = new Set, this.detachedReferences = new Set, "page" === a || a.hasLiveReference() ? this.liveReferences.add(a) : this.detachedReferences.add(a), this.childBlocks = new Map, this.childBlocksList = [], o(this), this.contentStoreListener = () => this.handleContentStoreChange(), this.blockStore.getKeyStore("type").addListener(this.contentStoreListener), this.blockStore.getContentStore().addListener(this.contentStoreListener), this.blockStore.getFormatStore().getKeyStore("transclusion_reference_pointer").addListener(this.contentStoreListener), this.handleContentStoreChange()
                }
                handleContentStoreChange() {
                    let e = [...this.childBlocks.keys()],
                        t = new Map,
                        a = this.blockStore.getType();
                    if (this.liveReferences.has("page") || a && !(0, r(955630).$I)(a))
                        for (let e of (0, r(516893).W)(this.blockStore)) t.set(e.id, e);
                    let o = [...t.keys()],
                        s = r(381453).R9(o, e),
                        i = r(381453).R9(e, o);
                    for (let e of s)
                        if (this.tracker.hasBlock(e)) {
                            let t = this.tracker.getBlock(e);
                            t.addReference(this), this.childBlocks.set(e, t)
                        } else {
                            let r = this.tracker.createBlock((0, n().o9)(t.get(e)), this);
                            this.childBlocks.set(e, r)
                        }
                    for (let e of i) {
                        let t = (0, n().o9)(this.childBlocks.get(e));
                        this.childBlocks.delete(e), t.removeReference(this)
                    }
                    this.childBlocksList = [...t.keys()].map(e => (0, n().o9)(this.childBlocks.get(e))), this.tracker.emit({
                        type: "content_store_change"
                    })
                }
                getId() {
                    return this.blockStore.id
                }
                hasLiveReference() {
                    return this.liveReferences.size > 0
                }
                addReference(e) {
                    e.hasLiveReference() ? this.addLiveReference(e) : this.addDetachedReference(e)
                }
                addLiveReference(e) {
                    if ((0, n().MX)(!this.liveReferences.has(e), "Reference already exists for block"), this.liveReferences.add(e), 1 === this.liveReferences.size)
                        for (let e of (this.tracker.addLiveBlock(this), this.childBlocks.values())) e.updateReference(this)
                }
                addDetachedReference(e) {
                    this.detachedReferences.add(e)
                }
                removeReference(e) {
                    e.hasLiveReference() ? this.removeLiveReference(e) : this.removeDetachedReference(e)
                }
                removeLiveReference(e) {
                    if (this.liveReferences.delete(e), this.detachedReferences.add("detached"), this.tracker.detachedRootBlocks.set(this.getId(), this), 0 === this.liveReferences.size)
                        for (let e of (this.tracker.removeLiveBlock(this.getId()), this.childBlocks.values())) e.updateReference(this);
                    return this
                }
                removeDetachedReference(e) {
                    if (this.detachedReferences.delete(e), 0 === this.liveReferences.size && 0 === this.detachedReferences.size) {
                        for (let [e, t] of this.childBlocks.entries()) this.childBlocks.delete(e), t.removeReference(this);
                        this.tracker.removeBlock(this.getId()), this.destroy()
                    }
                }
                updateReference(e) {
                    let t = this.hasLiveReference();
                    this.liveReferences.has(e) && !e.hasLiveReference() ? (this.liveReferences.delete(e), this.detachedReferences.add(e)) : this.detachedReferences.has(e) && e.hasLiveReference() && (this.liveReferences.add(e), this.detachedReferences.delete(e));
                    let r = this.hasLiveReference();
                    if (t !== r)
                        for (let e of (r ? this.tracker.addLiveBlock(this) : this.tracker.removeLiveBlock(this.getId()), this.childBlocks.values())) e.updateReference(this);
                    return this
                }
                getClosestPageAndTransclusionReferenceAncestors() {
                    if (0 === this.liveReferences.size) return [];
                    if (this === this.tracker.rootBlock) return [this];
                    let e = new Set,
                        t = new Set,
                        r = [this];
                    for (; r.length > 0;) {
                        let a = (0, n().o9)(r.shift());
                        if (!t.has(a)) {
                            for (let t of a.liveReferences) "page" === t ? e.add(a) : "transclusion_reference" === t.blockStore.getType() ? e.add(t) : r.push(t);
                            t.add(a)
                        }
                    }
                    return (0, n().MX)(e.size > 0, "Block must have one or more ancestors"), [...e]
                }
                destroy() {
                    this.contentStoreListener && (this.blockStore.getKeyStore("type").removeListener(this.contentStoreListener), this.blockStore.getContentStore().removeListener(this.contentStoreListener), this.blockStore.getFormatStore().getKeyStore("transclusion_reference_pointer").removeListener(this.contentStoreListener), this.contentStoreListener = void 0)
                }
            }
            class l {
                blockTextInstanceMap;
                textInstanceBlockMap;
                blockTextSliceTreeListenerMap;
                pageBlockTracker;
                pageBlockTrackerListener;
                constructor(e) {
                    for (const {
                            blockStore: t
                        } of (this.blockTextInstanceMap = new Map, this.textInstanceBlockMap = new Map, this.blockTextSliceTreeListenerMap = new Map, this.pageBlockTracker = e, this.pageBlockTrackerListener = e => this.handlePageEvent(e), this.pageBlockTracker.addListener(this.pageBlockTrackerListener), e.getLiveBlocks())) this.addBlock(t)
                }
                handlePageEvent(e) {
                    let t = e.type;
                    switch (t) {
                        case "add_block":
                            this.addBlock(e.blockStore);
                            break;
                        case "remove_block":
                            this.removeBlock(e.blockId);
                            break;
                        case "content_store_change":
                            break;
                        default:
                            (0, r(722371).HB)(t)
                    }
                }
                addBlock(e) {
                    let t = e.id;
                    if (this.blockTextSliceTreeListenerMap.has(t)) return;
                    let r = () => void this.handleTextSliceTreeChange(t, e.getSerializedTextSliceTreeStore().getValue());
                    e.getSerializedTextSliceTreeStore().addListener(r), this.blockTextSliceTreeListenerMap.set(t, {
                        blockStore: e,
                        textSliceTreeListener: r
                    }), this.handleTextSliceTreeChange(t, e.getSerializedTextSliceTreeStore().getValue())
                }
                removeBlock(e) {
                    this.removeMappingForBlock(e);
                    let {
                        blockStore: t,
                        textSliceTreeListener: r
                    } = (0, n().o9)(this.blockTextSliceTreeListenerMap.get(e));
                    t.getSerializedTextSliceTreeStore().removeListener(r), this.blockTextSliceTreeListenerMap.delete(e)
                }
                handleTextSliceTreeChange(e, t) {
                    if (this.removeMappingForBlock(e), t)
                        for (let a of (0, r(433466).Zx)(t)) this.addBlockTextInstanceMapping(e, a)
                }
                removeMappingForBlock(e) {
                    let t = this.blockTextInstanceMap.get(e);
                    if (t)
                        for (let r of t) this.removeBlockTextInstanceMapping(e, r)
                }
                addBlockTextInstanceMapping(e, t) {
                    let r = this.blockTextInstanceMap.get(e) ? ? new Set;
                    r.add(t), this.blockTextInstanceMap.set(e, r);
                    let a = this.textInstanceBlockMap.get(t) ? ? new Set;
                    a.add(e), this.textInstanceBlockMap.set(t, a)
                }
                removeBlockTextInstanceMapping(e, t) {
                    let r = (0, n().o9)(this.blockTextInstanceMap.get(e));
                    r.delete(t), 0 === r.size && this.blockTextInstanceMap.delete(e);
                    let a = (0, n().o9)(this.textInstanceBlockMap.get(t));
                    a.delete(e), 0 === a.size && this.textInstanceBlockMap.delete(t)
                }
                getTextInstanceIdsForBlock(e) {
                    return this.blockTextInstanceMap.has(e) ? [...(0, n().o9)(this.blockTextInstanceMap.get(e))] : []
                }
                getBlockIdsForTextInstance(e) {
                    return this.textInstanceBlockMap.has(e) ? [...(0, n().o9)(this.textInstanceBlockMap.get(e))] : []
                }
                getBlockIdForTextInstanceItemId(e, t, r) {
                    for (let a of this.getBlockIdsForTextInstance(e)) {
                        let o = (0, n().o9)(this.blockTextSliceTreeListenerMap.get(a)).blockStore;
                        if ((0, n().o9)(o.getBlockTitleTextSliceTree()).findTextSliceTreeContainingItemWithId(e, t, r)) return o.id
                    }
                }
                destroy() {
                    for (let e of this.blockTextSliceTreeListenerMap.keys()) this.removeBlock(e);
                    this.pageBlockTracker.removeListener(this.pageBlockTrackerListener)
                }
            }
            class c extends o().A {
                pageInfoMap = new(r(793665)).A({
                    getKey: e => (0, a().jV)(e)
                });
                trackPage(e) {
                    if (this.pageInfoMap.has(e.pointer)) return void(0, n().o9)(this.pageInfoMap.get(e.pointer)).pageStores.add(e);
                    let t = new s(e),
                        r = new l(t),
                        o = new Set([e]);
                    this.pageInfoMap.set(e.pointer, {
                        pageBlockTracker: t,
                        pageTextInstanceTracker: r,
                        pageStores: o
                    }), this.emit({
                        type: "track_page",
                        combinedId: (0, a().jV)(e.pointer)
                    })
                }
                untrackPage(e) {
                    let t = e.pointer,
                        r = (0, n().o9)(this.pageInfoMap.get(t));
                    if (r.pageStores.delete(e), 0 === r.pageStores.size) {
                        var o;
                        r.pageBlockTracker.destroy(), null == (o = r.pageTextInstanceTracker) || o.destroy(), this.pageInfoMap.delete(t)
                    }
                    this.emit({
                        type: "untrack_page",
                        combinedId: (0, a().jV)(e.pointer)
                    })
                }
                clear() {
                    let e = [];
                    for (let [r, o] of this.pageInfoMap) {
                        var t;
                        o.pageBlockTracker.destroy(), null == (t = o.pageTextInstanceTracker) || t.destroy(), this.pageInfoMap.delete(r), e.push({
                            type: "untrack_page",
                            combinedId: (0, a().jV)(r)
                        })
                    }
                    this.emit(...e)
                }
                getPageStoreForBlockStore(e) {
                    for (let [t, r] of this.pageInfoMap)
                        for (let t of r.pageStores)
                            if (t.uiLocation.contains(e.uiLocation)) return t;
                    for (let [t, r] of this.pageInfoMap)
                        for (let t of r.pageStores) {
                            let r = this.pageInfoMap.get(t.pointer);
                            if (null != r && r.pageBlockTracker && r.pageBlockTracker.hasBlock(e.pointer.id)) return t
                        }
                }
                getPageBlockTrackerForPage(e) {
                    var t;
                    return null == (t = this.pageInfoMap.get(e)) ? void 0 : t.pageBlockTracker
                }
                getPageTextInstanceTrackerForPage(e) {
                    var t;
                    return null == (t = this.pageInfoMap.get(e)) ? void 0 : t.pageTextInstanceTracker
                }
            }
            let d = new c
        },
        11266: (e, t, r) => {
            r.d(t, {
                P: () => n
            }), r(581454);
            let a = 100,
                o = 50;

            function n(e) {
                let {
                    currentUserId: t,
                    defaultRecordCache: n,
                    pointer: s,
                    userId: i,
                    inMemoryRecordCache: l,
                    model: c,
                    role: d,
                    force: u,
                    maybeStaleRecordMap: p,
                    updatePaths: g,
                    debugSource: h,
                    forceFetchRemoteRecordSource: f
                } = e;
                "block" === s.table && (0, r(158392).setBlockIdDebugSource)(s.id, h);
                let m = i || t,
                    v = null == c ? void 0 : c.getVersion(),
                    T = {
                        ignoreAllCaches: !0
                    },
                    k = l.getRole({
                        pointer: s,
                        userId: m
                    }, T),
                    I = l.getVersion({
                        pointer: s,
                        userId: m
                    }, T),
                    S = "number" == typeof v && v > I;
                if (!(u || S || void 0 !== d && k !== d)) {
                    "block" === s.table && (0, r(158392).DEBUG_ONLY_onBlockRecordValueSet)({
                        shouldUpdate: !1,
                        blockId: s.id,
                        callsite: h,
                        forceFetchRemoteRecordSource: f,
                        environmentCurrentUserId: t,
                        role: d,
                        userId: m,
                        oldRole: k,
                        oldVersion: I,
                        newVersion: v,
                        valueDefined: "unknown",
                        isNewerVersion: S,
                        force: !!u
                    });
                    return
                }
                let y = c;
                if (!u && !S && function(e) {
                        let {
                            oldRole: t,
                            newRole: a
                        } = e;
                        return !!a && !!r(642157).Tt(a) && (!t || !!r(642157).p2(t))
                    }({
                        oldRole: k,
                        newRole: d
                    })) {
                    let e = l.getRecordModel({
                        pointer: s,
                        userId: m
                    }, T);
                    e && (y = e)
                }
                for (let e of ("block" === s.table && (0, r(158392).DEBUG_ONLY_onBlockRecordValueSet)({
                        shouldUpdate: !0,
                        blockId: s.id,
                        callsite: h,
                        forceFetchRemoteRecordSource: f,
                        environmentCurrentUserId: t,
                        role: d,
                        userId: m,
                        oldRole: k,
                        oldVersion: I,
                        newVersion: v,
                        valueDefined: void 0 !== y,
                        isNewerVersion: S,
                        force: !!u
                    }), l.setModelAndRole({
                        pointer: s,
                        userId: m
                    }, y, d), g)) l.emitRecord(s, e);
                let b = n.persistedRecordCache;
                if (!l.isTemporaryData && !l.isSyntheticAssistantData && b && (0, r(16903).u)(s)) {
                    let e = y ? y.__IM_SORRY__getValue() : void 0;
                    s.table === r(832375).evP && e && e.properties && e.properties.title && (e.properties.title = e.properties.title.map(e => r(247438).x9_(e)));
                    let n = function(e) {
                        let {
                            currentUserId: t,
                            pointer: n,
                            model: s,
                            role: i
                        } = e;
                        return (n.table === r(832375).oo9 || n.table === r(832375).GDR || n.table === r(832375).xMx) && t === n.id ? a : (null == s ? void 0 : s.table) === r(832375).mu7 && s.parent_id === t || n.table === r(832375).NXh && (0, r(642157).DH)(i) ? o : void 0
                    }({
                        currentUserId: t,
                        pointer: s,
                        model: y,
                        role: d
                    });
                    b.set({
                        pointer: s,
                        value: {
                            value: e,
                            role: d
                        },
                        importance: n,
                        userId: m,
                        maybeStaleRecordMap: p
                    })
                }
                l === n.inMemoryRecordCache && n.onRecordValueSet({
                    pointer: s,
                    userId: m
                })
            }
        },
        16903: (e, t, r) => {
            r.d(t, {
                u: () => o
            });
            let a = {
                [r(832375).Oa6]: !1,
                [r(832375).kzt]: !1,
                [r(832375).eBi]: !1,
                [r(832375).jft]: !1,
                [r(832375).KNP]: !1,
                [r(832375).l1b]: !1,
                [r(832375).Wdc]: !1,
                [r(832375).y$R]: !1,
                [r(832375).Wuo]: !1,
                [r(832375).cKY]: !1,
                [r(832375).TFd]: !1,
                [r(832375).Nm7]: !1,
                [r(832375).YVp]: !1,
                [r(832375).yBS]: !1,
                [r(832375).SC1]: !1,
                [r(832375).OfD]: !1,
                [r(832375).Ok8]: !1,
                [r(832375).kf7]: !1,
                [r(832375).k$w]: !1,
                [r(832375).hrX]: !1,
                [r(832375).evP]: !0,
                [r(832375).ukB]: !1,
                [r(832375).H3H]: !1,
                [r(832375).GPl]: !0,
                [r(832375).qPS]: !1,
                [r(832375).hGr]: !1,
                [r(832375).qmW]: !0,
                [r(832375).VlP]: !0,
                [r(832375).BiG]: !1,
                [r(832375).Gy1]: !0,
                [r(832375).SNf]: !0,
                [r(832375)._0W]: !1,
                [r(832375).rqL]: !1,
                [r(832375).$XM]: !1,
                [r(832375).eUD]: !1,
                [r(832375).e4Z]: !0,
                [r(832375).$2J]: !1,
                [r(832375).r1d]: !1,
                [r(832375).$YH]: !0,
                [r(832375).HxG]: !1,
                [r(832375).m2N]: !1,
                [r(832375).ITT]: !0,
                [r(832375).$kK]: !1,
                [r(832375).vjA]: !1,
                [r(832375).XHn]: !1,
                [r(832375).gEh]: !1,
                [r(832375).adQ]: !1,
                [r(832375).AsL]: !0,
                [r(832375).hWt]: !1,
                [r(832375).Klg]: !1,
                [r(832375).$MF]: !1,
                [r(832375).HBA]: !1,
                [r(832375).PsW]: !1,
                [r(832375).rGg]: !1,
                [r(832375).DHr]: !1,
                [r(832375).kMj]: !1,
                [r(832375).jsQ]: !1,
                [r(832375).OjI]: !1,
                [r(832375).T2]: !1,
                [r(832375).Cy3]: !0,
                [r(832375).lo9]: !1,
                [r(832375).iEO]: !1,
                [r(832375).joQ]: !1,
                [r(832375).W8A]: !1,
                [r(832375).hyq]: !1,
                [r(832375).hxQ]: !1,
                [r(832375).Wnz]: !1,
                [r(832375).$$c]: !1,
                [r(832375).yDO]: !1,
                [r(832375).Lij]: !0,
                [r(832375).bhs]: !1,
                [r(832375).SBl]: !1,
                [r(832375).Q4N]: !1,
                [r(832375).bnG]: !1,
                [r(832375).CEK]: !1,
                [r(832375).Yxt]: !1,
                [r(832375).Yxw]: !1,
                [r(832375).aFA]: !1,
                [r(832375).zx0]: !0,
                [r(832375).PXw]: !1,
                [r(832375).dPx]: !1,
                [r(832375).ozN]: !1,
                [r(832375).nYQ]: !1,
                [r(832375).IF6]: !1,
                [r(832375).HtE]: !1,
                [r(832375).jvE]: !1,
                [r(832375).uLb]: !1,
                [r(832375).QOF]: !1,
                [r(832375).KcW]: !1,
                [r(832375).pEW]: !1,
                [r(832375).yAZ]: !1,
                [r(832375).a8w]: !1,
                [r(832375).KqJ]: !1,
                [r(832375)._ig]: !1,
                [r(832375).ULG]: !1,
                [r(832375).UNl]: !1,
                [r(832375).EgT]: !1,
                [r(832375).ziV]: !1,
                [r(832375).V1v]: !1,
                [r(832375).qtq]: !1,
                [r(832375).qrH]: !1,
                [r(832375).lMK]: !1,
                [r(832375).enP]: !1,
                [r(832375).XXy]: !1,
                [r(832375).J6M]: !1,
                [r(832375).OCn]: !1,
                [r(832375).SS3]: !1,
                [r(832375).es0]: !1,
                [r(832375).Sd1]: !0,
                [r(832375).MOG]: !1,
                [r(832375)._pz]: !1,
                [r(832375).oo9]: !0,
                [r(832375).wl6]: !1,
                [r(832375).mEg]: !1,
                [r(832375).pkG]: !1,
                [r(832375).y75]: !0,
                [r(832375).rfw]: !1,
                [r(832375).GY9]: !1,
                [r(832375).vbv]: !1,
                [r(832375).MRl]: !0,
                [r(832375).ouC]: !0,
                [r(832375).F9f]: !0,
                [r(832375).eV7]: !1,
                [r(832375).KWb]: !1,
                [r(832375).Z4m]: !1,
                [r(832375).dod]: !1,
                [r(832375).qNb]: !1,
                [r(832375)._6L]: !1,
                [r(832375).AvP]: !1,
                [r(832375).ez7]: !0,
                [r(832375).sNL]: !1,
                [r(832375).Fub]: !1,
                [r(832375).iPf]: !1,
                [r(832375).Ws0]: !1,
                [r(832375).bwd]: !1,
                [r(832375)._71]: !1,
                [r(832375).Xiz]: !1,
                [r(832375).Xh]: !1,
                [r(832375).GFx]: !1,
                [r(832375).Ghx]: !1,
                [r(832375).kW7]: !1,
                [r(832375).nsO]: !1,
                [r(832375).mlj]: !1,
                [r(832375).sLR]: !1,
                [r(832375).H53]: !1,
                [r(832375).eqd]: !1,
                [r(832375).G4T]: !1,
                [r(832375).oJm]: !1,
                [r(832375).Q$N]: !1,
                [r(832375).Crh]: !0,
                [r(832375).ZPG]: !0,
                [r(832375).ojG]: !1,
                [r(832375).EuC]: !1,
                [r(832375).VY8]: !0,
                [r(832375).Kq7]: !1,
                [r(832375).Xwe]: !1,
                [r(832375).NXh]: !0,
                [r(832375).iiK]: !1,
                [r(832375).SMn]: !1,
                [r(832375).DWi]: !1,
                [r(832375).m3J]: !0,
                [r(832375).aSp]: !1,
                [r(832375).j0B]: !1,
                [r(832375).$RT]: !1,
                [r(832375).Jmj]: !1,
                [r(832375).qcA]: !0,
                [r(832375).gDn]: !1,
                [r(832375).naB]: !0,
                [r(832375).f3c]: !0,
                [r(832375).JrE]: !1,
                [r(832375).aJN]: !0,
                [r(832375).sB_]: !1,
                [r(832375).PcJ]: !1,
                [r(832375).mu7]: !0,
                [r(832375).oNS]: !1,
                [r(832375).ytf]: !1,
                [r(832375).IeV]: !1,
                [r(832375).RWv]: !1,
                [r(832375).JAq]: !1,
                [r(832375).yiT]: !1,
                [r(832375).yKj]: !0,
                [r(832375).XXO]: !1,
                [r(832375).bf7]: !1,
                [r(832375).vnT]: !1,
                [r(832375).Hik]: !1,
                [r(832375)._FR]: !1,
                [r(832375).hRD]: !1,
                [r(832375).R$c]: !1,
                [r(832375).HAA]: !1,
                [r(832375).Toz]: !1,
                [r(832375).mSw]: !1,
                [r(832375).wI1]: !1,
                [r(832375).IvX]: !1,
                [r(832375).A3P]: !0,
                [r(832375).GUg]: !1,
                [r(832375).B7B]: !1,
                [r(832375).yvd]: !0,
                [r(832375).gDt]: !1,
                [r(832375).S6u]: !1,
                [r(832375)._0B]: !1,
                [r(832375).rNM]: !1,
                [r(832375).CsX]: !1,
                [r(832375).bJl]: !1,
                [r(832375).GDR]: !0,
                [r(832375).WQd]: !0,
                [r(832375).pVl]: !1,
                [r(832375).xMx]: !0,
                [r(832375).TFg]: !1,
                [r(832375).C0E]: !1,
                [r(832375).U6v]: !1,
                [r(832375).QRx]: !1,
                [r(832375).lyl]: !1,
                [r(832375).NkI]: !1,
                [r(832375).tEp]: !1,
                [r(832375).yMG]: !1,
                [r(832375).yHj]: !1,
                [r(832375).PuY]: !1,
                [r(832375).EcF]: !1,
                [r(832375).ef6]: !1
            };

            function o(e) {
                return a[e.table]
            }
        },
        56477: (e, t, r) => {
            r.d(t, {
                o: () => a
            });

            function a(e) {
                let {
                    inMemoryRecordCache: t,
                    persistedRecordCache: a,
                    pointer: o,
                    userId: n
                } = e;
                t.deleteRecord({
                    pointer: o,
                    userId: n
                }), t.emitRecord(o, []), a && (0, r(16903).u)(o) && a.deleteRecord(o, n)
            }
        },
        130925: (e, t, r) => {
            r.d(t, {
                e: () => T
            }), r(16280), r(944114), r(898992), r(672577), r(581454);
            var a = () => r(773352),
                o = () => r(255378),
                n = () => r(115118),
                s = () => r(412951),
                i = () => r(832375),
                l = () => r(416607),
                c = () => r(975162),
                d = () => r(4962),
                u = () => r(722371),
                p = () => r(484177),
                g = () => r(803952),
                h = () => r(596717),
                f = () => r(73467),
                m = () => r(433261);
            let v = new(r(34128)).A({
                performRequests: async (e, t) => {
                    let v = Array(e.length),
                        T = e.map((e, t) => ({
                            environment: e.environment,
                            request: e.args,
                            index: t
                        }));
                    for (let [e, S] of Object.entries(r(381453).$z(T, e => e.request.userId))) {
                        var k, I;
                        let r, T = S[0].environment,
                            y = {
                                id: e,
                                table: i().oo9
                            },
                            b = [],
                            {
                                mainDbObjects: _,
                                spaceCellObjects: R,
                                spaceCellObjectsWithShortSpaceId: E,
                                spaceCellObjectsMissingSpaceId: C
                            } = function(e, t) {
                                let r = [],
                                    a = [],
                                    o = {},
                                    n = {};
                                for (let s of e) {
                                    let e = t(s);
                                    if (!e) throw Error("Expected a record pointer");
                                    let l = (0, f().dR)(e.id);
                                    if ((0, m().$t)(e.table) || (0, m().kW)(e.table)) {
                                        let t;
                                        if (t = e.table === i().NXh ? e.id : e.spaceId) n[t] ? ? = [], n[t].push(s);
                                        else if ("main" !== l && void 0 !== l) {
                                            let e = l.toString();
                                            o[e] ? ? = [], o[e].push(s)
                                        } else a.push(s)
                                    } else r.push(s)
                                }
                                return {
                                    spaceCellObjects: n,
                                    spaceCellObjectsMissingSpaceId: a,
                                    spaceCellObjectsWithShortSpaceId: o,
                                    mainDbObjects: r
                                }
                            }(S.map(({
                                request: {
                                    pointer: e,
                                    version: t
                                }
                            }) => ({
                                pointer: e,
                                version: t
                            })), e => e.pointer),
                            A = [];
                        for (let [e, t] of (0 !== _.length && A.push({
                                endpointType: "main",
                                requests: _
                            }), Object.entries(R))) {
                            let r = null == (k = t.find(e => {
                                    var t;
                                    let r = null == (t = e.pointer) ? void 0 : t.id;
                                    return (0, u().O9)(r) && (0, d()._q)(r)
                                })) || null == (k = k.pointer) ? void 0 : k.id,
                                a = (0, n().WS)({
                                    cellId: void 0,
                                    recordId: r,
                                    spaceId: e
                                });
                            A.push({
                                endpointType: "space",
                                cellHeaders: a,
                                requests: t
                            })
                        }
                        if (0 !== C.length) {
                            let e;
                            a().rateLimitedLog({
                                level: "info",
                                from: "syncRecordValuesBatched",
                                type: "recordPointerMissingSpaceId",
                                actor: y,
                                data: {
                                    miscDataToConvertToString: {
                                        requests: C
                                    }
                                }
                            });
                            let t = (0, h().L)(T);
                            if (o().B3 in t && (e = t[o().B3]), e) {
                                let t = A.find(t => {
                                    var r;
                                    return (null == (r = t.cellHeaders) ? void 0 : r[o().B3]) === e
                                });
                                t ? t.requests.push(...C) : A.push({
                                    endpointType: "space",
                                    requests: C
                                })
                            } else A.push({
                                endpointType: "space",
                                requests: C
                            })
                        }
                        for (let [e, t] of Object.entries(E)) {
                            let e = (0, n().WS)({
                                cellId: void 0,
                                recordId: null == (I = t[0].pointer) ? void 0 : I.id,
                                spaceId: void 0
                            });
                            A.push({
                                endpointType: "space",
                                cellHeaders: e,
                                requests: t
                            })
                        }
                        await c().lX(A, 20, async r => {
                            let {
                                requests: a,
                                cellHeaders: o,
                                endpointType: n
                            } = r;
                            if ("main" === n) {
                                let r = await T.api.callApi({
                                    eventName: "syncRecordValuesMain",
                                    environment: T,
                                    data: {
                                        requests: a
                                    },
                                    userId: "undefined" === e ? void 0 : e,
                                    headers: o ? ? {},
                                    abortSignal: t
                                });
                                b.push(r)
                            } else if ("space" === n)
                                for await (let r of T.api.callInitialFanoutApi({
                                    eventName: "syncRecordValuesSpace",
                                    environment: T,
                                    data: {
                                        requests: a
                                    },
                                    userId: "undefined" === e ? void 0 : e,
                                    headers: o ? ? {},
                                    abortSignal: t
                                })) b.push(r);
                            else(0, u().HB)(n)
                        });
                        let M = s().RecordMapWithRole.create();
                        for (let e of b) {
                            if ("failed" === e.type) {
                                r || (r = e.error), a().rateLimitedLog({
                                    level: "error",
                                    from: "syncRecordValuesBatched",
                                    type: "responseError",
                                    error: (0, l().convertErrorToLog)(e.error),
                                    actor: y
                                });
                                continue
                            }
                            M.assign(s().RecordMapWithRole.create(e.data.recordMap))
                        }
                        if (r) throw r;
                        for (let {
                                request: e,
                                index: t
                            } of (g().A.addFromRecordMapWithRole(M), g().A.isEmpty() || p().l({
                                environment: T
                            }), S))
                            if (e.pointer) {
                                let r = M.getValue(e.pointer),
                                    a = M.getRole(e.pointer);
                                a && (v[t] = {
                                    value: r,
                                    role: a
                                })
                            }
                    }
                    return v
                },
                batchSize: 500,
                maxWorkers: 2,
                requestDelayMs: 20,
                requestTimeoutMs: 30 * r(627179).TD,
                abortOnTimeout: () => r(218744).default.checkGate({
                    gateName: "batched_queue_timeout_abort"
                })
            });
            async function T(e, t) {
                if (t.pointer && (0, r(496282).TX)(t.pointer)) try {
                    let r = await v.enqueue({
                        environment: e,
                        args: t
                    });
                    if (!r && -1 === t.version) return {
                        value: void 0,
                        role: "editor"
                    };
                    return r
                } catch (s) {
                    var o;
                    console.error("syncRecordValue error", s);
                    let e = s instanceof Error && "Timed out." === s.message,
                        n = r(218744).default.checkGate({
                            gateName: "batched_queue_timeout_abort"
                        });
                    if (a().rateLimitedLog({
                            level: "error",
                            from: "syncRecordValue",
                            type: "syncRecordValueError",
                            error: (0, l().convertErrorToLog)(s),
                            data: {
                                miscDataToConvertToString: {
                                    isTimeout: e,
                                    table: null == (o = t.pointer) ? void 0 : o.table,
                                    hasAbortGate: n
                                }
                            }
                        }), e && (0, r(104310).u)({
                            event: {
                                eventName: "batched_queue_timeout",
                                eventProperties: {
                                    queue_name: "syncRecordValue",
                                    has_abort_gate: n
                                }
                            }
                        }), t.shouldThrowError) throw s
                }
            }
        },
        138635: (e, t, r) => {
            r.d(t, {
                B: () => a
            });
            async function a(e) {
                let {
                    inMemoryRecordCache: t,
                    pointer: a,
                    userId: o,
                    environment: n,
                    forceFetchRemoteRecordSource: s
                } = e, {
                    defaultRecordCache: i
                } = n, l = await (0, r(130925).e)(n, {
                    pointer: a,
                    userId: o,
                    version: -1
                });
                l && ((0, r(56477).o)({
                    inMemoryRecordCache: t,
                    persistedRecordCache: i.persistedRecordCache,
                    pointer: a,
                    userId: o
                }), (0, r(11266).P)({
                    currentUserId: n.currentUser.id,
                    defaultRecordCache: n.defaultRecordCache,
                    inMemoryRecordCache: t,
                    pointer: a,
                    userId: o,
                    model: r(993189).Bj6.fromValue(a.table, l.value),
                    role: l.role,
                    updatePaths: [
                        []
                    ],
                    debugSource: "forceFetchRemoteRecord",
                    forceFetchRemoteRecordSource: s
                }))
            }
        },
        158392: (e, t, r) => {
            let a;
            r.r(t), r.d(t, {
                DEBUG_ONLY_onBlockRecordValueSet: () => d,
                DEBUG_ONLY_registerBlockRecordValueSetHandler: () => c,
                getDebugIdSources: () => l,
                setBlockIdDebugSource: () => i,
                setupRecordCacheDebugging: () => s
            });
            let o = !1,
                n = new(r(759303)).q({
                    max: 1e4
                });

            function s(e) {
                e || (o = !0)
            }

            function i(e, t) {
                o && (n.has(e) || n.set(e, t))
            }

            function l() {
                return n
            }

            function c(e) {
                a = e
            }

            function d(e) {
                var t;
                null == (t = a) || t(e)
            }
        },
        162782: (e, t, r) => {
            r.d(t, {
                s: () => a
            });

            function a(e) {
                return !!e.isDefined() && !!e.isCollectionView() && "app_container" === e.getFormatStore().getKeyStore("collection_view_sub_type").getValue() && e.getFormat().app_config_uri !== r(11448).d0
            }
        },
        173157: (e, t, r) => {
            r.d(t, {
                z: () => a
            }), r(16280);

            function a(e) {
                let {
                    store: t,
                    transaction: a
                } = e, o = t.path, n = e.data;
                n && t.table === r(832375).evP && (r(381453).n4(o, []) ? (n = function(e) {
                    let {
                        properties: t,
                        crdt_data: r,
                        crdt_format_version: a,
                        ...o
                    } = e;
                    return o
                }(n), n = r(455472).hA(n)) : r(381453).n4(o, ["properties"]) && ("title" in n || (n = r(455472).hA(n)))), (0, r(421439).y4)({
                    store: t,
                    operation: {
                        pointer: t.pointer,
                        path: o,
                        command: "update",
                        args: n
                    },
                    transaction: a
                })
            }
        },
        210822: (e, t, r) => {
            function a() {}
            r.d(t, {
                F8: () => i,
                P$: () => s
            }), r(16280);
            let o = {
                    onBeforeTransactionEnqueue: a,
                    onBeforeTaskSave: a,
                    onCreateTransactionError: a,
                    onTaskCreated: ({
                        task: e
                    }) => e,
                    onWillEnqueueTask: a,
                    onLocalTransactionCommitError: a,
                    onTransactionOperationApplied: a,
                    onTaskQueueDrained: a,
                    onServerTransactionCommitError: a,
                    onTasksSaved: a,
                    onTaskError: a
                },
                n = !1;

            function s(e) {
                if (n) throw Error("transactionLifecycleHooks already initialized");
                o = e, n = !0
            }

            function i() {
                return o
            }
        },
        267318: (e, t, r) => {
            function a(e, t) {
                return e instanceof r(542376).r && e.failedErrors.some(({
                    error: e
                }) => "SaveTransactionsApiUnretryableError" === e.name && t.includes(e.status))
            }

            function o(e) {
                return a(e, [413])
            }
            r.d(t, {
                A: () => o,
                U: () => a
            }), r(898992), r(737550)
        },
        377796: (e, t, r) => {
            let a;
            r.r(t), r.d(t, {
                DEADLOCK_WARNING_TIMEOUT_MS: () => x,
                createAndCommit: () => D,
                createAndCommitAsync: () => F,
                createAndCommitOrAppend: () => P
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(803949), r(581454);
            var o = () => r(962299),
                n = () => r(56477),
                s = () => r(11266),
                i = () => r(167381),
                l = () => r(464011),
                c = () => r(698405),
                d = () => r(970831),
                u = () => r(356912),
                p = () => r(547131),
                g = () => r(519219),
                h = () => r(97746),
                f = () => r(695906),
                m = () => r(360851),
                v = () => r(637306),
                T = () => r(190623),
                k = () => r(457915),
                I = () => r(993189);
            class S {
                getInitialRecord;
                getFinalRecord;
                operationPointers = [];
                constructor(e, t) {
                    this.getInitialRecord = I().b4_.fromRecordMapWithRole(e.initialRecordMap), this.getFinalRecord = I().b4_.fromGetRecordValueFn(t.makeGetRecordValueFn(e.userId));
                    const a = new(r(700135)).A(r(694402).jV);
                    for (const t of e.operations) a.add(t.pointer);
                    this.operationPointers = a.valuesArray()
                }
                getOperationPointers() {
                    return this.operationPointers
                }
                static create(e) {
                    let t;
                    for (let r of e.stores)
                        if (t) {
                            if (t !== r.inMemoryRecordCache) return
                        } else t = r.inMemoryRecordCache;
                    if (t) return new S(e, t)
                }
            }
            var y = () => r(832375);
            let b = (0, r(222024).t)();
            class _ {
                transaction;
                timeMs;
                userId;
                skipUpdatingEditedMetadata;
                seenStoreIds;
                operations;
                constructor(e) {
                    this.transaction = e.transaction, this.timeMs = e.timeMs, this.userId = e.userId, this.skipUpdatingEditedMetadata = e.skipUpdatingEditedMetadata, this.seenStoreIds = new Set, this.operations = new Map
                }
                addStoreWithLargeSubtree(e) {
                    this.addStoreInternal({
                        store: e
                    }, {
                        shouldDebounceEditedTime: !0
                    })
                }
                addStore(e) {
                    this.addStoreInternal(e, {
                        shouldDebounceEditedTime: !1
                    })
                }
                getAllOperations() {
                    return Array.from(this.operations.entries())
                }
                addStoreInternal(e, t) {
                    let {
                        store: a
                    } = e;
                    if (a.inMemoryRecordCache.recordHasOverride({
                            pointer: a.pointer,
                            userId: this.transaction.userId
                        }) || this.seenStoreIds.has(a.id)) return;
                    this.seenStoreIds.add(a.id);
                    let o = {};
                    r(381453).h1(o, this.collectCreationMetadata(e), this.skipUpdatingEditedMetadata ? {} : this.collectEditionMetadata(a, t.shouldDebounceEditedTime)), Object.keys(o).length > 0 && this.operations.set(a, {
                        pointer: a.pointer,
                        path: [],
                        command: "update",
                        args: o
                    })
                }
                collectCreationMetadata(e) {
                    let {
                        store: t,
                        transactionState: a
                    } = e, o = {};
                    if (t instanceof r(678703).md && (!a || a.getInitialRecord(t.pointer)) || t instanceof r(678703).NU && null != a && a.getInitialRecord(t.pointer)) return o;
                    if ((t.isDefined() ? t.getCreatedById() : void 0) || (o.created_by_id = this.userId, o.created_by_table = y().oo9), !(t.isDefined() ? t.getCreatedTime() : void 0)) {
                        if (t instanceof r(678703).NU && function(e) {
                                let {
                                    experimentService: t,
                                    spaceId: a
                                } = e;
                                return !!a && t.checkGate({
                                    gateName: "workflow_created_time_diagnostics",
                                    actor: r(810016).S,
                                    customIDs: {
                                        spaceId: a
                                    },
                                    disableExposureLogging: !0
                                })
                            }({
                                experimentService: r(218744).default,
                                spaceId: t.pointer.spaceId
                            })) {
                            let e, r, o = (r = (e = t.isDefined()) ? t.v("created_time") : void 0, e ? 0 === r ? {
                                backfillReason: "createdTimeZero",
                                rawCreatedTime: r
                            } : void 0 === r ? {
                                backfillReason: "createdTimeMissing",
                                rawCreatedTime: r
                            } : null === r ? {
                                backfillReason: "createdTimeNull",
                                rawCreatedTime: r
                            } : {
                                backfillReason: "unexpectedFalseyCreatedTime",
                                rawCreatedTime: r
                            } : {
                                backfillReason: "storeUndefined",
                                rawCreatedTime: r
                            });
                            b.log({
                                level: "warning",
                                from: "MetadataUpdateManager",
                                type: "workflowCreatedTimeBackfilledOnClient",
                                data: {
                                    miscDataToConvertToString: {
                                        spaceId: t.pointer.spaceId,
                                        workflowId: t.id,
                                        rawCreatedTime: o.rawCreatedTime,
                                        newCreatedTime: this.timeMs,
                                        backfillReason: o.backfillReason,
                                        initialRecordState: function(e) {
                                            let {
                                                transactionState: t,
                                                store: r
                                            } = e;
                                            return t ? void 0 !== t.getInitialRecord(r.pointer) ? "hasInitialRecord" : "missingInitialRecord" : "noTransactionState"
                                        }({
                                            transactionState: a,
                                            store: t
                                        })
                                    }
                                }
                            })
                        }
                        o.created_time = this.timeMs
                    }
                    return o
                }
                collectEditionMetadata(e, t) {
                    let a = {},
                        o = e.isDefined() ? e.getLastEditedTime() : -1,
                        n = t ? this.hasDebounceEnded(o, this.timeMs) : o !== this.timeMs;
                    return n && (a.last_edited_time = this.timeMs), (e instanceof r(678703).Bv || e instanceof r(678703).md || e instanceof r(678703).SL || e instanceof r(678703).dn || e instanceof r(678703).K_ || e instanceof r(678703).nH || e instanceof r(678703).NU) && ((e.isDefined() ? e.getLastEditedById() : void 0) !== this.userId || n) && (a.last_edited_by_id = this.userId, a.last_edited_by_table = y().oo9), a
                }
                hasDebounceEnded(e, t) {
                    return (0, r(695216).WY)(e) !== (0, r(695216).WY)(t)
                }
            }
            var R = () => r(643646),
                E = () => r(101787);
            r(18107), r(967357), r(737550);
            let C = new Set,
                A = 0,
                M = (0, r(109939).YK)({
                    invalidBlockOperation: {
                        defaultMessage: "Hey there! Blocks cannot be moved inside of themselves.",
                        id: "saveChanges.errorDialog.blocksCannotBeMovedInsideSelf.message"
                    }
                }),
                x = 25 * r(627179).TD;

            function O(e) {
                var t, a;
                let {
                    environment: o,
                    userId: n,
                    userAction: s,
                    cellTarget: i,
                    isUndoTransaction: l,
                    isTemplateInstantiationTransaction: c
                } = e, d = void 0 !== i && "main" !== i ? i.spaceWithId : void 0, u = Error("Potential transaction deadlock"), p = new(r(651814)).Z({
                    spaceId: d,
                    userId: n || o.currentUser.id,
                    deadlockTimeoutMs: x,
                    onDeadlockWarning: () => {
                        C.delete(p);
                        let e = p.getUserActionForAnalyticsPurposesOnly();
                        (0, r(864053).NK)(`A ${e} transaction hasn't been committed in ${x} ms.`, [
                            ["stack =", u.stack]
                        ]), r(419750).Fg(u, {
                            extra: {
                                operations_count: p.operations.length
                            },
                            tags: {
                                userAction: e
                            }
                        }), r(508297).JV({
                            operations_count: p.operations.length,
                            user_action: e
                        });
                        let t = p.operations.map(e => ({
                            command: e.command,
                            stringifiedArgs: (0, r(416607).safelyConvertAnyToString)({
                                path: e.path,
                                pointer: e.pointer
                            })
                        }));
                        r(773352).log({
                            level: "warning",
                            from: "transactionActions",
                            type: "transactionDeadlockWarning",
                            data: {
                                userAction: e,
                                operations: t
                            }
                        }), (0, r(210822).F8)().onCreateTransactionError({
                            error: new(r(875893)).mk(e ? ? "Unknown user action", p.operations.length),
                            environment: o
                        })
                    },
                    debugLogging: {
                        logToConsole: r(900226).A.isDebuggingEnabled(),
                        collect: !1
                    },
                    isUndoTransaction: l,
                    isTemplateInstantiationTransaction: c
                });
                return null != (t = p.debugLogging) && t.collect && p.postEnqueueActions.push(() => {
                    let e = p.getDebugLog();
                    0 === e.length || p.isLocal || r(773352).log({
                        level: "info",
                        from: "transactionActions",
                        type: "transactionDebugLog",
                        data: {
                            transactionId: p.id,
                            userAction: p.getUserActionForAnalyticsPurposesOnly(),
                            userFlow: p.getUserFlowForAnalyticsPurposesOnly(),
                            miscDataToConvertToString: e
                        }
                    })
                }), p.savePreTransactionSnapshot(), p.annotateWithUserAction(s), C.add(p), null == (a = r(900226).A.provider) || a.onTransactionEvent("create", p), p
            }

            function w(e) {
                var t;
                for (let a of (null == (t = r(900226).A.provider) || t.onTransactionEvent("cancel", e), e.cancelDeadlockWarning(), C.delete(e), r(381453).hS(e.stores, e => e.id))) {
                    (0, n().o)({
                        inMemoryRecordCache: a.inMemoryRecordCache,
                        persistedRecordCache: a.environment.defaultRecordCache.persistedRecordCache,
                        pointer: a.pointer,
                        userId: a.userId
                    });
                    let t = e.initialRecordMap.getValue(a.pointer),
                        r = e.initialRecordMap.getRole(a.pointer);
                    r && (0, s().P)({
                        currentUserId: a.environment.currentUser.id,
                        defaultRecordCache: a.environment.defaultRecordCache,
                        inMemoryRecordCache: a.inMemoryRecordCache,
                        pointer: a.pointer,
                        userId: a.userId,
                        updatePaths: [
                            []
                        ],
                        model: I().Bj6.fromValue(a.pointer.table, t),
                        role: r,
                        debugSource: "cancelTransaction"
                    })
                }
                for (let t of e.postCancelCallbacks) t()
            }

            function B(e) {
                let t = (0, r(210822).F8)(),
                    n = "paste" === e.transaction.getUserActionForAnalyticsPurposesOnly() ? Error("SaveTransactionCallStack") : void 0;
                return (0, r(975162).qt)(async (s, b) => {
                    var E, x, O;
                    C.delete(e.transaction);
                    let B = Array.from(C).filter(e => e.operations.length > 0);
                    if (B.length > 0 && r(508297).JW({
                            committed_transaction_user_action: e.transaction.getUserActionForAnalyticsPurposesOnly(),
                            first_uncommitted_transaction_user_action: B[0].getUserActionForAnalyticsPurposesOnly(),
                            uncommitted_transaction_count: B.length
                        }), 0 === e.transaction.operations.length) return null == (x = r(941701).transactionQueue.logEmptyTaskForDebugging) || x.call(r(941701).transactionQueue, e.transaction.getUserActionForAnalyticsPurposesOnly()), e.transaction.committed = !0, e.transaction.done(), null == (O = r(900226).A.provider) || O.onTransactionEvent("commitEmpty", e.transaction), s(void 0);
                    void 0 === e.canUndo && (e.canUndo = !0);
                    let {
                        transaction: P,
                        canUndo: D
                    } = e, L = function(e) {
                        for (let t of e.stores)
                            if ("block" === t.table) {
                                let e = (0, T().K)(t);
                                if (e && (0, k().g)(e).find(e => e.table === t.table && e.id === t.id)) return o().A.formatMessage(M.invalidBlockOperation)
                            }
                    }(P);
                    if (L) {
                        w(P), t.onLocalTransactionCommitError({
                            error: new(r(875893)).Yo(L),
                            environment: e.environment
                        }), s(void 0);
                        return
                    }
                    for (let t of (null == a || a(e.environment, P), P.cancelDeadlockWarning(), P.preEnqueueActions)) t();
                    ! function(e) {
                        let {
                            environment: t,
                            transaction: a,
                            skipUpdatingEditedMetadata: o
                        } = e, n = S.create(a), s = new _({
                            transaction: a,
                            userId: t.currentUser.adminUserId ? r(514214).mc.id : t.currentUser.id,
                            skipUpdatingEditedMetadata: o,
                            timeMs: Date.now()
                        });
                        for (let e of r(381453).hS(a.stores, e => e.id)) {
                            var T, k;
                            if (e.table === y().evP) {
                                let t = d().B.createChildStore(e, e.pointer);
                                if (t.canEdit() && s.addStore({
                                        store: t
                                    }), !t.isNavigableBlock()) {
                                    let e = (0, v().N)(t);
                                    e && e.canEdit() && (e instanceof d().B && (null == (T = e.getParentPointer()) ? void 0 : T.table) === y().C0E ? s.addStore({
                                        store: e
                                    }) : s.addStoreWithLargeSubtree(e))
                                }
                            } else if (e.table === y().SNf) {
                                if (e.path.length) continue;
                                let t = e.pointer,
                                    r = a.initialRecordMap.getValue(t),
                                    o = e.getValue();
                                (void 0 === r || R().T(I().Bj6.fromValue(y().SNf, r), I().Bj6.fromValue(y().SNf, o))) && s.addStore({
                                    store: g().j.createChildStore(e, e.pointer)
                                })
                            } else if (e.table === y().NXh) s.addStoreWithLargeSubtree(f().SpaceStore.createChildStore(e, e.pointer));
                            else if (e.table === y().VlP) {
                                let t = u().m.createChildStore(e, e.pointer),
                                    r = t.getParentBlockStore();
                                s.addStore({
                                    store: t,
                                    transactionState: n
                                }), r && r.canEdit() && s.addStore({
                                    store: r
                                })
                            } else if (e.table === y().Gy1) {
                                let t = p().p.createChildStore(e, e.pointer);
                                t.canAdmin() && s.addStore({
                                    store: t
                                });
                                let r = t.getParentBlockStore() ? ? (null == (k = t.getParentDashboardViewStoreOfWidget()) ? void 0 : k.getParentBlockStore());
                                r && r.canEdit() && s.addStoreWithLargeSubtree(r)
                            } else if (e.table === y().yBS) {
                                if (e.canEdit()) {
                                    let t = c().d.createChildStore(e, e.pointer);
                                    s.addStore({
                                        store: t
                                    });
                                    let r = t.getParentBlockStore();
                                    r && r.canEdit() && s.addStore({
                                        store: r
                                    })
                                }
                            } else if (e.table === y().SC1) {
                                if (e.canEdit()) {
                                    let t = l().b.createChildStore(e, e.pointer).getParentStore();
                                    t && t.canEdit() && s.addStore({
                                        store: t
                                    })
                                }
                            } else if (e.table === y().zx0) {
                                if (e.canEdit()) {
                                    let t = h().K.createChildStore(e, e.pointer);
                                    s.addStore({
                                        store: t
                                    });
                                    let r = t.getParentPointer();
                                    if ((null == r ? void 0 : r.table) === y().Gy1) {
                                        let e = p().p.createChildStore(t, r);
                                        e.canAdmin() && s.addStore({
                                            store: e
                                        });
                                        let a = e.getParentBlockStore();
                                        a && a.canEdit() && s.addStoreWithLargeSubtree(a)
                                    }
                                }
                            } else if (e.table === y().YVp) {
                                if (e.canEdit()) {
                                    let t = i().n.createChildStore(e, e.pointer);
                                    s.addStore({
                                        store: t
                                    })
                                }
                            } else if (e.table === y().C0E && e.pointer.table === y().C0E && e.canEdit()) {
                                let t = m().N.createChildStore(e, e.pointer);
                                s.addStore({
                                    store: t,
                                    transactionState: n
                                })
                            }
                        }
                        s.getAllOperations().forEach(([e, t]) => (0, r(421439).y4)({
                            transaction: a,
                            store: e,
                            operation: t
                        }))
                    }({
                        environment: e.environment,
                        transaction: P,
                        skipUpdatingEditedMetadata: e.skipUpdatingEditedMetadata
                    }), D && function(e) {
                        if (function(e) {
                                for (let t of e.stores)
                                    if (t.inMemoryRecordCache.excludeFromRevisions) return !0;
                                return !1
                            }(e.transaction)) return;
                        let {
                            undoStack: t,
                            invertedTextOperationIdMapper: a
                        } = r(912846).default.state, o = e.currentTime ? ? Date.now(), n = e.transaction.getUserActionForAnalyticsPurposesOnly() ? ? "unknown";
                        if ("string" == typeof e.undoCheckpoint) {
                            let r = t.find(t => t.namedRevisionId === e.undoCheckpoint);
                            r ? (r.transactions.push(e.transaction), r.userActions.push(n)) : t.push({
                                userActions: [n],
                                transactions: [e.transaction],
                                timestamp: o,
                                namedRevisionId: e.undoCheckpoint,
                                undoRedoCount: 0
                            })
                        } else {
                            let a = t.at(-1);
                            !e.undoCheckpoint && a && !a.namedRevisionId && o - a.timestamp <= r(912846).groupIntervalMs && 0 === a.undoRedoCount && a.transactions[0].isLocal === e.transaction.isLocal && a.transactions[0].operations.some(r(305050).ph) === e.transaction.operations.some(r(305050).ph) ? (a.transactions.push(e.transaction), a.userActions.push(n)) : t.push({
                                userActions: [n],
                                transactions: [e.transaction],
                                timestamp: o,
                                undoRedoCount: 0
                            })
                        }
                        r(912846).default.setState({
                            undoStack: t,
                            redoStack: [],
                            invertedTextOperationIdMapper: a
                        }), r(912846).default.emit()
                    }({
                        transaction: P,
                        undoCheckpoint: e.undoCheckpoint ? ? P.undoCheckpoint
                    }), null == (E = r(900226).A.provider) || E.onTransactionEvent("commit", P);
                    let F = t.onBeforeTransactionEnqueue({
                        transaction: P,
                        environment: e.environment
                    });
                    if (F) try {
                        await F
                    } catch (e) {
                        r(773352).log({
                            level: "error",
                            from: "transactionActions",
                            type: "onBeforeTransactionEnqueue_error",
                            error: (0, r(416607).convertErrorToLog)(e),
                            data: {
                                message: "Error in onBeforeTransactionEnqueue side-effect",
                                miscDataToConvertToString: {
                                    transactionId: P.id
                                }
                            }
                        }), w(P), s(void 0);
                        return
                    }
                    if (P.isLocal) {
                        for (let e of P.postEnqueueActions) e();
                        P.done(), s(void 0)
                    } else {
                        let a = (e, t) => {
                                P.done(e), t && r(419750).Om(n, {
                                    tags: {
                                        transactionId: P.id
                                    }
                                }), e ? b(e) : s(void 0)
                            },
                            o = Date.now();
                        o < A && r(508297).hQ({
                            regression_amount: A - o
                        }), A = o;
                        let i = (0, r(386281).Sk)({
                                transaction: P,
                                timestamp: o,
                                callback: a
                            }),
                            l = i;
                        try {
                            l = t.onTaskCreated({
                                environment: e.environment,
                                task: i
                            })
                        } catch (e) {
                            r(773352).log({
                                level: "error",
                                from: "transactionActions",
                                type: "onTaskCreated_error",
                                error: (0, r(416607).convertErrorToLog)(e),
                                data: {
                                    message: "Error in onTaskCreated side-effect",
                                    spaceId: P.spaceId,
                                    transactionId: P.id,
                                    miscDataToConvertToString: {
                                        transactionDebugLog: P.getDebugLog()
                                    }
                                }
                            })
                        }
                        try {
                            t.onWillEnqueueTask({
                                environment: e.environment,
                                task: l,
                                transaction: P
                            })
                        } catch (e) {
                            r(773352).log({
                                level: "error",
                                from: "transactionActions",
                                type: "onWillEnqueueTask_error",
                                error: (0, r(416607).convertErrorToLog)(e),
                                data: {
                                    message: "Error in onWillEnqueueTask side-effect",
                                    spaceId: P.spaceId,
                                    transactionId: P.id,
                                    miscDataToConvertToString: {
                                        transactionDebugLog: P.getDebugLog()
                                    }
                                }
                            })
                        }
                        for (let o of (r(941701).transactionQueue.enqueueTask(l).catch(o => {
                                if (r(773352).log({
                                        level: "error",
                                        from: "transactionActions",
                                        type: "enqueueTask",
                                        error: (0, r(416607).convertErrorToLog)(o)
                                    }), !e.environment.device.isMobileNative || "SqliteOutOfSpace" !== o.name) {
                                    let a;
                                    o instanceof Error ? a = o : (a = Error(o.message ? ? String(o)), o.type && (a.name = o.type)), t.onLocalTransactionCommitError({
                                        error: new(r(875893)).RZ(a, P.id),
                                        environment: e.environment
                                    })
                                }
                                w(P), a(o)
                            }), P.postEnqueueActions)) o()
                    }
                    let N = P.userId;
                    for (let [e, t] of P.newlyCreatedStoresForPermissionInference.entries()) {
                        let {
                            store: a
                        } = t, o = a.inMemoryRecordCache.getRole({
                            pointer: e,
                            userId: P.userId
                        }), n = function e(t) {
                            let {
                                transaction: a,
                                store: o
                            } = t, {
                                pointer: n
                            } = o, s = o.inMemoryRecordCache.getRole({
                                pointer: n,
                                userId: a.userId
                            });
                            if (s && s !== r(421439).yk) return s;
                            let i = a.newlyCreatedStoresForPermissionInference.get(n);
                            if (!i) return r(421439).yk;
                            if (i.inferredPermissionFromParent) return i.inferredPermissionFromParent;
                            let l = o.getParentStore();
                            if (!l || l.table !== y().evP || !l.isReady()) return r(421439).yk;
                            let c = e({
                                store: l,
                                transaction: a
                            });
                            return i.inferredPermissionFromParent = c, c
                        }({
                            transaction: P,
                            store: a
                        });
                        n !== o && a.inMemoryRecordCache.setModelAndRole({
                            pointer: e,
                            userId: N
                        }, a.getModel(), n)
                    }
                    P.committed = !0
                })
            }

            function P(e) {
                let {
                    transaction: t,
                    ...r
                } = e;
                return t ? r.perform(t) : D(r).performResult
            }

            function D(e) {
                let {
                    userAction: t,
                    environment: a,
                    userId: o,
                    perform: n,
                    canUndo: s,
                    undoCheckpoint: i,
                    transactionTooBigFallback: l,
                    skipUpdatingEditedMetadata: c,
                    skipDefaultPostPerformValidationChecks: d,
                    useSudoMode: u,
                    cellTarget: p,
                    isUndoTransaction: g,
                    isTemplateInstantiationTransaction: h,
                    suppressErrorDialogForStatuses: f
                } = e;
                return r(363256).e.withListenerIgnored(() => {
                    let m, v = O({
                        environment: a,
                        userId: o,
                        userAction: t,
                        cellTarget: p,
                        isUndoTransaction: g,
                        isTemplateInstantiationTransaction: h
                    });
                    u && (v.useSudoMode = !0), f && (v.suppressErrorDialogForStatuses = f);
                    try {
                        for (let e of (m = n(v), d || function(e) {
                                if (!e.isLocal)
                                    for (let t of e.stores) {
                                        let r = t.inMemoryRecordCache.checkRecordForTemporaryData(t);
                                        if (r) throw new(E()).yI4(`Server-bound transaction "${e.getUserActionForAnalyticsPurposesOnly()}" is manipulating a store with temporary local changes from an in-memory record cache named "${r.name}"!`)
                                    }
                            }(v), v.postPerformAssertions)) e()
                    } catch (e) {
                        throw w(v), L({
                            environment: a,
                            transaction: v,
                            type: "createAndCommit",
                            error: e
                        }), e
                    } finally {}
                    return l && (0, r(386281).vY)(v) ? (w(v), D({ ...e,
                        perform: l,
                        transactionTooBigFallback: void 0,
                        userAction: `${t} transactionTooBigFallback`
                    })) : {
                        performResult: m,
                        serverCommitResult: B({
                            environment: a,
                            transaction: v,
                            canUndo: s,
                            undoCheckpoint: i,
                            skipUpdatingEditedMetadata: c,
                            isUndoTransaction: g,
                            isTemplateInstantiationTransaction: h
                        }).catch(e => {
                            throw L({
                                environment: a,
                                transaction: v,
                                type: "commit",
                                error: e
                            }), e
                        }),
                        transactionId: v.id
                    }
                })
            }

            function L(e) {
                let {
                    environment: t,
                    transaction: a,
                    type: o,
                    error: n
                } = e, s = a.getUserActionForAnalyticsPurposesOnly(), i = a.getUserFlowForAnalyticsPurposesOnly(), l = a.getOperationForAnalyticsPurposesOnly(), c = a.getDebugTagsForAnalyticsPurposesOnly(), d = c && (0, r(438689).Cx)(c), u = r(419750).Fg(n, {
                    tags: {
                        userAction: s,
                        userFlow: i,
                        operation: l,
                        ...d
                    }
                });
                r(773352).log({
                    level: "error",
                    from: "transactionActions",
                    type: o,
                    error: (0, r(416607).convertErrorToLog)(n),
                    data: {
                        userAction: s,
                        userFlow: i,
                        debugTags: c,
                        spaceId: a.spaceId,
                        transactionId: a.id,
                        miscDataToConvertToString: {
                            transactionDebugLog: a.getDebugLog()
                        }
                    },
                    sentryEventId: u
                });
                let p = `Transaction failed (${s}, id ${a.id})`,
                    g = a.suppressErrorDialogForStatuses,
                    h = !!(g && (0, r(267318).U)(n, g)),
                    f = n instanceof r(542376).r ? n.debugMessage ? ? n.message : n instanceof Error ? n.message : String(n),
                    m = {
                        Transaction: a.id
                    };
                s && (m["User Action"] = s), (0, r(210822).F8)().onServerTransactionCommitError({
                    error: new(r(875893)).gQ({
                        message: f,
                        environment: t,
                        transactionId: a.id,
                        userAction: s,
                        originalError: n instanceof Error ? n : void 0,
                        sentryId: u,
                        metadata: m
                    }),
                    environment: t,
                    suppressDialog: h
                }), console.log(p)
            }
            async function F(e) {
                let t, {
                        environment: a,
                        perform: o,
                        waitForServerCommit: n,
                        userAction: s,
                        userId: i,
                        canUndo: l,
                        undoCheckpoint: c,
                        skipUpdatingEditedMetadata: d,
                        useSudoMode: u,
                        isUndoTransaction: p,
                        isTemplateInstantiationTransaction: g,
                        cellTarget: h
                    } = e,
                    f = O({
                        environment: a,
                        userId: i,
                        userAction: s,
                        cellTarget: h,
                        isUndoTransaction: p,
                        isTemplateInstantiationTransaction: g
                    });
                u && (f.useSudoMode = !0);
                try {
                    for (let e of (t = await o(f), f.postPerformAssertions)) e()
                } catch (n) {
                    f.cancelDeadlockWarning();
                    let e = f.getUserActionForAnalyticsPurposesOnly(),
                        t = f.getOperationForAnalyticsPurposesOnly();
                    C.delete(f);
                    let o = f.operations.length > 0;
                    throw o && r(508297).NX({
                        user_action: e,
                        operation_count: f.operations.length
                    }), r(419750).Fg(n, {
                        tags: {
                            userAction: e,
                            operation: t,
                            transactionOperationCount: f.operations.length
                        }
                    }), r(773352).log({
                        level: "error",
                        from: "transactionActions",
                        type: "createAndCommitAsync",
                        error: (0, r(416607).convertErrorToLog)(n),
                        data: {
                            message: o ? `POSSIBLE DATA LOSS: asynchronous transaction had ${f.operations.length} operations` : void 0,
                            userAction: e
                        }
                    }), (0, r(210822).F8)().onLocalTransactionCommitError({
                        error: new(r(875893)).hc(e, n instanceof Error ? n : Error(String(n))),
                        environment: a
                    }), n
                }
                let m = B({
                    environment: a,
                    transaction: f,
                    canUndo: l,
                    undoCheckpoint: c,
                    skipUpdatingEditedMetadata: d
                });
                return n && await m, {
                    performResult: t,
                    serverCommitResult: m,
                    transactionId: f.id
                }
            }
        },
        386281: (e, t, r) => {
            r.d(t, {
                He: () => c,
                Sk: () => n,
                lz: () => o,
                vY: () => s,
                vs: () => i
            }), r(944114);
            var a = () => r(381453);

            function o(e) {
                if (0 === e.length) return {
                    tasks: []
                };
                let t = {
                    tasks: [],
                    userId: e[0].userId
                };
                for (let r of e) {
                    if (t.userId !== r.userId) break;
                    if (JSON.stringify(a().qI(t.tasks, e => e.operations)).length >= i) {
                        0 === t.tasks.length && t.tasks.push(r);
                        break
                    }
                    t.tasks.push(r)
                }
                return t
            }

            function n(e) {
                let {
                    transaction: t,
                    timestamp: r,
                    callback: a,
                    maxEditSeq: o
                } = e;
                return {
                    id: t.id,
                    userId: t.userId,
                    spaceId: t.spaceId,
                    maxEditSeq: o,
                    debug: {
                        userAction: t.getUserActionForAnalyticsPurposesOnly(),
                        userFlow: t.getUserFlowForAnalyticsPurposesOnly(),
                        tags: t.getDebugTagsForAnalyticsPurposesOnly()
                    },
                    timestamp: r,
                    operations: t.operations.slice(),
                    callback: a,
                    useSudoMode: t.useSudoMode,
                    isUndoTransaction: t.isUndoTransaction,
                    isTemplateInstantiationTransaction: t.isTemplateInstantiationTransaction,
                    suppressErrorDialogForStatuses: t.suppressErrorDialogForStatuses
                }
            }

            function s(e) {
                return JSON.stringify(n({
                    transaction: e,
                    timestamp: Date.now(),
                    callback: void 0
                })).length > c()
            }
            let i = 1e5,
                l = 1e3 * r(438689).hQ * .8;

            function c() {
                return r(218744).default.checkGate({
                    gateName: "increased_transaction_size_limit"
                }) ? l : i
            }
        },
        395315: (e, t, r) => {
            r.d(t, {
                Fk: () => l,
                UY: () => o,
                f5: () => i,
                fW: () => n,
                zG: () => s
            });
            let a = 4 * r(695216).pT,
                o = new Map([
                    [r(11448).yx.Status, "status"],
                    ["title", "title"],
                    [r(11448).yx.Priority, "priority"],
                    [r(11448).yx.Tags, "tags"],
                    [r(11448).yx.Assign, "assignee"],
                    [r(11448).yx.DueDate, "duedate"],
                    [r(11448).yx.SubTaskRelation, "subtasks"],
                    [r(11448).yx.ParentTaskRelation, "parent_task"],
                    [r(11448).yx.BlockingRelation, "blocking_tasks"],
                    [r(11448).yx.BlockedRelation, "blocked_by_tasks"],
                    [r(11448).yx.TaskToProjectRelation, "task_to_project"]
                ]);

            function n({
                isUserOnEnterprisePlan: e,
                twoWaySyncEnabled: t,
                canEdit: r,
                isEditableProperty: a,
                doesUserHaveOnlyReadPermission: o,
                isSyncing: s,
                isFailedSync: i,
                isOffline: l
            }) {
                if (!a) return "property_not_editable";
                if (!e) return "upgrade_to_enterprise";
                if (!t) return "two_way_sync_not_enabled";
                if (l) return "offline";
                if (o) return "read_only";
                else if (!r) return "connect_to_integration";
                else if (s) return "sync_in_progress";
                else if (i) return "sync_failed";
                else return "full_access"
            }

            function s(e) {
                var t, o;
                return !!(null != e && e.external_collection_type) && ((null == (t = e.sync_state) ? void 0 : t.syncing) === !0 ? !!e.sync_state.last_synced_at && Date.now() - e.sync_state.last_synced_at > Number(r(695216).pT) : null != (o = e.sync_state) && !!o.last_synced_at && Date.now() - e.sync_state.last_synced_at > a)
            }
            r(11448).K4.Status, r(11448).K4.Priority, r(11448).K4.Collaborators, r(11448).K4.CompletionRollup, r(11448).K4.People, r(11448).K4.ProjectDates, r(11448).K4.ProjectToTaskRelation;
            let i = {
                NO_PERMISSION_TO_GET_USER: "NO_PERMISSION_TO_GET_USER",
                NO_PERMISSION_TO_REGISTER_SYSTEM_WEBHOOK: "NO_PERMISSION_TO_REGISTER_SYSTEM_WEBHOOK",
                NO_PERMISSION_TO_GET_PROJECTS: "NO_PERMISSION_TO_GET_PROJECTS",
                NO_PERMISSION_TO_GET_ISSUES: "NO_PERMISSION_TO_GET_ISSUES",
                JIRA_CLOUD_SUBSCRIPTION_EXPIRED: "JIRA_CLOUD_SUBSCRIPTION_EXPIRED",
                NO_API_ACCESS_FOR_ACCOUNT: "NO_API_ACCESS_FOR_ACCOUNT",
                NO_PERMISSION_TO_RUN_REPORTS: "NO_PERMISSION_TO_RUN_REPORTS",
                GROUPINGS_ACROSS_NOT_SUPPORTED: "GROUPINGS_ACROSS_NOT_SUPPORTED",
                NOT_FOUND: "NOT_FOUND",
                SPACE_BOT_INSUFFICIENT_REPORT_ACCESS: "SPACE_BOT_INSUFFICIENT_REPORT_ACCESS",
                USER_BOT_INSUFFICIENT_REPORT_ACCESS: "USER_BOT_INSUFFICIENT_REPORT_ACCESS",
                CANNOT_EDIT_COLLECTION: "CANNOT_EDIT_COLLECTION"
            };

            function l(e) {
                return !!(0, r(722371).O)(i, e)
            }
        },
        421439: (e, t, r) => {
            r.d(t, {
                HY: () => m,
                yk: () => g,
                y4: () => p
            }), r(16280), r(944114), r(898992), r(823215), r(354520), r(430670), r(581454), r(737550);
            var a = () => r(11266),
                o = () => r(517013),
                n = () => r(210822),
                s = () => r(993189);

            function i(e) {
                let {
                    blockValueOrStore: t,
                    textSliceTree: a,
                    role: o,
                    originalTextValue: n
                } = e, s = t instanceof r(970831).B ? (0, r(765483).o9)(t.getValue(), r(83987).v6) : t, i = { ...(0, r(341698).K)({ ...s,
                        crdt_data: void 0
                    }),
                    crdt_data: r(381453).o8(s.crdt_data)
                };
                return r(50631).B4({
                    blockValue: i,
                    textSliceTree: a,
                    originalTextValue: n
                }), {
                    pointer: {
                        table: r(832375).evP,
                        id: i.id,
                        spaceId: i.space_id
                    },
                    newValue: i,
                    role: o,
                    updatePaths: [
                        ["crdt_data", "title"],
                        ["properties", "title"],
                        ["crdt_format_version"],
                        ["discussions"]
                    ]
                }
            }

            function l(e) {
                let {
                    transaction: t,
                    inMemoryRecordCache: a,
                    sourceStore: o,
                    operation: n,
                    debugInfo: s
                } = e, l = (0, r(765483).o9)(o.getValue(), r(83987).v6), p = c(a, o), g = (0, r(765483).o9)(o.getBlockTitleTextSliceTree(), r(83987).cf), h = n.args.targetBlockId === o.id ? o : new(r(970831)).B(o.environment, {
                    table: r(832375).evP,
                    id: n.args.targetBlockId
                });
                return function(e, t, a) {
                        let o = r(10218).y.getPageStoreForBlockStore(e);
                        if (!o) return u("source", e, a);
                        let n = r(10218).y.getPageBlockTrackerForPage(o.pointer);
                        (null == n ? void 0 : n.getPathToBlock(t.pointer.id)) || u("target", t, a)
                    }(o, h, s ? ? new d(t, n)),
                    function(e) {
                        var t, a;
                        let o, n, {
                                transaction: s,
                                inMemoryRecordCache: l,
                                sourceRole: d,
                                sourceValue: u,
                                sourceRootTextSliceTree: p,
                                targetStore: g,
                                operation: h
                            } = e,
                            f = (0, r(765483).o9)(p.findTextSliceTreeContainingItemWithId(h.args.textInstanceId, h.args.textSliceStartItemId), r(83987).Dp);
                        (0, r(765483).MX)(f !== p, "Can not move root node of text slice tree.");
                        let m = p.getTextValue();
                        t = s, a = g, o = (0, r(746473).zH)(a).getValue(), n = (0, r(746473).zH)(a).getRole(), t.initialRecordMap.getRole(a.pointer) || (n ? t.initialRecordMap.setValueAndRole(a.pointer, o, n) : t.initialRecordMap.delete(a.pointer));
                        let v = h.args.targetBlockId === u.id,
                            T = v ? p : (0, r(765483).o9)(g.getBlockTitleTextSliceTree(), r(83987).cf),
                            k = (0, r(765483).o9)(T.findTextSliceTreeContainingItemWithId(h.args.targetTextInstanceId, h.args.targetTextSliceEndItemId, {
                                type: "end"
                            }), r(83987).Dp),
                            I = v ? m : T.getTextValue();
                        f.detachFromParent(), k.appendChild(f);
                        let S = [i({
                            blockValueOrStore: u,
                            role: d,
                            textSliceTree: p,
                            originalTextValue: m
                        })];
                        if (!v) {
                            let e = i({
                                blockValueOrStore: g,
                                role: c(l, g),
                                textSliceTree: T,
                                originalTextValue: I
                            });
                            S.push(e)
                        }
                        return S
                    }({
                        transaction: t,
                        inMemoryRecordCache: a,
                        sourceValue: l,
                        sourceRole: p,
                        sourceRootTextSliceTree: g,
                        targetStore: h,
                        operation: n
                    })
            }

            function c(e, t) {
                return e.getRole({
                    pointer: t.pointer,
                    userId: t.userId
                }) ? ? "editor"
            }
            class d {
                constructor(e, t) {
                    this.transaction = e, this.operation = t
                }
                get() {
                    return {
                        transactionName: this.transaction.getUserActionForAnalyticsPurposesOnly(),
                        operationName: this.operation.command
                    }
                }
            }

            function u(e, t, a) {
                let {
                    transactionName: o,
                    operationName: n
                } = a.get();
                t.inMemoryRecordCache.isSyntheticAssistantData || (0, r(864053).NK)(`The ${e} block store for CRDT text operation "${n}" in transaction "${o}" is not on the page. Undoing the transaction may not work!`, [
                    ["block id =", t.id]
                ])
            }

            function p(e) {
                let {
                    store: t,
                    operation: a,
                    transaction: n
                } = e, {
                    inMemoryRecordCache: s
                } = t;
                if ((0, r(488307).mP)(a)) {
                    let i = (0, r(733622).cQ)({
                        operation: a,
                        getRecordValue: s.makeGetRecordValueFn(n.userId)
                    });
                    for (let i of (0, r(733622).d4)(a, s.makeGetRecordValueFn(n.userId), s.makeGetRecordModelFn(n.userId))) a.additionalUpdatedPointers || (a.additionalUpdatedPointers = []), a.additionalUpdatedPointers.push(i.pointer), h({ ...e,
                        operation: i,
                        isInvertible: !1,
                        store: (0, o().v3)(t, i.pointer)
                    });
                    n.DANGEROUS_pushOperations({
                        operations: [a],
                        invertedOperations: i
                    })
                } else(0, r(488307).$Y)(a) ? h({
                    store: t,
                    operation: a,
                    transaction: n,
                    isInvertible: !0
                }) : (0, r(722371).HB)(a)
            }
            let g = "editor";

            function h(e) {
                var t;
                let o, {
                        store: p,
                        operation: h,
                        transaction: f
                    } = e,
                    {
                        inMemoryRecordCache: m,
                        environment: v,
                        pointer: T,
                        userId: k
                    } = p;
                if (m.assertUnexpired(), f.annotateWithOperation(h.command), null == (t = r(900226).A.provider) || t.onApplyOperation(e), f.committed) throw Error("Transaction has already been committed.");
                let I = (0, r(746473).zH)(p),
                    S = I.getValue(),
                    y = I.getRole(),
                    b = (0, r(305050).ph)(h) ? [] : e.isInvertible ? [r(182830).invertOperation(h, S)].filter(r(722371).O9) : [];
                if (f.initialRecordMap.getRole(T) || (y ? f.initialRecordMap.setValueAndRole(T, S, y) : f.initialRecordMap.delete(T)), (0, r(305050).ph)(h)) {
                    let e = (0, r(148337).oC)(p, r(970831).B, `Expected "${r(970831).B.keyName}", got "${p.table}"`);
                    (function(e) {
                        let {
                            operation: t,
                            blockStore: a
                        } = e, o = t.command;
                        if ("insertText" !== o && "splitText" !== o && "addAnnotation" !== o) return;
                        let n = a.getReadOnlyBlockTitleTextSliceTree(),
                            s = a.getBlockTitleTextSliceTree(),
                            [i, l] = t.args.id,
                            c = (null == n ? void 0 : n.getMaxClockValueForSession(i)) ? ? 0,
                            d = (null == s ? void 0 : s.getMaxClockValueForSession(i)) ? ? 0,
                            u = c === d,
                            p = l < d;
                        (!u || p) && (0, r(104310).u)({
                            event: {
                                eventName: "applying_old_crdt_operation",
                                eventProperties: {
                                    max_known_clocks_match: u,
                                    is_old_operation: p,
                                    command: o
                                }
                            }
                        })
                    })({
                        operation: h,
                        blockStore: e
                    }), o = function(e) {
                        let {
                            transaction: t,
                            inMemoryRecordCache: a,
                            store: o,
                            operation: n
                        } = e, s = n.command;
                        switch (s) {
                            case "insertText":
                            case "deleteText":
                            case "addAnnotation":
                            case "removeAnnotation":
                            case "splitText":
                                var p, g;
                                let h = (0, r(765483).o9)(o.getBlockTitleTextSliceTree(), r(83987).cf);
                                return p = o, g = new d(t, n), r(10218).y.getPageStoreForBlockStore(p) || u("source", p, g),
                                    function(e) {
                                        let {
                                            inMemoryRecordCache: t,
                                            store: a,
                                            operation: o,
                                            textSliceTreeToMutate: n,
                                            originalTextValue: s
                                        } = e, l = o.command;
                                        switch (l) {
                                            case "insertText":
                                                n.applyInsertTextOperation({
                                                    type: l,
                                                    ...o.args
                                                });
                                                break;
                                            case "deleteText":
                                                n.applyDeleteOperation({
                                                    type: l,
                                                    ...o.args
                                                });
                                                break;
                                            case "addAnnotation":
                                            case "removeAnnotation":
                                                n.applyAnnotationOperation({
                                                    type: l,
                                                    ...o.args
                                                });
                                                break;
                                            case "splitText":
                                                n.applySplitOperation({
                                                    type: l,
                                                    ...o.args
                                                }, !0);
                                                break;
                                            default:
                                                (0, r(722371).HB)(l)
                                        }
                                        return [i({
                                            blockValueOrStore: a,
                                            role: c(t, a),
                                            textSliceTree: n,
                                            originalTextValue: s
                                        })]
                                    }({
                                        inMemoryRecordCache: a,
                                        textSliceTreeToMutate: h,
                                        originalTextValue: o.getTitleValue(),
                                        store: o,
                                        operation: n
                                    });
                            case "moveTextSlice":
                                return l({
                                    transaction: t,
                                    inMemoryRecordCache: a,
                                    sourceStore: o,
                                    operation: n
                                });
                            case "moveTextSliceIntoBlock":
                                return function(e) {
                                    let {
                                        transaction: t,
                                        inMemoryRecordCache: a,
                                        sourceStore: o,
                                        operation: n
                                    } = e;
                                    (0, r(765483).MX)(n.args.targetBlockId !== n.pointer.id, "Target block should be different from source block.");
                                    let s = n.args.targetBlockId === o.id ? o : new(r(970831)).B(o.environment, {
                                            table: r(832375).evP,
                                            id: n.args.targetBlockId
                                        }),
                                        i = (0, r(765483).o9)(s.getBlockTitleTextSliceTree(), r(83987).cf).getTextSlice().textInstanceId;
                                    return l({
                                        transaction: t,
                                        inMemoryRecordCache: a,
                                        sourceStore: o,
                                        operation: { ...n,
                                            command: "moveTextSlice",
                                            args: { ...n.args,
                                                targetTextInstanceId: i,
                                                targetSearchLabel: r(363372).DI,
                                                targetTextSliceEndItemId: "end"
                                            }
                                        },
                                        debugInfo: new d(t, n)
                                    })
                                }({
                                    transaction: t,
                                    inMemoryRecordCache: a,
                                    sourceStore: o,
                                    operation: n
                                });
                            case "replaceTextInBlock":
                                throw Error("replaceTextInBlock operation should not be applied on the client");
                            default:
                                (0, r(722371).HB)(s)
                        }
                    }({
                        transaction: f,
                        inMemoryRecordCache: m,
                        store: e,
                        operation: h
                    })
                } else {
                    ! function(e, t) {
                        if (!r(455472).mZ || e.pointer.table !== r(832375).evP) return;
                        let a = t.getUserActionForAnalyticsPurposesOnly();
                        if (!(null != a && a.startsWith("revisionActions"))) switch (e.command) {
                            case "set":
                                if (0 === e.path.length) o({
                                    operation: e,
                                    message: "a new block was not created in a CRDT-aware way!",
                                    advice: "Please use a CRDT-aware function instead, such as recordActions.createBlock().",
                                    successMessage: "Block created in a CRDT-aware way (this is good)."
                                });
                                else if (r(381453).n4(e.path, ["properties", "title"])) o({
                                    operation: e,
                                    message: "a title update was not performed in a CRDT-aware way!",
                                    advice: "Please use a CRDT-aware function instead, such as textActions.setValue().",
                                    successMessage: "Title update performed in a CRDT-aware way (this is good)."
                                });
                                else if (r(381453).n4(e.path, ["properties"])) {
                                    let [t] = e.path;
                                    o({
                                        operation: e,
                                        message: `a ${t} update was not performed in a CRDT-aware way!`,
                                        advice: "Please use a CRDT-aware function instead, such as updateValue()."
                                    })
                                }
                                break;
                            case "update":
                                (0 === e.path.length && r(381453).Gv(e.args) && "properties" in e.args || r(381453).n4(e.path, ["properties"]) && r(381453).Gv(e.args) && "title" in e.args) && o({
                                    operation: e,
                                    message: "a properties update was not performed in a CRDT-aware way!",
                                    advice: "Please use textActions.setValue() to set the title separately from the rest of the properties."
                                })
                        }

                        function o(e) {
                            let {
                                operation: t,
                                message: o,
                                advice: n,
                                successMessage: s
                            } = e;
                            if ((0, r(455472).vO)(t.args)) r(900226).A.isDebuggingEnabled() && "string" == typeof s && console.log(s);
                            else {
                                let e = {
                                    command: t.command,
                                    pointer: t.pointer,
                                    path: t.path
                                };
                                r(419750).Fg(Error(o), {
                                    tags: {
                                        userAction: a,
                                        warningType: "possiblyCrdtUnawareOperation"
                                    },
                                    extra: {
                                        operation: e
                                    }
                                })
                            }
                        }
                    }(h, f);
                    let e = r(182830).performPrimitiveOperation(h, S),
                        t = m.getRole({
                            pointer: T,
                            userId: k
                        });
                    !S && (0, r(722371).Xk)(r(651814).T, T.table) && p instanceof(0, r(681651).h)(T.table) && f.newlyCreatedStoresForPermissionInference.set(T, {
                        store: p,
                        inferredPermissionFromParent: void 0
                    }), o = [{
                        pointer: T,
                        newValue: e,
                        role: t ? ? g,
                        updatePaths: "update" === h.command ? Object.keys(h.args).map(e => h.path.concat([e])) : [h.path]
                    }]
                }
                let _ = m.makeGetRecordModelFn(f.userId);
                for (let e of o) {
                    let {
                        pointer: t,
                        newValue: r,
                        role: o,
                        updatePaths: i
                    } = e, l = s().Bj6.fromValue(p.pointer.table, r);
                    (0, a().P)({
                        currentUserId: v.currentUser.id,
                        defaultRecordCache: v.defaultRecordCache,
                        inMemoryRecordCache: m,
                        pointer: t,
                        userId: k,
                        force: !0,
                        model: l,
                        role: o,
                        updatePaths: i,
                        debugSource: f.getUserActionForAnalyticsPurposesOnly() ? ? "applyOperation"
                    }), (0, n().F8)().onTransactionOperationApplied({
                        environment: v,
                        getRecordModel: _,
                        model: l
                    })
                }
                f.isLocal = !p.shouldCacheSaveTransactions(), f.isLocal && m.onOperationCallback && m.onOperationCallback({
                    operation: h,
                    store: p,
                    userAction: f.getUserActionForAnalyticsPurposesOnly(),
                    transactionId: f.id
                }), e.isInvertible && f.DANGEROUS_pushOperations({
                    operations: [h],
                    invertedOperations: b
                }), f.stores.push(p), f.annotateWithOperation(void 0), m.appliedTransaction = !0
            }
            let f = [{
                type: "userAction",
                allowedUserAction: "revisionActions.performUndoRedoRevisionTransaction"
            }];
            [...f], [...f];
            let m = h
        },
        445010: (e, t, r) => {
            r.d(t, {
                X: () => a
            }), r(898992), r(430670), r(581454);
            async function a(e, t) {
                let a = r(381453).hS(t.operations.flatMap(e => [e.pointer, ...(0, r(488307).mP)(e) ? e.additionalUpdatedPointers ? ? [] : []]), e => e.id);
                await Promise.all(a.map(a => (0, r(138635).B)({
                    environment: e,
                    inMemoryRecordCache: e.defaultRecordCache.inMemoryRecordCache,
                    pointer: a,
                    userId: t.userId,
                    forceFetchRemoteRecordSource: "rollbackTaskViaRemoteRecordFetch"
                })))
            }
        },
        484177: (e, t, r) => {
            r.d(t, {
                l: () => a
            });
            async function a(e) {
                let {
                    environment: t
                } = e, {
                    externalObjectInstanceBlockPointersMap: a,
                    externalCollectionInstancePointersMap: o,
                    externalSyncInstancePointersMap: n
                } = r(803952).A.state, s = [...Object.values(a), ...Object.values(o)], i = (0, r(381453).$z)(s, e => e.spaceId);
                await (0, r(975162).lX)(Object.entries(i), 5, ([e, r]) => t.api.callCellCompatibleApi({
                    eventName: "refetchExternalObjectInstanceBlocks",
                    environment: t,
                    data: {
                        recordPointers: r
                    },
                    cellNavigation: {
                        spaceId: e
                    }
                }));
                let l = Object.values(n);
                l.length > 0 && await t.api.callApi({
                    eventName: "resyncExternalSyncedCollection",
                    environment: t,
                    data: {
                        recordPointers: l
                    }
                }), r(803952).A.reset()
            }
        },
        508297: (e, t, r) => {
            function a(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "legacy_transclusion_autofix",
                        eventProperties: e
                    }
                })
            }

            function o(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "legacy_transclusion_duplication_fix",
                        eventProperties: e
                    }
                })
            }

            function n(e) {
                let {
                    collision_count: t
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "transaction_timestamp_collision",
                        eventProperties: {
                            collision_count: t
                        }
                    }
                })
            }

            function s(e) {
                let {
                    regression_amount: t
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "transaction_timestamp_regression",
                        eventProperties: {
                            regression_amount: t
                        }
                    }
                })
            }

            function i(e) {
                let {
                    committed_transaction_user_action: t,
                    first_uncommitted_transaction_user_action: a,
                    uncommitted_transaction_count: o
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "transaction_race_hazard",
                        eventProperties: {
                            committed_transaction_user_action: t,
                            first_uncommitted_transaction_user_action: a,
                            uncommitted_transaction_count: o
                        }
                    }
                })
            }

            function l(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "transaction_async_data_loss",
                        eventProperties: e
                    }
                })
            }

            function c(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "transaction_deadlock_warning",
                        eventProperties: e
                    }
                })
            }

            function d(e) {
                (0, r(195857).DO_NOT_USE_trackLegacy)("transaction_too_large", e)
            }

            function u(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "transaction_queue_error_show",
                        eventProperties: e
                    }
                })
            }

            function p() {
                (0, r(104310).u)({
                    event: {
                        eventName: "connection_error_show",
                        eventProperties: {}
                    }
                })
            }

            function g(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "connection_error_indicator_details_show",
                        eventProperties: e
                    }
                })
            }

            function h(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "low_storage_error_show",
                        eventProperties: e
                    }
                })
            }

            function f(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "transaction_queue_healthcheck",
                        eventProperties: e
                    }
                })
            }

            function m(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "unsaved_transaction_error",
                        eventProperties: e
                    }
                })
            }
            r.d(t, {
                $9: () => d,
                JV: () => c,
                JW: () => i,
                KY: () => m,
                NX: () => l,
                Ug: () => h,
                Y: () => u,
                Yr: () => a,
                hQ: () => s,
                hi: () => o,
                mm: () => n,
                nq: () => f,
                pn: () => p,
                ty: () => g
            })
        },
        516893: (e, t, r) => {
            r.d(t, {
                W: () => a
            });

            function a(e) {
                let t = e.getType();
                if (!t) return [];
                let a = e.getRenderableContentStores();
                if (a.length > 0) return a;
                switch (t) {
                    case "transclusion_reference":
                        let o = e.getTransclusionReferenceTargetStore();
                        return o ? [o] : [];
                    case "text":
                    case "page":
                    case "factory_task":
                    case "personal_home_page":
                    case "home_shortcuts":
                    case "bulleted_list":
                    case "numbered_list":
                    case "toggle":
                    case "quote":
                    case "factory":
                    case "button":
                    case "to_do":
                    case "column_list":
                    case "column":
                    case "embed":
                    case "framer":
                    case "tweet":
                    case "gist":
                    case "drive":
                    case "audio":
                    case "maps":
                    case "invision":
                    case "mixpanel":
                    case "image":
                    case "video":
                    case "file":
                    case "bookmark":
                    case "equation":
                    case "code":
                    case "header":
                    case "sub_header":
                    case "sub_sub_header":
                    case "header_4":
                    case "collection_view":
                    case "collection_view_page":
                    case "breadcrumb":
                    case "copy_indicator":
                    case "divider":
                    case "link_to_page":
                    case "link_to_collection":
                    case "figma":
                    case "loom":
                    case "typeform":
                    case "codepen":
                    case "pdf":
                    case "callout":
                    case "table_of_contents":
                    case "whimsical":
                    case "miro":
                    case "abstract":
                    case "sketch":
                    case "excalidraw":
                    case "replit":
                    case "alias":
                    case "transclusion_container":
                    case "external_object_instance":
                    case "table":
                    case "table_row":
                    case "tab":
                    case "external_object_instance_page":
                    case "hex":
                    case "deepnote":
                    case "ai_block":
                    case "drawing":
                    case "slide":
                    case "form":
                    case "post":
                    case "workflow":
                    case "transcription":
                    case "mail":
                    case "custom":
                    case "temporary_ui":
                    case "edit_reference":
                        return [];
                    default:
                        (0, r(722371).HB)(t)
                }
            }
        },
        542376: (e, t, r) => {
            r.d(t, {
                r: () => h,
                J: () => f
            }), r(16280), r(944114), r(777691), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(823215), r(354520), r(672577), r(803949), r(581454), r(737550);
            var a = () => r(773352);
            async function o(e) {
                let {
                    failedErrors: t,
                    sqliteConnection: o
                } = e, n = t.map(({
                    error: e,
                    task: t,
                    recordsBeforeRollback: a
                }) => {
                    let o;
                    "SaveTransactionsApiUnretryableError" === e.name ? o = {
                        type: "SaveTransactionsApiUnretryableError",
                        apiRequestId: e.apiRequestId,
                        status: e.status
                    } : "id" in e ? o = {
                        type: "NotionTransactionError",
                        name: e.name
                    } : (0, r(722371).HB)(e);
                    let {
                        callback: n,
                        ...s
                    } = t;
                    return {
                        error: o,
                        transaction: s,
                        records: Object.values(a || {})
                    }
                });
                try {
                    let e = (0, r(573146).F4)
                    `
			DELETE FROM unretryable_failed_transactions 
			WHERE created_at < unixepoch() - (30 * 24 * 60 * 60)
		`, t = {
                        sql: e.sql(),
                        args: e.args,
                        getData: !1
                    }, s = n.map(e => {
                        let t = (0, r(573146).F4)
                        `
				INSERT INTO unretryable_failed_transactions (data)
				VALUES (${JSON.stringify(e)})
			`;
                        return {
                            sql: t.sql(),
                            args: t.args,
                            getData: !1
                        }
                    });
                    await (0, r(911822).G2)({
                        connection: o,
                        statements: [t, ...s],
                        queryName: "dumpUnretryableFailedTransactionsToSqlite"
                    }), a().log({
                        level: "warning",
                        from: "dumpUnretryableFailedTransactionsToSqlite",
                        type: "dumpSuccess"
                    })
                } catch (e) {
                    r(419750).O8(e, {
                        from: "dumpUnretryableFailedTransactionsToSqlite",
                        type: "dumpFailed",
                        data: {
                            transactionsLostForever: t.map(({
                                task: e
                            }) => ({
                                id: e.id,
                                spaceId: e.spaceId
                            }))
                        }
                    })
                }
            }

            function n(e, t) {
                let a = e.currentUser.id,
                    o = new Set([]);
                return t.operations.map(t => {
                    let r = t.pointer.id;
                    if (o.has(r)) return;
                    o.add(r);
                    let n = e.defaultRecordCache.inMemoryRecordCache.getRecord({
                        pointer: t.pointer,
                        userId: a
                    });
                    if (null != n && n.value) return {
                        table: t.pointer.table,
                        value: n.value
                    }
                }).filter(r(722371).O9)
            }
            let s = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/g;
            var i = () => r(875893),
                l = () => r(386281),
                c = () => r(416607);
            let d = 0,
                u = (0, r(109939).YK)({
                    requestTooLarge: {
                        id: "transactionHelpers.requestTooLargeError.message",
                        defaultMessage: "Sorry, that request was too large."
                    },
                    requestTooLargeTryImportInstead: {
                        id: "transactionHelpers.requestTooLargeError.message.tryImportInstead",
                        defaultMessage: "Sorry, that request was too large. Try import instead?"
                    }
                }),
                p = !1;
            (0, r(202146).exposeDebugValue)("toggleTransactionQueue", () => {
                console.info((p = !p) ? "Transactions paused" : "Transactions resumed")
            });
            let g = 0;
            (0, r(202146).exposeDebugValue)("setTransactionQueueApiLatencyMs", e => {
                g = e, 0 === e ? console.info("Disabling saveTransactions API latency simulation.") : console.info(`Simulating saveTransactions API latency of ${e} ms.`)
            });
            class h extends Error {
                retryDelay;
                retryReason;
                savedTasks;
                failedTasks;
                failedErrors;
                clientData;
                debugMessage;
                constructor(e) {
                    super(e.message), this.name = "HandleSaveTransactionsError", this.retryDelay = e.retryDelay, this.retryReason = e.retryReason, this.savedTasks = e.savedTasks, this.failedTasks = e.failedTasks, this.failedErrors = e.failedErrors, this.clientData = e.clientData, this.debugMessage = e.debugMessage
                }
            }
            async function f(e) {
                var t, f, k;
                let I, S, y;
                if (p) return {
                    value: []
                };
                let {
                    environment: b,
                    tasks: _
                } = e, R = (0, r(210822).F8)(), E = (S = new Set(_.map(e => e.timestamp)), (y = _.length - S.size) > 0 && r(508297).mm({
                    collision_count: y
                }), y), {
                    userId: C,
                    tasks: A
                } = l().lz(_);
                try {
                    R.onBeforeTaskSave({
                        environment: b,
                        queueSessionId: r(941701).transactionQueue.sessionId,
                        tasks: _,
                        userId: C
                    })
                } catch (e) {
                    a().log({
                        level: "error",
                        from: "handleSaveTransactions",
                        type: "onBeforeTaskSave_error",
                        error: (0, c().convertErrorToLog)(e),
                        data: {
                            userId: C
                        }
                    })
                }
                let M = A.map(e => ({
                        id: e.id,
                        spaceId: e.spaceId,
                        debug: e.debug,
                        operations: e.operations,
                        inSudoMode: e.useSudoMode,
                        isUndoTransaction: e.isUndoTransaction,
                        isTemplateInstantiationTransaction: e.isTemplateInstantiationTransaction
                    })),
                    x = r(92513).JW(),
                    O = r(218744).default.checkGate({
                        gateName: "transactions_api_fewer_roundtrips"
                    }),
                    w = null == (t = r(900226).A.provider) ? void 0 : t.onSaveTransactions(_, M),
                    B = {
                        requestId: x,
                        transactions: M,
                        unretryable_error_behavior: O ? "continue" : void 0
                    };
                "currentSpace" === e.cellType ? I = await b.api.callApi({
                    eventName: "saveTransactionsFanout",
                    environment: b,
                    data: B,
                    userId: C,
                    headers: {}
                }) : "space" === e.cellType ? I = e.spaceId ? await b.api.callCellCompatibleApi({
                    eventName: "saveTransactionsFanout",
                    environment: b,
                    data: B,
                    userId: C,
                    cellNavigation: {
                        spaceId: e.spaceId
                    }
                }) : await b.api.callApi({
                    eventName: "saveTransactionsFanout",
                    environment: b,
                    data: B,
                    userId: C
                }) : "main" === e.cellType ? I = await b.api.callApi({
                    eventName: "saveTransactionsMain",
                    environment: b,
                    data: B,
                    userId: C,
                    headers: {}
                }) : "legacy" === e.cellType ? I = await b.api.callApi({
                    eventName: "saveTransactions",
                    environment: b,
                    data: B,
                    userId: C
                }) : (0, r(722371).HB)(e.cellType);
                let P = ("success" === I.type || "failed" === I.type && !I.offline) && "true" === I.headers["X-Notion-Client-Log-Call-Stack"];
                if (A.forEach(e => {
                        e.logCallStack = P
                    }), g > 0 && (console.info(`saveTransactions returned; simulating ${g}ms extra latency.`), await (0, r(975162).wR)(g)), null == w || w(I), "success" === I.type) {
                    d = 0;
                    try {
                        R.onTasksSaved({
                            environment: b,
                            savedTasks: A,
                            userId: C
                        })
                    } catch (e) {
                        a().log({
                            level: "error",
                            from: "handleSaveTransactions",
                            type: "onTasksSaved_error",
                            error: (0, c().convertErrorToLog)(e),
                            data: {
                                userId: C
                            }
                        })
                    }
                    return C && r(941701).transactionQueue.drain().then(async () => {
                        await R.onTaskQueueDrained({
                            environment: b,
                            queueSessionId: r(941701).transactionQueue.sessionId,
                            userId: C
                        })
                    }).catch(e => {
                        a().log({
                            level: "error",
                            from: "handleSaveTransactions",
                            type: "onTaskQueueDrained_error",
                            error: (0, c().convertErrorToLog)(e),
                            data: {
                                userId: C
                            }
                        })
                    }), {
                        value: A
                    }
                }
                let D = "Notion is unavailable, please try again later." === I.error.message;
                if (!(D || I.error.data.offline) || .01 > Math.random()) {
                    let e = [...new Set(M.map(e => e.spaceId ? ? "NO_SPACE_ID"))];
                    r(218744).default.checkGate({
                        gateName: "log_client_transaction_error"
                    }) && a().log({
                        level: "error",
                        from: "transactionActions",
                        type: "ClientTransactionError",
                        error: {
                            miscErrorString: (0, c().safelyConvertAnyToString)(I)
                        },
                        data: {
                            requestId: x,
                            miscDataToConvertToString: {
                                transactions: M
                            },
                            userId: b.currentUser.id,
                            spaceIds: e
                        }
                    })
                }
                if (413 === I.status) {
                    let e, t, o = A.length;
                    A.forEach(r => {
                        var a, o;
                        null != (a = r.debug) && a.userAction && (e = r.debug.userAction), null != (o = r.debug) && o.userFlow && (t = r.debug.userFlow)
                    }), a().log({
                        level: "error",
                        from: "transactionActions",
                        type: "ClientTransaction413Error",
                        data: {
                            totalTaskCount: o,
                            userId: b.currentUser.id,
                            requestId: x,
                            userAction: e,
                            userFlow: t
                        }
                    });
                    let n = JSON.stringify(M);
                    if (r(508297).$9({
                            totalTaskCount: o,
                            payloadLength: n.length,
                            userAction: e
                        }), r(218744).default.checkGate({
                            gateName: "log_client_transaction_413_error_recovery"
                        })) {
                        let e = Math.ceil(n.length / l().vs);
                        for (let t = 0; t < e; t++) a().log({
                            level: "error",
                            from: "transactionActions",
                            type: "ClientTransaction413ErrorRecovery",
                            data: {
                                userId: b.currentUser.id,
                                totalTaskCount: o,
                                requestId: x,
                                miscDataToConvertToString: {
                                    chunkTotal: e,
                                    chunkIndex: t,
                                    operationChunk: n.slice(t * l().vs, (t + 1) * l().vs)
                                }
                            }
                        })
                    }
                    let s = A.some(e => {
                        var t;
                        return null == (t = e.suppressErrorDialogForStatuses) ? void 0 : t.includes(I.status)
                    });
                    R.onServerTransactionCommitError({
                        error: new(i()).h(r(962299).A.formatMessage("paste" === e ? u.requestTooLargeTryImportInstead : u.requestTooLarge), e),
                        environment: b,
                        suppressDialog: s
                    })
                }
                let L = e => {
                    let t = d;
                    if (e.failedTasks.length > 0 && (d += 1), !D && !I.error.data.offline) {
                        var n, i, l;
                        let o = e.failedTasks.length > 0 ? e.failedTasks[0] : void 0;
                        o && (null == (n = e.clientData) ? void 0 : n.type) === "incomplete_ancestor_path" && a().log({
                            level: "error",
                            from: "transactionActions",
                            type: "ClientTransactionSpaceNotFoundError",
                            error: (0, c().convertErrorToLog)(e),
                            data: {
                                userId: b.currentUser.id,
                                requestId: x,
                                miscDataToConvertToString: function(e, t) {
                                    let a = (0, r(158392).getDebugIdSources)(),
                                        o = {
                                            blocks: {},
                                            isIdSourceCacheFull: a.size === a.max
                                        };
                                    for (let r of new Set(Array.from(JSON.stringify(t).matchAll(s)).map(e => e[0]))) {
                                        var n;
                                        let t = !1,
                                            s = {},
                                            i = a.get(r);
                                        i && (t = !0, s.debugSource = i);
                                        let l = e.defaultRecordCache.inMemoryRecordCache.getRecord({
                                            pointer: {
                                                table: "block",
                                                id: r
                                            },
                                            userId: e.currentUser.id
                                        });
                                        null != l && null != (n = l.value) && n.type && (t = !0, s.blockType = l.value.type), t && (o.blocks[r] = s)
                                    }
                                    return o
                                }(b, o.operations)
                            }
                        }), r(508297).KY({
                            status: I.status,
                            message: (0, r(201790).V4)(I),
                            previous_consecutive_rollbacks: t,
                            saved_tasks: e.savedTasks.length,
                            failed_tasks: e.failedTasks.length,
                            first_failed_task_user_action: null == o || null == (i = o.debug) ? void 0 : i.userAction,
                            first_failed_task_debug_tags: null == o || null == (l = o.debug) ? void 0 : l.tags,
                            will_retry: !!e.retryReason,
                            retry_reason: e.retryReason,
                            timestamp_collision_count: E
                        })
                    }
                    return e.failedTasks.length > 0 && b.sqliteConnection && o({
                        failedErrors: e.failedErrors,
                        sqliteConnection: b.sqliteConnection
                    }), C && r(941701).transactionQueue.drain().then(async () => {
                        await R.onTaskQueueDrained({
                            environment: b,
                            queueSessionId: r(941701).transactionQueue.sessionId,
                            userId: C
                        })
                    }).catch(e => {
                        a().log({
                            level: "error",
                            from: "handleSaveTransactions",
                            type: "onTaskQueueDrained_error",
                            error: (0, c().convertErrorToLog)(e),
                            data: {
                                userId: C
                            }
                        })
                    }), {
                        error: e
                    }
                };
                if ((0, r(101787).OwV)(I.body)) {
                    let {
                        status: e
                    } = I;
                    if ((0, r(101787).mdR)(I.body.clientData)) {
                        let e, t, {
                                errors: o
                            } = I.body.clientData,
                            s = o[0],
                            l = A.findIndex(e => e.id === s.id);
                        if (l < 0) return v(b, x, s), L(new h({
                            message: s.name,
                            clientData: s.clientData,
                            retryDelay: 0,
                            retryReason: void 0,
                            savedTasks: [],
                            failedTasks: [],
                            failedErrors: []
                        }));
                        if (O) {
                            let t = o.find(e => e.retryable),
                                r = t ? A.findIndex(e => e.id === t.id) : -1,
                                a = Object.groupBy(o, e => e.id);
                            e = r > -1 ? A.slice(0, r).filter(e => !a[e.id]) : A.filter(e => !a[e.id])
                        } else e = A.slice(0, l);
                        try {
                            R.onTasksSaved({
                                environment: b,
                                savedTasks: e,
                                userId: C
                            })
                        } catch (e) {
                            a().log({
                                level: "error",
                                from: "handleSaveTransactions",
                                type: "onTasksSaved_error",
                                error: (0, c().convertErrorToLog)(e),
                                data: {
                                    userId: C
                                }
                            })
                        }
                        let d = [],
                            u = [],
                            p = [],
                            g = l,
                            S = 0,
                            y = 0;
                        for (let e of (O && (t = Object.groupBy(A, e => e.id)), o)) {
                            let r;
                            if (O) {
                                let a = null == (k = t) || null == (k = k[e.id]) ? void 0 : k[0];
                                if (!a) {
                                    v(b, x, e);
                                    continue
                                }
                                r = a
                            } else if (r = A[g], e.id !== r.id) {
                                v(b, x, e);
                                continue
                            }
                            if (e.retryable) u.push({
                                error: e,
                                task: r
                            }), y += 1;
                            else {
                                S += 1;
                                let t = b.sqliteConnection ? n(b, r) : void 0;
                                try {
                                    R.onTaskError({
                                        environment: b,
                                        error: new(i()).J5(r, C)
                                    })
                                } catch (e) {
                                    a().log({
                                        level: "error",
                                        from: "handleSaveTransactions",
                                        type: "onTaskError_error",
                                        error: (0, c().convertErrorToLog)(e),
                                        data: {
                                            taskId: r.id,
                                            userId: C
                                        }
                                    })
                                }
                                await m(b, r, x), d.push(r), p.push({
                                    error: e,
                                    task: r,
                                    recordsBeforeRollback: t
                                })
                            }
                            g++
                        }
                        let _ = [`${e.length} successful`, S > 0 ? `${S} failed unretryable (data loss)` : void 0, y > 0 ? `${y} retryable` : void 0].filter(r(722371).O9).join(", "),
                            E = [`API error for ${A.length} transactions: ${_}.`, T(p, "unretryable"), T(u, "retryable"), I.body.debugMessage ? `Debug message: "${I.body.debugMessage}"` : void 0].filter(r(722371).O9).join(" "),
                            M = 0;
                        return function(e) {
                            let {
                                firstError: t,
                                retryableErrors: r
                            } = e;
                            return 0 !== r.length && (!!t.retryable || !r.every(({
                                error: e
                            }) => "UntriedTransactionError" === e.name))
                        }({
                            firstError: s,
                            retryableErrors: u
                        }) && (M = 2e3), L(new h({
                            savedTasks: e,
                            failedTasks: d,
                            failedErrors: p,
                            message: E,
                            retryDelay: M,
                            retryReason: null == (f = u[0]) ? void 0 : f.error.name,
                            clientData: s.clientData,
                            debugMessage: I.body.debugMessage
                        }))
                    }
                    if (400 === e || 413 === e) {
                        let t = r(92513).JW(),
                            o = A.map(r => ({
                                error: {
                                    name: "SaveTransactionsApiUnretryableError",
                                    apiRequestId: t,
                                    status: e
                                },
                                task: r,
                                recordsBeforeRollback: b.sqliteConnection ? n(b, r) : void 0
                            }));
                        for (let e of A) try {
                            R.onTaskError({
                                environment: b,
                                error: new(i()).J5(e, C)
                            })
                        } catch (t) {
                            a().log({
                                level: "error",
                                from: "handleSaveTransactions",
                                type: "onTaskError_error",
                                error: (0, c().convertErrorToLog)(t),
                                data: {
                                    taskId: e.id,
                                    userId: C
                                }
                            })
                        }
                        return await Promise.all(A.map(e => m(b, e, x))), L(new h({
                            savedTasks: [],
                            failedTasks: A,
                            failedErrors: o,
                            message: (0, r(922271).H)(r(962299).A.getIntl(), I),
                            retryDelay: 0,
                            retryReason: void 0
                        }))
                    }
                }
                let F = `http${I.status}`;
                return I.error.data.offline ? F = "offline" : D && (F = "notionUnavailable"), L(new h({
                    savedTasks: [],
                    failedTasks: [],
                    failedErrors: [],
                    message: (0, r(922271).H)(r(962299).A.getIntl(), I),
                    retryDelay: 5e3,
                    retryReason: F
                }))
            }
            async function m(e, t, o) {
                try {
                    await (0, r(445010).X)(e, t)
                } catch (t) {
                    a().log({
                        level: "error",
                        from: "transactionActions",
                        type: "ClientTransactionCleanupError",
                        error: (0, c().convertErrorToLog)(t),
                        data: {
                            userId: e.currentUser.id,
                            requestId: o
                        }
                    })
                }
            }

            function v(e, t, r) {
                a().log({
                    level: "error",
                    from: "transactionActions",
                    type: "ClientTransactionNotFoundError",
                    error: (0, c().convertErrorToLog)(r),
                    data: {
                        userId: e.currentUser.id,
                        requestId: t
                    }
                })
            }

            function T(e, t) {
                if (e.length > 0) {
                    var r;
                    let {
                        error: a,
                        task: o
                    } = e[0];
                    return `First ${t} error: ${a.name} for transaction ${o.id} created by ${null==(r=o.debug)?void 0:r.userAction}.`
                }
            }
        },
        643646: (e, t, r) => {
            function a(e, t) {
                return t.getAlive() !== e.getAlive() || !r(381453).n4(t.getText(), e.getText()) || !r(381453).n4(t.getContent(), e.getContent())
            }

            function o(e) {
                switch (null == e ? void 0 : e.type) {
                    case "comment-changed":
                    case "comment-created":
                    case "comment-deleted":
                    case "suggestion-created":
                        return !0;
                    default:
                        return !1
                }
            }
            r.d(t, {
                T: () => a,
                k: () => o
            })
        },
        651814: (e, t, r) => {
            r.d(t, {
                T: () => a,
                Z: () => o
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520);
            let a = [r(832375).evP];
            class o {
                id = r(92513).JW();
                spaceId;
                userId;
                committed = !1;
                isLocal = !1;
                useSudoMode;
                isUndoTransaction;
                isTemplateInstantiationTransaction;
                suppressErrorDialogForStatuses;
                undoCheckpoint;
                deadlockWarningTimeout;
                privateOperations = [];
                stores = [];
                initialRecordMap = r(412951).RecordMapWithRole.create();
                debugLogging;
                debugLog = [];
                privateInvertedOperations = [];
                postPerformAssertions = [];
                preEnqueueActions = [];
                postEnqueueActions = [];
                postSubmitCallbacks = [];
                postCancelCallbacks = [];
                undoStartCallbacks = [];
                newlyCreatedStoresForPermissionInference = new(r(793665)).A({
                    getKey: e => (0, r(694402).jV)(e)
                });
                userAction = void 0;
                userFlow = void 0;
                operation = void 0;
                tags = void 0;
                suggestionDiscussionStore = void 0;
                constructor(e) {
                    const {
                        spaceId: t,
                        userId: a,
                        deadlockTimeoutMs: o,
                        onDeadlockWarning: n,
                        debugLogging: s,
                        isUndoTransaction: i,
                        isTemplateInstantiationTransaction: l
                    } = e;
                    t && a && (this.spaceId = t, this.userId = a), n && (this.deadlockWarningTimeout = window.setTimeout(n, o)), this.debugLogging = s, this.isUndoTransaction = i, this.isTemplateInstantiationTransaction = l, r(205885).A.state.online || this.annotateWithDebugTag("tx_tag.created_while_offline")
                }
                getDebugLog() {
                    return this.debugLog
                }
                get operations() {
                    return this.privateOperations
                }
                get invertedOperations() {
                    return this.privateInvertedOperations
                }
                DANGEROUS_pushOperations(e) {
                    this.privateOperations.push(...e.operations), this.privateInvertedOperations.push(...e.invertedOperations)
                }
                logDebugMessage(e, ...t) {
                    var r, a;
                    null != (r = this.debugLogging) && r.collect && this.debugLog.push({
                        operationsIndex: this.operations.length,
                        message: e
                    }), null != (a = this.debugLogging) && a.logToConsole && console.log(e, ...t)
                }
                isEmpty() {
                    return 0 === this.operations.length
                }
                annotateWithUserAction(e) {
                    this.userAction = e
                }
                annotateWithUserFlow(e) {
                    this.userFlow = e
                }
                annotateWithOperation(e) {
                    this.operation = e
                }
                annotationWithSuggestionDiscussionStore(e) {
                    if (this.suggestionDiscussionStore) throw new(r(101787)).yI4("Already annotated with DiscussionStore");
                    this.suggestionDiscussionStore = e
                }
                getSuggestionDiscussionStore() {
                    return this.suggestionDiscussionStore
                }
                getUserActionForAnalyticsPurposesOnly() {
                    return this.userAction
                }
                getUserFlowForAnalyticsPurposesOnly() {
                    return this.userFlow
                }
                getOperationForAnalyticsPurposesOnly() {
                    return this.operation
                }
                annotateWithDebugTag(e) {
                    this.tags || (this.tags = new Set), this.tags.add(e)
                }
                copyDebugTagsFrom(e) {
                    if (e.tags)
                        for (let t of e.tags) this.annotateWithDebugTag(t)
                }
                getDebugTagsForAnalyticsPurposesOnly() {
                    if (this.tags) return Array.from(this.tags)
                }
                cancelDeadlockWarning() {
                    void 0 !== this.deadlockWarningTimeout && (window.clearTimeout(this.deadlockWarningTimeout), this.deadlockWarningTimeout = void 0)
                }
                done(e) {
                    for (let t of (this.cancelDeadlockWarning(), this.postSubmitCallbacks)) t(e)
                }
                stateSnapshots = new Map;
                savePreTransactionSnapshot() {
                    for (let e of (0, r(908717).nP)()) this.stateSnapshots.set(e.key, e.save())
                }
                restorePreTransactionSnapshot(e) {
                    let {
                        filter: t
                    } = e ? ? {}, a = t ? ? (() => !0);
                    for (let e of (0, r(908717).nP)()) this.stateSnapshots.has(e.key) && a(e.key) && e.restore(this.stateSnapshots.get(e.key))
                }
            }
        },
        803952: (e, t, r) => {
            r.d(t, {
                A: () => l
            }), r(944114), r(898992), r(354520), r(581454);
            var a = () => r(546605),
                o = () => r(610463),
                n = () => r(955630),
                s = () => r(832375);
            class i extends a().Store {
                getInitialState() {
                    return {
                        externalObjectInstanceBlockPointersMap: {},
                        externalCollectionInstancePointersMap: {},
                        externalSyncInstancePointersMap: {}
                    }
                }
                addFromRecordMapWithRoleJson(e) {
                    this.addFromRecordMapWithRole(r(412951).RecordMapWithRole.create(e))
                }
                addFromRecordMapWithRole(e) {
                    let t = e.getByTable(s().VlP).filter(({
                            value: e
                        }) => {
                            var t;
                            return null == e || null == (t = e.value) || null == (t = t.format) ? void 0 : t.external_object_id
                        }).map(({
                            value: e
                        }) => (null == e ? void 0 : e.value) && {
                            id: e.value.id,
                            table: s().VlP,
                            spaceId: e.value.space_id
                        }).filter(r(722371).O9),
                        a = e.getByTable(s().VlP).filter(({
                            value: e
                        }) => {
                            var t;
                            return (0, r(395315).zG)(null == e || null == (t = e.value) ? void 0 : t.format)
                        }).map(({
                            value: e
                        }) => (null == e ? void 0 : e.value) && {
                            id: e.value.id,
                            table: s().VlP,
                            spaceId: e.value.space_id
                        }).filter(r(722371).O9),
                        i = o().A.getBotsAsRecordMap(),
                        l = e.getByTable(s().evP).filter(({
                            value: e
                        }) => {
                            var t, a;
                            return !!(0, r(722371).O9)(null == e || null == (t = e.value) ? void 0 : t.format) && !!(null != e && null != (a = e.value) && null != (a = a.format) && a.external_object_id) && (e.value.type === n().xd.externalObjectInstancePage || e.value.type === n().xd.externalObjectInstance)
                        }).map(({
                            value: e
                        }) => null == e ? void 0 : e.value).filter(r(722371).O9),
                        c = [],
                        d = [];
                    for (let e of l) {
                        var u;
                        let t = null == (u = e.format) ? void 0 : u.bot_id;
                        if (t)
                            if (!0 === o().A.state.loaded) {
                                let a = i.getValue({
                                        table: s().GPl,
                                        id: t
                                    }),
                                    {
                                        sendBlockViewEvent: o,
                                        sendExternalCollectionViewEvent: l
                                    } = function({
                                        integrationId: e,
                                        blockType: t
                                    }) {
                                        if (!e) return {
                                            sendBlockViewEvent: !0,
                                            sendExternalCollectionViewEvent: !0
                                        };
                                        if (t === n().xd.externalObjectInstancePage) {
                                            if (e === r(49361).ob) return {
                                                sendBlockViewEvent: !1,
                                                sendExternalCollectionViewEvent: !1
                                            };
                                            if (e === r(49361).mn) return {
                                                sendBlockViewEvent: !1,
                                                sendExternalCollectionViewEvent: !0
                                            }
                                        }
                                        return {
                                            sendBlockViewEvent: !0,
                                            sendExternalCollectionViewEvent: !0
                                        }
                                    }({
                                        integrationId: null == a ? void 0 : a.integration_id,
                                        blockType: e.type
                                    });
                                o && d.push({
                                    id: e.id,
                                    table: s().evP,
                                    spaceId: e.space_id
                                }), l && c.push({
                                    id: e.parent_id,
                                    table: s().VlP,
                                    spaceId: e.space_id
                                })
                            } else d.push({
                                id: e.id,
                                table: s().evP,
                                spaceId: e.space_id
                            }), e.type === n().xd.externalObjectInstancePage && e.parent_table === s().VlP && c.push({
                                id: e.parent_id,
                                table: e.parent_table,
                                spaceId: e.space_id
                            })
                    }
                    let p = (0, r(722371).MU)(d.map(e => [e.id, e])),
                        g = (0, r(722371).MU)([...t, ...c].map(e => [e.id, e])),
                        h = (0, r(722371).MU)(a.map(e => [e.id, e]));
                    this.setState({
                        externalObjectInstanceBlockPointersMap: { ...this.state.externalObjectInstanceBlockPointersMap,
                            ...p
                        },
                        externalCollectionInstancePointersMap: { ...this.state.externalCollectionInstancePointersMap,
                            ...g
                        },
                        externalSyncInstancePointersMap: { ...this.state.externalSyncInstancePointersMap,
                            ...h
                        }
                    })
                }
                reset() {
                    this.setState({
                        externalObjectInstanceBlockPointersMap: {},
                        externalCollectionInstancePointersMap: {},
                        externalSyncInstancePointersMap: {}
                    })
                }
                isEmpty() {
                    return 0 === Object.keys(this.state.externalCollectionInstancePointersMap).length && 0 === Object.keys(this.state.externalObjectInstanceBlockPointersMap).length && 0 === Object.keys(this.state.externalSyncInstancePointersMap).length
                }
            }
            let l = new i
        },
        862759: (e, t, r) => {
            r.d(t, {
                m: () => a
            });

            function a(e) {
                let {
                    userSettingsStore: t,
                    data: a,
                    transaction: o
                } = e;
                (0, r(173157).z)({
                    store: t.getSettingsStore(),
                    data: a,
                    transaction: o
                })
            }
        },
        875893: (e, t, r) => {
            r.d(t, {
                J5: () => c,
                RZ: () => n,
                Yo: () => o,
                gQ: () => l,
                h: () => i,
                hc: () => s,
                mk: () => a
            }), r(16280);
            class a extends Error {
                kind = "deadlockWarning";
                constructor(e, t) {
                    super(`Warning: an uncommitted ${e} transaction remained after timeout! Check the console for a trace.`), this.userAction = e, this.operationCount = t
                }
            }
            class o extends Error {
                kind = "validation";
                constructor(e) {
                    super(String(e)), this.displayMessage = e
                }
            }
            class n extends Error {
                kind = "saveFailed";
                constructor(e, t) {
                    super(e.message), this.originalError = e, this.transactionId = t
                }
            }
            class s extends Error {
                kind = "async";
                constructor(e, t) {
                    super(`Warning: an asynchronous ${e} transaction threw an exception! Check the console for a trace.`), this.userAction = e, this.originalError = t
                }
            }
            class i extends Error {
                kind = "requestTooLarge";
                constructor(e, t) {
                    super(String(e)), this.displayMessage = e, this.userAction = t
                }
            }
            class l extends Error {
                kind = "serverError";
                environment;
                transactionId;
                userAction;
                originalError;
                sentryId;
                metadata;
                constructor(e) {
                    super(e.message), this.environment = e.environment, this.transactionId = e.transactionId, this.userAction = e.userAction, this.originalError = e.originalError, this.sentryId = e.sentryId, this.metadata = e.metadata
                }
            }
            class c extends Error {
                kind = "unretryable";
                constructor(e, t) {
                    super("Task failed with an unretryable error"), this.task = e, this.userId = t
                }
            }
        },
        900226: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = {
                provider: void 0,
                logInvertedTextOperationError(e) {
                    let {
                        invertedOperation: t,
                        maybeRemappedInvertedOperation: a,
                        transaction: o,
                        errorCode: n
                    } = e;
                    if (this.provider) return this.provider.logInvertedTextOperationError(e);
                    let s = o.getUserActionForAnalyticsPurposesOnly(),
                        {
                            command: i
                        } = t,
                        l = `Applying inverted text operation "${i}" from transaction "${s}" failed with error "${n}".`;
                    r(773352).log({
                        level: "error",
                        from: "transactionDebugHelpers",
                        type: "crdt:logInvertedTextOperationError",
                        error: {
                            message: l
                        },
                        data: {
                            userAction: s,
                            operation: i,
                            errorName: n
                        }
                    })
                },
                isDebuggingEnabled() {
                    return !!(this.provider && 1)
                }
            }
        },
        904434: (e, t, r) => {
            function a() {
                let e = r(728372).AppStoreCurrentUserSettingsStore.state,
                    t = r(728372).AppStoreSidebarSpaceStore.state,
                    a = (null == e ? void 0 : e.getSettings()) || {},
                    o = null == t ? void 0 : t.getPlanType();
                return "professional" === a.domain_type && "team" === o
            }

            function o() {
                let e = r(728372).AppStoreCurrentUserSettingsStore.state;
                return ((null == e ? void 0 : e.getSettings()) || {}).domain_type
            }

            function n(e) {
                let t = r(728372).AppStoreCurrentUserSettingsStore.state;
                if (t && t.id === e.currentUser.id) return t
            }
            r.d(t, {
                FX: () => o,
                R$: () => n,
                YD: () => a
            })
        },
        912846: (e, t, r) => {
            r.r(t), r.d(t, {
                clearRevisionStack: () => c,
                default: () => l,
                groupIntervalMs: () => n
            });
            var a = () => r(546605);
            class o {
                idMap = new(r(793665)).A({
                    getKey: ({
                        textInstanceId: e,
                        opId: t
                    }) => `${e},${t[0]},${t[1]}`
                });
                remapIdsForReinsertedText(e) {
                    let {
                        invertedDeleteTextOperation: t,
                        insertTextOperation: a,
                        revisionUserActions: o
                    } = e;
                    (0, r(765483).MX)(a.args.textInstanceId === t.args.textInstanceId, "Inverted operation text instance ID does not match", {
                        revisionUserActions: o
                    }), (0, r(765483).MX)(r(381453).n4(a.args.originId, t.args.originId), "Inverted operation origin ID does not match", {
                        revisionUserActions: o
                    }), (0, r(765483).MX)(a.args.content.length === t.args.deletedIds.length, "Inverted operation deleted IDs must be equal to inserted text length", {
                        revisionUserActions: o
                    });
                    let n = a.args.id,
                        s = a.args.content;
                    for (let e = 0; e < s.length; e++) this.addMapping({
                        oldId: {
                            textInstanceId: t.args.textInstanceId,
                            opId: t.args.deletedIds[e]
                        },
                        newId: {
                            textInstanceId: a.args.textInstanceId,
                            opId: [n[0], n[1] + e]
                        },
                        revisionUserActions: o
                    })
                }
                addMapping(e) {
                    let {
                        oldId: t,
                        newId: a,
                        revisionUserActions: o
                    } = e;
                    (0, r(765483).MX)(!this.idMap.has(t), "Old text instance ID already exists in inverted text operation mapper", {
                        revisionUserActions: o
                    }), (0, r(765483).MX)(!this.idMap.has(a), "New text instance ID already exists in inverted text operation mapper", {
                        revisionUserActions: o
                    }), (0, r(765483).MX)(t.textInstanceId === a.textInstanceId, "IDs can only be remapped within the same text instance", {
                        revisionUserActions: o
                    }), this.idMap.set(t, a)
                }
                getMappedId(e) {
                    let t, r = e;
                    for (; r = this.idMap.get(r);) t = r;
                    return t
                }
                getInvertedTextOperationWithMaybeRemappedIds(e) {
                    var t, a, o, n, s;
                    switch (e.command) {
                        case "invertedInsertText":
                            {
                                let r = null == (t = this.getMappedId({
                                        textInstanceId: e.args.textInstanceId,
                                        opId: e.args.startId
                                    })) ? void 0 : t.opId,
                                    o = null == (a = this.getMappedId({
                                        textInstanceId: e.args.textInstanceId,
                                        opId: e.args.endId
                                    })) ? void 0 : a.opId;
                                return r || o ? { ...e,
                                    args: { ...e.args,
                                        startId: r ? ? e.args.startId,
                                        endId: o ? ? e.args.endId
                                    }
                                } : e
                            }
                        case "invertedAddAnnotation":
                        case "invertedRemoveAnnotation":
                            {
                                let t = null == (o = this.getMappedId({
                                        textInstanceId: e.args.startTextInstanceId,
                                        opId: e.args.startId
                                    })) ? void 0 : o.opId,
                                    a = null == (n = this.getMappedId({
                                        textInstanceId: e.args.endTextInstanceId,
                                        opId: e.args.endId
                                    })) ? void 0 : n.opId;
                                if ("invertedAddAnnotation" === e.command || "invertedRemoveAnnotation" === e.command) return t || a ? { ...e,
                                    args: { ...e.args,
                                        startId: t ? ? e.args.startId,
                                        endId: a ? ? e.args.endId
                                    }
                                } : e;
                                (0, r(722371).HB)(e);
                                break
                            }
                        case "invertedDeleteText":
                            {
                                let t = null == (s = this.getMappedId({
                                    textInstanceId: e.args.textInstanceId,
                                    opId: e.args.originId
                                })) ? void 0 : s.opId;
                                return t ? { ...e,
                                    args: { ...e.args,
                                        originId: t ? ? e.args.originId
                                    }
                                } : e
                            }
                        case "invertedMoveTextSlice":
                            return e;
                        default:
                            (0, r(722371).HB)(e)
                    }
                }
            }
            let n = 700;
            class s extends a().Store {
                getInitialState() {
                    return {
                        undoStack: [],
                        redoStack: [],
                        invertedTextOperationIdMapper: new o
                    }
                }
            }
            let i = new s,
                l = i;

            function c() {
                i.reset()
            }
        }
    }
]);