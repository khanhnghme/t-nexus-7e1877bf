"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [68028], {
        107126: (e, t, n) => {
            n.d(t, {
                g: () => r
            }), n(296540);
            var a = n(474848);
            let o = {
                    cursor: "default"
                },
                s = {
                    cursor: "pointer"
                },
                i = {
                    maxWidth: "240px",
                    width: "max-content",
                    display: "flex",
                    padding: "4px 6px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 2,
                    borderRadius: 4
                },
                l = {
                    paddingBottom: 1
                };

            function r({
                onClick: e,
                showIcon: t = !0,
                trialProducts: l
            }) {
                var d;
                let u, p = (d = t, u = (0, n(960253).e)(), (0, n(960253).I)(() => ({
                        badge: {
                            display: "flex",
                            flexDirection: "row",
                            gap: 4,
                            justifyContent: "center",
                            alignItems: "center",
                            color: n(632079).Tj.orange.icon.accentPrimary,
                            background: n(632079).Tj.orange.background.secondary,
                            padding: d ? "0px 6px 0px 4px" : "0px 6px",
                            height: d ? 22 : 20,
                            borderRadius: 6,
                            width: "fit-content"
                        },
                        badgeHover: {
                            background: n(713101).$[u].orange[100]
                        },
                        badgePressed: {
                            background: n(713101).$[u].orange[200]
                        }
                    }), [d, u])),
                    g = (0, n(533992).v3)(),
                    m = (0, n(972740).L)(),
                    h = (0, n(682985).K8)(() => m && (0, n(742197).G)(g, m), [g, m]),
                    f = (0, n(109939).tz)(),
                    y = (0, n(262166).R$)({
                        products: l,
                        intl: f
                    });
                return void 0 === e ? (0, a.jsx)("div", {
                    style: { ...p.badge,
                        ...o
                    },
                    children: (0, a.jsx)(c, {
                        showIcon: t
                    })
                }) : (0, a.jsx)(n(51831).m, {
                    placement: "bottom",
                    style: i,
                    content: () => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "inversePrimary",
                            children: (0, a.jsx)(n(109939).sA, {
                                id: "trialBadge.tooltip.title",
                                defaultMessage: "{hasSpaceName, select, true {{spaceName}} other {Your workspace}} is on a free {planName} trial",
                                values: {
                                    hasSpaceName: !!h,
                                    spaceName: h,
                                    planName: y
                                }
                            })
                        }), (0, a.jsx)(n(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "inverseSecondary",
                            children: (0, a.jsx)(n(109939).sA, {
                                id: "trialBadge.tooltip.description",
                                defaultMessage: "Click to learn more"
                            })
                        })]
                    }),
                    textWrap: !0,
                    children: o => (0, a.jsx)(n(64960).Ay, {
                        onClick: e,
                        style: { ...p.badge,
                            ...s
                        },
                        hoveredStyle: p.badgeHover,
                        pressedStyle: p.badgePressed,
                        ...o,
                        children: (0, a.jsx)(c, {
                            showIcon: t
                        })
                    })
                })
            }

            function c({
                showIcon: e
            }) {
                return (0, a.jsxs)(a.Fragment, {
                    children: [e ? (0, a.jsx)("span", {
                        style: l,
                        children: (0, a.jsx)(n(708966).Q, {
                            iconGroup: n(276160)._,
                            variantName: "small",
                            size: "xs",
                            colorPalette: "orange",
                            colorVariant: "accentPrimary"
                        })
                    }) : null, (0, a.jsx)(n(111010).D, {
                        styleKey: "captionMedium",
                        children: (0, a.jsx)(n(109939).sA, {
                            id: "trialBadge.title",
                            defaultMessage: "Free trial"
                        })
                    })]
                })
            }
        },
        152208: (e, t, n) => {
            n.r(t), n.d(t, {
                eyeIcon: () => s,
                iconDefinition: () => o
            }), n(296540);
            var a = n(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.96 4.19 18.07 11.62",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M10.17 6.694a3.307 3.307 0 0 1 3.135 3.303l-.005.17a3.305 3.305 0 0 1-3.3 3.137l-.17-.004a3.307 3.307 0 0 1-3.132-3.133l-.004-.17A3.307 3.307 0 0 1 10 6.69zm-.17 2.2a1.104 1.104 0 0 0 0 2.207 1.103 1.103 0 0 0 0-2.207"
                        }), (0, a.jsx)("path", {
                            d: "M10 4.194c3.878 0 7.26 2.075 8.862 5.127l.073.163c.126.333.126.7 0 1.033l-.073.163c-1.602 3.052-4.984 5.126-8.862 5.126-3.757 0-7.049-1.946-8.707-4.843l-.156-.283a1.46 1.46 0 0 1 0-1.359l.156-.283C2.95 6.141 6.243 4.194 10 4.194m0 1.251c-3.33 0-6.196 1.724-7.622 4.214l-.134.243a.21.21 0 0 0 0 .197l.134.243c1.426 2.49 4.292 4.214 7.622 4.214 3.437 0 6.38-1.837 7.756-4.457l.018-.048a.2.2 0 0 0 0-.1l-.018-.049C16.38 7.282 13.437 5.445 10 5.445"
                        })]
                    })
                },
                s = (0, n(104509).wt)("eye", o, "default")
        },
        168028: (e, t, n) => {
            n.d(t, {
                J: () => u
            }), n(944114);
            var a = n(296540);
            let o = (0, n(109939).YK)({
                showHideWidgetsTitle: {
                    id: "HomeTopbarActionButtons.showHideWidgets",
                    defaultMessage: "Show/hide widgets"
                },
                tasksAndCustomTitle: {
                    id: "HomeTopbarActionButtons.databaseViews",
                    defaultMessage: "Database views"
                }
            });
            n(898992), n(354520), n(581454);
            var s = n(474848);
            let i = {
                    greeting: {
                        key: "greeting",
                        label: (0, s.jsx)(n(109939).sA, {
                            id: "HomeFeaturesMenu.greeting.label",
                            defaultMessage: "Greeting"
                        }),
                        defaultValue: !0
                    },
                    tasks: {
                        key: "tasks",
                        label: (0, s.jsx)(n(109939).sA, {
                            id: "HomeFeaturesMenu.tasks.label",
                            defaultMessage: "My Tasks"
                        })
                    },
                    custom_db: {
                        key: "custom_db",
                        label: (0, s.jsx)(n(109939).sA, {
                            id: "HomeFeaturesMenu.customDb.label",
                            defaultMessage: "Database Views"
                        })
                    },
                    tips: {
                        key: "tips",
                        label: (0, s.jsx)(n(109939).sA, {
                            id: "HomeFeaturesMenu.tips.label",
                            defaultMessage: "Learn"
                        })
                    },
                    templates: {
                        key: "templates",
                        label: (0, s.jsx)(n(109939).sA, {
                            id: "HomeFeaturesMenu.templates.label",
                            defaultMessage: "Featured Templates"
                        }),
                        shouldShow: ({
                            device: e
                        }) => !n(986939).A.isMobile
                    },
                    calendar: {
                        key: "calendar",
                        label: (0, s.jsx)(n(109939).sA, {
                            id: "HomeFeaturesMenu.calendar.label",
                            defaultMessage: "Upcoming Events"
                        }),
                        shouldShow: ({
                            device: e,
                            spaceStore: t
                        }) => (0, n(194685).x)({
                            isPhone: e.isPhone,
                            spaceStore: t
                        })
                    },
                    suggested: {
                        key: "suggested",
                        label: (0, s.jsx)(n(109939).sA, {
                            id: "HomeFeaturesMenu.suggested.label",
                            defaultMessage: "Suggested for you"
                        }),
                        shouldShow: ({
                            device: e,
                            environment: t,
                            spaceStore: a
                        }) => {
                            var o;
                            let s = (0, n(419144).Az)({
                                    environment: t
                                }),
                                i = null == a || null == (o = a.getSettings()) ? void 0 : o.show_home_virtual_views;
                            return s && !1 !== i
                        }
                    },
                    trending: {
                        key: "trending",
                        label: (0, s.jsx)(n(109939).sA, {
                            id: "HomeFeaturesMenu.trending.label",
                            defaultMessage: "Trending"
                        }),
                        shouldShow: ({
                            device: e,
                            environment: t,
                            spaceStore: a
                        }) => {
                            var o;
                            let s = (0, n(419144).Az)({
                                    environment: t
                                }),
                                i = null == a || null == (o = a.getSettings()) ? void 0 : o.show_home_virtual_views;
                            return s && !1 !== i
                        }
                    },
                    shortcuts: {
                        key: "shortcuts",
                        label: (0, s.jsx)(n(109939).sA, {
                            id: "HomeFeaturesMenu.shortcuts.label",
                            defaultMessage: "Shortcuts"
                        }),
                        shouldShow: ({}) => {
                            let e = (0, n(271349).$Q)();
                            return !n(986939).A.isMobile && e
                        }
                    }
                },
                l = ["greeting", "shortcuts", "calendar", "tasks", "custom_db", "suggested", "trending", "tips", "templates"],
                r = a.memo(function({
                    parent: e
                }) {
                    let t, r = (0, n(533992).v3)(),
                        c = (0, n(109939).tz)(),
                        d = (0, n(533992).Y0)(),
                        u = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore),
                        p = (0, n(682985).K8)(() => l.map(e => i[e]).filter(e => {
                            var t;
                            return (null == (t = e.shouldShow) ? void 0 : t.call(e, {
                                device: d,
                                environment: r,
                                spaceStore: u
                            })) ? ? !0
                        }), [d, r, u]),
                        {
                            isPhone: g,
                            isElectron: m
                        } = (0, n(533992).Y0)(),
                        h = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore),
                        f = (0, n(682985).K8)(() => (0, n(654863).x)(h), [h]),
                        y = (0, a.useCallback)(e => {
                            h && n(578449).WO({
                                environment: r,
                                spaceViewStore: h,
                                feature: e,
                                from: "home_more_menu"
                            })
                        }, [h, r]);
                    t = g ? {
                        menuType: n(649476).gu.Modal,
                        title: c.formatMessage(o.showHideWidgetsTitle),
                        right: (0, s.jsx)(n(109939).sA, {
                            defaultMessage: "Done",
                            id: "settingItem.buttonPopup.done.label"
                        }),
                        onClickRight: e.close
                    } : {
                        menuType: n(649476).gu.Popup,
                        width: 200
                    };
                    let x = [{
                        key: "settings-item-section",
                        items: p.map(({
                            key: e,
                            label: t
                        }) => ({
                            key: e,
                            action: () => y(e),
                            render: a => (0, s.jsx)(n(95582).A, { ...a,
                                title: t,
                                shouldWrapCaption: !0,
                                isChecked: !!f[e]
                            })
                        }))
                    }];
                    return (0, s.jsx)(n(747369).A, { ...t,
                        children: (0, s.jsx)(n(558045).A, {
                            style: (0, n(1249).g)({
                                noDrag: m
                            }),
                            type: n(558045).O.Vertical,
                            sections: x.filter(n(722371).O9),
                            initialFocus: void 0
                        })
                    })
                }),
                c = a.memo(function({
                    onClose: e
                }) {
                    let t, o = (0, n(533992).v3)(),
                        i = (0, n(682985).K8)(() => (0, n(591311).S)(), []),
                        {
                            isPhone: l,
                            isElectron: r
                        } = (0, n(533992).Y0)(),
                        c = (0, n(682985).K8)(() => {
                            var e, t;
                            return (0, n(627446).Y)(o, {
                                space: null == (e = (0, n(328765).S)()) ? void 0 : e.getModel(),
                                spaceView: null == (t = n(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : t.getModel()
                            })
                        }, [o]),
                        d = (0, a.useCallback)(t => {
                            n(578449)._V({
                                userAction: "userHomeActions.setPersonalHomeAsLandingPage",
                                environment: o,
                                option: t,
                                from: "home_more_menu"
                            }), (0, n(562033).r)({
                                item: {
                                    label: (0, s.jsx)(n(109939).sA, {
                                        defaultMessage: "Updated default landing page",
                                        id: "openOnStartMenu.snackbar.updatedDefaultLandingPage"
                                    })
                                },
                                undoFunc: () => {
                                    (0, n(462446).t)({
                                        environment: o,
                                        preventSelectText: !0
                                    }), n(578449)._V({
                                        userAction: "userHomeActions.setPersonalHomeAsLandingPage.undo",
                                        environment: o,
                                        option: c,
                                        from: "home_toast_undo_button"
                                    })
                                }
                            }), e("selectedOption")
                        }, [c, o, e]);
                    t = l ? {
                        menuType: n(649476).gu.Modal,
                        title: (0, s.jsx)(n(109939).sA, {
                            id: "openOnStartMenuSetting.title",
                            defaultMessage: "Open on start"
                        }),
                        right: (0, s.jsx)(n(109939).sA, {
                            defaultMessage: "Done",
                            id: "settingItem.buttonPopup.done.label"
                        }),
                        onClickRight: () => e("clickedDone")
                    } : {
                        menuType: n(649476).gu.Popup,
                        width: 250,
                        onClickOutside: () => e("clickedOutside")
                    };
                    let u = i.map(({
                        key: e,
                        label: t,
                        icon: a
                    }) => ({
                        key: e,
                        action: () => d(e),
                        render: o => (0, s.jsx)(n(95582).A, { ...o,
                            title: t,
                            icon: (0, s.jsx)(n(16275).I, {
                                icon: a
                            }),
                            shouldWrapCaption: !0,
                            right: c === e ? (0, s.jsx)(n(16275).I, {
                                icon: n(971730).checkmarkSmallIcon,
                                size: "sm"
                            }) : void 0
                        })
                    }));
                    return (0, s.jsx)(n(747369).A, { ...t,
                        children: (0, s.jsx)(n(558045).A, {
                            style: (0, n(1249).g)({
                                noDrag: r
                            }),
                            type: n(558045).O.Vertical,
                            sections: [{
                                key: "settings-item-section",
                                items: u
                            }],
                            initialFocus: void 0
                        })
                    })
                }),
                d = {
                    marginInlineEnd: 6
                };

            function u(e) {
                let t = (0, n(533992).v3)(),
                    o = (0, n(109939).tz)(),
                    i = (0, n(533992).WS)(),
                    {
                        isElectronWindows: l
                    } = t.device,
                    r = (0, n(723240).r)(),
                    c = (0, n(226309).lh)({
                        spaceId: r
                    }),
                    u = (0, a.useRef)(null),
                    {
                        showTrialInfoModal: p
                    } = (0, n(429196).C)(),
                    m = (0, n(192159).N)(c),
                    h = (0, n(718012).V)(),
                    f = (0, n(153223).u)(),
                    y = (0, a.useCallback)(() => (0, n(167552).hY)({
                        environment: t
                    }), [t]),
                    x = (0, n(960253).I)(() => ({
                        button: i ? {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            paddingInlineStart: 8,
                            paddingInlineEnd: 8,
                            marginInlineEnd: 2
                        } : {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: n(440601).u7,
                            height: n(440601).nh,
                            borderRadius: 4
                        },
                        moreButtonStyle: i ? {} : {
                            width: 250,
                            maxHeight: "80vh"
                        }
                    }), [i]);
                return e.isInvalidPage ? null : (0, s.jsxs)(s.Fragment, {
                    children: [m.length > 0 ? (0, s.jsx)("div", {
                        style: d,
                        children: (0, s.jsx)(n(107126).g, {
                            onClick: () => {
                                p({
                                    openedFrom: "home_badge"
                                })
                            },
                            trialProducts: m
                        })
                    }) : null, (0, s.jsx)(n(656252).A, {
                        popupType: i ? n(656252).z.BottomSheet : n(656252).z.Popup,
                        bottomSheetInitialState: "half",
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "end",
                        content: e => (0, s.jsx)(g, {
                            mainMenuParent: e
                        }),
                        originGap: l ? 12 : 4,
                        forceInitialInbound: !0,
                        style: x.moreButtonStyle,
                        children: e => (0, s.jsx)(n(24884).n, {
                            step: "home_topbar_action_button",
                            isFullWidth: !1,
                            inAppCalloutStore: h,
                            teamIds: f,
                            children: (0, s.jsx)(n(64960).Ay, {
                                ariaLabel: o.formatMessage({
                                    id: "homeTopbarActionButtons.moreButton.ariaLabel",
                                    defaultMessage: "Open menu"
                                }),
                                style: x.button,
                                ...(0, n(63390).A)(e, {
                                    onClick: y
                                }),
                                ref: u,
                                children: i ? (0, s.jsx)(n(16275).I, {
                                    icon: n(397900).ellipsisIcon,
                                    size: "lg"
                                }) : (0, s.jsx)(n(16275).I, {
                                    icon: n(397900).ellipsisIcon,
                                    size: "lg",
                                    colorVariant: "primary"
                                })
                            })
                        })
                    })]
                })
            }
            let p = {
                helpMenuItem: {
                    color: (0, n(681693).EI)().text
                }
            };

            function g({
                mainMenuParent: e
            }) {
                let {
                    isPhone: t,
                    isElectron: a
                } = (0, n(533992).Y0)(), i = (0, n(533992).v3)(), l = (0, n(109939).tz)(), d = (0, n(442564).x)("guides.sidebarHome"), u = [{
                    key: "changeDefaultPage",
                    render: o => (0, s.jsx)(n(785267).A, { ...o,
                        stopClickPropagation: !0,
                        popupType: t ? n(656252).z.BottomSheet : n(656252).z.Popup,
                        bottomSheetInitialState: "half",
                        content: t => (0, s.jsx)(c, {
                            onClose: n => (({
                                immediateParent: t,
                                closeMainParent: n
                            }) => {
                                t.close(), n && e.close()
                            })({
                                immediateParent: t,
                                closeMainParent: "selectedOption" === n
                            })
                        }),
                        placementToOrigin: "left",
                        onClose: () => {
                            e.close()
                        },
                        children: e => (0, s.jsx)(n(95582).A, { ...(0, n(63390).A)(o, e),
                            icon: (0, s.jsx)(n(16275).I, {
                                icon: n(822084).pageIcon
                            }),
                            right: (0, s.jsx)(n(16275).I, {
                                icon: n(491469).arrowChevronSingleRightSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            }),
                            title: a ? (0, s.jsx)(n(109939).sA, {
                                id: "HomeTopbarActionButtons.changeStartPage.desktop",
                                defaultMessage: "Change default page"
                            }) : (0, s.jsx)(n(109939).sA, {
                                id: "HomeTopbarActionButtons.changeStartPage",
                                defaultMessage: "Change default start page"
                            })
                        })
                    }),
                    action: () => {}
                }];
                u.push({
                    key: "showHideTiles",
                    render: a => (0, s.jsx)(n(785267).A, { ...a,
                        stopClickPropagation: !0,
                        popupType: t ? n(656252).z.BottomSheet : n(656252).z.Popup,
                        content: e => (0, s.jsx)(r, {
                            parent: e
                        }),
                        placementToOrigin: "left",
                        onClose: () => {
                            e.close()
                        },
                        children: e => (0, s.jsx)(n(95582).A, { ...(0, n(63390).A)(a, e),
                            icon: (0, s.jsx)(n(16275).I, {
                                icon: n(152208).eyeIcon
                            }),
                            right: (0, s.jsx)(n(16275).I, {
                                icon: n(491469).arrowChevronSingleRightSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            }),
                            title: l.formatMessage(o.showHideWidgetsTitle)
                        })
                    }),
                    action: () => {}
                }), u.push({
                    key: "help",
                    render: e => (0, s.jsx)(n(95582).A, { ...e,
                        textWrapperStyle: p.helpMenuItem,
                        icon: (0, s.jsx)(n(16275).I, {
                            icon: n(80094).questionMarkCircleIcon,
                            colorVariant: "secondary"
                        }),
                        onClick: e => {
                            (0, n(167552).X$)({
                                environment: i
                            }), (0, n(624621).L)({
                                url: d,
                                environment: i
                            })
                        },
                        title: (0, s.jsx)(n(109939).sA, {
                            defaultMessage: "Learn about Home",
                            id: "personalHome.helpTooltip.title"
                        })
                    }),
                    action: () => {}
                });
                let m = [{
                    key: "all",
                    items: u
                }];
                return (0, s.jsx)(n(747369).A, {
                    menuType: t ? n(649476).gu.Modal : n(649476).gu.Popup,
                    children: (0, s.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        sections: m,
                        initialFocus: void 0
                    })
                })
            }
        },
        194685: (e, t, n) => {
            n.d(t, {
                x: () => a
            });

            function a({
                isPhone: e,
                spaceStore: t
            }) {
                return !e && (0, n(722371).O9)(t) && !(0, n(453737).d)({
                    spaceStore: t
                })
            }
        },
        276160: (e, t, n) => {
            n.d(t, {
                _: () => a
            });
            let a = (0, n(104509).xh)("present", {
                default: {
                    loader: () => n.e(2922).then(n.bind(n, 398126))
                },
                small: {
                    loader: () => n.e(2922).then(n.bind(n, 814812))
                },
                fill: {
                    loader: () => n.e(2922).then(n.bind(n, 560364))
                },
                fillSmall: {
                    loader: () => n.e(2922).then(n.bind(n, 570291))
                }
            }, ["gift", "box", "birthday", "reward", "celebration"])
        },
        419144: (e, t, n) => {
            n.d(t, {
                Az: () => p,
                Lt: () => l,
                Ol: () => i,
                U7: () => o,
                mh: () => s
            }), n(944114), n(898992), n(354520);
            var a = () => n(722371);
            let o = ["creative", "internal_communication", "eng", "product_design", "project_or_program_management", "product", "marketing", "sales_or_success", "support", "finance", "hr", "it_admin", "knowledge_management", "operations", "educator", "student"],
                s = ["life", "work", "school"],
                i = ["singleplayer", "multiplayer"];

            function l(e) {
                var t, n, o;
                let s, {
                    environment: i,
                    userPersonaValue: l,
                    userUseCases: p,
                    spaceSurveyData: g
                } = e;
                for (let e of [(t = l) ? d[t] : void 0, ... function({
                        userUseCases: e
                    }) {
                        let t = [];
                        for (let n of e ? ? []) switch (n) {
                            case "personal_notes_to_dos":
                                t.push({
                                    type: "space_intent",
                                    persona: "life"
                                });
                                continue;
                            case "team_docs_knowledge_base":
                            case "team_project_management":
                                t.push({
                                    type: "space_intent",
                                    persona: "work"
                                });
                                continue;
                            case "ai":
                            case "docs":
                            case "wikis":
                            case "notes":
                            case "project":
                            case "goals":
                            case "other":
                                continue;
                            default:
                                (0, a().HB)(n)
                        }
                        return t
                    }({
                        userUseCases: p
                    }), ... function({
                        spaceSurveyData: e
                    }) {
                        let t = [],
                            n = function({
                                spaceSurveyData: e
                            }) {
                                var t;
                                let n = null == e || null == (t = e.intent) ? void 0 : t.value;
                                if (n) switch (n) {
                                    case "personal":
                                    case "life":
                                        return "life";
                                    case "team":
                                    case "work":
                                        return "work";
                                    case "school":
                                        return "school";
                                    default:
                                        (0, a().HB)(n)
                                }
                            }({
                                spaceSurveyData: e
                            });
                        if (n && t.push({
                                type: "space_intent",
                                persona: n
                            }), null != e && e.use_cases)
                            for (let n of e.use_cases.value) switch (n) {
                                case "personal_notes_to_dos":
                                    t.push({
                                        type: "space_intent",
                                        persona: "life"
                                    });
                                    continue;
                                case "team_docs_knowledge_base":
                                case "team_project_management":
                                    t.push({
                                        type: "space_intent",
                                        persona: "work"
                                    });
                                    continue;
                                case "ai":
                                case "docs":
                                case "wikis":
                                case "notes":
                                case "project":
                                case "goals":
                                case "other":
                                    continue;
                                default:
                                    (0, a().HB)(n)
                            }
                        return t
                    }({
                        spaceSurveyData: g
                    }), function(e) {
                        let {
                            workspaceType: t
                        } = e;
                        return t ? u({
                            workspaceType: t
                        }) ? {
                            type: "space_type",
                            persona: "multiplayer"
                        } : {
                            type: "space_type",
                            persona: "singleplayer"
                        } : void 0
                    }({
                        workspaceType: c({
                            environment: i
                        })
                    })].filter(a().O9)) {
                    if (!s) {
                        s = e;
                        continue
                    }
                    n = s, o = e, s = r[n.type] >= r[o.type] ? n : o
                }
                return void 0 === s ? {
                    type: "space_type",
                    persona: "singleplayer"
                } : s
            }
            let r = {
                space_type: 0,
                space_intent: 1,
                function: 2
            };

            function c(e) {
                let {
                    environment: t
                } = e, a = (0, n(328765).S)();
                if (!a) return "singleplayer";
                let o = (0, n(616579).j)({
                    environment: t,
                    spaceId: a.id
                });
                return !o || o <= 1 ? "singleplayer" : o < 10 ? "multiplayer_small" : "multiplayer"
            }
            let d = {
                student: {
                    type: "function",
                    persona: "student"
                },
                educator: {
                    type: "function",
                    persona: "educator"
                },
                creative: {
                    type: "function",
                    persona: "creative"
                },
                finance: {
                    type: "function",
                    persona: "finance"
                },
                internal_communication: {
                    type: "function",
                    persona: "internal_communication"
                },
                project_or_program_management: {
                    type: "function",
                    persona: "project_or_program_management"
                },
                it_admin: {
                    type: "function",
                    persona: "it_admin"
                },
                knowledge_management: {
                    type: "function",
                    persona: "knowledge_management"
                },
                marketing: {
                    type: "function",
                    persona: "marketing"
                },
                eng: {
                    type: "function",
                    persona: "eng"
                },
                hr: {
                    type: "function",
                    persona: "hr"
                },
                product: {
                    type: "function",
                    persona: "product"
                },
                product_design: {
                    type: "function",
                    persona: "product_design"
                },
                sales: {
                    type: "function",
                    persona: "sales_or_success"
                },
                support: {
                    type: "function",
                    persona: "support"
                },
                operations: {
                    type: "function",
                    persona: "operations"
                },
                founder_or_ceo: void 0,
                other: void 0,
                unfilled: void 0
            };

            function u({
                workspaceType: e
            }) {
                switch (e) {
                    case "multiplayer":
                    case "multiplayer_small":
                        return !0;
                    case "singleplayer":
                        return !1;
                    default:
                        (0, a().HB)(e)
                }
            }

            function p(e) {
                let {
                    environment: t
                } = e;
                return u({
                    workspaceType: c({
                        environment: t
                    })
                })
            }
        },
        429196: (e, t, n) => {
            n.d(t, {
                C: () => s
            });
            var a = n(296540);
            let o = {
                TrialModals: new(n(815048)).O2("TrialModals", () => Promise.all([n.e(75134), n.e(33503), n.e(72017), n.e(60213), n.e(71677)]).then(n.bind(n, 349993)))
            };

            function s() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(972740).L)(),
                    o = (0, n(226309).lh)({
                        spaceId: null == t ? void 0 : t.id
                    }),
                    s = (0, n(682985).K8)(() => (0, n(887788).h)(e), [e]),
                    l = i("showTimedTrialInfoModal"),
                    r = i("showTimedTrialCancelModal"),
                    c = i("openBusinessTrialExplorePlanModal"),
                    d = i("openBusinessTrialLossAversionModal");
                return {
                    showTrialInfoModal: (0, a.useCallback)(({
                        openedFrom: e
                    }) => {
                        let t = (0, n(192159).DS)(o);
                        if ((0, n(824574)._)(o)) {
                            let a, i = (0, n(192159).i5)(o),
                                l = (0, n(226309).Io)(o);
                            if (!i || void 0 === l) return;
                            try {
                                a = (0, n(44027).rE)(l)
                            } catch {
                                null == c || c({
                                    openedFrom: e
                                });
                                return
                            }
                            s && !(0, n(44027).z2)({
                                billingData: o
                            }) && t > i.minus({
                                days: a
                            }) ? n(821587).H_({
                                openedFrom: e,
                                modalState: "initial"
                            }) : null == c || c({
                                openedFrom: e
                            })
                        } else null == l || l({
                            openedFrom: e
                        })
                    }, [o, s, c, l]),
                    showTrialCancelModal: (0, a.useCallback)(({
                        openedFrom: t,
                        trialPlan: a
                    }) => {
                        (0, n(824574)._)(o) ? null == d || d({
                            openedFrom: t
                        }): null == r || r({
                            environment: e,
                            trialPlan: a,
                            openedFrom: t
                        })
                    }, [o, e, d, r])
                }
            }

            function i(e) {
                var t;
                let a = (0, n(815048).fJ)(o.TrialModals);
                return null == a || null == (t = a.value) ? void 0 : t[e]
            }
        },
        442219: (e, t, n) => {
            n.d(t, {
                w: () => s
            }), n(296540);
            var a = n(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.12 2.37 17.51 15.26",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M3.442 13.102a.625.625 0 0 1-.884 0L.304 10.848a.625.625 0 0 1 .884-.884l1.187 1.187V10a7.625 7.625 0 1 1 2.303 5.46.625.625 0 1 1 .872-.895A6.375 6.375 0 1 0 3.625 10v1.151l1.187-1.187a.625.625 0 1 1 .884.884z"
                        }), (0, a.jsx)("path", {
                            d: "M9.375 5.725a.625.625 0 0 1 1.25 0v3.65H13.6a.625.625 0 0 1 0 1.25H10A.625.625 0 0 1 9.375 10z"
                        })]
                    })
                },
                s = (0, n(104509).wt)("clockArrowBack", o, "default")
        },
        578449: (e, t, n) => {
            function a(e) {
                let {
                    environment: t,
                    spaceViewStore: a,
                    ...o
                } = e;
                if (!a.getModel()) return;
                let s = !(0, n(654863).x)(a)[e.feature],
                    i = a.getSpaceId();
                (0, n(377796).createAndCommit)({
                    userAction: "userHomeActions.toggleHomeFeature",
                    environment: t,
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        (0, n(421439).y4)({
                            store: a,
                            operation: {
                                pointer: a.pointer,
                                path: ["settings", "personal_home", "enabled_features"],
                                command: "update",
                                args: {
                                    [e.feature]: s
                                }
                            },
                            transaction: t
                        })
                    }
                }), (0, n(167552).f_)({
                    environment: t,
                    show: s,
                    ...o
                })
            }

            function o({
                environment: e,
                option: t,
                from: a,
                userAction: s
            }) {
                let i = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!i) return !1;
                let l = i.getOnAppStartStore().getValue(),
                    r = i.getSpaceId();
                return (0, n(377796).createAndCommit)({
                    userAction: s,
                    environment: e,
                    cellTarget: r ? {
                        spaceWithId: r
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, n(421439).y4)({
                            store: i,
                            operation: {
                                pointer: i.pointer,
                                path: ["settings", "on_app_start"],
                                command: "set",
                                args: t
                            },
                            transaction: e
                        })
                    }
                }), (0, n(377744).c)({
                    spaceView: i.getModel(),
                    preference: t
                }), (0, n(167552).lr)({
                    environment: e,
                    oldValue: l,
                    newValue: t,
                    from: a
                }), !0
            }

            function s(e) {
                let {
                    environment: t,
                    selectedStore: a,
                    spaceViewStore: o,
                    collectionContextStore: s
                } = e, i = s.collectionViewStore(), l = s.collectionStore(), r = s.collectionViewBlockStore();
                if (!l || !i || !r || !o) return;
                let c = (0, n(679321).r)(o),
                    d = a.table === n(832375).yKj ? c.indexOf(a) + 1 : 0,
                    u = a.table === n(832375).yKj ? a.id : void 0,
                    p = i.getSpaceId();
                (0, n(377796).createAndCommit)({
                    environment: t,
                    userAction: "PersonalHomeTrendingPanel.setCollectionViewSourceTeamId",
                    cellTarget: p ? {
                        spaceWithId: p
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, n(421439).y4)({
                            store: i,
                            operation: {
                                pointer: {
                                    id: i.id,
                                    table: n(832375).Gy1
                                },
                                path: ["format", "collection_view_source", "teamId"],
                                command: "set",
                                args: u
                            },
                            transaction: e
                        }), (0, n(316572).d)({
                            environment: t,
                            collectionViewBlockStore: r,
                            collectionViewStore: i,
                            collectionStore: l,
                            collectionContextStore: s,
                            isFullScreen: !1,
                            isRootChild: !1,
                            isInPeekRenderer: !1,
                            viewsModuleContext: void 0
                        })
                    }
                }), (0, n(167552).AP)({
                    environment: t,
                    teamId: u,
                    index: d
                })
            }
            n.d(t, {
                WO: () => a,
                _V: () => o,
                hK: () => s
            })
        },
        591311: (e, t, n) => {
            n.d(t, {
                S: () => o
            }), n(944114), n(296540);
            var a = n(474848);

            function o() {
                let e = (0, n(502827).$)(),
                    t = [];
                return e && t.push({
                    key: "personal_home",
                    label: (0, a.jsx)(n(109939).sA, {
                        id: "pageOnAppStoreSetting.home.label",
                        defaultMessage: "Home"
                    }),
                    icon: n(153828).P
                }), t.push({
                    key: "last_visited_page",
                    label: (0, a.jsx)(n(109939).sA, {
                        id: "pageOnAppStoreSetting.lastVisitedPage.label",
                        defaultMessage: "Last visited page"
                    }),
                    icon: n(442219).w
                }, {
                    key: "first_page",
                    label: (0, a.jsx)(n(109939).sA, {
                        id: "pageOnAppStoreSetting.firstPage.label",
                        defaultMessage: "Top page in sidebar"
                    }),
                    icon: n(822084).pageIcon
                }), (0, n(784331).xc)() && t.push({
                    key: "library",
                    label: (0, a.jsx)(n(109939).sA, {
                        id: "pageOnAppStoreSetting.library.label",
                        defaultMessage: "Library"
                    }),
                    icon: n(360610).H
                }), t.push({
                    key: "notion_ai",
                    label: (0, a.jsx)(n(109939).sA, {
                        id: "pageOnAppStoreSetting.notionAi.label",
                        defaultMessage: "Notion AI"
                    }),
                    icon: n(273344).aiFaceIcon
                }), t
            }
        },
        654863: (e, t, n) => {
            n.d(t, {
                x: () => o
            });
            let a = {
                greeting: !0,
                tasks: !1,
                tips: !1,
                templates: !1,
                calendar: !1,
                custom_db: !1,
                suggested: !0,
                trending: !0,
                shortcuts: !0
            };

            function o(e) {
                let t = (null == e ? void 0 : e.getHomeEnabledFeatures()) ? ? {};
                return { ...a,
                    ...t
                }
            }
        },
        824574: (e, t, n) => {
            n.d(t, {
                _: () => a
            });

            function a(e) {
                return !!((0, n(192159).TB)(e) && "business" === (0, n(192159).AI)(e))
            }
        }
    }
]);