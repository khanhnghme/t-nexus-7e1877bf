"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [7251], {
        49847: (e, t, o) => {
            o.d(t, {
                B: () => i
            }), o(296540);
            var r = o(474848);

            function i({
                store: e,
                disabled: t,
                style: n,
                placeholder: l,
                className: a,
                onChange: s,
                id: d
            }) {
                return (0, r.jsx)(o(53373).A, {
                    store: e,
                    style: n,
                    className: a,
                    disableSlashCommands: !0,
                    onEnter: o(763230).lQ,
                    onEsc: o(763230).lQ,
                    onTab: o(763230).lQ,
                    onUntab: o(763230).lQ,
                    onMoveDown: o(763230).lQ,
                    onMoveUp: o(763230).lQ,
                    disableSelectAllBlocks: !0,
                    disableSelectionDrag: !0,
                    disableEmbedMenu: !0,
                    disabledMentionTypes: {
                        page: !1,
                        user: !1,
                        date: !1,
                        createPage: !0,
                        inviteUserToWorkspace: !0,
                        inviteUserToPage: !0,
                        reminder: !0,
                        bot: !0,
                        heading: !0,
                        group: !0,
                        templateVariable: !0,
                        property: !0
                    },
                    disabled: t,
                    pasteBehavior: "inline",
                    placeholder: l,
                    inPageFind: o(831719).Os.none,
                    disableComment: !0,
                    onBlur: o(763230).lQ,
                    onChange: s,
                    id: d,
                    context: "form-input"
                })
            }
        },
        61955: (e, t, o) => {
            o.d(t, {
                A: () => n
            });
            var r = o(296540),
                i = o(474848);

            function n({
                propertySchema: e,
                formQuestionStore: t,
                formMode: l
            }) {
                let a = (0, o(960253).I)(() => ({
                        select: {
                            color: o(632079).Tj.text.tertiary,
                            marginTop: 4,
                            marginBottom: 12,
                            ..."viewer" === l ? {
                                marginInlineStart: 0,
                                marginInlineEnd: 0
                            } : {
                                marginInlineStart: 10,
                                marginInlineEnd: 10
                            }
                        }
                    }), [l]),
                    s = (0, o(682985).K8)(() => (0, o(703049).hm)(e, t.getModel()), [t, e]),
                    d = (0, r.useMemo)(() => "builder" === l ? void 0 === s ? (0, i.jsx)(o(109939).sA, {
                        id: "QuestionMaxSelection.builder.unlimited",
                        defaultMessage: "(Respondents can select as many as they like)"
                    }) : (0, i.jsx)(o(109939).sA, {
                        id: "QuestionMaxSelection.builder.limited",
                        defaultMessage: "(Respondents can select up to {count})",
                        values: {
                            count: s
                        }
                    }) : void 0 === s ? (0, i.jsx)(o(109939).sA, {
                        id: "QuestionMaxSelection.viewer.unlimited",
                        defaultMessage: "(Select as many as you like)"
                    }) : (0, i.jsx)(o(109939).sA, {
                        id: "QuestionMaxSelection.viewer.limited",
                        defaultMessage: "(Select up to {count})",
                        values: {
                            count: s
                        }
                    }), [l, s]);
                return (0, i.jsx)("div", {
                    style: a.select,
                    children: d
                })
            }
        },
        107251: (e, t, o) => {
            o.d(t, {
                J: () => eW
            }), o(16280), o(581454);
            var r = o(296540);

            function i(e, t) {
                let r = "section_hide" !== (0, o(613968).z5)(null == t ? void 0 : t.page_section_visibility);
                return e.filter(e => "discussions" !== e.type || r)
            }

            function n() {
                let {
                    layoutStore: e
                } = (0, o(613789).LH)();
                return "form" === (0, o(682985).K8)(() => {
                    var t;
                    return null == (t = e.getModel()) ? void 0 : t.getLayoutType()
                }, [e]) ? 24 : 12
            }

            function l() {
                let e = (0, o(960253).e)();
                return (0, o(960253).I)(() => ({
                    button: {
                        background: "light" === e ? o(632079).Tj.palette.uiBlue[100] : o(632079).Tj.palette.uiBlue[200]
                    },
                    buttonHovered: {
                        background: "light" === e ? o(632079).Tj.palette.uiBlue[200] : o(632079).Tj.palette.uiBlue[300]
                    },
                    buttonPressed: {
                        background: "light" === e ? o(632079).Tj.palette.uiBlue[300] : o(632079).Tj.palette.uiBlue[400]
                    }
                }), [e])
            }
            o(898992), o(354520), o(18107), o(967357);
            var a = o(474848);
            let s = (0, o(109939).YK)({
                    formLayoutAddModule: {
                        id: "addModuleHoverMenu.formLayout.add",
                        defaultMessage: "Add question"
                    },
                    pageLayoutAddModule: {
                        id: "addModuleHoverMenu.pageLayout.add",
                        defaultMessage: "Add"
                    }
                }),
                d = {
                    style0: {
                        width: o(104509).Ev.default,
                        height: o(104509).Ev.default,
                        transform: "rotate(45deg)"
                    }
                };

            function u(e) {
                if ("views_main_tab_modules" === e.area) throw Error("[ViewsMain Not Implemented] AddModuleHoverMenu not implemented for views_main_tab_modules");
                let t = (0, o(109939).tz)(),
                    {
                        layoutStore: r,
                        addModuleHoverMenuStore: i,
                        currentModuleSelection: n
                    } = (0, o(613789).LH)(),
                    u = (0, o(682985).K8)(() => {
                        if (i.state.isOpen) return i.state.moduleId
                    }, [i]),
                    c = (0, o(682985).K8)(() => {
                        if (!u) return;
                        let e = o(581771).A.findModuleContainer({
                            layoutStore: r,
                            moduleId: u
                        });
                        if (e) return e.getNode()
                    }, [u, r]),
                    p = (0, o(682985).K8)(() => {
                        if (!n || "new_module" === n.type) return !1;
                        let e = r.getModuleById(n.moduleId);
                        return (null == e ? void 0 : e.type) === "placeholder"
                    }, [n, r]),
                    g = (0, o(682985).K8)(() => i.state.isOpen, [i]),
                    m = (0, o(682985).K8)(() => {
                        var t;
                        if ("views_main_tab_modules" === e.area) throw Error("[ViewsMain Not Implemented] AddModuleHoverMenu not implemented for views_main_tab_modules");
                        if ("form_conditional_modules" === e.area) return !1;
                        let i = r.getModules()[e.area],
                            n = (null == i ? void 0 : i.filter(e => (0, o(940371)._)(e))) ? ? [],
                            l = 0 === n.length || (null == (t = n.at(-1)) ? void 0 : t.id) === u;
                        return g && !p && !l
                    }, [g, u, p, r, e.area]),
                    y = (0, o(911859).t)({
                        area: e.area,
                        afterModuleId: u
                    }),
                    f = l(),
                    v = (0, o(960253).I)(() => ({
                        bigRoundButton: { ...f.button,
                            width: 32,
                            height: 32,
                            borderStartStartRadius: "100%",
                            borderStartEndRadius: "100%",
                            borderEndStartRadius: "100%",
                            transform: "rotate(-45deg)"
                        },
                        bigRoundButtonHovered: { ...f.buttonHovered
                        },
                        bigRoundButtonPressed: { ...f.buttonPressed
                        }
                    }), [f]),
                    h = "form" === (0, o(682985).K8)(() => {
                        var e;
                        return null == (e = r.getModel()) ? void 0 : e.getLayoutType()
                    }, [r]) ? t.formatMessage(s.formLayoutAddModule) : t.formatMessage(s.pageLayoutAddModule),
                    b = c ? c.offsetLeft - 40 : void 0,
                    x = c ? c.offsetTop + c.offsetHeight - 4 : void 0;
                return void 0 === b || void 0 === x ? null : (0, a.jsx)(o(654979).A, {
                    visible: m,
                    animate: {
                        opacity: 1,
                        scale: 1,
                        transformOrigin: "center right"
                    },
                    initial: {
                        opacity: 0,
                        scale: .3,
                        transformOrigin: "center right"
                    },
                    exit: {
                        opacity: 0,
                        scale: .3,
                        transformOrigin: "center right"
                    },
                    style: {
                        position: "absolute",
                        insetInlineStart: b,
                        top: x
                    },
                    children: (0, a.jsx)(o(51831).m, {
                        placement: "left",
                        content: () => h,
                        children: e => (0, a.jsx)(o(374533).A, { ...e,
                            style: v.bigRoundButton,
                            hoveredStyle: v.bigRoundButtonHovered,
                            className: o(828432).kew,
                            pressedStyle: v.bigRoundButtonPressed,
                            onClick: y,
                            icon: o(581923).plusIcon,
                            iconStyle: d.style0,
                            colorPalette: "blue",
                            colorVariant: "accentPrimary",
                            ariaLabel: h
                        })
                    })
                })
            }
            let c = {
                    BuilderAddModuleButtonEducationTooltip: new(o(815048)).O2("BuilderAddModuleButtonEducationTooltip", () => o.e(63538).then(o.bind(o, 203411)))
                },
                p = (0, o(815048)._h)(c.BuilderAddModuleButtonEducationTooltip, e => e.default),
                g = (0, o(109939).YK)({
                    addPageModule: {
                        id: "pageLayout.builder.addModuleToPage.button.ariaLabel",
                        defaultMessage: "Add page module"
                    },
                    addQuestionModuleTooltip: {
                        id: "pageLayout.builder.addModuleToPage.button.addQuestionModuleTooltip",
                        defaultMessage: "Add question"
                    },
                    addModuleToPanelButton: {
                        id: "pageLayout.builder.addModuleToPanel.button.label",
                        defaultMessage: "Add to panel"
                    }
                }),
                m = {
                    style0: {
                        width: o(104509).Ev.default,
                        height: o(104509).Ev.default
                    }
                },
                y = r.forwardRef(function(e, t) {
                    let {
                        area: r
                    } = e, {
                        layoutStore: i
                    } = (0, o(613789).LH)(), n = (0, o(682985).K8)(() => i.getLayoutType(), [i]), s = (0, o(109939).tz)(), d = l(), u = (0, o(960253).I)(() => ({
                        bigRoundButton: { ...d.button,
                            width: 32,
                            height: 32,
                            borderRadius: "100%"
                        },
                        bigRoundButtonHovered: { ...d.buttonHovered
                        },
                        bigRoundButtonPressed: { ...d.buttonPressed
                        }
                    }), [d]), c = (0, o(911859).t)("views_main_tab_modules" === r ? {
                        area: r,
                        viewsMainTabId: e.viewsMainTabId
                    } : {
                        area: r
                    });
                    if ("form_conditional_modules" === r) throw Error("[Forms Conditional Logic Not Implemented] AddPageLayoutModuleButton not implemented for form_conditional_modules yet.");
                    let p = (0, o(682985).K8)(() => {
                        var t;
                        let o = i.getModules();
                        return ("views_main_tab_modules" === r ? (null == (t = o[r]) ? void 0 : t[e.viewsMainTabId]) || [] : o[r] ? ? []).length > 0
                    }, [i, r, e.viewsMainTabId]);
                    return "page_details" !== r || p ? (0, a.jsx)(o(51831).m, {
                        content: () => s.formatMessage(g.addQuestionModuleTooltip),
                        disableTooltip: "form" !== n,
                        placement: "bottom",
                        children: e => (0, a.jsx)(o(374533).A, {
                            style: u.bigRoundButton,
                            hoveredStyle: u.bigRoundButtonHovered,
                            pressedStyle: u.bigRoundButtonPressed,
                            onClick: c,
                            icon: o(581923).plusIcon,
                            iconStyle: m.style0,
                            colorPalette: "blue",
                            colorVariant: "accentPrimary",
                            className: o(828432).kew,
                            ariaLabel: s.formatMessage(g.addPageModule),
                            ref: t,
                            ...e
                        })
                    }) : (0, a.jsx)(o(265779).E, {
                        iconLeading: o(581923).plusIcon,
                        shape: "pill",
                        colorPalette: "blue",
                        size: "xl",
                        onClick: c,
                        ref: t,
                        children: (0, a.jsx)(o(109939).sA, { ...g.addModuleToPanelButton
                        })
                    })
                }),
                f = r.memo(function(e) {
                    var t, i;
                    let {
                        shouldShowTooltip: n
                    } = (0, o(741612).J)(), {
                        area: l
                    } = e, s = n && "page_main" === l, d = n && "form_layout_schema" !== l, u = r.useRef(null), {
                        currentModuleSelection: c,
                        layoutStore: g,
                        setModuleSelection: m,
                        isPropertyTypeSearchInputDirtyStore: f
                    } = (0, o(613789).LH)(), v = (0, o(682985).K8)(() => (null == c ? void 0 : c.type) === "existing_module" ? g.getModuleById(c.moduleId) : void 0, [c, g]), b = (0, o(682985).K8)(() => {
                        var t;
                        if ("form_conditional_modules" === l) throw Error("[Forms Conditional Logic Not Implemented] AddPageLayoutModuleButton not implemented for form_conditional_modules yet.");
                        let o = g.getModules();
                        return ("views_main_tab_modules" === l ? (null == (t = o[l]) ? void 0 : t[e.viewsMainTabId]) || [] : o[l] ? ? []).length > 0
                    }, [g, l, e.viewsMainTabId]), [x, M] = r.useState(!1), _ = r.useCallback(() => {
                        f.state || m(void 0)
                    }, [f, m]);
                    return (null == c ? void 0 : c.type) === "new_module" && c.area === e.area ? (0, a.jsx)(o(369064).N, {
                        onUndo: _,
                        capture: !0,
                        priority: 1,
                        debugName: "AddPageLayoutModuleButton",
                        children: (0, a.jsx)(h, {})
                    }) : (null == v ? void 0 : v.type) === "placeholder" ? null : s || d ? (0, a.jsx)("div", {
                        className: o(394112).hg,
                        children: (0, a.jsxs)(o(4458).fI, {
                            gap: 0,
                            justifyContent: "center",
                            style: null == (i = e.styles) ? void 0 : i.buttonContainer,
                            children: [(0, a.jsx)(o(315384).u, {
                                shape: "page_main" === e.area ? "circle" : "pill",
                                size: "page_main" === e.area || b ? 32 : 34,
                                onDependencyLoaded: () => M(!0),
                                children: (0, a.jsx)(y, {
                                    isEducationCalloutVisible: s,
                                    ...e,
                                    ref: u
                                })
                            }), s && x ? (0, a.jsx)(p, {
                                buttonRef: u
                            }) : void 0]
                        })
                    }) : (0, a.jsx)("div", {
                        className: o(394112).hg,
                        children: (0, a.jsx)(o(4458).fI, {
                            gap: 0,
                            justifyContent: "center",
                            style: null == (t = e.styles) ? void 0 : t.buttonContainer,
                            children: (0, a.jsx)(y, {
                                isEducationCalloutVisible: !1,
                                ref: u,
                                ...e
                            })
                        })
                    })
                }),
                v = {
                    ghostPageModuleContainer: {
                        paddingBottom: 12
                    },
                    ghostPageModule: {
                        width: "100%",
                        height: 160,
                        background: o(632079).Tj.palette.uiBlue["75"],
                        borderRadius: 12,
                        boxShadow: `0px 0px 0px 0px ${o(632079).Tj.blue.border.strong}, inset 0px 0px 0px 1px ${o(632079).Tj.blue.border.strong}`
                    }
                };

            function h() {
                return (0, a.jsx)("div", {
                    style: v.ghostPageModuleContainer,
                    className: o(394112).hg,
                    children: (0, a.jsx)(o(315384).u, {
                        shape: "square",
                        borderRadius: v.ghostPageModule.borderRadius,
                        width: v.ghostPageModule.width,
                        height: v.ghostPageModule.height,
                        children: (0, a.jsx)("div", {
                            style: v.ghostPageModule
                        })
                    })
                })
            }

            function b() {
                let {
                    addModuleHoverMenuStore: e
                } = (0, o(613789).LH)(), t = n(), i = (0, r.useCallback)(r => {
                    let i = o(581771).A.getMembersByDOMOrder({
                            filter: e => "cover" !== e.moduleType && "form_conditional_modules" !== e.area
                        }),
                        n = null;
                    for (let e of i) {
                        let o = e.getNode();
                        if (!o) continue;
                        let i = o.getBoundingClientRect();
                        if (!(r.clientX > i.right) && (!(r.clientX < i.left) || !(i.left - r.clientX > 300)) && (r.clientY <= i.bottom && i.bottom - r.clientY < 12 || r.clientY > i.bottom && r.clientY - i.bottom < 12 + t)) {
                            n = e;
                            break
                        }
                    }
                    if (n) e.setState({
                        isOpen: !0,
                        moduleId: n.moduleId,
                        menuIsOpen: !1
                    });
                    else {
                        let t = e.getState();
                        t.isOpen && !t.menuIsOpen && e.setState({
                            isOpen: !1
                        })
                    }
                }, [e, t]), l = o(381453).nF(i, 30);
                return (0, r.useEffect)(() => (window.addEventListener("mousemove", l), () => {
                    window.removeEventListener("mousemove", l)
                }), [l]), null
            }
            var x = () => o(971162);

            function M(e) {
                let {
                    wrapper: t,
                    viewsModule: i
                } = e, {
                    pageStore: n,
                    moduleStateByIdStore: l
                } = (0, o(613789).bi)(), [s, d] = (0, r.useState)(void 0), {
                    setModuleSelection: u
                } = (0, o(613789).LH)(), c = (0, r.useMemo)(() => new(o(864844)).E, []), p = (0, r.useCallback)(e => {
                    e && c.observe(e)
                }, [c]), g = (0, o(682985).K8)(() => c.rect.state.width, [c]);
                (0, r.useEffect)(() => {
                    s && l.set(i.id, {
                        collectionContextStore: s
                    })
                }, [s, l, i.id]);
                let m = (0, o(682985).K8)(() => {
                    var e;
                    return null == s || null == (e = s.collectionViewStore()) ? void 0 : e.getType()
                }, [s]);
                (0, r.useEffect)(() => {
                    s && "dashboard" === m && s.setIsInDashboardBuildMode(!0)
                }, [s, m]);
                let {
                    collectionViewBlockStore: y,
                    viewsModuleContext: f,
                    isViewsMainModule: v
                } = (0, o(682985).K8)(() => {
                    if (!i) return {
                        collectionViewBlockStore: void 0,
                        viewsModuleContext: void 0,
                        isViewsMainModule: !1
                    };
                    let e = o(970831).B.createChildStore(n, i.collection_view_block_pointer);
                    return {
                        collectionViewBlockStore: e,
                        viewsModuleContext: {
                            location: "layoutBuilder",
                            viewsModule: i,
                            currentPageStore: n,
                            collectionViewBlockStore: e,
                            selectViewsModule: () => {
                                u && u({
                                    type: "existing_module",
                                    moduleId: i.id,
                                    isDragging: !1
                                })
                            }
                        },
                        isViewsMainModule: "viewsMain" === i.type
                    }
                }, [n, i, u]);
                return y && f ? t((0, a.jsx)("div", {
                    ref: p,
                    children: (0, a.jsx)(o(980710).l, {
                        children: (0, a.jsx)(o(754831).tx, {
                            value: {
                                location: "layout_editor",
                                isPreviewing: !0,
                                disableHeaderPointerEvents: !1,
                                disableEditsAndConfiguration: !1,
                                disableContentPointerEvents: !1,
                                disablePageLinks: !0,
                                hideAggregation: !1,
                                hideViewBlockSource: !1,
                                enableHorizontalScroll: !0
                            },
                            children: (0, a.jsx)(o(590285).dN, {
                                store: y,
                                isFullScreen: !1,
                                productUseCase: "page_layout_editor",
                                disabled: !1,
                                disableHoverMenu: !0,
                                headerActionsBehavior: "always_show",
                                headerAllowedActions: j,
                                fullWidth: g,
                                overridePaddingLeft: 0,
                                overridePaddingRight: 0,
                                setCollectionContextStore: d,
                                showOnlyCurrentView: !v,
                                isUnlistedView: !1,
                                viewsModuleContext: f,
                                capabilitiesOverrides: _
                            })
                        })
                    })
                })) : null
            }
            let _ = {
                    disableHeaderPointerEvents: !1,
                    disableContentPointerEvents: !1,
                    disableEditsAndConfiguration: !1,
                    disablePageLinks: !0
                },
                j = ["filter", "sort", "minimize"];
            o(944114), o(737550);
            var I = () => o(372255),
                S = () => o(453042);
            async function w(e) {
                switch (e) {
                    case "property_number":
                    case "property_title":
                    case "property_person":
                    case "property_file":
                    case "property_text":
                    case "property_checkbox":
                    case "property_url":
                    case "property_email":
                    case "property_phone_number":
                    case "property_created_by":
                    case "property_last_edited_by":
                    case "property_button":
                    case "property_select":
                    case "property_multi_select":
                    case "property_status":
                    case "property_date":
                    case "property_created_time":
                    case "property_last_edited_time":
                    case "property_last_visited_time":
                    case "property_relation":
                    case "property_rollup":
                    case "property_formula":
                    case "property_auto_increment_id":
                    case "property_location":
                    case "property_verification":
                    case "property_place":
                        return await A();
                    case "relationsGroup":
                        return await T();
                    case "formSubmit":
                    case "formQuestion":
                    case "formTitle":
                    case "placeholder":
                    case "views":
                    case "transcript":
                    case "row":
                    case "view":
                        return "delete_module";
                    default:
                        (0, o(722371).HB)(e)
                }
            }
            async function T() {
                return await o(640133).f({
                    icon: o(822973).trashSmallIcon,
                    confirmTextStyle: "red",
                    title: (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Remove relations group from layout?",
                        id: "deleteRelationsGroupModuleActions.title"
                    }),
                    confirmText: (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Remove",
                        id: "deleteRelationsGroupModuleActions.confirmText"
                    }),
                    confirmTextPerRadioOption: {
                        delete_property_and_module: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Remove and delete",
                            id: "deleteRelationsGroupModuleActions.confirmTextForDeletePropertyAndModule"
                        })
                    },
                    radioOptions: [{
                        key: "delete_module",
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Remove from layout",
                            id: "deleteRelationsGroupModuleActions.titleForDeleteModuleOption"
                        }),
                        subtitle: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "The relations properties will still be visible in database views and in the page’s property group",
                            id: "deleteRelationsGroupModuleActions.subtitleForDeleteModuleOption"
                        })
                    }, {
                        key: "delete_property_and_module",
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Remove from layout and database",
                            id: "deleteRelationsGroupModuleActions.titleForDeletePropertyAndModuleOption"
                        }),
                        subtitle: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "The relations properties will be removed from both the page layout and the database",
                            id: "deleteRelationsGroupModuleActions.subtitleForDeletePropertyAndModuleOption"
                        })
                    }]
                })
            }
            async function A() {
                return await o(640133).f({
                    icon: o(822973).trashSmallIcon,
                    confirmTextStyle: "red",
                    title: (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Remove property from layout?",
                        id: "deletePropertyActions.title"
                    }),
                    confirmText: (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Remove",
                        id: "deletePropertyActions.confirmText"
                    }),
                    confirmTextPerRadioOption: {
                        delete_property_and_module: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Remove and delete",
                            id: "deletePropertyActions.confirmTextForDeletePropertyAndModule"
                        })
                    },
                    radioOptions: [{
                        key: "delete_module",
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Remove from layout",
                            id: "deletePropertyActions.titleForDeleteModuleOption"
                        }),
                        subtitle: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "The property will still be visible in database views and in the page’s property group",
                            id: "deletePropertyActions.subtitleForDeleteModuleOption"
                        })
                    }, {
                        key: "delete_property_and_module",
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Remove from layout and database",
                            id: "deletePropertyActions.titleForDeletePropertyAndModuleOption"
                        }),
                        subtitle: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "The property will be removed from both the page layout and the database",
                            id: "deletePropertyActions.subtitleForDeletePropertyAndModuleOption"
                        })
                    }]
                })
            }
            var C = () => o(41500),
                k = () => o(547748);

            function P({
                parent: e,
                onSelect: t,
                ...r
            }) {
                let {
                    layoutStore: i
                } = (0, o(613789).LH)(), n = (0, o(682985).K8)(() => i.getModules(), [i]), l = (0, o(682985).K8)(() => !!(0, o(886178).JO)(n, e => "relationsGroup" === e.type), [n]), s = (0, a.jsx)(o(109939).sA, {
                    id: "AdvancedModuleMenuItem.originButtonTitle",
                    defaultMessage: "Advanced"
                }), d = l ? (0, a.jsx)(o(109939).sA, {
                    id: "AdvancedModuleMenuItem.buttons.moveToRelationsGroupModule",
                    defaultMessage: "Add to relations group"
                }) : (0, a.jsx)(o(109939).sA, {
                    id: "AdvancedModuleMenuItem.buttons.convertToRelationsGroupModule",
                    defaultMessage: "Convert to relations group"
                }), u = {
                    key: "moveOrConvertToRelationsGroup",
                    render: (e, t) => (0, a.jsx)(o(95582).A, { ...e,
                        icon: (0, a.jsx)(o(16275).I, {
                            icon: o(684668).arrowDiagonalUpRightIcon
                        }),
                        title: d,
                        caption: (0, a.jsx)(o(109939).sA, {
                            id: "AdvancedModuleMenuItem.moveOrConvertToRelationsGroup.caption",
                            defaultMessage: "Supports minimal or responsive page sections"
                        })
                    }),
                    action: () => t()
                };
                return (0, a.jsx)(o(816231).A, { ...r,
                    onFocus: e.onFocus,
                    renderExtension: t => {
                        let r;
                        return r = o(986939).A.isMobile ? {
                            menuType: o(649476).gu.ActionSheet
                        } : {
                            menuType: o(649476).gu.Popup
                        }, (0, a.jsx)(o(747369).A, { ...r,
                            ...t,
                            children: (0, a.jsx)(o(558045).A, {
                                type: o(558045).O.Vertical,
                                initialFocus: 0,
                                sections: [{
                                    key: "sections",
                                    items: [u]
                                }],
                                onAccept: e.onAccept
                            })
                        })
                    },
                    children: (e, t) => (0, a.jsx)(o(95582).A, { ...e,
                        ref: t,
                        title: s,
                        icon: (0, a.jsx)(o(16275).I, {
                            icon: o(829968).gearIcon
                        })
                    })
                })
            }
            var F = () => o(255155);
            let B = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M10 6.875c.345 0 .625.28.625.625v1.875H12.5a.625.625 0 1 1 0 1.25h-1.875V12.5a.625.625 0 1 1-1.25 0v-1.875H7.5a.625.625 0 1 1 0-1.25h1.875V7.5c0-.345.28-.625.625-.625"
                        }), (0, a.jsx)("path", {
                            d: "M15.5 4.125c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125h-11a2.125 2.125 0 0 1-2.125-2.125v-7.5c0-1.174.951-2.125 2.125-2.125zm-11 1.25a.875.875 0 0 0-.875.875v7.5c0 .483.392.875.875.875h11a.875.875 0 0 0 .875-.875v-7.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                D = (0, o(104509).wt)("rectangleWidePlus", B, "default"),
                E = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                L = r.memo(function({
                    propertyGroups: e,
                    propertyIds: t,
                    parent: i,
                    onSelectSectionMove: n,
                    ...l
                }) {
                    let s = (0, o(533992).v3)(),
                        d = (0, o(713311).ET)(),
                        u = (0, r.useCallback)(r => {
                            let i = d.collectionStore(),
                                l = e;
                            for (let e of t) l = (0, F().lT)({
                                propertyGroups: l,
                                propertyId: e,
                                destinationGroupId: r.id
                            });
                            if (i) {
                                let e = i.pointer.spaceId;
                                (0, o(377796).createAndCommit)({
                                    environment: s,
                                    perform(e) {
                                        (0, o(838141).Yf)({
                                            collectionStore: i,
                                            newGroups: l,
                                            transaction: e
                                        })
                                    },
                                    canUndo: !0,
                                    cellTarget: e ? {
                                        spaceWithId: e
                                    } : void 0,
                                    userAction: "MoveToPropertyGroupMenuItem.handlePropertyGroupClick"
                                })
                            }
                            n()
                        }, [d, s, n, e, t]),
                        c = (0, o(682985).K8)(() => e.map(e => ({
                            key: e.id,
                            render: (t, r) => (0, a.jsx)(o(95582).A, { ...t,
                                title: e.title
                            }),
                            action: () => u(e)
                        })), [u, e]),
                        p = (0, a.jsx)(o(109939).sA, {
                            id: "ModuleActionMenu.buttons.moveToPropertiesGroupButton",
                            defaultMessage: "Add to property group"
                        });
                    return e.length <= 1 ? (0, a.jsx)(o(95582).A, { ...l,
                        icon: (0, a.jsx)(o(16275).I, {
                            icon: D
                        }),
                        title: p
                    }) : (0, a.jsx)(o(816231).A, { ...l,
                        onFocus: i.onFocus,
                        renderExtension: e => {
                            let t;
                            return t = o(986939).A.isMobile ? {
                                menuType: o(649476).gu.ActionSheet
                            } : {
                                menuType: o(649476).gu.Popup,
                                width: 200
                            }, (0, a.jsx)(o(747369).A, { ...t,
                                ...e,
                                children: (0, a.jsx)(o(558045).A, {
                                    type: o(558045).O.Vertical,
                                    initialFocus: 0,
                                    sections: [{
                                        key: "sections",
                                        render: e => (0, a.jsx)(o(844565).A, { ...e,
                                            style: E,
                                            title: (0, a.jsx)(o(109939).sA, {
                                                id: "moveToPropertyGroupMenuItem.sections",
                                                defaultMessage: "Sections"
                                            })
                                        }),
                                        items: c
                                    }],
                                    onAccept: i.onAccept
                                })
                            })
                        },
                        children: (e, t) => (0, a.jsx)(o(95582).A, { ...e,
                            ref: t,
                            title: p,
                            icon: (0, a.jsx)(o(16275).I, {
                                icon: D
                            })
                        })
                    })
                }),
                R = r.memo(function(e) {
                    let {
                        layoutType: t,
                        module: r,
                        isModuleHoveredOrSelected: i
                    } = e;
                    switch (t) {
                        case "form":
                            if ("formQuestion" === r.type) return (0, a.jsx)(H, {
                                moduleId: r.id,
                                isModuleHoveredOrSelected: i
                            });
                            break;
                        case "page_in_collection":
                        case void 0:
                            return (0, a.jsx)(Q, {
                                module: r
                            });
                        default:
                            (0, o(722371).HB)(t)
                    }
                    return null
                }),
                O = {
                    position: "absolute",
                    top: 10,
                    insetInlineEnd: 10,
                    zIndex: 1e3
                };

            function H({
                moduleId: e,
                isModuleHoveredOrSelected: t
            }) {
                let {
                    canEditLayout: r
                } = (0, o(613789).LH)();
                return r ? (0, a.jsx)("div", {
                    style: O,
                    children: (0, a.jsx)(G, {
                        moduleId: e,
                        isModuleHoveredOrSelected: t
                    })
                }) : null
            }
            let K = {
                position: "absolute",
                top: 4,
                insetInlineEnd: 4,
                zIndex: 1e3
            };

            function Q({
                module: e
            }) {
                let {
                    canEditLayout: t
                } = (0, o(613789).LH)(), n = function(e) {
                    let {
                        layoutModule: t
                    } = e, {
                        sessionId: n,
                        layoutStore: l,
                        setModuleSelection: s
                    } = (0, o(613789).LH)(), d = (0, o(533992).v3)(), u = (0, o(713311).ET)(), c = (0, o(682985).K8)(() => u.collectionStore(), [u]), {
                        collectionSchema: p,
                        collectionFormat: g,
                        propertyGroups: m
                    } = (0, o(682985).K8)(() => ({
                        collectionSchema: null == c ? void 0 : c.getSchema(),
                        collectionFormat: null == c ? void 0 : c.getFormat(),
                        propertyGroups: (null == c ? void 0 : c.getNormalizedPropertyGroups()) ? ? []
                    }), [c]), y = (0, r.useMemo)(() => g && p ? (0, o(824207).T)({
                        format: g,
                        schema: p,
                        visibilityLevels: ["inline", "minimal"]
                    }).map(e => e.section) : [], [g, p]), {
                        layoutType: f,
                        isTabbedLayout: v,
                        viewsMainTabModuleKey: h,
                        currentModulePosition: b,
                        modulesSplitByMoveable: M
                    } = (0, o(682985).K8)(() => {
                        var e, r;
                        let i = l.getModules(),
                            n = (0, o(886178).JO)(i, e => e.id === t.id),
                            a = null == n ? void 0 : n.area;
                        if ("form_conditional_modules" === a) throw Error("[Forms Conditional Logic Not Implemented] usePageLayoutModuleActionMenuListItems not implemented for form_conditional_modules");
                        let s = a && ("views_main_tab_modules" === a ? null == i || null == (e = i[a]) ? void 0 : e[n.viewId] : null == i ? void 0 : i[a]),
                            d = a && s && (0, o(168908).jS)(a, s),
                            u = null == (r = function(e) {
                                if (e.views_main_tab_modules) return (0, o(722371).objectKeys)(e.views_main_tab_modules)
                            }(i)) ? void 0 : r[0];
                        return {
                            layoutType: l.getLayoutType(),
                            isTabbedLayout: l.isTabbedPageLayout(),
                            viewsMainTabModuleKey: u,
                            currentModulePosition: n,
                            modulesSplitByMoveable: d
                        }
                    }, [t.id, l]), _ = (0, r.useCallback)(({
                        destinationModuleId: e
                    }) => {
                        f && ((0, o(294730).Hc)(f) ? s(void 0) : s({
                            type: "existing_module",
                            moduleId: e,
                            isDragging: !1,
                            draggingModuleInitialArea: void 0,
                            draggingModuleFinalArea: void 0
                        }), (0, o(294730).U2)(f) && (0, o(481902).z)({
                            layoutStore: l,
                            moduleId: e,
                            environment: d
                        }))
                    }, [l, f, s, d]), j = (0, r.useCallback)(({
                        moduleGroup: e,
                        indexOfStartOfGroup: r
                    }) => {
                        if (!M || e.length <= 1 || !(null != b && b.area)) return [];
                        let i = e.findIndex(e => e.id === t.id),
                            s = -1 !== i,
                            u = i === e.length - 1,
                            c = r + i,
                            p = [];
                        return s && 0 !== i && p.push({
                            key: "move-up",
                            render: e => (0, a.jsx)(o(95582).A, { ...e,
                                title: (0, a.jsx)(o(109939).sA, {
                                    id: "ModuleActionMenu.buttons.moveUpButton",
                                    defaultMessage: "Move up"
                                }),
                                icon: (0, a.jsx)(o(16275).I, {
                                    icon: o(358839).arrowStraightUpIcon
                                })
                            }),
                            action: () => {
                                (0, o(18028).E)({
                                    environment: d,
                                    layoutStore: l,
                                    position: {
                                        type: "absolute",
                                        index: c - 1,
                                        ...(null == b ? void 0 : b.area) === "views_main_tab_modules" ? {
                                            area: "views_main_tab_modules",
                                            viewId: b.viewId
                                        } : {
                                            area: b.area
                                        }
                                    },
                                    moduleId: t.id,
                                    sessionId: n
                                }), _({
                                    destinationModuleId: t.id
                                })
                            }
                        }), s && !u && p.push({
                            key: "move-down",
                            render: e => (0, a.jsx)(o(95582).A, { ...e,
                                title: (0, a.jsx)(o(109939).sA, {
                                    id: "ModuleActionMenu.buttons.moveDownButton",
                                    defaultMessage: "Move down"
                                }),
                                icon: (0, a.jsx)(o(16275).I, {
                                    icon: o(356938).arrowStraightDownIcon
                                })
                            }),
                            action: () => {
                                (0, o(18028).E)({
                                    environment: d,
                                    layoutStore: l,
                                    position: {
                                        type: "absolute",
                                        index: c + 1,
                                        ...(null == b ? void 0 : b.area) === "views_main_tab_modules" ? {
                                            area: "views_main_tab_modules",
                                            viewId: b.viewId
                                        } : {
                                            area: b.area
                                        }
                                    },
                                    moduleId: t.id,
                                    sessionId: n
                                }), _({
                                    destinationModuleId: t.id
                                })
                            }
                        }), p
                    }, [b, d, t.id, l, M, _, n]);
                    return (0, r.useMemo)(() => {
                        let e = [],
                            r = (0, o(398551).p)(t, "page_details"),
                            f = (null == M ? void 0 : M.nonMoveableHeaderModules) ? ? [],
                            T = M && "moveableCenterModules" in M ? M.moveableCenterModules : [],
                            A = M && "moveableFooterModules" in M ? i(M.moveableFooterModules, g) : [],
                            F = T.some(e => e.id === t.id),
                            B = j({
                                moduleGroup: F ? T : A,
                                indexOfStartOfGroup: F ? f.length : f.length + T.length
                            });
                        if (e.push(...B), ((null == b ? void 0 : b.area) === "page_main" || (null == b ? void 0 : b.area) === "views_main_tab_modules") && r ? e.push({
                                key: "moveToSidebar",
                                render: e => (0, a.jsx)(o(95582).A, { ...e,
                                    title: (0, a.jsx)(o(109939).sA, {
                                        id: "ModuleActionMenu.buttons.moveToInfoPanel",
                                        defaultMessage: "Move to panel"
                                    }),
                                    icon: (0, a.jsx)(o(16275).I, {
                                        icon: o(988824).arrowStraightRightIcon
                                    })
                                }),
                                action: () => {
                                    (0, o(18028).E)({
                                        environment: d,
                                        position: {
                                            type: "area_relative",
                                            area: "page_details",
                                            location: "end_moveable"
                                        },
                                        moduleId: t.id,
                                        layoutStore: l,
                                        sessionId: n
                                    }), _({
                                        destinationModuleId: t.id
                                    })
                                }
                            }) : (null == b ? void 0 : b.area) === "page_details" && e.push({
                                key: "moveToMainPage",
                                render: e => (0, a.jsx)(o(95582).A, { ...e,
                                    title: (0, a.jsx)(o(109939).sA, {
                                        id: "ModuleActionMenu.buttons.moveToPage",
                                        defaultMessage: "Move to page"
                                    }),
                                    icon: (0, a.jsx)(o(16275).I, {
                                        icon: o(128743).arrowStraightLeftIcon
                                    })
                                }),
                                action: () => {
                                    v && h ? (0, o(18028).E)({
                                        environment: d,
                                        position: {
                                            type: "area_relative",
                                            area: "views_main_tab_modules",
                                            viewId: h,
                                            location: "end_moveable"
                                        },
                                        moduleId: t.id,
                                        layoutStore: l,
                                        sessionId: n
                                    }) : (0, o(18028).E)({
                                        environment: d,
                                        position: {
                                            type: "area_relative",
                                            area: "page_main",
                                            location: "end_moveable"
                                        },
                                        moduleId: t.id,
                                        layoutStore: l,
                                        sessionId: n
                                    }), _({
                                        destinationModuleId: t.id
                                    })
                                }
                            }), (0, o(911518).Fe)(t) && (0, o(911518).wm)(t)) {
                            let r = [];
                            (0, o(11287).gx)(t) ? r = [t.propertyId]: (0, o(11287).V_)(t) ? r = y : (0, o(722371).HB)(t);
                            let i = () => {
                                var e;
                                let t = l.getSpaceId();
                                (0, o(377796).createAndCommitOrAppend)({
                                    environment: d,
                                    transaction: void 0,
                                    cellTarget: t ? {
                                        spaceWithId: t
                                    } : void 0,
                                    canUndo: !0,
                                    userAction: "ModuleActionsMenu.moveToPropertyGroup",
                                    perform(e) {
                                        for (let t of r)(0, C().HD)({
                                            environment: d,
                                            transaction: e,
                                            layoutStore: l,
                                            property: t
                                        })
                                    }
                                });
                                let i = null == (e = l.firstModuleOfType("properties")) ? void 0 : e.id;
                                i ? _({
                                    destinationModuleId: i
                                }) : s(void 0)
                            };
                            e.push({
                                key: "moveToPropertiesGroupModule",
                                render: (e, t) => (0, a.jsx)(L, { ...e,
                                    parent: t,
                                    propertyIds: r,
                                    onSelectSectionMove: i,
                                    propertyGroups: m
                                }),
                                action: i
                            })
                        }
                        if ((0, o(11287).Yp)(t)) {
                            let r = () => {
                                var e;
                                let r = l.getSpaceId();
                                (0, o(377796).createAndCommitOrAppend)({
                                    environment: d,
                                    transaction: void 0,
                                    cellTarget: r ? {
                                        spaceWithId: r
                                    } : void 0,
                                    canUndo: !0,
                                    userAction: "ModuleActionsMenu.moveToRelationsGroupModule",
                                    perform(e) {
                                        let r = l.getCollectionModel();
                                        if (!r) return;
                                        let i = o(356912).m.createChildStore(l, r.pointer);
                                        (0, C().HD)({
                                            environment: d,
                                            transaction: e,
                                            layoutStore: l,
                                            property: t.propertyId
                                        }), (0, o(567316).Z)({
                                            property: t.propertyId,
                                            visibility: "inline",
                                            schema: r.getSchema(),
                                            format: r.getFormat(),
                                            collectionStore: i,
                                            environment: d,
                                            transaction: e
                                        })
                                    }
                                });
                                let i = null == (e = l.firstModuleOfType("relationsGroup")) ? void 0 : e.id;
                                i ? _({
                                    destinationModuleId: i
                                }) : s(void 0)
                            };
                            e.push({
                                key: "moveToRelationsGroup",
                                render: (e, t) => (0, a.jsx)(P, {
                                    parent: t,
                                    onSelect: r,
                                    ...e
                                }),
                                action: r
                            })
                        }
                        if ((0, o(911518).Fe)(t)) {
                            let r = async () => {
                                var e, r;
                                if (!(null != b && b.area) || !p) return;
                                let i = await w(t.type);
                                if (i) switch (i) {
                                    case "delete_module":
                                        {
                                            let r = l.getSpaceId();
                                            (0, o(377796).createAndCommitOrAppend)({
                                                environment: d,
                                                transaction: void 0,
                                                cellTarget: r ? {
                                                    spaceWithId: r
                                                } : void 0,
                                                canUndo: !0,
                                                perform(e) {
                                                    let r = l.getCollectionModel();
                                                    if ((0, o(11287).gx)(t))(0, C().HD)({
                                                        environment: d,
                                                        transaction: e,
                                                        layoutStore: l,
                                                        property: t.propertyId
                                                    }), c && r && S().D7({
                                                        transaction: e,
                                                        property: t.propertyId,
                                                        visibility: "show",
                                                        format: r.getFormat(),
                                                        store: c
                                                    });
                                                    else if ((0, o(11287).V_)(t))
                                                        for (let t of y)(0, C().HD)({
                                                            environment: d,
                                                            transaction: e,
                                                            layoutStore: l,
                                                            property: t
                                                        }), c && r && S().D7({
                                                            transaction: e,
                                                            property: t,
                                                            visibility: "show",
                                                            format: r.getFormat(),
                                                            store: c
                                                        });
                                                    else(0, o(264850).U)({
                                                        environment: d,
                                                        layoutStore: l,
                                                        position: { ...(null == b ? void 0 : b.area) === "views_main_tab_modules" ? {
                                                                area: "views_main_tab_modules",
                                                                viewId: b.viewId
                                                            } : {
                                                                area: b.area
                                                            },
                                                            moduleId: t.id
                                                        },
                                                        sessionId: n
                                                    })
                                                },
                                                userAction: "ModuleActionsMenu.removePropertyFromLayout.deleteModule"
                                            });
                                            let i = null == (e = l.firstModuleOfType("properties")) ? void 0 : e.id;i && _({
                                                destinationModuleId: i
                                            });
                                            return
                                        }
                                    case "delete_property_and_module":
                                        let a = [];
                                        if ((0, o(11287).gx)(t) ? a = [t.propertyId] : (0, o(11287).V_)(t) && (a = y || []), a.length)
                                            for (let e of a)(0, I().B)({
                                                collectionContextStore: u,
                                                environment: d,
                                                property: e,
                                                schema: p,
                                                from: "table_column"
                                            }), (0, k().PS)({
                                                environment: d,
                                                module: t,
                                                sessionId: n,
                                                collectionId: null == (r = l.getCollectionModel()) ? void 0 : r.id,
                                                layoutId: l.id,
                                                context: (0, x().We)(null == b ? void 0 : b.area),
                                                area: null == b ? void 0 : b.area,
                                                depth: 0
                                            });
                                        else(0, o(264850).U)({
                                            environment: d,
                                            layoutStore: l,
                                            sessionId: n,
                                            position: { ...(null == b ? void 0 : b.area) === "views_main_tab_modules" ? {
                                                    area: "views_main_tab_modules",
                                                    viewId: b.viewId,
                                                    moduleId: t.id
                                                } : {
                                                    area: b.area,
                                                    moduleId: t.id
                                                }
                                            }
                                        });
                                        s(void 0);
                                        return;
                                    default:
                                        (0, o(722371).HB)(i)
                                }
                            };
                            e.push({
                                key: "removeModule",
                                render: e => (0, o(11287).gx)(t) ? (0, a.jsx)(o(915032).$, { ...e,
                                    getTitleOverride: ({
                                        isRequiredProperty: e
                                    }) => e ? void 0 : (0, a.jsx)(o(109939).sA, {
                                        id: "ModuleActionMenu.buttons.removeFromPropertyModule",
                                        defaultMessage: "Remove from layout"
                                    }),
                                    collectionContextStore: u,
                                    property: t.propertyId
                                }) : (0, a.jsx)(o(95582).A, { ...e,
                                    title: (0, a.jsx)(o(109939).sA, {
                                        id: "ModuleActionMenu.buttons.removeFromModule",
                                        defaultMessage: "Remove from layout"
                                    }),
                                    isRedOnHover: !0,
                                    icon: (0, a.jsx)(o(16275).I, {
                                        icon: o(968411).trashIcon
                                    })
                                }),
                                action: r
                            })
                        }
                        return "discussions" === t.type && c && g && p && e.push({
                            key: "hidePageDiscussions",
                            render: e => (0, a.jsx)(o(95582).A, { ...e,
                                title: (0, a.jsx)(o(109939).sA, {
                                    id: "ModuleActionMenu.buttons.hidePageDiscussions",
                                    defaultMessage: "Hide page discussions"
                                }),
                                icon: (0, a.jsx)(o(16275).I, {
                                    icon: o(319681).e
                                })
                            }),
                            action: () => {
                                let e = (0, o(944940).L)(g, p, void 0, o(565546).jf.Collection);
                                S().OD({
                                    environment: d,
                                    pageSection: "comments",
                                    visibility: "section_hide",
                                    store: c,
                                    format: e
                                })
                            }
                        }), e
                    }, [t, M, b, d, l, n, _, v, h, y, s, m, p, u, j, g, c])
                }({
                    layoutModule: e
                });
                return t && 0 !== n.length ? (0, a.jsx)("div", {
                    style: K,
                    children: (0, a.jsx)(z, {
                        moduleId: e.id,
                        menuListItems: n
                    })
                }) : null
            }
            let V = {
                iconStyle: {
                    width: o(104509).Ev.sm,
                    height: o(104509).Ev.sm,
                    fill: o(632079).Tj.blue.icon.accentPrimary
                },
                style0: {
                    cursor: "pointer"
                }
            };

            function G({
                moduleId: e,
                isModuleHoveredOrSelected: t
            }) {
                let {
                    layoutStore: r,
                    setModuleSelection: i
                } = (0, o(613789).LH)(), n = (0, o(682985).K8)(() => r.getModuleById(e), [r, e]), s = (0, o(682985).K8)(() => {
                    if (n && "formQuestion" === n.type) return o(680802).c.createChildStore(r, {
                        table: "form_question",
                        id: n.formQuestionId,
                        spaceId: r.getSpaceId() ? ? ""
                    })
                }, [r, n]), d = l(), u = (0, o(109939).tz)();
                if (!n || !s) return null;
                let c = u.formatMessage({
                    id: "FormLayoutModuleActionMenu.editQuestion.tooltip",
                    defaultMessage: "Edit question"
                });
                return (0, a.jsx)("div", {
                    style: {
                        opacity: +!!t,
                        pointerEvents: t ? "auto" : "none",
                        transition: "opacity 200ms ease",
                        borderRadius: 4,
                        height: 24
                    },
                    children: (0, a.jsx)(o(51831).m, {
                        content: () => c,
                        children: t => (0, a.jsx)(o(374533).A, { ...t,
                            icon: o(361226).ellipsisSmallIcon,
                            hasBackground: !0,
                            style: { ...d.button,
                                ...V.style0
                            },
                            iconStyle: V.iconStyle,
                            pressedStyle: d.buttonPressed,
                            hoveredStyle: d.buttonHovered,
                            ariaLabel: c,
                            onMouseDown: e => {
                                (0, o(705660).SQ)(e, o(705660).y$.EditorMouseDown)
                            },
                            onClick: () => i({
                                type: "existing_module",
                                moduleId: e,
                                isDragging: !1,
                                draggingModuleInitialArea: void 0,
                                draggingModuleFinalArea: void 0
                            })
                        })
                    })
                })
            }

            function z({
                moduleId: e,
                menuListItems: t
            }) {
                let i = (0, o(109939).tz)(),
                    n = (0, r.useMemo)(() => [{
                        type: "actionGroup",
                        label: i.formatMessage({
                            id: "ModuleActionMenu.openButton",
                            defaultMessage: "Action menu for module"
                        }),
                        icon: o(361226).ellipsisSmallIcon,
                        menuListItems: t
                    }], [i, t]);
                return (0, a.jsx)(q, {
                    moduleId: e,
                    actionMenuItems: n,
                    isModuleHoveredOrSelected: !0,
                    boxShadow: !1
                })
            }

            function N({
                isFirst: e,
                isLast: t
            }) {
                return {
                    borderStartStartRadius: 4 * !!e,
                    borderEndStartRadius: 4 * !!e,
                    borderStartEndRadius: 4 * !!t,
                    borderEndEndRadius: 4 * !!t,
                    borderInlineEnd: "solid rgba(15, 15, 15, 0.1)",
                    borderInlineEndWidth: +!t
                }
            }

            function q({
                moduleId: e,
                actionMenuItems: t,
                isModuleHoveredOrSelected: o,
                boxShadow: i
            }) {
                let [n, l] = (0, r.useState)(!1), s = (0, r.useCallback)(e => {
                    l(e)
                }, []);
                return (0, a.jsx)("div", {
                    style: {
                        opacity: o || n ? 1 : 0,
                        pointerEvents: o || n ? "auto" : "none",
                        transition: "opacity 200ms ease",
                        borderRadius: 4,
                        height: 24,
                        boxShadow: i ? "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px" : void 0
                    },
                    children: t.map((e, o) => {
                        let r = 0 === o,
                            i = t.length - 1 === o;
                        switch (e.type) {
                            case "action":
                                return (0, a.jsx)(W, {
                                    item: e,
                                    isFirst: r,
                                    isLast: i
                                }, o);
                            case "actionGroup":
                                return (0, a.jsx)(U, {
                                    itemGroup: e,
                                    isFirst: r,
                                    isLast: i,
                                    isOpen: n,
                                    setIsOpen: s
                                }, o)
                        }
                    })
                })
            }

            function W({
                item: e,
                isFirst: t,
                isLast: r
            }) {
                let {
                    layoutStore: i
                } = (0, o(613789).LH)(), n = (0, o(682985).K8)(() => i.getLayoutType(), [i]), l = (0, o(960253).I)(() => ({
                    iconButton: { ...N({
                            isFirst: t,
                            isLast: r
                        })
                    },
                    icon: { ..."form" === n ? {
                            fill: o(632079).Tj.icon.secondary
                        } : {}
                    }
                }), [t, r, n]);
                return (0, a.jsx)(o(51831).m, {
                    content: () => e.tooltipLabel ? ? null,
                    disableTooltip: !e.tooltipLabel,
                    children: t => (0, a.jsx)(o(374533).A, { ...t,
                        icon: e.icon,
                        hasBackground: !0,
                        ariaLabel: e.label,
                        style: l.iconButton,
                        iconStyle: l.icon,
                        onMouseDown: e => {
                            (0, o(705660).SQ)(e, o(705660).y$.EditorMouseDown)
                        },
                        onClick: e.action
                    })
                })
            }
            let $ = {
                paddingTop: 4,
                paddingBottom: 4
            };

            function U({
                itemGroup: e,
                isFirst: t,
                isLast: r,
                isOpen: i,
                setIsOpen: n
            }) {
                let {
                    layoutStore: l
                } = (0, o(613789).LH)(), s = (0, o(682985).K8)(() => l.getLayoutType(), [l]), d = (0, o(960253).I)(() => ({
                    iconButton: { ...N({
                            isFirst: t,
                            isLast: r
                        })
                    },
                    icon: {
                        width: o(104509).Ev.sm,
                        height: o(104509).Ev.sm,
                        ..."form" === s ? {
                            fill: o(632079).Tj.icon.secondary
                        } : {
                            fill: o(632079).Tj.blue.text.accentPrimary
                        }
                    },
                    iconButtonHovered: { ..."form" === s ? void 0 : {
                            background: o(632079).Tj.blue.background.secondaryTranslucent
                        }
                    }
                }), [t, r, s]);
                return (0, a.jsx)(o(656252).A, {
                    alignmentToOrigin: "end",
                    popupType: o(423291).n.Popup,
                    onClose: () => n(!1),
                    onClick: () => n(!0),
                    open: i,
                    content: () => (0, a.jsx)(o(747369).A, {
                        menuType: o(649476).gu.Popup,
                        onClick: () => n(!1),
                        children: (0, a.jsx)(o(558045).A, {
                            initialFocus: void 0,
                            sections: [{
                                key: 0,
                                render: e => (0, a.jsx)(o(844565).A, { ...e,
                                    desktopStyle: $
                                }),
                                items: e.menuListItems
                            }],
                            type: o(558045).O.Vertical
                        })
                    }),
                    children: t => (0, a.jsx)(o(374533).A, { ...t,
                        icon: e.icon,
                        hasBackground: "form" === s,
                        ariaLabel: e.label,
                        style: d.iconButton,
                        iconStyle: d.icon,
                        onMouseDown: e => {
                            (0, o(705660).SQ)(e, o(705660).y$.EditorMouseDown)
                        },
                        hoveredStyle: d.iconButtonHovered,
                        pressedStyle: d.iconButtonHovered
                    })
                })
            }
            let Y = (0, r.createContext)(void 0);
            Y.displayName = "PageEditorModuleContext";
            let J = Y.Provider,
                X = {
                    noDragHandle: {},
                    label: {
                        fontSize: 14,
                        fontWeight: o(699422).Wy.medium,
                        color: o(632079).Tj.blue.text.accentPrimary,
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        paddingInlineEnd: 24
                    },
                    previewContainer: {
                        padding: 12
                    },
                    mouseEventCover: {
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        zIndex: 999
                    },
                    overflowContainer: {
                        borderRadius: 8,
                        height: `calc(100% - ${2*o(418676).MH}px)`,
                        width: `calc(100% - ${2*o(418676).MH}px)`,
                        insetInlineStart: `${o(418676).MH}px`,
                        overflow: "hidden",
                        position: "relative"
                    }
                };

            function Z(e) {
                let {
                    isSelected: t,
                    isDragging: i,
                    isConfigurable: l,
                    isDraggable: s
                } = function() {
                    let e = (0, r.useContext)(Y);
                    if (!e) throw Error("PageEditorModuleContext not found");
                    return e
                }(), {
                    style: d,
                    children: u,
                    module: c,
                    area: p,
                    moduleMaxHeight: g
                } = e, m = "placeholder" === c.type, {
                    setModuleSelection: y,
                    layoutStore: f,
                    currentModuleSelection: v
                } = (0, o(613789).LH)(), [h, b] = (0, o(848135).B)(), x = (0, r.useRef)(null), M = (0, o(421573).A)(h, x), _ = (0, o(682985).K8)(() => {
                    var e;
                    return null == (e = f.getModel()) ? void 0 : e.getLayoutType()
                }, [f]), j = (0, o(682985).K8)(() => (0, o(447036).cq)(f), [f]), I = n();
                (0, o(336494).b)(o(581771).A, () => ({
                    layoutStore: f,
                    moduleId: c.id,
                    moduleType: c.type,
                    area: p,
                    getNode: () => x.current
                }), [f, c, x, p]);
                let S = {
                        normalizedTitleWithIcon: !0,
                        properties: !0,
                        property_number: !0,
                        property_title: !0,
                        property_person: !0,
                        property_file: !0,
                        property_text: !0,
                        property_checkbox: !0,
                        property_url: !0,
                        property_email: !0,
                        property_phone_number: !0,
                        property_created_by: !0,
                        property_last_edited_by: !0,
                        property_button: !0,
                        property_select: !0,
                        property_multi_select: !0,
                        property_status: !0,
                        property_date: !0,
                        property_created_time: !0,
                        property_last_edited_time: !0,
                        property_last_visited_time: !0,
                        property_relation: !0,
                        property_rollup: !0,
                        property_formula: !0,
                        property_auto_increment_id: !0,
                        property_location: !0,
                        property_verification: !0,
                        property_place: !0,
                        views: !0,
                        viewsMain: !0,
                        view: !0,
                        row: !0,
                        relationsGroup: !0,
                        formQuestion: !0,
                        placeholder: !0,
                        deleted_property: !0,
                        cover: !1,
                        inlinePageSections: !0,
                        expandedBacklinks: !0,
                        discussions: !0,
                        bottomControls: !0,
                        editor: !0,
                        transcript: !0,
                        formTitle: !1,
                        formSubmit: !0,
                        recentActivity: !0,
                        collaborators: !0,
                        teamspaces: !0,
                        theirPages: !0
                    }[c.type],
                    w = (0, r.useCallback)(e => {
                        if ("viewsMain" === c.type || !S) return {};
                        let r = "form" === _ && m,
                            n = {
                                margin: 0,
                                borderRadius: "form" === _ ? 12 : 8,
                                ...!s && !r ? {
                                    cursor: "pointer",
                                    margin: "0 0 12px 0"
                                } : {},
                                padding: 12 * ("form" === _ && !m),
                                transition: "box-shadow 0.3s"
                            };
                        if (i && !m) return { ...n,
                            ...(0, o(418676).nl)({
                                width: 3,
                                color: o(632079).Tj.blue.border.accentPrimary
                            }),
                            transform: "scale(1.03)",
                            transition: "transform 0.8s cubic-bezier(0.5, -1.5, 0.5, 2)"
                        };
                        if (t && !m) return { ...n,
                            ...(0, o(418676).nl)({
                                width: 3,
                                color: o(632079).Tj.blue.border.accentPrimary
                            })
                        };
                        let l = null == v ? void 0 : v.isDragging;
                        return b && !l ? { ...n,
                            ...(0, o(418676).nl)({
                                width: 3,
                                color: "light" === e ? o(632079).Tj.blue.border.strong : o(632079).Tj.blue.text.tertiary
                            })
                        } : { ...n,
                            ...(0, o(418676).nl)({
                                width: 1,
                                color: "light" === e ? o(632079).Tj.blue.border.strong : o(632079).Tj.blue.text.tertiary
                            })
                        }
                    }, [null == v ? void 0 : v.isDragging, s, i, b, m, t, _, c.type, S]),
                    T = (0, o(960253).e)(),
                    A = (0, o(960253).I)(() => {
                        let e = w(T),
                            t = "form" !== _ ? 10 : "cover" === c.type ? 0 : "formTitle" === c.type ? I : 10,
                            r = m ? o(632079).Tj.palette.uiBlue["75"] : "form" === _ && j ? o(632079).Tj.background.elevated : o(632079).Tj.background.primary,
                            i = "light" === T ? o(632079).Tj.palette.gray[0] : o(632079).Tj.palette.gray[50];
                        return {
                            labelContainer: {
                                height: 32,
                                backgroundColor: "light" === T ? o(632079).Tj.palette.uiBlue[100] : o(632079).Tj.palette.uiBlue[200],
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                                padding: 6
                            },
                            container: {
                                background: r,
                                width: "100%",
                                position: "relative",
                                marginBottom: t,
                                ...e,
                                overflow: "formTitle" !== c.type && "viewsMain" !== c.type ? "hidden" : void 0,
                                ...d
                            },
                            contentFadedOverlay: {
                                borderRadius: 8,
                                position: "absolute",
                                background: `linear-gradient(to bottom, transparent 0%, ${i} 100%)`,
                                width: "100%",
                                height: g ? `${.4*g}px` : void 0,
                                top: g ? `${.6*g}px` : void 0
                            }
                        }
                    }, [w, c.type, d, _, I, m, j, g, T]),
                    C = "form" !== _ && "viewsMain" !== c.type;
                (0, o(559244).H)(c);
                let k = b || t,
                    P = "editor" === c.type,
                    F = "discussions" === c.type;
                return (0, a.jsxs)("div", {
                    style: A.container,
                    ref: M,
                    onClick: e => {
                        l && !s && "viewsMain" !== c.type && y({
                            type: "existing_module",
                            moduleId: c.id,
                            isDragging: !1
                        }), l && (0, o(705660).SQ)(e, o(705660).y$.Click)
                    },
                    className: "cover" === c.type ? o(394112).pv : o(394112).hg,
                    children: ["form" !== _ && "viewsMain" !== c.type && S ? (0, a.jsxs)("div", {
                        style: X.overflowContainer,
                        children: [(0, a.jsxs)("div", {
                            style: A.labelContainer,
                            children: [s ? (0, a.jsx)(o(16275).I, {
                                icon: o(406302).O,
                                size: "sm",
                                colorPalette: "blue",
                                colorVariant: "accentPrimary"
                            }) : (0, a.jsx)("div", {
                                style: X.noDragHandle
                            }), (0, a.jsx)("div", {
                                style: X.label,
                                children: (0, a.jsx)(ee, {
                                    module: c
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            style: X.previewContainer,
                            children: u
                        })]
                    }) : u, P || F ? (0, a.jsx)("div", {
                        style: A.contentFadedOverlay
                    }) : void 0, C ? (0, a.jsx)("div", {
                        style: X.mouseEventCover
                    }) : void 0, S ? (0, a.jsx)(R, {
                        layoutType: _,
                        module: c,
                        isModuleHoveredOrSelected: k
                    }) : void 0]
                })
            }

            function ee(e) {
                let {
                    module: t
                } = e;
                return (0, o(11287).gx)(t) ? (0, a.jsx)(et, {
                    module: t
                }) : (0, a.jsx)(o(109939).sA, { ...o(676544).s[t.type]
                })
            }

            function et(e) {
                let {
                    module: t
                } = e, {
                    collectionStore: r
                } = (0, o(613789).bi)(), i = (0, o(682985).K8)(() => r.getSchema(), [r]), n = (0, o(682985).K8)(() => i[t.propertyId], [t, i]);
                return n ? (0, a.jsx)(a.Fragment, {
                    children: n.name
                }) : null
            }

            function eo({
                layoutStore: e,
                formQuestionId: t
            }) {
                let i = (0, o(533992).v3)(),
                    n = (0, o(713311).ET)(),
                    l = (0, r.useRef)(null),
                    {
                        canEditLayout: s
                    } = (0, o(613789).LH)(),
                    {
                        collectionStore: d,
                        formBlock: u
                    } = (0, o(682985).K8)(() => {
                        var e;
                        return {
                            collectionStore: n.collectionStore(),
                            formBlock: null == (e = n.collectionViewStore()) ? void 0 : e.getFormBlockStore()
                        }
                    }, [n]);
                if (!d) throw Error("No collection store found");
                let c = (0, o(682985).K8)(() => e.getSpaceId(), [e]),
                    p = (0, o(682985).K8)(() => {
                        if (c) return o(680802).c.createChildStore(e, {
                            table: "form_question",
                            id: t,
                            spaceId: c
                        })
                    }, [t, e, c]),
                    g = (0, o(682985).K8)(() => !(null != p && p.isReady()), [p]),
                    m = (0, o(682985).K8)(() => {
                        var e;
                        if (p) return null == (e = p.getConfig()) ? void 0 : e.propertyId
                    }, [p]),
                    y = (0, o(682985).K8)(() => {
                        let e = d.getSchema();
                        return e ? Object.keys(e) : []
                    }, [d]),
                    f = (0, o(682985).K8)(() => {
                        let e = d.getSchema();
                        if (e && m) return (0, o(561872)._g)({
                            schema: e,
                            property: m
                        })
                    }, [d, m], {
                        equalityFn: o(381453).n4
                    }),
                    v = (0, o(809682).W)({
                        inMemoryRecordCacheName: "FormQuestionTemporaryRecordCache",
                        collectionSchemaPropertyIds: y,
                        collectionId: d.id,
                        spaceId: c,
                        formMode: "builder"
                    }),
                    h = (0, o(682985).K8)(() => {
                        let e = d.getSchema();
                        return e && p ? (0, o(278011).e)({
                            environment: i,
                            store: p,
                            collectionSchema: e,
                            isFormPublic: null == u ? void 0 : u.hasSitePublicPermission()
                        }) : "generic_error"
                    }, [d, i, u, p]),
                    {
                        autofocusedQuestionTextStore: b
                    } = (0, o(300531).cJ)(),
                    x = (0, o(682985).K8)(() => !!(b.state && b.state.questionId === (null == p ? void 0 : p.id)), [b, null == p ? void 0 : p.id]);
                return ((0, r.useEffect)(() => {
                    if (p && x) {
                        var e, t;
                        (null == (e = b.state) ? void 0 : e.questionInputType) === "title" ? (0, o(700271).C)({
                            environment: i,
                            store: p.getNameStore(),
                            canSelectAllBlocks: !1,
                            contentEditableContextId: void 0
                        }) : (null == (t = b.state) ? void 0 : t.questionInputType) === "description" && (0, o(739204).z)({
                            store: p.getDescriptionStore()
                        }), b.clear()
                    }
                }, [b, i, x, p]), g) ? (0, a.jsx)(en, {}) : p && m && d && v ? (0, a.jsxs)("div", {
                    ref: l,
                    children: [(0, a.jsx)(el, {
                        formQuestionStore: p
                    }), h ? (0, a.jsx)(eu, {
                        questionErrorState: h,
                        propertyType: null == f ? void 0 : f.type
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(ea, {
                            formQuestionStore: p
                        }), f && (0, o(703049).OG)(f) ? (0, a.jsx)(es, {
                            formQuestionStore: p,
                            propertySchema: f
                        }) : void 0, (0, a.jsx)(o(625399).qm, {
                            store: v,
                            property: m,
                            disabled: !0,
                            locked: !s,
                            surface: "form_editor",
                            blockPropertyValueOverlayStore: o(363746).A,
                            collectionStore: d,
                            tableWrap: !1,
                            formQuestionStore: p
                        }, m)]
                    })]
                }) : null
            }
            let er = {
                    borderRadius: 8,
                    height: 22,
                    width: 200
                },
                ei = {
                    borderRadius: 5,
                    height: 16,
                    width: "100%",
                    marginTop: 12
                };

            function en() {
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(o(795830).P, {
                        style: er
                    }), (0, a.jsx)(o(795830).P, {
                        style: ei
                    })]
                })
            }

            function el({
                formQuestionStore: e
            }) {
                let t = (0, o(533992).v3)(),
                    i = (0, o(713311).ET)(),
                    {
                        collectionStore: n
                    } = (0, o(300531).cJ)(),
                    {
                        canEditLayout: l
                    } = (0, o(613789).LH)(),
                    s = (0, o(682985).K8)(() => !!i.normalizedSchemaStore.state, [i]),
                    d = (0, r.useMemo)(() => (0, o(381453).sg)(() => {
                        (0, o(936441).maybeSyncQuestionNameToPropertyName)({
                            environment: t,
                            questionStore: e,
                            collectionStore: n,
                            collectionContextStore: i
                        })
                    }, 500), [i, n, t, e]);
                return s && n ? (0, a.jsx)(o(437263).j, {
                    formMode: "builder",
                    disabled: !l,
                    onChange: d,
                    formQuestionStore: e
                }) : null
            }

            function ea({
                formQuestionStore: e
            }) {
                let {
                    canEditLayout: t
                } = (0, o(613789).LH)();
                return (0, a.jsx)(o(611455).P, {
                    disabled: !t,
                    formQuestionStore: e,
                    formMode: "builder"
                })
            }

            function es(e) {
                return (0, a.jsx)(o(61955).A, { ...e,
                    formMode: "builder"
                })
            }
            let ed = {
                helpIcon: {
                    marginInlineStart: 6
                },
                textSpan: {
                    color: o(632079).Tj.text.tertiary
                },
                style0: {
                    width: 240,
                    whiteSpace: "pre-wrap"
                }
            };

            function eu({
                questionErrorState: e,
                propertyType: t
            }) {
                let i = (0, r.useMemo)(() => {
                        switch (e) {
                            case "deleted_property":
                                return (0, a.jsx)(o(109939).sA, {
                                    id: "BrokenLinkedPropertyWarning.deletedProperty",
                                    defaultMessage: "This question’s corresponding property has been deleted."
                                });
                            case "invalid_property_type":
                                return (0, a.jsx)(o(109939).sA, {
                                    id: "BrokenLinkedPropertyWarning.invalidProperty",
                                    defaultMessage: "This question’s corresponding property is not supported."
                                });
                            case "invalid_property_type_for_public_form":
                                if ("person" === t) return (0, a.jsx)(o(109939).sA, {
                                    id: "BrokenLinkedPropertyWarning.invalidPublicProperty.person",
                                    defaultMessage: "Person property is not supported in public forms."
                                });
                                return (0, a.jsx)(o(109939).sA, {
                                    id: "BrokenLinkedPropertyWarning.invalidPublicProperty.generic",
                                    defaultMessage: "This question’s linked property type is not supported in public forms."
                                });
                            case "related_collection_not_public":
                                return (0, a.jsx)(o(109939).sA, { ...o(355482).yh.relatedCollectionNotPublic
                                });
                            case "generic_error":
                                return (0, a.jsx)(o(109939).sA, {
                                    id: "BrokenLinkedPropertyWarning.message",
                                    defaultMessage: "Something is wrong with this linked property."
                                })
                        }
                    }, [t, e]),
                    n = (0, r.useMemo)(() => {
                        switch (e) {
                            case "deleted_property":
                                return (0, a.jsx)(o(109939).sA, {
                                    id: "BrokenLinkedPropertyWarning.deletedProperty.helperTooltip",
                                    defaultMessage: "Delete this question or link it to a different property."
                                });
                            case "invalid_property_type":
                                return (0, a.jsx)(o(109939).sA, {
                                    id: "BrokenLinkedPropertyWarning.invalidProperty.helperTooltip",
                                    defaultMessage: "Change the question type to a supported type"
                                });
                            case "generic_error":
                                return (0, a.jsx)(o(109939).sA, {
                                    id: "BrokenLinkedPropertyWarning.genericError.helperTooltip",
                                    defaultMessage: "Delete this question or link it to a different property."
                                })
                        }
                    }, [e]);
                return (0, a.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    paddingInlineStart: 8,
                    children: [(0, a.jsx)("span", {
                        style: ed.textSpan,
                        children: i
                    }), (0, a.jsx)(o(51831).m, {
                        content: () => (0, a.jsx)("div", {
                            style: ed.style0,
                            children: n
                        }),
                        disableTooltip: "invalid_property_type_for_public_form" === e || "related_collection_not_public" === e,
                        children: t => "invalid_property_type_for_public_form" === e || "related_collection_not_public" === e ? null : (0, a.jsx)("div", { ...t,
                            style: ed.helpIcon,
                            children: (0, a.jsx)(o(16275).I, {
                                icon: o(211052).questionMarkCircleSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            })
                        })
                    })]
                })
            }
            o(672577);
            let ec = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.26 12.26",
                    svg: (0, a.jsx)("path", {
                        d: "M1.875 4a2.125 2.125 0 1 1 2.75 2.032V10c0 .76.616 1.375 1.375 1.375h3.968a2.126 2.126 0 1 1 0 1.25H6A2.625 2.625 0 0 1 3.375 10V6.032A2.13 2.13 0 0 1 1.875 4M4 3.125a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75M11.125 12a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0"
                    })
                },
                ep = (0, o(104509).wt)("nodeTopLeftBottomRightSmall", ec, "small");
            var eg = () => o(266967);

            function em(e) {
                let {
                    parentModule: t
                } = e, r = (0, o(482170).l)(t.conditionalGroups);
                return r ? (0, a.jsx)(a.Fragment, {
                    children: r.map(e => (0, a.jsx)(eh, {
                        conditionalGroup: e,
                        parentModule: t
                    }, e.id))
                }) : null
            }
            let ey = {
                    display: "flex",
                    cursor: "auto",
                    paddingTop: 20
                },
                ef = {
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: 12,
                    paddingInlineStart: 10,
                    marginInlineStart: 4,
                    cursor: "auto",
                    flexGrow: 1
                },
                ev = {
                    display: void 0
                };

            function eh(e) {
                let {
                    conditionalGroup: t,
                    parentModule: i
                } = e, n = (0, o(533992).v3)(), l = (0, o(345776).T)(), {
                    setModuleSelection: s,
                    currentModuleSelection: d,
                    canEditLayout: u,
                    layoutStore: c,
                    sessionId: p
                } = (0, o(613789).LH)(), g = (0, o(723240).r)(), {
                    formConditionalGroupsStore: m
                } = (0, o(300531).cJ)(), y = (0, o(682985).K8)(() => {
                    let e = (0, eg().h8)(i.id, t.id);
                    return !m.state.conditionalGroupCollapsedStates[e]
                }, [t.id, m, i.id]), f = (0, r.useMemo)(() => new(o(883751)).A, []), [v, h] = (0, r.useState)(!1), [b, x] = (0, r.useState)(!1), M = (0, r.useMemo)(() => {
                    var e;
                    let o = null == (e = i.conditionalGroups) ? void 0 : e.find(e => e.id === t.id);
                    return o ? o.children ? ? [] : []
                }, [t, i]), _ = (0, r.useCallback)(e => {
                    let t = (null == d ? void 0 : d.type) === "existing_module" && d.moduleId === e;
                    return (0, a.jsx)(eB, {
                        pageModuleId: e,
                        active: t,
                        area: "form_conditional_modules"
                    })
                }, [d]), j = (0, o(682985).K8)(() => {
                    let e = c.getModules().form_conditional_modules;
                    return !e || M.some(t => "formQuestion" === e[t].type)
                }, [M, c]), I = (0, o(217844)._)({
                    name: "forms_conditional_logic",
                    spaceId: g,
                    userId: l
                }), S = null == I ? void 0 : I.upsell, w = void 0 === i.parentModuleId && S, T = (0, r.useCallback)((e, {
                    key: r,
                    endPosition: l
                }) => {
                    (0, o(18028).E)({
                        environment: n,
                        layoutStore: c,
                        position: {
                            type: "absolute",
                            area: "form_conditional_modules",
                            parentConditionalGroupId: t.id,
                            parentModuleId: i.id,
                            index: l
                        },
                        moduleId: r,
                        sessionId: p
                    })
                }, [t.id, n, c, i.id, p]), A = (0, r.useCallback)(() => {
                    let e = (0, eg().h8)(i.id, t.id),
                        o = m.state.conditionalGroupCollapsedStates[e];
                    m.setState({
                        conditionalGroupCollapsedStates: { ...m.state.conditionalGroupCollapsedStates,
                            [e]: !o
                        }
                    })
                }, [t.id, m, i.id]), C = (0, r.useCallback)(() => {
                    s(void 0)
                }, [s]), k = (0, r.useCallback)(e => {
                    e && s({
                        type: "existing_module",
                        moduleId: e,
                        isDragging: !1
                    })
                }, [s]);
                return (0, a.jsxs)("div", {
                    onMouseDown: e => {
                        h(!1), x(!1), (0, o(705660).SQ)(e, o(705660).y$.EditorMouseDown, o(763230).D_)
                    },
                    children: [w ? (0, a.jsx)(ex, {
                        upsell: S
                    }) : void 0, (0, a.jsxs)("div", {
                        style: ey,
                        children: [(0, a.jsx)(e_, {
                            isGroupExpanded: y,
                            toggleGroupVisibility: A
                        }), (0, a.jsxs)("div", {
                            style: ef,
                            children: [(0, a.jsx)(eI, {
                                parentModule: i,
                                groupId: t.id,
                                trigger: t.trigger,
                                isGroupExpanded: y,
                                filterOptionsPopupOpen: v,
                                setFilterOptionsPopupOpen: h,
                                filterOperatorPopupOpen: b,
                                setFilterOperatorPopupOpen: x
                            }), y ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(o(66467).Ay, {
                                    className: o(394112).hg,
                                    store: f,
                                    keys: M,
                                    direction: "vertical",
                                    onDrop: (e, t) => {
                                        T(e, t)
                                    },
                                    onDragCancel: C,
                                    hoverCursorStyleOverride: 1 === M.length ? "pointer" : void 0,
                                    onClick: k,
                                    draggingStyle: ev,
                                    draggingStyleForNonDraggedItems: {
                                        display: void 0
                                    },
                                    renderKey: e => _(e),
                                    disabled: !u,
                                    gap: 24
                                }), j ? (0, a.jsx)(ek, {
                                    parentModuleId: i.id,
                                    parentConditionalGroupId: t.id
                                }) : void 0]
                            }) : void 0]
                        })]
                    })]
                })
            }
            let eb = {
                container: {
                    color: o(632079).Tj.yellow.text.secondary,
                    background: o(632079).Tj.yellow.background.secondaryTranslucent,
                    borderRadius: 6,
                    width: "100%",
                    padding: "10px 22px",
                    marginTop: 24,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center"
                },
                upgradeButton: {
                    marginInlineEnd: -4,
                    color: o(632079).Tj.yellow.text.secondary,
                    fontWeight: o(699422).Wy.medium
                },
                upgradeButtonHovered: {
                    backgroundColor: (0, o(650342).X4)(o(632079).Tj.yellow.text.secondary, .1)
                },
                upgradeButtonPressed: {
                    backgroundColor: (0, o(650342).X4)(o(632079).Tj.yellow.text.secondary, .2)
                },
                style0: {
                    width: "90%",
                    marginInlineEnd: 10
                }
            };

            function ex(e) {
                let {
                    upsell: t
                } = e, r = (0, o(533992).v3)(), i = (0, o(67499).S)();
                return (0, a.jsxs)("div", {
                    style: eb.container,
                    children: [(0, a.jsx)("div", {
                        style: eb.style0,
                        children: (0, a.jsx)(o(109939).sA, {
                            id: "upgradeForConditionalLogicWarning.warning",
                            defaultMessage: "Conditional logic is only available on Business and Enterprise plan types."
                        })
                    }), (0, a.jsx)(o(988022).p, {
                        style: eb.upgradeButton,
                        hoveredStyle: eb.upgradeButtonHovered,
                        pressedStyle: eb.upgradeButtonPressed,
                        onMouseDown: () => {
                            o(907063).K(r, {
                                upsell: t,
                                from: "forms_conditional_logic",
                                spaceStore: (0, o(888).$)(i)
                            })
                        },
                        children: (0, a.jsx)(o(109939).sA, {
                            id: "upgradeForConditionalLogicWarning.upgrade",
                            defaultMessage: "Upgrade"
                        })
                    })]
                })
            }
            let eM = {
                width: 2,
                flexGrow: 1,
                background: "linear-gradient(0deg, rgba(35, 131, 226, 0) 0px, rgba(35, 131, 226, 0.57) 64px)",
                borderRadius: 1,
                opacity: .4
            };

            function e_(e) {
                let {
                    isGroupExpanded: t,
                    toggleGroupVisibility: r
                } = e, i = (0, o(960253).e)(), n = (0, o(960253).I)(() => ({
                    groupBar: {
                        gap: 6,
                        opacity: "light" === i ? .5 : .75,
                        color: o(632079).Tj.blue.text.tertiary,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: 3,
                        paddingInlineStart: 26
                    },
                    toggleHovered: {
                        background: void 0,
                        opacity: "light" === i ? .8 : 1
                    },
                    toggleIcon: {
                        transform: t ? "rotate(180deg)" : "rotate(90deg)",
                        fill: o(632079).Tj.blue.text.tertiary
                    }
                }), [t, i]);
                return (0, a.jsxs)(o(64960).Ay, {
                    style: n.groupBar,
                    onClick: r,
                    hoveredStyle: n.toggleHovered,
                    pressedStyle: n.toggleHovered,
                    children: [(0, a.jsx)(o(16275).I, {
                        icon: o(406531).l,
                        size: "xs",
                        style: n.toggleIcon
                    }), (0, a.jsx)("div", {
                        style: eM
                    })]
                })
            }
            let ej = {
                indentedBranchContainer: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 14,
                    marginBottom: 12
                },
                triggerText: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: o(632079).Tj.blue.text.tertiary
                },
                deleteButton: {
                    width: 20,
                    height: 20
                },
                deleteIcon: {
                    width: 18,
                    height: 18
                },
                popupButton: {
                    display: "flex",
                    padding: "0px 3px",
                    borderRadius: 4,
                    color: o(632079).Tj.blue.text.accentPrimary
                },
                triggerButtonHoveredStyle: {
                    background: o(632079).Tj.blue.background.primaryTranslucent
                },
                triggerButtonPressedStyle: {
                    background: o(632079).Tj.blue.background.primaryTranslucent
                },
                chevronIcon: {
                    marginTop: 3,
                    marginInlineStart: 2
                },
                style0: {
                    marginInlineStart: -14
                }
            };

            function eI(e) {
                let {
                    isGroupExpanded: t,
                    groupId: i,
                    trigger: n,
                    parentModule: l,
                    filterOptionsPopupOpen: s,
                    setFilterOptionsPopupOpen: d,
                    filterOperatorPopupOpen: u,
                    setFilterOperatorPopupOpen: c
                } = e, p = (0, o(109939).tz)(), g = (0, o(533992).v3)(), {
                    layoutStore: m,
                    sessionId: y
                } = (0, o(613789).LH)(), {
                    isCollectionEmpty: f
                } = (0, o(300531).cJ)(), v = (0, o(713311).ET)(), h = (0, o(723240).r)(), b = (0, o(682985).K8)(() => {
                    let e = n.filter;
                    if ((0, o(400473).gc)(e) && ((0, o(400473).v0)(e) || (0, o(400473).as)(e))) return (0, o(400473).v0)(e) ? (0, o(400473).Zl)(e) : (0, o(400473).SM)(e)
                }, [n]), x = (0, r.useMemo)(() => (0, o(400473).Ui)(n.filter) ? void 0 === n.filter.value.value : (null == b ? void 0 : b.length) === 0, [n.filter, b]), M = (0, o(960253).I)(() => ({
                    triggerOptionText: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: 300,
                        color: x ? o(632079).Tj.blue.text.disabled : void 0
                    }
                }), [x]), [_, j] = (0, r.useState)(!1), I = (0, o(682985).K8)(() => m.getModules().form_conditional_modules || {}, [m]), S = (0, r.useMemo)(() => {
                    var e;
                    let t = null == (e = l.conditionalGroups) ? void 0 : e.find(e => e.id === i);
                    if (!t) return 0;
                    let o = 0;
                    for (let e of t.children ? ? []) {
                        let t = I[e];
                        if (!t || "formQuestion" !== t.type) continue;
                        let {
                            formQuestionDescendants: r
                        } = (0, eg().Yg)({
                            currentModule: t,
                            nestedModules: I,
                            includePlaceholders: !1
                        });
                        o += r.length
                    }
                    return o
                }, [l, i, I]), w = (0, o(682985).K8)(() => {
                    var e;
                    if (!h) return;
                    let t = o(680802).c.createChildStore(m, {
                            id: l.formQuestionId,
                            table: o(832375).lo9,
                            spaceId: h
                        }),
                        r = null == (e = v.collectionStore()) ? void 0 : e.getSchema();
                    if (!r) return;
                    let i = r[t.getPropertyId() ? ? ""];
                    return (0, o(703049).hm)(i, t.getModel())
                }, [l.formQuestionId, m, h, v]), T = (0, o(682985).K8)(() => {
                    if (!b || b.length < 2 || (0, o(400473).Ui)(n.filter)) return;
                    let e = n.filter;
                    return (0, o(400473).v0)(e) ? "any" : "enum_contains_all" === e.operator ? "all" : "any"
                }, [n, b]), A = (0, r.useMemo)(() => {
                    if (!T) return;
                    let e = "any" === T ? (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "any",
                        id: "FormConditionalLogicModuleRenderer.ConditionTrigger.FilterOperator.any"
                    }) : (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "all",
                        id: "FormConditionalLogicModuleRenderer.ConditionTrigger.FilterOperator.all"
                    });
                    return (0, o(400473).v0)(n.filter) || 1 === w ? e : (0, a.jsx)(o(182718).zD, {
                        popupType: o(182718).nl.Popup,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        style: ej.style0,
                        open: u,
                        onDismiss: () => c(!1),
                        disableMouseCapture: !0,
                        enableOutsideClickDismiss: !0,
                        originGap: 6,
                        content: () => (0, a.jsx)(eS, {
                            trigger: n,
                            currentOperator: T,
                            parentModule: l,
                            conditionalGroupId: i
                        }),
                        trapFocus: !0,
                        children: (0, a.jsxs)(o(64960).Ay, {
                            onMouseDown: e => {
                                (0, o(705660).SQ)(e, o(705660).y$.EditorMouseDown, o(763230).D_)
                            },
                            onClick: () => c(!0),
                            style: ej.popupButton,
                            hoveredStyle: ej.triggerButtonHoveredStyle,
                            pressedStyle: ej.triggerButtonPressedStyle,
                            children: [e, (0, a.jsx)(o(16275).I, {
                                icon: o(36663).arrowChevronSingleDownFillIcon,
                                size: "xs",
                                style: ej.chevronIcon,
                                colorPalette: "blue",
                                colorVariant: "accentPrimary"
                            })]
                        })
                    })
                }, [T, n, w, u, c, l, i]), C = (0, r.useMemo)(() => {
                    if ((0, o(400473).Ui)(n.filter)) switch (n.filter.value.value) {
                        case !0:
                            return (0, a.jsx)(o(109939).sA, {
                                defaultMessage: "checked",
                                id: "FormConditionalLogicModuleRenderer.ConditionTrigger.IfCheckboxIsChecked"
                            });
                        case !1:
                            return (0, a.jsx)(o(109939).sA, {
                                defaultMessage: "unchecked",
                                id: "FormConditionalLogicModuleRenderer.ConditionTrigger.IfCheckboxIsUnchecked"
                            });
                        default:
                            return (0, a.jsx)(o(109939).sA, {
                                defaultMessage: "Select",
                                id: "FormConditionalLogicModuleRenderer.ConditionTrigger.NoOptionsSelected"
                            })
                    }
                    return b && 0 !== b.length ? b.map(e => e.value).join(", ") : (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Select",
                        id: "FormConditionalLogicModuleRenderer.ConditionTrigger.NoOptionsSelected"
                    })
                }, [b, n.filter]), k = (0, r.useMemo)(() => (0, a.jsx)(o(182718).zD, {
                    popupType: o(182718).nl.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    style: ej.style0,
                    open: s,
                    onDismiss: () => d(!1),
                    disableMouseCapture: !0,
                    enableOutsideClickDismiss: !0,
                    originGap: 6,
                    content: () => (0, a.jsx)(ew, {
                        parentModule: l,
                        trigger: n,
                        groupId: i
                    }),
                    trapFocus: !0,
                    children: (0, a.jsxs)(o(64960).Ay, {
                        style: ej.popupButton,
                        onMouseDown: e => {
                            (0, o(705660).SQ)(e, o(705660).y$.EditorMouseDown, o(763230).D_)
                        },
                        onClick: () => d(!0),
                        hoveredStyle: ej.triggerButtonHoveredStyle,
                        pressedStyle: ej.triggerButtonPressedStyle,
                        children: [(0, a.jsx)("span", {
                            style: M.triggerOptionText,
                            children: C
                        }), (0, a.jsx)(o(16275).I, {
                            icon: o(36663).arrowChevronSingleDownFillIcon,
                            size: "xs",
                            style: ej.chevronIcon
                        })]
                    })
                }), [s, C, i, l, d, M, n]), P = (0, r.useCallback)(() => {
                    j(!0)
                }, []), F = (0, r.useCallback)(() => {
                    j(!1)
                }, []), B = (0, r.useCallback)(() => {
                    o(237915).FG({
                        environment: g,
                        parentModule: l,
                        layoutStore: m,
                        groupId: i,
                        collectionContextStore: v,
                        isCollectionEmpty: f,
                        sessionId: y
                    })
                }, [g, l, i, m, v, f, y]), D = (0, o(682985).K8)(() => (0, o(400473).v0)(n.filter) || (0, o(400473).as)(n.filter) ? T ? (0, a.jsx)(o(109939).sA, {
                    defaultMessage: "If {filterOperatorPopup} of {filterValuesPopup} is selected",
                    id: "FormConditionalLogicModuleRenderer.ConditionTrigger.IfFilterValueIsSelected",
                    values: {
                        filterOperatorPopup: A,
                        filterValuesPopup: k
                    }
                }) : (0, a.jsx)(o(109939).sA, {
                    defaultMessage: "If {filterValuesPopup} is selected",
                    id: "FormConditionalLogicModuleRenderer.ConditionTrigger.SimpleFilter.Trigger",
                    values: {
                        filterValuesPopup: k
                    }
                }) : (0, o(400473).Ui)(n.filter) ? (0, a.jsx)(o(109939).sA, {
                    defaultMessage: "If {filterValuesPopup}",
                    id: "FormConditionalLogicModuleRenderer.ConditionTrigger.Checkbox",
                    values: {
                        filterValuesPopup: k
                    }
                }) : void 0, [T, A, k, n.filter]);
                return (0, a.jsxs)("div", {
                    style: ej.indentedBranchContainer,
                    onMouseMove: P,
                    onMouseLeave: F,
                    children: [(0, a.jsxs)("div", {
                        style: ej.triggerText,
                        children: [D, !t && S > 0 ? (0, a.jsxs)(o(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            marginInlineStart: 4,
                            children: [(0, a.jsx)(o(16275).I, {
                                icon: ep,
                                size: "sm"
                            }), (0, a.jsx)("span", {
                                children: S
                            })]
                        }) : void 0]
                    }), _ ? (0, a.jsx)(o(51831).m, {
                        placement: "top",
                        textWrap: !1,
                        content: () => (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Delete condition",
                            id: "FormConditionalLogicModuleRenderer.ConditionTrigger.DeleteIcon.Tooltip.title"
                        }),
                        children: e => (0, a.jsx)(o(374533).A, {
                            style: ej.deleteButton,
                            iconStyle: ej.deleteIcon,
                            colorPalette: "blue",
                            colorVariant: "accentPrimary",
                            onClick: B,
                            icon: o(968411).trashIcon,
                            ariaLabel: p.formatMessage({
                                defaultMessage: "Delete condition",
                                id: "FormConditionalLogicModuleRenderer.ConditionTrigger.DeleteIcon.title"
                            }),
                            ...e
                        })
                    }) : void 0]
                })
            }

            function eS(e) {
                let {
                    currentOperator: t,
                    trigger: r,
                    parentModule: i,
                    conditionalGroupId: n
                } = e, l = (0, o(533992).v3)(), {
                    layoutStore: s
                } = (0, o(613789).LH)(), d = [{
                    key: "any",
                    render: e => (0, a.jsx)(o(95582).A, { ...e,
                        disabled: !1,
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "any",
                            id: "FormConditionalLogicModuleRenderer.ConditionTrigger.FilterOperator.any"
                        }),
                        isChecked: "any" === t
                    }),
                    action: () => {
                        (0, o(400473).gc)(r.filter) && (0, o(400473).as)(r.filter) && o(237915).Is({
                            environment: l,
                            layoutStore: s,
                            module: i,
                            conditionalGroupId: n,
                            newValue: { ...r.filter,
                                operator: "enum_contains"
                            }
                        })
                    }
                }, {
                    key: "all",
                    render: e => (0, a.jsx)(o(95582).A, { ...e,
                        disabled: !1,
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "all",
                            id: "FormConditionalLogicModuleRenderer.ConditionTrigger.FilterOperator.all"
                        }),
                        isChecked: "all" === t
                    }),
                    action: () => {
                        (0, o(400473).gc)(r.filter) && (0, o(400473).as)(r.filter) && o(237915).Is({
                            environment: l,
                            layoutStore: s,
                            module: i,
                            conditionalGroupId: n,
                            newValue: { ...r.filter,
                                operator: "enum_contains_all"
                            }
                        })
                    }
                }], u = {
                    menuType: o(649476).gu.Popup,
                    width: 200
                };
                return (0, a.jsx)(o(747369).A, { ...u,
                    children: (0, a.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        sections: [{
                            key: 0,
                            items: d
                        }],
                        onAccept: () => {},
                        initialFocus: void 0
                    })
                })
            }

            function ew(e) {
                let {
                    parentModule: t,
                    trigger: r,
                    groupId: i
                } = e, n = (0, o(533992).v3)(), {
                    layoutStore: l,
                    canEditLayout: s
                } = (0, o(613789).LH)(), d = (0, o(713311).ET)(), {
                    collectionViewStore: u,
                    schema: c
                } = (0, o(682985).K8)(() => {
                    let e = d.collectionStore();
                    if (!e) throw Error("No collection store found");
                    return {
                        collectionViewStore: d.collectionViewStore(),
                        schema: e.getSchema()
                    }
                }, [d]);
                return u ? (0, a.jsx)(o(69906).td, {
                    canUserFilterAdditionalSources: !1,
                    collectionViewId: u.id,
                    propertyFilter: r,
                    schema: c,
                    parentStore: u,
                    onChange: e => {
                        o(237915).Is({
                            environment: n,
                            layoutStore: l,
                            module: t,
                            conditionalGroupId: i,
                            newValue: e
                        })
                    },
                    onChangeDebounced: o(763230).lQ,
                    onClose: o(763230).lQ,
                    onDelete: o(763230).lQ,
                    onAddToCombinatorFilter: o(763230).lQ,
                    context: o(69906).mL.PropertyFilter,
                    canUserConfigureFilters: s,
                    allowRelativeDateFilter: !1,
                    allowRelativePersonFilter: !1,
                    collectionContextStore: d
                }) : null
            }
            let eT = {
                container: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    gap: 8,
                    color: o(632079).Tj.blue.text.accentPrimary
                },
                plusIcon: {
                    borderRadius: "100%",
                    background: o(632079).Tj.blue.background.secondaryTranslucent,
                    width: 20,
                    height: 20,
                    padding: 2,
                    boxShadow: `0 0 0 3px ${o(632079).Tj.blue.background.secondaryTranslucent}`,
                    marginInlineEnd: 4
                }
            };

            function eA() {
                return (0, a.jsxs)("div", {
                    style: eT.container,
                    children: [(0, a.jsx)(o(16275).I, {
                        icon: o(581923).plusIcon,
                        style: eT.plusIcon
                    }), (0, a.jsx)("span", {
                        children: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Add or select questions",
                            id: "FormConditionalLogicModuleRenderer.NestedPlaceholderModuleTitle"
                        })
                    })]
                })
            }
            let eC = {
                plusButton: {
                    borderRadius: "100%",
                    background: o(632079).Tj.blue.background.secondaryTranslucent,
                    width: 20,
                    height: 20,
                    padding: 2,
                    boxShadow: `0 0 0 3px ${o(632079).Tj.blue.background.secondaryTranslucent}`,
                    marginInlineEnd: 4
                },
                pressedStyle: {
                    background: void 0,
                    color: o(632079).Tj.blue.text.accentPrimary
                },
                hoveredStyle: {
                    background: void 0,
                    color: o(632079).Tj.blue.text.accentPrimary
                }
            };

            function ek(e) {
                let t = (0, o(723240).r)(),
                    i = (0, o(345776).T)(),
                    {
                        parentModuleId: n,
                        parentConditionalGroupId: l
                    } = e,
                    s = (0, o(713311).ET)(),
                    d = (0, r.useRef)(null),
                    u = (0, o(682985).K8)(() => {
                        let e = (0, o(92293).S)(s.settingsStore);
                        return (null == e ? void 0 : e.type) === "formQuestionCreateSettings" && s.settingsStore.state.ref === d
                    }, [s.settingsStore, d]),
                    c = (0, o(960253).I)(() => ({
                        buttonStyle: {
                            height: 32,
                            color: u ? o(632079).Tj.blue.text.accentPrimary : o(632079).Tj.blue.text.tertiary,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8
                        }
                    }), [u]),
                    p = (0, r.useCallback)(() => {
                        (0, o(200371).O)({
                            collectionContextStore: s,
                            collectionSettingsStore: s.settingsStore,
                            ref: d
                        }), (0, o(927983).d)({
                            collectionSettingsStore: s.settingsStore,
                            item: {
                                type: "formQuestionCreateSettings",
                                area: "form_conditional_modules",
                                parentModuleId: n,
                                parentConditionalGroupId: l
                            },
                            ref: d
                        })
                    }, [s, d, n, l]),
                    g = (0, o(217844)._)({
                        name: "forms_conditional_logic",
                        spaceId: t,
                        userId: i
                    });
                return (null == g ? void 0 : g.upsell) ? null : (0, a.jsx)(o(4458).fI, {
                    justifyContent: "center",
                    width: "100%",
                    marginTop: 12,
                    ref: d,
                    children: (0, a.jsxs)(o(988022).p, {
                        onClick: p,
                        onMouseDown: e => {
                            (0, o(705660).SQ)(e, o(705660).y$.EditorMouseDown)
                        },
                        style: c.buttonStyle,
                        pressedStyle: eC.pressedStyle,
                        hoveredStyle: eC.hoveredStyle,
                        children: [(0, a.jsx)(o(16275).I, {
                            icon: o(581923).plusIcon,
                            style: eC.plusButton
                        }), (0, a.jsx)("span", {
                            children: (0, a.jsx)(o(109939).sA, {
                                defaultMessage: "Add more questions",
                                id: "FormConditionalLogicModuleRenderer.NestedAddMoreQuestionsButton"
                            })
                        })]
                    })
                })
            }
            let eP = {
                    transcript: !0,
                    bottomControls: !0,
                    expandedBacklinks: !0,
                    inlinePageSections: !0
                },
                eF = o(546605).Store.createValue(!1, {
                    name: "HEADER_FOCUS_STORE"
                });

            function eB({
                pageModuleId: e,
                active: t = !1,
                isDragging: i = !1,
                area: n,
                style: l
            }) {
                let {
                    layoutStore: s
                } = (0, o(613789).LH)(), d = (0, o(682985).K8)(() => null == s ? void 0 : s.getModuleById(e), [s, e], {
                    equalityFn: o(381453).n4
                }), u = (0, o(682985).K8)(() => !!d && (0, o(940371)._)(d), [d]), c = (0, o(682985).K8)(() => {
                    var e;
                    return null == (e = s.getModel()) ? void 0 : e.getLayoutType()
                }, [s]), p = (0, o(682985).K8)(() => !o(986939).A.isMobile && !!d && ("form" !== c || "placeholder" !== d.type) && (0, o(321779).iw)(d), [c, d]), g = (0, r.useMemo)(() => ({
                    isSelected: t,
                    isDragging: i,
                    isConfigurable: u,
                    isDraggable: p
                }), [t, i, u, p]);
                return d ? (0, a.jsx)(J, {
                    value: g,
                    children: "form" === c ? (0, a.jsx)(eL, {
                        pageModule: d,
                        style: l
                    }) : (0, a.jsx)(eD, {
                        pageModule: d,
                        style: l,
                        area: n
                    })
                }) : null
            }
            let eD = r.memo(function({
                    pageModule: e,
                    style: t,
                    area: i
                }) {
                    let {
                        pageStore: n
                    } = (0, o(613789).bi)(), l = (0, o(682985).K8)(() => !!n.getCover(), [n]), s = (0, o(641560).Lv)(e).type, d = e.type, u = (0, o(533992).v3)(), c = (0, o(682985).K8)(() => (0, o(125824).A)({
                        environment: u,
                        store: n,
                        pageViewBlockStore: void 0
                    }), [u, n]), p = (0, o(960253).I)(() => {
                        var o;
                        return {
                            wrapper: { ..."viewsMain" === (o = e).type ? {
                                    minHeight: "500px"
                                } : "editor" === o.type ? {
                                    maxHeight: "480px"
                                } : "discussions" === o.type ? {
                                    maxHeight: "300px"
                                } : void 0,
                                marginTop: l && "normalizedTitleWithIcon" === d ? "-50px" : void 0,
                                ...t
                            }
                        }
                    }, [l, e, d, t]), g = (0, r.useCallback)(t => (0, a.jsx)(Z, {
                        module: e,
                        style: p.wrapper,
                        area: i,
                        moduleMaxHeight: function(e) {
                            if (e) switch (e.type) {
                                case "editor":
                                    return 480;
                                case "discussions":
                                    return 300;
                                default:
                                    return
                            }
                        }(e),
                        children: t
                    }), [e, p.wrapper, i]);
                    if ((0, r.useEffect)(() => {
                            let e = n.getContentStore();
                            if (e) return o(198234).A.setLimitParents(n, {
                                [e.id]: 12
                            }), () => {
                                o(198234).A.removeLimitParents(n)
                            }
                        }, [n]), eP[s]) return null;
                    switch (d) {
                        case "cover":
                            return (0, a.jsx)(eO, {
                                wrapper: g,
                                pageStore: n,
                                isEditable: !1
                            }, `${e.id}-${n.id}`);
                        case "properties":
                            return (0, a.jsx)(ez, {
                                pageStore: n,
                                wrapper: g,
                                pageModule: e
                            }, `${e.id}-${n.id}`);
                        case "viewsMain":
                        case "views":
                            return (0, a.jsx)(M, {
                                wrapper: g,
                                viewsModule: e
                            }, `${e.id}-${n.id}`);
                        case "property_title":
                        case "property_text":
                        case "property_url":
                        case "property_email":
                        case "property_phone_number":
                        case "property_checkbox":
                        case "property_person":
                        case "property_created_by":
                        case "property_last_edited_by":
                        case "property_file":
                        case "property_select":
                        case "property_multi_select":
                        case "property_status":
                        case "property_number":
                        case "property_date":
                        case "property_created_time":
                        case "property_last_edited_time":
                        case "property_last_visited_time":
                        case "property_formula":
                        case "property_relation":
                        case "property_rollup":
                        case "property_button":
                        case "property_auto_increment_id":
                        case "property_location":
                        case "property_verification":
                        case "property_place":
                            return (0, a.jsx)(o(952330).v, {
                                propertyId: e.propertyId,
                                context: o(166654).R.Frame,
                                disabled: !0,
                                store: n,
                                pageModule: e,
                                wrapper: g,
                                stackPropertyLabelAndValue: !0
                            }, `${e.id}-${n.id}`);
                        case "normalizedTitleWithIcon":
                            return (0, a.jsx)(eK, {
                                wrapper: g,
                                module: e
                            }, `${e.id}-${n.id}`);
                        case "editor":
                            return (0, a.jsx)(o(520087).p, {
                                context: o(166654).R.Frame,
                                disabled: !0,
                                handlePlaceholderWrapClick: o(763230).lQ,
                                pageBlockStore: n,
                                editorWrapper: g
                            }, `${e.id}-${n.id}`);
                        case "discussions":
                            return (0, a.jsx)(o(28916).d, {
                                store: n,
                                wrapper: g,
                                showDefaultTitle: !0,
                                discussionLocation: "page_discussion",
                                pageDiscussionsRenderState: c
                            }, `${e.id}-${n.id}`);
                        case "inlinePageSections":
                            return (0, a.jsx)(eQ, {
                                wrapper: g
                            }, `${e.id}-${n.id}`);
                        case "relationsGroup":
                            return (0, a.jsx)(o(475620).z, {
                                pageStore: n,
                                wrapper: g,
                                disabled: !0,
                                context: o(166654).R.Frame,
                                showDefaultTitle: !0
                            });
                        case "transcript":
                        case "bottomControls":
                        case "expandedBacklinks":
                        case "deleted_property":
                            return null;
                        case "formQuestion":
                        case "formTitle":
                        case "formSubmit":
                        case "placeholder":
                        case "recentActivity":
                        case "collaborators":
                        case "teamspaces":
                        case "theirPages":
                        case "row":
                        case "view":
                            throw Error(`Cannot render ${d} in page layout editor.`);
                        default:
                            (0, o(722371).HB)(d)
                    }
                }),
                eE = {
                    paddingInlineStart: "16px"
                };

            function eL({
                pageModule: e,
                style: t
            }) {
                let i = (0, o(641560).Lv)(e).type,
                    {
                        layoutStore: n,
                        canEditLayout: l
                    } = (0, o(613789).LH)(),
                    {
                        formBlockStore: s,
                        headerFocusStore: d,
                        headerMouseStore: u
                    } = (0, o(300531).cJ)(),
                    c = (0, o(713311).ET)(),
                    p = (0, o(682985).K8)(() => c.permissionScopesStore.state.canConfigureCollection, [c.permissionScopesStore]),
                    g = (0, r.useCallback)(() => {
                        u.setState({ ...u.state,
                            mouseEntered: !0
                        })
                    }, [u]),
                    m = (0, r.useCallback)(() => {
                        u.setState({ ...u.state,
                            mouseEntered: !1
                        })
                    }, [u]),
                    y = (0, o(682985).K8)(() => {
                        var e;
                        let t = null == (e = c.collectionViewBlockStore()) ? void 0 : e.getParentBlockStore();
                        return null == t ? void 0 : t.getFormatStore().getKeyStore("block_color").getValue()
                    }, [c]),
                    f = (0, o(682985).K8)(() => "formQuestion" === e.type && e.conditionalGroups && e.conditionalGroups.length > 0, [e]),
                    v = (0, o(682985).K8)(() => {
                        var t;
                        return (null == (t = n.getModules().form_conditional_modules) ? void 0 : t[e.id]) !== void 0
                    }, [n, e]),
                    h = (0, o(960253).e)(),
                    b = (0, o(960253).I)(() => ({
                        formTitleWrapper: {
                            background: y ? (0, o(632079).ed)(y, o(632079).Tj, h).background : void 0
                        }
                    }), [y, h]);
                if (eP[i]) return null;
                let x = o => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(Z, {
                            module: e,
                            style: t,
                            area: v ? "form_conditional_modules" : "form_layout_schema",
                            children: o
                        }), f && "formQuestion" === e.type ? (0, a.jsx)(em, {
                            parentModule: e
                        }) : void 0]
                    }),
                    M = e.type;
                switch (M) {
                    case "formTitle":
                        return x((0, a.jsxs)("div", {
                            style: b.formTitleWrapper,
                            children: [(0, a.jsx)("div", {
                                style: eE,
                                children: (0, a.jsx)(o(625926).zE, {
                                    formBlockStore: s,
                                    disabled: !l,
                                    formMode: "builder",
                                    headerFocusStore: d,
                                    onHeaderMouseEnter: g,
                                    onHeaderMouseLeave: m
                                })
                            }), (0, a.jsx)(o(625926).Y1, {
                                collectionContextStore: c,
                                formBlockStore: s
                            })]
                        }));
                    case "formQuestion":
                        return x((0, a.jsx)(eo, {
                            layoutStore: n,
                            formQuestionId: e.formQuestionId
                        }));
                    case "formSubmit":
                        return null;
                    case "placeholder":
                        return x((0, a.jsx)(o(153321).P.div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: v ? 72 : 36
                            },
                            transition: {
                                duration: .2
                            },
                            children: v ? (0, a.jsx)(eA, {}) : void 0
                        }, "placeholderModule"));
                    case "cover":
                        return (0, a.jsx)(eO, {
                            wrapper: x,
                            pageStore: s,
                            isEditable: p
                        }, e.id);
                    case "property_title":
                    case "property_text":
                    case "property_url":
                    case "property_email":
                    case "property_phone_number":
                    case "property_checkbox":
                    case "property_person":
                    case "property_created_by":
                    case "property_last_edited_by":
                    case "property_file":
                    case "property_select":
                    case "property_multi_select":
                    case "property_status":
                    case "property_number":
                    case "property_date":
                    case "property_created_time":
                    case "property_last_edited_time":
                    case "property_last_visited_time":
                    case "property_formula":
                    case "property_relation":
                    case "property_rollup":
                    case "property_button":
                    case "property_auto_increment_id":
                    case "property_location":
                    case "property_verification":
                    case "property_place":
                    case "normalizedTitleWithIcon":
                    case "inlinePageSections":
                    case "expandedBacklinks":
                    case "discussions":
                    case "bottomControls":
                    case "editor":
                    case "transcript":
                    case "properties":
                    case "views":
                    case "viewsMain":
                    case "relationsGroup":
                    case "deleted_property":
                    case "recentActivity":
                    case "collaborators":
                    case "teamspaces":
                    case "theirPages":
                    case "row":
                    case "view":
                        throw Error("Cannot render these modules in a form.");
                    default:
                        (0, o(722371).HB)(M)
                }
            }
            let eR = {
                height: 0
            };

            function eO(e) {
                let {
                    wrapper: t,
                    pageStore: r,
                    isEditable: i
                } = e;
                return (0, o(682985).K8)(() => !!r.getCover(), [r]) ? t((0, a.jsx)(o(334120).f, {
                    store: r,
                    isEditable: i,
                    onMouseEnter: o(763230).lQ,
                    onMouseLeave: o(763230).lQ,
                    paddingX: 0,
                    pageCoverHeight: o(459843).B
                })) : (0, a.jsx)("div", {
                    className: o(394112).hg,
                    style: eR
                })
            }
            let eH = {
                marginTop: 8
            };

            function eK(e) {
                let {
                    wrapper: t,
                    module: r
                } = e, {
                    pageStore: i,
                    collectionStore: n
                } = (0, o(613789).bi)(), l = (0, o(682985).K8)(() => n.getFormat(), [n]), s = (0, o(682985).K8)(() => !!i.getCover(), [i]), {
                    backlinksConfiguredToShowAboveTitle: d
                } = (0, o(412764).X1)({
                    format: l
                }), u = d ? (0, a.jsx)("div", {
                    style: eH,
                    children: (0, a.jsx)(o(796164).y, {
                        pageStore: i,
                        isButtonVisible: !0
                    })
                }) : void 0, c = (0, o(713311).ET)();
                return t((0, a.jsx)(o(28847).H, {
                    store: i,
                    context: o(166654).R.Frame,
                    isEditable: !1,
                    headerControls: u,
                    hasCover: s,
                    isInSidePeek: !1,
                    headerFocusStore: eF,
                    openMenuOnMount: !1,
                    openMenuOnMountCallback: o(763230).lQ,
                    disabled: !0,
                    titlePlaceholder: void 0,
                    collectionContextStore: c,
                    shouldShowTemplatePicker: !1,
                    onTitleChange: o(763230).lQ,
                    onTitleEditText: o(763230).lQ,
                    onTitleEsc: o(763230).lQ,
                    onTitleUntab: o(763230).lQ,
                    onTitleTab: o(763230).lQ,
                    handleHeaderMouseEnter: o(763230).lQ,
                    handleHeaderMouseLeave: o(763230).lQ,
                    isInPageLayoutModuleEditor: !0,
                    layoutModule: r
                }))
            }

            function eQ(e) {
                let {
                    pageStore: t
                } = (0, o(613789).bi)(), r = (0, o(682985).K8)(() => t.getSchema(), [t]), i = (0, o(682985).K8)(() => (0, o(335818).gV)(t), [t]), n = (0, o(682985).K8)(() => {
                    if (i) return (i.collection_page_sections || []).filter(e => {
                        let i = r[e.section];
                        if (!i || "relation" !== i.type) return;
                        let n = t.getPropertyValue(e.section),
                            l = (0, o(561872).bG)({
                                relationValue: (0, o(561872).n)(n),
                                propertySchema: i,
                                getRecordModel: t.getRecordModel,
                                includeNoAccess: !0
                            }).length;
                        return "inline" === e.visibility && r[e.section] && 0 !== l
                    }).map(e => e.section)
                }, [i, r, t]);
                return (n ? ? []).length > 0 ? (0, a.jsx)(o(699258).LG, {
                    context: o(166654).R.Frame,
                    disabled: !0,
                    inlinePropertyIDs: n,
                    store: t,
                    wrapper: e.wrapper
                }) : (0, a.jsx)(eV, {
                    text: "Inline page sections"
                })
            }

            function eV(e) {
                let t = (0, o(960253).e)(),
                    r = (0, o(960253).I)(() => ({
                        text: {
                            fontSize: 14,
                            color: "light" === t ? o(632079).Tj.palette.gray[500] : o(632079).Tj.palette.gray[600]
                        }
                    }), [t]);
                return (0, a.jsx)(o(394112).vV, {
                    children: (0, a.jsxs)(o(4458).fI, {
                        gap: 6,
                        children: [(0, a.jsx)("span", {
                            style: r.text,
                            children: e.text
                        }), (0, a.jsx)(o(746434).E, {
                            content: "Not enabled"
                        })]
                    })
                })
            }
            let eG = {
                empty: {
                    color: o(632079).Tj.text.tertiary,
                    fontSize: o(699422).J.UIRegular.desktop,
                    padding: "0 6px"
                }
            };

            function ez(e) {
                let {
                    pageModule: t,
                    pageStore: r,
                    wrapper: i
                } = e, n = (0, o(533992).v3)(), {
                    layoutStore: l
                } = (0, o(613789).LH)(), s = (0, o(682985).K8)(() => {
                    var e;
                    let o = null == l || null == (e = l.getModel()) ? void 0 : e.getRawPageModuleAreaById(t.id);
                    if (o) return (0, x().Fw)(o)
                }, [l, t.id]), d = (0, o(682985).K8)(() => !(0, o(345152).g)({
                    environment: n,
                    layoutArea: s,
                    moduleType: t.type,
                    pageViewBlockContext: o(166654).R.Frame
                }), [n, s, t.type]);
                return (0, a.jsx)(o(120805).h, {
                    context: o(166654).R.Frame,
                    disabled: !0,
                    store: r,
                    wrapper: i,
                    layoutModule: t,
                    variant: t.variant,
                    customization: {
                        disableContainerPadding: !0,
                        neverShowPropertiesElsewhereInLayout: !0,
                        disableLastRowBottomPadding: !0,
                        stackPropertyLabelAndValue: d,
                        emptyState: (0, a.jsx)("div", {
                            style: eG.empty,
                            children: (0, a.jsx)(o(109939).sA, {
                                id: "pageLayout.emptyModule",
                                defaultMessage: "Empty"
                            })
                        })
                    },
                    forceGroupsOpenOrClosed: "open"
                }, `${t.id}-${r.id}`)
            }
            let eN = {
                    display: void 0
                },
                eq = {
                    dropzoneHalo: {
                        background: o(634944).to,
                        height: o(634944).NZ,
                        marginTop: -o(634944).NZ
                    },
                    hiddenModuleStyle: {
                        display: "none"
                    }
                };

            function eW(e) {
                let t, {
                    area: l
                } = e;
                if ("form_conditional_modules" === l) throw Error("[Forms Conditional Logic] Can't render builder layout modules for nested form_conditional_modules directly.");
                let s = (0, o(533992).v3)(),
                    {
                        sessionId: d,
                        layoutStore: c,
                        currentModuleSelection: p,
                        setModuleSelection: g,
                        canEditLayout: m,
                        layoutBuilderModuleSelectionStore: y
                    } = (0, o(613789).LH)(),
                    v = (0, r.useRef)(null),
                    h = (0, o(935817).ub)({
                        layoutStore: c,
                        pageStoreId: void 0
                    }),
                    x = (0, o(682985).K8)(() => c.isTabbedPageLayout(), [c]),
                    M = n(),
                    _ = (0, o(682985).K8)(() => {
                        var t;
                        let r = "views_main_tab_modules" === l ? (null == (t = h[l]) ? void 0 : t[null == e ? void 0 : e.viewsMainTabId]) || [] : h[l] ? ? [];
                        return (0, o(168908).jS)(l, r)
                    }, [l, h, null == e ? void 0 : e.viewsMainTabId], {
                        equalityFn: o(381453).n4
                    }),
                    j = _.nonMoveableHeaderModules,
                    I = (0, r.useMemo)(() => "moveableCenterModules" in _ ? _.moveableCenterModules : [], [_]),
                    S = (0, r.useMemo)(() => "moveableFooterModules" in _ ? _.moveableFooterModules : [], [_]),
                    w = _.nonMoveableFooterModules,
                    T = (0, o(682985).K8)(() => {
                        let e = y.state;
                        if (null == e || !e.isDragging) return {
                            isDraggingIntoThisArea: !1,
                            isDraggingFromThisAreaToOtherArea: !1,
                            isDraggingAnyModuleList: !1,
                            dragArea: void 0
                        }; {
                            let t = e.draggingModuleInitialArea,
                                o = e.draggingModuleFinalArea;
                            return {
                                isDraggingIntoThisArea: t.area !== l && o.area === l,
                                isDraggingFromThisAreaToOtherArea: t.area === l && o.area !== l,
                                isDraggingAnyModuleList: !0,
                                dragArea: o
                            }
                        }
                    }, [l, y]),
                    A = (0, r.useMemo)(() => I.map(e => {
                        let t = "form_layout_schema" !== l || "placeholder" !== e.type;
                        return {
                            key: e.id,
                            draggable: t
                        }
                    }), [l, I]),
                    C = (0, o(682985).K8)(() => c.getCollectionFormat(), [c]),
                    k = (0, r.useMemo)(() => i(S, C).map(e => ({
                        key: e.id,
                        draggable: !0
                    })), [S, C]),
                    P = (0, r.useMemo)(() => new(o(883751)).A, []),
                    F = (0, r.useMemo)(() => new(o(883751)).A, []),
                    B = (0, r.useMemo)(() => new(o(883751)).A, []),
                    D = (0, o(682985).K8)(() => P.state.isDragging, [P]),
                    E = (0, o(682985).K8)(() => F.state.isDragging, [F]),
                    L = (0, o(682985).K8)(() => B.state.isDragging, [B]),
                    R = (0, o(682985).K8)(() => {
                        var e;
                        return null == (e = c.getModel()) ? void 0 : e.getLayoutType()
                    }, [c]);
                (0, r.useEffect)(() => {
                    v.current && T.isDraggingIntoThisArea && (0, o(564095).scrollIntoViewIfNeeded)({
                        element: v.current,
                        environment: s,
                        additionalPadding: {
                            top: 200,
                            bottom: 200
                        }
                    })
                }, [T.isDraggingIntoThisArea, s]);
                let O = (0, r.useCallback)(t => {
                        let r = c.getModuleById(t);
                        if (r && !(0, o(940371)._)(r)) return;
                        let i = "views_main_tab_modules" === l ? {
                            area: "views_main_tab_modules",
                            viewsMainTabId: e.viewsMainTabId
                        } : {
                            area: l
                        };
                        g({
                            type: "existing_module",
                            moduleId: t,
                            isDragging: !0,
                            draggingModuleInitialArea: i,
                            draggingModuleFinalArea: i
                        })
                    }, [l, c, e.viewsMainTabId, g]),
                    H = (0, r.useCallback)(e => {
                        if (e) {
                            let t = c.getModuleById(e);
                            if (t && !(0, o(940371)._)(t)) return void g(void 0);
                            g({
                                type: "existing_module",
                                moduleId: e,
                                isDragging: !1
                            })
                        }
                    }, [c, g]),
                    K = (0, r.useCallback)(() => {
                        let e = y.state,
                            t = c.getLayoutType();
                        t && (0, o(294730).Hc)(t) ? g(void 0) : null != e && e.isDragging && y.setState({ ...e,
                            isDragging: !1,
                            draggingModuleInitialArea: void 0,
                            draggingModuleFinalArea: void 0
                        })
                    }, [y, g, c]),
                    Q = (0, r.useCallback)(e => {
                        let t = y.state,
                            r = null != t && t.isDragging ? t.draggingModuleFinalArea : void 0;
                        (null == r ? void 0 : r.area) !== "form_conditional_modules" && (null != e && e.key && r && r.area !== l && ((0, o(18028).E)({
                            environment: s,
                            position: {
                                type: "area_relative",
                                location: "end_moveable",
                                ..."views_main_tab_modules" === r.area ? {
                                    area: r.area,
                                    viewId: r.viewsMainTabId
                                } : {
                                    area: r.area
                                }
                            },
                            moduleId: e.key,
                            layoutStore: c,
                            sessionId: d
                        }), (0, o(481902).z)({
                            moduleId: e.key,
                            layoutStore: c,
                            environment: s
                        })), K())
                    }, [y, l, K, s, c, d]),
                    V = (0, r.useCallback)((t, {
                        key: r,
                        endPosition: i,
                        startPosition: n
                    }) => {
                        var a;
                        if (T.isDraggingFromThisAreaToOtherArea) return;
                        let u = null == (a = c.getModuleById(r)) ? void 0 : a.type,
                            p = void 0 !== u && o(321779).PF.includes(u) ? j.length + I.length : j.length,
                            g = "views_main_tab_modules" === l ? {
                                area: "views_main_tab_modules",
                                viewId: e.viewsMainTabId
                            } : {
                                area: l
                            };
                        (0, o(18028).E)({
                            environment: s,
                            layoutStore: c,
                            position: {
                                type: "absolute",
                                index: p + i,
                                ...g
                            },
                            moduleId: r,
                            sessionId: d
                        }), (0, o(481902).z)({
                            moduleId: r,
                            layoutStore: c,
                            environment: s
                        })
                    }, [T.isDraggingFromThisAreaToOtherArea, j.length, I.length, l, e.viewsMainTabId, s, c, d]),
                    G = (0, o(960253).I)(() => ({
                        draggableList: {
                            marginBottom: M
                        },
                        addButtonContainer: {
                            paddingTop: 8 * ("page_in_collection" === R),
                            marginBottom: 12 * ("form" !== R),
                            width: "100%"
                        }
                    }), [M, R]),
                    z = (0, r.useCallback)(e => {
                        let t = (null == p ? void 0 : p.type) === "existing_module" && p.moduleId === e,
                            o = t && (D || E || L);
                        return (0, a.jsx)(eB, {
                            active: t,
                            pageModuleId: e,
                            isDragging: o,
                            area: l,
                            style: o && T.isDraggingFromThisAreaToOtherArea ? eq.hiddenModuleStyle : void 0
                        }, e)
                    }, [T.isDraggingFromThisAreaToOtherArea, p, l, D, E, L]),
                    N = (0, r.useMemo)(() => j.length ? j.map(e => z(e.id)) : null, [j, z]),
                    q = (0, r.useMemo)(() => w.length ? w.map(e => z(e.id)) : null, [w, z]),
                    W = (0, r.useMemo)(() => ({
                        enter: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        }
                    }), []),
                    $ = (0, r.useMemo)(() => ({
                        buttonContainer: G.addButtonContainer
                    }), [G.addButtonContainer]);
                return c ? (t = !!m && (!x || "views_main_tab_modules" === l || "page_details" === l), (0, a.jsxs)(a.Fragment, {
                    children: [N, A.length ? (0, a.jsx)(o(66467).Ay, {
                        forceDragKeyIndex: T.isDraggingFromThisAreaToOtherArea ? A.length - 1 : void 0,
                        className: o(394112).hg,
                        store: F,
                        keys: A,
                        direction: "vertical",
                        onDraggingKeyChanged: O,
                        onDrop: V,
                        onDragCancel: K,
                        onDragEnd: Q,
                        onClick: H,
                        style: G.draggableList,
                        gap: M,
                        draggingStyle: eN,
                        draggingStyleForNonDraggedItems: eN,
                        renderKey: z,
                        disabled: !m,
                        ...!x ? {
                            hoverCursorStyleOverride: T.isDraggingAnyModuleList ? "grabbing" : void 0
                        } : {}
                    }) : void 0, (0, a.jsx)(o(654979).A, {
                        visible: T.isDraggingIntoThisArea,
                        initial: W.enter,
                        animate: W.animate,
                        exit: W.exit,
                        skip: !T.isDraggingAnyModuleList,
                        className: "layout-content",
                        ref: v,
                        style: eq.dropzoneHalo
                    }), t ? (0, a.jsx)(f, { ...e,
                        styles: $
                    }) : void 0, "form" === R && m ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(b, {}), (0, a.jsx)(u, {
                            area: l
                        })]
                    }) : void 0, k.length ? (0, a.jsx)(o(66467).Ay, {
                        forceDragKeyIndex: T.isDraggingFromThisAreaToOtherArea ? k.length - 1 : void 0,
                        className: o(394112).hg,
                        store: B,
                        keys: k,
                        direction: "vertical",
                        onDraggingKeyChanged: O,
                        onDrop: V,
                        onDragCancel: K,
                        onDragEnd: Q,
                        onClick: H,
                        style: G.draggableList,
                        gap: M,
                        draggingStyle: eN,
                        draggingStyleForNonDraggedItems: eN,
                        renderKey: z,
                        disabled: !m,
                        ...!x ? {
                            hoverCursorStyleOverride: T.isDraggingAnyModuleList ? "grabbing" : void 0
                        } : {}
                    }) : void 0, q]
                })) : null
            }
        },
        143339: (e, t, o) => {
            o.d(t, {
                H: () => n,
                o: () => i
            });
            var r = o(296540);
            let i = (0, r.createContext)(null);

            function n() {
                let e = (0, r.useContext)(i);
                return e || new(o(726792)).A
            }
            i.displayName = "FormBlockContext"
        },
        342685: (e, t, o) => {
            o.d(t, {
                Ai: () => i,
                EJ: () => l,
                M8: () => a,
                TX: () => d,
                Yj: () => r,
                cf: () => s
            }), o(581454);
            let r = 12,
                i = (0, o(109939).YK)({
                    anonymousSubmissionLabel: {
                        id: "FormBlock.anonymousSubmissionLabel",
                        defaultMessage: "Submitting response anonymously"
                    }
                }),
                n = (0, o(109939).YK)({
                    inaccessibleTitle: {
                        id: "FormBlock.inaccessible.title",
                        defaultMessage: "This form is not publicly available."
                    },
                    inaccessibleSubtitle: {
                        id: "FormBlock.inaccessible.subtitle",
                        defaultMessage: "Login to submit or contact the form creator to publish."
                    },
                    closedOrDeletedTitle: {
                        id: "FormBlock.closedOrDeleted.title",
                        defaultMessage: "This form is closed or deleted."
                    },
                    closedOrDeletedSubtitle: {
                        id: "FormBlock.closedOrDeleted.subtitle",
                        defaultMessage: "Try contacting the form owner if you think it’s a mistake."
                    },
                    submissionErrorTitle: {
                        id: "FormBlock.submissionError.title",
                        defaultMessage: "Something went wrong."
                    },
                    submissionErrorSubtitle: {
                        id: "FormBlock.submissionError.subtitle",
                        defaultMessage: "There was an issue submitting the form. Please try again or contact the form owner."
                    }
                }),
                l = {
                    closedOrDeleted: n.closedOrDeletedTitle,
                    inaccessible: n.inaccessibleTitle,
                    submissionError: n.submissionErrorTitle
                },
                a = {
                    closedOrDeleted: n.closedOrDeletedSubtitle,
                    inaccessible: n.inaccessibleSubtitle,
                    submissionError: n.submissionErrorSubtitle
                };

            function s({
                questionType: e,
                filePropertyIdToFormFiles: t,
                draftSubmissionPageStore: r,
                propertyId: i
            }) {
                switch (e) {
                    case "checkbox":
                        return "Yes" === (0, o(536614).r4)(r.getPropertyValue(i), r) ? "true" : "false";
                    case "file":
                        return ((null == t ? void 0 : t[i]) ? ? []).map(e => e.fileName).join(", ");
                    case "text":
                    case "title":
                    case "select":
                    case "multi_select":
                    case "relation":
                    case "date":
                    case "person":
                    case "number":
                    case "email":
                    case "url":
                    case "phone_number":
                    case "place":
                        return (0, o(536614).r4)(r.getPropertyValue(i), r);
                    default:
                        (0, o(722371).HB)(e)
                }
            }

            function d(e) {
                return e ? 500 : 600
            }
        },
        372255: (e, t, o) => {
            async function r({
                collectionContextStore: e,
                environment: t,
                property: n,
                from: l,
                schema: a,
                theme: s,
                themeMode: d,
                onDeleteCompleted: u,
                ...c
            }) {
                let p = !!a[n] && (0, o(840403).J)(a[n]);
                await o(16131).q({
                    environment: t,
                    collectionContextStore: e,
                    property: n,
                    handleDeleteAccept: async () => {
                        await i({
                            collectionContextStore: e,
                            environment: t,
                            property: n,
                            schema: a,
                            from: l,
                            permanentlyDelete: p,
                            ...c
                        }), null == u || u()
                    },
                    theme: s,
                    themeMode: d,
                    from: l,
                    isPermanentlyDelete: p
                })
            }
            async function i(e) {
                let {
                    collectionContextStore: t,
                    environment: r,
                    property: i,
                    schema: n,
                    from: l,
                    permanentlyDelete: a,
                    ...s
                } = e, d = t.collectionStore();
                if (!d) return;
                let u = d.getSchema()[i];
                await (0, o(377796).createAndCommitAsync)({
                    environment: r,
                    userAction: "TableHeaderCell.handleDeleteAccept",
                    waitForServerCommit: !1,
                    perform: async e => {
                        await (0, o(645430).P)({
                            environment: r,
                            collectionStore: d,
                            schema: n,
                            property: i,
                            transaction: e,
                            permanentlyDelete: a
                        }), s.updateFrozenColumn && o(529312).sp({
                            environment: r,
                            collectionContextStore: t,
                            currentIndex: s.columnIndex,
                            entrypoint: s.updateFrozenColumnEntrypoint,
                            transaction: e,
                            propertyAction: "delete"
                        })
                    }
                }), u && (0, o(431666).i)({
                    environment: r,
                    collectionStore: t.collectionStore(),
                    collectionViewStore: t.collectionViewStore(),
                    property_type: u.type,
                    from: l,
                    property: i
                })
            }
            o.d(t, {
                B: () => i,
                I: () => r
            })
        },
        437263: (e, t, o) => {
            o.d(t, {
                j: () => n
            }), o(296540);
            var r = o(474848);
            let i = {
                questionTitleInput: {
                    padding: "0px 10px",
                    margin: "10px 0px",
                    fontSize: 24,
                    lineHeight: "30px",
                    borderRadius: 6,
                    fontWeight: o(699422).Wy.bold,
                    cursor: "text",
                    textWrap: "wrap",
                    width: "fit-content"
                },
                viewQuestionTitleOverrides: {
                    display: "block",
                    margin: 0,
                    padding: "6px 0px",
                    whiteSpace: "pre-wrap",
                    maxWidth: "100%",
                    wordBreak: "break-word"
                }
            };

            function n({
                disabled: e,
                onChange: t,
                formQuestionStore: l,
                formMode: a
            }) {
                let s = (0, o(109939).tz)(),
                    d = (0, o(143339).H)(),
                    {
                        parentBlockStore: u,
                        questionNameStore: c,
                        isRequired: p
                    } = (0, o(682985).K8)(() => ({
                        parentBlockStore: l.getParentStore(),
                        questionNameStore: l.getNameStore(),
                        isRequired: l.isRequired()
                    }), [l]),
                    g = (0, o(682985).K8)(() => {
                        var e, t;
                        let r = d.getFormState();
                        if (!r) return;
                        let i = r.collectionSchema,
                            n = null == (e = l.getConfig()) ? void 0 : e.propertyId;
                        if (i && n) return null == (t = (0, o(561872)._g)({
                            schema: i,
                            property: n
                        })) ? void 0 : t.type
                    }, [l, d]),
                    m = (0, o(682985).K8)(() => d.getQuestionError(l.id), [d, l.id]),
                    y = (0, o(960253).I)(() => ({
                        pseudoAfter: {
                            content: "'*'",
                            color: "required" === m ? o(632079).Tj.palette.red[500] : o(632079).Tj.text.tertiary,
                            fontWeight: o(699422).Wy.regular
                        }
                    }), [m]),
                    f = (0, o(377625).x)({
                        textStore: c,
                        spaceId: l.pointer.spaceId,
                        parentStore: u,
                        disabled: !1
                    });
                return "builder" === a ? (0, r.jsx)("div", {
                    className: "form-question-title",
                    children: (0, r.jsx)(o(49847).B, {
                        store: c,
                        onChange: t,
                        disabled: e,
                        placeholder: "builder" === a ? s.formatMessage({
                            id: "FormQuestionTitle.placeholder",
                            defaultMessage: "Question name"
                        }) : void 0,
                        ...(0, o(762507).ow)({ ...i.questionTitleInput,
                            ...p ? {
                                pseudoAfter: y.pseudoAfter
                            } : {}
                        })
                    })
                }) : "multi_select" === g ? (0, r.jsx)("legend", {
                    className: "form-question-title",
                    ...(0, o(762507).ow)({ ...i.questionTitleInput,
                        ...i.viewQuestionTitleOverrides,
                        ...p ? {
                            pseudoAfter: y.pseudoAfter
                        } : {}
                    }),
                    children: f
                }) : "file" === g ? (0, r.jsx)("div", {
                    className: "form-question-title",
                    ...(0, o(762507).ow)({ ...i.questionTitleInput,
                        ...i.viewQuestionTitleOverrides,
                        ...p ? {
                            pseudoAfter: y.pseudoAfter
                        } : {}
                    }),
                    id: `form-question-${l.id}`,
                    children: f
                }) : (0, r.jsx)("h2", {
                    id: `form-question-title-${l.id}`,
                    className: "form-question-title",
                    ...(0, o(762507).ow)({ ...i.questionTitleInput,
                        ...i.viewQuestionTitleOverrides,
                        ...p ? {
                            pseudoAfter: y.pseudoAfter
                        } : {}
                    }),
                    children: f
                })
            }
        },
        459843: (e, t, o) => {
            o.d(t, {
                B: () => r
            });
            let r = 160
        },
        481902: (e, t, o) => {
            o.d(t, {
                z: () => r
            });

            function r({
                layoutStore: e,
                moduleId: t,
                environment: i
            }) {
                setTimeout(() => {
                    ! function({
                        layoutStore: e,
                        moduleId: t,
                        environment: r
                    }) {
                        let i = o(581771).A.findModuleContainer({
                                layoutStore: e,
                                moduleId: t
                            }),
                            n = null == i ? void 0 : i.getNode();
                        n && (0, o(564095).scrollIntoViewIfNeeded)({
                            element: n,
                            environment: r,
                            additionalPadding: {
                                top: 100,
                                bottom: 100
                            }
                        })
                    }({
                        layoutStore: e,
                        moduleId: t,
                        environment: i
                    })
                }, 100)
            }
        },
        567316: (e, t, o) => {
            o.d(t, {
                Z: () => r
            }), o(944114);

            function r({
                visibility: e,
                property: t,
                schema: i,
                collectionStore: n,
                format: l,
                environment: a,
                transaction: s
            }) {
                let d = l.collection_page_sections ? o(381453).mg(l.collection_page_sections) : [];
                if (!i[t]) return;
                let u = d.findIndex(e => e.section === t);
                (-1 !== u ? d[u] = {
                    section: t,
                    visibility: e
                } : d.push({
                    section: t,
                    visibility: e
                }), d) && ((0, o(377796).createAndCommitOrAppend)({
                    userAction: "PagePropertiesRowName.handleShowAsClick",
                    environment: a,
                    canUndo: !0,
                    cellTarget: n.pointer.spaceId ? {
                        spaceWithId: n.pointer.spaceId
                    } : void 0,
                    transaction: s,
                    perform: e => {
                        o(453042).LK({
                            environment: a,
                            pageSectionFormats: d,
                            store: n,
                            transaction: e
                        })
                    }
                }), (0, o(195857).DO_NOT_USE_trackLegacy)("relation_show_as", {
                    from: "relation_section",
                    mode: "inline" === e ? "page_section" : "minimal" === e ? "minimal_page_section" : "property"
                }))
            }
        },
        581771: (e, t, o) => {
            o.d(t, {
                A: () => n
            }), o(898992), o(672577);
            var r = () => o(375622);
            class i extends r().A {
                findModuleContainer({
                    layoutStore: e,
                    moduleId: t
                }) {
                    return this.find(o => o.layoutStore === e && o.moduleId === t)
                }
            }
            let n = new i
        },
        611455: (e, t, o) => {
            o.d(t, {
                P: () => i
            }), o(296540);
            var r = o(474848);

            function i({
                disabled: e,
                formQuestionStore: t,
                formMode: n
            }) {
                let l = (0, o(109939).tz)(),
                    a = (0, o(960253).I)(() => ({
                        questionDescriptionInput: {
                            cursor: "text",
                            fontSize: 16,
                            color: o(632079).Tj.text.secondary,
                            padding: "builder" === n ? "4px 10px" : "4px 0px",
                            width: "fit-content"
                        }
                    }), [n]),
                    {
                        questionDescriptionStore: s,
                        questionDescription: d,
                        showDescription: u
                    } = (0, o(682985).K8)(() => {
                        var e;
                        let r = t.getDescriptionStore().getValue();
                        return {
                            showDescription: !!(null == (e = t.getConfig()) ? void 0 : e.showDescription),
                            questionDescriptionStore: t.getDescriptionStore(),
                            questionDescription: r ? (0, o(247438).q4_)(r) : void 0
                        }
                    }, [t]);
                return u && ("viewer" !== n || d) ? (0, r.jsx)(o(49847).B, {
                    store: s,
                    style: a.questionDescriptionInput,
                    disabled: e,
                    placeholder: l.formatMessage({
                        id: "FormQuestionDescription.placeholder",
                        defaultMessage: "Add description"
                    }),
                    id: `form-description-${t.id}`
                }) : null
            }
        },
        625926: (e, t, o) => {
            o.d(t, {
                Y1: () => p,
                zE: () => d
            }), o(18107), o(967357);
            var r = o(296540),
                i = o(474848);

            function n({
                onAfterAddIconClick: e,
                disabled: t,
                formBlockStore: r
            }) {
                return (0, o(682985).K8)(() => !!(r.getIcon() && r.getCover()), [r]) ? null : (0, i.jsx)(o(306472).A, {
                    store: r,
                    context: o(166654).R.Form,
                    children: t ? void 0 : (0, i.jsx)(l, {
                        onAfterAddIconClick: e
                    })
                })
            }

            function l({
                onAfterAddIconClick: e
            }) {
                let {
                    formBlockStore: t,
                    headerFocusStore: r,
                    headerMouseStore: n
                } = (0, o(300531).cJ)(), a = (0, o(533992).Y0)(), s = (0, o(682985).K8)(() => {
                    let e = n.state.mouseEntered || r.state;
                    return (0, o(865594).g1)(e)
                }, [r, n]), {
                    hasIcon: d,
                    hasCover: u
                } = (0, o(682985).K8)(() => ({
                    hasIcon: !!t.getIcon(),
                    hasCover: !!t.getCover()
                }), [t]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [d ? void 0 : (0, i.jsx)(o(261428).A, {
                        store: t,
                        afterOnClick: e,
                        style: s,
                        label: a.isSmallPhone ? (0, i.jsx)(o(109939).sA, {
                            id: "FormHeaderControls.iconMobile",
                            defaultMessage: "Icon"
                        }) : (0, i.jsx)(o(109939).sA, {
                            id: "FormHeaderControls.icon",
                            defaultMessage: "Form icon"
                        })
                    }), u ? void 0 : (0, i.jsx)(o(204729).A, {
                        store: t,
                        style: s,
                        label: a.isSmallPhone ? (0, i.jsx)(o(109939).sA, {
                            id: "FormHeaderControls.pageCoverMobile",
                            defaultMessage: "Cover"
                        }) : (0, i.jsx)(o(109939).sA, {
                            id: "FormHeaderControls.pageCover",
                            defaultMessage: "Form cover"
                        }),
                        from: "form_page_header"
                    })]
                })
            }
            let a = {
                    marginTop: 16
                },
                s = {
                    cursor: "text",
                    paddingInline: 4
                };

            function d({
                formBlockStore: e,
                formMode: t,
                disabled: l,
                headerFocusStore: c,
                onHeaderMouseEnter: p,
                onHeaderMouseLeave: g,
                aliasStore: m,
                formBlockWidth: y
            }) {
                let f = (0, o(109939).tz)(),
                    [v, h] = (0, r.useState)(!1),
                    b = (0, r.useCallback)(() => {
                        h(!0)
                    }, []),
                    x = (0, r.useCallback)(() => {
                        h(!1)
                    }, []),
                    {
                        hasCoverImage: M,
                        hasPageIcon: _,
                        formTitleStore: j,
                        formDescriptionStore: I
                    } = (0, o(682985).K8)(() => ({
                        hasCoverImage: !!(null == e ? void 0 : e.getCover()),
                        hasPageIcon: !!(null == e ? void 0 : e.getIcon()),
                        formTitleStore: null == e ? void 0 : e.getTitleStore(),
                        formDescriptionStore: e.getFormDescriptionStore()
                    }), [e]),
                    S = (0, o(682985).K8)(() => (0, o(247438).w9s)(I.getValue()), [I]),
                    w = (0, o(960253).I)(() => {
                        let e = "viewer" === t && o(986939).A.isMobile && _ ? 12 : 0,
                            r = (() => {
                                if ("builder" === t && _ && M) return 12;
                                if ("builder" === t) return 0;
                                if (m) {
                                    let e = "narrow" !== y || o(986939).A.isMobile ? 0 : -o(342685).Yj;
                                    return _ || M ? 24 + e : 12 + e
                                }
                                return _ || M ? 24 : 48
                            })();
                        return {
                            container: {
                                marginTop: e,
                                marginInlineStart: 3 * ("builder" === t)
                            },
                            titleExtra: {
                                fontSize: 40,
                                fontWeight: o(699422).Wy.bold,
                                cursor: "text",
                                marginTop: r
                            }
                        }
                    }, [m, y, t, M, _]);
                return e && j ? (0, i.jsxs)("div", {
                    style: w.container,
                    children: [(0, i.jsx)(o(28847).H, {
                        store: e,
                        context: o(166654).R.Form,
                        isEditable: !l,
                        headerControls: (0, i.jsx)(n, {
                            onAfterAddIconClick: b,
                            disabled: l,
                            formBlockStore: e
                        }),
                        hasCover: M,
                        isInSidePeek: !1,
                        hideTitleIfEmpty: "viewer" === t,
                        headerFocusStore: c,
                        openMenuOnMount: v,
                        openMenuOnMountCallback: x,
                        disabled: l,
                        titlePlaceholder: f.formatMessage({
                            id: "formTitle.titlePlaceholder",
                            defaultMessage: "Form title"
                        }),
                        collectionContextStore: void 0,
                        shouldShowTemplatePicker: !1,
                        onTitleChange: o(763230).lQ,
                        onTitleEditText: o(763230).lQ,
                        onTitleEsc: o(763230).lQ,
                        onTitleUntab: o(763230).lQ,
                        onTitleTab: o(763230).lQ,
                        onMoveUp: o(763230).lQ,
                        onMoveDown: o(763230).lQ,
                        handleHeaderMouseEnter: p,
                        handleHeaderMouseLeave: g,
                        disableEnter: !0,
                        extraStyles: w.titleExtra,
                        layoutModule: u
                    }), "builder" !== t && S ? void 0 : (0, i.jsx)("div", {
                        style: a,
                        children: (0, i.jsx)(o(49847).B, {
                            store: I,
                            disabled: l,
                            placeholder: f.formatMessage({
                                id: "FormTitle.description.placeholder",
                                defaultMessage: "Description (optional)"
                            }),
                            style: s
                        })
                    })]
                }) : null
            }
            let u = {
                    id: "titleWithIcon",
                    type: "normalizedTitleWithIcon",
                    propertyIds: []
                },
                c = {
                    marginInlineEnd: 6,
                    marginInlineStart: -2
                };

            function p({
                collectionContextStore: e,
                formBlockStore: t
            }) {
                let r = (0, o(533992).v3)(),
                    n = (0, o(682985).K8)(() => (0, o(974410).f)(t), [t]),
                    l = (0, o(682985).K8)(() => n ? (0, o(742197).G)(r, n) : "", [r, n]),
                    {
                        isFormPublic: a,
                        isFormClosed: s
                    } = (0, o(682985).K8)(() => ({
                        isFormPublic: t.getIsFormPublic(),
                        isFormClosed: t.getIsFormClosed()
                    }), [t]),
                    d = (0, o(682985).K8)(() => {
                        let e = o(105692).subscriptionDataStoreInstance.state;
                        return !!(e && n && (0, o(34504).V)(r, e, n.id))
                    }, [r, n]),
                    u = (0, o(682985).K8)(() => d ? "closed" : (0, o(805999).C0)({
                        isFormPublic: a,
                        isFormClosed: s
                    }), [a, s, d]),
                    g = (0, o(682985).K8)(() => {
                        let t = e.collectionViewBlockStore();
                        return !!t && t.canEditMembership()
                    }, [e]),
                    m = (0, o(960253).e)(),
                    y = (0, o(960253).I)(() => {
                        let e = () => {
                            switch (u) {
                                case "shared_to_web":
                                    return {
                                        light: {
                                            color: o(632079).Tj.yellow.text.secondary,
                                            background: o(632079).Tj.yellow.background.secondaryTranslucent
                                        },
                                        dark: {
                                            color: o(632079).Tj.yellow.text.secondary,
                                            background: o(632079).Tj.yellow.background.secondaryTranslucent
                                        }
                                    };
                                case "shared_to_space":
                                    return {
                                        light: {
                                            color: o(632079).Tj.text.secondary,
                                            background: o(632079).Tj.background.secondaryTranslucent
                                        },
                                        dark: {
                                            color: o(632079).Tj.text.secondary,
                                            background: o(632079).Tj.background.secondaryTranslucent
                                        }
                                    };
                                case "closed":
                                    return {
                                        light: {
                                            color: o(632079).Tj.palette.red[500],
                                            background: o(632079).Tj.palette.red[50]
                                        },
                                        dark: {
                                            color: o(632079).Tj.palette.red[600],
                                            background: o(632079).Tj.palette.red[200]
                                        }
                                    }
                            }
                        };
                        return {
                            container: {
                                color: e()[m].color,
                                background: e()[m].background,
                                borderRadius: 6,
                                width: "100%",
                                padding: "10px 22px",
                                marginTop: 24,
                                fontSize: 14,
                                display: "flex",
                                alignItems: "center"
                            },
                            changePermissionButton: {
                                marginInlineEnd: -4,
                                color: e()[m].color,
                                fontWeight: o(699422).Wy.medium
                            },
                            changePermissionButtonHovered: {
                                backgroundColor: (0, o(650342).X4)(e()[m].color, .1)
                            },
                            changePermissionButtonPressed: {
                                backgroundColor: (0, o(650342).X4)(e()[m].color, .2)
                            }
                        }
                    }, [u, m]),
                    f = (0, o(805999).ls)({
                        formSharingState: u,
                        spaceName: l,
                        isOverBlockLimit: d
                    });
                return (0, i.jsxs)("div", {
                    style: y.container,
                    children: [(0, i.jsx)("div", {
                        style: {
                            width: d ? "100%" : "90%",
                            marginInlineEnd: 10
                        },
                        children: (0, i.jsxs)(o(4458).fI, {
                            alignItems: "center",
                            children: [s || a || d ? void 0 : (0, i.jsx)("span", {
                                style: c,
                                children: (0, i.jsx)(o(16275).I, {
                                    icon: o(697198).lockSmallIcon,
                                    size: "sm"
                                })
                            }), f]
                        })
                    }), !d && g ? (0, i.jsx)(o(988022).p, {
                        style: y.changePermissionButton,
                        hoveredStyle: y.changePermissionButtonHovered,
                        pressedStyle: y.changePermissionButtonPressed,
                        onClick: () => {
                            var t, r;
                            let i = null == (t = e.collectionViewBlockStore()) ? void 0 : t.id,
                                n = (null == (r = o(496704).K.getMembersByDOMOrder({
                                    filter: e => e.getBlockStore().id === i
                                }).at(0)) ? void 0 : r.getNode()) ? ? null;
                            if (n instanceof Element) {
                                let t = e.isFullScreenStore.state ? n : n.parentElement;
                                (0, o(931511).v)(t, {
                                    edgeDist: 0,
                                    animate: !1
                                })
                            }
                            e.formShareMenuButtonPopupStore.setState({ ...e.formShareMenuButtonPopupStore.state,
                                open: !0
                            })
                        },
                        children: (0, i.jsx)(o(109939).sA, {
                            id: "editorFormResponderWarning.changePermission",
                            defaultMessage: "Change"
                        })
                    }) : void 0]
                })
            }
        },
        726792: (e, t, o) => {
            o.d(t, {
                A: () => p
            });
            var r = () => o(546605),
                i = () => o(896216),
                n = () => o(561872),
                l = () => o(801109),
                a = () => o(700369),
                s = () => o(350141),
                d = () => o(247438),
                u = () => o(287095);
            class c extends r().Store {
                getInitialState() {
                    return {
                        isLoaded: !1
                    }
                }
                getFormState() {
                    if (this.state.isLoaded) return this.state
                }
                getQuestionError(e) {
                    if (this.state.isLoaded) return this.state.formQuestionErrorMap.get(e)
                }
                updateFormState(e) {
                    this.state.isLoaded && this.setState({ ...this.state,
                        ...e
                    })
                }
                updateFilePropertyIdToFormFiles(e, t) {
                    var o;
                    if (!this.state.isLoaded) return;
                    let r = null == (o = this.getFormState()) ? void 0 : o.filePropertyIdToFormFiles;
                    this.updateFormState({
                        filePropertyIdToFormFiles: { ...r,
                            [e]: t((null == r ? void 0 : r[e]) ? ? [])
                        }
                    })
                }
                updateFormErrorMap(e, t) {
                    if (!this.state.isLoaded) return;
                    let o = this.state.collectionSchema;
                    if (!o) return;
                    let r = new Map;
                    for (let y of e) {
                        var c, p, g, m;
                        let e = y.id,
                            f = null == (c = y.getConfig()) ? void 0 : c.propertyId;
                        if (!f) continue;
                        let v = null == (p = this.state.draftFormBlockStore) ? void 0 : p.getProperties()[f],
                            h = (0, n()._g)({
                                schema: o,
                                property: f
                            });
                        if (h) {
                            if (y.isRequired() && null != (g = this.state.questionIdsVisibleAtLastSubmissionAttempt) && g.includes(e)) {
                                let t = this.state.filePropertyIdToFormFiles;
                                if ("file" === h.type) {
                                    if (((null == (m = t[f]) ? void 0 : m.length) ? ? 0) < 1) {
                                        r.set(e, "required");
                                        continue
                                    }
                                } else if ("checkbox" === h.type) {
                                    if (!0 !== (0, i().w)(v)) {
                                        r.set(e, "required");
                                        continue
                                    }
                                } else if ((0, d().w9s)(v)) {
                                    r.set(e, "required");
                                    continue
                                }
                            }
                            if (!(0, d().w9s)(v)) {
                                let o = (0, d().q4_)(v);
                                if ("number" === h.type && !(0, a().kf)(o, t)) {
                                    r.set(e, "invalid_number");
                                    continue
                                }
                                if ("email" === h.type && !(0, l().DT)(o)) {
                                    r.set(e, "invalid_email");
                                    continue
                                }
                                if ("url" === h.type && !(0, u().w)(o)) {
                                    r.set(e, "invalid_url");
                                    continue
                                }
                                if ("phone_number" === h.type && !(0, s().e)(o)) {
                                    r.set(e, "invalid_phone_number");
                                    continue
                                }
                            }
                        }
                    }
                    this.updateFormState({
                        formQuestionErrorMap: r
                    })
                }
            }
            let p = c
        },
        809682: (e, t, o) => {
            o.d(t, {
                W: () => i
            });
            var r = o(296540);

            function i(e) {
                let t = (0, o(533992).v3)(),
                    {
                        inMemoryRecordCacheName: i,
                        collectionSchemaPropertyIds: n,
                        collectionId: l,
                        spaceId: a,
                        formMode: s
                    } = e,
                    d = (0, o(143339).H)(),
                    u = (0, r.useMemo)(() => new(o(870941)).A({
                        name: i,
                        isTemporaryData: !0
                    }), [i]),
                    c = (0, o(682985).K8)(() => {
                        var e;
                        let r = null == (e = d.getFormState()) ? void 0 : e.draftFormBlockStore;
                        return r || o(936441).createDummyFormPage({
                            environment: t,
                            spaceId: a,
                            collectionSchemaPropertyIds: n,
                            temporaryRecordCache: u,
                            collectionId: l,
                            formMode: s
                        })
                    }, [l, n, t, d, s, a, u]);
                return (0, o(383953).l)(() => {
                    u.addCacheFallback(t.defaultRecordCache.inMemoryRecordCache), d.updateFormState({
                        draftFormBlockStore: c
                    })
                }), c
            }
        },
        915032: (e, t, o) => {
            o.d(t, {
                $: () => n
            });
            var r = o(296540),
                i = o(474848);
            let n = r.memo(r.forwardRef(function({
                collectionContextStore: e,
                property: t,
                getTitleOverride: n,
                ...l
            }, a) {
                let s = (0, o(682985).K8)(() => e.collectionStore(), [e]),
                    d = (0, o(682985).K8)(() => null == s ? void 0 : s.getDatabaseType(), [s]),
                    u = (0, o(682985).K8)(() => !!(s && d && (0, o(477203).j)({
                        appConfigs: (0, o(402276).appConfigs)(),
                        databaseType: d,
                        propertyId: t,
                        collectionStore: s
                    })), [s, d, t]),
                    c = (0, r.useCallback)(e => (0, o(463082).eF)(d, e), [d]),
                    p = (0, r.useCallback)(e => (0, i.jsx)(o(95582).A, { ...l,
                        ...e,
                        disabled: u,
                        disabledFeedback: u,
                        title: (null == n ? void 0 : n({
                            isRequiredProperty: u
                        })) ? ? (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Delete property",
                            id: "database.tableHeaderCell.deleteProperty"
                        }),
                        caption: o(986939).A.isMobile && u ? (0, o(463082).eF)(d) : null,
                        icon: u ? (0, i.jsx)("div", { ...e,
                            children: (0, i.jsx)(o(16275).I, {
                                icon: o(269298).lockFillIcon
                            })
                        }) : (0, i.jsx)(o(16275).I, {
                            icon: o(968411).trashIcon
                        }),
                        isRedOnHover: !0
                    }), [d, n, u, l]);
                return (0, i.jsx)(o(51831).m, {
                    placement: "left",
                    disableTooltip: !u,
                    content: c,
                    children: p
                })
            }))
        }
    }
]);