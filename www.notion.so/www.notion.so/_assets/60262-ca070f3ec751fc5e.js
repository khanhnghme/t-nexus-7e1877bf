"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [60262], {
        11255: (e, t, i) => {
            i.d(t, {
                qB: () => n,
                sq: () => o
            });
            let o = ["favorite", "edit", "writeInsert", "create", "thinkAskChat", "findSearch", "custom", "notionActions", "recent", "databaseAgent"],
                n = ["improve_writing", "fix_spelling_grammar", "explain_this", "reformat", "create_daily_brief"]
        },
        13826: (e, t, i) => {
            function o(e) {
                return i(11255).qB.filter(t => "create_daily_brief" !== t || e.isDailyBriefEnabled)
            }

            function n(e) {
                let {
                    mappedDefaultSkillPages: t
                } = e, o = new Map;
                for (let e of i(11255).qB) {
                    let i = t[e];
                    i && o.set(i, e)
                }
                return o
            }

            function l(e) {
                let {
                    blockIds: t,
                    mappedDefaultSkillPages: o
                } = e, n = Array.from(new Set(t)), l = new Set(n), a = (function(e) {
                    let {
                        mappedDefaultSkillPages: t
                    } = e;
                    return i(11255).qB.flatMap(e => {
                        let i = t[e];
                        return i ? [i] : []
                    })
                })({
                    mappedDefaultSkillPages: o
                }).filter(e => l.has(e)), r = new Set(a);
                return [...a, ...n.filter(e => !r.has(e))]
            }

            function a(e) {
                return void 0 !== e.defaultSkillsCopiedAtMs
            }

            function r(e) {
                let {
                    isDailyBriefEnabled: t,
                    disabledDefaultSkills: i,
                    defaultSkillsCopiedAtMs: n
                } = e;
                return a({
                    defaultSkillsCopiedAtMs: {
                        defaultSkillsCopiedAtMs: n
                    }.defaultSkillsCopiedAtMs
                }) ? [] : o({
                    isDailyBriefEnabled: t
                }).filter(e => !i.includes(e))
            }

            function s(e) {
                let {
                    isPromptPagesEnabled: t,
                    defaultSkillsCopiedAtMs: i
                } = e;
                return t ? i : void 0
            }
            i.d(t, {
                BD: () => a,
                AL: () => o,
                Pf: () => n,
                Xm: () => s,
                Qz: () => c,
                H7: () => r,
                r_: () => d,
                bl: () => l
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(430670);
            let d = ["create_daily_brief"];

            function c(e) {
                let {
                    isPromptPagesEnabled: t,
                    disabledDefaultSkills: i
                } = e, o = t ? i : [], n = d.filter(e => !o.includes(e));
                return [...o.filter(e => !d.includes(e)), ...n]
            }
        },
        124108: (e, t, i) => {
            i.d(t, {
                N: () => r
            });
            var o = i(296540),
                n = i(474848);
            let l = {
                    alignItems: "center",
                    borderRadius: i(986939).A.isMobile ? 12 : 6,
                    boxShadow: void 0,
                    display: "flex",
                    flexShrink: 0,
                    fontSize: i(986939).A.isMobile ? 16 : 14,
                    fontWeight: i(699422).Wy.medium,
                    height: i(986939).A.isMobile ? 48 : 32,
                    justifyContent: "center",
                    lineHeight: 1.2,
                    paddingInlineStart: i(986939).A.isMobile ? 20 : 12,
                    paddingInlineEnd: i(986939).A.isMobile ? 20 : 12,
                    whiteSpace: "nowrap"
                },
                a = {
                    destructiveButtonDefault: { ...l,
                        background: i(632079).Tj.red.background.accentPrimary,
                        color: i(632079).oZ.white,
                        fill: i(632079).oZ.lightTextColor
                    },
                    destructiveButtonHovered: {
                        background: "rgba(235, 87, 87, 0.8)"
                    },
                    destructiveButtonPressed: {
                        background: i(632079).oZ.red
                    },
                    primaryButtonDefault: { ...l,
                        background: i(632079).Tj.blue.background.accentPrimary,
                        color: i(632079).oZ.white,
                        fill: i(632079).oZ.lightTextColor
                    },
                    primaryButtonHovered: {
                        background: i(632079).Tj.blueButtonHoveredBackground
                    },
                    primaryButtonPressed: {
                        background: i(632079).Tj.blueButtonPressedBackground
                    },
                    secondaryButtonDefault: { ...l,
                        color: i(632079).Tj.text.secondary,
                        fill: i(632079).oZ.lightTextColor
                    },
                    plainButtonDefault: { ...l,
                        background: "transparent",
                        color: i(632079).Tj.text.primary,
                        fill: i(632079).Tj.text.primary
                    },
                    plainButtonHovered: {
                        background: i(632079).Tj.whiteButtonHoveredBackground
                    },
                    plainButtonPressed: {
                        background: i(632079).Tj.whiteButtonPressedBackground
                    },
                    outlineButtonDefault: { ...l,
                        background: i(632079).Tj.whiteButtonBackground,
                        color: i(632079).Tj.text.primary,
                        fill: i(632079).Tj.text.primary,
                        border: `1px solid ${i(632079).Tj.border.primary}`
                    },
                    outlineButtonHovered: {
                        background: i(632079).Tj.whiteButtonHoveredBackground
                    },
                    outlineButtonPressed: {
                        background: i(632079).Tj.whiteButtonPressedBackground
                    },
                    blackButtonDefault: { ...l,
                        background: i(632079).Tj.primaryBlack,
                        color: i(632079).oZ.white,
                        fill: i(632079).Tj.primaryBlack
                    },
                    blackButtonHovered: {
                        background: i(632079).oZ.frontBlackButtonBackgroundHovered
                    },
                    blackButtonPressed: {
                        background: i(632079).oZ.frontBlackButtonBackgroundPressed
                    },
                    style0: {
                        marginInlineEnd: 4
                    }
                };

            function r(e) {
                let {
                    buttonInfo: t,
                    ...l
                } = e, r = (0, o.useContext)(i(19187).e), s = "baseStyleOverride" in t ? t.baseStyleOverride : void 0, d = (0, o.useMemo)(() => ({
                    destructive: {
                        default: a.destructiveButtonDefault,
                        hovered: a.destructiveButtonHovered,
                        pressed: a.destructiveButtonPressed
                    },
                    primary: {
                        default: a.primaryButtonDefault,
                        hovered: a.primaryButtonHovered,
                        pressed: a.primaryButtonPressed
                    },
                    secondary: {
                        default: a.secondaryButtonDefault
                    },
                    dismiss: {
                        default: a.secondaryButtonDefault
                    },
                    outline: {
                        default: a.outlineButtonDefault,
                        hovered: a.outlineButtonHovered,
                        pressed: a.outlineButtonPressed
                    },
                    black: {
                        default: a.blackButtonDefault,
                        hovered: a.blackButtonHovered,
                        pressed: a.blackButtonPressed
                    },
                    plain: {
                        default: a.plainButtonDefault,
                        hovered: a.plainButtonHovered,
                        pressed: a.plainButtonPressed
                    }
                }), []);
                if ("dismiss" === t.buttonType) {
                    let e = t.label ? ? (0, n.jsx)(i(109939).sA, {
                            id: "actionable.dismissButton.label",
                            defaultMessage: "Cancel"
                        }),
                        o = t.combinedStyles ? ? d.dismiss;
                    return (0, n.jsx)(i(64960).Ay, {
                        style: null == o ? void 0 : o.default,
                        hoveredStyle: null == o ? void 0 : o.hovered,
                        pressedStyle: null == o ? void 0 : o.pressed,
                        onClick: r,
                        children: e
                    })
                } {
                    let e = t.buttonType ? ? "primary",
                        o = t.combinedStyles ? ? d[e];
                    return (0, n.jsxs)(i(64960).Ay, {
                        style: { ...null == o ? void 0 : o.default,
                            ...s
                        },
                        hoveredStyle: null == o ? void 0 : o.hovered,
                        pressedStyle: null == o ? void 0 : o.pressed,
                        onClick: t.onClick,
                        disabled: t.isDisabled || t.isLoading,
                        disabledFeedback: t.isDisabled,
                        ...l,
                        children: [t.isLoading ? (0, n.jsx)(i(517334).k, {
                            style: a.style0
                        }) : null, t.label]
                    })
                }
            }
        },
        209590: (e, t, i) => {
            i.d(t, {
                Z: () => a
            }), i(296540);
            var o = i(474848);
            let n = {
                    textAlign: "center",
                    textWrap: "balance"
                },
                l = {
                    position: "relative"
                };

            function a(e) {
                let {
                    iconGroup: t,
                    iconColorPalette: a,
                    iconColorVariant: r = "secondary",
                    title: s,
                    variantName: d = "default"
                } = e;
                return t || s ? (0, o.jsxs)(i(4458).VP, {
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: {
                        gap: 9,
                        ...l
                    },
                    children: [t ? (0, o.jsx)(i(708966).Q, {
                        iconGroup: t,
                        colorPalette: a,
                        colorVariant: r,
                        variantName: d,
                        style: {
                            width: 36,
                            height: 36
                        }
                    }) : null, s ? (0, o.jsx)(i(111010).D, {
                        styleKey: "titleSmSemibold",
                        colorVariant: "primary",
                        style: n,
                        children: s
                    }) : null]
                }) : null
            }
        },
        281360: (e, t, i) => {
            async function o({
                environment: e,
                spaceStore: t,
                pageId: l,
                from: a
            }) {
                if (!t || !t.canAdmin()) return i(616172).zP(e, {
                    context: "selection",
                    error_type: "user_permissions"
                }), {
                    success: !1,
                    error: "user_permissions"
                };
                if (!l) return n({
                    environment: e,
                    spaceStore: t,
                    pageId: l,
                    from: a
                }), (0, i(356622).V)({
                    environment: e,
                    spaceStore: t,
                    errors: []
                }), {
                    success: !0
                };
                try {
                    let o, r = new(i(970831)).B(e, {
                            table: "block",
                            id: l
                        }),
                        s = {
                            id: l,
                            spaceId: t.id
                        },
                        d = i(218744).default.getConfigKey("template_limits", "gettingStartedMaxNumBlocks");
                    try {
                        o = await e.api.callCellCompatibleApi({
                            eventName: "loadBlockSubtree",
                            environment: e,
                            data: {
                                block: {
                                    id: s.id,
                                    spaceId: s.spaceId
                                },
                                shallow: !1,
                                recordCountLimit: d
                            },
                            cellNavigation: {
                                spaceId: s.spaceId
                            }
                        })
                    } catch (e) {
                        return i(773352).log({
                            level: "error",
                            from: "validateAndSetCustomGettingStartedPage",
                            type: "subtreeLoadError",
                            error: (0, i(416607).convertErrorToLog)(e),
                            data: {
                                message: "Error loading subtree",
                                miscDataToConvertToString: {
                                    blockPointer: s
                                }
                            }
                        }), {
                            success: !1,
                            error: "unknown"
                        }
                    }
                    if ("success" !== o.type) return i(616172).zP(e, {
                        context: "selection",
                        error_type: "block_limit"
                    }), {
                        success: !1,
                        error: "block_limit"
                    };
                    if (!(0, i(329171).n)(r)) return i(616172).zP(e, {
                        context: "selection",
                        error_type: "page_permissions"
                    }), {
                        success: !1,
                        error: "page_permissions"
                    };
                    return n({
                        environment: e,
                        spaceStore: t,
                        pageId: l,
                        from: a
                    }), (0, i(356622).V)({
                        environment: e,
                        spaceStore: t,
                        errors: []
                    }), {
                        success: !0
                    }
                } catch (t) {
                    return i(616172).zP(e, {
                        context: "selection"
                    }), {
                        success: !1,
                        error: "unknown"
                    }
                }
            }

            function n({
                environment: e,
                spaceStore: t,
                pageId: o,
                from: l
            }) {
                t && (! function(e) {
                    let {
                        environment: t,
                        spaceStore: o,
                        pageId: n
                    } = e;
                    (0, i(377796).createAndCommit)({
                        userAction: "spaceActions.updateGettingStartedTemplate",
                        environment: t,
                        cellTarget: {
                            spaceWithId: o.id
                        },
                        canUndo: !0,
                        perform: e => {
                            (0, i(818116).R)(o, e, {
                                getting_started_templates: n ? {
                                    default: [{
                                        page_id: n
                                    }]
                                } : void 0
                            })
                        }
                    })
                }({
                    environment: e,
                    spaceStore: t,
                    pageId: o
                }), i(616172).bx(e, {
                    cleared: void 0 === o,
                    from: l
                }))
            }
            i.d(t, {
                a: () => n,
                x: () => o
            })
        },
        314084: (e, t, i) => {
            i.d(t, {
                t: () => l
            }), i(296540);
            var o = i(474848);
            let n = {
                kVAEAm: "x1n2onr6",
                $$css: !0
            };

            function l(e) {
                let {
                    children: t,
                    footer: l,
                    header: a,
                    showDismissButton: r = !0,
                    sizeRange: s,
                    gap: d = 24
                } = e;
                return (0, o.jsxs)(i(4458).VP, {
                    paddingBlock: 20,
                    minHeight: null == s ? void 0 : s.minHeight,
                    maxHeight: null == s ? void 0 : s.maxHeight,
                    minWidth: null == s ? void 0 : s.minWidth,
                    maxWidth: null == s ? void 0 : s.maxWidth,
                    gap: d,
                    style: n,
                    className: "autolayout-fill-width",
                    children: [(0, o.jsx)("div", {
                        className: "xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: a
                    }), t ? (0, o.jsx)("div", { ...{
                            className: "x78zum5 x1iyjqo2 x6ikm8r x10wlt62"
                        },
                        children: (0, o.jsx)("div", {
                            className: "x78zum5 x1iyjqo2 x1nn3v0j x1xnnf8n x1120s5i x106a9eq x1odjw0f",
                            children: t
                        })
                    }) : null, l ? (0, o.jsx)("div", {
                        className: "xr1yuqi xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: l
                    }) : null, r ? (0, o.jsx)(i(226512).R, {}) : null]
                })
            }
        },
        581697: (e, t, i) => {
            i.d(t, {
                t: () => o
            });
            let o = (0, i(104509).xh)("trash", {
                default: {
                    loader: () => i.e(84217).then(i.bind(i, 968411))
                },
                small: {
                    loader: () => i.e(84217).then(i.bind(i, 822973))
                },
                fill: {
                    loader: () => i.e(84217).then(i.bind(i, 721975))
                },
                fillSmall: {
                    loader: () => i.e(84217).then(i.bind(i, 744238))
                }
            }, ["trash", "can", "bin", "delete", "remove"])
        },
        582471: (e, t, i) => {
            i.d(t, {
                Y: () => a
            }), i(296540);
            var o = i(474848);
            let n = {
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textWrap: "balance"
                },
                l = {
                    position: "relative"
                };

            function a(e) {
                let {
                    iconAndTitle: t,
                    description: a
                } = e;
                return t || a ? (0, o.jsxs)(i(4458).VP, {
                    gap: 8,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: l,
                    children: [t, a ? (0, o.jsx)(i(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: n,
                        children: a
                    }) : null]
                }) : null
            }
        },
        591637: (e, t, i) => {
            i.d(t, {
                a: () => l
            }), i(898992), i(354520), i(581454), i(296540);
            var o = i(474848);
            let n = {
                style0: {
                    width: 200
                },
                style1: {
                    minWidth: 200
                },
                caption: {
                    color: i(632079).Tj.text.secondary,
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: i(699422).Wy.regular,
                    lineHeight: "15px"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function l(e) {
                var t;
                let {
                    caption: l,
                    layout: a,
                    sectionGap: r,
                    secondaryButtonTooltip: s
                } = e, d = e.primaryButtons.filter(Boolean), c = null == (t = e.secondaryButtons) ? void 0 : t.filter(Boolean);
                if (!(null != d && d.length) && !(null != c && c.length) && !l) return null;
                let u = (null == c ? void 0 : c.length) > 0;
                return "vertical" === a ? (0, o.jsxs)(i(4458).VP, {
                    className: "autolayout-fill-width",
                    style: {
                        gap: r ? ? 8,
                        ...n.positionRelative
                    },
                    children: [(0, o.jsxs)(i(4458).VP, {
                        style: {
                            gap: 7,
                            ...n.positionRelative
                        },
                        children: [d.map((e, t) => (0, o.jsx)(i(124108).N, {
                            buttonInfo: e
                        }, t)), l ? (0, o.jsx)("div", {
                            style: n.caption,
                            children: l
                        }) : null]
                    }), u ? s ? (0, o.jsx)(i(51831).m, {
                        content: () => s,
                        textWrap: !0,
                        style: n.style0,
                        placement: "bottom",
                        children: e => (0, o.jsx)("div", { ...e,
                            children: c.map((e, t) => (0, o.jsx)(i(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, o.jsx)("div", {
                        children: c.map((e, t) => (0, o.jsx)(i(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0]
                }) : "horizontal-right" === a ? (0, o.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    justifyContent: "flex-end",
                    className: "autolayout-fill-width",
                    style: {
                        gap: r ? ? 8,
                        ...n.positionRelative
                    },
                    children: [null == c ? void 0 : c.map((e, t) => (0, o.jsx)(i(124108).N, {
                        buttonInfo: e
                    }, t)), d.map((e, t) => (0, o.jsx)(i(124108).N, {
                        buttonInfo: e
                    }, t))]
                }) : "horizontal-space-between" === a ? (0, o.jsxs)(i(4458).fI, {
                    justifyContent: "space-between",
                    children: [u ? s ? (0, o.jsx)(i(51831).m, {
                        content: () => s,
                        textWrap: !0,
                        style: n.style1,
                        placement: "bottom",
                        children: e => (0, o.jsx)("div", { ...e,
                            children: null == c ? void 0 : c.map((e, t) => (0, o.jsx)(i(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, o.jsx)("div", {
                        children: null == c ? void 0 : c.map((e, t) => (0, o.jsx)(i(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0, (0, o.jsx)("div", {
                        children: d.map((e, t) => (0, o.jsx)(i(124108).N, {
                            buttonInfo: e
                        }, t))
                    })]
                }) : void(0, i(722371).HB)(a)
            }
        },
        616172: (e, t, i) => {
            function o(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "custom_getting_started_page_selected",
                        eventProperties: t
                    }
                })
            }

            function n(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "custom_getting_started_page_error",
                        eventProperties: t
                    }
                })
            }

            function l(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "custom_getting_started_page_saved",
                        eventProperties: t
                    }
                })
            }

            function a(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "custom_getting_started_page_installed",
                        eventProperties: t
                    }
                })
            }
            i.d(t, {
                Sg: () => o,
                bx: () => l,
                m2: () => a,
                zP: () => n
            })
        },
        660262: (e, t, i) => {
            i.d(t, {
                A: () => u
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(430670), i(908872), i(737550), i(296540);
            var o = () => i(970831),
                n = () => i(832375),
                l = () => i(519995);
            i(803949);
            var a = () => i(496704),
                r = i(474848);
            async function s(e, t) {
                if (!t) return;
                let o = (0, i(852864).H)({
                    spaceStore: t,
                    userId: e.currentUser.id ? ? "",
                    environment: e
                });
                return await i(280996).T.showAsyncModal(n => (0, r.jsx)(i(833503).s, {
                    isOpen: n.isOpen,
                    onDismiss: () => {
                        n.resolve("dismiss")
                    },
                    onClosed: () => {
                        o && (0, i(377796).createAndCommit)({
                            userAction: "DeleteBlocksModal.showDeleteBlocksModal",
                            environment: e,
                            cellTarget: {
                                spaceWithId: t.id
                            },
                            canUndo: !0,
                            perform: e => {
                                (0, i(421439).y4)({
                                    store: o,
                                    operation: {
                                        pointer: o.pointer,
                                        path: ["settings"],
                                        command: "update",
                                        args: { ...o.getSettings(),
                                            seen_delete_blocks_modal: !0
                                        }
                                    },
                                    transaction: e
                                })
                            }
                        })
                    },
                    areaConstraint: {
                        width: {
                            type: "fixed",
                            length: 300
                        }
                    },
                    children: ({
                        sizeRange: e
                    }) => (0, r.jsx)(d, {
                        sizeRange: e,
                        asyncModal: n,
                        spaceStore: t
                    })
                }))
            }

            function d(e) {
                let {
                    sizeRange: t,
                    asyncModal: o,
                    spaceStore: n
                } = e, l = (0, i(533992).v3)(), a = (0, r.jsx)(i(582471).Y, {
                    iconAndTitle: (0, r.jsx)(i(209590).Z, {
                        iconGroup: i(581697).t,
                        title: (0, r.jsx)(i(109939).sA, {
                            id: "deleteBlocksModal.title",
                            defaultMessage: "Delete content?"
                        })
                    }),
                    description: (0, r.jsx)(i(109939).sA, {
                        id: "deleteBlocksModal.description",
                        defaultMessage: "You can delete existing blocks but you won’t be able to add new content until you upgrade"
                    })
                }), s = (0, r.jsx)(i(591637).a, {
                    layout: "vertical",
                    primaryButtons: [{
                        buttonType: "destructive",
                        label: (0, r.jsx)(i(109939).sA, {
                            id: "deleteBlocksModal.delete",
                            defaultMessage: "Delete"
                        }),
                        onClick: () => o.resolve("delete")
                    }],
                    secondaryButtons: [{
                        buttonType: "secondary",
                        label: (0, r.jsx)(i(111010).D, {
                            colorVariant: "primary",
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "deleteBlocksModal.upgrade",
                                defaultMessage: "Upgrade plan"
                            })
                        }),
                        onClick: () => {
                            i(907063).K(l, {
                                from: "delete_blocks_modal",
                                upsell: {
                                    type: "product",
                                    product: "plus",
                                    limit: {
                                        type: "none"
                                    },
                                    trialability: "none"
                                },
                                spaceStore: n
                            }), o.resolve("upgrade")
                        }
                    }]
                });
                return (0, r.jsx)(i(314084).t, {
                    header: a,
                    footer: s,
                    sizeRange: t
                })
            }
            let c = (0, i(109939).YK)({
                deletePages: {
                    id: "action.deletePages.snackBarMessage",
                    defaultMessage: "Moved to Trash"
                },
                restore: {
                    id: "action.deletePages.snackBarRestoreButton",
                    defaultMessage: "Restore"
                },
                trashAiInstructionsPageTitle: {
                    id: "action.trashAiInstructionsPage.confirmTitle",
                    defaultMessage: "Are you sure you want to move your AI instructions page to the trash?"
                },
                trashAiInstructionsPageBody: {
                    id: "action.trashAiInstructionsPage.confirmBody",
                    defaultMessage: "Your Notion AI agent will behave differently without this instructions page."
                },
                trashAiSkillPageTitle: {
                    id: "action.trashAiSkillPage.confirmTitle",
                    defaultMessage: "Are you sure you want to move your AI skill page to the trash?"
                },
                trashAiSkillPageBody: {
                    id: "action.trashAiSkillPage.confirmBody",
                    defaultMessage: "Your Notion AI agent will behave differently without this skill page."
                },
                trashMeetingInstructionsPageTitle: {
                    id: "action.trashMeetingInstructionsPage.confirmTitle",
                    defaultMessage: "Are you sure you want to move this AI meeting instructions page to the trash?"
                },
                trashMeetingInstructionsPageBody: {
                    id: "action.trashMeetingInstructionsPage.confirmBody",
                    defaultMessage: "This will delete the page and remove it from your meeting instructions menu."
                },
                moveToTrashButton: {
                    id: "action.trashAiPage.moveToTrashButton",
                    defaultMessage: "Move to trash"
                }
            });
            async function u(e) {
                var t, d, u, g, p, f, m;
                let {
                    environment: h,
                    blocks: v,
                    shouldCheckSuggestEdit: y,
                    overrideRemoveBlockFunc: b,
                    callback: x
                } = e, k = i(728372).AppStoreSidebarSpaceViewStore.state, B = [];
                for (let e of v) e.isCollectionView() && e.getOwnedCollectionStores().length > 0 && B.push(e);
                if (B.length > 0 && !(await
                        function(e) {
                            let {
                                collectionViewBlockStores: t
                            } = e, o = t.reduce((e, t) => e + t.getOwnedCollectionStores().length, 0);
                            if (0 === o) return Promise.resolve({
                                accept: !0
                            });
                            let n = 1 === t.length && t[0].hasSingleSourceAndNoLinkedCollections() ? (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "All pages will be moved to Trash",
                                id: "database.deleteConfirm.singleSource.description"
                            }) : (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "{ownedCollectionsCount, plural, one {{ownedCollectionsCount} data source and all of its pages will be moved to Trash} other {{ownedCollectionsCount} data sources and all of their pages will be moved to Trash}}",
                                id: "database.deleteConfirm.multipleSources.description",
                                values: {
                                    ownedCollectionsCount: o
                                }
                            });
                            return i(647095).Gh({
                                message: (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "Move database to Trash?",
                                    id: "database.deleteConfirm.title"
                                }),
                                description: n,
                                acceptLabel: (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "Move to Trash",
                                    id: "database.deleteConfirm.deleteButton.text"
                                })
                            })
                        }({
                            collectionViewBlockStores: B
                        })).accept) return;
                let A = !!(null == k || null == (t = k.getSettings()) ? void 0 : t.seen_delete_blocks_modal),
                    S = (0, i(974410).f)(v[0]),
                    _ = (0, i(194020).E)(h, S);
                if ((0, i(717274).Km)(h) && !_ && !A && "delete" !== await s(h, S)) return;
                let w = !1;
                if (1 === v.length && v[0].isPageBlock()) {
                    let e = v[0],
                        t = e.getSpaceStore(),
                        o = t ? (0, i(274749).i)(t) : void 0;
                    if (e.id === o) {
                        if (!(await i(647095).Gh({
                                message: (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "This is the default Getting Started page for this workspace.",
                                    id: "customGettingStarted.deleteConfirm.title"
                                }),
                                description: (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "If you delete this page, new workspace members will have Notion’s default Getting Started page installed instead. Are you sure you want to delete this page?",
                                    id: "customGettingStarted.deleteConfirm.description"
                                }),
                                acceptLabel: (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "Delete",
                                    id: "customGettingStarted.deleteConfirm.deleteButton.text"
                                })
                            })).accept) return;
                        w = !0
                    }
                }
                if (1 === v.length && v[0].isPageBlock()) {
                    let e = v[0];
                    if (e.isAiInstruction() || e.isAiSkill() || (null == (g = e.getFormat()) ? void 0 : g.is_transcription_summary_template) === !0) {
                        let t, o;
                        if (!(await (t = e.isAiInstruction(), o = (null == (m = e.getFormat()) ? void 0 : m.is_transcription_summary_template) === !0, i(647095).Gh({
                                message: i(962299).A.formatMessage(t ? c.trashAiInstructionsPageTitle : o ? c.trashMeetingInstructionsPageTitle : c.trashAiSkillPageTitle),
                                description: i(962299).A.formatMessage(t ? c.trashAiInstructionsPageBody : o ? c.trashMeetingInstructionsPageBody : c.trashAiSkillPageBody),
                                acceptLabel: i(962299).A.formatMessage(c.moveToTrashButton)
                            }))).accept) return
                    }
                }
                let j = v;
                if (v.length > 0 && y && "suggest" === i(708929).Uv.getMode(v[0])) {
                    let e = v.filter(e => (0, i(80005)._1)({
                            blockStore: e,
                            currentUser: h.currentUser
                        })),
                        t = await i(864850).T.formulas.load(),
                        o = null == (p = v[0]) ? void 0 : p.getSpaceId();
                    (0, i(377796).createAndCommit)({
                        userAction: "selectableBlockActions.removeBlocksWithMaybeConfirmation.suggestRemoveBlocks",
                        environment: h,
                        cellTarget: o ? {
                            spaceWithId: o
                        } : void 0,
                        canUndo: !0,
                        perform: o => {
                            ! function(e) {
                                let {
                                    environment: t,
                                    transaction: o,
                                    blockStores: n,
                                    formulasModule: l
                                } = e;
                                if (0 === n.length) return;
                                let a = (0, i(151002).i)({
                                    environment: t,
                                    blockStore: n[0],
                                    commentTextValue: [
                                        [""]
                                    ],
                                    transaction: o,
                                    files: [],
                                    type: "suggestion",
                                    formulasModule: l
                                });
                                if (!a) throw new(i(101787)).yI4("Discussion must be created when creating a block with suggestion");
                                n.forEach(e => {
                                    (0, i(132993).t)(o, e, {
                                        id: i(92513).JW(),
                                        type: "remove",
                                        discussionId: a.id
                                    }), (0, i(941538).c)({
                                        environment: t,
                                        transaction: o,
                                        discussionStore: a,
                                        addModifiedBlockIdsAfter: [e.id]
                                    })
                                })
                            }({
                                environment: h,
                                transaction: o,
                                blockStores: v.filter(t => !e.includes(t) && !(0, i(336136).dL)(t) && !(0, i(955630).$I)((0, i(148337).o9)(t.getType()))),
                                formulasModule: t
                            })
                        }
                    }), j = e
                }
                let T = !0,
                    I = [];
                for (let e of j) {
                    let t = a().K.findBlockFromStore(e);
                    if (t && "handleRemoveBlockFromComment" in t && "function" == typeof t.handleRemoveBlockFromComment) {
                        if (await t.handleRemoveBlockFromComment()) continue
                    } else if (t && "canRemoveBlock" in t && "function" == typeof t.canRemoveBlock) {
                        let e = await t.canRemoveBlock();
                        if (e.canRemove) T = e.canUndo;
                        else {
                            null == x || x();
                            return
                        }
                    }
                    let i = await l().rW({
                        environment: h,
                        block: e,
                        action: "delete"
                    });
                    if ("user_canceled" === i) {
                        null == x || x();
                        return
                    }
                    i.length > 1 ? I.push(...i) : I.push(e)
                }
                if (0 === I.length) {
                    null == x || x();
                    return
                }
                let M = null == k || null == (d = k.getSettings()) || null == (d = d.agent_personalization_settings) ? void 0 : d.context_page_id,
                    P = !!M && I.some(e => e.id === M),
                    C = I[0],
                    N = (null == (u = (0, i(444610).U)(C)) ? void 0 : u.collectionStore()) ? ? C.getAssociatedCollectionStore();
                if (N && (0, i(523288).Q)({
                        collectionStore: N,
                        blockStore: C
                    })) {
                    if (!await i(112944).vX({
                            environment: h,
                            blocks: I,
                            canUndo: T
                        })) return
                } else {
                    let e = null == (f = I[0]) ? void 0 : f.getSpaceId(),
                        {
                            serverCommitResult: t
                        } = (0, i(377796).createAndCommit)({
                            userAction: "selectableBlockActions.removeBlocksWithMaybeConfirmation",
                            environment: h,
                            cellTarget: e ? {
                                spaceWithId: e
                            } : void 0,
                            canUndo: T,
                            perform: e => {
                                (0, i(596740).Z)({
                                    environment: h,
                                    blocks: I.filter(e => !(0, i(336136).dL)(e)),
                                    transaction: e,
                                    overrideRemoveBlockFunc: b
                                })
                            }
                        });
                    await t
                }
                if (null == x || x(), i(198125).Ay.state.isTrashEmpty && i(198125).Ay.setState({ ...i(198125).Ay.state,
                        isTrashEmpty: !1
                    }), w && i(281360).a({
                        environment: h,
                        spaceStore: v[0].getSpaceStore(),
                        pageId: void 0,
                        from: "page_deletion"
                    }), k) {
                    let e = new Set(I.map(e => e.id)),
                        t = k.getSettings(),
                        l = null == t ? void 0 : t.ai_prompts,
                        a = (null == l ? void 0 : l.rich_text_skills) ? ? [],
                        r = (null == l ? void 0 : l.default_skill_pages_by_type) ? ? {},
                        s = null == l ? void 0 : l.skill_container_page_id,
                        d = !!(s && e.has(s)),
                        c = i(218744).default.checkGate({
                            gateName: "agent_daily_brief"
                        }),
                        u = (0, i(13826).AL)({
                            isDailyBriefEnabled: c
                        }),
                        g = new Set(u.flatMap(e => {
                            let t = r[e];
                            return t ? [t] : []
                        })),
                        p = new Set(e),
                        f = {};
                    for (let t of u) {
                        let i = r[t];
                        !(!i || e.has(i)) && (new(o()).B(h, {
                            table: n().evP,
                            id: i
                        }).pathIsDead() || (f[t] = i))
                    }
                    let m = new Set(u.flatMap(e => {
                        let t = f[e];
                        return t ? [t] : []
                    }));
                    for (let e of g) m.has(e) || p.add(e);
                    let v = a.filter(e => !p.has(e)),
                        y = d ? void 0 : s,
                        b = v.length !== a.length || u.some(e => r[e] !== f[e]) || y !== s;
                    if (P || b) {
                        let e = k.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            environment: h,
                            userAction: "selectableBlockActions.removeBlocksWithMaybeConfirmation.cleanupAiPageSettings",
                            cellTarget: e ? {
                                spaceWithId: e
                            } : void 0,
                            canUndo: !1,
                            perform: e => {
                                var t;
                                i(380762).AG(k, e, {
                                    ai_prompts: { ...l ? ? {},
                                        default_skill_pages_by_type : f,
                                        skill_container_page_id : y,
                                        rich_text_skills: v
                                    },
                                    agent_personalization_settings: { ...null == (t = k.getSettings()) ? void 0 : t.agent_personalization_settings,
                                        context_page_id: P ? void 0 : M
                                    }
                                })
                            }
                        })
                    }
                }
                let D = i(728372).AppStoreSidebarSpaceStore.state,
                    W = I.some(e => e.isType(i(955630).Gz));
                if (D && W) {
                    i(436555).D6({
                        label: i(962299).A.formatMessage(c.deletePages),
                        right: (0, r.jsx)(i(531119).Ag, {
                            onClick: () => {
                                for (let e of (i(436555).N2(), (0, i(462446).t)({
                                        environment: h,
                                        preventSelectText: !0
                                    }), I)) h.api.callApi({
                                    eventName: "restoreRecord",
                                    environment: h,
                                    data: {
                                        pointer: {
                                            table: n().evP,
                                            id: e.id,
                                            spaceId: e.pointer.spaceId || D.id
                                        }
                                    }
                                });
                                if (w && i(281360).a({
                                        environment: h,
                                        spaceStore: v[0].getSpaceStore(),
                                        pageId: v[0].id,
                                        from: "page_deletion"
                                    }), P && k) {
                                    let e = k.getSpaceId();
                                    (0, i(377796).createAndCommit)({
                                        environment: h,
                                        userAction: "selectableBlockActions.removeBlocksWithMaybeConfirmation.restoreInstructionPage",
                                        cellTarget: e ? {
                                            spaceWithId: e
                                        } : void 0,
                                        canUndo: !1,
                                        perform: e => {
                                            var t;
                                            i(380762).AG(k, e, {
                                                agent_personalization_settings: { ...null == (t = k.getSettings()) ? void 0 : t.agent_personalization_settings,
                                                    context_page_id: M
                                                }
                                            })
                                        }
                                    })
                                }
                            },
                            children: (0, r.jsx)(i(109939).sA, { ...c.restore
                            })
                        })
                    });
                    let e = i(728372).AppStoreCurrentUserSettingsStore.state;
                    e && i(51932).aR({
                        experimentStore: i(218744).default,
                        sidebarSpaceStore: D,
                        currentUserSettingsStore: e,
                        intl: i(962299).A.getIntl(),
                        environment: h
                    })
                }
                I.some(e => {
                    var t;
                    return e.id === (null == (t = i(475097).default.peekTargetStore.state) ? void 0 : t.id)
                }) && i(270912).VN({
                    environment: h,
                    from: void 0
                })
            }
        },
        852864: (e, t, i) => {
            i.d(t, {
                H: () => o
            }), i(898992), i(672577);

            function o({
                spaceStore: e,
                userId: t,
                environment: n
            }) {
                let l = new(i(736309)).d(n, {
                    table: i(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return l ? i(994797).SpaceViewStore.createChildStore(e, {
                    id: l.id,
                    table: i(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        }
    }
]);