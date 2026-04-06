"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [3476, 66425, 95737], {
        1249: (e, t, n) => {
            n.d(t, {
                g: () => i
            });

            function i(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        2009: (e, t, n) => {
            n.d(t, {
                w: () => r
            });
            var i = () => n(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        asyncModals: []
                    }
                }
            }
            let r = new a
        },
        21731: (e, t, n) => {
            n.d(t, {
                O: () => i
            });

            function i(e) {
                n(647095).Qg(e), n(773352).log({
                    level: "error",
                    from: "teamActions",
                    type: "TeamApiError",
                    error: (0, n(416607).convertErrorToLog)(e.error),
                    data: {
                        miscDataToConvertToString: {
                            body: e.body,
                            status: e.status
                        }
                    }
                })
            }
        },
        36663: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowChevronSingleDownFillIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.72 6.72 12.56 7.16",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.38 13.619a.875.875 0 0 0 1.238 0l5.4-5.4a.875.875 0 0 0-1.237-1.238L10 11.763 5.218 6.98a.875.875 0 1 0-1.237 1.24z"
                    })
                },
                a = (0, n(104509).wt)("arrowChevronSingleDownFill", i, "fill")
        },
        151002: (e, t, n) => {
            n.d(t, {
                i: () => i
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);

            function i(e) {
                var t;
                let i, a, r, {
                        environment: o,
                        type: s,
                        blockStore: l,
                        commentTextValue: d,
                        transaction: u,
                        files: m,
                        property_id: c,
                        formulasModule: f,
                        fromOverride: g
                    } = e,
                    p = e.discussionId ? ? (0, n(295447).Z1)({
                        environment: o,
                        table: n(832375).$YH,
                        spaceId: l.pointer.spaceId
                    }),
                    {
                        id: h
                    } = o.currentUser;
                if (!h) return;
                let v = n(332190).A.state,
                    {
                        property_type: T,
                        collection_id: b,
                        collection_view_id: M,
                        view_type: A,
                        collection_view_block_id: y
                    } = (0, n(618682).q)(c, l);
                if (c && v.open && "block" === v.type) {
                    let e = v.blockStore.getPropertyStore(c);
                    if (i = e.getValue() || [], "status" === T && 0 === i.length && (i = [
                            [n(962299).A.formatMessage(n(998833).M_.statusOptionNotStarted)]
                        ]), "formula" === T && (i = function({
                            store: e,
                            blockStore: t,
                            property_id: i,
                            formulasModule: a,
                            environment: r
                        }) {
                            var o;
                            let s = t.getAssociatedCollectionStore(),
                                l = t.getRecordModel,
                                d = null == s ? void 0 : s.getModel(),
                                u = null == d ? void 0 : d.getNormalizedSchema(l)[i],
                                m = null == u || null == (o = u.formula2) ? void 0 : o.code,
                                c = t.getModel(),
                                f = Number(n(627179).Xb),
                                g = n(218744).default.getConfigKey("collection_request_settings", "clientFormulaTimeoutMs") ? ? f;
                            if (c && m && a) {
                                let o = a.evaluateCollectionFormula2WithoutCache({
                                    block: c,
                                    property: i,
                                    formulaCode: m,
                                    getRecordModel: e.getRecordModel,
                                    intl: n(962299).A.getIntl(),
                                    userTimeZone: (0, n(714350).P)(),
                                    depth: 0,
                                    visitedProperties: new Set,
                                    formulaTimeoutTimestampMs: Date.now() + g,
                                    resultCache: new Map,
                                    regExpCache: new Map,
                                    formatDateCache: new Map,
                                    experimentService: n(218744).default,
                                    collectionFeatureGates: (0, n(457103).i)(),
                                    spaceIdCreator: r.idCreator.getSpaceIdCreatorSync(t.getSpaceId())
                                });
                                if (o && n(300441).Q.isSuccess(o)) return (0, n(297493).Ht)(o.value)
                            }
                            return []
                        }({
                            store: e,
                            blockStore: l,
                            property_id: c,
                            formulasModule: f,
                            environment: o
                        })), "text" === T) {
                        let t = {
                            startIndex: 0,
                            endIndex: (0, n(247438).qAZ)(i).length
                        };
                        n(589873).Mw({
                            environment: o,
                            store: e,
                            selection: t,
                            annotation: [n(247438).Ifu.Discussion, p],
                            transaction: u
                        })
                    }
                }
                let w = l.getType(),
                    S = l.getFormat();
                if ((0, n(955630).Db)(w, S) && !(0, n(955630).$I)(w)) {
                    let e = l.getTitleValue();
                    a = n(247438).DJ2(n(247438).Uee(e, {
                        removeSuggestionAnnotationsAndText: !0,
                        removeSuggestionAnnotations: !0,
                        removeDiscussions: !0
                    }))
                }
                c && i && (a = i);
                let {
                    discussionStore: x,
                    commentStore: I
                } = (0, n(952874).G)({
                    createDiscussionArgs: "default" === s ? {
                        type: "default",
                        context: a,
                        property_id: c
                    } : {
                        type: "suggestion",
                        modifiedBlockIds: [l.pointer.id]
                    },
                    blockStore: l,
                    environment: o,
                    transaction: u,
                    commentTextValue: d,
                    files: n(385475).JC(m),
                    discussionId: p
                });
                (0, n(598403).B)({
                    transaction: u,
                    blockStore: l,
                    discussionId: x.id
                }), n(332190).A.state.open ? "comment" === n(332190).A.state.content && (r = n(332190).A.state.from) : r = n(332190).A.state.from, g && (r = g);
                let k = (0, n(545849).B)(null == (t = l.getAssociatedCollectionStore()) ? void 0 : t.getLayoutStore());
                return n(65255).v3(o, {
                    discussion_id: x.id,
                    discussion_type: x.getType(),
                    comment_id: I.id,
                    parent_block_id: x.getParentId(),
                    from: r,
                    property_id: c,
                    property_type: T,
                    collection_view_id: M,
                    view_type: A,
                    collection_id: b,
                    collection_view_block_id: y,
                    page_discussion_layout_location: k
                }), (0, n(585356).c)(), x
            }
        },
        189498: (e, t, n) => {
            n.d(t, {
                L: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    teamStore: i,
                    shouldScroll: a
                } = e;
                a && (0, n(639323).M)({
                    teamStore: i,
                    environment: t
                });
                let r = (0, n(709633).O)({
                    teamStore: i
                });
                r && !(r.length < 1) && ((0, n(545586).navigateToBlock)({
                    environment: t,
                    store: r[0],
                    pageVisitSource: n(254656).y8.JoinTeam
                }), n(649807)._L(t, {
                    store: i
                }))
            }
        },
        200424: (e, t, n) => {
            e.exports = n.p + "9ade71d75a1c0e93.png"
        },
        269298: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                lockFillIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.95 12.05 15.66",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6 5.95a4 4 0 1 1 8 0v1.433a2.426 2.426 0 0 1 2.025 2.392v5.4A2.425 2.425 0 0 1 13.6 17.6H6.4a2.425 2.425 0 0 1-2.425-2.425v-5.4c0-1.203.876-2.201 2.025-2.392zm6.75 1.4v-1.4a2.75 2.75 0 1 0-5.5 0v1.4zm-2.2 5.458a1.35 1.35 0 1 0-1.1 0v1.242a.55.55 0 0 0 1.1 0z"
                    })
                },
                a = (0, n(104509).wt)("lockFill", i, "fill")
        },
        274749: (e, t, n) => {
            n.d(t, {
                i: () => i
            });

            function i(e) {
                var t;
                return null == (t = e.getSetting("getting_started_templates")) ? void 0 : t.default[0].page_id
            }
        },
        280996: (e, t, n) => {
            n.d(t, {
                b: () => r,
                T: () => o()
            }), n(581454);
            var i = n(296540),
                a = n(474848);
            let r = i.memo(function(e) {
                let {
                    store: t = n(2009).w
                } = e, r = (0, n(682985).K8)(() => t.state.asyncModals, [t]);
                return (0, a.jsx)(a.Fragment, {
                    children: r.map(e => {
                        let {
                            id: t,
                            internalRenderModal: n,
                            isOpen: r
                        } = e, o = n(r);
                        return (0, a.jsx)(i.Fragment, {
                            children: o
                        }, t)
                    })
                })
            });
            var o = () => n(796123)
        },
        310324: (e, t, n) => {
            n.d(t, {
                Ay: () => f,
                KF: () => c,
                LG: () => s,
                Zf: () => d,
                yD: () => l
            });
            var i = n(296540),
                a = n(474848);
            let r = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                o = i.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: o,
                    preventCaptureSpacebarWhenEmpty: s,
                    ...l
                }, d) {
                    let {
                        left: u,
                        right: m,
                        inputLeft: c,
                        inputRight: f,
                        inputRightStyle: g,
                        disableInput: p,
                        inputOuterStyle: v,
                        rightMobileEditLabel: b,
                        mobileKeyboardOnDismiss: M,
                        style: A,
                        value: y,
                        onChange: w,
                        autosize: S,
                        autosizeMinHeight: x,
                        autosizeMaxHeight: I,
                        customElementAttributes: k,
                        disabled: _,
                        format: j,
                        id: N,
                        placeholder: D,
                        type: B,
                        autoFocus: C,
                        focus: O,
                        focusInitial: P,
                        focusAfterAnimation: R,
                        forceShowClearButton: L,
                        ignoreKeyboardMode: V,
                        inputElementAttributes: W,
                        inputStyle: z,
                        isRightLastElementOfInput: F,
                        maxlength: E,
                        min: Y,
                        max: H,
                        selectAll: K,
                        showClearButton: U,
                        suppressFocusRing: G,
                        textarea: X,
                        textareaSubmitOnEnter: $,
                        onBlur: J,
                        onCancel: q,
                        onClearButtonClick: Q,
                        onClick: Z,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: en,
                        ...ei
                    } = l, [ea, er] = (0, i.useState)(() => !!(O || P));
                    (0, i.useEffect)(() => {
                        void 0 !== O && er(O)
                    }, [O]);
                    let eo = e ? void 0 : n(763230).D_,
                        es = !t || y.length > 0 ? n(763230).D_ : void 0,
                        el = o ? void 0 : n(763230).D_,
                        ed = !s || y.length > 0 ? n(763230).D_ : void 0,
                        eu = (0, n(649476).Tf)(),
                        em = (0, i.useContext)(n(649476).xu),
                        ec = (0, i.useRef)(null),
                        ef = {
                            value: y,
                            onChange: w,
                            autosize: S,
                            autosizeMinHeight: x,
                            autosizeMaxHeight: I,
                            customElementAttributes: k,
                            disabled: _,
                            format: j,
                            id: N,
                            placeholder: D,
                            type: B,
                            autoFocus: C,
                            focus: O,
                            focusInitial: P,
                            focusAfterAnimation: R,
                            forceShowClearButton: L,
                            ignoreKeyboardMode: V,
                            inputElementAttributes: W,
                            inputStyle: z,
                            isRightLastElementOfInput: F,
                            maxlength: E,
                            min: Y,
                            max: H,
                            selectAll: K,
                            showClearButton: U,
                            suppressFocusRing: G,
                            textarea: X,
                            textareaSubmitOnEnter: $,
                            onBlur: J,
                            onCancel: q,
                            onClearButtonClick: Q,
                            onClick: Z,
                            onFocus: ee,
                            onKeyDown: et,
                            onSubmit: en
                        };
                    return (0, a.jsx)(n(369064).N, {
                        debugName: "InputMenuItem",
                        capture: !0,
                        onUntab: n(763230).D_,
                        onTab: n(763230).D_,
                        onSelectAll: n(763230).D_,
                        onRedo: n(763230).D_,
                        onUndo: n(763230).D_,
                        onToggleBold: n(763230).D_,
                        onToggleItalics: n(763230).D_,
                        onToggleCode: n(763230).D_,
                        onCut: el,
                        onCopy: el,
                        onPaste: el,
                        onKeypress: n(763230).D_,
                        onLeft: eo,
                        onRight: eo,
                        onDelete: es,
                        onBackspace: es,
                        onSpace: ed,
                        children: n(986939).A.isMobile ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(n(636518).Ay, {
                                ref: d,
                                ...ei,
                                itemMarginLeft: eu ? 8 : void 0,
                                style: A,
                                title: (0, a.jsx)(T, {
                                    ref: ec,
                                    left: u,
                                    right: m,
                                    inputLeft: c,
                                    inputRight: f,
                                    inputRightStyle: g,
                                    disableInput: p,
                                    inputOuterStyle: v,
                                    rightMobileEditLabel: b,
                                    isFocused: ea,
                                    setIsFocused: er,
                                    ...ef
                                })
                            }), (0, a.jsx)(n(368678).P, {
                                show: ea && em.menuType !== n(649476).gu.ActionSheet,
                                onDismiss: M,
                                inputRef: ec
                            })]
                        }) : (0, a.jsx)(n(636518).Ay, {
                            ref: d,
                            ...ei,
                            left: u,
                            right: m,
                            isTokenTitle: !0,
                            title: (0, a.jsx)(h, {
                                ref: ec,
                                disableInput: p,
                                inputOuterStyle: v,
                                inputRight: f,
                                inputRightStyle: g,
                                inputLeft: c,
                                ...ef
                            }),
                            style: { ...r,
                                ...A
                            }
                        })
                    })
                }),
                s = 30,
                l = 28;

            function d(e) {
                let {
                    icon: t
                } = e;
                return t({
                    fill: n(632079).Tj.icon.secondary,
                    width: n(104509).Ev.sm,
                    height: n(104509).Ev.sm,
                    flexGrow: 0,
                    flexShrink: 0
                })
            }
            let u = {
                    outlineButtonHovered: {
                        background: n(632079).Tj.background.secondary
                    }
                },
                m = (0, n(64960)._S)({
                    color: n(632079).Tj.background.primary
                });

            function c(e) {
                let t = (0, n(533992).WS)(),
                    i = (0, n(960253).I)(() => ({
                        outlineButton: { ...(0, n(64960).qq)({
                                shape: "default",
                                size: "sm",
                                hasIconOnly: !0,
                                isButtonGapEnabled: !0
                            }),
                            fontWeight: n(699422).Wy.medium,
                            lineHeight: 1.2,
                            border: `1px solid ${n(632079).Tj.border.primaryTranslucent}`,
                            background: e.hasBackground ? n(632079).Tj.background.primary : void 0
                        },
                        outlineButtonPressed: {
                            background: m.pressed
                        }
                    }), [e.hasBackground]);
                return (0, a.jsx)(n(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...i.outlineButton,
                        ...e.style,
                        height: t ? s : l,
                        width: t ? s : l
                    },
                    hoveredStyle: u.outlineButtonHovered,
                    pressedStyle: i.outlineButtonPressed
                })
            }
            let f = o,
                g = {
                    style0: {
                        color: n(632079).Tj.text.secondary
                    }
                };

            function p({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let r = (0, n(533992).v3)(),
                    o = (0, i.useCallback)(e => {
                        e.preventDefault();
                        let i = t.current;
                        i && (0, n(862215).G)(r, i)
                    }, [r, t]);
                return (0, a.jsx)(n(64960).Ay, {
                    onClick: o,
                    style: g.style0,
                    children: e
                })
            }
            let h = i.forwardRef(function(e, t) {
                    let {
                        disabled: i,
                        disableInput: r,
                        inputOuterStyle: o,
                        inputRight: s,
                        inputRightStyle: l,
                        inputLeft: d,
                        min: u,
                        textarea: m,
                        ...c
                    } = e;
                    return (0, a.jsx)(n(36481).p, { ...c,
                        ref: t,
                        disabled: i || r,
                        style: {
                            height: m ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...o
                        },
                        left: d,
                        right: s,
                        rightStyle: l,
                        min: u,
                        textarea: m
                    })
                }),
                v = {
                    fontSize: 16
                },
                T = i.forwardRef(function(e, t) {
                    let {
                        left: r,
                        right: o,
                        inputLeft: s,
                        inputRight: l,
                        inputRightStyle: d,
                        disableInput: u,
                        inputOuterStyle: m,
                        rightMobileEditLabel: c,
                        isFocused: f,
                        setIsFocused: g,
                        disabled: h,
                        showClearButton: T,
                        onBlur: b,
                        onFocus: M,
                        ...A
                    } = e, y = (0, i.useCallback)(e => {
                        g(!1), b && b(e)
                    }, [b, g]), w = (0, i.useCallback)(e => {
                        g(!0), M && M(e)
                    }, [M, g]), S = (0, i.useRef)(null), x = (0, n(421573).A)(S, t), I = c && !f ? (0, a.jsx)(p, {
                        rightMobileEditLabel: c,
                        inputRef: S
                    }) : null;
                    return (0, a.jsx)(n(36481).p, { ...A,
                        ref: x,
                        format: "transparent",
                        style: { ...v,
                            ...m
                        },
                        onFocus: w,
                        onBlur: y,
                        showClearButton: !1 !== T,
                        disabled: h || u,
                        left: s || r,
                        right: I || l || o,
                        rightStyle: d
                    })
                })
        },
        329171: (e, t, n) => {
            n.d(t, {
                n: () => i
            });

            function i(e) {
                return (0, n(862085).Jh)(e) || (0, n(862085).K1)(e)
            }
        },
        356164: (e, t, n) => {
            n.d(t, {
                VV: () => o,
                WE: () => d,
                cO: () => m,
                eh: () => u,
                fE: () => s,
                hX: () => l,
                jH: () => c,
                vH: () => r
            }), n(898992), n(430670);
            let i = (0, n(109939).YK)({
                leftTeam: {
                    id: "teamPermissionsActions.leftTeam",
                    defaultMessage: "Left {teamName}"
                },
                leftTeamNoName: {
                    id: "teamPermissionsActions.leftTeamNoName",
                    defaultMessage: "Left teamspace"
                },
                leftYetStillInTeam: {
                    id: "teamPermissionsActions.leftYetStillInTeam",
                    defaultMessage: "You are still in {hasTeamName, select, true {{teamName}} other {the teamspace}} because you are a member of the following groups: {groupsString}"
                },
                removedYetStillInTeam: {
                    id: "teamPermissionsActions.removedYetStillInTeam",
                    defaultMessage: "{hasMemberName, select, true {{memberName}} other {The removed user}} is still in {hasTeamName, select, true {{teamName}} other {the teamspace}} because they are a member of the following groups: {groupsString}"
                },
                joinedTeam: {
                    id: "teamPermissionsActions.joinedTeam",
                    defaultMessage: "Joined {teamName}"
                },
                joinedTeamUsingAdminPrivileges: {
                    id: "teamPermissionsActions.joinedTeamUsingAdminPrivileges",
                    defaultMessage: "Joined {teamName} using admin privileges"
                },
                upgradedSelfToOwner: {
                    id: "teamPermissionsActions.upgradedSelfToOwnerUsingAdminPrivileges",
                    defaultMessage: "Became owner of {teamName} using admin privileges"
                },
                archivedTeam: {
                    id: "teamPermissionsActions.archivedTeam",
                    defaultMessage: "Archived {teamName}"
                },
                restoredTeam: {
                    id: "teamPermissionsActions.restoredTeam",
                    defaultMessage: "Restored {teamName}"
                },
                restoredTeamNoName: {
                    id: "teamPermissionsActions.restoredTeamNoName",
                    defaultMessage: "Restored teamspace"
                },
                duplicatedTeam: {
                    id: "teamPermissionsActions.duplicatedTeam",
                    defaultMessage: "Duplicated {teamName}"
                },
                duplicatedTeamNoName: {
                    id: "teamPermissionsActions.duplicatedTeamNoName",
                    defaultMessage: "Duplicated teamspace"
                }
            });

            function a(e, t, i) {
                let a = n(962299).A.formatMessage(e, { ...t
                });
                n(436555).D6({
                    label: a,
                    durationMs: i
                })
            }

            function r(e) {
                return a(i.upgradedSelfToOwner, {
                    teamName: e
                })
            }

            function o({
                teamName: e,
                usingAdminPrivileges: t
            }) {
                return a(t ? i.joinedTeamUsingAdminPrivileges : i.joinedTeam, {
                    teamName: e
                })
            }

            function s(e) {
                return e ? a(i.leftTeam, {
                    teamName: e
                }) : a(i.leftTeamNoName)
            }

            function l(e, t) {
                let r = (0, n(890142).l)(t.flatMap(e => e.name || []));
                a(i.leftYetStillInTeam, {
                    hasTeamName: void 0 !== e,
                    teamName: e,
                    groupsString: r
                }, n(441742).LX)
            }

            function d(e, t, r) {
                let o = (0, n(890142).l)(r.flatMap(e => e.name || []));
                a(i.removedYetStillInTeam, {
                    hasMemberName: void 0 !== e,
                    hasTeamName: void 0 !== t,
                    memberName: e,
                    teamName: t,
                    groupsString: o
                }, n(441742).LX)
            }

            function u(e) {
                return a(i.archivedTeam, {
                    teamName: e
                })
            }

            function m(e) {
                return e ? a(i.restoredTeam, {
                    teamName: e
                }) : a(i.restoredTeamNoName)
            }

            function c(e) {
                return e ? a(i.duplicatedTeam, {
                    teamName: e
                }) : a(i.duplicatedTeamNoName)
            }
        },
        356622: (e, t, n) => {
            n.d(t, {
                V: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    errors: a
                } = e, r = (0, n(274749).i)(i);
                if (!r) return;
                let o = i.getSetting("getting_started_template_errors");
                (0, n(377796).createAndCommit)({
                    userAction: "spaceActions.setGettingStartedTemplateError",
                    environment: t,
                    cellTarget: {
                        spaceWithId: i.id
                    },
                    canUndo: !0,
                    perform: e => {
                        (0, n(818116).R)(i, e, {
                            getting_started_template_errors: { ...o,
                                [r]: a
                            }
                        })
                    }
                })
            }
        },
        368678: (e, t, n) => {
            n.d(t, {
                P: () => o
            });
            var i = n(296540),
                a = n(474848);
            let r = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: n(632079).Tj.blue.text.accentPrimary,
                    fontWeight: n(699422).Wy.semibold
                }
            };

            function o(e) {
                let {
                    onDismiss: t,
                    inputRef: o
                } = e, s = (0, n(533992).Y0)(), l = (0, i.useRef)(null), d = s.isMobileNative && s.isIOS, u = d && e.show;
                (0, n(336494).b)(n(651748).A, () => ({
                    getNode: () => l.current,
                    isShown: () => u
                }), [u]);
                let m = (0, n(571354).n)(),
                    c = (0, i.useCallback)(() => {
                        var e;
                        null == o || null == (e = o.current) || e.focus(), t && t();
                        let n = document.activeElement;
                        n instanceof HTMLElement && n.blur()
                    }, [o, t]);
                if (!d) return null;
                let f = u ? -(n(247800).j + m) : 0;
                return (0, a.jsx)(n(114596).O, {
                    open: !0,
                    children: (0, a.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: n(247800).j,
                            display: u ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: n(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${f}px)`,
                            transition: u ? "ease-out" : "ease-in",
                            boxShadow: u ? `
								0 -1px 0 ${n(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: l,
                        children: (0, a.jsx)(n(64960).Ay, {
                            style: r.style0,
                            onTouchEnd: () => {
                                c()
                            },
                            children: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        437188: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var i = n(474848);
            let a = function({
                collectionViewName: e,
                collectionViewType: t
            }) {
                return e ? (0, i.jsx)(n(93594).A, {
                    children: e
                }) : "page" === t ? (0, i.jsx)(n(109939).sA, {
                    id: "database.collectionView.untitledName.untitled",
                    defaultMessage: "Untitled"
                }) : (0, i.jsx)(n(109939).sA, { ...n(4587).X[t]
                })
            }
        },
        445283: (e, t, n) => {
            n.d(t, {
                N: () => i
            });

            function i(e) {
                if ("avatar" === e) return n(616922).eQ;
                if ("xsmall" === e) return 18;
                if ("xsmall_plus" === e) return 24;
                if ("small" === e) return 28;
                if ("small_plus" === e) return 32;
                else if ("medium" === e) return 36;
                else if ("medium_sidebar_button" === e) return 40;
                else if ("medium_plus" === e) return 44;
                else if ("medium_large" === e) return 48;
                else if ("large" === e) return 50;
                else if ("large_plus" === e) return 64;
                else if ("xlarge" === e) return 94;
                else if ("plans" === e) return 20;
                else if ("deep_dive" === e) return 16;
                else if ("upsell_banner" === e) return 74;
                else if ("personalization_modal" === e) return 96;
                else return (0, n(722371).HB)(e)
            }
        },
        509364: (e, t, n) => {
            n.d(t, {
                TK: () => o,
                YC: () => r,
                ui: () => a
            });
            let i = {
                    pageVerification: new(n(815048)).O2("pageVerification", () => Promise.all([n.e(54951), n.e(28048), n.e(96579), n.e(95150), n.e(94891)]).then(n.bind(n, 21161))),
                    pageVerificationBadge: new(n(815048)).O2("pageVerificationBadge", () => Promise.all([n.e(40994), n.e(80139), n.e(54951), n.e(17250), n.e(28048), n.e(55940), n.e(12560), n.e(21969), n.e(74145), n.e(48860), n.e(18682), n.e(79349), n.e(47414), n.e(96579), n.e(9817), n.e(29447), n.e(75189), n.e(34331), n.e(41412)]).then(n.bind(n, 182617))),
                    pageVerificationMenuRenderer: new(n(815048)).O2("pageVerificationMenuRenderer", () => Promise.all([n.e(40994), n.e(80139), n.e(54951), n.e(17250), n.e(28048), n.e(55940), n.e(12560), n.e(21969), n.e(74145), n.e(48860), n.e(18682), n.e(79349), n.e(47414), n.e(96579), n.e(9817), n.e(29447), n.e(75189), n.e(34331), n.e(26207)]).then(n.bind(n, 988890)))
                },
                a = (0, n(815048)._h)(i.pageVerification, e => e.PageAddVerificationButton),
                r = (0, n(815048)._h)(i.pageVerificationBadge, e => e.PageVerificationBadge),
                o = (0, n(815048)._h)(i.pageVerificationMenuRenderer, e => e.PageVerificationMenuRenderer)
        },
        523288: (e, t, n) => {
            n.d(t, {
                Q: () => i
            });

            function i(e) {
                let {
                    collectionStore: t,
                    blockStore: i
                } = e, a = t ? (0, n(986629).by)(t.getFormat(), t.getSchema(), t.id) : void 0, r = null == a ? void 0 : a.property;
                if (!a || !r) return !1;
                let o = i.getSchema();
                if (!o) return !1;
                let s = o[r];
                return !!s && "relation" === s.type && (0, n(149267).r)({
                    store: i,
                    subitemFormat: a,
                    propertySchema: s,
                    includeNoAccess: !0
                }).length > 0
            }
        },
        575422: (e, t, n) => {
            n.d(t, {
                m: () => a
            });
            let i = (0, n(109939).YK)({
                untitledAgent: {
                    id: "workflow.emptyWorkflowTitle",
                    defaultMessage: "Untitled agent"
                }
            });

            function a(e, t, n) {
                var a;
                return {
                    name: e.getName() || n || t.formatMessage(i.untitledAgent),
                    icon: e.getRawIcon() || "",
                    isLite: (null == (a = e.getData()) ? void 0 : a.isLite) ? ? !1
                }
            }
        },
        639323: (e, t, n) => {
            n.d(t, {
                M: () => i
            });

            function i({
                teamStore: e,
                environment: t
            }) {
                if (n(986939).A.isMobile) return;
                let a = (0, n(646044).p)(e),
                    r = n(791869).A.findDropTargetFromKey(a);
                if (r) {
                    let i = r.getNode();
                    if (!(i instanceof HTMLElement)) return;
                    if (n(862921).A.SidebarScroller) {
                        var o;
                        let a = (null == (o = n(862921).A.SidebarScroller.getNode()) ? void 0 : o.offsetTop) || 0,
                            r = n(862921).A.SidebarScroller.getNode();
                        (0, n(661767).V)({
                            element: r,
                            environment: t,
                            options: {
                                top: i.offsetTop - a,
                                left: 0,
                                behavior: "smooth"
                            }
                        }), n(854722).A.setState(e.id), setTimeout(() => {
                            n(854722).A.state === e.id && n(854722).A.setState(void 0)
                        }, 1500)
                    }
                }
            }
        },
        646044: (e, t, n) => {
            n.d(t, {
                p: () => i
            });

            function i(e) {
                return `TeamToggle_${e.id}`
            }
        },
        651790: (e, t, n) => {
            n.r(t), n.d(t, {
                AgentIcon: () => r,
                DefaultAgentIcon: () => s
            });
            var i = n(296540),
                a = n(474848);

            function r(e) {
                let {
                    agentIcon: t,
                    workflowStore: r,
                    size: o,
                    animated: s = !1
                } = e, l = (0, n(83208).X)("animated_custom_agent_faces"), d = (0, i.useMemo)(() => (0, n(514827).D)({
                    workflowStore: r,
                    workflowIcon: t,
                    size: o,
                    animated: s && l
                }), [t, r, o, s, l]);
                return (0, a.jsx)(n(569553).B6, {
                    icon: d,
                    iconRecordCategory: "workflow",
                    isEmptyPage: !1,
                    size: o,
                    disabled: !0
                })
            }
            let o = {
                cursor: "default"
            };

            function s(e) {
                let t = (0, i.useCallback)(() => {
                    if (e.size < 22) return "xsmall";
                    if (e.size < 28) return "avatar";
                    if (e.size < 36) return "small";
                    if (e.size < 42) return "medium";
                    if (e.size < 48) return "medium_plus";
                    else if (e.size < 50) return "medium_large";
                    else if (e.size < 94) return "large";
                    else return "xlarge"
                }, [e.size]);
                return (0, a.jsx)(n(971375).x, {
                    variant: t(),
                    style: o
                })
            }
        },
        766970: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                xMarkFillIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                a = (0, n(104509).wt)("xMarkFill", i, "fill")
        },
        789722: (e, t, n) => {
            n.d(t, {
                W: () => i
            });
            let i = (0, n(109939).YK)({
                done: {
                    id: "modal.doneButton",
                    defaultMessage: "Done"
                },
                cancel: {
                    id: "modal.cancelButton",
                    defaultMessage: "Cancel"
                },
                back: {
                    id: "modal.backButton",
                    defaultMessage: "Back"
                }
            })
        },
        796123: (e, t, n) => {
            n.r(t), n.d(t, {
                showAsyncModal: () => a,
                showAsyncModalComponent: () => r,
                testOnly: () => f
            }), n(898992), n(354520), n(672577), n(581454);
            var i = n(296540);

            function a(e, t = n(2009).w) {
                return new Promise((n, i) => {
                    try {
                        let a = u({
                            renderModal: e,
                            promiseResolve: n,
                            promiseReject: i,
                            store: t
                        });
                        o({
                            asyncModal: a,
                            store: t
                        })
                    } catch (e) {
                        i(e)
                    }
                })
            }

            function r(e, t = n(2009).w) {
                return a(t => i.createElement(e, t), t)
            }

            function o(e) {
                let {
                    asyncModal: t,
                    store: i = n(2009).w
                } = e;
                i.update(e => ({
                    asyncModals: [...e.asyncModals, t]
                }))
            }

            function s(e) {
                let {
                    id: t,
                    promiseResolve: i,
                    store: a = n(2009).w
                } = e;
                return e => {
                    let n = m({
                        id: t,
                        store: a
                    });
                    null != n && n.isOpen && (c({
                        id: t,
                        store: a,
                        update: {
                            isOpen: !1
                        }
                    }), i(e))
                }
            }

            function l(e) {
                let {
                    id: t,
                    promiseResolve: i,
                    store: a = n(2009).w
                } = e;
                return () => {
                    let e = m({
                        id: t,
                        store: a
                    });
                    null != e && e.isOpen && (c({
                        id: t,
                        store: a,
                        update: {
                            isOpen: !1
                        }
                    }), i())
                }
            }

            function d(e) {
                let {
                    id: t,
                    store: i = n(2009).w
                } = e;
                return () => {
                    i.update(e => ({
                        asyncModals: e.asyncModals.filter(e => e.id !== t)
                    }))
                }
            }

            function u(e) {
                let {
                    renderModal: t,
                    promiseResolve: i,
                    promiseReject: a,
                    store: r = n(2009).w
                } = e, o = n(92513).JW(), u = d({
                    id: o,
                    store: r
                }), m = l({
                    id: o,
                    promiseResolve: i,
                    store: r
                }), c = s({
                    id: o,
                    promiseResolve: i,
                    store: r
                });
                return {
                    id: o,
                    internalRenderModal: e => {
                        try {
                            return t({
                                isOpen: e,
                                onClosed: u,
                                onDismiss: m,
                                resolve: c
                            })
                        } catch (e) {
                            throw a(e), e
                        }
                    },
                    isOpen: !0
                }
            }

            function m(e) {
                let {
                    id: t,
                    store: i = n(2009).w
                } = e;
                return i.state.asyncModals.find(e => e.id === t)
            }

            function c(e) {
                let {
                    id: t,
                    update: i,
                    store: a = n(2009).w
                } = e;
                a.update(e => ({
                    asyncModals: e.asyncModals.map(e => e.id !== t ? e : { ...e,
                        ...i
                    })
                }))
            }
            let f = {
                addAsyncModal: o,
                createAsyncModal: u,
                createOnClosed: d,
                createOnDismiss: l,
                createResolve: s,
                getAsyncModal: m,
                updateAsyncModal: c
            }
        },
        854722: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            let i = n(546605).Store.createValue(void 0, {
                name: "TeamHighlightStore"
            })
        },
        862215: (e, t, n) => {
            n.d(t, {
                G: () => i
            });

            function i(e, t) {
                let {
                    device: n
                } = e;
                n.isAndroid && t.focus(), t.select()
            }
        },
        890142: (e, t, n) => {
            n.d(t, {
                l: () => a
            });
            let i = (0, n(109939).YK)({
                twoItems: {
                    id: "formatSettings.twoItems",
                    defaultMessage: "{item1} and {item2}"
                },
                threeOrMoreItems: {
                    id: "formatSettings.threeOrMoreItems",
                    defaultMessage: "{item1}, and {numberOfOther} others"
                },
                twoItemsWithAmpersand: {
                    id: "formatSettings.twoItems.withAmpersand",
                    defaultMessage: "{item1} & {item2}"
                },
                threeOrMoreItemsWithAmpersand: {
                    id: "formatSettings.threeOrMoreItems.withAmpersand",
                    defaultMessage: "{item1}, & {numberOfOther} others"
                },
                threeOrMoreItemsWithAmpersandAndRemoveComma: {
                    id: "formatSettings.threeOrMoreItems.withAmpersandAndRemoveComma",
                    defaultMessage: "{item1} & {numberOfOther} others"
                }
            });

            function a(e, t) {
                let {
                    removeComma: a,
                    useAmpersand: r
                } = t || {};
                if (0 === e.length) return "";
                let o = e[0];
                if (1 === e.length) return o;
                let s = e[1];
                if (2 === e.length) return r ? n(962299).A.formatMessage(i.twoItemsWithAmpersand, {
                    item1: o,
                    item2: s
                }) : n(962299).A.formatMessage(i.twoItems, {
                    item1: o,
                    item2: s
                });
                let l = e.length - 1;
                return r ? a ? n(962299).A.formatMessage(i.threeOrMoreItemsWithAmpersandAndRemoveComma, {
                    item1: o,
                    numberOfOther: l
                }) : n(962299).A.formatMessage(i.threeOrMoreItemsWithAmpersand, {
                    item1: o,
                    numberOfOther: l
                }) : n(962299).A.formatMessage(i.threeOrMoreItems, {
                    item1: o,
                    numberOfOther: l
                })
            }
        },
        971375: (e, t, n) => {
            n.d(t, {
                o: () => r,
                x: () => a
            }), n(296540);
            var i = n(474848);

            function a(e) {
                let {
                    variant: t,
                    imgSource: a,
                    tintColor: o,
                    faceStyle: s,
                    shadowVariant: l = "strong",
                    style: d,
                    ...u
                } = e, m = (0, n(960253).I)(() => {
                    let e = (0, n(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: n(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === l && {
                                boxShadow: e >= 90 ? n(632079).Tj.shadowMDThickerOutline : n(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === l && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? n(632079).Tj.shadowSMThickerOutline : n(632079).Tj.shadow.outline.md
                            },
                            overflow: "hidden",
                            ...d
                        }
                    }
                }, [t, l, d]);
                return (0, i.jsx)("div", { ...u,
                    children: (0, i.jsx)("div", {
                        style: m.faceImgWrap,
                        children: (0, i.jsx)(r, {
                            imgSource: a,
                            variant: t,
                            tintColor: o,
                            style: s
                        })
                    })
                })
            }

            function r(e) {
                let {
                    imgSource: t,
                    variant: a,
                    tintColor: r,
                    style: o,
                    alt: s,
                    ...l
                } = e, d = (0, n(445283).N)(a), u = t ? ? n(200424), m = s ? ? "Notion AI face", c = (0, n(960253).I)(() => ({
                    faceImg: {
                        height: d,
                        width: d,
                        transform: "scaleX(var(--direction, 1))",
                        ...o
                    },
                    tintedFace: {
                        height: d,
                        width: d,
                        transform: "scaleX(var(--direction, 1))",
                        backgroundColor: r,
                        WebkitMaskImage: `url(${u})`,
                        maskImage: `url(${u})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        ...o
                    }
                }), [d, o, r, u]);
                return void 0 !== r ? (0, i.jsx)("div", {
                    style: c.tintedFace,
                    role: "img",
                    "aria-label": m
                }) : (0, i.jsx)("img", { ...l,
                    style: c.faceImg,
                    src: u,
                    alt: m
                })
            }
        }
    }
]);