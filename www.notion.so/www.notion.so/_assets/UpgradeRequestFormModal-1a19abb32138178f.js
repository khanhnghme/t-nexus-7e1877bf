"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [56989], {
        77386: (e, t, i) => {
            i.d(t, {
                J2: () => l,
                NF: () => s,
                gA: () => a,
                jl: () => h,
                p6: () => m,
                rQ: () => c
            }), i(581454), i(296540);
            var n = i(474848);
            let a = 24,
                l = 440,
                s = 480,
                r = {
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    gap: 8
                },
                d = {
                    textAlign: "center"
                },
                o = {
                    textAlign: "center"
                };

            function c(e) {
                let {
                    icon: t,
                    title: a,
                    byline: l,
                    bylineWidthOverride: s
                } = e;
                return (0, n.jsxs)("div", {
                    style: r,
                    children: [t, (0, n.jsx)(i(111010).D, {
                        styleKey: "titleSmSemibold",
                        style: d,
                        children: a
                    }), (0, n.jsx)(i(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: s ? { ...o,
                            width: s
                        } : o,
                        children: l
                    })]
                })
            }
            let u = {
                cancelButton: { ...i(399842).W,
                    height: 32,
                    color: i(632079).Tj.text.secondary
                }
            };

            function h(e) {
                let {
                    primaryText: t,
                    primaryAction: a,
                    primaryDisabled: l,
                    secondaryText: s,
                    secondaryAction: r,
                    isLightRed: d,
                    isDarkRed: o,
                    isLoading: c
                } = e, h = !(d || o), p = (0, i(960253).I)(() => ({
                    container: {
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: h ? "row-reverse" : "column",
                        alignItems: "center",
                        justifyContent: h ? "flex-start" : "flex-end",
                        gap: 8,
                        padding: "0 20px",
                        marginInlineStart: -20,
                        width: "calc(100% + 40px)"
                    },
                    fullWidth: h ? {} : {
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }), [h]);
                return (0, n.jsxs)("div", {
                    style: p.container,
                    children: [d ? (0, n.jsx)(i(265779).E, {
                        size: "lg",
                        onClick: a,
                        colorPalette: d ? "red" : void 0,
                        disabled: l,
                        style: p.fullWidth,
                        children: c ? (0, n.jsx)(i(517334).k, {}) : t
                    }) : (0, n.jsx)(i(912946).A, {
                        size: "lg",
                        onClick: a,
                        disabled: l,
                        style: p.fullWidth,
                        colorPalette: o ? "red" : "blue",
                        children: c ? (0, n.jsx)(i(517334).k, {}) : t
                    }), (0, n.jsx)(i(988022).p, {
                        size: "lg",
                        onClick: r,
                        style: { ...p.fullWidth,
                            ...u.cancelButton
                        },
                        children: s
                    })]
                })
            }
            let p = {
                style0: { ...(0, i(418676).pA)(1),
                    textOverflow: "ellipsis"
                },
                selectorContainer: {
                    border: `1px solid ${i(632079).Tj.border.secondary}`,
                    boxShadow: "0px 2px 4px 0px #0000000a",
                    borderRadius: 8
                },
                headerText: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column"
                },
                selectorHeader: {
                    padding: "4px 12px",
                    borderBottom: `1px solid ${i(632079).Tj.border.secondary}`,
                    display: "grid",
                    gridTemplateColumns: "24px 1fr 1fr"
                },
                selectorHeaderWithAction: {
                    paddingTop: 4,
                    paddingInlineEnd: 4,
                    paddingBottom: 4,
                    paddingInlineStart: 12,
                    borderBottom: `1px solid ${i(632079).Tj.border.secondary}`,
                    display: "grid",
                    gridTemplateColumns: "24px 1fr 1fr"
                },
                selectorBody: {
                    paddingInline: 12,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyItems: "center",
                    width: "100%",
                    maxHeight: 204,
                    overflowX: "hidden",
                    overflowY: "auto"
                },
                selectorBodyRow: {
                    display: "grid",
                    gridTemplateColumns: "24px minmax(auto, 50%) 1fr",
                    width: "100%",
                    paddingBlock: 8,
                    gap: 8,
                    borderTop: `1px solid ${i(632079).Tj.border.secondary}`
                }
            };

            function m(e) {
                let {
                    items: t,
                    selectedIds: a,
                    disabledIds: l,
                    onSelectHeader: s,
                    onSelect: r,
                    titleText: d,
                    headerText: o,
                    headerAction: c
                } = e, u = void 0 !== a && void 0 !== l && r && s, h = void 0 !== l ? t.length - l.length : 0, m = (() => {
                    if (void 0 === a) return !1;
                    let e = 0;
                    for (let i of t) a.includes(i.id) && (e += 1);
                    return 0 !== e && (e !== h ? "partial" : 0 !== h)
                })();
                return (0, n.jsxs)(i(4458).VP, {
                    gap: 8,
                    marginBottom: 4,
                    children: [(0, n.jsx)(i(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "secondary",
                        children: d
                    }), (0, n.jsxs)("div", {
                        style: p.selectorContainer,
                        children: [(0, n.jsxs)("div", {
                            style: { ...c ? p.selectorHeaderWithAction : p.selectorHeader,
                                gridTemplateColumns: u ? "24px 1fr 1fr" : "1fr 1fr"
                            },
                            children: [u ? (0, n.jsx)(i(4458).VP, {
                                justifyContent: "center",
                                alignItems: "flex-start",
                                children: (0, n.jsx)(i(349050).S, {
                                    checked: m,
                                    size: 14,
                                    onClick: s
                                })
                            }) : null, (0, n.jsx)(i(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "secondary",
                                style: p.headerText,
                                children: o
                            }), (0, n.jsx)(i(4458).fI, {
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                children: c
                            })]
                        }), (0, n.jsx)("div", {
                            style: p.selectorBody,
                            children: t.map(({
                                id: e,
                                icon: t,
                                name: s,
                                caption: d,
                                byline: o
                            }, c) => (0, n.jsxs)("div", {
                                style: { ...p.selectorBodyRow,
                                    borderTopWidth: +(0 !== c),
                                    gridTemplateColumns: u ? "24px minmax(auto, 50%) 1fr" : "minmax(auto, 50%) 1fr"
                                },
                                children: [u ? (0, n.jsx)(i(4458).VP, {
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    children: (0, n.jsx)(i(349050).S, {
                                        checked: a.includes(e) || l.includes(e),
                                        size: 14,
                                        onClick: () => r(e),
                                        disabled: l.includes(e),
                                        style: {
                                            opacity: l.includes(e) ? .3 : 1
                                        }
                                    })
                                }) : null, (0, n.jsxs)(i(4458).fI, {
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: 8,
                                    children: [(0, n.jsx)(i(4458).fI, {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: 28,
                                        width: 28,
                                        children: t
                                    }), (0, n.jsxs)(i(4458).VP, {
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        gap: 2,
                                        children: [(0, n.jsx)(i(111010).D, {
                                            styleKey: "bodyMedium",
                                            style: p.style0,
                                            children: s
                                        }), d ? (0, n.jsx)(i(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "secondary",
                                            style: p.style0,
                                            children: d
                                        }) : null]
                                    })]
                                }), (0, n.jsx)(i(4458).fI, {
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    children: o
                                })]
                            }, e))
                        })]
                    })]
                })
            }
        },
        152996: (e, t, i) => {
            i.d(t, {
                Vq: () => n,
                bt: () => l,
                vx: () => a
            });
            let n = {
                    mini: 3,
                    small: 4,
                    default: 6,
                    medium: 8,
                    large: 12,
                    max: 16
                },
                a = "0px 4px 0px -2px #00000005",
                l = {
                    opacity: .5,
                    pointerEvents: "none",
                    userSelect: "none"
                }
        },
        270692: (e, t, i) => {
            i.d(t, {
                _: () => n
            });

            function n(e) {
                var t;
                let {
                    feature: n,
                    spaceId: a,
                    userId: l,
                    environment: s,
                    entrypoint: r,
                    setRequestState: d,
                    reasonForRequest: o,
                    adminsToNotify: c
                } = e, u = null == (t = i(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : t.id;
                u && a && l && ((0, i(377796).createAndCommit)({
                    userAction: `UpgradeRequestModal.${n}.onClick`,
                    environment: s,
                    canUndo: !0,
                    cellTarget: a ? {
                        spaceWithId: a
                    } : void 0,
                    perform: e => {
                        i(124937).vt({
                            environment: s,
                            table: i(832375).GUg,
                            args: {
                                id: (0, i(4962).Ay)(),
                                space_id: a,
                                request: n,
                                createdByPointer: {
                                    id: l,
                                    table: i(832375).oo9
                                },
                                parentPointer: {
                                    id: u,
                                    table: "space_view"
                                },
                                entrypoint: r,
                                reason_for_request: o,
                                request_status: "pending",
                                admins_to_notify: c
                            },
                            transaction: e,
                            inMemoryRecordCache: s.defaultRecordCache.inMemoryRecordCache
                        })
                    }
                }), d && d("pending"))
            }
        },
        314084: (e, t, i) => {
            i.d(t, {
                t: () => l
            }), i(296540);
            var n = i(474848);
            let a = {
                kVAEAm: "x1n2onr6",
                $$css: !0
            };

            function l(e) {
                let {
                    children: t,
                    footer: l,
                    header: s,
                    showDismissButton: r = !0,
                    sizeRange: d,
                    gap: o = 24
                } = e;
                return (0, n.jsxs)(i(4458).VP, {
                    paddingBlock: 20,
                    minHeight: null == d ? void 0 : d.minHeight,
                    maxHeight: null == d ? void 0 : d.maxHeight,
                    minWidth: null == d ? void 0 : d.minWidth,
                    maxWidth: null == d ? void 0 : d.maxWidth,
                    gap: o,
                    style: a,
                    className: "autolayout-fill-width",
                    children: [(0, n.jsx)("div", {
                        className: "xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: s
                    }), t ? (0, n.jsx)("div", { ...{
                            className: "x78zum5 x1iyjqo2 x6ikm8r x10wlt62"
                        },
                        children: (0, n.jsx)("div", {
                            className: "x78zum5 x1iyjqo2 x1nn3v0j x1xnnf8n x1120s5i x106a9eq x1odjw0f",
                            children: t
                        })
                    }) : null, l ? (0, n.jsx)("div", {
                        className: "xr1yuqi xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: l
                    }) : null, r ? (0, n.jsx)(i(226512).R, {}) : null]
                })
            }
        },
        348103: (e, t, i) => {
            i.r(t), i.d(t, {
                UpgradeRequestFormModal: () => l,
                UpgradeRequestFormModalWithData: () => s
            }), i(898992), i(354520), i(581454);
            var n = i(296540),
                a = i(474848);

            function l(e) {
                let {
                    spaceStore: t
                } = e, {
                    open: n,
                    ...l
                } = (0, i(682985).O$)(i(839250).Q), {
                    status: r,
                    workspaceOwners: d
                } = (0, i(413297).P)({
                    spaceStore: t,
                    skip: !n
                });
                return "feature" in l && t && "pending" !== r ? (0, a.jsx)(s, {
                    spaceStore: t,
                    workspaceOwners: d,
                    onDismiss: () => i(839250).Q.update(e => ({
                        open: !1
                    })),
                    ...l
                }) : null
            }

            function s(e) {
                let t = (0, i(109939).tz)(),
                    [l, s] = n.useState(e.workspaceOwners.map(e => e.id));
                return (0, a.jsx)(i(833503).s, {
                    ariaLabel: t.formatMessage({
                        id: "highlightPlanRequestButton.modal.ariaLabel",
                        defaultMessage: "Upgrade plan request modal"
                    }),
                    isOpen: !0,
                    onDismiss: e.onDismiss,
                    areaConstraint: {
                        width: {
                            type: "min",
                            length: 400
                        },
                        height: {
                            type: "unlimited",
                            scroll: "allow"
                        }
                    },
                    children: () => (0, a.jsx)(d, { ...e,
                        checkedState: l,
                        setCheckedState: s
                    })
                })
            }
            let r = {
                outlineIcon: {
                    color: i(632079).Tj.text.secondary
                },
                input: {
                    padding: "10px 8px",
                    width: "100%",
                    height: 36,
                    background: i(632079).Tj.background.secondary,
                    borderRadius: 6
                },
                modalHeaderIcon: {
                    marginBottom: 4
                },
                modalHeaderTitle: {
                    padding: "0 8px"
                },
                modalHeaderByline: {
                    padding: "0 40px"
                },
                usersContainer: {
                    paddingTop: 16,
                    paddingInlineEnd: 0,
                    paddingBottom: 16,
                    paddingInlineStart: 16,
                    borderRadius: i(152996).Vq.medium,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: i(632079).Tj.border.secondary
                },
                learnMoreTooltip: {
                    width: 240,
                    whiteSpace: "normal"
                },
                style0: {
                    overflowY: "auto"
                },
                style2: {
                    marginInlineEnd: 8
                },
                style3: {
                    position: "relative",
                    paddingBottom: 8
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function d({
                feature: e,
                onDismiss: t,
                setRequestState: l,
                spaceStore: s,
                userId: o,
                workspaceOwners: c,
                checkedState: u,
                setCheckedState: h,
                entrypoint: p
            }) {
                let m = (0, i(109939).tz)(),
                    x = (0, i(533992).v3)(),
                    [g, y] = n.useState("");
                return (0, a.jsx)(i(314084).t, {
                    showDismissButton: !0,
                    header: (0, a.jsx)(i(77386).rQ, {
                        icon: (0, a.jsx)("div", {
                            style: r.modalHeaderIcon,
                            children: "ai_credit_pack" === e ? (0, a.jsx)(i(16275).I, {
                                icon: i(681008).f,
                                colorVariant: "tertiary"
                            }) : (0, a.jsx)(i(16275).I, {
                                icon: i(831732).F,
                                size: 30,
                                style: r.outlineIcon
                            })
                        }),
                        title: (0, a.jsx)("div", {
                            style: r.modalHeaderTitle,
                            children: "ai_credit_pack" === e ? (0, a.jsx)(i(109939).sA, {
                                id: "highlightPlanRequestButton.modal.aiCreditsTitle",
                                defaultMessage: "Request additional {feature}",
                                values: {
                                    feature: i(262166).v0.aiCreditPack.defaultMessage
                                }
                            }) : (0, a.jsx)(i(109939).sA, {
                                id: "highlightPlanRequestButton.modal.title",
                                defaultMessage: "Request an upgrade to use {feature}",
                                values: {
                                    feature: i(262166).v0[e].defaultMessage
                                }
                            })
                        }),
                        byline: (0, a.jsx)("div", {
                            style: r.modalHeaderByline,
                            children: "ai_credit_pack" === e ? m.formatMessage({
                                id: "highlightPlanRequestButton.modal.aiCreditsSubtitle",
                                defaultMessage: "Let your workspace owners know that you're interested in additional credits"
                            }) : m.formatMessage({
                                id: "highlightPlanRequestButton.modal.subtitle",
                                defaultMessage: "Let your workspace owners know that you're interested in this feature"
                            })
                        })
                    }),
                    footer: (0, a.jsx)(i(77386).jl, {
                        primaryText: m.formatMessage({
                            id: "highlightPlanRequestButton.modal.submitButton",
                            defaultMessage: "Submit request"
                        }),
                        primaryAction: () => {
                            (0, i(270692)._)({
                                feature: e,
                                spaceId: s.id,
                                userId: o,
                                environment: x,
                                entrypoint: p,
                                setRequestState: l,
                                reasonForRequest: g,
                                adminsToNotify: u
                            }), (0, i(104310).u)({
                                event: {
                                    eventName: "upgrade_request_submitted",
                                    eventProperties: {
                                        feature: e,
                                        entrypoint: p,
                                        number_admins_notified: u.length,
                                        added_note: g.length > 0
                                    }
                                }
                            }), i(436555).D6({
                                label: m.formatMessage({
                                    id: "RequestUpgradeForm.modal.submitted.toast.label",
                                    defaultMessage: "Successfully sent request"
                                })
                            }), t()
                        },
                        secondaryText: m.formatMessage({
                            id: "highlightPlanRequestButton.modal.cancelButton",
                            defaultMessage: "Cancel"
                        }),
                        secondaryAction: () => {
                            (0, i(104310).u)({
                                event: {
                                    eventName: "upgrade_request_canceled",
                                    eventProperties: {
                                        feature: e,
                                        entrypoint: p
                                    }
                                }
                            }), t()
                        }
                    }),
                    children: (0, a.jsxs)(i(4458).VP, {
                        gap: 24,
                        padding: 2,
                        className: "autolayout-fill-width",
                        style: r.positionRelative,
                        children: [(0, a.jsxs)(i(4458).VP, {
                            gap: 8,
                            style: r.positionRelative,
                            children: [(0, a.jsxs)(i(4458).fI, {
                                gap: 4,
                                style: r.positionRelative,
                                children: [(0, a.jsx)(i(111010).D, {
                                    styleKey: "captionMedium",
                                    colorVariant: "secondary",
                                    children: m.formatMessage({
                                        id: "highlightPlanRequestButton.modal.selectWorkspaceOwners",
                                        defaultMessage: "Select who to notify"
                                    })
                                }), (0, a.jsx)(i(51831).m, {
                                    style: r.learnMoreTooltip,
                                    placement: "right",
                                    content: () => (0, a.jsx)(i(4458).VP, {
                                        gap: 2,
                                        children: (0, a.jsx)(i(111010).D, {
                                            styleKey: "captionMedium",
                                            children: m.formatMessage({
                                                id: "highlightPlanRequestButton.modal.notifyTooltip",
                                                defaultMessage: "Select who will receive an inbox notification for your request. Every workspace owner will be able to see all requests via the Requests tab in Settings."
                                            })
                                        })
                                    }),
                                    children: e => (0, a.jsx)("div", { ...e,
                                        children: (0, a.jsx)(i(708966).Q, {
                                            iconGroup: i(799472).u,
                                            variantName: "small",
                                            colorVariant: "tertiary"
                                        })
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                style: r.usersContainer,
                                children: c.length > 0 ? (0, a.jsx)(i(4458).VP, {
                                    gap: 16,
                                    width: "100%",
                                    maxHeight: 128,
                                    style: r.style0,
                                    children: c.map(e => (0, a.jsxs)(i(4458).fI, {
                                        gap: 8,
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        children: [(0, a.jsx)(i(349050).S, {
                                            size: 14,
                                            checked: u.includes(e.id),
                                            onClick: () => {
                                                h(t => t.includes(e.id) ? t.filter(t => t !== e.id) : [...t, e.id])
                                            },
                                            style: r.style2
                                        }, `check-${e.id}`), (0, a.jsx)(i(111010).D, {
                                            styleKey: "bodyRegular",
                                            colorVariant: "primary",
                                            children: (0, a.jsx)(i(980494).A, {
                                                avatarSize: 32,
                                                userStore: e,
                                                hasPersonHoverCard: !1
                                            })
                                        })]
                                    }, e.id))
                                }) : void 0
                            })]
                        }), (0, a.jsxs)(i(4458).VP, {
                            gap: 8,
                            style: r.style3,
                            children: [(0, a.jsx)(i(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "secondary",
                                children: m.formatMessage({
                                    id: "highlightPlanRequestButton.modal.noteLabel",
                                    defaultMessage: "Add a note (optional)"
                                })
                            }), (0, a.jsx)(i(36481).p, {
                                style: r.input,
                                value: g,
                                focusInitial: !0,
                                onChange: e => {
                                    y(e.target.value)
                                }
                            })]
                        })]
                    })
                })
            }
        },
        399842: (e, t, i) => {
            i.d(t, {
                W: () => n
            });
            let n = {
                height: 28,
                paddingInlineStart: 8,
                paddingInlineEnd: 8,
                paddingTop: 4,
                paddingBottom: 4,
                fontWeight: i(699422).Wy.medium
            }
        },
        413297: (e, t, i) => {
            i.d(t, {
                P: () => n
            }), i(898992), i(354520), i(581454);

            function n(e) {
                let {
                    spaceStore: t,
                    skip: n = !1
                } = e, a = (0, i(533992).v3)(), l = (0, i(345776).T)(), [{
                    status: s,
                    value: r
                }] = (0, i(97668).Yb)(async () => {
                    let e = null == t ? void 0 : t.id;
                    if (!n && e) {
                        if (i(908032).i({
                                userId: l,
                                spaceId: e,
                                debugFrom: "useWorkspaceOwners"
                            })) {
                            let e = i(218744).default.getConfigKey("email_alias_migration", "mode"),
                                n = await a.api.callApi({
                                    eventName: "listUsers",
                                    environment: a,
                                    data: {
                                        cursor: void 0,
                                        membershipFilter: "owners",
                                        limit: 1e3,
                                        query: "",
                                        spaceId: t.id,
                                        includeAliasSearch: (0, i(485477).K)(e)
                                    }
                                });
                            return "success" === n.type ? n.data.users.map(e => e.id) : []
                        } {
                            let e = (0, i(840752).M)({
                                spaceId: null == t ? void 0 : t.id,
                                userId: l,
                                enforceIdsCheck: !1,
                                debugFrom: "useWorkspaceOwners"
                            });
                            return e ? (0, i(576968).B)(e).filter(e => (0, i(729052).Jm)(e.membershipType)).map(e => e.userId) : []
                        }
                    }
                }, [a, t, n, l]);
                return {
                    status: s,
                    workspaceOwners: (0, i(682985).K8)(() => !n && r && t ? r.map(e => (0, i(505116).z)({
                        userId: e,
                        spaceStore: t
                    })) : [], [r, t, n])
                }
            }
        },
        505116: (e, t, i) => {
            i.d(t, {
                z: () => n
            });

            function n(e) {
                let {
                    userId: t,
                    spaceStore: n
                } = e;
                return i(807825).L.createChildStore(n, {
                    table: i(832375).oo9,
                    id: t
                })
            }
        },
        681008: (e, t, i) => {
            i.d(t, {
                f: () => l
            }), i(296540);
            var n = i(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.64 1.23 16.72 17.53",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8.833 7.26a2.522 2.522 0 0 1 4.34.022.551.551 0 0 1-.95.555 1.422 1.422 0 0 0-2.446-.012L6.676 13l2.255.366a.55.55 0 0 1-.176 1.085L5.7 13.956a.55.55 0 0 1-.384-.825z"
                        }), (0, n.jsx)("path", {
                            d: "M10.518 8.605a.705.705 0 1 1-.225 1.393.705.705 0 0 1 .225-1.393m-3.719-.602a.706.706 0 1 1-.227 1.393.706.706 0 0 1 .227-1.393M5.146 5.999a2.524 2.524 0 0 1 3.586.23.55.55 0 0 1-.83.72 1.426 1.426 0 0 0-2.023-.13.55.55 0 1 1-.733-.82"
                        }), (0, n.jsx)("path", {
                            d: "M11.258 1.236c4.03 0 7.097 4.047 7.098 8.764s-3.069 8.762-7.098 8.763H8.743l-.375-.012C4.524 18.509 1.645 14.569 1.645 10c0-4.717 3.068-8.763 7.097-8.764zm-2.516 1.1c-3.202 0-5.998 3.31-5.998 7.664 0 4.355 2.796 7.663 5.998 7.663S14.74 14.355 14.74 10s-2.795-7.664-5.998-7.664m6.846 5.354c.164.74.253 1.516.253 2.31 0 3.134-1.356 5.97-3.446 7.522 2.699-.674 4.86-3.693 4.86-7.522a9.7 9.7 0 0 0-.275-2.31zm-.979-2.622q.396.718.672 1.523h1.35a8 8 0 0 0-.784-1.523zm-2.215-2.591a7.6 7.6 0 0 1 1.499 1.492h1.054c-.74-.738-1.614-1.258-2.553-1.492"
                        })]
                    })
                },
                l = (0, i(104509).wt)("aiCoin", a, "default")
        },
        831732: (e, t, i) => {
            i.d(t, {
                F: () => l
            }), i(296540);
            var n = i(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.13 15.26 14.86",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M9.533 5.813a.625.625 0 0 1 .884 0l2.5 2.5a.625.625 0 1 1-.884.884l-1.408-1.408v3.966a.625.625 0 1 1-1.25 0V7.739L7.917 9.197a.625.625 0 0 1-.884-.884z"
                        }), (0, n.jsx)("path", {
                            d: "M15.5 3.13c1.174 0 2.125.951 2.125 2.125v7.5A2.125 2.125 0 0 1 15.5 14.88h-4.935l-3.871 2.978a.625.625 0 0 1-1.006-.496V14.88H4.5a2.125 2.125 0 0 1-2.125-2.125v-7.5c0-1.174.951-2.125 2.125-2.125zm.875 2.125a.875.875 0 0 0-.875-.875h-11a.875.875 0 0 0-.875.875v7.5c0 .483.392.875.875.875h1.813c.345 0 .625.28.625.625v1.838l3.033-2.334a.63.63 0 0 1 .381-.13H15.5a.875.875 0 0 0 .875-.874z"
                        })]
                    })
                },
                l = (0, i(104509).wt)("commentArrowUp", a, "default")
        },
        839250: (e, t, i) => {
            i.d(t, {
                Q: () => n
            });
            let n = i(546605).Store.createValue({
                open: !1
            }, {
                name: "UpgradeRequestFormModalStore"
            })
        },
        840752: (e, t, i) => {
            i.d(t, {
                M: () => n
            });

            function n(e) {
                let {
                    spaceId: t,
                    userId: n,
                    enforceIdsCheck: a,
                    debugFrom: l
                } = e, s = (0, i(451963).f)({
                    spaceId: t,
                    userId: n,
                    enforceIdsCheck: a,
                    debugFrom: l
                });
                return null == s ? void 0 : s.state
            }
        },
        980494: (e, t, i) => {
            i.d(t, {
                A: () => l
            }), i(296540);
            var n = i(474848);
            let a = {
                    style0: { ...i(699422).RC
                    }
                },
                l = function(e) {
                    let t = {
                            marginInlineEnd: e.avatarMarginRight ? ? 6,
                            alignSelf: "center"
                        },
                        l = {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...e.style
                        },
                        s = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: r,
                            avatarShouldShowShadow: d,
                            avatarSize: o,
                            hasTooltip: c,
                            tooltipHeader: u,
                            hasPersonHoverCard: h,
                            spaceStore: p
                        } = e,
                        m = (0, i(109939).tz)(),
                        x = (0, i(682985).K8)(() => null == r ? void 0 : r.getDisplayName(m), [r, m]),
                        g = (0, n.jsxs)("div", {
                            style: l,
                            children: [(0, n.jsx)("div", {
                                style: s,
                                children: (0, n.jsx)(i(321753).A, {
                                    userStore: r,
                                    avatarShouldShowShadow: d,
                                    size: o,
                                    hasTooltip: c && !h,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: u
                                })
                            }), (0, n.jsx)("div", {
                                className: "notranslate",
                                style: a.style0,
                                children: x
                            })]
                        });
                    return h ? (0, n.jsx)(i(532755).D, {
                        userStore: r,
                        spaceStore: p,
                        from: e.personHoverCardEntrypoint,
                        children: g
                    }) : g
                }
        }
    }
]);