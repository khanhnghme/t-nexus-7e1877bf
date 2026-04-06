"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [91100], {
        7316: (e, t, a) => {
            a.d(t, {
                H: () => i,
                U: () => o
            }), a(898992), a(737550);
            let n = (0, a(109939).YK)({
                    renameName: {
                        id: "action.rename.name",
                        defaultMessage: "Rename"
                    }
                }),
                o = (0, a(233319).Fw)({
                    key: "rename page",
                    displayName: n.renameName,
                    analyticsName: n.renameName.defaultMessage,
                    svg: a(111481).M,
                    validators: [a(158213).I, a(411618).X, a(21848).v, a(887175)._, (0, a(572251).A)(a(52203).a), (0, a(572251).A)(a(597426).l), (0, a(572251).A)(a(854897).k), (0, a(572251).A)(a(875128).d), (0, a(572251).A)((0, a(686412).X)(a(955630).xd.externalObjectInstancePage)), (0, a(572251).A)(a(877340).P), (0, a(572251).A)(a(980039).I), (0, a(572251).A)(a(983173).i), (0, a(572251).A)(a(804043).o), (0, a(572251).A)(a(655140).v), (0, a(572251).A)(a(879685)._), (0, a(572251).A)(function(e) {
                        return e.blocks.some(e => e.isLibraryBlock())
                    })],
                    shortcuts: ["rename"],
                    closeParentMenu: !0,
                    action: e => {
                        let {
                            blocks: t,
                            originRect: n
                        } = e;
                        if (t.length > 0) return a(777772).U({
                            blockStore: t[0],
                            originRect: n
                        })
                    }
                }),
                i = (0, a(233319).Fw)({
                    key: "rename file",
                    displayName: n.renameName,
                    analyticsName: n.renameName.defaultMessage,
                    svg: a(111481).M,
                    validators: [a(205391).k, a(21848).v, a(998256).p, (0, a(572251).A)(a(875128).d), (0, a(572251).A)((0, a(160138).B)("table"))],
                    shortcuts: ["rename"],
                    closeParentMenu: !0,
                    action: e => {
                        let {
                            blocks: t,
                            originRect: n
                        } = e;
                        if (t.length > 0) return a(353447).H({
                            blockStore: t[0],
                            originRect: n
                        })
                    }
                })
        },
        21848: (e, t, a) => {
            a.d(t, {
                v: () => n
            });

            function n(e) {
                return e.blocks && 1 === e.blocks.length
            }
        },
        28653: (e, t, a) => {
            a.d(t, {
                R5: () => s,
                pG: () => r,
                Im: () => l
            }), a(18107), a(967357), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.37 2.37 13.25 15.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M5.5 2.375A2.125 2.125 0 0 0 3.375 4.5v5.25c0 1.174.951 2.125 2.125 2.125H13a2.125 2.125 0 0 0 2.125-2.125V4.5A2.125 2.125 0 0 0 13 2.375zM4.625 4.5c0-.483.392-.875.875-.875H13c.483 0 .875.392.875.875v5.25a.875.875 0 0 1-.875.875H5.5a.875.875 0 0 1-.875-.875zm-1.25 9.62c0-.345.28-.625.625-.625h12a.625.625 0 1 1 0 1.25H4a.625.625 0 0 1-.625-.625m0 2.88c0-.345.28-.625.625-.625h8.55a.625.625 0 1 1 0 1.25H4A.625.625 0 0 1 3.375 17"
                    })
                },
                o = (0, a(104509).wt)("caption", n, "default");
            a(16280);
            let i = (0, a(109939).YK)({
                    commentName: {
                        id: "action.comment.name",
                        defaultMessage: "Comment"
                    },
                    captionName: {
                        id: "action.caption.name",
                        defaultMessage: "Caption"
                    },
                    altTextName: {
                        id: "action.altText.name",
                        defaultMessage: "Alt text"
                    },
                    reactName: {
                        id: "action.react.name",
                        defaultMessage: "React"
                    }
                }),
                l = (0, a(233319).Fw)({
                    key: "comment",
                    displayName: i.commentName,
                    analyticsName: i.commentName.defaultMessage,
                    svg: a(557488).h,
                    hideFromSlashActionMenu: !0,
                    validators: [a(507667).zp],
                    shortcuts: ["comment"],
                    closeParentMenu: !0,
                    lazyDependencyKeys: ["formulasModule"],
                    action: ({
                        blocks: e,
                        environment: t
                    }) => {
                        let n = (0, a(968864).Y)("formulasModule"),
                            o = e[0],
                            i = null == o ? void 0 : o.getModel();
                        if (o) {
                            let e = "editing" === a(358377).default.state.mode && a(358377).default.state.multiSelection;
                            if (e && !(0, a(971541).k)(e) && (e.start.store.id === o.id || null != i && i.isType("table") && "properties" === e.start.store.path[0] && e.start.store.path[1] && (o.getFormatStore().getKeyStore("table_block_column_order").getValue() ? ? []).includes(String(e.start.store.path[1])))) a(22229).hN({
                                environment: t,
                                blockStore: o,
                                multiSelection: e,
                                formulasModule: n
                            });
                            else if (o.isDefined() && null != i && i.isType(a(955630).uP)) {
                                let e = o.getTitleStore(),
                                    i = e && (0, a(129499).s)(e);
                                if (e && i && i.endIndex > 0) {
                                    let l = {
                                        startIndex: 0,
                                        endIndex: i.endIndex
                                    };
                                    a(22229).hN({
                                        environment: t,
                                        blockStore: o,
                                        multiSelection: (0, a(524966).$U)({
                                            store: e,
                                            selection: l
                                        }),
                                        rect: a(496704).K.getRect(o),
                                        formulasModule: n
                                    })
                                }
                            } else if (o.getAssociatedCollectionStore()) {
                                var l;
                                let e = a(966980).oC(o, {
                                        recursivelyLoadAllDiscussions: !1
                                    }),
                                    n = a(668984).A.findBlockPropertyValue(o, "title"),
                                    i = null == n || null == (l = n.getNode()) ? void 0 : l.getBoundingClientRect();
                                e > 0 ? a(821243).B4({
                                    environment: t,
                                    blockStore: o,
                                    shouldFocusDiscussion: !0,
                                    analyticsFrom: "db_page_comments",
                                    rect: i,
                                    recursivelyLoadAllDiscussions: !1
                                }) : (0, a(476081).l)({
                                    environment: t,
                                    blockStore: o,
                                    rect: i
                                })
                            } else(0, a(476081).l)({
                                environment: t,
                                blockStore: o
                            })
                        }
                    }
                }),
                r = (0, a(233319).Fw)({
                    key: "caption",
                    displayName: i.captionName,
                    analyticsName: i.captionName.defaultMessage,
                    svg: o,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(21848).v, function(e) {
                        if (e.blocks) {
                            var t;
                            let n = e.blocks.at(0);
                            return !!(null == n || null == (t = n.getModel()) ? void 0 : t.isType(a(955630).IA))
                        }
                        return !1
                    }, (0, a(515914).or)([(0, a(766550).h)("source"), (0, a(766550).h)("link"), (0, a(686412).X)("code")])],
                    shortcuts: ["caption"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "init_edit_caption"
                    },
                    action: (e, {
                        blocks: t
                    }, n) => {
                        let o = t.at(0);
                        if (o) {
                            let t = a(496704).K.findBlockFromStoreWithMethod(o, "caption");
                            if (!t) throw Error(`Block ${o.id} with caption not found in registry`);
                            t.caption(), e()
                        }
                    }
                }),
                s = (0, a(233319).Ls)({
                    key: "alt text",
                    displayName: i.altTextName,
                    analyticsName: i.altTextName.defaultMessage,
                    svg: a(224515).Y,
                    validators: [a(21848).v, (0, a(686412).X)(a(955630).xd.image), (0, a(766550).h)("source"), (0, a(515914).or)([(0, a(766550).h)("alt_text"), (0, a(648903).U)([a(998256).p, (0, a(572251).A)(a(99378).v)])])],
                    closeParentMenu: !0,
                    track: {
                        actionName: "init_edit_alt_text"
                    },
                    action: (e, {
                        blocks: t
                    }, n) => {
                        let o = t.at(0);
                        o && ((0, a(582921).a)({
                            blockStore: o,
                            entrypoint: "block_menu"
                        }), e())
                    }
                });
            (0, a(233319).Fw)({
                key: "react",
                displayName: i.reactName,
                analyticsName: i.reactName.defaultMessage,
                svg: a(704694).r,
                validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(211129).Y, (0, a(572251).A)(a(887175)._), a(507667).bn, (0, a(515914).or)([a(21848).v, a(696388).T]), (0, a(572251).A)(a(183205).y), (0, a(550385).S)({
                    experimentId: "block_reactions"
                })],
                shortcuts: ["react"],
                closeParentMenu: !0,
                lazyDependencyKeys: ["formulasModule"],
                action: ({
                    blocks: e,
                    environment: t
                }) => {
                    let n = (0, a(968864).Y)("formulasModule"),
                        o = e[0],
                        i = null == o ? void 0 : o.getModel();
                    if (o) {
                        let e = "editing" === a(358377).default.state.mode && a(358377).default.state.multiSelection;
                        if (e && !(0, a(971541).k)(e) && (e.start.store.id === o.id || null != i && i.isType("table") && "properties" === e.start.store.path[0] && e.start.store.path[1] && (o.getFormatStore().getKeyStore("table_block_column_order").getValue() ? ? []).includes(String(e.start.store.path[1])))) a(22229).of({
                            environment: t,
                            blockStore: o,
                            multiSelection: e,
                            formulasModule: n
                        });
                        else if (o.isDefined() && null != i && i.isType(a(955630).uP)) {
                            let e = o.getTitleStore(),
                                i = e && (0, a(129499).s)(e);
                            if (e && i && i.endIndex > 0) {
                                let l = {
                                    startIndex: 0,
                                    endIndex: i.endIndex
                                };
                                a(22229).of({
                                    environment: t,
                                    blockStore: o,
                                    multiSelection: (0, a(524966).$U)({
                                        store: e,
                                        selection: l
                                    }),
                                    rect: a(496704).K.getRect(o),
                                    formulasModule: n
                                })
                            }
                        } else(0, a(593342).O)({
                            environment: t,
                            blockStore: o,
                            formulasModule: n
                        })
                    }
                }
            })
        },
        31187: (e, t, a) => {
            a.d(t, {
                Q: () => n
            }), a(898992), a(354520);

            function n(e) {
                let t = a(735140).A.state.recentlyUsedColors.filter(t => t !== e);
                t.unshift(e), t.length > 5 && t.pop(), a(735140).A.state.recentlyUsedColors = t, a(887857).A.setState([...t])
            }
        },
        36741: (e, t, a) => {
            a.d(t, {
                gS: () => c,
                KV: () => s,
                uK: () => d
            }), a(898992), a(737550);
            let n = {
                text: !0,
                bulleted_list: !0,
                numbered_list: !0,
                quote: !0,
                to_do: !0,
                header: !0,
                sub_header: !0,
                sub_sub_header: !0,
                callout: !0,
                toggle: !0,
                table: !0,
                equation: !0,
                code: !0,
                file: !0,
                pdf: !0,
                image: !0
            };

            function o(e, t) {
                return () => "on" === a(218744).default.getEligibleGroup({
                    experimentId: e,
                    defaultGroup: "control",
                    disableExposureLogging: t
                })
            }
            let i = [...a(49204).X, e => {
                    let {
                        blocks: t
                    } = e;
                    return t.some(t => {
                        let o = t.getType();
                        return !(void 0 === o || (!a(886556).z.isAttachmentUploadEnabledForUser() || (0, a(988318).t)(e)) && ("pdf" === o || "file" === o || "image" === o)) && (0, a(722371).O)(n, o)
                    })
                }],
                l = (0, a(109939).YK)({
                    blockSelectionCompletionName: {
                        id: "action.blockSelectionCompletionName.name",
                        defaultMessage: "Ask AI"
                    },
                    openInChatName: {
                        id: "action.openInChat.name",
                        defaultMessage: "Ask AI"
                    }
                });
            async function r(e) {
                let {
                    environment: t,
                    blocks: n
                } = e, o = await Promise.resolve().then(a.bind(a, 310639)), i = await o.assistantDependency.load();
                if ((0, a(828294).a)("agent_writer") && t.device.isMobileNative && (0, a(907620).T)("supportsNativeAgent")) {
                    var l;
                    let e = (0, a(554397).j)(n);
                    null == (l = t.mobileNative) || l.openNewAgentChat({
                        mode: "writer",
                        userSpecifiedContextValues: e
                    });
                    return
                }
                if (i.assistantActions.isSelectionValidAttachmentSelection(n)) {
                    let e = a(674880).defaultInferenceContextStore.getState();
                    if (!e) return;
                    i.agentActions.openAgentSidebarFromAttachmentBlockSelection({
                        environment: t,
                        selectedAttachmentStore: n[0],
                        inferenceContext: e
                    });
                    return
                }
                let {
                    aiDependency: r
                } = await Promise.resolve().then(a.bind(a, 712155));
                (await r.load()).completionInitialPromptActions.toggleInitialPrompt({
                    from: "block_action_menu",
                    environment: t
                })
            }

            function s() {
                let e = (0, a(154911).K)();
                return (0, a(233319).Fw)({
                    key: "block selection completion",
                    displayName: l.blockSelectionCompletionName,
                    analyticsName: l.blockSelectionCompletionName.defaultMessage,
                    svg: a(273344).aiFaceIcon,
                    shortcuts: e,
                    validators: [...i, (0, a(572251).A)(o("block_action_menu_agent_entrypoint", !0))],
                    hideFromSlashActionMenu: !0,
                    closeParentMenu: !0,
                    action: async (e, t) => {
                        let {
                            environment: n,
                            blocks: o
                        } = e;
                        a(986939).A.isMobile ? window.requestAnimationFrame(() => {
                            setTimeout(() => {
                                (0, a(854924).t)({
                                    environment: n,
                                    stores: o
                                }), r({
                                    environment: n,
                                    blocks: o
                                })
                            }, 0)
                        }) : await r({
                            environment: n,
                            blocks: o
                        })
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                })
            }

            function c() {
                let e = (0, a(154911).K)();
                return (0, a(233319).Fw)({
                    key: "ai prompt menu",
                    analyticsName: "ai_prompt_menu",
                    displayName: void 0,
                    validators: [...a(49204).X, a(494755).O],
                    shortcuts: e,
                    closeParentMenu: !0,
                    action: async ({
                        environment: e
                    }) => {
                        let {
                            aiDependency: t
                        } = await Promise.resolve().then(a.bind(a, 712155));
                        (await t.load()).completionInitialPromptActions.toggleInitialPrompt({
                            from: "keyboard_shortcut",
                            environment: e
                        })
                    }
                })
            }
            let d = (0, a(233319).Fw)({
                key: "open in chat",
                displayName: l.openInChatName,
                analyticsName: l.openInChatName.defaultMessage,
                svg: a(273344).aiFaceIcon,
                validators: [...a(49204).X, o("block_action_menu_agent_entrypoint", !0)],
                closeParentMenu: !0,
                shortcuts: ["commandJ"],
                action: ({
                    environment: e,
                    blocks: t
                }) => {
                    if ((0, a(828294).a)("agent_writer") && e.device.isMobileNative && (0, a(907620).T)("supportsNativeAgent")) {
                        var n;
                        let o = (0, a(554397).j)(t);
                        null == (n = e.mobileNative) || n.openNewAgentChat({
                            mode: "writer",
                            userSpecifiedContextValues: o
                        });
                        return
                    }
                    let o = t[0];
                    o && (0, a(358667).openChatPanel)({
                        environment: e,
                        store: o,
                        chatPanelState: {
                            isOpen: !0
                        },
                        source: "block_action_menu"
                    })
                },
                disabled: () => !a(205885).A.state.online,
                renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                disableTooltip: () => a(205885).A.state.online
            })
        },
        49204: (e, t, a) => {
            a.d(t, {
                J: () => n,
                X: () => o
            });
            let n = [function(e) {
                    var t, n;
                    return (0, a(576348).ZE)(e.publicEditMode, (null == (t = e.blocks) ? void 0 : t.length) === 1 ? e.blocks[0] : null == (n = e.pageContext) ? void 0 : n.pageStore)
                }, a(998256).p, (0, a(572251).A)(a(287310).J)],
                o = [...n, (0, a(572251).A)(a(99378).v), (0, a(572251).A)(a(183205).y), function(e) {
                    return e.blocks.length > 0
                }]
        },
        52203: (e, t, a) => {
            a.d(t, {
                a: () => n
            }), a(18107), a(967357);

            function n(e) {
                var t;
                let n = e.blocks.at(0);
                return !!(a(447036).Gb() && (null == n ? void 0 : n.id) === (null == (t = a(475097).default.peekTargetStore.state) ? void 0 : t.id))
            }
        },
        64865: (e, t, a) => {
            function n(e) {
                return e.blocks.some(e => e.isCollectionViewPageWithContent())
            }
            a.d(t, {
                A: () => n
            }), a(898992), a(737550)
        },
        84697: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowSquarePathUpDownIcon: () => o,
                iconDefinition: () => n
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.64 3.12 18.71 13.76",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6.475 3.125a.625.625 0 1 0 0 1.25h7.975c.65 0 1.175.526 1.175 1.175v6.057l-1.408-1.408a.625.625 0 1 0-.884.884l2.475 2.475a.625.625 0 0 0 .884 0l2.475-2.475a.625.625 0 0 0-.884-.884l-1.408 1.408V5.55a2.425 2.425 0 0 0-2.425-2.425zM3.308 6.442a.625.625 0 0 1 .884 0l2.475 2.475a.625.625 0 1 1-.884.884L4.375 8.393v6.057c0 .649.526 1.175 1.175 1.175h7.975a.625.625 0 0 1 0 1.25H5.55a2.425 2.425 0 0 1-2.425-2.425V8.393L1.717 9.801a.625.625 0 1 1-.884-.884z"
                    })
                },
                o = (0, a(104509).wt)("arrowSquarePathUpDown", n, "default")
        },
        93078: (e, t, a) => {
            a.d(t, {
                N: () => s,
                S: () => c
            }), a(18107), a(967357), a(296540);
            var n = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.5 2.5 15.5 15.5",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M10.61 3.61a3.776 3.776 0 0 1 5.34 0l.367.368a3.776 3.776 0 0 1 0 5.34l-.715.715a4.6 4.6 0 0 0-1.67-.098l1.502-1.501a2.526 2.526 0 0 0 0-3.572l-.368-.367a2.526 2.526 0 0 0-3.572 0L9.641 6.347a.625.625 0 1 1-.883-.883zm-.675 10.323-1.5 1.5a2.525 2.525 0 0 1-3.573 0l-.367-.367a2.526 2.526 0 0 1 0-3.572l1.853-1.853a.625.625 0 1 0-.884-.884L3.61 10.61a3.776 3.776 0 0 0 0 5.34l.367.367a3.776 3.776 0 0 0 5.34 0l.715-.715a4.6 4.6 0 0 1-.098-1.67"
                        }), (0, n.jsx)("path", {
                            d: "M12.98 7.833a.625.625 0 1 0-.885-.884l-5.448 5.448a.625.625 0 0 0 .884.884zM14.5 18a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m1.969-4.094h-1.375v-1.375a.625.625 0 0 0-1.25 0v1.375h-1.375a.625.625 0 0 0 0 1.25h1.375v1.375a.625.625 0 1 0 1.25 0v-1.375h1.375a.625.625 0 0 0 0-1.25"
                        })]
                    })
                },
                i = (0, a(104509).wt)("linkBadgePlus", o, "default");

            function l(e) {
                let t = e.blocks.at(0);
                return !!(null == t ? void 0 : t.getFormat().image_hyperlink)
            }
            let r = (0, a(109939).YK)({
                    addImageHyperlink: {
                        id: "action.addImageHyperlink",
                        defaultMessage: "Add link to image"
                    },
                    editImageHyperlink: {
                        id: "action.editImageHyperlink",
                        defaultMessage: "Edit link to image"
                    }
                }),
                s = (0, a(233319).Fw)({
                    key: "link image",
                    displayName: r.addImageHyperlink,
                    analyticsName: r.addImageHyperlink.defaultMessage,
                    svg: i,
                    validators: [a(998256).p, a(21848).v, a(552555).w, (0, a(572251).A)(a(99378).v), (0, a(572251).A)(l)],
                    shortcuts: ["openLinkMenuOrOpenSearch"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "init_edit_link"
                    },
                    action: (e, {
                        blocks: t
                    }, n) => {
                        let o = t.at(0);
                        o && (a(869782).hv({
                            store: o
                        }), e())
                    }
                }),
                c = (0, a(233319).Fw)({
                    key: "link image",
                    displayName: r.editImageHyperlink,
                    analyticsName: r.editImageHyperlink.defaultMessage,
                    svg: a(588739).linkIcon,
                    validators: [a(998256).p, a(21848).v, a(552555).w, (0, a(572251).A)(a(99378).v), l],
                    shortcuts: ["openLinkMenuOrOpenSearch"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "init_edit_link"
                    },
                    action: (e, {
                        blocks: t
                    }, n) => {
                        let o = t.at(0);
                        o && (a(869782).hv({
                            store: o
                        }), e())
                    }
                })
        },
        99378: (e, t, a) => {
            a.d(t, {
                v: () => n
            }), a(898992), a(737550);

            function n(e) {
                return e.blocks.some(e => {
                    let t = (0, a(330870).a)();
                    return !!(t && (0, a(335818).fc)(t) || (0, a(444285).S)(t) && null != t && t.uiContains(e) && t !== e)
                })
            }
        },
        140758: (e, t, a) => {
            a.d(t, {
                R: () => i
            }), a(296540);
            var n = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.62 15.26 15.26",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8.875 5.75c.345 0 .625.28.625.625V8.25h1.875a.625.625 0 1 1 0 1.25H9.5v1.875a.625.625 0 1 1-1.25 0V9.5H6.375a.625.625 0 1 1 0-1.25H8.25V6.375c0-.345.28-.625.625-.625"
                        }), (0, n.jsx)("path", {
                            d: "M8.875 2.625a6.25 6.25 0 1 0 3.955 11.09l3.983 3.982a.625.625 0 1 0 .884-.884l-3.983-3.982a6.25 6.25 0 0 0-4.84-10.205m-5 6.25a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
                        })]
                    })
                },
                i = (0, a(104509).wt)("magnifyingGlassPlus", o, "default")
        },
        142910: (e, t, a) => {
            a.d(t, {
                P: () => n
            }), a(898992), a(672577);

            function n(e) {
                return void 0 !== e.blocks.find(e => (0, a(708929).Or)(a(708929).Uv.getMode(e)))
            }
        },
        154911: (e, t, a) => {
            a.d(t, {
                K: () => n
            });

            function n() {
                return [(0, a(828294).a)("agent_writer") ? "commandAltJ" : "commandJ"]
            }
        },
        158213: (e, t, a) => {
            a.d(t, {
                I: () => n
            });

            function n() {
                return !a(986939).A.isMobile
            }
        },
        160138: (e, t, a) => {
            a.d(t, {
                B: () => n
            }), a(898992), a(823215);

            function n(e, t = !0) {
                return n => n.blocks.every(n => {
                    let o = (0, a(444610).U)(n, t),
                        i = null == o ? void 0 : o.collectionViewStore();
                    return (null == i ? void 0 : i.getType()) === e
                })
            }
        },
        183205: (e, t, a) => {
            a.d(t, {
                y: () => n
            }), a(898992), a(737550);

            function n(e) {
                return e.blocks.some(a(574676).u)
            }
        },
        205391: (e, t, a) => {
            a.d(t, {
                k: () => n
            }), a(18107), a(967357);

            function n(e) {
                if (e.blocks) {
                    let t = e.blocks.at(0);
                    return !!(t && t.isDefined() && t.getType() === a(955630).xd.file && t.getNonCollectionProperty("source"))
                }
                return !1
            }
        },
        224515: (e, t, a) => {
            a.d(t, {
                Y: () => o
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.87 5.97 18.25 8.05",
                    svg: (0, a(474848).jsx)("path", {
                        d: "m5.58 11.757.685 1.855a.625.625 0 0 0 1.172-.434L4.985 6.544a.863.863 0 0 0-1.62 0l-2.45 6.634a.625.625 0 0 0 1.172.434l.686-1.855zm-.463-1.25H3.234l.941-2.548zm4.26-4.527c.345 0 .625.28.625.625v6.165h3.147a.625.625 0 1 1 0 1.25H9.377a.625.625 0 0 1-.625-.625v-6.79c0-.345.28-.625.625-.625m3.147.625c0-.345.28-.625.625-.625h5.35a.625.625 0 1 1 0 1.25h-2.05v6.165a.625.625 0 0 1-1.25 0V7.23h-2.05a.625.625 0 0 1-.625-.625"
                    })
                },
                o = (0, a(104509).wt)("textAlt", n, "default")
        },
        230336: (e, t, a) => {
            a.d(t, {
                E: () => n
            });

            function n() {
                let {
                    resultsStore: e
                } = a(475097).default.state, t = null == e ? void 0 : e.getState();
                if (a(475097).default.state.open && t) {
                    let {
                        targetStore: e
                    } = a(475097).default.state, n = t.findIndex(t => t.id === e.id), o = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                    if (o && n < t.length - 1) {
                        let e = o.environment,
                            i = (0, a(483227).J8)({
                                store: o,
                                fullyQualified: !1,
                                peekViewBlockId: t[n + 1].id,
                                peekMode: (0, a(475097).getUrlParamFromPeekMode)(a(475097).default.state.mode),
                                pageVisitSource: a(254656).y8.PeekScroll,
                                chatThreadId: (0, a(384899).l)(e)
                            });
                        (0, a(79266).navigate)({
                            environment: e,
                            url: i
                        }), a(20557).EK(e, {
                            direction: "down"
                        })
                    }
                }
            }
        },
        235347: (e, t, a) => {
            function n(e) {
                return e.blocks.some(e => e.isAssociatedCollectionAPageTree())
            }
            a.d(t, {
                U: () => n
            }), a(898992), a(737550)
        },
        245803: (e, t, a) => {
            a.d(t, {
                Y: () => n
            });

            function n(e, t) {
                return `inset 0 0 0 ${t?"2px":"1px"} ${e}`
            }
        },
        248567: (e, t, a) => {
            a.d(t, {
                F: () => n
            });

            function n() {
                var e;
                let t = a(475097).default.state,
                    n = t.open ? t.targetStore : a(728372).AppStoreMainEditorCurrentBlockStore.state,
                    o = null == (e = a(506507).A.state.caches[a(526226).oB]) ? void 0 : e.inMemoryRecordCache;
                return o ? null == n ? void 0 : n.clone(o) : n
            }
        },
        252805: (e, t, a) => {
            a.d(t, {
                C: () => n
            }), a(898992), a(823215);

            function n(e) {
                return e.blocks.every(e => !!a(522756).A.findOutlinerItemFromStore(e))
            }
        },
        341133: (e, t, a) => {
            a.d(t, {
                w: () => n
            });

            function n({
                environment: {
                    device: e
                }
            }) {
                return e.isMobileNative
            }
        },
        358667: (e, t, a) => {
            a.r(t), a.d(t, {
                openChatPanel: () => n
            }), a(16280), a(814603), a(147566), a(198721);

            function n(e) {
                var t;
                let n, {
                        environment: o,
                        store: i,
                        chatPanelState: l,
                        source: r = "button"
                    } = e,
                    s = a(680007).default.mark("agent_time_to_render"),
                    c = (0, a(420459).G4)();
                a(562733).zI.setState({ ...a(562733).zI.state,
                    agentTimeToRenderMetric: s,
                    openSource: r,
                    completionContext: c
                });
                let d = l ? ? {},
                    u = d.isNewThread,
                    p = "threadId" in d && !!d.threadId;
                !u && !p && a(973240).L.threadId && a(973240).L.updatedAt && a(973240).L.updatedAt + 6e5 > Date.now() && (d = { ...d,
                    threadId: a(973240).L.threadId
                }), (0, a(487246).a)();
                let m = (0, a(548124).getMergedChatSidebarRouteData)({
                        environment: o,
                        update: d
                    }),
                    g = (0, a(548124).routeArgsGivenChatSidebarRouteData)(m),
                    f = o.RouterStore.state.route;
                if (i)
                    if ((null == i ? void 0 : i.table) === a(832375).evP) n = (0, a(483227).Ef)({
                        environment: o,
                        updates: { ...g,
                            scrollToBlockId: void 0,
                            store: i
                        }
                    });
                    else if ((null == i ? void 0 : i.table) === a(832375).C0E) {
                    let e = {};
                    "agent" === f.name && (e = {
                        workflowViewType: f.workflowViewType,
                        workflowViewId: f.workflowViewId,
                        workflowPrompt: f.workflowPrompt,
                        agentChatThreadId: f.agentChatThreadId
                    }), n = (0, a(453573).Lm)({
                        workflowId: i.id,
                        params: {
                            workflowViewType: "agent",
                            ...g,
                            ...e
                        }
                    })
                } else(0, a(722371).HB)(i);
                else if (!i && (0, a(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(f)) {
                    let e = new URL(window.location.href);
                    g.chatThreadId && e.searchParams.set(a(737869).P5, g.chatThreadId), n = e.toString()
                }
                if (!n) throw Error(`Cannot open chat panel on route ${f.name} without a store`);
                let y = a(728372).AppStoreMainEditorCurrentBlockStore.state !== i;
                (0, a(79266).navigate)({
                    environment: o,
                    url: n,
                    redirect: !y
                });
                let h = (0, a(828560).hw)(),
                    v = a(562733).zI.state.chatPanelMode;
                h || (h && "sidebar" === v ? (0, a(16822).h)({
                    environment: o,
                    isExpanded: !0,
                    from: "slippery_slope_experiment",
                    saveDetailsSidebarPreference: !1
                }) : function(e) {
                    let {
                        environment: t
                    } = e;
                    !(0, a(712358).K)(t) || (0, a(548124).getIsChatPanelOpen)(t) || (a(984858).sidebarExpandedStore.setState(!1), a(475097).default.setSidebarExpandedStoreState(!1), a(562733).zI.setState({ ...a(562733).zI.state,
                        reopenMainSidebarOnClose: !0
                    }))
                }({
                    environment: o
                }));
                let k = null == (t = (0, a(328765).S)()) ? void 0 : t.id;
                k && (o.api.callApi({
                    eventName: "warmSearchCache",
                    environment: o,
                    data: {
                        spaceId: k
                    }
                }), o.api.callCellCompatibleApi({
                    eventName: "warmVectorDBCache",
                    environment: o,
                    data: {
                        spaceId: k
                    },
                    cellNavigation: {
                        spaceId: k
                    }
                })), (async () => {
                    try {
                        (await Promise.all([a.e(36556), a.e(55373), a.e(36192), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(53050), a.e(87353), a.e(5721), a.e(64696), a.e(94495)]).then(a.bind(a, 305721))).trackAgentOpened({
                            environment: o,
                            from: r,
                            leftNotionSidebarOpenState: a(984858).sidebarExpandedStore.state
                        })
                    } catch (e) {}
                })()
            }
        },
        377357: (e, t, a) => {
            a.d(t, {
                A: () => l,
                K: () => i
            });
            var n = a(296540),
                o = a(474848);

            function i(e) {
                let {
                    color: t,
                    selected: n,
                    isHovered: i,
                    overrideStyles: l
                } = e, r = (0, a(632079).Cg)(t), s = (0, a(960253).e)(), c = (0, a(960253).I)(() => {
                    let e = (0, a(632079).k5)(t, a(632079).Tj),
                        o = (0, a(641822).N)(t, n ? ? !1, s);
                    return {
                        icon: {
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 26,
                            height: 26,
                            textAlign: "center",
                            padding: 8,
                            margin: 0,
                            fontSize: 16,
                            borderRadius: 6,
                            fontWeight: a(699422).Wy.medium,
                            boxShadow: (0, a(245803).Y)(o, n || i),
                            ...e,
                            ...l
                        }
                    }
                }, [t, i, l, n, s]);
                return (0, o.jsx)("div", {
                    style: c.icon,
                    "aria-hidden": "true",
                    children: r ? "" : "A"
                })
            }
            let l = n.forwardRef(function(e, t) {
                let l = (0, a(109939).tz)(),
                    [r, s] = (0, n.useState)(!1),
                    {
                        color: c,
                        overrideDisplayName: d,
                        right: u,
                        shortcuts: p,
                        selected: m,
                        shouldShowUpdatedColorPicker: g,
                        desktopTitleStyle: f,
                        iconStyle: y,
                        itemMarginLeft: h,
                        itemMarginRight: v,
                        desktopIconStyle: k,
                        rightStyle: b
                    } = e,
                    A = d || l.formatMessage((0, a(746998).qo)(c)),
                    S = !a(986939).A.isMobile && p && p[0],
                    w = (0, a(960253).I)(() => g ? {
                        tooltipStyle: {
                            display: "inline-block",
                            width: 30,
                            padding: 0,
                            lineHeight: 1
                        },
                        desktopStyleIcon: {
                            position: "absolute"
                        },
                        buttonStyle: {
                            display: "inline-block",
                            width: "100%",
                            height: "100%",
                            margin: 0,
                            padding: 2,
                            position: "relative"
                        },
                        menuItemStyle: {
                            margin: 0,
                            padding: 0,
                            gap: 0,
                            minHeight: 26
                        },
                        disableButtonStyleHoverOrPressed: {
                            background: "transparent"
                        },
                        shortcut: {}
                    } : {
                        shortcut: {
                            color: a(632079).Tj.text.tertiary,
                            fontSize: 12,
                            whiteSpace: "nowrap"
                        },
                        tooltipStyle: {},
                        desktopStyleIcon: {},
                        buttonStyle: {},
                        menuItemStyle: {},
                        disableButtonStyleHoverOrPressed: {}
                    }, [g]),
                    N = (0, n.useCallback)(() => (0, o.jsx)(i, {
                        color: c,
                        selected: m,
                        isHovered: r,
                        overrideStyles: y
                    }), [c, r, m, y]);
                return g ? (0, o.jsx)(a(51831).m, {
                    content: () => (0, o.jsx)("div", {
                        children: A
                    }),
                    children: n => (0, o.jsx)("div", {
                        style: w.tooltipStyle,
                        ...n,
                        onMouseEnter: e => {
                            var t;
                            s(!0), null == (t = n.onMouseEnter) || t.call(n, e)
                        },
                        onMouseLeave: e => {
                            var t;
                            s(!1), null == (t = n.onMouseLeave) || t.call(n, e)
                        },
                        children: (0, o.jsx)(a(95582).A, { ...e,
                            ref: t,
                            icon: N(),
                            style: w.menuItemStyle,
                            itemMarginLeft: h,
                            itemMarginRight: v,
                            hoveredStyle: w.disableButtonStyleHoverOrPressed,
                            pressedStyle: w.disableButtonStyleHoverOrPressed,
                            desktopIconStyle: k || w.desktopStyleIcon,
                            right: u,
                            buttonStyle: w.buttonStyle,
                            desktopTitleStyle: f,
                            rightStyle: b
                        })
                    })
                }) : (0, o.jsx)(a(95582).A, { ...e,
                    ref: t,
                    title: A,
                    icon: N(),
                    dontShrinkRight: !0,
                    isChecked: m && !(u || S),
                    right: u || S && (0, o.jsx)(a(693592).A, {
                        name: S,
                        style: w.shortcut
                    }),
                    itemMarginLeft: h,
                    itemMarginRight: v,
                    desktopIconStyle: k,
                    desktopTitleStyle: f,
                    rightStyle: b
                })
            })
        },
        378718: (e, t, a) => {
            a.d(t, {
                B: () => n
            }), a(18107), a(967357);

            function n() {
                return !!a(912846).default.state.undoStack.at(-1)
            }
        },
        424884: (e, t, a) => {
            a.d(t, {
                P: () => n
            }), a(898992), a(823215);

            function n(e) {
                return e.blocks.every(() => {
                    let t;
                    return null == (t = (0, a(330870).a)()) || !t.isCollectionViewPageWithContent() || (0, a(160138).B)("page", !1)(e)
                })
            }
        },
        442284: (e, t, a) => {
            a.d(t, {
                P: () => n
            }), a(898992), a(737550);

            function n(e) {
                return !!(0, a(245857).q)() || e.blocks.some(e => e.pathIsDead())
            }
        },
        446019: (e, t, a) => {
            a.d(t, {
                M: () => n
            }), a(898992), a(823215);

            function n(e) {
                return e.blocks.every(e => {
                    let t = null == e ? void 0 : e.getModel();
                    return !!((null == t ? void 0 : t.isType(a(955630).hc)) && e.getParentTable() !== a(832375).VlP)
                })
            }
        },
        458165: (e, t, a) => {
            function n(e) {
                return e.blocks.every(e => {
                    if (!e.isCollectionView()) return !1;
                    let t = e.getCollectionStoreIfSingleSource();
                    return !!t && t.isExternallyImportedAndSyncedCollection()
                })
            }
            a.d(t, {
                Q: () => n
            }), a(898992), a(823215)
        },
        467366: (e, t, a) => {
            function n(e) {
                return !(0, a(397620).z)(e)
            }
            a.d(t, {
                kl: () => c,
                nK: () => l,
                yj: () => r,
                lb: () => m,
                J8: () => p,
                TR: () => s,
                As: () => i
            }), a(296540), a(898992), a(823215);
            var o = a(474848);
            let i = (0, a(233319).Fw)({
                    key: "duplicate",
                    displayName: a(233319).AY.duplicateName,
                    analyticsName: a(233319).AY.duplicateName.defaultMessage,
                    svg: a(703696).V,
                    validators: [function(e) {
                        return e.blocks.every(t => {
                            let n = t.recordStoreUIParentStore;
                            return n && n instanceof a(970831).B && n.isCollectionView() ? (0, a(862085).M0)(n, e.publicEditMode, e.environment) : (0, a(185273).e)(e)
                        })
                    }, (0, a(572251).A)(a(648620).x), (0, a(572251).A)(a(653262).p), (0, a(572251).A)(a(877340).P), (0, a(515914).or)([a(252805).C, (0, a(572251).A)(a(99378).v)]), (0, a(515914).or)([(0, a(572251).A)(a(923147).a), a(64865).A]), (0, a(572251).A)(a(808628).r), ...a(233319).uo],
                    shortcuts: ["duplicate"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "duplicate"
                    },
                    action: async (e, {
                        blocks: t,
                        environment: n
                    }, o) => {
                        let i = await a(411648).VI.selectableBlockActions.load();
                        await i.duplicateBlocksWithMaybeConfirmation({
                            environment: n,
                            blocks: t,
                            callback: e,
                            from: "duplicate.to_selection"
                        })
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                }),
                l = (0, a(35370).u)({
                    key: "duplicateCollection",
                    displayName: a(233319).AY.duplicateName,
                    analyticsName: a(233319).AY.duplicateName.defaultMessage,
                    svg: a(703696).V,
                    width: 275,
                    validators: [a(185273).e, (0, a(572251).A)(a(648620).x), (0, a(572251).A)(a(653262).p), (0, a(515914).or)([a(252805).C, (0, a(572251).A)(a(99378).v)]), (0, a(648903).U)([a(923147).a, (0, a(572251).A)(a(64865).A)]), (0, a(572251).A)(a(458165).Q), ...a(233319).uo],
                    subActions: () => [{
                        key: "collection duplication options",
                        render: e => (0, o.jsx)(a(844565).A, { ...e
                        }),
                        actions: r.actions
                    }]
                }),
                r = (0, a(233319).gy)({
                    key: "duplicate collection actions",
                    title: a(233319).AY.duplicateName,
                    actions: [(0, a(233319).Fw)({
                        key: "duplicate with data",
                        displayName: a(233319).AY.duplicateCollectionWithDataName,
                        analyticsName: "duplicate_with_data",
                        validators: [(0, a(572251).A)(a(442284).P), (0, a(572251).A)(a(99378).v), ...a(233319).uo],
                        shortcuts: ["duplicate"],
                        closeParentMenu: !0,
                        track: {
                            actionName: "duplicate"
                        },
                        action: async (e, {
                            blocks: t,
                            environment: n
                        }, o) => {
                            let i = await a(411648).VI.selectableBlockActions.load();
                            await i.duplicateBlocksWithMaybeConfirmation({
                                environment: n,
                                blocks: t,
                                duplicateOnlyCollectionSchema: !1,
                                callback: e,
                                from: "duplicate.to_selection.collection_with_data"
                            })
                        },
                        disabled: () => !a(205885).A.state.online,
                        renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                        disableTooltip: () => a(205885).A.state.online
                    }), (0, a(233319).Fw)({
                        key: "duplicate schema only",
                        displayName: a(233319).AY.duplicateCollectionSchemaOnlyName,
                        analyticsName: "duplicate_schema_only",
                        validators: [(0, a(572251).A)(a(442284).P), (0, a(572251).A)(a(99378).v), ...a(233319).uo],
                        shortcuts: ["duplicateSchema"],
                        closeParentMenu: !0,
                        track: {
                            actionName: "duplicate"
                        },
                        action: async (e, {
                            blocks: t,
                            environment: n
                        }, o) => {
                            let i = await a(411648).VI.selectableBlockActions.load();
                            await i.duplicateBlocksWithMaybeConfirmation({
                                environment: n,
                                blocks: t,
                                duplicateOnlyCollectionSchema: !0,
                                callback: e,
                                from: "duplicate.to_selection.collection_schema_only"
                            })
                        },
                        disabled: () => !a(205885).A.state.online,
                        renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                        disableTooltip: () => a(205885).A.state.online
                    })]
                }),
                s = (0, a(233319).Fw)({
                    key: "duplicate",
                    displayName: a(233319).AY.duplicateName,
                    analyticsName: a(233319).AY.duplicateName.defaultMessage,
                    svg: a(703696).V,
                    validators: [a(21848).v, a(963031).M, (0, a(515914).or)([(0, a(572251).A)(a(708047).G), a(235347).U]), (0, a(515914).or)([(0, a(572251).A)(a(923147).a), a(64865).A]), ...a(233319).uo, (0, a(572251).A)(a(804043).o), (0, a(572251).A)(a(15292).Z)],
                    shortcuts: ["duplicate"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "duplicate"
                    },
                    action: (e, {
                        blocks: t,
                        environment: a,
                        pageContext: n
                    }, o) => {
                        f({
                            environment: a,
                            blocks: t,
                            from: "fork_page.to_parent",
                            options: {
                                callback: e,
                                isCollectionDuplication: !1
                            },
                            pageContext: n
                        })
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                }),
                c = (0, a(35370).u)({
                    key: "duplicateCollection",
                    displayName: a(233319).AY.duplicateName,
                    analyticsName: a(233319).AY.duplicateName.defaultMessage,
                    svg: a(703696).V,
                    width: 275,
                    validators: [a(21848).v, a(963031).M, (0, a(572251).A)(a(458165).Q), (0, a(648903).U)([a(923147).a, (0, a(572251).A)(a(64865).A)]), ...a(233319).uo],
                    subActions: () => [{
                        key: "collection duplication options",
                        render: e => (0, o.jsx)(a(844565).A, { ...e
                        }),
                        actions: d.actions
                    }]
                }),
                d = (0, a(233319).gy)({
                    key: "duplicate collection actions",
                    title: a(233319).AY.duplicateName,
                    actions: [(0, a(233319).Fw)({
                        key: "duplicate with data",
                        displayName: a(233319).AY.duplicateCollectionWithDataName,
                        analyticsName: "duplicate_with_data",
                        validators: [(0, a(572251).A)(a(442284).P)],
                        shortcuts: ["duplicate"],
                        closeParentMenu: !0,
                        track: {
                            actionName: "duplicate"
                        },
                        action: (e, {
                            blocks: t,
                            environment: a,
                            pageContext: n
                        }, o) => {
                            f({
                                environment: a,
                                blocks: t,
                                from: "fork_page.to_parent.collection_with_data",
                                options: {
                                    duplicateOnlyCollectionSchema: !1,
                                    isCollectionDuplication: !0,
                                    callback: e
                                },
                                pageContext: n
                            })
                        },
                        disabled: () => !a(205885).A.state.online,
                        renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                        disableTooltip: () => a(205885).A.state.online
                    }), (0, a(233319).Fw)({
                        key: "duplicate schema only",
                        displayName: a(233319).AY.duplicateCollectionSchemaOnlyName,
                        analyticsName: "duplicate_schema_only",
                        validators: [(0, a(572251).A)(a(442284).P)],
                        shortcuts: ["duplicateSchema"],
                        closeParentMenu: !0,
                        track: {
                            actionName: "duplicate"
                        },
                        action: (e, {
                            blocks: t,
                            environment: a,
                            pageContext: n
                        }, o) => {
                            f({
                                environment: a,
                                blocks: t,
                                from: "fork_page.to_parent.collection_schema_only",
                                options: {
                                    duplicateOnlyCollectionSchema: !0,
                                    isCollectionDuplication: !0,
                                    callback: e
                                },
                                pageContext: n
                            })
                        },
                        disabled: () => !a(205885).A.state.online,
                        renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                        disableTooltip: () => a(205885).A.state.online
                    })]
                }),
                u = (0, a(515914).or)([(0, a(648903).U)([a(708047).G, a(584824).r]), (0, a(648903).U)([(0, a(572251).A)(a(708047).G), a(963031).M])]),
                p = (0, a(233319).Ls)({
                    key: "duplicate into private",
                    displayName: a(233319).AY.duplicateToPrivateName,
                    analyticsName: a(233319).AY.duplicateToPrivateName.defaultMessage,
                    svg: a(703696).V,
                    validators: [(0, a(572251).A)(a(648620).x), a(887175)._, a(998256).p, (0, a(572251).A)(a(974226).P), (0, a(515914).or)([a(653262).p, (0, a(572251).A)(u), n]), (0, a(515914).or)([(0, a(572251).A)(a(923147).a), a(64865).A]), (0, a(572251).A)(a(804043).o)],
                    closeParentMenu: !0,
                    action: async ({
                        blocks: e,
                        environment: t
                    }, a) => {
                        await y({
                            environment: t,
                            blocks: e,
                            from: "fork_page.to_private",
                            options: {
                                isCollectionDuplication: !1
                            }
                        })
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                }),
                m = (0, a(35370).u)({
                    key: "duplicate collection to private",
                    displayName: a(233319).AY.duplicateToPrivateName,
                    analyticsName: a(233319).AY.duplicateToPrivateName.defaultMessage,
                    svg: a(703696).V,
                    width: 275,
                    validators: [(0, a(572251).A)(a(648620).x), a(887175)._, a(998256).p, (0, a(572251).A)(a(974226).P), (0, a(515914).or)([a(653262).p, (0, a(572251).A)(a(963031).M), n]), (0, a(648903).U)([a(923147).a, (0, a(572251).A)(a(64865).A)]), (0, a(572251).A)(a(804043).o)],
                    subActions: () => [{
                        key: "collection duplication options",
                        render: e => (0, o.jsx)(a(844565).A, { ...e
                        }),
                        actions: g.actions
                    }]
                }),
                g = (0, a(233319).gy)({
                    key: "duplicate collection to private actions",
                    title: a(233319).AY.duplicateName,
                    actions: [(0, a(233319).Ls)({
                        key: "duplicate with data",
                        displayName: a(233319).AY.duplicateCollectionWithDataName,
                        analyticsName: "duplicate_with_data",
                        validators: [],
                        closeParentMenu: !0,
                        action: async ({
                            blocks: e,
                            environment: t,
                            pageContext: a
                        }) => {
                            await y({
                                environment: t,
                                blocks: e,
                                from: "fork_page.to_private.collection_with_data",
                                options: {
                                    duplicateOnlyCollectionSchema: !1,
                                    isCollectionDuplication: !0
                                }
                            })
                        },
                        disabled: () => !a(205885).A.state.online,
                        renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                        disableTooltip: () => a(205885).A.state.online
                    }), (0, a(233319).Ls)({
                        key: "duplicate schema only",
                        displayName: a(233319).AY.duplicateCollectionSchemaOnlyName,
                        analyticsName: "duplicate_schema_only",
                        validators: [],
                        closeParentMenu: !0,
                        action: async ({
                            blocks: e,
                            environment: t,
                            pageContext: a
                        }) => {
                            await y({
                                environment: t,
                                blocks: e,
                                from: "fork_page.to_private.collection_schema_only",
                                options: {
                                    duplicateOnlyCollectionSchema: !0,
                                    isCollectionDuplication: !0
                                }
                            })
                        },
                        disabled: () => !a(205885).A.state.online,
                        renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                        disableTooltip: () => a(205885).A.state.online
                    })]
                });

            function f(e) {
                let {
                    environment: t,
                    blocks: n,
                    options: o,
                    pageContext: i,
                    from: l
                } = e;
                if (!(0, a(194020).E)(t, (0, a(888).$)(i))) return;
                let r = n[0].getParentStore();
                ((null == r ? void 0 : r.table) === "block" || (null == r ? void 0 : r.table) === "team" || (null == r ? void 0 : r.table) === "space") && (0, a(918103).hh)({
                    environment: t,
                    sourceBlocks: n,
                    destination: (0, a(208322).LT)(r),
                    from: l,
                    options: {
                        duplicateOnlyCollectionSchema: null == o ? void 0 : o.duplicateOnlyCollectionSchema,
                        addCopyName: !0,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !0
                    },
                    navigateToTarget: !0,
                    skipUserFacingMessages: !1,
                    duplicateSubtreeGateName: null != o && o.isCollectionDuplication ? "duplicate_subtree_collection_flows" : "duplicate_subtree_basic_flows"
                }).then(e => {
                    if (a(300441).Q.isSuccess(e)) {
                        var t;
                        null == o || null == (t = o.callback) || t.call(o)
                    }
                })
            }
            async function y(e) {
                let {
                    environment: t,
                    blocks: n,
                    from: o,
                    options: i
                } = e, l = (0, a(328765).S)();
                if (!(0, a(194020).E)(t, l)) return;
                let r = a(728372).AppStoreSidebarSpaceViewStore.state;
                l && r && await (0, a(918103).hh)({
                    environment: t,
                    sourceBlocks: n,
                    destination: {
                        type: "space",
                        parent: (0, a(213003).n2)(l.id)
                    },
                    from: o,
                    options: {
                        duplicateOnlyCollectionSchema: null == i ? void 0 : i.duplicateOnlyCollectionSchema,
                        addCopyName: !1,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !0
                    },
                    navigateToTarget: !0,
                    skipUserFacingMessages: !1,
                    duplicateSubtreeGateName: null != i && i.isCollectionDuplication ? "duplicate_subtree_collection_flows" : "duplicate_subtree_basic_flows"
                })
            }
        },
        479131: (e, t, a) => {
            function n(e) {
                return !(a(420153).l.state || (0, a(245857).q)()) && e.blocks.every(e => !("suggest" !== a(708929).Uv.getMode(e) || e.pathIsDead() || (0, a(336136).dL)(e)) && e.canComment())
            }

            function o(e) {
                return e.blocks.every(e => {
                    let t = e.getRecordStoreUIParent();
                    return !!(t && e.isDefined() && e.getParentId() !== t.id)
                })
            }

            function i(e) {
                var t;
                let n = null == (t = a(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.id,
                    o = e.blocks.at(0);
                if (o) {
                    let e = o.getType(),
                        t = o.getFormat();
                    return !!(o.id === n && (0, a(955630).Db)(e, t))
                }
                return !1
            }
            a.d(t, {
                zo: () => s,
                Gx: () => c,
                UK: () => d
            }), a(18107), a(967357), a(296540), a(898992), a(823215);
            var l = a(474848);

            function r({
                props: e,
                context: t,
                styles: n
            }) {
                let o = (0, a(682985).K8)(() => (0, a(13042).d)(t.blocks.at(0)), [t.blocks]);
                return (0, l.jsx)(a(860287).A, { ...e,
                    ...n,
                    isRed: !0,
                    svg: a(968411).trashIcon,
                    title: (0, l.jsx)(a(109939).sA, { ...a(233319).AY.deleteName
                    }),
                    shortcut: "delete",
                    disabled: o,
                    disabledFeedback: o,
                    tooltipText: o ? (0, l.jsx)(a(109939).sA, { ...a(233319).AY.cannotDeleteBlockTooltip
                    }) : void 0
                })
            }
            let s = (0, a(233319).Fw)({
                    key: "delete block",
                    displayName: a(233319).AY.deleteName,
                    analyticsName: a(233319).AY.deleteName.defaultMessage,
                    closeParentMenu: !0,
                    svg: a(968411).trashIcon,
                    shortcuts: ["delete", "backspace"],
                    validators: [(0, a(515914).or)([(0, a(648903).U)([o, a(185273).e]), (0, a(648903).U)([(0, a(515914).or)([a(972831).Sv, n]), (0, a(572251).A)(a(648620).x)])]), (0, a(515914).or)([a(998256).p, n]), (0, a(572251).A)((0, a(648903).U)([a(887175)._, n])), (0, a(572251).A)(a(99378).v), (0, a(572251).A)(i), (0, a(572251).A)(a(918e3).P), (0, a(572251).A)((0, a(686412).X)(a(955630).xd.externalObjectInstancePage)), (0, a(572251).A)(a(877340).P), a(397620).z, (0, a(572251).A)(a(808628).r), (0, a(515914).or)([a(517506).p, a(533301).K, (0, a(572251).A)((0, a(160138).B)("feed"))])],
                    render: (e, t, {
                        styles: a
                    }) => (0, l.jsx)(r, {
                        props: e,
                        context: t,
                        styles: a
                    }),
                    track: {
                        actionName: "delete"
                    },
                    action: async (e, {
                        blocks: t,
                        environment: n
                    }, o) => {
                        await (0, a(660262).A)({
                            environment: n,
                            blocks: t,
                            shouldCheckSuggestEdit: !0,
                            callback: e
                        })
                    }
                }),
                c = (0, a(233319).Fw)({
                    key: "delete block when not page or collection",
                    displayName: a(233319).AY.deleteName,
                    analyticsName: a(233319).AY.deleteName.defaultMessage,
                    closeParentMenu: !0,
                    svg: a(968411).trashIcon,
                    shortcuts: ["delete", "backspace"],
                    validators: [(0, a(572251).A)((0, a(515914).or)([a(517506).p, a(533301).K])), (0, a(515914).or)([(0, a(648903).U)([o, a(185273).e]), (0, a(648903).U)([(0, a(515914).or)([a(972831).Sv, n]), (0, a(572251).A)(a(648620).x)])]), (0, a(515914).or)([a(998256).p, n]), (0, a(572251).A)((0, a(648903).U)([a(887175)._, n])), (0, a(572251).A)(a(99378).v), (0, a(572251).A)(i), (0, a(572251).A)(a(918e3).P), (0, a(572251).A)((0, a(686412).X)(a(955630).xd.externalObjectInstancePage)), (0, a(572251).A)(a(877340).P), a(397620).z, (0, a(572251).A)(a(808628).r), (0, a(515914).or)([a(517506).p, a(533301).K, (0, a(572251).A)((0, a(160138).B)("feed"))])],
                    render: s.render,
                    action: async (e, {
                        blocks: t,
                        environment: n
                    }, o) => {
                        await (0, a(660262).A)({
                            environment: n,
                            blocks: t,
                            shouldCheckSuggestEdit: !0,
                            callback: e
                        })
                    },
                    track: {
                        actionName: "delete"
                    }
                }),
                d = (0, a(233319).Fw)({
                    key: "move to trash block for collection menu",
                    displayName: a(233319).AY.moveToTrashName,
                    analyticsName: a(233319).AY.moveToTrashName.defaultMessage,
                    closeParentMenu: !0,
                    svg: a(968411).trashIcon,
                    shortcuts: ["delete", "backspace"],
                    validators: [(0, a(515914).or)([(0, a(648903).U)([o, a(185273).e]), (0, a(648903).U)([(0, a(515914).or)([a(972831).Sv, n]), (0, a(572251).A)(a(648620).x)])]), (0, a(515914).or)([a(998256).p, n]), (0, a(572251).A)((0, a(648903).U)([a(887175)._, n])), (0, a(572251).A)(a(99378).v), (0, a(572251).A)(i), (0, a(572251).A)(a(918e3).P), (0, a(572251).A)((0, a(686412).X)(a(955630).xd.externalObjectInstancePage)), (0, a(572251).A)(a(877340).P), a(397620).z, (0, a(572251).A)(a(808628).r), (0, a(515914).or)([a(517506).p, a(533301).K, (0, a(572251).A)((0, a(160138).B)("feed"))])],
                    render: (e, {
                        blocks: t
                    }, {
                        styles: n
                    }) => {
                        let o = (0, a(13042).d)(t.at(0));
                        return (0, l.jsx)(a(860287).A, { ...e,
                            ...n,
                            isRed: !0,
                            svg: a(968411).trashIcon,
                            title: (0, l.jsx)(a(109939).sA, { ...a(233319).AY.moveToTrashName
                            }),
                            shortcut: "delete",
                            disabled: o,
                            disabledFeedback: o,
                            tooltipText: o ? (0, l.jsx)(a(109939).sA, { ...a(233319).AY.cannotDeleteBlockTooltip
                            }) : void 0
                        })
                    },
                    track: {
                        actionName: "move_to_trash"
                    },
                    action: async (e, {
                        blocks: t,
                        environment: n
                    }, o) => {
                        await (0, a(660262).A)({
                            environment: n,
                            blocks: t,
                            shouldCheckSuggestEdit: !0,
                            callback: e
                        })
                    }
                })
        },
        494755: (e, t, a) => {
            a.d(t, {
                O: () => n
            }), a(898992), a(823215);

            function n(e) {
                return e.blocks.every(e => {
                    let t = e.getType(),
                        n = e.getFormat();
                    return (0, a(955630).dY)(t, n)
                })
            }
        },
        502272: (e, t, a) => {
            a.d(t, {
                $: () => n
            }), a(898992), a(823215);

            function n(e) {
                return !(a(420153).l.state || (0, a(245857).q)() || (0, a(142910).P)(e)) && e.blocks.every(e => !(e.pathIsDead() || (0, a(336136).dL)(e)) && e.canComment())
            }
        },
        515861: (e, t, a) => {
            a.d(t, {
                W: () => o
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.72 15.76 12.16",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.375 12A2.625 2.625 0 0 0 6 14.625h1.42a.625.625 0 1 1 0 1.25H6a3.875 3.875 0 0 1 0-7.75h9.741l-3.333-3.333a.625.625 0 0 1 .884-.884l4.4 4.4a.625.625 0 0 1 0 .884l-4.4 4.4a.625.625 0 0 1-.884-.884l3.333-3.333H6A2.625 2.625 0 0 0 3.375 12"
                    })
                },
                o = (0, a(104509).wt)("arrowUTurnUpRight", n, "default")
        },
        515914: (e, t, a) => {
            function n(e) {
                return t => e.some(e => e(t))
            }
            a.d(t, {
                or: () => n
            }), a(898992), a(737550)
        },
        517506: (e, t, a) => {
            function n(e) {
                let t = e.blocks.at(0);
                return void 0 !== t && t.isPageBlock()
            }
            a.d(t, {
                p: () => n
            }), a(18107), a(967357)
        },
        533301: (e, t, a) => {
            a.d(t, {
                K: () => n
            });

            function n(e) {
                if (e.blocks && 1 === e.blocks.length) {
                    let [t] = e.blocks;
                    return t.isCollectionView()
                }
                return !1
            }
        },
        540358: (e, t, a) => {
            a.d(t, {
                A: () => o
            }), a(296540);
            var n = a(474848);

            function o(e) {
                let {
                    style: t
                } = e, o = (0, a(960253).I)(() => ({
                    badge: {
                        letterSpacing: 0,
                        whiteSpace: "nowrap",
                        width: "fit-content",
                        ...t
                    }
                }), [t]);
                return (0, n.jsx)(a(746434).E, {
                    color: "blue",
                    style: o.badge,
                    content: (0, n.jsx)(a(109939).sA, {
                        id: "newBadgeComponent.label",
                        defaultMessage: "New"
                    })
                })
            }
        },
        550385: (e, t, a) => {
            a.d(t, {
                S: () => n
            });

            function n(e) {
                let {
                    experimentId: t,
                    disableExposureLogging: n,
                    enableEventTrailLogging: o
                } = e;
                return () => a(218744).default.checkGate({
                    gateName: t,
                    disableExposureLogging: n,
                    enableEventTrailLogging: o
                })
            }
        },
        552555: (e, t, a) => {
            function n(e) {
                let t = e.blocks.at(0);
                return !!(null == t ? void 0 : t.isType("image"))
            }
            a.d(t, {
                w: () => n
            }), a(18107), a(967357)
        },
        560063: (e, t, a) => {
            a.d(t, {
                I: () => n
            }), a(18107), a(967357);

            function n(e) {
                if (e.blocks) {
                    let t = e.blocks.at(0);
                    return !!((null == t ? void 0 : t.isType(a(955630).Ib)) && t.getNonCollectionProperty("source"))
                }
                return !1
            }
        },
        584824: (e, t, a) => {
            a.d(t, {
                r: () => n
            }), a(898992), a(823215);

            function n(e) {
                return e.blocks.every(t => {
                    let n = t.getParentStore();
                    if ((null == n ? void 0 : n.table) === "collection") {
                        let t = n.getParentBlockStore();
                        return t && (0, a(862085).M0)(t, e.publicEditMode, e.environment)
                    }
                    return !1
                })
            }
        },
        594965: (e, t, a) => {
            a.d(t, {
                a: () => i
            }), a(296540);
            var n = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 0.99 16.23 16.63",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M12.728 4.015H4.5a.875.875 0 0 0-.875.875v7.5l.005.09a.875.875 0 0 0 .87.784h1.813a.625.625 0 0 1 .625.626v1.838l3.034-2.334a.63.63 0 0 1 .38-.13H15.5l.09-.004a.875.875 0 0 0 .78-.78l.005-.09V6.089l1.247-1.248.003.049v7.5l-.01.216a2.126 2.126 0 0 1-2.115 1.909h-4.935l-3.872 2.977a.625.625 0 0 1-1.005-.495v-2.482H4.5l-.217-.011a2.126 2.126 0 0 1-1.908-2.114v-7.5c0-1.174.951-2.125 2.125-2.125h9.48z"
                        }), (0, n.jsx)("path", {
                            d: "M17.294 1.223a.77.77 0 0 1 1.084 0 .77.77 0 0 1 0 1.083v.012l-7.986 7.987a.87.87 0 0 1-.387.232l-.916.283c-.18.065-.361-.116-.31-.31l.284-.915a1.1 1.1 0 0 1 .232-.387z"
                        })]
                    })
                },
                i = (0, a(104509).wt)("commentPencil", o, "default")
        },
        595474: (e, t, a) => {
            a.d(t, {
                b: () => n
            });

            function n({
                environment: {
                    device: e
                }
            }) {
                return e.isElectron
            }
        },
        597426: (e, t, a) => {
            function n(e) {
                return e.blocks.length > 0 && e.blocks.some(e => e.isLocked())
            }
            a.d(t, {
                l: () => n
            }), a(898992), a(737550)
        },
        612256: (e, t, a) => {
            function n(e) {
                return !e.blocks.some(e => {
                    let t = null == e ? void 0 : e.getSystemBlockTypeStore().getValue();
                    return (0, a(512845).mi)(t)
                })
            }
            a.d(t, {
                ET: () => A,
                NQ: () => b,
                kf: () => i,
                Sr: () => m,
                YO: () => k,
                Wq: () => v,
                EC: () => d
            }), a(898992), a(737550);
            let o = (0, a(109939).YK)({
                openInFullPage: {
                    id: "action.navigation.openInFullPage",
                    defaultMessage: "Open in full page"
                },
                openInSidePeek: {
                    id: "action.navigation.openInSidePeek",
                    defaultMessage: "Open in side peek"
                },
                openInNewTab: {
                    id: "action.openInNewTab.name",
                    defaultMessage: "Open in new tab"
                },
                openInNewWindow: {
                    id: "action.openInNewWindow.name",
                    defaultMessage: "Open in new window"
                },
                openInFullPageShort: {
                    id: "action.navigation.openInFullPageShort",
                    defaultMessage: "Full page"
                },
                openInSidePeekShort: {
                    id: "action.navigation.openInSidePeekShort",
                    defaultMessage: "Side peek"
                },
                openInNewTabShort: {
                    id: "action.openInNewTab.nameShort",
                    defaultMessage: "New tab"
                },
                openInNewWindowShort: {
                    id: "action.openInNewWindow.nameShort",
                    defaultMessage: "New window"
                }
            });

            function i(e) {
                var t, n;
                let o = e.blocks[0];
                if (!o) return !1;
                if (null != (t = o.getModel()) && t.isNavigableBlock()) return !0;
                if (o.isType("alias")) {
                    let e = null == (n = o.getAliasTargetStore()) ? void 0 : n.getModel();
                    if ((null == e ? void 0 : e.table) === a(832375).evP && null != e && e.isNavigableBlock()) return !0
                }
                return !1
            }

            function l(e) {
                return a(475097).default.isSidePeekOpen()
            }
            let r = c(!1),
                s = c(!0);

            function c(e) {
                return (0, a(233319).Ls)({
                    key: "open in full page",
                    displayName: e ? o.openInFullPageShort : o.openInFullPage,
                    analyticsName: e ? o.openInFullPageShort.defaultMessage : o.openInFullPage.defaultMessage,
                    svg: a(89873).o,
                    validators: [a(21848).v, i, l],
                    closeParentMenu: !0,
                    action: e => {
                        let t = e.blocks[0],
                            n = t.getAliasTargetStore() ? ? t;
                        if (n.table === a(832375).SNf) return;
                        let o = (0, a(483227).Ay)({
                            store: n,
                            pageVisitSource: a(254656).y8.LinkInPage
                        });
                        (0, a(79266).navigate)({
                            environment: e.environment,
                            url: o
                        })
                    },
                    disabled: e => {
                        let t = a(205885).A.state.online,
                            n = e.blocks[0].id,
                            o = (0, a(597845).Bd)(n);
                        return !t && !o
                    },
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: e => {
                        let t = a(205885).A.state.online,
                            n = e.blocks[0].id,
                            o = (0, a(597845).Bd)(n);
                        return t || o
                    }
                })
            }
            let d = p(!1),
                u = p(!0);

            function p(e) {
                return (0, a(233319).Fw)({
                    key: "open side peek",
                    displayName: e ? o.openInSidePeekShort : o.openInSidePeek,
                    analyticsName: e ? o.openInSidePeekShort.defaultMessage : o.openInSidePeek.defaultMessage,
                    svg: a(357055).A,
                    shortcuts: ["openInSidePeek"],
                    validators: [a(21848).v, i, (0, a(572251).A)(a(803254).F), n, (0, a(572251).A)(a(750844).d), (0, a(572251).A)(a(659848).k)],
                    closeParentMenu: !0,
                    action: e => {
                        var t, n;
                        let {
                            route: o
                        } = e.environment.RouterStore.state, i = "chat" === o.name, l = "agent" === o.name, r = "meet" === o.name;
                        if (!(null == (t = a(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.id) && !i && !l && !r) return;
                        let s = e.blocks[0],
                            c = s.getAliasTargetStore() ? ? s;
                        if (c.table === a(832375).SNf) return;
                        let d = s.isInLibraryBlock(),
                            u = null == (n = (0, a(132702).OB)(o)) ? void 0 : n.chatThreadId,
                            p = i ? (0, a(366367).EY)({
                                currentRoute: o,
                                pageId: s.id,
                                pageVisitSource: a(254656).y8.AIChat,
                                scrollToBlockId: void 0,
                                isMobile: a(986939).A.isMobile
                            }) : l ? (0, a(453573).Lm)({
                                workflowId: o.workflowId,
                                params: {
                                    workflowViewType: o.workflowViewType,
                                    workflowViewId: o.workflowViewId,
                                    workflowPrompt: o.workflowPrompt,
                                    chatThreadId: o.chatThreadId,
                                    agentChatThreadId: o.agentChatThreadId
                                },
                                peekViewBlockId: s.id,
                                peekModeParam: "s",
                                scrollToBlockId: void 0,
                                pageVisitSource: a(254656).y8.PeekOpen,
                                isMobile: a(986939).A.isMobile
                            }) : (0, a(483227).Ay)({
                                store: c,
                                openInSidePeek: !0,
                                peekViewBlockId: c.id,
                                peekMode: "s",
                                pageVisitSource: d ? a(254656).y8.LibraryPage : a(254656).y8.PeekOpen,
                                chatThreadId: u
                            });
                        (0, a(79266).navigate)({
                            environment: e.environment,
                            url: p
                        })
                    },
                    disabled: e => {
                        let t = a(205885).A.state.online,
                            n = e.blocks[0].id,
                            o = (0, a(597845).Bd)(n);
                        return !t && !o
                    },
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: e => {
                        let t = a(205885).A.state.online,
                            n = e.blocks[0].id,
                            o = (0, a(597845).Bd)(n);
                        return t || o
                    }
                })
            }
            let m = f(!1),
                g = f(!0);

            function f(e) {
                return (0, a(233319).Fw)({
                    key: "navigate to page in new tab",
                    analyticsName: "Navigate to page in new tab",
                    displayName: e ? o.openInNewTabShort : o.openInNewTab,
                    svg: a(684668).arrowDiagonalUpRightIcon,
                    validators: [a(21848).v, i, (0, a(572251).A)(a(803254).F), (0, a(572251).A)(a(980039).I)],
                    shortcuts: ["commandShiftEnter"],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: t
                    }) => {
                        let n = e[0].isInLibraryBlock() ? a(254656).y8.LibraryPage : a(254656).y8.LinkInPage;
                        if (e[0].isType("alias")) {
                            var o;
                            let i = e[0];
                            if (!(null == (o = a(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : o.id)) return;
                            let l = i.getAliasTargetStore() ? ? i;
                            if (l.table === a(832375).SNf) return;
                            a(605858).Yf({
                                environment: t,
                                blocks: [l],
                                openInNew: "tab",
                                pageVisitSource: n
                            })
                        } else a(605858).Yf({
                            environment: t,
                            blocks: e,
                            openInNew: "tab",
                            pageVisitSource: n
                        })
                    },
                    disabled: e => {
                        let t = a(205885).A.state.online,
                            n = e.blocks[0].id,
                            o = (0, a(597845).Bd)(n);
                        return !t && !o
                    },
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: e => {
                        let t = a(205885).A.state.online,
                            n = e.blocks[0].id,
                            o = (0, a(597845).Bd)(n);
                        return t || o
                    }
                })
            }
            let y = h(!1);

            function h(e) {
                return (0, a(233319).Ls)({
                    key: "navigate to page in new window",
                    analyticsName: "Navigate to page in new window",
                    displayName: e ? o.openInNewWindowShort : o.openInNewWindow,
                    svg: a(900333).U,
                    validators: [a(21848).v, a(887175)._, a(977003).i, (0, a(572251).A)(a(662136).l), (0, a(572251).A)(a(803254).F), (0, a(572251).A)(a(980039).I)],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: t
                    }) => {
                        a(605858).Yf({
                            environment: t,
                            blocks: e,
                            openInNew: "window",
                            pageVisitSource: a(254656).y8.LinkInPage
                        })
                    },
                    disabled: e => {
                        let t = a(205885).A.state.online,
                            n = e.blocks[0].id,
                            o = (0, a(597845).Bd)(n);
                        return !t && !o
                    },
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: e => {
                        let t = a(205885).A.state.online,
                            n = e.blocks[0].id,
                            o = (0, a(597845).Bd)(n);
                        return t || o
                    }
                })
            }
            let v = [g, h(!0), s, u],
                k = [m, y, r, d],
                b = (0, a(233319).Fw)({
                    key: "go up one page",
                    analyticsName: "Go up one page",
                    displayName: void 0,
                    validators: [a(668400).G],
                    shortcuts: ["peekUp"],
                    closeParentMenu: !0,
                    action: () => (0, a(973929).N)()
                }),
                A = (0, a(233319).Fw)({
                    key: "go down one page",
                    analyticsName: "Go down one page",
                    displayName: void 0,
                    validators: [a(668400).G],
                    shortcuts: ["peekDown"],
                    closeParentMenu: !0,
                    action: () => (0, a(230336).E)()
                })
        },
        612678: (e, t, a) => {
            a.d(t, {
                DX: () => s,
                II: () => l,
                J1: () => c,
                Rw: () => v,
                kl: () => h,
                nd: () => d,
                qC: () => u,
                qW: () => r
            }), a(898992), a(823215), a(581454);
            var n = a(296540),
                o = a(474848);
            let i = (0, a(109939).YK)({
                lastUsedHighlightTitle: {
                    id: "action.lastUsedHighlight.title",
                    defaultMessage: "Last used"
                },
                lastUsedHighlightKeywords: {
                    id: "action.lastUsedHighlight.fuzzySearchKeywords",
                    defaultMessage: "Color last used"
                },
                highlightName: {
                    id: "action.highlight.name",
                    defaultMessage: "Highlight"
                }
            });

            function l(e) {
                let {
                    itemRenderer: t
                } = e;
                return (0, a(233319).gy)({
                    key: "text color actions",
                    title: a(233319).AY.colorSection,
                    actions: a(632079).N.map(e => m({
                        blockColor: e,
                        itemRenderer: t
                    }))
                })
            }
            let r = l({
                itemRenderer: e => {
                    let {
                        color: t,
                        overrideDisplayName: n,
                        selected: i
                    } = e;
                    return (0, o.jsx)(a(377357).A, { ...e.menuListItemProps,
                        color: t,
                        overrideDisplayName: n,
                        selected: i
                    })
                }
            });

            function s(e) {
                let {
                    itemRenderer: t
                } = e;
                return (0, a(233319).gy)({
                    key: "background color actions",
                    title: a(233319).AY.backgroundSection,
                    overrideSearchTitle: a(233319).AY.backgroundSectionKeywords,
                    actions: a(632079).AQ.map(e => m({
                        blockColor: e,
                        itemRenderer: t
                    }))
                })
            }
            let c = s({
                    itemRenderer: e => {
                        let {
                            color: t,
                            overrideDisplayName: n,
                            selected: i
                        } = e;
                        return (0, o.jsx)(a(377357).A, { ...e.menuListItemProps,
                            color: t,
                            overrideDisplayName: n,
                            selected: i
                        })
                    }
                }),
                d = (0, a(233319).gy)({
                    key: "background color selection actions",
                    title: a(233319).AY.backgroundSection,
                    overrideSearchTitle: a(233319).AY.backgroundSectionKeywords,
                    actions: a(632079).AQ.map(e => f(e))
                }),
                u = (0, a(233319).gy)({
                    key: "text color selection actions",
                    title: a(233319).AY.colorSection,
                    actions: a(632079).N.map(e => f(e))
                });

            function p() {
                return [a(998256).p, (0, a(572251).A)(a(99378).v), a(211129).Y, a(446019).M, (0, a(572251).A)(a(252805).C), a(424884).P]
            }

            function m(e) {
                let {
                    blockColor: t,
                    overrideKey: n,
                    overrideDisplayName: i,
                    itemRenderer: l
                } = e, r = i || (0, a(746998).qo)(t), s = (0, a(233319).Ls)({
                    key: `color ${n||t}`,
                    displayName: r,
                    analyticsName: r.defaultMessage,
                    analyticsActionType: "change_block_color",
                    fuzzySearchKeywords: (0, a(233319).Mf)(t),
                    validators: p(),
                    track: {
                        actionName: "set_color"
                    },
                    action: (e, {
                        blocks: n,
                        environment: o,
                        pageContext: i
                    }, l) => {
                        var r;
                        a(31187).Q(t);
                        let s = null == i || null == (r = i.spaceStore) ? void 0 : r.getSpaceId(),
                            {
                                serverCommitResult: c,
                                transactionId: d
                            } = (0, a(377796).createAndCommit)({
                                userAction: "actionRegistry.createBlockColorAction",
                                environment: o,
                                cellTarget: s ? {
                                    spaceWithId: s
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    if (1 === n.length && n[0].isFirstBlockInCalloutV2Block()) {
                                        let e = n[0].getParentStore();
                                        e instanceof a(970831).B && (n = [e])
                                    }(0, a(632079).Cg)(t) || (a(31904).Vd({
                                        environment: o,
                                        annotationKey: "hb",
                                        blocks: n,
                                        transaction: e
                                    }), a(31904).Vd({
                                        environment: o,
                                        annotationKey: "hf",
                                        blocks: n,
                                        transaction: e
                                    }), (0, a(715144).z)({
                                        stores: a(381453).qI(n, e => (0, a(966980).zo)({
                                            blockStore: e,
                                            transclusionReferences: "omit",
                                            childPages: "omit"
                                        })),
                                        update: {
                                            block_color: void 0
                                        },
                                        transaction: e
                                    })), (0, a(715144).z)({
                                        stores: n,
                                        update: {
                                            block_color: t
                                        },
                                        transaction: e
                                    })
                                }
                            });
                        return e.setMetadata({
                            transactionId: d
                        }), c.then(e)
                    },
                    closeParentMenu: !0,
                    render: (e, a) => (0, o.jsx)(g, {
                        props: e,
                        context: a,
                        blockColor: t,
                        itemRenderer: l,
                        actionDisplayName: s.displayName
                    }),
                    nativeImageReference: ({
                        environment: e
                    }) => (0, a(233319).Kg)(e, t, n)
                });
                return s
            }

            function g({
                props: e,
                context: t,
                blockColor: n,
                itemRenderer: i,
                actionDisplayName: l
            }) {
                let r = (0, a(682985).K8)(() => n === (t.blocks.length > 0 ? t.blocks[0].getFormat().block_color : "default"), [n, t.blocks]);
                return (0, o.jsx)(o.Fragment, {
                    children: i({
                        menuListItemProps: e,
                        color: n,
                        selected: r,
                        overrideDisplayName: l
                    })
                })
            }

            function f(e, t, n) {
                let i = n || (0, a(746998).qo)(e),
                    l = (0, a(233319).Ls)({
                        key: `color ${t||e}`,
                        displayName: i,
                        analyticsName: i.defaultMessage,
                        fuzzySearchKeywords: (0, a(233319).Mf)(e),
                        validators: p(),
                        action: async ({
                            blocks: t,
                            environment: n
                        }) => {
                            a(987329).shouldPreserveExistingSelection(n) && await a(770520).A.clearNativeActionMenuAndRestoreSelectionIfNecessary(), a(31187).Q(e), a(31904).po({
                                environment: n,
                                annotation: ["h", e]
                            }), (0, a(961511).s)(n, {
                                action: "h",
                                color: e
                            })
                        },
                        closeParentMenu: !0,
                        render: t => (0, o.jsx)(a(377357).A, { ...t,
                            color: e,
                            overrideDisplayName: l.displayName
                        }),
                        nativeImageReference: ({
                            environment: n
                        }) => (0, a(233319).Kg)(n, e, t)
                    });
                return l
            }
            let y = n.forwardRef(function(e, t) {
                    let n = (0, a(682985).K8)(() => a(735140).A.getMostRecentlyUsedColor(), []);
                    return (0, o.jsx)(a(377357).A, { ...e,
                        ref: t,
                        color: n,
                        shortcuts: ["toggleHighlight"]
                    })
                }),
                h = (0, a(233319).gy)({
                    key: "toggle last highlight",
                    title: i.lastUsedHighlightTitle,
                    overrideSearchTitle: i.lastUsedHighlightKeywords,
                    actions: [(0, a(233319).Fw)({
                        key: "toggle highlight action",
                        displayName: i.highlightName,
                        analyticsName: i.highlightName.defaultMessage,
                        validators: p(),
                        shortcuts: ["toggleHighlight"],
                        closeParentMenu: !0,
                        track: {
                            actionName: "set_color"
                        },
                        action: (e, {
                            environment: t,
                            blocks: n,
                            pageContext: o
                        }, i) => {
                            var l;
                            let r = a(735140).A.getMostRecentlyUsedColor(),
                                s = null == o || null == (l = o.spaceStore) ? void 0 : l.getSpaceId(),
                                {
                                    serverCommitResult: c,
                                    transactionId: d
                                } = (0, a(377796).createAndCommit)({
                                    userAction: "actionRegistry.toggleLastUsedHighlight",
                                    environment: t,
                                    cellTarget: s ? {
                                        spaceWithId: s
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        let t = n.every(e => {
                                            let t = e.getFormat();
                                            return t && t.block_color === r
                                        });
                                        (0, a(715144).z)({
                                            stores: n,
                                            update: {
                                                block_color: t ? void 0 : r
                                            },
                                            transaction: e
                                        })
                                    }
                                });
                            return e.setMetadata({
                                transactionId: d
                            }), c.then(e)
                        },
                        render: e => (0, o.jsx)(y, { ...e
                        })
                    })]
                }),
                v = (0, a(35370).u)({
                    key: "color section",
                    displayName: a(233319).AY.colorName,
                    analyticsName: a(233319).AY.colorName.defaultMessage,
                    svg: a(666855).M,
                    validators: p(),
                    subActions: () => [h, r, c]
                })
        },
        621792: (e, t, a) => {
            a.d(t, {
                Lc: () => c,
                Zm: () => s
            }), a(898992), a(672577);
            var n = () => a(300441),
                o = () => a(722371),
                i = () => a(764759);
            async function l(e) {
                var t;
                let {
                    environment: l,
                    store: r,
                    callback: s
                } = e;
                if (!r.isType(a(955630).J8)) throw new(a(101787)).yI4("Unknown transclusion type");
                let c = r.getRecordStoreUIParent();
                if (!c || !(0, a(966980).iU)(c)) return;
                let d = "transclusion_reference" === r.getType() ? r.getTransclusionReferenceTargetStore() : r;
                if (!d) return;
                let u = (t = d, a(496704).K.find(e => e.getBlockStore() === t));
                if (!u) return;
                let p = "transclusion_container" === r.getType() ? u.confirmUnsyncTransclusionContainer : u.confirmUnsyncTransclusionReference,
                    m = await p();
                if (r.isType("transclusion_container")) {
                    let e = (0, a(184273).Ju)(r, l);
                    (0, a(104310).u)({
                        event: {
                            eventName: "unsync_transclusion_block",
                            eventProperties: {
                                confirmed: m,
                                is_delete: !1,
                                num_backlinks: e.backlinksCount + e.inaccessibleBacklinkCount
                            }
                        }
                    })
                }
                if (!m) {
                    null == s || s();
                    return
                }
                let g = (0, a(259242).UT)({
                    environment: l,
                    eventName: a(673706).K,
                    request: {
                        block: {
                            id: r.pointer.id,
                            spaceId: r.getSpaceId()
                        }
                    },
                    multiCellRouting: {
                        spaceIds: []
                    }
                });
                for await (let e of ("transclusion_reference" === r.getType() && i().A.addUnsyncingBlockId(r.id), g)) n().Q.isSuccess(e) && ("started" === e.value.status || "succeeded" === e.value.status ? null == s || s() : "failed" === e.value.status ? i().A.removeUnsyncingBlockId(r.id) : (0, o().HB)(e.value.status))
            }
            a(18107), a(967357);
            let r = (0, a(109939).YK)({
                    unsyncTransclusionReferenceName: {
                        id: "action.unsyncTransclusionReference.name",
                        defaultMessage: "Unsync"
                    },
                    unsyncTransclusionReferenceFuzzySearch: {
                        id: "action.unsyncTransclusionReference.fuzzySearchKeywords",
                        defaultMessage: "Unsync ungroup"
                    },
                    unsyncTransclusionContainerName: {
                        id: "action.unsyncTransclusionContainerName.name",
                        defaultMessage: "Unsync all"
                    },
                    unsyncTransclusionContainerFuzzySearch: {
                        id: "action.unsyncTransclusionContainer.fuzzySearchKeywords",
                        defaultMessage: "Unsync all ungroup"
                    }
                }),
                s = (0, a(233319).Fw)({
                    key: "unsyncTransclusionReference",
                    displayName: r.unsyncTransclusionReferenceName,
                    analyticsName: r.unsyncTransclusionReferenceName.defaultMessage,
                    fuzzySearchKeywords: r.unsyncTransclusionReferenceFuzzySearch,
                    svg: a(848147).i,
                    validators: [a(998256).p, function(e) {
                        if (!e.blocks) return !1; {
                            let t = e.blocks.at(0);
                            if (!t || t.pathIsDead() || (0, a(336136).dL)(t)) return !1;
                            if (t.getType() === a(955630).xd.transclusionReference) {
                                let e = t.getTransclusionReferenceTargetStore();
                                return !!(e && e.canEdit())
                            }
                            return !1
                        }
                    }, a(21848).v],
                    shortcuts: ["ungroup"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "unsync_transclusion_reference"
                    },
                    action: (e, {
                        environment: t,
                        blocks: a
                    }, n) => l({
                        environment: t,
                        store: a[0],
                        callback: e
                    })
                }),
                c = (0, a(233319).Fw)({
                    key: "unsyncTransclusionContainer",
                    displayName: r.unsyncTransclusionContainerName,
                    analyticsName: r.unsyncTransclusionContainerName.defaultMessage,
                    fuzzySearchKeywords: r.unsyncTransclusionContainerFuzzySearch,
                    svg: a(848147).i,
                    validators: [a(998256).p, function(e) {
                        if (e.blocks) {
                            let t = e.blocks.at(0);
                            return !(!t || t.pathIsDead() || (0, a(336136).dL)(t)) && t.getType() === a(955630).xd.transclusionContainer
                        }
                        return !1
                    }, a(21848).v],
                    shortcuts: ["ungroup"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "unsync_transclusion_container"
                    },
                    action: (e, {
                        environment: t,
                        blocks: a
                    }, n) => l({
                        environment: t,
                        store: a[0],
                        callback: e
                    })
                })
        },
        628664: (e, t, a) => {
            a.d(t, {
                f: () => n
            }), a(18107), a(967357);

            function n() {
                return !!a(912846).default.state.redoStack.at(-1)
            }
        },
        641822: (e, t, a) => {
            a.d(t, {
                N: () => n
            });

            function n(e, t, n) {
                "dark" !== n && t || "default" !== e && "default_background" !== e || (e = "gray");
                let o = a(632079).Ld[e];
                return o ? a(632079).Tj[o].border[t ? "strong" : "primaryTranslucent"] : a(632079).Tj.text.primary
            }
        },
        648620: (e, t, a) => {
            a.d(t, {
                x: () => n
            }), a(898992), a(823215);

            function n(e) {
                return e.blocks.every(e => {
                    let t = a(522756).A.findOutlinerItemFromStore(e);
                    return !!(t && t.isTopLevelItem && "bookmarks" === t.type)
                })
            }
        },
        648903: (e, t, a) => {
            function n(e) {
                return t => e.every(e => e(t))
            }
            a.d(t, {
                U: () => n
            }), a(898992), a(823215)
        },
        653262: (e, t, a) => {
            a.d(t, {
                p: () => n
            }), a(898992), a(823215);

            function n(e) {
                return e.blocks.every(e => {
                    let t = a(522756).A.findOutlinerItemFromStore(e);
                    return !!(t && t.isTopLevelItem && "shared" === t.type)
                })
            }
        },
        653601: (e, t, a) => {
            a.d(t, {
                c: () => n
            });

            function n() {
                return "editing" === a(358377).default.state.mode
            }
        },
        655140: (e, t, a) => {
            function n(e) {
                let t = e.blocks.at(0);
                return !!(null == t ? void 0 : t.isPersonProfile())
            }
            a.d(t, {
                v: () => n
            }), a(18107), a(967357)
        },
        662136: (e, t, a) => {
            a.d(t, {
                l: () => n
            });

            function n(e) {
                if (e.blocks && 1 === e.blocks.length) {
                    let [t] = e.blocks;
                    return t.isType(a(955630).xd.collectionView)
                }
                return !1
            }
        },
        666855: (e, t, a) => {
            a.d(t, {
                M: () => o
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.74 2.66 14.98 14.67",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M5.606 2.669a1.55 1.55 0 0 0-1.55 1.55v.379l-.068-.004h-.694a.55.55 0 0 0 0 1.1h.694l.068-.004v.379c0 .856.694 1.55 1.55 1.55h8.788a1.55 1.55 0 0 0 1.55-1.55v-.375h.3c.207 0 .375.168.375.375v2.023a.375.375 0 0 1-.375.375h-5.319c-.815 0-1.475.66-1.475 1.475v.592a1.55 1.55 0 0 0-1.462 1.547v3.7c0 .856.694 1.55 1.55 1.55h.925a1.55 1.55 0 0 0 1.55-1.55v-3.7a1.55 1.55 0 0 0-1.463-1.547v-.592c0-.207.168-.375.375-.375h5.319c.814 0 1.475-.66 1.475-1.475V6.069c0-.815-.66-1.475-1.475-1.475h-.3v-.375a1.55 1.55 0 0 0-1.55-1.55zm-.3 1.55a.3.3 0 0 1 .3-.3h8.788a.3.3 0 0 1 .3.3v1.85a.3.3 0 0 1-.3.3H5.606a.3.3 0 0 1-.3-.3zm3.932 7.862a.3.3 0 0 1 .3-.3h.925a.3.3 0 0 1 .3.3v3.7a.3.3 0 0 1-.3.3h-.925a.3.3 0 0 1-.3-.3z"
                    })
                },
                o = (0, a(104509).wt)("blockColor", n, "default")
        },
        668400: (e, t, a) => {
            a.d(t, {
                G: () => n
            });

            function n(e) {
                return a(447036).Gb()
            }
        },
        685632: (e, t, a) => {
            a.d(t, {
                b: () => n
            }), a(18107), a(967357);

            function n(e) {
                let t = e.blocks.at(0);
                return (0, a(880265).m)(t)
            }
        },
        689441: (e, t, a) => {
            a.d(t, {
                p: () => n
            }), a(898992), a(823215);

            function n(e) {
                return e.blocks.every(e => {
                    let t = e.getModel(),
                        n = e.getRecordStoreUIParent();
                    return !!(t && t.isType(a(955630).Si) && t.getType() !== a(955630).xd.transclusionContainer && e.getParentTable() !== a(832375).VlP && n && n.id === e.getParentId())
                })
            }
        },
        708047: (e, t, a) => {
            a.d(t, {
                G: () => n
            });

            function n() {
                let e = (0, a(248567).F)();
                return !!(null == e ? void 0 : e.getAssociatedCollectionStore())
            }
        },
        734533: (e, t, a) => {
            a.d(t, {
                c: () => n
            }), a(898992), a(823215);

            function n(e) {
                let t = (0, a(385941).Z)();
                return !!t && e.blocks.every(e => t.uiContains(e) && t.id !== e.id)
            }
        },
        750844: (e, t, a) => {
            a.d(t, {
                d: () => n
            });

            function n() {
                let e = (0, a(330870).a)();
                return (0, a(933062).lU)(e)
            }
        },
        766550: (e, t, a) => {
            function n(e) {
                return t => {
                    if (t.blocks) {
                        let a = t.blocks.at(0);
                        return !!(null == a ? void 0 : a.getNonCollectionProperty(e))
                    }
                    return !1
                }
            }
            a.d(t, {
                h: () => n
            }), a(18107), a(967357)
        },
        803254: (e, t, a) => {
            a.d(t, {
                F: () => n
            });

            function n() {
                return a(986939).A.isMobile
            }
        },
        848147: (e, t, a) => {
            a.d(t, {
                i: () => o
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.12 2.37 19.76 15.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "m4.897 3.085-.122-.142a.625.625 0 1 0-.95.814l.755.88A7.6 7.6 0 0 0 2.375 10v1.151L1.188 9.964a.625.625 0 1 0-.884.884l2.254 2.254c.244.244.64.244.884 0l2.254-2.254a.625.625 0 1 0-.884-.884l-1.187 1.187V10a6.35 6.35 0 0 1 1.772-4.41l8.258 9.634A6.35 6.35 0 0 1 10 16.375a6.35 6.35 0 0 1-4.338-1.703.625.625 0 0 0-.85.915A7.6 7.6 0 0 0 10 17.626a7.6 7.6 0 0 0 4.472-1.448l.754.88a.625.625 0 0 0 1.041-.67L4.989 3.228a.6.6 0 0 1-.093-.144M16.22 14.411A7.6 7.6 0 0 0 17.625 10V8.849l1.187 1.187a.625.625 0 1 0 .884-.884l-2.254-2.254a.625.625 0 0 0-.884 0l-2.254 2.254a.625.625 0 1 0 .884.884l1.187-1.187V10a6.35 6.35 0 0 1-.998 3.427zM7.435 4.162A6.35 6.35 0 0 1 10 3.625c1.676 0 3.2.646 4.338 1.703a.625.625 0 1 0 .85-.916A7.6 7.6 0 0 0 10 2.375a7.6 7.6 0 0 0-3.409.802z"
                    })
                },
                o = (0, a(104509).wt)("arrowCircleLoopSlash", n, "default")
        },
        869770: (e, t, a) => {
            a.d(t, {
                Ay: () => p,
                og: () => r
            });
            var n, o = a(296540),
                i = a(474848);
            let l = o.lazy(() => Promise.all([a.e(54951), a.e(96579), a.e(18653)]).then(a.bind(a, 998723)).then(e => ({
                    default: e.PremiumFeatureBadgeWrapper
                }))),
                r = ((n = {})[n.Insert = 0] = "Insert", n[n.TurnInto = 1] = "TurnInto", n);

            function s(e) {
                let {
                    thumbnail: t,
                    iconSize: n
                } = e, o = (0, a(960253).I)(() => ({
                    simplifiedThumbnail: {
                        display: "block",
                        width: n,
                        height: n,
                        flexGrow: 0,
                        flexShrink: 0,
                        background: a(632079).oZ.white
                    }
                }), [n]), l = (0, a(703003).L)(t) || a(739528).M;
                return (0, i.jsx)(a(989059).A, {
                    src: l,
                    style: o.simplifiedThumbnail
                })
            }
            let c = {
                shortcut: {
                    color: a(632079).Tj.text.tertiary,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    paddingInlineEnd: 2
                },
                style0: {
                    marginInlineStart: 6
                }
            };

            function d({
                badgeOverride: e,
                showCheck: t
            }) {
                return t ? null : (0, i.jsxs)(i.Fragment, {
                    children: ["new" === e ? (0, i.jsx)(a(540358).A, {}) : null, "beta" === e ? (0, i.jsx)(a(18274).A, {}) : null, "alpha" === e ? (0, i.jsx)(a(674788).A, {}) : null]
                })
            }

            function u({
                featureName: e,
                badgeOverride: t,
                showCheck: a
            }) {
                return e ? (0, i.jsx)(o.Suspense, {
                    fallback: (0, i.jsx)(d, {
                        badgeOverride: t,
                        showCheck: a
                    }),
                    children: (0, i.jsx)(l, {
                        featureName: e,
                        badgeOverride: t,
                        showCheck: a
                    })
                }) : (0, i.jsx)(d, {
                    badgeOverride: t,
                    showCheck: a
                })
            }
            let p = o.forwardRef(function(e, t) {
                let n = (0, a(533992).v3)(),
                    l = "dark" === (0, a(960253).e)(),
                    {
                        isMenuListFocusVisible: d
                    } = (0, o.useContext)(a(842459).V),
                    p = (0, a(67499).S)(),
                    {
                        description: m,
                        format: g,
                        selected: f,
                        title: y,
                        sectionTitle: h,
                        showSectionTitle: v,
                        thumbnail: k,
                        tooltipPhoto: b,
                        thumbnailPadding: A,
                        isDisabled: S,
                        disabledTooltipMessage: w,
                        shortcut: N,
                        icon: M,
                        desktopTitleStyle: I,
                        blockType: T,
                        integrationId: P
                    } = e,
                    x = g === r.Insert,
                    _ = (0, a(682985).K8)(() => !!S && S({
                        environment: n,
                        blocks: a(584265).default.state.stores,
                        publicEditMode: void 0,
                        pageContext: p
                    }), [n, S, p]),
                    C = (0, a(682985).K8)(() => {
                        if (w) return w({
                            environment: n,
                            blocks: a(584265).default.state.stores,
                            publicEditMode: void 0,
                            pageContext: p
                        })
                    }, [n, w, p]),
                    B = (0, a(682985).K8)(() => {
                        if (P && "collection_view" === T) return (0, a(59651).l)(P)
                    }, [P, T]),
                    F = (0, a(960253).I)(() => ({
                        icon: {
                            width: 20,
                            height: 20,
                            fill: a(632079).Tj.icon.primary
                        },
                        title: {
                            marginInlineEnd: 6
                        },
                        sectionTitle: {
                            color: a(632079).Tj.text.tertiary,
                            marginInlineEnd: 6,
                            ...a(699422).RC
                        }
                    }), [20, 6]),
                    j = (0, o.useCallback)(() => (0, i.jsx)(s, {
                        isInsertFormat: x,
                        iconSize: 20,
                        thumbnailPadding: A,
                        thumbnail: k
                    }), [k, A, x, 20]),
                    {
                        badge: Y,
                        ...U
                    } = e,
                    V = x && !!N,
                    O = void 0 !== M,
                    R = !!(f && !x),
                    [{
                        value: z
                    }] = (0, a(97668).Yb)(async () => {
                        let {
                            assistantDependency: e
                        } = await Promise.resolve().then(a.bind(a, 310639));
                        return (await e.load()).AssistantFeatureGateStore
                    }, []),
                    L = (0, a(682985).K8)(() => "ai_block" === T ? (null == z ? void 0 : z.isAiBlockConfigurationMenuEnabledForUser()) ? "new" : "ai" : "function" == typeof Y ? Y() : Y, [z, T, Y]),
                    K = (0, o.useCallback)(e => (0, i.jsx)(a(95582).A, { ...(0, a(63390).A)(e || {}, U),
                        desktopTitleStyle: I,
                        ref: t,
                        isChecked: R,
                        right: V ? (0, i.jsx)("span", {
                            style: c.shortcut,
                            children: N
                        }) : void 0,
                        title: (0, i.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            children: [v ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    style: F.title,
                                    children: y
                                }), (0, i.jsx)("span", {
                                    style: F.sectionTitle,
                                    children: "·"
                                }), (0, i.jsx)("span", {
                                    style: F.sectionTitle,
                                    children: h
                                })]
                            }) : (0, i.jsx)("span", {
                                style: F.title,
                                children: y
                            }), L && !R ? (0, i.jsx)("span", {
                                style: c.style0,
                                children: (0, i.jsx)(u, {
                                    featureName: B,
                                    badgeOverride: L,
                                    showCheck: R
                                })
                            }) : (0, i.jsx)(u, {
                                featureName: B,
                                badgeOverride: L,
                                showCheck: R
                            })]
                        }),
                        icon: O ? (0, i.jsx)(a(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            children: M(l)(F.icon)
                        }) : j(),
                        disabled: _,
                        disabledFeedback: _
                    }), [U, t, R, F.icon, y, F.title, j, _, O, M, N, V, v, h, F.sectionTitle, l, I, B, L]),
                    D = (0, o.useCallback)(() => {
                        if (_ && C) return (0, i.jsx)("div", {
                            children: C
                        });
                        let e = b ? (0, a(703003).L)(b) : void 0;
                        return (0, i.jsx)(a(916612).A, {
                            imageURL: e,
                            imageWidth: 140,
                            imageHeight: 100,
                            caption: m
                        })
                    }, [_, b, m, C]);
                if (a(986939).A.isMobile) return K();
                let H = !!e.focused && !!d || void 0;
                return (0, i.jsx)(a(51831).m, {
                    content: D,
                    placement: "right",
                    delayThreshold: 0,
                    forceVisibleState: H,
                    children: e => K(e)
                })
            })
        },
        869782: (e, t, a) => {
            function n(e) {
                let {
                    store: t
                } = e, n = t.getImageHyperlink() || "", o = a(496704).K.getRect(t);
                a(504835).A.setState({
                    open: !0,
                    url: "",
                    type: "image",
                    selectionRect: o,
                    store: t,
                    imageHyperlink: "placeholder" !== n ? n : void 0,
                    focusLinkInput: !0,
                    trapFocus: !0
                })
            }

            function o() {
                a(504835).A.setState({
                    open: !1,
                    type: "image"
                })
            }

            function i(e) {
                let {
                    url: t,
                    transaction: n
                } = e, o = a(504835).A.state;
                if (!o.open) return;
                let i = a(41403).bS(t);
                (0, a(715144).z)({
                    stores: [o.store],
                    update: {
                        image_hyperlink: i
                    },
                    transaction: n
                }), a(504835).A.setState({ ...o,
                    imageHyperlink: i,
                    url: ""
                })
            }

            function l(e) {
                let t = a(504835).A.state;
                if (!t.open) return;
                let n = t.store.getSpaceId();
                (0, a(377796).createAndCommit)({
                    userAction: "imageHyperlink.unlinkImage",
                    environment: e,
                    canUndo: !0,
                    cellTarget: n ? {
                        spaceWithId: n
                    } : void 0,
                    perform: e => {
                        (0, a(715144).z)({
                            stores: [t.store],
                            update: {
                                image_hyperlink: null
                            },
                            transaction: e
                        })
                    }
                }), a(504835).A.reset()
            }
            a.d(t, {
                J6: () => o,
                PA: () => l,
                Uc: () => i,
                hv: () => n
            })
        },
        879685: (e, t, a) => {
            function n(e) {
                let t = e.blocks.at(0);
                return !!(null == t ? void 0 : t.isPeopleCollectionViewPage())
            }
            a.d(t, {
                _: () => n
            }), a(18107), a(967357)
        },
        880265: (e, t, a) => {
            a.d(t, {
                m: () => n
            });

            function n(e) {
                if (!e || !e.isType(a(955630).xd.alias)) return !1;
                let t = e.getAliasTargetStore();
                return !!((null == t ? void 0 : t.isTable(a(832375).evP)) && t instanceof a(970831).B && t.isType(a(955630).xd.form))
            }
        },
        887175: (e, t, a) => {
            function n(e) {
                return e.blocks.every(e => e.isNavigableBlock())
            }
            a.d(t, {
                _: () => n
            }), a(898992), a(823215)
        },
        887329: (e, t, a) => {
            a.d(t, {
                i: () => o
            }), a(18107), a(967357), a(898992), a(823215);
            let n = (0, a(109939).YK)({
                    fullScreenName: {
                        id: "action.fullScreen.name",
                        defaultMessage: "Full screen"
                    }
                }),
                o = (0, a(233319).Fw)({
                    key: "full screen",
                    displayName: n.fullScreenName,
                    analyticsName: n.fullScreenName.defaultMessage,
                    svg: a(140758).R,
                    validators: [a(21848).v, a(560063).I, function(e) {
                        return e.blocks.every(e => {
                            let t = a(496704).K.findBlockFromStoreWithMethod(e, "canRenderFullScreen");
                            return !!(t && t.canRenderFullScreen())
                        })
                    }, (0, a(572251).A)(a(653601).c), (0, a(572251).A)(a(341133).w)],
                    shortcuts: ["space"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "full_screen"
                    },
                    action: (e, {
                        environment: t,
                        blocks: n
                    }, o) => {
                        let i = n.at(0);
                        i && (0, a(2925).i)({
                            environment: t,
                            blockStore: i,
                            callback: e
                        })
                    }
                })
        },
        906864: (e, t, a) => {
            a.d(t, {
                F: () => n
            });

            function n(e) {
                return e.blocks && e.blocks.length > 1
            }
        },
        916612: (e, t, a) => {
            a.d(t, {
                A: () => o
            }), a(296540);
            var n = a(474848);
            let o = function({
                    imageURL: e,
                    imageWidth: t,
                    imageHeight: o,
                    caption: i,
                    title: r,
                    imageContainerStyle: s
                }) {
                    if (!e) return (0, n.jsx)(l, {
                        caption: i,
                        title: r,
                        style: {
                            width: t
                        }
                    }); {
                        let c = (0, a(703003).L)(e);
                        return (0, n.jsxs)("div", {
                            style: {
                                width: t || 200,
                                marginTop: 4,
                                marginBottom: 4
                            },
                            children: [(0, n.jsx)("div", {
                                style: {
                                    width: "100%",
                                    height: o || 100,
                                    borderRadius: 4,
                                    backgroundImage: `url(${c})`,
                                    backgroundSize: "cover",
                                    marginBottom: 6,
                                    ...s
                                }
                            }), (0, n.jsx)(l, {
                                caption: i,
                                title: r
                            })]
                        })
                    }
                },
                i = {
                    style0: {
                        fontWeight: a(699422).Wy.bold,
                        marginBottom: 4
                    },
                    style1: {
                        whiteSpace: "normal",
                        lineHeight: 1.4
                    }
                };

            function l({
                style: e,
                caption: t,
                title: a
            }) {
                return (0, n.jsxs)("div", {
                    style: { ...i.style1,
                        ...e
                    },
                    children: [a ? (0, n.jsx)("header", {
                        style: i.style0,
                        children: a
                    }) : void 0, t]
                })
            }
        },
        923147: (e, t, a) => {
            function n(e) {
                var t;
                let a = e.blocks.at(0);
                return !!((null == a ? void 0 : a.isCollectionView()) && ((null == (t = a.getCollectionStores()) ? void 0 : t.length) ? ? 0) > 0)
            }
            a.d(t, {
                a: () => n
            }), a(18107), a(967357)
        },
        961511: (e, t, a) => {
            a.d(t, {
                s: () => n
            });

            function n(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "rich_text_menu_click",
                        eventProperties: t
                    }
                })
            }
        },
        963031: (e, t, a) => {
            a.d(t, {
                M: () => n
            }), a(898992), a(823215);

            function n(e) {
                let {
                    environment: t
                } = e;
                return e.blocks.every(e => a(862085).MI({
                    environment: t,
                    blockStore: e
                }))
            }
        },
        964049: (e, t, a) => {
            a.d(t, {
                F: () => o
            });
            let n = (0, a(109939).YK)({
                suggestName: {
                    id: "action.suggest.name",
                    defaultMessage: "Suggest edits"
                }
            });

            function o(e) {
                return (0, a(233319).Fw)({
                    key: "suggest",
                    displayName: n.suggestName,
                    analyticsName: n.suggestName.defaultMessage,
                    svg: a(594965).a,
                    hideFromSlashActionMenu: !0,
                    validators: [(0, a(572251).A)(a(803254).F), a(502272).$, (0, a(572251).A)(a(99378).v), a(211129).Y, a(507667)._h, a(507667).bn, (0, a(515914).or)([a(21848).v, a(696388).T]), (0, a(572251).A)(a(183205).y)],
                    shortcuts: ["suggest"],
                    closeParentMenu: !0,
                    action: ({
                        blocks: t,
                        environment: n
                    }) => {
                        t[0] && a(718490).tf({
                            environment: n,
                            navigableBlockStore: t[0],
                            mode: "suggest",
                            location: e
                        })
                    }
                })
            }
        },
        972831: (e, t, a) => {
            a.d(t, {
                Sv: () => d,
                g$: () => c,
                vc: () => s
            }), a(898992), a(823215), a(354520);
            var n = () => a(970831),
                o = () => a(642157),
                i = () => a(862085),
                l = () => a(528991),
                r = () => a(484712);

            function s({
                environment: e,
                publicEditMode: t,
                blocks: n
            }) {
                if (a(420153).l.state) return !1;
                let {
                    id: l
                } = e.currentUser;
                return !(!l || (0, a(45262).Q)(t)) && n.every(e => (0, i().A$)({
                    userId: l,
                    store: e
                }).filter(({
                    type: t,
                    role: a
                }) => {
                    if (!a) return !1;
                    let n = e.isCollectionView() || e.isTemplate() ? o().lg(a) : o().p2(a);
                    return "public_permission" !== t && n
                }).length > 0)
            }

            function c({
                environment: e,
                publicEditMode: t,
                blocks: s
            }) {
                if (a(420153).l.state) return {
                    canDelete: !1,
                    reason: {
                        key: "other"
                    }
                };
                let {
                    id: d
                } = e.currentUser;
                if (!d || (0, a(45262).Q)(t)) return {
                    canDelete: !1,
                    reason: {
                        key: "other"
                    }
                };
                let u = a(728372).AppStoreSidebarSpaceViewStore.state;
                for (let t of s) {
                    if (0 === (0, i().A$)({
                            userId: d,
                            store: t
                        }).filter(({
                            type: e,
                            role: a
                        }) => {
                            if (!a) return !1;
                            let n = t.isCollectionView() || t.isTemplate() ? o().lg(a) : o().p2(a);
                            return "public_permission" !== e && n
                        }).length) return {
                        canDelete: !1,
                        reason: {
                            key: "noEditAccess"
                        }
                    };
                    if (!(i().MI({
                            environment: e,
                            blockStore: t
                        }) || (0, l().K)(t) && (0, r().U)(u))) {
                        let e = t.getParentStore();
                        return {
                            canDelete: !1,
                            reason: {
                                key: "needsParentEditAccess",
                                parentStore: e instanceof n().B ? e : void 0
                            }
                        }
                    }
                }
                return {
                    canDelete: !0
                }
            }

            function d(e) {
                return c(e).canDelete
            }
        },
        973929: (e, t, a) => {
            a.d(t, {
                N: () => n
            });

            function n() {
                let {
                    resultsStore: e
                } = a(475097).default.state, t = null == e ? void 0 : e.getState();
                if (a(475097).default.state.open && t) {
                    let {
                        targetStore: e
                    } = a(475097).default.state, n = t.findIndex(t => t.id === e.id), o = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                    if (o && n > 0) {
                        let e = o.environment,
                            i = (0, a(483227).J8)({
                                store: o,
                                fullyQualified: !1,
                                peekViewBlockId: t[n - 1].id,
                                peekMode: (0, a(475097).getUrlParamFromPeekMode)(a(475097).default.state.mode),
                                pageVisitSource: a(254656).y8.PeekScroll,
                                chatThreadId: (0, a(384899).l)(e)
                            });
                        (0, a(79266).navigate)({
                            environment: e,
                            url: i
                        }), a(20557).EK(e, {
                            direction: "up"
                        })
                    }
                }
            }
        },
        974226: (e, t, a) => {
            a.d(t, {
                P: () => n
            });

            function n(e) {
                let t = (0, a(888).$)(e.pageContext);
                return (0, a(916804).I)(t)
            }
        },
        977003: (e, t, a) => {
            a.d(t, {
                i: () => n
            });

            function n({
                environment: {
                    device: e
                }
            }) {
                return e.isNative
            }
        },
        986758: (e, t, a) => {
            a.d(t, {
                k: () => o,
                o: () => n
            });
            let n = (0, a(233319).Ls)({
                    key: "copy link to page",
                    displayName: a(233319).AY.copyLinkNavigableTypeName,
                    analyticsName: a(233319).AY.copyLinkNavigableTypeName.defaultMessage,
                    svg: a(588739).linkIcon,
                    validators: [a(26313).M, a(21848).v, a(887175)._, (0, a(572251).A)(a(983173).i), (0, a(572251).A)(a(804043).o)],
                    closeParentMenu: !0,
                    track: {
                        actionName: "copy_block_link"
                    },
                    lazyDependencyKeys: ["clipboardActions"],
                    action: (e, {
                        environment: t,
                        blocks: n
                    }, o) => {
                        let i = (0, a(968864).Y)("clipboardActions");
                        i ? i.copyLinkToBlock({
                            environment: t,
                            blockStore: n[0],
                            callback: e
                        }) : a(773352).log({
                            data: {
                                miscDataToConvertToString: {
                                    actionKey: "copy link to page"
                                }
                            },
                            from: "copyActionRegistry",
                            level: "info",
                            type: "lazyDependencies:missingClipboardActions"
                        })
                    }
                }),
                o = (0, a(233319).Fw)({
                    key: "copy link to block",
                    displayName: a(233319).AY.copyLinkName,
                    analyticsName: a(233319).AY.copyLinkName.defaultMessage,
                    svg: a(588739).linkIcon,
                    shortcuts: ["copyLinkToBlock"],
                    validators: [a(26313).M, a(21848).v, (0, a(572251).A)(a(887175)._), (0, a(572251).A)(a(983173).i), (0, a(572251).A)(a(685632).b), (0, a(572251).A)(a(263583).I)],
                    closeParentMenu: !0,
                    track: {
                        actionName: "copy_block_link"
                    },
                    lazyDependencyKeys: ["clipboardActions"],
                    action: (e, {
                        environment: t,
                        blocks: n
                    }, o) => {
                        let i = (0, a(968864).Y)("clipboardActions");
                        i ? i.copyLinkToBlock({
                            environment: t,
                            blockStore: n[0],
                            callback: e
                        }) : a(773352).log({
                            data: {
                                miscDataToConvertToString: {
                                    actionKey: "copy link to block"
                                }
                            },
                            from: "copyActionRegistry",
                            level: "info",
                            type: "lazyDependencies:missingClipboardActions"
                        })
                    }
                })
        },
        988318: (e, t, a) => {
            a.d(t, {
                t: () => n
            });

            function n({
                environment: {
                    device: e
                }
            }) {
                return e.isPhone
            }
        },
        993186: (e, t, a) => {
            a.d(t, {
                $: () => n
            }), a(898992), a(823215);

            function n(e) {
                return e.blocks.every(e => {
                    var t;
                    return !!(null == (t = e.recordStoreUIParentStore) ? void 0 : t.findRecordStoreUIAncestor(e => e instanceof a(547131).p || e instanceof a(970831).B && e.isCollectionView()).ancestor)
                })
            }
        },
        993581: (e, t, a) => {
            a.d(t, {
                c5: () => g,
                kR: () => c,
                sp: () => m,
                DZ: () => r,
                t3: () => d
            }), a(18107), a(967357), a(581454), a(296540);
            let n = new(a(815048)).O2("NewPageInMenu", async () => Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(71562), a.e(26361), a.e(16471), a.e(37353), a.e(62475), a.e(3151), a.e(98629), a.e(42838), a.e(30085), a.e(8142), a.e(8360), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(54951), a.e(43444), a.e(23979), a.e(17250), a.e(28048), a.e(93430), a.e(55940), a.e(12560), a.e(88268), a.e(12001), a.e(40198), a.e(31243), a.e(86662), a.e(14886), a.e(39225), a.e(87971), a.e(2626), a.e(64453), a.e(4779), a.e(76361), a.e(56308), a.e(55067), a.e(83490), a.e(58360), a.e(82538), a.e(12690), a.e(60262), a.e(72805), a.e(2276), a.e(90735), a.e(50354), a.e(3723), a.e(40716), a.e(14231), a.e(78311), a.e(4287), a.e(44724), a.e(48095), a.e(69193), a.e(67098), a.e(10188), a.e(75484), a.e(97711), a.e(18802), a.e(59133), a.e(20957), a.e(32664), a.e(3055), a.e(67252), a.e(20491), a.e(70506), a.e(62146), a.e(23639), a.e(24394), a.e(72143), a.e(53478), a.e(38998), a.e(78295), a.e(38539), a.e(75651), a.e(31061)]).then(a.bind(a, 770866))),
                o = (0, a(815048).jQ)(n, e => e.default);
            var i = a(474848);
            let l = {
                    column_list: !0,
                    transclusion_container: !0
                },
                r = (0, a(109939).YK)({
                    turnIntoSection: {
                        id: "action.section.turnInto",
                        defaultMessage: "Turn into"
                    },
                    newPageInName: {
                        id: "action.pageIn.name",
                        defaultMessage: "Page in"
                    },
                    turnIntoMention: {
                        id: "action.turnIntoMention",
                        defaultMessage: "Turn into mention"
                    }
                }),
                s = (0, a(233319).Ls)({
                    key: "new page in section",
                    displayName: r.newPageInName,
                    analyticsName: r.newPageInName.defaultMessage,
                    closeParentMenu: !0,
                    svg: a(865213).Y,
                    hideFromSlashActionMenu: !0,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), (0, a(572251).A)((0, a(686412).X)("page")), (0, a(572251).A)(a(341133).w), a(211129).Y, a(689441).p],
                    render: (e, t, a) => {
                        let {
                            onFocus: n,
                            onAccept: l,
                            extendItemTitle: c,
                            sectionTitle: d
                        } = a;
                        return (0, i.jsx)(o, { ...e,
                            title: r.newPageInName,
                            sectionTitle: d ? ? "",
                            showSectionTitle: !!c,
                            blocksToTransform: t.blocks,
                            onFocus: n,
                            onAccept: l ? () => l(s, t, void 0) : void 0
                        })
                    },
                    action: e => {}
                });

            function c() {
                let e, t, n, o;
                return (0, a(233319).gy)({
                    key: "turn into actions",
                    title: r.turnIntoSection,
                    actions: (t = (e = (0, a(722371).objectKeys)(a(955630).Si)).findIndex(e => "page" === e), n = e.map(e => u(e)), o = Object.values(a(955630).sh).map(e => u(e)), [...n.slice(0, t + 1), s, ...n.slice(t + 1), ...o])
                })
            }
            let d = c();

            function u(e) {
                let t = a(992140).ry[e],
                    n = l[e];
                return {
                    key: `turn into ${e}`,
                    displayName: t.displayName,
                    analyticsName: t.analyticsName,
                    analyticsActionType: "turn_block_into",
                    searchName: t.searchName,
                    validators: a(381453).oE([a(998256).p, n ? void 0 : a(689441).p, a(211129).Y, "transclusion_container" === e ? (0, a(648903).U)([(0, a(572251).A)(a(128089).u), p]) : void 0, "header_4" === e || "toggle_format_header_4_block" === e ? a(11788).n : void 0, (0, a(955630).ZK)(e) ? e => 1 === e.blocks.length : void 0, (0, a(955630).nH)(e) ? e => !1 : void 0, "column_list" === e ? e => {
                        if (!e.blocks) return !1;
                        let t = e.blocks.length;
                        if (t < 2 || t > 5) return !1;
                        let a = e.blocks[0].getParentBlockStore();
                        if (!a) return !1;
                        let n = e.blocks.map(e => {
                            let t = e.getParentBlockStore();
                            return (null == t ? void 0 : t.id) !== a.id ? -1 : a.getRenderableContentIds().indexOf(e.id)
                        });
                        for (let e = 0; e < n.length; e++)
                            if (e > 0 && n[e - 1] + 1 !== n[e]) return !1;
                        return !0
                    } : void 0, (0, a(955630).D)(e) ? () => !0 : void 0, "mermaid_code_block" === e ? () => !1 : void 0]),
                    shortcuts: "transclusion_container" === e ? ["group"] : void 0,
                    closeParentMenu: !0,
                    action: (0, a(233319).G9)("turn_into", async (t, {
                        environment: n,
                        blocks: o,
                        pageContext: i
                    }) => {
                        var l;
                        let r = await (0, a(411648).zQ)(),
                            s = null == i || null == (l = i.spaceStore) ? void 0 : l.getSpaceId(),
                            {
                                serverCommitResult: c,
                                transactionId: d
                            } = (0, a(377796).createAndCommit)({
                                userAction: `actionRegistry.turnIntoAction.${e}`,
                                environment: n,
                                cellTarget: s ? {
                                    spaceWithId: s
                                } : void 0,
                                canUndo: !0,
                                perform: t => {
                                    r({
                                        environment: n,
                                        blocks: o,
                                        blockType: e,
                                        transaction: t
                                    })
                                }
                            });
                        return t.setMetadata({
                            transactionId: d
                        }), c.then(t)
                    }),
                    render: (e, a, n) => (0, i.jsx)(f, {
                        props: e,
                        context: a,
                        parent: n,
                        item: t
                    }),
                    nativeImageReference: () => (0, a(233319).eW)({
                        thumbnail: t.mobileNativeThumbnail ? t.mobileNativeThumbnail() : t.thumbnail
                    })
                }
            }

            function p(e) {
                return !(0, a(696388).T)() || (0, a(653601).c)() && (0, a(906864).F)(e)
            }

            function m(e, t) {
                let n = e.blocks[0];
                return !!n && n.getType() === t.blockType && (!(0, a(955630).CN)(t.blockType) || (n.getFormat().toggleable ? ? !1) === t.key.includes("toggle"))
            }
            let g = (0, a(233319).Ls)({
                key: "turn to mention",
                displayName: r.turnIntoMention,
                analyticsName: r.turnIntoMention.defaultMessage,
                validators: [a(998256).p, a(685632).b],
                closeParentMenu: !0,
                svg: a(84697).arrowSquarePathUpDownIcon,
                action: ({
                    blocks: e,
                    environment: t
                }) => {
                    let n = e.at(0);
                    null != n && n.isType(a(955630).xd.alias) && a(831983).Ff(t, n)
                }
            });

            function f({
                props: e,
                context: t,
                parent: n,
                item: o
            }) {
                let {
                    extendItemTitle: l,
                    sectionTitle: r,
                    styles: s
                } = n, c = (0, a(682985).K8)(() => m(t, o), [t, o]);
                return (0, i.jsx)(a(869770).Ay, { ...e,
                    ...o,
                    title: o.displayName,
                    format: a(869770).og.TurnInto,
                    selected: c,
                    showSectionTitle: !!l,
                    sectionTitle: r ? ? "",
                    desktopTitleStyle: null == s ? void 0 : s.desktopTitleStyle
                })
            }
        }
    }
]);