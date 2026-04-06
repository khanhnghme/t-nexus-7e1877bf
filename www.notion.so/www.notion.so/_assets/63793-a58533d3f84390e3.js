"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [51859, 63793], {
        266967: (e, t, o) => {
            o.d(t, {
                DG: () => i,
                Yg: () => r,
                Yx: () => a,
                _N: () => n,
                fY: () => s,
                h8: () => u,
                wG: () => l
            }), o(944114), o(898992), o(803949);
            let l = "forms_add_conditional_logic_tooltip";

            function r({
                currentModule: e,
                nestedModules: t,
                includePlaceholders: o
            }) {
                let l = [{
                        currentModule: e,
                        depth: 1
                    }],
                    n = [],
                    i = 0;
                for (; l.length > 0;) {
                    let e = l.shift();
                    if (!e) continue;
                    let {
                        currentModule: r,
                        depth: s
                    } = e;
                    if (n.push(r), s > i && (i = s), "formQuestion" === r.type) {
                        var a;
                        null == (a = r.conditionalGroups) || a.forEach(e => {
                            for (let r of e.children ? ? []) {
                                let e = t[r];
                                e && ("formQuestion" === e.type || o && "placeholder" === e.type) && l.push({
                                    currentModule: e,
                                    depth: s + 1
                                })
                            }
                        })
                    }
                }
                return {
                    formQuestionDescendants: n,
                    maxDepth: i
                }
            }

            function n(e, t, l) {
                if (!e) return;
                let r = (0, o(758159).A)(e, t.getModules());
                if (!r) return;
                let n = o(680802).c.createChildStore(t, {
                    table: o(832375).lo9,
                    id: r.module.formQuestionId,
                    spaceId: t.getSpaceId() ? ? ""
                }).getPropertyId();
                if (!n) return;
                let i = l.getSchema()[n],
                    a = null == i ? void 0 : i.type;
                if ("select" === a || "multi_select" === a || "checkbox" === a) return a
            }

            function i({
                mouseEntered: e,
                currentQuestionModule: t,
                modulesByArea: l,
                featureAvailable: r,
                inputFocused: n,
                isDragging: a,
                showTutorialTooltip: s
            }) {
                if (void 0 === l) return !1;
                let u = (0, o(703049).Cg)({
                    moduleId: null == t ? void 0 : t.id,
                    modulesByArea: l
                }).length >= o(703049).mh;
                return (e || s) && !u && !n && !a
            }

            function a(e) {
                let {
                    formQuestionId: t,
                    formAddConditionalLogicTooltipStore: r
                } = e;
                if (o(107333).A.state.open || !t || !r) return !1;
                if ("multi_select" === e.type) {
                    let o = e.optionValue;
                    if (!o || r.state.openTooltip !== s({
                            formQuestionId: t,
                            optionValue: o
                        })) return !1
                } else if (r.state.openTooltip !== s({
                        formQuestionId: t
                    })) return !1;
                return o(696190).default.isVisible(l)
            }

            function s({
                formQuestionId: e,
                optionValue: t
            }) {
                return t ? `fqid:${e} value:${t}` : `fqid:${e}`
            }

            function u(e, t) {
                return `${e}:${t}`
            }
        },
        422575: (e, t, o) => {
            o.d(t, {
                L8: () => n,
                O2: () => u,
                dm: () => s,
                qN: () => i
            });
            var l = o(296540),
                r = o(474848);
            let n = (0, l.createContext)({
                collectionContextStore: void 0,
                propertySchema: void 0,
                property: void 0,
                propertyFormat: void 0,
                isEmptyStore: o(546605).Store.createValue(!1),
                canEdit: !1,
                disabled: !0,
                shouldRenderTooltip: !1,
                shouldWrap: !1,
                baseStyles: {},
                surface: "table",
                containerRef: null,
                store: void 0,
                shouldShowMultiSelectCheckbox: void 0,
                propertyIndex: void 0,
                collectionSchemaStore: o(546605).Store.createValue(void 0)
            });
            n.displayName = "BlockPropertyValueContext";
            let i = l.memo(function(e) {
                var t, i;
                let {
                    children: s,
                    unmappedProperty: d,
                    property: c,
                    propertySchema: p,
                    containerRef: m
                } = e, {
                    surface: f,
                    disabled: y,
                    store: g,
                    tableWrap: h,
                    collectionStore: b,
                    shouldSetCellHeight: v,
                    isLast: _,
                    locked: x,
                    showIfEmpty: S,
                    shouldShowMultiSelectCheckbox: M,
                    propertyIndex: C,
                    propertyModule: w,
                    formQuestionStore: k,
                    formDataStore: A,
                    onClose: T,
                    collectionViewStore: F
                } = e.innerProps, I = (0, o(533992).v3)(), {
                    value: N
                } = (0, o(815048).fJ)(o(864850).T.formulas), P = (0, o(713311).Ks)(), [L, V] = (0, o(682985).K8)(() => {
                    let e = null == P ? void 0 : P.getPropertyFormat(d ? ? c),
                        t = !1;
                    return A && k && (t = !!A.getQuestionError(k.id)), [e, t]
                }, [P, A, k, c, d], {
                    equalityFn: o(381453).n4
                }), q = (0, l.useMemo)(() => new(o(345426)).ComputedStore(() => {
                    var e;
                    return (null == A || null == (e = A.getFormState()) ? void 0 : e.collectionSchema) || b.getSchema()
                }, {
                    debugName: "BlockPropertyValueContext.collectionSchemaStore"
                }), [b, A]), R = (0, o(366318).S)(g), K = u({
                    store: g,
                    collectionStore: b,
                    property: c,
                    disabled: y,
                    surface: f,
                    propertySchema: p,
                    collectionContextStore: P,
                    writeStateType: "edit"
                }), j = (t = f, i = h, "page" === t || "table" === t && i || "board" === t && i || "gallery" === t && i || "feed" === t && i || "form_viewer" === t), D = w && "style" in w && "large" === w.style, E = (0, o(916769).x7)({
                    shouldSetCellHeight: v,
                    surface: f,
                    shouldWrap: j,
                    isLast: _,
                    locked: x,
                    disabled: y,
                    showIfEmpty: S,
                    isInvalidFormAnswer: V,
                    isLargeModule: D,
                    collectionViewStore: F
                }), B = function(e) {
                    let {
                        store: t,
                        collectionSchemaStore: l,
                        property: r,
                        propertySchema: n,
                        surface: i,
                        isExternallyImportedAndSyncedPage: s,
                        environment: u,
                        formulasModule: d
                    } = e;
                    return (0, o(682985).K8)(() => "board" === i || "gallery" === i || "list" === i || "relation" === i || "relation_section" === i || "feed" === i || ("mini" === i ? !a({
                        store: t,
                        collectionSchema: l.state,
                        property: r,
                        propertySchemaType: null == n ? void 0 : n.type,
                        formulasModule: d,
                        environment: u
                    }) : ("page" === i || "compact_page" === i || "table" === i || "form_viewer" === i || "form_editor" === i || "property_module" === i || "calendar" === i || "timeline" === i) && s), [l, u, i, d, s, r, null == n ? void 0 : n.type, t])
                }({
                    store: g,
                    collectionSchemaStore: q,
                    property: c,
                    propertySchema: p,
                    surface: f,
                    isExternallyImportedAndSyncedPage: R,
                    environment: I,
                    formulasModule: N
                }), W = (0, l.useMemo)(() => {
                    let e;
                    return {
                        store: g,
                        collectionContextStore: P,
                        property: c,
                        propertySchema: p,
                        propertyFormat: L,
                        isEmpty: !1,
                        canEdit: K,
                        disabled: y,
                        shouldRenderTooltip: B,
                        shouldWrap: j,
                        baseStyles: E,
                        surface: f,
                        containerRef: m,
                        shouldShowMultiSelectCheckbox: M,
                        propertyIndex: C,
                        isExternallyImportedAndSyncedPage: R,
                        propertyModule: w,
                        onClose: T,
                        collectionSchemaStore: q,
                        get isEmptyStore() {
                            return e || (e = new(o(345426)).ComputedStore(() => a({
                                store: g,
                                collectionSchema: q.state,
                                property: c,
                                propertySchemaType: null == p ? void 0 : p.type,
                                formulasModule: N,
                                environment: I
                            }), {
                                debugName: "BlockPropertyValueContext.isEmptyStore"
                            })), e
                        }
                    }
                }, [g, P, c, p, L, K, y, B, j, E, f, m, M, C, R, w, T, q, I, N]);
                return (0, r.jsx)(n.Provider, {
                    value: W,
                    children: s
                })
            });

            function a(e) {
                let {
                    store: t,
                    collectionSchema: l,
                    property: r,
                    propertySchemaType: n,
                    formulasModule: i,
                    environment: a
                } = e;
                return !!r && !!t && !!t.isDefined() && !!l && "checkbox" !== n && "button" !== n && "created_time" !== n && "created_by" !== n && "last_edited_time" !== n && "last_edited_by" !== n && "formula" !== n && "rollup" !== n && "auto_increment_id" !== n && (0, o(175567).r)({
                    block: t.getModel(),
                    property: r,
                    schema: l,
                    getRecordModel: t.getRecordModel,
                    userTimeZone: (0, o(714350).P)(),
                    intl: o(962299).A.getIntl(),
                    userId: a.currentUser.id,
                    experimentService: o(218744).default,
                    collectionFeatureGates: (0, o(457103).i)(),
                    formulasModule: i,
                    spaceIdCreator: a.idCreator.getSpaceIdCreatorSync(t.getSpaceId()),
                    getRelationEdgeList: (0, o(323082).Y)({
                        environment: a,
                        spaceId: t.getSpaceId()
                    })
                })
            }

            function s(e) {
                let {
                    store: t,
                    collectionSchema: l,
                    property: r,
                    propertySchema: n,
                    environment: i
                } = e, {
                    value: s
                } = (0, o(815048).fJ)(o(864850).T.formulas);
                return (0, o(682985).K8)(() => a({
                    store: t,
                    collectionSchema: l,
                    property: r,
                    propertySchemaType: null == n ? void 0 : n.type,
                    formulasModule: s,
                    environment: i
                }), [l, i, r, null == n ? void 0 : n.type, t, s], {
                    debugName: "BlockPropertyValueContext.useIsBPVEmpty"
                })
            }

            function u(e) {
                let {
                    store: t,
                    collectionStore: l,
                    property: r,
                    disabled: n,
                    surface: i,
                    propertySchema: a,
                    collectionContextStore: s,
                    writeStateType: u
                } = e;
                return (0, o(682985).K8)(() => {
                    var e, d;
                    if (!t || !l || !r || "calendar" === i || "timeline" === i || (0, o(235089).u)(r) || (0, o(9247).z3)(a) || (0, o(973681).Lp)({
                            collectionStore: l,
                            property: r,
                            propertySchema: a
                        }) || null != s && s.isUnlistedViewStore.state || r === o(511791).hx || "comment" === u && !(0, o(512845).SF)(t.getSystemBlockTypeStore().getValue())) return !1;
                    if (n || !t.canEdit() || (0, o(444285).B)(t).state) return "edit" !== u && t.canComment() && !(0, o(88527).O)(t);
                    let c = (0, o(23803).JD)(l);
                    if ((0, o(973681).ni)({
                            store: t,
                            collectionStore: l,
                            collectionContextStore: s,
                            propertySchema: a,
                            property: r,
                            isJiraTwoWaySyncEnabled: c
                        }) || !l.isExternallyImportedAndSyncedCollection() && (0, o(561872).VF)(t.getModel(), r, t.getRecordModel)) return !1;
                    if (null != a && a.synced_permissions) switch (a.synced_permissions) {
                        case "read_only":
                            return !1;
                        case "read_write":
                            break;
                        default:
                            (0, o(722371).HB)(a.synced_permissions)
                    }
                    return !(t.isType("transcription") && (0, o(247438).w9s)(null == (e = t.getTitleStore()) ? void 0 : e.getValue()) || t.isType("transcription") && (null == (d = t.getFormat()) ? void 0 : d.transcription_calendar_event) !== void 0 && "title" === r)
                }, [i, r, a, l, s, n, t, u], {
                    debugName: `BlockPropertyValueContext.useWriteState|${u}`
                })
            }
        },
        467986: (e, t, o) => {
            o.d(t, {
                K: () => l
            });

            function l({
                type: e,
                store: t,
                textValue: r
            }) {
                if (!r || !e) return {
                    linkHref: void 0,
                    shouldShowMaliciousContentDialog: !1
                };
                let n = (null == t ? void 0 : t.getCreatedById()) === o(268033).xY.id && "url" === e;
                return {
                    linkHref: (0, o(561872).UY)(e, r),
                    shouldShowMaliciousContentDialog: n
                }
            }
        },
        486536: (e, t, o) => {
            o.d(t, {
                v: () => l
            });

            function l(e) {
                let {
                    blockId: t,
                    propertyId: l
                } = e;
                return (0, o(682985).K8)(() => o(332190).A.isPropertyWithDraftDiscussion({
                    blockId: t,
                    propertyId: l
                }), [t, l])
            }
        },
        763793: (e, t, o) => {
            o.d(t, {
                LE: () => i,
                lj: () => s
            }), o(898992), o(354520);
            var l = o(296540),
                r = o(474848);
            let n = {
                    hoveredLinkBoxStyle: {
                        background: void 0,
                        ...(0, o(793550).w_)()
                    },
                    pressedLinkBoxStyle: {
                        background: void 0,
                        ...(0, o(793550).w_)()
                    }
                },
                i = l.memo(function(e) {
                    let t, {
                            textValue: i,
                            type: a,
                            useShortenedUrl: u,
                            disableLinkify: d,
                            withComma: c,
                            store: p,
                            property: m
                        } = e,
                        f = (0, o(682985).K8)(() => {
                            if (p) return (0, o(966980).O3)(p, {
                                includePropertyDiscussions: !0
                            }).filter(e => e.getPropertyId() === m)
                        }, [p, m]),
                        y = (0, o(486536).v)({
                            blockId: null == p ? void 0 : p.id,
                            propertyId: m
                        }),
                        g = f && (null == f ? void 0 : f.length) > 0 || y,
                        h = (0, o(960253).e)(),
                        b = (0, o(960253).I)(() => ({
                            linkBoxStyle: {
                                pointerEvents: "all",
                                display: "inline",
                                background: void 0,
                                ...(0, o(793550).w_)(),
                                ...g && (0, o(605351).sQ)(h)
                            }
                        }), [g, h]),
                        {
                            collectionContextStore: v
                        } = (0, l.useContext)(o(422575).L8),
                        _ = (0, o(682985).K8)(() => null == v ? void 0 : v.searchQueryStore.state, [null == v ? void 0 : v.searchQueryStore]),
                        x = (0, o(682985).K8)(() => {
                            if (!_ || !i) return !1;
                            let e = (0, o(247438).k4p)(i);
                            return null == e ? void 0 : e.toLowerCase().includes(_.toLowerCase())
                        }, [_, i]),
                        {
                            linkHref: S,
                            shouldShowMaliciousContentDialog: M
                        } = (0, o(682985).K8)(() => (0, o(467986).K)({
                            textValue: i || (m ? null == p ? void 0 : p.getPropertyValue(m) : void 0),
                            type: a,
                            store: p
                        }), [m, p, i, a]);
                    t = i && "url" === a && (u || x) ? (0, r.jsx)(s, {
                        textValue: i,
                        searchQuery: _
                    }) : (0, o(247438).k4p)(i);
                    let C = (0, o(682985).K8)(() => {
                            if (null != f && f[0]) {
                                var e;
                                return (0, o(762507).wV)({
                                    discussionId: null == f || null == (e = f[0]) ? void 0 : e.id
                                })
                            }
                        }, [f]),
                        w = (0, o(533992).Y0)();
                    return !S || d ? (0, r.jsx)(r.Fragment, {
                        children: t
                    }) : (0, r.jsxs)(o(590422).Q, {
                        href: S,
                        onClick: e => {
                            !w.isElectron && (e.metaKey || e.ctrlKey) && !e.defaultPrevented && window.open(S, "_blank")
                        },
                        style: b.linkBoxStyle,
                        hoveredStyle: n.hoveredLinkBoxStyle,
                        pressedStyle: n.pressedLinkBoxStyle,
                        external: !0,
                        className: C,
                        preNavigationAction: e => {
                            M ? (0, o(805999).TW)({
                                propertyType: "url",
                                onConfirm: () => {
                                    e()
                                }
                            }) : e()
                        },
                        children: [t, c ? ", " : null]
                    })
                }),
                a = {
                    restOfUrl: {
                        color: o(632079).Tj.text.tertiary
                    }
                };

            function s({
                textValue: e,
                searchQuery: t
            }) {
                let {
                    domain: l,
                    restOfUrl: n
                } = (0, o(793550).Kc)(e);
                if (!l) return (0, r.jsx)(r.Fragment, {
                    children: (0, o(247438).k4p)(e)
                });
                let i = function(e, t, o) {
                    if (!t) return;
                    let l = t,
                        r = !1;
                    if (t && o) {
                        let n = null == t ? void 0 : t.toLowerCase().indexOf(o.toLowerCase()),
                            i = `${e}${t}`.toLowerCase().indexOf(o.toLowerCase());
                        if (n >= 0) {
                            let e = "";
                            n > 0 && (e = `${t.slice(0,1)}`), n > 1 && (e += "…");
                            let i = "";
                            n + o.length < t.length && (i = "…"), l = `${e}${t.slice(n,n+o.length)}${i}`, r = !0
                        } else if (i >= 0 && i + o.length > e.length) {
                            let n = i + o.length - e.length;
                            l = t.slice(0, n), n < t.length && (l += "…"), r = !0
                        }
                    }
                    return !r && t && t.length > 12 && (l = `${t.slice(0,4)}…${t.slice(-6)}`), l
                }(l, n, t);
                return (0, r.jsxs)(r.Fragment, {
                    children: [l, i ? (0, r.jsx)("span", {
                        style: a.restOfUrl,
                        children: i
                    }) : null]
                })
            }
        },
        805999: (e, t, o) => {
            o.d(t, {
                C0: () => d,
                CK: () => b,
                Dx: () => f,
                Fc: () => _,
                Gi: () => i,
                Hd: () => S,
                KU: () => M,
                TW: () => h,
                Vm: () => x,
                YA: () => m,
                d0: () => r,
                eb: () => n,
                ls: () => c,
                mY: () => s,
                px: () => p
            }), o(16280), o(296540);
            var l = o(474848);
            let r = 5e3,
                n = 500,
                i = (0, o(109939).YK)({
                    characterLimitReached: {
                        defaultMessage: "Character limit reached.",
                        id: "form.characterLimitReached"
                    },
                    questionLimitReachedTitle: {
                        defaultMessage: "Question limit reached",
                        id: "form.questionLimitReached.title"
                    },
                    questionLimitReachedSubtitle: {
                        defaultMessage: "Please delete a question before creating a new one.",
                        id: "form.questionLimitReached.subtitle"
                    },
                    questionLimitReachedFullMessage: {
                        defaultMessage: "Question limit reached. Please delete a question before creating a new one.",
                        id: "form.questionLimitReached.fullMessage"
                    }
                }),
                a = (0, o(109939).YK)({
                    title: {
                        defaultMessage: "Title",
                        id: "database.questionTypeName.title"
                    },
                    text: {
                        defaultMessage: "Text",
                        id: "database.questionTypeName.text"
                    },
                    number: {
                        defaultMessage: "Number",
                        id: "database.questionTypeName.numberTypeLabel"
                    },
                    url: {
                        defaultMessage: "URL",
                        id: "database.questionTypeName.url"
                    },
                    multi_select: {
                        defaultMessage: "Multiple choice",
                        id: "database.questionTypeName.multi_select"
                    },
                    person: {
                        defaultMessage: "Person",
                        id: "database.questionTypeName.person"
                    },
                    email: {
                        defaultMessage: "Email",
                        id: "database.questionTypeName.email"
                    },
                    phone_number: {
                        defaultMessage: "Phone",
                        id: "database.questionTypeName.phone_number"
                    },
                    date: {
                        defaultMessage: "Date",
                        id: "database.questionTypeName.dateTypeLabel"
                    },
                    file: {
                        defaultMessage: "Files & media",
                        id: "database.questionTypeName.file"
                    },
                    checkbox: {
                        defaultMessage: "Checkbox",
                        id: "database.questionTypeName.checkbox"
                    },
                    relation: {
                        defaultMessage: "Relation",
                        id: "database.questionTypeName.relation"
                    },
                    place: {
                        defaultMessage: "Place",
                        id: "database.questionTypeName.place"
                    }
                }),
                s = {
                    title: o(962299).A.formatMessage(a.title),
                    text: o(962299).A.formatMessage(a.text),
                    number: o(962299).A.formatMessage(a.number),
                    url: o(962299).A.formatMessage(a.url),
                    multi_select: o(962299).A.formatMessage(a.multi_select),
                    person: o(962299).A.formatMessage(a.person),
                    email: o(962299).A.formatMessage(a.email),
                    phone_number: o(962299).A.formatMessage(a.phone_number),
                    date: o(962299).A.formatMessage(a.date),
                    file: o(962299).A.formatMessage(a.file),
                    checkbox: o(962299).A.formatMessage(a.checkbox),
                    relation: o(962299).A.formatMessage(a.relation),
                    place: o(962299).A.formatMessage(a.place)
                },
                u = ["relation", "person"];

            function d({
                isFormPublic: e,
                isFormClosed: t
            }) {
                return t ? "closed" : e ? "shared_to_web" : "shared_to_space"
            }

            function c(e) {
                let {
                    formSharingState: t,
                    isOverBlockLimit: r,
                    spaceName: n
                } = e;
                if (r) return (0, l.jsx)(o(109939).sA, {
                    id: "editorFormResponderWarning.overBlockLimit.message",
                    defaultMessage: "You are over the block limit. No new responses can be submitted through this form."
                });
                switch (t) {
                    case "closed":
                        return (0, l.jsx)(o(109939).sA, {
                            id: "editorFormResponderWarning.closed.message",
                            defaultMessage: "This form is closed. No new responses can be submitted."
                        });
                    case "shared_to_web":
                        return (0, l.jsx)(o(109939).sA, {
                            id: "editorFormResponderWarning.public.message",
                            defaultMessage: "This form is public. Anyone with the link can submit a response."
                        });
                    case "shared_to_space":
                        return (0, l.jsx)(o(109939).sA, {
                            id: "editorFormResponderWarning.internal.message",
                            defaultMessage: "Only members at {spaceName} can fill out this form.",
                            values: {
                                spaceName: n
                            }
                        })
                }
            }

            function p(e, t = !1) {
                return e.getIsFormPublic() ? (0, o(483227).Ay)({
                    store: e,
                    preferPublicLink: !0,
                    pageVisitSource: o(254656).y8.FormPublicPage
                }) : (0, o(483227).Ay)({
                    store: e,
                    openInCenterPeek: t,
                    pageVisitSource: o(254656).y8.FormInternalPage
                })
            }

            function m({
                collectionContextStore: e,
                propertyId: t,
                questionId: l,
                area: r,
                parentModuleId: n,
                layoutStore: i
            }) {
                var a, s;
                let u = e ? (0, o(752242).sl)(e) : void 0,
                    d = null == e ? void 0 : e.collectionViewStore(),
                    c = null == e ? void 0 : e.collectionStore(),
                    p = null == d ? void 0 : d.getFormat(),
                    f = null == p || null == (a = p.form_block_pointer) ? void 0 : a.id,
                    y = null == e || null == (s = e.normalizedSchemaStore.state) || null == (s = s[t]) ? void 0 : s.type;
                if (!c) throw Error("Collection store is undefined");
                return {
                    question_type: y,
                    question_id: l,
                    form_id: f,
                    is_conditional: "form_conditional_modules" === r,
                    parent_question_type: (0, o(266967)._N)(n, i, c),
                    ...u ? ? {}
                }
            }

            function f(e) {
                let t = null == e ? void 0 : e.getFormat().form_layout_pointer;
                if (t) return o(97746).K.createChildStore(e, t)
            }
            let y = new(o(245541)).R({
                    key: "opt_out_form_content_warning",
                    namespace: o(274919).cd,
                    important: !1,
                    trackingType: "preference"
                }),
                g = {
                    style0: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: o(699422).Wy.medium
                    },
                    style1: {
                        textAlign: "center",
                        fontSize: 14
                    },
                    style2: {
                        fontWeight: o(699422).Wy.regular
                    }
                };

            function h(e) {
                let t = y.getState(),
                    r = void 0 === t || Date.now() - t > o(627179).nD,
                    n = "file" === e.propertyType ? (0, l.jsx)(o(109939).sA, {
                        id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.file.message",
                        defaultMessage: "Download file?"
                    }) : (0, l.jsx)(o(109939).sA, {
                        id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.url.message",
                        defaultMessage: "Open link?"
                    }),
                    i = (0, l.jsx)(o(109939).sA, {
                        id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.description",
                        defaultMessage: "This content was submitted anonymously. Only proceed if you trust the source."
                    }),
                    a = "file" === e.propertyType ? (0, l.jsx)(o(109939).sA, {
                        id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.file.confirmLabel",
                        defaultMessage: "Download anyway"
                    }) : (0, l.jsx)(o(109939).sA, {
                        id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.url.confirmLabel",
                        defaultMessage: "Open anyway"
                    });
                r ? o(647095).ui({
                    showCancel: !1,
                    showCloseButton: !0,
                    keepFocus: !0,
                    mode: "wide",
                    message: (0, l.jsx)("div", {
                        style: g.style0,
                        children: n
                    }),
                    description: (0, l.jsx)("div", {
                        style: g.style1,
                        children: i
                    }),
                    items: [{
                        label: a,
                        onAccept: e.onConfirm,
                        color: "red",
                        buttonType: "solid"
                    }],
                    selectionItems: [{
                        key: "opt_out",
                        showBelowButtons: !0,
                        text: (0, l.jsx)("span", {
                            style: g.style2,
                            children: (0, l.jsx)(o(109939).sA, {
                                id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.optOut",
                                defaultMessage: "Don’t show again for 24 hours"
                            })
                        }),
                        onSelect: e => {
                            !0 === e ? y.setState(Date.now()) : y.setState(void 0)
                        }
                    }]
                }) : e.onConfirm()
            }

            function b(e) {
                let {
                    environment: t,
                    propertyType: l,
                    propertySchema: r,
                    isPublicForm: n
                } = e;
                if (n && u.includes(l)) {
                    if ("person" === l) return "invalid_property_type_for_public_form";
                    if ((null == r ? void 0 : r.type) === "relation") {
                        let e = (0, o(390768).N)(r);
                        if (e) {
                            let l = new(o(356912)).m(t, e);
                            if (l.isDefined() && !(0, o(862085).qw)(l)) return "related_collection_not_public"
                        }
                    }
                }
            }
            let v = (0, o(109939).YK)({
                checkboxYes: {
                    id: "FormResponseSnapshotModal.Checkbox.Yes",
                    defaultMessage: "Yes"
                },
                checkboxNo: {
                    id: "FormResponseSnapshotModal.Checkbox.No",
                    defaultMessage: "No"
                }
            });

            function _(e) {
                return "true" === e ? o(962299).A.formatMessage(v.checkboxYes) : o(962299).A.formatMessage(v.checkboxNo)
            }

            function x(e) {
                let {
                    formQuestionStore: t,
                    propertySchema: l
                } = e;
                return (0, o(682985).K8)(() => {
                    let e = null == t ? void 0 : t.getModel();
                    return !!e && !!l && ((0, o(703049).Fi)({
                        formQuestionModel: e,
                        propertySchema: l
                    }) || (null == l ? void 0 : l.type) === "select")
                }, [t, l])
            }

            function S(e) {
                let {
                    draftFormBlockStore: t,
                    formQuestionStore: l,
                    propertyId: r,
                    propertySchema: n
                } = e;
                if (!t || !r || !n || "multi_select" !== n.type && "select" !== n.type) return;
                let i = t.getPropertyValue(r);
                if ("select" === n.type) return (0, o(561872).L3)(i, n.options ? ? []);
                let a = l.getModel();
                if (a && !(0, o(703049).Fi)({
                        formQuestionModel: a,
                        propertySchema: n
                    })) return;
                let s = (0, o(561872).o2)(i, n.options ? ? []);
                return 1 === s.length ? s[0] : void 0
            }

            function M(e) {
                var t;
                let {
                    formQuestionStore: l,
                    propertySchema: r
                } = e;
                if (r && (0, o(532792).l)(r)) return (null == (t = l.getPropertyTypeSpecificConfig(r.type)) ? void 0 : t.displayMode) ? ? "list"
            }
        },
        973681: (e, t, o) => {
            o.d(t, {
                DZ: () => d,
                FH: () => c,
                Lp: () => s,
                QK: () => u,
                YX: () => p,
                ni: () => n
            });
            var l = o(296540),
                r = () => o(41403);

            function n(e) {
                var t, l, r;
                let n, {
                    collectionStore: i,
                    propertySchema: a,
                    collectionContextStore: s,
                    store: u,
                    property: d,
                    isJiraTwoWaySyncEnabled: c
                } = e;
                if ((0, o(23803).RL)({
                        isExternallyImportedAndSyncedCollection: i.isExternallyImportedAndSyncedCollection(),
                        propertyId: d,
                        collectionStore: i,
                        propertySchema: a
                    })) return !1;
                if (!c) return !0;
                let p = !!((null == (t = i.getFormat()) || null == (t = t.sync_state) ? void 0 : t.syncing) || (null == (l = i.getFormat()) ? void 0 : l.error));
                if ((null == a ? void 0 : a.synced_permissions) !== "read_write" || !(null != (r = i.getFormat().sync_state) && r.enable_two_way_sync) && (!(n = i.getSpaceStore()) || (0, o(262166).OX)(n.getSubscriptionTier())) || (0, o(260585).r)(i) || p || !o(205885).A.state.online) return !0;
                let m = null == s ? void 0 : s.externalSyncStore.state;
                return !(null != m && m.shouldAllowUserToEditSyncedCollection()) && (0, o(561872).VF)(u.getModel(), d, u.getRecordModel)
            }
            o(11448).Hx.Dates;
            let i = {
                    [o(11448).Hx.Dates]: {
                        propertyId: o(11448).Hx.Dates,
                        validationCheck: e => {
                            let {
                                collectionStore: t
                            } = e, l = t.getPropertyMapping();
                            return !!(null == l ? void 0 : l[o(11448).Hx.StatusV2])
                        }
                    }
                },
                a = {
                    date: [o(11448).Hx.Dates]
                };

            function s(e) {
                let {
                    collectionStore: t,
                    property: o,
                    propertySchema: l
                } = e;
                if (!l) return !0;
                let r = t.getPropertyMapping();
                if (!r) return !1;
                for (let e of a[l.type] ? ? []) {
                    let l = i[e];
                    if (!l.validationCheck({
                            collectionStore: t
                        })) continue;
                    let n = null == r ? void 0 : r[l.propertyId];
                    if (o === l.propertyId || o === n) return !0
                }
                return !1
            }

            function u({
                store: e,
                property: t,
                surface: o,
                onClick: r,
                collectionStore: n,
                blockPropertyValueOverlayStore: i,
                disableHorizontalEdgeScroll: a,
                focusButtonAfterClose: s
            }, d) {
                return (0, l.useMemo)(() => ({
                    store: e,
                    property: t,
                    surface: o,
                    onClick: r,
                    collectionStore: n,
                    blockPropertyValueOverlayStore: i,
                    disableHorizontalEdgeScroll: a,
                    isStatusCheckbox: null == d ? void 0 : d.isStatusCheckbox,
                    focusButtonAfterClose: s
                }), [i, n, a, o, null == d ? void 0 : d.isStatusCheckbox, r, t, e, s])
            }

            function d(e, t, l) {
                return (0, o(682985).K8)(() => {
                    if (!e.isDefined() || !e.isTemplate()) return;
                    let r = null == l ? void 0 : l.type;
                    if (!(0, o(9247).mF)(r)) return;
                    let n = e.getPropertyValue(t);
                    if (!n) return;
                    let i = null == n ? void 0 : n[0];
                    if (i && o(247438).qXl(i)) {
                        let e = o(247438).PVS(o(247438).wQU(i)),
                            t = e && o(247438).y0Y(e);
                        return t && {
                            templateVariable: t.type
                        }
                    }
                }, [t, l, e], {
                    debugName: "useTemplateVariableContext"
                })
            }

            function c(e) {
                var t;
                let {
                    collectionStore: l,
                    propertySchema: r,
                    isJiraTwoWaySyncEnabled: n,
                    surface: i,
                    propertyId: a
                } = e;
                return !(!l || !l.isExternallyImportedAndSyncedCollection() || !n || "page" !== i || !(null != (t = l.getFormat().sync_state) && t.enable_two_way_sync) || (null == r ? void 0 : r.synced_permissions) === "read_write" || a && (0, o(23803).sc)({
                    propertyId: a,
                    collectionStore: l,
                    propertySchema: r,
                    isExternallyImportedAndSyncedCollection: l.isExternallyImportedAndSyncedCollection()
                })) && !0
            }

            function p(e) {
                let {
                    newNumberValue: t,
                    environment: l,
                    stores: n,
                    spaceId: i
                } = e, a = o(272139).h(t);
                (0, o(377796).createAndCommit)({
                    userAction: "BlockPropertyValueOverlay.handleNumberValueChange",
                    environment: l,
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        for (let t of n) r().R9({
                            environment: l,
                            store: t,
                            value: a,
                            transaction: e
                        })
                    }
                })
            }
        }
    }
]);