"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [90012], {
        112359: (e, t, n) => {
            n.d(t, {
                v: () => o
            });

            function o(e, t, o) {
                let i = (0, n(748814).a)(e, t, o ? "@" : "");
                return (0, n(239236).m)(e, i)
            }
        },
        178733: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => l
            }), n(898992), n(354520);
            var o = n(296540),
                i = n(474848);

            function l() {
                let e = (0, n(533992).Y0)(),
                    {
                        open: t,
                        filter: l,
                        emojiTextStore: s,
                        popupOpen: p,
                        originRect: a,
                        alwaysShowPopup: c
                    } = (0, n(682985).K8)(() => {
                        let e = n(994872).A.state,
                            t = e.open;
                        if (!t) return {
                            open: t,
                            popupOpen: !1
                        };
                        let o = function(e) {
                                if (e.textStore) return (0, n(112359).v)(e.textStore, e.oldTextValue, !0)
                            }(e) || "",
                            {
                                textStore: i,
                                showPopupWithEmptyFilter: l,
                                selectionRect: r
                            } = e,
                            u = !!l;
                        return {
                            open: t,
                            filter: o,
                            emojiTextStore: i,
                            popupOpen: o.length > 0 || u,
                            originRect: r,
                            alwaysShowPopup: u
                        }
                    }, []),
                    {
                        textMode: d,
                        prevChar: b,
                        singleTextSelectionStore: m
                    } = (0, n(682985).K8)(() => {
                        var e;
                        let t = n(358377).default.state,
                            {
                                mode: o
                            } = t;
                        if ("editing" !== o) return {
                            mode: o
                        };
                        let {
                            multiSelection: i
                        } = t, l = n(247438).qAZ(i.start.store.getValue());
                        return {
                            textMode: o,
                            prevChar: l ? l[i.start.index - 1] : void 0,
                            singleTextSelectionStore: null == (e = (0, n(778758).H)(i)) ? void 0 : e.store
                        }
                    }, []),
                    f = (0, n(682985).K8)(() => n(757573).A.state.open, []);
                return (0, o.useEffect)(() => {
                    t && !f && ("editing" !== d || !l && ":" !== b || m !== s || void 0 === l || ":" === l || l.startsWith(" ") || l.includes("\n")) && n(68205).VN()
                }, [s, l, f, t, b, m, d]), (0, i.jsx)(n(182718).zD, {
                    popupType: e.isMobileNative && !e.isTablet ? n(423291).n.SlideUp : n(423291).n.Popup,
                    open: p,
                    originRect: a,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    originGap: 4,
                    disableMouseCapture: !0,
                    disableContentScroll: !0,
                    onDismiss: u,
                    content: () => (0, i.jsx)(r, {
                        open: t,
                        filter: l || "",
                        alwaysShowPopup: c
                    }),
                    keepFocus: !0
                })
            }

            function r({
                open: e,
                filter: t,
                alwaysShowPopup: l
            }) {
                let u = (0, n(533992).v3)(),
                    p = (0, n(533992).Y0)(),
                    a = (0, o.useRef)(null),
                    c = p.isMobileNative && !p.isTablet ? {
                        menuType: n(649476).gu.ActionSheet
                    } : {
                        menuType: n(649476).gu.Popup,
                        width: n(703188).jv,
                        onClickOutside: n(68205).VN
                    },
                    d = (0, n(682985).K8)(() => {
                        let e = n(994872).A.state;
                        return e.open ? e.comboboxProps : void 0
                    }, [], {
                        debugName: "emojiMenu-comboboxProps"
                    });
                return e && (l || !(t.length < 1)) ? (0, i.jsx)(n(747369).A, {
                    innerRef: a,
                    ...c,
                    children: (0, i.jsx)(n(860213).p, {
                        filter: t,
                        onSubmit: e => s(e, u),
                        isCallout: !1,
                        menuRef: a,
                        isInline: !0,
                        comboboxProps: d,
                        onUpload: {
                            onComplete: e => {
                                s(e, u)
                            }
                        }
                    })
                }) : null
            }

            function u() {
                n(68205).VN()
            }

            function s(e, t) {
                var o;
                let i = n(994872).A.state.open ? null == (o = n(994872).A.state.textStore) ? void 0 : o.pointer.spaceId : void 0;
                (0, n(377796).createAndCommit)({
                    userAction: "EmojiMenu.handleSubmit",
                    environment: t,
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    canUndo: !0,
                    perform: o => {
                        n(68205).Ju({
                            environment: t,
                            emoji: e,
                            transaction: o
                        })
                    }
                })
            }
        }
    }
]);