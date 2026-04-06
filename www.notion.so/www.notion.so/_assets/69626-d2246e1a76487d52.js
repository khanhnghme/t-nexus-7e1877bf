"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [69626], {
        34824: (e, t, a) => {
            a.d(t, {
                G: () => r,
                e: () => s
            });
            var o, i = a(296540),
                l = a(474848);
            let s = ((o = {})[o.Name = 0] = "Name", o),
                n = {
                    propertyIcon: {
                        fill: a(632079).Tj.icon.primary,
                        marginInlineStart: 6,
                        marginInlineEnd: 2
                    }
                },
                r = i.forwardRef(function(e, t) {
                    let {
                        propertySchema: o,
                        format: i
                    } = e, {
                        name: r,
                        type: d,
                        icon: u
                    } = o, p = (0, a(960253).e)(), c = i === s.Name ? r : a(799514).dC[d];
                    return (0, l.jsx)(a(95582).A, {
                        title: c,
                        icon: (0, l.jsx)(a(221535).zB, {
                            icon: u,
                            type: d,
                            size: a(986939).A.isMobile ? 18 : 16,
                            theme: a(632079).Tj,
                            themeMode: p,
                            style: n.propertyIcon
                        }),
                        ...e
                    })
                })
        },
        90416: (e, t, a) => {
            a.d(t, {
                CT: () => s,
                K_: () => r,
                Mi: () => o,
                uv: () => l,
                zL: () => n,
                zj: () => i
            });
            let o = ["database_agents", "database_agent_autofill_button", "database_agent_run_dropdown", "database_agent_fill_rows", "database_agent_fill_all", "database_agent_preview_generate", "database_agent_edit_modal_toggle", "database_agent_setup_menu_item"],
                i = ["ai_unified_find_search_modal", "ai_unified_find_chat", "ai_chat_with_model", "ai_assistant_limit_in_app", "ai_autofill_fill_all_pages", "ai_autofill_bulk_fill", "ai_autofill_on_page_edit", "ai_autofill_try_on_view", "ai_limit_in_app", "ai_limit_property_autofill", "ai_limit_sidebar", "ai_limit_settings", "ai_limited_qna_no_results", "ai_limited_qna_upsell_action_button", "ai_qna_waitlist", "ai_qna_limit_in_app", "ai_upsell_notice", "ai_upsell_settings", "ai_page_translation", "ai_plans_page", "ai_formulas"],
                l = ["ai_research_mode"],
                s = ["ai_meeting_notes", "ai_meeting_notes_custom_transcript_retention"],
                n = ["ai_agent"],
                r = ["custom_agent", "custom_agents_sidebar", "new_custom_agents_sidebar", "new_custom_agents_library", "slippery_slope_flyout_menu", "custom_agents_launch_modal", "custom_agents_gift_box", "marketplace_agents"]
        },
        97137: (e, t, a) => {
            a.d(t, {
                Uk: () => s,
                gc: () => n,
                r$: () => d
            }), a(944114), a(898992), a(354520), a(672577), a(430670), a(581454);
            var o = () => a(517013),
                i = () => a(232456),
                l = () => a(421439);

            function s(e) {
                let t, s, {
                        modification: n,
                        property: d,
                        propertySchema: u,
                        options: p,
                        groupIndex: c,
                        environment: m,
                        collectionStore: f
                    } = e,
                    g = f.getSpaceShardedPointer(),
                    h = a(218744).default.checkGate({
                        gateName: "collection_schema_hlop"
                    });
                if ("keyedObjectListRemove" === n.type) t = (0, i().T)({
                    updateCollectionPropertySchemaOperation: {
                        pointer: g,
                        command: "updateCollectionPropertySchema",
                        path: ["schema", d, "options"],
                        args: {
                            primitiveOp: {
                                command: "keyedObjectListRemove",
                                args: {
                                    remove: {
                                        id: n.id
                                    }
                                }
                            }
                        }
                    },
                    collectionSchemaHLOPEnabled: h
                }), void 0 !== c && "status" === u.type && (s = (0, i().T)({
                    updateCollectionPropertySchemaOperation: {
                        pointer: g,
                        command: "updateCollectionPropertySchema",
                        path: ["schema", d, "groups", c, "optionIds"],
                        args: {
                            primitiveOp: {
                                command: "listRemove",
                                args: {
                                    id: n.id
                                }
                            }
                        }
                    },
                    collectionSchemaHLOPEnabled: h
                }));
                else {
                    if (p && p.find(e => e.value.toLowerCase() === n.newValue.toLowerCase())) return void a(647095).f1(a(962299).A.formatMessage(r.optionAlreadyExists));
                    if ("keyedObjectListUpdate" === n.type) t = (0, i().T)({
                        updateCollectionPropertySchemaOperation: {
                            pointer: g,
                            command: "updateCollectionPropertySchema",
                            path: ["schema", d, "options"],
                            args: {
                                primitiveOp: {
                                    command: "keyedObjectListUpdate",
                                    args: {
                                        value: { ...n.option,
                                            value: n.newValue
                                        }
                                    }
                                }
                            }
                        },
                        collectionSchemaHLOPEnabled: h
                    });
                    else {
                        let e = u.options || [],
                            o = (0, a(326044).Z)(e);
                        if ("status" === u.type && void 0 !== c) {
                            var y;
                            let e = null == (y = u.groups) || null == (y = y[c]) ? void 0 : y.color;
                            e && (o = e)
                        }
                        let l = {
                            id: (0, a(698596).Ay)(),
                            value: n.newValue,
                            color: o
                        };
                        if ("autoSortInsert" === n.type) {
                            if (!(0, a(532792).l)(u)) return;
                            let e = a(218744).default.checkGate({
                                gateName: "collection_schema_hlop"
                            });
                            t = (0, a(570637).o)({
                                collectionId: f.id,
                                spaceId: g.spaceId,
                                property: d,
                                propertySchema: u,
                                newOption: l,
                                isAscending: "alphabetical" === u.auto_sort_options,
                                collectionSchemaHLOP: e
                            })
                        } else "keyedObjectListBefore" === n.type ? (t = (0, i().T)({
                            updateCollectionPropertySchemaOperation: {
                                pointer: g,
                                command: "updateCollectionPropertySchema",
                                path: ["schema", d, "options"],
                                args: {
                                    primitiveOp: {
                                        command: "keyedObjectListBefore",
                                        args: {
                                            value: l,
                                            before: n.beforeOption
                                        }
                                    }
                                }
                            },
                            collectionSchemaHLOPEnabled: h
                        }), void 0 !== c && "status" === u.type && (s = (0, i().T)({
                            updateCollectionPropertySchemaOperation: {
                                pointer: g,
                                command: "updateCollectionPropertySchema",
                                path: ["schema", d, "groups", c, "optionIds"],
                                args: {
                                    primitiveOp: {
                                        command: "listBefore",
                                        args: {
                                            id: l.id
                                        }
                                    }
                                }
                            },
                            collectionSchemaHLOPEnabled: h
                        }))) : "keyedObjectListAfter" === n.type && (t = (0, i().T)({
                            updateCollectionPropertySchemaOperation: {
                                pointer: g,
                                command: "updateCollectionPropertySchema",
                                path: ["schema", d, "options"],
                                args: {
                                    primitiveOp: {
                                        command: "keyedObjectListAfter",
                                        args: {
                                            value: l,
                                            after: n.afterOption
                                        }
                                    }
                                }
                            },
                            collectionSchemaHLOPEnabled: h
                        }), void 0 !== c && "status" === u.type && (s = (0, i().T)({
                            updateCollectionPropertySchemaOperation: {
                                pointer: g,
                                command: "updateCollectionPropertySchema",
                                path: ["schema", d, "groups", c, "optionIds"],
                                args: {
                                    primitiveOp: {
                                        command: "listBefore",
                                        args: {
                                            id: l.id
                                        }
                                    }
                                }
                            },
                            collectionSchemaHLOPEnabled: h
                        })))
                    }
                }(0, a(916311).p)({
                    environment: m,
                    collectionStore: f,
                    performTransaction: e => {
                        if ((0, l().y4)({
                                store: f,
                                operation: t,
                                transaction: e
                            }), s && (0, l().y4)({
                                store: (0, o().v3)(f, s.pointer),
                                operation: s,
                                transaction: e
                            }), "status" === u.type) {
                            let t = u.options ? ? [],
                                a = (u.groups ? ? []).flatMap(e => e.optionIds);
                            for (let s of t.filter(e => !a.includes(e.id)))(0, l().y4)({
                                store: (0, o().v3)(f, g),
                                operation: (0, i().T)({
                                    updateCollectionPropertySchemaOperation: {
                                        pointer: g,
                                        command: "updateCollectionPropertySchema",
                                        path: ["schema", d, "groups", 0, "optionIds"],
                                        args: {
                                            primitiveOp: {
                                                command: "listBefore",
                                                args: {
                                                    id: s.id
                                                }
                                            }
                                        }
                                    },
                                    collectionSchemaHLOPEnabled: h
                                }),
                                transaction: e
                            })
                        }
                    }
                })
            }

            function n(e) {
                let t, {
                        newValues: s,
                        property: n,
                        schema: r,
                        collectionStore: d,
                        environment: u
                    } = e,
                    p = r[n];
                if ((null == p ? void 0 : p.type) === "status") {
                    for (let e of (t = [
                            []
                        ], s)) e.startsWith("group-header-") ? t.push([]) : t[t.length - 1].push(e);
                    let e = ((null == p ? void 0 : p.options) ? ? []).filter(e => !s.includes(e.value));
                    t[0].push(...e.map(e => e.value))
                } else t = s;
                let c = d.getSpaceShardedPointer(),
                    m = a(218744).default.checkGate({
                        gateName: "collection_schema_hlop"
                    }),
                    f = (0, a(910321).o)({
                        newOptions: t,
                        collectionPointer: c,
                        property: n,
                        schema: r,
                        collectionSchemaHLOP: m
                    });
                f && (p && (0, a(532792).l)(p) && "manual" !== (p.auto_sort_options || "manual") && f.push((0, i().T)({
                    updateCollectionPropertySchemaOperation: {
                        pointer: c,
                        command: "updateCollectionPropertySchema",
                        path: ["schema", n],
                        args: {
                            primitiveOp: {
                                command: "update",
                                args: {
                                    auto_sort_options: "manual"
                                }
                            }
                        }
                    },
                    collectionSchemaHLOPEnabled: m
                })), (0, a(916311).p)({
                    environment: u,
                    collectionStore: d,
                    performTransaction: e => {
                        for (let t of f)(0, l().y4)({
                            store: (0, o().v3)(d, t.pointer),
                            operation: t,
                            transaction: e
                        })
                    }
                }))
            }
            let r = (0, a(109939).YK)({
                deleteModalPrompt: {
                    id: "database.selectPropertyOptionEditMenu.deleteModal.prompt",
                    defaultMessage: "Are you sure you want to delete this option?"
                },
                acceptButtonLabel: {
                    id: "database.selectPropertyOptionEditMenu.deleteModal.confirmButton",
                    defaultMessage: "Delete"
                },
                preventDefaultStatusOptionDelete: {
                    defaultMessage: "Cannot delete default option.",
                    id: "database.editProperty.errorDialog.forbidDeleteDefaultOption.message"
                },
                optionAlreadyExists: {
                    defaultMessage: "Option already exists.",
                    id: "database.optionExistsAlreadyError.message"
                }
            });

            function d(e) {
                let {
                    option: t,
                    propertySchema: o,
                    property: i,
                    collectionStore: l,
                    statusGroup: n,
                    environment: d,
                    deleteMessage: u
                } = e;
                "status" === o.type && t.value === o.defaultOption ? a(647095).f1(a(962299).A.formatMessage(r.preventDefaultStatusOptionDelete)) : a(647095).ui({
                    showCancel: !0,
                    keepFocus: !1,
                    message: u ? ? a(962299).A.formatMessage(r.deleteModalPrompt),
                    items: [{
                        label: a(962299).A.formatMessage(r.acceptButtonLabel),
                        color: "red",
                        onAccept: () => {
                            if ((0, a(532792).l)(o) || "status" === o.type)
                                if ("status" === o.type && n) {
                                    let e = (o.groups ? ? []).findIndex(e => e.id === n.id);
                                    s({
                                        modification: {
                                            type: "keyedObjectListRemove",
                                            id: t.id
                                        },
                                        property: i,
                                        propertySchema: o,
                                        environment: d,
                                        collectionStore: l,
                                        groupIndex: e
                                    })
                                } else s({
                                    modification: {
                                        type: "keyedObjectListRemove",
                                        id: t.id
                                    },
                                    property: i,
                                    propertySchema: o,
                                    environment: d,
                                    collectionStore: l
                                })
                        }
                    }]
                })
            }
        },
        213039: (e, t, a) => {
            a.d(t, {
                M: () => l
            }), a(296540);
            var o = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.25 15.25 11.5",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M3 7.375h6.829a2.501 2.501 0 0 0 4.842 0H17a.625.625 0 1 0 0-1.25h-2.329a2.501 2.501 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25M12.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
                        }), (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.75 15.75a2.5 2.5 0 0 0 2.421-1.875H17a.625.625 0 1 0 0-1.25h-6.829a2.5 2.5 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25h2.329A2.5 2.5 0 0 0 7.75 15.75m0-1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5",
                            clipRule: "evenodd"
                        })]
                    })
                },
                l = (0, a(104509).wt)("sliders", i, "default")
        },
        253092: (e, t, a) => {
            a.r(t), a.d(t, {
                alarmIcon: () => l,
                iconDefinition: () => i
            }), a(296540);
            var o = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.91 0.78 16.18 16.85",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M5.791 1.886a.625.625 0 1 0-.801-.96L2.138 3.31a.625.625 0 1 0 .802.96zm4.834 3.839a.625.625 0 1 0-1.25 0v3.65H6.4a.625.625 0 0 0 0 1.25H10c.345 0 .625-.28.625-.625z"
                        }), (0, o.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0M14.13 1.006a.625.625 0 0 0 .079.88l2.851 2.383a.625.625 0 1 0 .802-.96L15.01.927a.625.625 0 0 0-.88.079"
                        })]
                    })
                },
                l = (0, a(104509).wt)("alarm", i, "default")
        },
        427724: (e, t, a) => {
            a.d(t, {
                x: () => s
            });
            var o = a(296540),
                i = a(474848);
            let l = {
                assistantBlueLink: {
                    color: a(632079).Tj.blue.text.accentPrimary,
                    cursor: "pointer",
                    fontWeight: a(699422).Wy.semibold,
                    textDecoration: "none"
                }
            };

            function s(e) {
                let {
                    featureAvailability: t,
                    upsellFrom: s,
                    sunsetCheckSource: r,
                    showOptimisticUpsell: d
                } = e, u = (0, a(109939).tz)(), p = (0, a(855021).q)(), c = (0, a(972740).L)(), m = (0, a(83208).X)("upgrade_system_ai"), f = (0, a(682985).K8)(() => !!t && "available" === t.type && void 0 !== t.expiry && "sunset" === t.expiry.type, [t]), g = (0, a(722371).Xk)(a(90416).uv, s), h = "ai_formulas" === s, y = "sales_assisted" === p, {
                    handleClick: v,
                    upgradeEligibility: _
                } = (0, a(79268).C)({
                    upsell: null == t ? void 0 : t.upsell,
                    source: s,
                    spaceStore: c
                });
                return (0, o.useMemo)(() => {
                    if (!t) return {
                        upsellHeader: void 0,
                        upsellMessage: u.formatMessage(a(385728).D.noAccessFeatureMessage),
                        actionButtonMsg: void 0,
                        actionForFeatureAvailability: void 0,
                        isSunset: f
                    };
                    if ("available" === t.type && !d) {
                        let e = t.expiry;
                        return void 0 !== r && f && void 0 !== t && void 0 !== e ? {
                            upsellHeader: u.formatMessage(a(385728).D.upgradeToBusiness),
                            upsellMessage: u.formatMessage(a(385728).D.aiConnectorsSunsetUpsellBanner, {
                                date: e.endDate.toFormat("MMMM d"),
                                bold: e => (0, i.jsx)(a(428217).V, {
                                    external: !0,
                                    href: a(168962).JZ.pricing,
                                    hoverColor: "blue",
                                    style: l.assistantBlueLink,
                                    children: e
                                }),
                                breakLine: "assistant_overflow_menu_add_connectors" === r,
                                br: (0, i.jsx)("br", {})
                            }),
                            actionButtonMsg: u.formatMessage(a(385728).D.upgradeButton),
                            actionForFeatureAvailability: v,
                            isSunset: f
                        } : {
                            upsellHeader: void 0,
                            upsellMessage: void 0,
                            actionButtonMsg: void 0,
                            actionForFeatureAvailability: void 0,
                            isSunset: f
                        }
                    }
                    let e = t.upsell;
                    if (!e || "none" === e.type) return {
                        upsellHeader: void 0,
                        upsellMessage: void 0,
                        actionButtonMsg: void 0,
                        actionForFeatureAvailability: void 0,
                        isSunset: f
                    };
                    let o = function(e) {
                        let {
                            salesAssistedUpgradeRequired: t,
                            upgradeEligibility: o
                        } = e, i = "eligible_to_request" === o.status ? "memberCanRequest" : "request_pending" === o.status ? "memberRequested" : "adminUpsell", l = `${i}.${t?"salesAssisted":"selfService"}`;
                        return a(385728).D[l]
                    }({
                        salesAssistedUpgradeRequired: y,
                        upgradeEligibility: _
                    });
                    if ("request_pending" === _.status) return {
                        upsellHeader: void 0,
                        upsellMessage: u.formatMessage(o, {
                            isResearchMode: g,
                            isFormulas: h
                        }),
                        actionButtonMsg: void 0,
                        actionForFeatureAvailability: void 0,
                        isSunset: f
                    };
                    if ("eligible_to_request" === _.status) return m ? {
                        upsellHeader: void 0,
                        upsellMessage: n({
                            upsellMsgInfo: o,
                            upsellFrom: s,
                            upsell: e,
                            isResearchMode: g,
                            isFormulas: h,
                            onClick: v,
                            spaceStore: c
                        }),
                        actionButtonMsg: "ai_meeting_notes" === s ? u.formatMessage(a(385728).D.requestAccessButtonShort) : u.formatMessage(a(385728).D.requestAccessButton),
                        actionForFeatureAvailability: v,
                        isSunset: f
                    } : {
                        upsellHeader: void 0,
                        upsellMessage: u.formatMessage(o, {
                            isResearchMode: g,
                            isFormulas: h,
                            bold: e => (0, i.jsx)(a(675828).f, {
                                onClick: v,
                                children: e
                            })
                        }),
                        actionButtonMsg: "ai_meeting_notes" === s ? u.formatMessage(a(385728).D.requestAccessButtonShort) : u.formatMessage(a(385728).D.requestAccessButton),
                        actionForFeatureAvailability: v,
                        isSunset: f
                    }; {
                        let t = "sales_assisted" === _.status ? u.formatMessage(a(385728).D.contactSalesButton) : "ai_meeting_notes" === s ? u.formatMessage(a(385728).D.upgradeButton) : u.formatMessage(a(385728).D.getNotionAI);
                        return m ? {
                            upsellHeader: void 0,
                            upsellMessage: n({
                                upsellMsgInfo: o,
                                upsellFrom: s,
                                upsell: e,
                                isResearchMode: g,
                                isFormulas: h,
                                onClick: v,
                                spaceStore: c
                            }),
                            actionButtonMsg: t,
                            actionForFeatureAvailability: v,
                            isSunset: f
                        } : {
                            upsellHeader: void 0,
                            upsellMessage: u.formatMessage(o, {
                                isResearchMode: g,
                                isFormulas: h,
                                bold: e => (0, i.jsx)(a(675828).f, {
                                    onClick: v,
                                    children: e
                                })
                            }),
                            actionButtonMsg: t,
                            actionForFeatureAvailability: v,
                            isSunset: f
                        }
                    }
                }, [t, d, y, u, f, r, v, g, h, m, s, _, c])
            }

            function n(e) {
                let {
                    upsellMsgInfo: t,
                    upsellFrom: o,
                    upsell: l,
                    isResearchMode: s,
                    isFormulas: n,
                    onClick: r,
                    spaceStore: d
                } = e, u = { ...t,
                    interpolatedValues: {
                        isResearchMode: s,
                        isFormulas: n,
                        bold: e => (0, i.jsx)(a(675828).f, {
                            onClick: r,
                            children: e
                        })
                    }
                };
                return (0, i.jsx)(a(754951).UpgradeButton, {
                    source: o,
                    upsell: l,
                    display: "text",
                    size: "small",
                    customMessages: {
                        eligible_to_purchase: u,
                        sales_eligible: u,
                        sales_assisted: u
                    },
                    spaceStore: d
                })
            }
        },
        529983: (e, t, a) => {
            a.d(t, {
                A: () => n
            }), a(898992), a(672577), a(581454);
            var o = a(296540),
                i = a(474848);
            let l = {
                    fullWidthButton: {
                        backgroundColor: a(632079).Tj.background.secondary,
                        border: `1px solid ${a(632079).Tj.gray.border.secondaryTranslucent}`,
                        alignItems: "center",
                        color: a(632079).Tj.text.primary,
                        fontWeight: a(699422).Wy.regular
                    },
                    popupWrapper: {
                        margin: "12px 16px"
                    },
                    heading: {
                        fontSize: a(418676).Kw,
                        fontWeight: a(699422).Wy.medium,
                        color: a(632079).Tj.text.secondary,
                        marginBottom: 12
                    },
                    style0: {
                        width: "100%",
                        justifyContent: "space-between"
                    },
                    style1: {
                        width: "100%",
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                },
                s = {
                    fullWidthButtonHover: {
                        backgroundColor: (0, a(133251)._S)({
                            color: a(632079).Tj.background.secondary
                        }).hovered
                    }
                },
                n = function({
                    icon: e,
                    iconStyle: t,
                    title: n,
                    selectedKey: r,
                    onChange: d,
                    onClick: u,
                    popupStyle: p,
                    menuItemOptionsStyle: c,
                    menuStyle: m,
                    disabled: f,
                    collectionContextStore: g,
                    openButtonPopup: h,
                    hideCheck: y,
                    children: v,
                    disableParentClose: _,
                    inputPlaceholder: b,
                    renderSelectedKey: M,
                    variant: S,
                    ...x
                }) {
                    let A = "options" in x ? x.options : a(381453).Bq(x.sections),
                        j = A.find(e => a(381453).n4(e.key, r)),
                        C = (0, a(682985).uB)(void 0, a(510969).A),
                        k = (0, a(682985).O$)(C).open;
                    (0, o.useEffect)(() => {
                        g && h && (C.setState({ ...C.state,
                            open: h
                        }), g.settingsStore.setState({ ...g.settingsStore.state,
                            openButtonPopup: void 0
                        })), j || a(773352).log({
                            level: "error",
                            from: "CollectionSettingsPickListMenuItem",
                            type: "InvalidSelectedItem",
                            error: (0, a(416607).convertErrorToLog)("Selected key is invalid.")
                        })
                    });
                    let O = (0, i.jsx)(a(656252).A, {
                        popupType: a(986939).A.isMobile ? a(182718).nl.BottomSheet : a(182718).nl.Popup,
                        alignmentToOrigin: "end",
                        placementToOrigin: "bottom",
                        style: p,
                        originGap: 0,
                        buttonPopupStore: C,
                        disabled: f,
                        onClick: u,
                        content: e => {
                            let t;
                            t = a(986939).A.isMobile ? {
                                menuType: a(649476).gu.ActionSheet
                            } : {
                                menuType: a(649476).gu.Popup,
                                width: 250,
                                ...m
                            };
                            let o = (t, o) => t.hideOption ? null : "input" === t.type ? {
                                    key: o,
                                    render: o => (0, i.jsx)(a(310324).Ay, { ...o,
                                        style: l.style1,
                                        value: t.inputValue ? ? "",
                                        onChange: e => {
                                            var a;
                                            null == (a = t.onChange) || a.call(t, e.target.value)
                                        },
                                        onSubmit: a => {
                                            var o;
                                            null == (o = t.onSubmit) || o.call(t, t.key, e, t.inputValue), e.close()
                                        },
                                        placeholder: b,
                                        isChecked: !y && a(381453).n4(t.key, r)
                                    }),
                                    action: () => {}
                                } : {
                                    key: o,
                                    render: e => (0, i.jsx)(a(95582).A, { ...e,
                                        disabled: !1,
                                        title: t.title,
                                        icon: t.icon,
                                        caption: t.caption,
                                        captionStyle: t.captionStyle,
                                        inline: t.captionInline,
                                        spacerStyle: t.inlineSpacerStyle,
                                        body: t.body,
                                        style: c,
                                        isChecked: !y && a(381453).n4(t.key, r)
                                    }),
                                    action: () => {
                                        d(t.key, e), _ || e.close()
                                    }
                                },
                                s = "sections" in x ? x.sections.map((e, t) => ({
                                    key: t,
                                    render: e => (0, i.jsx)(a(844565).A, {
                                        enableActionSheetTitle: !0,
                                        topBorder: t > 0,
                                        ...e
                                    }),
                                    items: a(381453).oE(e.map(o))
                                })) : [{
                                    key: 0,
                                    render: e => (0, i.jsx)(a(844565).A, {
                                        enableActionSheetTitle: !0,
                                        ...e
                                    }),
                                    items: a(381453).oE(A.map(o))
                                }];
                            return (0, i.jsxs)(a(747369).A, { ...t,
                                children: [(0, i.jsx)(a(558045).A, {
                                    type: a(558045).O.Vertical,
                                    sections: s,
                                    initialFocus: 0,
                                    resetFocusOnMouseOut: !0
                                }), v || null]
                            })
                        },
                        children: o => {
                            let d = function(e) {
                                let {
                                    renderSelectedKey: t,
                                    selectedKey: a,
                                    selectedOption: o
                                } = e;
                                return t ? t(a) : (null == o ? void 0 : o.type) === "input" ? o.inputValue : (null == o ? void 0 : o.type) === "button" ? o.title : void 0
                            }({
                                renderSelectedKey: M,
                                selectedKey: r,
                                selectedOption: j
                            });
                            return "fullWidth" === S ? (0, i.jsx)(a(95582).A, {
                                icon: null == e ? void 0 : e({}),
                                focused: !1,
                                disabled: f,
                                title: d,
                                buttonStyle: { ...l.style0,
                                    ...l.fullWidthButton
                                },
                                hoveredStyle: s.fullWidthButtonHover,
                                right: f ? void 0 : (0, i.jsx)(a(16275).I, {
                                    icon: a(595453).arrowChevronSingleDownSmallIcon,
                                    size: "sm",
                                    colorVariant: "tertiary"
                                }),
                                ...(0, a(63390).A)(o, x)
                            }) : (0, i.jsx)(a(209572).A, {
                                title: n,
                                showChevron: !0,
                                right: d,
                                rotateChevron: k,
                                disabled: f,
                                icon: e,
                                iconStyle: t,
                                ...(0, a(63390).A)(o, x)
                            })
                        }
                    });
                    return "fullWidth" === S ? (0, i.jsxs)("div", {
                        style: l.popupWrapper,
                        children: [(0, i.jsx)("div", {
                            style: l.heading,
                            children: n
                        }), O]
                    }) : O
                }
        },
        554181: (e, t, a) => {
            a.d(t, {
                E: () => o
            });

            function o(e) {
                let t = e.getSchema();
                if (t)
                    for (let [o, i] of Object.entries(t)) {
                        var a;
                        if (i && "text" === i.type && (null == (a = i.ai_inference) ? void 0 : a.type) === "summarize") {
                            let t = e.getPropertyValue(o);
                            if (t) return t
                        }
                    }
            }
        },
        555676: (e, t, a) => {
            let o;

            function i(e) {
                o = e
            }

            function l() {
                return o
            }
            a.d(t, {
                w: () => i,
                x: () => l
            })
        },
        562592: (e, t, a) => {
            a.d(t, {
                s: () => l,
                y: () => n
            });
            var o = a(296540),
                i = a(474848);
            let l = (0, a(109939).YK)({
                    descriptionHeader: {
                        id: "database.viewSettings.propertyTab.description.title",
                        defaultMessage: "Description"
                    },
                    addDescription: {
                        id: "database.viewSettings.propertyTab.description.addDescription",
                        defaultMessage: "Add a description…"
                    }
                }),
                s = {
                    title: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        cursor: "default",
                        color: a(632079).Tj.text.secondary
                    },
                    descriptionInput: {
                        lineHeight: "20px",
                        fontSize: a(986939).A.isMobile ? 14 : 13
                    }
                };

            function n({
                initialDescription: e,
                handleSaveDescription: t,
                disableAutoSection: r
            }) {
                let [d, u] = (0, o.useState)(e ? ? ""), p = (0, o.useRef)(d), c = (0, a(109939).tz)(), m = (0, o.useCallback)(() => t(p.current), [t]);
                (0, o.useEffect)(() => () => m(), [m]);
                let f = (0, o.useMemo)(() => (0, i.jsx)(a(310324).Ay, {
                    value: d,
                    onChange: e => {
                        u(e.target.value), p.current = e.target.value
                    },
                    onBlur: m,
                    onSubmit: m,
                    placeholder: c.formatMessage(l.addDescription),
                    focusInitial: !0,
                    disabled: !1,
                    inputOuterStyle: s.descriptionInput,
                    textarea: !0,
                    textareaSubmitOnEnter: !0,
                    maxlength: a(689266).fy,
                    autosize: !0,
                    autosizeMaxHeight: 60,
                    showClearButton: !1
                }), [d, c, m]);
                return a(986939).A.isMobile && !r ? (0, i.jsx)(a(844565).A, {
                    topBorder: !0,
                    isInput: !0,
                    title: (0, i.jsx)("span", {
                        style: s.title,
                        children: c.formatMessage(l.descriptionHeader)
                    }),
                    children: f
                }) : f
            }
        },
        645153: (e, t, a) => {
            a.d(t, {
                A: () => s
            }), a(898992), a(354520), a(581454), a(737550);
            var o = a.n(a(844751)),
                i = a(296540),
                l = a(474848);
            let s = function({
                selectedProperty: e,
                onAccept: t,
                schema: s,
                onClose: n,
                allowProperty: r,
                isRelationProperty: d
            }) {
                let u, p = (0, a(109939).tz)(),
                    [c, m] = (0, i.useState)(""),
                    f = Object.keys(s),
                    g = f.some(a(235089).u);
                f = a(381453).Ul(f, e => {
                    let t = (0, a(561872)._g)({
                        schema: s,
                        property: e
                    });
                    return t ? t.name : ""
                });
                let h = g ? a(9247).Ho : a(439368).rn;
                if ((f = a(381453).FF(f, h)).unshift(h), r && (f = f.filter(e => {
                        let t = (0, a(561872)._g)({
                            schema: s,
                            property: e
                        });
                        return t && r(t)
                    })), c) {
                    let e = f.map(e => {
                        let t = (0, a(561872)._g)({
                            schema: s,
                            property: e
                        });
                        return t && t.name
                    });
                    e = o().filter(c, e).map(({
                        original: e
                    }) => e), f = f.filter(t => {
                        let o = (0, a(561872)._g)({
                            schema: s,
                            property: t
                        });
                        return o && o.name && e.includes(o.name)
                    })
                }
                let y = c || f.length > a(847754).R8,
                    v = a(381453).oE(f.map(o => {
                        let i = (0, a(561872)._g)({
                            schema: s,
                            property: o
                        });
                        return i ? {
                            key: o,
                            render: t => (0, l.jsx)(a(34824).G, { ...t,
                                propertySchema: i,
                                format: a(34824).e.Name,
                                isChecked: o === e
                            }),
                            action: () => t(o)
                        } : null
                    })),
                    _ = [{
                        key: 0,
                        items: v
                    }],
                    b = y ? (0, l.jsx)(a(844565).A, {
                        isInput: !0,
                        children: (0, l.jsx)(a(310324).Ay, {
                            focus: !a(986939).A.isMobile || void 0,
                            focusAfterAnimation: !0,
                            value: c,
                            onChange: e => m(e.target.value),
                            placeholder: d ? p.formatMessage({
                                defaultMessage: "Search for a relation property…",
                                id: "propertySelectMenu.searchForProperty.relation.placeholder"
                            }) : p.formatMessage({
                                defaultMessage: "Search for a property…",
                                id: "propertySelectMenu.searchForProperty.default.placeholder"
                            })
                        })
                    }) : null;
                return u = a(986939).A.isMobile ? {
                    menuType: a(649476).gu.Modal,
                    title: d ? p.formatMessage({
                        defaultMessage: "Relation property",
                        id: "propertySelectMenu.mobileMenu.relationProperty.header"
                    }) : p.formatMessage({
                        defaultMessage: "Property",
                        id: "propertySelectMenu.mobileMenu.property.header"
                    }),
                    right: (0, l.jsx)(a(109939).sA, { ...a(789722).W.cancel
                    }),
                    onClickRight: n,
                    header: b
                } : {
                    menuType: a(649476).gu.Popup,
                    width: 280,
                    maxHeight: 480,
                    header: b
                }, (0, l.jsx)(a(747369).A, { ...u,
                    children: 0 === v.length ? (0, l.jsx)(a(844565).A, {
                        children: (0, l.jsx)(a(498341).u, {
                            title: (0, l.jsx)(a(109939).sA, {
                                defaultMessage: "No results",
                                id: "propertySelectMenu.search.noResults.title"
                            })
                        })
                    }) : (0, l.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        sections: _,
                        onAccept: n,
                        initialFocus: c.length > 0 ? 0 : void 0
                    })
                })
            }
        },
        652134: (e, t, a) => {
            a.r(t), a.d(t, {
                aiFaceSmallIcon: () => l,
                iconDefinition: () => i
            }), a(296540);
            var o = a(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.43 11.63 12.81",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M7.204 1.93a3.47 3.47 0 0 0-4.097.39.625.625 0 1 0 .834.931 2.22 2.22 0 0 1 3.16.202.625.625 0 0 0 .944-.818 3.5 3.5 0 0 0-.84-.705m6.018.976A3.47 3.47 0 0 0 8.463 4.1l-5.077 8.476a.625.625 0 0 0 .437.938l4.41.715a.625.625 0 0 0 .2-1.234l-3.5-.568 4.602-7.685a2.22 2.22 0 0 1 3.822.02.625.625 0 1 0 1.08-.63 3.46 3.46 0 0 0-1.214-1.226m-7.83 2.105a1.094 1.094 0 1 0-.35 2.159 1.094 1.094 0 0 0 .35-2.159"
                        }), (0, o.jsx)("path", {
                            d: "M10.762 5.881a1.093 1.093 0 1 0-.35 2.159 1.093 1.093 0 0 0 .35-2.159"
                        })]
                    })
                },
                l = (0, a(104509).wt)("aiFaceSmall", i, "small")
        },
        691636: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            let o = a(546605).Store.createValue({
                open: !1
            }, {
                name: "ConfirmOverwriteModalStore"
            })
        },
        770408: (e, t, a) => {
            a.d(t, {
                s: () => i
            }), a(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.56 0.68 12.88 12.7",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.8.788a1.65 1.65 0 0 0-2.013.73l-.274.563c-.143.237-.29.53-.427.802v.002l-.103.203c-.178.35-.336.639-.483.833L4.823 5.709H2.914c-.746 0-1.352.605-1.352 1.351v4.181c0 .747.606 1.352 1.352 1.352h2.657l.945.324.01.005h.001c.598.3 1.252.454 1.923.454h3.425a1.594 1.594 0 0 0 1.562-1.912c.432-.286.714-.779.714-1.333 0-.213-.044-.413-.119-.593.251-.278.406-.645.406-1.058a1.56 1.56 0 0 0-.284-.901c.12-.218.19-.47.19-.742 0-.88-.713-1.593-1.593-1.593H9.94q.05-.106.11-.225l.002-.004c.11-.222.243-.491.338-.817v-.002l.403-1.41A1.65 1.65 0 0 0 9.808.791zM8.623 2.655l.27-.556a.4.4 0 0 1 .464-.141.4.4 0 0 1 .235.483L9.19 3.85a3.5 3.5 0 0 1-.26.612l-.011.025c-.106.214-.236.475-.33.787a.946.946 0 0 0 .907 1.219h3.255c.19 0 .344.154.344.343 0 .1-.052.198-.157.266a.625.625 0 0 0 .066 1.087.32.32 0 0 1 .184.29.33.33 0 0 1-.231.317.625.625 0 0 0-.192 1.073.34.34 0 0 1 .136.261.34.34 0 0 1-.336.344.625.625 0 0 0-.452 1.057.344.344 0 0 1-.238.594H8.45c-.45 0-.886-.097-1.29-.286a.6.6 0 0 0-.151-.076l-1.131-.387a.6.6 0 0 0-.203-.034h-.006V6.634l1.764-1.88.037-.043c.236-.302.449-.705.627-1.057l.117-.232a10 10 0 0 1 .41-.767M2.812 7.06c0-.056.046-.101.102-.101H4.52v4.384H2.914a.1.1 0 0 1-.102-.102z"
                    })
                },
                i = (0, a(104509).wt)("handThumbsUpSmall", o, "small")
        },
        819534: (e, t, a) => {
            a.d(t, {
                u: () => o
            });
            let o = (0, a(104509).xh)("pencilLine", {
                default: {
                    loader: () => a.e(92668).then(a.bind(a, 636))
                },
                small: {
                    loader: () => a.e(92668).then(a.bind(a, 753114))
                },
                fill: {
                    loader: () => a.e(92668).then(a.bind(a, 491558))
                },
                fillSmall: {
                    loader: () => a.e(92668).then(a.bind(a, 476309))
                }
            }, ["compose", "edit", "write", "create"])
        },
        900294: (e, t, a) => {
            a.d(t, {
                S: () => s
            }), a(296540);
            var o = a(474848);
            let i = (0, a(109939).YK)({
                    addDescriptionTooltip: {
                        id: "database.description.addDescriptionTooltip",
                        defaultMessage: "Add description"
                    },
                    editDescriptionTooltip: {
                        id: "database.description.editDescriptionTooltip",
                        defaultMessage: "Edit description"
                    }
                }),
                l = {
                    button: {
                        flexShrink: 0,
                        flexGrow: 0,
                        borderRadius: a(986939).A.isMobile ? 24 : 20,
                        marginInlineStart: 4
                    }
                };

            function s({
                onClick: e,
                description: t,
                showTooltip: n,
                addDescriptionText: r,
                editDescriptionText: d,
                disabled: u
            }) {
                let [p, c] = (0, a(848135).B)(), m = (0, a(109939).tz)();
                return (0, o.jsx)(a(51831).m, {
                    content: e => (0, o.jsx)("div", { ...e,
                        children: (null == t ? void 0 : t.length) ? t : r ? ? m.formatMessage(i.addDescriptionTooltip)
                    }),
                    disableTooltip: !n || u,
                    style: a(689266).Q$,
                    placement: "top",
                    children: s => (0, o.jsx)(a(64960).Ay, { ...s,
                        ref: p,
                        onClick: e,
                        "aria-label": (null == t ? void 0 : t.length) ? r : d ? ? m.formatMessage(i.editDescriptionTooltip),
                        style: l.button,
                        disabled: u,
                        disabledFeedback: u,
                        children: (0, o.jsx)(a(16275).I, {
                            icon: a(923007).infoCircleFillIcon,
                            colorVariant: c && !u ? "primary" : "secondary",
                            fitToViewBox: "horizontal"
                        })
                    })
                })
            }
        },
        910321: (e, t, a) => {
            a.d(t, {
                o: () => i
            }), a(944114), a(898992), a(354520), a(672577), a(581454);
            var o = () => a(232456);

            function i(e) {
                let {
                    newOptions: t,
                    collectionPointer: i,
                    property: l,
                    schema: s,
                    collectionSchemaHLOP: n = !1
                } = e, r = s[l];
                if (!r || !(0, a(532792).l)(r) && "status" !== r.type) return;
                let d = r.options || [],
                    u = [],
                    p = a(381453).Bq(t),
                    c = d.map(e => e.value),
                    {
                        beforeOps: m
                    } = (0, a(219083).i)(c, p);
                for (let [e, t] of (0, a(722371).WP)(m)) {
                    let a = d.find(t => t.value === e);
                    if (a)
                        if (t) {
                            let e = d.find(e => e.value === t);
                            e && u.push((0, o().T)({
                                updateCollectionPropertySchemaOperation: {
                                    pointer: i,
                                    command: "updateCollectionPropertySchema",
                                    path: ["schema", l, "options"],
                                    args: {
                                        primitiveOp: {
                                            command: "keyedObjectListBefore",
                                            args: {
                                                value: a,
                                                before: {
                                                    id: e.id
                                                }
                                            }
                                        }
                                    }
                                },
                                collectionSchemaHLOPEnabled: n
                            }))
                        } else u.push((0, o().T)({
                            updateCollectionPropertySchemaOperation: {
                                pointer: i,
                                command: "updateCollectionPropertySchema",
                                path: ["schema", l, "options"],
                                args: {
                                    primitiveOp: {
                                        command: "keyedObjectListAfter",
                                        args: {
                                            value: a
                                        }
                                    }
                                }
                            },
                            collectionSchemaHLOPEnabled: n
                        }))
                }
                if ("status" === r.type)
                    for (let [e] of (r.groups ? ? []).entries()) {
                        let a = t[e];
                        if (!Array.isArray(a)) return;
                        let s = d.filter(e => a.includes(e.value)).map(e => e.id);
                        u.push((0, o().T)({
                            updateCollectionPropertySchemaOperation: {
                                pointer: i,
                                command: "updateCollectionPropertySchema",
                                path: ["schema", l, "groups", e, "optionIds"],
                                args: {
                                    primitiveOp: {
                                        command: "set",
                                        args: s
                                    }
                                }
                            },
                            collectionSchemaHLOPEnabled: n
                        }))
                    }
                if (u.length > 0) return u
            }
        },
        931118: (e, t, a) => {
            a.d(t, {
                r: () => i
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.79 2.35 14.41 15.68",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10 2.355a2.35 2.35 0 0 0-2.253 1.686 5.06 5.06 0 0 0-2.803 4.527v1.189c0 .919-.334 1.806-.939 2.498l-.818.935c-.881 1.007-.166 2.583 1.173 2.583h3.02a2.65 2.65 0 0 0 5.24 0h3.02c1.339 0 2.054-1.576 1.173-2.583l-.818-.935a3.8 3.8 0 0 1-.939-2.498v-1.19a5.06 5.06 0 0 0-2.803-4.526A2.35 2.35 0 0 0 10 2.355m1.5 13.418a1.55 1.55 0 0 1-2.998 0zM8.909 4.564A1.104 1.104 0 0 1 10 3.605c.556 0 1.017.415 1.091.96l.049.353.329.138a3.81 3.81 0 0 1 2.337 3.512v1.189c0 1.221.444 2.401 1.248 3.32l.818.936a.307.307 0 0 1-.232.51H4.36a.308.308 0 0 1-.232-.51l.818-.935a5.04 5.04 0 0 0 1.248-3.321v-1.19c0-1.58.963-2.936 2.337-3.511l.33-.138z"
                    })
                },
                i = (0, a(104509).wt)("bell", o, "default")
        },
        942079: (e, t, a) => {
            a.d(t, {
                h: () => s
            }), a(944114), a(898992), a(354520), a(672577), a(430670), a(581454);
            var o = a(296540),
                i = a(474848);
            let l = a(546605).Store.createClass(!1, {
                name: "ShowSelectDescriptionStore"
            });

            function s({
                onClose: e,
                collectionId: t,
                propertySchema: n,
                property: d,
                onChange: p,
                option: c,
                analyticsFrom: m,
                statusGroup: f,
                origin: g,
                open: h,
                alignmentToOrigin: y
            }) {
                let v = (0, a(533992).v3)(),
                    _ = (0, a(713311).ET)(),
                    b = (0, a(682985).uB)(void 0, l),
                    [M, S] = (0, o.useState)(""),
                    x = (0, o.useRef)(h);
                (0, o.useEffect)(() => {
                    !x.current && h && S(c.value), x.current = h
                }, [h, c.value]);
                let A = (0, o.useCallback)(() => (0, i.jsx)(r, {
                        collectionContextStore: _,
                        onClose: e,
                        collectionId: t,
                        propertySchema: n,
                        property: d,
                        onChange: p,
                        option: c,
                        analyticsFrom: m,
                        statusGroup: f,
                        renameInputValue: M,
                        setRenameInputValue: S,
                        showSelectDescriptionStore: b
                    }), [_, e, t, n, d, p, c, m, f, M, S, b]),
                    j = (0, o.useCallback)(() => {
                        var o, i, l, s, r, m, f, g, h, y;
                        return o = v, i = _, l = e, s = t, r = n, m = d, f = p, g = c, h = M, y = a(986939).A.isMobile, void(l(), y || u(o, i, s, r, m, f, g, h))
                    }, [v, _, e, t, n, d, p, c, M]);
                return (0, i.jsx)(a(182718).zD, {
                    popupType: a(986939).A.isMobile ? a(423291).n.BottomSheet : a(423291).n.Popup,
                    open: h,
                    onDismiss: j,
                    content: A,
                    alignmentToOrigin: y,
                    children: g
                })
            }
            let n = {
                style0: {
                    paddingTop: 0
                },
                style1: {
                    fontWeight: a(699422).Wy.semibold
                }
            };

            function r({
                collectionContextStore: e,
                onClose: t,
                collectionId: l,
                propertySchema: s,
                property: p,
                onChange: c,
                option: m,
                analyticsFrom: f,
                statusGroup: g,
                renameInputValue: h,
                setRenameInputValue: y,
                showSelectDescriptionStore: v
            }) {
                let _, b = (0, a(109939).tz)(),
                    M = (0, a(533992).v3)(),
                    S = (0, a(682985).K8)(() => e.collectionStore(), [e]),
                    x = (0, o.useCallback)(e => {
                        y(e.target.value.replace(/,/g, ""))
                    }, [y]),
                    A = (0, o.useCallback)(a => {
                        var o, i, n, r, d, f, g, y, v;
                        return a.stopPropagation(), o = M, i = e, n = t, r = l, d = s, f = p, g = c, y = m, v = h, void(n(), u(o, i, r, d, f, g, y, v))
                    }, [M, e, t, l, s, p, c, m, h]),
                    j = (0, o.useCallback)(() => {
                        if (S) {
                            var o, i, l, n, r, d, u, c, h;
                            return o = M, i = m, l = f, n = s, r = p, d = t, u = S, c = g, h = e, void(a(97137).r$({
                                environment: o,
                                option: i,
                                property: r,
                                propertySchema: n,
                                collectionStore: u,
                                statusGroup: c
                            }), d(), (0, a(123491).L)(o, { ...(0, a(752242).sl)(h),
                                property_type: n.type,
                                action: "select_delete_option",
                                from: l
                            }))
                        }
                    }, [M, m, S, f, s, p, t, g, e]),
                    C = (0, a(682985).O$)(v),
                    k = [];
                C && k.push({
                    key: "description",
                    render: e => (0, i.jsx)(a(844565).A, { ...e,
                        desktopStyle: n.style0,
                        title: a(986939).A.isMobile ? b.formatMessage(a(562592).s.descriptionHeader) : void 0
                    }),
                    items: [{
                        key: "description",
                        render: e => (0, i.jsx)(a(562592).y, { ...e,
                            initialDescription: m.description,
                            handleSaveDescription: e => (function(e, t, o, i, l, s, n, r) {
                                if (e === (r.description ? ? "")) return;
                                let d = { ...r,
                                    description: e
                                };
                                o([{
                                    pointer: {
                                        table: a(832375).VlP,
                                        id: i
                                    },
                                    command: "keyedObjectListUpdate",
                                    path: ["schema", l, "options"],
                                    args: {
                                        value: d
                                    }
                                }]), (0, a(123491).L)(t, {
                                    property_type: s.type,
                                    action: "select_set_description",
                                    from: n
                                })
                            })(e, M, c, l, p, s, f, m),
                            disableAutoSection: !0
                        }),
                        action: () => {}
                    }]
                });
                let O = {
                    key: "action",
                    items: []
                };
                k.push(O), O.items.push({
                    key: "delete",
                    render: e => (0, i.jsx)(a(860287).A, { ...e,
                        title: (0, i.jsx)(a(109939).sA, {
                            id: "database.selectPropertyOptionEditMenu.deleteLabel",
                            defaultMessage: "Delete"
                        }),
                        svg: a(968411).trashIcon
                    }),
                    action: j
                }), g && "status" === s.type && (O.items.push({
                    key: "setAsDefault",
                    render: e => (0, i.jsx)(a(860287).A, { ...e,
                        title: (0, i.jsx)(a(109939).sA, {
                            id: "database.selectPropertyOptionEditMenu.setAsDefault",
                            defaultMessage: "Set as default"
                        }),
                        svg: a(999129).M
                    }),
                    action: () => d(l, p, s, c, f, m, t, M, g)
                }), O.items.push({
                    key: "Group",
                    render: e => (0, i.jsx)("div", { ...e,
                        children: (0, i.jsx)(a(529983).A, { ...e,
                            title: (0, i.jsx)(a(109939).sA, {
                                id: "database.selectPropertyOptionEditMenu.Group",
                                defaultMessage: "Group"
                            }),
                            selectedKey: g.name,
                            options: (s.groups ? ? []).map(e => ({
                                key: e.name,
                                type: "button",
                                title: a(575395).OR[e.name] ? ? e.name
                            })),
                            icon: a(317315).i,
                            onChange: e => {
                                ! function(e, t, o, i, l, s, n, r, d) {
                                    if ("status" !== n.type || !d) return;
                                    let u = {
                                            table: a(832375).VlP,
                                            id: t
                                        },
                                        p = [],
                                        c = n.groups ? ? [],
                                        m = c.findIndex(e => e.id === d.id),
                                        f = c.findIndex(t => t.name === e);
                                    if (m === f) return;
                                    let g = {
                                            pointer: u,
                                            command: "listRemove",
                                            path: ["schema", i, "groups", m, "optionIds"],
                                            args: {
                                                id: o.id
                                            }
                                        },
                                        h = {
                                            pointer: u,
                                            command: "listAfter",
                                            path: ["schema", i, "groups", f, "optionIds"],
                                            args: {
                                                id: o.id
                                            }
                                        };
                                    p.push(g, h);
                                    let y = n.options ? ? [],
                                        v = c.flatMap(e => {
                                            let t = e.optionIds ? ? [];
                                            return y.filter(e => t.includes(e.id))
                                        });
                                    p.push({
                                        pointer: u,
                                        command: "set",
                                        path: ["schema", i, "options"],
                                        args: v
                                    }), l(p), (0, a(123491).L)(r, {
                                        property_type: n.type,
                                        action: "status_set_default",
                                        from: s,
                                        collection_id: t
                                    })
                                }(e, l, m, p, c, f, s, M, g)
                            }
                        })
                    }),
                    action: () => {}
                }));
                let w = a(632079).tS.map(e => ({
                    key: e,
                    render: t => (0, i.jsx)(a(481524).A, { ...t,
                        color: e,
                        isChecked: m.color === e
                    }),
                    action: () => {
                        var t, o, i, n, r, d, u, g;
                        let h;
                        t = e, o = m, i = l, n = p, r = s, d = c, u = f, g = M, h = { ...o,
                            color: t
                        }, d([{
                            pointer: {
                                table: a(832375).VlP,
                                id: i
                            },
                            command: "keyedObjectListUpdate",
                            path: ["schema", n, "options"],
                            args: {
                                value: h
                            }
                        }]), (0, a(123491).L)(g, {
                            property_type: r.type,
                            action: "select_change_color",
                            from: u,
                            collection_id: i
                        })
                    }
                }));
                return k.push({
                    key: "color",
                    render: e => (0, i.jsx)(a(844565).A, { ...e,
                        title: (0, i.jsx)(a(109939).sA, {
                            id: "database.selectPropertyOptionEditMenu.colorsSection",
                            defaultMessage: "Colors"
                        }),
                        topBorder: !0
                    }),
                    items: w
                }), _ = a(986939).A.isMobile ? {
                    menuType: a(649476).gu.Modal,
                    title: (0, i.jsx)(a(593100).O, {
                        format: a(696654).NY.Large,
                        value: m.value,
                        color: m.color,
                        showRemoveButton: !1,
                        isSingle: !0
                    }),
                    right: (0, i.jsx)(a(109939).sA, { ...a(789722).W.done
                    }),
                    onClickRight: A,
                    scrollerStyle: {
                        paddingBottom: a(69118).H
                    }
                } : {
                    menuType: a(649476).gu.Popup,
                    width: 220
                }, (0, i.jsxs)(a(747369).A, { ..._,
                    children: [(0, i.jsx)(a(844565).A, {
                        isInput: !0,
                        children: (0, i.jsx)(a(310324).Ay, {
                            focusInitial: !0,
                            selectAll: !a(986939).A.isMobile,
                            value: h,
                            maxlength: 180,
                            onChange: x,
                            onSubmit: A,
                            showClearButton: !1,
                            inputRight: (0, i.jsx)(a(900294).S, {
                                onClick: () => v.setState(!C),
                                description: m.description,
                                showTooltip: !C
                            })
                        })
                    }), (0, i.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        disableKeyboard: !0,
                        initialFocus: void 0,
                        sections: k
                    })]
                })
            }
            async function d(e, t, o, l, s, r, d, u, p) {
                if ("status" !== o.type || !p || r.value === o.defaultOption) return;
                if (void 0 !== o.defaultOption) {
                    let {
                        accept: e
                    } = await a(647095).Gh({
                        mode: "wide",
                        message: (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "Change default to “{defaultValue}”?",
                            id: "database.editProperty.setAsDefault.confirm.title",
                            values: {
                                defaultValue: r.value
                            }
                        }),
                        description: (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "New pages will start with {defaultValue} as the default status. Existing pages <b>without a status explicitly set</b> will switch to {defaultValue}.",
                            id: "database.editProperty.setAsDefault.confirm.description",
                            values: {
                                defaultValue: r.value,
                                b: e => (0, i.jsx)("span", {
                                    style: n.style1,
                                    children: e
                                })
                            }
                        }),
                        acceptLabel: (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "Continue",
                            id: "database.editProperty.setAsDefault.confirm.continueButton"
                        })
                    });
                    if (!e) return
                }
                let c = {
                        table: a(832375).VlP,
                        id: e
                    },
                    m = [],
                    f = {
                        pointer: c,
                        command: "update",
                        path: ["schema", t],
                        args: {
                            defaultOption: r.value
                        }
                    };
                m.push(f), l(m), d(), (0, a(123491).L)(u, {
                    property_type: o.type,
                    action: "status_set_default",
                    from: s,
                    collection_id: e
                })
            }

            function u(e, t, o, l, s, n, r, d) {
                let u = l.options || [],
                    p = u.find(e => e.id !== r.id && e.value.trim().toLowerCase() === d.trim().toLowerCase());
                if (r.value !== d)
                    if (d)
                        if (p) a(647095).f1((0, i.jsx)(a(109939).sA, {
                            defaultMessage: "This select option already exists.",
                            id: "database.editProperty.errorDialog.duplicateSelectValue.message"
                        }));
                        else {
                            let i = u.find(e => e.id === r.id);
                            if (!i) return;
                            let p = d.trim(),
                                c = { ...i,
                                    value: p
                                },
                                m = {
                                    pointer: {
                                        table: a(832375).VlP,
                                        id: o
                                    },
                                    command: "keyedObjectListUpdate",
                                    path: ["schema", s, "options"],
                                    args: {
                                        value: c
                                    }
                                },
                                f = "status" === l.type && r.value === l.defaultOption ? {
                                    pointer: {
                                        table: a(832375).VlP,
                                        id: o
                                    },
                                    command: "update",
                                    path: ["schema", s],
                                    args: {
                                        defaultOption: p
                                    }
                                } : void 0;
                            n(a(381453).oE([m, f])), (0, a(8043).V)({
                                environment: e,
                                collectionStore: t.collectionStore(),
                                collectionViewStore: t.collectionViewStore(),
                                property: s,
                                from: "view_settings",
                                action: "select_rename_option",
                                option_value_char_count: p.length
                            })
                        }
                else a(647095).f1((0, i.jsx)(a(109939).sA, {
                    defaultMessage: "Please type a value.",
                    id: "database.editProperty.errorDialog.missingSelectValue.message"
                }))
            }
        },
        973124: (e, t, a) => {
            a.d(t, {
                C: () => l
            });
            var o = a(296540),
                i = a(474848);

            function l(e) {
                var t, l, s, n;
                let {
                    property: r,
                    disabled: d,
                    formulas: u,
                    getRecordModel: p,
                    propertySchema: c,
                    collectionStore: m,
                    handleSave: f,
                    handleClose: g,
                    blockStore: h,
                    analyticsFrom: y
                } = e, v = (0, a(713311).ET)(), _ = (0, a(533992).v3)(), [b, M] = (0, o.useState)(null == c || null == (t = c.formula2) ? void 0 : t.code), S = (0, a(537664).F)(c), x = (0, o.useRef)(null == (l = c.formula2) ? void 0 : l.code), A = (0, o.useRef)(b), j = (0, o.useRef)(null == c || null == (s = c.formula2) ? void 0 : s.result_type), C = (0, o.useCallback)(e => {
                    A.current = e, M(e)
                }, []), k = (0, o.useCallback)(e => {
                    j.current = e
                }, []);
                (0, a(637030).X)(() => {
                    let e = x.current,
                        t = A.current,
                        o = j.current;
                    if (t !== e || void 0 !== F) {
                        f({
                            newValue: t,
                            newType: (0, a(345091).removeFunctionsFromType)(o ? ? {
                                type: "unknown"
                            }),
                            propertySchema: c,
                            collectionStore: m,
                            property: r
                        });
                        let e = (0, a(536614).r4)(t, m);
                        (0, a(123491).L)(_, { ...(0, a(752242).sl)(v),
                            property_type: c.type,
                            action: "formula_v2_edit",
                            from: y,
                            formula_char_count: e.length
                        })
                    }
                });
                let O = m.pointer,
                    w = (0, o.useMemo)(() => ({
                        kind: a(416901).FormulaContextValueKind.ThisRow,
                        type: {
                            type: "block",
                            collection: O
                        }
                    }), [O]),
                    P = (0, a(682985).K8)(() => a(686494).A.state.publicPageData, []),
                    T = (0, a(723240).r)(),
                    B = (0, a(682985).K8)(() => (0, a(457103).i)(), []),
                    D = (0, a(682985).K8)(() => _.idCreator.getSpaceIdCreatorSync(T ? ? ""), [_.idCreator, T]),
                    I = (0, a(489828).i)(),
                    L = (0, o.useMemo)(() => {
                        if (!T) return;
                        let e = a(993189).h0Y.fromGetRecordModelFn(p);
                        return {
                            guaranteedPropertyIds: I,
                            sourceProperty: r,
                            valueTypes: [w],
                            handleDataRequest: (0, a(696914).MC)({
                                collectionFeatureGates: B,
                                experimentService: a(218744).default,
                                getRecordModel: p,
                                loadRecordModel: e,
                                spaceIdCreator: D
                            }),
                            formulaPropertyNames: b && (0, a(297493).o2)(b),
                            publicPageDataCollection: {
                                id: null == P ? void 0 : P.collectionId,
                                schema: null == P ? void 0 : P.collectionSchema
                            },
                            spaceId: T,
                            restrictUnaccessibleProperties: "cross_space_only",
                            featureGates: B
                        }
                    }, [T, p, I, r, w, B, D, b, null == P ? void 0 : P.collectionId, null == P ? void 0 : P.collectionSchema]),
                    F = (0, a(682985).K8)(() => {
                        if (!S && c.formula) return u.convertCollectionFormulaToFormula2(c.formula, O, m.getSchema())
                    }, [O, m, u, S, c.formula]),
                    V = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    !async function() {
                        let e;
                        if (!F || V.current || !L) return;
                        let t = await u.analyzeFormula(F, L);
                        e = a(300441).Q.isFail(t) ? {
                            type: "unknown"
                        } : t.value.type ? ? {
                            type: "unknown"
                        }, V.current = !0, C(F), k(e)
                    }()
                }, [m, u, C, k, r, c, F, L]);
                let H = (0, o.useMemo)(() => {
                    var e;
                    let t = S ? null == (e = c.formula2) ? void 0 : e.code : F;
                    return x.current = t, t
                }, [S, null == (n = c.formula2) ? void 0 : n.code, F]);
                return L && T ? (0, i.jsx)(a(747369).A, {
                    menuType: a(986939).A.isMobile ? a(649476).gu.Modal : a(649476).gu.Popup,
                    height: a(986939).A.isMobile ? "100%" : void 0,
                    hideMobileTopbar: !0,
                    width: a(986939).A.isMobile ? void 0 : 740,
                    disableBottomPadding: !0,
                    maxHeight: "unset",
                    disableHeaderBorder: !0,
                    disableScroller: !0,
                    children: (0, i.jsx)(a(27312).v, {
                        initialCode: H,
                        formulas: u,
                        getRecordModel: p,
                        disabled: d,
                        parentSpaceId: T,
                        typecheckContext: L,
                        onCodeChange: C,
                        onTypeChange: k,
                        handleClose: g,
                        parentCollectionStore: m,
                        autosave: !0,
                        formulaSchema: c,
                        collectionStore: m,
                        blockStore: h
                    })
                }) : null
            }
        }
    }
]);